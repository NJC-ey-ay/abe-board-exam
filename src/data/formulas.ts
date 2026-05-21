export interface Formula {
  name: string;
  formula: string;
  variables: { symbol: string; meaning: string }[];
  notes?: string;
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
          { name: 'Effective Field Capacity', formula: 'C = (W × S × E) / 10', variables: [{ symbol: 'C', meaning: 'Effective field capacity (ha/h)' }, { symbol: 'W', meaning: 'Working width (m)' }, { symbol: 'S', meaning: 'Travel speed (km/h)' }, { symbol: 'E', meaning: 'Field efficiency (decimal)' }] },
          { name: 'Theoretical Field Capacity', formula: 'C_t = (W × S) / 10', variables: [{ symbol: 'C_t', meaning: 'Theoretical field capacity (ha/h)' }, { symbol: 'W', meaning: 'Working width (m)' }, { symbol: 'S', meaning: 'Travel speed (km/h)' }] },
          { name: 'Field Efficiency', formula: 'E = C_a / C_t × 100%', variables: [{ symbol: 'E', meaning: 'Field efficiency (%)' }, { symbol: 'C_a', meaning: 'Actual field capacity (ha/h)' }, { symbol: 'C_t', meaning: 'Theoretical field capacity (ha/h)' }] },
          { name: 'Multi-row Planter Capacity', formula: 'C = (N × Sp × S × E) / 10', variables: [{ symbol: 'C', meaning: 'Effective capacity (ha/h)' }, { symbol: 'N', meaning: 'Number of rows' }, { symbol: 'Sp', meaning: 'Row spacing (m)' }, { symbol: 'S', meaning: 'Speed (km/h)' }, { symbol: 'E', meaning: 'Efficiency (decimal)' }] },
          { name: 'Total Harvest Output', formula: 'O = C × Y × t', variables: [{ symbol: 'O', meaning: 'Total harvest output (t)' }, { symbol: 'C', meaning: 'Field capacity (ha/h)' }, { symbol: 'Y', meaning: 'Crop yield (t/ha)' }, { symbol: 't', meaning: 'Operating time (h)' }] },
        ],
      },
      {
        topic: 'Engine Performance',
        formulas: [
          { name: 'Drawbar Power', formula: 'P_db = (F × S) / 3.6', variables: [{ symbol: 'P_db', meaning: 'Drawbar power (kW)' }, { symbol: 'F', meaning: 'Draft force (kN)' }, { symbol: 'S', meaning: 'Speed (km/h)' }], notes: '3.6 converts km/h to m/s and kN·m/s to kW' },
          { name: 'PTO Power', formula: 'P_PTO = BP × η_trans', variables: [{ symbol: 'P_PTO', meaning: 'PTO power (kW)' }, { symbol: 'BP', meaning: 'Brake power (kW)' }, { symbol: 'η_trans', meaning: 'Transmission efficiency (decimal)' }] },
          { name: 'Indicated Power (4-stroke)', formula: 'IP = (MEP × L × A × N × n) / 60,000', variables: [{ symbol: 'IP', meaning: 'Indicated power (kW)' }, { symbol: 'MEP', meaning: 'Mean effective pressure (kPa)' }, { symbol: 'L', meaning: 'Stroke length (m)' }, { symbol: 'A', meaning: 'Piston area (m²)' }, { symbol: 'N', meaning: 'Engine speed (RPM)' }, { symbol: 'n', meaning: 'Number of cylinders' }], notes: '60,000 converts to kW; 4-stroke uses 60,000, 2-stroke uses 30,000' },
          { name: 'Brake Power', formula: 'BP = IP - FP', variables: [{ symbol: 'BP', meaning: 'Brake power (kW)' }, { symbol: 'IP', meaning: 'Indicated power (kW)' }, { symbol: 'FP', meaning: 'Friction power (kW)' }] },
          { name: 'Mechanical Efficiency', formula: 'η_mech = BP / IP × 100%', variables: [{ symbol: 'η_mech', meaning: 'Mechanical efficiency (%)' }, { symbol: 'BP', meaning: 'Brake power (kW)' }, { symbol: 'IP', meaning: 'Indicated power (kW)' }] },
        ],
      },
      {
        topic: 'Engine Geometry & Combustion',
        formulas: [
          { name: 'Total Engine Displacement', formula: 'V_d = (π/4) × D² × L × n', variables: [{ symbol: 'V_d', meaning: 'Total displacement (cm³ or L)' }, { symbol: 'D', meaning: 'Cylinder bore (cm)' }, { symbol: 'L', meaning: 'Stroke length (cm)' }, { symbol: 'n', meaning: 'Number of cylinders' }] },
          { name: 'Compression Ratio', formula: 'CR = (V_d + V_c) / V_c', variables: [{ symbol: 'CR', meaning: 'Compression ratio' }, { symbol: 'V_d', meaning: 'Displacement volume (cm³)' }, { symbol: 'V_c', meaning: 'Clearance volume (cm³)' }] },
          { name: 'Displacement from CR', formula: 'V_d = V_c × (CR - 1)', variables: [{ symbol: 'V_d', meaning: 'Displacement (cm³)' }, { symbol: 'V_c', meaning: 'Clearance volume (cm³)' }, { symbol: 'CR', meaning: 'Compression ratio' }] },
        ],
      },
      {
        topic: 'Power Transmission',
        formulas: [
          { name: 'Overall Efficiency Chain', formula: 'η_total = η₁ × η₂ × η₃ × ... × ηₙ', variables: [{ symbol: 'η_total', meaning: 'Overall efficiency' }, { symbol: 'η_i', meaning: 'Individual stage efficiency (decimal)' }] },
          { name: 'Power Train Efficiency', formula: 'η = η_trans × η_drive × η_tractive', variables: [{ symbol: 'η_trans', meaning: 'Transmission efficiency' }, { symbol: 'η_drive', meaning: 'Final drive efficiency' }, { symbol: 'η_tractive', meaning: 'Track/wheel efficiency' }] },
        ],
      },
      {
        topic: 'Fuel & Heat',
        formulas: [
          { name: 'Fuel Consumption (Volume)', formula: 'V = (BP × SFC) / ρ', variables: [{ symbol: 'V', meaning: 'Fuel consumption (L/h)' }, { symbol: 'BP', meaning: 'Brake power (HP or kW)' }, { symbol: 'SFC', meaning: 'Specific fuel consumption (kg/HP-h or kg/kW-h)' }, { symbol: 'ρ', meaning: 'Fuel density (kg/L)' }] },
          { name: 'Heat Input from Fuel', formula: 'Q_in = BP × SFC × CV', variables: [{ symbol: 'Q_in', meaning: 'Heat input (MJ/h)' }, { symbol: 'BP', meaning: 'Brake power' }, { symbol: 'SFC', meaning: 'Specific fuel consumption' }, { symbol: 'CV', meaning: 'Calorific value (MJ/kg)' }] },
          { name: 'Engine Heat Balance', formula: 'Q_fuel = Q_brake + Q_cool + Q_exhaust + Q_friction', variables: [{ symbol: 'Q_fuel', meaning: 'Total fuel heat energy' }, { symbol: 'Q_brake', meaning: 'Useful brake work' }, { symbol: 'Q_cool', meaning: 'Cooling system losses' }, { symbol: 'Q_exhaust', meaning: 'Exhaust losses' }, { symbol: 'Q_friction', meaning: 'Friction losses' }] },
          { name: 'Thermal Efficiency', formula: 'η_th = W_out / Q_in × 100%', variables: [{ symbol: 'η_th', meaning: 'Thermal efficiency (%)' }, { symbol: 'W_out', meaning: 'Useful work output' }, { symbol: 'Q_in', meaning: 'Heat energy input' }] },
        ],
      },
      {
        topic: 'Implement Draft',
        formulas: [
          { name: 'Multi-disc Plow Draft', formula: 'D = n × w × d × K', variables: [{ symbol: 'D', meaning: 'Total draft (kN)' }, { symbol: 'n', meaning: 'Number of discs' }, { symbol: 'w', meaning: 'Width per disc (m)' }, { symbol: 'd', meaning: 'Depth (m)' }, { symbol: 'K', meaning: 'Soil specific resistance (kN/m²)' }] },
          { name: 'PTO Pump Power', formula: 'P_hyd = P_PTO × η_pump', variables: [{ symbol: 'P_hyd', meaning: 'Hydraulic power output' }, { symbol: 'P_PTO', meaning: 'PTO power input' }, { symbol: 'η_pump', meaning: 'Pump efficiency (decimal)' }] },
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
          { name: 'Application Rate (Sprinkler)', formula: 'AR = (q × 3600) / (S_l × S_s)', variables: [{ symbol: 'AR', meaning: 'Application rate (mm/h)' }, { symbol: 'q', meaning: 'Flow rate per sprinkler (L/s)' }, { symbol: 'S_l', meaning: 'Lateral spacing (m)' }, { symbol: 'S_s', meaning: 'Sprinkler spacing (m)' }], notes: '3600 converts L/s to L/h; 1 L/m² = 1 mm' },
          { name: 'Sprinkler Square Spacing', formula: 'S = √(q × 3600 / AR)', variables: [{ symbol: 'S', meaning: 'Sprinkler spacing (m)' }, { symbol: 'q', meaning: 'Flow rate (L/s)' }, { symbol: 'AR', meaning: 'Desired application rate (mm/h)' }] },
          { name: 'Pumping Time', formula: 'T = (A × d × 10) / (E × Q)', variables: [{ symbol: 'T', meaning: 'Pumping time (h)' }, { symbol: 'A', meaning: 'Area (ha)' }, { symbol: 'd', meaning: 'Net depth (mm)' }, { symbol: 'E', meaning: 'System efficiency (decimal)' }, { symbol: 'Q', meaning: 'Flow rate (L/s)' }], notes: '10 converts ha·mm to m³' },
          { name: 'Irrigation Efficiency', formula: 'E_i = (W_s / W_d) × 100%', variables: [{ symbol: 'E_i', meaning: 'Irrigation efficiency (%)' }, { symbol: 'W_s', meaning: 'Water stored in root zone' }, { symbol: 'W_d', meaning: 'Water delivered' }] },
          { name: 'Gross Irrigation Depth', formula: 'd_g = d_n / E', variables: [{ symbol: 'd_g', meaning: 'Gross depth (mm)' }, { symbol: 'd_n', meaning: 'Net depth (mm)' }, { symbol: 'E', meaning: 'Application efficiency (decimal)' }] },
        ],
      },
      {
        topic: 'Hydrology & Runoff',
        formulas: [
          { name: 'Annual Runoff Volume', formula: 'V = C × P × A', variables: [{ symbol: 'V', meaning: 'Runoff volume (m³)' }, { symbol: 'C', meaning: 'Runoff coefficient' }, { symbol: 'P', meaning: 'Annual rainfall (m)' }, { symbol: 'A', meaning: 'Catchment area (m²)' }] },
          { name: 'SCS Curve Number Runoff', formula: 'Q = (P - Ia)² / (P - Ia + S), P > Ia', variables: [{ symbol: 'Q', meaning: 'Runoff depth (mm)' }, { symbol: 'P', meaning: 'Rainfall depth (mm)' }, { symbol: 'Ia', meaning: 'Initial abstraction = 0.2S (mm)' }, { symbol: 'S', meaning: 'Potential retention = 25400/CN - 254 (mm)' }] },
          { name: 'Potential Retention (SCS)', formula: 'S = 25400/CN - 254', variables: [{ symbol: 'S', meaning: 'Potential retention (mm)' }, { symbol: 'CN', meaning: 'Curve Number (30-100)' }] },
          { name: 'Rational Method', formula: 'Q_p = C × I × A / 360', variables: [{ symbol: 'Q_p', meaning: 'Peak runoff (m³/s)' }, { symbol: 'C', meaning: 'Runoff coefficient' }, { symbol: 'I', meaning: 'Rainfall intensity (mm/h)' }, { symbol: 'A', meaning: 'Catchment area (ha)' }] },
        ],
      },
      {
        topic: 'Soil Erosion & Conservation',
        formulas: [
          { name: 'Universal Soil Loss Equation', formula: 'A = R × K × LS × C × P', variables: [{ symbol: 'A', meaning: 'Annual soil loss (t/ha/yr)' }, { symbol: 'R', meaning: 'Rainfall erosivity factor' }, { symbol: 'K', meaning: 'Soil erodibility factor' }, { symbol: 'LS', meaning: 'Slope length-gradient factor' }, { symbol: 'C', meaning: 'Cover management factor' }, { symbol: 'P', meaning: 'Support practice factor' }] },
        ],
      },
      {
        topic: 'Channel & Pipe Flow',
        formulas: [
          { name: "Manning's Equation (Velocity)", formula: 'v = (1/n) × R^(2/3) × √S', variables: [{ symbol: 'v', meaning: 'Flow velocity (m/s)' }, { symbol: 'n', meaning: "Manning's roughness coefficient" }, { symbol: 'R', meaning: 'Hydraulic radius (m)' }, { symbol: 'S', meaning: 'Channel slope (m/m)' }] },
          { name: "Manning's Equation (Flow)", formula: 'Q = (1/n) × A × R^(2/3) × √S', variables: [{ symbol: 'Q', meaning: 'Flow rate (m³/s)' }, { symbol: 'A', meaning: 'Cross-sectional area (m²)' }, { symbol: 'n', meaning: "Manning's roughness" }, { symbol: 'R', meaning: 'Hydraulic radius (m)' }, { symbol: 'S', meaning: 'Slope (m/m)' }] },
          { name: 'Hydraulic Radius', formula: 'R = A / P', variables: [{ symbol: 'R', meaning: 'Hydraulic radius (m)' }, { symbol: 'A', meaning: 'Flow area (m²)' }, { symbol: 'P', meaning: 'Wetted perimeter (m)' }] },
          { name: 'Rectangular Channel Area', formula: 'A = b × y', variables: [{ symbol: 'A', meaning: 'Flow area (m²)' }, { symbol: 'b', meaning: 'Channel width (m)' }, { symbol: 'y', meaning: 'Flow depth (m)' }] },
          { name: 'Rectangular Channel Wetted Perimeter', formula: 'P = b + 2y', variables: [{ symbol: 'P', meaning: 'Wetted perimeter (m)' }, { symbol: 'b', meaning: 'Channel width (m)' }, { symbol: 'y', meaning: 'Flow depth (m)' }] },
        ],
      },
      {
        topic: 'Flood & Risk Analysis',
        formulas: [
          { name: 'Flood Risk Probability', formula: 'Risk = 1 - (1 - 1/T)^n', variables: [{ symbol: 'Risk', meaning: 'Probability of exceedance in n years' }, { symbol: 'T', meaning: 'Return period (years)' }, { symbol: 'n', meaning: 'Design life (years)' }] },
          { name: 'Return Period', formula: 'T = (n + 1) / m', variables: [{ symbol: 'T', meaning: 'Return period (years)' }, { symbol: 'n', meaning: 'Number of years of record' }, { symbol: 'm', meaning: 'Rank of event (1 = largest)' }] },
        ],
      },
      {
        topic: 'Crop Water & Evapotranspiration',
        formulas: [
          { name: 'Crop Evapotranspiration', formula: 'ET_c = K_c × ET_o', variables: [{ symbol: 'ET_c', meaning: 'Crop evapotranspiration (mm/day)' }, { symbol: 'K_c', meaning: 'Crop coefficient' }, { symbol: 'ET_o', meaning: 'Reference evapotranspiration (mm/day)' }] },
          { name: 'Water Requirement (Volume)', formula: 'V_w = ET_c × A', variables: [{ symbol: 'V_w', meaning: 'Water volume required (m³)' }, { symbol: 'ET_c', meaning: 'Crop ET (m/day)' }, { symbol: 'A', meaning: 'Area (m²)' }] },
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
          { name: 'Moisture Content (Wet Basis)', formula: 'MC_wb = (W_w / W_t) × 100%', variables: [{ symbol: 'MC_wb', meaning: 'Moisture content wet basis (%)' }, { symbol: 'W_w', meaning: 'Weight of water (kg)' }, { symbol: 'W_t', meaning: 'Total weight (kg)' }] },
          { name: 'Moisture Content (Dry Basis)', formula: 'MC_db = (W_w / W_d) × 100%', variables: [{ symbol: 'MC_db', meaning: 'Moisture content dry basis (%)' }, { symbol: 'W_w', meaning: 'Weight of water (kg)' }, { symbol: 'W_d', meaning: 'Dry matter weight (kg)' }] },
          { name: 'Dry Matter Conservation', formula: 'W_f = W_i × (100 - MC_i) / (100 - MC_f)', variables: [{ symbol: 'W_f', meaning: 'Final weight (kg)' }, { symbol: 'W_i', meaning: 'Initial weight (kg)' }, { symbol: 'MC_i', meaning: 'Initial moisture content (%)' }, { symbol: 'MC_f', meaning: 'Final moisture content (%)' }] },
          { name: 'Water Removed During Drying', formula: 'W_rem = W_i - W_f', variables: [{ symbol: 'W_rem', meaning: 'Water removed (kg)' }, { symbol: 'W_i', meaning: 'Initial weight (kg)' }, { symbol: 'W_f', meaning: 'Final weight (kg)' }] },
          { name: 'Moisture Removal Rate', formula: 'MR = W_rem / t', variables: [{ symbol: 'MR', meaning: 'Moisture removal rate (kg/h)' }, { symbol: 'W_rem', meaning: 'Water removed (kg)' }, { symbol: 't', meaning: 'Drying time (h)' }] },
          { name: 'Drying Air Required', formula: 'm_air = m_water / (w_out - w_in)', variables: [{ symbol: 'm_air', meaning: 'Mass of dry air (kg)' }, { symbol: 'm_water', meaning: 'Water to remove (kg)' }, { symbol: 'w_out', meaning: 'Exit air humidity (kg/kg)' }, { symbol: 'w_in', meaning: 'Inlet air humidity (kg/kg)' }] },
        ],
      },
      {
        topic: 'Heat Transfer',
        formulas: [
          { name: 'Sensible Heat', formula: 'Q = m × Cp × ΔT', variables: [{ symbol: 'Q', meaning: 'Heat energy (kJ)' }, { symbol: 'm', meaning: 'Mass (kg)' }, { symbol: 'Cp', meaning: 'Specific heat capacity (kJ/kg·°C)' }, { symbol: 'ΔT', meaning: 'Temperature change (°C)' }] },
          { name: 'Latent Heat', formula: 'Q = m × λ', variables: [{ symbol: 'Q', meaning: 'Heat energy (kJ)' }, { symbol: 'm', meaning: 'Mass (kg)' }, { symbol: 'λ', meaning: 'Latent heat of vaporization (kJ/kg)' }] },
          { name: 'Log Mean Temperature Difference', formula: 'ΔT_lm = (ΔT₁ - ΔT₂) / ln(ΔT₁/ΔT₂)', variables: [{ symbol: 'ΔT_lm', meaning: 'LMTD (°C)' }, { symbol: 'ΔT₁', meaning: 'Temperature difference at one end (°C)' }, { symbol: 'ΔT₂', meaning: 'Temperature difference at other end (°C)' }] },
          { name: 'Heat Exchanger Duty', formula: 'Q = U × A × ΔT_lm', variables: [{ symbol: 'Q', meaning: 'Heat transfer rate (W or kJ/h)' }, { symbol: 'U', meaning: 'Overall heat transfer coefficient' }, { symbol: 'A', meaning: 'Heat transfer area (m²)' }, { symbol: 'ΔT_lm', meaning: 'LMTD (°C)' }] },
        ],
      },
      {
        topic: 'Biogas & Fermentation',
        formulas: [
          { name: 'Volatile Solids Loading', formula: 'VS = N × M × F_vs', variables: [{ symbol: 'VS', meaning: 'Volatile solids per day (kg)' }, { symbol: 'N', meaning: 'Number of animals' }, { symbol: 'M', meaning: 'Manure per animal (kg/day)' }, { symbol: 'F_vs', meaning: 'Volatile solids fraction (decimal)' }] },
          { name: 'Biogas Production', formula: 'V_biogas = VS × Y', variables: [{ symbol: 'V_biogas', meaning: 'Biogas volume (m³/day)' }, { symbol: 'VS', meaning: 'Volatile solids (kg/day)' }, { symbol: 'Y', meaning: 'Biogas yield (m³/kg VS)' }] },
          { name: 'Methane Content', formula: 'V_CH₄ = V_biogas × %CH₄', variables: [{ symbol: 'V_CH₄', meaning: 'Methane volume (m³/day)' }, { symbol: 'V_biogas', meaning: 'Total biogas (m³/day)' }, { symbol: '%CH₄', meaning: 'Methane percentage (typically 55-65%)' }] },
          { name: 'Fermenter Volume', formula: 'V_f = V_d × HRT × H_f', variables: [{ symbol: 'V_f', meaning: 'Fermenter volume (m³)' }, { symbol: 'V_d', meaning: 'Daily substrate volume (m³/day)' }, { symbol: 'HRT', meaning: 'Hydraulic retention time (days)' }, { symbol: 'H_f', meaning: 'Headspace factor (1.2-1.3)' }] },
        ],
      },
      {
        topic: 'Feed & Food Processing',
        formulas: [
          { name: "Pearson's Square (Feed Formulation)", formula: 'Parts_H / Parts_L = (T - P_L) / (P_H - T)', variables: [{ symbol: 'Parts_H', meaning: 'Parts of high-CP ingredient' }, { symbol: 'Parts_L', meaning: 'Parts of low-CP ingredient' }, { symbol: 'T', meaning: 'Target CP (%)' }, { symbol: 'P_H', meaning: 'High ingredient CP (%)' }, { symbol: 'P_L', meaning: 'Low ingredient CP (%)' }] },
        ],
      },
      {
        topic: 'Structures & Ventilation',
        formulas: [
          { name: 'Ventilation Rate', formula: 'Q_v = V × ACH', variables: [{ symbol: 'Q_v', meaning: 'Ventilation rate (m³/h)' }, { symbol: 'V', meaning: 'Room volume (m³)' }, { symbol: 'ACH', meaning: 'Air changes per hour' }] },
          { name: 'Psychrometric Relative Humidity', formula: 'RH = (w / w_s) × 100%', variables: [{ symbol: 'RH', meaning: 'Relative humidity (%)' }, { symbol: 'w', meaning: 'Actual humidity ratio (kg/kg)' }, { symbol: 'w_s', meaning: 'Saturation humidity ratio (kg/kg)' }] },
          { name: 'Structural Compressive Stress', formula: 'σ = F / A', variables: [{ symbol: 'σ', meaning: 'Compressive stress (Pa or kPa)' }, { symbol: 'F', meaning: 'Applied force (N)' }, { symbol: 'A', meaning: 'Cross-sectional area (m²)' }] },
        ],
      },
    ],
  },
];
