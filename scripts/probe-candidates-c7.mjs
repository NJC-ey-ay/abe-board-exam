// Candidate boxes for Area C batch 7: grain drying system design and the
// engine foundation. Ten specs.
//
// The two topics are structurally different and are treated differently.
//
// GRAIN DRYING (five) is a cascade: W_i produces C_D (rate) and V_g (volume);
// V_g and a bed depth produce A_f; and in this design A_f meets the airflow to
// give the apparent air velocity. All five are single-division formulas, so the
// boxes are controlled by the UNIT of the result - the distractors here are
// predominantly scale slips, because a rate (kg/h) and a volume (m^3) have no
// natural in-band structural twin. The unit slip is the danger: per-day vs
// per-hour is a flat 24x, per-minute is 60x, and reading a density as water
// instead of grain is a moveable ratio that must be kept OUT of the scalar
// band. c-volume-grain-to-dry and c-apparent-air-velocity both demonstrate
// that moveable ratio: because paddy bulk density (540-580) is just over half
// that of water, the water-density slip sits at 0.54-0.58 of the answer and
// the whole point is to keep the scalars outside it - 0.85 and 1.15 clear it,
// where 0.5 would sit inside.
//
// The airflow spec is the defect of the topic. The printed AF_R = C_D x SAF
// states SAF in m^3/min-ton and C_D as a RATE, and a rate times a per-ton flow
// has no coherent dimensional reading. What DOES work, and is the only way the
// next formula in the cascade, V_app = AF_R/A_f, can come out in m/min, is to
// count the CAPACITY as the tonnage of the batch being dried, not the tonnes
// per hour. That is the reading driven here - W_i in kg converted to tonnes,
// times the specific flow - and a SOURCE NOTE on the formula entry records why.
//
// ENGINE FOUNDATION (five) is an empirical chain from engine speed to the
// concrete block. Two of the five are transcription defects worth flagging the
// way previous batches have. c-soil-pressure-foundation prints W_E x W_F / A_F,
// the product of two weights, which is dimensionally not a pressure; the
// physical reading - and the one the factor-of-safety formula downstream
// needs - is the SUM of the two weights over the base area, which is driven
// here with a SOURCE NOTE. c-foundation-factor-safety fixes its bearing
// capacity constant at 12,225, but that constant has to appear in the question
// or the student cannot compute, so it is promoted to a giving variable in a
// realistic range around the source value.
//
// c-weight-of-foundation's distractors are the interesting pair. Forgetting the
// 0.11 is a flat 9.09x. Reading the N^0.5 as N is a moveable ratio of sqrt(N) -
// 28 to 42 - which is legal on its own and, being far from everything else, is
// the "different quantity" option rather than a plausible mistake. The scalars
// are 0.85/1.15 on all five foundation specs except where a band forbids them,
// because every one of these is a multiply or divide of directly-sized
// quantities.
export const CANDIDATES = [
  // ---------------------------------------------------------- drying chain
  {
    name: 'c-drying-capacity  CD = Wi / Td',
    round: 1,
    vars: {
      Wi: { min: 4000, max: 12000, dec: 1 },
      Td: { min: 6, max: 48, dec: 1 },
    },
    compute: v => v.Wi / v.Td,
    distractors: [
      v => (v.Wi * 24) / v.Td,
      v => (v.Wi * 60) / v.Td,
      v => 0.85 * (v.Wi / v.Td),
      v => 1.15 * (v.Wi / v.Td),
    ],
  },
  {
    name: 'c-volume-grain-to-dry  Vg = Wi / Rho',
    round: 2,
    vars: {
      Wi: { min: 4000, max: 12000, dec: 1 },
      Rho: { min: 540, max: 580, dec: 1 },
    },
    compute: v => v.Wi / v.Rho,
    distractors: [
      v => v.Wi / 1000,
      v => 0.85 * (v.Wi / v.Rho),
      v => 1.15 * (v.Wi / v.Rho),
    ],
  },
  {
    name: 'c-drying-floor-area  Af = Vg / Dg',
    round: 1,
    vars: {
      V: { min: 8, max: 24, dec: 1 },
      D: { min: 0.15, max: 0.45, dec: 2 },
    },
    compute: v => v.V / v.D,
    distractors: [
      v => v.V * v.D,
      v => 0.5 * (v.V / v.D),
      v => 2 * (v.V / v.D),
    ],
  },
  {
    name: 'c-airflow-requirement  AFR = (Wi/1000) x SAF',
    round: 0,
    vars: {
      Wi: { min: 4000, max: 12000, dec: 1 },
      Saf: { min: 10, max: 30, dec: 1 },
    },
    compute: v => (v.Wi / 1000) * v.Saf,
    distractors: [
      v => ((v.Wi / 1000) * v.Saf) * 60,
      v => 0.85 * ((v.Wi / 1000) * v.Saf),
      v => 1.15 * ((v.Wi / 1000) * v.Saf),
    ],
  },
  {
    name: 'c-apparent-air-velocity  Vapp = AFR / Af',
    round: 2,
    vars: {
      Afr: { min: 60, max: 360, dec: 1 },
      Af: { min: 30, max: 160, dec: 1 },
    },
    compute: v => v.Afr / v.Af,
    distractors: [
      v => (v.Afr * 60) / v.Af,
      v => 0.85 * (v.Afr / v.Af),
      v => 1.15 * (v.Afr / v.Af),
    ],
  },
  // ------------------------------------------------------ engine foundation
  {
    name: 'c-weight-of-foundation  WF = 0.11 x We x sqrt(N)',
    round: 0,
    vars: {
      We: { min: 500, max: 3000, dec: 1 },
      N: { min: 800, max: 1800, dec: 1 },
    },
    compute: v => 0.11 * v.We * Math.sqrt(v.N),
    distractors: [
      v => v.We * Math.sqrt(v.N),
      v => 0.11 * v.We * v.N,
      v => 0.85 * (0.11 * v.We * Math.sqrt(v.N)),
      v => 1.15 * (0.11 * v.We * Math.sqrt(v.N)),
    ],
  },
  {
    name: 'c-volume-of-foundation  VF = Wf / Rho',
    round: 2,
    vars: {
      Wf: { min: 1500, max: 14000, dec: 1 },
      Rho: { min: 2300, max: 2500, dec: 1 },
    },
    compute: v => v.Wf / v.Rho,
    distractors: [
      v => v.Wf / 1000,
      v => 0.85 * (v.Wf / v.Rho),
      v => 1.15 * (v.Wf / v.Rho),
    ],
  },
  {
    name: 'c-depth-of-foundation  DF = V / (W x L)',
    round: 2,
    vars: {
      V: { min: 1, max: 6, dec: 2 },
      W: { min: 1, max: 2.5, dec: 1 },
      L: { min: 2, max: 4, dec: 1 },
    },
    compute: v => v.V / (v.W * v.L),
    distractors: [
      v => (2 * v.V) / (v.W * v.L),
      v => 0.85 * (v.V / (v.W * v.L)),
      v => 1.15 * (v.V / (v.W * v.L)),
    ],
  },
  {
    name: 'c-soil-pressure-foundation  Ps = (We + Wf) / Af',
    round: 1,
    vars: {
      We: { min: 500, max: 3000, dec: 1 },
      Wf: { min: 1500, max: 14000, dec: 1 },
      Af: { min: 1.5, max: 6, dec: 2 },
    },
    compute: v => (v.We + v.Wf) / v.Af,
    distractors: [
      v => v.We / v.Af,
      v => 0.85 * ((v.We + v.Wf) / v.Af),
      v => 1.15 * ((v.We + v.Wf) / v.Af),
    ],
  },
  {
    name: 'c-foundation-factor-safety  FS = Bc / Ps',
    round: 2,
    vars: {
      Bc: { min: 12000, max: 12500, dec: 1 },
      Ps: { min: 2000, max: 6100, dec: 1 },
    },
    compute: v => v.Bc / v.Ps,
    distractors: [
      v => v.Ps / v.Bc,
      v => 0.85 * (v.Bc / v.Ps),
      v => 1.15 * (v.Bc / v.Ps),
    ],
  },
];