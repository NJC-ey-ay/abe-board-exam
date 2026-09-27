// Area A drill specs, part 4 of 4: Biogas Plant Design, Implements (width of
// cut), and Distance Travelled.
//
// Every `compute` here implements the handbook expression in src/data/formulas.ts
// and has a hand-verified case in scripts/data/golden-cases.json. Philippine
// context throughout (carabao and piggery backyards, poultry and dairy farms,
// rice and vegetable farms).
//
// Note on `verb`: the renderer prints "<context> <verb> <all the givens>", so a
// verb must not restate a given.
//
// Constants and bases, pinned so the walkthroughs actually multiply out:
//   a-biogas-production      G is the specific yield in m3/kg: 0.034 for
//                            carabao/cow, 0.063 for hog, 0.065 for chicken. It is
//                            carried as a var so the herd type is visible in the
//                            substitution rather than hidden in the constant.
//   a-digester-volume        I_s = manure / (D_m x 0.5): the 0.5 is the 1:1 by
//                            volume dilution water, and D_m is the manure bulk
//                            density of about 950-970 kg/m3.
//   a-gasholder-volume       the 1.3 is the 30% safety factor, applied to the
//                            longest idle window U.
//   a-disk-harrow-width      k is a type coefficient (0.3 single action, 0.6
//                            offset, 0.85 double offset, 1.2 tandem) rather than a
//                            continuous quantity, so it is sampled as a table
//                            value inside its own range and the table is printed
//                            in the variable label.
import type { DrillSpec } from './formula-drills';

export const areaAFarmSpecs: DrillSpec[] = [
  // -------------------------------------------------------------------------
  // Biogas Plant Design
  // -------------------------------------------------------------------------
  {
    formulaId: 'a-biogas-production', area: 'A', unknown: 'P',
    formulaText: 'P (m³/day) = N × M × G',
    unit: 'm³/day', round: 2,
    vars: [
      { symbol: 'N', ascii: 'N', label: 'number of animal heads', unit: '', min: 2, max: 20, decimals: 0 },
      { symbol: 'M', ascii: 'M', label: 'daily manure production per head', unit: 'kg/head', min: 2, max: 13, decimals: 1 },
      { symbol: 'G', ascii: 'G', label: 'specific biogas production', unit: 'm³/kg', min: 0.034, max: 0.065, decimals: 3 },
    ],
    conversions: [
      { ascii: 'M', unit: 'lb/head', factor: 2.20462, fromUnit: 'kg/head' },
      { ascii: 'G', unit: 'ft³/lb', factor: 0.062428, fromUnit: 'm³/kg' },
    ],
    compute: v => v.N * v.M * v.G,
    context: 'the backyard digester of a carabao raiser in Bulacan',
    verb: 'is fed by',
    unknownPhrase: 'the daily biogas production of the herd',
    keyConcept: 'Biogas production is heads times the manure each head gives per day times the gas that manure yields: G is 0.034 m³/kg for carabao or cow and 0.063 to 0.065 for hog or chicken. The yield G is the part students forget: a kilogram of pig manure gives nearly twice the gas of a kilogram of carabao dung, because the smaller animal digests its feed faster.',
    mistakes: ['Forgetting the specific yield and reporting only the manure mass', 'Dropping the herd size', 'Using G as a percentage instead of a volume per mass'],
    distractors: [
      v => v.N * v.M,
      v => v.N * v.G,
      v => (v.N * v.M * v.G) * 2,
      v => (v.N * v.M * v.G) / 2,
    ],
  },
  {
    formulaId: 'a-biogas-consumption', area: 'A', unknown: 'C',
    // The handbook writes the general sum C = N1B1T1 + N2B2T2 + ... Each term is
    // quantity x draw per unit x hours of use, and the two device types are the
    // handbook's own examples: a 4-in burner at 0.28 and a 25-W mantle lamp at 0.1.
    formulaText: 'C (m³/day) = N₁B₁T₁ + N₂B₂T₂ + …',
    unit: 'm³/day', round: 2,
    vars: [
      { symbol: 'N₁', ascii: 'N1', label: 'number of 4-in burners', unit: '', min: 1, max: 3, decimals: 0 },
      { symbol: 'B₁', ascii: 'B1', label: 'burner draw per unit', unit: 'm³/day', min: 0.2, max: 0.35, decimals: 2 },
      { symbol: 'T₁', ascii: 'T1', label: 'burner hours per day', unit: 'h', min: 2, max: 12, decimals: 0 },
      { symbol: 'N₂', ascii: 'N2', label: 'number of mantle lamps', unit: '', min: 1, max: 4, decimals: 0 },
      { symbol: 'B₂', ascii: 'B2', label: 'lamp draw per unit', unit: 'm³/day', min: 0.05, max: 0.15, decimals: 2 },
      { symbol: 'T₂', ascii: 'T2', label: 'lamp hours per day', unit: 'h', min: 2, max: 12, decimals: 0 },
    ],
    compute: v => v.N1 * v.B1 * v.T1 + v.N2 * v.B2 * v.T2,
    context: 'the household biogas installation of a farm school in Marinduque',
    verb: 'runs',
    unknownPhrase: 'the total daily biogas consumption',
    keyConcept: 'Consumption adds up one term per device: how many there are, how much gas each draws, and how long it runs. The hours matter as much as the count — a single burner run all day costs more than four lamps run for an hour, and a gasholder has to be sized for the pattern, not just the peak.',
    mistakes: ['Leaving the hours out of one device and counting it as if it ran all day', 'Adding the device counts and draws together before multiplying by the hours', 'Treating each device as running the whole day'],
    // Four generators so a single collision still leaves three usable options.
    // The first two always land below the answer and the last two above it, so
    // the only pair that can meet is the third with the 2x.
    distractors: [
      v => v.N1 * v.B1 * v.T1 + v.N2 * v.B2,
      v => v.N1 * v.B1 + v.N2 * v.B2 * v.T2,
      v => (v.N1 + v.N2) * (v.B1 + v.B2) * (v.T1 + v.T2),
      v => (v.N1 * v.B1 * v.T1 + v.N2 * v.B2 * v.T2) * 2,
    ],
  },
  {
    formulaId: 'a-digester-volume', area: 'A', unknown: 'V_d',
    formulaText: 'V_d (m³) = I_s × R,  with I_s = manure production / (D_m × 0.5)',
    unit: 'm³', round: 2,
    vars: [
      { symbol: 'M_p', ascii: 'Mp', label: 'manure production', unit: 'kg/day', min: 20, max: 300, decimals: 0 },
      { symbol: 'D_m', ascii: 'Dm', label: 'manure bulk density', unit: 'kg/m³', min: 950, max: 970, decimals: 0 },
      { symbol: 'R', ascii: 'R', label: 'retention period', unit: 'days', min: 15, max: 60, decimals: 0 },
    ],
    compute: v => (v.Mp / (v.Dm * 0.5)) * v.R,
    context: 'the fixed-dome digester of a poultry raiser in Isabela',
    verb: 'receives',
    unknownPhrase: 'the digester volume the design needs',
    keyConcept: 'A digester is sized by how much slurry goes in each day and how long it must stay. The slurry rate comes from the manure mass divided by its bulk density and by the 0.5 that accounts for the 1:1 dilution water — manure alone is far too thick to mix. Multiply that daily rate by the retention period and the volume falls out.',
    mistakes: ['Forgetting the 0.5 and sizing the digester for undiluted manure', 'Putting the 0.5 on the manure instead of the density', 'Treating the retention period as a number of months'],
    distractors: [
      v => (v.Mp / v.Dm) * v.R,
      v => ((v.Mp * 0.5) / v.Dm) * v.R,
      v => (v.Mp / (v.Dm * 0.5)) * v.R * 2,
    ],
  },
  {
    formulaId: 'a-gasholder-volume', area: 'A', unknown: 'V_g',
    formulaText: 'V_g (m³) = 1.3 U E   (30% safety factor)',
    unit: 'm³', round: 2,
    vars: [
      { symbol: 'U', ascii: 'U', label: 'longest idle window', unit: 'h/day', min: 8, max: 14, decimals: 1 },
      { symbol: 'E', ascii: 'E', label: 'biogas accumulation rate', unit: 'm³/h', min: 0.5, max: 5, decimals: 2 },
    ],
    conversions: [
      { ascii: 'E', unit: 'ft³/h', factor: 35.3147, fromUnit: 'm³/h' },
    ],
    compute: v => 1.3 * v.U * v.E,
    context: 'the gasholder of a dairy plant that has no continuously running gas appliance',
    verb: 'is sized from',
    unknownPhrase: 'the gasholder volume the plant needs',
    keyConcept: 'When nothing is burning gas, everything the digester makes has to go somewhere, and the gasholder is sized for the longest such window multiplied by the rate of production. The 1.3 is the 30% safety margin on top, so the holder never has to be the reason the plant shuts down.',
    mistakes: ['Leaving out the 1.3 safety factor', 'Using the daily idle hours as though they were a rate', 'Sizing the holder for the peak hour rather than the whole idle window'],
    distractors: [
      v => v.U * v.E,
      v => 1.3 * v.U * v.E / 2,
      v => 1.3 * v.U * v.E * 2,
    ],
  },
  {
    formulaId: 'a-animal-heads-required', area: 'A', unknown: 'N_r',
    formulaText: 'N_r = C / (G × M)',
    unit: 'heads', round: 1,
    vars: [
      { symbol: 'C', ascii: 'C', label: 'biogas consumption', unit: 'm³/day', min: 2, max: 15, decimals: 2 },
      { symbol: 'G', ascii: 'G', label: 'specific biogas production', unit: 'm³/kg', min: 0.034, max: 0.065, decimals: 3 },
      { symbol: 'M', ascii: 'M', label: 'daily manure production per head', unit: 'kg/head', min: 3, max: 13, decimals: 1 },
    ],
    conversions: [
      { ascii: 'C', unit: 'ft³/day', factor: 35.3147, fromUnit: 'm³/day' },
      { ascii: 'M', unit: 'lb/head', factor: 2.20462, fromUnit: 'kg/head' },
    ],
    compute: v => v.C / (v.G * v.M),
    context: 'a hoggery that has to cover the cooking needs of a village in Cavite',
    verb: 'plans for',
    unknownPhrase: 'the number of animal heads the herd must have',
    keyConcept: 'This is the herd size that balances the gas demand: the consumption divided by what one head produces. Both terms in the denominator matter — switching from carabao to hogs at the same manure output cuts the herd needed by nearly half, because the specific yield is almost twice as high.',
    mistakes: ['Multiplying the demand by the yield per head instead of dividing', 'Dividing by the yield and forgetting the manure per head', 'Reading G as a percentage of the manure mass'],
    distractors: [
      v => v.C * v.G * v.M,
      v => (v.C / (v.G * v.M)) * 2,
      v => (v.C / (v.G * v.M)) / 2,
    ],
  },
  // -------------------------------------------------------------------------
  // Implements — Width of Cut
  // -------------------------------------------------------------------------
  {
    formulaId: 'a-disk-harrow-width', area: 'A', unknown: 'W',
    formulaText: 'W = 0.95 N S + k D   (m and mm in the same units)',
    unit: 'mm', round: 1,
    vars: [
      { symbol: 'N', ascii: 'N', label: 'number of disk gangs', unit: '', min: 4, max: 20, decimals: 0 },
      { symbol: 'S', ascii: 'S', label: 'disk spacing', unit: 'mm', min: 150, max: 300, decimals: 0 },
      { symbol: 'D', ascii: 'D', label: 'disk diameter', unit: 'mm', min: 400, max: 700, decimals: 0 },
      { symbol: 'k', ascii: 'k', label: 'type coefficient k', unit: '', min: 0.3, max: 1.2, decimals: 1 },
    ],
    conversions: [
      { ascii: 'S', unit: 'in', factor: 0.0393701, fromUnit: 'mm' },
      { ascii: 'D', unit: 'in', factor: 0.0393701, fromUnit: 'mm' },
    ],
    compute: v => 0.95 * v.N * v.S + v.k * v.D,
    context: 'the tandem disk harrow of a rice farm in Ilocos Norte',
    verb: 'has',
    unknownPhrase: 'the width of cut it gives',
    keyConcept: 'A disk harrow cuts the width its disks cover at 0.95 of the nominal spacing — the 5% is the overlap between adjacent disks — and then adds a term for the extra width the type coefficient allows. The table value of k is 0.3 for a single action, 0.6 for an offset, 0.85 for a double offset and 1.2 for a tandem frame, so the same set of disks on a tandem frame cuts wider than the same disks singly.',
    mistakes: ['Forgetting the kD term and quoting only the disk spacing', 'Using the disk spacing as the cut width without the 0.95 overlap factor', 'Reading the coefficient as a multiplier on the whole expression'],
    distractors: [
      v => 0.95 * v.N * v.S,
      v => (0.95 * v.N * v.S + v.k * v.D) * 2,
      v => (0.95 * v.N * v.S + v.k * v.D) * 3,
    ],
  },
  {
    formulaId: 'a-disk-plow-width', area: 'A', unknown: 'W',
    formulaText: 'W = 0.95 N S + D   (m and mm in the same units)',
    unit: 'mm', round: 1,
    vars: [
      { symbol: 'N', ascii: 'N', label: 'number of disks', unit: '', min: 2, max: 8, decimals: 0 },
      { symbol: 'S', ascii: 'S', label: 'disk spacing', unit: 'mm', min: 200, max: 400, decimals: 0 },
      { symbol: 'D', ascii: 'D', label: 'disk diameter', unit: 'mm', min: 500, max: 800, decimals: 0 },
    ],
    conversions: [
      { ascii: 'S', unit: 'in', factor: 0.0393701, fromUnit: 'mm' },
      { ascii: 'D', unit: 'in', factor: 0.0393701, fromUnit: 'mm' },
    ],
    compute: v => 0.95 * v.N * v.S + v.D,
    context: 'the disk plow pulled by a hand tractor in Quezon province',
    verb: 'has',
    unknownPhrase: 'the width of cut it gives',
    keyConcept: 'A disk plow adds the disk diameter to the nominal cut because the bottom of the furrow is as wide as the disk that opened it: 0.95 N S is what the disks reach above ground, and the full diameter is the bite below it. There is no type coefficient on a plow, which is the one thing that tells it apart from a harrow.',
    mistakes: ['Leaving out the disk diameter', 'Adding the diameter before the 0.95 factor instead of after', 'Using the disk spacing as the width of cut on its own'],
    distractors: [
      v => 0.95 * v.N * v.S,
      v => v.N * v.S + v.D,
      v => (0.95 * v.N * v.S + v.D) * 2,
    ],
  },
  // -------------------------------------------------------------------------
  // Distance Travelled
  // -------------------------------------------------------------------------
  {
    formulaId: 'a-distance-travelled', area: 'A', unknown: 'd',
    // The handbook prints two relations, d = n x L and A = S x L. This one takes
    // the distance form, with the n + 1 distractor standing in for counting the
    // headland turn as another pass.
    formulaText: 'd = n × L   (A = S × L for the same pass)',
    unit: 'm', round: 0,
    vars: [
      { symbol: 'n', ascii: 'n', label: 'number of rounds', unit: '', min: 2, max: 10, decimals: 0 },
      { symbol: 'L', ascii: 'L', label: 'length of the plot', unit: 'm', min: 50, max: 500, decimals: 0 },
    ],
    conversions: [
      { ascii: 'L', unit: 'ft', factor: 3.28084, fromUnit: 'm' },
    ],
    compute: v => v.n * v.L,
    context: 'the ploughing of a vegetable plot in La Trinidad',
    verb: 'was done in',
    unknownPhrase: 'the total distance the tractor travelled',
    keyConcept: 'Distance travelled is rounds times the length of the plot — a product, so doubling either the number of passes or the length doubles the distance. The trap is the headland: the turn at the end of each round is short, and a student who adds a whole extra round overstates the distance by one pass.',
    mistakes: ['Adding one round for the headland turn', 'Using the swath instead of the length and reporting an area', 'Forgetting to multiply at all and quoting the plot length'],
    distractors: [
      v => (v.n * v.L) / 2,
      v => v.n * v.L * 2,
      v => (v.n + 1) * v.L,
    ],
  },
];
