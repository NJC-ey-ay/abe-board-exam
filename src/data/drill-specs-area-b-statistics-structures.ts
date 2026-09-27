// Area B drill specs, part 5 of 6: Frequency Analysis and Statistics, and
// Conservation Structures, Dams and Reservoirs.
//
// This batch has the widest spread of subject matter in Area B, so the
// through-line is not a chain of formulas but a recurring trap: a printed
// constant whose value only means something in one particular set of units.
//
//   b-drop-spillway-capacity   q = C L h^1.5     C is dimensionless
//   b-dam-top-width            W = 0.55 sqrt(H) + 1
//   b-wave-height              H = 0.014 sqrt(D_f)
//   b-orifice-velocity         V = sqrt(2 g h)   g pinned to 9.81
//   b-orifice-discharge        Q = 0.6 A sqrt(2 g h)
//
// In each case the coefficient is not a physical property of the weir or the
// dam; it is a number that absorbs the unit system, and it stops being correct
// the moment the units around it are converted. The drills handle that the way
// the repo already handles the 2.78 in b-water-applied: declare the units that
// make the printed constant correct, and put the conversion in the keyConcept
// rather than silently editing the formula.
//
// For b-orifice-discharge that means A in m2 and h in m with the result in
// m3/s, because that is the basis the printed 0.6 belongs to. The SOURCE NOTE
// added to that formula records the arithmetic: with the printed A in cm2, h in
// cm and Q in lps, the coefficient that actually works is 0.0266, and using 0.6
// on those units is out by a factor of 100.
//
// b-gumbel-return-period is the one two-unknown spec in Area B: the return
// period value and the frequency factor are both unknowns, and K has to be
// derived from the record length and the rank before the answer exists. See the
// rank constraint comment on that spec, which is the whole difficulty of the
// question.
import type { DrillSpec } from './formula-drills';

export const areaBStatisticsStructuresSpecs: DrillSpec[] = [
  {
    formulaId: 'b-gumbel-return-period', area: 'B', unknown: 'X_T',
    formulaText: 'X_T = \\overline{X} + K\\sigma,  K = -(\\sqrt{6}/\\pi)[0.5772 + \\ln(\\ln(N/(N-m+1)))]',
    unit: 'mm', round: 0,
    vars: [
      { symbol: '\\overline{X}', ascii: 'mean', label: 'mean of the annual peak series', unit: 'mm', min: 200, max: 600, decimals: 0 },
      { symbol: '\\sigma', ascii: 'sd', label: 'standard deviation of the series', unit: 'mm', min: 80, max: 300, decimals: 0 },
      { symbol: 'N', ascii: 'N', label: 'years of record', unit: 'yr', min: 30, max: 100, decimals: 0 },
      { symbol: 'm', ascii: 'm', label: 'rank of the event in descending order', unit: '', min: 2, max: 10, decimals: 0 },
    ],
    conversions: [
      { ascii: 'mean', unit: 'cm', factor: 0.1, fromUnit: 'mm' },
      { ascii: 'sd', unit: 'in', factor: 0.0393701, fromUnit: 'mm' },
      { ascii: 'N', unit: 'decade', factor: 0.1, fromUnit: 'yr' },
    ],
    // Rank is capped at 10 against a record of at least 30 years, and that cap
    // is not arbitrary. K only comes out positive while N/(N-m+1) stays below
    // 1.753, which is m < 0.1409 N + 1. At N = 30 that means m < 5.2, so a cap
    // of 10 would let the factor go negative for short records and the answer
    // would fall below the mean. Working the corners of m in 2..10 and N in
    // 30..100 gives ln(ln(x)) in -4.6005..-1.0301, hence K in 0.3531..3.1370,
    // positive and finite throughout. Rank 1 is excluded because it makes
    // N/(N-m+1) exactly 1, the inner ln is 0 and the outer ln diverges.
    //
    // Mean 200..600 and sigma 80..300 together keep the departure K*sigma a
    // meaningful fraction of the mean across the whole space: the smallest
    // ratio is 0.3531*80/600 = 4.7%, so even the "forgot K" option stays well
    // clear of the answer. Sparser sigma would let that option collapse onto it.
    compute: v => {
      const c = Math.sqrt(6) / Math.PI;
      const K = -c * (0.5772 + Math.log(Math.log(v.N / (v.N - v.m + 1))));
      return v.mean + K * v.sd;
    },
    context: 'a 52-year record of annual peak discharges at a gauging station on a river in Cagayan, being reduced to a design flood for a new bridge',
    verb: 'gives a return period value of',
    unknownPhrase: 'the value at that return period',
    keyConcept: 'Gumbel fits an extreme-value distribution to a series of annual maxima, and the return period value is the mean plus a frequency factor times the standard deviation. The factor is not a constant: it is set by how far down the ranked series you are looking and how long the record is, which is why a 100-year event on a 30-year record is an extrapolation. The factor is positive for the high ranks that matter in design, so the return period value always sits above the mean of the record, and the further down the ranking you go the larger the departure becomes. With K near 0.35 at a tenth-ranked event on a short record and near 3.14 at the second rank of a long one, the same storm statistics produce very different design floods.',
    mistakes: [
      'Ranking the series ascending instead of descending, which puts the design event at the wrong rank and shrinks the factor',
      'Treating the frequency factor as a constant rather than deriving it from the record length and the rank',
      'Using the sample standard deviation of the whole record instead of of the annual maxima',
    ],
    // Four conceptually distinct errors rather than a 0.85/1.15 pair, because the
    // hard part here is the factor and the options should test it:
    //   - K alone drops the mean, and is 0.07..0.83x
    //   - the mean alone drops the factor, and is 0.18..0.93x
    //   - dropping the 0.5772 Euler constant from the bracket gives K'/K =
    //     L/(0.5772 + L) with L in -4.6005..-1.0301, so a flat 1.14..2.27x
    //   - 0.85x for the paired guess
    // All four are pinned by their own arithmetic rather than by the ratio of two
    // independently sampled inputs, which is what keeps them inside the
    // plausibility band.
    distractors: [
      v => {
        const c = Math.sqrt(6) / Math.PI;
        return -c * (0.5772 + Math.log(Math.log(v.N / (v.N - v.m + 1)))) * v.sd;
      },
      v => v.mean,
      v => {
        const c = Math.sqrt(6) / Math.PI;
        const K = -c * (0.5772 + Math.log(Math.log(v.N / (v.N - v.m + 1))));
        const L = Math.log(Math.log(v.N / (v.N - v.m + 1)));
        return v.mean + (-c * L) * v.sd;
      },
      v => {
        const c = Math.sqrt(6) / Math.PI;
        const K = -c * (0.5772 + Math.log(Math.log(v.N / (v.N - v.m + 1))));
        return v.mean + K * v.sd * 0.85;
      },
    ],
  },
  {
    formulaId: 'b-drop-spillway-capacity', area: 'B', unknown: 'q',
    formulaText: 'q = C L h^{3/2}',
    unit: 'm³/s', round: 3,
    vars: [
      { symbol: 'C', ascii: 'c', label: 'weir coefficient', unit: '', min: 1.5, max: 2, decimals: 2 },
      { symbol: 'L', ascii: 'L', label: 'length of the spillway crest', unit: 'm', min: 1, max: 10, decimals: 2 },
      { symbol: 'h', ascii: 'h', label: 'depth of flow over the crest', unit: 'm', min: 0.1, max: 0.9, decimals: 2 },
    ],
    conversions: [
      { ascii: 'L', unit: 'ft', factor: 3.28084, fromUnit: 'm' },
      { ascii: 'h', unit: 'cm', factor: 100, fromUnit: 'm' },
      { ascii: 'h', unit: 'in', factor: 39.3701, fromUnit: 'm' },
    ],
    // h is capped at 0.9 rather than 1.0 so the h^2 option cannot land inside
    // the 1% plausibility band: that option scales as sqrt(h), which is within
    // 1% of the answer whenever h > 0.9801, and a cap at 1.0 would put roughly
    // 2% of samples there. At 0.9 the worst case is 0.95x, comfortably clear.
    // q is 0.047..1.83 m3/s.
    compute: v => v.c * v.L * Math.pow(v.h, 1.5),
    context: 'a concrete drop spillway on a small diversion weir, where the crest length had been set and the design head over it checked',
    verb: 'has a design capacity of',
    unknownPhrase: 'the discharge over the spillway crest',
    keyConcept: 'A weir passes discharge in proportion to the crest length, the weir coefficient, and the three-halves power of the head. The three-halves power is the whole character of the relationship: doubling the head over the crest multiplies the discharge by nearly three, not by two. That is why a spillway that is adequate at the average head can be badly overtopped at the peak, and why the freeboard decision is set by the head and not by the volume. The coefficient absorbs the crest shape and the approach velocity, and it only means anything in the units printed beside it.',
    mistakes: [
      'Using a linear relation with head instead of the three-halves power, which understates the peak by the square root of the head',
      'Taking the weir coefficient as a discharge rather than a dimensionless shape factor',
      'Checking capacity at the average head instead of the design flood head',
    ],
    // Linear in head is 1/sqrt(h) = 1.05..3.16x; squaring the head is sqrt(h) =
    // 0.32..0.95x, both pinned by h alone. 1.15x is the paired guess.
    distractors: [
      v => v.c * v.L * v.h,
      v => v.c * v.L * v.h * v.h,
      v => v.c * v.L * Math.pow(v.h, 1.5) * 1.15,
      v => v.c * v.L * Math.pow(v.h, 1.5) * 0.85,
    ],
  },
  {
    formulaId: 'b-dam-top-width', area: 'B', unknown: 'W',
    formulaText: 'W = 0.55\\sqrt{H} + 1',
    unit: 'm', round: 3,
    vars: [
      { symbol: 'H', ascii: 'H', label: 'maximum height of the embankment', unit: 'm', min: 2, max: 30, decimals: 2 },
    ],
    conversions: [
      { ascii: 'H', unit: 'ft', factor: 3.28084, fromUnit: 'm' },
      { ascii: 'H', unit: 'in', factor: 39.3701, fromUnit: 'm' },
    ],
    // W is 1.778..4.012 m. The square root is what makes a modest dam need a
    // narrow crest, and the additive 1 is a minimum crest width that the
    // square-root term alone would drive toward zero on a low embankment.
    compute: v => 0.55 * Math.sqrt(v.H) + 1,
    context: 'an earthfill pond dam whose embankment had just been raised, with the crest width being fixed before the riprap was placed',
    verb: 'needs a top width of',
    unknownPhrase: 'the crest width of the embankment',
    keyConcept: 'The top width of an earth dam grows only as the square root of its height, which is the empirical shorthand for the fact that a taller embankment needs a wider crest to stay stable but not in proportion. A dam twice as high is not twice as wide, and the additive metre is a floor that keeps a low embankment from being given a crest too narrow to walk or to plant on. Note what the formula does not contain: it is a proportioning rule for the crest, not a stability check, and it says nothing about the side slopes that the height implies.',
    mistakes: [
      'Making the width proportional to the height, which over-widens a tall dam several times over',
      'Omitting the additive term, which drives the crest width toward zero on a low embankment',
      'Reading the width as including the side slopes rather than the crest alone',
    ],
    // Linear in height is 1.18..4.36x; dropping the additive term is 0.44..0.75x;
    // dropping the 0.55 is 0.80..1.37x. All three are structural rather than
    // scalar, and each fails in a different direction.
    distractors: [
      v => 0.55 * v.H + 1,
      v => 0.55 * Math.sqrt(v.H),
      v => Math.sqrt(v.H),
      v => (0.55 * Math.sqrt(v.H) + 1) * 1.15,
    ],
  },
  {
    formulaId: 'b-wave-height', area: 'B', unknown: 'H',
    formulaText: 'H = 0.014\\sqrt{D_f}',
    unit: 'm', round: 4,
    vars: [
      { symbol: 'D_f', ascii: 'D_f', label: 'fetch or exposure distance, in kilometres', unit: 'km', min: 1, max: 50, decimals: 1 },
    ],
    conversions: [
      { ascii: 'D_f', unit: 'm', factor: 1000, fromUnit: 'km' },
      { ascii: 'D_f', unit: 'mi', factor: 0.621371, fromUnit: 'km' },
    ],
    // H is 0.014..0.099 m, i.e. 1.4..9.9 cm of crest allowance above the
    // maximum water level. The printed formula gives no unit for the fetch, so
    // the 0.014 is tied to the kilometre: at 20 km the allowance is 6.3 cm,
    // which is the right order for a reservoir of that size. Converting the
    // fetch without changing the constant is the error this spec is built around.
    compute: v => 0.014 * Math.sqrt(v.D_f),
    context: 'a reservoir whose embankment was being checked for wind setup, with the exposure distance measured across the open water',
    verb: 'needs a wave height allowance of',
    unknownPhrase: 'the height of crest above the maximum water level',
    keyConcept: 'Wind setup and wave run-up on a reservoir eat into freeboard, and the allowance scales with the square root of the fetch, the distance the wind has to work across. The square root means a reservoir twice as long does not need twice the freeboard. The constant carries the units of the fetch: at 0.014 with the fetch in kilometres, a 20 km reservoir needs about 6 cm of extra crest. Feeding the fetch in metres while keeping 0.014 understates the allowance by a factor of the square root of 1000, and that is a much more common slip than getting the exponent wrong.',
    mistakes: [
      'Converting the fetch to metres while keeping the 0.014 coefficient, which cuts the allowance by more than thirty times',
      'Treating the allowance as proportional to the fetch rather than to its square root',
      'Adding the wave allowance to the design water level instead of to the crest height',
    ],
    // Linear in the fetch is sqrt(D_f) = 1..7.07x; dropping the constant is a
    // flat 71.4x, which is still inside the band and is worth offering because
    // it is the coefficient error rather than an exponent error. 0.85x pairs.
    distractors: [
      v => 0.014 * v.D_f,
      v => Math.sqrt(v.D_f),
      v => 0.014 * Math.sqrt(v.D_f) * 1.15,
      v => 0.014 * Math.sqrt(v.D_f) * 0.85,
    ],
  },
  {
    formulaId: 'b-orifice-velocity', area: 'B', unknown: 'V',
    formulaText: 'V = \\sqrt{2 g h}',
    unit: 'm/s', round: 3,
    vars: [
      { symbol: 'h', ascii: 'h', label: 'head over the centre of the orifice', unit: 'm', min: 0.05, max: 2, decimals: 2 },
    ],
    conversions: [
      { ascii: 'h', unit: 'cm', factor: 100, fromUnit: 'm' },
      { ascii: 'h', unit: 'ft', factor: 3.28084, fromUnit: 'm' },
    ],
    // g is pinned to 9.81 rather than sampled. The printed formula lists it as a
    // variable, but the physically meaningful variation in this question is the
    // head; letting g wander would invite an option that is right in form and
    // wrong in physics. V is sqrt(19.62 h) = 0.990..6.264 m/s.
    compute: v => Math.sqrt(2 * 9.81 * v.h),
    context: 'a sluice gate being set on a canal distributary, with the gate slot sized against the velocity the water would take through it',
    verb: 'gives a jet velocity of',
    unknownPhrase: 'the velocity of flow through the orifice',
    keyConcept: 'The velocity through an orifice is the square root of twice gravity times the head over it, which is Torricelli: the water falls through the head and arrives with the speed that fall would give. The consequence that matters is the fourth root, because discharge is area times velocity and area itself grows with the square root of the head for a circular orifice, so discharge through a small opening goes as the head to the five-halves. Head is also the energy per unit weight, which is why a doubled head gives a velocity only 1.41 times as large, and why a gate cannot be throttled by a small change in head. Velocity in feet per second is 3.28084 times the value in metres per second.',
    mistakes: [
      'Using the velocity head h in place of the pressure head, or omitting the factor of two from the free fall',
      'Linearising the relation and reporting a velocity proportional to the head',
      'Mixing the head unit, so a head in centimetres is substituted into the SI form and the velocity comes out over thirty times too large',
    ],
    // Dropping the square root gives 2 g h = 0.981..39.24, which is 0.99..6.26x
    // the answer and is pinned by h alone. 0.85x and 1.15x are the pair, and
    // 0.5x stands in for halving the constant.
    distractors: [
      v => 2 * 9.81 * v.h,
      v => Math.sqrt(2 * 9.81 * v.h) * 0.85,
      v => Math.sqrt(2 * 9.81 * v.h) * 1.15,
      v => Math.sqrt(2 * 9.81 * v.h) * 0.5,
    ],
  },
  {
    formulaId: 'b-orifice-discharge', area: 'B', unknown: 'Q',
    formulaText: 'Q = 0.6 A \\sqrt{2 g h}',
    unit: 'm³/s', round: 5,
    vars: [
      { symbol: 'A', ascii: 'A', label: 'area of the orifice', unit: 'm²', min: 0.002, max: 0.05, decimals: 4 },
      { symbol: 'h', ascii: 'h', label: 'head over the centre of the orifice', unit: 'm', min: 0.05, max: 1, decimals: 2 },
    ],
    conversions: [
      { ascii: 'A', unit: 'cm²', factor: 10000, fromUnit: 'm²' },
      { ascii: 'A', unit: 'mm²', factor: 1000000, fromUnit: 'm²' },
      { ascii: 'h', unit: 'cm', factor: 100, fromUnit: 'm' },
      { ascii: 'h', unit: 'in', factor: 39.3701, fromUnit: 'm' },
    ],
    // A is declared in m2 and h in m with the result in m3/s, which is the basis
    // the printed 0.6 belongs to. See the SOURCE NOTE added to this formula and
    // the header: the printed variable list gives A in cm2, h in cm and Q in lps,
    // and 0.6 on those units is out by 100. The drill keeps the printed
    // coefficient and corrects the units around it instead.
    // Q is 0.6 * A * sqrt(19.62 h) = 0.0027..0.332 m3/s, i.e. 2.7..332 lps.
    compute: v => 0.6 * v.A * Math.sqrt(2 * 9.81 * v.h),
    context: 'a concrete outlet pipe through a small check dam, where the pipe was being sized against the flow it would have to pass at the design head',
    verb: 'will pass a discharge of',
    unknownPhrase: 'the discharge through the orifice',
    keyConcept: 'Discharge through an orifice is the coefficient of discharge times the area times the velocity the head would produce, and the 0.6 is what is left of the ideal jet after the vena contracta and the friction of the entry. It is a dimensionless coefficient fixed by the shape of the entry, and it only means anything alongside the units printed with it. The dependence on head is the five-halves power, since both the velocity and the effective area respond to it, which is why an outlet that passes a trickle at low head can pass a flood at high head. Multiply the result by 1000 for litres per second.',
    mistakes: [
      'Substituting an area in square centimetres into the SI form, which overstates the discharge a hundredfold',
      'Treating the coefficient of discharge as part of the area rather than as a dimensionless factor on it',
      'Forgetting the velocity term entirely and reporting a discharge proportional to the head',
    ],
    // Dropping the square root gives sqrt(2 g h) = 0.99..4.43x, pinned by h
    // alone. Inverting the head gives 1/(2 g h) = 0.051..1.02x, still in band.
    // 0.85x and 1.15x are the pair.
    distractors: [
      v => 0.6 * v.A * (2 * 9.81 * v.h),
      v => 0.6 * v.A / (2 * 9.81 * v.h),
      v => 0.6 * v.A * Math.sqrt(2 * 9.81 * v.h) * 0.85,
      v => 0.6 * v.A * Math.sqrt(2 * 9.81 * v.h) * 1.15,
    ],
  },
];
