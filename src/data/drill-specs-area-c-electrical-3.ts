// Area C drill specs, part 3 of 4: Heat Transfer, Thermodynamics, and the
// psychrometric ratios. Ten specs, taking coverage from 176 to 186 of 240.
//
// Two of the printed formulas in this file are defective, and both are recorded
// as SOURCE NOTEs in src/data/formulas.ts rather than being quietly corrected,
// because the printed text is what the student is examined on.
//
// c-first-law-thermodynamics prints Q + W = dE while defining W as the work
// done BY the system. Those two cannot both stand: if some energy enters as
// heat and some leaves as work, the change stored is the difference, not the
// sum, and the printed form manufactures energy out of nothing. A cylinder
// taking in 1000 J of heat and pushing a piston through 300 J ends with 700 J
// more internal energy, where the printed form says 1300 J. The printed form
// is only right if W is work done ON the system, in which case W carries its
// own sign. This drill uses dE = Q - W, the version consistent with the printed
// variable definitions, and offers Q + W as a distractor precisely because it
// is the printed expression and the error is so easy to make.
//
// c-humidity-ratio prints W = p_v/P_atm. That is a pressure ratio, the mole
// fraction of water vapour, and it is NOT the humidity ratio the psychrometric
// chart and the enthalpy formula actually use. The psychrometric W, in kg of
// water per kg of dry air, is 0.622 p_v/(P_atm - p_v): the 0.622 is the molar
// mass ratio 18.015/28.965, and the denominator is the partial pressure of the
// DRY air rather than the total. The two are not close. At 2 kPa vapour
// pressure the printed form gives 0.01974 and the mass ratio gives 0.01253, so
// the printed form is high by about 58 percent, which is far too much to
// attribute to rounding. The drill drives the printed form, and offers the mass
// version and the version missing only the 0.622 as distractors, because
// noticing that the two disagree is the whole lesson.
//
// Four boxes in this file were rebuilt after scripts/probe-spec.mjs measured
// them, and it is worth recording that all four passed hand analysis first. The
// probe samples the actual box, reports each distractor's true ratio band, and
// reports each PAIR of options' closest approach, which is what actually
// decides whether two choices render as the same string.
//
// c-first-law: the "W alone" distractor is W/(Q-W), and it hits 0.5 exactly,
// because W = (Q-W)/2 is the same statement as Q = 3W, which the box allows.
// The fourth slot therefore cannot be a 0.5 scalar. It cannot be 0.85 or 1.15
// either, since W alone's band runs up to 1.167. The three structural options
// between them cover 0.2 to 3.24, so the remaining slot has to sit below all of
// them, and it is 0.1x - the kJ/J unit slip, which is a real error and lands at
// a tenth of the answer.
//
// c-fouriers-law: writing x = r_o/r_i, the "used the ratio instead of the log"
// option is 2 pi K L dT/x against 2 pi K L dT/ln(x), so its ratio is ln(x)/x.
// It is NOT x/ln(x) times 2 pi, which is how it was first written down here.
// For x in 1.2 to 20 that is 0.1498 to 0.3679, peaking at 1/e = 0.3679 where
// x = e. Dropping the 2 pi is a flat 0.15915, which falls INSIDE that band, and
// the two options close to within 0.165 percent of each other. The 2 pi is
// consequently not offered at all in this spec.
//
// c-saturation-ratio: the moisture deficit W_sat - W_act measured against the
// answer has ratio W_sat(W_sat - W_act)/W_act, and its minimum needs the
// smallest W_sat and simultaneously the largest W_act, since that is the corner
// where the deficit is thinnest while the ratio is widest. The first box put
// W_sat as low as 0.021 and gave 0.0035, under the 1 percent floor. The error
// in the original estimate was dividing the widest deficit by the widest ratio,
// which pairs two extremes that never co-occur. Lifting the W_sat floor to
// 0.028 moves that corner to 0.0156.
//
// c-density-specific-volume: density is m/V and the two ranges are sampled
// independently, so the corner densities are m_min/V_max and m_max/V_min. The
// first box ran 0.5 to 500 kg against 0.001 to 2 m3, which permitted 500 kg in
// one litre - a density of 500000 kg/m3, and a specific volume of 2e-6 m3/kg.
// For every corner to be a substance that exists, m_min must be at least 50
// V_max and m_max at most 2000 V_min, and 50 to 2000 kg/m3 brackets grain,
// water, timber and steel. 200 to 400 kg over 0.2 to 4 m3 gives corner
// densities of exactly 50 and 2000 kg/m3, so no sampled pair is imaginary.
//
// The recurring theme is that when the ANSWER already contains a quantity, a
// distractor built from that same quantity is at one higher power of it than it
// looks. That has now been the cause of every rejected distractor in this
// batch, and it is why the ratio bands here were measured rather than argued.
import type { DrillSpec } from './formula-drills';

export const areaCElectrical3Specs: DrillSpec[] = [
  // ------------------------------------------------------ heat transfer
  {
    formulaId: 'c-temperature-conversions', area: 'C', unknown: 'T_C',
    formulaText: '^\\circ C = \\frac{5}{9}(^\\circ F - 32) \\qquad K = ^\\circ C + 273.15',
    unit: '°C', round: 4,
    vars: [
      { symbol: '^\\circ{F}', ascii: 'degF', label: 'temperature in Fahrenheit', unit: '°F', min: 50, max: 200, decimals: 0 },
    ],
    conversions: [],
    // T_C is 10..93.33 degC from a 50..200 degF box. The Fahrenheit scale was
    // built for three reference points, and the 32 is the freezing point of
    // water, so the conversion is a rescale AND a shift. That is why the two
    // errors worth offering are dropping the 32 and inverting the 5/9 - one
    // forgets the shift, the other forgets which way round the ratio goes.
    // There is no conversion offered on purpose: degF to degC is an affine
    // change, not a scale factor, so it cannot be expressed as one.
    //
    // The symbol is written ^\circ{F} rather than ^\circ F because the
    // walkthrough has to recover the givens from the printed question, and a
    // literal space inside a symbol makes that unparseable. Braces cost
    // nothing and are the correct LaTeX for the unit anyway.
    compute: v => (5 / 9) * (v.degF - 32),
    context: 'a thermometer in a reefer van being checked against a reference probe before a long haul of mangoes out of Davao, the Fahrenheit reading having come off the unit under test',
    verb: 'reads',
    unknownPhrase: 'the temperature in Celsius',
    keyConcept: 'Fahrenheit and Celsius are related by a rescale and a shift together, not by a scale factor alone, which is exactly why 100 degF is not 100/1.8 degC. The 32 comes from the freezing point of water and the 5/9 comes from the interval between the freezing and boiling points being 180 degF against 100 degC. The other two scales in the printed identity are offsets from Celsius rather than rescalings of it: Kelvin adds 273.15 to reach absolute zero, and Rankine is Kelvin multiplied by 5/9, which is what makes it useful in English-unit thermodynamics where the gas constant is quoted as 1545 ft lbf/(lbmol R) rather than 8314 J/(kmol K).',
    mistakes: [
      'Dropping the 32 and treating the Fahrenheit reading as though it were already a Celsius offset',
      'Inverting the 5/9 to 9/5, which multiplies the answer by 3.24',
      'Adding 273.15 when a temperature difference rather than an absolute temperature was wanted',
    ],
    // The 5/9 F version has ratio F/(F-32), which runs 1.1905 to 2.7778 over
    // this box. The inverted-factor version is a flat 3.24. Those two never
    // coincide, since 5F = 9(F-32) reduces to F = F + 32. The tightest pair is
    // the shifted option against the 1.15 scalar, at 3.4 percent, which is why
    // the box stops at 200 degF: at 250 degF the shifted ratio falls to 1.147
    // and lands 0.26 percent from 1.15.
    distractors: [
      v => (5 / 9) * v.degF,
      v => (9 / 5) * (v.degF - 32),
      v => 0.85 * ((5 / 9) * (v.degF - 32)),
      v => 1.15 * ((5 / 9) * (v.degF - 32)),
    ],
  },
  {
    formulaId: 'c-stefan-boltzmann', area: 'C', unknown: 'Q_R',
    formulaText: 'Q_R = \\varepsilon \\sigma A T^4',
    unit: 'W', round: 4,
    vars: [
      { symbol: '\\varepsilon', ascii: 'eps', label: 'emissivity of the surface', unit: '', min: 0.2, max: 0.95, decimals: 2 },
      { symbol: 'A', ascii: 'A', label: 'radiating area', unit: 'm²', min: 0.05, max: 5, decimals: 2 },
      { symbol: 'T', ascii: 'T', label: 'absolute surface temperature', unit: 'K', min: 600, max: 900, decimals: 0 },
    ],
    conversions: [
      { ascii: 'A', unit: 'cm²', factor: 10000, fromUnit: 'm²' },
      { ascii: 'A', unit: 'ft²', factor: 10.7639, fromUnit: 'm²' },
      { ascii: 'A', unit: 'in²', factor: 1550.003, fromUnit: 'm²' },
    ],
    // Q_R is 140.87..159255.9 W. The spread is enormous and that is the
    // physics, not sloppiness: the fourth power on T means halving the
    // absolute temperature divides the radiation by sixteen.
    //
    // The box is restricted to 600..900 K, that is 327 to 627 degC, and the
    // restriction exists to make the Kelvin-versus-Celsius error usable. A
    // student who forgets that T is absolute and plugs the Celsius reading
    // instead is low by ((T+273.15)/T)^4, and over a 300 K to 900 K box that
    // factor runs from 15180 down to 4.26 - hopelessly out of band. Held to
    // 600..900 K the same error is 2.887 to 4.485, comfortably plausible, so
    // the mistake can be offered instead of merely mentioned.
    compute: v => v.eps * 5.669e-8 * v.A * Math.pow(v.T, 4),
    context: 'a radiant heater panel over a drying bed being rated at its steady-state surface temperature, the panel having been coated to the stated emissivity before the trial',
    verb: 'radiates, at',
    unknownPhrase: 'the radiative heat transfer',
    keyConcept: 'Radiation scales with the fourth power of the ABSOLUTE temperature, which is why the same surface goes from tolerable to dangerous over a narrow range of readings and why the fourth power makes the formula so unforgiving of a temperature given in the wrong scale. Emissivity enters linearly and is the single largest modelling uncertainty: it runs from about 0.05 for polished metal through 0.9 for brick and 0.95 for rough unglazed clay, so two surfaces at the same temperature can differ by a factor of twenty. The constant 5.669e-8 W per square metre per kelvin to the fourth is fixed by the Stefan-Boltzmann law and is not a material property. In this area the law does real work in greenhouse and drying-bed design, where radiation is one of three parallel paths for heat to leave a surface and the one most often left out of a hand calculation.',
    mistakes: [
      'Using the Celsius reading directly in place of the kelvin, which understates the result by the fourth power of the ratio',
      'Squaring or cubing the temperature instead of raising it to the fourth power',
      'Assuming every surface radiates like a black body and dropping the emissivity',
    ],
    // The Kelvin error is ((T+273.15)/T)^4 = 2.887..4.485 here. "Dropped the
    // emissivity" is NOT offered: 1/eps for any realistic emissivity range is
    // 1.05 to 5, and every such band contains 1.15, so it would collide with
    // the scalar. The 0.5 slot is the projected-area error instead.
    distractors: [
      v => v.eps * 5.669e-8 * v.A * Math.pow(v.T + 273.15, 4),
      v => 0.5 * (v.eps * 5.669e-8 * v.A * Math.pow(v.T, 4)),
      v => 0.85 * (v.eps * 5.669e-8 * v.A * Math.pow(v.T, 4)),
      v => 1.15 * (v.eps * 5.669e-8 * v.A * Math.pow(v.T, 4)),
    ],
  },
  {
    formulaId: 'c-newtons-law-cooling', area: 'C', unknown: 'Q_h',
    formulaText: 'Q_h = h_c A (T_s - T_f)',
    unit: 'W', round: 4,
    vars: [
      { symbol: 'h_c', ascii: 'hc', label: 'convective heat transfer coefficient', unit: 'W/m²·K', min: 5, max: 60, decimals: 1 },
      { symbol: 'A', ascii: 'A', label: 'surface area', unit: 'm²', min: 0.05, max: 10, decimals: 2 },
      { symbol: 'T_s', ascii: 'Ts', label: 'surface temperature', unit: '°C', min: 50, max: 110, decimals: 0 },
      { symbol: 'T_f', ascii: 'Tf', label: 'bulk fluid temperature', unit: '°C', min: 15, max: 40, decimals: 0 },
    ],
    conversions: [
      { ascii: 'A', unit: 'cm²', factor: 10000, fromUnit: 'm²' },
      { ascii: 'A', unit: 'ft²', factor: 10.7639, fromUnit: 'm²' },
      { ascii: 'A', unit: 'in²', factor: 1550.003, fromUnit: 'm²' },
    ],
    // Q_h is 13.91..50604.3 W. The temperature ranges are set so T_s exceeds
    // T_f in every sample, 50 against 40 at the closest, and so the
    // Kelvin-versus-Celsius error is usable: adding 273.15 to one side only
    // gives (dT+273.15)/dT, and with dT running 10..95 K that is 3.875 to
    // 28.3, in band. Across a wider dT range the same error would run out of
    // band at the small end and could not be offered.
    //
    // Converting BOTH temperatures to kelvin is not offered either, because it
    // cancels: (T_s+273.15) - (T_f+273.15) is T_s - T_f, so that option would
    // equal the answer exactly.
    compute: v => v.hc * v.A * (v.Ts - v.Tf),
    context: 'a finned evaporator in a milk chiller being sized, the fin surface sitting above the air drawn across it by the fan',
    verb: 'transfers, at',
    unknownPhrase: 'the convective heat transfer rate',
    keyConcept: 'Newtons law of cooling is a lumped statement that the rate of heat exchange between a surface and the fluid touching it is proportional to the area and to the DIFFERENCE between the two temperatures, and the proportionality constant h_c is the part that has to be looked up rather than calculated. That constant is not a property of either body alone: it depends on the fluid, on whether the flow is forced or natural, on the geometry, and on the temperature itself, which is why values range from about 5 for still air to several hundred for a high-velocity air stream. The formula is a boundary-layer result, so it assumes the surface temperature is uniform and that conduction through the material is not the limiting step, and it is used to size radiators, condenser tubes, evaporation plates and drying surfaces.',
    mistakes: [
      'Adding 273.15 to only one of the two temperatures instead of treating the difference as a difference',
      'Taking the fluid temperature to be above the surface, which reverses the sign of the driving force',
      'Quoting an h_c for still air on a surface that a fan is actually forcing air across',
    ],
    // The one-sided Kelvin error is (dT+273.15)/dT = 3.875..28.3, clear of the
    // 0.5/0.85/1.15 scalars by a wide margin. The squared-difference option has
    // ratio dT itself, which runs 10..95 and would swallow every scalar, so it
    // is not offered; the 0.5 slot is the projected-area error.
    distractors: [
      v => v.hc * v.A * (v.Ts + 273.15 - v.Tf),
      v => 0.5 * (v.hc * v.A * (v.Ts - v.Tf)),
      v => 0.85 * (v.hc * v.A * (v.Ts - v.Tf)),
      v => 1.15 * (v.hc * v.A * (v.Ts - v.Tf)),
    ],
  },
  {
    formulaId: 'c-fouriers-law', area: 'C', unknown: 'Q_k',
    formulaText: 'Q_k = \\frac{2\\pi K L (T_i - T_o)}{\\ln(r_o/r_i)}',
    unit: 'W', round: 4,
    vars: [
      { symbol: 'K', ascii: 'K', label: 'thermal conductivity of the wall', unit: 'W/m·K', min: 25, max: 200, decimals: 1 },
      { symbol: 'L', ascii: 'L', label: 'length of the pipe', unit: 'm', min: 0.5, max: 5, decimals: 2 },
      { symbol: 'T_i', ascii: 'Ti', label: 'internal surface temperature', unit: '°C', min: 60, max: 200, decimals: 0 },
      { symbol: 'T_o', ascii: 'To', label: 'external surface temperature', unit: '°C', min: 10, max: 50, decimals: 0 },
      { symbol: 'r_i', ascii: 'ri', label: 'inner radius', unit: 'mm', min: 10, max: 50, decimals: 1 },
      { symbol: 'r_o', ascii: 'ro', label: 'outer radius', unit: 'mm', min: 60, max: 200, decimals: 1 },
    ],
    conversions: [
      { ascii: 'L', unit: 'cm', factor: 100, fromUnit: 'm' },
      { ascii: 'L', unit: 'ft', factor: 3.28084, fromUnit: 'm' },
      { ascii: 'ri', unit: 'cm', factor: 10, fromUnit: 'mm' },
      { ascii: 'ri', unit: 'in', factor: 0.0393701, fromUnit: 'mm' },
      { ascii: 'ro', unit: 'cm', factor: 10, fromUnit: 'mm' },
      { ascii: 'ro', unit: 'in', factor: 0.0393701, fromUnit: 'mm' },
    ],
    // Q_k is 1822.9..1810357 W. The radii are 10..50 mm inside and 60..200 mm
    // outside, so r_o/r_i runs 1.2 to 20 and the log is always positive. The
    // inner and outer ranges do not overlap at all, which is what a sleeve
    // actually looks like, and it means the swapped-radii error is negative
    // and so cannot be offered.
    //
    // This is the cylindrical form rather than the flat one because the
    // logarithm is the whole difficulty: heat does not cross a cylinder at a
    // uniform rate, and the log is the correction for the circumference
    // growing with radius. The flat form KA dT/L applies to a slab and
    // understates a pipe by the factor ln(r_o/r_i), which is why the two are
    // not interchangeable on a line.
    compute: v => (2 * Math.PI * v.K * v.L * (v.Ti - v.To)) / Math.log(v.ro / v.ri),
    context: 'a steam line being checked for heat loss through an insulation sleeve, the pipe run long enough that the radial gradient is what governs',
    verb: 'conducts, at',
    unknownPhrase: 'the rate of heat conduction',
    keyConcept: 'Fouriers law says that heat flows down a temperature gradient in proportion to the conductivity, the area, and the gradient itself, and the whole difference between the two printed forms is the geometry factor. For a homogeneous slab the area is constant and the factor is simply dT/L, but for a cylinder the area grows with radius, so the flux is highest at the inside and the integrated result acquires a 1/ln(r_o/r_i) correction. The effect is small for a thin wall and large for a thick one, which is why a heavily insulated pipe approaches the flat-wall answer and a bare one does not. K is the thermal conductivity and spans a very wide range in practice: about 0.03 to 0.05 for insulation, 0.7 for brick, 50 for mild steel and 400 for copper, so that a wall of the same thickness can differ by four orders of magnitude.',
    mistakes: [
      'Using the flat-wall form KA dT/L on a pipe, which is low by the factor ln(r_o/r_i)',
      'Substituting the radius ratio directly for its logarithm',
      'Swapping the inner and outer radii, which makes the logarithm negative',
    ],
    // The interesting option is the radius ratio in place of the log. Its
    // ratio to the answer is ln(x)/x for x = r_o/r_i, NOT x over ln(x) times
    // 2 pi, which is how it was first written here. Over x in 1.2 to 20 that
    // is 0.1498 to 0.3679, peaking at 1/e = 0.3679 where x = e.
    //
    // Dropping the 2 pi is a flat 0.15915, which lands inside that band, and
    // the two options close to within 0.165 percent of each other - they would
    // render as the same choice. So the 2 pi error is not offered here, and
    // the remaining slots are scalars, the 0.5 sitting 36 percent clear of the
    // top of the log-error band.
    distractors: [
      v => (2 * Math.PI * v.K * v.L * (v.Ti - v.To)) / (v.ro / v.ri),
      v => 0.5 * ((2 * Math.PI * v.K * v.L * (v.Ti - v.To)) / Math.log(v.ro / v.ri)),
      v => 0.85 * ((2 * Math.PI * v.K * v.L * (v.Ti - v.To)) / Math.log(v.ro / v.ri)),
      v => 1.15 * ((2 * Math.PI * v.K * v.L * (v.Ti - v.To)) / Math.log(v.ro / v.ri)),
    ],
  },
  {
    formulaId: 'c-first-law-thermodynamics', area: 'C', unknown: '\\Delta E',
    formulaText: '\\Delta E = Q - W',
    unit: 'J', round: 4,
    vars: [
      { symbol: 'Q', ascii: 'Q', label: 'heat added to the system', unit: 'J', min: 1300, max: 3000, decimals: 0 },
      { symbol: 'W', ascii: 'W', label: 'work done by the system', unit: 'J', min: 500, max: 700, decimals: 0 },
    ],
    conversions: [
      { ascii: 'Q', unit: 'kJ', factor: 0.001, fromUnit: 'J' },
      { ascii: 'W', unit: 'kJ', factor: 0.001, fromUnit: 'J' },
    ],
    // dE is 620..2494 J, always positive because Q exceeds W in every sample.
    // The W range is narrow on purpose: W/Q runs 0.167 to 0.538, and it is that
    // ratio which decides the distractor bands below. Letting W run to 900 J
    // against a Q floor of 1300 pushes W/Q to 0.69, where the "W alone" option
    // reaches 2.2 and crosses every scalar.
    //
    // The printed formula is Q + W = dE with W defined as work done BY the
    // system. Those cannot both be right; see the SOURCE NOTE on this formula
    // in src/data/formulas.ts. The difference is used here, and the printed sum
    // is offered as a distractor because that is precisely the mistake the
    // printed text invites.
    compute: v => v.Q - v.W,
    context: 'a hand pump cylinder being checked for an energy balance, the water inside having taken in energy while the piston pushed against the load',
    verb: 'stores, as a change of',
    unknownPhrase: 'the change in internal energy',
    keyConcept: 'The first law is a statement about bookkeeping: energy entering a system as heat and energy leaving it as work both have to be accounted for, and the difference is what stays behind as internal energy. It is why a system can be heated and still get colder, and why a system can be rubbed hard and get hotter with no heat supplied at all. The sign convention is the only real difficulty in it, and there are two of them in common use - work done BY the system is positive and is subtracted, work done ON the system is positive and is added - so the unambiguous way to state it is to keep the words attached to the letters. W is a symbol used for work in one convention and for power in another, which is why power is written with a lowercase w and rate of heat flow with a dot over the Q.',
    mistakes: [
      'Adding the work to the heat because that is what the printed formula shows, which creates energy',
      'Forgetting that the work term reduces the energy retained when the system does work on its surroundings',
      'Reading W as work done on the system and then treating it as work done by the system',
    ],
    // W alone is W/(Q-W), and with W/Q in 0.167..0.538 that runs 0.200 to
    // 1.167. It contains 0.5 EXACTLY, because W = (Q-W)/2 is the same statement
    // as Q = 3W and the box permits that. It also reaches 1.167, only 1.4
    // percent past the 1.15 scalar, which is too close to trust.
    //
    // So the fourth slot cannot be 0.5, 0.85 or 1.15. The three structural
    // options between them cover 0.200 to 3.242, so the remaining slot has to
    // sit below all of them, and it is 0.1x: the kJ/J unit slip, a real error
    // that lands at a tenth of the answer.
    distractors: [
      v => v.Q + v.W,
      v => v.Q,
      v => v.W,
      v => 0.1 * (v.Q - v.W),
    ],
  },
  // ------------------------------------------------------ psychrometrics
  {
    formulaId: 'c-heat-utilization-factor', area: 'C', unknown: 'HUF',
    formulaText: 'HUF = \\frac{T_3 - T_2}{T_1 - T_2}',
    unit: 'ratio', round: 4,
    vars: [
      { symbol: 'T_1', ascii: 'T1', label: 'dry bulb temperature of the air entering the heater', unit: '°C', min: 25, max: 35, decimals: 0 },
      { symbol: 'T_3', ascii: 'T3', label: 'dry bulb temperature of the exhaust air', unit: '°C', min: 45, max: 55, decimals: 0 },
      { symbol: 'T_2', ascii: 'T2', label: 'dry bulb temperature of the air leaving the heater', unit: '°C', min: 70, max: 85, decimals: 0 },
    ],
    conversions: [],
    // HUF is 0.3333..0.8. The three temperature bands do not overlap and are
    // ordered T_1 below T_3 below T_2, which is the physical arrangement: air
    // enters the heater at T_1, is pushed to T_2, and leaves the dryer
    // somewhere between the two at T_3. Both differences in the printed
    // expression are then negative and the ratio comes out positive.
    //
    // The inverted option is the fraction of the available heat that was NOT
    // used, so 1/HUF, which over this box is 1.5625 to 9.0 and clears all
    // three scalars. The complementary fraction (T_3-T_1)/(T_2-T_1) is not
    // offered: it runs 0.25 to 2.0 and swallows both 0.85 and 1.15.
    compute: v => (v.T3 - v.T2) / (v.T1 - v.T2),
    context: 'a grain dryer whose exhaust air is being sampled, the air leaving the heater having been found hotter than the air arriving at the inlet',
    verb: 'reaches',
    unknownPhrase: 'the heat utilization factor',
    keyConcept: 'The heat utilization factor is the fraction of the heat put into the air that the material actually took, and it is the honest measure of how well a dryer is matched to its job rather than how much fuel it burns. A value near 1 means the air leaves the drying zone almost as cold as it entered, which is what happens when the drying capacity is generous and the air is leaving wet. A low value means the air is leaving hot, so the heater is supplying heat the material never had any use for, and the obvious remedies are to slow the airflow or to raise the incoming air humidity. It is the standard diagnostic in agricultural drying, where the incoming air can be humidified cheaply with a greenhouse or a solar collector and the same heater then does more useful work on the same fuel.',
    mistakes: [
      'Inverting the ratio and reporting the fraction of the heat that went unused',
      'Taking the temperature difference across the heater when the printed denominator is the difference back to the inlet',
      'Reading the factor as a percentage, which turns a value below 1 into an impossible number above 100',
    ],
    distractors: [
      v => (v.T2 - v.T1) / (v.T2 - v.T3),
      v => 0.5 * ((v.T3 - v.T2) / (v.T1 - v.T2)),
      v => 0.85 * ((v.T3 - v.T2) / (v.T1 - v.T2)),
      v => 1.15 * ((v.T3 - v.T2) / (v.T1 - v.T2)),
    ],
  },
  {
    formulaId: 'c-humidity-ratio', area: 'C', unknown: 'W',
    formulaText: 'W = \\frac{p_v}{P_{atm}}',
    unit: 'ratio', round: 5,
    vars: [
      { symbol: 'p_v', ascii: 'pv', label: 'water-vapour partial pressure', unit: 'kPa', min: 1.5, max: 4, decimals: 2 },
      { symbol: 'P_{atm}', ascii: 'Patm', label: 'atmospheric pressure', unit: 'kPa', min: 95, max: 105, decimals: 1 },
    ],
    conversions: [
      { ascii: 'pv', unit: 'Pa', factor: 1000, fromUnit: 'kPa' },
      { ascii: 'Patm', unit: 'Pa', factor: 1000, fromUnit: 'kPa' },
    ],
    // W is 0.014450..0.042. The vapour pressure floor is 1.5 kPa rather than
    // 0.5 so that the two dry-air-denominator options stay clear of the
    // answer: p_v/(P_atm - p_v) against p_v/P_atm is P_atm/(P_atm - p_v),
    // which is 1.044 only at the top of the vapour range and collapses to
    // 1.0048, under 0.5 percent, at the bottom. At a 1.5 kPa floor the same
    // option is 1.0147 at worst, which is clear of 1.0 but only just, and that
    // is why 1.15 rather than a 1.02 scalar fills the fourth slot.
    compute: v => v.pv / v.Patm,
    context: 'an air-conditioned room being diagnosed for mould, the vapour pressure having been read off a chilled dew-point sensor on the return air',
    verb: 'works out to',
    unknownPhrase: 'the humidity ratio',
    keyConcept: 'Care is needed with the name, because the printed expression gives a PRESSURE ratio and the quantity that the rest of the psychrometry uses is a MASS ratio, and they are not the same number. Dividing the vapour pressure by the total gives the mole fraction of water vapour. The psychrometric humidity ratio, in kilograms of water per kilogram of dry air, is 0.622 p_v/(P_atm - p_v), where 0.622 is the molar mass ratio 18.015/28.965 and the denominator is the partial pressure of the dry air alone. The two are related exactly by 0.622 x over (1 - x), so neither can be substituted for the other. The distinction is worth the trouble because the mass ratio is what appears in the enthalpy equation, and using the printed form inflates the enthalpy contribution of the moisture by more than half.',
    mistakes: [
      'Substituting the printed pressure ratio for the mass ratio in an enthalpy calculation',
      'Using the total pressure where the dry-air partial pressure belongs in the denominator',
      'Leaving out the 0.622 molar mass ratio',
    ],
    // Both dry-air-denominator options are deliberate, and they are the point
    // of the spec. 0.622 p_v/(P_atm - p_v) against p_v/P_atm is 0.622 P_atm
    // divided by (P_atm - p_v), which is 0.631 to 0.649 here. Dropping only
    // the 0.622 gives P_atm/(P_atm - p_v) = 1.0147 to 1.0438. The tightest pair
    // is that one against the 1.15 scalar, at 9.2 percent.
    distractors: [
      v => (0.622 * v.pv) / (v.Patm - v.pv),
      v => v.pv / (v.Patm - v.pv),
      v => 0.85 * (v.pv / v.Patm),
      v => 1.15 * (v.pv / v.Patm),
    ],
  },
  {
    formulaId: 'c-saturation-ratio', area: 'C', unknown: 'SR',
    formulaText: '\\text{Saturation Ratio} = \\frac{W_{act}}{W_{sat}}',
    unit: 'ratio', round: 5,
    vars: [
      { symbol: 'W_{act}', ascii: 'Wact', label: 'actual humidity ratio of the air', unit: 'kg/kg', min: 0.006, max: 0.018, decimals: 4 },
      { symbol: 'W_{sat}', ascii: 'Wsat', label: 'saturated humidity ratio at the same temperature', unit: 'kg/kg', min: 0.028, max: 0.05, decimals: 3 },
    ],
    conversions: [
      { ascii: 'Wact', unit: 'g/kg', factor: 1000, fromUnit: 'kg/kg' },
      { ascii: 'Wact', unit: 'mg/kg', factor: 1000000, fromUnit: 'kg/kg' },
      { ascii: 'Wsat', unit: 'g/kg', factor: 1000, fromUnit: 'kg/kg' },
    ],
    // SR is 0.122..0.6429. The two ranges are kept strictly ordered, 0.018
    // against a 0.028 floor, so the actual ratio can never exceed the
    // saturated one and the answer is always a proper fraction.
    //
    // The saturated floor is 0.028 and not 0.021 because of where the
    // moisture-deficit option bottoms out. W_sat - W_act against the answer
    // W_act/W_sat is W_sat(W_sat - W_act)/W_act, and its minimum is at the
    // smallest W_sat and simultaneously the largest W_act, since that is the
    // corner where the deficit is thinnest while the ratio is widest. At a
    // 0.021 floor that corner gives 0.0035, below the 1 percent floor. Note
    // the trap in the original estimate: dividing the widest deficit by the
    // widest ratio, which pairs two extremes that never co-occur.
    compute: v => v.Wact / v.Wsat,
    context: 'a storage room for bagged rice being checked for spoilage risk, the equilibrium moisture content having been read from a published sorption table',
    verb: 'reaches',
    unknownPhrase: 'the saturation ratio',
    keyConcept: 'The saturation ratio says how close the air is to being saturated, and it is the bridge between the two ways humidity is quoted. Relative humidity is measured against the air temperature, so it changes if the air is warmed without any moisture being added or removed; the saturation ratio is measured against the moisture content, so it does not move at all when only the temperature changes. For a given temperature the two are tied together by the saturated humidity ratio at that temperature, and 1.0 means fog, condensation or mould risk. In storage and drying the useful reading is that the ratio must stay far enough below 1 for the vapour pressure to remain below the dew point of the grain, and a value that is fixed at 0.6 will become 0.8 overnight as the stored grain and the air approach the same temperature.',
    mistakes: [
      'Inverting the ratio and reporting the reciprocal, which exceeds 1 for any incompletely saturated air',
      'Reporting the moisture deficit W_sat - W_act instead of the ratio, which is a different quantity in different units',
      'Quoting the saturation at the air temperature when the grain is at a different one',
    ],
    // The inverted option is (W_sat/W_act)^2, because squaring is what happens
    // when the ratio of the two is compared with the answer, which is itself a
    // ratio. Over SR = 0.122 to 0.643 that is 2.42 to 69.4, in band. The
    // deficit option runs 0.0156 to 0.367. The two scalars sit clear of both.
    distractors: [
      v => v.Wsat / v.Wact,
      v => v.Wsat - v.Wact,
      v => 0.85 * (v.Wact / v.Wsat),
      v => 1.15 * (v.Wact / v.Wsat),
    ],
  },
  {
    formulaId: 'c-density-specific-volume', area: 'C', unknown: 'V_{spec}',
    formulaText: 'V_{spec} = \\frac{Volume}{mass} = \\frac{1}{\\rho}',
    unit: 'm³/kg', round: 6,
    vars: [
      { symbol: 'Volume', ascii: 'V', label: 'volume occupied', unit: 'm³', min: 0.2, max: 4, decimals: 1 },
      { symbol: 'mass', ascii: 'm', label: 'mass of the material', unit: 'kg', min: 200, max: 400, decimals: 0 },
    ],
    conversions: [
      { ascii: 'V', unit: 'L', factor: 1000, fromUnit: 'm³' },
      { ascii: 'V', unit: 'cm³', factor: 1000000, fromUnit: 'm³' },
      { ascii: 'V', unit: 'ft³', factor: 35.3147, fromUnit: 'm³' },
      { ascii: 'm', unit: 'g', factor: 0.001, fromUnit: 'kg' },
      { ascii: 'm', unit: 't', factor: 1000, fromUnit: 'kg' },
    ],
    // V_spec is 0.000501..0.019608 m3/kg, a 39x spread.
    //
    // The box is tight on purpose, and that is the whole design of it. The
    // mass and volume ranges are sampled INDEPENDENTLY, so the densities
    // actually seen are m_min/V_max and m_max/V_min at the corners and
    // everything between. A first attempt ran 0.5 to 500 kg against 0.001 to
    // 2 m3, which permitted 500 kg inside a litre: a density of 500000 kg/m3
    // and a specific volume of 2e-6 m3/kg, which is not a substance.
    //
    // For every corner to be something that exists, m_min must be at least
    // 50 V_max and m_max at most 2000 V_min, and 50 to 2000 kg/m3 is the span
    // from grain and water through timber to steel. 200 to 400 kg over 0.2 to
    // 4 m3 puts the corner densities at exactly 50 and 2000 kg/m3.
    compute: v => v.V / v.m,
    context: 'a batch of rice being weighed out for drying, the operator having measured the paddy in a calibrated bin on the weighbridge',
    verb: 'works out to',
    unknownPhrase: 'the specific volume',
    keyConcept: 'Specific volume and density are reciprocals of one another, and stating the relation both ways is the clearest way to see that neither can be used where the other belongs. Specific volume is volume per unit MASS, in cubic metres per kilogram or cubic feet per pound, and it is the natural unit for volume flow, for the volume a tank holds per unit weight, and for psychrometrics. Density is mass per unit volume and is the natural unit for a load, for a mixture, and for the weight of a given volume of grain. The reciprocation is exact, so the mass-specific and volume-specific gas constants in steam and air are reciprocals of each other, 0.287 and 3.483 kJ per kg K. The practical trap is the prefix: 0.5 kg/m3 and 500 kg/m3 are both densities and differ by a thousand, and on grain that factor is the difference between a warehouse and a silo.',
    mistakes: [
      'Computing the density m/V when the specific volume was asked for, which is not a scalar error but its reciprocal',
      'Treating the reciprocal relation as an approximate one and rounding between them',
      'Reading the specific gravity, which is a density relative to water, as though it were the specific volume',
    ],
    // The inverted form m/V is NOT offered. Its ratio to the answer is
    // (m/V)^2, and since V_spec spans 39x the square spans 1521x, from 6.6e-7
    // to 3.9e6 of the answer - hopelessly out of band in both directions.
    // Every slot is therefore a fixed multiple, and the physically meaningful
    // ones are the 0.5 and 2 readings.
    distractors: [
      v => v.V / (2 * v.m),
      v => 2 * (v.V / v.m),
      v => 0.85 * (v.V / v.m),
      v => 1.15 * (v.V / v.m),
    ],
  },
  {
    formulaId: 'c-stress', area: 'C', unknown: '\\sigma',
    formulaText: '\\sigma = \\frac{P}{A}',
    unit: 'MPa', round: 4,
    vars: [
      { symbol: 'P', ascii: 'P', label: 'load carried', unit: 'N', min: 2000, max: 200000, decimals: 0 },
      { symbol: 'A', ascii: 'A', label: 'area resisting the load', unit: 'mm²', min: 100, max: 5000, decimals: 0 },
    ],
    conversions: [
      { ascii: 'P', unit: 'kN', factor: 0.001, fromUnit: 'N' },
      { ascii: 'P', unit: 'MN', factor: 1000000, fromUnit: 'N' },
      { ascii: 'A', unit: 'cm²', factor: 100, fromUnit: 'mm²' },
      { ascii: 'A', unit: 'in²', factor: 645.16, fromUnit: 'mm²' },
    ],
    // sigma is 0.5405..1805.35 MPa. Load in newtons over area in square
    // millimetres gives newtons per square millimetre, which IS the megapascal,
    // so the unit falls out of the two chosen bases with no conversion.
    //
    // The area range of 100 to 5000 mm2 spans a 10 mm bar through a 72 mm
    // one, and it is also what makes the perimeter error usable. Treating a
    // square section as if its perimeter were the resisting area means
    // dividing by 4 side instead of side squared, and the ratio of one to the
    // other is side/4, which is 2.5 to 17.7 over this box.
    compute: v => v.P / v.A,
    context: 'a concrete pedestal under a water tank being checked before the tank is filled, the load having been estimated from the tank together with its contents',
    verb: 'carries, a stress of',
    unknownPhrase: 'the normal stress',
    keyConcept: 'Normal stress is the load shared out over the area that resists it, and the whole subject of stress in this area follows from the fact that the SAME force spread over less area gives more stress. The ratio P over A is the general form, and the useful design statement is that stress scales with the square of a dimension: doubling the width of a member divides its bending stress by four, while doubling its area only halves the direct stress. That is why section shapes are chosen for a second moment of area rather than for area alone. The area that belongs in the denominator is the one perpendicular to the load, which is where the perimeter error comes from, and for a hollow section it is the annular area rather than the bounding rectangle, a difference that becomes important as the wall thickness falls.',
    mistakes: [
      'Using the perimeter of the section where the cross-sectional area belongs, giving a ratio that is a quarter of the true value',
      'Treating the strength of a member as a fixed number rather than a stress that the load area sets',
      'Reading stress in MPa from a load in kN and an area in cm2 without converting both',
    ],
    // The perimeter option is P/(4 side) against P/side^2, so its ratio is
    // side/4 = sqrt(A)/4, which is 2.5 to 17.68 over this box - clear of all
    // three scalars by a wide margin. The 0.5 slot is the halved-area error.
    distractors: [
      v => v.P / (4 * Math.sqrt(v.A)),
      v => v.P / (2 * v.A),
      v => 0.85 * (v.P / v.A),
      v => 1.15 * (v.P / v.A),
    ],
  },
];
