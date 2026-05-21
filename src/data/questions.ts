// ABE Board Exam Question Bank
// Based on PRC ABELE-TOS (Table of Specifications)

export interface Question {
  id: string;
  subject: string;
  topic: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: {
    correctAnswer: string;
    whyCorrect: string;
    solution: string[];
    commonMistakes?: string[];
  };
  weakPoints?: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  month: number;
}

// Subject categorization based on ABELE TOS Areas
export const subjects = [
  { id: 'power', name: 'Power, Energy & Machinery', month: 1, topics: ['Agricultural Machinery', 'Engines & Tractors', 'PAES Standards', 'Field Capacity', 'Equipment Maintenance'] },
  { id: 'soil-water', name: 'Soil & Water Conservation', month: 2, topics: ['Soil Properties', 'Erosion Control', 'Conservation Practices', 'USLE'] },
  { id: 'irrigation', name: 'Irrigation & Drainage', month: 3, topics: ['Irrigation Methods', 'Water Requirements', 'Pumps', 'Drainage Design'] },
  { id: 'hydrology', name: 'Hydrology', month: 4, topics: ['Precipitation', 'Runoff', 'Groundwater', 'Flood Frequency'] },
  { id: 'structures', name: 'Farm Structures', month: 5, topics: ['Building Design', 'Load Analysis', 'Livestock Housing', 'Greenhouses'] },
  { id: 'processing', name: 'Post-Harvest & Processing', month: 6, topics: ['Drying', 'Storage', 'Milling', 'Food Preservation'] },
  { id: 'bioprocess', name: 'Bioprocess & Environment', month: 7, topics: ['Biogas', 'Waste Treatment', 'Composting', 'Environmental Laws'] },
  { id: 'law', name: 'Laws & Ethics', month: 8, topics: ['RA 10601', 'RA 8435 (AFMA)', 'PD 1152', 'RA 9003', 'Code of Ethics'] },
  { id: 'engineering-economy', name: 'Engineering Economy', month: 9, topics: ['Cost Analysis', 'Depreciation', 'Break-even', 'Present Worth'] },
  { id: 'machinery', name: 'Farm Machinery & Mechanization', month: 10, topics: ['Tractors', 'Tillage Equipment', 'Harvesting Machinery', 'Sprayers'] },
  { id: 'food-env', name: 'Food & Environmental Engineering', month: 11, topics: ['Thermal Processing', 'Refrigeration', 'Water Quality', 'Waste Management'] },
  { id: 'fundamentals-ag', name: 'Fundamentals of Agriculture', month: 12, topics: ['Crop Science', 'Soil Science', 'Animal Production', 'Fisheries'] },
];

export const questions: Question[] = [
  // === POWER, ENERGY & MACHINERY ===
  {
    id: 'power-001',
    subject: 'power',
    topic: 'Agricultural Machinery',
    question: 'It is the force required to pull an agricultural implement through the soil.',
    options: ['Draft', 'Traction', 'Drawbar pull', 'Torque'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: 'Draft',
      whyCorrect: 'Draft is the horizontal force needed to pull an implement. It depends on soil type, depth, and implement design.',
      solution: ['Draft is measured in kN or lbf and is used to size tractors for tillage operations.']
    },
    weakPoints: ['Tillage terminology'],
    difficulty: 'easy',
    month: 1
  },
  {
    id: 'power-002',
    subject: 'power',
    topic: 'Engines & Tractors',
    question: 'Robin engines commonly used in agricultural machinery are manufactured in what country?',
    options: ['Japan', 'USA', 'China', 'Germany'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: 'Japan',
      whyCorrect: 'Robin engines (Subaru/Robin) are Japanese-made, widely used in agricultural machinery in the Philippines.',
      solution: ['Robin = Japan, Kirby = USA, Honda = Japan, Briggs & Stratton = USA']
    },
    weakPoints: ['Engine brand origins'],
    difficulty: 'easy',
    month: 1
  },
  {
    id: 'power-003',
    subject: 'power',
    topic: 'Engines & Tractors',
    question: 'What is the typical empty weight of a standard knapsack sprayer used in crop protection?',
    options: ['16-20 kg', '5-10 kg', '25-30 kg', '35-40 kg'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: '16-20 kg',
      whyCorrect: 'Standard knapsack sprayer empty weight is approximately 16-20 kg with a typical tank capacity of 16-20 L.',
      solution: ['The empty weight matches the tank volume. When full, the total weight is approximately 32-40 kg.']
    },
    weakPoints: ['Equipment specifications'],
    difficulty: 'easy',
    month: 1
  },
  {
    id: 'power-004',
    subject: 'power',
    topic: 'Field Capacity',
    question: 'A tractor pulls a 2.0 m wide tiller at 5 km/h with 80% field efficiency. What is the effective field capacity in ha/h?',
    options: ['0.80 ha/h', '1.00 ha/h', '0.64 ha/h', '1.25 ha/h'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: '0.80 ha/h',
      whyCorrect: 'Field capacity formula: C = (W × S × E) / 10 = (2.0 × 5 × 0.80) / 10 = 8.0 / 10 = 0.80 ha/h',
      solution: ['C = (W × S × E) / 10', 'W = 2.0 m, S = 5 km/h, E = 0.80', 'C = (2.0 × 5 × 0.80) / 10 = 0.80 ha/h'],
      commonMistakes: ['Forgetting to include field efficiency', 'Using wrong constant']
    },
    weakPoints: ['Field capacity formula', 'Unit conversion'],
    difficulty: 'medium',
    month: 1
  },
  {
    id: 'power-005',
    subject: 'power',
    topic: 'PAES Standards',
    question: 'PAES 404 series covers what category of agricultural machinery?',
    options: ['Harvesting and post-harvest machinery', 'Land preparation machinery', 'Crop care machinery', 'Planting machinery'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: 'Harvesting and post-harvest machinery',
      whyCorrect: 'PAES 401 = Land Prep, 402 = Planting, 403 = Crop Care, 404 = Harvesting/Post-Harvest.',
      solution: ['PAES series: 401 (Land Preparation), 402 (Planting), 403 (Crop Care), 404 (Harvesting/Post-Harvest)']
    },
    weakPoints: ['PAES numbering'],
    difficulty: 'easy',
    month: 1
  },
  {
    id: 'power-006',
    subject: 'power',
    topic: 'PAES Standards',
    question: 'What is the minimum drying efficiency required for a grain dryer under PAES?',
    options: ['60%', '70%', '50%', '80%'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: '60%',
      whyCorrect: 'PAES requires minimum 60% drying efficiency for mechanical grain dryers to be certified.',
      solution: ['PAES 404 series specifies minimum 60% drying efficiency for grain dryers.']
    },
    weakPoints: ['Dryer standards'],
    difficulty: 'easy',
    month: 1
  },
  {
    id: 'power-007',
    subject: 'power',
    topic: 'Equipment Maintenance',
    question: 'How often should transmission oil be changed in a typical agricultural tractor?',
    options: ['Every 6 months or 24,000 km', 'Every 3 months or 10,000 km', 'Every 12 months or 50,000 km', 'Every 24 months or 100,000 km'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: 'Every 6 months or 24,000 km',
      whyCorrect: 'Standard tractor maintenance: transmission oil change every 6 months or 24,000 km whichever comes first.',
      solution: ['Regular transmission oil changes prevent gear wear and ensure smooth operation.']
    },
    weakPoints: ['Maintenance schedules'],
    difficulty: 'medium',
    month: 1
  },
  {
    id: 'power-008',
    subject: 'power',
    topic: 'Engines & Tractors',
    question: 'What is the standard PTO speed for agricultural tractors in the Philippines?',
    options: ['540 RPM', '1000 RPM', 'Both 540 and 1000 RPM', '750 RPM'],
    correctAnswer: 2,
    explanation: {
      correctAnswer: 'Both 540 and 1000 RPM',
      whyCorrect: 'International PTO standards are 540 RPM (light implements) and 1000 RPM (heavy-duty).',
      solution: ['540 RPM for light implements like mowers, 1000 RPM for heavy implements like large balers.']
    },
    weakPoints: ['PTO standards'],
    difficulty: 'easy',
    month: 1
  },

  // === SOIL & WATER CONSERVATION ===
  {
    id: 'soil-001',
    subject: 'soil-water',
    topic: 'Erosion Control',
    question: 'What type of soil erosion is caused by the impact of raindrops on bare soil?',
    options: ['Splash erosion', 'Sheet erosion', 'Rill erosion', 'Gully erosion'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: 'Splash erosion',
      whyCorrect: 'Splash erosion is the first stage of water erosion. Raindrop impact detaches soil particles and splashes them into the air.',
      solution: ['Splash → Sheet → Rill → Gully (in increasing severity order)']
    },
    weakPoints: ['Erosion types'],
    difficulty: 'easy',
    month: 2
  },
  {
    id: 'soil-002',
    subject: 'soil-water',
    topic: 'Conservation Practices',
    question: 'What soil conservation practice involves growing crops along elevation contours?',
    options: ['Contour farming', 'Strip cropping', 'Terracing', 'Mulching'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: 'Contour farming',
      whyCorrect: 'Contour farming follows elevation contours, creating ridges that slow runoff and increase infiltration.',
      solution: ['Each contour ridge acts as a small dam, reducing erosion on slopes.']
    },
    weakPoints: ['Conservation practices'],
    difficulty: 'easy',
    month: 2
  },
  {
    id: 'soil-003',
    subject: 'soil-water',
    topic: 'USLE',
    question: 'In the USLE equation A = R × K × LS × C × P, what does the K factor represent?',
    options: ['Soil erodibility', 'Rainfall erosivity', 'Slope length-gradient', 'Cover management'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: 'Soil erodibility',
      whyCorrect: 'K factor measures soil susceptibility to erosion. Sandy soils have low K (less erodible), silty soils have high K.',
      solution: ['R = rainfall erosivity, K = soil erodibility, LS = slope, C = cover, P = practice']
    },
    weakPoints: ['USLE factors'],
    difficulty: 'medium',
    month: 2
  },
  {
    id: 'soil-004',
    subject: 'soil-water',
    topic: 'Conservation Practices',
    question: 'What is the maximum allowable soil loss under USLE for most agricultural lands?',
    options: ['10 t/ha/yr', '5 t/ha/yr', '20 t/ha/yr', '2 t/ha/yr'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: '10 t/ha/yr',
      whyCorrect: 'Tolerable soil loss (T value) for most agricultural lands is 10 t/ha/year, balancing erosion with soil formation.',
      solution: ['T value ranges from 2-12 t/ha/yr depending on soil depth and type.']
    },
    weakPoints: ['Tolerable soil loss'],
    difficulty: 'medium',
    month: 2
  },

  // === IRRIGATION & DRAINAGE ===
  {
    id: 'irr-001',
    subject: 'irrigation',
    topic: 'Water Requirements',
    question: 'A field requires 100 mm of net irrigation. If irrigation efficiency is 75%, what is the gross irrigation requirement?',
    options: ['133 mm', '75 mm', '150 mm', '125 mm'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: '133 mm',
      whyCorrect: 'GIR = Net Requirement / Efficiency = 100 / 0.75 = 133.3 mm ≈ 133 mm',
      solution: ['GIR = NIR / E', 'GIR = 100 mm / 0.75 = 133 mm'],
      commonMistakes: ['Multiplying instead of dividing', 'Forgetting to convert efficiency to decimal']
    },
    weakPoints: ['Gross vs net requirement'],
    difficulty: 'easy',
    month: 3
  },
  {
    id: 'irr-002',
    subject: 'irrigation',
    topic: 'Irrigation Methods',
    question: 'What irrigation method has the highest application efficiency (90-95%)?',
    options: ['Drip irrigation', 'Sprinkler irrigation', 'Furrow irrigation', 'Basin irrigation'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: 'Drip irrigation',
      whyCorrect: 'Drip irrigation applies water directly to the root zone with minimal evaporation or runoff losses.',
      solution: ['Drip: 90-95%, Sprinkler: 70-85%, Surface: 50-70% efficiency']
    },
    weakPoints: ['Irrigation methods efficiency'],
    difficulty: 'easy',
    month: 3
  },
  {
    id: 'irr-003',
    subject: 'irrigation',
    topic: 'Pumps',
    question: 'What pump type is most suitable for lifting water from deep wells (greater than 20 m)?',
    options: ['Submersible pump', 'Centrifugal pump', 'Axial flow pump', 'Diaphragm pump'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: 'Submersible pump',
      whyCorrect: 'Submersible pumps are designed for deep well applications. Centrifugal pumps are limited to suction lifts under 7 m.',
      solution: ['Submersible pumps are multi-stage and can lift water from 50+ m depths.']
    },
    weakPoints: ['Pump selection'],
    difficulty: 'medium',
    month: 3
  },

  // === HYDROLOGY ===
  {
    id: 'hydro-001',
    subject: 'hydrology',
    topic: 'Runoff',
    question: 'What is the peak runoff from a 5-hectare watershed with C = 0.5 and rainfall intensity of 100 mm/h?',
    options: ['0.694 m³/s', '0.500 m³/s', '1.000 m³/s', '0.347 m³/s'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: '0.694 m³/s',
      whyCorrect: 'Q = C × i × A / 360 = 0.5 × 100 × 5 / 360 = 0.694 m³/s',
      solution: ['Q = C × i (mm/h) × A (ha) / 360', 'Q = 0.5 × 100 × 5 / 360 = 0.694 m³/s'],
      commonMistakes: ['Wrong unit conversion', 'Using area in wrong units']
    },
    weakPoints: ['Rational method'],
    difficulty: 'medium',
    month: 4
  },
  {
    id: 'hydro-002',
    subject: 'hydrology',
    topic: 'Flood Frequency',
    question: 'A 20-year flood has what probability of being exceeded in any given year?',
    options: ['5%', '20%', '1%', '0.5%'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: '5%',
      whyCorrect: 'Exceedance probability = 1 / Return Period = 1/20 = 0.05 = 5%.',
      solution: ['P = 1/T', 'P = 1/20 = 0.05 = 5%']
    },
    weakPoints: ['Return period concept'],
    difficulty: 'easy',
    month: 4
  },

  // === FARM STRUCTURES ===
  {
    id: 'struct-001',
    subject: 'structures',
    topic: 'Building Design',
    question: 'What is the minimum recommended roof slope for livestock buildings in the Philippines?',
    options: ['4:12 (18.4°)', '1:12 (4.8°)', '2:12 (9.5°)', '6:12 (26.6°)'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: '4:12 (18.4°)',
      whyCorrect: 'Minimum 4:12 roof slope ensures adequate ventilation through stack effect and proper rainwater runoff.',
      solution: ['Steeper roofs improve natural ventilation and prevent water pooling.']
    },
    weakPoints: ['Livestock housing design'],
    difficulty: 'medium',
    month: 5
  },
  {
    id: 'struct-002',
    subject: 'structures',
    topic: 'Building Design',
    question: 'In farm structure design, what is considered a dead load?',
    options: ['Weight of the structure itself and fixed components', 'Weight of movable items', 'Wind and earthquake forces', 'Rainwater accumulation'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: 'Weight of the structure itself and fixed components',
      whyCorrect: 'Dead load includes beams, columns, walls, roofing. Live loads are variable loads like equipment and people.',
      solution: ['Dead load = permanent/static, Live load = variable/movable']
    },
    weakPoints: ['Structural loads'],
    difficulty: 'easy',
    month: 5
  },

  // === POST-HARVEST & PROCESSING ===
  {
    id: 'proc-001',
    subject: 'processing',
    topic: 'Drying',
    question: 'A grain dryer reduces moisture of paddy from 24% to 14% (wet basis). If 1,000 kg wet paddy enters, what is the dried weight?',
    options: ['884 kg', '860 kg', '907 kg', '950 kg'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: '884 kg',
      whyCorrect: 'Dry matter = 1,000 × (1 - 0.24) = 760 kg. Final weight = 760 / (1 - 0.14) = 884 kg.',
      solution: ['Dry matter is conserved: W_final = W_initial × (1 - MC_i) / (1 - MC_f)', 'W_f = 1,000 × 0.76 / 0.86 = 884 kg'],
      commonMistakes: ['Using dry basis instead of wet basis']
    },
    weakPoints: ['Drying mass balance'],
    difficulty: 'medium',
    month: 6
  },
  {
    id: 'proc-002',
    subject: 'processing',
    topic: 'Storage',
    question: 'What is the safe moisture content for long-term storage of milled rice?',
    options: ['14%', '10%', '18%', '20%'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: '14%',
      whyCorrect: 'Safe moisture for rice storage is 14% wet basis. Higher moisture promotes mold growth and insect infestation.',
      solution: ['Standard trading moisture for grains is 14% wet basis.']
    },
    weakPoints: ['Grain storage conditions'],
    difficulty: 'easy',
    month: 6
  },
  {
    id: 'proc-003',
    subject: 'processing',
    topic: 'Food Preservation',
    question: 'In canning, what does the D-value represent?',
    options: ['Time to reduce microbial population by 90% at a given temperature', 'Temperature to kill all microorganisms', 'Total process time', 'Cooling time constant'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: 'Time to reduce microbial population by 90% at a given temperature',
      whyCorrect: 'D-value (decimal reduction time) is the time at a specific temperature to kill 90% of target microorganisms.',
      solution: ['D₁₂₁ = 1 min means 1 minute at 121°C reduces microbes by 90% (1 log).']
    },
    weakPoints: ['Thermal processing parameters'],
    difficulty: 'medium',
    month: 6
  },

  // === BIOPROCESS & ENVIRONMENT ===
  {
    id: 'bio-001',
    subject: 'bioprocess',
    topic: 'Biogas',
    question: 'What is the typical methane content of combustible biogas?',
    options: ['55-65%', '30-40%', '70-80%', '90-95%'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: '55-65%',
      whyCorrect: 'Biogas is 55-65% methane and 35-45% CO₂. Methane is the combustible component.',
      solution: ['Higher methane content = higher heating value. Typical LHV = 21-23 MJ/m³.']
    },
    weakPoints: ['Biogas composition'],
    difficulty: 'easy',
    month: 7
  },
  {
    id: 'bio-002',
    subject: 'bioprocess',
    topic: 'Waste Treatment',
    question: 'What is the ideal C:N ratio for aerobic composting of agricultural wastes?',
    options: ['25:1 to 30:1', '10:1 to 15:1', '40:1 to 50:1', '5:1 to 10:1'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: '25:1 to 30:1',
      whyCorrect: 'Optimal C:N ratio balances microbial activity. Too high C:N slows decomposition; too low causes ammonia loss.',
      solution: ['C:N of 25-30:1 is ideal. Adjust with green materials (low C:N) and brown materials (high C:N).']
    },
    weakPoints: ['Composting parameters'],
    difficulty: 'easy',
    month: 7
  },

  // === LAWS & ETHICS ===
  {
    id: 'law-001',
    subject: 'law',
    topic: 'RA 10601',
    question: 'RA 10601, the Agricultural and Biosystems Engineering Law, was enacted in what year?',
    options: ['2013', '1997', '2003', '2010'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: '2013',
      whyCorrect: 'RA 10601 (ABE Law) was signed on July 23, 2013, replacing RA 8559 (Old Agricultural Engineering Law).',
      solution: ['RA 10601 = 2013; RA 8435 (AFMA) = 1997']
    },
    weakPoints: ['ABE Law enactment'],
    difficulty: 'easy',
    month: 8
  },
  {
    id: 'law-002',
    subject: 'law',
    topic: 'PD 1152',
    question: 'Presidential Decree 1152 is also known as what?',
    options: ['Philippine Environmental Code', 'Philippine Clean Water Act', 'Ecological Solid Waste Management Act', 'Pollution Control Law'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: 'Philippine Environmental Code',
      whyCorrect: 'PD 1152 (1977) sets environmental quality standards for air, water, land, and noise management.',
      solution: ['PD 1152 = Environmental Code; RA 9003 = Solid Waste Act; RA 8749 = Clean Air Act; RA 9275 = Clean Water Act']
    },
    weakPoints: ['Environmental legislation'],
    difficulty: 'easy',
    month: 8
  },
  {
    id: 'law-003',
    subject: 'law',
    topic: 'Code of Ethics',
    question: 'How many canons of professional ethics are in the Code for Agricultural and Biosystems Engineers?',
    options: ['6', '5', '7', '4'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: '6',
      whyCorrect: 'The ABE Code of Ethics has 6 canons covering public welfare, integrity, competence, truthfulness, conflict avoidance, and professional development.',
      solution: ['Canons: 1-Public Welfare, 2-Integrity, 3-Competence, 4-Truth, 5-Conflict Avoidance, 6-Professional Development']
    },
    weakPoints: ['Code of Ethics'],
    difficulty: 'easy',
    month: 8
  },

  // === ENGINEERING ECONOMY ===
  {
    id: 'econ-001',
    subject: 'engineering-economy',
    topic: 'Depreciation',
    question: 'A machine costs ₱500,000 with salvage value of ₱50,000 after 10 years. What is the annual straight-line depreciation?',
    options: ['₱45,000/yr', '₱50,000/yr', '₱40,000/yr', '₱55,000/yr'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: '₱45,000/yr',
      whyCorrect: 'Annual depreciation = (Cost - Salvage) / Life = (500,000 - 50,000) / 10 = ₱45,000/yr',
      solution: ['D = (500,000 - 50,000) / 10 = 45,000'],
      commonMistakes: ['Forgetting to subtract salvage value']
    },
    weakPoints: ['Straight-line depreciation'],
    difficulty: 'easy',
    month: 9
  },
  {
    id: 'econ-002',
    subject: 'engineering-economy',
    topic: 'Break-even Analysis',
    question: 'Fixed costs are ₱200,000, variable cost per unit is ₱75, selling price is ₱125. What is the break-even quantity?',
    options: ['4,000 units', '2,000 units', '3,000 units', '5,000 units'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: '4,000 units',
      whyCorrect: 'BEP = FC / (P - VC) = 200,000 / (125 - 75) = 200,000 / 50 = 4,000 units',
      solution: ['BEP = Fixed Cost / Contribution Margin = 200,000 / 50 = 4,000 units']
    },
    weakPoints: ['Break-even point'],
    difficulty: 'medium',
    month: 9
  },

  // === FARM MACHINERY & MECHANIZATION ===
  {
    id: 'mach-001',
    subject: 'machinery',
    topic: 'Tillage Equipment',
    question: 'What implement breaks compacted soil layers below normal plow depth?',
    options: ['Subsoiler', 'Moldboard plow', 'Disc plow', 'Rotavator'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: 'Subsoiler',
      whyCorrect: 'Subsoilers penetrate 30-60 cm deep to break hardpan without inverting soil, improving drainage and root growth.',
      solution: ['Subsoiling is deep tillage (30-60 cm) done when soil is dry for best fracturing.']
    },
    weakPoints: ['Deep tillage implements'],
    difficulty: 'easy',
    month: 10
  },
  {
    id: 'mach-002',
    subject: 'machinery',
    topic: 'Harvesting Machinery',
    question: 'What component of a combine harvester separates grain from straw?',
    options: ['Threshing cylinder and concave', 'Cleaning fan', 'Reel', 'Auger'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: 'Threshing cylinder and concave',
      whyCorrect: 'The rotating cylinder against the concave rubs and beats grain from the straw. Fan and sieves then clean the grain.',
      solution: ['Threshing → Separation → Cleaning → Conveying to grain tank']
    },
    weakPoints: ['Combine components'],
    difficulty: 'easy',
    month: 10
  },
  {
    id: 'mach-003',
    subject: 'machinery',
    topic: 'Harvesting Machinery',
    question: 'What is the typical threshing cylinder speed for rice?',
    options: ['500-700 RPM', '200-300 RPM', '1000-1200 RPM', '300-400 RPM'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: '500-700 RPM',
      whyCorrect: 'Rice requires moderate cylinder speed (500-700 RPM) to avoid grain damage. Higher speeds increase damage.',
      solution: ['Proper cylinder speed balances threshing efficiency with grain quality.']
    },
    weakPoints: ['Threshing parameters'],
    difficulty: 'medium',
    month: 10
  },

  // === FOOD & ENVIRONMENTAL ENGINEERING ===
  {
    id: 'food-001',
    subject: 'food-env',
    topic: 'Thermal Processing',
    question: 'What is the z-value in thermal processing of food?',
    options: ['Temperature change needed to alter D-value by 90%', 'Time at 121°C for 90% reduction', 'Total process time', 'Cooling rate constant'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: 'Temperature change needed to alter D-value by 90%',
      whyCorrect: 'z-value is the °C required to change D-value by 1 log. For Clostridium botulinum, z = 10°C.',
      solution: ['z = (T₂ - T₁) / log(D₁/D₂). Lower z means more sensitive to temperature change.']
    },
    weakPoints: ['Thermal processing parameters'],
    difficulty: 'medium',
    month: 11
  },
  {
    id: 'food-002',
    subject: 'food-env',
    topic: 'Refrigeration',
    question: 'What is 1 ton of refrigeration (TR) equivalent to in kW?',
    options: ['3.517 kW', '1.000 kW', '2.500 kW', '4.500 kW'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: '3.517 kW',
      whyCorrect: '1 TR = 3.517 kW = heat required to melt 1 short ton of ice in 24 hours.',
      solution: ['TR = Q_cooling (kW) / 3.517. Used to size refrigeration equipment.']
    },
    weakPoints: ['Refrigeration units'],
    difficulty: 'easy',
    month: 11
  },

  // === FUNDAMENTALS OF AGRICULTURE ===
  {
    id: 'agri-001',
    subject: 'fundamentals-ag',
    topic: 'Crop Science',
    question: 'What is the process by which plants convert light energy into chemical energy?',
    options: ['Photosynthesis', 'Respiration', 'Transpiration', 'Absorption'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: 'Photosynthesis',
      whyCorrect: 'Photosynthesis uses sunlight, CO₂, and water to produce glucose and oxygen. The reaction is driven by chlorophyll.',
      solution: ['6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂']
    },
    weakPoints: ['Plant physiology'],
    difficulty: 'easy',
    month: 12
  },
  {
    id: 'agri-002',
    subject: 'fundamentals-ag',
    topic: 'Soil Science',
    question: 'What soil texture has approximately equal proportions of sand, silt, and clay?',
    options: ['Loam', 'Clay', 'Sand', 'Silt loam'],
    correctAnswer: 0,
    explanation: {
      correctAnswer: 'Loam',
      whyCorrect: 'Loam is the ideal soil texture with balanced sand (40%), silt (40%), and clay (20%) providing good drainage and nutrient retention.',
      solution: ['Loam = ideal agricultural soil. Sand drains fast, clay holds water/ nutrients.']
    },
    weakPoints: ['Soil texture'],
    difficulty: 'easy',
    month: 12
  },
];

export function getQuestionsBySubject(subjectId: string): Question[] {
  return questions.filter(question => question.subject === subjectId);
}

export function getQuestionsByMonth(month: number): Question[] {
  return questions.filter(question => question.month === month);
}

export function getRandomQuestions(count: number, subjectId?: string): Question[] {
  let pool = subjectId ? getQuestionsBySubject(subjectId) : questions;
  return [...pool].sort(() => Math.random() - 0.5).slice(0, count);
}

export function getSubjectName(subjectId: string): string {
  const subject = subjects.find(entry => entry.id === subjectId);
  return subject?.name || subjectId;
}