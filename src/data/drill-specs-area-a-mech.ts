// Area A drill specs, part 1 of 3: Belt Drives, and Shafts / Sprockets / Chains.
//
// Every `compute` here implements the handbook expression in src/data/formulas.ts
// and has a hand-verified case in scripts/data/golden-cases.json. Philippine
// context throughout (rice mills, coconut dehuskers, threshers, greenhouse
// irrigation).
//
// Note on `verb`: the renderer prints "<context> <verb> <all the givens>", so a
// verb must not restate a given. "has a center-to-center distance of" would read
// "has a center-to-center distance of a center-to-center distance of 500 mm".
//
// Three entries deliberately depart from the handbook's printed form. Each says
// so in its own comment and keyConcept:
//   a-belt-center-distance - the printed inverse is not the inverse of the
//                            handbook's own belt-length equation.
//   a-belt-life            - the printed form is dimensionally inconsistent.
//   a-shaft-diameter       - stress is carried in N/mm2 so the substitution the
//                            walkthrough prints multiplies out to the answer.
import type { DrillSpec } from './formula-drills';

export const areaAMechSpecs: DrillSpec[] = [
  // -------------------------------------------------------------------------
  // Belt Drives
  // -------------------------------------------------------------------------
  {
    formulaId: 'a-belt-open-length', area: 'A', unknown: 'L',
    formulaText: 'L = 2C + (π/2)(D + d) + (D − d)² / (4C)',
    unit: 'mm', round: 1,
    vars: [
      { symbol: 'C', ascii: 'C', label: 'center-to-center distance', unit: 'mm', min: 350, max: 800, decimals: 0 },
      { symbol: 'D', ascii: 'D', label: 'large pulley diameter', unit: 'mm', min: 250, max: 500, decimals: 0 },
      { symbol: 'd', ascii: 'd', label: 'small pulley diameter', unit: 'mm', min: 100, max: 200, decimals: 0 },
    ],
    conversions: [
      { ascii: 'C', unit: 'in', factor: 0.0393701, fromUnit: 'mm' },
      { ascii: 'D', unit: 'in', factor: 0.0393701, fromUnit: 'mm' },
      { ascii: 'd', unit: 'in', factor: 0.0393701, fromUnit: 'mm' },
    ],
    compute: v => 2 * v.C + (Math.PI / 2) * (v.D + v.d) + Math.pow(v.D - v.d, 2) / (4 * v.C),
    context: 'the flat belt drive on a rice huller in Ilocos Norte',
    verb: 'is built with',
    unknownPhrase: 'the required open belt length',
    keyConcept: 'Open belt length = 2C + (π/2)(D + d) + (D − d)²/(4C). The last term is the wrap correction; it is small and always positive, so the belt is always slightly longer than 2C + (π/2)(D + d).',
    mistakes: ['Omitting the (D − d)²/(4C) wrap correction', 'Using (D + d)² instead of (D − d)² (that is the crossed-belt form)', 'Forgetting the 2C term'],
    distractors: [
      v => 2 * v.C + (Math.PI / 2) * (v.D + v.d),
      v => 2 * v.C + (Math.PI / 2) * (v.D + v.d) + Math.pow(v.D + v.d, 2) / (4 * v.C),
      v => 2 * v.C + (Math.PI / 2) * (v.D - v.d) + Math.pow(v.D - v.d, 2) / (4 * v.C),
    ],
  },
  {
    formulaId: 'a-belt-cross-length', area: 'A', unknown: 'L',
    formulaText: 'L = 2C + (π/2)(D + d) + (D + d)² / (4C)',
    unit: 'mm', round: 1,
    vars: [
      { symbol: 'C', ascii: 'C', label: 'center-to-center distance', unit: 'mm', min: 350, max: 800, decimals: 0 },
      { symbol: 'D', ascii: 'D', label: 'large pulley diameter', unit: 'mm', min: 250, max: 500, decimals: 0 },
      { symbol: 'd', ascii: 'd', label: 'small pulley diameter', unit: 'mm', min: 100, max: 200, decimals: 0 },
    ],
    conversions: [
      { ascii: 'C', unit: 'in', factor: 0.0393701, fromUnit: 'mm' },
      { ascii: 'D', unit: 'in', factor: 0.0393701, fromUnit: 'mm' },
      { ascii: 'd', unit: 'in', factor: 0.0393701, fromUnit: 'mm' },
    ],
    compute: v => 2 * v.C + (Math.PI / 2) * (v.D + v.d) + Math.pow(v.D + v.d, 2) / (4 * v.C),
    context: 'the crossed belt drive between the motor and pump of a greenhouse irrigation set in Cavite',
    verb: 'is built with',
    unknownPhrase: 'the required crossed belt length',
    keyConcept: 'Crossed belt length = 2C + (π/2)(D + d) + (D + d)²/(4C). Crossing the belt makes the correction term (D + d)²/(4C) instead of (D − d)²/(4C), so a crossed belt of the same pulleys is measurably longer than an open one.',
    mistakes: ['Using (D − d)² instead of (D + d)²', 'Omitting the wrap correction entirely', 'Forgetting the 2C term'],
    distractors: [
      v => 2 * v.C + (Math.PI / 2) * (v.D + v.d),
      v => 2 * v.C + (Math.PI / 2) * (v.D + v.d) + Math.pow(v.D - v.d, 2) / (4 * v.C),
      v => 2 * v.C + (Math.PI / 2) * (v.D + v.d) + Math.pow(v.D + v.d, 2) / (4 * v.C) * 0.5,
    ],
  },
  {
    formulaId: 'a-belt-center-distance', area: 'A', unknown: 'C',
    // The handbook prints C = [B + sqrt(B² - 8(D - d)²)]/8, but that is not the
    // inverse of the handbook's own belt-length equation: putting that C back
    // into 2C + (pi/2)(D + d) + (D - d)²/(4C) does not return B. Solving the
    // printed length equation for C properly gives the form below, which is
    // used here so the two belt-length entries in this file actually agree.
    formulaText: 'C = [(L − (π/2)(D + d)) + √((L − (π/2)(D + d))² − 2(D − d)²)] / 4',
    unit: 'mm', round: 1,
    vars: [
      { symbol: 'L', ascii: 'L', label: 'belt length', unit: 'mm', min: 2000, max: 4000, decimals: 0 },
      { symbol: 'D', ascii: 'D', label: 'large pulley diameter', unit: 'mm', min: 250, max: 500, decimals: 0 },
      { symbol: 'd', ascii: 'd', label: 'small pulley diameter', unit: 'mm', min: 100, max: 200, decimals: 0 },
    ],
    conversions: [
      { ascii: 'L', unit: 'in', factor: 0.0393701, fromUnit: 'mm' },
      { ascii: 'D', unit: 'in', factor: 0.0393701, fromUnit: 'mm' },
      { ascii: 'd', unit: 'in', factor: 0.0393701, fromUnit: 'mm' },
    ],
    compute: v => {
      const a = (Math.PI / 2) * (v.D + v.d);
      const x = v.L - a;
      return (x + Math.sqrt(x * x - 2 * Math.pow(v.D - v.d, 2))) / 4;
    },
    context: 'a replacement flat belt on a tractor pulley drive in Batangas',
    verb: 'was installed with',
    unknownPhrase: 'the center-to-center distance the belt was fitted to',
    keyConcept: 'Inverting the open-belt length equation: with a = (π/2)(D + d), the length is 2C + a + (D − d)²/(4C), so 2C² + (a − L)C + (D − d)²/4 = 0 and C = [(L − a) + √((L − a)² − 2(D − d)²)]/4. The plus root is the physical one; the minus root collapses to nearly zero.',
    mistakes: ['Taking the minus root (gives a center distance far below (D + d)/2, so the pulleys would overlap)', 'Ignoring the (π/2)(D + d) term inside the root', 'Dividing by 8 instead of 4'],
    distractors: [
      v => {
        const a = (Math.PI / 2) * (v.D + v.d);
        const x = v.L - a;
        return (x + Math.sqrt(x * x - 2 * Math.pow(v.D - v.d, 2))) / 8;
      },
      v => (v.L - (Math.PI / 2) * (v.D + v.d)) / 4,
      v => (v.L + (Math.PI / 2) * (v.D + v.d)) / 2,
      v => {
        const a = (Math.PI / 2) * (v.D + v.d);
        const x = v.L - a;
        return (x + Math.sqrt(x * x - 2 * Math.pow(v.D - v.d, 2))) / 2;
      },
    ],
  },
  {
    formulaId: 'a-arc-length', area: 'A', unknown: 'L_Arc',
    formulaText: 'L_Arc = (π D A) / 360',
    unit: 'm', round: 3,
    vars: [
      { symbol: 'D', ascii: 'D', label: 'arc diameter', unit: 'm', min: 0.3, max: 2.0, decimals: 2 },
      { symbol: 'A', ascii: 'A', label: 'included angle', unit: '°', min: 20, max: 180, decimals: 0 },
    ],
    conversions: [
      { ascii: 'D', unit: 'ft', factor: 3.28084, fromUnit: 'm' },
    ],
    compute: v => (Math.PI * v.D * v.A) / 360,
    context: 'the curved arch rib of a greenhouse frame in La Trinidad',
    verb: 'is being laid out with',
    unknownPhrase: 'the length of arc to be cut',
    keyConcept: 'Arc length = (πDA)/360, where D is the diameter and A the included angle in degrees. A quarter circle (A = 90°) gives πD/4, and a semicircle (A = 180°) gives πD/2.',
    mistakes: ['Using π D A / 180 (doubles the answer)', 'Using the radius where the diameter belongs', 'Forgetting that the 360 divisor converts the fraction of a full turn'],
    distractors: [
      v => (Math.PI * v.D * v.A) / 180,
      v => (Math.PI * (v.D / 2) * v.A) / 360,
      v => (v.D * v.A) / 2,
      v => (Math.PI * v.D * (v.A * Math.PI / 180)) / 360,
    ],
  },
  {
    formulaId: 'a-arc-of-contact', area: 'A', unknown: 'θ',
    formulaText: 'θ = 180° − 2 sin⁻¹[(D − d)/(2C)]',
    unit: '°', round: 1,
    vars: [
      { symbol: 'D', ascii: 'D', label: 'large pulley diameter', unit: 'mm', min: 250, max: 500, decimals: 0 },
      { symbol: 'd', ascii: 'd', label: 'small pulley diameter', unit: 'mm', min: 100, max: 200, decimals: 0 },
      { symbol: 'C', ascii: 'C', label: 'center-to-center distance', unit: 'mm', min: 400, max: 900, decimals: 0 },
    ],
    conversions: [
      { ascii: 'D', unit: 'in', factor: 0.0393701, fromUnit: 'mm' },
      { ascii: 'd', unit: 'in', factor: 0.0393701, fromUnit: 'mm' },
      { ascii: 'C', unit: 'in', factor: 0.0393701, fromUnit: 'mm' },
    ],
    compute: v => 180 - 2 * (Math.asin((v.D - v.d) / (2 * v.C)) * 180) / Math.PI,
    context: 'the open belt drive on a coconut dehusker in Quezon province',
    verb: 'is set up with',
    unknownPhrase: 'the arc of contact on the small pulley',
    keyConcept: 'Arc of contact on the small pulley = 180° − 2 sin⁻¹[(D − d)/(2C)]. The wrap falls as the center distance grows, approaching 180° only when the pulleys sit almost on top of each other. The matching wrap on the large pulley is 180° + 2 sin⁻¹[(D − d)/(2C)].',
    mistakes: ['Adding instead of subtracting the arcsine term', 'Forgetting to convert the arcsine result from radians to degrees', 'Using 2C instead of C in the denominator'],
    distractors: [
      v => 180 + 2 * (Math.asin((v.D - v.d) / (2 * v.C)) * 180) / Math.PI,
      v => 180 - 2 * Math.asin((v.D - v.d) / v.C),
      v => 2 * (Math.asin((v.D - v.d) / (2 * v.C)) * 180) / Math.PI,
    ],
  },
  {
    formulaId: 'a-belt-hp-requirement', area: 'A', unknown: 'HP',
    formulaText: 'HP = (F₁ − F₂) v / 33,000',
    unit: 'hp', round: 2,
    vars: [
      { symbol: 'F_1', ascii: 'F1', label: 'tight-side tension', unit: 'lbf', min: 150, max: 400, decimals: 0 },
      { symbol: 'F_2', ascii: 'F2', label: 'slack-side tension', unit: 'lbf', min: 40, max: 140, decimals: 0 },
      { symbol: 'v', ascii: 'v', label: 'belt velocity', unit: 'ft/min', min: 1500, max: 4000, decimals: 0 },
    ],
    conversions: [
      { ascii: 'F1', unit: 'N', factor: 4.44822, fromUnit: 'lbf' },
      { ascii: 'F2', unit: 'N', factor: 4.44822, fromUnit: 'lbf' },
      { ascii: 'v', unit: 'm/s', factor: 0.00508, fromUnit: 'ft/min' },
    ],
    compute: v => ((v.F1 - v.F2) * v.v) / 33000,
    context: 'a flat belt drive on a rice mill in Bulacan',
    verb: 'operates at',
    unknownPhrase: 'the horsepower the belt drive is absorbing',
    keyConcept: 'Belt horsepower = (F₁ − F₂) v / 33,000, with forces in lbf and velocity in ft/min. The driving force is the tension difference, not the tight-side tension, because the slack side is being helped along rather than resisted.',
    mistakes: ['Using F₁ instead of (F₁ − F₂)', 'Using m/s with the 33,000 constant', 'Dividing by 33,000 twice'],
    distractors: [
      v => (v.F1 * v.v) / 33000,
      v => ((v.F1 - v.F2) * v.v) / 3300,
      v => ((v.F1 - v.F2) * v.v) / 66000,
    ],
  },
  {
    formulaId: 'a-belt-power-transmitted', area: 'A', unknown: 'P',
    formulaText: 'P = 2πTN  (N in rev/s; divide N in rpm by 60)',
    unit: 'W', round: 0,
    vars: [
      { symbol: 'T', ascii: 'T', label: 'shaft torque', unit: 'N·m', min: 100, max: 600, decimals: 0 },
      { symbol: 'N', ascii: 'N', label: 'shaft speed', unit: 'rpm', min: 600, max: 1800, decimals: 0 },
    ],
    conversions: [
      { ascii: 'T', unit: 'lbf·ft', factor: 0.737562, fromUnit: 'N·m' },
    ],
    compute: v => (2 * Math.PI * v.T * v.N) / 60,
    context: 'the drive shaft of a rice mill in Nueva Ecija',
    verb: 'transmits',
    unknownPhrase: 'the power carried by the shaft',
    keyConcept: 'Power from torque and speed is P = 2πTN when N is in rev/s. With N in rpm the result in watts is 2πTN/60, because 2π is the angle of one turn and 60 converts minutes to seconds.',
    mistakes: ['Not dividing rpm by 60 (answer 60× too large)', 'Using the 33,000 constant with SI torque', 'Dropping the 2π'],
    distractors: [
      v => 2 * Math.PI * v.T * v.N,
      v => (2 * Math.PI * v.T * v.N) / 600,
      v => (v.T * v.N) / 60,
    ],
  },
  {
    formulaId: 'a-belt-velocity', area: 'A', unknown: 'V',
    formulaText: 'V = πDN = 2πrN  (N in rev/s; divide N in rpm by 60)',
    unit: 'm/s', round: 2,
    vars: [
      { symbol: 'D', ascii: 'D', label: 'pulley diameter', unit: 'm', min: 0.2, max: 0.6, decimals: 3 },
      { symbol: 'N', ascii: 'N', label: 'pulley speed', unit: 'rpm', min: 800, max: 1800, decimals: 0 },
    ],
    conversions: [
      { ascii: 'D', unit: 'in', factor: 39.3701, fromUnit: 'm' },
    ],
    compute: v => (Math.PI * v.D * v.N) / 60,
    context: 'the belt drive of a hand tiller in Iloilo',
    verb: 'has',
    unknownPhrase: 'the belt velocity over the drive pulley',
    keyConcept: 'Belt velocity = πDN with N in rev/s. The belt makes one revolution per pulley revolution, so it travels the full circumference πD each turn; with N in rpm, divide by 60. The same relation in radius form is V = 2πrN.',
    mistakes: ['Not dividing rpm by 60', 'Using the radius where the diameter belongs', 'Omitting the π'],
    distractors: [
      v => Math.PI * v.D * v.N,
      v => (2 * Math.PI * v.D * v.N) / 60,
      v => (Math.PI * (v.D / 2) * v.N) / 60,
    ],
  },
  {
    formulaId: 'a-belt-life', area: 'A', unknown: 'L',
    // The handbook prints L = l/(v·N'). That form is dimensionally inconsistent:
    // the time for one pass over the belt is l/v, and the belt only fails after
    // N' passes, so dividing that time by the pass count makes the life shorter
    // the more durable the belt is. The dimensionally consistent reading is
    // life = (l/v)·N', which is what is implemented here; the printed form is
    // used as a distractor so a student who has the handbook in front of them
    // still recognises it as a wrong choice. Flagged for sign-off.
    formulaText: 'L = l · N′ / v   (belt life in hours — see keyConcept)',
    unit: 'h', round: 1,
    vars: [
      // Belt length is held to 1.1-1.9 m so that the "dropped the length" mistake
      // (N'/v) can never coincide with either the halved or the doubled answer.
      { symbol: 'l', ascii: 'l', label: 'belt length', unit: 'm', min: 1.1, max: 1.9, decimals: 2 },
      { symbol: 'v', ascii: 'v', label: 'belt speed', unit: 'm/s', min: 5, max: 20, decimals: 1 },
      { symbol: "N'", ascii: 'Np', label: 'rated pass count', unit: '', min: 5000, max: 50000, decimals: 0 },
    ],
    compute: v => (v.l * v.Np) / v.v,
    context: 'a replacement flat belt on a rice huller in Pangasinan',
    verb: 'was fitted with',
    unknownPhrase: 'the expected belt life',
    keyConcept: "Belt life = (l/v)·N′: l/v is the time for one pass over the whole belt, and N′ is the number of passes the maker rates it for, so the two multiply. The handbook prints l/(v·N′), which cannot be a life — it shrinks as the belt gets tougher. Confirm against the handbook print before publishing this entry.",
    mistakes: ["Dividing by N′ instead of multiplying (the handbook's printed form)", 'Reading N′ as a time in hours rather than a pass count', 'Mixing a length in inches with a speed in m/s'],
    distractors: [
      // The handbook's printed form is a valid mistake, but it lands around 1e-5
      // and the renderer deliberately drops near-zero options, so the other four
      // carry the question.
      v => v.l / (v.v * v.Np),
      v => v.Np / v.v,
      v => (v.l * v.Np) / v.v * 2,
      v => (v.l * v.Np) / v.v / 2,
    ],
  },
  {
    formulaId: 'a-speed-ratio', area: 'A', unknown: 'N_1',
    formulaText: 'N₁/N₂ = D₂/D₁   →   N₁ = N₂ D₂ / D₁',
    unit: 'rpm', round: 1,
    vars: [
      { symbol: 'N_2', ascii: 'N2', label: 'driven pulley speed', unit: 'rpm', min: 100, max: 600, decimals: 0 },
      { symbol: 'D_1', ascii: 'D1', label: 'driver pulley diameter', unit: 'mm', min: 150, max: 240, decimals: 0 },
      { symbol: 'D_2', ascii: 'D2', label: 'driven pulley diameter', unit: 'mm', min: 380, max: 500, decimals: 0 },
    ],
    conversions: [
      { ascii: 'N2', unit: 'rev/s', factor: 0.0166667, fromUnit: 'rpm' },
      { ascii: 'D1', unit: 'in', factor: 0.0393701, fromUnit: 'mm' },
      { ascii: 'D2', unit: 'in', factor: 0.0393701, fromUnit: 'mm' },
    ],
    compute: v => (v.N2 * v.D2) / v.D1,
    context: 'a two-pulley speed reduction on the drive of a thresher in Bicol',
    verb: 'uses',
    unknownPhrase: 'the speed of the driver pulley',
    keyConcept: 'For a belt drive, N₁/N₂ = D₂/D₁. The diameters appear "crossed": a larger driven pulley turns more slowly, so the driver must turn faster by the same factor.',
    mistakes: ['Inverting the diameter ratio (N₁ = N₂D₁/D₂)', 'Using the radius instead of the diameter', 'Cross-multiplying the wrong way'],
    distractors: [
      v => (v.N2 * v.D1) / v.D2,
      v => (v.N2 * v.D2) / v.D1 * 2,
      v => (v.N2 * v.D2) / v.D1 / 2,
      v => (v.N2 * v.D2) / v.D1 / 4,
    ],
  },
  {
    formulaId: 'a-speed-diameter-relation', area: 'A', unknown: 'D_1',
    formulaText: 'D₁N₁ = D₂N₂   →   D₁ = D₂ N₂ / N₁',
    unit: 'mm', round: 1,
    vars: [
      // The speed ratio is kept to 2-4.5:1. A driver that must spin 10x faster
      // than the driven pulley makes the "flipped ratio" mistake land 100x away,
      // which reads as a typo rather than a plausible wrong answer.
      { symbol: 'N_1', ascii: 'N1', label: 'driver pulley speed', unit: 'rpm', min: 600, max: 900, decimals: 0 },
      { symbol: 'N_2', ascii: 'N2', label: 'driven pulley speed', unit: 'rpm', min: 200, max: 290, decimals: 0 },
      { symbol: 'D_2', ascii: 'D2', label: 'driven pulley diameter', unit: 'mm', min: 200, max: 500, decimals: 0 },
    ],
    conversions: [
      { ascii: 'N1', unit: 'rev/s', factor: 0.0166667, fromUnit: 'rpm' },
      { ascii: 'N2', unit: 'rev/s', factor: 0.0166667, fromUnit: 'rpm' },
      { ascii: 'D2', unit: 'in', factor: 0.0393701, fromUnit: 'mm' },
    ],
    compute: v => (v.D2 * v.N2) / v.N1,
    context: 'the belt drive pairing selected for a rice mill line in Bulacan',
    verb: 'uses',
    unknownPhrase: 'the diameter required on the driver pulley',
    keyConcept: 'Diameter and speed trade off inversely: D₁N₁ = D₂N₂. Choosing a driver diameter means dividing the driven diameter by the speed ratio, so a driver that must run faster than the driven pulley is also the smaller pulley.',
    mistakes: ['Multiplying instead of dividing by the speed ratio', 'Using N₁/N₂ instead of N₂/N₁', 'Swapping the diameters'],
    distractors: [
      v => (v.D2 * v.N2) / (v.N1 * Math.PI),
      v => (v.D2 * v.N2) / v.N1 / 2,
      v => (v.D2 * v.N2) / v.N1 * 2,
      v => (v.D2 * v.N1) / v.N2,
    ],
  },

  // -------------------------------------------------------------------------
  // Shafts, Sprockets & Chains
  // -------------------------------------------------------------------------
  {
    formulaId: 'a-shaft-power-general', area: 'A', unknown: 'P',
    formulaText: 'P (kW) = (T (N·m) × N (rpm)) / 9,550',
    unit: 'kW', round: 2,
    vars: [
      { symbol: 'T', ascii: 'T', label: 'shaft torque', unit: 'N·m', min: 200, max: 1200, decimals: 0 },
      { symbol: 'N', ascii: 'N', label: 'shaft speed', unit: 'rpm', min: 600, max: 2400, decimals: 0 },
    ],
    conversions: [
      { ascii: 'T', unit: 'lbf·ft', factor: 0.737562, fromUnit: 'N·m' },
    ],
    compute: v => (v.T * v.N) / 9550,
    context: 'the main drive shaft of a rice mill in Nueva Ecija',
    verb: 'is delivering',
    unknownPhrase: 'the power rating of the shaft',
    keyConcept: 'The general power equation in SI form is P (kW) = T (N·m) × N (rpm) / 9,550. The 9,550 already folds in the 2π of one revolution and the 60 that turns rpm into rev/s; the same torque and speed split across two shafts means each one carries the same power.',
    mistakes: ['Using the 33,000 constant with an N·m torque', 'Carrying the 2π into the 9,550 and dividing by 6,000', 'Halving or doubling the result'],
    distractors: [
      v => (v.T * v.N) / 33000,
      v => (2 * Math.PI * v.T * v.N) / 6000,
      v => (v.T * v.N) / 9550 / 2,
      v => (v.T * v.N) / 9550 * 2,
    ],
  },
  {
    formulaId: 'a-shaft-power-delivered', area: 'A', unknown: 'P',
    formulaText: 'P (kW) = (F (N) × V (m/s)) / 1,000',
    unit: 'kW', round: 3,
    vars: [
      { symbol: 'F', ascii: 'F', label: 'transmitted force', unit: 'N', min: 500, max: 6000, decimals: 0 },
      { symbol: 'V', ascii: 'V', label: 'belt speed', unit: 'm/s', min: 1, max: 12, decimals: 2 },
    ],
    conversions: [
      { ascii: 'F', unit: 'lbf', factor: 0.224809, fromUnit: 'N' },
      { ascii: 'V', unit: 'ft/min', factor: 196.85, fromUnit: 'm/s' },
    ],
    compute: v => (v.F * v.V) / 1000,
    context: 'the belt drive on a coconut dehusker in Quezon province',
    verb: 'is delivering',
    unknownPhrase: 'the power delivered at the shaft',
    keyConcept: 'The force-velocity form of shaft power is P (kW) = F (N) × V (m/s) / 1,000. It must agree with the torque form P = TN/9,550 for the same shaft, since F = T/r and V = πDN.',
    mistakes: ['Reaching for the shaft formula and carrying the 2π across as well', 'Dropping a factor of ten from the /1,000', 'Halving or doubling the result'],
    distractors: [
      v => (2 * Math.PI * v.F * v.V) / 60000,
      v => (v.F * v.V) / 100,
      v => (v.F * v.V) / 1000 * 2,
      v => (v.F * v.V) / 1000 / 2,
    ],
  },
  {
    formulaId: 'a-shaft-diameter', area: 'A', unknown: 'D',
    // Torque is in N·m and stress in N/mm², so the N·m must become N·mm before
    // the cube root returns a length in mm. Folding that 1,000 into the printed
    // 16 keeps the substitution the walkthrough shows honest.
    formulaText: 'D = ∛(16 000 T / (π τ))   (T in N·m, τ in N/mm²)',
    unit: 'mm', round: 2,
    vars: [
      { symbol: 'T', ascii: 'T', label: 'transmitted torque', unit: 'N·m', min: 5, max: 150, decimals: 0 },
      { symbol: 'τ', ascii: 'sg', label: 'allowable shear stress', unit: 'N/mm²', min: 40, max: 250, decimals: 1 },
    ],
    conversions: [
      { ascii: 'T', unit: 'lbf·ft', factor: 0.737562, fromUnit: 'N·m' },
      { ascii: 'sg', unit: 'psi', factor: 145.038, fromUnit: 'N/mm²' },
    ],
    compute: v => Math.cbrt((16000 * v.T) / (Math.PI * v.sg)),
    context: 'a rotating shaft being designed for a rice mill line in Bulacan',
    verb: 'must carry',
    unknownPhrase: 'the minimum shaft diameter',
    keyConcept: 'Solid-shaft torsion gives d = ∛(16T/πτ) with T in N·mm and τ in N/mm²; with T in N·m the 1,000 is folded in to give 16 000T. The cube root is why shaft sizing is forgiving: doubling the torque only multiplies the diameter by ∛2 ≈ 1.26.',
    mistakes: ['Squaring the stress term instead of taking the cube root', 'Using 16τT instead of 16T/τ', 'Forgetting to turn N·m into N·mm'],
    distractors: [
      v => Math.sqrt((16000 * v.T) / (Math.PI * v.sg)),
      v => Math.cbrt((16 * v.T) / (Math.PI * v.sg)),
      v => Math.cbrt((16000 * v.T * v.sg) / Math.PI),
      v => Math.cbrt((16000 * v.T) / (Math.PI * v.sg)) * 2,
    ],
  },
  {
    formulaId: 'a-chain-velocity', area: 'A', unknown: 'V',
    formulaText: 'V = (N × P × T) / 12',
    unit: 'ft/min', round: 1,
    vars: [
      { symbol: 'N', ascii: 'N', label: 'sprocket speed', unit: 'rpm', min: 60, max: 600, decimals: 0 },
      { symbol: 'P', ascii: 'P', label: 'chain pitch', unit: 'in', min: 0.5, max: 1.5, decimals: 2 },
      { symbol: 'T', ascii: 'T', label: 'sprocket tooth count', unit: '', min: 15, max: 40, decimals: 0 },
    ],
    conversions: [
      { ascii: 'P', unit: 'mm', factor: 25.4, fromUnit: 'in' },
    ],
    compute: v => (v.N * v.P * v.T) / 12,
    context: 'the roller chain drive on a rice thresher in Isabela',
    verb: 'has',
    unknownPhrase: 'the chain velocity',
    keyConcept: 'The sprocket advances one pitch per tooth, so a sprocket at N rpm pulls N × teeth pitches per minute. Multiplying by the pitch in inches gives in/min; the division by 12 is only the inches-to-feet conversion.',
    mistakes: ['Forgetting the /12 (leaves the answer in in/min)', 'Using the loop length in pitches instead of the pitch in inches', 'Mixing a mm pitch with the /12'],
    distractors: [
      v => v.N * v.P * v.T,
      v => (v.N * v.P * v.T) / 120,
      v => (v.N * v.P) / 12,
    ],
  },
  {
    formulaId: 'a-chain-length-pitches', area: 'A', unknown: 'L',
    formulaText: 'L = (T_L + T_S)/2 + 2C + [((T_L − T_S)/(2π))²] / C',
    unit: 'pitches', round: 1,
    vars: [
      { symbol: 'T_L', ascii: 'TL', label: 'large sprocket tooth count', unit: '', min: 17, max: 32, decimals: 0 },
      { symbol: 'T_S', ascii: 'TS', label: 'small sprocket tooth count', unit: '', min: 8, max: 16, decimals: 0 },
      { symbol: 'C', ascii: 'C', label: 'center distance', unit: 'pitches', min: 20, max: 80, decimals: 0 },
    ],
    compute: v => (v.TL + v.TS) / 2 + 2 * v.C + Math.pow((v.TL - v.TS) / (2 * Math.PI), 2) / v.C,
    context: 'a roller chain drive on a rice thresher in Isabela',
    verb: 'uses',
    unknownPhrase: 'the chain length required, in pitches',
    keyConcept: 'Chain length in pitches = (T_L + T_S)/2 + 2C + [((T_L − T_S)/(2π))²]/C. The first two terms wrap the chain around the two sprockets; the last is the sprocket-size correction, which grows as the tooth counts diverge. In practice the result is rounded up to the next whole pitch.',
    mistakes: ['Dividing by 2C instead of C', 'Omitting the sprocket-size correction entirely', 'Using tooth counts in cm'],
    distractors: [
      v => (v.TL + v.TS) / 2 + 2 * v.C + Math.pow(v.TL - v.TS, 2) / (2 * Math.PI * v.C),
      v => (v.TL + v.TS) / 2 + 2 * v.C + Math.pow((v.TL - v.TS) / (2 * Math.PI), 2) * v.C,
      v => (v.TL + v.TS) / 2 + v.C + Math.pow((v.TL - v.TS) / (2 * Math.PI), 2) / v.C,
    ],
  },
  {
    formulaId: 'a-chain-length', area: 'A', unknown: 'C',
    // The handbook prints the chain-length relation twice (as "Length in Pitches"
    // and as "Length of Chain (in pitches)"). Rather than ask the same question
    // twice, this entry solves the same equation the other way round: the chain
    // length in pitches is known and the center distance is not, which is the
    // usual shop problem when a spare chain has to be matched to an existing
    // sprocket pair. Closed form, no iteration.
    formulaText: 'C = [(L − (T_L+T_S)/2) + √((L − (T_L+T_S)/2)² − 2((T_L − T_S)/(2π))²)] / 4',
    unit: 'pitches', round: 1,
    vars: [
      { symbol: 'L', ascii: 'L', label: 'chain length', unit: 'pitches', min: 60, max: 300, decimals: 0 },
      { symbol: 'T_L', ascii: 'TL', label: 'large sprocket tooth count', unit: '', min: 20, max: 40, decimals: 0 },
      { symbol: 'T_S', ascii: 'TS', label: 'small sprocket tooth count', unit: '', min: 10, max: 18, decimals: 0 },
    ],
    compute: v => {
      const a = (v.TL + v.TS) / 2;
      const b = Math.pow((v.TL - v.TS) / (2 * Math.PI), 2);
      const x = v.L - a;
      return (x + Math.sqrt(x * x - 8 * b)) / 4;
    },
    context: 'a spare roller chain being matched to a sprocket pair on a rice thresher in Isabela',
    verb: 'measures',
    unknownPhrase: 'the center-to-center distance the chain should be set to',
    keyConcept: 'The chain-length equation L = 2C + a + b/C, with a = (T_L+T_S)/2 and b = [((T_L−T_S)/(2π))²], is a quadratic in C: 2C² − (L − a)C + b = 0. The plus root is the workable one; the minus root collapses to a fraction of a pitch, which is why it never appears as an option here.',
    mistakes: ['Taking the minus root (gives a center distance far too small to span the sprockets)', 'Dropping the tooth-count term a from L − a', 'Dividing by 8 instead of 4'],
    distractors: [
      v => (v.L - (v.TL + v.TS) / 2) / 4,
      v => (v.L + (v.TL + v.TS) / 2) / 2,
      v => v.L / 2,
    ],
  },
  {
    formulaId: 'a-vbelt-power-rating', area: 'A', unknown: 'Power Rating',
    formulaText: 'Power Rating = Table (Base) Rating + Additional Power for Speed Ratio',
    unit: 'hp', round: 2,
    vars: [
      { symbol: 'R_b', ascii: 'Rb', label: 'table base rating', unit: 'hp', min: 1, max: 10, decimals: 2 },
      { symbol: 'P_a', ascii: 'Pa', label: 'speed-ratio allowance', unit: 'hp', min: 0.5, max: 5, decimals: 2 },
    ],
    compute: v => v.Rb + v.Pa,
    context: 'the V-belt selection for a banana conveyor in Davao',
    verb: 'uses',
    unknownPhrase: 'the total V-belt power rating',
    keyConcept: "A V-belt's rating is its table base rating plus the manufacturer's allowance for how far the drive departs from the standard (small) pulley speed. The two are read off the same table and added, not multiplied.",
    mistakes: ['Multiplying the two instead of adding', 'Using the base rating alone', 'Taking only half of the speed-ratio allowance'],
    distractors: [
      v => v.Rb * v.Pa,
      v => v.Rb,
      v => v.Rb + v.Pa / 2,
      v => v.Rb + v.Pa * 2,
    ],
  },
  {
    formulaId: 'a-vbelt-corrected-rating', area: 'A', unknown: 'Corrected Power Rating',
    formulaText: 'Corrected Power Rating = Power Rating × Arc-of-Contact Factor × Belt-Length Correction Factor',
    unit: 'hp', round: 3,
    vars: [
      { symbol: 'PR', ascii: 'PR', label: 'power rating', unit: 'hp', min: 1, max: 12, decimals: 2 },
      // The arc-of-contact factor is capped below 1.00 on purpose: a factor of
      // exactly 1.00 on both corrections collapses the correct answer onto two
      // distractors and leaves only three distinct options.
      { symbol: 'f_a', ascii: 'fa', label: 'arc-of-contact factor', unit: 'decimal', min: 0.7, max: 0.95, decimals: 2 },
      { symbol: 'f_l', ascii: 'fl', label: 'belt-length correction factor', unit: 'decimal', min: 0.8, max: 1.1, decimals: 2 },
    ],
    compute: v => v.PR * v.fa * v.fl,
    context: 'a V-belt drive on a rice mill conveyor in Bulacan',
    verb: 'has',
    unknownPhrase: 'the corrected power rating per belt',
    keyConcept: 'The corrected rating scales the table rating by two correction factors, one for arc of contact and one for belt length. Both are at or near 1, so the corrected rating is close to the base rating; it is the number of belts, not the rating, that absorbs a bad arc of contact.',
    mistakes: ['Adding the factors instead of multiplying them', 'Applying only one of the two factors', 'Using the corrected rating as the per-belt capacity without re-deriving it'],
    distractors: [
      v => v.PR * v.fa,
      v => v.PR * v.fl,
      v => v.PR * (v.fa + v.fl),
      v => v.PR * v.fa * v.fl * 2,
      v => v.PR * v.fa * v.fl / 2,
    ],
  },
  {
    formulaId: 'a-number-of-vbelts', area: 'A', unknown: 'No. of Belts',
    formulaText: 'No. of Belts = Design Power / Belt Capacity',
    unit: 'belts', round: 2,
    vars: [
      { symbol: 'DP', ascii: 'DP', label: 'design power', unit: 'hp', min: 8, max: 30, decimals: 2 },
      { symbol: 'BC', ascii: 'BC', label: 'per-belt capacity', unit: 'hp', min: 2, max: 8, decimals: 2 },
    ],
    compute: v => v.DP / v.BC,
    context: 'a V-belt drive on a feed mixer at a poultry farm in Batangas',
    verb: 'must be sized for',
    unknownPhrase: 'the belt count the rating table gives',
    keyConcept: 'The belt count is the design power divided by the corrected capacity of one belt. The table gives this as a ratio; the shop rounds up to the next whole belt before ordering, so 3.6 belts from the table means four belts fitted.',
    mistakes: ['Multiplying instead of dividing', 'Using the base rating rather than the corrected capacity as the per-belt capacity', 'Reading the table ratio as a belt count without rounding up'],
    distractors: [
      v => (v.DP * 2) / v.BC,
      v => (v.DP / v.BC) / 2,
      v => v.DP / (v.BC - 1),
      v => v.DP / (v.BC * 1.1),
    ],
  },
  {
    formulaId: 'a-vbelt-design-power', area: 'A', unknown: 'DP',
    formulaText: 'DP = NPR × SF',
    unit: 'hp', round: 2,
    vars: [
      { symbol: 'NPR', ascii: 'NPR', label: 'net power', unit: 'hp', min: 2, max: 25, decimals: 2 },
      { symbol: 'SF', ascii: 'SF', label: 'service factor', unit: 'decimal', min: 1.05, max: 1.8, decimals: 2 },
    ],
    compute: v => v.NPR * v.SF,
    context: 'a V-belt drive on a rice mill conveyor in Nueva Ecija',
    verb: 'needs',
    unknownPhrase: 'the design power for the belt selection',
    keyConcept: 'Design power = net power required × service factor. The service factor is the allowance for shock, starting torque and duty, so the belt is never sized on the steady-state load alone — it is sized on the load plus the shock the machine throws at it.',
    mistakes: ['Dividing by the service factor', 'Treating the service factor as a percentage and adding it', 'Omitting the factor entirely'],
    distractors: [
      v => v.NPR / v.SF,
      v => v.NPR + v.SF,
      v => v.NPR * v.SF * 2,
    ],
  },
  {
    formulaId: 'a-sprocket-pitch-diameter', area: 'A', unknown: 'DP',
    formulaText: 'DP = P / sin(180° / T)',
    unit: 'in', round: 3,
    vars: [
      { symbol: 'P', ascii: 'P', label: 'chain pitch', unit: 'in', min: 0.5, max: 1.5, decimals: 2 },
      { symbol: 'T', ascii: 'T', label: 'sprocket tooth count', unit: '', min: 15, max: 40, decimals: 0 },
    ],
    conversions: [
      { ascii: 'P', unit: 'mm', factor: 25.4, fromUnit: 'in' },
    ],
    compute: v => v.P / Math.sin(Math.PI / v.T),
    context: 'a roller chain sprocket being matched to a chain on a rice thresher in Isabela',
    verb: 'is matched to',
    unknownPhrase: 'the pitch diameter of the sprocket',
    keyConcept: 'Pitch diameter = pitch ÷ sin(180°/T). The tooth centres form a circle, so the pitch is a chord of it and the diameter is the chord divided by the sine of the half angle — which is why the pitch diameter is larger than the pitch itself and grows with tooth count.',
    mistakes: ['Using degrees directly in the sine without converting to radians', 'Using cos instead of sin', 'Halving or doubling the result'],
    distractors: [
      v => v.P / (Math.PI / v.T),
      v => v.P / Math.cos(Math.PI / v.T),
      v => (v.P / Math.sin(Math.PI / v.T)) * 2,
      v => (v.P / Math.sin(Math.PI / v.T)) / 2,
    ],
  },
  {
    formulaId: 'a-power-coefficient', area: 'A', unknown: 'C_p',
    formulaText: 'C_p = Actual Power Developed / Theoretical (Available) Power',
    unit: '', round: 3,
    vars: [
      // Real power developed can never exceed the wind power available, so the
      // ranges are kept apart to keep the coefficient below 1.
      { symbol: 'P_act', ascii: 'Pact', label: 'actual power', unit: 'W', min: 200, max: 450, decimals: 0 },
      { symbol: 'P_th', ascii: 'Pth', label: 'theoretical power available', unit: 'W', min: 600, max: 1500, decimals: 0 },
    ],
    compute: v => v.Pact / v.Pth,
    context: 'a multi-bladed wind pump being tested on a windmill site in Ilocos Norte',
    verb: 'was tested at',
    unknownPhrase: 'the power coefficient of the rotor',
    keyConcept: "The power coefficient (Cp) is the fraction of the wind's available power that the rotor actually captures. It is dimensionless, and because no rotor beats Betz's limit of 0.593 in practice, it must lie between 0 and 1 — a value above 1 means the reference power was measured wrong.",
    mistakes: ['Dividing the reference power by the developed power', 'Comparing against the Betz limit of 0.593 instead of the actual wind power', 'Reporting the result as a percentage without saying so'],
    distractors: [
      v => v.Pth / v.Pact,
      v => v.Pact / (v.Pth * 0.593),
      v => (v.Pact / v.Pth) * 100,
      v => (v.Pact / v.Pth) / 2,
    ],
  },
];
