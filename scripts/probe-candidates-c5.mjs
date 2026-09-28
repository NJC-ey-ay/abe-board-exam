// Candidate boxes for Area C batch 5: grain moisture content (6) and paddy
// properties (5).
//
// This batch is all ratios and linear forms, so it should be the easy one. It
// is not, and the reason is instructive: with a linear formula like the two
// paddy porosity lines, a distractor built from a COEFFICIENT swap lands within
// 20 percent of the answer across the whole box, and the conventional 0.85 /
// 1.15 scalar pair falls inside those bands. The exponents were the problem in
// batch 4; here it is the smallness of the coefficients.
export const CANDIDATES = [
  {
    name: 'c-moisture-weight-balance  WW = Wi - Wo',
    round: 4,
    vars: {
      Wi: { min: 1000, max: 1300, dec: 0.1 },
      Wo: { min: 300, max: 400, dec: 0.1 },
    },
    // The two weights are given disjoint ranges, so Wi > Wo always and the
    // water weight can never come out negative. The Wo range is also held well
    // below the Wi range so that the "mistook the dry weight for the water
    // weight" distractor stays at 0.3 to 0.667 of the answer, which is what
    // keeps 0.85 clear of it.
    compute: v => v.Wi - v.Wo,
    distractors: [
      v => v.Wo,
      v => v.Wi + v.Wo,
      v => 0.85 * (v.Wi - v.Wo),
      v => 1.15 * (v.Wi - v.Wo),
    ],
  },
  {
    name: 'c-wet-dry-basis-relationship  MCDB = MCWB x 100/(100 - MCWB)',
    round: 4,
    vars: {
      MC: { min: 12, max: 24, dec: 0.1 },
    },
    compute: v => (v.MC * 100) / (100 - v.MC),
    // The printed form is %MC_DB = MC_WB/(1 - MC_WB) x 100, which is only
    // consistent if MC_WB is entered as a FRACTION. Entered as the percentage
    // the leading % demands, the (1 - MC) goes negative. The percent-to-percent
    // form driven here is the one the printed identity is trying to express, and
    // the SOURCE NOTE records the transcription problem.
    //
    // Both distractors are ways of getting the denominator wrong: a plus where
    // the minus belongs, and simply dropping the correction to 100 entirely.
    // The plus version sits at 1.27 to 1.63 of the answer, which is why the
    // 0.85 and 1.15 pair is not available here and 0.5 and 2 are used instead.
    distractors: [
      v => (v.MC * 100) / (100 + v.MC),
      v => v.MC,
      v => 0.5 * ((v.MC * 100) / (100 - v.MC)),
      v => 2 * ((v.MC * 100) / (100 - v.MC)),
    ],
  },
  {
    name: 'c-weight-moisture-removed  WMR = Wi[1 - (1-MCi)/(1-MCf)]',
    round: 4,
    vars: {
      Wi: { min: 1000, max: 10000, dec: 1 },
      MCi: { min: 0.2, max: 0.4, dec: 0.01 },
      MCf: { min: 0.05, max: 0.1, dec: 0.01 },
    },
    // MC_i and MC_f are FRACTIONS, and their ranges are disjoint (0.20 to 0.40
    // against 0.05 to 0.10) so the grain can never start drier than it ends.
    // The printed form is algebraically Wi(MCi - MCf)/(1 - MCf), which is worth
    // showing because the two obvious wrong answers are the naive difference
    // and drying to absolute zero, and both are single-factor slips on that
    // rearrangement.
    compute: v => v.Wi * (1 - (1 - v.MCi) / (1 - v.MCf)),
    distractors: [
      v => v.Wi * (v.MCi - v.MCf),
      v => v.Wi * v.MCi,
      v => 0.5 * (v.Wi * (1 - (1 - v.MCi) / (1 - v.MCf))),
      v => 2 * (v.Wi * (1 - (1 - v.MCi) / (1 - v.MCf))),
    ],
  },
  {
    name: 'c-final-weight-dried  Wf = Wi(1 - MCi)/(1 - MCf)',
    round: 4,
    vars: {
      Wi: { min: 1000, max: 10000, dec: 1 },
      MCi: { min: 0.2, max: 0.4, dec: 0.01 },
      MCf: { min: 0.05, max: 0.1, dec: 0.01 },
    },
    // Same disjoint fraction ranges as the weight-of-moisture-removed spec, and
    // the same physical constraint. The two specs together are the whole
    // drying-mass-balance pair, and checking them side by side is how a student
    // sees that W_i = W_MR + W_f exactly.
    compute: v => (v.Wi * (1 - v.MCi)) / (1 - v.MCf),
    distractors: [
      v => v.Wi * (1 - v.MCi),
      v => (v.Wi * (1 - v.MCi)) / v.MCf,
      v => 0.5 * ((v.Wi * (1 - v.MCi)) / (1 - v.MCf)),
      v => 2 * ((v.Wi * (1 - v.MCi)) / (1 - v.MCf)),
    ],
  },
  {
    name: 'c-moisture-reduction-rate  MRR = (Wi - Wf)/Td',
    round: 4,
    vars: {
      Wi: { min: 5000, max: 20000, dec: 0.1 },
      Wf: { min: 1500, max: 3500, dec: 0.1 },
      Td: { min: 4, max: 9.5, dec: 0.1 },
    },
    // Wi and Wf are again disjoint, so the moisture removed is always positive
    // and the drying time is never zero. The two structural distractors are a
    // multiply where the formula divides, and dropping the final weight
    // altogether.
    //
    // Two constraints fight over this box and both had to be honoured.
    //
    // The drying time is capped at 9.5 h because the "multiplied by T_d"
    // distractor sits at T_d^2, and the rule is that no option may exceed 100
    // times the answer. At 48 h it reached 2304 - not a plausible slip but a
    // different quantity. 9.5 h holds that band at 16 to 90.
    //
    // The floor of 4 h is the subtler one. The "forgot W_f" distractor is at
    // W_i/(W_i - W_f), and against the multiplied one the two of them cross
    // whenever T_d equals that same ratio - at which point the two WRONG options
    // agree with each other, not just with the right one. A first pass at 1.5 h
    // put the crossing inside the box and a resample can put the two options
    // 0.06 percent apart. Holding W_f at or below 3500 kg caps that ratio at
    // 3.33, so a 4 h floor leaves the two distractors permanently on the same
    // side of each other with 14 percent to spare.
    //
    // That same cap puts the "forgot W_f" band at 1.081 to 3.333, entirely above
    // 1, which is what licenses the 0.85 scalar. A 1.15 scalar would have been
    // inside that band.
    compute: v => (v.Wi - v.Wf) / v.Td,
    distractors: [
      v => v.Wi / v.Td,
      v => (v.Wi - v.Wf) * v.Td,
      v => 0.5 * ((v.Wi - v.Wf) / v.Td),
      v => 0.85 * ((v.Wi - v.Wf) / v.Td),
    ],
  },
  {
    name: 'c-percent-moisture-reduction  %MRR = (MCi - MCf)/Td',
    round: 4,
    vars: {
      MCi: { min: 16, max: 26, dec: 0.1 },
      MCf: { min: 10, max: 14, dec: 0.1 },
      Td: { min: 3, max: 10, dec: 0.1 },
    },
    // Same disjoint structure as the weight-basis rate above, and the same
    // care with the drying time, though the collision here is easier to see.
    // The two structural distractors - the moisture difference multiplied by
    // T_d, and M_C_i alone divided by T_d - are separated from each other by
    // exactly T_d^2 x (1 - M_Cf/M_C_i).
    //
    // The second factor runs 0.125 to 0.615 across this box, so the product
    // passes through 1 somewhere in T_d^2 = 1.6 to 8, i.e. T_d = 1.3 to 2.8 h.
    // A 1.5 h floor sat inside that window and did produce a crossing: the two
    // wrong options landed 0.06 percent apart, which is closer than the wrong
    // answer ever was to the right one. A 3 h floor puts the whole product at
    // 1.125 or above, 12.5 percent clear, and still leaves the multiply band
    // under the 100x ceiling at 9 to 100.
    //
    // Note the printed name overlaps the standard "percent moisture reduction",
    // which is a fraction of the INITIAL moisture and carries no time term at
    // all - the SOURCE NOTE records that.
    compute: v => (v.MCi - v.MCf) / v.Td,
    distractors: [
      v => (v.MCi - v.MCf) * v.Td,
      v => v.MCi / v.Td,
      v => 0.85 * ((v.MCi - v.MCf) / v.Td),
      v => 1.15 * ((v.MCi - v.MCf) / v.Td),
    ],
  },
  {
    name: 'c-paddy-porosity-medium  %PM = 69.05 - 0.885 MCWB',
    round: 4,
    vars: {
      MC: { min: 10, max: 26, dec: 0.1 },
    },
    compute: v => 69.05 - 0.885 * v.MC,
    // A linear form with a SMALL slope, and that is the whole difficulty: the
    // wet-basis/long-grain coefficient swap lands at 1.068 to 1.232 of the
    // answer, which contains 1.15 outright. Using MC as a fraction instead of
    // a percentage lands at 1.146 to 1.495, which contains 1.15 as well. Both
    // structural bands sit just above 1, so the scalar pair is 0.5 and 2.
    distractors: [
      v => 69.05 - 0.475 * v.MC,
      v => 69.05 - (0.885 * v.MC) / 100,
      v => 0.5 * (69.05 - 0.885 * v.MC),
      v => 2 * (69.05 - 0.885 * v.MC),
    ],
  },
  {
    name: 'c-paddy-porosity-long  %PL = 65.55 - 0.475 MCWB',
    round: 4,
    vars: {
      MC: { min: 10, max: 26, dec: 0.1 },
    },
    compute: v => 65.55 - 0.475 * v.MC,
    // The same pair of traps as the medium-grain line. The medium-grain
    // coefficient now gives 0.865 to 0.99 - which excludes 0.85, but only just,
    // by 1.8 percent at the corner. The fraction-of-a-percentage version gives
    // 1.077 to 1.230.
    //
    // The first probe run used 1.15 here on the strength of that fraction band,
    // and the fraction band contains 1.15 - they came within 0.035 percent of
    // each other at MC = 18.2, where 1.15 is both a scalar multiple of the
    // answer and a natural output of mis-scaling the moisture. 2 is 63 percent
    // clear of the 1.230 top of that band, and 2 is the value that makes sense
    // next to the 0.5 below it.
    distractors: [
      v => 69.05 - 0.885 * v.MC,
      v => 65.55 - (0.475 * v.MC) / 100,
      v => 0.5 * (65.55 - 0.475 * v.MC),
      v => 2 * (65.55 - 0.475 * v.MC),
    ],
  },
  {
    name: 'c-percent-increase-porosity  %Inc = (F - I)/F x 100',
    round: 4,
    vars: {
      F: { min: 54, max: 66, dec: 0.1 },
      I: { min: 45, max: 52, dec: 0.1 },
    },
    // The porosities are given as PERCENTAGES and the formula divides them and
    // multiplies by 100, so the two are dimensionless either way and the
    // percent handling cancels. Final is held above initial throughout, which
    // is the only direction that makes "increase" true.
    //
    // The printed denominator is the FINAL porosity, which is the unusual
    // choice - most percentage changes are taken on the initial value - and it
    // is also what the "divided by the initial" distractor encodes.
    //
    // That distractor is at F/I, and the box is pinned so F/I stays in 1.038 to
    // 1.467 - which is where the real numbers put it. Poured at high moisture
    // the two printed porosity lines give about 53 percent, and after drying to
    // a low moisture about 61, so a real process roughly doubles nothing and
    // moves a long way short of 2. A wider box, as the first probe run had, let
    // F/I climb to 2.79 and swallowed the 2x scalar whole.
    //
    // 1.15 is unusable here for the same reason it was unusable in batch 4: the
    // band straddles it. So the scalar pair is 0.5 and 2.
    compute: v => ((v.F - v.I) / v.F) * 100,
    distractors: [
      v => ((v.F - v.I) / v.I) * 100,
      v => (v.F - v.I) * 100,
      v => 0.5 * (((v.F - v.I) / v.F) * 100),
      v => 2 * (((v.F - v.I) / v.F) * 100),
    ],
  },
  {
    name: 'c-minimum-angle-friction  theta = atan(x)',
    round: 4,
    vars: {
      x: { min: 0.2, max: 0.7, dec: 0.01 },
    },
    // The answer is in DEGREES, and that is the whole spec: x is a
    // dimensionless coefficient of friction and the inverse tangent of it is
    // 11 to 35 degrees. The degrees come from the output unit, not the input.
    //
    // The band 1.0132 to 1.1462 is what a student gets by converting x to
    // degrees and then inverting the tangent, i.e. by applying the
    // radians-to-degrees factor to the INPUT. It is a real and common slip -
    // the conversion belongs on the answer, not the argument - and it is also
    // why 1.15 cannot be a scalar in this spec.
    //
    // The second distractor inverts the argument instead, atan(1/x), which is
    // how the angle of friction actually appears in some handling tables and is
    // the classic slip. It lands at 1.572 to 6.958 of the answer: always well
    // above 1, and the band is wide because arctan(1/x) approaches 90 degrees
    // as x falls. It rules out 1.15 and 2 as scalars, hence 0.5 and 10.
    compute: v => (Math.atan(v.x) * 180) / Math.PI,
    distractors: [
      v => (v.x * 180) / Math.PI,
      v => (Math.atan(1 / v.x) * 180) / Math.PI,
      v => 0.5 * ((Math.atan(v.x) * 180) / Math.PI),
      v => 10 * ((Math.atan(v.x) * 180) / Math.PI),
    ],
  },

  {
    name: 'c-specific-heat-paddy  C = 0.22008 + 0.01301 MCWB',
    round: 4,
    vars: {
      MC: { min: 10, max: 26, dec: 0.1 },
    },
    compute: v => 0.22008 + 0.01301 * v.MC,
    // The dry-matter constant 0.22008 is the intercept, and the slope is small
    // enough that the intercept dominates across the whole moisture range:
    // water contributes 0.350 of the 0.35 to 0.56 BTU/lb F. Both distractors
    // are the moisture term scaled wrongly - by 10 for a fraction, by 1/10 for
    // a percentage - and they land on opposite sides of 1, at 4.34 to 6.45 and
    // 0.40 to 0.67. With nothing in the 0.85 to 1.15 corridor, this is the one
    // spec in the batch where the ordinary scalar pair works.
    distractors: [
      v => 0.22008 + 0.1301 * v.MC,
      v => 0.22008 + (0.01301 * v.MC) / 100,
      v => 0.85 * (0.22008 + 0.01301 * v.MC),
      v => 1.15 * (0.22008 + 0.01301 * v.MC),
    ],
  },
];
