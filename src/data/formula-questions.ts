import { type Area, type Difficulty, type Question } from './comprehensive-questions';

function genVariations(
  cfg: {
    idPrefix: string; area: Area; subTopic: string; topic: string; difficulty: Difficulty;
    question: string; options: string[]; correctAnswer: number;
    given: string; steps: string[]; formula: string; keyConcept: string; commonMistakes: string[]; weakPoints: string[];
  },
  values: (number | number[])[],
  compute: (v: number[]) => Record<string, string>
): Question[] {
  return values.map((val, i) => {
    const vals = Array.isArray(val) ? val : [val];
    const results = compute(vals);
    const r = (s: string) => {
      let out = s;
      vals.forEach((v, j) => out = out.replaceAll(`{v${j}}`, String(v)));
      Object.entries(results).forEach(([k, v]) => out = out.replaceAll(`{${k}}`, String(v)));
      return out;
    };
    return {
      id: `${cfg.idPrefix}-${String(i).padStart(3, '0')}`,
      area: cfg.area, subTopic: cfg.subTopic, topic: cfg.topic, difficulty: cfg.difficulty,
      question: r(cfg.question), options: cfg.options.map(r), correctAnswer: cfg.correctAnswer,
      solution: {
        given: r(cfg.given), steps: cfg.steps.map(r), formula: r(cfg.formula),
        keyConcept: r(cfg.keyConcept), commonMistakes: cfg.commonMistakes.map(r),
      },
      weakPoints: [...cfg.weakPoints],
    };
  });
}

export function addFormulaQuestions(areaA: Question[], areaB: Question[], areaC: Question[]): void {
  // ============ AREA A: FLUID MECHANICS ============
  areaA.push(...genVariations({
    idPrefix: 'A-fluid-e', area: 'A', subTopic: 'fluid-mechanics', topic: 'Hydrostatic Pressure', difficulty: 'easy',
    question: 'Calculate the hydrostatic pressure at a depth of {v0} m in water. (ρ = 1000 kg/m³, g = 9.81 m/s²)',
    options: ['{r0} kPa', '{r1} kPa', '{r2} kPa', '{r3} kPa'], correctAnswer: 0,
    given: 'Depth (h) = {v0} m\nDensity (ρ) = 1000 kg/m³\ng = 9.81 m/s²',
    steps: ['Formula: P = ρgh', 'P = 1000 × 9.81 × {v0}', 'P = {r4} Pa = {r0} kPa'],
    formula: 'P = ρgh',
    keyConcept: 'Hydrostatic pressure increases linearly with depth. Pressure depends only on depth, density, and gravity, not on container shape.',
    commonMistakes: ['Using diameter instead of depth', 'Forgetting to convert Pa to kPa (÷ 1000)', 'Using g = 9.81 instead of ρg together'],
    weakPoints: ['Hydrostatic pressure formula', 'Unit conversion (Pa to kPa)']
  }, [2, 5, 8, 10, 12, 15, 20, 25, 30, 3, 6, 9, 14, 18, 22, 28, 35, 40, 45, 50],
  ([h]) => ({ r0: (h * 9.81).toFixed(2), r1: (h * 0.981).toFixed(2), r2: (h / 9.81).toFixed(2), r3: (h * 100).toFixed(1), r4: (h * 9810).toLocaleString() })));

  areaA.push(...genVariations({
    idPrefix: 'A-cont-a', area: 'A', subTopic: 'fluid-mechanics', topic: 'Continuity Equation', difficulty: 'average',
    question: 'Water flows through a pipe. At section 1, the diameter is {v0} cm and velocity is {v1} m/s. At section 2, the diameter is {v2} cm. What is the velocity at section 2?',
    options: ['{r0} m/s', '{v1} m/s', '{r1} m/s', '{r2} m/s'], correctAnswer: 0,
    given: 'D₁ = {v0} cm → r₁ = {v3} m → A₁ = {v4} m²\nD₂ = {v2} cm → r₂ = {v5} m → A₂ = {v6} m²\nv₁ = {v1} m/s',
    steps: ['Continuity: A₁v₁ = A₂v₂', 'v₂ = A₁v₁ / A₂', 'v₂ = {v4} × {v1} / {v6}', 'v₂ = {r0} m/s'],
    formula: 'A₁v₁ = A₂v₂',
    keyConcept: 'For incompressible flow, velocity is inversely proportional to cross-sectional area (Q = Av = constant).',
    commonMistakes: ['Using diameter instead of area', 'Using radius instead of diameter in area formula', 'Reversing the ratio'],
    weakPoints: ['Continuity equation', 'Area calculation from diameter']
  }, [[20, 3, 10], [25, 2, 15], [30, 1.5, 10], [15, 4, 8], [10, 5, 5], [22, 2.5, 11], [18, 3.5, 9], [35, 1.2, 20], [12, 6, 6], [28, 1.8, 14],
    [16, 4.5, 8], [24, 2.2, 12], [20, 1, 5], [32, 1.5, 16], [14, 5, 7], [26, 2, 13], [19, 3.8, 9.5], [21, 2.8, 10.5], [30, 0.8, 6], [40, 1, 20]],
  ([d1, v1, d2]) => {
    const A1 = Math.PI * (d1 / 200) ** 2, A2 = Math.PI * (d2 / 200) ** 2;
    const v2 = A1 * v1 / A2;
    return { r0: v2.toFixed(2), r1: (v2 * 1.5).toFixed(2), r2: (v1 / 2).toFixed(2), v3: (d1 / 200).toFixed(3), v4: A1.toFixed(5), v5: (d2 / 200).toFixed(3), v6: A2.toFixed(5) };
  }));

  areaA.push(...genVariations({
    idPrefix: 'A-pump-a', area: 'A', subTopic: 'fluid-mechanics', topic: 'Pump Power', difficulty: 'average',
    question: 'A pump delivers {v0} m³/s of water against a total head of {v1} m. If pump efficiency is {v2}%, what is the required power input? (ρ = 1000 kg/m³, g = 9.81 m/s²)',
    options: ['{r0} kW', '{r1} kW', '{r2} kW', '{r3} kW'], correctAnswer: 0,
    given: 'Flow rate (Q) = {v0} m³/s\nTotal head (H) = {v1} m\nEfficiency (η) = {v2}% = {v3}\nρ = 1000 kg/m³\ng = 9.81 m/s²',
    steps: ['Formula: P = ρgQH / η', 'P = 1000 × 9.81 × {v0} × {v1} / {v3}', 'P = {r0} kW'],
    formula: 'P = ρgQH / η',
    keyConcept: 'Pump power requirement increases linearly with flow rate, head, and decreases with pump efficiency. Power in kW = hydraulic power / efficiency.',
    commonMistakes: ['Forgetting to convert efficiency to decimal', 'Using wrong units (watts vs kW)', 'Excluding pump efficiency'],
    weakPoints: ['Pump power formula', 'Efficiency conversion']
  }, [[0.05, 20, 75], [0.1, 15, 80], [0.02, 30, 65], [0.08, 25, 70], [0.15, 10, 85], [0.03, 40, 60], [0.12, 18, 78], [0.06, 22, 72], [0.04, 35, 68], [0.09, 28, 75],
    [0.07, 16, 82], [0.11, 12, 88], [0.025, 45, 55], [0.13, 14, 80], [0.055, 32, 70], [0.018, 50, 60], [0.095, 24, 76], [0.14, 11, 85], [0.035, 38, 65], [0.075, 30, 72]],
  ([Q, H, eff]) => {
    const e = eff / 100; const P = 1000 * 9.81 * Q * H / e;
    return { r0: (P / 1000).toFixed(2), r1: (P / 1000 * 0.8).toFixed(2), r2: (P / 1000 * 1.2).toFixed(2), r3: (P / 1000 / e).toFixed(2), v3: e.toFixed(2) };
  }));

  // ============ AREA A: THERMODYNAMICS ============
  areaA.push(...genVariations({
    idPrefix: 'A-fourier-a', area: 'A', subTopic: 'thermodynamics', topic: "Fourier's Law (Conduction)", difficulty: 'average',
    question: 'A wall has thermal conductivity k = {v0} W/m·K, area = {v1} m², thickness = {v2} m, and temperature difference = {v3} °C. What is the heat transfer rate?',
    options: ['{r0} W', '{r1} W', '{r2} W', '{r3} W'], correctAnswer: 0,
    given: 'k = {v0} W/m·K\nA = {v1} m²\nL = {v2} m\nΔT = {v3} °C',
    steps: ['Fourier\'s Law: Q̇ = kAΔT / L', 'Q̇ = {v0} × {v1} × {v3} / {v2}', 'Q̇ = {r0} W'],
    formula: 'Q̇ = kAΔT / L',
    keyConcept: 'Heat conduction rate depends on material property (k), geometry (A/L), and driving potential (ΔT). Higher k and A, lower L → more heat transfer.',
    commonMistakes: ['Using incorrect units', 'Reversing area and thickness', 'Adding instead of multiplying'],
    weakPoints: ['Conduction heat transfer', 'Fourier\'s Law parameters']
  }, [[0.8, 10, 0.2, 25], [0.04, 15, 0.1, 30], [1.2, 8, 0.15, 40], [0.6, 12, 0.25, 20], [0.9, 20, 0.3, 35],
    [0.2, 25, 0.05, 50], [1.5, 5, 0.1, 60], [0.35, 18, 0.2, 28], [2.0, 6, 0.12, 45], [0.1, 30, 0.08, 55],
    [0.7, 14, 0.18, 32], [1.0, 10, 0.25, 22], [0.5, 22, 0.15, 38], [1.8, 4, 0.08, 70], [0.3, 28, 0.12, 48],
    [0.45, 16, 0.22, 26], [1.4, 7, 0.1, 55], [0.25, 24, 0.06, 65], [0.85, 12, 0.2, 30], [1.1, 9, 0.15, 42]],
  ([k, A, L, dT]) => ({ r0: (k * A * dT / L).toFixed(0), r1: (k * A * dT / L * 0.7).toFixed(0), r2: (k * A * dT / L * 1.3).toFixed(0), r3: (k * A * dT * L).toFixed(0) })));

  areaA.push(...genVariations({
    idPrefix: 'A-cop-e', area: 'A', subTopic: 'thermodynamics', topic: 'Refrigeration COP', difficulty: 'easy',
    question: 'A refrigerator removes {v0} kJ of heat from a cold space while requiring {v1} kJ of work input. What is the COP?',
    options: ['{r0}', '{r1}', '{r2}', '{r3}'], correctAnswer: 0,
    given: 'Heat removed (Q_L) = {v0} kJ\nWork input (W_in) = {v1} kJ',
    steps: ['COP = Q_L / W_in', 'COP = {v0} / {v1}', 'COP = {r0}'],
    formula: 'COP = Q_L / W_in',
    keyConcept: 'COP measures refrigeration efficiency. Higher COP means more cooling per unit of work. Typical COP for vapor-compression: 2.5 - 5.0.',
    commonMistakes: ['Reversing the ratio (W_in / Q_L)', 'Forgetting COP is dimensionless', 'Confusing with heat pump COP'],
    weakPoints: ['Refrigeration COP', 'Efficiency measures']
  }, [[100, 25], [150, 30], [200, 50], [80, 20], [300, 75], [120, 40], [250, 50], [90, 30], [180, 45], [400, 80],
    [60, 20], [160, 32], [350, 70], [140, 35], [220, 55], [75, 25], [500, 100], [110, 44], [280, 70], [130, 26]],
  ([QL, W]) => ({ r0: (QL / W).toFixed(2), r1: (W / QL).toFixed(2), r2: (QL / W * 0.8).toFixed(2), r3: (QL * W / 1000).toFixed(2) })));

  areaA.push(...genVariations({
    idPrefix: 'A-carnot-a', area: 'A', subTopic: 'thermodynamics', topic: 'Carnot Efficiency', difficulty: 'average',
    question: 'A heat engine operates between T_H = {v0} K and T_C = {v1} K. What is the maximum Carnot efficiency?',
    options: ['{r0}%', '{r1}%', '{r2}%', '{r3}%'], correctAnswer: 0,
    given: 'Hot reservoir (T_H) = {v0} K\nCold reservoir (T_C) = {v1} K',
    steps: ['Carnot efficiency: η = 1 - T_C/T_H', 'η = 1 - {v1}/{v0}', 'η = 1 - {v4}', 'η = {r0}%'],
    formula: 'η = 1 - T_C / T_H',
    keyConcept: 'Carnot efficiency is the maximum possible efficiency for any heat engine. To maximize: increase T_H or decrease T_C. Real engines have lower efficiency.',
    commonMistakes: ['Using Celsius instead of Kelvin', 'Reversing the ratio', 'Taking T_C/T_H directly without subtracting from 1'],
    weakPoints: ['Carnot cycle', 'Kelvin temperature scale', 'Maximum thermal efficiency']
  }, [[600, 300], [800, 350], [500, 280], [1000, 400], [700, 320], [900, 380], [550, 290], [750, 340], [650, 310], [850, 360],
    [950, 390], [580, 295], [780, 345], [680, 315], [880, 365], [520, 275], [820, 355], [720, 330], [620, 305], [980, 398]],
  ([TH, TC]) => {
    const eta = (1 - TC / TH) * 100;
    return { r0: eta.toFixed(1), r1: (eta * 1.2).toFixed(1), r2: (eta * 0.8).toFixed(1), r3: (eta / 2).toFixed(1), v4: (TC / TH).toFixed(3) };
  }));

  // ============ AREA A: POWER-TORQUE ============
  areaA.push(...genVariations({
    idPrefix: 'A-torq-e', area: 'A', subTopic: 'engine', topic: 'Power-Torque Relationship', difficulty: 'easy',
    question: 'An engine produces {v0} kW at {v1} RPM. What is the torque developed?',
    options: ['{r0} N·m', '{r1} N·m', '{r2} N·m', '{r3} N·m'], correctAnswer: 0,
    given: 'Power (P) = {v0} kW\nSpeed (N) = {v1} RPM',
    steps: ['T = 9549 × P / N', 'T = 9549 × {v0} / {v1}', 'T = {r0} N·m'],
    formula: 'T = 9549 × P / N',
    keyConcept: 'The constant 9549 converts kW/RPM to N·m. Torque is inversely proportional to RPM at constant power.',
    commonMistakes: ['Using wrong constant (5252 is for HP/RPM)', 'Reversing power and speed', 'Forgetting to multiply by 9549'],
    weakPoints: ['Power-torque relationship', '9549 constant']
  }, [[50, 2000], [75, 1800], [100, 2200], [60, 2400], [120, 1600], [85, 1900], [45, 2500], [150, 1500], [95, 2100], [130, 1700],
    [70, 2300], [110, 2000], [55, 2600], [140, 1800], [30, 2800], [160, 1400], [90, 2200], [105, 1900], [65, 2500], [80, 2400]],
  ([P, N]) => ({ r0: (9549 * P / N).toFixed(1), r1: (5252 * P / N).toFixed(1), r2: (9549 * N / P).toFixed(1), r3: (9549 * P / N * 1.5).toFixed(1) })));

  // ============ AREA A: ENGINEERING ECONOMY ============
  areaA.push(...genVariations({
    idPrefix: 'A-simple-e', area: 'A', subTopic: 'eng-econ', topic: 'Simple Interest', difficulty: 'easy',
    question: 'A farmer borrows ₱{v0} at {v1}% simple interest for {v2} years. What is the total amount to repay?',
    options: ['₱{r0}', '₱{r1}', '₱{r2}', '₱{r3}'], correctAnswer: 0,
    given: 'Principal (P) = ₱{v0}\nRate (r) = {v1}% = {v5}\nTime (t) = {v2} years',
    steps: ['A = P(1 + rt)', 'A = {v0} × (1 + {v5} × {v2})', 'A = {v0} × (1 + {v6})', 'A = ₱{r0}'],
    formula: 'A = P(1 + rt)',
    keyConcept: 'Simple interest is linear: interest = P × r × t. Total = principal + interest. Does not compound.',
    commonMistakes: ['Using compound interest formula', 'Forgetting to convert % to decimal', 'Adding principal twice'],
    weakPoints: ['Simple interest', 'Percentage conversion']
  }, [[10000, 8, 3], [50000, 5, 5], [25000, 10, 2], [15000, 12, 4], [75000, 6, 6],
    [30000, 7, 3], [80000, 4, 5], [20000, 15, 1], [45000, 9, 4], [60000, 3, 8],
    [12000, 11, 2], [55000, 6.5, 3], [18000, 14, 1.5], [65000, 5.5, 7], [22000, 8.5, 5],
    [35000, 7.5, 4], [90000, 3.5, 6], [28000, 9.5, 2.5], [42000, 11.5, 3], [70000, 4.5, 10]],
  ([P, r, t]) => {
    const rd = r / 100; const A = P * (1 + rd * t);
    return { r0: Math.round(A).toLocaleString(), r1: Math.round(P * (1 + rd * t * 0.7)).toLocaleString(), r2: Math.round(P * (1 + rd * t * 1.3)).toLocaleString(), r3: Math.round(P * (1 + rd / 12 * t * 12)).toLocaleString(), v5: rd.toFixed(3), v6: (rd * t).toFixed(3) };
  }));

  areaA.push(...genVariations({
    idPrefix: 'A-pw-a', area: 'A', subTopic: 'eng-econ', topic: 'Present Worth', difficulty: 'average',
    question: 'What is the present worth of ₱{v0} to be received in {v1} years at a discount rate of {v2}% compounded annually?',
    options: ['₱{r0}', '₱{r1}', '₱{r2}', '₱{r3}'], correctAnswer: 0,
    given: 'Future value (F) = ₱{v0}\nn = {v1} years\ni = {v2}% = {v3}',
    steps: ['PW = F / (1 + i)ⁿ', 'PW = {v0} / (1 + {v3})^{v1}', 'PW = {v0} / {v4}', 'PW = ₱{r0}'],
    formula: 'PW = F / (1 + i)ⁿ',
    keyConcept: 'Present worth discounts future cash flows. Higher discount rate or longer period → lower present value.',
    commonMistakes: ['Multiplying instead of dividing', 'Using simple discount', 'Forgetting to convert % to decimal'],
    weakPoints: ['Present worth', 'Discounting', 'Exponential calculation']
  }, [[100000, 5, 10], [50000, 3, 8], [200000, 10, 12], [75000, 7, 6], [150000, 4, 15],
    [30000, 2, 9], [250000, 8, 11], [40000, 6, 7], [120000, 9, 13], [80000, 1, 5],
    [60000, 4, 14], [180000, 6, 10], [35000, 3, 18], [90000, 5, 8], [140000, 7, 9],
    [45000, 2, 12], [220000, 9, 7], [55000, 8, 15], [110000, 10, 6], [70000, 3, 20]],
  ([F, n, i]) => {
    const id = i / 100; const pw = F / (1 + id) ** n;
    return { r0: Math.round(pw).toLocaleString(), r1: Math.round(F / (1 + id) ** (n * 0.8)).toLocaleString(), r2: Math.round(F / (1 + id * 1.2) ** n).toLocaleString(), r3: Math.round(F * (1 + id) ** n).toLocaleString(), v3: id.toFixed(2), v4: ((1 + id) ** n).toFixed(3) };
  }));

  areaA.push(...genVariations({
    idPrefix: 'A-depr-e', area: 'A', subTopic: 'eng-econ', topic: 'Straight-line Depreciation', difficulty: 'easy',
    question: 'A tractor costs ₱{v0}, has salvage value of ₱{v1}, and a useful life of {v2} years. What is the annual depreciation?',
    options: ['₱{r0}', '₱{r1}', '₱{r2}', '₱{r3}'], correctAnswer: 0,
    given: 'Initial cost (C) = ₱{v0}\nSalvage value (S) = ₱{v1}\nUseful life (n) = {v2} years',
    steps: ['D = (C - S) / n', 'D = ({v0} - {v1}) / {v2}', 'D = {v3} / {v2}', 'D = ₱{r0}'],
    formula: 'D = (C - S) / n',
    keyConcept: 'Straight-line depreciation allocates equal annual depreciation over asset life. Book value = Cost - Accumulated Depreciation.',
    commonMistakes: ['Forgetting to subtract salvage value', 'Dividing cost by life directly', 'Using salvage value as depreciation'],
    weakPoints: ['SL depreciation', 'Asset valuation']
  }, [[1200000, 200000, 8], [800000, 100000, 10], [2500000, 500000, 12], [500000, 50000, 5], [1500000, 300000, 10],
    [950000, 150000, 7], [3000000, 600000, 15], [600000, 75000, 6], [1800000, 400000, 9], [750000, 80000, 8],
    [2200000, 350000, 11], [450000, 50000, 4], [1400000, 250000, 10], [3200000, 700000, 14], [700000, 100000, 7],
    [1600000, 200000, 12], [550000, 60000, 5], [2800000, 400000, 13], [900000, 180000, 6], [2000000, 500000, 10]],
  ([C, S, n]) => ({ r0: Math.round((C - S) / n).toLocaleString(), r1: Math.round(C / n).toLocaleString(), r2: Math.round((C - S) / n * 1.2).toLocaleString(), r3: Math.round((C - S) / n * 0.8).toLocaleString(), v3: (C - S).toLocaleString() })));

  areaA.push(...genVariations({
    idPrefix: 'A-bep-a', area: 'A', subTopic: 'eng-econ', topic: 'Break-even Point', difficulty: 'average',
    question: 'Fixed costs are ₱{v0}, selling price per unit is ₱{v1}, and variable cost per unit is ₱{v2}. What is the break-even quantity?',
    options: ['{r0} units', '{r1} units', '{r2} units', '{r3} units'], correctAnswer: 0,
    given: 'FC = ₱{v0}\nPrice (P) = ₱{v1}\nVC = ₱{v2}\nContribution margin = ₱{v4}',
    steps: ['BEP = FC / (P - VC)', 'BEP = {v0} / ({v1} - {v2})', 'BEP = {v0} / {v4}', 'BEP = {r0} units'],
    formula: 'BEP = FC / (P - VC)',
    keyConcept: 'Break-even is where total revenue = total cost. Contribution margin = P - VC must cover FC. Lower FC or higher margin → lower BEP.',
    commonMistakes: ['Excluding variable costs entirely', 'Dividing FC by price only', 'Forgetting BEP is in units'],
    weakPoints: ['Break-even analysis', 'Contribution margin']
  }, [[500000, 500, 300], [1000000, 800, 450], [300000, 350, 200], [750000, 600, 400], [2000000, 1200, 700],
    [400000, 450, 250], [1500000, 1000, 600], [250000, 300, 180], [800000, 550, 320], [1200000, 750, 500],
    [350000, 400, 220], [600000, 520, 340], [1800000, 1100, 650], [280000, 320, 190], [900000, 650, 380],
    [450000, 480, 280], [1300000, 900, 550], [320000, 360, 210], [1600000, 1050, 620], [700000, 580, 360]],
  ([FC, P, VC]) => {
    const cm = P - VC; const bep = FC / cm;
    return { r0: Math.ceil(bep).toLocaleString(), r1: Math.ceil(FC / P).toLocaleString(), r2: Math.ceil(FC / (P - VC * 0.8)).toLocaleString(), r3: Math.ceil(FC / (P * 1.1 - VC)).toLocaleString(), v4: cm.toLocaleString() };
  }));

  areaA.push(...genVariations({
    idPrefix: 'A-caprec-h', area: 'A', subTopic: 'eng-econ', topic: 'Capital Recovery', difficulty: 'hard',
    question: 'An investment of ₱{v0} at {v1}% interest over {v2} years. What is the equivalent annual worth (capital recovery factor)?',
    options: ['₱{r0}/yr', '₱{r1}/yr', '₱{r2}/yr', '₱{r3}/yr'], correctAnswer: 0,
    given: 'Present investment (P) = ₱{v0}\ni = {v1}% = {v3}\nn = {v2} years',
    steps: ['AW = P × i(1+i)ⁿ / ((1+i)ⁿ - 1)', 'CRF = {v3} × (1+{v3})^{v2} / ((1+{v3})^{v2} - 1)', 'CRF = {v4}', 'AW = {v0} × {v4} = ₱{r0}/yr'],
    formula: 'AW = P × i(1+i)ⁿ / ((1+i)ⁿ - 1)',
    keyConcept: 'Capital Recovery Factor (CRF) converts a lump sum to equal annual payments. Used for comparing investments with different lives.',
    commonMistakes: ['Using (1+i)ⁿ - 1 in numerator', 'Forgetting to multiply by P', 'Using i without converting to decimal'],
    weakPoints: ['Capital recovery', 'Time value of money', 'CRF formula']
  }, [[1000000, 8, 5], [500000, 10, 7], [2000000, 6, 10], [750000, 12, 4], [1500000, 9, 8],
    [300000, 15, 3], [2500000, 5, 12], [400000, 11, 6], [1200000, 7, 9], [800000, 13, 5],
    [600000, 14, 4], [1800000, 8, 7], [350000, 16, 3], [900000, 10, 6], [1400000, 6.5, 11],
    [450000, 12.5, 5], [2200000, 5.5, 15], [550000, 9.5, 8], [1100000, 11.5, 6], [700000, 7.5, 10]],
  ([P, i, n]) => {
    const id = i / 100; const CRF = id * (1 + id) ** n / ((1 + id) ** n - 1); const AW = P * CRF;
    return { r0: Math.round(AW).toLocaleString(), r1: Math.round(P / n).toLocaleString(), r2: Math.round(AW * 0.8).toLocaleString(), r3: Math.round(AW * 1.2).toLocaleString(), v3: id.toFixed(2), v4: CRF.toFixed(4) };
  }));

  // ============ AREA A: PAES STANDARDS ============
  areaA.push(...genVariations({
    idPrefix: 'A-thresh-e', area: 'A', subTopic: 'paes', topic: 'Threshing Efficiency', difficulty: 'easy',
    question: 'A mechanical thresher processes {v0} kg of paddy. After threshing, {v1} kg of clean grain is recovered. What is the threshing efficiency?',
    options: ['{r0}%', '{r1}%', '{r2}%', '{r3}%'], correctAnswer: 0,
    given: 'Total grain input = {v0} kg\nThreshed grain = {v1} kg',
    steps: ['η = (M_threshed / M_total) × 100%', 'η = ({v1} / {v0}) × 100%', 'η = {r0}%'],
    formula: 'η_thresh = (M_t / M_total) × 100%',
    keyConcept: 'PAES requires ≥ 98% threshing efficiency. Efficiency drops with incorrect cylinder speed, concave clearance, or feed rate.',
    commonMistakes: ['Dividing total by threshed', 'Forgetting to multiply by 100', 'Using loss instead of recovery'],
    weakPoints: ['PAES threshing standard', 'Efficiency calculation']
  }, [[100, 99], [200, 197], [150, 148], [80, 79], [250, 248], [120, 118], [300, 297], [90, 89], [180, 176], [220, 218],
    [75, 73], [160, 158], [280, 276], [110, 109], [240, 237], [85, 83], [170, 168], [130, 128], [260, 257], [95, 93]],
  ([total, threshed]) => ({ r0: (threshed / total * 100).toFixed(1), r1: (threshed / total * 120).toFixed(1), r2: (threshed / total * 80).toFixed(1), r3: (total / threshed * 100).toFixed(1) })));

  areaA.push(...genVariations({
    idPrefix: 'A-dryeff-e', area: 'A', subTopic: 'paes', topic: 'Drying Efficiency', difficulty: 'easy',
    question: 'A mechanical dryer removes {v0} kg of water from the grain. The theoretical water removal based on air conditions is {v1} kg. What is the drying efficiency?',
    options: ['{r0}%', '{r1}%', '{r2}%', '{r3}%'], correctAnswer: 0,
    given: 'Actual water removed = {v0} kg\nTheoretical water removal = {v1} kg',
    steps: ['η_dry = (W_actual / W_theoretical) × 100%', 'η_dry = ({v0} / {v1}) × 100%', 'η_dry = {r0}%'],
    formula: 'η_dry = (W_evap / W_theo) × 100%',
    keyConcept: 'Drying efficiency compares actual vs theoretical drying capacity. Efficiency depends on air temperature, flow rate, and humidity.',
    commonMistakes: ['Using weight of grain instead of water', 'Reversing numerator and denominator'],
    weakPoints: ['PAES drying standard', 'Drying efficiency']
  }, [[80, 100], [120, 150], [45, 60], [160, 200], [90, 120], [55, 70], [140, 175], [70, 90], [190, 220], [105, 140],
    [35, 50], [150, 180], [85, 110], [200, 250], [60, 80], [130, 160], [95, 125], [170, 210], [40, 55], [180, 225]],
  ([actual, theo]) => ({ r0: (actual / theo * 100).toFixed(1), r1: (actual / theo * 115).toFixed(1), r2: (actual / theo * 85).toFixed(1), r3: (theo / actual * 100).toFixed(1) })));

  areaA.push(...genVariations({
    idPrefix: 'A-damage-e', area: 'A', subTopic: 'paes', topic: 'Grain Damage', difficulty: 'easy',
    question: 'After mechanical threshing of {v0} kg of paddy, {v1} kg is found to be damaged. What is the grain damage percentage?',
    options: ['{r0}%', '{r1}%', '{r2}%', '{r3}%'], correctAnswer: 0,
    given: 'Total grain mass = {v0} kg\nDamaged grain mass = {v1} kg',
    steps: ['Damage% = (M_damaged / M_total) × 100%', 'Damage% = ({v1} / {v0}) × 100%', 'Damage% = {r0}%'],
    formula: 'Damage% = (M_damaged / M_total) × 100%',
    keyConcept: 'PAES limits: paddy ≤ 1%, corn ≤ 2%. High damage can be caused by excessive cylinder speed, tight concave clearance, or high moisture.',
    commonMistakes: ['Reporting as ratio without ×100%', 'Confusing damage with loss', 'Reversing the fraction'],
    weakPoints: ['PAES grain damage standard', 'Quality evaluation']
  }, [[100, 0.8], [200, 1.6], [150, 2.2], [80, 0.5], [250, 3.0], [120, 1.1], [300, 2.4], [90, 0.9], [180, 2.5], [220, 1.8],
    [75, 0.4], [160, 2.0], [280, 3.5], [110, 0.6], [240, 1.2], [85, 0.7], [170, 2.8], [130, 1.5], [260, 2.0], [95, 1.3]],
  ([total, damaged]) => ({ r0: (damaged / total * 100).toFixed(1), r1: (damaged / total * 200).toFixed(1), r2: ((total - damaged) / total * 100).toFixed(1), r3: (damaged / total * 50).toFixed(1) })));

  areaA.push(...genVariations({
    idPrefix: 'A-germ-e', area: 'A', subTopic: 'paes', topic: 'Germination Rate', difficulty: 'easy',
    question: 'Of {v0} seeds tested for germination, {v1} seeds germinated after {v2} days. What is the germination rate?',
    options: ['{r0}%', '{r1}%', '{r2}%', '{r3}%'], correctAnswer: 0,
    given: 'Germinated seeds = {v1}\nTotal seeds tested = {v0}',
    steps: ['Germ% = (N_germinated / N_total) × 100%', 'Germ% = ({v1} / {v0}) × 100%', 'Germ% = {r0}%'],
    formula: 'Germ% = (N_germ / N_total) × 100%',
    keyConcept: 'Germination rate measures seed viability. PAES recommends ≥ 85% for certified seeds. Low germination means poor seed quality or improper storage.',
    commonMistakes: ['Reporting germinated count directly as percentage', 'Forgetting the ×100% factor', 'Testing too few seeds'],
    weakPoints: ['Seed testing', 'Germination percentage']
  }, [[100, 92, 7], [200, 178, 5], [150, 138, 7], [80, 74, 14], [250, 235, 7], [120, 108, 5], [300, 282, 7], [90, 81, 14], [180, 162, 5], [220, 206, 7],
    [75, 68, 14], [160, 148, 7], [280, 266, 5], [110, 99, 14], [240, 228, 7], [85, 77, 5], [170, 156, 7], [130, 117, 14], [260, 247, 5], [95, 85, 7]],
  ([total, germ]) => ({ r0: (germ / total * 100).toFixed(1), r1: (germ / total * 110).toFixed(1), r2: (germ / total * 90).toFixed(1), r3: ((total - germ) / total * 100).toFixed(1) })));

  areaA.push(...genVariations({
    idPrefix: 'A-trans-e', area: 'A', subTopic: 'paes', topic: 'Transplanting Efficiency', difficulty: 'easy',
    question: 'A mechanical transplanter plants {v0} hills. After 2 weeks, {v1} hills have established plants. What is the transplanting efficiency?',
    options: ['{r0}%', '{r1}%', '{r2}%', '{r3}%'], correctAnswer: 0,
    given: 'Total hills planted = {v0}\nHills with established plants = {v1}',
    steps: ['η_trans = (H_plants / H_total) × 100%', 'η_trans = ({v1} / {v0}) × 100%', 'η_trans = {r0}%'],
    formula: 'η_trans = (H_plants / H_total) × 100%',
    keyConcept: 'Transplanting efficiency measures seedling survival. Factors: seedling quality, planting depth, soil condition, and water management.',
    commonMistakes: ['Counting missing hills as planted', 'Measuring immediately after planting', 'Forgetting ×100%'],
    weakPoints: ['PAES transplanter standard', 'Survival rate']
  }, [[1000, 960], [800, 752], [1200, 1164], [500, 475], [1500, 1455], [600, 570], [2000, 1960], [400, 380], [900, 864], [1100, 1067],
    [700, 665], [1300, 1261], [350, 332], [1600, 1552], [450, 427], [1800, 1746], [750, 720], [1400, 1358], [850, 816], [1000, 975]],
  ([total, plants]) => ({ r0: (plants / total * 100).toFixed(1), r1: ((total - plants) / total * 100).toFixed(1), r2: (plants / total * 110).toFixed(1), r3: (plants / total * 80).toFixed(1) })));

  // ============ AREA B: DRIP IRRIGATION ============
  areaB.push(...genVariations({
    idPrefix: 'B-drip-a', area: 'B', subTopic: 'irrigation', topic: 'Drip Irrigation Time', difficulty: 'average',
    question: 'Tomato crop has ET = {v0} mm/day, plant spacing = {v1} m, lateral spacing = {v2} m, emitter flow = {v3} L/h. What is the daily irrigation time?',
    options: ['{r0} h/day', '{r1} h/day', '{r2} h/day', '{r3} h/day'], correctAnswer: 0,
    given: 'ET = {v0} mm/day\nS_p = {v1} m\nS_l = {v2} m\nq_e = {v3} L/h',
    steps: ['t = ET × S_p × S_l / q_e', 't = {v0} × {v1} × {v2} / {v3}', 't = {r0} h/day'],
    formula: 't = ET × S_p × S_l / q_e',
    keyConcept: 'Drip irrigation time must replace daily ET. The area per plant (Sp × Sl) times ET gives water needed; divided by emitter flow gives time.',
    commonMistakes: ['Dividing by spacing instead of multiplying', 'Forgetting unit conversions', 'Using ET in m instead of mm'],
    weakPoints: ['Drip irrigation scheduling', 'Emitter flow rates']
  }, [[5, 0.5, 1.0, 2], [6, 0.4, 0.8, 1.6], [4, 0.6, 1.2, 2.4], [7, 0.3, 0.6, 1.2], [5.5, 0.5, 1.0, 2.2],
    [4.5, 0.45, 0.9, 1.8], [6.5, 0.35, 0.7, 1.4], [3.5, 0.55, 1.1, 2.2], [5.8, 0.4, 0.8, 1.6], [4.2, 0.6, 1.2, 2.5],
    [6.2, 0.3, 0.6, 1.3], [4.8, 0.5, 1.0, 2.4], [5.2, 0.45, 0.9, 2.0], [3.8, 0.55, 1.1, 2.5], [6.8, 0.35, 0.7, 1.2],
    [4, 0.5, 1.0, 2.5], [5.5, 0.4, 0.8, 1.5], [7.2, 0.3, 0.6, 1.1], [4.6, 0.55, 1.1, 2.2], [6, 0.35, 0.7, 1.5]],
  ([ET, Sp, Sl, qe]) => ({ r0: (ET * Sp * Sl / qe).toFixed(1), r1: (ET * Sp * Sl / qe * 1.2).toFixed(1), r2: (ET * Sp * Sl / qe * 0.8).toFixed(1), r3: (ET / qe).toFixed(1) })));

  // ============ AREA B: GUMBEL FLOOD FREQUENCY ============
  areaB.push(...genVariations({
    idPrefix: 'B-gumbel-h', area: 'B', subTopic: 'hydrology', topic: 'Gumbel Flood Frequency', difficulty: 'hard',
    question: 'Mean annual flood is {v0} m³/s, standard deviation is {v1} m³/s, and the Gumbel frequency factor for T = {v2} years is K = {v3}. What is the T-year flood discharge?',
    options: ['{r0} m³/s', '{r1} m³/s', '{r2} m³/s', '{r3} m³/s'], correctAnswer: 0,
    given: 'x̄ = {v0} m³/s\nσ = {v1} m³/s\nK = {v3} for T = {v2} years',
    steps: ['Q_T = x̄ + Kσ', 'Q_T = {v0} + ({v3} × {v1})', 'Q_T = {v0} + {v4}', 'Q_T = {r0} m³/s'],
    formula: 'Q_T = x̄ + Kσ',
    keyConcept: 'Gumbel distribution models extreme events. K increases with return period. For T=50yr, K≈2.05; T=100yr, K≈2.33; T=200yr, K≈2.57.',
    commonMistakes: ['Using mean minus Kσ', 'Using wrong K value for return period', 'Forgetting to multiply K × σ'],
    weakPoints: ['Gumbel distribution', 'Flood frequency analysis', 'Return period estimation']
  }, [[500, 80, 50, 2.05], [350, 60, 100, 2.33], [800, 120, 25, 1.81], [250, 45, 200, 2.57], [600, 90, 50, 2.05],
    [420, 70, 100, 2.33], [1000, 150, 10, 1.28], [300, 50, 50, 2.05], [750, 110, 100, 2.33], [450, 75, 25, 1.81],
    [550, 85, 200, 2.57], [380, 65, 50, 2.05], [900, 140, 100, 2.33], [280, 48, 25, 1.81], [650, 95, 200, 2.57],
    [480, 78, 50, 2.05], [850, 130, 100, 2.33], [320, 55, 10, 1.28], [700, 105, 50, 2.05], [520, 82, 25, 1.81]],
  ([mean, std, T, K]) => ({ r0: (mean + K * std).toFixed(1), r1: (mean).toFixed(1), r2: (mean + std).toFixed(1), r3: (K * std).toFixed(1), v4: (K * std).toFixed(1) })));

  // ============ AREA B: SOIL MECHANICS ============
  areaB.push(...genVariations({
    idPrefix: 'B-moist-e', area: 'B', subTopic: 'soil-mechanics', topic: 'Gravimetric Moisture Content', difficulty: 'easy',
    question: 'A soil sample has wet mass of {v0} g and oven-dry mass of {v1} g. What is the gravimetric moisture content?',
    options: ['{r0}%', '{r1}%', '{r2}%', '{r3}%'], correctAnswer: 0,
    given: 'Wet mass (M_w) = {v0} g\nDry mass (M_d) = {v1} g',
    steps: ['w = (M_w - M_d) / M_d × 100%', 'w = ({v0} - {v1}) / {v1} × 100%', 'w = {r0}%'],
    formula: 'w = (M_w - M_d) / M_d × 100%',
    keyConcept: 'Gravimetric moisture content is the ratio of water mass to dry soil mass. Typical values: sandy soil 5-15%, clay 20-40%, peat 50-200%.',
    commonMistakes: ['Using wet mass as denominator', 'Forgetting ×100%', 'Subtracting in wrong order'],
    weakPoints: ['Soil moisture determination', 'Gravimetric method']
  }, [[150, 120], [200, 160], [180, 144], [250, 200], [120, 96], [300, 240], [160, 128], [220, 176], [140, 112], [260, 208],
    [175, 140], [190, 152], [230, 184], [165, 132], [280, 224], [145, 116], [210, 168], [185, 148], [240, 192], [155, 124]],
  ([wet, dry]) => ({ r0: ((wet - dry) / dry * 100).toFixed(1), r1: ((wet - dry) / wet * 100).toFixed(1), r2: (dry / wet * 100).toFixed(1), r3: ((wet - dry) / dry * 80).toFixed(1) })));

  areaB.push(...genVariations({
    idPrefix: 'B-void-h', area: 'B', subTopic: 'soil-mechanics', topic: 'Void Ratio & Saturation', difficulty: 'hard',
    question: 'Soil has G_s = {v0}, dry unit weight γ_d = {v1} kN/m³, moisture content w = {v2}%. γ_w = 9.81 kN/m³. Find the degree of saturation S.',
    options: ['{r0}%', '{r1}%', '{r2}%', '{r3}%'], correctAnswer: 0,
    given: 'G_s = {v0}\nγ_d = {v1} kN/m³\nw = {v2}% = {v5}\nγ_w = 9.81 kN/m³',
    steps: ['e = G_sγ_w/γ_d - 1', 'e = {v0}×9.81/{v1} - 1', 'e = {v6}', 'S = wG_s/e', 'S = {v5}×{v0}/{v6}', 'S = {r0}%'],
    formula: 'e = G_sγ_w/γ_d - 1, S = wG_s/e',
    keyConcept: 'Void ratio relates to dry density. Saturation combines moisture content and void ratio. S=100% means all voids filled with water (saturated).',
    commonMistakes: ['Forgetting to convert w to decimal', 'Reversing the void ratio formula', 'Using wet instead of dry unit weight'],
    weakPoints: ['Phase relationships', 'Void ratio calculation', 'Saturation computation']
  }, [[2.65, 16, 15], [2.70, 17, 12], [2.60, 15, 18], [2.75, 18, 10], [2.68, 14, 20], [2.72, 16.5, 14], [2.63, 15.5, 16], [2.78, 19, 8], [2.66, 14.5, 22], [2.71, 17.5, 11],
    [2.64, 15.8, 17], [2.69, 16.2, 13], [2.73, 18.5, 9], [2.62, 14.8, 19], [2.67, 15.2, 21], [2.74, 17.2, 12.5], [2.61, 16.8, 15.5], [2.76, 18.2, 10.5], [2.65, 14.2, 23], [2.70, 19.5, 7.5]],
  ([Gs, gd, w]) => {
    const wd = w / 100; const e = Gs * 9.81 / gd - 1; const S = wd * Gs / e * 100;
    return { r0: (S > 100 ? 100 : S).toFixed(1), r1: (e).toFixed(3), r2: (wd * Gs / (e * 0.8) * 100 > 100 ? 100 : (wd * Gs / (e * 0.8) * 100)).toFixed(1), r3: (wd * Gs / (e * 1.2) * 100).toFixed(1), v5: wd.toFixed(3), v6: e.toFixed(3) };
  }));

  // ============ AREA C: REFRIGERATION ============
  areaC.push(...genVariations({
    idPrefix: 'C-ton-e', area: 'C', subTopic: 'refrigeration', topic: 'Refrigeration Ton Conversion', difficulty: 'easy',
    question: 'A cold storage has a cooling load of {v0} kW. What is the required capacity in tons of refrigeration? (1 TR = 3.517 kW)',
    options: ['{r0} TR', '{r1} TR', '{r2} TR', '{r3} TR'], correctAnswer: 0,
    given: 'Cooling load = {v0} kW\n1 TR = 3.517 kW',
    steps: ['TR = Q_cooling / 3.517', 'TR = {v0} / 3.517', 'TR = {r0} TR'],
    formula: 'TR = Q_cooling / 3.517',
    keyConcept: '1 ton of refrigeration = 3.517 kW = 12,000 BTU/h = heat to melt 1 short ton of ice in 24 hours.',
    commonMistakes: ['Multiplying instead of dividing', 'Using 4.0 as conversion factor', 'Wrong kW to TR conversion'],
    weakPoints: ['Refrigeration units', 'TR conversion factor']
  }, [[10], [15], [3.5], [20], [25], [5], [30], [7], [8], [12], [18], [2], [22], [6], [16], [4], [28], [9], [14], [11]],
  ([v]) => ({ r0: (v / 3.517).toFixed(2), r1: (v / 4.0).toFixed(2), r2: (v * 3.517).toFixed(2), r3: (v / 3.0).toFixed(2) })));

  // ============ AREA C: FOOD PROCESSING ============
  areaC.push(...genVariations({
    idPrefix: 'C-dval-a', area: 'C', subTopic: 'food-processing', topic: 'D-value', difficulty: 'average',
    question: 'The D-value at 121°C for C. botulinum is {v0} minutes. How long to reduce the population from 10^{v1} to 10^{v2} spores?',
    options: ['{r0} min', '{r1} min', '{r2} min', '{r3} min'], correctAnswer: 0,
    given: 'D₁₂₁ = {v0} min\nN₀ = 10^{v1}\nN = 10^{v2}',
    steps: ['t = D × log(N₀/N)', 't = {v0} × log(10^{v1}/10^{v2})', 't = {v0} × {v3}', 't = {r0} min'],
    formula: 't = D × log(N₀/N)',
    keyConcept: 'D-value is time for 90% reduction (1 log cycle). Total process time = D × number of log reductions required.',
    commonMistakes: ['Using ln instead of log', 'Forgetting log is base 10', 'Using N/N₀ instead of N₀/N'],
    weakPoints: ['Thermal death time', 'D-value concept', 'Log reduction']
  }, [[1.5, 4, 1], [2.0, 5, 2], [1.2, 6, 3], [2.5, 4, 0], [0.8, 3, 0], [1.8, 5, 1], [1.0, 4, 2], [3.0, 6, 2], [2.2, 5, 3], [1.6, 4, 1],
    [1.4, 3, -1], [2.8, 6, 1], [0.9, 5, 2], [1.7, 4, 0], [2.4, 5, 1], [1.1, 6, 4], [3.2, 7, 3], [1.3, 4, -1], [2.6, 5, 0], [1.9, 6, 2]],
  ([D, n0, n]) => {
    const logs = n0 - n; return { r0: (D * logs).toFixed(1), r1: (D * logs * 0.8).toFixed(1), r2: (D * logs * 1.2).toFixed(1), r3: (D / logs).toFixed(1), v3: logs.toString() };
  }));

  areaC.push(...genVariations({
    idPrefix: 'C-12d-a', area: 'C', subTopic: 'food-processing', topic: '12D Concept', difficulty: 'average',
    question: 'A canning process uses D₁₂₁ = {v0} min. Using the 12D concept for C. botulinum, what is the required process time at 121°C?',
    options: ['{r0} min', '{r1} min', '{r2} min', '{r3} min'], correctAnswer: 0,
    given: 'D₁₂₁ = {v0} min\nRequired log reduction = 12 (12D concept)',
    steps: ['F = D × (log N₀ - log N)', 'For 12D: F = D × 12', 'F = {v0} × 12 = {r0} min'],
    formula: 'F = D × (log N₀ - log N)',
    keyConcept: '12D concept means 12 log reductions of C. botulinum (from 10¹² to 1 spore). This ensures commercial sterility. Also called "botulinum cook."',
    commonMistakes: ['Using 12 as D-value', 'Confusing with D-value', 'Forgetting this is at reference temp (121°C)'],
    weakPoints: ['Commercial sterility', '12D concept', 'Botulinum cook']
  }, [[1.5], [2.0], [1.2], [2.5], [0.8], [1.8], [1.0], [3.0], [2.2], [1.6],
    [1.4], [2.8], [0.9], [1.7], [2.4], [1.1], [3.2], [1.3], [2.6], [1.9]],
  ([D]) => ({ r0: (D * 12).toFixed(1), r1: (D * 10).toFixed(1), r2: (D * 14).toFixed(1), r3: (D * 6).toFixed(1) })));

  // ============ AREA C: BIOGAS ============
  areaC.push(...genVariations({
    idPrefix: 'C-bioeng-a', area: 'C', subTopic: 'biogas', topic: 'Biogas Energy Content', difficulty: 'average',
    question: 'A biogas plant produces {v0} m³/day of biogas with {v1}% methane. LHV of methane is {v2} MJ/m³. What is the daily energy output?',
    options: ['{r0} MJ/day', '{r1} MJ/day', '{r2} MJ/day', '{r3} MJ/day'], correctAnswer: 0,
    given: 'V_biogas = {v0} m³/day\nCH₄% = {v1}% = {v3}\nLHV = {v2} MJ/m³',
    steps: ['E = V_biogas × CH₄% × LHV', 'E = {v0} × {v3} × {v2}', 'E = {r0} MJ/day'],
    formula: 'E = V_biogas × CH₄% × LHV',
    keyConcept: 'Biogas energy depends on methane content and calorific value. Typical CH₄: 55-65%, LHV: 35.8 MJ/m³.',
    commonMistakes: ['Using total biogas without methane fraction', 'Wrong LHV value', 'Forgetting unit conversion'],
    weakPoints: ['Biogas energy', 'Methane calorific value']
  }, [[50, 60, 35.8], [80, 55, 35.8], [30, 65, 35.8], [100, 58, 35.8], [20, 62, 35.8], [120, 55, 35.8], [40, 60, 35.8], [90, 63, 35.8], [60, 58, 35.8], [70, 65, 35.8],
    [45, 57, 35.8], [110, 59, 35.8], [25, 64, 35.8], [85, 56, 35.8], [55, 61, 35.8], [130, 55, 35.8], [35, 62, 35.8], [75, 60, 35.8], [95, 58, 35.8], [65, 63, 35.8]],
  ([V, ch4pct, LHV]) => ({ r0: (V * (ch4pct / 100) * LHV).toFixed(1), r1: (V * LHV).toFixed(1), r2: (V * (ch4pct / 100) * LHV * 0.8).toFixed(1), r3: (V * (ch4pct / 100) * 40).toFixed(1), v3: (ch4pct / 100).toFixed(2) })));

  areaC.push(...genVariations({
    idPrefix: 'C-biotot-h', area: 'C', subTopic: 'biogas', topic: 'Complete Biogas from Waste', difficulty: 'hard',
    question: '{v0} pigs produce {v1} kg waste/animal/day. Collection rate = {v2}%, MC = {v3}%, VS = {v4}%, yield = {v5} m³/kg VS. Find daily biogas volume.',
    options: ['{r0} m³/day', '{r1} m³/day', '{r2} m³/day', '{r3} m³/day'], correctAnswer: 0,
    given: 'N = {v0} animals\nW = {v1} kg/day/animal\nRate = {v2}% = {v7}\nMC = {v3}% → DM = {v8}\nVS = {v4}% = {v9}\nYield = {v5} m³/kg VS',
    steps: ['V = N × W × rate × (1-MC) × VS × yield', 'V = {v0} × {v1} × {v7} × {v8} × {v9} × {v5}', 'V = {r0} m³/day'],
    formula: 'V = N × W × rate × (1-MC) × VS × yield',
    keyConcept: 'Complete biogas estimation accounts for collection efficiency, moisture content, and volatile solids. Only dry organic matter (VS) produces biogas.',
    commonMistakes: ['Excluding collection rate', 'Using wet weight not dry matter', 'Forgetting to convert % to decimal', 'Skipping VS fraction'],
    weakPoints: ['Biogas estimation', 'Volatile solids calculation', 'Waste-to-energy']
  }, [[100, 3, 80, 75, 85, 0.3], [50, 2.5, 75, 80, 80, 0.35], [200, 4, 70, 70, 82, 0.28], [80, 3.5, 85, 78, 88, 0.32], [150, 2.8, 78, 72, 84, 0.3],
    [60, 3.2, 82, 76, 86, 0.33], [250, 3.8, 72, 68, 80, 0.27], [120, 3, 80, 74, 85, 0.31], [90, 2.6, 76, 82, 82, 0.34], [180, 4.2, 74, 70, 78, 0.29],
    [70, 2.2, 88, 80, 90, 0.36], [220, 3.6, 70, 72, 80, 0.28], [110, 3.4, 78, 76, 84, 0.3], [40, 2, 90, 85, 88, 0.38], [160, 3, 75, 74, 82, 0.32],
    [130, 2.7, 82, 78, 86, 0.33], [50, 4.5, 68, 65, 75, 0.25], [190, 3.2, 80, 72, 84, 0.31], [85, 2.9, 85, 80, 87, 0.35], [140, 3.8, 72, 70, 80, 0.27]],
  ([N, W, rate, MC, VS, yld]) => {
    const rd = rate / 100, dm = 1 - MC / 100, vsd = VS / 100;
    const V = N * W * rd * dm * vsd * yld;
    return { r0: V.toFixed(2), r1: (V * 0.7).toFixed(2), r2: (V * 1.3).toFixed(2), r3: (N * W * rd * dm * yld).toFixed(2), v7: rd.toFixed(2), v8: dm.toFixed(2), v9: vsd.toFixed(2) };
  }));

  // ============ AREA C: STRENGTH OF MATERIALS ============
  areaC.push(...genVariations({
    idPrefix: 'C-bend-a', area: 'C', subTopic: 'strength', topic: 'Bending Stress', difficulty: 'average',
    question: 'A beam has bending moment M = {v0} kN·m, moment of inertia I = {v1} × 10⁻⁶ m⁴, distance from NA c = {v2} mm. What is the bending stress?',
    options: ['{r0} MPa', '{r1} MPa', '{r2} MPa', '{r3} MPa'], correctAnswer: 0,
    given: 'M = {v0} kN·m = {v4} N·m\nI = {v1} × 10⁻⁶ m⁴\nc = {v2} mm = {v3} m',
    steps: ['σ = Mc / I', 'σ = {v4} × {v3} / ({v1}E-6)', 'σ = {r0} MPa'],
    formula: 'σ = Mc / I',
    keyConcept: 'Bending stress is proportional to moment and distance from neutral axis. Maximum stress occurs at the outermost fiber (largest c).',
    commonMistakes: ['Forgetting to convert mm to m', 'Using diameter instead of radius', 'Using I in wrong units'],
    weakPoints: ['Flexure formula', 'Moment of inertia', 'Unit conversion']
  }, [[10, 20, 50], [25, 30, 60], [15, 25, 45], [40, 50, 75], [8, 15, 40], [30, 40, 55], [12, 18, 35], [50, 60, 80], [20, 35, 50], [6, 12, 30],
    [18, 28, 48], [35, 45, 65], [22, 32, 55], [14, 22, 42], [45, 55, 78], [9, 16, 38], [28, 38, 58], [16, 26, 46], [60, 70, 90], [5, 10, 25]],
  ([M_kn, Ie6, c_mm]) => {
    const M = M_kn * 1000, c = c_mm / 1000;
    const sigma = M * c / (Ie6 * 1e-6) / 1e6;
    return { r0: sigma.toFixed(2), r1: (sigma * 0.7).toFixed(2), r2: (sigma * 1.5).toFixed(2), r3: (sigma * 2).toFixed(2), v3: c.toFixed(3), v4: M.toLocaleString() };
  }));

  areaC.push(...genVariations({
    idPrefix: 'C-eccen-h', area: 'C', subTopic: 'strength', topic: 'Eccentric Loading', difficulty: 'hard',
    question: 'Column: P = {v0} kN, A = {v1} × 10³ mm², M = {v2} kN·m, y = {v3} mm, I = {v4} × 10⁶ mm⁴. Find the maximum combined stress.',
    options: ['{r0} MPa', '{r1} MPa', '{r2} MPa', '{r3} MPa'], correctAnswer: 0,
    given: 'P = {v0} kN = {v5} N\nA = {v1}×10³ mm² = {v6} m²\nM = {v2} kN·m = {v7} N·m\ny = {v3} mm = {v8} m\nI = {v4}×10⁶ mm⁴ = {v9} m⁴',
    steps: ['σ = P/A ± My/I', 'σ_axial = {v5}/{v6} = {r1} MPa', 'σ_bending = {v7}×{v8}/{v9} = {r2} MPa', 'σ_max = {r1} + {r2} = {r0} MPa'],
    formula: 'σ = P/A ± My/I',
    keyConcept: 'Eccentric loading combines axial stress (P/A) and bending stress (My/I). The ± sign means one side has additive stress, the other subtractive.',
    commonMistakes: ['Forgetting to convert mm to m', 'Adding both stresses without checking sign', 'Using wrong section modulus'],
    weakPoints: ['Combined stresses', 'Eccentric loading', 'Unit conversions']
  }, [[100, 5, 15, 100, 40], [200, 8, 25, 120, 80], [150, 6, 20, 90, 50], [80, 4, 12, 80, 30], [300, 10, 40, 150, 120],
    [120, 5.5, 18, 95, 45], [250, 9, 30, 130, 90], [180, 7, 22, 110, 60], [90, 4.5, 14, 85, 35], [350, 12, 45, 160, 150],
    [160, 6.5, 19, 105, 55], [220, 8.5, 28, 125, 75], [140, 5.8, 16, 92, 38], [280, 10.5, 35, 140, 100], [110, 4.8, 13, 78, 32],
    [240, 9.5, 32, 135, 85], [170, 7.2, 21, 112, 58], [130, 5.2, 17, 88, 42], [320, 11, 38, 155, 130], [75, 3.8, 10, 75, 28]],
  ([P_kN, A_e3, M_kn, y_mm, I_e6]) => {
    const P = P_kN * 1000, A = A_e3 * 1e-3 * 1e-6, M = M_kn * 1000, y = y_mm / 1000, I = I_e6 * 1e6 * 1e-12;
    const axial = P / A, bend = M * y / I;
    return { r0: ((axial + bend) / 1e6).toFixed(2), r1: (axial / 1e6).toFixed(2), r2: (bend / 1e6).toFixed(2), r3: (Math.abs(axial - bend) / 1e6).toFixed(2), v5: P.toLocaleString(), v6: A.toExponential(1), v7: M.toLocaleString(), v8: y.toFixed(3), v9: I.toExponential(2) };
  }));

  // ============ AREA C: PSYCHROMETRICS ============
  areaC.push(...genVariations({
    idPrefix: 'C-psychro-h', area: 'C', subTopic: 'psychrometrics', topic: 'Saturation Vapor Pressure', difficulty: 'hard',
    question: 'Air temperature is {v0}°C. Using the Magnus formula, what is the saturation vapor pressure?',
    options: ['{r0} kPa', '{r1} kPa', '{r2} kPa', '{r3} kPa'], correctAnswer: 0,
    given: 'Temperature (T) = {v0} °C',
    steps: ['P_vs = 0.6108 × exp(17.27T/(T+237.3))', 'P_vs = 0.6108 × exp(17.27×{v0}/({v0}+237.3))', 'P_vs = 0.6108 × exp({v6})', 'P_vs = {r0} kPa'],
    formula: 'P_vs = 0.6108 × exp(17.27T / (T + 237.3))',
    keyConcept: 'Saturation vapor pressure increases exponentially with temperature. Warmer air can hold significantly more moisture.',
    commonMistakes: ['Using Celsius instead of Kelvin unnecessarily', 'Forgetting π/180 if using other formula versions', 'Misplacing parentheses'],
    weakPoints: ['Psychrometric relations', 'Vapor pressure', 'Magnus formula']
  }, [[25], [30], [35], [20], [40], [15], [10], [45], [5], [50], [22], [28], [32], [18], [38], [12], [42], [8], [48], [27]],
  ([T]) => {
    const pvs = 0.6108 * Math.exp(17.27 * T / (T + 237.3));
    return { r0: pvs.toFixed(3), r1: (pvs * 1.2).toFixed(3), r2: (pvs * 0.8).toFixed(3), r3: (pvs * 0.5).toFixed(3), v6: (17.27 * T / (T + 237.3)).toFixed(4) };
  }));

  areaC.push(...genVariations({
    idPrefix: 'C-enthal-h', area: 'C', subTopic: 'psychrometrics', topic: 'Moist Air Enthalpy', difficulty: 'hard',
    question: 'Moist air at {v0}°C with humidity ratio W = {v1} g/kg (dry air). What is the specific enthalpy?',
    options: ['{r0} kJ/kg da', '{r1} kJ/kg da', '{r2} kJ/kg da', '{r3} kJ/kg da'], correctAnswer: 0,
    given: 'T = {v0} °C\nW = {v1} g/kg = {v3} kg/kg',
    steps: ['h = 1.005T + W(2501 + 1.88T)', 'h = 1.005×{v0} + {v3}×(2501 + 1.88×{v0})', 'h = {r0} kJ/kg da'],
    formula: 'h = 1.005T + W(2501 + 1.88T)',
    keyConcept: 'Moist air enthalpy has two components: sensible heat of dry air (1.005T) and latent + sensible heat of water vapor W(2501 + 1.88T).',
    commonMistakes: ['Forgetting to convert W from g/kg to kg/kg', 'Using 2500 instead of 2501', 'Excluding the 1.88T term'],
    weakPoints: ['Psychrometric enthalpy', 'Moist air properties', 'Humidity ratio conversion']
  }, [[25, 10], [30, 15], [35, 20], [20, 8], [40, 25], [15, 5], [28, 12], [32, 18], [22, 9], [38, 22],
    [26, 11], [34, 19], [18, 6], [36, 21], [24, 10], [29, 14], [31, 16], [21, 7], [37, 23], [27, 13]],
  ([T, W_g]) => {
    const W = W_g / 1000;
    const h = 1.005 * T + W * (2501 + 1.88 * T);
    return { r0: h.toFixed(2), r1: (1.005 * T).toFixed(2), r2: (W * 2501).toFixed(2), r3: (h * 1.1).toFixed(2), v3: W.toFixed(3), v4: (1.005 * T).toFixed(2), v5: (2501 + 1.88 * T).toFixed(1) };
  }));

  // ============ AREA C: STRUCTURAL ANALYSIS ============
  areaC.push(...genVariations({
    idPrefix: 'C-shear-a', area: 'C', subTopic: 'structural-analysis', topic: 'Shear & Moment', difficulty: 'average',
    question: 'A simply supported beam with a {v0} kN concentrated load at midspan has reactions of {v1} kN each. What is the maximum bending moment?',
    options: ['{r0} kN·m (span={v2}m)', '{r1} kN·m', '{r2} kN·m', '{r3} kN·m'], correctAnswer: 0,
    given: 'P = {v0} kN\nL = {v2} m\nR_A = R_B = {v1} kN',
    steps: ['M_max = PL/4 (for midspan load)', 'M_max = {v0} × {v2} / 4', 'M_max = {r0} kN·m'],
    formula: 'M_max = PL/4',
    keyConcept: 'For a point load at midspan, max moment = PL/4. Shear is constant from support to load (V = P/2), moment varies linearly.',
    commonMistakes: ['Using PL/8 (fixed end formula)', 'Forgetting to divide by 4', 'Using PL instead of PL/4'],
    weakPoints: ['Shear-moment diagrams', 'Maximum moment for simple beam']
  }, [[20, 10, 4], [30, 15, 5], [40, 20, 6], [15, 7.5, 3], [50, 25, 8], [25, 12.5, 4.5], [35, 17.5, 5.5], [45, 22.5, 7], [10, 5, 2], [60, 30, 10],
    [18, 9, 3.6], [28, 14, 4.8], [38, 19, 6.2], [12, 6, 2.4], [55, 27.5, 9], [22, 11, 4.2], [32, 16, 5.2], [48, 24, 7.5], [16, 8, 3.2], [42, 21, 6.6]],
  ([P, R, L]) => ({ r0: (P * L / 4).toFixed(1), r1: (P * L / 2).toFixed(1), r2: (P * L / 8).toFixed(1), r3: (P * L).toFixed(1) })));

  areaC.push(...genVariations({
    idPrefix: 'C-fem-a', area: 'C', subTopic: 'structural-analysis', topic: 'Fixed-end Moments', difficulty: 'average',
    question: 'A fixed-end beam has a uniform load w = {v0} kN/m over span L = {v1} m. What is the fixed-end moment?',
    options: ['{r0} kN·m', '{r1} kN·m', '{r2} kN·m', '{r3} kN·m'], correctAnswer: 0,
    given: 'w = {v0} kN/m\nL = {v1} m',
    steps: ['M_F = wL²/12', 'M_F = {v0} × ({v1})² / 12', 'M_F = {r0} kN·m'],
    formula: 'M_F = wL²/12',
    keyConcept: 'Fixed-end moments are larger than simple beam moments because end fixity increases stiffness. For uniform load: FEM = wL²/12 (vs wL²/8 for simple).',
    commonMistakes: ['Using wL²/8 (simple beam formula)', 'Forgetting to square L', 'Dividing by 12 instead of 8 for wrong end condition'],
    weakPoints: ['Fixed-end beams', 'Moment distribution', 'End fixity effects']
  }, [[15, 6], [20, 5], [12, 8], [25, 4], [18, 7], [10, 10], [22, 4.5], [16, 6.5], [30, 3], [14, 9],
    [24, 5.5], [28, 3.5], [8, 12], [35, 4.5], [20, 6], [15, 7.5], [26, 5], [12, 10], [32, 3.8], [18, 5.8]],
  ([w, L]) => ({ r0: (w * L * L / 12).toFixed(1), r1: (w * L * L / 8).toFixed(1), r2: (w * L * L / 24).toFixed(1), r3: (w * L).toFixed(1) })));

  areaC.push(...genVariations({
    idPrefix: 'C-beam-e', area: 'C', subTopic: 'structural-analysis', topic: 'Simply Supported Reaction', difficulty: 'easy',
    question: 'A simply supported beam carries a {v0} kN concentrated load at midspan. What is the reaction at each support?',
    options: ['{r0} kN', '{r1} kN', '{r2} kN', '{r3} kN'], correctAnswer: 0,
    given: 'P = {v0} kN (at midspan)',
    steps: ['R_A = R_B = P/2', 'R_A = R_B = {v0}/2', 'R_A = R_B = {r0} kN'],
    formula: 'R_A = R_B = P/2',
    keyConcept: 'For a symmetric load at midspan, each support carries exactly half the load.',
    commonMistakes: ['Using P/4 (thinking 4 supports)', 'Using P directly as reaction', 'Forgetting the load is at midspan'],
    weakPoints: ['Beam reactions', 'Symmetry in structures', 'Static equilibrium']
  }, [[10], [20], [30], [40], [50], [15], [25], [35], [45], [60], [12], [18], [28], [32], [48], [22], [38], [55], [8], [42]],
  ([P]) => ({ r0: (P / 2).toFixed(1), r1: P.toFixed(1), r2: (P / 4).toFixed(1), r3: (P * 0.75).toFixed(1) })));

  // ============ AREA C: POST-HARVEST ============
  areaC.push(...genVariations({
    idPrefix: 'C-mill-e', area: 'C', subTopic: 'post-harvest', topic: 'Milling Recovery', difficulty: 'easy',
    question: 'A rice mill processes {v0} kg of paddy and produces {v1} kg of milled rice. What is the milling recovery?',
    options: ['{r0}%', '{r1}%', '{r2}%', '{r3}%'], correctAnswer: 0,
    given: 'Paddy input = {v0} kg\nMilled rice output = {v1} kg',
    steps: ['Recovery% = (M_milled / M_paddy) × 100%', 'Recovery% = ({v1} / {v0}) × 100%', 'Recovery% = {r0}%'],
    formula: 'Recovery% = (M_milled / M_paddy) × 100%',
    keyConcept: 'PAES typical milling recovery: 60-68% for well-milled rice. Premium quality = high recovery with low broken grains and good whiteness.',
    commonMistakes: ['Dividing paddy by rice (reversed)', 'Forgetting ×100%', 'Using weight of by-products instead of rice'],
    weakPoints: ['Milling recovery', 'Rice quality assessment', 'PAES rice mill standard']
  }, [[1000, 650], [500, 325], [2000, 1300], [750, 488], [1500, 975], [800, 520], [1200, 780], [600, 390], [1800, 1170], [900, 585],
    [400, 260], [1600, 1040], [700, 455], [1400, 910], [1100, 715], [450, 293], [1700, 1105], [550, 358], [1900, 1235], [350, 228]],
  ([paddy, rice]) => ({ r0: (rice / paddy * 100).toFixed(1), r1: (paddy / rice * 100).toFixed(1), r2: (rice / paddy * 120).toFixed(1), r3: ((paddy - rice) / paddy * 100).toFixed(1) })));
}
