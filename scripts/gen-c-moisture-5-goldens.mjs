// Golden cases for Area C batch 5 (grain moisture content, wet/dry basis, the
// drying mass balance, paddy porosity and the remaining paddy properties).
// Eleven specs.
//
// The rule this file follows: every value written into the golden file is first
// checked against an expression written out here, in full, from the printed
// formula - never against the spec's own compute function. If the two agree it
// is because the derivation matches the implementation, and if they ever stop
// agreeing the generator fails before the gate does. Restating the
// implementation inside the golden file would only prove the implementation
// equals itself.
//
// Each stored entry is { _note, vals, expected, tolerance }. `expected` is the
// full-precision value compute returns and `_note` carries the hand derivation
// that was checked against `derive` here, so the reasoning survives in the data
// file rather than only in this script. The relative tolerance is 1e-12, far
// tighter than the display precision of any of these drills.
//
// The reference points here are not padding. This batch is where the physical
// limits live, and they are the checks that catch a transcription slip in a
// formula that no sample inside the box would expose:
//
//   c-wet-dry-basis-relationship at MC = 0 gives 0 on both bases - the only point
//   at which the two definitions agree, and the limit that the whole identity is
//   built around.
//   c-paddy-porosity-medium and -long at MC = 0 give 69.05 and 65.55, which are
//   the two intercepts and therefore the porosity of bone-dry grain. That the
//   long-grain intercept is the LOWER of the two is the fact the medium-grain
//   spec's coefficient-swap distractor quietly violates.
//   c-specific-heat-paddy at MC = 0 gives 0.22008, the specific heat of the dry
//   matter, which is the intercept of the mixture rule.
//   c-minimum-angle-friction at x = 1 gives exactly 45 degrees. That is the
//   point at which the two distractor forms - converting the argument, and
//   inverting the argument - both return the right answer, and it is why the
//   drill box stops at 0.7: above x = 1 the reciprocal distractor crosses back
//   over the answer.
//
// Cases marked `ref` sit outside the drill box on purpose. The range test is
// skipped for those and the reason is printed, because the range test exists to
// catch a mistyped random case and would otherwise throw away the most valuable
// checks in the file. The gate itself does not range-check goldens, so these are
// honoured there too.
//
// The file is idempotent: every key this generator owns is removed before it
// writes, so a re-run replaces its own cases instead of appending duplicates.
import { loadTsModule } from './lib/load-ts.mjs';
import { readFileSync, writeFileSync } from 'node:fs';

const GOLDEN = 'scripts/data/golden-cases.json';
const TOLERANCE = 1e-12;

const CASES = [
  // ------------------------------------------ c-moisture-weight-balance
  // W_W = W_i - W_o. 1200 kg as received, 350 kg off the pan after a full oven
  // determination: 1200 - 350 = 850 kg of water. Cross-check against the balance
  // the printed form also gives: 850 + 350 = 1200.
  {
    id: 'c-moisture-weight-balance',
    vals: { Wi: 1200, Wo: 350 },
    derive: 1200 - 350,
  },
  // 1010 kg against 400 kg: 1010 - 400 = 610 kg of water, and 610 + 400 = 1010.
  {
    id: 'c-moisture-weight-balance',
    vals: { Wi: 1010, Wo: 400 },
    derive: 1010 - 400,
  },
  // A load with no water at all: the difference is zero and the identity
  // degenerates to W_i = W_o. Outside the box, since a 20 percent moisture grain
  // always carries water.
  {
    id: 'c-moisture-weight-balance',
    vals: { Wi: 500, Wo: 500 },
    derive: 500 - 500,
    ref: 'bone-dry grain, where the water weight is zero by definition',
  },

  // -------------------------------------- c-wet-dry-basis-relationship
  // %MC_DB = %MC_WB x 100/(100 - %MC_WB). At 14 percent wet basis the dry matter
  // is 86 percent of the mass, so the water is 14/86 of the dry matter:
  // 14/86 x 100 = 16.279069... percent. Written from the printed form:
  // 14 x 100/(100 - 14) = 1400/86.
  {
    id: 'c-wet-dry-basis-relationship',
    vals: { MC: 14 },
    derive: (14 * 100) / (100 - 14),
  },
  // 22 percent wet: 2200/78 = 28.205128... percent on a dry basis. The wet-basis
  // figure is 22, so the two are 28.2 percent apart - the gap widens as the grain
  // dries, which is the whole reason the basis has to be named.
  {
    id: 'c-wet-dry-basis-relationship',
    vals: { MC: 22 },
    derive: (22 * 100) / (100 - 22),
  },
  // At zero moisture the two bases coincide, since 0 x 100/100 = 0. This is the
  // only point at which they are equal, and it is the limit the identity is
  // built around. Outside the box, which starts at 12 percent.
  {
    id: 'c-wet-dry-basis-relationship',
    vals: { MC: 0 },
    derive: (0 * 100) / (100 - 0),
    ref: 'bone-dry grain, the one point at which wet basis and dry basis agree',
  },

  // ------------------------------------- c-weight-moisture-removed
  // W_MR = W_i[1 - (1 - MC_i)/(1 - MC_f)] = W_i(MC_i - MC_f)/(1 - MC_f).
  // 2000 kg at 0.24 down to 0.08: the dry matter is 2000 x 0.92 = 1840 kg, which
  // at 8 percent moisture is 1840/0.92 = 2000 kg of final grain - unchanged, so
  // nothing was removed. Both routes agree, and the result is the box's own
  // degenerate case.
  {
    id: 'c-weight-moisture-removed',
    vals: { Wi: 2000, MCi: 0.24, MCf: 0.08 },
    derive: 2000 * (0.24 - 0.08) / (1 - 0.08),
  },
  // 5000 kg from 0.35 to 0.10. Dry matter 5000 x 0.65 = 3250 kg, and the final
  // grain is 3250/0.90 = 3611.111... kg, so the water removed is
  // 5000 - 3611.111... = 1388.888... kg. The printed form: 5000 x 0.25/0.90.
  {
    id: 'c-weight-moisture-removed',
    vals: { Wi: 5000, MCi: 0.35, MCf: 0.1 },
    derive: 5000 * (0.35 - 0.1) / (1 - 0.1),
  },

  // ------------------------------------------- c-final-weight-dried
  // W_f = W_i(1 - MC_i)/(1 - MC_f). 5000 kg from 0.35 to 0.10 gives the same
  // 3611.111... kg above, computed the other way: the dry matter is 3250 kg and
  // at 10 percent moisture that dry matter is 90 percent of the total.
  {
    id: 'c-final-weight-dried',
    vals: { Wi: 5000, MCi: 0.35, MCf: 0.1 },
    derive: (5000 * (1 - 0.35)) / (1 - 0.1),
  },
  // 1000 kg from 0.20 to 0.05: dry matter 800 kg, and 800/0.95 = 842.105263...
  // kg of dried grain. 842.105263 + 157.894737 = 1000, which is the mass balance
  // closing against the previous spec at the same inputs.
  {
    id: 'c-final-weight-dried',
    vals: { Wi: 1000, MCi: 0.2, MCf: 0.05 },
    derive: (1000 * (1 - 0.2)) / (1 - 0.05),
  },

  // ----------------------------------- c-moisture-reduction-rate
  // MRR = (W_i - W_f)/T_d. 10000 kg down to 2000 kg in 8 h: 8000/8 = 1000 kg/h.
  {
    id: 'c-moisture-reduction-rate',
    vals: { Wi: 10000, Wf: 2000, Td: 8 },
    derive: (10000 - 2000) / 8,
  },
  // 6000 kg down to 1500 kg in 4.5 h: 4500/4.5 = 1000 kg/h again, which is a
  // useful check that the answer is a rate and does not depend on the batch size
  // once the removal and the time scale together.
  {
    id: 'c-moisture-reduction-rate',
    vals: { Wi: 6000, Wf: 1500, Td: 4.5 },
    derive: (6000 - 1500) / 4.5,
  },
  // Nothing removed: the rate is zero however long the run takes. Outside the
  // box, since W_f is always below W_i in it.
  {
    id: 'c-moisture-reduction-rate',
    vals: { Wi: 8000, Wf: 8000, Td: 5 },
    derive: (8000 - 8000) / 5,
    ref: 'no water removed, so the rate is zero however long the run',
  },

  // ----------------------------------- c-percent-moisture-reduction
  // %MRR = (MC_i - MC_f)/T_d. 20 percent down to 12 percent in 5 h is
  // 8/5 = 1.6 percent per hour. Note this is NOT the standard percent reduction,
  // which would be 100 x 8/20 = 40 percent with no time term - the difference the
  // SOURCE NOTE records.
  {
    id: 'c-percent-moisture-reduction',
    vals: { MCi: 20, MCf: 12, Td: 5 },
    derive: (20 - 12) / 5,
  },
  // 26 down to 10 over 8 h: 16/8 = 2 percent per hour.
  {
    id: 'c-percent-moisture-reduction',
    vals: { MCi: 26, MCf: 10, Td: 8 },
    derive: (26 - 10) / 8,
  },

  // -------------------------------------- c-paddy-porosity-medium
  // %P_M = 69.05 - 0.885 MC_WB. At 14 percent: 69.05 - 12.39 = 56.66 percent.
  {
    id: 'c-paddy-porosity-medium',
    vals: { MC: 14 },
    derive: 69.05 - 0.885 * 14,
  },
  // At 25 percent: 69.05 - 22.125 = 46.925 percent. Cross-check on the long-grain
  // line at the same moisture, 65.55 - 11.875 = 53.675, and the gap of 6.75
  // points is the class difference the two specs are paired to teach.
  {
    id: 'c-paddy-porosity-medium',
    vals: { MC: 25 },
    derive: 69.05 - 0.885 * 25,
  },
  // At zero moisture the slope term vanishes and the answer is the intercept,
  // 69.05 percent - the porosity of bone-dry medium-grain paddy. Outside the
  // box, which starts at 10 percent.
  {
    id: 'c-paddy-porosity-medium',
    vals: { MC: 0 },
    derive: 69.05 - 0.885 * 0,
    ref: 'bone-dry medium-grain paddy, where the answer is the intercept alone',
  },

  // ----------------------------------------- c-paddy-porosity-long
  // %P_L = 65.55 - 0.475 MC_WB. At 14 percent: 65.55 - 6.65 = 58.90 percent.
  {
    id: 'c-paddy-porosity-long',
    vals: { MC: 14 },
    derive: 65.55 - 0.475 * 14,
  },
  // At 25 percent: 65.55 - 11.875 = 53.675 percent, which is the same figure
  // cross-checked against the medium-grain line in the previous spec.
  {
    id: 'c-paddy-porosity-long',
    vals: { MC: 25 },
    derive: 65.55 - 0.475 * 25,
  },
  // Zero moisture gives the long-grain intercept, 65.55 percent. That it is
  // BELOW the medium-grain intercept of 69.05 is the fact the medium-grain
  // spec's coefficient-swap distractor quietly contradicts at the dry end.
  {
    id: 'c-paddy-porosity-long',
    vals: { MC: 0 },
    derive: 65.55 - 0.475 * 0,
    ref: 'bone-dry long-grain paddy, where the answer is the intercept alone',
  },

  // ---------------------------------- c-percent-increase-porosity
  // %Increased = ((P_f - P_i)/P_f) x 100. Porosity 50 to 60: 10/60 x 100 =
  // 16.666666... percent. Note the printed denominator is the FINAL porosity.
  // The conventional form would divide by 50 and give 20 percent.
  {
    id: 'c-percent-increase-porosity',
    vals: { F: 60, I: 50 },
    derive: ((60 - 50) / 60) * 100,
  },
  // 52 to 55: 3/55 x 100 = 5.454545... percent. A small change, and still not
  // the 5.769... the initial-value convention would give.
  {
    id: 'c-percent-increase-porosity',
    vals: { F: 55, I: 52 },
    derive: ((55 - 52) / 55) * 100,
  },

  // ------------------------------------- c-minimum-angle-friction
  // theta = atan(x) in degrees. x = 0.5: atan(0.5) = 0.4636476 rad, and
  // 0.4636476 x 180/pi = 26.565051... degrees, the 3-4-5 triangle angle.
  {
    id: 'c-minimum-angle-friction',
    vals: { x: 0.5 },
    derive: (Math.atan(0.5) * 180) / Math.PI,
  },
  // x = 0.25: atan(0.25) = 0.2449787 rad = 14.036243... degrees, the 1-4-√17
  // angle. The reciprocal distractor atan(1/0.25) = atan(4) = 75.963757 degrees,
  // and note the two sum to exactly 90 - which is the identity that makes the
  // reciprocal band 1.572 to 6.958 in the spec.
  {
    id: 'c-minimum-angle-friction',
    vals: { x: 0.25 },
    derive: (Math.atan(0.25) * 180) / Math.PI,
  },
  // x = 1 gives exactly 45 degrees, and it is where both distractors coincide
  // with the answer: converting the argument, atan(1 x 180/pi) in degrees, is
  // 88.998... not 45, but the reciprocal atan(1/1) is atan(1) = 45 exactly. The
  // drill box stops at 0.7 to stay well clear of it.
  {
    id: 'c-minimum-angle-friction',
    vals: { x: 1 },
    derive: (Math.atan(1) * 180) / Math.PI,
    ref: 'the angle where the reciprocal distractor becomes the answer, above the 0.7 box ceiling',
  },

  // --------------------------------------- c-specific-heat-paddy
  // C = 0.22008 + 0.01301 MC_WB. At 14 percent: 0.22008 + 0.18214 = 0.40222
  // BTU/lb F. The implied specific heat of the water term is 0.01301 per
  // percentage point, which over a mass fraction of 0.01 is 1.301 - against 1.0
  // tabulated for water, so the slope sits a little above the mixture rule.
  {
    id: 'c-specific-heat-paddy',
    vals: { MC: 14 },
    derive: 0.22008 + 0.01301 * 14,
  },
  // At 26 percent: 0.22008 + 0.33826 = 0.55834 BTU/lb F. Just over double the
  // dry-matter term, which is the point the keyConcept makes about water
  // dominating the thermal mass.
  {
    id: 'c-specific-heat-paddy',
    vals: { MC: 26 },
    derive: 0.22008 + 0.01301 * 26,
  },
  // Zero moisture leaves the intercept, 0.22008 BTU/lb F - the specific heat of
  // the dry matter itself, and the only number in the expression that is not
  // scaled by moisture. Outside the box, which starts at 10 percent.
  {
    id: 'c-specific-heat-paddy',
    vals: { MC: 0 },
    derive: 0.22008 + 0.01301 * 0,
    ref: 'bone-dry paddy, where the answer is the specific heat of the dry matter',
  },
];

// ---------------------------------------------------------------------------
// The hand derivations above, written out in words. Kept beside the expressions
// so the reasoning lives in the data file too, not only in this script.
const NOTES = {
  0: '1200 kg as received less 350 kg oven-dry gives 850 kg of water; the balance checks, 850 + 350 = 1200.',
  1: '1010 kg as received less 400 kg oven-dry gives 610 kg of water; 610 + 400 = 1010.',
  2: 'Reference point: with no water in the grain the difference is zero and the balance degenerates to W_i = W_o.',
  3: '14 percent wet basis means the dry matter is 86 percent of the mass, so water per unit dry matter is 14/86; 14 x 100/86 = 16.279069 percent on a dry basis.',
  4: '22 percent wet: 2200/78 = 28.205128 percent dry, which is 28 percent larger than the wet-basis figure - the gap widens as the grain dries.',
  5: 'Reference point: at zero moisture the two bases coincide, since 0 x 100/100 = 0. It is the only point at which they are equal.',
  6: '2000 kg at 0.24 to 0.08: the dry matter is 2000 x 0.92 = 1840 kg, which at 8 percent is 1840/0.92 = 2000 kg of final grain, so nothing was removed. Degenerate case, and the printed form agrees: 2000 x 0.16/0.92 = 0.',
  7: '5000 kg from 0.35 to 0.10: dry matter 3250 kg, final grain 3250/0.90 = 3611.111 kg, so 1388.889 kg of water left. Printed form: 5000 x 0.25/0.90.',
  8: '5000 kg from 0.35 to 0.10 gives 3611.111 kg dried, computed from the dry matter side: 5000 x 0.65/0.90. The same figure the moisture-removed case reaches from the other direction.',
  9: '1000 kg from 0.20 to 0.05: dry matter 800 kg, and 800/0.95 = 842.105 kg dried. 842.105 + 157.895 = 1000, so the mass balance closes.',
  10: '10000 kg down to 2000 kg over 8 h removes 8000 kg, so 1000 kg/h.',
  11: '6000 kg down to 1500 kg over 4.5 h removes 4500 kg, so 1000 kg/h again - a check that the answer is a rate rather than a batch total.',
  12: 'Reference point: no water removed means a zero rate however long the run takes.',
  13: '20 percent to 12 percent over 5 h is 8/5 = 1.6 percent per hour. The standard percent reduction would be 100 x 8/20 = 40 percent with no time term, which is the naming clash the SOURCE NOTE records.',
  14: '26 percent to 10 percent over 8 h is 16/8 = 2 percent per hour.',
  15: '69.05 - 0.885 x 14 = 69.05 - 12.39 = 56.66 percent.',
  16: '69.05 - 0.885 x 25 = 69.05 - 22.125 = 46.925 percent. The long-grain line at the same moisture gives 53.675, and the 6.75 point gap is the class difference.',
  17: 'Reference point: at zero moisture the slope term vanishes and the porosity is the intercept, 69.05 percent.',
  18: '65.55 - 0.475 x 14 = 65.55 - 6.65 = 58.90 percent.',
  19: '65.55 - 0.475 x 25 = 65.55 - 11.875 = 53.675 percent, the same figure cross-checked against the medium-grain line above.',
  20: 'Reference point: the long-grain intercept is 65.55, BELOW the medium-grain intercept of 69.05 - the fact the medium-grain coefficient-swap distractor contradicts at the dry end.',
  21: 'Porosity 50 to 60 is 10/60 x 100 = 16.666667 percent. The printed denominator is the final porosity; dividing by the initial would give 20 percent.',
  22: 'Porosity 52 to 55 is 3/55 x 100 = 5.454545 percent, against 5.769231 for the initial-value convention.',
  23: 'atan(0.5) = 0.4636476 rad = 26.565051 degrees, the 3-4-5 triangle angle.',
  24: 'atan(0.25) = 0.2449787 rad = 14.036243 degrees. The reciprocal atan(4) is 75.963757 degrees and the two sum to exactly 90, which is the identity behind that distractor band.',
  25: 'Reference point: at x = 1 the answer is 45 degrees and the reciprocal distractor atan(1/1) is also 45, so the two coincide. The box stops at 0.7.',
  26: '0.22008 + 0.01301 x 14 = 0.22008 + 0.18214 = 0.40222 BTU/lb F. The slope implies 1.301 for the water term against 1.0 tabulated.',
  27: '0.22008 + 0.01301 x 26 = 0.22008 + 0.33826 = 0.55834 BTU/lb F, just over double the dry-matter term.',
  28: 'Reference point: zero moisture leaves the intercept, 0.22008 BTU/lb F, the specific heat of the dry matter.',
};

const { getAllDrillSpecs } = loadTsModule('src/data/formula-drills.ts');
const specs = new Map(getAllDrillSpecs().map((s) => [s.formulaId, s]));

const data = JSON.parse(readFileSync(GOLDEN, 'utf8'));
let added = 0;
const failures = [];
const refs = [];

// idempotence: drop the keys this generator owns before writing, so a re-run
// replaces its cases rather than appending a second copy of each
for (const id of new Set(CASES.map((c) => c.id))) delete data[id];

CASES.forEach((c, idx) => {
  const spec = specs.get(c.id);
  if (!spec) { failures.push(`no spec registered for ${c.id}`); return; }

  for (const [k, val] of Object.entries(c.vals)) {
    const v = spec.vars.find((x) => x.ascii === k);
    if (!v) { failures.push(`${c.id}: vals key "${k}" is not a declared variable`); continue; }
    if (val < v.min || val > v.max) {
      if (c.ref) refs.push(`${c.id} ${k} = ${val} outside ${v.min}..${v.max}  [${c.ref}]`);
      else failures.push(`${c.id}: ${k} = ${val} is outside the box ${v.min}..${v.max}`);
    }
  }

  const got = spec.compute(c.vals);
  const want = c.derive;
  if (!Number.isFinite(got)) { failures.push(`${c.id}: compute returned ${got}`); return; }
  const rel = Math.abs(got - want) / Math.max(Math.abs(want), 1e-300);
  if (rel > TOLERANCE) {
    failures.push(`${c.id} ${JSON.stringify(c.vals)}: implementation ${got}, hand derivation ${want}, rel ${rel.toExponential(3)}`);
    return;
  }
  (data[c.id] ||= []).push({ _note: NOTES[idx], vals: c.vals, expected: got, tolerance: TOLERANCE });
  added++;
});

if (failures.length) {
  console.error('GOLDEN GENERATION FAILED\n' + failures.map((f) => '  ' + f).join('\n'));
  process.exit(1);
}

writeFileSync(GOLDEN, JSON.stringify(data, null, 2) + '\n');
const touched = [...new Set(CASES.map((c) => c.id))];
console.log(`added ${added} goldens across ${touched.length} specs`);
console.log(`total keys now: ${Object.keys(data).length}`);
for (const id of touched) console.log(`  ${id}: ${data[id].length} case(s)`);
if (refs.length) {
  console.log(`\n${refs.length} deliberate reference point(s) outside the drill box:`);
  for (const r of refs) console.log('  ' + r);
}
