// Unit Conversions for Agricultural and Biosystems Engineering
// Organized by category with memory techniques

export interface Conversion {
  id: string;
  category: string;
  fromUnit: string;
  toUnit: string;
  factor: number;
  explanation?: string;
  mnemonic?: string;
  trick?: string;
}

export interface ConversionCategory {
  id: string;
  name: string;
  units: string[];
  description: string;
  memoryTrick: string;
}

export const conversionCategories: ConversionCategory[] = [
  {
    id: 'length',
    name: 'Length',
    units: ['mm', 'cm', 'm', 'km', 'in', 'ft', 'yd', 'mi'],
    description: 'Most common conversions for farm measurements and surveying',
    memoryTrick: 'Think of the metric ladder: King Henry Died By Drinking Chocolate Milk (km, hm, dam, m, dm, cm, mm)'
  },
  {
    id: 'area',
    name: 'Area',
    units: ['mm²', 'cm²', 'm²', 'ha', 'km²', 'in²', 'ft²', 'acre'],
    description: 'Land measurements, field sizes',
    memoryTrick: '1 hectare = 10,000 m² (like a square 100m × 100m). 1 acre ≈ 4,047 m²'
  },
  {
    id: 'volume',
    name: 'Volume',
    units: ['mL', 'L', 'm³', 'gal', 'ft³', 'acre-ft'],
    description: 'Water, irrigation, storage calculations',
    memoryTrick: '1 L of water = 1 kg (at 4°C). 1 m³ = 1000 L = 35.3 ft³'
  },
  {
    id: 'mass',
    name: 'Mass',
    units: ['mg', 'g', 'kg', 'ton', 'lb', 'oz'],
    description: 'Grain, produce, fertilizers',
    memoryTrick: '1 kg = 2.2 lb (about a size of a newborn kitten)'
  },
  {
    id: 'pressure',
    name: 'Pressure',
    units: ['Pa', 'kPa', 'MPa', 'bar', 'psi', 'atm'],
    description: 'Hydraulic systems, weather, storage',
    memoryTrick: '1 atm ≈ 101.3 kPa ≈ 14.7 psi (like the weight of the atmosphere)'
  },
  {
    id: 'force',
    name: 'Force',
    units: ['N', 'kN', 'lbf', 'kgf'],
    description: 'Structural loads, machinery forces',
    memoryTrick: '1 kgf = 9.81 N (Earth pulls 1 kg with ~10 N of force)'
  },
  {
    id: 'energy',
    name: 'Energy & Work',
    units: ['J', 'kJ', 'MJ', 'cal', 'kcal', 'BTU', 'kWh'],
    description: 'Heat transfer, fuel, power',
    memoryTrick: '1 BTU = energy to heat 1 lb water by 1°F. 1 kcal = 4.184 kJ'
  },
  {
    id: 'power',
    name: 'Power',
    units: ['W', 'kW', 'MW', 'hp', 'BTU/hr'],
    description: 'Motors, engines, equipment',
    memoryTrick: '1 hp ≈ 746 W = 0.746 kW (a strong horse!)?'
  },
  {
    id: 'flow',
    name: 'Flow Rate',
    units: ['L/s', 'L/min', 'm³/s', 'm³/hr', 'gal/min', 'gpm', 'ft³/s', 'cfs'],
    description: 'Irrigation, pumps, drainage',
    memoryTrick: '1 cfs ≈ 28.3 L/s ≈ 0.646 mgd (million gallons per day)'
  },
  {
    id: 'velocity',
    name: 'Velocity',
    units: ['m/s', 'km/hr', 'ft/s', 'mph'],
    description: 'Conveyors, wind, water flow',
    memoryTrick: '1 m/s = 3.6 km/hr (multiply by 3.6 for quick conversion)'
  },
  {
    id: 'temperature',
    name: 'Temperature',
    units: ['°F', '°C', 'K'],
    description: 'Processing, refrigeration, environmental',
    memoryTrick: 'C = (F-32) × 5/9. Freezing = 0°C = 32°F. Boiling = 100°C = 212°F'
  },
  {
    id: 'angle',
    name: 'Angle',
    units: ['degrees', 'radians', 'grads'],
    description: 'Surveys, mechanics, slopes',
    memoryTrick: '180° = π rad. 360° = 2π rad. Right angle = 90° = π/2 rad'
  }
];

export const conversions: Conversion[] = [
  // Length
  { id: 'len-001', category: 'length', fromUnit: 'mm', toUnit: 'cm', factor: 0.1, mnemonic: 'Milli to centi: move decimal 1 place left' },
  { id: 'len-002', category: 'length', fromUnit: 'cm', toUnit: 'm', factor: 0.01, mnemonic: 'Centi to meter: move decimal 2 places left' },
  { id: 'len-003', category: 'length', fromUnit: 'm', toUnit: 'km', factor: 0.001, mnemonic: 'Meter to kilometer: move decimal 3 places left' },
  { id: 'len-004', category: 'length', fromUnit: 'in', toUnit: 'cm', factor: 2.54, explanation: '1 inch = exactly 2.54 cm (defined)' },
  { id: 'len-005', category: 'length', fromUnit: 'ft', toUnit: 'm', factor: 0.3048, explanation: '1 foot = 0.3048 meters', mnemonic: 'Think: 3米饭 = 1 foot (sounds like 3-0-4-8 in Cantonese)' },
  { id: 'len-006', category: 'length', fromUnit: 'yd', toUnit: 'm', factor: 0.9144, explanation: '1 yard = 0.9144 meters (3 ft)' },
  { id: 'len-007', category: 'length', fromUnit: 'mi', toUnit: 'km', factor: 1.609, explanation: '1 mile = 1.609 kilometers', trick: '1 mile ≈ 1.6 km (5 laps around a 400m track)' },
  { id: 'len-008', category: 'length', fromUnit: 'm', toUnit: 'ft', factor: 3.281, explanation: '1 meter ≈ 3.281 feet', trick: 'A meter stick is a little longer than a yard' },

  // Area
  { id: 'area-001', category: 'area', fromUnit: 'm²', toUnit: 'ha', factor: 0.0001, mnemonic: '1 ha = 10,000 m² (100m × 100m square)' },
  { id: 'area-002', category: 'area', fromUnit: 'acre', toUnit: 'm²', factor: 4046.86, mnemonic: '1 acre ≈ 4,047 m² (about the size of a football field minus the end zones)', trick: 'One acre = one chain × one furlong = 66 ft × 660 ft' },
  { id: 'area-003', category: 'area', fromUnit: 'acre', toUnit: 'ha', factor: 0.4047, explanation: '1 acre = 0.4047 hectares', trick: 'Divide acres by 2.47 to get hectares' },
  { id: 'area-004', category: 'area', fromUnit: 'ft²', toUnit: 'm²', factor: 0.0929, explanation: '1 square foot = 0.0929 m²' },
  { id: 'area-005', category: 'area', fromUnit: 'km²', toUnit: 'ha', factor: 100, explanation: '1 km² = 100 hectares' },
  { id: 'area-006', category: 'area', fromUnit: 'cm²', toUnit: 'mm²', factor: 100, explanation: '1 cm² = 100 mm²' },

  // Volume
  { id: 'vol-001', category: 'volume', fromUnit: 'L', toUnit: 'm³', factor: 0.001, explanation: '1 L = 1000 mL = 0.001 m³', mnemonic: 'Milli means thousandth' },
  { id: 'vol-002', category: 'volume', fromUnit: 'gal', toUnit: 'L', factor: 3.785, explanation: '1 US gallon = 3.785 liters', trick: '1 gallon = 4 quarts ≈ 3.8 liters' },
  { id: 'vol-003', category: 'volume', fromUnit: 'ft³', toUnit: 'L', factor: 28.317, explanation: '1 cubic foot = 28.317 liters' },
  { id: 'vol-004', category: 'volume', fromUnit: 'ft³', toUnit: 'm³', factor: 0.0283, explanation: '1 cubic foot = 0.0283 m³' },
  { id: 'vol-005', category: 'volume', fromUnit: 'acre-ft', toUnit: 'm³', factor: 1233.48, explanation: '1 acre-foot = 1233.48 m³', trick: 'Volume to cover 1 acre to 1 foot depth' },
  { id: 'vol-006', category: 'volume', fromUnit: 'acre-ft', toUnit: 'L', factor: 1233480, explanation: '1 acre-foot = 1,233,480 liters' },
  { id: 'vol-007', category: 'volume', fromUnit: 'm³', toUnit: 'gal', factor: 264.17, explanation: '1 m³ = 264.17 US gallons' },

  // Mass
  { id: 'mass-001', category: 'mass', fromUnit: 'kg', toUnit: 'lb', factor: 2.205, explanation: '1 kg = 2.205 pounds', trick: '1 kg ≈ 2.2 lb (easy to remember: kilogram sounds like "killo" but you say it twice)' },
  { id: 'mass-002', category: 'mass', fromUnit: 'ton', toUnit: 'kg', factor: 1000, explanation: '1 metric ton = 1000 kg', trick: 'Mega = million, kilo = thousand' },
  { id: 'mass-003', category: 'mass', fromUnit: 'lb', toUnit: 'kg', factor: 0.4536, explanation: '1 pound = 0.4536 kg' },
  { id: 'mass-004', category: 'mass', fromUnit: 'oz', toUnit: 'g', factor: 28.3495, explanation: '1 ounce = 28.35 grams' },
  { id: 'mass-005', category: 'mass', fromUnit: 'g', toUnit: 'kg', factor: 0.001, explanation: '1 gram = 0.001 kg' },

  // Pressure
  { id: 'pres-001', category: 'pressure', fromUnit: 'kPa', toUnit: 'psi', factor: 0.145, explanation: '1 kPa = 0.145 psi' },
  { id: 'pres-002', category: 'pressure', fromUnit: 'psi', toUnit: 'kPa', factor: 6.895, explanation: '1 psi = 6.895 kPa', trick: 'Multiply psi by 7 to get kPa (simplified)' },
  { id: 'pres-003', category: 'pressure', fromUnit: 'bar', toUnit: 'kPa', factor: 100, explanation: '1 bar = 100 kPa (atmospheric pressure ≈ 1 bar)' },
  { id: 'pres-004', category: 'pressure', fromUnit: 'atm', toUnit: 'kPa', factor: 101.3, explanation: '1 atm = 101.3 kPa ≈ 14.7 psi' },
  { id: 'pres-005', category: 'pressure', fromUnit: 'atm', toUnit: 'bar', factor: 1.013, explanation: '1 atm = 1.013 bar' },
  { id: 'pres-006', category: 'pressure', fromUnit: 'Pa', toUnit: 'kPa', factor: 0.001, explanation: '1 kPa = 1000 Pa' },

  // Force
  { id: 'force-001', category: 'force', fromUnit: 'kgf', toUnit: 'N', factor: 9.807, explanation: '1 kgf = 9.81 N (Earth\'s gravity)', trick: 'Weight (N) = mass (kg) × 9.81' },
  { id: 'force-002', category: 'force', fromUnit: 'lbf', toUnit: 'N', factor: 4.448, explanation: '1 pound-force = 4.448 N' },
  { id: 'force-003', category: 'force', fromUnit: 'kN', toUnit: 'kgf', factor: 101.97, explanation: '1 kN ≈ 102 kgf', trick: '1 kN ≈ 1000 N ≈ 102 kg × 9.81' },
  { id: 'force-004', category: 'force', fromUnit: 'N', toUnit: 'kN', factor: 0.001, explanation: '1 kN = 1000 N' },

  // Energy
  { id: 'energy-001', category: 'energy', fromUnit: 'kJ', toUnit: 'kcal', factor: 0.239, explanation: '1 kJ = 0.239 kcal', trick: 'Food calories are actually kcal: 1 Cal = 4.184 kJ' },
  { id: 'energy-002', category: 'energy', fromUnit: 'BTU', toUnit: 'kJ', factor: 1.055, explanation: '1 BTU = 1.055 kJ' },
  { id: 'energy-003', category: 'energy', fromUnit: 'kWh', toUnit: 'MJ', factor: 3.6, explanation: '1 kWh = 3.6 MJ (energy = power × time)' },
  { id: 'energy-004', category: 'energy', fromUnit: 'cal', toUnit: 'J', factor: 4.184, explanation: '1 cal = 4.184 J (mechanical equivalent of heat)', trick: 'The calorie in food labels is actually a kilocalorie' },
  { id: 'energy-005', category: 'energy', fromUnit: 'BTU', toUnit: 'kWh', factor: 0.000293, explanation: '1 BTU = 0.000293 kWh' },

  // Power
  { id: 'power-001', category: 'power', fromUnit: 'kW', toUnit: 'hp', factor: 1.341, explanation: '1 kW = 1.341 horsepower', trick: '1 hp ≈ 746 W, so 1 kW ≈ 1.34 hp' },
  { id: 'power-002', category: 'power', fromUnit: 'hp', toUnit: 'kW', factor: 0.746, explanation: '1 hp = 746 W = 0.746 kW' },
  { id: 'power-003', category: 'power', fromUnit: 'BTU/hr', toUnit: 'W', factor: 0.293, explanation: '1 BTU/hr = 0.293 W' },
  { id: 'power-004', category: 'power', fromUnit: 'W', toUnit: 'kW', factor: 0.001, explanation: '1 kW = 1000 W' },

  // Flow Rate
  { id: 'flow-001', category: 'flow', fromUnit: 'm³/s', toUnit: 'L/s', factor: 1000, explanation: '1 m³/s = 1000 L/s' },
  { id: 'flow-002', category: 'flow', fromUnit: 'm³/hr', toUnit: 'L/s', factor: 0.2778, explanation: '1 m³/hr = (1/3600) × 1000 ≈ 0.278 L/s' },
  { id: 'flow-003', category: 'flow', fromUnit: 'gpm', toUnit: 'L/min', factor: 3.785, explanation: '1 gpm (gallon per minute) = 3.785 L/min' },
  { id: 'flow-004', category: 'flow', fromUnit: 'cfs', toUnit: 'm³/s', factor: 0.0283, explanation: '1 cfs (cubic foot per second) = 0.0283 m³/s' },
  { id: 'flow-005', category: 'flow', fromUnit: 'ft³/s', toUnit: 'L/s', factor: 28.317, explanation: '1 cfs = 28.317 L/s' },

  // Velocity
  { id: 'vel-001', category: 'velocity', fromUnit: 'm/s', toUnit: 'km/hr', factor: 3.6, explanation: '1 m/s = 3.6 km/hr', trick: 'Multiply m/s by 3.6 to get km/hr' },
  { id: 'vel-002', category: 'velocity', fromUnit: 'km/hr', toUnit: 'm/s', factor: 0.2778, explanation: '1 km/hr = 1/3.6 ≈ 0.278 m/s' },
  { id: 'vel-003', category: 'velocity', fromUnit: 'mph', toUnit: 'km/hr', factor: 1.609, explanation: '1 mph = 1.609 km/hr' },
  { id: 'vel-004', category: 'velocity', fromUnit: 'ft/s', toUnit: 'm/s', factor: 0.3048, explanation: '1 ft/s = 0.3048 m/s' },

  // Temperature (these need special formulas, not multiplication)
  { id: 'temp-001', category: 'temperature', fromUnit: '°F', toUnit: '°C', factor: -999, explanation: 'Use formula: C = (F - 32) × 5/9', trick: 'Subtract 32, then multiply by 5 and divide by 9' },
  { id: 'temp-002', category: 'temperature', fromUnit: '°C', toUnit: '°F', factor: -999, explanation: 'Use formula: F = (C × 9/5) + 32', trick: 'Multiply by 9/5 and add 32' },
  { id: 'temp-003', category: 'temperature', fromUnit: '°C', toUnit: 'K', factor: -999, explanation: 'Use formula: K = C + 273.15', trick: 'Add 273.15 to Celsius to get Kelvin' },

  // Angle
  { id: 'ang-001', category: 'angle', fromUnit: 'rad', toUnit: '°', factor: 57.296, explanation: '1 rad = 57.3° (180°/π)', trick: 'π rad = 180°, so 1 rad ≈ 57.3°' },
  { id: 'ang-002', category: 'angle', fromUnit: '°', toUnit: 'rad', factor: 0.01745, explanation: '1° = π/180 ≈ 0.01745 rad', trick: 'Multiply degrees by π/180' }
];

export const memoryTechniques = [
  {
    title: 'Spaced Repetition',
    description: 'Review conversions at increasing intervals: 1 day, 3 days, 1 week, 2 weeks, 1 month',
    howToApply: 'Create flashcards and review them following this schedule. Each time you remember a conversion correctly, extend the next review interval.'
  },
  {
    title: 'Chunking',
    description: 'Group related conversions together to remember them as a single unit',
    howToApply: 'Learn metric prefixes as a group: kilo (×1000), hecto (×100), deka (×10), deci (×0.1), centi (×0.01), milli (×0.001)'
  },
  {
    title: 'Mnemonic Stories',
    description: 'Create memorable phrases that link units together',
    howToApply: 'Example: "King Henry Died By Drinking Chocolate Milk" → kilometer, hectometer, dekameter, meter, decimeter, centimeter, millimeter'
  },
  {
    title: 'Memory Palace',
    description: 'Associate each conversion with a specific location in a familiar place',
    howToApply: 'Visualize your house: the fridge holds 1 L (1 kg of water), the height is 2 m, etc. Associate conversions with physical objects.'
  },
  {
    title: 'Active Practice',
    description: 'Don\'t just read conversions—actively quiz yourself and solve problems',
    howToApply: 'Every time you encounter a conversion in a practice problem, verbalize the conversion factor and its meaning, not just the numbers.'
  },
  {
    title: 'Association with Familiar Values',
    description: 'Link unfamiliar conversions to things you already know',
    howToApply: '1 acre ≈ 4,047 m² ≈ width of a football field. 1 mile ≈ 1.6 km ≈ distance you walk in 20 minutes.'
  }
];

export const commonConversionGroups = [
  {
    name: 'Metric Ladder',
    baseUnit: 'meter (m)',
    units: ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'],
    factors: [1000, 100, 10, 1, 0.1, 0.01, 0.001],
    memoryTip: 'King Henry Died By Drinking Chocolate Milk - each word = kilo, hecto, deka, base, deci, centi, milli'
  },
  {
    name: 'US to Metric Length',
    conversions: [
      { from: 'inch', to: 'cm', factor: 2.54 },
      { from: 'foot', to: 'm', factor: 0.3048 },
      { from: 'yard', to: 'm', factor: 0.9144 },
      { from: 'mile', to: 'km', factor: 1.609 }
    ],
    memoryTip: '1 inch = 2.54 cm (exact), 1 foot ≈ 30 cm, 1 yard ≈ 0.9 m, 1 mile ≈ 1.6 km'
  },
  {
    name: 'Water-Related',
    conversions: [
      { from: '1 L water', to: '1 kg', note: 'At 4°C (maximum density)' },
      { from: '1 m³ water', to: '1000 L', note: '1000 kg = 1 tonne' },
      { from: '1 gal water', to: '3.785 kg', note: 'About 8.3 lb' },
      { from: '1 ft³ water', to: '62.4 lb', note: 'Weight of 1 ft³ of water' }
    ],
    memoryTip: 'Water is your reference point: 1 m³ = 1 tonne at standard conditions'
  }
];

export function getConversionsByCategory(category: string): Conversion[] {
  return conversions.filter(conversion => conversion.category === category);
}

export function getCategoryName(categoryId: string): string {
  const category = conversionCategories.find(entry => entry.id === categoryId);
  return category?.name || categoryId;
}

export function generatePracticeQuestion(): { fromUnit: string; toUnit: string; value: number } {
  const randomConversion = conversions[Math.floor(Math.random() * conversions.length)];
  if (randomConversion.factor === -999) {
    // Temperature conversion needs special handling
    const value = Math.round(Math.random() * 100);
    return { fromUnit: randomConversion.fromUnit, toUnit: randomConversion.toUnit, value };
  }
  const value = Math.round(Math.random() * 100 + 1);
  return { fromUnit: randomConversion.fromUnit, toUnit: randomConversion.toUnit, value };
}

export function convert(value: number, conversion: Conversion): number | string {
  if (conversion.factor === -999) {
    // Temperature conversions require special formulas
    if (conversion.fromUnit === '°F' && conversion.toUnit === '°C') {
      return (value - 32) * 5 / 9;
    }
    if (conversion.fromUnit === '°C' && conversion.toUnit === '°F') {
      return (value * 9 / 5) + 32;
    }
    if (conversion.fromUnit === '°C' && conversion.toUnit === 'K') {
      return value + 273.15;
    }
  }
  return value * conversion.factor;
}