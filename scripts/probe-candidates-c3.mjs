// Candidate boxes for Area C batch 3 (thermal + psychrometrics), pre-flight.
// Numbers here are provisional: this file exists so the probe can measure each
// distractor's true ratio band and each pair's closest approach before any of it
// is written into src/data/drill-specs-area-c-electrical-3.ts.
export const CANDIDATES = [
  {
    name: 'c-temperature-conversions  degC = 5/9 (degF - 32)',
    round: 4,
    vars: { degF: { min: 50, max: 200, dec: 1 } },
    compute: v => (5 / 9) * (v.degF - 32),
    distractors: [
      v => (5 / 9) * v.degF,
      v => (9 / 5) * (v.degF - 32),
      v => 0.85 * ((5 / 9) * (v.degF - 32)),
      v => 1.15 * ((5 / 9) * (v.degF - 32)),
    ],
  },
  {
    name: 'c-stefan-boltzmann  Q = eps sigma A T^4   [Kelvin error option]',
    round: 4,
    vars: {
      eps: { min: 0.2, max: 0.95, dec: 0.01 },
      A: { min: 0.05, max: 5, dec: 0.01 },
      T: { min: 600, max: 900, dec: 1 },
    },
    compute: v => v.eps * 5.669e-8 * v.A * Math.pow(v.T, 4),
    distractors: [
      v => v.eps * 5.669e-8 * v.A * Math.pow(v.T + 273.15, 4),
      v => 0.5 * (v.eps * 5.669e-8 * v.A * Math.pow(v.T, 4)),
      v => 0.85 * (v.eps * 5.669e-8 * v.A * Math.pow(v.T, 4)),
      v => 1.15 * (v.eps * 5.669e-8 * v.A * Math.pow(v.T, 4)),
    ],
  },
  {
    name: 'c-first-law  dE = Q - W   [W/Q held in 0.15..0.55]',
    round: 4,
    vars: {
      Q: { min: 1300, max: 3000, dec: 1 },
      W: { min: 500, max: 700, dec: 1 },
    },
    compute: v => v.Q - v.W,
    // W alone spans 0.200..1.167, which contains 0.5 EXACTLY: when Q = 3W,
    // W/(Q-W) = 1/2. So the fourth slot cannot be a 0.5 scalar, and it cannot
    // be 0.85 or 1.15 either, since W alone's band reaches 1.167. The three
    // structural options together cover 0.2..3.24, so the remaining slot has to
    // sit below all of it. 0.1x is the kJ/J unit slip, which is a real error
    // and lands at a tenth of the answer.
    distractors: [
      v => v.Q + v.W,
      v => v.Q,
      v => v.W,
      v => 0.1 * (v.Q - v.W),
    ],
  },
  {
    name: 'c-newtons-law-cooling  Qh = hc A (Ts - Tf)  [Kelvin error option]',
    round: 4,
    vars: {
      hc: { min: 5, max: 60, dec: 0.1 },
      A: { min: 0.05, max: 10, dec: 0.01 },
      Ts: { min: 50, max: 110, dec: 1 },
      Tf: { min: 15, max: 40, dec: 1 },
    },
    compute: v => v.hc * v.A * (v.Ts - v.Tf),
    distractors: [
      v => v.hc * v.A * (v.Ts + 273.15 - v.Tf),
      v => 0.5 * (v.hc * v.A * (v.Ts - v.Tf)),
      v => 0.85 * (v.hc * v.A * (v.Ts - v.Tf)),
      v => 1.15 * (v.hc * v.A * (v.Ts - v.Tf)),
    ],
  },
  {
    name: 'c-fouriers-law  cylindrical wall, 2 pi K L dT / ln(ro/ri)',
    round: 4,
    vars: {
      K: { min: 25, max: 200, dec: 1 },
      L: { min: 0.5, max: 5, dec: 0.01 },
      Ti: { min: 60, max: 200, dec: 1 },
      To: { min: 10, max: 50, dec: 1 },
      ri: { min: 10, max: 50, dec: 1 },
      ro: { min: 60, max: 200, dec: 1 },
    },
    compute: v => (2 * Math.PI * v.K * v.L * (v.Ti - v.To)) / Math.log(v.ro / v.ri),
    // Writing x = ro/ri, the "used the ratio, not the log" option is
    // 2 pi KL dT / x against 2 pi KL dT / ln x, so its ratio is ln(x)/x - NOT
    // x/ln(x) times 2 pi. For x in 1.2..20 that runs 0.1498..0.3679, peaking at
    // 1/e = 0.3679 where x = e. Dropping the 2 pi gives a flat 0.15915, which
    // sits INSIDE that band: the two options close to 0.165% of each other.
    // The 2 pi is therefore not offered at all here, and the fourth slot is a
    // 0.5 scalar, clear of the top of the log-error band by 36 percent.
    distractors: [
      v => (2 * Math.PI * v.K * v.L * (v.Ti - v.To)) / (v.ro / v.ri),
      v => 0.5 * ((2 * Math.PI * v.K * v.L * (v.Ti - v.To)) / Math.log(v.ro / v.ri)),
      v => 0.85 * ((2 * Math.PI * v.K * v.L * (v.Ti - v.To)) / Math.log(v.ro / v.ri)),
      v => 1.15 * ((2 * Math.PI * v.K * v.L * (v.Ti - v.To)) / Math.log(v.ro / v.ri)),
    ],
  },
  {
    name: 'c-heat-utilization-factor  HUF = (T3-T2)/(T1-T2)',
    round: 4,
    vars: {
      T1: { min: 25, max: 35, dec: 1 },
      T3: { min: 45, max: 55, dec: 1 },
      T2: { min: 70, max: 85, dec: 1 },
    },
    compute: v => (v.T3 - v.T2) / (v.T1 - v.T2),
    distractors: [
      v => (v.T2 - v.T1) / (v.T2 - v.T3),
      v => 0.5 * ((v.T3 - v.T2) / (v.T1 - v.T2)),
      v => 0.85 * ((v.T3 - v.T2) / (v.T1 - v.T2)),
      v => 1.15 * ((v.T3 - v.T2) / (v.T1 - v.T2)),
    ],
  },
  {
    name: 'c-stress  sigma = P/A, perimeter trap',
    round: 4,
    vars: {
      P: { min: 2000, max: 200000, dec: 1 },
      A: { min: 100, max: 5000, dec: 1 },
    },
    compute: v => v.P / v.A,
    distractors: [
      v => v.P / (4 * Math.sqrt(v.A)),
      v => v.P / (2 * v.A),
      v => 0.85 * (v.P / v.A),
      v => 1.15 * (v.P / v.A),
    ],
  },
  {
    name: 'c-humidity-ratio  W = pv/Patm  [mass-ratio options]',
    round: 5,
    vars: {
      pv: { min: 1.5, max: 4, dec: 0.01 },
      Patm: { min: 95, max: 105, dec: 0.1 },
    },
    compute: v => v.pv / v.Patm,
    distractors: [
      v => (0.622 * v.pv) / (v.Patm - v.pv),
      v => v.pv / (v.Patm - v.pv),
      v => 0.85 * (v.pv / v.Patm),
      v => 1.15 * (v.pv / v.Patm),
    ],
  },
  {
    name: 'c-saturation-ratio  SR = Wact/Wsat  [Wsat floor raised to 0.028]',
    round: 5,
    vars: {
      Wact: { min: 0.006, max: 0.018, dec: 0.0001 },
      Wsat: { min: 0.028, max: 0.05, dec: 0.001 },
    },
    // The moisture deficit Wsat - Wact, measured against the answer
    // Wact/Wsat, has ratio Wsat(Wsat - Wact)/Wact. Its MINIMUM needs the
    // smallest Wsat and simultaneously the largest Wact, because that is the
    // corner where the deficit is thinnest while the ratio is largest. With
    // Wsat down at 0.021 that corner gives 0.021*0.003/0.018 = 0.0035, under
    // the 1 percent floor - dividing the widest deficit by the widest ratio
    // instead pairs two extremes that never co-occur. Lifting the Wsat floor
    // to 0.028 moves that corner to 0.0156.
    compute: v => v.Wact / v.Wsat,
    distractors: [
      v => v.Wsat / v.Wact,
      v => v.Wsat - v.Wact,
      v => 0.85 * (v.Wact / v.Wsat),
      v => 1.15 * (v.Wact / v.Wsat),
    ],
  },
  {
    name: 'c-density-specific-volume  Vspec = V/m  [box tightened to real densities]',
    round: 6,
    // Density is m/V, and the two ranges are sampled independently, so the
    // corner densities are m_min/V_max and m_max/V_min. The first box tried
    // m 0.5..500 kg against V 0.001..2 m3, which put 500 kg inside a litre:
    // a density of 500000 kg/m3, and a specific volume of 2e-6 m3/kg. For
    // every corner to be a substance that exists, m_min >= 50 V_max and
    // m_max <= 2000 V_min, and 50/2000 brackets grain, water, timber and
    // steel. m 200..400 kg over V 0.2..4 m3 gives corner densities of exactly
    // 50 and 2000 kg/m3.
    vars: {
      m: { min: 200, max: 400, dec: 1 },
      V: { min: 0.2, max: 4, dec: 0.1 },
    },
    compute: v => v.V / v.m,
    distractors: [
      v => v.V / (2 * v.m),
      v => 2 * (v.V / v.m),
      v => 0.85 * (v.V / v.m),
      v => 1.15 * (v.V / v.m),
    ],
  },
];

