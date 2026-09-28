// Golden cases for Area C batch 3 (heat transfer, thermodynamics, psychrometric
// ratios). Ten specs, twenty cases.
//
// The rule this file follows: every value written into the golden file is first
// checked against an expression written out here, in full, from the printed
// formula - never against the spec's own compute function. If the two agree it
// is because the derivation matches the implementation, and if they ever stop
// agreeing the generator fails before the gate does. That is the only way a
// golden file is worth having; restating the implementation inside the golden
// file would only prove the implementation equals itself.
//
// Each stored entry is { _note, vals, expected, tolerance }, which is the shape
// the gate reads. `expected` is the full-precision value compute returns, and
// `_note` carries the hand derivation that was checked against `derive` here,
// so the reasoning survives in the data file rather than only in this script.
// The relative tolerance is 1e-12, far tighter than the display precision of
// any of these drills. The two rounded by hand (the 0.5 and 2 multiples) are
// exact halves and doublings of values that are already exact binary fractions,
// so they carry no error at all.
//
// A case marked `ref` is a REFERENCE POINT and sits outside the drill box on
// purpose: the boiling point of water, a textbook energy balance, a
// conductivity of insulating material rather than of a metal, and a surface at
// half the kelvin temperature of another to show the fourth power. The range
// test is skipped for those and the reason is printed, because the range test
// exists to catch a mistyped random case and would otherwise throw away the
// most valuable checks in the file. The gate itself does not range-check
// goldens, so these are honoured there too.
//
// The file is idempotent: every key this generator owns is removed before it
// writes, so a re-run replaces its own cases instead of appending duplicates.
// An earlier version of this script wrote bare { degF: 212 } objects rather
// than { vals, expected } and the gate rejected all ten specs at once with
// "Cannot read properties of undefined"; the purge is what keeps that class of
// mistake from being sticky.
import { loadTsModule } from './lib/load-ts.mjs';
import { readFileSync, writeFileSync } from 'node:fs';

const GOLDEN = 'scripts/data/golden-cases.json';
const TOLERANCE = 1e-12;
const CASES = [
  // ------------------------------------------- c-temperature-conversions
  // degC = 5/9 (degF - 32). 212 degF is the boiling point of water and must
  // come out at exactly 100; that single reference point is the check. It is
  // above the drill box, which stops at 200 degF so that the shifted
  // distractor keeps clear of the 1.15 scalar.
  {
    id: 'c-temperature-conversions',
    vals: { degF: 212 },
    derive: (5 / 9) * (212 - 32),
    ref: 'boiling point of water, above the drill box',
  },
  {
    id: 'c-temperature-conversions',
    vals: { degF: 98.6 },
    derive: (5 / 9) * (98.6 - 32),
  },

  // ---------------------------------------------- c-stefan-boltzmann
  // Q_R = eps sigma A T^4 with sigma = 5.669e-8. T is in kelvin, so a
  // dull-red surface at 900 K over 5 m2 at emissivity 0.95.
  {
    id: 'c-stefan-boltzmann',
    vals: { eps: 0.95, A: 5, T: 900 },
    derive: 0.95 * 5.669e-8 * 5 * Math.pow(900, 4),
  },
  // 450 K is half of 900 K, and the answer is one sixteenth of the first
  // case's radiation per unit emissivity, which is the fourth power doing its
  // work. The drill box starts at 600 K so the Celsius-versus-kelvin
  // distractor stays in band, so this is a reference case.
  {
    id: 'c-stefan-boltzmann',
    vals: { eps: 0.8, A: 1.25, T: 450 },
    derive: 0.8 * 5.669e-8 * 1.25 * Math.pow(450, 4),
    ref: 'half the kelvin temperature of the case above, one sixteenth the radiation',
  },

  // ---------------------------------------- c-first-law-thermodynamics
  // dE = Q - W, the sign convention consistent with the printed definition of
  // W as work done BY the system. 1000 J in, 300 J out, 700 J stored. The
  // printed Q + W would say 1300 J, which is why this case is worth having
  // and why it sits outside the drill box, whose W band is narrow.
  {
    id: 'c-first-law-thermodynamics',
    vals: { Q: 1000, W: 300 },
    derive: 1000 - 300,
    ref: 'the textbook balance, below the drill box, where the printed sum would give 1300 J',
  },
  {
    id: 'c-first-law-thermodynamics',
    vals: { Q: 2400, W: 600 },
    derive: 2400 - 600,
  },

  // ------------------------------------------- c-newtons-law-cooling
  // Q_h = h_c A (T_s - T_f). 25 W/m2K over 2.4 m2 across a 40 K difference
  // gives 2400 W, which is the 5 kW figure a dairy chiller is specified on.
  {
    id: 'c-newtons-law-cooling',
    vals: { hc: 25, A: 2.4, Ts: 65, Tf: 25 },
    derive: 25 * 2.4 * (65 - 25),
  },
  {
    id: 'c-newtons-law-cooling',
    vals: { hc: 12.5, A: 8, Ts: 100, Tf: 35 },
    derive: 12.5 * 8 * (100 - 35),
  },

  // ------------------------------------------------ c-fouriers-law
  // Cylindrical: Q = 2 pi K L dT / ln(ro/ri). A 40 mm inside radius against
  // 100 mm outside is a ratio of 2.5, and ln 2.5 is 0.9163. The conductivity
  // is that of insulating material, 0.18 W/m K, which is below the drill box
  // since that box is set to metals and masonry so the logarithmic correction
  // cannot be swamped.
  {
    id: 'c-fouriers-law',
    vals: { K: 0.18, L: 2, Ti: 90, To: 30, ri: 40, ro: 100 },
    derive: (2 * Math.PI * 0.18 * 2 * (90 - 30)) / Math.log(100 / 40),
    ref: 'insulating conductivity, below the metal-and-masonry drill box',
  },
  // A thin sleeve: ro/ri = 1.2, so ln 1.2 = 0.18232 and the logarithmic
  // correction is only about 5 percent on the flat-wall answer.
  {
    id: 'c-fouriers-law',
    vals: { K: 40, L: 1.5, Ti: 150, To: 20, ri: 50, ro: 60 },
    derive: (2 * Math.PI * 40 * 1.5 * (150 - 20)) / Math.log(60 / 50),
  },

  // ------------------------------------------ c-heat-utilization-factor
  // HUF = (T3 - T2)/(T1 - T2). 20 K of the 50 K rise actually used, so 0.4.
  {
    id: 'c-heat-utilization-factor',
    vals: { T1: 30, T3: 50, T2: 80 },
    derive: (50 - 80) / (30 - 80),
  },
  // Full utilisation: exhaust air leaves at the inlet temperature, giving 1.0.
  {
    id: 'c-heat-utilization-factor',
    vals: { T1: 28, T3: 45, T2: 70 },
    derive: (45 - 70) / (28 - 70),
  },

  // ------------------------------------------------- c-humidity-ratio
  // The PRINTED form, W = pv/Patm, which is a pressure ratio. 2 kPa of vapour
  // in 101.3 kPa of air. The mass ratio would be 0.622*2/(101.3-2) = 0.01253,
  // and the gap is the subject of the SOURCE NOTE.
  {
    id: 'c-humidity-ratio',
    vals: { pv: 2, Patm: 101.3 },
    derive: 2 / 101.3,
  },
  {
    id: 'c-humidity-ratio',
    vals: { pv: 3.5, Patm: 98.7 },
    derive: 3.5 / 98.7,
  },

  // ---------------------------------------------- c-saturation-ratio
  // SR = Wact/Wsat. 0.012 of actual against 0.030 saturated.
  {
    id: 'c-saturation-ratio',
    vals: { Wact: 0.012, Wsat: 0.03 },
    derive: 0.012 / 0.03,
  },
  {
    id: 'c-saturation-ratio',
    vals: { Wact: 0.006, Wsat: 0.028 },
    derive: 0.006 / 0.028,
  },

  // ----------------------------------------- c-density-specific-volume
  // V_spec = V/m = 1/rho. 300 kg in 1.5 m3 is a density of 200 kg/m3, so the
  // specific volume is 0.005 m3/kg.
  {
    id: 'c-density-specific-volume',
    vals: { V: 1.5, m: 300 },
    derive: 1.5 / 300,
  },
  // The tightest corner of the box: 400 kg in 0.2 m3 is 2000 kg/m3, steel
  // dense, and the reciprocal is 0.0005 m3/kg.
  {
    id: 'c-density-specific-volume',
    vals: { V: 0.2, m: 400 },
    derive: 0.2 / 400,
  },

  // ------------------------------------------------------ c-stress
  // sigma = P/A in N per mm2, which is the MPa directly. 20 kN over a
  // 200 mm2 pin is 100 MPa.
  {
    id: 'c-stress',
    vals: { P: 20000, A: 200 },
    derive: 20000 / 200,
  },
  {
    id: 'c-stress',
    vals: { P: 125000, A: 2500 },
    derive: 125000 / 2500,
  },
];

// The stored _note for each case, in the same order as CASES. These are
// condensed derivations: enough that a reader can re-do the arithmetic by hand
// and see why the expected value is what it is, without re-deriving the formula.
const NOTES = [
  '212 degF is the boiling point of water, so the answer must be exactly 100 degC. 212 - 32 = 180, and 180 x 5/9 = 100. This is the single reference point that validates the whole printed identity, and it sits above the drill box only because the box stops at 200 degF to keep the shifted distractor clear of the 1.15 scalar.',
  '98.6 degF is human body temperature. 98.6 - 32 = 66.6, and 66.6 x 5/9 = 37.0 degC, confirming the 37 degC that the identity was built on.',

  'A surface at 900 K over 5 m2 at emissivity 0.95. 900^4 = 6.561e11, and 5.669e-8 x 6.561e11 = 37196.4 W per m2 per unit emissivity, so times 5 m2 times 0.95 the answer is 176682 W. The magnitude is the point: radiation from a hot surface is tens of kilowatts from a few square metres.',

  '450 K is exactly half of 900 K, and a fourth power makes that a sixteenth, not a half. Per m2 at emissivity 0.8: 450^4 = 4.1006e10, and 5.669e-8 x 4.1006e10 = 2324.9 W/m2, and 2324.9/37196.4 = 0.0625, which is 1/16 exactly. That is the fourth power doing its work, and it is why the kelvin scale is not optional.',

  'The textbook balance, and the reason for the SOURCE NOTE on this formula. 1000 J of heat enters and 300 J of work leaves, so 700 J is retained. The printed Q + W would give 1300 J, which is energy appearing from nothing; the drill uses the difference because the printed definition of W is work done BY the system.',

  '2400 J of heat in, 600 J of work out, 1800 J retained. Here W/Q = 0.25, and the printed sum would be 3000 J against a true 1800 J - a 1.67x error, which is the size of mistake the printed plus sign invites at ordinary ratios.',

  '25 W/m2K over 2.4 m2 across a 40 K difference. 25 x 2.4 = 60, and 60 x 40 = 2400 W, the 2.4 kW a dairy chiller is rated on. Note the difference is a difference: 65 - 25 = 40, and converting both to kelvin would give the same 40, which is why that error is not offered.',

  '12.5 W/m2K over 8 m2 across a 65 K difference. 12.5 x 8 = 100, and 100 x 65 = 6500 W. The 8 m2 is the total fin surface rather than the plan area of the evaporator, which is the whole reason fins are fitted.',

  'Cylindrical wall: 2 pi K L dT over ln(ro/ri). r_o/r_i = 100/40 = 2.5, and ln 2.5 = 0.916291. The numerator is 2 pi x 0.18 x 2 x 60 = 135.717, so 135.717/0.916291 = 148.1 W. For comparison the flat-wall form KA dT/L on the same figures gives 3.4 W, so the log is worth a factor of 43 here.',

  'A thin sleeve: r_o/r_i = 60/50 = 1.2, and ln 1.2 = 0.182322. The numerator is 2 pi x 40 x 1.5 x 130 = 49008.8, so 49008.8/0.182322 = 268805 W. A thin wall is where the log is nearly 1 and the flat-wall answer nearly suffices, which is the limit of the correction.',

  'Air enters the heater at 30 degC and leaves it at 80 degC, a 50 K rise available, and the exhaust air at 50 degC has taken 20 K of it. HUF = 20/50 = 0.4. The printed form computes (T3 - T2)/(T1 - T2) = -30/-50, and the two negatives are what make it come out positive.',

  'Full utilisation: the exhaust air leaves at the inlet temperature of 28 degC, so all 42 K of the rise was used. HUF = (45 - 70)/(28 - 70) = -25/-42 = 0.5952. 1.0 is the limit, reached when T_3 equals T_1.',

  'The PRINTED form, W = p_v/P_atm, which is a pressure ratio. 2/101.3 = 0.019744. The psychrometric mass ratio would be 0.622 x 2/(101.3 - 2) = 0.012525, so the printed form is high by a factor of 1.577, which is the gap the SOURCE NOTE records and the reason both mass-ratio forms are offered as distractors.',

  '3.5 kPa of vapour in 98.7 kPa, at the cooler end of the station pressure range. 3.5/98.7 = 0.035461. The mass ratio is 0.622 x 3.5/(98.7 - 3.5) = 0.022846, and the printed form is high by the same 1.552 factor as the first case, as it must be since the factor depends only on the pressure ratio.',

  '0.012 kg of water per kg of air against a saturation capacity of 0.030, so the air is at 40 percent of saturation. 0.012/0.03 = 0.4 exactly. A value of 1.0 is saturated air, and the 0.028 floor of the W_sat box is what keeps the ratio below that in every sample.',

  '0.006 against 0.028, the tightest corner of the box. 0.006/0.028 = 0.214286. This is the case that set the W_sat floor: the moisture-deficit distractor bottoms out at 0.028 x 0.010/0.018 = 0.0156 of the answer here, and at 0.0035 if the floor were 0.021, which is below the 1 percent plausibility limit.',

  '300 kg occupying 1.5 m3 is a density of 200 kg/m3, and the specific volume is its reciprocal. 1.5/300 = 0.005 m3/kg exactly, and 1/0.005 = 200 confirms it. Grain, and the kind of bulk that makes a specific volume worth quoting at all.',

  'The tightest corner of the box: 400 kg in 0.2 m3 is a density of 2000 kg/m3, which is steel, and the specific volume is 0.2/400 = 0.0005 m3/kg. This case is the reason the mass and volume ranges are what they are: it is the corner that decides how wide they can be.',

  '20 kN over a 200 mm2 pin. Newtons per square millimetre is the megapascal directly, so 20000/200 = 100 MPa, with no conversion in the path. 100 MPa is a sensible working figure for a pin in a farm machine linkage.',

  '125 kN over 2500 mm2, the top corner of both ranges. 125000/2500 = 50 MPa, and the area is 50 mm on a side, so the perimeter error would have given 125000/(4 x 50) = 625, which is 12.5x the answer and the reason that distractor is built from the square root.',
];

const { getAllDrillSpecs } = loadTsModule('src/data/formula-drills.ts');
const specs = new Map(getAllDrillSpecs().map(s => [s.formulaId, s]));

const data = JSON.parse(readFileSync(GOLDEN, 'utf8'));
let added = 0;
const failures = [];
const refs = [];

// idempotence: drop the keys this generator owns before writing, so a re-run
// replaces its cases rather than appending a second copy of each
for (const id of new Set(CASES.map(c => c.id))) delete data[id];

CASES.forEach((c, idx) => {
  const spec = specs.get(c.id);
  if (!spec) { failures.push(`no spec registered for ${c.id}`); return; }

  // every supplied key must be a declared variable. Values must also be inside
  // the box, except for a case explicitly marked as a reference point, whose
  // reason is recorded in the file.
  for (const [k, val] of Object.entries(c.vals)) {
    const v = spec.vars.find(x => x.ascii === k);
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
  console.error('GOLDEN GENERATION FAILED\n' + failures.map(f => '  ' + f).join('\n'));
  process.exit(1);
}

writeFileSync(GOLDEN, JSON.stringify(data, null, 2) + '\n');
const touched = [...new Set(CASES.map(c => c.id))];
console.log(`added ${added} goldens across ${touched.length} specs`);
console.log(`total keys now: ${Object.keys(data).length}`);
for (const id of touched) console.log(`  ${id}: ${data[id].length} case(s)`);
if (refs.length) {
  console.log(`\n${refs.length} deliberate reference point(s) outside the drill box:`);
  for (const r of refs) console.log('  ' + r);
}
