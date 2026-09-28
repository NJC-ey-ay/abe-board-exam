// ABELE Board Exam — Formula Reference
//
// SOURCE OF TRUTH: the three official formula handbooks in C:\Users\Arzen\Desktop\FORMULA
//   Area 1 Formula.pdf  -> areaCode 'A'  Power, Energy & Machinery
//   Area 2 Formula.pdf  -> areaCode 'B'  Land & Water Resources
//   Area 3 Formula.pdf  -> areaCode 'C'  Structures, Environment & Bioprocess
//
// Topic order and formula order below follow the handbooks exactly.
// Equations are transcribed verbatim from the source, converted to LaTeX for KaTeX.
// `notes` carries the handbook's "Where:" definitions and any transcription caveats.
// Anomalies in the source are preserved as-is and flagged in notes rather than silently corrected.

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
  // ==========================================================================
  // AREA A — POWER, ENERGY & MACHINERY   (Area 1 Formula.pdf)
  // ==========================================================================
  {
    area: 'Power, Energy & Machinery',
    areaCode: 'A',
    color: 'primary',
    topics: [
      {
        topic: 'Belt Drives',
        formulas: [
          {
            id: 'a-belt-open-length',
            name: 'Open Belt Length',
            formula: 'L = 2C + \\frac{\\pi}{2}(D+d) + \\frac{(D-d)^2}{4C}',
            variables: [
              { symbol: 'L', meaning: 'Belt length' },
              { symbol: 'C', meaning: 'Center-to-center distance of pulleys' },
              { symbol: 'D', meaning: 'Larger pulley diameter' },
              { symbol: 'd', meaning: 'Smaller pulley diameter' },
            ],
            notes: 'If D = d (same diameter): L = 2C + \\pi D',
          },
          {
            id: 'a-belt-cross-length',
            name: 'Cross Belt Length',
            formula: 'L = 2C + \\frac{\\pi}{2}(D+d) + \\frac{(D+d)^2}{4C}',
            variables: [
              { symbol: 'L', meaning: 'Belt length' },
              { symbol: 'C', meaning: 'Center-to-center distance of pulleys' },
              { symbol: 'D', meaning: 'Larger pulley diameter' },
              { symbol: 'd', meaning: 'Smaller pulley diameter' },
            ],
            notes: 'If D = d (same diameter): L = 2C + \\pi D plus a correction term, negligible at equal diameters.',
          },
          {
            id: 'a-belt-center-distance',
            name: 'Center-to-Center Distance',
            formula: 'C = \\frac{B + \\sqrt{B^2 - 8(D-d)^2}}{8}',
            variables: [
              { symbol: 'C', meaning: 'Center-to-center distance' },
              { symbol: 'B', meaning: 'B = 4L - 6.28(D+d)' },
              { symbol: 'D', meaning: 'Larger pulley diameter' },
              { symbol: 'd', meaning: 'Smaller pulley diameter' },
              { symbol: 'L', meaning: 'Belt length' },
            ],
            notes: 'D, d, C, L must all be in the same unit — mm or in.',
          },
          {
            id: 'a-chain-length-pitches',
            name: 'Roller Chain — Length in Pitches',
            formula: 'L = \\frac{T_L + T_S}{2} + 2C + \\left[\\frac{(T_L - T_S)}{2\\pi}\\right]^2 \\div C',
            variables: [
              { symbol: 'L', meaning: 'Chain length in pitches' },
              { symbol: 'T_L', meaning: 'Number of teeth, large sprocket' },
              { symbol: 'T_S', meaning: 'Number of teeth, small sprocket' },
              { symbol: 'C', meaning: 'Center distance in pitches' },
            ],
          },
          {
            id: 'a-arc-length',
            name: 'Length of Arc',
            formula: 'L_{Arc} = \\frac{\\pi D A}{360}',
            variables: [
              { symbol: 'L_{Arc}', meaning: 'Arc length' },
              { symbol: 'D', meaning: 'Diameter' },
              { symbol: 'A', meaning: 'Angle subtended, in degrees' },
            ],
          },
          {
            id: 'a-arc-of-contact',
            name: 'Arc of Contact (on smaller pulley)',
            formula: '\\theta = 180 - 2\\sin^{-1}\\left[\\frac{D-d}{2C}\\right]',
            variables: [
              { symbol: '\\theta', meaning: 'Arc of contact, in degrees' },
              { symbol: 'C', meaning: 'Center distance' },
              { symbol: 'D', meaning: 'Larger pulley diameter' },
              { symbol: 'd', meaning: 'Smaller pulley diameter' },
            ],
            notes: 'D, d, C must be in consistent units, in or mm.',
          },
          {
            id: 'a-belt-hp-requirement',
            name: 'Horsepower Requirement (belt, English units)',
            formula: 'HP = \\frac{(F_1 - F_2)\\,v}{33{,}000}',
            variables: [
              { symbol: 'HP', meaning: 'Horsepower required' },
              { symbol: 'F_1', meaning: 'Tight-side tension, lb' },
              { symbol: 'F_2', meaning: 'Slack-side tension, lb' },
              { symbol: 'v', meaning: 'Belt velocity, ft/min' },
            ],
            notes: 'T (net pull) = F_1 - F_2, in lb; v = belt velocity in ft/min.',
          },
          {
            id: 'a-belt-power-transmitted',
            name: 'Power Transmitted by Belt',
            formula: 'P = 2\\pi T N',
            variables: [
              { symbol: 'P', meaning: 'Power transmitted' },
              { symbol: 'T', meaning: 'T = (F_1 - F_2)r, net torque' },
              { symbol: 'r', meaning: 'Pulley radius' },
              { symbol: 'N', meaning: 'Rotational speed, rpm' },
            ],
            notes: 'T = (F_1 - F_2)r, where r = pulley radius and N = rpm.',
          },
          {
            id: 'a-belt-velocity',
            name: 'Velocity of Belt',
            formula: 'V = \\pi D N = 2\\pi r N',
            variables: [
              { symbol: 'V', meaning: 'Belt velocity' },
              { symbol: 'D', meaning: 'Pulley diameter' },
              { symbol: 'r', meaning: 'Pulley radius' },
              { symbol: 'N', meaning: 'Rotational speed, rpm' },
            ],
          },
          {
            id: 'a-belt-life',
            name: 'Life of Belt',
            formula: 'L = \\frac{l}{v \\cdot N\'}',
            variables: [
              { symbol: 'L', meaning: 'Life of belt' },
              { symbol: 'l', meaning: 'Belt length' },
              { symbol: 'v', meaning: 'Belt speed' },
              { symbol: 'N\'', meaning: 'Number of belt passes to failure' },
            ],
          },
          {
            id: 'a-speed-ratio',
            name: 'Speed Ratio',
            formula: '\\text{Speed Ratio} = \\frac{N_1}{N_2} = \\frac{D_2}{D_1}',
            variables: [
              { symbol: 'N_1', meaning: 'Speed of driver pulley, rpm' },
              { symbol: 'N_2', meaning: 'Speed of driven pulley, rpm' },
              { symbol: 'D_1', meaning: 'Diameter of driver pulley' },
              { symbol: 'D_2', meaning: 'Diameter of driven pulley' },
            ],
          },
          {
            id: 'a-speed-diameter-relation',
            name: 'Speed-Diameter Relation',
            formula: 'D_1 N_1 = D_2 N_2',
            variables: [
              { symbol: 'D_1', meaning: 'Diameter of driver pulley' },
              { symbol: 'D_1', meaning: 'Diameter of driver pulley' },
              { symbol: 'N_1', meaning: 'Speed of driver pulley, rpm' },
              { symbol: 'D_2', meaning: 'Diameter of driven pulley' },
              { symbol: 'N_2', meaning: 'Speed of driven pulley, rpm' },
            ],
          },
        ],
      },
      {
        topic: 'Shafts, Sprockets & Chains',
        formulas: [
          {
            id: 'a-shaft-power-general',
            name: 'General Power Equation',
            formula: 'P = T \\times N',
            variables: [
              { symbol: 'P', meaning: 'Power' },
              { symbol: 'T', meaning: 'Torque' },
              { symbol: 'N', meaning: 'Rotational speed' },
            ],
          },
          {
            id: 'a-shaft-power-delivered',
            name: 'Power Delivered by a Shaft',
            formula: 'P\\,(kW) = \\frac{T\\,(N\\cdot m) \\times N\\,(rpm)}{9{,}550} = \\frac{F\\,(N) \\times V\\,(m/s)}{1{,}000}',
            variables: [
              { symbol: 'P', meaning: 'Power delivered, kW (SI) or hp (English)' },
              { symbol: 'T', meaning: 'Torque, N·m (SI) or ft·lb (English)' },
              { symbol: 'F', meaning: 'Force, N (SI force-velocity form)' },
              { symbol: 'V', meaning: 'Velocity, m/s (SI force-velocity form)' },
              { symbol: 'N', meaning: 'Rotational speed, rpm' },
            ],
            notes: 'SI: P (kW) = T (N·m) × N (rpm) / 9,550. SI (alt., force-velocity form): P (kW) = F (N) × V (m/s) / 1,000. English: P (hp) = 2π T (ft·lb) × N (rpm) / 33,000.',
          },
          {
            id: 'a-shaft-diameter',
            name: 'Shaft Diameter',
            formula: 'D = \\sqrt[3]{\\frac{16T}{\\pi\\sigma}}',
            variables: [
              { symbol: 'D', meaning: 'Shaft diameter' },
              { symbol: 'T', meaning: 'Torque, in·lb' },
              { symbol: '\\sigma', meaning: 'Allowable design stress, lb/in²' },
            ],
          },
          {
            id: 'a-chain-velocity',
            name: 'Chain Velocity',
            formula: 'V = \\frac{N \\times P \\times T}{12}',
            variables: [
              { symbol: 'V', meaning: 'Chain velocity, ft/min' },
              { symbol: 'N', meaning: 'Sprocket speed, rpm' },
              { symbol: 'P', meaning: 'Chain pitch, in' },
              { symbol: 'T', meaning: 'Number of teeth' },
            ],
            notes: 'V in ft/min; N in rpm; P is chain pitch in inches; T is number of teeth.',
          },
          {
            id: 'a-chain-length',
            name: 'Length of Chain (in pitches)',
            formula: 'L = 2C + \\frac{T_L+T_S}{2} + \\left[\\frac{T_L-T_S}{2\\pi}\\right]^2 \\div C',
            variables: [
              { symbol: 'L', meaning: 'Length of chain in pitches' },
              { symbol: 'C', meaning: 'Center-to-center distance in pitches' },
              { symbol: 'T_L', meaning: 'Teeth of large sprocket' },
              { symbol: 'T_S', meaning: 'Teeth of small sprocket' },
            ],
            notes: 'Also listed under Belt Drives as "Roller Chain — Length in Pitches" in the source handbook.',
          },
          {
            id: 'a-vbelt-power-rating',
            name: 'V-Belt Power Rating',
            formula: '\\text{Power Rating} = \\text{Table (Base) Rating} + \\text{Additional Power for Speed Ratio}',
            variables: [
              { symbol: '\\text{Power Rating}', meaning: 'Total V-belt power rating' },
            ],
          },
          {
            id: 'a-vbelt-corrected-rating',
            name: 'V-Belt Corrected Power Rating',
            formula: '\\text{Corrected Power Rating} = \\text{Power Rating} \\times \\text{Arc of Contact Factor} \\times \\text{Belt Length Correction Factor}',
            variables: [
              { symbol: '\\text{Corrected Power Rating}', meaning: 'Adjusted V-belt power rating' },
              { symbol: '\\text{Arc of Contact Factor}', meaning: 'Arc-of-contact correction factor' },
              { symbol: '\\text{Belt Length Correction Factor}', meaning: 'Belt-length correction factor' },
            ],
          },
          {
            id: 'a-number-of-vbelts',
            name: 'Number of V-Belts',
            formula: '\\text{No. of Belts} = \\frac{\\text{Design Power}}{\\text{Belt Capacity}}',
            variables: [
              { symbol: '\\text{No. of Belts}', meaning: 'Number of V-belts required' },
              { symbol: '\\text{Design Power}', meaning: 'Design power' },
              { symbol: '\\text{Belt Capacity}', meaning: 'Corrected power rating per belt' },
            ],
          },
          {
            id: 'a-vbelt-design-power',
            name: 'Design Power for V-Belt',
            formula: 'DP = NPR \\times SF',
            variables: [
              { symbol: 'DP', meaning: 'Design power' },
              { symbol: 'NPR', meaning: 'Name plate rating' },
              { symbol: 'SF', meaning: 'Service factor, 1.0 to 1.5' },
            ],
          },
          {
            id: 'a-sprocket-pitch-diameter',
            name: 'Sprocket Pitch Diameter',
            formula: 'DP = \\frac{P}{\\sin\\left(\\frac{180^\\circ}{T}\\right)}',
            variables: [
              { symbol: 'DP', meaning: 'Pitch diameter of sprocket' },
              { symbol: 'P', meaning: 'Chain pitch, in' },
              { symbol: 'T', meaning: 'Number of teeth' },
            ],
          },
          {
            id: 'a-power-coefficient',
            name: 'Power Coefficient (Cp)',
            formula: 'C_p = \\frac{\\text{Actual Power Developed}}{\\text{Theoretical (Available) Power}}',
            variables: [
              { symbol: 'C_p', meaning: 'Power coefficient' },
            ],
            notes: 'Used for wind rotors/turbines — dimensionless efficiency ratio.',
          },
          {
            id: 'a-pto-power',
            name: 'PTO Power',
            formula: 'P_{TOP} = 2\\pi F R N = 2\\pi T N',
            variables: [
              { symbol: 'P_{TOP}', meaning: 'Power take-off power' },
              { symbol: 'F', meaning: 'Force' },
              { symbol: 'R', meaning: 'Radius' },
              { symbol: 'T', meaning: 'Torque' },
              { symbol: 'N', meaning: 'Rotational speed, rpm' },
            ],
          },
        ],
      },
      {
        topic: 'Wind Energy',
        formulas: [
          {
            id: 'a-wind-power-general',
            name: 'Wind Power (general)',
            formula: 'P = \\frac{1}{2}\\rho A v^3',
            variables: [
              { symbol: 'P', meaning: 'Wind power' },
              { symbol: '\\rho', meaning: 'Air density = 1.25 kg/m³' },
              { symbol: 'A', meaning: 'Rotor area, m²' },
              { symbol: 'v', meaning: 'Wind speed, m/s' },
            ],
          },
          {
            id: 'a-wind-power-mechanical',
            name: 'Available Power — Mechanical Energy Conversion',
            formula: 'P_{avail} = 0.245\\,A v^3',
            variables: [
              { symbol: 'P_{avail}', meaning: 'Available mechanical power' },
              { symbol: 'A', meaning: 'Rotor area, m²' },
              { symbol: 'v', meaning: 'Wind speed, m/s' },
            ],
          },
          {
            id: 'a-wind-power-electrical',
            name: 'Available Power — Electrical Energy Conversion',
            formula: 'P_{avail} = 0.10\\,A v^3',
            variables: [
              { symbol: 'P_{avail}', meaning: 'Available electrical power' },
              { symbol: 'A', meaning: 'Rotor area, m²' },
              { symbol: 'v', meaning: 'Wind speed, m/s' },
            ],
          },
        ],
      },
      {
        topic: 'Water Power',
        formulas: [
          {
            id: 'a-water-power-general',
            name: 'General Equation',
            formula: 'P = Q \\times H',
            variables: [
              { symbol: 'P', meaning: 'Power' },
              { symbol: 'Q', meaning: 'Discharge' },
              { symbol: 'H', meaning: 'Head' },
            ],
          },
          {
            id: 'a-water-power-si',
            name: 'Power (SI)',
            formula: 'P\\,(kW) = \\frac{Q\\,(m^3/s) \\times H\\,(m) \\times 9.81}{\\text{Efficiency}}',
            variables: [
              { symbol: 'P', meaning: 'Power, kW' },
              { symbol: 'Q', meaning: 'Discharge, m³/s' },
              { symbol: 'H', meaning: 'Head, m' },
              { symbol: '\\text{Efficiency}', meaning: 'Overall efficiency' },
            ],
          },
          {
            id: 'a-water-power-english',
            name: 'Power (English)',
            formula: 'P\\,(hp) = \\frac{Q\\,(ft^3/s) \\times H\\,(ft)}{8.8 \\times \\text{Efficiency}}',
            variables: [
              { symbol: 'P', meaning: 'Power, hp' },
              { symbol: 'Q', meaning: 'Discharge, ft³/s' },
              { symbol: 'H', meaning: 'Head, ft' },
              { symbol: '\\text{Efficiency}', meaning: 'Overall efficiency' },
            ],
          },
          {
            id: 'a-mass-flow-rate',
            name: 'Mass Flow Rate',
            formula: 'Q = v A \\rho',
            variables: [
              { symbol: 'Q', meaning: 'Mass flow rate' },
              { symbol: 'v', meaning: 'Flow velocity' },
              { symbol: 'A', meaning: 'Flow cross-sectional area' },
              { symbol: '\\rho', meaning: 'Fluid density = 1,000 kg/m³ or 62.4 lb/ft³' },
            ],
            notes: 'Water density \\rho = 1,000 kg/m³ or 62.4 lb/ft³.',
          },
          {
            id: 'a-continuity-equation',
            name: 'Continuity Equation (general)',
            formula: 'Q = A V',
            variables: [
              { symbol: 'Q', meaning: 'Discharge' },
              { symbol: 'A', meaning: 'Flow cross-sectional area' },
              { symbol: 'V', meaning: 'Flow velocity' },
            ],
          },
        ],
      },
      {
        topic: 'Solar Power',
        formulas: [
          {
            id: 'a-solar-power-output',
            name: 'Solar Power Output',
            formula: 'P_o = 1{,}000\\,A E',
            variables: [
              { symbol: 'P_o', meaning: 'Solar power output' },
              { symbol: 'A', meaning: 'Collector area, m²' },
              { symbol: 'E', meaning: 'Conversion efficiency: 0.10–0.12 photovoltaic, 0.8 solar dryers' },
            ],
            notes: 'Solar irradiance assumed = 1,000 W/m²; A = collector area, m²; E = 0.10–0.12 (photovoltaic), 0.8 (solar dryers).',
          },
          {
            id: 'a-solar-total-efficiency',
            name: 'Total System Efficiency',
            formula: 'Eff_{total} = Eff_{pump} \\times Eff_{transmission} \\times Eff_{prime\\ mover}',
            variables: [
              { symbol: 'Eff_{total}', meaning: 'Total system efficiency' },
              { symbol: 'Eff_{pump}', meaning: 'Pump efficiency' },
              { symbol: 'Eff_{transmission}', meaning: 'Transmission efficiency' },
              { symbol: 'Eff_{prime\\ mover}', meaning: 'Prime mover efficiency' },
            ],
          },
          {
            id: 'a-solar-pump-horsepower',
            name: 'Horsepower Needed to Drive the Pump',
            formula: 'HP = \\frac{Q \\times H}{Eff_{total} \\times \\text{constant}}',
            variables: [
              { symbol: 'HP', meaning: 'Horsepower needed' },
              { symbol: 'Q', meaning: 'Flow rate' },
              { symbol: 'H', meaning: 'Head' },
              { symbol: 'Eff_{total}', meaning: 'Total system efficiency' },
            ],
            notes: 'US units: HP = (Q [gpm] × H [ft] × specific gravity) / (3,960 × Eff). SI: P (kW) = (ρ g Q H) / (1,000 × Eff).',
          },
        ],
      },
      {
        topic: 'Multi-Bladed Wind Pumps',
        formulas: [
          {
            id: 'a-windpump-hydraulic-power',
            name: 'Hydraulic Power Requirement',
            formula: 'P_h = 9.8\\,Q H',
            variables: [
              { symbol: 'P_h', meaning: 'Hydraulic power requirement, watts' },
              { symbol: 'Q', meaning: 'Net pumping discharge, l/s' },
              { symbol: 'H', meaning: 'Dynamic pumping head, m' },
            ],
          },
          {
            id: 'a-windpump-power-output',
            name: 'Power Output',
            formula: 'P_o = 0.1\\,A V^3',
            variables: [
              { symbol: 'P_o', meaning: 'Power output' },
              { symbol: 'A', meaning: 'Rotor cross-sectional area including unbladed center, m²' },
              { symbol: 'V', meaning: 'Wind speed, m/s' },
              { symbol: 'D', meaning: 'Rotor diameter, m' },
            ],
            notes: 'P_o = P_h for good design.',
          },
          {
            id: 'a-windpump-solar-insolation',
            name: 'Solar Insolation / Energy Output',
            formula: 'I = P_o \\times T',
            variables: [
              { symbol: 'I', meaning: 'Daily solar insolation / energy output, kW' },
              { symbol: 'P_o', meaning: 'Power output' },
              { symbol: 'T', meaning: 'Hours of daily sensible sunlight, ≈5 hrs for Phils./SE Asia' },
            ],
            notes: 'SOURCE NOTE: this solar formula is grouped under "Multi-Bladed Wind Pumps" in the handbook; it is transcribed there as printed.',
          },
        ],
      },
      {
        topic: 'Drawbar Power (DBP)',
        formulas: [
          {
            id: 'a-drawbar-power',
            name: 'General',
            formula: 'DBP = \\frac{F S}{c}',
            variables: [
              { symbol: 'DBP', meaning: 'Drawbar power' },
              { symbol: 'F', meaning: 'Force (drawbar pull)' },
              { symbol: 'S', meaning: 'Forward speed' },
              { symbol: 'c', meaning: 'Unit conversion constant' },
            ],
            notes: 'SI: DBP (kW) = F (kN) × S (km/hr) / 3.6. English: DBP (hp) = F (lb) × S (mph) / 375.',
          },
        ],
      },
      {
        topic: 'Indicated Horsepower (IHP)',
        formulas: [
          {
            id: 'a-ihp-4stroke',
            name: '4-Stroke Engine',
            formula: 'IHP = \\frac{P L A N n}{2 \\times 33{,}000}',
            variables: [
              { symbol: 'IHP', meaning: 'Indicated horsepower' },
              { symbol: 'P', meaning: 'Mean effective pressure, psi' },
              { symbol: 'L', meaning: 'Stroke length, ft' },
              { symbol: 'A', meaning: 'Piston area, in²' },
              { symbol: 'N', meaning: 'Rotational speed, rpm' },
              { symbol: 'n', meaning: 'Number of cylinders' },
            ],
          },
          {
            id: 'a-ihp-2stroke',
            name: '2-Stroke Engine',
            formula: 'IHP = \\frac{P L A N n}{33{,}000}',
            variables: [
              { symbol: 'IHP', meaning: 'Indicated horsepower' },
              { symbol: 'P', meaning: 'Mean effective pressure, psi' },
              { symbol: 'L', meaning: 'Stroke length, ft' },
              { symbol: 'A', meaning: 'Piston area, in²' },
              { symbol: 'N', meaning: 'Rotational speed, rpm' },
              { symbol: 'n', meaning: 'Number of cylinders' },
            ],
          },
        ],
      },
      {
        topic: 'Field Efficiency & Field Capacity',
        formulas: [
          {
            id: 'a-field-efficiency',
            name: 'Field Efficiency',
            formula: 'FE = \\frac{\\text{Effective Field Capacity}}{\\text{Theoretical Field Capacity}} \\times 100\\%',
            variables: [
              { symbol: 'FE', meaning: 'Field efficiency' },
            ],
          },
          {
            id: 'a-theoretical-field-capacity',
            name: 'Theoretical Field Capacity (TFC)',
            formula: 'TFC = \\frac{S \\times W \\times E}{10} \\quad (SI) \\qquad TFC = \\frac{S \\times W}{8.25} \\quad (English)',
            variables: [
              { symbol: 'S', meaning: 'Speed: km/hr (SI) or mph (English)' },
              { symbol: 'W', meaning: 'Working width: m (SI) or ft (English)' },
              { symbol: 'E', meaning: 'Efficiency = 100% (or 1) when computing TFC' },
            ],
            notes: 'SI: TFC (ha/hr) = S (km/hr) × W (m) × E / 10. English: TFC (ac/hr) = S (mph) × W (ft) / 8.25. SOURCE NOTE: E is shown in the SI form and also defined as 1 for TFC, so the SI term reduces to S × W / 10.',
          },
          {
            id: 'a-draft-power',
            name: 'Draft Power',
            formula: 'P = \\frac{S \\times d}{3.6} \\quad (SI) \\qquad P = \\frac{S \\times d}{375} \\quad (English)',
            variables: [
              { symbol: 'S', meaning: 'Forward speed: km/hr (SI) or mph (English)' },
              { symbol: 'd', meaning: 'Soil draft: kN (SI) or lb (English)' },
            ],
            notes: 'SI: P (kW) = S (km/hr) × d (kN) / 3.6. English: P (hp) = S (mph) × d (lb) / 375.',
          },
          {
            id: 'a-field-efficiency-time-loss',
            name: 'Field Efficiency (time-loss based)',
            formula: 'FE = \\frac{T_o}{T_o + T_n + T_a} \\times 100',
            variables: [
              { symbol: 'FE', meaning: 'Field efficiency' },
              { symbol: 'T_o', meaning: 'Theoretical time required per unit area, min/ha' },
              { symbol: 'T_e', meaning: 'Effective field operating time, min/ha' },
              { symbol: 'T_n', meaning: 'Time lost per unit area from non-area-proportional interruptions, min/ha' },
              { symbol: 'T_a', meaning: 'Time lost per unit area from area-proportional interruptions, min/ha' },
              { symbol: 'k', meaning: '% of implement utilized' },
            ],
            notes: 'SOURCE NOTE: the handbook lists T_e and k in the definitions but the printed equation uses T_o, T_n and T_a. Transcribed as printed.',
          },
        ],
      },
      {
        topic: 'Biogas Plant Design',
        formulas: [
          {
            id: 'a-biogas-production',
            name: 'Biogas Production',
            formula: 'P = N M G',
            variables: [
              { symbol: 'P', meaning: 'Biogas production, m³/day' },
              { symbol: 'N', meaning: 'Number of animal heads' },
              { symbol: 'M', meaning: 'Daily manure production, kg/head' },
              { symbol: 'G', meaning: 'Specific biogas production, m³/kg at 30-day retention' },
            ],
            notes: 'G: Cow/Carabao = 0.034, Hog = 0.063, Chicken = 0.065.',
          },
          {
            id: 'a-biogas-consumption',
            name: 'Biogas Consumption',
            formula: 'C = N_1B_1T_1 + N_2B_2T_2 + \\dots + N_nB_nT_n',
            variables: [
              { symbol: 'C', meaning: 'Total biogas consumption, m³/day' },
              { symbol: 'N_n', meaning: 'Quantity of device n' },
              { symbol: 'B_n', meaning: 'Consumption of device n, m³/day' },
              { symbol: 'T_n', meaning: 'Hours of use per day' },
            ],
            notes: 'B: 4-in burner = 0.28; 25-W mantle lamp = 0.1; gasoline engine = 0.57/kW output.',
          },
          {
            id: 'a-digester-volume',
            name: 'Digester Volume',
            formula: 'V_d = I_s \\times R',
            variables: [
              { symbol: 'V_d', meaning: 'Digester volume, m³' },
              { symbol: 'I_s', meaning: 'Slurry input rate (manure + water 1:1 by volume), m³/day' },
              { symbol: 'R', meaning: 'Retention period, days' },
            ],
            notes: 'I_s = (Manure production) / (D_m × 0.5), where D_m = manure bulk density ≈ 950–970 kg/m³.',
          },
          {
            id: 'a-gasholder-volume',
            name: 'Gasholder Volume (30% safety factor)',
            formula: 'V_g = 1.3\\,U E',
            variables: [
              { symbol: 'V_g', meaning: 'Gasholder volume' },
              { symbol: 'U', meaning: 'Longest idle time of non-continuous devices, 10–13 hrs/day for households' },
              { symbol: 'E', meaning: 'Biogas excess/accumulation rate, m³/hr' },
            ],
            notes: 'Applies when there is no continuous biogas-consuming device, e.g. a refrigerator.',
          },
          {
            id: 'a-animal-heads-required',
            name: 'Number of Animal Heads Required',
            formula: 'N_r = \\frac{C}{G \\times M}',
            variables: [
              { symbol: 'N_r', meaning: 'Number of animal heads required' },
              { symbol: 'C', meaning: 'Biogas consumption, m³/day' },
              { symbol: 'G', meaning: 'Specific biogas production, m³/kg' },
              { symbol: 'M', meaning: 'Daily manure production, kg/head' },
            ],
            notes: 'M: mixed-age porker = 2.2; layer = 0.075; breeding cattle = 13; broiler = 0.025.',
          },
        ],
      },
      {
        topic: 'Implements — Width of Cut',
        formulas: [
          {
            id: 'a-disk-harrow-width',
            name: 'Disk Harrow',
            formula: 'W = 0.95 N S + k D',
            variables: [
              { symbol: 'W', meaning: 'Width of cut' },
              { symbol: 'N', meaning: 'Number of disks' },
              { symbol: 'S', meaning: 'Disk spacing' },
              { symbol: 'D', meaning: 'Diameter of disk' },
              { symbol: 'k', meaning: 'Type coefficient' },
            ],
            notes: 'Single Action: k = 0.3. Tandem Type: k = 1.2. Offset Type: k = 0.6. Double Offset Type: k = 0.85.',
          },
          {
            id: 'a-disk-plow-width',
            name: 'Disk Plow',
            formula: 'W = 0.95 N S + D',
            variables: [
              { symbol: 'W', meaning: 'Width of cut' },
              { symbol: 'N', meaning: 'Number of disks' },
              { symbol: 'S', meaning: 'Disk spacing' },
              { symbol: 'D', meaning: 'Diameter of disk' },
            ],
          },
        ],
      },
      {
        topic: 'Distance Travelled',
        formulas: [
          {
            id: 'a-distance-travelled',
            name: 'Distance and Area Travelled',
            formula: 'd = n \\times L \\qquad A = S \\times L',
            variables: [
              { symbol: 'd', meaning: 'Distance travelled' },
              { symbol: 'n', meaning: 'Number of rounds' },
              { symbol: 'A', meaning: 'Area' },
              { symbol: 'S', meaning: 'Swath' },
              { symbol: 'L', meaning: 'Length of plot' },
            ],
          },
        ],
      },
      {
        topic: 'Mechanical Efficiency, BHP & Engine Performance',
        formulas: [
          {
            id: 'a-mechanical-efficiency',
            name: 'Mechanical Efficiency',
            formula: 'ME = \\frac{BHP}{IHP} \\times 100\\%',
            variables: [
              { symbol: 'ME', meaning: 'Mechanical efficiency' },
              { symbol: 'BHP', meaning: 'Brake horsepower' },
              { symbol: 'IHP', meaning: 'Indicated horsepower' },
            ],
          },
          {
            id: 'a-brake-horsepower',
            name: 'Brake Horsepower',
            formula: 'BHP = IHP - FHP = \\frac{2\\pi T N}{33{,}000}',
            variables: [
              { symbol: 'BHP', meaning: 'Brake horsepower' },
              { symbol: 'IHP', meaning: 'Indicated horsepower' },
              { symbol: 'FHP', meaning: 'Friction horsepower' },
              { symbol: 'T', meaning: 'Torque, ft·lb' },
              { symbol: 'N', meaning: 'Rotational speed, rpm' },
            ],
          },
          {
            id: 'a-piston-displacement',
            name: 'Piston Displacement (PD)',
            formula: 'PD = \\frac{\\pi}{4} D^2 L \\times n',
            variables: [
              { symbol: 'PD', meaning: 'Piston displacement' },
              { symbol: 'D', meaning: 'Bore diameter' },
              { symbol: 'L', meaning: 'Stroke length' },
              { symbol: 'n', meaning: 'Number of cylinders' },
            ],
            notes: '(π/4)D²L is the single-cylinder swept volume; multiply by n for n cylinders.',
          },
          {
            id: 'a-piston-displacement-rate',
            name: 'Piston Displacement Rate (PDR)',
            formula: 'PDR = PD \\times N',
            variables: [
              { symbol: 'PDR', meaning: 'Piston displacement rate' },
              { symbol: 'PD', meaning: 'Piston displacement' },
              { symbol: 'N', meaning: 'Rotational speed, rpm' },
            ],
          },
          {
            id: 'a-compression-ratio',
            name: 'Compression Ratio (CR)',
            formula: 'CR = \\frac{CV + PD}{CV}',
            variables: [
              { symbol: 'CR', meaning: 'Compression ratio' },
              { symbol: 'CV', meaning: 'Clearance volume' },
              { symbol: 'PD', meaning: 'Piston displacement' },
            ],
          },
          {
            id: 'a-piston-speed',
            name: 'Piston Speed (Sp)',
            formula: 'S_p = 2 L N',
            variables: [
              { symbol: 'S_p', meaning: 'Piston speed' },
              { symbol: 'L', meaning: 'Stroke length' },
              { symbol: 'N', meaning: 'Rotational speed, rpm' },
            ],
            notes: 'S (stroke) = L.',
          },
          {
            id: 'a-fuel-consumption',
            name: 'Fuel Consumption (FC)',
            formula: 'FC = \\frac{\\text{Volume (or weight) of fuel consumed}}{\\text{Time}}',
            variables: [
              { symbol: 'FC', meaning: 'Fuel consumption' },
            ],
          },
          {
            id: 'a-specific-fuel-consumption',
            name: 'Specific Fuel Consumption (SFC)',
            formula: 'SFC = \\frac{FC \\times \\rho_F}{P_o}',
            variables: [
              { symbol: 'SFC', meaning: 'Specific fuel consumption' },
              { symbol: 'FC', meaning: 'Fuel consumption' },
              { symbol: '\\rho_F', meaning: 'Fuel density' },
              { symbol: 'P_o', meaning: 'Power output' },
            ],
          },
          {
            id: 'a-rate-of-explosion',
            name: 'Rate of Explosion (ER)',
            formula: 'ER = \\frac{N}{C}',
            variables: [
              { symbol: 'ER', meaning: 'Rate of explosion' },
              { symbol: 'N', meaning: 'Rotational speed, rpm' },
              { symbol: 'C', meaning: 'Constant: 1 for 2-stroke, 2 for 4-stroke' },
            ],
          },
        ],
      },
      {
        topic: 'Engineering Economy',
        formulas: [
          {
            id: 'a-ee-simple-interest',
            name: 'Simple Interest',
            formula: 'I = P i n \\qquad F = P\\left(1 + i n\\right)',
            variables: [
              { symbol: 'I', meaning: 'Simple interest' },
              { symbol: 'F', meaning: 'Future worth' },
              { symbol: 'P', meaning: 'Principal / present worth' },
              { symbol: 'i', meaning: 'Interest rate per period' },
              { symbol: 'n', meaning: 'Number of interest periods' },
            ],
          },
          {
            id: 'a-ee-compound-interest',
            name: 'Discrete (Compound) Interest',
            formula: 'F = P\\left(1 + i\\right)^n',
            variables: [
              { symbol: 'F', meaning: 'Future worth' },
              { symbol: 'P', meaning: 'Principal / present worth' },
              { symbol: 'i', meaning: 'Interest rate per period' },
              { symbol: 'n', meaning: 'Number of interest periods' },
            ],
          },
          {
            id: 'a-ee-nominal-rate',
            name: 'Nominal Rate of Interest',
            formula: 'r = m\\left[\\left(1 + i\\right)^{\\frac{1}{m}} - 1\\right] \\qquad i = \\frac{r}{m}',
            variables: [
              { symbol: 'r', meaning: 'Nominal rate' },
              { symbol: 'i', meaning: 'Effective rate per period' },
              { symbol: 'm', meaning: 'Number of compounding periods per year' },
            ],
          },
          {
            id: 'a-ee-effective-rate',
            name: 'Effective Rate of Interest (ie)',
            formula: 'i_e = \\left(1 + i\\right)^m - 1',
            variables: [
              { symbol: 'i_e', meaning: 'Effective rate of interest' },
              { symbol: 'i', meaning: 'Interest rate per period' },
              { symbol: 'm', meaning: 'Number of compounding periods' },
            ],
          },
          {
            id: 'a-ee-continuous-compounding',
            name: 'Continuous Compounding',
            formula: 'F = P e^{rn} \\qquad i = e^{r} - 1',
            variables: [
              { symbol: 'F', meaning: 'Future worth' },
              { symbol: 'P', meaning: 'Principal / present worth' },
              { symbol: 'e', meaning: 'Base of natural logarithms' },
              { symbol: 'r', meaning: 'Nominal continuous rate' },
              { symbol: 'n', meaning: 'Number of interest periods' },
            ],
          },
          {
            id: 'a-ee-rate-of-discount',
            name: 'Rate of Discount',
            formula: 'd = \\frac{i}{1 + i} = \\frac{F - P}{F}',
            variables: [
              { symbol: 'd', meaning: 'Rate of discount' },
              { symbol: 'i', meaning: 'Interest rate' },
              { symbol: 'F', meaning: 'Future worth' },
              { symbol: 'P', meaning: 'Present worth' },
            ],
          },
          {
            id: 'a-ee-perpetuity',
            name: 'Perpetuity',
            formula: 'P = \\frac{A}{i}',
            variables: [
              { symbol: 'P', meaning: 'Present worth of perpetuity' },
              { symbol: 'A', meaning: 'Annuity' },
              { symbol: 'i', meaning: 'Interest rate' },
            ],
          },
          {
            id: 'a-ee-capitalized-cost',
            name: 'Capitalized Cost',
            formula: 'CC = x + \\frac{S}{\\left(1 + i\\right)^k - 1}',
            variables: [
              { symbol: 'CC', meaning: 'Capitalized cost' },
              { symbol: 'x', meaning: 'Amount of principal at rate i%' },
              { symbol: 'S', meaning: 'Amount needed to replace a property every k periods' },
              { symbol: 'i', meaning: 'Interest rate' },
              { symbol: 'k', meaning: 'Replacement interval, periods' },
            ],
          },
          {
            id: 'a-ee-ordinary-annuity',
            name: 'Ordinary Annuity',
            formula: 'P = A\\left[\\frac{\\left(1 + i\\right)^n - 1}{i\\left(1 + i\\right)^n}\\right] \\qquad F = A\\left[\\frac{\\left(1 + i\\right)^n - 1}{i}\\right]',
            variables: [
              { symbol: 'P', meaning: 'Present worth of annuity' },
              { symbol: 'F', meaning: 'Future worth of annuity' },
              { symbol: 'A', meaning: 'Annuity' },
              { symbol: 'i', meaning: 'Interest rate' },
              { symbol: 'n', meaning: 'Number of periods' },
            ],
          },
          {
            id: 'a-ee-deferred-annuity',
            name: 'Deferred Annuity',
            formula: 'P = A\\left[\\frac{1 - \\left(1 + i\\right)^{-n}}{i}\\right] \\times \\left(1 + i\\right)^{-m}',
            variables: [
              { symbol: 'P', meaning: 'Present worth of deferred annuity' },
              { symbol: 'A', meaning: 'Annuity' },
              { symbol: 'i', meaning: 'Interest rate' },
              { symbol: 'n', meaning: 'Number of payments' },
              { symbol: 'm', meaning: 'Number of deferred periods' },
            ],
          },
          {
            id: 'a-ee-straight-line-depreciation',
            name: 'Straight Line Depreciation',
            formula: 'd = \\frac{CO - CL}{L} \\qquad D_n = d \\times n \\qquad BV_n = CO - D_n',
            variables: [
              { symbol: 'd', meaning: 'Annual depreciation cost' },
              { symbol: 'L', meaning: 'Useful life' },
              { symbol: 'CL', meaning: 'Value at end of life (salvage value)' },
              { symbol: 'CO', meaning: 'Original cost' },
              { symbol: 'D_n', meaning: 'Depreciation up to age n' },
              { symbol: 'BV_n', meaning: 'Book value at year n' },
              { symbol: 'n', meaning: 'Age, years' },
            ],
          },
          {
            id: 'a-ee-declining-balance',
            name: 'Declining Balance Method',
            formula: 'd = 1 - \\left(\\frac{CL}{CO}\\right)^{\\frac{1}{L}} \\qquad BV_n = CO\\left(1 - d\\right)^n \\qquad D_n = CO - BV_n \\qquad CL = CO\\left(1 - d\\right)^L',
            variables: [
              { symbol: 'd', meaning: 'Depreciation rate' },
              { symbol: 'CO', meaning: 'Original cost' },
              { symbol: 'CL', meaning: 'Salvage value' },
              { symbol: 'L', meaning: 'Useful life' },
              { symbol: 'BV_n', meaning: 'Book value at year n' },
              { symbol: 'D_n', meaning: 'Depreciation up to age n' },
            ],
            notes: 'Double Declining Balance Method: d = 2/L.',
          },
          {
            id: 'a-ee-sinking-fund',
            name: 'Sinking Fund Method',
            formula: 'd = (CO - CL)\\left[\\frac{i}{\\left(1 + i\\right)^n - 1}\\right] \\qquad D_n = d\\left[\\frac{\\left(1 + i\\right)^n - 1}{i}\\right] \\qquad BV_n = CO - D_n',
            variables: [
              { symbol: 'd', meaning: 'Annual sinking fund deposit' },
              { symbol: 'CO', meaning: 'Original cost' },
              { symbol: 'CL', meaning: 'Salvage value' },
              { symbol: 'i', meaning: 'Interest rate' },
              { symbol: 'n', meaning: 'Useful life, periods' },
              { symbol: 'D_n', meaning: 'Depreciation up to age n' },
              { symbol: 'BV_n', meaning: 'Book value at year n' },
            ],
          },
          {
            id: 'a-ee-syd',
            name: "Sum-of-the-Years'-Digits (SYD) Method",
            formula: 'd_n = (CO - CL)\\left(\\frac{L - n + 1}{\\Sigma Years}\\right) \\qquad \\Sigma Years = \\frac{L(L+1)}{2}',
            variables: [
              { symbol: 'd_n', meaning: 'Depreciation in year n' },
              { symbol: 'CO', meaning: 'Original cost' },
              { symbol: 'CL', meaning: 'Salvage value' },
              { symbol: 'L', meaning: 'Useful life' },
              { symbol: 'n', meaning: 'Year number' },
              { symbol: '\\Sigma Years', meaning: 'Sum of years digits' },
            ],
          },
          {
            id: 'a-ee-service-output',
            name: 'Service-Output Method',
            formula: 'd = \\frac{CO - CL}{\\text{Total Units of Output}} \\qquad D_n = d \\times \\left(\\text{units produced in year } n\\right)',
            variables: [
              { symbol: 'd', meaning: 'Depreciation per unit of output' },
              { symbol: 'CO', meaning: 'Original cost' },
              { symbol: 'CL', meaning: 'Salvage value' },
              { symbol: 'D_n', meaning: 'Depreciation in year n' },
            ],
            notes: 'Total units of output is the expected production over the asset life.',
          },
          {
            id: 'a-ee-fixed-cost-total-profit',
            name: 'Fixed Cost, Total Cost & Profit',
            formula: 'TC = CF + vD \\qquad TR = \\text{Price} \\times \\text{Units sold} \\qquad \\text{Profit} = TR - TC',
            variables: [
              { symbol: 'CF', meaning: 'Fixed cost, given/constant' },
              { symbol: 'TC', meaning: 'Total cost' },
              { symbol: 'TR', meaning: 'Total revenue' },
              { symbol: 'v', meaning: 'Variable cost per unit' },
              { symbol: 'D', meaning: 'Number of units produced' },
              { symbol: '\\text{Profit}', meaning: 'Profit = TR - TC' },
            ],
          },
        ],
      },
    ],
  },

  // ==========================================================================
  // AREA B — LAND & WATER RESOURCES   (Area 2 Formula.pdf)
  // ==========================================================================
  {
    area: 'Land & Water Resources',
    areaCode: 'B',
    color: 'green',
    topics: [
      {
        topic: 'Open Channel Flow / Hydraulics',
        formulas: [
          {
            id: 'b-mannings-equation',
            name: "Manning's Equation",
            formula: 'V = \\frac{1}{n} R^{\\frac{2}{3}} S^{\\frac{1}{2}} \\quad (SI) \\qquad V = \\frac{1.486}{n} R^{\\frac{2}{3}} S^{\\frac{1}{2}} \\quad (English)',
            variables: [
              { symbol: 'V', meaning: 'Flow velocity: m/s (SI) or ft/s (English)' },
              { symbol: 'R', meaning: 'Hydraulic radius: m (SI) or ft (English)' },
              { symbol: 'S', meaning: 'Slope of the channel' },
              { symbol: 'n', meaning: "Manning's roughness coefficient" },
            ],
          },
          {
            id: 'b-general-discharge',
            name: 'General Discharge Equation',
            formula: 'Q = A V \\qquad V = \\frac{Q}{A} \\qquad A = \\frac{Q}{V}',
            variables: [
              { symbol: 'Q', meaning: 'Discharge' },
              { symbol: 'A', meaning: 'Flow cross-sectional area' },
              { symbol: 'V', meaning: 'Flow velocity' },
            ],
          },
          {
            id: 'b-water-applied-depth',
            name: 'Depth (Water Applied)',
            formula: 'Q = \\frac{2.78\\,A D}{T}',
            variables: [
              { symbol: 'Q', meaning: 'Stream size' },
              { symbol: 'A', meaning: 'Area irrigated' },
              { symbol: 'D', meaning: 'Depth of water applied, cm' },
              { symbol: 'T', meaning: 'Time required to apply the water' },
            ],
            notes: 'SOURCE NOTE: transcribed as printed, but the printed 2.78 is wrong for these units and the correct factor is 27.78, since Q (l/s) = 27.78 x A (ha) x D (cm) / T (h). The 2.78 is the factor for A in hectares with D in millimetres, so using it with a depth in cm understates the stream size by 10x. Also listed under Soil Moisture Management as "Water Applied" in the source handbook.',
          },
          {
            id: 'b-section-factor',
            name: 'Section Factor (for Critical Flow)',
            formula: 'Z = A\\sqrt{\\frac{A}{T}} = \\frac{Q}{\\sqrt{g}}',
            variables: [
              { symbol: 'Z', meaning: 'Section factor' },
              { symbol: 'A', meaning: 'Cross-sectional area' },
              { symbol: 'T', meaning: 'Top width' },
              { symbol: 'Q', meaning: 'Discharge' },
              { symbol: 'g', meaning: 'Gravitational acceleration' },
            ],
          },
          {
            id: 'b-critical-depth-velocity',
            name: 'Critical Depth / Critical Velocity',
            formula: 'V_c = \\sqrt{g\\,D_m} \\qquad D_m = \\frac{A}{T}',
            variables: [
              { symbol: 'V_c', meaning: 'Critical velocity' },
              { symbol: 'D_m', meaning: 'Hydraulic mean depth = A/T' },
              { symbol: 'g', meaning: 'Gravitational acceleration: 9.81 m/s² (SI) or 32.2 ft/s² (English)' },
              { symbol: 'A', meaning: 'Cross-sectional area' },
              { symbol: 'T', meaning: 'Top width' },
            ],
          },
          {
            id: 'b-side-angle',
            name: 'Side Angle with Horizontal',
            formula: '\\theta = \\tan^{-1}\\left(\\frac{1}{z}\\right)',
            variables: [
              { symbol: '\\theta', meaning: 'Side angle with the horizontal' },
              { symbol: 'z', meaning: 'Side slope ratio (1:z)' },
            ],
            notes: 'z varies by soil type — peat/muck, clay, sandy loam, loose soil — and by channel depth. Use the Material Side Slope table.',
          },
          {
            id: 'b-chezys-equation',
            name: "Chezy's Equation",
            formula: 'V = C\\sqrt{RS} \\quad (SI) \\qquad V = 1.486\\,C\\sqrt{RS} \\quad (English)',
            variables: [
              { symbol: 'V', meaning: 'Flow velocity' },
              { symbol: 'C', meaning: "Chezy's coefficient" },
              { symbol: 'R', meaning: 'Hydraulic radius: m (SI) or ft (English)' },
              { symbol: 'S', meaning: 'Slope of the channel' },
            ],
          },
        ],
      },
      {
        topic: 'Algebra / Calculus Tool',
        formulas: [
          {
            id: 'b-quadratic-formula',
            name: 'Quadratic Formula',
            formula: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
            variables: [
              { symbol: 'a', meaning: 'Coefficient of x²' },
              { symbol: 'b', meaning: 'Coefficient of x' },
              { symbol: 'c', meaning: 'Constant term' },
              { symbol: 'x', meaning: 'Root of the quadratic' },
            ],
            notes: 'Used throughout hydraulics/hydrology problems — e.g. solving for critical depth or unknown channel dimensions where the equation reduces to quadratic form.',
          },
        ],
      },
      {
        topic: 'Runoff & Rainfall',
        formulas: [
          {
            id: 'b-rational-method',
            name: 'Rational Method — Peak Runoff Rate',
            formula: 'q = C I A',
            variables: [
              { symbol: 'q', meaning: 'Peak runoff rate' },
              { symbol: 'C', meaning: 'Runoff coefficient' },
              { symbol: 'I', meaning: 'Rainfall intensity' },
              { symbol: 'A', meaning: 'Catchment area' },
            ],
            notes: 'C ranges 0.35 (bushy lands, 3–5% slope) to 0.99 (concrete pavement); C = 0 for sand. SOURCE NOTE: the handbook prints q = C I A with no constant, because the constant is carried by the units. With I in mm/day and A in hectares the peak rate in m3/s is 0.00278 C I A; the same rate in l/s is 2.78 C I A. A drill that reports 2.78 C I A is using the l/s form, not an error in the arithmetic.',
          },
          {
            id: 'b-runoff-volume',
            name: 'Runoff Volume Estimation',
            formula: 'Q = 0.278\\,q T',
            variables: [
              { symbol: 'Q', meaning: 'Runoff volume, m³' },
              { symbol: 'q', meaning: 'Peak runoff rate, m³/s (cms)' },
              { symbol: 'T', meaning: 'Duration of runoff, s' },
            ],
            notes: 'SOURCE NOTE: transcribed as printed, but 0.278 is not consistent with the units printed alongside it. With q in m3/s and T in seconds, volume in m3 is simply q x T and the factor would be 1. The drill uses the dimensionally correct form Q (m3) = 3.6 x q (l/s) x T (h), which is 3600 seconds an hour divided by 1000 litres to a cubic metre. Do not mix the two bases: 2.78 C I A and 0.00278 C I A are the same Rational-Method rate in l/s and m3/s respectively.',
          },
          {
            id: 'b-kirpich-tc',
            name: 'Time of Concentration (Kirpich Formula)',
            formula: 'T_c = 0.0195\\,L^{0.77} S^{-0.385}',
            variables: [
              { symbol: 'T_c', meaning: 'Time of concentration, minutes' },
              { symbol: 'L', meaning: 'Length of slope, m' },
              { symbol: 'S', meaning: 'Slope / gradient (ratio)' },
            ],
          },
          {
            id: 'b-float-method',
            name: 'Discharge — Float Method',
            formula: 'Q = C A V',
            variables: [
              { symbol: 'Q', meaning: 'Discharge' },
              { symbol: 'C', meaning: 'Coefficient (velocity correction factor for the float method)' },
              { symbol: 'A', meaning: 'Flow cross-sectional area' },
              { symbol: 'V', meaning: 'Measured surface velocity' },
            ],
          },
          {
            id: 'b-curve-number',
            name: 'Curve Number Method',
            formula: 'Q = \\frac{\\left(I - 0.2S\\right)^2}{I + 0.8S} \\qquad S = \\frac{25{,}400}{CN} - 254',
            variables: [
              { symbol: 'Q', meaning: 'Direct surface runoff depth, mm' },
              { symbol: 'I', meaning: 'Storm rainfall, mm' },
              { symbol: 'S', meaning: 'Maximum potential difference between rainfall and runoff' },
              { symbol: 'CN', meaning: 'Curve number, 0–100' },
            ],
            notes: 'CN is a function of land use, hydrologic condition, antecedent moisture and soil type.',
          },
          {
            id: 'b-rainfall-arithmetic-mean',
            name: 'Rainfall Determination — Arithmetic Mean',
            formula: '\\overline{P} = \\frac{P_1 + P_2 + \\dots + P_n}{n}',
            variables: [
              { symbol: '\\overline{P}', meaning: 'Average rainfall' },
              { symbol: 'P_n', meaning: 'Rainfall at station n' },
              { symbol: 'n', meaning: 'Number of polygons (gauging stations)' },
            ],
          },
          {
            id: 'b-rainfall-thiessen',
            name: 'Rainfall Determination — Thiessen Method',
            formula: '\\overline{P} = \\frac{A_1P_1 + A_2P_2 + \\dots + A_nP_n}{A_1 + A_2 + \\dots + A_n}',
            variables: [
              { symbol: '\\overline{P}', meaning: 'Average rainfall' },
              { symbol: 'A_n', meaning: 'Area of Thiessen polygon n' },
              { symbol: 'P_n', meaning: 'Rainfall at that station' },
            ],
          },
          {
            id: 'b-rainfall-intensity',
            name: 'Rainfall Intensity',
            formula: 'I = \\frac{k\\,T^n}{t^m}',
            variables: [
              { symbol: 'I', meaning: 'Rainfall intensity' },
              { symbol: 'k', meaning: 'Constant for a geologic location' },
              { symbol: 'T', meaning: 'Return period' },
              { symbol: 't', meaning: 'Duration of storm' },
            ],
          },
        ],
      },
      {
        topic: 'Soil–Water Relationships',
        formulas: [
          {
            id: 'b-soil-total-volume',
            name: 'Total (Bulk) Volume of Soil',
            formula: 'V_T = V_A + V_W + V_S',
            variables: [
              { symbol: 'V_T', meaning: 'Total (bulk) volume of soil' },
              { symbol: 'V_A', meaning: 'Volume of air' },
              { symbol: 'V_W', meaning: 'Volume of water' },
              { symbol: 'V_S', meaning: 'Volume of soil particles' },
            ],
          },
          {
            id: 'b-soil-volume-of-voids',
            name: 'Volume of Voids',
            formula: 'V_V = V_A + V_W',
            variables: [
              { symbol: 'V_V', meaning: 'Volume of voids' },
              { symbol: 'V_A', meaning: 'Volume of air' },
              { symbol: 'V_W', meaning: 'Volume of water' },
            ],
          },
          {
            id: 'b-soil-weight',
            name: 'Weight of Soil',
            formula: 'W_T = W_A + W_W + W_S',
            variables: [
              { symbol: 'W_T', meaning: 'Weight of soil' },
              { symbol: 'W_A', meaning: 'Weight of air' },
              { symbol: 'W_W', meaning: 'Weight of water' },
              { symbol: 'W_S', meaning: 'Weight of soil particles' },
            ],
          },
          {
            id: 'b-porosity',
            name: 'Porosity (n)',
            formula: 'n = \\frac{V_V}{V_T} = 1 - \\frac{D_b}{D_p} = 1 - \\frac{A_s}{R_s}',
            variables: [
              { symbol: 'n', meaning: 'Porosity' },
              { symbol: 'V_V', meaning: 'Volume of voids' },
              { symbol: 'V_T', meaning: 'Total volume' },
              { symbol: 'D_b', meaning: 'Bulk density' },
              { symbol: 'D_p', meaning: 'Particle density' },
              { symbol: 'A_s', meaning: 'Apparent specific gravity' },
              { symbol: 'R_s', meaning: 'Real specific gravity' },
            ],
            notes: 'Three equivalent forms, all equal to each other.',
          },
          {
            id: 'b-volumetric-moisture-content',
            name: 'Volumetric Moisture Content (MCv)',
            formula: 'MC_v = \\frac{V_W}{V_T} = MC_w \\times \\left(\\frac{D_b}{D_w}\\right)',
            variables: [
              { symbol: 'MC_v', meaning: 'Volumetric moisture content' },
              { symbol: 'V_W', meaning: 'Volume of water' },
              { symbol: 'V_T', meaning: 'Total volume' },
              { symbol: 'MC_w', meaning: 'Gravimetric moisture content' },
              { symbol: 'D_b', meaning: 'Bulk density' },
              { symbol: 'D_w', meaning: 'Density of water' },
            ],
          },
          {
            id: 'b-moisture-content-wet-basis',
            name: 'Soil Moisture Content, Wet Basis',
            formula: 'MC_{wb} = \\frac{W_W}{W_T} \\times 100',
            variables: [
              { symbol: 'MC_{wb}', meaning: 'Moisture content, wet basis' },
              { symbol: 'W_W', meaning: 'Weight of water' },
              { symbol: 'W_T', meaning: 'Total weight of soil' },
            ],
          },
          {
            id: 'b-bulk-density',
            name: 'Bulk Density (Db)',
            formula: 'D_b = \\frac{W_S}{V_T}',
            variables: [
              { symbol: 'D_b', meaning: 'Bulk density' },
              { symbol: 'W_S', meaning: 'Weight of soil particles' },
              { symbol: 'V_T', meaning: 'Total volume' },
            ],
          },
          {
            id: 'b-particle-density',
            name: 'Particle Density (Dp)',
            formula: 'D_p = \\frac{W_S}{V_S}',
            variables: [
              { symbol: 'D_p', meaning: 'Particle density' },
              { symbol: 'W_S', meaning: 'Weight of soil particles' },
              { symbol: 'V_S', meaning: 'Volume of soil particles' },
            ],
          },
          {
            id: 'b-void-ratio',
            name: 'Void Ratio (e)',
            formula: 'e = \\frac{V_V}{V_S}',
            variables: [
              { symbol: 'e', meaning: 'Void ratio' },
              { symbol: 'V_V', meaning: 'Volume of voids' },
              { symbol: 'V_S', meaning: 'Volume of soil particles' },
            ],
          },
          {
            id: 'b-apparent-specific-gravity',
            name: 'Apparent Specific Gravity (As)',
            formula: 'A_s = \\frac{D_b}{D_w}',
            variables: [
              { symbol: 'A_s', meaning: 'Apparent specific gravity' },
              { symbol: 'D_b', meaning: 'Bulk density' },
              { symbol: 'D_w', meaning: 'Density of water' },
            ],
          },
          {
            id: 'b-real-specific-gravity',
            name: 'Real Specific Gravity (Rs)',
            formula: 'R_s = \\frac{D_p}{D_w}',
            variables: [
              { symbol: 'R_s', meaning: 'Real specific gravity' },
              { symbol: 'D_p', meaning: 'Particle density' },
              { symbol: 'D_w', meaning: 'Density of water' },
            ],
          },
        ],
      },
      {
        topic: 'Land Soaking & Water Power',
        formulas: [
          {
            id: 'b-lsr-net',
            name: 'Land Soaking Requirement (LSR) — Net',
            formula: 'LSR_{net} = \\frac{(n)(A_s)(RZD)}{\\Delta T}',
            variables: [
              { symbol: 'LSR_{net}', meaning: 'Net land soaking requirement' },
              { symbol: 'n', meaning: 'Porosity' },
              { symbol: 'A_s', meaning: 'Apparent specific gravity' },
              { symbol: 'RZD', meaning: 'Root zone depth' },
              { symbol: '\\Delta T', meaning: 'Duration of land soaking' },
            ],
          },
          {
            id: 'b-lsr-gross',
            name: 'Land Soaking Requirement (LSR) — Gross',
            formula: 'LSR_{gross} = LSR_{net} + ET + P',
            variables: [
              { symbol: 'LSR_{gross}', meaning: 'Gross land soaking requirement' },
              { symbol: 'LSR_{net}', meaning: 'Net land soaking requirement' },
              { symbol: 'ET', meaning: 'Evapotranspiration' },
              { symbol: 'P', meaning: 'Percolation' },
            ],
          },
          {
            id: 'b-water-power',
            name: 'Water Power (Pw)',
            formula: 'P_w = \\gamma Q H k',
            variables: [
              { symbol: 'P_w', meaning: 'Power, watts' },
              { symbol: '\\gamma', meaning: 'Specific weight of water' },
              { symbol: 'Q', meaning: 'Discharge, m³/s' },
              { symbol: 'H', meaning: 'Head, m' },
              { symbol: 'k', meaning: 'Turbine efficiency' },
            ],
            notes: 'P is power in watts; k is turbine efficiency; Q is discharge in m³/s; H is head in m.',
          },
        ],
      },
      {
        topic: 'Irrigation Application Depth, Rate & Timing',
        formulas: [
          {
            id: 'b-net-application-depth',
            name: 'Net Application Depth (dNET)',
            formula: 'd_{NET} = (FC - PWP)\\,A_s\\,RZD\\,MAD = EA \\times d_{GROSS} = AR \\times TA = \\frac{Q \\times T}{A}',
            variables: [
              { symbol: 'd_{NET}', meaning: 'Net application depth' },
              { symbol: 'FC', meaning: 'Field capacity' },
              { symbol: 'PWP', meaning: 'Permanent wilting point' },
              { symbol: 'A_s', meaning: 'Apparent specific gravity' },
              { symbol: 'RZD', meaning: 'Root zone depth' },
              { symbol: 'MAD', meaning: 'Management allowable depletion' },
              { symbol: 'EA', meaning: 'Application efficiency' },
              { symbol: 'd_{GROSS}', meaning: 'Gross application depth' },
              { symbol: 'AR', meaning: 'Application rate' },
              { symbol: 'TA', meaning: 'Time of application' },
              { symbol: 'Q', meaning: 'Water applied' },
              { symbol: 'T', meaning: 'Time' },
              { symbol: 'A', meaning: 'Area' },
            ],
            notes: 'Four equivalent forms of the same relationship.',
          },
          {
            id: 'b-gross-application-depth',
            name: 'Gross Application Depth (dGROSS)',
            formula: 'd_{GROSS} = \\frac{d_{NET}}{EA}',
            variables: [
              { symbol: 'd_{GROSS}', meaning: 'Gross application depth' },
              { symbol: 'd_{NET}', meaning: 'Net application depth' },
              { symbol: 'EA', meaning: 'Application efficiency' },
            ],
          },
          {
            id: 'b-time-of-application',
            name: 'Time of Application (TA)',
            formula: 'TA = \\frac{\\text{Volume Required}}{\\text{Application Rate}} = \\frac{A \\times d_{GROSS}}{Q}',
            variables: [
              { symbol: 'TA', meaning: 'Time of application' },
              { symbol: 'A', meaning: 'Area' },
              { symbol: 'd_{GROSS}', meaning: 'Gross application depth' },
              { symbol: 'Q', meaning: 'Flow rate' },
            ],
          },
          {
            id: 'b-application-efficiency',
            name: 'Application Efficiency (EA)',
            formula: 'EA = \\frac{d_{NET}}{d_{GROSS}} = \\frac{Q_{out}}{Q_{in}} = \\frac{Q_{in} - (S + P + E)}{Q_{in}}',
            variables: [
              { symbol: 'EA', meaning: 'Application efficiency' },
              { symbol: 'd_{NET}', meaning: 'Net application depth' },
              { symbol: 'd_{GROSS}', meaning: 'Gross application depth' },
              { symbol: 'Q_{in}', meaning: 'Water entering the tertiary canal' },
              { symbol: 'Q_{out}', meaning: 'Water entering the field' },
              { symbol: 'S', meaning: 'Seepage losses' },
              { symbol: 'P', meaning: 'Percolation losses' },
              { symbol: 'E', meaning: 'Evaporation losses' },
            ],
          },
        ],
      },
      {
        topic: 'Farm & System Water Requirements',
        formulas: [
          {
            id: 'b-farm-irrigation-requirement',
            name: 'Farm Irrigation Requirement (FIR)',
            formula: 'FIR = CWR - ERF \\qquad FIR = CWR + LR - ERF',
            variables: [
              { symbol: 'FIR', meaning: 'Farm irrigation requirement' },
              { symbol: 'CWR', meaning: 'Crop water requirement' },
              { symbol: 'ERF', meaning: 'Effective rainfall' },
              { symbol: 'LR', meaning: 'Leaching requirement' },
            ],
            notes: 'Use the second form when a leaching requirement applies.',
          },
          {
            id: 'b-farm-water-requirement',
            name: 'Farm Water Requirement (FWR)',
            formula: 'FWR = FIR + \\text{Losses} = \\frac{FIR}{EA}',
            variables: [
              { symbol: 'FWR', meaning: 'Farm water requirement' },
              { symbol: 'FIR', meaning: 'Farm irrigation requirement' },
              { symbol: 'EA', meaning: 'Application efficiency' },
            ],
          },
          {
            id: 'b-diversion-water-requirement',
            name: 'Diversion Water Requirement (DWR)',
            formula: 'DWR = FWR + CL = \\frac{FWR}{E_C}',
            variables: [
              { symbol: 'DWR', meaning: 'Diversion water requirement' },
              { symbol: 'FWR', meaning: 'Farm water requirement' },
              { symbol: 'CL', meaning: 'Conveyance loss' },
              { symbol: 'E_C', meaning: 'Conveyance efficiency' },
            ],
          },
          {
            id: 'b-farm-turnout-requirement',
            name: 'Farm Turnout Requirement (FTR)',
            formula: 'FTR = FWR + FDL',
            variables: [
              { symbol: 'FTR', meaning: 'Farm turnout requirement' },
              { symbol: 'FWR', meaning: 'Farm water requirement' },
              { symbol: 'FDL', meaning: 'Farm ditch loss' },
            ],
          },
        ],
      },
      {
        topic: 'Soil Moisture Management',
        formulas: [
          {
            id: 'b-depth-readily-available-moisture',
            name: 'Depth of Readily Available Moisture (dRAM)',
            formula: 'd_{RAM} = (FC - PWP)\\,A_s\\,RZD\\,MAD',
            variables: [
              { symbol: 'd_{RAM}', meaning: 'Depth of readily available moisture' },
              { symbol: 'FC', meaning: 'Field capacity' },
              { symbol: 'PWP', meaning: 'Permanent wilting point' },
              { symbol: 'A_s', meaning: 'Apparent specific gravity' },
              { symbol: 'RZD', meaning: 'Root zone depth' },
              { symbol: 'MAD', meaning: 'Management allowable depletion' },
            ],
          },
          {
            id: 'b-irrigation-interval',
            name: 'Irrigation Interval (Ti)',
            formula: 'T_i = \\frac{d_{RAM}}{\\text{peak-period consumptive use rate}} = \\frac{(FC - PWP)\\,A_s\\,RZD\\,MAD}{ET}',
            variables: [
              { symbol: 'T_i', meaning: 'Irrigation interval' },
              { symbol: 'd_{RAM}', meaning: 'Depth of readily available moisture' },
              { symbol: 'ET', meaning: 'Evapotranspiration' },
            ],
          },
          {
            id: 'b-application-rate',
            name: 'Application Rate (AR)',
            formula: 'AR = \\frac{Q}{A}',
            variables: [
              { symbol: 'AR', meaning: 'Application rate' },
              { symbol: 'Q', meaning: 'Water applied' },
              { symbol: 'A', meaning: 'Area' },
            ],
          },
          {
            id: 'b-water-requirement',
            name: 'Water Requirement (WR)',
            formula: 'WR = ET + P',
            variables: [
              { symbol: 'WR', meaning: 'Water requirement' },
              { symbol: 'ET', meaning: 'Evapotranspiration' },
              { symbol: 'P', meaning: 'Percolation' },
            ],
          },
          {
            id: 'b-evapotranspiration',
            name: 'Evapotranspiration (ET)',
            formula: 'ET = E + T',
            variables: [
              { symbol: 'ET', meaning: 'Evapotranspiration' },
              { symbol: 'E', meaning: 'Evaporation' },
              { symbol: 'T', meaning: 'Transpiration' },
            ],
          },
          {
            id: 'b-water-applied',
            name: 'Water Applied',
            formula: 'Q = \\frac{2.78\\,(A D)}{T}',
            variables: [
              { symbol: 'Q', meaning: 'Stream size, lps' },
              { symbol: 'A', meaning: 'Area irrigated, ha' },
              { symbol: 'D', meaning: 'Depth of water applied, cm' },
              { symbol: 'T', meaning: 'Time required to irrigate, hr' },
            ],
            // Same printed constant, and the same error, as b-water-applied-depth
            // under Open Channel Flow. The two ids differ only by the topic they
            // are filed under and by redundant parentheses, so both carry the note.
            notes: 'SOURCE NOTE: transcribed as printed, but the printed 2.78 is wrong for these units and the correct factor is 27.78, since Q (l/s) = 27.78 x A (ha) x D (cm) / T (h). The 2.78 is the factor for A in hectares with D in millimetres, so using it with a depth in cm understates the stream size by 10x. This is the same equation as b-water-applied-depth, filed under Soil Moisture Management instead of Open Channel Flow; the drill frames it as a root-zone water requirement rather than a conveyance stream.',
          },
        ],
      },
      {
        topic: 'Pumping Head',
        formulas: [
          {
            id: 'b-total-dynamic-head',
            name: 'Total Dynamic Head (Htotal)',
            formula: 'H_{total} = H_{static} + H_{velocity} + H_{friction} + H_{pressure}',
            variables: [
              { symbol: 'H_{total}', meaning: 'Total dynamic head' },
              { symbol: 'H_{static}', meaning: 'Static head' },
              { symbol: 'H_{velocity}', meaning: 'Velocity head' },
              { symbol: 'H_{friction}', meaning: 'Friction head' },
              { symbol: 'H_{pressure}', meaning: 'Pressure head' },
            ],
          },
          {
            id: 'b-static-head',
            name: 'Static Head',
            formula: 'H_{static} = \\left(\\text{Elevation between pump and water surface}\\right) - \\left(\\text{Elevation between pump and junction of lateral and main}\\right)',
            variables: [
              { symbol: 'H_{static}', meaning: 'Static head' },
            ],
          },
          {
            id: 'b-pressure-head',
            name: 'Pressure Head (hp)',
            formula: 'h_p = \\frac{P}{\\gamma}',
            variables: [
              { symbol: 'h_p', meaning: 'Pressure head' },
              { symbol: 'P', meaning: 'Pressure' },
              { symbol: '\\gamma', meaning: 'Specific weight' },
            ],
          },
          {
            id: 'b-velocity-head',
            name: 'Velocity Head (hv)',
            formula: 'h_v = \\frac{V^2}{2g}',
            variables: [
              { symbol: 'h_v', meaning: 'Velocity head' },
              { symbol: 'V', meaning: 'Flow velocity' },
              { symbol: 'g', meaning: 'Gravitational acceleration' },
            ],
          },
          {
            id: 'b-friction-head',
            name: 'Friction Head',
            formula: 'H_{friction} = H_{friction,main} + H_{friction,lateral}',
            variables: [
              { symbol: 'H_{friction,main}', meaning: 'Friction head loss along the main' },
              { symbol: 'H_{friction,lateral}', meaning: 'Friction head loss along the lateral' },
            ],
          },
        ],
      },
      {
        topic: 'Frequency Analysis / Statistics',
        formulas: [
          {
            id: 'b-return-period',
            name: 'Return Period',
            formula: 'T = \\frac{1}{P}',
            variables: [
              { symbol: 'T', meaning: 'Return period' },
              { symbol: 'P', meaning: 'Probability of exceedance' },
            ],
          },
          {
            id: 'b-gumbel-return-period',
            name: "Return Period — Gumbel's Formula",
            formula: 'X_T = \\overline{X} + K\\sigma \\qquad K = -\\left(\\frac{\\sqrt{6}}{\\pi}\\right)\\left[0.5772 + \\ln\\left(\\ln\\left(\\frac{N}{N-m+1}\\right)\\right)\\right]',
            variables: [
              { symbol: 'X_T', meaning: 'Value at return period T' },
              { symbol: '\\overline{X}', meaning: 'Mean of the series' },
              { symbol: 'K', meaning: 'Frequency factor' },
              { symbol: '\\sigma', meaning: 'Standard deviation' },
              { symbol: 'N', meaning: 'Total number of statistical events (years of record)' },
              { symbol: 'm', meaning: 'Rank of the event, arranged in descending order of magnitude' },
            ],
          },
        ],
      },
      {
        topic: 'Border Irrigation',
        formulas: [
          {
            id: 'b-border-irrigation-stream',
            name: 'Border Irrigation — Empirical Stream-Size Formulas',
            formula: 'Q = 0.0025\\,S^{-0.75} \\qquad Q = 0.011\\,S^{-0.75}',
            variables: [
              { symbol: 'Q', meaning: 'Stream size, ft³/s' },
              { symbol: 'S', meaning: 'Slope, %' },
            ],
            notes: 'Alternate empirical coefficients (0.0025 and 0.011) depending on the soil/border-strip design guidance used.',
          },
        ],
      },
      {
        topic: 'Conservation Structures, Dams & Reservoirs',
        formulas: [
          {
            id: 'b-drop-spillway-capacity',
            name: 'Capacity of Drop Spillway',
            formula: 'q = C L h^{\\frac{3}{2}}',
            variables: [
              { symbol: 'q', meaning: 'Discharge, m³/s' },
              { symbol: 'C', meaning: 'Weir coefficient' },
              { symbol: 'L', meaning: 'Weir length, m' },
              { symbol: 'h', meaning: 'Depth of flow over the crest, m' },
            ],
          },
          {
            id: 'b-dam-top-width',
            name: 'Total Width (Top Width) of Dam',
            formula: 'W = 0.55\\sqrt{H} + 1',
            variables: [
              { symbol: 'W', meaning: 'Top width, m' },
              { symbol: 'H', meaning: 'Maximum height of embankment, m' },
            ],
          },
          {
            id: 'b-wave-height',
            name: 'Wave Height',
            formula: 'H = 0.014\\sqrt{D_f}',
            variables: [
              { symbol: 'H', meaning: 'Height of crest above max water level due to max wind velocity, m' },
              { symbol: 'D_f', meaning: 'Fetch / exposure distance' },
            ],
          },
          {
            id: 'b-orifice-velocity',
            name: 'Orifice Velocity of Flow',
            formula: 'V = \\sqrt{2 g h}',
            variables: [
              { symbol: 'V', meaning: 'Orifice velocity of flow' },
              { symbol: 'g', meaning: 'Gravitational acceleration: 9.81 m/s² (SI) or 32.2 ft/s² (English)' },
              { symbol: 'h', meaning: 'Head over the orifice' },
            ],
          },
          {
            id: 'b-orifice-discharge',
            name: 'Orifice Discharge',
            formula: 'Q = (0.6 \\times A)\\sqrt{2 g h}',
            variables: [
              { symbol: 'Q', meaning: 'Discharge, lps' },
              { symbol: 'A', meaning: 'Area, cm²' },
              { symbol: 'h', meaning: 'Head, cm' },
              { symbol: 'g', meaning: 'Gravitational acceleration' },
            ],
            // SOURCE NOTE: the printed 0.6 coefficient belongs to the SI form,
            // where A is in m2 and h in m and Q comes out in m3/s. The printed
            // variable list instead gives A in cm2, h in cm and Q in lps, and
            // those three do not work with 0.6: substituting A = 50 cm2 and
            // h = 30 cm gives 0.6 x 50 x sqrt(2 x 9.81 x 30) = 727.83, which is
            // 100x the correct 7.28 lps. The reason is that A in cm2 is 1e4
            // times A in m2 and h in cm is 1e-2 times h in m, so the printed
            // expression is 1e4 x 1e-2 = 1e2 times too large in m3/s, and a
            // further 1e3 short of lps, leaving a net factor of 100. The
            // dimensionally correct coefficient for the printed cm and lps
            // basis, keeping the printed sqrt(2 g h) intact, is 0.006, since
            // Q (lps) = 0.006 A (cm2) sqrt(2 g h (cm)); the same relation
            // written against the square root of the head alone is
            // Q (lps) = 0.02658 A (cm2) sqrt(h (cm)). The drill therefore
            // declares A in m2 and h in m and reports m3/s, which uses the
            // printed 0.6 unchanged. Transcribed as printed.
          },
        ],
      },
      {
        topic: 'Weirs, Flumes & Orifices',
        formulas: [
          {
            id: 'b-weir-rectangular-no-contraction',
            name: 'Rectangular Weir Without Contraction',
            formula: 'Q = 1.84\\,L H^{\\frac{3}{2}}',
            variables: [
              { symbol: 'Q', meaning: 'Discharge, lps' },
              { symbol: 'L', meaning: 'Length of weir, cm' },
              { symbol: 'H', meaning: 'Total head, cm' },
            ],
            // SOURCE NOTE: 1.84 is the SI Francis constant, which belongs with L
            // and H in METRES and Q in m3/s. The printed variable list instead
            // gives L and H in cm and Q in lps, and that pairing is out by
            // exactly 100: at L = 100 cm and H = 10 cm the printed form returns
            // 5818.6 where the correct flow is 58.2 lps. The scaling is 1e4 for
            // the linear length and 1e-3 for the three-halves head, against a
            // 1e3 from m3/s to lps, leaving 1e2. The constant that works on the
            // printed cm and lps basis is 0.0184, so
            // Q (lps) = 0.0184 L (cm) H (cm)^1.5. The drill declares L and H in
            // metres and reports m3/s, using the printed 1.84 unchanged.
            // Transcribed as printed.
          },
          {
            id: 'b-weir-rectangular-contraction',
            name: 'Rectangular Weir With Contraction',
            formula: 'Q = 1.84\\left(L - 0.2H\\right) H^{\\frac{3}{2}}',
            variables: [
              { symbol: 'Q', meaning: 'Discharge, lps' },
              { symbol: 'L', meaning: 'Length of weir, cm' },
              { symbol: 'H', meaning: 'Total head, cm' },
            ],
            // SOURCE NOTE: same 100x unit mismatch as the no-contraction form.
            // 1.84 is the SI Francis constant, belonging with L and H in metres
            // and Q in m3/s; on the printed cm and lps basis the working
            // constant is 0.0184. The 0.2H end-contraction deduction needs no
            // correction of its own, since it is subtracted from L in whatever
            // units L is carried. The Francis applicability limits are honoured
            // in the drill: this contracted form is the one that applies when L
            // exceeds 2.7H, and the sampled ranges are chosen so that L > 2.7H
            // holds across the whole sampling box. Transcribed as printed.
          },
          {
            id: 'b-weir-trapezoidal-cipolletti',
            name: 'Trapezoidal (Cipolletti) Weir',
            formula: 'Q = 1.86\\,L H^{\\frac{3}{2}}',
            variables: [
              { symbol: 'Q', meaning: 'Discharge, lps' },
              { symbol: 'L', meaning: 'Length of weir, cm' },
              { symbol: 'H', meaning: 'Total head, cm' },
            ],
            // SOURCE NOTE: same 100x unit mismatch as the rectangular forms.
            // 1.86 is the SI Cipolletti constant, belonging with L and H in
            // metres and Q in m3/s; on the printed cm and lps basis the working
            // constant is 0.0186. The 4H:1L side slope is the whole reason the
            // constant exceeds 1.84: the side slopes narrow the section, and the
            // Cipolletti proportion is chosen so that this loss exactly cancels
            // the gain from having no end contractions, which is why no 0.2H
            // deduction appears here. Transcribed as printed.
            notes: 'Cipolletti weir, 4H:1L side slope.',
          },
          {
            id: 'b-weir-triangular-vnotch',
            name: 'Triangular Weir (90° V-notch)',
            formula: 'Q = 1.4\\,H^{\\frac{5}{2}}',
            variables: [
              { symbol: 'Q', meaning: 'Discharge, lps' },
              { symbol: 'H', meaning: 'Total head, cm' },
            ],
            // SOURCE NOTE: same 100x unit mismatch as the rectangular forms.
            // 1.4 is the SI 90-degree V-notch constant, belonging with H in
            // metres and Q in m3/s; at H = 0.30 m the printed form gives
            // 0.069013 m3/s, which is 69.0 lps and matches the physical flow,
            // whereas feeding the printed H = 30 cm gives 6901.3, a hundred
            // times too large. On the printed cm and lps basis the working
            // constant is 0.014. The exponent is sound and needs no comment: the
            // flow area of a 90 degree notch grows as H squared and the velocity
            // as the square root of H, giving the two and a half power.
            // Transcribed as printed.
            notes: '90° V-notch.',
          },
          {
            id: 'b-parshall-flume',
            name: 'Parshall Flume (1 to 8 ft throat width)',
            formula: 'Q = W\\,H_a^{\\left(1.522\\,W^{0.026}\\right)}',
            variables: [
              { symbol: 'Q', meaning: 'Discharge, lps' },
              { symbol: 'W', meaning: 'Throat width, cm' },
              { symbol: 'H_a', meaning: 'Head at the crest, cm' },
            ],
            // SOURCE NOTE: the printed form carries no coefficient at all, and
            // because W appears inside the exponent the form is dimensionally
            // inhomogeneous, so there is no unit-independent constant to supply.
            // Feeding the printed W and H_a in cm returns a figure roughly two
            // orders of magnitude above the flow the flume actually passes: for
            // a 1 ft (30.48 cm) throat at H_a = 15 cm the printed expression
            // evaluates to about 2762, where a 1 ft Parshall flume at that head
            // passes on the order of 45 lps. This particular power form also
            // does not reproduce the standard Parshall ratings even in metres,
            // so it should be read as a stand-in for the rated curve rather than
            // as the rating itself. The drill declares W and H_a in metres and
            // reports m3/s, keeps the printed expression unchanged, and says so
            // in the keyConcept rather than silently substituting a
            // coefficient. Transcribed as printed.
          },
          {
            id: 'b-submerged-orifice',
            name: 'Submerged Orifice',
            formula: 'Q = 0.6\\,A\\sqrt{2 g \\Delta h}',
            variables: [
              { symbol: 'Q', meaning: 'Discharge' },
              { symbol: 'A', meaning: 'Orifice area' },
              { symbol: 'g', meaning: 'Gravitational acceleration' },
              { symbol: '\\Delta h', meaning: 'Difference in head across the orifice' },
            ],
          },
          {
            id: 'b-partly-filled-orifice',
            name: 'Partly-Filled Orifice',
            formula: 'Q = C A \\sqrt{2 g h}',
            variables: [
              { symbol: 'Q', meaning: 'Discharge' },
              { symbol: 'C', meaning: 'Coefficient of discharge' },
              { symbol: 'A', meaning: 'Area of the flowing portion' },
              { symbol: 'g', meaning: 'Gravitational acceleration' },
              { symbol: 'h', meaning: 'Head' },
            ],
          },
        ],
      },
    ],
  },

  // ==========================================================================
  // AREA C — STRUCTURES, ENVIRONMENT & BIOPROCESS   (Area 3 Formula.pdf)
  // ==========================================================================
  {
    area: 'Structures, Environment & Bioprocess',
    areaCode: 'C',
    color: 'amber',
    topics: [
      {
        topic: 'Series & Parallel Circuits',
        formulas: [
          {
            id: 'c-series-circuit',
            name: 'Series Circuit',
            formula: 'V_S = V_1 + V_2 + \\dots + V_n \\quad R_S = R_1 + R_2 + \\dots + R_n \\quad I_S = I_1 = I_2 = \\dots = I_n \\quad \\frac{1}{C_S} = \\sum \\frac{1}{C_i} \\quad L_S = L_1 + L_2 + \\dots + L_n',
            variables: [
              { symbol: 'V_S', meaning: 'Total series voltage' },
              { symbol: 'R_S', meaning: 'Total series resistance' },
              { symbol: 'I_S', meaning: 'Total series current (constant through all elements)' },
              { symbol: 'C_S', meaning: 'Total series capacitance' },
              { symbol: 'L_S', meaning: 'Total series inductance' },
            ],
          },
          {
            id: 'c-parallel-circuit',
            name: 'Parallel Circuit',
            formula: 'V_P = V_1 = V_2 = \\dots = V_n \\quad \\frac{1}{R_P} = \\sum \\frac{1}{R_i} \\quad I_P = I_1 + I_2 + \\dots + I_n \\quad C_P = C_1 + C_2 + \\dots + C_n \\quad \\frac{1}{L_P} = \\sum \\frac{1}{L_i}',
            variables: [
              { symbol: 'V_P', meaning: 'Total parallel voltage (constant across all branches)' },
              { symbol: 'R_P', meaning: 'Total parallel resistance' },
              { symbol: 'I_P', meaning: 'Total parallel current' },
              { symbol: 'C_P', meaning: 'Total parallel capacitance' },
              { symbol: 'L_P', meaning: 'Total parallel inductance' },
            ],
          },
          {
            id: 'c-voltage-divider',
            name: 'Voltage Divider Rule (VDR)',
            formula: 'V_n = V_{total}\\left(\\frac{R_n}{R_{total}}\\right)',
            variables: [
              { symbol: 'V_n', meaning: 'Voltage across branch n' },
              { symbol: 'V_{total}', meaning: 'Total applied voltage' },
              { symbol: 'R_n', meaning: 'Resistance of branch n' },
              { symbol: 'R_{total}', meaning: 'Total resistance' },
            ],
            notes: 'e.g. V_1 = V_eq(R_1/R_eq); V_2 = V_eq(R_2/R_eq).',
          },
          {
            id: 'c-current-divider',
            name: 'Current Divider Rule (CDR)',
            formula: 'I_n = I_{total}\\left(\\frac{R_{total}}{R_n}\\right)',
            variables: [
              { symbol: 'I_n', meaning: 'Current through branch n' },
              { symbol: 'I_{total}', meaning: 'Total applied current' },
              { symbol: 'R_{total}', meaning: 'Total resistance' },
              { symbol: 'R_n', meaning: 'Resistance of branch n' },
            ],
            notes: 'e.g. I_1 = I_eq(Req/R_1); I_2 = I_eq(Req/R_2).',
          },
          {
            id: 'c-delta-wye',
            name: 'Delta–Wye (Δ-Y) Transformation',
            formula: '\\text{Delta} \\to \\text{Wye: } R_1 = \\frac{R_bR_c}{R_a+R_b+R_c},\\ R_2 = \\frac{R_aR_c}{R_a+R_b+R_c},\\ R_3 = \\frac{R_aR_b}{R_a+R_b+R_c}',
            variables: [
              { symbol: 'R_a, R_b, R_c', meaning: 'Delta (triangle) resistances' },
              { symbol: 'R_1, R_2, R_3', meaning: 'Equivalent wye (star) resistances' },
            ],
            notes: 'Wye → Delta: R_a = (R_1R_2 + R_2R_3 + R_3R_1)/R_1, R_b = (R_1R_2 + R_2R_3 + R_3R_1)/R_2, R_c = (R_1R_2 + R_2R_3 + R_3R_1)/R_3.',
          },
        ],
      },
      {
        topic: 'Basic Electrical Quantities',
        formulas: [
          {
            id: 'c-ohms-law',
            name: "Ohm's Law",
            formula: 'V = iR',
            variables: [
              { symbol: 'V', meaning: 'Voltage' },
              { symbol: 'i', meaning: 'Current' },
              { symbol: 'R', meaning: 'Resistance' },
            ],
          },
          {
            id: 'c-conductance',
            name: 'Conductance',
            formula: 'C = \\frac{1}{R}',
            variables: [
              { symbol: 'C', meaning: 'Conductance' },
              { symbol: 'R', meaning: 'Resistance' },
            ],
          },
          {
            id: 'c-current',
            name: 'Current',
            formula: 'I = \\frac{V}{R} \\quad (DC) \\qquad I = \\frac{V}{Z} \\quad (AC)',
            variables: [
              { symbol: 'I', meaning: 'Current' },
              { symbol: 'V', meaning: 'Voltage' },
              { symbol: 'R', meaning: 'Resistance (DC)' },
              { symbol: 'Z', meaning: 'Impedance (AC)' },
            ],
          },
          {
            id: 'c-resistance-in-wire',
            name: 'Resistance in Wire',
            formula: 'R = \\frac{\\rho L}{A}',
            variables: [
              { symbol: 'R', meaning: 'Resistance of the wire' },
              { symbol: '\\rho', meaning: 'Resistivity of the conductor' },
              { symbol: 'L', meaning: 'Length of the wire' },
              { symbol: 'A', meaning: 'Cross-sectional area' },
            ],
          },
          {
            id: 'c-composite-wire-resistance',
            name: 'Composite (Cylindrical) Wire Resistance',
            formula: 'R = \\left(\\frac{\\rho}{2\\pi L}\\right) \\ln\\left(\\frac{r_2}{r_1}\\right)',
            variables: [
              { symbol: 'R', meaning: 'Composite wire resistance' },
              { symbol: '\\rho', meaning: 'Wire resistivity: 10.8 for copper, 17 for aluminum' },
              { symbol: 'L', meaning: 'Length of the wire' },
              { symbol: 'r_1', meaning: 'Outer radius' },
              { symbol: 'r_2', meaning: 'Inner radius' },
            ],
            notes: 'SOURCE NOTE: the handbook labels r_1 as outer radius and r_2 as inner radius, which inverts the usual convention. Transcribed as printed.',
          },
          {
            id: 'c-electrical-power',
            name: 'Power',
            formula: 'P = V i = i^2 R = \\frac{V^2}{R}',
            variables: [
              { symbol: 'P', meaning: 'Power' },
              { symbol: 'V', meaning: 'Voltage' },
              { symbol: 'i', meaning: 'Current' },
              { symbol: 'R', meaning: 'Resistance' },
            ],
          },
          {
            id: 'c-electrical-energy',
            name: 'Energy',
            formula: 'E = P \\times T',
            variables: [
              { symbol: 'E', meaning: 'Energy' },
              { symbol: 'P', meaning: 'Power, W or kW' },
              { symbol: 'T', meaning: 'Time, hr' },
            ],
          },
          {
            id: 'c-frequency',
            name: 'Frequency',
            formula: 'f = \\frac{PN}{120}',
            variables: [
              { symbol: 'f', meaning: 'Frequency, Hz' },
              { symbol: 'P', meaning: 'Number of poles' },
              { symbol: 'N', meaning: 'Rotational speed, rpm' },
            ],
            notes: '1 Hz = 1 cycle/second.',
          },
          {
            id: 'c-power-factor',
            name: 'Power Factor',
            formula: 'PF = \\cos\\theta = \\frac{R}{Z} = \\frac{i^2R}{i^2Z} = \\frac{\\text{Real Power}}{\\text{Apparent Power}}',
            variables: [
              { symbol: 'PF', meaning: 'Power factor' },
              { symbol: '\\theta', meaning: 'Phase angle' },
              { symbol: 'R', meaning: 'Resistance' },
              { symbol: 'Z', meaning: 'Impedance' },
            ],
            notes: 'Real Power = V i cos\\u03d5, watts (always less than or equal to Apparent Power, so PF < 1).',
          },
          {
            id: 'c-percent-slip',
            name: '% Slip',
            formula: '\\% Slip = \\left[\\frac{\\text{rpm of rotating field} - \\text{rpm of motor}}{\\text{rpm of rotating field}}\\right] \\times 100',
            variables: [
              { symbol: '\\text{rpm of rotating field}', meaning: 'Synchronous speed of the rotating field' },
              { symbol: '\\text{rpm of motor}', meaning: 'Actual speed of the motor rotor' },
            ],
          },
          {
            id: 'c-percent-regulation',
            name: '% Regulation',
            formula: '\\% Regulation = \\left[\\frac{V_{no\\ load} - V_{full\\ load}}{V_{full\\ load}}\\right] \\times 100',
            variables: [
              { symbol: 'V_{no\\ load}', meaning: 'No-load voltage' },
              { symbol: 'V_{full\\ load}', meaning: 'Full-load voltage' },
            ],
          },
          {
            id: 'c-horsepower',
            name: 'Horsepower',
            formula: 'hp = 2\\pi T N',
            variables: [
              { symbol: 'hp', meaning: 'Horsepower' },
              { symbol: 'T', meaning: 'Torque' },
              { symbol: 'N', meaning: 'Rotational speed, rpm' },
            ],
            notes:
              'SOURCE NOTE: printed as hp = 2*pi*T*N with no divisor, which overstates the result by 44,760x when T is in N-m and N in rpm. Working power is W = 2*pi*T*N/60, so hp = 2*pi*T*N/(60*746) = 2*pi*T*N/44,760. Transcribed as printed; the drill supplies the 44,760 divisor.',
          },
          {
            id: 'c-motor-hp-from-engine',
            name: 'Motor HP from Engine HP',
            formula: 'hp_{(motor)} = hp_{(engine)} \\times \\frac{2}{3}',
            variables: [
              { symbol: 'hp_{(motor)}', meaning: 'Electric motor horsepower' },
              { symbol: 'hp_{(engine)}', meaning: 'Engine horsepower' },
            ],
            notes: 'SOURCE NOTE: transcribed exactly as printed in the handbook (hp(motor) = hp(engine) × 2/3).',
          },
          {
            id: 'c-locked-rotor-current',
            name: 'Locked Rotor Current',
            formula: '\\text{LRC} = \\left(\\frac{VA}{hp}\\right) \\times \\left(\\frac{hp}{\\text{voltage}}\\right)',
            variables: [
              { symbol: 'VA', meaning: 'Apparent power, volt-amperes' },
              { symbol: 'hp', meaning: 'Horsepower' },
              { symbol: '\\text{voltage}', meaning: 'Rated voltage' },
            ],
          },
        ],
      },
      {
        topic: 'Capacitance, Inductance & RLC Networks',
        formulas: [
          {
            id: 'c-capacitive-reactance',
            name: 'Capacitive Reactance',
            formula: 'X_c = \\frac{1}{2\\pi f C}',
            variables: [
              { symbol: 'X_c', meaning: 'Capacitive reactance' },
              { symbol: 'f', meaning: 'Frequency, Hz' },
              { symbol: 'C', meaning: 'Capacitance, Farad' },
            ],
            notes: 'i = V/X_eq; V = i X_c.',
          },
          {
            id: 'c-inductive-reactance',
            name: 'Inductive Reactance',
            formula: 'X_L = 2\\pi f L',
            variables: [
              { symbol: 'X_L', meaning: 'Inductive reactance' },
              { symbol: 'f', meaning: 'Frequency, Hz' },
              { symbol: 'L', meaning: 'Inductance, Henry' },
            ],
          },
          {
            id: 'c-rlc-series',
            name: 'RLC — Series',
            formula: 'Z = \\sqrt{R^2 + \\left(X_c - X_L\\right)^2} \\qquad V = i\\sqrt{R^2 + \\left(X_c - X_L\\right)^2}',
            variables: [
              { symbol: 'Z', meaning: 'Total impedance' },
              { symbol: 'R', meaning: 'Resistance' },
              { symbol: 'X_c', meaning: 'Capacitive reactance' },
              { symbol: 'X_L', meaning: 'Inductive reactance' },
              { symbol: 'V', meaning: 'Applied voltage' },
              { symbol: 'i', meaning: 'Current' },
            ],
          },
          {
            id: 'c-rlc-parallel',
            name: 'RLC — Parallel (current)',
            formula: 'I_P = \\sqrt{I_R^2 + \\left(I_C - I_L\\right)^2}',
            variables: [
              { symbol: 'I_P', meaning: 'Total line current' },
              { symbol: 'I_R', meaning: 'In-phase (resistive) current' },
              { symbol: 'I_C', meaning: 'Capacitive current' },
              { symbol: 'I_L', meaning: 'Inductive current' },
            ],
          },
          {
            id: 'c-rlc-voltage',
            name: 'RLC — Voltage',
            formula: 'V_T = \\sqrt{V_R^2 + \\left(V_C - V_L\\right)^2}',
            variables: [
              { symbol: 'V_T', meaning: 'Total applied voltage' },
              { symbol: 'V_R', meaning: 'In-phase (resistive) voltage' },
              { symbol: 'V_C', meaning: 'Capacitive voltage' },
              { symbol: 'V_L', meaning: 'Inductive voltage' },
            ],
          },
        ],
      },
      {
        topic: 'Transformers',
        formulas: [
          {
            id: 'c-transformer-voltage-ratio',
            name: 'Voltage Ratio',
            formula: '\\frac{V_{primary}}{V_{secondary}} = \\frac{N_{primary}}{N_{secondary}}',
            variables: [
              { symbol: 'V_{primary}', meaning: 'Primary voltage' },
              { symbol: 'V_{secondary}', meaning: 'Secondary voltage' },
              { symbol: 'N_{primary}', meaning: 'Primary turns' },
              { symbol: 'N_{secondary}', meaning: 'Secondary turns' },
            ],
          },
          {
            id: 'c-transformer-power-relation',
            name: 'Power Relation',
            formula: 'P_{primary} = P_{secondary} \\rightarrow V_p I_p = V_s I_s',
            variables: [
              { symbol: 'P_{primary}', meaning: 'Primary power' },
              { symbol: 'P_{secondary}', meaning: 'Secondary power' },
              { symbol: 'V_p, I_p', meaning: 'Primary voltage and current' },
              { symbol: 'V_s, I_s', meaning: 'Secondary voltage and current' },
            ],
          },
          {
            id: 'c-transformer-current-turns',
            name: 'Current by Turns Relation',
            formula: '\\frac{I_s}{I_p} = \\frac{N_p}{N_s}',
            variables: [
              { symbol: 'I_s', meaning: 'Secondary current' },
              { symbol: 'I_p', meaning: 'Primary current' },
              { symbol: 'N_p', meaning: 'Primary turns' },
              { symbol: 'N_s', meaning: 'Secondary turns' },
            ],
          },
        ],
      },
      {
        topic: 'Unit Conversions',
        formulas: [
          {
            id: 'c-electrical-unit-conversions',
            name: 'Electrical / Wire Unit Conversions',
            formula: '1\\ \\text{sq mm} = 1\\ \\text{circular mil} \\times 0.0005067 \\quad 1\\ \\text{MCM} = 1{,}000\\ \\text{circular mils} \\quad \\text{Circular Mil} = D^2 \\quad \\text{Square Mil} = \\frac{\\pi D^2}{4}',
            variables: [
              { symbol: 'D', meaning: 'Wire diameter, mils' },
            ],
            notes: '1 sq mil = 1 sq inch × 0.000001; 1 sq inch = 1 sq mil × 1,000,000; 1 circular mil = 1 sq mil × 1.273; 1 kW = 1,000 W; Circular Mil = Square Mil × 0.7854; 1 mil = 0.001 in.',
          },
        ],
      },
      {
        topic: 'Temperature & Heat Transfer',
        formulas: [
          {
            id: 'c-temperature-conversions',
            name: 'Temperature Conversions',
            formula: '^\\circ C = \\frac{5}{9}\\left(^\\circ F - 32\\right) \\qquad ^\\circ F = \\frac{9}{5}\\left(^\\circ C + 32\\right) \\qquad K = ^\\circ C + 273.15 \\qquad ^\\circ R = \\frac{9}{5}K',
            variables: [
              { symbol: '^\\circ C', meaning: 'Temperature in Celsius' },
              { symbol: '^\\circ F', meaning: 'Temperature in Fahrenheit' },
              { symbol: 'K', meaning: 'Temperature in Kelvin' },
              { symbol: '^\\circ R', meaning: 'Temperature in Rankine' },
            ],
          },
          {
            id: 'c-stefan-boltzmann',
            name: 'Radiation — Stefan-Boltzmann Law',
            formula: 'Q_R = \\varepsilon \\sigma A T^4',
            variables: [
              { symbol: 'Q_R', meaning: 'Radiative heat transfer' },
              { symbol: '\\varepsilon', meaning: 'Emissivity' },
              { symbol: '\\sigma', meaning: 'Stefan-Boltzmann constant = 5.669×10⁻⁸ W/m²·K⁴' },
              { symbol: 'A', meaning: 'Area' },
              { symbol: 'T', meaning: 'Absolute surface temperature, K' },
            ],
          },
          {
            id: 'c-first-law-thermodynamics',
            name: 'First Law of Thermodynamics',
            formula: 'Q + W = \\Delta E',
            variables: [
              { symbol: 'Q', meaning: 'Heat added to the system' },
              { symbol: 'W', meaning: 'Work done by the system' },
              { symbol: '\\Delta E', meaning: 'Change in internal energy' },
            ],
            notes: 'Source note: the printed plus sign is inconsistent with the printed definition of W. With W defined as work done BY the system, energy conservation requires \\Delta E = Q - W, because part of the energy entering as heat leaves as work. A cylinder absorbing 1000 J of heat and pushing a piston through 300 J ends with 700 J more internal energy, not 1300 J; the printed form appears to add the two and so creates energy. The printed form is only correct if W is instead work done ON the system, in which case W is negative. The drill uses \\Delta E = Q - W, which is the version consistent with the printed variable definitions.',
          },
          {
            id: 'c-newtons-law-cooling',
            name: "Convection — Newton's Law of Cooling",
            formula: 'Q_h = h_c A (T_s - T_f)',
            variables: [
              { symbol: 'Q_h', meaning: 'Heat transferred by convection' },
              { symbol: 'h_c', meaning: 'Heat transfer coefficient, W/m²·K' },
              { symbol: 'A', meaning: 'Surface area, m²' },
              { symbol: 'T_s', meaning: 'Surface temperature' },
              { symbol: 'T_f', meaning: 'Fluid temperature' },
            ],
          },
          {
            id: 'c-fouriers-law',
            name: "Conduction — Fourier's Law",
            formula: 'Q_k = \\frac{K A (\\Delta T)}{L} \\quad (homogeneous\\ wall) \\qquad Q_k = \\frac{2\\pi K L (T_i - T_o)}{\\ln\\left(r_o/r_i\\right)} \\quad (cylindrical\\ wall)',
            variables: [
              { symbol: 'Q_k', meaning: 'Heat conducted' },
              { symbol: 'K', meaning: 'Thermal conductivity, W/m·K' },
              { symbol: 'A', meaning: 'Area, m²' },
              { symbol: '\\Delta T', meaning: 'Temperature difference, K' },
              { symbol: 'L', meaning: 'Length, m' },
              { symbol: 'r_i, r_o', meaning: 'Inner and outer radii' },
            ],
            notes: 'Homogeneous wall: ΔT/L = dT/dx. Composite wall: Q_k = A(T_1 - T_4) / [(x_1 - 2/K_1 - 2) + (x_2 - 3/K_2 - 3) + … + (x_n - m/K_n - m)].',
          },
        ],
      },
      {
        topic: 'Energy & Psychrometrics',
        formulas: [
          {
            id: 'c-sensible-heat',
            name: 'Sensible Heat',
            formula: 'Q = m\\,c_p\\,\\Delta T',
            variables: [
              { symbol: 'Q', meaning: 'Sensible heat' },
              { symbol: 'm', meaning: 'Mass' },
              { symbol: 'c_p', meaning: 'Specific heat: 4.19 kJ/kg·K (water), 1.0 kJ/kg·K (air)' },
              { symbol: '\\Delta T', meaning: 'Temperature change' },
            ],
          },
          {
            id: 'c-heat-utilization-factor',
            name: 'Heat Utilization Factor',
            formula: 'HUF = \\frac{T_3 - T_2}{T_1 - T_2}',
            variables: [
              { symbol: 'HUF', meaning: 'Heat utilization factor' },
              { symbol: 'T_1', meaning: 'Original dry bulb temperature' },
              { symbol: 'T_2', meaning: 'Temperature of air after heating' },
              { symbol: 'T_3', meaning: 'Dry bulb temperature of exhaust air from the dryer' },
            ],
          },
          {
            id: 'c-relative-humidity',
            name: 'Relative Humidity',
            formula: 'RH = \\left(\\frac{\\text{Actual Partial Pressure}}{\\text{Partial Pressure at Saturation}}\\right) \\times 100',
            variables: [
              { symbol: '\\text{Actual Partial Pressure}', meaning: 'Partial pressure of water vapor in the air' },
              { symbol: '\\text{Partial Pressure at Saturation}', meaning: 'Saturation vapor pressure at the same temperature' },
            ],
          },
          {
            id: 'c-enthalpy',
            name: 'Enthalpy',
            formula: 'h = c_p T + W\\,h_g',
            variables: [
              { symbol: 'h', meaning: 'Enthalpy of the air-vapor mixture' },
              { symbol: 'c_p', meaning: 'Specific heat of dry air, 1 kJ/kg·K' },
              { symbol: 'T', meaning: 'Temperature of the air-vapor mixture' },
              { symbol: 'W', meaning: 'Humidity ratio' },
              { symbol: 'h_g', meaning: 'Enthalpy of saturated steam at the mixture temperature' },
            ],
          },
          {
            id: 'c-stress',
            name: 'Stress',
            formula: '\\sigma = \\frac{P}{A}',
            variables: [
              { symbol: '\\sigma', meaning: 'Stress' },
              { symbol: 'P', meaning: 'Load / pressure' },
              { symbol: 'A', meaning: 'Area' },
            ],
          },
          {
            id: 'c-humidity-ratio',
            name: 'Humidity Ratio',
            formula: 'W = \\frac{\\text{Water-vapor pressure of air}}{\\text{Atmospheric pressure}}',
            variables: [
              { symbol: 'W', meaning: 'Humidity ratio' },
            ],
            notes: 'Atmospheric pressure P_atm = 101.3 kPa; 1 Pa = 1 N/m². Source note: the printed form is a PRESSURE ratio, not a mass ratio, so it is not the humidity ratio that the psychrometric chart and every cooling and drying calculation actually use. Dividing by the total atmospheric pressure gives the mole fraction of water vapour, and that quantity is not W. The psychrometric humidity ratio, in kilograms of water per kilogram of dry air, is W = 0.622 p_v / (P_atm - p_v), where 0.622 = M_water / M_air = 18.015/28.965 is the ratio of molar masses; the denominator is the partial pressure of the dry air, P_atm - p_v, not the total. The two differ enough to matter: at p_v = 2 kPa and P_atm = 101.3 kPa the printed form gives 0.01974 while the mass ratio is 0.01253, so the printed form is high by about 58 percent. The identity 0.622 p_v / (P_atm - p_v) = x_v / (1 - x_v) with x_v = p_v / P_atm is the exact statement of the relationship, and it is the mass version that pairs with the enthalpy and relative humidity formulas. The drill drives the printed form, and offers the mass version as a distractor, because recognising that the two are not the same number is the point.',
          },
          {
            id: 'c-density-specific-volume',
            name: 'Density / Specific Volume',
            formula: '\\rho = \\frac{Mass}{Volume} \\qquad V_{spec} = \\frac{Volume}{mass} = \\frac{1}{\\rho}',
            variables: [
              { symbol: '\\rho', meaning: 'Density' },
              { symbol: 'V_{spec}', meaning: 'Specific volume' },
            ],
          },
          {
            id: 'c-saturation-ratio',
            name: 'Saturation Ratio',
            formula: '\\text{Saturation Ratio} = \\frac{\\text{Actual Humidity Ratio}}{\\text{Humidity Ratio at Saturation}}',
            variables: [
              { symbol: '\\text{Actual Humidity Ratio}', meaning: 'Humidity ratio of the air' },
              { symbol: '\\text{Humidity Ratio at Saturation}', meaning: 'Saturated humidity ratio at the same temperature' },
            ],
          },
        ],
      },
      {
        topic: 'Lumber — Board Foot',
        formulas: [
          {
            id: 'c-board-foot',
            name: 'Board Foot',
            formula: 'Bd.Ft. = \\frac{L_{in} \\times W_{in} \\times H_{ft}}{12}',
            variables: [
              { symbol: 'L_{in}', meaning: 'Length, inches' },
              { symbol: 'W_{in}', meaning: 'Width, inches' },
              { symbol: 'H_{ft}', meaning: 'Height (thickness), feet' },
            ],
          },
          {
            id: 'c-board-foot-from-log',
            name: 'Board Foot from Log',
            formula: 'Bd.Ft. = \\frac{(D - 4)^2\\,L}{16}',
            variables: [
              { symbol: 'D', meaning: 'Small diameter of log, in' },
              { symbol: 'L', meaning: 'Length of log, ft' },
            ],
          },
        ],
      },
      {
        topic: 'Belt Speed / Power, Pump Laws & Fan Laws',
        formulas: [
          {
            id: 'c-belt-speed',
            name: 'Belt Speed',
            formula: 'V = 2\\pi N R = \\pi N D',
            variables: [
              { symbol: 'V', meaning: 'Belt speed' },
              { symbol: 'N', meaning: 'Rotational speed, rpm' },
              { symbol: 'R', meaning: 'Pulley radius' },
              { symbol: 'D', meaning: 'Pulley diameter' },
            ],
          },
          {
            id: 'c-belt-power',
            name: 'Belt Power',
            formula: 'P_{belt} = \\frac{P_{fluid}}{E_{pump}}',
            variables: [
              { symbol: 'P_{belt}', meaning: 'Power delivered by the belt drive' },
              { symbol: 'P_{fluid}', meaning: 'Fluid power' },
              { symbol: 'E_{pump}', meaning: 'Pump efficiency' },
            ],
          },
          {
            id: 'c-pump-laws',
            name: 'Pump Laws',
            formula: '\\frac{N_1}{N_2} = \\frac{q_1}{q_2} \\quad \\frac{N_1^2}{N_2^2} = \\frac{H_1}{H_2} \\quad \\frac{N_1^3}{N_2^3} = \\frac{P_1}{P_2} \\quad \\frac{D_1^3}{D_2^3} = \\frac{q_1}{q_2} \\quad \\frac{D_1^2}{D_2^2} = \\frac{H_1}{H_2} \\quad \\frac{D_1^5}{D_2^5} = \\frac{P_1}{P_2}',
            variables: [
              { symbol: 'N', meaning: 'Speed, rpm' },
              { symbol: 'q', meaning: 'Capacity' },
              { symbol: 'H', meaning: 'Head' },
              { symbol: 'P', meaning: 'Power' },
              { symbol: 'D', meaning: 'Impeller diameter' },
            ],
            notes: 'Speed vs. Capacity = 1st power of N. Speed vs. Head = 2nd power of N. Speed vs. Power = 3rd power of N. Impeller diameter exponents: 3 for capacity, 2 for head, 5 for power.',
          },
          {
            id: 'c-fan-laws',
            name: 'Fan Laws',
            formula: 'D_2 = D_1\\left(\\frac{H_1^{1/4}}{Q_1^{1/2}}\\right)\\left(\\frac{Q_2^{1/2}}{H_2^{1/4}}\\right) \\qquad N_2 = N_1\\left(\\frac{Q_1^{1/2}}{H_1^{3/4}}\\right)\\left(\\frac{H_2^{3/4}}{Q_2^{1/2}}\\right)',
            variables: [
              { symbol: 'D', meaning: 'Fan impeller diameter' },
              { symbol: 'N', meaning: 'Fan speed, rpm' },
              { symbol: 'Q', meaning: 'Volume flow' },
              { symbol: 'H', meaning: 'Pressure' },
            ],
            notes: 'P_2 = P_1 (D_2^5 / D_1^5)(N_2^3 / N_1^3).',
          },
          {
            id: 'c-air-power',
            name: 'Air Power',
            formula: 'P = Q \\nu H',
            variables: [
              { symbol: 'P', meaning: 'Air power' },
              { symbol: 'Q', meaning: 'Volume flow rate' },
              { symbol: '\\nu', meaning: 'Specific weight of air' },
              { symbol: 'H', meaning: 'Pressure head' },
            ],
          },
          {
            id: 'c-propeller-fan-pitch',
            name: 'Propeller Fan Pitch',
            formula: 'P = 2\\pi r \\tan\\alpha',
            variables: [
              { symbol: 'P', meaning: 'Pitch' },
              { symbol: 'r', meaning: 'Radius' },
              { symbol: '\\alpha', meaning: 'Angle of fan blade twist, degrees' },
            ],
          },
          {
            id: 'c-specific-speed-dryer-fan',
            name: 'Specific Speed of the Dryer Fan',
            formula: 'N_s = \\frac{N\\,Q^{0.5}}{P_s^{0.75}}',
            variables: [
              { symbol: 'N_s', meaning: 'Specific speed' },
              { symbol: 'N', meaning: 'Fan speed, rpm' },
              { symbol: 'Q', meaning: 'Airflow of fan, cfm' },
              { symbol: 'P_s', meaning: 'Pressure requirement, in-H₂O' },
            ],
          },
        ],
      },
      {
        topic: 'Grain Moisture Content',
        formulas: [
          {
            id: 'c-moisture-weight-balance',
            name: 'Moisture Weight Balance',
            formula: 'W_W = W_i - W_o \\qquad W_D = W_o \\qquad W_i = W_W + W_D',
            variables: [
              { symbol: 'W_W', meaning: 'Weight of water' },
              { symbol: 'W_D', meaning: 'Weight of dry matter' },
              { symbol: 'W_i', meaning: 'Initial (wet) weight' },
              { symbol: 'W_o', meaning: 'Oven-dry weight' },
            ],
            notes: 'SOURCE NOTE: the handbook writes the balance as Wi = WW + WD while the first identity gives Wo = Wi - WW, so the notation is not fully consistent. Transcribed as printed.',
          },
          {
            id: 'c-mc-wet-basis',
            name: '% Moisture Content, Wet Basis (MCWB)',
            formula: '\\% MC_{WB} = \\frac{W_W}{W_W + W_D} = \\frac{W_i - W_o}{W_i}',
            variables: [
              { symbol: 'MC_{WB}', meaning: 'Moisture content, wet basis' },
              { symbol: 'W_W', meaning: 'Weight of water' },
              { symbol: 'W_D', meaning: 'Weight of dry matter' },
              { symbol: 'W_i', meaning: 'Initial weight' },
              { symbol: 'W_o', meaning: 'Oven-dry weight' },
            ],
          },
          {
            id: 'c-mc-dry-basis',
            name: '% Moisture Content, Dry Basis (MCDB)',
            formula: '\\% MC_{DB} = \\frac{W_W}{W_D} = \\frac{W_i - W_o}{W_o}',
            variables: [
              { symbol: 'MC_{DB}', meaning: 'Moisture content, dry basis' },
              { symbol: 'W_W', meaning: 'Weight of water' },
              { symbol: 'W_D', meaning: 'Weight of dry matter' },
              { symbol: 'W_i', meaning: 'Initial weight' },
              { symbol: 'W_o', meaning: 'Oven-dry weight' },
            ],
          },
          {
            id: 'c-wet-dry-basis-relationship',
            name: 'Wet–Dry Basis Relationship',
            formula: '\\% MC_{WB} = \\frac{MC_{DB}}{1 + MC_{WB}} \\times 100 \\qquad \\% MC_{DB} = \\frac{MC_{WB}}{1 - MC_{WB}} \\times 100',
            variables: [
              { symbol: 'MC_{WB}', meaning: 'Moisture content, wet basis' },
              { symbol: 'MC_{DB}', meaning: 'Moisture content, dry basis' },
            ],
            notes: 'SOURCE NOTE: the handbook mixes the percent symbol with the fractional wet/dry form in these two expressions. Transcribed as printed.',
          },
          {
            id: 'c-weight-moisture-removed',
            name: 'Weight of Moisture Removed',
            formula: 'W_{MR} = W_i\\left[1 - \\frac{1 - MC_i}{1 - MC_f}\\right] = MC\\left(W_W + W_D\\right)',
            variables: [
              { symbol: 'W_{MR}', meaning: 'Weight of moisture removed' },
              { symbol: 'W_i', meaning: 'Initial weight' },
              { symbol: 'MC_i', meaning: 'Initial moisture content' },
              { symbol: 'MC_f', meaning: 'Final moisture content' },
            ],
          },
          {
            id: 'c-final-weight-dried',
            name: 'Final Weight of Dried Material',
            formula: 'W_f = \\frac{W_i\\left(1 - MC_i\\right)}{1 - MC_f}',
            variables: [
              { symbol: 'W_f', meaning: 'Final weight of dried material' },
              { symbol: 'W_i', meaning: 'Initial weight' },
              { symbol: 'MC_i', meaning: 'Initial moisture content' },
              { symbol: 'MC_f', meaning: 'Final moisture content' },
            ],
          },
          {
            id: 'c-moisture-reduction-rate',
            name: 'Moisture Reduction Rate',
            formula: 'MRR = \\frac{W_i - W_f}{T_d}',
            variables: [
              { symbol: 'MRR', meaning: 'Moisture reduction rate' },
              { symbol: 'W_i', meaning: 'Initial weight' },
              { symbol: 'W_f', meaning: 'Final weight' },
              { symbol: 'T_d', meaning: 'Drying time' },
            ],
          },
          {
            id: 'c-percent-moisture-reduction',
            name: '% Moisture Reduction Rate',
            formula: '\\% MRR = \\frac{MC_i - MC_f}{T_d}',
            variables: [
              { symbol: 'MRR', meaning: 'Moisture reduction rate' },
              { symbol: 'MC_i', meaning: 'Initial moisture content' },
              { symbol: 'MC_f', meaning: 'Final moisture content' },
              { symbol: 'T_d', meaning: 'Drying time' },
            ],
          },
        ],
      },
      {
        topic: 'Paddy Properties',
        formulas: [
          {
            id: 'c-paddy-porosity-medium',
            name: 'Paddy Porosity — Medium Grain',
            formula: '\\% P_M = 69.05 - 0.885\\,MC_{WB}',
            variables: [
              { symbol: 'P_M', meaning: 'Porosity of medium-grain paddy' },
              { symbol: 'MC_{WB}', meaning: 'Moisture content, wet basis' },
            ],
          },
          {
            id: 'c-paddy-porosity-long',
            name: 'Paddy Porosity — Long Grain',
            formula: '\\% P_L = 65.55 - 0.475\\,MC_{WB}',
            variables: [
              { symbol: 'P_L', meaning: 'Porosity of long-grain paddy' },
              { symbol: 'MC_{WB}', meaning: 'Moisture content, wet basis' },
            ],
          },
          {
            id: 'c-percent-increase-porosity',
            name: '% Increase in Porosity',
            formula: '\\% \\text{Increased} = \\left(\\frac{\\text{Final Porosity} - \\text{Initial Porosity}}{\\text{Final Porosity}}\\right) \\times 100',
            variables: [
              { symbol: '\\text{Final Porosity}', meaning: 'Porosity after processing' },
              { symbol: '\\text{Initial Porosity}', meaning: 'Porosity before processing' },
            ],
          },
          {
            id: 'c-minimum-angle-friction',
            name: 'Minimum Angle of Friction',
            formula: '\\theta = \\tan^{-1}(x)',
            variables: [
              { symbol: '\\theta', meaning: 'Angle of friction' },
              { symbol: 'x', meaning: 'Material coefficient of friction' },
            ],
          },
          {
            id: 'c-specific-heat-paddy',
            name: 'Specific Heat of Paddy',
            formula: 'C\\,(BTU/lb\\cdot^\\circ F) = 0.22008 + 0.01301\\,MC_{WB}',
            variables: [
              { symbol: 'C', meaning: 'Specific heat of paddy' },
              { symbol: 'MC_{WB}', meaning: 'Moisture content, wet basis' },
            ],
          },
        ],
      },
      {
        topic: 'Rice Milling',
        formulas: [
          {
            id: 'c-hulling-coefficient',
            name: 'Hulling Coefficient',
            formula: 'C_H = \\frac{W_{BR}}{W_P}',
            variables: [
              { symbol: 'C_H', meaning: 'Hulling coefficient' },
              { symbol: 'W_{BR}', meaning: 'Weight of brown rice' },
              { symbol: 'W_P', meaning: 'Weight of paddy' },
            ],
          },
          {
            id: 'c-wholeness-coefficient',
            name: 'Wholeness Coefficient',
            formula: 'C_W = \\frac{W_{WBR}}{W_{BR}}',
            variables: [
              { symbol: 'C_W', meaning: 'Wholeness coefficient' },
              { symbol: 'W_{WBR}', meaning: 'Weight of whole brown rice' },
              { symbol: 'W_{BR}', meaning: 'Weight of brown rice' },
            ],
          },
          {
            id: 'c-hulling-efficiency',
            name: 'Hulling Efficiency',
            formula: 'E_H = \\frac{W_{WBR}}{W_P} = C_H \\times C_W',
            variables: [
              { symbol: 'E_H', meaning: 'Hulling efficiency' },
              { symbol: 'W_{WBR}', meaning: 'Weight of whole brown rice' },
              { symbol: 'W_P', meaning: 'Weight of paddy' },
            ],
          },
          {
            id: 'c-percent-milling-recovery',
            name: '% Milling Recovery',
            formula: '\\% MR = \\left(\\frac{W_{MR}}{W_P}\\right) \\times 100',
            variables: [
              { symbol: 'MR', meaning: 'Milling recovery' },
              { symbol: 'W_{MR}', meaning: 'Weight of milled rice' },
              { symbol: 'W_P', meaning: 'Weight of paddy' },
            ],
          },
          {
            id: 'c-throughput-capacity',
            name: 'Throughput Capacity',
            formula: 'C_T = \\frac{0.2\\,W_P}{T_o} \\ (brown\\ rice) \\qquad C_T = \\frac{W_P \\times W_{MR}}{T_o} \\ (milled\\ rice)',
            variables: [
              { symbol: 'C_T', meaning: 'Throughput capacity' },
              { symbol: 'W_P', meaning: 'Weight of paddy' },
              { symbol: 'W_{MR}', meaning: 'Weight of milled rice' },
              { symbol: 'T_o', meaning: 'Operating time' },
            ],
            notes: 'SOURCE NOTE: the two printed branches are not dimensionally alike. The brown-rice branch 0.2 W_P / T_o is a rate, a weight over a time, and the 0.2 is the hulling coefficient - the share of a paddy batch that survives as brown rice. The milled-rice branch W_P x W_MR / T_o multiplies two weights, so it comes out in weight-squared per time and cannot be a capacity at all; the coherent reading is W_MR / T_o, with W_P a redundant factor or a transcription slip. Transcribed as printed. Only the brown-rice branch is driven, because it is the one whose units work.',
          },
          {
            id: 'c-brown-rice-per-hour',
            name: 'Brown Rice per Hour',
            formula: 'W_{BR/hr} = W_P \\times E_H \\times P = W_P \\times C_H \\times C_W \\times P',
            variables: [
              { symbol: 'W_{BR/hr}', meaning: 'Brown rice produced per hour' },
              { symbol: 'W_P', meaning: 'Weight of paddy' },
              { symbol: 'E_H', meaning: 'Hulling efficiency' },
              { symbol: 'C_H', meaning: 'Hulling coefficient' },
              { symbol: 'C_W', meaning: 'Wholeness coefficient' },
              { symbol: 'P', meaning: 'Purity' },
            ],
            notes: 'SOURCE NOTE: the purity relation in this handbook returns P as a PERCENTAGE, 0 to 100, but the printed expression here multiplies by P directly. Taken at face value a purity of 97 would inflate the output ninety-seven fold, so P must be entered as a FRACTION in this formula even though the other entry expresses it as a percentage. Transcribed as printed; the fraction convention is the one that makes the dimension work.',
          },
          {
            id: 'c-purity',
            name: 'Purity',
            formula: 'P = \\left[1 - \\frac{W_u - W_c}{W_c}\\right] \\times 100',
            variables: [
              { symbol: 'P', meaning: 'Purity' },
              { symbol: 'W_u', meaning: 'Weight of uncleaned grains' },
              { symbol: 'W_c', meaning: 'Weight of cleaned grains' },
            ],
          },
          {
            id: 'c-percent-brown-rice-recovery',
            name: '% Brown Rice Recovery',
            formula: '\\% BRR = \\left(\\frac{W_{BR}}{W_P}\\right) \\times 100',
            variables: [
              { symbol: 'BRR', meaning: 'Brown rice recovery' },
              { symbol: 'W_{BR}', meaning: 'Weight of brown rice' },
              { symbol: 'W_P', meaning: 'Weight of paddy' },
            ],
          },
          {
            id: 'c-percent-broken-milled-rice',
            name: '% Broken Milled Rice',
            formula: '\\% BKR = \\left(\\frac{W_{BKR}}{W_{MR}}\\right) \\times 100',
            variables: [
              { symbol: 'BKR', meaning: 'Broken milled rice' },
              { symbol: 'W_{BKR}', meaning: 'Weight of broken milled rice' },
              { symbol: 'W_{MR}', meaning: 'Weight of milled rice' },
            ],
          },
          {
            id: 'c-percent-brewers-rice',
            name: "% Brewer's Rice",
            formula: '\\% BrR = \\left(\\frac{W_{BrR}}{W_{MR}}\\right) \\times 100',
            variables: [
              { symbol: 'BrR', meaning: "Brewer's rice" },
              { symbol: 'W_{BrR}', meaning: "Weight of brewer's rice" },
              { symbol: 'W_{MR}', meaning: 'Weight of milled rice' },
            ],
          },
          {
            id: 'c-percent-head-rice-recovery',
            name: '% Head Rice Recovery',
            formula: '\\% HRR = \\left(\\frac{W_{HR}}{W_{MR}}\\right) \\times 100',
            variables: [
              { symbol: 'HRR', meaning: 'Head rice recovery' },
              { symbol: 'W_{HR}', meaning: 'Weight of head rice' },
              { symbol: 'W_{MR}', meaning: 'Weight of milled rice' },
            ],
          },
        ],
      },
      {
        topic: 'Grain Drying System Design',
        formulas: [
          {
            id: 'c-drying-capacity',
            name: 'Drying Capacity',
            formula: 'C_D = \\frac{W_i}{T_D}',
            variables: [
              { symbol: 'C_D', meaning: 'Drying capacity' },
              { symbol: 'W_i', meaning: 'Initial weight' },
              { symbol: 'T_D', meaning: 'Drying time' },
            ],
          },
          {
            id: 'c-volume-grain-to-dry',
            name: 'Volume of Grain to be Dried',
            formula: 'V_g = \\frac{W_i}{\\rho_{grain}}',
            variables: [
              { symbol: 'V_g', meaning: 'Volume of grain' },
              { symbol: 'W_i', meaning: 'Initial weight' },
              { symbol: '\\rho_{grain}', meaning: 'Bulk density of grain' },
            ],
          },
          {
            id: 'c-drying-floor-area',
            name: 'Drying Floor Area',
            formula: 'A_f = \\frac{V_g}{D_g}',
            variables: [
              { symbol: 'A_f', meaning: 'Drying floor area' },
              { symbol: 'V_g', meaning: 'Volume of grain' },
              { symbol: 'D_g', meaning: 'Depth of grain in bin' },
            ],
          },
          {
            id: 'c-airflow-requirement',
            name: 'Airflow Requirement',
            formula: 'AF_R = C_D \\times SAF',
            variables: [
              { symbol: 'AF_R', meaning: 'Airflow requirement' },
              { symbol: 'C_D', meaning: 'Drying capacity' },
              { symbol: 'SAF', meaning: 'Specific airflow rate, m³/min-ton' },
            ],
          },
          {
            id: 'c-apparent-air-velocity',
            name: 'Apparent Air Velocity in Grain Bed',
            formula: 'V_{app} = \\frac{AF_R}{A_f}',
            variables: [
              { symbol: 'V_{app}', meaning: 'Apparent air velocity' },
              { symbol: 'AF_R', meaning: 'Airflow requirement' },
              { symbol: 'A_f', meaning: 'Drying floor area' },
            ],
            notes: 'General form: V = Q/A.',
          },
        ],
      },
      {
        topic: 'Engine Foundation',
        formulas: [
          {
            id: 'c-weight-of-foundation',
            name: 'Weight of Foundation',
            formula: 'W_F = 0.11\\,W_E\\,N^{0.5}',
            variables: [
              { symbol: 'W_F', meaning: 'Weight of foundation' },
              { symbol: 'W_E', meaning: 'Weight of engine, kg' },
              { symbol: 'N', meaning: 'Maximum engine speed, rpm' },
            ],
          },
          {
            id: 'c-volume-of-foundation',
            name: 'Volume of Foundation',
            formula: 'V_F = \\frac{W_F}{\\rho_C}',
            variables: [
              { symbol: 'V_F', meaning: 'Volume of foundation' },
              { symbol: 'W_F', meaning: 'Weight of foundation' },
              { symbol: '\\rho_C', meaning: 'Density of concrete = 2,406 kg/m³' },
            ],
          },
          {
            id: 'c-depth-of-foundation',
            name: 'Depth of Foundation',
            formula: 'D_F = \\frac{V_F}{W_E \\times L_E \\times \\text{Allowance}} = \\frac{V}{W \\times L}',
            variables: [
              { symbol: 'D_F', meaning: 'Depth of foundation' },
              { symbol: 'V_F', meaning: 'Volume of foundation' },
              { symbol: 'W_E', meaning: 'Width of engine plus allowance' },
              { symbol: 'L_E', meaning: 'Length of engine' },
            ],
            notes: 'General: T = V/(W × L).',
          },
          {
            id: 'c-soil-pressure-foundation',
            name: 'Exerted Soil Pressure at Foundation',
            formula: 'P_s = \\frac{W_E \\times W_F}{A_F}',
            variables: [
              { symbol: 'P_s', meaning: 'Exerted soil pressure' },
              { symbol: 'W_E', meaning: 'Weight of engine' },
              { symbol: 'W_F', meaning: 'Weight of foundation' },
              { symbol: 'A_F', meaning: 'Area of foundation' },
            ],
          },
          {
            id: 'c-foundation-factor-safety',
            name: 'Factor of Safety',
            formula: 'FS = \\frac{BC_{soil}}{P_s}',
            variables: [
              { symbol: 'FS', meaning: 'Factor of safety' },
              { symbol: 'BC_{soil}', meaning: 'Safe soil bearing capacity = 12,225 as given in the source' },
              { symbol: 'P_s', meaning: 'Exerted soil pressure' },
            ],
            notes: 'SOURCE NOTE: the handbook prints BC_soil = 12,225 kg/m³. A bearing capacity is dimensionally a pressure (kg/m²), so the unit is transcribed as printed but should be verified against the printed page.',
          },
        ],
      },
      {
        topic: 'Bucket Elevator',
        formulas: [
          {
            id: 'c-bucket-velocity',
            name: 'Bucket Velocity',
            formula: 'V_B = \\pi D N',
            variables: [
              { symbol: 'V_B', meaning: 'Bucket velocity' },
              { symbol: 'D', meaning: 'Wheel diameter' },
              { symbol: 'N', meaning: 'Rotational speed' },
            ],
          },
          {
            id: 'c-bucket-elevator-speed',
            name: 'Bucket Elevator Speed',
            formula: 'N = \\frac{54.19}{R^{0.5}}',
            variables: [
              { symbol: 'N', meaning: 'Bucket elevator speed' },
              { symbol: 'R', meaning: 'Radius of wheel plus half the projection of the bucket, ft' },
            ],
          },
          {
            id: 'c-bucket-elevator-power',
            name: 'Power Requirement',
            formula: 'P = \\text{Capacity} \\times H \\times F',
            variables: [
              { symbol: 'P', meaning: 'Power requirement' },
              { symbol: 'H', meaning: 'Height' },
              { symbol: 'F', meaning: 'F = 1.5 (loaded downside) or 1.2 (loaded upside)' },
            ],
          },
        ],
      },
      {
        topic: 'Lighting',
        formulas: [
          {
            id: 'c-maximum-lamp-spacing',
            name: 'Maximum Lamp Spacing',
            formula: 'M_s = C_f \\times M_H \\ (fluorescent) \\qquad M_s = C_i \\times M_H \\ (incandescent)',
            variables: [
              { symbol: 'M_s', meaning: 'Maximum lamp spacing' },
              { symbol: 'M_H', meaning: 'Maximum lamp height' },
              { symbol: 'C_i', meaning: 'Incandescent factor: 0.9 for RLM standard dome trusted lamp; 1.0 for RLM standard silvered-bowl lamp' },
              { symbol: 'C_f', meaning: 'Fluorescent factor: 0.9 for direct RLM with louvers; 1.0 for direct RLM 2×40W; 1.2 for incandescent glass/metal/plastic' },
            ],
          },
        ],
      },
      {
        topic: 'Energy Metering',
        formulas: [
          {
            id: 'c-energy-consumption-disk-meter',
            name: 'Energy Consumption (Disk Meter)',
            formula: 'EC = \\frac{60\\,k_h \\times D_{rev}}{1{,}000\\,T_c}',
            variables: [
              { symbol: 'EC', meaning: 'Energy consumed, kW-hr' },
              { symbol: 'k_h', meaning: 'Meter disk factor = 2.5' },
              { symbol: 'D_{rev}', meaning: 'Number of revolutions' },
              { symbol: 'T_c', meaning: 'Counting period, min' },
            ],
          },
        ],
      },
      {
        topic: 'Wire Size Selection',
        formulas: [
          {
            id: 'c-wire-size-selection',
            name: 'Wire Size Selection',
            formula: 'A = \\frac{\\rho \\times N_w \\times L \\times I}{V_{drop} \\times V}',
            variables: [
              { symbol: 'A', meaning: 'Required wire cross-sectional area' },
              { symbol: '\\rho', meaning: 'Wire resistivity: Cu = 10.8, Al = 17' },
              { symbol: 'N_w', meaning: 'Number of wires' },
              { symbol: 'L', meaning: 'Length of wire, ft' },
              { symbol: 'I', meaning: 'Current, A' },
              { symbol: 'V_{drop}', meaning: 'Voltage drop, 0.02' },
              { symbol: 'V', meaning: 'Voltage, volts' },
            ],
          },
        ],
      },
      {
        topic: 'Conveying & Storage',
        formulas: [
          {
            id: 'c-screw-conveyor-capacity',
            name: 'Capacity of Screw Conveyor',
            formula: '\\text{Capacity} = \\left(\\frac{\\pi D^2}{4}\\right) \\times P \\times N',
            variables: [
              { symbol: 'D', meaning: 'Screw diameter' },
              { symbol: 'P', meaning: 'Pitch diameter' },
              { symbol: 'N', meaning: 'Rotational speed, rpm' },
            ],
            notes: 'SOURCE NOTE: the handbook header says "Capacity = Area × Pitch Diameter × N" and the equation uses (πD²/4) for the area. Transcribed as printed.',
          },
          {
            id: 'c-volume-of-pile',
            name: 'Volume of Pile',
            formula: 'V = \\frac{CWH}{\\text{Stock Density}}',
            variables: [
              { symbol: 'CWH', meaning: 'Warehouse capacity' },
              { symbol: '\\text{Stock Density}', meaning: 'Rice = 15 bag/m³, palay = 10 bag/m³, corn = 12 bag/m³' },
            ],
          },
          {
            id: 'c-paddy-separator-compartments',
            name: 'Number of Compartments, Paddy Separator',
            formula: 'N_c = \\frac{C_B}{40} \\ (long\\ grain) \\qquad N_c = \\frac{C_B}{60} \\ (short\\ grain)',
            variables: [
              { symbol: 'N_c', meaning: 'Number of compartments' },
              { symbol: 'C_B', meaning: 'Throughput capacity of brown rice, kg/hr' },
            ],
          },
        ],
      },
      {
        topic: 'Grain Storage Structures',
        formulas: [
          {
            id: 'c-bin-level-full-volume',
            name: 'Cylindrical Bin — Level Full Volume',
            formula: 'V = \\left(\\frac{\\pi D^2}{4}\\right) H',
            variables: [
              { symbol: 'V', meaning: 'Bin capacity' },
              { symbol: 'D', meaning: 'Bin diameter' },
              { symbol: 'H', meaning: 'Eave height of bin' },
            ],
          },
          {
            id: 'c-bin-peak-storage-capacity',
            name: 'Cylindrical Bin — Peak Storage Capacity',
            formula: 'V = \\left(\\frac{\\pi D^2}{4}\\right)\\left[H + \\frac{(D/2)\\tan\\phi}{3}\\right]',
            variables: [
              { symbol: 'V', meaning: 'Bin capacity' },
              { symbol: 'D', meaning: 'Bin diameter' },
              { symbol: 'H', meaning: 'Eave height of bin' },
              { symbol: '\\phi', meaning: 'Maximum angle of fill, degrees' },
            ],
          },
          {
            id: 'c-hopper-bottom-bin',
            name: 'Hopper Bottom Bin',
            formula: 'V = \\left(\\frac{\\pi D^2}{4}\\right)\\left[H + \\frac{(D/2)\\tan\\phi}{3} + \\frac{(D/2)\\tan\\delta}{3}\\right]',
            variables: [
              { symbol: 'V', meaning: 'Bin capacity' },
              { symbol: 'D', meaning: 'Bin diameter' },
              { symbol: 'H', meaning: 'Eave height of bin' },
              { symbol: '\\phi', meaning: 'Maximum angle of fill, degrees' },
              { symbol: '\\delta', meaning: 'Slope of hopper from horizontal, degrees' },
            ],
          },
          {
            id: 'c-vertical-abrasive-whitener-brakes',
            name: 'Number of Brakes, Vertical Abrasive Whitener',
            formula: 'N_B = \\frac{D}{100}',
            variables: [
              { symbol: 'N_B', meaning: 'Number of brakes' },
              { symbol: 'D', meaning: 'Cone diameter' },
            ],
          },
          {
            id: 'c-low-speed-rubber-roller',
            name: 'Speed of Low-Speed Rubber Roller',
            formula: 'N_S = N_F\\left(1 - 0.25\\right)',
            variables: [
              { symbol: 'N_S', meaning: 'Speed of slower roller, rpm' },
              { symbol: 'N_F', meaning: 'Speed of faster roller, rpm' },
            ],
          },
        ],
      },
    ],
  },
];
