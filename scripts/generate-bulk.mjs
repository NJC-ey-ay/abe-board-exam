import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

function fmt(n) { return parseFloat(n.toFixed(2)); }
function pick(arr, i) { return arr[i % arr.length]; }

function shuffleOpts(correct, wrongs, i) {
  const a = [correct, ...wrongs];
  const idx = i % a.length;
  const r = [a[idx], ...a.filter((_, j) => j !== idx)];
  return { opts: r.map(x => String(typeof x === 'number' ? fmt(x) : x)), ca: r.indexOf(correct) };
}

let qid = 1000;
const arrA = [], arrB = [], arrC = [];

function pushQ(arr, area, sub, topic, diff, qText, correct, wrongs, i, concept, steps, formula, derive) {
  const { opts, ca } = shuffleOpts(correct, wrongs, i);
  const sol = { keyConcept: concept, steps, formula };
  if (derive) sol.derive = derive;
  arr.push({ id: `gen-${qid++}`, area, subTopic: sub, topic, difficulty: diff, question: qText, options: opts, correctAnswer: ca, solution: sol });
}

const P = {
  W: [1.2, 1.5, 1.8, 2.0, 2.2, 2.5, 3.0],
  S: [3, 4, 5, 6, 7, 8],
  E: [0.65, 0.70, 0.75, 0.80, 0.85, 0.90],
  N: [4, 5, 6, 7, 8],
  Sp: [0.15, 0.20, 0.25, 0.30, 0.35],
  F: [8, 10, 12, 15, 18],
  BP: [30, 40, 50, 60, 70, 80, 100],
  SFC: [0.22, 0.25, 0.28, 0.30, 0.32, 0.35],
  rho: [0.82, 0.85, 0.88, 0.90, 0.92],
  CR: [14, 16, 18, 20, 22],
  Vc: [0.05, 0.06, 0.07, 0.08, 0.10],
  nCyl: [2, 3, 4, 6],
  RPM: [1800, 2000, 2200, 2400, 2600],
  ETA: [0.75, 0.80, 0.85, 0.88, 0.90, 0.92, 0.95],
  A: [1.5, 2.0, 2.5, 3.0, 4.0, 5.0],
  d: [50, 75, 100, 120, 150],
  L: [0.08, 0.10, 0.12, 0.14, 0.16],
  Piston: [0.05, 0.06, 0.07, 0.08, 0.09],
  MEP: [600, 700, 800, 900, 1000],
  Qrate: [0.5, 1.0, 1.5, 2.0, 2.5, 3.0],
  CV: [35, 38, 40, 42, 44],
  nDisc: [4, 5, 6, 8, 10],
  D: [0.8, 1.0, 1.2, 1.5, 1.8],
  vol: [100, 200, 300, 500],
  time: [4, 5, 6, 7, 8],
  depth: [10, 15, 20, 25, 30],
  h: [3, 4, 5, 6, 8],
  T: [800, 1000, 1200, 1500],
  PTO: [30, 40, 50, 60, 75],
  DBP: [10, 15, 20, 25, 30],
  years: [2019, 2020, 2021, 2022, 2023],
  yr: [3, 4, 5, 6, 7],
  Pc: [15, 20, 25, 30, 35],
  Mf: [5, 8, 10, 12, 15],
  Me: [0.88, 0.90, 0.92, 0.94, 0.95],
  k: [1.4, 1.3, 1.35, 1.38],
  w: [3, 4, 5, 6, 8],
  Tq: [150, 200, 250, 300, 350],
  R1: [0.4, 0.5, 0.6],
  R2: [0.15, 0.20, 0.25],
  Qoil: [6, 8, 10, 12, 15],
  Cm: [0.55, 0.60, 0.65, 0.70]
};

const locs = 'Nueva Ecija|Isabela|Pangasinan|Tarlac|Cagayan|Bulacan|Laguna|Quezon|Iloilo|Negros Occ'.split('|');
const trs = 'Kubota L3301|Mitsubishi MT28|Ford 4610|Mahindra 475|MF 240|John Deere 5050E|New Holland 3630|Case IH JX75|Foton FT254|Same Frutteto'.split('|');
const crops = 'rice|corn|sugarcane|banana|coconut|coffee|cacao|pineapple|mango|tobacco'.split('|');
const impls = 'disc plow|moldboard plow|tandem disc harrow|rotavator|spring-tooth harrow|chisel plow|subsoiler|offset disc harrow|spike-tooth harrow|bed former'.split('|');
const brds = 'Kubota|Mitsubishi|Ford|Mahindra|MF|John Deere|New Holland|Case IH|Foton|Same'.split('|');
const soils = 'clay loam|sandy loam|silty clay|loam|clay|sandy clay loam|silt loam'.split('|');
const weat = 'sunny|partly cloudy|overcast|light rain|fair'.split('|');
const opnm = 'Juan|Pedro|Carlos|Ramon|Mario|Jose|Ricky|Rudy|Ben|Leo'.split('|');
const provs = 'Pampanga|Batangas|Cavite|Rizal|Laguna|Quezon|Mindoro|Bataan|Zambales|Aurora'.split('|');
const varty = 'NSIC Rc222|NSIC Rc160|USM Var 10|IPB Var 1|PSB Rc18|NSIC Rc192|USM Var 22|IPB Var 6|PSB Rc82|NSIC Rc480'.split('|');
const fert = '14-14-14|16-20-0|46-0-0|0-0-60|21-0-0|14-14-8'.split('|');

// ==================== AREA A: POWER, ENERGY & MACHINERY ====================

// A1: Field Capacity (easy, 40)
(() => {
  for (let i = 0; i < 40; i++) {
    const W = pick(P.W, i), S = pick(P.S, Math.floor(i / 7)), E = pick(P.E, Math.floor(i / 42));
    const c = pick(crops, i), l = pick(locs, Math.floor(i / 8)), t = pick(trs, i), im = pick(impls, Math.floor(i / 5));
    const y = pick(P.years, Math.floor(i / 10)), v = pick(varty, i);
    const C = fmt((W * S * E) / 10);
    const q = `A farmer in ${l} owns a 6.5 ha field planted with ${c} (variety ${v}). He operates a ${t} pulling a ${im} with effective working width of ${W} m at ${S} km/h. Field efficiency is ${(E * 100).toFixed(0)}%. The fuel tank holds 40 L and fuel price is P55/L. His previous, narrower implement took 3 extra days per season. What is the effective field capacity in ha/h?`;
    pushQ(arrA, 'A', 'agri-machinery', 'Field Capacity', 'easy', q, C, [fmt((W * S) / 10), fmt((W * S * (E + 0.1)) / 10), fmt((W * S * (E - 0.05)) / 10)], i, 'Effective field capacity = (W × S × E) / 10. Constant 10 converts from m·km/h to ha/h.', [`C = (${W} × ${S} × ${E}) / 10 = ${C} ha/h`], 'C = (W × S × E) / 10');
  }
})();

// A2: Multi-row planter capacity (average, 35)
(() => {
  for (let i = 0; i < 35; i++) {
    const N = pick(P.N, i), Sp = pick(P.Sp, Math.floor(i / 5)), S = pick(P.S, Math.floor(i / 8)), E = pick(P.E, Math.floor(i / 35));
    const W = fmt(N * Sp);
    const C = fmt((W * S * E) / 10);
    const l = pick(locs, i), t = pick(trs, Math.floor(i / 4)), c = pick(crops, Math.floor(i / 7));
    const v = pick(varty, Math.floor(i / 5)), y = pick(P.years, Math.floor(i / 12));
    const q = `A ${t} tows a ${N}-row planter with ${Sp} m row spacing. Operating speed is ${S} km/h. Field efficiency is ${(E * 100).toFixed(0)}%. The field is ${c} in ${l} planted with variety ${v}. Total field area is 8.0 ha. Previous season yield was 4.8 t/ha. Seed cost is P2,500/bag. What is the effective field capacity in ha/h?`;
    pushQ(arrA, 'A', 'agri-machinery', 'Multi-row Planter Capacity', 'average', q, C, [fmt((W * S) / 10), fmt((W * S * (E + 0.1)) / 10), fmt((N * S * E) / 10)], i, 'For multi-row planters, total working width W = number of rows × row spacing. Then apply C = (W × S × E) / 10.', [`W = ${N} × ${Sp} = ${W} m`, `C = (${W} × ${S} × ${E}) / 10 = ${C} ha/h`], 'C = (N × Sp × S × E) / 10');
  }
})();

// A3: Drawbar power (average, 35)
(() => {
  for (let i = 0; i < 35; i++) {
    const F = pick(P.F, i), S = pick(P.S, Math.floor(i / 5)), E = pick(P.E, Math.floor(i / 35));
    const BP = fmt((F * S) / 3.6);
    const l = pick(locs, i), t = pick(trs, Math.floor(i / 4)), sm = pick(soils, Math.floor(i / 6));
    const im = pick(impls, Math.floor(i / 5)), d = pick(P.depth, Math.floor(i / 7));
    const q = `A ${t} pulls a ${im} with ${d} cm working depth in ${sm} soil at ${S} km/h. The implement draft is ${F} kN. The tractor's PTO power rating is ${pick(P.PTO, i)} HP. Tractor weighs ${pick(P.T, i)} kg. What is the drawbar power in kW?`;
    pushQ(arrA, 'A', 'agri-machinery', 'Drawbar Power', 'average', q, BP, [fmt((F * S) / 3.6 * 1.1), fmt((F * S) / 3.6 * 0.9), fmt(F * S)], i, 'Drawbar power (kW) = Draft (kN) × Speed (km/h) / 3.6. The 3.6 converts km/h to m/s and kN·m/s to kW.', [`P = (${F} × ${S}) / 3.6 = ${BP} kW`], 'P_db = F × S / 3.6', 'Power = Force × Velocity. F in kN, v in km/h. Convert km/h to m/s: ×1000/3600 = /3.6. So P(kW) = F(kN) × S(km/h) / 3.6. Note: 1 N·m/s = 1 W, so 1000 N·m/s = 1 kW.');
  }
})();

// A4: Power train efficiency chain (hard, 30)
(() => {
  for (let i = 0; i < 30; i++) {
    const e1 = pick(P.ETA, i), e2 = pick(P.ETA, i + 3), e3 = pick(P.ETA, i + 7);
    const tot = fmt(e1 * e2 * e3 * 100);
    const BP = pick(P.BP, i);
    const l = pick(locs, i), t = pick(trs, Math.floor(i / 3));
    const q = `A ${t} in ${l} has an engine producing ${BP} HP at ${pick(P.RPM, i)} RPM. The transmission efficiency is ${(e1 * 100).toFixed(0)}%, final drive efficiency is ${(e2 * 100).toFixed(0)}%, and track/wheel efficiency is ${(e3 * 100).toFixed(0)}%. The oil capacity is ${pick(P.Qoil, i)} L. Tire pressure is ${pick([28, 32, 36, 40], i)} psi. What is the overall power train efficiency in %?`;
    pushQ(arrA, 'A', 'agri-machinery', 'Power Train Efficiency', 'hard', q, tot, [fmt(BP ? (e1 * e2 * 100) : 0), fmt(e1 * 100 * e3), fmt(e2 * e3 * 100)], i, 'Overall efficiency = product of individual component efficiencies. η_total = η_1 × η_2 × η_3 × ... × η_n.', [`η_total = ${(e1 * 100).toFixed(0)}% × ${(e2 * 100).toFixed(0)}% × ${(e3 * 100).toFixed(0)}%`, `η_total = ${tot}%`], 'η_total = η₁ × η₂ × η₃ × ... × ηₙ', 'Power flow: Engine → Transmission → Final Drive → Wheels. η_trans = PTO/BP, η_drive = axle/PTO, η_tractive = DB/axle. Overall η = DB/BP = η_trans × η_drive × η_tractive. Multiply all efficiencies to get the fraction of power reaching the drawbar.');
  }
})();

// A5: Fuel consumption (average, 35)
(() => {
  for (let i = 0; i < 35; i++) {
    const BP = pick(P.BP, i), sfc = pick(P.SFC, Math.floor(i / 7)), rho = pick(P.rho, Math.floor(i / 12));
    const V = fmt((BP * sfc) / rho);
    const l = pick(locs, i), t = pick(trs, Math.floor(i / 4)), c = pick(crops, Math.floor(i / 8));
    const h = pick(P.h, Math.floor(i / 6)), yr = pick(P.years, Math.floor(i / 10));
    const q = `A ${t} operates in a ${c} field in ${l} at ${BP} HP for ${h} hours daily. Brake-specific fuel consumption is ${sfc} kg/HP-hr. Fuel density is ${rho} kg/L. The fuel price is P${pick([50, 52, 55, 58, 60], i)}/L. The ${yr} model tractor has accumulated ${pick([2000, 3000, 4000, 5000], i)} hours. What is the hourly fuel consumption in L/h?`;
    pushQ(arrA, 'A', 'agri-machinery', 'Fuel Consumption', 'average', q, V, [fmt((BP * sfc) / rho * 1.15), fmt((BP * sfc) / rho * 0.85), fmt(BP * sfc)], i, 'Fuel consumption V = (BP × SFC) / ρ, where BP = brake power (HP), SFC = specific fuel consumption (kg/HP-hr), ρ = fuel density (kg/L).', [`V = (${BP} × ${sfc}) / ${rho} = ${V} L/h`], 'V = (BP × SFC) / ρ', 'Fuel mass rate = BP × SFC (kg/h). Fuel volume rate = mass / density = BP × SFC / ρ (L/h). SFC = specific fuel consumption in kg/HP-h or kg/kW-h. Lower SFC means more efficient engine.');
  }
})();

// A6: Engine displacement from CR (hard, 30)
(() => {
  for (let i = 0; i < 30; i++) {
    const CR = pick(P.CR, i), Vc = pick(P.Vc, Math.floor(i / 6)), n = pick(P.nCyl, Math.floor(i / 8));
    const Vd = fmt(n * Vc * (CR - 1));
    const t = pick(trs, i), y = pick(P.years, Math.floor(i / 6));
    const q = `A ${n}-cylinder ${t} (${y} model) has a compression ratio of ${CR}:1 and clearance volume of ${Vc} L per cylinder. The bore diameter is ${pick([85, 90, 95, 100], i)} mm. Maximum RPM is ${pick(P.RPM, Math.floor(i / 6))}. What is the total engine displacement in L?`;
    pushQ(arrA, 'A', 'agri-machinery', 'Engine Displacement', 'hard', q, Vd, [fmt(n * Vc * CR), fmt(Vc * (CR + 1)), fmt(n * Vc)], i, 'Total displacement V_d = n × V_c × (CR - 1), where n = number of cylinders, V_c = clearance volume per cylinder. CR = (V_d + V_c) / V_c.', [`V_d = ${n} × ${Vc} × (${CR} - 1) = ${Vd} L`], 'V_d = n × V_c × (CR - 1)', 'Compression ratio CR = (V_d + V_c) / V_c. Multiply: CR × V_c = V_d + V_c. Rearrange: V_d = CR × V_c - V_c = V_c × (CR - 1). Total displacement = n × V_c × (CR - 1).');
  }
})();

// A7: Harvest output (hard, 35)
(() => {
  for (let i = 0; i < 35; i++) {
    const W = pick([2.0, 2.5, 3.0, 3.5, 4.0], i), S = pick([3, 4, 5, 6], Math.floor(i / 5)), E = pick([0.60, 0.65, 0.70, 0.75, 0.80], Math.floor(i / 20));
    const yld = pick([3.5, 4.0, 4.5, 5.0, 5.5, 6.0], Math.floor(i / 6));
    const C = fmt((W * S * E) / 10);
    const output = fmt(C * yld);
    const l = pick(locs, i), c = pick(crops, Math.floor(i / 5)), v = pick(varty, Math.floor(i / 4));
    const t = pick(trs, Math.floor(i / 5));
    const q = `A combine harvester with ${W} m header cuts ${c} (${v}) at ${S} km/h with ${(E * 100).toFixed(0)}% field efficiency in ${l}. Crop yield is ${yld} t/ha. The grain tank holds ${pick([2.0, 2.5, 3.0, 4.0], i)} t. Moisture content is ${pick([20, 22, 24, 26], i)}%. Grain price is P${pick([15, 17, 20, 22], i)}/kg. What is the harvest output in t/h?`;
    pushQ(arrA, 'A', 'agri-machinery', 'Harvest Output', 'hard', q, output, [fmt(C * yld * 0.9), fmt(C * yld * 1.1), fmt(C * yld * 0.5)], i, 'Harvest output (t/h) = Effective field capacity (ha/h) × Yield (t/ha). C = (W × S × E) / 10 determines area covered per hour.', [`C = (${W} × ${S} × ${E}) / 10 = ${C} ha/h`, `Output = ${C} × ${yld} = ${output} t/h`], 'Harvest output = C × Yield', 'Step 1: Effective field capacity C = (W × S × E) / 10 (ha/h). Step 2: Harvest rate = C × Yield (t/h). Total output = C × Yield × operating time. Units: ha/h × t/ha = t/h.');
  }
})();

// A8: PTO power from flywheel (average, 35)
(() => {
  for (let i = 0; i < 35; i++) {
    const BP = pick(P.BP, i), e1 = pick(P.ETA, Math.floor(i / 4)), e2 = pick(P.ETA, Math.floor(i / 8));
    const PTO = fmt(BP * e1 * e2);
    const t = pick(trs, i), rpm = pick(P.RPM, Math.floor(i / 6)), y = pick(P.years, Math.floor(i / 12));
    const q = `A ${t} has ${BP} HP brake power at ${rpm} RPM. The flywheel-to-clutch efficiency is ${(e1 * 100).toFixed(0)}% and transmission-to-PTO efficiency is ${(e2 * 100).toFixed(0)}%. The ${y} model has a ${pick([540, 1000], i)} RPM PTO stub. Engine oil capacity is ${pick(P.Qoil, i)} L. What is the PTO power in HP?`;
    pushQ(arrA, 'A', 'agri-machinery', 'PTO Power', 'average', q, PTO, [fmt(BP * e1), fmt(BP * e2), fmt(BP * e1 * e2 * 1.1)], i, 'PTO power = Brake power × Flywheel-to-clutch efficiency × Transmission-to-PTO efficiency. Losses occur at each power transfer stage.', [`PTO = ${BP} × ${e1} × ${e2} = ${PTO} HP`], 'P_PTO = BP × η_clutch × η_trans');
  }
})();

// A9: Indicated power from MEP (hard, 30)
(() => {
  for (let i = 0; i < 30; i++) {
    const mep = pick(P.MEP, i), L = pick(P.L, Math.floor(i / 5)), A = pick(P.Piston, Math.floor(i / 6));
    const n = pick(P.nCyl, Math.floor(i / 8)), N = pick(P.RPM, Math.floor(i / 6));
    const k_val = pick([0.5, 1.0], Math.floor(i / 15)); // 2-stroke=0.5, 4-stroke=1.0
    const IP = fmt((mep * L * A * n * N * k_val * 1e-6 * 100) / 0.7457);
    const t = pick(trs, i);
    const q = `A ${n}-cylinder ${t} engine has a mean effective pressure of ${mep} kPa. Stroke length is ${(L * 1000).toFixed(0)} mm, piston area is ${(A * 10000).toFixed(0)} cm². Engine speed is ${N} RPM. It is a ${k_val === 0.5 ? '2-stroke' : '4-stroke'} engine. The cooling system holds ${pick([8, 10, 12, 15], i)} L. Valve clearance is ${pick([0.15, 0.20, 0.25, 0.30], i)} mm. What is the indicated power in HP?`;
    pushQ(arrA, 'A', 'agri-machinery', 'Indicated Power', 'hard', q, IP, [fmt(IP * 0.85), fmt(IP * 1.15), fmt(IP / n)], i, 'IP (kW) = (MEP × L × A × n × N × k) / 60,000 where k = 0.5 for 2-stroke, 1.0 for 4-stroke. Convert to HP by dividing by 0.7457.', [`IP (kW) = (${mep} × ${L} × ${A} × ${n} × ${N} × ${k_val}) / 60,000`, `IP = ${fmt(IP * 0.7457 / 100)} kW = ${IP} HP`], 'IP = (MEP × L × A × n × N × k) / 60,000', 'IP = (MEP × L × A × N × n × k) / 60,000. For 4-stroke: k = 0.5 (one power stroke per 2 revs). For 2-stroke: k = 1.0. L = stroke (m), A = πD²/4 (m²), N = RPM, n = cylinders. Result in kW. Derivation: Power = Work per cycle × cycles per second. Work = Force × distance = P × A × L.');
  }
})();

// A10: Sprayer calibration (average, 35)
(() => {
  for (let i = 0; i < 35; i++) {
    const rate = pick([100, 150, 200, 250, 300], i), S = pick([3, 4, 5, 6], Math.floor(i / 6));
    const W = pick(P.W, Math.floor(i / 5)), q_rate = pick(P.Qrate, Math.floor(i / 7));
    const nozzle = pick([0.8, 1.0, 1.2, 1.5, 1.8], Math.floor(i / 7));
    const totalQ = fmt(nozzle * q_rate);
    const l = pick(locs, i), c = pick(crops, Math.floor(i / 8)), t = pick(trs, Math.floor(i / 5));
    const q = `A ${t} in ${l} operates a boom sprayer for ${c} at ${S} km/h with ${W} m boom width. Each of the ${pick([12, 16, 20, 24], i)} nozzles discharges ${q_rate} L/min. Nozzle spacing is ${fmt(W / 16 * 100).toFixed(0)} cm. Recommended application rate is ${rate} L/ha. The tank capacity is ${pick([400, 600, 800, 1000], i)} L. Chemical cost is P${pick([800, 1200, 1500, 2000], i)}/L. What is the total sprayer discharge in L/min?`;
    pushQ(arrA, 'A', 'agri-machinery', 'Sprayer Calibration', 'average', q, totalQ, [fmt(nozzle * q_rate * 0.8), fmt(nozzle * q_rate * 1.2), fmt(q_rate)], i, 'Total discharge = Number of nozzles × Discharge per nozzle. The recommended application rate per hectare is used separately for calibration checks.', [`Total Q = ${nozzle} × ${q_rate} = ${totalQ} L/min`], 'Q_total = n × q_nozzle');
  }
})();

// A11: Multi-season field efficiency (easy, 40)
(() => {
  for (let i = 0; i < 40; i++) {
    const W = pick(P.W, i), S = pick(P.S, Math.floor(i / 7)), E = pick(P.E, Math.floor(i / 40));
    const C = fmt((W * S * E) / 10);
    const CT = fmt((W * S) / 10);
    const Eff = fmt(E * 100);
    const l = pick(locs, i), c = pick(crops, Math.floor(i / 8)), t = pick(trs, Math.floor(i / 5));
    const q = `A ${t} in ${l} tills a ${c} field. The implement width is ${W} m, operating speed is ${S} km/h. Total time per hectare is ${fmt(1 / C)} hours, including ${fmt(1 / CT - 1 / C)} hours for turning and adjustments. The previous tractor brand took 15% longer. Fuel price is P55/L. What is the field efficiency in %?`;
    pushQ(arrA, 'A', 'agri-machinery', 'Field Efficiency', 'easy', q, Eff, [fmt(Eff + 10), fmt(Eff - 10), fmt(Eff * 0.9)], i, 'Field efficiency = (Effective capacity / Theoretical capacity) × 100% = (C / C_T) × 100%. It accounts for turning, refilling, and adjustment losses.', [`E = (${C} / ${CT}) × 100% = ${Eff}%`], 'E = (C / C_T) × 100%');
  }
})();

// A12: Heat input from fuel (hard, 30)
(() => {
  for (let i = 0; i < 30; i++) {
    const mf = pick(P.Mf, i), cv = pick(P.CV, Math.floor(i / 6));
    const Q = fmt(mf * cv);
    const t = pick(trs, i), BP = pick(P.BP, Math.floor(i / 4)), h = pick(P.h, Math.floor(i / 8));
    const q = `A ${t} consumes ${mf} kg/h of diesel fuel with a calorific value of ${cv} MJ/kg. The engine produces ${BP} HP and runs ${h} hours per day. Lubricating oil consumption is ${pick([0.1, 0.15, 0.2, 0.25], i)} L/h. Coolant temperature is ${pick([80, 85, 90, 95], i)}°C. What is the total heat input in MJ/h?`;
    pushQ(arrA, 'A', 'agri-machinery', 'Heat Input', 'hard', q, Q, [fmt(mf * cv * 0.9), fmt(mf * cv * 1.1), fmt(mf * cv * 0.5)], i, 'Heat input Q = m_f × CV, where m_f = fuel mass flow rate (kg/h) and CV = calorific value (MJ/kg). This is the total thermal energy released by fuel combustion.', [`Q = ${mf} × ${cv} = ${Q} MJ/h`], 'Q = m_f × CV', 'Heat input = m_f × CV. Fuel mass m_f = BP × SFC. So Q_in = BP × SFC × CV. SFC in kg/HP-h, CV in MJ/kg, times 746 converts HP to kW. The total thermal energy released by fuel combustion per hour.');
  }
})();

// A13: Multi-disc implement draft (average, 35)
(() => {
  for (let i = 0; i < 35; i++) {
    const n = pick(P.nDisc, i), D = pick(P.D, Math.floor(i / 5));
    const totalD = fmt(n * D);
    const l = pick(locs, i), sm = pick(soils, Math.floor(i / 5)), t = pick(trs, Math.floor(i / 4));
    const d = pick(P.depth, Math.floor(i / 7));
    const q = `A ${n}-disc harrow is pulled by a ${t} in ${sm} soil at ${d} cm depth in ${l}. Each disc produces ${D} kN of draft at the operating speed. The harrow weighs ${pick([800, 1000, 1200, 1500], i)} kg. Disc diameter is ${pick([560, 610, 660, 710], i)} mm. What is the total implement draft in kN?`;
    pushQ(arrA, 'A', 'agri-machinery', 'Implement Draft', 'average', q, totalD, [fmt(n * D * 1.2), fmt(n * D * 0.8), fmt(D)], i, 'Total draft = Number of gangs/discs × Draft per gang. Draft per disc depends on soil type, depth, speed, and disc angle.', [`Total draft = ${n} × ${D} = ${totalD} kN`], 'D_total = n × d_per_unit', 'Total width W = n_discs × disc_width. Draft = W × specific draft (kN). Drawbar power = Draft × speed / 3.6. Specific draft depends on soil type: clay ~8-10 kN/m, loam ~5-7 kN/m, sand ~3-5 kN/m.');
  }
})();

// A14: Power tiller capacity (easy, 40)
(() => {
  for (let i = 0; i < 40; i++) {
    const W = pick([0.6, 0.8, 1.0, 1.2, 1.4], i), S = pick([2, 2.5, 3, 3.5, 4], Math.floor(i / 8));
    const E = pick(P.E, Math.floor(i / 40));
    const C = fmt((W * S * E) / 10);
    const l = pick(locs, i), c = pick(crops, Math.floor(i / 8)), t = pick(impls, Math.floor(i / 5));
    const hp = pick([7, 8.5, 10, 12, 14], Math.floor(i / 8));
    const q = `A farmer in ${l} uses a ${hp} HP power tiller with a ${t} attachment for his ${c} field. Effective working width is ${W} m at ${S} km/h with ${(E * 100).toFixed(0)}% field efficiency. The tiller cost P${pick([85000, 95000, 110000, 130000], i)} and uses ${pick([1.5, 2.0, 2.5, 3.0], i)} L/h of fuel. What is the effective field capacity in ha/h?`;
    pushQ(arrA, 'A', 'agri-machinery', 'Power Tiller Capacity', 'easy', q, C, [fmt((W * S) / 10), fmt((W * S * (E + 0.1)) / 10), fmt((W * S * (E - 0.05)) / 10)], i, 'Same field capacity formula applies: C = (W × S × E) / 10. Power tillers typically have narrower working widths and lower speeds than tractors.', [`C = (${W} × ${S} × ${E}) / 10 = ${C} ha/h`], 'C = (W × S × E) / 10');
  }
})();

// A15: Engine heat balance (hard, 30)
(() => {
  for (let i = 0; i < 30; i++) {
    const Q = pick([100, 150, 200, 250, 300], i);
    const pct_W = pick([25, 30, 33, 35], i), pct_C = pick([25, 30, 33, 35], i + 5), pct_E = pick([25, 30, 33, 35], i + 10);
    const W_val = fmt(Q * pct_W / 100), C_val = fmt(Q * pct_C / 100), E_val = fmt(Q * pct_E / 100);
    const q = `A ${pick(trs, i)} engine has a fuel heat input of ${Q} MJ/h. Heat balance shows ${pct_W}% goes to useful work, ${pct_C}% to cooling water, and the rest to exhaust and friction. The cooling water flow rate is ${pick([60, 80, 100, 120], i)} L/h. Ambient temperature is ${pick([28, 30, 32, 35], i)}°C. What is the heat lost to useful work in MJ/h?`;
    pushQ(arrA, 'A', 'agri-machinery', 'Engine Heat Balance', 'hard', q, W_val, [fmt(Q * (100 - pct_W) / 100), fmt(C_val), fmt(E_val)], i, 'Heat to useful work = Total heat input × (Work percentage / 100). The rest is lost to cooling, exhaust, friction, and radiation.', [`Work heat = ${Q} × ${pct_W}% = ${W_val} MJ/h`], 'Q_work = Q_total × η_work', 'Heat energy balance: Q_fuel = Q_brake + Q_cool + Q_exhaust + Q_friction + Q_radiation. Given total Q and work %, useful work = Q_fuel × (%_work/100). Typical split: 30-35% useful work, 25-30% cooling, 30-35% exhaust, 5-10% friction.');
  }
})();

// A16: Tillage time required (average, 35)
(() => {
  for (let i = 0; i < 35; i++) {
    const area = pick([2.5, 3.0, 4.0, 5.0, 6.0, 8.0, 10.0], i);
    const W = pick(P.W, Math.floor(i / 5)), S = pick(P.S, Math.floor(i / 8)), E = pick(P.E, Math.floor(i / 35));
    const C = fmt((W * S * E) / 10);
    const T = fmt(area / C);
    const l = pick(locs, i), t = pick(trs, Math.floor(i / 4)), c = pick(crops, Math.floor(i / 7));
    const q = `A ${t} in ${l} needs to till ${area} ha of ${c} field. The ${pick(impls, Math.floor(i / 5))} has working width ${W} m, speed ${S} km/h, field efficiency ${(E * 100).toFixed(0)}%. Daily working hours are ${pick([8, 10, 12], i)}. Fuel cost is P${pick([50, 55, 60], i)}/L. Labor rate is P${pick([350, 400, 450], i)}/day. What is the total time required in hours?`;
    pushQ(arrA, 'A', 'agri-machinery', 'Tillage Time', 'average', q, T, [fmt(area / C * 1.2), fmt(area / C * 0.8), fmt(area / (C * 0.7))], i, 'Time required = Field area ÷ Effective field capacity. C = (W × S × E) / 10 gives area covered per hour.', [`C = (${W} × ${S} × ${E}) / 10 = ${C} ha/h`, `T = ${area} / ${C} = ${T} h`], 'T = A / C');
  }
})();

// A17: Tractor ballasting (average, 35)
(() => {
  for (let i = 0; i < 35; i++) {
    const Tq = pick(P.Tq, i), rT = pick([0.6, 0.65, 0.7, 0.75, 0.8], Math.floor(i / 7));
    const T = pick(P.T, Math.floor(i / 5)), PTO = pick(P.PTO, Math.floor(i / 7));
    const BP = pick(P.BP, Math.floor(i / 10));
    const q = `A ${pick(trs, i)} with ${BP} HP has a rear tire static load of ${fmt(T * rT)} kg with wheel torque of ${Tq} Nm. Total tractor weight is ${T} kg. The ${rT > 0.7 ? 'rear' : 'front'}-wheel drive model weighs ${pick([300, 400, 500], i)} kg more than its 2WD version. Tire size is ${pick(['14.9-28', '16.9-30', '18.4-34'], i)}. What is the front axle static load in kg?`;
    const front = fmt(T - (T * rT));
    pushQ(arrA, 'A', 'agri-machinery', 'Tractor Ballasting', 'average', q, front, [fmt(T * rT), fmt(T * 0.5), fmt(T * 0.3)], i, 'Static load distribution: Front load = Total weight - Rear load. Ballasting should achieve proper weight distribution for optimal traction and stability.', [`Front load = ${T} - ${fmt(T * rT)} = ${front} kg`], 'W_front = W_total - W_rear');
  }
})();

// A18: Seeder calibration (average, 35)
(() => {
  for (let i = 0; i < 35; i++) {
    const rate = pick([40, 60, 80, 100, 120, 150], i), S = pick(P.S, Math.floor(i / 6));
    const W = pick([1.2, 1.5, 1.8, 2.0, 2.2], Math.floor(i / 7)), N = pick(P.N, Math.floor(i / 6));
    const seedRate = fmt(rate * W * S / 10);
    const l = pick(locs, i), c = pick(crops, Math.floor(i / 7)), t = pick(trs, Math.floor(i / 5));
    const v = pick(varty, Math.floor(i / 5));
    const q = `A ${N}-row ${t} seeder in ${l} calibrates to deliver ${rate} kg/ha for ${c} (${v}). Row spacing is ${pick(P.Sp, i)} m, working width ${W} m, speed ${S} km/h. Seed price is P${pick([50, 60, 75, 90], i)}/kg. Previous season germination rate was ${pick([80, 85, 90, 95], i)}%. What is the seed output rate in kg/h?`;
    pushQ(arrA, 'A', 'agri-machinery', 'Seeder Calibration', 'average', q, seedRate, [fmt(rate * W), fmt(rate * S), fmt(rate * W * S / 10 * 1.2)], i, 'Seed output rate (kg/h) = Seeding rate (kg/ha) × Effective field capacity (ha/h). C = (W × S) / 10 assuming 100% field efficiency for calibration.', [`Output = ${rate} × (${W} × ${S} / 10) = ${seedRate} kg/h`], 'Seed output = Rate × C');
  }
})();

// A19: Simple drawbar (easy, 40)
(() => {
  for (let i = 0; i < 40; i++) {
    const F = pick(P.F, i), S = pick(P.S, Math.floor(i / 5));
    const P_kW = fmt((F * S) / 3.6);
    const P_HP = fmt(P_kW / 0.7457);
    const l = pick(locs, i), t = pick(trs, Math.floor(i / 5)), sm = pick(soils, Math.floor(i / 6));
    const q = `A ${t} in ${l} exerts a drawbar pull of ${F} kN while towing a ${pick(impls, Math.floor(i / 5))} at ${S} km/h in ${sm} soil. The tractor's engine develops ${pick(P.BP, Math.floor(i / 8))} HP. Wheel slippage is ${pick([8, 10, 12, 15], i)}%. What is the drawbar power in kW?`;
    pushQ(arrA, 'A', 'agri-machinery', 'Drawbar Power', 'easy', q, P_kW, [fmt((F * S) / 3.6 * 1.1), fmt((F * S) / 3.6 * 0.9), fmt(P_HP)], i, 'Drawbar power (kW) = Draft (kN) × Speed (km/h) / 3.6. This is the power available at the drawbar for pulling implements.', [`P_db = (${F} × ${S}) / 3.6 = ${P_kW} kW`], 'P_db = F × S / 3.6');
  }
})();

// A20: Maintenance intervals (easy, 40)
(() => {
  for (let i = 0; i < 40; i++) {
    const hrs = pick([100, 150, 200, 250, 300], i);
    const total = pick([1000, 1500, 2000, 2500, 3000], Math.floor(i / 8));
    const count = Math.ceil(total / hrs);
    const t = pick(trs, i), l = pick(locs, Math.floor(i / 5));
    const q = `A ${t} in ${l} requires engine oil change every ${hrs} hours. The tractor has accumulated ${total} hours over ${pick([2, 3, 4, 5], i)} years of operation. Oil capacity is ${pick(P.Qoil, i)} L and oil costs P${pick([300, 350, 400, 450], i)}/L. Air filter replacement is every ${pick([500, 1000], i)} hours. Fuel filter replacement is every ${pick([250, 500], i)} hours. How many oil changes have been performed?`;
    pushQ(arrA, 'A', 'agri-machinery', 'Maintenance Intervals', 'easy', q, count, [count + 1, count - 1, Math.floor(total / (hrs * 2))], i, 'Number of maintenance intervals = Total operating hours ÷ Interval hours. Regular maintenance intervals are specified in the operator manual.', [`Changes = ${total} / ${hrs} = ${count}`], 'N = Total_hours / Interval_hours');
  }
})();

// A21: Heat to work output (hard, 30)
(() => {
  for (let i = 0; i < 30; i++) {
    const mf = pick(P.Mf, i), cv = pick(P.CV, Math.floor(i / 6));
    const eta = pick([0.25, 0.28, 0.30, 0.33, 0.35], Math.floor(i / 6));
    const Q = fmt(mf * cv);
    const W = fmt(Q * eta);
    const t = pick(trs, i), rpm = pick(P.RPM, Math.floor(i / 8));
    const q = `A ${t} at ${rpm} RPM consumes ${mf} kg/h of diesel (CV = ${cv} MJ/kg). The thermal efficiency is ${(eta * 100).toFixed(0)}%. Cooling system removes ${pick([30, 35, 40, 45], i)}% of input heat. Exhaust temperature is ${pick([350, 400, 450, 500], i)}°C. Engine has ${pick([4, 6], i)} cylinders. What is the work output in MJ/h?`;
    pushQ(arrA, 'A', 'agri-machinery', 'Work Output', 'hard', q, W, [fmt(Q * (1 - eta)), fmt(Q * 0.5), fmt(Q / eta)], i, 'Work output = Heat input × Thermal efficiency. The difference between heat input and work output represents heat rejected to cooling and exhaust systems.', [`W_out = (${mf} × ${cv}) × ${eta} = ${Q} MJ/h × ${eta} = ${W} MJ/h`], 'W_out = m_f × CV × η', 'Work output = Heat input × Thermal efficiency. η_th = W_out / Q_in. So W_out = Q_in × η_th = (BP × SFC × CV) × η_th. If thermal efficiency is 30%, only 30% of fuel energy converts to useful shaft work.');
  }
})();

// A22: PTO pump matching (average, 35)
(() => {
  for (let i = 0; i < 35; i++) {
    const PTO = pick(P.PTO, i), eta = pick([0.80, 0.85, 0.88, 0.90, 0.92], Math.floor(i / 7));
    const pwr = fmt(PTO * eta);
    const Qrate = pick([200, 300, 400, 500, 600], Math.floor(i / 7));
    const head = pick([20, 30, 40, 50, 60], Math.floor(i / 7));
    const t = pick(trs, i), l = pick(locs, Math.floor(i / 5));
    const q = `A ${t} in ${l} drives a centrifugal pump through the ${pick([540, 1000], i)} RPM PTO. PTO power is ${PTO} HP. Pump efficiency is ${(eta * 100).toFixed(0)}%. The pump delivers ${Qrate} L/min against a total head of ${head} m. The suction pipe diameter is ${pick([4, 6, 8], i)} inches. What is the power available at the pump in HP?`;
    pushQ(arrA, 'A', 'agri-machinery', 'PTO Pump Matching', 'average', q, pwr, [fmt(PTO / eta), fmt(PTO), fmt(PTO * eta * 0.9)], i, 'Power available at pump = PTO power × Pump efficiency. Pump must be matched to PTO power for optimal performance without overloading.', [`P_pump = ${PTO} × ${eta} = ${pwr} HP`], 'P_pump = P_PTO × η_pump', 'Pump power = PTO × η_trans × η_pump. Hydraulic power = ρ × g × Q × H. Equating: ρ × g × Q × H = PTO × η_trans × η_pump. Solve for Q = (PTO × η_trans × η_pump) / (ρ × g × H).');
  }
})();

// A23: Pre-harvest yield estimation (average, 35)
(() => {
  for (let i = 0; i < 35; i++) {
    const area = pick([1.0, 1.5, 2.0, 2.5, 3.0, 4.0], i);
    const sArea = pick([1, 2, 5, 10], Math.floor(i / 9));
    const W = pick(P.W, Math.floor(i / 6)), S = pick(P.S, Math.floor(i / 8)), E = pick(P.E, Math.floor(i / 35));
    const C = fmt((W * S * E) / 10);
    const totalTime = fmt(area / C);
    const l = pick(locs, i), c = pick(crops, Math.floor(i / 7)), t = pick(trs, Math.floor(i / 5));
    const q = `A ${t} in ${l} is used to harvest ${area} ha of ${c}. Sample cuts from ${sArea} m² areas give ${pick([0.8, 1.0, 1.2, 1.5], i)} kg per sample. The combine has ${W} m header at ${S} km/h with ${(E * 100).toFixed(0)}% efficiency. Grain moisture is ${pick([20, 22, 24], i)}%. Market price is P${pick([17, 20, 22, 25], i)}/kg. How long will harvesting take in hours?`;
    pushQ(arrA, 'A', 'agri-machinery', 'Harvest Time', 'average', q, totalTime, [fmt(area / C * 1.2), fmt(area / C * 0.8), fmt(area / C * 0.5)], i, 'Harvest time = Field area ÷ Effective field capacity. Yield estimation from sample cuts determines if the crop is ready for harvest.', [`C = (${W} × ${S} × ${E}) / 10 = ${C} ha/h`, `Time = ${area} / ${C} = ${totalTime} h`], 'T = A / C');
  }
})();

// A24: Thresher performance (average, 35)
(() => {
  for (let i = 0; i < 35; i++) {
    const input = pick([500, 800, 1000, 1200, 1500], i), rec = pick([0.65, 0.70, 0.72, 0.75, 0.78], Math.floor(i / 7));
    const output = fmt(input * rec);
    const l = pick(locs, i), c = pick(['rice', 'corn', 'sorghum', 'millet'], Math.floor(i / 9));
    const v = pick(varty, Math.floor(i / 5)), m = pick([20, 22, 24, 26], Math.floor(i / 9));
    const q = `A thresher in ${l} processes ${c} (${v}) at ${input} kg/h with ${(rec * 100).toFixed(0)}% threshing recovery. Moisture content during threshing is ${m}%. The thresher drum speed is ${pick([800, 1000, 1200, 1400], i)} RPM. Power requirement is ${pick([5, 7.5, 10, 15], i)} HP. What is the thresher output in kg/h?`;
    pushQ(arrA, 'A', 'agri-machinery', 'Thresher Performance', 'average', q, output, [fmt(input * rec * 0.85), fmt(input * rec * 1.15), fmt(input * (rec + 0.1))], i, 'Thresher output = Input rate × Recovery rate. Recovery rate depends on crop variety, moisture content, drum speed, and concave clearance.', [`Output = ${input} × ${rec} = ${output} kg/h`], 'Output = Input × Recovery');
  }
})();

// A25: Partial field capacity (easy, 40)
(() => {
  for (let i = 0; i < 40; i++) {
    const W = pick(P.W, i), S = pick(P.S, Math.floor(i / 7)), E = pick(P.E, Math.floor(i / 40));
    const C = fmt((W * S * E) / 10);
    const area = pick([1.0, 1.5, 2.0, 2.5, 3.0], Math.floor(i / 8));
    const time = fmt(area / C);
    const l = pick(locs, i), c = pick(crops, Math.floor(i / 8)), t = pick(trs, Math.floor(i / 5));
    const q = `A ${t} with a ${W} m ${pick(impls, Math.floor(i / 5))} covers a ${area} ha section of a ${c} field in ${l} at ${S} km/h with ${(E * 100).toFixed(0)}% field efficiency. The remaining ${fmt(6 - area)} ha will be tilled next week. The operator ${pick(opnm, i)} earns P${pick([400, 500, 600], i)}/day. Fuel consumption is ${pick(P.Qrate, Math.floor(i / 8))} L/h. How long will it take to till this section in hours?`;
    pushQ(arrA, 'A', 'agri-machinery', 'Partial Field Capacity', 'easy', q, time, [fmt(area / C * 1.2), fmt(area / C * 0.8), fmt(area / (C * 0.5))], i, 'Time for partial field = Area of section ÷ Effective field capacity. Only the relevant area is considered, not the total field.', [`C = (${W} × ${S} × ${E}) / 10 = ${C} ha/h`, `T = ${area} / ${C} = ${time} h`], 'T = A_section / C');
  }
})();


// ==================== AREA B: IRRIGATION & WATER RESOURCES ====================

const wtr = 'Irrigation|Drainage|Water Supply|Flood Control'.split('|');
const irrM = 'basin|furrow|border strip|sprinkler|drip'.split('|');
const cropsB = 'rice|corn|sugarcane|vegetables|orchard'.split('|');
const soilsB = 'clay loam|sandy loam|silty clay|loam|silty loam'.split('|');
const locsB = 'Nueva Ecija|Isabela|Pangasinan|Bulacan|Tarlac|Pampanga|Laguna|Iloilo'.split('|');

// B1: Gross irrigation requirement (easy, 30)
(() => {
  for (let i = 0; i < 30; i++) {
    const ET = pick([3, 4, 5, 6, 7, 8], i), eff = pick([0.50, 0.55, 0.60, 0.65, 0.70, 0.75], Math.floor(i / 5));
    const GIR = fmt(ET / eff);
    const l = pick(locsB, i), c = pick(cropsB, Math.floor(i / 6)), m = pick(irrM, Math.floor(i / 6));
    const v = pick(varty, Math.floor(i / 5));
    const q = `A ${c} field (${v}) in ${l} using ${m} irrigation has a net evapotranspiration of ${ET} mm/day. System efficiency is ${(eff * 100).toFixed(0)}%. The field area is ${pick([2, 3, 5, 8], i)} ha. Annual rainfall is ${pick([1500, 1800, 2000, 2200], i)} mm. Water cost is P${pick([5, 8, 10, 12], i)}/m³. What is the gross irrigation requirement in mm/day?`;
    pushQ(arrB, 'B', 'irrigation', 'Gross Irrigation Requirement', 'easy', q, GIR, [fmt(ET / (eff + 0.1)), fmt(ET * eff), fmt(ET / 0.9)], i, 'GIR = ET / E, where ET = crop evapotranspiration (mm/day) and E = irrigation efficiency. Gross requirement accounts for conveyance and application losses.', [`GIR = ${ET} / ${eff} = ${GIR} mm/day`], 'GIR = ET / E');
  }
})();

// B2: Irrigation volume (average, 30)
(() => {
  for (let i = 0; i < 30; i++) {
    const A = pick([2, 3, 5, 8, 10, 15], i), d = pick(P.d, Math.floor(i / 5)), eff = pick([0.50, 0.55, 0.60, 0.65, 0.70], Math.floor(i / 6));
    const V = fmt((A * 10000 * d / 1000) / eff);
    const l = pick(locsB, i), c = pick(cropsB, Math.floor(i / 5)), m = pick(irrM, Math.floor(i / 5));
    const q = `A ${c} field in ${l} irrigated by ${m} is ${A} ha. Net irrigation depth is ${d} mm. System efficiency is ${(eff * 100).toFixed(0)}%. The field was previously rainfed with average yield of ${pick([2.5, 3.0, 3.5], i)} t/ha. Soil type is ${pick(soilsB, i)}. What is the total irrigation volume required in m³?`;
    pushQ(arrB, 'B', 'irrigation', 'Irrigation Volume', 'average', q, V, [fmt(A * 10000 * d / 1000), fmt((A * 10000 * d / 1000) / (eff + 0.1)), fmt(A * 10000 * d / 1000 * eff)], i, 'Total volume V = (A × 10,000 m²/ha × d (m)) / E, where A = area (ha), d = irrigation depth (mm), E = system efficiency. 1 mm = 0.001 m.', [`V = (${A} × 10000 × ${d} / 1000) / ${eff} = ${V} m³`], 'V = (A × d) / E');
  }
})();

// B3: Sprinkler application rate (average, 30)
(() => {
  for (let i = 0; i < 30; i++) {
    const q = pick([0.05, 0.08, 0.10, 0.12, 0.15], i), Sl = pick([6, 8, 10, 12, 15], Math.floor(i / 5));
    const Ss = pick([6, 8, 10, 12, 15], Math.floor(i / 5) + 2);
    const AR = fmt((q * 3600) / (Sl * Ss));
    const l = pick(locsB, i), c = pick(cropsB, Math.floor(i / 6));
    const qq = `A ${c} field in ${l} uses sprinklers with ${fmt(q * 1000).toFixed(0)} L/s discharge. Lateral spacing is ${Sl} m and sprinkler spacing is ${Ss} m. Operating pressure is ${pick([250, 300, 350, 400], i)} kPa. Nozzle diameter is ${pick([4, 5, 6, 7], i)} mm. Field size is ${pick([3, 5, 8], i)} ha. What is the application rate in mm/h?`;
    pushQ(arrB, 'B', 'irrigation', 'Sprinkler Application Rate', 'average', qq, AR, [fmt(AR * 1.2), fmt(AR * 0.8), fmt((q * 3600) / 100)], i, 'Application rate (mm/h) = (q × 3600) / (Sl × Ss), where q = discharge (L/s), Sl = lateral spacing (m), Ss = sprinkler spacing (m).', [`AR = (${q} × 3600) / (${Sl} × ${Ss}) = ${AR} mm/h`], 'AR = (q × 3600) / (Sl × Ss)', 'Application rate AR = q × 3600 / (S_l × S_s). q in L/s, 3600 converts to L/h. S_l and S_s in m. Result in mm/h (1 L/m² = 1 mm). AR must be ≤ soil infiltration rate to prevent runoff.');
  }
})();

// B4: Rational method (average, 30)
(() => {
  for (let i = 0; i < 30; i++) {
    const C = pick([0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9], i), I = pick([20, 30, 40, 50, 60], Math.floor(i / 6));
    const A = pick([10, 20, 30, 50, 80, 100], Math.floor(i / 5));
    const Q = fmt(C * I * A / 360);
    const l = pick(locsB, i), sm = pick(soilsB, Math.floor(i / 5));
    const dur = pick([10, 20, 30, 60], Math.floor(i / 8));
    const q = `A ${A} ha watershed in ${l} with ${sm} soil has a runoff coefficient of ${C} under ${dur}-minute rainfall of ${I} mm/h. Return period is ${pick([5, 10, 25, 50], i)} years. The catchment has ${pick([2, 5, 10], i)}% slope. Previous land use was ${pick(['forest', 'grassland', 'cultivated'], Math.floor(i / 10))}. What is the peak runoff in m³/s?`;
    pushQ(arrB, 'B', 'irrigation', 'Rational Method', 'average', q, Q, [fmt(C * I * A / 360 * 1.2), fmt(C * I * A / 360 * 0.8), fmt(C * I / 360)], i, 'Rational method: Q = C × I × A / 360, where Q = peak runoff (m³/s), C = runoff coefficient, I = rainfall intensity (mm/h), A = catchment area (ha).', [`Q = ${C} × ${I} × ${A} / 360 = ${Q} m³/s`], 'Q = C × I × A / 360');
  }
})();

// B5: Annual runoff volume (average, 30)
(() => {
  for (let i = 0; i < 30; i++) {
    const C = pick([0.2, 0.3, 0.4, 0.5, 0.6, 0.7], i), P = pick([1200, 1500, 1800, 2000, 2500], Math.floor(i / 6));
    const A = pick([20, 50, 100, 200, 500], Math.floor(i / 6));
    const V = fmt(C * P / 1000 * A * 10000);
    const l = pick(locsB, i), sm = pick(soilsB, Math.floor(i / 5));
    const q = `A ${A} ha watershed in ${l} with ${sm} soil receives ${P} mm annual rainfall. Runoff coefficient is ${C} based on land cover. Average temperature is ${pick([25, 27, 28, 30], i)}°C. Evaporation is ${pick([1200, 1500, 1800], i)} mm/year. What is the annual runoff volume in m³?`;
    pushQ(arrB, 'B', 'irrigation', 'Annual Runoff', 'average', q, V, [fmt(C * P / 1000 * A * 10000 * 1.2), fmt(C * P / 1000 * A * 10000 * 0.8), fmt(P / 1000 * A * 10000)], i, 'Annual runoff volume V = C × P × A, where C = runoff coefficient, P = precipitation (m), A = area (m²). Convert P from mm to m by dividing by 1000.', [`V = ${C} × (${P} / 1000) × (${A} × 10000) = ${V} m³`], 'V = C × P × A', 'Annual water balance: Runoff = Rainfall - ET - Infiltration ± Storage. Simplified: V_runoff = C × P × A. C = runoff coefficient (fraction). P in m, A in m², result in m³. Convert to million m³ by ÷10⁶.');
  }
})();

// B6: TAW (easy, 30)
(() => {
  for (let i = 0; i < 30; i++) {
    const FC = pick([20, 25, 30, 35, 40, 45], i), WP = pick([8, 10, 12, 14, 16, 18], Math.floor(i / 5));
    const Zr = pick([0.3, 0.4, 0.5, 0.6, 0.8, 1.0], Math.floor(i / 5));
    const TAW = fmt((FC - WP) * Zr / 100 * 1000);
    const l = pick(locsB, i), c = pick(cropsB, Math.floor(i / 6)), sm = pick(soilsB, Math.floor(i / 6));
    const q = `A ${c} crop in ${l} grows in ${sm} soil with field capacity of ${FC}% and wilting point of ${WP}%. Root zone depth is ${Zr} m. Soil bulk density is ${pick([1.2, 1.3, 1.4, 1.5], i)} g/cm³. Infiltration rate is ${pick([5, 10, 15, 20], i)} mm/h. What is the total available water in mm?`;
    pushQ(arrB, 'B', 'irrigation', 'Total Available Water', 'easy', q, TAW, [fmt((FC - WP) * 1000 / 100), fmt((FC - WP) * Zr * 10), fmt((FC * Zr) / 100 * 1000)], i, 'TAW = (FC - WP) × Zr, where FC = field capacity (%), WP = wilting point (%), Zr = root zone depth (m). Convert from decimal fraction to mm by multiplying by 1000.', [`TAW = (${FC} - ${WP}) × ${Zr} / 100 × 1000 = ${TAW} mm`], 'TAW = (FC - WP) × Zr');
  }
})();

// B7: Irrigation pumping time (hard, 30)
(() => {
  for (let i = 0; i < 30; i++) {
    const A = pick([2, 3, 5, 8, 10], i), d = pick(P.d, Math.floor(i / 5)), eff = pick([0.55, 0.60, 0.65, 0.70], Math.floor(i / 6));
    const V = fmt((A * 10000 * d / 1000) / eff);
    const Qp = pick([5, 8, 10, 12, 15], Math.floor(i / 5));
    const T = fmt(V / (Qp * 3600));
    const l = pick(locsB, i), c = pick(cropsB, Math.floor(i / 6));
    const q = `A pump delivers ${Qp} L/s to irrigate ${A} ha of ${c} in ${l} with ${d} mm net depth and ${(eff * 100).toFixed(0)}% efficiency. The pump head is ${pick([20, 30, 40, 50], i)} m. Pipe diameter is ${pick([6, 8, 10, 12], i)} inches. Motor efficiency is ${pick([85, 88, 90, 92], i)}%. Electricity cost is P${pick([8, 10, 12, 15], i)}/kWh. What is the required pumping time in hours?`;
    pushQ(arrB, 'B', 'irrigation', 'Pumping Time', 'hard', q, T, [fmt(V / (Qp * 3600) * 1.3), fmt(V / (Qp * 3600) * 0.7), fmt(V / 1000 / Qp)], i, 'Pumping time T = Total volume ÷ Pump discharge. First compute total volume V = (A × d) / E, then T = V / Q. Ensure consistent units (m³ and m³/s).', [`V = (${A} × 10000 × ${d} / 1000) / ${eff} = ${V} m³`, `T = ${V} / (${Qp} × 3600 / 1000) = ${T} h`], 'T = V / Q', 'Gross volume = (Area × net depth) / system efficiency. Convert ha to m² (×10,000), mm to m (÷1000). V = A × 10,000 × (d/1000) / E. Then time = Volume / Flow rate. Convert flow from L/s to m³/s (÷1000). T(s) = V_m³ / (Q_L/s ÷ 1000). Convert to hours: ÷3600.');
  }
})();

// B8: USLE soil loss (hard, 30)
(() => {
  for (let i = 0; i < 30; i++) {
    const R = pick([250, 300, 350, 400, 450], i), K = pick([0.15, 0.20, 0.25, 0.30, 0.35], Math.floor(i / 6));
    const LS = pick([1.5, 2.0, 2.5, 3.0, 4.0], Math.floor(i / 6));
    const CP = pick([0.10, 0.15, 0.20, 0.25, 0.30], Math.floor(i / 6));
    const AL = fmt(R * K * LS * CP);
    const l = pick(locsB, i), sm = pick(soilsB, Math.floor(i / 5)), c = pick(cropsB, Math.floor(i / 6));
    const sl = pick([3, 5, 8, 10, 15], Math.floor(i / 6));
    const q = `A ${c} field in ${l} on a ${sl}% slope with ${sm} soil has R = ${R} (MJ·mm)/(ha·h·yr), K = ${K}, LS = ${LS}, and CP = ${CP}. Field area is ${pick([3, 5, 8], i)} ha. Previous land use was ${pick(['forest', 'pasture', 'fallow'], Math.floor(i / 10))}. Contour farming is ${pick(['practiced', 'not practiced'], i % 2)}. What is the annual soil loss in t/ha?`;
    pushQ(arrB, 'B', 'irrigation', 'USLE Soil Loss', 'hard', q, AL, [fmt(R * K * LS), fmt(R * K * CP), fmt(R * K * LS * CP * 0.8)], i, 'Universal Soil Loss Equation: A = R × K × LS × C × P, where R = rainfall erosivity, K = soil erodibility, LS = slope length/steepness, C = cover management, P = support practice.', [`A = ${R} × ${K} × ${LS} × ${CP} = ${AL} t/ha/yr`], 'A = R × K × LS × C × P', 'Universal Soil Loss Equation: A = R × K × LS × C × P. R from rainfall intensity × energy. K from soil texture/structure. LS = (λ/22.13)^m × (65.41 sin²θ + 4.56 sinθ + 0.065). C depends on cropping system. P reflects contouring/terracing.');
  }
})();

// B9: Drainage discharge (average, 30)
(() => {
  for (let i = 0; i < 30; i++) {
    const C = pick([0.3, 0.4, 0.5, 0.6], i), I = pick([25, 30, 35, 40, 50], Math.floor(i / 6));
    const A = pick([10, 20, 30, 50, 80], Math.floor(i / 6));
    const Q = fmt(C * I * A / 360);
    const l = pick(locsB, i), sm = pick(soilsB, Math.floor(i / 5));
    const q = `A drainage system in ${l} serves ${A} ha of ${sm} soil. Design rainfall intensity is ${I} mm/h for a ${pick([24, 48, 72], i)}-hour storm with ${pick([5, 10, 25], i)}-year return period. Runoff coefficient is ${C}. Average slope is ${pick([1, 2, 3, 5], i)}%. Drain spacing is ${pick([15, 20, 25, 30], i)} m. What is the drainage design discharge in m³/s?`;
    pushQ(arrB, 'B', 'irrigation', 'Drainage Discharge', 'average', q, Q, [fmt(C * I * A / 360 * 1.2), fmt(C * I * A / 360 * 0.8), fmt(I * A / 360)], i, 'Drainage design discharge also uses the Rational method: Q = C × I × A / 360. The design storm duration and return period determine the rainfall intensity.', [`Q = ${C} × ${I} × ${A} / 360 = ${Q} m³/s`], 'Q = C × I × A / 360');
  }
})();

// B10: ETc = ETo × Kc (easy, 30)
(() => {
  for (let i = 0; i < 30; i++) {
    const ETo = pick([3, 4, 5, 6, 7], i), Kc = pick([0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2], Math.floor(i / 5));
    const ETc = fmt(ETo * Kc);
    const l = pick(locsB, i), c = pick(cropsB, Math.floor(i / 6)), stage = pick(['initial', 'development', 'mid-season', 'late-season'], Math.floor(i / 8));
    const v = pick(varty, Math.floor(i / 5));
    const q = `A ${v} ${c} crop in ${l} at ${stage} stage has reference evapotranspiration of ${ETo} mm/day. The crop coefficient Kc is ${Kc}. Wind speed is ${pick([1, 2, 3, 4], i)} m/s. Relative humidity is ${pick([65, 70, 75, 80, 85], i)}%. Planting date was ${pick(['January', 'June'], i)} ${pick(P.years, Math.floor(i / 10))}. What is the crop evapotranspiration in mm/day?`;
    pushQ(arrB, 'B', 'irrigation', 'Crop Evapotranspiration', 'easy', q, ETc, [fmt(ETo / Kc), fmt(ETo + Kc), fmt(ETo * Kc * 1.2)], i, 'ETc = ETo × Kc, where ETo = reference evapotranspiration and Kc = crop coefficient that varies by growth stage and crop type.', [`ETc = ${ETo} × ${Kc} = ${ETc} mm/day`], 'ETc = ETo × Kc');
  }
})();

// B11: Furrow advance time (average, 30)
(() => {
  for (let i = 0; i < 30; i++) {
    const Q = pick([1, 2, 3, 4, 5], i), L = pick([50, 75, 100, 125, 150], Math.floor(i / 6));
    const n_val = pick([0.04, 0.06, 0.08, 0.10], Math.floor(i / 8));
    const s_val = pick([0.001, 0.002, 0.003, 0.005, 0.008], Math.floor(i / 6));
    const A_f = pick([0.02, 0.03, 0.04, 0.05], Math.floor(i / 8));
    const t_adv = fmt(L * A_f / Q);
    const l = pick(locsB, i), c = pick(cropsB, Math.floor(i / 6)), sm = pick(soilsB, Math.floor(i / 5));
    const q = `A ${l} farmer irrigates ${c} using ${fmt(Q)} L/s furrow streams. Furrow length is ${L} m, slope ${s_val}, Manning n of ${n_val}, and cross-sectional area ${A_f} m². Soil is ${sm}. The field was laser-leveled last ${pick(P.years, Math.floor(i / 8))}. What is the advance time in seconds?`;
    pushQ(arrB, 'B', 'irrigation', 'Furrow Advance Time', 'average', q, t_adv, [fmt(L * A_f / Q * 1.3), fmt(L * A_f / Q * 0.7), fmt(L / Q)], i, 'Advance time t = L × A_f / Q, where L = furrow length (m), A_f = cross-sectional area of flow (m²), Q = inflow rate (m³/s). Convert L/s to m³/s by dividing by 1000.', [`t = ${L} × ${A_f} / (${Q} / 1000) = ${t_adv} s`], 't = L × A_f / Q');
  }
})();

// B12: SCS-CN runoff (hard, 30)
(() => {
  for (let i = 0; i < 30; i++) {
    const CN = pick([60, 65, 70, 75, 80, 85, 90], i), P = pick([50, 75, 100, 125, 150, 200], Math.floor(i / 5));
    const S_val = fmt(25400 / CN - 254);
    const Ia = fmt(0.2 * S_val);
    let Q_run = 0;
    if (P > Ia) Q_run = fmt((P - Ia) ** 2 / (P - Ia + S_val));
    const l = pick(locsB, i), sm = pick(soilsB, Math.floor(i / 5)), c = pick(cropsB, Math.floor(i / 6));
    const amc = pick(['I', 'II', 'III'], Math.floor(i / 10));
    const q = `A ${c} field in ${l} with ${sm} soil has SCS curve number CN = ${CN} (AMC-${amc}). Rainfall depth is ${P} mm from a ${pick([6, 12, 24], i)}-hour storm. Antecedent moisture condition is ${amc}. The field is ${pick(['conventionally tilled', 'no-till', 'reduced till'], Math.floor(i / 10))}. What is the direct runoff in mm?`;
    pushQ(arrB, 'B', 'irrigation', 'SCS Runoff', 'hard', q, Q_run, [fmt(P - 0.2 * S_val), fmt((P - Ia) ** 2 / (P - Ia)), fmt(P - Q_run)], i, 'SCS-CN method: Q = (P - Ia)² / (P - Ia + S) where S = 25400/CN - 254 and Ia = 0.2S. Runoff only occurs when P > Ia.', [`S = 25400 / ${CN} - 254 = ${S_val} mm`, `Ia = 0.2 × ${S_val} = ${Ia} mm`, `Q = (${P} - ${Ia})² / (${P} - ${Ia} + ${S_val}) = ${Q_run} mm`], 'Q = (P - Ia)² / (P - Ia + S)', 'SCS method: S = 25400/CN - 254 (mm). Ia = 0.2S (initial abstraction). Runoff Q = (P - Ia)² / (P - Ia + S) when P > Ia. If P ≤ Ia then Q = 0. Derived from: Q/P = (P - Ia) / (P - Ia + S) — ratio of runoff to rainfall.');
  }
})();

// B13: Pump power (average, 30)
(() => {
  for (let i = 0; i < 30; i++) {
    const Q = pick([0.02, 0.05, 0.08, 0.10, 0.15], i), H = pick([15, 20, 25, 30, 40, 50], Math.floor(i / 5));
    const eta = pick([0.60, 0.65, 0.70, 0.75, 0.80], Math.floor(i / 6));
    const P_w = fmt(9.81 * Q * H / eta);
    const l = pick(locsB, i), c = pick(cropsB, Math.floor(i / 6));
    const q = `A pump in ${l} delivers ${fmt(Q * 1000).toFixed(0)} L/s against a total head of ${H} m for ${c} irrigation. Pump efficiency is ${(eta * 100).toFixed(0)}%. Suction lift is ${pick([3, 5, 7], i)} m. Discharge pipe length is ${pick([100, 200, 300, 500], i)} m with ${pick([6, 8, 10], i)}-inch diameter. What is the pump power requirement in kW?`;
    pushQ(arrB, 'B', 'irrigation', 'Pump Power', 'average', q, P_w, [fmt(9.81 * Q * H), fmt(9.81 * Q * H / (eta + 0.1)), fmt(9.81 * Q * H / 0.9)], i, 'Pump power P = ρgQH/η, where ρ = 1000 kg/m³, g = 9.81 m/s², Q = discharge (m³/s), H = total head (m), η = pump efficiency.', [`P = 9.81 × ${Q} × ${H} / ${eta} = ${P_w} kW`], 'P = ρgQH / η');
  }
})();

// B14: NIR (easy, 30)
(() => {
  for (let i = 0; i < 30; i++) {
    const ETc = pick([4, 5, 6, 7, 8], i), Peff = pick([1, 2, 3, 4], Math.floor(i / 8));
    const GW = pick([0.5, 1.0, 1.5, 2.0], Math.floor(i / 8));
    const NIR = fmt(ETc - Peff - GW);
    const l = pick(locsB, i), c = pick(cropsB, Math.floor(i / 6)), stage = pick(['initial', 'development', 'mid-season', 'late-season'], Math.floor(i / 8));
    const q = `A ${c} field in ${l} at ${stage} has ETc = ${ETc} mm/day, effective rainfall of ${Peff} mm/day, and groundwater contribution of ${GW} mm/day. The water table depth is ${pick([1.0, 1.5, 2.0, 2.5], i)} m. Soil salinity is ${pick([0.5, 1.0, 1.5, 2.0], i)} dS/m. What is the net irrigation requirement in mm/day?`;
    pushQ(arrB, 'B', 'irrigation', 'Net Irrigation Requirement', 'easy', q, NIR, [fmt(ETc - Peff), fmt(ETc - GW), fmt(Peff + GW)], i, 'NIR = ETc - Peff - GW, where ETc = crop evapotranspiration, Peff = effective rainfall, GW = groundwater contribution from capillary rise.', [`NIR = ${ETc} - ${Peff} - ${GW} = ${NIR} mm/day`], 'NIR = ETc - Peff - GW');
  }
})();

// B15: Check dam volume (average, 30)
(() => {
  for (let i = 0; i < 30; i++) {
    const L = pick([10, 15, 20, 25, 30], i), H = pick([1.0, 1.5, 2.0, 2.5, 3.0], Math.floor(i / 5));
    const W = pick([0.5, 0.8, 1.0, 1.2], Math.floor(i / 8));
    const V = fmt(L * H * W / 2);
    const l = pick(locsB, i), sm = pick(soilsB, Math.floor(i / 6));
    const q = `A check dam in ${l} across a ${sm}-bed stream is ${L} m long, ${H} m high, with a ${W} m top width. Side slopes are ${pick(['1:1', '1.5:1', '2:1'], i)}. Catchment area is ${pick([50, 100, 200, 500], i)} ha. Annual rainfall is ${pick([1500, 1800, 2000], i)} mm. What is the approximate storage volume in m³?`;

    pushQ(arrB, 'B', 'irrigation', 'Check Dam Volume', 'average', q, V, [fmt(L * H * W), fmt(L * H * W / 3), fmt(L * H)], i, 'Check dam storage volume (triangular cross-section) V = L × H × W / 2, where L = length, H = height, W = top width. The trapezoidal/triangular shape determines the factor.', [`V = ${L} × ${H} × ${W} / 2 = ${V} m³`], 'V = L × H × W / 2');
  }
})();

// B16: Flood probability (hard, 30)
(() => {
  for (let i = 0; i < 30; i++) {
    const T = pick([5, 10, 20, 25, 50, 100], i), yrs = pick(P.years, Math.floor(i / 6));
    const P_y = fmt(1 - (1 - 1 / T) ** yrs);
    const l = pick(locsB, i);
    const q = `A flood control structure in ${l} is designed for a ${T}-year return period event. The project lifespan is ${yrs} years. The catchment area is ${pick([100, 500, 1000, 5000], i)} km². Historical floods occurred in ${pick(['1995, 2005, 2015', '2000, 2008, 2016', '1990, 2003, 2018'], Math.floor(i / 10))}. What is the probability of at least one flood exceeding the design in ${yrs} years?`;
    pushQ(arrB, 'B', 'irrigation', 'Flood Probability', 'hard', q, fmt(P_y * 100), [fmt((1 / T) * 100), fmt((1 / T) * yrs * 100), fmt(100 - P_y * 100)], i, 'Probability of exceedance in n years: P = 1 - (1 - 1/T)^n, where T = return period, n = number of years. This is a binomial probability calculation.', [`P = 1 - (1 - 1/${T})^{${yrs}} = ${fmt(P_y * 100)}%`], 'P = 1 - (1 - 1/T)^n', 'Risk = 1 - P(safe for n years) = 1 - (1 - p)^n, where p = 1/T (annual exceedance probability). Derived from binomial probability: P(X≥1) = 1 - P(X=0) = 1 - (1-p)^n.');
  }
})();

// B17: Manning's channel flow (hard, 30)
(() => {
  for (let i = 0; i < 30; i++) {
    const n_val = pick([0.012, 0.015, 0.018, 0.020, 0.025, 0.030], i);
    const S_val = pick([0.0005, 0.001, 0.002, 0.003, 0.005], Math.floor(i / 6));
    const b = pick([1.0, 1.5, 2.0, 2.5, 3.0], Math.floor(i / 6));
    const y = pick([0.5, 0.8, 1.0, 1.2, 1.5], Math.floor(i / 6));
    const A_m = fmt(b * y);
    const P_m = fmt(b + 2 * y);
    const R_m = fmt(A_m / P_m);
    const Q_m = fmt(A_m * Math.pow(R_m, 2 / 3) * Math.sqrt(S_val) / n_val);
    const l = pick(locsB, i);
    const q = `A rectangular channel in ${l} is ${b} m wide with ${y} m flow depth at ${S_val} slope. Manning n = ${n_val}. The channel is lined with ${pick(['concrete', 'riprap', 'grass', 'earth'], Math.floor(i / 8))}. Freeboard is ${pick([0.2, 0.3, 0.5], i)} m. Design discharge for a ${pick([5, 10, 25], i)}-yr event is ${fmt(Q_m * 1.2)} m³/s. What is the actual flow capacity in m³/s?`;
    pushQ(arrB, 'B', 'irrigation', 'Manning\'s Flow', 'hard', q, Q_m, [fmt(A_m * Math.pow(R_m, 2 / 3) / n_val), fmt(A_m * Math.sqrt(S_val) / n_val), fmt(A_m * Math.pow(R_m, 2 / 3) * Math.sqrt(S_val) / n_val * 0.8)], i, 'Manning\'s equation: Q = A × R^(2/3) × S^(1/2) / n, where A = cross-sectional area, R = hydraulic radius = A/P, S = slope, n = Manning\'s roughness.', [`A = ${b} × ${y} = ${A_m} m²`, `P = ${b} + 2 × ${y} = ${P_m} m`, `R = ${A_m} / ${P_m} = ${R_m} m`, `Q = ${A_m} × ${R_m}^(2/3) × √${S_val} / ${n_val} = ${Q_m} m³/s`], 'Q = A × R^(2/3) × S^(1/2) / n', 'Manning: v = (1/n) × R^(2/3) × √S. Q = A × v = A × (1/n) × R^(2/3) × √S. R = A/P (hydraulic radius). For rectangular: A = b × y, P = b + 2y. For trapezoidal: A = (b + zy)y, P = b + 2y√(1+z²).');
  }
})();

// B18: Sprinkler spacing (hard, 30)
(() => {
  for (let i = 0; i < 30; i++) {
    const q = pick([0.06, 0.08, 0.10, 0.12, 0.15, 0.18], i);
    const AR = pick([5, 8, 10, 12, 15], Math.floor(i / 6));
    const Sl = fmt(Math.sqrt((q * 3600) / AR));
    const Ss = Sl;
    const l = pick(locsB, i), c = pick(cropsB, Math.floor(i / 6));
    const qq = `A ${c} field in ${l} uses sprinklers with ${fmt(q * 1000).toFixed(0)} L/s discharge. Desired application rate is ${AR} mm/h. Operating pressure is ${pick([250, 300, 350], i)} kPa. Wind speed is ${pick([2, 3, 4, 5], i)} m/s. Nozzle size is ${pick([4.0, 4.5, 5.0, 5.5], i)} mm. What is the maximum sprinkler spacing in m?`;
    pushQ(arrB, 'B', 'irrigation', 'Sprinkler Spacing', 'hard', qq, Sl, [fmt(Sl * 1.2), fmt(Sl * 0.8), fmt(Math.sqrt(q * 3600))], i, 'Sprinkler spacing S = √(q × 3600 / AR), derived from AR = q × 3600 / (Sl × Ss). For square spacing, Sl × Ss = q × 3600 / AR.', [`S = √((${q} × 3600) / ${AR}) = ${Sl} m`], 'S = √(q × 3600 / AR)', 'Application rate AR = q × 3600 / (S_l × S_s). Rearranging: S_l × S_s = q × 3600 / AR. For square spacing (S_l = S_s = S): S² = q × 3600 / AR, hence S = √(q × 3600 / AR). Wind reduces effective spacing by 50-70%.');
  }
})();

// B19: Irrigation interval (average, 30)
(() => {
  for (let i = 0; i < 30; i++) {
    const TAW = pick([60, 80, 100, 120, 150], i), MAD = pick([0.4, 0.5, 0.55, 0.6, 0.65], Math.floor(i / 6));
    const ETc = pick([4, 5, 6, 7, 8], Math.floor(i / 5));
    const I = fmt(TAW * MAD / ETc);
    const l = pick(locsB, i), c = pick(cropsB, Math.floor(i / 6)), sm = pick(soilsB, Math.floor(i / 5));
    const q = `A ${c} crop on ${sm} in ${l} has TAW of ${TAW} mm, management allowed depletion of ${(MAD * 100).toFixed(0)}%, and ETc of ${ETc} mm/day. Root depth is ${pick([0.5, 0.6, 0.8, 1.0], i)} m. Infiltration rate is ${pick([8, 12, 16, 20], i)} mm/h. What is the irrigation interval in days?`;
    pushQ(arrB, 'B', 'irrigation', 'Irrigation Interval', 'average', q, I, [fmt(TAW / ETc), fmt(TAW * MAD), fmt(TAW * MAD / ETc * 1.5)], i, 'Irrigation interval = TAW × MAD / ETc, where TAW = total available water, MAD = management allowed depletion fraction, ETc = daily crop evapotranspiration.', [`Interval = ${TAW} × ${MAD} / ${ETc} = ${I} days`], 'Irr_interval = TAW × MAD / ETc');
  }
})();

// B20: Soil moisture deficit (easy, 30)
(() => {
  for (let i = 0; i < 30; i++) {
    const FC = pick([25, 30, 35, 40], i), theta = pick([18, 20, 22, 25, 28], Math.floor(i / 6));
    const deficit = fmt(FC - theta);
    const l = pick(locsB, i), sm = pick(soilsB, Math.floor(i / 5)), c = pick(cropsB, Math.floor(i / 6));
    const q = `A ${c} field in ${l} with ${sm} soil has current moisture content of ${theta}% and field capacity of ${FC}%. Bulk density is ${pick([1.2, 1.3, 1.4], i)} g/cm³. Porosity is ${pick([45, 50, 55, 60], i)}%. Time since last irrigation is ${pick([3, 5, 7, 10], i)} days. What is the soil moisture deficit in %?`;
    pushQ(arrB, 'B', 'irrigation', 'Soil Moisture Deficit', 'easy', q, deficit, [fmt(theta - FC), fmt(FC - theta + 5), fmt(FC - theta - 5)], i, 'Soil moisture deficit = Field capacity - Current moisture content. The deficit represents the amount of water needed to bring the soil back to field capacity.', [`Deficit = ${FC} - ${theta} = ${deficit}%`], 'SMD = FC - θ_current');
  }
})();


// ==================== AREA C: POST-HARVEST & PROCESSING ====================

const locsC = 'Nueva Ecija|Isabela|Pangasinan|Bulacan|Laguna|Iloilo|Negros Occ|Quezon'.split('|');
const cropsC = 'rice|corn|coconut|sugarcane|coffee|cacao|mango|pineapple'.split('|');
const vartyC = 'NSIC Rc222|NSIC Rc160|USM Var 10|IPB Var 1|PSB Rc18|NSIC Rc192|USM Var 22|IPB Var 6'.split('|');
const fuelt = 'diesel|gasoline|LPG|biogas|rice hull'.split('|');

// C1: Drying mass balance (average, 30)
(() => {
  for (let i = 0; i < 30; i++) {
    const Mi = pick([20, 22, 24, 26, 28, 30], i), Mf = pick([12, 13, 14, 15, 16], Math.floor(i / 6));
    const Wi = pick([1000, 2000, 3000, 5000], Math.floor(i / 8));
    const Wf = fmt(Wi * (100 - Mi) / (100 - Mf));
    const l = pick(locsC, i), c = pick(cropsC, Math.floor(i / 6)), v = pick(vartyC, Math.floor(i / 5));
    const q = `A ${c} drying facility in ${l} processes ${Wi} kg of ${v} at ${Mi}% initial moisture content. Target moisture is ${Mf}%. Drying air temperature is ${pick([40, 45, 50, 55], i)}°C with ${pick([50, 60, 70], i)}% RH. Airflow rate is ${pick([30, 40, 50], i)} m³/min. Fuel cost is P${pick([12, 15, 18], i)}/kg of ${pick(fuelt, Math.floor(i / 6))}. What is the final weight after drying in kg?`;
    pushQ(arrC, 'C', 'post-harvest', 'Drying Mass Balance', 'average', q, Wf, [fmt(Wi * (100 - Mf) / (100 - Mi)), fmt(Wi * (Mi - Mf) / 100), fmt(Wi * (100 - Mi) / (100 - Mf) * 0.95)], i, 'Mass balance: W_i × (100 - M_i) = W_f × (100 - M_f). The dry matter (100 - M) remains constant during drying.', [`W_f = ${Wi} × (100 - ${Mi}) / (100 - ${Mf}) = ${Wf} kg`], 'W_i × (100 - M_i) = W_f × (100 - M_f)', 'Dry matter conserved: DM = W_i × (100 - MC_i)/100 = W_f × (100 - MC_f)/100. Solve: W_f = W_i × (100 - MC_i) / (100 - MC_f). Water removed = W_i - W_f. Uses equilibrium moisture content concept.');
  }
})();

// C2: Moisture removal rate (hard, 30)
(() => {
  for (let i = 0; i < 30; i++) {
    const Wi = pick([500, 1000, 2000, 3000, 5000], i), Mi = pick([22, 24, 26, 28, 30], Math.floor(i / 5));
    const Mf = pick([12, 13, 14, 15], Math.floor(i / 7));
    const t = pick([4, 5, 6, 7, 8], Math.floor(i / 6));
    const water = fmt(Wi - Wi * (100 - Mi) / (100 - Mf));
    const rate = fmt(water / t);
    const l = pick(locsC, i), c = pick(cropsC, Math.floor(i / 6)), v = pick(vartyC, Math.floor(i / 5));
    const q = `A dryer in ${l} dries ${c} (${v}) from ${Mi}% to ${Mf}% moisture in ${t} hours. Batch size is ${Wi} kg. Heater uses ${fuelt[Math.floor(i / 5)]} at ${pick([5, 8, 10, 12], i)} L/h. Ambient temperature is ${pick([28, 30, 32, 35], i)}°C. Plenum temperature is ${pick([45, 50, 55, 60], i)}°C. What is the moisture removal rate in kg/h?`;
    pushQ(arrC, 'C', 'post-harvest', 'Moisture Removal Rate', 'hard', q, rate, [fmt(water), fmt(water / t * 1.2), fmt(water / t * 0.8)], i, 'Water removed = W_i - W_f. Removal rate = Water removed / Time. First find final weight using dry matter balance: W_f = W_i × (100 - Mi) / (100 - Mf).', [`W_f = ${Wi} × (100 - ${Mi}) / (100 - ${Mf}) = ${fmt(Wi * (100 - Mi) / (100 - Mf))} kg`, `Water removed = ${Wi} - ${fmt(Wi * (100 - Mi) / (100 - Mf))} = ${water} kg`, `Rate = ${water} / ${t} = ${rate} kg/h`], 'Moisture removal = (W_i × (M_i - M_f)) / (100 - M_f) / t', 'Dry matter is conserved: DM = W_i × (1 - M_i/100) = W_f × (1 - M_f/100). Solve for W_f = W_i × (100 - M_i) / (100 - M_f). Water removed = W_i - W_f. Removal rate = Water removed / drying time.');
  }
})();

// C3: Biogas energy yield (average, 30)
(() => {
  for (let i = 0; i < 30; i++) {
    const M = pick([100, 200, 300, 500, 800], i), yield_r = pick([0.3, 0.4, 0.5, 0.6, 0.7], Math.floor(i / 6));
    const CV_biogas = 22;
    const V_biogas = fmt(M * yield_r);
    const energy = fmt(V_biogas * CV_biogas);
    const l = pick(locsC, i), c = pick(cropsC, Math.floor(i / 6));
    const q = `A biogas plant in ${l} processes ${M} kg/day of ${c} waste with biogas yield of ${yield_r} m³/kg. Methane content is ${pick([55, 60, 65, 70], i)}%. The digester operates at ${pick([30, 35, 37, 40], i)}°C. Retention time is ${pick([20, 25, 30, 40], i)} days. Calorific value of biogas is ${CV_biogas} MJ/m³. What is the daily energy yield in MJ?`;
    pushQ(arrC, 'C', 'post-harvest', 'Biogas Energy', 'average', q, energy, [fmt(V_biogas * CV_biogas * 0.8), fmt(V_biogas), fmt(M * CV_biogas)], i, 'Biogas energy = Biogas volume × Calorific value. Volume = Substrate mass × Biogas yield per kg. Typical biogas CV is 22 MJ/m³.', [`Volume = ${M} × ${yield_r} = ${V_biogas} m³`, `Energy = ${V_biogas} × ${CV_biogas} = ${energy} MJ`], 'E = M × Y × CV');
  }
})();

// C4: Sensible heat (average, 30)
(() => {
  for (let i = 0; i < 30; i++) {
    const m = pick([100, 200, 500, 1000, 2000], i), T_h = pick([50, 55, 60, 65, 70], Math.floor(i / 5));
    const T_c = pick([25, 28, 30, 32, 35], Math.floor(i / 7));
    const Cp = pick([1.5, 1.8, 2.0, 2.2, 2.5], Math.floor(i / 6));
    const Q = fmt(m * Cp * (T_h - T_c));
    const l = pick(locsC, i), c = pick(cropsC, Math.floor(i / 6));
    const q = `A ${c} processing plant in ${l} heats ${m} kg of product from ${T_c}°C to ${T_h}°C. Specific heat is ${Cp} kJ/kg°C. The heat exchanger uses ${pick(['steam', 'hot water', 'thermal oil'], Math.floor(i / 10))} at ${pick([100, 120, 150, 180], i)}°C. Processing time is ${pick([30, 45, 60, 90], i)} minutes. What is the sensible heat required in kJ?`;
    pushQ(arrC, 'C', 'post-harvest', 'Sensible Heat', 'average', q, Q, [fmt(m * Cp * (T_h - T_c) * 0.8), fmt(m * (T_h - T_c)), fmt(m * Cp)], i, 'Sensible heat Q = m × Cp × ΔT, where m = mass (kg), Cp = specific heat (kJ/kg°C), ΔT = temperature change (°C).', [`Q = ${m} × ${Cp} × (${T_h} - ${T_c}) = ${Q} kJ`], 'Q = m × Cp × ΔT', 'Q = m × Cp × ΔT. Sensible heat required to raise temperature from T₁ to T₂. No phase change. If phase change occurs, add latent heat: Q = m × λ. Cp = specific heat capacity in kJ/(kg·°C).');
  }
})();

// C5: Refrigeration load / TR (average, 30)
(() => {
  for (let i = 0; i < 30; i++) {
    const m = pick([100, 200, 500, 1000, 2000], i), Cp = pick([1.5, 2.0, 2.5, 3.0, 3.5], Math.floor(i / 6));
    const dT = pick([15, 20, 25, 30, 35], Math.floor(i / 6));
    const t = pick([6, 8, 12, 24], Math.floor(i / 8));
    const Q_rem = fmt(m * Cp * dT * 1000 / (t * 3600));
    const TR = fmt(Q_rem / 3.517);
    const l = pick(locsC, i), c = pick(cropsC, Math.floor(i / 6));
    const q = `A cold storage in ${l} cools ${m} kg of ${c} by ${dT}°C over ${t} hours. Specific heat is ${Cp} kJ/kg°C. Ambient temperature is ${pick([30, 32, 35, 38], i)}°C. Insulation thickness is ${pick([75, 100, 125, 150], i)} mm. Compressor efficiency is ${pick([80, 85, 88, 90], i)}%. What is the required refrigeration capacity in TR?`;
    pushQ(arrC, 'C', 'post-harvest', 'Refrigeration Load', 'average', q, TR, [fmt(TR * 1.2), fmt(TR * 0.8), fmt(Q_rem / 3.517 * 1.5)], i, 'Cooling load Q_cool = m × Cp × ΔT. Convert from kJ to kW by dividing by cooling time. 1 TR (ton of refrigeration) = 3.517 kW.', [`Q_cool = ${m} × ${Cp} × ${dT} = ${fmt(m * Cp * dT)} kJ`, `Cooling rate = ${fmt(m * Cp * dT)} / (${t} × 3600) = ${Q_rem} kW`, `TR = ${Q_rem} / 3.517 = ${TR} TR`], 'TR = (m × Cp × ΔT) / (t × 3600 × 3.517)');
  }
})();

// C6: Storage volume (average, 30)
(() => {
  for (let i = 0; i < 30; i++) {
    const W = pick([10, 20, 30, 50, 100], i), rho_b = pick([550, 600, 650, 700, 750], Math.floor(i / 6));
    const V = fmt(W * 1000 / rho_b);
    const l = pick(locsC, i), c = pick(cropsC, Math.floor(i / 6)), v = pick(vartyC, Math.floor(i / 5));
    const q = `A storage facility in ${l} holds ${W} t of ${c} (${v}). Bulk density is ${rho_b} kg/m³. Storage bin diameter is ${pick([4, 5, 6, 8], i)} m. Allowable storage height is ${pick([3, 4, 5, 6], i)} m due to wall load limits. Ambient RH is ${pick([65, 70, 75, 80], i)}%. What is the required storage volume in m³?`;
    pushQ(arrC, 'C', 'post-harvest', 'Storage Volume', 'average', q, V, [fmt(W * 1000 / rho_b * 1.2), fmt(W * 1000 / rho_b * 0.8), fmt(W / rho_b * 100)], i, 'Storage volume V = Mass / Bulk density. Convert tonnes to kg (×1000) then divide by bulk density in kg/m³.', [`V = ${W} × 1000 / ${rho_b} = ${V} m³`], 'V = M / ρ_bulk');
  }
})();

// C7: Composting C:N mix (average, 30)
(() => {
  for (let i = 0; i < 30; i++) {
    const C_hi = pick([50, 60, 70, 80, 90], i), N_hi = pick([1, 1.5, 2, 2.5, 3], Math.floor(i / 6));
    const C_lo = pick([30, 35, 40, 45, 50], Math.floor(i / 6)), N_lo = pick([3, 3.5, 4, 4.5, 5], Math.floor(i / 6) + 2);
    const target = 30;
    const R = fmt((C_lo / N_lo - target) / (target - C_hi / N_hi));
    const l = pick(locsC, i), m1 = pick(['rice straw', 'corn stalks', 'sugarcane bagasse', 'coconut coir'], Math.floor(i / 8));
    const m2 = pick(['chicken manure', 'cattle manure', 'pig manure', 'green legumes'], Math.floor(i / 8));
    const q = `A composting facility in ${l} mixes ${m1} (C:N = ${C_hi}:${N_hi}) with ${m2} (C:N = ${C_lo}:${N_lo}) to achieve target C:N ratio of ${target}:1. Total batch is ${pick([5, 10, 20, 30], i)} t. Moisture content of ${m1} is ${pick([40, 50, 60], i)}%. What is the required mixing ratio of ${m1} to ${m2}?`;
    pushQ(arrC, 'C', 'post-harvest', 'Compost C:N Mixing', 'average', q, fmt(R), [fmt(R * 1.3), fmt(R * 0.7), fmt(1 / R)], i, 'Mixing ratio R = (C2/N2 - target) / (target - C1/N1). The ideal C:N ratio for composting is 25:1 to 30:1.', [`R = (${C_lo}/${N_lo} - ${target}) / (${target} - ${C_hi}/${N_hi}) = ${fmt(R)}`], 'R = (C₂/N₂ - T) / (T - C₁/N₁)');
  }
})();

// C8: Thermal processing F = D × n (average, 30)
(() => {
  for (let i = 0; i < 30; i++) {
    const D_val = pick([2, 3, 4, 5, 6], i), n_val = pick([4, 5, 6, 7, 8, 10], Math.floor(i / 5));
    const F_val = fmt(D_val * n_val);
    const l = pick(locsC, i), c = pick(cropsC, Math.floor(i / 6));
    const q = `A thermal process for ${c} in ${l} has a D-value of ${D_val} minutes at ${pick([115, 121, 130, 135], i)}°C and an n-value of ${n_val} decimal reductions. Initial microbial count is ${pick([10 ** 3, 10 ** 4, 10 ** 5, 10 ** 6], Math.floor(i / 8))} CFU/g. The retort temperature is ${pick([116, 121, 126], i)}°C. What is the F-value in minutes?`;
    pushQ(arrC, 'C', 'post-harvest', 'Thermal Processing', 'average', q, F_val, [fmt(D_val + n_val), fmt(D_val * (n_val + 1)), fmt(D_val * n_val * 0.9)], i, 'F-value = D-value × n (decimal reductions), where D = time for 1-log reduction at a given temperature, n = required number of decimal reductions for safety.', [`F = ${D_val} × ${n_val} = ${F_val} min`], 'F = D × n');
  }
})();

// C9: Livestock water consumption (easy, 30)
(() => {
  for (let i = 0; i < 30; i++) {
    const n_an = pick([50, 100, 200, 500, 1000], i), w_anim = pick([15, 20, 25, 30, 40], Math.floor(i / 6));
    const w_per = fmt(w_anim * 0.1);
    const total = fmt(n_an * w_per);
    const l = pick(locsC, i), anim = pick(['broiler', 'layer', 'pig', 'goat'], Math.floor(i / 8));
    const q = `A livestock farm in ${l} has ${n_an} ${anim}s averaging ${w_anim} kg each. Daily water requirement is ${w_per} L per head based on 10% of body weight. Ambient temperature is ${pick([28, 30, 32, 35], i)}°C. Feed type is ${pick(['commercial mash', 'pellets', 'home-mixed'], Math.floor(i / 10))}. What is the total daily water requirement in L?`;
    pushQ(arrC, 'C', 'post-harvest', 'Livestock Water', 'easy', q, total, [fmt(n_an * w_anim), fmt(n_an * w_per * 1.5), fmt(n_an * w_per * 0.5)], i, 'Total water = Number of animals × Water per animal per day. Water requirement varies with animal type, size, and environmental conditions.', [`Total = ${n_an} × ${w_per} = ${total} L/day`], 'W_total = N × W_per_head');
  }
})();

// C10: Manure biogas potential (hard, 30)
(() => {
  for (let i = 0; i < 30; i++) {
    const n_an = pick([50, 100, 200, 500, 1000], i), manure = pick([1.5, 2.0, 2.5, 3.0, 4.0], Math.floor(i / 6));
    const yield_r = pick([0.04, 0.05, 0.06, 0.07, 0.08], Math.floor(i / 6));
    const total_m = fmt(n_an * manure);
    const V_bg = fmt(total_m * 1000 * yield_r);
    const l = pick(locsC, i), anim = pick(['dairy cattle', 'beef cattle', 'swine', 'poultry'], Math.floor(i / 8));
    const q = `A ${anim} farm in ${l} with ${n_an} heads produces ${manure} kg manure per head daily. Biogas yield is ${yield_r} m³/kg manure. The digester operates at ${pick([28, 32, 35, 38], i)}°C with ${pick([20, 25, 30, 35], i)} days retention time. Manure TS content is ${pick([15, 18, 20, 25], i)}%. What is the daily biogas production in m³?`;
    pushQ(arrC, 'C', 'post-harvest', 'Manure Biogas', 'hard', q, V_bg, [fmt(total_m * 1000 * yield_r * 1.2), fmt(total_m * 1000), fmt(n_an * manure * 1000)], i, 'Biogas production = Number of animals × Manure per animal × Biogas yield per kg manure. Total manure = N × manure per head.', [`Total manure = ${n_an} × ${manure} = ${total_m} kg`, `Biogas = ${total_m} × 1000 × ${yield_r} = ${V_bg} m³/day`], 'V_biogas = N × M_per_head × Y_biogas', 'Total manure = N_animals × manure_per_head. Volatile solids (VS) = total manure × VS_% (typically 75-85% of dry matter). Biogas = VS × biogas_yield (m³/kg VS). Methane = biogas × CH₄% (typically 55-65%).');
  }
})();

// C11: Milling recovery (easy, 30)
(() => {
  for (let i = 0; i < 30; i++) {
    const paddy = pick([500, 1000, 2000, 3000, 5000], i), recovery = pick([0.60, 0.62, 0.65, 0.68, 0.70, 0.72], Math.floor(i / 5));
    const milled = fmt(paddy * recovery);
    const l = pick(locsC, i), v = pick(vartyC, Math.floor(i / 5));
    const q = `A rice mill in ${l} processes ${paddy} kg of paddy (${v}) with ${(recovery * 100).toFixed(0)}% milling recovery. Paddy price is P${pick([15, 17, 19, 20], i)}/kg. Milled rice price is P${pick([35, 38, 40, 42], i)}/kg. By-products include ${pick(['bran', 'hulls', 'broken rice'], Math.floor(i / 10))}. What is the milled rice output in kg?`;
    pushQ(arrC, 'C', 'post-harvest', 'Milling Recovery', 'easy', q, milled, [fmt(paddy / recovery), fmt(paddy * (recovery + 0.1)), fmt(paddy * recovery * 0.9)], i, 'Milled rice = Paddy input × Milling recovery. Typical milling recovery for well-milled rice is 60-70%.', [`Rice = ${paddy} × ${recovery} = ${milled} kg`], 'Rice_output = Paddy_input × Recovery');
  }
})();

// C12: Cooling load (average, 30)
(() => {
  for (let i = 0; i < 30; i++) {
    const m = pick([500, 1000, 2000, 3000, 5000], i), Cp = pick([2.0, 2.5, 3.0, 3.5, 4.0], Math.floor(i / 6));
    const dT = pick([20, 25, 30, 35, 40], Math.floor(i / 6));
    const t = pick([8, 12, 16, 24], Math.floor(i / 8));
    const Q_kW = fmt(m * Cp * dT * 1000 / (t * 3600));
    const l = pick(locsC, i), c = pick(cropsC, Math.floor(i / 6));
    const q = `A ${c} cold storage in ${l} chills ${m} kg by ${dT}°C over ${t} hours. Specific heat is ${Cp} kJ/kg°C. Wall insulation is ${pick([75, 100, 150], i)} mm polyurethane. Ambient temperature is ${pick([32, 35, 38], i)}°C. What is the product cooling load in kW?`;
    pushQ(arrC, 'C', 'post-harvest', 'Cooling Load', 'average', q, Q_kW, [fmt(m * Cp * dT / 3600), fmt(m * Cp * dT * 1000 / (t * 3600) * 1.2), fmt(m * Cp * dT * 1000 / (t * 3600) * 0.8)], i, 'Cooling load Q = m × Cp × ΔT / t, where m = mass (kg), Cp = specific heat (kJ/kg°C), ΔT = temperature change (°C), t = cooling time (s).', [`Q = ${m} × ${Cp} × ${dT} × 1000 / (${t} × 3600) = ${Q_kW} kW`], 'Q_cooling = m × Cp × ΔT / t');
  }
})();

// C13: Fermenter volume (hard, 30)
(() => {
  for (let i = 0; i < 30; i++) {
    const M = pick([200, 500, 1000, 2000, 5000], i), rho_s = pick([900, 950, 1000, 1050, 1100], Math.floor(i / 6));
    const t_ret = pick([2, 3, 5, 7, 10], Math.floor(i / 6));
    const V_day = fmt(M * 1000 / rho_s);
    const V_total = fmt(V_day * t_ret * 1.2);
    const l = pick(locsC, i), c = pick(cropsC, Math.floor(i / 6));
    const q = `A ${c} fermenter in ${l} processes ${M} kg daily with substrate density ${rho_s} kg/m³. Retention time is ${t_ret} days. Headspace allowance is 20%. Operating temperature is ${pick([30, 35, 37, 40], i)}°C. pH is maintained at ${pick([5.5, 6.0, 6.5, 7.0], i)}. What is the total fermenter volume in m³?`;
    pushQ(arrC, 'C', 'post-harvest', 'Fermenter Volume', 'hard', q, V_total, [fmt(V_day * t_ret), fmt(V_day * t_ret * 1.5), fmt(V_day * 1.2)], i, 'Fermenter volume = Daily substrate volume × Retention time × Headspace factor. Daily volume = Mass / Density. Typical headspace allowance is 20-30%.', [`V_daily = ${M} × 1000 / ${rho_s} = ${V_day} m³`, `V_total = ${V_day} × ${t_ret} × 1.2 = ${V_total} m³`], 'V = (M/ρ) × t_ret × (1 + headspace)', 'Daily substrate volume = Mass / Density. V_daily = M (kg) / ρ (kg/m³). Fermenter = V_daily × HRT × headspace_factor. HRT (hydraulic retention time) = 15-30 days for mesophilic. Headspace 20-30% for gas collection.');
  }
})();

// C14: Aeration requirement (average, 30)
(() => {
  for (let i = 0; i < 30; i++) {
    const Qr = pick([1, 2, 3, 5, 10], i), H = pick([3, 4, 5, 6, 8], Math.floor(i / 6));
    const eta_a = pick([60, 65, 70, 75, 80], Math.floor(i / 6));
    const P_a = fmt(9.81 * Qr * H / (eta_a / 100));
    const l = pick(locsC, i), c = pick(cropsC, Math.floor(i / 6));
    const q = `An aeration system in ${l} delivers ${Qr} m³/s airflow through ${c} at ${H} m static pressure. Fan efficiency is ${eta_a}%. Air temperature is ${pick([28, 30, 32, 35], i)}°C. RH is ${pick([60, 70, 80, 90], i)}%. Duct length is ${pick([20, 30, 50, 80], i)} m. What is the fan power requirement in kW?`;
    pushQ(arrC, 'C', 'post-harvest', 'Aeration', 'average', q, P_a, [fmt(9.81 * Qr * H / (eta_a / 100) * 0.8), fmt(9.81 * Qr * H), fmt(9.81 * Qr * H / ((eta_a - 10) / 100))], i, 'Fan power P = ρgQH/η, where Q = airflow (m³/s), H = static pressure (m), η = fan efficiency. ρ = 1.2 kg/m³ for air at standard conditions, but the formula is similar to pump power.', [`P = 9.81 × ${Qr} × ${H} / ${(eta_a / 100)} = ${P_a} kW`], 'P = ρgQH / η');
  }
})();

// C15: Drying time (average, 30)
(() => {
  for (let i = 0; i < 30; i++) {
    const Mi = pick([22, 24, 26, 28, 30], i), Mf = pick([12, 13, 14, 15], Math.floor(i / 5));
    const dm = 1000;
    const W_i = fmt(dm * 100 / (100 - Mi));
    const W_f = fmt(dm * 100 / (100 - Mf));
    const water = fmt(W_i - W_f);
    const DR = pick([0.5, 0.8, 1.0, 1.2, 1.5], Math.floor(i / 5));
    const t_dry = fmt(water / DR);
    const l = pick(locsC, i), c = pick(cropsC, Math.floor(i / 6)), v = pick(vartyC, Math.floor(i / 5));
    const q = `A ${c} dryer (${v}) in ${l} dries from ${Mi}% to ${Mf}% moisture. Dry matter content is ${dm} kg. The drying rate is ${DR} kg water/h. Drying air is at ${pick([40, 45, 50, 55], i)}°C and ${pick([50, 60, 70], i)}% RH. Heater fuel consumption is ${pick([3, 5, 8, 10], i)} L/h. What is the drying time in hours?`;
    pushQ(arrC, 'C', 'post-harvest', 'Drying Time', 'average', q, t_dry, [fmt(water / DR * 1.3), fmt(water / DR * 0.7), fmt(water)], i, 'Drying time = Water to remove / Drying rate. Water to remove = Initial weight - Final weight. Find weights from dry matter: W = (DM × 100) / (100 - M).', [`W_i = ${dm} × 100 / (100 - ${Mi}) = ${W_i} kg`, `W_f = ${dm} × 100 / (100 - ${Mf}) = ${W_f} kg`, `Water = ${W_i} - ${W_f} = ${water} kg`, `Time = ${water} / ${DR} = ${t_dry} h`], 't = (W_i - W_f) / DR');
  }
})();

// C16: Feed formulation (hard, 30)
(() => {
  for (let i = 0; i < 30; i++) {
    const target = pick([18, 20, 22, 24, 26], i), P1 = pick([8, 10, 12, 14], Math.floor(i / 6));
    const P2 = pick([40, 44, 46, 48, 50], Math.floor(i / 6));
    const R = fmt((target - P1) / (P2 - target));
    const l = pick(locsC, i), anim = pick(['broiler', 'layer', 'swine', 'fish'], Math.floor(i / 8));
    const i1 = pick(['corn', 'rice bran', 'wheat middlings', 'cassava'], Math.floor(i / 8));
    const i2 = pick(['soybean meal', 'fish meal', 'meat and bone meal', 'copra meal'], Math.floor(i / 8));
    const q = `A feed mill in ${l} formulates ${anim} feed with ${target}% CP target using ${i1} (${P1}% CP) and ${i2} (${P2}% CP). Batch size is ${pick([500, 1000, 2000], i)} kg. Added vitamins/minerals at ${pick([2, 3, 5], i)}%. ${i1} costs P${pick([12, 15, 18], i)}/kg and ${i2} costs P${pick([25, 30, 35, 40], i)}/kg. What is the mixing ratio of ${i1} to ${i2}?`;
    pushQ(arrC, 'C', 'post-harvest', 'Feed Formulation', 'hard', q, fmt(R), [fmt(R * 1.3), fmt(R * 0.7), fmt(1 / R)], i, 'Pearson\'s square (algebraic method): Ratio = (CP_target - CP_ingredient1) / (CP_ingredient2 - CP_target). This gives the proportion of ingredient1 to ingredient2.', [`Ratio = (${target} - ${P1}) / (${P2} - ${target}) = ${fmt(R)}`], 'R = (T - C₁) / (C₂ - T)', 'Pearson square method: Draw a square. Target CP in centre. CP of ingredient1 (high) at top-left, CP of ingredient2 (low) at bottom-left. Subtract diagonally across the square. Parts of each = absolute differences. Ratio = (T - P₂) / (P₁ - T).');
  }
})();

// C17: Irrigation water use efficiency (easy, 30)
(() => {
  for (let i = 0; i < 30; i++) {
    const yield_c = pick([3.0, 3.5, 4.0, 4.5, 5.0], i), WU = pick([400, 500, 600, 700, 800], Math.floor(i / 6));
    const WUE = fmt(yield_c / WU * 1000);
    const l = pick(locsC, i), c = pick(cropsC, Math.floor(i / 6)), v = pick(vartyC, Math.floor(i / 5));
    const q = `A ${c} field (${v}) in ${l} yields ${yield_c} t/ha with seasonal water use of ${WU} mm. Rainfall during season was ${pick([300, 400, 500], i)} mm. Supplemental irrigation was ${pick([100, 200, 300], i)} mm. Fertilizer applied was ${pick([90, 120, 150, 180], i)} kg N/ha. What is the water use efficiency in kg/ha/mm?`;
    pushQ(arrC, 'C', 'post-harvest', 'Water Use Efficiency', 'easy', q, WUE, [fmt(yield_c / WU * 1000 * 1.2), fmt(yield_c / WU * 1000 * 0.8), fmt(yield_c / (WU + 100) * 1000)], i, 'WUE = Yield / Water use, typically in kg/ha per mm. Higher WUE means more crop per drop.', [`WUE = ${yield_c} × 1000 / ${WU} = ${WUE} kg/ha/mm`], 'WUE = Y / WU');
  }
})();

// C18: Drying air requirement (hard, 30)
(() => {
  for (let i = 0; i < 30; i++) {
    const water = pick([100, 150, 200, 250, 300, 400], i), w_in = pick([10, 12, 14, 16, 18], Math.floor(i / 6));
    const w_out = pick([25, 28, 30, 32, 35], Math.floor(i / 6));
    const m_air = fmt(water / ((w_out - w_in) / 1000));
    const l = pick(locsC, i), c = pick(cropsC, Math.floor(i / 6));
    const q = `A dryer in ${l} removes ${water} kg water/h from ${c}. Inlet air humidity is ${w_in} g/kg, outlet air humidity is ${w_out} g/kg. Drying temperature is ${pick([45, 50, 55, 60], i)}°C. Ambient conditions are ${pick([28, 30, 32], i)}°C and ${pick([70, 75, 80], i)}% RH. What is the required dry air flow rate in kg/h?`;
    pushQ(arrC, 'C', 'post-harvest', 'Drying Air Requirement', 'hard', q, m_air, [fmt(water / ((w_out - w_in) / 1000) * 1.2), fmt(water / ((w_out - w_in) / 1000) * 0.8), fmt(water * 1000 / (w_out - w_in))], i, 'Dry air flow m_air = Water removed / (Humidity difference). The humidity difference (w_out - w_in) is the moisture pickup capacity of the air.', [`m_air = ${water} / ((${w_out} - ${w_in}) / 1000) = ${m_air} kg/h`], 'm_air = m_water / (ω_out - ω_in)', 'Mass balance: m_air × (w_out - w_in) = m_water. Rearranged: m_air = m_water / (w_out - w_in). Where w is absolute humidity (kg water/kg dry air). If given in g/kg, divide by 1000. The humidity difference is the moisture pickup capacity of air.');
  }
})();

// C19: Heat exchanger LMTD (hard, 30)
(() => {
  for (let i = 0; i < 30; i++) {
    const T_hi = pick([80, 90, 100, 110, 120], i), T_ho = pick([50, 55, 60, 65, 70], Math.floor(i / 5));
    const T_ci = pick([25, 28, 30, 32, 35], Math.floor(i / 6)), T_co = pick([45, 48, 50, 55, 60], Math.floor(i / 6));
    const dT1 = fmt(T_hi - T_co), dT2 = fmt(T_ho - T_ci);
    const LMTD = fmt((dT1 - dT2) / Math.log(dT1 / dT2));
    const l = pick(locsC, i), c = pick(cropsC, Math.floor(i / 6));
    const q = `A heat exchanger in a ${c} processing plant in ${l} has hot fluid entering at ${T_hi}°C and leaving at ${T_ho}°C. Cold fluid enters at ${T_ci}°C and leaves at ${T_co}°C. Flow arrangement is ${pick(['counter-flow', 'parallel-flow'], Math.floor(i / 15))}. Heat transfer area is ${pick([5, 10, 15, 20], i)} m². Overall U = ${pick([200, 300, 400, 500], i)} W/m²K. What is the LMTD in °C?`;
    pushQ(arrC, 'C', 'post-harvest', 'LMTD', 'hard', q, LMTD, [fmt((dT1 + dT2) / 2), fmt(dT1 - dT2), fmt((dT1 + dT2) * dT1 / (dT1 + dT2))], i, 'LMTD = (ΔT₁ - ΔT₂) / ln(ΔT₁/ΔT₂) for counter-flow. ΔT₁ = T_hi - T_co, ΔT₂ = T_ho - T_ci. LMTD accounts for varying temperature difference along the heat exchanger.', [`ΔT₁ = ${T_hi} - ${T_co} = ${dT1}°C`, `ΔT₂ = ${T_ho} - ${T_ci} = ${dT2}°C`, `LMTD = (${dT1} - ${dT2}) / ln(${dT1}/${dT2}) = ${LMTD}°C`], 'LMTD = (ΔT₁ - ΔT₂) / ln(ΔT₁/ΔT₂)', 'LMTD = (ΔT₁ - ΔT₂) / ln(ΔT₁/ΔT₂) for counter-flow. ΔT₁ = T_hot_in - T_cold_out, ΔT₂ = T_hot_out - T_cold_in. For parallel flow: ΔT₁ = T_hi - T_ci, ΔT₂ = T_ho - T_co. LMTD accounts for log-mean temperature difference along exchanger.');
  }
})();

// C20: Greenhouse ventilation (average, 30)
(() => {
  for (let i = 0; i < 30; i++) {
    const A = pick([100, 200, 300, 500, 800], i), H = pick([3, 4, 5, 6], Math.floor(i / 6));
    const V_g = fmt(A * H);
    const ACR = pick([20, 30, 40, 50, 60], Math.floor(i / 6));
    const Q_v = fmt(V_g * ACR / 3600);
    const l = pick(locsC, i), c = pick(cropsC, Math.floor(i / 6));
    const q = `A ${A} m² greenhouse in ${l} for ${c} has an average height of ${H} m and requires ${ACR} air changes per hour. Solar radiation inside is ${pick([300, 400, 500, 600], i)} W/m². Temperature inside is ${pick([32, 35, 38, 40], i)}°C and outside is ${pick([28, 30, 32], i)}°C. Fan capacity is ${pick([5, 10, 15], i)} m³/s each. What is the required ventilation rate in m³/s?`;
    pushQ(arrC, 'C', 'post-harvest', 'Greenhouse Ventilation', 'average', q, Q_v, [fmt(V_g * ACR / 3600 * 1.2), fmt(V_g * ACR / 3600 * 0.8), fmt(V_g / 3600)], i, 'Ventilation rate = Greenhouse volume × Air changes per hour / 3600. Volume = Floor area × Average height. Air changes depend on crop type and climate.', [`Volume = ${A} × ${H} = ${V_g} m³`, `Q_v = ${V_g} × ${ACR} / 3600 = ${Q_v} m³/s`], 'Q = V × ACR / 3600');
  }
})();


// ==================== OUTPUT ====================

arrA.sort((a, b) => a.id.localeCompare(b.id));
arrB.sort((a, b) => a.id.localeCompare(b.id));
arrC.sort((a, b) => a.id.localeCompare(b.id));

let output = `// Auto-generated ABELE-style questions from parameterized templates
// Generated ${new Date().toISOString()}

import { Question } from './comprehensive-questions';

export const bulkAreaAQuestions: Question[] = ${JSON.stringify(arrA, null, 2)};

export const bulkAreaBQuestions: Question[] = ${JSON.stringify(arrB, null, 2)};

export const bulkAreaCQuestions: Question[] = ${JSON.stringify(arrC, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '..', 'src', 'data', 'bulk-questions.ts'), output);
console.log(`Generated ${arrA.length} Area A, ${arrB.length} Area B, ${arrC.length} Area C questions`);
console.log(`Total: ${arrA.length + arrB.length + arrC.length} questions`);
