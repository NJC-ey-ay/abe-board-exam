// Area B drill specs, part 2 of 6: Land Soaking and Pumping Head.
//
// Pairs the two water-energy formulas with the four head components a pump
// system is built from, because in practice they are the same calculation seen
// from two ends: the power formula consumes the total head, and three of the
// four head formulas are the terms that add up to it.
//
//   Land soaking     LSR_gross = LSR_net + ET + P. Percolation is a loss the
//                    pump has to replace, so the gross figure is always larger
//                    than the net one and the difference is the part a farmer
//                    never sees.
//   Water power      P_w = gamma * Q * H * k. The specific weight of water is
//                    gamma = 9810 N/m3, which is rho * g with rho = 1000 kg/m3
//                    and g = 9.81 m/s2. It is sampled as a constant here; the
//                    whole batch hangs on it being specific weight and not
//                    density, because dividing by 1000 instead of 9810 moves
//                    the answer by a factor of 9.81.
//   Heads            H_total = H_static + H_velocity + H_friction + H_pressure.
//                    Every component is a length in metres of water column, so
//                    they add directly. Static head is printed in the handbook
//                    as a difference of two elevations rather than as a single
//                    lift, and it is implemented here exactly as printed - see
//                    the keyConcept on b-static-head.
//
// Ranges are constrained so the answers stay physical, because the sampler
// draws each variable independently and enforces no ordering. In
// b-total-dynamic-head every component has a positive minimum so that dropping
// any one of them cannot coincide with the answer after rounding; in
// b-static-head the water-surface elevation is floored above the maximum
// junction elevation so the difference is never negative.
//
// The unit confusions that are genuinely out of band - using 1000 instead of
// 9810, using 9.81, reading kPa as Pa - are recorded in `mistakes` rather
// than offered as options, where they would either fall outside the
// plausibility band or make the question guessable.
import type { DrillSpec } from './formula-drills';

export const areaBPumpingSpecs: DrillSpec[] = [
  {
    formulaId: 'b-lsr-gross', area: 'B', unknown: 'LSR_{gross}',
    formulaText: 'LSR_{gross} = LSR_{net} + ET + P',
    unit: 'mm', round: 1,
    vars: [
      { symbol: 'LSR_{net}', ascii: 'n', label: 'net land soaking requirement', unit: 'mm', min: 20, max: 120, decimals: 1 },
      { symbol: 'ET', ascii: 'et', label: 'evapotranspiration', unit: 'mm', min: 2, max: 8, decimals: 1 },
      { symbol: 'P', ascii: 'p', label: 'percolation loss', unit: 'mm', min: 3, max: 25, decimals: 1 },
    ],
    conversions: [
      { ascii: 'n', unit: 'cm', factor: 10, fromUnit: 'mm' },
      { ascii: 'p', unit: 'in', factor: 0.0393701, fromUnit: 'mm' },
    ],
    compute: v => v.n + v.et + v.p,
    context: 'the first-turn land preparation of a rice paddy in Bicol where the canal had been dry for a month',
    verb: 'calls for a gross land soaking requirement of',
    unknownPhrase: 'the gross land soaking requirement',
    keyConcept: 'The gross requirement is the net requirement plus the two unavoidable losses: evapotranspiration, which the crop and the hot soil surface take off, and percolation, which goes straight down through the paddy pan. Both are added, never subtracted, so the gross figure always exceeds the net one. This is why a canal operator is asked to deliver more than the nominal depth - the difference is water the field will never hold.',
    mistakes: ['Subtracting percolation instead of adding it, as though the loss were already inside the net figure', 'Reporting the net requirement as the gross one', 'Adding evapotranspiration twice by counting it in both the net and gross terms'],
    // Dropping percolation leaves 0.84..0.88 of the answer and dropping
    // evapotranspiration 0.68..0.99, so the pair is separated by ET being the
    // smaller term; 0.85 and 1.15 are clear of both.
    distractors: [
      v => v.n + v.et,
      v => v.n + v.p,
      v => (v.n + v.et + v.p) * 0.85,
      v => (v.n + v.et + v.p) * 1.15,
    ],
  },
  {
    formulaId: 'b-water-power', area: 'B', unknown: 'P_w',
    formulaText: 'P_w = \\gamma Q H k',
    unit: 'W', round: 0,
    vars: [
      { symbol: 'Q', ascii: 'Q', label: 'discharge through the turbine', unit: 'm³/s', min: 0.05, max: 2, decimals: 2 },
      { symbol: 'H', ascii: 'H', label: 'net head acting on the turbine', unit: 'm', min: 5, max: 60, decimals: 1 },
      { symbol: 'k', ascii: 'k', label: 'turbine efficiency', unit: '', min: 0.7, max: 0.9, decimals: 2 },
    ],
    conversions: [
      { ascii: 'Q', unit: 'L/s', factor: 1000, fromUnit: 'm³/s' },
      { ascii: 'H', unit: 'ft', factor: 3.28084, fromUnit: 'm' },
    ],
    // gamma is the specific weight of water, 9810 N/m3, held constant so the
    // other three variables carry the sampling.
    compute: v => 9810 * v.Q * v.H * v.k,
    context: 'a small irrigation turbine on the Aurora-Quezon canal that a barangay cooperative had been asked to size',
    verb: 'delivers a water power of',
    unknownPhrase: 'the power delivered by the turbine',
    keyConcept: 'Power is the specific weight of water times the discharge times the head, scaled by turbine efficiency. The specific weight is gamma = 9810 N/m3, which is the density 1000 kg/m3 multiplied by gravity 9.81 m/s2. Since gamma already contains g, dividing by 9.81 as well would double-count gravity and inflate the answer a thousandfold. Efficiency k is the share of the hydraulic power that leaves the turbine as shaft power, and it is the only term that can be improved by maintenance rather than by rebuilding.',
    mistakes: [
      'Dividing by gamma = 1000 kg/m3 instead of 9810 N/m3, which is 9.81 times the correct power because the specific weight already includes gravity',
      'Multiplying by g as well as gamma, counting gravity twice and inflating the answer 1000 times',
      'Applying k to the head instead of to the whole product',
    ],
    // Omitting k gives 1/k = 1.11..1.43 and dividing by k gives 1/k^2 =
    // 1.23..2.04; 0.85 and 1.15 sit clear of both.
    distractors: [
      v => 9810 * v.Q * v.H,
      v => 9810 * v.Q * v.H / v.k,
      v => 9810 * v.Q * v.H * v.k * 0.85,
      v => 9810 * v.Q * v.H * v.k * 1.15,
    ],
  },
  {
    formulaId: 'b-total-dynamic-head', area: 'B', unknown: 'H_{total}',
    formulaText: 'H_{total} = H_{static} + H_{velocity} + H_{friction} + H_{pressure}',
    unit: 'm', round: 2,
    vars: [
      { symbol: 'H_{static}', ascii: 'hs', label: 'static head', unit: 'm', min: 2, max: 40, decimals: 1 },
      { symbol: 'H_{velocity}', ascii: 'hv', label: 'velocity head', unit: 'm', min: 0.05, max: 2, decimals: 2 },
      { symbol: 'H_{friction}', ascii: 'hf', label: 'friction head loss', unit: 'm', min: 0.5, max: 15, decimals: 1 },
      { symbol: 'H_{pressure}', ascii: 'hp', label: 'pressure head', unit: 'm', min: 3, max: 25, decimals: 1 },
    ],
    conversions: [
      { ascii: 'hs', unit: 'ft', factor: 3.28084, fromUnit: 'm' },
      { ascii: 'hf', unit: 'ft', factor: 3.28084, fromUnit: 'm' },
    ],
    // Every component has a positive minimum. If pressure head were allowed to
    // reach zero then the "forgot pressure" option would equal the answer
    // exactly, and the spec would be unanswerable.
    compute: v => v.hs + v.hv + v.hf + v.hp,
    context: 'a booster pump station on a municipal water line that a city engineer was sizing for the dry-season months',
    verb: 'has a total dynamic head of',
    unknownPhrase: 'the total dynamic head of the system',
    keyConcept: 'The total dynamic head is the sum of four separate losses, each a length of water column, so they add directly with no conversion between them. Static head is the lift, velocity head is the kinetic energy the flow carries, friction head is what the pipe walls and fittings eat, and pressure head is whatever the system is already holding against the pump. A pump is chosen on the total, not the lift: a long pipeline with the same lift can need several times the power once friction is counted.',
    mistakes: ['Using the static head alone, which is the commonest sizing error and ignores every working loss', 'Combining friction and pressure losses into a single smaller term', 'Subtracting the velocity head on the theory that the flow slows before the pump'],
    // Dropping one component leaves 0.05..0.9 of the answer depending on which
    // and where in the range the sample fell; all three omissions stay in band
    // because no component is ever zero.
    distractors: [
      v => v.hs + v.hv + v.hp,
      v => v.hs + v.hv + v.hf,
      v => v.hv + v.hf + v.hp,
      v => (v.hs + v.hv + v.hf + v.hp) * 1.15,
    ],
  },
  {
    formulaId: 'b-static-head', area: 'B', unknown: 'H_{static}',
    formulaText: 'H_{static} = (elevation, pump to water surface) − (elevation, pump to junction of lateral and main)',
    unit: 'm', round: 2,
    vars: [
      { symbol: 'e_s', ascii: 'es', label: 'elevation from pump to source water surface', unit: 'm', min: 15, max: 30, decimals: 0 },
      { symbol: 'e_j', ascii: 'ej', label: 'elevation from pump to junction of lateral and main', unit: 'm', min: 2, max: 12, decimals: 0 },
    ],
    conversions: [
      { ascii: 'es', unit: 'ft', factor: 3.28084, fromUnit: 'm' },
      { ascii: 'ej', unit: 'ft', factor: 3.28084, fromUnit: 'm' },
    ],
    // The source elevation is floored at 15 m and the junction capped at 12 m,
    // so the difference is 3..28 m and never negative.
    compute: v => v.es - v.ej,
    context: 'a pump installed at the tail end of a gravity-fed irrigation lateral, lifting from the canal to the farm turnout',
    verb: 'must overcome a static head of',
    unknownPhrase: 'the static head on the system',
    keyConcept: 'Static head is a difference of elevations, not a single lift, and the handbook writes it as the source water surface above the pump minus the junction of the lateral and main above the same pump. The junction is the reference point where the water is actually wanted, so the figure that matters is the vertical distance from the water surface down to that junction. Measuring from the pump instead would hand over more head than the system needs, and the surplus shows up as wasted pumping cost.',
    mistakes: ['Adding the two elevations instead of subtracting them', 'Using the elevation of the pump itself rather than the difference to the junction', 'Reading the static head off a barometer reading taken at ground level instead of the water surface'],
    // Adding the elevations is 1.07..9x; either elevation alone is 0.03..5x,
    // and 1.15 is the fourth. The junction elevation is floored at 2 m so the
    // "water surface only" option can never round onto the answer.
    distractors: [
      v => v.es + v.ej,
      v => v.ej,
      v => v.es,
      v => (v.es - v.ej) * 1.15,
    ],
  },
  {
    formulaId: 'b-pressure-head', area: 'B', unknown: 'h_p',
    formulaText: 'h_p = P / \\gamma',
    unit: 'm', round: 2,
    vars: [
      { symbol: 'P', ascii: 'P', label: 'pressure in the line', unit: 'Pa', min: 20000, max: 500000, decimals: 0 },
    ],
    conversions: [
      { ascii: 'P', unit: 'kPa', factor: 0.001, fromUnit: 'Pa' },
      { ascii: 'P', unit: 'psi', factor: 0.000145038, fromUnit: 'Pa' },
    ],
    // gamma is the specific weight of water, 9810 N/m3, and Pa / (N/m3) is
    // metres, so the answer needs no further scaling.
    compute: v => v.P / 9810,
    context: 'a pressure tap on the discharge main of a booster station feeding a barangay water line',
    verb: 'corresponds to a pressure head of',
    unknownPhrase: 'the pressure head in the line',
    keyConcept: 'Pressure head is pressure divided by the specific weight of water, gamma = 9810 N/m3, which converts a pressure in pascals into a height of water column in metres. This is the same gamma the power formula uses, and it is what makes pressure and head interchangeable in a water system. The conversion is not symmetric with density: 1000 kg/m3 would give a number 9.81 times too large, because specific weight already contains gravity.',
    mistakes: [
      'Dividing by 1000 kg/m3 instead of 9810 N/m3, which returns 9.81 times the correct head',
      'Dividing by 9.81 alone, forgetting that the specific weight already contains g and inflating the head a thousandfold',
      'Reading a kPa gauge reading as though it were pascals, which shrinks the head a thousandfold',
    ],
    // Dividing by 1000 instead of 9810 is a flat 9.81x; the three multiples are
    // 0.85, 1.15 and 1.4. The g and kPa errors are 1000x and 0.001x, both out
    // of band, so they stay in mistakes.
    distractors: [
      v => v.P / 1000,
      v => (v.P / 9810) * 0.85,
      v => (v.P / 9810) * 1.15,
      v => (v.P / 9810) * 1.4,
    ],
  },
  {
    formulaId: 'b-friction-head', area: 'B', unknown: 'H_{friction}',
    formulaText: 'H_{friction} = H_{friction,main} + H_{friction,lateral}',
    unit: 'm', round: 3,
    vars: [
      { symbol: 'H_{friction,main}', ascii: 'hm', label: 'friction loss along the main', unit: 'm', min: 0.5, max: 12, decimals: 1 },
      { symbol: 'H_{friction,lateral}', ascii: 'hl', label: 'friction loss along the lateral', unit: 'm', min: 0.05, max: 2.5, decimals: 2 },
    ],
    conversions: [
      { ascii: 'hm', unit: 'ft', factor: 3.28084, fromUnit: 'm' },
      { ascii: 'hl', unit: 'in', factor: 39.3701, fromUnit: 'm' },
    ],
    compute: v => v.hm + v.hl,
    context: 'a newly installed buried main and lateral in a barangay where the pipework was flushed and pressure-logged',
    verb: 'loses a combined friction head of',
    unknownPhrase: 'the total friction head loss',
    keyConcept: 'Every length of pipe between the pump and the field costs head, and a distribution system has two of them, so the friction head is the sum of the main loss and the lateral loss. The main carries the whole flow and is usually the larger share, while the lateral carries only what this farm needs and is shorter. The two are computed separately and added; neither one alone represents what the pump has to overcome.',
    mistakes: ['Taking the larger of the two losses and calling it the total', 'Counting the main loss once per lateral instead of once for the system', 'Adding the losses in head units without converting the lateral to the same length basis', 'Keeping only the lateral loss, which is out of band as an option: the main carries the whole flow, so at its thinnest the lateral is 0.4% of the total and the question would be guessable'],
    // "Forgot the lateral" is hm alone. "Forgot the main" cannot be offered:
    // the main carries the entire flow, so hl at its 0.05 m minimum against hm
    // at its 12 m maximum is 0.4% of the answer, below the 1% floor. Counting
    // the main twice is the structural near-miss instead, at 0.5..0.86 of the
    // answer, and 0.85 and 1.15 are the remaining pair.
    distractors: [
      v => v.hm,
      v => 2 * v.hm + v.hl,
      v => (v.hm + v.hl) * 0.85,
      v => (v.hm + v.hl) * 1.15,
    ],
  },
];
