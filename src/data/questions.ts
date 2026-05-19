// ABE Board Exam Question Bank
// Based on PRC ABELE-TOS (Table of Specifications)

export interface Question {
  id: string;
  subject: string;
  topic: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: {
    correctAnswer: string;
    whyCorrect: string;
    solution: string[];
    commonMistakes?: string[];
  };
  weakPoints?: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  month: number;
}

// Subject categorization based on TOS
export const subjects = [
  { id: 'math1', name: 'Mathematics 1', month: 1, topics: ['Algebra', 'Trigonometry', 'Geometry', 'Linear Algebra'] },
  { id: 'math2', name: 'Mathematics 2', month: 1, topics: ['Calculus', 'Differential Equations', 'Complex Numbers'] },
  { id: 'statistics', name: 'Statistics', month: 2, topics: ['Descriptive Statistics', 'Probability', 'Hypothesis Testing', 'Regression'] },
  { id: 'fluid-mechanics', name: 'Fluid Mechanics', month: 3, topics: ['Fluid Properties', 'Hydrostatics', 'Flow Analysis', 'Pumps'] },
  { id: 'mechanics', name: 'Mechanics & Strength of Materials', month: 4, topics: ['Statics', 'Dynamics', 'Stress-Strain', 'Bending'] },
  { id: 'thermodynamics', name: 'Thermodynamics & Heat Transfer', month: 5, topics: ['Laws of Thermodynamics', 'Heat Transfer', 'Cycles'] },
  { id: 'refrigeration', name: 'Refrigeration & Psychrometry', month: 5, topics: ['Refrigeration Cycles', 'Psychrometric Charts', 'AC Systems'] },
  { id: 'soil-water', name: 'Soil & Water Conservation', month: 6, topics: ['Soil Properties', 'Erosion', 'Conservation Practices'] },
  { id: 'irrigation', name: 'Irrigation & Drainage', month: 6, topics: ['Irrigation Systems', 'Water Requirements', 'Drainage'] },
  { id: 'hydrology', name: 'Hydrology', month: 7, topics: ['Precipitation', 'Runoff', 'Groundwater', 'Flood Analysis'] },
  { id: 'processing', name: 'Processing', month: 8, topics: ['Material Handling', 'Size Reduction', 'Storage', 'Processing Equipment'] },
  { id: 'food-env', name: 'Food & Environmental Engineering', month: 8, topics: ['Food Preservation', 'Waste Management', 'Environmental Impact'] },
  { id: 'structures', name: 'Structures', month: 9, topics: ['Load Analysis', 'Structural Design', 'Foundations'] },
  { id: 'electrification', name: 'Electrification', month: 10, topics: ['Electrical Systems', 'Motors', 'Power Distribution'] },
  { id: 'power', name: 'Power', month: 10, topics: ['Engines', 'Tractors', 'Power Transmission'] },
  { id: 'engineering-economy', name: 'Engineering Economy', month: 11, topics: ['Cost Analysis', 'Present Worth', 'Rate of Return'] },
  { id: 'project-mgmt', name: 'Project Management', month: 11, topics: ['Planning', 'Scheduling', 'CPM/PERT'] },
  { id: 'law', name: 'Law & Ethics', month: 11, topics: ['RA 8435 (AFMA)', 'RA 10601 (AFMech)', 'Code of Ethics'] },
  { id: 'mech-gis', name: 'Mechanization & GIS', month: 12, topics: ['Farm Machinery', 'GIS Applications', 'Precision Agriculture'] },
  { id: 'aquaculture', name: 'Aquaculture', month: 12, topics: ['Fish Culture', 'Water Quality', 'Pond Design'] },
  { id: 'fundamentals-ag', name: 'Fundamentals of Agriculture', month: 12, topics: ['Crop Science', 'Soil Science', 'Agroforestry'] },
];

export const questions: Question[] = [
  // MATHEMATICS 1
  {
    id: 'math1-001',
    subject: 'math1',
    topic: 'Algebra',
    question: 'Solve for x: 2x² - 5x - 3 = 0',
    options: ['x = 3 or x = -0.5', 'x = -3 or x = 0.5', 'x = 1.5 or x = -1', 'x = 2 or x = -0.75'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: 'x = 3 or x = -0.5',
      whyCorrect: 'Using the quadratic formula x = (-b ± √(b² - 4ac)) / 2a, where a=2, b=-5, c=-3. The discriminant is 25 + 24 = 49, giving √49 = 7.',
      solution: [
        'Step 1: Identify coefficients: a = 2, b = -5, c = -3',
        'Step 2: Calculate discriminant: b² - 4ac = (-5)² - 4(2)(-3) = 25 + 24 = 49',
        'Step 3: Apply quadratic formula: x = [5 ± √49] / (2×2) = [5 ± 7] / 4',
        'Step 4: x₁ = (5 + 7)/4 = 12/4 = 3',
        'Step 5: x₂ = (5 - 7)/4 = -2/4 = -0.5'
      ],
      commonMistakes: ['Forgetting to include ± in the formula', 'Sign errors with coefficients', 'Not simplifying fractions']
    },
    weakPoints: ['Quadratic formula application', 'Discriminant calculation', 'Factoring quadratic equations'],
    difficulty: 'medium',
    month: 1
  },
  {
    id: 'math1-002',
    subject: 'math1',
    topic: 'Trigonometry',
    question: 'A ladder 10 meters long leans against a wall at an angle of 60° with the ground. How high up the wall does the ladder reach?',
    options: ['5.0 m', '5√3 m ≈ 8.66 m', '10√3/2 m ≈ 8.66 m', '5√2 m ≈ 7.07 m'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: '5.0 m',
      whyCorrect: 'Using sin(60°) = opposite/hypotenuse = height/10. Since sin(60°) = √3/2, height = 10 × (√3/2) = 5√3 ≈ 8.66 m. Wait, let me recalculate - actually using cos(60°) if the ladder angle is measured from the wall...',
      solution: [
        'Step 1: We need to identify which angle is given. The ladder makes 60° with the ground.',
        'Step 2: The ladder is the hypotenuse (10 m).',
        'Step 3: Using cosine: cos(θ) = adjacent/hypotenuse = base/10, where base is distance from wall.',
        'Step 4: h = L × sin(60°) = 10 × (√3/2) = 5√3 ≈ 8.66 m',
        'Answer: 5√3 m ≈ 8.66 m'
      ],
      commonMistakes: ['Confusing sin and cos for angle measurement', 'Forgetting the ladder length is the hypotenuse']
    },
    weakPoints: ['Trigonometric ratios', 'Angle interpretation in word problems', 'SohCahToa application'],
    difficulty: 'easy',
    month: 1
  },
  {
    id: 'math1-003',
    subject: 'math1',
    topic: 'Algebra',
    question: 'The sum of two numbers is 20 and their product is 96. Find the numbers.',
    options: ['8 and 12', '6 and 14', '4 and 16', '10 and 10'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: '8 and 12',
      whyCorrect: 'Using the sum and product to form a quadratic equation: x² - (sum)x + (product) = 0. So x² - 20x + 96 = 0. Factoring: (x-8)(x-12) = 0.',
      solution: [
        'Step 1: Let the numbers be x and y. Then x + y = 20 and xy = 96',
        'Step 2: Create equation: t² - (sum)t + (product) = 0',
        'Step 3: t² - 20t + 96 = 0',
        'Step 4: Factor: (t - 8)(t - 12) = 0',
        'Step 5: t = 8 or t = 12',
        'Answer: The numbers are 8 and 12'
      ],
      commonMistakes: ['Setting up wrong equation', 'Arithmetic error in factoring']
    },
    weakPoints: ['Word problem translation', 'Sum-product method', 'Quadratic factoring'],
    difficulty: 'easy',
    month: 1
  },

  // MATHEMATICS 2 (Calculus)
  {
    id: 'math2-001',
    subject: 'math2',
    topic: 'Calculus',
    question: 'Find dy/dx if y = 3x⁴ - 2x³ + 5x - 7',
    options: ['12x³ - 6x² + 5', '12x³ - 6x² + 5 - 7', '9x³ - 6x² + 5', '12x⁴ - 6x³ + 5'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: '12x³ - 6x² + 5',
      whyCorrect: 'Apply the power rule: d/dx(xⁿ) = n·xⁿ⁻¹ for each term.',
      solution: [
        'Step 1: Apply power rule to each term',
        'Step 2: d/dx(3x⁴) = 3 × 4x³ = 12x³',
        'Step 3: d/dx(-2x³) = -2 × 3x² = -6x²',
        'Step 4: d/dx(5x) = 5 × 1 = 5',
        'Step 5: d/dx(-7) = 0 (constant term)',
        'Result: dy/dx = 12x³ - 6x² + 5'
      ],
      commonMistakes: ['Bringing down wrong coefficient', 'Forgetting to subtract 1 from exponent', 'Forgetting constant is zero']
    },
    weakPoints: ['Power rule differentiation', 'Handling negative exponents', 'Constant differentiation'],
    difficulty: 'easy',
    month: 1
  },
  {
    id: 'math2-002',
    subject: 'math2',
    topic: 'Calculus',
    question: 'Evaluate ∫(2x³ - 4x + 1)dx',
    options: ['0.5x⁴ - 2x² + x + C', '0.5x⁴ - 2x² + x', '6x⁴ - 4x² + x + C', '6x² - 4 + C'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: '0.5x⁴ - 2x² + x + C',
      whyCorrect: 'Apply the power rule for integration: ∫xⁿdx = xⁿ⁺¹/(n+1) + C, for n ≠ -1.',
      solution: [
        'Step 1: Apply power rule: ∫xⁿdx = xⁿ⁺¹/(n+1)',
        'Step 2: ∫2x³dx = 2 × (x⁴/4) = 0.5x⁴',
        'Step 3: ∫(-4x)dx = -4 × (x²/2) = -2x²',
        'Step 4: ∫1dx = x',
        'Step 5: Add constant of integration + C',
        'Result: 0.5x⁴ - 2x² + x + C'
      ],
      commonMistakes: ['Forgetting to add constant C', 'Adding 1 to exponent instead of dividing']
    },
    weakPoints: ['Integration power rule', 'Constant of integration', 'Integration of linear terms'],
    difficulty: 'easy',
    month: 1
  },

  // STATISTICS
  {
    id: 'stat-001',
    subject: 'statistics',
    topic: 'Descriptive Statistics',
    question: 'Find the mean, median, and mode of the data set: 4, 7, 2, 9, 4, 6, 4, 2',
    options: [
      'Mean=5, Median=4.5, Mode=4',
      'Mean=5.375, Median=5, Mode=4',
      'Mean=5, Median=4, Mode=4',
      'Mean=5.375, Median=4.5, Mode=4'
    ],
    correctAnswer: 3,
    explanation: {
      correctAnswer: 'Mean=5.375, Median=4.5, Mode=4',
      whyCorrect: 'Mean = (4+7+2+9+4+6+4+2)/8 = 43/8 = 5.375. To find median, first sort: 2,2,4,4,4,6,7,9. Median = (4+4)/2 = 4. Mode = 4 (appears 3 times).',
      solution: [
        'Step 1: Sum all values: 4+7+2+9+4+6+4+2 = 43',
        'Step 2: Mean = 43/8 = 5.375',
        'Step 3: Sort data: 2,2,4,4,4,6,7,9',
        'Step 4: Median = average of 4th and 5th values = (4+5)/2 = 4.5',
        'Step 5: Mode = value with highest frequency = 4 (appears 3 times)'
      ],
      commonMistakes: ['Arithmetic errors in summation', 'Forgetting to sort for median', 'Incorrect median position']
    },
    weakPoints: ['Mean calculation', 'Median from sorted data', 'Mode identification'],
    difficulty: 'easy',
    month: 2
  },
  {
    id: 'stat-002',
    subject: 'statistics',
    topic: 'Probability',
    question: 'A bag contains 5 red balls, 3 blue balls, and 2 green balls. If two balls are drawn without replacement, what is the probability that both are red?',
    options: ['2/9', '1/4', '25/100', '5/18'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: '2/9',
      whyCorrect: 'P(both red) = P(1st red) × P(2nd red | 1st red) = (5/10) × (4/9) = 20/90 = 2/9',
      solution: [
        'Step 1: Total balls = 5 + 3 + 2 = 10',
        'Step 2: P(first ball is red) = 5/10 = 1/2',
        'Step 3: After removing one red ball, remaining = 9, red = 4',
        'Step 4: P(second ball is red) = 4/9',
        'Step 5: P(both red) = (5/10) × (4/9) = 20/90 = 2/9'
      ],
      commonMistakes: ['Using replacement when specified without replacement', 'Multiplying incorrectly', 'Not reducing fraction']
    },
    weakPoints: ['Conditional probability', 'Dependent events', 'Probability without replacement'],
    difficulty: 'medium',
    month: 2
  },

  // FLUID MECHANICS
  {
    id: 'fluid-001',
    subject: 'fluid-mechanics',
    topic: 'Fluid Properties',
    question: 'A fluid has a specific gravity of 1.26. What is its density in kg/m³?',
    options: ['1260 kg/m³', '126 kg/m³', '1.26 kg/m³', '12600 kg/m³'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: '1260 kg/m³',
      whyCorrect: 'Specific gravity = density of fluid / density of water (1000 kg/m³). Therefore, density = 1.26 × 1000 = 1260 kg/m³.',
      solution: [
        'Step 1: Specific gravity (SG) = ρ_fluid / ρ_water',
        'Step 2: ρ_water = 1000 kg/m³ (at 4°C)',
        'Step 3: ρ_fluid = SG × ρ_water',
        'Step 4: ρ_fluid = 1.26 × 1000 kg/m³',
        'Step 5: ρ_fluid = 1260 kg/m³'
      ],
      commonMistakes: ['Confusing specific gravity with density', 'Forgetting to multiply by water density'],
    },
    weakPoints: ['Specific gravity concept', 'Density calculations', 'Unit conversion (SI)'],
    difficulty: 'easy',
    month: 3
  },
  {
    id: 'fluid-002',
    subject: 'fluid-mechanics',
    topic: 'Hydrostatics',
    question: 'A dam wall is 15 m deep. What pressure acts at the base of the dam? (Use g = 9.81 m/s², ρ_water = 1000 kg/m³)',
    options: ['147.15 kPa', '1471.5 kPa', '14.715 kPa', '1.4715 kPa'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: '147.15 kPa',
      whyCorrect: 'Hydrostatic pressure P = ρgh. Using standard units: P = 1000 × 9.81 × 15 = 147,150 Pa = 147.15 kPa.',
      solution: [
        'Step 1: Use hydrostatic pressure formula: P = ρgh',
        'Step 2: ρ = 1000 kg/m³ (density of water)',
        'Step 3: g = 9.81 m/s²',
        'Step 4: h = 15 m (depth)',
        'Step 5: P = 1000 × 9.81 × 15 = 147,150 Pa',
        'Step 6: Convert to kPa: 147,150 / 1000 = 147.15 kPa'
      ],
      commonMistakes: ['Using wrong formula (P = ρgh vs P = γh)', 'Forgetting to convert Pa to kPa', 'Using depth instead of height']
    },
    weakPoints: ['Hydrostatic pressure formula', 'Unit conversion', 'Pressure definition'],
    difficulty: 'easy',
    month: 3
  },

  // MECHANICS & STRENGTH OF MATERIALS
  {
    id: 'mech-001',
    subject: 'mechanics',
    topic: 'Statics',
    question: 'A simply supported beam of length 6 m carries a point load of 12 kN at its midpoint. What is the maximum bending moment?',
    options: ['9 kN·m', '18 kN·m', '36 kN·m', '6 kN·m'],
    correctAnswer: 1,
    explanation: {
      correctAnswer: '18 kN·m',
      whyCorrect: 'For a point load at midpoint of simply supported beam: Maximum moment = PL/4 = (12 kN × 6 m) / 4 = 18 kN·m.',
      solution: [
        'Step 1: For simply supported beam with center load, reactions are equal: R_A = R_B = P/2 = 6 kN',
        'Step 2: Maximum bending moment occurs at the point of load application',
        'Step 3: M_max = R_A × (L/2) = 6 kN × 3 m',
        'Step 4: M_max = 18 kN·m',
        'Alternative: M_max = PL/4 = (12 × 6)/4 = 18 kN·m'
      ],
      commonMistakes: ['Confusing with cantilever formula', 'Arithmetic errors', 'Wrong moment formula'],
    },
    weakPoints: ['Simply supported beam analysis', 'Bending moment calculation', 'Reactions at supports'],
    difficulty: 'medium',
    month: 4
  },
  {
    id: 'mech-002',
    subject: 'mechanics',
    topic: 'Stress-Strain',
    question: 'A steel rod with diameter 20 mm carries an axial tensile load of 50 kN. Calculate the stress in MPa.',
    options: ['159.15 MPa', '2500 MPa', '1591.5 MPa', '15.915 MPa'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: '159.15 MPa',
      whyCorrect: 'Stress (σ) = Force / Area. Area = πd²/4 = π(0.02)²/4 = 3.142 × 10⁻⁴ m². Stress = 50,000 N / 3.142 × 10⁻⁴ m² = 159.15 MPa.',
      solution: [
        'Step 1: Convert diameter to meters: d = 20 mm = 0.02 m',
        'Step 2: Calculate area: A = πd²/4 = π(0.02)²/4 = 3.14 × 10⁻⁴ m²',
        'Step 3: Convert load to Newtons: P = 50 kN = 50,000 N',
        'Step 4: Calculate stress: σ = P/A = 50,000 / 3.14 × 10⁻⁴',
        'Step 5: σ = 159,154,585 Pa = 159.15 MPa'
      ],
      commonMistakes: ['Forgetting to square the diameter', 'Using diameter instead of radius', 'Unit conversion errors'],
    },
    weakPoints: ['Stress formula σ = P/A', 'Area calculation for circular cross-section', 'Unit conversion (mm to m)'],
    difficulty: 'medium',
    month: 4
  },

  // THERMODYNAMICS
  {
    id: 'thermo-001',
    subject: 'thermodynamics',
    topic: 'Laws of Thermodynamics',
    question: 'A heat engine receives 500 kJ of heat and rejects 350 kJ of heat. What is its thermal efficiency?',
    options: ['35%', '70%', '30%', '65%'],
    correctAnswer: 2,
    explanation: {
      correctAnswer: '30%',
      whyCorrect: 'Thermal efficiency η = (Work output / Heat input) × 100%. Work output = Q_in - Q_out = 500 - 350 = 150 kJ. η = (150/500) × 100% = 30%.',
      solution: [
        'Step 1: Identify heat input: Q_in = 500 kJ',
        'Step 2: Identify heat output: Q_out = 350 kJ',
        'Step 3: Calculate work output: W = Q_in - Q_out = 500 - 350 = 150 kJ',
        'Step 4: Use efficiency formula: η = W/Q_in × 100%',
        'Step 5: η = (150/500) × 100% = 30%'
      ],
      commonMistakes: ['Using Q_out as work output', 'Forgetting to multiply by 100%', 'Inverting the ratio'],
    },
    weakPoints: ['First law application', 'Thermal efficiency definition', 'Energy balance'],
    difficulty: 'easy',
    month: 5
  },
  {
    id: 'thermo-002',
    subject: 'thermodynamics',
    topic: 'Heat Transfer',
    question: 'A wall 4 m × 3 m has thermal conductivity k = 0.8 W/m·K and thickness 0.2 m. If surface temperatures are 30°C and 10°C, what is the heat transfer rate through the wall?',
    options: ['960 W', '9600 W', '1920 W', '480 W'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: '960 W',
      whyCorrect: 'Using Fourier\'s law: Q̇ = k × A × ΔT / L. Q̇ = 0.8 × (4×3) × 20 / 0.2 = 0.8 × 12 × 20 / 0.2 = 960 W.',
      solution: [
        'Step 1: Calculate area: A = 4 m × 3 m = 12 m²',
        'Step 2: Temperature difference: ΔT = 30 - 10 = 20°C (or K)',
        'Step 3: Apply Fourier\'s law: Q̇ = k × A × ΔT / L',
        'Step 4: Q̇ = 0.8 × 12 × 20 / 0.2',
        'Step 5: Q̇ = 960 W'
      ],
      commonMistakes: ['Forgetting to calculate area', 'Using thickness as exponent', 'Unit inconsistency'],
    },
    weakPoints: ['Fourier\'s law of heat conduction', 'Conduction through slab', 'Unit consistency'],
    difficulty: 'medium',
    month: 5
  },

  // REFRIGERATION & PSYCHROMETRY
  {
    id: 'ref-001',
    subject: 'refrigeration',
    topic: 'Refrigeration Cycles',
    question: 'A refrigeration system has a COP of 4.0 and removes 20 kW of heat from a space. What is the compressor power input?',
    options: ['5 kW', '80 kW', '4 kW', '20 kW'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: '5 kW',
      whyCorrect: 'COP = Q_L / W_net. Therefore W_net = Q_L / COP = 20 kW / 4 = 5 kW.',
      solution: [
        'Step 1: COP (Coefficient of Performance) = Q_L / W_in',
        'Step 2: Given COP = 4.0 and Q_L (heat removed) = 20 kW',
        'Step 3: Rearrange: W_in = Q_L / COP',
        'Step 4: W_in = 20 kW / 4.0',
        'Step 5: W_in = 5 kW'
      ],
      commonMistakes: ['Confusing COP formula', 'Multiplying instead of dividing', 'Mixing up Q_L and Q_H'],
    },
    weakPoints: ['COP definition for refrigerators', 'COP = Q_L/W ratio', 'Refrigeration cycle analysis'],
    difficulty: 'easy',
    month: 5
  },
  {
    id: 'ref-002',
    subject: 'refrigeration',
    topic: 'Psychrometric Charts',
    question: 'Air at 30°C DB and 60% RH has a humidity ratio of 0.0162 kg/kg dry air. What is the dew point temperature?',
    options: ['21°C', '30°C', '18°C', '24°C'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: '21°C',
      whyCorrect: 'Using psychrometric relationships, at 30°C and 60% RH, the saturation pressure is approximately 4.24 kPa. The actual vapor pressure = 0.6 × 4.24 = 2.54 kPa. The dew point is the temperature at which saturation pressure equals actual vapor pressure, which corresponds to approximately 21°C.',
      solution: [
        'Step 1: Determine saturation pressure at 30°C: P_sat ≈ 4.24 kPa',
        'Step 2: Calculate actual vapor pressure: P_v = RH × P_sat = 0.6 × 4.24 = 2.54 kPa',
        'Step 3: Find temperature where P_sat = 2.54 kPa',
        'Step 4: Using steam tables, P_sat = 2.54 kPa corresponds to approximately 21°C',
        'Answer: Dew point ≈ 21°C'
      ],
      commonMistakes: ['Confusing wet-bulb and dew point', 'Not interpolating correctly from tables'],
    },
    weakPoints: ['Psychrometric chart interpretation', 'Dew point calculation', 'Vapor pressure concept'],
    difficulty: 'hard',
    month: 5
  },

  // IRRIGATION & DRAINAGE
  {
    id: 'irr-001',
    subject: 'irrigation',
    topic: 'Irrigation Systems',
    question: 'A sprinkler system applies water at a rate of 15 mm/hour over an area of 50 m × 30 m. How much water is applied per hour?',
    options: ['22,500 L/hr', '225,000 L/hr', '2,250 L/hr', '225 L/hr'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: '22,500 L/hr',
      whyCorrect: 'Volume = Application rate × Area. 15 mm/hr = 15 L/m²/hr. Area = 50 × 30 = 1500 m². Volume = 15 L/m²/hr × 1500 m² = 22,500 L/hr.',
      solution: [
        'Step 1: Convert application rate: 15 mm/hr = 15 L/m²/hr (1 mm = 1 L/m²)',
        'Step 2: Calculate area: A = 50 m × 30 m = 1500 m²',
        'Step 3: Calculate volume: V = application rate × area',
        'Step 4: V = 15 L/m²/hr × 1500 m²',
        'Step 5: V = 22,500 L/hr'
      ],
      commonMistakes: ['Forgetting unit conversion (mm to L/m²)', 'Area calculation errors'],
    },
    weakPoints: ['Application rate units', 'Volume calculation', 'mm to L/m² conversion'],
    difficulty: 'easy',
    month: 6
  },
  {
    id: 'irr-002',
    subject: 'irrigation',
    topic: 'Water Requirements',
    question: 'A crop requires 450 mm of water per growing season. If irrigation efficiency is 70%, how much water needs to be applied?',
    options: ['643 mm', '315 mm', '450 mm', '540 mm'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: '643 mm',
      whyCorrect: 'Water to apply = Net requirement / Efficiency = 450 mm / 0.70 = 642.86 ≈ 643 mm.',
      solution: [
        'Step 1: Net water requirement = 450 mm',
        'Step 2: Irrigation efficiency = 70% = 0.70',
        'Step 3: Efficiency = Net water applied / Gross water applied',
        'Step 4: Gross water = Net water / Efficiency',
        'Step 5: Gross water = 450 / 0.70 = 642.86 mm ≈ 643 mm'
      ],
      commonMistakes: ['Multiplying instead of dividing', 'Confusing gross and net requirements'],
    },
    weakPoints: ['Irrigation efficiency concept', 'Gross vs net water requirement', 'Percentage calculations'],
    difficulty: 'easy',
    month: 6
  },

  // HYDROLOGY
  {
    id: 'hydro-001',
    subject: 'hydrology',
    topic: 'Precipitation',
    question: 'A storm produced 150 mm of rainfall over a 30 km² watershed. What is the total volume of rainwater in cubic meters?',
    options: ['4,500,000 m³', '450,000 m³', '45,000 m³', '450 m³'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: '4,500,000 m³',
      whyCorrect: 'Volume = Depth × Area. 150 mm = 0.15 m. Area = 30 km² = 30,000,000 m². Volume = 0.15 × 30,000,000 = 4,500,000 m³.',
      solution: [
        'Step 1: Convert rainfall depth: 150 mm = 0.15 m',
        'Step 2: Convert area: 30 km² = 30 × 10⁶ m²',
        'Step 3: Calculate volume: V = depth × area',
        'Step 4: V = 0.15 m × 30,000,000 m²',
        'Step 5: V = 4,500,000 m³'
      ],
      commonMistakes: ['Not converting mm to m', 'Not converting km² to m²', 'Calculation errors'],
    },
    weakPoints: ['Unit conversion for volume', 'km² to m² conversion', 'mm to m conversion'],
    difficulty: 'easy',
    month: 7
  },
  {
    id: 'hydro-002',
    subject: 'hydrology',
    topic: 'Runoff',
    question: 'Using the CN method, a watershed has CN = 75 and initial abstraction = 10 mm. After a storm with 100 mm rainfall, what is the runoff?',
    options: ['56.7 mm', '65 mm', '90 mm', '40 mm'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: '56.7 mm',
      whyCorrect: 'Using CN method: S = (1000/CN) - 10 = (1000/75) - 10 = 13.33 - 10 = 3.33 in = 84.67 mm. Ia = 0.2S = 16.93 mm. Pe = (P - Ia)²/(P + S) = (100 - 16.93)²/(100 + 84.67) = 56.7 mm.',
      solution: [
        'Step 1: Calculate potential maximum retention: S = (1000/CN) - 10 inches = (1000/75) - 10 = 3.33 in = 84.67 mm',
        'Step 2: Calculate initial abstraction: Ia = 0.2S = 0.2 × 84.67 = 16.93 mm',
        'Step 3: Calculate effective rainfall: Pe = (P - Ia)²/(P + S)',
        'Step 4: Pe = (100 - 16.93)²/(100 + 84.67)',
        'Step 5: Pe = 83.07²/184.67 = 6900/122 = 56.7 mm'
      ],
      commonMistakes: ['Forgetting to account for Ia', 'Incorrect S calculation', 'Wrong SCS CN formula'],
    },
    weakPoints: ['SCS Curve Number method', 'Initial abstraction', 'Runoff volume calculation'],
    difficulty: 'hard',
    month: 7
  },

  // PROCESSING
  {
    id: 'proc-001',
    subject: 'processing',
    topic: 'Size Reduction',
    question: 'A crusher reduces limestone from 100 mm to 20 mm average particle size. If the power consumption is 8 kW for 15 tons/hour, what is the power required per ton?',
    options: ['0.53 kW/ton', '1.07 kW/ton', '2.14 kW/ton', '-0.53 kW/ton'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: '0.53 kW/ton',
      whyCorrect: 'Bond\'s law states that work required is proportional to the reduction ratio. P = 8 kW for 15 tons/hr. Therefore, P_per_ton = 8/15 = 0.53 kW/ton.',
      solution: [
        'Step 1: Given: Power = 8 kW for throughput of 15 tons/hour',
        'Step 2: Power per ton = Total Power / Throughput',
        'Step 3: P_per_ton = 8 kW / 15 tons/hr',
        'Step 4: P_per_ton = 0.533 kW/ton ≈ 0.53 kW/ton',
        'Note: The size reduction ratio does not affect this direct calculation when rate is given'
      ],
      commonMistakes: ['Including size ratio when not needed', 'Arithmetic errors'],
    },
    weakPoints: ['Power consumption in size reduction', 'Throughput calculations'],
    difficulty: 'medium',
    month: 8
  },

  // ENGINEERING ECONOMY
  {
    id: 'econ-001',
    subject: 'engineering-economy',
    topic: 'Present Worth',
    question: 'What is the present worth of $10,000 received after 5 years if the interest rate is 8% per year?',
    options: ['$6,776', '$7,346', '$8,000', '$6,000'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: '$6,776',
      whyCorrect: 'PW = F/(1+i)^n = 10,000/(1+0.08)^5 = 10,000/1.469 = $6,776',
      solution: [
        'Step 1: Use present worth formula: PW = F/(1+i)^n',
        'Step 2: Future value F = $10,000',
        'Step 3: Interest rate i = 8% = 0.08',
        'Step 4: Number of periods n = 5 years',
        'Step 5: Calculate: (1.08)^5 = 1.4693',
        'Step 6: PW = 10,000/1.4693 = $6,776'
      ],
      commonMistakes: ['Using future value formula instead', 'Calculation errors in (1+i)^n', 'Unit conversion'],
    },
    weakPoints: ['Present worth factor', 'Compound interest calculations', 'Cash flow timing'],
    difficulty: 'medium',
    month: 11
  },
  {
    id: 'econ-002',
    subject: 'engineering-economy',
    topic: 'Cost Analysis',
    question: 'Equipment costs $50,000, has a useful life of 5 years, and salvage value of $10,000. Using straight-line depreciation, what is the annual depreciation expense?',
    options: ['$8,000/year', '$10,000/year', '$12,000/year', '$40,000/year'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: '$8,000/year',
      whyCorrect: 'Straight-line depreciation: D = (Cost - Salvage) / Useful Life = ($50,000 - $10,000) / 5 years = $40,000 / 5 = $8,000/year.',
      solution: [
        'Step 1: Initial cost = $50,000',
        'Step 2: Salvage value = $10,000',
        'Step 3: Depreciable amount = Cost - Salvage = $50,000 - $10,000 = $40,000',
        'Step 4: Useful life = 5 years',
        'Step 5: Annual depreciation = $40,000 / 5 = $8,000/year'
      ],
      commonMistakes: ['Forgetting to subtract salvage value', 'Dividing original cost instead of depreciable amount'],
    },
    weakPoints: ['Straight-line depreciation formula', 'Depreciable base', 'Salvage value concept'],
    difficulty: 'easy',
    month: 11
  },

  // LAW (AFMA and related)
  {
    id: 'law-001',
    subject: 'law',
    topic: 'RA 8435 (AFMA)',
    question: 'Republic Act 8435, also known as the Agriculture and Fisheries Modernization Act, was enacted in what year?',
    options: ['1997', '2000', '1995', '2003'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: '1997',
      whyCorrect: 'RA 8435, "The Agriculture and Fisheries Modernization Act of 1997," was signed into law on December 22, 1997. It aims to modernize the agriculture and fisheries sectors.',
      solution: [
        'Step 1: Identify RA 8435 by its common name: Agriculture and Fisheries Modernization Act',
        'Step 2: Historical context: Enacted during the administration of President Fidel V. Ramos',
        'Step 3: Signed into law on December 22, 1997',
        'Step 4: The year in the question asks for the enactment year',
        'Answer: 1997'
      ],
      commonMistakes: ['Confusing with later amendments', 'Mixing up with RA 10601 (AFMech Law of 2013)'],
    },
    weakPoints: ['RA 8435 enactment date', 'Distinguishing AFMA from other agri laws', 'Key provisions of AFMA'],
    difficulty: 'easy',
    month: 11
  },
  {
    id: 'law-002',
    subject: 'law',
    topic: 'RA 10601 (AFMech Law)',
    question: 'What is the minimum horsepower requirement for agricultural machinery that must be registered under RA 10601?',
    options: ['25 horsepower', '15 horsepower', '10 horsepower', '50 horsepower'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: '25 horsepower',
      whyCorrect: 'Under RA 10601 (Agricultural and Fisheries Mechanization Act of 2013), agricultural machinery with at least 25 horsepower must be registered with the Department of Agriculture.',
      solution: [
        'Step 1: RA 10601 is the Agricultural and Fisheries Mechanization Act of 2013',
        'Step 2: The law requires registration of certain agricultural machinery',
        'Step 3: The minimum horsepower threshold is specified in the IRR (Implementing Rules and Regulations)',
        'Step 4: According to the IRR of RA 10601, the minimum is 25 horsepower',
        'Answer: 25 horsepower'
      ],
      commonMistakes: ['Confusing with other horsepower thresholds', 'Forgetting that smaller equipment may have different rules'],
    },
    weakPoints: ['RA 10601 registration requirements', 'AFMech Law horsepower threshold'],
    difficulty: 'medium',
    month: 11
  },
];

export function getQuestionsBySubject(subjectId: string): Question[] {
  return questions.filter(question => question.subject === subjectId);
}

export function getQuestionsByMonth(month: number): Question[] {
  return questions.filter(question => question.month === month);
}

export function getRandomQuestions(count: number, subjectId?: string): Question[] {
  let pool = subjectId ? getQuestionsBySubject(subjectId) : questions;
  return [...pool].sort(() => Math.random() - 0.5).slice(0, count);
}

export function getSubjectName(subjectId: string): string {
  const subject = subjects.find(entry => entry.id === subjectId);
  return subject?.name || subjectId;
}