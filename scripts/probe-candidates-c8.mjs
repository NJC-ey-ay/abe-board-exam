// Candidate boxes for Area C batch 8: bucket elevator, conveying & storage,
// and grain storage structures. Eleven specs.
//
// Three structural notes before the boxes.
//
// REJECTED OPTIONS — the additive bins. c-bin-peak-storage-capacity and
// c-hopper-bottom-bin are a cylinder plus an additive cone/hopper correction,
// and any distractor that OMITS or SCALES one additive TERM is a moving ratio
// of the form (base+correction)/base, which sweeps through the scalar band
// whenever the correction is small beside the cylinder. The probe-visible
// version: at D 3, H 8, phi 25 the peak correction is 2.8% of the volume, so a
// "level-full" option sits at 0.97 of the answer and 1.15 catches nothing. For
// these two specs every distractor is therefore a PURE MULTIPLIER of the whole
// answer: a diameter/radius slip (halve D -> ratio 1/4 inside the same
// bracket) or a diameter/double slip (4x), plus the scalars. They are clean
// precisely because they multiply the entire volume, correction and all.
//
// REJECTED OPTIONS — any reciprocal. c-bucket-elevator-speed divides 54.19 by
// sqrt(R), so an "inverted" option is a ratio of R itself, and with R in
// [1,4] that ratio runs through 1.0 and 1.15 together. c-low-speed-rubber-roller
// is already a fraction, so its twins are the fraction's two faces - the
// removed quarter (0.25 N_F, ratio 1/3) and the complement (1.25 N_F, ratio
// 5/3) - which are both stable enough to keep.
//
// DISCRETE-CONSTANT RULES. c-bucket-elevator-power's direction factor F is 1.2
// (upside) or 1.5 (downside) in the handbook; it is driven as a giving
// variable in [1.2,1.5] so the sampled value can be either face and the drill
// honestly defaults the student to reading F off the story. The F=1.5
// distractor against an F=1.2 answer is a fixed 1.25 ratio, which is inside
// the 1.15 scalar's reach, so the two are never in the same option set - the
// wrong-direction slip is dropped and the distractors are the per-hour scale
// slip, 0.85 and 1.15. c-vertical-abrasive-whitener-brakes divides cone
// diameter in mm by 100 to count brakes (5-15 here), so the wrong-divisor
// option D/50 is a 2x multiple and safe, while D/200 would round onto the
// 0.85 option around the low end and is dropped.
//
// The paddy-separator spec drives the LONG-GRAIN lane (divide by 40) and the
// SHORT-GRAIN lane (divide by 60) is a structural distractor at a fixed 2/3 -
// the two lanes are the entire substance of the formula, so both must be in
// the option set.
export const CANDIDATES = [
  // -------------------------------------------------------- bucket elevator
  {
    name: 'c-bucket-velocity  VB = pi * D * N',
    round: 0,
    vars: {
      D: { min: 2, max: 8, dec: 1 },
      N: { min: 30, max: 90, dec: 1 },
    },
    compute: v => Math.PI * v.D * v.N,
    distractors: [
      v => (Math.PI / 2) * v.D * v.N,
      v => v.D * v.N,
      v => 0.85 * (Math.PI * v.D * v.N),
      v => 1.15 * (Math.PI * v.D * v.N),
    ],
  },
  {
    name: 'c-bucket-elevator-speed  N = 54.19 / sqrt(R)',
    round: 1,
    vars: {
      R: { min: 1, max: 4, dec: 2 },
    },
    compute: v => 54.19 / Math.sqrt(v.R),
    distractors: [
      v => 54.19 / Math.sqrt(2 * v.R),
      v => 0.85 * (54.19 / Math.sqrt(v.R)),
      v => 1.15 * (54.19 / Math.sqrt(v.R)),
    ],
  },
  {
    name: 'c-bucket-elevator-power  P = C * H * F',
    round: 0,
    vars: {
      C: { min: 100, max: 2000, dec: 1 },
      H: { min: 5, max: 40, dec: 1 },
      F: { min: 1.2, max: 1.5, dec: 1 },
    },
    compute: v => v.C * v.H * v.F,
    distractors: [
      v => v.C * v.H * v.F * 60,
      v => 0.85 * (v.C * v.H * v.F),
      v => 1.15 * (v.C * v.H * v.F),
    ],
  },
  // --------------------------------------------------------- conveying
  {
    name: 'c-screw-conveyor-capacity  Cap = (pi D^2 /4) * P * N',
    round: 1,
    vars: {
      D: { min: 0.5, max: 1.2, dec: 2 },
      P: { min: 0.4, max: 1.0, dec: 2 },
      N: { min: 30, max: 120, dec: 1 },
    },
    compute: v => (Math.PI * v.D * v.D / 4) * v.P * v.N,
    distractors: [
      v => Math.PI * v.D * v.D * v.P * v.N,
      v => v.D * v.D * v.P * v.N,
      v => 0.5 * ((Math.PI * v.D * v.D / 4) * v.P * v.N),
      v => 0.85 * ((Math.PI * v.D * v.D / 4) * v.P * v.N),
      v => 1.15 * ((Math.PI * v.D * v.D / 4) * v.P * v.N),
    ],
  },
  {
    name: 'c-volume-of-pile  V = CWH / StockDensity',
    round: 1,
    vars: {
      CWH: { min: 500, max: 5000, dec: 1 },
      Rho: { min: 10, max: 15, dec: 1 },
    },
    compute: v => v.CWH / v.Rho,
    distractors: [
      v => v.CWH,
      v => 0.85 * (v.CWH / v.Rho),
      v => 1.15 * (v.CWH / v.Rho),
    ],
  },
  {
    name: 'c-paddy-separator-compartments  Nc = Cb / 40',
    round: 0,
    vars: {
      Cb: { min: 800, max: 2400, dec: 1 },
    },
    compute: v => v.Cb / 40,
    distractors: [
      v => v.Cb / 60,
      v => 0.85 * (v.Cb / 40),
      v => 1.15 * (v.Cb / 40),
    ],
  },
  // --------------------------------------------------- grain storage structures
  {
    name: 'c-bin-level-full-volume  V = (pi D^2 /4) * H',
    round: 1,
    vars: {
      D: { min: 3, max: 12, dec: 1 },
      H: { min: 2, max: 8, dec: 1 },
    },
    compute: v => (Math.PI * v.D * v.D / 4) * v.H,
    distractors: [
      v => Math.PI * v.D * v.D * v.H,
      v => 0.5 * ((Math.PI * v.D * v.D / 4) * v.H),
      v => 0.85 * ((Math.PI * v.D * v.D / 4) * v.H),
      v => 1.15 * ((Math.PI * v.D * v.D / 4) * v.H),
    ],
  },
  {
    name: 'c-bin-peak-storage-capacity  V = (pi D^2 /4)(H + (D/2)tan(phi)/3)',
    round: 1,
    vars: {
      D: { min: 3, max: 12, dec: 1 },
      H: { min: 2, max: 8, dec: 1 },
      Phi: { min: 25, max: 45, dec: 1 },
    },
    compute: v => (Math.PI * v.D * v.D / 4) * (v.H + ((v.D / 2) * Math.tan(v.Phi * Math.PI / 180)) / 3),
    distractors: [
      v => (Math.PI * (v.D / 2) * (v.D / 2) / 4) * (v.H + ((v.D / 2) * Math.tan(v.Phi * Math.PI / 180)) / 3),
      v => (Math.PI * (2 * v.D) * (2 * v.D) / 4) * (v.H + ((v.D / 2) * Math.tan(v.Phi * Math.PI / 180)) / 3),
      v => 0.85 * ((Math.PI * v.D * v.D / 4) * (v.H + ((v.D / 2) * Math.tan(v.Phi * Math.PI / 180)) / 3)),
      v => 1.15 * ((Math.PI * v.D * v.D / 4) * (v.H + ((v.D / 2) * Math.tan(v.Phi * Math.PI / 180)) / 3)),
    ],
  },
  {
    name: 'c-hopper-bottom-bin  V = (pi D^2 /4)(H + (D/2)tan(phi)/3 + (D/2)tan(delta)/3)',
    round: 1,
    vars: {
      D: { min: 3, max: 12, dec: 1 },
      H: { min: 2, max: 8, dec: 1 },
      Phi: { min: 25, max: 45, dec: 1 },
      Delta: { min: 30, max: 60, dec: 1 },
    },
    compute: v => (Math.PI * v.D * v.D / 4) * (v.H + ((v.D / 2) * Math.tan(v.Phi * Math.PI / 180)) / 3 + ((v.D / 2) * Math.tan(v.Delta * Math.PI / 180)) / 3),
    distractors: [
      v => (Math.PI * (v.D / 2) * (v.D / 2) / 4) * (v.H + ((v.D / 2) * Math.tan(v.Phi * Math.PI / 180)) / 3 + ((v.D / 2) * Math.tan(v.Delta * Math.PI / 180)) / 3),
      v => (Math.PI * (2 * v.D) * (2 * v.D) / 4) * (v.H + ((v.D / 2) * Math.tan(v.Phi * Math.PI / 180)) / 3 + ((v.D / 2) * Math.tan(v.Delta * Math.PI / 180)) / 3),
      v => 0.85 * ((Math.PI * v.D * v.D / 4) * (v.H + ((v.D / 2) * Math.tan(v.Phi * Math.PI / 180)) / 3 + ((v.D / 2) * Math.tan(v.Delta * Math.PI / 180)) / 3)),
      v => 1.15 * ((Math.PI * v.D * v.D / 4) * (v.H + ((v.D / 2) * Math.tan(v.Phi * Math.PI / 180)) / 3 + ((v.D / 2) * Math.tan(v.Delta * Math.PI / 180)) / 3)),
    ],
  },
  {
    name: 'c-vertical-abrasive-whitener-brakes  NB = D / 100',
    round: 0,
    vars: {
      D: { min: 500, max: 1500, dec: 1 },
    },
    compute: v => v.D / 100,
    distractors: [
      v => v.D / 50,
      v => 0.85 * (v.D / 100),
      v => 1.15 * (v.D / 100),
    ],
  },
  {
    name: 'c-low-speed-rubber-roller  NS = NF * (1 - 0.25)',
    round: 0,
    vars: {
      Nf: { min: 480, max: 960, dec: 1 },
    },
    compute: v => v.Nf * 0.75,
    distractors: [
      v => v.Nf * 0.25,
      v => v.Nf * 1.25,
      v => 0.85 * (v.Nf * 0.75),
      v => 1.15 * (v.Nf * 0.75),
    ],
  },
];