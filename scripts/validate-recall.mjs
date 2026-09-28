// Structural and identity validator for the recalled-question bank.
//
// The recalled bank ships ~1000 questions that were reconstructed from PDF
// extraction + LLM parsing + variant expansion, so the failure modes are
// different from the formula bank: mojibake, template artifacts, dropped
// fields, and variant groups that lost a copy. This validator catches those
// mechanically. It also runs two domain heuristics that feed the known
// reconciliation work:
//
//   1. ELECTRICAL mislabel check - questions whose text is dominated by
//      farm-electrification vocabulary but are tagged area 'A' (area C owns
//      farm-electrification in the TOS).
//   2. TOS coverage inventory - distinct subTopic/topic strings per area with
//      counts, and the area balance vs the TOS percentages (A 32 / B 32 / C 36).
//
// Exit code is 1 when any FAIL exists, 0 otherwise. WARNs are printed but do
// not fail the run.
//
// Run: npm run verify:recall

import path from 'node:path';
import { loadTsModule } from './lib/load-ts.mjs';

const FAILURES = [];
const WARNINGS = [];
const INFO = [];

function fail(id, check, msg) {
  FAILURES.push({ id, check, msg });
}

function warn(id, check, msg) {
  WARNINGS.push({ id, check, msg });
}

// Strong electrical-domain tokens. "motor"/"hp"/"horsepower" are deliberately
// excluded: they appear constantly in legitimate Area A power-machinery items
// and would drown the signal.
const ELECTRICAL = new Set([
  'electr'       // electric, electrical, electricity, electrified
  , 'voltage'
  , 'kilowatt'
  , 'kwh'
  , 'kilowatt-hour'
  , 'amperage'
  , 'ampere'
  , 'fuse'
  , 'ohm'
  , 'transformer'
  , 'lamp'
  , 'luminaire'
  , 'safety switch'
  , 'phase'
]);

const ID_RE = /^recall-(\d{4})-([ABC])-([a-z0-9-]+)-(\d+)-v(\d)$/;
const ARTIFACT_RX = /\uFFFD|\[object Object\]|\{\{|\}\}|\$\{|\bundefined\b|\bNaN\b/;
const AREAS = ['A', 'B', 'C'];
const DIFFICULTIES = ['easy', 'average', 'hard'];
const TYPES = ['computation', 'theory'];

const recalledMod = loadTsModule('src/data/recalled-questions.ts');
const questions = recalledMod.recalledQuestions;

// ---------- field scan helpers ----------

const STRING_FIELDS = (q) => [
  q.id, q.question,
  ...(q.options ?? []),
  q.solution?.given ?? null,
  q.solution?.formula ?? null,
  q.solution?.derive ?? null,
  q.solution?.keyConcept ?? null,
  ...(q.solution?.steps ?? []),
  ...(q.solution?.commonMistakes ?? []),
  ...(q.solution?.extraneousGivens ?? []),
];

const electricalHits = (text) => {
  const lower = text.toLowerCase();
  return [...ELECTRICAL].filter((token) => lower.includes(token));
};

// ---------- answer-consistency gate (computation variants) ----------
//
// The variant generator was told to rewrite each stem so a DIFFERENT option
// becomes "correct" (generate-recall-variants.mjs), and for computation items
// it routinely botches the rewrite: the stem/given/steps compute one value
// while the marked correct option is a different number. When the steps
// actually print a computed result (`= N` or `≈ N`), we can prove the marked
// option is wrong mechanically. This gate counts that class.

const RESULT_RX = /[=≈]\s*(-?\d[\d,]*(?:\.\d+)?)/g;

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
  return a === Math.round(b);
}

// Every `= N` / `≈ N` value printed in a single text (steps only — the formula
// and given blobs append coefficient literals and must not be scanned).
const resultNumsOf = (text) => {
  const out = [];
  for (const m of String(text).matchAll(RESULT_RX)) out.push(Number(m[1].replace(/,/g, '')));
  return out;
};

// ---------- per-question checks ----------

const qtextCount = new Map();

for (const q of questions) {
  const m = ID_RE.exec(q.id ?? '');
  const idOk = !!m;

  if (!idOk) {
    fail(q.id ?? '<no id>', 'id-format', 'id does not match recall-<year>-<area>-<topic>-<n>-v<m>');
  } else {
    const [, idYear, idArea] = m;

    if (!AREAS.includes(q.area)) {
      fail(q.id, 'area-value', `area field is '${q.area}', expected A|B|C`);
    } else if (q.area !== idArea) {
      fail(q.id, 'area-mismatch', `area field '${q.area}' disagrees with id '${idArea}'`);
    }

    const yearField = q.year;
    if (yearField === undefined || yearField === null) {
      fail(q.id, 'year-missing', 'year field is absent; question drops out of recalledQuestionsByYear');
    } else if (Number(yearField) !== Number(idYear)) {
      fail(q.id, 'year-mismatch', `year field ${yearField} disagrees with id ${idYear}`);
    } else if (yearField < 2021 || yearField > 2025) {
      fail(q.id, 'year-range', `year ${yearField} outside 2021-2025`);
    }
  }

  if (!DIFFICULTIES.includes(q.difficulty)) {
    fail(q.id, 'difficulty', `invalid difficulty '${q.difficulty}'`);
  }
  if (q.type !== undefined && !TYPES.includes(q.type)) {
    fail(q.id, 'type', `invalid type '${q.type}'`);
  }
  if (typeof q.subTopic !== 'string' || q.subTopic.trim() === '') {
    fail(q.id, 'subtopic-empty', 'subTopic is empty');
  }
  if (typeof q.topic !== 'string' || q.topic.trim() === '') {
    fail(q.id, 'topic-empty', 'topic is empty');
  }
  if (typeof q.question !== 'string' || q.question.trim().length < 8) {
    fail(q.id, 'question-short', 'question is missing or suspiciously short');
  }

  if (!Array.isArray(q.options) || q.options.length !== 4) {
    fail(q.id, 'options-count', `options has ${q.options?.length ?? 0} entries, expected 4`);
  } else {
    q.options.forEach((opt, i) => {
      if (typeof opt !== 'string' || opt.trim() === '') {
        fail(q.id, 'option-empty', `option ${i} is empty`);
      }
    });
    if (new Set(q.options.map((o) => String(o).trim().toLowerCase())).size !== 4) {
      fail(q.id, 'options-duplicate', 'two options are identical after trimming/lowercasing');
    }
    if (!Number.isInteger(q.correctAnswer) || q.correctAnswer < 0 || q.correctAnswer > 3) {
      fail(q.id, 'answer-index', `correctAnswer ${q.correctAnswer} not an integer in 0-3`);
    }
  }

  const sol = q.solution ?? {};
  if (typeof sol.steps !== 'object' || !Array.isArray(sol.steps) || sol.steps.length === 0) {
    fail(q.id, 'solution-steps', 'solution.steps missing or empty');
  }
  if (typeof sol.keyConcept !== 'string' || sol.keyConcept.trim() === '') {
    fail(q.id, 'solution-keyconcept', 'solution.keyConcept missing or empty');
  }
  if (q.type === 'computation' && (sol.formula === undefined || sol.formula === '' || sol.formula === 'N/A')) {
    fail(q.id, 'solution-formula', 'computation question has no formula');
  }

  for (const field of STRING_FIELDS(q)) {
    if (typeof field === 'string' && ARTIFACT_RX.test(field)) {
      fail(q.id, 'artifact', `string field contains extraction artifact: ${JSON.stringify(field.slice(0, 60))}`);
      break;
    }
  }

  // Domain heuristic: farm-electrification vocabulary on an Area A item.
  if (q.area === 'A') {
    const hits = electricalHits([
      q.question,
      ...(q.options ?? []),
      ...(sol.steps ?? []),
      sol.keyConcept ?? '',
      sol.formula ?? '',
    ].filter(Boolean).join(' '));
    if (hits.length >= 2) {
      warn(q.id, 'electrical-mislabel-candidate', `electrical vocabulary (${hits.join(', ')}) on Area A item: ${q.question.slice(0, 90)}`);
    }
  }

  const canon = q.question.trim().toLowerCase();
  qtextCount.set(canon, (qtextCount.get(canon) ?? 0) + 1);

  // A computation question must print at least one computed value, and the
  // marked correct option must be one of the printed values.
  if (q.type === 'computation' && sol.formula && sol.formula !== 'N/A') {
    const marked = parseNum(Array.isArray(q.options) ? q.options[q.correctAnswer] : null);
    const computed = resultNumsOf((sol.steps ?? []).join('\n'));
    if (computed.length && marked === null) {
      fail(q.id, 'answer-consistency', `steps compute ${computed.join(', ')} but the correct option has no numeric value`);
    } else if (computed.length && marked !== null && !computed.some((n) => numApproxEq(marked, n))) {
      fail(q.id, 'answer-consistency', `steps compute ${computed.join(', ')}; correctAnswer marks '${q.options[q.correctAnswer]}' (${marked}), which no computation produces`);
    }
  }
}

// ---------- cross-question checks ----------

// Group the questions in array order so we can tell complete variant groups
// apart from groups that interleave with other bases.
const byBase = new Map(); // base -> { positions: [], variants: <Set> }
questions.forEach((q, i) => {
  const m = ID_RE.exec(q.id ?? '');
  if (m === null) return;
  const base = m.slice(2, 5).join('-');
  const v = Number(m[5]);
  if (!byBase.has(base)) byBase.set(base, { positions: [], variants: new Set() });
  const group = byBase.get(base);
  group.positions.push(i);
  group.variants.add(v);
});

let completeGroups = 0;
let brokenGroups = 0;
let splitGroups = 0;
for (const [base, group] of byBase) {
  const missing = [0, 1, 2, 3].filter((v) => !group.variants.has(v));
  if (missing.length) {
    brokenGroups++;
    fail(base, 'variant-group', `missing variant${missing.length > 1 ? 's' : ''} v${missing.join(', v')}`);
    continue;
  }
  completeGroups++;
  const consecutive = group.positions.every((pos, idx) => idx === 0 || pos === group.positions[idx - 1] + 1);
  if (!consecutive) {
    splitGroups++;
    fail(base, 'variant-adjacency', `all 4 variants present but stored at non-consecutive rows (${group.positions.join(', ')}); the four copies of a base must stay adjacent`);
  }
}

// Duplicate stem text = one question used twice with (likely) two different
// answers marked correct, which is an incoherence the bank must not ship.
for (const [text, count] of qtextCount) {
  if (count <= 1) continue;
  for (const q of questions) {
    if (q.question.trim().toLowerCase() === text) {
      fail(q.id, 'duplicate-text', `stem duplicated across ${count} questions`);
    }
  }
}

// ---------- report ----------

const EXAMPLES_PER_CHECK = 5;

function printGroup(title, entries) {
  if (!entries.length) return;
  console.log(`\n${title} (${entries.length})`);
  const byCheck = new Map();
  for (const e of entries) {
    if (!byCheck.has(e.check)) byCheck.set(e.check, []);
    byCheck.get(e.check).push(e);
  }
  for (const [check, items] of byCheck) {
    console.log(`  [${check}] ${items.length} item(s)`);
    for (const { id, msg } of items.slice(0, EXAMPLES_PER_CHECK)) {
      console.log(`      ${id}: ${msg}`);
    }
    if (items.length > EXAMPLES_PER_CHECK) {
      console.log(`      ... and ${items.length - EXAMPLES_PER_CHECK} more`);
    }
  }
}

// ---------- TOS / inventory report ----------

const areaCounts = { A: 0, B: 0, C: 0 };
const yearCounts = {};
const subTopicInventory = new Map();
const topicInventory = new Map();

for (const q of questions) {
  if (AREAS.includes(q.area)) areaCounts[q.area]++;
  const y = q.year ?? 'none';
  yearCounts[y] = (yearCounts[y] ?? 0) + 1;
  const stKey = `${q.area} / ${q.subTopic}`;
  subTopicInventory.set(stKey, (subTopicInventory.get(stKey) ?? 0) + 1);
  const tpKey = `${q.area} / ${q.topic}`;
  topicInventory.set(tpKey, (topicInventory.get(tpKey) ?? 0) + 1);
}

const total = questions.length;
const noYear = yearCounts['none'] ?? 0;
const dupTextTotal = [...qtextCount.entries()].filter(([, c]) => c > 1).length;

if (total > 0) {
  INFO.push(`question total: ${total}`);
  INFO.push(`per-area counts: ${Object.entries(areaCounts).map(([a, c]) => `${a}=${c} (${((c / total) * 100).toFixed(1)}% vs TOS A=32/B=32/C=36%)`).join(', ')}`);
  INFO.push(`per-year counts: ${Object.entries(yearCounts).map(([y, c]) => `${y}=${c}`).join(', ')}`);
  INFO.push(`distinct subTopic strings per area (${subTopicInventory.size}): ${[...subTopicInventory.keys()].join(' | ')}`);
  INFO.push(`distinct topic strings per area (${topicInventory.size}): ${[...topicInventory.keys()].join(' | ')}`);
  INFO.push(`questions with no usable year: ${noYear}`);
  INFO.push(`variant groups: ${completeGroups} complete+adjacent, ${brokenGroups} missing copies, ${splitGroups} split`);
  INFO.push(`duplicate question texts: ${dupTextTotal}`);
} else {
  INFO.push('NO QUESTIONS LOADED');
  fail('<dataset>', 'empty', 'recalledQuestions resolved to an empty array');
}

console.log('');
console.log('=== RECALLED-QUESTION VALIDATOR ===');
const line = (prefix, s) => console.log(`${prefix} ${s}`);
if (INFO.length) console.log('\nINFORMATIONAL');
for (const s of INFO) line('  ', s);

printGroup(`WARNINGS — review, not fatal`, WARNINGS);
printGroup('FAILURES', FAILURES);

console.log(`\nRESULT: ${FAILURES.length} failures, ${WARNINGS.length} warnings over ${total} questions`);
process.exit(FAILURES.length ? 1 : 0);