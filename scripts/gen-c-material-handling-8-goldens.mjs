// Golden cases for Area C batch 8 (material handling: bucket elevator,
// conveying & storage, grain storage structures). Eleven specs.
//
// Same rule as every batch generator: every expected value is derived here by
// hand from the printed formula, in full, never from the spec's own compute.
//
// This batch carries three cross-spec identity stories, the same way batch
// seven carried its drying and foundation chains:
//
//   THE BUCKET-ELEVATOR PAIR (one wheel, carried unrounded):
//     c-bucket-elevator-speed   R 2.00         ->  54.19/sqrt(2) = 38.3182... rpm
//     c-bucket-velocity         D 4 (2R), N carried ->  pi*4*N       = 481.5... ft/min
//   The design-speed box fixes the head for R = 2 ft; the velocity box then runs
//   the SAME elevator at D = 2R = 4 ft and carries the computed speed unrounded.
//   The identity is the pair: both boxes describe one wheel, and the velocity
//   the belt sees must be pi D N for the N the speed box just delivered.
//
//   THE BIN TRIAD (one 6 x 3 silo, phi = delta = 45 degrees):
//     c-bin-level-full-volume     ->  (pi*36/4)*3        = 84.8230... m3
//     c-bin-peak-storage-capacity ->  (pi*36/4)*(3+1)    = 113.0973... m3
//     c-hopper-bottom-bin         ->  (pi*36/4)*(3+1+1)  = 141.3717... m3
//   One silo priced three ways: flat to the eave, heaped, and self-emptying.
//   The 45-degree angle makes both cone corrections land on exactly one extra
//   unit of height (the (D/2)/3 term is 1), so the three volumes step by 28.27 m3.
//
//   THE STOCKPILE PAIR (one inventory, two stacking densities):
//     c-volume-of-pile  CWH 3000, Rho 15 -> 200 m3 (rice sacks)
//     c-volume-of-pile  CWH 3000, Rho 10 -> 300 m3 (palay sacks)
//   The same three-thousand-bag inventory occupies half again the floor depending
//   only on which commodity the storehouse is stacking.
import { loadTsModule } from './lib/load-ts.mjs';
import { readFileSync, writeFileSync } from 'node:fs';

const GOLDEN = 'scripts/data/golden-cases.json';
const TOLERANCE = 1e-12;

const CASES = [
  // ------------------------------------------------ c-bucket-velocity
  {
    id: 'c-bucket-velocity', vals: { D: 4, N: 54.19 / Math.sqrt(2) },
    derive: Math.PI * 4 * (54.19 / Math.sqrt(2)),
    note: 'pi x 4 ft x 38.3182... rpm = 481.5... ft/min: the SAME elevator the speed box below sized at R = 2 ft, now D = 2R = 4, with the head speed carried unrounded.',
  },
  {
    id: 'c-bucket-velocity', vals: { D: 3, N: 50 },
    derive: Math.PI * 3 * 50,
    note: 'pi x 3 x 50 = 150 pi = 471.24 ft/min: a modest head at a relaxed speed.',
  },
  {
    id: 'c-bucket-velocity', vals: { D: 2, N: 30 },
    derive: Math.PI * 2 * 30,
    note: 'The bottom corner: the smallest head at the slowest speed gives 60 pi = 188.50 ft/min.',
  },
  {
    id: 'c-bucket-velocity', vals: { D: 8, N: 90 },
    derive: Math.PI * 8 * 90,
    note: 'The top corner: a big head wound up to 90 rpm is 720 pi = 2261.95 ft/min.',
  },
  {
    id: 'c-bucket-velocity', vals: { D: 5, N: 60 },
    derive: Math.PI * 5 * 60,
    note: 'pi x 5 x 60 = 300 pi = 942.48 ft/min, mid-box.',
  },

  // ------------------------------------------- c-bucket-elevator-speed
  {
    id: 'c-bucket-elevator-speed', vals: { R: 2 },
    derive: 54.19 / Math.sqrt(2),
    note: '54.19/sqrt(2) = 38.3182... rpm: the chain anchor that the velocity box above spends at D = 4.',
  },
  {
    id: 'c-bucket-elevator-speed', vals: { R: 1 },
    derive: 54.19 / Math.sqrt(1),
    note: 'R = 1.00 ft is the unit radius: the speed is exactly 54.19 rpm.',
  },
  {
    id: 'c-bucket-elevator-speed', vals: { R: 4 },
    derive: 54.19 / Math.sqrt(4),
    note: 'R = 4.00 ft: sqrt(4) = 2 exactly, so the head slows to 27.095 rpm - half of the unit-radius figure, not a quarter, the square-root signature.',
  },
  {
    id: 'c-bucket-elevator-speed', vals: { R: 2.25 },
    derive: 54.19 / Math.sqrt(2.25),
    note: 'R = 2.25 = (1.5)^2: sqrt is exactly 1.5, so the speed is 36.126... rpm.',
  },
  {
    id: 'c-bucket-elevator-speed', vals: { R: 3 },
    derive: 54.19 / Math.sqrt(3),
    note: 'R = 3.00 ft: 54.19/1.7320... = 31.287... rpm, mid-box.',
  },

  // ------------------------------------------- c-bucket-elevator-power
  {
    id: 'c-bucket-elevator-power', vals: { C: 2000, H: 25.0, F: 1.2 },
    derive: 2000 * 25.0 * 1.2,
    note: '2000 kg/min x 25 m x 1.2 = 60000 kg-m/min: the biggest elevator of the box lifting on the assisted (upside-loaded) factor.',
  },
  {
    id: 'c-bucket-elevator-power', vals: { C: 1000, H: 10.0, F: 1.5 },
    derive: 1000 * 10.0 * 1.5,
    note: '1000 x 10 x 1.5 = 15000 kg-m/min: the downside-loaded factor paying the full round trip.',
  },
  {
    id: 'c-bucket-elevator-power', vals: { C: 100, H: 5.0, F: 1.2 },
    derive: 100 * 5.0 * 1.2,
    note: 'The bottom corner: the smallest capacity over the shortest lift needs only 600 kg-m/min.',
  },
  {
    id: 'c-bucket-elevator-power', vals: { C: 2000, H: 40.0, F: 1.5 },
    derive: 2000 * 40.0 * 1.5,
    note: 'The top corner: a full-capacity elevator at full height on the penalty factor is 120000 kg-m/min.',
  },
  {
    id: 'c-bucket-elevator-power', vals: { C: 500, H: 20.0, F: 1.3 },
    derive: 500 * 20.0 * 1.3,
    note: '500 x 20 x 1.3 = 13000 kg-m/min, mid-box.',
  },

  // ------------------------------------------- c-screw-conveyor-capacity
  {
    id: 'c-screw-conveyor-capacity', vals: { D: 1.0, P: 1.0, N: 60 },
    derive: (Math.PI * 1.0 * 1.0 / 4) * 1.0 * 60,
    note: '(pi*1/4) x 1 ft pitch x 60 rpm = 15 pi = 47.12 ft3/min: a foot-wide auger turning once a second.',
  },
  {
    id: 'c-screw-conveyor-capacity', vals: { D: 0.8, P: 0.75, N: 120 },
    derive: (Math.PI * 0.8 * 0.8 / 4) * 0.75 * 120,
    note: 'A fast-shoving small auger: (pi*0.64/4) x 0.75 x 120 = 14.4 pi = 45.24 ft3/min.',
  },
  {
    id: 'c-screw-conveyor-capacity', vals: { D: 0.5, P: 0.4, N: 30 },
    derive: (Math.PI * 0.5 * 0.5 / 4) * 0.4 * 30,
    note: 'The bottom corner: the narrowest screw at its gentlest pitch and speed moves 0.75 pi = 2.36 ft3/min.',
  },
  {
    id: 'c-screw-conveyor-capacity', vals: { D: 1.2, P: 1.0, N: 120 },
    derive: (Math.PI * 1.2 * 1.2 / 4) * 1.0 * 120,
    note: 'The top corner: the widest screw at a full pitch and top speed is 43.2 pi = 135.72 ft3/min.',
  },
  {
    id: 'c-screw-conveyor-capacity', vals: { D: 0.6, P: 0.5, N: 60 },
    derive: (Math.PI * 0.6 * 0.6 / 4) * 0.5 * 60,
    note: '(pi*0.36/4) x 0.5 x 60 = 2.7 pi = 8.48 ft3/min, mid-box.',
  },

  // -------------------------------------------------- c-volume-of-pile
  {
    id: 'c-volume-of-pile', vals: { Cwh: 3000, Rho: 15 },
    derive: 3000 / 15,
    note: '3000 bags / 15 bag/m3 = 200 m3: three thousand RICE sacks (the densest figure of the handbook).',
  },
  {
    id: 'c-volume-of-pile', vals: { Cwh: 3000, Rho: 10 },
    derive: 3000 / 10,
    note: '3000 bags / 10 bag/m3 = 300 m3: the SAME three thousand PALAY sacks bulk half again as large - the stockpile pair.',
  },
  {
    id: 'c-volume-of-pile', vals: { Cwh: 500, Rho: 15 },
    derive: 500 / 15,
    note: 'The bottom corner: 500 tight rice sacks are 33.333... m3.',
  },
  {
    id: 'c-volume-of-pile', vals: { Cwh: 5000, Rho: 10 },
    derive: 5000 / 10,
    note: 'The top corner: a full 5000-bag palay pile is exactly 500 m3.',
  },
  {
    id: 'c-volume-of-pile', vals: { Cwh: 2000, Rho: 12 },
    derive: 2000 / 12,
    note: '2000 bags / 12 bag/m3 (corn) = 166.666... m3, mid-box.',
  },

  // ----------------------------------------- c-paddy-separator-compartments
  {
    id: 'c-paddy-separator-compartments', vals: { Cb: 2000 },
    derive: 2000 / 40,
    note: '2000 kg/h / 40 kg/(h compartment) = 50 compartments on long grain.',
  },
  {
    id: 'c-paddy-separator-compartments', vals: { Cb: 1600 },
    derive: 1600 / 40,
    note: '1600 kg/h / 40 = 40 compartments: the exact figure the narrative of the box quotes for a long-grain stream.',
  },
  {
    id: 'c-paddy-separator-compartments', vals: { Cb: 800 },
    derive: 800 / 40,
    note: 'The bottom corner: the smallest stream needs exactly 20 compartments.',
  },
  {
    id: 'c-paddy-separator-compartments', vals: { Cb: 2400 },
    derive: 2400 / 40,
    note: 'The top corner: 2400 kg/h is 60 compartments.',
  },
  {
    id: 'c-paddy-separator-compartments', vals: { Cb: 1000 },
    derive: 1000 / 40,
    note: '1000 kg/h / 40 = 25 compartments, mid-box.',
  },

  // ------------------------------------------------ c-bin-level-full-volume
  {
    id: 'c-bin-level-full-volume', vals: { D: 6.0, H: 3.0 },
    derive: (Math.PI * 6.0 * 6.0 / 4) * 3.0,
    note: '(pi*36/4) x 3 = 27 pi = 84.823... m3: the bin-triad silo filled flat to the eave.',
  },
  {
    id: 'c-bin-level-full-volume', vals: { D: 4.0, H: 5.0 },
    derive: (Math.PI * 4.0 * 4.0 / 4) * 5.0,
    note: '(pi*16/4) x 5 = 20 pi = 62.832... m3: a tall slender bin.',
  },
  {
    id: 'c-bin-level-full-volume', vals: { D: 3.0, H: 2.0 },
    derive: (Math.PI * 3.0 * 3.0 / 4) * 2.0,
    note: 'The bottom corner: the smallest bin holds 4.5 pi = 14.137... m3.',
  },
  {
    id: 'c-bin-level-full-volume', vals: { D: 12.0, H: 8.0 },
    derive: (Math.PI * 12.0 * 12.0 / 4) * 8.0,
    note: 'The top corner: a 12 m x 8 m silo holds 288 pi = 904.779... m3.',
  },
  {
    id: 'c-bin-level-full-volume', vals: { D: 8.0, H: 4.0 },
    derive: (Math.PI * 8.0 * 8.0 / 4) * 4.0,
    note: '(pi*64/4) x 4 = 64 pi = 201.062... m3, mid-box.',
  },

  // ------------------------------------------- c-bin-peak-storage-capacity
  {
    id: 'c-bin-peak-storage-capacity', vals: { D: 6.0, H: 3.0, Phi: 45 },
    derive: (Math.PI * 6.0 * 6.0 / 4) * (3.0 + ((6.0 / 2) * Math.tan(45 * Math.PI / 180)) / 3),
    note: '(pi*36/4) x (3 + (3*tan45)/3) = 9 pi x 4 = 113.097... m3: the bin-triad silo heaped; at 45 degrees the cone adds exactly one unit of height.',
  },
  {
    id: 'c-bin-peak-storage-capacity', vals: { D: 12.0, H: 2.0, Phi: 25 },
    derive: (Math.PI * 12.0 * 12.0 / 4) * (2.0 + ((12.0 / 2) * Math.tan(25 * Math.PI / 180)) / 3),
    note: 'A shallow 25-degree heap on a wide flat bin: cone term = 2*tan25/3 = 0.311... m of extra height.',
  },
  {
    id: 'c-bin-peak-storage-capacity', vals: { D: 8.0, H: 2.0, Phi: 45 },
    derive: (Math.PI * 8.0 * 8.0 / 4) * (2.0 + ((8.0 / 2) * Math.tan(45 * Math.PI / 180)) / 3),
    note: 'At 45 degrees the cone term is D/6 = 1.333... m of extra height on the slender bin.',
  },
  {
    id: 'c-bin-peak-storage-capacity', vals: { D: 3.0, H: 8.0, Phi: 25 },
    derive: (Math.PI * 3.0 * 3.0 / 4) * (8.0 + ((3.0 / 2) * Math.tan(25 * Math.PI / 180)) / 3),
    note: 'The tall bin with the gentlest heap: the cone correction is only 0.077... m, so level-full and peak-storage nearly agree - the source of the sliding-ratio warning in the spec header.',
  },

  // ----------------------------------------------- c-hopper-bottom-bin
  {
    id: 'c-hopper-bottom-bin', vals: { D: 6.0, H: 3.0, Phi: 45, Delta: 45 },
    derive: (Math.PI * 6.0 * 6.0 / 4) * (3.0 + ((6.0 / 2) * Math.tan(45 * Math.PI / 180)) / 3 + ((6.0 / 2) * Math.tan(45 * Math.PI / 180)) / 3),
    note: '(pi*36/4) x (3 + 1 + 1) = 9 pi x 5 = 141.372... m3: the bin-triad silo on a self-emptying hopper, the third and largest of the three readings.',
  },
  {
    id: 'c-hopper-bottom-bin', vals: { D: 8.0, H: 4.0, Phi: 30, Delta: 45 },
    derive: (Math.PI * 8.0 * 8.0 / 4) * (4.0 + ((8.0 / 2) * Math.tan(30 * Math.PI / 180)) / 3 + ((8.0 / 2) * Math.tan(45 * Math.PI / 180)) / 3),
    note: 'Upper cone at 30 degrees, hopper at 45: the two corrections add 0.770 + 1.333 = 2.103... m of combined cone height.',
  },
  {
    id: 'c-hopper-bottom-bin', vals: { D: 3.0, H: 2.0, Phi: 45, Delta: 30 },
    derive: (Math.PI * 3.0 * 3.0 / 4) * (2.0 + ((3.0 / 2) * Math.tan(45 * Math.PI / 180)) / 3 + ((3.0 / 2) * Math.tan(30 * Math.PI / 180)) / 3),
    note: 'The bottom corner: a small bin with a gentle hopper still gains 0.538... m of cone height.',
  },
  {
    id: 'c-hopper-bottom-bin', vals: { D: 12.0, H: 8.0, Phi: 45, Delta: 60 },
    derive: (Math.PI * 12.0 * 12.0 / 4) * (8.0 + ((12.0 / 2) * Math.tan(45 * Math.PI / 180)) / 3 + ((12.0 / 2) * Math.tan(60 * Math.PI / 180)) / 3),
    note: 'The top corner: a steep 60-degree hopper adds 2*tan60/3 = 1.155... m on its own against the 2.0 m from the fill cone.',
  },

  // ------------------------------------------- c-vertical-abrasive-whitener-brakes
  {
    id: 'c-vertical-abrasive-whitener-brakes', vals: { D: 1200 },
    derive: 1200 / 100,
    note: 'A 1200 mm cone wants 12 brakes.',
  },
  {
    id: 'c-vertical-abrasive-whitener-brakes', vals: { D: 800 },
    derive: 800 / 100,
    note: 'An 800 mm cone wants 8 brakes.',
  },
  {
    id: 'c-vertical-abrasive-whitener-brakes', vals: { D: 500 },
    derive: 500 / 100,
    note: 'The bottom corner: the smallest cone still takes 5 brakes.',
  },
  {
    id: 'c-vertical-abrasive-whitener-brakes', vals: { D: 1500 },
    derive: 1500 / 100,
    note: 'The top corner: a 1500 mm cone takes 15 brakes.',
  },
  {
    id: 'c-vertical-abrasive-whitener-brakes', vals: { D: 1000 },
    derive: 1000 / 100,
    note: 'The round figure: 1000 mm, exactly 10 brakes.',
  },

  // ------------------------------------------------ c-low-speed-rubber-roller
  {
    id: 'c-low-speed-rubber-roller', vals: { Nf: 640 },
    derive: 640 * 0.75,
    note: '640 x 0.75 = 480 rpm: the top of the drive range, the differential rolled to three-quarters.',
  },
  {
    id: 'c-low-speed-rubber-roller', vals: { Nf: 480 },
    derive: 480 * 0.75,
    note: 'The bottom corner: 480 x 0.75 = 360 rpm, the slowest driven roller of the box.',
  },
  {
    id: 'c-low-speed-rubber-roller', vals: { Nf: 960 },
    derive: 960 * 0.75,
    note: 'The top corner: a fast roller at 960 rpm drives the slower one at 720 rpm.',
  },
  {
    id: 'c-low-speed-rubber-roller', vals: { Nf: 800 },
    derive: 800 * 0.75,
    note: '800 x 0.75 = 600 rpm, mid-box.',
  },
  {
    id: 'c-low-speed-rubber-roller', vals: { Nf: 720 },
    derive: 720 * 0.75,
    note: '720 x 0.75 = 540 rpm.',
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