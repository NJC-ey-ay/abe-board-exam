// Area C drill specs, the last three of the 240: the lighting, energy-metering
// and wire-size formulas under Structures, Environment & Bioprocess. Three
// specs, taking coverage from 237 to 240.
//
// All three are CAST-CONSTANT formulas, and they carry the same discipline the
// probe stamped on batch eight: the driving lane is locked in the compute and
// the confusable lane is the distractor, because making the constant a giving
// variable would let a distractor that used another book value land on it.
//
// c-maximum-lamp-spacing locks the fluorescent direct-RLM 2x40W lane at a
// factor of 1.0, so the answer is the mounting height itself; the 0.9 (louvers
// or incandescent dome) and 1.2 (glass/metal/plastic fixtures) book factors sit
// beside the scalars as the options. The skill is identifying the fixture lane
// from the story, not the arithmetic.
//
// c-energy-consumption-disk-meter casts the meter factor k_h = 2.5 and the
// 60/1000 scaling into the compute; the omitted-meter-factor slip is a fixed
// 0.4 of the answer, the same distractor family as the dropped hulling
// coefficient in batch six. The thousand-fold omitted-1000 and the
// forgotten-counting-period slips are both excluded (the first fails the
// plausibility ceiling, the second slides with T_c itself).
//
// c-wire-size-selection locks in the copper lane (10.8) with the aluminium lane
// (17) as the structural distractor at a fixed 17/10.8 = 1.574, and the
// voltage-drop fraction V_drop = 0.02 is a cast constant. The box is scaled so
// the answer lands in a real feeder range, roughly 600 to 180 thousand circular
// mils.
import type { DrillSpec } from './formula-drills';

export const areaCPower9Specs: DrillSpec[] = [
  {
    formulaId: 'c-maximum-lamp-spacing', area: 'C', unknown: 'M_s',
    formulaText: 'M_s = 1.0 \\, M_H \\ (direct\\ RLM\\ 2\\times40W)',
    unit: 'ft', round: 1,
    vars: [
      { symbol: 'M_H', ascii: 'Mh', label: 'maximum lamp height', unit: 'ft', min: 8, max: 20, decimals: 1 },
    ],
    // M_s = 1.0 x M_H for the fluorescent 2x40W direct-RLM lane, the lane the
    // story fixes; the 0.9 louvers/dome lane and the 1.2 glass lane can never
    // be giving variables, because each is another option's value. The answer
    // being the height itself is the point - the drill is the factor.
    compute: v => v.Mh,
    context: 'a shop floor lighting designer spacing the fluorescent rows',
    verb: 'records',
    unknownPhrase: 'the maximum spacing between lamps in feet',
    keyConcept: 'The spacing of lamps on a ceiling is the mounting height scaled by a fixture factor - the rule is that the maximum distance between adjacent luminaires is the mounting height times a number the luminaire class decides, and that number is the whole content of the formula. The mounting height is the distance from the lamp to the working plane, not from the lamp to the floor, because the working plane is what the light has to reach; a lamp mounted high above a floor but low above a bench has to be spaced for the bench. The factor is where the fixture choice lands: a direct RLM fitting carrying two 40-watt tubes is rated 1.0, the louvers that box the light and the silvered-bowl incandescent dome are rated 0.9 - they throw a tighter beam, so the lamps must stand closer - and the glass, metal or plastic industrial diffusers are rated 1.2, wide and forgiving. Reading the story for the fixture before reaching for the number is the actual operation, and mixing a 0.9 class into a 1.0 grid spaces the rows ten percent too tight, which is a layout error, not a rounding one.',
    mistakes: [
      'Applying the 0.9 louvers factor to a plain 2x40W RLM row, which tightens the grid by ten percent for no reason',
      'Applying the 1.2 glass-fixture factor to a louvered row, spacing them too far for the beam they throw',
      'Measuring the mounting height to the floor instead of the working plane, which stretches the grid toward the edge of the room',
    ],
    distractors: [
      v => 0.9 * v.Mh,
      v => 1.2 * v.Mh,
      v => 0.85 * v.Mh,
      v => 1.15 * v.Mh,
    ],
  },
  {
    formulaId: 'c-energy-consumption-disk-meter', area: 'C', unknown: 'EC',
    formulaText: 'EC = \\frac{60\\, k_h\\, D_{rev}}{1000\\, T_c}',
    unit: 'kWh', round: 2,
    vars: [
      { symbol: 'D_{rev}', ascii: 'Drev', label: 'revolutions of the meter disk during the count', unit: 'rev', min: 100, max: 1200, decimals: 0 },
      { symbol: 'T_c', ascii: 'Tc', label: 'counting period', unit: 'min', min: 5, max: 60, decimals: 0 },
    ],
    // EC = 60 k_h D_rev / 1000 T_c with k_h = 2.5 Wh/rev cast in. The dropped
    // meter factor is a fixed 0.4 of the answer. The omitted 1000 (thousand-
    // fold) and the forgotten period (a T_c-sweeping ratio) are excluded per
    // the batch notes.
    compute: v => (60 * 2.5 * v.Drev) / (1000 * v.Tc),
    context: 'a plant electrician reading the disk meter on a motor circuit',
    verb: 'records',
    unknownPhrase: 'the energy consumed during the count in kilowatt-hours',
    keyConcept: 'The disk meter is a spinning watt-hour integrator: the disk turns at a rate proportional to the power flowing, and the meter factor k_h states how many watt-hours one revolution represents - 2.5 for the meters of this handbook. Reading the meter means timing the disk: count the revolutions over a counting period, and the formula converts that count into energy. It is two unit conversions in one denominator and numerator: the 60 turns the minutes the student timed into the hours the billing unit expects, the 1000 turns watt-hours into kilowatt-hours, and the meter factor turns the revolution count into watt-hours in the first place. The three multipliers read as a chain - revolutions to watt-hours, watt-hours to a timed-average rate, minutes to hours - and each one has its own way to be lost. The counting period is a window, not the running time of the plant, because the disk is slowed by the energy meter only while the load draws, and the number it produces is the energy for that window.',
    mistakes: [
      'Omitting the meter factor and counting revolutions as watt-hours directly, understating the meter by a factor of 2.5',
      'Dropping the 1000 and reporting watt-hours as kilowatt-hours, overstating consumption a thousand-fold',
      'Treating the counting period as hours instead of minutes, understating the rate sixty-fold',
    ],
    distractors: [
      v => (60 * v.Drev) / (1000 * v.Tc),
      v => 0.85 * ((60 * 2.5 * v.Drev) / (1000 * v.Tc)),
      v => 1.15 * ((60 * 2.5 * v.Drev) / (1000 * v.Tc)),
    ],
  },
  {
    formulaId: 'c-wire-size-selection', area: 'C', unknown: 'A',
    formulaText: 'A = \\frac{\\rho\\, N_w\\, L\\, I}{V_{drop}\\, V}',
    unit: 'CM', round: 0,
    vars: [
      { symbol: 'N_w', ascii: 'Nw', label: 'number of wires in the run', unit: '', min: 2, max: 4, decimals: 0 },
      { symbol: 'L', ascii: 'L', label: 'length of the wire run', unit: 'ft', min: 50, max: 300, decimals: 0 },
      { symbol: 'I', ascii: 'I', label: 'current drawn by the load', unit: 'A', min: 5, max: 30, decimals: 0 },
      { symbol: 'V', ascii: 'V', label: 'line voltage', unit: 'V', min: 110, max: 440, decimals: 0 },
    ],
    // A = rho N_w L I / (V_drop V), copper lane rho = 10.8 with the aluminium
    // lane (17) as a structural distractor at 17/10.8 = 1.574, V_drop = 0.02
    // cast in. The number of wires multiplies the length because every wire in
    // the run carries the current against its own resistance.
    compute: v => (10.8 * v.Nw * v.L * v.I) / (0.02 * v.V),
    context: 'an electrician selecting the wire gauge for a motor feeder run',
    verb: 'reports',
    unknownPhrase: 'the required cross-sectional area of the wire in circular mils',
    keyConcept: 'A wire is a conductor with a resistance that depends on its material and its cross-section, and the size selection formula is the answer written upside down: the voltage drop the run is allowed must be the product of the current, the wire resistance, and the number of wires in the circuit, so the cross-sectional area ends up as the wire constants times the current and the length, divided by the fraction of the line voltage the drop is allowed to consume. The resistivity lane is a material decision - copper at 10.8, aluminium at 17 - and the same run sized in aluminium comes out over half again as large in circular mils, which is the honest price of the cheaper metal. The drop fraction, 0.02, is the design allowance: two percent of the line voltage is the accepted limit for a branch circuit, and the denominator multiplies the drop fraction by the line voltage so the whole expression reduces to a plain area. The number of wires is in the product because each wire carries the current and each one drops voltage, so a three-wire run is sized for three conductors, not for the load once. The answer in circular mils is then walked off against the standard gauge table, which is what turns a computed area into a wire a contractor can buy.',
    mistakes: [
      'Sizing the run on the aluminium resistivity when the job calls for copper, oversizing the gauge by 57 percent',
      'Forgetting the drop fraction and dividing by the line voltage alone, which yields an area fifty times too small',
      'Counting a single wire instead of the whole run, undersizing a three-wire circuit by a factor of three',
    ],
    distractors: [
      v => (17 * v.Nw * v.L * v.I) / (0.02 * v.V),
      v => 0.85 * ((10.8 * v.Nw * v.L * v.I) / (0.02 * v.V)),
      v => 1.15 * ((10.8 * v.Nw * v.L * v.I) / (0.02 * v.V)),
    ],
  },
];