import type { ChainSpec, DecisionItem, DrillSpec, MultiStepSpec } from './formula-drills';

export interface DrillEnrichment {
  context?: string;
  unknownPhrase?: string;
  verb?: string;
  decision?: DecisionItem[];
  multiStep?: MultiStepSpec;
  chain?: ChainSpec;
}

// Per-formula board-exam content enrichment: word-problem scenarios, natural-language
// unknown phrases, and decision/adequacy questions. Only PAES standards verified to
// exist in paes-data.ts are cited. Non-PAES adequacy judgments are worded generically.
export const drillContent: Record<string, DrillEnrichment> = {
  // ---------------------------------------------------------------------------
  // AREA A: Power, Energy & Machinery
  // ---------------------------------------------------------------------------
  'a-efc': {
    context: 'a farmer operating a self-propelled combine harvester',
    unknownPhrase: 'the effective field capacity',
    multiStep: {
      firstUnit: 'ha/h',
      firstPhrase: 'the effective field capacity',
      secondUnit: 'ha',
      secondPhrase: 'the area that can be harvested in an 8-hour working day',
      second: stage1 => stage1 * 8,
      readError: (v, c) => c * 1.2,
    },
    decision: [
      {
        scenario:
          'A harvester is being evaluated to determine whether it can be certified and sold for field use.',
        question:
          'The manufacturer wants to certify the machine as meeting its rated effective field capacity under real field conditions. Which approach is most correct?',
        options: [
          'Certify the machine only if its measured effective field capacity meets or exceeds the rated value under field conditions',
          'Certify based only on the theoretical field capacity, ignoring actual efficiency',
          'Certify at peak instantaneous capacity regardless of time losses',
          'Certify without testing field efficiency',
        ],
        correct: 0,
        rationale:
          'Effective (actual) field capacity must be evaluated under field conditions with accounted time losses; a machine is only acceptable if measured effective capacity meets its rated value.',
      },
    ],
  },
  'a-tfc': {
    context: 'a self-propelled tractor pulling an implement',
    unknownPhrase: 'the theoretical field capacity',
    decision: [
      {
        scenario: 'Two implements are being compared for field capacity at the assign evaluation.',
        question:
          'Theoretical field capacity reflects ideal operation with no time losses. A contractor plans operations and must decide how to schedule a job realistically. Which consideration is most appropriate?',
        options: [
          'Use effective field capacity for realistic scheduling because it accounts for time losses',
          'Use theoretical field capacity for scheduling since it is always attainable',
          'Ignore field capacity when scheduling',
          'Schedule based only on engine power',
        ],
        correct: 0,
        rationale:
          'Theoretical capacity assumes 100% efficiency and no time losses; realistic scheduling must use effective (actual) capacity that accounts for turning, loading, and downtime.',
      },
    ],
  },
  'a-field-efficiency': {
    context: 'a field operation being time-studied',
    unknownPhrase: 'the field efficiency',
  },
  'a-multirow-efc': {
    context: 'a multi-row rice transplanter completing a paddy field',
    unknownPhrase: 'the effective field capacity',
  },
  'a-harvest-output': {
    context: 'a harvester unit working through a crop',
    unknownPhrase: 'the total harvest output',
  },
  'a-machine-time': {
    context: 'a tractor and its complete attachment in a field operation',
    unknownPhrase: 'the machine operating time required',
    decision: [
      {
        scenario: 'An operator must finish a large field with limited available hours.',
        question:
          'A given field area must be worked, and the effective field capacity is known. To judge whether the job can be finished within a day, the operator most needs to rely on:',
        options: [
          'The machine operating time (area ÷ effective capacity) compared with available working hours',
          'The theoretical field capacity alone',
          'The drawbar power alone',
          'The fuel capacity of the machine',
        ],
        correct: 0,
        rationale:
          'Time = area ÷ effective capacity. Comparing this required time against the available working hours tells whether the job can be completed.',
      },
    ],
  },
  'a-boom-application': {
    context: 'a sprayer boom applying a chemical over a field',
    unknownPhrase: 'the application rate',
  },
  'a-fuel-per-area': {
    context: 'a tractor working a parcel of land',
    unknownPhrase: 'the fuel consumption per unit area',
  },
  'a-thresher-capacity': {
    context: 'a mechanical rice thresher processing harvested palay',
    unknownPhrase: 'the thresher capacity',
    multiStep: {
      firstUnit: 'kg/h',
      firstPhrase: 'the thresher capacity',
      secondUnit: 'kg',
      secondPhrase: 'the total grain that the thresher can process in an 8-hour shift',
      second: stage1 => stage1 * 8,
      readError: (v, c) => c * 0.9,
    },
    decision: [
      {
        scenario: 'A rice thresher is being checked against its rated grain output capacity.',
        question:
          'Per PAES 204:2015 (Mechanical Rice Thresher, Specifications), a mechanical rice thresher is evaluated for capacity and loss. If a test shows high grain output per hour, the machine must ALSO meet which requirement to be acceptable?',
        options: [
          'Total machine loss of not more than 3%',
          'Zero loss is required',
          'Machine loss is not considered',
          'Only purity matters, not loss',
        ],
        correct: 0,
        rationale:
          'PAES 204 sets capacity along with a maximum total machine loss of 3% and a minimum threshing recovery of 97%; both capacity and loss must be satisfied.',
        paes: 'PAES 204:2015',
      },
    ],
  },
  'a-threshing-loss': {
    context: 'a threshing operation being loss-tested',
    unknownPhrase: 'the total threshing loss',
    decision: [
      {
        scenario: 'A threshing test measures four loss components.',
        question:
          'Per PAES 205 methods of testing a mechanical rice thresher, total machine loss is the sum of the individual loss components. If blower, separation, unthreshed and scattering losses are each measured, the total machine loss is best characterized as:',
        options: [
          'The sum of all the individual loss components',
          'Only the blower loss',
          'Only the unthreshed grain loss',
          'The largest single loss measured',
        ],
        correct: 0,
        rationale:
          'Total machine loss = blower + separation + unthreshed + scattering losses, summed per PAES 205.',
        paes: 'PAES 205',
      },
    ],
  },
  'a-loss-percent': {
    context: 'a thresher performance evaluation',
    unknownPhrase: 'the percent grain loss',
  },
  'a-threshing-efficiency': {
    context: 'a thresher being tested for separation performance',
    unknownPhrase: 'the threshing efficiency',
    decision: [
      {
        scenario: 'A rice thresher is certified against performance criteria.',
        question:
          'Per PAES 204:2015, a mechanical rice thresher must deliver a minimum threshing recovery of 97%. A machine tested at 96.2% recovery:',
        options: [
          'Fails to meet the minimum requirement of 97% and should not be certified',
          'Meets the requirement since it is above 90%',
          'Always acceptable because it exceeds 99%',
          'Cannot be evaluated without threshing efficiency',
        ],
        correct: 0,
        rationale:
          'PAES 204 requires minimum threshing recovery of 97%; 96.2% is below the minimum and fails certification.',
        paes: 'PAES 204:2015',
      },
    ],
  },
  'a-drawbar-power': {
    context: 'a tractor pulling an implement in the field',
    unknownPhrase: 'the drawbar power',
    decision: [
      {
        scenario: 'Drawbar power is being measured for a tillage operation.',
        question:
          'Drawbar power depends on the draft force and the travel speed of the tractor. To maximize useful drawbar power for a given pull, the operator should:',
        options: [
          'Operate at the travel speed appropriate to the draft force to maximize the F × S product',
          'Always reduce speed to increase pull',
          'Keep the transmission in the lowest gear regardless of draft',
          'Ignore travel speed entirely',
        ],
        correct: 0,
        rationale:
          'Drawbar power = draft × speed ÷ 3.6. Matching speed to the draft load maximizes useful drawbar power delivered.',
      },
    ],
  },
  'a-dbhp': {
    context: 'a tractor developing drawbar power on a surfaced test track',
    unknownPhrase: 'the drawbar horsepower',
  },
  'a-dbhp-from-bp': {
    context: 'a tractor converting engine brake power to the drawbar',
    unknownPhrase: 'the drawbar output power',
  },
  'a-pto-power': {
    context: 'a tractor driving an implement through its power take-off',
    unknownPhrase: 'the PTO power delivered',
  },
  'a-indicated-power': {
    context: 'an internal combustion engine cylinder under test',
    unknownPhrase: 'the indicated power',
  },
  'a-brake-power': {
    context: 'an engine tested on a dynamometer',
    unknownPhrase: 'the brake power',
  },
  'a-mech-efficiency': {
    context: 'an engine whose power is measured at two points in the drive train',
    unknownPhrase: 'the mechanical efficiency',
  },
  'a-effective-pull': {
    context: 'a tractor hauling a trailed load',
    unknownPhrase: 'the net (effective) pull',
  },
  'a-power-torque': {
    context: 'an engine shaft delivering rotational power',
    unknownPhrase: 'the torque developed',
  },
  'a-displacement': {
    context: 'a multi-cylinder engine whose cylinder dimensions are specified',
    unknownPhrase: 'the engine displacement',
  },
  'a-compression-ratio': {
    context: 'an engine cylinder with specified swept and clearance volumes',
    unknownPhrase: 'the compression ratio',
  },
  'a-displacement-from-cr': {
    context: 'an engine whose clearance volume and compression ratio are known',
    unknownPhrase: 'the displacement volume',
  },
  'a-clearance-volume': {
    context: 'an engine cylinder of known total and displacement volumes',
    unknownPhrase: 'the clearance volume',
  },
  'a-fuel-volume': {
    context: 'an engine consuming fuel at a rated power output',
    unknownPhrase: 'the volumetric fuel consumption',
  },
  'a-sfc': {
    context: 'an engine whose fuel use is measured over a test run',
    unknownPhrase: 'the specific fuel consumption',
  },
  'a-heat-input': {
    context: 'an engine supplied with a measured amount of fuel energy',
    unknownPhrase: 'the heat input rate',
  },
  'a-thermal-eff': {
    context: 'an engine converting heat into work',
    unknownPhrase: 'the thermal efficiency',
  },
  'a-overall-efficiency': {
    context: 'an engine used in a complete driveline',
    unknownPhrase: 'the overall efficiency',
  },
  'a-powertrain': {
    context: 'a powertrain transmitting power through several stages',
    unknownPhrase: 'the overall transmission efficiency',
  },
  'a-draft': {
    context: 'a tillage implement being pulled through the soil',
    unknownPhrase: 'the implement draft',
  },
  'a-traction': {
    context: 'a tractor developing traction on a field surface',
    unknownPhrase: 'the tractive force developed',
  },
  'a-hydraulic-pump': {
    context: 'a hydraulic pump on an implement system',
    unknownPhrase: 'the hydraulic power output',
  },
  'a-hydrostatic': {
    context: 'a hydrostatic drive system transmitting power',
    unknownPhrase: 'the hydrostatic power',
  },
  'a-continuity': {
    context: 'a fluid flowing through a constricting conduit',
    unknownPhrase: 'the flow velocity at the constriction',
  },
  'a-pump-power': {
    context: 'a water pump lifting water to a field',
    unknownPhrase: 'the pump power required',
    decision: [
      {
        scenario: 'A centrifugal pump is selected to irrigate a field at a required discharge and head.',
        question:
          'Per PAES 114:2000 (Centrifugal Pump, Specifications), pump efficiency is the ratio of water power output to shaft power input, and capacity is the discharge at maximum efficiency. When selecting a pump to meet a specific discharge and head, the governing criterion is:',
        options: [
          'The pump must meet the required discharge and total head with acceptable efficiency',
          'Only the impeller type matters, not the head',
          'Only the suction pipe length matters',
          'The pump speed must be at maximum regardless of head',
        ],
        correct: 0,
        rationale:
          'PAES 114 specifies capacity (discharge) and total head along with efficiency; a pump is acceptable only if it delivers the required discharge at the required head.',
        paes: 'PAES 114:2000',
      },
    ],
  },
  'a-flow-volume-time': {
    context: 'a channel or pipe conveying a measured flow',
    unknownPhrase: 'the volume delivered over time',
  },
  'a-fourier': {
    context: 'a steady one-dimensional heat conduction situation',
    unknownPhrase: 'the heat conducted',
  },
  'a-cop': {
    context: 'a refrigeration cycle operating between specified temperatures',
    unknownPhrase: 'the coefficient of performance',
  },
  'a-carnot': {
    context: 'an ideal heat engine cycle',
    unknownPhrase: 'the Carnot efficiency',
  },
  'a-ndvi': {
    context: 'a crop being monitored by remote sensing',
    unknownPhrase: 'the normalized difference vegetation index',
  },
  'a-tipping-bucket': {
    context: 'a recording rain gauge collecting precipitation',
    unknownPhrase: 'the rainfall depth recorded',
  },
  'a-dew-point': {
    context: 'an air sample whose moisture content is being characterized',
    unknownPhrase: 'the dew point',
  },
  'a-control-error': {
    context: 'a control system regulating a process variable',
    unknownPhrase: 'the control error',
  },
  'a-simple-interest': {
    context: 'a loan taken for machinery purchase',
    unknownPhrase: 'the simple interest due',
  },
  'a-present-worth': {
    context: 'a future payment being valued today',
    unknownPhrase: 'the present worth',
  },
  'a-depreciation': {
    context: 'a machine whose value declines over its service life',
    unknownPhrase: 'the annual depreciation',
  },
  'a-break-even': {
    context: 'a crop operation comparing fixed and variable costs',
    unknownPhrase: 'the break-even point',
  },
  'a-capital-recovery': {
    context: 'an investment expected to yield a series of future payments',
    unknownPhrase: 'the capital recovery factor',
  },
  'a-npv': {
    context: 'an investment being appraised over time',
    unknownPhrase: 'the net present value',
  },
  'a-payback': {
    context: 'a machinery investment whose returns are evaluated',
    unknownPhrase: 'the payback period',
  },
  'a-ps-allocation': {
    context: 'a public spending allocation decision',
    unknownPhrase: 'the allocation share',
  },
  'a-fs-cost': {
    context: 'a cost item in a production budget',
    unknownPhrase: 'the total cost',
  },
  'a-admin-overhead': {
    context: 'a farming enterprise apportioning overhead costs',
    unknownPhrase: 'the administrative overhead',
  },
  'a-heat-balance': {
    context: 'an engine thermal balance study',
    unknownPhrase: 'the heat accounted for',
  },
  // ---------------------------------------------------------------------------
  // AREA B: Hydraulics, Soils, Structures, Aquaculture, Mechanics
  // ---------------------------------------------------------------------------
  'b-sprinkler-rate': {
    context: 'a sprinkler irrigation system laying water over a field',
    unknownPhrase: 'the sprinkler application rate',
    decision: [
      {
        scenario: 'A sprinkler system is checked to see whether it applies water fast enough for the soil.',
        question:
          'When checking a sprinkler irrigation system, the application rate must be compared against the soil infiltration rate. The operator should choose a system whose application rate:',
        options: [
          'Does not exceed the soil infiltration rate to avoid runoff',
          'Is as high as possible for any soil',
          'Matches the pump discharge regardless of soil',
          'Is always lower than the crop water demand',
        ],
        correct: 0,
        rationale:
          'If application rate exceeds infiltration, water ponds and runs off. Proper design matches the application rate to the soil infiltration capacity.',
      },
    ],
  },
  'b-sprinkler-spacing': {
    context: 'a sprinkler layout being designed for uniform coverage',
    unknownPhrase: 'the sprinkler spacing',
  },
  'b-sprinkler-count': {
    context: 'a sprinkler system being laid out on a rectangular paddy field',
    unknownPhrase: 'the total number of sprinklers needed',
  },
  'b-pumping-time': {
    context: 'a pump delivering irrigation water over a field',
    unknownPhrase: 'the pumping time required',
    multiStep: {
      firstUnit: 'h',
      firstPhrase: 'the pumping time required',
      secondUnit: 'm³',
      secondPhrase: 'the total volume of water delivered during that time',
      second: (h, vals) => vals.Q * 3.6 * h,
      readError: (v, c) => c * 1.5,
    },
  },
  'b-irrigation-efficiency': {
    context: 'an irrigation scheme whose applied water is being assessed',
    unknownPhrase: 'the irrigation efficiency',
    decision: [
      {
        scenario: 'An irrigation system delivers more water than the crop stores.',
        question:
          'A field is irrigated, but only part of the delivered water is stored in the root zone. To judge how efficiently water is being used, the evaluator should compare:',
        options: [
          'The water stored in the root zone against the water delivered',
          'The water delivered against the well depth',
          'The water stored against the rated flow of the pump',
          'The delivered water against the soil color',
        ],
        correct: 0,
        rationale:
          'Irrigation efficiency is the ratio of water stored in the root zone to the total water delivered; losses from runoff and deep percolation reduce it.',
      },
    ],
  },
  'b-gross-depth': {
    context: 'an irrigation application sized to meet a crop need',
    unknownPhrase: 'the gross depth of water to apply',
  },
  'b-net-irrigation': {
    context: 'an irrigation schedule for a growing crop',
    unknownPhrase: 'the net irrigation requirement',
  },
  'b-irrigation-interval': {
    context: 'a field scheduled for repeated irrigation events',
    unknownPhrase: 'the irrigation interval',
  },
  'b-irrigation-period': {
    context: 'a basin being flooded for irrigation',
    unknownPhrase: 'the irrigation period (duration)',
    multiStep: {
      firstUnit: 'h',
      firstPhrase: 'the irrigation period (duration)',
      secondUnit: 'm³',
      secondPhrase: 'the total volume of water applied to the basin',
      second: (t, vals) => vals.A * (vals.d / 1000),
      readError: (v, c) => c * 0.75,
    },
  },
  'b-drip-time': {
    context: 'a drip irrigation line watering a row crop',
    unknownPhrase: 'the daily drip irrigation time',
  },
  'b-total-irrigation': {
    context: 'a field under a seasonal irrigation water budget',
    unknownPhrase: 'the total irrigation water required',
  },
  'b-land-soaking': {
    context: 'a rice field being prepared for transplanting by soaking',
    unknownPhrase: 'the land soaking requirement',
  },
  'b-runoff-volume': {
    context: 'a watershed being assessed for annual runoff',
    unknownPhrase: 'the annual runoff volume',
  },
  'b-runoff-budget': {
    context: 'a rainfall event on a recharge area',
    unknownPhrase: 'the runoff volume',
  },
  'b-runoff-coefficient': {
    context: 'a plot being characterized for its runoff response',
    unknownPhrase: 'the runoff coefficient',
  },
  'b-mean-rainfall': {
    context: 'a catchment with several rain gauges',
    unknownPhrase: 'the mean areal rainfall',
  },
  'b-scs-runoff': {
    context: 'a storm event analyzed by the SCS curve number method',
    unknownPhrase: 'the direct runoff depth',
  },
  'b-scs-retention': {
    context: 'a catchment whose curve number is known',
    unknownPhrase: 'the potential retention',
  },
  'b-rational': {
    context: 'a small catchment being sized for peak storm runoff',
    unknownPhrase: 'the peak runoff rate',
  },
  'b-darcy': {
    context: 'groundwater flowing through a soil layer',
    unknownPhrase: 'the groundwater flow rate',
  },
  'b-hydraulic-conductivity': {
    context: 'a layered soil profile carrying water',
    unknownPhrase: 'the effective hydraulic conductivity',
  },
  'b-drawdown': {
    context: 'a pumping well drawing water from an aquifer',
    unknownPhrase: 'the drawdown at the well',
  },
  'b-well-discharge': {
    context: 'a fully penetrating well yielding steady flow',
    unknownPhrase: 'the well discharge',
  },
  'b-usle': {
    context: 'a farm field evaluated for erosion risk',
    unknownPhrase: 'the annual soil loss',
    decision: [
      {
        scenario: 'A farmer wants to reduce erosion on a sloping field.',
        question:
          'The Universal Soil Loss Equation estimates soil loss from rainfall, soil, slope, cover, and practice factors. To most directly reduce the estimated annual soil loss, the farmer should:',
        options: [
          'Improve the cover-management factor by maintaining crop cover',
          'Increase the rainfall erosivity factor',
          'Steepen the slope length',
          'Increase soil erodibility',
        ],
        correct: 0,
        rationale:
          'Reducing the cover-management (C) factor, e.g. by keeping crop or residue cover, lowers the USLE soil-loss estimate; the other choices would raise it.',
      },
    ],
  },
  'b-soil-loss': {
    context: 'a whole field whose per-hectare erosion is known',
    unknownPhrase: 'the total soil loss',
  },
  'b-sediment-yield': {
    context: 'a reservoir catchment delivering sediment',
    unknownPhrase: 'the sediment yield reaching the reservoir',
  },
  'b-reservoir-life': {
    context: 'a reservoir being assessed for siltation',
    unknownPhrase: 'the useful life of the reservoir',
    multiStep: {
      firstUnit: 'yr',
      firstPhrase: 'the useful life of the reservoir',
      secondUnit: 'm³/yr',
      secondPhrase: 'the average annual sediment volume that fills it',
      second: (life, vals) => vals.Cc / life,
      readError: (v, c) => c * 1.25,
    },
  },
  'b-gravimetric-mc': {
    context: 'a soil sample weighed before and after oven drying',
    unknownPhrase: 'the gravimetric moisture content',
  },
  'b-organic-matter': {
    context: 'a soil sample assayed by loss on ignition',
    unknownPhrase: 'the organic matter content',
  },
  'b-volumetric-mc': {
    context: 'a soil whose water content is reported per unit volume',
    unknownPhrase: 'the volumetric moisture content',
  },
  'b-bulk-density': {
    context: 'an undisturbed soil core of known volume',
    unknownPhrase: 'the bulk density',
    decision: [
      {
        scenario: 'Two soil samples are compared for compaction.',
        question:
          'Bulk density is the ratio of dry soil mass to bulk volume. Compared with a loose topsoil, a compacted subsoil would most likely show:',
        options: [
          'A higher bulk density for the same volume',
          'A lower bulk density for the same volume',
          'The same bulk density regardless of compaction',
          'No relation to compaction',
        ],
        correct: 0,
        rationale:
          'Compaction packs more soil mass into the same volume, raising bulk density; high bulk density limits root growth and water movement.',
      },
    ],
  },
  'b-density': {
    context: 'a material whose mass and volume are measured',
    unknownPhrase: 'the density',
  },
  'b-weight': {
    context: 'a submerged body of known specific gravity',
    unknownPhrase: 'the weight',
  },
  'b-void-ratio': {
    context: 'a soil whose solid and dry unit weights are known',
    unknownPhrase: 'the void ratio',
  },
  'b-base-saturation': {
    context: 'a soil test reporting exchangeable base cations',
    unknownPhrase: 'the percent base saturation',
  },
  'b-cec': {
    context: 'a soil laboratory report of exchangeable cations',
    unknownPhrase: 'the cation exchange capacity',
    decision: [
      {
        scenario: 'A soil report is used to judge fertility of a clay versus a sandy soil.',
        question:
          'Cation exchange capacity measures how many cations a soil can hold. A soil with a high CEC is generally able to:',
        options: [
          'Retain more nutrient cations against leaching',
          'Lose nutrients more readily to leaching',
          'Hold no nutrients at all',
          'Acidify regardless of management',
        ],
        correct: 0,
        rationale:
          'A high CEC lets the soil hold more exchangeable nutrient cations, so they are less easily leached and more available to plants.',
      },
    ],
  },
  'b-lime': {
    context: 'a field being amended to raise soil pH',
    unknownPhrase: 'the agricultural lime requirement',
  },
  'b-fertilizer': {
    context: 'a field supplied with a fertilizer material of known concentration',
    unknownPhrase: 'the amount of fertilizer material required',
    decision: [
      {
        scenario: 'A farmer needs to supply a set amount of nitrogen to a field.',
        question:
          'To supply a fixed nutrient requirement, the amount of fertilizer material depends on its nutrient content. A fertilizer with a lower nutrient content would require:',
        options: [
          'More material to supply the same nutrient amount',
          'Less material to supply the same nutrient amount',
          'The same amount regardless of content',
          'No adjustment since only price matters',
        ],
        correct: 0,
        rationale:
          'Material required = nutrient requirement × 100 ÷ nutrient content; a lower-content fertilizer needs more material to deliver the same nutrient.',
      },
    ],
  },
  'b-nutrient-applied': {
    context: 'a field receiving a measured amount of fertilizer',
    unknownPhrase: 'the nutrient applied',
  },
  'b-bulk-modulus': {
    context: 'a fluid or material under pressure',
    unknownPhrase: 'the bulk modulus',
  },
  'b-water-mass': {
    context: 'a dry soil whose moisture content is known',
    unknownPhrase: 'the mass of water held',
  },
  'b-weighted-mean': {
    context: 'a set of values each given a weighting',
    unknownPhrase: 'the weighted mean',
  },
  'b-manning-v': {
    context: 'water flowing in an open channel',
    unknownPhrase: 'the flow velocity',
  },
  'b-manning-q': {
    context: 'an open channel conveying water',
    unknownPhrase: 'the discharge',
  },
  'b-hydraulic-radius': {
    context: 'an open channel cross-section',
    unknownPhrase: 'the hydraulic radius',
  },
  'b-rect-area': {
    context: 'a rectangular irrigation channel flowing',
    unknownPhrase: 'the flow area',
  },
  'b-rect-perimeter': {
    context: 'a rectangular channel carrying flow',
    unknownPhrase: 'the wetted perimeter',
  },
  'b-trap-area': {
    context: 'a trapezoidal field channel',
    unknownPhrase: 'the flow area',
  },
  'b-continuity': {
    context: 'a channel or pipe carrying a steady flow',
    unknownPhrase: 'the discharge',
  },
  'b-velocity-head': {
    context: 'water moving at a known velocity in a conduit',
    unknownPhrase: 'the velocity head',
  },
  'b-flood-risk': {
    context: 'a structure designed to survive flooding over its life',
    unknownPhrase: 'the risk of exceedance over the design life',
  },
  'b-return-period': {
    context: 'an annual flood series ranked by magnitude',
    unknownPhrase: 'the return period',
  },
  'b-gumbel': {
    context: 'a flood frequency analysis of annual peak flows',
    unknownPhrase: 'the T-year design flood',
  },
  'b-crop-et': {
    context: 'a crop whose daily water use is estimated from reference ET',
    unknownPhrase: 'the crop evapotranspiration',
  },
  'b-water-volume': {
    context: 'a crop requiring a known depth of water over its area',
    unknownPhrase: 'the crop water volume',
  },
  'b-pan-evap': {
    context: 'an evaporation pan read at a weather station',
    unknownPhrase: 'the adjusted pan evaporation',
  },
  'b-reference-et': {
    context: 'a location whose temperature and daylight are known',
    unknownPhrase: 'the reference evapotranspiration',
  },
  'b-fcr': {
    context: 'an aquaculture or livestock feeding trial',
    unknownPhrase: 'the feed conversion ratio',
    decision: [
      {
        scenario: 'Two feed batches are compared in a feeding trial.',
        question:
          'Feed conversion ratio is the feed given divided by the body-weight gain. To judge which feed is used more efficiently, the better feed gives:',
        options: [
          'A lower feed conversion ratio for the same gain',
          'A higher feed conversion ratio for the same gain',
          'A feed conversion ratio equal to the gain',
          'No meaningful feed conversion ratio',
        ],
        correct: 0,
        rationale:
          'A lower FCR means less feed is required per unit of gain, so the feed is used more efficiently.',
      },
    ],
  },
  'b-daily-feed': {
    context: 'a pond or pen stocked with a known biomass',
    unknownPhrase: 'the daily feed requirement',
  },
  'b-biomass': {
    context: 'a stocked population of known size',
    unknownPhrase: 'the total biomass',
  },
  'b-stocking-density': {
    context: 'a pond being stocked at a target density',
    unknownPhrase: 'the number of animals to stock',
    decision: [
      {
        scenario: 'A pond operator chooses a stocking rate.',
        question:
          'Stocking density is the number of animals per unit area or volume. If a pond is stocked far above the sustainable density, the most likely consequence is:',
        options: [
          'Reduced survival and growth due to overcrowding and poor water quality',
          'Improved survival since more animals share the feed',
          'No effect on water quality',
          'Higher growth for every individual',
        ],
        correct: 0,
        rationale:
          'Overstocking raises oxygen demand and waste load and stresses animals, lowering survival and growth.',
      },
    ],
  },
  'b-survival': {
    context: 'a hatchery batch followed through a rearing period',
    unknownPhrase: 'the surviving population',
  },
  'b-aerators': {
    context: 'a pond whose dissolved oxygen must be raised',
    unknownPhrase: 'the number of aerators required',
    decision: [
      {
        scenario: 'Dissolved oxygen in a pond falls below the target.',
        question:
          'Aerators are added to raise dissolved oxygen in a pond. The number of aerators required is best judged by:',
        options: [
          'The oxygen deficit to be overcome divided by the transfer each aerator provides',
          'The pond area alone',
          'The number of fish visible at the surface',
          'The depth of the pond only',
        ],
        correct: 0,
        rationale:
          'Aerators needed = oxygen deficit ÷ oxygen transfer per aerator; the deficit is the difference between the target and current dissolved oxygen.',
      },
    ],
  },
  'b-oxygen': {
    context: 'a pond whose dissolved oxygen must be restored',
    unknownPhrase: 'the oxygen required',
  },
  'b-ammonia': {
    context: 'a pond water sample tested for ammonia nitrogen',
    unknownPhrase: 'the total ammonia present',
  },
  'b-bod': {
    context: 'a wastewater stream being characterized',
    unknownPhrase: 'the BOD load',
  },
  'b-newton': {
    context: 'a body accelerated by a net force',
    unknownPhrase: 'the force required',
  },
  'b-kinematics': {
    context: 'a body undergoing uniform acceleration',
    unknownPhrase: 'the final velocity',
  },
  'b-centripetal': {
    context: 'a body moving along a curved path',
    unknownPhrase: 'the centripetal acceleration',
  },
  'b-momentum': {
    context: 'a moving body of known mass and velocity',
    unknownPhrase: 'the momentum',
  },
  'b-force-components': {
    context: 'a force applied at an angle to the horizontal',
    unknownPhrase: 'the horizontal component of the force',
    decision: [
      {
        scenario: 'A pulling force is applied at an angle to the direction of travel.',
        question:
          'A force applied at an angle has horizontal and vertical components. For maximum useful forward pull along the ground, the force should most effectively be applied:',
        options: [
          'As near to horizontal as practical so the horizontal component is maximized',
          'Vertically so all force lifts the load',
          'At 90 degrees to the direction of travel',
          'In any direction since components do not matter',
        ],
        correct: 0,
        rationale:
          'The horizontal component is F·cos θ; a smaller angle from horizontal gives a larger forward component, maximizing useful pull.',
      },
    ],
  },
  'b-resultant': {
    context: 'two perpendicular forces acting on a body',
    unknownPhrase: 'the resultant force',
  },
  'b-momwork': {
    context: 'a force acting through a distance about a point',
    unknownPhrase: 'the moment (or work)',
  },
  'b-equilibrium': {
    context: 'a body acted on by balanced forces',
    unknownPhrase: 'the balancing force',
  },
  'b-power-mech': {
    context: 'work done over a known time',
    unknownPhrase: 'the mechanical power',
  },
  // ---------------------------------------------------------------------------
  // AREA C: Post-harvest, Bio-processing, Structures, Electricity
  // ---------------------------------------------------------------------------
  'c-mc-wet': {
    context: 'a freshly harvested grain lot whose water content is measured',
    unknownPhrase: 'the moisture content (wet basis)',
    multiStep: {
      firstUnit: '%',
      firstPhrase: 'the wet-basis moisture content',
      secondUnit: 'kg',
      secondPhrase: 'the dry matter in the sample',
      second: (mc, vals) => vals.Wt * (1 - mc / 100),
      readError: (v, c) => c * 0.85,
    },
  },
  'c-mc-dry': {
    context: 'a dried material whose water is measured against its dry matter',
    unknownPhrase: 'the moisture content (dry basis)',
  },
  'c-dry-matter': {
    context: 'a wet product of known moisture content',
    unknownPhrase: 'the dry matter content',
  },
  'c-dry-matter-conservation': {
    context: 'a grain lot reduced in moisture during drying',
    unknownPhrase: 'the final weight of the dried grain',
    decision: [
      {
        scenario: 'A dryer operator uses dry matter to check weight loss during drying.',
        question:
          'Drying removes water, but the dry matter is conserved. To find how much a grain lot should weigh after drying, it is most correct to base the calculation on:',
        options: [
          'Keeping the dry matter constant while the water content falls',
          'Keeping the water weight constant while the dry matter falls',
          'Reducing both water and dry matter equally',
          'Assuming no weight change on drying',
        ],
        correct: 0,
        rationale:
          'Dry matter is conserved: initial dry matter equals final dry matter, so the final weight is found from the moisture contents while maintaining the same dry matter.',
      },
    ],
  },
  'c-water-removed': {
    context: 'a drying run where the grain is weighed before and after',
    unknownPhrase: 'the water removed',
  },
  'c-moisture-removal-rate': {
    context: 'a dryer whose water removal is timed',
    unknownPhrase: 'the moisture removal rate',
  },
  'c-drying-air': {
    context: 'a dryer whose supply and exhaust air differ in humidity',
    unknownPhrase: 'the drying air required',
  },
  'c-milling-recovery': {
    context: 'a rice mill converting paddy into milled rice',
    unknownPhrase: 'the milling recovery',
    decision: [
      {
        scenario: 'A rice mill is evaluated for how much milled rice it obtains from paddy.',
        question:
          'Milling recovery is the mass of milled rice relative to the paddy input. Relative to the paddy fed, a higher milling recovery means:',
        options: [
          'A larger share of the paddy is recovered as milled rice',
          'A smaller share of the paddy is recovered',
          'More bran is produced regardless of rice',
          'The paddy is cleaned, not milled',
        ],
        correct: 0,
        rationale:
          'Milling recovery = milled rice ÷ paddy input × 100%; a higher value recovers more milled rice from the same paddy.',
      },
    ],
  },
  'c-drying-efficiency': {
    context: 'a dryer measured against its theoretical drying duty',
    unknownPhrase: 'the drying efficiency',
    decision: [
      {
        scenario: 'A grain dryer is checked for how effectively it removes moisture.',
        question:
          'Drying efficiency compares the actual water evaporated to the theoretical water that should be removed. A low drying efficiency most likely indicates:',
        options: [
          'Excessive heat or drying air losses during the process',
          'That the grain is over-dried beyond its target',
          'That the dryer is operating at maximum capacity',
          'That the grain moisture is already at equilibrium',
        ],
        correct: 0,
        rationale:
          'A low ratio of actual to theoretical evaporation signals losses of heat or drying air, so less of the supplied energy actually removes water.',
      },
    ],
  },
  'c-sensible-heat': {
    context: 'a product being heated through a temperature change',
    unknownPhrase: 'the sensible heat required',
  },
  'c-latent-heat': {
    context: 'a substance changing phase at constant temperature',
    unknownPhrase: 'the latent heat involved',
  },
  'c-total-heat': {
    context: 'a product heated through a change of phase',
    unknownPhrase: 'the total heat required',
  },
  'c-lmtd': {
    context: 'a heat exchanger with differing end temperature differences',
    unknownPhrase: 'the log mean temperature difference',
  },
  'c-heat-exchanger': {
    context: 'a heat exchanger transferring heat between streams',
    unknownPhrase: 'the heat transfer rate',
  },
  'c-heat-load': {
    context: 'a cooled or heated space with a known load per area',
    unknownPhrase: 'the cooling (or heating) load',
  },
  'c-vs-loading': {
    context: 'a livestock operation generating manure for biogas',
    unknownPhrase: 'the volatile solids produced daily',
  },
  'c-biogas': {
    context: 'a biogas digester fed with volatile solids',
    unknownPhrase: 'the daily biogas production',
    decision: [
      {
        scenario: 'A farm installs a biogas digester for its livestock waste.',
        question:
          'Biogas production depends on the volatile solids fed to the digester. To sustain steady gas output, the operator should:',
        options: [
          'Feed the digester a consistent daily amount of volatile solids',
          'Feed the entire manure stock at once and stop',
          'Add only water with no organic material',
          'Keep the digester empty most of the time',
        ],
        correct: 0,
        rationale:
          'Steady biogas output requires a consistent daily feed of volatile solids; the gas yield is directly proportional to the volatile solids digested daily.',
      },
    ],
  },
  'c-methane': {
    context: 'a biogas stream of known composition',
    unknownPhrase: 'the methane produced per day',
  },
  'c-fermenter-volume': {
    context: 'a digester sized for daily substrate and retention time',
    unknownPhrase: 'the fermenter (digester) volume',
  },
  'c-biogas-energy': {
    context: 'a biogas supply whose energy content is being assessed',
    unknownPhrase: 'the daily energy content of the biogas',
  },
  'c-biogas-complete': {
    context: 'a complete livestock waste-to-biogas assessment',
    unknownPhrase: 'the daily biogas production',
  },
  'c-waste-stream': {
    context: 'a farm waste stream partially recycled',
    unknownPhrase: 'the recycled waste quantity',
  },
  'c-waste-mass': {
    context: 'a waste volume of known density',
    unknownPhrase: 'the mass of waste',
  },
  'c-dvalue': {
    context: 'a thermal process reducing a microbial population',
    unknownPhrase: 'the D-value process time',
    decision: [
      {
        scenario: 'A thermal process must reduce a spoilage microorganism by a required log count.',
        question:
          'A D-value is the time at a given temperature to reduce a microbial population by one log cycle. To determine the total process time needed for a specified log reduction, the processor should:',
        options: [
          'Multiply the D-value by the required number of log reductions',
          'Add the D-value to the initial count',
          'Divide the D-value by the log reduction',
          'Use the D-value without accounting for the reduction',
        ],
        correct: 0,
        rationale:
          'Total process time = D × log(N₀/N); each D-value reduces the population by one log cycle, so multiply by the required reduction.',
      },
    ],
  },
  'c-12d': {
    context: 'a canned product being sterilized to commercial sterility',
    unknownPhrase: 'the 12D sterilization time',
  },
  'c-zvalue': {
    context: 'a thermal process compared at a reference temperature',
    unknownPhrase: 'the process equivalence time',
  },
  'c-product-recovery': {
    context: 'a processing line recovering a useful product from input material',
    unknownPhrase: 'the recovered product mass',
  },
  'c-pearson': {
    context: 'a feed being formulated by blending two ingredients',
    unknownPhrase: 'the parts of high-protein ingredient',
    decision: [
      {
        scenario: 'A feed mix must reach a target protein using a high and a low protein ingredient.',
        question:
          'Pearson square blending finds the ratio of a high-protein to a low-protein ingredient. For the mix to hit the target protein, the calculation compares:',
        options: [
          'The protein of each ingredient against the target protein',
          'Only the protein of the high-protein ingredient',
          'The target protein alone',
          'The moisture contents of the ingredients',
        ],
        correct: 0,
        rationale:
          'Pearson square sets the parts of each ingredient from the difference between its protein and the target; the ratio balances the two to reach the desired protein.',
      },
    ],
  },
  'c-bending-stress': {
    context: 'a beam carrying a bending moment',
    unknownPhrase: 'the bending stress',
  },
  'c-eccentric': {
    context: 'a column loaded with an eccentric axial force',
    unknownPhrase: 'the combined stress',
  },
  'c-direct-stress': {
    context: 'a member carrying an axial load over its section',
    unknownPhrase: 'the direct stress',
  },
  'c-strain': {
    context: 'a member that changes length under load',
    unknownPhrase: 'the strain',
  },
  'c-modulus-elasticity': {
    context: 'a material whose stress and strain are measured',
    unknownPhrase: "Young's modulus of elasticity",
  },
  'c-shear-moment': {
    context: 'a beam whose bending moment varies along its length',
    unknownPhrase: 'the shear force',
  },
  'c-fixed-end': {
    context: 'a fixed-ended beam carrying a uniform load',
    unknownPhrase: 'the fixed-end moment',
  },
  'c-simple-reaction': {
    context: 'a simply supported beam with a midspan load',
    unknownPhrase: 'the support reaction',
  },
  'c-max-moment': {
    context: 'a simply supported beam with a midspan point load',
    unknownPhrase: 'the maximum bending moment',
  },
  'c-ventilation': {
    context: 'a livestock or storage room needing air renewal',
    unknownPhrase: 'the ventilation rate',
  },
  'c-air-velocity': {
    context: 'air moving through a ventilation duct',
    unknownPhrase: 'the air velocity in the duct',
  },
  'c-saturation-vapor': {
    context: 'an air sample at a given dry-bulb temperature',
    unknownPhrase: 'the saturation vapor pressure',
  },
  'c-moist-enthalpy': {
    context: 'a moist air stream being characterized',
    unknownPhrase: 'the enthalpy of the moist air',
  },
  'c-actual-vapor': {
    context: 'moist air of known relative humidity',
    unknownPhrase: 'the actual vapor pressure',
  },
  'c-relative-humidity': {
    context: 'an air sample whose vapor pressures are known or measured',
    unknownPhrase: 'the relative humidity',
    decision: [
      {
        scenario: 'A storage operator manages humidity to protect stored grain.',
        question:
          'Relative humidity is the ratio of the actual vapor pressure to the saturation vapor pressure. When storing grain, especially high humidity is a concern because it:',
        options: [
          'Encourages moisture uptake and spoilage of the stored material',
          'Keeps the grain drier',
          'Has no effect on stored grain',
          'Always prevents mold growth',
        ],
        correct: 0,
        rationale:
          'High relative humidity drives moisture into hygroscopic stored materials and favors microbial growth and spoilage.',
      },
    ],
  },
  'c-tons-refrigeration': {
    context: 'a refrigeration system with a known cooling capacity',
    unknownPhrase: 'the capacity in tons of refrigeration',
  },
  'c-condensing-hp': {
    context: 'a condensing unit handling a cooling load',
    unknownPhrase: 'the condensing unit capacity',
  },
  'c-cop-ref': {
    context: 'a refrigeration cycle removing heat with work input',
    unknownPhrase: 'the coefficient of performance',
  },
  'c-ohms-law': {
    context: 'an electrical circuit with a known current and resistance',
    unknownPhrase: 'the voltage',
  },
  'c-electric-power': {
    context: 'an electrical load supplied at a given voltage and current',
    unknownPhrase: 'the electric power',
  },
  'c-electric-energy': {
    context: 'an appliance running for a known time at a given power',
    unknownPhrase: 'the electric energy consumed',
  },
  'c-resistance': {
    context: 'resistors connected in a circuit',
    unknownPhrase: 'the equivalent resistance',
  },
  'c-capacitor': {
    context: 'a capacitor charged to a given voltage',
    unknownPhrase: 'the energy stored',
  },
  'c-transformer': {
    context: 'a transformer with known turns and primary voltage',
    unknownPhrase: 'the secondary voltage',
  },
  'c-reactance': {
    context: 'an inductive coil in an AC circuit',
    unknownPhrase: 'the inductive reactance',
  },
  'c-power-factor': {
    context: 'an AC load drawing real and apparent power',
    unknownPhrase: 'the power factor',
    decision: [
      {
        scenario: 'An electric motor load is assessed for efficiency of power use.',
        question:
          'Power factor is the ratio of real to apparent power. Improving a low power factor in a farm electrical system is beneficial because it:',
        options: [
          'Reduces the current drawn for the same real power, lowering line losses',
          'Increases the total apparent power needed',
          'Has no effect on the electrical system',
          'Raises the voltage beyond the rated value',
        ],
        correct: 0,
        rationale:
          'A higher power factor means less reactive current for the same real power, so line losses and required capacity are reduced.',
      },
    ],
  },
  'c-illumination': {
    context: 'a working area lit by a source of known flux',
    unknownPhrase: 'the illumination level',
    decision: [
      {
        scenario: 'A workshop is checked for adequate lighting.',
        question:
          'Illumination level is the luminous flux incident per unit area. If the same lamp flux is spread over a larger floor area, the resulting illumination will:',
        options: [
          'Be lower because the flux is spread over more area',
          'Be higher because the area is larger',
          'Stay the same regardless of area',
          'Increase with the area directly',
        ],
        correct: 0,
        rationale:
          'Illuminance = flux ÷ area; spreading the same flux over more area gives a lower illumination level (lux).',
      },
    ],
  },
  'c-weighted-score': {
    context: 'a multi-criterion evaluation of a machine or option',
    unknownPhrase: 'the weighted score',
  },
  'c-delay-score': {
    context: 'a timed performance scored with a delay penalty',
    unknownPhrase: 'the delay-adjusted score',
  },
  'c-cost-percentage': {
    context: 'a cost item within a total project or input cost',
    unknownPhrase: 'the cost weight percentage',
  },
  'c-circle-area': {
    context: 'a circular feature of known radius',
    unknownPhrase: 'the area',
  },
  'c-cylinder-volume': {
    context: 'a cylindrical storage or silo of known dimensions',
    unknownPhrase: 'the volume',
  },
  'c-volume-mass': {
    context: 'a stored material of known mass and density',
    unknownPhrase: 'the volume',
  },
  'c-processing-rate': {
    context: 'a processing line handling a batch over a known time',
    unknownPhrase: 'the processing rate',
  },
};

export function enrichSpec(spec: DrillSpec): DrillSpec {
  const e = drillContent[spec.formulaId];
  if (!e) return spec;
  return {
    ...spec,
    context: e.context ?? spec.context,
    unknownPhrase: e.unknownPhrase ?? spec.unknownPhrase,
    verb: e.verb ?? spec.verb,
    decision: e.decision ?? spec.decision,
    multiStep: e.multiStep ?? spec.multiStep,
    chain: e.chain ?? spec.chain,
  };
}
