// Release gate for formula drill specs.
//
// Every drill spec is a pure function of its variable map (`compute`), so the
// answer, the four options and every number in the walkthrough are all derived
// in code. That makes correctness mechanically checkable, which is the point:
// the retired legacy bank shipped wrong arithmetic precisely because nobody
// could check it.
//
// Two independent passes:
//
//   A. SPEC pass  - drive `compute` and `distractors` directly with our own
//                   random variable maps. Proves the math is well behaved for
//                   the whole declared input range.
//   B. RENDER pass - ask the real renderer for a session, then parse the
//                   variable values back out of the question's own `given`
//                   block and recompute. This proves the number printed in the
//                   walkthrough is the number the formula actually produces for
//                   the values the student is shown. (Pass A cannot catch a
//                   renderer that substitutes the wrong values, because it
//                   would be comparing two different samples.)
//
// Checks, per spec:
//   1. coverage     - formulaId must exist in the 240-formula reference
//   2. numeric      - 200 random samples stay finite, in-range and non-degenerate
//   3. options      - 4 distinct options, no distractor collapsing onto correct
//   4. conversions  - every VarConversion must round-trip display -> native
//   5. word problem - a real-life narrative is required, not a formula restatement
//   6. walkthrough  - steps >= 3, and the printed result must match a recompute
//                     from the values shown in the question
//   7. golden case  - a hand-verified input/output pair must reproduce exactly
//
// Usage:  node scripts/verify-formula-specs.mjs [--json] [--area=A] [--strict]
//         --strict also fails when a formula has no spec yet (coverage gate).
// Exit code 1 means the specs are not safe to ship.
import fs from 'node:fs';
import path from 'node:path';
import { loadTsModule, projectRoot } from './lib/load-ts.mjs';

const argv = process.argv.slice(2);
const asJson = argv.includes('--json');
const strict = argv.includes('--strict');
const areaFilter = (argv.find((a) => a.startsWith('--area=')) || '').split('=')[1];

const SAMPLES = 200;
const GOLDEN_PATH = path.join(projectRoot, 'scripts', 'data', 'golden-cases.json');

const drills = loadTsModule('src/data/formula-drills.ts');
const formulasMod = loadTsModule('src/data/formulas.ts');

const reference = new Map();
for (const area of formulasMod.areaFormulas) {
  for (const topic of area.topics) {
    for (const f of topic.formulas) reference.set(f.id, { area: area.areaCode, name: f.name });
  }
}

const specs = drills.getAllDrillSpecs();
const golden = fs.existsSync(GOLDEN_PATH) ? JSON.parse(fs.readFileSync(GOLDEN_PATH, 'utf8')) : {};

function rngFrom(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function fmt(n, decimals) {
  const f = 10 ** decimals;
  return (Math.round(n * f) / f).toFixed(decimals);
}

// Mirror of pickDecimals() in src/data/formula-drills.ts: escalate precision until
// the four options format to distinct strings. The harness must resolve decimals
// the way the renderer does, otherwise it reports failures the UI never hits.
function pickDecimals(correct, others, baseRound) {
  const start = baseRound ?? Math.max(0, Math.min(4, Math.round(-Math.log10(Math.abs(correct) || 1) + 1)));
  for (let dec = start; dec <= 6; dec++) {
    const set = new Set([fmt(correct, dec)]);
    let ok = true;
    for (const o of others) {
      const s = fmt(o, dec);
      if (set.has(s)) {
        ok = false;
        break;
      }
      set.add(s);
    }
    if (ok) return dec;
  }
  return 6;
}

// Every k-subset of the distractor generators, so a spec passes if SOME choice of
// three works - the renderer picks randomly at runtime.
function combos(arr, k) {
  if (arr.length <= k) return [arr];
  const out = [];
  const rec = (start, acc) => {
    if (acc.length === k) {
      out.push(acc);
      return;
    }
    for (let i = start; i < arr.length; i++) rec(i + 1, [...acc, arr[i]]);
  };
  rec(0, []);
  return out;
}

// ---------------------------------------------------------------------------
// Authoring-standard waivers
// ---------------------------------------------------------------------------
// The 130 formula batches are held to the QUALITY checks below: rendered options
// must be plausible multiples of the answer, narratives must not repeat a label,
// and keyConcept must actually teach something. Ten Area C specs predate that
// standard - they are one-line legacy entries with a 35-62 character keyConcept
// and options that routinely sit outside the plausibility band.
//
// They are retained for coverage and they do pass every CORRECTNESS check, so
// they are exempt from the quality checks only. They are replaced when their
// owning topic batch lands. Do not grow this list: if a new spec is bad, fix it.
const QUALITY_WAIVER = new Set([
  'c-mc-wet-basis',
  'c-mc-dry-basis',
  'c-percent-milling-recovery',
  'c-sensible-heat',
  'c-enthalpy',
  'c-relative-humidity',
  'c-ohms-law',
  'c-electrical-power',
  'c-electrical-energy',
  'c-power-factor',
]);

// An option has to be a number a student could plausibly write down as a
// deliberate mistake: positive, non-zero, and within two orders of magnitude of
// the answer. Outside that band the question is guessable, which is the defect
// these checks exist to prevent.
const OPT_MAX_RATIO = 100.5; // tolerance above 100x for rounding at the last digit
const OPT_MIN_RATIO = 0.01; // 1%
const KEY_CONCEPT_MIN = 80;

// Returns a human-readable reason, or null when the option set is plausible.
function optionPlausibility(options, correctIndex) {
  if (!Array.isArray(options) || options.length < 2) return 'options are missing';
  const correct = parseFloat(options[correctIndex]);
  if (!Number.isFinite(correct)) return `answer slot ${correctIndex} is not a number ("${options[correctIndex]}")`;

  for (let k = 0; k < options.length; k++) {
    const n = parseFloat(options[k]);
    if (!Number.isFinite(n)) return `option ${k} is not a number ("${options[k]}")`;
    if (n === 0) return `option ${k} is zero ("${options[k]}")`;
    if (n < 0) return `option ${k} is negative ("${options[k]}")`;
    if (correct > 0) {
      const ratio = n / correct;
      if (ratio > OPT_MAX_RATIO) {
        return `option ${k} is ${ratio.toFixed(0)}x the answer ("${options[k]}" vs ${correct})`;
      }
      if (ratio < OPT_MIN_RATIO) {
        return `option ${k} is only ${(ratio * 100).toFixed(1)}% of the answer ("${options[k]}" vs ${correct})`;
      }
    }
  }
  return null;
}

// "a furrow of ... a furrow of ..." - a label reused inside one sentence means
// the generated narrative was stitched together rather than written.
//
// The label must be at least two words. A single repeated noun is usually
// correct domain vocabulary rather than sloppy stitching: soil mechanics
// variables are genuinely named "volume of voids" and "volume of solid
// particles", and a one-word pattern fired on all of them.
const DUPLICATE_LABEL = /\ba ([a-z]+ [a-z -]{2,30}?) of [^,.?]*\ba \1 of\b/i;

const failures = [];
const warnings = [];
const seenFailure = new Set();
function fail(formulaId, check, detail) {
  // one entry per (spec, check) so the summary stays readable
  const key = `${formulaId}|${check}`;
  if (seenFailure.has(key)) return;
  seenFailure.add(key);
  failures.push({ formulaId, check, detail });
}
function warn(formulaId, check, detail) {
  const key = `${formulaId}|${check}`;
  if (seenFailure.has(key)) return;
  seenFailure.add(key);
  warnings.push({ formulaId, check, detail });
}

// ---------------------------------------------------------------------------
// Pass A - drive compute/distractors directly
// ---------------------------------------------------------------------------
function specPass(spec) {
  const id = spec.formulaId;

  if (!spec.distractors || spec.distractors.length < 3) {
    fail(id, 'distractor', `needs >=3 distractor generators, found ${spec.distractors?.length ?? 0}`);
  }
  for (const c of spec.conversions ?? []) {
    if (!(c.factor > 0)) {
      fail(id, 'conversions', `conversion for "${c.ascii}" has non-positive factor ${c.factor}`);
      continue;
    }
    for (const native of [0.5, 1, 7, 123.456, 1000]) {
      const back = native * c.factor * (1 / c.factor);
      if (Math.abs(back - native) > 1e-9 * Math.max(1, Math.abs(native))) {
        fail(id, 'conversions', `round-trip failed for "${c.ascii}" at native=${native}`);
        break;
      }
    }
  }
  if (!spec.context || spec.context.trim().length < 10) {
    fail(id, 'word-problem', 'missing `context`: renders as "Using the formula ..." instead of a real-life scenario');
  }
  if (!spec.unknownPhrase || spec.unknownPhrase.trim().length < 3) {
    fail(id, 'word-problem', 'missing `unknownPhrase`: reads "What is the value of X?"');
  }
  if (!QUALITY_WAIVER.has(id)) {
    const kc = (spec.keyConcept || '').trim();
    if (kc.length < KEY_CONCEPT_MIN) {
      fail(id, 'key-concept', `keyConcept is ${kc.length} chars, minimum ${KEY_CONCEPT_MIN} - it has to teach the handbook value or a stated constant, not restate the formula`);
    }
  }

  const rand = rngFrom(0x9e3779b9);
  const answers = [];
  let nonFinite = 0;
  let badOptions = 0;

  for (let i = 0; i < SAMPLES; i++) {
    const vals = {};
    for (const v of spec.vars) {
      const f = 10 ** v.decimals;
      vals[v.ascii] = Math.round((v.min + rand() * (v.max - v.min)) * f) / f;
    }
    let correct;
    try {
      correct = spec.compute(vals);
    } catch (e) {
      fail(id, 'compute', `threw on sample ${i}: ${e.message}`);
      return;
    }
    if (!Number.isFinite(correct)) {
      nonFinite++;
      continue;
    }
    answers.push(correct);

    let distractors = [];
    try {
      distractors = spec.distractors.map((gen) => gen(vals, correct)).filter((n) => Number.isFinite(n));
    } catch (e) {
      fail(id, 'distractor', `a generator threw on sample ${i}: ${e.message}`);
    }
    if (distractors.length < 3) {
      badOptions++;
      continue;
    }
    const works = combos(distractors, 3).some((combo) => {
      const dec = pickDecimals(correct, combo, spec.round);
      return new Set([correct, ...combo].map((n) => fmt(n, dec))).size === 4;
    });
    if (!works) badOptions++;
  }

  if (nonFinite) fail(id, 'numeric', `${nonFinite}/${SAMPLES} samples produced a non-finite answer`);
  if (badOptions) fail(id, 'options', `${badOptions}/${SAMPLES} samples could not yield 4 distinct options`);

  if (answers.length) {
    if (answers.every((a) => Math.abs(a - answers[0]) < 1e-12)) {
      fail(id, 'numeric', 'answer is constant across all samples - compute may ignore its variables');
    }
    const negatives = answers.filter((a) => a < 0).length;
    if (negatives > answers.length * 0.5) {
      warn(id, 'numeric', `${negatives}/${answers.length} answers are negative - confirm the sign convention`);
    }
    const zeros = answers.filter((a) => a === 0).length;
    if (zeros > answers.length * 0.5) {
      warn(id, 'numeric', `${zeros}/${answers.length} answers are exactly 0 - confirm compute is wired up`);
    }
  }

  const g = golden[id];
  if (!g) {
    warn(id, 'golden-case', 'no hand-verified case in scripts/data/golden-cases.json');
  } else {
    for (const c of g) {
      let got;
      try {
        got = spec.compute(c.vals);
      } catch (e) {
        fail(id, 'golden-case', `threw: ${e.message}`);
        continue;
      }
      const tol = c.tolerance ?? 0;
      const delta = Math.abs(got - c.expected);
      if (!(delta <= tol * Math.max(1, Math.abs(c.expected)) + 1e-9)) {
        fail(id, 'golden-case', `vals ${JSON.stringify(c.vals)} -> ${got}, expected ${c.expected}`);
      }
    }
  }
}

// ---------------------------------------------------------------------------
// Pass B - render a session, then recompute from the values actually shown
// ---------------------------------------------------------------------------

// Pull "SYM = 12.5 unit" pairs out of a rendered `given` block. The symbol
// pattern is deliberately loose because drill symbols contain Greek letters
// (e.g. "η_trans"), which an ASCII-only character class would silently miss.
function parseGivens(given) {
  const out = [];
  for (const line of String(given || '').split('\n')) {
    const m = line.match(/([^\s=]+)\s*=\s*(-?\d+(?:\.\d+)?)/);
    if (m) out.push({ symbol: m[1], value: parseFloat(m[2]) });
  }
  return out;
}

// First number printed on a result-bearing walkthrough line.
function resultNumber(steps) {
  const line = (steps ?? []).find((s) => /^(Evaluate:|Final answer:)|\bResult:/.test(s));
  if (!line) return null;
  const m = line.match(/-?\d+(?:\.\d+)?/);
  if (!m) return null;
  const dot = m[0].indexOf('.');
  return { value: parseFloat(m[0]), decimals: dot === -1 ? 0 : m[0].length - dot - 1 };
}

function renderPass(spec) {
  const id = spec.formulaId;
  const bySymbol = new Map(spec.vars.map((v) => [v.symbol, v]));
  let checked = 0;
  let mismatched = 0;
  let noSteps = 0;
  let missingGiven = 0;
  let convertWithoutStep = 0;
  let badConversionMath = 0;
  let firstBadConversion = null;
  let formulaRestatement = 0;
  let firstMismatch = null;
  let implausibleOptions = 0;
  let firstImplausible = null;
  let duplicateLabel = 0;
  let firstDuplicateLabel = null;
  const seenTexts = new Set();

  for (let i = 0; i < SAMPLES; i++) {
    const session = drills.getDrillQuestions(id, 5000 + i * 7);
    for (const q of session) {
      if (q.type !== 'computation') continue;
      seenTexts.add(q.question);
      const steps = q.solution?.steps ?? [];
      if (steps.length < 3) noSteps++;

      // Quality gate, applied to the question the student actually sees. Checking
      // the raw distractor generators is not enough: the renderer picks three of
      // them at random, so a spec with one bad generator still ships bad questions
      // some of the time. Verifying every rendered question is what makes the
      // guarantee real rather than statistical.
      if (!QUALITY_WAIVER.has(id)) {
        const bad = optionPlausibility(q.options, q.correctAnswer);
        if (bad) {
          implausibleOptions++;
          if (!firstImplausible) firstImplausible = bad;
        }
        if (DUPLICATE_LABEL.test(q.question)) {
          duplicateLabel++;
          if (!firstDuplicateLabel) firstDuplicateLabel = q.question.replace(/\n/g, ' ').slice(0, 140);
        }
      }

      const isEnglish = steps.some((s) => /convert /.test(s));
      if (isEnglish) {
        // Values shown are English; the walkthrough must then show the conversion
        // arithmetic. Recomputing from the displayed numbers would be wrong here.
        const convLines = steps.filter((s) => /convert /.test(s) && /×/.test(s));
        if (!convLines.length) {
          convertWithoutStep++;
        } else {
          // Every printed conversion must actually multiply out: a line reading
          // "2 in/h x 25.4 = 46 mm/h" is a bug, because 2 x 25.4 = 50.8. This
          // catches a renderer that prints the rounded display value against the
          // unrounded native value. The unit sits between the number and the sign
          // ("2 in/h x 25.4"), so the gap is matched loosely but never across "(".
          for (const line of convLines) {
            const m = line.match(/(-?\d+(?:\.\d+)?)[^()]*?[×x]\s*(-?\d+(?:\.\d+)?)\s*=\s*(-?\d+(?:\.\d+)?)/);
            if (!m) {
              badConversionMath++;
              if (badConversionMath === 1) firstBadConversion = `unparseable conversion line: ${line}`;
              continue;
            }
            const lhs = parseFloat(m[1]) * parseFloat(m[2]);
            const shownRhs = parseFloat(m[3]);
            const dot = m[3].indexOf('.');
            const rhsDec = dot === -1 ? 0 : m[3].length - dot - 1;
            const tol = 0.5 * Math.pow(10, -rhsDec) + 1e-6;
            if (Math.abs(lhs - shownRhs) > tol) {
              badConversionMath++;
              if (badConversionMath === 1) {
                firstBadConversion = `"${line}" does not multiply out (${m[1]} x ${m[2]} = ${lhs.toFixed(4)}, printed ${m[3]})`;
              }
            }
          }
        }
        continue;
      }
      if (/^Using the formula/.test(q.question)) formulaRestatement++;

      const givens = parseGivens(q.solution?.given);
      if (!givens.length) {
        missingGiven++;
        continue;
      }
      const vals = {};
      let usable = true;
      for (const g of givens) {
        const v = bySymbol.get(g.symbol);
        if (!v) continue; // chain/multi-step markers are not input variables
        vals[v.ascii] = g.value;
      }
      if (spec.vars.some((v) => vals[v.ascii] === undefined)) {
        missingGiven++;
        continue;
      }
      if (!usable) continue;

      let expected;
      try {
        expected = spec.compute(vals);
      } catch {
        missingGiven++;
        continue;
      }
      const shown = resultNumber(steps);
      if (!shown) {
        mismatched++;
        if (!firstMismatch) firstMismatch = `walkthrough has no result line (sample ${i})`;
        continue;
      }
      const tol = 0.5 * Math.pow(10, -shown.decimals) + 1e-9 * Math.max(1, Math.abs(expected));
      checked++;
      if (Math.abs(shown.value - expected) > tol) {
        mismatched++;
        if (!firstMismatch) {
          firstMismatch = `walkthrough printed ${shown.value} but recomputing the shown givens gives ${expected} (${JSON.stringify(vals)})`;
        }
      }
    }
  }

  if (noSteps) fail(id, 'walkthrough', `${noSteps} rendered questions had fewer than 3 steps`);
  if (mismatched) fail(id, 'walkthrough', `${mismatched} rendered walkthroughs disagreed with a recompute - first: ${firstMismatch}`);
  if (missingGiven) fail(id, 'walkthrough', `${missingGiven} rendered questions did not expose parseable givens`);
  if (convertWithoutStep) fail(id, 'walkthrough', `${convertWithoutStep} unit-converted questions omitted the conversion arithmetic`);
  if (badConversionMath) fail(id, 'conversions', `${badConversionMath} printed conversion lines do not multiply out - first: ${firstBadConversion}`);
  if (formulaRestatement) fail(id, 'word-problem', `${formulaRestatement} rendered questions restate the formula instead of describing a situation`);
  if (implausibleOptions) {
    fail(id, 'options-plausible', `${implausibleOptions} rendered questions had an implausible option - first: ${firstImplausible}`);
  }
  if (duplicateLabel) {
    fail(id, 'narrative', `${duplicateLabel} rendered questions repeated a label inside one sentence - first: "${firstDuplicateLabel}"`);
  }
  if (checked === 0 && !spec.conversions?.length) {
    warn(id, 'walkthrough', 'no rendered question could be recomputed - add `context` so givens are printed');
  }
}

const targets = specs.filter((s) => !areaFilter || s.area === areaFilter);
for (const spec of targets) {
  specPass(spec);
  renderPass(spec);
}

// A formulaId registered twice is silent data loss: getDrillSpec() resolves with
// .find(), so the second spec is unreachable, and the shadowed one still counts
// toward coverage. That is how a spec can look present and never be served. This
// has to be a whole-registry check - a per-spec check cannot see it.
{
  const byId = new Map();
  for (const s of specs) {
    if (!byId.has(s.formulaId)) byId.set(s.formulaId, []);
    byId.get(s.formulaId).push(s);
  }
  for (const [id, list] of byId) {
    if (list.length > 1) {
      fail(id, 'duplicate-spec', `registered ${list.length} times; getDrillSpec() returns only the first, so the others are unreachable but still counted as coverage`);
    }
  }
}

const withSpec = new Set(specs.map((s) => s.formulaId));
const missing = [];
for (const [id, meta] of reference) {
  if (!withSpec.has(id)) missing.push({ id, area: meta.area, name: meta.name });
}
missing.sort((a, b) => a.area.localeCompare(b.area) || a.id.localeCompare(b.id));
const missingByArea = missing.reduce((acc, m) => ((acc[m.area] = (acc[m.area] || 0) + 1), acc), {});

if (strict && missing.length) {
  failures.push({
    formulaId: '(coverage)',
    check: 'coverage',
    detail: `--strict: ${missing.length} of ${reference.size} formulas still have no verified spec`,
  });
}

const report = {
  referenceFormulas: reference.size,
  specs: specs.length,
  specsChecked: targets.length,
  formulasWithoutSpec: missing.length,
  missingByArea,
  samplesPerSpec: SAMPLES,
  totalSampleChecks: targets.length * SAMPLES,
  failures,
  warnings,
  missingSample: missing.slice(0, 12),
};

if (asJson) {
  console.log(JSON.stringify(report, null, 2));
} else {
  const ok = (n) => `\u001b[32m${n}\u001b[0m`;
  const bad = (n) => `\u001b[31m${n}\u001b[0m`;
  const warnC = (n) => `\u001b[33m${n}\u001b[0m`;
  console.log(`formula reference : ${report.referenceFormulas}`);
  console.log(`drill specs       : ${report.specs} (checked ${report.specsChecked} x ${SAMPLES} samples)`);
  console.log(`without a spec    : ${bad(report.formulasWithoutSpec)}  ${JSON.stringify(missingByArea)}`);
  console.log(`failures          : ${failures.length ? bad(report.failures.length) : ok(0)}`);
  console.log(`warnings          : ${report.warnings.length ? warnC(report.warnings.length) : ok(0)}`);
  if (failures.length) {
    console.log('\n--- FAILURES ---');
    const bySpec = new Map();
    for (const f of failures) {
      if (!bySpec.has(f.formulaId)) bySpec.set(f.formulaId, []);
      bySpec.get(f.formulaId).push(f);
    }
    for (const [id, list] of bySpec) {
      console.log(`\n${id}`);
      for (const f of list) console.log(`  [${f.check}] ${f.detail}`);
    }
  }
  if (warnings.length) {
    const byCheck = new Map();
    for (const w of warnings) byCheck.set(w.check, (byCheck.get(w.check) || 0) + 1);
    console.log('\n--- WARNINGS (by type) ---');
    for (const [k, n] of byCheck) console.log(`  ${k}: ${n}`);
  }
}

process.exit(failures.length ? 1 : 0);
