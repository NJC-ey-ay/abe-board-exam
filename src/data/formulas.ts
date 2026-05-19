// Comprehensive Formula Reference for ABE Board Exam
// All formulas organized by topic with descriptions

export interface Formula {
  id: string;
  name: string;
  formula: string;
  description: string;
  topic: string;
  area: 'A' | 'B' | 'C';
  constants?: { symbol: string; value: string; description: string }[];
  application?: string;
}

export const formulas: Formula[] = [
  // ==================== AREA A: POWER, MACHINERY & ENGINEERING ====================

  // Fluid Mechanics (also used in Area B)
  {
    id: 'fluid-001',
    name: 'Hydrostatic Pressure',
    formula: 'P = ρgh',
    description: 'Pressure at a depth in a fluid',
    topic: 'Fluid Mechanics',
    area: 'A',
    constants: [
      { symbol: 'ρ', value: 'density (kg/m³)', description: 'fluid density' },
      { symbol: 'g', value: '9.81 m/s²', description: 'gravitational acceleration' },
      { symbol: 'h', value: 'm', description: 'depth from surface' }
    ],
    application: 'Calculating pressure at the bottom of dams, tanks, submerged surfaces'
  },
  {
    id: 'fluid-002',
    name: 'Bernoulli\'s Equation',
    formula: 'P₁/ρg + v₁²/2g + z₁ = P₂/ρg + v₂²/2g + z₂',
    description: 'Conservation of energy in fluid flow',
    topic: 'Fluid Mechanics',
    area: 'A',
    application: 'Flow measurement, pump calculations, pipeline analysis'
  },
  {
    id: 'fluid-003',
    name: 'Continuity Equation',
    formula: 'Q = A × v = A₁v₁ = A₂v₂',
    description: 'Conservation of mass in steady flow',
    topic: 'Fluid Mechanics',
    area: 'A',
    application: 'Flow rates in pipes, channel design'
  },
  {
    id: 'fluid-004',
    name: 'Reynolds Number',
    formula: 'Re = ρvD/μ = vD/ν',
    description: 'Determines flow regime (laminar/turbulent)',
    topic: 'Fluid Mechanics',
    area: 'A',
    constants: [
      { symbol: 'Re < 2000', value: 'Laminar', description: 'smooth flow' },
      { symbol: 'Re > 4000', value: 'Turbulent', description: 'chaotic flow' }
    ],
    application: 'Pipe flow classification, pipe roughness selection'
  },
  {
    id: 'fluid-005',
    name: 'Darcy-Weisbach Equation',
    formula: 'h_f = f (L/D) (v²/2g)',
    description: 'Head loss due to friction in pipes',
    topic: 'Fluid Mechanics',
    area: 'A',
    application: 'Pipeline design, pumping requirements'
  },
  {
    id: 'fluid-006',
    name: 'Pump Power',
    formula: 'P = ρgQH/η',
    description: 'Power required by a pump',
    topic: 'Fluid Mechanics',
    area: 'A',
    application: 'Pump sizing, motor selection'
  },
  {
    id: 'fluid-007',
    name: 'Specific Speed (Pump)',
    formula: 'N_s = N√Q/H^0.75',
    description: 'Characterizes pump type',
    topic: 'Fluid Mechanics',
    area: 'A',
    application: 'Pump type selection'
  },
  {
    id: 'fluid-008',
    name: 'Weir Flow Rate',
    formula: 'Q = Cd × L × H^1.5',
    description: 'Flow over a weir',
    topic: 'Fluid Mechanics',
    area: 'A',
    application: 'Measuring flow in open channels'
  },
  {
    id: 'fluid-009',
    name: 'Manning\'s Equation',
    formula: 'V = (1/n) × R^0.67 × S^0.5',
    description: 'Open channel flow velocity',
    topic: 'Fluid Mechanics',
    area: 'A',
    constants: [
      { symbol: 'n', value: 'Manning\'s roughness', description: 'channel roughness coefficient' },
      { symbol: 'R', value: 'A/P', description: 'hydraulic radius' },
      { symbol: 'S', value: 'bed slope', description: 'energy slope' }
    ],
    application: 'Open channel design, canal capacity'
  },

  // Thermodynamics
  {
    id: 'thermo-001',
    name: 'First Law of Thermodynamics',
    formula: 'Q = ΔU + W',
    description: 'Energy conservation',
    topic: 'Thermodynamics',
    area: 'A',
    application: 'Heat engines, refrigeration cycles'
  },
  {
    id: 'thermo-002',
    name: 'Heat Transfer (Conduction)',
    formula: 'Q̇ = kA(ΔT/L)',
    description: 'Fourier\'s law of heat conduction',
    topic: 'Thermodynamics',
    area: 'A',
    application: 'Insulation design, heat exchangers'
  },
  {
    id: 'thermo-003',
    name: 'Heat Transfer (Convection)',
    formula: 'Q̇ = hAΔT',
    description: 'Newton\'s law of cooling',
    topic: 'Thermodynamics',
    area: 'A',
    application: 'Cooling of structures, engines'
  },
  {
    id: 'thermo-004',
    name: 'Thermal Efficiency',
    formula: 'η = W/Q_H = 1 - Q_L/Q_H',
    description: 'Heat engine efficiency',
    topic: 'Thermodynamics',
    area: 'A',
    application: 'Evaluating engine performance'
  },
  {
    id: 'thermo-005',
    name: 'COP (Refrigerator)',
    formula: 'COP_R = Q_L/W_in = Q_L/(Q_H - Q_L)',
    description: 'Coefficient of Performance',
    topic: 'Thermodynamics',
    area: 'A',
    application: 'Refrigeration system evaluation'
  },
  {
    id: 'thermo-006',
    name: 'Overall Heat Transfer Coefficient',
    formula: '1/U = 1/h_i + L/k + 1/h_o',
    description: 'Combined heat transfer through layers',
    topic: 'Thermodynamics',
    area: 'A',
    application: 'Composite wall heat transfer'
  },

  // Internal Combustion Engine
  {
    id: 'ice-001',
    name: 'Indicated Horsepower',
    formula: 'IP = (P_L × L × A × N) / 2',
    description: 'Power developed in cylinder',
    topic: 'ICE',
    area: 'A',
    application: 'Engine power calculation'
  },
  {
    id: 'ice-002',
    name: 'Brake Horsepower',
    formula: 'BHP = (2π × N × T) / 33000',
    description: 'Useful power output',
    topic: 'ICE',
    area: 'A',
    application: 'Engine rating'
  },
  {
    id: 'ice-003',
    name: 'Mechanical Efficiency',
    formula: 'η_m = BHP/IHP',
    description: 'Mechanical losses in engine',
    topic: 'ICE',
    area: 'A',
    application: 'Engine efficiency evaluation'
  },
  {
    id: 'ice-004',
    name: 'Volumetric Efficiency',
    formula: 'η_v = (Actual air intake)/(Displacement volume) × 100%',
    description: 'Engine aspiration efficiency',
    topic: 'ICE',
    area: 'A',
    application: 'Supercharger/turbocharger evaluation'
  },
  {
    id: 'ice-005',
    name: 'Specific Fuel Consumption',
    formula: 'SFC = Fuel consumption (kg/hr) / BHP',
    description: 'Fuel efficiency measure',
    topic: 'ICE',
    area: 'A',
    application: 'Engine fuel economy'
  },
  {
    id: 'ice-006',
    name: 'Displacement Volume',
    formula: 'V_d = (π/4) × D² × L × n',
    description: 'Total cylinder volume displaced',
    topic: 'ICE',
    area: 'A',
    application: 'Engine sizing'
  },

  // Power and Machinery
  {
    id: 'power-001',
    name: 'Belt Tension Ratio',
    formula: 'T₁/T₂ = e^(μθ)',
    description: 'Belt drive tension relationship',
    topic: 'Power Transmission',
    area: 'A',
    application: 'Belt drive design'
  },
  {
    id: 'power-002',
    name: 'Gear Ratio',
    formula: 'GR = N₁/N₂ = T₂/T₁ = D₂/D₁',
    description: 'Speed and torque relationship',
    topic: 'Power Transmission',
    area: 'A',
    application: 'Gearbox design'
  },
  {
    id: 'power-003',
    name: 'Tractive Effort',
    formula: 'TE = W × μ',
    description: 'Pulling force from wheels',
    topic: 'Tractor Mechanics',
    area: 'A',
    constants: [{ symbol: 'μ', value: '0.6-0.9', description: 'traction coefficient on concrete' }],
    application: 'Tractor performance'
  },
  {
    id: 'power-004',
    name: 'Drawbar Power',
    formula: 'DBP = TE × V / 375',
    description: 'Power available for pulling',
    topic: 'Tractor Mechanics',
    area: 'A',
    application: 'Field performance calculation'
  },

  // Engineering Economy
  {
    id: 'econ-001',
    name: 'Present Worth',
    formula: 'PW = F/(1+i)^n',
    description: 'Future value to present value',
    topic: 'Engineering Economy',
    area: 'A',
    application: 'Project evaluation'
  },
  {
    id: 'econ-002',
    name: 'Future Worth',
    formula: 'F = P(1+i)^n',
    description: 'Present to future value',
    topic: 'Engineering Economy',
    area: 'A',
    application: 'Investment growth'
  },
  {
    id: 'econ-003',
    name: 'Annual Worth',
    formula: 'A = P × [i(1+i)^n]/[(1+i)^n - 1]',
    description: 'Uniform annual equivalent',
    topic: 'Engineering Economy',
    area: 'A',
    application: 'Loan amortization, project comparison'
  },
  {
    id: 'econ-004',
    name: 'Benefit-Cost Ratio',
    formula: 'B/C = Benefits/Costs',
    description: 'Project viability measure',
    topic: 'Engineering Economy',
    area: 'A',
    application: 'Public project evaluation'
  },
  {
    id: 'econ-005',
    name: 'Straight-Line Depreciation',
    formula: 'D = (Cost - Salvage) / Life',
    description: 'Annual depreciation expense',
    topic: 'Engineering Economy',
    area: 'A',
    application: 'Asset valuation'
  },

  // ==================== AREA B: LAND AND WATER RESOURCES ====================

  // Hydrology
  {
    id: 'hydro-001',
    name: 'Runoff Volume (SCS CN)',
    formula: 'Q = (P - I_a)² / (P - I_a + S)',
    description: 'SCS Curve Number method',
    topic: 'Hydrology',
    area: 'B',
    constants: [
      { symbol: 'I_a', value: '0.2S', description: 'initial abstraction' },
      { symbol: 'S', value: '(1000/CN) - 10', description: 'potential max retention' }
    ],
    application: 'Storm runoff estimation'
  },
  {
    id: 'hydro-002',
    name: 'Rational Method',
    formula: 'Q = CiA',
    description: 'Peak runoff rate',
    topic: 'Hydrology',
    area: 'B',
    constants: [
      { symbol: 'C', value: 'runoff coefficient', description: 'depends on land use' },
      { symbol: 'i', value: 'intensity', description: 'rainfall intensity' },
      { symbol: 'A', value: 'area', description: 'watershed area' }
    ],
    application: 'Urban drainage design'
  },
  {
    id: 'hydro-003',
    name: 'Rainfall Intensity',
    formula: 'i = a/(t + b)^c',
    description: 'IDF relationship',
    topic: 'Hydrology',
    area: 'B',
    application: 'Storm drainage design'
  },
  {
    id: 'hydro-004',
    name: 'Water Balance',
    formula: 'P = R + ET + DS',
    description: 'Hydrologic cycle equation',
    topic: 'Hydrology',
    area: 'B',
    application: 'Watershed budgeting'
  },
  {
    id: 'hydro-005',
    name: 'Darcy\'s Law (Groundwater)',
    formula: 'Q = K × A × i',
    description: 'Groundwater flow',
    topic: 'Hydrology',
    area: 'B',
    application: 'Well yield, aquifer testing'
  },
  {
    id: 'hydro-006',
    name: 'Specific Yield',
    formula: 'S_y = V_w / V_t',
    description: 'Aquifer storage capacity',
    topic: 'Hydrology',
    area: 'B',
    application: 'Groundwater resource evaluation'
  },

  // Irrigation and Drainage
  {
    id: 'irr-001',
    name: 'Crop Water Requirement',
    formula: 'ET_c = K_c × ET_o',
    description: 'Crop evapotranspiration',
    topic: 'Irrigation',
    area: 'B',
    application: 'Irrigation scheduling'
  },
  {
    id: 'irr-002',
    name: 'Irrigation Efficiency',
    formula: 'Efficacy = (Water stored)/(Water applied)',
    description: 'Overall irrigation efficiency',
    topic: 'Irrigation',
    area: 'B',
    application: 'Irrigation system evaluation'
  },
  {
    id: 'irr-003',
    name: 'Net Irrigation Requirement',
    formula: 'NIR = ET_c - P_e - GW',
    description: 'Net water needed by crop',
    topic: 'Irrigation',
    area: 'B',
    application: 'Irrigation planning'
  },
  {
    id: 'irr-004',
    name: 'Gross Irrigation Requirement',
    formula: 'GIR = NIR / Efficiency',
    description: 'Total water to apply',
    topic: 'Irrigation',
    area: 'B',
    application: 'Water source sizing'
  },
  {
    id: 'irr-005',
    name: 'Sprinkler Application Rate',
    formula: 'I = q / A',
    description: 'Water application rate',
    topic: 'Irrigation',
    area: 'B',
    application: 'Sprinkler system design'
  },
  {
    id: 'irr-006',
    name: 'Drip Irrigation Frequency',
    formula: 'f = nS_dS_l / (q × E_a × 1000)',
    description: 'Time between irrigations',
    topic: 'Irrigation',
    area: 'B',
    application: 'Drip system scheduling'
  },
  {
    id: 'irr-007',
    name: 'Soil Infiltration Rate',
    formula: 'f = f_c + (f_o - f_c)e^(-kt)',
    description: 'Kostiakov infiltration model',
    topic: 'Irrigation',
    area: 'B',
    application: 'Basin irrigation design'
  },

  // Soil Mechanics
  {
    id: 'soil-001',
    name: 'Soil Bulk Density',
    formula: 'ρ_b = M_s / V_t',
    description: 'Dry soil mass per total volume',
    topic: 'Soil Properties',
    area: 'B',
    application: 'Soil compaction, porosity'
  },
  {
    id: 'soil-002',
    name: 'Porosity',
    formula: 'n = (V_v / V_t) × 100%',
    description: 'Void space percentage',
    topic: 'Soil Properties',
    area: 'B',
    application: 'Soil structure evaluation'
  },
  {
    id: 'soil-003',
    name: 'Soil Moisture Content',
    formula: 'θ = (W_w - W_d) / W_d × 100%',
    description: 'Water content by weight',
    topic: 'Soil Properties',
    area: 'B',
    application: 'Irrigation scheduling'
  },
  {
    id: 'soil-004',
    name: 'Hydraulic Conductivity',
    formula: 'K = QL/(AΔh)',
    description: 'Darcy\'s law for soil',
    topic: 'Soil Properties',
    area: 'B',
    application: 'Drainage design'
  },

  // ==================== AREA C: STRUCTURES, ENVIRONMENT, BIOPROCESS ====================

  // Strength of Materials
  {
    id: 'strength-001',
    name: 'Normal Stress',
    formula: 'σ = P/A',
    description: 'Axial stress',
    topic: 'Strength of Materials',
    area: 'C',
    application: 'Structural member design'
  },
  {
    id: 'strength-002',
    name: 'Shear Stress',
    formula: 'τ = V/A',
    description: 'Shear force stress',
    topic: 'Strength of Materials',
    area: 'C',
    application: 'Bolted/jointed connections'
  },
  {
    id: 'strength-003',
    name: 'Bending Stress',
    formula: 'σ = My/I',
    description: 'Flexural stress',
    topic: 'Strength of Materials',
    area: 'C',
    application: 'Beam design'
  },
  {
    id: 'strength-004',
    name: 'Moment of Inertia',
    formula: 'I = ΣAd²',
    description: 'Section property for bending',
    topic: 'Strength of Materials',
    area: 'C',
    application: 'Structural member selection'
  },
  {
    id: 'strength-005',
    name: 'Section Modulus',
    formula: 'Z = I/y',
    description: 'Strength section property',
    topic: 'Strength of Materials',
    area: 'C',
    application: 'Beam capacity'
  },
  {
    id: 'strength-006',
    name: 'Beam Deflection',
    formula: 'δ = PL³/3EI (cantilever)',
    description: 'Elastic beam deflection',
    topic: 'Strength of Materials',
    area: 'C',
    application: 'Serviceability checks'
  },
  {
    id: 'strength-007',
    name: 'Euler\'s Buckling Load',
    formula: 'P_cr = π²EI/(KL)²',
    description: 'Critical buckling load',
    topic: 'Strength of Materials',
    area: 'C',
    application: 'Column design'
  },
  {
    id: 'strength-008',
    name: 'Strain',
    formula: 'ε = δ/L = σ/E',
    description: 'Linear strain',
    topic: 'Strength of Materials',
    area: 'C',
    application: 'Material deformation'
  },

  // Structural Analysis
  {
    id: 'struct-001',
    name: 'Bending Moment (Simply Supported)',
    formula: 'M_max = PL/4',
    description: 'Max moment at center load',
    topic: 'Structural Analysis',
    area: 'C',
    application: 'Simply supported beam design'
  },
  {
    id: 'struct-002',
    name: 'Shear Force',
    formula: 'V = P/2',
    description: 'Max shear at supports',
    topic: 'Structural Analysis',
    area: 'C',
    application: 'Beam shear design'
  },
  {
    id: 'struct-003',
    name: 'Fixed Beam End Moments',
    formula: 'M = PL/8',
    description: 'Fixed end moments',
    topic: 'Structural Analysis',
    area: 'C',
    application: 'Continuous beam analysis'
  },
  {
    id: 'struct-004',
    name: 'Cantilever Deflection',
    formula: 'δ_max = 5wL⁴/384EI',
    description: 'Uniformly distributed load',
    topic: 'Structural Analysis',
    area: 'C',
    application: 'Roof deflection'
  },

  // Psychrometrics
  {
    id: 'psych-001',
    name: 'Humidity Ratio',
    formula: 'W = 0.622 × P_v / (P - P_v)',
    description: 'Mass of water per mass of dry air',
    topic: 'Psychrometrics',
    area: 'C',
    application: 'Air conditioning calculations'
  },
  {
    id: 'psych-002',
    name: 'Relative Humidity',
    formula: 'φ = P_v / P_vs × 100%',
    description: 'Actual to saturation vapor pressure',
    topic: 'Psychrometrics',
    area: 'C',
    application: 'Comfort assessment'
  },
  {
    id: 'psych-003',
    name: 'Enthalpy',
    formula: 'h = 1.005T + W(2501 + 1.88T)',
    description: 'Specific enthalpy of moist air',
    topic: 'Psychrometrics',
    area: 'C',
    application: 'Cooling/heating load'
  },
  {
    id: 'psych-004',
    name: 'Dew Point Temperature',
    formula: 'T_d = [243.5 × ln(RH/100) + (17.67 × T)] / [17.67 - ln(RH/100)]',
    description: 'Temperature at which dew forms',
    topic: 'Psychrometrics',
    area: 'C',
    application: 'Condensation prediction'
  },

  // Food Processing
  {
    id: 'food-001',
    name: 'Drying Rate',
    formula: 'dm/dt = -h_m × A × ρ × (Y - Y_eq)',
    description: 'Moisture removal rate',
    topic: 'Food Processing',
    area: 'C',
    application: 'Grain drying design'
  },
  {
    id: 'food-002',
    name: 'Fick\'s Law of Diffusion',
    formula: 'N = -D × dC/dx',
    description: 'Mass transfer rate',
    topic: 'Food Processing',
    area: 'C',
    application: 'Drying, absorption processes'
  },
  {
    id: 'food-003',
    name: 'Shelf Life',
    formula: 't = ln(S_0/S) / k',
    description: 'Time to reach safe quality',
    topic: 'Food Processing',
    area: 'C',
    application: 'Product storage life'
  },
  {
    id: 'food-004',
    name: 'Thermal Death Time',
    formula: 't = (2.303/k) × log(N_0/N)',
    description: 'Sterilization time',
    topic: 'Food Processing',
    area: 'C',
    application: 'Pasteurization/sterilization'
  },
  {
    id: 'food-005',
    name: 'Refrigeration Load',
    formula: 'Q = m × C_p × ΔT',
    description: 'Heat removal requirement',
    topic: 'Food Processing',
    area: 'C',
    application: 'Cold storage design'
  },

  // MATHEMATICS (used across all areas)
  {
    id: 'math-001',
    name: 'Quadratic Formula',
    formula: 'x = (-b ± √(b² - 4ac)) / 2a',
    description: 'Solution to ax² + bx + c = 0',
    topic: 'Algebra',
    area: 'B',
    application: 'Solving quadratic equations'
  },
  {
    id: 'math-002',
    name: 'Derivative (Power Rule)',
    formula: 'd/dx(xⁿ) = n·xⁿ⁻¹',
    description: 'Differentiation',
    topic: 'Calculus',
    area: 'B',
    application: 'Rate problems, optimization'
  },
  {
    id: 'math-003',
    name: 'Integration (Power Rule)',
    formula: '∫xⁿdx = xⁿ⁺¹/(n+1) + C',
    description: 'Integration for n ≠ -1',
    topic: 'Calculus',
    area: 'B',
    application: 'Areas, volumes, work'
  },
  {
    id: 'math-004',
    name: 'Trigonometric Identity',
    formula: 'sin²θ + cos²θ = 1',
    description: 'Fundamental identity',
    topic: 'Trigonometry',
    area: 'B',
    application: 'Simplifying expressions'
  },
  {
    id: 'math-005',
    name: 'Law of Sines',
    formula: 'a/sinA = b/sinB = c/sinC',
    description: 'Triangle side-angle relationship',
    topic: 'Trigonometry',
    area: 'B',
    application: 'Oblique triangle solutions'
  },
  {
    id: 'math-006',
    name: 'Law of Cosines',
    formula: 'c² = a² + b² - 2ab·cosC',
    description: 'Triangle side relationship',
    topic: 'Trigonometry',
    area: 'B',
    application: 'Side/angle calculations'
  },
  {
    id: 'math-007',
    name: 'Mean',
    formula: 'x̄ = Σxᵢ/n',
    description: 'Average value',
    topic: 'Statistics',
    area: 'B',
    application: 'Data analysis'
  },
  {
    id: 'math-008',
    name: 'Standard Deviation',
    formula: 'σ = √[Σ(xᵢ - x̄)²/(n-1)]',
    description: 'Spread measure',
    topic: 'Statistics',
    area: 'B',
    application: 'Variability assessment'
  },
  {
    id: 'math-009',
    name: 'Z-Score',
    formula: 'z = (x - μ)/σ',
    description: 'Standardized score',
    topic: 'Statistics',
    area: 'B',
    application: 'Normal distribution'
  },
  {
    id: 'math-010',
    name: 'Permutation',
    formula: 'P(n,r) = n!/(n-r)!',
    description: 'Arrangement count',
    topic: 'Combinatorics',
    area: 'B',
    application: 'Probability calculations'
  },
  {
    id: 'math-011',
    name: 'Combination',
    formula: 'C(n,r) = n!/[r!(n-r)!]',
    description: 'Selection count',
    topic: 'Combinatorics',
    area: 'B',
    application: 'Probability calculations'
  },
  {
    id: 'math-012',
    name: 'First Order ODE',
    formula: 'dy/dx + Py = Q',
    description: 'Linear differential equation',
    topic: 'Differential Equations',
    area: 'B',
    application: 'Engineering systems'
  },
  {
    id: 'math-013',
    name: 'Area Between Curves',
    formula: 'A = ∫[a,b] (f(x) - g(x))dx',
    description: 'Calculus area',
    topic: 'Calculus',
    area: 'B',
    application: 'Geometric problems'
  }
];

export const formulasByTopic = formulas.reduce((acc, formula) => {
  if (!acc[formula.topic]) {
    acc[formula.topic] = [];
  }
  acc[formula.topic].push(formula);
  return acc;
}, {} as Record<string, Formula[]>);

export const formulasByArea = {
  A: formulas.filter(formula => formula.area === 'A'),
  B: formulas.filter(formula => formula.area === 'B'),
  C: formulas.filter(formula => formula.area === 'C')
};

export function getFormulasByTopic(topic: string): Formula[] {
  return formulasByTopic[topic] || [];
}

export function getAllTopics(): string[] {
  return [...new Set(formulas.map(formula => formula.topic))].sort();
}