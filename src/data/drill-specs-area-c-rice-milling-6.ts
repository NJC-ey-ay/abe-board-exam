// Area C drill specs, rice milling: hulling, the whitening chain, throughput,
// purity, and the four recovery percentages. Ten specs, taking coverage from
// 206 to 216 of 240.
//
// This batch is one shape ten times over, and that is the whole difficulty.
// Nine of the ten formulas are a part divided by a whole, usually times 100,
// differing only in which two weights go on top and bottom. Built one spec at a
// time they look trivial; built as a set they are not, because the boxes have
// to be designed AGAINST EACH OTHER. The scalar pair that clears the reciprocal
// band for a 20 percent figure sits on top of the reciprocal band for an 80
// percent one, and the two are the same expression.
//
// Four probe findings shaped the boxes, and all four are worth writing down
// because each is a way of fooling yourself on a ratio spec.
//
// First, inverting a ratio is not a constant multiple of the answer unless the
// ratio is 1. The option W_P/W_BR against the answer W_BR/W_P sits at 1/r
// SQUARED, which is a detail that decides the design. In
// c-percent-head-rice-recovery the first draft used an inverted option on the
// reasoning that 1/r at r = 0.72 to 0.85 tops out at 1.39, comfortably below the
// 2x scalar. It is not 1/r against the answer - it is 1/r squared, so 1.93, and
// the option landed within 3.5 percent of the 2x scalar. The probe measures
// the approach between OPTIONS rather than against the answer, and that is the
// measurement that catches it; checking band endpoints by eye does not.
//
// Second, a distractor built on the DIFFERENCE of the two weights crosses a
// scalar at a point that has nothing to do with the box edges, so inspecting
// the edges does not rule it out. (W_P - W_BR)/W_BR is k - 1 for k the whole
// over the part, and it equals a c-times scalar wherever k solves a quadratic -
// at exactly 1.366 for c = 0.5. Three of these boxes had that form and all
// three collided; c-hulling-coefficient and c-hulling-efficiency came out
// within 0.000 percent, meaning the two options printed the same number for a
// reachable input. The difference on the WHOLE side, (W_P - W_BR)/W_P, is
// monotone in r and can only be hit at an endpoint, so it is the form worth
// reaching for when a difference is wanted.
//
// Third, the r band has to be pinned, because two independent weight ranges
// produce a useless spread. c-percent-head-rice-recovery asked for r in 0.72 to
// 0.85 and that needs W_HR >= 0.72 W_MR_max and W_HR <= 0.85 W_MR_min, so the
// head rice range came out fifty grams wide inside a kilogram of milled rice.
// The three hulling and brown-rice specs pin the paddy batch to 2000 to 2040 kg
// for the same reason: at 1000 to 2300 the ratio would run 0.71 to 0.90 and the
// difference-based option would sweep through the 0.5 scalar. Narrow boxes are
// the honest answer here - the drill is about the ratio, and a box admitting
// impossible ratios teaches a student to recognise nonsense rather than the
// formula.
//
// Fourth, small ratios forbid reciprocal distractors, and three of the
// percentages are small. At r = 0.11 an inverted option is nine times the
// answer, which collides with every other candidate for "the other percentage"
// in the 7-to-8 range. c-percent-broken-milled-rice therefore uses one
// structural distractor and a flat 10x scale slip, and takes 0.3 and 0.7 as its
// scalars because 0.5, 1.5 and 2 all land inside the intact-share band. Its box
// is deliberately wide - 11 to 35 percent broken is a bad milling result - for
// the same reason it is safe.
//
// Two of the ten are twins on purpose. c-hulling-coefficient and
// c-percent-brown-rice-recovery are the same ratio in different units, and a
// hulling coefficient of 0.8 and a brown rice recovery of 80 percent are one
// measurement. A mill that quotes the first while buying on the second is
// negotiating against itself, and the identical boxes are what let that land.
import type { DrillSpec } from './formula-drills';

export const areaCRiceMilling6Specs: DrillSpec[] = [
  // ------------------------------------------------------- hulling chain
  {
    formulaId: 'c-hulling-coefficient', area: 'C', unknown: 'C_H',
    formulaText: 'C_H = \\frac{W_{BR}}{W_P}',
    unit: 'decimal', round: 4,
    vars: [
      { symbol: 'W_P', ascii: 'Wp', label: 'weight of paddy', unit: 'kg', min: 2000, max: 2040, decimals: 1 },
      { symbol: 'W_{BR}', ascii: 'Wbr', label: 'weight of brown rice', unit: 'kg', min: 1632, max: 1800, decimals: 1 },
    ],
    // The first of three chained coefficients, and the one that answers the
    // question a huller operator actually gets asked: for every kilogram of
    // paddy fed in, how many kilograms of brown rice come out. The husk is
    // removed and something near 0.85 survives, so the coefficient is always
    // well below 1 and always positive.
    //
    // W_P is held between 2000 and 2040 kg - forty kilos of latitude on a
    // two-tonne batch - and that narrowness is forced, not decorative. The
    // ratio has to stay inside 0.8 to 0.9 for the spec to be a huller rather
    // than a blender, and with W_BR free the ceiling of W_P is set by the
    // 0.8 floor: at 2040 kg the lightest acceptable brown rice is 1632 kg. Push
    // W_P to 2300 and the ratio drops to 0.71, the husk share option climbs to
    // 0.41, and the 0.5 scalar is no longer clearly distinguishable from it.
    compute: v => v.Wbr / v.Wp,
    context: 'a rice mill weighing one hulling lot of paddy and the brown rice that came off the huller',
    verb: 'records',
    unknownPhrase: 'the hulling coefficient for the lot',
    keyConcept: 'The hulling coefficient is the first yield in the milling chain: it compares what the huller produced against what it was fed, and because hulling removes the husk and nothing else, it is a measure of the machine rather than of the grain. The husk is the part of the paddy weight that is not rice at all, so the coefficient and the husk share are the same number expressed against opposite sides, and one plus the other is exactly 1. That is the useful check on any mill report: a hulling coefficient of 0.8 means 80 percent of the feed became brown rice and 20 percent left as husk, and there is no room in the arithmetic for anything else - no moisture, no breakage, no loss, because the weight of the brown rice and the weight of the husk together account for the whole of the feed. It is a mass ratio, not a volume ratio, and it is measured on weights taken across the machine, which is why a huller is rated by the tonnage it passes rather than by its speed. Because the coefficient ignores wholeness, a huller that shatters grain can post a perfectly good 0.85 while producing almost no whole brown rice; that second failure is what the next coefficient in the chain exists to catch.',
    mistakes: [
      'Inverting the ratio, reporting the paddy weight over the brown rice weight, which is always greater than 1 and is visibly not a yield',
      'Reporting the husk share (W_P - W_BR)/W_P instead, which is a real and much more common number on a mill sheet but is the complement of the coefficient, not the coefficient',
      'Treating the coefficient as a percentage and reporting 0.85 as 85, which double-counts a conversion the units have already made',
    ],
    distractors: [
      v => v.Wp / v.Wbr,
      v => (v.Wp - v.Wbr) / v.Wp,
      v => 0.5 * (v.Wbr / v.Wp),
      v => 2 * (v.Wbr / v.Wp),
    ],
  },
  {
    formulaId: 'c-wholeness-coefficient', area: 'C', unknown: 'C_W',
    formulaText: 'C_W = \\frac{W_{WBR}}{W_{BR}}',
    unit: 'decimal', round: 4,
    vars: [
      { symbol: 'W_{BR}', ascii: 'Wbr', label: 'weight of brown rice', unit: 'kg', min: 820, max: 900, decimals: 1 },
      { symbol: 'W_{WBR}', ascii: 'Wwbr', label: 'weight of whole brown rice', unit: 'kg', min: 760, max: 800, decimals: 1 },
    ],
    // The second link in the chain, and the one that catches a huller which
    // shatters what it hulls. C_W asks what share of the brown rice that came
    // off the machine is intact grain rather than fragments.
    //
    // The two weight ranges are deliberately DISJOINT - whole brown rice stops
    // at 800 kg while all brown rice starts at 820 kg - so the broken share is
    // guaranteed positive and the subtraction the keyConcept describes can never
    // produce a negative or a nonsensical coefficient. An earlier draft let the
    // two ranges touch at 800, which made one option reach exactly zero and
    // another 0.0013 of the answer: two defects at once, and the second of them
    // an option a student could not distinguish from the right answer.
    compute: v => v.Wwbr / v.Wbr,
    context: 'a mill grading a lot of brown rice into intact grain and fragments before the whitening stage',
    verb: 'records',
    unknownPhrase: 'the wholeness coefficient of the lot',
    keyConcept: "The wholeness coefficient is a quality measure, and it is the reason a mill reports two yields instead of one. It asks what share of the brown rice is intact grain rather than fragments, so it is always just under 1, and the shortfall from 1 is the breakage. Because breakage is produced by the machine rather than inherited from the field, this coefficient is the one that changes when a miller adjusts the huller: too aggressive a setting and the paddy is stripped cleanly but the kernels crack, and C_W falls while the hulling coefficient barely moves. That independence is the whole reason the two are reported separately. It also fixes the scale of the damage - a hulling coefficient of 0.85 with a wholeness coefficient of 0.95 means 81 percent of the feed reaches the next stage as intact grain, which is not 80 and not 95 but their product. The product matters commercially, because broken brown rice cannot be sold as brown rice: it goes to the brewer's and feed markets at a fraction of the price, and a mill that reports only the hulling coefficient is quietly reporting a yield it cannot actually sell.",
    mistakes: [
      'Inverting the ratio, which is always above 1 and so is visibly not a share',
      'Dividing by the total brown rice the wrong way round, or reporting the broken share as though it were the whole',
      'Reading the coefficient as a percentage and reporting 0.95 as 95, when a coefficient this close to 1 is already the complete answer',
    ],
    distractors: [
      v => v.Wbr / v.Wwbr,
      v => (v.Wbr - v.Wwbr) / v.Wbr,
      v => 0.5 * (v.Wwbr / v.Wbr),
      v => 2 * (v.Wwbr / v.Wbr),
    ],
  },
  {
    formulaId: 'c-hulling-efficiency', area: 'C', unknown: 'E_H',
    formulaText: 'E_H = \\frac{W_{WBR}}{W_P} = C_H \\times C_W',
    unit: 'decimal', round: 4,
    vars: [
      { symbol: 'W_P', ascii: 'Wp', label: 'weight of paddy', unit: 'kg', min: 2000, max: 2040, decimals: 1 },
      { symbol: 'W_{WBR}', ascii: 'Wwbr', label: 'weight of whole brown rice', unit: 'kg', min: 1632, max: 1800, decimals: 1 },
    ],
    // The two previous coefficients multiplied together, and the printed
    // equality is worth having in view: the fraction that collapses the whole
    // chain is the whole brown rice over the paddy. The numerator is the
    // difference that makes this the honest figure - intact grain only.
    //
    // The box is c-hulling-coefficient's box with a different numerator, which
    // is the point. Both are a part over the same two-tonne paddy batch, so a
    // student who computes one and then divides the result by the other gets the
    // other, and that division is the cheapest way to check the whole chain.
    compute: v => v.Wwbr / v.Wp,
    context: 'a mill reconciling one hulling run, matching the paddy it fed in against the intact brown rice it recovered',
    verb: 'records',
    unknownPhrase: 'the hulling efficiency of the run',
    keyConcept: 'Hulling efficiency is the yield that counts, because it is the only one of the three that counts what the mill can actually sell. It collapses the whole chain into a single fraction - intact brown rice over incoming paddy - and the printed form shows exactly why that is the same thing as multiplying the two coefficients: the chain is C_H times C_W, and the numerator of C_W is the denominator of C_H, so the middle term cancels and one fraction is left. Reading it as a product is the better habit, though, because it tells you which machine to blame when the number is low. A low C_H is a huller set wrong or paddy too dry and brittle; a low C_W is a huller set too aggressively or a miller running the rollers fast. The same total efficiency comes from very different faults, and a mill that reports only the product cannot tell them apart - which is why the two coefficients are broken out on a mill sheet even though they multiply to the headline figure. Note also that this is a mass ratio across the machine, so it excludes the by-products rather than accounting for them, and the total of intact grain, fragments and husk equals the feed exactly only when nothing is being carried out of the machine in dust or spillage.',
    mistakes: [
      'Using all the brown rice in the numerator, which reproduces the hulling coefficient and silently drops the wholeness factor',
      'Inverting the ratio, which is above 1 and is not a yield at all',
      'Reporting everything that is not intact brown rice - the husk plus the breakage - as though it were the efficiency',
    ],
    distractors: [
      v => v.Wp / v.Wwbr,
      v => (v.Wp - v.Wwbr) / v.Wp,
      v => 0.5 * (v.Wwbr / v.Wp),
      v => 2 * (v.Wwbr / v.Wp),
    ],
  },
  // ---------------------------------------------------------- throughput
  {
    formulaId: 'c-throughput-capacity', area: 'C', unknown: 'C_T',
    formulaText: 'C_T = \\frac{0.2\\,W_P}{T_o}\\ (brown\\ rice)',
    unit: 'kg/h', round: 1,
    vars: [
      { symbol: 'W_P', ascii: 'Wp', label: 'weight of paddy', unit: 'kg', min: 1000, max: 10000, decimals: 1 },
      { symbol: 'T_o', ascii: 'To', label: 'operating time', unit: 'h', min: 2, max: 24, decimals: 1 },
    ],
    conversions: [
      { ascii: 'To', unit: 'min', factor: 60, fromUnit: 'h' },
    ],
    // Only the brown-rice branch of the printed pair is driven, and the SOURCE
    // NOTE now on the formula entry explains why: the other branch multiplies
    // two weights and so comes out in weight-squared per time, which cannot be
    // a capacity. The 0.2 is the hulling coefficient of the first spec, written
    // as a literal because the handbook prints it that way - so this formula is
    // the first one in the batch that quietly depends on an earlier one.
    //
    // Both distractors here are FLAT multiples, 5x and 25x, because both errors
    // are with the constant rather than with the variables: dropping the 0.2, or
    // dividing by it instead of multiplying. That is what lets T_o run its full
    // 2 to 24 h and gives the answer a 103-fold spread - by far the widest in
    // the batch - while the spacing between options stays constant and obvious.
    // A multiply-where-the-formula-divides distractor was tried first and is at
    // T_o squared, which reaches 576 at a 24 h box: a different quantity rather
    // than a plausible mistake, and past the verifier's ceiling.
    compute: v => (0.2 * v.Wp) / v.To,
    context: 'a mill scheduling a huller to process a batch of paddy over a working shift and comparing the run against its rated capacity',
    verb: 'reports',
    unknownPhrase: 'the throughput capacity in kilograms of brown rice per hour',
    keyConcept: 'Throughput capacity converts a batch into a rate, and the distinction is the whole point of the formula: the miller knows how much paddy arrived and how long the machine ran, but what the schedule needs is the rate the plant can sustain. The 0.2 is the hulling coefficient standing in as a constant, so this is really the batch weight times a yield divided by a time - a yield-adjusted throughput, not a raw one. That is the correct thing to plan against, because the output the mill can sell is brown rice, not paddy, and rating the huller on paddy fed per hour would overstate its useful capacity by a factor of five. The rate is an average, not an instantaneous figure, and a mill that runs the huller at full tilt for two hours and idles for the rest of the shift has the same daily output as one that runs evenly, but a very different capacity figure - which is why rated capacity is quoted on sustained hours rather than on a shift total. Getting the units right is the whole exercise: a weight over a time is a rate, and anything that comes out in weight-squared per time, as the milled-rice branch of the printed pair does, is not a capacity under any reading.',
    mistakes: [
      'Dropping the 0.2 and reporting the paddy rate, which overstates output fivefold because it counts hull as product',
      'Dividing by the 0.2 instead of multiplying by it, which reports a rate 25 times too small',
      'Treating the operating time as a total for the day rather than the span of the run, so the reported rate is per day and not per hour',
    ],
    distractors: [
      v => v.Wp / v.To,
      v => v.Wp / (0.2 * v.To),
      v => 0.5 * ((0.2 * v.Wp) / v.To),
      v => 0.85 * ((0.2 * v.Wp) / v.To),
    ],
  },
  {
    formulaId: 'c-brown-rice-per-hour', area: 'C', unknown: 'W_{BR/hr}',
    formulaText: 'W_{BR/hr} = W_P \\times E_H \\times P',
    unit: 'kg/h', round: 2,
    vars: [
      { symbol: 'W_P', ascii: 'Wp', label: 'weight of paddy', unit: 'kg', min: 1000, max: 5000, decimals: 1 },
      { symbol: 'E_H', ascii: 'Eh', label: 'hull yield', unit: 'decimal', min: 0.65, max: 0.85, decimals: 2 },
      { symbol: 'P', ascii: 'P', label: 'purity', unit: 'decimal', min: 0.93, max: 0.99, decimals: 2 },
    ],
    // Three factors, and the third is a trap rather than a yield. The purity
    // relation elsewhere in this handbook returns P as a PERCENTAGE, but the
    // printed expression multiplies by P directly, so entering the purity
    // formula's own answer would inflate the output about ninety-seven fold.
    // That is the SOURCE NOTE now recorded on the formula entry; P is given and
    // sampled as a fraction here.
    //
    // The two structural distractors each drop one factor, and their bands are
    // 1/P and 1/E_H - which is why E_H and P were pulled apart. In the first
    // draft the efficiency range reached 0.90 and the purity range started at
    // 0.90, so the two options coincided EXACTLY whenever the efficiency equalled
    // the purity: two wrong answers printing the same number on a whole locus of
    // inputs. Separating them to 0.65-0.85 and 0.93-0.99 opens a 9 percent gap
    // between the bands and leaves 2 as a legal scalar with 23 percent of margin.
    //
    // The hull-yield label avoids the word efficiency on purpose. valFragment
    // renders a decimal variable as a percentage when its label looks like an
    // efficiency, ratio or coefficient, so a variable labelled "hull
    // efficiency" would print as 75% next to a purity that prints as 0.96, and
    // the two would be on different scales in the same sentence.
    compute: v => v.Wp * v.Eh * v.P,
    context: 'a mill working out the saleable brown rice it can expect from a paddy lot once the huller yield and the cleaning purity are both taken into account',
    verb: 'expects',
    unknownPhrase: 'the kilograms of brown rice it can expect per hour',
    keyConcept: 'This is where the milling chain finally becomes a commercial figure. The batch weight alone says nothing useful, because only part of it survives the huller as intact grain, and only part of what survives is clean enough to sell. The three factors are therefore three successive haircuts on the same tonne of paddy, and the output is smaller than any of them multiplied alone would suggest. The purity factor is the one that needs a unit decision, and it is the sort of thing that separates a formula you have memorised from a formula you understand: the same handbook expresses purity elsewhere as a percentage out of 100, so a student who writes the percentage into this expression reports roughly a hundred times the real rate. Purity enters here as a fraction for the arithmetic to work, and recognising that the same symbol can arrive on a different scale in a different formula is the actual skill. The same caution applies to the efficiency, which is why every yield in the chain is quoted as a coefficient rather than as a percentage even when the report prints it as one - a coefficient of 0.75 and a yield of 75 percent are the same number, and mixing them across formulas is how a rate comes out ninety-seven or five times too large.',
    mistakes: [
      'Entering the purity as the percentage its own formula returns, which inflates the answer about ninety-seven fold',
      'Leaving out the purity, reporting the huller output before cleaning rather than the saleable output',
      'Leaving out the hull yield and treating the whole paddy batch as though it all became brown rice',
    ],
    distractors: [
      v => v.Wp * v.Eh,
      v => v.Wp * v.P,
      v => 0.5 * (v.Wp * v.Eh * v.P),
      v => 2 * (v.Wp * v.Eh * v.P),
    ],
  },
  {
    formulaId: 'c-purity', area: 'C', unknown: 'P',
    formulaText: 'P = \\left[1 - \\frac{W_u - W_c}{W_c}\\right] \\times 100',
    unit: '%', round: 2,
    vars: [
      { symbol: 'W_u', ascii: 'Wu', label: 'weight of uncleaned grains', unit: 'g', min: 2020, max: 2070, decimals: 0 },
      { symbol: 'W_c', ascii: 'Wc', label: 'weight of cleaned grains', unit: 'g', min: 1800, max: 2000, decimals: 0 },
    ],
    // The only subtraction in the batch, and the one box that had to be pinned
    // from both ends at once. Cleaning removes material, so W_u is always the
    // larger weight and the answer is always below 100 - and the box enforces
    // that by construction, since W_u starts at 2020 g and W_c stops at 2000 g.
    //
    // The driver is r = (W_u - W_c)/W_c, the contaminant share of the cleaned
    // weight, and the answer is 100(1 - r). Two constraints set the whole box.
    // The lower bound on r needs W_u >= 1.01 W_c_max = 2020, or purity could
    // exceed 100. The upper bound needs W_u <= 1.15 W_c_min, and at W_c_min =
    // 1800 that is 2070 - so 1800 is the smallest cleaned weight that leaves
    // room for an uncleaned weight above it, and loosening it lets the spec
    // report a purity of 46.
    //
    // The tempting wrong answer, the plain ratio (W_u - W_c)/W_u, is
    // deliberately unused: it runs 1 to 15 percent of the answer, which sits
    // exactly on the verifier's one-percent floor, and an option that close is
    // indistinguishable once the answer is shown to two decimals. Dividing the
    // uncleaned weight into itself instead gives 1.020 to 1.353, which is a real
    // slip and a legal distance.
    compute: v => (1 - (v.Wu - v.Wc) / v.Wc) * 100,
    context: 'a mill weighing a sample of paddy before and after the cleaning machine to grade it for sale',
    verb: 'records',
    unknownPhrase: 'the purity of the sample as a percentage',
    keyConcept: 'Purity here is a mass purity, and it is measured as a loss rather than as a gain: the difference between what went into the cleaner and what came out is the material the cleaner removed, and the percentage left is one minus that removal measured on the cleaned weight. The subtlety is the base. The contaminant share is taken on the CLEANED weight, not on the weight that went in, so the arithmetic is not the obvious weight-over-weight ratio - the denominator is the smaller of the two numbers, which makes the loss look larger than a naive calculation would suggest, and the purity correspondingly lower. The reason is that the cleaner cannot remove material without removing some grain along with it, so the dirt and the lost kernels leave together and the cleaned weight is what is left of both; measuring the loss against what survives is the conservative and correct reading. In practice the figure that matters is the grader out-turn, and this number is the starting point for it: whatever the cleaner does not remove, the grader will have to reject instead, and the cost of that rejection falls on the same mill.',
    mistakes: [
      'Measuring the removal against the uncleaned weight, giving the simple weight-over-weight ratio, which is not what the printed denominator says',
      'Dividing the uncleaned weight into itself, which reports the total as though it were the cleaned share',
      'Reporting the removed material as though it were the purity, inverting what the leading 1 minus is doing',
    ],
    distractors: [
      v => ((v.Wu - v.Wc) / v.Wc) * 100,
      v => (v.Wu / v.Wc) * 100,
      v => 0.5 * ((1 - (v.Wu - v.Wc) / v.Wc) * 100),
      v => 2 * ((1 - (v.Wu - v.Wc) / v.Wc) * 100),
    ],
  },
  // ------------------------------------------------ recovery percentages
  {
    formulaId: 'c-percent-brown-rice-recovery', area: 'C', unknown: 'BRR',
    formulaText: '\\% BRR = \\left(\\frac{W_{BR}}{W_P}\\right) \\times 100',
    unit: '%', round: 2,
    vars: [
      { symbol: 'W_P', ascii: 'Wp', label: 'weight of paddy', unit: 'kg', min: 2000, max: 2040, decimals: 1 },
      { symbol: 'W_{BR}', ascii: 'Wbr', label: 'weight of brown rice', unit: 'kg', min: 1632, max: 1800, decimals: 1 },
    ],
    // Deliberately the same box as c-hulling-coefficient, with the same weights
    // and the same two tonnes of paddy. The formulas are the same ratio with a
    // hundred on the end, and the drill should make that unmissable: a hulling
    // coefficient of 0.8 and a brown rice recovery of 80 percent are one
    // measurement wearing different clothes, and the pair of specs is how a
    // student finds that out rather than memorising two separate answers.
    //
    // The second option is the husk share - the yield figure the other side of
    // the same trade quotes - and it runs 0.111 to 0.25 against an answer of 80
    // to 90. A student who reports it has not mis-scaled anything, they have
    // answered a different question, which is the more valuable error to make
    // once and to recognise.
    compute: v => (v.Wbr / v.Wp) * 100,
    context: 'a cooperative settling a delivery of paddy with a mill and computing its share of the brown rice that comes out',
    verb: 'records',
    unknownPhrase: 'the brown rice recovery as a percentage',
    keyConcept: 'Brown rice recovery is the same measurement as the hulling coefficient with a hundred on the end, and the two travel together on every mill sheet. The recovery is what a buyer means when they say yield, because it answers the question that money turns on: for every hundred kilos of paddy delivered, how many kilos of brown rice come back. It is measured on weights taken across the huller, so it is a mass yield and not a volume yield, and the two differ because the husk is light and bulky while the grain is dense. The consequence is that the recovery and the husk share always add to 100, and a report that shows both is letting you check the arithmetic; a report that shows only the recovery is asking you to trust it. What the recovery does NOT tell you is how much of that brown rice is intact - a mill can post a healthy 84 percent recovery and have shattered the grain on the way through. That is why the recovery is a yield figure and the hulling efficiency, one step along, is the yield figure with wholeness included.',
    mistakes: [
      'Inverting the ratio and multiplying by 100, which gives a figure above 100 and is visibly not a recovery',
      'Reporting the husk share, the other side of the same trade, which is a real number on a mill sheet and is not the recovery',
      'Dropping the multiplication by 100 and reporting 0.84 where the answer is 84',
    ],
    distractors: [
      v => (v.Wp / v.Wbr) * 100,
      v => ((v.Wp - v.Wbr) / v.Wp) * 100,
      v => 0.5 * ((v.Wbr / v.Wp) * 100),
      v => 2 * ((v.Wbr / v.Wp) * 100),
    ],
  },
  {
    formulaId: 'c-percent-broken-milled-rice', area: 'C', unknown: 'BKR',
    formulaText: '\\% BKR = \\left(\\frac{W_{BKR}}{W_{MR}}\\right) \\times 100',
    unit: '%', round: 2,
    vars: [
      { symbol: 'W_{MR}', ascii: 'Wmr', label: 'weight of milled rice', unit: 'kg', min: 1000, max: 1800, decimals: 1 },
      { symbol: 'W_{BKR}', ascii: 'Wbk', label: 'weight of broken milled rice', unit: 'kg', min: 200, max: 350, decimals: 1 },
    ],
    // The first of the small ratios, and small ratios break the usual distractor
    // set. At r = 0.11 an inverted option sits nine times the answer, and by the
    // time the intact share and a per-thousand scale slip are also in the list,
    // three options are crowding the 7-to-8 range. So this spec uses one
    // structural distractor and one flat scale error, and drops the reciprocal
    // entirely.
    //
    // That in turn forces the scalars down to 0.3 and 0.7, because the intact
    // share runs 0.73 to 0.98 of the answer and 0.5, 1.5 and 2 all land inside
    // it. The box is deliberately wide in r - 11 to 35 percent broken is a bad
    // milling result, not a good one - and the width is what buys the clearance.
    // Narrowing it toward a realistic 4 percent would put the intact share at
    // 24 times the answer and put every available scalar outside the legal
    // hundred-fold ceiling.
    compute: v => (v.Wbk / v.Wmr) * 100,
    context: 'a mill separating a batch of milled rice on the grader and weighing the fragments that fall through',
    verb: 'records',
    unknownPhrase: 'the broken milled rice as a percentage of the batch',
    keyConcept: 'Broken milled rice is a loss that is created rather than inherited, and this is the number that tracks it. Every stage that moves rice - hulling, whitening, grading, conveying - breaks some of it, and the fragments are worth a fraction of what intact grain is worth because the buyer cannot grade them out at their own mill. The percentage is measured on the milled rice, which is the batch as it entered the grader, so it is a figure about the machine rather than about the paddy that went in several stages earlier. The usual threshold matters more than the exact figure: a mill contract often specifies a maximum breakage, and beyond it the price is reduced, so a shift supervisor watching a rising breakage figure is watching a falling price. What the number cannot tell you is whether the breakage came from the whiteners or the grader itself, and that is why it is worth pairing with the head rice recovery on the same report - the two together account for the batch, and a rising breakage with a steady recovery usually means the fault is downstream of the whiter.',
    mistakes: [
      'Inverting the ratio, which lands near 900 percent and is visibly not a share of a batch',
      'Reporting the intact share of the batch, the complement of what was asked, which is in the high nineties',
      'Expressing the broken grain per thousand rather than as a percentage, a tenfold scale slip that is easy to make off a grader sheet',
    ],
    distractors: [
      v => ((v.Wmr - v.Wbk) / v.Wmr) * 100,
      v => 10 * ((v.Wbk / v.Wmr) * 100),
      v => 0.3 * ((v.Wbk / v.Wmr) * 100),
      v => 0.7 * ((v.Wbk / v.Wmr) * 100),
    ],
  },
  {
    formulaId: "c-percent-brewers-rice", area: 'C', unknown: 'BrR',
    formulaText: "\\% BrR = \\left(\\frac{W_{BrR}}{W_{MR}}\\right) \\times 100",
    unit: '%', round: 2,
    vars: [
      { symbol: 'W_{MR}', ascii: 'Wmr', label: 'weight of milled rice', unit: 'kg', min: 1000, max: 2000, decimals: 1 },
      { symbol: 'W_{BrR}', ascii: 'Wbr', label: "weight of brewer's rice", unit: 'kg', min: 50, max: 200, decimals: 1 },
    ],
    // Brewer's rice is the other small ratio in the batch, and it is the
    // complement of the small one: a small share of the batch, but a share of
    // a different kind of value. The box is narrow enough at the bottom - 2.5
    // percent - to admit a second structural distractor that the broken-grain
    // spec could not, which is adding the brewer's weight to the milled weight
    // before dividing. That option runs (1 + r)/(1 - r) = 1.05 to 1.5, and it
    // is what forces the 2x scalar rather than the 1.15 that would otherwise be
    // the natural middle value.
    //
    // The ceiling on the brewer's weight is set by that band. At 250 g against a
    // 1000 g floor on the milled rice the band would reach 1.667 and the 2x
    // scalar would be left with 17 percent of margin, which is thin for a
    // multiplier a student has to recognise. 200 g buys 25 percent.
    compute: v => (v.Wbr / v.Wmr) * 100,
    context: 'a mill weighing out the small heavy grains the grader routes away from the head rice stream',
    verb: 'records',
    unknownPhrase: "the brewer's rice as a percentage of the milled rice",
    keyConcept: "Brewer's rice is the small, heavy fraction that the grader cannot sell as head rice, and the reason it is worth measuring separately is that it is not waste. It goes to beer brewing, to rice wine, and to animal feed, and a mill that treats it as a loss is throwing away a market - the price is far below head rice but far above broken grain, because small heavy grain is exactly what a brewer wants. The fraction is small, typically a few percent, which is precisely why it is miscounted: on a report that also carries a head rice recovery in the eighties, a brewer's figure under ten looks like noise and gets absorbed into rounding. The number is also the clearest evidence of the milling process itself, because brewer's rice is produced by breakage and by grain that was small to begin with, so a rising figure usually means the whiteners are set too hard. A mill that tracks it as a product rather than a defect can route it deliberately - the same grading operation that pulls a loss out of the head rice stream produces a saleable stream alongside it.",
    mistakes: [
      'Adding the brewer rice to the milled rice before dividing, which reports a figure above 100 and is not a share of anything',
      'Reporting the share of the batch that is not brewer rice, which is in the eighties and looks superficially plausible',
      'Reading the percentage as a fraction, so a 7 percent figure is reported as 0.07',
    ],
    distractors: [
      v => ((v.Wbr + v.Wmr) / v.Wmr) * 100,
      v => ((v.Wmr - v.Wbr) / v.Wmr) * 100,
      v => 0.5 * ((v.Wbr / v.Wmr) * 100),
      v => 2 * ((v.Wbr / v.Wmr) * 100),
    ],
  },
  {
    formulaId: 'c-percent-head-rice-recovery', area: 'C', unknown: 'HRR',
    formulaText: '\\% HRR = \\left(\\frac{W_{HR}}{W_{MR}}\\right) \\times 100',
    unit: '%', round: 2,
    vars: [
      { symbol: 'W_{MR}', ascii: 'Wmr', label: 'weight of milled rice', unit: 'kg', min: 1000, max: 1100, decimals: 1 },
      { symbol: 'W_{HR}', ascii: 'Whr', label: 'weight of head rice', unit: 'kg', min: 792, max: 850, decimals: 1 },
    ],
    // The headline yield of a rice mill and the tightest box in the batch. The
    // ratio has to sit in 0.72 to 0.85, and since the two weights are
    // independent that needs W_HR >= 0.72 W_MR_max = 792 and
    // W_HR <= 0.85 W_MR_min = 850. Fifty grams of latitude on the head rice
    // inside a batch of about a tonne.
    //
    // The narrowness is what buys the option set. A high ratio pushes the two
    // structural distractors to OPPOSITE sides of the answer - the break at
    // 0.176 to 0.389 of it, the yield-on-break at 2.57 to 5.68 - which is the
    // only reason an ordinary 0.5-and-2 scalar pair is available at all. Widen
    // W_MR to the 1000-2000 used by the neighbouring specs and r would run 0.4 to
    // 0.85, the yield-on-break band would start at 1.43, and the 2x scalar
    // would land inside it.
    //
    // The first draft also used an inverted option, W_MR / W_HR, and that is
    // where the batch's worst near-miss came from. Reasoning that 1/r tops out
    // at 1.39 is right in itself and useless in practice, because the option
    // stands at 1/r SQUARED against the answer - 1.93 - and came within 3.5
    // percent of the 2x scalar. The yield-on-break form is the same conceptual
    // slip, dividing by the break instead of the batch, at a distance that works.
    compute: v => (v.Whr / v.Wmr) * 100,
    context: 'a mill weighing the head rice its grader produced from one batch of milled rice and reporting the yield to its co-operative buyer',
    verb: 'records',
    unknownPhrase: 'the head rice recovery as a percentage',
    keyConcept: 'Head rice recovery is the number a rice mill is judged on, and it is worth being precise about what it is not. It is the share of the MILLED rice that survived as head rice - whole, unbroken grains of the size a buyer will pay full price for. It is not a share of the paddy, which is the milling recovery one stage back, and the difference is large: a mill that recovers 70 percent of its paddy as head rice out of a 92 percent milling recovery has a head rice recovery near 76 percent, and conflating the two overstates the yield by more than fifteen points. The head rice figure is measured after the grader, so it already has every stage of breakage deducted from it - hulling, whitening, grading and conveying all appear in the gap between the milled rice and the head rice. That is what makes it a single honest number to negotiate on, and also what makes it slow to improve: a mill that raises it has generally done so by running the whiteners more gently, which costs throughput. The two trade against each other, and the recovery figure is where that trade shows up in the accounts.',
    mistakes: [
      'Dividing by the break rather than by the batch, so the recovery comes out between two and six times too large',
      'Reporting the break as a share of the batch, which is the complement of the recovery and sits in the twenties',
      'Using the paddy weight in the denominator instead of the milled rice, which silently turns a head rice recovery into a milling recovery',
    ],
    distractors: [
      v => ((v.Wmr - v.Whr) / v.Wmr) * 100,
      v => (v.Whr / (v.Wmr - v.Whr)) * 100,
      v => 0.5 * ((v.Whr / v.Wmr) * 100),
      v => 2 * ((v.Whr / v.Wmr) * 100),
    ],
  },
];
