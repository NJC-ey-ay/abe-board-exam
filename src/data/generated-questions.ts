// ABELE Board Exam Style Questions - Definition, Nomenclature & Applied Knowledge
// Based on recalled Sept 2022 board exam patterns

import { Question } from './comprehensive-questions';

// ==================== AREA C: STRUCTURES & BIOPROCESS ====================

export const generatedAreaCQuestions: Question[] = [
];

export const generatedAreaBQuestions: Question[] = [
];

export const generatedAreaAQuestions: Question[] = [
  {
    id: 'gen-001',
    area: 'A',
    subTopic: 'agri-machinery',
    topic: 'Tractor Systems',
    difficulty: 'easy',
    question: 'What is the function of a differential in a tractor drivetrain?',
    options: ['Allows wheels to rotate at different speeds when turning', 'Increases engine torque', 'Reduces engine speed', 'Transmits power to PTO'],
    correctAnswer: 0,
    solution: {
      keyConcept: 'The differential allows the outer wheel to travel farther than the inner wheel during turns, preventing tire scrubbing.',
      steps: ['Identify the concept', 'Recall the definition', 'Select the correct answer']
    },
    weakPoints: ['Tractor Systems', 'Drivetrain components']
  },
  {
    id: 'gen-002',
    area: 'A',
    subTopic: 'agri-machinery',
    topic: 'Tractor Systems',
    difficulty: 'easy',
    question: 'What type of tractor hitches uses three attachment points for implements?',
    options: ['Three-point hitch', 'Drawbar hitch', 'Puller hitch', 'Trailer hitch'],
    correctAnswer: 0,
    solution: {
      keyConcept: 'The three-point hitch (category I, II, III) provides both lifting and draft control for mounted implements.',
      steps: ['Identify the concept', 'Recall the definition', 'Select the correct answer']
    },
    weakPoints: ['Tractor Systems', 'Hitch types']
  },
  {
    id: 'gen-003',
    area: 'A',
    subTopic: 'agri-machinery',
    topic: 'Tractor Systems',
    difficulty: 'easy',
    question: 'What is the purpose of a governor on an agricultural engine?',
    options: ['Maintains consistent engine speed under varying loads', 'Increases maximum engine power', 'Reduces fuel consumption at idle', 'Cools the engine'],
    correctAnswer: 0,
    solution: {
      keyConcept: 'The governor automatically adjusts fuel delivery to maintain a set engine speed regardless of load changes.',
      steps: ['Identify the concept', 'Recall the definition', 'Select the correct answer']
    },
    weakPoints: ['Tractor Systems', 'Engine controls']
  },
  {
    id: 'gen-004',
    area: 'A',
    subTopic: 'agri-machinery',
    topic: 'Tractor Systems',
    difficulty: 'easy',
    question: 'What is meant by "locking the differential" on a tractor?',
    options: ['Forces both drive wheels to turn at the same speed', 'Prevents the tractor from moving', 'Engages the parking brake', 'Disconnects the PTO'],
    correctAnswer: 0,
    solution: {
      keyConcept: 'Differential lock provides equal torque to both wheels when traction is uneven, helping the tractor move through slippery conditions.',
      steps: ['Identify the concept', 'Recall the definition', 'Select the correct answer']
    },
    weakPoints: ['Tractor Systems', 'Differential operation']
  },
  {
    id: 'gen-005',
    area: 'A',
    subTopic: 'agri-machinery',
    topic: 'Tractor Systems',
    difficulty: 'average',
    question: 'In a tractor, what component transfers power from the transmission to the rear axle?',
    options: ['Final drive', 'Clutch', 'PTO shaft', 'Differential'],
    correctAnswer: 3,
    solution: {
      keyConcept: 'The differential receives power from the transmission via the drive shaft and distributes it to the rear axles.',
      steps: ['Identify the concept', 'Recall the definition', 'Select the correct answer']
    },
    weakPoints: ['Tractor Systems', 'Power flow path']
  },
  {
    id: 'gen-006',
    area: 'A',
    subTopic: 'agri-machinery',
    topic: 'Engine Specifications',
    difficulty: 'average',
    question: 'A tractor engine has a compression ratio of 17:1. What type of fuel does it most likely use?',
    options: ['Diesel', 'Gasoline', 'Kerosene', 'LPG'],
    correctAnswer: 0,
    solution: {
      keyConcept: 'Diesel engines have high compression ratios (16:1 to 22:1) for compression ignition. Gasoline engines have lower ratios (8:1 to 11:1).',
      steps: ['Identify the concept', 'Recall the definition', 'Select the correct answer']
    },
    weakPoints: ['Engine Specifications', 'Fuel types']
  },
  {
    id: 'gen-007',
    area: 'A',
    subTopic: 'agri-machinery',
    topic: 'Engine Specifications',
    difficulty: 'easy',
    question: 'What does the term "bore" refer to in engine specifications?',
    options: ['Diameter of the cylinder', 'Length of piston travel', 'Distance between cylinders', 'Diameter of the crankshaft'],
    correctAnswer: 0,
    solution: {
      keyConcept: 'Bore is the internal diameter of the engine cylinder. Stroke is the distance the piston travels from TDC to BDC.',
      steps: ['Identify the concept', 'Recall the definition', 'Select the correct answer']
    },
    weakPoints: ['Engine Specifications', 'Engine geometry']
  },
  {
    id: 'gen-008',
    area: 'A',
    subTopic: 'agri-machinery',
    topic: 'Engine Specifications',
    difficulty: 'easy',
    question: 'What does "4-stroke cycle" mean in engine operation?',
    options: ['Intake, Compression, Power, Exhaust in 2 crankshaft revolutions', 'Four power strokes per revolution', 'Four cylinders operating sequentially', 'Engine runs on four fuels'],
    correctAnswer: 0,
    solution: {
      keyConcept: 'A 4-stroke engine completes one power cycle in 4 piston strokes (2 crankshaft revolutions): intake, compression, power, exhaust.',
      steps: ['Identify the concept', 'Recall the definition', 'Select the correct answer']
    },
    weakPoints: ['Engine Specifications', 'Engine cycles']
  },
  {
    id: 'gen-009',
    area: 'A',
    subTopic: 'agri-machinery',
    topic: 'Engine Specifications',
    difficulty: 'average',
    question: 'What is the typical firing order of a 4-cylinder agricultural engine?',
    options: ['1-3-4-2', '1-2-3-4', '1-4-3-2', '1-2-4-3'],
    correctAnswer: 0,
    solution: {
      keyConcept: '1-3-4-2 is the standard firing order for inline 4-cylinder engines, balanced for smooth operation.',
      steps: ['Identify the concept', 'Recall the definition', 'Select the correct answer']
    },
    weakPoints: ['Engine Specifications', 'Firing order']
  },
  {
    id: 'gen-010',
    area: 'A',
    subTopic: 'agri-machinery',
    topic: 'Tillage Implements',
    difficulty: 'easy',
    question: 'What implement is used for shallow tillage and weed control between crop rows?',
    options: ['Cultivator', 'Moldboard plow', 'Subsoiler', 'Harrow'],
    correctAnswer: 0,
    solution: {
      keyConcept: 'Cultivators perform shallow tillage (5-15 cm) to control weeds, aerate soil, and incorporate fertiliser without deep inversion.',
      steps: ['Identify the concept', 'Recall the definition', 'Select the correct answer']
    },
    weakPoints: ['Tillage Implements', 'Secondary tillage']
  },
  {
    id: 'gen-011',
    area: 'A',
    subTopic: 'agri-machinery',
    topic: 'Tillage Implements',
    difficulty: 'easy',
    question: 'What implement breaks compacted soil layers below normal plow depth without inverting the soil?',
    options: ['Subsoiler', 'Moldboard plow', 'Disc plow', 'Rotavator'],
    correctAnswer: 0,
    solution: {
      keyConcept: 'Subsoilers penetrate 30-60 cm deep to break hardpan layers, improving drainage and root penetration.',
      steps: ['Identify the concept', 'Recall the definition', 'Select the correct answer']
    },
    weakPoints: ['Tillage Implements', 'Deep tillage']
  },
  {
    id: 'gen-012',
    area: 'A',
    subTopic: 'agri-machinery',
    topic: 'Tillage Implements',
    difficulty: 'easy',
    question: 'What type of harrow uses spring-loaded teeth to break clods and level soil?',
    options: ['Spring-tooth harrow', 'Disc harrow', 'Spike-tooth harrow', 'Chain harrow'],
    correctAnswer: 0,
    solution: {
      keyConcept: 'Spring-tooth harrows have flexible tines that vibrate, breaking clods without clogging. Used after primary tillage.',
      steps: ['Identify the concept', 'Recall the definition', 'Select the correct answer']
    },
    weakPoints: ['Tillage Implements', 'Secondary tillage']
  },
  {
    id: 'gen-013',
    area: 'A',
    subTopic: 'agri-machinery',
    topic: 'Harvesting Machinery',
    difficulty: 'easy',
    question: 'What is the primary function of the threshing mechanism in a combine harvester?',
    options: ['Separates grain from the stalk and head', 'Cuts the crop at ground level', 'Cleans the grain from chaff', 'Conveys grain to the tank'],
    correctAnswer: 0,
    solution: {
      keyConcept: 'Threshing uses a rotating cylinder and concave to separate grains from straw. Cleaning follows to separate grain from chaff.',
      steps: ['Identify the concept', 'Recall the definition', 'Select the correct answer']
    },
    weakPoints: ['Harvesting Machinery', 'Combine components']
  },
  {
    id: 'gen-014',
    area: 'A',
    subTopic: 'agri-machinery',
    topic: 'Harvesting Machinery',
    difficulty: 'easy',
    question: 'What component of a combine harvester separates grain from chaff using air flow?',
    options: ['Cleaning fan', 'Threshing cylinder', 'Concave', 'Auger'],
    correctAnswer: 0,
    solution: {
      keyConcept: 'The cleaning fan blows air through the cascade of grain and chaff over sieves. Lighter chaff is blown away while grain falls through.',
      steps: ['Identify the concept', 'Recall the definition', 'Select the correct answer']
    },
    weakPoints: ['Harvesting Machinery', 'Combine components']
  },
  {
    id: 'gen-015',
    area: 'A',
    subTopic: 'agri-machinery',
    topic: 'Harvesting Machinery',
    difficulty: 'average',
    question: 'What is the typical cylinder speed range for threshing rice using an axial-flow thresher?',
    options: ['500-700 RPM', '200-300 RPM', '1000-1200 RPM', '300-400 RPM'],
    correctAnswer: 0,
    solution: {
      keyConcept: 'Rice threshing requires moderate cylinder speed (500-700 RPM) to avoid grain damage while achieving complete separation.',
      steps: ['Identify the concept', 'Recall the definition', 'Select the correct answer']
    },
    weakPoints: ['Harvesting Machinery', 'Threshing parameters']
  },
  {
    id: 'gen-016',
    area: 'A',
    subTopic: 'agri-machinery',
    topic: 'Sprayers',
    difficulty: 'easy',
    question: 'What type of nozzle produces the finest droplet size for agricultural spraying?',
    options: ['Hydraulic atomizing (hollow cone)', 'Flood jet', 'Solid stream', 'Air induction'],
    correctAnswer: 0,
    solution: {
      keyConcept: 'Hollow cone nozzles produce fine droplets at high pressure. Air induction nozzles produce larger droplets with less drift.',
      steps: ['Identify the concept', 'Recall the definition', 'Select the correct answer']
    },
    weakPoints: ['Sprayers', 'Nozzle types']
  },
  {
    id: 'gen-017',
    area: 'A',
    subTopic: 'agri-machinery',
    topic: 'Sprayers',
    difficulty: 'average',
    question: 'What is the recommended operating pressure range for a typical knapsack sprayer?',
    options: ['2-4 kg/cm² (200-400 kPa)', '8-10 kg/cm²', '0.5-1 kg/cm²', '15-20 kg/cm²'],
    correctAnswer: 0,
    solution: {
      keyConcept: 'Knapsack sprayers operate at 2-4 kg/cm². Higher pressure produces finer droplets and increases drift risk.',
      steps: ['Identify the concept', 'Recall the definition', 'Select the correct answer']
    },
    weakPoints: ['Sprayers', 'Operating parameters']
  },
  {
    id: 'gen-018',
    area: 'A',
    subTopic: 'agri-machinery',
    topic: 'Sprayers',
    difficulty: 'easy',
    question: 'What is the term for the volume of liquid delivered by a spray nozzle per unit time?',
    options: ['Discharge rate', 'Application rate', 'Drift potential', 'Pressure drop'],
    correctAnswer: 0,
    solution: {
      keyConcept: 'Nozzle discharge rate (L/min) depends on orifice size and operating pressure. Doubling pressure increases flow by approximately 40%.',
      steps: ['Identify the concept', 'Recall the definition', 'Select the correct answer']
    },
    weakPoints: ['Sprayers', 'Calibration terms']
  },
  {
    id: 'gen-019',
    area: 'A',
    subTopic: 'agri-machinery',
    topic: 'Sprayers',
    difficulty: 'average',
    question: 'What spray volume (L/ha) is typically used for pre-emergence herbicide application in rice?',
    options: ['200-400 L/ha', '50-100 L/ha', '600-800 L/ha', '20-40 L/ha'],
    correctAnswer: 0,
    solution: {
      keyConcept: 'Pre-emergence herbicides require 200-400 L/ha for uniform soil coverage. Low volume spraying (<100 L/ha) is for post-emergence using drift-reducing nozzles.',
      steps: ['Identify the concept', 'Recall the definition', 'Select the correct answer']
    },
    weakPoints: ['Sprayers', 'Application rates']
  },
  {
    id: 'gen-020',
    area: 'A',
    subTopic: 'agri-machinery',
    topic: 'PAES Standards',
    difficulty: 'average',
    question: 'Under PAES 402, what is the minimum transplanting efficiency for an automatic rice transplanter?',
    options: ['90%', '95%', '85%', '80%'],
    correctAnswer: 0,
    solution: {
      keyConcept: 'PAES 402 for rice transplanter requires minimum 90% transplanting efficiency with ≤5% missing hills.',
      steps: ['Identify the concept', 'Recall the definition', 'Select the correct answer']
    },
    weakPoints: ['PAES Standards', 'Transplanter requirements']
  },
  {
    id: 'gen-021',
    area: 'A',
    subTopic: 'agri-machinery',
    topic: 'PAES Standards',
    difficulty: 'average',
    question: 'What is the minimum threshing efficiency required for a rice thresher under PAES 404?',
    options: ['98%', '95%', '99%', '90%'],
    correctAnswer: 0,
    solution: {
      keyConcept: 'PAES 404 requires minimum 98% threshing efficiency for rice threshers with ≤3% grain damage.',
      steps: ['Identify the concept', 'Recall the definition', 'Select the correct answer']
    },
    weakPoints: ['PAES Standards', 'Thresher requirements']
  },
  {
    id: 'gen-022',
    area: 'A',
    subTopic: 'agri-machinery',
    topic: 'PAES Standards',
    difficulty: 'easy',
    question: 'What body is responsible for testing and evaluating agricultural machinery under PAES?',
    options: ['AMTEC (Agricultural Machinery Testing and Evaluation Center)', 'DA-BAFE', 'PCAF', 'DOST'],
    correctAnswer: 0,
    solution: {
      keyConcept: 'AMTEC, based at UPLB, conducts official testing and performance evaluation of agricultural machinery to verify PAES compliance.',
      steps: ['Identify the concept', 'Recall the definition', 'Select the correct answer']
    },
    weakPoints: ['PAES Standards', 'Testing bodies']
  },
  {
    id: 'gen-023',
    area: 'A',
    subTopic: 'agri-machinery',
    topic: 'PAES Standards',
    difficulty: 'easy',
    question: 'What does the acronym AMTEC stand for?',
    options: ['Agricultural Machinery Testing and Evaluation Center', 'Agricultural Machinery Technical Evaluation Council', 'Agricultural Mechanization Testing and Evaluation Center', 'Advanced Machinery Testing and Evaluation Center'],
    correctAnswer: 0,
    solution: {
      keyConcept: 'AMTEC is the official agricultural machinery testing body under the Department of Agriculture, based at UPLB.',
      steps: ['Identify the concept', 'Recall the definition', 'Select the correct answer']
    },
    weakPoints: ['PAES Standards', 'Testing institutions']
  },
  {
    id: 'gen-024',
    area: 'A',
    subTopic: 'agri-machinery',
    topic: 'Maintenance',
    difficulty: 'average',
    question: 'When should a tractor operator check the engine oil level?',
    options: ['Daily before starting the engine', 'Weekly', 'Monthly', 'Only during scheduled maintenance'],
    correctAnswer: 0,
    solution: {
      keyConcept: 'Engine oil should be checked daily before starting. Low oil can cause catastrophic engine failure.',
      steps: ['Identify the concept', 'Recall the definition', 'Select the correct answer']
    },
    weakPoints: ['Maintenance', 'Daily checks']
  },
];
