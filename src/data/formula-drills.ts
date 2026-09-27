import type { Question, Area, Difficulty } from './comprehensive-questions';
import type { Formula } from './formulas';
import { areaFormulas } from './formulas';
import { enrichSpec } from './drill-content';
import { poolTheoryForFormula } from './drill-mock-link';

export interface DrillVar {
  symbol: string;
  ascii: string;
  label: string;
  unit: string;
  min: number;
  max: number;
  decimals: number;
}

export interface DecisionItem {
  scenario: string;
  question: string;
  options: string[];
  correct: number;
  rationale: string;
  paes?: string;
}

export interface MultiStepSpec {
  firstUnit: string;
  firstPhrase: string;
  secondUnit: string;
  secondPhrase: string;
  second: (stage1: number, v: Record<string, number>) => number;
  readError: (v: Record<string, number>, correct: number) => number;
}

// A single step in a chained multi-part word problem. Each stage's `compute`
// receives the numeric results of all prior stages (results[0..i-1]) plus the
// generated variable map, so later answers genuinely build on earlier ones.
export interface ChainStage {
  unit: string;                 // e.g. 'ha/h', '%'
  phrase: string;               // natural-language unknown, e.g. 'the theoretical field capacity'
  formulaText: string;          // step formula, e.g. 'C_t = (W × S) / 10'
  compute: (results: number[], vals: Record<string, number>) => number;
  decimals?: number;            // display precision for this stage's result (default 3)
}

// A chained multi-part word problem: one narrative + several linked sub-parts.
export interface ChainSpec {
  // The quantity the single final MCQ asks for; must reference one of the stages.
  finalStage: number;           // index into `stages` of the value the student must pick
  stageLabel?: (i: number) => string;  // e.g. 'Part 1', 'Part 2'
  stages: ChainStage[];
}

// Describes how a variable can be presented in an alternate (English/imperial)
// unit so the student must first convert to the formula's native unit.
export interface VarConversion {
  ascii: string;             // variable key in vals (matches DrillVar.ascii)
  unit: string;              // English display unit label, e.g. 'ft', 'mph'
  factor: number;            // display = nativeValue × factor (i.e. 1 native unit = factor English units)
  fromUnit?: string;         // native unit label (defaults to the DrillVar.unit)
  displayDecimals?: number;  // decimal precision for the display value (defaults to the DrillVar.decimals)
}

// A conversion actually applied to a generated question (used to build the solution step).
interface AppliedConversion {
  symbol: string;
  label: string;
  display: number;       // value as shown in the word problem (English units)
  displayDecimals: number;
  unit: string;          // English unit
  native: number;        // value in the formula's native unit
  nativeUnit: string;    // native unit
  toNative: number;      // multiply the English value by this to get the native value (1/factor)
}

export interface DrillSpec {
  formulaId: string;
  name?: string;               // optional display name (used when no formula entry exists)
  area: Area;
  unknown: string;
  vars: DrillVar[];
  compute: (v: Record<string, number>) => number;
  formulaText: string;
  keyConcept: string;
  mistakes: string[];
  distractors: ((v: Record<string, number>, correct: number) => number)[];
  unit: string;
  round?: number;
  // NEW: board-exam word-problem / decision support
  context?: string;
  unknownPhrase?: string;
  verb?: string;
  decision?: DecisionItem[];
  multiStep?: MultiStepSpec;
  chain?: ChainSpec;
  // Alternate (English) units for selected variables, so word problems can ask
  // the student to convert units before applying the formula.
  conversions?: VarConversion[];
}

interface Rng {
  rand: () => number;
  randBetween: (min: number, max: number) => number;
  pick: <T>(arr: T[]) => T;
  shuffle: <T>(arr: T[]) => T[];
}

// seeded PRNG so each call can produce different, reproducible content
function createRng(seedValue: number): Rng {
  let seed = seedValue >>> 0;
  const rand = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  const randBetween = (min: number, max: number) => min + rand() * (max - min);
  const pick = <T,>(arr: T[]): T => arr[Math.floor(rand() * arr.length)];
  const shuffle = <T,>(arr: T[]): T[] => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  return { rand, randBetween, pick, shuffle };
}
function roundStep(v: number, decimals: number): number {
  const f = 10 ** decimals;
  return Math.round(v * f) / f;
}

// global default rng (used at module scope, resolved lazily per call)
function defaultRng(): Rng {
  return createRng(Math.floor(Math.random() * 4294967296));
}

// shared helper: build 3 distinct distractors from a list of candidate generators
function distinctDistractors(rng: Rng, correct: number, gens: ((c: number) => number)[], candidates: number): number[] {
  const set = new Set<string>();
  const out: number[] = [];
  let guard = 0;
  while (out.length < candidates && guard < 800) {
    guard++;
    const g = rng.pick(gens);
    let val = g(correct);
    if (!isFinite(val) || val === undefined) continue;
    if (Math.abs(val - correct) < 1e-9 * Math.max(1, Math.abs(correct))) continue;
    if (Math.abs(val) < 1e-9) val = 0;
    const key = val.toPrecision(7);
    if (!set.has(key)) {
      set.add(key);
      out.push(val);
    }
  }
  // fallback fills
  while (out.length < candidates) {
    out.push(correct + rng.randBetween(0.5, 2) * (Math.abs(correct) + 1) * (rng.rand() < 0.5 ? 1 : -1));
  }
  return out;
}

function smartRound(n: number): number {
  if (n === 0) return 0;
  const abs = Math.abs(n);
  const d = Math.max(0, Math.min(6, Math.round(-Math.log10(abs) + 1)));
  return roundStep(n, d);
}

function fmtOption(n: number, decimals: number, unit: string): string {
  const v = roundStep(n, decimals);
  return `${v.toFixed(decimals)} ${unit}`.trim();
}

// Pick the smallest decimal precision that keeps the 4 numeric choices distinct when formatted.
function pickDecimals(correct: number, others: number[], unit: string, baseRound?: number): number {
  const start = baseRound ?? Math.max(0, Math.min(4, Math.round(-Math.log10(Math.abs(correct) || 1) + 1)));
  let dec = start;
  for (; dec <= 6; dec++) {
    const set = new Set<string>();
    set.add(fmtOption(correct, dec, unit));
    let ok = true;
    for (const o of others) {
      const s = fmtOption(o, dec, unit);
      if (set.has(s)) { ok = false; break; }
      set.add(s);
    }
    if (ok) return dec;
  }
  return 6;
}

// ---- board-exam word-problem synthesis ----

function fmtValue(n: number, decimals: number): string {
  const r = roundStep(n, decimals);
  return String(parseFloat(r.toFixed(decimals)));
}

// Build a natural-language sentence fragment for a given value in a given unit.
function valFragment(n: number, decimals: number, unit: string, label: string): string {
  const lbl = label.toLowerCase();
  // Efficiency-like quantities (given as a decimal) read more naturally as a percent in a word problem.
  if (unit === 'decimal' && /efficien|ratio|factor|decimal|portion|coeff|index/.test(lbl)) {
    const pct = n * 100;
    const dec = Math.max(0, decimals - 2);
    return `${String(parseFloat(pct.toFixed(dec)))}%`;
  }
  const num = fmtValue(n, decimals);
  if (!unit || unit === '' || unit === 'decimal') return num;
  if (unit === '%') return `${num}%`;
  return `${num} ${unit}`;
}

function article(word: string): string {
  if (!word) return '';
  const first = word.charAt(0).toLowerCase();
  return /[aeiou]/.test(first) ? 'an ' : 'a ';
}

// Build one natural-language fact piece for a variable, optionally presented in
// an alternate (English) unit. Returns the fragment to print plus, when a
// conversion was applied, an AppliedConversion record for the solution.
function buildVarFragment(spec: DrillSpec, v: DrillVar, value: number, useEnglish: boolean): { frag: string; applied?: AppliedConversion } {
  const conv = spec.conversions?.find(c => c.ascii === v.ascii);
  if (conv && useEnglish) {
    const displayDecimals = conv.displayDecimals ?? v.decimals;
    const display = roundStep(value * conv.factor, displayDecimals);
    const num = fmtValue(display, displayDecimals);
    const frag = `${num} ${conv.unit}`;
    return {
      frag,
      applied: {
        symbol: v.symbol,
        label: v.label,
        display,
        displayDecimals,
        unit: conv.unit,
        native: value,
        nativeUnit: conv.fromUnit ?? v.unit,
        toNative: 1 / conv.factor,
      },
    };
  }
  return { frag: valFragment(value, v.decimals, v.unit, v.label) };
}

// Build the natural-language fact list for the word problem, collecting any
// unit-conversion steps that were applied along the way.
function buildFacts(spec: DrillSpec, vals: Record<string, number>, useEnglish: boolean): { factList: string; conversions: AppliedConversion[] } {
  const pieces: string[] = [];
  const conversions: AppliedConversion[] = [];
  spec.vars.forEach((v, i) => {
    const { frag, applied } = buildVarFragment(spec, v, vals[v.ascii], useEnglish);
    const label = prettyLabel(v.label);
    const piece = `${article(label)}${label} of ${frag}`;
    pieces.push(i === spec.vars.length - 1 && spec.vars.length > 1 ? `and ${piece}` : piece);
    if (applied) conversions.push(applied);
  });
  return { factList: pieces.join(spec.vars.length > 2 ? ', ' : ' '), conversions };
}

// Solution lines describing each applied unit conversion.
function conversionStepLines(conversions: AppliedConversion[]): string[] {
  if (conversions.length === 0) return [];
  const lines = conversions.map(c => {
    const displayStr = `${fmtValue(c.display, c.displayDecimals)} ${c.unit}`;
    const nativeStr = `${fmtValue(roundStep(c.native, c.displayDecimals), c.displayDecimals)} ${c.nativeUnit}`;
    const mult = parseFloat(roundStep(c.toNative, 6).toFixed(6));
    return `${c.label} (${c.symbol}): convert ${displayStr} → ${c.nativeUnit} (${displayStr} × ${mult} = ${nativeStr})`;
  });
  return ['The given values are in English units; convert them to the formula\u2019s units first.', ...lines];
}

function prettyLabel(raw: string): string {
  return raw;
}

// Map the "unknown" symbol to a natural English phrase describing the quantity.
function unknownPhraseFor(spec: DrillSpec): string {
  if (spec.unknownPhrase) return spec.unknownPhrase;
  return `the value of ${spec.unknown}`;
}

function wordProblemQuestion(spec: DrillSpec, rng: Rng, vals: Record<string, number>, useEnglish: boolean): { question: string; conversions: AppliedConversion[] } {
  const context = spec.context?.trim() ?? 'an operation';
  const unknownPhrase = unknownPhraseFor(spec);
  const { factList, conversions } = buildFacts(spec, vals, useEnglish);

  const subject = context.charAt(0).toUpperCase() + context.slice(1);
  const verb = spec.verb ?? 'has';
  const q = `${subject} ${verb} ${factList}. What is ${unknownPhrase}?`;
  return { question: q, conversions };
}

// Build a theory Question from a specific hand-authored decision item (distinct
// per item, so multiple decision scenarios never collapse into one duplicate).
function buildDecisionFrom(spec: DrillSpec, rng: Rng, d: DecisionItem, tag: string): Question {
  const options = rng.shuffle(d.options.map((o, i) => ({ o, i }))).map(x => x.o);
  const correctIndexInShuffled = options.indexOf(d.options[d.correct]);
  const formula = spec.formulaText;
  const steps: string[] = [];
  steps.push(d.paes ? `Per ${d.paes}, the governing performance requirement is applied to this situation.` : 'The adequacy of the result is judged against the stated requirement.');
  steps.push('Compare the given/situation against the governing criterion.');
  steps.push('Select the option that correctly reflects whether the requirement is satisfied.');
  return {
    id: `${spec.formulaId}-decision-${tag}-${Math.floor(rng.rand() * 1e6)}`,
    area: spec.area,
    subTopic: 'equation-practice',
    topic: spec.formulaId,
    type: 'theory',
    difficulty: rng.pick(['average', 'average', 'hard', 'hard'] as Difficulty[]),
    question: `${d.scenario ? d.scenario + ' ' : ''}${d.question}`,
    options,
    correctAnswer: correctIndexInShuffled,
    solution: {
      given: `Situation: ${d.scenario || 'Decision scenario for ' + (spec.unknownPhrase || spec.unknown)}${d.paes ? `\nGoverning standard: ${d.paes}` : ''}`,
      steps,
      formula,
      keyConcept: d.rationale,
      commonMistakes: spec.mistakes,
      weakPoints: [spec.formulaId],
    },
    weakPoints: [spec.formulaId],
  };
}

// A safe, formula-specific "what does this symbol represent?" theory question
// derived entirely from the formula's own variable metadata (no external data).
function definitionTheoryQuestion(spec: DrillSpec, v: DrillVar, slot: number, rng: Rng): Question {
  const formula = spec.formulaText;
  const lbl = `${v.label}${v.unit ? ` (${v.unit})` : ''}`;
  const correctLabel = lbl;
  const used = new Set<string>([correctLabel.toLowerCase()]);
  const options: string[] = [correctLabel];
  for (const s of spec.vars) {
    if (s.ascii === v.ascii) continue;
    const x = `${s.label}${s.unit ? ` (${s.unit})` : ''}`;
    if (!used.has(x.toLowerCase())) { used.add(x.toLowerCase()); options.push(x); }
  }
  const genericPool = [
    'the total time of the operation', 'the amount of energy consumed',
    'the density of the material', 'the pressure head of the system',
    'the flow velocity through the system', 'the cross-sectional area of the flow path',
    'the temperature difference across the system', 'the mass flow rate',
    'the force applied to the system', 'the volume displaced by the system',
  ];
  for (const g of genericPool) {
    if (options.length >= 4) break;
    const s = g.replace(/^the /, '');
    if (!used.has(s.toLowerCase())) { used.add(s.toLowerCase()); options.push(s); }
  }
  const correct = options[0];
  const ordered = rng.shuffle(options);
  const correctIndexInShuffled = ordered.indexOf(correct);
  return {
    id: `${spec.formulaId}-theory-def-${slot}-${Math.floor(rng.rand() * 1e6)}`,
    area: spec.area,
    subTopic: 'equation-practice',
    topic: spec.formulaId,
    type: 'theory',
    difficulty: 'average',
    question: `In the formula ${formula}, what does the symbol ${v.symbol} represent?`,
    options: ordered,
    correctAnswer: correctIndexInShuffled,
    solution: {
      given: `Formula: ${formula}\nSymbol: ${v.symbol}`,
      steps: [
        `The symbol ${v.symbol} denotes the quantity ${v.label} in this formula.`,
        `Matching the symbol to its definition (${v.label}) and unit${v.unit ? ` (${v.unit})` : ''} identifies the correct quantity.`,
      ],
      formula,
      keyConcept: spec.keyConcept,
      commonMistakes: spec.mistakes,
      weakPoints: [spec.formulaId],
    },
    weakPoints: [spec.formulaId],
  };
}

// Build a pool of distinct, exam-style theory questions for a formula by combining
// (1) the formula's own authored decisions, (2) real mock-pool questions matched
// by topic/area, and (3) its variable-definition questions (fallback). Dedupes on
// question text so a session never repeats the same theory question. Priority is
// chosen so decisions/pool content (richer) fill first and plain definitions only
// appear when richer theory is exhausted.
function buildTheoryPool(spec: DrillSpec, rng: Rng): Question[] {
  const result: { rich: Question[]; fallback: Question[] } = { rich: [], fallback: [] };
  const seen = new Set<string>();
  const add = (bucket: 'rich' | 'fallback', q: Question) => {
    const key = (q.question || '').trim();
    if (!key || seen.has(key)) return;
    seen.add(key);
    result[bucket].push(q);
  };

  for (const d of spec.decision ?? []) add('rich', buildDecisionFrom(spec, rng, d, `d${result.rich.length}`));
  for (const q of poolTheoryForFormula(spec.formulaId, spec.area)) {
    add('rich', { ...q, subTopic: 'equation-practice', topic: spec.formulaId, weakPoints: [spec.formulaId, ...(q.weakPoints ?? [])] });
  }
  for (let di = 0; di < spec.vars.length; di++) {
    add('fallback', definitionTheoryQuestion(spec, spec.vars[di], di, rng));
  }
  const rich = rng.shuffle(result.rich);
  const fallback = rng.shuffle(result.fallback);
  const out = rich.slice(0, 3);
  if (out.length < 3) {
    for (const q of fallback) { if (out.length === 3) break; out.push(q); }
  }
  return out;
}


// Build numeric options that are all distinct when formatted, returned as {formatted, correct}
function buildChoices(spec: DrillSpec, rng: Rng, vals: Record<string, number>, correct: number): { choices: string[]; correctOption: string } {
  let choices: string[] = [];
  let guard = 0;
  while (guard < 60) {
    guard++;
    const dist = distinctDistractors(rng, correct, spec.distractors.map(gen => (c: number) => gen(vals, c)), 3);
    const dec = pickDecimals(correct, dist, spec.unit, spec.round);
    const cands = [correct, ...dist];
    const formatted = cands.map(n => fmtOption(n, dec, spec.unit));
    if (new Set(formatted).size === 4) {
      choices = formatted;
      break;
    }
  }
  return { choices, correctOption: choices[0] ?? '' };
}

function multiStepQuestion(spec: DrillSpec, rng: Rng, vals: Record<string, number>, idSeq: number, useEnglish: boolean): Question {
  const ms = spec.multiStep!;
  const stage1 = spec.compute(vals);
  const correct = ms.second(stage1, vals);
  // Build the word problem asking for the FIRST stage, then the derived second stage.
  const stage1Phrase = ms.firstPhrase || unknownPhraseFor(spec);
  const { factList, conversions } = buildFacts(spec, vals, useEnglish);
  const subject = (spec.context ?? 'an operation').charAt(0).toUpperCase() + (spec.context ?? 'an operation').slice(1);
  const question =
    `${subject} ${spec.verb ?? 'has'} ${factList}. First find ${stage1Phrase}, ` +
    `then determine ${ms.secondPhrase}.`;
  // Stage-2 distractors as simple variations of the derived result (the base
  // formula distractors target the stage-1 quantity and would be too far off).
  const msGens = [
    (c: number) => c * 1.1,
    (c: number) => c * 0.9,
    (c: number) => c * 0.5,
    (c: number) => c * 1.5,
    (c: number) => c + (ms.readError ? ms.readError(vals, c) : 0),
    (c: number) => c - (ms.readError ? ms.readError(vals, c) : 0),
  ];
  let choices: string[] = [];
  let dec = pickDecimals(correct, [], ms.secondUnit, spec.round);
  let guard = 0;
  while (guard < 60) {
    guard++;
    const dist = distinctDistractors(rng, correct, msGens, 3);
    const cands = [correct, ...dist];
    const formatted = cands.map(n => fmtOption(n, dec, ms.secondUnit));
    if (new Set(formatted).size === 4) {
      choices = formatted;
      break;
    }
    dec++;
  }
  const correctOption = choices[0] ?? '';
  const ord = rng.shuffle([0, 1, 2, 3]);
  const finalOptions = ord.map(i => choices[i]);
  const finalCorrect = ord.indexOf(0);
  const formula = spec.formulaText;
  return {
    id: `${spec.formulaId}-ms-${idSeq}`,
    area: spec.area,
    subTopic: 'equation-practice',
    topic: spec.formulaId,
    type: 'computation',
    difficulty: 'hard',
    question,
    options: finalOptions,
    correctAnswer: finalCorrect,
    solution: {
      given: `Stage 1: ${stage1Phrase} = ${smartRound(stage1)} ${ms.firstUnit}\nThen ${ms.secondPhrase}. ${spec.vars
        .map((v, i) => `${v.symbol} = ${vals[v.ascii].toFixed(v.decimals)} ${v.unit}`.trim())
        .join('; ')}`,
      steps: [
        ...conversionStepLines(conversions),
        `Step 1 — compute ${stage1Phrase}: ${formula}`,
        `Step 1 result: ${smartRound(stage1)} ${ms.firstUnit}`,
        `Step 2 — derive ${ms.secondPhrase} from the Step 1 result and the given data.`,
        `Step 2 result: ${correctOption}`,
      ],
      formula,
      keyConcept: spec.keyConcept,
      commonMistakes: spec.mistakes,
      weakPoints: [spec.formulaId],
    },
    weakPoints: [spec.formulaId],
  };
}

// Build a chained multi-part word problem: one narrative with several linked
// sub-parts (each result feeds the next). The single MCQ asks for the stage
// identified by chain.finalStage; the solution reveals the whole chain.
function chainQuestion(spec: DrillSpec, rng: Rng, vals: Record<string, number>, idSeq: number, useEnglish: boolean): Question {
  const chain = spec.chain!;
  const { factList, conversions } = buildFacts(spec, vals, useEnglish);
  const subject = (spec.context ?? 'an operation').charAt(0).toUpperCase() + (spec.context ?? 'an operation').slice(1);
  const verb = spec.verb ?? 'has';

  // Compute every stage in order, threading prior results forward.
  const results: number[] = [];
  for (const st of chain.stages) {
    results.push(st.compute(results, vals));
  }

  const finalIdx = chain.finalStage;
  const finalVal = results[finalIdx];
  const finalUnit = chain.stages[finalIdx].unit;
  const finalDec = chain.stages[finalIdx].decimals ?? spec.round ?? 3;

  // Distractors for the final (picked) stage only.
  const gens = [
    (c: number) => c * 1.1,
    (c: number) => c * 0.9,
    (c: number) => c * 0.5,
    (c: number) => c * 1.5,
    (c: number) => c * 0.8,
    (c: number) => c * 1.2,
  ];
  let choices: string[] = [];
  let dec = finalDec;
  let guard = 0;
  while (guard < 60) {
    guard++;
    const dist = distinctDistractors(rng, finalVal, gens, 3);
    const cands = [finalVal, ...dist];
    const formatted = cands.map(n => fmtOption(n, dec, finalUnit));
    if (new Set(formatted).size === 4) {
      choices = formatted;
      break;
    }
    dec++;
  }
  const correctOption = choices[0] ?? '';
  const ord = rng.shuffle([0, 1, 2, 3]);
  const finalOptions = ord.map(i => choices[i]);
  const finalCorrect = ord.indexOf(0);

  const label = chain.stageLabel ?? ((i: number) => `Part ${i + 1}`);
  const parts = chain.stages
    .map((s, i) => `${label(i)}: find ${s.phrase} (${s.unit})`)
    .join(' → ');

  const question =
    `${subject} ${verb} ${factList}. Work through the linked steps in order. ` +
    `${parts}. \n\nFinal answer: what is ${chain.stages[finalIdx].phrase}?`;

  const stepLines: string[] = [
    ...conversionStepLines(conversions),
  ];
  chain.stages.forEach((s, i) => {
    const res = smartRound(results[i]);
    const prior = i === 0
      ? 'Start with the given values.'
      : `Use the result ${smartRound(results[i - 1])} ${chain.stages[i - 1].unit} from ${label(i - 1)}.`;
    stepLines.push(
      `${label(i)} — ${s.phrase}:`,
      `  ${prior}`,
      `  Formula: ${s.formulaText}`,
      `  Result: ${res} ${s.unit}`,
    );
  });
  stepLines.push(`Final answer: ${correctOption}`);

  return {
    id: `${spec.formulaId}-chain-${idSeq}`,
    area: spec.area,
    subTopic: 'equation-practice',
    topic: spec.formulaId,
    type: 'computation',
    difficulty: 'hard',
    question,
    options: finalOptions,
    correctAnswer: finalCorrect,
    solution: {
      given: `Linked step problem. ${spec.vars
        .map((v, i) => `${v.symbol} = ${vals[v.ascii].toFixed(v.decimals)} ${v.unit}`.trim())
        .join('; ')}`,
      steps: stepLines,
      formula: chain.stages.map((s, i) => `${label(i)}: ${s.formulaText}`).join('\n'),
      keyConcept: spec.keyConcept,
      commonMistakes: spec.mistakes,
      weakPoints: [spec.formulaId],
    },
    weakPoints: [spec.formulaId],
  };
}

function buildQuestion(spec: DrillSpec, idSeq: number, rng: Rng, role: 'convert' | 'si' | 'theory', theoryForSlot?: Question): Question {
  // Theory roles are supplied a distinct, exam-style theory question pre-selected
  // for this session (never repeated). Fall back to a computation if none given.
  if (role === 'theory') {
    if (theoryForSlot) return theoryForSlot;
  }

  const vals: Record<string, number> = {};
  const givenLines: string[] = [];
  const varLines: string[] = [];
  for (const v of spec.vars) {
    let val = roundStep(rng.randBetween(v.min, v.max), v.decimals);
    vals[v.ascii] = val;
    const str = `${v.symbol} = ${val.toFixed(v.decimals)} ${v.unit}`.trim();
    givenLines.push(str);
    varLines.push(`- ${str}`);
  }

  // English-unit givens only when this slot is a 'convert' role.
  const useEnglish = role === 'convert';

  // Chained multi-part word problem (computation; unit mode still follows role).
  if (spec.chain) {
    return chainQuestion(spec, rng, vals, idSeq, useEnglish);
  }

  // Multi-step derived-input question when defined (a computation question; unit
  // mode still follows the role).
  if (spec.multiStep && idSeq % 3 === 1) {
    return multiStepQuestion(spec, rng, vals, idSeq, useEnglish);
  }

  const correct = spec.compute(vals);

  // Build a set of 3 numerically-distinct distractors, retrying until they
  // also format to distinct strings at the chosen precision.
  const { choices, correctOption } = buildChoices(spec, rng, vals, correct);
  const ord = rng.shuffle([0, 1, 2, 3]);
  const finalOptions = ord.map(i => choices[i]);
  const finalCorrect = ord.indexOf(0);

  const formula = spec.formulaText;

  // Word-problem narrative when a context is provided; otherwise fall back to the
  // classic "using the formula" presentation.
  let conversions: AppliedConversion[] = [];
  let question: string;
  if (spec.context) {
    const wp = wordProblemQuestion(spec, rng, vals, useEnglish);
    question = wp.question;
    conversions = wp.conversions;
  } else {
    question = `Using the formula ${formula}:\n${varLines.join('\n')}\nWhat is the value of ${spec.unknown}?`;
  }

  return {
    id: `${spec.formulaId}-drill-${idSeq}`,
    area: spec.area,
    subTopic: 'equation-practice',
    topic: spec.formulaId,
    type: 'computation',
    difficulty: rng.pick(['easy', 'average', 'average', 'hard'] as Difficulty[]),
    question,
    options: finalOptions,
    correctAnswer: finalCorrect,
    solution: {
      given: givenLines.join('\n'),
      steps: [
        ...conversionStepLines(conversions),
        `Write the formula: ${formula}`,
        'Substitute the given values:',
        ...varLines,
        `Evaluate: ${correctOption}`,
      ],
      formula,
      keyConcept: spec.keyConcept,
      commonMistakes: spec.mistakes,
      weakPoints: [spec.formulaId],
    },
    weakPoints: [spec.formulaId],
  };
}

export interface DrillMeta {
  formulaId: string;
  name: string;
  formula: string;
  area: Area;
  questionCount: number;
}

const specs: DrillSpec[] = [];

function add(...items: DrillSpec[]): void {
  specs.push(...items);
}

function findFormula(id: string): Formula | undefined {
  for (const c of areaFormulas) {
    for (const t of c.topics) {
      const f = t.formulas.find(x => x.id === id);
      if (f) return f;
    }
  }
  return undefined;
}

// ---------------------------------------------------------------------------
// AREA A: Power, Energy & Machinery
// ---------------------------------------------------------------------------
add(
  {
    formulaId: 'a-efc', area: 'A', unknown: 'C_a',
    formulaText: 'C_a = (W × S × E) / 10',
    unit: 'ha/h', round: 3,
    vars: [
      { symbol: 'W', ascii: 'W', label: 'working width', unit: 'm', min: 1.2, max: 6.0, decimals: 1 },
      { symbol: 'S', ascii: 'S', label: 'speed', unit: 'km/h', min: 3, max: 9, decimals: 0 },
      { symbol: 'E', ascii: 'E', label: 'field efficiency', unit: 'decimal', min: 0.6, max: 0.9, decimals: 2 },
    ],
    conversions: [
      { ascii: 'W', unit: 'ft', factor: 3.281, fromUnit: 'm' },
      { ascii: 'S', unit: 'mph', factor: 0.6214, fromUnit: 'km/h' },
    ],
    compute: v => (v.W * v.S * v.E) / 10,
    keyConcept: 'Effective field capacity = working width × speed × field efficiency, divided by 10.',
    mistakes: ['Using efficiency as a percent (80) instead of decimal (0.8)', 'Omitting the /10', 'Using speed in m/min instead of km/h'],
    distractors: [v => (v.W * v.S * v.E), v => (v.W * v.S) / 10, v => (v.W * v.S * v.E * 1.1), v => (v.W * v.S * v.E) / 10 / 10],
  },
  {
    formulaId: 'a-tfc', area: 'A', unknown: 'C_t',
    formulaText: 'C_t = (W × S) / 10',
    unit: 'ha/h', round: 3,
    vars: [
      { symbol: 'W', ascii: 'W', label: 'working width', unit: 'm', min: 1.5, max: 8.0, decimals: 1 },
      { symbol: 'S', ascii: 'S', label: 'speed', unit: 'km/h', min: 3, max: 10, decimals: 0 },
    ],
    conversions: [
      { ascii: 'W', unit: 'ft', factor: 3.281, fromUnit: 'm' },
      { ascii: 'S', unit: 'mph', factor: 0.6214, fromUnit: 'km/h' },
    ],
    compute: v => (v.W * v.S) / 10,
    keyConcept: 'Theoretical field capacity is capacity at 100% efficiency, with no time losses.',
    mistakes: ['Omitting the /10', 'Applying field efficiency (TFC is theoretical = 100% efficiency)', 'Unit confusion'],
    distractors: [v => v.W * v.S, v => (v.W * v.S) / 20, v => (v.W * v.S) / 10 * 0.8, v => (v.W * v.S) / 10 * 1.1],
  },
  {
    formulaId: 'a-field-efficiency', area: 'A', unknown: 'E',
    formulaText: 'E = (C_a / C_t) × 100%',
    unit: '%', round: 1,
    vars: [
      { symbol: 'C_a', ascii: 'Ca', label: 'actual capacity', unit: 'ha/h', min: 1.0, max: 6.0, decimals: 2 },
      { symbol: 'C_t', ascii: 'Ct', label: 'theoretical capacity', unit: 'ha/h', min: 2.0, max: 8.0, decimals: 2 },
    ],
    compute: v => (v.Ca / v.Ct) * 100,
    keyConcept: 'Field efficiency = actual ÷ theoretical capacity, × 100%.',
    mistakes: ['Forgetting ×100', 'Reversing the ratio (theoretical/actual)', 'Reporting a decimal instead of %'],
    distractors: [v => (v.Ca / v.Ct), v => (v.Ct / v.Ca) * 100, v => (v.Ca / v.Ct) * 100 * 1.1, v => (v.Ca / v.Ct) * 90],
  },
  {
    formulaId: 'a-multirow-efc', area: 'A', unknown: 'C',
    formulaText: 'C = (N × S_p × S × E) / 10',
    unit: 'ha/h', round: 3,
    vars: [
      { symbol: 'N', ascii: 'N', label: 'number of rows', unit: '', min: 2, max: 8, decimals: 0 },
      { symbol: 'S_p', ascii: 'Sp', label: 'row spacing', unit: 'm', min: 0.5, max: 1.0, decimals: 2 },
      { symbol: 'S', ascii: 'S', label: 'speed', unit: 'km/h', min: 4, max: 9, decimals: 0 },
      { symbol: 'E', ascii: 'E', label: 'efficiency', unit: 'decimal', min: 0.6, max: 0.9, decimals: 2 },
    ],
    conversions: [
      { ascii: 'Sp', unit: 'in', factor: 39.37, fromUnit: 'm' },
      { ascii: 'S', unit: 'mph', factor: 0.6214, fromUnit: 'km/h' },
    ],
    compute: v => (v.N * v.Sp * v.S * v.E) / 10,
    keyConcept: 'Multi-row planter capacity = rows × row spacing × speed × efficiency, ÷ 10.',
    mistakes: ['Treating efficiency as % instead of decimal', 'Forgetting /10', 'Using row spacing in cm'],
    distractors: [v => (v.N * v.Sp * v.S) / 10, v => (v.N * v.Sp * v.S * v.E), v => (v.N * v.Sp * v.S * v.E) / 10 * 1.1, v => (v.N * v.Sp * v.S * v.E) / 10 * 0.9],
  },
  {
    formulaId: 'a-harvest-output', area: 'A', unknown: 'O',
    formulaText: 'O = C × Y × t',
    unit: 't', round: 3,
    vars: [
      { symbol: 'C', ascii: 'C', label: 'field capacity', unit: 'ha/h', min: 0.4, max: 2.5, decimals: 2 },
      { symbol: 'Y', ascii: 'Y', label: 'crop yield', unit: 't/ha', min: 2, max: 7, decimals: 1 },
      { symbol: 't', ascii: 't', label: 'operating time', unit: 'h', min: 4, max: 10, decimals: 0 },
    ],
    compute: v => v.C * v.Y * v.t,
    keyConcept: 'Total harvest output = capacity × yield × time.',
    mistakes: ['Dividing instead of multiplying', 'Inconsistent units', 'Forgetting one factor'],
    distractors: [v => v.C * (v.Y + v.t), v => v.C * v.Y / v.t, v => v.C * v.Y * v.t * 2, v => v.C * v.Y * v.t * 0.5],
  },
  {
    formulaId: 'a-machine-time', area: 'A', unknown: 'T',
    formulaText: 'T = A / C',
    unit: 'h', round: 2,
    vars: [
      { symbol: 'A', ascii: 'A', label: 'area covered', unit: 'ha', min: 2, max: 20, decimals: 1 },
      { symbol: 'C', ascii: 'C', label: 'field capacity', unit: 'ha/h', min: 0.4, max: 3.0, decimals: 2 },
    ],
    compute: v => v.A / v.C,
    keyConcept: 'Machine operating time = area ÷ capacity.',
    mistakes: ['Multiplying instead of dividing', 'Inconsistent units', 'Reversing numerator/denominator'],
    distractors: [v => v.A * v.C, v => v.C / v.A, v => (v.A / v.C) * 2, v => (v.A / v.C) * 1.5],
  },
  {
    formulaId: 'a-boom-application', area: 'A', unknown: 'R',
    formulaText: 'R = q / C_a',
    unit: 'L/ha', round: 1,
    vars: [
      { symbol: 'q', ascii: 'q', label: 'total nozzle discharge', unit: 'L/min', min: 20, max: 80, decimals: 0 },
      { symbol: 'C_a', ascii: 'Ca', label: 'area coverage rate', unit: 'ha/min', min: 0.4, max: 2.0, decimals: 2 },
    ],
    compute: v => v.q / v.Ca,
    keyConcept: 'Boom application rate = discharge ÷ coverage rate.',
    mistakes: ['Multiplying instead of dividing', 'Unit mismatch (min vs h)', 'Reversing the ratio'],
    distractors: [v => v.q * v.Ca, v => v.Ca / v.q, v => v.q / v.Ca * 2, v => v.q / v.Ca * 0.5],
  },
  {
    formulaId: 'a-fuel-per-area', area: 'A', unknown: 'FC',
    formulaText: 'FC = V / A',
    unit: 'L/ha', round: 2,
    vars: [
      { symbol: 'V', ascii: 'V', label: 'total fuel consumed', unit: 'L', min: 30, max: 200, decimals: 0 },
      { symbol: 'A', ascii: 'A', label: 'area worked', unit: 'ha', min: 2, max: 20, decimals: 1 },
    ],
    compute: v => v.V / v.A,
    keyConcept: 'Fuel per area = total fuel ÷ area.',
    mistakes: ['Multiplying instead of dividing', 'Reversing ratio', 'Unit confusion'],
    distractors: [v => v.V * v.A, v => v.A / v.V, v => v.V / v.A * 1.2, v => v.V / v.A * 0.8],
  },
  {
    formulaId: 'a-thresher-capacity', area: 'A', unknown: 'C_a',
    formulaText: 'C_a = W_g / T_t',
    unit: 'kg/h', round: 1,
    vars: [
      { symbol: 'W_g', ascii: 'Wg', label: 'grain output', unit: 'kg', min: 500, max: 4000, decimals: 0 },
      { symbol: 'T_t', ascii: 'Tt', label: 'threshing time', unit: 'h', min: 1, max: 5, decimals: 1 },
    ],
    compute: v => v.Wg / v.Tt,
    keyConcept: 'Thresher capacity = grain output ÷ threshing time.',
    mistakes: ['Multiplying instead of dividing', 'Unit mismatch (t vs kg)', 'Reversing ratio'],
    distractors: [v => v.Wg * v.Tt, v => v.Tt / v.Wg, v => v.Wg / v.Tt * 1.1, v => v.Wg / (v.Tt * 2)],
  },
  {
    formulaId: 'a-threshing-loss', area: 'A', unknown: 'L_t',
    formulaText: 'L_t = L_b + L_s + L_u + L_sc',
    unit: 'kg', round: 1,
    vars: [
      { symbol: 'L_b', ascii: 'Lb', label: 'blower loss', unit: 'kg', min: 1, max: 8, decimals: 1 },
      { symbol: 'L_s', ascii: 'Ls', label: 'separation loss', unit: 'kg', min: 1, max: 8, decimals: 1 },
      { symbol: 'L_u', ascii: 'Lu', label: 'unthreshed grain loss', unit: 'kg', min: 1, max: 8, decimals: 1 },
      { symbol: 'L_sc', ascii: 'Lsc', label: 'scattering loss', unit: 'kg', min: 1, max: 8, decimals: 1 },
    ],
    compute: v => v.Lb + v.Ls + v.Lu + v.Lsc,
    keyConcept: 'Total threshing loss = sum of all individual loss components.',
    mistakes: ['Subtracting instead of adding', 'Omitting one loss component', 'Mixing units'],
    distractors: [v => v.Lb + v.Ls + v.Lu, v => v.Lb * v.Ls * v.Lu * v.Lsc, v => (v.Lb + v.Ls + v.Lu + v.Lsc) * 2, v => v.Lb + v.Ls - v.Lu + v.Lsc],
  },
  {
    formulaId: 'a-loss-percent', area: 'A', unknown: 'L%',
    formulaText: 'L% = L / (W_g + L) × 100%',
    unit: '%', round: 1,
    vars: [
      { symbol: 'L', ascii: 'L', label: 'total grain loss', unit: 'kg', min: 5, max: 50, decimals: 0 },
      { symbol: 'W_g', ascii: 'Wg', label: 'grain output', unit: 'kg', min: 500, max: 3000, decimals: 0 },
    ],
    compute: v => (v.L / (v.Wg + v.L)) * 100,
    keyConcept: 'Percent loss = loss ÷ (grain output + loss) × 100%.',
    mistakes: ['Forgetting to add loss to output in denominator', 'Forgetting ×100', 'Using W_g as the only denominator'],
    distractors: [v => (v.L / v.Wg) * 100, v => (v.L / (v.Wg + v.L)), v => ((v.L / (v.Wg + v.L))) * 100 * 1.1, v => ((v.Wg) / (v.Wg + v.L)) * 100],
  },
  {
    formulaId: 'a-threshing-efficiency', area: 'A', unknown: 'η_t',
    formulaText: 'η_t = (M_t / M_total) × 100%',
    unit: '%', round: 1,
    vars: [
      { symbol: 'M_t', ascii: 'Mt', label: 'threshed grain fed out', unit: 'kg', min: 800, max: 3000, decimals: 0 },
      { symbol: 'M_total', ascii: 'Mt0', label: 'total grain input', unit: 'kg', min: 1000, max: 3500, decimals: 0 },
    ],
    compute: v => (v.Mt / v.Mt0) * 100,
    keyConcept: 'Threshing efficiency = threshed grain ÷ total grain input × 100%.',
    mistakes: ['Forgetting ×100', 'Reversing ratio', 'Using loss instead of output'],
    distractors: [v => v.Mt / v.Mt0, v => (v.Mt0 / v.Mt) * 100, v => (v.Mt / v.Mt0) * 100 * 1.1, v => (v.Mt / v.Mt0) * 90],
  },
  {
    formulaId: 'a-drawbar-power', area: 'A', unknown: 'P_db',
    formulaText: 'P_db = (F × S) / 3.6',
    unit: 'kW', round: 2,
    vars: [
      { symbol: 'F', ascii: 'F', label: 'draft force', unit: 'kN', min: 20, max: 80, decimals: 0 },
      { symbol: 'S', ascii: 'S', label: 'travel speed', unit: 'km/h', min: 3, max: 9, decimals: 1 },
    ],
    conversions: [
      { ascii: 'F', unit: 'lbf', factor: 224.8, fromUnit: 'kN' },
      { ascii: 'S', unit: 'mph', factor: 0.6214, fromUnit: 'km/h' },
    ],
    compute: v => (v.F * v.S) / 3.6,
    keyConcept: 'Drawbar power (kW) = draft (kN) × speed (km/h) ÷ 3.6.',
    mistakes: ['Forgetting /3.6', 'Using force in N instead of kN', 'Unit mismatch'],
    distractors: [v => v.F * v.S, v => (v.F * v.S) * 3.6, v => (v.F * v.S) / 3.6 * 1.1, v => (v.F * v.S) / 7.2],
  },
  {
    formulaId: 'a-dbhp', area: 'A', unknown: 'HP',
    formulaText: 'HP = (F × S) / 745.7',
    unit: 'hp', round: 2,
    vars: [
      { symbol: 'F', ascii: 'F', label: 'drawbar pull', unit: 'N', min: 20000, max: 80000, decimals: 0 },
      { symbol: 'S', ascii: 'S', label: 'speed', unit: 'm/s', min: 1, max: 3, decimals: 1 },
    ],
    conversions: [
      { ascii: 'F', unit: 'lbf', factor: 0.2248, fromUnit: 'N' },
      { ascii: 'S', unit: 'mph', factor: 2.237, fromUnit: 'm/s' },
    ],
    compute: v => (v.F * v.S) / 745.7,
    keyConcept: 'Drawbar horsepower = pull (N) × speed (m/s) ÷ 745.7.',
    mistakes: ['Forgetting /745.7', 'Using speed in km/h', 'Using pull in kN'],
    distractors: [v => (v.F * v.S) * 745.7, v => (v.F * v.S), v => (v.F * v.S) / 745.7 * 1.1, v => (v.F * v.S) / 745.7 / 1.341],
  },
  {
    formulaId: 'a-dbhp-from-bp', area: 'A', unknown: 'DBHP',
    formulaText: 'DBHP = BP × η_m × η_t',
    unit: 'kW', round: 2,
    vars: [
      { symbol: 'BP', ascii: 'BP', label: 'brake power', unit: 'kW', min: 30, max: 150, decimals: 1 },
      { symbol: 'η_m', ascii: 'em', label: 'mechanical efficiency', unit: 'decimal', min: 0.75, max: 0.95, decimals: 2 },
      { symbol: 'η_t', ascii: 'et', label: 'traction efficiency', unit: 'decimal', min: 0.6, max: 0.8, decimals: 2 },
    ],
    compute: v => v.BP * v.em * v.et,
    keyConcept: 'Drawbar power = brake power × mechanical efficiency × traction efficiency.',
    mistakes: ['Using efficiencies as % instead of decimal', 'Omitting one efficiency', 'Adding efficiencies'],
    distractors: [v => v.BP * v.em, v => v.BP * (v.em + v.et), v => v.BP * v.em * v.et * 1.1, v => v.BP * v.em * v.et * 0.9],
  },
  {
    formulaId: 'a-pto-power', area: 'A', unknown: 'P_PTO',
    formulaText: 'P_PTO = BP × η_trans',
    unit: 'kW', round: 2,
    vars: [
      { symbol: 'BP', ascii: 'BP', label: 'brake power', unit: 'kW', min: 30, max: 150, decimals: 1 },
      { symbol: 'η_trans', ascii: 'etr', label: 'transmission efficiency', unit: 'decimal', min: 0.85, max: 0.97, decimals: 2 },
    ],
    compute: v => v.BP * v.etr,
    keyConcept: 'PTO power = brake power × transmission efficiency.',
    mistakes: ['Using efficiency as % instead of decimal', 'Dividing instead of multiplying', 'Adding losses instead of applying efficiency'],
    distractors: [v => v.BP / v.etr, v => v.BP * (1 - v.etr), v => v.BP * v.etr * 1.1, v => v.BP * v.etr * 0.9],
  },
  {
    formulaId: 'a-indicated-power', area: 'A', unknown: 'IP',
    formulaText: 'IP = (MEP × V_d × N) / 60000',
    unit: 'kW', round: 2,
    vars: [
      { symbol: 'MEP', ascii: 'MEP', label: 'mean effective pressure', unit: 'kPa', min: 500, max: 1200, decimals: 0 },
      { symbol: 'V_d', ascii: 'Vd', label: 'total displacement', unit: 'L', min: 1.5, max: 6.0, decimals: 1 },
      { symbol: 'N', ascii: 'N', label: 'engine speed', unit: 'RPM', min: 1500, max: 3200, decimals: 0 },
    ],
    compute: v => (v.MEP * v.Vd * v.N) / 60000,
    keyConcept: 'Indicated power = MEP × displacement × speed ÷ 60000 (4-stroke, displacement in L).',
    mistakes: ['Forgetting /60000', 'Using displacement in cm³', 'Wrong stroke factor for 4-stroke'],
    distractors: [v => (v.MEP * v.Vd * v.N), v => (v.MEP * v.Vd * v.N) / 120000, v => (v.MEP * v.Vd * v.N) / 60000 * 1.1, v => (v.MEP * v.Vd * v.N) / 30000],
  },
  {
    formulaId: 'a-brake-power', area: 'A', unknown: 'BP',
    formulaText: 'BP = IP - FP',
    unit: 'kW', round: 2,
    vars: [
      { symbol: 'IP', ascii: 'IP', label: 'indicated power', unit: 'kW', min: 50, max: 150, decimals: 1 },
      { symbol: 'FP', ascii: 'FP', label: 'friction power', unit: 'kW', min: 5, max: 30, decimals: 1 },
    ],
    compute: v => v.IP - v.FP,
    keyConcept: 'Brake power = indicated power minus friction power.',
    mistakes: ['Adding instead of subtracting', 'Reversing the subtraction', 'Unit confusion'],
    distractors: [v => v.IP + v.FP, v => v.FP - v.IP, v => v.IP - v.FP * 2, v => v.IP - v.FP * 0.5],
  },
  {
    formulaId: 'a-mech-efficiency', area: 'A', unknown: 'η_mec',
    formulaText: 'η_mec = (BP / IP) × 100%',
    unit: '%', round: 1,
    vars: [
      { symbol: 'BP', ascii: 'BP', label: 'brake power', unit: 'kW', min: 40, max: 120, decimals: 1 },
      { symbol: 'IP', ascii: 'IP', label: 'indicated power', unit: 'kW', min: 50, max: 140, decimals: 1 },
    ],
    compute: v => (v.BP / v.IP) * 100,
    keyConcept: 'Mechanical efficiency = brake power ÷ indicated power × 100%.',
    mistakes: ['Forgetting ×100', 'Reversing ratio', 'Using fractional power difference'],
    distractors: [v => v.BP / v.IP, v => (v.IP / v.BP) * 100, v => (v.BP / v.IP) * 100 * 1.05, v => ((v.IP - v.BP) / v.IP) * 100],
  },
  {
    formulaId: 'a-effective-pull', area: 'A', unknown: 'P_eff',
    formulaText: 'P_eff = P_pull - load',
    unit: 'kN', round: 2,
    vars: [
      { symbol: 'P_pull', ascii: 'Pull', label: 'drawbar pull', unit: 'kN', min: 20, max: 60, decimals: 1 },
      { symbol: 'load', ascii: 'load', label: 'towed load resistance', unit: 'kN', min: 5, max: 20, decimals: 1 },
    ],
    compute: v => v.Pull - v.load,
    keyConcept: 'Net pull = drawbar pull minus towed load resistance.',
    mistakes: ['Adding instead of subtracting', 'Reversing subtraction', 'Ignoring load'],
    distractors: [v => v.Pull + v.load, v => v.Pull, v => v.Pull - v.load * 2, v => v.Pull - v.load * 0.5],
  },
  {
    formulaId: 'a-power-torque', area: 'A', unknown: 'T',
    formulaText: 'T = (9549 × P) / N',
    unit: 'N·m', round: 1,
    vars: [
      { symbol: 'P', ascii: 'P', label: 'power', unit: 'kW', min: 20, max: 150, decimals: 1 },
      { symbol: 'N', ascii: 'N', label: 'rotational speed', unit: 'RPM', min: 1500, max: 3000, decimals: 0 },
    ],
    compute: v => (9549 * v.P) / v.N,
    keyConcept: 'Torque (N·m) = 9549 × power (kW) ÷ speed (RPM).',
    mistakes: ['Forgetting factor 9549', 'Using hp instead of kW', 'Reversing numerator/denominator'],
    distractors: [v => (v.P * v.N) / 9549, v => (9549 * v.P) * v.N, v => (9549 * v.P) / v.N * 1.1, v => (9549 * v.P) / (v.N * 2)],
  },
  {
    formulaId: 'a-displacement', area: 'A', unknown: 'V_d',
    formulaText: 'V_d = n × (π/4) × B² × L',
    unit: 'cm³', round: 1,
    vars: [
      { symbol: 'n', ascii: 'n', label: 'number of cylinders', unit: '', min: 2, max: 6, decimals: 0 },
      { symbol: 'B', ascii: 'B', label: 'cylinder bore', unit: 'cm', min: 8, max: 14, decimals: 1 },
      { symbol: 'L', ascii: 'L', label: 'stroke length', unit: 'cm', min: 8, max: 15, decimals: 1 },
    ],
    conversions: [
      { ascii: 'B', unit: 'in', factor: 0.3937, fromUnit: 'cm' },
      { ascii: 'L', unit: 'in', factor: 0.3937, fromUnit: 'cm' },
    ],
    compute: v => v.n * (Math.PI / 4) * v.B * v.B * v.L,
    keyConcept: 'Displacement = cylinders × (π/4) × bore² × stroke.',
    mistakes: ['Forgetting π/4', 'Squaring stroke instead of bore', 'Forgetting to multiply by cylinder count'],
    distractors: [v => v.n * (Math.PI / 4) * v.B * v.L * v.L, v => v.n * v.B * v.B * v.L, v => v.n * (Math.PI / 4) * v.B * v.B * v.L * 1.05, v => v.n * (Math.PI / 4) * v.B * v.L * v.L * 1.1],
  },
  {
    formulaId: 'a-compression-ratio', area: 'A', unknown: 'CR',
    formulaText: 'CR = (V_d + V_c) / V_c',
    unit: ':1', round: 1,
    vars: [
      { symbol: 'V_d', ascii: 'Vd', label: 'displacement volume', unit: 'cm³', min: 400, max: 900, decimals: 0 },
      { symbol: 'V_c', ascii: 'Vc', label: 'clearance volume', unit: 'cm³', min: 60, max: 120, decimals: 0 },
    ],
    compute: v => (v.Vd + v.Vc) / v.Vc,
    keyConcept: 'Compression ratio = (displacement + clearance) ÷ clearance.',
    mistakes: ['Forgetting to add clearance to displacement', 'Using V_d/V_c only', 'Reversing ratio'],
    distractors: [v => v.Vd / v.Vc, v => (v.Vc / (v.Vd + v.Vc)), v => (v.Vd + v.Vc) / v.Vc * 1.1, v => (v.Vd + v.Vc) / v.Vc * 0.9],
  },
  {
    formulaId: 'a-displacement-from-cr', area: 'A', unknown: 'V_d',
    formulaText: 'V_d = V_c × (CR - 1)',
    unit: 'cm³', round: 0,
    vars: [
      { symbol: 'V_c', ascii: 'Vc', label: 'clearance volume', unit: 'cm³', min: 60, max: 130, decimals: 0 },
      { symbol: 'CR', ascii: 'CR', label: 'compression ratio', unit: '', min: 8, max: 18, decimals: 1 },
    ],
    conversions: [
      { ascii: 'Vc', unit: 'in³', factor: 0.061024, fromUnit: 'cm³' },
    ],
    compute: v => v.Vc * (v.CR - 1),
    keyConcept: 'Displacement = clearance × (compression ratio − 1).',
    mistakes: ['Using CR instead of CR−1', 'Adding instead of subtracting 1', 'Multiplying then adding'],
    distractors: [v => v.Vc * v.CR, v => v.Vc * (v.CR + 1), v => v.Vc * (v.CR - 1) * 1.1, v => v.Vc * (v.CR - 1) * 0.9],
  },
  {
    formulaId: 'a-clearance-volume', area: 'A', unknown: 'V_c',
    formulaText: 'V_c = V_t - V_d',
    unit: 'cm³', round: 0,
    vars: [
      { symbol: 'V_t', ascii: 'Vt', label: 'total cylinder volume', unit: 'cm³', min: 600, max: 1000, decimals: 0 },
      { symbol: 'V_d', ascii: 'Vd', label: 'displacement volume', unit: 'cm³', min: 400, max: 800, decimals: 0 },
    ],
    conversions: [
      { ascii: 'Vt', unit: 'in³', factor: 0.061024, fromUnit: 'cm³' },
      { ascii: 'Vd', unit: 'in³', factor: 0.061024, fromUnit: 'cm³' },
    ],
    compute: v => v.Vt - v.Vd,
    keyConcept: 'Clearance volume = total volume minus displacement.',
    mistakes: ['Adding instead of subtracting', 'Reversing subtraction', 'Unit confusion'],
    distractors: [v => v.Vt + v.Vd, v => v.Vd - v.Vt, v => (v.Vt - v.Vd) * 1.2, v => (v.Vt - v.Vd) * 0.8],
  },
  {
    formulaId: 'a-fuel-volume', area: 'A', unknown: 'V',
    formulaText: 'V = (BP × SFC) / ρ',
    unit: 'L/h', round: 1,
    vars: [
      { symbol: 'BP', ascii: 'BP', label: 'brake power', unit: 'kW', min: 30, max: 120, decimals: 0 },
      { symbol: 'SFC', ascii: 'SFC', label: 'specific fuel consumption', unit: 'kg/kW·h', min: 0.2, max: 0.4, decimals: 2 },
      { symbol: 'ρ', ascii: 'rho', label: 'fuel density', unit: 'kg/L', min: 0.8, max: 0.9, decimals: 2 },
    ],
    compute: v => (v.BP * v.SFC) / v.rho,
    keyConcept: 'Fuel volume = brake power × SFC ÷ fuel density.',
    mistakes: ['Multiplying instead of dividing by density', 'Unit mismatch (density in kg/m³)', 'Using hp with kW-level SFC'],
    distractors: [v => v.BP * v.SFC, v => (v.BP * v.SFC) * v.rho, v => (v.BP * v.SFC) / v.rho * 1.1, v => (v.BP * v.SFC) / v.rho * 0.9],
  },
  {
    formulaId: 'a-sfc', area: 'A', unknown: 'SFC',
    formulaText: 'SFC = m_f / (P × t)',
    unit: 'kg/kW·h', round: 3,
    vars: [
      { symbol: 'm_f', ascii: 'mf', label: 'fuel mass consumed', unit: 'kg', min: 10, max: 50, decimals: 1 },
      { symbol: 'P', ascii: 'P', label: 'engine power', unit: 'kW', min: 40, max: 120, decimals: 0 },
      { symbol: 't', ascii: 't', label: 'operating time', unit: 'h', min: 1, max: 5, decimals: 1 },
    ],
    compute: v => v.mf / (v.P * v.t),
    keyConcept: 'Specific fuel consumption = fuel mass ÷ (power × time).',
    mistakes: ['Multiplying instead of dividing', 'Omitting time factor', 'Unit confusion'],
    distractors: [v => v.mf * v.P * v.t, v => (v.mf * v.P) / v.t, v => v.mf / (v.P * v.t) * 1.1, v => v.mf / (v.P * v.t) / 1.1],
  },
  {
    formulaId: 'a-heat-input', area: 'A', unknown: 'Q_in',
    formulaText: 'Q_in = BP × SFC × CV',
    unit: 'MJ/h', round: 1,
    vars: [
      { symbol: 'BP', ascii: 'BP', label: 'brake power', unit: 'kW', min: 40, max: 120, decimals: 0 },
      { symbol: 'SFC', ascii: 'SFC', label: 'specific fuel consumption', unit: 'kg/kW·h', min: 0.2, max: 0.35, decimals: 2 },
      { symbol: 'CV', ascii: 'CV', label: 'calorific value', unit: 'MJ/kg', min: 40, max: 45, decimals: 1 },
    ],
    compute: v => v.BP * v.SFC * v.CV,
    keyConcept: 'Heat input = brake power × specific fuel consumption × calorific value.',
    mistakes: ['Dividing instead of multiplying', 'Omitting one factor', 'Unit confusion'],
    distractors: [v => v.BP * v.SFC, v => v.BP * v.SFC * v.CV * 1.1, v => v.BP / v.SFC * v.CV, v => v.BP * v.SFC * v.CV * 0.9],
  },
  {
    formulaId: 'a-thermal-eff', area: 'A', unknown: 'η_th',
    formulaText: 'η_th = (W_out / Q_in) × 100%',
    unit: '%', round: 1,
    vars: [
      { symbol: 'W_out', ascii: 'Wo', label: 'useful work output', unit: 'MJ', min: 5, max: 30, decimals: 1 },
      { symbol: 'Q_in', ascii: 'Qi', label: 'heat energy input', unit: 'MJ', min: 20, max: 80, decimals: 1 },
    ],
    compute: v => (v.Wo / v.Qi) * 100,
    keyConcept: 'Thermal efficiency = work output ÷ heat input × 100%.',
    mistakes: ['Forgetting ×100', 'Reversing ratio', 'Using power instead of energy'],
    distractors: [v => v.Wo / v.Qi, v => (v.Qi / v.Wo) * 100, v => (v.Wo / v.Qi) * 100 * 1.1, v => (v.Wo / v.Qi) * 90],
  },
  {
    formulaId: 'a-overall-efficiency', area: 'A', unknown: 'η_total',
    formulaText: 'η_total = η_1 × η_2 × ... × η_n',
    unit: '%', round: 1,
    vars: [
      { symbol: 'η_1', ascii: 'e1', label: 'stage 1 efficiency', unit: 'decimal', min: 0.8, max: 0.98, decimals: 2 },
      { symbol: 'η_2', ascii: 'e2', label: 'stage 2 efficiency', unit: 'decimal', min: 0.7, max: 0.95, decimals: 2 },
    ],
    compute: v => v.e1 * v.e2 * 100,
    keyConcept: 'Overall efficiency = product of stage efficiencies × 100%.',
    mistakes: ['Adding efficiencies instead of multiplying', 'Forgetting ×100', 'Averaging stages'],
    distractors: [v => (v.e1 + v.e2) * 100, v => v.e1 * v.e2, v => v.e1 * v.e2 * 100 * 1.05, v => v.e1 * v.e2 * 100 * 0.95],
  },
  {
    formulaId: 'a-powertrain', area: 'A', unknown: 'η',
    formulaText: 'η = η_trans × η_drive × η_tractive',
    unit: '%', round: 1,
    vars: [
      { symbol: 'η_trans', ascii: 'etr', label: 'transmission efficiency', unit: 'decimal', min: 0.85, max: 0.95, decimals: 2 },
      { symbol: 'η_drive', ascii: 'ed', label: 'final drive efficiency', unit: 'decimal', min: 0.85, max: 0.95, decimals: 2 },
      { symbol: 'η_tractive', ascii: 'etc', label: 'tractive efficiency', unit: 'decimal', min: 0.7, max: 0.85, decimals: 2 },
    ],
    compute: v => v.etr * v.ed * v.etc * 100,
    keyConcept: 'Power train efficiency = product of transmission, drive, and tractive efficiencies.',
    mistakes: ['Adding instead of multiplying', 'Forgetting ×100', 'Averaging'],
    distractors: [v => (v.etr + v.ed + v.etc) * 100, v => v.etr * v.ed * v.etc, v => v.etr * v.ed * v.etc * 100 * 1.05, v => v.etr * v.ed * v.etc * 100 * 0.95],
  },
  {
    formulaId: 'a-draft', area: 'A', unknown: 'D',
    formulaText: 'D = n × w × d × K',
    unit: 'kN', round: 2,
    vars: [
      { symbol: 'n', ascii: 'n', label: 'number of bottoms', unit: '', min: 2, max: 6, decimals: 0 },
      { symbol: 'w', ascii: 'w', label: 'width per bottom', unit: 'm', min: 0.3, max: 0.6, decimals: 2 },
      { symbol: 'd', ascii: 'd', label: 'working depth', unit: 'm', min: 0.15, max: 0.4, decimals: 2 },
      { symbol: 'K', ascii: 'K', label: 'soil specific resistance', unit: 'kN/m²', min: 50, max: 120, decimals: 0 },
    ],
    conversions: [
      { ascii: 'w', unit: 'in', factor: 39.37, fromUnit: 'm' },
      { ascii: 'd', unit: 'in', factor: 39.37, fromUnit: 'm' },
      { ascii: 'K', unit: 'psi', factor: 0.145, fromUnit: 'kN/m²' },
    ],
    compute: v => v.n * v.w * v.d * v.K,
    keyConcept: 'Disc plow draft = bottoms × width × depth × soil resistance.',
    mistakes: ['Omitting a factor', 'Unit mismatch (width in cm)', 'Adding factors'],
    distractors: [v => v.n * v.w * v.d, v => v.n * v.w * v.d * v.K * 1.1, v => (v.n + v.w + v.d) * v.K, v => v.n * v.w * v.d * v.K * 0.9],
  },
  {
    formulaId: 'a-traction', area: 'A', unknown: 'F',
    formulaText: 'F = μ × W',
    unit: 'kN', round: 2,
    vars: [
      { symbol: 'μ', ascii: 'mu', label: 'traction coefficient', unit: '', min: 0.5, max: 0.9, decimals: 2 },
      { symbol: 'W', ascii: 'W', label: 'dynamic weight on drive wheels', unit: 'kN', min: 30, max: 90, decimals: 0 },
    ],
    compute: v => v.mu * v.W,
    keyConcept: 'Traction force = traction coefficient × weight on drive wheels.',
    mistakes: ['Dividing instead of multiplying', 'Using % coefficient', 'Unit confusion'],
    distractors: [v => v.W / v.mu, v => v.mu * v.W * 1.1, v => v.mu * v.W * 0.9, v => v.mu * v.W * 0.5],
  },
  {
    formulaId: 'a-hydraulic-pump', area: 'A', unknown: 'P_hyd',
    formulaText: 'P_hyd = P_PTO × η_pump',
    unit: 'kW', round: 2,
    vars: [
      { symbol: 'P_PTO', ascii: 'Pp', label: 'PTO power input', unit: 'kW', min: 30, max: 100, decimals: 1 },
      { symbol: 'η_pump', ascii: 'ep', label: 'pump efficiency', unit: 'decimal', min: 0.7, max: 0.9, decimals: 2 },
    ],
    compute: v => v.Pp * v.ep,
    keyConcept: 'Hydraulic power = PTO power × pump efficiency.',
    mistakes: ['Using efficiency as % instead of decimal', 'Dividing instead of multiplying', 'Adding losses'],
    distractors: [v => v.Pp / v.ep, v => v.Pp * (1 - v.ep), v => v.Pp * v.ep * 1.1, v => v.Pp * v.ep * 0.9],
  },
  {
    formulaId: 'a-hydrostatic', area: 'A', unknown: 'P',
    formulaText: 'P = ρ × g × h',
    unit: 'Pa', round: 0,
    vars: [
      { symbol: 'ρ', ascii: 'rho', label: 'fluid density', unit: 'kg/m³', min: 800, max: 1200, decimals: 0 },
      { symbol: 'h', ascii: 'h', label: 'depth', unit: 'm', min: 2, max: 20, decimals: 1 },
    ],
    conversions: [
      { ascii: 'rho', unit: 'lb/ft³', factor: 0.0624, fromUnit: 'kg/m³' },
      { ascii: 'h', unit: 'ft', factor: 3.281, fromUnit: 'm' },
    ],
    compute: v => v.rho * 9.81 * v.h,
    keyConcept: 'Hydrostatic pressure = density × gravity × depth.',
    mistakes: ['Forgetting g = 9.81', 'Omitting density', 'Unit confusion'],
    distractors: [v => v.rho * v.h, v => v.rho * 9.81 * v.h * 2, v => (v.rho * 9.81 * v.h) / 1000, v => v.rho * 9.81 * v.h * 0.5],
  },
  {
    formulaId: 'a-continuity', area: 'A', unknown: 'v_2',
    formulaText: 'A_1 × v_1 = A_2 × v_2',
    unit: 'm/s', round: 2,
    vars: [
      { symbol: 'A_1', ascii: 'A1', label: 'area section 1', unit: 'm²', min: 0.01, max: 0.1, decimals: 3 },
      { symbol: 'v_1', ascii: 'v1', label: 'velocity section 1', unit: 'm/s', min: 1, max: 3, decimals: 1 },
      { symbol: 'A_2', ascii: 'A2', label: 'area section 2', unit: 'm²', min: 0.005, max: 0.05, decimals: 3 },
    ],
    compute: v => (v.A1 * v.v1) / v.A2,
    keyConcept: 'Continuity: A₁v₁ = A₂v₂, so v₂ = A₁v₁/A₂.',
    mistakes: ['Solving for wrong variable', 'Multiplying areas instead of dividing', 'Using diameters instead of areas'],
    distractors: [v => (v.A1 * v.v1) / v.A1, v => (v.A1 * v.v1) * v.A2, v => (v.A1 * v.v1) / v.A2 * 1.1, v => (v.A1 * v.v1) / v.A2 * 2],
  },
  {
    formulaId: 'a-pump-power', area: 'A', unknown: 'P',
    formulaText: 'P = (ρ × g × Q × H) / η',
    unit: 'W', round: 0,
    vars: [
      { symbol: 'Q', ascii: 'Q', label: 'flow rate', unit: 'm³/s', min: 0.01, max: 0.1, decimals: 3 },
      { symbol: 'H', ascii: 'H', label: 'total head', unit: 'm', min: 5, max: 30, decimals: 0 },
      { symbol: 'η', ascii: 'et', label: 'pump efficiency', unit: 'decimal', min: 0.6, max: 0.9, decimals: 2 },
    ],
    conversions: [
      { ascii: 'H', unit: 'ft', factor: 3.281, fromUnit: 'm' },
    ],
    compute: v => (1000 * 9.81 * v.Q * v.H) / v.et,
    keyConcept: 'Pump power = ρ g Q H ÷ efficiency (ρ = 1000 kg/m³ for water).',
    mistakes: ['Forgetting g', 'Using flow in L/s without conversion', 'Dividing by efficiency incorrectly'],
    distractors: [v => (1000 * 9.81 * v.Q * v.H), v => (1000 * 9.81 * v.Q * v.H) * v.et, v => (1000 * v.Q * v.H) / v.et, v => (1000 * 9.81 * v.Q * v.H) / v.et * 1.1],
  },
  {
    formulaId: 'a-flow-volume-time', area: 'A', unknown: 'V',
    formulaText: 'V = Q × t',
    unit: 'm³', round: 2,
    vars: [
      { symbol: 'Q', ascii: 'Q', label: 'flow rate', unit: 'm³/h', min: 5, max: 50, decimals: 0 },
      { symbol: 't', ascii: 't', label: 'time', unit: 'h', min: 2, max: 12, decimals: 0 },
    ],
    compute: v => v.Q * v.t,
    keyConcept: 'Water volume = flow rate × time.',
    mistakes: ['Dividing instead of multiplying', 'Unit mismatch', 'Inconsistent time units'],
    distractors: [v => v.Q / v.t, v => v.Q * v.t * 2, v => v.Q * v.t * 1.5, v => v.Q * v.t * 0.5],
  },
  {
    formulaId: 'a-fourier', area: 'A', unknown: 'Qdot',
    formulaText: 'Q̇ = (k × A × ΔT) / L',
    unit: 'W', round: 1,
    vars: [
      { symbol: 'k', ascii: 'k', label: 'thermal conductivity', unit: 'W/m·K', min: 0.02, max: 0.8, decimals: 2 },
      { symbol: 'A', ascii: 'A', label: 'area', unit: 'm²', min: 2, max: 20, decimals: 0 },
      { symbol: 'ΔT', ascii: 'dT', label: 'temperature difference', unit: 'K', min: 10, max: 60, decimals: 0 },
      { symbol: 'L', ascii: 'L', label: 'thickness', unit: 'm', min: 0.1, max: 0.5, decimals: 2 },
    ],
    compute: v => (v.k * v.A * v.dT) / v.L,
    keyConcept: 'Fourier heat conduction: heat rate = k × A × ΔT ÷ thickness.',
    mistakes: ['Multiplying by thickness instead of dividing', 'Inconsistent units', 'Forgot area'],
    distractors: [v => v.k * v.A * v.dT * v.L, v => (v.k * v.A * v.dT) * (1 / v.L) * 0.5, v => (v.k * v.A * v.dT) / v.L * 2, v => (v.k * v.A * v.dT) / v.L * 0.5],
  },
  {
    formulaId: 'a-cop', area: 'A', unknown: 'COP',
    formulaText: 'COP = Q_L / W_in',
    unit: '', round: 2,
    vars: [
      { symbol: 'Q_L', ascii: 'QL', label: 'heat removed from cold space', unit: 'kJ', min: 200, max: 800, decimals: 0 },
      { symbol: 'W_in', ascii: 'Win', label: 'work input', unit: 'kJ', min: 50, max: 200, decimals: 0 },
    ],
    compute: v => v.QL / v.Win,
    keyConcept: 'Refrigeration COP = heat removed ÷ work input.',
    mistakes: ['Reversing ratio', 'Adding instead of dividing', 'Unit mismatch'],
    distractors: [v => v.Win / v.QL, v => v.QL * v.Win, v => v.QL / v.Win * 1.1, v => v.QL / v.Win * 0.9],
  },
  {
    formulaId: 'a-carnot', area: 'A', unknown: 'η_max',
    formulaText: 'η_max = 1 - (T_C / T_H)',
    unit: '%', round: 1,
    vars: [
      { symbol: 'T_C', ascii: 'Tc', label: 'cold reservoir temperature', unit: 'K', min: 280, max: 350, decimals: 0 },
      { symbol: 'T_H', ascii: 'Th', label: 'hot reservoir temperature', unit: 'K', min: 600, max: 1200, decimals: 0 },
    ],
    compute: v => (1 - v.Tc / v.Th) * 100,
    keyConcept: 'Carnot efficiency = 1 − T_C/T_H, in absolute temperatures (K).',
    mistakes: ['Using °C instead of K', 'Forgetting ×100', 'Reversing ratio'],
    distractors: [v => (1 - v.Tc / v.Th), v => (v.Tc / v.Th) * 100, v => (1 - v.Th / v.Tc) * 100, v => (1 - v.Tc / v.Th) * 100 * 0.9],
  },
  {
    formulaId: 'a-ndvi', area: 'A', unknown: 'NDVI',
    formulaText: 'NDVI = (NIR - Red) / (NIR + Red)',
    unit: '', round: 3,
    vars: [
      { symbol: 'NIR', ascii: 'NIR', label: 'near-infrared reflectance', unit: '', min: 0.3, max: 0.8, decimals: 2 },
      { symbol: 'Red', ascii: 'Red', label: 'red reflectance', unit: '', min: 0.05, max: 0.3, decimals: 2 },
    ],
    compute: v => (v.NIR - v.Red) / (v.NIR + v.Red),
    keyConcept: 'NDVI = (NIR − Red) ÷ (NIR + Red), ranges −1 to 1.',
    mistakes: ['Adding instead of subtracting numerator', 'Reversing numerator', 'Forgetting to sum in denominator'],
    distractors: [v => (v.NIR + v.Red) / (v.NIR - v.Red), v => (v.Red - v.NIR) / (v.NIR + v.Red), v => (v.NIR - v.Red) / (v.NIR + v.Red) * 2, v => (v.NIR - v.Red) / (v.NIR + v.Red) * 0.5],
  },
  {
    formulaId: 'a-tipping-bucket', area: 'A', unknown: 'R',
    formulaText: 'R = N × k',
    unit: 'mm', round: 1,
    vars: [
      { symbol: 'N', ascii: 'N', label: 'number of bucket tips', unit: '', min: 50, max: 500, decimals: 0 },
      { symbol: 'k', ascii: 'k', label: 'calibration per tip', unit: 'mm', min: 0.1, max: 0.5, decimals: 2 },
    ],
    compute: v => v.N * v.k,
    keyConcept: 'Rainfall = number of tips × calibration per tip.',
    mistakes: ['Dividing instead of multiplying', 'Unit confusion', 'Omitting factor'],
    distractors: [v => v.N / v.k, v => v.N * v.k * 1.1, v => v.N * v.k * 0.9, v => v.N * v.k * 2],
  },
  {
    formulaId: 'a-dew-point', area: 'A', unknown: 'T_dp',
    formulaText: 'T_dp = 237.3·log(E/6.11) / (7.5 - log(E/6.11))',
    unit: '°C', round: 1,
    vars: [
      { symbol: 'E', ascii: 'E', label: 'actual vapor pressure', unit: 'hPa', min: 5, max: 30, decimals: 1 },
    ],
    compute: v => (237.3 * Math.log10(v.E / 6.11)) / (7.5 - Math.log10(v.E / 6.11)),
    keyConcept: 'Magnus dew point = 237.3·log(E/6.11) ÷ (7.5 − log(E/6.11)).',
    mistakes: ['Using natural log instead of log base 10', 'Reversing numerator', 'Sign error in denominator'],
    distractors: [v => (7.5 * Math.log10(v.E / 6.11)) / (237.3 - Math.log10(v.E / 6.11)), v => v.E, v => v.E * 6.11, v => 237.3 / (7.5 - Math.log10(v.E / 6.11))],
  },
  {
    formulaId: 'a-control-error', area: 'A', unknown: 'e',
    formulaText: 'e = SP - PV',
    unit: '', round: 1,
    vars: [
      { symbol: 'SP', ascii: 'SP', label: 'set point', unit: '', min: 50, max: 200, decimals: 0 },
      { symbol: 'PV', ascii: 'PV', label: 'process variable', unit: '', min: 30, max: 190, decimals: 0 },
    ],
    compute: v => v.SP - v.PV,
    keyConcept: 'Control error = set point minus process variable.',
    mistakes: ['Adding instead of subtracting', 'Reversing subtraction', 'Sign error'],
    distractors: [v => v.PV - v.SP, v => v.SP + v.PV, v => v.SP - v.PV * 0.5, v => v.SP - v.PV * 2],
  },
  {
    formulaId: 'a-simple-interest', area: 'A', unknown: 'A',
    formulaText: 'A = P × (1 + r×t)',
    unit: '', round: 2,
    vars: [
      { symbol: 'P', ascii: 'P', label: 'principal', unit: '', min: 10000, max: 500000, decimals: 0 },
      { symbol: 'r', ascii: 'r', label: 'annual interest rate', unit: 'decimal', min: 0.05, max: 0.15, decimals: 2 },
      { symbol: 't', ascii: 't', label: 'time', unit: 'years', min: 1, max: 10, decimals: 0 },
    ],
    compute: v => v.P * (1 + v.r * v.t),
    keyConcept: 'Simple interest total = principal × (1 + rate × time).',
    mistakes: ['Using rate as % instead of decimal', 'Omitting the +1', 'Adding interest to principal wrongly'],
    distractors: [v => v.P * (1 + v.r) * v.t, v => v.P * v.r * v.t, v => v.P * (1 + v.r * v.t) * 1.1, v => v.P * (1 + v.r * v.t) * 0.9],
  },
  {
    formulaId: 'a-present-worth', area: 'A', unknown: 'PW',
    formulaText: 'PW = F / (1 + i)^n',
    unit: '', round: 2,
    vars: [
      { symbol: 'F', ascii: 'F', label: 'future value', unit: '', min: 50000, max: 500000, decimals: 0 },
      { symbol: 'i', ascii: 'i', label: 'discount rate', unit: 'decimal', min: 0.05, max: 0.15, decimals: 2 },
      { symbol: 'n', ascii: 'n', label: 'number of periods', unit: '', min: 1, max: 10, decimals: 0 },
    ],
    compute: v => v.F / Math.pow(1 + v.i, v.n),
    keyConcept: 'Present worth = future value ÷ (1 + i)^n.',
    mistakes: ['Multiplying instead of dividing', 'Using rate as %', 'Forgetting exponent n'],
    distractors: [v => v.F * Math.pow(1 + v.i, v.n), v => v.F / Math.pow(1 + v.i * v.n, 1), v => v.F / Math.pow(1 + v.i, v.n) * 1.1, v => v.F / Math.pow(1 + v.i, v.n) * 0.9],
  },
  {
    formulaId: 'a-depreciation', area: 'A', unknown: 'D',
    formulaText: 'D = (C - S) / n',
    unit: '', round: 0,
    vars: [
      { symbol: 'C', ascii: 'C', label: 'initial cost', unit: '', min: 100000, max: 1000000, decimals: 0 },
      { symbol: 'S', ascii: 'S', label: 'salvage value', unit: '', min: 10000, max: 100000, decimals: 0 },
      { symbol: 'n', ascii: 'n', label: 'useful life', unit: 'years', min: 5, max: 20, decimals: 0 },
    ],
    compute: v => (v.C - v.S) / v.n,
    keyConcept: 'Straight-line depreciation = (cost − salvage) ÷ useful life.',
    mistakes: ['Not subtracting salvage', 'Multiplying instead of dividing', 'Reversing subtraction'],
    distractors: [v => (v.C - v.S) * v.n, v => v.C / v.n, v => (v.C - v.S) / v.n * 1.1, v => (v.C - v.S) / v.n * 0.9],
  },
  {
    formulaId: 'a-break-even', area: 'A', unknown: 'BEP',
    formulaText: 'BEP = FC / (P - VC)',
    unit: 'units', round: 0,
    vars: [
      { symbol: 'FC', ascii: 'FC', label: 'fixed costs', unit: '', min: 100000, max: 1000000, decimals: 0 },
      { symbol: 'P', ascii: 'P', label: 'price per unit', unit: '', min: 50, max: 500, decimals: 0 },
      { symbol: 'VC', ascii: 'VC', label: 'variable cost per unit', unit: '', min: 20, max: 300, decimals: 0 },
    ],
    compute: v => v.FC / (v.P - v.VC),
    keyConcept: 'Break-even = fixed cost ÷ (price − variable cost).',
    mistakes: ['Adding price and variable cost in denominator', 'Multiplying instead of dividing', 'Using total variable cost'],
    distractors: [v => v.FC / (v.P + v.VC), v => v.FC * (v.P - v.VC), v => v.FC / (v.P - v.VC) * 1.1, v => v.FC / (v.P - v.VC) * 0.9],
  },
  {
    formulaId: 'a-capital-recovery', area: 'A', unknown: 'AW',
    formulaText: 'AW = P × i(1+i)^n / ((1+i)^n - 1)',
    unit: '', round: 2,
    vars: [
      { symbol: 'P', ascii: 'P', label: 'present investment', unit: '', min: 100000, max: 1000000, decimals: 0 },
      { symbol: 'i', ascii: 'i', label: 'interest rate', unit: 'decimal', min: 0.06, max: 0.15, decimals: 2 },
      { symbol: 'n', ascii: 'n', label: 'number of periods', unit: '', min: 5, max: 20, decimals: 0 },
    ],
    compute: v => v.P * (v.i * Math.pow(1 + v.i, v.n)) / (Math.pow(1 + v.i, v.n) - 1),
    keyConcept: 'Capital recovery = P × i(1+i)^n ÷ ((1+i)^n − 1).',
    mistakes: ['Using rate as %', 'Omitting the −1 in denominator', 'Wrong exponent'],
    distractors: [v => v.P * (v.i * Math.pow(1 + v.i, v.n)) / Math.pow(1 + v.i, v.n), v => v.P * v.i / (1 - Math.pow(1 + v.i, -v.n)), v => v.P * (v.i * Math.pow(1 + v.i, v.n)) / (Math.pow(1 + v.i, v.n) - 1) * 1.1, v => v.P * (v.i * Math.pow(1 + v.i, v.n)) / (Math.pow(1 + v.i, v.n) - 1) * 0.9],
  },
  {
    formulaId: 'a-npv', area: 'A', unknown: 'NPV',
    formulaText: 'NPV = Σ CF_t/(1+r)^t - I_0',
    unit: '', round: 0,
    vars: [
      { symbol: 'CF', ascii: 'CF', label: 'annual cash flow', unit: '', min: 50000, max: 400000, decimals: 0 },
      { symbol: 'r', ascii: 'r', label: 'discount rate', unit: 'decimal', min: 0.08, max: 0.15, decimals: 2 },
      { symbol: 'n', ascii: 'n', label: 'number of periods', unit: '', min: 3, max: 8, decimals: 0 },
      { symbol: 'I_0', ascii: 'I0', label: 'initial investment', unit: '', min: 100000, max: 800000, decimals: 0 },
    ],
    compute: v => {
      let s = 0;
      for (let t = 1; t <= v.n; t++) s += v.CF / Math.pow(1 + v.r, t);
      return s - v.I0;
    },
    keyConcept: 'NPV = present value of cash flows minus initial investment.',
    mistakes: ['Forgetting to subtract initial investment', 'Not discounting cash flows', 'Using rate as %'],
    distractors: [v => { let s = 0; for (let t = 1; t <= v.n; t++) s += v.CF / Math.pow(1 + v.r, t); return s; }, v => v.CF * v.n - v.I0, v => v.I0, v => v.CF / Math.pow(1 + v.r, 1) * v.n - v.I0],
  },
  {
    formulaId: 'a-payback', area: 'A', unknown: 'PBP',
    formulaText: 'PBP = C_inv / S_net',
    unit: 'years', round: 2,
    vars: [
      { symbol: 'C_inv', ascii: 'Ci', label: 'initial investment', unit: '', min: 100000, max: 1000000, decimals: 0 },
      { symbol: 'S_net', ascii: 'Sn', label: 'annual net savings', unit: '', min: 20000, max: 200000, decimals: 0 },
    ],
    compute: v => v.Ci / v.Sn,
    keyConcept: 'Payback period = initial investment ÷ annual net savings.',
    mistakes: ['Multiplying instead of dividing', 'Reversing ratio', 'Using gross income'],
    distractors: [v => v.Ci * v.Sn, v => v.Sn / v.Ci, v => v.Ci / v.Sn * 1.1, v => v.Ci / v.Sn * 0.9],
  },
  {
    formulaId: 'a-ps-allocation', area: 'A', unknown: 'PS',
    formulaText: 'PS ≤ 0.4 × (PS + MOOE)',
    unit: '', round: 0,
    vars: [
      { symbol: 'MOOE', ascii: 'MOOE', label: 'MOOE budget', unit: '', min: 100000, max: 500000, decimals: 0 },
    ],
    compute: v => 0.4 * v.MOOE / (1 - 0.4),
    keyConcept: 'PS ≤ 0.4(PS + MOOE). Solving for PS: PS ≤ 0.4·MOOE ÷ 0.6.',
    mistakes: ['Forgetting the 0.6 in denominator', 'Adding MOOE to PS', 'Wrong fraction'],
    distractors: [v => 0.4 * v.MOOE, v => 0.6 * v.MOOE / 0.4, v => 0.4 * v.MOOE / (1 - 0.4) * 1.1, v => 0.4 * v.MOOE / (1 - 0.4) * 0.9],
  },
  {
    formulaId: 'a-fs-cost', area: 'A', unknown: 'C_FS',
    formulaText: 'C_FS = 5% × C_project',
    unit: '', round: 0,
    vars: [
      { symbol: 'C_project', ascii: 'Cp', label: 'total project cost', unit: '', min: 1000000, max: 10000000, decimals: 0 },
    ],
    compute: v => 0.05 * v.Cp,
    keyConcept: 'Feasibility study cost = 5% of total project cost.',
    mistakes: ['Using 0.005 instead of 0.05', 'Using 0.5 instead of 0.05', 'Dividing by 5 instead of multiplying'],
    distractors: [v => 0.005 * v.Cp, v => 0.5 * v.Cp, v => v.Cp / 5, v => 0.05 * v.Cp * 1.1],
  },
  {
    formulaId: 'a-admin-overhead', area: 'A', unknown: 'C_admin',
    formulaText: 'C_admin = 20% × (PS + MOOE)',
    unit: '', round: 0,
    vars: [
      { symbol: 'PS', ascii: 'PS', label: 'personal services', unit: '', min: 100000, max: 500000, decimals: 0 },
      { symbol: 'MOOE', ascii: 'MOOE', label: 'MOOE', unit: '', min: 50000, max: 300000, decimals: 0 },
    ],
    compute: v => 0.2 * (v.PS + v.MOOE),
    keyConcept: 'Administration cost = 20% of (PS + MOOE).',
    mistakes: ['Applying 20% to PS only', 'Using 0.02 instead of 0.2', 'Multiplying PS × MOOE'],
    distractors: [v => 0.2 * v.PS, v => 0.02 * (v.PS + v.MOOE), v => 0.2 * v.PS * v.MOOE, v => 0.2 * (v.PS + v.MOOE) * 1.1],
  },
  {
    formulaId: 'a-heat-balance', area: 'A', unknown: 'Q_fuel',
    formulaText: 'Q_fuel = Q_brake + Q_cool + Q_exhaust + Q_friction',
    unit: 'MJ/h', round: 1,
    vars: [
      { symbol: 'Q_brake', ascii: 'Qb', label: 'brake work', unit: 'MJ/h', min: 100, max: 300, decimals: 0 },
      { symbol: 'Q_cool', ascii: 'Qc', label: 'cooling loss', unit: 'MJ/h', min: 50, max: 150, decimals: 0 },
      { symbol: 'Q_exhaust', ascii: 'Qe', label: 'exhaust loss', unit: 'MJ/h', min: 40, max: 150, decimals: 0 },
      { symbol: 'Q_friction', ascii: 'Qf', label: 'friction loss', unit: 'MJ/h', min: 20, max: 100, decimals: 0 },
    ],
    compute: v => v.Qb + v.Qc + v.Qe + v.Qf,
    keyConcept: 'Heat balance: fuel heat = brake work + cooling + exhaust + friction losses.',
    mistakes: ['Subtracting instead of adding', 'Omitting one component', 'Mixing units'],
    distractors: [v => v.Qb + v.Qc + v.Qe, v => v.Qb * v.Qc * v.Qe * v.Qf, v => (v.Qb + v.Qc + v.Qe + v.Qf) * 2, v => v.Qb + v.Qc + v.Qe - v.Qf],
  },
);

// ---------------------------------------------------------------------------
// AREA B: Hydraulics, Soils, Structures, Aquaculture, Mechanics
// ---------------------------------------------------------------------------
add(
  {
    formulaId: 'b-sprinkler-rate', area: 'B', unknown: 'AR',
    formulaText: 'AR = (q × 3600) / (S_l × S_s)',
    unit: 'mm/h', round: 2,
    vars: [
      { symbol: 'q', ascii: 'q', label: 'sprinkler flow', unit: 'L/s', min: 0.1, max: 0.5, decimals: 2 },
      { symbol: 'S_l', ascii: 'Sl', label: 'lateral spacing', unit: 'm', min: 12, max: 24, decimals: 0 },
      { symbol: 'S_s', ascii: 'Ss', label: 'sprinkler spacing', unit: 'm', min: 12, max: 24, decimals: 0 },
    ],
    conversions: [
      { ascii: 'Sl', unit: 'ft', factor: 3.281, fromUnit: 'm' },
      { ascii: 'Ss', unit: 'ft', factor: 3.281, fromUnit: 'm' },
    ],
    compute: v => (v.q * 3600) / (v.Sl * v.Ss),
    keyConcept: 'Sprinkler application rate = flow×3600 ÷ (lateral spacing × sprinkler spacing).',
    mistakes: ['Forgetting the 3600', 'Multiplying spacings into numerator', 'Unit confusion'],
    distractors: [v => v.q * 3600 * (v.Sl * v.Ss), v => (v.q * 3600) / (2 * v.Sl * v.Ss), v => (v.q * 3600) / (v.Sl * v.Ss) * 1.1, v => (v.q * 3600) / (v.Sl * v.Ss) * 0.9],
  },
  {
    formulaId: 'b-sprinkler-spacing', area: 'B', unknown: 'S',
    formulaText: 'S = sqrt((q × 3600) / AR)',
    unit: 'm', round: 2,
    vars: [
      { symbol: 'q', ascii: 'q', label: 'sprinkler flow', unit: 'L/s', min: 0.1, max: 0.5, decimals: 2 },
      { symbol: 'AR', ascii: 'AR', label: 'application rate', unit: 'mm/h', min: 5, max: 15, decimals: 1 },
    ],
    compute: v => Math.sqrt((v.q * 3600) / v.AR),
    keyConcept: 'Square sprinkler spacing = √((flow×3600) ÷ application rate).',
    mistakes: ['Forgetting the square root', 'Forgetting 3600', 'Squaring instead of rooting'],
    distractors: [v => (v.q * 3600) / v.AR, v => Math.sqrt((v.q * 3600) * v.AR), v => Math.sqrt((v.q * 3600) / v.AR) * 1.1, v => Math.sqrt((v.q * 3600) / v.AR) * 0.9],
  },
  {
    formulaId: 'b-sprinkler-count', area: 'B', unknown: 'N',
    formulaText: 'N = (L / S_l) × (W / S_s)',
    unit: '', round: 0,
    vars: [
      { symbol: 'L', ascii: 'L', label: 'field length', unit: 'm', min: 100, max: 500, decimals: 0 },
      { symbol: 'S_l', ascii: 'Sl', label: 'lateral spacing', unit: 'm', min: 12, max: 24, decimals: 0 },
      { symbol: 'W', ascii: 'W', label: 'field width', unit: 'm', min: 50, max: 300, decimals: 0 },
      { symbol: 'S_s', ascii: 'Ss', label: 'sprinkler spacing', unit: 'm', min: 12, max: 24, decimals: 0 },
    ],
    compute: v => Math.ceil(v.L / v.Sl) * Math.ceil(v.W / v.Ss),
    keyConcept: 'Number of sprinklers = (length÷lateral spacing) × (width÷sprinkler spacing).',
    mistakes: ['Adding instead of multiplying', 'Forgetting to round up', 'Using one dimension only'],
    distractors: [v => Math.ceil(v.L / v.Sl) + Math.ceil(v.W / v.Ss), v => Math.ceil((v.L * v.W) / (v.Sl * v.Ss)) * 0.9, v => Math.ceil(v.L / v.Sl) * Math.ceil(v.W / v.Ss) * 2, v => Math.ceil(v.L / v.Sl) * Math.ceil(v.W / v.Ss) * 0.5],
  },
  {
    formulaId: 'b-pumping-time', area: 'B', unknown: 'T',
    formulaText: 'T = (A × d × 10) / (E × Q)',
    unit: 'h', round: 1,
    vars: [
      { symbol: 'A', ascii: 'A', label: 'area', unit: 'ha', min: 1, max: 10, decimals: 1 },
      { symbol: 'd', ascii: 'd', label: 'net depth applied', unit: 'mm', min: 30, max: 100, decimals: 0 },
      { symbol: 'E', ascii: 'E', label: 'system efficiency', unit: 'decimal', min: 0.6, max: 0.9, decimals: 2 },
      { symbol: 'Q', ascii: 'Q', label: 'flow rate', unit: 'L/s', min: 10, max: 60, decimals: 0 },
    ],
    conversions: [
      { ascii: 'A', unit: 'acre', factor: 2.471, fromUnit: 'ha' },
      { ascii: 'd', unit: 'in', factor: 0.03937, fromUnit: 'mm' },
    ],
    compute: v => (v.A * v.d * 10) / (v.E * v.Q),
    keyConcept: 'Pumping time = area×depth×10 ÷ (efficiency × flow).',
    mistakes: ['Forgetting the /E', 'Forgetting factor 10', 'Multiplying instead of dividing'],
    distractors: [v => (v.A * v.d * 10) / v.Q, v => (v.A * v.d * 10) * (v.E * v.Q), v => (v.A * v.d * 10) / (v.E * v.Q) * 1.1, v => (v.A * v.d) / (v.E * v.Q)],
  },
  {
    formulaId: 'b-irrigation-efficiency', area: 'B', unknown: 'E_i',
    formulaText: 'E_i = (W_s / W_d) × 100%',
    unit: '%', round: 1,
    vars: [
      { symbol: 'W_s', ascii: 'Ws', label: 'water stored in root zone', unit: 'mm', min: 50, max: 120, decimals: 0 },
      { symbol: 'W_d', ascii: 'Wd', label: 'water delivered', unit: 'mm', min: 70, max: 150, decimals: 0 },
    ],
    compute: v => (v.Ws / v.Wd) * 100,
    keyConcept: 'Irrigation efficiency = stored water ÷ delivered water × 100%.',
    mistakes: ['Forgetting ×100', 'Reversing ratio', 'Reporting decimal'],
    distractors: [v => v.Ws / v.Wd, v => (v.Wd / v.Ws) * 100, v => (v.Ws / v.Wd) * 100 * 1.1, v => (v.Ws / v.Wd) * 90],
  },
  {
    formulaId: 'b-gross-depth', area: 'B', unknown: 'd_g',
    formulaText: 'd_g = d_n / E',
    unit: 'mm', round: 1,
    vars: [
      { symbol: 'd_n', ascii: 'dn', label: 'net depth required', unit: 'mm', min: 40, max: 120, decimals: 0 },
      { symbol: 'E', ascii: 'E', label: 'application efficiency', unit: 'decimal', min: 0.6, max: 0.9, decimals: 2 },
    ],
    compute: v => v.dn / v.E,
    keyConcept: 'Gross depth = net depth ÷ application efficiency.',
    mistakes: ['Multiplying by efficiency instead of dividing', 'Using efficiency as %', 'Reversing ratio'],
    distractors: [v => v.dn * v.E, v => v.dn / (v.E * 100), v => v.dn / v.E * 1.1, v => v.dn / v.E * 0.9],
  },
  {
    formulaId: 'b-net-irrigation', area: 'B', unknown: 'd_n',
    formulaText: 'd_n = ET_c - P_e',
    unit: 'mm', round: 1,
    vars: [
      { symbol: 'ET_c', ascii: 'ETc', label: 'crop evapotranspiration', unit: 'mm', min: 60, max: 150, decimals: 0 },
      { symbol: 'P_e', ascii: 'Pe', label: 'effective rainfall', unit: 'mm', min: 10, max: 90, decimals: 0 },
    ],
    compute: v => v.ETc - v.Pe,
    keyConcept: 'Net irrigation = crop ET minus effective rainfall.',
    mistakes: ['Adding rainfall instead of subtracting', 'Reversing subtraction', 'Using P_e as crop ET'],
    distractors: [v => v.ETc + v.Pe, v => v.Pe - v.ETc, v => v.ETc - v.Pe * 2, v => v.ETc - v.Pe * 0.5],
  },
  {
    formulaId: 'b-irrigation-interval', area: 'B', unknown: 'I',
    formulaText: 'I = D_ad / C_u',
    unit: 'days', round: 1,
    vars: [
      { symbol: 'D_ad', ascii: 'Dad', label: 'allowable depletion depth', unit: 'mm', min: 30, max: 80, decimals: 0 },
      { symbol: 'C_u', ascii: 'Cu', label: 'daily consumptive use', unit: 'mm/day', min: 4, max: 10, decimals: 1 },
    ],
    compute: v => v.Dad / v.Cu,
    keyConcept: 'Irrigation interval = allowable depletion ÷ daily consumptive use.',
    mistakes: ['Multiplying instead of dividing', 'Reversing ratio', 'Unit mismatch'],
    distractors: [v => v.Dad * v.Cu, v => v.Cu / v.Dad, v => v.Dad / v.Cu * 1.1, v => v.Dad / v.Cu * 0.5],
  },
  {
    formulaId: 'b-irrigation-period', area: 'B', unknown: 't',
    formulaText: 't = (A × d) / AR',
    unit: 'h', round: 1,
    vars: [
      { symbol: 'A', ascii: 'A', label: 'area', unit: 'm²', min: 5000, max: 20000, decimals: 0 },
      { symbol: 'd', ascii: 'd', label: 'depth applied', unit: 'mm', min: 40, max: 100, decimals: 0 },
      { symbol: 'AR', ascii: 'AR', label: 'application rate', unit: 'mm/h', min: 8, max: 20, decimals: 0 },
    ],
    compute: v => (v.A * v.d * 0.001) / v.AR,
    keyConcept: 'Irrigation duration = area×depth ÷ application rate (depth in m).',
    mistakes: ['Forgetting mm→m conversion', 'Multiplying instead of dividing', 'Unit mismatch'],
    distractors: [v => (v.A * v.d) / v.AR, v => (v.A * v.d * 0.001) * v.AR, v => (v.A * v.d * 0.001) / v.AR * 1.1, v => (v.A * v.d * 0.001) / v.AR * 0.9],
  },
  {
    formulaId: 'b-drip-time', area: 'B', unknown: 't',
    formulaText: 't = (ET × S_p × S_l) / q_e',
    unit: 'h/day', round: 1,
    vars: [
      { symbol: 'ET', ascii: 'ET', label: 'evapotranspiration', unit: 'mm/day', min: 4, max: 8, decimals: 1 },
      { symbol: 'S_p', ascii: 'Sp', label: 'plant spacing', unit: 'm', min: 0.2, max: 0.6, decimals: 1 },
      { symbol: 'S_l', ascii: 'Sl', label: 'lateral spacing', unit: 'm', min: 0.5, max: 1.5, decimals: 1 },
      { symbol: 'q_e', ascii: 'qe', label: 'emitter flow rate', unit: 'L/h', min: 2, max: 8, decimals: 0 },
    ],
    compute: v => (v.ET * v.Sp * v.Sl) / v.qe,
    keyConcept: 'Drip irrigation time = ET × plant spacing × lateral spacing ÷ emitter flow.',
    mistakes: ['Multiplying instead of dividing', 'Unit mismatch', 'Omitting spacing'],
    distractors: [v => (v.ET * v.Sp * v.Sl) * v.qe, v => (v.ET * v.Sp * v.Sl) / (v.qe * 2), v => (v.ET * v.Sp * v.Sl) / v.qe * 1.1, v => (v.ET * v.Sp) / v.qe],
  },
  {
    formulaId: 'b-total-irrigation', area: 'B', unknown: 'V',
    formulaText: 'V = (ET_c × A × N - P_e) / E_i',
    unit: 'm³', round: 0,
    vars: [
      { symbol: 'ET_c', ascii: 'ETc', label: 'crop ET', unit: 'm/day', min: 0.004, max: 0.008, decimals: 3 },
      { symbol: 'A', ascii: 'A', label: 'area', unit: 'm²', min: 5000, max: 20000, decimals: 0 },
      { symbol: 'N', ascii: 'N', label: 'number of days', unit: '', min: 10, max: 30, decimals: 0 },
      { symbol: 'P_e', ascii: 'Pe', label: 'effective rainfall', unit: 'm³', min: 100, max: 500, decimals: 0 },
      { symbol: 'E_i', ascii: 'Ei', label: 'irrigation efficiency', unit: 'decimal', min: 0.6, max: 0.9, decimals: 2 },
    ],
    compute: v => (v.ETc * v.A * v.N - v.Pe) / v.Ei,
    keyConcept: 'Total irrigation water = (crop ET × area × days − effective rainfall) ÷ efficiency.',
    mistakes: ['Forgetting to subtract rainfall', 'Forgetting ÷efficiency', 'Unit mismatch (ET in mm)'],
    distractors: [v => (v.ETc * v.A * v.N) / v.Ei, v => (v.ETc * v.A * v.N - v.Pe) * v.Ei, v => (v.ETc * v.A * v.N - v.Pe) / v.Ei * 1.1, v => (v.ETc * v.A * v.N - v.Pe) / v.Ei * 0.9],
  },
  {
    formulaId: 'b-land-soaking', area: 'B', unknown: 'LSR',
    formulaText: 'LSR = ρ_b × d × θ_r + h_sw',
    unit: 'mm', round: 1,
    vars: [
      { symbol: 'ρ_b', ascii: 'rb', label: 'bulk density', unit: 'g/cm³', min: 1.2, max: 1.5, decimals: 2 },
      { symbol: 'd', ascii: 'd', label: 'soil depth', unit: 'mm', min: 200, max: 500, decimals: 0 },
      { symbol: 'θ_r', ascii: 'tr', label: 'residual moisture deficit', unit: 'decimal', min: 0.1, max: 0.3, decimals: 2 },
      { symbol: 'h_sw', ascii: 'hsw', label: 'standing water depth', unit: 'mm', min: 20, max: 60, decimals: 0 },
    ],
    compute: v => (v.rb * v.d * v.tr * 1000) / 1 + v.hsw,
    keyConcept: 'Soaking requirement = bulk density×depth×moisture deficit (mm) + standing water.',
    mistakes: ['Forgetting to convert g/cm³ & mm to consistent units', 'Adding moisture before multiplying', 'Omitting standing water'],
    distractors: [v => v.rb * (v.d + v.hsw) * v.tr, v => v.rb * v.d * v.tr, v => (v.rb * v.d * v.tr * 1000) / 1 + v.hsw * 2, v => (v.rb * v.d * v.tr * 1000) / 1 - v.hsw],
  },
  {
    formulaId: 'b-runoff-volume', area: 'B', unknown: 'V',
    formulaText: 'V = C × P × A',
    unit: 'm³', round: 0,
    vars: [
      { symbol: 'C', ascii: 'C', label: 'runoff coefficient', unit: '', min: 0.2, max: 0.8, decimals: 2 },
      { symbol: 'P', ascii: 'P', label: 'annual rainfall', unit: 'm', min: 1, max: 3, decimals: 2 },
      { symbol: 'A', ascii: 'A', label: 'catchment area', unit: 'm²', min: 10000, max: 100000, decimals: 0 },
    ],
    compute: v => v.C * v.P * v.A,
    keyConcept: 'Runoff volume = coefficient × rainfall × area.',
    mistakes: ['Omitting a factor', 'Adding instead of multiplying', 'Unit mismatch (rainfall in mm)'],
    distractors: [v => v.C * v.P + v.A, v => v.C * v.P * v.A * 1.1, v => v.C * v.P * v.A / 1000, v => v.C * v.P * v.A * 0.9],
  },
  {
    formulaId: 'b-runoff-budget', area: 'B', unknown: 'V',
    formulaText: 'V = A × (P - f)',
    unit: 'm³', round: 0,
    vars: [
      { symbol: 'A', ascii: 'A', label: 'area', unit: 'm²', min: 10000, max: 100000, decimals: 0 },
      { symbol: 'P', ascii: 'P', label: 'rainfall depth', unit: 'm', min: 0.05, max: 0.2, decimals: 3 },
      { symbol: 'f', ascii: 'f', label: 'infiltration depth', unit: 'm', min: 0.02, max: 0.1, decimals: 3 },
    ],
    compute: v => v.A * (v.P - v.f),
    keyConcept: 'Runoff = area × (rainfall − infiltration).',
    mistakes: ['Adding instead of subtracting', 'Multiplying before subtracting', 'Unit mismatch'],
    distractors: [v => v.A * (v.P + v.f), v => v.A * v.P - v.f, v => v.A * (v.P - v.f) * 1.1, v => v.A * (v.P - v.f) * 0.9],
  },
  {
    formulaId: 'b-runoff-coefficient', area: 'B', unknown: 'C',
    formulaText: 'C = Q / P',
    unit: '', round: 3,
    vars: [
      { symbol: 'Q', ascii: 'Q', label: 'total runoff depth', unit: 'mm', min: 20, max: 120, decimals: 0 },
      { symbol: 'P', ascii: 'P', label: 'rainfall depth', unit: 'mm', min: 80, max: 180, decimals: 0 },
    ],
    compute: v => v.Q / v.P,
    keyConcept: 'Runoff coefficient = runoff depth ÷ rainfall depth.',
    mistakes: ['Reversing ratio', 'Multiplying instead of dividing', 'Using ×100'],
    distractors: [v => v.P / v.Q, v => (v.Q / v.P) * 100, v => v.Q * v.P, v => v.Q / v.P * 1.1],
  },
  {
    formulaId: 'b-mean-rainfall', area: 'B', unknown: 'Pbar',
    formulaText: 'P̄ = (1/n) × Σ P_i',
    unit: 'mm', round: 1,
    vars: [
      { symbol: 'n', ascii: 'n', label: 'number of stations', unit: '', min: 3, max: 5, decimals: 0 },
      { symbol: 'P_1', ascii: 'P1', label: 'rainfall station 1', unit: 'mm', min: 80, max: 150, decimals: 0 },
      { symbol: 'P_2', ascii: 'P2', label: 'rainfall station 2', unit: 'mm', min: 80, max: 150, decimals: 0 },
      { symbol: 'P_3', ascii: 'P3', label: 'rainfall station 3', unit: 'mm', min: 80, max: 150, decimals: 0 },
    ],
    compute: v => (v.P1 + v.P2 + v.P3) / v.n,
    keyConcept: 'Mean areal rainfall = sum of station values ÷ number of stations.',
    mistakes: ['Multiplying by number of stations', 'Adding wrong count in denominator', 'Summing twice'],
    distractors: [v => (v.P1 + v.P2 + v.P3) / (v.n - 1), v => (v.P1 + v.P2 + v.P3) * v.n, v => v.P1, v => (v.P1 + v.P2 + v.P3) / v.n * 1.1],
  },
  {
    formulaId: 'b-scs-runoff', area: 'B', unknown: 'Q',
    formulaText: 'Q = (P - I_a)² / (P - I_a + S)',
    unit: 'mm', round: 1,
    vars: [
      { symbol: 'P', ascii: 'P', label: 'rainfall depth', unit: 'mm', min: 50, max: 150, decimals: 0 },
      { symbol: 'S', ascii: 'S', label: 'potential retention', unit: 'mm', min: 50, max: 200, decimals: 0 },
    ],
    compute: v => Math.pow(v.P - 0.2 * v.S, 2) / (v.P - 0.2 * v.S + v.S),
    keyConcept: 'SCS runoff uses initial abstraction I_a = 0.2S.',
    mistakes: ['Forgetting I_a = 0.2S', 'Adding rather than subtracting in numerator', 'Unit mismatch'],
    distractors: [v => Math.pow(v.P - 0.2 * v.S, 2) / v.S, v => Math.pow(v.P, 2) / (v.P + v.S), v => Math.pow(v.P - 0.2 * v.S, 2) / (v.P - 0.2 * v.S + v.S) * 1.1, v => Math.pow(v.P - 0.2 * v.S, 2) / (v.P - 0.2 * v.S + v.S) * 0.9],
  },
  {
    formulaId: 'b-scs-retention', area: 'B', unknown: 'S',
    formulaText: 'S = 25400/CN - 254',
    unit: 'mm', round: 1,
    vars: [
      { symbol: 'CN', ascii: 'CN', label: 'curve number', unit: '', min: 40, max: 95, decimals: 0 },
    ],
    compute: v => 25400 / v.CN - 254,
    keyConcept: 'SCS potential retention = 25400/CN − 254.',
    mistakes: ['Forgetting the −254', 'Using 254 instead of 25400', 'Reversing operation'],
    distractors: [v => 25400 / v.CN, v => 254 / v.CN - 254, v => (25400 / v.CN - 254) * 1.1, v => (25400 / v.CN - 254) * 0.9],
  },
  {
    formulaId: 'b-rational', area: 'B', unknown: 'Q_p',
    formulaText: 'Q_p = (C × I × A) / 360',
    unit: 'm³/s', round: 2,
    vars: [
      { symbol: 'C', ascii: 'C', label: 'runoff coefficient', unit: '', min: 0.3, max: 0.8, decimals: 2 },
      { symbol: 'I', ascii: 'I', label: 'rainfall intensity', unit: 'mm/h', min: 20, max: 80, decimals: 0 },
      { symbol: 'A', ascii: 'A', label: 'catchment area', unit: 'ha', min: 5, max: 100, decimals: 0 },
    ],
    conversions: [
      { ascii: 'I', unit: 'in/h', factor: 0.03937, fromUnit: 'mm/h' },
      { ascii: 'A', unit: 'acre', factor: 2.471, fromUnit: 'ha' },
    ],
    compute: v => (v.C * v.I * v.A) / 360,
    keyConcept: 'Rational method peak runoff = C×I×A ÷ 360 (A in ha, I in mm/h).',
    mistakes: ['Forgetting /360', 'Using A in m² directly', 'Unit mismatch'],
    distractors: [v => (v.C * v.I * v.A), v => (v.C * v.I * v.A) / 360 * 1.1, v => (v.C * v.I * v.A) / 360 * 0.9, v => (v.C * v.I * v.A) / 100],
  },
  {
    formulaId: 'b-darcy', area: 'B', unknown: 'Q',
    formulaText: 'Q = K × i × A',
    unit: 'm³/s', round: 4,
    vars: [
      { symbol: 'K', ascii: 'K', label: 'hydraulic conductivity', unit: 'm/s', min: 0.00001, max: 0.001, decimals: 6 },
      { symbol: 'i', ascii: 'i', label: 'hydraulic gradient', unit: '', min: 0.1, max: 1.0, decimals: 2 },
      { symbol: 'A', ascii: 'A', label: 'cross-sectional area', unit: 'm²', min: 1, max: 20, decimals: 1 },
    ],
    conversions: [
      { ascii: 'A', unit: 'ft²', factor: 10.764, fromUnit: 'm²' },
    ],
    compute: v => v.K * v.i * v.A,
    keyConcept: 'Darcy flow = hydraulic conductivity × gradient × area.',
    mistakes: ['Omitting a factor', 'Dividing instead of multiplying', 'Unit mismatch'],
    distractors: [v => v.K * v.i + v.A, v => (v.K * v.i * v.A) * 10, v => v.K * v.i * v.A * 1.1, v => v.K * v.i * v.A * 0.9],
  },
  {
    formulaId: 'b-hydraulic-conductivity', area: 'B', unknown: 'K',
    formulaText: 'K = Σ (k_i × p_i)',
    unit: 'm/s', round: 6,
    vars: [
      { symbol: 'k_1', ascii: 'k1', label: 'conductivity layer 1', unit: 'm/s', min: 0.00001, max: 0.001, decimals: 6 },
      { symbol: 'p_1', ascii: 'p1', label: 'fraction layer 1', unit: 'decimal', min: 0.3, max: 0.7, decimals: 2 },
      { symbol: 'k_2', ascii: 'k2', label: 'conductivity layer 2', unit: 'm/s', min: 0.00001, max: 0.001, decimals: 6 },
      { symbol: 'p_2', ascii: 'p2', label: 'fraction layer 2', unit: 'decimal', min: 0.3, max: 0.7, decimals: 2 },
    ],
    compute: v => v.k1 * v.p1 + v.k2 * v.p2,
    keyConcept: 'Fraction-weighted conductivity = sum of k×p across layers.',
    mistakes: ['Averaging instead of weighting', 'Forgetting one term', 'Adding fractions wrongly'],
    distractors: [v => (v.k1 + v.k2) / 2, v => v.k1 * v.p1, v => v.k1 * v.p1 + v.k2 * v.p2 * 1.1, v => (v.k1 * v.p1 + v.k2 * v.p2) * 0.9],
  },
  {
    formulaId: 'b-drawdown', area: 'B', unknown: 's',
    formulaText: 's = (Q / (2πK)) × ln(R/r)',
    unit: 'm', round: 2,
    vars: [
      { symbol: 'Q', ascii: 'Q', label: 'well discharge', unit: 'm³/day', min: 500, max: 2000, decimals: 0 },
      { symbol: 'K', ascii: 'K', label: 'hydraulic conductivity', unit: 'm/day', min: 5, max: 30, decimals: 0 },
      { symbol: 'R', ascii: 'R', label: 'radius of influence', unit: 'm', min: 100, max: 300, decimals: 0 },
      { symbol: 'r', ascii: 'r', label: 'well radius', unit: 'm', min: 0.1, max: 0.5, decimals: 2 },
    ],
    conversions: [
      { ascii: 'K', unit: 'ft/day', factor: 3.281, fromUnit: 'm/day' },
    ],
    compute: v => (v.Q / (2 * Math.PI * v.K)) * Math.log(v.R / v.r),
    keyConcept: 'Thiem drawdown = (Q ÷ 2πK) × ln(R/r); Q must match K units.',
    mistakes: ['Using log10 instead of ln', 'Reversing R/r', 'Unit mismatch between Q and K'],
    distractors: [v => (v.Q / (2 * Math.PI * v.K)) * Math.log10(v.R / v.r), v => (v.Q / (2 * Math.PI * v.K)) * Math.log(v.r / v.R), v => (v.Q / (2 * Math.PI * v.K)) * Math.log(v.R / v.r) * 1.1, v => (v.Q / (2 * Math.PI * v.K)) * Math.log(v.R / v.r) * 0.9],
  },
  {
    formulaId: 'b-well-discharge', area: 'B', unknown: 'Q',
    formulaText: 'Q = (K × π × h × r) / ln(R/r)',
    unit: 'm³/day', round: 1,
    vars: [
      { symbol: 'K', ascii: 'K', label: 'hydraulic conductivity', unit: 'm/day', min: 5, max: 30, decimals: 0 },
      { symbol: 'h', ascii: 'h', label: 'flow thickness', unit: 'm', min: 5, max: 20, decimals: 0 },
      { symbol: 'r', ascii: 'r', label: 'well radius', unit: 'm', min: 0.1, max: 0.5, decimals: 2 },
      { symbol: 'R', ascii: 'R', label: 'radius of influence', unit: 'm', min: 100, max: 300, decimals: 0 },
    ],
    conversions: [
      { ascii: 'K', unit: 'ft/day', factor: 3.281, fromUnit: 'm/day' },
    ],
    compute: v => (v.K * Math.PI * v.h * v.r) / Math.log(v.R / v.r),
    keyConcept: 'Steady well discharge = Kπhr ÷ ln(R/r).',
    mistakes: ['Using log10 instead of ln', 'Reversing R/r', 'Omitting π'],
    distractors: [v => (v.K * Math.PI * v.h * v.r) * Math.log(v.R / v.r), v => (v.K * v.h * v.r) / Math.log(v.R / v.r), v => (v.K * Math.PI * v.h * v.r) / Math.log(v.R / v.r) * 1.1, v => (v.K * Math.PI * v.h * v.r) / Math.log(v.R / v.r) * 0.9],
  },
  {
    formulaId: 'b-usle', area: 'B', unknown: 'A',
    formulaText: 'A = R × K × LS × C × P',
    unit: 't/ha/yr', round: 1,
    vars: [
      { symbol: 'R', ascii: 'R', label: 'rainfall erosivity', unit: '', min: 200, max: 400, decimals: 0 },
      { symbol: 'K', ascii: 'K', label: 'soil erodibility', unit: '', min: 0.1, max: 0.4, decimals: 2 },
      { symbol: 'LS', ascii: 'LS', label: 'slope length-gradient', unit: '', min: 1, max: 3, decimals: 1 },
      { symbol: 'C', ascii: 'C', label: 'cover management', unit: '', min: 0.1, max: 0.6, decimals: 2 },
      { symbol: 'P', ascii: 'P', label: 'support practice', unit: '', min: 0.5, max: 1.0, decimals: 2 },
    ],
    compute: v => v.R * v.K * v.LS * v.C * v.P,
    keyConcept: 'USLE soil loss = R × K × LS × C × P.',
    mistakes: ['Omitting a factor', 'Adding factors', 'Unit confusion'],
    distractors: [v => v.R * v.K * v.C * v.P, v => v.R * (v.K + v.LS + v.C + v.P), v => v.R * v.K * v.LS * v.C * v.P * 1.1, v => v.R * v.K * v.LS * v.C * v.P * 0.9],
  },
  {
    formulaId: 'b-soil-loss', area: 'B', unknown: 'L',
    formulaText: 'L = e_r × A',
    unit: 't', round: 1,
    vars: [
      { symbol: 'e_r', ascii: 'er', label: 'erosion rate', unit: 't/ha', min: 5, max: 50, decimals: 0 },
      { symbol: 'A', ascii: 'A', label: 'area', unit: 'ha', min: 2, max: 30, decimals: 0 },
    ],
    compute: v => v.er * v.A,
    keyConcept: 'Total soil loss = erosion rate × area.',
    mistakes: ['Dividing instead of multiplying', 'Unit mismatch', 'Omitting factor'],
    distractors: [v => v.er / v.A, v => v.er * v.A * 1.1, v => v.er * v.A * 0.9, v => v.er + v.A],
  },
  {
    formulaId: 'b-sediment-yield', area: 'B', unknown: 'Y',
    formulaText: 'Y = P_s × T_e',
    unit: 't', round: 2,
    vars: [
      { symbol: 'P_s', ascii: 'Ps', label: 'sediment production', unit: 't', min: 50, max: 200, decimals: 0 },
      { symbol: 'T_e', ascii: 'Te', label: 'trap efficiency', unit: 'decimal', min: 0.5, max: 0.9, decimals: 2 },
    ],
    compute: v => v.Ps * v.Te,
    keyConcept: 'Sediment yield = sediment production × trap efficiency.',
    mistakes: ['Dividing instead of multiplying', 'Using efficiency as %', 'Omitting factor'],
    distractors: [v => v.Ps / v.Te, v => v.Ps * v.Te * 1.1, v => v.Ps * v.Te * 0.9, v => v.Ps + v.Te],
  },
  {
    formulaId: 'b-reservoir-life', area: 'B', unknown: 'T',
    formulaText: 'T = C_cap / (e_r × A × T_e)',
    unit: 'years', round: 1,
    vars: [
      { symbol: 'C_cap', ascii: 'Cc', label: 'reservoir capacity', unit: 'm³', min: 100000, max: 1000000, decimals: 0 },
      { symbol: 'e_r', ascii: 'er', label: 'sediment production rate', unit: 'm³/ha/yr', min: 5, max: 30, decimals: 0 },
      { symbol: 'A', ascii: 'A', label: 'catchment area', unit: 'ha', min: 50, max: 500, decimals: 0 },
      { symbol: 'T_e', ascii: 'Te', label: 'trap efficiency', unit: 'decimal', min: 0.6, max: 0.9, decimals: 2 },
    ],
    compute: v => v.Cc / (v.er * v.A * v.Te),
    keyConcept: 'Reservoir life = capacity ÷ (erosion rate × area × trap efficiency).',
    mistakes: ['Forgetting trap efficiency in denominator', 'Adding factors', 'Unit mismatch'],
    distractors: [v => v.Cc / (v.er * v.A), v => v.Cc * (v.er * v.A * v.Te), v => v.Cc / (v.er * v.A * v.Te) * 1.1, v => v.Cc / (v.er * v.A * v.Te) * 0.9],
  },
  {
    formulaId: 'b-gravimetric-mc', area: 'B', unknown: 'w',
    formulaText: 'w = ((M_w - M_d) / M_d) × 100%',
    unit: '%', round: 1,
    vars: [
      { symbol: 'M_w', ascii: 'Mw', label: 'wet soil mass', unit: 'g', min: 80, max: 200, decimals: 0 },
      { symbol: 'M_d', ascii: 'Md', label: 'oven-dry mass', unit: 'g', min: 60, max: 160, decimals: 0 },
    ],
    conversions: [
      { ascii: 'Mw', unit: 'oz', factor: 0.035274, fromUnit: 'g' },
      { ascii: 'Md', unit: 'oz', factor: 0.035274, fromUnit: 'g' },
    ],
    compute: v => ((v.Mw - v.Md) / v.Md) * 100,
    keyConcept: 'Gravimetric moisture = (wet−dry) ÷ dry × 100%.',
    mistakes: ['Using wet mass as denominator', 'Forgetting ×100', 'Forgetting to subtract dry'],
    distractors: [v => ((v.Mw - v.Md) / v.Mw) * 100, v => (v.Mw - v.Md) / v.Md, v => ((v.Mw / v.Md)) * 100, v => ((v.Mw - v.Md) / v.Md) * 100 * 1.1],
  },
  {
    formulaId: 'b-organic-matter', area: 'B', unknown: 'OM',
    formulaText: 'OM = ((M_w - M_d) / M_d) × 100%',
    unit: '%', round: 1,
    vars: [
      { symbol: 'M_w', ascii: 'Mw', label: 'fresh sample mass', unit: 'g', min: 50, max: 150, decimals: 0 },
      { symbol: 'M_d', ascii: 'Md', label: 'oven-dry mass', unit: 'g', min: 35, max: 120, decimals: 0 },
    ],
    conversions: [
      { ascii: 'Mw', unit: 'oz', factor: 0.035274, fromUnit: 'g' },
      { ascii: 'Md', unit: 'oz', factor: 0.035274, fromUnit: 'g' },
    ],
    compute: v => ((v.Mw - v.Md) / v.Md) * 100,
    keyConcept: 'Organic matter = (fresh−dry) ÷ dry × 100% (loss on ignition basis).',
    mistakes: ['Using wet mass as denominator', 'Forgetting ×100', 'Subtracting wrong'],
    distractors: [v => ((v.Mw - v.Md) / v.Mw) * 100, v => (v.Mw - v.Md) / v.Md, v => ((v.Mw - v.Md) / v.Md) * 100 * 1.1, v => (v.Mw / v.Md) * 100],
  },
  {
    formulaId: 'b-volumetric-mc', area: 'B', unknown: 'θ_v',
    formulaText: 'θ_v = θ_g × ρ_b',
    unit: 'm³/m³', round: 3,
    vars: [
      { symbol: 'θ_g', ascii: 'tg', label: 'gravimetric water content', unit: '', min: 0.1, max: 0.4, decimals: 2 },
      { symbol: 'ρ_b', ascii: 'rb', label: 'bulk density', unit: 'g/cm³', min: 1.2, max: 1.5, decimals: 2 },
    ],
    compute: v => v.tg * v.rb,
    keyConcept: 'Volumetric moisture = gravimetric moisture × bulk density.',
    mistakes: ['Dividing instead of multiplying', 'Unit confusion', 'Using particle density'],
    distractors: [v => v.tg / v.rb, v => v.tg * v.rb * 1.1, v => v.tg * v.rb * 0.9, v => v.tg * v.rb * v.rb],
  },
  {
    formulaId: 'b-bulk-density', area: 'B', unknown: 'ρ_b',
    formulaText: 'ρ_b = M_d / V_t',
    unit: 'g/cm³', round: 2,
    vars: [
      { symbol: 'M_d', ascii: 'Md', label: 'oven-dry mass', unit: 'g', min: 900, max: 1500, decimals: 0 },
      { symbol: 'V_t', ascii: 'Vt', label: 'bulk volume', unit: 'cm³', min: 750, max: 1000, decimals: 0 },
    ],
    compute: v => v.Md / v.Vt,
    keyConcept: 'Bulk density = dry mass ÷ bulk volume.',
    mistakes: ['Multiplying instead of dividing', 'Reversing ratio', 'Using wet mass'],
    distractors: [v => v.Md * v.Vt, v => v.Vt / v.Md, v => v.Md / v.Vt * 1.1, v => v.Md / v.Vt * 0.9],
  },
  {
    formulaId: 'b-density', area: 'B', unknown: 'ρ',
    formulaText: 'ρ = m / V',
    unit: 'kg/m³', round: 1,
    vars: [
      { symbol: 'm', ascii: 'm', label: 'mass', unit: 'kg', min: 100, max: 1000, decimals: 0 },
      { symbol: 'V', ascii: 'V', label: 'volume', unit: 'm³', min: 0.1, max: 1.0, decimals: 2 },
    ],
    conversions: [
      { ascii: 'm', unit: 'lb', factor: 2.205, fromUnit: 'kg' },
      { ascii: 'V', unit: 'ft³', factor: 35.315, fromUnit: 'm³' },
    ],
    compute: v => v.m / v.V,
    keyConcept: 'Density = mass ÷ volume.',
    mistakes: ['Multiplying instead of dividing', 'Reversing ratio', 'Unit confusion'],
    distractors: [v => v.m * v.V, v => v.V / v.m, v => v.m / v.V * 1.1, v => v.m / v.V * 0.9],
  },
  {
    formulaId: 'b-weight', area: 'B', unknown: 'W',
    formulaText: 'W = ρ_w × g × V × SG',
    unit: 'N', round: 1,
    vars: [
      { symbol: 'SG', ascii: 'SG', label: 'specific gravity', unit: '', min: 1.0, max: 2.6, decimals: 2 },
      { symbol: 'V', ascii: 'V', label: 'volume', unit: 'm³', min: 0.01, max: 0.1, decimals: 3 },
    ],
    compute: v => 1000 * 9.81 * v.V * v.SG,
    keyConcept: 'Weight = SG × density of water × g × volume.',
    mistakes: ['Forgetting g', 'Forgetting density of water', 'Using SG as volume'],
    distractors: [v => 1000 * 9.81 * v.V, v => 9.81 * v.V * v.SG, v => 1000 * 9.81 * v.V * v.SG * 1.1, v => 1000 * 9.81 * v.V * v.SG / 1000],
  },
  {
    formulaId: 'b-void-ratio', area: 'B', unknown: 'e',
    formulaText: 'e = (G_s × γ_w / γ_d) - 1',
    unit: '', round: 3,
    vars: [
      { symbol: 'G_s', ascii: 'Gs', label: 'specific gravity of solids', unit: '', min: 2.6, max: 2.8, decimals: 2 },
      { symbol: 'γ_w', ascii: 'gw', label: 'unit weight of water', unit: 'kN/m³', min: 9.8, max: 10.0, decimals: 1 },
      { symbol: 'γ_d', ascii: 'gd', label: 'dry unit weight', unit: 'kN/m³', min: 14, max: 19, decimals: 1 },
    ],
    compute: v => (v.Gs * v.gw / v.gd) - 1,
    keyConcept: 'Void ratio = (G_s × γ_w ÷ γ_d) − 1.',
    mistakes: ['Forgetting −1', 'Reversing dry and water unit weights', 'Unit mismatch'],
    distractors: [v => (v.Gs * v.gw / v.gd), v => (v.gd * v.gw / v.Gs) - 1, v => (v.Gs * v.gw / v.gd) - 1 * 1.1, v => (v.Gs * v.gw / v.gd) - 2],
  },
  {
    formulaId: 'b-base-saturation', area: 'B', unknown: 'BS',
    formulaText: '%BS = (Σ base cations / CEC) × 100%',
    unit: '%', round: 1,
    vars: [
      { symbol: 'Ca', ascii: 'Ca', label: 'exchangeable calcium', unit: 'cmol/kg', min: 5, max: 15, decimals: 0 },
      { symbol: 'Mg', ascii: 'Mg', label: 'exchangeable magnesium', unit: 'cmol/kg', min: 2, max: 8, decimals: 0 },
      { symbol: 'K', ascii: 'K', label: 'exchangeable potassium', unit: 'cmol/kg', min: 0.5, max: 2, decimals: 1 },
      { symbol: 'CEC', ascii: 'CEC', label: 'cation exchange capacity', unit: 'cmol/kg', min: 15, max: 30, decimals: 0 },
    ],
    compute: v => ((v.Ca + v.Mg + v.K) / v.CEC) * 100,
    keyConcept: 'Base saturation = sum of base cations ÷ CEC × 100%.',
    mistakes: ['Forgetting to sum base cations', 'Forgetting ×100', 'Including non-base cations'],
    distractors: [v => (v.Ca + v.Mg + v.K) / v.CEC, v => (v.Ca / v.CEC) * 100, v => ((v.Ca + v.Mg + v.K) / v.CEC) * 100 * 1.1, v => ((v.Ca + v.Mg + v.K) / v.CEC) * 100 * 0.9],
  },
  {
    formulaId: 'b-cec', area: 'B', unknown: 'CEC',
    formulaText: 'CEC = Σ q_i',
    unit: 'cmol/kg', round: 1,
    vars: [
      { symbol: 'Ca', ascii: 'Ca', label: 'exchangeable calcium', unit: 'cmol/kg', min: 4, max: 10, decimals: 0 },
      { symbol: 'Mg', ascii: 'Mg', label: 'exchangeable magnesium', unit: 'cmol/kg', min: 2, max: 8, decimals: 0 },
      { symbol: 'K', ascii: 'K', label: 'exchangeable potassium', unit: 'cmol/kg', min: 1, max: 4, decimals: 1 },
      { symbol: 'Na', ascii: 'Na', label: 'exchangeable sodium', unit: 'cmol/kg', min: 0.5, max: 3, decimals: 1 },
    ],
    compute: v => v.Ca + v.Mg + v.K + v.Na,
    keyConcept: 'CEC = sum of all exchangeable cations.',
    mistakes: ['Averaging instead of summing', 'Omitting a cation', 'Multiplying'],
    distractors: [v => v.Ca + v.Mg + v.K, v => (v.Ca + v.Mg + v.K + v.Na) / 4, v => v.Ca * v.Mg * v.K * v.Na, v => v.Ca + v.Mg + v.K + v.Na * 1.1],
  },
  {
    formulaId: 'b-lime', area: 'B', unknown: 'AL',
    formulaText: 'AL = (0.5 × (pH_d - pH_p) × A) / (0.1 × E_ff)',
    unit: 't', round: 1,
    vars: [
      { symbol: 'pH_d', ascii: 'phd', label: 'target soil pH', unit: '', min: 6.0, max: 7.0, decimals: 1 },
      { symbol: 'pH_p', ascii: 'php', label: 'present soil pH', unit: '', min: 4.5, max: 5.5, decimals: 1 },
      { symbol: 'A', ascii: 'A', label: 'area', unit: 'ha', min: 1, max: 5, decimals: 1 },
      { symbol: 'E_ff', ascii: 'Eff', label: 'lime effectivity', unit: 'decimal', min: 0.6, max: 0.9, decimals: 2 },
    ],
    compute: v => (0.5 * (v.phd - v.php) * v.A) / (0.1 * v.Eff),
    keyConcept: 'Lime requirement = 0.5×(target−present pH)×area ÷ (0.1×effectivity).',
    mistakes: ['Forgetting denominator factors', 'Using pH difference wrong direction', 'Omitting area'],
    distractors: [v => (0.5 * (v.phd - v.php) * v.A), v => (0.5 * (v.php - v.phd) * v.A) / (0.1 * v.Eff), v => (0.5 * (v.phd - v.php) * v.A) / (0.1 * v.Eff) * 1.1, v => (0.5 * (v.phd - v.php) * v.A) / (0.1 * v.Eff) * 0.9],
  },
  {
    formulaId: 'b-fertilizer', area: 'B', unknown: 'M',
    formulaText: 'M = N_req × 100 / %N',
    unit: 'kg', round: 1,
    vars: [
      { symbol: 'N_req', ascii: 'Nr', label: 'nutrient requirement', unit: 'kg', min: 50, max: 150, decimals: 0 },
      { symbol: '%N', ascii: 'pN', label: 'nutrient content of fertilizer', unit: '%', min: 15, max: 25, decimals: 0 },
    ],
    compute: v => v.Nr * 100 / v.pN,
    keyConcept: 'Fertilizer material = nutrient requirement × 100 ÷ nutrient content.',
    mistakes: ['Forgetting ×100', 'Multiplying by %N instead of dividing', 'Unit confusion'],
    distractors: [v => v.Nr * v.pN / 100, v => v.Nr / v.pN, v => v.Nr * 100 / v.pN * 1.1, v => v.Nr * 100 / v.pN * 0.9],
  },
  {
    formulaId: 'b-nutrient-applied', area: 'B', unknown: 'N',
    formulaText: 'N = M × %N / 100',
    unit: 'kg', round: 1,
    vars: [
      { symbol: 'M', ascii: 'M', label: 'fertilizer material', unit: 'kg', min: 100, max: 500, decimals: 0 },
      { symbol: '%N', ascii: 'pN', label: 'nutrient content', unit: '%', min: 15, max: 25, decimals: 0 },
    ],
    compute: v => v.M * v.pN / 100,
    keyConcept: 'Nutrient applied = material × nutrient content ÷ 100.',
    mistakes: ['Forgetting /100', 'Multiplying by %N directly', 'Dividing instead of multiplying'],
    distractors: [v => v.M * v.pN, v => v.M / v.pN * 100, v => v.M * v.pN / 100 * 1.1, v => v.M * v.pN / 100 * 0.9],
  },
  {
    formulaId: 'b-bulk-modulus', area: 'B', unknown: 'K',
    formulaText: 'K = -ΔP / (ΔV/V)',
    unit: 'Pa', round: 0,
    vars: [
      { symbol: 'ΔP', ascii: 'dP', label: 'pressure change', unit: 'Pa', min: 100000, max: 500000, decimals: 0 },
      { symbol: 'ΔV', ascii: 'dV', label: 'volume change', unit: 'm³', min: 0.001, max: 0.01, decimals: 4 },
      { symbol: 'V', ascii: 'V', label: 'original volume', unit: 'm³', min: 0.1, max: 1.0, decimals: 2 },
    ],
    compute: v => -v.dP / (v.dV / v.V),
    keyConcept: 'Bulk modulus = −ΔP ÷ (ΔV/V). Sign indicates compression.',
    mistakes: ['Forgetting negative sign', 'Reversing ΔV/V', 'Using absolute units wrong'],
    distractors: [v => v.dP / (v.dV / v.V), v => -v.dP * (v.dV / v.V), v => -v.dP / (v.dV / v.V) * 1.1, v => -v.dP / (v.V / v.dV)],
  },
  {
    formulaId: 'b-water-mass', area: 'B', unknown: 'm_w',
    formulaText: 'm_w = m_s × w / 100',
    unit: 'kg', round: 1,
    vars: [
      { symbol: 'm_s', ascii: 'ms', label: 'mass of dry soil', unit: 'kg', min: 50, max: 200, decimals: 0 },
      { symbol: 'w', ascii: 'w', label: 'moisture content', unit: '%', min: 10, max: 35, decimals: 0 },
    ],
    compute: v => v.ms * v.w / 100,
    keyConcept: 'Water mass = dry soil mass × moisture content ÷ 100.',
    mistakes: ['Forgetting /100', 'Using moisture as decimal but not dividing', 'Multiplying by 100'],
    distractors: [v => v.ms * v.w, v => v.ms / v.w * 100, v => v.ms * v.w / 100 * 1.1, v => v.ms * v.w / 100 * 0.9],
  },
  {
    formulaId: 'b-weighted-mean', area: 'B', unknown: 'xbar',
    formulaText: 'x̄ = Σ(w_i × x_i) / Σ w_i',
    unit: '', round: 2,
    vars: [
      { symbol: 'w_1', ascii: 'w1', label: 'weight 1', unit: '', min: 2, max: 8, decimals: 0 },
      { symbol: 'x_1', ascii: 'x1', label: 'value 1', unit: '', min: 10, max: 50, decimals: 0 },
      { symbol: 'w_2', ascii: 'w2', label: 'weight 2', unit: '', min: 2, max: 8, decimals: 0 },
      { symbol: 'x_2', ascii: 'x2', label: 'value 2', unit: '', min: 10, max: 50, decimals: 0 },
    ],
    compute: v => (v.w1 * v.x1 + v.w2 * v.x2) / (v.w1 + v.w2),
    keyConcept: 'Weighted mean = Σ(weight×value) ÷ Σweights.',
    mistakes: ['Dividing by count instead of sum of weights', 'Omitting a weighted term', 'Averaging values only'],
    distractors: [v => (v.w1 * v.x1 + v.w2 * v.x2) / 2, v => (v.x1 + v.x2) / 2, v => (v.w1 * v.x1 + v.w2 * v.x2) / (v.w1 + v.w2) * 1.1, v => (v.w1 * v.x1 + v.w2 * v.x2) / (v.w1 + v.w2) * 0.9],
  },
  {
    formulaId: 'b-manning-v', area: 'B', unknown: 'v',
    formulaText: 'v = (1/n) × R^(2/3) × sqrt(S)',
    unit: 'm/s', round: 2,
    vars: [
      { symbol: 'n', ascii: 'n', label: 'Manning roughness', unit: '', min: 0.015, max: 0.035, decimals: 3 },
      { symbol: 'R', ascii: 'R', label: 'hydraulic radius', unit: 'm', min: 0.5, max: 2.0, decimals: 2 },
      { symbol: 'S', ascii: 'S', label: 'channel slope', unit: 'm/m', min: 0.001, max: 0.005, decimals: 3 },
    ],
    compute: v => (1 / v.n) * Math.pow(v.R, 2 / 3) * Math.sqrt(v.S),
    keyConcept: 'Manning velocity = (1/n) × R^(2/3) × √S.',
    mistakes: ['Applying exponent to whole term wrongly', 'Using log', 'Forgetting the (1/n)'],
    distractors: [v => (1 / v.n) * Math.pow(v.R, 1 / 2) * Math.pow(v.S, 2 / 3), v => v.n * Math.pow(v.R, 2 / 3) * Math.sqrt(v.S), v => (1 / v.n) * Math.pow(v.R, 2 / 3) * Math.sqrt(v.S) * 1.1, v => (1 / v.n) * Math.pow(v.R, 2 / 3) * Math.sqrt(v.S) * 0.9],
  },
  {
    formulaId: 'b-manning-q', area: 'B', unknown: 'Q',
    formulaText: 'Q = (1/n) × A × R^(2/3) × sqrt(S)',
    unit: 'm³/s', round: 2,
    vars: [
      { symbol: 'n', ascii: 'n', label: 'Manning roughness', unit: '', min: 0.015, max: 0.035, decimals: 3 },
      { symbol: 'A', ascii: 'A', label: 'flow area', unit: 'm²', min: 1, max: 10, decimals: 1 },
      { symbol: 'R', ascii: 'R', label: 'hydraulic radius', unit: 'm', min: 0.5, max: 2.0, decimals: 2 },
      { symbol: 'S', ascii: 'S', label: 'slope', unit: 'm/m', min: 0.001, max: 0.005, decimals: 3 },
    ],
    compute: v => (1 / v.n) * v.A * Math.pow(v.R, 2 / 3) * Math.sqrt(v.S),
    keyConcept: 'Manning discharge = (1/n) × A × R^(2/3) × √S.',
    mistakes: ['Forgetting area factor', 'Wrong exponents', 'Forgetting (1/n)'],
    distractors: [v => (1 / v.n) * Math.pow(v.R, 2 / 3) * Math.sqrt(v.S), v => (1 / v.n) * v.A * Math.pow(v.R, 1 / 2) * Math.sqrt(v.S), v => (1 / v.n) * v.A * Math.pow(v.R, 2 / 3) * Math.sqrt(v.S) * 1.1, v => (1 / v.n) * v.A * Math.pow(v.R, 2 / 3) * Math.sqrt(v.S) * 0.9],
  },
  {
    formulaId: 'b-hydraulic-radius', area: 'B', unknown: 'R',
    formulaText: 'R = A / P',
    unit: 'm', round: 2,
    vars: [
      { symbol: 'A', ascii: 'A', label: 'flow area', unit: 'm²', min: 1, max: 10, decimals: 1 },
      { symbol: 'P', ascii: 'P', label: 'wetted perimeter', unit: 'm', min: 2, max: 12, decimals: 1 },
    ],
    compute: v => v.A / v.P,
    keyConcept: 'Hydraulic radius = flow area ÷ wetted perimeter.',
    mistakes: ['Multiplying instead of dividing', 'Reversing ratio', 'Using surface width as perimeter'],
    distractors: [v => v.A * v.P, v => v.P / v.A, v => v.A / v.P * 1.1, v => v.A / v.P * 0.9],
  },
  {
    formulaId: 'b-rect-area', area: 'B', unknown: 'A',
    formulaText: 'A = b × y',
    unit: 'm²', round: 2,
    vars: [
      { symbol: 'b', ascii: 'b', label: 'channel width', unit: 'm', min: 1, max: 5, decimals: 1 },
      { symbol: 'y', ascii: 'y', label: 'flow depth', unit: 'm', min: 0.5, max: 2.5, decimals: 1 },
    ],
    compute: v => v.b * v.y,
    keyConcept: 'Rectangular channel area = width × depth.',
    mistakes: ['Adding instead of multiplying', 'Omitting one dimension', 'Unit confusion'],
    distractors: [v => v.b + v.y, v => v.b * v.y * 2, v => v.b * v.y * 1.1, v => v.b * v.y * 0.9],
  },
  {
    formulaId: 'b-rect-perimeter', area: 'B', unknown: 'P',
    formulaText: 'P = b + 2y',
    unit: 'm', round: 2,
    vars: [
      { symbol: 'b', ascii: 'b', label: 'channel width', unit: 'm', min: 1, max: 5, decimals: 1 },
      { symbol: 'y', ascii: 'y', label: 'flow depth', unit: 'm', min: 0.5, max: 2.5, decimals: 1 },
    ],
    compute: v => v.b + 2 * v.y,
    keyConcept: 'Rectangular wetted perimeter = width + 2×depth.',
    mistakes: ['Using only depth not 2×', 'Adding 2 once', 'Using full perimeter 2b+2y'],
    distractors: [v => v.b + v.y, v => 2 * (v.b + v.y), v => v.b * v.y, v => v.b + 2 * v.y + 1],
  },
  {
    formulaId: 'b-trap-area', area: 'B', unknown: 'A',
    formulaText: 'A = (b + z×y) × y',
    unit: 'm²', round: 2,
    vars: [
      { symbol: 'b', ascii: 'b', label: 'bottom width', unit: 'm', min: 1, max: 4, decimals: 1 },
      { symbol: 'z', ascii: 'z', label: 'side slope (h:v)', unit: '', min: 1, max: 3, decimals: 0 },
      { symbol: 'y', ascii: 'y', label: 'flow depth', unit: 'm', min: 0.5, max: 2.0, decimals: 1 },
    ],
    compute: v => (v.b + v.z * v.y) * v.y,
    keyConcept: 'Trapezoidal area = (bottom width + side-slope×depth) × depth.',
    mistakes: ['Forgetting to multiply by depth', 'Adding side slopes wrong', 'Using (b+z)×y'],
    distractors: [v => v.b * v.y + v.z * v.y, v => (v.b + v.z) * v.y, v => (v.b + v.z * v.y) * v.y * 1.1, v => (v.b + v.z * v.y) * v.y * 0.9],
  },
  {
    formulaId: 'b-continuity', area: 'B', unknown: 'Q',
    formulaText: 'Q = A × V',
    unit: 'm³/s', round: 2,
    vars: [
      { symbol: 'A', ascii: 'A', label: 'area', unit: 'm²', min: 0.5, max: 5, decimals: 1 },
      { symbol: 'V', ascii: 'V', label: 'velocity', unit: 'm/s', min: 0.5, max: 2.5, decimals: 1 },
    ],
    compute: v => v.A * v.V,
    keyConcept: 'Discharge = area × velocity.',
    mistakes: ['Dividing instead of multiplying', 'Unit mismatch', 'Omitting factor'],
    distractors: [v => v.A / v.V, v => v.A * v.V * 2, v => v.A * v.V * 1.1, v => v.A * v.V * 0.5],
  },
  {
    formulaId: 'b-velocity-head', area: 'B', unknown: 'h_v',
    formulaText: 'h_v = V² / (2g)',
    unit: 'm', round: 2,
    vars: [
      { symbol: 'V', ascii: 'V', label: 'velocity', unit: 'm/s', min: 1, max: 5, decimals: 1 },
    ],
    compute: v => v.V * v.V / (2 * 9.81),
    keyConcept: 'Velocity head = V² ÷ 2g.',
    mistakes: ['Forgetting g', 'Using g=1', 'Not squaring velocity'],
    distractors: [v => v.V * v.V / 9.81, v => v.V * v.V * (2 * 9.81), v => v.V * v.V / (2 * 9.81) * 1.1, v => v.V / (2 * 9.81)],
  },
  {
    formulaId: 'b-flood-risk', area: 'B', unknown: 'P',
    formulaText: 'P = 1 - (1 - 1/T)^n',
    unit: '', round: 3,
    vars: [
      { symbol: 'T', ascii: 'T', label: 'return period', unit: 'years', min: 10, max: 100, decimals: 0 },
      { symbol: 'n', ascii: 'n', label: 'design life', unit: 'years', min: 10, max: 50, decimals: 0 },
    ],
    compute: v => 1 - Math.pow(1 - 1 / v.T, v.n),
    keyConcept: 'Exceedance probability over n years = 1 − (1 − 1/T)^n.',
    mistakes: ['Using 1−1/T without exponent', 'Computing 1/T directly', 'Forgetting the outer 1−'],
    distractors: [v => 1 / v.T, v => 1 - (1 / v.T) * v.n, v => 1 - Math.pow(1 - 1 / v.T, v.n) * 1.05, v => 1 - Math.pow(1 - 1 / v.T, v.n) * 0.9],
  },
  {
    formulaId: 'b-return-period', area: 'B', unknown: 'T',
    formulaText: 'T = (n + 1) / m',
    unit: 'years', round: 1,
    vars: [
      { symbol: 'n', ascii: 'n', label: 'years of record', unit: '', min: 20, max: 60, decimals: 0 },
      { symbol: 'm', ascii: 'm', label: 'rank of event', unit: '', min: 1, max: 5, decimals: 0 },
    ],
    compute: v => (v.n + 1) / v.m,
    keyConcept: 'Return period = (years + 1) ÷ rank.',
    mistakes: ['Forgetting the +1', 'Multiplying instead of dividing', 'Using n without +1'],
    distractors: [v => v.n / v.m, v => (v.n + 1) * v.m, v => (v.n + 1) / v.m * 1.1, v => (v.n + 1) / v.m * 0.9],
  },
  {
    formulaId: 'b-gumbel', area: 'B', unknown: 'Q_T',
    formulaText: 'Q_T = x̄ + K × σ',
    unit: 'm³/s', round: 1,
    vars: [
      { symbol: 'x̄', ascii: 'xbar', label: 'mean annual flood', unit: 'm³/s', min: 50, max: 200, decimals: 0 },
      { symbol: 'K', ascii: 'K', label: 'Gumbel frequency factor', unit: '', min: 2, max: 6, decimals: 1 },
      { symbol: 'σ', ascii: 'sig', label: 'standard deviation', unit: 'm³/s', min: 10, max: 40, decimals: 0 },
    ],
    compute: v => v.xbar + v.K * v.sig,
    keyConcept: 'T-year flood = mean + frequency factor × standard deviation.',
    mistakes: ['Subtracting instead of adding', 'Multiplying factors wrongly', 'Omitting mean'],
    distractors: [v => v.xbar - v.K * v.sig, v => v.K * v.sig, v => v.xbar + v.K * v.sig * 1.1, v => v.xbar + v.K * v.sig * 0.9],
  },
  {
    formulaId: 'b-crop-et', area: 'B', unknown: 'ET_c',
    formulaText: 'ET_c = K_c × ET_o',
    unit: 'mm/day', round: 1,
    vars: [
      { symbol: 'K_c', ascii: 'Kc', label: 'crop coefficient', unit: '', min: 0.6, max: 1.2, decimals: 2 },
      { symbol: 'ET_o', ascii: 'ETo', label: 'reference ET', unit: 'mm/day', min: 4, max: 8, decimals: 1 },
    ],
    compute: v => v.Kc * v.ETo,
    keyConcept: 'Crop ET = crop coefficient × reference ET.',
    mistakes: ['Dividing instead of multiplying', 'Omitting factor', 'Using % coefficient'],
    distractors: [v => v.ETo / v.Kc, v => v.Kc * v.ETo * 1.1, v => v.Kc * v.ETo * 0.9, v => v.Kc + v.ETo],
  },
  {
    formulaId: 'b-water-volume', area: 'B', unknown: 'V_w',
    formulaText: 'V_w = ET_c × A',
    unit: 'm³', round: 0,
    vars: [
      { symbol: 'ET_c', ascii: 'ETc', label: 'crop ET', unit: 'm', min: 0.3, max: 0.8, decimals: 2 },
      { symbol: 'A', ascii: 'A', label: 'area', unit: 'm²', min: 5000, max: 20000, decimals: 0 },
    ],
    compute: v => v.ETc * v.A,
    keyConcept: 'Crop water volume = crop ET × area.',
    mistakes: ['Dividing instead of multiplying', 'Unit mismatch (ET in mm)', 'Omitting factor'],
    distractors: [v => v.ETc / v.A, v => v.ETc * v.A * 1.1, v => v.ETc * v.A * 0.9, v => v.ETc + v.A],
  },
  {
    formulaId: 'b-pan-evap', area: 'B', unknown: 'E_p',
    formulaText: 'E_p = D × K_p',
    unit: 'mm', round: 1,
    vars: [
      { symbol: 'D', ascii: 'D', label: 'pan evaporation', unit: 'mm', min: 5, max: 15, decimals: 1 },
      { symbol: 'K_p', ascii: 'Kp', label: 'pan coefficient', unit: '', min: 0.6, max: 0.8, decimals: 2 },
    ],
    compute: v => v.D * v.Kp,
    keyConcept: 'Adjusted evaporation = pan depth × pan coefficient.',
    mistakes: ['Dividing instead of multiplying', 'Omitting coefficient', 'Using % coefficient'],
    distractors: [v => v.D / v.Kp, v => v.D * v.Kp * 1.1, v => v.D * v.Kp * 0.9, v => v.D + v.Kp],
  },
  {
    formulaId: 'b-reference-et', area: 'B', unknown: 'ET_o',
    formulaText: 'ET_o = (p × (0.46T + 8.13)) / 100',
    unit: 'mm/day', round: 2,
    vars: [
      { symbol: 'p', ascii: 'p', label: 'daylight percentage', unit: '%', min: 8, max: 12, decimals: 1 },
      { symbol: 'T', ascii: 'T', label: 'mean temperature', unit: '°C', min: 20, max: 32, decimals: 1 },
    ],
    compute: v => (v.p * (0.46 * v.T + 8.13)) / 100,
    keyConcept: 'Blaney–Criddle reference ET = p×(0.46T+8.13) ÷ 100.',
    mistakes: ['Forgetting ÷100', 'Using p as decimal', 'Forgetting 8.13 constant'],
    distractors: [v => v.p * (0.46 * v.T + 8.13), v => (v.p / 100) * (0.46 * v.T), v => (v.p * (0.46 * v.T + 8.13)) / 100 * 1.1, v => (v.p * (0.46 * v.T + 8.13)) / 100 * 0.9],
  },
  {
    formulaId: 'b-fcr', area: 'B', unknown: 'FCR',
    formulaText: 'FCR = W_feed / W_gain',
    unit: '', round: 2,
    vars: [
      { symbol: 'W_feed', ascii: 'Wf', label: 'feed given', unit: 'kg', min: 20, max: 100, decimals: 0 },
      { symbol: 'W_gain', ascii: 'Wg', label: 'body weight gain', unit: 'kg', min: 10, max: 40, decimals: 0 },
    ],
    compute: v => v.Wf / v.Wg,
    keyConcept: 'Feed conversion ratio = feed given ÷ weight gain.',
    mistakes: ['Reversing ratio', 'Multiplying instead of dividing', 'Unit mismatch'],
    distractors: [v => v.Wg / v.Wf, v => v.Wf * v.Wg, v => v.Wf / v.Wg * 1.1, v => v.Wf / v.Wg * 0.9],
  },
  {
    formulaId: 'b-daily-feed', area: 'B', unknown: 'F',
    formulaText: 'F = B × r_f',
    unit: 'kg/day', round: 1,
    vars: [
      { symbol: 'B', ascii: 'B', label: 'total biomass', unit: 'kg', min: 100, max: 500, decimals: 0 },
      { symbol: 'r_f', ascii: 'rf', label: 'feeding rate', unit: 'decimal', min: 0.03, max: 0.08, decimals: 2 },
    ],
    compute: v => v.B * v.rf,
    keyConcept: 'Daily feed = biomass × feeding rate.',
    mistakes: ['Using rate as %', 'Dividing instead of multiplying', 'Omitting factor'],
    distractors: [v => v.B / v.rf, v => v.B * v.rf * 1.1, v => v.B * v.rf * 0.9, v => v.B * v.rf * 10],
  },
  {
    formulaId: 'b-biomass', area: 'B', unknown: 'B',
    formulaText: 'B = N × w̄',
    unit: 'kg', round: 0,
    vars: [
      { symbol: 'N', ascii: 'N', label: 'number of animals', unit: '', min: 50, max: 500, decimals: 0 },
      { symbol: 'w̄', ascii: 'wb', label: 'average body weight', unit: 'kg', min: 0.5, max: 5, decimals: 1 },
    ],
    compute: v => v.N * v.wb,
    keyConcept: 'Total biomass = number × average weight.',
    mistakes: ['Dividing instead of multiplying', 'Omitting factor', 'Unit mismatch'],
    distractors: [v => v.N / v.wb, v => v.N * v.wb * 1.1, v => v.N * v.wb * 0.9, v => v.N + v.wb],
  },
  {
    formulaId: 'b-stocking-density', area: 'B', unknown: 'B',
    formulaText: 'B = ρ_s × A',
    unit: '', round: 0,
    vars: [
      { symbol: 'ρ_s', ascii: 'rs', label: 'stocking density', unit: 'per ha', min: 100, max: 500, decimals: 0 },
      { symbol: 'A', ascii: 'A', label: 'area', unit: 'ha', min: 0.5, max: 5, decimals: 1 },
    ],
    compute: v => v.rs * v.A,
    keyConcept: 'Stocked number = stocking density × area.',
    mistakes: ['Dividing instead of multiplying', 'Omitting factor', 'Unit mismatch'],
    distractors: [v => v.rs / v.A, v => v.rs * v.A * 1.1, v => v.rs * v.A * 0.9, v => v.rs + v.A],
  },
  {
    formulaId: 'b-survival', area: 'B', unknown: 'N_s',
    formulaText: 'N_s = N_i × S_r',
    unit: '', round: 0,
    vars: [
      { symbol: 'N_i', ascii: 'Ni', label: 'initial stock', unit: '', min: 100, max: 10000, decimals: 0 },
      { symbol: 'S_r', ascii: 'Sr', label: 'survival rate', unit: 'decimal', min: 0.6, max: 0.9, decimals: 2 },
    ],
    compute: v => v.Ni * v.Sr,
    keyConcept: 'Surviving population = initial stock × survival rate.',
    mistakes: ['Using survival as %', 'Dividing instead of multiplying', 'Omitting factor'],
    distractors: [v => v.Ni / v.Sr, v => v.Ni * v.Sr * 1.1, v => v.Ni * v.Sr * 0.9, v => v.Ni * (1 - v.Sr)],
  },
  {
    formulaId: 'b-aerators', area: 'B', unknown: 'N_a',
    formulaText: 'N_a = (DO_t - DO_c) / a_cap',
    unit: '', round: 0,
    vars: [
      { symbol: 'DO_t', ascii: 'DOt', label: 'target DO', unit: 'mg/L', min: 5, max: 8, decimals: 1 },
      { symbol: 'DO_c', ascii: 'DOc', label: 'current DO', unit: 'mg/L', min: 2, max: 4, decimals: 1 },
      { symbol: 'a_cap', ascii: 'ac', label: 'oxygen transfer per aerator', unit: 'mg/L', min: 1, max: 4, decimals: 1 },
    ],
    compute: v => Math.max(1, Math.ceil((v.DOt - v.DOc) / v.ac)),
    keyConcept: 'Aerators required = (target−current DO) ÷ oxygen transfer per aerator, rounded up.',
    mistakes: ['Forgetting to round up', 'Adding DO values', 'Dividing then flooring to zero'],
    distractors: [v => Math.ceil(v.DOt - v.DOc) * v.ac, v => Math.ceil((v.DOc - v.DOt) / v.ac), v => Math.ceil((v.DOt - v.DOc) / v.ac) + 1, v => Math.floor((v.DOt - v.DOc) / v.ac)],
  },
  {
    formulaId: 'b-oxygen', area: 'B', unknown: 'O_2',
    formulaText: 'O_2 = (DO_t - DO_c) × V',
    unit: 'g', round: 0,
    vars: [
      { symbol: 'DO_t', ascii: 'DOt', label: 'target DO', unit: 'mg/L', min: 5, max: 8, decimals: 1 },
      { symbol: 'DO_c', ascii: 'DOc', label: 'current DO', unit: 'mg/L', min: 2, max: 4, decimals: 1 },
      { symbol: 'V', ascii: 'V', label: 'water volume', unit: 'm³', min: 100, max: 1000, decimals: 0 },
    ],
    compute: v => (v.DOt - v.DOc) * v.V,
    keyConcept: 'Oxygen needed = DO deficit × volume (mg/L×m³ → g).',
    mistakes: ['Adding DO values', 'Multiplying then subtracting wrong', 'Unit conversion (m³×mg/L=g)'],
    distractors: [v => (v.DOt + v.DOc) * v.V, v => (v.DOt - v.DOc) / v.V, v => (v.DOt - v.DOc) * v.V * 1.1, v => (v.DOt - v.DOc) * v.V * 0.9],
  },
  {
    formulaId: 'b-ammonia', area: 'B', unknown: 'NH_3',
    formulaText: 'NH_3 = TAN × V',
    unit: 'g', round: 0,
    vars: [
      { symbol: 'TAN', ascii: 'TAN', label: 'total ammonia nitrogen', unit: 'mg/L', min: 0.5, max: 3, decimals: 1 },
      { symbol: 'V', ascii: 'V', label: 'water volume', unit: 'm³', min: 100, max: 1000, decimals: 0 },
    ],
    compute: v => v.TAN * v.V,
    keyConcept: 'Total ammonia = TAN × volume.',
    mistakes: ['Dividing instead of multiplying', 'Unit conversion', 'Omitting factor'],
    distractors: [v => v.TAN / v.V, v => v.TAN * v.V * 1.1, v => v.TAN * v.V * 0.9, v => v.TAN + v.V],
  },
  {
    formulaId: 'b-bod', area: 'B', unknown: 'L',
    formulaText: 'L = C × Q × t',
    unit: 'kg', round: 1,
    vars: [
      { symbol: 'C', ascii: 'C', label: 'BOD concentration', unit: 'mg/L', min: 50, max: 300, decimals: 0 },
      { symbol: 'Q', ascii: 'Q', label: 'flow rate', unit: 'L/h', min: 1000, max: 5000, decimals: 0 },
      { symbol: 't', ascii: 't', label: 'duration', unit: 'h', min: 8, max: 24, decimals: 0 },
    ],
    compute: v => (v.C * v.Q * v.t) / 1e6,
    keyConcept: 'BOD load = concentration × flow × time (mg·L/h → kg), divide by 10⁶.',
    mistakes: ['Forgetting /10⁶ unit conversion', 'Omitting a factor', 'Adding factors'],
    distractors: [v => v.C * v.Q * v.t, v => (v.C * v.Q * v.t) / 1e6 * 1.1, v => (v.C * v.Q) / 1e6 * v.t, v => (v.C * v.Q * v.t) / 1e6 / 2],
  },
  {
    formulaId: 'b-newton', area: 'B', unknown: 'F',
    formulaText: 'F = m × a',
    unit: 'N', round: 1,
    vars: [
      { symbol: 'm', ascii: 'm', label: 'mass', unit: 'kg', min: 5, max: 100, decimals: 0 },
      { symbol: 'a', ascii: 'a', label: 'acceleration', unit: 'm/s²', min: 1, max: 10, decimals: 1 },
    ],
    compute: v => v.m * v.a,
    keyConcept: 'Newton: force = mass × acceleration.',
    mistakes: ['Dividing instead of multiplying', 'Using weight instead of mass', 'Omitting factor'],
    distractors: [v => v.m / v.a, v => v.m * v.a * 9.81, v => v.m * v.a * 1.1, v => v.m + v.a],
  },
  {
    formulaId: 'b-kinematics', area: 'B', unknown: 'v',
    formulaText: 'v = u + a×t',
    unit: 'm/s', round: 1,
    vars: [
      { symbol: 'u', ascii: 'u', label: 'initial velocity', unit: 'm/s', min: 0, max: 10, decimals: 0 },
      { symbol: 'a', ascii: 'a', label: 'acceleration', unit: 'm/s²', min: 1, max: 5, decimals: 1 },
      { symbol: 't', ascii: 't', label: 'time', unit: 's', min: 2, max: 10, decimals: 0 },
    ],
    compute: v => v.u + v.a * v.t,
    keyConcept: 'Final velocity = initial + acceleration × time.',
    mistakes: ['Subtracting instead of adding', 'Omitting initial velocity', 'Multiplying u×t'],
    distractors: [v => v.u - v.a * v.t, v => v.u * v.a * v.t, v => v.a * v.t, v => v.u + v.a * v.t * 2],
  },
  {
    formulaId: 'b-centripetal', area: 'B', unknown: 'a_c',
    formulaText: 'a_c = v² / r',
    unit: 'm/s²', round: 2,
    vars: [
      { symbol: 'v', ascii: 'v', label: 'speed', unit: 'm/s', min: 5, max: 20, decimals: 0 },
      { symbol: 'r', ascii: 'r', label: 'radius of curvature', unit: 'm', min: 10, max: 50, decimals: 0 },
    ],
    compute: v => v.v * v.v / v.r,
    keyConcept: 'Centripetal acceleration = v² ÷ r.',
    mistakes: ['Not squaring velocity', 'Multiplying instead of dividing', 'Using v/r'],
    distractors: [v => v.v / v.r, v => v.v * v.v * v.r, v => v.v * v.v / v.r * 1.1, v => v.v * v.v / (v.r * 2)],
  },
  {
    formulaId: 'b-momentum', area: 'B', unknown: 'p',
    formulaText: 'p = m × v',
    unit: 'kg·m/s', round: 0,
    vars: [
      { symbol: 'm', ascii: 'm', label: 'mass', unit: 'kg', min: 10, max: 100, decimals: 0 },
      { symbol: 'v', ascii: 'v', label: 'velocity', unit: 'm/s', min: 2, max: 10, decimals: 0 },
    ],
    compute: v => v.m * v.v,
    keyConcept: 'Momentum = mass × velocity.',
    mistakes: ['Dividing instead of multiplying', 'Omitting factor', 'Unit confusion'],
    distractors: [v => v.m / v.v, v => v.m * v.v * 1.1, v => v.m * v.v * 0.9, v => v.m + v.v],
  },
  {
    formulaId: 'b-force-components', area: 'B', unknown: 'F_x',
    formulaText: 'F_x = F × cos θ',
    unit: 'N', round: 1,
    vars: [
      { symbol: 'F', ascii: 'F', label: 'force magnitude', unit: 'N', min: 50, max: 500, decimals: 0 },
      { symbol: 'θ', ascii: 'th', label: 'angle from horizontal', unit: '°', min: 20, max: 60, decimals: 0 },
    ],
    compute: v => v.F * Math.cos(v.th * Math.PI / 180),
    keyConcept: 'Horizontal force component = F × cos θ (θ in degrees).',
    mistakes: ['Using sin instead of cos', 'Using radians for θ', 'Multiplying by θ directly'],
    distractors: [v => v.F * Math.sin(v.th * Math.PI / 180), v => v.F * Math.cos(v.th), v => v.F * v.th / 100, v => v.F * Math.cos(v.th * Math.PI / 180) * 1.1],
  },
  {
    formulaId: 'b-resultant', area: 'B', unknown: 'R',
    formulaText: 'R = sqrt(ΣFx² + ΣFy²)',
    unit: 'N', round: 1,
    vars: [
      { symbol: 'ΣFx', ascii: 'Fx', label: 'sum of x-components', unit: 'N', min: 50, max: 200, decimals: 0 },
      { symbol: 'ΣFy', ascii: 'Fy', label: 'sum of y-components', unit: 'N', min: 30, max: 150, decimals: 0 },
    ],
    compute: v => Math.sqrt(v.Fx * v.Fx + v.Fy * v.Fy),
    keyConcept: 'Resultant = √(ΣFx² + ΣFy²).',
    mistakes: ['Adding without squaring', 'Forgetting square root', 'Subtracting components'],
    distractors: [v => v.Fx + v.Fy, v => Math.sqrt(v.Fx * v.Fx - v.Fy * v.Fy), v => Math.sqrt(v.Fx * v.Fx + v.Fy * v.Fy) * 1.1, v => Math.sqrt(v.Fx * v.Fx + v.Fy * v.Fy) * 0.9],
  },
  {
    formulaId: 'b-momwork', area: 'B', unknown: 'M',
    formulaText: 'M = F × d',
    unit: 'N·m', round: 0,
    vars: [
      { symbol: 'F', ascii: 'F', label: 'force', unit: 'N', min: 100, max: 1000, decimals: 0 },
      { symbol: 'd', ascii: 'd', label: 'moment arm or distance', unit: 'm', min: 0.5, max: 3, decimals: 1 },
    ],
    compute: v => v.F * v.d,
    keyConcept: 'Moment/work = force × distance.',
    mistakes: ['Dividing instead of multiplying', 'Omitting factor', 'Unit mismatch'],
    distractors: [v => v.F / v.d, v => v.F * v.d * 1.1, v => v.F * v.d * 0.9, v => v.F + v.d],
  },
  {
    formulaId: 'b-equilibrium', area: 'B', unknown: 'ΣF',
    formulaText: 'ΣF = 0, ΣM = 0',
    unit: 'N', round: 0,
    vars: [
      { symbol: 'F_up', ascii: 'Fu', label: 'upward force', unit: 'N', min: 100, max: 500, decimals: 0 },
      { symbol: 'F_dn', ascii: 'Fdn', label: 'downward force', unit: 'N', min: 100, max: 500, decimals: 0 },
    ],
    compute: v => Math.abs(v.Fu - v.Fdn),
    keyConcept: 'Equilibrium: sum of forces = 0, so up force balances down force.',
    mistakes: ['Adding forces instead of balancing', 'Ignoring sign convention', 'Thinking zero output'],
    distractors: [v => v.Fu + v.Fdn, v => v.Fu * v.Fdn / 100, v => Math.abs(v.Fu - v.Fdn) * 1.1, v => Math.abs(v.Fu - v.Fdn) * 0.9],
  },
  {
    formulaId: 'b-power-mech', area: 'B', unknown: 'P',
    formulaText: 'P = W / t',
    unit: 'W', round: 1,
    vars: [
      { symbol: 'W', ascii: 'W', label: 'work done', unit: 'J', min: 500, max: 5000, decimals: 0 },
      { symbol: 't', ascii: 't', label: 'time', unit: 's', min: 10, max: 60, decimals: 0 },
    ],
    compute: v => v.W / v.t,
    keyConcept: 'Power = work ÷ time.',
    mistakes: ['Multiplying instead of dividing', 'Reversing ratio', 'Unit mismatch'],
    distractors: [v => v.W * v.t, v => v.t / v.W, v => v.W / v.t * 1.1, v => v.W / v.t * 0.9],
  },
);

// ---------------------------------------------------------------------------
// AREA C: Post-harvest, Bio-processing, Structures, Electricity
// ---------------------------------------------------------------------------
add(
  {
    formulaId: 'c-mc-wet', area: 'C', unknown: 'MC_wb',
    formulaText: 'MC_wb = (W_w / W_t) × 100%',
    unit: '%', round: 1,
    vars: [
      { symbol: 'W_w', ascii: 'Ww', label: 'weight of water', unit: 'kg', min: 20, max: 80, decimals: 0 },
      { symbol: 'W_t', ascii: 'Wt', label: 'total weight', unit: 'kg', min: 100, max: 200, decimals: 0 },
    ],
    conversions: [
      { ascii: 'Ww', unit: 'lb', factor: 2.205, fromUnit: 'kg' },
      { ascii: 'Wt', unit: 'lb', factor: 2.205, fromUnit: 'kg' },
    ],
    compute: v => (v.Ww / v.Wt) * 100,
    keyConcept: 'Wet-basis moisture = water weight ÷ total weight × 100%.',
    mistakes: ['Using dry weight as denominator', 'Forgetting ×100', 'Reversing ratio'],
    distractors: [v => v.Ww / v.Wt, v => (v.Ww / (v.Wt - v.Ww)) * 100, v => (v.Ww / v.Wt) * 100 * 1.1, v => (v.Wt / v.Ww) * 100],
  },
  {
    formulaId: 'c-mc-dry', area: 'C', unknown: 'MC_db',
    formulaText: 'MC_db = (W_w / W_d) × 100%',
    unit: '%', round: 1,
    vars: [
      { symbol: 'W_w', ascii: 'Ww', label: 'weight of water', unit: 'kg', min: 20, max: 80, decimals: 0 },
      { symbol: 'W_d', ascii: 'Wd', label: 'dry matter weight', unit: 'kg', min: 60, max: 120, decimals: 0 },
    ],
    conversions: [
      { ascii: 'Ww', unit: 'lb', factor: 2.205, fromUnit: 'kg' },
      { ascii: 'Wd', unit: 'lb', factor: 2.205, fromUnit: 'kg' },
    ],
    compute: v => (v.Ww / v.Wd) * 100,
    keyConcept: 'Dry-basis moisture = water weight ÷ dry matter weight × 100%.',
    mistakes: ['Using total weight as denominator', 'Forgetting ×100', 'Reversing ratio'],
    distractors: [v => v.Ww / v.Wd, v => (v.Ww / (v.Wd + v.Ww)) * 100, v => (v.Ww / v.Wd) * 100 * 1.1, v => (v.Wd / v.Ww) * 100],
  },
  {
    formulaId: 'c-dry-matter', area: 'C', unknown: 'DM',
    formulaText: 'DM = W × (1 - MC_wb)',
    unit: 'kg', round: 1,
    vars: [
      { symbol: 'W', ascii: 'W', label: 'total wet weight', unit: 'kg', min: 100, max: 500, decimals: 0 },
      { symbol: 'MC_wb', ascii: 'MC', label: 'wet-basis moisture', unit: 'decimal', min: 0.1, max: 0.4, decimals: 2 },
    ],
    compute: v => v.W * (1 - v.MC),
    keyConcept: 'Dry matter = wet weight × (1 − moisture content).',
    mistakes: ['Using moisture without subtracting from 1', 'Multiplying by moisture', 'Adding instead of subtracting'],
    distractors: [v => v.W * v.MC, v => v.W * (1 + v.MC), v => v.W / (1 - v.MC), v => v.W * (1 - v.MC) * 1.1],
  },
  {
    formulaId: 'c-dry-matter-conservation', area: 'C', unknown: 'W_f',
    formulaText: 'W_f = W_i × (100 - MC_i) / (100 - MC_f)',
    unit: 'kg', round: 1,
    vars: [
      { symbol: 'W_i', ascii: 'Wi', label: 'initial weight', unit: 'kg', min: 1000, max: 5000, decimals: 0 },
      { symbol: 'MC_i', ascii: 'MCi', label: 'initial moisture', unit: '%', min: 20, max: 30, decimals: 0 },
      { symbol: 'MC_f', ascii: 'MCf', label: 'final moisture', unit: '%', min: 12, max: 16, decimals: 0 },
    ],
    compute: v => v.Wi * (100 - v.MCi) / (100 - v.MCf),
    keyConcept: 'Dry matter conserved: W_f = W_i × (100−MC_i) ÷ (100−MC_f).',
    mistakes: ['Reversing numerator/denominator', 'Using moisture directly without 100−', 'Adding moistures'],
    distractors: [v => v.Wi * (100 - v.MCf) / (100 - v.MCi), v => v.Wi * (v.MCi / v.MCf), v => v.Wi * (100 - v.MCi) / (100 - v.MCf) * 1.1, v => v.Wi * (100 - v.MCi) / (100 - v.MCf) * 0.9],
  },
  {
    formulaId: 'c-water-removed', area: 'C', unknown: 'W_rem',
    formulaText: 'W_rem = W_i - W_f',
    unit: 'kg', round: 1,
    vars: [
      { symbol: 'W_i', ascii: 'Wi', label: 'initial weight', unit: 'kg', min: 1000, max: 5000, decimals: 0 },
      { symbol: 'W_f', ascii: 'Wf', label: 'final weight', unit: 'kg', min: 800, max: 4000, decimals: 0 },
    ],
    compute: v => v.Wi - v.Wf,
    keyConcept: 'Water removed = initial weight − final weight.',
    mistakes: ['Adding instead of subtracting', 'Reversing subtraction', 'Using moisture %'],
    distractors: [v => v.Wi + v.Wf, v => v.Wf - v.Wi, v => v.Wi - v.Wf * 0.5, v => v.Wi - v.Wf / 2],
  },
  {
    formulaId: 'c-moisture-removal-rate', area: 'C', unknown: 'MR',
    formulaText: 'MR = W_rem / t',
    unit: 'kg/h', round: 1,
    vars: [
      { symbol: 'W_rem', ascii: 'Wr', label: 'water removed', unit: 'kg', min: 200, max: 1000, decimals: 0 },
      { symbol: 't', ascii: 't', label: 'drying time', unit: 'h', min: 2, max: 12, decimals: 0 },
    ],
    compute: v => v.Wr / v.t,
    keyConcept: 'Moisture removal rate = water removed ÷ time.',
    mistakes: ['Multiplying instead of dividing', 'Reversing ratio', 'Unit mismatch'],
    distractors: [v => v.Wr * v.t, v => v.t / v.Wr, v => v.Wr / v.t * 1.1, v => v.Wr / v.t * 0.9],
  },
  {
    formulaId: 'c-drying-air', area: 'C', unknown: 'm_a',
    formulaText: 'm_a = m_w / (w_out - w_in)',
    unit: 'kg', round: 0,
    vars: [
      { symbol: 'm_w', ascii: 'mw', label: 'water to remove', unit: 'kg', min: 100, max: 500, decimals: 0 },
      { symbol: 'w_out', ascii: 'wo', label: 'exit humidity ratio', unit: 'kg/kg', min: 0.02, max: 0.05, decimals: 3 },
      { symbol: 'w_in', ascii: 'wi', label: 'inlet humidity ratio', unit: 'kg/kg', min: 0.01, max: 0.02, decimals: 3 },
    ],
    compute: v => v.mw / (v.wo - v.wi),
    keyConcept: 'Dry air required = water to remove ÷ (exit−inlet humidity ratio).',
    mistakes: ['Adding humidity ratios instead of subtracting', 'Multiplying instead of dividing', 'Reversing ratio'],
    distractors: [v => v.mw / (v.wo + v.wi), v => v.mw * (v.wo - v.wi), v => v.mw / (v.wo - v.wi) * 1.1, v => v.mw / (v.wo - v.wi) * 0.9],
  },
  {
    formulaId: 'c-milling-recovery', area: 'C', unknown: 'Recovery',
    formulaText: 'Recovery% = (M_milled / M_paddy) × 100%',
    unit: '%', round: 1,
    vars: [
      { symbol: 'M_milled', ascii: 'Mm', label: 'mass of milled rice', unit: 'kg', min: 500, max: 900, decimals: 0 },
      { symbol: 'M_paddy', ascii: 'Mp', label: 'mass of paddy input', unit: 'kg', min: 1000, max: 1500, decimals: 0 },
    ],
    compute: v => (v.Mm / v.Mp) * 100,
    keyConcept: 'Milling recovery = milled rice ÷ paddy input × 100%.',
    mistakes: ['Forgetting ×100', 'Reversing ratio', 'Using byproduct mass'],
    distractors: [v => v.Mm / v.Mp, v => (v.Mp / v.Mm) * 100, v => (v.Mm / v.Mp) * 100 * 1.1, v => (v.Mm / v.Mp) * 90],
  },
  {
    formulaId: 'c-drying-efficiency', area: 'C', unknown: 'η_dry',
    formulaText: 'η_dry = (W_evap / W_theo) × 100%',
    unit: '%', round: 1,
    vars: [
      { symbol: 'W_evap', ascii: 'We', label: 'actual water evaporated', unit: 'kg', min: 80, max: 120, decimals: 0 },
      { symbol: 'W_theo', ascii: 'Wt', label: 'theoretical water to remove', unit: 'kg', min: 100, max: 150, decimals: 0 },
    ],
    compute: v => (v.We / v.Wt) * 100,
    keyConcept: 'Drying efficiency = actual evaporated ÷ theoretical × 100%.',
    mistakes: ['Forgetting ×100', 'Reversing ratio', 'Using energy instead of water'],
    distractors: [v => v.We / v.Wt, v => (v.Wt / v.We) * 100, v => (v.We / v.Wt) * 100 * 1.1, v => (v.We / v.Wt) * 90],
  },
  {
    formulaId: 'c-sensible-heat', area: 'C', unknown: 'Q',
    formulaText: 'Q = m × C_p × ΔT',
    unit: 'kJ', round: 1,
    vars: [
      { symbol: 'm', ascii: 'm', label: 'mass', unit: 'kg', min: 10, max: 100, decimals: 0 },
      { symbol: 'C_p', ascii: 'Cp', label: 'specific heat', unit: 'kJ/kg·°C', min: 1.0, max: 4.2, decimals: 2 },
      { symbol: 'ΔT', ascii: 'dT', label: 'temperature change', unit: '°C', min: 20, max: 80, decimals: 0 },
    ],
    compute: v => v.m * v.Cp * v.dT,
    keyConcept: 'Sensible heat = mass × specific heat × temperature change.',
    mistakes: ['Omitting a factor', 'Adding instead of multiplying', 'Unit mismatch'],
    distractors: [v => v.m * (v.Cp + v.dT), v => v.m * v.Cp * v.dT * 1.1, v => v.m * v.Cp * v.dT * 0.9, v => v.m * v.Cp * v.dT / 1000],
  },
  {
    formulaId: 'c-latent-heat', area: 'C', unknown: 'Q',
    formulaText: 'Q = m × λ',
    unit: 'kJ', round: 0,
    vars: [
      { symbol: 'm', ascii: 'm', label: 'mass', unit: 'kg', min: 10, max: 100, decimals: 0 },
      { symbol: 'λ', ascii: 'lam', label: 'latent heat of vaporization', unit: 'kJ/kg', min: 2000, max: 2500, decimals: 0 },
    ],
    compute: v => v.m * v.lam,
    keyConcept: 'Latent heat = mass × latent heat of phase change.',
    mistakes: ['Dividing instead of multiplying', 'Omitting factor', 'Using λ as kJ'],
    distractors: [v => v.m / v.lam, v => v.m * v.lam * 1.1, v => v.m * v.lam * 0.9, v => v.m + v.lam],
  },
  {
    formulaId: 'c-total-heat', area: 'C', unknown: 'Q_t',
    formulaText: 'Q_t = m·C_p·ΔT + m·λ',
    unit: 'kJ', round: 0,
    vars: [
      { symbol: 'm', ascii: 'm', label: 'mass', unit: 'kg', min: 10, max: 50, decimals: 0 },
      { symbol: 'C_p', ascii: 'Cp', label: 'specific heat', unit: 'kJ/kg·°C', min: 2.0, max: 4.2, decimals: 2 },
      { symbol: 'ΔT', ascii: 'dT', label: 'temperature change', unit: '°C', min: 20, max: 80, decimals: 0 },
      { symbol: 'λ', ascii: 'lam', label: 'latent heat', unit: 'kJ/kg', min: 2000, max: 2500, decimals: 0 },
    ],
    compute: v => v.m * v.Cp * v.dT + v.m * v.lam,
    keyConcept: 'Total heat = sensible + latent = m·Cp·ΔT + m·λ.',
    mistakes: ['Omitting the latent term', 'Omitting the sensible term', 'Multiplying the two terms'],
    distractors: [v => v.m * v.Cp * v.dT, v => v.m * v.lam, v => v.m * v.Cp * v.dT * v.lam, v => v.m * (v.Cp * v.dT + v.lam) * 1.1],
  },
  {
    formulaId: 'c-lmtd', area: 'C', unknown: 'LMTD',
    formulaText: 'LMTD = (ΔT_1 - ΔT_2) / ln(ΔT_1/ΔT_2)',
    unit: '°C', round: 1,
    vars: [
      { symbol: 'ΔT_1', ascii: 'dT1', label: 'temperature difference end 1', unit: '°C', min: 40, max: 80, decimals: 0 },
      { symbol: 'ΔT_2', ascii: 'dT2', label: 'temperature difference end 2', unit: '°C', min: 10, max: 30, decimals: 0 },
    ],
    compute: v => (v.dT1 - v.dT2) / Math.log(v.dT1 / v.dT2),
    keyConcept: 'LMTD = (ΔT₁−ΔT₂) ÷ ln(ΔT₁/ΔT₂).',
    mistakes: ['Using log10 instead of ln', 'Adding in numerator', 'Reversing ΔT ratio'],
    distractors: [v => (v.dT1 - v.dT2) / Math.log10(v.dT1 / v.dT2), v => (v.dT1 + v.dT2) / 2, v => (v.dT1 - v.dT2) / Math.log(v.dT2 / v.dT1), v => (v.dT1 - v.dT2) / Math.log(v.dT1 / v.dT2) * 1.1],
  },
  {
    formulaId: 'c-heat-exchanger', area: 'C', unknown: 'Q',
    formulaText: 'Q = U × A × LMTD',
    unit: 'W', round: 0,
    vars: [
      { symbol: 'U', ascii: 'U', label: 'overall heat transfer coeff', unit: 'W/m²·°C', min: 200, max: 800, decimals: 0 },
      { symbol: 'A', ascii: 'A', label: 'heat transfer area', unit: 'm²', min: 1, max: 10, decimals: 1 },
      { symbol: 'LMTD', ascii: 'LMTD', label: 'log mean temperature diff', unit: '°C', min: 20, max: 60, decimals: 1 },
    ],
    compute: v => v.U * v.A * v.LMTD,
    keyConcept: 'Heat exchanger duty = U × A × LMTD.',
    mistakes: ['Omitting a factor', 'Dividing instead of multiplying', 'Unit mismatch'],
    distractors: [v => v.U * v.A, v => v.U * v.A * v.LMTD * 1.1, v => v.U * v.A * v.LMTD * 0.9, v => (v.U * v.A) / v.LMTD],
  },
  {
    formulaId: 'c-heat-load', area: 'C', unknown: 'Q',
    formulaText: 'Q = q × A',
    unit: 'W', round: 0,
    vars: [
      { symbol: 'q', ascii: 'q', label: 'load per unit area', unit: 'W/m²', min: 50, max: 200, decimals: 0 },
      { symbol: 'A', ascii: 'A', label: 'area', unit: 'm²', min: 20, max: 200, decimals: 0 },
    ],
    compute: v => v.q * v.A,
    keyConcept: 'Heat load = load per unit area × area.',
    mistakes: ['Dividing instead of multiplying', 'Omitting factor', 'Unit mismatch'],
    distractors: [v => v.q / v.A, v => v.q * v.A * 1.1, v => v.q * v.A * 0.9, v => v.q + v.A],
  },
  {
    formulaId: 'c-vs-loading', area: 'C', unknown: 'VS',
    formulaText: 'VS = N × M × F_vs',
    unit: 'kg', round: 0,
    vars: [
      { symbol: 'N', ascii: 'N', label: 'number of animals', unit: '', min: 50, max: 500, decimals: 0 },
      { symbol: 'M', ascii: 'M', label: 'manure per animal', unit: 'kg/day', min: 2, max: 10, decimals: 1 },
      { symbol: 'F_vs', ascii: 'Fvs', label: 'volatile solids fraction', unit: 'decimal', min: 0.3, max: 0.8, decimals: 2 },
    ],
    compute: v => v.N * v.M * v.Fvs,
    keyConcept: 'Volatile solids = animals × manure × VS fraction.',
    mistakes: ['Using VS fraction as %', 'Omitting a factor', 'Adding factors'],
    distractors: [v => v.N * v.M, v => v.N * v.M * v.Fvs * 1.1, v => v.N * v.M * v.Fvs * 0.9, v => (v.N * v.M) / v.Fvs],
  },
  {
    formulaId: 'c-biogas', area: 'C', unknown: 'V_b',
    formulaText: 'V_b = VS × Y',
    unit: 'm³/day', round: 1,
    vars: [
      { symbol: 'VS', ascii: 'VS', label: 'volatile solids', unit: 'kg/day', min: 50, max: 500, decimals: 0 },
      { symbol: 'Y', ascii: 'Y', label: 'biogas yield', unit: 'm³/kg VS', min: 0.2, max: 0.5, decimals: 2 },
    ],
    compute: v => v.VS * v.Y,
    keyConcept: 'Biogas production = volatile solids × yield.',
    mistakes: ['Dividing instead of multiplying', 'Omitting factor', 'Unit mismatch'],
    distractors: [v => v.VS / v.Y, v => v.VS * v.Y * 1.1, v => v.VS * v.Y * 0.9, v => v.VS + v.Y],
  },
  {
    formulaId: 'c-methane', area: 'C', unknown: 'V_CH4',
    formulaText: 'V_CH4 = V_b × %CH4',
    unit: 'm³/day', round: 1,
    vars: [
      { symbol: 'V_b', ascii: 'Vb', label: 'total biogas', unit: 'm³/day', min: 50, max: 300, decimals: 0 },
      { symbol: '%CH4', ascii: 'CH4', label: 'methane fraction', unit: 'decimal', min: 0.55, max: 0.65, decimals: 2 },
    ],
    compute: v => v.Vb * v.CH4,
    keyConcept: 'Methane content = biogas × methane fraction.',
    mistakes: ['Using % instead of decimal', 'Dividing instead of multiplying', 'Omitting factor'],
    distractors: [v => v.Vb / v.CH4, v => v.Vb * v.CH4 * 1.1, v => v.Vb * v.CH4 * 0.9, v => v.Vb * (1 - v.CH4)],
  },
  {
    formulaId: 'c-fermenter-volume', area: 'C', unknown: 'V_f',
    formulaText: 'V_f = V_d × HRT × H_f',
    unit: 'm³', round: 0,
    vars: [
      { symbol: 'V_d', ascii: 'Vd', label: 'daily substrate volume', unit: 'm³/day', min: 2, max: 20, decimals: 1 },
      { symbol: 'HRT', ascii: 'HRT', label: 'hydraulic retention time', unit: 'days', min: 10, max: 30, decimals: 0 },
      { symbol: 'H_f', ascii: 'Hf', label: 'headspace factor', unit: '', min: 1.2, max: 1.3, decimals: 1 },
    ],
    compute: v => v.Vd * v.HRT * v.Hf,
    keyConcept: 'Fermenter volume = daily volume × HRT × headspace factor.',
    mistakes: ['Omitting headspace factor', 'Dividing instead of multiplying', 'Unit mismatch'],
    distractors: [v => v.Vd * v.HRT, v => v.Vd * v.HRT * v.Hf * 1.1, v => v.Vd * v.HRT * v.Hf * 0.9, v => (v.Vd * v.HRT) / v.Hf],
  },
  {
    formulaId: 'c-biogas-energy', area: 'C', unknown: 'E',
    formulaText: 'E = V_b × %CH4 × LHV',
    unit: 'MJ/day', round: 0,
    vars: [
      { symbol: 'V_b', ascii: 'Vb', label: 'biogas volume', unit: 'm³/day', min: 50, max: 300, decimals: 0 },
      { symbol: '%CH4', ascii: 'CH4', label: 'methane fraction', unit: 'decimal', min: 0.55, max: 0.65, decimals: 2 },
      { symbol: 'LHV', ascii: 'LHV', label: 'LHV of methane', unit: 'MJ/m³', min: 35, max: 40, decimals: 0 },
    ],
    compute: v => v.Vb * v.CH4 * v.LHV,
    keyConcept: 'Biogas energy = volume × methane fraction × lower heating value.',
    mistakes: ['Using methane % instead of decimal', 'Omitting a factor', 'Unit mismatch'],
    distractors: [v => v.Vb * v.LHV, v => v.Vb * v.CH4 * v.LHV * 1.1, v => v.Vb * v.CH4 * v.LHV * 0.9, v => v.Vb * v.CH4],
  },
  {
    formulaId: 'c-biogas-complete', area: 'C', unknown: 'V_b',
    formulaText: 'V_b = N × W × r × (1-MC) × VS × Y',
    unit: 'm³/day', round: 1,
    vars: [
      { symbol: 'N', ascii: 'N', label: 'number of animals', unit: '', min: 50, max: 300, decimals: 0 },
      { symbol: 'W', ascii: 'W', label: 'waste per animal', unit: 'kg/day', min: 10, max: 30, decimals: 0 },
      { symbol: 'r', ascii: 'r', label: 'collection rate', unit: 'decimal', min: 0.5, max: 0.9, decimals: 2 },
      { symbol: 'MC', ascii: 'MC', label: 'moisture content', unit: 'decimal', min: 0.6, max: 0.9, decimals: 2 },
      { symbol: 'VS', ascii: 'VS', label: 'volatile solids fraction', unit: 'decimal', min: 0.2, max: 0.5, decimals: 2 },
      { symbol: 'Y', ascii: 'Y', label: 'biogas yield', unit: 'm³/kg VS', min: 0.2, max: 0.5, decimals: 2 },
    ],
    compute: v => v.N * v.W * v.r * (1 - v.MC) * v.VS * v.Y,
    keyConcept: 'Complete biogas = animals × waste × collection × (1−MC) × VS × yield.',
    mistakes: ['Forgetting (1−MC)', 'Using MC directly', 'Omitting a factor'],
    distractors: [v => v.N * v.W * v.r * v.MC * v.VS * v.Y, v => v.N * v.W * v.r * (1 - v.MC) * v.VS, v => v.N * v.W * v.r * (1 - v.MC) * v.VS * v.Y * 1.1, v => v.N * v.W * v.r * (1 - v.MC) * v.VS * v.Y * 0.9],
  },
  {
    formulaId: 'c-waste-stream', area: 'C', unknown: 'M_r',
    formulaText: 'M_r = M_t × p_r',
    unit: 't', round: 1,
    vars: [
      { symbol: 'M_t', ascii: 'Mt', label: 'total waste generated', unit: 't', min: 10, max: 100, decimals: 0 },
      { symbol: 'p_r', ascii: 'pr', label: 'recycle fraction', unit: 'decimal', min: 0.2, max: 0.5, decimals: 2 },
    ],
    compute: v => v.Mt * v.pr,
    keyConcept: 'Recycled waste = total waste × recycle fraction.',
    mistakes: ['Dividing instead of multiplying', 'Using fraction as %', 'Omitting factor'],
    distractors: [v => v.Mt / v.pr, v => v.Mt * v.pr * 1.1, v => v.Mt * v.pr * 0.9, v => v.Mt - v.pr],
  },
  {
    formulaId: 'c-waste-mass', area: 'C', unknown: 'M',
    formulaText: 'M = ρ × V',
    unit: 't', round: 1,
    vars: [
      { symbol: 'ρ', ascii: 'rho', label: 'density', unit: 't/m³', min: 0.3, max: 0.8, decimals: 2 },
      { symbol: 'V', ascii: 'V', label: 'volume', unit: 'm³', min: 50, max: 500, decimals: 0 },
    ],
    compute: v => v.rho * v.V,
    keyConcept: 'Waste mass = density × volume.',
    mistakes: ['Dividing instead of multiplying', 'Unit mismatch', 'Omitting factor'],
    distractors: [v => v.rho / v.V, v => v.rho * v.V * 1.1, v => v.rho * v.V * 0.9, v => v.rho + v.V],
  },
  {
    formulaId: 'c-dvalue', area: 'C', unknown: 't',
    formulaText: 't = D × log(N_0/N)',
    unit: 'min', round: 2,
    vars: [
      { symbol: 'D', ascii: 'D', label: 'decimal reduction time', unit: 'min', min: 1, max: 5, decimals: 1 },
      { symbol: 'N_0', ascii: 'N0', label: 'initial microbial count', unit: '', min: 100000, max: 1000000, decimals: 0 },
      { symbol: 'N', ascii: 'N', label: 'surviving count', unit: '', min: 100, max: 1000, decimals: 0 },
    ],
    compute: v => v.D * Math.log10(v.N0 / v.N),
    keyConcept: 'D-value process time = D × log(N₀/N) (log base 10).',
    mistakes: ['Using natural log instead of log10', 'Reversing N₀/N', 'Multiplying counts'],
    distractors: [v => v.D * Math.log(v.N0 / v.N), v => v.D * Math.log10(v.N / v.N0), v => v.D * Math.log10(v.N0 / v.N) * 1.1, v => v.D * Math.log10(v.N0 * v.N)],
  },
  {
    formulaId: 'c-12d', area: 'C', unknown: 'F',
    formulaText: 'F = D × (log N_0 - log N)',
    unit: 'min', round: 2,
    vars: [
      { symbol: 'D', ascii: 'D', label: 'D-value', unit: 'min', min: 1, max: 5, decimals: 1 },
      { symbol: 'N_0', ascii: 'N0', label: 'initial spore count', unit: '', min: 1000000, max: 100000000, decimals: 0 },
      { symbol: 'N', ascii: 'N', label: 'final spore count', unit: '', min: 100, max: 1000, decimals: 0 },
    ],
    compute: v => v.D * (Math.log10(v.N0) - Math.log10(v.N)),
    keyConcept: '12D sterilization value = D × (log N₀ − log N).',
    mistakes: ['Subtracting counts instead of logs', 'Using natural logs', 'Reversing subtraction'],
    distractors: [v => v.D * (v.N0 - v.N), v => v.D * Math.log10(v.N - v.N0), v => v.D * (Math.log10(v.N0) - Math.log10(v.N)) * 1.1, v => v.D * (Math.log10(v.N0) + Math.log10(v.N))],
  },
  {
    formulaId: 'c-zvalue', area: 'C', unknown: 'F',
    formulaText: 'F = D_r × 10^(ΔT/z)',
    unit: 'min', round: 2,
    vars: [
      { symbol: 'D_r', ascii: 'Dr', label: 'D-value at reference temp', unit: 'min', min: 2, max: 8, decimals: 1 },
      { symbol: 'ΔT', ascii: 'dT', label: 'difference from reference', unit: '°C', min: 5, max: 15, decimals: 0 },
      { symbol: 'z', ascii: 'z', label: 'z-value', unit: '°C', min: 8, max: 12, decimals: 0 },
    ],
    compute: v => v.Dr * Math.pow(10, v.dT / v.z),
    keyConcept: 'Equivalence: F = D_r × 10^(ΔT/z).',
    mistakes: ['Using natural exp instead of 10^', 'Subtracting exponent', 'Reversing ΔT/z'],
    distractors: [v => v.Dr * Math.exp(v.dT / v.z), v => v.Dr * Math.pow(10, -v.dT / v.z), v => v.Dr * Math.pow(10, v.dT / v.z) * 1.1, v => v.Dr * Math.pow(10, v.z / v.dT)],
  },
  {
    formulaId: 'c-product-recovery', area: 'C', unknown: 'M_p',
    formulaText: 'M_p = M_i × R_r',
    unit: 'kg', round: 1,
    vars: [
      { symbol: 'M_i', ascii: 'Mi', label: 'input/produce mass', unit: 'kg', min: 500, max: 2000, decimals: 0 },
      { symbol: 'R_r', ascii: 'Rr', label: 'recovery fraction', unit: 'decimal', min: 0.6, max: 0.9, decimals: 2 },
    ],
    compute: v => v.Mi * v.Rr,
    keyConcept: 'Recovered product = input mass × recovery fraction.',
    mistakes: ['Dividing instead of multiplying', 'Using fraction as %', 'Omitting factor'],
    distractors: [v => v.Mi / v.Rr, v => v.Mi * v.Rr * 1.1, v => v.Mi * v.Rr * 0.9, v => v.Mi - v.Rr],
  },
  {
    formulaId: 'c-pearson', area: 'C', unknown: 'H',
    formulaText: 'H/L = (T - P_L) / (P_H - T)',
    unit: 'parts', round: 1,
    vars: [
      { symbol: 'T', ascii: 'T', label: 'target protein', unit: '%', min: 16, max: 22, decimals: 0 },
      { symbol: 'P_H', ascii: 'PH', label: 'high ingredient protein', unit: '%', min: 40, max: 50, decimals: 0 },
      { symbol: 'P_L', ascii: 'PL', label: 'low ingredient protein', unit: '%', min: 8, max: 12, decimals: 0 },
    ],
    compute: v => (v.T - v.PL) / (v.PH - v.T),
    keyConcept: 'Pearson square: H/L = (T−P_L) ÷ (P_H−T).',
    mistakes: ['Reversing numerator/denominator', 'Adding instead of subtracting', 'Forgetting denominator'],
    distractors: [v => (v.PH - v.T) / (v.T - v.PL), v => (v.T + v.PL) / (v.PH - v.T), v => (v.T - v.PL) / (v.PH - v.T) * 1.1, v => (v.T - v.PL) / (v.PH - v.T) * 0.9],
  },
  {
    formulaId: 'c-bending-stress', area: 'C', unknown: 'σ',
    formulaText: 'σ = M × c / I',
    unit: 'Pa', round: 0,
    vars: [
      { symbol: 'M', ascii: 'M', label: 'bending moment', unit: 'N·m', min: 500, max: 5000, decimals: 0 },
      { symbol: 'c', ascii: 'c', label: 'distance from neutral axis', unit: 'm', min: 0.02, max: 0.1, decimals: 3 },
      { symbol: 'I', ascii: 'I', label: 'moment of inertia', unit: 'm⁴', min: 0.00001, max: 0.0005, decimals: 6 },
    ],
    compute: v => v.M * v.c / v.I,
    keyConcept: 'Bending stress = Mc ÷ I (flexure formula).',
    mistakes: ['Multiplying by I instead of dividing', 'Omitting c', 'Unit mismatch'],
    distractors: [v => v.M * v.c * v.I, v => v.M / v.c * v.I, v => v.M * v.c / v.I * 1.1, v => v.M * v.c / v.I * 0.9],
  },
  {
    formulaId: 'c-eccentric', area: 'C', unknown: 'σ',
    formulaText: 'σ = P/A ± M·y/I',
    unit: 'Pa', round: 0,
    vars: [
      { symbol: 'P', ascii: 'P', label: 'axial load', unit: 'N', min: 50000, max: 200000, decimals: 0 },
      { symbol: 'A', ascii: 'A', label: 'cross-sectional area', unit: 'm²', min: 0.01, max: 0.05, decimals: 3 },
      { symbol: 'M', ascii: 'M', label: 'moment from eccentricity', unit: 'N·m', min: 500, max: 2000, decimals: 0 },
      { symbol: 'y', ascii: 'y', label: 'distance from centroid', unit: 'm', min: 0.02, max: 0.08, decimals: 3 },
      { symbol: 'I', ascii: 'I', label: 'moment of inertia', unit: 'm⁴', min: 0.00001, max: 0.0005, decimals: 6 },
    ],
    compute: v => v.P / v.A + v.M * v.y / v.I,
    keyConcept: 'Combined stress = P/A + My/I (add direct + bending stress).',
    mistakes: ['Subtracting instead of adding terms', 'Omitting the bending term', 'Omitting the direct stress term'],
    distractors: [v => Math.max(0, v.P / v.A - v.M * v.y / v.I), v => v.P / v.A, v => v.P / v.A + v.M * v.y / v.I * 1.1, v => v.P / v.A + v.M * v.y / v.I * 0.9],
  },
  {
    formulaId: 'c-direct-stress', area: 'C', unknown: 'σ',
    formulaText: 'σ = F / A',
    unit: 'Pa', round: 0,
    vars: [
      { symbol: 'F', ascii: 'F', label: 'applied force', unit: 'N', min: 50000, max: 300000, decimals: 0 },
      { symbol: 'A', ascii: 'A', label: 'resisting area', unit: 'm²', min: 0.01, max: 0.05, decimals: 3 },
    ],
    compute: v => v.F / v.A,
    keyConcept: 'Direct stress = force ÷ area.',
    mistakes: ['Multiplying instead of dividing', 'Reversing ratio', 'Unit mismatch'],
    distractors: [v => v.F * v.A, v => v.A / v.F, v => v.F / v.A * 1.1, v => v.F / v.A * 0.9],
  },
  {
    formulaId: 'c-strain', area: 'C', unknown: 'ε',
    formulaText: 'ε = ΔL / L',
    unit: '', round: 4,
    vars: [
      { symbol: 'ΔL', ascii: 'dL', label: 'change in length', unit: 'mm', min: 0.5, max: 3, decimals: 1 },
      { symbol: 'L', ascii: 'L', label: 'original length', unit: 'mm', min: 500, max: 2000, decimals: 0 },
    ],
    compute: v => v.dL / v.L,
    keyConcept: 'Strain = change in length ÷ original length (dimensionless).',
    mistakes: ['Multiplying instead of dividing', 'Reversing ratio', 'Unit mismatch'],
    distractors: [v => v.dL * v.L / 1000, v => v.L / v.dL, v => v.dL / v.L * 1.1, v => v.dL / v.L * 0.9],
  },
  {
    formulaId: 'c-modulus-elasticity', area: 'C', unknown: 'E',
    formulaText: 'E = σ / ε',
    unit: 'Pa', round: 0,
    vars: [
      { symbol: 'σ', ascii: 'sig', label: 'stress', unit: 'MPa', min: 100, max: 300, decimals: 0 },
      { symbol: 'ε', ascii: 'eps', label: 'strain', unit: '', min: 0.001, max: 0.003, decimals: 4 },
    ],
    compute: v => v.sig * 1e6 / v.eps,
    keyConcept: 'Modulus of elasticity = stress ÷ strain (stress in Pa).',
    mistakes: ['Using MPa without ×10⁶', 'Multiplying instead of dividing', 'Unit mismatch'],
    distractors: [v => v.sig / v.eps * 1e6, v => v.sig * v.eps, v => v.sig * 1e6 / v.eps * 1.1, v => v.sig * 1e6 / v.eps * 0.9],
  },
  {
    formulaId: 'c-shear-moment', area: 'C', unknown: 'V',
    formulaText: 'V = dM / dx',
    unit: 'N', round: 0,
    vars: [
      { symbol: 'dM', ascii: 'dM', label: 'moment change', unit: 'N·m', min: 100, max: 1000, decimals: 0 },
      { symbol: 'dx', ascii: 'dx', label: 'position change', unit: 'm', min: 0.5, max: 2, decimals: 1 },
    ],
    compute: v => v.dM / v.dx,
    keyConcept: 'Shear force = slope of bending moment diagram (dM/dx).',
    mistakes: ['Multiplying instead of dividing', 'Reversing ratio', 'Using absolute values wrong'],
    distractors: [v => v.dM * v.dx, v => v.dx / v.dM, v => v.dM / v.dx * 1.1, v => v.dM / v.dx * 0.9],
  },
  {
    formulaId: 'c-fixed-end', area: 'C', unknown: 'M_F',
    formulaText: 'M_F = w×L²/12 (uniform load)',
    unit: 'N·m', round: 0,
    vars: [
      { symbol: 'w', ascii: 'w', label: 'uniform load', unit: 'N/m', min: 500, max: 3000, decimals: 0 },
      { symbol: 'L', ascii: 'L', label: 'span', unit: 'm', min: 3, max: 8, decimals: 0 },
    ],
    compute: v => v.w * v.L * v.L / 12,
    keyConcept: 'Fixed-end moment for uniform load = wL²/12.',
    mistakes: ['Using /8 (point load factor) instead of /12', 'Not squaring L', 'Dividing by L'],
    distractors: [v => v.w * v.L * v.L / 8, v => v.w * v.L / 12, v => v.w * v.L * v.L / 12 * 1.1, v => v.w * v.L * v.L / 12 * 0.9],
  },
  {
    formulaId: 'c-simple-reaction', area: 'C', unknown: 'R_A',
    formulaText: 'R_A = R_B = P/2',
    unit: 'N', round: 0,
    vars: [
      { symbol: 'P', ascii: 'P', label: 'midspan point load', unit: 'N', min: 1000, max: 10000, decimals: 0 },
    ],
    compute: v => v.P / 2,
    keyConcept: 'Simply supported reaction with midspan load: each support = P/2.',
    mistakes: ['Using full P for each support', 'Using P×2', 'Dividing by span'],
    distractors: [v => v.P, v => v.P * 2, v => v.P / 3, v => v.P / 2 * 1.1],
  },
  {
    formulaId: 'c-max-moment', area: 'C', unknown: 'M_max',
    formulaText: 'M_max = P × L / 4',
    unit: 'N·m', round: 0,
    vars: [
      { symbol: 'P', ascii: 'P', label: 'midspan point load', unit: 'N', min: 1000, max: 10000, decimals: 0 },
      { symbol: 'L', ascii: 'L', label: 'span', unit: 'm', min: 3, max: 8, decimals: 0 },
    ],
    compute: v => v.P * v.L / 4,
    keyConcept: 'Max bending moment for midspan point load = PL/4.',
    mistakes: ['Using PL/8 (uniform load factor)', 'Dividing by 4 wrong', 'Multiplying by span'],
    distractors: [v => v.P * v.L / 8, v => v.P * v.L * 4, v => v.P * v.L / 4 * 1.1, v => v.P * v.L / 2],
  },
  {
    formulaId: 'c-ventilation', area: 'C', unknown: 'Q',
    formulaText: 'Q = V × ACH',
    unit: 'm³/h', round: 0,
    vars: [
      { symbol: 'V', ascii: 'V', label: 'room volume', unit: 'm³', min: 100, max: 1000, decimals: 0 },
      { symbol: 'ACH', ascii: 'ACH', label: 'air changes per hour', unit: '', min: 4, max: 15, decimals: 0 },
    ],
    compute: v => v.V * v.ACH,
    keyConcept: 'Ventilation rate = room volume × air changes per hour.',
    mistakes: ['Dividing instead of multiplying', 'Omitting factor', 'Unit mismatch'],
    distractors: [v => v.V / v.ACH, v => v.V * v.ACH * 1.1, v => v.V * v.ACH * 0.9, v => v.V + v.ACH],
  },
  {
    formulaId: 'c-air-velocity', area: 'C', unknown: 'v',
    formulaText: 'v = Q / A',
    unit: 'm/s', round: 2,
    vars: [
      { symbol: 'Q', ascii: 'Q', label: 'air flow rate', unit: 'm³/s', min: 1, max: 10, decimals: 1 },
      { symbol: 'A', ascii: 'A', label: 'duct cross-section', unit: 'm²', min: 0.5, max: 3, decimals: 1 },
    ],
    compute: v => v.Q / v.A,
    keyConcept: 'Air velocity = flow rate ÷ duct area.',
    mistakes: ['Multiplying instead of dividing', 'Reversing ratio', 'Unit mismatch'],
    distractors: [v => v.Q * v.A, v => v.A / v.Q, v => v.Q / v.A * 1.1, v => v.Q / v.A * 0.9],
  },
  {
    formulaId: 'c-saturation-vapor', area: 'C', unknown: 'P_vs',
    formulaText: 'P_vs = 0.6108 × exp(17.27T/(T+237.3))',
    unit: 'kPa', round: 2,
    vars: [
      { symbol: 'T', ascii: 'T', label: 'temperature', unit: '°C', min: 10, max: 40, decimals: 0 },
    ],
    compute: v => 0.6108 * Math.exp((17.27 * v.T) / (v.T + 237.3)),
    keyConcept: 'Magnus saturation vapor pressure = 0.6108 × e^(17.27T/(T+237.3)).',
    mistakes: ['Using log instead of exp', 'Reversing denominator terms', 'Forgetting 0.6108'],
    distractors: [v => 0.6108 * Math.exp((17.27 * v.T) / (v.T + 273.15)), v => 0.6108 * (17.27 * v.T) / (v.T + 237.3), v => 0.6108 * Math.exp((17.27 * v.T) / (v.T + 237.3)) * 1.1, v => 0.6108 * Math.exp((17.27 * v.T) / (v.T + 237.3)) * 0.9],
  },
  {
    formulaId: 'c-moist-enthalpy', area: 'C', unknown: 'h',
    formulaText: 'h = 1.005·T + W(2501 + 1.88T)',
    unit: 'kJ/kg', round: 2,
    vars: [
      { symbol: 'T', ascii: 'T', label: 'dry-bulb temperature', unit: '°C', min: 20, max: 40, decimals: 0 },
      { symbol: 'W', ascii: 'W', label: 'humidity ratio', unit: 'kg/kg', min: 0.01, max: 0.03, decimals: 3 },
    ],
    compute: v => 1.005 * v.T + v.W * (2501 + 1.88 * v.T),
    keyConcept: 'Moist air enthalpy = 1.005T + W(2501 + 1.88T).',
    mistakes: ['Forgetting the latent term', 'Using wrong W multiplier', 'Squaring T'],
    distractors: [v => 1.005 * v.T + v.W * 2501, v => v.W * (2501 + 1.88 * v.T), v => 1.005 * v.T + v.W * (2501 + 1.88 * v.T) * 1.1, v => 1.005 * v.T + v.W * (2501 + 1.88 * v.T) * 0.9],
  },
  {
    formulaId: 'c-actual-vapor', area: 'C', unknown: 'P_v',
    formulaText: 'P_v = RH × P_vs',
    unit: 'kPa', round: 2,
    vars: [
      { symbol: 'RH', ascii: 'RH', label: 'relative humidity', unit: 'decimal', min: 0.4, max: 0.9, decimals: 2 },
      { symbol: 'P_vs', ascii: 'Pvs', label: 'saturation vapor pressure', unit: 'kPa', min: 2, max: 6, decimals: 1 },
    ],
    compute: v => v.RH * v.Pvs,
    keyConcept: 'Actual vapor pressure = relative humidity × saturation vapor pressure.',
    mistakes: ['Using RH as %', 'Dividing instead of multiplying', 'Omitting factor'],
    distractors: [v => v.RH / v.Pvs, v => v.RH * v.Pvs * 1.1, v => v.RH * v.Pvs * 0.9, v => v.Pvs / v.RH],
  },
  {
    formulaId: 'c-relative-humidity', area: 'C', unknown: 'RH',
    formulaText: 'RH = (P_v / P_vs) × 100%',
    unit: '%', round: 1,
    vars: [
      { symbol: 'P_v', ascii: 'Pv', label: 'actual vapor pressure', unit: 'kPa', min: 1, max: 4, decimals: 1 },
      { symbol: 'P_vs', ascii: 'Pvs', label: 'saturation vapor pressure', unit: 'kPa', min: 3, max: 6, decimals: 1 },
    ],
    compute: v => (v.Pv / v.Pvs) * 100,
    keyConcept: 'Relative humidity = actual vapor pressure ÷ saturation × 100%.',
    mistakes: ['Forgetting ×100', 'Reversing ratio', 'Reporting decimal'],
    distractors: [v => v.Pv / v.Pvs, v => (v.Pvs / v.Pv) * 100, v => (v.Pv / v.Pvs) * 100 * 1.1, v => (v.Pv / v.Pvs) * 90],
  },
  {
    formulaId: 'c-tons-refrigeration', area: 'C', unknown: 'TR',
    formulaText: 'TR = Q / 3.517',
    unit: 'TR', round: 2,
    vars: [
      { symbol: 'Q', ascii: 'Q', label: 'cooling capacity', unit: 'kW', min: 10, max: 100, decimals: 0 },
    ],
    compute: v => v.Q / 3.517,
    keyConcept: 'Tons of refrigeration = cooling capacity (kW) ÷ 3.517 (1 TR = 3.517 kW).',
    mistakes: ['Multiplying by 3.517 instead of dividing', 'Using 3.52 constant wrongly', 'Reversing ratio'],
    distractors: [v => v.Q * 3.517, v => v.Q / 3.517 * 1.1, v => v.Q / 3.517 * 0.9, v => v.Q / 3.5],
  },
  {
    formulaId: 'c-condensing-hp', area: 'C', unknown: 'hp',
    formulaText: 'hp = BTU/hr / 2545',
    unit: 'hp', round: 2,
    vars: [
      { symbol: 'BTU', ascii: 'BTU', label: 'cooling load', unit: 'BTU/hr', min: 10000, max: 100000, decimals: 0 },
    ],
    compute: v => v.BTU / 2545,
    keyConcept: 'Condensing unit hp = BTU/hr ÷ 2545 (1 hp = 2545 BTU/hr).',
    mistakes: ['Multiplying by 2545', 'Using wrong constant', 'Reversing ratio'],
    distractors: [v => v.BTU * 2545 / 1000, v => v.BTU / 2545 * 1.1, v => v.BTU / 2545 * 0.9, v => v.BTU / 3412],
  },
  {
    formulaId: 'c-cop-ref', area: 'C', unknown: 'COP',
    formulaText: 'COP = Q_L / W',
    unit: '', round: 2,
    vars: [
      { symbol: 'Q_L', ascii: 'QL', label: 'heat removed', unit: 'kJ', min: 200, max: 800, decimals: 0 },
      { symbol: 'W', ascii: 'W', label: 'work input', unit: 'kJ', min: 50, max: 200, decimals: 0 },
    ],
    compute: v => v.QL / v.W,
    keyConcept: 'Refrigeration COP = heat removed ÷ work input.',
    mistakes: ['Reversing ratio', 'Multiplying instead of dividing', 'Unit mismatch'],
    distractors: [v => v.W / v.QL, v => v.QL * v.W, v => v.QL / v.W * 1.1, v => v.QL / v.W * 0.9],
  },
  {
    formulaId: 'c-ohms-law', area: 'C', unknown: 'V',
    formulaText: 'V = I × R',
    unit: 'V', round: 1,
    vars: [
      { symbol: 'I', ascii: 'I', label: 'current', unit: 'A', min: 2, max: 20, decimals: 1 },
      { symbol: 'R', ascii: 'R', label: 'resistance', unit: 'Ω', min: 5, max: 50, decimals: 0 },
    ],
    compute: v => v.I * v.R,
    keyConcept: 'Ohms law: voltage = current × resistance.',
    mistakes: ['Dividing instead of multiplying', 'Reversing ratio', 'Omitting factor'],
    distractors: [v => v.I / v.R, v => v.R / v.I, v => v.I * v.R * 1.1, v => v.I * v.R * 0.9],
  },
  {
    formulaId: 'c-electric-power', area: 'C', unknown: 'P',
    formulaText: 'P = V × I',
    unit: 'W', round: 0,
    vars: [
      { symbol: 'V', ascii: 'V', label: 'voltage', unit: 'V', min: 110, max: 240, decimals: 0 },
      { symbol: 'I', ascii: 'I', label: 'current', unit: 'A', min: 2, max: 20, decimals: 1 },
    ],
    compute: v => v.V * v.I,
    keyConcept: 'Electric power = voltage × current.',
    mistakes: ['Dividing instead of multiplying', 'Using I²R incorrectly', 'Omitting factor'],
    distractors: [v => v.V / v.I, v => v.V * v.I * v.I / 100, v => v.V * v.I * 1.1, v => v.V * v.I * 0.9],
  },
  {
    formulaId: 'c-electric-energy', area: 'C', unknown: 'E',
    formulaText: 'E = P × t',
    unit: 'kWh', round: 2,
    vars: [
      { symbol: 'P', ascii: 'P', label: 'power', unit: 'kW', min: 1, max: 10, decimals: 1 },
      { symbol: 't', ascii: 't', label: 'time', unit: 'h', min: 4, max: 12, decimals: 0 },
    ],
    compute: v => v.P * v.t,
    keyConcept: 'Electric energy = power × time (kW × h = kWh).',
    mistakes: ['Dividing instead of multiplying', 'Unit mismatch (W vs kW)', 'Omitting factor'],
    distractors: [v => v.P / v.t, v => v.P * v.t * 1000, v => v.P * v.t * 1.1, v => v.P * v.t * 0.9],
  },
  {
    formulaId: 'c-resistance', area: 'C', unknown: 'R_s',
    formulaText: 'R_s = R_1 + R_2 (series)',
    unit: 'Ω', round: 1,
    vars: [
      { symbol: 'R_1', ascii: 'R1', label: 'resistance 1', unit: 'Ω', min: 10, max: 100, decimals: 0 },
      { symbol: 'R_2', ascii: 'R2', label: 'resistance 2', unit: 'Ω', min: 10, max: 100, decimals: 0 },
    ],
    compute: v => v.R1 + v.R2,
    keyConcept: 'Series resistance = sum of individual resistances.',
    mistakes: ['Using parallel formula for series', 'Multiplying resistances', 'Averaging'],
    distractors: [v => v.R1 * v.R2 / (v.R1 + v.R2), v => v.R1 * v.R2, v => (v.R1 + v.R2) / 2, v => v.R1 + v.R2 + 1],
  },
  {
    formulaId: 'c-capacitor', area: 'C', unknown: 'E',
    formulaText: 'E = ½ × C × V²',
    unit: 'J', round: 2,
    vars: [
      { symbol: 'C', ascii: 'C', label: 'capacitance', unit: 'F', min: 0.0001, max: 0.001, decimals: 4 },
      { symbol: 'V', ascii: 'V', label: 'voltage', unit: 'V', min: 10, max: 50, decimals: 0 },
    ],
    compute: v => 0.5 * v.C * v.V * v.V,
    keyConcept: 'Capacitor energy = ½CV².',
    mistakes: ['Forgetting the ½', 'Not squaring voltage', 'Using C×V'],
    distractors: [v => v.C * v.V * v.V, v => 0.5 * v.C * v.V, v => 0.5 * v.C * v.V * v.V * 1.1, v => 0.5 * v.C * v.V * v.V * 0.9],
  },
  {
    formulaId: 'c-transformer', area: 'C', unknown: 'V_s',
    formulaText: 'V_p/V_s = N_p/N_s',
    unit: 'V', round: 1,
    vars: [
      { symbol: 'V_p', ascii: 'Vp', label: 'primary voltage', unit: 'V', min: 220, max: 240, decimals: 0 },
      { symbol: 'N_p', ascii: 'Np', label: 'primary turns', unit: '', min: 200, max: 800, decimals: 0 },
      { symbol: 'N_s', ascii: 'Ns', label: 'secondary turns', unit: '', min: 20, max: 100, decimals: 0 },
    ],
    compute: v => v.Vp * v.Ns / v.Np,
    keyConcept: 'Transformer: V_s = V_p × N_s/N_p.',
    mistakes: ['Using N_p/N_s instead of N_s/N_p', 'Multiplying by turns wrong', 'Reversing ratio'],
    distractors: [v => v.Vp * v.Np / v.Ns, v => v.Vp / (v.Np * v.Ns), v => v.Vp * v.Ns / v.Np * 1.1, v => v.Vp * v.Ns / v.Np * 0.9],
  },
  {
    formulaId: 'c-reactance', area: 'C', unknown: 'X_L',
    formulaText: 'X_L = 2πfL',
    unit: 'Ω', round: 2,
    vars: [
      { symbol: 'f', ascii: 'f', label: 'frequency', unit: 'Hz', min: 50, max: 60, decimals: 0 },
      { symbol: 'L', ascii: 'L', label: 'inductance', unit: 'H', min: 0.01, max: 0.5, decimals: 2 },
    ],
    compute: v => 2 * Math.PI * v.f * v.L,
    keyConcept: 'Inductive reactance = 2πfL.',
    mistakes: ['Forgetting 2π', 'Using f/L', 'Omitting frequency'],
    distractors: [v => 2 * Math.PI * v.f / v.L, v => 2 * Math.PI * v.f * v.L * 1.1, v => 2 * Math.PI * v.f * v.L * 0.9, v => Math.PI * v.f * v.L],
  },
  {
    formulaId: 'c-power-factor', area: 'C', unknown: 'PF',
    formulaText: 'PF = P / S',
    unit: '', round: 3,
    vars: [
      { symbol: 'P', ascii: 'P', label: 'real power', unit: 'kW', min: 50, max: 100, decimals: 0 },
      { symbol: 'S', ascii: 'S', label: 'apparent power', unit: 'kVA', min: 60, max: 120, decimals: 0 },
    ],
    compute: v => v.P / v.S,
    keyConcept: 'Power factor = real power ÷ apparent power.',
    mistakes: ['Reversing ratio', 'Multiplying instead of dividing', 'Using ×100'],
    distractors: [v => v.S / v.P, v => (v.P / v.S) * 100, v => v.P * v.S, v => v.P / v.S * 1.05],
  },
  {
    formulaId: 'c-illumination', area: 'C', unknown: 'E_v',
    formulaText: 'E_v = Φ / A',
    unit: 'lux', round: 1,
    vars: [
      { symbol: 'Φ', ascii: 'Phi', label: 'luminous flux', unit: 'lumens', min: 5000, max: 50000, decimals: 0 },
      { symbol: 'A', ascii: 'A', label: 'area', unit: 'm²', min: 20, max: 200, decimals: 0 },
    ],
    compute: v => v.Phi / v.A,
    keyConcept: 'Illuminance = luminous flux ÷ area.',
    mistakes: ['Multiplying instead of dividing', 'Reversing ratio', 'Unit mismatch'],
    distractors: [v => v.Phi * v.A, v => v.A / v.Phi, v => v.Phi / v.A * 1.1, v => v.Phi / v.A * 0.9],
  },
  {
    formulaId: 'c-weighted-score', area: 'C', unknown: 'WS',
    formulaText: 'WS = Σ(W_i × S_i)',
    unit: '', round: 2,
    vars: [
      { symbol: 'W_1', ascii: 'W1', label: 'weight criterion 1', unit: '', min: 0.2, max: 0.6, decimals: 2 },
      { symbol: 'S_1', ascii: 'S1', label: 'score criterion 1', unit: '', min: 1, max: 10, decimals: 0 },
      { symbol: 'W_2', ascii: 'W2', label: 'weight criterion 2', unit: '', min: 0.2, max: 0.6, decimals: 2 },
      { symbol: 'S_2', ascii: 'S2', label: 'score criterion 2', unit: '', min: 1, max: 10, decimals: 0 },
    ],
    compute: v => v.W1 * v.S1 + v.W2 * v.S2,
    keyConcept: 'Weighted score = sum of weight × score across criteria.',
    mistakes: ['Averaging instead of weighting', 'Omitting a term', 'Multiplying weights'],
    distractors: [v => (v.S1 + v.S2) / 2, v => v.W1 * v.S1, v => v.W1 * v.S1 + v.W2 * v.S2 * 1.1, v => v.W1 * v.S1 + v.W2 * v.S2 * 0.9],
  },
  {
    formulaId: 'c-delay-score', area: 'C', unknown: 'S',
    formulaText: 'S = S_max × (1 - p_d)',
    unit: '', round: 1,
    vars: [
      { symbol: 'S_max', ascii: 'Sm', label: 'maximum score', unit: '', min: 50, max: 100, decimals: 0 },
      { symbol: 'p_d', ascii: 'pd', label: 'delay penalty fraction', unit: 'decimal', min: 0.1, max: 0.5, decimals: 2 },
    ],
    compute: v => v.Sm * (1 - v.pd),
    keyConcept: 'Delay-adjusted score = max score × (1 − delay penalty).',
    mistakes: ['Multiplying by penalty directly', 'Adding instead of subtracting penalty', 'Using penalty as %'],
    distractors: [v => v.Sm * v.pd, v => v.Sm * (1 + v.pd), v => v.Sm * (1 - v.pd) * 1.1, v => v.Sm * (1 - v.pd) * 0.9],
  },
  {
    formulaId: 'c-cost-percentage', area: 'C', unknown: 'p_i',
    formulaText: 'p_i = (C_i / C_T) × 100%',
    unit: '%', round: 1,
    vars: [
      { symbol: 'C_i', ascii: 'Ci', label: 'cost of item', unit: '', min: 10000, max: 100000, decimals: 0 },
      { symbol: 'C_T', ascii: 'CT', label: 'total cost', unit: '', min: 100000, max: 500000, decimals: 0 },
    ],
    compute: v => (v.Ci / v.CT) * 100,
    keyConcept: 'Cost weight % = item cost ÷ total cost × 100%.',
    mistakes: ['Forgetting ×100', 'Reversing ratio', 'Reporting decimal'],
    distractors: [v => v.Ci / v.CT, v => (v.CT / v.Ci) * 100, v => (v.Ci / v.CT) * 100 * 1.1, v => (v.Ci / v.CT) * 90],
  },
  {
    formulaId: 'c-circle-area', area: 'C', unknown: 'A',
    formulaText: 'A = π × r²',
    unit: 'm²', round: 2,
    vars: [
      { symbol: 'r', ascii: 'r', label: 'radius', unit: 'm', min: 0.5, max: 5, decimals: 1 },
    ],
    conversions: [
      { ascii: 'r', unit: 'ft', factor: 3.281, fromUnit: 'm' },
    ],
    compute: v => Math.PI * v.r * v.r,
    keyConcept: 'Circle area = πr².',
    mistakes: ['Not squaring radius', 'Using diameter squared', 'Multiplying by 2πr'],
    distractors: [v => Math.PI * v.r * v.r * 2, v => Math.PI * v.r, v => Math.PI * (v.r * 2) * (v.r * 2) / 4, v => Math.PI * v.r * v.r * 1.1],
  },
  {
    formulaId: 'c-cylinder-volume', area: 'C', unknown: 'V',
    formulaText: 'V = π × r² × h',
    unit: 'm³', round: 2,
    vars: [
      { symbol: 'r', ascii: 'r', label: 'radius', unit: 'm', min: 0.5, max: 3, decimals: 1 },
      { symbol: 'h', ascii: 'h', label: 'height', unit: 'm', min: 1, max: 6, decimals: 1 },
    ],
    conversions: [
      { ascii: 'r', unit: 'ft', factor: 3.281, fromUnit: 'm' },
      { ascii: 'h', unit: 'ft', factor: 3.281, fromUnit: 'm' },
    ],
    compute: v => Math.PI * v.r * v.r * v.h,
    keyConcept: 'Cylinder volume = πr²h.',
    mistakes: ['Not squaring radius', 'Using diameter squared', 'Omitting height'],
    distractors: [v => Math.PI * v.r * v.r * v.h * 2, v => Math.PI * v.r * v.h, v => Math.PI * v.r * v.r * v.h * 1.1, v => Math.PI * v.r * v.r * v.h * 0.9],
  },
  {
    formulaId: 'c-volume-mass', area: 'C', unknown: 'V',
    formulaText: 'V = M / ρ',
    unit: 'm³', round: 2,
    vars: [
      { symbol: 'M', ascii: 'M', label: 'mass', unit: 'kg', min: 100, max: 2000, decimals: 0 },
      { symbol: 'ρ', ascii: 'rho', label: 'bulk density', unit: 'kg/m³', min: 500, max: 800, decimals: 0 },
    ],
    compute: v => v.M / v.rho,
    keyConcept: 'Volume = mass ÷ density.',
    mistakes: ['Multiplying instead of dividing', 'Reversing ratio', 'Unit mismatch'],
    distractors: [v => v.M * v.rho, v => v.rho / v.M, v => v.M / v.rho * 1.1, v => v.M / v.rho * 0.9],
  },
  {
    formulaId: 'c-processing-rate', area: 'C', unknown: 'C',
    formulaText: 'C = M / t',
    unit: 'kg/h', round: 1,
    vars: [
      { symbol: 'M', ascii: 'M', label: 'quantity', unit: 'kg', min: 500, max: 5000, decimals: 0 },
      { symbol: 't', ascii: 't', label: 'time', unit: 'h', min: 1, max: 8, decimals: 0 },
    ],
    compute: v => v.M / v.t,
    keyConcept: 'Processing rate = quantity ÷ time.',
    mistakes: ['Multiplying instead of dividing', 'Reversing ratio', 'Unit mismatch'],
    distractors: [v => v.M * v.t, v => v.t / v.M, v => v.M / v.t * 1.1, v => v.M / v.t * 0.9],
  },
);

// ---------------------------------------------------------------------------
// CHAINED MULTI-PART WORD PROBLEMS
// Each spec is one narrative with several linked sub-parts (each result feeds
// the next). The MCQ asks for the `finalStage` value; the solution reveals the
// full chain. These complement (do not replace) the single-formula drills.
// ---------------------------------------------------------------------------
add(
  {
    formulaId: 'chain-field-capacity', name: 'Field Capacity Chain (TFC → EFC → E)',
    area: 'A', unknown: 'E',
    formulaText: 'C_a = C_t × E', unit: '%', round: 1,
    context: 'a self-propelled combine harvester cutting a rice paddy',
    verb: 'operates with',
    vars: [
      { symbol: 'W', ascii: 'W', label: 'working width', unit: 'm', min: 1.5, max: 6.0, decimals: 1 },
      { symbol: 'S', ascii: 'S', label: 'travel speed', unit: 'km/h', min: 3, max: 9, decimals: 0 },
      { symbol: 'E', ascii: 'E', label: 'field efficiency', unit: 'decimal', min: 0.6, max: 0.9, decimals: 2 },
    ],
    conversions: [
      { ascii: 'W', unit: 'ft', factor: 3.281, fromUnit: 'm' },
      { ascii: 'S', unit: 'mph', factor: 0.6214, fromUnit: 'km/h' },
    ],
    compute: v => ((v.W * v.S * v.E) / 10) / ((v.W * v.S) / 10) * 100,
    keyConcept: 'Theoretical capacity assumes 100% efficiency; effective capacity = theoretical × efficiency; field efficiency = effective ÷ theoretical × 100%.',
    mistakes: ['Using efficiency as % instead of decimal', 'Applying efficiency to TFC to get E', 'Omitting the /10 constant'],
    distractors: [v => (v.W * v.S * v.E) / 10, v => (v.W * v.S) / 10, v => (v.W * v.S * v.E) / 10 * 1.1],
    chain: {
      finalStage: 2,
      stageLabel: i => `Step ${i + 1}`,
      stages: [
        { unit: 'ha/h', phrase: 'the theoretical field capacity', formulaText: 'C_t = (W × S) / 10', compute: (r, v) => (v.W * v.S) / 10 },
        { unit: 'ha/h', phrase: 'the effective field capacity', formulaText: 'C_a = C_t × E', compute: (r, v) => r[0] * v.E },
        { unit: '%', phrase: 'the field efficiency', formulaText: 'E = (C_a / C_t) × 100%', compute: (r) => (r[1] / r[0]) * 100, decimals: 1 },
      ],
    },
  },
  {
    formulaId: 'chain-harvest', name: 'Harvest Output Chain (capacity → area → output)',
    area: 'A', unknown: 'O',
    formulaText: 'O = C × Y × t', unit: 't', round: 1,
    context: 'a rice combine harvester working a mature field',
    verb: 'operates with',
    vars: [
      { symbol: 'W', ascii: 'W', label: 'cutting width', unit: 'm', min: 1.5, max: 5.0, decimals: 1 },
      { symbol: 'S', ascii: 'S', label: 'travel speed', unit: 'km/h', min: 3, max: 8, decimals: 0 },
      { symbol: 'E', ascii: 'E', label: 'field efficiency', unit: 'decimal', min: 0.65, max: 0.9, decimals: 2 },
      { symbol: 'Y', ascii: 'Y', label: 'crop yield', unit: 't/ha', min: 3, max: 7, decimals: 1 },
      { symbol: 't', ascii: 't', label: 'operating time', unit: 'h', min: 6, max: 10, decimals: 0 },
    ],
    conversions: [
      { ascii: 'W', unit: 'ft', factor: 3.281, fromUnit: 'm' },
      { ascii: 'S', unit: 'mph', factor: 0.6214, fromUnit: 'km/h' },
    ],
    compute: v => ((v.W * v.S * v.E) / 10) * v.Y * v.t,
    keyConcept: 'Field capacity determines area covered per hour; total output = capacity × yield × time.',
    mistakes: ['Forgetting to multiply by yield or time', 'Using TFC instead of EFC', 'Mixing t/ha and ha/h units'],
    distractors: [v => ((v.W * v.S * v.E) / 10) * v.t, v => ((v.W * v.S) / 10) * v.Y * v.t, v => ((v.W * v.S * v.E) / 10) * v.Y * v.t * 1.1],
    chain: {
      finalStage: 2,
      stageLabel: i => `Step ${i + 1}`,
      stages: [
        { unit: 'ha/h', phrase: 'the effective field capacity', formulaText: 'C_a = (W × S × E) / 10', compute: (r, v) => (v.W * v.S * v.E) / 10 },
        { unit: 'ha', phrase: 'the total area harvested', formulaText: 'A = C_a × t', compute: (r, v) => r[0] * v.t },
        { unit: 't', phrase: 'the total harvest output', formulaText: 'O = A × Y', compute: (r, v) => r[1] * v.Y },
      ],
    },
  },
  {
    formulaId: 'chain-engine-power', name: 'Engine Power Chain (IP → BP → η)',
    area: 'A', unknown: 'η_mec',
    formulaText: 'BP = IP − FP', unit: '%', round: 1,
    context: 'a diesel engine being evaluated on a test bench',
    verb: 'delivers',
    vars: [
      { symbol: 'IP', ascii: 'IP', label: 'indicated power', unit: 'kW', min: 50, max: 150, decimals: 1 },
      { symbol: 'FP', ascii: 'FP', label: 'friction power', unit: 'kW', min: 5, max: 30, decimals: 1 },
    ],
    compute: v => ((v.IP - v.FP) / v.IP) * 100,
    keyConcept: 'Brake power = indicated minus friction; mechanical efficiency = brake ÷ indicated × 100%.',
    mistakes: ['Adding instead of subtracting friction power', 'Reversing the efficiency ratio', 'Forgetting ×100'],
    distractors: [v => ((v.IP + v.FP) / v.IP) * 100, v => (v.IP - v.FP), v => ((v.IP - v.FP) / v.IP) * 100 * 1.05],
    chain: {
      finalStage: 1,
      stageLabel: i => `Step ${i + 1}`,
      stages: [
        { unit: 'kW', phrase: 'the brake power', formulaText: 'BP = IP − FP', compute: (r, v) => v.IP - v.FP },
        { unit: '%', phrase: 'the mechanical efficiency', formulaText: 'η = (BP / IP) × 100%', compute: (r, v) => (r[0] / v.IP) * 100, decimals: 1 },
      ],
    },
  },
  {
    formulaId: 'chain-drawbar', name: 'Drawbar Power Chain (draft → kW → hp)',
    area: 'A', unknown: 'DBHP',
    formulaText: 'P_db = (D × S) / 3.6', unit: 'hp', round: 2,
    context: 'a tractor pulling a moldboard plow through firm soil',
    verb: 'operates with',
    vars: [
      { symbol: 'n', ascii: 'n', label: 'number of bottoms', unit: '', min: 2, max: 5, decimals: 0 },
      { symbol: 'w', ascii: 'w', label: 'width per bottom', unit: 'm', min: 0.3, max: 0.5, decimals: 2 },
      { symbol: 'd', ascii: 'd', label: 'working depth', unit: 'm', min: 0.18, max: 0.35, decimals: 2 },
      { symbol: 'K', ascii: 'K', label: 'soil specific resistance', unit: 'kN/m²', min: 50, max: 100, decimals: 0 },
      { symbol: 'S', ascii: 'S', label: 'travel speed', unit: 'km/h', min: 4, max: 8, decimals: 1 },
    ],
    conversions: [
      { ascii: 'w', unit: 'in', factor: 39.37, fromUnit: 'm' },
      { ascii: 'd', unit: 'in', factor: 39.37, fromUnit: 'm' },
      { ascii: 'S', unit: 'mph', factor: 0.6214, fromUnit: 'km/h' },
    ],
    compute: v => ((v.n * v.w * v.d * v.K) * v.S) / 3.6 / 0.7457,
    keyConcept: 'Plow draft = bottoms × width × depth × soil resistance; drawbar power = draft × speed ÷ 3.6; 1 kW = 1.341 hp.',
    mistakes: ['Omitting a plow factor', 'Forgetting /3.6', 'Converting kW to hp wrongly'],
    distractors: [v => ((v.n * v.w * v.d * v.K) * v.S) / 3.6, v => ((v.n * v.w * v.d * v.K) * v.S) / 3.6 * 1.341, v => ((v.n * v.w * v.d * v.K) * v.S) / 3.6 / 0.7457 * 1.1],
    chain: {
      finalStage: 2,
      stageLabel: i => `Step ${i + 1}`,
      stages: [
        { unit: 'kN', phrase: 'the total draft', formulaText: 'D = n × w × d × K', compute: (r, v) => v.n * v.w * v.d * v.K },
        { unit: 'kW', phrase: 'the drawbar power', formulaText: 'P_db = (D × S) / 3.6', compute: (r, v) => (r[0] * v.S) / 3.6 },
        { unit: 'hp', phrase: 'the drawbar horsepower', formulaText: 'HP = P_db / 0.7457', compute: (r) => r[1] / 0.7457 },
      ],
    },
  },
  {
    formulaId: 'chain-threshing', name: 'Threshing Performance Chain (capacity → recovery → η)',
    area: 'A', unknown: 'η_t',
    formulaText: 'η_t = W_g / (W_g + L) × 100%', unit: '%', round: 1,
    context: 'a thresher being evaluated on a batch of palay',
    verb: 'has',
    vars: [
      { symbol: 'W_g', ascii: 'Wg', label: 'grain output', unit: 'kg', min: 800, max: 3000, decimals: 0 },
      { symbol: 'T_t', ascii: 'Tt', label: 'threshing time', unit: 'h', min: 1, max: 4, decimals: 1 },
      { symbol: 'L', ascii: 'L', label: 'total grain loss', unit: 'kg', min: 20, max: 120, decimals: 0 },
    ],
    compute: v => (v.Wg / (v.Wg + v.L)) * 100,
    keyConcept: 'Thresher capacity = grain output ÷ time; total grain input = output + loss; threshing efficiency = output ÷ input × 100%.',
    mistakes: ['Omitting loss from total input', 'Forgetting ×100', 'Using capacity instead of efficiency'],
    distractors: [v => (v.Wg / v.L) * 100, v => (v.Wg / (v.Wg + v.L)), v => (v.Wg / (v.Wg + v.L)) * 100 * 1.1],
    chain: {
      finalStage: 2,
      stageLabel: i => `Step ${i + 1}`,
      stages: [
        { unit: 'kg/h', phrase: 'the thresher capacity', formulaText: 'C = W_g / T_t', compute: (r, v) => v.Wg / v.Tt },
        { unit: 'kg', phrase: 'the total grain input', formulaText: 'W_total = W_g + L', compute: (r, v) => v.Wg + v.L },
        { unit: '%', phrase: 'the threshing efficiency', formulaText: 'η = (W_g / W_total) × 100%', compute: (r, v) => (v.Wg / r[1]) * 100, decimals: 1 },
      ],
    },
  },
  {
    formulaId: 'chain-thermal', name: 'Engine Thermal Chain (fuel → heat → η)',
    area: 'A', unknown: 'η_th',
    formulaText: 'η_th = (BP × 3.6) / Q_in × 100%', unit: '%', round: 1,
    context: 'an engine running at rated load',
    verb: 'operates with',
    vars: [
      { symbol: 'BP', ascii: 'BP', label: 'brake power', unit: 'kW', min: 40, max: 120, decimals: 0 },
      { symbol: 'SFC', ascii: 'SFC', label: 'specific fuel consumption', unit: 'kg/kW·h', min: 0.2, max: 0.35, decimals: 2 },
      { symbol: 'CV', ascii: 'CV', label: 'fuel calorific value', unit: 'MJ/kg', min: 40, max: 45, decimals: 1 },
    ],
    compute: v => ((v.BP * 3.6) / (v.BP * v.SFC * v.CV)) * 100,
    keyConcept: 'Fuel flow = BP × SFC; heat input = fuel flow × CV; thermal efficiency = useful work (3.6 MJ per kWh) ÷ heat input × 100%.',
    mistakes: ['Forgetting the 3.6 kW→MJ/h factor', 'Forgetting ×100', 'Using SFC without BP'],
    distractors: [v => (v.BP * 3.6) / (v.BP * v.SFC * v.CV), v => ((v.BP * v.SFC * v.CV) / (v.BP * 3.6)) * 100, v => ((v.BP * 3.6) / (v.BP * v.SFC * v.CV)) * 100 * 1.1],
    chain: {
      finalStage: 2,
      stageLabel: i => `Step ${i + 1}`,
      stages: [
        { unit: 'kg/h', phrase: 'the fuel flow rate', formulaText: 'm = BP × SFC', compute: (r, v) => v.BP * v.SFC },
        { unit: 'MJ/h', phrase: 'the heat energy input', formulaText: 'Q_in = m × CV', compute: (r, v) => r[0] * v.CV },
        { unit: '%', phrase: 'the thermal efficiency', formulaText: 'η = (BP × 3.6 / Q_in) × 100%', compute: (r, v) => ((v.BP * 3.6) / r[1]) * 100, decimals: 1 },
      ],
    },
  },
  {
    formulaId: 'chain-powertrain', name: 'Power-Train Chain (BP → PTO → hydraulic)',
    area: 'A', unknown: 'P_hyd',
    formulaText: 'P_hyd = P_PTO × η_pump', unit: 'kW', round: 2,
    context: 'a tractor powering a hydraulic implement through its PTO',
    verb: 'develops',
    vars: [
      { symbol: 'BP', ascii: 'BP', label: 'brake power', unit: 'kW', min: 40, max: 120, decimals: 1 },
      { symbol: 'etr', ascii: 'etr', label: 'transmission efficiency', unit: 'decimal', min: 0.85, max: 0.95, decimals: 2 },
      { symbol: 'ep', ascii: 'ep', label: 'pump efficiency', unit: 'decimal', min: 0.7, max: 0.9, decimals: 2 },
    ],
    compute: v => v.BP * v.etr * v.ep,
    keyConcept: 'PTO power = brake power × transmission efficiency; hydraulic power = PTO × pump efficiency.',
    mistakes: ['Using efficiencies as % instead of decimal', 'Dividing instead of multiplying', 'Adding efficiencies'],
    distractors: [v => v.BP * v.etr, v => v.BP / (v.etr * v.ep), v => v.BP * v.etr * v.ep * 1.1],
    chain: {
      finalStage: 1,
      stageLabel: i => `Step ${i + 1}`,
      stages: [
        { unit: 'kW', phrase: 'the PTO power', formulaText: 'P_PTO = BP × η_trans', compute: (r, v) => v.BP * v.etr },
        { unit: 'kW', phrase: 'the hydraulic power delivered', formulaText: 'P_hyd = P_PTO × η_pump', compute: (r, v) => r[0] * v.ep },
      ],
    },
  },
);

// ---------------------------------------------------------------------------
// CHAINED MULTI-PART WORD PROBLEMS — AREAS B & C
// ---------------------------------------------------------------------------
add(
  {
    formulaId: 'chain-irrigation', name: 'Irrigation Scheduling Chain (net → gross depth)',
    area: 'B', unknown: 'd_g',
    formulaText: 'd_g = d_n / E', unit: 'mm', round: 1,
    context: 'an irrigation system supplying a crop field',
    verb: 'has',
    vars: [
      { symbol: 'ETc', ascii: 'ETc', label: 'crop evapotranspiration', unit: 'mm', min: 70, max: 150, decimals: 0 },
      { symbol: 'Pe', ascii: 'Pe', label: 'effective rainfall', unit: 'mm', min: 10, max: 60, decimals: 0 },
      { symbol: 'E', ascii: 'E', label: 'application efficiency', unit: 'decimal', min: 0.6, max: 0.9, decimals: 2 },
    ],
    conversions: [
      { ascii: 'ETc', unit: 'in', factor: 0.03937, fromUnit: 'mm' },
      { ascii: 'Pe', unit: 'in', factor: 0.03937, fromUnit: 'mm' },
    ],
    compute: v => (v.ETc - v.Pe) / v.E,
    keyConcept: 'Net irrigation depth = crop ET − effective rainfall; gross depth = net ÷ application efficiency (to account for losses).',
    mistakes: ['Adding rainfall instead of subtracting', 'Multiplying by efficiency instead of dividing', 'Using gross as net'],
    distractors: [v => (v.ETc - v.Pe), v => (v.ETc + v.Pe) / v.E, v => (v.ETc - v.Pe) / v.E * 1.1],
    chain: {
      finalStage: 1,
      stageLabel: i => `Step ${i + 1}`,
      stages: [
        { unit: 'mm', phrase: 'the net irrigation depth required', formulaText: 'd_n = ET_c − P_e', compute: (r, v) => v.ETc - v.Pe },
        { unit: 'mm', phrase: 'the gross depth of water to apply', formulaText: 'd_g = d_n / E', compute: (r, v) => r[0] / v.E },
      ],
    },
  },
  {
    formulaId: 'chain-scs', name: 'SCS Runoff Chain (CN → S → Q)',
    area: 'B', unknown: 'Q',
    formulaText: 'Q = (P − 0.2S)² / (P + 0.8S)', unit: 'mm', round: 1,
    context: 'a small watershed with an SCS curve number',
    verb: 'has',
    vars: [
      { symbol: 'CN', ascii: 'CN', label: 'curve number', unit: '', min: 50, max: 90, decimals: 0 },
      { symbol: 'P', ascii: 'P', label: 'rainfall depth', unit: 'mm', min: 60, max: 140, decimals: 0 },
    ],
    conversions: [
      { ascii: 'P', unit: 'in', factor: 0.03937, fromUnit: 'mm' },
    ],
    compute: v => { const S = 25400 / v.CN - 254; return Math.pow(v.P - 0.2 * S, 2) / (v.P + 0.8 * S); },
    keyConcept: 'SCS retention S = 25400/CN − 254; initial abstraction I_a = 0.2S; runoff Q = (P − I_a)² / (P − I_a + S).',
    mistakes: ['Forgetting the −254 in S', 'Using 0.8S instead of 0.2S for Ia', 'Unit mismatch (mm vs in)'],
    distractors: [v => 25400 / v.CN - 254, v => Math.pow(v.P - 0.2 * (25400 / v.CN - 254), 2) / v.P, v => { const S = 25400 / v.CN - 254; return Math.pow(v.P - 0.2 * S, 2) / (v.P + 0.8 * S) * 1.1; }],
    chain: {
      finalStage: 2,
      stageLabel: i => `Step ${i + 1}`,
      stages: [
        { unit: 'mm', phrase: 'the potential retention S', formulaText: 'S = 25400/CN − 254', compute: (r, v) => 25400 / v.CN - 254 },
        { unit: 'mm', phrase: 'the initial abstraction I_a = 0.2S', formulaText: 'I_a = 0.2 × S', compute: (r) => 0.2 * r[0] },
        { unit: 'mm', phrase: 'the runoff depth Q', formulaText: 'Q = (P − I_a)² / (P − I_a + S)', compute: (r, v) => Math.pow(v.P - r[1], 2) / (v.P - r[1] + r[0]) },
      ],
    },
  },
  {
    formulaId: 'chain-reservoir', name: 'Soil Erosion Chain (USLE → total loss)',
    area: 'B', unknown: 'L',
    formulaText: 'L = A × (R·K·LS·C·P)', unit: 't', round: 1,
    context: 'a sloping catchment studied for soil erosion',
    verb: 'has',
    vars: [
      { symbol: 'R', ascii: 'R', label: 'rainfall erosivity', unit: '', min: 200, max: 400, decimals: 0 },
      { symbol: 'K', ascii: 'K', label: 'soil erodibility', unit: '', min: 0.1, max: 0.4, decimals: 2 },
      { symbol: 'LS', ascii: 'LS', label: 'slope length-gradient', unit: '', min: 1, max: 3, decimals: 1 },
      { symbol: 'C', ascii: 'C', label: 'cover management factor', unit: '', min: 0.1, max: 0.5, decimals: 2 },
      { symbol: 'P', ascii: 'P', label: 'support practice factor', unit: '', min: 0.5, max: 1.0, decimals: 2 },
      { symbol: 'A', ascii: 'A', label: 'catchment area', unit: 'ha', min: 2, max: 30, decimals: 0 },
    ],
    compute: v => v.R * v.K * v.LS * v.C * v.P * v.A,
    keyConcept: 'USLE gives soil loss rate (t/ha/yr) = R·K·LS·C·P; total annual loss = rate × area.',
    mistakes: ['Omitting a USLE factor', 'Treating rate as total loss', 'Unit mismatch'],
    distractors: [v => v.R * v.K * v.LS * v.C * v.P, v => v.R * v.K * v.LS * v.C * v.P * v.A * 1.1, v => v.R * v.K * v.LS * v.C * v.P / v.A],
    chain: {
      finalStage: 1,
      stageLabel: i => `Step ${i + 1}`,
      stages: [
        { unit: 't/ha/yr', phrase: 'the average annual soil loss rate', formulaText: 'A_l = R × K × LS × C × P', compute: (r, v) => v.R * v.K * v.LS * v.C * v.P },
        { unit: 't', phrase: 'the total annual soil loss', formulaText: 'L = A_l × A', compute: (r, v) => r[0] * v.A },
      ],
    },
  },
  {
    formulaId: 'chain-manning', name: 'Open-Channel Flow Chain (geometry → R → v → Q)',
    area: 'B', unknown: 'Q',
    formulaText: 'Q = A × (1/n) R^(2/3) √S', unit: 'm³/s', round: 2,
    context: 'a rectangular irrigation canal carrying water',
    verb: 'has',
    vars: [
      { symbol: 'b', ascii: 'b', label: 'channel width', unit: 'm', min: 1, max: 4, decimals: 1 },
      { symbol: 'y', ascii: 'y', label: 'flow depth', unit: 'm', min: 0.5, max: 2.0, decimals: 1 },
      { symbol: 'n', ascii: 'n', label: 'Manning roughness', unit: '', min: 0.015, max: 0.035, decimals: 3 },
      { symbol: 'S', ascii: 'S', label: 'channel slope', unit: 'm/m', min: 0.001, max: 0.005, decimals: 3 },
    ],
    conversions: [
      { ascii: 'b', unit: 'ft', factor: 3.281, fromUnit: 'm' },
      { ascii: 'y', unit: 'ft', factor: 3.281, fromUnit: 'm' },
    ],
    compute: v => { const A = v.b * v.y; const P = v.b + 2 * v.y; const R = A / P; const vel = (1 / v.n) * Math.pow(R, 2 / 3) * Math.sqrt(v.S); return A * vel; },
    keyConcept: 'Area = width×depth; wetted perimeter = width + 2×depth; hydraulic radius = A/P; Manning velocity = (1/n)R^(2/3)√S; discharge = area × velocity.',
    mistakes: ['Forgetting the +2y in perimeter', 'Using full perimeter 2b+2y', 'Wrong Manning exponents'],
    distractors: [v => { const P = v.b + v.y; const R = (v.b * v.y) / P; return (1 / v.n) * Math.pow(R, 2 / 3) * Math.sqrt(v.S); }, v => { const A = v.b * v.y; return A * (1 / v.n) * Math.pow((v.b * v.y) / (v.b + 2 * v.y), 2 / 3) * Math.sqrt(v.S) * 1.1; }, v => (v.b * v.y)],
    chain: {
      finalStage: 4,
      stageLabel: i => `Step ${i + 1}`,
      stages: [
        { unit: 'm²', phrase: 'the flow area', formulaText: 'A = b × y', compute: (r, v) => v.b * v.y },
        { unit: 'm', phrase: 'the wetted perimeter', formulaText: 'P = b + 2y', compute: (r, v) => v.b + 2 * v.y },
        { unit: 'm', phrase: 'the hydraulic radius', formulaText: 'R = A / P', compute: (r) => r[0] / r[1] },
        { unit: 'm/s', phrase: 'the mean velocity', formulaText: 'v = (1/n) R^(2/3) √S', compute: (r, v) => (1 / v.n) * Math.pow(r[2], 2 / 3) * Math.sqrt(v.S) },
        { unit: 'm³/s', phrase: 'the discharge', formulaText: 'Q = A × v', compute: (r) => r[0] * r[3] },
      ],
    },
  },
  {
    formulaId: 'chain-soil-moisture', name: 'Soil Moisture Chain (MC → density → volumetric)',
    area: 'B', unknown: 'θ_v',
    formulaText: 'θ_v = θ_g × ρ_b', unit: 'm³/m³', round: 3,
    context: 'a soil core sample taken for moisture analysis',
    verb: 'has',
    vars: [
      { symbol: 'Mw', ascii: 'Mw', label: 'wet soil mass', unit: 'g', min: 100, max: 200, decimals: 0 },
      { symbol: 'Md', ascii: 'Md', label: 'oven-dry mass', unit: 'g', min: 80, max: 160, decimals: 0 },
      { symbol: 'Vt', ascii: 'Vt', label: 'bulk volume', unit: 'cm³', min: 100, max: 150, decimals: 0 },
    ],
    compute: v => ((v.Mw - v.Md) / v.Md) * (v.Md / v.Vt),
    keyConcept: 'Gravimetric MC = (wet−dry)/dry; bulk density = dry mass/volume; volumetric moisture = gravimetric × bulk density.',
    mistakes: ['Using wet mass as dry denominator', 'Using particle density instead of bulk density', 'Mixing m³/m³ with %'],
    distractors: [v => ((v.Mw - v.Md) / v.Md), v => (v.Md / v.Vt), v => ((v.Mw - v.Md) / v.Md) * (v.Md / v.Vt) * 1.1],
    chain: {
      finalStage: 2,
      stageLabel: i => `Step ${i + 1}`,
      stages: [
        { unit: 'decimal', phrase: 'the gravimetric water content', formulaText: 'θ_g = (M_w − M_d) / M_d', compute: (r, v) => (v.Mw - v.Md) / v.Md, decimals: 3 },
        { unit: 'g/cm³', phrase: 'the bulk density', formulaText: 'ρ_b = M_d / V_t', compute: (r, v) => v.Md / v.Vt },
        { unit: 'm³/m³', phrase: 'the volumetric water content', formulaText: 'θ_v = θ_g × ρ_b', compute: (r) => r[0] * r[1], decimals: 3 },
      ],
    },
  },
  {
    formulaId: 'chain-drying', name: 'Grain Drying Chain (dry matter → water removed)',
    area: 'C', unknown: 'W_rem',
    formulaText: 'W_rem = W_i − W_f', unit: 'kg', round: 1,
    context: 'a batch of freshly harvested paddy being dried',
    verb: 'has',
    vars: [
      { symbol: 'Wi', ascii: 'Wi', label: 'initial weight', unit: 'kg', min: 1000, max: 5000, decimals: 0 },
      { symbol: 'MCi', ascii: 'MCi', label: 'initial moisture content', unit: '%', min: 20, max: 30, decimals: 0 },
      { symbol: 'MCf', ascii: 'MCf', label: 'final moisture content', unit: '%', min: 12, max: 16, decimals: 0 },
    ],
    compute: v => v.Wi - v.Wi * (100 - v.MCi) / (100 - v.MCf),
    keyConcept: 'Dry matter is conserved: W_f = W_i × (100−MC_i)/(100−MC_f); water removed = initial − final weight.',
    mistakes: ['Reversing the dry-matter ratio', 'Using moisture % directly without 100−', 'Subtracting wet weights wrongly'],
    distractors: [v => v.Wi * (100 - v.MCf) / (100 - v.MCi), v => v.Wi * (v.MCi / v.MCf), v => v.Wi - v.Wi * (100 - v.MCi) / (100 - v.MCf) * 1.1],
    chain: {
      finalStage: 1,
      stageLabel: i => `Step ${i + 1}`,
      stages: [
        { unit: 'kg', phrase: 'the final (dry) weight', formulaText: 'W_f = W_i × (100 − MC_i)/(100 − MC_f)', compute: (r, v) => v.Wi * (100 - v.MCi) / (100 - v.MCf) },
        { unit: 'kg', phrase: 'the water removed during drying', formulaText: 'W_rem = W_i − W_f', compute: (r, v) => v.Wi - r[0] },
      ],
    },
  },
  {
    formulaId: 'chain-heat', name: 'Heating Load Chain (sensible → latent → total)',
    area: 'C', unknown: 'Q_t',
    formulaText: 'Q_t = m·C_p·ΔT + m·λ', unit: 'kJ', round: 0,
    context: 'a water batch heated for food processing',
    verb: 'has',
    vars: [
      { symbol: 'm', ascii: 'm', label: 'mass of material', unit: 'kg', min: 10, max: 60, decimals: 0 },
      { symbol: 'Cp', ascii: 'Cp', label: 'specific heat', unit: 'kJ/kg·°C', min: 2.0, max: 4.2, decimals: 2 },
      { symbol: 'dT', ascii: 'dT', label: 'temperature rise', unit: '°C', min: 20, max: 80, decimals: 0 },
      { symbol: 'lam', ascii: 'lam', label: 'latent heat of vaporization', unit: 'kJ/kg', min: 2000, max: 2500, decimals: 0 },
    ],
    compute: v => v.m * v.Cp * v.dT + v.m * v.lam,
    keyConcept: 'Sensible heat = m·Cp·ΔT; latent heat = m·λ; total heat = sensible + latent.',
    mistakes: ['Omitting the latent term', 'Omitting the sensible term', 'Multiplying the two terms together'],
    distractors: [v => v.m * v.Cp * v.dT, v => v.m * v.lam, v => v.m * v.Cp * v.dT * v.lam],
    chain: {
      finalStage: 2,
      stageLabel: i => `Step ${i + 1}`,
      stages: [
        { unit: 'kJ', phrase: 'the sensible heat', formulaText: 'Q_s = m × C_p × ΔT', compute: (r, v) => v.m * v.Cp * v.dT },
        { unit: 'kJ', phrase: 'the latent heat', formulaText: 'Q_l = m × λ', compute: (r, v) => v.m * v.lam },
        { unit: 'kJ', phrase: 'the total heat required', formulaText: 'Q_t = Q_s + Q_l', compute: (r) => r[0] + r[1] },
      ],
    },
  },
  {
    formulaId: 'chain-biogas', name: 'Biogas Energy Chain (VS → volume → methane → energy)',
    area: 'C', unknown: 'E',
    formulaText: 'E = V_CH4 × CV', unit: 'MJ', round: 1,
    context: 'an anaerobic digester processing farm manure',
    verb: 'produces gas from',
    vars: [
      { symbol: 'VS', ascii: 'VS', label: 'volatile solids fed', unit: 'kg', min: 50, max: 500, decimals: 0 },
      { symbol: 'yield', ascii: 'yield', label: 'biogas yield', unit: 'm³/kg VS', min: 0.2, max: 0.6, decimals: 2 },
      { symbol: 'CH4f', ascii: 'CH4f', label: 'methane fraction', unit: 'decimal', min: 0.5, max: 0.7, decimals: 2 },
      { symbol: 'CV', ascii: 'CV', label: 'methane calorific value', unit: 'MJ/m³', min: 35, max: 40, decimals: 0 },
    ],
    compute: v => v.VS * v.yield * v.CH4f * v.CV,
    keyConcept: 'Biogas volume = volatile solids × yield; methane volume = biogas × methane fraction; energy = methane volume × calorific value.',
    mistakes: ['Applying methane fraction to energy instead of volume', 'Omitting a factor', 'Using biogas CV instead of methane CV'],
    distractors: [v => v.VS * v.yield * v.CH4f, v => v.VS * v.yield * v.CV, v => v.VS * v.yield * v.CH4f * v.CV * 1.1],
    chain: {
      finalStage: 2,
      stageLabel: i => `Step ${i + 1}`,
      stages: [
        { unit: 'm³', phrase: 'the biogas volume produced', formulaText: 'V_b = VS × yield', compute: (r, v) => v.VS * v.yield },
        { unit: 'm³', phrase: 'the methane volume', formulaText: 'V_CH4 = V_b × CH4_fraction', compute: (r, v) => r[0] * v.CH4f },
        { unit: 'MJ', phrase: 'the recoverable energy', formulaText: 'E = V_CH4 × CV', compute: (r, v) => r[1] * v.CV },
      ],
    },
  },
  {
    formulaId: 'chain-electrical', name: 'Electrical Energy Cost Chain (P → energy → cost)',
    area: 'C', unknown: 'cost',
    formulaText: 'cost = P × t × rate', unit: 'PHP', round: 2,
    context: 'an electric motor running a processing unit',
    verb: 'operates with',
    vars: [
      { symbol: 'V', ascii: 'V', label: 'supply voltage', unit: 'V', min: 110, max: 440, decimals: 0 },
      { symbol: 'I', ascii: 'I', label: 'current draw', unit: 'A', min: 5, max: 30, decimals: 0 },
      { symbol: 't', ascii: 't', label: 'operating time', unit: 'h', min: 4, max: 12, decimals: 0 },
      { symbol: 'rate', ascii: 'rate', label: 'electricity rate', unit: 'PHP/kWh', min: 8, max: 15, decimals: 2 },
    ],
    compute: v => (v.V * v.I / 1000) * v.t * v.rate,
    keyConcept: 'Power = V×I (W); energy = power × time (kWh); cost = energy × rate.',
    mistakes: ['Forgetting to convert W to kW (/1000)', 'Multiplying by time before converting', 'Using V×I as kW directly'],
    distractors: [v => v.V * v.I * v.t * v.rate, v => (v.V * v.I / 1000) * v.t, v => (v.V * v.I / 1000) * v.t * v.rate * 1.1],
    chain: {
      finalStage: 2,
      stageLabel: i => `Step ${i + 1}`,
      stages: [
        { unit: 'kW', phrase: 'the electrical power draw', formulaText: 'P = V × I / 1000', compute: (r, v) => (v.V * v.I) / 1000 },
        { unit: 'kWh', phrase: 'the electrical energy consumed', formulaText: 'E = P × t', compute: (r, v) => r[0] * v.t },
        { unit: 'PHP', phrase: 'the electricity cost', formulaText: 'cost = E × rate', compute: (r, v) => r[1] * v.rate },
      ],
    },
  },
);

export function getDrillsByArea(areaCode: string): DrillMeta[] {
  return specs
    .filter(s => s.area === areaCode)
    .map(s => {
      const f = findFormula(s.formulaId);
      return { formulaId: s.formulaId, name: f?.name || s.name || s.formulaId, formula: f?.formula || s.formulaText, area: s.area, questionCount: 10 };
    });
}

export function getDrillQuestions(formulaId: string, seed?: number): Question[] {
  const base = specs.find(s => s.formulaId === formulaId);
  if (!base) return [];
  const spec = enrichSpec(base);
  const rng = createRng(seed ?? Math.floor(Math.random() * 4294967296));
  // Fixed session structure: 5 English-unit (convert) problems, 2 SI problems,
  // 3 formula-specific theory questions, shuffled so positions change each session.
  const roles: ('convert' | 'si' | 'theory')[] = [
    'convert', 'convert', 'convert', 'convert', 'convert',
    'si', 'si',
    'theory', 'theory', 'theory',
  ];
  const order = rng.shuffle(roles);
  // Pre-select 3 DISTINCT theory questions for this session so they never repeat.
  const theoryPool = buildTheoryPool(spec, rng);
  const out: Question[] = [];
  let theoryIdx = 0;
  for (let i = 0; i < 10; i++) {
    if (order[i] === 'theory') {
      out.push(theoryPool[theoryIdx % Math.max(theoryPool.length, 1)]);
      theoryIdx++;
    } else {
      out.push(buildQuestion(spec, i, rng, order[i]));
    }
  }
  return out;
}
