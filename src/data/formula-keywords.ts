export interface KeywordFormula {
  formulaId: string;
  keywords: string[];
  formulaName: string;
  area: string;
  whenToUse: string;
  example?: string;
}

export const keywordFormulas: KeywordFormula[] = [
  // === AREA A: POWER, ENERGY & MACHINERY ===
  
  {
    formulaId: 'a-theoretical-field-capacity',
    keywords: ['theoretical field capacity', 'maximum capacity', '100% efficiency', 'ideal capacity'],
    formulaName: 'Theoretical Field Capacity',
    area: 'A',
    whenToUse: 'Subtract time losses (turns, refills, breakdowns) from the theoretical value. TFC assumes E = 1.',
    example: 'At 4 m width, 6 km/h → TFC = 4 × 6 / 10 = 2.4 ha/h (with E=0.8 → 1.92 ha/h actual)',
  },

{
    formulaId: 'a-mechanical-efficiency',
    keywords: ['mechanical efficiency', 'brake over indicated', 'engine efficiency'],
    formulaName: 'Mechanical Efficiency',
    area: 'A',
    whenToUse: 'Divide brake power by indicated power. Typical diesel engines: 80–90%.',
  },

{
    formulaId: 'a-compression-ratio',
    keywords: ['compression ratio', 'clearance volume', 'CR'],
    formulaName: 'Compression Ratio',
    area: 'A',
    whenToUse: 'CR = (Vd + Vc)/Vc. Add clearance volume to displacement — never use Vd alone in the numerator.',
    example: 'Vd 400 cc, Vc 50 cc → CR = (400+50)/50 = 9:1',
  },
  
  {
    formulaId: 'a-specific-fuel-consumption',
    keywords: ['specific fuel consumption', 'SFC', 'kg per kwh', 'fuel economy'],
    formulaName: 'Specific Fuel Consumption',
    area: 'A',
    whenToUse: 'Mass of fuel per unit of power per hour (kg/kW·h). Track units — SFC very often given as g/kW·h (÷1000).',
    example: '6 kg consumed in 2 h at 40 kW → SFC = 6/(40×2) = 0.075 kg/kW·h = 75 g/kW·h',
  },


  // === AREA B: LAND & WATER RESOURCES ===

{
    formulaId: 'b-irrigation-interval',
    keywords: ['irrigation interval', 'days between irrigation', 'allowable depletion', 'consumptive use'],
    formulaName: 'Irrigation Interval',
    area: 'B',
    whenToUse: 'Allowable depletion depth (mm) ÷ daily consumptive use (mm/day). This is the max days between irrigations.',
    example: 'D_ad 60 mm, CU 5 mm/day → irrigate every 12 days',
  },

{
    formulaId: 'b-rational-method',
    keywords: ['rational method', 'peak runoff', 'peak discharge', 'runoff intensity', 'c i a 360'],
    formulaName: 'Rational Method (Peak Runoff)',
    area: 'B',
    whenToUse: 'C × I (mm/h) × A (ha) ÷ 360 → m³/s. Area must be ha, not m².',
    example: 'C 0.5, I 50 mm/h, A 20 ha → Q = 0.5 × 50 × 20 / 360 = 1.39 m³/s',
  },

{
    formulaId: 'b-mannings-equation',
    keywords: ['manning velocity', "manning's formula", 'v 1/n r 2/3', 'open channel velocity'],
    formulaName: "Manning's Equation (Velocity)",
    area: 'B',
    whenToUse: 'Hydraulic radius R^(2/3) times √S divided by n. Compute R = A/P first.',
    example: 'R 0.75 m, S 0.001, n 0.025 → v = (1/0.025)(0.75)^(2/3)(√0.001) ≈ 1.06 m/s',
  },

{
    formulaId: 'b-return-period',
    keywords: ['return period', 'recurrence interval', 'rank flood', 'n+1 over m'],
    formulaName: 'Return Period',
    area: 'B',
    whenToUse: 'Rank the floods largest = 1, then T = (n+1)/m. Alternative simple form: T = n/m.',
  },


  // === AREA C: STRUCTURES, ENVIRONMENT & BIOPROCESS ===
  {
    formulaId: 'c-mc-wet-basis',
    keywords: ['moisture content wet basis', 'MC wet basis', 'water total weight', 'percent water'],
    formulaName: 'Moisture Content (Wet Basis)',
    area: 'C',
    whenToUse: 'Water ÷ TOTAL weight × 100. Use when moisture is quoted as "MC of grain" (usually wet basis).',
    example: '100 kg sample, 20 kg water → MC_wb = 20/100 × 100 = 20%',
  },
  {
    formulaId: 'c-mc-dry-basis',
    keywords: ['moisture content dry basis', 'MC dry basis', 'water dry matter'],
    formulaName: 'Moisture Content (Dry Basis)',
    area: 'C',
    whenToUse: 'Water ÷ DRY MATTER weight × 100. Common in drying studies; can exceed 100%.',
    example: '80 kg water on 100 kg dry matter → MC_db = 80% (vs 44.4% wet basis)',
  },

{
    formulaId: 'c-enthalpy',
    keywords: ['moist air enthalpy', 'psychrometric enthalpy', '1.005', '2501', 'humidity ratio enthalpy'],
    formulaName: 'Moist Air Enthalpy',
    area: 'C',
    whenToUse: 'Sensible (1.005 T) + latent (W·2501 at 0°C) + water vapor sensible (1.88T). W in kg/kg dry air.',
  },
  {
    formulaId: 'c-electrical-power',
    keywords: ['electric power', 'VI', 'I squared R', 'V squared over R', 'wattage'],
    formulaName: 'Electric Power',
    area: 'C',
    whenToUse: 'Any of the three forms; pick based on which two of P, V, I, R are known.',
    example: '220 V, 10 A → P = 2200 W',
  },
  {
    formulaId: 'c-electrical-energy',
    keywords: ['electric energy', 'kWh', 'power time', 'energy consumption bill'],
    formulaName: 'Electric Energy',
    area: 'C',
    whenToUse: 'Power × time. kWh requires kW and hours: W ÷ 1000 first.',
    example: '1.5 kW heater, 6 h/day → 9 kWh/day',
  },

{
    formulaId: 'c-power-factor',
    keywords: ['power factor', 'cos theta', 'kW kVA', 'apparent power', 'PF'],
    formulaName: 'Power Factor',
    area: 'C',
    whenToUse: 'Real power (kW) ÷ apparent power (kVA). kVA = kW ÷ PF when sizing generators/transformers.',
    example: '10 kW at PF 0.8 → S = 10/0.8 = 12.5 kVA',
  },

];

export function findFormulasByKeyword(query: string): KeywordFormula[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return keywordFormulas.filter(f =>
    f.keywords.some(k => k.toLowerCase().includes(q))
  );
}

export const allKeywords = [...new Set(keywordFormulas.flatMap(f => f.keywords))].sort();