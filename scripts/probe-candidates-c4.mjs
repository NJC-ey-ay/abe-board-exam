// Candidate boxes for Area C batch 4 (lumber board foot, belts, pump and fan
// affinity laws, air power, fan pitch, dryer-fan specific speed).
//
// The pump and fan laws are the reason this batch needed the probe most. Every
// printed relation is a power law, so a distractor built from the wrong exponent
// is at that exponent MINUS the answer's own exponent - the same
// one-power-higher trap as the rest of the batch, and worse, because the
// exponent is the whole content of the relation. The specific-speed drill is
// the sharpest case: it has 0.5 on Q and 0.75 on P, so nearly every plausible
// misreading is within a factor of two of the answer and the ranges have to be
// arranged for the bands to separate at all.
export const CANDIDATES = [
  {
    name: 'c-board-foot  Bd.Ft = Lin Win Hft / 12',
    round: 4,
    vars: {
      Lin: { min: 24, max: 240, dec: 1 },
      Win: { min: 1, max: 12, dec: 0.1 },
      Hft: { min: 0.0833, max: 1.5, dec: 0.0001 },
    },
    compute: v => (v.Lin * v.Win * v.Hft) / 12,
    // 1 board foot is 1 in x 12 in x 1 ft = 12 in2.ft, so dividing the
    // in2.ft product by 12 is the whole formula. The two offered errors are the
    // missing divisor and using the 144 divisor of the all-inches form against
    // a thickness already in feet.
    distractors: [
      v => v.Lin * v.Win * v.Hft,
      v => (v.Lin * v.Win * v.Hft) / 144,
      v => 0.85 * ((v.Lin * v.Win * v.Hft) / 12),
      v => 1.15 * ((v.Lin * v.Win * v.Hft) / 12),
    ],
  },
  {
    name: 'c-board-foot-from-log  Bd.Ft = (D-4)^2 L / 16',
    round: 4,
    vars: {
      D: { min: 6, max: 30, dec: 0.1 },
      L: { min: 4, max: 20, dec: 0.1 },
    },
    compute: v => (Math.pow(v.D - 4, 2) * v.L) / 16,
    // Forgetting the 4 gives D^2L/16, whose ratio to the answer is
    // D^2/(D-4)^2 = 1.331..9 over D = 6..30. Dropping the square gives
    // (D-4)L/16, ratio 1/(D-4) = 0.0385..0.5. Those two bands are disjoint
    // and both clear of the scalar pair - 0.85 clears the top of the second by
    // 70 percent and 1.15 clears the bottom of the first by 16 percent.
    distractors: [
      v => ((v.D - 4) * v.L) / 16,
      v => (v.D * v.D * v.L) / 16,
      v => 0.85 * ((Math.pow(v.D - 4, 2) * v.L) / 16),
      v => 1.15 * ((Math.pow(v.D - 4, 2) * v.L) / 16),
    ],
  },
  {
    name: 'c-belt-speed  V = pi N D   [radius-vs-diameter trap]',
    round: 4,
    vars: {
      N: { min: 100, max: 1800, dec: 1 },
      D: { min: 0.075, max: 0.5, dec: 0.001 },
    },
    compute: v => Math.PI * v.N * v.D,
    // N in rpm and D in m give V in m/min, which is why the unit is not m/s
    // and why the conversions carry the /60.
    distractors: [
      v => Math.PI * v.N * (v.D / 2),
      v => v.N * v.D,
      v => 0.85 * (Math.PI * v.N * v.D),
      v => 1.15 * (Math.PI * v.N * v.D),
    ],
  },
  {
    name: 'c-belt-power  Pbelt = Pfluid / Epump',
    round: 4,
    vars: {
      Pf: { min: 0.5, max: 50, dec: 0.01 },
      E: { min: 0.4, max: 0.7, dec: 0.01 },
    },
    compute: v => v.Pf / v.E,
    // The two power errors are the exponent trap again. Multiplying by E when
    // the formula divides puts the option at E^2 of the answer, so that band
    // is 0.16 to 0.49. Dividing twice puts it at 1/E, so that band is 1.429 to
    // 2.5.
    //
    // The efficiency ceiling is 0.7, not the more attractive 0.85. It is
    // 1/E_max that sets the bottom of the upper band, so a higher ceiling
    // drops that band toward 1.176 and leaves the 1.15 scalar 2.25 percent
    // away - passing, but with no margin. At a 0.7 ceiling the band starts at
    // 1.429 and the gap is 24 percent. A pump-belt efficiency of 40 to 70
    // percent is realistic for small agricultural drives, so the tighter
    // ceiling costs nothing.
    distractors: [
      v => v.Pf * v.E,
      v => v.Pf / (v.E * v.E),
      v => 0.85 * (v.Pf / v.E),
      v => 1.15 * (v.Pf / v.E),
    ],
  },
  {
    name: 'c-pump-laws  N2 = N1 (H2/H1)^(1/2)   [exponent trap]',
    round: 4,
    vars: {
      N1: { min: 600, max: 1800, dec: 1 },
      H1: { min: 4, max: 12, dec: 0.1 },
      H2: { min: 50, max: 90, dec: 0.1 },
    },
    // H1 and H2 have DISJOINT ranges, so the ratio r = H2/H1 is 4.167..22.5 and
    // can never be 1. That matters more than it looks: at r = 1 every
    // power-law distractor collapses onto the answer, and since the two heads
    // are sampled independently, overlapping ranges would make that a live
    // failure rather than a theoretical one.
    //
    // The H2 floor is 50 rather than 30 for a second reason. The 3rd-power
    // error has ratio r^(-1/6), and at a floor of 30 that ratio reaches 0.858 -
    // it CONTAINS the 0.85 scalar, and the probe measured the two options
    // 0.012 percent apart. A first estimate put the band at 0.606..0.739,
    // which was simply the wrong arithmetic: 2.5^(-1/6) is 0.858, not 0.817.
    // At a floor of 50 the band is 0.626..0.788, and 0.85 clears it by 7.8
    // percent.
    //
    // Using the 1st power (the capacity law) gives ratio r^(1/2) = 2.041..4.743.
    // The two exponent errors are 2.6x apart at the nearest point, and 1.15
    // clears the 3rd-power band by 46 percent.
    compute: v => v.N1 * Math.sqrt(v.H2 / v.H1),
    distractors: [
      v => v.N1 * (v.H2 / v.H1),
      v => v.N1 * Math.pow(v.H2 / v.H1, 1 / 3),
      v => 0.85 * (v.N1 * Math.sqrt(v.H2 / v.H1)),
      v => 1.15 * (v.N1 * Math.sqrt(v.H2 / v.H1)),
    ],
  },
  {
    name: 'c-fan-laws  D2 = D1 (H1/H2)^(1/4) (Q2/Q1)^(1/2)   [exponent trap]',
    round: 4,
    vars: {
      D1: { min: 200, max: 600, dec: 1 },
      H1: { min: 30, max: 40, dec: 1 },
      H2: { min: 48, max: 70, dec: 1 },
      Q1: { min: 2, max: 5, dec: 0.1 },
      Q2: { min: 25, max: 90, dec: 0.1 },
    },
    compute: v => v.D1 * Math.pow(v.H1 / v.H2, 0.25) * Math.sqrt(v.Q2 / v.Q1),
    // Head is the 1/4 power and flow the 1/2 power, and those two are the
    // whole printed relation, so the natural distractors are the two
    // neighbouring exponents.
    //
    // This spec took three attempts and the probe caught a collision in every
    // one of the first two, so the reasoning is worth recording.
    //
    // Attempt 1: doubling the head exponent gives ratio (H2/H1)^(1/4), and
    // dropping the flow term gives (Q2/Q1)^(-1/2). The two coincide exactly
    // when (Q2/Q1)^2 = H2/H1, and the probe found them identical to five
    // decimal places. The estimate that the ranges were disjoint was wrong: it
    // compared sqrt(H1/H2) against Q2/Q1 when the equation is Q2/Q1 against
    // sqrt(H2/H1), and H2/H1 reached 6 while Q2/Q1 started at 1.25, so the
    // matching value Q2/Q1 = sqrt(6) = 2.45 was comfortably in the box.
    //
    // Attempt 2: replaced the dropped flow term with a doubled flow exponent
    // and pulled the ranges apart. That fixed the 0-1 collision but created a
    // worse one, because the new ratio (Q2/Q1)^(1/2) passed through 2.0 and
    // the 2x scalar sat exactly on it at Q2/Q1 = 4.0. Moving a scalar away
    // from one band is no safer than moving a band; both have to hold.
    //
    // Attempt 3 separates the two bands instead. H2/H1 is 1.2 to 2.333, so the
    // head band (H2/H1)^(1/4) is 1.147 to 1.830, while Q2/Q1 is 5 to 45, so
    // the flow band (Q2/Q1)^(1/2) is 2.236 to 6.708. Those intervals are 22
    // percent apart and cannot meet, and 2.0 now falls in the 22 percent gap
    // between them, clear of both by 9 and 12 percent.
    distractors: [
      v => v.D1 * Math.pow(v.H2 / v.H1, 0.5) * Math.sqrt(v.Q2 / v.Q1),
      v => v.D1 * Math.pow(v.H1 / v.H2, 0.25) * (v.Q2 / v.Q1),
      v => 0.5 * (v.D1 * Math.pow(v.H1 / v.H2, 0.25) * Math.sqrt(v.Q2 / v.Q1)),
      v => 2 * (v.D1 * Math.pow(v.H1 / v.H2, 0.25) * Math.sqrt(v.Q2 / v.Q1)),
    ],
  },
  {
    name: 'c-air-power  P = Q nu H   [dropped-specific-weight trap]',
    round: 4,
    vars: {
      Q: { min: 1, max: 20, dec: 0.1 },
      nu: { min: 11.0, max: 12.5, dec: 0.01 },
      H: { min: 0.5, max: 20, dec: 0.1 },
    },
    compute: v => v.Q * v.nu * v.H,
    // The units were wrong in the first version of this box and the correction
    // matters more than any distractor choice here. The printed symbol is the
    // SPECIFIC WEIGHT of air, not its density, so the value is rho times g -
    // about 12 N/m3, not the 1.2 that the density in kg/m3 happens to be. And
    // because specific weight already carries the g, the H in this product has
    // to be a HEAD in metres rather than a pressure: (m3/s)(N/m3)(m) is N m/s,
    // which is watts. Feeding H in pascals instead gives N^2/(s m^2), which is
    // not a power at all.
    //
    // With the units right, dropping the specific weight is 1/nu = 0.080 to
    // 0.091 and squaring it is nu = 11.0 to 12.5, so the two structural bands
    // sit at opposite ends and the usual 0.85 and 1.15 scalars are safe again.
    // The first box had nu at 1.1 to 1.29 with H in pascals, and its 0.85
    // scalar fell INSIDE the dropped-nu band - a collision that was a symptom
    // of the unit error rather than a property of the formula.
    distractors: [
      v => v.Q * v.H,
      v => v.Q * v.nu * v.nu * v.H,
      v => 0.85 * (v.Q * v.nu * v.H),
      v => 1.15 * (v.Q * v.nu * v.H),
    ],
  },
  {
    name: 'c-propeller-fan-pitch  P = 2 pi r tan(alpha)',
    round: 4,
    vars: {
      r: { min: 0.3, max: 1.5, dec: 0.01 },
      alpha: { min: 10, max: 45, dec: 0.1 },
    },
    compute: v => 2 * Math.PI * v.r * Math.tan((v.alpha * Math.PI) / 180),
    // Using the angle itself instead of its tangent is ratio tan(a)/a with a
    // in RADIANS, which is 1.0102 at 10 degrees and 1.2732 at 45 - the
    // degrees-for-radians confusion, and a slow-burning error that stays
    // plausible across the whole range. Dropping the 2 pi is a flat 0.1592.
    // Both clear the 0.5 and 2 scalars comfortably.
    distractors: [
      v => 2 * Math.PI * v.r * ((v.alpha * Math.PI) / 180),
      v => v.r * Math.tan((v.alpha * Math.PI) / 180),
      v => 0.5 * (2 * Math.PI * v.r * Math.tan((v.alpha * Math.PI) / 180)),
      v => 2 * (2 * Math.PI * v.r * Math.tan((v.alpha * Math.PI) / 180)),
    ],
  },
  {
    name: 'c-specific-speed-dryer-fan  Ns = N Q^0.5 / Ps^0.75   [exponent trap]',
    round: 4,
    vars: {
      N: { min: 600, max: 1800, dec: 1 },
      Q: { min: 500, max: 5000, dec: 10 },
      Ps: { min: 1.2, max: 3, dec: 0.01 },
    },
    // The pressure floor is 1.2, not 0.5, and that is the load-bearing
    // decision in this spec. Every misreading of the two exponents is at that
    // exponent minus 0.75, so most of them sit within a factor of 1.3 of the
    // answer - and the two P options coincide exactly at Ps = 1, since
    // Ps^0.25 = Ps^(-0.25) reduces to Ps = 1. With a floor of 0.5 the box
    // would contain 1 and the two pressure options would render as the same
    // choice. At a floor of 1.2 they provably cannot.
    compute: v => (v.N * Math.sqrt(v.Q)) / Math.pow(v.Ps, 0.75),
    distractors: [
      v => (v.N * Math.sqrt(v.Q)) / Math.pow(v.Ps, 0.5),
      v => (v.N * Math.sqrt(v.Q)) / Math.pow(v.Ps, 1),
      v => (v.N * Math.pow(v.Q, 0.25)) / Math.pow(v.Ps, 0.75),
      v => 0.5 * ((v.N * Math.sqrt(v.Q)) / Math.pow(v.Ps, 0.75)),
    ],
  },
];
