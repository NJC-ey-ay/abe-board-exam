export interface Formula {
  id: string;
  name: string;
  formula: string;
  variables: { symbol: string; meaning: string }[];
  notes?: string;
  workedExample?: { scenario: string; steps: { formula: string; result: string }[]; answer: string };
}

export interface FormulaCategory {
  area: string;
  areaCode: string;
  color: string;
  topics: { topic: string; formulas: Formula[] }[];
}

export const areaFormulas: FormulaCategory[] = [
  {
    area: 'Power, Energy & Machinery',
    areaCode: 'A',
    color: 'primary',
    topics: [
      {
        topic: 'Field Capacity & Performance',
        formulas: [
          {
            id: 'a-efc',
            name: 'Effective Field Capacity',
            formula: 'C_a = \\frac{W \\times S \\times E}{10}',
            variables: [
              { symbol: 'C_a', meaning: 'Effective field capacity (ha/h)' },
              { symbol: 'W', meaning: 'Working width (m)' },
              { symbol: 'S', meaning: 'Travel speed (km/h)' },
              { symbol: 'E', meaning: 'Field efficiency (decimal)' },
            ],
            notes: 'Also written EFC = TFC × E. If speed is in m/min use C_a = (W × S × 60) / 10000.',
            workedExample: {
              scenario: 'A tractor pulls a 2.0 m wide tiller at 6 km/h with 82% field efficiency.',
              steps: [
                { formula: 'C_t = \\frac{W \\cdot S}{10} = \\frac{2.0 \\cdot 6}{10}', result: '1.20 ha/h' },
                { formula: 'C_a = C_t \\cdot E = 1.20 \\times 0.82', result: '0.98 ha/h' },
                { formula: 'E = \\frac{C_a}{C_t} \\times 100\\% = \\frac{0.98}{1.20} \\times 100\\%', result: '82%' },
              ],
              answer: 'Theoretical 1.20 ha/h, effective 0.98 ha/h, field efficiency 82%.',
            },
          },
          {
            id: 'a-tfc',
            name: 'Theoretical Field Capacity',
            formula: 'C_t = \\frac{W \\times S}{10}',
            variables: [
              { symbol: 'C_t', meaning: 'Theoretical field capacity (ha/h)' },
              { symbol: 'W', meaning: 'Working width (m)' },
              { symbol: 'S', meaning: 'Travel speed (km/h)' },
            ],
            notes: 'Hypothetical capacity at 100% efficiency (no time losses).',
          },
          {
            id: 'a-field-efficiency',
            name: 'Field Efficiency',
            formula: 'E = \\frac{C_a}{C_t} \\times 100\\%',
            variables: [
              { symbol: 'E', meaning: 'Field efficiency (%)' },
              { symbol: 'C_a', meaning: 'Actual/effective field capacity (ha/h)' },
              { symbol: 'C_t', meaning: 'Theoretical field capacity (ha/h)' },
            ],
          },
          {
            id: 'a-multirow-efc',
            name: 'Multi-row Planter/Seeder Capacity',
            formula: 'C = \\frac{N \\times S_p \\times S \\times E}{10}',
            variables: [
              { symbol: 'C', meaning: 'Effective capacity (ha/h)' },
              { symbol: 'N', meaning: 'Number of rows' },
              { symbol: 'S_p', meaning: 'Row spacing (m)' },
              { symbol: 'S', meaning: 'Speed (km/h)' },
              { symbol: 'E', meaning: 'Efficiency (decimal)' },
            ],
            notes: 'Uses total working width = N × S_p.',
          },
          {
            id: 'a-harvest-output',
            name: 'Total Harvest Output',
            formula: 'O = C \\times Y \\times t',
            variables: [
              { symbol: 'O', meaning: 'Total output/quantity (t)' },
              { symbol: 'C', meaning: 'Field capacity (ha/h)' },
              { symbol: 'Y', meaning: 'Crop yield (t/ha)' },
              { symbol: 't', meaning: 'Operating time (h)' },
            ],
          },
          {
            id: 'a-machine-time',
            name: 'Machine Operating Time',
            formula: 'T = \\frac{A}{C}',
            variables: [
              { symbol: 'T', meaning: 'Operating time (h)' },
              { symbol: 'A', meaning: 'Area covered (ha)' },
              { symbol: 'C', meaning: 'Field capacity (ha/h)' },
            ],
            notes: 'Rearranged form of Area = Capacity × Time.',
          },
          {
            id: 'a-boom-application',
            name: 'Boom Application Rate',
            formula: 'R = \\frac{q}{C_a}',
            variables: [
              { symbol: 'R', meaning: 'Application rate (L/ha)' },
              { symbol: 'q', meaning: 'Total nozzle discharge (L/min)' },
              { symbol: 'C_a', meaning: 'Area coverage rate (ha/min)' },
            ],
            notes: 'Also solved as R (L/ha) = (L/min) ÷ (ha/min) for sprayer setups.',
          },
          {
            id: 'a-fuel-per-area',
            name: 'Fuel Consumption per Area',
            formula: 'FC = \\frac{V}{A}',
            variables: [
              { symbol: 'FC', meaning: 'Fuel used per hectare (L/ha)' },
              { symbol: 'V', meaning: 'Total fuel consumed (L)' },
              { symbol: 'A', meaning: 'Area worked (ha)' },
            ],
          },
          {
            id: 'chain-field-capacity',
            name: 'Field Capacity Chain (TFC → EFC → E)',
            formula: 'C_t = \\frac{W S}{10},\\; C_a = C_t E,\\; E = \\frac{C_a}{C_t} \\times 100\\%',
            variables: [
              { symbol: 'C_t', meaning: 'Theoretical field capacity (ha/h)' },
              { symbol: 'C_a', meaning: 'Effective field capacity (ha/h)' },
              { symbol: 'E', meaning: 'Field efficiency (%)' },
              { symbol: 'W', meaning: 'Working width (m)' },
              { symbol: 'S', meaning: 'Travel speed (km/h)' },
            ],
            notes: 'Given width, speed and efficiency: find TFC, then EFC = TFC × E, then E = EFC/TFC. EFC is always ≤ TFC because of time losses.',
            workedExample: {
              scenario: 'A 1.8 m rotary tiller at 5 km/h, 85% field efficiency.',
              steps: [
                { formula: 'C_t = \\frac{1.8 \\times 5}{10}', result: '0.90 ha/h' },
                { formula: 'C_a = 0.90 \\times 0.85', result: '0.765 ha/h' },
                { formula: 'E = \\frac{0.765}{0.90} \\times 100\\%', result: '85%' },
              ],
              answer: 'TFC 0.90 ha/h, EFC 0.77 ha/h, field efficiency 85%.',
            },
          },
        ],
      },
      {
        topic: 'Harvesting & Threshing',
        formulas: [
          {
            id: 'a-thresher-capacity',
            name: 'Machine (Thresher) Capacity',
            formula: 'C_a = \\frac{W_g}{T_t}',
            variables: [
              { symbol: 'C_a', meaning: 'Actual capacity (kg/h or t/h)' },
              { symbol: 'W_g', meaning: 'Grain output (kg or t)' },
              { symbol: 'T_t', meaning: 'Threshing time (h)' },
            ],
          },
          {
            id: 'a-threshing-loss',
            name: 'Total Threshing Loss',
            formula: 'L_t = L_b + L_s + L_u + L_{sc}',
            variables: [
              { symbol: 'L_t', meaning: 'Total threshing loss (kg)' },
              { symbol: 'L_b', meaning: 'Blower loss' },
              { symbol: 'L_s', meaning: 'Separation loss' },
              { symbol: 'L_u', meaning: 'Unthreshed grain loss' },
              { symbol: 'L_{sc}', meaning: 'Scattering loss' },
            ],
          },
          {
            id: 'a-loss-percent',
            name: 'Percentage Loss',
            formula: 'L\\% = \\frac{L}{W_g + L} \\times 100\\%',
            variables: [
              { symbol: 'L\\%', meaning: 'Loss as a percentage (%)' },
              { symbol: 'L', meaning: 'Total grain loss (kg)' },
              { symbol: 'W_g', meaning: 'Grain output (kg)' },
            ],
          },
          {
            id: 'a-threshing-efficiency',
            name: 'Threshing Efficiency',
            formula: '\\eta_t = \\frac{M_t}{M_{total}} \\times 100\\%',
            variables: [
              { symbol: '\\eta_t', meaning: 'Threshing efficiency (%)' },
              { symbol: 'M_t', meaning: 'Threshed grain fed out (kg)' },
              { symbol: 'M_{total}', meaning: 'Total grain input (kg)' },
            ],
            notes: 'PAES: ≥ 98% for mechanical threshers.',
          },
        ],
      },
      {
        topic: 'Engine Performance',
        formulas: [
          {
            id: 'a-drawbar-power',
            name: 'Drawbar Power',
            formula: 'P_{db} = \\frac{F \\times S}{3.6}',
            variables: [
              { symbol: 'P_{db}', meaning: 'Drawbar power (kW)' },
              { symbol: 'F', meaning: 'Draft/drawbar force (kN)' },
              { symbol: 'S', meaning: 'Travel speed (km/h)' },
            ],
            notes: '3.6 converts km/h to m/s (and kN·m/s to kW).',
          },
          {
            id: 'a-dbhp',
            name: 'Drawbar Horsepower',
            formula: 'HP = \\frac{F \\times S}{745.7}',
            variables: [
              { symbol: 'HP', meaning: 'Drawbar horsepower (hp)' },
              { symbol: 'F', meaning: 'Drawbar pull (N)' },
              { symbol: 'S', meaning: 'Speed (m/s)' },
            ],
            notes: '1 hp = 745.7 W. In lb·mph units use HP = (F × S) / 375.',
          },
          {
            id: 'a-dbhp-from-bp',
            name: 'Drawbar Power from Brake Power',
            formula: 'DBHP = BP \\times \\eta_m \\times \\eta_t',
            variables: [
              { symbol: 'DBHP', meaning: 'Drawbar power (kW)' },
              { symbol: 'BP', meaning: 'Brake power (kW)' },
              { symbol: '\\eta_m', meaning: 'Mechanical efficiency (decimal)' },
              { symbol: '\\eta_t', meaning: 'Traction efficiency (decimal)' },
            ],
            notes: 'Chain form: BP → (transmission) → PTO → (drive/tractive) → drawbar.',
          },
          {
            id: 'a-pto-power',
            name: 'PTO Power',
            formula: 'P_{PTO} = BP \\times \\eta_{trans}',
            variables: [
              { symbol: 'P_{PTO}', meaning: 'PTO power (kW)' },
              { symbol: 'BP', meaning: 'Brake power (kW)' },
              { symbol: '\\eta_{trans}', meaning: 'Transmission efficiency (decimal)' },
            ],
          },
          {
            id: 'a-indicated-power',
            name: 'Indicated Power (4-stroke)',
            formula: 'IP = \\frac{MEP \\times V_d \\times N}{60000}',
            variables: [
              { symbol: 'IP', meaning: 'Indicated power (kW)' },
              { symbol: 'MEP', meaning: 'Mean effective pressure (kPa)' },
              { symbol: 'V_d', meaning: 'Total displacement (L or cm³ consistent with MEP)' },
              { symbol: 'N', meaning: 'Engine speed (RPM)' },
            ],
            notes: '4-stroke uses 60,000; 2-stroke uses 30,000. Same form with BMEP gives BHP when also dividing by 2 for 4-stroke.',
          },
          {
            id: 'a-brake-power',
            name: 'Brake Power',
            formula: 'BP = IP - FP',
            variables: [
              { symbol: 'BP', meaning: 'Brake power (kW)' },
              { symbol: 'IP', meaning: 'Indicated power (kW)' },
              { symbol: 'FP', meaning: 'Friction power (kW)' },
            ],
            notes: 'Also BHP = IP × η_mec. For 4-stroke from BMEP: BHP = (BMEP × V_d × N) / (2 × 60000).',
          },
          {
            id: 'a-mech-efficiency',
            name: 'Mechanical Efficiency',
            formula: '\\eta_{mec} = \\frac{BP}{IP} \\times 100\\%',
            variables: [
              { symbol: '\\eta_{mec}', meaning: 'Mechanical efficiency (%)' },
              { symbol: 'BP', meaning: 'Brake power (kW)' },
              { symbol: 'IP', meaning: 'Indicated power (kW)' },
            ],
          },
          {
            id: 'a-effective-pull',
            name: 'Effective/Net Pull',
            formula: 'P_{eff} = P_{pull} - \\text{load}',
            variables: [
              { symbol: 'P_{eff}', meaning: 'Net available pull (kN)' },
              { symbol: 'P_{pull}', meaning: 'Drawbar pull (kN)' },
              { symbol: '\\text{load}', meaning: 'Towed load resistance (kN)' },
            ],
          },
          {
            id: 'a-power-torque',
            name: 'Power–Torque Relationship',
            formula: 'T = \\frac{9549 \\times P}{N}',
            variables: [
              { symbol: 'T', meaning: 'Torque (N·m)' },
              { symbol: 'P', meaning: 'Power (kW)' },
              { symbol: 'N', meaning: 'Rotational speed (RPM)' },
            ],
            notes: '9549 converts kW/RPM to N·m. For hp use P = (T × N) / 9550. General form: P = T × ω.',
          },
        ],
      },
      {
        topic: 'Engine Geometry & Combustion',
        formulas: [
          {
            id: 'a-displacement',
            name: 'Total Engine Displacement',
            formula: 'V_d = n \\times \\frac{\\pi}{4} \\times B^2 \\times L',
            variables: [
              { symbol: 'V_d', meaning: 'Total displacement (cm³, or L/1000)' },
              { symbol: 'n', meaning: 'Number of cylinders' },
              { symbol: 'B', meaning: 'Cylinder bore (cm)' },
              { symbol: 'L', meaning: 'Stroke length (cm)' },
            ],
            notes: 'Divide cm³ by 1000 to get liters.',
          },
          {
            id: 'a-compression-ratio',
            name: 'Compression Ratio',
            formula: 'CR = \\frac{V_d + V_c}{V_c}',
            variables: [
              { symbol: 'CR', meaning: 'Compression ratio' },
              { symbol: 'V_d', meaning: 'Displacement volume (cm³)' },
              { symbol: 'V_c', meaning: 'Clearance volume (cm³)' },
            ],
            notes: 'Also CR = Total volume ÷ Clearance volume.',
          },
          {
            id: 'a-displacement-from-cr',
            name: 'Displacement from Compression Ratio',
            formula: 'V_d = V_c \\times (CR - 1)',
            variables: [
              { symbol: 'V_d', meaning: 'Displacement volume (cm³)' },
              { symbol: 'V_c', meaning: 'Clearance volume (cm³)' },
              { symbol: 'CR', meaning: 'Compression ratio' },
            ],
          },
          {
            id: 'a-clearance-volume',
            name: 'Clearance Volume',
            formula: 'V_c = V_t - V_d',
            variables: [
              { symbol: 'V_c', meaning: 'Clearance volume (cm³)' },
              { symbol: 'V_t', meaning: 'Total cylinder volume (cm³)' },
              { symbol: 'V_d', meaning: 'Displacement volume (cm³)' },
            ],
          },
        ],
      },
      {
        topic: 'Fuel & Heat',
        formulas: [
          {
            id: 'a-fuel-volume',
            name: 'Fuel Consumption (Volume)',
            formula: 'V = \\frac{BP \\times SFC}{\\rho}',
            variables: [
              { symbol: 'V', meaning: 'Fuel consumption (L/h)' },
              { symbol: 'BP', meaning: 'Brake power (kW or hp)' },
              { symbol: 'SFC', meaning: 'Specific fuel consumption (kg/kW·h)' },
              { symbol: '\\rho', meaning: 'Fuel density (kg/L)' },
            ],
          },
          {
            id: 'a-sfc',
            name: 'Specific Fuel Consumption',
            formula: 'SFC = \\frac{m_f}{P \\times t}',
            variables: [
              { symbol: 'SFC', meaning: 'Specific fuel consumption (kg/kW·h)' },
              { symbol: 'm_f', meaning: 'Fuel mass consumed (kg)' },
              { symbol: 'P', meaning: 'Engine power (kW)' },
              { symbol: 't', meaning: 'Operating time (h)' },
            ],
            notes: 'From volume: SFC = (fuel L/h × ρ) ÷ power.',
          },
          {
            id: 'a-heat-input',
            name: 'Heat Input from Fuel',
            formula: 'Q_{in} = BP \\times SFC \\times CV',
            variables: [
              { symbol: 'Q_{in}', meaning: 'Heat input rate (MJ/h)' },
              { symbol: 'BP', meaning: 'Brake power' },
              { symbol: 'SFC', meaning: 'Specific fuel consumption' },
              { symbol: 'CV', meaning: 'Calorific/heating value (MJ/kg)' },
            ],
            notes: 'CV of diesel ≈ 42 MJ/kg.',
          },
          {
            id: 'a-thermal-eff',
            name: 'Thermal Efficiency',
            formula: '\\eta_{th} = \\frac{W_{out}}{Q_{in}} \\times 100\\%',
            variables: [
              { symbol: '\\eta_{th}', meaning: 'Thermal efficiency (%)' },
              { symbol: 'W_{out}', meaning: 'Useful work output' },
              { symbol: 'Q_{in}', meaning: 'Heat energy input' },
            ],
          },
          {
            id: 'a-heat-balance',
            name: 'Engine Heat Balance',
            formula: 'Q_{fuel} = Q_{brake} + Q_{cool} + Q_{exhaust} + Q_{friction}',
            variables: [
              { symbol: 'Q_{fuel}', meaning: 'Total fuel heat energy' },
              { symbol: 'Q_{brake}', meaning: 'Useful brake work' },
              { symbol: 'Q_{cool}', meaning: 'Cooling system losses' },
              { symbol: 'Q_{exhaust}', meaning: 'Exhaust losses' },
              { symbol: 'Q_{friction}', meaning: 'Friction losses' },
            ],
          },
        ],
      },
      {
        topic: 'Power Transmission',
        formulas: [
          {
            id: 'a-overall-efficiency',
            name: 'Overall Efficiency Chain',
            formula: '\\eta_{total} = \\eta_1 \\times \\eta_2 \\times \\cdots \\times \\eta_n',
            variables: [
              { symbol: '\\eta_{total}', meaning: 'Overall efficiency' },
              { symbol: '\\eta_i', meaning: 'Individual stage efficiency (decimal)' },
            ],
            notes: 'Series efficiencies multiply. Always convert % to decimal first.',
          },
          {
            id: 'a-powertrain',
            name: 'Power Train Efficiency',
            formula: '\\eta = \\eta_{trans} \\times \\eta_{drive} \\times \\eta_{tractive}',
            variables: [
              { symbol: '\\eta', meaning: 'Total power train efficiency' },
              { symbol: '\\eta_{trans}', meaning: 'Transmission efficiency' },
              { symbol: '\\eta_{drive}', meaning: 'Final drive efficiency' },
              { symbol: '\\eta_{tractive}', meaning: 'Track/wheel (tractive) efficiency' },
            ],
          },
        ],
      },
      {
        topic: 'Traction & Draft',
        formulas: [
          {
            id: 'a-draft',
            name: 'Implement Draft (Disc Plow)',
            formula: 'D = n \\times w \\times d \\times K',
            variables: [
              { symbol: 'D', meaning: 'Total draft force (kN)' },
              { symbol: 'n', meaning: 'Number of bottoms/discs' },
              { symbol: 'w', meaning: 'Width per bottom (m)' },
              { symbol: 'd', meaning: 'Working depth (m)' },
              { symbol: 'K', meaning: 'Soil specific resistance (kN/m²)' },
            ],
          },
          {
            id: 'a-traction',
            name: 'Traction Force (Available Pull)',
            formula: 'F = \\mu \\times W',
            variables: [
              { symbol: 'F', meaning: 'Traction force (kN)' },
              { symbol: '\\mu', meaning: 'Traction coefficient' },
              { symbol: 'W', meaning: 'Dynamic weight on driving wheels (kN)' },
            ],
          },
          {
            id: 'a-hydraulic-pump',
            name: 'Hydraulic/PTO Pump Power',
            formula: 'P_{hyd} = P_{PTO} \\times \\eta_{pump}',
            variables: [
              { symbol: 'P_{hyd}', meaning: 'Hydraulic power output' },
              { symbol: 'P_{PTO}', meaning: 'PTO power input' },
              { symbol: '\\eta_{pump}', meaning: 'Pump efficiency (decimal)' },
            ],
            notes: 'Hydraulic power also P = Q × ΔP ÷ η (flow × pressure).',
          },
        ],
      },
      {
        topic: 'Fluid Mechanics & Water Scheduling',
        formulas: [
          {
            id: 'a-hydrostatic',
            name: 'Hydrostatic Pressure',
            formula: 'P = \\rho g h',
            variables: [
              { symbol: 'P', meaning: 'Pressure (Pa)' },
              { symbol: '\\rho', meaning: 'Fluid density (kg/m³)' },
              { symbol: 'g', meaning: 'Gravity (9.81 m/s²)' },
              { symbol: 'h', meaning: 'Depth (m)' },
            ],
          },
          {
            id: 'a-continuity',
            name: 'Continuity Equation',
            formula: 'A_1 v_1 = A_2 v_2',
            variables: [
              { symbol: 'A_1', meaning: 'Area at section 1 (m²)' },
              { symbol: 'v_1', meaning: 'Velocity at section 1 (m/s)' },
              { symbol: 'A_2', meaning: 'Area at section 2 (m²)' },
              { symbol: 'v_2', meaning: 'Velocity at section 2 (m/s)' },
            ],
            notes: 'Conservation of mass for incompressible flow.',
          },
          {
            id: 'a-pump-power',
            name: 'Pump Power',
            formula: 'P = \\frac{\\rho g Q H}{\\eta}',
            variables: [
              { symbol: 'P', meaning: 'Pump power (W)' },
              { symbol: '\\rho', meaning: 'Fluid density (kg/m³)' },
              { symbol: 'g', meaning: 'Gravity (9.81 m/s²)' },
              { symbol: 'Q', meaning: 'Flow rate (m³/s)' },
              { symbol: 'H', meaning: 'Total head (m)' },
              { symbol: '\\eta', meaning: 'Pump efficiency (decimal)' },
            ],
            notes: 'Divide by 1000 for kW. Horsepower: divide by 745.7.',
          },
          {
            id: 'a-flow-volume-time',
            name: 'Water Volume from Flow',
            formula: 'V = Q \\times t',
            variables: [
              { symbol: 'V', meaning: 'Volume (m³)' },
              { symbol: 'Q', meaning: 'Flow rate (m³/h or L/s)' },
              { symbol: 't', meaning: 'Time (h or s)' },
            ],
            notes: 'Conversion: V (m³) = Q (L/s) × t (h) × 3.6.',
          },
        ],
      },
      {
        topic: 'Thermodynamics',
        formulas: [
          {
            id: 'a-fourier',
            name: "Fourier's Law (Conduction)",
            formula: '\\dot{Q} = \\frac{k A \\Delta T}{L}',
            variables: [
              { symbol: '\\dot{Q}', meaning: 'Heat transfer rate (W)' },
              { symbol: 'k', meaning: 'Thermal conductivity (W/m·K)' },
              { symbol: 'A', meaning: 'Area (m²)' },
              { symbol: '\\Delta T', meaning: 'Temperature difference (K)' },
              { symbol: 'L', meaning: 'Thickness (m)' },
            ],
          },
          {
            id: 'a-cop',
            name: 'Refrigeration COP',
            formula: 'COP = \\frac{Q_L}{W_{in}}',
            variables: [
              { symbol: 'COP', meaning: 'Coefficient of performance' },
              { symbol: 'Q_L', meaning: 'Heat removed from cold space (kJ)' },
              { symbol: 'W_{in}', meaning: 'Work input (kJ)' },
            ],
          },
          {
            id: 'a-carnot',
            name: 'Carnot Efficiency',
            formula: '\\eta_{max} = 1 - \\frac{T_C}{T_H}',
            variables: [
              { symbol: '\\eta_{max}', meaning: 'Maximum (Carnot) efficiency' },
              { symbol: 'T_C', meaning: 'Cold reservoir temperature (K)' },
              { symbol: 'T_H', meaning: 'Hot reservoir temperature (K)' },
            ],
            notes: 'Use absolute temperatures in Kelvin.',
          },
        ],
      },
      {
        topic: 'Sensors & Control',
        formulas: [
          {
            id: 'a-ndvi',
            name: 'Normalized Difference Vegetation Index (NDVI)',
            formula: 'NDVI = \\frac{NIR - Red}{NIR + Red}',
            variables: [
              { symbol: 'NDVI', meaning: 'Vegetation index (-1 to 1)' },
              { symbol: 'NIR', meaning: 'Near-infrared reflectance' },
              { symbol: 'Red', meaning: 'Red reflectance' },
            ],
          },
          {
            id: 'a-tipping-bucket',
            name: 'Rainfall (Tipping Bucket)',
            formula: 'R = N \\times k',
            variables: [
              { symbol: 'R', meaning: 'Total rainfall (mm)' },
              { symbol: 'N', meaning: 'Number of bucket tips' },
              { symbol: 'k', meaning: 'Calibration per tip (mm)' },
            ],
          },
          {
            id: 'a-dew-point',
            name: 'Dew Point (Magnus)',
            formula: 'T_{dp} = \\frac{237.3 \\times \\log(E/6.11)}{7.5 - \\log(E/6.11)}',
            variables: [
              { symbol: 'T_{dp}', meaning: 'Dew point (°C)' },
              { symbol: 'E', meaning: 'Actual vapor pressure (hPa)' },
            ],
          },
          {
            id: 'a-control-error',
            name: 'Control Error Signal',
            formula: 'e = SP - PV',
            variables: [
              { symbol: 'e', meaning: 'Error signal' },
              { symbol: 'SP', meaning: 'Set point (desired value)' },
              { symbol: 'PV', meaning: 'Process variable (measured value)' },
            ],
          },
        ],
      },
      {
        topic: 'Engineering Economy',
        formulas: [
          {
            id: 'a-simple-interest',
            name: 'Simple Interest',
            formula: 'A = P(1 + rt)',
            variables: [
              { symbol: 'A', meaning: 'Total amount' },
              { symbol: 'P', meaning: 'Principal' },
              { symbol: 'r', meaning: 'Annual interest rate (decimal)' },
              { symbol: 't', meaning: 'Time (years)' },
            ],
          },
          {
            id: 'a-present-worth',
            name: 'Present Worth',
            formula: 'PW = \\frac{F}{(1 + i)^n}',
            variables: [
              { symbol: 'PW', meaning: 'Present worth' },
              { symbol: 'F', meaning: 'Future value' },
              { symbol: 'i', meaning: 'Discount rate' },
              { symbol: 'n', meaning: 'Number of periods' },
            ],
          },
          {
            id: 'a-depreciation',
            name: 'Straight-line Depreciation',
            formula: 'D = \\frac{C - S}{n}',
            variables: [
              { symbol: 'D', meaning: 'Annual depreciation' },
              { symbol: 'C', meaning: 'Initial cost' },
              { symbol: 'S', meaning: 'Salvage value' },
              { symbol: 'n', meaning: 'Useful life (years)' },
            ],
          },
          {
            id: 'a-break-even',
            name: 'Break-even Point',
            formula: 'BEP = \\frac{FC}{P - VC}',
            variables: [
              { symbol: 'BEP', meaning: 'Break-even quantity' },
              { symbol: 'FC', meaning: 'Fixed costs' },
              { symbol: 'P', meaning: 'Price per unit' },
              { symbol: 'VC', meaning: 'Variable cost per unit' },
            ],
          },
          {
            id: 'a-capital-recovery',
            name: 'Capital Recovery (Annual Worth)',
            formula: 'AW = P \\times \\frac{i(1 + i)^n}{(1 + i)^n - 1}',
            variables: [
              { symbol: 'AW', meaning: 'Annual worth/recovery amount' },
              { symbol: 'P', meaning: 'Present investment' },
              { symbol: 'i', meaning: 'Interest rate' },
              { symbol: 'n', meaning: 'Number of periods' },
            ],
          },
          {
            id: 'a-npv',
            name: 'Net Present Value',
            formula: 'NPV = \\sum_{t=1}^{n} \\frac{CF_t}{(1 + r)^t} - I_0',
            variables: [
              { symbol: 'NPV', meaning: 'Net present value' },
              { symbol: 'CF_t', meaning: 'Cash flow in period t' },
              { symbol: 'r', meaning: 'Discount rate' },
              { symbol: 'I_0', meaning: 'Initial investment' },
            ],
          },
          {
            id: 'a-payback',
            name: 'Payback Period',
            formula: 'PBP = \\frac{C_{inv}}{S_{net}}',
            variables: [
              { symbol: 'PBP', meaning: 'Payback period (years)' },
              { symbol: 'C_{inv}', meaning: 'Initial investment' },
              { symbol: 'S_{net}', meaning: 'Annual net savings/income' },
            ],
          },
        ],
      },
      {
        topic: 'Budgets & Fee Standards',
        formulas: [
          {
            id: 'a-ps-allocation',
            name: 'Personal Services Budget Allocation',
            formula: 'PS \\le 0.4(PS + MOOE)',
            variables: [
              { symbol: 'PS', meaning: 'Personal services budget' },
              { symbol: 'MOOE', meaning: 'Maintenance & other operating expenses' },
            ],
            notes: 'Normative guideline for equipment/facility project budgets.',
          },
          {
            id: 'a-fs-cost',
            name: 'Feasibility Study Cost',
            formula: 'C_{FS} = 5\\% \\times C_{project}',
            variables: [
              { symbol: 'C_{FS}', meaning: 'Feasibility study cost' },
              { symbol: 'C_{project}', meaning: 'Total project cost' },
            ],
            notes: 'Planning/engineering standard: FS ≈ 5% of project cost.',
          },
          {
            id: 'a-admin-overhead',
            name: 'Administration Cost',
            formula: 'C_{admin} = 20\\%(PS + MOOE)',
            variables: [
              { symbol: 'C_{admin}', meaning: 'Administration overhead' },
              { symbol: 'PS', meaning: 'Personal services' },
              { symbol: 'MOOE', meaning: 'Maintenance & operating expenses' },
            ],
            notes: 'Total project cost = PS + MOOE + other costs.',
          },
        ],
      },
    ],
  },
  {
    area: 'Land & Water Resources',
    areaCode: 'B',
    color: 'green',
    topics: [
      {
        topic: 'Irrigation & Pumping',
        formulas: [
          {
            id: 'b-sprinkler-rate',
            name: 'Sprinkler Application Rate',
            formula: 'AR = \\frac{q \\times 3600}{S_l \\times S_s}',
            variables: [
              { symbol: 'AR', meaning: 'Application rate (mm/h)' },
              { symbol: 'q', meaning: 'Flow rate per sprinkler (L/s)' },
              { symbol: 'S_l', meaning: 'Lateral spacing (m)' },
              { symbol: 'S_s', meaning: 'Sprinkler spacing (m)' },
            ],
            notes: '3600 converts L/s to L/h; 1 L/m² = 1 mm.',
          },
          {
            id: 'b-sprinkler-spacing',
            name: 'Sprinkler Spacing',
            formula: 'S = \\sqrt{\\frac{q \\times 3600}{AR}}',
            variables: [
              { symbol: 'S', meaning: 'Square spacing (m)' },
              { symbol: 'q', meaning: 'Sprinkler flow (L/s)' },
              { symbol: 'AR', meaning: 'Desired application rate (mm/h)' },
            ],
          },
          {
            id: 'b-sprinkler-count',
            name: 'Number of Sprinklers',
            formula: 'N = \\frac{L}{S_l} \\times \\frac{W}{S_s}',
            variables: [
              { symbol: 'N', meaning: 'Total sprinklers' },
              { symbol: 'L', meaning: 'Field length (m)' },
              { symbol: 'W', meaning: 'Field width (m)' },
              { symbol: 'S_l', meaning: 'Lateral spacing (m)' },
              { symbol: 'S_s', meaning: 'Sprinkler spacing (m)' },
            ],
            notes: 'For square spacing: N = Area ÷ S².',
          },
          {
            id: 'b-pumping-time',
            name: 'Pumping Time',
            formula: 'T = \\frac{A \\times d \\times 10}{E \\times Q}',
            variables: [
              { symbol: 'T', meaning: 'Pumping time (h)' },
              { symbol: 'A', meaning: 'Area (ha)' },
              { symbol: 'd', meaning: 'Net depth applied (mm)' },
              { symbol: 'E', meaning: 'System efficiency (decimal)' },
              { symbol: 'Q', meaning: 'Flow rate (L/s)' },
            ],
            notes: '10 converts ha·mm to m³.',
          },
          {
            id: 'b-irrigation-efficiency',
            name: 'Irrigation Efficiency',
            formula: 'E_i = \\frac{W_s}{W_d} \\times 100\\%',
            variables: [
              { symbol: 'E_i', meaning: 'Irrigation efficiency (%)' },
              { symbol: 'W_s', meaning: 'Water stored in root zone' },
              { symbol: 'W_d', meaning: 'Water delivered' },
            ],
          },
          {
            id: 'b-gross-depth',
            name: 'Gross Irrigation Depth',
            formula: 'd_g = \\frac{d_n}{E}',
            variables: [
              { symbol: 'd_g', meaning: 'Gross depth (mm)' },
              { symbol: 'd_n', meaning: 'Net depth required (mm)' },
              { symbol: 'E', meaning: 'Application efficiency (decimal)' },
            ],
            notes: 'Also GIR (mm) = ET_c ÷ irrigation efficiency.',
          },
          {
            id: 'b-net-irrigation',
            name: 'Net Irrigation Requirement',
            formula: 'd_n = ET_c - P_e',
            variables: [
              { symbol: 'd_n', meaning: 'Net irrigation depth (mm)' },
              { symbol: 'ET_c', meaning: 'Crop evapotranspiration (mm)' },
              { symbol: 'P_e', meaning: 'Effective rainfall (mm)' },
            ],
          },
          {
            id: 'b-irrigation-interval',
            name: 'Irrigation Interval',
            formula: 'I = \\frac{D_{ad}}{C_u}',
            variables: [
              { symbol: 'I', meaning: 'Irrigation interval (days)' },
              { symbol: 'D_{ad}', meaning: 'Allowable depletion depth (mm)' },
              { symbol: 'C_u', meaning: 'Daily consumptive use (mm/day)' },
            ],
          },
          {
            id: 'b-irrigation-period',
            name: 'Irrigation Period (Duration)',
            formula: 't = \\frac{A \\times d}{AR}',
            variables: [
              { symbol: 't', meaning: 'Duration to irrigate (h)' },
              { symbol: 'A', meaning: 'Area (m²)' },
              { symbol: 'd', meaning: 'Depth applied (mm)' },
              { symbol: 'AR', meaning: 'Application rate (mm/h)' },
            ],
            notes: 'Converts to hours: V (m³) ÷ Q (m³/h).',
          },
          {
            id: 'b-drip-time',
            name: 'Drip Irrigation Time',
            formula: 't = \\frac{ET \\times S_p \\times S_l}{q_e}',
            variables: [
              { symbol: 't', meaning: 'Irrigation time (h/day)' },
              { symbol: 'ET', meaning: 'Evapotranspiration (mm/day)' },
              { symbol: 'S_p', meaning: 'Plant spacing (m)' },
              { symbol: 'S_l', meaning: 'Lateral spacing (m)' },
              { symbol: 'q_e', meaning: 'Emitter flow rate (L/h)' },
            ],
          },
          {
            id: 'b-total-irrigation',
            name: 'Total Irrigation Water',
            formula: 'V = \\frac{ET_c \\times A \\times N - P_e}{E_i}',
            variables: [
              { symbol: 'V', meaning: 'Total irrigation water (m³)' },
              { symbol: 'ET_c', meaning: 'Crop ET (m/day)' },
              { symbol: 'A', meaning: 'Area (m²)' },
              { symbol: 'N', meaning: 'Number of days' },
              { symbol: 'P_e', meaning: 'Effective rainfall (m³)' },
              { symbol: 'E_i', meaning: 'Irrigation efficiency (decimal)' },
            ],
          },
          {
            id: 'b-land-soaking',
            name: 'Land Soaking Requirement',
            formula: 'LSR = \\rho_b \\times d \\times \\theta_r + h_{sw}',
            variables: [
              { symbol: 'LSR', meaning: 'Soaking water depth (mm)' },
              { symbol: '\\rho_b', meaning: 'Bulk density (g/cm³)' },
              { symbol: 'd', meaning: 'Soil depth (mm)' },
              { symbol: '\\theta_r', meaning: 'Residual/deficit moisture (decimal)' },
              { symbol: 'h_{sw}', meaning: 'Standing water depth after soaking (mm)' },
            ],
          },
        ],
      },
      {
        topic: 'Hydrology & Runoff',
        formulas: [
          {
            id: 'b-runoff-volume',
            name: 'Annual Runoff Volume',
            formula: 'V = C \\times P \\times A',
            variables: [
              { symbol: 'V', meaning: 'Runoff volume (m³)' },
              { symbol: 'C', meaning: 'Runoff coefficient' },
              { symbol: 'P', meaning: 'Annual rainfall (m)' },
              { symbol: 'A', meaning: 'Catchment area (m²)' },
            ],
          },
          {
            id: 'b-runoff-budget',
            name: 'Runoff / Infiltration Budget',
            formula: 'V = A \\times (P - f)',
            variables: [
              { symbol: 'V', meaning: 'Total runoff volume (m³)' },
              { symbol: 'A', meaning: 'Area (m²)' },
              { symbol: 'P', meaning: 'Rainfall depth (m)' },
              { symbol: 'f', meaning: 'Infiltration depth (m)' },
            ],
          },
          {
            id: 'b-runoff-coefficient',
            name: 'Runoff Coefficient',
            formula: 'C = \\frac{Q}{P}',
            variables: [
              { symbol: 'C', meaning: 'Runoff coefficient' },
              { symbol: 'Q', meaning: 'Total runoff depth' },
              { symbol: 'P', meaning: 'Rainfall depth' },
            ],
          },
          {
            id: 'b-mean-rainfall',
            name: 'Mean Areal Rainfall',
            formula: '\\bar{P} = \\frac{1}{n} \\sum_{i=1}^{n} P_i',
            variables: [
              { symbol: '\\bar{P}', meaning: 'Average rainfall' },
              { symbol: 'P_i', meaning: 'Rainfall at station i' },
              { symbol: 'n', meaning: 'Number of stations' },
            ],
          },
          {
            id: 'b-scs-runoff',
            name: 'SCS Curve Number Runoff',
            formula: 'Q = \\frac{(P - I_a)^2}{P - I_a + S}',
            variables: [
              { symbol: 'Q', meaning: 'Runoff depth (mm)' },
              { symbol: 'P', meaning: 'Rainfall depth (mm)' },
              { symbol: 'I_a', meaning: 'Initial abstraction = 0.2S (mm)' },
              { symbol: 'S', meaning: 'Potential retention (mm)' },
            ],
            notes: 'Valid only when P > I_a.',
          },
          {
            id: 'b-scs-retention',
            name: 'SCS Potential Retention',
            formula: 'S = \\frac{25400}{CN} - 254',
            variables: [
              { symbol: 'S', meaning: 'Potential retention (mm)' },
              { symbol: 'CN', meaning: 'Curve number (30–100)' },
            ],
            notes: 'US units: S = 1000/CN − 10 (inches).',
          },
          {
            id: 'b-rational',
            name: 'Rational Method (Peak Runoff)',
            formula: 'Q_p = \\frac{C \\times I \\times A}{360}',
            variables: [
              { symbol: 'Q_p', meaning: 'Peak runoff (m³/s)' },
              { symbol: 'C', meaning: 'Runoff coefficient' },
              { symbol: 'I', meaning: 'Rainfall intensity (mm/h)' },
              { symbol: 'A', meaning: 'Catchment area (ha)' },
            ],
          },
        ],
      },
      {
        topic: 'Groundwater & Aquifer',
        formulas: [
          {
            id: 'b-darcy',
            name: "Darcy's Law",
            formula: 'Q = K \\times i \\times A',
            variables: [
              { symbol: 'Q', meaning: 'Flow rate (m³/s or m³/day)' },
              { symbol: 'K', meaning: 'Hydraulic conductivity' },
              { symbol: 'i', meaning: 'Hydraulic gradient' },
              { symbol: 'A', meaning: 'Cross-sectional area' },
            ],
          },
          {
            id: 'b-hydraulic-conductivity',
            name: 'Hydraulic Conductivity (Fraction-weighted)',
            formula: 'K = \\sum_{i} k_i \\times p_i',
            variables: [
              { symbol: 'K', meaning: 'Composite conductivity' },
              { symbol: 'k_i', meaning: 'Conductivity of fraction i' },
              { symbol: 'p_i', meaning: 'Fraction of soil material (decimal)' },
            ],
          },
          {
            id: 'b-drawdown',
            name: 'Radial Drawdown (Thiem)',
            formula: 's = \\frac{Q}{2\\pi K} \\times \\ln\\frac{R}{r}',
            variables: [
              { symbol: 's', meaning: 'Drawdown (m)' },
              { symbol: 'Q', meaning: 'Well discharge' },
              { symbol: 'K', meaning: 'Hydraulic conductivity' },
              { symbol: 'R', meaning: 'Radius of influence (m)' },
              { symbol: 'r', meaning: 'Well radius (m)' },
            ],
          },
          {
            id: 'b-well-discharge',
            name: 'Steady Well Discharge (Radial)',
            formula: 'Q = \\frac{K \\pi h r}{\\ln(R/r)}',
            variables: [
              { symbol: 'Q', meaning: 'Well discharge (m³/day)' },
              { symbol: 'K', meaning: 'Hydraulic conductivity' },
              { symbol: 'h', meaning: 'Flow thickness (m)' },
              { symbol: 'r', meaning: 'Well radius (m)' },
              { symbol: 'R', meaning: 'Radius of influence (m)' },
            ],
            notes: 'Radial-flow (Thiem family) forms as used in exams.',
          },
        ],
      },
      {
        topic: 'Soil Erosion & Conservation',
        formulas: [
          {
            id: 'b-usle',
            name: 'Universal Soil Loss Equation (USLE)',
            formula: 'A = R \\times K \\times LS \\times C \\times P',
            variables: [
              { symbol: 'A', meaning: 'Annual soil loss (t/ha/yr)' },
              { symbol: 'R', meaning: 'Rainfall erosivity factor' },
              { symbol: 'K', meaning: 'Soil erodibility factor' },
              { symbol: 'LS', meaning: 'Slope length–gradient factor' },
              { symbol: 'C', meaning: 'Cover management factor' },
              { symbol: 'P', meaning: 'Support practice factor' },
            ],
          },
          {
            id: 'b-soil-loss',
            name: 'Total Soil Loss',
            formula: 'L = e_r \\times A',
            variables: [
              { symbol: 'L', meaning: 'Total soil loss (t)' },
              { symbol: 'e_r', meaning: 'Erosion rate (t/ha)' },
              { symbol: 'A', meaning: 'Area (ha)' },
            ],
          },
          {
            id: 'b-sediment-yield',
            name: 'Sediment Yield',
            formula: 'Y = P_s \\times T_e',
            variables: [
              { symbol: 'Y', meaning: 'Sediment reaching reservoir' },
              { symbol: 'P_s', meaning: 'Sediment production from erosion' },
              { symbol: 'T_e', meaning: 'Trap efficiency of the reservoir (decimal)' },
            ],
          },
          {
            id: 'b-reservoir-life',
            name: 'Reservoir Sedimentation Life',
            formula: 'T = \\frac{C_{cap}}{e_r \\times A \\times T_e}',
            variables: [
              { symbol: 'T', meaning: 'Years before capacity is filled' },
              { symbol: 'C_{cap}', meaning: 'Reservoir capacity' },
              { symbol: 'e_r', meaning: 'Erosion/sediment production rate' },
              { symbol: 'A', meaning: 'Catchment area' },
              { symbol: 'T_e', meaning: 'Trap efficiency (decimal)' },
            ],
          },
        ],
      },
      {
        topic: 'Soil Properties & Fertility',
        formulas: [
          {
            id: 'b-gravimetric-mc',
            name: 'Gravimetric Moisture Content',
            formula: 'w = \\frac{M_w - M_d}{M_d} \\times 100\\%',
            variables: [
              { symbol: 'w', meaning: 'Moisture content (%)' },
              { symbol: 'M_w', meaning: 'Wet soil mass (g)' },
              { symbol: 'M_d', meaning: 'Oven-dry soil mass (g)' },
            ],
          },
          {
            id: 'b-organic-matter',
            name: 'Organic Matter Content',
            formula: 'OM = \\frac{M_w - M_d}{M_d} \\times 100\\%',
            variables: [
              { symbol: 'OM', meaning: 'Organic matter (%)' },
              { symbol: 'M_w', meaning: 'Fresh sample mass' },
              { symbol: 'M_d', meaning: 'Oven-dry (ignited) mass' },
            ],
            notes: 'Same mass-loss form as dry-basis moisture for OM determination.',
          },
          {
            id: 'b-volumetric-mc',
            name: 'Volumetric Moisture Content',
            formula: '\\theta_v = \\theta_g \\times \\rho_b',
            variables: [
              { symbol: '\\theta_v', meaning: 'Volumetric water content (m³/m³)' },
              { symbol: '\\theta_g', meaning: 'Gravimetric water content' },
              { symbol: '\\rho_b', meaning: 'Bulk density (g/cm³)' },
            ],
          },
          {
            id: 'b-bulk-density',
            name: 'Bulk Density',
            formula: '\\rho_b = \\frac{M_d}{V_t}',
            variables: [
              { symbol: '\\rho_b', meaning: 'Bulk density (g/cm³)' },
              { symbol: 'M_d', meaning: 'Oven-dry mass (g)' },
              { symbol: 'V_t', meaning: 'Total (bulk) volume (cm³)' },
            ],
          },
          {
            id: 'b-density',
            name: 'Density',
            formula: '\\rho = \\frac{m}{V}',
            variables: [
              { symbol: '\\rho', meaning: 'Density (kg/m³)' },
              { symbol: 'm', meaning: 'Mass (kg)' },
              { symbol: 'V', meaning: 'Volume (m³)' },
            ],
          },
          {
            id: 'b-weight',
            name: 'Weight from Volume & Specific Gravity',
            formula: 'W = \\rho g V = SG \\times \\rho_w \\times g \\times V',
            variables: [
              { symbol: 'W', meaning: 'Weight (N)' },
              { symbol: 'SG', meaning: 'Specific gravity' },
              { symbol: '\\rho_w', meaning: 'Density of water (1000 kg/m³)' },
              { symbol: 'V', meaning: 'Volume (m³)' },
            ],
          },
          {
            id: 'b-void-ratio',
            name: 'Void Ratio & Degree of Saturation',
            formula: 'e = \\frac{G_s \\gamma_w}{\\gamma_d} - 1, \\quad S = \\frac{w G_s}{e}',
            variables: [
              { symbol: 'e', meaning: 'Void ratio' },
              { symbol: 'G_s', meaning: 'Specific gravity of solids' },
              { symbol: '\\gamma_w', meaning: 'Unit weight of water (kN/m³)' },
              { symbol: '\\gamma_d', meaning: 'Dry unit weight (kN/m³)' },
              { symbol: 'S', meaning: 'Degree of saturation' },
              { symbol: 'w', meaning: 'Moisture content (decimal)' },
            ],
          },
          {
            id: 'b-base-saturation',
            name: 'Percent Base Saturation',
            formula: '\\%BS = \\frac{\\sum \\text{base cations}}{CEC} \\times 100\\%',
            variables: [
              { symbol: '\\%BS', meaning: 'Base saturation (%)' },
              { symbol: '\\text{base cations}', meaning: 'Exchangeable Ca, Mg, K, Na' },
              { symbol: 'CEC', meaning: 'Cation exchange capacity' },
            ],
          },
          {
            id: 'b-cec',
            name: 'Cation Exchange Capacity',
            formula: 'CEC = \\sum_{i} q_i',
            variables: [
              { symbol: 'CEC', meaning: 'Cation exchange capacity (cmol/kg)' },
              { symbol: 'q_i', meaning: 'Each exchangeable cation' },
            ],
          },
          {
            id: 'b-lime',
            name: 'Agricultural Lime Requirement',
            formula: 'AL = \\frac{0.5 \\times (pH_d - pH_p) \\times A}{0.1 \\times E_{ff}}',
            variables: [
              { symbol: 'AL', meaning: 'Lime needed (t)' },
              { symbol: 'pH_d', meaning: 'Target soil pH' },
              { symbol: 'pH_p', meaning: 'Present soil pH' },
              { symbol: 'A', meaning: 'Area (ha)' },
              { symbol: 'E_{ff}', meaning: 'Lime effectivity/purity (decimal)' },
            ],
            notes: 'Standard: ~0.5 t/ha raises pH by 0.1 unit; adjust for purity.',
          },
          {
            id: 'b-fertilizer',
            name: 'Fertilizer Material Required',
            formula: 'M = \\frac{N_{req} \\times 100}{\\%N}',
            variables: [
              { symbol: 'M', meaning: 'Fertilizer material needed (kg)' },
              { symbol: 'N_{req}', meaning: 'Nutrient requirement (kg)' },
              { symbol: '\\%N', meaning: 'Nutrient content of fertilizer (%)' },
            ],
          },
          {
            id: 'b-nutrient-applied',
            name: 'Nutrient Content of Fertilizer Applied',
            formula: 'N = M \\times \\frac{\\%N}{100}',
            variables: [
              { symbol: 'N', meaning: 'Nutrient applied (kg)' },
              { symbol: 'M', meaning: 'Fertilizer material (kg)' },
              { symbol: '\\%N', meaning: 'Nutrient content (%)' },
            ],
          },
          {
            id: 'b-bulk-modulus',
            name: 'Bulk Modulus / Compressibility',
            formula: 'K = -\\frac{\\Delta P}{\\Delta V / V}',
            variables: [
              { symbol: 'K', meaning: 'Bulk modulus' },
              { symbol: '\\Delta P', meaning: 'Pressure change' },
              { symbol: '\\Delta V', meaning: 'Volume change' },
              { symbol: 'V', meaning: 'Original volume' },
            ],
          },
          {
            id: 'b-water-mass',
            name: 'Water Mass in Soil',
            formula: 'm_w = m_s \\times \\frac{w}{100}',
            variables: [
              { symbol: 'm_w', meaning: 'Mass of water (kg)' },
              { symbol: 'm_s', meaning: 'Mass of dry soil (kg)' },
              { symbol: 'w', meaning: 'Moisture content (%)' },
            ],
          },
          {
            id: 'b-weighted-mean',
            name: 'Weighted Mean',
            formula: '\\bar{x} = \\frac{\\sum w_i x_i}{\\sum w_i}',
            variables: [
              { symbol: '\\bar{x}', meaning: 'Weighted average' },
              { symbol: 'w_i', meaning: 'Weight of value x_i' },
              { symbol: 'x_i', meaning: 'Value' },
            ],
            notes: 'Used for averages of concentrations, moisture mixes, % composition, etc.',
          },
        ],
      },
      {
        topic: 'Channel & Pipe Flow',
        formulas: [
          {
            id: 'b-manning-v',
            name: "Manning's Equation (Velocity)",
            formula: 'v = \\frac{1}{n} R^{2/3} \\sqrt{S}',
            variables: [
              { symbol: 'v', meaning: 'Flow velocity (m/s)' },
              { symbol: 'n', meaning: "Manning's roughness coefficient" },
              { symbol: 'R', meaning: 'Hydraulic radius (m)' },
              { symbol: 'S', meaning: 'Channel slope (m/m)' },
            ],
          },
          {
            id: 'b-manning-q',
            name: "Manning's Equation (Discharge)",
            formula: 'Q = \\frac{1}{n} A R^{2/3} \\sqrt{S}',
            variables: [
              { symbol: 'Q', meaning: 'Discharge (m³/s)' },
              { symbol: 'A', meaning: 'Flow area (m²)' },
              { symbol: 'n', meaning: "Manning's roughness" },
              { symbol: 'R', meaning: 'Hydraulic radius (m)' },
              { symbol: 'S', meaning: 'Slope (m/m)' },
            ],
            notes: 'US units use 1.49/n.',
          },
          {
            id: 'b-hydraulic-radius',
            name: 'Hydraulic Radius',
            formula: 'R = \\frac{A}{P}',
            variables: [
              { symbol: 'R', meaning: 'Hydraulic radius (m)' },
              { symbol: 'A', meaning: 'Flow area (m²)' },
              { symbol: 'P', meaning: 'Wetted perimeter (m)' },
            ],
          },
          {
            id: 'b-rect-area',
            name: 'Rectangular Channel Area',
            formula: 'A = b \\times y',
            variables: [
              { symbol: 'A', meaning: 'Flow area (m²)' },
              { symbol: 'b', meaning: 'Channel width (m)' },
              { symbol: 'y', meaning: 'Flow depth (m)' },
            ],
          },
          {
            id: 'b-rect-perimeter',
            name: 'Rectangular Wetted Perimeter',
            formula: 'P = b + 2y',
            variables: [
              { symbol: 'P', meaning: 'Wetted perimeter (m)' },
              { symbol: 'b', meaning: 'Channel width (m)' },
              { symbol: 'y', meaning: 'Flow depth (m)' },
            ],
          },
          {
            id: 'b-trap-area',
            name: 'Trapezoidal Channel Area',
            formula: 'A = (b + z \\times y) \\times y',
            variables: [
              { symbol: 'A', meaning: 'Flow area (m²)' },
              { symbol: 'b', meaning: 'Bottom width (m)' },
              { symbol: 'z', meaning: 'Side slope (horizontal : vertical)' },
              { symbol: 'y', meaning: 'Flow depth (m)' },
            ],
            notes: 'Some problem forms write A = by + (1/2)zy²; check given geometry.',
          },
          {
            id: 'b-continuity',
            name: 'Continuity / Discharge–Velocity–Area',
            formula: 'Q = A \\times V',
            variables: [
              { symbol: 'Q', meaning: 'Discharge (m³/s)' },
              { symbol: 'A', meaning: 'Area (m²)' },
              { symbol: 'V', meaning: 'Velocity (m/s)' },
            ],
            notes: 'Also solved as V = Q/A for velocity.',
          },
          {
            id: 'b-velocity-head',
            name: 'Velocity Head',
            formula: 'h_v = \\frac{V^2}{2g}',
            variables: [
              { symbol: 'h_v', meaning: 'Velocity head (m)' },
              { symbol: 'V', meaning: 'Velocity (m/s)' },
              { symbol: 'g', meaning: 'Gravity (9.81 m/s²)' },
            ],
          },
        ],
      },
      {
        topic: 'Flood & Risk Analysis',
        formulas: [
          {
            id: 'b-flood-risk',
            name: 'Flood Risk / Exceedance Probability',
            formula: 'P = 1 - \\left(1 - \\frac{1}{T}\\right)^n',
            variables: [
              { symbol: 'P', meaning: 'Probability of exceedance in n years' },
              { symbol: 'T', meaning: 'Return period (years)' },
              { symbol: 'n', meaning: 'Design life (years)' },
            ],
          },
          {
            id: 'b-return-period',
            name: 'Return Period',
            formula: 'T = \\frac{n + 1}{m}',
            variables: [
              { symbol: 'T', meaning: 'Return period (years)' },
              { symbol: 'n', meaning: 'Years of record' },
              { symbol: 'm', meaning: 'Rank of event (1 = largest)' },
            ],
          },
          {
            id: 'b-gumbel',
            name: 'Gumbel Flood Frequency',
            formula: 'Q_T = \\bar{x} + K \\sigma',
            variables: [
              { symbol: 'Q_T', meaning: 'T-year flood discharge' },
              { symbol: '\\bar{x}', meaning: 'Mean annual flood' },
              { symbol: 'K', meaning: 'Gumbel frequency factor' },
              { symbol: '\\sigma', meaning: 'Standard deviation of floods' },
            ],
          },
        ],
      },
      {
        topic: 'Crop Water & Evapotranspiration',
        formulas: [
          {
            id: 'b-crop-et',
            name: 'Crop Evapotranspiration',
            formula: 'ET_c = K_c \\times ET_o',
            variables: [
              { symbol: 'ET_c', meaning: 'Crop evapotranspiration (mm/day)' },
              { symbol: 'K_c', meaning: 'Crop coefficient' },
              { symbol: 'ET_o', meaning: 'Reference evapotranspiration (mm/day)' },
            ],
          },
          {
            id: 'b-water-volume',
            name: 'Crop Water Volume',
            formula: 'V_w = ET_c \\times A',
            variables: [
              { symbol: 'V_w', meaning: 'Water volume (m³)' },
              { symbol: 'ET_c', meaning: 'Crop ET (m)' },
              { symbol: 'A', meaning: 'Area (m²)' },
            ],
          },
          {
            id: 'b-pan-evap',
            name: 'Pan Evaporation',
            formula: 'E_p = D \\times K_p',
            variables: [
              { symbol: 'E_p', meaning: 'Adjusted evaporation (mm)' },
              { symbol: 'D', meaning: 'Pan evaporation depth (mm)' },
              { symbol: 'K_p', meaning: 'Pan coefficient' },
            ],
          },
          {
            id: 'b-reference-et',
            name: 'Reference ET (Blaney–Criddle)',
            formula: 'ET_o = \\frac{p \\times (0.46T + 8.13)}{100}',
            variables: [
              { symbol: 'ET_o', meaning: 'Reference ET (mm/day)' },
              { symbol: 'p', meaning: 'Daylight percentage of year' },
              { symbol: 'T', meaning: 'Mean temperature (°C)' },
            ],
          },
        ],
      },
      {
        topic: 'Aquaculture & Water Quality',
        formulas: [
          {
            id: 'b-fcr',
            name: 'Feed Conversion Ratio (FCR)',
            formula: 'FCR = \\frac{W_{feed}}{W_{gain}}',
            variables: [
              { symbol: 'FCR', meaning: 'Feed conversion ratio' },
              { symbol: 'W_{feed}', meaning: 'Feed given (kg)' },
              { symbol: 'W_{gain}', meaning: 'Body weight gain (kg)' },
            ],
          },
          {
            id: 'b-daily-feed',
            name: 'Daily Feed Requirement',
            formula: 'F = B \\times r_f',
            variables: [
              { symbol: 'F', meaning: 'Daily feed (kg/day)' },
              { symbol: 'B', meaning: 'Total biomass (kg)' },
              { symbol: 'r_f', meaning: 'Feeding rate (% of biomass, decimal)' },
            ],
          },
          {
            id: 'b-biomass',
            name: 'Total Biomass',
            formula: 'B = N \\times \\bar{w}',
            variables: [
              { symbol: 'B', meaning: 'Total biomass (kg)' },
              { symbol: 'N', meaning: 'Number of animals' },
              { symbol: '\\bar{w}', meaning: 'Average body weight (kg)' },
            ],
          },
          {
            id: 'b-stocking-density',
            name: 'Stocking / Carrying Capacity',
            formula: 'B = \\rho_s \\times A',
            variables: [
              { symbol: 'B', meaning: 'Number of animals stocked' },
              { symbol: '\\rho_s', meaning: 'Stocking density (per m² or per ha)' },
              { symbol: 'A', meaning: 'Area (m² or ha)' },
            ],
          },
          {
            id: 'b-survival',
            name: 'Surviving Population',
            formula: 'N_s = N_i \\times S_r',
            variables: [
              { symbol: 'N_s', meaning: 'Surviving animals' },
              { symbol: 'N_i', meaning: 'Initial stock' },
              { symbol: 'S_r', meaning: 'Survival rate (decimal)' },
            ],
          },
          {
            id: 'b-aerators',
            name: 'Number of Aerators',
            formula: 'N_a = \\frac{DO_t - DO_c}{a_{cap}}',
            variables: [
              { symbol: 'N_a', meaning: 'Aerators required' },
              { symbol: 'DO_t', meaning: 'Target dissolved oxygen (mg/L)' },
              { symbol: 'DO_c', meaning: 'Current dissolved oxygen (mg/L)' },
              { symbol: 'a_{cap}', meaning: 'Oxygen transfer per aerator' },
            ],
          },
          {
            id: 'b-oxygen',
            name: 'Oxygen Demand (Pond)',
            formula: 'O_2 = (DO_t - DO_c) \\times V',
            variables: [
              { symbol: 'O_2', meaning: 'Oxygen needed (g)' },
              { symbol: 'DO_t', meaning: 'Target DO (mg/L)' },
              { symbol: 'DO_c', meaning: 'Current DO (mg/L)' },
              { symbol: 'V', meaning: 'Water volume (m³)' },
            ],
          },
          {
            id: 'b-ammonia',
            name: 'Total Ammonia in Pond',
            formula: 'NH_3 = TAN \\times V',
            variables: [
              { symbol: 'NH_3', meaning: 'Total ammonia (g)' },
              { symbol: 'TAN', meaning: 'Total ammonia nitrogen concentration' },
              { symbol: 'V', meaning: 'Water volume' },
            ],
          },
          {
            id: 'b-bod',
            name: 'BOD Load',
            formula: 'L = C \\times Q \\times t',
            variables: [
              { symbol: 'L', meaning: 'BOD load (kg)' },
              { symbol: 'C', meaning: 'BOD concentration (mg/L)' },
              { symbol: 'Q', meaning: 'Flow rate' },
              { symbol: 't', meaning: 'Duration' },
            ],
          },
        ],
      },
      {
        topic: 'Mechanics & Physics Basics',
        formulas: [
          {
            id: 'b-newton',
            name: "Newton's Second Law",
            formula: 'F = m \\times a',
            variables: [
              { symbol: 'F', meaning: 'Force (N)' },
              { symbol: 'm', meaning: 'Mass (kg)' },
              { symbol: 'a', meaning: 'Acceleration (m/s²)' },
            ],
          },
          {
            id: 'b-kinematics',
            name: 'Uniform Acceleration (Velocity)',
            formula: 'v = u + at',
            variables: [
              { symbol: 'v', meaning: 'Final velocity (m/s)' },
              { symbol: 'u', meaning: 'Initial velocity (m/s)' },
              { symbol: 'a', meaning: 'Acceleration (m/s²)' },
              { symbol: 't', meaning: 'Time (s)' },
            ],
          },
          {
            id: 'b-centripetal',
            name: 'Centripetal Acceleration',
            formula: 'a_c = \\frac{v^2}{r}',
            variables: [
              { symbol: 'a_c', meaning: 'Centripetal acceleration (m/s²)' },
              { symbol: 'v', meaning: 'Speed (m/s)' },
              { symbol: 'r', meaning: 'Radius of curvature (m)' },
            ],
          },
          {
            id: 'b-momentum',
            name: 'Momentum',
            formula: 'p = m \\times v',
            variables: [
              { symbol: 'p', meaning: 'Momentum (kg·m/s)' },
              { symbol: 'm', meaning: 'Mass (kg)' },
              { symbol: 'v', meaning: 'Velocity (m/s)' },
            ],
          },
          {
            id: 'b-force-components',
            name: 'Force Resolution into Components',
            formula: 'F_x = F \\cos\\theta, \\quad F_y = F \\sin\\theta',
            variables: [
              { symbol: 'F_x', meaning: 'Horizontal component (N)' },
              { symbol: 'F_y', meaning: 'Vertical component (N)' },
              { symbol: 'F', meaning: 'Force magnitude (N)' },
              { symbol: '\\theta', meaning: 'Angle from horizontal' },
            ],
          },
          {
            id: 'b-resultant',
            name: 'Resultant of Two Forces',
            formula: 'R = \\sqrt{(\\Sigma F_x)^2 + (\\Sigma F_y)^2}',
            variables: [
              { symbol: 'R', meaning: 'Resultant force (N)' },
              { symbol: 'F_x', meaning: 'Sum of x-components' },
              { symbol: 'F_y', meaning: 'Sum of y-components' },
            ],
            notes: 'Direction: θ = tan⁻¹(ΣF_y / ΣF_x).',
          },
          {
            id: 'b-momwork',
            name: 'Moment / Work from Force & Distance',
            formula: 'M = F \\times d',
            variables: [
              { symbol: 'M', meaning: 'Moment (N·m) or work (J)' },
              { symbol: 'F', meaning: 'Force (N)' },
              { symbol: 'd', meaning: 'Moment arm or distance (m)' },
            ],
            notes: 'Same form used for moment (M = Fd) and work (W = Fd).',
          },
          {
            id: 'b-equilibrium',
            name: 'Equilibrium Conditions',
            formula: '\\Sigma F = 0, \\quad \\Sigma M = 0',
            variables: [
              { symbol: '\\Sigma F', meaning: 'Sum of all forces' },
              { symbol: '\\Sigma M', meaning: 'Sum of all moments' },
            ],
          },
          {
            id: 'b-power-mech',
            name: 'Mechanical Power',
            formula: 'P = \\frac{W}{t}',
            variables: [
              { symbol: 'P', meaning: 'Power (W)' },
              { symbol: 'W', meaning: 'Work done (J)' },
              { symbol: 't', meaning: 'Time (s)' },
            ],
          },
        ],
      },
    ],
  },
  {
    area: 'Structures, Environment & Bioprocess',
    areaCode: 'C',
    color: 'amber',
    topics: [
      {
        topic: 'Drying & Moisture',
        formulas: [
          {
            id: 'c-mc-wet',
            name: 'Moisture Content (Wet Basis)',
            formula: 'MC_{wb} = \\frac{W_w}{W_t} \\times 100\\%',
            variables: [
              { symbol: 'MC_{wb}', meaning: 'Moisture content, wet basis (%)' },
              { symbol: 'W_w', meaning: 'Weight of water (kg)' },
              { symbol: 'W_t', meaning: 'Total weight (kg)' },
            ],
          },
          {
            id: 'c-mc-dry',
            name: 'Moisture Content (Dry Basis)',
            formula: 'MC_{db} = \\frac{W_w}{W_d} \\times 100\\%',
            variables: [
              { symbol: 'MC_{db}', meaning: 'Moisture content, dry basis (%)' },
              { symbol: 'W_w', meaning: 'Weight of water (kg)' },
              { symbol: 'W_d', meaning: 'Dry matter weight (kg)' },
            ],
          },
          {
            id: 'c-dry-matter',
            name: 'Dry Matter Content',
            formula: 'DM = W \\times (1 - MC_{wb})',
            variables: [
              { symbol: 'DM', meaning: 'Dry matter (kg)' },
              { symbol: 'W', meaning: 'Total wet weight (kg)' },
              { symbol: 'MC_{wb}', meaning: 'Moisture content, wet basis (decimal)' },
            ],
          },
          {
            id: 'c-dry-matter-conservation',
            name: 'Dry Matter Conservation (Shrinkage)',
            formula: 'W_f = W_i \\times \\frac{100 - MC_i}{100 - MC_f}',
            variables: [
              { symbol: 'W_f', meaning: 'Final weight (kg)' },
              { symbol: 'W_i', meaning: 'Initial weight (kg)' },
              { symbol: 'MC_i', meaning: 'Initial moisture content (%)' },
              { symbol: 'MC_f', meaning: 'Final moisture content (%)' },
            ],
            notes: 'Dry matter stays constant while water is removed.',
          },
          {
            id: 'c-water-removed',
            name: 'Water Removed During Drying',
            formula: 'W_{rem} = W_i - W_f',
            variables: [
              { symbol: 'W_{rem}', meaning: 'Water removed (kg)' },
              { symbol: 'W_i', meaning: 'Initial weight (kg)' },
              { symbol: 'W_f', meaning: 'Final weight (kg)' },
            ],
            notes: 'When targets are on the same moisture basis: W_rem = W_i(MC_i − MC_f)/(1 − MC_f).',
          },
          {
            id: 'c-moisture-removal-rate',
            name: 'Moisture Removal Rate',
            formula: 'MR = \\frac{W_{rem}}{t}',
            variables: [
              { symbol: 'MR', meaning: 'Moisture removal rate (kg/h)' },
              { symbol: 'W_{rem}', meaning: 'Water removed (kg)' },
              { symbol: 't', meaning: 'Drying time (h)' },
            ],
          },
          {
            id: 'c-drying-air',
            name: 'Drying Air Required',
            formula: 'm_a = \\frac{m_w}{w_{out} - w_{in}}',
            variables: [
              { symbol: 'm_a', meaning: 'Dry air required (kg)' },
              { symbol: 'm_w', meaning: 'Water to remove (kg)' },
              { symbol: 'w_{out}', meaning: 'Exit air humidity ratio (kg/kg)' },
              { symbol: 'w_{in}', meaning: 'Inlet air humidity ratio (kg/kg)' },
            ],
          },
          {
            id: 'c-milling-recovery',
            name: 'Milling Recovery',
            formula: 'Recovery\\% = \\frac{M_{milled}}{M_{paddy}} \\times 100\\%',
            variables: [
              { symbol: 'Recovery\\%', meaning: 'Milling recovery (%)' },
              { symbol: 'M_{milled}', meaning: 'Mass of milled (head) rice' },
              { symbol: 'M_{paddy}', meaning: 'Mass of paddy input' },
            ],
            notes: 'PAES: typical recovery 60–68% for well-milled rice.',
          },
          {
            id: 'c-drying-efficiency',
            name: 'Drying Efficiency',
            formula: '\\eta_{dry} = \\frac{W_{evap}}{W_{theo}} \\times 100\\%',
            variables: [
              { symbol: '\\eta_{dry}', meaning: 'Drying efficiency (%)' },
              { symbol: 'W_{evap}', meaning: 'Actual water evaporated (kg)' },
              { symbol: 'W_{theo}', meaning: 'Theoretical water to remove (kg)' },
            ],
          },
        ],
      },
      {
        topic: 'Heat Transfer & Energy',
        formulas: [
          {
            id: 'c-sensible-heat',
            name: 'Sensible Heat',
            formula: 'Q = m \\times C_p \\times \\Delta T',
            variables: [
              { symbol: 'Q', meaning: 'Heat energy (kJ)' },
              { symbol: 'm', meaning: 'Mass (kg)' },
              { symbol: 'C_p', meaning: 'Specific heat (kJ/kg·°C)' },
              { symbol: '\\Delta T', meaning: 'Temperature change (°C)' },
            ],
          },
          {
            id: 'c-latent-heat',
            name: 'Latent Heat',
            formula: 'Q = m \\times \\lambda',
            variables: [
              { symbol: 'Q', meaning: 'Heat energy (kJ)' },
              { symbol: 'm', meaning: 'Mass (kg)' },
              { symbol: '\\lambda', meaning: 'Latent heat of vaporization (kJ/kg)' },
            ],
          },
          {
            id: 'c-total-heat',
            name: 'Total Heat (Sensible + Latent)',
            formula: 'Q_t = m C_p \\Delta T + m \\lambda',
            variables: [
              { symbol: 'Q_t', meaning: 'Total heat (kJ)' },
              { symbol: 'm', meaning: 'Mass (kg)' },
              { symbol: 'C_p', meaning: 'Specific heat (kJ/kg·°C)' },
              { symbol: '\\Delta T', meaning: 'Temperature change (°C)' },
              { symbol: '\\lambda', meaning: 'Latent heat (kJ/kg)' },
            ],
          },
          {
            id: 'c-lmtd',
            name: 'Log Mean Temperature Difference',
            formula: '\\Delta T_{lm} = \\frac{\\Delta T_1 - \\Delta T_2}{\\ln(\\Delta T_1 / \\Delta T_2)}',
            variables: [
              { symbol: '\\Delta T_{lm}', meaning: 'LMTD (°C)' },
              { symbol: '\\Delta T_1', meaning: 'Temperature difference at one end (°C)' },
              { symbol: '\\Delta T_2', meaning: 'Temperature difference at other end (°C)' },
            ],
          },
          {
            id: 'c-heat-exchanger',
            name: 'Heat Exchanger Duty',
            formula: 'Q = U \\times A \\times \\Delta T_{lm}',
            variables: [
              { symbol: 'Q', meaning: 'Heat transfer rate (W or kJ/h)' },
              { symbol: 'U', meaning: 'Overall heat transfer coefficient' },
              { symbol: 'A', meaning: 'Heat transfer area (m²)' },
              { symbol: '\\Delta T_{lm}', meaning: 'LMTD (°C)' },
            ],
            notes: 'Sizing: A = Q ÷ (U × ΔT_lm).',
          },
          {
            id: 'c-heat-load',
            name: 'Heat/Cooling Load',
            formula: 'Q = q \\times A',
            variables: [
              { symbol: 'Q', meaning: 'Total heat load (W or BTU/h)' },
              { symbol: 'q', meaning: 'Load per unit area' },
              { symbol: 'A', meaning: 'Area (m² or ft²)' },
            ],
            notes: 'Division of load adds for separate areas; convert to TR or hp after summing.',
          },
        ],
      },
      {
        topic: 'Biogas & Waste',
        formulas: [
          {
            id: 'c-vs-loading',
            name: 'Volatile Solids Loading',
            formula: 'VS = N \\times M \\times F_{vs}',
            variables: [
              { symbol: 'VS', meaning: 'Volatile solids per day (kg)' },
              { symbol: 'N', meaning: 'Number of animals' },
              { symbol: 'M', meaning: 'Manure per animal (kg/day)' },
              { symbol: 'F_{vs}', meaning: 'Volatile solids fraction (decimal)' },
            ],
          },
          {
            id: 'c-biogas',
            name: 'Biogas Production',
            formula: 'V_b = VS \\times Y',
            variables: [
              { symbol: 'V_b', meaning: 'Biogas production (m³/day)' },
              { symbol: 'VS', meaning: 'Volatile solids (kg/day)' },
              { symbol: 'Y', meaning: 'Biogas yield (m³/kg VS)' },
            ],
          },
          {
            id: 'c-methane',
            name: 'Methane Content',
            formula: 'V_{CH_4} = V_b \\times \\%CH_4',
            variables: [
              { symbol: 'V_{CH_4}', meaning: 'Methane volume (m³/day)' },
              { symbol: 'V_b', meaning: 'Total biogas (m³/day)' },
              { symbol: '\\%CH_4', meaning: 'Methane percentage (typical 55–65%)' },
            ],
          },
          {
            id: 'c-fermenter-volume',
            name: 'Fermenter (Digester) Volume',
            formula: 'V_f = V_d \\times HRT \\times H_f',
            variables: [
              { symbol: 'V_f', meaning: 'Fermenter volume (m³)' },
              { symbol: 'V_d', meaning: 'Daily substrate volume (m³/day)' },
              { symbol: 'HRT', meaning: 'Hydraulic retention time (days)' },
              { symbol: 'H_f', meaning: 'Headspace/volume factor (1.2–1.3)' },
            ],
          },
          {
            id: 'c-biogas-energy',
            name: 'Biogas Energy Content',
            formula: 'E = V_b \\times \\%CH_4 \\times LHV',
            variables: [
              { symbol: 'E', meaning: 'Energy content (MJ/day)' },
              { symbol: 'V_b', meaning: 'Biogas volume (m³/day)' },
              { symbol: '\\%CH_4', meaning: 'Methane fraction' },
              { symbol: 'LHV', meaning: 'Lower heating value of CH₄ (MJ/m³)' },
            ],
          },
          {
            id: 'c-biogas-complete',
            name: 'Complete Biogas from Livestock Waste',
            formula: 'V_b = N \\times W \\times r \\times (1 - MC) \\times VS \\times Y',
            variables: [
              { symbol: 'V_b', meaning: 'Biogas volume (m³/day)' },
              { symbol: 'N', meaning: 'Number of animals' },
              { symbol: 'W', meaning: 'Waste per animal (kg/day)' },
              { symbol: 'r', meaning: 'Collection rate (decimal)' },
              { symbol: 'MC', meaning: 'Moisture content (decimal)' },
              { symbol: 'VS', meaning: 'Volatile solids fraction (decimal)' },
              { symbol: 'Y', meaning: 'Biogas yield per kg VS (m³/kg)' },
            ],
          },
          {
            id: 'c-waste-stream',
            name: 'Waste Stream Allocation',
            formula: 'M_r = M_t \\times p_r, \\quad M_c = M_t \\times p_c \\times \\eta_e, \\quad M_l = M_t - M_r - M_c',
            variables: [
              { symbol: 'M_t', meaning: 'Total waste generated' },
              { symbol: 'M_r', meaning: 'Recycled waste' },
              { symbol: 'M_c', meaning: 'Composted output' },
              { symbol: 'M_l', meaning: 'Landfilled/leftover waste' },
              { symbol: 'p_r', meaning: 'Recycle fraction' },
              { symbol: 'p_c', meaning: 'Compost fraction' },
              { symbol: '\\eta_e', meaning: 'Composting efficiency/process loss' },
            ],
          },
          {
            id: 'c-waste-mass',
            name: 'Waste Mass from Volume',
            formula: 'M = \\rho \\times V',
            variables: [
              { symbol: 'M', meaning: 'Mass of waste (t)' },
              { symbol: '\\rho', meaning: 'Density (t/m³)' },
              { symbol: 'V', meaning: 'Volume (m³)' },
            ],
            notes: 'Used for landfill/storage capacity checks: remaining = capacity − accumulated.',
          },
        ],
      },
      {
        topic: 'Food Processing & Preservation',
        formulas: [
          {
            id: 'c-dvalue',
            name: 'D-value (Thermal Death Time)',
            formula: 't = D \\times \\log\\frac{N_0}{N}',
            variables: [
              { symbol: 't', meaning: 'Process time (min)' },
              { symbol: 'D', meaning: 'Decimal reduction time (min)' },
              { symbol: 'N_0', meaning: 'Initial microbial count' },
              { symbol: 'N', meaning: 'Surviving count' },
            ],
            notes: 'D-value = time for one log (90%) reduction at a given temperature.',
          },
          {
            id: 'c-12d',
            name: '12D Concept (Commercial Sterility)',
            formula: 'F = D \\times (\\log N_0 - \\log N)',
            variables: [
              { symbol: 'F', meaning: 'Sterilization value (min)' },
              { symbol: 'D', meaning: 'D-value at reference temp (min)' },
              { symbol: 'N_0', meaning: 'Initial spore count' },
              { symbol: 'N', meaning: 'Final spore count' },
            ],
            notes: '12D = 12 log reductions of C. botulinum for low-acid canning.',
          },
          {
            id: 'c-zvalue',
            name: 'z-value / Thermal Process Equivalence',
            formula: 'F = D_r \\times 10^{(\\Delta T / z)}',
            variables: [
              { symbol: 'F', meaning: 'Equivalent process time (min)' },
              { symbol: 'D_r', meaning: 'D-value at reference temperature' },
              { symbol: '\\Delta T', meaning: 'Difference from reference temperature (°C)' },
              { symbol: 'z', meaning: 'z-value (°C)' },
            ],
          },
          {
            id: 'c-product-recovery',
            name: 'Product Recovery',
            formula: 'M_p = M_i \\times R_r',
            variables: [
              { symbol: 'M_p', meaning: 'Recovered product mass' },
              { symbol: 'M_i', meaning: 'Input/produce mass' },
              { symbol: 'R_r', meaning: 'Recovery fraction (decimal)' },
            ],
            notes: 'Covers oil extraction, sugar/juice recovery, yr yield outputs.',
          },
          {
            id: 'c-pearson',
            name: "Pearson's Square (Feed Formulation)",
            formula: '\\frac{H}{L} = \\frac{T - P_L}{P_H - T}',
            variables: [
              { symbol: 'H', meaning: 'Parts of high-protein ingredient' },
              { symbol: 'L', meaning: 'Parts of low-protein ingredient' },
              { symbol: 'T', meaning: 'Target protein (%)' },
              { symbol: 'P_H', meaning: 'High ingredient protein (%)' },
              { symbol: 'P_L', meaning: 'Low ingredient protein (%)' },
            ],
          },
        ],
      },
      {
        topic: 'Strength of Materials',
        formulas: [
          {
            id: 'c-bending-stress',
            name: 'Bending Stress (Flexure Formula)',
            formula: '\\sigma = \\frac{Mc}{I}',
            variables: [
              { symbol: '\\sigma', meaning: 'Bending stress (Pa)' },
              { symbol: 'M', meaning: 'Bending moment (N·m)' },
              { symbol: 'c', meaning: 'Distance from neutral axis (m)' },
              { symbol: 'I', meaning: 'Moment of inertia (m⁴)' },
            ],
          },
          {
            id: 'c-eccentric',
            name: 'Eccentric Loading (Combined Stress)',
            formula: '\\sigma = \\frac{P}{A} \\pm \\frac{My}{I}',
            variables: [
              { symbol: '\\sigma', meaning: 'Combined stress (Pa)' },
              { symbol: 'P', meaning: 'Axial load (N)' },
              { symbol: 'A', meaning: 'Cross-sectional area (m²)' },
              { symbol: 'M', meaning: 'Moment from eccentricity (N·m)' },
              { symbol: 'y', meaning: 'Distance from centroid (m)' },
              { symbol: 'I', meaning: 'Moment of inertia (m⁴)' },
            ],
          },
          {
            id: 'c-direct-stress',
            name: 'Direct Stress & Shear Stress',
            formula: '\\sigma = \\frac{F}{A}',
            variables: [
              { symbol: '\\sigma', meaning: 'Normal or shear stress (Pa)' },
              { symbol: 'F', meaning: 'Applied force (N)' },
              { symbol: 'A', meaning: 'Resisting area (m²)' },
            ],
            notes: 'Same form for normal stress (perpendicular) and shear stress τ (parallel).',
          },
          {
            id: 'c-strain',
            name: 'Strain',
            formula: '\\epsilon = \\frac{\\Delta L}{L}',
            variables: [
              { symbol: '\\epsilon', meaning: 'Strain (dimensionless)' },
              { symbol: '\\Delta L', meaning: 'Change in length (m)' },
              { symbol: 'L', meaning: 'Original length (m)' },
            ],
          },
          {
            id: 'c-modulus-elasticity',
            name: "Young's Modulus",
            formula: 'E = \\frac{\\sigma}{\\epsilon}',
            variables: [
              { symbol: 'E', meaning: 'Modulus of elasticity (Pa)' },
              { symbol: '\\sigma', meaning: 'Stress (Pa)' },
              { symbol: '\\epsilon', meaning: 'Strain' },
            ],
          },
        ],
      },
      {
        topic: 'Structural Analysis',
        formulas: [
          {
            id: 'c-shear-moment',
            name: 'Shear & Moment Relationship',
            formula: 'V = \\frac{dM}{dx}',
            variables: [
              { symbol: 'V', meaning: 'Shear force (N)' },
              { symbol: 'M', meaning: 'Bending moment (N·m)' },
              { symbol: 'x', meaning: 'Position along beam (m)' },
            ],
            notes: 'Slope of the moment diagram = shear; area under shear = moment change.',
          },
          {
            id: 'c-fixed-end',
            name: 'Fixed-end Moments',
            formula: 'M_F = \\frac{wL^2}{12}, \\quad M_F = \\frac{PL}{8}',
            variables: [
              { symbol: 'M_F', meaning: 'Fixed-end moment (N·m)' },
              { symbol: 'w', meaning: 'Uniform load (N/m)' },
              { symbol: 'L', meaning: 'Span (m)' },
              { symbol: 'P', meaning: 'Midspan point load (N)' },
            ],
          },
          {
            id: 'c-simple-reaction',
            name: 'Simply Supported Reactions',
            formula: 'R_A = R_B = \\frac{P}{2}',
            variables: [
              { symbol: 'R_A', meaning: 'Reaction at support A (N)' },
              { symbol: 'R_B', meaning: 'Reaction at support B (N)' },
              { symbol: 'P', meaning: 'Concentrated midspan load (N)' },
            ],
          },
          {
            id: 'c-max-moment',
            name: 'Maximum Bending Moment',
            formula: 'M_{max} = \\frac{PL}{4}',
            variables: [
              { symbol: 'M_{max}', meaning: 'Max moment (N·m)' },
              { symbol: 'P', meaning: 'Midspan point load (N)' },
              { symbol: 'L', meaning: 'Span (m)' },
            ],
            notes: 'For uniform load: M_max = wL²/8.',
          },
        ],
      },
      {
        topic: 'Ventilation & Air',
        formulas: [
          {
            id: 'c-ventilation',
            name: 'Ventilation Rate',
            formula: 'Q = V \\times ACH',
            variables: [
              { symbol: 'Q', meaning: 'Ventilation rate (m³/h)' },
              { symbol: 'V', meaning: 'Room volume (m³)' },
              { symbol: 'ACH', meaning: 'Air changes per hour' },
            ],
          },
          {
            id: 'c-air-velocity',
            name: 'Air Velocity in Duct',
            formula: 'v = \\frac{Q}{A}',
            variables: [
              { symbol: 'v', meaning: 'Air velocity (m/s)' },
              { symbol: 'Q', meaning: 'Air flow rate (m³/s)' },
              { symbol: 'A', meaning: 'Duct cross-section (m²)' },
            ],
          },
        ],
      },
      {
        topic: 'Psychrometrics',
        formulas: [
          {
            id: 'c-saturation-vapor',
            name: 'Saturation Vapor Pressure (Magnus)',
            formula: 'P_{vs} = 0.6108 \\times \\exp\\left(\\frac{17.27T}{T + 237.3}\\right)',
            variables: [
              { symbol: 'P_{vs}', meaning: 'Saturation vapor pressure (kPa)' },
              { symbol: 'T', meaning: 'Temperature (°C)' },
            ],
          },
          {
            id: 'c-moist-enthalpy',
            name: 'Moist Air Enthalpy',
            formula: 'h = 1.005T + W(2501 + 1.88T)',
            variables: [
              { symbol: 'h', meaning: 'Specific enthalpy (kJ/kg dry air)' },
              { symbol: 'T', meaning: 'Dry-bulb temperature (°C)' },
              { symbol: 'W', meaning: 'Humidity ratio (kg/kg dry air)' },
            ],
          },
          {
            id: 'c-actual-vapor',
            name: 'Actual Vapor Pressure (from RH)',
            formula: 'P_v = RH \\times P_{vs}',
            variables: [
              { symbol: 'P_v', meaning: 'Actual vapor pressure (kPa)' },
              { symbol: 'RH', meaning: 'Relative humidity (decimal)' },
              { symbol: 'P_{vs}', meaning: 'Saturation vapor pressure (kPa)' },
            ],
          },
          {
            id: 'c-relative-humidity',
            name: 'Relative Humidity',
            formula: 'RH = \\frac{P_v}{P_{vs}} \\times 100\\% = \\frac{w}{w_s} \\times 100\\%',
            variables: [
              { symbol: 'RH', meaning: 'Relative humidity (%)' },
              { symbol: 'P_v', meaning: 'Actual vapor pressure' },
              { symbol: 'P_{vs}', meaning: 'Saturation vapor pressure' },
              { symbol: 'w', meaning: 'Humidity ratio' },
              { symbol: 'w_s', meaning: 'Saturation humidity ratio' },
            ],
          },
        ],
      },
      {
        topic: 'Refrigeration',
        formulas: [
          {
            id: 'c-tons-refrigeration',
            name: 'Tons of Refrigeration',
            formula: 'TR = \\frac{Q}{3.517}',
            variables: [
              { symbol: 'TR', meaning: 'Tons of refrigeration' },
              { symbol: 'Q', meaning: 'Cooling capacity (kW)' },
            ],
            notes: '1 TR = 3.517 kW = 12000 BTU/h = heat to melt 1 ton of ice in 24 h.',
          },
          {
            id: 'c-condensing-hp',
            name: 'Condensing Unit Capacity',
            formula: 'hp = \\frac{BTU/hr}{2545}',
            variables: [
              { symbol: 'hp', meaning: 'Compressor/condensing unit horsepower' },
              { symbol: 'BTU/hr', meaning: 'Cooling load (BTU per hour)' },
            ],
            notes: '1 hp ≈ 2545 BTU/h.',
          },
          {
            id: 'c-cop-ref',
            name: 'Coefficient of Performance (Refrigeration)',
            formula: 'COP = \\frac{Q_L}{W}',
            variables: [
              { symbol: 'COP', meaning: 'Coefficient of performance' },
              { symbol: 'Q_L', meaning: 'Heat removed (kJ)' },
              { symbol: 'W', meaning: 'Work input (kJ)' },
            ],
          },
        ],
      },
      {
        topic: 'Electrification',
        formulas: [
          {
            id: 'c-ohms-law',
            name: "Ohm's Law",
            formula: 'V = I \\times R',
            variables: [
              { symbol: 'V', meaning: 'Voltage (V)' },
              { symbol: 'I', meaning: 'Current (A)' },
              { symbol: 'R', meaning: 'Resistance (Ω)' },
            ],
            notes: 'Wire resistance R = ρL/A. Voltage drop = I·R along a line.',
          },
          {
            id: 'c-electric-power',
            name: 'Electric Power',
            formula: 'P = VI = I^2R = \\frac{V^2}{R}',
            variables: [
              { symbol: 'P', meaning: 'Power (W)' },
              { symbol: 'V', meaning: 'Voltage (V)' },
              { symbol: 'I', meaning: 'Current (A)' },
              { symbol: 'R', meaning: 'Resistance (Ω)' },
            ],
          },
          {
            id: 'c-electric-energy',
            name: 'Electric Energy',
            formula: 'E = P \\times t = V \\times I \\times t',
            variables: [
              { symbol: 'E', meaning: 'Energy (kWh when P in kW, t in h)' },
              { symbol: 'P', meaning: 'Power (W or kW)' },
              { symbol: 't', meaning: 'Time (h)' },
            ],
          },
          {
            id: 'c-resistance',
            name: 'Series & Parallel Resistance',
            formula: 'R_s = R_1 + R_2 + \\cdots, \\quad \\frac{1}{R_p} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\cdots',
            variables: [
              { symbol: 'R_s', meaning: 'Series total resistance' },
              { symbol: 'R_p', meaning: 'Parallel total resistance' },
              { symbol: 'R_i', meaning: 'Individual resistances' },
            ],
          },
          {
            id: 'c-capacitor',
            name: 'Capacitor Energy',
            formula: 'E = \\frac{1}{2}CV^2',
            variables: [
              { symbol: 'E', meaning: 'Stored energy (J)' },
              { symbol: 'C', meaning: 'Capacitance (F)' },
              { symbol: 'V', meaning: 'Voltage (V)' },
            ],
            notes: 'Rearranged: C = 2E/V², V = √(2E/C).',
          },
          {
            id: 'c-transformer',
            name: 'Transformer Relations',
            formula: '\\frac{V_p}{V_s} = \\frac{N_p}{N_s} = \\frac{I_s}{I_p}',
            variables: [
              { symbol: 'V_p', meaning: 'Primary voltage' },
              { symbol: 'V_s', meaning: 'Secondary voltage' },
              { symbol: 'N_p', meaning: 'Primary turns' },
              { symbol: 'N_s', meaning: 'Secondary turns' },
              { symbol: 'I_s', meaning: 'Secondary current' },
              { symbol: 'I_p', meaning: 'Primary current' },
            ],
          },
          {
            id: 'c-reactance',
            name: 'Reactance & Impedance',
            formula: 'X_L = 2\\pi fL, \\quad Z = \\sqrt{R^2 + X_L^2}',
            variables: [
              { symbol: 'X_L', meaning: 'Inductive reactance (Ω)' },
              { symbol: 'f', meaning: 'Frequency (Hz)' },
              { symbol: 'L', meaning: 'Inductance (H)' },
              { symbol: 'Z', meaning: 'Impedance (Ω)' },
              { symbol: 'R', meaning: 'Resistance (Ω)' },
            ],
          },
          {
            id: 'c-power-factor',
            name: 'Power Factor',
            formula: 'PF = \\cos\\theta = \\frac{P}{S}',
            variables: [
              { symbol: 'PF', meaning: 'Power factor' },
              { symbol: 'P', meaning: 'Real power (kW)' },
              { symbol: 'S', meaning: 'Apparent power (kVA)' },
            ],
            notes: 'Apparent power S = P ÷ PF; S² = P² + Q².',
          },
          {
            id: 'c-illumination',
            name: 'Illumination Level',
            formula: 'E_v = \\frac{\\Phi}{A}',
            variables: [
              { symbol: 'E_v', meaning: 'Illuminance (lux)' },
              { symbol: '\\Phi', meaning: 'Total luminous flux (lumens)' },
              { symbol: 'A', meaning: 'Area (m²)' },
            ],
            notes: 'Total lumens required = lux × area.',
          },
        ],
      },
      {
        topic: 'Project Evaluation (CPES)',
        formulas: [
          {
            id: 'c-weighted-score',
            name: 'Weighted Score',
            formula: 'WS = \\sum_{i} W_i \\times S_i',
            variables: [
              { symbol: 'WS', meaning: 'Total weighted score' },
              { symbol: 'W_i', meaning: 'Weight of criterion i' },
              { symbol: 'S_i', meaning: 'Score of criterion i' },
            ],
          },
          {
            id: 'c-delay-score',
            name: 'Delay-adjusted Score',
            formula: 'S = S_{max} \\times (1 - p_d)',
            variables: [
              { symbol: 'S', meaning: 'Adjusted score' },
              { symbol: 'S_{max}', meaning: 'Maximum score' },
              { symbol: 'p_d', meaning: 'Delay penalty fraction (decimal)' },
            ],
          },
          {
            id: 'c-cost-percentage',
            name: 'Cost Weight Percentage',
            formula: 'p_i = \\frac{C_i}{C_T} \\times 100\\%',
            variables: [
              { symbol: 'p_i', meaning: 'Weight of item i (%)' },
              { symbol: 'C_i', meaning: 'Cost/units of item i' },
              { symbol: 'C_T', meaning: 'Total cost/units' },
            ],
          },
        ],
      },
      {
        topic: 'Tanks, Silos & Processing',
        formulas: [
          {
            id: 'c-circle-area',
            name: 'Circle Area',
            formula: 'A = \\frac{\\pi d^2}{4} = \\pi r^2',
            variables: [
              { symbol: 'A', meaning: 'Area (m²)' },
              { symbol: 'd', meaning: 'Diameter (m)' },
              { symbol: 'r', meaning: 'Radius (m)' },
            ],
          },
          {
            id: 'c-cylinder-volume',
            name: 'Cylinder Volume',
            formula: 'V = \\frac{\\pi d^2}{4} \\times h',
            variables: [
              { symbol: 'V', meaning: 'Volume (m³)' },
              { symbol: 'd', meaning: 'Diameter (m)' },
              { symbol: 'h', meaning: 'Height (m)' },
            ],
            notes: 'For silos, tanks, and bins.',
          },
          {
            id: 'c-volume-mass',
            name: 'Volume from Mass & Density',
            formula: 'V = \\frac{M}{\\rho}',
            variables: [
              { symbol: 'V', meaning: 'Volume (m³)' },
              { symbol: 'M', meaning: 'Mass (kg or t)' },
              { symbol: '\\rho', meaning: 'Bulk density (kg/m³)' },
            ],
            notes: 'Rearranged M = ρ × V for storage capacity.',
          },
          {
            id: 'c-processing-rate',
            name: 'Processing Rate / Batch Count',
            formula: 'C = \\frac{M}{t}, \\quad N = \\frac{M_{total}}{M}',
            variables: [
              { symbol: 'C', meaning: 'Processing rate (kg/h)' },
              { symbol: 'M', meaning: 'Quantity per batch/time (kg)' },
              { symbol: 't', meaning: 'Time (h)' },
              { symbol: 'N', meaning: 'Number of batches' },
              { symbol: 'M_{total}', meaning: 'Total quantity (kg)' },
            ],
          },
        ],
      },
    ],
  },
];