// Area B drill specs, part 1 of ?: Open Channel Flow / Hydraulics and the
// quadratic formula.
//
// Every `compute` here implements the handbook expression in src/data/formulas.ts
// and has a hand-verified case in scripts/data/golden-cases.json. Philippine
// context throughout: communal irrigation canals, siphons, farm reservoirs and
// the rural roads that drain into them.
//
// Constants and bases, pinned so the walkthroughs actually multiply out:
//   Manning, SI       V = R^(2/3) S^(1/2) / n with R in m. The 1.486 belongs to
//                    the English pair (R in ft, V in ft/s) and is a distractor
//                    here, not a second option for the same question.
//   b-general-discharge, b-section-factor, b-critical-depth-velocity
//                    all SI: A and T in m, V in m/s, g = 9.81 m/s2.
//   b-side-angle      theta is reported in degrees, so the walkthrough has to
//                    carry the 180/pi.
//   b-chezys-equation V = C sqrt(RS) with R in m; again 1.486 is English-only.
//
// DEPARTURE from the printed handbook, b-water-applied-depth:
//   printed   Q = 2.78 A D / T
//   A stream size from volume is unambiguous, and it comes out as
//     Q [L/s] = 0.00278 A[m2] D[cm] / T[h]      (0.00278 = 1/360)
//     Q [L/s] = 27.78   A[ha] D[cm] / T[h]
//   so the printed 2.78 is neither of them: it is the square-metre coefficient
//   with three zeros moved across the decimal. This spec uses the hectare form,
//   because farm areas and stream sizes are quoted in ha and L/s throughout the
//   Philippine irrigation literature, and a stream size 1000x too large is not a
//   plausible board-exam answer. The note is repeated in the spec's keyConcept.
import type { DrillSpec } from './formula-drills';

export const areaBChannelSpecs: DrillSpec[] = [
  // -------------------------------------------------------------------------
  // Open channel flow
  // -------------------------------------------------------------------------
  {
    formulaId: 'b-mannings-equation', area: 'B', unknown: 'V',
    formulaText: 'V = (1/n) R^(2/3) S^(1/2)   (SI, R in m)',
    unit: 'm/s', round: 2,
    vars: [
      { symbol: 'n', ascii: 'n', label: 'Manning roughness coefficient', unit: '', min: 0.022, max: 0.045, decimals: 3 },
      { symbol: 'R', ascii: 'R', label: 'hydraulic radius', unit: 'm', min: 0.5, max: 3, decimals: 2 },
      { symbol: 'S', ascii: 'S', label: 'bed slope', unit: '', min: 0.001, max: 0.01, decimals: 4 },
    ],
    conversions: [
      { ascii: 'R', unit: 'ft', factor: 3.28084, fromUnit: 'm' },
      { ascii: 'V', unit: 'ft/s', factor: 3.28084, fromUnit: 'm/s' },
    ],
    compute: v => (1 / v.n) * Math.pow(v.R, 2 / 3) * Math.sqrt(v.S),
    context: 'a lined irrigation canal in the rice belt of Iloilo that a federation is checking before the wet season',
    verb: 'was surveyed with',
    unknownPhrase: 'the mean flow velocity the design gives',
    keyConcept: "Manning's equation is the workhorse of every open-channel problem: the velocity rises with the two-thirds power of the hydraulic radius and the square root of the slope, and falls with the roughness. Two practical consequences matter on the exam — a rougher channel needs a steeper bed to carry the same discharge, and a wide shallow channel is not the same as a narrow deep one of equal area, because it has a much larger hydraulic radius.",
    mistakes: ['Using 1.486 with metric units, which is the English constant', 'Using R to the first power instead of R^(2/3)', 'Multiplying by the slope instead of taking its square root'],
    // 1.486, 2x and the two power slips are provably apart: 1.486 sits above the
    // R^(1/3) range of 0.79..1.44, and sqrt(S) is always under 0.11.
    distractors: [
      v => (1.486 / v.n) * Math.pow(v.R, 2 / 3) * Math.sqrt(v.S),
      v => (1 / v.n) * v.R * Math.sqrt(v.S),
      v => (1 / v.n) * Math.pow(v.R, 2 / 3) * v.S,
      v => (1 / v.n) * Math.pow(v.R, 2 / 3) * Math.sqrt(v.S) * 2,
    ],
  },
  {
    formulaId: 'b-general-discharge', area: 'B', unknown: 'Q',
    formulaText: 'Q = A V',
    unit: 'm³/s', round: 3,
    vars: [
      { symbol: 'A', ascii: 'A', label: 'flow cross-sectional area', unit: 'm²', min: 0.05, max: 5, decimals: 2 },
      { symbol: 'V', ascii: 'V', label: 'mean flow velocity', unit: 'm/s', min: 0.3, max: 2, decimals: 2 },
    ],
    conversions: [
      { ascii: 'A', unit: 'ft²', factor: 10.7639, fromUnit: 'm²' },
      { ascii: 'V', unit: 'ft/s', factor: 3.28084, fromUnit: 'm/s' },
    ],
    compute: v => v.A * v.V,
    context: 'the culvert that a barangay is sizing under a farm road in Rizal',
    verb: 'must pass',
    unknownPhrase: 'the discharge it has to carry',
    keyConcept: 'The continuity relation is the most elementary formula in hydraulics and the one most often got backwards: discharge is the area times the velocity, so a bigger pipe at the same velocity carries proportionally more. Every other open-channel result ends here, because once the velocity is known from Manning or Chezy, the stream size is just this product.',
    mistakes: ['Dividing the area by the velocity', 'Using the wetted perimeter instead of the flow area', 'Reporting the area alone and calling it the discharge'],
    // A/V is the one bounded inversion: its ratio to the answer is 1/V^2, and V
    // is kept at 0.3..2 so that lands at 0.25..11.1 rather than 0.01..100.
    distractors: [
      v => v.A / v.V,
      v => v.A * v.V * 2,
      v => v.A * v.V / 2,
      v => v.A * v.V * 3,
    ],
  },
  {
    formulaId: 'b-water-applied-depth', area: 'B', unknown: 'Q',
    formulaText: 'Q [L/s] = 27.78 A[ha] D[cm] / T[h]',
    unit: 'L/s', round: 2,
    vars: [
      { symbol: 'A', ascii: 'A', label: 'area irrigated', unit: 'ha', min: 0.5, max: 5, decimals: 2 },
      { symbol: 'D', ascii: 'D', label: 'depth of water applied', unit: 'cm', min: 2, max: 15, decimals: 1 },
      { symbol: 'T', ascii: 'T', label: 'time required to apply the water', unit: 'h', min: 2, max: 12, decimals: 0 },
    ],
    conversions: [
      { ascii: 'A', unit: 'acre', factor: 2.47105, fromUnit: 'ha' },
      { ascii: 'Q', unit: 'm³/s', factor: 0.001, fromUnit: 'L/s' },
    ],
    compute: v => (27.78 * v.A * v.D) / v.T,
    context: 'a farmers irrigation association sizing the stream for its service area in Nueva Ecija',
    verb: 'plans to wet',
    unknownPhrase: 'the stream size the schedule implies',
    keyConcept: 'Stream size is just the volume of water divided by the time available, so the area and the depth multiply into the volume and the time divides it. The constant only carries the unit conversion, and that is where the printed handbook goes wrong: from volume the coefficient is 0.00278 for an area in square metres and 27.78 for an area in hectares, not the 2.78 that is printed. Farm areas and stream sizes are both quoted in hectares and litres per second, so this drill uses 27.78.',
    mistakes: ['Using the printed 2.78, which is neither the square-metre nor the hectare coefficient', 'Converting the area to acres and leaving the constant alone', 'Multiplying by the time instead of dividing by it'],
    // The acre slip is a clean 2.471x and cannot meet 2x, 3x or 0.5x.
    distractors: [
      v => (27.78 * v.A * 2.47105 * v.D) / v.T,
      v => (27.78 * v.A * v.D) / v.T * 2,
      v => (27.78 * v.A * v.D) / v.T * 3,
      v => (27.78 * v.A * v.D) / v.T / 2,
    ],
  },
  {
    formulaId: 'b-section-factor', area: 'B', unknown: 'Z',
    formulaText: 'Z = A √(A/T) = Q / √g',
    unit: 'm^2.5', round: 3,
    vars: [
      { symbol: 'A', ascii: 'A', label: 'flow cross-sectional area', unit: 'm²', min: 0.1, max: 5, decimals: 2 },
      { symbol: 'T', ascii: 'T', label: 'top width', unit: 'm', min: 0.5, max: 10, decimals: 2 },
    ],
    conversions: [
      { ascii: 'T', unit: 'ft', factor: 3.28084, fromUnit: 'm' },
    ],
    compute: v => v.A * Math.sqrt(v.A / v.T),
    context: 'the trapezoidal section of a proposed canal in Pampanga',
    verb: 'was measured at',
    unknownPhrase: 'the section factor of the section',
    keyConcept: 'The section factor is the geometric quantity that pairs with the discharge through the critical-flow relation, where it equals the discharge over the square root of g. Working it the geometric way, A multiplied by the square root of A over the top width, keeps it in the same units as the section being designed. It is the bridge between a channel shape and the depth at which that shape carries its flow at critical velocity.',
    mistakes: ['Inverting the ratio inside the root', 'Using the hydraulic mean depth A/T in place of the top width', 'Forgetting the square root entirely'],
    // No bounded error shape exists here: every meaningful slip scales with A/T,
    // which is unbounded across the sampled range, so the options are fixed
    // multiples and the mistakes list carries the real errors.
    distractors: [
      v => v.A * Math.sqrt(v.A / v.T) * 2,
      v => v.A * Math.sqrt(v.A / v.T) / 2,
      v => v.A * Math.sqrt(v.A / v.T) * 3,
      v => v.A * Math.sqrt(v.A / v.T) / 3,
    ],
  },
  {
    formulaId: 'b-critical-depth-velocity', area: 'B', unknown: 'V_c',
    formulaText: 'V_c = √(g D_m)   with   D_m = A / T   and   g = 9.81 m/s²',
    unit: 'm/s', round: 2,
    vars: [
      { symbol: 'A', ascii: 'A', label: 'flow cross-sectional area', unit: 'm²', min: 0.1, max: 5, decimals: 2 },
      { symbol: 'T', ascii: 'T', label: 'top width', unit: 'm', min: 0.5, max: 10, decimals: 2 },
    ],
    conversions: [
      { ascii: 'T', unit: 'ft', factor: 3.28084, fromUnit: 'm' },
      { ascii: 'V_c', unit: 'ft/s', factor: 3.28084, fromUnit: 'm/s' },
    ],
    compute: v => Math.sqrt(9.81 * (v.A / v.T)),
    context: 'a rectangular channel in a coconut plantation in Cavite',
    verb: 'was surveyed at',
    unknownPhrase: 'the critical velocity of the flow',
    keyConcept: 'Critical velocity is the velocity at which a section carries its discharge in the least possible energy, and it falls straight out of the hydraulic mean depth, which is the area divided by the top width. The relation is worth memorising as a pair: the section factor uses A and T geometrically, the critical velocity uses the mean depth times the acceleration of gravity, and both go wrong in the same place — by forgetting which dimension is which.',
    mistakes: ['Reporting the hydraulic mean depth itself as the velocity', 'Forgetting the area in D_m and using only the top width', 'Using the wetted perimeter where the top width belongs'],
    distractors: [
      v => v.A / v.T,
      v => Math.sqrt(9.81 / v.T),
      v => Math.sqrt(9.81 * (v.A / v.T)) * 2,
      v => Math.sqrt(9.81 * (v.A / v.T)) / 2,
    ],
  },
  {
    formulaId: 'b-side-angle', area: 'B', unknown: 'θ',
    formulaText: 'θ = tan⁻¹ (1/z)   reported in degrees',
    unit: '°', round: 1,
    vars: [
      { symbol: 'z', ascii: 'z', label: 'horizontal run', unit: '', min: 0.5, max: 5, decimals: 1 },
    ],
    compute: v => Math.atan(1 / v.z) * (180 / Math.PI),
    context: 'the side slope of a newly cut canal in Isabela',
    verb: 'is laid at a ratio of 1 vertical to',
    unknownPhrase: 'the side angle with the horizontal',
    keyConcept: 'A side slope of 1 vertical to z horizontal means the bank falls one unit for every z across, so the horizontal run per unit of fall is z and the angle with the horizontal is the arctangent of rise over run, which is 1/z. A steep 1 to 0.5 bank is nearly vertical at 63 degrees, a flat 1 to 5 is 11 degrees, and because the answer is an angle it has to be reported in degrees — the radian result is the same number scaled by 57.3.',
    mistakes: ['Taking the arctangent of z instead of 1/z, which gives the angle with the vertical', 'Reporting the radian value as if it were degrees', 'Reading the ratio as z to 1'],
    distractors: [
      v => Math.atan(v.z) * (180 / Math.PI),
      v => Math.atan(1 / v.z),
      v => Math.atan(1 / v.z) * (180 / Math.PI) * 2,
      v => Math.atan(1 / v.z) * (180 / Math.PI) / 2,
    ],
  },
  {
    formulaId: 'b-chezys-equation', area: 'B', unknown: 'V',
    formulaText: 'V = C √(R S)   (SI, R in m)',
    unit: 'm/s', round: 2,
    vars: [
      { symbol: 'C', ascii: 'C', label: 'Chezy coefficient', unit: '', min: 20, max: 60, decimals: 0 },
      { symbol: 'R', ascii: 'R', label: 'hydraulic radius', unit: 'm', min: 0.3, max: 3, decimals: 2 },
      { symbol: 'S', ascii: 'S', label: 'bed slope', unit: '', min: 0.001, max: 0.01, decimals: 4 },
    ],
    conversions: [
      { ascii: 'R', unit: 'ft', factor: 3.28084, fromUnit: 'm' },
      { ascii: 'V', unit: 'ft/s', factor: 3.28084, fromUnit: 'm/s' },
    ],
    compute: v => v.C * Math.sqrt(v.R * v.S),
    context: 'a stone-lined drainage channel that a municipality is checking',
    verb: 'was assigned',
    unknownPhrase: 'the mean flow velocity in the channel',
    keyConcept: "Chezy's equation is Manning's without the roughness normalised away: the velocity is the coefficient times the square root of the radius times the slope, so both the depth and the steepness enter under one square root. Chezy's coefficient is the older convention and is much larger in number than Manning's n, which is why mixing the two coefficients is the classic slip on this formula.",
    mistakes: ['Using 1.486 with metric units, which is the English constant', 'Writing C times R times S with no root taken', 'Inverting the radius under the root'],
    distractors: [
      v => 1.486 * v.C * Math.sqrt(v.R * v.S),
      v => v.C * v.R * v.S,
      v => v.C * Math.sqrt(v.S / v.R),
      v => v.C * Math.sqrt(v.R * v.S) * 2,
    ],
  },
  // -------------------------------------------------------------------------
  // Algebra tool used throughout the hydraulics problems
  // -------------------------------------------------------------------------
  {
    formulaId: 'b-quadratic-formula', area: 'B', unknown: 'x',
    // The sign convention is fixed: with a > 0, b > 0 and c < 0 the discriminant
    // is always positive and the meaningful root is the plus-sign one, because
    // sqrt(b^2 - 4ac) > b whenever c is negative. The other root is therefore
    // negative and is not offered.
    formulaText: 'x = (−b + √(b² − 4ac)) / (2a)',
    unit: '', round: 3,
    vars: [
      { symbol: 'a', ascii: 'a', label: 'coefficient of x²', unit: '', min: 1, max: 5, decimals: 0 },
      { symbol: 'b', ascii: 'b', label: 'coefficient of x', unit: '', min: 2, max: 10, decimals: 0 },
      { symbol: 'c', ascii: 'c', label: 'constant term', unit: '', min: -10, max: -5, decimals: 0 },
    ],
    compute: v => (-v.b + Math.sqrt(v.b * v.b - 4 * v.a * v.c)) / (2 * v.a),
    context: 'a canal design equation that a hydraulics engineer has reduced to a quadratic',
    verb: 'is written with',
    unknownPhrase: 'the positive root of the equation',
    keyConcept: 'Almost every channel dimension problem that cannot be solved directly reduces to a quadratic, and the roots are the two dimensions that satisfy the design. The sign in front of the root is chosen on physical grounds, not by preference: only one root gives a width or a depth that can exist, and here the negative constant term is what guarantees a positive root exists at all.',
    mistakes: ['Using minus instead of plus in front of the root', 'Writing 4ac as 2ac', 'Forgetting the 2 in the denominator'],
    distractors: [
      v => (-v.b + Math.sqrt(v.b * v.b - 4 * v.a * v.c)) / v.a,
      v => (-v.b + Math.sqrt(v.b * v.b - 4 * v.a * v.c)) / (2 * v.a) / 2,
      v => (v.b + Math.sqrt(v.b * v.b - 4 * v.a * v.c)) / (2 * v.a),
      v => (-v.b + Math.sqrt(v.b * v.b - 4 * v.a * v.c)) / (2 * v.a) * 3,
    ],
  },
];
