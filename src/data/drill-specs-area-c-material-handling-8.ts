// Area C drill specs, material handling: the bucket elevator (velocity,
// optimum speed, power requirement), conveying & storage (screw conveyor,
// stock-pile volume, paddy-separator compartments), and grain storage
// structures (level, peak and hopper-bottom cylindrical bins, plus two
// processing-machine rules of thumb). Eleven specs, taking coverage from 226
// to 237 of 240.
//
// Three design notes, all forced by the probe the way batch six and seven
// forced theirs.
//
// First, the additive-bin formulas refuse additive distractors.
// c-bin-peak-storage-capacity and c-hopper-bottom-bin are a cylinder volume
// plus an additive cone/hopper correction, so any distractor that omits or
// rescales a TERM is a moving ratio of the form (base+correction)/base. With a
// full floor and a shallow heap that ratio slides through 0.85 without
// warning - at D 3, H 8, phi 25 degrees the peak correction is under three
// percent of the volume, so a "level full" slip sits at 0.97 of the answer
// and every scalar in the book lands on or beside it. The only distractors
// that stay honest on these two specs multiply the WHOLE answer, correction
// and all: a diameter/radius slip (halve D, ratio 1/4), a doubled diameter
// (4x), and the scalar pair. Halving the diameter scales the cylinder, cone
// and hopper together, which is exactly the mistake the trapping D/2 inside
// the formula is inviting.
//
// Second, the reciprocal options are banned wherever a box interior can pass
// through them. c-bucket-elevator-speed divides 54.19 by sqrt(R), so an
// inverted option would be a ratio of R itself and with R in [1,4] it runs
// straight through 1.0 and 1.15. c-low-speed-rubber-roller is already a
// fraction of a given speed, and its two honest faces are the removed quarter
// (0.25 N_F, a fixed 1/3 of the answer) and the complement (1.25 N_F, a fixed
// 5/3), both stable. c-vertical-abrasive-whitener-brakes divides a cone
// diameter in millimetres by 100, so the wrong-divisor option D/50 is a fixed
// 2x and D/200 would round onto the 0.85 scalar at the low end and is dropped.
//
// Third, the discrete-constant lanes of the topic have to be treated like the
// C6 factor lanes: both faces in the story, one in the answer. The bucket
// elevator power factor F is 1.2 (loaded upside) or 1.5 (loaded downside) in
// the handbook, so F is a giving variable in [1.2,1.5] and the student reads
// it off the scenario; the wrong-direction face is NOT in the option set
// because against an F = 1.2 answer it is a fixed 1.25, which collides with
// the 1.15 scalar. The paddy separator has two lanes - divide by 40 for long
// grain, 60 for short - and here the second lane is the substance of the
// formula, so it goes in as a structural distractor (a fixed 2/3 of the
// answer): a separator is defined by its grain type, and recognising that is
// the skill being drilled.
//
// c-bucket-elevator-power carries the same dimensional slip as the drying
// airflow formula in batch seven and gets the same treatment: the printed
// P = Capacity x H x F closes only when Capacity is a mass rate and H a
// height, giving kilogram-metres per minute (the unit this tradition converts
// at 4500 kg-m/min per horsepower). The SOURCE NOTE on the formula entry
// records that reading; the box drives it.
import type { DrillSpec } from './formula-drills';

export const areaCMaterialHandling8Specs: DrillSpec[] = [
  // -------------------------------------------------------- bucket elevator
  {
    formulaId: 'c-bucket-velocity', area: 'C', unknown: 'V_B',
    formulaText: 'V_B = \\pi D N',
    unit: 'ft/min', round: 0,
    vars: [
      { symbol: 'D', ascii: 'D', label: 'head wheel diameter', unit: 'ft', min: 2, max: 8, decimals: 1 },
      { symbol: 'N', ascii: 'N', label: 'rotational speed of the head wheel', unit: 'rpm', min: 30, max: 90, decimals: 0 },
    ],
    // The belt speed of a bucket elevator, pi D N: the circumference the belt
    // travels in one revolution times how many revolutions happen per minute.
    // The roles of the two slips are swapped from the usual order - the D/2
    // "radius instead of diameter" at 0.5x is the realistic one, and the
    // forgot-pi D x N at 0.318x is the far figure. Both stay clear of the
    // scalars by construction.
    compute: v => Math.PI * v.D * v.N,
    context: 'a bucket elevator lifting palay in a warehouse handling line',
    verb: 'records',
    unknownPhrase: 'the bucket velocity of the elevator in feet per minute',
    keyConcept: 'Bucket velocity is how fast the belt itself moves, and it is pi D N: the head wheel unwraps its own circumference once per revolution, and the circumference times the revolutions per minute is the belt travel in a minute. The head wheel diameter is measured on the belt line - the pulley plus the belt thickness - which is why it is called the pitch diameter and why the formula carries a pi in it: without the pi the belt travel would be half a circumference a revolution, and the elevator would be sized entirely wrong. Bucket elevators are deliberately run slow compared with a fan or a saw, and the velocity has to sit next to the centrifugal throw of the buckets at the head: too fast and the grain is flung clear past the discharge chute, too slow and it falls back down the leg. This velocity is one half of that matching pair, and the other half is the design speed formula that follows it in the topic.',
    mistakes: [
      'Using the radius of the head wheel for the diameter, which halves the circumference and the velocity',
      'Forgetting the pi and reporting D x N, which is the belt travel of a third of a revolution',
      'Using the diameter in metres against a speed in feet per minute, mixing systems in the pi D N product',
    ],
    distractors: [
      v => (Math.PI / 2) * v.D * v.N,
      v => v.D * v.N,
      v => 0.85 * (Math.PI * v.D * v.N),
      v => 1.15 * (Math.PI * v.D * v.N),
    ],
  },
  {
    formulaId: 'c-bucket-elevator-speed', area: 'C', unknown: 'N',
    formulaText: 'N = \\frac{54.19}{R^{0.5}}',
    unit: 'rpm', round: 1,
    vars: [
      { symbol: 'R', ascii: 'R', label: 'radius of the wheel plus half the bucket projection', unit: 'ft', min: 1, max: 4, decimals: 2 },
    ],
    // The design-speed rule: N = 54.19/sqrt(R) with R in feet - a long-studied
    // empirical value that fixes the head-wheel speed so the centrifugal throw
    // matches the bucket velocity the elevator was laid out for. The sqrt is
    // the whole difficulty and every in-band option avoids band-sweeping; the
    // "diameter read as radius" option is a fixed 1/sqrt(2).
    compute: v => 54.19 / Math.sqrt(v.R),
    context: 'a plant engineer matching the head wheel drive of a bucket elevator',
    verb: 'notes',
    unknownPhrase: 'the design speed of the bucket elevator in revolutions per minute',
    keyConcept: 'The design speed formula is the counterpart of the pi D N velocity, and it exists because a bucket elevator has to throw grain, not pour it. The buckets round the head at a speed that sets how hard the grain is thrown into the discharge chute; spin the head too slowly and the grain falls back down the leg, spin it too fast and it slams the far wall of the chute. The rule is an empirical one - 54.19 over the square root of the radius, with the radius measured in feet and the result in revolutions per minute - and the square root is the part that makes it a design formula rather than a proportion: double the radius and the head slows only to 71 percent of its former speed, not half, because doubling the radius doubles the leverage of the centrifugal throw without doubling the throwing force. The radius is taken to the midpoint of the bucket, wheel radius plus half the bucket projection, because that is the circle the load actually travels on.',
    mistakes: [
      'Forgetting the square root and dividing by R directly, which over-slow the head by anything from a third to a half',
      'Reading the wheel diameter as the radius of the formula, a fixed 1/sqrt(2) of the correct speed',
      'Multiplying by the square root instead of dividing, which turns the design speed into a throw far beyond the safe range',
    ],
    distractors: [
      v => 54.19 / Math.sqrt(2 * v.R),
      v => 0.85 * (54.19 / Math.sqrt(v.R)),
      v => 1.15 * (54.19 / Math.sqrt(v.R)),
    ],
  },
  {
    formulaId: 'c-bucket-elevator-power', area: 'C', unknown: 'P',
    formulaText: 'P = C \\times H \\times F',
    unit: 'kg-m/min', round: 0,
    vars: [
      { symbol: 'C', ascii: 'C', label: 'conveying capacity of the elevator', unit: 'kg/min', min: 100, max: 2000, decimals: 0 },
      { symbol: 'H', ascii: 'H', label: 'lift height of the grain', unit: 'm', min: 5, max: 40, decimals: 1 },
      { symbol: 'F', ascii: 'F', label: 'load-direction factor of the elevator', unit: '', min: 1.2, max: 1.5, decimals: 1 },
    ],
    // P = C x H x F, with the capacity a mass rate in kg/min and the lift in
    // metres, so the answer is a rate of lifting work in kg-m/min - the unit of
    // the 4500 kg-m/min per horsepower convention. The per-hour slip is the
    // sixty-times figure; the wrong-direction F face (1.25 against a 1.2
    // answer) is excluded from the option set on principle because it lives
    // inside the 1.15 scalar’s reach.
    compute: v => v.C * v.H * v.F,
    context: 'a mill sizing the drive motor of its bucket elevator',
    verb: 'records',
    unknownPhrase: 'the power requirement of the elevator in kilogram-metres per minute',
    keyConcept: 'The power of a bucket elevator is the work of lifting, and it is the product of three factors that each describe a different side of the machine: the mass rate being carried, the height it must gain, and a load-direction factor that credits the elevator for the help it gets or does not get from gravity. The capacity is a RATE, not a batch - the kilograms passing the head in a minute - because the motor has to sustain that rate continuously, and the height is the lift from where the buckets fill to where they throw, because that is the potential energy the drive has to supply against. The load-direction factor is where the engineering judgment enters: a leg that lifts its load on the rising side lifts the buckets themselves too, but a leg that loads on the downside is paying for the full round trip. The unit - kilogram-metres per minute - is the honest reading of the product, and in the machinery convention of this text it converts to power at 4500 kg-m/min per horsepower.',
    mistakes: [
      'Using the capacity per hour instead of per minute, which overstates the power sixty-fold',
      'Using an area or a batch in place of the mass rate, mixing a volume term into a lifting-work product',
      'Applying the wrong direction face of F when the scenario states the loading side of the leg',
    ],
    distractors: [
      v => v.C * v.H * v.F * 60,
      v => 0.85 * (v.C * v.H * v.F),
      v => 1.15 * (v.C * v.H * v.F),
    ],
  },
  // --------------------------------------------------------- conveying
  {
    formulaId: 'c-screw-conveyor-capacity', area: 'C', unknown: 'Capacity',
    formulaText: 'Capacity = \\left(\\frac{\\pi D^2}{4}\\right) \\times P \\times N',
    unit: 'ft3/min', round: 1,
    vars: [
      { symbol: 'D', ascii: 'D', label: 'screw diameter', unit: 'ft', min: 0.5, max: 1.2, decimals: 2 },
      { symbol: 'P', ascii: 'P', label: 'pitch length of the screw', unit: 'ft', min: 0.4, max: 1.0, decimals: 2 },
      { symbol: 'N', ascii: 'N', label: 'rotational speed of the screw', unit: 'rpm', min: 30, max: 120, decimals: 0 },
    ],
    // Capacity = (pi D^2 /4) x P x N is transcribed as printed (the SOURCE NOTE
    // on the formula records it); the reading that closes is D and pitch in
    // feet with the speed in rpm giving cubic feet per minute. The dropped pi/4
    // option is kept despite its 1.27x proximity to the 1.15 scalar because it
    // is the formula’s real trap and the two remain distinct after rounding.
    compute: v => (Math.PI * v.D * v.D / 4) * v.P * v.N,
    context: 'a feed mill sizing the auger that moves rice bran between bins',
    verb: 'records',
    unknownPhrase: 'the conveying capacity of the screw conveyor in cubic feet per minute',
    keyConcept: 'The screw conveyor formula is the area of the flight circle times the distance the load is shoved per revolution, times how many revolutions come per minute - the cross-section, the pitch, and the speed. The pitch is the honest part of the geometry: one full turn of the screw advances the material by one pitch length, not by the circumference, so the volume moved per turn is the flight circle’s area times the pitch, and that is the reading that makes the equation dimensionally alive. The pi D squared over four is the area of the circle the flights sweep - where the pi/4 factor lives, and where the two classic slips sit: dropping the pi/4 inflates the answer by a factor of 4/pi, and dropping the pitch entirely treats the screw as though it advanced its whole length in one turn. Conveyor augers in a feed mill run at a fraction of the screw’s critical speed, and the same formula is used to keep the load below the spill point at the intake.',
    mistakes: [
      'Dropping the pi/4 and using D squared P N, which overstates the area by 27 percent',
      'Dropping the division by four entirely, multiplying a full circle of diameter D instead of a quarter, four times the true capacity',
      'Halving the pitch in the reading, or using the screw length in place of the pitch, losing a factor of two',
    ],
    distractors: [
      v => Math.PI * v.D * v.D * v.P * v.N,
      v => v.D * v.D * v.P * v.N,
      v => 0.5 * ((Math.PI * v.D * v.D / 4) * v.P * v.N),
      v => 0.85 * ((Math.PI * v.D * v.D / 4) * v.P * v.N),
      v => 1.15 * ((Math.PI * v.D * v.D / 4) * v.P * v.N),
    ],
  },
  {
    formulaId: 'c-volume-of-pile', area: 'C', unknown: 'V',
    formulaText: 'V = \\frac{CWH}{\\text{StockDensity}}',
    unit: 'm3', round: 1,
    vars: [
      { symbol: 'CWH', ascii: 'Cwh', label: 'warehouse capacity', unit: 'bags', min: 500, max: 5000, decimals: 0 },
      { symbol: '\\text{StockDensity}', ascii: 'Rho', label: 'stock density of the stored sacks', unit: 'bag/m3', min: 10, max: 15, decimals: 0 },
    ],
    // V = CWH / density in bags per cubic metre. The product CWH x density was
    // probed and rejected - its ratio runs 100 to 225x the answer, beyond the
    // plausibility ceiling - and the "bags counted as volume" slip (ratio 10 to
    // 15x) carries the density-forgetting mistake at a ratio the ceiling
    // accepts.
    compute: v => v.Cwh / v.Rho,
    context: 'a grain storehouse planning the floor space for a pile of sacks',
    verb: 'records',
    unknownPhrase: 'the volume the pile of sacks occupies in cubic metres',
    keyConcept: 'The volume of a sack pile is the bag count divided by how many bags a cubic metre holds - and the density is the whole point, because it is how loosely or tightly the sacks are packed into space, not how heavy they are. Rice at 15 bags per cubic metre, palay at 10, corn at 12: those three figures are the constants of the Philippine storehouse trade, and the difference between them is real floor space - a palay pile takes one and a half times the volume of the same number of rice sacks because the sacks are bulkier and do not stack as tightly. The trap in the formula is doing the division backwards or skipping the density entirely and treating the bag count as a cubic metre figure; both inflate the footprint the storehouse has to reserve. Once the volume is known it feeds the pile layout - the base area times the working height the stacking rules allow - which is where the plan for the actual shed comes from.',
    mistakes: [
      'Multiplying the bag count by the density instead of dividing, cubing the units and swamping the floor area',
      'Counting the sacks themselves as cubic metres, ignoring the density and taking every bag for a barrel of space',
      'Dividing by the density of the wrong commodity, e.g. a rice density on a palay pile, which shrinks the volume by a third',
    ],
    distractors: [
      v => v.Cwh,
      v => 0.85 * (v.Cwh / v.Rho),
      v => 1.15 * (v.Cwh / v.Rho),
    ],
  },
  {
    formulaId: 'c-paddy-separator-compartments', area: 'C', unknown: 'N_c',
    formulaText: 'N_c = \\frac{C_B}{40} \\ (long\\ grain) \\qquad N_c = \\frac{C_B}{60} \\ (short\\ grain)',
    unit: 'decimal', round: 0,
    vars: [
      { symbol: 'C_B', ascii: 'Cb', label: 'throughput capacity of the brown rice stream', unit: 'kg/h', min: 800, max: 2400, decimals: 0 },
    ],
    // The long-grain lane (divide by 40) is the box; the short-grain lane
    // (divide by 60) is a structural distractor at a fixed 2/3 - both lanes are
    // in the printed formula and both have to be in the option set.
    compute: v => v.Cb / 40,
    context: 'a rice mill running its long-grain brown rice stream through the paddy separator',
    verb: 'records',
    unknownPhrase: 'the number of compartments the separator needs for the long-grain stream',
    keyConcept: 'The paddy separator is a deck of compartments that sorts the mixture of hulled and unhulled grain leaving a husker, and the handbook sizes it per compartment: a throughput capacity per hour divided by the kilograms each compartment can grade. The two lanes of the formula are the substance of the number - long grain is graded at 40 kg per hour per compartment, short grain at 60 - and the lanes never switch, because the separator is built for a grain shape, not adjusted to one on the day. The divisor the student picks is therefore a judgment about the stream, and the whole lesson of the box is that the same throughput gives two different deck sizes depending on which lane is chosen: a 1600 kg/h stream is 40 compartments on long grain and 27 on short, and a deck rated on the wrong lane is a deck that overflows its grading area.',
    mistakes: [
      'Dividing by the short-grain divisor on a long-grain stream, undersizing the deck by a third',
      'Multiplying the throughput by the divisor instead of dividing, which counts compartments in the thousands',
      'Dividing the 40 by the throughput, inverting the ratio into a fraction of a compartment',
    ],
    distractors: [
      v => v.Cb / 60,
      v => 0.85 * (v.Cb / 40),
      v => 1.15 * (v.Cb / 40),
    ],
  },
  // --------------------------------------------------- grain storage structures
  {
    formulaId: 'c-bin-level-full-volume', area: 'C', unknown: 'V',
    formulaText: 'V = \\left(\\frac{\\pi D^2}{4}\\right) H',
    unit: 'm3', round: 1,
    vars: [
      { symbol: 'D', ascii: 'D', label: 'bin diameter', unit: 'm', min: 3, max: 12, decimals: 1 },
      { symbol: 'H', ascii: 'H', label: 'eave height of the bin', unit: 'm', min: 2, max: 8, decimals: 1 },
    ],
    // The level-full bin is the base cylinder every bin box derives from. The
    // pi/4 drop (4/pi) is excluded from the option set on the same ground as
    // the screw conveyor - but here the walls are real, so the options are the
    // dropped pi/4-as-4x (using a full circle), the half-diameter slip, and the
    // scalars.
    compute: v => (Math.PI * v.D * v.D / 4) * v.H,
    context: 'a grain cooperative filling one of its cylindrical bins level to the eave',
    verb: 'records',
    unknownPhrase: 'the level-full capacity of the bin in cubic metres',
    keyConcept: 'The level-full bin is the plainest structural formula in the topic: a cylinder, pi D squared over four for its cross section, times the eave height, the usable cylinder wall. It is the baseline every other bin figure is built from, because a silo is bought and priced on volume and the level-full figure is the conservative number - the volume you get if you fill it flat, no heaping. The pi/4 is the part that is easy to lose: the cross section of a circle of diameter D is pi D squared over four, not pi D squared, and dropping the division by four overstates capacity four-fold, which is a pricing error no cooperative accountant can catch from the outside of the tank. The diameter and the eave height are both measured in metres, so the answer is a true cubic-metre capacity; the heaped grain that would raise a working silo above its eave is deliberately excluded here and recovered in the next formula, the peak-storage figure.',
    mistakes: [
      'Using pi D squared H instead of the quarter section, four times the true volume',
      'Halving the diameter for the radius and forgetting the quarter section compensates, getting a quarter of the true volume',
      'Measuring the height to the top of the roof cone instead of the eave, mixing the peak and level-full designs',
    ],
    distractors: [
      v => Math.PI * v.D * v.D * v.H,
      v => (Math.PI * (v.D / 2) * (v.D / 2) / 4) * v.H,
      v => 0.85 * ((Math.PI * v.D * v.D / 4) * v.H),
      v => 1.15 * ((Math.PI * v.D * v.D / 4) * v.H),
    ],
  },
  {
    formulaId: 'c-bin-peak-storage-capacity', area: 'C', unknown: 'V',
    formulaText: 'V = \\left(\\frac{\\pi D^2}{4}\\right)\\left[H + \\frac{(D/2)\\tan\\phi}{3}\\right]',
    unit: 'm3', round: 1,
    vars: [
      { symbol: 'D', ascii: 'D', label: 'bin diameter', unit: 'm', min: 3, max: 12, decimals: 1 },
      { symbol: 'H', ascii: 'H', label: 'eave height of the bin', unit: 'm', min: 2, max: 8, decimals: 1 },
      { symbol: '\\phi', ascii: 'Phi', label: 'maximum angle of fill of the grain', unit: 'deg', min: 25, max: 45, decimals: 0 },
    ],
    conversions: [
      { ascii: 'Phi', unit: 'rad', factor: 0.0174533, fromUnit: 'deg' },
    ],
    // Additive correction, so NO additive distractor: the "level-full" slip has
    // a ratio (H+cone/3)/H that slides from 1.03 to 1.40 across the box and
    // kisses the scalar band. Every option here multiplies the whole answer -
    // half-diameter (1/4), doubled diameter (4) and the scalars.
    compute: v => (Math.PI * v.D * v.D / 4) * (v.H + ((v.D / 2) * Math.tan(v.Phi * Math.PI / 180)) / 3),
    context: 'a farm filling a cylindrical bin so the grain heaps into a cone above the eave',
    verb: 'records',
    unknownPhrase: 'the peak-storage capacity of the bin in cubic metres',
    keyConcept: 'Peak-storage is the level-full volume plus the cone that grain naturally heaps into at the angle of repose - fill a bin until it will not take more and the grain piles to a fixed slope above the eave, steepest for clean dry grain, gentler for husks and broken kernels. The cone volume is one-third the base times the height, and the height of the heap is found from the fill angle: the cone radius is D over two, the bin half-width, and the rise is that radius times the tangent of the fill angle, because the tangent of the angle of repose defines the slope of the heap. The formula therefore adds the cylinder walls and the cone in one bracket, and the angle is the entire difference between a flat fill and a working fill: a bin peaking at 45 degrees holds a third of the bin diameter in extra height of grain, and at 25 degrees barely an eighth. It is the figure a farmer actually reports, because nobody levels grain that has emptied into a peak - and the level-full box exists to keep the two readings distinct.',
    mistakes: [
      'Using the level-full volume alone, ignoring the cone and understating a working silo by the whole heap',
      'Plugging the diameter into the D/2 cone term, doubling the cone radius and overstating the heap fourfold in volume',
      'Taking the tangent in radians without converting the degree figure, which sends the angle of repose to zero',
    ],
    distractors: [
      v => (Math.PI * (v.D / 2) * (v.D / 2) / 4) * (v.H + ((v.D / 2) * Math.tan(v.Phi * Math.PI / 180)) / 3),
      v => (Math.PI * (2 * v.D) * (2 * v.D) / 4) * (v.H + ((v.D / 2) * Math.tan(v.Phi * Math.PI / 180)) / 3),
      v => 0.85 * ((Math.PI * v.D * v.D / 4) * (v.H + ((v.D / 2) * Math.tan(v.Phi * Math.PI / 180)) / 3)),
      v => 1.15 * ((Math.PI * v.D * v.D / 4) * (v.H + ((v.D / 2) * Math.tan(v.Phi * Math.PI / 180)) / 3)),
    ],
  },
  {
    formulaId: 'c-hopper-bottom-bin', area: 'C', unknown: 'V',
    formulaText: 'V = \\left(\\frac{\\pi D^2}{4}\\right)\\left[H + \\frac{(D/2)\\tan\\phi}{3} + \\frac{(D/2)\\tan\\delta}{3}\\right]',
    unit: 'm3', round: 1,
    vars: [
      { symbol: 'D', ascii: 'D', label: 'bin diameter', unit: 'm', min: 3, max: 12, decimals: 1 },
      { symbol: 'H', ascii: 'H', label: 'eave height of the bin', unit: 'm', min: 2, max: 8, decimals: 1 },
      { symbol: '\\phi', ascii: 'Phi', label: 'maximum angle of fill of the grain', unit: 'deg', min: 25, max: 45, decimals: 0 },
      { symbol: '\\delta', ascii: 'Delta', label: 'slope of the hopper from the horizontal', unit: 'deg', min: 30, max: 60, decimals: 0 },
    ],
    conversions: [
      { ascii: 'Phi', unit: 'rad', factor: 0.0174533, fromUnit: 'deg' },
      { ascii: 'Delta', unit: 'rad', factor: 0.0174533, fromUnit: 'deg' },
    ],
    // Same additive discipline as the peak bin: the hopper is a third additive
    // term, so all options multiply the whole volume. The teaching point is the
    // refugee D/2 in front of each cone term - the SAME radius appears in two
    // corrections, and the diameter/radius swap is probed against both.
    compute: v => (Math.PI * v.D * v.D / 4) * (v.H + ((v.D / 2) * Math.tan(v.Phi * Math.PI / 180)) / 3 + ((v.D / 2) * Math.tan(v.Delta * Math.PI / 180)) / 3),
    context: 'a mill storing grain in a hopper-bottom cylindrical bin',
    verb: 'records',
    unknownPhrase: 'the capacity of the hopper-bottom bin in cubic metres',
    keyConcept: 'The hopper-bottom bin is the peak-storage bin plus the inverted cone underneath - the funnel that lets the bin self-empty instead of needing a sweep auger, and the reason the same diameter appears twice in the formula. Above the eave the grain heaps into one cone of tangent phi; below the floor the hopper falls away in another cone at the slope delta; and both cones share the bin half-diameter as their base radius, which is why the D over two shows up in each correction and the two are added into one bracket. The hopper cone is what the mill is paying for when it buys a hopper-bottom instead of a flat silo - every cubic metre of it is grain that can flow out under its own weight - and the angle delta is set steep enough to let the grain slide, which is the same tangent geometry as the fill angle above. The formula is nothing more than the cylinder of the eave height plus the two cones, and reading the two D over two terms as the full diameter is the slip that doubles the cone geometry in the wrong direction.',
    mistakes: [
      'Omitting the hopper cone and quoting the peak-storage figure, which forgets the funnel that makes this bin a hopper design',
      'Using the full diameter in place of the D/2 cone radius in either term, doubling the base of the cones',
      'Treating the hopper slope as a fill property, swapping delta into the upper cone and phi into the lower one',
    ],
    distractors: [
      v => (Math.PI * (v.D / 2) * (v.D / 2) / 4) * (v.H + ((v.D / 2) * Math.tan(v.Phi * Math.PI / 180)) / 3 + ((v.D / 2) * Math.tan(v.Delta * Math.PI / 180)) / 3),
      v => (Math.PI * (2 * v.D) * (2 * v.D) / 4) * (v.H + ((v.D / 2) * Math.tan(v.Phi * Math.PI / 180)) / 3 + ((v.D / 2) * Math.tan(v.Delta * Math.PI / 180)) / 3),
      v => 0.85 * ((Math.PI * v.D * v.D / 4) * (v.H + ((v.D / 2) * Math.tan(v.Phi * Math.PI / 180)) / 3 + ((v.D / 2) * Math.tan(v.Delta * Math.PI / 180)) / 3)),
      v => 1.15 * ((Math.PI * v.D * v.D / 4) * (v.H + ((v.D / 2) * Math.tan(v.Phi * Math.PI / 180)) / 3 + ((v.D / 2) * Math.tan(v.Delta * Math.PI / 180)) / 3)),
    ],
  },
  {
    formulaId: 'c-vertical-abrasive-whitener-brakes', area: 'C', unknown: 'N_B',
    formulaText: 'N_B = \\frac{D}{100}',
    unit: 'decimal', round: 0,
    vars: [
      { symbol: 'D', ascii: 'D', label: 'diameter of the whitener cone', unit: 'mm', min: 500, max: 1500, decimals: 0 },
    ],
    // One brake per 100 mm of cone diameter, so a 500 to 1500 mm cone gives 5 to
    // 15 brakes. The divisor slip D/50 is a clean 2x; D/200 would round onto
    // the 0.85 scalar near the bottom of the box and is excluded. The 0.85/1.15
    // scalars on small integers stay distinct: 5->4/6/10, checked through the
    // box in the probe.
    compute: v => v.D / 100,
    context: 'a mill setting up the brake count on a vertical abrasive cone whitener',
    verb: 'records',
    unknownPhrase: 'the number of brakes the cone whitener needs',
    keyConcept: 'The brake count of a vertical abrasive whitener is a sizing ratio scaled to the machine: one brake for every 100 millimetres of cone diameter. The brakes are the ring of abrasive segments that rub the grain as it works down the rotating cone, and the count must match the surface the cone presents - a bigger cone takes more braking rows to cover the working length, and the rule compresses a whole layout decision into one division. The only number the student supplies is the cone diameter, so the entire difficulty is choosing the divisor and remembering the scale: the diameter is written in millimetres, and the 100 in the denominator is a hundred of those millimetres, which is why a 1200 mm cone wants twelve brakes and not twelve hundredths. Whitener brake counts are among the most quoted maintenance figures in a mill - the set wears and is ordered again by that number - so the ratio is meant to be memorised and used without a table.',
    mistakes: [
      'Dividing by 50 instead of 100, doubling the brake count as if each brake covered half the cone height',
      'Reading the cone diameter in centimetres first and then dividing by 100, shrinking the count tenfold',
      'Multiplying the diameter by 100 as if the brakes were per-metre rows, which is a count in the tens of thousands',
    ],
    distractors: [
      v => v.D / 50,
      v => 0.85 * (v.D / 100),
      v => 1.15 * (v.D / 100),
    ],
  },
  {
    formulaId: 'c-low-speed-rubber-roller', area: 'C', unknown: 'N_S',
    formulaText: 'N_S = N_F\\left(1 - 0.25\\right)',
    unit: 'rpm', round: 0,
    vars: [
      { symbol: 'N_F', ascii: 'Nf', label: 'speed of the faster rubber roller', unit: 'rpm', min: 480, max: 960, decimals: 0 },
    ],
    // The slower roller runs at 75 percent of the faster one. The two honest
    // faces of the split - the removed quarter (0.25x N_F, a fixed 1/3 of the
    // answer) and the complement added back (1.25x N_F, a fixed 5/3) - are the
    // options that belong to this formula, alongside the scalars.
    compute: v => v.Nf * 0.75,
    context: 'a mill tuning the rubber-roller husker drive for its two rollers',
    verb: 'records',
    unknownPhrase: 'the speed of the slower rubber roller in revolutions per minute',
    keyConcept: 'A rubber-roller husker shells paddy by passing it between two rubber rollers running at different speeds - the differential grip is what rubs the husk off without crushing the kernel - and the design rule fixes the slower roller at 75 percent of the faster. The skill in the formula is reading what 1 - 0.25 is doing: it is not subtracting a quarter of anything we have, it is building the slow roller from the fast one, and the two figures that get mixed up are the removed quarter itself (0.25 times the fast speed) and the complement (1.25 times the fast speed, as though slowing one roller by a quarter pushed the other up). The differential is set by the rule and not left to the operator - the faster roller does the transport while the slower one does the shearing - so the answer always sits at exactly three-quarters of the driven roller, and any number that is a third or five-thirds of the drive is the same differential read on the wrong face.',
    mistakes: [
      'Reporting the removed quarter, 0.25 times the fast speed, which is a third of the answer and is not the driven speed',
      'Adding the quarter instead of subtracting it, computing 1.25 times the fast speed',
      'Subtracting a fixed 25 revolutions per minute instead of a quarter of the speed, mixing a rate with a fraction',
    ],
    distractors: [
      v => v.Nf * 0.25,
      v => v.Nf * 1.25,
      v => 0.85 * (v.Nf * 0.75),
      v => 1.15 * (v.Nf * 0.75),
    ],
  },
];