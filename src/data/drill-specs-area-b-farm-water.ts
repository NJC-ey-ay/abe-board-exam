// Area B drill specs, part 4 of 6: Farm and System Water Requirements, and
// Soil Moisture Management.
//
// These are the bookkeeping chain that sits between the soil physics and the
// canal. Each formula is the previous one plus one more loss:
//
//   FIR  = CWR + LR - ERF   the crop's ask, minus rainfall, plus leaching
//   FWR  = FIR + losses      what must reach the field
//   DWR  = FWR + CL          what the canal must deliver
//   FTR  = FWR + FDL         what must leave the turnout
//
// so a question about any one of them is really a question about which losses
// have been counted yet. That is the thread the keyConcepts carry, and it is
// why the four are written as separate specs with separate settings rather than
// folded into one parametric question.
//
// Two of this batch share an equation with something already written, and both
// are framed differently on purpose:
//
//   b-depth-readily-available-moisture prints the same product as
//   b-net-application-depth, (FC - PWP) * A_s * RZD * MAD. Here it is the
//   drought trigger - the drawdown a crop can tolerate before an irrigation
//   interval is set - rather than the depth applied in one set. The equation
//   is genuinely the same; only the question being asked about it differs.
//
//   b-water-applied prints Q = 2.78 (A D)/T with A in ha, D in cm, T in h,
//   which the SOURCE NOTE on that formula already flags as wrong for those
//   units: the factor for centimetres is 27.78, and 2.78 is the factor for
//   millimetres. The drill therefore declares D in MILLIMETRES and uses the
//   printed 2.78 unchanged. That keeps the transcription faithful to the
//   handbook while making the arithmetic dimensionally correct, which is
//   strictly better than silently substituting 27.78 and hiding the error.
//   The keyConcept states both forms so neither is a trap.
//
// b-application-rate is the same situation as the Rational Method entry: the
// handbook prints AR = Q/A with no constant, because the constant is carried
// by the units. The answer is therefore declared in lps/ha, the unit the
// printed ratio actually produces. The conversion to mm/hr (1 lps/ha =
// 0.36 mm/hr) is taught in the keyConcept rather than folded into the formula.
//
// Range discipline: the "+ one more loss" chain means a bare base term is
// always a near-miss for the total, so each loss variable is floored high
// enough that dropping it still leaves a visibly different number. That is why
// leaching requirement starts at 10 mm and farm ditch loss at 60 mm - at a
// loss of 5 mm the "forgot the loss" option would be within 1% of the answer
// and the question would be a coin toss.
import type { DrillSpec } from './formula-drills';

export const areaBFarmWaterSpecs: DrillSpec[] = [
  {
    formulaId: 'b-farm-irrigation-requirement', area: 'B', unknown: 'FIR',
    formulaText: 'FIR = CWR + LR - ERF',
    unit: 'mm', round: 0,
    vars: [
      { symbol: 'CWR', ascii: 'cwr', label: 'crop water requirement', unit: 'mm', min: 300, max: 900, decimals: 0 },
      { symbol: 'LR', ascii: 'lr', label: 'leaching requirement', unit: 'mm', min: 10, max: 150, decimals: 0 },
      { symbol: 'ERF', ascii: 'erf', label: 'effective rainfall', unit: 'mm', min: 20, max: 250, decimals: 0 },
    ],
    conversions: [
      { ascii: 'cwr', unit: 'cm', factor: 0.1, fromUnit: 'mm' },
      { ascii: 'erf', unit: 'in', factor: 0.0393701, fromUnit: 'mm' },
    ],
    // CWR is floored at 300 and ERF capped at 250, so CWR - ERF is 50..880 and
    // the requirement never goes negative. Answer is 60..1030 mm.
    compute: v => v.cwr + v.lr - v.erf,
    context: 'a rainfed maize crop in Nueva Ecija that the drought-tolerant hybrid in the demo plot had been withholding water from',
    verb: 'has a farm irrigation requirement of',
    unknownPhrase: 'the farm irrigation requirement',
    keyConcept: 'The farm irrigation requirement is what the crop still needs after the rain that actually fell, plus whatever extra must pass through the root zone to flush salts. Effective rainfall is subtracted because the schedule is built on rain the soil can use, not rain that fell; using gross rainfall overstates the requirement. Leaching requirement is added, and it is zero on good water, which is why a leaching term of a few millimetres is not a rounding error but the whole difference between a salt-tolerant and a salt-sensitive crop on the same field.',
    mistakes: [
      'Adding effective rainfall instead of subtracting it',
      'Using gross rainfall in place of effective rainfall, which understates the requirement',
      'Forgetting the leaching requirement on saline water, which starves the crop of the flushing it depends on',
    ],
    // ERF is floored at 20 and LR at 10 so neither "forgot the rainfall" nor
    // "forgot the leaching" can coincide with the answer: adding ERF is
    // 1.12..5.33x, dropping both is 0.67..5x, and 0.85 and 1.15 are the pair.
    // "Forgot the leaching" is deliberately NOT offered - LR is small against
    // CWR across most of the range, so that option lands within 1% of the
    // answer at the top end and would be a coin toss.
    distractors: [
      v => v.cwr + v.erf,
      v => v.cwr,
      v => (v.cwr + v.lr - v.erf) * 0.85,
      v => (v.cwr + v.lr - v.erf) * 1.15,
    ],
  },
  {
    formulaId: 'b-farm-water-requirement', area: 'B', unknown: 'FWR',
    formulaText: 'FWR = FIR + Losses',
    unit: 'mm', round: 0,
    vars: [
      { symbol: 'FIR', ascii: 'fir', label: 'farm irrigation requirement', unit: 'mm', min: 150, max: 600, decimals: 0 },
      { symbol: 'Losses', ascii: 'ls', label: 'losses between the source and the field', unit: 'mm', min: 80, max: 250, decimals: 0 },
    ],
    conversions: [
      { ascii: 'fir', unit: 'cm', factor: 0.1, fromUnit: 'mm' },
      { ascii: 'ls', unit: 'in', factor: 0.0393701, fromUnit: 'mm' },
    ],
    // Losses is floored at 80 against a maximum FIR of 600, so the bare FIR is
    // 0.375..0.88 of the answer and never rounds onto it. Answer is 230..850 mm.
    compute: v => v.fir + v.ls,
    context: 'a pumped service area where the engineer had metered the loss between the pump outlet and the head of the field',
    verb: 'has a farm water requirement of',
    unknownPhrase: 'the farm water requirement',
    keyConcept: 'The farm water requirement is the irrigation requirement plus everything lost between the source and the root zone, so it is always the larger of the two. The gap between them is the price of getting the water there: seepage along the pipe, leakage at the joints, evaporation off the open channel, and the residue left in the canals. A district that reports only the crop requirement is understating its river duty by exactly this difference, which is the most common way a water right is sized too small.',
    mistakes: ['Reporting the irrigation requirement as the farm requirement', 'Counting the conveyance loss twice by also adding it to the diversion requirement', 'Treating losses as a percentage of the requirement rather than a depth of water'],
    // Bare FIR is 0.375..0.88x, the losses alone are 0.12..0.63x, and 0.85 and
    // 1.15 are the pair. Losses are floored at 80 precisely so the two
    // omissions stay separable.
    distractors: [
      v => v.fir,
      v => v.ls,
      v => (v.fir + v.ls) * 0.85,
      v => (v.fir + v.ls) * 1.15,
    ],
  },
  {
    formulaId: 'b-diversion-water-requirement', area: 'B', unknown: 'DWR',
    formulaText: 'DWR = FWR + CL',
    unit: 'mm', round: 0,
    vars: [
      { symbol: 'FWR', ascii: 'fwr', label: 'farm water requirement', unit: 'mm', min: 200, max: 900, decimals: 0 },
      { symbol: 'CL', ascii: 'cl', label: 'conveyance loss from the headworks', unit: 'mm', min: 100, max: 500, decimals: 0 },
    ],
    conversions: [
      { ascii: 'fwr', unit: 'cm', factor: 0.1, fromUnit: 'mm' },
      { ascii: 'cl', unit: 'in', factor: 0.0393701, fromUnit: 'mm' },
    ],
    // Conveyance loss is floored at 100 against a maximum FWR of 900, so the
    // bare FWR is 0.29..0.9 of the answer. Answer is 300..1400 mm.
    compute: v => v.fwr + v.cl,
    context: 'a gravity irrigation system off a national irrigation system where the canal operator was balancing the headworks against the service area',
    verb: 'must divert a water requirement of',
    unknownPhrase: 'the diversion water requirement',
    keyConcept: 'The diversion requirement is the farm requirement grossed up for conveyance loss, which is everything that leaks or evaporates between the headworks and the field. It is a canal-operator figure, not a farmer figure, and it is the number that gets matched against the available supply. Long unlined earth canals in coarse ground can lose a third of what they carry, which is why the loss term here is larger than the farm term often enough to dominate the answer.',
    mistakes: ['Dividing by conveyance efficiency instead of adding the loss, which is the same number only when the loss is defined as a fraction', 'Applying conveyance loss to the farm requirement twice', 'Using the diversion requirement as the farm requirement and over-ordering water at the turnout'],
    // Bare FWR is 0.29..0.9x, the loss alone is 0.07..0.71x, and 0.85 and 1.15
    // are the pair. With CL this large the two omissions are far apart, so no
    // structural near-miss is needed to separate them.
    distractors: [
      v => v.fwr,
      v => v.cl,
      v => (v.fwr + v.cl) * 0.85,
      v => (v.fwr + v.cl) * 1.15,
    ],
  },
  {
    formulaId: 'b-farm-turnout-requirement', area: 'B', unknown: 'FTR',
    formulaText: 'FTR = FWR + FDL',
    unit: 'mm', round: 0,
    vars: [
      { symbol: 'FWR', ascii: 'fwr', label: 'farm water requirement', unit: 'mm', min: 200, max: 800, decimals: 0 },
      { symbol: 'FDL', ascii: 'fdl', label: 'farm ditch loss', unit: 'mm', min: 60, max: 250, decimals: 0 },
    ],
    conversions: [
      { ascii: 'fwr', unit: 'cm', factor: 0.1, fromUnit: 'mm' },
      { ascii: 'fdl', unit: 'in', factor: 0.0393701, fromUnit: 'mm' },
    ],
    // FDL is floored at 60, not 15, so that the bare FWR is at most 0.93 of the
    // answer. At 15 mm the omission would land within 2% at the top of the
    // range and round onto the correct option.
    compute: v => v.fwr + v.fdl,
    context: 'a turnout on a lateral line delivering to a farm whose own head ditch was unlined and ran a long way to the far corner',
    verb: 'needs a turnout requirement of',
    unknownPhrase: 'the farm turnout requirement',
    keyConcept: 'The turnout requirement is the last figure in the chain: what has to pass the farm gate to satisfy the farm water requirement, grossed up for the farm ditch loss between the gate and the field. It is deliberately larger than the requirement it serves, because water standing in a ditch is water the crop does not get. The chain runs crop requirement, then farm requirement, then turnout requirement, and each step adds the loss incurred past the previous one.',
    mistakes: ['Taking the turnout requirement as the field requirement and under-ordering at the gate', 'Ignoring ditch loss on an unlined lateral', 'Adding the farm ditch loss to the conveyance loss and double counting the same seepage'],
    // Bare FWR is 0.77..0.93x, the ditch loss alone is 0.06..0.54x, and 0.85
    // and 1.15 are the pair. The FWR floor of 200 against a 60 mm FDL floor
    // keeps the two omissions at least 7 percentage points apart.
    distractors: [
      v => v.fwr,
      v => v.fdl,
      v => (v.fwr + v.fdl) * 0.85,
      v => (v.fwr + v.fdl) * 1.15,
    ],
  },
  {
    formulaId: 'b-depth-readily-available-moisture', area: 'B', unknown: 'd_{RAM}',
    formulaText: 'd_{RAM} = (FC - PWP) A_s RZD MAD',
    unit: 'm', round: 4,
    vars: [
      { symbol: 'FC', ascii: 'fc', label: 'field capacity as a fraction', unit: '', min: 0.28, max: 0.35, decimals: 2 },
      { symbol: 'PWP', ascii: 'pwp', label: 'permanent wilting point as a fraction', unit: '', min: 0.1, max: 0.16, decimals: 2 },
      { symbol: 'A_s', ascii: 'as', label: 'apparent specific gravity', unit: '', min: 1.3, max: 1.6, decimals: 2 },
      { symbol: 'RZD', ascii: 'rzd', label: 'root zone depth', unit: 'm', min: 0.4, max: 1.2, decimals: 2 },
      { symbol: 'MAD', ascii: 'mad', label: 'management allowable depletion as a fraction', unit: '', min: 0.3, max: 0.5, decimals: 2 },
    ],
    conversions: [
      { ascii: 'rzd', unit: 'ft', factor: 3.28084, fromUnit: 'm' },
      { ascii: 'rzd', unit: 'in', factor: 39.3701, fromUnit: 'm' },
    ],
    // The same product as b-net-application-depth, deliberately: this one is
    // about how long the crop can wait, not how much to apply in one set. RZD
    // is 0.4..1.2 m here against 0.3..0.9 there, and MAD is 0.3..0.5 against
    // 0.4..0.6, so the two questions never sample the same soil twice.
    compute: v => (v.fc - v.pwp) * v.as * v.rzd * v.mad,
    context: 'a coconut and corn intercrop on a slope in Quezon where the irrigation interval was being widened to stretch a limited allocation',
    verb: 'has a readily available moisture depth of',
    unknownPhrase: 'the depth of readily available moisture',
    keyConcept: 'Readily available moisture is the water a crop can draw on before it begins to suffer, and it is what an irrigation interval is built from: divide this depth by the crop water use per day and you have the number of days the field can go between sets. The product is the available water between field capacity and wilting point, scaled by root zone depth and cut by the depletion fraction the manager is willing to risk. The printed equation is identical to the net application depth, because they are the same quantity asked about differently.',
    mistakes: [
      'Ignoring the management allowable depletion fraction and scheduling to the full available water, which invites stress',
      'Using a root zone depth from a seedling stand rather than the full crop',
      'Entering field capacity and wilting point as percentages, which multiplies the depth a hundredfold',
    ],
    // Same structural errors as the net depth spec but weighted differently:
    // dropping the depletion fraction is 2..3.3x here against 1.67..2.5x there,
    // and the specific-gravity omission is 1.3..1.6x in both.
    distractors: [
      v => (v.fc - v.pwp) * v.as * v.rzd,
      v => (v.fc + v.pwp) * v.as * v.rzd * v.mad,
      v => (v.fc - v.pwp) * v.rzd * v.mad,
      v => (v.fc - v.pwp) * v.as * v.rzd * v.mad * 1.15,
    ],
  },
  {
    formulaId: 'b-application-rate', area: 'B', unknown: 'AR',
    formulaText: 'AR = Q / A',
    unit: 'lps/ha', round: 2,
    vars: [
      { symbol: 'Q', ascii: 'Q', label: 'flow delivered to the field', unit: 'lps', min: 2, max: 30, decimals: 1 },
      { symbol: 'A', ascii: 'A', label: 'area being irrigated', unit: 'ha', min: 0.3, max: 1.5, decimals: 2 },
    ],
    conversions: [
      { ascii: 'Q', unit: 'm³/s', factor: 0.001, fromUnit: 'lps' },
      { ascii: 'A', unit: 'm²', factor: 10000, fromUnit: 'ha' },
    ],
    // The printed ratio is lps over ha, so the answer is lps/ha and no constant
    // is folded in. See the header note: this is the same situation as the
    // Rational Method entry, where the constant is carried by the units.
    compute: v => v.Q / v.A,
    context: 'a drip lateral laid over a vegetable bed, where the designer was checking the daily application against the soil intake rate',
    verb: 'gives an application rate of',
    unknownPhrase: 'the application rate over the area',
    keyConcept: 'Application rate is flow divided by area, and it is what has to be compared against the soil intake rate: water applied faster than the soil can accept runs off instead of infiltrating. The handbook prints the ratio with no constant because the units carry it, so the result is in litres per second per hectare. To read it as a depth rate, 1 lps/ha is 0.36 mm/hr, since 1 lps over a hectare is 3.6 cubic metres an hour spread over 10,000 square metres. A rate well under the intake rate is safe; one well over it is how a field ends up with a crust.',
    mistakes: [
      'Reading the ratio as mm/hr without the 0.36 conversion, which overstates the rate nearly threefold',
      'Dividing area by flow instead of flow by area',
      'Ignoring the intake rate and setting a rate that the soil cannot accept, which ponds and then runs off',
    ],
    // Q * A against an answer of Q/A is A^2 = 0.09..2.25x; the other three are
    // 0.5, 0.85 and 1.15x. A^2 crosses 0.85 and 1.15 for A near 0.92 and 1.07,
    // but the generator only needs three distinct of four, so one crossing is
    // harmless.
    distractors: [
      v => v.Q * v.A,
      v => (v.Q / v.A) * 0.85,
      v => (v.Q / v.A) * 1.15,
      v => (v.Q / v.A) * 0.5,
    ],
  },
  {
    formulaId: 'b-water-requirement', area: 'B', unknown: 'WR',
    formulaText: 'WR = ET + P',
    unit: 'mm', round: 1,
    vars: [
      { symbol: 'ET', ascii: 'et', label: 'evapotranspiration', unit: 'mm/day', min: 2, max: 10, decimals: 1 },
      { symbol: 'P', ascii: 'p', label: 'percolation', unit: 'mm', min: 3, max: 30, decimals: 1 },
    ],
    conversions: [
      { ascii: 'et', unit: 'cm/day', factor: 0.1, fromUnit: 'mm/day' },
      { ascii: 'p', unit: 'in', factor: 0.0393701, fromUnit: 'mm' },
    ],
    compute: v => v.et + v.p,
    context: 'a paddy whose water balance was being closed for the season, with the drain measured below the root zone',
    verb: 'has a water requirement of',
    unknownPhrase: 'the water requirement of the field',
    keyConcept: 'The water requirement is the sum of what the crop transpires and evaporates and what drains past the root zone. Both terms are additions because both are demands on the supply: evapotranspiration is the water that leaves the surface and the leaves, and percolation is the water that leaves through the bottom. Neither is recoverable by the farmer, which is why a sandy soil with a deep root zone can need more water per season than a clay with a shallow one even at lower daily use.',
    mistakes: ['Subtracting percolation, as though drainage past the root zone were a return flow', 'Reporting evapotranspiration alone as the requirement', 'Adding rainfall into the requirement instead of netting it against the demand'],
    // Either term alone is 0.08..0.91 of the answer across the two ranges, and
    // 0.85 and 1.15 are the pair.
    distractors: [
      v => v.et,
      v => v.p,
      v => (v.et + v.p) * 0.85,
      v => (v.et + v.p) * 1.15,
    ],
  },
  {
    formulaId: 'b-evapotranspiration', area: 'B', unknown: 'ET',
    formulaText: 'ET = E + T',
    unit: 'mm/day', round: 2,
    vars: [
      { symbol: 'E', ascii: 'e', label: 'evaporation from the soil and water surface', unit: 'mm/day', min: 2, max: 8, decimals: 1 },
      { symbol: 'T', ascii: 't', label: 'transpiration through the crop', unit: 'mm/day', min: 2, max: 12, decimals: 1 },
    ],
    conversions: [
      { ascii: 'e', unit: 'cm/day', factor: 0.1, fromUnit: 'mm/day' },
      { ascii: 't', unit: 'in/day', factor: 0.0393701, fromUnit: 'mm/day' },
    ],
    // Answer is 4..20 mm/day. T is floored at 2 and E at 2, so neither single
    // term can fall below 0.1 of the answer.
    compute: v => v.e + v.t,
    context: 'a lysimeter pair in an irrigated rice plot where the two components had been weighed separately through a ripening cycle',
    verb: 'has an evapotranspiration of',
    unknownPhrase: 'the daily evapotranspiration',
    keyConcept: 'Evapotranspiration is the sum of evaporation from the soil and water surface and transpiration through the crop, and it is the single largest term in any water balance. The split moves through the season: early on, when the canopy is sparse and the surface is wet, evaporation dominates, and at peak growth with full cover transpiration is the larger share. Scheduling an irrigation from evapotranspiration alone is only valid once the canopy has closed, which is exactly when the figure starts to be reliable.',
    mistakes: [
      'Taking evapotranspiration as evaporation alone, which understates demand by the whole transpiration term',
      'Subtracting transpiration from evaporation instead of adding it',
      'Using a daily evapotranspiration figure for a night-time period and over-ordering by half a day',
    ],
    // Either term alone is 0.1..0.86 of the answer, and 0.85 and 1.15 are the
    // pair. The subtraction error is deliberately not offered: it collapses
    // onto zero whenever the two terms are close, which is the case that
    // matters for a closed canopy.
    distractors: [
      v => v.e,
      v => v.t,
      v => (v.e + v.t) * 0.85,
      v => (v.e + v.t) * 1.15,
    ],
  },
  {
    formulaId: 'b-water-applied', area: 'B', unknown: 'Q',
    formulaText: 'Q = 2.78 (A D) / T',
    unit: 'lps', round: 2,
    vars: [
      { symbol: 'A', ascii: 'A', label: 'area irrigated', unit: 'ha', min: 0.3, max: 1.2, decimals: 2 },
      { symbol: 'D', ascii: 'D', label: 'depth of water applied, in millimetres', unit: 'mm', min: 20, max: 90, decimals: 0 },
      { symbol: 'T', ascii: 'T', label: 'time required to irrigate', unit: 'hr', min: 2, max: 10, decimals: 1 },
    ],
    conversions: [
      { ascii: 'A', unit: 'm²', factor: 10000, fromUnit: 'ha' },
      { ascii: 'D', unit: 'cm', factor: 0.1, fromUnit: 'mm' },
      { ascii: 'T', unit: 'min', factor: 60, fromUnit: 'hr' },
    ],
    // D is declared in MILLIMETRES, so the printed 2.78 is the correct factor
    // and is used unchanged. See the header note and the SOURCE NOTE on this
    // formula: 2.78 belongs to mm, and centimetres would need 27.78.
    compute: v => (2.78 * (v.A * v.D)) / v.T,
    context: 'a farmer scheduling a single irrigation set on a corn field, working out what the pump had to deliver to finish the set in time',
    verb: 'needs a water application of',
    unknownPhrase: 'the stream size needed',
    keyConcept: 'The stream size that finishes a set in a given time is a constant times area times depth over time, and the constant is fixed by the units. At 2.78 the depth is in millimetres: one hectare under one millimetre is ten cubic metres, which is 10000 litres an hour, or 2.78 litres a second. If you work in centimetres the same stream size is 27.78, because a centimetre is ten millimetres. The handbook prints 2.78 alongside a depth in centimetres, which understates the required stream tenfold, and the drill here uses millimetres so the printed constant is right as it stands.',
    mistakes: [
      'Using 2.78 with a depth in centimetres, which understates the required stream by a factor of ten',
      'Dividing by area instead of multiplying, treating the formula like an application rate',
      'Reading the time in minutes while the constant assumes hours, a flat 60x',
    ],
    // The factor-of-ten error is exactly 0.1x and IS offered, because it is the
    // mistake the handbook itself invites and it stays inside the plausibility
    // band. Dropping the 2.78 constant is a flat 0.36x. 0.85 and 1.15 are the
    // pair, so the four ratios are 0.1, 0.36, 0.85 and 1.15 - all well clear of
    // each other and of the 1% floor.
    //
    // An earlier version used a depth/time swap instead of the dropped
    // constant. That option scales as T^2/D^2, which over T of 2..10 h and D of
    // 20..90 mm runs from 0.0005 to 0.25 - it fell below the 1% plausibility
    // floor on 612 of 200 renders and the gate rejected it. Any error here has
    // to have a ratio pinned by its own arithmetic, not by the ratio of two
    // independently sampled variables.
    distractors: [
      v => (2.78 * (v.A * v.D)) / v.T * 0.1,
      v => (v.A * v.D) / v.T,
      v => (2.78 * (v.A * v.D)) / v.T * 0.85,
      v => (2.78 * (v.A * v.D)) / v.T * 1.15,
    ],
  },
];
