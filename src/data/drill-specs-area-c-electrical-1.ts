// Area C drill specs, part 1 of 4: Series and Parallel Circuits, and Basic
// Electrical Quantities. Fifteen of the twenty-four electrical formulas.
//
// Two of these fifteen are not single-unknown computations at all.
// c-series-circuit and c-parallel-circuit each print five identities at once -
// a sum for resistance, an inverse sum for capacitance, a direct sum for
// inductance, and the shared current or shared voltage - and
// c-electrical-unit-conversions (part 4) is pure unit bookkeeping with no
// unknown at all. A drill has to pick one solvable identity from each and let
// keyConcept carry the remaining four, which is what the first two specs here
// do: c-series-circuit drills the inverse sum for capacitance rather than the
// trivial sum for resistance, because capacitors adding inversely in series is
// the genuinely counterintuitive result and the one that actually appears on
// the board, while c-parallel-circuit drills the inverse sum for resistance.
//
// The rest of this file is ordinary two- and three-variable algebra, but three
// formulas carry defects or physical constraints that the ranges have to
// respect.
//
// c-composite-wire-resistance prints R = (rho/2*pi*L) ln(r2/r1) while labelling
// r1 as the OUTER radius and r2 as the INNER, which inverts the usual
// convention and makes the logarithm negative, so the printed expression would
// return a negative resistance. A SOURCE NOTE was already on the formula
// recording the label inversion. These drills therefore assign r1 as the inner
// and r2 as the outer radius, so that the printed ln(r2/r1) is positive and the
// resistance comes out right; that is the correction the note describes, and it
// is the only way to use the expression as printed and get a physical answer.
//
// c-horsepower prints hp = 2*pi*T*N with no divisor at all. Worked through for
// 50 N-m at 1200 rpm: the printed form returns 376,991 where the true output is
// 8.42 hp, so it overstates by exactly 44,760 = 60 x 746. There is no choice of
// units that repairs a missing divisor, unlike the 100x errors elsewhere in
// Area B where declaring metres made the printed constant correct. The drills
// here supply the divisor and the keyConcept says so plainly. A SOURCE NOTE
// recording the arithmetic has been added to the formula.
//
// c-percent-slip is the third constrained one. Slip is (sync - motor)/sync and
// in practice it runs 2 to 8 percent, but the formula's inputs are two
// independent speeds and the vars are sampled independently, so the ranges have
// to guarantee the ordering AND keep the quotient realistic without the
// framework being able to correlate them. A four-pole machine on 60 Hz has a
// 1800 rpm synchronous speed, so both speeds legitimately cluster: sync from
// 1780 to 1800 and motor from 1700 to 1745. 1745 < 1780 holds across the whole
// box, and slip lands in 1.97..5.56 percent. Widening the motor range to make
// the two speeds look more different would push slip into the tens of percent,
// which is a locked rotor rather than a running motor.
//
// Distractor design: the two divider rules and delta-wye all offer a correctly
// inverted ratio, which is a bounded error because the ratio is pinned away
// from 1 by construction. c-voltage-divider needs R_n/R_total held in
// 0.10..0.75 so the squared inverse stays inside the 100x band; c-current-
// divider needs the same on the other side of 1, and note that its R_total is
// the PARALLEL equivalent, which is always less than either branch, so
// R_total/R_n < 1 and the branch current is correctly less than the total.
import type { DrillSpec } from './formula-drills';

export const areaCElectrical1Specs: DrillSpec[] = [
  // ---------------------------------------------------------------- series
  {
    formulaId: 'c-series-circuit', area: 'C', unknown: 'C_S',
    formulaText: 'C_S = \\left(\\frac{1}{C_1} + \\frac{1}{C_2} + \\frac{1}{C_3}\\right)^{-1}',
    unit: 'µF', round: 4,
    vars: [
      { symbol: 'C_1', ascii: 'C1', label: 'first capacitor', unit: 'µF', min: 2, max: 50, decimals: 0 },
      { symbol: 'C_2', ascii: 'C2', label: 'second capacitor', unit: 'µF', min: 2, max: 50, decimals: 0 },
      { symbol: 'C_3', ascii: 'C3', label: 'third capacitor', unit: 'µF', min: 2, max: 50, decimals: 0 },
    ],
    conversions: [
      { ascii: 'C1', unit: 'nF', factor: 1000, fromUnit: 'µF' },
      { ascii: 'C1', unit: 'pF', factor: 1000000, fromUnit: 'µF' },
      { ascii: 'C2', unit: 'nF', factor: 1000, fromUnit: 'µF' },
      { ascii: 'C2', unit: 'pF', factor: 1000000, fromUnit: 'µF' },
      { ascii: 'C3', unit: 'nF', factor: 1000, fromUnit: 'µF' },
      { ascii: 'C3', unit: 'pF', factor: 1000000, fromUnit: 'µF' },
    ],
    // C_S is 0.6667..16.667 µF. Every capacitor in the box is at least 2 µF, so
    // the sum of three reciprocals is at most 1.5 and C_S is never below a
    // third of the smallest single capacitor.
    compute: v => 1 / (1 / v.C1 + 1 / v.C2 + 1 / v.C3),
    context: 'a three-capacitor starting circuit on a single-phase irrigation pump controller, where the capacitors are chained end to end across the supply',
    verb: 'combines three capacitors of',
    unknownPhrase: 'the equivalent series capacitance',
    keyConcept: 'Capacitors in series add the way resistors in parallel do, by adding reciprocals, which is the opposite of the direct sum that resistors in series obey. The single current that flows charges each capacitor to the same charge Q, and since Q = C times the voltage across it, the smallest capacitor ends up carrying the largest share of the voltage. The result is always smaller than the smallest member, here never below a third of 2 µF. The other four series identities sit alongside it and are worth holding together: resistances add directly, inductances add directly, the current is common to every element, and the voltages sum to the supply.',
    mistakes: [
      'Adding the capacitances directly, which returns a value larger than the largest member',
      'Inverting the sum, which gives the sum of the capacitances rather than its reciprocal',
      'Dividing by three on the assumption that three equal capacitors give one third the value, which only holds when all three are equal',
    ],
    // Adding directly gives (C1+C2+C3)(1/C1+1/C2+1/C3), which is pinned between
    // 9 and about 55 over this box by Cauchy-Schwarz. Dropping the third
    // capacitor gives R1R2-sum form, 1.02..16x. The scalar pair closes it out.
    distractors: [
      v => v.C1 + v.C2 + v.C3,
      v => (v.C1 * v.C2) / (v.C1 + v.C2),
      v => 0.85 / (1 / v.C1 + 1 / v.C2 + 1 / v.C3),
      v => 1.15 / (1 / v.C1 + 1 / v.C2 + 1 / v.C3),
    ],
  },
  {
    formulaId: 'c-parallel-circuit', area: 'C', unknown: 'R_P',
    formulaText: 'R_P = \\left(\\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}\\right)^{-1}',
    unit: 'Ω', round: 4,
    vars: [
      { symbol: 'R_1', ascii: 'R1', label: 'first branch resistance', unit: 'Ω', min: 4, max: 80, decimals: 0 },
      { symbol: 'R_2', ascii: 'R2', label: 'second branch resistance', unit: 'Ω', min: 4, max: 80, decimals: 0 },
      { symbol: 'R_3', ascii: 'R3', label: 'third branch resistance', unit: 'Ω', min: 4, max: 80, decimals: 0 },
    ],
    conversions: [
      { ascii: 'R1', unit: 'mΩ', factor: 1000, fromUnit: 'Ω' },
      { ascii: 'R1', unit: 'kΩ', factor: 0.001, fromUnit: 'Ω' },
      { ascii: 'R2', unit: 'mΩ', factor: 1000, fromUnit: 'Ω' },
      { ascii: 'R2', unit: 'kΩ', factor: 0.001, fromUnit: 'Ω' },
      { ascii: 'R3', unit: 'mΩ', factor: 1000, fromUnit: 'Ω' },
      { ascii: 'R3', unit: 'kΩ', factor: 0.001, fromUnit: 'Ω' },
    ],
    // R_P is 1.3333..26.667 Ω. The 80 Ω ceiling on the resistors is not
    // arbitrary: it is what keeps the "forgot the third branch" option off the
    // answer. At R1 = R2 = 4 Ω with R3 = 80 Ω that option returns 2 Ω against a
    // true 1.951 Ω, a 2.5 percent miss. Raising R3 to 200 Ω would collapse it
    // to 1.0 percent and the option would round onto the answer.
    compute: v => 1 / (1 / v.R1 + 1 / v.R2 + 1 / v.R3),
    context: 'a three-way branch box feeding the solenoids, contactors and indicator lamps of a grain-dryer control panel, all wired across the same supply',
    verb: 'has three parallel branches of',
    unknownPhrase: 'the equivalent parallel resistance',
    keyConcept: 'Parallel resistances add by reciprocal, the mirror image of the series case, so the combination is always less than the smallest branch and more than nothing. The reason is that the same voltage sits across every branch, so each draws a current in inverse proportion to its own resistance, and the supply current is the sum. That is also why the branches are individually protected rather than the feed. The other four parallel identities belong with it: the voltage is common to every branch, the branch currents sum to the line current, capacitances add directly, and inductances add by reciprocal.',
    mistakes: [
      'Adding the branch resistances directly, which returns a value larger than the largest branch',
      'Taking the reciprocal of the sum instead of the sum of the reciprocals',
      'Averaging the branches, which is wrong unless all three are equal',
    ],
    // Direct sum is 9..45x. The two-branch version is held to 1.025..2.5x by
    // the 80 Ω ceiling on R3, as documented above.
    distractors: [
      v => v.R1 + v.R2 + v.R3,
      v => (v.R1 * v.R2) / (v.R1 + v.R2),
      v => 0.85 / (1 / v.R1 + 1 / v.R2 + 1 / v.R3),
      v => 1.15 / (1 / v.R1 + 1 / v.R2 + 1 / v.R3),
    ],
  },
  {
    formulaId: 'c-voltage-divider', area: 'C', unknown: 'V_n',
    formulaText: 'V_n = V_{total}\\left(\\frac{R_n}{R_{total}}\\right)',
    unit: 'V', round: 3,
    vars: [
      { symbol: 'R_n', ascii: 'Rn', label: 'resistance of the branch of interest', unit: 'Ω', min: 15, max: 45, decimals: 0 },
      { symbol: 'R_{total}', ascii: 'Rtotal', label: 'total series resistance', unit: 'Ω', min: 60, max: 150, decimals: 0 },
      { symbol: 'V_{total}', ascii: 'Vtotal', label: 'applied supply voltage', unit: 'V', min: 12, max: 240, decimals: 0 },
    ],
    conversions: [
      { ascii: 'Rn', unit: 'kΩ', factor: 0.001, fromUnit: 'Ω' },
      { ascii: 'Rn', unit: 'mΩ', factor: 1000, fromUnit: 'Ω' },
      { ascii: 'Rtotal', unit: 'kΩ', factor: 0.001, fromUnit: 'Ω' },
      { ascii: 'Rtotal', unit: 'mΩ', factor: 1000, fromUnit: 'Ω' },
      { ascii: 'Vtotal', unit: 'kV', factor: 0.001, fromUnit: 'V' },
      { ascii: 'Vtotal', unit: 'mV', factor: 1000, fromUnit: 'V' },
    ],
    // R_n/R_total is 0.10..0.75, guaranteed because 15/150 = 0.10 and 45/60 =
    // 0.75 are the two extreme corners. V_n is 1.2..180 V.
    compute: v => v.Vtotal * (v.Rn / v.Rtotal),
    context: 'a resistive divider tapped partway along a series string to feed a low-current signal input on a farm control panel, with the remaining resistance forming the rest of the string',
    verb: 'drops across one section of a divider whose tapped section is',
    unknownPhrase: 'the voltage across that section',
    keyConcept: 'The voltage divider is the single most-used result in circuit work, and it says that voltage splits in direct proportion to resistance, so the section carrying the larger share of the ohm gets the larger share of the volt. Two conditions are worth stating because both are violated in practice. First, R_n must be a part of R_total, not the whole of it, which is why a divider of 15 Ω out of 150 Ω gives a tenth of the supply. Second, the rule holds only for a series string with nothing else drawing current at the tap; the moment a load is attached the tap is no longer unloaded and the ratio shifts.',
    mistakes: [
      'Inverting the ratio, which assigns the larger voltage to the smaller resistance',
      'Returning the voltage across the other section instead of the one asked for',
      'Applying the rule with a load attached at the tap, which pulls the divider off its open-circuit ratio',
    ],
    // Inverting squares the ratio error, 1.78..100x, which is why R_n/R_total is
    // held to 0.10..0.75 rather than allowed to run closer to zero. The
    // complementary section is 0.33..9x. Scalars close it out.
    distractors: [
      v => v.Vtotal * (v.Rtotal / v.Rn),
      v => v.Vtotal - v.Vtotal * (v.Rn / v.Rtotal),
      v => 0.85 * v.Vtotal * (v.Rn / v.Rtotal),
      v => 1.15 * v.Vtotal * (v.Rn / v.Rtotal),
    ],
  },
  {
    formulaId: 'c-current-divider', area: 'C', unknown: 'I_n',
    formulaText: 'I_n = I_{total}\\left(\\frac{R_{total}}{R_n}\\right)',
    unit: 'A', round: 4,
    vars: [
      { symbol: 'R_{total}', ascii: 'Rtotal', label: 'parallel equivalent resistance', unit: 'Ω', min: 15, max: 45, decimals: 0 },
      { symbol: 'R_n', ascii: 'Rn', label: 'resistance of the branch of interest', unit: 'Ω', min: 50, max: 150, decimals: 0 },
      { symbol: 'I_{total}', ascii: 'Itotal', label: 'total line current', unit: 'A', min: 2, max: 25, decimals: 1 },
    ],
    conversions: [
      { ascii: 'Rtotal', unit: 'kΩ', factor: 0.001, fromUnit: 'Ω' },
      { ascii: 'Rn', unit: 'kΩ', factor: 0.001, fromUnit: 'Ω' },
      { ascii: 'Rn', unit: 'mΩ', factor: 1000, fromUnit: 'Ω' },
      { ascii: 'Itotal', unit: 'mA', factor: 1000, fromUnit: 'A' },
      { ascii: 'Itotal', unit: 'kA', factor: 0.001, fromUnit: 'A' },
    ],
    // R_total here is the PARALLEL equivalent, so it is always less than either
    // branch and R_total/R_n is 0.10..0.90 by the 45 < 50 corner. That ordering
    // is the whole reason the ratio sits below 1 and the branch current comes
    // out under the line current. I_n is 0.2..22.5 A.
    compute: v => v.Itotal * (v.Rtotal / v.Rn),
    context: 'a two-branch heater circuit on a rice mill dryer where the line current splits between the heating element and the control-panel tap, both wired across the supply',
    verb: 'delivers into a branch of',
    unknownPhrase: 'the current through that branch',
    keyConcept: 'The current divider is the dual of the voltage divider and it is worth reading as the statement it really is: current shares in inverse proportion to resistance, so the smaller resistance carries the larger current. The rule is also a quick check on your own arithmetic, because the branch current must come out less than the line current, and the printed form guarantees that by dividing by the parallel equivalent R_total, which is smaller than either branch. Get the ratio above 1 and something has gone wrong. This is also the rule behind current sharing in ballast and load-balancing work.',
    mistakes: [
      'Inverting the ratio, which sends the larger current into the higher-resistance branch',
      'Treating R_total as the sum of the branches rather than their parallel equivalent',
      'Returning the line current minus the branch current, which is the other branch rather than the one asked for',
    ],
    // Inverting squares the ratio, 1.23..100x, so R_total/R_n is held to
    // 0.10..0.90. The complementary branch is 0.11..9x. Scalars close it out.
    distractors: [
      v => v.Itotal * (v.Rn / v.Rtotal),
      v => v.Itotal - v.Itotal * (v.Rtotal / v.Rn),
      v => 0.85 * v.Itotal * (v.Rtotal / v.Rn),
      v => 1.15 * v.Itotal * (v.Rtotal / v.Rn),
    ],
  },
  {
    formulaId: 'c-delta-wye', area: 'C', unknown: 'R_1',
    formulaText: 'R_1 = \\frac{R_bR_c}{R_a + R_b + R_c}',
    unit: 'Ω', round: 4,
    vars: [
      { symbol: 'R_a', ascii: 'Ra', label: 'first delta resistance', unit: 'Ω', min: 5, max: 100, decimals: 0 },
      { symbol: 'R_b', ascii: 'Rb', label: 'second delta resistance', unit: 'Ω', min: 5, max: 100, decimals: 0 },
      { symbol: 'R_c', ascii: 'Rc', label: 'third delta resistance', unit: 'Ω', min: 5, max: 100, decimals: 0 },
    ],
    conversions: [
      { ascii: 'Ra', unit: 'mΩ', factor: 1000, fromUnit: 'Ω' },
      { ascii: 'Rb', unit: 'mΩ', factor: 1000, fromUnit: 'Ω' },
      { ascii: 'Rc', unit: 'mΩ', factor: 1000, fromUnit: 'Ω' },
      { ascii: 'Ra', unit: 'kΩ', factor: 0.001, fromUnit: 'Ω' },
      { ascii: 'Rb', unit: 'kΩ', factor: 0.001, fromUnit: 'Ω' },
      { ascii: 'Rc', unit: 'kΩ', factor: 0.001, fromUnit: 'Ω' },
    ],
    // R_1 is 0.2273..48.78 Ω. The two error options here are the natural
    // slips and both stay in band: dividing by R_a alone instead of the sum is
    // 1.1..41x, and taking the parallel of b and c while ignoring R_a is
    // 1.025..11x.
    compute: v => (v.Rb * v.Rc) / (v.Ra + v.Rb + v.Rc),
    context: 'a delta-connected set of heater elements on a three-phase dryer that has to be re-expressed as an equivalent wye so the phase currents can be balanced',
    verb: 'converts a delta leg whose three resistances are',
    unknownPhrase: 'the first wye resistance',
    keyConcept: 'The delta to wye conversion is worth doing by its symmetric structure rather than by formula, because the pattern is that each wye arm is the product of the two delta resistors that meet at the far node, over the sum of all three. The wye-to-wye direction is the mirror of it, with each delta resistance equal to the sum of the pairwise wye products over one arm, and the two directions use the same three numbers in different arrangements. The conversion preserves the terminal behaviour of the network while changing what is inside it, which is the whole point: the external currents and voltages are unchanged, so a balanced three-phase load can be analysed with the single-phase divider and divider rules.',
    mistakes: [
      'Dividing the product by R_a alone rather than by the sum of all three',
      'Taking the product over the sum of only the two resistors in the numerator',
      'Reversing the conversion and applying the wye-to-delta form to a delta network',
    ],
    distractors: [
      v => (v.Rb * v.Rc) / v.Ra,
      v => (v.Rb * v.Rc) / (v.Rb + v.Rc),
      v => 0.85 * (v.Rb * v.Rc) / (v.Ra + v.Rb + v.Rc),
      v => 1.15 * (v.Rb * v.Rc) / (v.Ra + v.Rb + v.Rc),
    ],
  },

  // ------------------------------------------- basic electrical quantities
  {
    formulaId: 'c-conductance', area: 'C', unknown: 'C',
    formulaText: 'C = \\frac{1}{R}',
    unit: 'S', round: 4,
    vars: [
      { symbol: 'R', ascii: 'R', label: 'resistance', unit: 'Ω', min: 0.5, max: 3, decimals: 2 },
    ],
    conversions: [
      { ascii: 'R', unit: 'mΩ', factor: 1000, fromUnit: 'Ω' },
      { ascii: 'R', unit: 'kΩ', factor: 0.001, fromUnit: 'Ω' },
    ],
    // C is 0.3333..2 S. The sub-ohm resistance box is deliberate: it keeps the
    // "returned R instead of 1/R" option inside the 100x distractor band, since
    // that option is R itself and its ratio to the answer is R squared, so it
    // needs R under 10. A one-ohm resistor would push it to exactly 1.0x.
    compute: v => 1 / v.R,
    context: 'a low-resistance grounding strap on a pump motor frame being characterised in the shop before it goes back into service',
    verb: 'has a resistance of',
    unknownPhrase: 'the corresponding conductance',
    keyConcept: 'Conductance is simply resistance inverted, and the whole reason it exists is that it adds where resistance does not. Series resistances must be added directly, but the conductances of the same series elements add by reciprocal sum, which is why a network is far easier to solve in conductance when the elements are in series. The siemens is the unit, and the millimho of older texts is the same thing, a fact that trips up students reading a mixed-era diagram. Halving the resistance doubles the conductance, so the relationship is a reciprocal and not a scaling.',
    mistakes: [
      'Returning the resistance unchanged, forgetting that conductance inverts it',
      'Treating conductance as proportional to resistance rather than inversely proportional',
      'Reading the siemens as a unit of resistance rather than of the reciprocal of resistance',
    ],
    // The bare-R option is R squared in ratio, 0.25..9x, which is exactly why R
    // is capped at 3 Ω. 2R is 0.5..18x. Scalars close it out.
    distractors: [
      v => v.R,
      v => 2 * v.R,
      v => 0.85 / v.R,
      v => 1.15 / v.R,
    ],
  },
  {
    formulaId: 'c-current', area: 'C', unknown: 'I',
    formulaText: 'I = \\frac{V}{Z}',
    unit: 'A', round: 4,
    vars: [
      { symbol: 'V', ascii: 'V', label: 'applied voltage', unit: 'V', min: 120, max: 240, decimals: 0 },
      { symbol: 'Z', ascii: 'Z', label: 'impedance', unit: 'Ω', min: 40, max: 60, decimals: 0 },
    ],
    conversions: [
      { ascii: 'V', unit: 'kV', factor: 0.001, fromUnit: 'V' },
      { ascii: 'V', unit: 'mV', factor: 1000, fromUnit: 'V' },
      { ascii: 'Z', unit: 'mΩ', factor: 1000, fromUnit: 'Ω' },
      { ascii: 'Z', unit: 'kΩ', factor: 0.001, fromUnit: 'Ω' },
    ],
    // I is 2..6 A. Z is held to 40..60 Ω so the current stays in a narrow band,
    // because the inverted option Z/V has a ratio of 1 over I squared, which is
    // 0.028..0.25 only while I stays between 2 and 6. Letting Z span 10..240 Ω
    // would send that option to 1.7e-5 and the gate would reject it.
    compute: v => v.V / v.Z,
    context: 'a single-phase motor winding characterised on the test bench with a power meter, where the winding behaves as an impedance rather than a plain resistance',
    verb: 'draws, across an impedance of',
    unknownPhrase: 'the resulting current',
    keyConcept: 'This is Ohm law with one substitution and the substitution is the whole point. On direct current the opposition is pure resistance R, but on alternating current the winding also presents reactance, and resistance plus reactance combine vectorially into an impedance Z. That is why the current is not simply V over R on an AC circuit, and why a motor can draw a current well above what its DC resistance suggests. The practical consequence is that a series capacitor used to correct a motor reduces the impedance it sees and so raises the running current, which is the opposite of the naive expectation.',
    mistakes: [
      'Using the DC resistance in place of the impedance, ignoring the reactance',
      'Inverting the ratio and returning Z over V',
      'Using peak rather than RMS voltage, which overstates the current by the square root of two',
    ],
    // Z/V is 1/I squared, 0.028..0.25x, which is what the narrow Z box buys.
    // 2V/Z is the peak-for-RMS slip at exactly 2x. Scalars close it out.
    distractors: [
      v => v.Z / v.V,
      v => (2 * v.V) / v.Z,
      v => 0.85 * (v.V / v.Z),
      v => 1.15 * (v.V / v.Z),
    ],
  },
  {
    formulaId: 'c-resistance-in-wire', area: 'C', unknown: 'R',
    formulaText: 'R = \\frac{\\rho L}{A}',
    unit: 'Ω', round: 5,
    vars: [
      { symbol: '\\rho', ascii: 'rho', label: 'resistivity of the conductor', unit: 'Ω·mm²/m', min: 0.015, max: 0.030, decimals: 4 },
      { symbol: 'L', ascii: 'L', label: 'length of the wire', unit: 'm', min: 50, max: 400, decimals: 0 },
      { symbol: 'A', ascii: 'A', label: 'cross-sectional area', unit: 'mm²', min: 10, max: 50, decimals: 0 },
    ],
    conversions: [
      { ascii: 'L', unit: 'ft', factor: 3.28084, fromUnit: 'm' },
      { ascii: 'L', unit: 'km', factor: 0.001, fromUnit: 'm' },
      { ascii: 'A', unit: 'cm²', factor: 0.1, fromUnit: 'mm²' },
      { ascii: 'A', unit: 'in²', factor: 0.001550003, fromUnit: 'mm²' },
    ],
    // R is 0.015..1.2 Ω. Resistivity is quoted in ohm-millimetre-squared per
    // metre, which is the standard form in electrical work and keeps the
    // numbers readable; copper sits at 0.0172 and aluminium at 0.0282 inside
    // this box.
    compute: v => (v.rho * v.L) / v.A,
    context: 'a length of copper feeder being sized between the irrigation pump house and a distant control panel, with the conductor cross-section already selected',
    verb: 'gives a run of feeder with a resistivity of',
    unknownPhrase: 'the resistance of the run',
    keyConcept: 'Wire resistance is resistivity times length over area, and the area term is the one that matters in practice, which is why the trade measures wire in gauge rather than in diameter: doubling the area halves the resistance, and halving the area quadruples it. Resistivity is a property of the metal and rises with temperature, roughly a fifth from 20 to 100 degrees Celsius, which is why the ratings on a motor are quoted hot. The box uses the ohm-millimetre-squared per metre form of resistivity, the one that appears in every wire-sizing table, rather than the SI ohm-metre form, because it keeps the cross-section in the same millimetres as the table.',
    mistakes: [
      'Squaring the area term, as though resistance varied with the square of the cross-section',
      'Using the resistivity of the wrong metal, copper against aluminium, a factor of about 1.6',
      'Forgetting that resistivity rises with temperature and quoting a cold value for a hot conductor',
    ],
    // Squaring the area is 1/A, 0.02..0.1x. Halving is exactly 0.5x and stays
    // clear of the 0.02..0.1 band it shares the box with. Scalars close it.
    distractors: [
      v => (v.rho * v.L) / (v.A * v.A),
      v => (v.rho * v.L) / (2 * v.A),
      v => 0.85 * (v.rho * v.L) / v.A,
      v => 1.15 * (v.rho * v.L) / v.A,
    ],
  },
  {
    formulaId: 'c-composite-wire-resistance', area: 'C', unknown: 'R',
    formulaText: 'R = \\left(\\frac{\\rho}{2\\pi L}\\right)\\ln\\left(\\frac{r_2}{r_1}\\right)',
    unit: 'Ω', round: 8,
    vars: [
      { symbol: '\\rho', ascii: 'rho', label: 'resistivity of the conductor', unit: 'Ω·mm²/m', min: 0.016, max: 0.029, decimals: 4 },
      { symbol: 'L', ascii: 'L', label: 'length of the composite conductor', unit: 'm', min: 20, max: 200, decimals: 0 },
      { symbol: 'r_1', ascii: 'r1', label: 'inner radius of the conducting shell', unit: 'mm', min: 2, max: 6, decimals: 1 },
      { symbol: 'r_2', ascii: 'r2', label: 'outer radius of the conducting shell', unit: 'mm', min: 15, max: 40, decimals: 1 },
    ],
    conversions: [
      { ascii: 'L', unit: 'ft', factor: 3.28084, fromUnit: 'm' },
      { ascii: 'L', unit: 'cm', factor: 100, fromUnit: 'm' },
      { ascii: 'r1', unit: 'cm', factor: 0.1, fromUnit: 'mm' },
      { ascii: 'r1', unit: 'in', factor: 0.0393701, fromUnit: 'mm' },
      { ascii: 'r2', unit: 'cm', factor: 0.1, fromUnit: 'mm' },
      { ascii: 'r2', unit: 'in', factor: 0.0393701, fromUnit: 'mm' },
    ],
    // R is 1.17e-5..6.91e-4 Ω. Note the radius labels: the printed formula
    // reads ln(r2/r1) while the printed variable list calls r1 the OUTER and r2
    // the INNER, which would make the logarithm negative and the resistance
    // negative. These drills therefore assign r1 as the inner and r2 as the
    // outer, which is the ordinary convention and the correction the formula's
    // SOURCE NOTE records, so the printed expression comes out positive.
    // Resistivity is in ohm-millimetre-squared per metre and the radii in
    // millimetres, which is the pairing that keeps the result directly in ohms.
    compute: v => (v.rho / (2 * Math.PI * v.L)) * Math.log(v.r2 / v.r1),
    context: 'a tubular copper earthing electrode buried beside a pump house, where current leaves the rod through a cylindrical shell and the resistance has to be found from first principles',
    verb: 'gives a composite conductor of',
    unknownPhrase: 'the resistance between the inner and outer surfaces',
    keyConcept: 'This is the coaxial or composite form of resistance, and it earns its place because the current is not confined to a single area: it flows radially through a cylindrical shell, and the area available to it changes continuously from the inner surface to the outer one. Integrating that changing area produces a logarithm, which is the signature of the result and the reason it is worth knowing separately from the plain wire formula. The two radii must be in the order that makes the logarithm positive, and the printed handbook reverses those labels, which is a real trap. Note also that the length appears in the denominator, the opposite of an ordinary wire, because a longer electrode drives current deeper into the soil.',
    mistakes: [
      'Taking the radius ratio in the reverse order, which returns a negative resistance',
      'Using the ratio r2 over r1 instead of its natural logarithm, confusing a ratio with a log',
      'Omitting the 2*pi from the prefactor, a consistent 6.28 times error',
    ],
    // The ratio-instead-of-log option is (r2/r1)/ln(r2/r1) over r2/r1 in
    // 2.5..20, which is 2.73..6.68x and stays clear of the dropped-2pi option's
    // flat 6.283x. Note the parentheses on the second one: written as
    // rho/pi*L it would be rho times L over pi, which is 2L squared times the
    // answer and runs to tens of thousands of times it. Scalars close it out.
    distractors: [
      v => (v.rho / (2 * Math.PI * v.L)) * (v.r2 / v.r1),
      v => (v.rho / (Math.PI * v.L)) * Math.log(v.r2 / v.r1),
      v => 0.85 * (v.rho / (2 * Math.PI * v.L)) * Math.log(v.r2 / v.r1),
      v => 1.15 * (v.rho / (2 * Math.PI * v.L)) * Math.log(v.r2 / v.r1),
    ],
  },
  {
    formulaId: 'c-frequency', area: 'C', unknown: 'f',
    formulaText: 'f = \\frac{PN}{120}',
    unit: 'Hz', round: 4,
    vars: [
      { symbol: 'P', ascii: 'P', label: 'number of poles', unit: 'poles', min: 2, max: 12, decimals: 0 },
      { symbol: 'N', ascii: 'N', label: 'rotational speed', unit: 'rpm', min: 900, max: 3600, decimals: 0 },
    ],
    conversions: [
      { ascii: 'N', unit: 'r/min', factor: 1, fromUnit: 'rpm' },
      { ascii: 'N', unit: 'ft/min', factor: 196.85, fromUnit: 'rpm' },
      { ascii: 'N', unit: 'Hz', factor: 0.0166667, fromUnit: 'rpm' },
    ],
    // f is 15..360 Hz. The 120 is 60 seconds per minute times the 2 poles of a
    // pole pair, so a 4-pole machine at 1800 rpm gives 4 x 1800 / 120 = 60 Hz,
    // which is the standard 60 Hz supply in the Philippines.
    compute: v => (v.P * v.N) / 120,
    context: 'an induction motor nameplate being read in the field, where the pole count and the synchronous speed together fix the supply frequency the machine was designed for',
    verb: 'develops, for a machine with',
    unknownPhrase: 'the corresponding frequency',
    keyConcept: 'Frequency, poles and speed are tied together by 120, and the 120 is not arbitrary: it is sixty seconds in a minute times two, because the rotating field must make one complete revolution per pair of poles per cycle. This is why speed is not something you can choose freely on an AC motor. Given the supply frequency the pole count fixes the synchronous speed, and given the pole count and that speed the frequency follows, which is the direction this formula works. The synchronous speed is the ceiling the rotor never quite reaches, and the shortfall between the two is slip, which is what produces the starting torque.',
    mistakes: [
      'Using 60 in place of 120, forgetting that the rotating field completes one cycle per pole pair',
      'Returning the synchronous speed N over P rather than the frequency, confusing the two results',
      'Reading the pole count as the number of pole pairs and so halving the result',
    ],
    // N over P is the synchronous speed and lands 0.83..30x, a real confusion
    // rather than a contrivance. 60 in place of 120 is exactly 2x. Scalars
    // close it out.
    distractors: [
      v => (v.P * v.N) / 60,
      v => v.N / v.P,
      v => 0.85 * ((v.P * v.N) / 120),
      v => 1.15 * ((v.P * v.N) / 120),
    ],
  },
  {
    formulaId: 'c-percent-slip', area: 'C', unknown: 'slip',
    formulaText: '\\%\\,\\text{slip} = \\left(\\frac{n_s - n_r}{n_s}\\right) \\times 100',
    unit: '%', round: 4,
    vars: [
      { symbol: 'n_s', ascii: 'ns', label: 'synchronous speed of the rotating field', unit: 'rpm', min: 1780, max: 1800, decimals: 0 },
      { symbol: 'n_r', ascii: 'nr', label: 'actual speed of the rotor', unit: 'rpm', min: 1700, max: 1745, decimals: 0 },
    ],
    conversions: [
      { ascii: 'ns', unit: 'r/min', factor: 1, fromUnit: 'rpm' },
      { ascii: 'nr', unit: 'r/min', factor: 1, fromUnit: 'rpm' },
      { ascii: 'ns', unit: 'Hz', factor: 0.0166667, fromUnit: 'rpm' },
      { ascii: 'nr', unit: 'Hz', factor: 0.0166667, fromUnit: 'rpm' },
    ],
    // Slip is 1.97..5.56 percent. Both boxes are narrow on purpose. A four-pole
    // machine on 60 Hz has a synchronous speed of exactly 1800 rpm, so both
    // numbers legitimately cluster near it, and the 1745 < 1780 corner
    // guarantees the rotor never exceeds the field. Widening the rotor range to
    // make the speeds look more distinct would drive slip into the tens of
    // percent, which describes a stalled rotor rather than a running motor.
    compute: v => ((v.ns - v.nr) / v.ns) * 100,
    context: 'a four-pole 60 Hz pump motor measured with a stroboscope on the shop floor, its rotor speed compared against the speed the supply frequency demands',
    verb: 'runs at a rotor speed of',
    unknownPhrase: 'the resulting slip',
    keyConcept: 'Slip is the fraction of a revolution the induction motor fails to complete on each pass, and it is not a defect but the mechanism itself: the starting torque exists only because the rotor lags the field, and a rotor that matched the field exactly would generate no induced current at all. The useful consequence is that the synchronous speed is a hard ceiling. On 60 Hz a four-pole machine can never exceed 1800 rpm, and its nameplate speed of around 1750 rpm is that ceiling minus the few percent of slip. The denominator is the synchronous speed, which is also why slip is quoted as a percentage rather than in rpm.',
    mistakes: [
      'Dividing by the rotor speed rather than the synchronous speed, which is a small error here and a large one at high slip',
      'Reporting the speed ratio instead of the shortfall, so the answer comes out near a hundred percent',
      'Omitting the division entirely and returning the rpm difference labelled as a percentage',
    ],
    // Two of the four obvious errors are deliberately NOT offered, and the
    // reason is worth recording. The "forgot to divide by the synchronous
    // speed" form, (ns - nr) x 100, comes out ns times the answer, so at
    // 1780 rpm it is 1780x too large and would be an implausible option. The
    // wrong-denominator form, dividing by the rotor speed, is the opposite
    // problem: slip is under six percent here, so ns and nr differ by less
    // than six percent and the two versions land within one percent of each
    // other, making them indistinguishable as choices. So the distractors are
    // the speed ratio reported as a percentage, a doubled slip, and the
    // scalar pair.
    distractors: [
      v => (v.nr / v.ns) * 100,
      v => 2 * (((v.ns - v.nr) / v.ns) * 100),
      v => 0.85 * (((v.ns - v.nr) / v.ns) * 100),
      v => 1.15 * (((v.ns - v.nr) / v.ns) * 100),
    ],
  },
  {
    formulaId: 'c-percent-regulation', area: 'C', unknown: 'regulation',
    formulaText: '\\%\\,\\text{regulation} = \\left(\\frac{V_{nl} - V_{fl}}{V_{fl}}\\right) \\times 100',
    unit: '%', round: 4,
    vars: [
      { symbol: 'V_{nl}', ascii: 'Vnl', label: 'no-load terminal voltage', unit: 'V', min: 225, max: 240, decimals: 0 },
      { symbol: 'V_{fl}', ascii: 'Vfl', label: 'full-load terminal voltage', unit: 'V', min: 200, max: 215, decimals: 0 },
    ],
    conversions: [
      { ascii: 'Vnl', unit: 'kV', factor: 0.001, fromUnit: 'V' },
      { ascii: 'Vnl', unit: 'mV', factor: 1000, fromUnit: 'V' },
      { ascii: 'Vfl', unit: 'kV', factor: 0.001, fromUnit: 'V' },
      { ascii: 'Vfl', unit: 'mV', factor: 1000, fromUnit: 'V' },
    ],
    // Regulation is 4.65..20 percent. The 215 < 225 corner guarantees the
    // no-load voltage always exceeds the full-load value. The boxes are
    // deliberately disjoint rather than overlapping, because if the two
    // voltages could approach each other the correct-denominator and
    // wrong-denominator options would converge and the question would have two
    // defensible answers.
    compute: v => ((v.Vnl - v.Vfl) / v.Vfl) * 100,
    context: 'a distribution transformer on a rural feeder being assessed for voltage drop, its terminal voltage logged with the secondary open and again at rated load',
    verb: 'drops from a no-load',
    unknownPhrase: 'the resulting percentage regulation',
    keyConcept: 'Percentage regulation measures how much a source loses on its own terminals between no load and full load, and it is a property of the source rather than of the load, which is why it can be measured on the bench with nothing connected. The full-load voltage is the denominator because that is the voltage the load actually receives, so regulation is the drop expressed as a fraction of what matters to the user. A stiff source has low regulation and holds its voltage under load; a source with a large internal impedance cannot supply current without its terminal voltage falling, and that is the whole mechanism behind voltage drop on a long rural feeder.',
    mistakes: [
      'Dividing by the no-load voltage instead, which understates the drop',
      'Returning the difference in volts labelled as a percentage',
      'Taking the difference the wrong way round, producing a negative regulation',
    ],
    // Wrong denominator gives Vfl/Vnl, 0.83..0.96x, and is far enough from 1.0
    // across the whole box to stay a distinct option. The "forgot to divide"
    // form, (Vnl - Vfl) x 100, is deliberately absent: it comes out Vfl times
    // the answer, which is 200..215x and far outside the plausible band. The
    // second option instead reports the full-load voltage as a percentage of
    // the no-load voltage, which is 100 minus the regulation, 4.0..20.5x. The
    // scalar pair closes it out.
    distractors: [
      v => ((v.Vnl - v.Vfl) / v.Vnl) * 100,
      v => (v.Vfl / v.Vnl) * 100,
      v => 0.85 * (((v.Vnl - v.Vfl) / v.Vfl) * 100),
      v => 1.15 * (((v.Vnl - v.Vfl) / v.Vfl) * 100),
    ],
  },
  {
    formulaId: 'c-horsepower', area: 'C', unknown: 'hp',
    formulaText: 'hp = \\frac{2\\pi T N}{44{,}760}',
    unit: 'hp', round: 4,
    vars: [
      { symbol: 'T', ascii: 'T', label: 'torque', unit: 'N·m', min: 10, max: 200, decimals: 0 },
      { symbol: 'N', ascii: 'N', label: 'rotational speed', unit: 'rpm', min: 600, max: 3000, decimals: 0 },
    ],
    conversions: [
      { ascii: 'N', unit: 'r/min', factor: 1, fromUnit: 'rpm' },
      { ascii: 'N', unit: 'ft/min', factor: 196.85, fromUnit: 'rpm' },
      { ascii: 'N', unit: 'Hz', factor: 0.0166667, fromUnit: 'rpm' },
    ],
    // hp is 0.842..84.23. The printed formula omits its divisor entirely, so
    // the working form supplies 44,760 = 60 s/min x 746 W/hp. For 50 N-m at
    // 1200 rpm the printed 2*pi*T*N returns 376,991 against a true 8.42 hp.
    // The keyConcept and the formula's SOURCE NOTE both record this.
    compute: v => (2 * Math.PI * v.T * v.N) / 44760,
    context: 'an irrigation pump shaft being rated in the workshop from a torque wrench reading taken at the coupling while the shaft is turned at a measured speed',
    verb: 'delivers, at a torque of',
    unknownPhrase: 'the power in horsepower',
    keyConcept: 'Power is torque multiplied by angular speed, and the chain from the printed form to horsepower is three conversions that are easy to lose. The mechanical output in watts is two pi times torque times rpm divided by sixty, because rpm is per minute and the working is per second. One horsepower is then 746 watts, so the full divisor is sixty times 746, or 44,760. The handbook prints the numerator with no divisor at all, which overstates the answer by that same factor, and this drill supplies it. Note also that horsepower here is a mechanical output, and an electric motor rated in horsepower draws more than that from the wall because of its losses.',
    mistakes: [
      'Omitting the divisor, which overstates the output by a factor of 44,760',
      'Using 33,000 in place of 44,760, the constant that belongs to the torque in kilogram-force metres rather than newton metres',
      'Dropping the two pi, which halves the result',
    ],
    // 33,000 is the kgf-m constant and gives 1.356x, a genuine unit trap.
    // Dropping pi is exactly 2x. Scalars close it out.
    distractors: [
      v => (2 * Math.PI * v.T * v.N) / 33000,
      v => (2 * v.T * v.N) / 44760,
      v => 0.85 * ((2 * Math.PI * v.T * v.N) / 44760),
      v => 1.15 * ((2 * Math.PI * v.T * v.N) / 44760),
    ],
  },
  {
    formulaId: 'c-motor-hp-from-engine', area: 'C', unknown: 'hp_{(motor)}',
    formulaText: 'hp_{(motor)} = hp_{(engine)} \\times \\frac{2}{3}',
    unit: 'hp', round: 4,
    vars: [
      { symbol: 'hp_{(engine)}', ascii: 'hpeng', label: 'engine horsepower', unit: 'hp', min: 5, max: 150, decimals: 0 },
    ],
    conversions: [
      { ascii: 'hpeng', unit: 'kW', factor: 0.7457, fromUnit: 'hp' },
      { ascii: 'hpeng', unit: 'W', factor: 745.7, fromUnit: 'hp' },
    ],
    // hp is 3.333..100. This is the printed sizing rule and it is transcribed
    // exactly, unusual as that is for a handbook. The two-thirds is a derating:
    // an electric motor driven from an engine block is given a nameplate well
    // below the engine rating, because the engine must keep turning when the
    // motor stalls and because the drive train has its own losses.
    compute: v => v.hpeng * (2 / 3),
    context: 'a mill operator matching an electric drive to a diesel engine block, choosing the motor nameplate so the engine can carry the transient without stalling',
    verb: 'drives, from an engine rated at',
    unknownPhrase: 'the rated motor horsepower',
    keyConcept: 'The two-thirds factor is a derating rule rather than a physical constant, and it is worth understanding why it exists rather than memorising it. Sizing the motor well below the engine rating leaves headroom for the starting transient, when the motor draws several times its running current, and it keeps the engine from having to recover from a near-stall every time the load comes on. The engine is the prime mover and the motor is the load, so anything that lets the engine sag briefly will show up as a voltage dip on the whole feeder. A smaller motor also means a shorter starting transient and less stress on the drive belts and couplings.',
    mistakes: [
      'Applying the factor the wrong way and sizing the motor above the engine rating',
      'Halving rather than taking two thirds, which undersizes the motor unnecessarily',
      'Ignoring the derating and matching the motor nameplate directly to the engine rating',
    ],
    // The bare engine rating is 1.5x. Halving is 0.75x, comfortably clear of
    // the 0.85 scalar. Scalars close it out.
    distractors: [
      v => v.hpeng,
      v => v.hpeng / 2,
      v => 0.85 * v.hpeng * (2 / 3),
      v => 1.15 * v.hpeng * (2 / 3),
    ],
  },
  {
    formulaId: 'c-locked-rotor-current', area: 'C', unknown: 'LRC',
    formulaText: '\\text{LRC} = \\left(\\frac{VA}{hp}\\right)\\left(\\frac{hp}{V}\\right) = \\frac{VA}{V}',
    unit: 'A', round: 4,
    vars: [
      { symbol: 'VA', ascii: 'VA', label: 'apparent power', unit: 'VA', min: 3000, max: 25000, decimals: 0 },
      { symbol: 'V', ascii: 'V', label: 'rated voltage', unit: 'V', min: 220, max: 440, decimals: 0 },
    ],
    conversions: [
      { ascii: 'VA', unit: 'kVA', factor: 0.001, fromUnit: 'VA' },
      { ascii: 'VA', unit: 'MVA', factor: 1000000, fromUnit: 'VA' },
      { ascii: 'V', unit: 'kV', factor: 0.001, fromUnit: 'V' },
    ],
    // LRC is 6.82..113.6 A. The horsepower in the middle cancels, which is the
    // whole point of writing the form out: the printed product of the two
    // ratios reduces to VA over V, so the locked rotor current follows from
    // apparent power and voltage alone and the motor rating drops out.
    compute: v => v.VA / v.V,
    context: 'a stalled three-phase motor on a rice-mill conveyor being checked against the protective relay setting before the enclosure is closed up',
    verb: 'draws an apparent power of',
    unknownPhrase: 'the locked rotor current',
    keyConcept: 'A locked rotor draws several times its running current and it is the single largest demand a motor ever places on a feeder, so the protective device has to be sized for it rather than for the nameplate. The printed form is worth reading closely because the horsepower appears in the numerator of one ratio and the denominator of the other and cancels completely: the locked rotor current is simply apparent power over rated voltage. That is a real simplification, not a trick, and it means the rating in horsepower does not enter the calculation at all, only the kVA and the voltage. The remaining constant is whether the voltage is line to line or line to neutral, which is worth settling before the number is used.',
    mistakes: [
      'Failing to cancel the horsepower and treating it as an unknown still to be found',
      'Dividing by the line-to-line voltage where the nameplate kVA is quoted line to neutral',
      'Using the running current instead of the locked rotor current, which understates the demand several times',
    ],
    // The line-to-neutral slip is 0.577x and halving is 0.5x, which sit close
    // together but do not collide across the whole box. Scalars close it out.
    distractors: [
      v => v.VA / (Math.sqrt(3) * v.V),
      v => v.VA / (2 * v.V),
      v => 0.85 * (v.VA / v.V),
      v => 1.15 * (v.VA / v.V),
    ],
  },
];
