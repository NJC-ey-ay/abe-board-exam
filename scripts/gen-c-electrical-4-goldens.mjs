// Golden cases for Area C batch 4 (lumber board foot, belt speed and power,
// pump and fan laws, air power, fan pitch, dryer-fan specific speed). Nine
// specs, twenty cases.
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
// any of these drills.
//
// Several cases here are marked `ref` and sit outside the drill box on purpose.
// They are the reference points that make the formulas checkable: the
// definition of a board foot, the reference ceiling of an efficiency, the
// degenerate points where a box is deliberately built to be undefined. The
// range test is skipped for those and the reason is printed, because the range
// test exists to catch a mistyped random case and would otherwise throw away
// the most valuable checks in the file. The gate itself does not range-check
// goldens, so these are honoured there too.
//
// Three of those reference cases are the COLLISION POINTS of the boxes they
// belong to. c-pump-laws at equal heads, c-fan-laws at equal heads and equal
// flows, and c-specific-speed at P_s = 1 are the inputs at which two of the
// drill's own distractors become the answer. None of them is reachable inside
// its box, and that is the design constraint rather than an accident - keeping
// them out is what stops the option list rendering the same string twice.
// Recording them as goldens documents the constraint in the data file instead
// of only in a comment.
//
// The file is idempotent: every key this generator owns is removed before it
// writes, so a re-run replaces its own cases instead of appending duplicates.
import { loadTsModule } from './lib/load-ts.mjs';
import { readFileSync, writeFileSync } from 'node:fs';

const GOLDEN = 'scripts/data/golden-cases.json';
const TOLERANCE = 1e-12;
const CASES = [
  // ----------------------------------------------- c-board-foot
  // Bd.Ft = L_in W_in H_ft / 12. 144 in of 6 in wide stock 1.5 in thick is
  // 1296 cubic inches, and one board foot is 144 cubic inches, so 9 Bd.Ft.
  {
    id: 'c-board-foot',
    vals: { Lin: 144, Win: 6, Hft: 0.125 },
    derive: (144 * 6 * 0.125) / 12,
  },
  // 96 in of 4 in wide stock a full foot thick: 4608 cubic inches, 32 Bd.Ft.
  {
    id: 'c-board-foot',
    vals: { Lin: 96, Win: 4, Hft: 1 },
    derive: (96 * 4 * 1) / 12,
  },
  // The definition itself, and the check on the whole divisor. One foot of a
  // 1x12 board an inch thick is 12 in x 12 in x 1 ft = 12 x 12 x 12 = 1728
  // cubic inches, which is 12 board feet. Lin = 12 is below the drill box, which
  // starts at 24 in.
  {
    id: 'c-board-foot',
    vals: { Lin: 12, Win: 12, Hft: 1 },
    derive: (12 * 12 * 1) / 12,
    ref: 'one foot of 1x12 stock, the definition itself, below the 24 in box floor',
  },

  // --------------------------------------- c-board-foot-from-log
  // Doyle: (D-4)^2 L / 16. A 16 in small end over a 16 ft log gives
  // (16-4)^2 x 16 / 16 = 144 x 16 / 16 = 144 Bd.Ft, and the L/16 cancelling
  // is a useful check that the divisor really is 16.
  {
    id: 'c-board-foot-from-log',
    vals: { D: 16, L: 16 },
    derive: (Math.pow(16 - 4, 2) * 16) / 16,
  },
  // A 20 in small end over 12 ft: (20-4)^2 x 12 / 16 = 256 x 12 / 16 = 192.
  {
    id: 'c-board-foot-from-log',
    vals: { D: 20, L: 12 },
    derive: (Math.pow(20 - 4, 2) * 12) / 16,
  },

  // ------------------------------------------------- c-belt-speed
  // V = pi N D in m/min, since rev/min times a circumference in metres. 900 rpm
  // on a 300 mm pulley is 270 pi = 848.23 m/min, or 14.14 m/s - a normal
  // figure for an agricultural V-belt.
  {
    id: 'c-belt-speed',
    vals: { N: 900, D: 0.3 },
    derive: Math.PI * 900 * 0.3,
  },
  // 720 rpm on a 250 mm pulley is 180 pi = 565.49 m/min, or 9.42 m/s.
  {
    id: 'c-belt-speed',
    vals: { N: 720, D: 0.25 },
    derive: Math.PI * 720 * 0.25,
  },

  // ------------------------------------------------ c-belt-power
  // P_belt = P_fluid / E. A 5 hp pump delivers about 3.7 kW to the water at
  // 55 percent efficiency, so the belt must carry 3.7/0.55 = 6.727 kW. Note
  // the direction: the belt ALWAYS carries more than the water, which is the
  // whole reason the division is there.
  {
    id: 'c-belt-power',
    vals: { Pf: 3.7, E: 0.55 },
    derive: 3.7 / 0.55,
  },
  // 15 kW of water at 62 percent needs 15/0.62 = 24.19 kW on the belt.
  {
    id: 'c-belt-power',
    vals: { Pf: 15, E: 0.62 },
    derive: 15 / 0.62,
  },
  // The perfect-pump limit. E = 1 makes the belt power equal the fluid power,
  // which is the bound the drill box stops short of at 0.7.
  {
    id: 'c-belt-power',
    vals: { Pf: 3.7, E: 1 },
    derive: 3.7 / 1,
    ref: 'the perfect-pump limit, above the 0.4..0.7 box, where belt power equals fluid power',
  },

  // ------------------------------------------------ c-pump-laws
  // N_2 = N_1 (H_2/H_1)^(1/2). Head from 6 m to 60 m is a factor of 10, and
  // the square root of 10 is 3.16228, so 1200 rpm becomes 3794.7 rpm. The half
  // power is the whole point: a 10x head needs 3.16x the speed, not 10x.
  {
    id: 'c-pump-laws',
    vals: { N1: 1200, H1: 6, H2: 60 },
    derive: 1200 * Math.sqrt(60 / 6),
  },
  // 1450 rpm, head 8.5 m to 75 m. The ratio is 8.823529, its square root is
  // 2.970108, and 1450 x 2.970108 = 4306.66 rpm.
  {
    id: 'c-pump-laws',
    vals: { N1: 1450, H1: 8.5, H2: 75 },
    derive: 1450 * Math.sqrt(75 / 8.5),
  },
  // THE COLLISION POINT. Equal heads means r = 1, and then every power-law
  // distractor in the box collapses exactly onto the answer: the first-power
  // option, the third-power option and 0.85 all become N_1. The drill's two
  // head ranges (4..12 m and 50..90 m) are deliberately disjoint so this can
  // never be sampled, and this case is the record of why.
  {
    id: 'c-pump-laws',
    vals: { N1: 1200, H1: 30, H2: 30 },
    derive: 1200 * Math.sqrt(30 / 30),
    ref: 'equal heads, the collision point of all three distractor bands, excluded by the disjoint head ranges',
  },

  // ------------------------------------------------- c-fan-laws
  // D_2 = D_1 (H_1/H_2)^(1/4) (Q_2/Q_1)^(1/2). From 450 mm at 35 mm to 3.5 cfm
  // up to 60 mm and 60 cfm: the head factor is (35/60)^(1/4) = 0.873917 and the
  // flow factor is (60/3.5)^(1/2) = 4.140510, so 450 x 0.873917 x 4.140510 =
  // 1628.3 mm. Both exponents are shallow, which is why the factor is 4.8
  // rather than anything like the 17.1 a first-power head law would give.
  {
    id: 'c-fan-laws',
    vals: { D1: 450, H1: 35, H2: 60, Q1: 3.5, Q2: 60 },
    derive: 450 * Math.pow(35 / 60, 0.25) * Math.sqrt(60 / 3.5),
  },
  // 300 mm at 30 mm and 2 cfm, up to 50 mm and 40 cfm. (30/50)^(1/4) =
  // 0.880112 and (40/2)^(1/2) = 4.472136, so 300 x 0.880112 x 4.472136 =
  // 1180.8 mm.
  {
    id: 'c-fan-laws',
    vals: { D1: 300, H1: 30, H2: 50, Q1: 2, Q2: 40 },
    derive: 300 * Math.pow(30 / 50, 0.25) * Math.sqrt(40 / 2),
  },
  // THE COLLISION POINT, twice over. Equal heads AND equal flows put both
  // factors at 1, so the answer, the doubled-head-exponent option and the
  // doubled-flow-exponent option are all D_1. The box excludes it twice over:
  // the head ranges do not meet (30..40 against 48..70) and the flow ranges
  // do not either (2..5 against 25..90).
  {
    id: 'c-fan-laws',
    vals: { D1: 400, H1: 45, H2: 45, Q1: 20, Q2: 20 },
    derive: 400 * Math.pow(45 / 45, 0.25) * Math.sqrt(20 / 20),
    ref: 'equal heads and equal flows, where every option in the box collapses onto the answer',
  },

  // ------------------------------------------------ c-air-power
  // P = Q nu H with nu the SPECIFIC WEIGHT of air and H a HEAD in metres. At
  // nu = 12.00 N/m3, 12.5 m3/s against 2.5 m of head is 12.5 x 12 x 2.5 = 375
  // W exactly. The cross-check: 1 m3/s through 1 m of air head needs 12 N of
  // force, hence 12 W, which is the whole dimensional argument.
  {
    id: 'c-air-power',
    vals: { Q: 12.5, nu: 12, H: 2.5 },
    derive: 12.5 * 12 * 2.5,
  },
  // 4.2 m3/s at nu = 12.25 N/m3 against 1.75 m of head. 12.25 is the specific
  // weight of air at about 25 degC, so this is a warm afternoon reading:
  // 4.2 x 12.25 x 1.75 = 90.04 W.
  {
    id: 'c-air-power',
    vals: { Q: 4.2, nu: 12.25, H: 1.75 },
    derive: 4.2 * 12.25 * 1.75,
  },

  // ---------------------------------------- c-propeller-fan-pitch
  // P = 2 pi r tan(alpha), with the angle in DEGREES on the way in and radians
  // inside the tangent. At 30 degrees on a 0.75 m radius: 2 pi x 0.75 = 4.712389
  // and tan 30 deg = 0.577350, so the pitch is 2.720699 m - advance per
  // revolution, which at that radius is a third of the circumference and is
  // what a 30 degree blade angle should give.
  {
    id: 'c-propeller-fan-pitch',
    vals: { r: 0.75, alpha: 30 },
    derive: 2 * Math.PI * 0.75 * Math.tan((30 * Math.PI) / 180),
  },
  // 20 degrees on a 1.20 m radius: 2 pi x 1.2 = 7.539822 and tan 20 deg =
  // 0.363970, so 2.744106 m. Finer pitch, longer radius, and the pitch itself
  // is almost unchanged, which is why blade pitch is quoted independently of
  // fan size.
  {
    id: 'c-propeller-fan-pitch',
    vals: { r: 1.2, alpha: 20 },
    derive: 2 * Math.PI * 1.2 * Math.tan((20 * Math.PI) / 180),
  },

  // ------------------------------- c-specific-speed-dryer-fan
  // N_s = N Q^0.5 / P_s^0.75. 1200 rpm, 3000 cfm, 2.00 in-H2O: the square root
  // of 3000 is 54.772256 and 2^0.75 is 1.681793, so 1200 x 54.772256 /
  // 1.681793 = 39081.7. A four-figure number in these units, which is exactly
  // why the index is only meaningful when the units are stated.
  {
    id: 'c-specific-speed-dryer-fan',
    vals: { N: 1200, Q: 3000, Ps: 2 },
    derive: (1200 * Math.sqrt(3000)) / Math.pow(2, 0.75),
  },
  // 900 rpm, 1200 cfm, 1.50 in-H2O. sqrt 1200 = 34.641016 and 1.5^0.75 =
  // 1.355403, so 900 x 34.641016 / 1.355403 = 23002.6.
  {
    id: 'c-specific-speed-dryer-fan',
    vals: { N: 900, Q: 1200, Ps: 1.5 },
    derive: (900 * Math.sqrt(1200)) / Math.pow(1.5, 0.75),
  },
  // THE COLLISION POINT. At P_s = 1 the two pressure misreadings are at
  // P_s^(+1/4) and P_s^(-1/4) of the answer, and those are both 1, so the two
  // options render as the same string. The drill box floors P_s at 1.2 and caps
  // it at 3, which keeps 1 out entirely; this case is the record of the
  // constraint and it is why the floor is not 0.5.
  {
    id: 'c-specific-speed-dryer-fan',
    vals: { N: 1000, Q: 2000, Ps: 1 },
    derive: (1000 * Math.sqrt(2000)) / Math.pow(1, 0.75),
    ref: 'P_s = 1, where the two pressure-exponent options are both 1.0 and coincide, excluded by the 1.2 box floor',
  },
];

// The stored _note for each case, in the same order as CASES. These are
// condensed derivations: enough that a reader can re-do the arithmetic by hand
// and see why the expected value is what it is, without re-deriving the formula.
const NOTES = [
  '144 in of 6 in wide stock 1.5 in thick. 0.125 ft is 1.5 in, so the volume is 144 x 6 x 1.5 = 1296 cubic inches. One board foot is 1 in x 12 in x 1 ft = 144 cubic inches, and 1296/144 = 9 Bd.Ft. The formula gets there as 144 x 6 x 0.125 / 12 = 9, and the two routes agreeing is the check that the divisor of 12 is the definition rather than a fudge.',

  '96 in of 4 in wide stock a full foot thick is 96 x 4 x 12 = 4608 cubic inches, so 4608/144 = 32 Bd.Ft. The formula gives 96 x 4 x 1 / 12 = 32. A one-foot thickness is at the top of the box and is the timber case rather than the sheet-goods case.',

  'The definition of the unit, and the only case in this batch that checks the divisor head-on. One foot of a 1x12 an inch thick is 12 in x 12 in x 12 in = 1728 cubic inches, and 1728/144 = 12 board feet exactly. The formula gives 12 x 12 x 1 / 12 = 12. This sits below the box floor of 24 in on purpose: it is a definitional check, not a drill sample.',

  'Doyle on a 16 in small end over a 16 ft log. (16 - 4)^2 = 144, and 144 x 16 / 16 = 144 Bd.Ft. The length dividing out entirely is a useful confirmation that the divisor really is 16 and not 12, since the squared-inch section has to become board feet.',

  'A 20 in small end over 12 ft. (20 - 4)^2 = 256, and 256 x 12 / 16 = 192 Bd.Ft. Doyle understates small logs, which is why 192 Bd.Ft here is an estimate rather than a measurement, and why the rule is used for rough screening and not for settling tonnage.',

  'V = pi N D in m/min, because rev/min times a circumference in metres is metres per MINUTE. 900 rpm on a 300 mm pulley is 270 pi = 848.23 m/min, which is 14.14 m/s - comfortably inside the 25 to 30 m/s at which centrifugal tension starts to lift a V-belt off the pulley. Using the radius instead would halve it, and dropping the pi gives 270 m/min.',

  '720 rpm on a 250 mm pulley is 180 pi = 565.49 m/min, or 9.42 m/s. A slower drive and a smaller pulley than the case above, and the belt speed falls by a factor of 1.5 rather than by the 2.67 that the speed change alone would suggest, because the diameter moved too.',

  'The belt always carries MORE than the water, and this is the smallest number that shows why. 3.7 kW of fluid power at 55 percent pump efficiency means the shaft is absorbing 3.7/0.55 = 6.727 kW. Multiplying instead of dividing would give 2.035 kW, which is less than the water power and physically impossible.',

  '15 kW delivered to the water at 62 percent, so 15/0.62 = 24.194 kW on the belt. The 61 percent difference between the two figures is exactly the loss the formula is there to expose, and it is the margin by which a drive sized on fluid power is undersized.',

  'The perfect-pump bound, above the box ceiling of 0.7. At E = 1 the belt power equals the fluid power exactly, which is the limit the division is measuring distance from: a real pump sits somewhere below 1 and always needs a larger belt than its water power suggests. This case is worth having because the answer equals the numerator, which makes the direction of the formula obvious in one line.',

  'The head-square law, N_2 = N_1 (H_2/H_1)^(1/2). Going from 6 m to 60 m of head is a factor of 10, and the square root of 10 is 3.162278, so 1200 rpm becomes 3794.7 rpm. The half power is the entire content: a 10x head needs 3.16x the speed, NOT 10x, and using the first power would ask for 12000 rpm.',

  '1450 rpm with the head rising from 8.5 m to 75 m. The ratio is 75/8.5 = 8.823529, its square root is 2.970108, and 1450 x 2.970108 = 4306.66 rpm. Note the speed more than doubles for less than a tenfold head, which is why trimming a pump up in speed is an efficient way to chase a head that is only a little short.',

  'THE COLLISION POINT, and the reason the two head ranges in this spec are disjoint. With H_1 = H_2 the ratio is 1, and 1 raised to any power is 1, so the first-power option, the third-power option and the 0.85 scalar ALL become exactly N_1 = 1200. Any box that permitted equal heads would render the same option three times. The drill floors H_1 at 12 m and floors H_2 at 50 m, so the ratio is never below 4.167 and never 1. This case is outside the box by construction and is kept as the record.',

  'The printed fan relation regrouped, with head at the quarter power and flow at the half power. From 450 mm at 35 mm and 3.5 cfm up to 60 mm and 60 cfm: (35/60)^(1/4) = 0.873917 for the head factor and (60/3.5)^(1/2) = 4.140510 for the flow factor, and 450 x 0.873917 x 4.140510 = 1628.3 mm. A 3.1x flow rise bought only 0.6x on the head, and the quarter power is the reason the impeller has to grow at all.',

  '300 mm at 30 mm of pressure and 2 cfm, up to 50 mm and 40 cfm. (30/50)^(1/4) = 0.880112 and (40/2)^(1/2) = 4.472136, and 300 x 0.880112 x 4.472136 = 1180.8 mm. Notice the head factor is barely below 1 even though the head rose by 67 percent, which is the practical signature of the quarter power and the reason fan impellers are large.',

  'THE COLLISION POINT, twice over, and the reason this spec needed three attempts. With equal heads the head factor is 1, and with equal flows the flow factor is 1, so the answer, the doubled-head-exponent option and the doubled-flow-exponent option are all D_1 = 400. An earlier version of this box also collided at intermediate points, where the two doubling options are equal whenever (Q_2/Q_1)^2 = H_2/H_1. The ranges here are disjoint twice over - heads 30..40 against 48..70, flows 2..5 against 25..90 - so no sampled input can reach either collision.',

  'Air power, and the dimensional check in one line. 12.5 m3/s against 2.5 m of air head at a specific weight of 12.00 N/m3 gives 12.5 x 12 x 2.5 = 375 W exactly. The argument for why H is a LENGTH: 1 m3/s through 1 m of air head needs 12 N of force, so 12 W. If H were a pressure in pascals the product would be N^2/(s m^2), which is not a power, and the g is already inside the specific weight.',

  'A warm-afternoon reading: 12.25 N/m3 is the specific weight of air at roughly 25 degC, so this is denser than the 12.00 of the case above and sits inside the 11.0 to 12.5 box. 4.2 m3/s against 1.75 m of head is 4.2 x 12.25 x 1.75 = 90.04 W. Note the specific weight moves by only about 8 percent across the whole plausible temperature range, which is why it is nearly a constant in fan sizing.',

  'Pitch is advance per revolution, so it has to come out as a length. At 30 degrees on a 0.75 m radius: 2 pi x 0.75 = 4.712389 m of circumference per revolution, and tan 30 deg = 0.577350, so the advance is 4.712389 x 0.577350 = 2.720699 m. The check is geometric - a 30 degree blade angle should advance a third of the circumference, and 2.720699/4.712389 is 0.5774, which is tan 30.',

  'A finer pitch on a larger fan. 2 pi x 1.2 = 7.539822 m of circumference, and tan 20 deg = 0.363970, so 7.539822 x 0.363970 = 2.744106 m. The pitch is almost unchanged from the 30 degree case despite a 60 percent larger radius, which is the practical reason blade angle and fan diameter are specified independently.',

  'Specific speed in the printed units of rpm, cfm and inches of water. 1200 rpm at 3000 cfm and 2.00 in-H2O: sqrt(3000) = 54.772256 and 2^0.75 = 1.681793, so 1200 x 54.772256 / 1.681793 = 39081.7. A five-figure index, and the reason the answer is meaningless as a bare number - the same fan in SI would report a completely different specific speed.',

  '900 rpm at 1200 cfm and 1.50 in-H2O. sqrt(1200) = 34.641016 and 1.5^0.75 = 1.355403, so 900 x 34.641016 / 1.355403 = 23002.6. Halving the flow and dropping the pressure by a quarter has cut the index by 41 percent, which is how sharply specific speed responds to both variables at once.',

  'THE COLLISION POINT, and the reason the pressure box floors at 1.2 rather than 0.5. The two pressure misreadings sit at P_s^(+1/4) and P_s^(-1/4) of the answer, and at P_s = 1 both of those are exactly 1, so the two options render as the same string. Nothing about the ratios reveals this - it only shows up when you ask what they are EQUAL to. The drill box runs 1.2 to 3, so 1 is unreachable, and this case stands outside it as the record.',
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
