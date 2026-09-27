// Area A drill specs, part 2 of 4: Wind Energy, Water Power, Solar Power and
// Multi-Bladed Wind Pumps.
//
// Every `compute` here implements the handbook expression in src/data/formulas.ts
// and has a hand-verified case in scripts/data/golden-cases.json. Philippine
// context throughout (wind pumps on the rice-belt windmill sites, small hydro
// mini-grid, solar water pumps, poultry and dairy farms).
//
// Note on `verb`: the renderer prints "<context> <verb> <all the givens>", so a
// verb must not restate a given.
//
// Dimensional bases, pinned so the walkthroughs actually multiply out:
//   a-wind-power-general     P = 1/2 rho A v^3 with rho = 1.25 kg/m3 -> 0.625 A v^3 W
//   a-wind-power-mechanical  0.245 = 1/2 x 1.225 x 0.4 (a 40%-efficient mill)
//   a-wind-power-electrical  0.10 ~ 0.245 x 0.4, i.e. ~16% of the wind power
//   a-windpump-hydraulic     9.8 = rho*g/1000 with Q in l/s, so 9.8 Q H is watts
//   a-windpump-power-output  0.1 A V^3, the same basis as the electrical wind entry
//   a-water-power-si         Q(m3/s) H(m) 9.81 / eta is kW (9.81e6 W, then /1000)
//   a-water-power-english    8.8 = 3960/448.83, i.e. the gpm constant restated for
//                            Q in ft3/s
//   a-solar-power-output     1000 W/m2 of irradiance x m2 x efficiency
//
// Two entries are stated differently from the printed handbook, each noted below:
//   a-water-power-general        - printed as the bare proportionality P = Q x H,
//                                  which is only dimensionally true with rho*g
//                                  folded in; this one solves the same relation
//                                  for the head instead, so it is not a duplicate
//                                  of a-water-power-si.
//   a-windpump-solar-insolation  - printed with the result in kW, but power x hours
//                                  is energy, so the answer is reported in kWh/day.
import type { DrillSpec } from './formula-drills';

export const areaAEnergySpecs: DrillSpec[] = [
  // -------------------------------------------------------------------------
  // Wind Energy
  // -------------------------------------------------------------------------
  {
    formulaId: 'a-wind-power-general', area: 'A', unknown: 'P',
    formulaText: 'P (W) = ½ ρ A v³,  with ρ = 1.25 kg/m³',
    unit: 'W', round: 0,
    vars: [
      { symbol: 'A', ascii: 'A', label: 'rotor swept area', unit: 'm²', min: 8, max: 40, decimals: 1 },
      { symbol: 'v', ascii: 'v', label: 'wind speed', unit: 'm/s', min: 6, max: 12, decimals: 1 },
    ],
    conversions: [
      { ascii: 'A', unit: 'ft²', factor: 10.7639, fromUnit: 'm²' },
      { ascii: 'v', unit: 'mph', factor: 2.23694, fromUnit: 'm/s' },
    ],
    compute: v => 0.5 * 1.25 * v.A * Math.pow(v.v, 3),
    context: 'the wind generator installed beside a rice mill in Ilocos Norte',
    verb: 'has',
    unknownPhrase: 'the wind power passing through the rotor',
    keyConcept: "The power in the wind is P = ½ρAv³. The cube on the wind speed is the whole story: doubling the wind gives eight times the power, which is why a windy day is worth far more than a calm one of twice the duration. ρ = 1.25 kg/m³ is the handbook's air density.",
    mistakes: ['Forgetting the ½', 'Forgetting to multiply by the air density', 'Using v² instead of v³'],
    distractors: [
      v => 0.5 * v.A * Math.pow(v.v, 3),
      v => 1.25 * v.A * Math.pow(v.v, 3),
      v => 1.25 * v.A * Math.pow(v.v, 2),
    ],
  },
  {
    formulaId: 'a-wind-power-mechanical', area: 'A', unknown: 'P_avail',
    formulaText: 'P_avail (W) = 0.245 A v³',
    unit: 'W', round: 0,
    vars: [
      { symbol: 'A', ascii: 'A', label: 'rotor swept area', unit: 'm²', min: 20, max: 100, decimals: 0 },
      { symbol: 'v', ascii: 'v', label: 'wind speed', unit: 'm/s', min: 5, max: 12, decimals: 1 },
    ],
    conversions: [
      { ascii: 'A', unit: 'ft²', factor: 10.7639, fromUnit: 'm²' },
      { ascii: 'v', unit: 'mph', factor: 2.23694, fromUnit: 'm/s' },
    ],
    compute: v => 0.245 * v.A * Math.pow(v.v, 3),
    context: 'the windmill pumping water into the rice paddies of Pampanga',
    verb: 'has',
    unknownPhrase: 'the mechanical power available at the hub',
    keyConcept: 'The 0.245 is the wind power already discounted for the mill: ½ × 1.225 kg/m³ × 0.4, where 0.4 is the share a practical windmill can actually take out of the air. So the number in front of A v³ is a capacity, not a theoretical ceiling.',
    mistakes: ['Using the full ½ρAv³ wind power as if the mill could capture all of it', 'Dropping the 0.4 mechanical share', 'Using v² instead of v³'],
    distractors: [
      v => 0.6125 * v.A * Math.pow(v.v, 3),
      v => 0.245 * v.A * Math.pow(v.v, 3) * 2,
      v => 0.245 * v.A * Math.pow(v.v, 3) / 2,
    ],
  },
  {
    formulaId: 'a-wind-power-electrical', area: 'A', unknown: 'P_avail',
    formulaText: 'P_avail (W) = 0.10 A v³',
    unit: 'W', round: 0,
    vars: [
      { symbol: 'A', ascii: 'A', label: 'rotor swept area', unit: 'm²', min: 20, max: 100, decimals: 0 },
      { symbol: 'v', ascii: 'v', label: 'wind speed', unit: 'm/s', min: 5, max: 12, decimals: 1 },
    ],
    conversions: [
      { ascii: 'A', unit: 'ft²', factor: 10.7639, fromUnit: 'm²' },
      { ascii: 'v', unit: 'mph', factor: 2.23694, fromUnit: 'm/s' },
    ],
    compute: v => 0.1 * v.A * Math.pow(v.v, 3),
    context: 'the wind turbine feeding the grid near a poultry farm in Bulacan',
    verb: 'has',
    unknownPhrase: 'the electrical power available from the wind',
    keyConcept: 'Of the 0.245 A v³ of mechanical power the mill can reach, only about 40% survives the gearbox and the generator, which is where the 0.10 A v³ comes from. Equivalently it is roughly 16% of the ½ρAv³ in the wind — a reminder that a wind turbine converts a small slice of what passes through it.',
    mistakes: ['Quoting the mechanical figure of 0.245 A v³ as though it were electrical', 'Dropping the 0.10 for a bare ½ρAv³', 'Using v² instead of v³'],
    distractors: [
      v => 0.245 * v.A * Math.pow(v.v, 3),
      v => 0.1 * v.A * Math.pow(v.v, 3) * 2,
      v => 0.1 * v.A * Math.pow(v.v, 3) / 2,
    ],
  },
  // -------------------------------------------------------------------------
  // Water Power
  // -------------------------------------------------------------------------
  {
    formulaId: 'a-water-power-general', area: 'A', unknown: 'H',
    // The handbook prints this as the bare proportionality P = Q x H, which only
    // becomes a power once rho*g is folded in: P(W) = 9810 Q(m3/s) H(m). Rather
    // than restate a-water-power-si, this one solves the same relation for the
    // head, which is the question a penstock survey actually asks.
    formulaText: 'H (m) = P (kW) / (9.81 Q)   (since P (kW) = Q × H × 9.81)',
    unit: 'm', round: 1,
    vars: [
      { symbol: 'P', ascii: 'P', label: 'power output', unit: 'kW', min: 50, max: 600, decimals: 1 },
      { symbol: 'Q', ascii: 'Q', label: 'discharge', unit: 'm³/s', min: 0.4, max: 1.0, decimals: 2 },
    ],
    conversions: [
      { ascii: 'P', unit: 'hp', factor: 1.34102, fromUnit: 'kW' },
      { ascii: 'Q', unit: 'ft³/s', factor: 35.3147, fromUnit: 'm³/s' },
    ],
    compute: v => v.P / (9.81 * v.Q),
    context: 'the mini-hydro penstock below the communal irrigation dam in Mountain Province',
    verb: 'was surveyed to develop',
    unknownPhrase: 'the gross head the site must provide',
    keyConcept: 'Power from a falling stream is proportional to both the flow and the head: P(W) = ρgQH = 9 810 Q(m³/s) H(m), which in kW is exactly Q × H × 9.81. Doubling either the flow or the head doubles the power, so a site survey usually trades one against the other — a narrower pipe with more head, or a wider one with less.',
    mistakes: ['Dropping the 9.81 and reading P = Q × H as a power directly', 'Carrying a stray 1,000 into the rearrangement and reporting a head in kilometres', 'Inverting the relation to give P instead of H'],
    distractors: [
      v => v.P / (9.81 * v.Q) * 2,
      v => v.P / (9.81 * v.Q) / 2,
      // The same head in feet while everything else stayed SI.
      v => v.P / (9.81 * v.Q) / 0.3048,
    ],
  },
  {
    formulaId: 'a-water-power-si', area: 'A', unknown: 'P',
    formulaText: 'P (kW) = Q (m³/s) × H (m) × 9.81 / η',
    unit: 'kW', round: 1,
    vars: [
      { symbol: 'Q', ascii: 'Q', label: 'discharge', unit: 'm³/s', min: 0.2, max: 0.6, decimals: 2 },
      { symbol: 'H', ascii: 'H', label: 'gross head', unit: 'm', min: 8, max: 80, decimals: 1 },
      { symbol: 'η', ascii: 'e', label: 'overall efficiency', unit: 'decimal', min: 0.65, max: 0.9, decimals: 2 },
    ],
    conversions: [
      { ascii: 'Q', unit: 'ft³/s', factor: 35.3147, fromUnit: 'm³/s' },
      { ascii: 'H', unit: 'ft', factor: 3.28084, fromUnit: 'm' },
    ],
    compute: v => (v.Q * v.H * 9.81) / v.e,
    context: 'the turbine of the La Trinidad hydropower plant',
    verb: 'is fed by',
    unknownPhrase: 'the power the plant can put out',
    keyConcept: 'The 9.81 is g, and the constant is really ρg = 1 000 × 9.81 W per m³/s per m of head, divided by 1 000 to land in kW. Dividing by η is what makes the answer the output rather than the water power: the turbine, the penstock and the generator all take their cut first.',
    mistakes: ['Forgetting to divide by the efficiency', 'Multiplying by the efficiency instead', 'Reading the 9.81 as 0.981'],
    distractors: [
      v => v.Q * v.H * 9.81,
      v => v.Q * v.H * 9.81 * v.e,
      v => (v.Q * v.H * 9.81) / v.e * 2,
      v => (v.Q * v.H * 9.81) / v.e / 2,
    ],
  },
  {
    formulaId: 'a-water-power-english', area: 'A', unknown: 'P',
    // 8.8 is the handbook's 3960 (the gpm constant) restated for Q in ft3/s:
    // 3960/448.83 = 8.82. Both forms are the same horsepower.
    formulaText: 'P (hp) = Q (ft³/s) × H (ft) / (8.8 × η)',
    unit: 'hp', round: 1,
    vars: [
      { symbol: 'Q', ascii: 'Q', label: 'discharge', unit: 'ft³/s', min: 2, max: 15, decimals: 1 },
      { symbol: 'H', ascii: 'H', label: 'gross head', unit: 'ft', min: 20, max: 200, decimals: 0 },
      { symbol: 'η', ascii: 'e', label: 'overall efficiency', unit: 'decimal', min: 0.6, max: 0.9, decimals: 2 },
    ],
    compute: v => (v.Q * v.H) / (8.8 * v.e),
    context: 'the waterwheel driving the rice mill at Bontoc',
    verb: 'is fed by',
    unknownPhrase: 'the horsepower the wheel can deliver',
    keyConcept: 'The 8.8 already carries the unit conversion: 1 hp = 550 ft·lb/s, and with Q in ft³/s the gpm constant 3 960 becomes 3 960/448.83 = 8.8. Dividing by η again separates what the stream can deliver from what the shaft actually receives.',
    mistakes: ['Using 3 960 with a discharge in ft³/s instead of gpm', 'Forgetting to divide by the efficiency', 'Multiplying by the efficiency instead'],
    distractors: [
      v => (v.Q * v.H) / 8.8,
      v => (v.Q * v.H * v.e) / 8.8,
      v => (v.Q * v.H) / (8.8 * v.e) * 2,
      v => (v.Q * v.H) / (8.8 * v.e) / 2,
    ],
  },
  {
    formulaId: 'a-mass-flow-rate', area: 'A', unknown: 'Q_m',
    // The handbook reuses the symbol Q for mass flow here while using it for
    // volumetric discharge elsewhere, so the answer is labelled Q_m to keep the
    // two apart.
    formulaText: 'Q_m = v A ρ   (kg/s in SI, lb/s in English)',
    unit: 'kg/s', round: 2,
    vars: [
      { symbol: 'v', ascii: 'v', label: 'flow velocity', unit: 'm/s', min: 0.5, max: 3, decimals: 2 },
      { symbol: 'A', ascii: 'A', label: 'flow cross-sectional area', unit: 'm²', min: 0.01, max: 0.3, decimals: 3 },
      { symbol: 'ρ', ascii: 'rho', label: 'fluid density', unit: 'kg/m³', min: 900, max: 1100, decimals: 0 },
    ],
    conversions: [
      { ascii: 'v', unit: 'ft/min', factor: 196.85, fromUnit: 'm/s' },
      { ascii: 'A', unit: 'ft²', factor: 10.7639, fromUnit: 'm²' },
      { ascii: 'rho', unit: 'lb/ft³', factor: 0.062428, fromUnit: 'kg/m³' },
    ],
    compute: v => v.v * v.A * v.rho,
    context: 'the irrigation line of a vegetable farm in Benguet',
    verb: 'is running with',
    unknownPhrase: 'the mass flow rate in the line',
    keyConcept: 'Mass flow is volume flow times density: Q_m = vAρ, where vA is the volumetric flow in m³/s. The same pipe moving the same volume of seawater and of freshwater carries different mass, which is why density is the last thing you multiply in and never skip.',
    mistakes: ['Forgetting the density and answering with the volume flow in m³/s', 'Using 9.81 as well and reporting the weight flow in N/s', 'Reading A as the pipe circumference rather than its cross-section'],
    distractors: [
      v => v.v * v.A * v.rho * 9.81,
      v => v.v * v.A * v.rho * 2,
      v => v.v * v.A * v.rho / 2,
    ],
  },
  // -------------------------------------------------------------------------
  // Solar Power
  // -------------------------------------------------------------------------
  {
    formulaId: 'a-solar-power-output', area: 'A', unknown: 'P_o',
    formulaText: 'P_o (W) = 1,000 A E   (1,000 W/m² of irradiance)',
    unit: 'W', round: 0,
    vars: [
      { symbol: 'A', ascii: 'A', label: 'collector area', unit: 'm²', min: 10, max: 100, decimals: 0 },
      { symbol: 'E', ascii: 'E', label: 'conversion efficiency', unit: 'decimal', min: 0.08, max: 0.12, decimals: 3 },
    ],
    conversions: [
      { ascii: 'A', unit: 'ft²', factor: 10.7639, fromUnit: 'm²' },
    ],
    compute: v => 1000 * v.A * v.E,
    context: 'the photovoltaic array on the roof of a dairy barn in Laguna',
    verb: 'covers',
    unknownPhrase: 'the electrical output of the array',
    keyConcept: 'Solar output is irradiance times area times efficiency: 1 000 W/m² × A m² × E. A photovoltaic module is around 0.10-0.12 efficient, so a 20 m² array of 10% cells yields about 20 kW at full noon sun and nothing at all at night — the 1 000 is an ideal clear-sky figure.',
    mistakes: ['Forgetting the efficiency and quoting the full 1 000 W per m²', 'Using 0.8 (the solar-dryer figure) for a photovoltaic array', 'Dividing by the efficiency instead of multiplying'],
    distractors: [
      v => 1000 * v.A,
      v => 1000 * v.A * v.E * 2,
      v => 1000 * v.A * v.E / 2,
    ],
  },
  {
    formulaId: 'a-solar-total-efficiency', area: 'A', unknown: 'Eff_total',
    formulaText: 'Eff_total = Eff_pump × Eff_transmission × Eff_prime mover',
    unit: '', round: 4,
    vars: [
      { symbol: 'Eff_p', ascii: 'Ep', label: 'pump efficiency', unit: 'decimal', min: 0.6, max: 0.95, decimals: 2 },
      { symbol: 'Eff_t', ascii: 'Et', label: 'transmission efficiency', unit: 'decimal', min: 0.6, max: 0.95, decimals: 2 },
      { symbol: 'Eff_m', ascii: 'Em', label: 'prime mover efficiency', unit: 'decimal', min: 0.6, max: 0.95, decimals: 2 },
    ],
    compute: v => v.Ep * v.Et * v.Em,
    context: 'the solar-powered irrigation pump of a rice cooperative in Iloilo',
    verb: 'was specified with',
    unknownPhrase: 'the total efficiency of the system',
    keyConcept: 'Efficiencies in series multiply, never add: the pump is fed by the prime mover, which is fed through the transmission, so the fractions left at each stage are taken of what is left. Three stages at 0.8 give 0.512, not 2.4 — the compounding is why a long chain of individually good components can still disappoint.',
    mistakes: ['Adding the three efficiencies', 'Dropping one stage of the train', 'Averaging them instead of multiplying'],
    distractors: [
      v => v.Ep + v.Et + v.Em,
      v => v.Ep * v.Et,
      v => v.Em,
      v => v.Ep * v.Et * v.Em * 2,
    ],
  },
  {
    formulaId: 'a-solar-pump-horsepower', area: 'A', unknown: 'HP',
    // Native units are the US set the handbook prints. No English conversions are
    // declared, so all ten questions in a session are natively specified.
    formulaText: 'HP = Q (gpm) × H (ft) × SG / (3,960 × Eff_total)',
    unit: 'hp', round: 2,
    vars: [
      { symbol: 'Q', ascii: 'Q', label: 'flow rate', unit: 'gpm', min: 300, max: 1500, decimals: 0 },
      { symbol: 'H', ascii: 'H', label: 'total dynamic head', unit: 'ft', min: 20, max: 120, decimals: 0 },
      { symbol: 'SG', ascii: 'SG', label: 'fluid specific gravity', unit: '', min: 0.95, max: 1.05, decimals: 2 },
      { symbol: 'Eff', ascii: 'Ef', label: 'total system efficiency', unit: 'decimal', min: 0.55, max: 0.75, decimals: 2 },
    ],
    compute: v => (v.Q * v.H * v.SG) / (3960 * v.Ef),
    context: 'the solar-driven pump set of a mango orchard in Davao del Sur',
    verb: 'is specified to deliver',
    unknownPhrase: 'the horsepower to drive the pump',
    keyConcept: 'The water horsepower of a pump is Q × H × SG / 3,960, and the brake horsepower the motor must supply is that figure divided by the efficiency of the whole train. Since 3,960 already contains 33 000/(8.814), it is the US-units companion of the kW form, not a separate constant.',
    mistakes: ['Forgetting to divide by the total system efficiency', 'Dropping the specific gravity', 'Using 3,960 with a flow in ft³/s rather than gpm'],
    distractors: [
      v => (v.Q * v.H * v.SG) / 3960,
      v => (v.Q * v.H) / (3960 * v.Ef),
      v => (v.Q * v.H * v.SG) / (3960 * v.Ef) * 2,
      v => (v.Q * v.H * v.SG) / (3960 * v.Ef) / 2,
    ],
  },
  // -------------------------------------------------------------------------
  // Multi-Bladed Wind Pumps
  // -------------------------------------------------------------------------
  {
    formulaId: 'a-windpump-hydraulic-power', area: 'A', unknown: 'P_h',
    // 9.8 is rho*g/1000 for a discharge in l/s, so 9.8 Q H lands in watts.
    formulaText: 'P_h (W) = 9.8 Q (l/s) × H (m)',
    unit: 'W', round: 0,
    vars: [
      { symbol: 'Q', ascii: 'Q', label: 'net discharge', unit: 'l/s', min: 5, max: 40, decimals: 1 },
      { symbol: 'H', ascii: 'H', label: 'dynamic pumping head', unit: 'm', min: 10, max: 60, decimals: 0 },
    ],
    conversions: [
      { ascii: 'Q', unit: 'ft³/s', factor: 0.0353147, fromUnit: 'l/s' },
      { ascii: 'H', unit: 'ft', factor: 3.28084, fromUnit: 'm' },
    ],
    compute: v => 9.8 * v.Q * v.H,
    context: 'the multibladed wind pump lifting water into the pampanga ricefields',
    verb: 'is pumping',
    unknownPhrase: 'the hydraulic power the pump must supply',
    keyConcept: 'The hydraulic power a wind pump has to deliver is ρgQH, which with Q in l/s becomes 9.8 Q H in watts. A windmill that develops less than this at its rated wind speed cannot lift its design volume, which is why the handbook pairs this figure with the rotor output P_o = 0.1 A V³.',
    mistakes: ['Dropping a digit and using 0.98 Q H', 'Reading the result as kilowatts', 'Using 9.81 × 1000 because the discharge was in m³/s'],
    distractors: [
      v => 0.98 * v.Q * v.H,
      v => 9.8 * v.Q * v.H * 2,
      v => 9.8 * v.Q * v.H / 2,
    ],
  },
  {
    formulaId: 'a-windpump-power-output', area: 'A', unknown: 'V',
    // The handbook's 0.1 A V^3 is the same basis as the electrical wind entry, so
    // asking for V instead of the output keeps this from duplicating it: the
    // design question is what wind the rotor needs to develop a given power.
    formulaText: 'V (m/s) = ∛(P_o / (0.1 A))',
    unit: 'm/s', round: 2,
    vars: [
      { symbol: 'A', ascii: 'A', label: 'rotor area including the unbladed centre', unit: 'm²', min: 15, max: 60, decimals: 1 },
      { symbol: 'P_o', ascii: 'Po', label: 'required power output', unit: 'W', min: 100, max: 3000, decimals: 0 },
    ],
    conversions: [
      { ascii: 'A', unit: 'ft²', factor: 10.7639, fromUnit: 'm²' },
      { ascii: 'Po', unit: 'hp', factor: 0.00134102, fromUnit: 'W' },
    ],
    compute: v => Math.cbrt(v.Po / (0.1 * v.A)),
    context: 'the multibladed rotor being matched to a wind pump in Ilocos Sur',
    verb: 'must sweep',
    unknownPhrase: 'the wind speed the rotor needs to develop that output',
    keyConcept: 'Inverting the v³ is the practical half of the wind-power formula: a designer who knows the power the pump needs and the area available can ask what wind the site must deliver. The cube root is gentle — the output has to change by a factor of eight before the wind speed doubles.',
    mistakes: ['Taking the cube root of P_o/A and dropping the 0.1', 'Doubling or halving the wind speed instead of taking the cube root', 'Using the area of the bladed part only, ignoring the unbladed centre'],
    distractors: [
      v => Math.cbrt(v.Po / v.A),
      v => Math.cbrt(v.Po / (0.1 * v.A)) * 2,
      v => Math.cbrt(v.Po / (0.1 * v.A)) / 2,
    ],
  },
  {
    formulaId: 'a-windpump-solar-insolation', area: 'A', unknown: 'I',
    // The handbook labels this result kW, but power multiplied by hours is energy.
    // Reported as kWh per day, which is what the number actually is.
    formulaText: 'I = P_o × T   (energy per day; T ≈ 5 h for the Philippines)',
    unit: 'kWh/day', round: 2,
    vars: [
      { symbol: 'P_o', ascii: 'Po', label: 'power output', unit: 'kW', min: 0.5, max: 5, decimals: 2 },
      { symbol: 'T', ascii: 'T', label: 'daily sunshine duration', unit: 'h', min: 4, max: 6, decimals: 1 },
    ],
    conversions: [
      { ascii: 'Po', unit: 'W', factor: 1000, fromUnit: 'kW' },
      { ascii: 'T', unit: 'min', factor: 60, fromUnit: 'h' },
    ],
    compute: v => v.Po * v.T,
    context: 'the solar heater feeding a milk pasteuriser in a dairy cooperative in Batangas',
    verb: 'is delivering',
    unknownPhrase: 'the energy it puts out over a day of sunshine',
    keyConcept: "Power is a rate and energy is what the rate adds up to, so the product P_o × T is energy, not power. The Philippines gets roughly five hours of sensible sunshine a day, and that T is the number to check first when a collector under-performs: no amount of rating makes up for hours the sun is not there.",
    mistakes: ['Answering in kW and forgetting that the hours turn the result into energy', 'Forgetting the duration and giving the power alone', 'Treating T as minutes'],
    distractors: [
      v => v.Po,
      v => v.Po * v.T * 2,
      v => v.Po * v.T / 2,
    ],
  },
];
