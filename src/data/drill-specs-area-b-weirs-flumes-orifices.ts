// Area B drill specs, part 6 of 6: Weirs, Flumes and Orifices. This completes
// Area B.
//
// This whole family shares one defect, and it is systematic rather than
// incidental. Every printed constant here - 1.84, 1.86, 1.4, 0.6 - is an SI
// coefficient belonging with lengths in METRES and the result in m3/s, while
// every printed variable list says centimetres and litres per second. Feeding
// centimetres into a metre constant is out by exactly 100 for these exponents,
// because the linear length contributes 1e4, the head inside the power
// contributes 1e-3 to 1e-5, and lps contributes 1e3 the other way. Worked
// through for the rectangular weir: at L = 100 cm and H = 10 cm the printed
// form returns 5818.6 where the flow is 58.2 lps. The Francis constant that
// actually works on the printed cm and lps basis is 0.0184, not 1.84.
//
// Every spec here therefore declares metres and reports m3/s, which lets the
// printed coefficient be used exactly as printed. A SOURCE NOTE recording the
// arithmetic has been added to each of the five affected formulas, matching
// what was already done for b-orifice-discharge and b-water-applied.
//
// Range discipline: the two rectangular Francis forms have explicit
// applicability limits that the ranges have to respect, or the questions would
// be teaching a form outside the conditions it is valid for.
//
//   b-weir-rectangular-no-contraction  needs L < 2.7H. With H from 0.30 m and
//     L up to 0.75 m, L < 0.81 m = 2.7 x 0.30 m holds across the whole box.
//   b-weir-rectangular-contraction     needs L > 2.7H. With L from 0.90 m and
//     H up to 0.29 m, 2.7H < 0.783 m < 0.90 m always. The head range is kept
//     narrow on purpose for a second reason: the contracted form offers a
//     "forgot the 0.2H deduction" option, which is only a useful distractor
//     while 0.2H/L is big enough to matter. At L = 1 m and H = 0.25 m that
//     ratio is 0.05 and the option lands 5.3% away, but at H = 0.05 m and
//     L = 4 m it would be 0.0025 and the option would round onto the answer.
//     Holding 0.2H/L in 0.050..0.064 keeps it a real 5.3..6.9% error.
//
// b-parshall-flume is the weakest formula in the set and is flagged as such in
// both its SOURCE NOTE and its keyConcept: the printed power form carries no
// coefficient and is dimensionally inhomogeneous, since W appears inside the
// exponent, and it does not reproduce standard Parshall ratings even in metres.
// The drill exercises the algebra as printed rather than substituting a
// coefficient it cannot justify from the source.
import type { DrillSpec } from './formula-drills';

export const areaBWeirsFlumesOrificesSpecs: DrillSpec[] = [
  {
    formulaId: 'b-weir-rectangular-no-contraction', area: 'B', unknown: 'Q',
    formulaText: 'Q = 1.84\\,L H^{3/2}',
    unit: 'm³/s', round: 4,
    vars: [
      { symbol: 'L', ascii: 'L', label: 'length of the weir crest', unit: 'm', min: 0.1, max: 0.75, decimals: 2 },
      { symbol: 'H', ascii: 'H', label: 'total head over the crest', unit: 'm', min: 0.3, max: 0.6, decimals: 2 },
    ],
    conversions: [
      { ascii: 'L', unit: 'cm', factor: 100, fromUnit: 'm' },
      { ascii: 'L', unit: 'ft', factor: 3.28084, fromUnit: 'm' },
      { ascii: 'H', unit: 'cm', factor: 100, fromUnit: 'm' },
      { ascii: 'H', unit: 'in', factor: 39.3701, fromUnit: 'm' },
    ],
    // L < 2.7H holds because 2.7 x 0.30 = 0.81 m exceeds L's 0.75 m ceiling,
    // which is the condition under which Francis drops the end contractions.
    // Q is 0.0302..0.6414 m3/s.
    compute: v => 1.84 * v.L * Math.pow(v.H, 1.5),
    context: 'a short broad-crested weir built across a drainage channel in Cavite, where the crest was deliberately kept narrow relative to the head so that end contractions could be ignored',
    verb: 'passes a discharge of',
    unknownPhrase: 'the discharge over the weir',
    keyConcept: 'The Francis discharge over a rectangular weir is the constant times the crest length times the head to the three-halves power, and each of those three factors is doing something. The three-halves power is why capacity is set by the head and not by the volume: doubling the head multiplies the flow by nearly three, so a structure sized for the average head is badly overtopped at the peak. The absence of any end-contraction term is not an oversight but the applicability condition: Francis drops the 0.2H deduction once the crest is short relative to the head, here L under 2.7H, because a narrow crest has no room for the flow to contract at the ends. The 1.84 belongs with metres and cubic metres per second; on a centimetre and litres-per-second basis the working constant is 0.0184.',
    mistakes: [
      'Applying the no-contraction form to a long crest, where the 0.2H end deduction is required',
      'Using a linear relation with head, which understates the peak flow by the square root of the head',
      'Substituting a head in centimetres while keeping the 1.84, which overstates the flow a hundredfold',
    ],
    // Linear in head is 1/sqrt(H) = 1.29..1.83x; a squared head is sqrt(H) =
    // 0.55..0.77x. Both pinned by H alone. 0.85x and 1.15x are the pair.
    distractors: [
      v => 1.84 * v.L * v.H,
      v => 1.84 * v.L * v.H * v.H,
      v => 1.84 * v.L * Math.pow(v.H, 1.5) * 0.85,
      v => 1.84 * v.L * Math.pow(v.H, 1.5) * 1.15,
    ],
  },
  {
    formulaId: 'b-weir-rectangular-contraction', area: 'B', unknown: 'Q',
    formulaText: 'Q = 1.84\\left(L - 0.2H\\right) H^{3/2}',
    unit: 'm³/s', round: 4,
    vars: [
      { symbol: 'L', ascii: 'L', label: 'length of the weir crest', unit: 'm', min: 0.9, max: 1, decimals: 2 },
      { symbol: 'H', ascii: 'H', label: 'total head over the crest', unit: 'm', min: 0.25, max: 0.29, decimals: 2 },
    ],
    conversions: [
      { ascii: 'L', unit: 'cm', factor: 100, fromUnit: 'm' },
      { ascii: 'L', unit: 'ft', factor: 3.28084, fromUnit: 'm' },
      { ascii: 'H', unit: 'cm', factor: 100, fromUnit: 'm' },
      { ascii: 'H', unit: 'in', factor: 39.3701, fromUnit: 'm' },
    ],
    // See the header for why the head range is only 0.25..0.29 m. L > 2.7H
    // holds because 2.7 x 0.29 = 0.783 m is under L's 0.90 m floor. Q is
    // 0.2054..0.2709 m3/s, that is 205..271 lps.
    compute: v => 1.84 * (v.L - 0.2 * v.H) * Math.pow(v.H, 1.5),
    context: 'a gated suppressed weir on a farm pond outlet in Batangas, where the crest is long relative to the head and the end contractions had to be subtracted',
    verb: 'passes a discharge of',
    unknownPhrase: 'the discharge over the weir',
    keyConcept: 'The same Francis relation as the narrow-crest case, with the end contractions now subtracted: the effective length is the crest less 0.2H, half a head at each end. Those deductions are the vena contracta, where the stream narrows as it turns past the abutments and the effective opening is smaller than the built one, so a long crest always passes less than its length suggests. The deduction scales with the head and not with the length, which is why the correction matters most on a short, deep-flowing crest. This form is the one that applies above L = 2.7H. The 0.2H term carries its own units, so it needs no adjustment when L is in centimetres; only the 1.84 does.',
    mistakes: [
      'Forgetting the 0.2H end contraction on a long crest, which overstates the discharge by 5 to 7 per cent here',
      'Subtracting 0.2H once for both ends instead of treating it as half a head at each, which is the same arithmetic done twice',
      'Applying the contracted form below L = 2.7H, where the no-contraction form is the correct one',
    ],
    // Dropping the deduction is L/(L-0.2H) = 1.053..1.069x, kept a real error by
    // the narrow head range - see the header. Linear in head is
    // 1/sqrt(H) = 1.86..2.00x, squared is sqrt(H) = 0.50..0.54x, and 0.85x
    // is the paired guess. The four bands do not touch.
    distractors: [
      v => 1.84 * v.L * Math.pow(v.H, 1.5),
      v => 1.84 * (v.L - 0.2 * v.H) * v.H,
      v => 1.84 * (v.L - 0.2 * v.H) * v.H * v.H,
      v => 1.84 * (v.L - 0.2 * v.H) * Math.pow(v.H, 1.5) * 0.85,
    ],
  },
  {
    formulaId: 'b-weir-trapezoidal-cipolletti', area: 'B', unknown: 'Q',
    formulaText: 'Q = 1.86\\,L H^{3/2}',
    unit: 'm³/s', round: 4,
    vars: [
      { symbol: 'L', ascii: 'L', label: 'length of the weir crest', unit: 'm', min: 0.5, max: 3, decimals: 2 },
      { symbol: 'H', ascii: 'H', label: 'total head over the crest', unit: 'm', min: 0.05, max: 0.5, decimals: 2 },
    ],
    conversions: [
      { ascii: 'L', unit: 'cm', factor: 100, fromUnit: 'm' },
      { ascii: 'L', unit: 'ft', factor: 3.28084, fromUnit: 'm' },
      { ascii: 'H', unit: 'cm', factor: 100, fromUnit: 'm' },
      { ascii: 'H', unit: 'in', factor: 39.3701, fromUnit: 'm' },
    ],
    // Q is 0.0104..1.9725 m3/s. The 4H:1L side slope is built into the 1.86
    // and needs no variable of its own here.
    compute: v => 1.86 * v.L * Math.pow(v.H, 1.5),
    context: 'a long Cipolletti weir gauging a stream in Ifugao, cut to the 4H:1L side slope that makes the discharge independent of how wide the channel happens to be',
    verb: 'passes a discharge of',
    unknownPhrase: 'the discharge over the weir',
    keyConcept: 'A Cipolletti weir is a trapezoidal notch with sides sloped at four horizontal to one vertical, and the slope is not cosmetic: it is chosen so that the loss from the narrowing section exactly cancels the gain from having no end contractions, so a single constant replaces the correction term. That is why the coefficient is 1.86 rather than 1.84, and why no 0.2H deduction appears. The practical consequence is a long weir that measures the same flow whether it is set in a narrow or a wide channel, which is what makes it useful for irrigation turnouts where the approach channel width is not under the designer control. The head still enters as the three-halves power, so the same doubling of head nearly trebles the flow.',
    mistakes: [
      'Adding the 0.2H end-contraction deduction, which belongs to the plain rectangular form and is cancelled by the side slope here',
      'Using the rectangular 1.84 in place of the Cipolletti 1.86',
      'Reading the side slope as 1H:4L, which reverses the proportion and gives a very different notch',
    ],
    // The same three exponent options as the no-contraction rectangular spec,
    // deliberately: the shared lesson across this family is the three-halves
    // power on the head, and a Cipolletti weir does not change it. Only the
    // constant differs. 1/sqrt(H) = 1.41..4.47x, sqrt(H) = 0.22..0.71x.
    distractors: [
      v => 1.86 * v.L * v.H,
      v => 1.86 * v.L * v.H * v.H,
      v => 1.86 * v.L * Math.pow(v.H, 1.5) * 0.85,
      v => 1.86 * v.L * Math.pow(v.H, 1.5) * 1.15,
    ],
  },
  {
    formulaId: 'b-weir-triangular-vnotch', area: 'B', unknown: 'Q',
    formulaText: 'Q = 1.4\\,H^{5/2}',
    unit: 'm³/s', round: 6,
    vars: [
      { symbol: 'H', ascii: 'H', label: 'head measured in the notch', unit: 'm', min: 0.05, max: 0.45, decimals: 2 },
    ],
    conversions: [
      { ascii: 'H', unit: 'cm', factor: 100, fromUnit: 'm' },
      { ascii: 'H', unit: 'mm', factor: 1000, fromUnit: 'm' },
      { ascii: 'H', unit: 'in', factor: 39.3701, fromUnit: 'm' },
    ],
    // Q is 0.000783..0.190059 m3/s, that is 0.78..190 lps. The round is 6
    // because the low-head end is genuinely three orders of magnitude down.
    // The exponent needs no defence: a 90 degree notch has a triangular flow
    // area growing as H squared, times a velocity growing as the square root
    // of H, giving the two and a half power.
    compute: v => 1.4 * Math.pow(v.H, 2.5),
    context: 'a 90 degree V-notch plate at the head of a small irrigation turnout in Marikina, read to the nearest millimetre of head',
    verb: 'passes a discharge of',
    unknownPhrase: 'the discharge through the notch',
    keyConcept: 'The V-notch is the sensitive one, and its sensitivity is the point: the two and a half power means a head that is a fifth of the full reading measures only about a fiftieth of the flow, so a fine notch measures a range no rectangular weir could. The two and a half is not a fitted number, it is a triangular area growing as the head squared multiplied by a velocity growing as the square root of the head. The 90 degree angle is what fixes the constant, and it is why the formula carries no length term at all. Measurement is by head alone, which is why the notch has to be sharp and vertical: a blunt or bevelled crest changes the effective angle and the rating with it.',
    mistakes: [
      'Using a squared head, which is the flow area alone and forgets that the velocity rises with the head too',
      'Reading the head in centimetres while keeping the 1.4, which overstates the flow a hundredfold',
      'Measuring to the bottom of the notch rather than to the water surface, which silently adds the datum to the reading',
    ],
    // Four exponent options rather than a scalar pair, because the exponent is
    // the whole content of this formula. 1/H^0.5 = 1.49..4.47x for a squared
    // head, 1/H = 2.22..20x for a three-halves power, and sqrt(H) = 0.22..0.67x
    // for a cubed one. None of the three bands touch.
    distractors: [
      v => 1.4 * v.H * v.H,
      v => 1.4 * Math.pow(v.H, 1.5),
      v => 1.4 * v.H * v.H * v.H,
      v => 1.4 * Math.pow(v.H, 2.5) * 1.15,
    ],
  },
  {
    formulaId: 'b-parshall-flume', area: 'B', unknown: 'Q',
    formulaText: 'Q = W\\,H_a^{1.522\\,W^{0.026}}',
    unit: 'm³/s', round: 5,
    vars: [
      { symbol: 'W', ascii: 'W', label: 'throat width', unit: 'm', min: 0.15, max: 2.44, decimals: 2 },
      { symbol: 'H_a', ascii: 'Ha', label: 'head at the crest', unit: 'm', min: 0.05, max: 0.6, decimals: 2 },
    ],
    conversions: [
      { ascii: 'W', unit: 'cm', factor: 100, fromUnit: 'm' },
      { ascii: 'W', unit: 'ft', factor: 3.28084, fromUnit: 'm' },
      { ascii: 'Ha', unit: 'cm', factor: 100, fromUnit: 'm' },
      { ascii: 'Ha', unit: 'in', factor: 39.3701, fromUnit: 'm' },
    ],
    // W spans the standard 6 inch to 8 ft throat widths. The exponent is
    // E = 1.522 W^0.026, which runs 1.4488 at the 0.15 m throat to 1.5577 at
    // 2.44 m, so it is not a constant and the width has to appear inside it.
    // Q is 0.00195..1.10120 m3/s, that is 1.9..1101 lps.
    compute: v => v.W * Math.pow(v.Ha, 1.522 * Math.pow(v.W, 0.026)),
    context: 'a Parshall flume bolted into the inlet of a small reservoir in Batangas, its throat being one of the standard widths and the reading taken in the stilling well',
    verb: 'passes a discharge of',
    unknownPhrase: 'the discharge through the flume',
    keyConcept: 'A Parshall flume is a shaped channel that makes the water accelerate and draw a measuring head at one point, so the flow can be read off a single head measurement without any velocity measurement. The rating is not a simple power law, because the flume is a fixed piece of hardware: the exponent on the head changes with the throat width, from about 1.45 at the narrowest to 1.56 at the widest, which is why a flume cannot be scaled up and down and still read the same. Two honest cautions about the printed form, both recorded in the SOURCE NOTE. It carries no coefficient, and because the width sits inside the exponent the expression is dimensionally inhomogeneous, so there is no unit-independent constant to supply. And this particular power form does not reproduce the standard Parshall ratings even in metres. Treat it as the handbook writes it and as a stand-in for the rated curve, not as the rating itself, which comes from a calibration table.',
    mistakes: [
      'Using the exponent as a fixed 1.5 and dropping the width term inside it',
      'Scaling a rating from one throat width to another, which the width-dependent exponent forbids',
      'Reading the head in the upstream or downstream section instead of at the crest, which is the whole basis of the rating',
    ],
    // Two exponent errors that bracket the real one, both pinned by the ratio of
    // two powers of H_a and therefore by H_a alone: ignoring the width inside
    // the exponent is 0.80..1.11x, and a linear relation in head is 1.26..5.32x.
    // 0.85x and 1.15x are the pair.
    distractors: [
      v => v.W * Math.pow(v.Ha, 1.522),
      v => v.W * v.Ha,
      v => v.W * Math.pow(v.Ha, 1.522 * Math.pow(v.W, 0.026)) * 0.85,
      v => v.W * Math.pow(v.Ha, 1.522 * Math.pow(v.W, 0.026)) * 1.15,
    ],
  },
  {
    formulaId: 'b-submerged-orifice', area: 'B', unknown: 'Q',
    formulaText: 'Q = 0.6\\,A\\sqrt{2 g \\Delta h}',
    unit: 'm³/s', round: 6,
    vars: [
      { symbol: 'A', ascii: 'A', label: 'area of the orifice', unit: 'm²', min: 0.002, max: 0.05, decimals: 4 },
      // Symbol written \Delta{h} with no space, per the convention the rest of
      // the suite follows (H_{static}, d_{NET}, \overline{X}). It is not
      // cosmetic: the walkthrough check parses the rendered given block with
      // /([^\s=]+)\s*=\s*(-?\d...)/ and looks the result up by symbol, so a
      // literal space in the symbol made it recover "h", miss bySymbol, never
      // set the "dh" key, and throw out of compute on all 800 renders. The
      // formulaText keeps the handbook's spacing.
      { symbol: '\\Delta{h}', ascii: 'dh', label: 'difference in head across the orifice', unit: 'm', min: 0.02, max: 0.5, decimals: 2 },
    ],
    conversions: [
      { ascii: 'A', unit: 'cm²', factor: 10000, fromUnit: 'm²' },
      { ascii: 'A', unit: 'mm²', factor: 1000000, fromUnit: 'm²' },
      { ascii: 'dh', unit: 'cm', factor: 100, fromUnit: 'm' },
      { ascii: 'dh', unit: 'in', factor: 39.3701, fromUnit: 'm' },
    ],
    // SI throughout, matching b-orifice-discharge. The difference from that
    // spec is the head, not the units: here the tailwater stands above the
    // orifice, so what drives the flow is the difference between the two water
    // levels and never the full upstream head.
    // Q is 0.000752..0.093963 m3/s, that is 0.75..94 lps.
    compute: v => 0.6 * v.A * Math.sqrt(2 * 9.81 * v.dh),
    context: 'a drain pipe through an embankment whose outlet was drowned by the tailwater in the receiving canal, so the levels on the two sides were being differenced',
    verb: 'passes a discharge of',
    unknownPhrase: 'the discharge through the submerged orifice',
    keyConcept: 'A submerged orifice is not driven by the head above it but by the difference in level across it, and that single change is what separates this from free discharge. Once the tailwater rises above the centre of the opening, the jet no longer falls into air and the full upstream head stops counting; only the residual difference pushes the water through. That is why a submerged pipe can pass the same orifice area at a fraction of the flow of one discharging freely, and why tailwater submergence is a first-order check in culvert and outlet design rather than a correction. The 0.6 is the coefficient of discharge, dimensionless, absorbing the contraction at the entry and the friction of the run.',
    mistakes: [
      'Using the full upstream head instead of the difference across the orifice, which overstates the flow',
      'Ignoring tailwater submergence altogether where the outlet discharges into a canal that can back up',
      'Substituting an area in square centimetres into the SI form, which overstates the discharge a hundredfold',
    ],
    // Dropping the square root is sqrt(19.62 dh) = 0.63..3.13x, and inverting
    // the head term is 1/(19.62 dh) = 0.10..2.55x. Both are pinned by the head
    // difference alone. 0.85x and 1.15x are the pair.
    distractors: [
      v => 0.6 * v.A * (2 * 9.81 * v.dh),
      v => 0.6 * v.A / (2 * 9.81 * v.dh),
      v => 0.6 * v.A * Math.sqrt(2 * 9.81 * v.dh) * 0.85,
      v => 0.6 * v.A * Math.sqrt(2 * 9.81 * v.dh) * 1.15,
    ],
  },
  {
    formulaId: 'b-partly-filled-orifice', area: 'B', unknown: 'Q',
    formulaText: 'Q = C A \\sqrt{2 g h}',
    unit: 'm³/s', round: 5,
    vars: [
      { symbol: 'C', ascii: 'C', label: 'coefficient of discharge', unit: '', min: 0.6, max: 0.65, decimals: 2 },
      { symbol: 'A', ascii: 'A', label: 'area of the flowing portion', unit: 'm²', min: 0.005, max: 0.08, decimals: 4 },
      { symbol: 'h', ascii: 'h', label: 'head on the flowing portion', unit: 'm', min: 0.05, max: 1, decimals: 2 },
    ],
    conversions: [
      { ascii: 'A', unit: 'cm²', factor: 10000, fromUnit: 'm²' },
      { ascii: 'A', unit: 'mm²', factor: 1000000, fromUnit: 'm²' },
      { ascii: 'h', unit: 'cm', factor: 100, fromUnit: 'm' },
      { ascii: 'h', unit: 'in', factor: 39.3701, fromUnit: 'm' },
    ],
    // C is sampled over the 0.60..0.65 range a sharp-edged orifice actually
    // occupies, so the "forgot C" option is a reliable 1.54..1.67x rather than
    // a near miss. Q is 0.00297..0.23033 m3/s, that is 3.0..230 lps.
    compute: v => v.C * v.A * Math.sqrt(2 * 9.81 * v.h),
    context: 'a standpipe outlet running only partly full, where the flowing area was measured at the water line rather than taken as the whole bore',
    verb: 'passes a discharge of',
    unknownPhrase: 'the discharge through the flowing portion',
    keyConcept: 'When an opening does not flow full, the area in the discharge relation is not the bore of the pipe but the wetted section actually conveying water, and the head is taken on that section. A standpipe running a quarter full passes roughly a quarter of the area, and because the velocity also falls with the head the reduction is steeper than the area alone would suggest. The coefficient of discharge is a separate matter from the area: it is dimensionless, and it belongs to the shape of the entry rather than to the size of the opening, which is why a rounded or re-entrant mouth and a sharp one differ by more than the field variation in the head. The 0.6 to 0.65 range here is characteristic of a sharp-edged entry; a re-entrant pipe runs closer to 0.8.',
    mistakes: [
      'Using the full bore of the pipe instead of the wetted flowing area, which overstates the discharge',
      'Treating the coefficient of discharge as part of the area rather than as a dimensionless factor on it',
      'Assuming the coefficient is fixed at 0.6 when the entry is rounded or re-entrant, where it is nearer 0.8',
    ],
    // Forgetting C is 1/C = 1.54..1.67x, pinned by C alone. Dropping the
    // square root is sqrt(19.62 h) = 0.99..4.43x, pinned by h alone.
    // 0.85x and 1.15x are the pair.
    distractors: [
      v => v.A * Math.sqrt(2 * 9.81 * v.h),
      v => v.C * v.A * (2 * 9.81 * v.h),
      v => v.C * v.A * Math.sqrt(2 * 9.81 * v.h) * 0.85,
      v => v.C * v.A * Math.sqrt(2 * 9.81 * v.h) * 1.15,
    ],
  },
];
