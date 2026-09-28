// Area C drill specs, part 4 of 4: Lumber board foot, belt speed and power,
// the pump and fan affinity laws, air power, fan pitch, and the dryer-fan
// specific speed. Nine specs, taking coverage from 186 to 195 of 240.
//
// This batch is where the pairwise probe earned its place. Six of these nine
// boxes were rebuilt after scripts/probe-spec.mjs measured them, and the
// failures were not marginal - two of them produced options that were
// IDENTICAL to five decimal places, which no amount of staring at the algebra
// would have revealed without sampling the box.
//
// The recurring trap is that these are all POWER LAWS, so a distractor built
// from the wrong exponent is at that exponent MINUS the answer's own exponent.
// That is the same one-power-higher pattern that caused every rejection in
// batch 3, but batch 4 is worse, because here the exponent IS the content of
// the relation. There is no part of the printed formula left over to get
// right once the exponent is wrong.
//
// c-pump-laws: the 3rd-power error has ratio r^(-1/6) where r = H2/H1. The
// first box ran r from 2.5, and 2.5^(-1/6) is 0.858 - which CONTAINS the 0.85
// scalar, and the probe measured those two options 0.012 percent apart. The
// estimate that produced 0.739 was just wrong arithmetic. Lifting the H2 floor
// to 50 puts the band at 0.626..0.788 and the gap at 7.8 percent.
//
// c-fan-laws took three attempts and failed twice, for two different reasons
// that are worth separating. Attempt 1: doubling the head exponent gives ratio
// (H2/H1)^(1/4) and dropping the flow term gives (Q2/Q1)^(-1/2), and those
// coincide exactly when (Q2/Q1)^2 = H2/H1 - the probe found them equal to five
// decimal places, because the box permitted Q2/Q1 = sqrt(6) = 2.45. The
// hand-check that the bands were disjoint compared sqrt(H1/H2) against
// Q2/Q1 when the equation is Q2/Q1 against sqrt(H2/H1), which is the same
// numbers and the opposite conclusion. Attempt 2 swapped the dropped flow term
// for a doubled flow exponent, which fixed that collision and created a worse
// one: the new band (Q2/Q1)^(1/2) passes through 2.0 and the 2x scalar sat
// exactly on it at Q2/Q1 = 4.0. The lesson is that moving a scalar away from
// one band is no safer than moving a band - both constraints have to hold at
// once. Attempt 3 separates the two bands instead, and only then does 2.0 fall
// in the gap between them.
//
// c-belt-power: the two power-error bands are E^2 = 0.16..0.49 and
// 1/E = 1.429..2.5. It is 1/E_max that sets the bottom of the upper band, so
// the attractive-looking 0.85 efficiency ceiling drops that band to 1.176 and
// leaves the 1.15 scalar 2.25 percent away. A 0.7 ceiling is realistic for a
// small agricultural pump-belt drive and moves the gap to 24 percent.
//
// c-air-power is the one spec in this batch that was wrong for a reason the
// probe reported only indirectly. Its box had nu at 1.1 to 1.29 N/m3 against a
// head in pascals, and dropping the specific weight therefore landed at
// 1/nu = 0.78 to 0.91 - a band that swallowed the 0.85 scalar and forced the
// whole spec onto a 0.5 and 2 pair. The cause was a units error, not a
// property of the formula: the printed nu is the SPECIFIC WEIGHT of air, so
// it is about 12 N/m3 rather than the 1.2 that the density in kg/m3 happens
// to be, and because that g is already inside it, the H in the product has to
// be a head in metres rather than a pressure. With the units right the
// dropped-nu band is 0.080 to 0.091, the two structural options sit at
// opposite ends of the scale, and the ordinary 0.85 and 1.15 pair comes back
// with a 26 percent margin. Worth recording because a collision report is
// evidence about the BOX, not about the formula, and the box was the thing
// that was broken.
//
// c-specific-speed-dryer-fan carries the batch's only range constraint that is
// not about collision. The two pressure misreadings are at Ps^(+0.25) and
// Ps^(-0.25) of the answer, and those are EQUAL at Ps = 1. A pressure box
// starting at 0.5 contains 1, so the two options would render identically; the
// floor is 1.2 so they provably cannot. That is a constraint the algebra
// states plainly, but it is invisible if you only look at the ratios rather
// than at what the ratios are equal to.
import type { DrillSpec } from './formula-drills';

export const areaCElectrical4Specs: DrillSpec[] = [
  // ------------------------------------------------------------ lumber
  {
    formulaId: 'c-board-foot', area: 'C', unknown: 'Bd.Ft.',
    formulaText: 'Bd.Ft. = \\frac{L_{in} \\times W_{in} \\times H_{ft}}{12}',
    unit: 'Bd.Ft.', round: 4,
    vars: [
      { symbol: 'L_{in}', ascii: 'Lin', label: 'length', unit: 'in', min: 24, max: 240, decimals: 1 },
      { symbol: 'W_{in}', ascii: 'Win', label: 'width', unit: 'in', min: 1, max: 12, decimals: 1 },
      { symbol: 'H_{ft}', ascii: 'Hft', label: 'thickness', unit: 'ft', min: 0.0833, max: 1.5, decimals: 4 },
    ],
    conversions: [
      { ascii: 'Lin', unit: 'ft', factor: 0.0833, fromUnit: 'in' },
      { ascii: 'Hft', unit: 'in', factor: 12, fromUnit: 'ft' },
    ],
    // The 12 is not a fudge factor, it is the definition. One board foot is one
    // inch by twelve inches by one foot, which is 12 square-inch-feet, so any
    // cross-section measured in square inches has to be divided by 12 to become
    // board feet. Note the formula mixes units deliberately: L and W are in
    // INCHES while the thickness H is in FEET, and the printed expression
    // already contains the 12 that reconciles the two. A student who converts
    // everything to one system before substituting gets a different number and
    // should get the same one - the /12 and the unit change are two faces of
    // the same conversion.
    //
    // The two structural distractors are the two ways to get that wrong. Omitting
    // the divisor is a flat 12x. Dividing by 144 instead is the subtler one:
    // 144 is the right divisor for the ALL-INCHES form, and applying it to a
    // thickness already in feet lands at exactly 1/12. Both sit far from the
    // scalar pair, and the 12x option is the only one above 2 in the whole
    // box, so the spread is wide enough that the four options never crowd.
    compute: v => (v.Lin * v.Win * v.Hft) / 12,
    context: 'a stack of sawn lumber being tallied at a roadside mill in Isabela before it goes to a housing project',
    verb: 'contains',
    unknownPhrase: 'the volume of the lumber in board feet',
    keyConcept: 'A board foot is one inch by twelve inches by one foot, so 12 square-inch-feet, and that is where the divisor of 12 comes from rather than from any allowance for waste or kerf. The formula deliberately mixes unit systems: the length and width are in inches while the thickness is in feet, so the expression already carries the factor that reconciles them. Converting the whole cross-section to one system first and then dividing by 12 would double-count it, which is the error the 144 divisor option represents. Lumber is measured in board feet rather than cubic feet because buyers specify it by nominal section size, and the nominal size is a dressed size that differs from the actual by the planing allowance.',
    mistakes: [
      'Omitting the divisor of 12 and reporting square-inch-feet',
      'Dividing by 144, the all-inches divisor, against a thickness already in feet',
      'Converting the length to feet as well and then still dividing by 12, which reconciles the units twice',
    ],
    distractors: [
      v => v.Lin * v.Win * v.Hft,
      v => (v.Lin * v.Win * v.Hft) / 144,
      v => 0.85 * ((v.Lin * v.Win * v.Hft) / 12),
      v => 1.15 * ((v.Lin * v.Win * v.Hft) / 12),
    ],
  },
  {
    formulaId: 'c-board-foot-from-log', area: 'C', unknown: 'Bd.Ft.',
    formulaText: 'Bd.Ft. = \\frac{(D - 4)^2\\,L}{16}',
    unit: 'Bd.Ft.', round: 4,
    vars: [
      { symbol: 'D', ascii: 'D', label: 'small-end diameter of the log', unit: 'in', min: 6, max: 30, decimals: 1 },
      { symbol: 'L', ascii: 'L', label: 'length of the log', unit: 'ft', min: 4, max: 20, decimals: 1 },
    ],
    conversions: [
      { ascii: 'D', unit: 'mm', factor: 25.4, fromUnit: 'in' },
      { ascii: 'L', unit: 'm', factor: 0.3048, fromUnit: 'ft' },
    ],
    // This is the Doyle scale, and every piece of it is an approximation the
    // student has to apply rather than derive. Bark is assumed to be 1 inch
    // thick, which is where the 4 comes from: one inch off the radius becomes
    // two inches off the diameter, and squaring doubles that to 4. The square
    // is not a geometric flourish either, because volume goes as diameter
    // squared for a fixed length. The 16 is the square of the 4, converting
    // the squared-inch section into board feet.
    //
    // D is offered in millimetres, which looks perverse until you read the
    // formula: the subtracted 4 IS 4 inches of bark allowance, so the
    // expression only makes sense in inches. Handing the student a diameter in
    // millimetres and a bare "4" is exactly the trap - the conversion has to
    // happen before the subtraction, not after.
    compute: v => (Math.pow(v.D - 4, 2) * v.L) / 16,
    context: 'a 20-foot native tree being estimated for a pole length on a reforestation contract in Palawan',
    verb: 'yields, by the Doyle rule,',
    unknownPhrase: 'the board foot content of the log',
    keyConcept: 'The Doyle scale estimates log volume in board feet from the small-end diameter alone, and it is a rule of thumb rather than a measurement. The 4 in the brackets is the bark and sapwood allowance: one inch off the radius becomes two inches off the diameter, and squaring that turns the allowance into 4. The square itself is geometric, since a cylinder of fixed length goes as diameter squared, and the 16 is that same 4 squared, converting the squared-inch section into board feet. Doyle is well known to UNDERESTIMATE small logs and to be reasonably accurate in the middle of its range, which is why the more exact Scribner and Hoppus scales are used where the tonnage is contractually binding.',
    mistakes: [
      'Forgetting the bark allowance and squaring D directly, which overstates the volume badly on small logs',
      'Dropping the square and treating the section as a linear quantity',
      'Subtracting 4 from a diameter that has been converted to millimetres, where 4 no longer means 4 inches',
    ],
    // The two structural bands are 1/(D-4) = 0.0385..0.5 and D^2/(D-4)^2 =
    // 1.331..9, and they are disjoint from each other and from the scalar pair.
    // The tightest approach is the forgotten-bark option against the 1.15
    // scalar at 13.6 percent, which sets how far the 0.5 end of that band is
    // allowed to reach.
    distractors: [
      v => ((v.D - 4) * v.L) / 16,
      v => (v.D * v.D * v.L) / 16,
      v => 0.85 * ((Math.pow(v.D - 4, 2) * v.L) / 16),
      v => 1.15 * ((Math.pow(v.D - 4, 2) * v.L) / 16),
    ],
  },

  // ------------------------------------------------- belts, pumps, fans
  {
    formulaId: 'c-belt-speed', area: 'C', unknown: 'V',
    formulaText: 'V = 2\\pi N R = \\pi N D',
    unit: 'm/min', round: 4,
    vars: [
      { symbol: 'N', ascii: 'N', label: 'speed of the drive pulley', unit: 'rpm', min: 100, max: 1800, decimals: 0 },
      { symbol: 'D', ascii: 'D', label: 'pitch diameter of the drive pulley', unit: 'm', min: 0.075, max: 0.5, decimals: 3 },
    ],
    conversions: [
      { ascii: 'N', unit: 'Hz', factor: 0.016667, fromUnit: 'rpm' },
      { ascii: 'D', unit: 'mm', factor: 1000, fromUnit: 'm' },
    ],
    // The unit is m/min, not m/s, and that is not a detail. N is in rev/min
    // and D is a circumference in metres, so the product is metres per MINUTE.
    // A V-belt on a farm thresher at 10 m/s is 600 m/min, which is the figure a
    // belt catalogue quotes, so the m/min result is the one to expect.
    //
    // The printed identity is the radius form and the diameter form side by
    // side, which makes the radius/diameter confusion the natural error and the
    // reason it is offered. Using R where D belongs lands at exactly 0.5, and
    // dropping the pi is a flat 0.3183. The two are 36 percent apart at the
    // nearest point, which is the tightest pair in this spec.
    compute: v => Math.PI * v.N * v.D,
    context: 'the drive pulley on a rice thresher being checked against the belt maker\'s speed table in Pangasinan',
    verb: 'turns at',
    unknownPhrase: 'the belt speed over the pulley',
    keyConcept: 'Belt speed is the pitch-line velocity, and it is what actually decides whether a belt grips or slips, so it is checked before anything else. Multiplying a circumference in metres by a speed in rev/min gives metres per minute, not per second, which is why the answer is quoted in m/min: a V-belt at 10 m/s is 600 m/min, and that is the figure belt catalogues tabulate. The printed identity gives the radius and diameter forms together because the factor of two between them is the single easiest thing to lose, and because a pulley is nearly always dimensioned by its diameter on a drawing while the derivation starts from the radius. Belt speed is also capped in practice, since a centrifugal tension limit sets in above roughly 25 to 30 m/s and the belt leaves the pulley.',
    mistakes: [
      'Using the pulley radius where the diameter belongs, which halves the answer',
      'Dropping the pi, or reading the rev/min result as m/s',
      'Treating N as rev/s when it is rev/min, which divides the answer by 60',
    ],
    distractors: [
      v => Math.PI * v.N * (v.D / 2),
      v => v.N * v.D,
      v => 0.85 * (Math.PI * v.N * v.D),
      v => 1.15 * (Math.PI * v.N * v.D),
    ],
  },
  {
    formulaId: 'c-belt-power', area: 'C', unknown: 'P_{belt}',
    formulaText: 'P_{belt} = \\frac{P_{fluid}}{E_{pump}}',
    unit: 'kW', round: 4,
    vars: [
      { symbol: 'P_{fluid}', ascii: 'Pf', label: 'fluid power delivered by the pump', unit: 'kW', min: 0.5, max: 50, decimals: 2 },
      { symbol: 'E_{pump}', ascii: 'E', label: 'pump efficiency', unit: 'decimal', min: 0.4, max: 0.7, decimals: 2 },
    ],
    conversions: [
      { ascii: 'Pf', unit: 'hp', factor: 1.341, fromUnit: 'kW' },
    ],
    // Efficiency here is the PUMP's, and it is the reason the belt has to be
    // rated above the water power. A pump that delivers 10 kW to the water is
    // not absorbing 10 kW from the belt; it is absorbing 10/E, and the
    // difference goes to friction, leakage and heat in the casing. Sizing the
    // drive on the fluid power is the standard field error, and it
    // under-rates the belt.
    //
    // The efficiency is offered as a decimal and the fluid power in hp, since
    // that is how agricultural machinery is still specified. The efficiency is
    // NOT given a conversion, because the generator already renders a decimal
    // efficiency as a percentage in the narrative and a second conversion would
    // apply the factor twice.
    compute: v => v.Pf / v.E,
    context: 'a 5 hp irrigation pump on a rice paddy being checked against the belt rating on the tractor PTO shaft in Iloilo',
    verb: 'is rated to deliver',
    unknownPhrase: 'the power the belt drive must transmit',
    keyConcept: 'The power a belt must transmit is always greater than the fluid power the pump delivers, because the pump is not lossless. Efficiency is defined as fluid power divided by shaft power, so the shaft power - which is what the belt carries - is the fluid power divided by E, and at 70 percent efficiency that is 1.43 times the water power. Sizing a drive on the fluid power is the classic field error and it under-rates the belt. Note also that the E in this formula is the PUMP efficiency and not the belt or pulley efficiency, which are separate and much higher; conflating them is a common misreading of the subscript.',
    mistakes: [
      'Multiplying by the efficiency instead of dividing, which under-rates the belt drive',
      'Using the belt efficiency rather than the pump efficiency named in the subscript',
      'Applying the efficiency twice, or quoting the fluid power as the shaft power',
    ],
    // The bands are E^2 = 0.16..0.49 and 1/E = 1.429..2.5. Note that the
    // "divided twice" option is at 1/E, not 1/E^2: the answer is Pf/E and the
    // option is Pf/E^2, so the ratio is 1/E and the square of the efficiency
    // does not survive into the option at all. The 0.7 ceiling is what keeps
    // 1.429 clear of the 1.15 scalar.
    distractors: [
      v => v.Pf * v.E,
      v => v.Pf / (v.E * v.E),
      v => 0.85 * (v.Pf / v.E),
      v => 1.15 * (v.Pf / v.E),
    ],
  },
  {
    formulaId: 'c-pump-laws', area: 'C', unknown: 'N_2',
    formulaText: '\\frac{N_1^2}{N_2^2} = \\frac{H_1}{H_2} \\qquad\\text{(speed vs. head)}',
    unit: 'rpm', round: 4,
    vars: [
      { symbol: 'N_1', ascii: 'N1', label: 'original pump speed', unit: 'rpm', min: 600, max: 1800, decimals: 0 },
      { symbol: 'H_1', ascii: 'H1', label: 'head at the original speed', unit: 'm', min: 4, max: 12, decimals: 1 },
      { symbol: 'H_2', ascii: 'H2', label: 'head wanted at the new speed', unit: 'm', min: 50, max: 90, decimals: 1 },
    ],
    conversions: [
      { ascii: 'N1', unit: 'Hz', factor: 0.016667, fromUnit: 'rpm' },
      { ascii: 'H1', unit: 'ft', factor: 3.28084, fromUnit: 'm' },
      { ascii: 'H2', unit: 'ft', factor: 3.28084, fromUnit: 'm' },
    ],
    // The printed row is six relations in one, three in speed and three in
    // impeller diameter, and the note under it is the whole content: capacity
    // goes as the 1st power of N, head as the 2nd and power as the 3rd, while
    // diameter takes 3, 2 and 5. This spec drives the speed-versus-head one, so
    // the exponent is a half and not an integer, and that is what makes the
    // two neighbouring exponents the obvious wrong answers.
    //
    // H1 and H2 have DISJOINT ranges, so r = H2/H1 can never be 1. That is not
    // tidiness: at r = 1 every power-law distractor collapses exactly onto the
    // answer, and since the two heads are sampled independently, overlapping
    // ranges would make a duplicated option a live failure instead of a
    // theoretical one. Both heads may be shown in feet, which is safe because
    // only their ratio appears.
    compute: v => v.N1 * Math.sqrt(v.H2 / v.H1),
    context: 'an irrigation pump being matched to a new head condition after a canal was re-levelled in Benguet',
    verb: 'must run at',
    unknownPhrase: 'the speed that will deliver the required head',
    keyConcept: 'The affinity laws for a geometrically similar pump are three relations built on one idea: for a fixed impeller, capacity goes as the first power of speed, head as the second and power as the third. They hold only while the pump is running on its own curve at similar flows, and they break down badly once the operating point is pushed towards shutoff, which is why they are used for trimming a pump a little rather than for resizing it a lot. The three errors worth offering are the neighbouring exponents - using the first power for a head question, or the third - and they are offered here precisely because the exponent is the entire content of the relation. The impeller-diameter laws in the same printed row use 3, 2 and 5 in the same order, the fifth power for power being the reason a small diameter trim saves so much energy.',
    mistakes: [
      'Using the first power of N, the capacity law, for what is a head question',
      'Using the third power, the power law, which overstates the speed needed',
      'Inverting the head ratio and solving for the ratio of speeds the wrong way round',
    ],
    // The two exponent bands are r^(1/2) = 1.939..4.730 and r^(-1/6) =
    // 0.596..0.788, and the tightest pair in the box is the 3rd-power option
    // against the 0.85 scalar at 7.3 percent. The H2 floor is what buys that
    // margin: at a floor of 30 the 3rd-power band reaches 0.858 and swallows
    // the scalar entirely.
    distractors: [
      v => v.N1 * (v.H2 / v.H1),
      v => v.N1 * Math.pow(v.H2 / v.H1, 1 / 3),
      v => 0.85 * (v.N1 * Math.sqrt(v.H2 / v.H1)),
      v => 1.15 * (v.N1 * Math.sqrt(v.H2 / v.H1)),
    ],
  },
  {
    formulaId: 'c-fan-laws', area: 'C', unknown: 'D_2',
    formulaText: 'D_2 = D_1\\left(\\frac{H_1}{H_2}\\right)^{1/4}\\left(\\frac{Q_2}{Q_1}\\right)^{1/2}',
    unit: 'mm', round: 4,
    vars: [
      { symbol: 'D_1', ascii: 'D1', label: 'original impeller diameter', unit: 'mm', min: 200, max: 600, decimals: 0 },
      { symbol: 'H_1', ascii: 'H1', label: 'pressure at the original duty', unit: 'mm', min: 30, max: 40, decimals: 0 },
      { symbol: 'H_2', ascii: 'H2', label: 'pressure wanted at the new duty', unit: 'mm', min: 48, max: 70, decimals: 0 },
      { symbol: 'Q_1', ascii: 'Q1', label: 'original volume flow', unit: 'cfm', min: 2, max: 5, decimals: 1 },
      { symbol: 'Q_2', ascii: 'Q2', label: 'volume flow wanted at the new duty', unit: 'cfm', min: 25, max: 90, decimals: 0 },
    ],
    conversions: [
      { ascii: 'D1', unit: 'in', factor: 0.03937, fromUnit: 'mm' },
      { ascii: 'Q2', unit: 'm^3/s', factor: 0.0004719, fromUnit: 'cfm' },
    ],
    // This is the printed relation regrouped, not a new one. The source prints
    // D_2 = D_1 (H_1^(1/4)/Q_1^(1/2))(Q_2^(1/2)/H_2^(1/4)), which collects
    // into the form above because every Q sits at the half power and every H at
    // the quarter. Regrouping is worth doing out loud: the printed form looks
    // like four separate factors and hides the fact that there are only two
    // ratios, each with one exponent.
    //
    // The exponents are the shallowest in the whole formula list - a quarter
    // and a half - so the two neighbouring errors are doubling either one, and
    // both are offered. See the header for why the ranges are what they are:
    // the head band and the flow band have to be pulled apart, or the two
    // doubling errors coincide at some admissible input and the box renders
    // the same option twice.
    compute: v => v.D1 * Math.pow(v.H1 / v.H2, 0.25) * Math.sqrt(v.Q2 / v.Q1),
    context: 'an axial fan on a grain dryer being re-impellered to a higher static pressure in a rice mill in Ilocos Norte',
    verb: 'needs an impeller of',
    unknownPhrase: 'the impeller diameter that will reach the new duty',
    keyConcept: 'The fan laws are the pump affinity laws with the exponents shifted down by a half, because a fan moves a gas rather than displacing a liquid and the pressure rise scales differently from the head. Capacity still follows the first power of speed, but static pressure follows about the square of speed, and power the cube. What makes the printed fan relation unusual is the impeller-diameter form, where head takes only the FOURTH power of D and flow the square root: D_2 = D_1 (H_1/H_2)^(1/4) (Q_2/Q_1)^(1/2). The shallow exponents are also why fan impellers are large - a 10 percent diameter increase is only 2.5 percent on head - and why the power relation in the note, P_2 = P_1 (D_2/D_1)^5 (N_2/N_1)^3, is dominated by the fifth power on diameter.',
    mistakes: [
      'Doubling the head exponent from a quarter to a half, which is the pump law rather than the fan law',
      'Doubling the flow exponent, or reading the two printed factor groups as independent rather than as one ratio each',
      'Applying the impeller-diameter laws to speed, or the speed laws to diameter',
    ],
    // The two doubling options are (H2/H1)^(3/4) = 1.147..1.830 and
    // (Q2/Q1)^(1/2) = 2.236..6.708, and the 2x scalar falls in the 22 percent
    // gap between them, clear of both by 9 and 12 percent. That gap is the
    // whole design constraint on this spec.
    distractors: [
      v => v.D1 * Math.pow(v.H2 / v.H1, 0.5) * Math.sqrt(v.Q2 / v.Q1),
      v => v.D1 * Math.pow(v.H1 / v.H2, 0.25) * (v.Q2 / v.Q1),
      v => 0.5 * (v.D1 * Math.pow(v.H1 / v.H2, 0.25) * Math.sqrt(v.Q2 / v.Q1)),
      v => 2 * (v.D1 * Math.pow(v.H1 / v.H2, 0.25) * Math.sqrt(v.Q2 / v.Q1)),
    ],
  },
  {
    formulaId: 'c-air-power', area: 'C', unknown: 'P',
    formulaText: 'P = Q\\,\\nu H',
    unit: 'W', round: 4,
    vars: [
      { symbol: 'Q', ascii: 'Q', label: 'volume flow rate', unit: 'm^3/s', min: 1, max: 20, decimals: 1 },
      { symbol: '\\nu', ascii: 'nu', label: 'specific weight of air', unit: 'N/m^3', min: 11.0, max: 12.5, decimals: 2 },
      { symbol: 'H', ascii: 'H', label: 'head of air against the fan', unit: 'm', min: 0.5, max: 20, decimals: 1 },
    ],
    conversions: [
      { ascii: 'Q', unit: 'cfm', factor: 2118.88, fromUnit: 'm^3/s' },
      { ascii: 'nu', unit: 'lbf/ft^3', factor: 0.062428, fromUnit: 'N/m^3' },
      { ascii: 'H', unit: 'ft', factor: 3.28084, fromUnit: 'm' },
    ],
    // The printed nu is the SPECIFIC WEIGHT, not the density, and that single
    // word fixes both the magnitude and the unit of H.
    //
    // Specific weight is density times g, so for air it is about 12 N/m3 and
    // not the 1.2 that the density in kg/m3 happens to be. And because the g
    // is already inside nu, the H in this product must be a HEAD in metres
    // rather than a pressure: (m3/s) x (N/m3) x (m) is N m/s, which is watts.
    // Substituting a pressure in pascals gives N^2/(s m^2), which is not a
    // power in any unit system. The first box for this spec had nu at 1.1 to
    // 1.29 N/m3 against a head in pascals, which is doubly wrong, and the
    // symptom was a distractor collision rather than an obvious unit complaint:
    // dropping nu then sat at 1/nu = 0.78 to 0.91, a band that swallowed the
    // 0.85 scalar. With the units right the band is 0.080 to 0.091, the two
    // structural options sit at opposite ends of the scale, and the ordinary
    // 0.85 and 1.15 scalars are safe again.
    //
    // All three variables convert, which is the point: cfm against lbf/ft^3
    // against feet of air gives the answer in foot-pounds per second, and
    // dividing by 550 for horsepower is the last step. That is the classic
    // mixed-unit fan problem and every conversion has to precede substitution.
    compute: v => v.Q * v.nu * v.H,
    context: 'a centrifugal fan on a rice dryer being specified from its air power requirement by a design consultant in Ilocos Norte',
    verb: 'must deliver',
    unknownPhrase: 'the air power of the fan',
    keyConcept: 'Air power is the power the air actually carries, and it is the theoretical figure a fan is selected against before any efficiency is applied. The printed nu is the SPECIFIC WEIGHT of air, not its density, even though the symbol is the one conventionally used for kinematic viscosity, and that is why the head in the formula is a LENGTH in metres rather than a pressure: the product Q x nu x H is only a power if H is a length, because the g is already folded into the specific weight. Because specific weight varies only between about 11.0 and 12.5 N/m3 over the range of conditions a fan meets, it is very nearly a constant - the flow and the head do essentially all the work in sizing a fan, and air density is a second-order correction that is still worth carrying at altitude.',
    mistakes: [
      'Substituting the air density instead of the specific weight, which is low by a factor of g',
      'Treating the head as a pressure in pascals rather than a length, which no longer gives a power at all',
      'Dropping the specific weight, which understates the answer by a factor of about twelve',
    ],
    // The bands are 1/nu = 0.080..0.091 and nu = 11.0..12.5, at opposite ends
    // of the scale, so the scalar pair is safe and the tightest approach is
    // the usual 26 percent between 0.85 and 1.15.
    distractors: [
      v => v.Q * v.H,
      v => v.Q * v.nu * v.nu * v.H,
      v => 0.85 * (v.Q * v.nu * v.H),
      v => 1.15 * (v.Q * v.nu * v.H),
    ],
  },
  {
    formulaId: 'c-propeller-fan-pitch', area: 'C', unknown: 'P',
    formulaText: 'P = 2\\pi r \\tan\\alpha',
    unit: 'm', round: 4,
    vars: [
      { symbol: 'r', ascii: 'r', label: 'radius of the fan', unit: 'm', min: 0.3, max: 1.5, decimals: 2 },
      { symbol: '\\alpha', ascii: 'alpha', label: 'angle of fan blade twist', unit: 'deg', min: 10, max: 45, decimals: 1 },
    ],
    conversions: [
      { ascii: 'r', unit: 'ft', factor: 3.281, fromUnit: 'm' },
      { ascii: 'alpha', unit: 'rad', factor: 0.0174533, fromUnit: 'deg' },
    ],
    // Pitch is the axial distance the blade advances per revolution, so it is
    // a length. It is the setting that trades air volume against pressure: a
    // blade set to a fine pitch moves a lot of air at low pressure, and a steep
    // one moves less at higher pressure. The geometry is a helix - one turn of
    // the blade advances 2 pi r, and the tangent of the blade angle is
    // advance over circumference - which is where both the 2 pi and the
    // tangent come from.
    //
    // The angle is printed in DEGREES and must go into the tangent in radians.
    // Using the angle itself in place of its tangent is ratio tan(a)/a with a
    // in radians, which is 1.0102 at 10 degrees and 1.2732 at 45 - so the
    // answer is barely wrong at a fine pitch and 27 percent out at a steep
    // one, which is exactly the pattern that makes this error survive a few
    // questions and then wreck a design.
    compute: v => 2 * Math.PI * v.r * Math.tan((v.alpha * Math.PI) / 180),
    context: 'the blade setting of a propeller fan on an axial crop dryer being trimmed in a rice mill in Ilocos Norte',
    verb: 'is set to a pitch of',
    unknownPhrase: 'the pitch of the fan blade',
    keyConcept: 'Pitch is the distance the blade advances along the axis in one revolution, so it is a length and it is the setting that trades air volume against pressure. A blade set to a fine pitch moves a large volume of air at low pressure; a steep pitch moves less air at higher pressure, which is why the angle is trimmed when a dryer is starved of air rather than short of head. The formula is a helix: one turn of a blade of radius r advances the air by 2 pi r, and the tangent of the blade angle is that advance divided by the circumference. The angle is printed in degrees and must reach the tangent in radians, and the two are easy to confuse because the slip is so small at a fine pitch - 1 percent at ten degrees, but 27 percent at forty-five.',
    mistakes: [
      'Substituting the angle itself in place of its tangent, a slip that grows from 1 percent to 27 percent across the range',
      'Feeding degrees straight into the tangent, which throws the answer out by a factor of 57.3',
      'Forgetting the 2 pi and reporting an advance per radian rather than per revolution',
    ],
    distractors: [
      v => 2 * Math.PI * v.r * ((v.alpha * Math.PI) / 180),
      v => v.r * Math.tan((v.alpha * Math.PI) / 180),
      v => 0.5 * (2 * Math.PI * v.r * Math.tan((v.alpha * Math.PI) / 180)),
      v => 2 * (2 * Math.PI * v.r * Math.tan((v.alpha * Math.PI) / 180)),
    ],
  },
  {
    formulaId: 'c-specific-speed-dryer-fan', area: 'C', unknown: 'N_s',
    formulaText: 'N_s = \\frac{N\\,Q^{0.5}}{P_s^{0.75}}',
    unit: 'decimal', round: 2,
    vars: [
      { symbol: 'N', ascii: 'N', label: 'speed of the dryer fan', unit: 'rpm', min: 600, max: 1800, decimals: 0 },
      { symbol: 'Q', ascii: 'Q', label: 'airflow of the fan', unit: 'cfm', min: 500, max: 5000, decimals: 0 },
      { symbol: 'P_s', ascii: 'Ps', label: 'pressure requirement', unit: 'in-H2O', min: 1.2, max: 3, decimals: 2 },
    ],
    conversions: [
      { ascii: 'N', unit: 'Hz', factor: 0.016667, fromUnit: 'rpm' },
      { ascii: 'Ps', unit: 'mm-H2O', factor: 0.03528, fromUnit: 'in-H2O' },
    ],
    // Specific speed is an INDEX, not a physical quantity: it is a way of
    // sorting fans so that geometrically similar ones can be found from a
    // catalogue. A LOW number is a high-pressure, low-flow fan of large
    // diameter; a HIGH number is a low-pressure, high-flow fan of small
    // diameter. It is dimensionless only by convention - the printed form
    // carries rpm, cfm and inches of water, so the value changes completely if
    // the units change, and two specific speeds are only comparable when they
    // were computed in the same units. That is why Q is left in cfm here and
    // the flow is not offered in a second unit.
    //
    // The exponents are the whole formula, and both are non-integers: a half on
    // the flow and three quarters on the pressure. The two pressure
    // misreadings sit at Ps^(1/4) and Ps^(-1/4) of the answer, and those are
    // equal at Ps = 1, so a pressure box that reaches 1 would render them as
    // the same option. The floor is 1.2 in-H2O and the ceiling 3, which keeps
    // 1 out of the box entirely.
    compute: v => (v.N * Math.sqrt(v.Q)) / Math.pow(v.Ps, 0.75),
    context: 'a fan catalogue being searched for a replacement to the dryer fan on a palay dryer in Nueva Ecija',
    verb: 'gives a specific speed of',
    unknownPhrase: 'the specific speed of the fan',
    keyConcept: 'Specific speed sorts fans geometrically rather than by rating: fans that share a specific speed are geometrically similar, so a catalogue can be indexed by it. A LOW specific speed is a high-pressure, low-flow fan of large diameter - a forced-draught boiler fan - and a HIGH one is a low-pressure, high-flow fan of small diameter, the kind used to move air through a crop dryer. The index is only dimensionless by CONVENTION, because the printed form carries rpm, cfm and inches of water, so the numerical value changes completely with the unit system and two values are comparable only if they were computed the same way. The exponents are what encode the geometry: a half on the flow and three quarters on the pressure, and a fan that is off by one quarter power on pressure is a different class of fan altogether.',
    mistakes: [
      'Using the first power of the pressure rather than three quarters, which overstates the index by up to 32 percent',
      'Using the half power of the pressure rather than three quarters, which understates it by up to 24 percent',
      'Comparing two fans whose specific speeds were computed in different unit systems',
    ],
    // The three structural bands are Ps^(1/4) = 1.047..1.316, Ps^(-1/4) =
    // 0.760..0.955 and Q^(-1/4) = 0.119..0.211. The first two are disjoint only
    // because 1 is not in the box: at Ps = 1 they would be identical, since
    // 1^(1/4) and 1^(-1/4) are both 1.
    distractors: [
      v => (v.N * Math.sqrt(v.Q)) / Math.pow(v.Ps, 0.5),
      v => (v.N * Math.sqrt(v.Q)) / Math.pow(v.Ps, 1),
      v => (v.N * Math.pow(v.Q, 0.25)) / Math.pow(v.Ps, 0.75),
      v => 0.5 * ((v.N * Math.sqrt(v.Q)) / Math.pow(v.Ps, 0.75)),
    ],
  },
];
