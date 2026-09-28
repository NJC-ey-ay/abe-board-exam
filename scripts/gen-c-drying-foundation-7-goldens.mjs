// Golden cases for Area C batch 7 (grain drying chain + engine foundation
// chain). Ten specs.
//
// Same rule as every batch generator: every expected value is derived here by
// hand from the printed formula, in full, never from the spec's own compute.
//
// The new constraint this batch adds to the rule is the CASCADE. These ten
// formulas are two chains, and the goldens follow one story through each of
// them so the boxes cannot drift apart:
//
//   THE DRYING STORY (Wi = 10000 kg of paddy, the same batch in every box):
//     c-drying-capacity       Wi 10000, Td 24  ->  416.67 kg/h
//     c-volume-grain-to-dry   Wi 10000, Rho 556 ->  17.9856 m3
//     c-drying-floor-area     Vg 18.0, Dg 0.30  ->  60 m2   (the tonnage spread)
//     c-airflow-requirement   Wi 10000, Saf 25  ->  250 m3/min
//     c-apparent-air-velocity AFR 160, Af 60    ->  2.67 m/min
//   The airflow and velocity boxes take their "given" airflow (160 m3/min) as
//   the value the airflow box produced for an 8000 kg lot, and the velocity box
//   spends it across the 60 m2 bed the floor box spread - one dryer, five
//   numbers.
//
//   THE FOUNDATION STORY (one engine, one pit, carried unrounded):
//     c-weight-of-foundation  We 2000, N 1600   ->  8800 kg    (sqrt(1600)=40)
//     c-volume-of-foundation  Wf 8800, Rho 2400 ->  3.666... m3
//     c-depth-of-foundation   V 3.666..., W 1.5, L 2.5 -> 0.9777... m
//     c-soil-pressure         We 2000, Wf 8800, Af 3.75 -> 2880 kg/m2
//       (Af = W*L = 1.5 x 2.5 = 3.75, the SAME footprint the depth box used)
//     c-factor-of-safety      Bc 12225, Ps 2880 -> 4.2448...
//   Weight -> volume -> depth -> pressure -> safety, one foundation, and the
//   golden file asserts the whole round trip. This is the strongest identity
//   check the batch can carry: each of the five specs is driven independently,
//   but the values must agree as a story or a transcription slip in any one of
//   them fails against the box beside it.
//
// Reference points (deliberately outside the drill box, marked `ref`):
//   c-depth-of-foundation V 3.6667: carried unrounded from the volume box,
//     where the display would round it to 3.67 (the var declares 2 dp).
//   c-factor-of-safety at Ps = Bc: the ratio divides exactly to 1, the point
//     where the foundation is at its limit AND where the inverted distractor
//     becomes identical to the answer. The drill keeps Ps well below Bc so no
//     sample can sit there.
//   c-factor-of-safety at Ps = 2*Bc: ratio 0.5, visibly pre-failed, the
//     inverted option's honest rendering.
import { loadTsModule } from './lib/load-ts.mjs';
import { readFileSync, writeFileSync } from 'node:fs';

const GOLDEN = 'scripts/data/golden-cases.json';
const TOLERANCE = 1e-12;

const CASES = [
  // ---------------------------------------------- c-drying-capacity
  {
    id: 'c-drying-capacity', vals: { Wi: 10000, Td: 24 },
    derive: 10000 / 24,
    note: '10000 kg / 24 h = 416.666... kg/h: the ten-tonne batch of the chain over a full working day.',
  },
  {
    id: 'c-drying-capacity', vals: { Wi: 5000, Td: 20 },
    derive: 5000 / 20,
    note: '5000 kg / 20 h = 250 kg/h, mid-box.',
  },
  {
    id: 'c-drying-capacity', vals: { Wi: 4000, Td: 48 },
    derive: 4000 / 48,
    note: 'The bottom corner: the smallest batch over the longest drying time gives 83.333... kg/h.',
  },
  {
    id: 'c-drying-capacity', vals: { Wi: 12000, Td: 6 },
    derive: 12000 / 6,
    note: 'The top corner: the full 12 tonnes finished in one shift is 2000 kg/h.',
  },

  // ------------------------------------------- c-volume-grain-to-dry
  {
    id: 'c-volume-grain-to-dry', vals: { Wi: 10000, Rho: 556 },
    derive: 10000 / 556,
    note: '10000 kg / 556 kg/m3 = 17.9856... m3: the SAME ten-tonne batch as the drying-capacity first case, at a typical paddy bulk density.',
  },
  {
    id: 'c-volume-grain-to-dry', vals: { Wi: 5000, Rho: 545 },
    derive: 5000 / 545,
    note: '5000 / 545 = 9.1743... m3: damp loose paddy bulks large.',
  },
  {
    id: 'c-volume-grain-to-dry', vals: { Wi: 4000, Rho: 580 },
    derive: 4000 / 580,
    note: 'The bottom corner: the smallest batch at the densest fill is 6.8965... m3.',
  },
  {
    id: 'c-volume-grain-to-dry', vals: { Wi: 12000, Rho: 540 },
    derive: 12000 / 540,
    note: 'The top corner: 12 tonnes at the lightest density is 22.222... m3.',
  },

  // ---------------------------------------------- c-drying-floor-area
  {
    id: 'c-drying-floor-area', vals: { Vg: 18.0, Dg: 0.3 },
    derive: 18 / 0.3,
    note: '18.0 m3 (the ten-tonne lot of the chain) spread 30 cm deep is 60.0 m2 of floor.',
  },
  {
    id: 'c-drying-floor-area', vals: { Vg: 12.5, Dg: 0.25 },
    derive: 12.5 / 0.25,
    note: '12.5 m3 at a quarter metre: 50 m2, the classic flat bed.',
  },
  {
    id: 'c-drying-floor-area', vals: { Vg: 8.0, Dg: 0.4 },
    derive: 8 / 0.4,
    note: 'The bottom corner: the smallest volume at the deepest bed needs only 20 m2.',
  },
  {
    id: 'c-drying-floor-area', vals: { Vg: 24.0, Dg: 0.15 },
    derive: 24 / 0.15,
    note: 'The top corner: the largest volume at a shallow 15 cm needs 160 m2.',
  },
  {
    id: 'c-drying-floor-area', vals: { Vg: 15.0, Dg: 0.45 },
    derive: 15 / 0.45,
    note: '15.0 m3 at 45 cm deep is 33.333... m2 - the same floor answer as the 18.0/0.30 case, because a deeper bed holds the same on a smaller plan.',
  },

  // ---------------------------------------------- c-airflow-requirement
  {
    id: 'c-airflow-requirement', vals: { Wi: 8000, Saf: 20 },
    derive: (8000 / 1000) * 20,
    note: '(8000/1000) tonnes x 20 m3/(min-ton) = 160 m3/min: the 8-tonne lot the velocity box below spends across the bed.',
  },
  {
    id: 'c-airflow-requirement', vals: { Wi: 6000, Saf: 15 },
    derive: (6000 / 1000) * 15,
    note: '6 tonnes x 15 = 90 m3/min, mid-box.',
  },
  {
    id: 'c-airflow-requirement', vals: { Wi: 4000, Saf: 10 },
    derive: (4000 / 1000) * 10,
    note: 'The bottom corner: the smallest batch at the gentlest airflow needs 40 m3/min.',
  },
  {
    id: 'c-airflow-requirement', vals: { Wi: 12000, Saf: 30 },
    derive: (12000 / 1000) * 30,
    note: 'The top corner: 12 tonnes at the strongest airflow needs 360 m3/min.',
  },
  {
    id: 'c-airflow-requirement', vals: { Wi: 10000, Saf: 25 },
    derive: (10000 / 1000) * 25,
    note: '10 tonnes x 25 = 250 m3/min: the ten-tonne chain batch, pushed hard.',
  },

  // ------------------------------------------- c-apparent-air-velocity
  {
    id: 'c-apparent-air-velocity', vals: { AFR: 160, Af: 60 },
    derive: 160 / 60,
    note: '160 m3/min (the airflow box above) over the 60 m2 floor of the drying chain: 2.666... m/min.',
  },
  {
    id: 'c-apparent-air-velocity', vals: { AFR: 120, Af: 30 },
    derive: 120 / 30,
    note: '120 m3/min through a tight 30 m2 bed: 4.0 m/min.',
  },
  {
    id: 'c-apparent-air-velocity', vals: { AFR: 60, Af: 160 },
    derive: 60 / 160,
    note: 'The bottom corner: a weak fan spilled across the biggest bed is 0.375 m/min.',
  },
  {
    id: 'c-apparent-air-velocity', vals: { AFR: 360, Af: 30 },
    derive: 360 / 30,
    note: 'The top corner: the full airflow of the chain squeezed into 30 m2 is 12.0 m/min.',
  },
  {
    id: 'c-apparent-air-velocity', vals: { AFR: 200, Af: 100 },
    derive: 200 / 100,
    note: '200 m3/min over 100 m2: exactly 2.0 m/min, the clean-mid anchor.',
  },

  // --------------------------------------------- c-weight-of-foundation
  {
    id: 'c-weight-of-foundation', vals: { We: 2000, N: 1600 },
    derive: 0.11 * 2000 * Math.sqrt(1600),
    note: '0.11 x 2000 x 40 = 8800 kg: the chain anchor, sqrt(1600) = 40 exactly.',
  },
  {
    id: 'c-weight-of-foundation', vals: { We: 1000, N: 1000 },
    derive: 0.11 * 1000 * Math.sqrt(1000),
    note: '0.11 x 1000 x 31.6227... = 3478.51 kg, mid-box.',
  },
  {
    id: 'c-weight-of-foundation', vals: { We: 500, N: 900 },
    derive: 0.11 * 500 * Math.sqrt(900),
    note: 'The bottom corner: 0.11 x 500 x 30 = 1650 kg, sqrt(900) = 30 exactly.',
  },
  {
    id: 'c-weight-of-foundation', vals: { We: 3000, N: 1800 },
    derive: 0.11 * 3000 * Math.sqrt(1800),
    note: 'The top corner: 0.11 x 3000 x 42.4264... = 14000.66 kg.',
  },
  {
    id: 'c-weight-of-foundation', vals: { We: 2500, N: 1200 },
    derive: 0.11 * 2500 * Math.sqrt(1200),
    note: '0.11 x 2500 x 34.6410... = 9526.28 kg.',
  },

  // --------------------------------------------- c-volume-of-foundation
  {
    id: 'c-volume-of-foundation', vals: { Wf: 8800, Rho: 2400 },
    derive: 8800 / 2400,
    note: '8800 kg / 2400 kg/m3 = 3.6666... m3: the chain foundation carried into the pour.',
  },
  {
    id: 'c-volume-of-foundation', vals: { Wf: 5000, Rho: 2300 },
    derive: 5000 / 2300,
    note: '5000 / 2300 = 2.1739... m3.',
  },
  {
    id: 'c-volume-of-foundation', vals: { Wf: 1500, Rho: 2500 },
    derive: 1500 / 2500,
    note: 'The bottom corner: 1500 kg of the densest concrete is exactly 0.6 m3.',
  },
  {
    id: 'c-volume-of-foundation', vals: { Wf: 14000, Rho: 2400 },
    derive: 14000 / 2400,
    note: 'The top corner: 14000 kg pours to 5.8333... m3.',
  },

  // ---------------------------------------------- c-depth-of-foundation
  {
    id: 'c-depth-of-foundation', vals: { V: 3.6666666666666665, W: 1.5, L: 2.5 },
    derive: 3.6666666666666665 / (1.5 * 2.5),
    note: '3.6666... m3 over the 1.5 x 2.5 pit is 0.9777... m. The volume is carried unrounded from the previous box (the display would show 3.67).',
    ref: 'volume carried unrounded from c-volume-of-foundation (var declares 2 dp)',
  },
  {
    id: 'c-depth-of-foundation', vals: { V: 3.0, W: 1.5, L: 2.0 },
    derive: 3 / (1.5 * 2),
    note: 'A clean 3.0 m3 over a 3.0 m2 pit: exactly 1.00 m of depth.',
  },
  {
    id: 'c-depth-of-foundation', vals: { V: 1.0, W: 1.0, L: 4.0 },
    derive: 1 / (1 * 4),
    note: 'The bottom corner: a thin slab over a long narrow pit is 0.25 m.',
  },
  {
    id: 'c-depth-of-foundation', vals: { V: 6.0, W: 2.5, L: 2.0 },
    derive: 6 / (2.5 * 2),
    note: 'The top corner: 6 m3 over a 5 m2 pit is 1.20 m.',
  },
  {
    id: 'c-depth-of-foundation', vals: { V: 3.6, W: 2.0, L: 3.0 },
    derive: 3.6 / (2 * 3),
    note: '3.6 m3 over 6 m2: 0.60 m, mid-box.',
  },

  // ------------------------------------------- c-soil-pressure-foundation
  {
    id: 'c-soil-pressure-foundation', vals: { We: 2000, Wf: 8800, Af: 3.75 },
    derive: (2000 + 8800) / 3.75,
    note: '(2000 + 8800) kg / 3.75 m2 = 2880 kg/m2: the chain engine and foundation on the footprint 1.5 x 2.5 the depth box dug. Note the SUM, not the product.',
  },
  {
    id: 'c-soil-pressure-foundation', vals: { We: 1500, Wf: 5000, Af: 2.5 },
    derive: (1500 + 5000) / 2.5,
    note: '6500 kg over 2.5 m2: 2600 kg/m2.',
  },
  {
    id: 'c-soil-pressure-foundation', vals: { We: 500, Wf: 1500, Af: 4.0 },
    derive: (500 + 1500) / 4,
    note: 'The bottom corner: the lightest rig spread wide presses only 500 kg/m2.',
  },
  {
    id: 'c-soil-pressure-foundation', vals: { We: 3000, Wf: 14000, Af: 1.5 },
    derive: (3000 + 14000) / 1.5,
    note: 'The top corner: 17 tonnes on the smallest pad is 11333.33 kg/m2 - a load most soils will not take, which is what the next formula exists to say.',
  },
  {
    id: 'c-soil-pressure-foundation', vals: { We: 2500, Wf: 6500, Af: 3.0 },
    derive: (2500 + 6500) / 3,
    note: '9000 kg over 3 m2: 3000 kg/m2.',
  },

  // ------------------------------------------- c-foundation-factor-safety
  {
    id: 'c-foundation-factor-safety', vals: { Bc: 12225, Ps: 2880 },
    derive: 12225 / 2880,
    note: '12225 / 2880 = 4.2447...: the chain pressure against the printed safe bearing capacity; the round trip from a 2000 kg engine gives a factor of safety just over 4.',
  },
  {
    id: 'c-foundation-factor-safety', vals: { Bc: 12000, Ps: 3000 },
    derive: 12000 / 3000,
    note: '12000 / 3000: exactly 4.00, the top of the good-practice band.',
  },
  {
    id: 'c-foundation-factor-safety', vals: { Bc: 12500, Ps: 5000 },
    derive: 12500 / 5000,
    note: '12500 / 5000: exactly 2.50, mid-band.',
  },
  {
    id: 'c-foundation-factor-safety', vals: { Bc: 12225, Ps: 2000 },
    derive: 12225 / 2000,
    note: 'The top corner: the lightest pressure a sample can show is 6.1125, moving into over-design.',
  },
  {
    id: 'c-foundation-factor-safety', vals: { Bc: 12000, Ps: 6000 },
    derive: 12000 / 6000,
    note: 'The bottom corner: 2.00, the floor of acceptable practice.',
  },
  {
    id: 'c-foundation-factor-safety', vals: { Bc: 12225, Ps: 12225 },
    derive: 12225 / 12225,
    note: 'Bc = Ps: the ratio is exactly 1, the foundation at its limit - and the inverted distractor ALSO returns 1, so the two options print the same string. The drill keeps Ps below Bc by construction.',
    ref: 'foundation exactly at the soil limit (Ps = Bc): FS 1.0, where the inverted option equals the answer',
  },
  {
    id: 'c-foundation-factor-safety', vals: { Bc: 12225, Ps: 24450 },
    derive: 12225 / 24450,
    note: 'Ps = 2 x Bc: the ratio is 0.5, a foundation asking the soil for twice what it can carry - the inverted option rendered honestly, and the number a factor of safety below 1 always signals.',
    ref: 'double the design pressure: FS 0.5, a pre-failed foundation',
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