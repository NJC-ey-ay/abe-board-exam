import { writeFileSync } from 'fs';

// ==========================================
// PARAMETERIZED QUESTION GENERATOR
// Generates 1000+ questions following TOS
// ==========================================

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function randInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function randFloat(min, max, dec = 1) { return parseFloat((Math.random() * (max - min) + min).toFixed(dec)); }
function shuffle(a) { const arr = [...a]; for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; } return arr; }
function es(s) { return s ? s.replace(/'/g, "\\'") : ''; }

// ==========================================
// TEMPLATES BY TOS SUBTOPIC
// ==========================================

let idCounter = 1000;

function nextId() {
  return `gen-${idCounter++}`;
}

// Each template: { area, subTopic, topic, difficulty, body, opts, ans, keyConcept, steps?, formula? }
// body is a function that returns the question text
// opts returns [opt0, opt1, opt2, opt3]
// ans returns correct answer value (matches one of opts)

const templates = [];

// ==================== AREA A: POWER, ENERGY & MACHINERY ====================

// --- Fluid Mechanics: Hydrostatic Pressure ---
templates.push(...['easy', 'average', 'hard'].flatMap(diff => {
  const depths_easy = [3, 5, 8, 10, 12, 15, 20, 25];
  const depths_avg = [18, 22, 30, 35, 40, 50, 60, 75];
  const depths_hard = [80, 100, 120, 150, 200];
  const pool = diff === 'easy' ? depths_easy : diff === 'average' ? depths_avg : depths_hard;
  return pool.map(d => ({
    area: 'A', subTopic: 'fluid-mechanics', topic: 'Hydrostatic Pressure', difficulty: diff,
    body: () => diff === 'hard'
      ? `A diver is ${d} m below the water surface. What is the absolute pressure? (atm = 101.3 kPa, ρ = 1000 kg/m³, g = 9.81 m/s²)`
      : `Calculate the hydrostatic pressure at a depth of ${d} m below the surface of water. (ρ = 1000 kg/m³, g = 9.81 m/s²)`,
    opts: () => {
      const correct = (d * 9.81).toFixed(2);
      const absCorrect = (d * 9.81 + 101.3).toFixed(2);
      if (diff === 'hard') {
        const a = parseFloat(absCorrect);
        return shuffle([absCorrect, (a * 0.6).toFixed(2), (a * 1.5).toFixed(2), (a * 0.8).toFixed(2)]);
      }
      const c = parseFloat(correct);
      return shuffle([correct, (c * 0.5).toFixed(2), (c * 2).toFixed(2), (c * 1.5).toFixed(2)]);
    },
    ans: (optsArr) => diff === 'hard' ? optsArr.indexOf((d * 9.81 + 101.3).toFixed(2)) : optsArr.indexOf((d * 9.81).toFixed(2)),
    keyConcept: 'Hydrostatic pressure increases linearly with depth: P = ρgh.',
    steps: () => diff === 'hard'
      ? [`Gauge pressure P = ρgh = 1000 × 9.81 × ${d} = ${(d*9.81).toFixed(2)} kPa`, `Absolute P = P_atm + P_gauge = 101.3 + ${(d*9.81).toFixed(2)} = ${(d*9.81+101.3).toFixed(2)} kPa`]
      : [`P = ρgh = 1000 × 9.81 × ${d}`, `P = ${(d*9.81).toFixed(2)} kPa`],
    formula: 'P = ρgh'
  }));
}));

// --- Fluid Mechanics: Continuity Equation ---
templates.push(...['average', 'hard'].flatMap(diff => {
  const pairs = diff === 'average'
    ? [[20,10],[15,8],[25,12],[30,15],[40,20]]
    : [[30,8],[40,12],[50,15],[60,18],[35,10]];
  return pairs.map(([d1, d2]) => ({
    area: 'A', subTopic: 'fluid-mechanics', topic: 'Continuity Equation', difficulty: diff,
    body: () => `Water flows through a horizontal pipe. At point A, diameter is ${d1} cm, velocity = 3 m/s. What is the velocity at point B where diameter reduces to ${d2} cm?`,
    opts: () => {
      const a1 = Math.PI * (d1/200)**2;
      const a2 = Math.PI * (d2/200)**2;
      const v2 = parseFloat((a1 * 3 / a2).toFixed(1));
      return shuffle([String(v2), (v2*1.5).toFixed(1), (v2*0.5).toFixed(1), (v2*0.75).toFixed(1)]);
    },
    ans: (o) => {
      const a1 = Math.PI * (d1/200)**2;
      const a2 = Math.PI * (d2/200)**2;
      return o.indexOf(String(parseFloat((a1 * 3 / a2).toFixed(1))));
    },
    keyConcept: 'Continuity: A₁v₁ = A₂v₂. Velocity increases as area decreases.',
    steps: () => [`A₁ = π(${d1/200})² = ${(Math.PI*(d1/200)**2).toFixed(6)} m²`, `A₂ = π(${d2/200})² = ${(Math.PI*(d2/200)**2).toFixed(6)} m²`, `v₂ = A₁v₁/A₂ = ${(parseFloat((Math.PI*(d1/200)**2 * 3 / (Math.PI*(d2/200)**2)).toFixed(1)))} m/s`],
    formula: 'A₁v₁ = A₂v₂'
  }));
}));

// --- Fluid Mechanics: Flow Rate ---
templates.push(...['easy', 'average'].flatMap(diff => {
  const data = diff === 'easy'
    ? [[0.3,2],[0.4,1.5],[0.25,3],[0.35,2.5],[0.5,1.8]]
    : [[0.45,1.2],[0.6,1.5],[0.75,2],[0.9,1.8],[1.0,1.5]];
  return data.map(([dia, vel]) => ({
    area: 'A', subTopic: 'fluid-mechanics', topic: 'Flow Rate', difficulty: diff,
    body: () => `A pipe has diameter of ${dia} m and water flows at ${vel} m/s velocity. What is the discharge in m³/s?`,
    opts: () => {
      const a = Math.PI * dia**2 / 4;
      const q = parseFloat((a * vel).toFixed(3));
      return shuffle([String(q), (q*2).toFixed(3), (q*0.5).toFixed(3), (q*0.7).toFixed(3)]);
    },
    ans: (o) => o.indexOf(String(parseFloat((Math.PI * dia**2 / 4 * vel).toFixed(3)))),
    keyConcept: 'Discharge Q = A × v = (πD²/4) × v.',
    steps: () => [`A = π(${dia})²/4 = ${(Math.PI*dia**2/4).toFixed(4)} m²`, `Q = A × v = ${(Math.PI*dia**2/4).toFixed(4)} × ${vel} = ${(Math.PI*dia**2/4*vel).toFixed(3)} m³/s`],
    formula: 'Q = A × v = (πD²/4) × v'
  }));
}));

// --- Fluid Mechanics: Bernoulli ---
templates.push(...['average', 'hard'].flatMap(diff => {
  const data = diff === 'average'
    ? [[200,150,3],[250,180,2],[300,200,4],[180,120,3.5]]
    : [[300,180,4],[350,200,5],[400,250,6],[500,300,7]];
  return data.map(([p1, p2, v1]) => ({
    area: 'A', subTopic: 'fluid-mechanics', topic: 'Bernoulli Equation', difficulty: diff,
    body: () => `Water flows horizontally. At point 1, pressure is ${p1} kPa and velocity is ${v1} m/s. At point 2, pressure is ${p2} kPa. What is the velocity at point 2? (ρ = 1000 kg/m³)`,
    opts: () => {
      const dp = (p1 - p2) * 1000;
      const v2 = parseFloat(Math.sqrt(v1**2 + 2*dp/1000).toFixed(1));
      return shuffle([String(v2), (v2*1.3).toFixed(1), (v2*0.7).toFixed(1), (v2*0.5).toFixed(1)]);
    },
    ans: (o) => o.indexOf(String(parseFloat(Math.sqrt(v1**2 + 2*(p1-p2)).toFixed(1)))),
    keyConcept: 'Bernoulli: P₁ + ½ρv₁² = P₂ + ½ρv₂² (horizontal, no elevation change).',
    steps: () => [`ΔP = ${p1} - ${p2} = ${p1-p2} kPa = ${(p1-p2)*1000} Pa`, `v₂² = v₁² + 2ΔP/ρ = ${v1}² + 2×${(p1-p2)*1000}/1000`, `v₂ = ${parseFloat(Math.sqrt(v1**2 + 2*(p1-p2)).toFixed(1))} m/s`],
    formula: 'P₁ + ½ρv₁² = P₂ + ½ρv₂²'
  }));
}));

// --- Thermodynamics: Heat Transfer ---
templates.push(...['easy', 'average'].flatMap(diff => {
  const data = diff === 'easy'
    ? [[0.8,0.2,10,40],[0.5,0.15,12,50],[1.0,0.25,8,35],[0.6,0.3,15,45]]
    : [[0.9,0.18,20,55],[1.2,0.22,15,60],[0.7,0.12,25,50],[1.5,0.35,12,65]];
  return data.map(([k, L, A, dT]) => ({
    area: 'A', subTopic: 'thermodynamics', topic: 'Heat Transfer', difficulty: diff,
    body: () => `A wall has k = ${k} W/m·K, thickness L = ${L} m, area A = ${A} m², ΔT = ${dT}°C. What is the heat transfer rate?`,
    opts: () => {
      const q = parseFloat((k * A * dT / L).toFixed(0));
      return shuffle([String(q), (q*2).toFixed(0), (q*0.5).toFixed(0), (q*1.5).toFixed(0)]);
    },
    ans: (o) => o.indexOf(String(parseFloat((k * A * dT / L).toFixed(0)))),
    keyConcept: 'Fourier\'s law: Q̇ = kA(ΔT/L). Heat rate ∝ area × ΔT, ∝ 1/thickness.',
    steps: () => [`Q̇ = kAΔT/L = ${k} × ${A} × ${dT} / ${L}`, `Q̇ = ${(k*A*dT/L).toFixed(0)} W`],
    formula: 'Q̇ = kA(ΔT/L)'
  }));
}));

// --- Thermodynamics: Thermal Efficiency ---
templates.push(...['easy', 'average'].flatMap(diff => {
  const qIn = diff === 'easy' ? [500,600,800,1000] : [1200,1500,2000,2500];
  return qIn.map(qi => {
    const effs = diff === 'easy' ? [0.3,0.35,0.4,0.25,0.45] : [0.5,0.55,0.6,0.45,0.65];
    return {
      area: 'A', subTopic: 'thermodynamics', topic: 'Thermal Efficiency', difficulty: diff,
      body: () => {
        const eff = pick(effs);
        const qOut = qi * (1 - eff);
        return `A heat engine receives ${qi} kJ of heat and rejects ${qOut.toFixed(0)} kJ. What is its thermal efficiency?`;
      },
      opts: () => {
        const eff = [0.3,0.35,0.4,0.25,0.45,0.5,0.55][randInt(0,6)];
        const qOut = qi * (1 - eff);
        const correctPct = Math.round(eff * 100);
        return shuffle([`${correctPct}%`, `${Math.round(correctPct*1.3)}%`, `${Math.round(correctPct*0.7)}%`, `${Math.round(correctPct*0.5)}%`]);
      },
      ans: (o) => {
        const eff = [0.3,0.35,0.4,0.25,0.45,0.5,0.55][randInt(0,6)];
        return o.indexOf(`${Math.round(eff*100)}%`);
      },
      keyConcept: 'η = (Q_in - Q_out)/Q_in = W/Q_in.',
      steps: () => [`W = Q_in - Q_out`, `η = W/Q_in × 100%`],
      formula: 'η = (Q_in - Q_out)/Q_in'
    };
  });
}).flat());

// --- Thermodynamics: Ideal Gas Law ---
templates.push(...['easy', 'average'].flatMap(diff => {
  const data = diff === 'easy'
    ? [[0.5,300,400,100],[1.0,290,350,120],[0.8,310,380,90],[0.6,295,420,110]]
    : [[1.5,280,450,150],[2.0,300,500,100],[1.2,310,430,130],[0.9,290,410,140]];
  return data.map(([v1, t1, t2, p]) => ({
    area: 'A', subTopic: 'thermodynamics', topic: 'Ideal Gas Law', difficulty: diff,
    body: () => `A gas occupies ${v1} m³ at ${t1} K and ${p} kPa. What is the volume at ${t2} K with constant pressure?`,
    opts: () => {
      const v2 = parseFloat((v1 * t2 / t1).toFixed(3));
      return shuffle([String(v2), (v2*1.4).toFixed(3), (v2*0.6).toFixed(3), (v2*2).toFixed(3)]);
    },
    ans: (o) => o.indexOf(String(parseFloat((v1 * t2 / t1).toFixed(3)))),
    keyConcept: 'Charles\'s Law: V₁/T₁ = V₂/T₂ at constant pressure. Volume ∝ absolute temperature.',
    steps: () => [`V₂ = V₁ × (T₂/T₁) = ${v1} × (${t2}/${t1})`, `V₂ = ${(v1 * t2 / t1).toFixed(3)} m³`],
    formula: 'V₁/T₁ = V₂/T₂'
  }));
}));

// --- ICE: Engine Displacement ---
templates.push(...['easy', 'average'].flatMap(diff => {
  const data = diff === 'easy'
    ? [[86,86,4],[90,90,6],[80,85,4],[75,80,3],[95,95,4]]
    : [[100,100,6],[88,92,4],[110,110,8],[95,100,6],[85,90,4]];
  return data.map(([bore, stroke, cyl]) => ({
    area: 'A', subTopic: 'ice', topic: 'Engine Displacement', difficulty: diff,
    body: () => `Calculate the displacement volume of a ${cyl}-cylinder engine with bore = ${bore} mm and stroke = ${stroke} mm.`,
    opts: () => {
      const a = Math.PI / 4 * bore**2;
      const vPerCyl = a * stroke / 1000; // mm³ → cm³
      const total = parseFloat((vPerCyl * cyl / 1000).toFixed(1)); // in cm³
      return shuffle([String(total), (total*1.2).toFixed(1), (total*0.8).toFixed(1), (total*0.6).toFixed(1)]);
    },
    ans: (o) => o.indexOf(String(parseFloat((Math.PI/4 * bore**2 * stroke * cyl / 1e6).toFixed(1)))),
    keyConcept: 'Engine displacement = (π/4) × D² × L × n.',
    steps: () => [`Area = π/4 × D² = π/4 × (${bore})² = ${(Math.PI/4*bore**2).toFixed(1)} mm²`, `V_d per cylinder = ${(Math.PI/4*bore**2).toFixed(1)} × ${stroke} = ${(Math.PI/4*bore**2*stroke).toFixed(1)} mm³`, `Total = ${(Math.PI/4*bore**2*stroke*cyl/1e6).toFixed(1)} cm³`],
    formula: 'V_d = (π/4) × D² × L × n'
  }));
}));

// --- ICE: Power-Torque ---
templates.push(...['easy', 'average'].flatMap(diff => {
  const data = diff === 'easy'
    ? [[60,3000],[75,2500],[45,3500],[100,2000],[55,2800]]
    : [[120,2200],[150,1800],[200,2400],[85,3200],[175,2600]];
  return data.map(([p_kw, rpm]) => ({
    area: 'A', subTopic: 'ice', topic: 'Engine Power', difficulty: diff,
    body: () => `An engine develops ${p_kw} kW at ${rpm} RPM. What is the torque in N·m?`,
    opts: () => {
      const t = parseFloat((9549 * p_kw / rpm).toFixed(1));
      return shuffle([String(t), (t*1.3).toFixed(1), (t*0.7).toFixed(1), (t*2).toFixed(1)]);
    },
    ans: (o) => o.indexOf(String(parseFloat((9549 * p_kw / rpm).toFixed(1)))),
    keyConcept: 'T(N·m) = 9549 × P(kW) / N(rpm).',
    steps: () => [`T = 9549 × P / N = 9549 × ${p_kw} / ${rpm}`, `T = ${(9549*p_kw/rpm).toFixed(1)} N·m`],
    formula: 'T = 9549 × P / N'
  }));
}));

// --- ICE: Mechanical Efficiency ---
const mechEffEasy = [0.85, 0.8, 0.75, 0.9, 0.82];
const mechEffAvg = [0.7, 0.88, 0.78, 0.92, 0.72];
[...mechEffEasy.map(eff => ({ area:'A', subTopic:'ice', topic:'Mechanical Efficiency', difficulty:'easy',
  body: () => `An engine has IP = 100 HP and BP = ${Math.round(eff*100)} HP. What is mechanical efficiency?`,
  opts: () => shuffle([`${Math.round(eff*100)}%`, `${Math.round((1-eff)*100)}%`, `${Math.round(eff*115)}%`, `${Math.round(eff*85)}%`]),
  ans: (o) => o.indexOf(`${Math.round(eff*100)}%`),
  keyConcept: 'η_m = BHP / IHP × 100%. Always < 100% due to friction losses.',
  steps: () => [`η_m = ${Math.round(eff*100)} / 100 × 100% = ${Math.round(eff*100)}%`],
  formula: 'η_m = BHP / IHP'
})),
...mechEffAvg.map(eff => ({ area:'A', subTopic:'ice', topic:'Mechanical Efficiency', difficulty:'average',
  body: () => `An engine has IP = 150 HP and BP = ${Math.round(eff*150)} HP. What is mechanical efficiency?`,
  opts: () => shuffle([`${Math.round(eff*100)}%`, `${Math.round((1-eff)*100)}%`, `${Math.round(eff*110)}%`, `${Math.round(eff*90)}%`]),
  ans: (o) => o.indexOf(`${Math.round(eff*100)}%`),
  keyConcept: 'η_m = BHP / IHP × 100%.',
  steps: () => [`η_m = ${Math.round(eff*150)} / 150 × 100% = ${Math.round(eff*100)}%`],
  formula: 'η_m = BHP / IHP'
}))];

// --- ICE: SFC ---
templates.push(...['easy', 'average'].flatMap(diff => {
  const data = diff === 'easy'
    ? [[15,75],[20,100],[12,60],[18,90],[25,120]]
    : [[30,150],[40,200],[35,180],[45,250],[50,300]];
  return data.map(([fuel, pow]) => ({
    area: 'A', subTopic: 'ice', topic: 'Specific Fuel Consumption', difficulty: diff,
    body: () => `A diesel engine consumes ${fuel} kg of fuel per hour and produces ${pow} kW. What is the specific fuel consumption?`,
    opts: () => {
      const sfc = parseFloat((fuel / pow).toFixed(2));
      return shuffle([String(sfc), (sfc*2).toFixed(2), (sfc*0.5).toFixed(2), (sfc*1.5).toFixed(2)]);
    },
    ans: (o) => o.indexOf(String(parseFloat((fuel/pow).toFixed(2)))),
    keyConcept: 'SFC = Fuel consumption rate / Power output. Lower SFC means better efficiency.',
    steps: () => [`SFC = ${fuel} kg/h / ${pow} kW = ${(fuel/pow).toFixed(2)} kg/kW·h`],
    formula: 'SFC = Fuel flow / Power'
  }));
}));

// --- ICE: IHP/BHP ---
templates.push(...['hard'].flatMap(diff => {
  const data = [[86,86,4,850,85,2500],[90,90,6,800,80,2200],[80,85,4,900,88,2800],[100,100,6,750,82,2000]];
  return data.map(([bore, stroke, cyl, imep, mechEff, rpm]) => ({
    area: 'A', subTopic: 'ice', topic: 'Engine Performance', difficulty: 'hard',
    body: () => `A ${cyl}-cylinder 4-stroke engine: Bore=${bore}mm, Stroke=${stroke}mm, IMEP=${imep}kPa, η_m=${mechEff}%, Speed=${rpm} RPM. Find the brake horsepower.`,
    opts: () => {
      const a = Math.PI/4*(bore/1000)**2;
      const ihp = (imep * (stroke/1000) * a * rpm * cyl) / 120000;
      const bhp = parseFloat((ihp * mechEff / 100).toFixed(1));
      return shuffle([String(bhp), (bhp*1.2).toFixed(1), (bhp*0.8).toFixed(1), (bhp*0.6).toFixed(1)]);
    },
    ans: (o) => o.indexOf(String(parseFloat(((imep*(stroke/1000)*Math.PI/4*(bore/1000)**2*rpm*cyl)/120000*mechEff/100).toFixed(1)))),
    keyConcept: 'IHP = (P_L × L × A × N × n) / 120000 for 4-stroke.',
    steps: () => [`A = π/4 × (${bore/1000})² = ${(Math.PI/4*(bore/1000)**2).toFixed(6)} m²`, `IHP = ${imep}×${stroke/1000}×${(Math.PI/4*(bore/1000)**2).toFixed(6)}×${rpm}×${cyl}/120000 = ${((imep*(stroke/1000)*Math.PI/4*(bore/1000)**2*rpm*cyl)/120000).toFixed(1)} kW`, `BHP = ${((imep*(stroke/1000)*Math.PI/4*(bore/1000)**2*rpm*cyl)/120000).toFixed(1)} × ${mechEff/100} = ${((imep*(stroke/1000)*Math.PI/4*(bore/1000)**2*rpm*cyl)/120000*mechEff/100).toFixed(1)} kW`],
    formula: 'IHP = P_L × L × A × N × n / 120000'
  }));
}));

// --- Engineering Economy: Simple Interest ---
templates.push(...['easy', 'average'].flatMap(diff => {
  const data = diff === 'easy'
    ? [[50000,8,3],[100000,10,5],[75000,6,4],[200000,12,2],[150000,9,3]]
    : [[250000,8,7],[500000,10,10],[300000,12,6],[450000,7,8],[600000,9,5]];
  return data.map(([p, r, t]) => ({
    area: 'A', subTopic: 'engineering-economy', topic: 'Simple Interest', difficulty: diff,
    body: () => `If you invest ₱${p.toLocaleString()} at ${r}% simple interest per year for ${t} years, what is the total interest earned?`,
    opts: () => {
      const int = Math.round(p * r/100 * t);
      const prefix = '₱';
      return shuffle([`${prefix}${int.toLocaleString()}`, `${prefix}${Math.round(int*1.2).toLocaleString()}`, `${prefix}${Math.round(int*0.8).toLocaleString()}`, `${prefix}${Math.round(int*0.5).toLocaleString()}`]);
    },
    ans: (o) => o.indexOf(`₱${Math.round(p*r/100*t).toLocaleString()}`),
    keyConcept: 'Simple interest I = P × r × t, calculated on original principal only.',
    steps: () => [`I = ${p.toLocaleString()} × ${r/100} × ${t}`, `I = ₱${Math.round(p*r/100*t).toLocaleString()}`],
    formula: 'I = Prt'
  }));
}));

// --- Engineering Economy: Compound Interest ---
templates.push(...['easy', 'average'].flatMap(diff => {
  const data = diff === 'easy'
    ? [[10000,10,2],[20000,8,3],[15000,12,2],[25000,9,3]]
    : [[50000,10,5],[100000,8,10],[75000,12,7],[200000,9,8]];
  return data.map(([p, r, n]) => ({
    area: 'A', subTopic: 'engineering-economy', topic: 'Compound interest', difficulty: diff,
    body: () => `What is ₱${p.toLocaleString()} invested at ${r}% compounded annually worth after ${n} years?`,
    opts: () => {
      const a = Math.round(p * (1 + r/100)**n);
      const prefix = '₱';
      return shuffle([`${prefix}${a.toLocaleString()}`, `${prefix}${Math.round(a*0.85).toLocaleString()}`, `${prefix}${Math.round(a*1.15).toLocaleString()}`, `${prefix}${Math.round(a*0.7).toLocaleString()}`]);
    },
    ans: (o) => o.indexOf(`₱${Math.round(p*(1+r/100)**n).toLocaleString()}`),
    keyConcept: 'A = P(1+i)^n. Compound interest earns interest on accumulated interest.',
    steps: () => [`A = ${p.toLocaleString()} × (1+${r/100})^${n}`, `A = ₱${Math.round(p*(1+r/100)**n).toLocaleString()}`],
    formula: 'A = P(1+i)^n'
  }));
}));

// --- Engineering Economy: Present Worth ---
templates.push(...['average', 'hard'].flatMap(diff => {
  const data = diff === 'average'
    ? [[100000,8,5],[200000,10,7],[150000,6,4],[300000,12,6]]
    : [[500000,8,10],[250000,10,8],[1000000,12,5],[750000,9,12]];
  return data.map(([f, i, n]) => ({
    area: 'A', subTopic: 'engineering-economy', topic: 'Present Worth', difficulty: diff,
    body: () => `What is the present worth of ₱${f.toLocaleString()} to be received after ${n} years at ${i}% discount rate?`,
    opts: () => {
      const pw = Math.round(f / (1 + i/100)**n);
      const prefix = '₱';
      return shuffle([`${prefix}${pw.toLocaleString()}`, `${prefix}${Math.round(pw*1.2).toLocaleString()}`, `${prefix}${Math.round(pw*0.8).toLocaleString()}`, `${prefix}${Math.round(pw*0.6).toLocaleString()}`]);
    },
    ans: (o) => o.indexOf(`₱${Math.round(f/(1+i/100)**n).toLocaleString()}`),
    keyConcept: 'PW = F/(1+i)^n. Present worth decreases as discount rate or time increases.',
    steps: () => [`PW = ${f.toLocaleString()}/(1+${i/100})^${n}`, `(1.${i})^${n} = ${(1+i/100)**n.toFixed(4)}`, `PW = ₱${Math.round(f/(1+i/100)**n).toLocaleString()}`],
    formula: 'PW = F/(1+i)^n'
  }));
}));

// --- Engineering Economy: Depreciation ---
templates.push(...['easy', 'average'].flatMap(diff => {
  const data = diff === 'easy'
    ? [[100000,20000,5],[200000,40000,8],[150000,25000,6],[300000,50000,10]]
    : [[500000,100000,8],[750000,150000,10],[1000000,200000,12],[600000,120000,7]];
  return data.map(([cost, salvage, life]) => ({
    area: 'A', subTopic: 'engineering-economy', topic: 'Straight-Line Depreciation', difficulty: diff,
    body: () => `A machine costs ₱${cost.toLocaleString()} with salvage value of ₱${salvage.toLocaleString()} after ${life} years. What is the annual depreciation?`,
    opts: () => {
      const dep = Math.round((cost - salvage) / life);
      const prefix = '₱';
      return shuffle([`${prefix}${dep.toLocaleString()}/year`, `${prefix}${Math.round(dep*1.3).toLocaleString()}/year`, `${prefix}${Math.round(dep*0.7).toLocaleString()}/year`, `${prefix}${Math.round(dep*0.5).toLocaleString()}/year`]);
    },
    ans: (o) => o.indexOf(`₱${Math.round((cost-salvage)/life).toLocaleString()}/year`),
    keyConcept: 'Annual depreciation = (Cost - Salvage) / Life.',
    steps: () => [`Depreciable amount = ${cost.toLocaleString()} - ${salvage.toLocaleString()} = ${(cost-salvage).toLocaleString()}`, `Annual = ${(cost-salvage).toLocaleString()} / ${life} = ₱${Math.round((cost-salvage)/life).toLocaleString()}`],
    formula: 'D = (Cost - Salvage) / Life'
  }));
}));

// --- Laws ---
templates.push(
  { area:'A', subTopic:'laws', topic:'RA 10601', difficulty:'easy',
    body: () => 'RA 10601, the Agricultural and Biosystems Engineering Law, was enacted in what year?',
    opts: () => shuffle(['2013', '1997', '2003', '2010']), ans: (o) => o.indexOf('2013'),
    keyConcept: 'RA 10601 (2013) governs the practice of ABE.',
    steps: () => ['RA 10601 is the ABE Act of 2013', 'Signed by President Aquino III on July 23, 2013'] },
  { area:'A', subTopic:'laws', topic:'RA 10601', difficulty:'easy',
    body: () => 'What is the legal professional title under RA 10601?',
    opts: () => shuffle(['Registered Agricultural and Biosystems Engineer', 'Agricultural Engineer', 'Biosystems Engineer', 'Licensed Farm Engineer']), ans: (o) => o.indexOf('Registered Agricultural and Biosystems Engineer'),
    keyConcept: 'RA 10915 defines the professional title as RABE.',
    steps: () => ['RA 10915 created the title', 'Also known as the ABE Act of 2016'] },
  { area:'A', subTopic:'laws', topic:'RA 8435', difficulty:'easy',
    body: () => 'RA 8435, the Agriculture and Fisheries Modernization Act (AFMA), was enacted in what year?',
    opts: () => shuffle(['1997', '2013', '2000', '1995']), ans: (o) => o.indexOf('1997'),
    keyConcept: 'AFMA (1997) focuses on modernizing agriculture and fisheries.',
    steps: () => ['RA 8435 enacted December 22, 1997', 'During Ramos administration'] },
  { area:'A', subTopic:'laws', topic:'RA 8435', difficulty:'average',
    body: () => 'Which law is the Agriculture and Fisheries Modernization Act?',
    opts: () => shuffle(['RA 8435', 'RA 10601', 'RA 8550', 'RA 8749']), ans: (o) => o.indexOf('RA 8435'),
    keyConcept: 'RA 8435 is AFMA.',
    steps: () => ['RA 8435 = AFMA (1997)', 'RA 10601 = AFMech Law (2013)'] },
  { area:'A', subTopic:'laws', topic:'Code of Ethics', difficulty:'easy',
    body: () => 'How many canons of professional ethics are in the Code of Ethics for Agricultural Engineers?',
    opts: () => shuffle(['6', '5', '7', '8']), ans: (o) => o.indexOf('6'),
    keyConcept: 'The Code of Ethics contains 6 canons covering duties to public, clients, and profession.',
    steps: () => ['6 canons in the Code of Ethics', 'Cover duties to public, clients, profession, employers, peers, and self'] },
  { area:'A', subTopic:'laws', topic:'Code of Ethics', difficulty:'easy',
    body: () => 'Under engineering ethics, an RAE can sign and seal which documents?',
    opts: () => shuffle(['Documents prepared under their direct supervision', 'Any structural blueprint', 'Documents from other engineers', 'All government documents']), ans: (o) => o.indexOf('Documents prepared under their direct supervision'),
    keyConcept: 'Engineers may only sign/seal documents they prepared or directly supervised.',
    steps: () => ['Ethics requires direct supervision', 'Signing without supervision is unethical'] }
);

// --- Laws: Environmental ---
templates.push(
  { area:'A', subTopic:'laws', topic:'Environmental Laws', difficulty:'easy',
    body: () => 'Which Presidential Decree established the Philippine Environmental Policy?',
    opts: () => shuffle(['PD 1151', 'PD 1152', 'PD 1586', 'RA 8749']), ans: (o) => o.indexOf('PD 1151'),
    keyConcept: 'PD 1151 enacted the Philippine Environmental Policy.',
    steps: () => ['PD 1151 = Philippine Environmental Policy', 'PD 1152 = Philippine Environmental Code'] },
  { area:'A', subTopic:'laws', topic:'Environmental Laws', difficulty:'easy',
    body: () => 'Which agency requires RAE sign and seal on documents for an Environmental Compliance Certificate (ECC)?',
    opts: () => shuffle(['DENR', 'DA', 'DPWH', 'DAR']), ans: (o) => o.indexOf('DENR'),
    keyConcept: 'DENR-EMB requires RAE sign/seal on ECC technical documents.',
    steps: () => ['DENR through EMB issues ECC', 'Technical proposals need RAE signature'] }
);

// ==================== AREA B: LAND & WATER ====================

// --- Hydrology: Runoff ---
templates.push(...['easy', 'average'].flatMap(diff => {
  const data = diff === 'easy'
    ? [[50,75,0.4],[30,100,0.3],[80,50,0.5],[40,90,0.35],[60,60,0.45]]
    : [[100,120,0.3],[75,150,0.25],[120,80,0.4],[90,110,0.35],[150,100,0.2]];
  return data.map(([area, rain, c]) => ({
    area: 'B', subTopic: 'hydrology', topic: 'Runoff', difficulty: diff,
    body: () => `A watershed has area ${area} km². Storm produces ${rain} mm rainfall. Runoff coefficient = ${c}. What is total runoff volume in million m³?`,
    opts: () => {
      const vol = parseFloat((area * 1e6 * rain/1000 * c / 1e6).toFixed(2));
      return shuffle([String(vol), (vol*1.5).toFixed(2), (vol*0.6).toFixed(2), (vol*2).toFixed(2)]);
    },
    ans: (o) => o.indexOf(String(parseFloat((area * rain/1000 * c).toFixed(2)))),
    keyConcept: 'Runoff = P × A × C. Unit conversion is critical.',
    steps: () => [`Rain = ${rain} mm = ${rain/1000} m`, `Area = ${area} km² = ${area*1e6} m²`, `Runoff = ${c} × ${area*1e6} × ${rain/1000} = ${(area*rain/1000*c).toFixed(2)} million m³`],
    formula: 'V = P × A × C'
  }));
}));

// --- Hydrology: Rainfall Intensity ---
templates.push(...['easy', 'average'].flatMap(diff => {
  const data = diff === 'easy'
    ? [[125,24],[80,12],[150,24],[60,6],[200,24]]
    : [[180,6],[250,12],[300,8],[400,24],[350,6]];
  return data.map(([total, hrs]) => ({
    area: 'B', subTopic: 'hydrology', topic: 'Rainfall Intensity', difficulty: diff,
    body: () => `A rain gauge collects ${total} mm of rainfall in ${hrs} hours. What is the intensity in mm/hr?`,
    opts: () => {
      const i = parseFloat((total / hrs).toFixed(1));
      return shuffle([String(i), (i*2).toFixed(1), (i*0.5).toFixed(1), (i*1.5).toFixed(1)]);
    },
    ans: (o) => o.indexOf(String(parseFloat((total/hrs).toFixed(1)))),
    keyConcept: 'Rainfall intensity = Total depth / Duration.',
    steps: () => [`i = ${total}/${hrs} = ${(total/hrs).toFixed(1)} mm/hr`],
    formula: 'i = P/t'
  }));
}));

// --- Hydrology: Rational Method ---
templates.push(...['average', 'hard'].flatMap(diff => {
  const data = diff === 'average'
    ? [[0.9,0.5,150],[0.8,1.0,120],[0.95,0.3,180],[0.85,0.75,140]]
    : [[0.7,2.5,200],[0.75,1.5,250],[0.8,3.0,180],[0.85,2.0,220]];
  return data.map(([c, areaHa, intens]) => ({
    area: 'B', subTopic: 'hydrology', topic: 'Rational Method', difficulty: diff,
    body: () => `A parking lot (C = ${c}) has area ${areaHa} ha. Rainfall intensity is ${intens} mm/hr. What is peak runoff in m³/s?`,
    opts: () => {
      const q = parseFloat((c * areaHa * 10000 * intens/1000 / 3600).toFixed(3));
      return shuffle([String(q), (q*1.6).toFixed(3), (q*0.5).toFixed(3), (q*2).toFixed(3)]);
    },
    ans: (o) => o.indexOf(String(parseFloat((c * areaHa * intens / 360).toFixed(3)))),
    keyConcept: 'Q = C × i × A. Convert intensity to m/s and area to m².',
    steps: () => [`A = ${areaHa} ha = ${areaHa*10000} m²`, `i = ${intens} mm/hr = ${(intens/3600).toFixed(6)} m/s`, `Q = ${c} × ${intens} × ${areaHa} / 360 = ${(c*areaHa*intens/360).toFixed(3)} m³/s`],
    formula: 'Q = C × i × A'
  }));
}));

// --- Hydrology: SCS Curve Number ---
templates.push(...['average', 'hard'].flatMap(diff => {
  const data = diff === 'average'
    ? [[75,150],[80,120],[70,180],[85,100],[78,140]]
    : [[65,200],[72,250],[68,300],[82,180],[60,350]];
  return data.map(([cn, p]) => ({
    area: 'B', subTopic: 'hydrology', topic: 'SCS Curve Number', difficulty: diff,
    body: () => `For a watershed with CN = ${cn}, and rainfall P = ${p} mm, calculate runoff using SCS method (Iₐ = 0.2S).`,
    opts: () => {
      const sMetric = 25400/cn - 254;
      const ia = 0.2 * sMetric;
      const pot = p > ia ? (p - ia) : 0;
      const q = pot > 0 ? parseFloat(((p - ia)**2 / (p + 0.8*sMetric)).toFixed(1)) : 0;
      return shuffle([String(q), (q*1.5).toFixed(1), (q*0.5).toFixed(1), (q*0.7).toFixed(1)]);
    },
    ans: (o) => {
      const s = 25400/cn - 254;
      const ia = 0.2*s;
      return o.indexOf(String(parseFloat(((p-ia)**2/(p+0.8*s)).toFixed(1))));
    },
    keyConcept: 'SCS: Q = (P - Iₐ)²/(P + S) where S = 25400/CN - 254 in mm.',
    steps: () => [`S = 25400/${cn} - 254 = ${(25400/cn-254).toFixed(1)} mm`, `Iₐ = 0.2 × ${(25400/cn-254).toFixed(1)} = ${(0.2*(25400/cn-254)).toFixed(1)} mm`, `Q = (${p} - ${(0.2*(25400/cn-254)).toFixed(1)})² / (${p} + ${(0.8*(25400/cn-254)).toFixed(1)}) = ${(((p-0.2*(25400/cn-254))**2/(p+0.8*(25400/cn-254))).toFixed(1))} mm`],
    formula: 'Q = (P - Iₐ)²/(P + S)'
  }));
}));

// --- Irrigation: Gross Requirement ---
templates.push(...['easy', 'average'].flatMap(diff => {
  const data = diff === 'easy'
    ? [[100,75],[80,70],[120,80],[150,65],[90,85]]
    : [[150,70],[200,65],[180,75],[250,60],[120,72]];
  return data.map(([net, eff]) => ({
    area: 'B', subTopic: 'irrigation', topic: 'Water Requirement', difficulty: diff,
    body: () => `A field requires ${net} mm net irrigation. Efficiency = ${eff}%. What is the gross requirement?`,
    opts: () => {
      const gross = parseFloat((net / (eff/100)).toFixed(1));
      return shuffle([String(gross), (gross*0.8).toFixed(1), (gross*1.3).toFixed(1), (gross*0.6).toFixed(1)]);
    },
    ans: (o) => o.indexOf(String(parseFloat((net/(eff/100)).toFixed(1)))),
    keyConcept: 'GIR = NIR / E. Gross is always > net due to losses.',
    steps: () => [`GIR = ${net} / ${eff/100} = ${(net/(eff/100)).toFixed(1)} mm`],
    formula: 'GIR = NIR / E'
  }));
}));

// --- Irrigation: ET to Volume ---
templates.push(...['easy', 'average'].flatMap(diff => {
  const data = diff === 'easy'
    ? [[5,1],[3,2],[6,1.5],[4,3],[7,2]]
    : [[8,5],[10,3],[12,4],[6,6],[9,3.5]];
  return data.map(([et, area]) => ({
    area: 'B', subTopic: 'irrigation', topic: 'Crop Water Use', difficulty: diff,
    body: () => `Daily ET = ${et} mm. How much water is needed per ${area} ha per day? (in m³)`,
    opts: () => {
      const vol = parseFloat((et * area * 10000 / 1000).toFixed(1));
      return shuffle([String(vol), (vol*2).toFixed(1), (vol*0.5).toFixed(1), (vol*1.5).toFixed(1)]);
    },
    ans: (o) => o.indexOf(String(parseFloat((et*area*10).toFixed(1)))),
    keyConcept: '1 mm over 1 ha = 10 m³ of water.',
    steps: () => [`${et} mm = ${et/1000} m`, `Volume = ${et/1000} × ${area*10000} = ${(et*area*10).toFixed(1)} m³`],
    formula: 'V = ET × Area'
  }));
}));

// --- Irrigation: Frequency ---
templates.push(...['average', 'hard'].flatMap(diff => {
  const data = diff === 'average'
    ? [[30,15,60,5],[28,12,50,4],[32,18,55,6],[25,10,70,4.5]]
    : [[35,15,80,6],[40,20,75,7],[28,12,90,8],[30,14,100,5]];
  return data.map(([fc, wp, rd, et]) => ({
    area: 'B', subTopic: 'irrigation', topic: 'Irrigation Frequency', difficulty: diff,
    body: () => `Soil: FC = ${fc}%, WP = ${wp}%, root zone = ${rd} cm, ET = ${et} mm/day. What is the irrigation frequency (days) at 50% depletion?`,
    opts: () => {
      const taw = (fc - wp)/100 * rd * 10; // mm
      const freq = parseFloat((taw * 0.5 / et).toFixed(1));
      return shuffle([String(freq), (freq*1.5).toFixed(1), (freq*0.7).toFixed(1), (freq*2).toFixed(1)]);
    },
    ans: (o) => o.indexOf(String(parseFloat(((fc-wp)/100*rd*10*0.5/et).toFixed(1)))),
    keyConcept: 'TAW = (FC-WP)×D. Frequency = (TAW × depletion fraction) / ET_daily.',
    steps: () => [`TAW = (${fc}-${wp})% × ${rd} cm = ${(fc-wp)/100*rd*10} mm`, `Allowable depletion = 0.5 × ${(fc-wp)/100*rd*10} = ${((fc-wp)/100*rd*10*0.5).toFixed(1)} mm`, `Frequency = ${((fc-wp)/100*rd*10*0.5).toFixed(1)} / ${et} = ${(((fc-wp)/100*rd*10*0.5)/et).toFixed(1)} days`],
    formula: 'f = (TAW × p) / ET'
  }));
}));

// --- Irrigation: Sprinkler Discharge ---
templates.push(...['average', 'hard'].flatMap(diff => {
  const data = diff === 'average'
    ? [[12,12,5],[10,10,6],[15,15,4],[18,12,5.5]]
    : [[20,20,3],[25,25,4],[15,20,5],[30,30,2.5]];
  return data.map(([s, S, ar]) => ({
    area: 'B', subTopic: 'irrigation', topic: 'Sprinkler Coverage', difficulty: diff,
    body: () => `Sprinkler spacing ${s}×${S} m, application rate ${ar} mm/hr. What is discharge in L/min?`,
    opts: () => {
      const q = parseFloat((s * S * ar / 60).toFixed(1));
      return shuffle([String(q), (q*1.5).toFixed(1), (q*0.5).toFixed(1), (q*2).toFixed(1)]);
    },
    ans: (o) => o.indexOf(String(parseFloat((s*S*ar/60).toFixed(1)))),
    keyConcept: 'q = i × s × S / 60 for L/min.',
    steps: () => [`Area/sprinkler = ${s}×${S} = ${s*S} m²`, `Flow/hr = ${ar} L/m²/hr × ${s*S} = ${ar*s*S} L/hr`, `Flow/min = ${ar*s*S}/60 = ${(s*S*ar/60).toFixed(1)} L/min`],
    formula: 'q = i × s × S'
  }));
}));

// --- Irrigation: Pump Power ---
templates.push(...['hard'].flatMap(diff => {
  const data = [[50,0.05,75,40],[40,0.08,80,35],[60,0.06,70,45],[35,0.1,85,30],[45,0.07,78,50]];
  return data.map(([q_lps, head, pumpEff, motorEff]) => ({
    area: 'B', subTopic: 'irrigation', topic: 'Pump Sizing', difficulty: 'hard',
    body: () => `Pump: flow = ${q_lps} L/s, head = ${head} m, η_pump = ${pumpEff}%, η_motor = ${motorEff}%, operating ${8} hrs/day. What is daily energy consumption?`,
    opts: () => {
      const hyd = 1000 * 9.81 * (q_lps/1000) * head;
      const elec = hyd / (pumpEff/100) / (motorEff/100);
      const energy = parseFloat((elec * 8 / 1000).toFixed(1));
      const prefix = '';
      return shuffle([`${energy} kWh`, `${(energy*1.4).toFixed(1)} kWh`, `${(energy*0.6).toFixed(1)} kWh`, `${(energy*0.8).toFixed(1)} kWh`]);
    },
    ans: (o) => o.indexOf(`${parseFloat((1000*9.81*(q_lps/1000)*head/(pumpEff/100)/(motorEff/100)*8/1000).toFixed(1))} kWh`),
    keyConcept: 'Wire-to-water efficiency = η_pump × η_motor. Energy = P_input × hours.',
    steps: () => [`P_hyd = 1000×9.81×${q_lps/1000}×${head} = ${(1000*9.81*q_lps/1000*head).toFixed(0)} W`, `P_motor = ${(1000*9.81*q_lps/1000*head).toFixed(0)} / ${pumpEff/100} / ${motorEff/100} = ${(1000*9.81*q_lps/1000*head/(pumpEff/100)/(motorEff/100)).toFixed(0)} W`, `Energy = ${(1000*9.81*q_lps/1000*head/(pumpEff/100)/(motorEff/100)).toFixed(0)} × 8 / 1000 = ${parseFloat((1000*9.81*q_lps/1000*head/(pumpEff/100)/(motorEff/100)*8/1000).toFixed(1))} kWh`],
    formula: 'E = ρgQHt / η_wire-to-water'
  }));
}));

// --- Soil: Moisture Content ---
templates.push(...['easy', 'average'].flatMap(diff => {
  const data = diff === 'easy'
    ? [[185,150],[220,180],[165,130],[250,200],[140,115]]
    : [[350,280],[420,340],[500,400],[380,300],[450,360]];
  return data.map(([wet, dry]) => ({
    area: 'B', subTopic: 'soil', topic: 'Moisture Content', difficulty: diff,
    body: () => `A soil sample weighs ${wet} g wet and ${dry} g dry. What is the moisture content?`,
    opts: () => {
      const mc = parseFloat(((wet - dry) / dry * 100).toFixed(1));
      return shuffle([`${mc}%`, `${(mc*1.3).toFixed(1)}%`, `${(mc*0.7).toFixed(1)}%`, `${(mc*0.5).toFixed(1)}%`]);
    },
    ans: (o) => o.indexOf(`${parseFloat(((wet-dry)/dry*100).toFixed(1))}%`),
    keyConcept: 'MC = (M_wet - M_dry) / M_dry × 100%.',
    steps: () => [`Water mass = ${wet} - ${dry} = ${wet-dry} g`, `MC = ${wet-dry}/${dry} × 100% = ${((wet-dry)/dry*100).toFixed(1)}%`],
    formula: 'w = (M_w - M_d)/M_d × 100%'
  }));
}));

// --- Soil: Compaction ---
templates.push(...['average', 'hard'].flatMap(diff => {
  const data = diff === 'average'
    ? [[2.65,1.78],[2.7,1.85],[2.6,1.7],[2.68,1.82],[2.62,1.75]]
    : [[2.65,1.9],[2.7,1.95],[2.6,1.88],[2.68,1.92],[2.72,2.0]];
  return data.map(([gs, gd]) => ({
    area: 'B', subTopic: 'soil', topic: 'Compaction', difficulty: diff,
    body: () => `Soil: Gs = ${gs}, max dry density = ${gd} Mg/m³. What is the porosity?`,
    opts: () => {
      const e = gs/gd - 1;
      const n = parseFloat((e / (1+e) * 100).toFixed(1));
      return shuffle([`${n}%`, `${(n*1.3).toFixed(1)}%`, `${(n*0.7).toFixed(1)}%`, `${(n*0.5).toFixed(1)}%`]);
    },
    ans: (o) => o.indexOf(`${parseFloat((gs/gd-1)/(gs/gd)*100).toFixed(1)}%`),
    keyConcept: 'γ_d = Gs×γ_w/(1+e). n = e/(1+e).',
    steps: () => [`e = Gs/γ_d - 1 = ${gs}/${gd} - 1 = ${(gs/gd-1).toFixed(3)}`, `n = e/(1+e) = ${(gs/gd-1).toFixed(3)}/${(gs/gd).toFixed(3)} = ${((gs/gd-1)/(gs/gd)*100).toFixed(1)}%`],
    formula: 'n = e/(1+e), γ_d = Gsγ_w/(1+e)'
  }));
}));

// --- Math: Trig ---
templates.push(...['easy', 'average'].flatMap(diff => {
  const data = diff === 'easy'
    ? [[10,60],[12,45],[8,30],[15,53],[20,60]]
    : [[10,30],[15,45],[20,60],[25,53],[12,37]];
  return data.map(([ladder, angle]) => ({
    area: 'B', subTopic: 'mathematics', topic: 'Trigonometry', difficulty: diff,
    body: () => `A ladder ${ladder} m long leans against a wall at ${angle}° with the ground. How far is the foot from the wall?`,
    opts: () => {
      const c = Math.cos(angle * Math.PI / 180);
      const x = parseFloat((ladder * c).toFixed(1));
      return shuffle([String(x), (x*1.5).toFixed(1), (x*0.5).toFixed(1), (x*0.7).toFixed(1)]);
    },
    ans: (o) => o.indexOf(String(parseFloat((ladder * Math.cos(angle*Math.PI/180)).toFixed(1)))),
    keyConcept: 'cos θ = adjacent/hypotenuse. cos(60°) = 0.5.',
    steps: () => [`cos(${angle}°) = x/${ladder}`, `x = ${ladder} × cos(${angle}°) = ${ladder} × ${Math.cos(angle*Math.PI/180).toFixed(3)} = ${(ladder*Math.cos(angle*Math.PI/180)).toFixed(1)} m`],
    formula: 'cos θ = adjacent/hypotenuse'
  }));
}));

// --- Math: Quadratic ---
templates.push(...['easy', 'average'].flatMap(diff => {
  const data = diff === 'easy'
    ? [[2,-5,-3],[1,-6,8],[3,-11,-4],[1,-5,6],[2,-7,3]]
    : [[3,-14,8],[4,-13,-12],[2,-9,7],[5,-26,5],[6,-29,20]];
  return data.map(([a, b, c]) => ({
    area: 'B', subTopic: 'mathematics', topic: 'Algebra', difficulty: diff,
    body: () => `Solve: ${a}x² ${b<0?'-':'+'} ${Math.abs(b)}x ${c<0?'-':'+'} ${Math.abs(c)} = 0`,
    opts: () => {
      const disc = b*b - 4*a*c;
      const x1 = (-b + Math.sqrt(disc)) / (2*a);
      const x2 = (-b - Math.sqrt(disc)) / (2*a);
      const ansStr = `x = ${parseFloat(x1.toFixed(1))} or x = ${parseFloat(x2.toFixed(1))}`;
      return shuffle([ansStr, `x = ${parseFloat((-x1).toFixed(1))} or x = ${parseFloat((-x2).toFixed(1))}`, `x = ${parseFloat((x1*2).toFixed(1))} or x = ${parseFloat((x2*2).toFixed(1))}`, `x = ${parseFloat((x1/2).toFixed(1))} or x = ${parseFloat((x2/2).toFixed(1))}`]);
    },
    ans: (o) => {
      const d = b*b - 4*a*c;
      const x1a = (-b + Math.sqrt(d)) / (2*a);
      const x2a = (-b - Math.sqrt(d)) / (2*a);
      return o.indexOf(`x = ${parseFloat(x1a.toFixed(1))} or x = ${parseFloat(x2a.toFixed(1))}`);
    },
    keyConcept: 'Quadratic formula: x = (-b ± √(b²-4ac))/2a.',
    steps: () => {
      const d = b*b - 4*a*c;
      const x1a = (-b + Math.sqrt(d)) / (2*a);
      const x2a = (-b - Math.sqrt(d)) / (2*a);
      return [`Discriminant = ${b}² - 4(${a})(${c}) = ${d}`, `x = (${-b} ± √${d})/(2×${a})`, `x = ${parseFloat(x1a.toFixed(1))} or ${parseFloat(x2a.toFixed(1))}`];
    },
    formula: 'x = (-b ± √(b²-4ac))/2a'
  }));
}));

// --- Math: Differentiation ---
templates.push(...['average', 'hard'].flatMap(diff => {
  const data = diff === 'average'
    ? [[3,4,-2,3,5,-7],[2,3,5,2,-4,1],[1,5,-3,4,2,-6],[4,3,2,1,-5,7]]
    : [[5,6,-3,4,7,-2],[3,5,2,3,-6,4],[2,7,-4,2,-3,5],[6,4,1,5,-2,-3]];
  return data.map(([a,n1,b,n2,c,n3,d]) => ({
    area: 'B', subTopic: 'mathematics', topic: 'Differentiation', difficulty: diff,
    body: () => `Find dy/dx if y = ${a}x^${n1} ${b<0?'-':'+'} ${Math.abs(b)}x^${n2} ${c<0?'-':'+'} ${Math.abs(c)}x ${d<0?'-':'+'} ${Math.abs(d)}`,
    opts: () => {
      const da = a*n1, dn1 = n1-1, db = b*n2, dn2 = n2-1, dc = c;
      const ans = `${da}x^${dn1} ${db<0?'-':'+'} ${Math.abs(db)}x^${dn2} ${dc<0?'-':'+'} ${Math.abs(dc)}`;
      return shuffle([ans, `${da}x^${dn1+1} ${db<0?'-':'+'} ${Math.abs(db)}x^${dn2+1} ${dc<0?'-':'+'} ${Math.abs(dc)}`, `${da/2}x^${dn1} ${db/2<0?'-':'+'} ${Math.abs(db/2)}x^${dn2} ${dc<0?'-':'+'} ${Math.abs(dc)}`, `${da}x^${dn1+3} ${db<0?'-':'+'} ${Math.abs(db)}x^${dn2+3} ${dc<0?'-':'+'} ${Math.abs(dc)}`]);
    },
    ans: (o) => o.indexOf(`${a*n1}x^${n1-1} ${b*n2<0?'-':'+'} ${Math.abs(b*n2)}x^${n2-1} ${c<0?'-':'+'} ${Math.abs(c)}`),
    keyConcept: 'Power rule: d/dx(xⁿ) = n·xⁿ⁻¹.',
    steps: () => [`d/dx(${a}x^${n1}) = ${a*n1}x^${n1-1}`, `d/dx(${b}x^${n2}) = ${b*n2}x^${n2-1}`, `d/dx(${c}x) = ${c}`, `d/dx(${d}) = 0`],
    formula: 'd/dx(xⁿ) = n·xⁿ⁻¹'
  }));
}));

// --- Math: Integration ---
templates.push(...['average', 'hard'].flatMap(diff => {
  const data = diff === 'average'
    ? [[2,3,-4,1,1,0],[3,2,-5,2,1,0],[1,4,-3,1,2,0],[4,1,-2,3,-1,0]]
    : [[5,3,-3,2,4,1],[2,5,-6,3,-2,1],[3,4,-5,2,7,0],[6,2,-7,1,-3,0]];
  return data.map(([a,n1,b,n2,c,constC]) => ({
    area: 'B', subTopic: 'mathematics', topic: 'Integration', difficulty: diff,
    body: () => `Evaluate ∫(${a}x^${n1} ${b<0?'-':'+'} ${Math.abs(b)}x^${n2} ${c<0?'-':'+'} ${Math.abs(c)})dx`,
    opts: () => {
      const ia = a/(n1+1), in1 = n1+1, ib = b/(n2+1), in2 = n2+1, ic = c;
      const ans = `${parseFloat(ia.toFixed(2))}x^${in1} ${ib<0?'-':'+'} ${parseFloat(Math.abs(ib).toFixed(2))}x^${in2} ${ic<0?'-':'+'} ${parseFloat(Math.abs(ic).toFixed(2))}x + C`;
      return shuffle([ans, `${parseFloat((ia*1.5).toFixed(2))}x^${in1} ${ib*1.5<0?'-':'+'} ${parseFloat(Math.abs(ib*1.5).toFixed(2))}x^${in2} ${ic*1.5<0?'-':'+'} ${parseFloat(Math.abs(ic*1.5).toFixed(2))}x + C`, `${parseFloat(ia.toFixed(2))}x^${in1+1} ${ib<0?'-':'+'} ${parseFloat(Math.abs(ib).toFixed(2))}x^${in2+1} ${ic<0?'-':'+'} ${parseFloat(Math.abs(ic).toFixed(2))}x + C`, `${parseFloat((ia*0.5).toFixed(2))}x^${in1} ${ib*0.5<0?'-':'+'} ${parseFloat(Math.abs(ib*0.5).toFixed(2))}x^${in2} ${ic*0.5<0?'-':'+'} ${parseFloat(Math.abs(ic*0.5).toFixed(2))}x + C`]);
    },
    ans: (o) => {
      const ia = a/(n1+1), in1=n1+1, ib=b/(n2+1), in2=n2+1, ic=c;
      return o.indexOf(`${parseFloat(ia.toFixed(2))}x^${in1} ${ib<0?'-':'+'} ${parseFloat(Math.abs(ib).toFixed(2))}x^${in2} ${ic<0?'-':'+'} ${parseFloat(Math.abs(ic).toFixed(2))}x + C`);
    },
    keyConcept: '∫xⁿdx = xⁿ⁺¹/(n+1) + C. Reverse of differentiation.',
    steps: () => [`∫${a}x^${n1}dx = ${a/(n1+1)}x^${n1+1}`, `∫${b}x^${n2}dx = ${b/(n2+1)}x^${n2+1}`, `∫${c}dx = ${c}x`, 'Add + C (constant of integration)'],
    formula: '∫xⁿdx = xⁿ⁺¹/(n+1) + C'
  }));
}));

// --- Math: Statistics ---
templates.push(...['average', 'hard'].flatMap(diff => {
  const data = diff === 'average'
    ? [[10,12,14,16,18],[5,10,15,20,25],[8,10,12,14,16],[20,25,30,35,40]]
    : [[10,15,20,25,30,35],[5,8,12,18,25,30],[40,42,44,46,48,50],[3,7,11,15,19,23]];
  return data.map(nums => ({
    area: 'B', subTopic: 'mathematics', topic: 'Statistics', difficulty: diff,
    body: () => `Find the sample standard deviation of: ${nums.join(', ')}`,
    opts: () => {
      const mean = nums.reduce((a,b)=>a+b,0)/nums.length;
      const variance = nums.reduce((sum,x)=>sum+(x-mean)**2,0)/(nums.length-1);
      const sd = parseFloat(Math.sqrt(variance).toFixed(2));
      return shuffle([String(sd), (sd*1.3).toFixed(2), (sd*0.7).toFixed(2), (sd*1.5).toFixed(2)]);
    },
    ans: (o) => o.indexOf(String(parseFloat(Math.sqrt(nums.reduce((sum,x)=>sum+(x-nums.reduce((a,b)=>a+b,0)/nums.length)**2,0)/(nums.length-1)).toFixed(2)))),
    keyConcept: 'Sample SD uses n-1 denominator (Bessel\'s correction).',
    steps: () => {
      const m = nums.reduce((a,b)=>a+b,0)/nums.length;
      const dev = nums.map(x => (x-m)**2);
      return [`Mean = ${m}`, `Squared deviations: ${dev.map(d=>d.toFixed(1)).join(', ')}`, `Sum = ${dev.reduce((a,b)=>a+b,0).toFixed(1)}`, `Variance = ${dev.reduce((a,b)=>a+b,0).toFixed(1)}/${nums.length-1} = ${(dev.reduce((a,b)=>a+b,0)/(nums.length-1)).toFixed(2)}`, `SD = √${(dev.reduce((a,b)=>a+b,0)/(nums.length-1)).toFixed(2)} = ${Math.sqrt(dev.reduce((a,b)=>a+b,0)/(nums.length-1)).toFixed(2)}`];
    },
    formula: 'σ = √[Σ(xᵢ - x̄)²/(n-1)]'
  }));
}));

// ==================== AREA C: STRUCTURES & BIOPROCESS ====================

// --- Strength: Normal Stress ---
templates.push(...['easy', 'average'].flatMap(diff => {
  const data = diff === 'easy'
    ? [[20,50],[25,75],[16,40],[30,100],[22,60]]
    : [[16,80],[20,120],[25,150],[30,200],[12,90]];
  return data.map(([dia, load]) => ({
    area: 'C', subTopic: 'strength', topic: 'Normal Stress', difficulty: diff,
    body: () => `A steel rod diameter ${dia} mm carries axial load of ${load} kN. Calculate the stress in MPa.`,
    opts: () => {
      const a = Math.PI * (dia/1000)**2 / 4;
      const s = parseFloat((load*1000 / a / 1e6).toFixed(1));
      return shuffle([String(s), (s*1.5).toFixed(1), (s*0.7).toFixed(1), (s*2).toFixed(1)]);
    },
    ans: (o) => o.indexOf(String(parseFloat((load*1000/(Math.PI*(dia/1000)**2/4)/1e6).toFixed(1)))),
    keyConcept: 'σ = P/A. Stress is force per unit area.',
    steps: () => [`A = π(${dia}/1000)²/4 = ${(Math.PI*(dia/1000)**2/4).toFixed(6)} m²`, `σ = ${load*1000}/${(Math.PI*(dia/1000)**2/4).toFixed(6)} = ${(load*1000/(Math.PI*(dia/1000)**2/4)/1e6).toFixed(1)} MPa`],
    formula: 'σ = P/A'
  }));
}));

// --- Strength: Bending Stress ---
templates.push(...['easy', 'average'].flatMap(diff => {
  const data = diff === 'easy'
    ? [[20,200000],[15,150000],[25,300000],[30,250000],[10,100000]]
    : [[40,400000],[50,500000],[35,350000],[60,600000],[45,450000]];
  return data.map(([m, z]) => ({
    area: 'C', subTopic: 'strength', topic: 'Bending Stress', difficulty: diff,
    body: () => `Max bending moment = ${m} kN·m, section modulus Z = ${(z/1000).toFixed(0)} × 10³ mm³. What is max bending stress?`,
    opts: () => {
      const s = parseFloat((m*1e6 / z).toFixed(1));
      return shuffle([`${s} MPa`, `${(s*1.4).toFixed(1)} MPa`, `${(s*0.6).toFixed(1)} MPa`, `${(s*2).toFixed(1)} MPa`]);
    },
    ans: (o) => o.indexOf(`${parseFloat((m*1e6/z).toFixed(1))} MPa`),
    keyConcept: 'σ = M/Z. Bending stress = Moment / Section modulus.',
    steps: () => [`M = ${m} kN·m = ${m*1e6} N·mm`, `Z = ${(z/1000).toFixed(0)} × 10³ mm³ = ${z} mm³`, `σ = ${m*1e6}/${z} = ${(m*1e6/z).toFixed(1)} MPa`],
    formula: 'σ = M/Z'
  }));
}));

// --- Strength: Shear Stress ---
templates.push(...['easy', 'average'].flatMap(diff => {
  const data = diff === 'easy'
    ? [[12,15],[16,20],[10,12],[20,30],[14,18]]
    : [[18,40],[22,50],[24,60],[14,35],[20,45]];
  return data.map(([dia, load]) => ({
    area: 'C', subTopic: 'strength', topic: 'Shear Stress', difficulty: diff,
    body: () => `A bolt diameter ${dia} mm carries shear force of ${load} kN. What is the shear stress?`,
    opts: () => {
      const a = Math.PI * dia**2 / 4;
      const t = parseFloat((load*1000 / a).toFixed(1));
      return shuffle([`${t} MPa`, `${(t*1.3).toFixed(1)} MPa`, `${(t*0.7).toFixed(1)} MPa`, `${(t*0.5).toFixed(1)} MPa`]);
    },
    ans: (o) => o.indexOf(`${parseFloat((load*1000/(Math.PI*dia**2/4)).toFixed(1))} MPa`),
    keyConcept: 'τ = V/A. Shear stress is force parallel to cross-section divided by area.',
    steps: () => [`A = π(${dia})²/4 = ${(Math.PI*dia**2/4).toFixed(1)} mm²`, `τ = ${load*1000}/${(Math.PI*dia**2/4).toFixed(1)} = ${(load*1000/(Math.PI*dia**2/4)).toFixed(1)} MPa`],
    formula: 'τ = V/A'
  }));
}));

// --- Strength: Bending Moment ---
templates.push(...['average', 'hard'].flatMap(diff => {
  const data = diff === 'average'
    ? [[6,20],[5,15],[8,30],[4,12],[7,25]]
    : [[10,50],[12,60],[8,40],[15,80],[9,45]];
  return data.map(([L, P]) => ({
    area: 'C', subTopic: 'strength', topic: 'Bending Moment', difficulty: diff,
    body: () => `A simply supported beam ${L} m span carries point load P = ${P} kN at midspan. What is max bending moment?`,
    opts: () => {
      const m = parseFloat((P * L / 4).toFixed(1));
      return shuffle([`${m} kN·m`, `${(m*1.6).toFixed(1)} kN·m`, `${(m*0.6).toFixed(1)} kN·m`, `${(m*0.4).toFixed(1)} kN·m`]);
    },
    ans: (o) => o.indexOf(`${parseFloat((P*L/4).toFixed(1))} kN·m`),
    keyConcept: 'M_max = PL/4 for point load at midspan of simply supported beam.',
    steps: () => [`R_A = R_B = P/2 = ${P/2} kN`, `M_max = R_A × L/2 = ${P/2} × ${L/2} = ${(P*L/4).toFixed(1)} kN·m`],
    formula: 'M_max = PL/4'
  }));
}));

// --- Strength: Deflection ---
templates.push(...['average', 'hard'].flatMap(diff => {
  const data = diff === 'average'
    ? [[2,5,60000],[2.5,8,80000],[3,10,100000],[1.5,4,40000]]
    : [[4,15,120000],[3,12,90000],[5,20,150000],[3.5,18,110000]];
  return data.map(([L, P, ei]) => ({
    area: 'C', subTopic: 'strength', topic: 'Deflection', difficulty: diff,
    body: () => `Cantilever beam length ${L} m, point load ${P} kN at free end. EI = ${(ei/1000).toFixed(0)} × 10³ kN·m². What is max deflection?`,
    opts: () => {
      const defl = parseFloat((P * L**3 / (3 * ei) * 1000).toFixed(1));
      return shuffle([`${defl} mm`, `${(defl*1.5).toFixed(1)} mm`, `${(defl*0.5).toFixed(1)} mm`, `${(defl*2).toFixed(1)} mm`]);
    },
    ans: (o) => o.indexOf(`${parseFloat((P*L**3/(3*ei)*1000).toFixed(1))} mm`),
    keyConcept: 'δ_max = PL³/3EI for cantilever with end load.',
    steps: () => [`δ = ${P} × ${L}³ / (3 × ${ei/1000} × 10³)`, `δ = ${P*L**3} / ${3*ei} = ${(P*L**3/(3*ei)).toFixed(4)} m`, `δ = ${(P*L**3/(3*ei)*1000).toFixed(1)} mm`],
    formula: 'δ_max = PL³/3EI'
  }));
}));

// --- Psychrometrics: Vapor Pressure ---
templates.push(...['easy', 'average'].flatMap(diff => {
  const data = diff === 'easy'
    ? [[2.34,60],[3.17,50],[4.24,55],[2.98,65]]
    : [[5.63,70],[7.38,60],[9.59,50],[4.76,80]];
  return data.map(([pvs, rh]) => ({
    area: 'C', subTopic: 'bioprocess', topic: 'Psychrometrics', difficulty: diff,
    body: () => `At 25°C, saturation vapor pressure = ${pvs} kPa. RH = ${rh}%. What is actual vapor pressure?`,
    opts: () => {
      const pv = parseFloat((pvs * rh / 100).toFixed(2));
      return shuffle([String(pv), (pv*1.5).toFixed(2), (pv*0.6).toFixed(2), (pv*2).toFixed(2)]);
    },
    ans: (o) => o.indexOf(String(parseFloat((pvs*rh/100).toFixed(2)))),
    keyConcept: 'P_v = RH × P_vs. Actual VP = RH × saturation VP.',
    steps: () => [`P_v = ${rh/100} × ${pvs} = ${(pvs*rh/100).toFixed(2)} kPa`],
    formula: 'P_v = RH × P_vs'
  }));
}));

// --- Psychrometrics: Humidity Ratio ---
templates.push(...['easy', 'average'].flatMap(diff => {
  const data = diff === 'easy'
    ? [[2.0,101.3],[2.5,101.3],[1.5,101.3],[3.0,101.3]]
    : [[3.5,101.3],[4.0,101.3],[2.8,101.3],[5.0,101.3]];
  return data.map(([pv, patm]) => ({
    area: 'C', subTopic: 'bioprocess', topic: 'Psychrometrics', difficulty: diff,
    body: () => `Air: vapor pressure = ${pv} kPa, P_atm = ${patm} kPa. What is humidity ratio?`,
    opts: () => {
      const w = parseFloat((0.622 * pv / (patm - pv)).toFixed(4));
      return shuffle([String(w), (w*1.5).toFixed(4), (w*0.5).toFixed(4), (w*0.7).toFixed(4)]);
    },
    ans: (o) => o.indexOf(String(parseFloat((0.622*pv/(patm-pv)).toFixed(4)))),
    keyConcept: 'W = 0.622 × P_v / (P - P_v).',
    steps: () => [`W = 0.622 × ${pv} / (${patm} - ${pv})`, `W = ${(0.622*pv).toFixed(4)} / ${(patm-pv).toFixed(1)} = ${(0.622*pv/(patm-pv)).toFixed(4)} kg/kg DA`],
    formula: 'W = 0.622 × P_v / (P - P_v)'
  }));
}));

// --- Psychrometrics: Enthalpy ---
templates.push(...['average', 'hard'].flatMap(diff => {
  const data = diff === 'average'
    ? [[30,0.015],[35,0.020],[28,0.012],[32,0.018],[25,0.010]]
    : [[40,0.025],[45,0.030],[38,0.022],[42,0.028],[35,0.024]];
  return data.map(([t, w]) => ({
    area: 'C', subTopic: 'bioprocess', topic: 'Psychrometrics', difficulty: diff,
    body: () => `Air at ${t}°C DB, W = ${w} kg/kg DA. Calculate specific enthalpy using h = 1.005T + W(2501 + 1.88T) kJ/kg DA.`,
    opts: () => {
      const h = parseFloat((1.005*t + w*(2501 + 1.88*t)).toFixed(1));
      return shuffle([String(h), (h*1.2).toFixed(1), (h*0.8).toFixed(1), (h*0.6).toFixed(1)]);
    },
    ans: (o) => o.indexOf(String(parseFloat((1.005*t+w*(2501+1.88*t)).toFixed(1)))),
    keyConcept: 'h = sensible heat of dry air + latent + sensible of vapor.',
    steps: () => [`h = 1.005(${t}) + ${w}(2501 + 1.88×${t})`, `h = ${(1.005*t).toFixed(2)} + ${w}(${(2501+1.88*t).toFixed(1)})`, `h = ${(1.005*t+w*(2501+1.88*t)).toFixed(1)} kJ/kg DA`],
    formula: 'h = 1.005T + W(2501 + 1.88T)'
  }));
}));

// --- Food Processing: Moisture Content ---
templates.push(...['easy', 'average'].flatMap(diff => {
  const data = diff === 'easy'
    ? [[200,15],[300,12],[250,18],[180,20],[350,14]]
    : [[500,22],[400,25],[600,20],[450,28],[550,24]];
  return data.map(([total, mc]) => ({
    area: 'C', subTopic: 'bioprocess', topic: 'Moisture Content', difficulty: diff,
    body: () => `A grain sample weighs ${total} g, moisture content = ${mc}% (wet basis). What is water mass?`,
    opts: () => {
      const w = parseFloat((total * mc / 100).toFixed(1));
      return shuffle([String(w), (w*1.3).toFixed(1), (w*0.7).toFixed(1), (w*0.5).toFixed(1)]);
    },
    ans: (o) => o.indexOf(String(parseFloat((total*mc/100).toFixed(1)))),
    keyConcept: 'Wet basis MC = water mass / total mass × 100%.',
    steps: () => [`M_water = ${total} × ${mc/100} = ${(total*mc/100).toFixed(1)} g`],
    formula: 'M_water = M_total × MC_wb'
  }));
}));

// --- Food Processing: Drying ---
templates.push(...['easy', 'average', 'hard'].flatMap(diff => {
  const data = diff === 'easy'
    ? [[1000,850],[2000,1700],[500,425],[1500,1275]]
    : [[5000,4200],[3000,2500],[4000,3400],[6000,5100]]
    .concat(diff === 'hard' ? [[1000,24,14],[2000,28,16],[5000,22,12],[3000,26,15]] : []);
  if (diff === 'hard') {
    return data.map(([w_i, mci, mcf]) => ({
      area: 'C', subTopic: 'bioprocess', topic: 'Drying', difficulty: 'hard',
      body: () => `${w_i} kg of grain at ${mci}% MC is dried to ${mcf}% MC. How much water is removed?`,
      opts: () => {
        const dm = w_i * (1 - mci/100);
        const wf = dm / (1 - mcf/100);
        const removed = parseFloat((w_i - wf).toFixed(1));
        return shuffle([String(removed), (removed*1.2).toFixed(1), (removed*0.8).toFixed(1), (removed*0.6).toFixed(1)]);
      },
      ans: (o) => o.indexOf(String(parseFloat((w_i - w_i*(1-mci/100)/(1-mcf/100)).toFixed(1)))),
      keyConcept: 'Dry matter conserved: W_i(1-MC_i) = W_f(1-MC_f). Water removed = W_i - W_f.',
      steps: () => [`Dry matter = ${w_i} × (1-${mci/100}) = ${(w_i*(1-mci/100)).toFixed(1)} kg`, `Final weight = ${(w_i*(1-mci/100)).toFixed(1)} / (1-${mcf/100}) = ${(w_i*(1-mci/100)/(1-mcf/100)).toFixed(1)} kg`, `Water removed = ${w_i} - ${(w_i*(1-mci/100)/(1-mcf/100)).toFixed(1)} = ${(w_i-w_i*(1-mci/100)/(1-mcf/100)).toFixed(1)} kg`],
      formula: 'W_removed = W_i × (MCi - MCf) / (1 - MCf)'
    }));
  }
  return data.map(([init, fin]) => ({
    area: 'C', subTopic: 'bioprocess', topic: 'Drying', difficulty: diff,
    body: () => `Wet grain weighs ${init} kg, dried to ${fin} kg. What is moisture removed?`,
    opts: () => {
      const r = init - fin;
      return shuffle([`${r} kg`, `${Math.round(r*1.2)} kg`, `${Math.round(r*0.8)} kg`, `${Math.round(r*1.5)} kg`]);
    },
    ans: (o) => o.indexOf(`${init-fin} kg`),
    keyConcept: 'Mass loss = Initial - Final. Dry matter is conserved.',
    steps: () => [`Moisture removed = ${init} - ${fin} = ${init-fin} kg`]
  }));
}).flat());

// --- Food Processing: D-value ---
templates.push(...['average', 'hard'].flatMap(diff => {
  const data = diff === 'average'
    ? [[1.0,12,121],[1.5,10,121],[0.8,14,121],[2.0,8,121]]
    : [[2.5,10,121],[3.0,8,121],[1.2,15,121],[1.8,12,121]];
  return data.map(([dVal, logRed, temp]) => ({
    area: 'C', subTopic: 'bioprocess', topic: 'Thermal Processing', difficulty: diff,
    body: () => `D-value at ${temp}°C = ${dVal} min. For ${logRed}D reduction (commercial sterility), what is the process time?`,
    opts: () => {
      const t = parseFloat((dVal * logRed).toFixed(1));
      return shuffle([`${t} min`, `${(t*1.2).toFixed(1)} min`, `${(t*0.8).toFixed(1)} min`, `${(t*0.5).toFixed(1)} min`]);
    },
    ans: (o) => o.indexOf(`${parseFloat((dVal*logRed).toFixed(1))} min`),
    keyConcept: 't = D × log(N₀/N). Process time = D-value × log reduction.',
    steps: () => [`t = ${dVal} × ${logRed} = ${(dVal*logRed).toFixed(1)} min`],
    formula: 't = D × log(N₀/N)'
  }));
}));

// --- Environment: BOD ---
templates.push(...['easy', 'average'].flatMap(diff => {
  const data = diff === 'easy'
    ? [[8,3],[7,2],[9,4],[6,1.5],[8.5,3.5]]
    : [[12,5],[15,8],[10,3],[14,6],[18,9]];
  return data.map(([doi, dof]) => ({
    area: 'C', subTopic: 'environment', topic: 'BOD', difficulty: diff,
    body: () => `Wastewater: initial DO = ${doi} mg/L, final DO = ${dof} mg/L after 5 days at 20°C. What is 5-day BOD?`,
    opts: () => {
      const bod = parseFloat((doi - dof).toFixed(1));
      return shuffle([String(bod), (bod*1.5).toFixed(1), (bod*0.5).toFixed(1), (bod*2).toFixed(1)]);
    },
    ans: (o) => o.indexOf(String(parseFloat((doi-dof).toFixed(1)))),
    keyConcept: 'BOD = DO_initial - DO_final. Measures oxygen consumed by microorganisms.',
    steps: () => [`BOD = ${doi} - ${dof} = ${(doi-dof).toFixed(1)} mg/L`],
    formula: 'BOD = DO_i - DO_f'
  }));
}));

// --- Environment: Biogas ---
templates.push(...['hard'].flatMap(diff => {
  const data = [[500,80,20,0.35,60],[300,75,25,0.30,55],[1000,85,15,0.40,65],[750,78,22,0.38,58]];
  return data.map(([waste, moist, vsPct, yieldVal, ch4Pct]) => ({
    area: 'C', subTopic: 'environment', topic: 'Biogas Production', difficulty: 'hard',
    body: () => `Farm: ${waste} kg/day manure, ${moist}% moisture. VS = ${vsPct}% of DM. Biogas yield = ${yieldVal} m³/kg VS. Methane = ${ch4Pct}%. Daily CH₄ production?`,
    opts: () => {
      const dm = waste * (1 - moist/100);
      const vs = dm * vsPct/100;
      const ch4 = parseFloat((vs * yieldVal * ch4Pct/100).toFixed(1));
      return shuffle([`${ch4} m³/day`, `${(ch4*1.5).toFixed(1)} m³/day`, `${(ch4*0.6).toFixed(1)} m³/day`, `${(ch4*2).toFixed(1)} m³/day`]);
    },
    ans: (o) => o.indexOf(`${parseFloat((waste*(1-moist/100)*vsPct/100*yieldVal*ch4Pct/100).toFixed(1))} m³/day`),
    keyConcept: 'CH₄ = Waste × (1-moisture) × VS% × yield × CH₄%',
    steps: () => [`DM = ${waste} × (1-${moist/100}) = ${(waste*(1-moist/100)).toFixed(1)} kg`, `VS = ${(waste*(1-moist/100)).toFixed(1)} × ${vsPct/100} = ${(waste*(1-moist/100)*vsPct/100).toFixed(1)} kg`, `Biogas = ${(waste*(1-moist/100)*vsPct/100).toFixed(1)} × ${yieldVal} = ${(waste*(1-moist/100)*vsPct/100*yieldVal).toFixed(1)} m³`, `CH₄ = ${(waste*(1-moist/100)*vsPct/100*yieldVal).toFixed(1)} × ${ch4Pct/100} = ${(waste*(1-moist/100)*vsPct/100*yieldVal*ch4Pct/100).toFixed(1)} m³/day`],
    formula: 'CH₄ = Waste × (1-m) × VS × y × f_CH4'
  }));
}));

// --- Electrification: Voltage Drop ---
templates.push(...['average', 'hard'].flatMap(diff => {
  const data = diff === 'average'
    ? [[3,100,5.5,35],[5,150,8.0,28],[2,200,5.5,40],[4,120,3.5,30]]
    : [[10,300,8.0,50],[15,250,5.5,45],[8,400,14.0,60],[12,350,8.0,55]];
  return data.map(([L, I, A, rho]) => ({
    area: 'C', subTopic: 'strength', topic: 'Farm Electrification', difficulty: diff,
    body: () => `A ${L} m circuit carries ${I} A with ${A} mm² conductor (ρ = ${rho} Ω·mm²/km). What is the voltage drop? (single phase)`,
    opts: () => {
      const r = rho * 2 * L / 1000 / A;
      const vd = parseFloat((I * r).toFixed(2));
      return shuffle([String(vd), (vd*1.5).toFixed(2), (vd*0.6).toFixed(2), (vd*2).toFixed(2)]);
    },
    ans: (o) => o.indexOf(String(parseFloat((I * rho * 2 * L / 1000 / A).toFixed(2)))),
    keyConcept: 'VD = I × R = I × (2Lρ/A). Single phase uses 2× length for round trip.',
    steps: () => [`R = ρ × 2L / A = ${rho} × ${2*L} / ${A} / 1000 = ${(rho*2*L/1000/A).toFixed(4)} Ω`, `VD = I × R = ${I} × ${(rho*2*L/1000/A).toFixed(4)} = ${(I*rho*2*L/1000/A).toFixed(2)} V`],
    formula: 'VD = 2ILρ/A'
  }));
}));

// --- Electrification: Lighting ---
templates.push(...['average', 'hard'].flatMap(diff => {
  const data = diff === 'average'
    ? [[10,20,8,12],[15,18,10,15],[12,22,9,14]]
    : [[6,36,8,15],[8,30,6,12],[5,40,10,18]];
  return data.map(([length, width, numLamps, watts]) => ({
    area: 'C', subTopic: 'strength', topic: 'Farm Electrification', difficulty: diff,
    body: () => `A room ${length}×${width} m has ${numLamps} lamps of ${watts} W each, 65 lm/W. What is average illumination in lux?`,
    opts: () => {
      const lumens = numLamps * watts * 65;
      const area = length * width;
      const lux = parseFloat((lumens / area).toFixed(1));
      return shuffle([String(lux), (lux*1.4).toFixed(1), (lux*0.6).toFixed(1), (lux*0.8).toFixed(1)]);
    },
    ans: (o) => o.indexOf(String(parseFloat((numLamps*watts*65/(length*width)).toFixed(1)))),
    keyConcept: 'Illuminance = Total lumens / Area.',
    steps: () => [`Lumens = ${numLamps}×${watts}×65 = ${numLamps*watts*65} lm`, `Area = ${length}×${width} = ${length*width} m²`, `E = ${numLamps*watts*65}/${length*width} = ${(numLamps*watts*65/(length*width)).toFixed(1)} lux`],
    formula: 'E = Total lumens / Area'
  }));
}));

// --- Combined Loading ---
templates.push(...['hard'].flatMap(diff => {
  const data = [[200,300,200,50],[250,400,300,60],[200,400,250,45],[300,500,350,55]];
  return data.map(([b, h, P, e]) => ({
    area: 'C', subTopic: 'strength', topic: 'Combined Loading', difficulty: 'hard',
    body: () => `Column ${b}×${h} mm carries eccentric load P = ${P} kN at e = ${e} mm from centroid. What is max compressive stress?`,
    opts: () => {
      const A = b*h;
      const I = b*h**3/12;
      const c = h/2;
      const direct = P*1000/A;
      const bending = P*1000*e*c/I;
      const maxS = parseFloat((direct + bending).toFixed(2));
      return shuffle([String(maxS), (maxS*1.3).toFixed(2), (maxS*0.7).toFixed(2), (maxS*0.5).toFixed(2)]);
    },
    ans: (o) => o.indexOf(String(parseFloat((P*1000/(b*h) + P*1000*e*(h/2)/(b*h**3/12)).toFixed(2)))),
    keyConcept: 'σ_max = P/A ± Mc/I. Eccentric loading = direct + bending.',
    steps: () => [`A = ${b}×${h} = ${b*h} mm²`, `I = bh³/12 = ${b}×${h}³/12 = ${(b*h**3/12).toFixed(0)} mm⁴`, `σ_direct = ${P*1000}/${b*h} = ${(P*1000/(b*h)).toFixed(2)} MPa`, `σ_bending = ${P*1000}×${e}×${h/2}/${(b*h**3/12).toFixed(0)} = ${(P*1000*e*(h/2)/(b*h**3/12)).toFixed(2)} MPa`, `σ_max = ${(P*1000/(b*h)).toFixed(2)} + ${(P*1000*e*(h/2)/(b*h**3/12)).toFixed(2)} = ${(P*1000/(b*h)+P*1000*e*(h/2)/(b*h**3/12)).toFixed(2)} MPa`],
    formula: 'σ = P/A ± My/I'
  }));
}));

// ==========================================
// RANDOMIZED MULTI-GENERATOR
// Generates hundreds more unique questions by varying random parameters
// ==========================================

// Area A: Fluid Mechanics (hydrostatic, flow rate, bernoulli variants)
for (let i = 0; i < 40; i++) {
  const d = randFloat(2, 200, 1);
  const diff = d < 15 ? 'easy' : d < 50 ? 'average' : 'hard';
  templates.push({
    area: 'A', subTopic: 'fluid-mechanics', topic: 'Hydrostatic Pressure', difficulty: diff,
    body: () => diff === 'hard'
      ? `A diver is ${d} m below water surface. Absolute pressure? (atm=101.3 kPa, ρ=1000, g=9.81)`
      : `What is hydrostatic pressure at ${d} m depth in water? (ρ=1000 kg/m³, g=9.81 m/s²)`,
    opts: () => {
      const g = parseFloat((d*9.81).toFixed(2));
      const abs = parseFloat((d*9.81+101.3).toFixed(2));
      return diff === 'hard'
        ? shuffle([String(abs), String(parseFloat((abs*0.7).toFixed(2))), String(parseFloat((abs*1.3).toFixed(2))), String(parseFloat((abs*0.5).toFixed(2)))])
        : shuffle([String(g), String(parseFloat((g*0.5).toFixed(2))), String(parseFloat((g*2).toFixed(2))), String(parseFloat((g*1.5).toFixed(2)))]);
    },
    ans: (o) => o.indexOf(String(parseFloat((diff==='hard'?d*9.81+101.3:d*9.81).toFixed(2)))),
    keyConcept: 'P = ρgh. Pressure increases linearly with depth.',
    steps: () => diff === 'hard'
      ? [`P_gauge = 1000×9.81×${d} = ${(d*9.81).toFixed(2)} kPa`, `P_abs = 101.3 + ${(d*9.81).toFixed(2)} = ${(d*9.81+101.3).toFixed(2)} kPa`]
      : [`P = 1000×9.81×${d}`, `P = ${(d*9.81).toFixed(2)} kPa`],
    formula: 'P = ρgh'
  });
}

// Area A: Fluid Mechanics - Continuity  
for (let i = 0; i < 20; i++) {
  const d1 = randInt(10, 60);
  const d2 = randInt(4, Math.round(d1*0.7));
  const diff = d1 < 25 ? 'easy' : 'average';
  const v1 = randFloat(1.5, 5, 1);
  templates.push({
    area: 'A', subTopic: 'fluid-mechanics', topic: 'Continuity Equation', difficulty: diff,
    body: () => `Pipe: d₁=${d1}cm v₁=${v1}m/s, d₂=${d2}cm. Find v₂.`,
    opts: () => {
      const a1 = Math.PI*(d1/200)**2;
      const a2 = Math.PI*(d2/200)**2;
      const v2 = parseFloat((a1*v1/a2).toFixed(1));
      return shuffle([String(v2), String(parseFloat((v2*1.4).toFixed(1))), String(parseFloat((v2*0.6).toFixed(1))), String(parseFloat((v2*0.8).toFixed(1)))]);
    },
    ans: (o) => o.indexOf(String(parseFloat((Math.PI*(d1/200)**2*v1/(Math.PI*(d2/200)**2)).toFixed(1)))),
    keyConcept: 'A₁v₁ = A₂v₂. Velocity increases as area decreases.',
    steps: () => [`v₂ = (π(${d1/2})² × ${v1}) / (π(${d2/2})²)`, `v₂ = ${(Math.PI*(d1/200)**2*v1/(Math.PI*(d2/200)**2)).toFixed(1)} m/s`],
    formula: 'A₁v₁ = A₂v₂'
  });
}

// Area A: Thermodynamics - Heat Transfer
for (let i = 0; i < 25; i++) {
  const k = randFloat(0.3, 2.0, 2);
  const L = randFloat(0.08, 0.4, 2);
  const A = randInt(5, 30);
  const dT = randInt(10, 80);
  const diff = dT < 30 ? 'easy' : 'average';
  templates.push({
    area: 'A', subTopic: 'thermodynamics', topic: 'Heat Transfer', difficulty: diff,
    body: () => `Wall: k=${k} W/m·K, L=${L}m, A=${A}m², ΔT=${dT}°C. Heat transfer rate?`,
    opts: () => {
      const q = parseFloat((k*A*dT/L).toFixed(0));
      return shuffle([String(q), String(parseFloat((q*1.5).toFixed(0))), String(parseFloat((q*0.5).toFixed(0))), String(parseFloat((q*2).toFixed(0)))]);
    },
    ans: (o) => o.indexOf(String(parseFloat((k*A*dT/L).toFixed(0)))),
    keyConcept: 'Fourier\'s law: Q̇ = kA(ΔT/L).',
    steps: () => [`Q̇ = ${k}×${A}×${dT}/${L}`, `Q̇ = ${(k*A*dT/L).toFixed(0)} W`],
    formula: 'Q̇ = kAΔT/L'
  });
}

// Area A: ICE - Engine Displacement
for (let i = 0; i < 20; i++) {
  const bore = randInt(75, 120);
  const stroke = randInt(75, 120);
  const cyl = [2,3,4,6,8][randInt(0,4)];
  const diff = cyl < 4 ? 'easy' : 'average';
  templates.push({
    area: 'A', subTopic: 'ice', topic: 'Engine Displacement', difficulty: diff,
    body: () => `${cyl}-cyl engine: bore=${bore}mm, stroke=${stroke}mm. Displacement?`,
    opts: () => {
      const total = parseFloat((Math.PI/4*bore**2*stroke*cyl/1e6).toFixed(1));
      return shuffle([String(total), String(parseFloat((total*1.2).toFixed(1))), String(parseFloat((total*0.8).toFixed(1))), String(parseFloat((total*0.6).toFixed(1)))]);
    },
    ans: (o) => o.indexOf(String(parseFloat((Math.PI/4*bore**2*stroke*cyl/1e6).toFixed(1)))),
    keyConcept: 'V_d = (π/4)D²L×n.',
    steps: () => [`A = π/4×${bore}² = ${(Math.PI/4*bore**2).toFixed(0)} mm²`, `Total = ${(Math.PI/4*bore**2).toFixed(0)}×${stroke}×${cyl} = ${(Math.PI/4*bore**2*stroke*cyl/1e6).toFixed(1)} cm³`],
    formula: 'V_d = (π/4)D²Ln'
  });
}

// Area A: ICE - Power/Torque
for (let i = 0; i < 20; i++) {
  const p_kw = randInt(30, 250);
  const rpm = [1800,2000,2200,2400,2600,2800,3000,3500][randInt(0,7)];
  const diff = p_kw < 100 ? 'easy' : 'average';
  templates.push({
    area: 'A', subTopic: 'ice', topic: 'Engine Power', difficulty: diff,
    body: () => `Engine: ${p_kw} kW at ${rpm} RPM. Torque?`,
    opts: () => {
      const t = parseFloat((9549*p_kw/rpm).toFixed(1));
      return shuffle([String(t), String(parseFloat((t*1.3).toFixed(1))), String(parseFloat((t*0.7).toFixed(1))), String(parseFloat((t*0.5).toFixed(1)))]);
    },
    ans: (o) => o.indexOf(String(parseFloat((9549*p_kw/rpm).toFixed(1)))),
    keyConcept: 'T = 9549 × P(kW) / N(rpm).',
    steps: () => [`T = 9549×${p_kw}/${rpm}`, `T = ${(9549*p_kw/rpm).toFixed(1)} N·m`],
    formula: 'T = 9549 × P / N'
  });
}

// Area A: Engineering Economy - Simple & Compound Interest
for (let i = 0; i < 30; i++) {
  const p = randInt(10000, 500000);
  const r = randInt(5, 15);
  const t = randInt(1, 10);
  const isCompound = Math.random() > 0.5;
  const diff = (t < 4 && !isCompound) ? 'easy' : 'average';
  templates.push({
    area: 'A', subTopic: 'engineering-economy', topic: isCompound ? 'Compound Interest' : 'Simple Interest', difficulty: diff,
    body: () => isCompound
      ? `₱${p.toLocaleString()} at ${r}% compounded annually for ${t} years. Future value?`
      : `₱${p.toLocaleString()} at ${r}% simple interest for ${t} years. Interest?`,
    opts: () => {
      const val = isCompound ? Math.round(p*(1+r/100)**t) : Math.round(p*r/100*t);
      return shuffle([`₱${val.toLocaleString()}`, `₱${Math.round(val*1.2).toLocaleString()}`, `₱${Math.round(val*0.8).toLocaleString()}`, `₱${Math.round(val*0.6).toLocaleString()}`]);
    },
    ans: (o) => o.indexOf(`₱${Math.round(isCompound ? p*(1+r/100)**t : p*r/100*t).toLocaleString()}`),
    keyConcept: isCompound ? 'A = P(1+i)^n. Compound interest earns interest on interest.' : 'I = Prt. Simple interest on original principal only.',
    steps: () => isCompound
      ? [`A = ${p.toLocaleString()} × (1+${r/100})^${t}`, `A = ₱${Math.round(p*(1+r/100)**t).toLocaleString()}`]
      : [`I = ${p.toLocaleString()} × ${r/100} × ${t}`, `I = ₱${Math.round(p*r/100*t).toLocaleString()}`],
    formula: isCompound ? 'A = P(1+i)^n' : 'I = Prt'
  });
}

// Area B: Hydrology - Runoff
for (let i = 0; i < 25; i++) {
  const area = randInt(20, 200);
  const rain = randInt(30, 200);
  const c = randFloat(0.15, 0.6, 2);
  const diff = area < 80 ? 'easy' : 'average';
  templates.push({
    area: 'B', subTopic: 'hydrology', topic: 'Runoff', difficulty: diff,
    body: () => `Watershed: A=${area}km², P=${rain}mm, C=${c}. Runoff volume (million m³)?`,
    opts: () => {
      const vol = parseFloat((area*rain/1000*c).toFixed(2));
      return shuffle([String(vol), String(parseFloat((vol*1.5).toFixed(2))), String(parseFloat((vol*0.6).toFixed(2))), String(parseFloat((vol*2).toFixed(2)))]);
    },
    ans: (o) => o.indexOf(String(parseFloat((area*rain/1000*c).toFixed(2)))),
    keyConcept: 'V = P × A × C. Watch unit conversions.',
    steps: () => [`P = ${rain}mm = ${rain/1000}m`, `A = ${area}km² = ${area*1e6}m²`, `V = ${c}×${area*1e6}×${rain/1000} = ${(area*rain/1000*c).toFixed(2)}×10⁶ m³`],
    formula: 'V = P × A × C'
  });
}

// Area B: Hydrology - Rational Method
for (let i = 0; i < 20; i++) {
  const c = randFloat(0.5, 0.95, 2);
  const areaHa = randFloat(0.3, 3.0, 1);
  const intens = randInt(80, 300);
  const diff = intens < 180 ? 'average' : 'hard';
  templates.push({
    area: 'B', subTopic: 'hydrology', topic: 'Rational Method', difficulty: diff,
    body: () => `C=${c}, A=${areaHa}ha, i=${intens}mm/hr. Peak runoff in m³/s?`,
    opts: () => {
      const q = parseFloat((c*areaHa*intens/360).toFixed(3));
      return shuffle([String(q), String(parseFloat((q*1.6).toFixed(3))), String(parseFloat((q*0.5).toFixed(3))), String(parseFloat((q*2).toFixed(3)))]);
    },
    ans: (o) => o.indexOf(String(parseFloat((c*areaHa*intens/360).toFixed(3)))),
    keyConcept: 'Q = C × i × A / 360 (metric).',
    steps: () => [`Q = ${c}×${intens}×${areaHa}/360`, `Q = ${(c*areaHa*intens/360).toFixed(3)} m³/s`],
    formula: 'Q = C × i × A / 360'
  });
}

// Area B: Soil - Moisture Content
for (let i = 0; i < 20; i++) {
  const wet = randInt(120, 500);
  const dry = randInt(80, Math.round(wet*0.85));
  const diff = wet < 250 ? 'easy' : 'average';
  templates.push({
    area: 'B', subTopic: 'soil', topic: 'Moisture Content', difficulty: diff,
    body: () => `Soil: wet=${wet}g, dry=${dry}g. Moisture content?`,
    opts: () => {
      const mc = parseFloat(((wet-dry)/dry*100).toFixed(1));
      return shuffle([`${mc}%`, `${(mc*1.3).toFixed(1)}%`, `${(mc*0.7).toFixed(1)}%`, `${(mc*0.5).toFixed(1)}%`]);
    },
    ans: (o) => o.indexOf(`${parseFloat(((wet-dry)/dry*100).toFixed(1))}%`),
    keyConcept: 'MC = (M_wet - M_dry)/M_dry × 100%.',
    steps: () => [`Water = ${wet}-${dry} = ${wet-dry}g`, `MC = ${wet-dry}/${dry}×100% = ${((wet-dry)/dry*100).toFixed(1)}%`],
    formula: 'w = (M_w-M_d)/M_d × 100%'
  });
}

// Area B: Irrigation - Water Requirement
for (let i = 0; i < 20; i++) {
  const net = randInt(50, 250);
  const eff = [60,65,70,75,80,85][randInt(0,5)];
  const diff = eff > 75 ? 'easy' : 'average';
  templates.push({
    area: 'B', subTopic: 'irrigation', topic: 'Water Requirement', difficulty: diff,
    body: () => `Net=${net}mm, eff=${eff}%. Gross requirement?`,
    opts: () => {
      const gross = parseFloat((net/(eff/100)).toFixed(1));
      return shuffle([String(gross), String(parseFloat((gross*0.8).toFixed(1))), String(parseFloat((gross*1.3).toFixed(1))), String(parseFloat((gross*0.6).toFixed(1)))]);
    },
    ans: (o) => o.indexOf(String(parseFloat((net/(eff/100)).toFixed(1)))),
    keyConcept: 'GIR = NIR / E. Gross > net due to losses.',
    steps: () => [`GIR = ${net}/${eff/100} = ${(net/(eff/100)).toFixed(1)} mm`],
    formula: 'GIR = NIR / E'
  });
}

// Area C: Strength - Normal Stress
for (let i = 0; i < 20; i++) {
  const dia = randInt(8, 40);
  const load = randInt(10, 200);
  const diff = load < 80 ? 'easy' : 'average';
  templates.push({
    area: 'C', subTopic: 'strength', topic: 'Normal Stress', difficulty: diff,
    body: () => `Rod d=${dia}mm, axial load=${load}kN. Stress in MPa?`,
    opts: () => {
      const a = Math.PI*(dia/1000)**2/4;
      const s = parseFloat((load*1000/a/1e6).toFixed(1));
      return shuffle([String(s), String(parseFloat((s*1.5).toFixed(1))), String(parseFloat((s*0.7).toFixed(1))), String(parseFloat((s*2).toFixed(1)))]);
    },
    ans: (o) => o.indexOf(String(parseFloat((load*1000/(Math.PI*(dia/1000)**2/4)/1e6).toFixed(1)))),
    keyConcept: 'σ = P/A.',
    steps: () => [`A = π(${dia/1000})²/4 = ${(Math.PI*(dia/1000)**2/4).toFixed(6)} m²`, `σ = ${load*1000}/${(Math.PI*(dia/1000)**2/4).toFixed(6)} = ${(load*1000/(Math.PI*(dia/1000)**2/4)/1e6).toFixed(1)} MPa`],
    formula: 'σ = P/A'
  });
}

// Area C: Strength - Shear Stress
for (let i = 0; i < 20; i++) {
  const dia = randInt(8, 30);
  const load = randInt(5, 60);
  const diff = load < 25 ? 'easy' : 'average';
  templates.push({
    area: 'C', subTopic: 'strength', topic: 'Shear Stress', difficulty: diff,
    body: () => `Bolt d=${dia}mm, shear=${load}kN. Shear stress?`,
    opts: () => {
      const a = Math.PI*dia**2/4;
      const t = parseFloat((load*1000/a).toFixed(1));
      return shuffle([`${t} MPa`, `${(t*1.3).toFixed(1)} MPa`, `${(t*0.7).toFixed(1)} MPa`, `${(t*0.5).toFixed(1)} MPa`]);
    },
    ans: (o) => o.indexOf(`${parseFloat((load*1000/(Math.PI*dia**2/4)).toFixed(1))} MPa`),
    keyConcept: 'τ = V/A.',
    steps: () => [`A = π(${dia})²/4 = ${(Math.PI*dia**2/4).toFixed(1)} mm²`, `τ = ${load*1000}/${(Math.PI*dia**2/4).toFixed(1)} = ${(load*1000/(Math.PI*dia**2/4)).toFixed(1)} MPa`],
    formula: 'τ = V/A'
  });
}

// Area C: Psychrometrics - Vapor Pressure
for (let i = 0; i < 20; i++) {
  const pvs = randFloat(1.5, 10, 2);
  const rh = randInt(30, 90);
  const diff = rh > 60 ? 'easy' : 'average';
  templates.push({
    area: 'C', subTopic: 'bioprocess', topic: 'Psychrometrics', difficulty: diff,
    body: () => `Saturation VP=${pvs}kPa, RH=${rh}%. Actual vapor pressure?`,
    opts: () => {
      const pv = parseFloat((pvs*rh/100).toFixed(2));
      return shuffle([String(pv), String(parseFloat((pv*1.5).toFixed(2))), String(parseFloat((pv*0.6).toFixed(2))), String(parseFloat((pv*2).toFixed(2)))]);
    },
    ans: (o) => o.indexOf(String(parseFloat((pvs*rh/100).toFixed(2)))),
    keyConcept: 'P_v = RH × P_vs.',
    steps: () => [`P_v = ${rh/100} × ${pvs} = ${(pvs*rh/100).toFixed(2)} kPa`],
    formula: 'P_v = RH × P_vs'
  });
}

// Area C: Food Processing - Moisture Content
for (let i = 0; i < 20; i++) {
  const total = randInt(100, 800);
  const mc = randInt(10, 30);
  const diff = mc < 18 ? 'easy' : 'average';
  templates.push({
    area: 'C', subTopic: 'bioprocess', topic: 'Moisture Content', difficulty: diff,
    body: () => `Sample=${total}g, MC=${mc}% wb. Water mass?`,
    opts: () => {
      const w = parseFloat((total*mc/100).toFixed(1));
      return shuffle([String(w), String(parseFloat((w*1.3).toFixed(1))), String(parseFloat((w*0.7).toFixed(1))), String(parseFloat((w*0.5).toFixed(1)))]);
    },
    ans: (o) => o.indexOf(String(parseFloat((total*mc/100).toFixed(1)))),
    keyConcept: 'MC_wb = M_water / M_total × 100%.',
    steps: () => [`M_water = ${total} × ${mc/100} = ${(total*mc/100).toFixed(1)} g`],
    formula: 'M_water = M_total × MC_wb'
  });
}

// Area C: Environment - BOD
for (let i = 0; i < 20; i++) {
  const doi = randFloat(5, 18, 1);
  const dof = randFloat(1, 8, 1);
  const diff = doi < 10 ? 'easy' : 'average';
  templates.push({
    area: 'C', subTopic: 'environment', topic: 'BOD', difficulty: diff,
    body: () => `DOi=${doi}mg/L, DOf=${dof}mg/L. 5-day BOD?`,
    opts: () => {
      const bod = parseFloat((doi-dof).toFixed(1));
      return shuffle([String(bod), String(parseFloat((bod*1.5).toFixed(1))), String(parseFloat((bod*0.5).toFixed(1))), String(parseFloat((bod*2).toFixed(1)))]);
    },
    ans: (o) => o.indexOf(String(parseFloat((doi-dof).toFixed(1)))),
    keyConcept: 'BOD = DO_i - DO_f.',
    steps: () => [`BOD = ${doi} - ${dof} = ${(doi-dof).toFixed(1)} mg/L`],
    formula: 'BOD = DO_i - DO_f'
  });
}

// Area C: Electrification - Voltage Drop
for (let i = 0; i < 20; i++) {
  const L = randInt(10, 500);
  const I = randInt(10, 400);
  const A = randFloat(2, 20, 1);
  const rho = [3.5, 5.5, 8.0, 14.0][randInt(0,3)];
  const diff = L < 100 ? 'average' : 'hard';
  templates.push({
    area: 'C', subTopic: 'strength', topic: 'Farm Electrification', difficulty: diff,
    body: () => `L=${L}m, I=${I}A, cond=${A}mm², ρ=${rho}Ω·mm²/km. Single-phase voltage drop?`,
    opts: () => {
      const vd = parseFloat((I*rho*2*L/1000/A).toFixed(2));
      return shuffle([String(vd), String(parseFloat((vd*1.5).toFixed(2))), String(parseFloat((vd*0.6).toFixed(2))), String(parseFloat((vd*2).toFixed(2)))]);
    },
    ans: (o) => o.indexOf(String(parseFloat((I*rho*2*L/1000/A).toFixed(2)))),
    keyConcept: 'VD = I × 2Lρ/A (single phase).',
    steps: () => [`R = ${rho}×${2*L}/${A}/1000 = ${(rho*2*L/1000/A).toFixed(4)}Ω`, `VD = ${I}×${(rho*2*L/1000/A).toFixed(4)} = ${(I*rho*2*L/1000/A).toFixed(2)}V`],
    formula: 'VD = 2ILρ/A'
  });
}

// Area C: Combined Loading
for (let i = 0; i < 15; i++) {
  const b = randInt(150, 400);
  const h = randInt(200, 500);
  const P = randInt(100, 400);
  const e = randInt(20, 80);
  templates.push({
    area: 'C', subTopic: 'strength', topic: 'Combined Loading', difficulty: 'hard',
    body: () => `Column ${b}×${h}mm, P=${P}kN, e=${e}mm. Max compressive stress?`,
    opts: () => {
      const direct = P*1000/(b*h);
      const bending = P*1000*e*(h/2)/(b*h**3/12);
      const maxS = parseFloat((direct+bending).toFixed(2));
      return shuffle([String(maxS), String(parseFloat((maxS*1.3).toFixed(2))), String(parseFloat((maxS*0.7).toFixed(2))), String(parseFloat((maxS*0.5).toFixed(2)))]);
    },
    ans: (o) => o.indexOf(String(parseFloat((P*1000/(b*h)+P*1000*e*(h/2)/(b*h**3/12)).toFixed(2)))),
    keyConcept: 'σ_max = P/A ± Mc/I.',
    steps: () => [`σ_direct = ${P*1000}/${b*h} = ${(P*1000/(b*h)).toFixed(2)} MPa`, `σ_bending = ${P*1000}×${e}×${h/2}/${(b*h**3/12).toFixed(0)} = ${(P*1000*e*(h/2)/(b*h**3/12)).toFixed(2)} MPa`, `σ_max = ${(P*1000/(b*h)+P*1000*e*(h/2)/(b*h**3/12)).toFixed(2)} MPa`],
    formula: 'σ = P/A ± My/I'
  });
}

// Area B: Math - Quadratic (randomized)
for (let i = 0; i < 20; i++) {
  const a = randInt(1, 8);
  const b = randInt(-15, 15);
  const c = randInt(-15, 15);
  if (b*b - 4*a*c < 0) continue; // skip complex roots
  const diff = Math.abs(b) < 8 ? 'easy' : 'average';
  templates.push({
    area: 'B', subTopic: 'mathematics', topic: 'Algebra', difficulty: diff,
    body: () => `${a}x² ${b<0?'-':'+'} ${Math.abs(b)}x ${c<0?'-':'+'} ${Math.abs(c)} = 0`,
    opts: () => {
      const disc = b*b-4*a*c;
      const x1 = parseFloat(((-b+Math.sqrt(disc))/(2*a)).toFixed(1));
      const x2 = parseFloat(((-b-Math.sqrt(disc))/(2*a)).toFixed(1));
      return shuffle([`x = ${x1} or ${x2}`, `x = ${parseFloat((-x1).toFixed(1))} or ${parseFloat((-x2).toFixed(1))}`, `x = ${parseFloat((x1*2).toFixed(1))} or ${parseFloat((x2*2).toFixed(1))}`, `x = ${parseFloat((x1/2).toFixed(1))} or ${parseFloat((x2/2).toFixed(1))}`]);
    },
    ans: (o) => {
      const x1 = parseFloat(((-b+Math.sqrt(b*b-4*a*c))/(2*a)).toFixed(1));
      const x2 = parseFloat(((-b-Math.sqrt(b*b-4*a*c))/(2*a)).toFixed(1));
      return o.indexOf(`x = ${x1} or ${x2}`);
    },
    keyConcept: 'x = (-b ± √(b²-4ac))/2a.',
    steps: () => {
      const disc = b*b-4*a*c;
      const x1 = parseFloat(((-b+Math.sqrt(disc))/(2*a)).toFixed(1));
      const x2 = parseFloat(((-b-Math.sqrt(disc))/(2*a)).toFixed(1));
      return [`Disc = ${b}²-4(${a})(${c}) = ${disc}`, `x = (${-b}±√${disc})/(2×${a})`, `x = ${x1} or ${x2}`];
    },
    formula: 'x = (-b ± √(b²-4ac))/2a'
  });
}

// Final handful to push past 1000
for (let i = 0; i < 5; i++) {
  const L = randInt(3, 12);
  const P = randInt(10, 80);
  templates.push({
    area: 'C', subTopic: 'strength', topic: 'Bending Moment', difficulty: 'average',
    body: () => `Simply supported beam L=${L}m, point load P=${P}kN at midspan. Max bending moment?`,
    opts: () => {
      const m = parseFloat((P*L/4).toFixed(1));
      return shuffle([`${m} kN·m`, `${(m*1.5).toFixed(1)} kN·m`, `${(m*0.6).toFixed(1)} kN·m`, `${(m*0.4).toFixed(1)} kN·m`]);
    },
    ans: (o) => o.indexOf(`${parseFloat((P*L/4).toFixed(1))} kN·m`),
    keyConcept: 'M_max = PL/4 for point load at midspan.',
    steps: () => [`R_A = R_B = ${P/2} kN`, `M_max = ${P/2} × ${L/2} = ${(P*L/4).toFixed(1)} kN·m`],
    formula: 'M_max = PL/4'
  });
}
for (let i = 0; i < 5; i++) {
  const p = randInt(5000, 500000);
  const i_rate = randInt(5, 15);
  const n = randInt(1, 10);
  templates.push({
    area: 'A', subTopic: 'engineering-economy', topic: 'Present Worth', difficulty: Math.random()>0.5 ? 'average' : 'hard',
    body: () => `PW of ₱${p.toLocaleString()} in ${n} years at ${i_rate}% discount rate?`,
    opts: () => {
      const pw = Math.round(p/(1+i_rate/100)**n);
      return shuffle([`₱${pw.toLocaleString()}`, `₱${Math.round(pw*1.2).toLocaleString()}`, `₱${Math.round(pw*0.8).toLocaleString()}`, `₱${Math.round(pw*0.6).toLocaleString()}`]);
    },
    ans: (o) => o.indexOf(`₱${Math.round(p/(1+i_rate/100)**n).toLocaleString()}`),
    keyConcept: 'PW = F/(1+i)^n.',
    steps: () => [`PW = ${p.toLocaleString()}/(1+${i_rate/100})^${n}`, `PW = ₱${Math.round(p/(1+i_rate/100)**n).toLocaleString()}`],
    formula: 'PW = F/(1+i)^n'
  });
}

// Estimation: Concrete mix proportions (Philippine standards)
const concreteClasses = [
  { name: 'A', ratio: '1:2:4', bags40: 9.0, bags50: 7.0, sand: 0.5, gravel: 1.0 },
  { name: 'B', ratio: '1:2.5:5', bags40: 7.5, bags50: 6.0, sand: 0.5, gravel: 1.0 },
  { name: 'C', ratio: '1:3:6', bags40: 6.0, bags50: 5.0, sand: 0.5, gravel: 1.0 }
];
for (const cls of concreteClasses) {
  templates.push(
    { area: 'A', subTopic: 'engineering-economy', topic: 'Estimating', difficulty: 'easy',
      body: () => `How many 40-kg bags of cement per m³ for Class ${cls.name} concrete (${cls.ratio})?`,
      opts: () => shuffle([`${cls.bags40} bags`, `${Math.round(cls.bags40*1.3)} bags`, `${Math.round(cls.bags40*0.7)} bags`, `${Math.round(cls.bags40*0.5)} bags`]),
      ans: (o) => o.indexOf(`${cls.bags40} bags`),
      keyConcept: `Class ${cls.name} (${cls.ratio}) = ${cls.bags40} bags cement/m³.`,
      steps: () => [`Class ${cls.name} uses ${cls.ratio} cement:sand:gravel`, `${cls.bags40} bags of 40-kg cement per m³`],
      formula: 'Cement bags vary by concrete class'
    },
    { area: 'A', subTopic: 'engineering-economy', topic: 'Estimating', difficulty: 'easy',
      body: () => `How many 50-kg bags of cement per m³ for Class ${cls.name} concrete (${cls.ratio})?`,
      opts: () => shuffle([`${cls.bags50} bags`, `${Math.round(cls.bags50*1.3)} bags`, `${Math.round(cls.bags50*0.7)} bags`, `${Math.round(cls.bags50*0.5)} bags`]),
      ans: (o) => o.indexOf(`${cls.bags50} bags`),
      keyConcept: `Class ${cls.name} = ${cls.bags50} bags of 50-kg cement/m³.`,
      steps: () => [`Class ${cls.name}: ${cls.bags50} bags of 50-kg per m³`],
      formula: 'Bags = volume × bag factor'
    }
  );
}

// Estimation: Concrete volume from dimensions
for (let i = 0; i < 10; i++) {
  const L = randInt(5, 50);
  const W = randInt(2, 10);
  const thick = [0.15, 0.20, 0.25, 0.30][randInt(0,3)];
  const cls = concreteClasses[randInt(0,2)];
  const diff = L < 20 ? 'easy' : 'average';
  templates.push({
    area: 'A', subTopic: 'engineering-economy', topic: 'Estimating', difficulty: diff,
    body: () => `Slab: ${L}m×${W}m×${thick}m thick, Class ${cls.name}. How many 40-kg cement bags?`,
    opts: () => {
      const vol = parseFloat((L*W*thick).toFixed(2));
      const bags = Math.round(vol * cls.bags40);
      return shuffle([`${bags} bags`, `${Math.round(bags*1.2)} bags`, `${Math.round(bags*0.8)} bags`, `${Math.round(bags*0.6)} bags`]);
    },
    ans: (o) => o.indexOf(`${Math.round(L*W*thick*cls.bags40)} bags`),
    keyConcept: 'Cement = volume × bags/m³. Volume = L×W×t.',
    steps: () => [`Vol = ${L}×${W}×${thick} = ${(L*W*thick).toFixed(2)} m³`, `Cement = ${(L*W*thick).toFixed(2)} × ${cls.bags40} = ${Math.round(L*W*thick*cls.bags40)} bags`],
    formula: 'Cement = L × W × t × bag factor'
  });
}

// Estimation: Rebar weight
for (let i = 0; i < 10; i++) {
  const dia = [10, 12, 16, 20, 25, 28][randInt(0,5)];
  const len = randInt(3, 12);
  const bars = randInt(4, 30);
  const wtPerM = {10:0.616,12:0.888,16:1.579,20:2.466,25:3.853,28:4.834}[dia];
  const diff = dia < 16 ? 'easy' : 'average';
  templates.push({
    area: 'A', subTopic: 'engineering-economy', topic: 'Estimating', difficulty: diff,
    body: () => `Rebar ø${dia}mm × ${len}m, ${bars} pcs. Total weight? (${wtPerM} kg/m)`,
    opts: () => {
      const wt = parseFloat((wtPerM*len*bars).toFixed(1));
      return shuffle([`${wt} kg`, `${(wt*1.3).toFixed(1)} kg`, `${(wt*0.7).toFixed(1)} kg`, `${(wt*0.5).toFixed(1)} kg`]);
    },
    ans: (o) => o.indexOf(`${parseFloat((wtPerM*len*bars).toFixed(1))} kg`),
    keyConcept: 'Rebar weight = unit weight × length × number of bars.',
    steps: () => [`Weight/bar = ${wtPerM}×${len} = ${(wtPerM*len).toFixed(1)} kg`, `Total = ${(wtPerM*len).toFixed(1)}×${bars} = ${(wtPerM*len*bars).toFixed(1)} kg`],
    formula: 'W = w × L × n'
  });
}

// Estimation: Formwork area
for (let i = 0; i < 8; i++) {
  const L = randInt(3, 20);
  const W = randInt(3, 10);
  const H = randFloat(1.5, 6, 1);
  const diff = L < 10 ? 'easy' : 'average';
  templates.push({
    area: 'A', subTopic: 'engineering-economy', topic: 'Estimating', difficulty: diff,
    body: () => `Column formwork: ${L}m long wall, ${W}m wide, ${H}m high. Total formwork area (both sides)?`,
    opts: () => {
      const area = parseFloat((2*L*H).toFixed(1));
      return shuffle([`${area} m²`, `${(area*1.4).toFixed(1)} m²`, `${(area*0.6).toFixed(1)} m²`, `${(area*0.8).toFixed(1)} m²`]);
    },
    ans: (o) => o.indexOf(`${parseFloat((2*L*H).toFixed(1))} m²`),
    keyConcept: 'Formwork area = perimeter × height. Wall: both sides = 2×L×H.',
    steps: () => [`Area per side = ${L}×${H} = ${(L*H).toFixed(1)} m²`, `Both sides = 2×${(L*H).toFixed(1)} = ${(2*L*H).toFixed(1)} m²`],
    formula: 'A = 2 × L × H (wall formwork)'
  });
}

// Estimation: Excavation volume
for (let i = 0; i < 8; i++) {
  const L = randInt(5, 50);
  const W = randInt(3, 15);
  const D = randFloat(1, 5, 1);
  const swell = randInt(15, 35);
  const diff = L < 20 ? 'easy' : 'average';
  templates.push({
    area: 'A', subTopic: 'engineering-economy', topic: 'Estimating', difficulty: diff,
    body: () => `Foundation pit: ${L}m×${W}m×${D}m deep. Soil swell=${swell}%. Loose volume after excavation?`,
    opts: () => {
      const bankVol = L*W*D;
      const looseVol = parseFloat((bankVol*(1+swell/100)).toFixed(1));
      return shuffle([`${looseVol} m³`, `${parseFloat((looseVol*1.2).toFixed(1))} m³`, `${parseFloat((looseVol*0.8).toFixed(1))} m³`, `${parseFloat((looseVol*0.6).toFixed(1))} m³`]);
    },
    ans: (o) => o.indexOf(`${parseFloat((L*W*D*(1+swell/100)).toFixed(1))} m³`),
    keyConcept: 'Loose volume = bank volume × (1 + swell%). Soil expands when excavated.',
    steps: () => [`Bank vol = ${L}×${W}×${D} = ${(L*W*D).toFixed(1)} m³`, `Loose vol = ${(L*W*D).toFixed(1)} × ${1+swell/100} = ${(L*W*D*(1+swell/100)).toFixed(1)} m³`],
    formula: 'V_loose = V_bank × (1 + swell%)'
  });
}

console.log(`Total templates: ${templates.length}`);

// ==========================================
// GENERATE QUESTIONS
// ==========================================

const generated = [];
const usedQuestions = new Set();

for (const tpl of templates) {
  const qText = tpl.body();
  // Skip exact duplicates
  const key = qText.substring(0, 60);
  if (usedQuestions.has(key)) continue;
  usedQuestions.add(key);
  
  const opts = tpl.opts();
  const ansIdx = tpl.ans(opts);
  if (ansIdx < 0 || ansIdx > 3) continue;
  
  const steps = tpl.steps ? tpl.steps() : ['Apply the formula', 'Substitute values', 'Calculate result'];
  
  generated.push({
    id: nextId(),
    area: tpl.area,
    subTopic: tpl.subTopic,
    topic: tpl.topic,
    difficulty: tpl.difficulty,
    question: qText,
    options: opts,
    correctAnswer: ansIdx,
    solution: { keyConcept: tpl.keyConcept, steps },
    ...(tpl.formula ? { relatedFormulas: [tpl.formula.replace(/[^a-z0-9=+\-*/^]/gi, '-').toLowerCase().slice(0,30)] } : {}),
    weakPoints: [`${tpl.topic} calculation`, `${tpl.subTopic} principles`]
  });
}

console.log(`Generated ${generated.length} unique questions`);
console.log(`By area: A=${generated.filter(q=>q.area==='A').length}, B=${generated.filter(q=>q.area==='B').length}, C=${generated.filter(q=>q.area==='C').length}`);

// ==========================================
// OUTPUT
// ==========================================

function qToTS(q) {
  const opts = q.options.map(o => `'${es(o)}'`).join(', ');
  const steps = q.solution.steps.map(s => `'${es(s)}'`).join(', ');
  const weak = q.weakPoints.map(w => `'${es(w)}'`).join(', ');
  const rf = q.relatedFormulas ? `\n    relatedFormulas: [${q.relatedFormulas.map(f => `'${f}'`).join(', ')}],` : '';
  return `  {
    id: '${q.id}',
    area: '${q.area}',
    subTopic: '${q.subTopic}',
    topic: '${q.topic}',
    difficulty: '${q.difficulty}',
    question: '${es(q.question)}',
    options: [${opts}],
    correctAnswer: ${q.correctAnswer},
    solution: {
      keyConcept: '${es(q.solution.keyConcept)}',
      steps: [${steps}]
    },${rf}
    weakPoints: [${weak}]
  }`;
}

const areaA = generated.filter(q => q.area === 'A');
const areaB = generated.filter(q => q.area === 'B');
const areaC = generated.filter(q => q.area === 'C');

let output = `// Auto-generated bulk questions from abetutorials.blogspot.com
// Generated ${new Date().toISOString()}

import { Question } from './comprehensive-questions';

export const bulkAreaAQuestions: Question[] = [
${areaA.map((q, i) => qToTS(q) + (i < areaA.length - 1 ? ',' : '')).join('\n')}
];

export const bulkAreaBQuestions: Question[] = [
${areaB.map((q, i) => qToTS(q) + (i < areaB.length - 1 ? ',' : '')).join('\n')}
];

export const bulkAreaCQuestions: Question[] = [
${areaC.map((q, i) => qToTS(q) + (i < areaC.length - 1 ? ',' : '')).join('\n')}
];
`;

writeFileSync('C:/Users/Arzen/abe-study/src/data/bulk-questions.ts', output);
console.log('\nWritten to bulk-questions.ts');
