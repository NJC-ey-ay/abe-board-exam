// Generate golden cases for Area C part 2 (RLC networks, transformers, and
// electrical unit conversions).
//
// Same discipline as part 1: each expected is written out independently of the
// spec's compute arrow function and the two are asserted equal to 1e-12, and
// each _note carries the hand arithmetic.
//
// Usage: node scripts/gen-c-electrical-2-goldens.mjs
import fs from 'node:fs';
import { loadTsModule } from './lib/load-ts.mjs';

const d = loadTsModule('src/data/formula-drills.ts');
const specs = new Map(d.getAllDrillSpecs().map(s => [s.formulaId, s]));
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

// ------------------------------------------------ capacitive reactance
// X_c = 1 / (2 pi f C), C supplied in microfarad so the 1e-6 is explicit
add('c-capacitive-reactance',
  '2 pi x 60 x 25e-6: 60 x 25e-6 = 1.5e-3, and 2 pi x 1.5e-3 = 9.42477796076938e-3, so X_c = 1/9.42477796076938e-3 = 106.103295394597 ohm. The classic motor starting value: a 25 uF capacitor on 60 Hz presents about 106 ohm. Reciprocal check on the structure: doubling C to 50 uF halves the reactance to 53.05, and halving f to 30 Hz would double it to 212.2.',
  { f: 60, C: 25 },
  1 / (2 * Math.PI * 60 * 25e-6));

add('c-capacitive-reactance',
  '2 pi x 50 x 100e-6: 50 x 100e-6 = 5e-3, and 2 pi x 5e-3 = 0.0314159265358979, so X_c = 1/0.0314159265358979 = 31.8309886183791 ohm, the bottom corner. The same part as the first case at 50 Hz would present 127.3 ohm, since 60/50 = 1.2, and the capacitance here is 4x, so the reactance should be 1.2/4 = 0.3 of the 106.103 of the first case, and 31.831/106.103 = 0.300, confirming it.',
  { f: 50, C: 100 },
  1 / (2 * Math.PI * 50 * 100e-6));

// ------------------------------------------------ inductive reactance
// X_L = 2 pi f L
add('c-inductive-reactance',
  '2 pi x 60 x 0.05 = 2 pi x 3 = 6 pi = 18.8495559215388 ohm. The reciprocal of the capacitive case at the same frequency and capacitance, and note it is the same arithmetic: 2 pi f times the reactance of the component. A 50 mH coil at 60 Hz is about 18.85 ohm.',
  { f: 60, L: 0.05 },
  2 * Math.PI * 60 * 0.05);

add('c-inductive-reactance',
  '2 pi x 50 x 1.5 = 2 pi x 75 = 150 pi = 471.238898038469 ohm, the top corner. Cross-check against the first case: 50/60 times 1.5/0.05 gives 0.8333 x 30 = 25, and 18.8495559 x 25 = 471.2389, agreeing exactly. The scaling is linear in both frequency and inductance, which is the whole of the result.',
  { f: 50, L: 1.5 },
  2 * Math.PI * 50 * 1.5);

// ------------------------------------------------------- RLC series
// Z = sqrt(R^2 + (X_L - X_c)^2)
add('c-rlc-series',
  'The net reactance is 100 - 5 = 95 ohm, and 95^2 = 9025. Adding R^2 = 20^2 = 400 gives 9425, and sqrt(9425) = 97.081380453. Vector check: the resistive leg is 400/9425 = 4.2 percent of the total squared, so the impedance is within about 2 percent of the reactive leg, which is what a badly under-compensated tuned circuit looks like. The arithmetic sum would have been 115, some 18 percent high.',
  { R: 20, Xc: 5, XL: 100 },
  Math.sqrt(20 * 20 + Math.pow(100 - 5, 2)));

add('c-rlc-series',
  'The net reactance is 250 - 20 = 230 ohm, squared to 52900. R^2 = 120^2 = 14400, and the total is 67300, whose root is 259.422433. The arithmetic sum would be 350, some 35 percent high, which is the error this formula exists to prevent. Note the in-phase leg is now the larger of the two, 120 against 230 but squared 14400 against 52900, so the answer still sits close to the reactive leg rather than to the sum.',
  { R: 120, Xc: 20, XL: 250 },
  Math.sqrt(120 * 120 + Math.pow(250 - 20, 2)));

// ------------------------------------------------------ RLC parallel
// I_P = sqrt(I_R^2 + (I_L - I_C)^2)
add('c-rlc-parallel',
  'The net reactive current is 20 - 1.5 = 18.5 A, squared to 342.25. I_R^2 = 6^2 = 36, and the total is 378.25, whose root is 19.4486. Clean case: the arithmetic sum of the three branch currents would be 27.5 A, some 41 percent high. Correcting the 3 A capacitive current against the 20 A inductive one has pulled the line current down to just under the inductive branch alone would suggest once the resistive 6 A is added.',
  { IR: 6, IC: 1.5, IL: 20 },
  Math.sqrt(Math.pow(6, 2) + Math.pow(20 - 1.5, 2)));

add('c-rlc-parallel',
  'The net reactive current is 40 - 3 = 37 A, squared to 1369. I_R^2 = 20^2 = 400, and the total is 1769, whose root is 42.0595. Here the in-phase leg matters more: 400 of 1769 is 23 percent, so the line current is noticeably above the 40 A the inductor alone would draw. The arithmetic sum of 63 A would be 50 percent high, the largest proportional error in this box.',
  { IR: 20, IC: 3, IL: 40 },
  Math.sqrt(Math.pow(20, 2) + Math.pow(40 - 3, 2)));

// -------------------------------------------------------- RLC voltage
// V_T = sqrt(V_R^2 + (V_L - V_C)^2)
add('c-rlc-voltage',
  'The net reactive voltage is 200 - 10 = 190 V, squared to 36100. V_R^2 = 40^2 = 1600, and the total is 37700, whose root is 194.1649. The arithmetic sum would be 250 V, 28.5 percent high. The interesting point of this case is that the inductor alone carries 200 V, which is larger than the 194 V total the source had to supply, and that is normal rather than a contradiction.',
  { VR: 40, VC: 10, VL: 200 },
  Math.sqrt(Math.pow(40, 2) + Math.pow(200 - 10, 2)));

add('c-rlc-voltage',
  'The net reactive voltage is 400 - 40 = 360 V, squared to 129600. V_R^2 = 240^2 = 57600, and the total is 187200, whose root is 432.6647. Both legs are now substantial, and the in-phase leg is 31 percent of the total squared, so the answer sits well away from either component. The arithmetic sum of 680 V would be 57 percent high, the widest spread in this spec.',
  { VR: 240, VC: 40, VL: 400 },
  Math.sqrt(Math.pow(240, 2) + Math.pow(400 - 40, 2)));

// --------------------------------------------- transformer voltage ratio
// V_s = V_p * (N_s / N_p)
add('c-transformer-voltage-ratio',
  'The turns ratio is 200/400 = 0.5, so V_s = 220 x 0.5 = 110 V exactly. A 400-turn primary with a 200-turn secondary is a 2:1 step-down, and 220 V in gives 110 V out. The inverted ratio would have returned 440 V, a clean double, and the squared ratio 55 V, half the answer, so the two structural errors here are a factor of four apart from each other and neither is close to the result.',
  { Vp: 220, Np: 400, Ns: 200 },
  220 * (200 / 400));

add('c-transformer-voltage-ratio',
  'The turns ratio is 200/240 = 0.83333, so V_s = 480 x 0.83333 = 400 V exactly. This is the shallowest step-down in the box, 480 V down to 400 V, and it is the corner that keeps the turns ratio strictly below 1. With a 240-turn primary and 200-turn secondary the ratio is 1.2:1, and the arithmetic works out to a round 400 V because 480/1.2 = 400.',
  { Vp: 480, Np: 240, Ns: 200 },
  480 * (200 / 240));

// --------------------------------------------- transformer power relation
// I_s = V_p * I_p / V_s
add('c-transformer-power-relation',
  'The primary volt-amperes are 220 x 10 = 2200 VA, and 2200/110 = 20 A exactly. The power checks out on both sides: 110 V x 20 A = 2200 VA, the same as the primary product, which is the whole content of the relation. The secondary carries twice the primary current for half the voltage, as a 2:1 step-down must.',
  { Vp: 220, Ip: 10, Vs: 110 },
  (220 * 10) / 110);

add('c-transformer-power-relation',
  'The primary volt-amperes are 440 x 12 = 5280 VA, and 5280/70 = 75.4286 A, the top corner. This is an 6.29:1 step-down from 440 V to 70 V, so the secondary current is more than six times the primary, and 70 x 75.4286 = 5280 VA, confirming the power balance. The separation of the voltage boxes is what keeps this a genuine step-down across every sample.',
  { Vp: 440, Ip: 12, Vs: 70 },
  (440 * 12) / 70);

// ------------------------------------------- transformer current by turns
// I_s = I_p * (N_p / N_s)
add('c-transformer-current-turns',
  'The turns ratio is 600/200 = 3, so I_s = 10 x 3 = 30 A exactly. A 3:1 step-down turns 10 A at the primary into 30 A at the secondary. Power check across the ratio: the secondary voltage would be a third of the primary, so 3 x 30 against 1 x 10 leaves the product unchanged, which is the reason the current ratio runs opposite to the voltage ratio.',
  { Ip: 10, Np: 600, Ns: 200 },
  10 * (600 / 200));

add('c-transformer-current-turns',
  'The turns ratio is 300/200 = 1.5, so I_s = 5 x 1.5 = 7.5 A. The shallowest step-down in the box, and the corner that holds the ratio strictly above 1 so the secondary current always exceeds the primary. At a ratio of 1.5 the current is up one half while the voltage is down a third, so the two multiply back to the same power.',
  { Ip: 5, Np: 300, Ns: 200 },
  5 * (300 / 200));

// --------------------------------------------- electrical unit conversions
// square mil = pi D^2 / 4
add('c-electrical-unit-conversions',
  'D = 100 mils, D^2 = 10000, and pi x 10000 = 31415.9265358979, divided by 4 = 7853.98163397448 sq mil. The cross-check that ties the family together: circular mil is D^2 = 10000, and 10000/7853.98 = 1.2732, which is 4/pi and is exactly the 1.273 the printed note quotes between a circular mil and a square mil. So this drill and the circular-mil identity are two halves of the same relation.',
  { D: 100 },
  (Math.PI * 100 * 100) / 4);

add('c-electrical-unit-conversions',
  'D = 40 mils, D^2 = 1600, pi x 1600 = 5026.54824574367, divided by 4 = 1256.63706143592 sq mil. Cross-check the two cases: the diameter ratio is 100/40 = 2.5, and the area ratio should be the square of that, 6.25, and 7853.98163397448/1256.63706143592 = 6.25 exactly. Area scales with the square of diameter, as it must, and this is why a wire table quotes circular mils as D squared.',
  { D: 40 },
  (Math.PI * 40 * 40) / 4);

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
for (const k of Object.keys(cases)) {
  if (all[k]) { console.error('refusing to overwrite existing ' + k); process.exit(1); }
}
for (const [k, v] of Object.entries(cases)) all[k] = v;
fs.writeFileSync(path, JSON.stringify(all, null, 2) + '\n');
console.log(`added ${n} goldens across ${added} specs`);
console.log('total keys now: ' + Object.keys(all).length);
