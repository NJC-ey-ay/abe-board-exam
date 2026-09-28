// Rebuild the recalled-question bank as "verbatim original + value-tailored
// computation siblings".
//
// For every parsed source question (recalled-questions-parsed.json) that has a
// valid correctAnswer we emit v0 = the PDF question VERBATIM (question,
// options, correctAnswer untouched). The source answer is therefore always
// preserved — never rotated.
//
// For COMPUTATION questions we additionally try to emit up to 3 siblings
// (v1,v2,v3), one per non-answer choice. Each sibling keeps the SAME 4-option
// set and keeps the original method, but changes the input numbers so the
// computed result equals that option's value (1+1=2 -> 2+2=4, 2+1=3, 1+0=1).
// A sibling is only written when its own solution steps RECOMPUTE to the
// target value; anything unprovable is dropped and logged, never shipped.
//
// Theory/factual questions ship as a single verbatim entry only — no invented
// sibling facts.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import OpenAI from 'openai';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const DATA = path.join(__dirname, '..', 'src', 'data');
const parsedQuestions = JSON.parse(fs.readFileSync(path.join(DATA, 'recalled-questions-parsed.json'), 'utf-8'));

const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENROUTER_API_KEY,
  defaultHeaders: { 'HTTP-Referer': 'https://abe-study.vercel.app' },
});

const MODEL = 'gpt-4o-mini';

// ---------- numeric helpers (mirror of the validator) ----------

const RESULT_RX = /[=≈]\s*(-?\d[\d,]*(?:\.\d+)?)/g;
const RANGE_RX = /(-?\d[\d,]*(?:\.\d+)?)\s*(?:to|–|—|\.\.\.?)\s*(-?\d[\d,]*(?:\.\d+)?)/i;
const ARTIFACT_RX = /\uFFFD|\[object Object\]|\{\{|\}\}|\$\{|\bundefined\b|\bNaN\b/;

function parseNum(s) {
  if (typeof s !== 'string') return null;
  const m = s.match(/(-?\d[\d,]*(?:\.\d+)?)/);
  return m ? Number(m[1].replace(/,/g, '')) : null;
}

function numApproxEq(a, b) {
  if (a === null || b === null) return false;
  if (a === b) return true;
  if (Math.abs(a - b) <= 0.02) return true;
  if (Math.abs(a - b) <= Math.abs(b) * 0.02) return true;
  return false;
}

// "0.35 to 0.45" / "8–12 m" style range option -> [lo, hi]; else null.
function optionRange(opt) {
  const m = String(opt).match(RANGE_RX);
  if (!m) return null;
  const lo = Number(m[1].replace(/,/g, ''));
  const hi = Number(m[2].replace(/,/g, ''));
  if (!Number.isFinite(lo) || !Number.isFinite(hi) || lo === hi) return null;
  return lo < hi ? [lo, hi] : [hi, lo];
}

// Last `= N` / `≈ N` value printed across the steps (units tolerated).
function lastNumericResult(steps) {
  const nums = [];
  for (const m of String(steps).matchAll(RESULT_RX)) nums.push(Number(m[1].replace(/,/g, '')));
  return nums.length ? nums[nums.length - 1] : null;
}

// Does an option's numeric target match a computed result?
function computedFitsOption(result, opt) {
  const range = optionRange(opt);
  if (range) {
    const [lo, hi] = range;
    const slop = Math.max(0.02, Math.abs(hi - lo) * 0.02);
    return result >= lo - slop && result <= hi + slop;
  }
  const value = parseNum(opt);
  if (value === null) return false;
  return numApproxEq(result, value);
}

// ---------- id / copy helpers ----------

function slugify(s) {
  return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'q';
}

function makeId(q, sourceIndex, variantIndex) {
  return `recall-${q.year}-${q.area}-${slugify(q.topic)}-${sourceIndex}-v${variantIndex}`;
}

// v0: the source question, byte-for-byte.
function makeOriginal(q, sourceIndex) {
  return {
    id: makeId(q, sourceIndex, 0),
    variantRole: 'original',
    sourceIndex,
    question: q.question,
    options: [...q.options],
    correctAnswer: q.correctAnswer,
    area: q.area,
    topic: q.topic,
    subTopic: q.subTopic,
    difficulty: q.difficulty,
    type: q.type,
    year: q.year,
    extraneousGivens: q.extraneousGivens ?? [],
    solution: {
      given: q.solution?.given ?? '',
      formula: q.solution?.formula ?? '',
      steps: q.solution?.steps ?? [],
      keyConcept: q.solution?.keyConcept ?? '',
      commonMistakes: q.solution?.commonMistakes ?? [],
    },
  };
}

// ---------- sibling generation ----------

function normalizeSibling(raw, source, targetIndex) {
  const targetValue = source.options[targetIndex];
  const steps = Array.isArray(raw?.solution?.steps) ? raw.solution.steps : [];

  // We do not trust the LLM's option list / answer index. The 4 options are
  // always the source's, and the target is always the target index. The
  // numeric gate decides whether this sibling is provable.
  const sibling = {
    variantRole: 'sibling',
    sourceIndex: source.sourceIndex,
    question: String(raw?.question ?? '').trim(),
    options: [...source.options],
    correctAnswer: targetIndex,
    area: source.area,
    topic: source.topic,
    subTopic: source.subTopic,
    difficulty: source.difficulty,
    type: 'computation',
    year: source.year,
    extraneousGivens: (raw?.extraneousGivens ?? []).map((g) => String(g)),
    solution: {
      given: String(raw?.solution?.given ?? ''),
      formula: String(raw?.solution?.formula ?? ''),
      steps,
      keyConcept: String(raw?.solution?.keyConcept ?? ''),
      commonMistakes: Array.isArray(raw?.solution?.commonMistakes) ? raw.solution.commonMistakes : [],
    },
  };
  return { sibling, targetValue };
}

function isProvableSibling({ sibling, targetValue, originalStem, familyStems }) {
  if (sibling.question.length < 8) return { ok: false, reason: 'stem too short/missing' };
  if (sibling.question === originalStem) return { ok: false, reason: 'stem identical to original' };
  if (familyStems.has(sibling.question.toLowerCase())) return { ok: false, reason: 'stem duplicates another sibling' };
  // Scan the string fields themselves, not the serialized object ({{ and }}
  // legitimately appear as JSON braces).
  const textFields = [
    sibling.question,
    ...sibling.options,
    sibling.solution.given,
    sibling.solution.formula,
    sibling.solution.keyConcept,
    ...sibling.solution.steps,
    ...sibling.solution.commonMistakes,
    ...sibling.extraneousGivens,
  ].join('\n');
  const artifact = textFields.match(ARTIFACT_RX);
  if (artifact) return { ok: false, reason: `extraction artifact present (${artifact[0]})` };
  if (sibling.solution.steps.length === 0) return { ok: false, reason: 'no solution steps' };
  const fmt = sibling.solution.formula;
  if (!fmt || fmt === 'N/A' || fmt === '') return { ok: false, reason: 'missing formula' };
  const result = lastNumericResult(sibling.solution.steps.join('\n'));
  if (result === null) return { ok: false, reason: 'steps contain no numeric = result' };
  if (!computedFitsOption(result, targetValue)) {
    return { ok: false, reason: `steps compute ${result}; must match '${targetValue}'` };
  }
  return { ok: true };
}

function buildSiblingPrompt(source, targetIndex) {
  const targetValue = source.options[targetIndex];
  const range = optionRange(targetValue);
  const targetClause = range
    ? `the computed result must fall within the range ${range[0]} to ${range[1]} (with units)`
    : `the computed result must be EXACTLY ${targetValue} (with units)`;

  const letter = String.fromCharCode(65 + targetIndex);
  const letters = source.options.map((_, i) => String.fromCharCode(65 + i)).join(', ');

  return {
    role: 'user',
    content: `ORIGINAL RECALLED COMPUTATION QUESTION (Philippine ABELE board exam):
${source.question}

OPTIONS (correct answer given in the exam: ${String.fromCharCode(65 + source.correctAnswer)} = "${source.options[source.correctAnswer]}"):
A. ${source.options[0]}
B. ${source.options[1]}
C. ${source.options[2]}
D. ${source.options[3]}

SOLUTION METHOD OF THE ORIGINAL:
----- given: ${source.solution?.given}
----- formula: ${source.solution?.formula}
----- steps: ${(source.solution?.steps ?? []).join(' ; ')}
----- keyConcept: ${source.solution?.keyConcept}

AREA: ${source.area}
TOPIC: ${source.topic}
SUBTOPIC: ${source.subTopic}
DIFFICULTY: ${source.difficulty}
YEAR: ${source.year}

TASK: Write a NEW computation question that uses the SAME method as the original but with CHANGED input numbers, such that ${targetClause}. The target is the option labeled "${targetValue}" (currently option ${letter}).

This is the same idea as: "1 + 1 = ?" (answer 2) becoming "2 + 2 = ?" (answer 4) to make choice "4" the correct answer.

REQUIREMENTS:
1. The new question must be a clearly DIFFERENT computation: different given numbers, fresh wording. It must NOT be a copy of the original statement.
2. The 4 options stay exactly as listed above (same options ${letters}, same strings, same order).
3. The correct option in the printed stem must be option ${letter} ("${targetValue}").
4. RE-DERIVE the solution so every calculation step is FULLY NUMERIC: each step must show the operation with the actual new numbers and its result using '= N' or '≈ N' WITH UNITS. The final computed result must satisfy the requirement above exactly.
5. Keep area, topic, subTopic, difficulty, type and year identical to the original.
6. Board-exam phrasing. Include 2-3 plausible extra numeric values in the question text that are NOT used in the calculation (extraneous givens).
7. Output ONLY valid JSON:
{
  "question": "...",
  "correctAnswer": <targetIndex>,
  "extraneousGivens": [...],
  "solution": { "given": "...", "formula": "...", "steps": ["...", "..."], "keyConcept": "...", "commonMistakes": [...] }
}`,
  };
}

async function generateSibling(source, targetIndex) {
  const completion = await openai.chat.completions.create({
    model: MODEL,
    messages: [
      {
        role: 'system',
        content:
          'You are an expert ABELE board exam question writer. You create NEW computation questions where a specific choice value is the provably correct result. Output ONLY valid JSON.',
      },
      buildSiblingPrompt(source, targetIndex),
    ],
    temperature: 0.2,
    max_tokens: 2500,
  });

  const content = completion.choices[0].message.content ?? '';
  const jsonMatch = content.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error('no JSON object in LLM response');
  return JSON.parse(jsonMatch[0]);
}

async function withRetry(fn, retries = 2) {
  for (let attempt = 0; ; attempt++) {
    try {
      return await fn();
    } catch (err) {
      if (attempt >= retries) throw err;
    }
  }
}

// ---------- main ----------

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  const checkpointPath = path.join(DATA, 'recalled-questions-variants.json.next');

  let all = [];
  let startIndex = 0;
  const seenOrigins = new Set();
  if (fs.existsSync(checkpointPath)) {
    try {
      all = JSON.parse(fs.readFileSync(checkpointPath, 'utf-8'));
      for (const x of all) if (x.variantRole === 'original') seenOrigins.add(x.sourceIndex);
      if (all.length) startIndex = Math.max(...seenOrigins) + 1;
      console.log(`Resuming from checkpoint: ${all.length} items already staged (next source index ${startIndex})`);
    } catch {
      console.log('Checkpoint unreadable; starting fresh');
      all = [];
    }
  }

  console.log(`Sources: ${parsedQuestions.length} (${parsedQuestions.filter((q) => q.type === 'computation').length} computation)`);

  const LIMIT = Number(process.env.RECALL_LIMIT || 0);
  const maxIndex = LIMIT > 0 ? Math.min(startIndex + LIMIT, parsedQuestions.length) : parsedQuestions.length;

  let skippedNoAnswer = 0;
  let skippedInvalid = 0;
  let originals = 0;
  let siblingsKept = 0;
  let siblingsAttempted = 0;

  for (let i = startIndex; i < maxIndex; i++) {
    const q = parsedQuestions[i];
    const base = { ...q, sourceIndex: i };

    if (!Number.isInteger(q.correctAnswer) || q.correctAnswer < 0 || q.correctAnswer > 3) {
      skippedNoAnswer++;
      console.log(`SKIP ${i}: no usable correctAnswer (${JSON.stringify(q.correctAnswer)})`);
      continue;
    }
    if (!Array.isArray(q.options) || q.options.length !== 4) {
      skippedInvalid++;
      console.log(`SKIP ${i}: options not 4 (${q.options?.length})`);
      continue;
    }

    const original = makeOriginal(q, i);
    all.push(original);
    originals++;
    const familyStems = new Set([original.question.toLowerCase()]);

    // Computation bases get value-tailored siblings for the other 3 choices.
    if (q.type === 'computation' && q.solution?.formula && q.solution.formula !== 'N/A') {
      for (const targetIndex of [0, 1, 2, 3]) {
        if (targetIndex === q.correctAnswer) continue;
        const targetValue = q.options[targetIndex];
        if (parseNum(targetValue) === null && optionRange(targetValue) === null) {
          console.log(`  skip sibling target ${String.fromCharCode(65 + targetIndex)}: '${targetValue}' has no numeric value to gate`);
          continue;
        }
        siblingsAttempted++;
        try {
          const raw = await withRetry(() => generateSibling(base, targetIndex));
          const { sibling, targetValue: tgt } = normalizeSibling(raw, base, targetIndex);
          const verdict = isProvableSibling({ sibling, targetValue: tgt, originalStem: original.question, familyStems });
          if (!verdict.ok) {
            console.log(`  drop sibling ${original.id} (target ${String.fromCharCode(65 + targetIndex)}): ${verdict.reason}`);
          } else {
            // variant numbering is allocated by order among kept siblings
            const baseId = original.id.replace(/-v0$/, '');
            const keptForThisBase = all.filter((x) => x.variantRole === 'sibling' && x.sourceIndex === i).length + 1;
            sibling.id = `${baseId}-v${keptForThisBase}`;
            familyStems.add(sibling.question.toLowerCase());
            all.push(sibling);
            siblingsKept++;
            console.log(`  ok v${keptForThisBase} ${baseId} target ${String.fromCharCode(65 + targetIndex)} (${tgt})`);
          }
        } catch (err) {
          console.log(`  FAIL sibling for ${q.question.slice(0, 60)} target ${String.fromCharCode(65 + targetIndex)}: ${err.message}`);
        }
        await sleep(150);
      }
    }

    if ((i + 1) % 5 === 0 || i === maxIndex - 1) {
      fs.writeFileSync(checkpointPath, JSON.stringify(all), 'utf-8');
      console.log(`checkpoint @${i + 1}: ${all.length} staged`);
    }
  }

  console.log(`\nOriginals: ${originals}, siblings kept: ${siblingsKept}/${siblingsAttempted}, skipped (no answer): ${skippedNoAnswer}, skipped (invalid): ${skippedInvalid}`);
  console.log(`Staged bank: ${all.length}`);

  if (LIMIT > 0) {
    console.log('--- SMOKE TEST (RECALL_LIMIT set): main file NOT written ---');
    return;
  }

  fs.writeFileSync(path.join(DATA, 'recalled-questions-variants.json'), JSON.stringify(all, null, 2), 'utf-8');
  fs.rmSync(checkpointPath, { force: true });
  console.log('Saved recalled-questions-variants.json');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});