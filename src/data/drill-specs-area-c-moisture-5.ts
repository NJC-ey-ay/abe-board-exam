// Area C drill specs, part 5 of 5: grain moisture content, the wet-basis and
// dry-basis conversion between them, the drying mass balance, and the paddy
// property relations. Eleven specs, taking coverage from 195 to 206 of 240.
//
// This batch looked like a formality - eight of the eleven formulas are a ratio
// or a straight line - and the probe refused two of them, then a third, then a
// fourth. The failure mode here is not the exponents that wrecked batch 4. It
// is that SLOPES ARE SMALL. When a coefficient is small enough, the wrong
// coefficient produces a value only a few percent away from the right one, and
// the ordinary 0.85 and 1.15 scalar pair lands in the gap.
//
// The two paddy porosity lines are the clearest case. %P_M = 69.05 - 0.885 MC
// and %P_L = 65.55 - 0.475 MC differ only in their constants and slopes, and
// neither moisture range is wide enough to make the two lines cross or diverge
// far. Swapping the medium-grain slope for the long-grain one puts the option at
// 1.068 to 1.232 of the answer - it straddles 1.15, it contains the scalar
// outright. Reading the percentage as though it were a fraction, so that the
// slope term is eighty times too small, gives 1.146 to 1.495 - it also contains
// 1.15. Both structural bands sit just above 1, so both porosity specs are on a
// 0.5 and 2 pair instead. The long-grain spec then failed a second time for a
// related reason: its fraction-of-a-percentage band runs 1.077 to 1.230 and
// includes 1.15, so the first draft's 1.15 scalar and that distractor came
// within 0.035 percent of each other at MC = 18.2. The probe measures the
// approach between options, not just against the answer, and that is the
// measurement that caught it.
//
// The two moisture-reduction rates are the other lesson, and it is a different
// one. c-moisture-reduction-rate and c-percent-moisture-reduction are the same
// printed shape on two different quantities - weight basis and moisture basis -
// and both take a drying time. The multiply-where-the-formula-divides
// distractor is at T_d^2, which at a 48 h box is 2304 times the answer. That is
// not a plausible mistake, it is a different quantity, and the verifier's
// 100x ceiling exists precisely to reject it. Trimming T_d was not sufficient on
// its own, though. The two structural distractors in these specs are separated
// from each other by T_d^2 x (1 - M_Cf/M_Ci) or its weight-basis equivalent, and
// that product passes through 1 inside any box wide enough to be interesting - at
// which point two WRONG options agree with each other, which is a worse defect
// than either matching the right one, because the collision lands on a specific
// input the student can reach by arithmetic rather than on the answer everywhere.
// The floors on T_d are set to keep that product off 1: 4 h for the weight
// basis, 3 h for the moisture basis, each chosen from the box it actually
// belongs to rather than from taste.
//
// Two specs are pure bookkeeping and both passed first time:
// c-moisture-weight-balance and c-final-weight-dried. The useful comment on
// those is the negative one - the interesting part is that the moisture
// fractions in the drying pair are disjoint ranges, so MC_i > MC_f is
// guaranteed and the removed weight can never come out negative. That is a
// property of the BOX, not of the formula, and it is the cheapest way to keep a
// subtraction spec safe.
import type { DrillSpec } from './formula-drills';

export const areaCMoisture5Specs: DrillSpec[] = [
  // ------------------------------------------------- grain moisture balance
  {
    formulaId: 'c-moisture-weight-balance', area: 'C', unknown: 'W_W',
    formulaText: 'W_W = W_i - W_o \\qquad W_D = W_o \\qquad W_i = W_W + W_D',
    unit: 'kg', round: 4,
    vars: [
      { symbol: 'W_i', ascii: 'Wi', label: 'initial weight', unit: 'kg', min: 1000, max: 1300, decimals: 1 },
      { symbol: 'W_o', ascii: 'Wo', label: 'oven-dry weight', unit: 'kg', min: 300, max: 400, decimals: 1 },
    ],
    conversions: [
      { ascii: 'Wi', unit: 'g', factor: 1000, fromUnit: 'kg' },
      { ascii: 'Wo', unit: 'g', factor: 1000, fromUnit: 'kg' },
    ],
    // This is the whole mass balance of a moisture test in three lines, and the
    // reason the oven-dry weight matters is that it IS the dry-matter weight.
    // Whatever a moisture determination is trying to find, it starts by
    // separating the sample into the part that is water and the part that is
    // not, and the oven removes exactly the water. So the dry matter is what
    // remains on the pan, and the water is the difference.
    //
    // Wi and Wo are given disjoint ranges - 1000 to 1300 against 300 to 400 -
    // so Wi > Wo throughout and the subtraction can never go negative. Holding
    // Wo well below Wi also keeps the "reported the dry weight as the water
    // weight" distractor at 0.30 to 0.66 of the answer, which is what leaves
    // the 0.85 scalar clear of it; if the two ranges overlapped, that distractor
    // could pass through the answer exactly and the option list would render
    // the same string twice.
    compute: v => v.Wi - v.Wo,
    context: 'a farmer in Bulacan bringing a sealed paddy sample to a municipal rice station to have its moisture content checked before selling the harvest',
    verb: 'weighs',
    unknownPhrase: 'the weight of water in the sample',
    keyConcept: 'The oven-dry weight is the dry-matter weight, because the oven drives off the water and leaves the grain structure behind. The water is therefore not measured directly at any point: it is the difference between the mass as received and the mass after drying. That is what makes this an identity rather than an approximation, and it is why the three printed forms are all the same statement seen from different directions - Wi - Wo, and Wi = W_W + W_D with W_D equal to Wo. A moisture test is therefore fundamentally a weighing operation with a controlled heat step, which is why a field moisture meter is calibrated against a reference oven method rather than against a chemical assay of the water itself. The identity also holds in reverse: the weight of water plus the weight of the dry matter recovers the original weight exactly, with no allowance for shrinkage in the grain kernels themselves, since drying removes water without removing any of the solid structure that gives the grain its mass.',
    mistakes: [
      'Reporting the oven-dry weight as the weight of water, the way the dry-matter line W_D = W_o reads if the subscript is skimmed',
      'Adding the two weights instead of subtracting, from reading the balance as Wi = W_W + W_D and solving for W_W by addition',
      'Using the initial weight as the water weight when the moisture content is high and the dry matter is small',
    ],
    distractors: [
      v => v.Wo,
      v => v.Wi + v.Wo,
      v => 0.85 * (v.Wi - v.Wo),
      v => 1.15 * (v.Wi - v.Wo),
    ],
  },
  {
    formulaId: 'c-wet-dry-basis-relationship', area: 'C', unknown: 'MC_{DB}',
    formulaText: '\\% MC_{DB} = \\frac{MC_{WB}}{1 - MC_{WB}} \\times 100',
    unit: '%', round: 4,
    vars: [
      { symbol: 'MC_{WB}', ascii: 'MC', label: 'moisture content', unit: '%', min: 12, max: 24, decimals: 1 },
    ],
    // The printed pair is %MC_WB = MC_DB/(1 + MC_WB) x 100 and
    // %MC_DB = MC_WB/(1 - MC_WB) x 100. Read as a fraction on the right the
    // two are the same identity - the algebraic relationship between the bases
    // is x = y/(1+y) either way you write it. Read with the leading % taken at
    // face value on the left and the fraction on the right, the printed form is
    // wrong: enter 18 percent and the denominator goes negative. The SOURCE
    // NOTE on the formula entry records the transcription problem. What is
    // driven here is the percent-to-percent reading, which is what the identity
    // means once both sides are expressed the way their units say they are.
    //
    // The correction matters because the two bases are NOT the same number, and
    // neither is a rounding of the other. Dry basis divides the water by the dry
    // matter; wet basis divides the water by the whole. Dry is always larger,
    // and it grows as the moisture falls, so the gap between them is widest on
    // already-dry grain. A specification written on one basis read as the other
    // is not a small error - at 13 percent wet the two differ by a sixth.
    //
    // Both distractors are ways of getting the denominator wrong: a plus where
    // the minus belongs, which understates the answer, and simply dropping the
    // correction to 100, which is the error of assuming the two bases are the
    // same number. The plus version sits at 0.61 to 0.79 of the answer, so the
    // 0.85 and 1.15 pair is unavailable and 0.5 and 2 are used instead.
    compute: v => (v.MC * 100) / (100 - v.MC),
    context: 'a grain quality analyst at a rice station in Ilocos Norte needing the dry-basis figure that a storage specification requires for a lot whose incoming report was made on a wet basis',
    verb: 'corresponds to',
    unknownPhrase: 'the same grain expressed as a dry-basis moisture content',
    keyConcept: 'Moisture content on a dry basis divides the mass of water by the mass of dry matter, and on a wet basis by the total mass, so the dry-basis figure is always the larger of the two and the relationship is MC_WB = MC_DB/(1 + MC_DB). In percent-to-percent form the same statement is %MC_DB = %MC_WB x 100/(100 - %MC_WB), and that form is the one to use when the wet-basis figure you have is already a percentage, because the correction divides by the share of the mass that is not water. The two bases coincide only in the limit of no water at all, and they diverge as the grain dries, so a specification that names a basis is naming a different quantity and not a different rounding of the same one. This is why a grain that passes at 14 percent wet basis is not thereby at 14 percent dry basis - it is at 16.3 percent dry, and the gap grows as the moisture falls, which is precisely when a storage specification is most sensitive to it.',
    mistakes: [
      'Using a plus in the denominator where the printed correction requires a minus, which returns a number smaller than the wet-basis figure',
      'Assuming the two bases are interchangeable and reporting the wet-basis figure unchanged',
      'Dividing by 100 - MC instead of 100 - MC over 100, mixing the fractional form with the percentage on the right',
    ],
    distractors: [
      v => (v.MC * 100) / (100 + v.MC),
      v => v.MC,
      v => 0.5 * ((v.MC * 100) / (100 - v.MC)),
      v => 2 * ((v.MC * 100) / (100 - v.MC)),
    ],
  },
  {
    formulaId: 'c-weight-moisture-removed', area: 'C', unknown: 'W_{MR}',
    formulaText: 'W_{MR} = W_i\\left[1 - \\frac{1 - MC_i}{1 - MC_f}\\right]',
    unit: 'kg', round: 4,
    vars: [
      { symbol: 'W_i', ascii: 'Wi', label: 'initial weight', unit: 'kg', min: 1000, max: 10000, decimals: 1 },
      { symbol: 'MC_i', ascii: 'MCi', label: 'initial moisture fraction', unit: 'decimal', decimals: 2, min: 0.2, max: 0.4 },
      { symbol: 'MC_f', ascii: 'MCf', label: 'final moisture fraction', unit: 'decimal', decimals: 2, min: 0.05, max: 0.1 },
    ],
    // The printed form is the mass balance rearranged to isolate the water, and
    // the rearrangement is the entire content of the spec. W_MR = Wi - W_f, and
    // W_f = Wi(1 - MC_i)/(1 - MC_f), so
    //   W_MR = Wi[1 - (1 - MC_i)/(1 - MC_f)]
    //        = Wi[(1 - MC_f) - (1 - MC_i)]/(1 - MC_f)
    //        = Wi(MC_i - MC_f)/(1 - MC_f).
    // The (1 - MC_f) is not a correction for anything physical. It is what
    // keeps the DRY MATTER constant: drying removes water and leaves the solid,
    // so the fraction of the mass that is not water is the one quantity that
    // must not change.
    //
    // MC_i and MC_f are fractions, and their ranges are disjoint - 0.20 to 0.40
    // against 0.05 to 0.10 - so the grain can never start drier than it ends and
    // the answer is always positive. Both obvious wrong answers are single-factor
    // slips on that rearrangement: the naive difference Wi(MC_i - MC_f), which is
    // short by the (1 - MC_f), at 0.90 to 0.95 of the answer; and drying to
    // absolute zero, Wi x MC_i, which is short by the whole final dry-matter
    // fraction, at 1.086 to 1.800.
    compute: v => v.Wi * (1 - (1 - v.MCi) / (1 - v.MCf)),
    context: 'a cooperative in Iloilo drying a batch of palay in a flatbed dryer and needing to know how much water it must expect to condense out of the air',
    verb: 'gives up',
    unknownPhrase: 'the weight of moisture driven out of the grain',
    keyConcept: 'Drying removes water and leaves the dry matter untouched, so the mass of the solid is invariant and the change in total mass is exactly the water that left. The (1 - MC_f) denominator is that invariance written down: dividing the water by the final dry fraction rather than by the initial one is what holds the solid constant across the operation. Reading the same expression as Wi(MC_i - MC_f)/(1 - MC_f) makes the error visible - the numerator is the difference in moisture fraction and the denominator is the final dry fraction, not a fudge for measurement. This is why the moisture contents here are FRACTIONS rather than percentages. A student who substitutes 18 and 12 in place of 0.18 and 0.12 gets a result nine thousand times too large, and the mistake is not arithmetic but a units failure that the formula text does not warn about, since the printed form does not show a percent sign on either moisture term. In a real dryer the figure that matters is this one divided by the drying time, and the number of kilograms of condensate is this figure multiplied by the specific humidity change across the dryer bed.',
    mistakes: [
      'Taking the plain difference Wi x (MC_i - MC_f) and dropping the 1 - MC_f, which understates the answer by up to a tenth',
      'Removing all of the initial moisture, Wi x MC_i, and ignoring that the final moisture is still present in the grain',
      'Entering the moisture contents as percentages instead of fractions, which scales the answer by a factor of about 100 squared',
    ],
    distractors: [
      v => v.Wi * (v.MCi - v.MCf),
      v => v.Wi * v.MCi,
      v => 0.5 * (v.Wi * (1 - (1 - v.MCi) / (1 - v.MCf))),
      v => 2 * (v.Wi * (1 - (1 - v.MCi) / (1 - v.MCf))),
    ],
  },
  {
    formulaId: 'c-final-weight-dried', area: 'C', unknown: 'W_f',
    formulaText: 'W_f = \\frac{W_i\\left(1 - MC_i\\right)}{1 - MC_f}',
    unit: 'kg', round: 4,
    vars: [
      { symbol: 'W_i', ascii: 'Wi', label: 'initial weight', unit: 'kg', min: 1000, max: 10000, decimals: 1 },
      { symbol: 'MC_i', ascii: 'MCi', label: 'initial moisture fraction', unit: 'decimal', decimals: 2, min: 0.2, max: 0.4 },
      { symbol: 'MC_f', ascii: 'MCf', label: 'final moisture fraction', unit: 'decimal', decimals: 2, min: 0.05, max: 0.1 },
    ],
    // The companion to c-weight-moisture-removed, and the pair is meant to be
    // read together: Wi = W_MR + W_f holds identically, so a student who has
    // both figures can check one against the other without any external data.
    // That check is worth more than either formula alone, because the dryer
    // operator's real question is whether the mass that came out is consistent
    // with the mass that went in.
    //
    // The two moisture ranges are disjoint fractions, so MC_i > MC_f always and
    // the numerator is smaller than the denominator in the ratio sense - the
    // final weight is therefore always less than the initial, as it must be.
    //
    // The first distractor is the near-miss that makes this spec worth its
    // batch slot: Wi(1 - MC_i) is the weight of dry matter, correct as far as it
    // goes, and it is what a student writes who remembers that drying only
    // removes water and stops thinking. It is 0.90 to 0.95 of the answer, so it
    // never collides but it is always the most attractive wrong option. The
    // second divides by MC_f rather than (1 - MC_f), which is not a small slip -
    // it comes out nine to nineteen times too large.
    compute: v => (v.Wi * (1 - v.MCi)) / (1 - v.MCf),
    context: 'a flatbed dryer operator in Bulacan loading wet palay and budgeting how much paddy she will be able to bag after a drying run',
    verb: 'is dried from',
    unknownPhrase: 'the weight of dried paddy that comes off the dryer',
    keyConcept: 'The final weight follows from the dry matter being invariant: the mass of solid is the initial mass times the initial share that was not water, and the final mass is whatever that same solid weighs once the grain is at its target moisture. Dividing by (1 - MC_f) rather than by (1 - MC_i) is the whole operation, and the reason is that the target moisture is a fraction of a SMALLER total. The quantity Wi(1 - MC_i) is the dry matter itself and is smaller than the final weight by exactly the factor 1/(1 - MC_f), because the dried grain still carries water. This is the same invariance as in the weight-of-moisture-removed relation, and together the two expressions are the drying mass balance: the water removed plus the weight dried equals the weight loaded. In practice the figure is what sizes a dryer, because a dryer is rated on the amount of wet paddy it must take per hour, and converting that to the throughput of dried product requires this expression.',
    mistakes: [
      'Reporting the dry matter, Wi x (1 - MC_i), and stopping there without accounting for the water still in the dried grain',
      'Dividing by MC_f instead of 1 - MC_f, which treats the target moisture as the final share rather than the final water fraction',
      'Subtracting the moisture difference from the initial weight, which is a linear treatment of a relation that is not linear in the moisture',
    ],
    distractors: [
      v => v.Wi * (1 - v.MCi),
      v => (v.Wi * (1 - v.MCi)) / v.MCf,
      v => 0.5 * ((v.Wi * (1 - v.MCi)) / (1 - v.MCf)),
      v => 2 * ((v.Wi * (1 - v.MCi)) / (1 - v.MCf)),
    ],
  },
  {
    formulaId: 'c-moisture-reduction-rate', area: 'C', unknown: 'MRR',
    formulaText: 'MRR = \\frac{W_i - W_f}{T_d}',
    unit: 'kg/h', round: 4,
    vars: [
      { symbol: 'W_i', ascii: 'Wi', label: 'initial weight', unit: 'kg', min: 5000, max: 20000, decimals: 1 },
      { symbol: 'W_f', ascii: 'Wf', label: 'final weight', unit: 'kg', min: 1500, max: 3500, decimals: 1 },
      { symbol: 'T_d', ascii: 'Td', label: 'drying time', unit: 'h', min: 4, max: 9.5, decimals: 1 },
    ],
    conversions: [
      { ascii: 'Td', unit: 'min', factor: 60, fromUnit: 'h' },
    ],
    // A rate is a weight difference over a time, and the two ways to get it
    // wrong are to drop a term from the numerator or to invert the operation.
    // Dropping W_f leaves Wi/T_d, the rate at which the whole charge would have
    // to be dried if none of it had already been dried - always too fast, at
    // 1.081 to 3.333 of the answer. Multiplying by T_d instead of dividing gives
    // a figure with the wrong dimension entirely, at T_d^2.
    //
    // The box is shaped by two constraints that pull against each other, and
    // the algebra behind both is worth stating because the probe found each one
    // only after it had already produced a bad batch.
    //
    // The ceiling first. No option may exceed 100 times the answer, and the
    // multiplied distractor is at T_d^2, so T_d is capped at 9.5 h to hold that
    // band at 16 to 90. A first attempt allowed 48 h, which is not an unusual
    // figure for a slow drying operation, and it put the option at 2304 times
    // the answer - far past guessing territory and not a plausible mistake
    // anyone would make.
    //
    // The floor second, and it is the subtler of the two. The two structural
    // distractors are separated from each other by
    //   (Wi/T_d) / ((Wi - Wf) x T_d) = Wi/((Wi - Wf) x T_d),
    // which passes through 1 when T_d equals Wi/(Wi - Wf). At that point two
    // WRONG options coincide - a worse defect than either matching the right
    // one, because it is reachable by arithmetic rather than everywhere. Capping
    // W_f at 3500 kg holds Wi/(Wi - Wf) at or below 3.33, so a 4 h floor leaves
    // the product permanently below 1 with 14 percent to spare. A first attempt
    // used a 1.5 h floor, which sat inside the crossing window.
    //
    // That same W_f cap is what licenses the 0.85 scalar: the "forgot W_f" band
    // is then 1.081 to 3.333, entirely above 1. A 1.15 scalar would have fallen
    // inside it.
    compute: v => (v.Wi - v.Wf) / v.Td,
    context: 'a grain drying cooperative sizing the extraction rate of the fan on a flatbed dryer in Bulacan against the throughput it has promised to a rice mill',
    verb: 'records',
    unknownPhrase: 'the average rate at which water leaves the grain',
    keyConcept: 'A rate is a change divided by the time over which it happens, and for a batch dryer the change is the difference between the charge and what comes off it. The figure that matters to the plant is the total mass of water the bed must give up, divided by the time the grain is allowed to spend in it, because that is the extraction duty the fan and the heating coil must meet. Note the dimensional consequence of the printed form: because the numerator is a mass difference, this is a weight-based rate in kg per hour, and it is a different quantity from the moisture-basis rate of percent per hour that the next formula prints. Quoting one when the other is wanted is a common error in dryer specifications, and the two are related only through the moisture contents of the grain. Within a single run the rate is not constant - a bed dries fast while the surface is wet and then slows as the drying front moves inward - so the average of this expression is an approximation whose accuracy depends on how close the run is to linear.',
    mistakes: [
      'Dividing the initial weight by the drying time and ignoring the dried grain that is still in the charge',
      'Multiplying the weight difference by the drying time instead of dividing by it, which changes the dimension from a rate to a mass',
      'Treating the rate as instantaneous when the printed expression gives only the run average',
    ],
    distractors: [
      v => v.Wi / v.Td,
      v => (v.Wi - v.Wf) * v.Td,
      v => 0.5 * ((v.Wi - v.Wf) / v.Td),
      v => 0.85 * ((v.Wi - v.Wf) / v.Td),
    ],
  },
  {
    formulaId: 'c-percent-moisture-reduction', area: 'C', unknown: '\\% MRR',
    formulaText: '\\% MRR = \\frac{MC_i - MC_f}{T_d}',
    unit: '%/h', round: 4,
    vars: [
      { symbol: 'MC_i', ascii: 'MCi', label: 'initial moisture content', unit: '%', min: 16, max: 26, decimals: 1 },
      { symbol: 'MC_f', ascii: 'MCf', label: 'final moisture content', unit: '%', min: 10, max: 14, decimals: 1 },
      { symbol: 'T_d', ascii: 'Td', label: 'drying time', unit: 'h', min: 3, max: 10, decimals: 1 },
    ],
    // The moisture-basis twin of c-moisture-reduction-rate: same shape, same
    // drying time, but the numerator is a change in moisture CONTENT rather
    // than in mass, so the answer is a percentage per hour. Setting the two side
    // by side is the point of having both - the printed forms are identical in
    // structure and differ only in what the symbols stand for, and a student
    // who cannot tell which is which will substitute the wrong pair.
    //
    // The SOURCE NOTE on the formula entry records a naming problem worth
    // knowing about. The standard "percent moisture reduction" is a fraction of
    // the INITIAL moisture and carries no time term at all:
    //   100 x (MC_i - MC_f)/MC_i
    // The printed form instead divides by the drying time, so what it computes
    // is a rate of moisture change, not a percent reduction. The expression is
    // dimensionally coherent and is driven as printed, but the name is shared
    // with a different quantity, and a specification that says "12 percent
    // moisture reduction" may mean either.
    //
    // The box needed the same care as its twin and for a sharper reason. The two
    // structural distractors - the moisture difference multiplied by T_d, and
    // MC_i alone divided by T_d - are separated from each other by exactly
    //   T_d^2 x (1 - MC_f/MC_i).
    // The bracket runs 0.125 to 0.615 across this box, so the product passes
    // through 1 for T_d between 1.3 and 2.8 h. A first attempt floored T_d at
    // 1.5 h, inside that window, and the two wrong options landed 0.064 percent
    // apart - closer to each other than either was to the answer. A 3 h floor
    // holds the product at 1.125 or above, and still keeps the multiply band at
    // 9 to 100, just under the ceiling.
    compute: v => (v.MCi - v.MCf) / v.Td,
    context: 'a drying supervisor in Iloilo recording how quickly the moisture content of palay is coming down in a bed dryer and comparing it against the rate the mill will accept',
    verb: 'records',
    unknownPhrase: 'the rate of fall in moisture content',
    keyConcept: 'This is the moisture-basis counterpart of the weight-basis reduction rate, and the pairing is the useful part: both divide a change by the same drying time, and they differ only in what the numerator measures. Because the two moisture contents here are percentages, the answer is a percentage per hour, which is a rate of change of a composition rather than of a mass, and the two numbers are related through the weight of the batch rather than being interconvertible on their own. The printed name is shared with the standard percent moisture reduction, which is instead 100(MC_i - MC_f)/MC_i and has no time in it at all, so a document that quotes a percent reduction without saying whether it is a share of the initial moisture or a rate per hour is ambiguous. The distinction matters in storage management, where the question is usually how long a given bed will take to reach a safe moisture, and that is the rate form, integrated over the run.',
    mistakes: [
      'Multiplying the moisture difference by the drying time instead of dividing, which changes the dimension from a rate to a percentage',
      'Using the initial moisture alone and forgetting that the grain finishes at a final moisture above zero',
      'Reading the printed name as the standard percent reduction, which would divide by the initial moisture and carry no time term',
    ],
    distractors: [
      v => (v.MCi - v.MCf) * v.Td,
      v => v.MCi / v.Td,
      v => 0.85 * ((v.MCi - v.MCf) / v.Td),
      v => 1.15 * ((v.MCi - v.MCf) / v.Td),
    ],
  },
  // ----------------------------------------------------- paddy properties
  {
    formulaId: 'c-paddy-porosity-medium', area: 'C', unknown: 'P_M',
    formulaText: '\\% P_M = 69.05 - 0.885\\,MC_{WB}',
    unit: '%', round: 4,
    vars: [
      { symbol: 'MC_{WB}', ascii: 'MC', label: 'moisture content', unit: '%', min: 10, max: 26, decimals: 1 },
    ],
    // A straight line with a small slope, and the smallness is the whole problem
    // for the distractors. The answer falls only from 60.2 to 46.0 across the
    // moisture range, so a distractor built from a different slope in front of
    // the SAME large constant lands within a fifth of the right answer. There is
    // no leverage in this formula - the constant dominates - and that is what
    // has to be respected when choosing options.
    //
    // Both structural distractors are coefficient errors and both land ABOVE
    // the answer, for a reason worth noting: the negative slope means the wrong
    // slope changes the size of the term being subtracted, and a smaller
    // subtracted term leaves a larger porosity. Using the long-grain slope gives
    // 1.068 to 1.232 of the answer; dividing the slope term by 100, as though
    // the moisture were a fraction, gives 1.146 to 1.495. Both of those bands
    // contain 1.15, so the 0.85 and 1.15 scalar pair is unavailable here and
    // the spec is built on 0.5 and 2.
    //
    // That both errors read as too-much-porosity is a feature, not a problem: a
    // student who is unsure whether to add or subtract has a physical check
    // available, since wetter paddy is denser and less porous, and the sign of
    // the slope is the only thing that encodes it.
    compute: v => 69.05 - 0.885 * v.MC,
    context: 'an operator checking the bulk density of stored palay in a flat-bottomed bin in Central Luzon and needing the void fraction to size the aeration ducting',
    verb: 'is measured at',
    unknownPhrase: 'the porosity of the medium-grain paddy at that moisture',
    keyConcept: 'Porosity here is the share of the bulk volume that is void rather than grain, and the empirical relation says it FALLS as moisture rises. That direction is physical: water adds mass without adding bulk volume, so a wetter grain packs to a higher solids fraction and a lower void fraction. The printed line is a fit rather than a derivation, which is why it carries two independent numbers and no mechanism - the 69.05 and the 0.885 have to be read off a table or a handbook, not reasoned out. The consequence for a student is that the arithmetic is trivial and the recall is not, and a wrong constant cannot be recovered from a wrong slope because the two were measured together. In storage the figure sets the resistance to airflow through the bed, since air moves through the voids and the tighter the packing the harder it is to push air through, so an error of a few percentage points in porosity translates directly into a fan duty that is wrong by the same order. The relation is specific to the grain class it names, and the long-grain line has its own constants.',
    mistakes: [
      'Using the long-grain coefficients 65.55 and 0.475 for medium-grain paddy, which differs by a fifth across the whole range',
      'Substituting the moisture as a fraction so the slope term is a hundred times too small',
      'Adding the slope term rather than subtracting it, from reading the porosity as increasing with moisture',
    ],
    distractors: [
      v => 69.05 - 0.475 * v.MC,
      v => 69.05 - (0.885 * v.MC) / 100,
      v => 0.5 * (69.05 - 0.885 * v.MC),
      v => 2 * (69.05 - 0.885 * v.MC),
    ],
  },
  {
    formulaId: 'c-paddy-porosity-long', area: 'C', unknown: 'P_L',
    formulaText: '\\% P_L = 65.55 - 0.475\\,MC_{WB}',
    unit: '%', round: 4,
    vars: [
      { symbol: 'MC_{WB}', ascii: 'MC', label: 'moisture content', unit: '%', min: 10, max: 26, decimals: 1 },
    ],
    // The long-grain twin, and the twin is what makes the pair teachable: the
    // same variable, the same sign, the same physical argument, and only the two
    // constants differ. Set beside each other they make it obvious that a
    // porosity figure is grain-class specific, which is the fact a table lookup
    // is really testing.
    //
    // This spec failed its first probe for a reason the medium-grain spec had
    // already warned about. The two structural bands are the coefficient swap,
    // which now sits BELOW the answer at 0.865 to 0.990, and the fraction-of-a-
    // percentage version, at 1.077 to 1.230. The first draft used a 1.15
    // scalar on the argument that 1.15 was clear of the lower band. It is clear
    // of the lower band, and it sits squarely inside the upper one: at MC = 18.2
    // the scalar and the mis-scaled option came within 0.035 percent of each
    // other. The probe reports the closest approach between every PAIR of
    // options, not just each option's distance from the answer, and that is the
    // measurement that caught this. Moving the scalar to 2 puts it 63 percent
    // clear of the 1.230 top of that band.
    //
    // Note also that the coefficient-swap band reaches 0.990 - very nearly the
    // answer - at the wet end. The medium-grain coefficients are almost right
    // for wet long-grain paddy and only diverge as the grain dries, which is
    // the worst possible shape for a distractor to have: a student can carry
    // the wrong constants through half a calculation and see a number that
    // looks defensible. The 0.85 scalar is nevertheless clear of that band, by
    // 1.8 percent at the corner, which is the tightest scalar margin in the
    // batch and worth knowing about before anyone narrows this box.
    compute: v => 65.55 - 0.475 * v.MC,
    context: 'a mill engineer in Ilocos Norte estimating the void space in a bin of long-grain palay so the aeration fan can be selected for the stored grain',
    verb: 'is measured at',
    unknownPhrase: 'the porosity of the long-grain paddy at that moisture',
    keyConcept: 'The long-grain relation carries the same sign and the same physical argument as the medium-grain one - wetter grain is less porous, because water adds mass without adding bulk volume - but a shallower slope and a lower intercept. The shallower slope is the more interesting of the two differences: long-grain paddy responds less sharply to moisture than medium-grain does, so the two classes are hardest to tell apart at high moisture and separate progressively as the grain dries. At the wet end of the range the two lines are within a couple of points of each other, and the practical consequence is that a porosity figure quoted without its grain class is nearly meaningless at high moisture and only becomes discriminating as the grain dries. As with the medium-grain line, both constants are an empirical fit and must be recalled rather than derived, and the two numbers are not independently transferable. The figure sets the airflow resistance of the bed, so it is an input to fan selection rather than a descriptive statistic.',
    mistakes: [
      'Using the medium-grain coefficients 69.05 and 0.885 for long-grain paddy, which is nearly correct on wet grain and increasingly wrong as it dries',
      'Substituting the moisture as a fraction so the slope term is a hundred times too small',
      'Carrying the medium-grain constants through most of a calculation before noticing the mismatch, since the two lines nearly agree at high moisture',
    ],
    distractors: [
      v => 69.05 - 0.885 * v.MC,
      v => 65.55 - (0.475 * v.MC) / 100,
      v => 0.5 * (65.55 - 0.475 * v.MC),
      v => 2 * (65.55 - 0.475 * v.MC),
    ],
  },
  {
    formulaId: 'c-percent-increase-porosity', area: 'C', unknown: '\\% \\text{Increased}',
    formulaText: '\\% \\text{Increased} = \\left(\\frac{P_f - P_i}{P_f}\\right) \\times 100',
    unit: '%', round: 4,
    vars: [
      // The printed form spells both porosities out as \text{Final Porosity} and
      // \text{Initial Porosity}. Those cannot be used as symbols here, because a
      // symbol containing a space is unreadable by the walkthrough's own givens
      // parser - the given line comes out as "Final Porosity = 58.4" and the
      // parser splits on the space, so the question fails to resolve its own
      // inputs. P_f and P_i stand for exactly the two printed quantities and the
      // meanings below say so.
      { symbol: 'P_f', ascii: 'F', label: 'porosity after processing', unit: '%', min: 54, max: 66, decimals: 1 },
      { symbol: 'P_i', ascii: 'I', label: 'porosity before processing', unit: '%', min: 45, max: 52, decimals: 1 },
    ],

    // The printed denominator is the FINAL porosity, which is the unusual
    // choice. Almost every percentage change in practice is taken on the initial
    // value - a yield, a recovery, an increase - and the final value is what
    // results from the change. Here the printed form divides by the final
    // figure, which makes the result a share of the destination rather than of
    // the starting point, and it is transcribed as printed. It is also what the
    // "divided by the initial" distractor encodes, which is convenient: the most
    // tempting error here is the conventional one.
    //
    // The box is pinned so that F/I stays inside 1.038 to 1.467, and that range
    // is where the real numbers put it. Working back through the two printed
    // porosity lines, paddy poured at a high moisture sits near 53 percent and
    // the same grain dried down sits near 61, so a real process moves the
    // figure by about an eighth and never anything like a factor of two. A first
    // attempt allowed a final porosity up to 70 against an initial as low as 25,
    // which let F/I climb to 2.79 and swallowed the 2x scalar whole - the two
    // options coincided exactly when the initial was half the final.
    //
    // 1.15 is unusable here for the same reason it was unusable in batch 4: the
    // band straddles it. The scalar pair is 0.5 and 2.
    //
    // The two porosities are given as percentages and the expression divides
    // them and multiplies by 100, so the percent handling cancels on both sides
    // and the box is safe to run in either convention. Final is held above
    // initial throughout, which is the only direction that makes the word
    // "increase" true.
    compute: v => ((v.F - v.I) / v.F) * 100,
    context: 'a rice mill operator in Batangas comparing the bulk void space of palay as it comes off the separator against the same grain after it has been dried and cooled',
    verb: 'records',
    unknownPhrase: 'the percentage increase in porosity across the process',
    keyConcept: 'Porosity rises as a grain dries, because the water that leaves takes up volume it was not contributing to the bulk - water fills the voids between kernels rather than adding to the solid, so removing it opens space that was already there. The measurement that shows this is the bulk density test, and the gap between the two porosities is what tells an operator how much the drying step actually loosened the bed. The printed form divides the change by the FINAL porosity, which is worth flagging because it is not the convention a student will expect: a percentage change is normally taken on the initial value, and here it is taken on the destination, so the number is a share of the after-state and reads a little lower than the familiar form would. Both figures are shares of the bulk volume and so the units cancel inside the quotient, which is why the expression tolerates being fed percentages or fractions without adjustment as long as both are on the same basis.',
    mistakes: [
      'Dividing the change by the initial porosity, which is the conventional percentage change and not what the printed form says',
      'Computing the difference in porosity and multiplying by 100 without dividing at all, which reports a figure in the hundreds',
      'Reading the final porosity as the smaller of the two and reporting a decrease, when drying necessarily opens the bed',
    ],
    distractors: [
      v => ((v.F - v.I) / v.I) * 100,
      v => (v.F - v.I) * 100,
      v => 0.5 * (((v.F - v.I) / v.F) * 100),
      v => 2 * (((v.F - v.I) / v.F) * 100),
    ],
  },
  {
    formulaId: 'c-minimum-angle-friction', area: 'C', unknown: '\\theta',
    formulaText: '\\theta = \\tan^{-1}(x)',
    unit: 'deg', round: 4,
    vars: [
      { symbol: 'x', ascii: 'x', label: 'material friction value', unit: 'decimal', decimals: 2, min: 0.2, max: 0.7 },
    ],
    // The spec is entirely about units. x is a dimensionless coefficient of
    // friction, the inverse tangent of a dimensionless quantity is in radians,
    // and the printed output is an ANGLE, which for a material property is
    // quoted in degrees. So the conversion belongs on the answer, and getting it
    // wrong in either direction is the whole difficulty.
    //
    // The first distractor is the conversion applied to the argument instead:
    // converting x to degrees and then inverting the tangent, which puts the
    // factor on the input where it does not belong. It is a real slip and the
    // error is small - 1.3 to 15 percent - because arctan is compressing toward
    // 90 degrees either way, which is exactly why it is worth drilling. That
    // band also rules out 1.15 as a scalar.
    //
    // The second distractor inverts the argument, atan(1/x), which is how the
    // angle of friction actually appears in some handling tables and so is the
    // classic error. It sits at 1.572 to 6.958 of the answer: always well above
    // 1, and a wide band because arctan(1/x) climbs toward 90 degrees as x
    // falls. Since the answer itself only runs from 11 to 35 degrees across the
    // whole box, the reciprocal slip is a large factor at the low end and a
    // modest one at the high end.
    //
    // That band is why the scalar pair is 0.5 and 10 rather than the usual 0.85
    // and 1.15. Both 1.15 and 2 fall inside 1.572 to 6.958, and 10 clears the
    // top of the band by 43 percent.
    compute: v => (Math.atan(v.x) * 180) / Math.PI,
    context: 'a shed operator in Isabela working out the steepest angle a chute can be tilted before wet palay will start to slide rather than flow in it',
    verb: 'reports',
    unknownPhrase: 'the angle the material will hold before sliding',
    keyConcept: 'The angle of friction is the tangent of the angle at which sliding begins, so it is the inverse tangent of the coefficient of friction - a definition, not a fit, and the only place in this batch where nothing needs recalling. What does need care is the unit. A coefficient of friction is dimensionless, so its inverse tangent comes out in radians, and the answer is only an angle in the degrees a material property is quoted in once that conversion is applied to the result. The physical reading is the angle of internal friction that governs how a granular material will hold on a slope: below it the material resists sliding, above it shears and flows, which is why the number sets the tilt of a chute, the repose angle of a heap, and the wall friction available to a silo. The reciprocal of the coefficient is not a different convention but a different quantity, and it is the reason the inverse tangent is sometimes seen applied to 1 over x in handling tables.',
    mistakes: [
      'Applying the radians-to-degrees conversion to the coefficient of friction before inverting the tangent, so the factor lands on the input',
      'Inverting the coefficient, taking the tangent of 1 over x, which is the form that appears in some handling tables',
      'Reporting the inverse tangent in radians and attaching a degree symbol to it',
    ],
    distractors: [
      v => (v.x * 180) / Math.PI,
      v => (Math.atan(1 / v.x) * 180) / Math.PI,
      v => 0.5 * ((Math.atan(v.x) * 180) / Math.PI),
      v => 10 * ((Math.atan(v.x) * 180) / Math.PI),
    ],
  },
  {
    formulaId: 'c-specific-heat-paddy', area: 'C', unknown: 'C',
    formulaText: 'C\\,(BTU/lb\\cdot^\\circ F) = 0.22008 + 0.01301\\,MC_{WB}',
    unit: 'BTU/lb\\cdot^\\circ F', round: 4,
    vars: [
      { symbol: 'MC_{WB}', ascii: 'MC', label: 'moisture content', unit: '%', min: 10, max: 26, decimals: 1 },
    ],
    // The intercept is the specific heat of the dry grain and the slope is the
    // contribution of the water, so the printed form is a mixture rule written
    // as a straight line - the specific heat of a composite is the mass-weighted
    // average of its parts, and here the water fraction runs from 0.10 to 0.26
    // so the water term is 0.130 to 0.338 BTU per lb per degree F against a
    // dry-matter contribution of 0.220. Water is not dominant here as it is in a
    // fully wet material, but it is the larger of the two terms across most of
    // the range, which is the point worth taking from the formula.
    //
    // This is the one spec in the batch where the ordinary 0.85 and 1.15 scalar
    // pair works, and it works for a reason the other nine failed: both
    // structural distractors are the slope term scaled wrongly - by ten for a
    // fraction instead of a percentage, and by one ten-thousandth for a
    // percentage read as a fraction - and they land on OPPOSITE sides of the
    // answer, at 4.34 to 6.45 and 0.40 to 0.67. Nothing sits in the corridor
    // around 1, so the conventional scalars have the whole corridor to
    // themselves.
    //
    // The unit is written BTU per pound per degree Fahrenheit, the English
    // thermal mass unit that the rest of the grain-handling tables use. The
    // thermal capacity of a bed of grain is what sets the energy requirement of
    // the drying step, and it is needed in both directions: to raise the
    // temperature of a charge, and to account for the fact that the water
    // leaving the grain carries enthalpy with it.
    compute: v => 0.22008 + 0.01301 * v.MC,
    context: 'a process engineer at a palay drying plant in Bulacan computing the heat input needed to bring a charge of grain up to drying temperature',
    verb: 'is read at',
    unknownPhrase: 'the specific heat of the paddy at that moisture',
    keyConcept: 'The specific heat of grain rises with its moisture because water is being added to a material that does not otherwise contain much thermal mass, and the printed line is the mixture rule for that: the intercept is the specific heat of the dry matter and the slope is the specific heat of water weighted by the moisture fraction. The two numbers in the printed expression are therefore not an arbitrary fit, which is worth noticing when learning them - the slope is 0.01301 per percentage point, and since one percentage point is a hundredth of a mass fraction, the implied specific heat of the water term is about 1.301 BTU per pound per degree F against the 1.0 tabulated for water at room temperature, so the printed line is close to the physical mixture rule and the dry-matter term is where most of the departure sits. The practical use is the energy balance on a drying bed, and it cuts both ways: the charge must be heated, and the moisture that leaves carries its own enthalpy away with it.',
    mistakes: [
      'Substituting the moisture as a fraction and multiplying the slope term by ten instead of using the percentage directly',
      'Substituting the percentage into a formula that expects a fraction and dividing the slope term by a hundred',
      'Reading the intercept as the specific heat of wet grain and omitting the moisture contribution entirely',
    ],
    distractors: [
      v => 0.22008 + 0.1301 * v.MC,
      v => 0.22008 + (0.01301 * v.MC) / 100,
      v => 0.85 * (0.22008 + 0.01301 * v.MC),
      v => 1.15 * (0.22008 + 0.01301 * v.MC),
    ],
  },
];
