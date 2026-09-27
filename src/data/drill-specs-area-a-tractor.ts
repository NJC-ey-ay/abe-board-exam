// Area A drill specs, part 3 of 4: Drawbar Power, Indicated Horsepower, Field
// Efficiency, and Engine Performance.
//
// Every `compute` here implements the handbook expression in src/data/formulas.ts
// and has a hand-verified case in scripts/data/golden-cases.json. Philippine
// context throughout (rice tractors, hand tractors, farm implements, coconut
// mills, fishing pumpboats).
//
// Note on `verb`: the renderer prints "<context> <verb> <all the givens>", so a
// verb must not restate a given.
//
// Unit bases, pinned so the walkthroughs actually multiply out:
//   a-ihp-4stroke / -2stroke  P(psi) L(ft) A(in2) N(rpm) n, over 2x33,000 and
//                             33,000 respectively. The stroke is in FEET here,
//                             which is why a stroke given in inches is 12x out.
//   a-brake-horsepower        2 pi T(ft.lb) N(rpm) / 33,000. The 9,550 that goes
//                             with an N.m torque gives a 3.46x error, and 5,252
//                             is the constant for an in.lb torque.
//   a-piston-speed            2 L N is inches per MINUTE, so the answer is
//                             divided by 12 to reach ft/min.
//   a-piston-displacement     (pi/4) D2 L is in3 for inch inputs; D and L are
//                             carried in mm here and the answer in cm3.
//   a-piston-displacement-rate  PDR = PD x N, so a cm3 piston displacement gives
//                             cm3/min; reported in L/min.
//   a-drawbar-power           the handbook prints DBP = F S / c. The SI form is
//                             solved here for the drawbar pull so it does not
//                             repeat a-draft-power, which keeps the English form.
//   a-field-efficiency-time-loss  the printed equation uses T_o, T_n and T_a; the
//                             handbook also lists T_e and k, which the printed
//                             equation does not use, so they are not used here.
//
// `decimals: 0` on a cylinder count or a stroke constant is deliberate: the
// sampler rounds to `decimals`, so those vars land on whole numbers.
import type { DrillSpec } from './formula-drills';

export const areaATractorSpecs: DrillSpec[] = [
  // -------------------------------------------------------------------------
  // Drawbar Power
  // -------------------------------------------------------------------------
  {
    formulaId: 'a-drawbar-power', area: 'A', unknown: 'F',
    // The handbook prints DBP = F S / c. Solved for the drawbar pull here, with
    // the SI pair (kN and km/hr, c = 3.6) as the native units, so this is not the
    // same question as a-draft-power.
    formulaText: 'F (kN) = 3.6 × DBP (kW) / S (km/hr)',
    unit: 'kN', round: 1,
    vars: [
      { symbol: 'DBP', ascii: 'DBP', label: 'drawbar power', unit: 'kW', min: 15, max: 90, decimals: 1 },
      { symbol: 'S', ascii: 'S', label: 'forward speed', unit: 'km/hr', min: 3, max: 12, decimals: 1 },
    ],
    conversions: [
      { ascii: 'DBP', unit: 'hp', factor: 1.34102, fromUnit: 'kW' },
      { ascii: 'S', unit: 'mph', factor: 0.621371, fromUnit: 'km/hr' },
    ],
    compute: v => (3.6 * v.DBP) / v.S,
    context: 'a hand tractor ploughing a paddy in Iloilo',
    verb: 'is working at',
    unknownPhrase: 'the drawbar pull the tractor must carry',
    keyConcept: 'Drawbar power is the pull at the drawbar multiplied by the speed of travel, with the unit constant carrying the conversion: 3.6 for kN with km/hr, 375 for lb with mph. Because power is a product, knowing the power and the speed fixes the pull — which is how a tractor is checked against the rolling resistance of a particular field.',
    mistakes: ['Dropping the 3.6 and dividing by the speed alone', 'Multiplying by the speed instead of dividing', 'Using 375 with a pull in kN and a speed in km/hr'],
    distractors: [
      v => v.DBP / v.S,
      v => (3.6 * v.DBP) / v.S * 2,
      v => (3.6 * v.DBP) / v.S / 2,
    ],
  },
  // -------------------------------------------------------------------------
  // Indicated Horsepower
  // -------------------------------------------------------------------------
  {
    formulaId: 'a-ihp-4stroke', area: 'A', unknown: 'IHP',
    formulaText: 'IHP = P (psi) × L (ft) × A (in²) × N (rpm) × n / (2 × 33,000)',
    unit: 'hp', round: 2,
    vars: [
      { symbol: 'P', ascii: 'P', label: 'mean effective pressure', unit: 'psi', min: 60, max: 180, decimals: 0 },
      { symbol: 'L', ascii: 'L', label: 'stroke length', unit: 'ft', min: 0.33, max: 1.0, decimals: 2 },
      { symbol: 'A', ascii: 'A', label: 'piston area', unit: 'in²', min: 1.0, max: 12.6, decimals: 2 },
      { symbol: 'N', ascii: 'N', label: 'rotational speed', unit: 'rpm', min: 1800, max: 3600, decimals: 0 },
      { symbol: 'n', ascii: 'n', label: 'number of cylinders', unit: '', min: 2, max: 4, decimals: 0 },
    ],
    conversions: [
      { ascii: 'L', unit: 'mm', factor: 304.8, fromUnit: 'ft' },
      { ascii: 'A', unit: 'cm²', factor: 6.4516, fromUnit: 'in²' },
    ],
    compute: v => (v.P * v.L * v.A * v.N * v.n) / (2 * 33000),
    context: 'the four-stroke diesel engine of a rice thresher in Isabela',
    verb: 'was tested at',
    unknownPhrase: 'the indicated horsepower of the engine',
    keyConcept: 'IHP is the power the pistons actually develop against the gas pressure, worked out from mean effective pressure, stroke, area, speed and cylinder count. The extra factor of 2 in the denominator is what makes it a four-stroke: each cylinder fires once every two revolutions, so the engine completes half as many power strokes per minute as it does revolutions.',
    mistakes: ['Omitting the 2 from 2 × 33,000 (that is the two-stroke constant)', 'Leaving the stroke in inches when the formula wants feet', 'Forgetting to multiply by the cylinder count'],
    distractors: [
      v => (v.P * v.L * v.A * v.N * v.n) / 33000,
      v => (v.P * v.L * 12 * v.A * v.N * v.n) / (2 * 33000),
      v => (v.P * v.L * v.A * v.N * v.n) / (4 * 33000),
    ],
  },
  {
    formulaId: 'a-ihp-2stroke', area: 'A', unknown: 'IHP',
    formulaText: 'IHP = P (psi) × L (ft) × A (in²) × N (rpm) × n / 33,000',
    unit: 'hp', round: 2,
    vars: [
      { symbol: 'P', ascii: 'P', label: 'mean effective pressure', unit: 'psi', min: 60, max: 150, decimals: 0 },
      { symbol: 'L', ascii: 'L', label: 'stroke length', unit: 'ft', min: 0.25, max: 0.75, decimals: 2 },
      { symbol: 'A', ascii: 'A', label: 'piston area', unit: 'in²', min: 0.8, max: 6.0, decimals: 2 },
      { symbol: 'N', ascii: 'N', label: 'rotational speed', unit: 'rpm', min: 1800, max: 3600, decimals: 0 },
      { symbol: 'n', ascii: 'n', label: 'number of cylinders', unit: '', min: 1, max: 2, decimals: 0 },
    ],
    conversions: [
      { ascii: 'L', unit: 'mm', factor: 304.8, fromUnit: 'ft' },
      { ascii: 'A', unit: 'cm²', factor: 6.4516, fromUnit: 'in²' },
    ],
    compute: v => (v.P * v.L * v.A * v.N * v.n) / 33000,
    context: 'the two-stroke engine of a fishing pumpboat in Palawan',
    verb: 'was tested at',
    unknownPhrase: 'the indicated horsepower of the engine',
    keyConcept: 'A two-stroke fires every cylinder on every revolution, so there is no factor of 2: the same piston, pressure and speed give twice the indicated horsepower of a four-stroke of the same size. That is why small two-stroke engines are rated well above their four-stroke equivalents.',
    mistakes: ['Carrying the 2 from the four-stroke form (that halves the answer)', 'Leaving the stroke in inches when the formula wants feet', 'Forgetting to multiply by the cylinder count'],
    distractors: [
      v => (v.P * v.L * v.A * v.N * v.n) / (2 * 33000),
      v => (v.P * v.L * 12 * v.A * v.N * v.n) / 33000,
      v => (v.P * v.L * v.A * v.N * v.n) / 33000 * 2,
    ],
  },
  // -------------------------------------------------------------------------
  // Field Efficiency & Field Capacity
  // -------------------------------------------------------------------------
  {
    formulaId: 'a-draft-power', area: 'A', unknown: 'P',
    // The handbook prints both forms. The English pair is used here (mph and lb,
    // c = 375) so the SI form belongs to a-drawbar-power alone.
    formulaText: 'P (hp) = S (mph) × d (lb) / 375',
    unit: 'hp', round: 2,
    vars: [
      { symbol: 'S', ascii: 'S', label: 'forward speed', unit: 'mph', min: 2, max: 8, decimals: 1 },
      { symbol: 'd', ascii: 'd', label: 'soil draft', unit: 'lb', min: 600, max: 3000, decimals: 0 },
    ],
    conversions: [
      { ascii: 'S', unit: 'km/hr', factor: 1.60934, fromUnit: 'mph' },
      { ascii: 'd', unit: 'kN', factor: 0.00444822, fromUnit: 'lb' },
    ],
    compute: v => (v.S * v.d) / 375,
    context: 'the plough breaking the hardpan of a rice field in Pampanga',
    verb: 'is working at',
    unknownPhrase: 'the draft power the pull is absorbing',
    keyConcept: 'Draft is the force the soil resists, and the power it takes is that force times the speed of travel, with 375 the English constant (3.6 for kN with km/hr). Because it is a product of force and speed, a slower pass at the same draft costs less power — which is why a plough is never taken faster than the soil allows.',
    mistakes: ['Using 3.6 with a draft in lb and a speed in mph', 'Forgetting the divisor entirely', 'Using the drawbar constant 375 with the kN form of the draft'],
    distractors: [
      v => (v.S * v.d) / 3.6 / 1000,
      v => (v.S * v.d) / 375 * 2,
      v => (v.S * v.d) / 375 / 2,
    ],
  },
  {
    formulaId: 'a-field-efficiency-time-loss', area: 'A', unknown: 'FE',
    // The printed equation uses T_o, T_n and T_a. The handbook also defines T_e
    // and k, which the printed equation never uses, so they are left out here
    // rather than guessed at.
    formulaText: 'FE = T_o / (T_o + T_n + T_a) × 100',
    unit: '%', round: 1,
    vars: [
      { symbol: 'T_o', ascii: 'To', label: 'theoretical time', unit: 'min/ha', min: 200, max: 600, decimals: 0 },
      { symbol: 'T_n', ascii: 'Tn', label: 'time lost to non-area-proportional interruptions', unit: 'min/ha', min: 20, max: 120, decimals: 0 },
      { symbol: 'T_a', ascii: 'Ta', label: 'time lost to area-proportional interruptions', unit: 'min/ha', min: 10, max: 90, decimals: 0 },
    ],
    compute: v => (v.To / (v.To + v.Tn + v.Ta)) * 100,
    context: 'the ploughing rate recorded over a whole season on a rice farm in Ilocos Norte',
    verb: 'was worked out from',
    unknownPhrase: 'the field efficiency of the operation',
    keyConcept: 'Field efficiency is the share of the theoretical time that was actually productive. The theoretical time T_o is measured against the time actually spent, which is T_o plus every interruption — turning at the headland, filling, waiting. The answer can never reach 100% because the losses are in the denominator.',
    mistakes: ['Forgetting the area-proportional loss T_a in the denominator', 'Inverting the ratio and getting a figure over 100%', 'Subtracting the losses from T_o in the numerator instead'],
    distractors: [
      v => (v.To / (v.To + v.Tn)) * 100,
      v => ((v.To + v.Tn + v.Ta) / v.To) * 100,
      v => (v.To / (v.To + v.Tn + v.Ta)) * 200,
      v => (v.To / (v.To + v.Tn + v.Ta)) * 50,
    ],
  },
  // -------------------------------------------------------------------------
  // Mechanical Efficiency, BHP & Engine Performance
  // -------------------------------------------------------------------------
  {
    formulaId: 'a-brake-horsepower', area: 'A', unknown: 'BHP',
    formulaText: 'BHP = 2π T (ft·lb) × N (rpm) / 33,000',
    unit: 'hp', round: 2,
    vars: [
      { symbol: 'T', ascii: 'T', label: 'shaft torque', unit: 'ft·lb', min: 150, max: 1200, decimals: 0 },
      { symbol: 'N', ascii: 'N', label: 'rotational speed', unit: 'rpm', min: 900, max: 2400, decimals: 0 },
    ],
    conversions: [
      { ascii: 'T', unit: 'N·m', factor: 0.737562, fromUnit: 'ft·lb' },
    ],
    compute: v => (2 * Math.PI * v.T * v.N) / 33000,
    context: 'the line shaft driving a coconut huller in Quezon province',
    verb: 'is taking',
    unknownPhrase: 'the brake horsepower at the shaft',
    keyConcept: 'Brake horsepower is the power the shaft actually delivers, measured on a brake, so it is below the indicated horsepower by the friction horsepower. Torque times speed gives power only with the right constant: 33,000 for ft·lb, 9,550 for an N·m torque, 5,252 for an in·lb torque.',
    mistakes: ['Using 9,550 with a torque in ft·lb', 'Using 5,252, which belongs to a torque in in·lb', 'Dropping the 2π and using T N / 33,000'],
    distractors: [
      v => (2 * Math.PI * v.T * v.N) / 9550,
      v => (v.T * v.N) / 33000,
      v => (2 * Math.PI * v.T * v.N) / 33000 * 2,
    ],
  },
  {
    formulaId: 'a-piston-displacement', area: 'A', unknown: 'PD',
    // (pi/4) D2 L is the swept volume of one cylinder. Bore and stroke are carried
    // in mm, so the result is divided by 1,000 to report cm3.
    formulaText: 'PD (cm³) = (π/4) D² L × n / 1,000',
    unit: 'cm³', round: 1,
    vars: [
      { symbol: 'D', ascii: 'D', label: 'bore diameter', unit: 'mm', min: 60, max: 120, decimals: 1 },
      { symbol: 'L', ascii: 'L', label: 'stroke length', unit: 'mm', min: 50, max: 120, decimals: 1 },
      { symbol: 'n', ascii: 'n', label: 'number of cylinders', unit: '', min: 1, max: 6, decimals: 0 },
    ],
    conversions: [
      { ascii: 'D', unit: 'in', factor: 0.0393701, fromUnit: 'mm' },
      { ascii: 'L', unit: 'in', factor: 0.0393701, fromUnit: 'mm' },
    ],
    compute: v => (Math.PI / 4) * Math.pow(v.D, 2) * v.L * v.n / 1000,
    context: 'the engine of a multicylinder diesel tractor in Nueva Ecija',
    verb: 'was built with',
    unknownPhrase: 'the total piston displacement of the engine',
    keyConcept: 'Piston displacement is swept volume: the area of the piston, (π/4)D², times how far it travels, times how many pistons do it. It says nothing about power — a big engine can be a weak one — but it fixes the size of the crankcase and the amount of air the engine swallows per revolution.',
    mistakes: ['Treating the bore as the radius and using πD²L, which quadruples the answer', 'Forgetting the cylinder count', 'Dropping the π'],
    distractors: [
      v => (Math.PI / 4) * Math.pow(v.D, 2) * v.L / 1000,
      v => Math.PI * Math.pow(v.D, 2) * v.L * v.n / 1000,
      v => (Math.pow(v.D, 2) * v.L * v.n) / 1000,
      v => (Math.PI / 4) * Math.pow(v.D, 2) * v.L * v.n / 1000 * 2,
    ],
  },
  {
    formulaId: 'a-piston-displacement-rate', area: 'A', unknown: 'PDR',
    // PD is a volume in cm3 and N a speed, so the product is cm3 per minute;
    // reported in L/min.
    formulaText: 'PDR (L/min) = PD (cm³) × N (rpm) / 1,000',
    unit: 'L/min', round: 1,
    vars: [
      { symbol: 'PD', ascii: 'PD', label: 'piston displacement', unit: 'cm³', min: 50, max: 4000, decimals: 0 },
      { symbol: 'N', ascii: 'N', label: 'rotational speed', unit: 'rpm', min: 800, max: 3600, decimals: 0 },
    ],
    conversions: [
      { ascii: 'PD', unit: 'in³', factor: 0.0610237, fromUnit: 'cm³' },
    ],
    compute: v => (v.PD * v.N) / 1000,
    context: 'the engine of a diesel pump supplying a rice mill in Bulacan',
    verb: 'has',
    unknownPhrase: 'the piston displacement rate in litres per minute',
    keyConcept: 'Displacement rate is how much air the engine takes in each minute: the volume it sweeps per revolution times the revolutions per minute. A 4 L engine at 3 000 rpm moves 12 000 L of air through it every minute, which is why a bigger air cleaner and a freer inlet are needed as the speed goes up.',
    mistakes: ['Answering in cm³/min without dividing by 1,000', 'Halving the product as though only every other revolution swept volume', 'Using the bore area instead of the displacement'],
    // Ratios 0.5, 2, 4 and 3 of the answer: all distinct, so the four options
    // can never collapse onto each other.
    distractors: [
      v => (v.PD * v.N) / 2000,
      v => (v.PD * v.N) / 500,
      v => (v.PD * v.N) / 250,
      v => (v.PD * v.N) * 3 / 1000,
    ],
  },
  {
    formulaId: 'a-piston-speed', area: 'A', unknown: 'S_p',
    // 2 L N is inches per minute, so the answer is divided by 12 to reach ft/min,
    // which is the unit piston speed is conventionally quoted in.
    formulaText: 'S_p (ft/min) = 2 L (in) × N (rpm) / 12',
    unit: 'ft/min', round: 0,
    vars: [
      { symbol: 'L', ascii: 'L', label: 'stroke length', unit: 'in', min: 2, max: 7, decimals: 2 },
      { symbol: 'N', ascii: 'N', label: 'rotational speed', unit: 'rpm', min: 900, max: 3600, decimals: 0 },
    ],
    conversions: [
      { ascii: 'L', unit: 'mm', factor: 0.0393701, fromUnit: 'in' },
    ],
    compute: v => (2 * v.L * v.N) / 12,
    context: 'the small diesel engine running a coconut grinder in Bohol',
    verb: 'runs with',
    unknownPhrase: 'the piston speed',
    keyConcept: 'The piston travels the stroke twice for every revolution — once down, once back — so its speed is twice the stroke times the rpm. Since that product is inches per minute, dividing by 12 gives the ft/min that engine builders quote. Piston speed, not rpm, is what the connecting rod and the bearings actually feel.',
    mistakes: ['Forgetting the 2 and giving the round-trip instead of the stroke', 'Forgetting the 12 and answering in inches per minute', 'Dividing by 60 as though the product were already in seconds'],
    distractors: [
      v => 2 * v.L * v.N,
      v => (v.L * v.N) / 12,
      v => (2 * v.L * v.N) / 60,
      v => (2 * v.L * v.N) / 24,
    ],
  },
  {
    formulaId: 'a-fuel-consumption', area: 'A', unknown: 'FC',
    // The handbook gives the form without a constant: volume (or weight) of fuel
    // over time. The volume form is used here, so the answer is L/h.
    formulaText: 'FC (L/h) = fuel volume consumed / time',
    unit: 'L/h', round: 2,
    vars: [
      // Fuel volume and run time are bounded so the rate never lands near zero,
      // where a jittered distractor would print as a bare 0.00 beside it.
      { symbol: 'V_f', ascii: 'Vf', label: 'diesel volume', unit: 'L', min: 3, max: 30, decimals: 1 },
      { symbol: 't', ascii: 't', label: 'running time', unit: 'h', min: 1, max: 6, decimals: 1 },
    ],
    conversions: [
      { ascii: 'Vf', unit: 'gal', factor: 0.264172, fromUnit: 'L' },
      { ascii: 't', unit: 'min', factor: 60, fromUnit: 'h' },
    ],
    compute: v => v.Vf / v.t,
    context: 'the diesel engine of a fishing pumpboat in Sorsogon',
    verb: 'used',
    unknownPhrase: 'the fuel consumption of the engine',
    keyConcept: 'Fuel consumption is a rate, so it is volume over time and nothing else — there is no constant in it, only the unit the fuel was measured in. Watch the time: the same tank emptied over four hours gives half the consumption of the same tank emptied over two, and an hourly figure cannot be compared with a per-shift one.',
    mistakes: ['Multiplying the volume by the time instead of dividing', 'Answering in L/day while the time was given in hours', 'Using the tank capacity rather than the fuel actually burnt'],
    // Ratios t^2, 2, 0.5 and 3. t^2 lands on 1 only at t = 1.0, where it is
    // rejected as a duplicate of the answer, leaving the other three intact.
    distractors: [
      v => v.Vf * v.t,
      v => (v.Vf / v.t) * 2,
      v => (v.Vf / v.t) / 2,
      v => (v.Vf / v.t) * 3,
    ],
  },
  {
    formulaId: 'a-rate-of-explosion', area: 'A', unknown: 'ER',
    // C is 1 for a two-stroke and 2 for a four-stroke, so the var is a whole
    // number between 1 and 2 (decimals: 0 makes the sampler land on 1 or 2).
    formulaText: 'ER = N (rpm) / C,  where C = 1 for 2-stroke and 2 for 4-stroke',
    unit: 'per min', round: 0,
    vars: [
      { symbol: 'N', ascii: 'N', label: 'rotational speed', unit: 'rpm', min: 600, max: 3600, decimals: 0 },
      { symbol: 'C', ascii: 'C', label: 'stroke constant', unit: '', min: 1, max: 2, decimals: 0 },
    ],
    compute: v => v.N / v.C,
    context: 'the engine of a four-stroke generator set at a rural health centre in Samar',
    verb: 'is running at',
    unknownPhrase: 'the rate of explosion of the engine',
    keyConcept: 'The rate of explosion counts power strokes, not revolutions. A four-stroke cylinder fires once every two turns, so its rate of explosion is half its rpm; a two-stroke fires every turn, so the two are equal. It is the number that says how often the cylinders actually do work on the crank.',
    mistakes: ['Using the rpm as the rate of explosion and ignoring the stroke count', 'Dividing by 2 on a two-stroke that fires every revolution', 'Reporting the rate per second while quoting the answer per minute'],
    distractors: [
      v => v.N / (2 * v.C),
      v => (2 * v.N) / v.C,
      v => v.N / (60 * v.C),
      v => (3 * v.N) / v.C,
    ],
  },
];
