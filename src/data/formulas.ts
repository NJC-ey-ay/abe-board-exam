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
          { name: 'Power-Torque Relationship', formula: 'T = 9549 × P / N', variables: [{ symbol: 'T', meaning: 'Torque (N·m)' }, { symbol: 'P', meaning: 'Power (kW)' }, { symbol: 'N', meaning: 'Rotational speed (RPM)' }], notes: '9549 converts kW/RPM to N·m' },
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
      {
        topic: 'Fluid Mechanics',
        formulas: [
          { name: 'Hydrostatic Pressure', formula: 'P = ρgh', variables: [{ symbol: 'P', meaning: 'Hydrostatic pressure (Pa)' }, { symbol: 'ρ', meaning: 'Fluid density (kg/m³)' }, { symbol: 'g', meaning: 'Gravitational acceleration (9.81 m/s²)' }, { symbol: 'h', meaning: 'Depth (m)' }] },
          { name: 'Continuity Equation', formula: 'A₁v₁ = A₂v₂', variables: [{ symbol: 'A₁', meaning: 'Area at section 1 (m²)' }, { symbol: 'v₁', meaning: 'Velocity at section 1 (m/s)' }, { symbol: 'A₂', meaning: 'Area at section 2 (m²)' }, { symbol: 'v₂', meaning: 'Velocity at section 2 (m/s)' }], notes: 'Conservation of mass for incompressible flow' },
          { name: 'Pump Power', formula: 'P = ρgQH / η', variables: [{ symbol: 'P', meaning: 'Pump power (W)' }, { symbol: 'ρ', meaning: 'Fluid density (kg/m³)' }, { symbol: 'g', meaning: 'Gravity (9.81 m/s²)' }, { symbol: 'Q', meaning: 'Flow rate (m³/s)' }, { symbol: 'H', meaning: 'Total head (m)' }, { symbol: 'η', meaning: 'Pump efficiency (decimal)' }] },
        ],
      },
      {
        topic: 'Thermodynamics',
        formulas: [
          { name: "Fourier's Law (Conduction)", formula: 'Q̇ = kA × ΔT / L', variables: [{ symbol: 'Q̇', meaning: 'Heat transfer rate (W)' }, { symbol: 'k', meaning: 'Thermal conductivity (W/m·K)' }, { symbol: 'A', meaning: 'Area (m²)' }, { symbol: 'ΔT', meaning: 'Temperature difference (K)' }, { symbol: 'L', meaning: 'Thickness (m)' }] },
          { name: 'Refrigeration COP', formula: 'COP = Q_L / W_in', variables: [{ symbol: 'COP', meaning: 'Coefficient of performance' }, { symbol: 'Q_L', meaning: 'Heat removed (kJ)' }, { symbol: 'W_in', meaning: 'Work input (kJ)' }] },
          { name: 'Carnot Efficiency', formula: 'η = 1 - T_C / T_H', variables: [{ symbol: 'η', meaning: 'Carnot efficiency' }, { symbol: 'T_C', meaning: 'Cold reservoir temp (K)' }, { symbol: 'T_H', meaning: 'Hot reservoir temp (K)' }], notes: 'Maximum theoretical efficiency for a heat engine' },
        ],
      },
      {
        topic: 'Engineering Economy',
        formulas: [
          { name: 'Simple Interest', formula: 'A = P(1 + rt)', variables: [{ symbol: 'A', meaning: 'Total amount' }, { symbol: 'P', meaning: 'Principal' }, { symbol: 'r', meaning: 'Annual interest rate' }, { symbol: 't', meaning: 'Time (years)' }] },
          { name: 'Present Worth', formula: 'PW = F / (1 + i)ⁿ', variables: [{ symbol: 'PW', meaning: 'Present worth' }, { symbol: 'F', meaning: 'Future value' }, { symbol: 'i', meaning: 'Discount rate' }, { symbol: 'n', meaning: 'Number of periods' }] },
          { name: 'Straight-line Depreciation', formula: 'D = (C - S) / n', variables: [{ symbol: 'D', meaning: 'Annual depreciation' }, { symbol: 'C', meaning: 'Initial cost' }, { symbol: 'S', meaning: 'Salvage value' }, { symbol: 'n', meaning: 'Useful life (years)' }] },
          { name: 'Break-even Point', formula: 'BEP = FC / (P - VC)', variables: [{ symbol: 'BEP', meaning: 'Break-even quantity' }, { symbol: 'FC', meaning: 'Fixed costs' }, { symbol: 'P', meaning: 'Price per unit' }, { symbol: 'VC', meaning: 'Variable cost per unit' }] },
          { name: 'Capital Recovery', formula: 'AW = P × i(1+i)ⁿ / ((1+i)ⁿ - 1)', variables: [{ symbol: 'AW', meaning: 'Annual worth' }, { symbol: 'P', meaning: 'Present investment' }, { symbol: 'i', meaning: 'Interest rate' }, { symbol: 'n', meaning: 'Number of periods' }] },
        ],
      },
      {
        topic: 'PAES Performance Standards',
        formulas: [
          { name: 'Threshing Efficiency', formula: 'η_thresh = (M_t / M_total) × 100%', variables: [{ symbol: 'η_thresh', meaning: 'Threshing efficiency (%)' }, { symbol: 'M_t', meaning: 'Threshed grain (kg)' }, { symbol: 'M_total', meaning: 'Total grain input (kg)' }], notes: 'PAES: ≥ 98% for mechanical threshers' },
          { name: 'Drying Efficiency', formula: 'η_dry = (W_evap / W_theo) × 100%', variables: [{ symbol: 'η_dry', meaning: 'Drying efficiency (%)' }, { symbol: 'W_evap', meaning: 'Actual water evaporated (kg)' }, { symbol: 'W_theo', meaning: 'Theoretical water removal (kg)' }] },
          { name: 'Grain Damage', formula: 'Damage% = (M_damaged / M_total) × 100%', variables: [{ symbol: 'Damage%', meaning: 'Grain damage (%)' }, { symbol: 'M_damaged', meaning: 'Damaged grain mass (kg)' }, { symbol: 'M_total', meaning: 'Total grain mass (kg)' }], notes: 'PAES: paddy ≤ 1%, corn ≤ 2%' },
          { name: 'Germination Rate', formula: 'Germ% = (N_germ / N_total) × 100%', variables: [{ symbol: 'Germ%', meaning: 'Germination rate (%)' }, { symbol: 'N_germ', meaning: 'Germinated seeds' }, { symbol: 'N_total', meaning: 'Total seeds tested' }] },
          { name: 'Transplanting Efficiency', formula: 'η_trans = (H_plants / H_total) × 100%', variables: [{ symbol: 'η_trans', meaning: 'Transplanting efficiency (%)' }, { symbol: 'H_plants', meaning: 'Hills with plants' }, { symbol: 'H_total', meaning: 'Total hills transplanted' }] },
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
          { name: 'Drip Irrigation Time', formula: 't = ET × S_p × S_l / q_e', variables: [{ symbol: 't', meaning: 'Irrigation time (h/day)' }, { symbol: 'ET', meaning: 'Evapotranspiration (mm/day)' }, { symbol: 'S_p', meaning: 'Plant spacing (m)' }, { symbol: 'S_l', meaning: 'Lateral spacing (m)' }, { symbol: 'q_e', meaning: 'Emitter flow rate (L/h)' }], notes: 'For drip irrigation scheduling' },
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
        topic: 'Soil Mechanics',
        formulas: [
          { name: 'Gravimetric Moisture Content', formula: 'w = (M_w - M_d) / M_d × 100%', variables: [{ symbol: 'w', meaning: 'Moisture content (%)' }, { symbol: 'M_w', meaning: 'Wet soil mass (g)' }, { symbol: 'M_d', meaning: 'Oven-dry soil mass (g)' }] },
          { name: 'Void Ratio & Saturation', formula: 'e = (G_sγ_w / γ_d) - 1,  S = wG_s / e', variables: [{ symbol: 'e', meaning: 'Void ratio' }, { symbol: 'G_s', meaning: 'Specific gravity of solids' }, { symbol: 'γ_w', meaning: 'Unit weight of water (kN/m³)' }, { symbol: 'γ_d', meaning: 'Dry unit weight (kN/m³)' }, { symbol: 'S', meaning: 'Degree of saturation (%)' }, { symbol: 'w', meaning: 'Moisture content (decimal)' }], notes: 'Two-part formula: find e then S' },
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
          { name: 'Gumbel Flood Frequency', formula: 'Q_T = x̄ + Kσ', variables: [{ symbol: 'Q_T', meaning: 'T-year flood discharge' }, { symbol: 'x̄', meaning: 'Mean annual flood' }, { symbol: 'K', meaning: 'Gumbel frequency factor (depends on T)' }, { symbol: 'σ', meaning: 'Standard deviation of annual floods' }] },
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
          { name: 'Biogas Energy Content', formula: 'E = V_biogas × CH₄% × LHV', variables: [{ symbol: 'E', meaning: 'Energy content (MJ/day)' }, { symbol: 'V_biogas', meaning: 'Biogas volume (m³/day)' }, { symbol: 'CH₄%', meaning: 'Methane fraction (decimal)' }, { symbol: 'LHV', meaning: 'Lower heating value of CH₄ (MJ/m³)' }] },
          { name: 'Complete Biogas from Waste', formula: 'V_biogas = N × W × rate × (1 - MC) × VS × yield', variables: [{ symbol: 'V_biogas', meaning: 'Biogas volume (m³/day)' }, { symbol: 'N', meaning: 'Number of animals' }, { symbol: 'W', meaning: 'Waste per animal (kg/day)' }, { symbol: 'rate', meaning: 'Collection rate (decimal)' }, { symbol: 'MC', meaning: 'Moisture content of waste (decimal)' }, { symbol: 'VS', meaning: 'Volatile solids fraction of dry matter (decimal)' }, { symbol: 'yield', meaning: 'Biogas yield per kg VS (m³/kg)' }], notes: 'Complete biogas estimation from livestock waste' },
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
      {
        topic: 'Refrigeration',
        formulas: [
          { name: 'Refrigeration Ton Conversion', formula: 'TR = Q_cooling / 3.517', variables: [{ symbol: 'TR', meaning: 'Tons of refrigeration' }, { symbol: 'Q_cooling', meaning: 'Cooling capacity (kW)' }], notes: '1 TR = 3.517 kW = heat to melt 1 ton of ice in 24h' },
        ],
      },
      {
        topic: 'Food Processing',
        formulas: [
          { name: 'D-value (Thermal Death Time)', formula: 't = D × log(N₀ / N)', variables: [{ symbol: 't', meaning: 'Process time (min)' }, { symbol: 'D', meaning: 'Decimal reduction time (min)' }, { symbol: 'N₀', meaning: 'Initial microbial count' }, { symbol: 'N', meaning: 'Surviving count' }], notes: 'D-value: time to reduce population by 90% at a given temperature' },
          { name: '12D Concept (Commercial Sterility)', formula: 'F = D × (log N₀ - log N)', variables: [{ symbol: 'F', meaning: 'Sterilization value (min)' }, { symbol: 'D', meaning: 'D-value at reference temp (min)' }, { symbol: 'N₀', meaning: 'Initial spore count' }, { symbol: 'N', meaning: 'Final spore count' }], notes: '12D = 12 log reductions of C. botulinum spores for commercial sterility' },
        ],
      },
      {
        topic: 'Strength of Materials',
        formulas: [
          { name: 'Bending Stress', formula: 'σ = Mc / I', variables: [{ symbol: 'σ', meaning: 'Bending stress (Pa)' }, { symbol: 'M', meaning: 'Bending moment (N·m)' }, { symbol: 'c', meaning: 'Distance from neutral axis (m)' }, { symbol: 'I', meaning: 'Moment of inertia (m⁴)' }] },
          { name: 'Eccentric Loading', formula: 'σ = P/A ± My/I', variables: [{ symbol: 'σ', meaning: 'Combined stress (Pa)' }, { symbol: 'P', meaning: 'Axial load (N)' }, { symbol: 'A', meaning: 'Cross-sectional area (m²)' }, { symbol: 'M', meaning: 'Moment from eccentricity (N·m)' }, { symbol: 'y', meaning: 'Distance from centroid (m)' }, { symbol: 'I', meaning: 'Moment of inertia (m⁴)' }] },
        ],
      },
      {
        topic: 'Psychrometrics',
        formulas: [
          { name: 'Saturation Vapor Pressure', formula: 'P_vs = 0.6108 × exp(17.27T / (T + 237.3))', variables: [{ symbol: 'P_vs', meaning: 'Saturation vapor pressure (kPa)' }, { symbol: 'T', meaning: 'Temperature (°C)' }], notes: 'Magnus formula approximation for saturation vapor pressure' },
          { name: 'Moist Air Enthalpy', formula: 'h = 1.005T + W(2501 + 1.88T)', variables: [{ symbol: 'h', meaning: 'Specific enthalpy (kJ/kg dry air)' }, { symbol: 'T', meaning: 'Dry-bulb temperature (°C)' }, { symbol: 'W', meaning: 'Humidity ratio (kg/kg dry air)' }] },
        ],
      },
      {
        topic: 'Structural Analysis',
        formulas: [
          { name: 'Shear & Moment Relationship', formula: 'V = dM/dx,  M(x) = ∫V dx', variables: [{ symbol: 'V', meaning: 'Shear force (N)' }, { symbol: 'M', meaning: 'Bending moment (N·m)' }, { symbol: 'x', meaning: 'Position along beam (m)' }] },
          { name: 'Fixed-end Moments', formula: 'M_F = wL²/12 (uniform),  M_F = PL/8 (point)', variables: [{ symbol: 'M_F', meaning: 'Fixed-end moment (N·m)' }, { symbol: 'w', meaning: 'Uniform load (N/m)' }, { symbol: 'L', meaning: 'Span (m)' }, { symbol: 'P', meaning: 'Point load at midspan (N)' }] },
          { name: 'Simply Supported Reaction', formula: 'R_A = R_B = P/2', variables: [{ symbol: 'R_A', meaning: 'Reaction at support A (N)' }, { symbol: 'R_B', meaning: 'Reaction at support B (N)' }, { symbol: 'P', meaning: 'Concentrated load at midspan (N)' }] },
        ],
      },
      {
        topic: 'Post-Harvest Processing',
        formulas: [
          { name: 'Milling Recovery', formula: 'Recovery% = (M_milled / M_paddy) × 100%', variables: [{ symbol: 'Recovery%', meaning: 'Milling recovery (%)' }, { symbol: 'M_milled', meaning: 'Mass of milled rice (kg)' }, { symbol: 'M_paddy', meaning: 'Mass of paddy input (kg)' }], notes: 'PAES: typical recovery 60-68% for well-milled rice' },
        ],
      },
    ],
  },
];
