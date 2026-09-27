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
    formulaId: 'a-theoretical-field-capacity', area: 'A', unknown: 'C_t',
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
    formulaId: 'a-mechanical-efficiency', area: 'A', unknown: 'η_mec',
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
    formulaId: 'a-specific-fuel-consumption', area: 'A', unknown: 'SFC',
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
    formulaId: 'a-continuity-equation', area: 'A', unknown: 'v_2',
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
    formulaId: 'a-ee-simple-interest', area: 'A', unknown: 'A',
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
    formulaId: 'a-ee-straight-line-depreciation', area: 'A', unknown: 'D',
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

);

// ---------------------------------------------------------------------------
// AREA B: Hydraulics, Soils, Structures, Aquaculture, Mechanics
// ---------------------------------------------------------------------------
add(

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
    formulaId: 'b-lsr-net', area: 'B', unknown: 'LSR',
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
    formulaId: 'b-rational-method', area: 'B', unknown: 'Q_p',
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
    formulaId: 'b-volumetric-moisture-content', area: 'B', unknown: 'θ_v',
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
    formulaId: 'b-mannings-equation', area: 'B', unknown: 'v',
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

);

// ---------------------------------------------------------------------------
// AREA C: Post-harvest, Bio-processing, Structures, Electricity
// ---------------------------------------------------------------------------
add(
  {
    formulaId: 'c-mc-wet-basis', area: 'C', unknown: 'MC_wb',
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
    formulaId: 'c-mc-dry-basis', area: 'C', unknown: 'MC_db',
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
    formulaId: 'c-percent-milling-recovery', area: 'C', unknown: 'Recovery',
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
    formulaId: 'c-enthalpy', area: 'C', unknown: 'h',
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
    formulaId: 'c-electrical-power', area: 'C', unknown: 'P',
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
    formulaId: 'c-electrical-energy', area: 'C', unknown: 'E',
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

);

// ---------------------------------------------------------------------------
// CHAINED MULTI-PART WORD PROBLEMS
// Each spec is one narrative with several linked sub-parts (each result feeds
// the next). The MCQ asks for the `finalStage` value; the solution reveals the
// full chain. These complement (do not replace) the single-formula drills.
// ---------------------------------------------------------------------------
add(

);

// ---------------------------------------------------------------------------
// CHAINED MULTI-PART WORD PROBLEMS — AREAS B & C
// ---------------------------------------------------------------------------
add(

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
