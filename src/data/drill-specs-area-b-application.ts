// Area B drill specs, part 3 of 6: Irrigation Application Depth, Rate, Timing,
// and Border Irrigation.
//
// This is the delivery side of irrigation: how much water has to be applied, how
// long it takes to apply, and how much of it actually reaches the root zone.
//
//   Net depth     d_NET = (FC - PWP) * A_s * RZD * MAD. Four equivalent forms
//                 are printed, and the soil-physical one is used here because
//                 it is the only one that can be got wrong in four independent
//                 ways. FC, PWP and MAD are declared as DECIMALS, not percent,
//                 because the product has to come out in metres of depth; taking
//                 them as percent inflates the result a hundredfold.
//   Gross depth   d_GROSS = d_NET / EA. Gross is always larger than net, and
//                 EA is the fraction that does not run off, evaporate or
//                 percolate past the root zone.
//   Timing        TA = (A * d_GROSS) / Q, with A in m2, d in m and Q in m3/s so
//                 the answer lands in seconds without a hidden factor.
//   Efficiency    EA = (Q_in - (S + P + E)) / Q_in. All four terms are losses on
//                 the same discharge, so they subtract before dividing.
//   Border stream Q = 0.0025 * S^(-0.75) for the slope S in percent. The
//                 handbook prints a second constant, 0.011, for the same
//                 exponent; that 4.4x difference is offered as a distractor and
//                 the keyConcept explains which reading is which.
//
// Range discipline, which is where the errors in this batch live:
//
//   - Every loss term in b-application-efficiency is capped well below Q_in, so
//     efficiency can never come out negative. S+P+E tops out at 33 against a
//     floor of 50 on Q_in.
//   - b-net-application-depth floors FC at 0.28 and caps PWP at 0.16, so
//     FC - PWP is 0.12..0.25 and the available water is always positive.
//   - b-border-irrigation-stream spans S = 0.1 to 3.0 percent, a thirtyfold
//     range on a negative exponent. The options are 0.0011 to 0.0141 ft3/s per
//     unit width, so the answer needs five decimals and the proportional
//     distractors would be invisible at any coarser rounding.
//
// Two of these five specs have every structural error out of band, and say so
// in their own comments rather than pretending otherwise. In
// b-time-of-application each wrong arrangement of A, d and Q lands 60x, 100x,
// 2500x or 1e-4x from the answer. Those are taught in `mistakes` and the
// options are proportional, because offering a 2500x option would hand the
// question to anyone who guessed the order of magnitude.
import type { DrillSpec } from './formula-drills';

export const areaBApplicationSpecs: DrillSpec[] = [
  {
    formulaId: 'b-net-application-depth', area: 'B', unknown: 'd_{NET}',
    formulaText: 'd_{NET} = (FC - PWP) A_s RZD MAD',
    unit: 'm', round: 4,
    vars: [
      { symbol: 'FC', ascii: 'fc', label: 'field capacity as a fraction', unit: '', min: 0.28, max: 0.35, decimals: 2 },
      { symbol: 'PWP', ascii: 'pwp', label: 'permanent wilting point as a fraction', unit: '', min: 0.1, max: 0.16, decimals: 2 },
      { symbol: 'A_s', ascii: 'as', label: 'apparent specific gravity', unit: '', min: 1.3, max: 1.6, decimals: 2 },
      { symbol: 'RZD', ascii: 'rzd', label: 'root zone depth', unit: 'm', min: 0.3, max: 0.9, decimals: 2 },
      { symbol: 'MAD', ascii: 'mad', label: 'management allowable depletion as a fraction', unit: '', min: 0.4, max: 0.6, decimals: 2 },
    ],
    conversions: [
      { ascii: 'rzd', unit: 'ft', factor: 3.28084, fromUnit: 'm' },
      { ascii: 'rzd', unit: 'in', factor: 39.3701, fromUnit: 'm' },
    ],
    // FC is floored at 0.28 and PWP capped at 0.16, so FC - PWP is 0.12..0.25
    // and the available water is never negative. Answer is 0.019..0.216 m.
    compute: v => (v.fc - v.pwp) * v.as * v.rzd * v.mad,
    context: 'a loam soil in a vegetable block in Iloilo where a tensiometer had just shown the crop starting to feel stress',
    verb: 'allows a net application depth of',
    unknownPhrase: 'the net depth of water to apply',
    keyConcept: 'Net application depth is the water the root zone can hold between field capacity and permanent wilting point, scaled by how deep the roots go and by how much of that band the manager is willing to let the crop use. The available water FC - PWP is a fraction of the pore space, apparent specific gravity converts that fraction to a weight of soil per unit volume, and multiplying by root zone depth turns it into a depth of water. Management allowable depletion is the safety margin, and it is why the depth applied is less than the full available water.',
    mistakes: [
      'Entering field capacity and wilting point as percentages instead of decimals, which multiplies the depth a hundredfold',
      'Adding FC and PWP instead of subtracting them',
      'Using particle density where apparent specific gravity belongs, which overstates the available water',
      'Applying the full available water and ignoring the management allowable depletion fraction',
    ],
    // Dropping MAD is 1/MAD = 1.67..2.5x; adding PWP is (FC+PWP)/(FC-PWP) =
    // 2.68..3.17x; dropping A_s is exactly 1.3..1.6x; 1.15 is the fourth.
    // All four are in band and all four are distinct from each other.
    distractors: [
      v => (v.fc - v.pwp) * v.as * v.rzd,
      v => (v.fc + v.pwp) * v.as * v.rzd * v.mad,
      v => (v.fc - v.pwp) * v.rzd * v.mad,
      v => (v.fc - v.pwp) * v.as * v.rzd * v.mad * 1.15,
    ],
  },
  {
    formulaId: 'b-gross-application-depth', area: 'B', unknown: 'd_{GROSS}',
    formulaText: 'd_{GROSS} = d_{NET} / EA',
    unit: 'mm', round: 1,
    vars: [
      { symbol: 'd_{NET}', ascii: 'dn', label: 'net depth of water to apply', unit: 'mm', min: 20, max: 120, decimals: 0 },
      { symbol: 'EA', ascii: 'ea', label: 'application efficiency', unit: '', min: 0.5, max: 0.9, decimals: 2 },
    ],
    conversions: [
      { ascii: 'dn', unit: 'cm', factor: 10, fromUnit: 'mm' },
      { ascii: 'dn', unit: 'in', factor: 0.0393701, fromUnit: 'mm' },
    ],
    // Answer is 22..240 mm. EA is capped at 0.9 so the "forgot to divide"
    // option can never round onto the answer.
    compute: v => v.dn / v.ea,
    context: 'a furrow-irrigated onion crop in Nueva Ecija where a catch can had measured how much of the applied water stayed in the root zone',
    verb: 'requires a gross depth of',
    unknownPhrase: 'the gross depth of water to apply',
    keyConcept: 'The gross depth is the net depth inflated to cover the losses, and application efficiency is the fraction that survives them. Dividing rather than multiplying is the whole point: an efficiency of 0.6 means only three fifths of what is applied is available to the crop, so the pump has to move five thirds of the useful depth. This is why gross figures look generous against a net requirement, and why raising efficiency is worth as much as storing more water.',
    mistakes: [
      'Multiplying by EA instead of dividing, which under-applies water and stresses the crop',
      'Reporting the net depth as the gross one, which quietly assumes perfect efficiency',
      'Entering EA as a percentage so the division happens 100 times too often',
    ],
    // Reporting the net depth alone is EA = 0.5..0.9x; multiplying by EA is
    // EA^2 = 0.25..0.81x. They differ because EA is not 1 anywhere in range, so
    // the two never coincide.
    distractors: [
      v => v.dn,
      v => v.dn * v.ea,
      v => (v.dn / v.ea) * 0.85,
      v => (v.dn / v.ea) * 1.15,
    ],
  },
  {
    formulaId: 'b-time-of-application', area: 'B', unknown: 'TA',
    formulaText: 'TA = (A \\times d_{GROSS}) / Q',
    unit: 's', round: 0,
    vars: [
      { symbol: 'A', ascii: 'A', label: 'area to be irrigated', unit: 'm²', min: 500, max: 3000, decimals: 0 },
      { symbol: 'd_{GROSS}', ascii: 'dg', label: 'gross depth of water', unit: 'm', min: 0.03, max: 0.1, decimals: 2 },
      { symbol: 'Q', ascii: 'Q', label: 'flow rate available', unit: 'm³/s', min: 0.015, max: 0.06, decimals: 3 },
    ],
    conversions: [
      { ascii: 'A', unit: 'ha', factor: 0.0001, fromUnit: 'm²' },
      { ascii: 'dg', unit: 'mm', factor: 1000, fromUnit: 'm' },
      { ascii: 'Q', unit: 'L/s', factor: 1000, fromUnit: 'm³/s' },
    ],
    // m2 * m / (m3/s) = s, so no hidden factor. Answer is 250..20000 s, which
    // is 4 minutes to 5.6 hours.
    compute: v => (v.A * v.dg) / v.Q,
    context: 'one irrigation set on a vegetable plot that a farmer had to finish before the midday heat made the loss rate climb',
    verb: 'will take a time of application of',
    unknownPhrase: 'the time needed to apply the water',
    keyConcept: 'Time of application is the volume the field needs divided by the flow the pump can deliver, so it is area times depth over discharge. Area in square metres and depth in metres give a volume, and dividing by cubic metres per second leaves seconds. Doubling the area doubles the time and halving the flow doubles it, which is the practical use: a pump set too small for its plot stretches the set past the window where evaporation is tolerable.',
    mistakes: [
      'Multiplying by the flow rate instead of dividing by it, which is off by the square of Q and lands near 1e-4x the answer',
      'Reporting minutes while the arithmetic is in seconds, a flat 60x',
      'Using the net depth instead of the gross, which understates the time by the efficiency',
      'Dividing by the product of depth and flow, which is off by the square of the depth and lands near 2500x',
    ],
    // Every structural rearrangement of A, d and Q is out of band here: the
    // wrong-sign product is about 1e-4x, the inverted arrangement about 2500x,
    // and dropping the area is 500..3000x. So all four options are proportional
    // and the unit errors are taught in mistakes with their factors. A 2500x
    // option would identify the answer to anyone who guessed the magnitude.
    distractors: [
      v => ((v.A * v.dg) / v.Q) * 0.85,
      v => ((v.A * v.dg) / v.Q) * 1.15,
      v => ((v.A * v.dg) / v.Q) * 0.5,
      v => ((v.A * v.dg) / v.Q) * 2,
    ],
  },
  {
    formulaId: 'b-application-efficiency', area: 'B', unknown: 'EA',
    formulaText: 'EA = (Q_{in} - (S + P + E)) / Q_{in}',
    unit: '', round: 3,
    vars: [
      { symbol: 'Q_{in}', ascii: 'qi', label: 'water entering the field', unit: 'L/s', min: 50, max: 200, decimals: 0 },
      { symbol: 'S', ascii: 's', label: 'seepage loss', unit: 'L/s', min: 2, max: 15, decimals: 0 },
      { symbol: 'P', ascii: 'p', label: 'percolation loss', unit: 'L/s', min: 1, max: 10, decimals: 0 },
      { symbol: 'E', ascii: 'e', label: 'evaporation loss', unit: 'L/s', min: 1, max: 8, decimals: 0 },
    ],
    conversions: [
      { ascii: 'qi', unit: 'm³/s', factor: 0.001, fromUnit: 'L/s' },
      { ascii: 's', unit: 'm³/s', factor: 0.001, fromUnit: 'L/s' },
    ],
    // S + P + E tops out at 33 against a floor of 50 on Q_in, so the numerator
    // is 0.17..0.96 of Q_in and efficiency is 0.34..0.98, never negative.
    compute: v => (v.qi - (v.s + v.p + v.e)) / v.qi,
    context: 'a block-irrigated vegetable farm in Pangasinan metered at the head ditch with loss gauges on the deep percolation and tail ends',
    verb: 'has an application efficiency of',
    unknownPhrase: 'the application efficiency of the system',
    keyConcept: 'Application efficiency is the share of the water that entered the field and stayed where the roots can reach it. The three losses are seepage below the root zone, percolation past the bottom of the profile, and evaporation off the wet surface, and all three are subtractions on the same discharge before dividing. Seepage is the one that moves with texture, and on a coarse sand it dominates, which is why the same method gives very different efficiencies on different soils.',
    mistakes: [
      'Dividing the losses by Q_in instead of subtracting them, which returns the loss fraction rather than the efficiency',
      'Omitting evaporation because it is hard to measure separately',
      'Adding the losses to Q_in, which can push the result above 1',
    ],
    // The loss fraction is (1 - EA)/EA = 0.02..1.94x; its inverse is
    // 0.51..49x; dropping evaporation is 1 + E/(Q_in - S - P - E) =
    // 1.03..1.47x; 0.85 is the fourth. Note the loss fraction and its inverse
    // swap order around EA = 0.5, but the generator only needs three distinct
    // of four, so one crossing is harmless.
    distractors: [
      v => (v.s + v.p + v.e) / v.qi,
      v => v.qi / (v.s + v.p + v.e),
      v => (v.qi - (v.s + v.p)) / v.qi,
      v => ((v.qi - (v.s + v.p + v.e)) / v.qi) * 0.85,
    ],
  },
  {
    formulaId: 'b-border-irrigation-stream', area: 'B', unknown: 'Q',
    formulaText: 'Q = 0.0025 S^{-0.75}',
    unit: 'ft³/s', round: 5,
    vars: [
      { symbol: 'S', ascii: 'S', label: 'land slope', unit: '%', min: 0.1, max: 3, decimals: 2 },
    ],
    conversions: [
      { ascii: 'S', unit: 'm/m', factor: 0.01, fromUnit: '%' },
      { ascii: 'S', unit: 'in/ft', factor: 0.01, fromUnit: '%' },
    ],
    // Answer is 0.0011..0.0141 ft3/s per unit width, so five decimals.
    compute: v => 0.0025 * Math.pow(v.S, -0.75),
    context: 'a graded border strip on a rice farm in Pangasinan that an irrigation engineer was sizing before the rainy season',
    verb: 'takes a border stream of',
    unknownPhrase: 'the border stream size',
    keyConcept: 'Border stream size is an empirical relation: a steeper border needs a smaller stream because the water runs off faster, and the exponent of -0.75 is what encodes that sensitivity. A thirtyfold change in slope changes the stream by about a twelfth, so the relation is gentle and the design is governed mostly by the border length and the infiltration rate. The handbook prints the same exponent against two different constants, 0.0025 and 0.011, and they differ by 4.4; they are not interchangeable and the coefficient in force has to be the one the source being used quotes.',
    mistakes: [
      'Using a positive exponent, which makes the stream grow with slope instead of shrinking and is 0.03..5.2x off',
      'Quoting the 0.011 constant when the source calls for 0.0025, a flat 4.4x',
      'Substituting the slope as a decimal instead of a percent, which is 0.0025/0.01 = 250x off through the exponent',
    ],
    // The strongest structural set in this batch: the other constant is a flat
    // 4.4x, a positive exponent gives S^1.5 = 0.03..5.2x, and an exponent of
    // -1 gives S^0.25 = 0.56..1.32x. All in band, all distinct.
    distractors: [
      v => 0.011 * Math.pow(v.S, -0.75),
      v => 0.0025 * Math.pow(v.S, 0.75),
      v => 0.0025 / v.S,
      v => 0.0025 * Math.pow(v.S, -0.75) * 1.15,
    ],
  },
];
