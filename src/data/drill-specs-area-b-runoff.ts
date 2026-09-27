// Area B drill specs, part 2 of 7: Runoff & Rainfall.
//
// Every `compute` implements the handbook expression in src/data/formulas.ts and
// has a hand-verified case in scripts/data/golden-cases.json. Settings are
// Philippine: typhoon design storms over rice and sugarcane catchment, the
// Rational Method as NIA writes it, gauging-station averages for a service area.
//
// Constants and bases, pinned so the walkthroughs multiply out:
//   Rational method   q [L/s]   = 2.78 C I A, with C dimensionless, I in mm/hr
//                                and A in ha. The handbook prints q = C I A
//                                with no constant, which is the L/s form with
//                                2.78 left implicit. The same coefficient in
//                                m3/s is 0.00278, so the two forms differ by 1000.
//   Runoff volume     Q [m3]    = 3.6 q T, with q in L/s and T in hours.
//   Kirpich           T_c [min]  = 0.0195 L^0.77 S^-0.385, L in m, S a ratio.
//   Float method      Q [m3/s]  = C A V, C the surface-velocity correction.
//   Curve number      S         = 25400/CN - 254, then Q = (I-0.2S)^2/(I+0.8S)
//                                in mm. I is bounded at 60 mm and CN at 90 so
//                                that I > 0.2S always holds and Q stays positive:
//                                at CN=50, S=254 and 0.2S=50.8, so a 60 mm storm
//                                already clears it.
//   Rainfall averages Three stations or three Thiessen polygons, since
//                                DrillSpec cannot carry an array. The count is
//                                stated in the context and the keyConcept.
//   Rainfall intensity I = k T^n / t^m, t in minutes. n and m are location
//                                constants, so they are sampled over the narrow
//                                band 0.78..0.82 that real IDF curves use; a wide
//                                band would make k, T and t compound into a
//                                40x spread and produce absurd intensities.
//
// DEPARTURE from the printed handbook, b-runoff-volume:
//   printed   Q = 0.278 q T
//   Volume is discharge times time, so the coefficient is 1 for q in m3/s and T
//   in seconds. With the Rational Method's L/s, 0.278 is the reciprocal of the
//   3.6 that converts L/s-hours into m3, not a multiplier of it, and no natural
//   unit set reproduces 0.278. This spec uses Q [m3] = 3.6 q [L/s] T [h], which
//   chains directly from b-rational-method and is what the NIA design guides use.
import type { DrillSpec } from './formula-drills';

export const areaBRunoffSpecs: DrillSpec[] = [
  {
    formulaId: 'b-rational-method', area: 'B', unknown: 'q',
    formulaText: 'q [L/s] = 2.78 C I A',
    unit: 'L/s', round: 1,
    vars: [
      { symbol: 'C', ascii: 'C', label: 'runoff coefficient', unit: '', min: 0.30, max: 0.95, decimals: 2 },
      { symbol: 'I', ascii: 'I', label: 'rainfall intensity', unit: 'mm/hr', min: 20, max: 120, decimals: 0 },
      { symbol: 'A', ascii: 'A', label: 'catchment area', unit: 'ha', min: 2, max: 30, decimals: 0 },
    ],
    conversions: [
      { ascii: 'I', unit: 'in/hr', factor: 0.0393701, fromUnit: 'mm/hr' },
      { ascii: 'A', unit: 'acre', factor: 2.47105, fromUnit: 'ha' },
    ],
    compute: v => 2.78 * v.C * v.I * v.A,
    context: 'a rice catchment in Quezon province draining into a channel that a municipality is designing',
    verb: 'is being sized for a design storm with',
    unknownPhrase: 'the peak runoff the Rational method gives',
    keyConcept: 'The Rational method says the peak runoff is the coefficient times the intensity times the area, and the coefficient is the fraction of rain that runs off rather than soaks in - 0.35 for bushy land on a gentle slope, 0.99 for concrete, and zero for pure sand because it all infiltrates. The 2.78 is only unit conversion: a millimetre over a hectare is ten cubic metres an hour, which is 0.00278 m3/s, so the same answer is 2.78 in L/s and 0.00278 in m3/s.',
    mistakes: ['Omitting the 2.78, which leaves the answer a thousandfold out in m3/s', 'Dividing by 360', 'Reading the coefficient as a percentage'],
    // 1/C^2 is the only bounded one: C is 0.30..0.95 so the ratio is 1.11..11.1,
    // clear of 2, 3 and 0.5.
    distractors: [
      v => (2.78 * v.I * v.A) / v.C,
      v => 2.78 * v.C * v.I * v.A * 2,
      v => (2.78 * v.C * v.I * v.A) / 2,
      v => 2.78 * v.C * v.I * v.A * 3,
    ],
  },
  {
    formulaId: 'b-runoff-volume', area: 'B', unknown: 'Q',
    formulaText: 'Q [m³] = 3.6 q [L/s] T [h]',
    unit: 'm³', round: 0,
    vars: [
      { symbol: 'q', ascii: 'q', label: 'peak runoff rate', unit: 'L/s', min: 50, max: 2000, decimals: 0 },
      { symbol: 'T', ascii: 'T', label: 'duration of runoff', unit: 'h', min: 0.5, max: 4, decimals: 1 },
    ],
    conversions: [
      { ascii: 'q', unit: 'm³/s', factor: 0.001, fromUnit: 'L/s' },
    ],
    compute: v => 3.6 * v.q * v.T,
    context: 'a retention pond behind a barangay road in Bulacan',
    verb: 'must hold',
    unknownPhrase: 'the volume of runoff that has to be held',
    keyConcept: 'Runoff volume is just the peak rate held for a duration, so the two multiply and the unit constant converts litres per second over hours into cubic metres: 3600 seconds an hour and 1000 litres to a cubic metre collapse to 3.6. Sizing a pond or a detention basin is this multiplication, and the duration is the critical part - a longer storm at a lower peak can move more water than a short intense one.',
    mistakes: ['Using the printed 0.278, which is the reciprocal of the correct factor', 'Multiplying by 3600 as well as 3600', 'Treating the peak rate as an average over the storm'],
    // 0.278/3.6 = 0.0772, the printed slip, sits far from 0.5, 2 and 3.
    distractors: [
      v => 0.278 * v.q * v.T,
      v => 3.6 * v.q * v.T * 2,
      v => (3.6 * v.q * v.T) / 2,
      v => 3.6 * v.q * v.T * 3,
    ],
  },
  {
    formulaId: 'b-kirpich-tc', area: 'B', unknown: 'T_c',
    formulaText: 'T_c [min] = 0.0195 L^0.77 S^-0.385',
    unit: 'min', round: 1,
    vars: [
      { symbol: 'L', ascii: 'L', label: 'length of the slope', unit: 'm', min: 100, max: 3000, decimals: 0 },
      { symbol: 'S', ascii: 'S', label: 'average gradient', unit: '', min: 0.005, max: 0.10, decimals: 3 },
    ],
    compute: v => 0.0195 * Math.pow(v.L, 0.77) * Math.pow(v.S, -0.385),
    context: 'the longest hillside a storm drains over in a barangay in Leyte',
    verb: 'was measured at',
    unknownPhrase: 'the time of concentration for that slope',
    keyConcept: 'Time of concentration is how long runoff takes to reach the channel, and Kirpich gets there from the two things that dominate it: the length of the slope and its steepness. Doubling the length roughly doubles the time, while steepening the slope shortens it, because water on a steep face runs off before it soaks in. It sets the critical storm duration, which is what the Rational method intensity is then read at.',
    mistakes: ['Using the square root of the slope instead of the inverse 0.385 power', 'Using metres where the formula wants a consistent length unit', 'Misplacing the 0.0195 as 0.195'],
    distractors: [
      v => 0.0195 * Math.pow(v.L, 0.77) * Math.pow(v.S, -0.5),
      v => 0.195 * Math.pow(v.L, 0.77) * Math.pow(v.S, -0.385),
      v => 0.0195 * Math.sqrt(v.L) * Math.pow(v.S, -0.385),
      v => 0.0195 * Math.pow(v.L, 0.77) * Math.pow(v.S, -0.385) * 2,
    ],
  },
  {
    formulaId: 'b-float-method', area: 'B', unknown: 'Q',
    formulaText: 'Q = C A V',
    unit: 'm³/s', round: 3,
    vars: [
      { symbol: 'C', ascii: 'C', label: 'velocity correction factor', unit: '', min: 0.80, max: 0.95, decimals: 2 },
      { symbol: 'A', ascii: 'A', label: 'flow cross-sectional area', unit: 'm²', min: 0.2, max: 5, decimals: 2 },
      { symbol: 'V', ascii: 'V', label: 'measured surface velocity', unit: 'm/s', min: 0.2, max: 2.5, decimals: 2 },
    ],
    conversions: [
      { ascii: 'A', unit: 'ft²', factor: 10.7639, fromUnit: 'm²' },
      { ascii: 'V', unit: 'ft/s', factor: 3.28084, fromUnit: 'm/s' },
    ],
    compute: v => v.C * v.A * v.V,
    context: 'a shallow stream near a gaging station in Bukidnon that a survey crew is gauging',
    verb: 'was found with',
    unknownPhrase: 'the discharge the float method gives',
    keyConcept: 'Gauging a stream you cannot weirs is done by timing a float over a known reach and reading the surface velocity, which is always faster than the average velocity in the body of the water because the drag is lower at the top. The correction factor is what converts the surface reading into the true mean velocity, and it is the whole reason the method carries a C: for a typical stream it sits around 0.85 to 0.95, so skipping it overestimates the flow.',
    mistakes: ['Forgetting the correction factor and reporting the surface velocity', 'Squaring the correction factor', 'Using the wetted perimeter for the area'],
    // 1/C is 1.05..1.25 and C is 0.80..0.95, so the two slips cannot meet each
    // other or the 2x and 0.5x options.
    distractors: [
      v => v.A * v.V,
      v => v.C * v.A * v.V * 2,
      v => (v.C * v.A * v.V) / 2,
      v => v.C * v.C * v.A * v.V,
    ],
  },
  {
    formulaId: 'b-curve-number', area: 'B', unknown: 'Q',
    formulaText: 'S = 25400/CN − 254      Q [mm] = (I − 0.2S)² / (I + 0.8S)',
    unit: 'mm', round: 2,
    vars: [
      { symbol: 'I', ascii: 'I', label: 'storm rainfall', unit: 'mm', min: 60, max: 200, decimals: 0 },
      { symbol: 'CN', ascii: 'CN', label: 'curve number', unit: '', min: 50, max: 90, decimals: 0 },
    ],
    compute: v => {
      const S = 25400 / v.CN - 254;
      const num = v.I - 0.2 * S;
      return (num * num) / (v.I + 0.8 * S);
    },
    context: 'a rural watershed in Batangas whose land cover a planner has classified',
    verb: 'was given',
    unknownPhrase: 'the direct surface runoff depth from the storm',
    keyConcept: 'The curve number is a single number standing for how much a watershed responds to rain, and it bundles land use, hydrologic condition, antecedent moisture and soil group into one figure - high numbers for paved or saturated ground that runs off almost everything, low numbers for permeable forest. S is the retention in millimetres that the soil can hold before it contributes, and the runoff follows from how far past S the storm goes, which is why the answer rises steeply once the rainfall passes the retention.',
    mistakes: ['Forgetting that S is 25400/CN minus 254, not 25400/CN on its own', 'Dropping the denominator on large storms', 'Using the retention S in place of the rainfall I'],
    // Dropping the denominator leaves the ratio (I-0.2S)/(I+0.8S) = 0.88..0.99,
    // well clear of 0.5, 2 and 3.
    distractors: [
      v => {
        const S = 25400 / v.CN - 254;
        return v.I - 0.2 * S;
      },
      v => {
        const S = 25400 / v.CN - 254;
        return ((v.I - 0.2 * S) * (v.I - 0.2 * S)) / (v.I + 0.8 * S) * 2;
      },
      v => {
        const S = 25400 / v.CN - 254;
        return ((v.I - 0.2 * S) * (v.I - 0.2 * S)) / (v.I + 0.8 * S) / 2;
      },
      v => {
        const S = 25400 / v.CN - 254;
        return ((v.I - 0.2 * S) * (v.I - 0.2 * S)) / (v.I + 0.8 * S) * 3;
      },
    ],
  },
  {
    formulaId: 'b-rainfall-arithmetic-mean', area: 'B', unknown: 'P̄',
    formulaText: 'P̄ = (P₁ + P₂ + … + Pₙ) / n',
    unit: 'mm', round: 1,
    vars: [
      { symbol: 'P1', ascii: 'P1', label: 'station 1 rainfall', unit: 'mm', min: 40, max: 200, decimals: 0 },
      { symbol: 'P2', ascii: 'P2', label: 'station 2 rainfall', unit: 'mm', min: 40, max: 200, decimals: 0 },
      { symbol: 'P3', ascii: 'P3', label: 'station 3 rainfall', unit: 'mm', min: 40, max: 200, decimals: 0 },
    ],
    compute: v => (v.P1 + v.P2 + v.P3) / 3,
    context: 'a service area monitored by three rainfall gauging stations in Laguna',
    verb: 'logged storm totals of',
    unknownPhrase: 'the arithmetic mean rainfall over the area',
    keyConcept: 'Averaging rainfall over an area is only defensible when every station is taken to represent the same amount of ground, which is the arithmetic mean and nothing more. The moment the stations sit in different parts of the catchment - one on a ridge, one in a valley, one on the windward slope - the simple mean is biased, and Thiessen weighting has to take over. For exam purposes the arithmetic mean is the unweighted case, and its one trap is forgetting to divide by the number of stations.',
    mistakes: ['Adding without dividing by the number of stations', 'Using the median instead of the mean', 'Weighting the stations equally when they are not equally representative'],
    // The harmonic mean of three values in 40..200 lands at 0.5..1.0 of the
    // arithmetic mean, and the 3x slip is the undivided sum.
    distractors: [
      v => 3 / (1 / v.P1 + 1 / v.P2 + 1 / v.P3),
      v => v.P1 + v.P2 + v.P3,
      v => ((v.P1 + v.P2 + v.P3) / 3) * 2,
      v => (v.P1 + v.P2 + v.P3) / 3 / 2,
    ],
  },
  {
    formulaId: 'b-rainfall-thiessen', area: 'B', unknown: 'P̄',
    formulaText: 'P̄ = (A₁P₁ + A₂P₂ + … + AₙPₙ) / (A₁ + A₂ + … + Aₙ)',
    unit: 'mm', round: 1,
    vars: [
      { symbol: 'A1', ascii: 'A1', label: 'polygon 1 area', unit: 'ha', min: 5, max: 50, decimals: 0 },
      { symbol: 'P1', ascii: 'P1', label: 'station 1 rainfall', unit: 'mm', min: 40, max: 200, decimals: 0 },
      { symbol: 'A2', ascii: 'A2', label: 'polygon 2 area', unit: 'ha', min: 5, max: 50, decimals: 0 },
      { symbol: 'P2', ascii: 'P2', label: 'station 2 rainfall', unit: 'mm', min: 40, max: 200, decimals: 0 },
      { symbol: 'A3', ascii: 'A3', label: 'polygon 3 area', unit: 'ha', min: 5, max: 50, decimals: 0 },
      { symbol: 'P3', ascii: 'P3', label: 'station 3 rainfall', unit: 'mm', min: 40, max: 200, decimals: 0 },
    ],
    compute: v => (v.A1 * v.P1 + v.A2 * v.P2 + v.A3 * v.P3) / (v.A1 + v.A2 + v.A3),
    context: 'a watershed in Bicol split into three Thiessen polygons, one about each gauging station',
    verb: 'has',
    unknownPhrase: 'the Thiessen-weighted mean rainfall over the watershed',
    keyConcept: 'Thiessen polygons draw a boundary midway between neighbouring gauges, so each station is made to represent only the ground nearest to it. The mean then becomes an area-weighted average: multiply each reading by its polygon area, add, and divide by the total area. It matters whenever the catchments are uneven - a small polygon under a rain gauge in a wet valley can carry a disproportionate share of the total, which the simple arithmetic mean would dilute away.',
    mistakes: ['Averaging the readings without the area weights', 'Dividing by the number of polygons instead of the total area', 'Using polygon areas in different units from the rainfall'],
    // Ignoring the areas leaves the plain mean of the three readings, which is
    // 0.57..1.0 of the weighted answer across the sampled range.
    distractors: [
      v => (v.P1 + v.P2 + v.P3) / 3,
      v => ((v.A1 * v.P1 + v.A2 * v.P2 + v.A3 * v.P3) / (v.A1 + v.A2 + v.A3)) * 2,
      v => (v.A1 * v.P1 + v.A2 * v.P2 + v.A3 * v.P3) / (v.A1 + v.A2 + v.A3) / 2,
      v => ((v.A1 * v.P1 + v.A2 * v.P2 + v.A3 * v.P3) / (v.A1 + v.A2 + v.A3)) * 3,
    ],
  },
  {
    formulaId: 'b-rainfall-intensity', area: 'B', unknown: 'I',
    formulaText: 'I = k T^n / t^m   with t in minutes',
    unit: 'mm/hr', round: 1,
    vars: [
      { symbol: 'k', ascii: 'k', label: 'location constant', unit: '', min: 240, max: 320, decimals: 0 },
      { symbol: 'T', ascii: 'T', label: 'return period', unit: 'yr', min: 10, max: 20, decimals: 0 },
      { symbol: 'n', ascii: 'n', label: 'return period exponent', unit: '', min: 0.78, max: 0.82, decimals: 2 },
      { symbol: 't', ascii: 't', label: 'duration of the storm', unit: 'min', min: 30, max: 60, decimals: 0 },
      { symbol: 'm', ascii: 'm', label: 'duration exponent', unit: '', min: 0.78, max: 0.82, decimals: 2 },
    ],
    compute: v => (v.k * Math.pow(v.T, v.n)) / Math.pow(v.t, v.m),
    context: 'the intensity-duration-frequency curve of a PAGASA station in Tacloban',
    verb: 'has',
    unknownPhrase: 'the design intensity for that duration',
    keyConcept: 'An IDF curve is the whole design storm in one relationship: intensity rises with the return period, because a rarer storm is a more intense one, and falls with duration, because the same rain volume spread over twice the time is half the rate. That is why the storm duration used here must match the time of concentration - use a longer duration than the catchment needs and the design flow is quietly underestimated. n and m are properties of the location, not of the storm, which is why they are held to a narrow band.',
    mistakes: ['Multiplying by t instead of dividing', 'Swapping the return period and duration exponents', 'Using t in hours when the formula takes minutes'],
    // Unit exponents leave the ratio (T/t)^(n-m) = 0.70..0.92, clear of 0.5.
    distractors: [
      v => (v.k * v.T) / v.t,
      v => (v.k * Math.pow(v.T, v.n)) / Math.pow(v.t, v.m) * 2,
      v => (v.k * Math.pow(v.T, v.n)) / Math.pow(v.t, v.m) / 2,
      v => (v.k * Math.pow(v.T, v.n)) / Math.pow(v.t, v.m) * 3,
    ],
  },
];
