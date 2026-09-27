// Generate golden cases for Area C part 1 (electrical 1: series/parallel and
// basic electrical quantities).
//
// Each `expected` is derived here by an expression written out independently of
// the spec's own compute arrow function, and the two are then asserted equal to
// 1e-12. The _note carries the hand arithmetic - exact fractions where the
// numbers allow it - so a reader can check the value without running anything.
//
// Usage: node scripts/gen-c-electrical-1-goldens.mjs
import fs from 'node:fs';
import { loadTsModule } from './lib/load-ts.mjs';

const d = loadTsModule('src/data/formula-drills.ts');
const specs = new Map(d.getAllDrillSpecs().map(s => [s.formulaId, s]));

// A helper that mirrors the spec's own arithmetic exactly.
const specCompute = (id, vals) => specs.get(id).compute(vals);

const cases = {};
const problems = [];

function add(id, note, vals, expected, tolerance = 1e-12) {
  const s = specs.get(id);
  if (!s) { problems.push(`no spec for ${id}`); return; }
  const missing = s.vars.filter(v => vals[v.ascii] === undefined);
  if (missing.length) { problems.push(`${id}: missing vals ${missing.map(v => v.ascii)}`); return; }
  const got = specCompute(id, vals);
  if (Math.abs(got - expected) > tolerance) {
    problems.push(`${id}: spec compute ${got} != independent ${expected}`);
    return;
  }
  (cases[id] ||= []).push({ _note: note, vals, expected, tolerance });
}

// ---------------------------------------------------------------- series
// C_S = 1 / (1/C1 + 1/C2 + 1/C3)
add('c-series-circuit',
  '1/10 = 0.1, 1/25 = 0.04, 1/50 = 0.02. The sum of the reciprocals is exactly 0.16 per microfarad inverse, so C_S = 1/0.16 = 6.25 uF. Note the result is smaller than the smallest member, 10 uF, which is the check that distinguishes the inverse sum from the direct sum that would have returned 85 uF. Ordering does not matter here: permuting 10, 25 and 50 leaves the same 0.16.',
  { C1: 10, C2: 25, C3: 50 },
  1 / (1 / 10 + 1 / 25 + 1 / 50));

add('c-series-circuit',
  '1/4 = 0.25, 1/8 = 0.125, 1/8 = 0.125. Sum = 0.5, so C_S = 1/0.5 = 2 uF exactly. A case where two members are equal, so it is a cross-check on the arithmetic: two equal 8 uF in series give 4 uF on their own, and putting 4 uF in series with that gives 1/(1/4+1/4) = 2 uF, agreeing.',
  { C1: 4, C2: 8, C3: 8 },
  1 / (1 / 4 + 1 / 8 + 1 / 8));

// ---------------------------------------------------------------- parallel
// R_P = 1 / (1/R1 + 1/R2 + 1/R3)
add('c-parallel-circuit',
  'Bring to a common denominator of 48: 1/12 = 4/48, 1/24 = 2/48, 1/48 = 1/48, so the sum is 7/48 per ohm inverse and R_P = 48/7 = 6.857142857142857 ohm. Geometric check: the doubling ladder 12, 24, 48 should halve at each stage of adding one more doubling branch, and 12/2 = 6, 6/2 = 3, 3/2 = 1.5 would be the case for 6, 12, 24; the 48 case lands at 6.857, just above the 6 of the 12, 24 pair as it should be, since adding a third equal-halving branch always pushes the result up.',
  { R1: 12, R2: 24, R3: 48 },
  1 / (1 / 12 + 1 / 24 + 1 / 48));

add('c-parallel-circuit',
  '1/5 = 0.2, 1/20 = 0.05, 1/80 = 0.0125. Sum = 0.2625, so R_P = 1/0.2625 = 3.809523809523809 ohm. Exact fraction: 0.2625 = 21/80, so R_P = 80/21. The result sits below the smallest branch, 5 ohm, as an inverse sum must. Physical read: with 5 ohm drawing 0.2 A on its own and the other two adding 0.0625 A between them, the 1.7 A total across roughly 1.7 ohm of source resistance is consistent with 3.81 ohm.',
  { R1: 5, R2: 20, R3: 80 },
  1 / (1 / 5 + 1 / 20 + 1 / 80));

// ---------------------------------------------------------- voltage divider
add('c-voltage-divider',
  'Ratio 30/100 = 0.3, so V_n = 0.3 x 120 = 36 V. The section asked about carries 30 of the 100 ohm, so it takes 30 percent of the volt and the remaining 70 ohm takes the other 84 V, which sums back to the 120 V supply. Holding the ratio and scaling the supply is the check that the divider is linear in voltage.',
  { Rn: 30, Rtotal: 100, Vtotal: 120 },
  120 * (30 / 100));

add('c-voltage-divider',
  'Ratio 15/60 = 0.25, so V_n = 0.25 x 240 = 60 V. This is the lower corner of the ratio box at 0.25, and it is a quarter of the supply, so the other 45 ohm carries 180 V. The inverted ratio would have returned 240 x 60/15 = 960 V, which is four times the supply and the clearest signal that the ratio has been turned the wrong way round.',
  { Rn: 15, Rtotal: 60, Vtotal: 240 },
  240 * (15 / 60));

// ---------------------------------------------------------- current divider
add('c-current-divider',
  'R_total/R_n = 30/100 = 0.3, so I_n = 0.3 x 12 = 3.6 A. The consistency check is that the branch current is well under the 12 A line current, which it must be, and that the remaining 8.4 A is what the other branch carries. Is 30 ohm a real parallel equivalent for a 100 ohm branch? The other branch would be R = 30 x 100/(100 - 30) = 42.857 ohm, a perfectly ordinary value, so the input set is physically consistent.',
  { Rtotal: 30, Rn: 100, Itotal: 12 },
  12 * (30 / 100));

add('c-current-divider',
  'R_total/R_n = 15/150 = 0.1, so I_n = 0.1 x 20 = 2.0 A, the bottom corner of the ratio box. The other branch then carries 18 A. Consistency: for a 15 ohm parallel equivalent with one branch at 150 ohm the other is 15 x 150/135 = 16.667 ohm, so this is a case where the two branches are within a factor of nine and the currents split 2 to 18, which matches current sharing inversely with resistance.',
  { Rtotal: 15, Rn: 150, Itotal: 20 },
  20 * (15 / 150));

// ---------------------------------------------------------------- delta-wye
add('c-delta-wye',
  'R_b x R_c = 20 x 30 = 600, and the sum R_a + R_b + R_c = 10 + 20 + 30 = 60, so R_1 = 600/60 = 10 ohm exactly. The pattern is that the numerator is the product of the two resistors meeting at the node away from R_a, and the denominator is the sum of all three. A familiar case: the 10, 20, 30 delta is close to the 10 ohm per arm wye it converts to, and when all three are equal the conversion gives R/3 on each arm.',
  { Ra: 10, Rb: 20, Rc: 30 },
  (20 * 30) / (10 + 20 + 30));

add('c-delta-wye',
  'R_b x R_c = 100 x 5 = 500, and the sum = 5 + 100 + 5 = 110, so R_1 = 500/110 = 50/11 = 4.545454545454546 ohm. This is the case that shows the conversion is not symmetric in the three arms: R_1 is small because R_a and R_b are large, while an arm built on the two small resistors would be much larger. Every wye arm is less than the smallest delta resistance, which is the check that the conversion has been done the right way round.',
  { Ra: 5, Rb: 100, Rc: 5 },
  (100 * 5) / (5 + 100 + 5));

// ------------------------------------------------------------- conductance
add('c-conductance',
  'C = 1/R = 1/0.5 = 2 S exactly. The reciprocal is the whole content of the formula. Dimensional check: an ohm inverted is a siemens, and the two quantities multiply back to unity, so 0.5 ohm x 2 S = 1. Halving the resistance from 1 ohm to 0.5 ohm doubles the conductance from 1 S to 2 S, which is the direction the reciprocal relationship always runs.',
  { R: 0.5 },
  1 / 0.5);

add('c-conductance',
  'C = 1/2.5 = 0.4 S exactly. Reciprocal check: 2.5 x 0.4 = 1. This is the resistance returned unchanged as a distractor, so the two options differ by a factor of 6.25 there and only by the factor 2.5/0.4 = 6.25 here, which is exactly the ratio of R to C and the reason the distractor lands in band over this resistance range.',
  { R: 2.5 },
  1 / 2.5);

// ------------------------------------------------------------------ current
add('c-current',
  'I = V/Z = 220/55 = 4 A exactly. Both numbers are 220 V, the standard single-phase supply in the Philippines, and a 55 ohm impedance, and the division comes out clean at 4 A. If the winding had been treated as a plain DC resistance of 55 ohm the same current would follow, which is only because this case is purely resistive; the impedance matters whenever there is reactance present.',
  { V: 220, Z: 55 },
  220 / 55);

add('c-current',
  'I = V/Z = 120/40 = 3 A exactly. The inverted form Z/V would have returned 40/120 = 0.333, which is 1/I, so the distractor sits 9x below the answer and lands inside the 100x band. Note that the answer is a per-phase style value for a single-phase winding and that the impedance here is the magnitude, not the resistance component alone.',
  { V: 120, Z: 40 },
  120 / 40);

// ------------------------------------------------- resistance in wire
add('c-resistance-in-wire',
  'R = rho x L / A = 0.0172 x 100 / 25. The numerator is 1.72, and 1.72/25 = 0.0688 ohm. Copper resistivity of 0.0172 ohm-mm2/m is the standard 17.2 nanohm-metre value, and at 100 m of 25 mm2 the result is a fraction of an ohm, which is why a feeder this size needs no more than a tenth of a volt drop over its run at moderate current.',
  { rho: 0.0172, L: 100, A: 25 },
  0.0172 * 100 / 25);

add('c-resistance-in-wire',
  'R = 0.0282 x 400 / 10. Numerator = 11.28, and 11.28/10 = 1.128 ohm, the top corner of the box. Aluminium at 0.0282 is 1.64 times the resistivity of copper, and this case also uses the largest length against the smallest area, so the two exaggerating factors compound to 10.0 x 1.64 = 16.4 times the first case, and 0.0688 x 16.4 = 1.128 as expected.',
  { rho: 0.0282, L: 400, A: 10 },
  0.0282 * 400 / 10);

// ------------------------------------------- composite wire resistance
add('c-composite-wire-resistance',
  'ln(20/3) = ln(6.6666667) = 1.897119984886. The prefactor is 0.0172/(2 pi x 50) = 0.0172/314.1592654 = 5.4744004e-5. R = 5.4744004e-5 x 1.897119984886 = 1.0385748e-4 ohm. The sign is the point: the inner radius 3 mm and the outer 20 mm are entered so that r2/r1 is greater than 1 and the logarithm is positive, since the handbook prints the labels the other way round. A result of about 0.104 milliohm is the right order for a short electrode in good soil.',
  { rho: 0.0172, L: 50, r1: 3, r2: 20 },
  (0.0172 / (2 * Math.PI * 50)) * Math.log(20 / 3), 1e-15);

add('c-composite-wire-resistance',
  'ln(40/2) = ln(20) = 2.995732273554. The prefactor is 0.029/(2 pi x 200) = 0.029/1256.6370614 = 2.30740e-5. R = 2.30740e-5 x 2.995732273554 = 6.91198e-5 ohm. Cross-check on the two mechanisms that drive the result: the prefactor here is 0.4213 of the first case (length up 4x, resistivity up 1.686x), and the logarithm is 1.579x larger (radius ratio 20 against 6.667), so the answer should be 0.4213 x 1.579 = 0.6653 of the first, and 6.91198e-5 / 1.0385748e-4 = 0.6656, agreeing to four figures.',
  { rho: 0.029, L: 200, r1: 2, r2: 40 },
  (0.029 / (2 * Math.PI * 200)) * Math.log(40 / 2), 1e-15);

// ---------------------------------------------------------------- frequency
add('c-frequency',
  'f = P x N / 120 = 4 x 1800 / 120 = 7200/120 = 60 Hz exactly. This is the canonical case: a four-pole machine on the 60 Hz supply standard in the Philippines has a synchronous speed of 1800 rpm, and the nameplate running speed of about 1750 rpm sits just under it, the difference being slip.',
  { P: 4, N: 1800 },
  4 * 1800 / 120);

add('c-frequency',
  'f = 6 x 900 / 120 = 5400/120 = 45 Hz exactly. A six-pole machine turning at 900 rpm. Cross-check: the synchronous speed of a six-pole machine on 60 Hz would be 120 x 60/6 = 1200 rpm, so 900 rpm is 75 percent of that and this case corresponds to 45 Hz rather than 60, which is the consistency the formula exists to establish.',
  { P: 6, N: 900 },
  6 * 900 / 120);

// ------------------------------------------------------------- percent slip
add('c-percent-slip',
  'The shortfall is 1800 - 1740 = 60 rpm, and 60/1800 = 0.0333333, so slip = 3.333333 percent. This is the ordinary running figure for a healthy induction motor, where 3 to 5 percent is normal at full load. The rotor never reaches the field speed, and this is the whole mechanism: at exactly 1800 rpm there would be no relative motion, no induced current and no torque at all.',
  { ns: 1800, nr: 1740 },
  ((1800 - 1740) / 1800) * 100);

add('c-percent-slip',
  'The shortfall is 1780 - 1700 = 80 rpm, and 80/1780 = 0.0449438, so slip = 4.49438202247191 percent. Note the field speed here is 1780 rather than a textbook 1800, which is a machine running a little under its nominal frequency, and slip is measured against the actual field speed rather than the nominal one.',
  { ns: 1780, nr: 1700 },
  ((1780 - 1700) / 1780) * 100);

// ------------------------------------------------------- percent regulation
add('c-percent-regulation',
  'The drop is 240 - 200 = 40 V, and 40/200 = 0.2, so regulation = 20 percent exactly, the top corner of the box. This is a high figure and it is what a source with appreciable internal impedance produces under heavy load, and it is why a long rural feeder is sized on voltage drop rather than on loss.',
  { Vnl: 240, Vfl: 200 },
  ((240 - 200) / 200) * 100);

add('c-percent-regulation',
  'The drop is 225 - 215 = 10 V, and 10/215 = 0.0465116, so regulation = 4.651162790697674 percent, the bottom corner. A tight source: under 5 percent droop from no load to full load. The denominator being the full-load voltage rather than the no-load voltage is what keeps this at 4.65 rather than the 4.44 that the no-load denominator would have given.',
  { Vnl: 225, Vfl: 215 },
  ((225 - 215) / 215) * 100);

// -------------------------------------------------------------- horsepower
add('c-horsepower',
  'Numerator 2 pi x 50 x 1200 = 2 x 3.14159265359 x 50 x 1200 = 376991.118430775. Dividing by 44760 = 60 x 746 gives 8.42236774736 hp. The divisor is the whole content of this case: the same numerator divided by 33,000 instead, the constant that belongs to torque in kilogram-force metres, would give 11.4234, about 36 percent high, and the printed form with no divisor at all would give 376991.',
  { T: 50, N: 1200 },
  (2 * Math.PI * 50 * 1200) / 44760, 1e-10);

add('c-horsepower',
  'Numerator 2 pi x 200 x 1800 = 2261946.71029265, and 2261946.71029265 / 44760 = 50.534639 hp. Cross-check against the first case: torque is 4x and speed is 1.5x, so the power should be 6x, and 8.4223677 x 6 = 50.5342, agreeing to four figures. The relationship is exactly linear in both torque and speed, which is the check that the divisor is right.',
  { T: 200, N: 1800 },
  (2 * Math.PI * 200 * 1800) / 44760, 1e-10);

// ------------------------------------------ motor horsepower from engine
add('c-motor-hp-from-engine',
  'hp = 45 x 2/3 = 30 hp exactly. The two-thirds is a derating, and 30 out of 45 is the size of motor a workshop would actually put on a 45 hp engine block so that the engine can ride through the starting transient. The arithmetic is trivial; the reasoning behind the factor is the part worth remembering.',
  { hpeng: 45 },
  45 * (2 / 3));

add('c-motor-hp-from-engine',
  'hp = 10 x 2/3 = 6.666666666666667 hp. Small engine, small motor. The exact value is 20/3, and it is a case where the nameplate would in practice be rounded to a standard 7.5 hp frame, which is the reason these figures are treated as sizing guides rather than as catalogue entries.',
  { hpeng: 10 },
  10 * (2 / 3));

// ------------------------------------------------------ locked rotor current
add('c-locked-rotor-current',
  'LRC = VA/V = 10000/220 = 45.45454545454545 A. The horsepower cancels in the printed product, so the motor rating does not enter at all. For a 220 V machine 10 kVA of apparent power implies a locked rotor draw near 45 A, which is several times a running current of 12 to 15 A, and it is that figure the protective device has to be set for.',
  { VA: 10000, V: 220 },
  10000 / 220);

add('c-locked-rotor-current',
  'LRC = 6000/440 = 13.636363636363637 A. The 440 V case draws exactly half the current of the 220 V case for twice the kVA per amp, which is the point of the doubled voltage on a three-phase distribution feeder. Compare with dividing by the square root of three times the voltage, the line-to-neutral slip, which would have given 7.87 A.',
  { VA: 6000, V: 440 },
  6000 / 440);

// ---------------------------------------------------------------- write out
if (problems.length) {
  console.error('PROBLEMS:');
  for (const p of problems) console.error('  - ' + p);
  process.exit(1);
}

const path = 'scripts/data/golden-cases.json';
const all = JSON.parse(fs.readFileSync(path, 'utf8'));
const added = Object.keys(cases).length;
const n = Object.values(cases).reduce((a, v) => a + v.length, 0);
for (const [k, v] of Object.entries(cases)) {
  if (all[k]) { console.error('refusing to overwrite existing ' + k); process.exit(1); }
  all[k] = v;
}
fs.writeFileSync(path, JSON.stringify(all, null, 2) + '\n');
console.log(`added ${n} goldens across ${added} specs`);
console.log('total keys now: ' + Object.keys(all).length);
