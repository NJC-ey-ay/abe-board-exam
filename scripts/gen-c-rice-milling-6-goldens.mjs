// Golden cases for Area C batch 6 (rice milling: the hulling chain, throughput,
// purity, and the four recovery percentages). Ten specs.
//
// The rule this file follows is the same as the previous batch generators: every
// expected value is derived from an expression written out in full here, from
// the printed formula - never from the spec's own compute. If the two agree it
// is because the derivation matches the implementation, and if they stop
// agreeing the generator fails before the gate does.
//
// The reference points below are the corners of the milling trade, and most of
// them are the points where a distractor becomes the answer:
//
//   c-hulling-coefficient, c-hulling-efficiency and
//   c-percent-brown-rice-recovery at W_whole = W_paddy: a coefficient of 1.0,
//   the no-husk case, where the inverted option also returns 1 and the two
//   print the same string.
//   c-wholeness-coefficient at W_WBR = W_BR: a wholeness of 1.0, no breakage
//   at all, where the inverted option coincides with the answer. The drill box
//   keeps the two ranges disjoint precisely so a sample can never sit here.
//   c-percent-broken-milled-rice at W_BKR = W_MR/2: half the batch broken,
//   where the intact-share option equals the answer at exactly 50 percent.
//   c-purity at W_u = W_c: nothing removed, purity 100, where the removal
//   distractor drops to zero.
//
// The cross-spec identity this batch exists to teach is also asserted here the
// only way a single-spec golden can - by reusing the SAME input pairs across
// the twin specs. c-hulling-coefficient at Wp 2000/Wbr 1700 and
// c-percent-brown-rice-recovery at the same weights derive 0.85 and 85.0, and
// the golden file records both, so a transcription slip in one spec that breaks
// the identity fails against the other.
import { loadTsModule } from './lib/load-ts.mjs';
import { readFileSync, writeFileSync } from 'node:fs';

const GOLDEN = 'scripts/data/golden-cases.json';
const TOLERANCE = 1e-12;

const CASES = [
  // -------------------------------------------- c-hulling-coefficient
  // C_H = W_BR/W_P. 1700 kg of brown rice off 2000 kg of paddy is 0.85, the
  // textbook huller figure, and the same pair appears below at 85.0 in the
  // brown-rice-recovery spec: one measurement in two units.
  {
    id: 'c-hulling-coefficient',
    vals: { Wbr: 1700, Wp: 2000 },
    derive: 1700 / 2000,
  },
  // The box corner: the lightest allowed brown rice against the heaviest paddy
  // gives 1632/2040 = 0.8 exactly, the bottom of the working band.
  {
    id: 'c-hulling-coefficient',
    vals: { Wbr: 1632, Wp: 2040 },
    derive: 1632 / 2040,
  },
  // The top corner: 1800/2000 = 0.9. A huller posting this is running hot.
  {
    id: 'c-hulling-coefficient',
    vals: { Wbr: 1800, Wp: 2000 },
    derive: 1800 / 2000,
  },
  // No husk at all: the coefficient would be 1.0 and the inverted option,
  // W_P/W_BR, would also be 1.0, printing the same string twice. This is why
  // the box keeps W_BR far below W_P - but the identity is worth asserting.
  {
    id: 'c-hulling-coefficient',
    vals: { Wbr: 2000, Wp: 2000 },
    derive: 2000 / 2000,
    ref: 'paddy with no husk: coefficient 1.0, where the inverted distractor equals the answer',
  },

  // ------------------------------------------ c-wholeness-coefficient
  // C_W = W_WBR/W_BR. 779 kg of whole brown rice out of 820 kg is 0.95, the
  // wholeness a well-set huller holds.
  {
    id: 'c-wholeness-coefficient',
    vals: { Wbr: 820, Wwbr: 779 },
    derive: 779 / 820,
  },
  // 760 kg whole out of 900 kg: 0.844444..., the bottom of the box. The broken
  // share is 15.6 percent, which is a machine in trouble.
  {
    id: 'c-wholeness-coefficient',
    vals: { Wbr: 900, Wwbr: 760 },
    derive: 760 / 900,
  },
  // 800 out of 820: 0.975609..., close to perfect. The whole range sits within
  // a 100 kg of paddy batch, which is the whole reason this coefficient is
  // unstable in practice.
  {
    id: 'c-wholeness-coefficient',
    vals: { Wbr: 820, Wwbr: 800 },
    derive: 800 / 820,
  },
  // Perfect wholeness, W_WBR = W_BR: the coefficient is 1.0 and the inverted
  // distractor equals it. The box keeps W_WBR below W_BR by construction so no
  // sample reaches this point.
  {
    id: 'c-wholeness-coefficient',
    vals: { Wbr: 820, Wwbr: 820 },
    derive: 820 / 820,
    ref: 'no breakage: wholeness 1.0, where the inverted distractor becomes the answer',
  },

  // ------------------------------------------- c-hulling-efficiency
  // E_H = W_WBR/W_P. The same 0.85-class figure as the hulling coefficient,
  // but with the whole brown rice in the numerator. 1700 kg of intact grain
  // off 2000 kg of paddy is 0.85, and because the numerator is whole grain
  // this is already the product of the two previous coefficients.
  {
    id: 'c-hulling-efficiency',
    vals: { Wwbr: 1700, Wp: 2000 },
    derive: 1700 / 2000,
  },
  // The bottom corner, 1632/2040 = 0.8, same weight pair as the hulling spec's
  // corner. E_H and C_H agree here because the brown rice happens to be whole.
  {
    id: 'c-hulling-efficiency',
    vals: { Wwbr: 1632, Wp: 2040 },
    derive: 1632 / 2040,
  },
  // No loss at all: everything that went in comes out as whole brown rice, and
  // the efficiency is exactly 1.0, where the inverted option also prints 1.
  {
    id: 'c-hulling-efficiency',
    vals: { Wwbr: 2000, Wp: 2000 },
    derive: 2000 / 2000,
    ref: 'a huller that loses nothing: efficiency 1.0, where the inverted distractor equals the answer',
  },

  // -------------------------------------------- c-throughput-capacity
  // C_T = 0.2 W_P/T_o. 0.2 x 5000 kg over 10 h is 1000/10 = 100 kg/h, and the
  // same 100 comes out of 0.2 x 1000 kg over 2 h - the invariant that the rate
  // does not depend on the batch once the time scales with it.
  {
    id: 'c-throughput-capacity',
    vals: { Wp: 5000, To: 10 },
    derive: (0.2 * 5000) / 10,
  },
  {
    id: 'c-throughput-capacity',
    vals: { Wp: 1000, To: 2 },
    derive: (0.2 * 1000) / 2,
  },
  // The box ceiling: 0.2 x 10000 kg over 2 h is 1000 kg/h, the widest span in
  // the batch and the one the flat 5x and 25x distractors are built to sit by.
  {
    id: 'c-throughput-capacity',
    vals: { Wp: 10000, To: 2 },
    derive: (0.2 * 10000) / 2,
  },
  // A full shift at a slow huller: 0.2 x 10000 kg over 24 h is 2000/24 =
  // 83.333... kg/h, an average that hides the difference between running flat
  // out for hours and idling as shift totals wobble.
  {
    id: 'c-throughput-capacity',
    vals: { Wp: 10000, To: 24 },
    derive: (0.2 * 10000) / 24,
  },

  // ------------------------------------------- c-brown-rice-per-hour
  // W = W_P x E_H x P. 1000 kg at 0.75 hull yield and 0.96 purity is
  // 1000 x 0.75 x 0.96 = 720 kg/h, which is 72 percent of the batch: three
  // successive haircuts, not one.
  {
    id: 'c-brown-rice-per-hour',
    vals: { Wp: 1000, Eh: 0.75, P: 0.96 },
    derive: 1000 * 0.75 * 0.96,
  },
  // The box corner: 5000 x 0.85 x 0.99 = 4207.5 kg/h. The near-perfect factors
  // can no longer rescue a big batch - the rate still runs four fifths of it.
  {
    id: 'c-brown-rice-per-hour',
    vals: { Wp: 5000, Eh: 0.85, P: 0.99 },
    derive: 5000 * 0.85 * 0.99,
  },
  // The worst corner: 1000 x 0.65 x 0.93 = 604.5 kg/h. The purity is still 93
  // percent and the yield still two-thirds, and the output is half the next
  // case - because the factors multiply rather than average.
  {
    id: 'c-brown-rice-per-hour',
    vals: { Wp: 1000, Eh: 0.65, P: 0.93 },
    derive: 1000 * 0.65 * 0.93,
  },

  // ------------------------------------------------------ c-purity
  // P = [1 - (W_u - W_c)/W_c] x 100. 2020 g uncleaned against 2000 g cleaned is
  // [1 - 0.01] x 100 = 99 percent. Twenty grams of dirt on two kilos: the
  // cleaner is doing its job.
  {
    id: 'c-purity',
    vals: { Wc: 2000, Wu: 2020 },
    derive: (1 - (2020 - 2000) / 2000) * 100,
  },
  // 2070 g against 1800 g is [1 - 0.15] x 100 = 85 percent, the bottom corner
  // of the box. Note that 270 g of removal out of 2070 is really 13 percent of
  // the input, yet the answer says 15 - the removal is measured on the CLEANED
  // weight, the conservative base the formula is built on.
  {
    id: 'c-purity',
    vals: { Wc: 1800, Wu: 2070 },
    derive: (1 - (2070 - 1800) / 1800) * 100,
  },
  // 2030 g against 1900 g is [1 - 130/1900] x 100 = [1 - 0.068421...] x 100 =
  // 93.157894... percent, a mid-box figure to anchor the range test.
  {
    id: 'c-purity',
    vals: { Wc: 1900, Wu: 2030 },
    derive: (1 - (2030 - 1900) / 1900) * 100,
  },
  // Nothing removed: W_u = W_c and the purity is 100 exactly, and the removal
  // distractor drops to zero. The box keeps W_u above W_c by construction so no
  // sample reaches this point.
  {
    id: 'c-purity',
    vals: { Wc: 2000, Wu: 2000 },
    derive: (1 - (2000 - 2000) / 2000) * 100,
    ref: 'a sample the cleaner did not change: purity 100, where the removal distractor is zero',
  },

  // ----------------------------------- c-percent-brown-rice-recovery
  // BRR = (W_BR/W_P) x 100. 1700/2000 x 100 = 85.0, and this is the SAME
  // weight pair and the SAME ratio as the first hulling-coefficient golden -
  // the two are one measurement and the pair of goldens pins the identity
  // down.
  {
    id: 'c-percent-brown-rice-recovery',
    vals: { Wbr: 1700, Wp: 2000 },
    derive: (1700 / 2000) * 100,
  },
  // The bottom corner: 1632/2040 x 100 = 80.0, the same pair as the hulling
  // coefficient's bottom corner.
  {
    id: 'c-percent-brown-rice-recovery',
    vals: { Wbr: 1632, Wp: 2040 },
    derive: (1632 / 2040) * 100,
  },
  // The top corner: 1800/2000 x 100 = 90.0. A recovery in the nineties is a
  // machine that is not removing its husk.
  {
    id: 'c-percent-brown-rice-recovery',
    vals: { Wbr: 1800, Wp: 2000 },
    derive: (1800 / 2000) * 100,
  },
  // No husk: 100 percent recovery, where the inverted option also prints 100.0.
  {
    id: 'c-percent-brown-rice-recovery',
    vals: { Wbr: 2000, Wp: 2000 },
    derive: (2000 / 2000) * 100,
    ref: 'no husk at all: recovery 100, where the inverted distractor becomes the answer',
  },

  // --------------------------------------- c-percent-broken-milled-rice
  // BKR = (W_BKR/W_MR) x 100. 250 kg broken out of 1000 kg of milled rice is
  // 25 percent - the middle of the poor-milling band the box lives in.
  {
    id: 'c-percent-broken-milled-rice',
    vals: { Wbk: 250, Wmr: 1000 },
    derive: (250 / 1000) * 100,
  },
  // The bottom corner: 200/1800 x 100 = 11.111... percent, the best result the
  // box will post. Still far above the 4 percent a good contract specifies.
  {
    id: 'c-percent-broken-milled-rice',
    vals: { Wbk: 200, Wmr: 1800 },
    derive: (200 / 1800) * 100,
  },
  // The top corner: 350/1000 x 100 = 35 percent, a machine wrecking its own
  // output.
  {
    id: 'c-percent-broken-milled-rice',
    vals: { Wbk: 350, Wmr: 1000 },
    derive: (350 / 1000) * 100,
  },
  // 200/1400 x 100 = 14.285... percent, a mid-box point right on the 1/7 line.
  {
    id: 'c-percent-broken-milled-rice',
    vals: { Wbk: 200, Wmr: 1400 },
    derive: (200 / 1400) * 100,
  },
  // Half the batch broken: 50 percent, where the intact-share distractor also
  // returns exactly 50 and prints the same string. The box keeps W_BKR well
  // below W_MR/2 so no sample reaches this point.
  {
    id: 'c-percent-broken-milled-rice',
    vals: { Wbk: 500, Wmr: 1000 },
    derive: (500 / 1000) * 100,
    ref: 'half the batch broken: 50 percent, where the intact-share distractor becomes the answer',
  },

  // ---------------------------------------- c-percent-brewers-rice
  // BrR = (W_BrR/W_MR) x 100. 80 kg of brewer rice out of 1000 kg is 8
  // percent - a typical mill's routed product, not a loss.
  {
    id: 'c-percent-brewers-rice',
    vals: { Wbr: 80, Wmr: 1000 },
    derive: (80 / 1000) * 100,
  },
  // The bottom corner: 50/2000 x 100 = 2.5 percent, the box's best possible
  // figure and the anchor that keeps (1 + r)/(1 - r) below the gap.
  {
    id: 'c-percent-brewers-rice',
    vals: { Wbr: 50, Wmr: 2000 },
    derive: (50 / 2000) * 100,
  },
  // A 20 percent brewer figure, 200/1000, is a mill that is effectively
  // grading on purpose and selling the product stream it creates.
  {
    id: 'c-percent-brewers-rice',
    vals: { Wbr: 200, Wmr: 1000 },
    derive: (200 / 1000) * 100,
  },
  // 150/1200 x 100 = 12.5 percent, a mid-box point at the clean 1/8 line.
  {
    id: 'c-percent-brewers-rice',
    vals: { Wbr: 150, Wmr: 1200 },
    derive: (150 / 1200) * 100,
  },

  // --------------------------------------- c-percent-head-rice-recovery
  // HRR = (W_HR/W_MR) x 100. 800 kg of head rice out of 1000 kg of milled rice
  // is 80 percent - the industry reference figure, and the number a buyer
  // grades a mill on.
  {
    id: 'c-percent-head-rice-recovery',
    vals: { Whr: 800, Wmr: 1000 },
    derive: (800 / 1000) * 100,
  },
  // The bottom corner: 792/1100 x 100 = 72 percent. The head rice range has
  // to start at 792 to hold the ratio above 0.72 at the widest milled batch.
  {
    id: 'c-percent-head-rice-recovery',
    vals: { Whr: 792, Wmr: 1100 },
    derive: (792 / 1100) * 100,
  },
  // The top corner: 850/1000 x 100 = 85 percent, the tightest box in the
  // batch and the reason its two structural distractors sit on opposite sides
  // of the answer.
  {
    id: 'c-percent-head-rice-recovery',
    vals: { Whr: 850, Wmr: 1000 },
    derive: (850 / 1000) * 100,
  },
];

// ---------------------------------------------------------------- notes
const NOTES = {
  0: '1700 kg of brown rice off 2000 kg of paddy is 0.85, the textbook huller figure. The identical weight pair appears at 85.0 in the brown-rice-recovery goldens, because the two specs are one measurement.',
  1: 'The box corner: 1632/2040 = 0.8 exactly, the lightest allowed brown rice against the heaviest paddy.',
  2: 'The top corner: 1800/2000 = 0.9, the wrong side of the working band.',
  3: 'Reference point: with no husk the coefficient is 1.0, and the inverted distractor W_P/W_BR is also 1.0, so the two options print the same string.',
  4: '779 kg of whole brown rice out of 820 kg is 0.95, the wholeness a well-set huller holds.',
  5: '760/900 = 0.844444, the bottom of the box, where the broken share is 15.6 percent.',
  6: '800/820 = 0.975610, close to perfect wholeness.',
  7: 'Reference point: W_WBR = W_BR means no breakage, wholeness 1.0, and the inverted distractor coincides with the answer. The box keeps the ranges disjoint so no sample lands here.',
  8: '1700 kg of WHOLE brown rice off 2000 kg of paddy is 0.85, the product of the two previous coefficients at once.',
  9: 'The bottom corner, 1632/2040 = 0.8, the same weight pair as the hulling spec corner; E_H equals C_H here because the brown rice happens to be whole.',
  10: 'Reference point: a huller that loses nothing gives efficiency 1.0, where the inverted option also prints 1.',
  11: '0.2 x 5000 kg over 10 h is 1000/10 = 100 kg/h.',
  12: '0.2 x 1000 kg over 2 h is also 100 kg/h - the rate does not depend on the batch once the time scales with it.',
  13: 'The box ceiling: 0.2 x 10000 kg over 2 h is 1000 kg/h, the widest span in the batch.',
  14: '0.2 x 10000 kg over 24 h is 83.333... kg/h, the slow-shift average.',
  15: '1000 x 0.75 x 0.96 = 720 kg/h, which is 72 percent of the batch - three haircuts, not one.',
  16: '5000 x 0.85 x 0.99 = 4207.5 kg/h, the box corner: even the best factors only yield four fifths of the batch.',
  17: '1000 x 0.65 x 0.93 = 604.5 kg/h, the worst corner. The factors multiply rather than average, which is why the span between corners is so wide.',
  18: '[1 - 20/2000] x 100 = [1 - 0.01] x 100 = 99 percent. Twenty grams of removal on two kilos.',
  19: '[1 - 270/1800] x 100 = 85 percent. The removal is measured on the CLEANED weight, so 270 g out of 2070 (13 percent of the input) reads as 15 percent.',
  20: '[1 - 130/1900] x 100 = 93.157894 percent, a mid-box anchor.',
  21: 'Reference point: W_u = W_c means nothing was removed, purity 100, and the removal distractor drops to zero.',
  22: '(1700/2000) x 100 = 85.0 - the same ratio and the same weight pair as the first hulling-coefficient golden, pinning the two-unit identity between the specs.',
  23: '(1632/2040) x 100 = 80.0, the bottom corner, the same pair as the hulling spec bottom corner.',
  24: '(1800/2000) x 100 = 90.0, the top corner.',
  25: 'Reference point: no husk gives recovery 100, where the inverted distractor also prints 100.0.',
  26: '250/1000 x 100 = 25 percent, mid-box.',
  27: '200/1800 x 100 = 11.111... percent, the bottom corner and the best the box posts.',
  28: '350/1000 x 100 = 35 percent, the top corner, a machine wrecking its output.',
  29: '200/1400 x 100 = 14.285... percent, the clean 1/7 line.',
  30: 'Reference point: half the batch broken gives 50 percent, where the intact-share distractor also returns exactly 50.',
  31: '80/1000 x 100 = 8 percent, a typical routed product.',
  32: '50/2000 x 100 = 2.5 percent, the box floor that anchors the distractor band.',
  33: '200/1000 x 100 = 20 percent, the top corner.',
  34: '150/1200 x 100 = 12.5 percent, the clean 1/8 line.',
  35: '800/1000 x 100 = 80 percent, the industry reference a buyer grades on.',
  36: '792/1100 x 100 = 72 percent, the bottom corner: the head rice range starts at 792 to hold the ratio above 0.72.',
  37: '850/1000 x 100 = 85 percent, the top corner of the tightest box in the batch.',
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