import { writeFileSync } from 'fs';

// ABELE-style definition/nomenclature question generator
// Based on recalled Sept 2022 board exam patterns

const sourceQuestions = [
  // === AREA A: POWER & MACHINERY ===
  { area: 'A', sub: 'agri-machinery', topic: 'Terminology', diff: 'easy',
    q: 'It is the force required to pull an agricultural implement through the soil.',
    opts: ['Draft', 'Traction', 'Drawbar pull', 'Torque'], ans: 0,
    concept: 'Draft is the horizontal force needed to pull an implement. Measured in kN.' },
  { area: 'A', sub: 'agri-machinery', topic: 'Terminology', diff: 'easy',
    q: 'What refers to the condition when an engine is running but the vehicle is not moving?',
    opts: ['Idle condition', 'Neutral gear', 'Clutch disengaged', 'Parking brake'], ans: 0,
    concept: 'Idle means engine running with no load. It wastes fuel.' },
  { area: 'A', sub: 'agri-machinery', topic: 'Terminology', diff: 'easy',
    q: 'What is the ratio of output power to input power in an engine called?',
    opts: ['Mechanical efficiency', 'Thermal efficiency', 'Volumetric efficiency', 'Overall efficiency'], ans: 0,
    concept: 'Mechanical efficiency = BHP / IHP × 100%.' },
  { area: 'A', sub: 'agri-machinery', topic: 'Terminology', diff: 'easy',
    q: 'It is the ability of a tractor to transmit power through drive wheels to the ground.',
    opts: ['Traction', 'Draft', 'Drawbar pull', 'Torque'], ans: 0,
    concept: 'Traction depends on tire type, pressure, soil condition, and weight on drive wheels.' },
  { area: 'A', sub: 'agri-machinery', topic: 'Terminology', diff: 'easy',
    q: 'What engine component mixes fuel with air in the proper ratio?',
    opts: ['Carburetor', 'Cylinder', 'Piston', 'Spark plug'], ans: 0,
    concept: 'Injection systems replace carburetors in modern engines but carburetors remain in small agri engines.' },
  { area: 'A', sub: 'agri-machinery', topic: 'Terminology', diff: 'easy',
    q: 'It is the actual area covered by an implement per unit time considering all losses.',
    opts: ['Effective field capacity', 'Theoretical field capacity', 'Field efficiency', 'Operating capacity'], ans: 0,
    concept: 'EFC = (W × S × E) / 10. Less than theoretical due to turning, refilling, and adjustments.' },
  { area: 'A', sub: 'agri-machinery', topic: 'Equipment Specs', diff: 'easy',
    q: 'Robin engines commonly used in agricultural machinery are manufactured in which country?',
    opts: ['Japan', 'USA', 'China', 'Germany'], ans: 0,
    concept: 'Robin (Subaru) - Japan; Kirby - USA; Honda - Japan; Briggs & Stratton - USA.' },
  { area: 'A', sub: 'agri-machinery', topic: 'Equipment Specs', diff: 'easy',
    q: 'What is the typical empty weight of a knapsack sprayer?',
    opts: ['16-20 kg', '5-10 kg', '25-30 kg', '35-40 kg'], ans: 0,
    concept: 'Knapsack sprayers weigh 16-20 kg empty with tank capacity matching the weight.' },
  { area: 'A', sub: 'agri-machinery', topic: 'PAES', diff: 'easy',
    q: 'What is the minimum drying efficiency for a grain dryer under PAES?',
    opts: ['60%', '70%', '50%', '80%'], ans: 0,
    concept: 'PAES requires minimum 60% drying efficiency for mechanical grain dryers.' },
  { area: 'A', sub: 'agri-machinery', topic: 'PAES', diff: 'easy',
    q: 'PAES 403 series covers what category of agricultural machinery?',
    opts: ['Crop care and maintenance', 'Land preparation', 'Planting and transplanting', 'Harvesting and post-harvest'], ans: 0,
    concept: '401=Land Prep, 402=Planting, 403=Crop Care, 404=Harvesting/Post-Harvest.' },
  { area: 'A', sub: 'agri-machinery', topic: 'PAES', diff: 'easy',
    q: 'PAES 404 series covers what category of agricultural machinery?',
    opts: ['Harvesting and post-harvest machinery', 'Land preparation machinery', 'Crop care machinery', 'Planting machinery'], ans: 0,
    concept: 'PAES series: 401 (Land Prep), 402 (Planting), 403 (Crop Care), 404 (Harvest/Post-Harvest).' },
  { area: 'A', sub: 'agri-machinery', topic: 'PAES', diff: 'easy',
    q: 'AMTEC stands for what?',
    opts: ['Agricultural Machinery Testing and Evaluation Center', 'Agricultural Mechanization Testing and Evaluation Center', 'Agricultural Machinery Technical Evaluation Council', 'Advanced Machinery Testing and Evaluation Center'], ans: 0,
    concept: 'AMTEC based at UPLB conducts official PAES compliance testing.' },
  { area: 'A', sub: 'agri-machinery', topic: 'Maintenance', diff: 'average',
    q: 'How often should transmission oil be changed in an agricultural tractor?',
    opts: ['Every 6 months or 24,000 km', 'Every 3 months or 10,000 km', 'Every 12 months or 50,000 km', 'Every 24 months or 100,000 km'], ans: 0,
    concept: 'Standard maintenance interval for tractor transmission oil.' },
  { area: 'A', sub: 'agri-machinery', topic: 'Maintenance', diff: 'easy',
    q: 'What is the function of an air cleaner on an agricultural engine?',
    opts: ['Removes dust from intake air', 'Cleans exhaust emissions', 'Filters fuel', 'Cools intake air'], ans: 0,
    concept: 'Clean intake air prevents abrasive wear on cylinders, pistons, and rings.' },
  { area: 'A', sub: 'laws', topic: 'RA 10601', diff: 'easy',
    q: 'Republic Act 10601 is also known as what?',
    opts: ['Agricultural and Biosystems Engineering Law', 'Agriculture and Fisheries Modernization Act', 'Ecological Solid Waste Management Act', 'Clean Air Act'], ans: 0,
    concept: 'RA 10601 was signed July 23, 2013, replacing the old Agricultural Engineering Law (RA 8559).' },
  { area: 'A', sub: 'laws', topic: 'RA 10601', diff: 'easy',
    q: 'RA 10601 was enacted in what year?',
    opts: ['2013', '1997', '2007', '2010'], ans: 0,
    concept: 'RA 10601 = 2013; RA 8435 (AFMA) = 1997.' },
  { area: 'A', sub: 'laws', topic: 'PD 1152', diff: 'easy',
    q: 'Presidential Decree 1152 is also known as what?',
    opts: ['Philippine Environmental Code', 'Clean Water Act', 'Ecological Solid Waste Management Act', 'Pollution Control Law'], ans: 0,
    concept: 'PD 1152 (1977) sets environmental quality standards for air, water, land, and noise.' },
  { area: 'A', sub: 'laws', topic: 'Code of Ethics', diff: 'easy',
    q: 'How many canons of professional ethics are in the Code for ABEs?',
    opts: ['6', '5', '7', '4'], ans: 0,
    concept: 'Six canons: Public Welfare, Integrity, Competence, Truth, Conflict Avoidance, Professional Development.' },
  { area: 'A', sub: 'agri-machinery', topic: 'Tractor Systems', diff: 'easy',
    q: 'What is the function of a differential in a tractor?',
    opts: ['Allows wheels to rotate at different speeds when turning', 'Increases engine torque', 'Reduces engine speed', 'Transmits power to PTO'], ans: 0,
    concept: 'Differential allows outer wheel to travel farther than inner wheel during turns.' },
  { area: 'A', sub: 'agri-machinery', topic: 'Tractor Systems', diff: 'easy',
    q: 'What does locking the differential do?',
    opts: ['Forces both wheels to turn at same speed', 'Engages parking brake', 'Disconnects PTO', 'Locks steering'], ans: 0,
    concept: 'Differential lock provides equal torque to both wheels when traction is uneven.' },
  { area: 'A', sub: 'agri-machinery', topic: 'Tractor Systems', diff: 'easy',
    q: 'What type of hitch uses three attachment points for implements?',
    opts: ['Three-point hitch', 'Drawbar hitch', 'Puller hitch', 'Trailer hitch'], ans: 0,
    concept: 'Three-point hitch provides lifting and draft control. Category I, II, III for different tractor sizes.' },

  // === AREA B: LAND & WATER RESOURCES ===
  { area: 'B', sub: 'irrigation', topic: 'Terminology', diff: 'easy',
    q: 'It is the total volume of water applied to a crop through irrigation and rainfall.',
    opts: ['Gross irrigation requirement', 'Net irrigation requirement', 'Crop water requirement', 'Effective rainfall'], ans: 0,
    concept: 'GIR = NIR / Efficiency. Gross accounts for all water losses during application.' },
  { area: 'B', sub: 'irrigation', topic: 'Terminology', diff: 'easy',
    q: 'What is the ability of soil to transmit water through its profile called?',
    opts: ['Permeability', 'Infiltration', 'Percolation', 'Porosity'], ans: 0,
    concept: 'Permeability depends on soil texture, structure, and compaction.' },
  { area: 'B', sub: 'irrigation', topic: 'Terminology', diff: 'easy',
    q: 'What irrigation method applies water directly to the root zone through emitters?',
    opts: ['Drip irrigation', 'Sprinkler irrigation', 'Furrow irrigation', 'Basin irrigation'], ans: 0,
    concept: 'Drip irrigation has 90-95% application efficiency, the highest of all methods.' },
  { area: 'B', sub: 'irrigation', topic: 'Terminology', diff: 'easy',
    q: 'What is the most common surface irrigation method for rice paddies in the Philippines?',
    opts: ['Basin irrigation', 'Furrow irrigation', 'Border irrigation', 'Sprinkler irrigation'], ans: 0,
    concept: 'Rice requires standing water (5-10 cm), so basin/flood irrigation is standard.' },
  { area: 'B', sub: 'soil-water', topic: 'Erosion', diff: 'easy',
    q: 'What type of erosion is caused by raindrop impact on bare soil?',
    opts: ['Splash erosion', 'Sheet erosion', 'Rill erosion', 'Gully erosion'], ans: 0,
    concept: 'Splash is the first erosion stage. Raindrop energy breaks aggregates and detaches particles.' },
  { area: 'B', sub: 'soil-water', topic: 'Erosion', diff: 'easy',
    q: 'What erosion type removes a thin uniform layer of soil by overland flow?',
    opts: ['Sheet erosion', 'Rill erosion', 'Gully erosion', 'Splash erosion'], ans: 0,
    concept: 'Sheet erosion is often unnoticed until significant topsoil is lost.' },
  { area: 'B', sub: 'soil-water', topic: 'Conservation', diff: 'easy',
    q: 'What practice involves growing crops on the contour of sloping land?',
    opts: ['Contour farming', 'Strip cropping', 'Terracing', 'Mulching'], ans: 0,
    concept: 'Contour ridges slow runoff and increase infiltration on slopes.' },
  { area: 'B', sub: 'soil-water', topic: 'Conservation', diff: 'easy',
    q: 'What is the practice of alternating row crops with sod-forming cover crops called?',
    opts: ['Strip cropping', 'Contour farming', 'Crop rotation', 'Terracing'], ans: 0,
    concept: 'Sod strips filter runoff, trap sediment, and reduce effective slope length.' },
  { area: 'B', sub: 'soil-water', topic: 'USLE', diff: 'average',
    q: 'In USLE (A = R × K × LS × C × P), what does the R factor represent?',
    opts: ['Rainfall erosivity', 'Soil erodibility', 'Slope length-gradient', 'Cover management'], ans: 0,
    concept: 'R factor depends on rainfall amount and maximum 30-minute intensity.' },
  { area: 'B', sub: 'soil-water', topic: 'USLE', diff: 'average',
    q: 'In USLE, what does the K factor represent?',
    opts: ['Soil erodibility', 'Rainfall erosivity', 'Slope length-gradient', 'Cover management'], ans: 0,
    concept: 'K factor ranges 0.02-0.69. Sandy soils have low K; silty soils have high K.' },
  { area: 'B', sub: 'hydrology', topic: 'Terminology', diff: 'easy',
    q: 'It is the fraction of total precipitation that appears as streamflow.',
    opts: ['Runoff', 'Base flow', 'Infiltration', 'Interception'], ans: 0,
    concept: 'Runoff = Precipitation - Losses (ET, deep percolation, interception).' },
  { area: 'B', sub: 'hydrology', topic: 'Terminology', diff: 'easy',
    q: 'What is the boundary between adjacent watersheds called?',
    opts: ['Watershed divide', 'Stream bank', 'Flood plain', 'Riparian zone'], ans: 0,
    concept: 'Precipitation on one side of divide flows to one stream; other side to adjacent stream.' },
  { area: 'B', sub: 'irrigation', topic: 'Pumps', diff: 'average',
    q: 'What pump type is most suitable for deep wells (greater than 20 m)?',
    opts: ['Submersible pump', 'Centrifugal pump', 'Axial flow pump', 'Diaphragm pump'], ans: 0,
    concept: 'Submersible pumps are multi-stage for high lifts. Centrifugal pumps limited to <7 m suction.' },
  { area: 'B', sub: 'irrigation', topic: 'Water Measurement', diff: 'average',
    q: 'What device measures open-channel flow using a constriction in the channel?',
    opts: ['Flume', 'Weir', 'Orifice', 'Pitot tube'], ans: 0,
    concept: 'Parshall flume creates critical depth section. Weirs measure flow over a crest.' },
  { area: 'B', sub: 'irrigation', topic: 'Soil Water', diff: 'easy',
    q: 'Difference between field capacity and wilting point is called:',
    opts: ['Available moisture', 'Readily available moisture', 'Irrigation requirement', 'Saturation capacity'], ans: 0,
    concept: 'Available moisture = FC - PWP, the range of water extractable by plants.' },

  // === AREA C: STRUCTURES & BIOPROCESS ===
  { area: 'C', sub: 'farm-structures', topic: 'Terminology', diff: 'easy',
    q: 'What type of farm structure houses livestock or poultry?',
    opts: ['Animal shelter', 'Greenhouse', 'Storage shed', 'Quarantine facility'], ans: 0,
    concept: 'Design factors: ventilation, waste mgmt, space requirements, feeding/cleaning ease.' },
  { area: 'C', sub: 'farm-structures', topic: 'Terminology', diff: 'easy',
    q: 'What structure regulates temperature and humidity for crop production?',
    opts: ['Greenhouse', 'Screen house', 'Cold storage', 'Nursery shed'], ans: 0,
    concept: 'Greenhouses maintain optimal growing conditions year-round using natural/supplemented light.' },
  { area: 'C', sub: 'farm-structures', topic: 'Terminology', diff: 'easy',
    q: 'What is the primary function of riprap in hydraulic structures?',
    opts: ['Erosion protection', 'Water storage', 'Flow measurement', 'Sediment trapping'], ans: 0,
    concept: 'Riprap dissipates water energy to prevent scouring of banks and around structures.' },
  { area: 'C', sub: 'farm-structures', topic: 'Design', diff: 'easy',
    q: 'In structural design, what is considered dead load?',
    opts: ['Weight of the structure itself and fixed components', 'Weight of movable items', 'Wind and earthquake forces', 'Snow and ice accumulation'], ans: 0,
    concept: 'Dead load = permanent/static weight. Live loads = variable/movable loads.' },
  { area: 'C', sub: 'post-harvest', topic: 'Terminology', diff: 'easy',
    q: 'It is the process of removing moisture from agricultural products for safe storage.',
    opts: ['Drying', 'Milling', 'Threshing', 'Winnowing'], ans: 0,
    concept: 'Grains dried to 14% MC for safe storage. Higher moisture causes mold and spoilage.' },
  { area: 'C', sub: 'post-harvest', topic: 'Terminology', diff: 'easy',
    q: 'What is the standard trading moisture content for grains in the Philippines?',
    opts: ['14% wet basis', '14% dry basis', '20% wet basis', '10% wet basis'], ans: 0,
    concept: 'MC_wb = (water mass / total mass) × 100%. Under-dried spoils; over-dried loses weight/value.' },
  { area: 'C', sub: 'post-harvest', topic: 'Terminology', diff: 'easy',
    q: 'It is the percentage of usable product after milling.',
    opts: ['Milling recovery', 'Moisture content', 'Purity percentage', 'Germination rate'], ans: 0,
    concept: 'Rice milling recovery target is 65% (100 kg paddy → 65 kg milled rice).' },
  { area: 'C', sub: 'bioprocess', topic: 'Anaerobic Digestion', diff: 'easy',
    q: 'What is the primary combustible gas from anaerobic digestion?',
    opts: ['Methane', 'Carbon dioxide', 'Hydrogen sulfide', 'Ammonia'], ans: 0,
    concept: 'Biogas is 55-65% methane (combustible) and 35-45% CO₂.' },
  { area: 'C', sub: 'bioprocess', topic: 'Anaerobic Digestion', diff: 'easy',
    q: 'What is the mesophilic temperature range for anaerobic digestion?',
    opts: ['30-40°C', '50-60°C', '15-25°C', '65-75°C'], ans: 0,
    concept: 'Mesophilic (30-40°C) is most common. Thermophilic (50-60°C) is faster but less stable.' },
  { area: 'C', sub: 'bioprocess', topic: 'Composting', diff: 'easy',
    q: 'What is the ideal C:N ratio for aerobic composting?',
    opts: ['25:1 to 30:1', '10:1 to 15:1', '40:1 to 50:1', '5:1 to 10:1'], ans: 0,
    concept: 'Too much C slows decomposition; too much N causes ammonia loss and odor.' },
  { area: 'C', sub: 'bioprocess', topic: 'Waste Treatment', diff: 'easy',
    q: 'What is the process of treating manure in a lagoon using microorganisms called?',
    opts: ['Biological treatment', 'Chemical treatment', 'Physical treatment', 'Thermal treatment'], ans: 0,
    concept: 'Biological treatment: aerobic (with O₂) or anaerobic (without O₂). Lagoons are typically anaerobic.' },
  { area: 'C', sub: 'food-processing', topic: 'Terminology', diff: 'easy',
    q: 'What is the process of heating food in sealed containers to destroy microorganisms?',
    opts: ['Canning', 'Pasteurization', 'Freezing', 'Dehydration'], ans: 0,
    concept: 'Canning achieves commercial sterility. Pasteurization is milder (milk at 72°C/15s).' },
  { area: 'C', sub: 'food-processing', topic: 'Terminology', diff: 'easy',
    q: 'What does D-value represent in thermal processing?',
    opts: ['Time at a temperature to reduce microbes by 90%', 'Temperature to kill all microbes', 'Total process time', 'Cooling constant'], ans: 0,
    concept: 'D-value = decimal reduction time. D₁₂₁=1 min means 1 min at 121°C gives 90% reduction.' },
  { area: 'C', sub: 'food-processing', topic: 'Terminology', diff: 'easy',
    q: 'What unit operation separates solids from liquids through a porous medium?',
    opts: ['Filtration', 'Centrifugation', 'Sedimentation', 'Distillation'], ans: 0,
    concept: 'Filtration uses filter paper, cloth, sand, or membranes. Used in juice clarification.' },
  { area: 'C', sub: 'food-processing', topic: 'Terminology', diff: 'average',
    q: 'In pasteurizing milk at 72°C for 15 seconds, what is the target reduction for Coxiella burnetii?',
    opts: ['5-D reduction', '12-D reduction', '1-D reduction', '3-D reduction'], ans: 0,
    concept: 'HTST pasteurization targets 5-D reduction of Coxiella burnetii, the most heat-resistant milk pathogen.' },
  { area: 'C', sub: 'farm-structures', topic: 'Waste Treatment', diff: 'easy',
    q: 'What hydraulic retention time is typical for a farm-scale biogas digester?',
    opts: ['20-30 days', '5-10 days', '40-50 days', '1-2 days'], ans: 0,
    concept: 'Longer HRT improves VS destruction. Mesophilic digesters typically need 20-30 days.' },
  { area: 'C', sub: 'farm-structures', topic: 'Waste Treatment', diff: 'average',
    q: 'What is the allowable BOD limit for effluent discharge to inland surface waters under DENR regulations?',
    opts: ['50 mg/L', '100 mg/L', '20 mg/L', '200 mg/L'], ans: 0,
    concept: 'DENR DAO 2016-08 sets Class C inland water BOD limit at 50 mg/L for agricultural use.' },
];

// Generate output
let output = `// ABELE-style source questions for definition/nomenclature
// Generated ${new Date().toISOString()}

import { Question } from './comprehensive-questions';

`;

// Separate by area
const areaA = sourceQuestions.filter(q => q.area === 'A');
const areaB = sourceQuestions.filter(q => q.area === 'B');
const areaC = sourceQuestions.filter(q => q.area === 'C');

let idCounter = 100;

output += `export const generatedAreaAQuestions: Question[] = [
${areaA.map(q => `  {
    id: 'gen-${idCounter++}',
    area: '${q.area}',
    subTopic: '${q.sub}',
    topic: '${q.topic}',
    difficulty: '${q.diff}',
    question: '${q.q}',
    options: [${q.opts.map(o => `'${o}'`).join(', ')}],
    correctAnswer: ${q.ans},
    solution: {
      keyConcept: '${q.concept}',
      steps: ['Identify the concept', 'Recall the definition', 'Select the correct answer']
    },
    weakPoints: ['${q.topic} concepts', '${q.sub} fundamentals']
  }`).join(',\n')}
];

`;

output += `export const generatedAreaBQuestions: Question[] = [
${areaB.map(q => `  {
    id: 'gen-${idCounter++}',
    area: '${q.area}',
    subTopic: '${q.sub}',
    topic: '${q.topic}',
    difficulty: '${q.diff}',
    question: '${q.q}',
    options: [${q.opts.map(o => `'${o}'`).join(', ')}],
    correctAnswer: ${q.ans},
    solution: {
      keyConcept: '${q.concept}',
      steps: ['Identify the concept', 'Recall the definition', 'Select the correct answer']
    },
    weakPoints: ['${q.topic} concepts', '${q.sub} fundamentals']
  }`).join(',\n')}
];

`;

output += `export const generatedAreaCQuestions: Question[] = [
${areaC.map(q => `  {
    id: 'gen-${idCounter++}',
    area: '${q.area}',
    subTopic: '${q.sub}',
    topic: '${q.topic}',
    difficulty: '${q.diff}',
    question: '${q.q}',
    options: [${q.opts.map(o => `'${o}'`).join(', ')}],
    correctAnswer: ${q.ans},
    solution: {
      keyConcept: '${q.concept}',
      steps: ['Identify the concept', 'Recall the definition', 'Select the correct answer']
    },
    weakPoints: ['${q.topic} concepts', '${q.sub} fundamentals']
  }`).join(',\n')}
];
`;

writeFileSync('generated-questions.ts', output);
console.log(`Generated ${sourceQuestions.length} source questions:`);
console.log(`  Area A: ${areaA.length}`);
console.log(`  Area B: ${areaB.length}`);
console.log(`  Area C: ${areaC.length}`);
