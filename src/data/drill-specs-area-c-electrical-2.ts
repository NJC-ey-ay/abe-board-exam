// Area C drill specs, part 2 of 4: Capacitance, Inductance and RLC Networks,
// Transformers, and Electrical Unit Conversions. Nine specs, which together
// with part 1 completes all twenty-four Area C electrical formulas.
//
// The three RLC results are vector sums and are drilled as such: each of
// X_c = 1/(2*pi*f*C), X_L = 2*pi*f*L and the locked-rotor-style sums are one
// side of a right triangle, and the whole point is that the answer is the
// hypotenuse and NOT the arithmetic sum of the legs. The distractor sets are
// built around that rather than around scalars, offering the resistive leg and
// the reactive leg separately. That is a real error - students who treat the
// triangle as an addition - and it is the most useful wrong answer available.
//
// It does mean the ranges have to be checked carefully. The two component
// options are safe only if they cannot land on the answer, and they cannot if
// the reactive leg is allowed to approach the resistive leg, since the
// hypotenuse then equals either leg. So in every one of the three the
// in-phase and quadrature ranges are kept far apart by construction: at least
// 5x on the impedance and voltage versions, 17 A against 6 A on the current
// version. The ranges were also chosen so the component options cannot collide
// with the 0.85 and 1.15 scalars, which is why the reactive leg is bounded
// above as well as below. c-rlc-parallel is the tightest of the three, its
// reactive leg option passing within about 7 percent of the 1.15 scalar.
//
// c-capacitive-reactance and c-inductive-reactance are the natural pair and
// the interesting contrast is that they are reciprocals of each other in
// structure: 1 over 2 pi f C against 2 pi f L. That is why neither offers the
// inverted form as a distractor. On a box where the answer ranges over a
// factor of ten or more, the inverse comes out thousands of times away, well
// outside a plausible band, so what is offered instead is the two ways of
// getting the constants wrong, dropping the 2 or dropping the pi.
//
// The printed variable list for c-capacitive-reactance says the capacitance is
// in Farad, which is correct but unreadable at working magnitudes, so these
// drills use microfarad as the base and offer nano- and millifarad. The
// conversion factor between them and the Farad is 1e6 either way and the
// reciprocal structure of the formula is unaffected.
//
// c-electrical-unit-conversions has no unknown in it at all as printed - it is
// five unit identities stacked together - so the drill takes the one that has
// an unknown, square mil = pi*D^2/4, and the keyConcept carries the rest. It is
// worth noting the identities are mutually consistent rather than independent:
// circular mil = D^2 and square mil = pi*D^2/4 together give circular over
// square as 4 over pi, which is 1.2732, and that is exactly the 1.273 the
// printed note quotes. So the family hangs together and the drill is testing
// the same web the note describes.
import type { DrillSpec } from './formula-drills';

export const areaCElectrical2Specs: DrillSpec[] = [
  // ---------------------------------------------------- RLC and reactances
  {
    formulaId: 'c-capacitive-reactance', area: 'C', unknown: 'X_c',
    formulaText: 'X_c = \\frac{1}{2\\pi f C}',
    unit: 'Ω', round: 4,
    vars: [
      { symbol: 'f', ascii: 'f', label: 'supply frequency', unit: 'Hz', min: 50, max: 60, decimals: 0 },
      { symbol: 'C', ascii: 'C', label: 'capacitance', unit: 'µF', min: 10, max: 100, decimals: 0 },
    ],
    conversions: [
      { ascii: 'f', unit: 'kHz', factor: 0.001, fromUnit: 'Hz' },
      { ascii: 'f', unit: 'r/min', factor: 60, fromUnit: 'Hz' },
      { ascii: 'C', unit: 'nF', factor: 1000, fromUnit: 'µF' },
      { ascii: 'C', unit: 'mF', factor: 0.001, fromUnit: 'µF' },
    ],
    // X_c is 31.83..318.31 Ω, a 10x spread that is the point: a starting
    // capacitor is chosen by the reactance it presents, and halving the
    // capacitance doubles it. The 50..60 Hz box is the Philippine supply.
    // The printed variable list says Farad; microfarad is used here because it
    // is the working unit and 100 µF is 1e-4 F.
    compute: v => 1 / (2 * Math.PI * v.f * v.C * 1e-6),
    context: 'a capacitor being selected for a single-phase motor starting winding, matched to the supply frequency so the reactance it presents suits the start torque',
    verb: 'presents, at',
    unknownPhrase: 'the capacitive reactance',
    keyConcept: 'Capacitive reactance is the opposition a capacitor presents to alternating current, and it falls as either the frequency or the capacitance rises, which is the reciprocal in the formula. At 60 Hz a 25 µF capacitor presents about 106 Ω, and the same capacitor at 50 Hz presents 127 Ω, so the same part is a different component on a different supply. Note also the note printed with this formula, that the current is i = V over X_eq and the voltage across the capacitor is i times X_c: reactance is used exactly where resistance would be, and it is the reason a capacitor in a motor circuit is described by its reactance on the nameplate.',
    mistakes: [
      'Doubling the capacitance instead of halving the reactance it presents',
      'Omitting one of the constants, either the 2 or the pi, giving a factor of two or of pi',
      'Reading C in Farad while the working figures are in microfarad, which is out by a million',
    ],
    // The inverted form is deliberately absent: the answer spans 10x, so 1 over
    // X_c would be 0.003x to 0.01x of it and would be an implausible option.
    // What is offered instead is the two constant errors, 2x and pi x, both
    // clear of the scalar pair.
    distractors: [
      v => 1 / (Math.PI * v.f * v.C * 1e-6),
      v => 1 / (2 * v.f * v.C * 1e-6),
      v => 0.85 / (2 * Math.PI * v.f * v.C * 1e-6),
      v => 1.15 / (2 * Math.PI * v.f * v.C * 1e-6),
    ],
  },
  {
    formulaId: 'c-inductive-reactance', area: 'C', unknown: 'X_L',
    formulaText: 'X_L = 2\\pi f L',
    unit: 'Ω', round: 4,
    vars: [
      { symbol: 'f', ascii: 'f', label: 'supply frequency', unit: 'Hz', min: 50, max: 60, decimals: 0 },
      { symbol: 'L', ascii: 'L', label: 'inductance', unit: 'H', min: 0.05, max: 2, decimals: 2 },
    ],
    conversions: [
      { ascii: 'f', unit: 'kHz', factor: 0.001, fromUnit: 'Hz' },
      { ascii: 'f', unit: 'r/min', factor: 60, fromUnit: 'Hz' },
      { ascii: 'L', unit: 'mH', factor: 1000, fromUnit: 'H' },
      { ascii: 'L', unit: 'µH', factor: 1000000, fromUnit: 'H' },
    ],
    // X_L is 15.71..753.98 Ω. The contrast with c-capacitive-reactance is
    // structural: that one is 1 over 2 pi f C and this is 2 pi f L, so
    // raising frequency raises this reactance and lowers the capacitive one.
    compute: v => 2 * Math.PI * v.f * v.L,
    context: 'a reactor or ballast coil being checked on the bench at a known supply frequency, the inductance having been measured beforehand',
    verb: 'presents, at',
    unknownPhrase: 'the inductive reactance',
    keyConcept: 'Inductive reactance rises in direct proportion to both frequency and inductance, which is the exact opposite of the capacitive case, and that opposition is the basis of every transformer and ballast. Frequency enters because the changing flux in a core is what induces the counter-voltage, and faster flux reversals mean a larger induced voltage for the same inductance. It also explains the practical limit on mains-frequency iron: raising the frequency lets a given core carry more flux or lets the same flux be obtained from a smaller core, which is why switchmode supplies run at tens of kilohertz rather than at 50 or 60 Hz.',
    mistakes: [
      'Raising the frequency and expecting the reactance to fall, as it does for a capacitor',
      'Omitting the pi, a consistent factor of 3.14 error',
      'Omitting the 2 as well, halving the result',
    ],
    // Same reasoning as the capacitive case: the inverted form would be out of
    // band by orders of magnitude, so the two constant slips stand in. The
    // dropped-pi error is pi x and the dropped-2 is exactly 0.5x.
    distractors: [
      v => Math.PI * v.f * v.L,
      v => 2 * v.f * v.L,
      v => 0.85 * 2 * Math.PI * v.f * v.L,
      v => 1.15 * 2 * Math.PI * v.f * v.L,
    ],
  },
  {
    formulaId: 'c-rlc-series', area: 'C', unknown: 'Z',
    formulaText: 'Z = \\sqrt{R^2 + \\left(X_L - X_c\\right)^2}',
    unit: 'Ω', round: 4,
    vars: [
      { symbol: 'R', ascii: 'R', label: 'series resistance', unit: 'Ω', min: 20, max: 100, decimals: 0 },
      { symbol: 'X_c', ascii: 'Xc', label: 'capacitive reactance', unit: 'Ω', min: 5, max: 20, decimals: 0 },
      { symbol: 'X_L', ascii: 'XL', label: 'inductive reactance', unit: 'Ω', min: 100, max: 250, decimals: 0 },
    ],
    conversions: [
      { ascii: 'R', unit: 'mΩ', factor: 1000, fromUnit: 'Ω' },
      { ascii: 'R', unit: 'kΩ', factor: 0.001, fromUnit: 'Ω' },
      { ascii: 'Xc', unit: 'mΩ', factor: 1000, fromUnit: 'Ω' },
      { ascii: 'XL', unit: 'kΩ', factor: 0.001, fromUnit: 'Ω' },
    ],
    // Z is 82.46..264.62 Ω. X_L starts at 100 Ω against X_c topping out at
    // 20 Ω, so the two legs are never within 4x of each other and the
    // hypotenuse can never collapse onto either one. R/Z lands in 0.080..0.781,
    // which clears the 0.85 scalar, and X_L/Z in 0.781..1.083, which clears
    // both scalars. The inductive leg is bounded below as well as above for
    // that reason.
    compute: v => Math.sqrt(v.R * v.R + Math.pow(v.XL - v.Xc, 2)),
    context: 'a series-tuned heating circuit in which a coil and a capacitor bank are switched to cancel each other, the residual being the only opposition left to the current',
    verb: 'presents a total impedance with',
    unknownPhrase: 'the resulting series impedance',
    keyConcept: 'Resistance and reactance cannot be added directly on alternating current, because one is in phase with the current and the other is a quarter cycle out of it, so the two only ever appear as the legs of a right triangle and the impedance is the hypotenuse. Within a series circuit the inductive and capacitive reactances oppose each other, which is why they are subtracted first and why a tuned circuit can be made to present almost pure resistance: cancel the reactance and the circuit is at resonance, drawing maximum current for the smallest voltage. Note that the printed formula also gives the voltage as i times the same root, since the current is common to every element in series.',
    mistakes: [
      'Adding the reactances instead of subtracting them, losing the tuning effect entirely',
      'Adding the resistance and the net reactance directly rather than as a vector sum',
      'Cancelling the reactance to zero at resonance and returning R as the impedance',
    ],
    // The two component options are the real error here, offering each leg of
    // the triangle on its own. Both ranges were kept clear of the scalars, as
    // documented above.
    distractors: [
      v => v.R,
      v => v.XL,
      v => 0.85 * Math.sqrt(v.R * v.R + Math.pow(v.XL - v.Xc, 2)),
      v => 1.15 * Math.sqrt(v.R * v.R + Math.pow(v.XL - v.Xc, 2)),
    ],
  },
  {
    formulaId: 'c-rlc-parallel', area: 'C', unknown: 'I_P',
    formulaText: 'I_P = \\sqrt{I_R^2 + \\left(I_L - I_C\\right)^2}',
    unit: 'A', round: 4,
    vars: [
      { symbol: 'I_R', ascii: 'IR', label: 'in-phase resistive current', unit: 'A', min: 6, max: 20, decimals: 1 },
      { symbol: 'I_C', ascii: 'IC', label: 'capacitive branch current', unit: 'A', min: 1.5, max: 3, decimals: 2 },
      { symbol: 'I_L', ascii: 'IL', label: 'inductive branch current', unit: 'A', min: 20, max: 40, decimals: 1 },
    ],
    conversions: [
      { ascii: 'IR', unit: 'mA', factor: 1000, fromUnit: 'A' },
      { ascii: 'IC', unit: 'mA', factor: 1000, fromUnit: 'A' },
      { ascii: 'IL', unit: 'mA', factor: 1000, fromUnit: 'A' },
    ],
    // I_P is 18.03..43.40 A. I_L starts at 20 A against I_R topping out at
    // 20 A and I_C at 3 A, so the net reactive current is 17 A at the bottom
    // and the in-phase leg never approaches it. I_R/I_P lands in 0.154..0.762,
    // clearing the 0.85 scalar, and I_L/I_P in 0.735..1.067, clearing both.
    // This is the tightest of the three RLC boxes, the reactive leg option
    // passing about 7 percent from the 1.15 scalar.
    compute: v => Math.sqrt(Math.pow(v.IR, 2) + Math.pow(v.IL - v.IC, 2)),
    context: 'a three-branch heater circuit being balanced before energising, where the resistive load, the inductor ballast and the correcting capacitor each draw their own current from the same feeder',
    verb: 'draws a total line current with branch currents',
    unknownPhrase: 'the resulting line current',
    keyConcept: 'This is the dual of the series impedance result and it is the one that matters in practice, because a parallel circuit is where power factor is judged. The in-phase current is the useful part; the reactive currents are drawn by the machine and cost nothing but still occupy the supply. They oppose each other, so the total is the hypotenuse of the in-phase leg and the net reactive leg, and a correctly sized correcting capacitor shrinks the net reactive leg and with it the line current. The line current is therefore always at least the in-phase current, and never more than the arithmetic sum of the branch currents, which is the check that the vector treatment is right.',
    mistakes: [
      'Adding the three branch currents arithmetically instead of vectorially',
      'Ignoring that the inductive and capacitive currents oppose, so the total is less than their sum',
      'Returning the line current as the in-phase current alone, ignoring the reactive legs',
    ],
    // Same two-legs-of-the-triangle pair as the series version, with ranges
    // chosen to clear the scalars.
    distractors: [
      v => v.IR,
      v => v.IL,
      v => 0.85 * Math.sqrt(Math.pow(v.IR, 2) + Math.pow(v.IL - v.IC, 2)),
      v => 1.15 * Math.sqrt(Math.pow(v.IR, 2) + Math.pow(v.IL - v.IC, 2)),
    ],
  },
  {
    formulaId: 'c-rlc-voltage', area: 'C', unknown: 'V_T',
    formulaText: 'V_T = \\sqrt{V_R^2 + \\left(V_L - V_C\\right)^2}',
    unit: 'V', round: 4,
    vars: [
      { symbol: 'V_R', ascii: 'VR', label: 'in-phase voltage across the resistance', unit: 'V', min: 40, max: 200, decimals: 0 },
      { symbol: 'V_C', ascii: 'VC', label: 'voltage across the capacitance', unit: 'V', min: 10, max: 40, decimals: 0 },
      { symbol: 'V_L', ascii: 'VL', label: 'voltage across the inductance', unit: 'V', min: 200, max: 400, decimals: 0 },
    ],
    conversions: [
      { ascii: 'VR', unit: 'mV', factor: 1000, fromUnit: 'V' },
      { ascii: 'VR', unit: 'kV', factor: 0.001, fromUnit: 'V' },
      { ascii: 'VL', unit: 'kV', factor: 0.001, fromUnit: 'V' },
      { ascii: 'VC', unit: 'mV', factor: 1000, fromUnit: 'V' },
    ],
    // V_T is 164.9..438.3 V. V_L starts at 200 V against V_R topping out at
    // 200 V and V_C at 40 V, so the net reactive voltage is 160 V at the
    // bottom. V_R/V_T lands in 0.102..0.781, clearing the 0.85 scalar, and
    // V_L/V_T in 0.725..1.104, clearing both.
    compute: v => Math.sqrt(Math.pow(v.VR, 2) + Math.pow(v.VL - v.VC, 2)),
    context: 'a three-element series circuit being analysed from measured element voltages during a fault investigation, the source voltage having been measured as the total',
    verb: 'measures, with element voltages',
    unknownPhrase: 'the total applied voltage',
    keyConcept: 'The voltages across the elements of a series circuit are the same shape as the impedances, in phase with their own currents, and the supply is again the hypotenuse rather than the sum. This is where the real danger sits on a series circuit, because the reactive voltages can each exceed the supply that produced them: a supply of 220 V can put well over 220 V across an inductor, which is why insulation in motors and transformers is rated for the sum of the reactive voltages and not for the supply. The volts across the individual components also do not add arithmetically, so adding them is a conservation-of-energy error even though each one is individually a correct measurement.',
    mistakes: [
      'Adding the element voltages arithmetically, which overstates the supply',
      'Ignoring that an individual element voltage may legitimately exceed the total',
      'Forgetting that the inductive and capacitive voltages oppose in a series circuit',
    ],
    distractors: [
      v => v.VR,
      v => v.VL,
      v => 0.85 * Math.sqrt(Math.pow(v.VR, 2) + Math.pow(v.VL - v.VC, 2)),
      v => 1.15 * Math.sqrt(Math.pow(v.VR, 2) + Math.pow(v.VL - v.VC, 2)),
    ],
  },

  // ------------------------------------------------------------ transformers
  {
    formulaId: 'c-transformer-voltage-ratio', area: 'C', unknown: 'V_s',
    formulaText: 'V_s = V_{primary}\\left(\\frac{N_s}{N_{primary}}\\right)',
    unit: 'V', round: 3,
    vars: [
      { symbol: 'V_{primary}', ascii: 'Vp', label: 'primary voltage', unit: 'V', min: 110, max: 480, decimals: 0 },
      { symbol: 'N_{primary}', ascii: 'Np', label: 'primary turns', unit: 'turns', min: 240, max: 800, decimals: 0 },
      { symbol: 'N_s', ascii: 'Ns', label: 'secondary turns', unit: 'turns', min: 100, max: 200, decimals: 0 },
    ],
    conversions: [
      { ascii: 'Vp', unit: 'kV', factor: 0.001, fromUnit: 'V' },
      { ascii: 'Vp', unit: 'mV', factor: 1000, fromUnit: 'V' },
    ],
    // N_s/N_primary is 0.125..0.833, so this is a step-down transformer and
    // the 100..200 turn secondary is always the smaller winding. V_s is
    // 13.75..400 V. Holding the ratio strictly below 1 does the range work
    // here: the inverted option is 1 over u squared, which runs 0.0156..64 and
    // would swallow both the 0.85 and 1.15 scalars if the ratio were allowed
    // to cross 1.
    compute: v => v.Vp * (v.Ns / v.Np),
    context: 'a step-down distribution transformer on a rural feeder whose secondary supplies a cluster of control panels, the turn counts having been read from the winding during a rewinding job',
    verb: 'has, on its primary',
    unknownPhrase: 'the secondary voltage',
    keyConcept: 'A transformer is a turns ratio applied to voltage, and the two windings are the only thing that sets it: the primary voltage multiplied by secondary over primary turns gives the secondary voltage exactly, with no losses involved in the ratio itself. The consequence is that the current turns ratio is the other way up, so a step-down transformer steps its current up, and a large winding carries less current. Nothing in the formula has to know the core material or the frequency, which is the elegance of it; those affect how much loss there is, not what the ratio is. Note the two mistakes available here are inverting the ratio, and squaring it, and both are worth recognising as different errors.',
    mistakes: [
      'Inverting the turns ratio, which turns a step-down into an apparent step-up',
      'Squaring the turns ratio instead of applying it once',
      'Treating the ratio as lost, so that the secondary voltage is assumed equal to the primary',
    ],
    // The two structural options are deliberately built to be disjoint: the
    // inverted ratio spans 0.0156..64 and the squared ratio 0.0156..0.694, and
    // the scalar pair sits in the gap between 0.694 and 1.44. The two can only
    // coincide at a ratio of 1, which the step-down box excludes.
    distractors: [
      v => v.Vp * (v.Np / v.Ns),
      v => v.Vp * Math.pow(v.Ns / v.Np, 2),
      v => 0.85 * v.Vp * (v.Ns / v.Np),
      v => 1.15 * v.Vp * (v.Ns / v.Np),
    ],
  },
  {
    formulaId: 'c-transformer-power-relation', area: 'C', unknown: 'I_s',
    formulaText: 'I_s = \\left(\\frac{V_{primary}\\,I_{primary}}{V_s}\\right)',
    unit: 'A', round: 4,
    vars: [
      { symbol: 'V_{primary}', ascii: 'Vp', label: 'primary voltage', unit: 'V', min: 220, max: 440, decimals: 0 },
      { symbol: 'I_{primary}', ascii: 'Ip', label: 'primary current', unit: 'A', min: 1, max: 12, decimals: 1 },
      { symbol: 'V_s', ascii: 'Vs', label: 'secondary voltage', unit: 'V', min: 70, max: 150, decimals: 0 },
    ],
    conversions: [
      { ascii: 'Vp', unit: 'kV', factor: 0.001, fromUnit: 'V' },
      { ascii: 'Vp', unit: 'mV', factor: 1000, fromUnit: 'V' },
      { ascii: 'Ip', unit: 'mA', factor: 1000, fromUnit: 'A' },
      { ascii: 'Vs', unit: 'kV', factor: 0.001, fromUnit: 'V' },
    ],
    // V_s is 70..150 V against V_primary 220..440 V, so the secondary is
    // always the lower-voltage winding and V_s/V_primary is 0.159..0.682.
    // That single fact is what keeps the two structural options apart, since
    // the inverted one is the square of that ratio and the other is the ratio
    // itself, and the two only coincide at unity. I_s is 1.467..75.43 A.
    compute: v => (v.Vp * v.Ip) / v.Vs,
    context: 'a step-down transformer being assessed for its secondary conductor size, the primary voltage, secondary voltage and primary current all having been metered under load',
    verb: 'carries a primary of',
    unknownPhrase: 'the secondary current',
    keyConcept: 'An ideal transformer passes power through unchanged, so the power in equals the power out and the volt-ampere product is the same on both windings. The consequence is that the current ratio is the inverse of the voltage ratio, and that is the fact the whole transformer works on: step the voltage down and you must step the current up by the same factor, which is why a distribution transformer delivers far more current than it draws. Nothing here is a real part, it is the multiplication of two windings, and the only losses are in the iron and the copper. The two available errors are inverting the voltage ratio and returning the primary current, and they are worth keeping apart because they look superficially similar.',
    mistakes: [
      'Inverting the voltage ratio, which understates a step-down secondary current',
      'Returning the primary current unchanged, forgetting that power is conserved across the ratio',
      'Treating the transformer as having losses, so that the secondary appears to deliver more than it draws',
    ],
    // Only one structural error survives here, and finding out why is the
    // instructive part. The answer is I_p over w, where w = V_s/V_primary, so
    // any option of the form I_p times a power of w comes out at a power of w
    // times the answer: I_p*w is w squared, 0.0253..0.4649, which is fine, but
    // I_p*w squared is w cubed, 0.00403..0.317, and the 0.4 percent end is
    // outside the plausible band. Squaring the ratio was the first thing tried
    // here and the gate rejected it. I_p itself is w, 0.159..0.682, whose
    // range overlaps the w squared option and would let the two coincide, and
    // dividing by w just reproduces the answer. So the structural slot holds
    // I_p*w and the rest are scalars, spaced to clear it: 0.85 sits 83 percent
    // above the top of its range and 2 sits 74 percent above 1.15.
    distractors: [
      v => v.Ip * (v.Vs / v.Vp),
      v => 0.85 * ((v.Vp * v.Ip) / v.Vs),
      v => 1.15 * ((v.Vp * v.Ip) / v.Vs),
      v => 2 * ((v.Vp * v.Ip) / v.Vs),
    ],
  },
  {
    formulaId: 'c-transformer-current-turns', area: 'C', unknown: 'I_s',
    formulaText: 'I_s = I_{primary}\\left(\\frac{N_{primary}}{N_s}\\right)',
    unit: 'A', round: 4,
    vars: [
      { symbol: 'I_{primary}', ascii: 'Ip', label: 'primary current', unit: 'A', min: 2, max: 20, decimals: 1 },
      { symbol: 'N_{primary}', ascii: 'Np', label: 'primary turns', unit: 'turns', min: 240, max: 800, decimals: 0 },
      { symbol: 'N_s', ascii: 'Ns', label: 'secondary turns', unit: 'turns', min: 100, max: 200, decimals: 0 },
    ],
    conversions: [
      { ascii: 'Ip', unit: 'mA', factor: 1000, fromUnit: 'A' },
      { ascii: 'Ip', unit: 'kA', factor: 0.001, fromUnit: 'A' },
    ],
    // N_primary/N_s is 1.2..8, a clear step-down, so the secondary current
    // always exceeds the primary and I_s is 2.4..160 A. Same reasoning as the
    // voltage ratio spec: keeping the ratio strictly above 1 puts the
    // inverted option in 0.0156..0.694 and the squared option in 1.2..8, and
    // the scalar pair in the gap between them. The two coincide only at a
    // ratio of 1.
    compute: v => v.Ip * (v.Np / v.Ns),
    context: 'a step-down transformer secondary being checked for conductor size, the primary current and the winding turn counts having been recorded during a routine test',
    verb: 'draws, at the primary winding,',
    unknownPhrase: 'the secondary current',
    keyConcept: 'The current turns ratio is the inverse of the voltage turns ratio, and remembering which way round it runs is the whole of this formula: more turns means less current. That is not an arbitrary convention, it follows from conserving power, since stepping the voltage up has to step the current down by the same factor to leave the product unchanged. It is also the reason a transformer winding is sized in copper by the current it carries, and why the high-voltage winding is the thin one. The result is that a step-down transformer is a current multiplier, and a distribution transformer sitting on a farm feeder is the device that lets a modest feeder conductor deliver a much larger load current.',
    mistakes: [
      'Applying the turns ratio directly to the current instead of inverting it',
      'Squaring the turns ratio rather than applying it once',
      'Returning a current smaller than the primary, which no step-down transformer can do',
    ],
    // Same disjoint construction as the voltage ratio, with the ratio above 1
    // this time so the inverted option lands below the scalars and the
    // squared option above them.
    distractors: [
      v => v.Ip * (v.Ns / v.Np),
      v => v.Ip * Math.pow(v.Np / v.Ns, 2),
      v => 0.85 * v.Ip * (v.Np / v.Ns),
      v => 1.15 * v.Ip * (v.Np / v.Ns),
    ],
  },

  // --------------------------------------------------------- unit conversions
  {
    formulaId: 'c-electrical-unit-conversions', area: 'C', unknown: 'SQ',
    formulaText: '\\text{square mil} = \\frac{\\pi D^2}{4}',
    unit: 'sq mil', round: 3,
    vars: [
      { symbol: 'D', ascii: 'D', label: 'wire diameter', unit: 'mil', min: 20, max: 250, decimals: 1 },
    ],
    conversions: [
      { ascii: 'D', unit: 'in', factor: 0.001, fromUnit: 'mil' },
      { ascii: 'D', unit: 'mm', factor: 0.0254, fromUnit: 'mil' },
      { ascii: 'D', unit: 'cm', factor: 0.00254, fromUnit: 'mil' },
    ],
    // SQ is 314.16..49087.4 sq mil. The printed formula prints five identities
    // at once with no unknown, so this drill takes the one that has an unknown
    // and the keyConcept carries the rest. Diameter 20..250 mils spans from
    // about 18 AWG down to 30 AWG, the working range of a conductor table.
    compute: v => (Math.PI * v.D * v.D) / 4,
    context: 'a conductor being checked against a copper wire table before purchase, the gauge having been measured with a micrometer',
    verb: 'measures',
    unknownPhrase: 'the cross-sectional area',
    keyConcept: 'The two wire areas are related by 4 over pi, which is 1.2732, and that single number is why circular mils and square mils are both in use: the circular mil is defined as the area of a circle of one mil diameter, so it is simply D squared, while the square mil is the actual geometric area pi D squared over 4. The printed note is internally consistent, since D squared divided by pi D squared over 4 gives 4 over pi, and it also quotes the same 1.273 as the conversion between the two. Circular mils are preferred on wire tables because the size of a wire is then just the square of its diameter, with no pi in the way, and the trade sizes are round numbers in circular mils such as 1000 and 5000.',
    mistakes: [
      'Computing D squared alone, which gives the circular mil rather than the square mil',
      'Omitting the division by 4, returning four times the area',
      'Omitting the pi, which returns about a third of the area',
    ],
    // D squared is exactly 4/pi = 1.2732x and pi*D^2 is exactly 4x; both
    // constants sit clear of the scalar pair.
    distractors: [
      v => v.D * v.D,
      v => Math.PI * v.D * v.D,
      v => 0.85 * ((Math.PI * v.D * v.D) / 4),
      v => 1.15 * ((Math.PI * v.D * v.D) / 4),
    ],
  },
];
