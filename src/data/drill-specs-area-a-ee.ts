// Area A drill specs, part 5 of 5: Engineering Economy.
//
// Every `compute` here implements the handbook expression in src/data/formulas.ts
// and has a hand-verified case in scripts/data/golden-cases.json. Philippine
// context throughout: rural lending rates, cooperative capital, farm machinery
// depreciation, and enterprise budgets.
//
// Rates are carried as percent numbers (12 means 12%), so each compute divides
// by 100 and returns a percent again. That keeps the printed substitution
// honest: the walkthrough shows (1 + 12/100)^12 rather than (1 + 12)^12.
//
// Every `compute` here is written to be positive over the whole sampled range,
// because a negative option is not a plausible board-exam answer. Where a ratio
// between the answer and a distractor could come within 1% of 1, the distractor
// was replaced: the sunk-fund and SYD batches both found that the "obvious"
// textbook mistake is sometimes the right answer.
//
// Salvage is carried as a percent of cost in `a-ee-service-output` so the
// depreciable base can never come out negative; the other depreciation specs
// bound the salvage maximum below the cost minimum for the same reason.
//
// `a-ee-declining-balance` and `a-ee-syd` sample the age n independently of the
// life L, so a few questions put the asset past its useful life. The arithmetic
// is still exactly the printed expression, which is what the drill is for.
import type { DrillSpec } from './formula-drills';

export const areaAEngineEconSpecs: DrillSpec[] = [
  // -------------------------------------------------------------------------
  // Interest
  // -------------------------------------------------------------------------
  {
    formulaId: 'a-ee-compound-interest', area: 'A', unknown: 'F',
    formulaText: 'F = P (1 + i)ⁿ',
    unit: 'pesos', round: 0,
    vars: [
      { symbol: 'P', ascii: 'P', label: 'principal', unit: 'pesos', min: 5000, max: 500000, decimals: 0 },
      { symbol: 'i', ascii: 'i', label: 'interest rate per period', unit: '%', min: 0.5, max: 2, decimals: 2 },
      { symbol: 'n', ascii: 'n', label: 'number of periods', unit: '', min: 2, max: 10, decimals: 0 },
    ],
    compute: v => v.P * Math.pow(1 + v.i / 100, v.n),
    context: 'a rice milling venture financed by a farmers cooperative',
    verb: 'borrowed',
    unknownPhrase: 'the amount due after the periods elapsed',
    keyConcept: 'Compound interest grows the principal by the same percentage of a base that keeps growing, so the factor is a power and not a product of the rate by the number of periods. On a small rate over few periods the two are nearly equal, which is exactly where students lose marks: the linear rule is right only for the first period.',
    mistakes: ['Using the simple-interest rule P(1 + ni) and adding the periods instead of compounding', 'Halving or doubling the number of periods', 'Applying the rate once and multiplying by n'],
    distractors: [
      v => v.P * (1 + v.i / 100) * v.n,
      v => v.P * Math.pow(1 + v.i / 100, v.n) * 2,
      v => v.P * Math.pow(1 + v.i / 100, v.n) * 3,
      v => v.P * Math.pow(1 + v.i / 100, v.n) / 2,
    ],
  },
  {
    formulaId: 'a-ee-nominal-rate', area: 'A', unknown: 'r',
    formulaText: 'r = m [ (1 + i)^(1/m) − 1 ]   with   i = r / m',
    unit: '%', round: 2,
    vars: [
      { symbol: 'i', ascii: 'i', label: 'effective rate per year', unit: '%', min: 8, max: 20, decimals: 2 },
      { symbol: 'm', ascii: 'm', label: 'compounding frequency', unit: '', min: 2, max: 12, decimals: 0 },
    ],
    compute: v => v.m * (Math.pow(1 + v.i / 100, 1 / v.m) - 1) * 100,
    context: 'a rural bank paying an effective annual yield on a savings account',
    verb: 'advertises',
    unknownPhrase: 'the nominal annual rate it must post',
    keyConcept: 'The nominal rate is the headline number, and the effective rate is what the money actually earns. Quoting a rate with m compounding periods means each period gets r/m, so the effective rate is the compounded result of the smaller rate — which is why the nominal rate always reads a little higher than the effective one for the same money.',
    mistakes: ['Multiplying the effective rate by the compounding frequency without taking the root', 'Quoting the effective rate unchanged as the nominal rate', 'Dividing by the frequency instead of multiplying'],
    distractors: [
      v => v.i,
      v => v.m * v.i,
      v => (v.m * (Math.pow(1 + v.i / 100, 1 / v.m) - 1) * 100) * 2,
      v => (v.m * (Math.pow(1 + v.i / 100, 1 / v.m) - 1) * 100) * 3,
    ],
  },
  {
    formulaId: 'a-ee-effective-rate', area: 'A', unknown: 'i_e',
    formulaText: 'i_e = (1 + i)ᵐ − 1',
    unit: '%', round: 2,
    vars: [
      { symbol: 'i', ascii: 'i', label: 'interest rate per period', unit: '%', min: 1, max: 5, decimals: 2 },
      { symbol: 'm', ascii: 'm', label: 'compounding periods per year', unit: '', min: 2, max: 12, decimals: 0 },
    ],
    compute: v => (Math.pow(1 + v.i / 100, v.m) - 1) * 100,
    context: 'a rural credit cooperative that lends on a monthly plan',
    verb: 'earns',
    unknownPhrase: 'the effective annual rate it really earns',
    keyConcept: 'Compounding a small rate many times is not the same as paying the big rate once: the effective rate is the growth of the whole principal over the year, so it is a power of one plus the period rate. It always lands below the rate you would get by multiplying, because the interest earned is itself left to earn.',
    mistakes: ['Multiplying the period rate by the number of periods', 'Multiplying the principal once per period instead of compounding it', 'Halving the number of periods'],
    distractors: [
      v => v.i * v.m,
      v => ((1 + v.i / 100) * v.m - 1) * 100,
      v => (Math.pow(1 + v.i / 100, v.m / 2) - 1) * 100,
      v => (Math.pow(1 + v.i / 100, v.m) - 1) * 100 * 2,
    ],
  },
  {
    formulaId: 'a-ee-continuous-compounding', area: 'A', unknown: 'F',
    formulaText: 'F = P e^(r n)   with   i = eʳ − 1',
    unit: 'pesos', round: 0,
    vars: [
      { symbol: 'P', ascii: 'P', label: 'principal', unit: 'pesos', min: 10000, max: 500000, decimals: 0 },
      { symbol: 'r', ascii: 'r', label: 'nominal rate compounded continuously', unit: '%', min: 10, max: 20, decimals: 2 },
      { symbol: 'n', ascii: 'n', label: 'term', unit: 'yr', min: 5, max: 10, decimals: 0 },
    ],
    compute: v => v.P * Math.exp(v.r / 100 * v.n),
    context: 'a retirement fund of a farm school',
    verb: 'was credited with',
    unknownPhrase: 'the balance in the fund after the term',
    keyConcept: 'Continuous compounding is the limit of compounding more and more often, and the limit happens to be the exponential function, so the growth factor is e raised to the rate times the years. It sits just above the same rate compounded discretely and well above the same rate added as simple interest, which is the ordering worth remembering.',
    mistakes: ['Using simple interest over the same rate and time', 'Leaving the years out of the exponent', 'Raising 1 + r to the power n instead of using the exponential'],
    distractors: [
      v => v.P * (1 + v.r / 100 * v.n),
      v => v.P * Math.exp(v.r / 100),
      v => v.P * Math.exp(v.r / 100 * v.n) * 2,
      v => v.P * Math.exp(v.r / 100 * v.n) / 2,
    ],
  },
  {
    formulaId: 'a-ee-rate-of-discount', area: 'A', unknown: 'd',
    formulaText: 'd = i / (1 + i) = (F − P) / F',
    unit: '%', round: 2,
    vars: [
      { symbol: 'i', ascii: 'i', label: 'interest rate', unit: '%', min: 5, max: 30, decimals: 2 },
    ],
    compute: v => v.i / (1 + v.i / 100),
    context: 'a promissory note a rice trader wants to discount',
    verb: 'earns',
    unknownPhrase: 'the rate of discount on the note',
    keyConcept: 'The rate of discount and the rate of interest are two ways of quoting the same deal from opposite ends. Interest is a share of the present worth, discount is a share of the future worth, so discounting at d and investing at i are not the same and the discount rate always reads lower than the interest rate it corresponds to.',
    mistakes: ['Using the interest rate itself as the discount rate', 'Dividing by 1 + i/2 instead of 1 + i', 'Reading d as a share of the present worth instead of the future worth'],
    distractors: [
      v => v.i,
      v => v.i / (1 + v.i / 200),
      v => (v.i / (1 + v.i / 100)) * 2,
      v => (v.i / (1 + v.i / 100)) / 2,
    ],
  },
  // -------------------------------------------------------------------------
  // Perpetuities and capital recovery
  // -------------------------------------------------------------------------
  {
    formulaId: 'a-ee-perpetuity', area: 'A', unknown: 'P',
    formulaText: 'P = A / i',
    unit: 'pesos', round: 0,
    vars: [
      { symbol: 'A', ascii: 'A', label: 'annual annuity', unit: 'pesos', min: 1000, max: 50000, decimals: 0 },
      { symbol: 'i', ascii: 'i', label: 'interest rate', unit: '%', min: 3, max: 15, decimals: 2 },
    ],
    compute: v => v.A / (v.i / 100),
    context: 'a municipality that must pay a dividend every year forever',
    verb: 'is budgeting for',
    unknownPhrase: 'the capital it must invest today',
    keyConcept: 'A perpetuity has no end date, so the present worth is not a sum over a finite number of payments — it is the annuity simply divided by the rate. The division is the whole formula: the lower the rate the fund earns, the more capital it needs to pay the same dividend forever.',
    mistakes: ['Multiplying the annuity by the rate instead of dividing by it', 'Discounting a perpetuity one period as though it were an annuity due', 'Treating the perpetuity as a finite series'],
    distractors: [
      v => v.A / (v.i / 100) / (1 + v.i / 100),
      v => (v.A / (v.i / 100)) * (1 + v.i / 100),
      v => (v.A / (v.i / 100)) * 2,
      v => (v.A / (v.i / 100)) / 2,
    ],
  },
  {
    formulaId: 'a-ee-capitalized-cost', area: 'A', unknown: 'CC',
    formulaText: 'CC = x + S / [ (1 + i)ᵏ − 1 ]',
    unit: 'pesos', round: 0,
    vars: [
      { symbol: 'x', ascii: 'x', label: 'principal at the given rate', unit: 'pesos', min: 1000, max: 100000, decimals: 0 },
      { symbol: 'S', ascii: 'S', label: 'replacement cost every interval', unit: 'pesos', min: 5000, max: 200000, decimals: 0 },
      { symbol: 'i', ascii: 'i', label: 'interest rate', unit: '%', min: 3, max: 15, decimals: 2 },
      { symbol: 'k', ascii: 'k', label: 'replacement interval', unit: 'yr', min: 5, max: 30, decimals: 0 },
    ],
    compute: v => v.x + v.S / (Math.pow(1 + v.i / 100, v.k) - 1),
    context: 'a pump installation a barangay replaces on a fixed cycle',
    verb: 'prices at a principal plus a sinking amount for',
    unknownPhrase: 'the total capitalized cost of the installation',
    keyConcept: 'Capitalized cost is the present worth of a thing that never wears out: the capital outlay today plus the present worth of the replacements that will be needed forever. The replacement term accumulates the cost S over k years to get the year it is spent, then capitalizes that single amount by the annuity factor over the same k — which is why the two k values are the same.',
    mistakes: ['Leaving out the minus one in the accumulation factor', 'Using k − 1 periods in the annuity factor', 'Adding the replacement cost directly without capitalizing it'],
    distractors: [
      v => v.x + v.S / Math.pow(1 + v.i / 100, v.k),
      v => v.x + v.S / (Math.pow(1 + v.i / 100, v.k - 1) - 1),
      v => (v.x + v.S / (Math.pow(1 + v.i / 100, v.k) - 1)) * 2,
      v => (v.x + v.S / (Math.pow(1 + v.i / 100, v.k) - 1)) / 2,
    ],
  },
  // -------------------------------------------------------------------------
  // Annuities
  // -------------------------------------------------------------------------
  {
    formulaId: 'a-ee-ordinary-annuity', area: 'A', unknown: 'P',
    formulaText: 'P = A [ ((1 + i)ⁿ − 1) / (i (1 + i)ⁿ) ]',
    unit: 'pesos', round: 0,
    vars: [
      { symbol: 'A', ascii: 'A', label: 'annual instalment', unit: 'pesos', min: 5000, max: 100000, decimals: 0 },
      { symbol: 'i', ascii: 'i', label: 'interest rate', unit: '%', min: 5, max: 20, decimals: 2 },
      { symbol: 'n', ascii: 'n', label: 'number of annual payments', unit: '', min: 3, max: 20, decimals: 0 },
    ],
    compute: v => v.A * (Math.pow(1 + v.i / 100, v.n) - 1) / ((v.i / 100) * Math.pow(1 + v.i / 100, v.n)),
    context: 'a poultry grower financing a loan repaid in equal annual instalments',
    verb: 'owes',
    unknownPhrase: 'the present worth of the payments',
    keyConcept: 'The present worth of an ordinary annuity is the growth of the annuity by n years, divided by the interest rate and by that same growth factor — the first step turns the stream of payments into a lump at the end of year n, the second walks that lump back to today. Dropping the growth factor from the denominator leaves the future worth instead, which is the single most common slip on this formula.',
    mistakes: ['Omitting the (1 + i)ⁿ from the denominator, which gives the future worth', 'Treating the annuity as an annuity due', 'Dividing by n instead of by the interest rate'],
    distractors: [
      v => v.A * (Math.pow(1 + v.i / 100, v.n) - 1) / (v.i / 100),
      v => v.A * (1 - Math.pow(1 + v.i / 100, -v.n)) / (v.i / 100) * (1 + v.i / 100),
      v => (v.A * (Math.pow(1 + v.i / 100, v.n) - 1) / ((v.i / 100) * Math.pow(1 + v.i / 100, v.n))) * 2,
      v => (v.A * (Math.pow(1 + v.i / 100, v.n) - 1) / ((v.i / 100) * Math.pow(1 + v.i / 100, v.n))) / 2,
    ],
  },
  {
    formulaId: 'a-ee-deferred-annuity', area: 'A', unknown: 'P',
    formulaText: 'P = A [ (1 − (1 + i)⁻ⁿ) / i ] × (1 + i)⁻ᵐ',
    unit: 'pesos', round: 0,
    vars: [
      { symbol: 'A', ascii: 'A', label: 'annual instalment', unit: 'pesos', min: 5000, max: 100000, decimals: 0 },
      { symbol: 'i', ascii: 'i', label: 'interest rate', unit: '%', min: 5, max: 20, decimals: 2 },
      { symbol: 'n', ascii: 'n', label: 'number of payments', unit: '', min: 1, max: 10, decimals: 0 },
      { symbol: 'm', ascii: 'm', label: 'number of deferred periods', unit: '', min: 1, max: 10, decimals: 0 },
    ],
    compute: v => v.A * (1 - Math.pow(1 + v.i / 100, -v.n)) / (v.i / 100) * Math.pow(1 + v.i / 100, -v.m),
    context: 'a banana grower whose loan carries no payment for a grace period before the first instalment falls due',
    verb: 'repays',
    unknownPhrase: 'the present worth of those payments',
    keyConcept: 'A deferred annuity is an ordinary annuity that has been pushed back, so it takes two steps: value the ordinary annuity as if the payments started now, then discount that whole amount by the deferral. The deferral shifts the first payment, not the last, so m is the number of blank periods before payment one and the answer falls as the grace period grows.',
    mistakes: ['Forgetting the deferral factor and valuing the annuity as if it started now', 'Deferring by n periods instead of m', 'Forgetting to divide the annuity factor by the interest rate'],
    distractors: [
      v => v.A * (1 - Math.pow(1 + v.i / 100, -v.n)) / (v.i / 100),
      v => v.A * (1 - Math.pow(1 + v.i / 100, -v.n)) / (v.i / 100) * Math.pow(1 + v.i / 100, -v.n),
      v => v.A * (1 - Math.pow(1 + v.i / 100, -v.n)) * Math.pow(1 + v.i / 100, -v.m),
      v => v.A * (1 - Math.pow(1 + v.i / 100, -v.n)) / (v.i / 100) * Math.pow(1 + v.i / 100, -v.m) / 2,
    ],
  },
  // -------------------------------------------------------------------------
  // Depreciation
  // -------------------------------------------------------------------------
  {
    formulaId: 'a-ee-declining-balance', area: 'A', unknown: 'BV_n',
    formulaText: 'd = 1 − (CL / CO)^(1/L)   then   BV_n = CO (1 − d)ⁿ',
    unit: 'pesos', round: 0,
    vars: [
      { symbol: 'CO', ascii: 'CO', label: 'original cost', unit: 'pesos', min: 100000, max: 2000000, decimals: 0 },
      { symbol: 'CL', ascii: 'CL', label: 'salvage value', unit: 'pesos', min: 20000, max: 90000, decimals: 0 },
      { symbol: 'L', ascii: 'L', label: 'service life', unit: 'yr', min: 8, max: 25, decimals: 0 },
      { symbol: 'n', ascii: 'n', label: 'age', unit: 'yr', min: 1, max: 10, decimals: 0 },
    ],
    compute: v => v.CO * Math.pow(1 - (1 - Math.pow(v.CL / v.CO, 1 / v.L)), v.n),
    context: 'the book value of a hand tractor on the books of a farming cooperative',
    verb: 'carries, on the declining balance method,',
    unknownPhrase: 'the book value at that age',
    keyConcept: 'The declining balance method is built backwards from the target: choose the rate that will have brought the cost down to exactly the salvage value at the end of the life, then apply that rate. The book value never falls below the salvage on purpose — the balance after n years is the cost times the rate to the n, and the salvage is the balance at year L.',
    mistakes: ['Using the double-declining rate 2/L instead of the rate that hits the salvage', 'Counting one year too many or too few', 'Writing the rate as the salvage over the cost instead of the rate that reaches it'],
    distractors: [
      v => v.CO * Math.pow(1 - 2 / v.L, v.n),
      v => v.CO * Math.pow(1 - (1 - Math.pow(v.CL / v.CO, 1 / v.L)), v.n + 1),
      v => v.CO * Math.pow(1 - (1 - Math.pow(v.CL / v.CO, 1 / v.L)), v.n) * 2,
      v => v.CO * Math.pow(1 - (1 - Math.pow(v.CL / v.CO, 1 / v.L)), v.n) / 2,
    ],
  },
  {
    formulaId: 'a-ee-sinking-fund', area: 'A', unknown: 'd',
    formulaText: 'd = (CO − CL) [ i / ((1 + i)ⁿ − 1) ]',
    unit: 'pesos', round: 0,
    vars: [
      { symbol: 'CO', ascii: 'CO', label: 'original cost', unit: 'pesos', min: 100000, max: 2000000, decimals: 0 },
      { symbol: 'CL', ascii: 'CL', label: 'salvage value', unit: 'pesos', min: 20000, max: 90000, decimals: 0 },
      { symbol: 'i', ascii: 'i', label: 'interest rate', unit: '%', min: 3, max: 15, decimals: 2 },
      { symbol: 'n', ascii: 'n', label: 'service life', unit: 'yr', min: 3, max: 20, decimals: 0 },
    ],
    compute: v => (v.CO - v.CL) * ((v.i / 100) / (Math.pow(1 + v.i / 100, v.n) - 1)),
    context: 'a farm association replacing its grain dryer',
    verb: 'deposits each year to accumulate',
    unknownPhrase: 'the annual deposit that replaces the cost',
    keyConcept: 'The sinking fund method separates what is consumed from what is merely set aside: the deposit is a small part of the cost each year, but it earns interest, so the sinking fund factor is always less than a straight one-nth share. The deposit is the depreciable base times the factor, and because the factor is the annuity factor turned upside down, the factor and its inverse both show up as classic wrong answers.',
    mistakes: ['Taking a straight one-nth share of the cost with no interest', 'Charging the depreciable base at the interest rate and ignoring the accumulation', 'Depositing the whole cost rather than the cost less the salvage'],
    distractors: [
      v => (v.CO - v.CL) / v.n,
      v => (v.CO - v.CL) * (v.i / 100),
      v => (v.CO - v.CL) * ((v.i / 100) / (Math.pow(1 + v.i / 100, v.n) - 1)) * 2,
      v => (v.CO - v.CL) * ((v.i / 100) / (Math.pow(1 + v.i / 100, v.n) - 1)) / 2,
    ],
  },
  {
    formulaId: 'a-ee-syd', area: 'A', unknown: 'd_n',
    formulaText: 'd_n = (CO − CL) [ (L − n + 1) / ΣYears ]   with   ΣYears = L(L+1)/2',
    unit: 'pesos', round: 0,
    vars: [
      { symbol: 'CO', ascii: 'CO', label: 'original cost', unit: 'pesos', min: 100000, max: 2000000, decimals: 0 },
      { symbol: 'CL', ascii: 'CL', label: 'salvage value', unit: 'pesos', min: 20000, max: 90000, decimals: 0 },
      { symbol: 'L', ascii: 'L', label: 'service life', unit: 'yr', min: 20, max: 40, decimals: 0 },
      { symbol: 'n', ascii: 'n', label: 'year number', unit: '', min: 1, max: 20, decimals: 0 },
    ],
    compute: v => (v.CO - v.CL) * ((v.L - v.n + 1) / (v.L * (v.L + 1) / 2)),
    context: 'a packing house writing off its cold storage building by the sum-of-the-years-digits method',
    verb: 'claims',
    unknownPhrase: 'the depreciation it claims in that year',
    keyConcept: 'Sum-of-the-years-digits puts the largest charge on the earliest years and spreads the rest so the charges add up to the depreciable base exactly: the years 1 to L sum to L(L+1)/2, and year n takes the share L − n + 1 of them. It is the accelerated method of choice on a building or a plant that does its best work while new, and the whole point is that the digits, not the years, are the divisor.',
    mistakes: ['Summing the years as L(L−1)/2 instead of L(L+1)/2', 'Dropping the factor of two and dividing by L(L+1)', 'Dividing by the useful life instead of by the sum of the years'],
    // Ratios to the answer are 1, (L+1)/(L-1) = 1.05..1.11, exactly 2, and
    // (L+1)/2 = 10.5..20.5, so no two options can ever coincide. The obvious
    // straight-line distractor had to go: it equals the sum-of-years-digits
    // answer whenever L = 2n - 1, which is half of all samples.
    distractors: [
      v => (v.CO - v.CL) * ((v.L - v.n + 1) / (v.L * (v.L - 1) / 2)),
      v => (v.CO - v.CL) * ((v.L - v.n + 1) / (v.L * (v.L + 1))),
      v => (v.CO - v.CL) * ((v.L - v.n + 1) / v.L),
      v => (v.CO - v.CL) * ((v.L - v.n + 1) / (v.L * (v.L + 1) / 2)) / 2,
    ],
  },
  {
    formulaId: 'a-ee-service-output', area: 'A', unknown: 'd',
    formulaText: 'd = (CO − CL) / (total units of output)',
    unit: 'pesos/unit', round: 2,
    vars: [
      { symbol: 'CO', ascii: 'CO', label: 'original cost', unit: 'pesos', min: 100000, max: 2000000, decimals: 0 },
      { symbol: 'CLs', ascii: 'CLs', label: 'salvage value as a percentage of the original cost', unit: '%', min: 10, max: 40, decimals: 0 },
      { symbol: 'U', ascii: 'U', label: 'expected total output over the asset life', unit: 'units', min: 5000, max: 500000, decimals: 0 },
    ],
    compute: v => (v.CO - (v.CO * v.CLs) / 100) / v.U,
    context: 'a milling operation that depreciates its mill on the volume it expects to grind',
    verb: 'carries',
    unknownPhrase: 'the depreciation per unit of output',
    keyConcept: 'The service-output method writes off an asset against the work it actually does rather than against the calendar, so the rate is the depreciable base spread over the expected lifetime output. A machine that will grind far more over its life carries a smaller charge per kilo, which is the whole reason a contractor prefers it to a straight line on a high-hour machine.',
    mistakes: ['Charging the whole cost and ignoring the salvage', 'Using the salvage value as the depreciable base', 'Dividing the salvage by the output instead of the cost less the salvage'],
    distractors: [
      v => v.CO / v.U,
      v => (v.CO * v.CLs) / 100 / v.U,
      v => (v.CO - (v.CO * v.CLs) / 100) / v.U * 2,
      v => (v.CO - (v.CO * v.CLs) / 100) / v.U / 2,
    ],
  },
  // -------------------------------------------------------------------------
  // Cost, revenue and profit
  // -------------------------------------------------------------------------
  {
    formulaId: 'a-ee-fixed-cost-total-profit', area: 'A', unknown: 'Profit',
    formulaText: 'TC = CF + vD   then   TR = Price × Units   then   Profit = TR − TC',
    unit: 'pesos', round: 0,
    vars: [
      { symbol: 'CF', ascii: 'CF', label: 'fixed cost', unit: 'pesos', min: 200, max: 1500, decimals: 0 },
      { symbol: 'v', ascii: 'v', label: 'variable cost', unit: 'pesos/unit', min: 5, max: 40, decimals: 2 },
      { symbol: 'D', ascii: 'D', label: 'output produced and sold', unit: 'units', min: 100, max: 5000, decimals: 0 },
      { symbol: 'p', ascii: 'p', label: 'selling price', unit: 'pesos/unit', min: 60, max: 200, decimals: 0 },
    ],
    // Kept deliberately tight so the margin over the variable cost always exceeds
    // the fixed cost and the profit can never come out negative: (60 - 40) x 100
    // = 2,000 against a fixed cost of at most 1,500.
    compute: v => v.p * v.D - (v.CF + v.v * v.D),
    context: 'a roadside mango stall that sells everything it produces at one price',
    verb: 'budgets',
    unknownPhrase: 'the profit for the season',
    keyConcept: 'Total cost is the sum of the two kinds of expense, and the split matters only when the volume changes: the fixed cost is owed whatever is produced, and the variable cost is owed per unit. Profit is what the revenue at the selling price leaves after both, so a stall can be busy and still lose money if the margin per unit is thinner than the fixed cost it carries.',
    mistakes: ['Reporting the total cost as though it were the profit', 'Leaving out the fixed cost because every unit looked profitable', 'Forgetting that the variable cost applies to every unit produced'],
    distractors: [
      v => v.CF + v.v * v.D,
      v => (v.p * v.D - (v.CF + v.v * v.D)) * 2,
      v => (v.p * v.D - (v.CF + v.v * v.D)) / 2,
      v => (v.p * v.D - (v.CF + v.v * v.D)) * 3,
    ],
  },
];
