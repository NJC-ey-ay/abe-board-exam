// Candidate boxes for Area C batch 6: rice milling. Ten specs.
//
// This batch is one shape repeated ten times - a part over a whole, usually
// times 100 - and that repetition is the whole problem. Seven of the ten are the
// same expression with a different pair of weights, so the boxes have to be
// designed as a SET, not one at a time: the scalar pair that is safe for one
// recovery ratio is inside the reciprocal band of the next, because the
// reciprocal of a ratio near 1 is also near 1.
//
// The governing constraint is that r = part/whole is a RATIO, and any two
// independent ranges for the two weights give a wide band of r unless the
// ranges are deliberately interlocked. A careless box lets r run from 0.3 to 1.6,
// which is not a recovery figure at all - it produces a 160 percent head rice
// recovery - and it drags the reciprocal distractor out to 0.63, straight
// through the 0.5/1.5/2 scalars. Every box below therefore pins the two weight
// ranges against each other so that r stays in the band the printed quantity is
// supposed to occupy, and several of them needed a whole weight pinned to about
// 2 percent of its own range to achieve that. That is narrow, and it is
// honest: the drill is about the ratio, and a box that admits impossible ratios
// teaches nothing.
//
// Two findings from the first probe run shaped most of what follows, and both
// are worth writing down because they are easy to repeat.
//
// First, a distractor that inverts the ratio is not a constant multiple of the
// answer unless the ratio is 1. Inverting turns r into 1/r, so the RATIO of that
// option to the answer is 1/r SQUARED, not 1/r - which is what pushed
// c-percent-head-rice-recovery's second option to within 3.5 percent of a 2x
// scalar even though the band looked safely below 2. The same slip put
// c-hulling-efficiency's inverted option on top of its own 0.5x scalar: at a
// ratio of 1.366 the two agree exactly, and the first pass let that ratio
// through.
//
// Second, a distractor built on the DIFFERENCE of the two weights crosses a
// scalar at a ratio that has nothing to do with the box edges, so checking the
// band endpoints does not rule it out. (P_P - W_BR)/W_BR is k - 1 for k = the
// whole over the part, and it equals a c-times scalar wherever k solves a
// quadratic. Three of these boxes had one and all three collided. The
// difference on the WHOLE side, (P_P - W_BR)/W_P, is monotone in r and can only
// be hit at an endpoint, so it is the form worth reaching for.
export const CANDIDATES = [
  {
    name: 'c-hulling-coefficient  CH = WBR / WP',
    round: 4,
    vars: {
      BR: { min: 1632, max: 1800, dec: 1 },
      WP: { min: 2000, max: 2040, dec: 1 },
    },
    // CH is the share of a paddy batch that comes off the huller as brown rice
    // of any wholeness, and 0.8 to 0.9 is where a machine sits.
    //
    // The box is pinned to make r land in 0.8 to 0.9, and the paddy batch is the
    // variable that has to move least: r_max = 0.9 needs W_BR >= 0.9 W_P, which
    // at W_P = 2040 is 1836 - already above W_BR's ceiling - so W_BR's ceiling
    // is set by r_max and W_P's by r_min the other way, and 2000 to 2040 is
    // what is left. A two-tonne batch with forty kilos of latitude reads oddly
    // until you try it at 1000 to 2300, where r would run 0.71 to 0.90 and the
    // difference-based option would sweep straight through 0.5.
    compute: v => v.BR / v.WP,
    distractors: [
      v => v.WP / v.BR,
      v => (v.WP - v.BR) / v.WP,
      v => 0.5 * (v.BR / v.WP),
      v => 2 * (v.BR / v.WP),
    ],
  },
  {
    name: 'c-wholeness-coefficient  CW = WWBR / WBR',
    round: 4,
    vars: {
      WBR: { min: 820, max: 900, dec: 1 },
      WWBR: { min: 760, max: 800, dec: 1 },
    },
    // CW is the share of the brown rice that is unbroken grain, so it sits just
    // under 1 - around 0.95 is typical. Here the answer being CLOSE TO 1 is what
    // frees the scalar pair: the inverted band is 1.024 to 1.184 and the broken
    // share is 0.025 to 0.184, so the whole corridor between them is empty and
    // 0.5 and 2 both have more than 40 percent of margin.
    //
    // That a coefficient of 0.95 is not a recovery is the point worth teaching,
    // because the two multiply together in c-hulling-efficiency to give
    // something visibly smaller than either.
    compute: v => v.WWBR / v.WBR,
    distractors: [
      v => v.WBR / v.WWBR,
      v => (v.WBR - v.WWBR) / v.WBR,
      v => 0.5 * (v.WWBR / v.WBR),
      v => 2 * (v.WWBR / v.WBR),
    ],
  },
  {
    name: 'c-hulling-efficiency  EH = WWBR / WP',
    round: 4,
    vars: {
      WP: { min: 2000, max: 2040, dec: 1 },
      WWBR: { min: 1632, max: 1800, dec: 1 },
    },
    // The product of the last two specs, and the figure a mill is actually paid
    // on: the share of incoming paddy that leaves the huller as unbroken brown
    // rice. The box is the same shape as c-hulling-coefficient's and for the same
    // reason - both are a whole against the same 2-tonne batch.
    //
    // What differs is the numerator - whole brown rice rather than brown rice of
    // any wholeness - and so the meaningful error is the one that drops
    // wholeness entirely, which is why the second option is everything that is
    // NOT whole brown rice, on the paddy base. The inverted option is kept for
    // the ratio slip even though the square-ratio effect makes it hug 2 near the
    // bottom of the box, and 1.25 against 2 is a 37 percent margin.
    compute: v => v.WWBR / v.WP,
    distractors: [
      v => v.WP / v.WWBR,
      v => (v.WP - v.WWBR) / v.WP,
      v => 0.5 * (v.WWBR / v.WP),
      v => 2 * (v.WWBR / v.WP),
    ],
  },
  {
    name: 'c-throughput-capacity  CT = 0.2 WP / To',
    round: 1,
    vars: {
      WP: { min: 1000, max: 10000, dec: 1 },
      To: { min: 2, max: 24, dec: 0.1 },
    },
    // The brown-rice branch, which is the only one of the two whose units work -
    // see the SOURCE NOTE now on the formula entry. 0.2 is the hulling
    // coefficient, so this is the mass of brown rice a batch of paddy yields
    // once the operating time is divided out.
    //
    // Both distractors are coefficient or operation slips at a FLAT ratio, which
    // is unusual and useful: dropping the 0.2 is 5x, and dividing by 0.2 rather
    // than multiplying is 25x. Because neither scales with a variable, T_o is
    // free to run the full 2 to 24 h and the answer range opens up to 103x -
    // the widest in the batch - while the option spacing is fixed and easy to
    // see.
    //
    // A first attempt used a multiply-instead-of-divide distractor, which sits
    // at T_o^2 and reached 576 at a 24 h box. The 100x ceiling rejects it, and
    // replacing it with the inverted coefficient is both legal and a more
    // natural slip.
    compute: v => (0.2 * v.WP) / v.To,
    distractors: [
      v => v.WP / v.To,
      v => v.WP / (0.2 * v.To),
      v => 0.5 * ((0.2 * v.WP) / v.To),
      v => 0.85 * ((0.2 * v.WP) / v.To),
    ],
  },
  {
    name: 'c-brown-rice-per-hour  WBR/hr = WP x EH x P',
    round: 2,
    vars: {
      WP: { min: 1000, max: 5000, dec: 1 },
      EH: { min: 0.65, max: 0.85, dec: 0.01 },
      P: { min: 0.93, max: 0.99, dec: 0.01 },
    },
    // Three factors, and the printed form multiplies by P - which the purity
    // relation in this handbook returns as a PERCENTAGE. P has to be a fraction
    // here or the answer is ninety-seven times too big; that is the SOURCE NOTE
    // now recorded on the formula entry.
    //
    // The two structural distractors drop one factor each, so their bands are
    // 1/P and 1/E_H. Those two are the whole difficulty, and they nearly
    // collided in the first pass: with E_H topping out at 0.9 and P starting at
    // 0.90 the ranges TOUCHED at 0.9, and the two options coincide exactly when
    // the efficiency equals the purity. Pulling E_H down to 0.65..0.85 and
    // pushing P up to 0.93..0.99 separates them into 1.010..1.075 and
    // 1.176..1.538, with the gap between them worth about 9 percent.
    //
    // 1.15 cannot be a scalar here - it sits in the gap - so the pair is 0.5
    // and 2, and 2 clears the upper band by 23 percent, which is the tightest
    // scalar margin in the batch.
    compute: v => v.WP * v.EH * v.P,
    distractors: [
      v => v.WP * v.EH,
      v => v.WP * v.P,
      v => 0.5 * (v.WP * v.EH * v.P),
      v => 2 * (v.WP * v.EH * v.P),
    ],
  },
  {
    name: 'c-purity  P = [1 - (Wu - Wc)/Wc] x 100',
    round: 2,
    vars: {
      Wc: { min: 1800, max: 2000, dec: 1 },
      Wu: { min: 2020, max: 2070, dec: 1 },
    },
    // Cleaning removes material, so the uncleaned weight is always the larger of
    // the two and the answer is always below 100. The driver is
    // r = (W_u - W_c)/W_c, and the answer is 100(1 - r).
    //
    // This is the one box in the batch that had to be pinned from both ends at
    // once, and the interlocking is tight enough to be worth recording. r must
    // stay in 0.01 to 0.15 for a purity of 99 to 85. The lower bound needs
    // W_u >= 1.01 W_c_max = 2020. The upper bound needs W_u <= 1.15 W_c_min,
    // and with W_c_min = 1800 that is 2070 - so the upper bound is what sets
    // W_c's floor, and 1800 is the smallest cleaned weight that leaves room for
    // an uncleaned weight above it. Loosen either number and purity starts
    // reporting 46 percent.
    //
    // The first structural option is the removal expressed directly - the
    // contaminant fraction times 100 - which lands at 1 to 15 and is the
    // misplacement students actually make. The tempting wrong answer, the
    // plain ratio (W_u - W_c)/W_u, is deliberately not used: it runs 0.01 to
    // 0.15 of the answer, which is at the verifier's 1 percent floor, and an
    // option that close is indistinguishable once the answer is shown to two
    // decimals. The uncleaned weight divided into itself gives (1 + r)/(1 - r)
    // = 1.020 to 1.353 instead, which is a real slip and a legal distance.
    compute: v => (1 - (v.Wu - v.Wc) / v.Wc) * 100,
    distractors: [
      v => ((v.Wu - v.Wc) / v.Wc) * 100,
      v => (v.Wu / v.Wc) * 100,
      v => 0.5 * ((1 - (v.Wu - v.Wc) / v.Wc) * 100),
      v => 2 * ((1 - (v.Wu - v.Wc) / v.Wc) * 100),
    ],
  },
  {
    name: 'c-percent-brown-rice-recovery  %BRR = (WBR/WP) x 100',
    round: 2,
    vars: {
      WP: { min: 2000, max: 2040, dec: 1 },
      BR: { min: 1632, max: 1800, dec: 1 },
    },
    // The same ratio as c-hulling-coefficient, carried to a percentage. That the
    // two are the same number in different units is the fact worth drilling: a
    // hulling coefficient of 0.8 and a brown rice recovery of 80 percent are one
    // measurement, and a mill that quotes one while buying on the other is
    // negotiating against itself. Same box, deliberately.
    //
    // The second option is the husk, as a share of the paddy it came off - the
    // yield figure the OTHER side of the same trade quotes. It runs (1 - r)/r =
    // 0.111 to 0.25 against an answer of 80 to 90, so a student who reports the
    // husk share has unmistakably not reported the recovery, and 0.5 clears the
    // band by a factor of two.
    compute: v => (v.BR / v.WP) * 100,
    distractors: [
      v => (v.WP / v.BR) * 100,
      v => ((v.WP - v.BR) / v.WP) * 100,
      v => 0.5 * ((v.BR / v.WP) * 100),
      v => 2 * ((v.BR / v.WP) * 100),
    ],
  },
  {
    name: 'c-percent-broken-milled-rice  %BKR = (WBKR/WMR) x 100',
    round: 2,
    vars: {
      WMR: { min: 1000, max: 1800, dec: 1 },
      WBKR: { min: 200, max: 350, dec: 1 },
    },
    // A small ratio, and small ratios are hostile to reciprocal distractors: at
    // r = 0.11 the inverted form is nine times the answer, and the two
    // candidates for "the other percentage" - the intact share and the
    // per-thousand scale slip at a flat 10x - then overlap each other around 7
    // to 8. So only ONE structural distractor is used here, the intact share,
    // and the second is a pure scale error at a flat 10x.
    //
    // The box puts broken grain at 11 to 35 percent, which is a poor milling
    // result rather than a good one - and deliberately so, because the box has
    // to be wide enough in r to keep the intact-share band away from the small
    // scalars this spec is forced onto. 0.3 and 0.7 clear it by a wide margin
    // where 0.5, 1.5 and 2 would all land inside.
    compute: v => (v.WBKR / v.WMR) * 100,
    distractors: [
      v => ((v.WMR - v.WBKR) / v.WMR) * 100,
      v => 10 * ((v.WBKR / v.WMR) * 100),
      v => 0.3 * ((v.WBKR / v.WMR) * 100),
      v => 0.7 * ((v.WBKR / v.WMR) * 100),
    ],
  },
  {
    name: "c-percent-brewers-rice  %BrR = (WBrR/WMR) x 100",
    round: 2,
    vars: {
      WMR: { min: 1000, max: 2000, dec: 1 },
      WBrR: { min: 50, max: 200, dec: 1 },
    },
    // Brewer's rice is the small, heavy fraction the grader cannot sell as head
    // rice, and 2.5 to 20 percent is the working range. Same small-ratio problem
    // as the broken-grain spec, but the box here is narrow enough at the bottom
    // to admit a second structural that the broken-grain box could not: adding
    // the brewer's weight to the milled weight before dividing, which is
    // (1 + r)/(1 - r) = 1.05 to 1.5.
    //
    // That band is what forces 2 rather than 1.15, and 2 clears it by 25
    // percent. Had the box been allowed r up to 0.25 the band would have
    // reached 1.667 and 2 would have had only 17 percent of margin, which is
    // why W_BrR stops at 200 g against a 1000 g floor on W_MR.
    compute: v => (v.WBrR / v.WMR) * 100,
    distractors: [
      v => ((v.WBrR + v.WMR) / v.WMR) * 100,
      v => ((v.WMR - v.WBrR) / v.WMR) * 100,
      v => 0.5 * ((v.WBrR / v.WMR) * 100),
      v => 2 * ((v.WBrR / v.WMR) * 100),
    ],
  },
  {
    name: 'c-percent-head-rice-recovery  %HRR = (WHR/WMR) x 100',
    round: 2,
    vars: {
      WMR: { min: 1000, max: 1100, dec: 1 },
      WHR: { min: 792, max: 850, dec: 1 },
    },
    // The headline yield of a rice mill, and the tightest box in the batch. r
    // must sit in 0.72 to 0.85, and because W_HR and W_MR are independent that
    // needs W_HR >= 0.72 W_MR_max = 792 and W_HR <= 0.85 W_MR_min = 850. The
    // head rice range is fifty grams wide out of a milled-rice batch of about a
    // kilogram.
    //
    // The narrowness is not a convenience, it is forced from both ends: r is
    // high enough that the two structural options sit on OPPOSITE sides of the
    // answer, which is the only reason any ordinary scalar pair is available at
    // all. The first is the break, as a share of the milled rice, at (1 - r)/r
    // = 0.176 to 0.389. The second is the yield expressed against the break
    // instead of the batch, at r/(1 - r) = 2.57 to 5.68 - and note what the
    // first-pass version got wrong here. An inverted option, W_MR / W_HR, would
    // be a natural slip but it sits at 1/r SQUARED against the answer, 1.39 to
    // 1.93, which reaches within 3.5 percent of a 2x scalar. The yield-on-break
    // form is the same conceptual mistake with a distance that works.
    compute: v => (v.WHR / v.WMR) * 100,
    distractors: [
      v => ((v.WMR - v.WHR) / v.WMR) * 100,
      v => (v.WHR / (v.WMR - v.WHR)) * 100,
      v => 0.5 * ((v.WHR / v.WMR) * 100),
      v => 2 * ((v.WHR / v.WMR) * 100),
    ],
  },
];
