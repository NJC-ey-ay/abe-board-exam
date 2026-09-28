// Golden cases for Area C batch 9, the last three of the 240: lamp spacing,
// disk-meter energy, and wire-size selection. These close the coverage gate.
//
// Same rule as every batch generator: every expected value is derived here by
// hand from the printed formula, in full, never from the spec's own compute.
//
// Two identity notes specific to this batch:
//   - The two disk-meter cases D=1200/T=30 and D=600/T=15 both land on 6.00
//     kWh: half the revolutions in half the counting window is the same energy,
//     which is the meter's whole behaviour (a disk integrates power over time).
//   - The lamp-spacing cases are deliberately plain: the driven lane casts the
//     factor 1.0, so the answer IS the mounting height, and the goldens assert
//     the lane, not the multiplication.
import { loadTsModule } from './lib/load-ts.mjs';
import { readFileSync, writeFileSync } from 'node:fs';

const GOLDEN = 'scripts/data/golden-cases.json';
const TOLERANCE = 1e-12;

const CASES = [
  // ------------------------------------------------ c-maximum-lamp-spacing
  {
    id: 'c-maximum-lamp-spacing', vals: { Mh: 12.0 },
    derive: 12.0,
    note: 'M_s = 1.0 x 12.0 = 12.0 ft: the 2x40W direct-RLM rows at a twelve-foot working height, the factored lane itself.',
  },
  {
    id: 'c-maximum-lamp-spacing', vals: { Mh: 10.0 },
    derive: 10.0,
    note: 'M_s = 10.0 ft: the round mounting height, spacing equals height.',
  },
  {
    id: 'c-maximum-lamp-spacing', vals: { Mh: 8.0 },
    derive: 8.0,
    note: 'The bottom corner: a low ceiling still spaces the rows 8 ft apart.',
  },
  {
    id: 'c-maximum-lamp-spacing', vals: { Mh: 20.0 },
    derive: 20.0,
    note: 'The top corner: a high industrial bay calls for 20 ft between rows.',
  },
  {
    id: 'c-maximum-lamp-spacing', vals: { Mh: 15.5 },
    derive: 15.5,
    note: 'M_s = 15.5 ft, mid-box.',
  },

  // ------------------------------------------- c-energy-consumption-disk-meter
  {
    id: 'c-energy-consumption-disk-meter', vals: { Drev: 1200, Tc: 30 },
    derive: (60 * 2.5 * 1200) / (1000 * 30),
    note: '(60 x 2.5 x 1200)/(1000 x 30) = 6.00 kWh: a hot disk turning forty times a minute for half an hour.',
  },
  {
    id: 'c-energy-consumption-disk-meter', vals: { Drev: 600, Tc: 15 },
    derive: (60 * 2.5 * 600) / (1000 * 15),
    note: '(60 x 2.5 x 600)/(1000 x 15) = 6.00 kWh: half the revolutions in half the window is the SAME energy - the identity that shows the meter integrates power over time.',
  },
  {
    id: 'c-energy-consumption-disk-meter', vals: { Drev: 100, Tc: 60 },
    derive: (60 * 2.5 * 100) / (1000 * 60),
    note: 'The bottom corner: a lazy disk counted over a full hour is 0.25 kWh.',
  },
  {
    id: 'c-energy-consumption-disk-meter', vals: { Drev: 1200, Tc: 5 },
    derive: (60 * 2.5 * 1200) / (1000 * 5),
    note: 'The top corner: the same 1200 revolutions crammed into five minutes is 36 kWh - the difference a high load makes to the reading.',
  },
  {
    id: 'c-energy-consumption-disk-meter', vals: { Drev: 300, Tc: 30 },
    derive: (60 * 2.5 * 300) / (1000 * 30),
    note: '(60 x 2.5 x 300)/(1000 x 30) = 1.5 kWh, mid-box.',
  },

  // ---------------------------------------------- c-wire-size-selection
  {
    id: 'c-wire-size-selection', vals: { Nw: 2, L: 100, I: 10, V: 220 },
    derive: (10.8 * 2 * 100 * 10) / (0.02 * 220),
    note: '(10.8 x 2 x 100 x 10)/(0.02 x 220) = 21600/4.4 = 4909.09... CM: a two-wire copper feeder a hundred feet out to a ten-amp 220 V load.',
  },
  {
    id: 'c-wire-size-selection', vals: { Nw: 3, L: 150, I: 15, V: 220 },
    derive: (10.8 * 3 * 150 * 15) / (0.02 * 220),
    note: '(10.8 x 3 x 150 x 15)/(0.02 x 220) = 72900/4.4 = 16568.18... CM: a three-wire run.',
  },
  {
    id: 'c-wire-size-selection', vals: { Nw: 2, L: 50, I: 5, V: 440 },
    derive: (10.8 * 2 * 50 * 5) / (0.02 * 440),
    note: 'The bottom corner: a short two-wire run at 440 V needs only 613.63... CM, a light gauge, because the drop budget is spread over the highest voltage of the box.',
  },
  {
    id: 'c-wire-size-selection', vals: { Nw: 4, L: 300, I: 30, V: 110 },
    derive: (10.8 * 4 * 300 * 30) / (0.02 * 110),
    note: 'The top corner: a four-wire run three hundred feet out at 110 V is 176727.27... CM, a heavy feeder - the price of a long run at the lowest voltage.',
  },
  {
    id: 'c-wire-size-selection', vals: { Nw: 2, L: 200, I: 20, V: 440 },
    derive: (10.8 * 2 * 200 * 20) / (0.02 * 440),
    note: '(10.8 x 2 x 200 x 20)/(0.02 x 440) = 86400/8.8 = 9818.18... CM, mid-box.',
  },
];

const { getAllDrillSpecs } = loadTsModule('src/data/formula-drills.ts');
const specs = new Map(getAllDrillSpecs().map((s) => [s.formulaId, s]));

const data = JSON.parse(readFileSync(GOLDEN, 'utf8'));
let added = 0;
const failures = [];
const refs = [];

for (const id of new Set(CASES.map((c) => c.id))) delete data[id];

CASES.forEach((c) => {
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
  (data[c.id] ||= []).push({ _note: c.note, vals: c.vals, expected: got, tolerance: TOLERANCE });
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