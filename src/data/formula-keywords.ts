export interface KeywordFormula {
  keywords: string[];
  formulaName: string;
  formula: string;
  area: string;
  whenToUse: string;
  example?: string;
}

export const keywordFormulas: KeywordFormula[] = [
  // === AREA A: POWER, ENERGY & MACHINERY ===
  {
    keywords: ['field capacity', 'effective field capacity', 'hectares per hour', 'area per time'],
    formulaName: 'Effective Field Capacity',
    formula: 'C = (W \\times S \\times E) / 10',
    area: 'A',
    whenToUse: 'Given working width (m), speed (km/h), and field efficiency',
    example: 'Tractor pulling 2.0m tiller at 5 km/h, 80% efficiency → C = (2×5×0.8)/10 = 0.80 ha/h'
  },
  {
    keywords: ['theoretical field capacity', 'maximum capacity', 'ideal capacity'],
    formulaName: 'Theoretical Field Capacity',
    formula: 'C_t = (W \\times S) / 10',
    area: 'A',
    whenToUse: 'Given working width and speed, assuming 100% efficiency'
  },
  {
    keywords: ['field efficiency', 'efficiency percentage', 'actual vs theoretical'],
    formulaName: 'Field Efficiency',
    formula: 'E = C_a / C_t \\times 100\\%',
    area: 'A',
    whenToUse: 'Given actual and theoretical field capacities to find efficiency'
  },
  {
    keywords: ['drawbar power', 'power at the drawbar', 'pull force speed'],
    formulaName: 'Drawbar Power',
    formula: 'P_{db} = (F \\times S) / 3.6',
    area: 'A',
    whenToUse: 'Given draft force (kN) and travel speed (km/h) to find power at drawbar'
  },
  {
    keywords: ['PTO power', 'power take-off', 'transmission efficiency'],
    formulaName: 'PTO Power',
    formula: 'P_{PTO} = BP \\times \\eta_{trans}',
    area: 'A',
    whenToUse: 'Given brake power and transmission efficiency to find PTO output'
  },
  {
    keywords: ['indicated power', 'engine power from cylinders', 'MEP', 'mean effective pressure'],
    formulaName: 'Indicated Power (4-stroke)',
    formula: 'IP = (MEP \\times L \\times A \\times N \\times n) / 60000',
    area: 'A',
    whenToUse: 'Given engine geometry and MEP to find indicated power; 60000 for 4-stroke, 30000 for 2-stroke'
  },
  {
    keywords: ['brake power', 'output power', 'shaft power', 'BHP'],
    formulaName: 'Brake Power',
    formula: 'BP = IP - FP',
    area: 'A',
    whenToUse: 'Given indicated power and friction power losses'
  },
  {
    keywords: ['mechanical efficiency', 'engine efficiency'],
    formulaName: 'Mechanical Efficiency',
    formula: '\\eta_{mech} = BP / IP \\times 100\\%',
    area: 'A',
    whenToUse: 'Given brake and indicated power to find mechanical efficiency'
  },
  {
    keywords: ['displacement', 'engine displacement', 'bore stroke cylinders', 'swept volume'],
    formulaName: 'Total Engine Displacement',
    formula: 'V_d = (\\pi/4) \\times D^2 \\times L \\times n',
    area: 'A',
    whenToUse: 'Given bore (cm), stroke (cm), and cylinder count'
  },
  {
    keywords: ['compression ratio', 'CR', 'clearance volume'],
    formulaName: 'Compression Ratio',
    formula: 'CR = (V_d + V_c) / V_c',
    area: 'A',
    whenToUse: 'Given displacement and clearance volume'
  },
  {
    keywords: ['fuel consumption', 'fuel rate', 'liters per hour'],
    formulaName: 'Fuel Consumption (Volume)',
    formula: 'V = (BP \\times SFC) / \\rho',
    area: 'A',
    whenToUse: 'Given brake power, specific fuel consumption (kg/kW·h), and fuel density (kg/L)'
  },
  {
    keywords: ['thermal efficiency', 'heat to work', 'fuel energy conversion'],
    formulaName: 'Thermal Efficiency',
    formula: '\\eta_{th} = W_{out} / Q_{in} \\times 100\\%',
    area: 'A',
    whenToUse: 'Given useful work output and total heat energy input'
  },
  {
    keywords: ['draft force', 'implement pull', 'soil resistance', 'plow force'],
    formulaName: 'Multi-disc Plow Draft',
    formula: 'D = n \\times w \\times d \\times K',
    area: 'A',
    whenToUse: 'Given disc count, width/disc, depth, and soil resistance (kN/m²)'
  },
  {
    keywords: ['overall efficiency', 'combined efficiency', 'efficiency chain'],
    formulaName: 'Overall Efficiency Chain',
    formula: '\\eta_{total} = \\eta_1 \\times \\eta_2 \\times \\eta_3 \\times ... \\times \\eta_n',
    area: 'A',
    whenToUse: 'Given multiple efficiency stages connected in series'
  },
  {
    keywords: ['multi-row planter', 'planter capacity', 'seed drill capacity'],
    formulaName: 'Multi-row Planter Capacity',
    formula: 'C = (N \\times Sp \\times S \\times E) / 10',
    area: 'A',
    whenToUse: 'Given row count, row spacing (m), speed (km/h), and efficiency'
  },
  {
    keywords: ['total harvest', 'crop yield output', 'harvest production'],
    formulaName: 'Total Harvest Output',
    formula: 'O = C \\times Y \\times t',
    area: 'A',
    whenToUse: 'Given field capacity (ha/h), yield (t/ha), and operating time (h)'
  },
  {
    keywords: ['heat input', 'fuel energy input', 'calorific value'],
    formulaName: 'Heat Input from Fuel',
    formula: 'Q_{in} = BP \\times SFC \\times CV',
    area: 'A',
    whenToUse: 'Given brake power, specific fuel consumption, and fuel calorific value',
    example: 'Engine at 100 kW, SFC = 0.25 kg/kW·h, CV = 42 MJ/kg → Q = 100 × 0.25 × 42 = 1050 MJ/h'
  },
  {
    keywords: ['engine heat balance', 'heat distribution'],
    formulaName: 'Engine Heat Balance',
    formula: 'Q_{fuel} = Q_{brake} + Q_{cool} + Q_{exhaust} + Q_{friction}',
    area: 'A',
    whenToUse: 'Given heat losses to determine fuel energy required or vice versa'
  },
  {
    keywords: ['power train efficiency', 'transmission drive tractive'],
    formulaName: 'Power Train Efficiency',
    formula: '\\eta = \\eta_{trans} \\times \\eta_{drive} \\times \\eta_{tractive}',
    area: 'A',
    whenToUse: 'Given individual drivetrain component efficiencies'
  },
  {
    keywords: ['hydraulic power', 'pump power', 'PTO pump'],
    formulaName: 'PTO Pump Power',
    formula: 'P_{hyd} = P_{PTO} \\times \\eta_{pump}',
    area: 'A',
    whenToUse: 'Given PTO power and pump efficiency to find hydraulic output'
  },

  // Fluid Mechanics
  {
    keywords: ['hydrostatic pressure', 'P = rho g h', 'fluid pressure at depth', 'water pressure'],
    formulaName: 'Hydrostatic Pressure',
    formula: 'P = \\rho g h',
    area: 'A',
    whenToUse: 'Given fluid density, gravity, and depth to find pressure at a point in a fluid',
    example: 'h = 10 m, ρ = 1000, g = 9.81 → P = 1000 × 9.81 × 10 = 98.1 kPa'
  },
  {
    keywords: ['continuity equation', 'pipe flow velocity', 'A1v1 = A2v2', 'mass conservation', 'flow rate'],
    formulaName: 'Continuity Equation',
    formula: 'A_1 v_1 = A_2 v_2',
    area: 'A',
    whenToUse: 'Given pipe diameters/areas and velocity at one section to find velocity at another'
  },
  {
    keywords: ['pump power', 'hydraulic power', 'rho g Q H', 'water pump sizing'],
    formulaName: 'Pump Power',
    formula: 'P = \\rho g Q H / \\eta',
    area: 'A',
    whenToUse: 'Given flow rate, total head, fluid density, and pump efficiency to find required power'
  },
  // Thermodynamics
  {
    keywords: ["fourier's law", 'heat conduction', 'conductive heat transfer', 'k A delta T over L'],
    formulaName: "Fourier's Law (Conduction)",
    formula: '\\dot{Q} = kA \\times \\Delta T / L',
    area: 'A',
    whenToUse: 'Given thermal conductivity, area, temperature difference, and thickness for conduction rate'
  },
  {
    keywords: ['refrigeration COP', 'coefficient of performance', 'cooling efficiency', 'refrigeration cycle'],
    formulaName: 'Refrigeration COP',
    formula: 'COP = Q_L / W_{in}',
    area: 'A',
    whenToUse: 'Given heat removed from cold space and work input for refrigeration system performance'
  },
  {
    keywords: ['carnot efficiency', 'maximum efficiency', 'heat engine efficiency', 'ideal cycle', 'thermal efficiency limit'],
    formulaName: 'Carnot Efficiency',
    formula: '\\eta = 1 - T_C / T_H',
    area: 'A',
    whenToUse: 'Given hot and cold reservoir temperatures (K) for maximum theoretical heat engine efficiency'
  },
  // Engine Performance
  {
    keywords: ['power torque relationship', 'torque from power', '9549', 'engine torque', 'torque RPM'],
    formulaName: 'Power-Torque Relationship',
    formula: 'T = 9549 \\times P / N',
    area: 'A',
    whenToUse: 'Given power (kW) and rotational speed (RPM) to find engine torque (N·m)'
  },
  // Engineering Economy
  {
    keywords: ['simple interest', 'interest calculation', 'principal interest time', 'P(1+rt)'],
    formulaName: 'Simple Interest',
    formula: 'A = P(1 + rt)',
    area: 'A',
    whenToUse: 'Given principal, annual interest rate, and time (years) for total amount with simple interest'
  },
  {
    keywords: ['present worth', 'present value', 'discounting', 'PV formula', 'P = F/(1+i)^n'],
    formulaName: 'Present Worth',
    formula: 'PW = F / (1 + i)^n',
    area: 'A',
    whenToUse: 'Given future value, discount rate, and number of periods for present worth'
  },
  {
    keywords: ['straight line depreciation', 'depreciation', 'asset value', 'salvage value', 'annual depreciation'],
    formulaName: 'Straight-line Depreciation',
    formula: 'D = (C - S) / n',
    area: 'A',
    whenToUse: 'Given initial cost, salvage value, and useful life for annual depreciation amount'
  },
  {
    keywords: ['break even point', 'BEP', 'breakeven quantity', 'fixed cost variable cost', 'cost analysis'],
    formulaName: 'Break-even Point',
    formula: 'BEP = FC / (P - VC)',
    area: 'A',
    whenToUse: 'Given fixed costs, price per unit, and variable cost per unit for break-even quantity'
  },
  {
    keywords: ['capital recovery', 'annual worth', 'CRF', 'A/P factor', 'annual equivalent cost'],
    formulaName: 'Capital Recovery',
    formula: 'AW = P \\times i(1+i)^n / ((1+i)^n - 1)',
    area: 'A',
    whenToUse: 'Given present investment, interest rate, and periods to find annual cost/recovery amount'
  },
  // PAES Performance Standards
  {
    keywords: ['threshing efficiency', 'PAES thresher', 'grain threshing', 'percentage threshed'],
    formulaName: 'Threshing Efficiency',
    formula: '\\eta_{thresh} = (M_t / M_{total}) \\times 100\\%',
    area: 'A',
    whenToUse: 'Given mass of threshed grain and total grain input for mechanical thresher performance'
  },
  {
    keywords: ['drying efficiency', 'PAES dryer', 'water evaporated', 'drying performance'],
    formulaName: 'Drying Efficiency',
    formula: '\\eta_{dry} = (W_{evap} / W_{theo}) \\times 100\\%',
    area: 'A',
    whenToUse: 'Given actual and theoretical water removal for mechanical dryer efficiency assessment'
  },
  {
    keywords: ['grain damage', 'PAES damage', 'percentage damaged', 'thresher damage', 'broken grains'],
    formulaName: 'Grain Damage',
    formula: 'Damage\\% = (M_{damaged} / M_{total}) \\times 100\\%',
    area: 'A',
    whenToUse: 'Given mass of damaged grains and total mass for thresher/miller performance evaluation',
    example: 'PAES limit: paddy ≤ 1%, corn ≤ 2% for mechanical threshers'
  },
  {
    keywords: ['germination rate', 'seed germination', 'percentage germination', 'seed viability'],
    formulaName: 'Germination Rate',
    formula: 'Germ\\% = (N_{germ} / N_{total}) \\times 100\\%',
    area: 'A',
    whenToUse: 'Given number of germinated seeds and total seeds tested for seed quality assessment'
  },
  {
    keywords: ['transplanting efficiency', 'PAES transplanter', 'hills with plants', 'mechanical transplanting'],
    formulaName: 'Transplanting Efficiency',
    formula: '\\eta_{trans} = (H_{plants} / H_{total}) \\times 100\\%',
    area: 'A',
    whenToUse: 'Given hills with established plants and total hills transplanted for transplanter evaluation'
  },

  // === AREA B: LAND & WATER RESOURCES ===
  {
    keywords: ['application rate', 'sprinkler rate', 'irrigation rate', 'mm per hour'],
    formulaName: 'Sprinkler Application Rate',
    formula: 'AR = (q \\times 3600) / (S_l \\times S_s)',
    area: 'B',
    whenToUse: 'Given sprinkler flow (L/s) and lateral/sprinkler spacing (m)'
  },
  {
    keywords: ['pumping time', 'irrigation time', 'hours to irrigate'],
    formulaName: 'Pumping Time',
    formula: 'T = (A \\times d \\times 10) / (E \\times Q)',
    area: 'B',
    whenToUse: 'Given area (ha), net depth (mm), system efficiency, and flow rate (L/s)'
  },
  {
    keywords: ['irrigation efficiency', 'water application efficiency', 'efficiency of irrigation'],
    formulaName: 'Irrigation Efficiency',
    formula: 'E_i = (W_s / W_d) \\times 100\\%',
    area: 'B',
    whenToUse: 'Given water stored in root zone and total water delivered'
  },
  {
    keywords: ['gross irrigation depth', 'total water needed', 'gross depth'],
    formulaName: 'Gross Irrigation Depth',
    formula: 'd_g = d_n / E',
    area: 'B',
    whenToUse: 'Given net depth required and application efficiency'
  },
  {
    keywords: ['annual runoff', 'runoff volume', 'catchment runoff'],
    formulaName: 'Annual Runoff Volume',
    formula: 'V = C \\times P \\times A',
    area: 'B',
    whenToUse: 'Given runoff coefficient (C), annual rainfall (m), and catchment area (m²)',
    example: 'C=0.3, P=1.5m, A=100 ha → V = 0.3 × 1.5 × 1,000,000 = 450,000 m³'
  },
  {
    keywords: ['SCS curve number', 'CN runoff', 'rainfall runoff', 'NRCS method'],
    formulaName: 'SCS Curve Number Runoff',
    formula: 'Q = (P - Ia)^2 / (P - Ia + S)',
    area: 'B',
    whenToUse: 'Given rainfall (P) and curve number to estimate runoff depth; Ia = 0.2S, S = 25400/CN - 254'
  },
  {
    keywords: ['potential retention', 'S value', 'maximum retention'],
    formulaName: 'Potential Retention (SCS)',
    formula: 'S = 25400/CN - 254',
    area: 'B',
    whenToUse: 'Given curve number (30-100) to find potential retention in mm'
  },
  {
    keywords: ['rational method', 'peak runoff', 'peak discharge', 'storm runoff'],
    formulaName: 'Rational Method',
    formula: 'Q_p = C \\times I \\times A / 360',
    area: 'B',
    whenToUse: 'For peak runoff from small watersheds; given C, intensity (mm/h), area (ha)',
    example: 'C=0.5, I=50 mm/h, A=20 ha → Q = 0.5 × 50 × 20 / 360 = 1.39 m³/s'
  },
  {
    keywords: ['USLE', 'soil loss', 'erosion', 'universal soil loss equation'],
    formulaName: 'Universal Soil Loss Equation (USLE)',
    formula: 'A = R \\times K \\times LS \\times C \\times P',
    area: 'B',
    whenToUse: 'Given rainfall erosivity (R), soil erodibility (K), slope (LS), cover (C), and practice (P) factors',
    example: 'R=250, K=0.3, LS=1.5, C=0.5, P=0.8 → A = 250×0.3×1.5×0.5×0.8 = 45 t/ha·yr'
  },
  {
    keywords: ["manning's equation", "manning velocity", "open channel velocity", "channel flow"],
    formulaName: "Manning's Equation (Velocity)",
    formula: 'v = (1/n) \\times R^{2/3} \\times \\sqrt{S}',
    area: 'B',
    whenToUse: 'Given Manning\'s n, hydraulic radius (m), and channel slope (m/m) for open channel velocity'
  },
  {
    keywords: ["manning's discharge", "manning flow rate", "channel discharge", "open channel Q"],
    formulaName: "Manning's Equation (Flow)",
    formula: 'Q = (1/n) \\times A \\times R^{2/3} \\times \\sqrt{S}',
    area: 'B',
    whenToUse: 'Given Manning\'s n, cross-sectional area, hydraulic radius, and slope for discharge'
  },
  {
    keywords: ['hydraulic radius', 'area over wetted perimeter'],
    formulaName: 'Hydraulic Radius',
    formula: 'R = A / P',
    area: 'B',
    whenToUse: 'Given flow area and wetted perimeter for open channel calculations'
  },
  {
    keywords: ['flood risk', 'exceedance probability', 'return period', 'design life flood'],
    formulaName: 'Flood Risk Probability',
    formula: 'Risk = 1 - (1 - 1/T)^n',
    area: 'B',
    whenToUse: 'Given return period (T) and design life (n years) to find flood exceedance probability'
  },
  {
    keywords: ['return period', 'recurrence interval', 'flood frequency'],
    formulaName: 'Return Period',
    formula: 'T = (n + 1) / m',
    area: 'B',
    whenToUse: 'Given years of record (n) and event rank (m); rank 1 = largest event'
  },
  {
    keywords: ['crop evapotranspiration', 'ETc', 'crop water need', 'consumptive use'],
    formulaName: 'Crop Evapotranspiration',
    formula: 'ET_c = K_c \\times ET_o',
    area: 'B',
    whenToUse: 'Given crop coefficient (Kc) and reference evapotranspiration (ETo, mm/day)'
  },
  {
    keywords: ['water requirement volume', 'crop water volume', 'irrigation volume'],
    formulaName: 'Water Requirement (Volume)',
    formula: 'V_w = ET_c \\times A',
    area: 'B',
    whenToUse: 'Given crop ET (m/day) and area (m²) for total water volume needed'
  },
  {
    keywords: ['rectangular channel area', 'flow area rectangle'],
    formulaName: 'Rectangular Channel Area',
    formula: 'A = b \\times y',
    area: 'B',
    whenToUse: 'Given channel width (b) and flow depth (y) for rectangular section'
  },
  {
    keywords: ['wetted perimeter rectangle'],
    formulaName: 'Rectangular Channel Wetted Perimeter',
    formula: 'P = b + 2y',
    area: 'B',
    whenToUse: 'Given channel width (b) and flow depth (y) for rectangular section'
  },

  {
    keywords: ['drip irrigation', 'trickle irrigation', 'irrigation time', 'emitter flow', 'drip scheduling'],
    formulaName: 'Drip Irrigation Time',
    formula: 't = ET \\times S_p \\times S_l / q_e',
    area: 'B',
    whenToUse: 'Given evapotranspiration (mm/day), plant/lateral spacing (m), and emitter flow (L/h) for drip scheduling'
  },
  {
    keywords: ['gumbel', 'flood frequency', 'extreme value', 'T-year flood', 'flood discharge'],
    formulaName: 'Gumbel Flood Frequency',
    formula: 'Q_T = \\bar{x} + K\\sigma',
    area: 'B',
    whenToUse: 'Given mean annual flood, standard deviation, and Gumbel frequency factor for T-year flood estimate'
  },
  {
    keywords: ['soil moisture', 'gravimetric moisture', 'water content soil', 'wet dry mass', 'moisture content soil'],
    formulaName: 'Gravimetric Moisture Content',
    formula: 'w = (M_w - M_d) / M_d \\times 100\\%',
    area: 'B',
    whenToUse: 'Given wet and oven-dry soil masses to determine gravimetric water content',
    example: 'Wet soil = 150 g, dry = 120 g → w = (150-120)/120 × 100 = 25%'
  },
  {
    keywords: ['void ratio', 'soil saturation', 'degree of saturation', 'specific gravity soil', 'Gs gamma', 'soil compaction'],
    formulaName: 'Void Ratio & Saturation',
    formula: 'e = (G_s \\gamma_w / \\gamma_d) - 1,  S = wG_s / e',
    area: 'B',
    whenToUse: 'Given specific gravity, unit weights, and moisture content to find void ratio and saturation'
  },

  // === AREA C: STRUCTURES, ENVIRONMENT & BIOPROCESS ===
  {
    keywords: ['moisture content wet basis', 'MC wet basis', 'water percentage wet'],
    formulaName: 'Moisture Content (Wet Basis)',
    formula: 'MC_{wb} = (W_w / W_t) \\times 100\\%',
    area: 'C',
    whenToUse: 'Given weight of water and total weight for wet basis moisture content',
    example: '100 kg grain, 20 kg water → MC_wb = (20/100)×100 = 20%'
  },
  {
    keywords: ['moisture content dry basis', 'MC dry basis'],
    formulaName: 'Moisture Content (Dry Basis)',
    formula: 'MC_{db} = (W_w / W_d) \\times 100\\%',
    area: 'C',
    whenToUse: 'Given weight of water and dry matter weight for dry basis moisture content'
  },
  {
    keywords: ['dry matter conservation', 'final weight drying', 'weight after drying', 'shrinkage'],
    formulaName: 'Dry Matter Conservation',
    formula: 'W_f = W_i \\times (100 - MC_i) / (100 - MC_f)',
    area: 'C',
    whenToUse: 'Given initial weight and initial/final moisture content (wet basis) to find final weight',
    example: '1000 kg at 25% MC dried to 14% → W_f = 1000 × (100-25)/(100-14) = 872 kg'
  },
  {
    keywords: ['water removed', 'drying water loss', 'moisture removed'],
    formulaName: 'Water Removed During Drying',
    formula: 'W_{rem} = W_i - W_f',
    area: 'C',
    whenToUse: 'Given initial and final weight to find water removed'
  },
  {
    keywords: ['moisture removal rate', 'drying rate', 'kg per hour drying'],
    formulaName: 'Moisture Removal Rate',
    formula: 'MR = W_{rem} / t',
    area: 'C',
    whenToUse: 'Given water removed (kg) and drying time (h) to find removal rate'
  },
  {
    keywords: ['drying air required', 'air mass drying', 'drying air quantity'],
    formulaName: 'Drying Air Required',
    formula: 'm_{air} = m_{water} / (w_{out} - w_{in})',
    area: 'C',
    whenToUse: 'Given water to remove and inlet/exit air humidity ratios'
  },
  {
    keywords: ['sensible heat', 'temperature change heat', 'Q=mcΔT', 'heating energy'],
    formulaName: 'Sensible Heat',
    formula: 'Q = m \\times Cp \\times \\Delta T',
    area: 'C',
    whenToUse: 'Given mass (kg), specific heat (kJ/kg·°C), and temperature change to find heat energy'
  },
  {
    keywords: ['latent heat', 'vaporization heat', 'phase change heat', 'evaporation energy'],
    formulaName: 'Latent Heat',
    formula: 'Q = m \\times \\lambda',
    area: 'C',
    whenToUse: 'Given mass (kg) and latent heat of vaporization (kJ/kg) for phase change energy'
  },
  {
    keywords: ['LMTD', 'log mean temperature difference', 'heat exchanger delta T'],
    formulaName: 'Log Mean Temperature Difference',
    formula: '\\Delta T_{lm} = (\\Delta T_1 - \\Delta T_2) / \\ln(\\Delta T_1/\\Delta T_2)',
    area: 'C',
    whenToUse: 'Given temperature differences at both ends of a heat exchanger'
  },
  {
    keywords: ['heat exchanger duty', 'heat transfer rate', 'UA LMTD', 'heat exchanger sizing'],
    formulaName: 'Heat Exchanger Duty',
    formula: 'Q = U \\times A \\times \\Delta T_{lm}',
    area: 'C',
    whenToUse: 'Given overall heat transfer coefficient (U), area (A), and LMTD'
  },
  {
    keywords: ['volatile solids loading', 'VS loading', 'manure volatile solids'],
    formulaName: 'Volatile Solids Loading',
    formula: 'VS = N \\times M \\times F_{vs}',
    area: 'C',
    whenToUse: 'Given animal count, manure/animal/day, and volatile solids fraction for biogas sizing'
  },
  {
    keywords: ['biogas production', 'biogas volume', 'methane yield'],
    formulaName: 'Biogas Production',
    formula: 'V_{biogas} = VS \\times Y',
    area: 'C',
    whenToUse: 'Given volatile solids (kg/day) and biogas yield (m³/kg VS)'
  },
  {
    keywords: ['methane content', 'CH4 volume', 'methane percentage'],
    formulaName: 'Methane Content',
    formula: 'V_{CH_4} = V_{biogas} \\times \\%CH_4',
    area: 'C',
    whenToUse: 'Given total biogas volume and methane percentage (typically 55-65%)'
  },
  {
    keywords: ['fermenter volume', 'digester volume', 'biogas tank size', 'HRT digester'],
    formulaName: 'Fermenter Volume',
    formula: 'V_f = V_d \\times HRT \\times H_f',
    area: 'C',
    whenToUse: 'Given daily substrate volume (m³/day), hydraulic retention time (days), and headspace factor (1.2-1.3)'
  },
  {
    keywords: ["pearson's square", 'feed formulation', 'ration balancing', 'protein mixing'],
    formulaName: "Pearson's Square",
    formula: 'Parts_H / Parts_L = (T - P_L) / (P_H - T)',
    area: 'C',
    whenToUse: 'Given target protein % (T), high ingredient protein (PH), and low ingredient protein (PL) for feed mixing'
  },
  {
    keywords: ['ventilation rate', 'air changes', 'room ventilation', 'ACH'],
    formulaName: 'Ventilation Rate',
    formula: 'Q_v = V \\times ACH',
    area: 'C',
    whenToUse: 'Given room volume (m³) and air changes per hour for ventilation fan sizing'
  },
  {
    keywords: ['relative humidity', 'RH psychrometric', 'humidity ratio'],
    formulaName: 'Psychrometric Relative Humidity',
    formula: 'RH = (w / w_s) \\times 100\\%',
    area: 'C',
    whenToUse: 'Given actual humidity ratio and saturation humidity ratio at same temperature'
  },
  {
    keywords: ['compressive stress', 'structural stress', 'force over area', 'column stress'],
    formulaName: 'Structural Compressive Stress',
    formula: '\\sigma = F / A',
    area: 'C',
    whenToUse: 'Given applied force (N) and cross-sectional area (m²) for structural member design'
  },
  {
    keywords: ['refrigeration ton', 'TR conversion', 'ton of refrigeration', 'cooling capacity', '3.517'],
    formulaName: 'Refrigeration Ton Conversion',
    formula: 'TR = Q_{cooling} / 3.517',
    area: 'C',
    whenToUse: 'Given cooling load in kW to convert to tons of refrigeration (1 TR = 3.517 kW)'
  },
  {
    keywords: ['D-value', 'thermal death time', 'decimal reduction', 'microbial reduction', 'sterilization time'],
    formulaName: 'D-value (Thermal Death Time)',
    formula: 't = D \\times \\log(N_0 / N)',
    area: 'C',
    whenToUse: 'Given D-value, initial and final microbial counts to find thermal process time'
  },
  {
    keywords: ['12D concept', 'commercial sterility', 'botulinum cook', 'F value', 'sterilization value', '12 log reduction'],
    formulaName: '12D Concept (Commercial Sterility)',
    formula: 'F = D \\times (\\log N_0 - \\log N)',
    area: 'C',
    whenToUse: 'Given D-value and log reduction required (12 for C. botulinum) for commercial sterilization',
    example: 'D = 1.5 min, 12D → F = 1.5 × 12 = 18 min at 121°C'
  },
  {
    keywords: ['biogas energy', 'biogas calorific value', 'methane energy', 'biogas heat', 'LHV methane'],
    formulaName: 'Biogas Energy Content',
    formula: 'E = V_{biogas} \\times CH_4\\% \\times LHV',
    area: 'C',
    whenToUse: 'Given biogas volume, methane fraction, and lower heating value for energy content'
  },
  {
    keywords: ['complete biogas', 'biogas from waste', 'livestock biogas', 'animal waste biogas', 'biogas estimation'],
    formulaName: 'Complete Biogas from Waste',
    formula: 'V_{biogas} = N \\times W \\times rate \\times (1 - MC) \\times VS \\times yield',
    area: 'C',
    whenToUse: 'Given animal count, waste/animal, collection rate, MC, VS fraction, and yield for total biogas'
  },
  {
    keywords: ['bending stress', 'flexure formula', 'Mc/I', 'beam bending', 'moment of inertia', 'flexural stress'],
    formulaName: 'Bending Stress',
    formula: '\\sigma = Mc / I',
    area: 'C',
    whenToUse: 'Given bending moment, distance from neutral axis, and moment of inertia for beam stress'
  },
  {
    keywords: ['eccentric loading', 'combined stress', 'axial plus bending', 'P/A plus My/I', 'eccentric column'],
    formulaName: 'Eccentric Loading',
    formula: '\\sigma = P/A \\pm My/I',
    area: 'C',
    whenToUse: 'Given axial load, area, moment, distance from centroid, and inertia for combined stress'
  },
  {
    keywords: ['saturation vapor pressure', 'magnus formula', 'vapor pressure temperature', 'psychrometric Pvs'],
    formulaName: 'Saturation Vapor Pressure',
    formula: 'P_{vs} = 0.6108 \\times \\exp(17.27T / (T + 237.3))',
    area: 'C',
    whenToUse: 'Given air temperature (°C) to find saturation vapor pressure (kPa) using Magnus formula'
  },
  {
    keywords: ['moist air enthalpy', 'psychrometric enthalpy', 'humid air energy', 'h = 1.005T + W(2501+1.88T)'],
    formulaName: 'Moist Air Enthalpy',
    formula: 'h = 1.005T + W(2501 + 1.88T)',
    area: 'C',
    whenToUse: 'Given dry-bulb temperature (°C) and humidity ratio (kg/kg) for moist air specific enthalpy'
  },
  {
    keywords: ['shear moment diagram', 'V = dM/dx', 'shear force bending moment', 'beam relationships'],
    formulaName: 'Shear & Moment Relationship',
    formula: 'V = dM/dx,  M(x) = \\int V dx',
    area: 'C',
    whenToUse: 'Given shear force diagram to construct bending moment diagram (or vice versa) for beams'
  },
  {
    keywords: ['fixed end moment', 'FEM', 'wL^2/12', 'PL/8', 'fixed beam', 'moment distribution'],
    formulaName: 'Fixed-end Moments',
    formula: 'M_F = wL^2/12,  M_F = PL/8',
    area: 'C',
    whenToUse: 'Given uniform load (w) or point load (P) and span (L) for fixed-end beam moments'
  },
  {
    keywords: ['simply supported beam', 'beam reaction', 'R = P/2', 'support reaction', 'midspan load'],
    formulaName: 'Simply Supported Reaction',
    formula: 'R_A = R_B = P/2',
    area: 'C',
    whenToUse: 'Given concentrated load at midspan for reactions at each support of a simple beam'
  },
  {
    keywords: ['milling recovery', 'rice milling', 'paddy to rice', 'PAES recovery', 'milling yield', 'percent recovery'],
    formulaName: 'Milling Recovery',
    formula: 'Recovery\\% = (M_{milled} / M_{paddy}) \\times 100\\%',
    area: 'C',
    whenToUse: 'Given mass of milled rice and paddy input for rice mill performance',
    example: '1000 kg paddy → 650 kg rice = 65% recovery (PAES typical: 60-68%)'
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
