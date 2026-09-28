// Area C drill specs, grain drying and the engine foundation. Ten specs, taking
// coverage from 216 to 226 of 240: the five-formula drying chain (capacity,
// grain volume, floor area, airflow, apparent air velocity) and the five-formula
// foundation chain (weight, volume, depth, soil pressure, factor of safety).
//
// The batch is two cascades, and the cascades are why these are hard to write
// honestly. Each formula in a cascade feeds the next, so the boxes have to be
// coherent not just internally but across the set: the tonnage a student uses
// for the airflow requirement has to look like the tonnage they used for the
// drying capacity, and the pressure a factor-of-safety box hands out has to be
// a pressure the soil-pressure box could actually produce. The five drying
// boxes therefore share the same paddy weight story (4000 to 12000 kg to be
// dried), and the three foundation boxes that take a weight and an area use the
// same engine-and-foundation numbers a foundation designer would actually carry.
//
// Two transcription defects in the source get SOURCE NOTEs and drive design:
//
// C_D x SAF in c-airflow-requirement is dimensionally dead on the page. C_D is
// the drying rate in tonnes per hour, SAF is in m3/min per tonne, and a rate
// times a per-tonne flow has no reading in m3/min. The formula only closes when
// the capacity is counted as the BATCH tonnage, not the hourly rate - and that
// is the only reading under which the next formula, V_app = AF_R/A_f, produces
// a velocity. The spec enforces that reading by having the student convert the
// paddy weight in kg to tonnes before multiplying, which is why the airflow box
// takes W_i raw (kg) rather than a pre-broken capacity.
//
// W_E x W_F in c-soil-pressure-foundation is likewise dead on the page: the
// product of two weights divided by an area is not a pressure. The physical
// statement is that the total load on the soil is the engine PLUS the
// foundation over the footprint, and the factor-of-safety formula downstream
// only makes sense against that sum. The spec drives the sum.
//
// Both are recorded as printed in formulas.ts and corrected in the box, so the
// drills and the reference stay honest with each other - exactly the split
// the previous batches used: student sees the printed formula and the notes,
// drill hands out the physical reading.
//
// The distractor discipline is carried over from batch six. Where a side of a
// ratio is meaningful the slip is made FROM THE SAME BASE AS THE ANSWER (a
// per-day or per-minute rate, an engine-only pressure), never from the other
// side, so no inverted option can be squared into a scalar. Straight scale
// slips use 0.85 and 1.15, and two floor-area boxes keep structural options
// (V x D, 2V/(W x L)) after the probe confirmed they stay clear of the scalars.
import type { DrillSpec } from './formula-drills';

export const areaCDryingFoundation7Specs: DrillSpec[] = [
  // ------------------------------------------------------- drying chain
  {
    formulaId: 'c-drying-capacity', area: 'C', unknown: 'C_D',
    formulaText: 'C_D = \\frac{W_i}{T_D}',
    unit: 'kg/h', round: 1,
    vars: [
      { symbol: 'W_i', ascii: 'Wi', label: 'weight of paddy to be dried', unit: 'kg', min: 4000, max: 12000, decimals: 1 },
      { symbol: 'T_D', ascii: 'Td', label: 'drying time of the batch', unit: 'h', min: 6, max: 48, decimals: 1 },
    ],
    conversions: [
      { ascii: 'Td', unit: 'min', factor: 60, fromUnit: 'h' },
    ],
    // The batch rate, and the entry point to the whole drying chain. 4000 to
    // 12000 kg of paddy, dried over 6 to 48 hours, gives 0.08 to 2.0 tonnes per
    // hour - the range a floor dryer actually runs. The day and per-minute
    // options are the two slips a work-sheet glance actually produces.
    compute: v => v.Wi / v.Td,
    context: 'a grain drying facility drying one batch of paddy',
    verb: 'records',
    unknownPhrase: 'the drying capacity of the facility in kilograms of grain per hour',
    keyConcept: 'Drying capacity is the batch in, batch out throughput: the dried weight is not the figure being moved here, the raw paddy weight is, and the dryer is expected to finish the whole original batch in the working time. So the capacity is the mass rate at which the facility has to process everything put in front of it, and it is the number a dryer is sized by - not its volume, not its airflow, but this one rate. The subtlety is that the capacity uses the full W_i rather than the moisture driven off, which is why a capacity of 500 kg/h feels enormous next to the few percent of moisture that actually leaves: the machine is rated to handle the whole wet stream, and the water is only the skin of it. Halving the drying time doubles the required capacity for the same batch, and that is the trade a facility owner actually makes: a faster dryer is a bigger dryer, in power and in price, and the job of this number is to make the doubling explicit before anyone commits to the schedule.',
    mistakes: [
      'Dividing the paddy weight by the time in minutes instead of hours, the twentieth of the true capacity',
      'Reducing the batch by a flat fraction before dividing, treating the moisture content as something subtracted from the mass the dryer sees',
      'Dividing by the time spent on moisture removal alone, which is a design variable no facility ledger states outright',
    ],
    distractors: [
      v => v.Wi / (v.Td * 24),
      v => v.Wi / (v.Td * 60),
      v => 0.85 * (v.Wi / v.Td),
      v => 1.15 * (v.Wi / v.Td),
    ],
  },
  {
    formulaId: 'c-volume-grain-to-dry', area: 'C', unknown: 'V_g',
    formulaText: 'V_g = \\frac{W_i}{\\rho_{grain}}',
    unit: 'm3', round: 2,
    vars: [
      { symbol: 'W_i', ascii: 'Wi', label: 'weight of paddy to be dried', unit: 'kg', min: 4000, max: 12000, decimals: 1 },
      { symbol: '\\rho_{grain}', ascii: 'Rho', label: 'bulk density of the paddy', unit: 'kg/m3', min: 540, max: 580, decimals: 0 },
    ],
    // Bulk density is the only var that is not a round number, and it is the
    // point of the box: rough paddy at 540 to 580 kg/m3 is a dozen kilos shy of
    // a fancier 600, and the W_i/1000 slip is the water-density shortcut that
    // quietly turns a cubic metre of dried product into the wrong size.
    compute: v => v.Wi / v.Rho,
    context: 'a drying facility filling the first bed with a measured lot of paddy',
    verb: 'records',
    unknownPhrase: 'the volume of the paddy lot in cubic metres',
    keyConcept: 'The volume of grain is the step where the weight story of the drying chain becomes a space story, and the entire design - floor area, bed depth, airflow - is built on it. Bulk density is the whole kernel plus the air between kernels, which is why it sits near 550 kg/m3 for paddy while the grain itself is denser: a cubic metre of paddy is a cubic metre of grain plus voids, and the two cannot be told apart by weighing a single kernel. Because the density is given in kilograms per cubic metre, a tonne of paddy is very close to two cubic metres, and that near-two is a useful sanity check on any answer in this chain: if the volume comes out at half a cubic metre for a tonne, the arithmetic has used the density of water instead of the density of grain. The density also drifts with the lot - damp grain bulks larger than dry, which lowers the density and raises the volume for the same weight - which is exactly why the box feeds a spread of densities rather than a single constant.',
    mistakes: [
      'Dividing by 1000, the density of water, which understates the grain volume by roughly half',
      'Multiplying weight by density to get a cubed volume, which ties the units to a nonsense product',
      'Dividing the density by the weight, inverting the conversion and getting a number with the wrong shape entirely',
    ],
    distractors: [
      v => v.Wi / 1000,
      v => 0.85 * (v.Wi / v.Rho),
      v => 1.15 * (v.Wi / v.Rho),
    ],
  },
  {
    formulaId: 'c-drying-floor-area', area: 'C', unknown: 'A_f',
    formulaText: 'A_f = \\frac{V_g}{D_g}',
    unit: 'm2', round: 1,
    vars: [
      { symbol: 'V_g', ascii: 'Vg', label: 'volume of the paddy lot', unit: 'm3', min: 8, max: 24, decimals: 1 },
      { symbol: 'D_g', ascii: 'Dg', label: 'depth of the grain bed', unit: 'm', min: 0.15, max: 0.45, decimals: 2 },
    ],
    // The quietest formula in the chain and the one with the structural
    // distractor. V x D is the product of the two given numbers, dimensionally
    // m4, and it is what a tired student does to "un-divide". The probe kept it
    // because 0.15 to 0.45 squared onto a 10 m3 bed lands nowhere near a scalar.
    compute: v => v.Vg / v.Dg,
    context: 'a facility spreading a measured volume of paddy onto a flat drying floor',
    verb: 'records',
    unknownPhrase: 'the floor area needed to hold the bed in square metres',
    keyConcept: 'The floor area is the plan the drying design is pinned to, because a bed has to be spread to a chosen depth before it can be stirred or blown. The relationship is the plain one - area times depth is volume - and the formula is only hard because the two given numbers are small and the answer is not: ten cubic metres at a third of a metre is thirty square metres, and the temptation is to multiply the ten by the depth instead of dividing. The depth is the design decision, set by how the air reaches the grain: a shallow bed dries fast and needs a big floor, a deep bed saves floor and needs the fan to push harder, so the same lot can be a small dense bed or a big flat one and either is a legitimate dryer. What is not open to negotiation is that the product of the two numbers has to be the volume, which is the identity a cross-check on any floor answer is testing. Drying beds are built to standard depths exactly so that the floor becomes a lookup from volume, and this formula is that lookup.',
    mistakes: [
      'Multiplying volume by depth, which has no dimensional reading and inflates the answer into the floor of a warehouse',
      'Converting the depth to centimetres and forgetting to convert the area back, working in cm3 against a m3 volume',
      'Doubling the area to allow for the walkways between beds, adding a margin the formula has not asked for and the story has not provided',
    ],
    distractors: [
      v => v.Vg * v.Dg,
      v => 0.5 * (v.Vg / v.Dg),
      v => 2 * (v.Vg / v.Dg),
    ],
  },
  {
    formulaId: 'c-airflow-requirement', area: 'C', unknown: 'AF_R',
    formulaText: 'AF_R = C_D \\times SAF',
    unit: 'm3/min', round: 0,
    vars: [
      { symbol: 'W_i', ascii: 'Wi', label: 'weight of paddy to be dried', unit: 'kg', min: 4000, max: 12000, decimals: 1 },
      { symbol: 'SAF', ascii: 'Saf', label: 'specific airflow rate of the dryer', unit: 'm3/(min-ton)', min: 10, max: 30, decimals: 1 },
    ],
    // The first box does the SOURCE NOTE correction in the compute: the paddy
    // weight in kg becomes the batch in tonnes, ((Wi/1000) x SAF), which is the
    // reading under which the unit, m3/min, closes. The per-hour slip is the
    // sixty-times option. Wi stays kg so that the kg-to-tonne step is on the
    // student, matching the SAME Wi story as the drying-capacity box.
    compute: v => (v.Wi / 1000) * v.Saf,
    context: 'a drying facility sizing the fan for the same batch of paddy',
    verb: 'reports',
    unknownPhrase: 'the airflow requirement of the dryer in cubic metres per minute',
    keyConcept: 'The airflow requirement is where drying stops being about the grain and becomes about the fan. Grain dries because air carries moisture away, and the design rule is that every tonne of the batch needs a per-tonne flow: multiply the batch tonnage by the specific airflow rate and you get cubic metres per minute. The trick is that the "capacity" in the source formula is not the hourly rate from the first box of this chain - it is the BATCH, the whole weight of grain on the floor, because that is the amount of grain that has to sit in moving air at once. A batch of six tonnes at twenty cubic metres per minute per tonne needs 120 m3/min, and that number, not the hourly rate, is what a fan is bought against: the fan has to drive the whole bed, and the bed is the whole batch. The formula only closes dimensionally when the capacity is read as tonnes, which is the point of the kg-to-tonne step: an hourly rate times a per-tonne flow leaves the units hanging.',
    mistakes: [
      'Multiplying the hourly drying rate by the specific airflow, which leaves the units unclosed and is usually sixty times the working answer',
      'Using the paddy weight in kilograms without converting to tonnes, making the airflow ten thousand times too large',
      'Adding the specific airflow to the tonnage instead of multiplying, confusing a ratio with a quantity',
    ],
    distractors: [
      v => (v.Wi / 1000) * v.Saf * 60,
      v => 0.85 * ((v.Wi / 1000) * v.Saf),
      v => 1.15 * ((v.Wi / 1000) * v.Saf),
    ],
  },
  {
    formulaId: 'c-apparent-air-velocity', area: 'C', unknown: 'V_{app}',
    formulaText: 'V_{app} = \\frac{AF_R}{A_f}',
    unit: 'm/min', round: 2,
    vars: [
      { symbol: 'AF_R', ascii: 'AFR', label: 'airflow requirement of the dryer', unit: 'm3/min', min: 60, max: 360, decimals: 1 },
      { symbol: 'A_f', ascii: 'Af', label: 'bed area of the grain', unit: 'm2', min: 30, max: 160, decimals: 1 },
    ],
    // AFR in m3/min over a bed in m2 yields m/min, the superficial velocity in
    // the bed. The box keeps the units explicit so the chain of m3/min -> m/min
    // is visible: the two boxes above made the m3/min, and this one spends it
    // across the bed.
    compute: v => v.AFR / v.Af,
    context: 'a drying facility checking the air speed through the same grain bed',
    verb: 'records',
    unknownPhrase: 'the apparent air velocity through the grain bed in metres per minute',
    keyConcept: 'The apparent air velocity is the fan answer rescaled to the bed: the whole airflow compressed onto the floor area through which it must rise. It is called apparent because the air does not actually travel that fast through the grain - it negotiates the gaps between kernels, so the real air speed inside the bed is higher than this number - but the apparent velocity is the one the design tables are written in, because it depends only on flow and area and not on the packing of the particular lot. The units tell the story: cubic metres per minute spread over square metres leaves metres per minute, a velocity, and the formula is exactly the m3/min from the previous box divided by the m2 of the bed from the box before that. A designer who wants a stronger drying action can either push more air or shrink the bed, and this one number says both at once. Keeping it between a few tenths and a dozen metres per minute is how a fan is matched to a bed without over-blowing the grain out of its corners.',
    mistakes: [
      'Dividing area by flow instead of flow by area, which collapses to a per-minute length under one second',
      'Multiplying the airflow by sixty to force minutes to seconds, confusing a conversion with the formula',
      'Using the hourly airflow rather than the per-minute figure, understating the velocity by sixty',
    ],
    distractors: [
      v => v.AFR / v.Af / 60,
      v => 0.85 * (v.AFR / v.Af),
      v => 1.15 * (v.AFR / v.Af),
    ],
  },
  // ------------------------------------------------------- foundation chain
  {
    formulaId: 'c-weight-of-foundation', area: 'C', unknown: 'W_F',
    formulaText: 'W_F = 0.11\\,W_E\\,N^{0.5}',
    unit: 'kg', round: 0,
    vars: [
      { symbol: 'W_E', ascii: 'We', label: 'weight of the engine', unit: 'kg', min: 500, max: 3000, decimals: 1 },
      { symbol: 'N', ascii: 'N', label: 'speed of the engine', unit: 'rpm', min: 800, max: 1800, decimals: 0 },
    ],
    // A rule of thumb, and the probe did the striking finding: against the
    // answer 0.11.We.sqrt(N), the option 0.11.We.N sits at a ratio of sqrt(N),
    // which is 28 to 42 - not 42, because it is sqrt(1800), not sqrt(N) at the
    // tied sample. The sqrt slip is cosmetically "forgetting the half power"
    // and the ratio lands far beyond the largest scalar; the probe keeps it
    // because it is the mistake the formula is actually inviting.
    compute: v => 0.11 * v.We * Math.sqrt(v.N),
    context: 'a workshop pouring a concrete base for a stationary engine',
    verb: 'records',
    unknownPhrase: 'the weight of the foundation in kilograms',
    keyConcept: 'The weight of an engine foundation is a rule of thumb, and it is the whole of the foundation art in one line: a fraction of the engine weight times the square root of the engine speed. Why the square root? Because the violence of an engine grows more slowly than its speed - a machine turning twice as fast does not shake a foundation twice as hard - so the weight needs to keep up with the square root rather than the full speed. That is the detail the formula is guarding: get the half power wrong and the 0.11 factor has nothing to correct, because the foundation comes out forty times heavy. The engine weight is the anchor - 500 to 3000 kg of stationary engine - and the foundation ends up a small multiple of it, which is the sanity check on any answer: a concrete base for a one-ton engine of fifty tonnes is not a foundation, it is a bunker. Foundations exist to put the shaking mass on something heavy and wide so that what the soil feels is a slow, small push, and this weight is the first term of that whole story.',
    mistakes: [
      'Omitting the square root on the speed, which multiplies the result by the speed itself and lands thirty to forty times heavy',
      'Omitting the 0.11 factor, treating the engine weight as the foundation weight and skipping the difference between a machine and its bed',
      'Taking the full square of the speed under the root, i.e. N instead of N^0.5, which is the same slip with different arithmetic',
    ],
    distractors: [
      v => v.We * Math.sqrt(v.N),
      v => 0.11 * v.We * v.N,
      v => 0.85 * (0.11 * v.We * Math.sqrt(v.N)),
      v => 1.15 * (0.11 * v.We * Math.sqrt(v.N)),
    ],
  },
  {
    formulaId: 'c-volume-of-foundation', area: 'C', unknown: 'V_F',
    formulaText: 'V_F = \\frac{W_F}{\\rho_C}',
    unit: 'm3', round: 2,
    vars: [
      { symbol: 'W_F', ascii: 'Wf', label: 'weight of the foundation', unit: 'kg', min: 1500, max: 14000, decimals: 1 },
      { symbol: '\\rho_C', ascii: 'Rho', label: 'density of the concrete', unit: 'kg/m3', min: 2300, max: 2500, decimals: 0 },
    ],
    // Same shape as the grain-volume box earlier in the batch, deliberately:
    // weight over density is the volume of a lump, and the two boxes differ
    // only in what is weighed. The same W_i/1000-class slip is the distractor,
    // here a concrete density misread as water.
    compute: v => v.Wf / v.Rho,
    context: 'a workshop converting the designed foundation weight into a pour volume',
    verb: 'records',
    unknownPhrase: 'the volume of the foundation in cubic metres',
    keyConcept: 'The volume of the foundation is what the concrete supplier is actually paid for, and it is the weight from the previous box divided by the density of the poured material. Concrete is not a mysterious substance here: it runs 2300 to 2500 kg/m3, and the entire conversion is one division. The check that matters is the one a concrete crew does with a glance: a fourteen-tonne foundation is about six cubic metres, and if a volume comes out thirty times that, the density has been taken for the density of something lighter than rock. The density of concrete is not the density of its aggregate alone, and it is not the density of water by a wide margin, which is the exact confusion this box is built to catch: divide by a thousand and a tonne of concrete becomes a cubic metre, which nobody would pour onto a real job. Volume is the term that flows through the rest of the foundation design - it sets the depth by footprint next, and through that this number becomes a hole in the ground.',
    mistakes: [
      'Dividing by 1000, water density, which turns a fourteen-tonne foundation into fourteen cubic metres of water-scale volume',
      'Inverting the ratio, dividing the density by the weight and getting a number with no physical reading',
      'Multiplying weight by density, cubing the units and undershooting the volume to a fraction of a cubic metre',
    ],
    distractors: [
      v => v.Wf / 1000,
      v => 0.85 * (v.Wf / v.Rho),
      v => 1.15 * (v.Wf / v.Rho),
    ],
  },
  {
    formulaId: 'c-depth-of-foundation', area: 'C', unknown: 'D_F',
    formulaText: 'D_F = \\frac{V}{W \\times L}',
    unit: 'm', round: 2,
    vars: [
      { symbol: 'V', ascii: 'V', label: 'volume of the foundation', unit: 'm3', min: 1, max: 6, decimals: 2 },
      { symbol: 'W', ascii: 'W', label: 'width of the engine pit', unit: 'm', min: 1, max: 2.5, decimals: 1 },
      { symbol: 'L', ascii: 'L', label: 'length of the engine pit', unit: 'm', min: 2, max: 4, decimals: 1 },
    ],
    // The source prints D = V/(W.E x L.E x Allowance) = V/(W x L); the spec
    // drives the reduced form, with the pit footprint doing the dividing. The
    // doubled option, 2V/(WL), survives the probe because the volume over the
    // footprint holds no scalars for these ranges.
    compute: v => v.V / (v.W * v.L),
    context: 'a workshop excavating a pit for the engine and foundation',
    verb: 'records',
    unknownPhrase: 'the depth of the foundation in metres',
    keyConcept: 'The depth of the foundation is what is left when the volume is spread over the footprint: the pit has to hold the whole pour, and a pit is a volume with a floor plan. The footprint is the engine area plus the working allowance - the pit edges that hold the steel in, the space a spanner needs - and the formula folds that allowance in by taking the effective width and length rather than the engine bare. That is why the boxes hand out width and length separately: multiplying them is itself a computation, and the depth only appears when the volume is divided by that product. A deep foundation is not automatic at high engine weight, because the depth depends on how the volume is spread; the same metre-depth story holds a small dense footprint or a large shallow one, and the number the excavator needs is the one that makes the required volume fit the plan they already dug. Getting it wrong cuts the pour short and the whole design above it - weight, pressure, factor of safety - silently lands on the wrong footprint.',
    mistakes: [
      'Doubling the volume before dividing, as if the pit degenerated into two layers of foundation',
      'Inverting to volume times area, which is cubic-metres-squared nonsense',
      'Skewing the division to one dimension only, computing V over the width alone and ignoring the length',
    ],
    distractors: [
      v => (2 * v.V) / (v.W * v.L),
      v => 0.85 * (v.V / (v.W * v.L)),
      v => 1.15 * (v.V / (v.W * v.L)),
    ],
  },
  {
    formulaId: 'c-soil-pressure-foundation', area: 'C', unknown: 'P_s',
    formulaText: 'P_s = \\frac{W_E \\times W_F}{A_F}',
    unit: 'kg/m2', round: 1,
    vars: [
      { symbol: 'W_E', ascii: 'We', label: 'weight of the engine', unit: 'kg', min: 500, max: 3000, decimals: 1 },
      { symbol: 'W_F', ascii: 'Wf', label: 'weight of the foundation', unit: 'kg', min: 1500, max: 14000, decimals: 1 },
      { symbol: 'A_F', ascii: 'Af', label: 'area of the foundation', unit: 'm2', min: 1.5, max: 6, decimals: 2 },
    ],
    // The second SOURCE NOTE correction: the compute sums the two weights, not
    // the printed product. The engine-only option, We/Af, was kept through the
    // probe after abandoning the "forgot the foundation" slip, whose band
    // (0.33 to 0.97) SWALLOWS the 0.85 scalar; the engine-only option's band
    // (0.03 to 0.67) is clear of every scalar used here.
    compute: v => (v.We + v.Wf) / v.Af,
    context: 'a designer checking what the soil under an engine and foundation will carry',
    verb: 'records',
    unknownPhrase: 'the soil pressure under the foundation in kilograms per square metre',
    keyConcept: 'The soil pressure is the load divided by the footprint, and the load is the whole thing standing on the soil: the engine and the foundation together. That addition is the entire difficulty of the formula, because the printed source multiplies the two weights instead of adding them - a transcription slip that the notes correct, and a slip worth naming, because a novice reaching for the printed form computes a product that is not a pressure at all. Physically, everything on the soil is transmitted to the soil: the steel presses the concrete, the concrete presses the footprint, and the footprint presses the ground, so the ground sees engine plus foundation, never one alone and never their product. The engine-only reading is the seductive one - a designer holding the machine in mind forgets the block holding it - and the number that comes out is a tenth of the true figure, which is exactly how a foundation silently fails: the soil gives the safe side for the engine and receives the engine plus its bed. Squared kilograms do not press on soil; kilograms do.',
    mistakes: [
      'Multiplying the two weights instead of adding them, reproducing the printed slip and computing a non-pressure',
      'Taking only the engine weight over the area, forgetting the foundation the engine stands on and understating the load tenfold',
      'Adding the areas to the weights or otherwise carrying the kg/m2 through as a count of terms',
    ],
    distractors: [
      v => v.We / v.Af,
      v => 0.85 * ((v.We + v.Wf) / v.Af),
      v => 1.15 * ((v.We + v.Wf) / v.Af),
    ],
  },
  {
    formulaId: 'c-foundation-factor-safety', area: 'C', unknown: 'FS',
    formulaText: 'FS = \\frac{BC_{soil}}{P_s}',
    unit: 'decimal', round: 2,
    vars: [
      { symbol: 'BC_{soil}', ascii: 'Bc', label: 'safe soil bearing capacity', unit: 'kg/m2', min: 12000, max: 12500, decimals: 0 },
      { symbol: 'P_s', ascii: 'Ps', label: 'exerted soil pressure', unit: 'kg/m2', min: 2000, max: 6100, decimals: 1 },
    ],
    // The bearing capacity is promoted to a giving var (12225 is a printed
    // constant in the source) so the ratio is computable. P_s band keeps the
    // factor of safety in 2.0 to 6.25, the working range foundation texts
    // actually prescribe; the inverted option P_s/BC is the unit-flip mistake
    // that reads as "pressure over capacity" and the probe cleared it
    // (squared-ratio, at most 0.25 of the answer).
    compute: v => v.Bc / v.Ps,
    context: 'a designer checking a foundation against the local soil report',
    verb: 'reports',
    unknownPhrase: 'the factor of safety of the foundation',
    keyConcept: 'The factor of safety is the designer\'s margin, and it is expressed the way every margin is: how much the soil can safely carry divided by how much the foundation forces it to carry. The two inputs are in the same units - kilograms per square metre - so the ratio is a pure number, and the rules of good practice say it should land between 2 and 4 in ordinary conditions: the soil can take two to four times the load it is actually being asked to take. That is the reading to keep in mind on any answer: a factor of safety under 1 means the foundation is pre-failed, over 6 means the design is paying for a slab of rock it does not need. Because the numerator is a soil property and the denominator is the pressure from the previous box, the formula is the hinge where all of foundation design closes: the weight made the pressure, the pressure says whether the weight was safe, and the safe bearing capacity is set by a soil report the designer does not choose. The inversion - pressure over capacity - is the one that passes a pre-failed design, and it is exactly what this cascade is built to test.',
    mistakes: [
      'Inverting the ratio, reporting the pressure over the capacity, which is always below one and reads as a foundation past its limit',
      'Subtracting the pressure from the capacity and treating the difference as the margin, confusing a ratio with a remainder',
      'Using the engine weight over the bearing capacity directly, skipping the pressure box and the foundation weight entirely',
    ],
    distractors: [
      v => v.Ps / v.Bc,
      v => 0.85 * (v.Bc / v.Ps),
      v => 1.15 * (v.Bc / v.Ps),
    ],
  },
];