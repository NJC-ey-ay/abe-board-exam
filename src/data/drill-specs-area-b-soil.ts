// Area B drill specs, part 1 of 6: Soil-Water Relationships.
//
// Every `compute` implements the handbook expression in src/data/formulas.ts and
// has a hand-verified case in scripts/data/golden-cases.json. Settings are
// Philippine: a rice paddy soil sample from a tillage pan in Iloilo, a canal
// command area, an auctioned agricultural lease.
//
// This batch is the three-phase soil system, and the constants are pinned so the
// walkthroughs multiply out and the ratios stay physical:
//
//   Three phases   volume  V_T = V_A + V_W + V_S, so the void volume is
//                  V_V = V_A + V_W and the solid volume is V_S = V_T - V_V.
//                  Weight follows the same split: W_T = W_A + W_W + W_S.
//   Density of water D_w = 1.00 g/cm3, sampled 0.98..1.02 to cover the small
//                  variation with temperature. Every specific gravity below is
//                  measured against it, never against 1.0 written in directly.
//   Particle density D_p = 2.65 g/cm3 for quartz, sampled 2.55..2.70. This is
//                  the mass of solids per unit volume of SOLIDS, so it never
//                  varies with field compaction.
//   Bulk density    D_b = 1.20..1.60 g/cm3, which is the mass of dry soil per
//                  unit volume of the BULK sample including pores. It exceeds
//                  porosity and is what a penetrometer or core sampler reads.
//   Porosity n      dimensionless, so the two input volumes carry the
//                  conversions instead: cm3 is offered in in3 and mL.
//
// Variable ranges are chosen so every ratio stays physical over the whole
// declared interval, because DrillSpec samples each variable independently and
// nothing enforces an ordering between them. Void volume is therefore capped
// below the total volume, water weight below total weight, and the two
// specific-gravity numerators are held near their real values rather than
// swept widely. A range that let the numerator exceed the denominator would
// manufacture a porosity above 1 or a moisture content above 100%.
//
// The weight spec is the one place where a textbook mistake is not offered as a
// distractor: the weight of air is so small next to water and solids that
// dropping it changes the total by less than a gram, so it could not be
// distinguished from the correct answer. It is recorded in `mistakes` instead.
import type { DrillSpec } from './formula-drills';

export const areaBSoilSpecs: DrillSpec[] = [
  {
    formulaId: 'b-soil-total-volume', area: 'B', unknown: 'V_T',
    formulaText: 'V_T = V_A + V_W + V_S',
    unit: 'cm³', round: 0,
    vars: [
      { symbol: 'V_A', ascii: 'VA', label: 'core air space', unit: 'cm³', min: 100, max: 500, decimals: 0 },
      { symbol: 'V_W', ascii: 'VW', label: 'core water volume', unit: 'cm³', min: 200, max: 900, decimals: 0 },
      { symbol: 'V_S', ascii: 'VS', label: 'core solid volume', unit: 'cm³', min: 1000, max: 2000, decimals: 0 },
    ],
    conversions: [
      { ascii: 'VS', unit: 'mL', factor: 1, fromUnit: 'cm³' },
      { ascii: 'VW', unit: 'in³', factor: 0.0610237, fromUnit: 'cm³' },
    ],
    compute: v => v.VA + v.VW + v.VS,
    context: 'an undisturbed core taken from the plough pan of a rice paddy in Iloilo before the next land preparation',
    verb: 'was found to contain',
    unknownPhrase: 'the total bulk volume of the core',
    keyConcept: 'A soil sample is a three-phase system, and its total volume is the sum of all three: the pore space is split between air and water, and the rest is solid particles. The three are measured on one undisturbed core, because any compaction between the core sampler and the volume reading shrinks the pore space and inflates the bulk density computed from it. Total volume is what the sample occupies, which is why it is larger than the volume of the particles alone.',
    mistakes: ['Adding only two of the three phases', 'Measuring the core volume after air-drying, which collapses the pores', 'Using the volume of the container rather than of the soil'],
    // Dropping a phase leaves 0.55..0.96 of the answer, and doubling or halving
    // sits at 2 and 0.5, so the four never crowd each other.
    distractors: [
      v => v.VW + v.VS,
      v => v.VA + v.VS,
      v => (v.VA + v.VW + v.VS) * 2,
      v => (v.VA + v.VW + v.VS) / 2,
    ],
  },
  {
    formulaId: 'b-soil-volume-of-voids', area: 'B', unknown: 'V_V',
    formulaText: 'V_V = V_A + V_W',
    unit: 'cm³', round: 0,
    vars: [
      { symbol: 'V_A', ascii: 'VA', label: 'core air space', unit: 'cm³', min: 100, max: 600, decimals: 0 },
      { symbol: 'V_W', ascii: 'VW', label: 'core water volume', unit: 'cm³', min: 150, max: 700, decimals: 0 },
    ],
    conversions: [
      { ascii: 'VA', unit: 'mL', factor: 1, fromUnit: 'cm³' },
      { ascii: 'VW', unit: 'in³', factor: 0.0610237, fromUnit: 'cm³' },
    ],
    compute: v => v.VA + v.VW,
    context: 'a saturated core from the root zone of a sugarcane block in Negros Occidental, drained and weighed to find how much pore space it has',
    verb: 'was measured to have',
    unknownPhrase: 'the volume of voids in the core',
    keyConcept: 'Void volume is the pore space of the soil, and it is the sum of the air and water volumes because both occupy the same gaps between particles. This is the numerator of both porosity and void ratio, so it is the number that has to come out of a moisture-characterisation test. Saturation does not change the void volume, only how it is divided between the air and water parts.',
    mistakes: ['Counting the solid particles as void space', 'Using the volume of water alone', 'Treating a saturated sample as having no voids'],
    // Each single-phase value is 0.125..0.875 of the answer; 1.5 and 0.5 are the
    // remaining two.
    distractors: [
      v => v.VW,
      v => v.VA,
      v => (v.VA + v.VW) * 1.5,
      v => (v.VA + v.VW) / 2,
    ],
  },
  {
    formulaId: 'b-soil-weight', area: 'B', unknown: 'W_T',
    formulaText: 'W_T = W_A + W_W + W_S',
    unit: 'g', round: 0,
    vars: [
      { symbol: 'W_A', ascii: 'WA', label: 'core air weight', unit: 'g', min: 0.1, max: 0.5, decimals: 1 },
      { symbol: 'W_W', ascii: 'WW', label: 'core water weight', unit: 'g', min: 300, max: 700, decimals: 0 },
      { symbol: 'W_S', ascii: 'WS', label: 'core oven-dry solid weight', unit: 'g', min: 800, max: 1400, decimals: 0 },
    ],
    conversions: [
      { ascii: 'WS', unit: 'kg', factor: 0.001, fromUnit: 'g' },
      { ascii: 'WW', unit: 'lb', factor: 0.00220462, fromUnit: 'g' },
    ],
    compute: v => v.WA + v.WW + v.WS,
    context: 'a soil core from a rented agricultural parcel in Batangas that was oven-dried at 105 °C for 24 hours and reweighed',
    verb: 'weighs, in total,',
    unknownPhrase: 'the total weight of the soil sample',
    keyConcept: 'Weight obeys the same three-phase split as volume: total weight is the weight of the air, the water and the solid particles. This is the figure that goes on the top of a moisture-content calculation, which is why the oven-drying step matters - any water left in the sample inflates the total and makes every moisture reading too low. Air is the phase most often left out, and here that omission is invisible.',
    mistakes: [
      'Leaving out the weight of air, which changes the total by less than half a gram and cannot be seen in the answer',
      'Weighing the sample before oven-drying and calling that the total',
      'Adding the water weight twice, once for moisture and once for the three-phase sum',
    ],
    // Ranges are chosen so water is a real share of the total, which is what
    // makes the arithmetic worth asking. Dropping water gives 1.27..1.87,
    // counting it twice gives 0.68..0.85, and 0.75 and 1.2 sit clear of both.
    distractors: [
      v => v.WS + v.WA,
      v => v.WS + 2 * v.WW,
      v => (v.WS + v.WW) * 2,
      v => (v.WA + v.WW + v.WS) * 0.75,
    ],
  },
  {
    formulaId: 'b-porosity', area: 'B', unknown: 'n',
    formulaText: 'n = V_V / V_T = 1 − D_b/D_p = 1 − A_s/R_s',
    unit: '', round: 3,
    vars: [
      { symbol: 'V_V', ascii: 'VV', label: 'core void volume', unit: 'cm³', min: 300, max: 900, decimals: 0 },
      { symbol: 'V_T', ascii: 'VT', label: 'core total volume', unit: 'cm³', min: 1000, max: 2400, decimals: 0 },
    ],
    conversions: [
      { ascii: 'VV', unit: 'in³', factor: 0.0610237, fromUnit: 'cm³' },
      { ascii: 'VT', unit: 'mL', factor: 1, fromUnit: 'cm³' },
    ],
    // V_V is capped below V_T across the whole range so n can never exceed 1.
    compute: v => v.VV / v.VT,
    context: 'a soil core from the root zone of an onion farm in Nueva Ecija that was trimmed and measured for pore space',
    verb: 'has a porosity of',
    unknownPhrase: 'the porosity of the soil',
    keyConcept: 'Porosity is the fraction of the bulk volume that is pore space, so it is void volume over total volume and lands between 0 and 1. The other two forms are the same number reached by densities: 1 − D_b/D_p and 1 − A_s/R_s, both of which say porosity is the share of the bulk volume NOT taken by solids. A cultivated agricultural soil sits near 0.3 to 0.5, and a compacted subsoil lower, because the pores are squeezed rather than lost.',
    mistakes: ['Reporting the solid fraction 1 − n, which is not porosity', 'Inverting to V_T/V_V, which is well above 1', 'Dividing the two densities instead of subtracting from 1'],
    // The complement 1 − n is 0.11..7 of n; the inverse V_T/V_V is 1/n, which
    // against an answer of n is 1/n^2 = 1.2..64; 1.15 is the odd one out.
    // Squaring the inverse was the earlier attempt and is 1/n^3, which reaches
    // 512x at n = 0.125 and was caught by the option-plausibility check.
    distractors: [
      v => 1 - v.VV / v.VT,
      v => v.VT / v.VV,
      v => (v.VV / v.VT) * 1.15,
      v => 1 - v.VV / v.VT + 0.1,
    ],
  },
  {
    formulaId: 'b-moisture-content-wet-basis', area: 'B', unknown: 'MC_wb',
    formulaText: 'MC_wb = (W_W / W_T) × 100',
    unit: '%', round: 1,
    vars: [
      { symbol: 'W_W', ascii: 'WW', label: 'sample water weight', unit: 'g', min: 20, max: 150, decimals: 0 },
      { symbol: 'W_T', ascii: 'WT', label: 'sample total wet weight', unit: 'g', min: 200, max: 500, decimals: 0 },
    ],
    conversions: [
      { ascii: 'WW', unit: 'g', factor: 1, fromUnit: 'g' },
      { ascii: 'WT', unit: 'kg', factor: 0.001, fromUnit: 'g' },
    ],
    // W_W is capped below W_T so the content can never exceed 100%.
    compute: v => (v.WW / v.WT) * 100,
    context: 'a moist grab sample from a field capacity check on a vegetable farm in Benguet',
    verb: 'has a moisture content on a wet basis of',
    unknownPhrase: 'the moisture content of the sample on a wet basis',
    keyConcept: 'Wet-basis moisture content divides the weight of water by the TOTAL wet weight of the sample, so it is the fraction of what you weighed that was water and it can never exceed 100%. Dry basis divides the same water by the oven-dry weight instead, which is always the larger number. The dry-basis value is reachable from the wet one by dividing by 1 minus the wet fraction, and a lab that reports 14% when the other reports 16.7% has not made an error, only changed bases.',
    mistakes: [
      'Dividing by the dry weight, which silently changes the basis',
      'Forgetting the x100 and reporting a fraction below 1, which is exactly 1% of the answer',
      'Subtracting the water instead of dividing',
    ],
    // Dry basis is 1/(1 − r) = 1.04..4 of the answer; the solid fraction is
    // (1 − r)/r = 0.33..24; 0.85 and 1.15 are the remaining pair.
    distractors: [
      v => (v.WW / (v.WT - v.WW)) * 100,
      v => ((v.WT - v.WW) / v.WT) * 100,
      v => (v.WW / v.WT) * 100 * 0.85,
      v => (v.WW / v.WT) * 100 * 1.15,
    ],
  },
  {
    formulaId: 'b-particle-density', area: 'B', unknown: 'D_p',
    formulaText: 'D_p = W_S / V_S',
    unit: 'g/cm³', round: 2,
    vars: [
      { symbol: 'W_S', ascii: 'WS', label: 'sample oven-dry solid weight', unit: 'g', min: 250, max: 350, decimals: 0 },
      { symbol: 'V_S', ascii: 'VS', label: 'sample solid volume', unit: 'cm³', min: 95, max: 135, decimals: 0 },
    ],
    conversions: [
      { ascii: 'WS', unit: 'g', factor: 1, fromUnit: 'g' },
      { ascii: 'VS', unit: 'mL', factor: 1, fromUnit: 'cm³' },
    ],
    // Ranges are narrow so D_p lands on 1.85..3.68 around the true 2.65 for
    // quartz; a wide sweep here would invite non-physical densities.
    compute: v => v.WS / v.VS,
    context: 'the solid fraction of a paddy soil sample isolated by water displacement in a soil testing laboratory in Los Baños',
    verb: 'has a particle density of',
    unknownPhrase: 'the particle density of the soil',
    keyConcept: 'Particle density is the mass of dry solids per unit volume of the solids themselves, with the pore space excluded, which is why it is measured by displacement in a liquid and comes out near 2.65 g/cm3 for quartz and 2.70 for calcite. It is a property of the minerals, not of the field: compaction changes bulk density and leaves particle density untouched. Dividing by the bulk volume instead gives bulk density, a different number that changes on every pass of a tractor.',
    mistakes: ['Dividing by the bulk volume, which returns bulk density', 'Using the wet weight of the particles', 'Inverting the ratio'],
    // 1/D_p^2 is 0.074..0.29; the three multiples sit at 0.85, 1.15 and 1.4.
    distractors: [
      v => v.VS / v.WS,
      v => (v.WS / v.VS) * 1.15,
      v => (v.WS / v.VS) * 0.85,
      v => (v.WS / v.VS) * 1.4,
    ],
  },
  {
    formulaId: 'b-void-ratio', area: 'B', unknown: 'e',
    formulaText: 'e = V_V / V_S',
    unit: '', round: 3,
    vars: [
      { symbol: 'V_V', ascii: 'VV', label: 'core void volume', unit: 'cm³', min: 300, max: 900, decimals: 0 },
      { symbol: 'V_S', ascii: 'VS', label: 'core solid volume', unit: 'cm³', min: 800, max: 1600, decimals: 0 },
    ],
    conversions: [
      { ascii: 'VV', unit: 'in³', factor: 0.0610237, fromUnit: 'cm³' },
      { ascii: 'VS', unit: 'mL', factor: 1, fromUnit: 'cm³' },
    ],
    compute: v => v.VV / v.VS,
    context: 'a soil core from a vegetable field in La Trinidad whose pore space was measured against its solid volume',
    verb: 'has a void ratio of',
    unknownPhrase: 'the void ratio of the soil',
    keyConcept: 'Void ratio divides pore space by the volume of the solids, not by the total volume, so unlike porosity it is not bounded by 1 and a heavily compacted soil can exceed it. Most cultivated soils sit between 0.3 and 1.0, and the value rises as the soil is compressed because the same pore space is squeezed against the same solids. Porosity and void ratio are two views of one packing: n = e/(1 + e), and e = n/(1 − n).',
    mistakes: ['Dividing by the total volume, which returns porosity and is always below 1', 'Inverting the ratio to get V_S/V_V', 'Using the bulk volume as the solid volume'],
    // 1/e^2 is 0.79..28.4; porosity substituted for the answer is 1/(1 + e) =
    // 0.47..0.84; 0.85 and 1.15 are the remaining pair.
    distractors: [
      v => v.VS / v.VV,
      v => v.VV / (v.VV + v.VS),
      v => (v.VV / v.VS) * 0.85,
      v => (v.VV / v.VS) * 1.15,
    ],
  },
  {
    formulaId: 'b-apparent-specific-gravity', area: 'B', unknown: 'A_s',
    formulaText: 'A_s = D_b / D_w',
    unit: '', round: 3,
    vars: [
      { symbol: 'D_b', ascii: 'Db', label: 'sample bulk density', unit: 'g/cm³', min: 1.2, max: 1.6, decimals: 2 },
      { symbol: 'D_w', ascii: 'Dw', label: 'water density', unit: 'g/cm³', min: 0.98, max: 1.02, decimals: 2 },
    ],
    conversions: [
      { ascii: 'Db', unit: 'kg/m³', factor: 1000, fromUnit: 'g/cm³' },
      { ascii: 'Dw', unit: 'kg/m³', factor: 1000, fromUnit: 'g/cm³' },
    ],
    compute: v => v.Db / v.Dw,
    context: 'a core from a corn field in Isabela whose dry mass was divided by its bulk volume and expressed against the density of water',
    verb: 'gives an apparent specific gravity of',
    unknownPhrase: 'the apparent specific gravity of the soil',
    keyConcept: 'Apparent specific gravity is bulk density expressed against water, so it inherits every pore space in the sample and always exceeds 1. Because the ratio is to the density of water rather than to a written 1.0, it moves slightly with water temperature, which is why the divisor is sampled around 1.00 rather than fixed. Dividing real specific gravity by apparent, and subtracting that from 1, gives porosity directly.',
    mistakes: ['Adding the two densities instead of dividing', 'Using the dry mass over the solid volume, which returns particle density', 'Dividing by the bulk density instead of by the density of water'],
    // 1/A_s^2 is 0.375..0.72; adding the densities gives 1.58..1.89; 0.85 and
    // 1.15 are the remaining pair.
    distractors: [
      v => v.Dw / v.Db,
      v => v.Db + v.Dw,
      v => (v.Db / v.Dw) * 0.85,
      v => (v.Db / v.Dw) * 1.15,
    ],
  },
  {
    formulaId: 'b-real-specific-gravity', area: 'B', unknown: 'R_s',
    formulaText: 'R_s = D_p / D_w',
    unit: '', round: 3,
    vars: [
      { symbol: 'D_p', ascii: 'Dp', label: 'sample particle density', unit: 'g/cm³', min: 2.55, max: 2.7, decimals: 2 },
      { symbol: 'D_w', ascii: 'Dw', label: 'water density', unit: 'g/cm³', min: 0.98, max: 1.02, decimals: 2 },
    ],
    conversions: [
      { ascii: 'Dp', unit: 'kg/m³', factor: 1000, fromUnit: 'g/cm³' },
      { ascii: 'Dw', unit: 'kg/m³', factor: 1000, fromUnit: 'g/cm³' },
    ],
    compute: v => v.Dp / v.Dw,
    context: 'the solid fraction of a soil sample from a bauxite-prospecting pit in Zamboanga del Sur, compared against the density of water',
    verb: 'gives a real specific gravity of',
    unknownPhrase: 'the real specific gravity of the soil',
    keyConcept: 'Real specific gravity is particle density over the density of water, so it describes the minerals with the pore space left out and lands near 2.65 for quartz, above that for heavier minerals such as calcite or garnet, and well below for organic or pumiceous soils. It is the fixed reference against which apparent specific gravity is judged: the gap between the two is the pore space, and one minus their ratio is porosity.',
    mistakes: ['Using the bulk density in place of particle density, which returns apparent specific gravity', 'Inverting the ratio', 'Adding the two densities'],
    // 1/R_s^2 is 0.132..0.16; adding the densities gives 1.34..1.43; 0.85 and
    // 1.15 are the remaining pair.
    distractors: [
      v => v.Dw / v.Dp,
      v => v.Dp + v.Dw,
      v => (v.Dp / v.Dw) * 0.85,
      v => (v.Dp / v.Dw) * 1.15,
    ],
  },
];
