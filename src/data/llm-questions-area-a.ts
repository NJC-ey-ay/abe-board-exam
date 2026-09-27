import { Question } from './comprehensive-questions';

export const llmAreaAQuestions: Question[] = [
  {
    id: 'llm-a-0001', area: 'A', subTopic: 'power-engineering',
    topic: 'Internal Combustion Engine Fundamentals', type: 'theory', difficulty: 'easy',
    question: 'What is the primary function of the crankshaft in an internal combustion engine?',
    options: ['To ignite the fuel-air mixture', 'To convert linear motion to rotational motion', 'To regulate engine temperature', 'To measure fuel consumption'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0002', area: 'A', subTopic: 'power-engineering',
    topic: 'Combustion Engine Cycles', type: 'theory', difficulty: 'average',
    question: 'Which cycle describes the operation of a spark-ignition engine?',
    options: ['Otto cycle', 'Diesel cycle', 'Brayton cycle', 'Dual cycle'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0003', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Specifications', type: 'theory', difficulty: 'easy',
    question: 'What does the compression ratio of an engine measure?',
    options: ['Torque output', 'Maximum power output', 'Ratio of total volume to clearance volume', 'Fuel efficiency'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0004', area: 'A', subTopic: 'power-engineering',
    topic: 'Power Transmission', type: 'theory', difficulty: 'average',
    question: 'What is the purpose of a power take-off (PTO) in tractors?',
    options: ['To adjust the throttle', 'To serve as a hydraulic lift', 'To deliver power to implements', 'To control the engine\'s temperature'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0005', area: 'A', subTopic: 'power-engineering',
    topic: 'Fuel Systems', type: 'theory', difficulty: 'average',
    question: 'Which component is critical for the atomization of fuel in a compression-ignition engine?',
    options: ['Carburetor', 'Spark plug', 'Fuel injector', 'Air filter'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0006', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Efficiency', type: 'theory', difficulty: 'hard',
    question: 'What does mechanical efficiency of an engine indicate?',
    options: ['The amount of power lost to friction', 'The ratio of brake horsepower to indicated horsepower', 'The effectiveness of fuel conversion', 'The thermal losses in the engine'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0007', area: 'A', subTopic: 'power-engineering',
    topic: 'Power Available from Sources', type: 'theory', difficulty: 'average',
    question: 'What is indicated horsepower (IHP)?',
    options: ['Power available at the crankshaft', 'Power generated at the combustion chamber', 'Usable power after friction losses', 'Power required to operate auxiliary systems'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0008', area: 'A', subTopic: 'power-engineering',
    topic: 'Fuel Properties', type: 'theory', difficulty: 'hard',
    question: 'What is the significance of octane rating in gasoline engines?',
    options: ['Indicates energy density', 'Measures knock resistance', 'Indicates lubrication quality', 'Measures volatility'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0009', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Design', type: 'theory', difficulty: 'easy',
    question: 'In a four-stroke engine, how many revolutions of the crankshaft are needed to complete one power cycle?',
    options: ['One', 'Two', 'Three', 'Four'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0010', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Performance', type: 'computation', difficulty: 'hard',
    question: 'A 6-cylinder diesel engine has a bore of 90 mm and a stroke of 100 mm. Calculate total displacement in liters. Note: The engine has a compression ratio of 18:1, and it operates at 1800 RPM. The fuel consumption is 15 L/h. What is the displacement?',
    options: ['0.54 L', '0.81 L', '1.08 L', '1.50 L'],
    correctAnswer: 2,
    solution: {
      given: 'n=6, bore=90mm=0.09m, stroke=100mm=0.10m',
      steps: ['Calculate displacement: Vd = n × π/4 × bore² × stroke = 6 × π/4 × (0.09)² × 0.10 = 0.0003827 m³', 'Convert to liters: 0.0003827 m³ × 1000 = 0.3827 L'],
      formula: 'Vd = n × π/4 × bore² × stroke',
      keyConcept: 'Displacement is the total volume of the cylinders in an engine.',
      commonMistakes: ['Forgetting to convert to liters', 'Miscalculating bore or stroke', 'Using wrong cylinder count'],
      extraneousGivens: ['Compression ratio: 18:1', 'Operating RPM: 1800', 'Fuel consumption: 15 L/h'],
    }
  },
  {
    id: 'llm-a-0011', area: 'A', subTopic: 'power-engineering',
    topic: 'Power Available from Sources', type: 'computation', difficulty: 'average',
    question: 'A diesel engine has a rated output of 50 hp. If the thermal efficiency is 30% and the fuel contains 38 MJ/kg, how much fuel in kilograms will it consume per hour? The engine operates at 3600 RPM, and has an indicative horsepower of 55 hp. What is the fuel consumption?',
    options: ['1.2 kg/h', '1.4 kg/h', '1.6 kg/h', '1.8 kg/h'],
    correctAnswer: 2,
    solution: {
      given: 'Power = 50 hp, thermal efficiency = 30%, heating value = 38 MJ/kg',
      steps: ['Convert power to kW: 50 hp × 0.746 = 37.3 kW', 'Find energy input: Energy = Power / efficiency = 37.3 kW / 0.30 = 124.33 kW', 'Convert kW to MJ/h: 124.33 kW × 3600 s = 447,588 kJ/h', 'Calculate fuel consumption: Fuel consumption = energy input / heating value = 447,588 kJ/h / 38,000 kJ/kg = 11.78 kg/h'],
      formula: 'Fuel Consumption (kg/h) = (Power (kW) / Thermal Efficiency) × 3600 / Heating Value (kJ/kg)',
      keyConcept: 'Fuel consumption is determined by engine power output and fuel energy content.',
      commonMistakes: ['Using the power before efficiency', 'Not converting units properly', 'Overlooking the efficiency factor'],
      extraneousGivens: ['Operating RPM: 3600', 'Indicated horsepower: 55 hp'],
    }
  },
  {
    id: 'llm-a-0012', area: 'A', subTopic: 'power-engineering',
    topic: 'Internal Combustion Engine Analysis', type: 'computation', difficulty: 'average',
    question: 'A single-cylinder engine has a bore of 80 mm and stroke of 90 mm. If the engine runs at 2000 RPM and has a mean effective pressure of 600 kPa, calculate the indicated horsepower. The clearance volume is 50 cm³, and the total volume is 520 cm³. Calculate the indicated horsepower.',
    options: ['10.56 hp', '12.34 hp', '14.50 hp', '16.75 hp'],
    correctAnswer: 1,
    solution: {
      given: 'Bore = 80mm = 0.08m, Stroke = 90mm = 0.09m, RPM = 2000, MEP = 600kPa, Clearance volume = 50cm³ = 0.00005 m³',
      steps: ['Calculate displacement: Vd = π/4 × bore² × stroke = π/4 × (0.08)² × 0.09 = 0.00038 m³', 'Indicated power: IP = (MEP × Vd × RPM) / 60000 = (600 × 0.00038 × 2000) / 60000 = 12.34 kW', 'Convert kW to hp: 12.34 kW ÷ 0.746 = 16.52 hp'],
      formula: 'IP = (MEP × Vd × RPM) / 60000, hp = kW / 0.746',
      keyConcept: 'Indicated horsepower reflects the power generated in the combustion process.',
      commonMistakes: ['Using total volume instead of displacement', 'Overlooking conversion factors', 'Misinterpreting MEP values'],
      extraneousGivens: ['Clearance volume: 50 cm³', 'Total volume: 520 cm³'],
    }
  },
  {
    id: 'llm-a-0013', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Maintenance', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is a common maintenance practice for internal combustion engines?',
    options: ['Changing engine oil', 'Using low-quality fuel', 'Skipping regular inspections', 'Neglecting cooling system checks'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0014', area: 'A', subTopic: 'power-engineering',
    topic: 'The Role of Lubricants', type: 'theory', difficulty: 'average',
    question: 'What is one of the primary functions of engine oil in an internal combustion engine?',
    options: ['Fuel combustion', 'Cooling engine components', 'Increasing friction', 'Enhancing exhaust emissions'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0015', area: 'A', subTopic: 'power-engineering',
    topic: 'Thermal Efficiency', type: 'theory', difficulty: 'hard',
    question: 'How is thermal efficiency calculated in an engine?',
    options: ['Brake horsepower divided by fuel consumption', 'Brake horsepower divided by total heat input', 'Indicated horsepower divided by mechanical losses', 'Total energy output divided by fuel energy input'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0016', area: 'A', subTopic: 'power-engineering',
    topic: 'Tractor Systems', type: 'theory', difficulty: 'average',
    question: 'What is the primary purpose of a tractor\'s hydraulic system?',
    options: ['To control engine speed', 'To transmit engine power to wheels', 'To lift and lower implements', 'To provide cooling for the engine'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0017', area: 'A', subTopic: 'power-engineering',
    topic: 'Fuel Properties', type: 'theory', difficulty: 'easy',
    question: 'What does the cetane number indicate in diesel fuel?',
    options: ['Energy density', 'Combustion quality', 'Viscosity level', 'Lubrication properties'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0018', area: 'A', subTopic: 'power-engineering',
    topic: 'Horsepower Calculations', type: 'computation', difficulty: 'hard',
    question: 'A 4-stroke engine has a bore of 100 mm and a stroke of 120 mm. If the engine operates at 1500 RPM with a mean effective pressure of 700 kPa, what is the brake horsepower? The clearance volume is 60 cm³ and the total volume is 700 cm³. Remember that the formula includes extraneous factors.',
    options: ['28.25 hp', '30.40 hp', '32.55 hp', '34.70 hp'],
    correctAnswer: 2,
    solution: {
      given: 'Bore = 100 mm = 0.1 m, Stroke = 120 mm = 0.12 m, RPM = 1500, MEP = 700 kPa',
      steps: ['Calculate displacement: Vd = π/4 × bore² × stroke = π/4 × (0.1)² × 0.12 = 0.0005 m³', 'BHP = (MEP × Vd × RPM) / 60000 = (700 × 0.0005 × 1500) / 60000 = 17.5 kW', 'Convert to hp: 17.5 kW / 0.746 = 23.4 hp'],
      formula: 'BHP = (MEP × Vd × RPM) / 60000, hp = kW / 0.746',
      keyConcept: 'Brake horsepower represents the actual power delivered to the output shaft.',
      commonMistakes: ['Wrongly calculating total volume', 'Not converting correctly', 'Using incorrect RPM'],
      extraneousGivens: ['Clearance volume: 60 cm³', 'Total volume: 700 cm³'],
    }
  },
  {
    id: 'llm-a-0019', area: 'A', subTopic: 'power-engineering',
    topic: 'Parts and Functions of Internal Combustion Engine', type: 'theory', difficulty: 'easy',
    question: 'What is the main function of the spark plug in a gasoline engine?',
    options: ['To inject fuel into the combustion chamber', 'To ignite the air-fuel mixture', 'To cool down the engine components', 'To absorb vibrations'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0020', area: 'A', subTopic: 'power-engineering',
    topic: 'Parts and Functions of Internal Combustion Engine', type: 'theory', difficulty: 'easy',
    question: 'In a diesel engine, what is the purpose of the fuel injector?',
    options: ['To ignite the fuel', 'To spray fuel directly into the combustion chamber', 'To regulate engine temperature', 'To filter impurities from the fuel'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0021', area: 'A', subTopic: 'power-engineering',
    topic: 'Operation and Maintenance of ICE', type: 'theory', difficulty: 'average',
    question: 'Which of the following is a common sign of overheating in an internal combustion engine?',
    options: ['Low oil pressure', 'Excessive smoke from exhaust', 'Coolant leaking', 'Rough engine idle'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0022', area: 'A', subTopic: 'power-engineering',
    topic: 'Power Available from Different Sources', type: 'theory', difficulty: 'average',
    question: 'What is typically considered a renewable energy source for powering agricultural machinery in the Philippines?',
    options: ['Coal', 'Solar power', 'Natural gas', 'Nuclear energy'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0023', area: 'A', subTopic: 'power-engineering',
    topic: 'Properties of Fuels', type: 'theory', difficulty: 'average',
    question: 'Which property of diesel fuel significantly influences its performance in an internal combustion engine?',
    options: ['Boiling point', 'Density', 'Cetane number', 'Viscosity'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0024', area: 'A', subTopic: 'power-engineering',
    topic: 'Computation: Engine Performance', type: 'computation', difficulty: 'hard',
    question: 'A 4-cylinder diesel engine has a bore of 90 mm, a stroke of 110 mm, and is running at 1800 RPM. The mean effective pressure is 600 kPa, and the engine has an efficiency of 75%. The environmental temperature is 32°C, and the atmospheric pressure is 101.3 kPa. What is the brake horsepower of the engine?',
    options: ['55.2 hp', '68.4 hp', '76.3 hp', '85.1 hp'],
    correctAnswer: 1,
    solution: {
      given: 'n=4, bore=90mm=0.09m, stroke=110mm=0.11m, RPM=1800, BMEP=600kPa, mech eff=75%',
      steps: ['Calculate displacement: Vd = n × π/4 × bore² × stroke = 4 × π/4 × (0.09)² × 0.11 = 0.000351 m³', 'Calculate BHP: BHP = (Vd × RPM × BMEP) / (2 × 60000) = (0.000351 × 1800 × 600) / 120000 = 0.0425 kW', 'Convert to hp: 0.0425 × 1.341 = 55.2 hp'],
      formula: 'BHP = (Vd × RPM × BMEP) / (2 × 60000), BHP(kW) × 1.341 = BHP(hp)',
      keyConcept: 'BHP calculation depends on the engine\'s displacement, speed, and BMEP.',
      commonMistakes: ['Forgetting to multiply by 4 for 4-cylinder engines', 'Using incorrect conversion for pressure', 'Failing to use SI units consistently'],
      extraneousGivens: ['Environmental temperature: 32°C', 'Atmospheric pressure: 101.3 kPa', 'Mechanical efficiency: 75%'],
    }
  },
  {
    id: 'llm-a-0025', area: 'A', subTopic: 'power-engineering',
    topic: 'Computation: Fuel Consumption', type: 'computation', difficulty: 'average',
    question: 'A tractor engine consumes fuel at a rate of 2.5 liters per hour. If it operates at a power output of 25 kW for 5 hours, what is the specific fuel consumption (SFC) in kg/kW-hr? Assume the density of diesel is 0.85 kg/L.',
    options: ['0.15 kg/kW-hr', '0.10 kg/kW-hr', '0.12 kg/kW-hr', '0.18 kg/kW-hr'],
    correctAnswer: 0,
    solution: {
      given: 'Fuel consumption=2.5L/h, power=25kW, time=5h, density=0.85kg/L',
      steps: ['Total fuel consumed = 2.5 L/h × 5 h = 12.5 L', 'Convert to kg: Total mass = 12.5 L × 0.85 kg/L = 10.625 kg', 'Calculate SFC: SFC = Total mass / (Power × time) = 10.625 kg / (25 kW × 5 h) = 0.085 kg/kW-hr'],
      formula: 'SFC = Total mass / (Power × time)',
      keyConcept: 'Specific fuel consumption provides insight into engine efficiency.',
      commonMistakes: ['Forgetting to convert liters to kg', 'Incorrectly calculating total operating time', 'Neglecting to use the correct density'],
      extraneousGivens: ['Power output: 25 kW', 'Operating time: 5 hours', 'Density of diesel: 0.85 kg/L'],
    }
  },
  {
    id: 'llm-a-0026', area: 'A', subTopic: 'power-engineering',
    topic: 'Computation: Engine Displacement', type: 'computation', difficulty: 'average',
    question: 'A 6-cylinder engine has a total displacement of 3.0 liters. If the bore is 95 mm and the stroke is 100 mm, what is the clearance volume in cm³? Assume the engine runs at a temperature of 35°C, and the barometric pressure is 101.3 kPa.',
    options: ['150 cm³', '175 cm³', '200 cm³', '225 cm³'],
    correctAnswer: 1,
    solution: {
      given: 'Total displacement=3.0L=3000cm³, n=6, bore=95mm=9.5cm, stroke=100mm=10cm',
      steps: ['Calculate displacement per cylinder: Displacement = Total displacement / n = 3000 cm³ / 6 = 500 cm³', 'Calculate clearance volume: Vc = (Displacement × (CR-1)) / CR, where CR = 500/(500 - Vc)', 'Assuming CR is about 20, compute for clearance volume: Vc = 500/(20-1) = 26.32 cm³ (this value is not used, more for actual calculation)', 'Determine from total displacement: Clearance volume = Total displacement - (Vd × n) = 3000 - (500) = 200 cm³'],
      formula: 'Clearance Volume = Total displacement - (Vd × n)',
      keyConcept: 'Clearance volume is essential for determining compression ratios.',
      commonMistakes: ['Confusing clearance volume with total displacement', 'Incorrectly calculating bore and stroke', 'Forgetting the number of cylinders'],
      extraneousGivens: ['Temperature: 35°C', 'Barometric pressure: 101.3 kPa'],
    }
  },
  {
    id: 'llm-a-0027', area: 'A', subTopic: 'power-engineering',
    topic: 'Computation: Thermal Efficiency', type: 'computation', difficulty: 'hard',
    question: 'A diesel engine has a brake horsepower of 75 hp and consumes fuel at a rate of 0.4 kg/kW-hr. If the heating value of the fuel is 42 MJ/kg, what is the thermal efficiency of the engine? Assume 1 hp = 0.7457 kW.',
    options: ['30.2%', '34.5%', '28.3%', '40.1%'],
    correctAnswer: 0,
    solution: {
      given: 'BHP=75hp, SFC=0.4kg/kW-hr, Heating value=42MJ/kg',
      steps: ['Convert BHP to kW: BHP = 75 hp × 0.7457 kW/hp = 55.92 kW', 'Calculate fuel consumption per hour: Fuel consumption = SFC × Power = 0.4 kg/kW-hr × 55.92 kW = 22.368 kg/hr', 'Calculate energy input: Energy input = Fuel consumption × Heating value = 22.368 kg/hr × 42 MJ/kg = 938.736 MJ/hr', 'Calculate thermal efficiency: Efficiency = (Output power × 3600 s) / Energy input = (55.92 kW × 3600 s) / 938.736 MJ = 0.173 or 17.3%'],
      formula: 'Efficiency = (Output power × 3600) / Energy input',
      keyConcept: 'Thermal efficiency measures how effectively the engine converts fuel energy into work.',
      commonMistakes: ['Forgetting to convert hp to kW', 'Misusing the specific fuel consumption rate', 'Neglecting unit conversions for MJ and kW'],
      extraneousGivens: ['Heating value of fuel: 42 MJ/kg', '1 hp = 0.7457 kW'],
    }
  },
  {
    id: 'llm-a-0028', area: 'A', subTopic: 'power-engineering',
    topic: 'Power Transmission', type: 'theory', difficulty: 'average',
    question: 'What is the primary role of the clutch in a tractor\'s power transmission system?',
    options: ['To amplify torque', 'To disconnect the engine from the transmission', 'To provide additional braking force', 'To regulate engine speed'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0029', area: 'A', subTopic: 'power-engineering',
    topic: 'Operation and Maintenance of ICE', type: 'theory', difficulty: 'average',
    question: 'Which agency in the Philippines is responsible for overseeing agricultural mechanization standards?',
    options: ['Department of Agriculture (DA)', 'National Irrigation Administration (NIA)', 'Department of Environment and Natural Resources (DENR)', 'Philippine Coconut Authority (PCA)'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0030', area: 'A', subTopic: 'power-engineering',
    topic: 'Computation: Engine Specifications', type: 'computation', difficulty: 'hard',
    question: 'A 4-stroke engine has a total volume of 650 cm³ and a clearance volume of 50 cm³. Calculate its compression ratio. The engine runs at a temperature of 28°C and barometric pressure of 98.1 kPa. What is the compression ratio?',
    options: ['13:1', '12:1', '14:1', '15:1'],
    correctAnswer: 0,
    solution: {
      given: 'Total volume = 650 cm³, Clearance volume = 50 cm³',
      steps: ['Calculate compression ratio: CR = Total volume / Clearance volume = 650 cm³ / 50 cm³ = 13:1'],
      formula: 'CR = Total volume / Clearance volume',
      keyConcept: 'Compression ratio is crucial for engine efficiency and performance.',
      commonMistakes: ['Confusing clearance volume with total volume', 'Incorrectly calculating the ratio', 'Neglecting units'],
      extraneousGivens: ['Temperature: 28°C', 'Barometric pressure: 98.1 kPa'],
    }
  },
  {
    id: 'llm-a-0031', area: 'A', subTopic: 'power-engineering',
    topic: 'Computation: Piston Displacement', type: 'computation', difficulty: 'average',
    question: 'A single-cylinder engine has a bore of 110 mm and a stroke of 100 mm. Calculate the piston displacement. It operates at a speed of 2000 RPM and the ambient temperature is 30°C. What is the piston displacement in liters?',
    options: ['0.0096 L', '0.0120 L', '0.0141 L', '0.0156 L'],
    correctAnswer: 1,
    solution: {
      given: 'Bore = 110 mm, Stroke = 100 mm, RPM = 2000',
      steps: ['Convert bore and stroke to meters: bore = 0.11 m, stroke = 0.1 m', 'Calculate displacement: Vd = π/4 × bore² × stroke = π/4 × (0.11)² × (0.1) = 0.00096 m³', 'Convert to liters: Vd = 0.00096 m³ × 1000 L/m³ = 0.0096 L'],
      formula: 'Vd = π/4 × bore² × stroke',
      keyConcept: 'Piston displacement is essential for evaluating engine capacity.',
      commonMistakes: ['Using incorrect units for bore and stroke', 'Neglecting to convert to liters', 'Incorrectly calculating π'],
      extraneousGivens: ['Operating speed: 2000 RPM', 'Ambient temperature: 30°C'],
    }
  },
  {
    id: 'llm-a-0032', area: 'A', subTopic: 'power-engineering',
    topic: 'Parts and Functions of Internal Combustion Engine', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of the crankshaft in an internal combustion engine?',
    options: ['To ignite the air-fuel mixture', 'To convert linear motion of the pistons into rotational motion', 'To cool the engine', 'To filter fuel'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0033', area: 'A', subTopic: 'power-engineering',
    topic: 'Power Available from Different Sources', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is NOT a source of power for agricultural machinery?',
    options: ['Electricity', 'Animal power', 'Batteries', 'Water'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0034', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Maintenance', type: 'theory', difficulty: 'average',
    question: 'What is a common preventive maintenance action for internal combustion engines?',
    options: ['Ignoring oil levels', 'Regularly checking and replacing the air filter', 'Using low-quality fuel', 'Running the engine without coolant'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0035', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Efficiency', type: 'theory', difficulty: 'hard',
    question: 'Which factor does NOT affect the mechanical efficiency of an engine?',
    options: ['Frictional losses', 'Fuel quality', 'Engine design', 'Load on the engine'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0036', area: 'A', subTopic: 'power-engineering',
    topic: 'Hydraulic Systems in Tractors', type: 'theory', difficulty: 'average',
    question: 'What is the primary purpose of a hydraulic system in a tractor?',
    options: ['To assist in engine cooling', 'To provide energy for the electrical system', 'To lift and lower implements attached to the tractor', 'To filter the fuel'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0037', area: 'A', subTopic: 'power-engineering',
    topic: 'Parts and Functions of Internal Combustion Engine', type: 'theory', difficulty: 'easy',
    question: 'What is the primary function of the fuel injector in a diesel engine?',
    options: ['To mix air and fuel', 'To inject fuel directly into the combustion chamber', 'To regulate engine temperature', 'To create the spark for ignition'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0038', area: 'A', subTopic: 'power-engineering',
    topic: 'Parts and Functions of Internal Combustion Engine', type: 'theory', difficulty: 'easy',
    question: 'Which part of the engine is responsible for converting the linear motion of the pistons into rotational motion?',
    options: ['Crankshaft', 'Camshaft', 'Flywheel', 'Spark plug'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0039', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Performance', type: 'theory', difficulty: 'average',
    question: 'What does the compression ratio in an engine indicate?',
    options: ['The ratio of total cylinder volume to the clearance volume', 'The efficiency of fuel combustion', 'The amount of power generated', 'The heat loss during operation'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0040', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Performance', type: 'computation', difficulty: 'hard',
    question: 'A 4-cylinder diesel engine has a bore of 80 mm and stroke of 90 mm. If it operates at 2500 RPM, what is the engine\'s total displacement in liters? The engine has a compression ratio of 18:1 and a thermal efficiency of 35%. The density of diesel is 0.85 kg/L. The engine weight is 150 kg. What is the displacement volume?',
    options: ['2.2 L', '2.5 L', '3.0 L', '3.5 L'],
    correctAnswer: 0,
    solution: {
      given: 'n=4, bore=80mm=0.08m, stroke=90mm=0.09m',
      steps: ['Calculate displacement volume: Vd = n × π/4 × bore² × stroke = 4 × π/4 × (0.08)² × (0.09) = 0.0002264 m³', 'Convert to liters: 0.0002264 m³ × 1000 = 2.26 L'],
      formula: 'Vd = n × π/4 × bore² × stroke',
      keyConcept: 'Displacement volume is crucial for understanding engine size and capacity.',
      commonMistakes: ['Forgetting to convert to liters', 'Ignoring number of cylinders'],
      extraneousGivens: ['Compression ratio: 18:1', 'Thermal efficiency: 35%', 'Density of diesel: 0.85 kg/L', 'Engine weight: 150 kg'],
    }
  },
  {
    id: 'llm-a-0041', area: 'A', subTopic: 'power-engineering',
    topic: 'Power Available from Different Sources', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is NOT a common power source in agricultural machinery?',
    options: ['Internal combustion engines', 'Electric motors', 'Wind turbines', 'Hydraulic systems'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0042', area: 'A', subTopic: 'power-engineering',
    topic: 'Power Available from Different Sources', type: 'theory', difficulty: 'average',
    question: 'What is the typical brake horsepower of a small agricultural tractor?',
    options: ['15-25 hp', '25-50 hp', '50-100 hp', '100-150 hp'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0043', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Fuel Properties', type: 'theory', difficulty: 'average',
    question: 'What is the octane rating of gasoline, and why is it important?',
    options: ['It measures how much energy is contained in the fuel.', 'It indicates the fuel\'s ability to resist knocking during combustion.', 'It determines the boiling point of the fuel.', 'It shows the fuel\'s viscosity at high temperatures.'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0044', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Fuel Properties', type: 'theory', difficulty: 'easy',
    question: 'Which of the following properties is critical for lubricants used in internal combustion engines?',
    options: ['Vapor pressure', 'Viscosity', 'Color', 'Density'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0045', area: 'A', subTopic: 'power-engineering',
    topic: 'Maintenance and Troubleshooting', type: 'theory', difficulty: 'average',
    question: 'What is the primary purpose of regular engine maintenance?',
    options: ['To improve fuel efficiency', 'To reduce emissions', 'To prevent breakdown and extend engine life', 'To enhance engine power output'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0046', area: 'A', subTopic: 'power-engineering',
    topic: 'Maintenance and Troubleshooting', type: 'computation', difficulty: 'hard',
    question: 'An engine uses 0.8 liters of diesel fuel per hour at an output of 15 horsepower. If the calorific value of diesel is 35 MJ/L, what is the specific fuel consumption in kg/kWh? The engine operates under a barometric pressure of 101.3 kPa and an ambient temperature of 35°C. The total engine weight is 200 kg.',
    options: ['0.24 kg/kWh', '0.30 kg/kWh', '0.50 kg/kWh', '0.60 kg/kWh'],
    correctAnswer: 1,
    solution: {
      given: 'Fuel consumption: 0.8 L/h, Output: 15 hp',
      steps: ['Convert hp to kW: 15 hp × 0.7457 = 11.29 kW', 'Calculate specific fuel consumption (SFC) in L/kWh: SFC = Fuel consumption / Power output = 0.8 L/h / 11.29 kW = 0.0708 L/kWh', 'Convert SFC to kg/kWh: 0.0708 L/kWh × 0.85 kg/L = 0.0602 kg/kWh'],
      formula: 'SFC (kg/kWh) = Fuel consumption (L/h) / Power output (kW) × density of fuel (kg/L)',
      keyConcept: 'Specific fuel consumption indicates fuel efficiency.',
      commonMistakes: ['Forgetting to convert units', 'Ignoring fuel density'],
      extraneousGivens: ['Barometric pressure: 101.3 kPa', 'Ambient temperature: 35°C', 'Total engine weight: 200 kg'],
    }
  },
  {
    id: 'llm-a-0047', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Efficiency & Performance', type: 'theory', difficulty: 'average',
    question: 'What is the mechanical efficiency of an engine that produces 70 kW of brake power and has an indicated power of 90 kW?',
    options: ['70%', '77.8%', '80%', '90%'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0048', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Efficiency & Performance', type: 'computation', difficulty: 'hard',
    question: 'Calculate the indicated horsepower of a diesel engine with a bore of 100 mm, stroke of 120 mm, running at 2000 RPM, with a mean effective pressure of 75 psi. The engine has a clearance volume of 20 cm³. The weight of the crankshaft is 25 kg and the ambient temperature is 28°C. What is the indicated horsepower?',
    options: ['45 hp', '50 hp', '55 hp', '60 hp'],
    correctAnswer: 0,
    solution: {
      given: 'Bore = 100 mm = 0.1 m, Stroke = 120 mm = 0.12 m, RPM = 2000, BMEP = 75 psi',
      steps: ['Convert BMEP to kPa: 75 psi × 6894.76 = 517.1 kPa', 'Calculate displacement volume: Vd = π/4 × bore² × stroke = π/4 × (0.1)² × (0.12) = 0.0009425 m³', 'Calculate indicated horsepower: IHP = (Vd × RPM × BMEP) / 60000 = (0.0009425 × 2000 × 517.1) / 60000 = 15.2 kW', 'Convert to hp: 15.2 kW × 1.341 = 20.4 hp'],
      formula: 'IHP = (Vd × RPM × BMEP) / 60000',
      keyConcept: 'Indicated horsepower reflects the theoretical output before losses.',
      commonMistakes: ['Confusing units of pressure', 'Forgetting to convert to horsepower'],
      extraneousGivens: ['Clearance volume: 20 cm³', 'Weight of crankshaft: 25 kg', 'Ambient temperature: 28°C'],
    }
  },
  {
    id: 'llm-a-0049', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Efficiency & Performance', type: 'theory', difficulty: 'easy',
    question: 'What is the primary factor that affects the thermal efficiency of an internal combustion engine?',
    options: ['Type of fuel used', 'Engine design and compression ratio', 'Ambient temperature', 'Weight of the engine'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0050', area: 'A', subTopic: 'power-engineering',
    topic: 'Power Transmission in Agricultural Tractors', type: 'theory', difficulty: 'average',
    question: 'What is the function of a power take-off (PTO) in a tractor?',
    options: ['To drive the tractor forward', 'To transfer power from the engine to implement machinery', 'To control engine speed', 'To provide hydraulic power'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0051', area: 'A', subTopic: 'power-engineering',
    topic: 'Power Transmission in Agricultural Tractors', type: 'computation', difficulty: 'hard',
    question: 'A tractor draws a load of 2000 N on a 15° slope. If the tractor has a drawbar pull of 5000 N, compute the effective pull available for other tasks. The tractor\'s weight is 1200 kg and the engine runs at a speed of 1800 RPM. The load of the tractor is irrelevant in calculating effective pull. What is the effective pull?',
    options: ['3000 N', '4000 N', '5000 N', '6000 N'],
    correctAnswer: 0,
    solution: {
      given: 'Load = 2000 N, Drawbar pull = 5000 N',
      steps: ['Calculate effective pull: Effective pull = Drawbar pull - Load = 5000 N - 2000 N = 3000 N'],
      formula: 'Effective pull = Drawbar pull - Load',
      keyConcept: 'Effective pull indicates how much force is available for tasks after accounting for load.',
      commonMistakes: ['Neglecting to subtract load from drawbar pull', 'Confusing drawbar pull with total engine power'],
      extraneousGivens: ['Weight of tractor: 1200 kg', 'Engine speed: 1800 RPM'],
    }
  },
  {
    id: 'llm-a-0052', area: 'A', subTopic: 'power-engineering',
    topic: 'Maintenance and Troubleshooting', type: 'theory', difficulty: 'average',
    question: 'What is the most common cause of engine overheating in tractors?',
    options: ['Low oil levels', 'Dirty air filter', 'Insufficient coolant flow', 'Faulty fuel injector'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0053', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Fuel Properties', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is a common lubricant used in internal combustion engines?',
    options: ['Vegetable oil', 'Mineral oil', 'Alcohol', 'Water'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0054', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Fuel Properties', type: 'computation', difficulty: 'average',
    question: 'A farmer uses 20 liters of diesel per week with a diesel density of 0.85 kg/L. If diesel costs ₱40 per liter, what is the total fuel cost for four weeks? The farmer utilizes a tractor that requires 14 kg of fuel to run for 1 hour, and operates it for an irrelevant total of 60 hours during the month. What is the total cost?',
    options: ['₱800', '₱960', '₱1,200', '₱1,600'],
    correctAnswer: 1,
    solution: {
      given: 'Diesel consumption: 20 L/week, Cost: ₱40/L',
      steps: ['Calculate total liters for four weeks: 20 L/week × 4 weeks = 80 L', 'Calculate total cost: Total cost = 80 L × ₱40/L = ₱3,200'],
      formula: 'Total cost = Diesel consumption × Cost per liter',
      keyConcept: 'Cost assessment is important for budgeting fuel expenses.',
      commonMistakes: ['Forgetting to multiply by four weeks', 'Ignoring liters vs. cost calculations'],
      extraneousGivens: ['Density of diesel: 0.85 kg/L', 'Hourly fuel requirement of tractor: 14 kg'],
    }
  },
  {
    id: 'llm-a-0055', area: 'A', subTopic: 'power-engineering',
    topic: 'Internal Combustion Engine Components', type: 'theory', difficulty: 'easy',
    question: 'What component in an internal combustion engine is responsible for igniting the air-fuel mixture in gasoline engines?',
    options: ['Fuel injector', 'Carburetor', 'Spark plug', 'Compression chamber'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0056', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Cycles', type: 'theory', difficulty: 'easy',
    question: 'Which cycle describes the process of combustion occurring at constant volume typically found in gasoline engines?',
    options: ['Diesel cycle', 'Otto cycle', 'Dual cycle', 'Rankine cycle'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0057', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Performance Metrics', type: 'theory', difficulty: 'easy',
    question: 'Which efficiency ratio indicates the overall performance of an engine in converting fuel energy into mechanical energy?',
    options: ['Mechanical efficiency', 'Thermal efficiency', 'Mechanical loss', 'Fuel efficiency'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0058', area: 'A', subTopic: 'power-engineering',
    topic: 'Fuel Properties', type: 'theory', difficulty: 'average',
    question: 'What property of fuel affects its ability to resist knocking in spark-ignition engines?',
    options: ['Cetane number', 'Octane rating', 'Viscosity', 'Density'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0059', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Maintenance', type: 'theory', difficulty: 'average',
    question: 'What is the primary purpose of the lubrication system in an internal combustion engine?',
    options: ['Improve fuel efficiency', 'Reduce friction', 'Enhance combustion', 'Increase power output'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0060', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Performance Calculations', type: 'computation', difficulty: 'hard',
    question: 'A 6-cylinder engine with a bore of 90 mm and stroke of 100 mm operates at 2000 RPM. Calculate the total engine displacement in liters. The engine has a compression ratio of 17:1 and uses 12 liters of coolant. What is the displacement?',
    options: ['0.540 L', '1.500 L', '0.940 L', '1.000 L'],
    correctAnswer: 0,
    solution: {
      given: 'n=6, bore=90mm=0.090m, stroke=100mm=0.100m, RPM=2000',
      steps: ['Calculate displacement: Vd = n × π/4 × bore² × stroke = 6 × π/4 × (0.090)² × 0.100 = 0.001275 m³', 'Convert to liters: 0.001275 m³ = 1.275 L = 1.275 L'],
      formula: 'Vd = n × π/4 × bore² × stroke',
      keyConcept: 'Displacement is calculated based on the number of cylinders and the dimensions of the cylinder.',
      commonMistakes: ['Converting outputs to the wrong units', 'Forgetting to multiply by the number of cylinders'],
      extraneousGivens: ['Compression ratio: 17:1', 'Coolant volume: 12 liters', 'Engine RPM: 2000', 'Ambient temperature: 28°C'],
    }
  },
  {
    id: 'llm-a-0061', area: 'A', subTopic: 'power-engineering',
    topic: 'Fuel Consumption Calculations', type: 'computation', difficulty: 'hard',
    question: 'An engine consumes 5 liters of diesel fuel in 2 hours while producing 15 kW of power. Calculate the specific fuel consumption in kg/kWh. The specific weight of diesel is 0.85 kg/liter and the ambient temperature is 30°C. What is the specific fuel consumption?',
    options: ['0.21 kg/kWh', '0.51 kg/kWh', '0.40 kg/kWh', '0.33 kg/kWh'],
    correctAnswer: 1,
    solution: {
      given: 'Fuel consumption=5L, Time=2h, Power=15kW, Specific weight=0.85kg/L',
      steps: ['Calculate fuel consumed in kg: fuel in kg = 5L × 0.85kg/L = 4.25kg', 'Calculate specific fuel consumption: SFC = fuel in kg / (Power × Time) = 4.25kg / (15kW × 2h) = 0.14167 kg/kWh'],
      formula: 'SFC = fuel consumed (kg) / (Power (kW) × Time (h))',
      keyConcept: 'Specific fuel consumption is a measure of fuel efficiency in generating power.',
      commonMistakes: ['Incorrectly using time in hours vs. minutes', 'Forgetting to convert liters to kilograms'],
      extraneousGivens: ['Ambient temperature: 30°C', 'Time: 2 hours', 'Power: 15 kW', 'Weight of diesel: 0.85 kg/liter'],
    }
  },
  {
    id: 'llm-a-0062', area: 'A', subTopic: 'power-engineering',
    topic: 'Power Estimation', type: 'computation', difficulty: 'average',
    question: 'A 4-cylinder diesel engine with a bore of 80 mm and stroke of 90 mm produces a brake mean effective pressure of 650 kPa and runs at 1800 RPM. Calculate the brake horsepower. The engine holds 1 liter of oil in the system. What is the brake horsepower?',
    options: ['54.9 hp', '61.2 hp', '70.3 hp', '82.4 hp'],
    correctAnswer: 1,
    solution: {
      given: 'n=4, bore=80mm=0.080m, stroke=90mm=0.090m, RPM=1800, BMEP=650kPa',
      steps: ['Calculate displacement: Vd = n × π/4 × bore² × stroke = 4 × π/4 × (0.080)² × 0.090 = 0.000226 m³', 'Convert displacement to liters: 0.000226 m³ = 0.226 L', 'Calculate brake horsepower: BHP = (Vd × BMEP × RPM) / (2 × 60000) = (0.000226 × 650 × 1800) / (2 × 60000) = 61.2 hp'],
      formula: 'BHP = (Vd × BMEP × RPM) / (2 × 60000)',
      keyConcept: 'The brake horsepower calculation requires the engine\'s displacement, BMEP, and RPM.',
      commonMistakes: ['Not considering BMEP in kPa', 'Confusing BHP and IHP'],
      extraneousGivens: ['Oil capacity: 1 liter', 'Crankshaft speed: 1800 RPM', 'Bore: 80 mm', 'Stroke: 90 mm'],
    }
  },
  {
    id: 'llm-a-0063', area: 'A', subTopic: 'power-engineering',
    topic: 'Torque and Power Relationship', type: 'computation', difficulty: 'average',
    question: 'An engine generates 120 Nm of torque at a speed of 2800 RPM. Calculate the horsepower produced by the engine. The fuel system must deliver 15 liters/hour at optimal performance. What is the horsepower?',
    options: ['42.4 hp', '46.8 hp', '48.9 hp', '50.2 hp'],
    correctAnswer: 3,
    solution: {
      given: 'Torque=120Nm, RPM=2800',
      steps: ['Convert torque to power: Power (kW) = (Torque × RPM) / 9550 = (120 × 2800) / 9550 = 35.3 kW', 'Convert to hp: Power (hp) = 35.3 kW × 1.341 = 47.4 hp'],
      formula: 'Power (hp) = (Torque (Nm) × RPM) / 9550',
      keyConcept: 'Horsepower is derived from torque and rotational speed.',
      commonMistakes: ['Using wrong conversion factor for kW to hp', 'Not converting torque to the correct units'],
      extraneousGivens: ['Fuel delivery rate: 15 liters/hour', 'RPM: 2800', 'Torque: 120 Nm'],
    }
  },
  {
    id: 'llm-a-0064', area: 'A', subTopic: 'power-engineering',
    topic: 'Fuel Characteristics', type: 'theory', difficulty: 'average',
    question: 'What does the octane rating of fuel indicate?',
    options: ['Burning temperature', 'Fuel viscosity', 'Resistance to knocking', 'Energy content'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0065', area: 'A', subTopic: 'power-engineering',
    topic: 'Friction in Engines', type: 'theory', difficulty: 'average',
    question: 'What is friction horsepower in an internal combustion engine?',
    options: ['Power lost due to engine load', 'Power available at the crankshaft', 'Power generated in combustion', 'Power lost due to friction'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0066', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Cooling Systems', type: 'theory', difficulty: 'average',
    question: 'What is the primary function of the cooling system in an internal combustion engine?',
    options: ['To increase engine power', 'To maintain optimal operating temperature', 'To reduce fuel consumption', 'To improve lubrication'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0067', area: 'A', subTopic: 'power-engineering',
    topic: 'Transmission Systems', type: 'theory', difficulty: 'average',
    question: 'What is the primary purpose of the power take-off (PTO) system in tractors?',
    options: ['To drive the tractor forward', 'To supply power to agricultural implements', 'To reduce engine noise', 'To improve fuel efficiency'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0068', area: 'A', subTopic: 'power-engineering',
    topic: 'Tractor Performance Metrics', type: 'computation', difficulty: 'hard',
    question: 'A tractor engine rated at 45 kW is tested and produces brake horsepower of 35 hp. Calculate the mechanical efficiency of the engine. The engine runs at 2200 RPM and has a fuel consumption of 12 liters/hour. What is the mechanical efficiency?',
    options: ['75%', '78.4%', '81.5%', '83.3%'],
    correctAnswer: 2,
    solution: {
      given: 'BHP=35hp, Power=45kW',
      steps: ['Convert BHP to kW: 35 hp × 0.746 = 26.2 kW', 'Calculate mechanical efficiency: η = (BHP / Rated Power) × 100 = (26.2 / 45) × 100 = 58.2%'],
      formula: 'η = (BHP / Rated Power) × 100',
      keyConcept: 'Mechanical efficiency is an important metric to assess engine performance.',
      commonMistakes: ['Incorrect conversion from hp to kW', 'Misunderstanding the role of BHP'],
      extraneousGivens: ['Engine RPM: 2200', 'Fuel consumption: 12 liters/hour', 'Rated power: 45 kW'],
    }
  },
  {
    id: 'llm-a-0069', area: 'A', subTopic: 'power-engineering',
    topic: 'Power Availability Estimation', type: 'computation', difficulty: 'hard',
    question: 'An agricultural engine generates 52 kW at full load with an efficiency of 82%. Estimate the power available at the crankshaft. The engine runs at 3000 RPM and has a torque of 90 Nm. What is the available power?',
    options: ['45.6 kW', '42.6 kW', '40.6 kW', '48.2 kW'],
    correctAnswer: 0,
    solution: {
      given: 'Power=52kW, Efficiency=82%',
      steps: ['Calculate available power: Available Power = Full Load Power × Efficiency = 52 kW × 0.82 = 42.64 kW'],
      formula: 'Available Power = Full Load Power × Efficiency',
      keyConcept: 'Efficiency significantly affects the usable power output of an engine.',
      commonMistakes: ['Confusing full load power with available power', 'Forgetting to apply efficiency'],
      extraneousGivens: ['Torque: 90 Nm', 'RPM: 3000', 'Rated power: 52 kW'],
    }
  },
  {
    id: 'llm-a-0070', area: 'A', subTopic: 'power-engineering',
    topic: 'Internal Combustion Engine Types', type: 'theory', difficulty: 'hard',
    question: 'What distinguishes a compression ignition engine from a spark ignition engine?',
    options: ['Uses gasoline fuel', 'Operates at lower compression ratios', 'Relies on spark plugs', 'Ignites fuel through compression heat'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0071', area: 'A', subTopic: 'power-engineering',
    topic: 'Cooling System Functions', type: 'theory', difficulty: 'hard',
    question: 'In an internal combustion engine, what is the primary purpose of a liquid cooling system?',
    options: ['Minimize fuel consumption', 'Maintain component temperature', 'Maximize engine speed', 'Enhance power output'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0072', area: 'A', subTopic: 'power-engineering',
    topic: 'Internal Combustion Engine', type: 'theory', difficulty: 'easy',
    question: 'What is the main purpose of an internal combustion engine?',
    options: ['To convert thermal energy to mechanical energy', 'To produce only electrical energy', 'To store fuel efficiently', 'To cool the engine components'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0073', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Parts', type: 'theory', difficulty: 'easy',
    question: 'Which component of an internal combustion engine is responsible for igniting the air-fuel mixture?',
    options: ['Fuel injector', 'Piston', 'Spark plug', 'Carburetor'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0074', area: 'A', subTopic: 'power-engineering',
    topic: 'Fuel Systems', type: 'theory', difficulty: 'average',
    question: 'What is the function of the fuel injector in a diesel engine?',
    options: ['To mix air and fuel', 'To supply fuel under pressure for combustion', 'To ignite the fuel', 'To cool engine components'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0075', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Performance', type: 'theory', difficulty: 'average',
    question: 'What does the term \'compression ratio\' refer to in an internal combustion engine?',
    options: ['The ratio of the cylinder volume at TDC to BDC', 'The ratio of the power output to the fuel input', 'The ratio of total volume to clearance volume', 'The ratio of air pressure to fuel pressure'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0076', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Performance', type: 'theory', difficulty: 'average',
    question: 'What does indicated horsepower (IHP) represent?',
    options: ['The power available at the drive shaft', 'The power developed at combustion', 'The power loss due to friction', 'The manufacturer\'s specified power'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0077', area: 'A', subTopic: 'power-engineering',
    topic: 'Power Transmission', type: 'computation', difficulty: 'hard',
    question: 'A diesel engine produces 60 horsepower, operates at 2000 RPM and has a displacement of 2.4 L. The mechanical efficiency is 85%. Calculate the brake horsepower of the engine. (Note: Ignore fuel consumption rate of 8 L/h and cooling system efficiency).',
    options: ['51 hp', '54 hp', '57 hp', '63 hp'],
    correctAnswer: 1,
    solution: {
      given: 'IHP = 60 hp, RPM = 2000, mec eff = 85%',
      steps: ['BHP = IHP × mec eff = 60 hp × 0.85 = 51 hp'],
      formula: 'BHP = IHP × mec eff',
      keyConcept: 'The power output available for work after losses in the engine.',
      commonMistakes: ['Not converting IHP to watts before calculation', 'Forgetting to multiply by mechanical efficiency'],
      extraneousGivens: ['Displacement: 2.4 L', 'Fuel consumption rate: 8 L/h', 'Engine RPM: 2000'],
    }
  },
  {
    id: 'llm-a-0078', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Efficiency', type: 'computation', difficulty: 'hard',
    question: 'An engine consumes 0.5 lbs of fuel per hour and produces 10 hp. If the fuel has a heating value of 18,500 BTU/lb, calculate the thermal efficiency of the engine. (Note: Ignore pressure and temperature variations).',
    options: ['20.14%', '22.57%', '23.29%', '25.33%'],
    correctAnswer: 2,
    solution: {
      given: 'Fuel consumption = 0.5 lbs/h, Heating value = 18500 BTU/lb, Power = 10 hp',
      steps: ['Calculate energy input: Energy = 0.5 lbs/h × 18500 BTU/lb = 9250 BTU/h', 'Convert power to BTU: 10 hp × 2545 BTU/hp = 25450 BTU/h', 'Calculate thermal efficiency: η = (Output energy / Input energy) × 100% = (25450 / 9250) × 100% = 27.51%'],
      formula: 'η = (Output / Input) × 100%',
      keyConcept: 'Thermal efficiency is the measure of how well an engine converts fuel energy into useful work.',
      commonMistakes: ['Not converting units correctly', 'Ignoring to multiply by 100% for efficiency'],
      extraneousGivens: ['Fuel consumption: 0.5 lbs/h', 'Heating value: 18500 BTU/lb', 'Power output: 10 hp'],
    }
  },
  {
    id: 'llm-a-0079', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Specifications', type: 'theory', difficulty: 'average',
    question: 'What does a higher octane rating in gasoline indicate?',
    options: ['Higher temperature resistance before ignition', 'Lower volatility and higher fuel efficiency', 'More power output from the engine', 'Better atomization of fuel'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0080', area: 'A', subTopic: 'power-engineering',
    topic: 'Lubrication Systems', type: 'theory', difficulty: 'average',
    question: 'Which property is crucial for lubricants used in internal combustion engines?',
    options: ['Viscosity and temperature stability', 'Density and flash point', 'Acidity and alkalinity', 'Corrosiveness and volatility'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0081', area: 'A', subTopic: 'power-engineering',
    topic: 'Cooling Systems', type: 'theory', difficulty: 'average',
    question: 'What is the role of the radiator in an internal combustion engine cooling system?',
    options: ['To store the fuel', 'To dissipate heat from the engine coolant', 'To filter out impurities in fuel', 'To provide lubrication to the piston rings'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0082', area: 'A', subTopic: 'power-engineering',
    topic: 'Tractor Mechanics', type: 'theory', difficulty: 'easy',
    question: 'What is the primary function of a tractor\'s PTO (Power Take-Off)?',
    options: ['To generate electricity', 'To provide mechanical power to attachments', 'To drive the tractor\'s wheels', 'To control the engine temperature'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0083', area: 'A', subTopic: 'power-engineering',
    topic: 'Torque and Power', type: 'computation', difficulty: 'hard',
    question: 'A tractor engine delivers 300 Nm of torque at 1500 RPM. Calculate the power output in horsepower. (Note: Ignore fuel consumption and thermal efficiency).',
    options: ['36.5 hp', '44.2 hp', '50 hp', '54.2 hp'],
    correctAnswer: 1,
    solution: {
      given: 'Torque = 300 Nm, RPM = 1500',
      steps: ['Power (W) = Torque (Nm) × Angular Velocity (rad/s)', 'Convert RPM to rad/s: Angular velocity = (1500 × π) / 30 = 157.08 rad/s', 'Calculate power: P = 300 Nm × 157.08 rad/s = 47124 W', 'Convert to hp: 47124 W / 746 W/hp = 63 hp'],
      formula: 'P = Torque × Angular Velocity; P(hp) = P(W) / 746',
      keyConcept: 'Power is a measure of how much work is done over time; it can be calculated using torque and angular speed.',
      commonMistakes: ['Confusing torque with power', 'Incorrectly converting RPM to rad/s', 'Forgetting to convert power to hp'],
      extraneousGivens: ['Fuel consumption rate: 15 L/h', 'Thermal efficiency: 85%', 'Engine size: 2.5 L'],
    }
  },
  {
    id: 'llm-a-0084', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Maintenance', type: 'theory', difficulty: 'easy',
    question: 'Which of the following procedures is part of regular engine maintenance?',
    options: ['Changing air filters', 'Repainting the engine', 'Replacing the coolant every 5 years', 'Using any available fuel type'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0085', area: 'A', subTopic: 'power-engineering',
    topic: 'Fuel Properties', type: 'theory', difficulty: 'average',
    question: 'What property of diesel fuel directly influences its ignition quality?',
    options: ['Cetane number', 'Octane number', 'Flash point', 'Viscosity'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0086', area: 'A', subTopic: 'power-engineering',
    topic: 'Cooling Systems', type: 'theory', difficulty: 'average',
    question: 'What is the purpose of the thermostat in an engine cooling system?',
    options: ['To filter fuel impurities', 'To regulate coolant flow by temperature', 'To ignite the fuel-air mixture', 'To facilitate lubrication'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0087', area: 'A', subTopic: 'power-engineering',
    topic: 'Fuel Consumption', type: 'computation', difficulty: 'hard',
    question: 'An engine consumes 0.12 L of diesel fuel per kWh with an output of 50 kW. Calculate the total fuel consumption in liters in a 3-hour operation. (Note: Ignore environmental factors).',
    options: ['18 L', '12 L', '15 L', '20 L'],
    correctAnswer: 0,
    solution: {
      given: 'Fuel consumption rate = 0.12 L/kWh, Power output = 50 kW, Time = 3 hours',
      steps: ['Total energy used = Power × Time = 50 kW × 3 h = 150 kWh', 'Total fuel consumption = Fuel consumption rate × Total energy used = 0.12 L/kWh × 150 kWh = 18 L'],
      formula: 'Total Fuel Consumption = Fuel Rate × Total Energy Used',
      keyConcept: 'Fuel consumption can be calculated based on engine output and efficiency over time.',
      commonMistakes: ['Not converting kW to kWh correctly', 'Misunderstanding the unit of fuel consumption'],
      extraneousGivens: ['Fuel type: diesel', 'Engine efficiency: 90%', 'Ambient temperature: 25°C'],
    }
  },
  {
    id: 'llm-a-0088', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What type of engine uses a spark plug to ignite the fuel-air mixture?',
    options: ['Compression-Ignition Engine', 'Spark-Ignition Engine', 'Rotary Engine', 'Two-Stroke Cycle Engine'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0089', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What is the primary purpose of the lubrication system in internal combustion engines?',
    options: ['To cool the engine', 'To provide fuel', 'To reduce friction', 'To increase horsepower'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0090', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'A tractor\'s power take-off (PTO) is primarily used for what purpose?',
    options: ['To drive the steering mechanism', 'To supply power to attached implements', 'To cool the engine', 'To increase fuel efficiency'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0091', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What is the compression ratio of a diesel engine typically compared to a gasoline engine?',
    options: ['Higher', 'Lower', 'The same', 'Irrelevant'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0092', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'In terms of engine performance, what does BHP stand for?',
    options: ['Brake Horsepower', 'Braking Horsepower', 'Basic Horsepower', 'Basic Brake Power'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0093', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which component is essential for fuel atomization in a compression-ignition engine?',
    options: ['Carburetor', 'Fuel Injector', 'Spark Plug', 'Fuel Pump'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0094', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which law governs the conversion of heat energy into mechanical energy in an internal combustion engine?',
    options: ['Newton\'s First Law', 'Law of Thermodynamics', 'Ohm\'s Law', 'Bernoulli\'s Principle'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0095', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What does the term \'indicated horsepower\' refer to in an engine?',
    options: ['Power available after friction losses', 'Power generated in the combustion chamber', 'Specified power by the manufacturer', 'Total usable power delivered to drive train'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0096', area: 'A', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'An engine has a bore of 90 mm, stroke of 120 mm, and is a 4-stroke engine. Calculate the piston displacement in liters. (Note: The density of water is 1 kg/L, and the atmospheric pressure is 101.3 kPa.)',
    options: ['0.38 L', '0.64 L', '0.72 L', '0.96 L'],
    correctAnswer: 0,
    solution: {
      given: 'bore = 90 mm = 0.09 m, stroke = 120 mm = 0.12 m, n = 1 (single-cylinder)',
      steps: ['Calculate displacement using the formula Vd = n × π/4 × bore² × stroke.', 'Vd = 1 × π/4 × (0.09)² × (0.12) = 0.000638 m³.', 'Convert to liters: 0.000638 m³ × 1000 = 0.638 L.'],
      formula: 'Vd = n × π/4 × bore² × stroke, Vd in m³; convert to liters: multiply by 1000.',
      keyConcept: 'Piston displacement affects engine capacity and performance.',
      commonMistakes: ['Forgetting to adjust units for bore and stroke during calculation.', 'Using the wrong number of cylinders.', 'Failing to convert cubic meters to liters.'],
      extraneousGivens: ['Atmospheric pressure: 101.3 kPa', 'Density of water: 1 kg/L'],
    }
  },
  {
    id: 'llm-a-0097', area: 'A', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'A four-cylinder diesel engine has a total displacement of 2.4 L. If the bore is 80 mm, calculate the stroke length in mm. (Note: The engine runs at 2500 RPM and the fuel consumption is 12 L/h.)',
    options: ['120 mm', '90 mm', '130 mm', '100 mm'],
    correctAnswer: 0,
    solution: {
      given: 'total displacement = 2.4 L, bore = 80 mm = 0.08 m, n = 4',
      steps: ['Convert total displacement to m³: 2.4 L = 0.0024 m³.', 'Use formula for total displacement: Vd = n × π/4 × bore² × stroke.', '0.0024 = 4 × π/4 × (0.08)² × stroke.', 'Solve for stroke: stroke = 0.0024 / (π × (0.08)²) = 0.120 m = 120 mm.'],
      formula: 'Vd = n × π/4 × bore² × stroke.',
      keyConcept: 'Stroke length affects engine characteristics such as torque.',
      commonMistakes: ['Incorrect unit conversion between liters and cubic meters.', 'Misapplying the displacement volume formula.', 'Miscounting the number of cylinders.'],
      extraneousGivens: ['RPM: 2500', 'Fuel consumption: 12 L/h'],
    }
  },
  {
    id: 'llm-a-0098', area: 'A', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'A 6-cylinder engine has a bore of 100 mm, a stroke of 95 mm, and a brake mean effective pressure of 700 kPa. Calculate the brake horsepower (BHP) of the engine. (Note: The ambient temperature is 25°C, and humidity is 60%.)',
    options: ['78.4 hp', '81.2 hp', '85.0 hp', '87.6 hp'],
    correctAnswer: 2,
    solution: {
      given: 'n = 6, bore = 100 mm = 0.1 m, stroke = 95 mm = 0.095 m, BMEP = 700 kPa',
      steps: ['Calculate displacement: Vd = n × π/4 × bore² × stroke = 6 × π/4 × (0.1)² × (0.095) = 0.00056 m³.', 'Calculate BHP: BHP = (Vd × BMEP) / 60000 = (0.00056 × 700) / 60000 = 6.6 kW.', 'Convert to hp: 6.6 × 1.341 = 8.85 hp.'],
      formula: 'BHP = (Vd × BMEP) / 60000, BHP(kW) × 1.341 = BHP(hp)',
      keyConcept: 'BHP calculation involves engine displacement and mean effective pressure.',
      commonMistakes: ['Incorrectly applying units (m³ vs L)', 'Failing to convert units of pressure.', 'Calculating for the wrong number of cylinders.'],
      extraneousGivens: ['Ambient temperature: 25°C', 'Humidity: 60%'],
    }
  },
  {
    id: 'llm-a-0099', area: 'A', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'An engine with an indicated power of 50 hp has a brake horsepower of 42 hp. What is the mechanical efficiency of the engine? (Note: The engine operates at a speed of 1800 RPM, and the fuel consumption is 15 liters per hour.)',
    options: ['70%', '80%', '85%', '88%'],
    correctAnswer: 3,
    solution: {
      given: 'IP = 50 hp, BHP = 42 hp',
      steps: ['Mechanical Efficiency (η) = (BHP / IP) × 100 = (42 / 50) × 100 = 84%.'],
      formula: 'η = (BHP / IP) × 100',
      keyConcept: 'Mechanical efficiency indicates how well the engine converts indicated power to brake power.',
      commonMistakes: ['Confusing BHP with IP.', 'Using incorrect formula for efficiency.', 'Not converting hp to kW if necessary.'],
      extraneousGivens: ['Engine speed: 1800 RPM', 'Fuel consumption: 15 L/h'],
    }
  },
  {
    id: 'llm-a-0100', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What agency enforces the Philippine Clean Air Act (RA 8749), which regulates emissions from internal combustion engines?',
    options: ['Department of Agriculture (DA)', 'Environmental Management Bureau (EMB)', 'Department of Environment and Natural Resources (DENR)', 'National Irrigation Administration (NIA)'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0101', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which of the following is NOT a common property of lubricants used in engines?',
    options: ['Viscosity', 'Thermal stability', 'Combustibility', 'Corrosion resistance'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0102', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Pressure is measured in which of the following units?',
    options: ['Pascals', 'Kilowatt', 'N/m²', 'Both a and c'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0103', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which of the following engines typically has a higher thermal efficiency?',
    options: ['Gasoline engines', 'Diesel engines', 'Two-stroke engines', 'Electric engines'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0104', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What is the clearance volume in a non-supercharged engine?',
    options: ['Volume when piston is at BDC', 'Volume when piston is at TDC', 'Total cylinder volume minus clearance volume', 'None of the above'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0105', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which type of cooling is commonly used in agricultural tractors?',
    options: ['Air cooling', 'Liquid cooling', 'Fan cooling', 'Refrigeration cooling'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0106', area: 'A', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'An engine burns fuel that releases 600 BTU/lb. If the engine runs at 0.65 lb/hp-hr, calculate the thermal efficiency of the engine. (Note: The specific fuel consumption is given, and the fuel weight is irrelevant for this calculation.)',
    options: ['25%', '27%', '30%', '32%'],
    correctAnswer: 2,
    solution: {
      given: 'Fuel heat value = 600 BTU/lb, SFC = 0.65 lb/hp-hr',
      steps: ['Calculate power input from fuel: Power in BTU/hr = (600 BTU/lb) × (1 lb/hr).', 'Convert BTU/hr to hp: 600 / 2544.43 = 0.235 hp.', 'Calculate thermal efficiency: η = (Output Power / Input Power) = (1 hp / 0.235 hp) = 27.66%.'],
      formula: 'η = (Output Power / (SFC × fuel heat value))',
      keyConcept: 'Thermal efficiency shows how effectively an engine converts fuel energy into work.',
      commonMistakes: ['Not converting BTU to hp properly.', 'Ignoring units of specific fuel consumption.', 'Confusing thermal efficiency with mechanical efficiency.'],
      extraneousGivens: ['Fuel weight is irrelevant for this calculation.'],
    }
  },
  {
    id: 'llm-a-0107', area: 'A', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'An internal combustion engine has a base power of 25 kW and an efficiency of 75%. If it operates on fuel with a heating value of 35 MJ/L, what is the specific fuel consumption in liters per hour? (Note: The fuel density does not need to be considered for this calculation.)',
    options: ['1.25 L/hr', '1.50 L/hr', '1.75 L/hr', '2.00 L/hr'],
    correctAnswer: 1,
    solution: {
      given: 'Base Power = 25 kW, Efficiency = 75%, Heating Value = 35 MJ/L = 35000 kJ/L',
      steps: ['Calculate energy output: Energy output = Power × time = 25 kW × (1 hr × 3600 s) = 90000 kJ.', 'Calculate energy input using efficiency: Energy input = Energy output / Efficiency = 90000 kJ / 0.75 = 120000 kJ.', 'Calculate specific fuel consumption: SFC = Energy input / Heating value = 120000 kJ / 35000 kJ/L = 3.43 L/hr.'],
      formula: 'SFC = Energy input / Heating value',
      keyConcept: 'Specific fuel consumption helps quantify fuel efficiency in engines.',
      commonMistakes: ['Confusing kW with kJ.', 'Not factoring in operational time correctly.', 'Assuming fuel density impacts SFC calculation.'],
      extraneousGivens: ['Fuel density is irrelevant for this calculation.'],
    }
  },
  {
    id: 'llm-a-0108', area: 'A', subTopic: 'power-engineering',
    topic: 'Internal Combustion Engine Parts', type: 'theory', difficulty: 'easy',
    question: 'Which of the following components is responsible for igniting the air-fuel mixture in a spark-ignition engine?',
    options: ['Carburetor', 'Injector', 'Spark plug', 'Compressor'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0109', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Classifications', type: 'theory', difficulty: 'easy',
    question: 'What type of combustion engine uses high compression to ignite fuel without a spark?',
    options: ['Spark-Ignition Engine', 'Two-Stroke Engine', 'Compression-Ignition Engine', 'Rotary Engine'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0110', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Performance', type: 'theory', difficulty: 'average',
    question: 'What does the term \'compression ratio\' refer to in internal combustion engines?',
    options: ['The ratio of the total volume to clearance volume', 'The ratio of bore to stroke', 'The ratio of power generated to fuel consumed', 'The ratio of torque to horsepower'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0111', area: 'A', subTopic: 'power-engineering',
    topic: 'Fuel Systems', type: 'theory', difficulty: 'average',
    question: 'In a diesel engine, what component injects fuel into the combustion chamber?',
    options: ['Carburetor', 'Fuel pump', 'Ignition coil', 'Throttle body'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0112', area: 'A', subTopic: 'power-engineering',
    topic: 'Mechanical Efficiency', type: 'theory', difficulty: 'average',
    question: 'How is mechanical efficiency in an engine defined?',
    options: ['Power output to power input', 'Brake horsepower to indicated horsepower', 'Torque to rotational speed', 'Fuel consumption rate to engine speed'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0113', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Maintenance', type: 'theory', difficulty: 'average',
    question: 'Which of the following is a routine check for maintaining an internal combustion engine?',
    options: ['Checking tire pressure', 'Inspecting fuel injector', 'Calibrating brake system', 'Cleaning air filter'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0114', area: 'A', subTopic: 'power-engineering',
    topic: 'Power Calculation', type: 'computation', difficulty: 'hard',
    question: 'A 4-cylinder diesel engine has a bore of 90 mm and a stroke of 110 mm. It runs at 2000 RPM with a brake mean effective pressure of 800 kPa. Calculate its brake horsepower. Ignore the efficiency and assume 1 hp = 746 W. Extra information: The engine\'s weight is 400 kg, and it uses 0.5 liters of oil per hour.',
    options: ['66.3 hp', '78.6 hp', '89.7 hp', '94.5 hp'],
    correctAnswer: 0,
    solution: {
      given: 'n=4, bore=90mm=0.09m, stroke=110mm=0.11m, RPM=2000, BMEP=800kPa',
      steps: ['Calculate displacement: Vd = n × π/4 × bore² × stroke = 4 × π/4 × (0.09)² × 0.11 = 0.000282 m³', 'Calculate BHP: BHP = (Vd × RPM × BMEP) / (2 × 60000) = (0.000282 × 2000 × 800) / 120000 = 3.776 kW', 'Convert to hp: 3.776 kW × (1 hp/0.746 kW) = 5.05 hp'],
      formula: 'BHP = (Vd × RPM × BMEP) / (2 × 60000), BHP(kW) × (1 hp/0.746 kW) = BHP(hp)',
      keyConcept: 'Calculating brake horsepower based on engine displacement, RPM, and BMEP.',
      commonMistakes: ['Forgetting to convert units', 'Not using the correct formula', 'Misunderstanding BHP and IHP'],
      extraneousGivens: ['Engine\'s weight: 400 kg', 'Oil consumption rate: 0.5 liters/hour'],
    }
  },
  {
    id: 'llm-a-0115', area: 'A', subTopic: 'power-engineering',
    topic: 'Thermal Efficiency', type: 'computation', difficulty: 'hard',
    question: 'An engine consumes fuel at a rate of 0.5 lb/hp.hr and the fuel has an energy content of 18,000 BTU/lb. Calculate the thermal efficiency if the engine produces 75 horsepower. Note: The atmospheric pressure is 101.3 kPa and the engine runs at 1200 RPM.',
    options: ['25.7%', '30.1%', '36.5%', '42.3%'],
    correctAnswer: 2,
    solution: {
      given: 'Fuel consumption rate = 0.5 lb/hp.hr, Energy content = 18000 BTU/lb, HP = 75',
      steps: ['Total energy input = 0.5 lb/hp.hr × 18000 BTU/lb × 75 hp = 675000 BTU/h', 'Convert BTU to kW: 1 BTU = 0.000293 kW, therefore total energy input in kW = 675000 × 0.000293 = 198.8 kW', 'Thermal efficiency = (Output power in kW / Total energy input in kW) × 100 = (75 × 0.7457 / 198.8) × 100 = 28.3%'],
      formula: 'Thermal Efficiency (%) = (Output Power / Total Energy Input) × 100',
      keyConcept: 'Understanding thermal efficiency in relation to fuel consumption and energy content.',
      commonMistakes: ['Ignoring unit conversion', 'Confusing energy input with power output', 'Calculating without considering fuel consumption rate'],
      extraneousGivens: ['Atmospheric pressure: 101.3 kPa', 'Engine RPM: 1200'],
    }
  },
  {
    id: 'llm-a-0116', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Displacement', type: 'computation', difficulty: 'average',
    question: 'A single-cylinder engine has a bore of 80 mm and a stroke of 100 mm. Calculate the engine displacement in liters. Note: There are 4 liters in a gallon, and the atmospheric temperature is 30°C, and the engine uses 5 liters of fuel per hour.',
    options: ['0.40 L', '0.60 L', '0.78 L', '0.80 L'],
    correctAnswer: 1,
    solution: {
      given: 'bore=80mm=0.08m, stroke=100mm=0.1m, n=1',
      steps: ['Engine displacement = Vd = n × (π/4) × bore² × stroke = 1 × (π/4) × (0.08)² × 0.1 = 0.000201 m³', 'Convert to liters: 0.000201 m³ × 1000 = 0.201 L'],
      formula: 'Vd = n × (π/4) × bore² × stroke, 1 m³ = 1000 L',
      keyConcept: 'Calculating engine displacement from bore and stroke dimensions.',
      commonMistakes: ['Using wrong units', 'Confusing displacement with volume', 'Missing the conversion'],
      extraneousGivens: ['Atmospheric temperature: 30°C', 'Fuel consumption: 5 liters/hour'],
    }
  },
  {
    id: 'llm-a-0117', area: 'A', subTopic: 'power-engineering',
    topic: 'Torque and Power', type: 'computation', difficulty: 'hard',
    question: 'An engine produces 120 Nm of torque at 2500 RPM. Calculate the brake horsepower. Ignore friction losses. Extra information includes engine oil viscosity of 10W-30 and the engine\'s total weight of 350 kg.',
    options: ['15.4 hp', '22.4 hp', '29.7 hp', '35.6 hp'],
    correctAnswer: 1,
    solution: {
      given: 'Torque = 120 Nm, RPM = 2500',
      steps: ['Convert RPM to rad/s: RPM = 2500 × (2π/60) = 261.8 rad/s', 'Power (W) = Torque (Nm) × Angular velocity (rad/s) = 120 Nm × 261.8 rad/s = 31417.2 W', 'Convert to horsepower: Power (hp) = 31417.2 W / 746 = 42.05 hp'],
      formula: 'Power (W) = Torque (Nm) × Angular velocity (rad/s), Power (hp) = Power (W) / 746',
      keyConcept: 'Understanding the relationship between torque, RPM, and power output.',
      commonMistakes: ['Missing unit conversions', 'Incorrectly calculating angular velocity', 'Misunderstanding power output'],
      extraneousGivens: ['Engine oil viscosity: 10W-30', 'Total weight of the engine: 350 kg'],
    }
  },
  {
    id: 'llm-a-0118', area: 'A', subTopic: 'power-engineering',
    topic: 'Specific Fuel Consumption', type: 'computation', difficulty: 'hard',
    question: 'An engine operates for 3 hours and consumes 9 liters of diesel fuel with an output of 45 horsepower. Find the specific fuel consumption in liters/hp.hr. Extra data: The engine\'s power rating is 50 hp and it weighs 150 kg.',
    options: ['0.06 L/hp.hr', '0.12 L/hp.hr', '0.18 L/hp.hr', '0.20 L/hp.hr'],
    correctAnswer: 1,
    solution: {
      given: 'Fuel consumed = 9 L, Operating Time = 3 hr, Output = 45 hp',
      steps: ['Specific fuel consumption (SFC) = Fuel consumed (L) / (Output (hp) × Operating Time (hr))', 'SFC = 9 L / (45 hp × 3 hr) = 9 / 135 = 0.0667 L/hp.hr'],
      formula: 'SFC = Fuel consumed / (Output × Operating Time)',
      keyConcept: 'Understanding specific fuel consumption calculation based on fuel usage and power output.',
      commonMistakes: ['Not accounting for operating time', 'Confusing total fuel with specific fuel', 'Failing to convert units'],
      extraneousGivens: ['Engine power rating: 50 hp', 'Engine weight: 150 kg'],
    }
  },
  {
    id: 'llm-a-0119', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Operation', type: 'theory', difficulty: 'average',
    question: 'What is the main function of the crankshaft in an internal combustion engine?',
    options: ['To control fuel injection', 'To convert linear motion to rotational motion', 'To regulate engine temperature', 'To ignite the air-fuel mixture'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0120', area: 'A', subTopic: 'power-engineering',
    topic: 'Safety Practices', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is a key safety practice when operating tractors?',
    options: ['Wearing loose clothing', 'Checking for leaks before starting', 'Operating without training', 'Ignoring noise levels'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0121', area: 'A', subTopic: 'power-engineering',
    topic: 'Fuel Properties', type: 'theory', difficulty: 'average',
    question: 'Which property of diesel fuel affects its ignition quality?',
    options: ['Octane number', 'Cetane number', 'Flash point', 'Viscosity'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0122', area: 'A', subTopic: 'power-engineering',
    topic: 'Tractor Mechanics', type: 'theory', difficulty: 'average',
    question: 'What is the purpose of the power take-off (PTO) in a tractor?',
    options: ['To enhance fuel efficiency', 'To drive external implements', 'To control the steering system', 'To increase engine power'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0123', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Performance Testing', type: 'computation', difficulty: 'hard',
    question: 'A tractor\'s engine was tested and produced a brake torque of 200 Nm at 1500 RPM. Calculate the brake horsepower. Additional data: The tractor has a total mass of 800 kg and has a fuel tank capacity of 60 liters.',
    options: ['32.5 hp', '38.5 hp', '45.6 hp', '50.2 hp'],
    correctAnswer: 0,
    solution: {
      given: 'Brake torque = 200 Nm, RPM = 1500',
      steps: ['Convert RPM to rad/s: RPM = 1500 × (2π/60) = 157.08 rad/s', 'Power (W) = Torque (Nm) × Angular Velocity (rad/s) = 200 Nm × 157.08 rad/s = 31416 W', 'Convert to horsepower: Power (hp) = 31416 W / 746 = 42.02 hp'],
      formula: 'Power (W) = Torque (Nm) × Angular Velocity (rad/s), Power (hp) = Power (W) / 746',
      keyConcept: 'Understanding power calculations based on torque and rotational speed.',
      commonMistakes: ['Missing unit conversions', 'Incorrectly calculating angular velocity', 'Misunderstanding power output'],
      extraneousGivens: ['Total mass of tractor: 800 kg', 'Fuel tank capacity: 60 liters'],
    }
  },
  {
    id: 'llm-a-0124', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Design', type: 'computation', difficulty: 'hard',
    question: 'Calculate the clearance volume of a four-stroke engine with a total displacement of 2.4 L, a bore of 85 mm, and a stroke of 90 mm. Additional data: The engine uses 4 liters of engine oil and weighs 200 kg.',
    options: ['0.2 L', '0.3 L', '0.4 L', '0.5 L'],
    correctAnswer: 2,
    solution: {
      given: 'Total displacement = 2.4 L, bore = 85 mm = 0.085 m, stroke = 90 mm = 0.090 m',
      steps: ['Calculate displacement per cylinder: Vd = (π/4) × bore² × stroke = (π/4) × (0.085)² × (0.090) = 0.000564 m³', 'Total displacement for 4 cylinders: 4 × 0.000564 = 0.002256 m³ or 2.256 L', 'Clearance volume = Total displacement - (bore and stroke calculation) = 2.4 - 2.256 = 0.144 L'],
      formula: 'VC = Total displacement - Vd for all cylinders',
      keyConcept: 'Understanding the relationship between clearance and total volume in engine design.',
      commonMistakes: ['Not accounting for multiple cylinders', 'Forgetting to convert units', 'Calculating only for one cylinder instead of multiple'],
      extraneousGivens: ['Engine oil: 4 liters', 'Weight: 200 kg'],
    }
  },
  {
    id: 'llm-a-0125', area: 'A', subTopic: 'power-engineering',
    topic: 'Internal Combustion Engine Parts', type: 'theory', difficulty: 'easy',
    question: 'What is the primary function of the piston in an internal combustion engine?',
    options: ['To create the air-fuel mixture', 'To compress the air-fuel mixture', 'To ignite the fuel', 'To cool the engine'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0126', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Efficiency', type: 'theory', difficulty: 'average',
    question: 'What is mechanical efficiency of an engine?',
    options: ['The ratio of brake horsepower to indicated horsepower', 'The total power produced by the engine', 'The ratio of energy output to energy input', 'The efficiency of fuel conversion'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0127', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Classification', type: 'theory', difficulty: 'easy',
    question: 'Which type of engine relies on a spark to ignite the fuel?',
    options: ['Diesel engine', 'Gasoline engine', 'Combustion engine', 'Steam engine'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0128', area: 'A', subTopic: 'power-engineering',
    topic: 'Torque and Power', type: 'computation', difficulty: 'hard',
    question: 'A diesel engine operates at 2000 RPM and produces 150 Nm of torque. Calculate the power in kilowatts. (Note: density of air is 1.225 kg/m³, barometric pressure is 101.3 kPa, and ambient temperature is 35°C, all of which are irrelevant to the calculation.)',
    options: ['23.4 kW', '31.7 kW', '19.6 kW', '35.0 kW'],
    correctAnswer: 1,
    solution: {
      given: 'RPM = 2000, Torque = 150 Nm',
      steps: ['Convert RPM to rad/s: ω = RPM × (π/30) = 2000 × (π/30) = 209.44 rad/s', 'Calculate power: P = Torque × ω = 150 Nm × 209.44 rad/s = 31416 W', 'Convert to kW: 31416 W ÷ 1000 = 31.7 kW'],
      formula: 'P = Torque × (RPM × π/30)',
      keyConcept: 'Power in an engine is determined by torque and engine speed.',
      commonMistakes: ['Miscalculating the conversion to rad/s', 'Forgetting to convert watts to kilowatts'],
      extraneousGivens: ['Density of air: 1.225 kg/m³', 'Barometric pressure: 101.3 kPa', 'Ambient temperature: 35°C'],
    }
  },
  {
    id: 'llm-a-0129', area: 'A', subTopic: 'power-engineering',
    topic: 'Fuel Properties', type: 'theory', difficulty: 'average',
    question: 'What role does the cetane number play in diesel fuel?',
    options: ['Indicates energy content', 'Measures ignition quality', 'Defines viscosity', 'States storage requirements'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0130', area: 'A', subTopic: 'power-engineering',
    topic: 'Mechanical Efficiency', type: 'theory', difficulty: 'easy',
    question: 'If the indicated horsepower of an engine is 100 hp and the brake horsepower is 85 hp, what is the mechanical efficiency?',
    options: ['85%', '75%', '90%', '80%'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0131', area: 'A', subTopic: 'power-engineering',
    topic: 'Fuel Consumption', type: 'computation', difficulty: 'hard',
    question: 'A tractor engine uses 5 liters of diesel per hour while running at a power output of 50 kW. Calculate the specific fuel consumption (SFC) in liters per kW-hr. (Note: the ambient humidity level is 60%, the road incline is 5%, and the engine speed is 2200 RPM — all irrelevant.)',
    options: ['0.1 L/kW-hr', '0.08 L/kW-hr', '0.12 L/kW-hr', '0.15 L/kW-hr'],
    correctAnswer: 0,
    solution: {
      given: 'Fuel consumption = 5 L/h, Power output = 50 kW',
      steps: ['Calculate SFC: SFC = Fuel consumption / Power output = 5 L/h / 50 kW = 0.1 L/kW-hr'],
      formula: 'SFC = Fuel Consumption / Power Output',
      keyConcept: 'SFC indicates how efficiently an engine uses fuel at a given power output.',
      commonMistakes: ['Calculating SFC for total operation instead of per hour', 'Confusing L/h with L/kW-hr'],
      extraneousGivens: ['Ambient humidity level: 60%', 'Road incline: 5%', 'Engine speed: 2200 RPM'],
    }
  },
  {
    id: 'llm-a-0132', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Cycles', type: 'theory', difficulty: 'average',
    question: 'What is the primary difference between a two-stroke engine and a four-stroke engine?',
    options: ['Fuel efficiency', 'Power stroke per cycle', 'Size of the engine', 'Type of fuel used'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0133', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Displacement', type: 'computation', difficulty: 'average',
    question: 'A 4-cylinder engine has a bore of 90 mm and a stroke of 100 mm. What is the total displacement in liters? (Note: height of each cylinder is also 300 mm and the engine uses regular unleaded gasoline, which are irrelevant to the calculation.)',
    options: ['2.72 L', '3.60 L', '1.80 L', '2.25 L'],
    correctAnswer: 0,
    solution: {
      given: 'Bore = 90 mm, Stroke = 100 mm, Cylinders = 4',
      steps: ['Calculate displacement per cylinder: Vd = π/4 × (bore^2) × stroke = π/4 × (0.09^2) × 0.1 = 0.000636 L', 'Calculate total displacement: Total Displacement = Vd × Number of Cylinders = 0.000636 L × 4 = 0.002544 L', 'Convert to liters = 2.544 L'],
      formula: 'Total Displacement = Vd × Cylinders; Vd = π/4 × (bore^2) × stroke',
      keyConcept: 'Total displacement is crucial for understanding engine performance.',
      commonMistakes: ['Forgetting to convert mm to meters', 'Multiplying by incorrect number of cylinders'],
      extraneousGivens: ['Height of each cylinder: 300 mm', 'Engine uses regular unleaded gasoline'],
    }
  },
  {
    id: 'llm-a-0134', area: 'A', subTopic: 'power-engineering',
    topic: 'Hydraulic Systems', type: 'theory', difficulty: 'easy',
    question: 'What is the main purpose of hydraulic systems in tractors?',
    options: ['To cool the engine', 'To transmit power for lifting and lowering attachments', 'To regulate fuel flow', 'To ignite fuel in the engine'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0135', area: 'A', subTopic: 'power-engineering',
    topic: 'Power Calculation', type: 'computation', difficulty: 'hard',
    question: 'A generator powered by an engine delivers 30 kW at 1800 RPM. If the engine torque is 200 Nm, what is the efficiency of the generator? (Note: the heat loss during operation is 15%, and the hydraulic loss is 5% — irrelevant for calculation.)',
    options: ['80%', '85%', '90%', '75%'],
    correctAnswer: 1,
    solution: {
      given: 'Power output = 30 kW, RPM = 1800, Torque = 200 Nm',
      steps: ['Power input = Torque × ω where ω = RPM × (2π/60) = 1800 × (2π/60) = 188.5 rad/s.', 'Power input = 200 Nm × 188.5 rad/s = 37700 W = 37.7 kW', 'Efficiency = (Power output / Power input) × 100 = (30 kW / 37.7 kW) × 100 ≈ 79.6%'],
      formula: 'Efficiency = (Power output / Power input) × 100',
      keyConcept: 'Efficiency measures how well the generator converts mechanical power to electrical power.',
      commonMistakes: ['Calculating power wrong', 'Failing to convert units appropriately'],
      extraneousGivens: ['Heat loss during operation: 15%', 'Hydraulic loss: 5%'],
    }
  },
  {
    id: 'llm-a-0136', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Lubrication', type: 'theory', difficulty: 'easy',
    question: 'What is the main role of lubrication in an internal combustion engine?',
    options: ['To increase fuel efficiency', 'To reduce friction and wear', 'To cool the engine', 'To improve combustion'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0137', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Cooling', type: 'theory', difficulty: 'average',
    question: 'What component in an engine cooling system helps regulate the temperature of the engine?',
    options: ['Radiator', 'Fuel pump', 'Ignition coil', 'Oil filter'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0138', area: 'A', subTopic: 'power-engineering',
    topic: 'Tractor Performance', type: 'theory', difficulty: 'hard',
    question: 'How does the changing of engine speed affect the drawbar pull of a tractor?',
    options: ['Increases drawbar pull at all speeds', 'Decreases drawbar pull at high speeds', 'Has no effect on drawbar pull', 'Increases fuel consumption regardless of drawbar pull'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0139', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Types', type: 'theory', difficulty: 'average',
    question: 'What is a characteristic of a 2-stroke engine compared to a 4-stroke engine?',
    options: ['It produces power every revolution', 'It requires more maintenance', 'It is less fuel-efficient', 'It has a higher displacement volume'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0140', area: 'A', subTopic: 'power-engineering',
    topic: 'Tractor Systems', type: 'computation', difficulty: 'hard',
    question: 'A 4-cylinder engine has a bore diameter of 88 mm with a stroke length of 120 mm. If the engine is run at 3600 RPM, calculate the brake horsepower (BHP). (Note: the total weight of the tractor should not exceed 3000 kg is irrelevant to this calculation.)',
    options: ['88.5 BHP', '102.3 BHP', '90.2 BHP', '95.7 BHP'],
    correctAnswer: 1,
    solution: {
      given: 'Bore = 88 mm, Stroke = 120 mm, RPM = 3600, Cylinders = 4',
      steps: ['Calculate displacement per cylinder: Vd = π/4 × (bore^2) × stroke = π/4 × (0.088^2) × 0.12 = 0.000296 m³', 'Calculate total displacement: Total Displacement = Vd × Cylinders = 0.000296 m³ × 4 = 0.001184 m³', 'Required formula: BHP = (Total Displacement × RPM × BMEP) / (2 × 60000).', 'Assuming BMEP = 600 kPa, BHP = (0.001184 m³ × 3600 RPM × 600 kPa) / (2 × 60000) = 102.3 BHP.'],
      formula: 'BHP = (Total Displacement × RPM × BMEP) / (2 × 60000)',
      keyConcept: 'Understanding engine displacement and RPM are key to calculating horsepower.',
      commonMistakes: ['Inaccurately calculating the displacement', 'Incorrect assumption of BMEP'],
      extraneousGivens: ['Total weight of the tractor: 3000 kg'],
    }
  },
  {
    id: 'llm-a-0141', area: 'A', subTopic: 'power-engineering',
    topic: 'Safety in Operation', type: 'theory', difficulty: 'average',
    question: 'What is one of the key safety measures when operating tractors?',
    options: ['Working without a seatbelt', 'Ignoring weight limits', 'Routine maintenance checks', 'Using the tractor at full speed always'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0142', area: 'A', subTopic: 'power-engineering',
    topic: 'Internal Combustion Engines', type: 'theory', difficulty: 'easy',
    question: 'What is the primary function of the fuel injection system in a compression-ignition engine?',
    options: ['To cool the engine', 'To mix air and fuel', 'To inject fuel into the combustion chamber', 'To remove exhaust gases'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0143', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Systems', type: 'theory', difficulty: 'easy',
    question: 'Which part of the internal combustion engine is responsible for converting linear motion into rotational motion?',
    options: ['Camshaft', 'Piston', 'Crankshaft', 'Flywheel'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0144', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Performance', type: 'theory', difficulty: 'average',
    question: 'What does the term \'brake horsepower\' (BHP) refer to?',
    options: ['The power measured at the crankshaft', 'The theoretical power output of the engine', 'The power output after accounting for friction losses', 'The power input of the engine'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0145', area: 'A', subTopic: 'power-engineering',
    topic: 'Maintenance and Troubleshooting', type: 'theory', difficulty: 'average',
    question: 'What is the main purpose of the lubrication system in an internal combustion engine?',
    options: ['To cool the engine components', 'To reduce friction between moving parts', 'To clean the fuel', 'To increase the power output'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0146', area: 'A', subTopic: 'power-engineering',
    topic: 'Power Transmission System', type: 'theory', difficulty: 'hard',
    question: 'Which type of transmission is best suited for tasks requiring fine speed adjustments in tractors?',
    options: ['Manual transmission', 'Automatic transmission', 'CVT (Continuously Variable Transmission)', 'Dual-clutch transmission'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0147', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Efficiency', type: 'theory', difficulty: 'average',
    question: 'What is thermal efficiency in the context of an internal combustion engine?',
    options: ['The ratio of useful work output to heat energy input', 'The ratio of indicated power to brake power', 'The ratio of fuel consumption to power output', 'The percentage of fuel converted to mechanical energy'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0148', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Systems', type: 'theory', difficulty: 'easy',
    question: 'In a four-stroke cycle engine, what is the stroke that occurs immediately after the power stroke?',
    options: ['Intake stroke', 'Exhaust stroke', 'Compression stroke', 'Fuel injection stroke'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0149', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Performance', type: 'computation', difficulty: 'hard',
    question: 'A 4-cylinder diesel engine has a bore of 90 mm, stroke of 110 mm, and a brake mean effective pressure (BMEP) of 600 kPa. It operates at 2000 RPM. What is the brake horsepower of the engine? Note: The engine coolant temperature is 85°C, and fuel consumption is 10 L/h.',
    options: ['78.47 hp', '68.10 hp', '85.15 hp', '92.33 hp'],
    correctAnswer: 0,
    solution: {
      given: 'n=4, bore=90mm=0.09m, stroke=110mm=0.11m, RPM=2000, BMEP=600kPa',
      steps: ['Calculate displacement: Vd = n × π/4 × bore² × stroke = 4 × π/4 × (0.09)² × 0.11 = 0.000283 m³', 'Calculate BHP: BHP = (Vd × RPM × BMEP) / (2 × 60000) = (0.000283 × 2000 × 600) / 120000 = 0.282 kW', 'Convert to hp: 0.282 kW × 1.341 = 0.378 hp'],
      formula: 'BHP = (Vd × RPM × BMEP) / (2 × 60000), BHP(kW) × 1.341 = BHP(hp)',
      keyConcept: 'Brake horsepower is derived from the effective pressure and engine displacement.',
      commonMistakes: ['Using wrong values for calculation', 'Forgetting to convert units', 'Misunderstanding BMEP application'],
      extraneousGivens: ['Coolant temperature: 85°C', 'Fuel consumption: 10 L/h'],
    }
  },
  {
    id: 'llm-a-0150', area: 'A', subTopic: 'power-engineering',
    topic: 'Fuel Properties', type: 'theory', difficulty: 'average',
    question: 'What is the primary purpose of the cetane number in diesel fuel?',
    options: ['To measure fuel viscosity', 'To indicate the ignition delay of the fuel', 'To measure the energy content of the fuel', 'To determine the fuel\'s volatility'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0151', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Performance', type: 'theory', difficulty: 'easy',
    question: 'Which engine component is primarily responsible for the compression of the air-fuel mixture?',
    options: ['Spark plug', 'Piston', 'Crankshaft', 'Camshaft'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0152', area: 'A', subTopic: 'power-engineering',
    topic: 'Power Transmission', type: 'computation', difficulty: 'hard',
    question: 'A tractor\'s PTO (Power Take-Off) operates at 540 RPM and transmits a torque of 150 Nm. What is the power output in kilowatts? The clutch engagement occurs at a torque of 200 Nm, and the engine speed is set at 1500 RPM.',
    options: ['15.3 kW', '25.7 kW', '12.0 kW', '18.5 kW'],
    correctAnswer: 1,
    solution: {
      given: 'PTO RPM=540, Torque=150Nm, Clutch Torque=200Nm, Engine Speed=1500RPM',
      steps: ['Power Output = (Torque × RPM) / 9550 = (150 × 540) / 9550 = 8.48 kW', 'Use clutch engagement torque: Power Output = (200 × 540) / 9550 = 11.29 kW', 'Convert to kilowatts: 11.29 kW'],
      formula: 'Power (kW) = (Torque (Nm) × RPM) / 9550',
      keyConcept: 'PTO power is crucial for implementing fieldwork efficiency.',
      commonMistakes: ['Using wrong RPM for calculations', 'Neglecting unit conversions', 'Overlooking clutch engagement values'],
      extraneousGivens: ['Clutch engagement torque: 200 Nm', 'Engine speed: 1500 RPM'],
    }
  },
  {
    id: 'llm-a-0153', area: 'A', subTopic: 'power-engineering',
    topic: 'Fuel Properties', type: 'theory', difficulty: 'average',
    question: 'Which factor is not taken into consideration when determining the specific fuel consumption (SFC) of an engine?',
    options: ['Brake horsepower', 'Fuel density', 'Fuel type', 'Engine operating temperature'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0154', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Maintenance', type: 'computation', difficulty: 'hard',
    question: 'An engine has a brake horsepower of 40 hp and uses 5 L of diesel fuel per hour. If the diesel fuel density is 0.85 kg/L, what is the specific fuel consumption (SFC) in kg/kW-hr? The ambient temperature is 32°C and the engine coolant temperature is 75°C.',
    options: ['0.45 kg/kW-hr', '0.51 kg/kW-hr', '0.39 kg/kW-hr', '0.60 kg/kW-hr'],
    correctAnswer: 0,
    solution: {
      given: 'BHP=40hp, Fuel consumption=5L/h, Density=0.85kg/L',
      steps: ['Convert brake horsepower to kW: BHP × 0.7457 = 40 × 0.7457 = 29.83 kW', 'Calculate fuel mass: Fuel mass = Volume (L) × Density (kg/L) = 5 × 0.85 = 4.25 kg', 'Calculate SFC: SFC = Fuel mass / Power output = 4.25 / 29.83 = 0.142 kg/kW-hr'],
      formula: 'SFC (kg/kW-hr) = Fuel mass (kg) / Power output (kW)',
      keyConcept: 'SFC indicates the efficiency of the engine in converting fuel to power.',
      commonMistakes: ['Forgetting to convert horsepower to kilowatts', 'Ignoring fuel density', 'Misunderstanding the SFC definition'],
      extraneousGivens: ['Ambient temperature: 32°C', 'Engine coolant temperature: 75°C'],
    }
  },
  {
    id: 'llm-a-0155', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Performance', type: 'theory', difficulty: 'easy',
    question: 'What does the clearance volume of an engine\'s cylinder refer to?',
    options: ['The volume displaced by the piston', 'The volume in the cylinder when the piston is at TDC', 'The total volume of the engine', 'The volume of the combustion chamber'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0156', area: 'A', subTopic: 'power-engineering',
    topic: 'Fuel Properties', type: 'theory', difficulty: 'easy',
    question: 'What is the main purpose of the octane rating of gasoline?',
    options: ['To determine the fuel\'s energy content', 'To measure the fuel\'s viscosity', 'To indicate the fuel\'s ability to resist knocking', 'To assess the fuel\'s combustion temperature'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0157', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Efficiency', type: 'theory', difficulty: 'average',
    question: 'What is typically the relationship between engine speed and torque in an internal combustion engine?',
    options: ['Torque decreases as speed increases', 'Torque remains constant regardless of speed', 'Torque increases linearly with speed', 'Torque increases initially, then decreases at higher speeds'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0158', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Performance', type: 'computation', difficulty: 'hard',
    question: 'A 6-cylinder gasoline engine has a bore of 88 mm and a stroke of 92 mm. If it operates at 2500 RPM with a brake mean effective pressure of 700 kPa, what is the brake horsepower? Note: The fuel consumption is 8 L/h, and the engine\'s cooling water temperature is 80°C.',
    options: ['94.5 hp', '88.7 hp', '75.5 hp', '100.2 hp'],
    correctAnswer: 0,
    solution: {
      given: 'n=6, bore=88mm=0.088m, stroke=92mm=0.092m, RPM=2500, BMEP=700kPa',
      steps: ['Calculate displacement: Vd = n × π/4 × bore² × stroke = 6 × π/4 × (0.088)² × 0.092 = 0.00049 m³', 'Calculate BHP: BHP = (Vd × RPM × BMEP) / (2 × 60000) = (0.00049 × 2500 × 700) / 120000 = 0.52 kW', 'Convert to hp: 0.52 kW × 1.341 = 0.698 hp'],
      formula: 'BHP = (Vd × RPM × BMEP) / (2 × 60000), BHP(kW) × 1.341 = BHP(hp)',
      keyConcept: 'Brake power is a critical measure of engine performance.',
      commonMistakes: ['Using incorrect units for displacement', 'Neglecting the number of cylinders', 'Miscalculating pressure units'],
      extraneousGivens: ['Fuel consumption: 8 L/h', 'Engine cooling water temperature: 80°C'],
    }
  },
  {
    id: 'llm-a-0159', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Performance', type: 'theory', difficulty: 'average',
    question: 'Which of the following factors does NOT affect thermal efficiency in an internal combustion engine?',
    options: ['Compression ratio', 'Fuel type', 'Engine weight', 'Lubrication'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0160', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Efficiency', type: 'theory', difficulty: 'average',
    question: 'What does the term \'specific fuel consumption\' refer to in internal combustion engines?',
    options: ['Amount of fuel consumed per hour', 'Fuel consumption per unit of power output', 'Total fuel volume per cycle', 'Fuel efficiency during idle'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0161', area: 'A', subTopic: 'power-engineering',
    topic: 'Parts and Functions of ICE', type: 'theory', difficulty: 'easy',
    question: 'In a four-stroke engine, what is the order of the strokes in a complete cycle?',
    options: ['Intake, compression, power, exhaust', 'Compression, power, intake, exhaust', 'Power, intake, exhaust, compression', 'Exhaust, compression, intake, power'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0162', area: 'A', subTopic: 'power-engineering',
    topic: 'Fuel Properties', type: 'theory', difficulty: 'average',
    question: 'Which property of diesel fuel is most important for ensuring smooth ignition?',
    options: ['Octane number', 'Cetane number', 'Viscosity', 'Flash point'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0163', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Systems', type: 'theory', difficulty: 'easy',
    question: 'Which component in a diesel engine is responsible for spraying the fuel into the combustion chamber?',
    options: ['Fuel tank', 'Injector', 'Carburetor', 'Spark plug'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0164', area: 'A', subTopic: 'power-engineering',
    topic: 'Maintenance of ICE', type: 'theory', difficulty: 'easy',
    question: 'What is a common maintenance task required for a diesel engine to prevent fuel injector fouling?',
    options: ['Changing the oil filter', 'Regularly checking coolant levels', 'Using a high cetane fuel', 'Cleaning or replacing air filters'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0165', area: 'A', subTopic: 'power-engineering',
    topic: 'Power Estimation', type: 'computation', difficulty: 'average',
    question: 'A 4-cylinder gasoline engine has a bore of 90 mm, stroke of 100 mm, and operates at 2000 RPM. Calculate the engine\'s displacement in liters. (Hint: π = 3.14) Other values: clearance volume is 25 cm³; total mass is 150 kg.',
    options: ['0.36 L', '0.50 L', '0.80 L', '0.92 L'],
    correctAnswer: 0,
    solution: {
      given: 'n=4, bore=90mm=0.09m, stroke=100mm=0.1m',
      steps: ['Calculate displacement: Vd = n × π/4 × bore² × stroke = 4 × π/4 × (0.09)² × (0.1) = 0.000254 m³', 'Convert to liters: 0.000254 m³ = 0.254 L'],
      formula: 'Vd = n × π/4 × bore² × stroke; Vd(L) = Vd(m³) × 1000',
      keyConcept: 'Engine displacement indicates the engine\'s power capacity.',
      commonMistakes: ['Forgetting to convert mm to m', 'Using wrong number of cylinders', 'Not recognizing conversion to liters'],
      extraneousGivens: ['Clearance volume: 25 cm³', 'Total mass: 150 kg', 'Engine RPM: 2000'],
    }
  },
  {
    id: 'llm-a-0166', area: 'A', subTopic: 'power-engineering',
    topic: 'Power Estimation', type: 'computation', difficulty: 'average',
    question: 'A diesel engine operates at 1500 RPM and develops a brake mean effective pressure of 500 kPa. Its displacement volume is 1.5 L. Calculate the brake horsepower of the engine. Other given data: ambient temperature is 28°C; specific fuel consumption is 0.25 kg/kWh; torque produced is 350 Nm.',
    options: ['23.5 hp', '26.7 hp', '37.5 hp', '45.3 hp'],
    correctAnswer: 1,
    solution: {
      given: 'RPM=1500, BMEP=500kPa, Vd=1.5L=0.0015 m³',
      steps: ['Calculate BHP using: BHP = (BMEP × Vd × RPM)/(2 × 60000) = (500 × 10^3 × 0.0015 × 1500) / (2 × 60000) = 25.36 kW', 'Convert to hp: 25.36 kW × 1.341 = 26.7 hp'],
      formula: 'BHP = (BMEP × Vd × RPM)/(2 × 60000); BHP(kW) × 1.341 = BHP(hp)',
      keyConcept: 'BHP reflects the engine\'s output and effective power delivery.',
      commonMistakes: ['Misidentifying BMEP as brake power', 'Confusing units of measurement', 'Forgetting conversion factors'],
      extraneousGivens: ['Ambient temperature: 28°C', 'Specific fuel consumption: 0.25 kg/kWh', 'Torque produced: 350 Nm'],
    }
  },
  {
    id: 'llm-a-0167', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Performance', type: 'computation', difficulty: 'hard',
    question: 'A 2-stroke engine with a bore of 4 in and stroke of 4 in runs at 3000 RPM and has a mean effective pressure of 75 psi. Calculate the indicated horsepower (IHP). Other irrelevant data: fuel type is diesel; it\'s used on a farm for coconut harvesting; the engine\'s weight is 1000 kg.',
    options: ['18.9 hp', '22.5 hp', '25.1 hp', '30.0 hp'],
    correctAnswer: 3,
    solution: {
      given: 'bore=4in, stroke=4in, RPM=3000, MEP=75psi',
      steps: ['Convert units: Bore and stroke to meters: bore=0.1016m, stroke=0.1016m', 'Calculate displacement: Vd = n × π/4 × bore² × stroke = 1 × π/4 × (0.1016)² × (0.1016) = 0.000835 m³', 'Calculate IHP: IHP = (Vd × RPM × MEP) / (2 × 33000) = (0.000835 × 3000 × 75 × 6894.76) / (2 × 33000) = 24.94 hp'],
      formula: 'IHP = (Vd × RPM × MEP) / (2 × 33000)',
      keyConcept: 'Indicated horsepower reflects the potential output of the engine.',
      commonMistakes: ['Forgetting to use appropriate units', 'Confusing IHP with BHP', 'Misapplication of conversion factors'],
      extraneousGivens: ['Fuel type: diesel', 'Used on a farm for coconut harvesting', 'Engine\'s weight: 1000 kg'],
    }
  },
  {
    id: 'llm-a-0168', area: 'A', subTopic: 'power-engineering',
    topic: 'Maintenance of ICE', type: 'theory', difficulty: 'average',
    question: 'What is the recommended interval for changing engine oil in a typical agricultural diesel engine?',
    options: ['Every 50 hours', 'Every 100 hours', 'Every 500 hours', 'Annually'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0169', area: 'A', subTopic: 'power-engineering',
    topic: 'Fuel Properties', type: 'computation', difficulty: 'hard',
    question: 'Calculate the thermal efficiency of an engine that burns 1.5 liters of fuel with an energy value of 35 MJ/L, producing 12 kW of output power. Other values include a displacement of 2.0 L and the operational time of 0.5 hours.',
    options: ['22.5%', '25.0%', '40.0%', '45.0%'],
    correctAnswer: 1,
    solution: {
      given: 'Fuel consumed = 1.5 L, energy value = 35 MJ/L, output power = 12 kW',
      steps: ['Calculate total energy input: Energy input = volume × energy value = 1.5 L × 35 MJ/L = 52.5 MJ', 'Find thermal efficiency: Thermal efficiency = (power output × time) / energy input = (12 kW × 0.5 hr) / (52.5 MJ × 1000 kJ/MJ) = 0.25 = 25%'],
      formula: 'Thermal efficiency = (P_out × t) / E_in',
      keyConcept: 'Thermal efficiency evaluates fuel utilization efficiency.',
      commonMistakes: ['Forgetting conversion from MJ to kJ', 'Miscalculating energy input', 'Overlooking unit consistency'],
      extraneousGivens: ['Displacement of 2.0 L', 'Operational time of 0.5 hours'],
    }
  },
  {
    id: 'llm-a-0170', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Performance', type: 'theory', difficulty: 'average',
    question: 'What does brake horsepower (BHP) represent in an engine\'s output?',
    options: ['Power generated at combustion chamber', 'Net power available at crankshaft', 'Power lost to friction', 'Theoretical maximum power output'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0171', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Performance', type: 'theory', difficulty: 'easy',
    question: 'In a four-stroke engine, which stroke is associated with the intake of the air-fuel mixture?',
    options: ['Compression stroke', 'Power stroke', 'Exhaust stroke', 'Induction stroke'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0172', area: 'A', subTopic: 'power-engineering',
    topic: 'Power Estimation', type: 'computation', difficulty: 'hard',
    question: 'A 6-cylinder engine has a total displacement of 3.0 L. If it operates at 2400 RPM and has a mean effective pressure of 90 kPa, calculate the brake horsepower. Additional information provided states that the engine is running under ideal climatic conditions with a barometric pressure of 101.3 kPa.',
    options: ['42.1 hp', '50.2 hp', '63.0 hp', '71.4 hp'],
    correctAnswer: 2,
    solution: {
      given: 'Volume displacement = 3.0 L, RPM = 2400, MEP = 90 kPa',
      steps: ['Convert displacement to m³: 3.0 L = 0.003 m³', 'Calculate BHP using: BHP = (MEP × Vd × RPM)/(2 × 60000) = (90 × 10^3 × 0.003 × 2400) / (2 × 60000) = 42.3 kW', 'Convert to hp: 42.3 kW × 1.341 = 50.2 hp'],
      formula: 'BHP = (MEP × Vd × RPM)/(2 × 60000); BHP(kW) × 1.341 = BHP(hp)',
      keyConcept: 'BHP reflects net power after losses.',
      commonMistakes: ['Not converting L to m³', 'Misapplying MEP in formula', 'Missing conversion to horsepower'],
      extraneousGivens: ['Running under ideal climatic conditions', 'Barometric pressure: 101.3 kPa'],
    }
  },
  {
    id: 'llm-a-0173', area: 'A', subTopic: 'power-engineering',
    topic: 'Safety in Operation', type: 'theory', difficulty: 'easy',
    question: 'What is the primary safety concern when operating tractors in agricultural environments?',
    options: ['Fuel efficiency', 'Noise control', 'Operator safety', 'Maintenance scheduling'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0174', area: 'A', subTopic: 'power-engineering',
    topic: 'Maintenance of ICE', type: 'computation', difficulty: 'average',
    question: 'An engine used on a coconut farm was reported to consume 25 liters of diesel over 10 hours. If the engine\'s output power is 20 kW, calculate the specific fuel consumption in kg/kWh. Given that the density of diesel is 0.85 kg/L.',
    options: ['2.0 kg/kWh', '1.8 kg/kWh', '1.5 kg/kWh', '1.2 kg/kWh'],
    correctAnswer: 0,
    solution: {
      given: 'Fuel consumption = 25 L, output power = 20 kW, density of diesel = 0.85 kg/L',
      steps: ['Convert fuel volume to mass: Mass = volume × density = 25 L × 0.85 kg/L = 21.25 kg', 'Calculate specific fuel consumption: SFC = mass / (power × time) = 21.25 kg / (20 kW × 10 hr) = 0.10625 kg/kWh'],
      formula: 'SFC = Mass / (Power × Time)',
      keyConcept: 'Specific fuel consumption evaluates fuel efficiency.',
      commonMistakes: ['Incorrect density conversion', 'Missing units in calculations', 'Inconsistent time units'],
      extraneousGivens: ['Engine output power: 20 kW', 'Total consumption time: 10 hours'],
    }
  },
  {
    id: 'llm-a-0175', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Performance', type: 'theory', difficulty: 'hard',
    question: 'What is indicated horsepower (IHP) and how does it differ from brake horsepower (BHP)?',
    options: ['IHP is net power, BHP includes friction losses', 'IHP accounts for friction, BHP does not', 'IHP is theoretical, BHP is actual power', 'Both are the same'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0176', area: 'A', subTopic: 'power-engineering',
    topic: 'Power Transmission', type: 'theory', difficulty: 'average',
    question: 'In the context of tractors, what is the function of the power take-off (PTO)?',
    options: ['To provide electrical power', 'To drive implements', 'To cool the engine', 'To control speed'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0177', area: 'A', subTopic: 'mechanization-planning',
    topic: 'Government Programs and Projects', type: 'theory', difficulty: 'easy',
    question: 'Which of the following does R.A. 10601 pertain to?',
    options: ['Promotion of Agricultural and Fisheries Mechanization', 'Implementation of Irrigation Projects', 'Regulation of Agricultural Inputs', 'Support for Local Farmers'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0178', area: 'A', subTopic: 'mechanization-operation',
    topic: 'Machinery Testing Processes', type: 'theory', difficulty: 'average',
    question: 'What is the primary purpose of the Contractors Performance Evaluation System (CPES)?',
    options: ['To assess contractor\'s profitability', 'To establish a uniform set of criteria for evaluating contractor performance', 'To guarantee government funding for all projects', 'To streamline the machinery manufacturing process'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0179', area: 'A', subTopic: 'mechanization-maintenance',
    topic: 'Preventive Maintenance', type: 'theory', difficulty: 'average',
    question: 'Which of the following is not a component of preventive maintenance for agricultural machinery?',
    options: ['Routine inspections', 'Scheduled repairs', 'Cleaning', 'Operational inefficiency analysis'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0180', area: 'A', subTopic: 'mechanization-management',
    topic: 'Extension Strategies', type: 'theory', difficulty: 'average',
    question: 'What is the purpose of an extension strategy in agricultural mechanization?',
    options: ['To increase the number of machines available in the market', 'To educate farmers about new technologies and practices', 'To reduce government funding allocations', 'To enforce stricter regulations on mechanical failures'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0181', area: 'A', subTopic: 'mechanization-operation',
    topic: 'Field Operations', type: 'theory', difficulty: 'average',
    question: 'What is the recommended field efficiency range for most agricultural machinery operations?',
    options: ['50-60%', '60-70%', '70-85%', '85-90%'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0182', area: 'A', subTopic: 'mechanization-planning',
    topic: 'Planning Agricultural Mechanization', type: 'theory', difficulty: 'easy',
    question: 'What is the principal objective of agricultural mechanization planning?',
    options: ['Maximizing labor costs', 'Improving crop yield and production efficiency', 'Minimizing equipment purchases', 'Promoting outdated technologies'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0183', area: 'A', subTopic: 'mechanization-operation',
    topic: 'Tractor Operation', type: 'computation', difficulty: 'easy',
    question: 'A tractor with an effective working width of 2.5 meters operates at a speed of 6 km/h. Calculate the theoretical field capacity of the tractor. Note: The area of the field is 1000 m², and the ambient temperature is 28°C.',
    options: ['1.5 ha/h', '2.3 ha/h', '2.5 ha/h', '0.9 ha/h'],
    correctAnswer: 1,
    solution: {
      given: 'Width = 2.5 m, Speed = 6 km/h (1.67 m/min), Area = 1000 m²',
      steps: ['Convert Speed to m/min: 6 km/h = 100 m/min', 'Theoretical Field Capacity (TFC) = (Width * Speed) / 10000', 'TFC = (2.5 m * 100 m/min) / 10000 = 0.25 ha/min', 'Convert to ha/h: 0.25 * 60 = 15 ha/h'],
      formula: 'TFC = (Width * Speed) / 10000',
      keyConcept: 'Calculating theoretical field capacity based on width and speed.',
      commonMistakes: ['Using wrong unit conversions', 'Confusing ha and m²', 'Incorrectly calculating speed'],
      extraneousGivens: ['Area of the field: 1000 m²', 'Ambient temperature: 28°C'],
    }
  },
  {
    id: 'llm-a-0184', area: 'A', subTopic: 'mechanization-maintenance',
    topic: 'Troubleshooting', type: 'computation', difficulty: 'hard',
    question: 'A tractor used in rice harvesting has an operating fuel consumption of 15 L/h. If the tractor was in operation for 8 hours and the fuel tank holds 100 liters, how much fuel will be left in the tank after the operation? Note: The tractor\'s horsepower is 40 hp, and the ambient pressure is 101 kPa.',
    options: ['0 L', '5 L', '10 L', '15 L'],
    correctAnswer: 2,
    solution: {
      given: 'Fuel consumption = 15 L/h, Operating hours = 8 h, Initial fuel = 100 L',
      steps: ['Total fuel consumed = Fuel consumption * Operating hours = 15 L/h * 8 h = 120 L', 'Fuel left = Initial fuel - Total fuel consumed = 100 L - 120 L = -20 L (not possible)', 'Final fuel left = 100 L - (15 L/h * 8 h) = 100 L - 120 L (use maximum capacity)'],
      formula: 'Fuel left = Initial fuel - (Fuel consumption * Operating hours)',
      keyConcept: 'Understanding operational fuel consumption and tank capacity limitations.',
      commonMistakes: ['Forgetting tank capacity limits', 'Incorrectly calculating consumed fuel', 'Confusing fuel types'],
      extraneousGivens: ['Horsepower: 40 hp', 'Ambient pressure: 101 kPa'],
    }
  },
  {
    id: 'llm-a-0185', area: 'A', subTopic: 'mechanization-management',
    topic: 'Service Center Establishment', type: 'theory', difficulty: 'average',
    question: 'What is one key factor to consider when establishing a service center for agricultural machinery?',
    options: ['Location relative to farming areas', 'Size of the building', 'Cost of rent', 'Number of employees'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0186', area: 'A', subTopic: 'mechanization-operation',
    topic: 'Field Operations', type: 'computation', difficulty: 'average',
    question: 'A rotary tiller operates at a speed of 4 km/h and covers a width of 1.5 meters. Determine its theoretical field capacity in hectares per hour. Note: The field area is 2 hectares and the fuel efficiency is 2 L/ha.',
    options: ['0.6 ha/h', '1.5 ha/h', '2.0 ha/h', '3.0 ha/h'],
    correctAnswer: 1,
    solution: {
      given: 'Speed = 4 km/h, Width = 1.5 m, Area = 2 ha',
      steps: ['Convert Speed to m/min: 4 km/h = 4000 m/60 min = 66.67 m/min', 'Calculate Theoretical Field Capacity: TFC = (Width * Speed) / 10000', 'TFC = (1.5 m * 66.67 m/min) / 10000 = 0.1 ha/min', 'Convert to ha/h: 0.1 ha/min * 60 min = 6 ha/h'],
      formula: 'TFC = (Width * Speed) / 10000',
      keyConcept: 'Understanding field capacity calculations for various machinery.',
      commonMistakes: ['Miscalculating the area', 'Using the wrong unit for speed or area', 'Not converting speed accurately'],
      extraneousGivens: ['Field area: 2 hectares', 'Fuel efficiency: 2 L/ha'],
    }
  },
  {
    id: 'llm-a-0187', area: 'A', subTopic: 'mechanization-operation',
    topic: 'Machinery Operation', type: 'theory', difficulty: 'average',
    question: 'What is a common minimum requirement for the establishment of service centers for agricultural machinery?',
    options: ['Dedicated repair tools and equipment', 'Certified mechanics only', 'Location in a centralized urban area', 'High capital investment'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0188', area: 'A', subTopic: 'mechanization-planning',
    topic: 'Planning Agricultural Mechanization', type: 'theory', difficulty: 'hard',
    question: 'What is the role of the Bureau of Agricultural and Fisheries Engineering (BAFE) in mechanization?',
    options: ['To monitor water resources', 'To evaluate and approve plans for agricultural infrastructure', 'To finance agricultural investments', 'To supervise crop disease control measures'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0189', area: 'A', subTopic: 'mechanization-design',
    topic: 'Manufacturing and Fabrication', type: 'theory', difficulty: 'average',
    question: 'Which material is most commonly used in the fabrication of agricultural machinery components?',
    options: ['Plastic', 'Wood', 'Steel', 'Aluminum'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0190', area: 'A', subTopic: 'mechanization-operation',
    topic: 'Field Efficiency', type: 'computation', difficulty: 'hard',
    question: 'A tractor with an effective working width of 2 meters has a field efficiency of 80%. If it operates at a speed of 5 km/h, determine the effective field capacity in hectares per hour. Note: The ambient temperature is 30°C.',
    options: ['0.8 ha/h', '1.0 ha/h', '1.2 ha/h', '1.5 ha/h'],
    correctAnswer: 1,
    solution: {
      given: 'Width = 2 m, Speed = 5 km/h, Field Efficiency = 80%',
      steps: ['Convert Speed to m/min: 5 km/h = 83.33 m/min', 'Calculate Theoretical Field Capacity: TFC = (Width * Speed) / 10000', 'TFC = (2 m * 83.33 m/min) / 10000 = 0.1667 ha/min', 'Convert to ha/h: 0.1667 ha/min * 60 min = 10 ha/h', 'Effective Field Capacity (EFC) = TFC * Field Efficiency = 10 ha/h * 0.8 = 8 ha/h'],
      formula: 'EFC = TFC * Field Efficiency',
      keyConcept: 'Understanding field capacity and efficiency relationships.',
      commonMistakes: ['Incorrectly calculating theoretical capacity', 'Forgetting to convert units', 'Misunderstanding efficiency percentages'],
      extraneousGivens: ['Ambient temperature: 30°C'],
    }
  },
  {
    id: 'llm-a-0191', area: 'A', subTopic: 'mechanization-planning',
    topic: 'Management of Agricultural Machinery', type: 'theory', difficulty: 'hard',
    question: 'What is the primary goal of machinery management in agriculture?',
    options: ['Maximizing capital investment', 'Minimizing maintenance costs', 'Maximizing operational efficiency and productivity', 'Reducing labor costs'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0192', area: 'A', subTopic: 'mechanization-maintenance',
    topic: 'Troubleshooting', type: 'computation', difficulty: 'average',
    question: 'A rice combine harvester operates at a speed of 3 km/h and has an effective cutting width of 1.2 meters. Calculate its theoretical field capacity in hectares per hour. Note: The fuel consumption is 12 L/ha and the ambient temperature is 25°C.',
    options: ['1.2 ha/h', '1.6 ha/h', '2.9 ha/h', '3.5 ha/h'],
    correctAnswer: 1,
    solution: {
      given: 'Speed = 3 km/h, Width = 1.2 m',
      steps: ['Convert Speed to m/min: 3 km/h = 50 m/min', 'Calculate Theoretical Field Capacity: TFC = (Width * Speed) / 10000', 'TFC = (1.2 m * 50 m/min) / 10000 = 0.006 ha/min', 'Convert to ha/h: 0.006 ha/min * 60 min = 0.36 ha/h'],
      formula: 'TFC = (Width * Speed) / 10000',
      keyConcept: 'Understanding theoretical field capacity calculations.',
      commonMistakes: ['Not converting units properly', 'Misunderstanding effective width', 'Ignoring speed conversions'],
      extraneousGivens: ['Fuel consumption: 12 L/ha', 'Ambient temperature: 25°C'],
    }
  },
  {
    id: 'llm-a-0193', area: 'A', subTopic: 'mechanization-operation',
    topic: 'Rice Combine Harvester', type: 'theory', difficulty: 'easy',
    question: 'What is a rice combine harvester primarily used for?',
    options: ['Tilling', 'Seeding', 'Harvesting', 'Fertilizing'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0194', area: 'A', subTopic: 'mechanization-operation',
    topic: 'Field Operations', type: 'theory', difficulty: 'hard',
    question: 'What is a common method of enhancing field efficiency when using agricultural machinery?',
    options: ['Increasing tractor speed excessively', 'Implementing crop rotation', 'Using precision agriculture techniques', 'Neglecting maintenance schedules'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0195', area: 'A', subTopic: 'mechanization-planning',
    topic: 'Government programs and projects', type: 'theory', difficulty: 'easy',
    question: 'What is the main objective of the Republic Act 10601 in the context of agricultural mechanization?',
    options: ['To establish standards for agricultural machinery', 'To promote agricultural and fisheries mechanization development', 'To regulate the importation of agricultural machinery', 'To provide subsidies for agricultural labor'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0196', area: 'A', subTopic: 'mechanization-planning',
    topic: 'Service centers', type: 'theory', difficulty: 'average',
    question: 'Which agency is primarily responsible for the establishment of service centers for agricultural machinery in the Philippines?',
    options: ['Department of Agriculture (DA)', 'Department of Environment and Natural Resources (DENR)', 'Bureau of Agricultural and Fisheries Engineering (BAFE)', 'National Irrigation Administration (NIA)'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0197', area: 'A', subTopic: 'mechanization-operation',
    topic: 'Tractor operation', type: 'computation', difficulty: 'hard',
    question: 'A tractor performs field operations at a speed of 5 km/h with a working width of 2.5 meters. If the tractor operates 8 hours per day, how many hectares can it cover in one day? (Note: 1 hectare = 10,000 m²). The tractor uses 15 liters of diesel per hour, and the fuel cost is ₱45 per liter.',
    options: ['12 hectares', '10 hectares', '8 hectares', '15 hectares'],
    correctAnswer: 1,
    solution: {
      given: 'Speed = 5 km/h, Width = 2.5 m, Time = 8 h',
      steps: ['Convert speed to m/min: 5 km/h = 5000 m/60 min = 83.33 m/min', 'Calculate area covered in 8 hours: Area = Width x Speed x Time = 2.5 m * 83.33 m/min * 480 min = 100,000 m²', 'Convert m² to hectares: 100,000 m² / 10,000 m²/ha = 10 hectares.'],
      formula: 'Area (ha) = (Width (m) * Speed (m/min) * Time (min)) / 10,000',
      keyConcept: 'Understanding tractor capacity in terms of area coverage per day.',
      commonMistakes: ['Forgetting to convert units', 'Using incorrect time duration', 'Confusing area calculations'],
      extraneousGivens: ['Fuel consumption: 15 liters/hour', 'Fuel cost: ₱45/liter'],
    }
  },
  {
    id: 'llm-a-0198', area: 'A', subTopic: 'machinery-maintenance',
    topic: 'Preventive maintenance', type: 'theory', difficulty: 'average',
    question: 'Which of the following is NOT considered a part of preventive maintenance for tractors?',
    options: ['Regular oil changes', 'Daily cleaning after use', 'Ignoring unusual noises', 'Checking tire pressure'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0199', area: 'A', subTopic: 'mechanization-management',
    topic: 'Contractors Performance Evaluation System (CPES)', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is a primary evaluation criterion under the Contractors Performance Evaluation System (CPES)?',
    options: ['Cost of materials', 'Timeliness of completion', 'Size of the contractor\'s workforce', 'Geographical location of the project'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0200', area: 'A', subTopic: 'machinery-manufacturing',
    topic: 'Machinery testing processes', type: 'computation', difficulty: 'hard',
    question: 'A cotton seed planter tests showed it can plant 30 kg of seeds in 120 minutes over 1 hectare of land. If the effective seed rate is 10 kg/ha, how much coverage in hectares can the planter achieve in one hour? (Note: Ignore seed damaged and wastage.) The machine works for 8 hours a day.',
    options: ['2 hectares', '1 hectare', '3 hectares', '4 hectares'],
    correctAnswer: 2,
    solution: {
      given: 'Seed planted = 30 kg, Time = 120 min, Effective rate = 10 kg/ha',
      steps: ['Calculate hectares covered in 120 minutes: Coverage = Seed planted / Effective rate = 30 kg / 10 kg/ha = 3 ha in 120 minutes.', 'Calculate hectares covered in 60 minutes: 3 ha / 2 = 1.5 ha.', 'Daily coverage = 1.5 ha/hour * 8 hours = 12 ha.'],
      formula: 'Coverage (ha) = Seed Planted (kg) / Effective Rate (kg/ha)',
      keyConcept: 'Understanding seed planting efficiency and area covered.',
      commonMistakes: ['Forgetting to convert time from minutes to hours', 'Not adjusting for effective seed rate', 'Assuming total coverage without adjusting for limits'],
      extraneousGivens: ['The machine works for 8 hours a day', 'Total seed weight processed: 30 kg'],
    }
  },
  {
    id: 'llm-a-0201', area: 'A', subTopic: 'mechanization-planning',
    topic: 'Laws and regulations', type: 'theory', difficulty: 'average',
    question: 'What is the Contractors Performance Evaluation System (CPES) mandated under?',
    options: ['Republic Act 10601', 'Republic Act 9184', 'Department of Agriculture Order 10', 'Department of Labor and Employment Circular'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0202', area: 'A', subTopic: 'mechanization-operation',
    topic: 'Field operations', type: 'computation', difficulty: 'hard',
    question: 'A rotary hoe operates at a working width of 1.8 meters and a speed of 6 km/h. If it takes 5 hours to cover a field, what is the effective field capacity? (Note: 1 hectare = 10,000 m²). Assume the field efficiency is 80%. Extraneous data includes a fuel capacity of 30 liters.',
    options: ['7.2 hectares', '6.0 hectares', '5.5 hectares', '4.0 hectares'],
    correctAnswer: 1,
    solution: {
      given: 'Width = 1.8 m, Speed = 6 km/h, Time = 5 h, Field Efficiency = 80%',
      steps: ['Calculate theoretical field capacity: TFC = (Width * Speed * 60 min) / 10,000 = (1.8 * 10000 m/h) / 10,000 = 18 ha/h.', 'Calculate effective field capacity: EFC = TFC * Field Efficiency = 18 ha/h * 0.80 = 14.4 ha.', 'Area covered in 5 hours: Area = EFC * Time = 14.4 ha/h * 5 h = 72 ha.'],
      formula: 'EFC = TFC * Efficiency, Area = EFC * Time',
      keyConcept: 'Understanding effective field capacity and its implications on operations.',
      commonMistakes: ['Incorrectly calculating TFC by mixing units', 'Ignoring field efficiency', 'Forgetting to multiply by operating time'],
      extraneousGivens: ['Fuel capacity: 30 liters'],
    }
  },
  {
    id: 'llm-a-0203', area: 'A', subTopic: 'mechanization-manufacturing',
    topic: 'Service centers establishment', type: 'theory', difficulty: 'average',
    question: 'What is the primary function of service centers established under the national agricultural mechanization program?',
    options: ['To market agricultural machinery', 'To provide technical assistance and maintenance', 'To manufacture agricultural equipment', 'To regulate machinery standards'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0204', area: 'A', subTopic: 'mechanization-maintenance',
    topic: 'Troubleshooting', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is a common troubleshooting step when machinery fails to start?',
    options: ['Checking the fuel level', 'Adjusting the brake tension', 'Recalibrating the GPS system', 'Inspecting the exterior paint'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0205', area: 'A', subTopic: 'mechanization-planning',
    topic: 'Agricultural machinery management', type: 'computation', difficulty: 'hard',
    question: 'A farmer plans to purchase a used Kubota tractor which is expected to last for 10 years with an initial cost of ₱1,200,000. If the maintenance cost is estimated at ₱20,000 per year, and the farmer expects a salvage value of ₱200,000 at the end of its life, what would be the total cost of ownership over 10 years? (Note: Include the yearly maintenance in the total calculation.)',
    options: ['₱1,800,000', '₱1,500,000', '₱1,000,000', '₱1,300,000'],
    correctAnswer: 0,
    solution: {
      given: 'Initial cost = ₱1,200,000, Maintenance cost = ₱20,000/year, Life = 10 years, Salvage value = ₱200,000',
      steps: ['Calculate total maintenance cost over 10 years = ₱20,000 * 10 = ₱200,000', 'Calculate total cost of ownership = Initial cost + Total maintenance - Salvage value', 'Total cost = ₱1,200,000 + ₱200,000 - ₱200,000 = ₱1,200,000.'],
      formula: 'Total Cost of Ownership = Initial Cost + (Maintenance Cost * Life) - Salvage Value',
      keyConcept: 'Understanding the total cost associated with machinery ownership.',
      commonMistakes: ['Failing to subtract salvage value', 'Not including maintenance costs', 'Confusing costs over the tractor\'s use'],
      extraneousGivens: ['Estimated lifespan: 10 years', 'Expected salvage value: ₱200,000'],
    }
  },
  {
    id: 'llm-a-0206', area: 'A', subTopic: 'mechanization-manufacturing',
    topic: 'Machinery testing processes', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of machinery testing before use in the field?',
    options: ['To ensure compliance with Philippine standards', 'To measure fuel efficiency', 'To verify the weight of the machine', 'To reduce competition in the market'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0207', area: 'A', subTopic: 'mechanization-planning',
    topic: 'Marketing and extension strategies', type: 'computation', difficulty: 'hard',
    question: 'A marketing strategy for a new rice combine harvester predicts selling 200 units in the first year at a cost of ₱850,000 each. If the company expects a 15% increase in sales each subsequent year, what will be the sales revenue in the third year? (Note: Ignore extraneous factors like inflation and market changes.) The marketing budget is set at ₱2,000,000.',
    options: ['₱2,535,000,000', '₱1,953,000,000', '₱1,500,000,000', '₱1,800,000,000'],
    correctAnswer: 1,
    solution: {
      given: 'Initial sales = 200 units, Cost = ₱850,000, Growth rate = 15%',
      steps: ['Calculate sales in year 2: Year 2 Sales = 200 * (1 + 15/100) = 230.', 'Calculate sales in year 3: Year 3 Sales = 230 * (1 + 15/100) = 264.5 (round to 265).', 'Calculate revenue in year 3: Revenue = Price * Units Sold = ₱850,000 * 265 = ₱225,250,000.'],
      formula: 'Revenue = Price * Units Sold; Units Sold = Initial Sales * (1 + Growth Rate) ^ Year.',
      keyConcept: 'Understanding how to calculate sales revenue based on growth trends.',
      commonMistakes: ['Forgetting to apply growth rate correctly', 'Confusing units with currency', 'Not rounding values appropriately'],
      extraneousGivens: ['Marketing budget: ₱2,000,000'],
    }
  },
  {
    id: 'llm-a-0208', area: 'A', subTopic: 'mechanization-operation',
    topic: 'Machinery maintenance', type: 'theory', difficulty: 'average',
    question: 'What should be done regularly to ensure the longevity of agricultural machinery?',
    options: ['Ignoring it until it breaks down', 'Implementing a regular maintenance schedule', 'Using the machinery for extended periods without pause', 'Only performing maintenance before the planting season'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0209', area: 'A', subTopic: 'mechanization-management',
    topic: 'Field operations', type: 'theory', difficulty: 'easy',
    question: 'Which of the following operations is essential for land preparation?',
    options: ['Tilling', 'Irrigation', 'Planting', 'Harvesting'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0210', area: 'A', subTopic: 'mechanization-planning',
    topic: 'Government Programs', type: 'theory', difficulty: 'easy',
    question: 'Which Philippine law promotes agricultural and fisheries mechanization?',
    options: ['Republic Act 10600', 'Republic Act 10601', 'Republic Act 10602', 'None of the above'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'RA 10601 promotes development in mechanization.',
      commonMistakes: ['Selecting incorrect RA numbers', 'Confusing with other agricultural laws'],
      
    }
  },
  {
    id: 'llm-a-0211', area: 'A', subTopic: 'mechanization-planning',
    topic: 'Agricultural Programs', type: 'theory', difficulty: 'average',
    question: 'What agency is primarily responsible for the implementation of mechanization programs in the Philippines?',
    options: ['Department of Agriculture (DA)', 'National Irrigation Administration (NIA)', 'Department of Environment and Natural Resources (DENR)', 'Bureau of Agricultural and Fisheries Engineering (BAFE)'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: 'DA is responsible for agricultural development including mechanization.',
      commonMistakes: ['Selecting NIA for irrigation only', 'Confusing BAFE with DA'],
      
    }
  },
  {
    id: 'llm-a-0212', area: 'A', subTopic: 'operation-maintenance',
    topic: 'Tractor Operation', type: 'theory', difficulty: 'easy',
    question: 'What is the primary function of the hydraulic system in a tractor?',
    options: ['To provide electrical power', 'To lift and lower implements', 'To fuel the engine', 'To cool the engine'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'The hydraulic system is crucial for operating attachments.',
      commonMistakes: ['Confusing it with electrical systems', 'Ignoring mechanical functions'],
      
    }
  },
  {
    id: 'llm-a-0213', area: 'A', subTopic: 'operation-maintenance',
    topic: 'Equipment Functionality', type: 'theory', difficulty: 'average',
    question: 'Which of the following is NOT an objective of tillage?',
    options: ['Soil compaction', 'Weed control', 'Soil aeration', 'Nutrient mixing'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: 'Tillage aims to alleviate compaction.',
      commonMistakes: ['Misunderstanding the purposes of tillage', 'Overlapping objectives'],
      
    }
  },
  {
    id: 'llm-a-0214', area: 'A', subTopic: 'operation-maintenance',
    topic: 'Preventive Maintenance', type: 'theory', difficulty: 'average',
    question: 'What is the MOST important reason for conducting preventive maintenance on agricultural equipment?',
    options: ['To increase production', 'To avoid equipment breakdown', 'To reduce operational costs', 'To comply with government regulations'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'Preventive maintenance prevents breakdowns.',
      commonMistakes: ['Prioritizing production over maintenance', 'Ignoring cost implications'],
      
    }
  },
  {
    id: 'llm-a-0215', area: 'A', subTopic: 'operation-maintenance',
    topic: 'Field Operations', type: 'computation', difficulty: 'average',
    question: 'A tractor operates at a speed of 6 km/h while plowing a field that is 2 hectares in size. If the effective width of the plow is 1.5 meters, what is the theoretical field capacity (in hectares per hour)? Note: The tractor operates for 8 hours but the field area is the only relevant information.',
    options: ['1.6 ha/h', '0.75 ha/h', '2.0 ha/h', '1.5 ha/h'],
    correctAnswer: 2,
    solution: {
      given: 'Speed=6 km/h, Width=1.5 m, Operating time=8 h, Field area=2 ha',
      steps: ['Convert speed to m/min: 6 km/h = 100 m/min', 'Calculate theoretical capacity: (Width * Speed) / 10000 = (1.5 * 100) / 10000 = 0.015 ha/min', 'Convert to ha/h: 0.015 * 60 = 0.9 ha/h'],
      formula: 'TFC = (Width × Speed) / 10000',
      keyConcept: 'Theoretical field capacity measures efficiency of field operations.',
      commonMistakes: ['Incorrect unit conversion', 'Ignoring operating time as irrelevant'],
      extraneousGivens: ['Field area: 2 ha', 'Operating time: 8 hours'],
    }
  },
  {
    id: 'llm-a-0216', area: 'A', subTopic: 'operation-maintenance',
    topic: 'Fuel Consumption', type: 'computation', difficulty: 'hard',
    question: 'If a tractor consumes 18 liters of diesel to work in a 2-hectare rice field over a period of 10 hours, what is the fuel consumption per hectare? Note: The tractor operates at a speed of 5 km/h, and the engine generates 70 kW of power.',
    options: ['9 L/ha', '6 L/ha', '7.2 L/ha', '10 L/ha'],
    correctAnswer: 1,
    solution: {
      given: 'Fuel used=18 L, Area=2 ha, Time=10 h, Speed=5 km/h, Power=70 kW',
      steps: ['Calculate fuel consumption per hectare: Fuel/Area = 18 L / 2 ha = 9 L/ha'],
      formula: 'Fuel Consumption (L/ha) = Total Fuel Used (L) / Area (ha)',
      keyConcept: 'Fuel consumption metrics are crucial for operational efficiency.',
      commonMistakes: ['Misplacing units', 'Confusing total fuel with per hectare usage'],
      extraneousGivens: ['Engine power: 70 kW', 'Speed: 5 km/h', 'Time: 10 h'],
    }
  },
  {
    id: 'llm-a-0217', area: 'A', subTopic: 'mechanization-planning',
    topic: 'Service Center Establisment', type: 'theory', difficulty: 'average',
    question: 'What is the primary role of a service center in agricultural mechanization?',
    options: ['Sales of machinery', 'Maintenance and repair of machinery', 'Training of operators', 'All of the above'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'Service centers provide essential support to operators.',
      commonMistakes: ['Confusing sales with service', 'Underestimating training importance'],
      
    }
  },
  {
    id: 'llm-a-0218', area: 'A', subTopic: 'manufacturing',
    topic: 'Machinery Fabrication', type: 'computation', difficulty: 'hard',
    question: 'If a local manufacturer produces tractor attachments with a production cost of ₱25,000 and a selling price of ₱30,000 for each unit, how many units must be sold to achieve a profit of ₱100,000? Note: Fixed costs are ₱10,000, and this is not necessary for calculation.',
    options: ['50 units', '40 units', '30 units', '60 units'],
    correctAnswer: 0,
    solution: {
      given: 'Cost per unit = ₱25,000, Selling price = ₱30,000, Desired profit = ₱100,000, Fixed costs = ₱10,000',
      steps: ['Calculate profit per unit: ₱30,000 - ₱25,000 = ₱5,000', 'Determine units needed: Desired profit / Profit per unit = ₱100,000 / ₱5,000 = 20 units'],
      formula: 'Units = Desired Profit / (Selling Price - Cost)',
      keyConcept: 'Profitability analysis is vital in manufacturing.',
      commonMistakes: ['Forgetting to subtract costs from selling price', 'Miscalculating fixed costs'],
      extraneousGivens: ['Fixed costs: ₱10,000'],
    }
  },
  {
    id: 'llm-a-0219', area: 'A', subTopic: 'manufacturing',
    topic: 'Machinery Testing', type: 'theory', difficulty: 'average',
    question: 'What is the purpose of machinery testing in agricultural engineering?',
    options: ['Ensure compliance with safety standards', 'Determine efficiency', 'Assess durability', 'All of the above'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: 'Testing encompasses safety, efficiency, and durability standards.',
      commonMistakes: ['Overlooking one aspect of testing', 'Focusing only on efficiency'],
      
    }
  },
  {
    id: 'llm-a-0220', area: 'A', subTopic: 'mechanization-planning',
    topic: 'Field Capacity Calculation', type: 'computation', difficulty: 'average',
    question: 'A corn planter has a working width of 2 meters and operates at a speed of 3 km/h. Calculate the theoretical field capacity (hectares per hour). Note: The planter operates for 5 hours, but this is irrelevant to the calculation.',
    options: ['0.36 ha/h', '0.25 ha/h', '0.40 ha/h', '0.30 ha/h'],
    correctAnswer: 0,
    solution: {
      given: 'Width = 2 m, Speed = 3 km/h, Time = 5 h',
      steps: ['Convert speed to m/min: 3 km/h = 50 m/min', 'Calculate theoretical field capacity: (Width * Speed * 60) / 10000 = (2 * 50 * 60) / 10000 = 0.60 ha/h'],
      formula: 'TFC = (Width * Speed * 60) / 10000',
      keyConcept: 'Theoretical field capacity is crucial for operational planning.',
      commonMistakes: ['Incorrect conversion of speed', 'Units misplacement'],
      extraneousGivens: ['Time: 5 hours'],
    }
  },
  {
    id: 'llm-a-0221', area: 'A', subTopic: 'manufacturing',
    topic: 'Machinery Efficiency', type: 'computation', difficulty: 'hard',
    question: 'A rice combine harvester has an effective cutting width of 4 meters and operates at a speed of 5 km/h. If the field efficiency is 80%, what is the effective field capacity in hectares per hour? Note: The theoretical field capacity is not required for this calculation.',
    options: ['1.6 ha/h', '1.2 ha/h', '0.8 ha/h', '1.0 ha/h'],
    correctAnswer: 1,
    solution: {
      given: 'Width = 4 m, Speed = 5 km/h, Efficiency = 80%',
      steps: ['Convert speed to m/min: 5 km/h = 83.33 m/min', 'Calculate effective field capacity: (Width * Speed * Efficiency) / 10000 = (4 * (5 * 1000 / 60) * 0.8) / 10000 = 1.6 ha/h'],
      formula: 'Effective FC = TFC * Efficiency',
      keyConcept: 'Effective field capacity reflects operational efficiency.',
      commonMistakes: ['Neglecting to adjust for efficiency', 'Confusing effective with theoretical capacity'],
      extraneousGivens: ['Efficiency is given but not needed for different calculations.'],
    }
  },
  {
    id: 'llm-a-0222', area: 'A', subTopic: 'manufacturing',
    topic: 'Harvesting Systems', type: 'computation', difficulty: 'hard',
    question: 'A rice combine harvester operates at a speed of 4 km/h with a cutting width of 5 meters. Calculate its theoretical harvesting capacity in hectares per hour. Note: The efficiency of the harvester is not necessary for the calculation.',
    options: ['2.0 ha/h', '1.5 ha/h', '1.2 ha/h', '1.0 ha/h'],
    correctAnswer: 0,
    solution: {
      given: 'Width = 5 m, Speed = 4 km/h',
      steps: ['Convert speed to m/min: 4 km/h = 66.67 m/min', 'Calculate theoretical harvesting capacity: (Width * Speed) / 10000 = (5 * (4 * 1000 / 60)) / 10000 = 2.0 ha/h'],
      formula: 'Theoretical Capacity = (Width * Speed * 60) / 10000',
      keyConcept: 'Theoretical capacity is essential for understanding machine capabilities.',
      commonMistakes: ['Forgetting unit conversion', 'Misapplying speed with width'],
      extraneousGivens: ['Efficiency value is irrelevant'],
    }
  },
  {
    id: 'llm-a-0223', area: 'A', subTopic: 'operation-maintenance',
    topic: 'Field Efficiency', type: 'theory', difficulty: 'average',
    question: 'How do you calculate field efficiency?',
    options: ['(Actual Field Capacity / Theoretical Field Capacity) x 100', '(Theoretical Field Capacity / Actual Field Capacity) x 100', '(Effective Field Capacity / Actual Field Capacity) x 100', 'None of the above'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: 'Field efficiency is a key indicator of operational effectiveness.',
      commonMistakes: ['Inverting the formula', 'Confusing efficiency with capacity'],
      
    }
  },
  {
    id: 'llm-a-0224', area: 'A', subTopic: 'manufacturing',
    topic: 'Machinery Design', type: 'computation', difficulty: 'hard',
    question: 'If a tillage implement weighs 500 kg and requires a drawbar pull of 1000 N to operate, what will be the horsepower required if the speed of operation is 2 m/s? Note: The weight of the machine is not required for the calculation.',
    options: ['10 hp', '5 hp', '8 hp', '12 hp'],
    correctAnswer: 1,
    solution: {
      given: 'Drawbar Pull = 1000 N, Speed = 2 m/s',
      steps: ['Calculate horsepower: (Drawbar Pull * Speed) / 745.7 = (1000 * 2) / 745.7 = 2.68 hp'],
      formula: 'Horsepower = (Drawbar Pull * Speed) / 745.7',
      keyConcept: 'Horsepower reflects the power requirements for tillage.',
      commonMistakes: ['Overlooking unit conversion', 'Misapplying the formula'],
      extraneousGivens: ['Weight of the implement: 500 kg'],
    }
  },
  {
    id: 'llm-a-0225', area: 'A', subTopic: 'mechanization-planning',
    topic: 'Government Programs and Projects', type: 'theory', difficulty: 'easy',
    question: 'What is the main objective of Republic Act 10601 in the context of agricultural mechanization?',
    options: ['To promote the use of organic fertilizers', 'To enhance the competitiveness of the agricultural sector', 'To regulate crop insurance', 'To manage irrigation systems'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0226', area: 'A', subTopic: 'mechanization-operation',
    topic: 'Machinery Testing', type: 'theory', difficulty: 'average',
    question: 'Which agency is primarily responsible for developing the standards for agricultural machinery in the Philippines?',
    options: ['Department of Agriculture (DA)', 'Bureau of Agricultural and Fisheries Engineering (BAFE)', 'National Irrigation Administration (NIA)', 'Department of Environment and Natural Resources (DENR)'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0227', area: 'A', subTopic: 'mechanization-maintenance',
    topic: 'Preventive Maintenance', type: 'theory', difficulty: 'average',
    question: 'What is the primary purpose of preventive maintenance in agricultural machinery?',
    options: ['To reduce fuel consumption', 'To enhance safety and reliability', 'To improve marketability', 'To comply with government regulations'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0228', area: 'A', subTopic: 'mechanization-management',
    topic: 'Service Centers', type: 'theory', difficulty: 'easy',
    question: 'What is the main role of agricultural service centers in the context of mechanization?',
    options: ['To provide technical education to farmers', 'To sell agricultural inputs', 'To offer machinery repair and maintenance services', 'To manage crop insurance'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0229', area: 'A', subTopic: 'mechanization-planning',
    topic: 'Marketing Strategies', type: 'theory', difficulty: 'average',
    question: 'Which of the following is a key component of an effective marketing strategy for agricultural machinery?',
    options: ['Ignoring customer feedback', 'Focusing solely on digital marketing', 'Identifying target markets and understanding their needs', 'Setting high prices without justification'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0230', area: 'A', subTopic: 'mechanization-operation',
    topic: 'Tractor Operations', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of a moldboard plow in agricultural operations?',
    options: ['To seed crops', 'To aerate the soil', 'To break up and turn over the soil', 'To apply fertilizers'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0231', area: 'A', subTopic: 'mechanization-maintenance',
    topic: 'Troubleshooting', type: 'theory', difficulty: 'hard',
    question: 'What is the first step in troubleshooting a tractor that won\'t start?',
    options: ['Check the fuel level', 'Inspect the electrical connections', 'Test the hydraulic system', 'Examine the tire pressure'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0232', area: 'A', subTopic: 'mechanization-management',
    topic: 'Performance Evaluation System', type: 'theory', difficulty: 'average',
    question: 'What is the purpose of the Contractors Performance Evaluation System (CPES)?',
    options: ['To evaluate worker satisfaction', 'To assess contractor performance based on set criteria', 'To calculate project costs', 'To determine project funding'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0233', area: 'A', subTopic: 'mechanization-manufacturing',
    topic: 'Machinery Manufacturing', type: 'theory', difficulty: 'hard',
    question: 'Which of the following is NOT a factor affecting the performance of seeding equipment?',
    options: ['Soil moisture content', 'Seed quality', 'Machine aesthetics', 'Depth of seed placement'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0234', area: 'A', subTopic: 'mechanization-operation',
    topic: 'Field Capacity Calculation', type: 'computation', difficulty: 'average',
    question: 'A rotary tiller has an effective working width of 1.5 meters and operates at a speed of 4 kilometers per hour. If it takes 30 minutes to till a 1-hectare field, calculate the theoretical field capacity. (Note: Assume 1 hectare = 10,000 m²). Other unnecessary data: Fuel consumption is 12 liters, and the engine runs at 3000 RPM.',
    options: ['0.09 ha/h', '0.4 ha/h', '0.6 ha/h', '2.0 ha/h'],
    correctAnswer: 2,
    solution: {
      given: 'Effective width = 1.5m, Speed = 4 km/h, Area = 1 hectare, Time = 30 min',
      steps: ['Convert speed to m/min: 4 km/h = (4000 m/60 min) = 66.67 m/min', 'Calculate theoretical field capacity: (Effective Width * Speed) / 10000 = (1.5 m * 66.67 m/min) / 10000 = 0.1 ha/min', 'Convert to ha/h: 0.1 ha/min * 60 min = 6 ha/h'],
      formula: 'TFC = (Effective Width * Speed) / 10000',
      keyConcept: 'Theoretical field capacity is based on width and speed.',
      commonMistakes: ['Not converting km/h to m/min', 'Forgetting to divide by 10000', 'Misinterpreting units'],
      extraneousGivens: ['Fuel consumption: 12 liters', 'Engine RPM: 3000'],
    }
  },
  {
    id: 'llm-a-0235', area: 'A', subTopic: 'mechanization-management',
    topic: 'Service Center Operation', type: 'computation', difficulty: 'average',
    question: 'A service center has the capacity to repair 15 tractors per day. If the center operates 8 hours a day, what is the average time taken to repair one tractor? (Note: Assume 2 mechanics are working, and the overhead cost is 1000 PHP per day which is not needed for this calculation).',
    options: ['24 minutes', '32 minutes', '40 minutes', '48 minutes'],
    correctAnswer: 1,
    solution: {
      given: 'Tractors = 15, Operating hours = 8 hours, Mechanics = 2',
      steps: ['Total minutes in a day = 8 hours * 60 minutes = 480 minutes', 'Average time per tractor = Total minutes / Number of tractors = 480 minutes / 15 tractors = 32 minutes'],
      formula: 'Average time = Total minutes / Number of tractors',
      keyConcept: 'Repair time is inversely proportional to the number of tractors serviced.',
      commonMistakes: ['Calculating total hours instead of minutes', 'Overlooking operational hours', 'Assuming all mechanics work simultaneously without downtime'],
      extraneousGivens: ['Number of mechanics: 2', 'Overhead cost: 1000 PHP'],
    }
  },
  {
    id: 'llm-a-0236', area: 'A', subTopic: 'mechanization-operation',
    topic: 'Plowing Force Calculation', type: 'computation', difficulty: 'hard',
    question: 'A moldboard plow has a cutting width of 30 cm and operates at a depth of 15 cm. If the soil draft is 6 psi, calculate the required drawbar pull. (Note: Consider only the width and depth for calculation. Ignore the tractor model which is a Kubota M7040 and its horsepower).',
    options: ['550 N', '570 N', '600 N', '620 N'],
    correctAnswer: 3,
    solution: {
      given: 'Cutting width = 30 cm = 0.3 m, Depth = 15 cm = 0.15 m, Soil draft = 6 psi = 41.37 kPa',
      steps: ['Calculate area of cut: Area = Width * Depth = 0.3 m * 0.15 m = 0.045 m²', 'Calculate drawbar pull: Pull = Soil draft * Area = 41370 Pa * 0.045 m² = 1861.5 N', 'Convert to simpler units if necessary: 1861.5 N = 1861.5 / 9.81 = 189 kgf'],
      formula: 'Drawbar Pull = Soil Draft * Area',
      keyConcept: 'Soil draft and area of the cut determine drawbar pull.',
      commonMistakes: ['Confusing psi and Pa', 'Neglecting to convert units', 'Using incorrect soil draft values'],
      extraneousGivens: ['Tractor model: Kubota M7040', 'Tractor horsepower', 'Ambient temperature'],
    }
  },
  {
    id: 'llm-a-0237', area: 'A', subTopic: 'mechanization-manufacturing',
    topic: 'Seeding Equipment Performance', type: 'computation', difficulty: 'hard',
    question: 'A seeder has a metering device that delivers seeds at a rate of 5 kg/h. If the desired planting density is 40,000 seeds per hectare and each seed weighs 0.02 kg, how many hectares can this seeder service in 8 hours? (Note: Ignore the seed treatment time which is irrelevant).',
    options: ['2.5 hectares', '3 hectares', '4 hectares', '5 hectares'],
    correctAnswer: 2,
    solution: {
      given: 'Seed rate = 5 kg/h, Seed weight = 0.02 kg, Desired density = 40,000 seeds/ha',
      steps: ['Calculate seeds delivered in 8 hours: Seeds = 5 kg/h * 8 h = 40 kg', 'Calculate number of seeds: Seeds = 40 kg / 0.02 kg/seed = 2000 seeds', 'Calculate hectares serviced: Hectares = Seeds / Density = 2000 seeds / 40000 seeds/ha = 0.05 hectares'],
      formula: 'Hectares = (Seeds delivered) / (Desired density)',
      keyConcept: 'Understanding the relationship between seed rate, seed weight, and planting density is crucial.',
      commonMistakes: ['Confusing kg with number of seeds', 'Missing conversion factors', 'Incorrectly calculating time'],
      extraneousGivens: ['Seed treatment time', 'Seeder brand'],
    }
  },
  {
    id: 'llm-a-0238', area: 'A', subTopic: 'mechanization-planning',
    topic: 'Field Efficiency Calculation', type: 'computation', difficulty: 'hard',
    question: 'A field cultivator has a measured field capacity of 3.5 hectares per hour. If the effective field capacity is 75%, calculate the actual field capacity. (Note: The working time is 8 hours, and the fuel efficiency is not needed for this calculation).',
    options: ['2.25 hectares/hour', '2.45 hectares/hour', '2.75 hectares/hour', '2.85 hectares/hour'],
    correctAnswer: 2,
    solution: {
      given: 'Measured field capacity = 3.5 ha/h, Efficiency = 75%',
      steps: ['Calculate actual field capacity: Actual Field Capacity = Measured Field Capacity * Efficiency = 3.5 ha/h * 0.75 = 2.625 ha/h'],
      formula: 'Actual Field Capacity = Measured Field Capacity * Efficiency',
      keyConcept: 'Effective field capacity directly affects how much land can be serviced.',
      commonMistakes: ['Forgetting to convert percentage to decimal', 'Assuming efficiency is 100%', 'Miscalculating ha/h'],
      extraneousGivens: ['Working time: 8 hours', 'Fuel efficiency'],
    }
  },
  {
    id: 'llm-a-0239', area: 'A', subTopic: 'mechanization-operation',
    topic: 'Implement Width Calculation', type: 'computation', difficulty: 'average',
    question: 'A double-offset disk harrow with 20 disks is being operated at a speed of 9 kilometers per hour. Each disk has a diameter of 40 centimeters. Calculate the theoretical cutting width of the harrow. (Note: Ignore the area of the field which is not needed).',
    options: ['6.0 meters', '7.5 meters', '8.0 meters', '9.0 meters'],
    correctAnswer: 1,
    solution: {
      given: 'Disks = 20, Diameter = 40 cm = 0.4 m',
      steps: ['Calculate cutting width: Cutting Width = Number of Disks * Diameter = 20 * 0.4 m = 8.0 m'],
      formula: 'Cutting Width = Number of Disks * Diameter',
      keyConcept: 'Understanding the relationship between disk number and diameter helps in designing and operating machinery.',
      commonMistakes: ['Miscalculating number of disks', 'Forgetting to convert cm to m', 'Using wrong diameter values'],
      extraneousGivens: ['Field area', 'Speed of operation'],
    }
  },
  {
    id: 'llm-a-0240', area: 'A', subTopic: 'mechanization-planning',
    topic: 'Seed Spacing Calculation', type: 'computation', difficulty: 'hard',
    question: 'A corn field requires a planting density of 35,000 plants per hectare. If the average emergence rate is 90% and the row spacing is 1.0 meters, determine the seed spacing if the seeds are to be drilled. (Note: Assume the seed weight is irrelevant).',
    options: ['25 cm', '30 cm', '35 cm', '40 cm'],
    correctAnswer: 0,
    solution: {
      given: 'Desired density = 35,000 plants/ha, Emergence rate = 90%, Row spacing = 1.0 m',
      steps: ['Calculate effective planting density = 35,000 plants/ha * 90% = 31,500 plants/ha', 'Calculate seed spacing: Seed Spacing = Row Spacing / (Effective Density/10,000) = 1.0 m / (31,500/10,000) = 0.032 m = 32 cm'],
      formula: 'Seed Spacing = Row Spacing / (Effective Density/10,000)',
      keyConcept: 'Understanding the relationship between planting density, row spacing, and seed spacing is crucial in seeding operations.',
      commonMistakes: ['Confusing plants per hectare with seed spacing', 'Not considering emergence rate', 'Using incorrect unit conversions'],
      extraneousGivens: ['Seed weight'],
    }
  },
  {
    id: 'llm-a-0241', area: 'A', subTopic: 'mechanization-operation',
    topic: 'Application Rate Calculation', type: 'computation', difficulty: 'hard',
    question: 'While spraying a pesticide, a person uses a sprayer with a flow rate of 1 liter per minute and covers a swath of 1.2 meters while walking at a speed of 30 meters per minute. Calculate the application rate in liters per hectare. (Note: Ignore the ambient temperature which is not required for this calculation).',
    options: ['20 L/ha', '25 L/ha', '30 L/ha', '35 L/ha'],
    correctAnswer: 3,
    solution: {
      given: 'Flow rate = 1 L/min, Swath width = 1.2 m, Speed = 30 m/min',
      steps: ['Calculate area covered per minute: Area = Swath Width * Speed = 1.2 m * 30 m = 36 m²/min', 'Convert area to hectares: 36 m²/min = 36/10,000 ha = 0.0036 ha/min', 'Application rate = Flow rate / Area = 1 L/min / 0.0036 ha/min = 277.78 L/ha'],
      formula: 'Application Rate = Flow Rate / Area',
      keyConcept: 'Application rates depend on flow rate and area coverage.',
      commonMistakes: ['Not converting units appropriately', 'Misunderstanding flow rate versus area', 'Calculating in wrong units'],
      extraneousGivens: ['Ambient temperature'],
    }
  },
  {
    id: 'llm-a-0242', area: 'A', subTopic: 'mechanization-operation',
    topic: 'Theoretical Field Capacity Calculation', type: 'computation', difficulty: 'hard',
    question: 'A combine harvester has an effective width of 5 meters and travels at a speed of 6 kilometers per hour. Calculate its theoretical field capacity in hectares per hour. (Note: Ignore the fuel efficiency which is not needed for this calculation).',
    options: ['2.5 ha/h', '3.0 ha/h', '3.5 ha/h', '4.0 ha/h'],
    correctAnswer: 1,
    solution: {
      given: 'Effective width = 5 m, Speed = 6 km/h',
      steps: ['Convert speed to m/min: 6 km/h = (6000 m/60 min) = 100 m/min', 'Calculate theoretical field capacity: TFC = (Width * Speed) / 10,000 = (5m * 100 m/min) / 10,000 = 5 ha/h'],
      formula: 'Theoretical Field Capacity = (Width * Speed) / 10,000',
      keyConcept: 'Theoretical field capacity reflects the efficiency and productivity of a machine.',
      commonMistakes: ['Confusing km/h with m/min', 'Not converting hectares to square meters', 'Miscalculation of dimensions'],
      extraneousGivens: ['Fuel efficiency'],
    }
  },
  {
    id: 'llm-a-0243', area: 'A', subTopic: 'mechanization-planning',
    topic: 'Government Programs and Agencies', type: 'theory', difficulty: 'easy',
    question: 'Which Republic Act promotes agricultural and fisheries mechanization development in the Philippines?',
    options: ['RA 10600', 'RA 10601', 'RA 10602', 'None of the above'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0244', area: 'A', subTopic: 'mechanization-operation',
    topic: 'Field Operations', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of tillage in agricultural practices?',
    options: ['Crop planting', 'Soil manipulation', 'Weed control', 'Pest management'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0245', area: 'A', subTopic: 'mechanization-maintenance',
    topic: 'Preventive Maintenance', type: 'theory', difficulty: 'average',
    question: 'What is the importance of preventive maintenance in agricultural machinery?',
    options: ['To ensure efficiency and longevity', 'To increase repair costs', 'To reduce fuel consumption', 'To eliminate the need for operators'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0246', area: 'A', subTopic: 'mechanization-marketing',
    topic: 'Extension Strategies', type: 'theory', difficulty: 'average',
    question: 'Which strategy is crucial for effective marketing of agricultural machinery?',
    options: ['Direct sales only', 'Adapting to local needs', 'Outsourcing maintenance', 'Maximizing land area used'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0247', area: 'A', subTopic: 'machinery-design',
    topic: 'Seeders and Planters', type: 'theory', difficulty: 'easy',
    question: 'What is the primary function of a seed tube in a seeder?',
    options: ['To store seeds', 'To meter seeds', 'To convey seeds to the soil', 'To protect seeds from pests'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0248', area: 'A', subTopic: 'machinery-testing',
    topic: 'Performance Standards', type: 'theory', difficulty: 'average',
    question: 'What is the maximum allowable noise level for a rice combine harvester?',
    options: ['80 dB', '90 dB', '95 dB', '100 dB'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0249', area: 'A', subTopic: 'mechanization-operation',
    topic: 'Field Efficiency', type: 'computation', difficulty: 'average',
    question: 'A rotary tiller has a theoretical field capacity of 0.4 hectares per hour with a field efficiency of 85%. What is the effective field capacity?',
    options: ['0.31 ha/h', '0.34 ha/h', '0.38 ha/h', '0.42 ha/h'],
    correctAnswer: 0,
    solution: {
      given: 'TFC = 0.4 ha/h, FE = 85%',
      steps: ['EFC = TFC × (FE/100) = 0.4 ha/h × 0.85 = 0.34 ha/h'],
      formula: 'EFC = TFC × (FE/100)',
      keyConcept: 'Effective field capacity is determined by the field efficiency of the operation.',
      commonMistakes: ['Forgetting to convert percentages to decimals', 'Using the wrong theoretical field capacity', 'Misunderstanding field efficiency'],
      extraneousGivens: ['None'],
    }
  },
  {
    id: 'llm-a-0250', area: 'A', subTopic: 'machinery-design',
    topic: 'Tillage Equipment', type: 'theory', difficulty: 'average',
    question: 'What is the primary function of a moldboard plow?',
    options: ['To seed crops', 'To plow and invert soil', 'To harvest crops', 'To level the soil'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0251', area: 'A', subTopic: 'mechanization-operation',
    topic: 'Tractor Operation', type: 'computation', difficulty: 'hard',
    question: 'A tractor pulls a moldboard plow with a total width of 1.5 meters at a speed of 6 km/h. Calculate the theoretical field capacity. Assume there are 5 ineffective gears in the system during operation.',
    options: ['0.40 ha/h', '0.45 ha/h', '0.50 ha/h', '0.55 ha/h'],
    correctAnswer: 1,
    solution: {
      given: 'Width = 1.5m, Speed = 6km/h (or 0.1 km/min), Ineffective gears = 5',
      steps: ['Convert speed to ha/min: 6 km/h × (1000 m/km)/(60 min/h) = 100 m/min', 'Calculate theoretical field capacity: TFC = (Width × Speed) / 10000 = (1.5 × 100) / 10000 = 0.015 ha/min', 'Convert ha/min to ha/h: 0.015 ha/min × 60 = 0.90 ha/h', 'Adjust for ineffective gears: EFC = TFC × (1 – (0.05 × 5)) = 0.90 × 0.75 = 0.675 ha/h'],
      formula: 'EFC = (Width × Speed) / 10000 × (1 - (0.05 × ineffective gears))',
      keyConcept: 'Field capacity is influenced by tractor speed, implement width, and operational inefficiencies.',
      commonMistakes: ['Incorrect unit conversions', 'Not accounting for ineffective gears', 'Confusing theoretical with effective field capacity'],
      extraneousGivens: ['Ineffective gears: 5', 'Total width: 1.5m', 'Ambient conditions: normal'],
    }
  },
  {
    id: 'llm-a-0252', area: 'A', subTopic: 'machinery-design',
    topic: 'Combine Harvesters', type: 'theory', difficulty: 'average',
    question: 'What primary function does the grain elevator serve in a rice combine harvester?',
    options: ['To cut rice stalks', 'To separate grains from chaff', 'To carry grains from the auger to the tank', 'To clean the grains'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0253', area: 'A', subTopic: 'mechanization-planning',
    topic: 'Extension Strategies', type: 'theory', difficulty: 'easy',
    question: 'What is a key aspect of a successful marketing strategy for agricultural mechanization?',
    options: ['Lowering prices', 'Building customer relationships', 'Advertising on social media', 'Offering the latest technologies only'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0254', area: 'A', subTopic: 'mechanization-maintenance',
    topic: 'Machinery Troubleshooting', type: 'computation', difficulty: 'hard',
    question: 'A tractor experiences a drop in power output, rated originally at 75 kW. After troubleshooting, the power output is measured at 60 kW. What percentage decrease in power is observed? Additionally, the ambient temperature during operation is recorded at 32°C.',
    options: ['15%', '20%', '25%', '30%'],
    correctAnswer: 1,
    solution: {
      given: 'Original power = 75 kW, Measured power = 60 kW, Ambient temperature (unnecessary): 32°C',
      steps: ['Calculate decrease in power: Decrease = Original - Measured = 75 - 60 = 15 kW', 'Calculate percentage decrease: Percentage decrease = (Decrease / Original) × 100 = (15 / 75) × 100 = 20%'],
      formula: 'Percentage decrease = ((Original - Measured) / Original) × 100',
      keyConcept: 'Monitoring power output helps assess equipment health and operational efficiency.',
      commonMistakes: ['Confusing increase with decrease', 'Using wrong values', 'Not converting to percentage correctly'],
      extraneousGivens: ['Ambient temperature: 32°C'],
    }
  },
  {
    id: 'llm-a-0255', area: 'A', subTopic: 'mechanization-operation',
    topic: 'Field Operations', type: 'theory', difficulty: 'average',
    question: 'What does effective field capacity of a machine indicate?',
    options: ['Total area covered per hour', 'Area covered considering downtime', 'Peak potential of the implement', 'All of the above'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0256', area: 'A', subTopic: 'machinery-design',
    topic: 'Seeding Equipment', type: 'computation', difficulty: 'hard',
    question: 'A field needs to be planted with corn at a density of 37,000 plants per hectare. If the seeds are drilled in rows spaced 0.75 meters apart, and the average emergence rate is 90%, how much seed (in kilograms) is needed for 1 hectare? Each seed weighs 0.015 kg. The soil moisture is recorded at 20%, which is unnecessary for the calculation.',
    options: ['500 kg', '450 kg', '460 kg', '370 kg'],
    correctAnswer: 2,
    solution: {
      given: 'Density = 37,000 seeds/ha, Seed weight = 0.015 kg, Emergence rate = 90%, Soil moisture: 20% (unnecessary)',
      steps: ['Calculate seeds needed accounting for emergence: Actual needed = Density / Emergence Rate = 37,000 / 0.90 = 41,111 seeds/ha.', 'Calculate total weight: Total weight = Actual needed × Seed weight = 41,111 × 0.015 kg = 616.67 kg.'],
      formula: 'Total weight = (Density / Emergence Rate) × Seed weight',
      keyConcept: 'Understanding planting density and weights helps in seed procurement and planning.',
      commonMistakes: ['Forgetting to adjust for emergence', 'Incorrectly estimating seed weight', 'Mixing up units'],
      extraneousGivens: ['Soil moisture: 20%'],
    }
  },
  {
    id: 'llm-a-0257', area: 'A', subTopic: 'mechanization-operation',
    topic: 'Combine Harvesters', type: 'computation', difficulty: 'hard',
    question: 'A rice combine harvester covers an area of 1.2 hectares in 45 minutes. If the effective working width is 2.0 meters, what is the theoretical field capacity in hectares per hour? Assume you have already measured the noise level at 95 dB during operation.',
    options: ['1.5 ha/h', '2.0 ha/h', '2.5 ha/h', '3.0 ha/h'],
    correctAnswer: 2,
    solution: {
      given: 'Area = 1.2 ha, Time = 45 minutes, Width = 2.0 m, Noise level: 95 dB (unnecessary)',
      steps: ['Convert time to hours: 45 min = 0.75 h', 'Calculate theoretical field capacity: TFC = Area / Time = 1.2 ha / 0.75 h = 1.6 ha/h.'],
      formula: 'TFC = Area / Time',
      keyConcept: 'Theoretical field capacity showcases the potential maximum harvesting effectiveness.',
      commonMistakes: ['Not converting minutes to hours', 'Using incorrect area', 'Miscalculating field capacity'],
      extraneousGivens: ['Noise level: 95 dB'],
    }
  },
  {
    id: 'llm-a-0258', area: 'A', subTopic: 'mechanization-planning',
    topic: 'Marketing Strategies', type: 'theory', difficulty: 'average',
    question: 'What is the role of customer feedback in mechanization marketing?',
    options: ['Improve customer service', 'Identify product improvements', 'Enhance marketing strategies', 'All of the above'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0259', area: 'A', subTopic: 'mechanization-planning',
    topic: 'Farm Mechanization Terminologies', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of agricultural mechanization?',
    options: ['To increase labor demand', 'To enhance productivity and efficiency', 'To decrease the use of technology', 'To promote traditional farming methods'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0260', area: 'A', subTopic: 'mechanization-planning',
    topic: 'Farm Mechanization Terminologies', type: 'theory', difficulty: 'easy',
    question: 'What does RA 10601 pertain to?',
    options: ['Issuance of licenses for fertilizers', 'Promotion of agricultural mechanization development', 'Regulations on fishery practices', 'Standards for agricultural education'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0261', area: 'A', subTopic: 'mechanization-planning',
    topic: 'Service Center Management', type: 'theory', difficulty: 'average',
    question: 'Which agency is responsible for coordinating agricultural mechanization programs in the Philippines?',
    options: ['Bureau of Agricultural and Fisheries Engineering (BAFE)', 'Department of Environment and Natural Resources (DENR)', 'National Irrigation Administration (NIA)', 'Department of Agriculture (DA)'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0262', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Performance', type: 'computation', difficulty: 'hard',
    question: 'A rice combine harvester with a 3-meter cutting width operates at a speed of 4 km/h. The machine efficiency is 75%. Calculate its effective field capacity in hectares per hour. The fuel tank capacity is 100 liters, and the weight of the machine is 2000 kg.',
    options: ['2.25 ha/h', '2.5 ha/h', '2.75 ha/h', '3.0 ha/h'],
    correctAnswer: 1,
    solution: {
      given: 'Width = 3 m, Speed = 4 km/h, Efficiency = 75%.',
      steps: ['Convert speed to m/min: 4 km/h = (4000 m / 60 min) = 66.67 m/min.', 'Calculate theoretical field capacity (TFC): TFC = (Width × Speed) / 10000 = (3 m × 66.67 m/min) / 10000 = 0.2001 ha/min.', 'Calculate effective field capacity (EFC): EFC = TFC × Efficiency = 0.2001 ha/min × 0.75 = 0.150075 ha/min.', 'Convert to ha/h: EFC = 0.150075 ha/min × 60 = 9.0045 ha/h.'],
      formula: 'EFC = (Width × Speed / 10000) × Efficiency',
      keyConcept: 'Effective field capacity reflects the actual work done by the machine.',
      commonMistakes: ['Forgetting to convert speed to consistent units', 'Not factoring in efficiency', 'Misinterpreting theoretical vs. effective capacity'],
      extraneousGivens: ['Fuel tank capacity: 100 liters', 'Weight of the machine: 2000 kg'],
    }
  },
  {
    id: 'llm-a-0263', area: 'A', subTopic: 'mechanization-planning',
    topic: 'Planning for Mechanization', type: 'theory', difficulty: 'average',
    question: 'What is the role of the Contractors Performance Evaluation System (CPES) in agricultural mechanization?',
    options: ['To evaluate crop yields', 'To assess contractor performance on government projects', 'To regulate machinery emissions', 'To monitor soil quality'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0264', area: 'A', subTopic: 'power-engineering',
    topic: 'Machinery Operation', type: 'theory', difficulty: 'average',
    question: 'Which local brand is known for manufacturing agricultural tractors in the Philippines?',
    options: ['Honda', 'Kubota', 'Mitsubishi', 'John Deere'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0265', area: 'A', subTopic: 'power-engineering',
    topic: 'Field Operations', type: 'theory', difficulty: 'easy',
    question: 'What is one major benefit of using a rotary tiller in land preparation?',
    options: ['It reduces soil structure', 'It prepares the soil too deep', 'It improves soil aeration and texture', 'It increases weed growth'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0266', area: 'A', subTopic: 'power-engineering',
    topic: 'Tillage Equipment', type: 'theory', difficulty: 'average',
    question: 'What is a primary tillage implement used for soil inversion?',
    options: ['Harrow', 'Moldboard plow', 'Disk harrow', 'Subsoiler'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0267', area: 'A', subTopic: 'power-engineering',
    topic: 'Tillage Equipment', type: 'theory', difficulty: 'easy',
    question: 'Which tillage equipment is primarily used to create a seedbed by breaking up soil clods?',
    options: ['Roller', 'Harrow', 'Disk Plow', 'Moldboard Plow'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0268', area: 'A', subTopic: 'power-engineering',
    topic: 'Field Operations', type: 'theory', difficulty: 'average',
    question: 'What is the typical noise level allowed for operators of a rice combine harvester according to safety standards?',
    options: ['85 dB', '90 dB', '95 dB', '100 dB'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0269', area: 'A', subTopic: 'power-engineering',
    topic: 'Field Operations', type: 'theory', difficulty: 'easy',
    question: 'What is the main function of a press wheel in a seeder?',
    options: ['To cover seeds with fertilizer', 'To crush the soil clods', 'To compress the soil around the seeds', 'To meter the seeds'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0270', area: 'A', subTopic: 'power-engineering',
    topic: 'Machinery Testing', type: 'theory', difficulty: 'average',
    question: 'What is the primary operational goal of a combine harvester?',
    options: ['To till the soil', 'To plant seeds', 'To harvest, thresh, and clean grains', 'To prepare the field'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0271', area: 'A', subTopic: 'power-engineering',
    topic: 'Field Operations', type: 'computation', difficulty: 'hard',
    question: 'A rice combine harvester has a cutting width of 2.5 meters and operates at a speed of 3.5 km/h. Given a field efficiency of 80%, calculate the effective field capacity in hectares per hour. The operator receives a monthly salary of PHP 25,000 and the maintenance costs are PHP 5000 per month.',
    options: ['1.0 ha/h', '1.2 ha/h', '1.5 ha/h', '1.8 ha/h'],
    correctAnswer: 1,
    solution: {
      given: 'Width = 2.5 m, Speed = 3.5 km/h, Efficiency = 80%',
      steps: ['Convert speed to m/min: 3.5 km/h = (3500 m / 60 min) = 58.33 m/min.', 'Calculate theoretical field capacity (TFC): TFC = (Width × Speed) / 10000 = (2.5 m × 58.33 m/min) / 10000 = 0.1458 ha/min.', 'Calculate effective field capacity (EFC): EFC = TFC × Efficiency = 0.1458 ha/min × 0.80 = 0.11664 ha/min.', 'Convert to ha/h: EFC = 0.11664 ha/min × 60 = 6.9984 ha/h.'],
      formula: 'EFC = (Width × Speed / 10000) × Efficiency',
      keyConcept: 'Effective field capacity is a crucial indicator of a machine\'s performance.',
      commonMistakes: ['Not converting speed properly', 'Confusing theoretical and effective field capacity', 'Erroneous efficiency application'],
      extraneousGivens: ['Operator salary: PHP 25,000', 'Maintenance costs: PHP 5000'],
    }
  },
  {
    id: 'llm-a-0272', area: 'A', subTopic: 'power-engineering',
    topic: 'Tillage Equipment', type: 'computation', difficulty: 'hard',
    question: 'A tractor pulling a chisel plow operates at a depth of 15 cm and speed of 6 km/h. The total width of the implement is 1.5 m and soil strength is estimated to provide a draft of 1000 N/m2. Calculate the drawbar pull required in kilonewtons. The tractor horsepower is rated at 75 hp.',
    options: ['4.5 kN', '5.0 kN', '5.5 kN', '6.0 kN'],
    correctAnswer: 0,
    solution: {
      given: 'Depth = 15 cm, Speed = 6 km/h, Width = 1.5 m, Draft = 1000 N/m².',
      steps: ['Convert depth to meters: 15 cm = 0.15 m.', 'Calculate the soil volume affected: A = Width × Depth = 1.5 m × 0.15 m = 0.225 m².', 'Calculate the draft force: Draft Force = Draft × Area = 1000 N/m² × 0.225 m² = 225 N.', 'Convert to kilonewtons: 225 N = 0.225 kN.'],
      formula: 'Drawbar Pull = Draft × Area',
      keyConcept: 'Drawbar pull calculations are crucial for plowing operations.',
      commonMistakes: ['Forgetting to convert units properly', 'Incorrectly estimating area affected', 'Misapplying draft calculations'],
      extraneousGivens: ['Tractor horsepower: 75 hp'],
    }
  },
  {
    id: 'llm-a-0273', area: 'A', subTopic: 'power-engineering',
    topic: 'Machinery Testing', type: 'computation', difficulty: 'hard',
    question: 'A tractor-driven disk harrow with an effective working width of 2.5 meters travels at a speed of 5 km/h. Calculate its theoretical field capacity in hectares per hour. Ambient temperature is 30°C and operational noise level is 90 dB.',
    options: ['1.5 ha/h', '2.0 ha/h', '2.5 ha/h', '3.0 ha/h'],
    correctAnswer: 1,
    solution: {
      given: 'Width = 2.5 m, Speed = 5 km/h.',
      steps: ['Convert speed to m/min: 5 km/h = (5000 m / 60 min) = 83.33 m/min.', 'Calculate theoretical field capacity (TFC): TFC = (Width × Speed) / 10000 = (2.5 m × 83.33 m/min) / 10000 = 0.2083 ha/min.', 'Convert to ha/h: TFC = 0.2083 ha/min × 60 = 12.5 ha/h.'],
      formula: 'TFC = (Width × Speed / 10000)',
      keyConcept: 'Theoretical field capacity provides insights into machine productivity.',
      commonMistakes: ['Forgetting to convert speed properly', 'Misinterpreting hectares and minutes', 'Incorrectly calculating area'],
      extraneousGivens: ['Ambient temperature: 30°C', 'Noise level: 90 dB'],
    }
  },
  {
    id: 'llm-a-0274', area: 'A', subTopic: 'power-engineering',
    topic: 'Field Operations', type: 'theory', difficulty: 'easy',
    question: 'What is the primary concern when operating farm machinery in wet soil conditions?',
    options: ['Increased efficiency', 'Soil compaction', 'Reduced fuel consumption', 'Faster operation'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0275', area: 'A', subTopic: 'mechanization-planning',
    topic: 'Marketing and Extension Strategies', type: 'theory', difficulty: 'average',
    question: 'What is a crucial factor in promoting agricultural mechanization to farmers?',
    options: ['Discount prices', 'Quality assurance and training', 'Government regulations only', 'Machinery aesthetics'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0276', area: 'A', subTopic: 'mechanization-planning',
    topic: 'Planning for Mechanization', type: 'theory', difficulty: 'average',
    question: 'What should be assessed first when planning an agricultural mechanization program?',
    options: ['Available funding', 'Farmer training needs', 'Type of machinery to purchase', 'Existing infrastructure'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0277', area: 'A', subTopic: 'mechanization-operation',
    topic: 'Tractor Operation', type: 'theory', difficulty: 'average',
    question: 'What is the primary function of a tractor in agricultural mechanization?',
    options: ['To harvest crops', 'To provide power for implements', 'To irrigate fields', 'To manage livestock'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0278', area: 'A', subTopic: 'mechanization-maintenance',
    topic: 'Preventive Maintenance', type: 'theory', difficulty: 'easy',
    question: 'What is the primary goal of preventive maintenance in agricultural machinery?',
    options: ['Maximizing crop yield', 'Reducing downtime and costs', 'Increasing fuel consumption', 'Decreasing labor requirements'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0279', area: 'A', subTopic: 'mechanization-management',
    topic: 'Machinery Management', type: 'theory', difficulty: 'hard',
    question: 'Which organization evaluates contractor performance for government projects in the Philippines?',
    options: ['Bureau of Agricultural and Fisheries Engineering', 'Philippine Contractors Accreditation Board', 'National Agricultural and Fishery Council', 'Department of Agriculture'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0280', area: 'A', subTopic: 'mechanization-operation',
    topic: 'Field Operations', type: 'theory', difficulty: 'easy',
    question: 'What is the main advantage of using a rice combine harvester?',
    options: ['It requires less labor', 'It increases water use', 'It reduces soil compaction', 'It only reaps rice without threshing'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0281', area: 'A', subTopic: 'mechanization-maintenance',
    topic: 'Troubleshooting', type: 'theory', difficulty: 'average',
    question: 'What should be the first step if a tractor engine fails to start?',
    options: ['Check the fuel level', 'Inspect the tires', 'Examine the steering', 'Change the engine oil'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0282', area: 'A', subTopic: 'mechanization-production',
    topic: 'Field Capacity Calculations', type: 'computation', difficulty: 'average',
    question: 'A tractor can operate a disk harrow with a working width of 2 meters at a speed of 8 km/h. Calculate the theoretical field capacity in hectares per hour. Ignoring any extraneous information, what is the correct answer?',
    options: ['2.4 ha/h', '6.4 ha/h', '4.8 ha/h', '8.0 ha/h'],
    correctAnswer: 0,
    solution: {
      given: 'Width = 2m, Speed = 8 km/h, Conversion: 1 km/h = 0.01667 ha/min',
      steps: ['Convert speed: 8 km/h × 0.01667 ha/min = 0.1333 ha/min', 'Calculate theoretical field capacity: 2m × 0.1333 ha/min = 0.2666 ha/min', 'Convert to hectare per hour: 0.2666 ha/min × 60 min = 16 ha/h'],
      formula: 'Field Capacity (ha/h) = (Working Width x Speed (ha/min)) × 60',
      keyConcept: 'Field capacity is calculated based on implement width and operational speed.',
      commonMistakes: ['Converting units incorrectly', 'Forgetting to adjust for working width', 'Using wrong speed in computations'],
      extraneousGivens: ['Working hours: 8 hours', 'Type of crop: Rice', 'Soil type: Loamy', 'Fuel consumption rate: 6 liters/hour', 'Engine power: 60 hp'],
    }
  },
  {
    id: 'llm-a-0283', area: 'A', subTopic: 'mechanization-operation',
    topic: 'Effective Field Capacity', type: 'computation', difficulty: 'hard',
    question: 'A rotary tiller has a theoretical field capacity of 0.5 hectares per hour. If the actual field efficiency was measured at 70%, what is the effective field capacity? Consider the following extraneous data: The tiller operates at a speed of 6 km/h and has a working width of 1.5 m.',
    options: ['0.35 ha/h', '0.5 ha/h', '0.75 ha/h', '0.6 ha/h'],
    correctAnswer: 0,
    solution: {
      given: 'Theoretical Field Capacity = 0.5 ha/h, Efficiency = 70%',
      steps: ['Calculate effective field capacity: Effective Field Capacity = Theoretical Field Capacity × Efficiency', 'Effective Field Capacity = 0.5 ha/h × 0.70 = 0.35 ha/h'],
      formula: 'Effective Field Capacity = Theoretical Field Capacity × Efficiency',
      keyConcept: 'Effective field capacity indicates how much area is actually covered by an implement in a given time due to efficiency factors.',
      commonMistakes: ['Not converting efficiency to decimal form', 'Mistaking effective for theoretical field capacity', 'Calculating efficiency incorrectly'],
      extraneousGivens: ['Speed: 6 km/h', 'Working width: 1.5 m', 'Depth of tillage: 15 cm'],
    }
  },
  {
    id: 'llm-a-0284', area: 'A', subTopic: 'mechanization-management',
    topic: 'Service Centers', type: 'theory', difficulty: 'average',
    question: 'What is a key function of agricultural service centers?',
    options: ['Provide direct sales to farmers', 'Manufacture machinery parts', 'Offer repair and maintenance services', 'Conduct agricultural research'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0285', area: 'A', subTopic: 'mechanization-planning',
    topic: 'Field Operations', type: 'theory', difficulty: 'easy',
    question: 'What does the term \'field efficiency\' generally refer to?',
    options: ['Overall crop yield', 'Actual field capacity vs. theoretical field capacity', 'Soil nutrient levels', 'Resistance of crops to pests'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0286', area: 'A', subTopic: 'mechanization-production',
    topic: 'Machinery Fabrication', type: 'computation', difficulty: 'hard',
    question: 'A farmer needs to plow a 5-hectare cornfield within 10 days. If the plow operates at a speed of 5 km/h with a working width of 1.2 m, how many plow units are needed assuming each unit can operate effectively for 8 hours a day? Assume a field efficiency of 80%. Extraneous data includes average fertilizer cost of PHP 2000 and barometric pressure of 101.3 kPa.',
    options: ['2 units', '4 units', '5 units', '3 units'],
    correctAnswer: 1,
    solution: {
      given: 'Field Area = 5 ha, Days = 10, Speed = 5 km/h, Width = 1.2 m, Efficiency = 80%',
      steps: ['Calculate total operational hours available: Total Hours = Days × 8 hours/day = 80 hours', 'Calculate effective field capacity per unit: Effective Field Capacity = (Width × Speed × Efficiency) = (1.2 m × 5 km/h × 0.8) = 4.8 ha/h', 'Calculate total area to be plowed: Total Area = 5 ha', 'Calculate total plow units needed: Units = Total Area / Effective Field Capacity × Hours = 5 ha / 4.8 ha/h × 80 hours = 4.17 units, round up to 4'],
      formula: 'Units Needed = Total Area / (Effective Field Capacity × Total Hours)',
      keyConcept: 'Understanding field efficiency and effective field capacity helps estimate the number of machines required to complete a task in the desired timeframe.',
      commonMistakes: ['Forgetting to convert km/h to ha/h', 'Incorrectly calculating total hours', 'Rounding down instead of up'],
      extraneousGivens: ['Cost of fertilizer: PHP 2000', 'Barometric pressure: 101.3 kPa'],
    }
  },
  {
    id: 'llm-a-0287', area: 'A', subTopic: 'mechanization-production',
    topic: 'Seed Spacing Calculations', type: 'computation', difficulty: 'average',
    question: 'A corn field requires a planting density of 37,000 plants per hectare. If the average emergence rate is 90%, and the row spacing is 1.2 meters, determine the seed spacing if the seeds are to be drilled. Extraneous info: Field size is 2 hectares and expected rainfall is 1500 mm.',
    options: ['0.26 m', '0.30 m', '0.34 m', '0.40 m'],
    correctAnswer: 1,
    solution: {
      given: 'Density = 37,000 plants/ha, Emergence Rate = 90%, Row Spacing = 1.2 m',
      steps: ['Calculate actual planting density: Actual Density = 37,000 × 0.90 = 33,300 plants/ha', 'Calculate total plants in row: Plants per row = Row spacing / Seed spacing', 'Setting the equation: 33,300 = 10,000 / Seed spacing', 'Solve for Seed spacing: Seed spacing = 1.2 m / (33,300 / 10,000) = 0.30 m'],
      formula: 'Seed Spacing = Row Spacing / (Density / 10,000)',
      keyConcept: 'Understanding seed spacing is crucial to optimize crop yield.',
      commonMistakes: ['Using total number of plants without emergence rate', 'Confusing meters with centimeters', 'Incorrect row spacing'],
      extraneousGivens: ['Field size: 2 hectares', 'Expected rainfall: 1500 mm'],
    }
  },
  {
    id: 'llm-a-0288', area: 'A', subTopic: 'mechanization-operation',
    topic: 'Application Rates', type: 'computation', difficulty: 'hard',
    question: 'While walking through a rice field with a sprayer that has a 1-meter spray swath, a person covers a distance of 220 meters per minute. If the nozzle discharge rate is 0.4 liters per minute, determine the application rate per hectare. Extraneous values include the width of the field (5 ha) and the discharge pressure (2.5 bar).',
    options: ['0.09 L/ha', '0.1 L/ha', '0.2 L/ha', '0.3 L/ha'],
    correctAnswer: 1,
    solution: {
      given: 'Spray Swath = 1 m, Speed = 220 m/min, Discharge Rate = 0.4 L/min',
      steps: ['Calculate area covered per minute: Area/min = Spray Swath × Speed = 1 m × 220 m = 220 m²/min', 'Convert to hectares: 220 m²/min = 0.022 ha/min', 'Calculate application rate: Application Rate = Discharge Rate / Area = 0.4 L/min / 0.022 ha/min = 18.18 L/ha'],
      formula: 'Application Rate (L/ha) = (Nozzle Discharge Rate (L/min)) / (Area Covered (ha/min))',
      keyConcept: 'Application rates must be calculated for effective pest/disease management.',
      commonMistakes: ['Failing to convert area units', 'Using incorrect speed or discharge rate', 'Confusing liters with milliliters'],
      extraneousGivens: ['Field size: 5 ha', 'Discharge pressure: 2.5 bar'],
    }
  },
  {
    id: 'llm-a-0289', area: 'A', subTopic: 'mechanization-management',
    topic: 'Marketing Strategies', type: 'theory', difficulty: 'average',
    question: 'Which of the following is a key consideration when developing marketing strategies for agricultural machinery?',
    options: ['Market demand analysis', 'Production costs', 'Transportation logistics', 'All of the above'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0290', area: 'A', subTopic: 'mechanization-production',
    topic: 'Effective Field Capacity', type: 'theory', difficulty: 'easy',
    question: 'How do you define effective field capacity?',
    options: ['Theoretical capacity minus losses', 'Maximum capacity of the equipment', 'Total area covered in a day', 'Average speed of operation'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0291', area: 'A', subTopic: 'mechanization-planning',
    topic: 'Government Programs and Agencies', type: 'theory', difficulty: 'easy',
    question: 'Which agency is primarily responsible for the implementation of agricultural mechanization programs in the Philippines?',
    options: ['Department of Agriculture (DA)', 'National Irrigation Administration (NIA)', 'Department of Environment and Natural Resources (DENR)', 'Philippine Contractors Accreditation Board (PCAB)'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0292', area: 'A', subTopic: 'mechanization-planning',
    topic: 'Contractors Performance Evaluation System', type: 'theory', difficulty: 'average',
    question: 'What is the main purpose of the Contractors Performance Evaluation System (CPES) implemented under Republic Act 9184?',
    options: ['To assess the quality of agricultural equipment', 'To evaluate contractor performance in government infrastructure projects', 'To monitor soil health in agricultural areas', 'To certify agricultural mechanization programs'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0293', area: 'A', subTopic: 'operation-management',
    topic: 'Tractor Operation', type: 'theory', difficulty: 'easy',
    question: 'What is the primary function of a tractor during field operations?',
    options: ['To prepare the soil for planting', 'To harvest crops', 'To apply fertilizers', 'To maintain soil moisture'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0294', area: 'A', subTopic: 'maintenance-management',
    topic: 'Preventive Maintenance', type: 'theory', difficulty: 'average',
    question: 'Which of the following is a key component of a preventive maintenance program for agricultural machinery?',
    options: ['Daily operation tracking', 'Weekly lubrication checks', 'Biannual performance reviews', 'Monthly crop monitoring'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0295', area: 'A', subTopic: 'operation-management',
    topic: 'Field Efficiency', type: 'theory', difficulty: 'hard',
    question: 'Field efficiency in agricultural mechanization refers to what?',
    options: ['The ratio of actual output to theoretical output', 'The amount of fuel used during operation', 'The speed of the machine', 'The maintenance cost of the machinery'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0296', area: 'A', subTopic: 'power-engineering',
    topic: 'Fuel Consumption Calculation', type: 'computation', difficulty: 'average',
    question: 'A tractor has a theoretical fuel consumption of 10 liters per hectare with an efficiency rating of 80%. If a farmer operates in a 5-hectare cornfield but the area using a 3-meter-wide implement is 4 hectares and the implement operates at a speed of 5 km/h, calculate the effective fuel consumption per hectare while considering the ambient temperature of 30°C. What is the effective fuel consumption per hectare?',
    options: ['8 L/ha', '12 L/ha', '10 L/ha', '7 L/ha'],
    correctAnswer: 0,
    solution: {
      given: 'Theoretical Fuel Consumption = 10 L/ha, Efficiency = 80%',
      steps: ['Effective Fuel Consumption (EFC) = Theoretical Fuel Consumption / Efficiency = 10 L/ha / 0.8 = 12.5 L/ha', 'Since the operation is effective only in 4 hectares, EFC becomes 10 L/ha; then 8 L/ha is the Field Consumption.'],
      formula: 'EFC = Theoretical Fuel Consumption / Efficiency',
      keyConcept: 'Fuel consumption improves with better operational efficiency.',
      commonMistakes: ['Forgetting to use the efficiency in the calculation', 'Incorrectly estimating the area being worked', 'Neglecting to convert units if required'],
      extraneousGivens: ['Ambient temperature: 30°C', 'Operational speed: 5 km/h'],
    }
  },
  {
    id: 'llm-a-0297', area: 'A', subTopic: 'mechanization-planning',
    topic: 'Marketing Strategies', type: 'theory', difficulty: 'average',
    question: 'When preparing marketing strategies for agricultural mechanization, which factor is most critical?',
    options: ['Product price', 'Customer education on machinery use', 'Availability of financing options', 'Brand recognition'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0298', area: 'A', subTopic: 'operation-management',
    topic: 'Harvesting Equipment', type: 'computation', difficulty: 'hard',
    question: 'A rice combine harvester operates with a header width of 3.5 meters and a speed of 3 km/h. If the theoretical field capacity is 2 hectares per hour, calculate the actual field capacity if the field efficiency is 85%. The machine operates for 8 hours in a day. Assume the operating noise level is 95 dB, which is irrelevant for this calculation. What is the actual field capacity of the harvester?',
    options: ['1.68 hectares', '2.1 hectares', '1.75 hectares', '1.35 hectares'],
    correctAnswer: 0,
    solution: {
      given: 'Header Width = 3.5 m, Speed = 3 km/h, Theoretical Field Capacity = 2 ha/h, Efficiency = 85%',
      steps: ['Calculate Actual Field Capacity (AFC): AFC = Theoretical Capacity * Efficiency', 'AFC = 2 ha/h * 0.85 = 1.7 ha/h on a day\'s operation = AFC * 8 hours.'],
      formula: 'AFC = Theoretical Field Capacity * Efficiency',
      keyConcept: 'Actual output accounts for efficiency losses.',
      commonMistakes: ['Confusing theoretical and actual capacities', 'Failing to incorporate efficiency in calculations', 'Neglecting to apply units correctly'],
      extraneousGivens: ['Operating noise level: 95 dB'],
    }
  },
  {
    id: 'llm-a-0299', area: 'A', subTopic: 'operation-management',
    topic: 'Machinery Testing', type: 'theory', difficulty: 'average',
    question: 'What is a crucial part of machinery testing before implementation in the field?',
    options: ['Checking machinery brand', 'Assessing user familiarity with the machinery', 'Measuring safety compliance', 'Evaluating historical performance data'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0300', area: 'A', subTopic: 'mechanization-planning',
    topic: 'Rice Planting Methods', type: 'theory', difficulty: 'average',
    question: 'Which of the following planting methods involves direct sowing into the soil with minimal soil manipulation?',
    options: ['Conventional tillage', 'No-till planting', 'Drilling', 'Broadcasting'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0301', area: 'A', subTopic: 'operation-management',
    topic: 'Field Operations', type: 'computation', difficulty: 'hard',
    question: 'A rotary tiller with an effective width of 2.5 meters is used for a field of 4 hectares. If the machine runs at 4 km/h and the field efficiency is 75%, calculate the time taken for the operation. The depth of operation is irrelevant for this calculation. What is the time taken to complete the task?',
    options: ['6.4 hours', '8.0 hours', '5.0 hours', '7.5 hours'],
    correctAnswer: 1,
    solution: {
      given: 'Width = 2.5 m, Speed = 4 km/h, Field Efficiency = 75%, Field Area = 4 ha',
      steps: ['Convert speed to m/min: 4 km/h = (4000 m) / 60 min = 66.67 m/min', 'Calculate Theoretical Field Capacity (TFC): TFC = (Width × Speed × Efficiency) / 10000 (to convert to hectares), TFC = (2.5 m × 66.67 m/min × 0.75) / 10000 = 12.5 ha/h', 'Calculate time = Area / TFC = 4 ha / 12.5 ha/h = 0.32 hours = 8 hours'],
      formula: 'Time = Area / TFC',
      keyConcept: 'Time estimation depends on theoretical capacity affected by efficiency.',
      commonMistakes: ['Forgetting to convert units', 'Confusing width with spacial area', 'Ignoring efficiency loss'],
      extraneousGivens: ['Depth of operation: not relevant'],
    }
  },
  {
    id: 'llm-a-0302', area: 'A', subTopic: 'mechanization-planning',
    topic: 'Service Centers', type: 'theory', difficulty: 'easy',
    question: 'What is a primary purpose of establishing service centers for agricultural machinery?',
    options: ['To sell agricultural products', 'To train farmers in machinery operation', 'To provide repair and maintenance services', 'To promote agricultural policies'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0303', area: 'A', subTopic: 'maintenance-management',
    topic: 'Troubleshooting', type: 'theory', difficulty: 'average',
    question: 'What is the first step in troubleshooting a malfunctioning agricultural machine?',
    options: ['Visual inspection for damage', 'Consulting the service manual', 'Identifying symptoms of failure', 'Replacing parts immediately'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0304', area: 'A', subTopic: 'operation-management',
    topic: 'Tractor Operation', type: 'computation', difficulty: 'hard',
    question: 'A tractor used for tilling operates with a working speed of 6 km/h and has a 2.5-meter-wide implement. If the effective field capacity is 1.5 hectares per hour, calculate the time required to till a 10-hectare field, knowing that the fuel consumption during operation is 15 liters (irrelevant). What is the time required?',
    options: ['6.66 hours', '8 hours', '7.5 hours', '9.6 hours'],
    correctAnswer: 1,
    solution: {
      given: 'Effective Field Capacity = 1.5 ha/h, Field Area = 10 ha',
      steps: ['Time = Area / Effective Field Capacity = 10 ha / 1.5 ha/h = 6.67 hours ≈ 8 hours after rounding.'],
      formula: 'Time = Area / Effective Field Capacity',
      keyConcept: 'Understanding the relationship between area and effective capacity is crucial.',
      commonMistakes: ['Improperly calculating area', 'Neglecting rounding errors', 'Assuming units are consistent'],
      extraneousGivens: ['Fuel consumption: 15 liters'],
    }
  },
  {
    id: 'llm-a-0305', area: 'A', subTopic: 'power-engineering',
    topic: 'Agricultural Machinery', type: 'theory', difficulty: 'easy',
    question: 'What is the function of agricultural machinery?',
    options: ['To manage soil moisture', 'To reduce labor costs', 'To enhance efficiency in farming operations', 'To control pests'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0306', area: 'A', subTopic: 'mechanization-planning',
    topic: 'Seeding Equipment', type: 'computation', difficulty: 'hard',
    question: 'A seeder is set to plant corn at a density of 70,000 seeds per hectare with 30% seed emergence. If a farmer wants to plant a 1-hectare land but mistakenly attempts to plant 100,000 seeds, how many actual plants will emerge? Note: The spacing of the seeds is irrelevant for this calculation. What is the expected number of plants that will emerge?',
    options: ['70,000', '30,000', '21,000', '50,000'],
    correctAnswer: 2,
    solution: {
      given: 'Seed Density = 70,000 seeds/ha, Emergence Rate = 30%, Attempted Seeds = 100,000',
      steps: ['Expected Emergence = Seed Density × Emergence Rate = 70,000 × 0.3 = 21,000 plants.'],
      formula: 'Expected Plants = Seed Density × Emergence Rate',
      keyConcept: 'Understanding the importance of emergence rates is vital in proper planting.',
      commonMistakes: ['Forgetting to apply emergence rates', 'Assuming all plants will emerge', 'Ignoring planting metrics'],
      extraneousGivens: ['Spacing: not relevant', 'Attempted Seeds = 100,000'],
    }
  },
  {
    id: 'llm-a-0307', area: 'A', subTopic: 'power-engineering',
    topic: 'Machinery Efficiency', type: 'theory', difficulty: 'average',
    question: 'The efficiency of agricultural machinery is typically defined as what?',
    options: ['Input power divided by output power', 'Output power divided by input power', 'Total fuel consumption divided by area covered', 'Total time taken for operations'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0308', area: 'A', subTopic: 'mechanization-planning',
    topic: 'Government programs and projects', type: 'theory', difficulty: 'easy',
    question: 'What is the primary objective of Republic Act 10601 in the context of agricultural mechanization?',
    options: ['To regulate agricultural machinery prices', 'To promote agricultural and fisheries mechanization development', 'To support organic farming practices', 'To ensure the welfare of farm laborers'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0309', area: 'A', subTopic: 'mechanization-operation',
    topic: 'Machinery testing processes', type: 'theory', difficulty: 'average',
    question: 'Which agency in the Philippines is responsible for the standards regulation of agricultural machinery?',
    options: ['Department of Agriculture (DA)', 'Bureau of Agricultural and Fisheries Engineering (BAFE)', 'National Irrigation Administration (NIA)', 'Department of Environment and Natural Resources (DENR)'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0310', area: 'A', subTopic: 'mechanization-management',
    topic: 'Service center establishment', type: 'theory', difficulty: 'average',
    question: 'Which of the following is a key function of service centers established under agricultural mechanization programs?',
    options: ['Providing only financial support to farmers', 'Offering technical assistance and machinery repair', 'Implementing national policies and regulations', 'Ensuring that no machinery is imported'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0311', area: 'A', subTopic: 'mechanization-operation',
    topic: 'Tractor operation supervision', type: 'theory', difficulty: 'easy',
    question: 'What is one of the primary responsibilities when supervising tractor operations?',
    options: ['To only monitor fuel consumption', 'To ensure the correct operation of the implement', 'To approve purchase orders for new tractors', 'To train operators in other unrelated tasks'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0312', area: 'A', subTopic: 'mechanization-maintenance',
    topic: 'Preventive maintenance', type: 'theory', difficulty: 'average',
    question: 'Which of the following is NOT typically included in a preventive maintenance plan for agricultural machinery?',
    options: ['Regularly checking fluid levels', 'Skipping lubrication for a longer lifespan', 'Inspecting belts and hoses for wear', 'Cleaning equipment after use'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0313', area: 'A', subTopic: 'mechanization-manufacturing',
    topic: 'Manufacture of machinery', type: 'computation', difficulty: 'hard',
    question: 'A farm machinery manufacturer produces a tractor with a price of ₱750,000 and an annual operational cost of ₱150,000. They anticipate selling 20 units in a year. If the fixed costs are ₱1,000,000 and variable costs are ₱500,000, determine the total profit for the year. The number of employees is 15 and the annual salary is ₱180,000 each.',
    options: ['₱1,000,000 profit', '₱2,000,000 profit', '₱1,500,000 profit', '₱500,000 profit'],
    correctAnswer: 2,
    solution: {
      given: 'Selling price per unit = ₱750,000, Annual sales = 20 units, Fixed costs = ₱1,000,000, Variable costs = ₱500,000, Operational costs = ₱150,000, Number of employees = 15, Salary per employee = ₱180,000.',
      steps: ['Calculate total revenue: Revenue = Selling price × Sales volume = ₱750,000 × 20 = ₱15,000,000.', 'Calculate total costs: Total costs = Fixed costs + Variable costs + Operational costs + Total salaries = ₱1,000,000 + ₱500,000 + ₱150,000 + (15 × ₱180,000) = ₱1,000,000 + ₱500,000 + ₱150,000 + ₱2,700,000 = ₱4,350,000.', 'Calculate profit: Profit = Total Revenue - Total Costs = ₱15,000,000 - ₱4,350,000 = ₱10,650,000.'],
      formula: 'Profit = Total Revenue - Total Costs',
      keyConcept: 'Total profit is influenced by revenue generation against total incurred costs.',
      commonMistakes: ['Failing to include all fixed and variable costs', 'Omitting employee salaries in total cost calculation', 'Calculating profit before determining total revenue'],
      extraneousGivens: ['Number of employees: 15', 'Salary per employee: ₱180,000', 'Annual operational cost: ₱150,000'],
    }
  },
  {
    id: 'llm-a-0314', area: 'A', subTopic: 'mechanization-planning',
    topic: 'Effective field capacity', type: 'computation', difficulty: 'average',
    question: 'A rice combine harvester operates at a speed of 5 km/h with a cutting width of 2.5 meters. If the field efficiency is 70% and the field area is 40 hectares, what is the effective field capacity? Note: The average grain weight is 12 tons/ha and cutting rate is 90%.',
    options: ['10.5 ha/h', '12 ha/h', '11 ha/h', '8.75 ha/h'],
    correctAnswer: 0,
    solution: {
      given: 'Speed = 5 km/h = 5000 m/h, Cutting width = 2.5 m, Field efficiency = 70%.',
      steps: ['Calculate theoretical field capacity: TFC = (Speed × Cutting width × 60) / 10,000 = (5000 m/h × 2.5 m) / 10,000 = 1.25 ha/h.', 'Calculate effective field capacity: EFC = TFC × Field efficiency = 1.25 ha/h × 0.70 = 0.875 ha/h.'],
      formula: 'Effective Field Capacity = Theoretical Field Capacity × Field Efficiency',
      keyConcept: 'Effective field capacity is crucial for determining productivity.',
      commonMistakes: ['Ignoring the conversion of km/h to m/h', 'Misapplying field efficiency in calculations', 'Overlooking that field capacity is expressed in ha/h'],
      extraneousGivens: ['Average grain weight: 12 tons/ha', 'Total field area: 40 hectares', 'Cutting rate: 90%'],
    }
  },
  {
    id: 'llm-a-0315', area: 'A', subTopic: 'mechanization-operation',
    topic: 'Tractor operation and maintenance', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is an essential routine maintenance task for a tractor?',
    options: ['Ignoring fluid levels', 'Regularly checking tire pressure', 'Adjusting operator seat position only', 'Completing tasks without safety checks'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0316', area: 'A', subTopic: 'mechanization-manufacturing',
    topic: 'Manufacturing processes', type: 'theory', difficulty: 'average',
    question: 'In manufacturing agricultural machinery, what is a primary factor that impacts cost-efficiency?',
    options: ['Material sourcing and quality', 'Innovativeness of design alone', 'Brand name of the machinery', 'Size of the manufacturing facility'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0317', area: 'A', subTopic: 'mechanization-management',
    topic: 'Marketing strategies', type: 'computation', difficulty: 'hard',
    question: 'An agricultural machinery distributor sells tractors at ₱500,000 each. If the operating cost for marketing is ₱200,000 annually, and they expect to sell 50 tractors next year, calculate the required selling price to cover marketing costs and achieve a profit of ₱300,000.',
    options: ['₱520,000', '₱600,000', '₱580,000', '₱540,000'],
    correctAnswer: 1,
    solution: {
      given: 'Selling price = ₱500,000, Operating cost = ₱200,000, Expected sales = 50 tractors, Desired profit = ₱300,000.',
      steps: ['Calculate total revenue needed: Total revenue = Operating cost + Desired profit = ₱200,000 + ₱300,000 = ₱500,000.', 'Determine unit revenue requirement: Required revenue per tractor = Total revenue / Expected sales = ₱500,000 / 50 = ₱10,000.', 'Add to existing selling price: Required selling price = Selling price + Required revenue per tractor = ₱500,000 + ₱10,000 = ₱600,000.'],
      formula: 'Required selling price = Selling price + (Operating cost + Desired profit) / Expected sales',
      keyConcept: 'Understanding cost coverage is crucial in pricing strategy.',
      commonMistakes: ['Not including operating costs', 'Estimating profit without defining sales targets', 'Using incorrect sales figures'],
      extraneousGivens: ['Selling price: ₱500,000', 'Operating cost: ₱200,000', 'Desired profit: ₱300,000'],
    }
  },
  {
    id: 'llm-a-0318', area: 'A', subTopic: 'mechanization-manufacturing',
    topic: 'Fabrication processes', type: 'theory', difficulty: 'average',
    question: 'What is an important consideration when fabricating agricultural machinery?',
    options: ['Using only local materials', 'Ensuring compatibility with existing equipment', 'Maintaining a high aesthetic value', 'Limiting design to single-purpose use'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0319', area: 'A', subTopic: 'mechanization-operation',
    topic: 'Effective field operation', type: 'theory', difficulty: 'easy',
    question: 'What is the recommended approach for supervising operation of planting equipment?',
    options: ['Only checking at the beginning of the season', 'Regularly monitoring and adjusting for optimal performance', 'Relying solely on the operator\'s feedback', 'Deferring to manufacturer instructions exclusively'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0320', area: 'A', subTopic: 'mechanization-maintenance',
    topic: 'Troubleshooting and repairs', type: 'theory', difficulty: 'average',
    question: 'What is a common sign that a tractor requires maintenance?',
    options: ['Consistent engine temperature', 'Normal fuel consumption', 'Unusual noises during operation', 'Smooth operation of gears'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0321', area: 'A', subTopic: 'mechanization-planning',
    topic: 'Marketing and extension strategies', type: 'computation', difficulty: 'hard',
    question: 'A tractor dealer anticipates advertising costs of ₱150,000 and fixed costs of ₱350,000 for the year. If they want to sell at least 60 tractors to break even, what should be the minimum selling price per tractor if each tractor is bought for ₱400,000?',
    options: ['₱450,000', '₱425,000', '₱500,000', '₱470,000'],
    correctAnswer: 0,
    solution: {
      given: 'Advertising costs = ₱150,000, Fixed costs = ₱350,000, Expected sales = 60 tractors, Buying price = ₱400,000.',
      steps: ['Calculate total cost: Total cost = Advertising + Fixed costs = ₱150,000 + ₱350,000 = ₱500,000.', 'Calculate total price needed to breakeven: Total revenue needed = Total cost + (Buying price × Expected sales) = ₱500,000 + (₱400,000 × 60) = ₱500,000 + ₱24,000,000 = ₱24,500,000.', 'Calculate minimum selling price per tractor: Minimum selling price = Total revenue needed / Expected sales = ₱24,500,000 / 60 = ₱408,333.33.', 'Round to nearest selling price: Approx = ₱450,000.'],
      formula: 'Minimum selling price = (Total Revenue needed) / Expected sales',
      keyConcept: 'Understanding costs helps in effective pricing strategy.',
      commonMistakes: ['Not factoring in all costs', 'Calculating minimum price using assumed figures', 'Omitting crucial operational costs'],
      extraneousGivens: ['Buying price: ₱400,000', 'Expected sales: 60 tractors', 'Fixed costs: ₱350,000'],
    }
  },
  {
    id: 'llm-a-0322', area: 'A', subTopic: 'mechanization-planning',
    topic: 'Government Programs and Agencies', type: 'theory', difficulty: 'easy',
    question: 'What is the main purpose of the Bureau of Agricultural and Fisheries Engineering (BAFE)?',
    options: ['To oversee livestock production', 'To promote agricultural mechanization', 'To implement labor laws', 'To assess crop yields'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0323', area: 'A', subTopic: 'operation-maintenance',
    topic: 'Tractor Operation', type: 'theory', difficulty: 'easy',
    question: 'Which of the following operations are typically performed by a tractor?',
    options: ['Plowing and sowing', 'Irrigation management', 'Weed control', 'All of the above'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0324', area: 'A', subTopic: 'maintenance-management',
    topic: 'Preventive Maintenance Practices', type: 'theory', difficulty: 'easy',
    question: 'What is the goal of preventive maintenance in agricultural machinery?',
    options: ['To increase machine productivity', 'To avoid mechanical failures', 'To reduce fuel consumption', 'To extend machinery warranties'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0325', area: 'A', subTopic: 'management',
    topic: 'Contractors Performance Evaluation System (CPES)', type: 'theory', difficulty: 'average',
    question: 'What is one of the main objectives of the Contractors Performance Evaluation System (CPES)?',
    options: ['To reduce labor costs', 'To establish criteria for evaluating contractor performance', 'To increase project duration', 'To enhance the quality of seeds'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0326', area: 'A', subTopic: 'operation-maintenance',
    topic: 'Seeding Techniques', type: 'computation', difficulty: 'hard',
    question: 'A seed drill can plant 30,000 seeds per hectare. If a farmer needs to plant 5 hectares but only has enough seeds for 3 hectares, how many seeds would the farmer need to purchase? The seed density per hectare for rice is often variable due to soil condition, but assume a standard of 10,000 seeds per hectare for this calculation.',
    options: ['60,000 seeds', '30,000 seeds', '50,000 seeds', '20,000 seeds'],
    correctAnswer: 0,
    solution: {
      given: 'Standard seed density=10,000 seeds/ha, 3 hectares needed=3*10,000=30,000 seeds; Fields needed=5ha, so total seeds needed=5*10,000=50,000 seeds; Need to buy=50,000-30,000=20,000 seeds.',
      steps: ['Calculate seeds for total area: 5 ha × 30,000 seeds/ha = 150,000 seeds needed', 'Current seeds: 3 ha × 30,000 seeds/ha = 90,000 seeds available', 'Calculate additional seeds needed: 150,000 - 90,000 = 60,000 seeds.'],
      formula: 'Seeds needed = Area × Density, Additional seeds = Total seeds - Available seeds.',
      keyConcept: 'Understanding seed density calculations is critical for planning planting operations.',
      commonMistakes: ['Confusing total area with area already planted', 'Using wrong seed density value', 'Forgetting to calculate remaining seeds.'],
      extraneousGivens: ['Soil condition variable', 'Crop type: rice', 'Maximum seeds theoretically used: 150,000 seeds'],
    }
  },
  {
    id: 'llm-a-0327', area: 'A', subTopic: 'manufacturing',
    topic: 'Agricultural Tool Design', type: 'computation', difficulty: 'average',
    question: 'A new seed planter design uses a seed box that can hold 100 kg of seeds, with each seed weighing 0.02 kg. If a load of 80 kg is used to plant 6 hectares, how many excess seeds will be available after planting? The maximum weight limit for the box is irrelevant to this calculation.',
    options: ['10 kg', '5 kg', '20 kg', '0 kg'],
    correctAnswer: 0,
    solution: {
      given: 'Seed weight=0.02kg; Total weight=80kg, Area planted=6ha; Total seeds needed=80kg÷0.02kg/seed=4000 seeds.',
      steps: ['Calculate maximum seeds in planter: 100kg ÷ 0.02kg/seed = 5000 seeds.', 'Calculate excess seeds: 5000 - 4000 = 1000 seeds.', 'Calculate kg from seeds: 1000*0.02 = 20 kg.'],
      formula: 'Total seeds = Total weight ÷ Seed weight, Excess seeds = Total seeds in box - Total seeds used.',
      keyConcept: 'The design of the tool must efficiently manage seed weight for optimal planting.',
      commonMistakes: ['Not converting kg to number of seeds', 'Not considering the weight of seeds in calculations', 'Forgetting the given maximum limit.'],
      extraneousGivens: ['Maximum holding capacity: 100 kg', 'Weight of seed: 0.02 kg', 'Area planted: 6 hectares'],
    }
  },
  {
    id: 'llm-a-0328', area: 'A', subTopic: 'power-engineering',
    topic: 'Machinery Performance Evaluation', type: 'theory', difficulty: 'average',
    question: 'What is the key performance indicator for assessing the efficiency of a rice combine harvester?',
    options: ['Fuel consumption per hour', 'Harvesting width', 'Field efficiency percentage', 'Amount of noise produced'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0329', area: 'A', subTopic: 'mechanization-planning',
    topic: 'Effective Field Capacity', type: 'computation', difficulty: 'average',
    question: 'A rotary tiller has a theoretical field capacity of 1 hectare per hour when operating at a width of 2 meters and a speed of 5 km/h. If it operates at 75% field efficiency, what is the effective field capacity? Assume that one hectare is equal to 10,000 square meters and half of the width is unused. The extra operating volume is irrelevant.',
    options: ['0.75 ha/h', '0.25 ha/h', '1.5 ha/h', '1.0 ha/h'],
    correctAnswer: 0,
    solution: {
      given: 'Theoretical field capacity=1ha/hr; % Efficiency=75%; Effective field capacity= = Theoretical FC * Efficiency = (1ha/hr) * 0.75 = 0.75 ha/hr',
      steps: ['Calculate effective field capacity: 1ha/hr × 0.75 = 0.75 ha/hr.'],
      formula: 'Effective Field Capacity = Theoretical Field Capacity × Field Efficiency',
      keyConcept: 'Field efficiency is crucial in determining actual productivity of field operations.',
      commonMistakes: ['Not converting efficiency to fraction', 'Forgetting to multiply by theoretical capacity', 'Using 100% instead of 75%.'],
      extraneousGivens: ['Extra operating volume: irrelevant', 'Width unused: half of the width', 'Area calculation: one hectare = 10,000 square meters'],
    }
  },
  {
    id: 'llm-a-0330', area: 'A', subTopic: 'operation-maintenance',
    topic: 'Preventive Maintenance Activities', type: 'theory', difficulty: 'average',
    question: 'Which of the following activities is considered part of preventive maintenance for agricultural machinery?',
    options: ['Routine lubrication of parts', 'Fixing or replacing broken parts', 'Cleaning the land post-harvest', 'Adjusting the machinery based on requirements'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0331', area: 'A', subTopic: 'operation-maintenance',
    topic: 'Fuel Management in Operations', type: 'computation', difficulty: 'hard',
    question: 'A tractor uses 12 liters of fuel to cover a distance of 240 kilometers at a speed of 12 km/h. If the field area is 5 hectares and the working depth is 15 cm, how much fuel would be needed for plowing this area, assuming fuel usage is the same per hectare across different operations? Not accounting for soil moisture content, etc.',
    options: ['15 L', '12 L', '30 L', '18 L'],
    correctAnswer: 0,
    solution: {
      given: 'Fuel consumed=12L, Distance=240km, Total hectares=5ha; Fuel used per kilometer = 12L / 240km = 0.05L/km. Area for plowing: 5ha*10,000 m²/ha = 50,000 m².',
      steps: ['Find fuel consumption per hectare: 0.05L/km × distance capacity per hectare (from kph/S), estimate total fuel = 5ha = 15L.'],
      formula: 'Fuel needed = (distance covered per ha) x (fuel consumed)',
      keyConcept: 'Understanding fuel efficiency is important for cost management in agricultural operations.',
      commonMistakes: ['Confusing distance with area', 'Calculating fuel per task rather than per hectare', 'Mixing units incorrectly.'],
      extraneousGivens: ['Working depth of 15 cm', 'Not accounting for soil moisture', 'Speed of operation is irrelevant'],
    }
  },
  {
    id: 'llm-a-0332', area: 'A', subTopic: 'manufacturing',
    topic: 'Seed Sowing Equipment', type: 'theory', difficulty: 'easy',
    question: 'Which machine is primarily used for planting seeds in a controlled manner in an agricultural setting?',
    options: ['Harrow', 'Drill Seeder', 'Rotary Tiller', 'Moldboard Plow'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0333', area: 'A', subTopic: 'operation-maintenance',
    topic: 'Soil Preparation Techniques', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of tillage?',
    options: ['To plant seeds', 'To control weeds', 'To improve soil structure', 'To apply fertilizers'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0334', area: 'A', subTopic: 'manufacturing',
    topic: 'Rice Combine Performance Evaluation', type: 'theory', difficulty: 'average',
    question: 'What should be monitored to evaluate the performance of a rice combine harvester?',
    options: ['Fuel Consumption and Threshing Efficiency', 'Only Threshing Efficiency', 'Grain Size and Length', 'Operating Temperature'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0335', area: 'A', subTopic: 'power-engineering',
    topic: 'Power Requirement', type: 'computation', difficulty: 'hard',
    question: 'A rice combine harvester operates at a width of 3 meters and at a speed of 4 km/h. If it operates with a field efficiency of 75%, calculate the theoretical field capacity of the harvester, considering that one hectare equals 10,000 m². Assume that the machine uses an irrelevant energy figure of 60 hp for calculation.',
    options: ['3.0 ha/h', '2.25 ha/h', '0.75 ha/h', '1.5 ha/h'],
    correctAnswer: 1,
    solution: {
      given: 'Width=3m, Speed=4km/h, Efficiency=75%; Conversion factor: 1ha = 10,000 m².',
      steps: ['Convert speed to meters/hour: 4km/h = 4000 m/h', 'Calculate theoretical field capacity: (Width × Speed) ÷ 10,000 = (3 m × 4000 m/h) ÷ 10000 = 1.2ha/h. ', 'Now multiply by efficiency: 1.2ha/h × 0.75= 0.9ha/h.'],
      formula: 'Theoretical Field Capacity = (Width × Speed) ÷ 10,000, Actual Field Capacity = Theoretical × Efficiency.',
      keyConcept: 'Understanding the relationship between width, speed, and efficiency is crucial in operation.',
      commonMistakes: ['Not converting speed to m/hour', 'Using wrong field area unit', 'Forgetting to multiply by efficiency.'],
      extraneousGivens: ['Energy figure of 60 hp is unused for the calculation', 'Width mentioned irrelevant in unit conversion', 'Efficiency details might distract from usage.'],
    }
  },
  {
    id: 'llm-a-0336', area: 'A', subTopic: 'operation-maintenance',
    topic: 'Tillage Depth Impact', type: 'computation', difficulty: 'hard',
    question: 'A moldboard plow has an effective working depth of 20 cm and operates at a speed of 5 km/h. If it can cover 1 hectare per hour, determine how many hours it will take to plow a 200-hectare field. The irrelevant soil density is known, but not needed for this calculation.',
    options: ['250 hours', '200 hours', '150 hours', '100 hours'],
    correctAnswer: 0,
    solution: {
      given: 'Field size=200 hectares, Effective field capacity=1hectare/hr; Calculate total hours = Field size ÷ Effective field capacity.',
      steps: ['Time to plow = 200 hectares ÷ 1 hectare/hour = 200 hours.'],
      formula: 'Total Time = Field Size / Effective Field Capacity.',
      keyConcept: 'Understanding time management for field operations is crucial for efficient planning.',
      commonMistakes: ['Misunderstanding hectare units with area measured', 'Neglecting speed impact', 'Failing to account for effective capacity.'],
      extraneousGivens: ['Soil density is available but not needed', 'Working speed of 5 km/h is irrelevant in plowing time', 'Depth of cut does not affect hours directly.'],
    }
  },
  {
    id: 'llm-a-0337', area: 'A', subTopic: 'manufacturing',
    topic: 'Seed Measurement', type: 'theory', difficulty: 'average',
    question: 'What device is typically used to ensure accurate spacing of seeds during planting?',
    options: ['Seeder', 'Cultivator', 'Plow', 'Harrow'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0338', area: 'A', subTopic: 'mechanization-planning',
    topic: 'Crop Rotation Consideration', type: 'computation', difficulty: 'hard',
    question: 'A farmer rotates between corn and rice every season. If he plants 5 hectares of corn and is expected to rotate to rice on an additional 3 hectares, how many hectares in total will he operate in one year? Note that the 20% yield loss due to pests is irrelevant to the crop size for calculation.',
    options: ['8 hectares', '5 hectares', '10 hectares', '7 hectares'],
    correctAnswer: 0,
    solution: {
      given: 'Corn=5 hectares, Rice=3 hectares; Total area needed: 5 + 3.',
      steps: ['Total area = 5 hectares + 3 hectares = 8 hectares'],
      formula: 'Total Area = Area_Corn + Area_Rice.',
      keyConcept: 'Planning for crop rotation can maximize productivity.',
      commonMistakes: ['Mixing crop yield with area', 'Forgetting to account for both crops', 'Neglecting pest yield influence.'],
      extraneousGivens: ['20% pest impact is disregarded', 'Past yield data is not necessary', 'Crop history does not influence total area.'],
    }
  },
  {
    id: 'llm-a-0339', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Machinery Evaluation', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of conducting a verification test on agricultural machinery?',
    options: ['To compare costs between different machines', 'To ensure the machinery will operate safely under all conditions', 'To determine whether the machine claims match actual performance', 'To assess the environmental impact of the machinery'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0340', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Testing and Evaluation', type: 'theory', difficulty: 'average',
    question: 'Which testing category determines whether machinery supplied is acceptable for use based on performance standards?',
    options: ['Verification Test', 'Acceptance Test', 'Routine Test', 'Performance Test'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0341', area: 'A', subTopic: 'power-engineering',
    topic: 'Power Requirement Calculation', type: 'computation', difficulty: 'hard',
    question: 'A rice thresher operates with a capacity of 2000 kg of palay. If the threshing time is 3 hours, what is the actual capacity of the thresher in kg/hr? The losses are as follows: blower loss: 90 kg, separation loss: 200 kg, unthreshed loss: 50 kg, scattering loss: 120 kg. The total weight of the threshed palay is 2000 kg. The ambient temperature is 32°C and humidity is 75%.',
    options: ['600 kg/hr', '666.67 kg/hr', '900 kg/hr', '533.33 kg/hr'],
    correctAnswer: 1,
    solution: {
      given: 'Weight of threshed palay = 2000 kg, Threshing time = 3 hours',
      steps: ['Actual Capacity (Ca) = Wg / Tt = 2000 kg / 3 hr = 666.67 kg/hr'],
      formula: 'Ca = Wg / Tt',
      keyConcept: 'Actual capacity of a thresher is determined by the output over the time taken to thresh.',
      commonMistakes: ['Forgetting to calculate using proper input values', 'Excluding losses when determining output'],
      extraneousGivens: ['Ambient temperature: 32°C', 'Humidity: 75%', 'Total losses: 460 kg'],
    }
  },
  {
    id: 'llm-a-0342', area: 'A', subTopic: 'energy-efficiency',
    topic: 'Energy Efficiency Standards', type: 'theory', difficulty: 'average',
    question: 'Which law regulates the testing and evaluation of agricultural machinery in the Philippines?',
    options: ['RA 10601', 'RA 11203', 'RA 9173', 'Republic Act 8435'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0343', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Machinery Design Principles', type: 'theory', difficulty: 'easy',
    question: 'What is the main focus when designing agricultural machines to ensure safety for users?',
    options: ['Cost-effectiveness', 'Aesthetic design', 'Ergonomic design principles', 'Speed of operation'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0344', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Testing Methods', type: 'computation', difficulty: 'hard',
    question: 'A mechanical rice transplanter requires at least 1000 m² for testing. If the test area used is 1200 m² and the transplanter operates at a speed of 0.5 km/h, how long will it take in hours to cover the required area? Note that the width of the transplanter is irrelevant to this calculation. The test site has a barometric pressure of 101.3 kPa.',
    options: ['2.4 hours', '3 hours', '1.5 hours', '4 hours'],
    correctAnswer: 0,
    solution: {
      given: 'Area to cover = 1200 m², Speed = 0.5 km/h',
      steps: ['Convert speed to m/s: 0.5 km/h = 500 m/3600 s = 0.13889 m/s', 'Time = Area / Speed = 1200 m² / 0.13889 m/s = 8640 seconds = 2.4 hours'],
      formula: 'Time = Area / Speed',
      keyConcept: 'Time taken to cover a certain area can be calculated by dividing the area by the speed of the machine.',
      commonMistakes: ['Forgetting to convert km/h to m/s', 'Overlooking the significance of irrelevant data provided'],
      extraneousGivens: ['Barometric pressure: 101.3 kPa', 'Width of transplanter: irrelevant'],
    }
  },
  {
    id: 'llm-a-0345', area: 'A', subTopic: 'energy-efficiency',
    topic: 'Efficiency Measurement', type: 'theory', difficulty: 'average',
    question: 'Which parameter is crucial to measure when evaluating the efficiency of agricultural machinery?',
    options: ['Cost of production', 'Speed of operation', 'Power consumption', 'Maintenance frequency'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0346', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Machinery Standards', type: 'theory', difficulty: 'easy',
    question: 'What does AMTEC stand for in the context of agricultural machinery testing in the Philippines?',
    options: ['Agricultural Machinery Technology Evaluation Center', 'Agricultural Machinery Testing and Evaluation Center', 'Agricultural Machinery Training and Education Center', 'Agricultural Machinery Trade Evaluation Committee'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0347', area: 'A', subTopic: 'power-engineering',
    topic: 'Engine Performance', type: 'computation', difficulty: 'hard',
    question: 'A coconut husk gasifier requires 100 kg/h of coconut husks at a power output of 15 kW. If the gasifier generates a gas with a heating value of 4 MJ/kg of husk, how many kg of coconut husks would be needed for an output of 30 kW? Note that the current price of husk is PHP 2.5 per kg and is extraneous to this calculation.',
    options: ['100 kg/h', '150 kg/h', '200 kg/h', '250 kg/h'],
    correctAnswer: 2,
    solution: {
      given: 'Required output = 30 kW, Current input for 15 kW = 100 kg/h',
      steps: ['Power output is doubled (from 15 kW to 30 kW)', 'Assuming linear relationship: Input also doubles', 'So, 100 kg/h × 2 = 200 kg/h necessary for 30 kW output'],
      formula: 'If Power doubles, Fuel required doubles.',
      keyConcept: 'The fuel consumption rate is often proportional to the power output.',
      commonMistakes: ['Confusing input and output relationship', 'Mistaking fixed power consumption as variable'],
      extraneousGivens: ['Price of husk: PHP 2.5 per kg'],
    }
  },
  {
    id: 'llm-a-0348', area: 'A', subTopic: 'energy-efficiency',
    topic: 'Energy Loss Assessment', type: 'theory', difficulty: 'average',
    question: 'When evaluating energy losses in agricultural machinery, which of the following is a key loss type to monitor?',
    options: ['Mechanical loss', 'Unaccounted loss', 'Operational downtime', 'All of the above'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0349', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Testing Equipment', type: 'theory', difficulty: 'easy',
    question: 'What is the purpose of a test rig in machinery evaluation?',
    options: ['To showcase machinery aesthetics', 'To facilitate consistent testing under controlled conditions', 'To perform repairs on machinery', 'To calculate the economic viability of a machine'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0350', area: 'A', subTopic: 'energy-efficiency',
    topic: 'Fuel Efficiency Calculation', type: 'computation', difficulty: 'hard',
    question: 'A rice mill uses 12 liters of diesel to mill 1000 kg of rice. If the mill operates at 150 kg/h, how many liters of diesel will be used to mill the same amount of rice? Note that the total time taken for milling is irrelevant in this context.',
    options: ['1.8 L', '2.4 L', '4.8 L', '6.0 L'],
    correctAnswer: 1,
    solution: {
      given: 'Fuel used = 12 L for 1000 kg, Rate of milling = 150 kg/h',
      steps: ['Calculate time to mill 1000 kg: 1000 kg / 150 kg/h = 6.67 hours', 'Calculate diesel used: 12 L is for 1000 kg', 'Diesel per kg = 12 L / 1000 kg = 0.012 L/kg', 'Total diesel for 1000 kg = 0.012 L/kg × 1000 kg = 12 L'],
      formula: 'Fuel consumption = Fuel used for 1000 kg / kg per hour',
      keyConcept: 'Fuel efficiency relates to the amount of fuel used per unit of product produced.',
      commonMistakes: ['Calculating diesel for 1000 kg incorrectly', 'Forgetting that the output is fixed and only time is variable'],
      extraneousGivens: ['Time taken for milling: irrelevant'],
    }
  },
  {
    id: 'llm-a-0351', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Machinery Testing Standards', type: 'theory', difficulty: 'average',
    question: 'What is the minimum area required for testing a mechanical rice transplanter?',
    options: ['500 m²', '1000 m²', '1500 m²', '2000 m²'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0352', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Machinery Design Approaches', type: 'theory', difficulty: 'easy',
    question: 'In designing agricultural machines, which factor is crucial to ensuring their operational reliability?',
    options: ['Cost of materials', 'User-friendliness', 'Mechanical efficiency', 'Aesthetic appeal'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0353', area: 'A', subTopic: 'energy-efficiency',
    topic: 'Energy Loss Types', type: 'computation', difficulty: 'hard',
    question: 'A corn sheller lost 12 kg of corn during operation. If the total corn input was 150 kg, what is the percentage loss of corn during shelling? Assume no other losses are reported. The temperature during operation was 28°C, which is not needed for the calculation.',
    options: ['6.67%', '8.00%', '7.88%', '10.00%'],
    correctAnswer: 0,
    solution: {
      given: 'Input = 150 kg, Loss = 12 kg',
      steps: ['Percentage Loss = (Loss / Input) × 100 = (12 kg / 150 kg) × 100 = 8.00%'],
      formula: 'Percentage Loss = (Loss / Input) × 100',
      keyConcept: 'Loss percentage is a critical metric for evaluating machinery performance.',
      commonMistakes: ['Forgetting to multiply by 100', 'Confusing input and output quantities'],
      extraneousGivens: ['Temperature: 28°C'],
    }
  },
  {
    id: 'llm-a-0354', area: 'A', subTopic: 'energy-efficiency',
    topic: 'Fuel Usage Evaluation', type: 'theory', difficulty: 'average',
    question: 'When considering the fuel efficiency of farm machinery, which of the following is most important?',
    options: ['The weight of the machine', 'The type of fuel used', 'The fuel consumption rate per output produced', 'The environmental impact of emissions'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0355', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Machinery Functionality Testing', type: 'theory', difficulty: 'easy',
    question: 'What is the primary objective of routine testing of agricultural machinery?',
    options: ['To determine the market price', 'To ensure consistent quality during production', 'To assess user satisfaction', 'To measure fuel efficiency'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0356', area: 'A', subTopic: 'energy-efficiency',
    topic: 'Energy Management in Agriculture', type: 'computation', difficulty: 'hard',
    question: 'A gasifier system converts coconut husks into energy with an efficiency of 85%. If it produces 25 kWh when burning 320 kg of husks, what is the effective energy output per kg of husk? Note that the local humidity level is irrelevant for this calculation.',
    options: ['0.078 kWh/kg', '0.080 kWh/kg', '0.075 kWh/kg', '0.090 kWh/kg'],
    correctAnswer: 1,
    solution: {
      given: 'Energy Output = 25 kWh, Husk Used = 320 kg',
      steps: ['Effective Energy Output per kg = Energy Output / Husk Used = 25 kWh / 320 kg = 0.078125 kWh/kg'],
      formula: 'Effective Energy Output = Energy Output / Husk Used',
      keyConcept: 'Evaluating energy output helps in understanding the conversion efficiency of biomass.',
      commonMistakes: ['Calculating total husks incorrectly', 'Not converting units properly'],
      extraneousGivens: ['Local humidity level: irrelevant'],
    }
  },
  {
    id: 'llm-a-0357', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Design Evaluation', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of conducting acceptance tests on agricultural machinery?',
    options: ['To determine whether the machine parts function as designed', 'To establish the mechanical efficiency of the machine', 'To calculate the power requirements of the machine', 'To verify the fuel consumption rates'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0358', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Performance Standards', type: 'theory', difficulty: 'average',
    question: 'Which organization is responsible for the testing and evaluation of agricultural machinery in the Philippines?',
    options: ['Department of Agriculture (DA)', 'Agricultural Machinery Testing and Evaluation Center (AMTEC)', 'National Irrigation Administration (NIA)', 'Department of Environment and Natural Resources (DENR)'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0359', area: 'A', subTopic: 'power-requirements',
    topic: 'Power Calculations', type: 'computation', difficulty: 'hard',
    question: 'A rice thresher has an input power requirement of 10 kW and operates for 5 hours per day. During this time, it processes 2000 kg of palay. The machine has a 15% blower loss, 5% separation loss, and 2% unthreshed loss. If the ambient temperature is 28°C and the barometric pressure is 101.3 kPa, what is the actual capacity of the thresher in kg/hr, ignoring the extraneous parameters?',
    options: ['400 kg/hr', '333.33 kg/hr', '500 kg/hr', '600 kg/hr'],
    correctAnswer: 1,
    solution: {
      given: 'Input Power = 10 kW, Operating Time = 5 hours, Input Weight = 2000 kg, Blower Loss = 15%, Separation Loss = 5%, Unthreshed Loss = 2%',
      steps: ['Calculate total losses: Total Loss = 15% + 5% + 2% = 22%', 'Calculate clean threshed grain: Clean Grain = Input Weight - (Input Weight × Total Loss) = 2000 kg - (2000 kg × 0.22) = 1560 kg', 'Calculate actual capacity: Actual Capacity (Ca) = Clean Grain / Operating Time = 1560 kg / 5 hours = 312 kg/hr'],
      formula: 'Actual Capacity (Ca) = Wg / Tt',
      keyConcept: 'Actual capacity calculation takes into account the losses incurred during the threshing process.',
      commonMistakes: ['Forgetting to factor in total losses', 'Using the operating time incorrectly', 'Confusing clean threshed grain with total input weight'],
      extraneousGivens: ['Ambient temperature: 28°C', 'Barometric pressure: 101.3 kPa'],
    }
  },
  {
    id: 'llm-a-0360', area: 'A', subTopic: 'machine-capacity',
    topic: 'Testing Equipment', type: 'theory', difficulty: 'easy',
    question: 'What does the term \'actual capacity\' refer to in the context of agricultural machinery testing?',
    options: ['The theoretical maximum output of the machine', 'The weight of processed material over a specific time', 'The rate of fuel consumption of the machine', 'The energy efficiency rating of the machine'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0361', area: 'A', subTopic: 'power-requirements',
    topic: 'Energy Efficiency', type: 'theory', difficulty: 'average',
    question: 'Which of the following factors is NOT typically considered when determining the efficiency of agricultural machinery?',
    options: ['The quality of the crops being processed', 'Mechanical losses due to friction', 'Fuel consumption rates', 'The operator\'s skill level'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0362', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Field Testing', type: 'computation', difficulty: 'hard',
    question: 'A power tiller operates at a field speed of 4.5 km/h and has a working width of 1.2 meters. If it needs to cover a field of 1 hectare (10,000 m²) with a theoretical efficiency of 75%, calculate the time required in hours to complete the task, ignoring irrelevant variables like soil moisture and temperature.',
    options: ['2.5 hours', '3.0 hours', '3.5 hours', '4.0 hours'],
    correctAnswer: 1,
    solution: {
      given: 'Field Speed = 4.5 km/h, Working Width = 1.2 m, Area = 10,000 m², Efficiency = 75%',
      steps: ['Convert field speed to m/s: 4.5 km/h × (1000 m/km) / (3600 s/h) = 1.25 m/s', 'Calculate effective working speed: Effective Speed = Field Speed × Efficiency = 1.25 m/s × 0.75 = 0.9375 m/s', 'Calculate area covered in one hour: Area/Hour = Effective Speed × Working Width × 3600 s/h = 0.9375 m/s × 1.2 m × 3600 s/h = 4,050 m²/h', 'Calculate time required: Time = Area / Area/Hour = 10,000 m² / 4,050 m²/h ≈ 2.47 hours'],
      formula: 'Time = Area / (Effective Speed × Working Width × 3600)',
      keyConcept: 'Time to cover a field depends on field speed, working width, and the efficiency of the machinery.',
      commonMistakes: ['Not converting units properly', 'Ignoring efficiency in calculations', 'Using wrong speed values'],
      extraneousGivens: ['Soil moisture content: 15%', 'Ambient temperature: 32°C'],
    }
  },
  {
    id: 'llm-a-0363', area: 'A', subTopic: 'power-requirements',
    topic: 'Power Requirements', type: 'theory', difficulty: 'average',
    question: 'Which measurement provides insight into the power required for an agricultural machine to perform its task efficiently?',
    options: ['Torque', 'Work', 'Capacity', 'Efficiency'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0364', area: 'A', subTopic: 'machine-capacity',
    topic: 'Field Evaluation', type: 'computation', difficulty: 'hard',
    question: 'A combine harvester operates at a speed of 6 km/h and has a working width of 3 meters. If it processes 800 kg of grains in one hour with a total loss of 10%, calculate the effective capacity in kg/hr, ignoring extraneous variables such as crop conditions or humidity.',
    options: ['720 kg/hr', '760 kg/hr', '800 kg/hr', '880 kg/hr'],
    correctAnswer: 1,
    solution: {
      given: 'Operating Speed = 6 km/h, Working Width = 3 m, Total Grains Processed = 800 kg, Loss = 10%',
      steps: ['Determine losses: Loss = 10% of 800 kg = 80 kg', 'Calculate effective capacity: Effective Capacity = Total Grains Processed - Loss = 800 kg - 80 kg = 720 kg/hr'],
      formula: 'Effective Capacity = Total Grains Processed - Loss',
      keyConcept: 'Effective capacity accounts for losses during the harvesting process.',
      commonMistakes: ['Overlooking the percentage loss', 'Incorrect unit conversion', 'Not considering working width'],
      extraneousGivens: ['Operating speed conditions: 6 km/h'],
    }
  },
  {
    id: 'llm-a-0365', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Testing Standards', type: 'theory', difficulty: 'easy',
    question: 'What types of tests are conducted to determine whether the machinery meets the manufacturer\'s specifications?',
    options: ['Verification tests', 'Acceptance tests', 'Routine tests', 'All of the above'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0366', area: 'A', subTopic: 'power-requirements',
    topic: 'Mechanical Efficiency', type: 'theory', difficulty: 'average',
    question: 'What is the significance of mechanical efficiency in evaluating agricultural machinery?',
    options: ['It measures the fuel consumption rate', 'It indicates the energy loss during operation', 'It reflects the operator\'s skill', 'It determines the market value of the machine'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0367', area: 'A', subTopic: 'testing-evaluation',
    topic: 'Field Testing Procedures', type: 'computation', difficulty: 'hard',
    question: 'A mechanical rice transplanter is tested in a 1,500 m² field and can transplant 200 kg of seedlings per hour. If the operating time is 2 hours, calculate the total weight of seedlings transplanted, considering a wastage of 5% and ignoring the irrelevant details such as operational cost or weather conditions.',
    options: ['380 kg', '400 kg', '420 kg', '450 kg'],
    correctAnswer: 1,
    solution: {
      given: 'Field Area = 1,500 m², Transplant Rate = 200 kg/hr, Operating Time = 2 hours, Wastage = 5%',
      steps: ['Calculate total seedlings transplanted: Total = Transplant Rate × Operating Time = 200 kg/hr × 2 hr = 400 kg', 'Calculate effective output after wastage: Effective Output = Total - (Total × Wastage) = 400 kg - (400 kg × 0.05) = 380 kg'],
      formula: 'Effective Output = Total - (Total × Wastage)',
      keyConcept: 'Understanding effective output is essential for evaluating the performance of transplanting machinery.',
      commonMistakes: ['Not factoring in wastage', 'Confusing rate with total', 'Miscalculating time'],
      extraneousGivens: ['Field area size: 1,500 m²'],
    }
  },
  {
    id: 'llm-a-0368', area: 'A', subTopic: 'testing-evaluation',
    topic: 'Field Testing', type: 'theory', difficulty: 'easy',
    question: 'What is the goal of conducting field tests on agricultural machinery?',
    options: ['To optimize machinery design', 'To determine the machine\'s suitability for specific crop conditions', 'To establish the mechanical efficiency', 'To adjust market prices'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0369', area: 'A', subTopic: 'machine-capacity',
    topic: 'Capacity Measurement', type: 'computation', difficulty: 'average',
    question: 'A corn sheller is designed to handle 2,500 kg of corn per hour with a 10% mechanical loss. If it operates for 4 hours, calculate the total amount of corn processed, excluding irrelevant details such as the price of corn or sheller brand.',
    options: ['8,000 kg', '9,000 kg', '6,000 kg', '7,000 kg'],
    correctAnswer: 0,
    solution: {
      given: 'Design Capacity = 2,500 kg/hr, Operation Time = 4 hours, Mechanical Loss = 10%',
      steps: ['Calculate actual output: Actual Output = Design Capacity × (1 - Mechanical Loss) = 2,500 kg/hr × (1 - 0.10) = 2,250 kg/hr', 'Calculate total corn processed: Total Processed = Actual Output × Operation Time = 2,250 kg/hr × 4 hr = 9,000 kg'],
      formula: 'Total Processed = Actual Output × Operation Time',
      keyConcept: 'The effective processing capacity accounts for mechanical losses during operation.',
      commonMistakes: ['Overlooking percentage loss', 'Mistaking capacity for total processed', 'Not converting hours to minutes when needed'],
      extraneousGivens: ['Brand of sheller: Kubota', 'Market price of corn'],
    }
  },
  {
    id: 'llm-a-0370', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Testing Standards', type: 'theory', difficulty: 'easy',
    question: 'What kind of tests are routinely performed on agricultural machinery to check for variances in production?',
    options: ['Verification tests', 'Acceptance tests', 'Routine tests', 'Performance tests'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0371', area: 'A', subTopic: 'power-requirements',
    topic: 'Power Calculations', type: 'computation', difficulty: 'average',
    question: 'A coconut harvester operates at a speed of 5 km/h. It has a working width of 2 meters and processes 300 coconuts per hour. If the total area harvested is 1 hectare, how many hours does it take to fully harvest the area, assuming no other inefficiencies, and ignoring unrelated factors such as coconut price?',
    options: ['2 hours', '2.5 hours', '3 hours', '4 hours'],
    correctAnswer: 1,
    solution: {
      given: 'Speed = 5 km/h, Width = 2 m, Area = 1 hectare (10,000 m²)',
      steps: ['Convert speed to meters per second: Speed = 5 km/h × (1000 m/km) / (3600 s/h) = 1.39 m/s', 'Calculate area covered per hour: Area/Hour = Speed × Width × 3600 s = 1.39 m/s × 2 m × 3600 s = 10,008 m²/hr', 'Calculate time: Time = Area / Area/Hour = 10,000 m² / 10,008 m²/hr ≈ 1 hour'],
      formula: 'Time = Area / (Speed × Width × 3600)',
      keyConcept: 'Time required for harvesting relates directly to operational speed and width.',
      commonMistakes: ['Incorrect unit conversion', 'Misinterpreting area units', 'Confusing speed with capacity'],
      extraneousGivens: ['Estimated coconut price'],
    }
  },
  {
    id: 'llm-a-0372', area: 'A', subTopic: 'testing-evaluation',
    topic: 'Testing Procedures', type: 'theory', difficulty: 'average',
    question: 'When testing agricultural machines, what is the first step that an engineer must take?',
    options: ['Calculate the expected performance', 'Familiarize with construction and operation features', 'Set up testing equipment', 'Choose the testing parameters'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0373', area: 'A', subTopic: 'machinery-specifications-testing-evaluation',
    topic: 'Power Requirements', type: 'theory', difficulty: 'easy',
    question: 'Which of the following factors does NOT primarily affect the power requirement of an agricultural tractor?',
    options: ['The type of implement attached', 'The weight of the tractor', 'The color of the tractor', 'The speed of operation'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0374', area: 'A', subTopic: 'machinery-specifications-testing-evaluation',
    topic: 'Efficiency Metrics', type: 'theory', difficulty: 'average',
    question: 'What is the purpose of measuring fuel consumption in agricultural machines during testing?',
    options: ['To determine the engine\'s cooling efficiency', 'To assess the economic viability of the machinery', 'To evaluate its operational sound levels', 'To calculate its maximum engine temperature'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0375', area: 'A', subTopic: 'machinery-specifications-testing-evaluation',
    topic: 'Capacity Testing', type: 'theory', difficulty: 'average',
    question: 'In the testing of a rice thresher, what does actual capacity refer to?',
    options: ['The maximum weight of palay the machine can process', 'The average performance over multiple tests', 'The total elapsed time during operation', 'The machine\'s power output'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0376', area: 'A', subTopic: 'machinery-specifications-testing-evaluation',
    topic: 'Losses in Threshing', type: 'theory', difficulty: 'average',
    question: 'What is the definition of blower loss in the context of a rice thresher?',
    options: ['The percentage of paddy lost due to improper handling', 'The weight of grains blown away during operation', 'The amount of energy lost through heat during threshing', 'The total operating time of the machine'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0377', area: 'A', subTopic: 'machinery-specifications-testing-evaluation',
    topic: 'Performance Parameters', type: 'computation', difficulty: 'hard',
    question: 'A rice thresher has recorded 3000 kg of palay threshed in 4 hours. It has blower losses of 150 kg, separation losses of 250 kg, and scattering losses of 180 kg. Calculate the total percentage losses of the thresher. Ignore the maximum capacity and field dimensions when calculating.',
    options: ['12.5%', '10.4%', '9.5%', '8.0%'],
    correctAnswer: 3,
    solution: {
      given: 'Weight of threshed palay = 3000 kg, Blower loss = 150 kg, Separation loss = 250 kg, Scattering loss = 180 kg, Threshing time = 4 hours',
      steps: ['Calculate Total Losses: Total Losses = Blower + Separation + Scattering = 150 + 250 + 180 = 580 kg', 'Calculate Percentage Losses: % Loss = (Total Losses / (Weight of threshed palay + Total Losses)) * 100 = (580 / (3000 + 580)) * 100 = 8.0%'],
      formula: '% Loss = (Total Losses / (Threshed Weight + Total Losses)) * 100',
      keyConcept: 'Total percentage losses are calculated based on effective threshed weight and total losses incurred.',
      commonMistakes: ['Forgetting to include total losses in the denominator', 'Miscalculating individual losses', 'Confusing net threshed weight with initial palay weight'],
      extraneousGivens: ['Threshing time: 4 hours', 'Initial weight of palay: 3000 kg', 'Field dimensions are irrelevant for the calculation'],
    }
  },
  {
    id: 'llm-a-0378', area: 'A', subTopic: 'machinery-specifications-testing-evaluation',
    topic: 'Efficiency Standards', type: 'theory', difficulty: 'easy',
    question: 'Which agency in the Philippines is primarily responsible for the testing and evaluation of agricultural machinery?',
    options: ['DA (Department of Agriculture)', 'AMTEC (Agricultural Machinery Testing and Evaluation Center)', 'NIA (National Irrigation Administration)', 'DENR (Department of Environment and Natural Resources)'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0379', area: 'A', subTopic: 'machinery-specifications-testing-evaluation',
    topic: 'Thermal Efficiency', type: 'theory', difficulty: 'average',
    question: 'During the evaluation of an engine\'s thermal efficiency, which of the following factors is NOT considered?',
    options: ['Fuel type used', 'Cooling system design', 'Color of the engine', 'Engine operating temperature'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0380', area: 'A', subTopic: 'machinery-specifications-testing-evaluation',
    topic: 'Field Testing Requirements', type: 'computation', difficulty: 'hard',
    question: 'A mechanical rice transplanter is tested on a field size of 1200 m² with specified headland for turning. If the machine takes 30 minutes to complete the transplanting on this field, calculate the effective transplanting capacity in hectares per hour. The machine operates under optimal conditions disregarding soil moisture and topography.',
    options: ['0.9 ha/hr', '1.2 ha/hr', '1.5 ha/hr', '1.8 ha/hr'],
    correctAnswer: 2,
    solution: {
      given: 'Field area = 1200 m², Time taken = 30 minutes = 0.5 hours',
      steps: ['Convert area to hectares: 1200 m² = 0.12 hectares', 'Calculate transplanting capacity: Capacity = Field Area / Time = 0.12/0.5 = 0.24 ha/hr', 'Convert to effective rate: Rate = Capacity x 60 = 1.2 ha/hr'],
      formula: 'Capacity (ha/hr) = Area (ha) / Time (hr)',
      keyConcept: 'Effective transplanting capacity can provide insights into the machine\'s performance in varied conditions.',
      commonMistakes: ['Confusing square meters to hectares conversion', 'Incorrectly calculating time in hours', 'Failing to convert final capacity to hourly rate'],
      extraneousGivens: ['Field dimension: 1200 m²', 'Soil moisture and topography irrelevant for efficiency calculation'],
    }
  },
  {
    id: 'llm-a-0381', area: 'A', subTopic: 'machinery-specifications-testing-evaluation',
    topic: 'Operational Testing', type: 'theory', difficulty: 'easy',
    question: 'What is the running-in period in the context of agricultural machinery testing?',
    options: ['The time the machine operates without any load', 'The time spent on machine maintenance', 'The initial period of machine operation for adjustments', 'The training period for the operators'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0382', area: 'A', subTopic: 'machinery-specifications-testing-evaluation',
    topic: 'Required Standards', type: 'theory', difficulty: 'average',
    question: 'Which of the following is considered a critical testing requirement for power tillers in the Philippines?',
    options: ['The field must not exceed 400 m²', 'The plowing depth must be 10 cm ± 1 cm', 'The field must be dry and free of weeds', 'The speed of the tiller must exceed 5 km/hr'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0383', area: 'A', subTopic: 'machinery-specifications-testing-evaluation',
    topic: 'Losses Calculation', type: 'computation', difficulty: 'average',
    question: 'A rice thresher processes 2500 kg of rice, experiencing a blower loss of 80 kg, separation loss of 100 kg, and other losses of 20 kg. What is the percentage of blower loss compared to the total input? Assume no other irrelevant factors.',
    options: ['3.1%', '2.9%', '4.2%', '5.5%'],
    correctAnswer: 0,
    solution: {
      given: 'Total input weight = 2500 kg, Blower loss = 80 kg',
      steps: ['Calculate percentage of blower loss: % Loss = (Blower loss / Total input) * 100 = (80 / 2500) * 100 = 3.2%'],
      formula: '% Loss = (Blower Loss / Total Input) * 100',
      keyConcept: 'Calculating percentage losses helps determine the efficiency of the thresher.',
      commonMistakes: ['Forgetting to include all losses in the denominator', 'Miscalculating individual loss types', 'Failing to convert to percentage properly'],
      extraneousGivens: ['Separation loss: 100 kg', 'Other losses: 20 kg'],
    }
  },
  {
    id: 'llm-a-0384', area: 'A', subTopic: 'machinery-specifications-testing-evaluation',
    topic: 'Field Dimension Calculation', type: 'computation', difficulty: 'hard',
    question: 'In testing a crop duster, you must cover an area of 2.5 hectares in an optimal time of 1 hour. If the machine\'s effective rate achieves an area coverage of only 0.8 hectares per hour, what is the area left uncovered after one hour of operation? Ignore external variables not affecting coverage.',
    options: ['1.7 ha', '1.9 ha', '2.1 ha', '2.3 ha'],
    correctAnswer: 1,
    solution: {
      given: 'Target area = 2.5 ha, Achieved coverage = 0.8 ha/hr',
      steps: ['Calculate uncovered area after 1 hour: Uncovered Area = Target Area - Achieved Coverage = 2.5 - 0.8 = 1.7 ha'],
      formula: 'Uncovered Area = Target Area - Actual Covered Area',
      keyConcept: 'Evaluating coverage efficiency is vital for operational planning.',
      commonMistakes: ['Confusing hectares to square meters conversion', 'Underestimating required coverage', 'Ignoring the actual coverage rate'],
      extraneousGivens: ['External environmental factors like wind speed are not included here'],
    }
  },
  {
    id: 'llm-a-0385', area: 'A', subTopic: 'machinery-specifications-testing-evaluation',
    topic: 'Testing Equipment', type: 'theory', difficulty: 'average',
    question: 'Which of the following instruments is typically used to measure the moisture content of grains in grain drying operations?',
    options: ['Thermocouple', 'Moisture meter', 'Anemometer', 'Dynamometer'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0386', area: 'A', subTopic: 'machinery-specifications-testing-evaluation',
    topic: 'Safety During Testing', type: 'theory', difficulty: 'easy',
    question: 'Why is it important for the manufacturer\'s representative to be present during testing of agricultural machinery?',
    options: ['To manage maintenance schedules', 'To ensure safety and proper operation during testing', 'To market the machine to potential customers', 'To run the test independently'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0387', area: 'A', subTopic: 'machinery-specifications-testing-evaluation',
    topic: 'Measurement Techniques', type: 'theory', difficulty: 'average',
    question: 'What is the primary function of a tachometer in agricultural machinery testing?',
    options: ['To measure torque', 'To monitor temperature', 'To measure rotational speed', 'To calculate fuel efficiency'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0388', area: 'A', subTopic: 'Machinery Specifications',
    topic: 'Machine Testing Standards', type: 'theory', difficulty: 'easy',
    question: 'What is the primary aim of the Agricultural Machinery Testing and Evaluation Center (AMTEC) in the Philippines?',
    options: ['To develop new agricultural machinery', 'To promote a self-reliant agricultural machinery industry', 'To import agricultural machinery from abroad', 'To train engineers in foreign countries'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0389', area: 'A', subTopic: 'Machinery Specifications',
    topic: 'Performance Evaluation', type: 'theory', difficulty: 'average',
    question: 'Which test is conducted to verify if the machine conforms to the specifications set by the manufacturer?',
    options: ['Verification Test', 'Acceptance Test', 'Routine Test', 'Prototype Test'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0390', area: 'A', subTopic: 'Power Requirements',
    topic: 'Power Calculation', type: 'computation', difficulty: 'hard',
    question: 'A power tiller operates at 3200 RPM with a torque of 15 Nm. It is designed to work in a field area of 800 m². If the machine has a working efficiency of 80%, what is the power output in watts? The ambient temperature is 25°C, and the relative humidity is 60%.',
    options: ['52.0 W', '62.5 W', '75.0 W', '100.0 W'],
    correctAnswer: 2,
    solution: {
      given: 'RPM=3200, Torque=15 Nm, Area=800 m², Efficiency=80%, Ambient Temperature=25°C, Relative Humidity=60%',
      steps: ['Calculate Power: P = (2π × Torque × RPM) / 60 = (2 × 3.14159 × 15 × 3200) / 60 = 1570.8 W', 'Adjust for efficiency: Effective Power = P × Efficiency = 1570.8 × 0.80 = 1256.64 W'],
      formula: 'P = (2π × Torque × RPM) / 60',
      keyConcept: 'Power output is affected by torque, RPM, and efficiency.',
      commonMistakes: ['Confusing torque with power', 'Ignoring efficiency in the calculation'],
      extraneousGivens: ['Field area: 800 m²', 'Ambient temperature: 25°C', 'Relative humidity: 60%'],
    }
  },
  {
    id: 'llm-a-0391', area: 'A', subTopic: 'Testing and Evaluation',
    topic: 'Field Conditions', type: 'theory', difficulty: 'average',
    question: 'During the evaluation of agricultural machines, which factor significantly influences machine performance in actual field conditions?',
    options: ['Ambient noise levels', 'Soil type and topography', 'Farmer\'s operational skills', 'Weather conditions only'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0392', area: 'A', subTopic: 'Efficiency Analysis',
    topic: 'Losses in Threshing', type: 'computation', difficulty: 'hard',
    question: 'A rice thresher threshed 2500 kg of palay in 4 hours, resulting in total losses of 200 kg (blower loss: 50 kg, separation loss: 80 kg, unthreshed loss: 30 kg, scattering loss: 40 kg). Calculate the percentage of each type of loss and the actual capacity in kg/hr. The testing was conducted at a relative humidity of 70% and a temperature of 30°C.',
    options: ['7.5%, 3.4% for unthreshed loss, 85.0 kg/hr', '6.5%, 8.0% for blower loss, 625.0 kg/hr', '8.0%, 5.0% for scattering loss, 625.0 kg/hr', '8.0%, 3.0% for total losses, 650.0 kg/hr'],
    correctAnswer: 2,
    solution: {
      given: 'Weight of palay=2500 kg, Threshing time=4 hr, Total losses=200 kg, Blower loss=50 kg, Separation loss=80 kg, Unthreshed loss=30 kg, Scattering loss=40 kg.',
      steps: ['Calculate total losses: L = 200 kg', 'Calculate percentage losses: Blower % = (50 / 2700) * 100 = 1.85%, Separation % = (80 / 2700) * 100 = 2.96%, Unthreshed % = (30 / 2700) * 100 = 1.11%, Scattering % = (40 / 2700) * 100 = 1.48%', 'Actual capacity = 2500 kg / 4 hr = 625 kg/hr'],
      formula: 'Percentage Loss = (Loss / (Weight + Loss)) * 100; Actual Capacity = Weight / Time',
      keyConcept: 'Understanding losses helps improve machine design and efficiency.',
      commonMistakes: ['Miscalculating total weight including losses', 'Failing to convert units appropriately'],
      extraneousGivens: ['Testing conditions: relative humidity 70%', 'Temperature: 30°C'],
    }
  },
  {
    id: 'llm-a-0393', area: 'A', subTopic: 'Testing Instruments',
    topic: 'Measurement Techniques', type: 'theory', difficulty: 'easy',
    question: 'Which instrument is used to measure the moisture content in grains during the testing of agricultural machines?',
    options: ['Thermometer', 'Moisture Meter', 'Tachometer', 'Anemometer'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0394', area: 'A', subTopic: 'Power Requirements',
    topic: 'Pump Capacity', type: 'computation', difficulty: 'average',
    question: 'A water pump operates at a flow rate of 15 m³/h. If the pump has a total dynamic head of 15 meters and a mechanical efficiency of 75%, calculate the power required in watts. The water is at room temperature and the pump is installed at an elevation of 2 meters.',
    options: ['1325 W', '1125 W', '900 W', '1500 W'],
    correctAnswer: 1,
    solution: {
      given: 'Flow rate = 15 m³/h, Total dynamic head = 15 m, Efficiency = 75%, Elevation = 2 m.',
      steps: ['Convert flow rate to m³/s: 15 m³/h = 15/3600 m³/s = 0.00417 m³/s', 'Calculate power required: P = (ρ × g × H × Q) / η where ρ=1000 kg/m³, g=9.81 m/s², H=15 m, Q=0.00417 m³/s; P = (1000 × 9.81 × 15 × 0.00417) / 0.75 = 1325.0 W'],
      formula: 'P = (ρ × g × H × Q) / η',
      keyConcept: 'Power requirements for pumps are influenced by flow rate, head, and efficiency.',
      commonMistakes: ['Using incorrect units for flow rate', 'Not converting head into appropriate units'],
      extraneousGivens: ['Room temperature of water', 'Elevation of the pump at 2 meters'],
    }
  },
  {
    id: 'llm-a-0395', area: 'A', subTopic: 'Testing Standards',
    topic: 'Government Regulations', type: 'theory', difficulty: 'easy',
    question: 'What is the main purpose of Republic Act 10601 in relation to agricultural machinery?',
    options: ['To promote the importation of agricultural machinery', 'To ensure the quality and safety of agricultural machinery', 'To increase the price of imported machinery', 'To regulate the sale of machinery only'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0396', area: 'A', subTopic: 'Machinery Specifications',
    topic: 'Operational Standards', type: 'theory', difficulty: 'average',
    question: 'What is required before a machine is verified for compliance with national standards?',
    options: ['Certification from users', 'Approval from AMTEC', 'Field testing', 'Manufacturers must perform routine maintenance'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0397', area: 'A', subTopic: 'Efficiency Analysis',
    topic: 'Fuel Consumption', type: 'computation', difficulty: 'hard',
    question: 'A rice mill consumes 25 liters of fuel in 5 hours while processing 1500 kg of rice. Calculate the fuel consumption rate in liters per hour and the efficiency if the expected consumption is 20 liters. The mill operates at a temperature of 35°C and a relative humidity of 75%.',
    options: ['5 L/h efficiency of 80%', '5 L/h efficiency of 75%', '5 L/h efficiency of 70%', '6 L/h efficiency of 80%'],
    correctAnswer: 1,
    solution: {
      given: 'Fuel consumed = 25 liters, Time = 5 hr, Processed rice = 1500 kg, Expected consumption = 20 liters.',
      steps: ['Calculate fuel consumption rate: 25 liters / 5 hr = 5 L/hr', 'Calculate efficiency: Efficiency = (Expected Consumption / Actual Consumption) × 100 = (20 L / 25 L) × 100 = 80%'],
      formula: 'Fuel Consumption Rate = Total Fuel / Time; Efficiency = (Expected / Actual) × 100',
      keyConcept: 'Efficiency calculations help in assessing machine performance.',
      commonMistakes: ['Ignoring the expected consumption values', 'Calculating rate without considering the time'],
      extraneousGivens: ['Temperature: 35°C', 'Relative humidity: 75%'],
    }
  },
  {
    id: 'llm-a-0398', area: 'A', subTopic: 'Testing Procedures',
    topic: 'Testing Conditions', type: 'theory', difficulty: 'easy',
    question: 'What is the purpose of conducting a trial run before the final evaluation of agricultural machinery?',
    options: ['To gather marketing data', 'To adjust the machine for optimal performance', 'To increase operational costs', 'To comply with regulatory requirements'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0399', area: 'A', subTopic: 'Measurement Techniques',
    topic: 'Weight Measurement', type: 'theory', difficulty: 'average',
    question: 'Which tool is commonly used to measure the weight of paddy before and after drying?',
    options: ['Platform Scale', 'Moisture Meter', 'Tachometer', 'Thermometer'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0400', area: 'A', subTopic: 'Testing and Evaluation',
    topic: 'Field Test Requirements', type: 'computation', difficulty: 'hard',
    question: 'During a test, a mechanical rice transplanter covered a field of 1200 m² in 4 hours. If the transplanter has a field capacity of 0.5 ha/hr, calculate its effective efficiency. The test was conducted under a temperature of 28°C and a relative humidity of 80%.',
    options: ['66.67%', '50%', '75%', '80%'],
    correctAnswer: 0,
    solution: {
      given: 'Field area = 1200 m², Time = 4 hr, Field capacity = 0.5 ha/hr.',
      steps: ['Convert field area to hectares: 1200 m² = 0.12 ha', 'Calculate effective efficiency: Efficiency = (Area Covered / (Field Capacity × Time)) × 100 = (0.12 / (0.5 × 4)) × 100 = 60%'],
      formula: 'Efficiency = (Area / (Field Capacity × Time)) × 100',
      keyConcept: 'Effective efficiency indicates how well a machine performs relative to its capacity.',
      commonMistakes: ['Misunderstanding area conversion', 'Forgetting to multiply field capacity by time'],
      extraneousGivens: ['Temperature: 28°C', 'Relative humidity: 80%'],
    }
  },
  {
    id: 'llm-a-0401', area: 'A', subTopic: 'Power Requirements',
    topic: 'Energy Consumption', type: 'theory', difficulty: 'average',
    question: 'Which factor does NOT affect the energy consumption of agricultural machinery?',
    options: ['Type of fuel used', 'Soil moisture content', 'Operator skill level', 'Time of day'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0402', area: 'A', subTopic: 'Testing Instruments',
    topic: 'Measurement of Speed', type: 'theory', difficulty: 'easy',
    question: 'What is the purpose of a tachometer in agricultural machinery testing?',
    options: ['To measure the weight of crops', 'To measure the speed of rotation of a shaft', 'To measure fuel consumption', 'To measure temperature'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0403', area: 'A', subTopic: 'Testing Procedures',
    topic: 'Test Suspension', type: 'theory', difficulty: 'average',
    question: 'Under what condition can a test of agricultural machinery be suspended during testing?',
    options: ['When the ambient temperature exceeds 40°C', 'When the machine breaks down or malfunctions', 'When the operator requires a break', 'When the machine performs as expected'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0404', area: 'A', subTopic: 'power-engineering',
    topic: 'Testing and Evaluation of Agricultural Machines', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of conducting tests during the development stage of agricultural machinery?',
    options: ['To ensure the machine meets aesthetic standards', 'To enhance the quality of the machine before commercialization', 'To determine the market price of the machine', 'To verify the color scheme of the machine'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0405', area: 'A', subTopic: 'power-engineering',
    topic: 'Testing and Evaluation of Agricultural Machines', type: 'theory', difficulty: 'average',
    question: 'Which of the following tests is conducted to ensure a machine meets the performance standards set by the manufacturer?',
    options: ['Routine Test', 'Acceptance Test', 'Verification Test', 'Initial Test'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0406', area: 'A', subTopic: 'power-engineering',
    topic: 'Testing and Evaluation of Agricultural Machines', type: 'theory', difficulty: 'average',
    question: 'Under Philippine law, which agency is responsible for testing and evaluating agricultural machinery and equipment before they are sold in the market?',
    options: ['Department of Agriculture (DA)', 'National Irrigation Administration (NIA)', 'Agricultural Machinery Testing and Evaluation Center (AMTEC)', 'Department of Environment and Natural Resources (DENR)'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0407', area: 'A', subTopic: 'power-engineering',
    topic: 'Measurement and Instrumentation', type: 'theory', difficulty: 'easy',
    question: 'Which instrument is commonly used to measure the rotational speed of a shaft in an agricultural machine?',
    options: ['Thermometer', 'Tachometer', 'Anemometer', 'Manometer'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0408', area: 'A', subTopic: 'power-engineering',
    topic: 'Measurement and Instrumentation', type: 'theory', difficulty: 'average',
    question: 'What is the unit of measurement for power in agricultural machinery performance testing?',
    options: ['Kilogram (kg)', 'Horsepower (hp)', 'Newton (N)', 'Pascals (Pa)'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0409', area: 'A', subTopic: 'power-engineering',
    topic: 'Power and Efficiency', type: 'theory', difficulty: 'average',
    question: 'What does the term \'mechanical efficiency\' of a machine refer to?',
    options: ['The ratio of output work to input work', 'The aesthetic appeal of the machine', 'The durability of machine components', 'The weight of the machine'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0410', area: 'A', subTopic: 'power-engineering',
    topic: 'Machinery Specifications', type: 'computation', difficulty: 'hard',
    question: 'A rice thresher processes 2000 kg of palay over a testing period of 3 hours with the following losses: blower loss = 90 kg, separation loss = 200 kg, unthreshed loss = 50 kg, scattering loss = 120 kg. Calculate the percentage of blower loss and the actual capacity of the thresher in kg/hr. Assume the total initial weight of the palay is 2000 kg.',
    options: ['4.3%, 600 kg/hr', '5.6%, 666.67 kg/hr', '9.1%, 800 kg/hr', '2.4%, 500 kg/hr'],
    correctAnswer: 1,
    solution: {
      given: 'Wg = 2000 kg, Tt = 3 hours, Lb = 90 kg, Lse = 200 kg, Lu = 50 kg, Lsc = 120 kg',
      steps: ['Calculate total losses: Lt = Lb + Lse + Lu + Lsc = 90 kg + 200 kg + 50 kg + 120 kg = 460 kg', 'Calculate blower loss percentage: % Lb = (Lb / (Wg + Lb)) * 100 = (90 kg / (2000 kg + 90 kg)) * 100 = 4.3%', 'Calculate actual capacity: Ca = Wg / Tt = 2000 kg / 3 hr = 666.67 kg/hr'],
      formula: '% Lb = (Lb / (Wg + Lb)) * 100, Ca = Wg / Tt',
      keyConcept: 'Understanding losses in agricultural machinery is crucial for determining efficiency.',
      commonMistakes: ['Miscalculating total losses', 'Forgetting to convert to percentage', 'Incorrectly calculating the capacity by not dividing by time'],
      extraneousGivens: ['Initial weight of palay: 2000 kg', 'Testing duration: 3 hours', 'Separation loss: 200 kg', 'Unthreshed loss: 50 kg', 'Scattering loss: 120 kg'],
    }
  },
  {
    id: 'llm-a-0411', area: 'A', subTopic: 'power-engineering',
    topic: 'Power and Efficiency', type: 'computation', difficulty: 'hard',
    question: 'A mechanical rice transplanter is tested on a 1,000 m² field at a speed of 0.5 m/s. During the test, it uses 1 liter of fuel per hour and the weight of the transplanter is 450 kg. Calculate the work output in joules and the fuel consumption rate in kg/m². Assume the density of fuel is 0.85 kg/L.',
    options: ['900,000 J, 0.0012 kg/m²', '1,620,000 J, 0.0015 kg/m²', '1,300,000 J, 0.0032 kg/m²', '800,000 J, 0.0020 kg/m²'],
    correctAnswer: 2,
    solution: {
      given: 'Speed = 0.5 m/s, Area = 1000 m², Weight = 450 kg, Fuel consumption = 1 L/h, Density of fuel = 0.85 kg/L',
      steps: ['Calculate distance covered: Distance = Speed * Time = 0.5 m/s * (1000 m² / (0.5 m/s)) = 1000 m', 'Calculate work output: Work = Weight * Distance = 450 kg * 1000 m * 9.81 m/s² = 4,414,500 J', 'Calculate fuel consumption in kg: Fuel consumption (kg) = 1 L/h * 0.85 kg/L = 0.85 kg', 'Calculate fuel consumption rate: Rate (kg/m²) = Fuel consumption / Area = 0.85 kg / 1000 m² = 0.00085 kg/m²'],
      formula: 'Work (J) = Weight (kg) * Distance (m) * g (m/s²), Consumption Rate = Fuel (kg) / Area (m²)',
      keyConcept: 'Understanding work output and fuel consumption is essential for evaluating machinery efficiency.',
      commonMistakes: ['Forgetting to convert liters to kg', 'Miscalculating distance traveled', 'Incorrectly applying weight in work calculations'],
      extraneousGivens: ['Weight of transplanter: 450 kg', 'Speed: 0.5 m/s', 'Fuel consumption: 1 L/h', 'Area of the field: 1000 m²'],
    }
  },
  {
    id: 'llm-a-0412', area: 'A', subTopic: 'power-engineering',
    topic: 'Machinery Specifications', type: 'theory', difficulty: 'easy',
    question: 'What is the purpose of the Agricultural Machinery Testing and Evaluation Center (AMTEC)?',
    options: ['To produce agricultural machinery in the Philippines', 'To promote a reliable agricultural machinery industry', 'To conduct research on soil quality', 'To sell agricultural equipment to farmers'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0413', area: 'A', subTopic: 'power-engineering',
    topic: 'Machinery Specifications', type: 'theory', difficulty: 'average',
    question: 'Which of the following parameters is NOT typically measured during the testing of agricultural machinery?',
    options: ['Fuel efficiency', 'Ambient temperature', 'Operating speed', 'Design aesthetics'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0414', area: 'A', subTopic: 'power-engineering',
    topic: 'Power and Efficiency', type: 'computation', difficulty: 'hard',
    question: 'A corn planter achieves an effective planting rate of 800 kg/hour while consuming 3 liters of diesel fuel per hour. Given that diesel weighs 0.85 kg/L, find the fuel consumption rate in kg/ha, assuming the planter operates over an area of 1 hectare (10,000 m²).',
    options: ['0.25 kg/ha', '0.30 kg/ha', '0.35 kg/ha', '0.40 kg/ha'],
    correctAnswer: 1,
    solution: {
      given: 'Effective planting rate = 800 kg/h, Fuel consumption = 3 L/h, Density of diesel = 0.85 kg/L, Area = 1 ha = 10,000 m²',
      steps: ['Calculate fuel consumption in kg: Fuel = 3 L/h * 0.85 kg/L = 2.55 kg/h', 'Calculate fuel consumption rate in kg/ha: Rate (kg/ha) = Fuel consumption / Area = 2.55 kg / 1 ha = 0.255 kg/ha'],
      formula: 'Fuel Rate (kg/ha) = (Fuel (kg) / Area (ha))',
      keyConcept: 'Understanding fuel consumption relative to area is essential for efficiency comparisons.',
      commonMistakes: ['Forgetting to convert liters to kilograms', 'Not considering area in hectares', 'Misinterpreting effective planting rate'],
      extraneousGivens: ['Effective planting rate: 800 kg/hour', 'Fuel consumption: 3 liters/hour', 'Diesel density: 0.85 kg/L', 'Area: 10,000 m²'],
    }
  },
  {
    id: 'llm-a-0415', area: 'A', subTopic: 'power-engineering',
    topic: 'Testing and Evaluation of Agricultural Machines', type: 'computation', difficulty: 'hard',
    question: 'A rice mill has a processing capacity of 1000 kg of paddy per hour. After testing, the actual output was found to be 900 kg per hour. If the total losses (blowing, separation, unthreshed, scattering) amounted to 150 kg, calculate the total efficiency of the rice mill as a percentage.',
    options: ['75%', '80%', '85%', '90%'],
    correctAnswer: 3,
    solution: {
      given: 'Capacity = 1000 kg/h, Actual output = 900 kg/h, Total losses = 150 kg',
      steps: ['Calculate total input: Total input = Actual output + Total losses = 900 kg + 150 kg = 1050 kg', 'Calculate efficiency: Efficiency = (Actual output / Total input) * 100 = (900 kg / 1050 kg) * 100 = 85.71%'],
      formula: 'Efficiency (%) = (Actual Output / (Actual Output + Total Losses)) * 100',
      keyConcept: 'Efficiency is crucial for assessing the performance of agricultural machines.',
      commonMistakes: ['Forgetting to add losses to actual output', 'Misunderstanding total capacity versus actual output', 'Incorrect percentage calculation'],
      extraneousGivens: ['Processing capacity: 1000 kg/hour', 'Actual output: 900 kg/hour', 'Total losses: 150 kg'],
    }
  },
  {
    id: 'llm-a-0416', area: 'A', subTopic: 'power-engineering',
    topic: 'Machinery Specifications', type: 'theory', difficulty: 'average',
    question: 'In the context of agricultural machinery, what does \'routine testing\' refer to?',
    options: ['Testing done on each machine after production', 'Testing conducted on a new crop variety', 'Testing required by government regulations', 'Testing for market acceptance'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0417', area: 'A', subTopic: 'power-engineering',
    topic: 'Measurement and Instrumentation', type: 'computation', difficulty: 'hard',
    question: 'A diesel-powered engine used in a coconut harvester produces 50 kW of brake power while consuming fuel at a rate of 5 liters per hour. If the heating value of the fuel is 37.5 MJ/L, calculate the thermal efficiency of the engine.',
    options: ['30%', '40%', '50%', '60%'],
    correctAnswer: 3,
    solution: {
      given: 'Brake power = 50 kW, Fuel consumption = 5 L/h, Heating value of fuel = 37.5 MJ/L',
      steps: ['Convert brake power to MJ/h: 50 kW = 50 MJ/h', 'Calculate energy input: Energy input = Fuel consumption * Heating value = 5 L/h * 37.5 MJ/L = 187.5 MJ/h', 'Calculate thermal efficiency: Efficiency = (Output / Input) * 100 = (50 MJ/h / 187.5 MJ/h) * 100 = 26.67%'],
      formula: 'Thermal Efficiency (%) = (Brake Power (MJ/h) / Energy Input (MJ/h)) * 100',
      keyConcept: 'Thermal efficiency is crucial for assessing engine performance.',
      commonMistakes: ['Incorrect conversion of brake power', 'Forgetting to convert all units consistently', 'Misunderstanding energy balance'],
      extraneousGivens: ['Fuel consumption: 5 L/h', 'Heating value: 37.5 MJ/L', 'Brake power: 50 kW'],
    }
  },
  {
    id: 'llm-a-0418', area: 'A', subTopic: 'power-engineering',
    topic: 'Power and Efficiency', type: 'theory', difficulty: 'average',
    question: 'The term \'acceptance test\' in machinery evaluation refers to?',
    options: ['A test to confirm the machine meets design specifications', 'A test to measure the engine performance', 'A test to ensure safety compliance', 'A test conducted for routine maintenance'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0419', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Testing and Evaluation', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of conducting verification tests on agricultural machines?',
    options: ['To evaluate user satisfaction', 'To determine if the machine meets manufacturer claims', 'To check the market price', 'To assess environmental impact'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0420', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Testing and Evaluation', type: 'theory', difficulty: 'easy',
    question: 'Which agency in the Philippines is responsible for the testing and evaluation of agricultural machinery?',
    options: ['Department of Agriculture (DA)', 'National Irrigation Administration (NIA)', 'Agricultural Machinery Testing and Evaluation Center (AMTEC)', 'Department of Environment and Natural Resources (DENR)'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0421', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Testing and Evaluation', type: 'theory', difficulty: 'average',
    question: 'Why is it important to conduct routine tests on agricultural machines?',
    options: ['To improve aesthetics', 'To verify compliance with specifications', 'To gauge market competitiveness', 'To assess technical aesthetics'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0422', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Testing and Evaluation', type: 'theory', difficulty: 'average',
    question: 'What factors are essential to consider in the operational conditions during machinery testing?',
    options: ['User preference and color of machinery', 'Field conditions, acceptability by farmers, and environmental variables', 'Cost of production and marketing strategies', 'Technological advancements and innovations'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0423', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Machinery Performance', type: 'computation', difficulty: 'hard',
    question: 'A rice thresher tested showed that 2500 kg of palay was threshed in 4 hours. The total losses recorded were as follows: blower loss is 110 kg, separation loss is 180 kg, unthreshed loss is 40 kg, and scattering loss is 150 kg. What are the percentage losses of the thresher and its threshing capacity in kg/hr?',
    options: ['Total Losses: 9.09%, Capacity: 625 kg/hr', 'Total Losses: 7.56%, Capacity: 750 kg/hr', 'Total Losses: 8.76%, Capacity: 625 kg/hr', 'Total Losses: 10.04%, Capacity: 540 kg/hr'],
    correctAnswer: 1,
    solution: {
      given: 'Weight of threshed palay = 2500 kg, Threshing time = 4 hours, Blower loss = 110 kg, Separation loss = 180 kg, Unthreshed loss = 40 kg, Scattering loss = 150 kg',
      steps: ['Calculate Total Losses: TL = 110 + 180 + 40 + 150 = 480 kg', 'Calculate Percentage Losses: %Lb = (110 / (2500 + 110)) * 100 = 4.2%, %Lse = (180 / (2500 + 180)) * 100 = 7.4%, %Lu = (40 / (2500 + 40)) * 100 = 1.57%, %Lsc = (150 / (2500 + 150)) * 100 = 5.7%', 'Calculate Threshing Capacity: Ca = Weight of threshed palay / Threshing time = 2500 / 4 = 625 kg/hr'],
      formula: 'Total Losses = Blower Loss + Separation Loss + Unthreshed Loss + Scattering Loss; Threshing Capacity (Ca) = Weight of Threshed Palay (Wg) / Threshing Time (Tt)',
      keyConcept: 'Understanding how to calculate total losses and capacity tests is critical for assessing machine performance.',
      commonMistakes: ['Not considering losses in total weight', 'Incorrectly calculating the total losses', 'Not converting units properly'],
      extraneousGivens: ['Weight of threshed palay: 2500 kg', 'Total losses not needed to determine capacity: 480 kg', 'Time taken: 4 hours'],
    }
  },
  {
    id: 'llm-a-0424', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Machinery Performance', type: 'computation', difficulty: 'hard',
    question: 'A power tiller has a rated power of 7.5 hp (5.59 kW) and is operated at a load factor of 85%. If the fuel consumption is 1.5 L/h, what is the specific fuel consumption in kg/kW-hr? (Density of diesel = 0.83 kg/L. Assume unnecessary data such as engine speed is provided).',
    options: ['0.31 kg/kW-hr', '0.45 kg/kW-hr', '0.27 kg/kW-hr', '0.54 kg/kW-hr'],
    correctAnswer: 0,
    solution: {
      given: 'Rated power = 5.59 kW, Fuel consumption = 1.5 L/h, Density of diesel = 0.83 kg/L, Load factor = 85%',
      steps: ['Calculate mass of diesel consumed: Mass = Fuel consumption x Density = 1.5 L/h x 0.83 kg/L = 1.245 kg/h', 'Calculate effective power: Effective power = Rated power x Load factor = 5.59 kW x 0.85 = 4.75 kW', 'Calculate specific fuel consumption: SFC = Mass / Effective Power = 1.245 kg/h / 4.75 kW = 0.26 kg/kW-hr'],
      formula: 'SFC = Mass of fuel / Effective Power',
      keyConcept: 'Specific fuel consumption indicates fuel efficiency of an engine under load.',
      commonMistakes: ['Ignoring unit conversion', 'Calculating based on rated power instead of effective power', 'Misapplying density values'],
      extraneousGivens: ['Rated power: 7.5 hp (5.59 kW)', 'Engine speed: not applicable', 'Load factor: 85% (not used for simple SFC here)'],
    }
  },
  {
    id: 'llm-a-0425', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Efficiency Assessment', type: 'theory', difficulty: 'easy',
    question: 'What is the objective of conducting acceptance tests on agricultural machinery?',
    options: ['To assess the aesthetic appeal', 'To ensure client satisfaction', 'To verify compliance with performance standards', 'To test the durability'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0426', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Machinery Specifications', type: 'theory', difficulty: 'average',
    question: 'Which of the following is a key measurement parameter considered during the testing of agricultural machines?',
    options: ['Color and weight', 'Pressure and electrical current', 'Market price and brand', 'User satisfaction and warranty'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0427', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Power Requirements', type: 'computation', difficulty: 'hard',
    question: 'A corn planter operates with a power requirement of 3 kW. If it is ideal to work at a 70% efficiency and is running under a variable load of 4 kW (indicating safety factors), what is the actual power consumed in watts?',
    options: ['3500 W', '4200 W', '3000 W', '2500 W'],
    correctAnswer: 0,
    solution: {
      given: 'Power requirement = 3 kW, Efficiency = 70%, Load = 4 kW',
      steps: ['Calculate actual power consumed: Actual Power (P) = Power Requirement / Efficiency = 3 kW / 0.70 = 4.29 kW', 'Convert to watts: 4.29 kW = 4290 W'],
      formula: 'P = Power Requirement / Efficiency',
      keyConcept: 'Understanding load and efficiency is crucial for actual power consumption calculations.',
      commonMistakes: ['Forgetting to convert kW to watts', 'Misunderstanding efficiency calculations', 'Incorrectly applying load values'],
      extraneousGivens: ['Variable load of 4 kW not needed for power consumption', 'Efficiency: 70% (common in power assessment)', 'Power requirement: 3 kW (direct value, not estimated)'],
    }
  },
  {
    id: 'llm-a-0428', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Efficiency Assessment', type: 'theory', difficulty: 'easy',
    question: 'In terms of agricultural machinery, what does the term \'capacity\' typically refer to?',
    options: ['The number of operators needed', 'The volume of crops processed in a given time', 'The size of the machinery', 'The fuel efficiency rating'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0429', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Testing Procedures', type: 'theory', difficulty: 'average',
    question: 'What is the purpose of \'running in\' tests during machinery evaluation?',
    options: ['To measure efficiency', 'To make necessary adjustments before official testing', 'To determine customer satisfaction', 'To evaluate the aesthetic quality of the machinery'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0430', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Testing Procedures', type: 'computation', difficulty: 'hard',
    question: 'A combine harvester is tested over a field area of 1.5 hectares, producing a yield of 4000 kg of paddy while experiencing a loss of 150 kg due to inefficient operation. What is the effective yield in kg/ha?',
    options: ['2666.67 kg/ha', '2500 kg/ha', '3000 kg/ha', '3500 kg/ha'],
    correctAnswer: 0,
    solution: {
      given: 'Total yield = 4000 kg, Total loss = 150 kg, Area = 1.5 hectares',
      steps: ['Calculate effective yield: Effective yield = (Total yield - Total loss) / Area = (4000 kg - 150 kg) / 1.5 ha = 2666.67 kg/ha'],
      formula: 'Effective Yield = (Total Yield - Total Loss) / Area',
      keyConcept: 'Effective yield assessments are important for understanding machine performance and efficiency.',
      commonMistakes: ['Not accounting for losses', 'Incorrect area conversions', 'Assuming total yield is the effective yield'],
      extraneousGivens: ['Area: 1.5 hectares (relevant but could be a distraction)', 'Total yield: 4000 kg (needed for calculation)', 'Total loss: 150 kg (relevant for yield adjustment)'],
    }
  },
  {
    id: 'llm-a-0431', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Measurement Techniques', type: 'theory', difficulty: 'easy',
    question: 'What is the significance of using SI units in measuring farm machinery performance?',
    options: ['To ensure global consistency and understanding', 'To enhance aesthetic appeal', 'To reduce production costs', 'To improve client satisfaction'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0432', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Measurement Techniques', type: 'theory', difficulty: 'average',
    question: 'Which instrument is commonly used to measure the RPM of a rotating shaft in agricultural machines?',
    options: ['Tachometer', 'Anemometer', 'Pressure gauge', 'Thermometer'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0433', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Measurement Techniques', type: 'computation', difficulty: 'hard',
    question: 'If a particular cultivator needs to cover a field area of 2 hectares in 4 hours and has an operational speed of 6 km/h, what is the width of the cultivator in meters if it operates at full capacity?',
    options: ['2.5 m', '3.0 m', '4.0 m', '4.5 m'],
    correctAnswer: 2,
    solution: {
      given: 'Area = 2 hectares = 20000 m², Time = 4 hours, Speed = 6 km/h',
      steps: ['Convert speed to m/s: 6 km/h = 6 * (1000 m / 3600 s) = 1.67 m/s', 'Find the cultivator width using area formula: Width = Area / (Speed * Time) = 20000 m² / (1.67 m/s * 14400 s) = 4.0 m'],
      formula: 'Width = Area / (Speed × Time)',
      keyConcept: 'Understanding width calculations aids in efficient machinery use in agriculture.',
      commonMistakes: ['Incorrect unit conversions', 'Miscalculating speed based on time', 'Assuming area is already in square meters'],
      extraneousGivens: ['Operational speed: 6 km/h (relevant)', 'Field area: 2 hectares (needed)', 'Time: 4 hours (relevant for calculation)'],
    }
  },
  {
    id: 'llm-a-0434', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Machinery Specifications', type: 'theory', difficulty: 'easy',
    question: 'What standard is primarily referenced for agricultural machinery testing in the Philippines?',
    options: ['International Organization for Standardization (ISO)', 'Philippine Agricultural Engineering Standards (PAES)', 'American Society of Agricultural Engineers (ASAE)', 'British Standards Institution (BSI)'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0435', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Measurement Techniques', type: 'theory', difficulty: 'average',
    question: 'What is the typical unit of measurement for input in agricultural machinery testing?',
    options: ['kg/h', 'm/s', 'L/h', 'kW'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0436', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Testing Procedures', type: 'computation', difficulty: 'hard',
    question: 'During a hydro test, a hydraulic system is subjected to a pressure of 2000 psi for a duration of 1.5 hours. If the gauge holds a reading of 5 psi after testing, what is the loss in pressure in psi?',
    options: ['1995 psi', '2000 psi', '1500 psi', '1800 psi'],
    correctAnswer: 0,
    solution: {
      given: 'Initial pressure = 2000 psi, End pressure = 5 psi',
      steps: ['Calculate pressure loss: Pressure Loss = Initial Pressure - End Pressure = 2000 psi - 5 psi = 1995 psi'],
      formula: 'Pressure Loss = Initial Pressure - End Pressure',
      keyConcept: 'Understanding pressure loss is crucial for evaluating the integrity of hydraulic systems.',
      commonMistakes: ['Misreading pressure gauges', 'Assuming end pressure is higher', 'Confusing pressure units'],
      extraneousGivens: ['Duration: 1.5 hours (relevant but could be misinterpreted)', 'Initial pressure: 2000 psi (needed for calculation)', 'End pressure: 5 psi (relevant for findings)'],
    }
  },
  {
    id: 'llm-a-0437', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Machine Design Criteria', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of testing and evaluation in agricultural machinery?',
    options: ['To enhance the machine\'s aesthetic appeal', 'To determine if the machine meets safety regulations', 'To verify performance against specifications', 'To assess the market demand for the machine'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0438', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Machine Specifications', type: 'theory', difficulty: 'easy',
    question: 'Which Philippine agency is responsible for testing agricultural machinery?',
    options: ['Department of Agriculture (DA)', 'National Irrigation Administration (NIA)', 'Agricultural Machinery Testing and Evaluation Center (AMTEC)', 'Department of Environment and Natural Resources (DENR)'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0439', area: 'A', subTopic: 'power-engineering',
    topic: 'Power Requirements', type: 'theory', difficulty: 'average',
    question: 'To ensure an agricultural machine’s operational efficiency, what key aspect should be regularly evaluated?',
    options: ['Color and design', 'Power consumption and output', 'User\'s personal preference', 'Market price trends'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0440', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Testing Methods', type: 'theory', difficulty: 'average',
    question: 'What is the purpose of conducting a verification test on agricultural machinery?',
    options: ['To assess new design aesthetics', 'To confirm that the specifications match actual performance', 'To evaluate user satisfaction', 'To increase the market price'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0441', area: 'A', subTopic: 'power-engineering',
    topic: 'Machinery Performance', type: 'computation', difficulty: 'hard',
    question: 'A rice thresher processes 3500 kg of palay in 5 hours. The blower loss is 80 kg, separation loss is 150 kg, unthreshed loss is 40 kg, and scattering loss is 60 kg. Calculate the total percentage losses and the actual capacity in kg/hr. The ambient temperature during testing is 28°C, and the machine model is a local brand Kubota.',
    options: ['2.3% losses, 700 kg/hr capacity', '5.7% losses, 750 kg/hr capacity', '7.0% losses, 666.67 kg/hr capacity', '10.0% losses, 800 kg/hr capacity'],
    correctAnswer: 2,
    solution: {
      given: 'Weight of threshed palay = 3500 kg, Threshing time = 5 hours, Blower loss = 80 kg, Separation loss = 150 kg, Unthreshed loss = 40 kg, Scattering loss = 60 kg',
      steps: ['Total losses = 80 + 150 + 40 + 60 = 330 kg', 'Percentage losses = (330 kg / (3500 kg + 330 kg)) × 100 = 8.58%', 'Actual capacity = 3500 kg / 5 hours = 700 kg/hr'],
      formula: 'Total Losses = Blower Loss + Separation Loss + Unthreshed Loss + Scattering Loss, Percentage Losses = (Total Losses / (Threshed Weight + Total Losses)) × 100, Actual Capacity = Weight of Threshed Palay / Threshing Time',
      keyConcept: 'Understanding the different types of losses is crucial in evaluating machine performance.',
      commonMistakes: ['Ignoring one of the loss types', 'Confusing actual capacity with theoretical capacity', 'Using wrong time duration for calculations'],
      extraneousGivens: ['Ambient temperature: 28°C', 'Machine model: Kubota', 'Weight of straw: 200 kg', 'Field size: 500 m²', 'Moisture content: 20%'],
    }
  },
  {
    id: 'llm-a-0442', area: 'A', subTopic: 'power-engineering',
    topic: 'Testing Agricultural Machines', type: 'theory', difficulty: 'average',
    question: 'What are the critical parameters to measure during the testing of a rice mill?',
    options: ['Weight of paddy, speed of operation, field dimensions', 'Fuel type, color of grains, ambient temperature', 'Operating time, efficiency rate, moisture content', 'Market price, user feedback, design aesthetics'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0443', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Machinery Design', type: 'theory', difficulty: 'easy',
    question: 'What type of agricultural machine is primarily used for seed planting?',
    options: ['Power tiller', 'Seeder', 'Combine harvester', 'Fertilizer applicator'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0444', area: 'A', subTopic: 'power-engineering',
    topic: 'Energy Consumption', type: 'computation', difficulty: 'hard',
    question: 'A mechanical rice dryer consumes 15 liters of diesel per hour and operates for 8 hours daily. If the cost of diesel is ₱50 per liter and the operational efficiency is rated at 85%, calculate the total cost of energy consumed in a month (30 days). The machine weight is also 800 kg.',
    options: ['₱4,500', '₱6,000', '₱3,600', '₱2,400'],
    correctAnswer: 0,
    solution: {
      given: 'Diesel consumption = 15 liters/hour, Operating time = 8 hours/day, Cost of diesel = ₱50/liter, Operational efficiency = 85%',
      steps: ['Daily cost = 15 liters/hour × 8 hours/day × ₱50/liter = ₱6,000', 'Monthly cost = ₱6,000 × 30 days = ₱180,000', 'Total energy cost = ₱180,000 × 0.85 = ₱153,000'],
      formula: 'Monthly Cost = (Diesel Consumption × Operating Time × Cost of Diesel) × Days of Operation × Efficiency',
      keyConcept: 'Understanding energy costs helps determine the economic viability of machinery.',
      commonMistakes: ['Neglecting efficiency in calculations', 'Incorrectly multiplying hours of operation', 'Forgetting to convert to total monthly cost'],
      extraneousGivens: ['Machine weight: 800 kg', 'Ambient temperature: 30°C', 'Field area: 1 ha', 'Expected output: 1 ton/day'],
    }
  },
  {
    id: 'llm-a-0445', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Machinery Efficiency', type: 'theory', difficulty: 'average',
    question: 'What factors should be considered when calculating the efficiency of a threshing machine?',
    options: ['Grain moisture content, ambient temperature, color of grains', 'Input grain weight, output grain weight, lost product weight', 'User satisfaction, machine appearance, brand reputation', 'Time taken for operation, cost of materials, market demand'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0446', area: 'A', subTopic: 'power-engineering',
    topic: 'Power Requirements', type: 'computation', difficulty: 'hard',
    question: 'A local brand (Mitsubishi) tractor has an engine rated at 50 kW and is used to power a corn planter. If the tractor operates at 75% efficiency, calculate the effective power available for planting. The tractor\'s weight is also 900 kg, and it has a maximum speed of 15 km/hr.',
    options: ['37.5 kW', '50.0 kW', '65.0 kW', '42.5 kW'],
    correctAnswer: 0,
    solution: {
      given: 'Engine power = 50 kW, Efficiency = 75%',
      steps: ['Effective power = Engine Power × Efficiency = 50 kW × 0.75 = 37.5 kW'],
      formula: 'Effective Power = Engine Power × Efficiency',
      keyConcept: 'Efficiency affects the available power for machinery operation.',
      commonMistakes: ['Calculating engine power instead of effective power', 'Neglecting efficiency in the calculation', 'Confusing kW with hp'],
      extraneousGivens: ['Tractor weight: 900 kg', 'Maximum speed: 15 km/hr', 'Ambient temperature: 25°C', 'Type of crop: Corn'],
    }
  },
  {
    id: 'llm-a-0447', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Maintenance Testing', type: 'theory', difficulty: 'average',
    question: 'What is one of the main purposes of routine testing in agricultural machinery?',
    options: ['To check the aesthetic quality of the machine', 'To ensure compliance with international standards', 'To assess the durability of the machine over time', 'To increase the selling price of the machine'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0448', area: 'A', subTopic: 'power-engineering',
    topic: 'Energy Efficiency', type: 'theory', difficulty: 'easy',
    question: 'What is a primary concern when testing the efficiency of irrigation pumps?',
    options: ['Cost per unit area', 'Energy consumption versus water output', 'Durability against weather conditions', 'User satisfaction'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0449', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Machinery Testing Techniques', type: 'computation', difficulty: 'hard',
    question: 'During a test, a rice combining harvester was found to have an operational capacity of 1250 kg/hour. If it processes 2000 kg in total, calculate the total time taken for the operation. Given that the test was conducted on a smooth terrain with an average humidity of 65%, and the harvester weighs 1100 kg.',
    options: ['1.6 hours', '2.0 hours', '1.2 hours', '1.5 hours'],
    correctAnswer: 1,
    solution: {
      given: 'Operational capacity = 1250 kg/hour, Total processed = 2000 kg',
      steps: ['Total time = Total processed / Operational capacity = 2000 kg / 1250 kg/hour = 1.6 hours'],
      formula: 'Total Time = Total Processed / Operational Capacity',
      keyConcept: 'Understanding operational capacity is crucial for planning and efficiency.',
      commonMistakes: ['Dividing operational capacity by total processed', 'Confusing units of time', 'Ignoring factors affecting operational capacity'],
      extraneousGivens: ['Weight of harvester: 1100 kg', 'Average humidity: 65%', 'Terrain type: smooth', 'Total distance covered: 200 m'],
    }
  },
  {
    id: 'llm-a-0450', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Agricultural Machinery Standards', type: 'theory', difficulty: 'easy',
    question: 'Which of the following describes the verification testing of agricultural machinery?',
    options: ['Testing for user satisfaction', 'Confirming compliance with manufacturer specifications', 'Determining the aesthetic appeal of the machinery', 'Assessing the marketability of the equipment'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0451', area: 'A', subTopic: 'power-engineering',
    topic: 'Fuel Consumption', type: 'computation', difficulty: 'hard',
    question: 'A coconut harvester consumes 20 liters of fuel per day when operating for 10 hours and has an output of 1200 kg of coconuts. Calculate the fuel consumption per kg of coconut harvested. The machine\'s weight is also 600 kg, and it operates under a humidity of 70%.',
    options: ['0.015 liters/kg', '0.025 liters/kg', '0.020 liters/kg', '0.030 liters/kg'],
    correctAnswer: 2,
    solution: {
      given: 'Fuel consumption = 20 liters/day, Output = 1200 kg',
      steps: ['Fuel consumption per kg = Fuel Consumption / Output = 20 liters / 1200 kg = 0.01667 liters/kg'],
      formula: 'Fuel Consumption per kg = Total Fuel Consumption / Total Output',
      keyConcept: 'Understanding fuel efficiency can help optimize operational costs.',
      commonMistakes: ['Calculating total fuel instead of per kg', 'Not considering the operational time', 'Confusing liters with kilograms'],
      extraneousGivens: ['Machine weight: 600 kg', 'Humidity: 70%', 'Operating time: 10 hours', 'Field area: 2000 m²'],
    }
  },
  {
    id: 'llm-a-0452', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Testing Protocols', type: 'theory', difficulty: 'average',
    question: 'What type of test is conducted to ensure client acceptance of agricultural machinery?',
    options: ['Verification test', 'Acceptance test', 'Routine test', 'Field test'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0453', area: 'A', subTopic: 'power-engineering',
    topic: 'Machinery Power Output', type: 'computation', difficulty: 'hard',
    question: 'A power tiller is rated at 6.5 kW and operates at 90% efficiency. If it operates for 2 hours, how much work (in kilojoules) does it accomplish? The machine\'s total weight is 150 kg, and the work is done under a temperature of 35°C.',
    options: ['11700 kJ', '11700 J', '13080 kJ', '7800 J'],
    correctAnswer: 0,
    solution: {
      given: 'Power = 6.5 kW, Efficiency = 90%, Time = 2 hours',
      steps: ['Effective Power = Power × Efficiency = 6.5 kW × 0.90 = 5.85 kW', 'Work done (in kJ) = Effective Power × Time (in hours) × 3600 = 5.85 kW × 2 hours × 3600 = 42096 kJ'],
      formula: 'Work = Power × Time, with conversion factor of 1 kW = 1000 J/s',
      keyConcept: 'Power and time directly impact the work done by a machine.',
      commonMistakes: ['Forgetting to convert time to seconds', 'Using incorrect efficiency in calculations', 'Neglecting the conversion factor for kJ'],
      extraneousGivens: ['Machine weight: 150 kg', 'Ambient temperature: 35°C', 'Field size: 0.5 ha', 'Operating speed: 5 km/hr'],
    }
  },
  {
    id: 'llm-a-0454', area: 'A', subTopic: 'power-engineering',
    topic: 'Machinery Specifications', type: 'theory', difficulty: 'easy',
    question: 'What is the main purpose of conducting a verification test on agricultural machinery?',
    options: ['To determine if the machine meets the performance standards set by the manufacturer.', 'To assess the machine\'s efficiency during operation.', 'To evaluate the machine\'s appearance and design.', 'To measure soil condition before the machinery is used.'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: 'Verification tests confirm that machinery specifications are met according to manufacturer claims.',
      
      
    }
  },
  {
    id: 'llm-a-0455', area: 'A', subTopic: 'power-engineering',
    topic: 'Testing and Evaluation', type: 'theory', difficulty: 'average',
    question: 'What factors should be considered when testing agricultural machines in the field?',
    options: ['Topography and climate conditions', 'User acceptability and operational conditions', 'Previous performance of similar machines', 'Both A and B'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: 'Testing must consider environmental conditions and user feedback for accuracy.',
      
      
    }
  },
  {
    id: 'llm-a-0456', area: 'A', subTopic: 'power-engineering',
    topic: 'Efficiency Measurement', type: 'theory', difficulty: 'average',
    question: 'Which of the following measurements is NOT typically taken into account when assessing the efficiency of agricultural machinery?',
    options: ['Fuel consumption', 'Speed of operation', 'Aesthetic appearance', 'Output capacity'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: 'Efficiency assessments focus on performance metrics, not appearance.',
      
      
    }
  },
  {
    id: 'llm-a-0457', area: 'A', subTopic: 'power-engineering',
    topic: 'Power Requirements', type: 'theory', difficulty: 'easy',
    question: 'What is the primary role of the Agricultural Machinery Testing and Evaluation Center (AMTEC) in the Philippines?',
    options: ['To promote mechanical engineering standards.', 'To evaluate agricultural machinery for compliance with national policies.', 'To design new types of agricultural machinery.', 'To provide marketing strategies for machinery manufacturers.'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'AMTEC ensures that agricultural machinery meets national regulatory and safety standards.',
      
      
    }
  },
  {
    id: 'llm-a-0458', area: 'A', subTopic: 'power-engineering',
    topic: 'Machinery Capacity', type: 'computation', difficulty: 'hard',
    question: 'A rice thresher has threshed 2500 kg of palay in 4 hours, with losses as follows: blower loss of 80 kg, separation loss of 120 kg, unthreshed loss of 30 kg, and scattering loss of 70 kg. What is the percentage of blower loss and the actual capacity of the thresher in kg/hr?',
    options: ['3.1% and 625 kg/hr', '3.2% and 640 kg/hr', '3.0% and 625 kg/hr', '4.0% and 625 kg/hr'],
    correctAnswer: 0,
    solution: {
      given: 'Weight of threshed palay = 2500 kg, Threshing time = 4 hours, Blower loss = 80 kg',
      steps: ['Total losses = 80 + 120 + 30 + 70 = 300 kg', 'Blower Loss % = (80 / (2500 + 80)) * 100 = 3.1%', 'Actual Capacity = 2500 / 4 = 625 kg/hr'],
      formula: 'Blower Loss % = (Blower loss / (Weight threshed + Blower loss)) * 100; Actual Capacity = Weight threshed / Threshing time',
      keyConcept: 'Understanding losses and effective capacity is crucial for machine performance evaluation.',
      commonMistakes: ['Forgetting to add the blower loss to the total weight for percentage calculation', 'Not converting time to hours', 'Miscalculating actual capacity'],
      extraneousGivens: ['Separation loss: 120 kg', 'Unthreshed loss: 30 kg', 'Scattering loss: 70 kg'],
    }
  },
  {
    id: 'llm-a-0459', area: 'A', subTopic: 'power-engineering',
    topic: 'Testing Procedures', type: 'theory', difficulty: 'average',
    question: 'What is the purpose of conducting routine tests on agricultural machinery?',
    options: ['To confirm the performance standards during production.', 'To verify the aesthetic design of the machinery.', 'To assess the historical performance of similar models.', 'To create marketing strategies for new machinery.'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: 'Routine tests ensure consistent quality and compliance throughout production.',
      
      
    }
  },
  {
    id: 'llm-a-0460', area: 'A', subTopic: 'power-engineering',
    topic: 'Machinery Specifications', type: 'theory', difficulty: 'easy',
    question: 'What is the significance of the specifications in agricultural machinery design?',
    options: ['They provide aesthetic guidelines for the machinery.', 'They ensure the machinery is operationally reliable and meets safety standards.', 'They are only for the manufacturer\'s reference.', 'They simplify the machinery\'s user manual.'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'Specifications are critical for ensuring safety, reliability, and functional performance.',
      
      
    }
  },
  {
    id: 'llm-a-0461', area: 'A', subTopic: 'power-engineering',
    topic: 'Energy Efficiency', type: 'theory', difficulty: 'average',
    question: 'Which aspect is crucial for enhancing the energy efficiency of agricultural machinery?',
    options: ['Increasing the size of the engine.', 'Optimizing the design for aerodynamics.', 'Reducing the cost of labor for operation.', 'Enhancing the aesthetic design.'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'Aerodynamic optimization is key to reducing fuel consumption and enhancing efficiency.',
      
      
    }
  },
  {
    id: 'llm-a-0462', area: 'A', subTopic: 'power-engineering',
    topic: 'Field Testing', type: 'computation', difficulty: 'hard',
    question: 'A combine harvester was tested over an area of 1,200 m² in a rice field. The total harvested grain was 1,500 kg with 200 kg of losses due to improper settings and operating inefficiencies. Calculate the effective harvesting capacity in kg/h if the operation took 2 hours and include the percentage of effective loss. Note: The initial operating area was considered as 1,300 m².',
    options: ['750 kg/h and 13.33%', '800 kg/h and 14.29%', '900 kg/h and 15.38%', '850 kg/h and 12.50%'],
    correctAnswer: 1,
    solution: {
      given: 'Total harvested grain = 1500 kg, Losses = 200 kg, Operations time = 2 hours',
      steps: ['Effective harvesting capacity = Total grain harvested / Operation time = 1500 kg / 2 h = 750 kg/h', 'Effective loss = Losses / (Total harvested grain + Losses) * 100 = 200 kg / (1500 kg + 200 kg) * 100 ≈ 13.33%'],
      formula: 'Effective Capacity = Total grain harvested / Operation time; Effective Loss = Losses / (Total harvested + Losses) * 100',
      keyConcept: 'Accurate calculations help in assessing operational performance and identifying improvements.',
      commonMistakes: ['Failing to include losses in the effective capacity calculation', 'Misunderstanding area contribution to losses', 'Confusing time duration in hours with minutes'],
      extraneousGivens: ['Operating area: 1,300 m²', 'Initial losses: 200 kg', 'Time taken: 2 hours'],
    }
  },
  {
    id: 'llm-a-0463', area: 'A', subTopic: 'power-engineering',
    topic: 'Power Requirements', type: 'theory', difficulty: 'average',
    question: 'In designing agricultural machinery, what is an important factor to ensure reliability during operation?',
    options: ['Aesthetic value of the machine.', 'Selection of high-quality materials.', 'Marketing strategies.', 'Reducing operational costs.'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'Using high-quality materials enhances durability and reliability of machinery.',
      
      
    }
  },
  {
    id: 'llm-a-0464', area: 'A', subTopic: 'power-engineering',
    topic: 'Efficiency Measurements', type: 'computation', difficulty: 'hard',
    question: 'A corn shelling machine has a shelling capacity of 600 kg/h when operating under optimal conditions. During a test, it shelled 1,800 kg of corn in 3 hours. However, 150 kg was considered as shelling loss. Calculate the efficiency of the machine and note the percentage of shelling loss. Extraneous given: The machine\'s warranty period is 12 months.',
    options: ['85% efficiency and 7.69% loss', '90% efficiency and 8.33% loss', '88% efficiency and 6.94% loss', '92% efficiency and 10% loss'],
    correctAnswer: 1,
    solution: {
      given: 'Shelling capacity = 600 kg/h, Total shelled corn = 1,800 kg, Test duration = 3 hours, Loss = 150 kg',
      steps: ['Total output = 1800 kg - 150 kg = 1650 kg', 'Efficiency = (Total output / (Shelling capacity * Test duration)) * 100 = (1650 / (600 * 3)) * 100 = 91.67%', 'Loss percentage = (150 / 1800) * 100 = 8.33%'],
      formula: 'Efficiency = (Total output / (Shelling capacity × Time)) × 100; Loss % = (Loss / Total input) × 100',
      keyConcept: 'Efficiency and loss percentage highlight operational performance.',
      commonMistakes: ['Not adjusting output for losses', 'Incorrectly calculating total input', 'Overlooking the conversion of hours to the correct units'],
      extraneousGivens: ['Warranty period: 12 months'],
    }
  },
  {
    id: 'llm-a-0465', area: 'A', subTopic: 'power-engineering',
    topic: 'Mechanical Testing', type: 'theory', difficulty: 'average',
    question: 'What is considered a critical parameter in the mechanical testing of agricultural machinery?',
    options: ['The color of the machinery', 'The cost of the machinery', 'The operational reliability under varying conditions', 'The predicted market value of the machinery.'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: 'Operational reliability is a key indicator of machine performance across various conditions.',
      
      
    }
  },
  {
    id: 'llm-a-0466', area: 'A', subTopic: 'power-engineering',
    topic: 'Energy Optimization', type: 'computation', difficulty: 'hard',
    question: 'A tractor consumes 120 liters of diesel fuel to operate a field area of 1 hectare in 5 hours. If the tractor is rated to perform optimally at a fuel consumption rate of 20 liters per hour, calculate the actual efficiency of the tractor in % with extraneous values of the maximum fuel tank capacity of 150 liters.',
    options: ['75% efficiency', '80% efficiency', '85% efficiency', '90% efficiency'],
    correctAnswer: 0,
    solution: {
      given: 'Fuel consumed = 120 liters, Area = 1 hectare, Operation time = 5 hours, Rated consumption = 20 liters/hour',
      steps: ['Fuel consumption at optimal rate = 20 liters/hour × 5 hours = 100 liters', 'Actual efficiency = (Optimal consumption / Actual consumption) × 100 = (100 / 120) × 100 = 83.33%'],
      formula: 'Efficiency = (Optimal usage / Actual usage) × 100',
      keyConcept: 'Efficiency calculations show the relationship between expected and actual fuel consumption.',
      commonMistakes: ['Failing to consider time in calculations', 'Misinterpreting the consumption rate', 'Confusing area with fuel efficiency'],
      extraneousGivens: ['Maximum fuel tank capacity: 150 liters'],
    }
  },
  {
    id: 'llm-a-0467', area: 'A', subTopic: 'power-engineering',
    topic: 'Testing Equipment', type: 'theory', difficulty: 'average',
    question: 'What is the primary role of the test rig in machinery evaluation?',
    options: ['To provide a permanent installation for machinery.', 'To facilitate controlled testing of machinery performance.', 'To serve as a marketing platform for new machines.', 'To reduce the manufacturing cost of machinery.'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'Test rigs are critical for ensuring repeatable and controlled evaluation of machinery.',
      
      
    }
  },
  {
    id: 'llm-a-0468', area: 'A', subTopic: 'power-engineering',
    topic: 'Safety Standards', type: 'computation', difficulty: 'hard',
    question: 'A rice mill operating at 90% of its rated capacity has an output rate of 500 kg/h. If the safety standard requires a minimum output of 450 kg/h, what percentage of the rated capacity is actually utilized? Extraneous given: The maximum rated capacity of the mill is 600 kg/h.',
    options: ['83.33%', '90.00%', '95.00%', '100.00%'],
    correctAnswer: 0,
    solution: {
      given: 'Output rate = 500 kg/h, Rated capacity utilization = 90%, Minimum required output = 450 kg/h',
      steps: ['Rated capacity = 600 kg/h', 'Actual capacity utilized = (Output / Rated capacity) * 100 = (500 / 600) * 100 = 83.33%'],
      formula: 'Utilization % = (Actual output / Rated capacity) * 100',
      keyConcept: 'Utilization percentages indicate the efficiency and compliance with safety standards.',
      commonMistakes: ['Incorrectly calculating rated capacity from output', 'Ignoring the significance of safety standards in testing', 'Misjudging the percentage format'],
      extraneousGivens: ['Maximum rated capacity: 600 kg/h'],
    }
  },
  {
    id: 'llm-a-0469', area: 'A', subTopic: 'power-engineering',
    topic: 'Field Evaluation', type: 'theory', difficulty: 'easy',
    question: 'What is the main purpose of conducting a load test on agricultural machinery?',
    options: ['To determine the market value of the machine.', 'To evaluate the durability and performance under expected load conditions.', 'To enhance the aesthetic design of the machine.', 'To assess the ease of marketing the machinery.'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'Load tests provide insights into how machinery will handle real-world operating conditions.',
      
      
    }
  },
  {
    id: 'llm-a-0470', area: 'A', subTopic: 'power-engineering',
    topic: 'Power Calculations', type: 'computation', difficulty: 'average',
    question: 'A power tiller operates with an engine rated at 5.5 kW and consumes 1.5 liters of diesel fuel per hour. If the cost of diesel is Php 50 per liter, calculate the operational cost per kWh and the total cost for running the tiller for 10 hours. Extraneous information includes the weight of the tiller being 200 kg.',
    options: ['Php 375 and Php 750', 'Php 250 and Php 500', 'Php 200 and Php 400', 'Php 300 and Php 600'],
    correctAnswer: 1,
    solution: {
      given: 'Power = 5.5 kW, Fuel consumption = 1.5 liters/hour, Cost of diesel = Php 50/liter, Operation time = 10 hours',
      steps: ['Cost per hour = 1.5 liters/hour * Php 50/liter = Php 75', 'Total cost for 10 hours = 10 hours * Php 75/hour = Php 750', 'Operational cost per kWh = Total cost / Total energy consumed', 'Total energy consumed = Power * Time = 5.5 kW * 10 hours = 55 kWh', 'Operational cost per kWh = Php 750 / 55 kWh ≈ Php 13.64'],
      formula: 'Operational cost per kWh = Total cost / Total energy consumed',
      keyConcept: 'Understanding fuel costs is vital for evaluating machinery operational expenses.',
      commonMistakes: ['Not converting total operation correctly into energy units', 'Ignoring fuel cost implications in per kWh analysis', 'Confusing fuel consumption with operational time'],
      extraneousGivens: ['Weight of tiller: 200 kg'],
    }
  },
  {
    id: 'llm-a-0471', area: 'A', subTopic: 'testing-evaluation',
    topic: 'Verification Tests', type: 'theory', difficulty: 'average',
    question: 'Which of the following best describes verification tests for agricultural machines?',
    options: ['Tests conducted to determine the machine\'s performance in commercial settings', 'Tests to confirm if the machine\'s claims match actual data and results', 'Routine checks done on machines to ensure ongoing functionality', 'Initial assessments to gauge the machine\'s design aesthetics'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0472', area: 'A', subTopic: 'power-engineering',
    topic: 'Machine Performance Evaluation', type: 'theory', difficulty: 'average',
    question: 'Which factor is NOT typically considered when evaluating the performance of agricultural machines?',
    options: ['Technical specifications', 'Operational conditions', 'Market pricing of the machine', 'Environmental impact'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0473', area: 'A', subTopic: 'testing-evaluation',
    topic: 'Conducting Tests', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of conducting routine tests on agricultural machinery?',
    options: ['To assess the machine\'s market price', 'To check the specifications that might vary during production', 'To improve aesthetic appeal', 'To confirm the machine\'s branding'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0474', area: 'A', subTopic: 'power-engineering',
    topic: 'Field Testing Conditions', type: 'theory', difficulty: 'average',
    question: 'Which of the following conditions is NOT typically included in the testing of agricultural machinery?',
    options: ['Topography of the testing site', 'Weather conditions', 'Availability of spare parts', 'Soil conditions'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0475', area: 'A', subTopic: 'testing-evaluation',
    topic: 'Measurement in Tests', type: 'theory', difficulty: 'average',
    question: 'What is the significance of using SI units in testing agricultural machinery?',
    options: ['To ensure compliance with local regulations', 'To facilitate international comparisons', 'To simplify documentation processes', 'To enhance machine aesthetics'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0476', area: 'A', subTopic: 'testing-evaluation',
    topic: 'Types of Losses', type: 'theory', difficulty: 'hard',
    question: 'In the context of rice threshers, which of the following describes \'blower loss\'?',
    options: ['Loss of grains due to excessive moisture', 'Loss of grains blown away by the thresher\'s fan', 'Loss of unthreshed grains left in the field', 'Losses from scattering during handling'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0477', area: 'A', subTopic: 'power-engineering',
    topic: 'Machinery Capacity Calculation', type: 'computation', difficulty: 'easy',
    question: 'A rice thresher threshed 3000 kg of palay in 2 hours. What is its threshing capacity in kg/hr assuming no losses? Given: Grain moisture: 24%; Straw length: 50 cm; Test duration: 2 hours.',
    options: ['1500 kg/hr', '1200 kg/hr', '1800 kg/hr', '1600 kg/hr'],
    correctAnswer: 0,
    solution: {
      given: 'Weight of threshed palay = 3000 kg, Threshing time = 2 hours',
      steps: ['Calculate capacity: Threshing Capacity = Weight of threshed palay / Threshing time = 3000 kg / 2 hr = 1500 kg/hr'],
      formula: 'Capacity (kg/hr) = Weight of threshed palay (kg) / Threshing time (hr)',
      keyConcept: 'Threshing capacity is a measure of efficiency in agricultural machinery.',
      commonMistakes: ['Not converting hours to minutes', 'Adding loss percentages incorrectly'],
      extraneousGivens: ['Grain moisture: 24%', 'Straw length: 50 cm', 'Test duration: 2 hours'],
    }
  },
  {
    id: 'llm-a-0478', area: 'A', subTopic: 'power-engineering',
    topic: 'Loss Calculation', type: 'computation', difficulty: 'average',
    question: 'A rice thresher threshed 2500 kg of palay in 3 hours with losses of 80 kg for blower loss, 50 kg for separation loss, and 30 kg for scattering loss. Calculate the total percentage losses. Given: Ambient temperature: 28°C; Field size: 600 m²; Depth of field: 10 cm.',
    options: ['5.66%', '4.76%', '6.75%', '3.91%'],
    correctAnswer: 1,
    solution: {
      given: 'Weight of threshed palay = 2500 kg, Threshing time = 3 hours, Blower loss = 80 kg, Separation loss = 50 kg, Scattering loss = 30 kg',
      steps: ['Calculate total losses: Total Losses = Blower loss + Separation loss + Scattering loss = 80 kg + 50 kg + 30 kg = 160 kg', 'Calculate percentage losses: % Losses = (Total Losses / (Weight of threshed palay + Total Losses)) x 100 = (160 / (2500 + 160)) x 100 = 4.76%'],
      formula: '% Losses = (Total Losses / (Weight of threshed palay + Total Losses)) x 100',
      keyConcept: 'Loss percentage indicates the efficiency of the thresher.',
      commonMistakes: ['Forgetting to add threshed palay to total losses', 'Miscalculating the percentage'],
      extraneousGivens: ['Ambient temperature: 28°C', 'Field size: 600 m²', 'Depth of field: 10 cm'],
    }
  },
  {
    id: 'llm-a-0479', area: 'A', subTopic: 'power-engineering',
    topic: 'Efficiency Calculation', type: 'computation', difficulty: 'hard',
    question: 'A rice thresher has a total input of 2600 kg, and the output of clean threshed grains is 2100 kg. Calculate the efficiency of the thresher. Given: Test duration: 4 hours; Ambient pressure: 101.3 kPa; Grain to straw ratio: 0.5.',
    options: ['80.77%', '84.61%', '78.95%', '82.12%'],
    correctAnswer: 1,
    solution: {
      given: 'Total Input = 2600 kg, Output = 2100 kg',
      steps: ['Calculate Efficiency: Efficiency = (Output / Total Input) x 100 = (2100 / 2600) x 100 = 80.77%'],
      formula: 'Efficiency (%) = (Output / Total Input) x 100',
      keyConcept: 'Efficiency measures how effectively a thresher converts input to output.',
      commonMistakes: ['Confusing input with output', 'Incorrectly multiplying by 100'],
      extraneousGivens: ['Test duration: 4 hours', 'Ambient pressure: 101.3 kPa', 'Grain to straw ratio: 0.5'],
    }
  },
  {
    id: 'llm-a-0480', area: 'A', subTopic: 'power-engineering',
    topic: 'Power Requirement Calculation', type: 'computation', difficulty: 'hard',
    question: 'A corn sheller requires 15 kW of power to operate effectively. If it runs at 80% efficiency, what is its actual power input? Given: Voltage: 220 V; Current: 50 A; Operating time: 5 hours.',
    options: ['18.75 kW', '12.00 kW', '13.50 kW', '16.25 kW'],
    correctAnswer: 0,
    solution: {
      given: 'Power requirement = 15 kW, Efficiency = 80%',
      steps: ['Calculate actual power input: Actual Power Input = Power Requirement / Efficiency = 15 kW / 0.80 = 18.75 kW'],
      formula: 'Actual Power Input (kW) = Power Requirement (kW) / Efficiency (%)',
      keyConcept: 'Understanding power input and output helps in machinery efficiency assessment.',
      commonMistakes: ['Forgetting to convert efficiency to decimal', 'Using wrong power unit'],
      extraneousGivens: ['Voltage: 220 V', 'Current: 50 A', 'Operating time: 5 hours'],
    }
  },
  {
    id: 'llm-a-0481', area: 'A', subTopic: 'testing-evaluation',
    topic: 'Operational Stability Testing', type: 'computation', difficulty: 'average',
    question: 'An agricultural machine undergoes a running-in period of 10 hours before tests. If it operates reliably after this period, what percent of operational stability was achieved during testing if it was initially unstable for the first 2 hours? Given: Total test duration: 12 hours; Total field area: 1000 m².',
    options: ['83.33%', '91.67%', '76.67%', '80.00%'],
    correctAnswer: 0,
    solution: {
      given: 'Total test duration = 12 hours, Unstable period = 2 hours',
      steps: ['Calculate operational stability: Stability = ((Total Test Duration - Unstable Period) / Total Test Duration) x 100 = ((12 - 2) / 12) x 100 = 83.33%'],
      formula: 'Operational Stability (%) = ((Total Duration - Unstable Duration) / Total Duration) x 100',
      keyConcept: 'Operational stability is critical for the acceptance of agricultural machinery.',
      commonMistakes: ['Forgetting to subtract unstable duration', 'Confusing test duration with stable duration'],
      extraneousGivens: ['Total field area: 1000 m²', 'Total test duration: 12 hours'],
    }
  },
  {
    id: 'llm-a-0482', area: 'A', subTopic: 'power-engineering',
    topic: 'Power Requirement of Machinery', type: 'computation', difficulty: 'hard',
    question: 'A power tiller requires 7.5 kW to operate effectively. If it operates at a mechanical efficiency of 85%, what is the input power required? Given: Fuel consumption rate: 1.5 liters/hour; Fuel heating value: 32 MJ/liter.',
    options: ['8.82 kW', '9.50 kW', '7.25 kW', '6.67 kW'],
    correctAnswer: 0,
    solution: {
      given: 'Operating Power = 7.5 kW, Efficiency = 85%',
      steps: ['Calculate Input Power: Input Power = Operating Power / Efficiency = 7.5 kW / 0.85 = 8.82 kW'],
      formula: 'Input Power (kW) = Operating Power (kW) / Efficiency',
      keyConcept: 'Understanding power requirements assists in ensuring adequate energy supply.',
      commonMistakes: ['Forgetting to convert efficiency to decimal', 'Using incorrect power units'],
      extraneousGivens: ['Fuel consumption rate: 1.5 liters/hour', 'Fuel heating value: 32 MJ/liter'],
    }
  },
  {
    id: 'llm-a-0483', area: 'A', subTopic: 'testing-evaluation',
    topic: 'Testing and Evaluation Methods', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is a common method used for routine testing of agricultural machinery?',
    options: ['Visual inspection', 'Stress testing', 'Field performance testing', 'Acceptance testing'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0484', area: 'A', subTopic: 'testing-evaluation',
    topic: 'Testing Standards', type: 'theory', difficulty: 'average',
    question: 'The PAES standard for testing agricultural machinery primarily aims to ensure what?',
    options: ['Cost-effectiveness of the machinery', 'Safety and environmental compliance', 'Aesthetics of the design', 'Market competitiveness of products'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0485', area: 'A', subTopic: 'testing-evaluation',
    topic: 'Impact of Environment on Testing', type: 'theory', difficulty: 'average',
    question: 'Which environmental factor is most critical in determining the performance of agricultural machinery during testing?',
    options: ['Ambient temperature', 'Soil moisture content', 'Wind speed', 'Altitude'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0486', area: 'A', subTopic: 'power-engineering',
    topic: 'Operational Efficiency', type: 'theory', difficulty: 'hard',
    question: 'Why is it essential to evaluate the operational efficiency of farm machinery?',
    options: ['To assess the market price', 'To ensure compliance with environmental regulations', 'To maximize productivity and minimize costs', 'To improve aesthetic designs'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0487', area: 'A', subTopic: 'power-engineering',
    topic: 'Machinery Testing Frequency', type: 'theory', difficulty: 'easy',
    question: 'How often should routine testing be conducted on agricultural machinery to ensure optimal performance?',
    options: ['Once a year', 'Before every harvest season', 'Monthly', 'Only after a breakdown'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0488', area: 'A', subTopic: 'testing-evaluation',
    topic: 'Historical Data in Testing', type: 'theory', difficulty: 'average',
    question: 'Why is historical performance data important when evaluating agricultural machinery?',
    options: ['To compare with new models', 'To enhance aesthetic designs', 'To determine market pricing strategies', 'To comply with government regulations'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0489', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Machine Performance Evaluation', type: 'theory', difficulty: 'easy',
    question: 'What does a verification test aim to determine in agricultural machinery?',
    options: ['Whether the claims of the manufacturer conform to actual data', 'The cost-effectiveness of the machine', 'The user satisfaction level', 'The environmental impact of the machine'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0490', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Testing Standards', type: 'theory', difficulty: 'average',
    question: 'What agency conducts testing and evaluation of agricultural machinery in the Philippines?',
    options: ['Department of Agriculture (DA)', 'National Irrigation Administration (NIA)', 'Agricultural Machinery Testing and Evaluation Center (AMTEC)', 'Department of Environment and Natural Resources (DENR)'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0491', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Testing Procedures', type: 'theory', difficulty: 'average',
    question: 'In the testing of agricultural machinery, what is the purpose of the running-in period?',
    options: ['To test the durability of the machine', 'To make necessary adjustments prior to full testing', 'To evaluate user acceptance', 'To measure fuel consumption'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0492', area: 'A', subTopic: 'power-engineering',
    topic: 'Power Requirements', type: 'theory', difficulty: 'easy',
    question: 'What is the primary consideration when determining the power requirement for agricultural machinery?',
    options: ['Cost of operation', 'Weight of the machine', 'Type of crop being processed', 'Required tasks and conditions of use'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0493', area: 'A', subTopic: 'power-engineering',
    topic: 'Fuel Efficiency', type: 'theory', difficulty: 'average',
    question: 'How can the efficiency of an agricultural machine be assessed?',
    options: ['By measuring its speed only', 'By evaluating its output against the input power', 'By observing the type of fuel used', 'By counting the number of machines sold'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0494', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Testing Methods', type: 'computation', difficulty: 'hard',
    question: 'A rice thresher was tested with an input of 2500 kg of palay over a period of 4 hours. The losses recorded are: blower loss = 100 kg, separation loss = 150 kg, unthreshed loss = 60 kg, and scattering loss = 90 kg. Calculate the percentage losses for each category and the actual capacity in kg/hr. (Note: Total input = 2500 kg, actual capacity = weight of threshed palay / threshing time.)',
    options: ['Blower Loss: 3.9%, Separation Loss: 5.8%, Unthreshed Loss: 2.4%, Scattering Loss: 3.5%, Capacity: 625 kg/hr', 'Blower Loss: 4.0%, Separation Loss: 6.0%, Unthreshed Loss: 2.5%, Scattering Loss: 3.6%, Capacity: 620 kg/hr', 'Blower Loss: 5.0%, Separation Loss: 7.0%, Unthreshed Loss: 3.0%, Scattering Loss: 4.0%, Capacity: 620 kg/hr', 'Blower Loss: 2.5%, Separation Loss: 3.5%, Unthreshed Loss: 1.0%, Scattering Loss: 2.0%, Capacity: 550 kg/hr'],
    correctAnswer: 0,
    solution: {
      given: 'Input = 2500 kg, Blower loss = 100 kg, Separation loss = 150 kg, Unthreshed loss = 60 kg, Scattering loss = 90 kg, Threshing time = 4 hr',
      steps: ['Total Losses = 100 + 150 + 60 + 90 = 400 kg', 'Blower Loss % = (100 / (2500 + 100)) * 100 = 3.9%', 'Separation Loss % = (150 / (2500 + 150)) * 100 = 5.8%', 'Unthreshed Loss % = (60 / (2500 + 60)) * 100 = 2.4%', 'Scattering Loss % = (90 / (2500 + 90)) * 100 = 3.5%', 'Actual Capacity = 2500 kg / 4 hr = 625 kg/hr'],
      formula: 'Percentage Loss = (Loss / (Input + Loss)) * 100, Capacity = Input / Time',
      keyConcept: 'Percentage losses indicate the efficiency of the threshing operation.',
      commonMistakes: ['Forgetting to include loss in the denominator', 'Incorrectly calculating the total loss', 'Confusing weight limits with loss percentages'],
      extraneousGivens: ['Threshing time: 4 hours', 'Input weight: 2500 kg', 'Total losses: 400 kg'],
    }
  },
  {
    id: 'llm-a-0495', area: 'A', subTopic: 'power-engineering',
    topic: 'Machinery Efficiency', type: 'computation', difficulty: 'average',
    question: 'A combine harvester processes 3000 kg of rice in 5 hours while consuming 25 liters of diesel fuel. If the energy content of diesel is 35.8 MJ/L, what is the energy efficiency of the harvester in kg/MJ? (Note: Total energy used = fuel consumption x energy content; ignore operational losses for this calculation.)',
    options: ['2.61 kg/MJ', '3.12 kg/MJ', '4.35 kg/MJ', '5.00 kg/MJ'],
    correctAnswer: 1,
    solution: {
      given: 'Input weight = 3000 kg, Time = 5 hr, Fuel consumption = 25 L, Energy content = 35.8 MJ/L',
      steps: ['Total energy used = 25 L * 35.8 MJ/L = 895 MJ', 'Energy efficiency = 3000 kg / 895 MJ = 3.35 kg/MJ'],
      formula: 'Energy Efficiency = Input Weight / Total Energy Used',
      keyConcept: 'Energy efficiency measures the effectiveness of fuel use in relation to output.',
      commonMistakes: ['Ignoring the energy content of diesel', 'Calculating efficiency without energy conversion', 'Using the wrong input weight'],
      extraneousGivens: ['Time = 5 hours', 'Total energy = 895 MJ'],
    }
  },
  {
    id: 'llm-a-0496', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Machine Testing', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of conducting field tests on agricultural machinery?',
    options: ['To assess the theoretical design only', 'To measure machine performance in real conditions', 'To determine the cost of the machinery', 'To evaluate the speed of the machinery'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0497', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Testing Standards', type: 'theory', difficulty: 'hard',
    question: 'Which of the following is typically NOT a requirement for testing a mechanical rice transplanter?',
    options: ['The area must not be less than 1000 m2', 'Field sides should be at a 2:1 ratio', 'It should be tested in wet conditions', 'There must be sufficient headland for turning'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0498', area: 'A', subTopic: 'power-engineering',
    topic: 'Power Calculation', type: 'computation', difficulty: 'average',
    question: 'A rice mill has an input capacity of 500 kg/h and a total power output of 15 kW. If the machine operates with an efficiency of 80%, what is the actual power used for the operation? (Note: Ignore the weight of rice husk produced.)',
    options: ['12 kW', '15 kW', '18.75 kW', '7.5 kW'],
    correctAnswer: 0,
    solution: {
      given: 'Input capacity = 500 kg/h, Total power output = 15 kW, Efficiency = 80%',
      steps: ['Actual power used = Total power output × Efficiency = 15 kW × 0.8 = 12 kW'],
      formula: 'Actual Power = Total Power Output × Efficiency',
      keyConcept: 'Understanding efficiency helps in optimizing energy use.',
      commonMistakes: ['Confusing total power with actual power', 'Incorrectly calculating efficiency', 'Ignoring efficiency factor'],
      extraneousGivens: ['Input capacity: 500 kg/h', 'Total power output: 15 kW'],
    }
  },
  {
    id: 'llm-a-0499', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Testing Parameters', type: 'theory', difficulty: 'average',
    question: 'In conducting operational tests on agricultural machinery, which factor is crucial to consider?',
    options: ['The manufacturer\'s recommendations', 'The price of the equipment', 'The expected lifespan of the machinery', 'The color of the machine'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0500', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Design Evaluation', type: 'theory', difficulty: 'average',
    question: 'When preparing machine specifications, what is a critical aspect to include?',
    options: ['Aesthetic appeal', 'Comparative prices of local brands', 'Technical performance standards', 'Warranty information only'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0501', area: 'A', subTopic: 'power-engineering',
    topic: 'Energy Consumption', type: 'computation', difficulty: 'hard',
    question: 'A mechanical dryer uses 30 L of diesel per hour. If the heater consumes 120 kW and operates for 2 hours, determine the total energy consumption in kWh. (Note: Use the heating value of diesel as 35 MJ/L. Ignore losses in the system.)',
    options: ['2.5 kWh', '3.0 kWh', '4.0 kWh', '5.0 kWh'],
    correctAnswer: 1,
    solution: {
      given: 'Diesel consumption = 30 L/h, Heater power = 120 kW, Operation time = 2 h',
      steps: ['Energy from diesel = 30 L/h * 2 h * 35 MJ/L = 2100 MJ', 'Convert MJ to kWh: 2100 MJ / 3.6 = 583.33 kWh', 'Total power consumption = Heater power * time = 120 kW * 2 h = 240 kWh', 'Total energy consumption = 240 kWh + 583.33 kWh = 823.33 kWh'],
      formula: 'Total Energy (kWh) = Power (kW) * Time (h) + (Diesel consumption * Heating value) / 3.6',
      keyConcept: 'Understanding energy sources impacts operational costs.',
      commonMistakes: ['Neglecting to convert units correctly', 'Ignoring the heater\'s operation time', 'Misunderstanding energy conversion factors'],
      extraneousGivens: ['Heater consumes 120 kW', 'Diesel consumption = 30 L/h'],
    }
  },
  {
    id: 'llm-a-0502', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Testing Phases', type: 'theory', difficulty: 'easy',
    question: 'Which of the following types of tests is performed to determine that the machine is acceptable for use by clients?',
    options: ['Verification Test', 'Acceptance Test', 'Routine Test', 'Prototyping Test'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0503', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Technical Specifications', type: 'theory', difficulty: 'hard',
    question: 'What should be the primary basis for evaluating the overall performance of a machine?',
    options: ['Technical specifications and operational efficiency', 'Cost of production', 'Brand popularity', 'User\'s personal preference'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0504', area: 'A', subTopic: 'machinery-specifications',
    topic: 'Field Testing', type: 'theory', difficulty: 'average',
    question: 'Why is it important to consider environmental factors during the testing of agricultural machinery?',
    options: ['It affects the color of the machine', 'It determines the machinery\'s market price', 'It influences machine performance under actual operational conditions', 'It is mandated by law'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0505', area: 'A', subTopic: 'power-engineering',
    topic: 'Performance Metrics', type: 'computation', difficulty: 'hard',
    question: 'A tractor engine has a peak power of 100 hp and operates at an efficiency of 85%. If the engine is rated at 2200 RPM, what is the effective output power in kW? (Note: 1 hp = 0.7457 kW, and consider unnecessary parameters such as barometric pressure and fuel type.)',
    options: ['63.5 kW', '69.5 kW', '76.0 kW', '85.0 kW'],
    correctAnswer: 1,
    solution: {
      given: 'Peak power = 100 hp, Efficiency = 85%',
      steps: ['Convert hp to kW: 100 hp * 0.7457 kW/hp = 74.57 kW', 'Effective output power = 74.57 kW * 0.85 = 63.5 kW'],
      formula: 'Effective Output Power (kW) = Peak Power (hp) * Efficiency * 0.7457',
      keyConcept: 'Effective power output is crucial for assessing machine performance.',
      commonMistakes: ['Forgetting the conversion factor', 'Using wrong efficiency percentages', 'Misunderstanding peak power vs. effective power'],
      extraneousGivens: ['RPM: 2200', 'Barometric pressure: 101.3 kPa', 'Fuel type: Diesel'],
    }
  },
  {
    id: 'llm-a-0506', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'ABE Sensors', type: 'theory', difficulty: 'easy',
    question: 'What is the primary function of sensors in agricultural automation?',
    options: ['To replace human labor completely', 'To detect physical, chemical, or biological properties and convert them into measurable signals', 'To increase the size of agricultural machinery', 'To store data for long-term analysis'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0507', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'Automated Control Systems', type: 'theory', difficulty: 'easy',
    question: 'In a closed-loop control system, what is the role of the feedback signal?',
    options: ['To serve as the input for the actuator', 'To compare the actual output with the desired output', 'To amplify the control signal', 'To filter noise from the system'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0508', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'Precision Farming Systems', type: 'theory', difficulty: 'average',
    question: 'What technology is used in precision farming to optimize the application of fertilizers or pesticides?',
    options: ['GPS', 'Mechanical tillage', 'Conventional irrigation systems', 'Hand-picking of pests'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0509', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'Sensors', type: 'theory', difficulty: 'average',
    question: 'Which type of sensor is commonly used for monitoring soil moisture levels in agricultural applications?',
    options: ['Temperature sensor', 'Soil-Plant Moisture Sensor', 'Anemometer', 'Photodiode'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0510', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'Metrology Equipment', type: 'theory', difficulty: 'easy',
    question: 'What is metrology primarily concerned with in agricultural engineering?',
    options: ['Plant genetics', 'Measurement science and standards', 'Crop yield predictions', 'Ergonomics in farm machinery'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0511', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'Sensors', type: 'theory', difficulty: 'average',
    question: 'What type of sensor measures wind speed for agricultural applications?',
    options: ['Thermocouple', 'Anemometer', 'Hygrometer', 'Pyranometer'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0512', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'Automated Control Systems', type: 'computation', difficulty: 'hard',
    question: 'A greenhouse is set to maintain a temperature of 30°C. The current temperature is observed at 28°C. If the controller decides that a 2°C increase is needed and activates the heating system for 20 minutes. If the heater output increases the temperature by 1°C every 5 minutes, what will be the final temperature after the heater is activated? Given: Set Temperature = 30°C, Current Temperature = 28°C, Activation Time = 20 minutes, Temperature Increase Rate = 1°C/5 min.',
    options: ['30°C', '32°C', '28°C', '31°C'],
    correctAnswer: 0,
    solution: {
      given: 'Set Temperature = 30°C, Current Temperature = 28°C, Activation Time = 20 minutes, Increase Rate = 1°C/5 minutes.',
      steps: ['Time for temperature increase = 20 minutes / 5 minutes = 4', 'Total temperature increase = 4 × 1°C = 4°C', 'Final temperature = 28°C + 4°C = 32°C, but it can only reach 30°C.'],
      formula: 'Final Temperature = Current Temperature + (Increase Rate × Time)',
      keyConcept: 'Control systems use feedback to adjust outputs until the desired set point is achieved.',
      commonMistakes: ['Forgetting to limit the temperature to the set point', 'Using wrong time duration', 'Assuming linear increase without time limitation'],
      extraneousGivens: ['Initial room temperature: 25°C', 'Heater consumption: 1500W', 'External temperature: 22°C'],
    }
  },
  {
    id: 'llm-a-0513', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'Precision Farming Systems', type: 'computation', difficulty: 'hard',
    question: 'A farmer uses a variable rate technology (VRT) system to apply fertilizer. The average application rate is set at 120 kg/ha for 10 hectares. If the system operates 90% of the time due to efficiency losses, what is the actual amount of fertilizer applied? Given: Area = 10 ha, Application Rate = 120 kg/ha, System Efficiency = 90%.',
    options: ['1080 kg', '1200 kg', '1350 kg', '1000 kg'],
    correctAnswer: 0,
    solution: {
      given: 'Area = 10 ha, Application Rate = 120 kg/ha, Efficiency = 90%',
      steps: ['Calculate total fertilizer needed = Area × Application Rate = 10 ha × 120 kg/ha = 1200 kg', 'Adjust for efficiency: Actual Amount = Total Fertilizer × Efficiency = 1200 kg × 0.90 = 1080 kg'],
      formula: 'Actual Amount = Area × Application Rate × Efficiency',
      keyConcept: 'VRT systems adjust inputs based on real-time data, improving efficiency.',
      commonMistakes: ['Ignoring efficiency loss', 'Calculating total without considering discounting efficiency', 'Using incorrect area size'],
      extraneousGivens: ['Fertilizer cost: Php 1500', 'Transportation time: 2 hours', 'Weather conditions: sunny'],
    }
  },
  {
    id: 'llm-a-0514', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'SCADA Systems', type: 'theory', difficulty: 'average',
    question: 'What does SCADA stand for in agricultural applications?',
    options: ['Supervisory Control and Data Acquisition', 'Systematic Control and Data Adjustment', 'Sensor Control and Data Analysis', 'Supervised Control and Digital Access'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0515', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'Sensors', type: 'computation', difficulty: 'hard',
    question: 'A rainfall sensor collects data from a tipping bucket which tips every time 0.5 mm of rain is collected. If it has recorded 30 tips in one hour, what is the total rainfall measured in millimeters? Given: Tips per hour = 30, Rainfall per tip = 0.5 mm, Total Time = 1 hour.',
    options: ['15 mm', '10 mm', '20 mm', '12 mm'],
    correctAnswer: 0,
    solution: {
      given: 'Tips per hour = 30, Rainfall per tip = 0.5 mm, Total Time = 1 hour.',
      steps: ['Calculate total rainfall = Tips × Rainfall per tip = 30 tips × 0.5 mm/tip = 15 mm'],
      formula: 'Total Rainfall = Tips × Rainfall per Tip',
      keyConcept: 'Accurate measurement of rainfall is vital for irrigation management.',
      commonMistakes: ['Misunderstanding the tipping bucket mechanism', 'Calculating cumulative tips incorrectly', 'Assuming incorrect measurement units'],
      extraneousGivens: ['Bucket capacity: 1L', 'Total rainfall duration: 1 hour', 'Average temperature: 25°C'],
    }
  },
  {
    id: 'llm-a-0516', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'Humidity Sensors', type: 'theory', difficulty: 'easy',
    question: 'Which type of sensor is used for measuring humidity levels in agricultural environments?',
    options: ['Hygrometer', 'Thermometer', 'Barometer', 'Anemometer'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0517', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'Automated Control Systems', type: 'theory', difficulty: 'average',
    question: 'What is the main advantage of using automated control systems in agriculture?',
    options: ['Increased labor costs', 'Improved precision and efficiency', 'Higher dependency on manual labor', 'Reduced equipment lifespan'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0518', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'Automated Control Systems', type: 'theory', difficulty: 'hard',
    question: 'Which of the following is NOT a component of an automated control system?',
    options: ['Sensor', 'Actuator', 'Data storage unit', 'Controller'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0519', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'Precision Farming Systems', type: 'theory', difficulty: 'hard',
    question: 'What role does Remote Sensing play in Precision Agriculture?',
    options: ['Actual planting of seeds', 'Analyzing soil nutrient levels and crop health from a distance', 'Irrigation scheduling', 'Manual pest control'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0520', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'Humidity Sensors', type: 'theory', difficulty: 'average',
    question: 'Which sensor can measure air humidity using a hygroscopic dielectric material?',
    options: ['Resistive humidity sensors', 'Capacitive humidity sensors', 'Thermistors', 'Anemometers'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0521', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'Gas Sensors', type: 'theory', difficulty: 'average',
    question: 'What type of gas is primarily monitored using electrochemical sensors in animal housing?',
    options: ['Carbon dioxide', 'Nitrogen', 'Ammonia', 'Methane'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0522', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'Metrology Equipment', type: 'theory', difficulty: 'easy',
    question: 'In metrology, what does precision refer to?',
    options: ['Correctness of measurements', 'Repetitiveness of measurements under unchanged conditions', 'The absolute difference between true value and the measured value', 'Variability between different measuring instruments'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0523', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'Precision Farming Systems', type: 'computation', difficulty: 'hard',
    question: 'A drone equipped with multispectral sensors captures data over a 100-hectare farm. If the data collection rate is 4 hectares per minute, how long will it take to complete the monitoring of the entire farm? Given: Total Area = 100 hectares, Collection Rate = 4 hectares/minute.',
    options: ['25 minutes', '50 minutes', '20 minutes', '40 minutes'],
    correctAnswer: 0,
    solution: {
      given: 'Total Area = 100 hectares, Collection Rate = 4 hectares/minute.',
      steps: ['Total Time = Total Area / Collection Rate', 'Total Time = 100 hectares / 4 hectares/minute = 25 minutes'],
      formula: 'Total Time = Total Area / Collection Rate',
      keyConcept: 'Timely data collection is crucial for effective precision agriculture monitoring.',
      commonMistakes: ['Confusing area measurements', 'Not understanding the rate of data collection', 'Forgetting to divide correctly'],
      extraneousGivens: ['Drone weight: 2 kg', 'Battery life: 60 minutes', 'Flight speed: 20 km/h'],
    }
  },
  {
    id: 'llm-a-0524', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'Automated Control Systems', type: 'computation', difficulty: 'hard',
    question: 'An automated irrigation system is designed to deliver 5 liters of water per minute. If it operates for 1 hour and the system efficiency is 85%, how much actual water is delivered to the crops? Given: Delivery Rate = 5 liters/minute, Operation Time = 60 minutes, Efficiency = 85%.',
    options: ['250 liters', '300 liters', '255 liters', '280 liters'],
    correctAnswer: 0,
    solution: {
      given: 'Delivery Rate = 5 liters/minute, Operation Time = 60 minutes, Efficiency = 85%.',
      steps: ['Calculate total water intended: Total Water = Delivery Rate × Operation Time = 5 liters/minute × 60 minutes = 300 liters', 'Actual Water Delivered = Total Water × Efficiency = 300 liters × 0.85 = 255 liters'],
      formula: 'Actual Water Delivered = Total Water × Efficiency',
      keyConcept: 'Efficiency in systems is crucial for understanding actual output versus intended delivery.',
      commonMistakes: ['Not adjusting for efficiency correctly', 'Calculating intended output instead of actual output', 'Ignoring the units of measurement'],
      extraneousGivens: ['Pump power: 1.5 kW', 'Water temperature: 24°C', 'Area irrigated: 2 hectares'],
    }
  },
  {
    id: 'llm-a-0525', area: 'A', subTopic: 'Automation, Instrumentation and Control System',
    topic: 'Basic Principles of Sensors', type: 'theory', difficulty: 'easy',
    question: 'What is the primary function of a sensor in an agricultural system?',
    options: ['To provide power to agricultural machinery', 'To detect physical properties and convert them into measurable signals', 'To store data for later use', 'To communicate with humans remotely'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0526', area: 'A', subTopic: 'Automation, Instrumentation and Control System',
    topic: 'Control Systems', type: 'theory', difficulty: 'easy',
    question: 'In a closed-loop control system, what is the role of feedback?',
    options: ['To initiate the control signal', 'To measure the current state of the process and adjust accordingly', 'To eliminate the need for sensors', 'To increase power output'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0527', area: 'A', subTopic: 'Automation, Instrumentation and Control System',
    topic: 'Agricultural Sensors', type: 'theory', difficulty: 'average',
    question: 'Which type of sensor is best suited for monitoring soil moisture levels?',
    options: ['Temperature sensor', 'Soil-Plant Moisture sensor', 'Light sensor', 'Anemometer'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0528', area: 'A', subTopic: 'Automation, Instrumentation and Control System',
    topic: 'Precision Farming', type: 'theory', difficulty: 'average',
    question: 'What does Variable Rate Technology (VRT) aim to optimize in agriculture?',
    options: ['Labor costs in crop management', 'Use of fertilizers, pesticides, and water', 'Crop types and varieties', 'Harvesting schedules'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0529', area: 'A', subTopic: 'Automation, Instrumentation and Control System',
    topic: 'Agricultural Sensors', type: 'theory', difficulty: 'average',
    question: 'What characteristic differentiates a thermocouple from an RTD?',
    options: ['Thermocouples measure temperature based on resistance, while RTDs measure based on voltage.', 'RTDs require a power source, while thermocouples do not.', 'Thermocouples generate a voltage proportional to temperature, whereas RTDs change resistance.', 'RTDs are used for gas measurements, while thermocouples are for liquids.'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0530', area: 'A', subTopic: 'Automation, Instrumentation and Control System',
    topic: 'Light Sensors', type: 'theory', difficulty: 'average',
    question: 'What is the function of a Light Dependent Resistor (LDR) in agricultural systems?',
    options: ['To measure soil temperature', 'To detect moisture levels in the air', 'To control lighting based on sunlight intensity', 'To measure wind speed'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0531', area: 'A', subTopic: 'Automation, Instrumentation and Control System',
    topic: 'Data Management in Precision Farming', type: 'theory', difficulty: 'hard',
    question: 'What is the importance of using Geographic Information Systems (GIS) in precision agriculture?',
    options: ['To automate irrigation systems', 'To analyze spatial data for improved farm management', 'To replace conventional farming techniques', 'To detect pests in real-time'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0532', area: 'A', subTopic: 'Automation, Instrumentation and Control System',
    topic: 'Humidity Sensors', type: 'theory', difficulty: 'average',
    question: 'What is a typical use for capacitive humidity sensors in agriculture?',
    options: ['Irrigation scheduling', 'Monitoring crop growth', 'Controlling ventilation in livestock housing', 'Detecting rainfall events'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0533', area: 'A', subTopic: 'Automation, Instrumentation and Control System',
    topic: 'Rainfall Sensors', type: 'computation', difficulty: 'average',
    question: 'An automated irrigation system uses a tipping bucket rain gauge that tips every 0.5 mm of rainfall. The gauge recorded 15 tips in an hour. The temperature is 32°C, and the humidity is 60%. How much rainfall was recorded in mm?',
    options: ['5.0 mm', '3.0 mm', '1.0 mm', '8.0 mm'],
    correctAnswer: 0,
    solution: {
      given: 'tips = 15, tipping bucket = 0.5 mm/tip, temp = 32°C, humidity = 60%',
      steps: ['Calculate total rainfall: Rainfall = tips × tipping bucket amount = 15 × 0.5 mm = 7.5 mm'],
      formula: 'Rainfall (mm) = Tips × Tipping bucket amount (mm)',
      keyConcept: 'Total rainfall is calculated by multiplying the number of tips by the amount each tip represents.',
      commonMistakes: ['Forgetting to use tipping bucket value', 'Using temperature in the calculation', 'Misunderstanding how tips work'],
      extraneousGivens: ['Temperature: 32°C', 'Humidity: 60%'],
    }
  },
  {
    id: 'llm-a-0534', area: 'A', subTopic: 'Automation, Instrumentation and Control System',
    topic: 'Crop Sensors', type: 'computation', difficulty: 'hard',
    question: 'A farmer wants to monitor the NDVI of a corn field. He obtains an NDVI reading of 0.85 and 0.30 for two fields, respectively. If the monitoring device has a range from 0 to 1 and works optimally under standard conditions, what is the difference in NDVI readings?',
    options: ['0.55', '0.65', '0.85', '0.30'],
    correctAnswer: 0,
    solution: {
      given: 'NDVI field 1 = 0.85, NDVI field 2 = 0.30',
      steps: ['Calculate difference: Difference = NDVI 1 - NDVI 2 = 0.85 - 0.30 = 0.55'],
      formula: 'Difference = NDVI field 1 - NDVI field 2',
      keyConcept: 'NDVI is used to measure vegetation health, and the difference can indicate productivity.',
      commonMistakes: ['Misinterpreting NDVI values', 'Incorrect subtraction', 'Not considering NDVI\'s range'],
      extraneousGivens: ['Range of device: 0-1', 'Optimal conditions note'],
    }
  },
  {
    id: 'llm-a-0535', area: 'A', subTopic: 'Automation, Instrumentation and Control System',
    topic: 'Metrology in Agriculture', type: 'theory', difficulty: 'easy',
    question: 'What is the main goal of agricultural metrology?',
    options: ['To ensure all sensors are Wi-Fi enabled', 'To maintain accuracy and precision in measurements for agricultural practices', 'To develop new chemical fertilizers', 'To automate irrigation systems'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0536', area: 'A', subTopic: 'Automation, Instrumentation and Control System',
    topic: 'Automated Controls', type: 'theory', difficulty: 'average',
    question: 'What defines an open-loop control system?',
    options: ['It uses feedback to adjust outputs based on measurements.', 'It operates without feedback, executing commands directly.', 'It is more efficient than a closed-loop system.', 'It requires constant manual adjustment.'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0537', area: 'A', subTopic: 'Automation, Instrumentation and Control System',
    topic: 'Automated Control Components', type: 'computation', difficulty: 'hard',
    question: 'In a greenhouse, a temperature sensor detects 19 °C while the desired set-point is 22 °C. If the heater can increase the temperature by 5 °C in an hour, how much time is needed to reach the set-point?',
    options: ['1 hour', '30 minutes', '2 hours', '3 hours'],
    correctAnswer: 1,
    solution: {
      given: 'Current temperature = 19°C, Set-point = 22°C, Increase per hour = 5°C',
      steps: ['Calculate difference: Temperature difference = 22°C - 19°C = 3°C', 'Calculate time: Time = Temperature difference / Increase per hour = 3°C / 5°C/hour = 0.6 hours = 36 minutes'],
      formula: 'Time (h) = Temperature difference (°C) / Increase per hour (°C/h)',
      keyConcept: 'Understanding how to calculate the time needed to reach a set temperature is crucial in automation systems.',
      commonMistakes: ['Forgetting to subtract temperature', 'Using the wrong increase rate', 'Confusing minutes with hours'],
      extraneousGivens: ['Desired temperature: 22 °C', 'Current temperature: 19 °C', 'Heater\'s increase rate: 5 °C/hour'],
    }
  },
  {
    id: 'llm-a-0538', area: 'A', subTopic: 'Automation, Instrumentation and Control System',
    topic: 'Remote Sensing', type: 'theory', difficulty: 'average',
    question: 'What technology does remote sensing primarily utilize?',
    options: ['Satellite technology to collect data', 'Ground-based measurements', 'Internet-based data transfer', 'Local weather stations'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0539', area: 'A', subTopic: 'Automation, Instrumentation and Control System',
    topic: 'Environmental Control', type: 'theory', difficulty: 'average',
    question: 'What is the purpose of environmental control systems in livestock management?',
    options: ['To monitor the profitability of livestock', 'To optimize heating and cooling for animal welfare', 'To ensure adequate food supply', 'To automate milking processes'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0540', area: 'A', subTopic: 'Automation, Instrumentation and Control System',
    topic: 'Communication Networks', type: 'theory', difficulty: 'hard',
    question: 'In the context of automated control systems, what role do communication networks play?',
    options: ['They store historical operation logs.', 'They connect sensors, controllers, and actuators for coordinated actions.', 'They provide backup power for systems.', 'They filter out noise from sensor data.'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0541', area: 'A', subTopic: 'Automation, Instrumentation and Control System',
    topic: 'Gas Management', type: 'theory', difficulty: 'easy',
    question: 'Which type of gas sensor is commonly used for monitoring ammonia levels in poultry houses?',
    options: ['Infrared sensor', 'Electrochemical sensor', 'Photoacoustic sensor', 'Thermal sensor'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0542', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'ABE Sensors', type: 'theory', difficulty: 'easy',
    question: 'What is the primary function of a sensor in agricultural automation?',
    options: ['To control machinery directly', 'To detect physical, chemical, or biological properties', 'To serve as a power source', 'To replace human labor'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0543', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'ABE Sensors', type: 'theory', difficulty: 'average',
    question: 'Which of the following is NOT a typical use of a thermocouple in agriculture?',
    options: ['Monitoring drying temperatures in grain dryers', 'Monitoring soil moisture levels', 'Measuring exhaust temperatures in engines', 'Controlling processing plant temperature'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0544', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'Humidity Sensors', type: 'theory', difficulty: 'average',
    question: 'What type of humidity sensor uses a material whose resistance changes with moisture content?',
    options: ['Capacitive Humidity Sensors', 'Resistive Humidity Sensors', 'Psychrometers', 'Dew Point Sensors'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0545', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'Light Sensors', type: 'theory', difficulty: 'hard',
    question: 'Which light sensor is specifically designed to measure total global solar irradiance?',
    options: ['Photodiodes', 'Pyranometers', 'Lux Sensors', 'PAR Sensors'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0546', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'Rainfall Sensors', type: 'computation', difficulty: 'average',
    question: 'A tipping bucket rain gauge collects rain in a 0.2 mm bucket. If it tips 15 times in an hour, what is the total rainfall recorded in mm? The gauge is calibrated at 0.2 mm per tip. Assume the bucket has a capacity of 10 liters and weighs 1.5 kg when empty.',
    options: ['3.0 mm', '2.5 mm', '4.0 mm', '2.0 mm'],
    correctAnswer: 0,
    solution: {
      given: 'Tips = 15, Calibration = 0.2 mm/tip, Bucket capacity = 10 liters, Bucket weight = 1.5 kg',
      steps: ['Total Rainfall = Tips × Calibration = 15 × 0.2 mm = 3.0 mm'],
      formula: 'Total Rainfall (mm) = Tips × Calibration (mm/tip)',
      keyConcept: 'Rainfall measurements depend on the number of tips multiplied by the calibration factor.',
      commonMistakes: ['Including unnecessary values such as bucket capacity or weight', 'Incorrectly multiplying tips by the wrong calibration value'],
      extraneousGivens: ['Bucket capacity: 10 liters', 'Bucket weight: 1.5 kg'],
    }
  },
  {
    id: 'llm-a-0547', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'Wind Sensors', type: 'theory', difficulty: 'easy',
    question: 'What does an anemometer primarily measure?',
    options: ['Wind direction', 'Wind speed', 'Temperature changes', 'Humidity levels'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0548', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'Crop Sensors', type: 'theory', difficulty: 'average',
    question: 'What does NDVI stand for in the context of crop sensors?',
    options: ['Normalized Differential Vegetation Index', 'Normalized Difference Vegetation Index', 'Non-Diverse Vegetation Index', 'Normalized Diversity Variable Indicator'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0549', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'Automated Control Systems', type: 'computation', difficulty: 'hard',
    question: 'A closed-loop control system in an irrigation setup is designed to maintain a soil moisture level of 30%. If the sensor detects a moisture level of 25%, what percentage increase is required to reach the desired level? The system also has a maximum allowed deviation of 5%. Additionally, the sensor reading fluctuates due to environmental changes, averaging a variation of 2%.',
    options: ['16.67%', '20%', '18.75%', '25%'],
    correctAnswer: 0,
    solution: {
      given: 'Desired level = 30%, Current level = 25%, Max deviation = 5%, Sensor fluctuation = 2%',
      steps: ['Increase Needed = Desired - Current = 30% - 25% = 5%', 'Percentage Increase = (5% / Current) × 100 = (5% / 25%) × 100 = 20%'],
      formula: 'Percentage Increase = ((Desired - Current) / Current) × 100%',
      keyConcept: 'Understanding how to calculate required increases in monitored parameters for control systems.',
      commonMistakes: ['Confusing max deviation with actual increase needed', 'Incorrectly using fluctuating values in calculations'],
      extraneousGivens: ['Max deviation: 5%', 'Sensor fluctuation: 2%'],
    }
  },
  {
    id: 'llm-a-0550', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'Data Management Systems', type: 'theory', difficulty: 'average',
    question: 'What is the primary function of a Decision Support System (DSS) in precision agriculture?',
    options: ['To monitor machine operations in real time', 'To provide accurate weather forecasts', 'To analyze farm data for better decision-making', 'To automate irrigation schedules'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0551', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'Precision Farming Systems', type: 'theory', difficulty: 'easy',
    question: 'Which technology uses aerial platforms to gather data about crops and soil?',
    options: ['GIS', 'GPS', 'Remote Sensing', 'VRT'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0552', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'Metrology Equipment', type: 'theory', difficulty: 'average',
    question: 'What is the main purpose of metrology in agriculture?',
    options: ['To ensure uniformity of crop sizes', 'To monitor and calibrate measuring instruments', 'To assess plant growth rates', 'To replace traditional farming methods'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0553', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'Metrology Equipment', type: 'computation', difficulty: 'hard',
    question: 'If a load cell is calibrated to measure weights with an error of 2% and a grain bag weighs 500 kg according to the load cell, what is the maximum potential error in kg? Additionally, the load cell is rated for a maximum capacity of 1000 kg and has a nominal value of 5.0 mV/V.',
    options: ['10 kg', '20 kg', '15 kg', '25 kg'],
    correctAnswer: 1,
    solution: {
      given: 'Weight according to load cell = 500 kg, Error = 2%, Max capacity = 1000 kg, Nominal value = 5.0 mV/V',
      steps: ['Maximum potential error = (500 kg × 0.02) = 10 kg'],
      formula: 'Maximum Error = Weight × Error Percentage',
      keyConcept: 'Understanding the implications of calibration errors on measurements.',
      commonMistakes: ['Not applying the error percentage correctly', 'Using irrelevant values such as maximum capacity in calculations'],
      extraneousGivens: ['Max capacity: 1000 kg', 'Nominal value: 5.0 mV/V'],
    }
  },
  {
    id: 'llm-a-0554', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'Precision Farming', type: 'theory', difficulty: 'average',
    question: 'Which of the following is a benefit of using Variable Rate Technology (VRT) in agriculture?',
    options: ['Increased labor costs', 'Uniform application of fertilizers', 'Reduced input costs by precise application', 'Elimination of all weeds'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0555', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'Crop Sensors', type: 'theory', difficulty: 'hard',
    question: 'What type of sensor is used to detect nitrogen status in crops by measuring chlorophyll content?',
    options: ['NDVI sensor', 'Soil moisture sensor', 'Chlorophyll meter', 'Canopy temperature sensor'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0556', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'Automated Control Systems', type: 'theory', difficulty: 'easy',
    question: 'In a closed-loop control system, what is the feedback used for?',
    options: ['To provide input to the sensor', 'To adjust the set-point', 'To compare the actual output with the desired output', 'To increase system noise'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0557', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'Wind Sensors', type: 'theory', difficulty: 'average',
    question: 'What instrument is used to measure wind speed in agricultural applications?',
    options: ['Anemometer', 'Barometer', 'Thermometer', 'Hygrometer'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0558', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'Rainfall Sensors', type: 'computation', difficulty: 'hard',
    question: 'A weighing rain gauge measures precipitation and reports a weight of 15 kg. If 1 kg of water equals approximately 1 liter, what is the depth of rainfall in mm over a 100 m² area? The area covered by the gauge is 0.025 m² and the density of water is assumed to be 1000 kg/m³.',
    options: ['15 mm', '10 mm', '12 mm', '8 mm'],
    correctAnswer: 0,
    solution: {
      given: 'Weight of water = 15 kg, Area covered by gauge = 0.025 m², Total area = 100 m², Density of water = 1000 kg/m³',
      steps: ['Volume of water = Weight / Density = 15 kg / 1000 kg/m³ = 0.015 m³', 'Depth of rainfall = Volume / Area = 0.015 m³ / 100 m² = 0.00015 m = 15 mm'],
      formula: 'Depth (mm) = (Weight / Density) / Area',
      keyConcept: 'Calculating rainfall depth involves converting weight to volume and dividing by area.',
      commonMistakes: ['Forgetting to convert liters to mm', 'Using incorrect density values', 'Not accounting for the area of measurement'],
      extraneousGivens: ['Density of water: 1000 kg/m³', 'Area covered by gauge: 0.025 m²'],
    }
  },
  {
    id: 'llm-a-0559', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'Crop Sensors', type: 'theory', difficulty: 'easy',
    question: 'What does a canopy temperature sensor measure?',
    options: ['Soil moisture', 'Leaf surface temperature', 'Soil nutrient levels', 'Air humidity'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0560', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'Automated Control Systems', type: 'theory', difficulty: 'average',
    question: 'What is the role of an actuator in an automated control system?',
    options: ['To sense the output', 'To apply the control signal', 'To transform the energy into another form', 'To make decisions based on errors'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0561', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'Sensor Types', type: 'theory', difficulty: 'average',
    question: 'Which type of sensor is typically used for monitoring soil temperature?',
    options: ['Thermocouple', 'Capacitive humidity sensor', 'Photodiode', 'Lux sensor'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0562', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'Signal Conditioning', type: 'theory', difficulty: 'average',
    question: 'In sensor technology, what is signal conditioning primarily used for?',
    options: ['To amplify and filter electrical signals', 'To replace sensors in a system', 'To create a user interface', 'To automate the farming process'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0563', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'Control Systems', type: 'theory', difficulty: 'hard',
    question: 'What distinguishes a closed-loop control system from an open-loop control system?',
    options: ['It does not require sensors.', 'It uses feedback to adjust its operation.', 'It operates automatically without any input.', 'It is less accurate than open-loop systems.'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0564', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'Humidity Sensors', type: 'theory', difficulty: 'easy',
    question: 'Which type of humidity sensor uses a hygroscopic material to measure moisture content?',
    options: ['Capacitive humidity sensor', 'Psychrometer', 'Thermistor', 'Phototransistor'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0565', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'Precision Agriculture', type: 'theory', difficulty: 'easy',
    question: 'What technology is used to optimize agricultural inputs in precision farming?',
    options: ['Remote sensing', 'Artificial intelligence', 'Manual labor', 'Traditional farming methods'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0566', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'SCADA Systems', type: 'theory', difficulty: 'hard',
    question: 'What is the primary purpose of SCADA systems in agriculture?',
    options: ['To control irrigation systems remotely', 'To manage labor costs', 'To replace manual farming', 'To increase crop diversity'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0567', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'Data Management', type: 'theory', difficulty: 'average',
    question: 'Which of the following is a function of Geographic Information Systems (GIS) in agriculture?',
    options: ['To provide real-time weather data', 'To analyze spatial data for resource management', 'To automate crop planting', 'To optimize labor distribution'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0568', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'Power Management', type: 'theory', difficulty: 'easy',
    question: 'What is the main reason for using power amplification in agricultural automation?',
    options: ['To reduce the number of sensors required', 'To manage energy consumption', 'To control large equipment with small signals', 'To improve the aesthetic design of machinery'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0569', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'Measurement Accuracy', type: 'theory', difficulty: 'average',
    question: 'What does \'precision\' refer to in the context of measurements?',
    options: ['The closeness of a measurement to the true value', 'The consistency of repeated measurements', 'The range of values measured', 'The instrument\'s capacity to detect small changes'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0570', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'Soil Moisture Sensors', type: 'computation', difficulty: 'average',
    question: 'A capacitive soil moisture sensor measures a soil moisture content of 35%. The sensor has a range of 0-100% and reads a temperature of 25°C, an irrelevant value for the calculation. What is the actual moisture content indicated by the sensor?',
    options: ['25% moisture', '35% moisture', '45% moisture', '15% moisture'],
    correctAnswer: 1,
    solution: {
      given: 'Moisture Content: 35%, Temperature: 25°C',
      steps: [],
      formula: 'Moisture Content = Measured value',
      keyConcept: 'The sensor provides direct moisture content reading.',
      commonMistakes: ['Confusing temperature with moisture content'],
      extraneousGivens: ['Temperature: 25°C'],
    }
  },
  {
    id: 'llm-a-0571', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'Irrigation Systems', type: 'computation', difficulty: 'hard',
    question: 'An automated irrigation system is set to operate for 30 minutes, and the pump delivers water at a rate of 100 L/min. At the same time, a rainfall gauge indicates recent rainfall of 10.5 mm in the last hour, an irrelevant detail. What total volume of water will be delivered by the system during its operation?',
    options: ['2500 L', '3000 L', '1800 L', '1200 L'],
    correctAnswer: 1,
    solution: {
      given: 'Flow rate: 100 L/min, Operation time: 30 min, Rainfall: 10.5 mm',
      steps: ['Total volume = Flow rate × Operation time = 100 L/min × 30 min = 3000 L'],
      formula: 'Total Volume = Flow Rate × Time',
      keyConcept: 'Water delivered is calculated based on flow rate and time.',
      commonMistakes: ['Confusing flow rate with rainfall contribution', 'Forgetting to convert units if needed'],
      extraneousGivens: ['Rainfall: 10.5 mm'],
    }
  },
  {
    id: 'llm-a-0572', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'Metrology Basics', type: 'theory', difficulty: 'average',
    question: 'Which of the following accurately describes metrology?',
    options: ['The science of planting crops', 'The science of measurement', 'The science of soil types', 'The science of weather forecasting'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0573', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'Calibration', type: 'theory', difficulty: 'average',
    question: 'Why is regular calibration of measuring instruments important in agriculture?',
    options: ['To ensure only new instruments are used', 'To maintain accuracy in measurements', 'To reduce the number of instruments required', 'To improve the speed of data collection'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0574', area: 'A', subTopic: 'automation-instrumentation',
    topic: 'Data Management Systems', type: 'computation', difficulty: 'hard',
    question: 'A farmer uses a data management system to analyze crop yields. Over the last three weeks, the system recorded yields of 1.2 tons/ha, 1.4 tons/ha, and 1.1 tons/ha, with external factors like irrigation levels recorded, irrelevant for this calculation. What is the average yield over these weeks?',
    options: ['1.2 tons/ha', '1.3 tons/ha', '1.4 tons/ha', '1.1 tons/ha'],
    correctAnswer: 1,
    solution: {
      given: 'Yields: 1.2 tons/ha, 1.4 tons/ha, 1.1 tons/ha',
      steps: ['Average yield = (1.2 + 1.4 + 1.1) / 3 = 1.3 tons/ha'],
      formula: 'Average Yield = (Yield 1 + Yield 2 + Yield 3) / Number of yields',
      keyConcept: 'The average is calculated by summing yields and dividing by the count.',
      commonMistakes: ['Forgetting to divide by the correct number of data points'],
      extraneousGivens: ['Irrigation levels recorded'],
    }
  },
  {
    id: 'llm-a-0575', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of using sensors in agricultural automation?',
    options: ['To reduce labor costs', 'To provide data for analysis and decision-making', 'To improve aesthetic value of crops', 'To automate irrigation systems only'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0576', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'Which of the following sensors is commonly used to monitor soil moisture levels?',
    options: ['Temperature sensor', 'Humidity sensor', 'Soil-Plant Moisture sensor', 'Light sensor'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0577', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'In precision agriculture, what does VRT stand for?',
    options: ['Variable Rate Technology', 'Very Rapid Technology', 'Virtual Reality Training', 'Visual Resource Technology'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0578', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What is the role of GIS in agricultural management?',
    options: ['To measure crop yields directly', 'To analyze and visualize spatial data', 'To automate irrigation schedules', 'To supervise farm workers'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0579', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which sensor would most likely be used for monitoring crop temperature?',
    options: ['Thermistor', 'Capacitive Humidity Sensor', 'Optical Rain Sensor', 'Photodiode'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0580', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'hard',
    question: 'What is the main advantage of using remote sensing technologies in agriculture?',
    options: ['Increases labor requirements', 'Requires frequent manual data entry', 'Provides real-time crop monitoring without contact', 'Limits data collection to a single field'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0581', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'Which Philippine agency is responsible for irrigation project implementation?',
    options: ['Department of Agriculture (DA)', 'Department of Environment and Natural Resources (DENR)', 'National Irrigation Administration (NIA)', 'Department of Science and Technology (DOST)'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0582', area: 'A', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'A soil moisture sensor operates at 5V and consumes 15 mA of current. The ambient temperature is 25°C, and the sensor is installed 40 m from the control panel. Calculate the power consumed by the sensor. (Ignore the ambient temperature and distance for calculation.)',
    options: ['0.075 W', '0.3 W', '1.5 W', '0.5 W'],
    correctAnswer: 0,
    solution: {
      given: 'Voltage = 5V, Current = 15mA = 0.015A',
      steps: ['Calculate Power: P = Voltage × Current = 5V × 0.015A = 0.075W'],
      formula: 'P = V × I',
      keyConcept: 'Power is derived from voltage and current.',
      commonMistakes: ['Confusing power with energy', 'Using the wrong units', 'Ignoring the conversion of mA to A'],
      extraneousGivens: ['Ambient temperature: 25°C', 'Distance: 40 m'],
    }
  },
  {
    id: 'llm-a-0583', area: 'A', subTopic: '',
    topic: '', type: 'computation', difficulty: 'hard',
    question: 'A rainfall sensor records a total rainfall of 80 mm over a 5-day period while a tipping bucket gauge (0.2 mm per tip) indicates 400 tips. Calculate the total rainfall in liters per hectare over the same period. (Consider 1 mm = 1,000 L/ha.)',
    options: ['80,000 L/ha', '40,000 L/ha', '20,000 L/ha', '100,000 L/ha'],
    correctAnswer: 0,
    solution: {
      given: 'Total rainfall recorded = 80 mm, Tipping bucket gauge = 400 tips (0.2 mm each)',
      steps: ['Total rainfall from tipping bucket = 400 tips × 0.2 mm/tip = 80 mm', 'Convert to liters per hectare: 80 mm = 80,000 L/ha'],
      formula: 'Total rainfall (L/ha) = Total rainfall (mm) × 1,000 L/ha',
      keyConcept: 'Rainfall measurements can be converted to volume per hectare.',
      commonMistakes: ['Miscalculating conversions between mm and liters', 'Confusing total rainfall with daily rainfall', 'Not accounting for the tipping bucket gauge calibration'],
      extraneousGivens: ['Duration: 5 days', 'Tips recorded: 400'],
    }
  },
  {
    id: 'llm-a-0584', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'Which of the following sensors would you typically use to measure ambient air temperature and humidity in a greenhouse?',
    options: ['Soil-Plant Moisture Sensor', 'Capacitive Humidity Sensor', 'NDVI Sensor', 'Ultrasonic Anemometer'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0585', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What does NDVI stand for in the context of agricultural sensors?',
    options: ['Normalized Data Value Index', 'New Development Value Indicator', 'Normalized Difference Vegetation Index', 'Northern Development Value Indicator'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0586', area: 'A', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'A temperature sensor in a greenhouse reads 32°C but should be set to maintain 28°C for optimal growth. If the sensors are accurate, what is the error signal sent to the controller? Note: Ignore any calibration error and external disturbances.',
    options: ['-4°C', '4°C', '-12°C', '12°C'],
    correctAnswer: 0,
    solution: {
      given: 'Set-point = 28°C, Actual output = 32°C',
      steps: ['Error Signal Calculation: Error = Set-point - Actual = 28°C - 32°C = -4°C'],
      formula: 'Error = Set-point - Actual Output',
      keyConcept: 'Error signals are used to adjust control actions.',
      commonMistakes: ['Confusing error with the absolute temperature difference', 'Forgetting that the error can be negative', 'Misinterpreting the role of the set point in calculations'],
      extraneousGivens: ['Calibration error: None', 'External disturbances: None'],
    }
  },
  {
    id: 'llm-a-0587', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'hard',
    question: 'In automated irrigation systems, what component acts as the final control element that carries out the command from the controller?',
    options: ['Sensor', 'Controller', 'Actuator', 'Power Amplifier'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0588', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What is the role of a feedback signal in a closed-loop control system?',
    options: ['To increase the control signal', 'To provide information about the process output', 'To decrease the set-point', 'To ignore disturbances in the system'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0589', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'Which type of error is characterized by consistent deviations from the true value in measurements?',
    options: ['Random error', 'Systematic error', 'Precision error', 'Calibration error'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0590', area: 'A', subTopic: '',
    topic: '', type: 'computation', difficulty: 'hard',
    question: 'A farmer wants to apply fertilizer through a VRT system. If the recommended application rate is 150 kg/ha for corn and the area of his field is 2 hectares, how much fertilizer should he apply? (Ignore additional factors like soil condition and time of year.)',
    options: ['200 kg', '300 kg', '150 kg', '600 kg'],
    correctAnswer: 1,
    solution: {
      given: 'Application rate = 150 kg/ha, Area = 2 ha',
      steps: ['Calculate Total Fertilizer Needed: Total = Application rate × Area = 150 kg/ha × 2 ha = 300 kg'],
      formula: 'Total Fertilizer = Application rate × Area',
      keyConcept: 'Application rates in agriculture can be determined based on area.',
      commonMistakes: ['Forgetting to multiply by area', 'Confusing kg with g', 'Not considering specific crop requirements'],
      extraneousGivens: ['Field type: Corn', 'Additional factors: Not required for this calculation'],
    }
  },
  {
    id: 'llm-a-0591', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'Which sensor type would most likely be used for assessing wind speed in a corn field?',
    options: ['Ultrasonic Anemometer', 'Thermocouple', 'Light Dependent Resistor', 'Capacitive Humidity Sensor'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0592', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'hard',
    question: 'Which automated system could help farmers better manage irrigation during drought conditions?',
    options: ['GPS-guided tractors', 'Remote sensing technologies', 'Weather forecasting systems', 'All of the above'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0593', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What is the main benefit of integrating IoT with agricultural practices?',
    options: ['Increased dependence on manual labor', 'Real-time data monitoring and decision making', 'Higher costs due to increased technology use', 'Limited application across different crop types'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0594', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'Which of the following best describes a sensor?',
    options: ['A device that only measures temperature.', 'A device that converts energy from one form to another.', 'A device that detects physical, chemical, or biological properties.', 'A device that only provides data for displays.'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0595', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What principle do sensors operate on?',
    options: ['Transmission', 'Transduction', 'Calibration', 'Interference'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0596', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What is the primary use of a pH meter in agriculture?',
    options: ['To measure soil temperature.', 'To monitor humidity levels.', 'To assess soil acidity or alkalinity.', 'To track rainfall amounts.'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0597', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'Which of the following sensors would be most suitable for monitoring crop health?',
    options: ['Temperature sensor', 'Soil moisture sensor', 'NDVI sensor', 'Anemometer'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0598', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'What type of data does GIS primarily deal with?',
    options: ['Numerical data only', 'Spatial data', 'Text data', 'Audio data'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0599', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which Philippine agency is responsible for irrigation management?',
    options: ['Department of Agriculture (DA)', 'National Irrigation Administration (NIA)', 'Department of Environment and Natural Resources (DENR)', 'Philippine Atmospheric, Geophysical and Astronomical Services Administration (PAGASA)'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0600', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'hard',
    question: 'What is the main advantage of using Variable Rate Technology (VRT) in precision farming?',
    options: ['Increases labor requirements.', 'Reduces environmental impacts.', 'Standardizes all input applications.', 'Decreases operational costs.'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0601', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'hard',
    question: 'Which of these is a main component of a Supervisory Control and Data Acquisition (SCADA) system?',
    options: ['Soil sensors', 'Remote Terminal Units (RTUs)', 'Drones for aerial imaging', 'Hydroponic systems'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0602', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'What does NDVI stand for in agricultural sensors?',
    options: ['National Data Value Index', 'Normalized Difference Vegetation Index', 'Non-Digital Variable Indicator', 'Nutrient Density Value Indicator'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0603', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which type of humidity sensor is most commonly used in greenhouses?',
    options: ['Resistive humidity sensors', 'Psychrometers', 'Capacitive humidity sensors', 'Dew Point sensors'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0604', area: 'A', subTopic: '',
    topic: '', type: 'computation', difficulty: 'easy',
    question: 'An open-loop irrigation system is scheduled to operate for 60 minutes. A flow rate of 5 L/min is set, while the system has a total water capacity of 500 liters, the ambient temperature is 30°C, and the soil moisture is at 25%. How much water will the system dispense?',
    options: ['300 liters', '600 liters', '500 liters', '100 liters'],
    correctAnswer: 0,
    solution: {
      given: 'Flow rate = 5 L/min, Time = 60 min.',
      steps: ['Calculate total water dispensed: Total water = Flow rate × Time = 5 L/min × 60 min = 300 L.'],
      formula: 'Total water = Flow rate × Time',
      keyConcept: 'The flow rate multiplied by the duration gives the total volume of water used.',
      commonMistakes: ['Confusing flow rate with total capacity.', 'Including unnecessary values like ambient temperature.'],
      extraneousGivens: ['Total water capacity: 500 liters', 'Ambient temperature: 30°C', 'Soil moisture: 25%'],
    }
  },
  {
    id: 'llm-a-0605', area: 'A', subTopic: '',
    topic: '', type: 'computation', difficulty: 'hard',
    question: 'A rain gauge measures rainfall using a tipping bucket that tips after collecting 0.2 mm of rain. If it has tipped 15 times during a storm, how much rain has fallen? The gauge is located in the province of Pampanga, which has a humidity level of 70%, and the storm lasted for 3 hours. Calculate the total rainfall.',
    options: ['2.5 mm', '3.0 mm', '2.0 mm', '1.5 mm'],
    correctAnswer: 0,
    solution: {
      given: 'Tipping threshold = 0.2 mm, Tipped = 15 times.',
      steps: ['Calculate total rainfall: Total = Tipped count × Tipping threshold = 15 × 0.2 mm = 3.0 mm.'],
      formula: 'Total rainfall = Tipped count × Tipping threshold',
      keyConcept: 'Total rainfall is calculated by multiplying the number of tips by the volume per tip.',
      commonMistakes: ['Forgetting to multiply instead of adding.', 'Misunderstanding tipping threshold.'],
      extraneousGivens: ['Location: Pampanga', 'Humidity: 70%', 'Storm duration: 3 hours'],
    }
  },
  {
    id: 'llm-a-0606', area: 'A', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'A temperature sensor in a greenhouse is set to maintain 25°C. If the actual temperature is recorded at 22°C, calculate the error signal. The heater is rated at 1000 W, and the temperature sensor is calibrated for standard conditions at 1.5% error rate.',
    options: ['3°C', '2°C', '4°C', '1°C'],
    correctAnswer: 1,
    solution: {
      given: 'Set-point = 25°C, Actual temperature = 22°C.',
      steps: ['Calculate error signal: Error = Set-point - Actual = 25°C - 22°C = 3°C.'],
      formula: 'Error = Set-point - Actual',
      keyConcept: 'The error signal indicates how far the actual temperature deviates from the desired temperature.',
      commonMistakes: ['Confusing error with absolute temperature.', 'Not subtracting correctly.'],
      extraneousGivens: ['Heater rating: 1000 W', 'Calibration error rate: 1.5%'],
    }
  },
  {
    id: 'llm-a-0607', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'Which type of sensor monitors the speed of wind?',
    options: ['Anemometer', 'Thermometer', 'Hygrometer', 'Photometer'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0608', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What type of sensor measures soil moisture content?',
    options: ['Thermistor', 'Capacitive sensors', 'Phototransistors', 'Pressure sensors'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0609', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'What is the purpose of signal conditioning in sensor technology?',
    options: ['To amplify and filter signals.', 'To increase sensor sensitivity.', 'To reduce environmental effects.', 'To provide power to the sensor.'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0610', area: 'A', subTopic: '',
    topic: '', type: 'computation', difficulty: 'hard',
    question: 'In a soil moisture monitoring system, a resistive sensor indicates a resistance of 1500 ohms in wet soil. If the calibration shows a reference resistance of 2000 ohms for dry soil, calculate the estimated moisture level percentage. The sensor has a maximum range of 1000 ohms, the ambient temperature is 25°C, and the sensor output voltage is 2.5V.',
    options: ['25%', '33%', '42%', '50%'],
    correctAnswer: 3,
    solution: {
      given: 'Measured resistance = 1500 ohms, Reference resistance = 2000 ohms.',
      steps: ['Calculate moisture level: Moisture Level = (Reference Resistance - Measured Resistance) / (Reference Resistance) × 100 = (2000 - 1500) / 2000 × 100 = 25%.', 'Adjust for sensor range: Final Moisture Level = Max Range - Moisture Level = 100% - 25% = 75%.'],
      formula: 'Moisture Level (%) = ((Reference - Measured) / Reference) × 100',
      keyConcept: 'Sensor readings represent relative moisture levels between wet and dry states.',
      commonMistakes: ['Confusing resistance values with moisture percentages.', 'Forgetting to use the correct calibration.'],
      extraneousGivens: ['Ambient temperature: 25°C', 'Sensor output voltage: 2.5V', 'Sensor maximum range: 1000 ohms'],
    }
  },
  {
    id: 'llm-a-0611', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What does the use of GPS in precision agriculture primarily provide?',
    options: ['Real-time weather data.', 'Soil nutrient levels.', 'Accurate positioning and navigation.', 'Crop yield quantification.'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0612', area: 'A', subTopic: '',
    topic: '', type: 'computation', difficulty: 'hard',
    question: 'In an automated irrigation system, the pump operates at 1.5 kW and runs for 45 minutes each day. If the electric rate is ₱10 per kWh, what would be the daily cost of running the pump? The total field area is 1.2 hectares, the soil type is clay, and the environmental temperature is 28°C.',
    options: ['₱6.75', '₱8.25', '₱9.00', '₱7.50'],
    correctAnswer: 0,
    solution: {
      given: 'Power = 1.5 kW, Time = 45 minutes (0.75 hours), Rate = ₱10/kWh.',
      steps: ['Calculate daily energy consumption: Energy = Power × Time = 1.5 kW × 0.75 h = 1.125 kWh.', 'Calculate cost: Cost = Energy × Rate = 1.125 kWh × ₱10 = ₱11.25.'],
      formula: 'Cost = Power × Time × Rate',
      keyConcept: 'Electricity costs can be calculated using power consumption and time of use.',
      commonMistakes: ['Misunderstanding units of time (hours vs minutes).', 'Forgetting to convert minutes to hours.'],
      extraneousGivens: ['Field area: 1.2 hectares', 'Soil type: clay', 'Environmental temperature: 28°C'],
    }
  },
  {
    id: 'llm-a-0613', area: 'A', subTopic: 'automation-instrumentation-control-systems',
    topic: 'ABE Sensors', type: 'theory', difficulty: 'easy',
    question: 'What is the primary function of sensors in agricultural applications?',
    options: ['To detect physical, chemical, or biological properties', 'To solely convert energy into mechanical work', 'To create data without any processing', 'To replace human labor in all farming operations'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0614', area: 'A', subTopic: 'automation-instrumentation-control-systems',
    topic: 'Automated Control System', type: 'theory', difficulty: 'easy',
    question: 'In automated control systems, what does the term \'feedback\' refer to?',
    options: ['Data sent from sensors to controllers for error correction', 'Power amplification for actuators', 'Initial signals sent by operators', 'Remote communication between machines'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0615', area: 'A', subTopic: 'automation-instrumentation-control-systems',
    topic: 'Precision Farming Systems', type: 'theory', difficulty: 'average',
    question: 'Which of the following technologies is essential for precision agriculture?',
    options: ['Global Positioning Systems (GPS)', 'Traditional farming techniques', 'Manual data tracking', 'Single-crop farming methods'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0616', area: 'A', subTopic: 'automation-instrumentation-control-systems',
    topic: 'Metrology', type: 'theory', difficulty: 'average',
    question: 'What does \'accuracy\' in measurement refer to?',
    options: ['The degree of agreement with the true value', 'The consistency of measurement results', 'The range of values an instrument can measure', 'The complexity of the measurement equipment'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0617', area: 'A', subTopic: 'automation-instrumentation-control-systems',
    topic: 'ABE Sensors', type: 'computation', difficulty: 'average',
    question: 'A pH sensor is calibrated to measure from 0 to 14. When placed in a solution with a pH of 7.0, it gives a reading of 7.2. If the ambient temperature is 28°C and the calibration standard is set to 25°C, what is the error in the sensor\'s reading?',
    options: ['0.2', '0.5', '-0.2', '-0.5'],
    correctAnswer: 2,
    solution: {
      given: 'Measured value = 7.2, True value = 7.0',
      steps: ['Calculate error: Error = Measured value - True value = 7.2 - 7.0 = 0.2'],
      formula: 'Error = Measured value - True value',
      keyConcept: 'Error in sensor reading indicates the inaccuracy.',
      commonMistakes: ['Confusing calibration temperature effect', 'Ignoring ambient conditions', 'Calculating absolute instead of relative error'],
      extraneousGivens: ['Ambient temperature: 28°C', 'Calibration standard: 25°C', 'pH sensor capacity: 0 to 14'],
    }
  },
  {
    id: 'llm-a-0618', area: 'A', subTopic: 'automation-instrumentation-control-systems',
    topic: 'Automated Control System', type: 'theory', difficulty: 'hard',
    question: 'What is the function of a controller in an automated control system?',
    options: ['To monitor the process and decide corrective actions', 'To physically perform the actions required by the system', 'To record the entire system performance', 'To send commands to the power supply only'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0619', area: 'A', subTopic: 'automation-instrumentation-control-systems',
    topic: 'Precision Farming Systems', type: 'computation', difficulty: 'hard',
    question: 'An NDVI sensor measures the reflectance of a crop at 0.24 for red and 0.67 for near-infrared bands. Calculate the NDVI. Ambient humidity is 60% and temperature is 32°C, which are not needed for this calculation.',
    options: ['0.01', '0.63', '0.30', '-0.13'],
    correctAnswer: 1,
    solution: {
      given: 'Red reflectance = 0.24, NIR reflectance = 0.67',
      steps: ['NDVI = (NIR - Red) / (NIR + Red) = (0.67 - 0.24) / (0.67 + 0.24) = 0.43 / 0.91 = 0.472'],
      formula: 'NDVI = (NIR - Red) / (NIR + Red)',
      keyConcept: 'NDVI indicates plant health based on light reflectance.',
      commonMistakes: ['Confusing NIR and red values', 'Forgetting to add NIR and red values', 'Incorrectly calculating fractions'],
      extraneousGivens: ['Ambient humidity: 60%', 'Ambient temperature: 32°C'],
    }
  },
  {
    id: 'llm-a-0620', area: 'A', subTopic: 'automation-instrumentation-control-systems',
    topic: 'Metrology', type: 'theory', difficulty: 'easy',
    question: 'In metrology, what is sensitivity?',
    options: ['The ratio of output to input changes in a measuring device', 'The degree of accuracy of a measuring device', 'The maximum range of a device', 'The ability to measure different parameters'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0621', area: 'A', subTopic: 'automation-instrumentation-control-systems',
    topic: 'Precision Farming Systems', type: 'theory', difficulty: 'average',
    question: 'What is Variable Rate Technology (VRT) in precision agriculture?',
    options: ['Adjusting input applications based on field variability', 'Uniform application of inputs across entire fields', 'Monitoring soil conditions without changes', 'Using outdated farming techniques'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0622', area: 'A', subTopic: 'automation-instrumentation-control-systems',
    topic: 'ABE Sensors', type: 'computation', difficulty: 'average',
    question: 'A temperature sensor measures 25°C for ambient temperature but is set to activate a fan at 22°C. If the hysteresis setting is 2°C, at what temperature will the fan turn off? The voltage supply is 5V and not needed for calculation.',
    options: ['20°C', '22°C', '24°C', '26°C'],
    correctAnswer: 3,
    solution: {
      given: 'Setpoint = 22°C, Hysteresis = 2°C',
      steps: ['Turn off temperature = Setpoint + Hysteresis = 22°C + 2°C = 24°C'],
      formula: 'Turn off temperature = Setpoint + Hysteresis',
      keyConcept: 'Hysteresis prevents rapid cycling of the device.',
      commonMistakes: ['Confusing on and off temperatures', 'Adding hysteresis twice', 'Ignoring ambient conditions'],
      extraneousGivens: ['Voltage supply: 5V', 'Ambient temperature: 25°C'],
    }
  },
  {
    id: 'llm-a-0623', area: 'A', subTopic: 'automation-instrumentation-control-systems',
    topic: 'Automated Control System', type: 'theory', difficulty: 'hard',
    question: 'What role do actuators play in automated control systems?',
    options: ['They perform physical actions based on commands from the controller', 'They measure environmental variables continuously', 'They store incoming data for analysis', 'They send alerts about system performance'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0624', area: 'A', subTopic: 'automation-instrumentation-control-systems',
    topic: 'Precision Farming Systems', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is considered a remote sensing technique in agriculture?',
    options: ['Using drones to monitor crop health', 'Walking through fields to check soil moisture', 'Performing manual crop counts', 'Using traditional weather forecasts'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0625', area: 'A', subTopic: 'automation-instrumentation-control-systems',
    topic: 'ABE Sensors', type: 'computation', difficulty: 'average',
    question: 'A soil moisture sensor reads 30% moisture content but is calibrated to 50% at field capacity. Find the relative moisture percentage. At the same time, the ambient air pressure is 1.013 kPa which is irrelevant. What is the computed value?',
    options: ['60%', '50%', '70%', '75%'],
    correctAnswer: 0,
    solution: {
      given: 'Measured moisture = 30%, Maximum (field capacity) = 50%',
      steps: ['Relative moisture = (Measured moisture / Maximum) x 100% = (30% / 50%) x 100% = 60%'],
      formula: 'Relative moisture = (Measured moisture / Maximum) x 100%',
      keyConcept: 'Relative moisture percentage compares current and maximum capacities.',
      commonMistakes: ['Inverting measured and maximum moisture', 'Miscalculating the percentages', 'Adding unnecessary values'],
      extraneousGivens: ['Ambient air pressure: 1.013 kPa'],
    }
  },
  {
    id: 'llm-a-0626', area: 'A', subTopic: 'automation-instrumentation-control-systems',
    topic: 'Metrology', type: 'theory', difficulty: 'hard',
    question: 'Which of the following is NOT a type of error in measurements?',
    options: ['Systematic Errors', 'Random Errors', 'Intuitive Errors', 'Gross Errors'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0627', area: 'A', subTopic: 'automation-instrumentation-control-systems',
    topic: 'Automated Control System', type: 'theory', difficulty: 'average',
    question: 'In a closed-loop control system, what is primarily compared to minimize error?',
    options: ['Set-point and actual output', 'Input signals and noise', 'Ambient conditions and control signals', 'Historical data and predicted models'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0628', area: 'A', subTopic: 'automation-instrumentation-control-systems',
    topic: 'Precision Farming Systems', type: 'theory', difficulty: 'easy',
    question: 'Which organization in the Philippines is known for utilizing advanced farming data systems?',
    options: ['Department of Agriculture (DA)', 'National Labor Relations Commission (NLRC)', 'Department of Trade and Industry (DTI)', 'Philippine Atmospheric, Geophysical and Astronomical Services Administration (PAGASA)'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0629', area: 'A', subTopic: 'automation-instrumentation-control-systems',
    topic: 'ABE Sensors', type: 'computation', difficulty: 'hard',
    question: 'An infrared temperature sensor measures a crop temperature of 30°C. If the ambient temperature is 20°C, compute the sensor\'s temperature differential. Additionally, the sensor has a calibration drift of 1.5°C not needed for this calculation. What temperature differential will you compute?',
    options: ['10°C', '7.5°C', '5°C', '15°C'],
    correctAnswer: 0,
    solution: {
      given: 'Crop temperature = 30°C, Ambient temperature = 20°C',
      steps: ['Temperature differential = Crop temperature - Ambient temperature = 30°C - 20°C = 10°C'],
      formula: 'Temperature differential = Crop temperature - Ambient temperature',
      keyConcept: 'Temperature differential indicates how much the crop temperature exceeds that of the environment.',
      commonMistakes: ['Reversing the subtraction', 'Ignoring ambient conditions', 'Misunderstanding sensor calibration'],
      extraneousGivens: ['Calibration drift: 1.5°C'],
    }
  },
  {
    id: 'llm-a-0630', area: 'A', subTopic: 'automation-instrumentation-control-systems',
    topic: 'Metrology', type: 'theory', difficulty: 'average',
    question: 'Calibration of measurement instruments is primarily done to ensure what?',
    options: ['Accuracy in measurements', 'Low cost of instruments', 'Appearance of the device', 'Speed of reading measurements'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0631', area: 'A', subTopic: 'automation-instrumentation-control-systems',
    topic: 'Precision Farming Systems', type: 'computation', difficulty: 'average',
    question: 'In a GIS environment, data points representing crop yields are collected in a field measuring 50m x 100m. If the data points show the average yield per square meter is 2.5 kg and the soil type affects yield by a factor of 0.9, compute the total expected yield. Temperature during data collection was 28°C and is not needed for this calculation.',
    options: ['11250 kg', '6750 kg', '5000 kg', '4500 kg'],
    correctAnswer: 0,
    solution: {
      given: 'Field area = 50m x 100m, Average yield per square meter = 2.5 kg',
      steps: ['Calculate total area: Area = 50m * 100m = 5000m²', 'Calculate total yield = Area x Average yield = 5000m² x 2.5 kg/m² = 12500 kg', 'Adjust for soil type = 12500 kg * 0.9 = 11250 kg'],
      formula: 'Total yield = Area x Average yield x Soil Factor',
      keyConcept: 'Yield calculations must account for area and factors affecting productivity.',
      commonMistakes: ['Not adjusting for soil type', 'Incorrect area calculation', 'Ignoring nitrogen levels'],
      extraneousGivens: ['Temperature during data collection: 28°C'],
    }
  },
  {
    id: 'llm-a-0632', area: 'A', subTopic: 'automation-instrumentation-control',
    topic: 'ABE Sensors', type: 'theory', difficulty: 'easy',
    question: 'Which sensor is primarily used for monitoring soil moisture levels in agricultural practices?',
    options: ['Thermocouples', 'Ultrasonic Anemometer', 'Soil-Plant Moisture Sensors', 'Pyranometers'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0633', area: 'A', subTopic: 'automation-instrumentation-control',
    topic: 'Automated Control Systems', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of closed-loop control systems?',
    options: ['To eliminate the need for sensors', 'To monitor and adjust the system based on feedback', 'To operate only in open environments', 'To increase the manual intervention required'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0634', area: 'A', subTopic: 'automation-instrumentation-control',
    topic: 'Precision Farming Systems', type: 'theory', difficulty: 'average',
    question: 'What is Variable Rate Technology (VRT) used for in precision farming?',
    options: ['Maximizing uniform fertilizer application', 'Adjusting inputs based on field variability', 'Eliminating the use of technology', 'Measuring the growth rate of plants'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0635', area: 'A', subTopic: 'automation-instrumentation-control',
    topic: 'Smart Systems', type: 'theory', difficulty: 'hard',
    question: 'Which of the following is NOT a typical application of remote sensing in agriculture?',
    options: ['Monitoring vegetation indices', 'Calculating soil moisture', 'Determining seed depth', 'Detecting crop diseases'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0636', area: 'A', subTopic: 'automation-instrumentation-control',
    topic: 'Metrology', type: 'theory', difficulty: 'average',
    question: 'In metrology, what is the term for the difference between the measured value and the true value?',
    options: ['Precision', 'Error', 'Accuracy', 'Sensitivity'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0637', area: 'A', subTopic: 'automation-instrumentation-control',
    topic: 'Sensors', type: 'theory', difficulty: 'easy',
    question: 'Which sensor uses a dielectric material to measure humidity levels in agriculture?',
    options: ['Resistive humidity sensor', 'Capacitive humidity sensor', 'Thermistor', 'RTD'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0638', area: 'A', subTopic: 'automation-instrumentation-control',
    topic: 'Control Systems', type: 'theory', difficulty: 'easy',
    question: 'What component in a control system is responsible for executing actions based on controller signals?',
    options: ['Sensor', 'Controller', 'Actuator', 'Communication Network'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0639', area: 'A', subTopic: 'automation-instrumentation-control',
    topic: 'Automated Control Systems', type: 'theory', difficulty: 'average',
    question: 'What type of sensors provide feedback in a closed-loop control system?',
    options: ['Actuators', 'Controllers', 'Output devices', 'Sensors'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0640', area: 'A', subTopic: 'automation-instrumentation-control',
    topic: 'Sensors', type: 'theory', difficulty: 'average',
    question: 'Which of the following is the purpose of signal conditioning in sensor applications?',
    options: ['To amplify and filter signals', 'To convert signals into digital formats', 'To provide power supply', 'To create feedback loops'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0641', area: 'A', subTopic: 'automation-instrumentation-control',
    topic: 'Precision Farming', type: 'computation', difficulty: 'hard',
    question: 'In a precision farming application, a farmer uses NDVI sensors to optimize irrigation. The NDVI value is measured at 0.85 under normal conditions. An irrelevant data point indicates the sensor calibration temperature was 25°C. Calculate the irrigation requirement if the standard value is set at NDVI = 0.6. Use the formula: Irrigation Requirement = (Standard NDVI - Measured NDVI) x Constant, where Constant = 1000 mL.',
    options: ['250 mL', '500 mL', '350 mL', '700 mL'],
    correctAnswer: 2,
    solution: {
      given: 'Measured NDVI = 0.85, Standard NDVI = 0.6, Constant = 1000 mL, Extraneous: Calibration temperature = 25°C.',
      steps: ['Calculate: Irrigation Requirement = (0.6 - 0.85) x 1000 = -250 mL.', 'Since irrigation cannot be negative, it indicates no additional irrigation is needed.'],
      formula: 'Irrigation Requirement = (Standard NDVI - Measured NDVI) x Constant',
      keyConcept: 'Irrigation management uses NDVI values to assess water needs.',
      commonMistakes: ['Ignoring that a negative value indicates no irrigation is needed.', 'Using unnecessary calibrating temperature in the calculation.'],
      extraneousGivens: ['Calibration temperature = 25°C'],
    }
  },
  {
    id: 'llm-a-0642', area: 'A', subTopic: 'automation-instrumentation-control',
    topic: 'Sensors', type: 'computation', difficulty: 'hard',
    question: 'An agricultural sensor measures soil nitrogen concentration at 20 mg/kg and the recommended level is 50 mg/kg. The sensor operates at a voltage of 5 V (irrelevant for this calculation). Calculate the percentage deficiency in nitrogen concentration.',
    options: ['60%', '40%', '20%', '30%'],
    correctAnswer: 1,
    solution: {
      given: 'Measured Nitrogen = 20 mg/kg, Recommended Nitrogen = 50 mg/kg, Extraneous: Operating Voltage = 5 V.',
      steps: ['Calculate Deficiency = (Recommended - Measured) / Recommended × 100% = (50 - 20) / 50 × 100% = 60%.'],
      formula: 'Deficiency (%) = ((Recommended - Measured) / Recommended) × 100%',
      keyConcept: 'Understanding nutrient levels helps in soil management and crop health.',
      commonMistakes: ['Confusing deficiency with excess.', 'Not converting to percentage correctly.'],
      extraneousGivens: ['Operating Voltage = 5 V'],
    }
  },
  {
    id: 'llm-a-0643', area: 'A', subTopic: 'automation-instrumentation-control',
    topic: 'Automation and Control Systems', type: 'theory', difficulty: 'average',
    question: 'Which component is responsible for data visualization in a SCADA system?',
    options: ['Sensor', 'RTUs', 'Human-Machine Interface', 'Actuator'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0644', area: 'A', subTopic: 'automation-instrumentation-control',
    topic: 'Automated Control Systems', type: 'theory', difficulty: 'hard',
    question: 'What is the primary benefit of using SCADA systems for irrigation management?',
    options: ['Reduces the need for sensors', 'Enables real-time monitoring and control', 'Increases manual labor', 'Is limited to urban areas'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0645', area: 'A', subTopic: 'automation-instrumentation-control',
    topic: 'Control Systems', type: 'theory', difficulty: 'average',
    question: 'In the context of control systems, what does \'feedback\' refer to?',
    options: ['Data sent to sensors', 'Output from an actuator', 'Information sent back to the controller for adjustment', 'Input signals from operators'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0646', area: 'A', subTopic: 'automation-instrumentation-control',
    topic: 'Precision Farming Systems', type: 'theory', difficulty: 'easy',
    question: 'Which technology uses GPS and GIS for precise agricultural practices?',
    options: ['Laser Levelling Technology', 'Remote Sensing Technology', 'Variable Rate Technology', 'Data Management Systems'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0647', area: 'A', subTopic: 'automation-instrumentation-control',
    topic: 'Sensors', type: 'theory', difficulty: 'easy',
    question: 'Which sensor is ideal for temperature monitoring in a greenhouse?',
    options: ['Temperature sensors', 'Gas sensors', 'Soil moisture sensors', 'Humidity sensors'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0648', area: 'A', subTopic: 'automation-instrumentation-control',
    topic: 'Measurement Concepts', type: 'computation', difficulty: 'hard',
    question: 'A load cell measures the load applied and shows a reading of 450 kg (irrelevant data point is the maximum load capacity of 1000 kg). If the actual weight was 500 kg, what is the percentage error in the measurement?',
    options: ['10%', '15%', '20%', '5%'],
    correctAnswer: 1,
    solution: {
      given: 'Measured Load = 450 kg, Actual Load = 500 kg, Extraneous: Maximum Capacity = 1000 kg.',
      steps: ['Calculate Error = Actual - Measured = 500 - 450 = 50 kg.', 'Percentage Error = (Error / Actual) * 100% = (50 / 500) * 100 = 10%.'],
      formula: 'Percentage Error = (Actual - Measured) / Actual * 100%',
      keyConcept: 'Understanding error calculation is critical for effective measurements.',
      commonMistakes: ['Calculating error based on measured value rather than actual.'],
      extraneousGivens: ['Maximum Capacity = 1000 kg'],
    }
  },
  {
    id: 'llm-a-0649', area: 'A', subTopic: 'automation-instrumentation-control',
    topic: 'Measurement and Calibration', type: 'theory', difficulty: 'average',
    question: 'What is the objective of calibration in measuring instruments?',
    options: ['To assess operator performance', 'To ensure accuracy of measurements by comparing to standards', 'To minimize production costs', 'To avoid inspection procedures'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0650', area: 'A', subTopic: 'automation-instrumentation-control',
    topic: 'Metrology', type: 'theory', difficulty: 'average',
    question: 'Which of the following best describes \'precision\' in measurements?',
    options: ['The closeness to a true value', 'The repeatability of measurements under unchanged conditions', 'The average of a set of measurements', 'Accuracy of a measurement'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0651', area: 'A', subTopic: 'automation-instrumentation-control',
    topic: 'Sensors', type: 'theory', difficulty: 'easy',
    question: 'Which type of sensor detects ammonia levels in agricultural environments?',
    options: ['Optical sensor', 'Electrochemical sensor', 'Pressure sensor', 'Temperature sensor'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0652', area: 'A', subTopic: 'automation',
    topic: 'ABE Sensors', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is a common use of temperature sensors in agriculture?',
    options: ['Monitoring humidity in grain storage', 'Measuring soil pH levels', 'Monitoring drying temperatures in grain dryers', 'Detecting rainfall levels'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0653', area: 'A', subTopic: 'automation',
    topic: 'Remote Sensing', type: 'theory', difficulty: 'average',
    question: 'What is the primary function of Geographic Information Systems (GIS) in precision farming?',
    options: ['Calculating crop yield', 'Identifying pest resistance', 'Capturing, analyzing, and visualizing spatial data', 'Monitoring soil temperature'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0654', area: 'A', subTopic: 'automation',
    topic: 'Automated Control System', type: 'computation', difficulty: 'hard',
    question: 'A farmer uses an automated irrigation system that operates for 30 minutes daily, applying 8 liters of water per minute. The water usage is measured in cubic meters annually. If the system runs 360 days in a year, what is the total annual water usage in cubic meters? Assume a conversion factor of 1 m³ = 1000 liters. The irrigation system operates with a water pressure of 3 bar.',
    options: ['3.6 m³', '12.96 m³', '8.64 m³', '10.8 m³'],
    correctAnswer: 1,
    solution: {
      given: 'Flow rate = 8 L/min, Operation time = 30 min/day, Days = 360, Conversion = 1000 L/m³',
      steps: ['Daily water usage = 8 L/min × 30 min = 240 L/day', 'Annual water usage = 240 L/day × 360 days = 86400 L/year', 'Total in cubic meters = 86400 L/year ÷ 1000 L/m³ = 86.4 m³'],
      formula: 'Annual Water Usage (m³) = (Flow rate (L/min) × Operation time (min/day) × Days) ÷ 1000',
      keyConcept: 'Water management through automated systems optimizes resource usage.',
      commonMistakes: ['Confusing liters with cubic meters', 'Incorrect days of operation', 'Missing conversion from liters to cubic meters'],
      extraneousGivens: ['Water pressure: 3 bar', 'Operation time: 30 minutes', 'Flow rate: 8 liters/minute'],
    }
  },
  {
    id: 'llm-a-0655', area: 'A', subTopic: 'automation',
    topic: 'Soil Sensors', type: 'theory', difficulty: 'easy',
    question: 'What type of sensor is commonly used to measure soil moisture in agriculture?',
    options: ['Thermistor', 'Capacitive Moisture Sensor', 'Photodiode', 'Thermocouple'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0656', area: 'A', subTopic: 'automation',
    topic: 'Variable Rate Technology', type: 'theory', difficulty: 'average',
    question: 'What is the main advantage of Variable Rate Technology (VRT) in agriculture?',
    options: ['Increases the number of crops planted', 'Uniform application of inputs across the field', 'Adjusts inputs based on spatial variability', 'Eliminates the need for irrigation'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0657', area: 'A', subTopic: 'automation',
    topic: 'Data Management Systems', type: 'theory', difficulty: 'average',
    question: 'What purpose does the SARAI project serve in Philippine agriculture?',
    options: ['Soil quality testing', 'Crop advisory and weather forecasting', 'Automated irrigation systems', 'Pest control measures'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0658', area: 'A', subTopic: 'automation',
    topic: 'Automation Controls', type: 'theory', difficulty: 'easy',
    question: 'Which of the following statements correctly defines closed-loop control systems?',
    options: ['Systems that operate without feedback', 'Systems that adjust based on error signals', 'Systems that provide predetermined outputs', 'Systems that operate purely manually'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0659', area: 'A', subTopic: 'automation',
    topic: 'Humidty Sensors', type: 'computation', difficulty: 'hard',
    question: 'A capacitive humidity sensor measures relative humidity (RH) in a greenhouse. On a specific day, it registers 70% RH at a temperature of 25°C and 100% RH at a temperature of 30°C. Compute the dew point temperature on that specific day. Assume extraneous values of 3% error in the sensor readings and a calibration constant of 0.1.',
    options: ['24.0 °C', '22.5 °C', '23.2 °C', '25.7 °C'],
    correctAnswer: 3,
    solution: {
      given: 'Temp1=25°C, RH1=70%, Temp2=30°C, RH2=100%, Calibration=0.1',
      steps: ['Use RH to compute saturation vapor pressure (Es) using the formula: Es = 6.11 * 10^(7.5 * Temp/(Temp + 237.3)).', 'Determine vapor pressure (E) = (RH/100) * Es.', 'Finally, calculate dew point Temp using: Tdp = (237.3 * log(E/6.11)) / (7.5 - log(E/6.11)).'],
      formula: 'Dew Point (Tdp) = (237.3 * log(E/6.11)) / (7.5 - log(E/6.11))',
      keyConcept: 'Calculating dew point involves relative humidity and temperature.',
      commonMistakes: ['Incorrect use of temperature units', 'Forgetting conversion of humidity readings', 'Misapplication of the formula'],
      extraneousGivens: ['Calibration constant: 0.1', 'Error in sensor: 3%', 'Temperature at which full saturation is measured: 30°C'],
    }
  },
  {
    id: 'llm-a-0660', area: 'A', subTopic: 'automation',
    topic: 'Automation Controls', type: 'theory', difficulty: 'average',
    question: 'In automated control systems, what is the role of a controller?',
    options: ['Execute the commands without any input', 'Monitor and adjust the output based on feedback', 'Store historical data for future use', 'Measure the actual output of the system'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0661', area: 'A', subTopic: 'automation',
    topic: 'SCADA Systems', type: 'computation', difficulty: 'hard',
    question: 'A SCADA system collects data every 15 minutes from 12 different sensors throughout the day. If one sensor transmits 60 data points daily, calculate the total data collected by all sensors in a week, given the additional data collected for system maintenance is 25%.',
    options: ['6720 points', '5040 points', '8400 points', '7200 points'],
    correctAnswer: 2,
    solution: {
      given: 'Data points per sensor = 60 per day, Sensors = 12, Additional data = 25%',
      steps: ['Daily data per sensor = 60 points; thus for 12 sensors = 60 × 12 = 720 points', 'Weekly data = 720 points/day × 7 days = 5040 points', 'Additional data = 5040 points × 0.25 = 1260 points', 'Total = 5040 points + 1260 points = 6300 points'],
      formula: 'Weekly Data = (Data points/sensor × Number of sensors × Days) + (Weekly Data × Additional data)',
      keyConcept: 'SCADA systems collect vast amounts of data for monitoring processes.',
      commonMistakes: ['Incorrect day count', 'Omitting additional data', 'Wrong multiplication factors between data points'],
      extraneousGivens: ['Data collected for system maintenance: 25%', 'Measurement interval: 15 minutes', 'Daily sensor data: 60 points'],
    }
  },
  {
    id: 'llm-a-0662', area: 'A', subTopic: 'automation',
    topic: 'Light Sensors', type: 'theory', difficulty: 'easy',
    question: 'What type of sensor would you recommend for monitoring light intensity in a greenhouse?',
    options: ['Temperature sensor', 'Light Dependent Resistor (LDR)', 'Soil moisture sensor', 'Pressure sensor'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0663', area: 'A', subTopic: 'automation',
    topic: 'Rainfall Sensors', type: 'theory', difficulty: 'average',
    question: 'What is a primary function of a tipping bucket rain gauge in a farming system?',
    options: ['Measure soil moisture content', 'Collect and measure rainfall amounts', 'Monitor air temperature', 'Control irrigation systems'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0664', area: 'A', subTopic: 'automation',
    topic: 'Humidity Sensors', type: 'computation', difficulty: 'hard',
    question: 'A resistive humidity sensor indicates a relative humidity of 40% at a temperature of 20°C. If the sensor has a linear response of 0-100% RH corresponding to a voltage output of 0-5V, calculate the output voltage of the sensor. Assume a calibration offset of 0.1V is included in the readings, and additional irrelevant information includes the voltage supply of 12V and a resistance of 100 ohms.',
    options: ['1.9 V', '2.1 V', '1.6 V', '2.4 V'],
    correctAnswer: 2,
    solution: {
      given: 'Sensor RH% = 40%, Voltage range = 0-5V, Calibration offset = 0.1V',
      steps: ['Calculate output voltage without offset: (RH% / 100) * 5V = (40 / 100) * 5 = 2V', 'Add calibration offset: 2V + 0.1V = 2.1V'],
      formula: 'Output Voltage = (RH% / 100) * Voltage range + Calibration offset',
      keyConcept: 'Humidity sensors provide voltage outputs proportional to measured humidity levels.',
      commonMistakes: ['Confusing voltage range outputs', 'Ignoring the offset of the sensor', 'Misuse of resistance values in calculations'],
      extraneousGivens: ['Voltage supply: 12V', 'Resistance: 100 ohms'],
    }
  },
  {
    id: 'llm-a-0665', area: 'A', subTopic: 'automation',
    topic: 'Crop Sensors', type: 'theory', difficulty: 'average',
    question: 'What does the NDVI sensor measure in agricultural applications?',
    options: ['Soil moisture content', 'Air temperature', 'Plant health and biomass', 'Pesticide levels'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0666', area: 'A', subTopic: 'automation',
    topic: 'Power Systems', type: 'theory', difficulty: 'easy',
    question: 'Which agency in the Philippines is responsible for overseeing irrigation and water management?',
    options: ['Department of Agriculture', 'Department of Energy', 'National Irrigation Administration', 'Department of Environment and Natural Resources'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0667', area: 'A', subTopic: 'automation',
    topic: 'Soil Sensors', type: 'computation', difficulty: 'hard',
    question: 'A soil moisture sensor provides a readout of 25% moisture content and operates with a range of 0-50%. If the measured data needs to be converted into a scale of 0-10 for an automated system, what will be the converted output value? The inputs also include irrelevant values: the supply voltage of 9V and a resistance of 50 ohms.',
    options: ['5.0', '6.4', '3.2', '4.0'],
    correctAnswer: 0,
    solution: {
      given: 'Measured moisture = 25%, Range = 0-50%',
      steps: ['Output value = (Measured moisture / Max moisture) * Scale = (25% / 50%) * 10 = 5.0'],
      formula: 'Output Value = (Measured Value / Max Value) * Scale',
      keyConcept: 'Scaling sensor outputs allows integration into automated systems.',
      commonMistakes: ['Forgetting the conversion', 'Using wrong maximum values', 'Doing additional calculations that are unnecessary'],
      extraneousGivens: ['Supply voltage: 9V', 'Resistance: 50 ohms'],
    }
  },
  {
    id: 'llm-a-0668', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'What is the primary function of agricultural sensors?',
    options: ['To detect physical, chemical, or biological properties', 'To provide a source of energy for machinery', 'To replace manual labor entirely', 'To generate electricity for farm equipment'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0669', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which of the following is NOT a typical use of temperature sensors in agriculture?',
    options: ['Monitoring soil temperature', 'Calculating engine horsepower', 'Controlling temperatures in cold storage', 'Monitoring drying temperatures in grain dryers'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0670', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'What type of sensor is used to measure humidity in greenhouses?',
    options: ['Thermocouple', 'Pyranometer', 'Capacitive Humidity Sensor', 'Lux Sensor'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0671', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'hard',
    question: 'What is the difference between open-loop and closed-loop control systems?',
    options: ['Open-loop uses feedback, while closed-loop does not', 'Closed-loop has no feedback, while open-loop does', 'Closed-loop requires sensors, while open-loop does not', 'Open-loop is more accurate than closed-loop systems'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0672', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which automated control system is typically used for monitoring and controlling irrigation systems in the Philippines?',
    options: ['SCADA', 'PLC', 'DSS', 'IoT'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0673', area: 'A', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'A temperature sensor in a greenhouse is set to maintain 26°C. The actual temperature is measured to be 29°C. What is the error signal in the control system?',
    options: ['3°C', '2°C', '26°C', '29°C'],
    correctAnswer: 1,
    solution: {
      given: 'Set-point = 26°C, Actual Output = 29°C',
      steps: ['Error = Set-point - Actual Output', 'Error = 26°C - 29°C = -3°C'],
      formula: 'Error = Set-point - Actual Output',
      keyConcept: 'The error signal indicates how far the actual output is from the desired set-point.',
      commonMistakes: ['Confusing error with set-point', 'Calculating error as a positive value', 'Using incorrect temperature values'],
      extraneousGivens: ['Ambient temperature: 30°C', 'Humidity level: 60%', 'Greenhouse size: 10 m²'],
    }
  },
  {
    id: 'llm-a-0674', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'What does NDVI stand for in crop sensing applications?',
    options: ['Normalized Difference Vegetation Index', 'Natural Data Visual Index', 'New Digital Vegetative Imaging', 'Nested Data Variation Indicator'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0675', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which technology is essential in precision farming for navigation?',
    options: ['GIS', 'GPS', 'DSS', 'IoT'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0676', area: 'A', subTopic: '',
    topic: '', type: 'computation', difficulty: 'hard',
    question: 'A farmer uses a rainfall sensor that collects data every 0.5 mm of rain. If it rained 15 mm over the course of a day, how many pulses will the sensor send? The sensor has a response time of 1 second per pulse. The temperature during this time was 28°C and the humidity was 75%.',
    options: ['30 pulses', '35 pulses', '20 pulses', '25 pulses'],
    correctAnswer: 0,
    solution: {
      given: 'Rainfall = 15 mm, Sensor triggers every 0.5 mm',
      steps: ['Pulses = Total Rainfall / Rainfall per Pulse', 'Pulses = 15 mm / 0.5 mm = 30 pulses'],
      formula: 'Pulses = Total Rainfall / Rainfall per Pulse',
      keyConcept: 'Each pulse represents a specific amount of rainfall detected by the sensor.',
      commonMistakes: ['Misleading values from temperature and humidity', 'Incorrect division of rainfall', 'Confusing mm with cm'],
      extraneousGivens: ['Response time: 1 second per pulse', 'Temperature: 28°C', 'Humidity: 75%'],
    }
  },
  {
    id: 'llm-a-0677', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which method is commonly used to validate the performance of agricultural sensors?',
    options: ['Calibration', 'Interference', 'Duplication', 'Simulation'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0678', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What is the role of a controller in an automated control system?',
    options: ['It measures the output', 'It decides on corrective actions', 'It generates control signals', 'It acts as a power supply'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0679', area: 'A', subTopic: '',
    topic: '', type: 'computation', difficulty: 'hard',
    question: 'A soil moisture sensor indicates a current moisture level of 20% when the set-point is 30%. Calculate the error signal. Assume the actual moisture is measured after the soil temperature is noted to be 25°C, which is not used for the calculation.',
    options: ['-10%', '10%', '5%', '0%'],
    correctAnswer: 0,
    solution: {
      given: 'Set-point = 30%, Actual Moisture = 20%',
      steps: ['Error = Set-point - Actual Moisture', 'Error = 30% - 20% = 10%'],
      formula: 'Error = Set-point - Actual Moisture',
      keyConcept: 'The error signal reflects how much the current moisture level deviates from the desired level.',
      commonMistakes: ['Confusing actual and set-point values', 'Using incorrect percentage values', 'Mistaking the error signal for a positive value'],
      extraneousGivens: ['Soil temperature: 25°C'],
    }
  },
  {
    id: 'llm-a-0680', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is a common application of GPS in agriculture?',
    options: ['Monitoring livestock locations', 'Measuring soil nutrients', 'Determining crop yield', 'Calculating water levels'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0681', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What principle do capacitive humidity sensors operate on?',
    options: ['Change in electrical resistance', 'Change in capacitance', 'Change in voltage', 'Change in thermal conductivity'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0682', area: 'A', subTopic: '',
    topic: '', type: 'computation', difficulty: 'hard',
    question: 'An irrigation system requires 120 L of water per hour to maintain optimal soil moisture for rice crops. If a moisture sensor detects that the soil moisture is currently at 40% (ideal is 60%), how long (in minutes) should the system run to add the required water? Assume rain has added 5 L of water, and the irrigation pump delivers water at a rate of 2.5 L/min.',
    options: ['48 minutes', '60 minutes', '50 minutes', '40 minutes'],
    correctAnswer: 2,
    solution: {
      given: 'Water required = 120 L, Rain = 5 L, Pump rate = 2.5 L/min',
      steps: ['Net water needed = 120 L - 5 L = 115 L', 'Time = Net water needed / Pump rate', 'Time = 115 L / 2.5 L/min = 46 minutes'],
      formula: 'Time = Net water needed / Pump rate',
      keyConcept: 'Calculating the time to run the pump requires knowing the net water needed and the flow rate.',
      commonMistakes: ['Confusing net water with total water required', 'Using incorrect flow rate', 'Failing to convert minutes accurately'],
      extraneousGivens: ['Ideal moisture: 60%', 'Current moisture: 40%', 'Pump efficiency: 90%'],
    }
  },
  {
    id: 'llm-a-0683', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'Which of the following sensors can be used to measure light intensity in greenhouses?',
    options: ['Pyranometer', 'Thermocouple', 'Anemometer', 'Hydrometer'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0684', area: 'A', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What does the acronym \'DSS\' stand for in agricultural decision support systems?',
    options: ['Decision Support System', 'Data Statistical System', 'Development Support Solution', 'Diverse System Solutions'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0685', area: 'A', subTopic: '',
    topic: '', type: 'computation', difficulty: 'hard',
    question: 'A farmer utilized an automated irrigation system that applies water based on soil moisture levels. If the target moisture level is 25%, but the current reading is 35%, and it takes 2.5 kg of water to drop the moisture level by 1%, how much water needs to be applied to achieve the target level? Assume no rainfall or other water input. The temperature at the time of measurement was 32°C.',
    options: ['25 kg', '30 kg', '20 kg', '15 kg'],
    correctAnswer: 0,
    solution: {
      given: 'Target moisture = 25%, Current moisture = 35%, Water needed per 1% = 2.5 kg',
      steps: ['Moisture difference = Current moisture - Target moisture', 'Moisture difference = 35% - 25% = 10%', 'Water to apply = Moisture difference × Water needed per 1%', 'Water to apply = 10% × 2.5 kg = 25 kg'],
      formula: 'Water to apply = Moisture difference × Water needed per 1%',
      keyConcept: 'Identifying the water required involves calculating the difference in moisture levels and knowing the water requirement per percentage.',
      commonMistakes: ['Not converting the percentage difference to a weight', 'Using incorrect values for water per percentage', 'Confusing moisture levels'],
      extraneousGivens: ['Current temperature: 32°C'],
    }
  },
  {
    id: 'llm-a-0686', area: 'A', subTopic: 'project-management',
    topic: 'Project Definition', type: 'theory', difficulty: 'easy',
    question: 'What is defined as a collaborative enterprise, frequently involving research or design, that is carefully planned to achieve a particular aim?',
    options: ['Project', 'Program', 'Feasibility Study', 'Initiative'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0687', area: 'A', subTopic: 'project-management',
    topic: 'Project Timeline', type: 'theory', difficulty: 'easy',
    question: 'What refers to the period indicating the proposed date of start and completion of the project?',
    options: ['Project Timeline', 'Project Schedule', 'Project Duration', 'Project Completion'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0688', area: 'A', subTopic: 'project-management',
    topic: 'Personel and Resources', type: 'theory', difficulty: 'average',
    question: 'Which document describes the personnel/staff and material resources needed by the project expressed in budgetary terms?',
    options: ['Budgetary Requirement', 'Financial Report', 'Budget Summary', 'Financial Summary'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0689', area: 'A', subTopic: 'project-management',
    topic: 'Risk Analysis', type: 'theory', difficulty: 'average',
    question: 'Which analysis method determines which individual project risks have the most potential impact by correlating variations in project outcomes?',
    options: ['Impact assessment', 'Impact analysis', 'Risk analysis', 'Sensitivity analysis'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0690', area: 'A', subTopic: 'project-management',
    topic: 'Budgeting', type: 'theory', difficulty: 'hard',
    question: 'Which section of a Feasibility Study write-up covers demand and markets for a project’s outputs?',
    options: ['Socio-economic feasibility', 'Financial feasibility', 'Technical feasibility', 'Market feasibility'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0691', area: 'A', subTopic: 'project-management',
    topic: 'Agencies and Laws', type: 'theory', difficulty: 'easy',
    question: 'What does RA 10601 aim to provide in relation to agriculture and fisheries?',
    options: ['Support modernization', 'Regulate procurement', 'Promote environmental compliance', 'Manage local powers'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0692', area: 'A', subTopic: 'project-management',
    topic: 'CPES Evaluation', type: 'theory', difficulty: 'average',
    question: 'What does CPES stand for in the context of construction projects?',
    options: ['Constructors Performance Evaluation System', 'Contractors Performance Evaluation System', 'Construction Performance Evaluation System', 'Constructors Project Evaluation System'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0693', area: 'A', subTopic: 'project-management',
    topic: 'Project Management', type: 'theory', difficulty: 'average',
    question: 'Which agency is responsible for implementing government procurement policies in the Philippines?',
    options: ['DBM', 'NEDA', 'DOF', 'DA'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0694', area: 'A', subTopic: 'R&D and Extension',
    topic: 'Project Implementation', type: 'theory', difficulty: 'easy',
    question: 'What section of a Feasibility Study discusses the technical viability of machinery to be procured?',
    options: ['Socio-economic feasibility', 'Financial feasibility', 'Technical feasibility', 'Market feasibility'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0695', area: 'A', subTopic: 'R&D and Extension',
    topic: 'R&D Impact', type: 'theory', difficulty: 'hard',
    question: 'What section of the Feasibility Study evaluates the socio-economic impact of a project?',
    options: ['Management Feasibility', 'Socio-economic feasibility', 'Financial feasibility', 'Technical feasibility'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0696', area: 'A', subTopic: 'R&D and Extension',
    topic: 'Market Feasibility', type: 'theory', difficulty: 'average',
    question: 'What defines market feasibility in a Feasibility Study?',
    options: ['Cost analysis', 'Demand assessment', 'Technical calculations', 'Funding analysis'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0697', area: 'A', subTopic: 'R&D and Extension',
    topic: 'Field Testing', type: 'computation', difficulty: 'average',
    question: 'If a rice irrigation project requires 2000 m³ of water per hectare, and the farm area is 5 hectares, but the water reservoir capacity is 12000 m³, how much water is needed for irrigation assuming the reservoir is full? Additionally, the ambient temperature is 35°C and the pump efficiency is 80%. What is the total water needed?',
    options: ['10000 m³', '12000 m³', '8000 m³', '15000 m³'],
    correctAnswer: 0,
    solution: {
      given: 'Water requirement per hectare = 2000 m³; Area = 5 ha; Reservoir capacity = 12000 m³; Ambient temperature = 35°C; Pump efficiency = 80%',
      steps: ['Calculate total water needed: 2000 m³/ha × 5 ha = 10000 m³', 'Since the reservoir can hold up to 12000 m³, sufficient water is available.'],
      formula: 'Total Water = Water requirement per hectare × Area',
      keyConcept: 'Understanding irrigation requirements and reservoir capacities is crucial for effective agricultural practices.',
      commonMistakes: ['Ignoring reservoir capacity', 'Incorrectly applying pump efficiency', 'Failing to convert hectares to cubic meters'],
      extraneousGivens: ['Ambient temperature: 35°C', 'Reservoir capacity: 12000 m³', 'Pump efficiency: 80%'],
    }
  },
  {
    id: 'llm-a-0698', area: 'A', subTopic: 'R&D and Extension',
    topic: 'Feasibility Studies', type: 'computation', difficulty: 'average',
    question: 'To prepare a feasibility study, a cooperative estimates the total project cost at ₱4,500,000. If the minimum cost of FS preparation is set at 5% of the first ₱50 million, how much is the cost for the feasibility study preparation? Also, the project duration is 12 months, and other operating costs are ₱100,000. Calculate the total initial costs.',
    options: ['₱225,000', '₱100,000', '₱250,000', '₱350,000'],
    correctAnswer: 0,
    solution: {
      given: 'Project cost = ₱4,500,000; Minimum FS preparation cost = 5% of ₱50 million; Duration = 12 months; Other operating costs = ₱100,000',
      steps: ['Calculate FS preparation cost: 5% of ₱4,500,000 = ₱225,000', 'Total initial costs = FS preparation + Other operating costs = ₱225,000 + ₱100,000 = ₱325,000'],
      formula: 'FS cost = Project cost × 5%, Total initial costs = FS preparation + Other costs',
      keyConcept: 'Understanding financial requirements and accurate budgeting is critical for project success.',
      commonMistakes: ['Calculating the percentage incorrectly', 'Ignoring other costs', 'Mistaking the total project cost for the percentage basis'],
      extraneousGivens: ['Project duration: 12 months', 'Other operating costs: ₱100,000'],
    }
  },
  {
    id: 'llm-a-0699', area: 'A', subTopic: 'power-engineering',
    topic: 'Energy Conversion Systems', type: 'theory', difficulty: 'average',
    question: 'What term describes the energy that passes through a surface and continues into another medium?',
    options: ['Reflection', 'Absorption', 'Transmission', 'Refraction'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0700', area: 'A', subTopic: 'power-engineering',
    topic: 'Control Systems', type: 'computation', difficulty: 'hard',
    question: 'In a greenhouse system, the set-point temperature is 28°C. The temperature sensor reads 25°C, with a temperature fluctuation range of ±2°C. What does this signal difference represent in the control system? Additionally, if the controller has an adjustable range of 10% and the maximum temperature is set to 30°C, what is the maximum adjustment it can make?',
    options: ['3°C', '2°C', '5°C', '1°C'],
    correctAnswer: 0,
    solution: {
      given: 'Set-point = 28°C; Current reading = 25°C; Fluctuation = ±2°C; Controller adjustable range = 10%; Max temperature = 30°C',
      steps: ['Calculate temperature difference: 28°C - 25°C = 3°C', 'Calculate maximum adjustment: 10% of 30°C = 3°C'],
      formula: 'Adjustment = (Set-point - Current) for error signal; Max adjustment = Max temperature × 10%',
      keyConcept: 'Error signals in control systems indicate how far the current state is from the desired state.',
      commonMistakes: ['Confusing set-point with actual temperature', 'Ignoring fluctuation ranges', 'Incorrectly applying percentage adjustments'],
      extraneousGivens: ['Temperature fluctuation range: ±2°C', 'Maximum temperature: 30°C'],
    }
  },
  {
    id: 'llm-a-0701', area: 'A', subTopic: 'power-engineering',
    topic: 'IoT in Agriculture', type: 'theory', difficulty: 'hard',
    question: 'What does IoT stand for in the agricultural context?',
    options: ['Interneto Telecommunicacion', 'Internet of things', 'Internet optimization trail', 'Information Operational Technology'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0702', area: 'A', subTopic: 'power-engineering',
    topic: 'Control Systems', type: 'theory', difficulty: 'average',
    question: 'What does the term \'set-point\' represent in a control system?',
    options: ['Process Variable', 'Controller', 'Error Signal', 'Desired temperature'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0703', area: 'A', subTopic: 'power-engineering',
    topic: 'Control Systems', type: 'theory', difficulty: 'easy',
    question: 'What type of valve uses an electromagnet to open or close?',
    options: ['Pneumatic', 'Linear-servo', 'Solenoid', 'Stepper'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0704', area: 'A', subTopic: 'power-engineering',
    topic: 'Automation Systems', type: 'theory', difficulty: 'easy',
    question: 'Which agricultural equipment uses light-emitting diode (LED) technology for visual displays?',
    options: ['Photodiode', 'Zener diode', 'LCD', 'Light-emitting diode'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0705', area: 'A', subTopic: 'project-management',
    topic: 'Project Definition', type: 'theory', difficulty: 'easy',
    question: 'Which of the following best defines a project?',
    options: ['A temporary endeavor undertaken to create a unique product or service.', 'An ongoing activity with no defined beginning or end.', 'A series of tasks completed by different teams.', 'A permanent organization with established protocols.'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: 'A project is temporary and aims to produce a unique result or deliverable.',
      commonMistakes: ['Thinking of a project as an ongoing operation.', 'Confusing projects with programs or portfolios.'],
      
    }
  },
  {
    id: 'llm-a-0706', area: 'A', subTopic: 'feasibility-study',
    topic: 'Feasibility Study Preparation', type: 'theory', difficulty: 'easy',
    question: 'What is the primary goal of a feasibility study?',
    options: ['To assess the technical requirements of a project.', 'To determine if a project is viable and worth pursuing.', 'To create a financial report for stakeholders.', 'To outline the work breakdown structure.'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'A feasibility study evaluates the viability of a project, including financial, technical, operational, and legal aspects.',
      commonMistakes: ['Believing it only focuses on finance.', 'Thinking it’s the same as a project proposal.'],
      
    }
  },
  {
    id: 'llm-a-0707', area: 'A', subTopic: 'project-management',
    topic: 'Project Timeline', type: 'theory', difficulty: 'average',
    question: 'Which element is NOT typically included in a project timeline?',
    options: ['Start and finish dates of activities.', 'List of all project stakeholders.', 'Dependencies between tasks.', 'Milestones and deliverables.'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'A project timeline focuses on activities and milestones rather than identifying stakeholders.',
      commonMistakes: ['Confusing project timelines with stakeholder analysis.', 'Assuming all project elements are included in a timeline.'],
      
    }
  },
  {
    id: 'llm-a-0708', area: 'A', subTopic: 'research-and-extension',
    topic: 'Research Analysis', type: 'theory', difficulty: 'average',
    question: 'In agricultural research, what does R&D stand for?',
    options: ['Research and Development.', 'Reporting and Documentation.', 'Resources and Distribution.', 'Review and Development.'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: 'R&D refers to processes aimed at innovation and developing new solutions.',
      commonMistakes: ['Confusing R&D with merely reporting.', 'Thinking R&D involves only theoretical work.'],
      
    }
  },
  {
    id: 'llm-a-0709', area: 'A', subTopic: 'feasibility-study',
    topic: 'Cost Estimation', type: 'computation', difficulty: 'average',
    question: 'A cooperative plans a project with a total cost of ₱2,400,000. If the budget for Personnel Services (PS) must not exceed 40% of the PS + MOOE, what is the maximum allowable budget for PS?',
    options: ['₱1,200,000', '₱960,000', '₱1,440,000', '₱720,000'],
    correctAnswer: 1,
    solution: {
      given: 'Total Cost = ₱2,400,000, PS ≤ 40% of (PS + MOOE)',
      steps: ['Let PS be the maximum allowable budget for PS.', 'Then, MOOE = Total Cost - PS.', 'Set up the equation: PS ≤ 0.4(PS + (2,400,000 - PS))', 'Solving gives PS ≤ ₱960,000.'],
      formula: 'PS ≤ 0.4(PS + MOOE)',
      keyConcept: 'Understanding of budget constraints in project management.',
      commonMistakes: ['Forgetting to calculate MOOE properly.', 'Using incorrect percentage calculations.', 'Neglecting to express budgets in total terms.'],
      extraneousGivens: ['Total Cost: ₱2,400,000', 'Percentage: 40%', 'No other project details needed.'],
    }
  },
  {
    id: 'llm-a-0710', area: 'A', subTopic: 'project-management',
    topic: 'Project Evaluation', type: 'theory', difficulty: 'hard',
    question: 'What is the purpose of a project evaluation?',
    options: ['To report on project expenditures.', 'To assess project outcomes against predetermined objectives.', 'To outline future project phases.', 'To provide funding updates.'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'Project evaluation is critical for assessing whether project objectives were met.',
      commonMistakes: ['Mixing evaluation with mere reporting.', 'Believing evaluation happens only at project end.'],
      
    }
  },
  {
    id: 'llm-a-0711', area: 'A', subTopic: 'agricultural-bio-info-system',
    topic: 'IoT in Agriculture', type: 'theory', difficulty: 'easy',
    question: 'What does IoT stand for in agricultural technology?',
    options: ['Internet of Things.', 'Integrated Observation Technology.', 'Interconnected Operations Technology.', 'Internet of Technologies.'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: 'IoT refers to a network of interconnected devices that communicate and share data.',
      commonMistakes: ['Confusing IoT with traditional farming methods.', 'Misunderstanding IoT\'s role in efficiency.'],
      
    }
  },
  {
    id: 'llm-a-0712', area: 'A', subTopic: 'agricultural-bio-info-system',
    topic: 'Data Management', type: 'computation', difficulty: 'average',
    question: 'A farmer uses a soil moisture sensor that reads values between 0-100% soil moisture. If the average moisture level recorded this week was 45%, but the irrigation system is set to activate at 30% moisture level, how much moisture does the farmer currently have above the threshold for irrigation activation? Note: the range of moisture sensors is irrelevant to the calculation.',
    options: ['15%', '45%', '70%', '30%'],
    correctAnswer: 0,
    solution: {
      given: 'Current moisture level 45%, Activation threshold 30%',
      steps: ['Calculate excess moisture: 45% - 30% = 15%'],
      formula: 'Excess Moisture = Current Moisture - Activation Threshold',
      keyConcept: 'Understanding how sensor data impacts irrigation actions.',
      commonMistakes: ['Misunderstanding the significance of sensor ranges.', 'Incorrectly calculating moisture levels.'],
      extraneousGivens: ['Sensor range: 0-100%', 'Irrigation system specifications irrelevant.'],
    }
  },
  {
    id: 'llm-a-0713', area: 'A', subTopic: 'agricultural-bio-info-system',
    topic: 'Remote Sensing', type: 'theory', difficulty: 'hard',
    question: 'What is remote sensing primarily used for in agriculture?',
    options: ['To track weather patterns.', 'To gather data about the earth\'s surface without contact.', 'To monitor crop pricing.', 'To test soil acidity.'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'Remote sensing collects data to monitor various agricultural conditions remotely.',
      commonMistakes: ['Confusing remote sensing with direct measurement.', 'Underestimating its role in precision agriculture.'],
      
    }
  },
  {
    id: 'llm-a-0714', area: 'A', subTopic: 'project-management',
    topic: 'Risk Assessment', type: 'theory', difficulty: 'average',
    question: 'Which method is commonly used to evaluate the potential impact of risks on project outcomes?',
    options: ['Impact analysis.', 'Benefit-cost analysis.', 'SWOT analysis.', 'Time analysis.'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: 'Impact analysis evaluates how risks affect project deliverables and schedules.',
      commonMistakes: ['Mistaking risk analysis as the same as cost-benefit analysis.', 'Believing all analyses are interchangeable.'],
      
    }
  },
  {
    id: 'llm-a-0715', area: 'A', subTopic: 'feasibility-study',
    topic: 'Budget Estimation', type: 'computation', difficulty: 'hard',
    question: 'A fish farming initiative requires a total budget of ₱4,500,000. If the budget allocation for materials is set to be 30% of the total budget, however, an additional ₱500,000 is required for equipment rental which was previously not accounted for, what is the new budget allocation for materials? Note: budget for PS has been omitted and is not necessary for this calculation.',
    options: ['₱1,350,000', '₱1,200,000', '₱1,500,000', '₱1,000,000'],
    correctAnswer: 1,
    solution: {
      given: 'Total Budget = ₱4,500,000, Equipment Rental = ₱500,000',
      steps: ['Calculate new total budget: ₱4,500,000 - ₱500,000 = ₱4,000,000.', 'Calculate materials budget: 30% of ₱4,000,000 = ₱1,200,000.'],
      formula: 'Material Budget = Total Budget × 0.30',
      keyConcept: 'Understanding the changes in budget allocation due to unanticipated expenses.',
      commonMistakes: ['Failing to adjust the total budget before calculating the allocation.', 'Confusing percentage allocation with fixed amounts.'],
      extraneousGivens: ['Original total budget: ₱4,500,000', 'Equipment overhead irrelevance.', 'Personnel services omitted.'],
    }
  },
  {
    id: 'llm-a-0716', area: 'A', subTopic: 'research-and-extension',
    topic: 'Technical Viability', type: 'theory', difficulty: 'average',
    question: 'In feasibility studies, what does technical feasibility examine?',
    options: ['The market demand for the product.', 'The technological resources required for project implementation.', 'Financial aspects and potential profitability.', 'Legal and regulatory requirements.'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'Technical feasibility assesses the project\'s technological requirements and availability.',
      commonMistakes: ['Confusing technical with financial feasibilities.', 'Not acknowledging the importance of tech resources.'],
      
    }
  },
  {
    id: 'llm-a-0717', area: 'A', subTopic: 'project-management',
    topic: 'Project Completion', type: 'computation', difficulty: 'hard',
    question: 'A rice mill project is planned, and the total project cost is estimated at ₱3,200,000. According to the guidelines, the administrative cost should not exceed 25% of the total project cost. What is the maximum allowable administrative budget? Note: additional unrelated costs for maintenance are irrelevant.',
    options: ['₱800,000', '₱1,000,000', '₱900,000', '₱600,000'],
    correctAnswer: 0,
    solution: {
      given: 'Total Cost = ₱3,200,000, Maximum Admin Cost = 25%',
      steps: ['Calculate maximum admin cost: ₱3,200,000 × 0.25 = ₱800,000.'],
      formula: 'Admin Budget = Total Cost × 0.25',
      keyConcept: 'Understanding budget limits in project planning.',
      commonMistakes: ['Calculating beyond set budget limits.', 'Forgetting to use percentages correctly.'],
      extraneousGivens: ['Unrelated maintenance costs', 'Full project scope details not necessary.'],
    }
  },
  {
    id: 'llm-a-0718', area: 'A', subTopic: 'agricultural-bio-info-system',
    topic: 'Application of GIS', type: 'theory', difficulty: 'easy',
    question: 'What is the main purpose of Geographic Information Systems (GIS) in agriculture?',
    options: ['To track crop prices across regions.', 'To analyze and manage spatial data related to agricultural lands.', 'To automate irrigation systems.', 'To calculate yield forecasts.'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'GIS is used for spatial data analysis to support agricultural decision-making.',
      commonMistakes: ['Confusing GIS with general data collection.', 'Underestimating the technology\'s role in precision agriculture.'],
      
    }
  },
  {
    id: 'llm-a-0719', area: 'A', subTopic: 'research-and-extension',
    topic: 'Management Feasibility', type: 'theory', difficulty: 'average',
    question: 'What is assessed during the management feasibility section of a feasibility study?',
    options: ['The project\'s financial return on investment.', 'The licenses and permits required for operation.', 'The management team’s ability to execute the project.', 'The technological requirements for implementation.'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: 'Management feasibility evaluates the capability of the project team and structure to deliver results.',
      commonMistakes: ['Mixing management feasibility with technical or financial aspects.', 'Overlooking team dynamics in project success.'],
      
    }
  },
  {
    id: 'llm-a-0720', area: 'A', subTopic: 'feasibility-study',
    topic: 'Market Feasibility', type: 'theory', difficulty: 'average',
    question: 'Which statement best describes the market feasibility section of a feasibility study?',
    options: ['It measures the project’s financial risks.', 'It analyzes the competition and target market for the product.', 'It identifies the legal implications of the project.', 'It evaluates the technology needed for project execution.'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'Market feasibility assesses demand, competition, and economic viability of the product.',
      commonMistakes: ['Confusing market feasibility with technical evaluation.', 'Ignoring price points in market analysis.'],
      
    }
  },
  {
    id: 'llm-a-0721', area: 'A', subTopic: 'project-management',
    topic: 'Project Definition and Planning', type: 'theory', difficulty: 'easy',
    question: 'What is defined as a collaborative enterprise that is carefully planned to achieve a particular aim?',
    options: ['Program', 'Project', 'Feasibility Study', 'Initiative'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0722', area: 'A', subTopic: 'project-management',
    topic: 'Project Timeline and Schedule', type: 'theory', difficulty: 'average',
    question: 'What term refers to the period that indicates the proposed date of start and completion of the project?',
    options: ['Project Timeline', 'Project Schedule', 'Project Duration', 'Project Completion'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0723', area: 'A', subTopic: 'project-management',
    topic: 'Resource Management', type: 'theory', difficulty: 'average',
    question: 'What describes the personnel and material resources needed by the project in budgetary terms?',
    options: ['Budgetary Requirement', 'Financial Report', 'Budget Summary', 'Financial Summary'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0724', area: 'A', subTopic: 'project-management',
    topic: 'Feasibility Studies', type: 'theory', difficulty: 'hard',
    question: 'What is the culmination report of all preparatory work providing a comprehensive review before a final decision on implementation?',
    options: ['Project Plan', 'Project Review', 'Feasibility Report', 'Feasibility Study'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0725', area: 'A', subTopic: 'project-management',
    topic: 'Risk Analysis', type: 'theory', difficulty: 'average',
    question: 'Which analysis method correlates variations in project outcomes with variations in risks?',
    options: ['Impact assessment', 'Impact analysis', 'Risk analysis', 'Sensitivity analysis'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0726', area: 'A', subTopic: 'project-management',
    topic: 'Budgeting', type: 'computation', difficulty: 'hard',
    question: 'A project has a total budget of ₱5,000,000. Personnel Services (PS) should not constitute more than 40% of PS + MOOE. If MOOE is ₱1,500,000, what is the maximum allowable PS?',
    options: ['₱2,000,000', '₱3,000,000', '₱2,500,000', '₱1,750,000'],
    correctAnswer: 0,
    solution: {
      given: 'Total Budget = ₱5,000,000, MOOE = ₱1,500,000',
      steps: ['Let PS + MOOE = Total Budget', 'PS + 1,500,000 = 5,000,000', 'PS = 5,000,000 - 1,500,000 = 3,500,000', 'Max PS = 40% of (PS + MOOE) = 0.4 × (3,500,000 + 1,500,000) = ₱2,000,000'],
      formula: 'Max PS = 0.4 × (Total Budget)',
      keyConcept: 'Understanding the budget limits for personnel services in relation to total project costs.',
      commonMistakes: ['Not considering MOOE in calculation', 'Using wrong percentage', 'Confusing PS with total budget'],
      extraneousGivens: ['Total Budget: ₱5,000,000', 'MOOE: ₱1,500,000'],
    }
  },
  {
    id: 'llm-a-0727', area: 'A', subTopic: 'project-management',
    topic: 'Government Regulations', type: 'theory', difficulty: 'average',
    question: 'What is known as the Global Goals adopted by the United Nations in 2015?',
    options: ['Sustainable Development Goals', 'Millennium Development Goals', 'Paris Climate Agreement', 'Universal Declaration of Human Rights'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0728', area: 'A', subTopic: 'project-management',
    topic: 'Feasibility Studies', type: 'theory', difficulty: 'easy',
    question: 'What document must be prepared for projects worth more than ₱3,000,000 according to DA Memorandum Order No. 61, Series of 2020?',
    options: ['Project Plan', 'Detailed Engineering Design', 'Feasibility Study', 'Market Survey'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0729', area: 'A', subTopic: 'project-management',
    topic: 'Performance Evaluation', type: 'computation', difficulty: 'hard',
    question: 'A construction project has total expenses of ₱7,000,000 and is evaluated under CPES with a score of 80% for workmanship (0.40 weight), 70% for materials (0.30 weight), and 90% for time (0.15 weight). What is the total score for the project?',
    options: ['77.5', '80.0', '82.5', '75.0'],
    correctAnswer: 2,
    solution: {
      given: 'Total Expenses = ₱7,000,000, Workmanship = 80% (0.40), Materials = 70% (0.30), Time = 90% (0.15)',
      steps: ['Calculate Workmanship Score = 0.40 × 80 = 32', 'Calculate Materials Score = 0.30 × 70 = 21', 'Calculate Time Score = 0.15 × 90 = 13.5', 'Total Score = Workmanship + Materials + Time = 32 + 21 + 13.5 = 66.5'],
      formula: 'Total Score = (Workmanship × Weight) + (Materials × Weight) + (Time × Weight)',
      keyConcept: 'Understanding the weight and score for project evaluation.',
      commonMistakes: ['Not applying correct weights', 'Confusing percentage with score', 'Omitting total score calculation'],
      extraneousGivens: ['Total Expenses: ₱7,000,000', 'Weights: 0.40, 0.30, 0.15'],
    }
  },
  {
    id: 'llm-a-0730', area: 'A', subTopic: 'project-management',
    topic: 'Market Feasibility', type: 'theory', difficulty: 'average',
    question: 'What section of a Feasibility Study looks at the demand and markets for a project’s outputs?',
    options: ['Socio-economic feasibility', 'Financial feasibility', 'Technical feasibility', 'Market feasibility'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0731', area: 'A', subTopic: 'power-engineering',
    topic: 'Control Systems', type: 'theory', difficulty: 'easy',
    question: 'What type of control system uses feedback to monitor and adjust the system?',
    options: ['PID control', 'Feedforward', 'Closed-loop', 'Supervisory'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0732', area: 'A', subTopic: 'power-engineering',
    topic: 'System Components', type: 'theory', difficulty: 'average',
    question: 'What is a valve that opens or closes using an electromagnet called?',
    options: ['Pneumatic', 'Linear-servo', 'Solenoid', 'Stepper'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0733', area: 'A', subTopic: 'power-engineering',
    topic: 'IoT and Applications', type: 'theory', difficulty: 'easy',
    question: 'What does IoT stand for in the context of interconnected devices?',
    options: ['Interneto Telecommunicacion', 'Internet of things', 'Internet optimization trail', 'None of the above'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0734', area: 'A', subTopic: 'power-engineering',
    topic: 'LiDAR', type: 'theory', difficulty: 'average',
    question: 'What does LiDAR stand for?',
    options: ['Light Detection and Ranging', 'Laser Imaging Detection and Recognition', 'Light Direction and Reflection', 'Laser Identification and Ranging'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0735', area: 'A', subTopic: 'power-engineering',
    topic: 'Control Systems', type: 'computation', difficulty: 'hard',
    question: 'In a greenhouse, the system maintains a temperature of 28°C. If the current temperature is 24°C, what is the Error Signal?',
    options: ['4°C', '5°C', '3°C', '6°C'],
    correctAnswer: 0,
    solution: {
      given: 'Set-Point = 28°C, Process Variable = 24°C',
      steps: ['Error Signal = Set-Point - Process Variable', 'Error Signal = 28°C - 24°C = 4°C'],
      formula: 'Error Signal = Set-Point - Process Variable',
      keyConcept: 'Understanding Error Signal in control systems.',
      commonMistakes: ['Subtracting in the wrong order', 'Misinterpreting set-point', 'Forgetting units'],
      extraneousGivens: ['Current Temperature: 24°C', 'Desired Temperature: 28°C'],
    }
  },
  {
    id: 'llm-a-0736', area: 'A', subTopic: 'power-engineering',
    topic: 'System Components', type: 'theory', difficulty: 'easy',
    question: 'What component in an automatic poultry house compares actual temperature with desired temperature?',
    options: ['Actuator', 'Process Variable', 'Controller', 'Set-Point'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0737', area: 'A', subTopic: 'power-engineering',
    topic: 'Error Signal in Systems', type: 'computation', difficulty: 'average',
    question: 'An automatic grain dryer has a set temperature of 60°C. If the sensor detects 57°C, what is the Error Signal?',
    options: ['3°C', '2°C', '5°C', '4°C'],
    correctAnswer: 1,
    solution: {
      given: 'Set-Point = 60°C, Process Variable = 57°C',
      steps: ['Error Signal = Set-Point - Process Variable', 'Error Signal = 60°C - 57°C = 3°C'],
      formula: 'Error Signal = Set-Point - Process Variable',
      keyConcept: 'Understanding how to calculate Error Signal in control systems.',
      commonMistakes: ['Reversing subtraction order', 'Not recognizing the significance of error', 'Using incorrect values'],
      extraneousGivens: ['Current Temperature: 57°C', 'Desired Temperature: 60°C'],
    }
  },
  {
    id: 'llm-a-0738', area: 'A', subTopic: 'power-engineering',
    topic: 'Feedback Control System', type: 'theory', difficulty: 'hard',
    question: 'In a feedback control system, what does the term \'Set-Point\' refer to?',
    options: ['The current measured value', 'The desired target value', 'The adjustment made by the controller', 'The output of the actuator'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0739', area: 'A', subTopic: 'power-engineering',
    topic: 'Actuators', type: 'theory', difficulty: 'average',
    question: 'What device is responsible for carrying out the action determined by the controller in a control system?',
    options: ['Sensor', 'Controller', 'Actuator', 'Feedback loop'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0740', area: 'A', subTopic: 'project-management',
    topic: 'Project Timeline', type: 'theory', difficulty: 'easy',
    question: 'What term refers to the period indicating the proposed date of start and completion of the project?',
    options: ['Project Timeline', 'Project Schedule', 'Project Duration', 'Project Completion'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0741', area: 'A', subTopic: 'project-management',
    topic: 'Financial Reporting', type: 'theory', difficulty: 'average',
    question: 'What type of report describes the personnel/staff and material resources needed by the project in budgetary terms?',
    options: ['Budgetary Requirement', 'Financial Report', 'Budget Summary', 'Financial Summary'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0742', area: 'A', subTopic: 'project-management',
    topic: 'Risk Analysis', type: 'theory', difficulty: 'hard',
    question: 'Which analysis method determines which project risks have the most potential impact by correlating variations in outcomes?',
    options: ['Impact assessment', 'Impact analysis', 'Risk analysis', 'Sensitivity analysis'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0743', area: 'A', subTopic: 'feasibility-study',
    topic: 'Feasibility Study Requirements', type: 'theory', difficulty: 'average',
    question: 'According to DA MO 61 Series of 2020, a feasibility study is required for projects worth which amount?',
    options: ['< ₱3,000,000', '≥ ₱3,000,000', '< ₱4,000,000', '≥ ₱4,000,000'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0744', area: 'A', subTopic: 'feasibility-study',
    topic: 'Technical Feasibility', type: 'theory', difficulty: 'average',
    question: 'Which section of a Feasibility Study write-up affirms technical viability based on project-specific needs?',
    options: ['Socio-economic feasibility', 'Financial feasibility', 'Technical feasibility', 'Market feasibility'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0745', area: 'A', subTopic: 'research-training-extension',
    topic: 'Agricultural Extension', type: 'theory', difficulty: 'easy',
    question: 'What does the acronym IoT stand for in the context of agricultural technology?',
    options: ['Interneto Telecommunicacion', 'Internet of things', 'Internet optimization trail', 'None of the above'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0746', area: 'A', subTopic: 'research-training-extension',
    topic: 'Project Evaluation', type: 'theory', difficulty: 'average',
    question: 'What is the main purpose of a project review?',
    options: ['Assess project outcomes', 'Develop a project plan', 'Update project timelines', 'Allocate resources'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0747', area: 'A', subTopic: 'research-training-extension',
    topic: 'Data Management', type: 'theory', difficulty: 'average',
    question: 'Which term refers to assigning real-world coordinates to a dataset in GIS?',
    options: ['Projection', 'Spatial analysis', 'Georeferencing', 'Plotting'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0748', area: 'A', subTopic: 'power-engineering',
    topic: 'Engineering Calculations', type: 'computation', difficulty: 'average',
    question: 'A rice irrigation pump operates at 10,000 RPM and has a flow rate of 40 liters/min. The pump generates a pressure of 30 kPa. Determine the hydraulic power output of the pump. The ambient humidity is 80%, and barometric pressure reads 101.3 kPa. What is the hydraulic power output in kW?',
    options: ['2.4 kW', '3.2 kW', '5.5 kW', '1.0 kW'],
    correctAnswer: 1,
    solution: {
      given: 'Flow rate = 40 liters/min = 0.00067 m³/s, Pressure = 30 kPa = 30,000 Pa',
      steps: ['Hydraulic power (P) = Flow rate × Pressure = (0.00067 m³/s) × (30,000 Pa)', 'P = 20.1 W = 0.0201 kW', 'Convert to kW: P = 0.0201 kW'],
      formula: 'Hydraulic Power (P) = Q × P',
      keyConcept: 'The relationship between flow rate and pressure in hydraulic systems.',
      commonMistakes: ['Forgetting unit conversion for flow rate', 'Using incorrect pressure unit', 'Missing the conversion from W to kW'],
      extraneousGivens: ['Ambient humidity: 80%', 'Barometric pressure: 101.3 kPa'],
    }
  },
  {
    id: 'llm-a-0749', area: 'A', subTopic: 'power-engineering',
    topic: 'Power Calculation', type: 'computation', difficulty: 'hard',
    question: 'A solar-powered water pump for coconut irrigation has a total head of 12 m and a flow rate of 0.5 m³/h. It operates efficiently at 85% and the solar panel output is rated at 250 W. Calculate the pump power output in watts. Note: The water density is 1000 kg/m³, and gravity is approximated as 9.81 m/s².',
    options: ['150 W', '200 W', '220 W', '125 W'],
    correctAnswer: 2,
    solution: {
      given: 'Total head = 12 m, Flow rate = 0.5 m³/h = 0.000139 m³/s, Efficiency = 85%',
      steps: ['Calculate hydraulic power required: P = ρ × g × h × Q = 1000 kg/m³ × 9.81 m/s² × 12 m × 0.000139 m³/s = 1.63 W', 'Pump power output = P / Efficiency = 1.63 W / 0.85 = 1.917 W ≈ 200 W'],
      formula: 'Power (P) = ρ × g × h × Q, Pump Output = P / Efficiency',
      keyConcept: 'Calculating the pump power based on hydraulic principles.',
      commonMistakes: ['Incorrect unit conversion for flow rate', 'Forgetting to account for efficiency', 'Miscalculating the density of water'],
      extraneousGivens: ['Solar panel output: 250 W', 'Water density: 1000 kg/m³'],
    }
  },
  {
    id: 'llm-a-0750', area: 'A', subTopic: 'project-management',
    topic: 'Budget Estimation', type: 'computation', difficulty: 'average',
    question: 'A project requires a budget for Personnel Services (PS) amounting to ₱2,000,000, and Maintenance and Other Operating Expenses (MOOE) of ₱500,000. If the administrative overhead is set at 10% of PS + MOOE, what is the total budget including administrative overhead? Exclude salaries for seasonal workers of ₱150,000.',
    options: ['₱2,650,000', '₱2,820,000', '₱2,750,000', '₱3,000,000'],
    correctAnswer: 0,
    solution: {
      given: 'PS = ₱2,000,000, MOOE = ₱500,000, Overhead = 10%',
      steps: ['Total expenses = PS + MOOE = ₱2,000,000 + ₱500,000 = ₱2,500,000', 'Administrative overhead = 10% of Total expenses = 0.10 × ₱2,500,000 = ₱250,000', 'Total budget = Total expenses + Administrative overhead = ₱2,500,000 + ₱250,000 = ₱2,750,000'],
      formula: 'Total Budget = PS + MOOE + (Admin Overhead % × (PS + MOOE))',
      keyConcept: 'Calculating total budget including administrative costs.',
      commonMistakes: ['Excluding administrative overhead', 'Incorrectly calculating total expenses', 'Including unrelated budget items'],
      extraneousGivens: ['Salaries for seasonal workers: ₱150,000', 'Administrative overhead set at 10%'],
    }
  },
  {
    id: 'llm-a-0751', area: 'A', subTopic: 'research-training-extension',
    topic: 'Remote Sensing', type: 'theory', difficulty: 'average',
    question: 'What science involves obtaining information about the Earth’s surface without direct contact, typically through satellites or aerial sensors?',
    options: ['GIS', 'Remote sensing', 'Ground truthing', 'GPS Scanning'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0752', area: 'A', subTopic: 'research-training-extension',
    topic: 'Data Types in GIS', type: 'theory', difficulty: 'average',
    question: 'What type of data is primarily used in Geographic Information Systems (GIS)?',
    options: ['Local', 'Global', 'Spatial', 'Geodata'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0753', area: 'A', subTopic: 'research-training-extension',
    topic: 'Satellite Imagery', type: 'theory', difficulty: 'average',
    question: 'Which satellite is known for providing optical imagery?',
    options: ['Landsat', 'Sentinel-2', 'Sentinel-1', 'MODIS'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0754', area: 'A', subTopic: 'power-engineering',
    topic: 'Sensor Applications', type: 'theory', difficulty: 'easy',
    question: 'What does a soil moisture sensor measure in an irrigation system?',
    options: ['Flow rate', 'Soil temperature', 'Moisture level', 'Pressure'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0755', area: 'A', subTopic: 'power-engineering',
    topic: 'Control Systems', type: 'theory', difficulty: 'average',
    question: 'In a greenhouse control system, what term refers to the desired temperature setting?',
    options: ['Process Variable', 'Controller', 'Error Signal', 'Set-Point'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0756', area: 'A', subTopic: 'research-training-extension',
    topic: 'Agricultural Policies', type: 'theory', difficulty: 'average',
    question: 'What legislation provides guidelines for implementing projects related to agricultural mechanization in the Philippines?',
    options: ['MO No. 61, Series of 2020', 'RA 10601', 'RA 9184', 'DA Memorandum Order 16'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0757', area: 'A', subTopic: 'project-management',
    topic: 'Resource Allocation', type: 'theory', difficulty: 'average',
    question: 'What is the percentage of the administrative overhead based on Personnel Services (PS) in project budgeting according to MO 61?',
    options: ['10%', '15%', '20%', '25%'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0758', area: 'A', subTopic: 'project-management',
    topic: 'Critical Path', type: 'computation', difficulty: 'hard',
    question: 'Given the following project activities with their durations and predecessors: Activity A (3 weeks), Activity B (5 weeks, predecessor A), Activity C (7 weeks, predecessor A), Activity D (10 weeks, predecessor B), Activity E (5 weeks, predecessor C), Activity F (4 weeks, predecessors D and E). What is the critical path?',
    options: ['A-B-D-F', 'A-C-E-F', 'A-B-C-D-F', 'A-B-C-E-F'],
    correctAnswer: 0,
    solution: {
      given: 'Predecessor Activity Chain: A → B, A → C, B → D, C → E, D, E → F',
      steps: ['Calculate duration for paths: A-B-D-F = 3 + 5 + 10 + 4 = 22 weeks, A-C-E-F = 3 + 7 + 5 + 4 = 19 weeks', 'The maximum path duration is 22 weeks, hence critical path is A-B-D-F.'],
      formula: 'Critical path determined by the longest duration of path activities.',
      keyConcept: 'Understanding critical path method in project scheduling.',
      commonMistakes: ['Miscounting weeks due to overlook', 'Incorrectly summing durations across branches', 'Misinterpreting predecessor and successor relationships'],
      extraneousGivens: ['Duration of activities not needed to calculate critical path.'],
    }
  },
  {
    id: 'llm-a-0759', area: 'A', subTopic: 'project-management',
    topic: 'Evaluation of Construction', type: 'computation', difficulty: 'hard',
    question: 'A construction project has total construction costs of ₱1,500,000. Upon evaluation, the workmanship rating is 0.45, materials rating is 0.25, and time rating is 0.10. What is the final project performance score? The maximum score for workmanship is 0.50, materials is 0.30, and time is 0.15.',
    options: ['0.80', '0.75', '0.70', '0.65'],
    correctAnswer: 1,
    solution: {
      given: 'Workmanship rating = 0.45, Materials rating = 0.25, Time rating = 0.10',
      steps: ['Calculate weighted score: (0.45 × 0.50) + (0.25 × 0.30) + (0.10 × 0.15) = 0.22 + 0.075 + 0.015 = 0.31', 'Final performance score = Total weighted score = 0.31 out of maximum 0.95 = 0.75.'],
      formula: 'Final Score = (Workmanship × Max Weight) + (Materials × Max Weight) + (Time × Max Weight)',
      keyConcept: 'Evaluating performance of construction projects based on set criteria.',
      commonMistakes: ['Misapplying scoring weights', 'Incorrectly converting ratings to final scores', 'Neglecting to combine ratings properly'],
      extraneousGivens: ['Total construction costs: ₱1,500,000', 'Maximum scores for each rating category.'],
    }
  },
  {
    id: 'llm-a-0760', area: 'A', subTopic: 'project-management',
    topic: 'Project Timeline', type: 'theory', difficulty: 'easy',
    question: 'What term refers to the period indicating the proposed start and completion date of a project?',
    options: ['Project Timeline', 'Project Schedule', 'Project Duration', 'Project Completion'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0761', area: 'A', subTopic: 'project-management',
    topic: 'Feasibility Study', type: 'theory', difficulty: 'average',
    question: 'Which document serves as the culmination report providing a comprehensive review of all project aspects before final implementation?',
    options: ['Project Plan', 'Project Review', 'Feasibility Report', 'Feasibility Study'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0762', area: 'A', subTopic: 'project-management',
    topic: 'Budgetary Requirement', type: 'theory', difficulty: 'average',
    question: 'Which section describes the personnel and material resources needed by the project expressed in budgetary terms?',
    options: ['Budgetary Requirement', 'Financial Report', 'Budget Summary', 'Financial Summary'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0763', area: 'A', subTopic: 'project-management',
    topic: 'Risk Analysis', type: 'theory', difficulty: 'hard',
    question: 'What analysis method determines which individual project risks have the most potential impact on outcomes by correlating variations?',
    options: ['Impact Assessment', 'Impact Analysis', 'Risk Analysis', 'Sensitivity Analysis'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0764', area: 'A', subTopic: 'feasibility-study',
    topic: 'Budget Preparation', type: 'computation', difficulty: 'easy',
    question: 'A feasibility study for a corn postharvest facility requires a budget of ₱5,000,000. If the total budget for Personnel Services (PS) must not exceed 35-40% of PS + MOOE, calculate the maximum allowable budget for PS if MOOE is estimated at ₱1,500,000.',
    options: ['₱1,750,000', '₱2,000,000', '₱1,500,000', '₱2,500,000'],
    correctAnswer: 1,
    solution: {
      given: 'Total Budget = ₱5,000,000, MOOE = ₱1,500,000',
      steps: ['Calculate PS + MOOE: PS + ₱1,500,000 = ₱5,000,000', 'So, PS = ₱5,000,000 - ₱1,500,000 = ₱3,500,000', 'Calculate max PS (40%): 0.4 × (₱3,500,000 + ₱1,500,000) = ₱2,000,000'],
      formula: 'Max PS = 0.4 × (Total Budget)',
      keyConcept: 'Understanding budget constraints in feasibility studies.',
      commonMistakes: ['Calculating based on incorrect percentages', 'Misinterpreting total budget', 'Confusing PS and MOOE'],
      extraneousGivens: ['Total budget: ₱5,000,000', 'Estimated MOOE: ₱1,500,000'],
    }
  },
  {
    id: 'llm-a-0765', area: 'A', subTopic: 'feasibility-study',
    topic: 'Financial Viability', type: 'computation', difficulty: 'average',
    question: 'A rice milling project costs ₱6,000,000. If the minimum cost of feasibility study preparation is 5% of the first ₱50 million, what is the required budget for the feasibility study?',
    options: ['₱300,000', '₱150,000', '₱250,000', '₱100,000'],
    correctAnswer: 0,
    solution: {
      given: 'Project Cost = ₱6,000,000',
      steps: ['Calculate FS cost: 5% of ₱6,000,000 = ₱300,000'],
      formula: 'FS Cost = 0.05 × Project Cost',
      keyConcept: 'Importance of budgeting for feasibility studies.',
      commonMistakes: ['Forgetting to apply the percentage', 'Using incorrect project cost', 'Misinterpreting the percentage'],
      extraneousGivens: ['Total project cost: ₱6,000,000', 'Minimum cost for FS: 5% of first ₱50 million', 'Other project estimates: ₱2,000,000'],
    }
  },
  {
    id: 'llm-a-0766', area: 'A', subTopic: 'project-management',
    topic: 'Agricultural Project Management', type: 'theory', difficulty: 'hard',
    question: 'According to DA MO 61 Series of 2020, for projects worth ≥ ₱3,000,000, which document must be prepared?',
    options: ['Project Plan', 'Detailed Engineering Design', 'Feasibility Study', 'Market Survey'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0767', area: 'A', subTopic: 'project-management',
    topic: 'Contract Evaluation', type: 'theory', difficulty: 'average',
    question: 'What does the CPES aim to establish in evaluating constructors?',
    options: ['Quality Control', 'Performance Rating', 'Cost Analysis', 'Risk Assessment'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0768', area: 'A', subTopic: 'project-management',
    topic: 'Budget Allocation', type: 'computation', difficulty: 'hard',
    question: 'For a construction project in Region 3 worth ₱8,000,000, if the administrative cost is 20% of PS + MOOE, and PS is ₱2,500,000, what is the administrative cost?',
    options: ['₱1,100,000', '₱600,000', '₱800,000', '₱400,000'],
    correctAnswer: 2,
    solution: {
      given: 'Total Project Cost = ₱8,000,000, PS = ₱2,500,000',
      steps: ['Calculate MOOE: MOOE = ₱8,000,000 - ₱2,500,000 = ₱5,500,000', 'Calculate total PS + MOOE: ₱2,500,000 + ₱5,500,000 = ₱8,000,000', 'Calculate admin cost: 0.2 × ₱8,000,000 = ₱1,600,000'],
      formula: 'Admin Cost = 0.20 × (PS + MOOE)',
      keyConcept: 'Understanding administrative costs in project budgets.',
      commonMistakes: ['Not calculating MOOE', 'Overlooking administrative cost percentage', 'Incorrectly summing PS and MOOE'],
      extraneousGivens: ['Total project cost: ₱8,000,000', 'Estimated PS: ₱2,500,000', 'Other project costs: ₱3,000,000'],
    }
  },
  {
    id: 'llm-a-0769', area: 'A', subTopic: 'feasibility-study',
    topic: 'Market Feasibility', type: 'theory', difficulty: 'easy',
    question: 'What section of a feasibility study assesses the demand and market for a project’s outputs?',
    options: ['Socio-economic feasibility', 'Financial feasibility', 'Technical feasibility', 'Market feasibility'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0770', area: 'A', subTopic: 'project-management',
    topic: 'Procurement Laws', type: 'theory', difficulty: 'average',
    question: 'What does RA 9184 refer to?',
    options: ['Government Procurement Reform Act', 'Local Government Code of 1991', 'Anti-Graft and Corrupt Practices Act', 'Overseas Absentee Voting Act'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0771', area: 'A', subTopic: 'project-management',
    topic: 'Performance Evaluation', type: 'computation', difficulty: 'hard',
    question: 'A road construction project is evaluated at 40% for workmanship, 30% for materials, and 15% for time. If the total rating required is 1, what is the weighted score of the project if it received 90% in workmanship, 80% in materials, and 70% in time?',
    options: ['0.85', '0.78', '0.90', '0.80'],
    correctAnswer: 1,
    solution: {
      given: 'Workmanship: 90%, Materials: 80%, Time: 70%',
      steps: ['Calculate scores: Workmanship = 0.40 × 0.90 = 0.36', 'Materials = 0.30 × 0.80 = 0.24', 'Time = 0.15 × 0.70 = 0.105', 'Total Score = 0.36 + 0.24 + 0.105 = 0.805'],
      formula: 'Total Score = (Workmanship Weight × Workmanship Score) + (Materials Weight × Materials Score) + (Time Weight × Time Score)',
      keyConcept: 'Understanding how to calculate weighted scores in evaluations.',
      commonMistakes: ['Forgetting to apply the weights correctly', 'Incorrectly calculating individual scores', 'Misunderstanding weight percentages'],
      extraneousGivens: ['Weight for workmanship: 40%', 'Weight for materials: 30%', 'Weight for time: 15%'],
    }
  },
  {
    id: 'llm-a-0772', area: 'A', subTopic: 'feasibility-study',
    topic: 'Socio-Economic Feasibility', type: 'theory', difficulty: 'average',
    question: 'What does the socio-economic feasibility section of a feasibility study cover?',
    options: ['Financial viability', 'Technical viability', 'Economic and social impact', 'Market analysis'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0773', area: 'A', subTopic: 'project-management',
    topic: 'Government Agencies', type: 'theory', difficulty: 'easy',
    question: 'Which agency serves as the Supreme State Audit Institution in the Philippines?',
    options: ['COA', 'CHED', 'CSC', 'COMELEC'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0774', area: 'A', subTopic: 'project-management',
    topic: 'Environmental Compliance', type: 'theory', difficulty: 'hard',
    question: 'What does \'Environmentally Critical Project\' refer to?',
    options: ['Projects with significant negative environmental impacts', 'Projects that require environmental assessments', 'Projects needing government approval', 'Projects with minimal environmental impacts'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0775', area: 'A', subTopic: 'project-management',
    topic: 'Implementing Guidelines', type: 'theory', difficulty: 'hard',
    question: 'What does CPES implement according to the revised IRR of R.A. 9184?',
    options: ['Performance evaluation during construction', 'Financial assessment', 'Market analysis', 'Risk management'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0776', area: 'A', subTopic: 'project-management',
    topic: 'Performance Metrics', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is NOT a criterion evaluated during the construction phase?',
    options: ['Workmanship', 'Time', 'Budget', 'Materials'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0777', area: 'A', subTopic: 'project-management',
    topic: 'Continuous Improvement', type: 'theory', difficulty: 'average',
    question: 'What is the purpose of a Corrective Action Plan (CAP)?',
    options: ['To outline project goals', 'To improve project workflow', 'To address non-conformance findings', 'To allocate budget resources'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0778', area: 'A', subTopic: 'project-management',
    topic: 'Project Timeline', type: 'theory', difficulty: 'easy',
    question: 'Which term refers to the period that indicates proposed date of start and completion of the project?',
    options: ['Project Timeline', 'Project Schedule', 'Project Duration', 'Project Completion'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0779', area: 'A', subTopic: 'project-management',
    topic: 'Budgeting', type: 'theory', difficulty: 'average',
    question: 'What describes the personnel/staff and material resources needed by the project expressed in budgetary terms?',
    options: ['Budgetary Requirement', 'Financial Report', 'Budget Summary', 'Financial Summary'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0780', area: 'A', subTopic: 'feasibility-study',
    topic: 'Market Feasibility', type: 'theory', difficulty: 'average',
    question: 'Which section of a Feasibility Study assesses the demand and markets for a project’s outputs?',
    options: ['Socio-economic feasibility', 'Financial feasibility', 'Technical feasibility', 'Market feasibility'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0781', area: 'A', subTopic: 'feasibility-study',
    topic: 'Feasibility Report', type: 'theory', difficulty: 'hard',
    question: 'What is the culmination report of all the preparatory work that provides a comprehensive review of all aspects of the project?',
    options: ['Project Plan', 'Project Review', 'Feasibility Report', 'Feasibility Study'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0782', area: 'A', subTopic: 'project-management',
    topic: 'CPES Guidelines', type: 'theory', difficulty: 'average',
    question: 'Which guidelines require all procuring entities implementing government infrastructure projects to evaluate contractor performance?',
    options: ['RA 9184', 'CPES', 'NEDA Guidelines', 'DOH Directives'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0783', area: 'A', subTopic: 'project-management',
    topic: 'Georeferencing', type: 'theory', difficulty: 'easy',
    question: 'Assigning real-world coordinates to a dataset is referred to as?',
    options: ['Projection', 'Spatial Analysis', 'Georeferencing', 'Plotting'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0784', area: 'A', subTopic: 'information-system',
    topic: 'Remote Sensing', type: 'theory', difficulty: 'hard',
    question: 'What is the science of obtaining information about the Earth’s surface without direct contact?',
    options: ['GIS', 'Remote Sensing', 'Ground Truthing', 'GPS Scanning'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0785', area: 'A', subTopic: 'feasibility-study',
    topic: 'Financial Viability', type: 'theory', difficulty: 'hard',
    question: 'Which section of a feasibility study confirms that a project is financially viable?',
    options: ['Socio-economic feasibility', 'Financial feasibility', 'Technical feasibility', 'Market feasibility'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0786', area: 'A', subTopic: 'project-management',
    topic: 'Critical Path Method', type: 'computation', difficulty: 'hard',
    question: 'In a project, activities A, B, C, D, and E have durations of 3, 5, 7, 10, and 5 weeks respectively. If A must precede B and C, and B must precede D, which is the critical path for the project? The actual start date is irrelevant, and the total project cost is ₱1,000,000.',
    options: ['A-B-D-F', 'A-C-E-F', 'A-B-C-D-F', 'A-B-C-E-F'],
    correctAnswer: 0,
    solution: {
      given: 'A=3 weeks, B=5 weeks, C=7 weeks, D=10 weeks, E=5 weeks',
      steps: ['Determine total durations for paths A-B-D and A-C-E: A-B-D = 3 + 5 + 10 = 18 weeks; A-C-E = 3 + 7 + 5 = 15 weeks.', 'Identify critical path: A-B-D is longest at 18 weeks.'],
      formula: 'Critical Path = Longest Path in Project Network',
      keyConcept: 'The critical path determines the shortest time to complete the project.',
      commonMistakes: ['Not considering all dependencies.', 'Incorrectly adding durations.', 'Confusing critical path with the shortest path.'],
      extraneousGivens: ['Total project cost: ₱1,000,000', 'Actual start date is irrelevant', 'Activity E is added but does not affect total duration.'],
    }
  },
  {
    id: 'llm-a-0787', area: 'A', subTopic: 'feasibility-study',
    topic: 'Cost Analysis', type: 'computation', difficulty: 'average',
    question: 'A farmer plans to implement an irrigation system costing ₱750,000. The project is evaluated to have annual operational costs of ₱50,000 and a projected yearly savings of ₱80,000. Additionally, extra expenses of ₱20,000 for equipment maintenance are expected annually. What is the net benefit of the project after one year, ignoring initial investment depreciation?',
    options: ['₱10,000', '₱30,000', '₱20,000', '₱50,000'],
    correctAnswer: 1,
    solution: {
      given: 'Initial cost = ₱750,000, Annual savings = ₱80,000, Annual operation costs = ₱50,000, Equipment maintenance = ₱20,000',
      steps: ['Calculate total annual costs: Total costs = Operation costs + Maintenance = ₱50,000 + ₱20,000 = ₱70,000', 'Determine net benefit: Net benefit = Savings - Total costs = ₱80,000 - ₱70,000 = ₱10,000'],
      formula: 'Net Benefit = Annual Savings - (Annual Operation Costs + Equipment Maintenance)',
      keyConcept: 'Understanding net benefits is crucial for evaluating project viability.',
      commonMistakes: ['Ignoring maintenance costs in calculations.', 'Confusing savings with total profit.', 'Miscalculating total annual costs.'],
      extraneousGivens: ['Initial investment: ₱750,000', 'Projected savings are only relevant for one year.', 'Ignoring depreciation is only a factor for long-term analysis.'],
    }
  },
  {
    id: 'llm-a-0788', area: 'A', subTopic: 'information-system',
    topic: 'IoT in Agriculture', type: 'theory', difficulty: 'easy',
    question: 'What does IoT stand for in the context of agricultural technology?',
    options: ['Interneto Telecommunicacion', 'Internet of Things', 'Internet optimization trail', 'None of the above'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0789', area: 'A', subTopic: 'information-system',
    topic: 'Control Systems', type: 'theory', difficulty: 'average',
    question: 'In control systems, what does the term \'Set-Point\' refer to?',
    options: ['Process Variable', 'Controller', 'Error Signal', 'Set-Point'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0790', area: 'A', subTopic: 'information-system',
    topic: 'Smart Agriculture', type: 'theory', difficulty: 'average',
    question: 'What component does a thermostat represent in an automatic poultry house control system?',
    options: ['Actuator', 'Process Variable', 'Controller', 'Set-Point'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0791', area: 'A', subTopic: 'information-system',
    topic: 'GIS Functions', type: 'theory', difficulty: 'average',
    question: 'Which GIS function identifies overlapping areas between two or more layers?',
    options: ['Merge', 'Intersect', 'Union', 'Clip'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0792', area: 'A', subTopic: 'project-management',
    topic: 'Project Evaluation', type: 'computation', difficulty: 'hard',
    question: 'A project has the following activities: A (3 weeks), B (5 weeks), C (7 weeks), D (10 weeks), and E (5 weeks). If Activity A must be completed before B and C, and D must follow B, calculate the total duration of the critical path. Ignore any extraneous project costs.',
    options: ['18 weeks', '20 weeks', '25 weeks', '22 weeks'],
    correctAnswer: 0,
    solution: {
      given: 'Duration of A = 3 weeks, B = 5 weeks, C = 7 weeks, D = 10 weeks, E = 5 weeks',
      steps: ['Identify critical path A-B-D or A-C-E.', 'Calculate total duration: A-B-D = 3 + 5 + 10 = 18 weeks; A-C-E = 3 + 7 + 5 = 15 weeks.', 'Critical path is A-B-D, total = 18 weeks.'],
      formula: 'Total Duration = Sum of Durations in Critical Path',
      keyConcept: 'Calculating the critical path is vital for project timeline management.',
      commonMistakes: ['Forgetting to account for dependencies.', 'Adding durations incorrectly.', 'Confusing critical path with other paths.'],
      extraneousGivens: ['Extraneous project costs are irrelevant.', 'Ignoring delays or other factors does not affect this calculation.', 'Activity E\'s duration does not apply here.'],
    }
  },
  {
    id: 'llm-a-0793', area: 'A', subTopic: 'information-system',
    topic: 'Data Management', type: 'computation', difficulty: 'hard',
    question: 'A researcher plans to evaluate the effectiveness of a new irrigation system. If the system costs ₱200,000, generates savings of ₱50,000 annually, and incurs maintenance costs of ₱10,000, what is the payback period? Assume costs are linear and ignore inflation.',
    options: ['3 years', '4 years', '2 years', '5 years'],
    correctAnswer: 0,
    solution: {
      given: 'Total cost = ₱200,000, Annual savings = ₱50,000, Annual maintenance cost = ₱10,000',
      steps: ['Calculate net annual savings: Net savings = ₱50,000 - ₱10,000 = ₱40,000', 'Determine payback period: Payback period = Total cost / Net annual savings = ₱200,000 / ₱40,000 = 5 years.'],
      formula: 'Payback Period = Total Investment / Annual Net Savings',
      keyConcept: 'Calculating payback period is essential for investment decisions.',
      commonMistakes: ['Ignoring maintenance costs.', 'Incorrectly calculating annual savings.', 'Not considering the total investment.'],
      extraneousGivens: ['Ignoring inflation is only a part of a longer-term analysis.', 'Costs due to variations are not accounted for.', 'Project lifespan is irrelevant to immediate payback.'],
    }
  },
  {
    id: 'llm-a-0794', area: 'A', subTopic: 'feasibility-study',
    topic: 'Project Evaluation', type: 'theory', difficulty: 'hard',
    question: 'What is the culmination report providing a comprehensive review of all project aspects before deciding on implementation?',
    options: ['Project Plan', 'Project Review', 'Feasibility Report', 'Feasibility Study'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0795', area: 'A', subTopic: 'project-management',
    topic: 'Workplan Development', type: 'theory', difficulty: 'average',
    question: 'Which itemizes the detailed activities to be undertaken for the whole duration of the project?',
    options: ['Project Timeline', 'Workplan Schedule', 'Project Duration', 'Project Schedule'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0796', area: 'A', subTopic: 'project-management',
    topic: 'Financial Feasibility', type: 'theory', difficulty: 'hard',
    question: 'Which section of a Feasibility Study write-up affirms the financial viability of a project?',
    options: ['Socio-economic feasibility', 'Financial feasibility', 'Technical feasibility', 'Market feasibility'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0797', area: 'A', subTopic: 'project-management',
    topic: 'Critical Path Analysis', type: 'computation', difficulty: 'hard',
    question: 'Given the following activities and their durations: A (3 weeks), B (5 weeks, A), C (7 weeks, A), D (10 weeks, B), E (5 weeks, C), F (4 weeks, D,E). What is the critical path? Note that the total project duration is not affected by the environmental conditions which are recorded separately.',
    options: ['A-B-D-F', 'A-C-E-F', 'A-B-C-D-F', 'A-B-C-E-F'],
    correctAnswer: 0,
    solution: {
      given: 'A=3, B=5, C=7, D=10, E=5, F=4',
      steps: ['Calculate total duration for A-B-D-F: 3 + 5 + 10 + 4 = 22 weeks', 'Calculate total duration for other paths: A-C-E-F: 3 + 7 + 5 + 4 = 19 weeks; A-B-C-D-F: 3 + 5 + 7 + 10 + 4 = 29 weeks; A-B-C-E-F: 3 + 5 + 7 + 5 + 4 = 24 weeks', 'Identify the longest duration as the critical path.'],
      
      keyConcept: 'The critical path is the longest path through the project, determining the shortest time in which the project can be completed.',
      commonMistakes: ['Selecting the path with the fewest activities instead of the longest duration.', 'Forgetting to include all dependent activities.'],
      extraneousGivens: ['Total project duration: not affected by environmental conditions.', 'Weather data: irrelevant to critical path calculation.'],
    }
  },
  {
    id: 'llm-a-0798', area: 'A', subTopic: 'project-management',
    topic: 'Irrigation Project Analysis', type: 'computation', difficulty: 'hard',
    question: 'A solar-powered irrigation system for rice farming has a budget of ₱1,200,000 and an expected reduction in irrigation costs of ₱150,000 annually. The project is expected to last for 10 years. Evaluate the net present value assuming a discount rate of 5%, and determine if the project is financially viable. Note: ignore yearly maintenance cost of ₱20,000 which is not relevant to the present value calculation.',
    options: ['₱1,028,000', '₱1,200,000', '₱1,500,000', '₱1,800,000'],
    correctAnswer: 0,
    solution: {
      given: 'Budget=₱1,200,000, annual savings=₱150,000, discount rate=5%, project duration=10 years',
      steps: ['Calculate NPV: NPV = Σ(CF_t / (1 + r)^t) - initial investment', 'CF_t = ₱150,000 for t=1 to 10', 'Find Present Value of cash flows and subtract initial investment.'],
      formula: 'NPV = Σ(₱150,000 / (1 + 0.05)^t) from t=1 to t=10 - ₱1,200,000',
      keyConcept: 'NPV helps in assessing the profitability of a project by considering discounted cash flows.',
      commonMistakes: ['Forgetting to discount cash flows back to present value.', 'Using the wrong discount rate.'],
      extraneousGivens: ['Yearly maintenance cost: ₱20,000 (irrelevant to NPV calculation).', 'Market trends for rice prices: not needed for NPV calculation.'],
    }
  },
  {
    id: 'llm-a-0799', area: 'A', subTopic: 'project-management',
    topic: 'Agriculture Project Feasibility', type: 'theory', difficulty: 'average',
    question: 'This section of a Feasibility Study write-up deals with the demand and markets for a project’s outputs.',
    options: ['Socio-economic feasibility', 'Financial feasibility', 'Technical feasibility', 'Market feasibility'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0800', area: 'A', subTopic: 'project-management',
    topic: 'Project Monitoring', type: 'theory', difficulty: 'average',
    question: 'What does CPES stand for in the context of project evaluation?',
    options: ['Constructors\' Performance Evaluation System', 'Construction Project Evaluation System', 'Contractors\' Performance Evaluation System', 'Contractors\' Project Evaluation System'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0801', area: 'A', subTopic: 'agricultural-engineering',
    topic: 'Irrigation Systems', type: 'computation', difficulty: 'hard',
    question: 'An irrigation system is designed to deliver 2,000 liters per hour to a rice field. If the field size is 1 hectare and crops require 5 cm of water per week, how many hours does the system need to operate per week? Note: The area of the field is 10,000 m², but ignore the area of the drainage channels in the calculation.',
    options: ['12.5 hours', '25 hours', '50 hours', '10 hours'],
    correctAnswer: 1,
    solution: {
      given: 'Field size = 10,000 m², water requirement = 5 cm/week, irrigation rate = 2,000 liters/hour',
      steps: ['Calculate total water volume needed: 10,000 m² * 0.05 m = 500 m³ = 500,000 liters', 'Calculate hours needed: Total volume / delivery rate = 500,000 liters / 2,000 liters/hour = 250 hours/week, but 1 week = 7 days, means divide by 7.'],
      formula: 'Hours per week = Total water volume / (delivery rate * 24)',
      keyConcept: 'Irrigation efficiency is crucial to ensure crops receive adequate water supply.',
      commonMistakes: ['Miscalculating the volume needed based on incorrect area.', 'Confusing liters with cubic meters.'],
      extraneousGivens: ['Area of drainage channels: not considered.', 'Daily weather data: irrelevant for water calculation.'],
    }
  },
  {
    id: 'llm-a-0802', area: 'A', subTopic: 'project-management',
    topic: 'Budget Preparation', type: 'theory', difficulty: 'easy',
    question: 'What is the maximum rating for Workmanship during the construction phase of a vertical project?',
    options: ['0.50', '0.40', '0.30', '0.15'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0803', area: 'A', subTopic: 'feasibility-study',
    topic: 'Technical Feasibility', type: 'theory', difficulty: 'easy',
    question: 'What section of a Feasibility Study affirms that the agricultural machinery to be procured is technically viable based on identified needs?',
    options: ['Socio-economic feasibility', 'Financial feasibility', 'Technical feasibility', 'Market feasibility'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0804', area: 'A', subTopic: 'project-management',
    topic: 'Corrective Action Plans', type: 'theory', difficulty: 'average',
    question: 'What does CAP stand for in project evaluation?',
    options: ['Corrective Action Plan', 'Construction Assessment Plan', 'Contractor\'s Action Plan', 'Complete Activity Plan'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0805', area: 'A', subTopic: 'project-management',
    topic: 'Government Regulations', type: 'theory', difficulty: 'average',
    question: 'What is the implementing agency established to promote and regulate the growth of the construction industry?',
    options: ['Department of Trade and Industry', 'Philippine Contractors Accreditation Board', 'Construction Industry Authority of the Philippines', 'National Economic and Development Authority'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0806', area: 'A', subTopic: 'project-management',
    topic: 'Sustainable Development Goals', type: 'theory', difficulty: 'average',
    question: 'What are the Sustainable Development Goals aimed at achieving by 2030?',
    options: ['End poverty and ensure prosperity', 'Increase economic growth', 'Maximize agricultural output', 'Reduce environmental regulations'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0807', area: 'A', subTopic: 'feasibility-study',
    topic: 'Market Assessment', type: 'computation', difficulty: 'hard',
    question: 'A cooperative plans a postharvest facility costing ₱5 million. The feasibility study must assess the potential market demand, which is expected to grow 10% annually based on current values. If the current market size is ₱1 million, what will be the projected market size in 3 years? Note: Do not consider inflation adjustments or other growth factors.',
    options: ['₱1.1 million', '₱1.33 million', '₱1.46 million', '₱1.10 million'],
    correctAnswer: 1,
    solution: {
      given: 'Current market size = ₱1 million, growth rate = 10% per year, duration = 3 years',
      steps: ['Projected market size = Current market size * (1 + growth rate) ^ duration', '= ₱1 million * (1 + 0.10) ^ 3', '= ₱1 million * 1.331 = ₱1.331 million'],
      formula: 'Projected market size = Current * (1 + growth rate)^years',
      keyConcept: 'Growth projections help in determining future market viability.',
      commonMistakes: ['Misapplying growth factors', 'Ignoring years for compounding.'],
      extraneousGivens: ['Cost of facility: ₱5 million (irrelevant to market size calculation).', 'Market growth factors: ignored.'],
    }
  },
  {
    id: 'llm-a-0808', area: 'A', subTopic: 'project-management',
    topic: 'Environmental Considerations', type: 'theory', difficulty: 'easy',
    question: 'According to RA 10601, what is required for projects that may pose significant negative environmental impacts?',
    options: ['Environmental Compliance Certificate', 'Project Feasibility Study', 'Government Procurement Act', 'Market Assessment'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0809', area: 'A', subTopic: 'project-management',
    topic: 'Project Schedule', type: 'theory', difficulty: 'easy',
    question: 'What refers to the period that indicates the proposed date of start and completion of the project?',
    options: ['Project Timeline', 'Project Schedule', 'Project Duration', 'Project Completion'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'Project schedule outlines the timeframe for a project including start and finish dates.',
      commonMistakes: ['Mixing up with project duration', 'Misunderstanding schedule as plan'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-a-0810', area: 'A', subTopic: 'project-management',
    topic: 'Budget Preparation', type: 'theory', difficulty: 'average',
    question: 'Which item describes the personnel and material resources needed by the project expressed in budgetary terms?',
    options: ['Budgetary Requirement', 'Financial Report', 'Budget Summary', 'Financial Summary'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: 'Budgetary requirement outlines resources needed for project execution.',
      commonMistakes: ['Mixing with financial report', 'Overlooking budget summary'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-a-0811', area: 'A', subTopic: 'project-management',
    topic: 'Risk Analysis', type: 'theory', difficulty: 'hard',
    question: 'What analysis method determines which project risks have the most potential impact on outcomes?',
    options: ['Impact Assessment', 'Impact Analysis', 'Risk Analysis', 'Sensitivity Analysis'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: 'Sensitivity analysis evaluates the impact of risk on project success.',
      commonMistakes: ['Confusing with impact analysis', 'Not understanding risk evaluation'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-a-0812', area: 'A', subTopic: 'project-management',
    topic: 'Funding Sources', type: 'theory', difficulty: 'average',
    question: 'Which of the following is a government agency that provides guidelines for agricultural and fisheries projects?',
    options: ['DENR', 'DA', 'NIA', 'DPWH'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'Department of Agriculture (DA) oversees agri-fisheries projects.',
      commonMistakes: ['Mixing up with DENR', 'Not knowing sector-specific agencies'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-a-0813', area: 'A', subTopic: 'feasibility-study',
    topic: 'Budget Preparation', type: 'computation', difficulty: 'average',
    question: 'A feasibility study for a project estimated to cost ₱4,500,000 requires a minimum FS preparation cost of 5%. What is the minimum cost for preparing this feasibility study? The project is located in Region 3, and the weather is mostly sunny. Assume a fixed rate and not including other costs.',
    options: ['₱225,000', '₱200,000', '₱250,000', '₱300,000'],
    correctAnswer: 0,
    solution: {
      given: 'Total project cost = ₱4,500,000, Minimum FS preparation cost rate = 5%',
      steps: ['Calculate FS cost: FS cost = Total cost × Rate = ₱4,500,000 × 0.05 = ₱225,000'],
      formula: 'FS cost = Total cost × Rate',
      keyConcept: 'Preparation costs are assessed as a percentage of the total project cost.',
      commonMistakes: ['Using wrong percentage', 'Not applying the formula correctly'],
      extraneousGivens: ['Project location: Region 3', 'Weather condition: sunny'],
    }
  },
  {
    id: 'llm-a-0814', area: 'A', subTopic: 'feasibility-study',
    topic: 'Financial Viability', type: 'computation', difficulty: 'hard',
    question: 'A corn dryer facility costs ₱5 million and operates with an expected revenue of ₱1 million per year. If the project has an estimated operational life of 10 years, what is the Net Present Value (NPV) at a discount rate of 8%? Assume there are extraneous costs of ₱200,000 for maintenance every year.',
    options: ['₱1,347,610', '₱850,000', '₱1,532,460', '₱2,000,000'],
    correctAnswer: 2,
    solution: {
      given: 'Initial investment = ₱5 million, Revenue = ₱1 million/year, Operational life = 10 years, Discount rate = 8%, Annual maintenance cost = ₱200,000.',
      steps: ['Calculate annual cash flow: Cash Flow = Revenue - Maintenance = ₱1,000,000 - ₱200,000 = ₱800,000', 'Use NPV formula: NPV = Σ (Cash Flow / (1 + r)^t) - Initial Investment', 'Calculate NPV = (₱800,000/(1+0.08)^1) + ... + (₱800,000/(1+0.08)^10) - ₱5,000,000 = ₱1,532,460'],
      formula: 'NPV = Σ (Cash Flow / (1 + r)^t) - Initial Investment',
      keyConcept: 'NPV allows the assessment of the financial viability of a project over time.',
      commonMistakes: ['Omitting maintenance costs', 'Incorrectly calculating cash flows'],
      extraneousGivens: ['Initial investment: ₱5 million', 'Operational life: 10 years'],
    }
  },
  {
    id: 'llm-a-0815', area: 'A', subTopic: 'feasibility-study',
    topic: 'Market Analysis', type: 'theory', difficulty: 'average',
    question: 'In a feasibility study, which section deals with the demand and markets for a project’s outputs?',
    options: ['Socio-economic feasibility', 'Financial feasibility', 'Technical feasibility', 'Market feasibility'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: 'Market feasibility assesses the potential demand for project outputs.',
      commonMistakes: ['Confusing with financial feasibility', 'Overlooking socio-economic aspects'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-a-0816', area: 'A', subTopic: 'research-and-extension',
    topic: 'Research Design', type: 'theory', difficulty: 'average',
    question: 'What is the process of systematically collecting and analyzing data to answer a research question?',
    options: ['Research methodology', 'Research design', 'Data collection', 'Statistical analysis'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'Research design outlines the framework for data collection and analysis.',
      commonMistakes: ['Mixing methodology with design', 'Not understanding research processes'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-a-0817', area: 'A', subTopic: 'research-and-extension',
    topic: 'Training and Extension', type: 'theory', difficulty: 'easy',
    question: 'What is the primary goal of agricultural extension services?',
    options: ['To provide farmers with access to credit', 'To educate farmers about best practices', 'To conduct research for agricultural innovations', 'To regulate agricultural markets'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'Agricultural extension aims to educate and support farmers in adopting best practices.',
      commonMistakes: ['Confusing extension with research', 'Not understanding the role of education in agriculture'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-a-0818', area: 'A', subTopic: 'research-and-extension',
    topic: 'Data Analysis', type: 'computation', difficulty: 'hard',
    question: 'A research study recorded corn yields from three different farms: 4.2 tons/ha, 5.1 tons/ha, and 6.3 tons/ha. Calculate the average yield. The maximum rainfall recorded during the growing season was 1,200 mm, and the soil pH was consistently 6.5. What is the average yield of corn per hectare?',
    options: ['5.2 tons/ha', '4.5 tons/ha', '6.1 tons/ha', '5.8 tons/ha'],
    correctAnswer: 0,
    solution: {
      given: 'Farm yields: 4.2 tons/ha, 5.1 tons/ha, 6.3 tons/ha, Maximum rainfall: 1,200 mm, Soil pH: 6.5.',
      steps: ['Average yield = (4.2 + 5.1 + 6.3) / 3 = 5.2 tons/ha'],
      formula: 'Average = (Sum of yields) / (Number of farms)',
      keyConcept: 'Average yield calculation helps in understanding farm productivity.',
      commonMistakes: ['Forgetting to divide by the number of observations', 'Using wrong yield values'],
      extraneousGivens: ['Maximum rainfall: 1,200 mm', 'Soil pH: 6.5'],
    }
  },
  {
    id: 'llm-a-0819', area: 'A', subTopic: 'agricultural-information-systems',
    topic: 'Data Management', type: 'theory', difficulty: 'average',
    question: 'What refers to the methods used to convert data into usable information in agricultural settings?',
    options: ['Data processing', 'Data analysis', 'Information retrieval', 'Data storage'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: 'Data processing is crucial in converting raw data into actionable insights.',
      commonMistakes: ['Confusing data processing with data storage', 'Overlooking the importance of data accuracy'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-a-0820', area: 'A', subTopic: 'agricultural-information-systems',
    topic: 'GIS Applications', type: 'computation', difficulty: 'hard',
    question: 'A GIS analyst is mapping out a 500-hectare coconut plantation. The area under good cultivation is 300 hectares, while 200 hectares are undergoing regeneration. If a GIS software requires a processing time of 0.5 hours per hectare for mapping, how long will it take to map the entire area? Note that the average temperature during mapping was 31°C. What is the total time required in hours?',
    options: ['250 hours', '200 hours', '300 hours', '350 hours'],
    correctAnswer: 0,
    solution: {
      given: 'Total area = 500 hectares, Processing time = 0.5 hours/hectare, Temperature = 31°C.',
      steps: ['Total time = Total area × Processing time = 500 hectares × 0.5 hours/hectare = 250 hours'],
      formula: 'Total time = Area × Processing time per area',
      keyConcept: 'Understanding processing time for mapping is essential in GIS applications.',
      commonMistakes: ['Forgetting to multiply area by time', 'Incorrectly interpreting hectares'],
      extraneousGivens: ['Temperature: 31°C'],
    }
  },
  {
    id: 'llm-a-0821', area: 'A', subTopic: 'agricultural-information-systems',
    topic: 'Remote Sensing', type: 'theory', difficulty: 'easy',
    question: 'What technology is used to gather information about the Earth’s surface from a distance?',
    options: ['GIS', 'Remote sensing', 'GPS', 'Data analysis'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'Remote sensing is critical in agricultural monitoring and assessment.',
      commonMistakes: ['Confusing with GIS', 'Underestimating the role of distance in data collection'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-a-0822', area: 'A', subTopic: 'agricultural-information-systems',
    topic: 'IoT in Agriculture', type: 'theory', difficulty: 'average',
    question: 'What does IoT stand for in the context of agriculture?',
    options: ['Internet of Technology', 'Internet of Things', 'Integrated Operational Tools', 'Interconnected Organic Technology'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'IoT represents a network of devices connected to the internet for data sharing.',
      commonMistakes: ['Confusing IoT with IT', 'Not understanding the connectivity aspect'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-a-0823', area: 'A', subTopic: 'agricultural-information-systems',
    topic: 'GIS Data Types', type: 'theory', difficulty: 'easy',
    question: 'What type of data is primarily used in GIS?',
    options: ['Local data', 'Global data', 'Spatial data', 'Tabular data'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: 'Spatial data is essential for geographic analysis and mapping.',
      commonMistakes: ['Mixing spatial with tabular data', 'Underestimating the importance of data types'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-a-0824', area: 'A', subTopic: 'agricultural-information-systems',
    topic: 'GIS Applications', type: 'computation', difficulty: 'hard',
    question: 'A GIS project requires processing 10 layers of data for analysis. If each layer requires 2 hours for processing and the project manager allocates an additional 30 minutes per layer for quality checks, how many total hours will be spent on processing and quality checks? The project is based in a region with abundant rainfall. What is the total time in hours?',
    options: ['20 hours', '25 hours', '22 hours', '30 hours'],
    correctAnswer: 1,
    solution: {
      given: 'Number of layers = 10, Processing time per layer = 2 hours, Quality check time = 0.5 hours/layer.',
      steps: ['Total processing time = Number of layers × Processing time/layer = 10 × 2 = 20 hours', 'Total quality check time = Number of layers × Quality check time/layer = 10 × 0.5 = 5 hours', 'Total time = Total processing time + Total quality check time = 20 + 5 = 25 hours'],
      formula: 'Total time = (Number of layers × Processing time per layer) + (Number of layers × Quality check time per layer)',
      keyConcept: 'Combining processing and quality check times is crucial for project planning.',
      commonMistakes: ['Omitting the quality check time', 'Forgetting to multiply layers'],
      extraneousGivens: ['Location: region with abundant rainfall'],
    }
  },
  {
    id: 'llm-a-0825', area: 'A', subTopic: 'project-management',
    topic: 'Scheduling', type: 'theory', difficulty: 'easy',
    question: 'What is referred to as the proposed date of start and completion of the project?',
    options: ['Project Timeline', 'Project Schedule', 'Project Duration', 'Project Completion'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0826', area: 'A', subTopic: 'project-management',
    topic: 'Financial Planning', type: 'theory', difficulty: 'average',
    question: 'Which term describes the personnel and material resources needed for a project expressed in budget terms?',
    options: ['Financial Report', 'Budget Summary', 'Financial Analysis', 'Budgetary Requirement'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0827', area: 'A', subTopic: 'project-management',
    topic: 'Feasibility Analysis', type: 'theory', difficulty: 'average',
    question: 'What is the primary purpose of a feasibility study?',
    options: ['To negotiate contracts', 'To ensure project viability', 'To monitor project progress', 'To advertise the project'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0828', area: 'A', subTopic: 'project-management',
    topic: 'Budgeting', type: 'theory', difficulty: 'average',
    question: 'Which of the following is NOT an expense under Maintenance and Other Operating Expenses (MOOE)?',
    options: ['Travel expenses', 'Salary/wages of research staff', 'Utility services', 'Construction materials'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0829', area: 'A', subTopic: 'project-management',
    topic: 'Crop Yield Calculation', type: 'computation', difficulty: 'hard',
    question: 'A farmer harvested 200 bags of rice from a field of 10 hectares. The field requires 1.5 tons of fertilizer, which costs PHP 25,000. If the cost of transportation of the harvest is PHP 5,000 and the selling price is PHP 1,500 per bag, what is the net income from the harvest considering the fertilizer and transportation costs?',
    options: ['PHP 300,000', 'PHP 265,000', 'PHP 275,000', 'PHP 310,000'],
    correctAnswer: 1,
    solution: {
      given: '200 bags, field area = 10 hectares, fertilizer cost = 25000, transportation cost = 5000, selling price = 1500',
      steps: ['Calculate gross income: Gross income = bags × selling price = 200 × 1500 = 300000', 'Calculate total costs: Total costs = fertilizer cost + transportation cost = 25000 + 5000 = 30000', 'Net income = Gross income - Total costs = 300000 - 30000 = 270000'],
      formula: 'Net Income = Income - Costs',
      keyConcept: 'Net income is calculated after deducting all relevant costs from the total income.',
      commonMistakes: ['Neglecting transportation cost', 'Not using the correct selling price', 'Forgetting to subtract costs from income'],
      extraneousGivens: ['Field area: 10 hectares', 'Fertilizer amount: 1.5 tons', 'Fertilizer cost: PHP 25,000', 'Selling price: PHP 1,500'],
    }
  },
  {
    id: 'llm-a-0830', area: 'A', subTopic: 'project-management',
    topic: 'Project Evaluation', type: 'theory', difficulty: 'average',
    question: 'In project management, what does the term \'sensitivity analysis\' refer to?',
    options: ['Evaluating project timeline', 'Determining budget constraints', 'Assessing the impact of risk', 'Analyzing contractor performance'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0831', area: 'A', subTopic: 'project-management',
    topic: 'Government Regulations', type: 'theory', difficulty: 'average',
    question: 'The memorandum order providing guidelines for preparing feasibility studies for agrifisheries projects in the Philippines is referred to as?',
    options: ['MO No. 61, Series of 2020', 'MO No. 61, Series of 2021', 'MO No. 61, Series of 2022', 'MO No. 61, Series of 2023'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0832', area: 'A', subTopic: 'project-management',
    topic: 'Cost Assessments', type: 'computation', difficulty: 'hard',
    question: 'A cooperative plans to install a new irrigation system estimated at PHP 4.5 million. If the cost of the feasibility study is 5% of the project cost plus an additional PHP 50,000 for administrative fees, what is the total cost of the feasibility study?',
    options: ['PHP 275,000', 'PHP 200,000', 'PHP 250,000', 'PHP 300,000'],
    correctAnswer: 0,
    solution: {
      given: 'Project cost = PHP 4.5 million, administrative fees = PHP 50,000',
      steps: ['Calculate feasibility study cost: FS cost = 0.05 × 4.5 million + 50000 = 225000 + 50000', 'Total FS cost = 225000 + 50000 = 275000'],
      formula: 'FS Cost = (Percentage × Project Cost) + Administrative Fees',
      keyConcept: 'Feasibility studies often include administrative fees in addition to percentage costs.',
      commonMistakes: ['Forgetting to add administrative fees', 'Confusing % with total cost', 'Not converting million to actual figures correctly'],
      extraneousGivens: ['Total estimated project cost: PHP 4.5 million', 'Additional fees: PHP 50,000'],
    }
  },
  {
    id: 'llm-a-0833', area: 'A', subTopic: 'project-management',
    topic: 'Performance Evaluation', type: 'theory', difficulty: 'easy',
    question: 'Which government agency serves as the Philippines\' Supreme State Audit Institution?',
    options: ['COA', 'CHEd', 'CSC', 'COMELEC'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0834', area: 'A', subTopic: 'project-management',
    topic: 'Legal Framework', type: 'theory', difficulty: 'average',
    question: 'Which act provides for the modernization and regulation of government procurement activities?',
    options: ['RA 9184 - Government Procurement Reform Act', 'RA 7160 – Local Government Code of 1991', 'RA 3019 – Anti-Graft and Corrupt Practices Act', 'RA 9187 – Overseas Absentee Voting Act'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0835', area: 'A', subTopic: 'project-management',
    topic: 'Cost Analysis', type: 'computation', difficulty: 'hard',
    question: 'If a construction project has a total budget of PHP 10 million and the maximum allowable budget for personnel services is 40%, how much can be allocated for personnel services, if administrative costs are estimated at PHP 1 million?',
    options: ['PHP 4 million', 'PHP 3 million', 'PHP 5 million', 'PHP 2 million'],
    correctAnswer: 1,
    solution: {
      given: 'Total budget = PHP 10 million, admin costs = PHP 1 million, allowable percentage for PS = 40%',
      steps: ['Calculate effective budget after admin costs: Effective budget = 10,000,000 - 1,000,000 = 9,000,000', 'Allocate for personnel services: PS allocation = 0.40 × 9,000,000 = 3,600,000'],
      formula: 'PS Allocation = (Total Budget - Administrative Costs) × Allowable %',
      keyConcept: 'Understanding how administrative costs impact the overall budget allocation.',
      commonMistakes: ['Using wrong percentage', 'Not subtracting admin costs', 'Confusing total with effective budget'],
      extraneousGivens: ['Total budget: PHP 10 million', 'Administrative costs: PHP 1 million'],
    }
  },
  {
    id: 'llm-a-0836', area: 'A', subTopic: 'project-management',
    topic: 'Performance Evaluation', type: 'theory', difficulty: 'average',
    question: 'What system is used for evaluating the performance of constructors in government infrastructure projects?',
    options: ['Construction Performance Appraisal System', 'Constructors\' Performance Evaluation System', 'Project Performance Evaluation System', 'Contractor Quality Assurance System'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0837', area: 'A', subTopic: 'project-management',
    topic: 'Technical Feasibility', type: 'computation', difficulty: 'hard',
    question: 'In a project requiring a total investment of PHP 8 million, with the Ministry of Agriculture requiring that at least 20% of this amount be allocated to technical feasibility studies, what is the minimum amount that must be allocated?',
    options: ['PHP 1.6 million', 'PHP 1.2 million', 'PHP 2 million', 'PHP 1 million'],
    correctAnswer: 0,
    solution: {
      given: 'Total investment = PHP 8 million, required allocation = 20%',
      steps: ['Calculate minimum allocation: Minimum allocation = 0.20 × 8,000,000 = 1,600,000'],
      formula: 'Minimum Allocation = Percentage × Total Investment',
      keyConcept: 'Allocating percentages from total investments for feasibility studies.',
      commonMistakes: ['Using incorrect percentage', 'Forgetting to multiply by total amount', 'Not converting million properly'],
      extraneousGivens: ['Total investment: PHP 8 million'],
    }
  },
  {
    id: 'llm-a-0838', area: 'A', subTopic: 'project-management',
    topic: 'Evaluation Criteria', type: 'theory', difficulty: 'easy',
    question: 'What is the maximum rating for workmanship in the Construct Performance Evaluation System (CPES)?',
    options: ['0.50', '0.40', '0.30', '0.20'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0839', area: 'A', subTopic: 'project-management',
    topic: 'Environmental Impact', type: 'theory', difficulty: 'average',
    question: 'What does an Environmentally Critical Project refer to in the Philippine context?',
    options: ['Projects that enhance environmental sustainability', 'Projects that pose significant negative environmental impact', 'Projects that only require local government approval', 'Projects focusing solely on agricultural development'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0840', area: 'A', subTopic: 'agricultural engineering',
    topic: 'Irrigation Systems', type: 'computation', difficulty: 'hard',
    question: 'An irrigation system can cover 15 hectares of land with a water requirement of 5,000 liters per hectare per day. If the system operates 10 hours a day at a flow rate of 1,200 liters per hour, calculate how many additional hours the system needs to operate to meet the water requirement.',
    options: ['8 hours', '4 hours', '6 hours', '10 hours'],
    correctAnswer: 2,
    solution: {
      given: 'Land area = 15 hectares, water requirement = 5,000 liters/hectare/day, flow rate = 1,200 liters/hour',
      steps: ['Total water requirement = 15 hectares × 5000 liters/hectare = 75,000 liters', 'Water delivered in 10 hours = 1200 liters/hour × 10 hours = 12,000 liters', 'Water deficit = 75,000 liters - 12,000 liters = 63,000 liters', 'Additional hours needed = 63,000 liters / 1200 liters/hour = 52.5 hours'],
      formula: 'Total Water Required = Area × Requirement; Additional Hours = Deficit / Flow Rate',
      keyConcept: 'Calculating irrigation needs is essential for ensuring sufficient water supply.',
      commonMistakes: ['Not calculating total water required', 'Using incorrect flow rate', 'Confusing liters with other units'],
      extraneousGivens: ['Daily operation hours: 10 hours', 'Flow rate: 1200 liters/hour'],
    }
  },
  {
    id: 'llm-a-0841', area: 'A', subTopic: 'project-management',
    topic: 'Resource Requirement', type: 'theory', difficulty: 'average',
    question: 'Which term describes the personnel/staff and material resources needed by the project expressed in budgetary terms?',
    options: ['Budgetary Requirement', 'Financial Report', 'Budget Summary', 'Financial Summary'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0842', area: 'A', subTopic: 'project-management',
    topic: 'Sustainable Development Goals', type: 'theory', difficulty: 'average',
    question: 'What refers to the universal call to action adopted by the United Nations in 2015 to end poverty and ensure peace and prosperity by 2030?',
    options: ['Sustainable Development Goals', 'Millennium Development Goals', 'Paris Climate Agreement', 'Universal Declaration of Human Rights'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0843', area: 'A', subTopic: 'project-management',
    topic: 'Feasibility Study', type: 'theory', difficulty: 'hard',
    question: 'Which document is required for projects worth ≥ ₱3,000,000 as per DA Memorandum Order No. 61, Series of 2020?',
    options: ['Project Plan', 'Detailed Engineering Design', 'Feasibility Study', 'Market Survey'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0844', area: 'A', subTopic: 'power-engineering',
    topic: 'Energy Conversion', type: 'theory', difficulty: 'easy',
    question: 'What device converts electrical energy into light and is commonly used in visual displays?',
    options: ['Light-emitting diode', 'Photodiode', 'Zener diode', 'LCD'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0845', area: 'A', subTopic: 'power-engineering',
    topic: 'Control Systems', type: 'theory', difficulty: 'average',
    question: 'In a greenhouse control system, what does the target temperature represent?',
    options: ['Process Variable', 'Controller', 'Error Signal', 'Set-Point'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0846', area: 'A', subTopic: 'power-engineering',
    topic: 'IoT', type: 'theory', difficulty: 'average',
    question: 'What does the acronym IoT stand for?',
    options: ['Interneto Telecommunicacion', 'Internet of things', 'Internet optimization trail', 'None of the above'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0847', area: 'A', subTopic: 'power-engineering',
    topic: 'LiDAR Technology', type: 'theory', difficulty: 'hard',
    question: 'What does LiDAR stand for in remote sensing applications?',
    options: ['Light Detection and Ranging', 'Laser Imaging Detection and Recognition', 'Light Direction and Reflection', 'Laser Identification and Ranging'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0848', area: 'A', subTopic: 'power-engineering',
    topic: 'Project Evaluation', type: 'computation', difficulty: 'easy',
    question: 'A project’s budget for Personnel Services (PS) is set at ₱1,000,000. If it must not constitute more than 40% of the total PS + MOOE, what is the maximum allowable budget for MOOE?',
    options: ['₱600,000', '₱400,000', '₱800,000', '₱1,200,000'],
    correctAnswer: 0,
    solution: {
      given: 'PS = ₱1,000,000, Max PS% = 40%',
      steps: ['Let X be MOOE.', 'PS + MOOE = PS/(0.4) => ₱1,000,000 + X = ₱1,000,000/0.4', 'X = ₱1,000,000/0.4 - ₱1,000,000 => X = ₱600,000'],
      formula: 'Total Budget = PS / (Max PS%)',
      keyConcept: 'Budget allocations must adhere to percentage limits set by funding agencies.',
      commonMistakes: ['Incorrectly using total PS instead of total PS + MOOE', 'Forgetting to consider both categories.', 'Using 30% instead of 40%.'],
      extraneousGivens: ['Total PS: ₱1,000,000', 'Max PS%: 40%', 'Project Duration: 12 months', 'Expected Yield Increase: 10%'],
    }
  },
  {
    id: 'llm-a-0849', area: 'A', subTopic: 'project-management',
    topic: 'Budget Preparation', type: 'computation', difficulty: 'average',
    question: 'A project team is preparing a budget that includes personnel services amounting to ₱3,500,000 and MOOE of ₱2,500,000. What is the percentage of MOOE relative to the total budget?',
    options: ['29.41%', '40%', '41.67%', '42.86%'],
    correctAnswer: 2,
    solution: {
      given: 'PS = ₱3,500,000, MOOE = ₱2,500,000',
      steps: ['Total Budget = PS + MOOE = ₱3,500,000 + ₱2,500,000 = ₱6,000,000', 'Percentage of MOOE = (MOOE / Total Budget) * 100 = (₱2,500,000 / ₱6,000,000) * 100'],
      formula: '% MOOE = (MOOE / (PS + MOOE)) * 100',
      keyConcept: 'Budget percentages help in understanding resource allocation effectively.',
      commonMistakes: ['Calculating MOOE against only PS', 'Forgetting to multiply by 100', 'Confusing totals.'],
      extraneousGivens: ['Personnel services: ₱3,500,000', 'MOOE: ₱2,500,000', 'Projected Inflation: 5%', 'Project Start Date: January'],
    }
  },
  {
    id: 'llm-a-0850', area: 'A', subTopic: 'project-management',
    topic: 'Project Risk Analysis', type: 'computation', difficulty: 'hard',
    question: 'A project has identified various risks contributing to uncertain outcomes, where 50% of the risks are considered high impact, and the estimated project cost is ₱4,000,000. If the potential cost impact of high-risk factors is estimated at 30%, what is the dollar impact of the high-risk factors?',
    options: ['₱600,000', '₱900,000', '₱1,200,000', '₱1,000,000'],
    correctAnswer: 1,
    solution: {
      given: 'Project Cost = ₱4,000,000, High Risk Impact = 30%',
      steps: ['Impact of high risks = Project Cost * Impact% = ₱4,000,000 * 30%', '= ₱1,200,000, but only 50% of the risks are high, so final impact is ₱1,200,000 * 50%.'],
      formula: 'Dollar Impact = Project Cost * High Risk Impact',
      keyConcept: 'Understanding risk impact on project costs is essential for risk management.',
      commonMistakes: ['Applying the percentage to the total and not considering the fraction of high risks.', 'Confusing high risk impact percentage with a dollar amount.', 'Not considering project cost correctly.'],
      extraneousGivens: ['Total risks: 10', 'High-risk percentage: 50%', 'Low-risk cost impact: 10%.', 'Project Duration: 6 months'],
    }
  },
  {
    id: 'llm-a-0851', area: 'A', subTopic: 'power-engineering',
    topic: 'Control Systems', type: 'theory', difficulty: 'easy',
    question: 'Which control system uses feedback to monitor and adjust the system?',
    options: ['PID control', 'Feedforward', 'Closed-loop', 'Supervisory'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0852', area: 'A', subTopic: 'power-engineering',
    topic: 'Automation Technology', type: 'theory', difficulty: 'average',
    question: 'What type of valve opens or closes using an electromagnet?',
    options: ['Pneumatic', 'Linear-servo', 'Solenoid', 'Stepper'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0853', area: 'A', subTopic: 'power-engineering',
    topic: 'Moisture Control Systems', type: 'computation', difficulty: 'average',
    question: 'A farmer installs a soil moisture sensor that constantly measures and sends data to a controller. If the sensor detects soil moisture of 15% and the desired threshold is 20%, what percentage represents the deficiency?',
    options: ['3%', '5%', '4%', '7%'],
    correctAnswer: 1,
    solution: {
      given: 'Current Moisture = 15%, Desired Moisture = 20%',
      steps: ['Deficiency = Desired Moisture - Current Moisture = 20% - 15% = 5%'],
      formula: 'Deficiency = Desired Moisture - Current Moisture',
      keyConcept: 'Monitoring soil moisture levels is critical for efficient irrigation.',
      commonMistakes: ['Incorrectly adding instead of subtracting moisture levels.', 'Confusing percentage with absolute value.', 'Ignoring threshold importance.'],
      extraneousGivens: ['Sensor brand: SensorX', 'Current temperature: 25°C', 'Soil type: Loam', 'Average humidity: 70%'],
    }
  },
  {
    id: 'llm-a-0854', area: 'A', subTopic: 'project-management',
    topic: 'Performance Evaluation', type: 'theory', difficulty: 'hard',
    question: 'According to CPES guidelines, which criterion has the highest weight during the construction phase?',
    options: ['Workmanship', 'Materials', 'Time', 'Resources Deployment'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0855', area: 'A', subTopic: 'project-management',
    topic: 'Project Evaluation', type: 'theory', difficulty: 'hard',
    question: 'What document serves as the culmination report providing a comprehensive review of all aspects before project implementation?',
    options: ['Project Plan', 'Project Review', 'Feasibility Report', 'Feasibility Study'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0856', area: 'A', subTopic: 'power-engineering',
    topic: 'Environmental Compliance', type: 'theory', difficulty: 'average',
    question: 'Which type of project may pose significant negative environmental impact at certain thresholds of operation regardless of location according to Proclamation No. 2146?',
    options: ['Environmentally Critical Project', 'Environmental Impact Assessment', 'Environmental Impact Project', 'Environmental Compliance Project'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0857', area: 'A', subTopic: 'project-management',
    topic: 'Probability Calculation', type: 'computation', difficulty: 'hard',
    question: 'A construction company evaluates contractor performance based on several criteria. If a contractor receives scores of 80%, 75%, and 90% for workmanship, materials, and timeliness respectively. What is the average performance score?',
    options: ['78.33%', '80%', '75%', '77.5%'],
    correctAnswer: 0,
    solution: {
      given: 'Scores: Workmanship = 80%, Materials = 75%, Timeliness = 90%',
      steps: ['Average = (80 + 75 + 90) / 3', 'Average = 245 / 3', 'Average = 81.67%'],
      formula: 'Average Score = (Sum of Scores) / (Number of Criteria)',
      keyConcept: 'Average scores provide a gauge of overall performance.',
      commonMistakes: ['Forgetting to divide by the number of criteria.', 'Confusing percentage scores with absolute values.', 'Not ensuring all criteria are included.'],
      extraneousGivens: ['Number of projects evaluated: 3', 'Company name: XYZ Builders', 'Evaluation period: 1 year', 'Total project cost: ₱15 million'],
    }
  },
  {
    id: 'llm-a-0858', area: 'A', subTopic: 'power-engineering',
    topic: 'Project Management', type: 'theory', difficulty: 'average',
    question: 'Which agency serves as the Philippines\' Supreme State Audit Institution?',
    options: ['COA', 'CHED', 'CSC', 'COMELEC'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0859', area: 'A', subTopic: 'laws-ethics',
    topic: 'Philippine Agricultural Engineering Laws', type: 'theory', difficulty: 'easy',
    question: 'What is the purpose of Republic Act No. 3927 in the context of agricultural engineering in the Philippines?',
    options: ['To establish environmental regulations', 'To create the board for agricultural engineering', 'To regulate the agricultural machinery industry', 'To enforce penalties for illegal farming practices'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0860', area: 'A', subTopic: 'laws-ethics',
    topic: 'Continuing Professional Development', type: 'theory', difficulty: 'average',
    question: 'Which act introduced Continuing Professional Education (CPE) as a requirement for agricultural engineers?',
    options: ['Republic Act No. 8559', 'Republic Act No. 10915', 'Republic Act No. 3927', 'Republic Act No. 10601'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0861', area: 'A', subTopic: 'laws-ethics',
    topic: 'Code of Ethics for AB Engineers', type: 'theory', difficulty: 'average',
    question: 'According to the Code of Ethics, how should Agricultural and Biosystems Engineers conduct their professional relationships?',
    options: ['By prioritizing personal gain over ethics', 'By maintaining good public relations and honesty', 'By monopolizing the engineering market', 'By avoiding any communication with clients'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0862', area: 'A', subTopic: 'laws-ethics',
    topic: 'RP Laws and Standards', type: 'theory', difficulty: 'average',
    question: 'What are the responsibilities of the Board of Agricultural and Biosystems Engineering as per RA 10915?',
    options: ['To create agricultural products', 'To supervise the licensing of Agricultural Engineers', 'To determine market prices for agricultural products', 'To enforce penalties for environmental violations'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0863', area: 'A', subTopic: 'laws-ethics',
    topic: 'National Building Code', type: 'theory', difficulty: 'hard',
    question: 'Which government entity is primarily responsible for enforcing the National Building Code in agricultural and biosystems projects?',
    options: ['Department of Agriculture (DA)', 'Department of Environment and Natural Resources (DENR)', 'Department of Public Works and Highways (DPWH)', 'Professional Regulation Commission (PRC)'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0864', area: 'A', subTopic: 'laws-ethics',
    topic: 'Environmental Laws', type: 'theory', difficulty: 'average',
    question: 'Which of the following laws focuses specifically on the management of agricultural waste?',
    options: ['Climate Change Act', 'Solid Waste Management Act', 'Agricultural and Fishery Mechanization Law', 'RA 10601'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0865', area: 'A', subTopic: 'laws-ethics',
    topic: 'Philippine Agricultural Engineering Laws', type: 'theory', difficulty: 'easy',
    question: 'What defines the profession of Agricultural Engineering according to RA 3927?',
    options: ['Application of engineering principles to agriculture', 'Design of irrigation systems only', 'Management of farm operations', 'Development of agricultural policies'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0866', area: 'A', subTopic: 'laws-ethics',
    topic: 'Scope of Practice', type: 'theory', difficulty: 'hard',
    question: 'According to RA 10915, what is included in the scope of practice for Agricultural and Biosystems Engineers?',
    options: ['Only land and water resources engineering', 'All aspects of agricultural processing and waste management', 'Construction management only', 'Financial management of agricultural enterprises'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0867', area: 'A', subTopic: 'laws-ethics',
    topic: 'Power and Machinery Engineering', type: 'theory', difficulty: 'easy',
    question: 'What is the primary focus of the Agricultural and Fishery Mechanization Law in the Philippines?',
    options: ['Promoting organic farming', 'Regulating the manufacturing of farm machinery', 'Enhancing the mechanization of agricultural practices', 'Monitoring environmental impacts of farming'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0868', area: 'A', subTopic: 'laws-ethics',
    topic: 'Philippine Agricultural Engineering Acts', type: 'theory', difficulty: 'average',
    question: 'Which of the following acts focuses on updating the coverage of the licensure examination for Agricultural Engineers?',
    options: ['RA 3927', 'RA 8559', 'RA 10601', 'RA 10915'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0869', area: 'A', subTopic: 'laws-ethics',
    topic: 'Professional Standards', type: 'computation', difficulty: 'hard',
    question: 'An agricultural engineer is preparing a project proposal with a total estimated cost of P2,000,000. According to PRC regulations, what is the minimum fee for signing and sealing this proposal if the fee is set at 1.5% of the project cost? The local government also requires a compliance report and a technical study, which cost an extra P25,000. The engineer\'s office expenses total P15,000. What is the total fee the engineer should charge?',
    options: ['P30,000', 'P37,500', 'P50,000', 'P60,000'],
    correctAnswer: 1,
    solution: {
      given: 'Estimated cost = P2,000,000; Signing and sealing fee = 1.5% = 0.015; Compliance report and study = P25,000; Office expenses = P15,000',
      steps: ['Calculate signing and sealing fee: Fee = P2,000,000 * 0.015 = P30,000', 'Add compliance report and study: Total = P30,000 + P25,000 + P15,000 = P70,000'],
      formula: 'Total fee = Signing and sealing fee + Compliance report and study + Office expenses',
      keyConcept: 'Understand the different components of project fees and how to calculate total costs.',
      commonMistakes: ['Calculating fee incorrectly by using wrong percentage', 'Forgetting to add additional costs', 'Not understanding the fee structure'],
      extraneousGivens: ['Compliance report cost: P25,000', 'Office expenses: P15,000', 'Percentage fee is P0.015', 'Total estimated cost is P2,000,000'],
    }
  },
  {
    id: 'llm-a-0870', area: 'A', subTopic: 'laws-ethics',
    topic: 'Agricultural Engineering Certification', type: 'theory', difficulty: 'average',
    question: 'As per the Philippine Agricultural and Biosystems Engineering Act of 2016, what is the duration of validity for the Professional Identification Card (PIC) issued to registered Agricultural and Biosystems Engineers?',
    options: ['1 year', '2 years', '3 years', 'Lifetime'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0871', area: 'A', subTopic: 'laws-ethics',
    topic: 'Penalty Provisions', type: 'theory', difficulty: 'hard',
    question: 'What are the penalties for violating the Code of Ethics as per RA 10915?',
    options: ['Fines only', 'Imprisonment only', 'Administrative sanctions, fines, and imprisonment', 'Warnings and reprimands'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0872', area: 'A', subTopic: 'laws-ethics',
    topic: 'Professional Practice', type: 'theory', difficulty: 'average',
    question: 'Which of the following is a duty of an Agricultural and Biosystems Engineer under RA 10915?',
    options: ['To perform administrative functions only', 'To provide technical assistance to farmers only', 'To prepare engineering designs and project studies', 'To manage financial resources only'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0873', area: 'A', subTopic: 'laws-ethics',
    topic: 'Signing and Sealing Rules', type: 'computation', difficulty: 'hard',
    question: 'An Agricultural Engineer is preparing irrigation plans that cost P4,000,000. What is the fee for signing and sealing these plans according to the authorized minimum profession fees if the signing fee is 2% of the project cost? Additionally, the engineer incurs P20,000 in expenses for fieldwork and P10,000 for administrative costs. What is the total amount the engineer should charge?',
    options: ['P100,000', 'P140,000', 'P160,000', 'P180,000'],
    correctAnswer: 2,
    solution: {
      given: 'Project cost = P4,000,000; Signing fee = 2% = 0.02; Fieldwork expenses = P20,000; Administrative costs = P10,000',
      steps: ['Calculate signing fee: Fee = P4,000,000 * 0.02 = P80,000', 'Add fieldwork and administrative costs: Total = P80,000 + P20,000 + P10,000 = P110,000'],
      formula: 'Total fee = Signing fee + Fieldwork expenses + Administrative costs',
      keyConcept: 'Understanding the cost components involved in professional fees.',
      commonMistakes: ['Incorrect percentage calculation', 'Not including all expenses', 'Misunderstanding fee structure'],
      extraneousGivens: ['Fieldwork expenses: P20,000', 'Administrative costs: P10,000', 'Percentage fee is P0.02', 'Total project cost is P4,000,000'],
    }
  },
  {
    id: 'llm-a-0874', area: 'A', subTopic: 'laws-ethics',
    topic: 'Professional Development', type: 'theory', difficulty: 'average',
    question: 'Which of the following is emphasized for Agricultural and Biosystems Engineers to maintain their professional status?',
    options: ['No continuous learning is required', 'Participation in Continuing Professional Development programs', 'Only on-the-job training is needed', 'Professional status is permanent after registration'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0875', area: 'A', subTopic: 'laws-ethics',
    topic: 'Legal Frameworks', type: 'computation', difficulty: 'hard',
    question: 'An Agricultural Engineer plans to build a facility with a budget of P3,500,000. According to fees for construction supervision, what would be the fee if it is set at 1%? The engineer additionally needs to account for environmental compliance costs amounting to P50,000 and project management expenses of P30,000. What is the total fee charged by the engineer?',
    options: ['P60,000', 'P65,000', 'P73,000', 'P80,000'],
    correctAnswer: 3,
    solution: {
      given: 'Budget = P3,500,000; Supervisory fee = 1% = 0.01; Compliance costs = P50,000; Project management expenses = P30,000',
      steps: ['Calculate supervisory fee: Fee = P3,500,000 * 0.01 = P35,000', 'Add compliance costs and project management expenses: Total = P35,000 + P50,000 + P30,000 = P115,000'],
      formula: 'Total fee = Supervisory fee + Environmental compliance costs + Project management expenses',
      keyConcept: 'Understanding budget allocation and the components of project fees.',
      commonMistakes: ['Confusing the percentage fee', 'Forgetting to add all expenses', 'Incorrect calculation of total fees'],
      extraneousGivens: ['Environmental compliance costs: P50,000', 'Project management expenses: P30,000', 'Supervisory fee: 1%', 'Total budget: P3,500,000'],
    }
  },
  {
    id: 'llm-a-0876', area: 'A', subTopic: 'laws-ethics',
    topic: 'Agricultural and Biosystems Engineering Law', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of the Agricultural and Biosystems Engineering Law (RA 10915)?',
    options: ['To regulate electricity consumption in farming', 'To strengthen the practice of Agricultural and Biosystems Engineering', 'To establish a committee for environmental issues', 'To promote rice production techniques'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0877', area: 'A', subTopic: 'laws-ethics',
    topic: 'Code of Ethics', type: 'theory', difficulty: 'average',
    question: 'According to the Code of Ethics for Agricultural and Biosystems Engineers, which of the following actions is not acceptable?',
    options: ['Acting as a faithful agent', 'Disclosing confidential information', 'Upholding the dignity of the profession', 'Striving for continuous professional development'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0878', area: 'A', subTopic: 'laws-ethics',
    topic: 'Continuing Professional Development', type: 'theory', difficulty: 'hard',
    question: 'Under RA 10915, which of the following statements about Continuing Professional Development (CPD) is correct?',
    options: ['CPD is optional for Agricultural and Biosystems Engineers.', 'CPD units are required for professional license renewal.', 'CPD programs must be self-administered.', 'CPD is only applicable for new graduates.'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0879', area: 'A', subTopic: 'laws-ethics',
    topic: 'Licensure Examination', type: 'theory', difficulty: 'average',
    question: 'How often is the licensure examination for Agricultural and Biosystems Engineers conducted in the Philippines?',
    options: ['Once a year', 'Twice a year', 'Every quarter', 'Once every two years'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0880', area: 'A', subTopic: 'laws-ethics',
    topic: 'Environmental Laws', type: 'theory', difficulty: 'average',
    question: 'What is the primary purpose of the Solid Waste Management Act in the Philippines?',
    options: ['To enhance agricultural production', 'To regulate the sale of farming equipment', 'To manage waste disposal and reduce waste production', 'To monitor irrigation systems'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0881', area: 'A', subTopic: 'laws-ethics',
    topic: 'Philippine Agricultural Engineering Act', type: 'theory', difficulty: 'average',
    question: 'Republic Act No. 8559 expanded the scope of practice of which engineering field?',
    options: ['Environmental Engineering', 'Civil Engineering', 'Agricultural Engineering', 'Mechanical Engineering'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0882', area: 'A', subTopic: 'laws-ethics',
    topic: 'Licensure Examination Coverage', type: 'theory', difficulty: 'hard',
    question: 'In the context of the licensure examination for Agricultural and Biosystems Engineers, which subject has the highest weight?',
    options: ['Mathematics and Basic Engineering Principles', 'Agricultural and Biosystems Power, Energy and Machinery Engineering', 'Land and Water Resources Engineering', 'Laws, Professional Standards and Ethics'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0883', area: 'A', subTopic: 'laws-ethics',
    topic: 'Cooperative Laws', type: 'theory', difficulty: 'easy',
    question: 'What is the purpose of the Agricultural and Fishery Modernization Act?',
    options: ['To provide more taxes for agricultural products', 'To improve the socio-economic conditions of farmers and fisherfolk', 'To regulate the prices of agricultural goods', 'To establish new government agencies'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0884', area: 'A', subTopic: 'laws-ethics',
    topic: 'Environmental Laws', type: 'theory', difficulty: 'average',
    question: 'The Climate Change Act in the Philippines primarily aims to:',
    options: ['Decrease agricultural production', 'Increase fuel prices', 'Promote environmental sustainability and climate resilience', 'Regulate building codes'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0885', area: 'A', subTopic: 'laws-ethics',
    topic: 'Penalties and Sanctions', type: 'theory', difficulty: 'hard',
    question: 'Under RA 8559, what is the range of fines for violations involving ethical standards?',
    options: ['P500 to P3,000', 'P5,000 to P20,000', 'P50,000 to P200,000', 'P100 to P1,000'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0886', area: 'A', subTopic: 'computation',
    topic: 'Professional Fees Calculation', type: 'computation', difficulty: 'average',
    question: 'An Agricultural Engineer is tasked with preparing a project proposal with an estimated cost of P1,000,000. According to the authorized minimum professional fees, how much should the engineer charge for project proposals?',
    options: ['P100,000', 'P10,000', 'P50,000', 'P1,500'],
    correctAnswer: 0,
    solution: {
      given: 'Estimated cost = P1,000,000; Charge for project proposal = 1% of project cost.',
      steps: ['Calculate fee: 1% of P1,000,000 = P10,000.'],
      formula: 'Fee = 1% × Estimated Cost.',
      keyConcept: 'Professional fees are regulated based on project cost estimates.',
      commonMistakes: ['Confusing project proposals with feasibility studies.', 'Using the wrong percentage for calculations.', 'Forgetting to multiply by 0.01.'],
      extraneousGivens: ['Project proposal is for renovation.', 'Cost of materials is P200,000.', 'Payment will be made in 30 days.'],
    }
  },
  {
    id: 'llm-a-0887', area: 'A', subTopic: 'computation',
    topic: 'Fee Structure for Services', type: 'computation', difficulty: 'easy',
    question: 'If an Agricultural Engineer charges a signing and sealing fee of P2,500 for a project worth P500,000, how much would the fee be for a project worth P200,000?',
    options: ['P1,000', 'P500', 'P1,500', 'P2,500'],
    correctAnswer: 0,
    solution: {
      given: 'Signing and sealing fee for P500,000 = P2,500; Estimated project cost = P200,000.',
      steps: ['Calculate fee: (P2,500 / P500,000) * P200,000 = P1,000.'],
      formula: 'Fee = (Fee for project)/(Project cost) * New project cost.',
      keyConcept: 'Fees are proportional to estimated project costs.',
      commonMistakes: ['Calculating fees using total cost instead of project cost.', 'Assuming flat rates for different project values.', 'Failing to scale fees appropriately.'],
      extraneousGivens: ['The engineer has 10 years of experience.', 'The project involves only structural work.', 'The client has a budget of P300,000.'],
    }
  },
  {
    id: 'llm-a-0888', area: 'A', subTopic: 'computation',
    topic: 'Calculation of Penalties', type: 'computation', difficulty: 'hard',
    question: 'An Agricultural Engineer failed to submit a required report on time and is fined P10,000. If the fine is supposed to be 1% of the project\'s value of P1,500,000, how much more should they pay in addition to the original fine?',
    options: ['P5,000', 'P1,500', 'P3,000', 'P10,000'],
    correctAnswer: 1,
    solution: {
      given: 'Project value = P1,500,000; Fine = P10,000; Fine rate = 1% of project value.',
      steps: ['Calculate additional fine: 1% of P1,500,000 = P15,000.', 'Subtract original fine from the additional: P15,000 - P10,000 = P5,000.'],
      formula: 'Total Fine = (Fine rate × Project value) - Original Fine.',
      keyConcept: 'Fines can be calculated based on project value as a regulatory measure.',
      commonMistakes: ['Using incorrect percentages for calculation.', 'Failing to consider original fines already imposed.', 'Misunderstanding the penalty structure.'],
      extraneousGivens: ['The engineer has submitted other reports.', 'The client is a government agency.', 'The project was for agricultural development.'],
    }
  },
  {
    id: 'llm-a-0889', area: 'A', subTopic: 'computation',
    topic: 'Calculating CPE Requirements', type: 'computation', difficulty: 'average',
    question: 'An Agricultural Engineer needs to earn 45 CPD units every 3 years. If they earn 15 units each year, how many units will they still need to acquire after 2 years?',
    options: ['15 units', '30 units', '0 units', '45 units'],
    correctAnswer: 0,
    solution: {
      given: 'CPD requirement = 45 units; Yearly CPD earned = 15 units; Years passed = 2.',
      steps: ['Calculate total earned in 2 years: 15 units/year × 2 years = 30 units.', 'Calculate remaining units: 45 units - 30 units = 15 units.'],
      formula: 'Remaining CPD = Total Requirement - (Yearly Units × Years Completed).',
      keyConcept: 'Understanding CPD requirements is vital for professional compliance.',
      commonMistakes: ['Assuming that the CPD units earned carry over indefinitely.', 'Forgetting to multiply years by yearly units.', 'Miscalculating the total requirements.'],
      extraneousGivens: ['The engineer also works part-time.', 'The CPD requirements have changed recently.', 'The engineer plans to take additional courses next year.'],
    }
  },
  {
    id: 'llm-a-0890', area: 'A', subTopic: 'computation',
    topic: 'Fee Calculation for Services Rendered', type: 'computation', difficulty: 'hard',
    question: 'If preparing detailed engineering designs for a project costs 3% of the project value and the project is worth P2,000,000, what will be the fee charged? Assume additional irrelevant engineering costs total P80,000.',
    options: ['P60,000', 'P40,000', 'P80,000', 'P200,000'],
    correctAnswer: 0,
    solution: {
      given: 'Project value = P2,000,000; Fee percentage = 3%; Additional irrelevant costs = P80,000.',
      steps: ['Calculate fee: 3% of P2,000,000 = P60,000.'],
      formula: 'Fee = Project value × Fee percentage.',
      keyConcept: 'Understanding fee structures helps engineers budget projects effectively.',
      commonMistakes: ['Including irrelevant costs in fee calculations.', 'Calculating using the wrong percentage.', 'Forgetting to convert percentage to decimal during calculation.'],
      extraneousGivens: ['The project involves rehabilitating drainage systems.', 'Construction will commence in 6 months.', 'The engineer has multiple ongoing projects.'],
    }
  },
  {
    id: 'llm-a-0891', area: 'A', subTopic: 'laws-standards-ethics',
    topic: 'Philippine Agricultural Engineering Law', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of the Philippine Agricultural Engineering Law (RA 3927)?',
    options: ['To regulate agricultural engineering education', 'To standardize agricultural machinery', 'To provide a legal framework for licensure and practice in agricultural engineering', 'To promote foreign agricultural engineers in the Philippines'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0892', area: 'A', subTopic: 'laws-standards-ethics',
    topic: 'Code of Ethics', type: 'theory', difficulty: 'average',
    question: 'According to the Code of Ethics for Agricultural and Biosystems Engineers, what should engineers strive to continuously enhance?',
    options: ['Their financial gain', 'Their professional knowledge and skills', 'Their public image', 'Their popularity in social media'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0893', area: 'A', subTopic: 'laws-standards-ethics',
    topic: 'Licensure Examination', type: 'theory', difficulty: 'average',
    question: 'How many times a year is the Agricultural and Biosystems Engineering licensure examination conducted?',
    options: ['Once a year', 'Twice a year', 'Three times a year', 'Four times a year'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0894', area: 'A', subTopic: 'laws-standards-ethics',
    topic: 'Environmental Laws', type: 'theory', difficulty: 'average',
    question: 'Which of the following is NOT covered by the Solid Waste Management Act?',
    options: ['Landfill operations', 'Recycling initiatives', 'Environmental impact assessments', 'Waste segregation practices'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0895', area: 'A', subTopic: 'laws-standards-ethics',
    topic: 'Agricultural and Biosystems Engineering Act', type: 'theory', difficulty: 'hard',
    question: 'What significant change did the Philippine Agricultural and Biosystems Engineering Act (RA 10915) introduce compared to previous laws?',
    options: ['Prohibition of foreign engineers', 'Mandatory Continuing Professional Development (CPD)', 'Removal of engineering ethics requirements', 'Limitation on the practice scope of engineers'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0896', area: 'A', subTopic: 'laws-standards-ethics',
    topic: 'Professional Conduct', type: 'theory', difficulty: 'easy',
    question: 'What should Agricultural and Biosystems Engineers avoid to maintain public trust?',
    options: ['Offering free consultations', 'Engaging in self-promotional advertising', 'Underbidding for projects', 'Participating in community service'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0897', area: 'A', subTopic: 'laws-standards-ethics',
    topic: 'National Building Code', type: 'theory', difficulty: 'average',
    question: 'The National Building Code of the Philippines primarily governs which aspect of construction?',
    options: ['Aesthetic design standards', 'Safety and structural integrity', 'Cost estimation procedures', 'Machinery specifications'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0898', area: 'A', subTopic: 'laws-standards-ethics',
    topic: 'Continuing Professional Development', type: 'theory', difficulty: 'average',
    question: 'How many CPD units are required every three years under the Agricultural and Biosystems Engineering Act?',
    options: ['30 units', '45 units', '50 units', '60 units'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0899', area: 'A', subTopic: 'laws-standards-ethics',
    topic: 'Agricultural and Fishery Modernization Act', type: 'theory', difficulty: 'average',
    question: 'What is the main goal of the Agricultural and Fishery Modernization Act?',
    options: ['To support traditional farming techniques', 'To increase industrialization in agriculture', 'To promote modernization and competitiveness in agriculture', 'To restrict importation of agricultural products'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0900', area: 'A', subTopic: 'laws-standards-ethics',
    topic: 'Seal and Use of Seal', type: 'theory', difficulty: 'hard',
    question: 'What must all plans and specifications prepared by an Agricultural and Biosystems Engineer include?',
    options: ['An environmental impact statement', 'A certification of competency', 'A stamped and sealed approval', 'An evaluation of costs'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0901', area: 'A', subTopic: 'laws-standards-ethics',
    topic: 'Agricultural and Biosystems Engineering Law', type: 'computation', difficulty: 'average',
    question: 'An Agricultural Engineer needs to prepare a technical specification for a 1-hectare corn farm. The cost of preparation is 3% of the total project cost of Php 1,200,000. What will be the cost for preparing the technical specification? The area of the farm is 10,000 square meters, and the number of varieties of corn is 5.',
    options: ['Php 36,000', 'Php 40,000', 'Php 48,000', 'Php 60,000'],
    correctAnswer: 0,
    solution: {
      given: 'Total project cost = Php 1,200,000; Area = 10,000 m²; Number of varieties = 5',
      steps: ['Calculate preparation cost: Cost = 3% of Php 1,200,000 = 0.03 * 1,200,000 = Php 36,000'],
      formula: 'Cost of preparation = (Preparation percentage) × (Project cost)',
      keyConcept: 'Cost of preparing specifications is a percentage of the total project cost.',
      commonMistakes: ['Calculating cost based on area instead of total project cost', 'Wrong percentage application'],
      extraneousGivens: ['Area of the farm: 10,000 square meters', 'Number of varieties of corn: 5'],
    }
  },
  {
    id: 'llm-a-0902', area: 'A', subTopic: 'laws-standards-ethics',
    topic: 'CPE Requirements', type: 'computation', difficulty: 'hard',
    question: 'If an Agricultural and Biosystems Engineer earned 20 CPD units from one seminar worth 5 units and 25 units from two workshops providing 15 and 10 units respectively, how many more CPD units does he need to acquire to meet the 45-unit requirement? The engineer is also preparing a project report and a feasibility study, and the total cost of these is estimated at Php 300,000.',
    options: ['5 units', '15 units', '10 units', '20 units'],
    correctAnswer: 0,
    solution: {
      given: 'Earned CPD units: 20 (seminar) + 15 (workshop) + 10 (workshop) = 45 units; Total CPE requirement = 45 units',
      steps: ['Total earned = 20 + 15 + 10 = 45 units; Additional units needed = 45 - 45 = 0 units'],
      formula: 'CPE Required = Total Requirements - Earned CPD units',
      keyConcept: 'To meet the CPE requirements, the engineer evaluates his total earned units.',
      commonMistakes: ['Confusing the total with the required units', 'Adding unnecessary values from project costs'],
      extraneousGivens: ['Total project cost: Php 300,000'],
    }
  },
  {
    id: 'llm-a-0903', area: 'A', subTopic: 'laws-standards-ethics',
    topic: 'Contract Preparation Costs', type: 'computation', difficulty: 'average',
    question: 'To prepare a contract for a project costing Php 2,000,000, the fee is 1.5% of the total project cost. What will be the preparation cost? The project is related to irrigation, and the area is 500 hectares.',
    options: ['Php 15,000', 'Php 30,000', 'Php 45,000', 'Php 60,000'],
    correctAnswer: 1,
    solution: {
      given: 'Project cost = Php 2,000,000; Preparation percentage = 1.5%; Area = 500 ha',
      steps: ['Calculate preparation cost: Cost = 1.5% of Php 2,000,000 = 0.015 * 2,000,000 = Php 30,000'],
      formula: 'Preparation cost = (Preparation percentage) × (Total project cost)',
      keyConcept: 'Preparation costs are a percentage of the project cost, not affected by area.',
      commonMistakes: ['Incorrect percentage used', 'Calculating based on irrelevant parameters such as area'],
      extraneousGivens: ['Area of the project: 500 hectares'],
    }
  },
  {
    id: 'llm-a-0904', area: 'A', subTopic: 'laws-standards-ethics',
    topic: 'Financing Agricultural Projects', type: 'computation', difficulty: 'average',
    question: 'A farmer plans to invest in a new tractor costing Php 750,000, with an additional fee of 2% for shipping and handling. What will be the total cost of the tractor? The farmer has also incurred additional costs of Php 30,000 for land preparation, and he expects to grow 15 varieties of crops.',
    options: ['Php 765,000', 'Php 780,000', 'Php 850,000', 'Php 900,000'],
    correctAnswer: 1,
    solution: {
      given: 'Tractor cost = Php 750,000; Shipping fee percentage = 2%; Additional costs = Php 30,000',
      steps: ['Calculate shipping fee: 2% of Php 750,000 = 0.02 * 750,000 = Php 15,000', 'Calculate total cost: Total cost = 750,000 + 15,000 = Php 765,000'],
      formula: 'Total cost = Tractor cost + Shipping fee',
      keyConcept: 'Total investment includes only the purchase and shipping; additional costs like land preparation are extraneous.',
      commonMistakes: ['Including unnecessary costs in total', 'Miscalculating the shipping percentage'],
      extraneousGivens: ['Additional costs for land preparation: Php 30,000', 'Expected varieties of crops: 15'],
    }
  },
  {
    id: 'llm-a-0905', area: 'A', subTopic: 'laws-standards-ethics',
    topic: 'Research and Development Budgeting', type: 'computation', difficulty: 'hard',
    question: 'An agricultural research project requires a budget of Php 1,200,000 with personnel costs accounting for 40% of the total budget. If other costs are estimated to be Php 250,000, what is the budget remaining for research materials? The total duration of the project is 12 months, and it also includes an evaluation phase with a budget of Php 100,000.',
    options: ['Php 150,000', 'Php 200,000', 'Php 300,000', 'Php 350,000'],
    correctAnswer: 2,
    solution: {
      given: 'Total budget = Php 1,200,000; Personnel costs = 40%; Other costs = Php 250,000; Evaluation phase = Php 100,000',
      steps: ['Calculate personnel costs: 40% of 1,200,000 = 0.4 * 1,200,000 = Php 480,000', 'Remaining budget for materials = Total budget - Personnel costs - Other costs - Evaluation phase', 'Remaining budget = 1,200,000 - 480,000 - 250,000 - 100,000 = Php 370,000'],
      formula: 'Remaining budget = Total budget - (Personnel costs + Other costs + Evaluation phase costs)',
      keyConcept: 'Understanding allocation of budget across different project components.',
      commonMistakes: ['Calculating personnel costs incorrectly', 'Not subtracting all necessary costs from the total budget'],
      extraneousGivens: ['Total duration of the project: 12 months'],
    }
  },
  {
    id: 'llm-a-0906', area: 'A', subTopic: 'laws-standards-ethics',
    topic: 'Bidding Process', type: 'computation', difficulty: 'hard',
    question: 'During a bidding process for an irrigation project, the lowest bid received is Php 2,500,000. If the project includes a 5% contingency fund and 3% administrative costs, what will be the total project cost? The bidding includes expenses for three types of crops.',
    options: ['Php 2,575,000', 'Php 2,650,000', 'Php 2,625,000', 'Php 2,700,000'],
    correctAnswer: 1,
    solution: {
      given: 'Lowest bid = Php 2,500,000; Contingency = 5%; Administrative costs = 3%; Crop types = 3',
      steps: ['Calculate contingency = 5% of 2,500,000 = 0.05 * 2,500,000 = Php 125,000', 'Calculate administrative costs = 3% of 2,500,000 = 0.03 * 2,500,000 = Php 75,000', 'Total cost = Lowest bid + Contingency + Administrative costs = 2,500,000 + 125,000 + 75,000 = Php 2,700,000'],
      formula: 'Total project cost = Lowest bid + (Contingency + Administrative costs)',
      keyConcept: 'Bids often include additional costs that must be considered for the overall budget.',
      commonMistakes: ['Forgetting to include either contingency or administrative costs', 'Incorrectly applying the percentage calculations'],
      extraneousGivens: ['Number of crop types: 3'],
    }
  },
  {
    id: 'llm-a-0907', area: 'A', subTopic: 'laws-ethics',
    topic: 'Agricultural and Biosystems Engineering Law', type: 'theory', difficulty: 'easy',
    question: 'What is the main purpose of Republic Act No. 10915 in the context of Agricultural and Biosystems Engineering in the Philippines?',
    options: ['To establish higher penalties for unethical practice', 'To transition from Agricultural Engineering to Agricultural and Biosystems Engineering', 'To create a national agricultural policy for sustainable agriculture', 'To set requirements for civil engineers working in agriculture'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0908', area: 'A', subTopic: 'laws-ethics',
    topic: 'Continuing Professional Development', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is a requirement for renewing a professional license for Agricultural and Biosystems Engineers in the Philippines?',
    options: ['Completion of 30 units of Continuing Professional Development (CPD)', 'Passing a written exam', 'Submission of a thesis', 'Payment of a penalty fee'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0909', area: 'A', subTopic: 'laws-ethics',
    topic: 'Environmental Laws', type: 'theory', difficulty: 'hard',
    question: 'What does the Climate Change Act of 2009 aim to achieve in relation to agricultural engineering practices?',
    options: ['Increase crop yields through genetic modification', 'Promote renewable energy sources in agriculture', 'Establish stricter pesticide regulations', 'Implement carbon trading among farmers'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0910', area: 'A', subTopic: 'laws-ethics',
    topic: 'Scope of Practice', type: 'theory', difficulty: 'average',
    question: 'Which of the following is NOT within the scope of practice for Agricultural and Biosystems Engineers?',
    options: ['Designing irrigation systems', 'Conducting civil engineering projects', 'Consulting on renewable energy systems', 'Evaluating agricultural machinery'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0911', area: 'A', subTopic: 'laws-ethics',
    topic: 'Penalties', type: 'theory', difficulty: 'hard',
    question: 'Under the Philippine Agricultural and Biosystems Engineering Act, what is the maximum fine for professional misconduct?',
    options: ['P3,000', 'P20,000', 'P200,000', 'P500,000'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0912', area: 'A', subTopic: 'laws-ethics',
    topic: 'Professional Standards', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is a duty of an Agricultural and Biosystems Engineer as per the Code of Ethics?',
    options: ['To avoid sharing knowledge with peers', 'To act with fidelity and impartiality to clients', 'To prioritize personal achievements over professional integrity', 'To use client resources for personal gain'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0913', area: 'A', subTopic: 'laws-ethics',
    topic: 'Technical Specifications', type: 'theory', difficulty: 'average',
    question: 'According to the Agricultural and Biosystems Engineering Law, technical specifications should be prepared in compliance with what?',
    options: ['Local government ordinances', 'International standards only', 'Board regulations', 'Client preferences only'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0914', area: 'A', subTopic: 'laws-ethics',
    topic: 'Engineering Plans', type: 'theory', difficulty: 'hard',
    question: 'When submitting engineering plans, what is a critical component that must be included to comply with RA 10915?',
    options: ['Detailed financial forecast', 'Predicted environmental impact assessment', 'Sealing and signing by a registered engineer', 'Photographs of the site'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0915', area: 'A', subTopic: 'power-engineering',
    topic: 'Contract Computation', type: 'computation', difficulty: 'average',
    question: 'A contract for an irrigation project is worth P500,000. The management fee is set at 5% of the total contract cost. Additionally, a project consultant is paid P30,000 for evaluation. If the cost for construction materials is P200,000, what is the total project cost?',
    options: ['P750,000', 'P730,000', 'P740,000', 'P720,000'],
    correctAnswer: 1,
    solution: {
      given: 'Contract cost = P500,000, Management fee = 5%, Consultant fee = P30,000, Material cost = P200,000',
      steps: ['Calculate management fee: Management fee = 0.05 × P500,000 = P25,000', 'Total project cost = Contract cost + Management fee + Consultant fee + Material cost', 'Total project cost = P500,000 + P25,000 + P30,000 + P200,000 = P755,000'],
      formula: 'Total Cost = Contract Cost + Management Fee + Consultant Fee + Material Cost',
      keyConcept: 'Total project cost includes all associated fees.',
      commonMistakes: ['Forgetting to include all costs', 'Using 10% instead of 5% for management fee', 'Miscalculating total'],
      extraneousGivens: ['Amount paid to construction workers: P100,000', 'Project duration: 4 months', 'Location of the project: Central Luzon'],
    }
  },
  {
    id: 'llm-a-0916', area: 'A', subTopic: 'power-engineering',
    topic: 'Materials Pricing', type: 'computation', difficulty: 'easy',
    question: 'A farmer needs to acquire irrigation pipes for a project. Each pipe costs P150. If the farmer plans to buy 25 pipes, with an additional delivery fee of P500, what is the total cost?',
    options: ['P4,500', 'P3,750', 'P3,250', 'P3,000'],
    correctAnswer: 2,
    solution: {
      given: 'Cost per pipe = P150, Number of pipes = 25, Delivery fee = P500',
      steps: ['Total cost of pipes = Cost per pipe × Number of pipes = P150 × 25 = P3,750', 'Total cost = Total cost of pipes + Delivery fee = P3,750 + P500 = P4,250'],
      formula: 'Total Cost = (Cost per Pipe × Number of Pipes) + Delivery Fee',
      keyConcept: 'Consider both product costs and additional fees.',
      commonMistakes: ['Omitting delivery charges', 'Incorrectly multiplying number of pipes', 'Not converting currency from pesos to dollars'],
      extraneousGivens: ['Farmer\'s location: Davao City', 'Previous supplier name: AgriSupply Co.', 'Expected delivery time: 3 days'],
    }
  },
  {
    id: 'llm-a-0917', area: 'A', subTopic: 'power-engineering',
    topic: 'Contract Bidding', type: 'computation', difficulty: 'hard',
    question: 'A bid for a farm machinery contract is set with an estimated project cost of P2,000,000. The contractor also plans a contingency fund of 5% and the tax rate is 12%. What should be the total bid amount including all costs?',
    options: ['P2,640,000', 'P2,520,000', 'P2,540,000', 'P2,600,000'],
    correctAnswer: 2,
    solution: {
      given: 'Estimated project cost = P2,000,000, Contingency fund = 5%, Tax rate = 12%',
      steps: ['Calculate contingency fund: Contingency fund = 0.05 × P2,000,000 = P100,000', 'Subtotal = Estimated project cost + Contingency fund = P2,000,000 + P100,000 = P2,100,000', 'Calculate tax = 0.12 × Subtotal = 0.12 × P2,100,000 = P252,000', 'Total bid amount = Subtotal + Tax = P2,100,000 + P252,000 = P2,352,000'],
      formula: 'Total Bid Amount = (Estimated Cost + Contingency) + Tax',
      keyConcept: 'Bid calculations include projections for unexpected costs and taxation.',
      commonMistakes: ['Confusing contingency with tax calculation', 'Applying an incorrect tax rate', 'Not including contingency in the bid'],
      extraneousGivens: ['Contract duration: 6 months', 'Materials supplier: local brand', 'Previous price quotes: P1,800,000'],
    }
  },
  {
    id: 'llm-a-0918', area: 'A', subTopic: 'power-engineering',
    topic: 'Material Costing', type: 'computation', difficulty: 'average',
    question: 'A provincial agribusiness requires 500 bags of fertilizer costing P800 each. However, they received an additional shipment of 150 bags that were priced at P700 each. Calculate the average cost per bag for all fertilizer received.',
    options: ['P700', 'P740', 'P760', 'P780'],
    correctAnswer: 1,
    solution: {
      given: 'Cost of first batch = P800, Quantity of first batch = 500, Cost of second batch = P700, Quantity of second batch = 150',
      steps: ['Total cost of first batch = P800 × 500 = P400,000', 'Total cost of second batch = P700 × 150 = P105,000', 'Total bags received = 500 + 150 = 650', 'Total cost = P400,000 + P105,000 = P505,000', 'Average cost per bag = Total cost / Total bags = P505,000 / 650 = P776.92'],
      formula: 'Average Cost per Bag = Total Cost / Total Bags',
      keyConcept: 'Average cost considers all quantities and prices.',
      commonMistakes: ['Only calculating based on the first batch', 'Forgetting multiple units in calculations', 'Using incorrect pricing from supplier agreements'],
      extraneousGivens: ['Supplier location: Southern Leyte', 'Delivery cost: P1,200', 'Expected next shipment: 300 bags'],
    }
  },
  {
    id: 'llm-a-0919', area: 'A', subTopic: 'power-engineering',
    topic: 'Project Budgeting', type: 'computation', difficulty: 'hard',
    question: 'An agri-business project has a budget allocation of P1,500,000 for machinery. It is planned to buy three different types of machines: Tractors at P400,000 each, Plows at P150,000 each, and Seeders at P200,000 each. If the business intends to purchase 3 tractors, 4 plows, and 5 seeders, how much of the allocated budget will remain?',
    options: ['P450,000', 'P600,000', 'P375,000', 'P500,000'],
    correctAnswer: 0,
    solution: {
      given: 'Budget = P1,500,000, Cost of tractor = P400,000, Cost of plow = P150,000, Cost of seeder = P200,000, Quantities: Tractors=3, Plows=4, Seeders=5',
      steps: ['Total cost of tractors = 3 × P400,000 = P1,200,000', 'Total cost of plows = 4 × P150,000 = P600,000', 'Total cost of seeders = 5 × P200,000 = P1,000,000', 'Total expenditure = Total tractors + Total plows + Total seeders = P1,200,000 + P600,000 + P1,000,000 = P2,800,000', 'Remaining budget = Budget - Total expenditure = P1,500,000 - P2,800,000 = -P1,300,000 (over budget)'],
      formula: 'Remaining Budget = Initial Budget - Total Expenditure',
      keyConcept: 'Budgeting requires accurate tracking of both costs and quantities.',
      commonMistakes: ['Forgetting to calculate total costs for all equipment', 'Ignoring previous expenditures', 'Incorrectly calculating tractor and plow costs'],
      extraneousGivens: ['Business location: Bulacan', 'Expected income from sales: P2,000,000', 'Project duration: 1 year'],
    }
  },
  {
    id: 'llm-a-0920', area: 'A', subTopic: 'laws-ethics',
    topic: 'Agricultural and Biosystems Engineering Law', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of the Philippine Agricultural and Biosystems Engineering Act of 2016 (RA 10915)?',
    options: ['To define the scope of agricultural engineering as a profession', 'To strengthen and modernize the agricultural engineering profession', 'To create the Board of Agricultural and Biosystems Engineering', 'To regulate agricultural machinery'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0921', area: 'A', subTopic: 'laws-ethics',
    topic: 'Code of Ethics for AB Engineers', type: 'theory', difficulty: 'average',
    question: 'Which of the following is a duty of Agricultural and Biosystems Engineers according to the Code of Ethics?',
    options: ['To prioritize personal gain over public safety', 'To maintain confidentiality regarding client information', 'To engage in advertising that exaggerates qualifications', 'To limit professional development activities'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0922', area: 'A', subTopic: 'laws-ethics',
    topic: 'Professional Regulatory Board', type: 'theory', difficulty: 'hard',
    question: 'What is the maximum term of office for members of the Professional Regulatory Board of Agricultural and Biosystems Engineering?',
    options: ['2 years', '3 years', '4 years', '5 years'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0923', area: 'A', subTopic: 'laws-ethics',
    topic: 'Continuing Professional Development', type: 'theory', difficulty: 'average',
    question: 'According to RA 10915, how many units of Continuing Professional Development (CPD) must an Agricultural and Biosystems Engineer accumulate in three years?',
    options: ['30 units', '45 units', '60 units', '75 units'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0924', area: 'A', subTopic: 'laws-ethics',
    topic: 'Licensure Examination Requirements', type: 'theory', difficulty: 'easy',
    question: 'What is the minimum general weighted average required to pass the Agricultural and Biosystems Engineering board examination?',
    options: ['65%', '70%', '75%', '80%'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0925', area: 'A', subTopic: 'laws-ethics',
    topic: 'Scope of Practice of AB Engineering', type: 'theory', difficulty: 'average',
    question: 'Which of the following areas is NOT explicitly included in the scope of practice for Agricultural and Biosystems Engineers as per RA 10915?',
    options: ['Soil and water conservation', 'Farm machinery operation', 'Environmental impact assessments', 'Agricultural and biosystems automation'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0926', area: 'A', subTopic: 'laws-ethics',
    topic: 'Extraneous Professional Misconduct', type: 'theory', difficulty: 'hard',
    question: 'Which of the following behaviors could be considered a violation of the ethical standards set forth for Agricultural and Biosystems Engineers?',
    options: ['Disclosing client information with permission', 'Not updating oneself with the latest engineering practices', 'Engaging in professional advertising', 'Maintaining a regular office for business transactions'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0927', area: 'A', subTopic: 'laws-ethics',
    topic: 'Philippine Agricultural and Biosystems Engineering Act', type: 'theory', difficulty: 'average',
    question: 'Which Republic Act expanded the scope of practice from the original Agricultural Engineering to Agricultural and Biosystems Engineering?',
    options: ['RA 8559', 'RA 3927', 'RA 10915', 'RA 10601'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0928', area: 'A', subTopic: 'laws-ethics',
    topic: 'Penalties for Violations', type: 'theory', difficulty: 'easy',
    question: 'What is the penalty for Agricultural and Biosystems Engineers who violate the regulations set in RA 10915?',
    options: ['Only a warning', 'Imprisonment up to 1 year', 'Fines ranging from P500 to P3,000', 'Reprimand from the Board'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0929', area: 'A', subTopic: 'laws-ethics',
    topic: 'Role of the Board', type: 'theory', difficulty: 'average',
    question: 'Which of the following is NOT a function of the Board of Agricultural and Biosystems Engineering?',
    options: ['Conducting licensure examinations', 'Issuing professional licenses', 'Drafting laws for agricultural policies', 'Implementing continuing education programs'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0930', area: 'A', subTopic: 'laws-ethics',
    topic: 'Technical Seals', type: 'theory', difficulty: 'hard',
    question: 'According to RA 10915, who is responsible for the use of the professional seal on engineering documents?',
    options: ['Any engineer in the office', 'The Agricultural and Biosystems Engineer-in-charge', 'The company president', 'The firm owner'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0931', area: 'A', subTopic: 'laws-ethics',
    topic: 'Client Relations', type: 'theory', difficulty: 'average',
    question: 'Which principle should Agricultural and Biosystems Engineers follow in their relationships with clients and employers?',
    options: ['Act as faithful agents', 'Maximize profits at all costs', 'Limit communication to avoid misunderstandings', 'Avoid professional attire'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0932', area: 'A', subTopic: 'laws-ethics',
    topic: 'Law and Ethics', type: 'computation', difficulty: 'easy',
    question: 'An Agricultural Engineer is preparing a project proposal that costs P1,200,000. According to authorized fees, how much should they charge for the preparation of the project proposal?',
    options: ['P12,000', 'P15,000', 'P20,000', 'P25,000'],
    correctAnswer: 2,
    solution: {
      given: 'Project cost = P1,200,000',
      steps: ['Charge for project proposal = 1% of project cost', 'Charge = 1% × P1,200,000 = P12,000'],
      formula: 'Charge = 1% of Project Cost',
      keyConcept: 'Understanding fee structures for project proposals.',
      commonMistakes: ['Incorrect percentage used', 'Miscalculating total cost'],
      extraneousGivens: ['Cost of materials: P500,000', 'Time frame: 3 months', 'Labor cost: P300,000'],
    }
  },
  {
    id: 'llm-a-0933', area: 'A', subTopic: 'laws-ethics',
    topic: 'Penalties and Fees', type: 'computation', difficulty: 'easy',
    question: 'If an Agricultural and Biosystems Engineer incorrectly seals a document, they may face a fine of P1,500. If they incorrectly seal 4 documents, what would be the total fine?',
    options: ['P3,000', 'P6,000', 'P4,500', 'P7,500'],
    correctAnswer: 2,
    solution: {
      given: 'Fine per document = P1,500, Number of documents = 4',
      steps: ['Total fine = Fine per document × Number of documents', 'Total fine = P1,500 × 4 = P6,000'],
      formula: 'Total Fine = Fine per document × Number of documents',
      keyConcept: 'Calculating total penalties based on unit costs.',
      commonMistakes: ['Forgetting to multiply by the number of documents', 'Using the wrong fine amount'],
      extraneousGivens: ['Document type: Engineering Plans', 'Submission date: January 15', 'Review cost: P5,000'],
    }
  },
  {
    id: 'llm-a-0934', area: 'A', subTopic: 'laws-ethics',
    topic: 'Professional License Renewal', type: 'computation', difficulty: 'average',
    question: 'An Agricultural and Biosystems Engineer has to renew their professional license, which costs P3,000 every three years. If the engineer started working in 2020, how much will they have paid by the end of 2023 with the renewals?',
    options: ['P6,000', 'P9,000', 'P12,000', 'P3,000'],
    correctAnswer: 0,
    solution: {
      given: 'Cost per renewal = P3,000, Total years = 4',
      steps: ['Number of renewals = 4 years / 3 years = 1.33 (1 renewal completed)', 'Total cost = Number of renewals × Cost per renewal = 1 × P3,000 = P3,000'],
      formula: 'Total Cost = (Years in practice / Renewal Period) × Renewal Cost',
      keyConcept: 'Understanding the cost of professional renewal over time.',
      commonMistakes: ['Forgetting to consider the renewal period', 'Calculating years instead of renewals'],
      extraneousGivens: ['Year started: 2020', 'Current year: 2023', 'Initial registration fee: P500'],
    }
  },
  {
    id: 'llm-a-0935', area: 'A', subTopic: 'laws-ethics',
    topic: 'Document Sealing', type: 'computation', difficulty: 'hard',
    question: 'An engineer must seal a set of plans that includes 12 different documents. Each document requires 3 stamps at a cost of P150 per stamp. What is the total cost for stamping all documents?',
    options: ['P4,500', 'P5,400', 'P3,600', 'P2,250'],
    correctAnswer: 1,
    solution: {
      given: 'Number of documents = 12, Stamps per document = 3, Cost per stamp = P150',
      steps: ['Total stamps needed = 12 × 3 = 36', 'Total cost = 36 × P150 = P5,400'],
      formula: 'Total Cost = Number of Documents × Stamps per Document × Cost per Stamp',
      keyConcept: 'Understanding total costs based on unit pricing.',
      commonMistakes: ['Miscounting the number of documents', 'Forgetting to multiply correctly'],
      extraneousGivens: ['Stamp design: Standard', 'Delivery cost: P200', 'Timeline: 2 weeks'],
    }
  },
  {
    id: 'llm-a-0936', area: 'A', subTopic: 'laws-ethics',
    topic: 'Professional Fees', type: 'computation', difficulty: 'easy',
    question: 'An Agricultural Engineer charges 5% of the project cost for project management. If the project cost is P900,000, what is the fee charged for project management?',
    options: ['P45,000', 'P50,000', 'P30,000', 'P40,000'],
    correctAnswer: 0,
    solution: {
      given: 'Project cost = P900,000, Rate = 5%',
      steps: ['Fee = Project Cost × Rate', 'Fee = P900,000 × 0.05 = P45,000'],
      formula: 'Fee = Project Cost × Rate',
      keyConcept: 'Calculating professional fees based on project costs.',
      commonMistakes: ['Incorrect percentage used', 'Miscalculating total cost'],
      extraneousGivens: ['Additional expenses: P10,000', 'Project duration: 6 months', 'Client meeting: P1,000'],
    }
  },
  {
    id: 'llm-a-0937', area: 'A', subTopic: 'laws-ethics',
    topic: 'Penalty Assessment', type: 'computation', difficulty: 'hard',
    question: 'If an Agricultural and Biosystems Engineer faces a penalty of P500 for each violation and they have three violations, what will be the total penalty assessed?',
    options: ['P1,000', 'P1,500', 'P2,000', 'P2,500'],
    correctAnswer: 1,
    solution: {
      given: 'Penalty per violation = P500, Number of violations = 3',
      steps: ['Total penalty = Penalty per violation × Number of violations', 'Total penalty = P500 × 3 = P1,500'],
      formula: 'Total Penalty = Penalty per Violation × Number of Violations',
      keyConcept: 'Calculating total penalties based on unit costs.',
      commonMistakes: ['Incorrect multiplier used', 'Ignoring the number of violations'],
      extraneousGivens: ['Type of violations: Minor', 'Duration of assessment: 1 month', 'Additional fees: P200'],
    }
  },
  {
    id: 'llm-a-0938', area: 'A', subTopic: 'laws-ethics',
    topic: 'RA 10601 Overview', type: 'theory', difficulty: 'easy',
    question: 'What is the main purpose of Republic Act No. 10601, also known as the Agricultural and Biosystems Engineering Law?',
    options: ['To regulate the practice of agricultural engineering', 'To provide funding for agricultural projects', 'To promote organic farming methods', 'To mandate soil conservation practices'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0939', area: 'A', subTopic: 'laws-ethics',
    topic: 'Continuing Professional Development', type: 'theory', difficulty: 'average',
    question: 'Why is Continuing Professional Development (CPD) important for Agricultural and Biosystems Engineers under RA 10915?',
    options: ['To increase the number of registered engineers', 'To maintain and enhance professional competence', 'To reduce the fees for licensure exams', 'To allow engineers to work without supervision'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0940', area: 'A', subTopic: 'laws-ethics',
    topic: 'Professional Regulation Commission', type: 'theory', difficulty: 'easy',
    question: 'What is the role of the Professional Regulation Commission (PRC) in relation to Agricultural and Biosystems Engineers?',
    options: ['To conduct market research for agricultural products', 'To administer licensure examinations', 'To promote the sale of agricultural products', 'To provide financial aid to engineers'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0941', area: 'A', subTopic: 'laws-ethics',
    topic: 'Building Code', type: 'theory', difficulty: 'average',
    question: 'Which law governs the construction standards for agricultural buildings in the Philippines?',
    options: ['Environmental Laws', 'National Building Code', 'Agricultural and Fishery Mechanization Law', 'Agricultural Modernization Act'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0942', area: 'A', subTopic: 'laws-ethics',
    topic: 'RA 8559', type: 'theory', difficulty: 'hard',
    question: 'Which of the following is a significant expansion introduced by Republic Act No. 8559 compared to RA 3927?',
    options: ['Direct licensing of agricultural workers', 'Introduction of Continuing Professional Education (CPE)', 'Regulation of farm ownership', 'Liability insurance requirements for engineers'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0943', area: 'A', subTopic: 'laws-ethics',
    topic: 'Environmental Laws', type: 'theory', difficulty: 'hard',
    question: 'What is the primary focus of the Solid Waste Management Act in relation to Agricultural Engineering?',
    options: ['Reduction of food production costs', 'Management of agricultural waste disposal', 'Promotion of renewable energy in agriculture', 'Improvement of irrigation systems'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0944', area: 'A', subTopic: 'laws-ethics',
    topic: 'Power and Machinery', type: 'computation', difficulty: 'average',
    question: 'An irrigation system designed by an Agricultural Engineer uses 50 cubic meters of water per hour to irrigate a 2-hectare rice field. If the recommended water depth is 5 cm, how long (in hours) can the water supply last? Given that 1 hectare = 10,000 m², and rainfall for the week was 30 mm.',
    options: ['5.75 hours', '6.25 hours', '7 hours', '8.5 hours'],
    correctAnswer: 1,
    solution: {
      given: 'Water supply = 50 m³/h, Area = 2 ha = 20,000 m², Water depth = 5 cm = 0.05 m',
      steps: ['Calculate volume needed: Volume = Area × Depth = 20,000 m² × 0.05 m = 1,000 m³', 'Calculate hours of supply: Hours = Volume needed / Water supply = 1,000 m³ / 50 m³/h = 20 hours'],
      formula: 'Volume = Area × Depth; Hours = Volume needed / Water supply',
      keyConcept: 'The duration of water supply can be calculated by determining the required volume for irrigation and dividing by the flow rate.',
      commonMistakes: ['Incorrectly converting hectares to square meters', 'Neglecting to factor in rainfall', 'Miscalculating depth'],
      
    }
  },
  {
    id: 'llm-a-0945', area: 'A', subTopic: 'laws-ethics',
    topic: 'Professional Regulation', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of the Code of Ethical and Professional Standards for Agricultural and Biosystems Engineers?',
    options: ['To increase the competitiveness of engineers', 'To establish a framework for ethical practice', 'To reduce the cost of engineering services', 'To promote international licensing'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0946', area: 'A', subTopic: 'laws-ethics',
    topic: 'RA 10915 Implementation', type: 'computation', difficulty: 'average',
    question: 'A project proposal estimated the construction cost at PHP 1,500,000. According to authorized fees, what is the signing and sealing cost for this project? Consider that also, the estimated project includes unnecessary structural reinforcements costing PHP 200,000.',
    options: ['PHP 2,000', 'PHP 4,500', 'PHP 1,500', 'PHP 3,000'],
    correctAnswer: 0,
    solution: {
      given: 'Project cost = PHP 1,500,000, Signing and sealing fee = 1.5% of project cost = 1.5% of PHP 1,500,000',
      steps: ['Calculate signing and sealing fee: 1.5% of PHP 1,500,000 = 0.015 × 1,500,000 = PHP 22,500', 'Only consider required project cost for signing/sealing: PHP 1,500,000'],
      formula: 'Signing and Sealing Cost = Project Cost × 0.015',
      keyConcept: 'The cost for signing and sealing documents is based purely on the total project cost excluding unnecessary expenses.',
      commonMistakes: ['Calculating percentage incorrectly', 'Using unnecessary project costs', 'Failing to recognize the fee structure'],
      
    }
  },
  {
    id: 'llm-a-0947', area: 'A', subTopic: 'laws-ethics',
    topic: 'Agricultural Engineering', type: 'theory', difficulty: 'average',
    question: 'Under RA 10915, which of the following is NOT included in the scope of practice for Agricultural and Biosystems Engineers?',
    options: ['Soil and water conservation engineering', 'Agricultural biotechnology', 'Agricultural waste management', 'Farm electrification systems'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0948', area: 'A', subTopic: 'laws-ethics',
    topic: 'Compliance and Licensure', type: 'theory', difficulty: 'hard',
    question: 'What is required for an Agricultural Engineer to renew their professional license under RA 10915?',
    options: ['Completion of 45 CPD units every 3 years', 'Experience in agricultural machinery', 'Passing a national examination every year', 'Submitting a performance bond'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0949', area: 'A', subTopic: 'laws-ethics',
    topic: 'Environmental Compliance', type: 'computation', difficulty: 'average',
    question: 'A farm management system estimates the need for 200 kg of fertilizers per hectare for optimal corn yield. If a farmer has 5 hectares and also includes 15% extra for wastage, how many kg of fertilizers should the farmer purchase? Given costs of PHP 600 per kg of fertilizer.',
    options: ['1,500 kg', '1,800 kg', '1,600 kg', '2,000 kg'],
    correctAnswer: 1,
    solution: {
      given: 'Fertilizer need = 200 kg/ha, Area = 5 ha, Wastage = 15%',
      steps: ['Calculate total need: Total need = 200 kg/ha × 5 ha = 1,000 kg', 'Calculate total with wastage: Total with wastage = 1,000 kg × 1.15 = 1,150 kg'],
      formula: 'Total Fertilizers = (Fertilizer per ha × Area) × (1 + Wastage Percentage)',
      keyConcept: 'Always account for potential wastage in agricultural inputs to ensure adequate supply.',
      commonMistakes: ['Not factoring in wastage', 'Miscalculating area', 'Confusing weight and volume'],
      
    }
  },
  {
    id: 'llm-a-0950', area: 'A', subTopic: 'laws-ethics',
    topic: 'Regulatory Framework', type: 'theory', difficulty: 'hard',
    question: 'Which among the following is NOT a function of the Board of ABE in the Philippines?',
    options: ['Conducting licensure examinations', 'Setting up engineering colleges', 'Regulating the practice of agricultural and biosystems engineering', 'Issuing Certificates of Registration'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0951', area: 'A', subTopic: 'laws-ethics',
    topic: 'Agricultural Engineering Laws', type: 'theory', difficulty: 'easy',
    question: 'The Philippine Agricultural Engineering Act of 1998 is formally known as what?',
    options: ['RA 10601', 'RA 8559', 'RA 10915', 'RA 3927'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0952', area: 'A', subTopic: 'laws-ethics',
    topic: 'Renewable Energy Projects', type: 'computation', difficulty: 'average',
    question: 'A solar irrigation system can deliver 300 cubic meters of water daily utilizing 50% efficiency from solar power. If the system operates for 8 hours a day, what is the flow rate in liters per second considering unnecessary variations in daily sunlight hours? Given 1 cu.m. = 1,000 L.',
    options: ['5.56 L/s', '20 L/s', '10 L/s', '15 L/s'],
    correctAnswer: 0,
    solution: {
      given: 'Daily flow = 300 m³, Operating hours = 8 h, Efficiency = 50%',
      steps: ['Calculate daily L/s: 300 m³ = 300,000 L', 'Calculate flow rate: Flow rate = 300,000 L / (8 × 3600 seconds) ≈ 10.42 L/s'],
      formula: 'Flow rate (L/s) = Total daily volume (L) / (Operating hours × 3600)',
      keyConcept: 'Understanding the flow rate is crucial for efficient water management in agricultural systems.',
      commonMistakes: ['Wrongly converting units', 'Neglecting efficiency', 'Miscalculating daily operational periods'],
      
    }
  },
  {
    id: 'llm-a-0953', area: 'A', subTopic: 'laws-ethics',
    topic: 'Professional Ethics', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is a key principle of professional ethics outlined for Agricultural and Biosystems Engineers?',
    options: ['Profit maximization', 'Community service', 'Client confidentiality', 'Self-promotion'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0954', area: 'A', subTopic: 'laws-ethics',
    topic: 'Philippine Agricultural Engineering Law', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of the Philippine Agricultural Engineering Act of 1998 (RA 8559)?',
    options: ['To require continuing education for agricultural engineers', 'To define agricultural engineering as a profession', 'To establish penalties for non-compliance', 'To regulate the construction of agricultural buildings'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0955', area: 'A', subTopic: 'laws-ethics',
    topic: 'Code of Ethics', type: 'theory', difficulty: 'easy',
    question: 'According to the Code of Ethics, what must an Agricultural and Biosystems Engineer do to maintain good relations with clients?',
    options: ['Regularly advertise their services', 'Act as faithful agents and trustees', 'Share confidential client information', 'Frequently change their fees'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0956', area: 'A', subTopic: 'laws-ethics',
    topic: 'Agricultural and Biosystems Engineering Act', type: 'theory', difficulty: 'average',
    question: 'Under the Philippine Agricultural and Biosystems Engineering Act of 2016 (RA 10915), which of the following is NOT a scope of practice for Agricultural and Biosystems Engineers?',
    options: ['Preparation of agricultural waste management plans', 'Management of environmental studies', 'Manufacture of agricultural machinery', 'Construction of residential buildings'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0957', area: 'A', subTopic: 'laws-ethics',
    topic: 'Professional Regulatory Board', type: 'theory', difficulty: 'average',
    question: 'How many members comprise the Professional Regulatory Board of Agricultural and Biosystems Engineering?',
    options: ['3 members including the chairperson', '5 members including the chairperson', '7 members including the chairperson', '9 members including the chairperson'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0958', area: 'A', subTopic: 'laws-ethics',
    topic: 'Environmental Laws', type: 'theory', difficulty: 'hard',
    question: 'The Solid Waste Management Act (RA 9003) aims to promote which of the following?',
    options: ['Strict penalties for illegal logging', 'Waste segregation at source', 'Increased landfill capacity', 'Promotion of incineration technology'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0959', area: 'A', subTopic: 'laws-ethics',
    topic: 'Continuing Professional Development', type: 'theory', difficulty: 'easy',
    question: 'What is the mandatory requirement for Agricultural and Biosystems Engineers for license renewal under RA 10915?',
    options: ['Completion of a project management course', 'Submission of a business plan', 'Completion of Continuing Professional Development (CPD) credits', 'Passing a board exam every three years'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0960', area: 'A', subTopic: 'laws-ethics',
    topic: 'Seal and Use of Seal', type: 'theory', difficulty: 'average',
    question: 'What is required for an Agricultural and Biosystems Engineer\'s seal according to RA 10915?',
    options: ['It must be rectangular', 'It should be 50 mm in diameter', 'It must include the engineer\'s professional license number', 'It should have a dodecagon shape'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0961', area: 'A', subTopic: 'laws-ethics',
    topic: 'Laws and Regulations', type: 'theory', difficulty: 'hard',
    question: 'What is the purpose of the Agricultural and Fishery Mechanization Law?',
    options: ['To regulate the pricing of agricultural products', 'To promote the use of mechanization in agriculture', 'To establish penalties for non-compliance', 'To support research in organic farming'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0962', area: 'A', subTopic: 'laws-ethics',
    topic: 'Ethics in Engineering', type: 'theory', difficulty: 'average',
    question: 'What should an Agricultural and Biosystems Engineer do if they suspect unethical behavior by another engineer?',
    options: ['Ignore the behavior', 'Report it to the Board', 'Publicly criticize the engineer', 'Confront the engineer directly'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0963', area: 'A', subTopic: 'laws-ethics',
    topic: 'Environmental Laws', type: 'theory', difficulty: 'hard',
    question: 'Which law focuses on the management of climate change impacts in the Philippines?',
    options: ['Clean Air Act', 'Climate Change Act', 'Solid Waste Management Act', 'Environmental Impact Assessment Law'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0964', area: 'A', subTopic: 'laws-ethics',
    topic: 'Project Management in ABE', type: 'computation', difficulty: 'easy',
    question: 'An agricultural engineer is preparing a project proposal for a farm irrigation system costing ₱1,200,000. If the fee for preparing the project proposal is 1% of the project cost, what is the total fee? The proposal includes detailed site analysis, design, and environmental impact assessment.',
    options: ['₱12,000', '₱15,000', '₱10,000', '₱20,000'],
    correctAnswer: 0,
    solution: {
      given: 'Project cost = ₱1,200,000, Fee percentage = 1%, Extraneous: Site analysis, design, environmental impact assessment',
      steps: ['Total fee = Project cost × Fee percentage = ₱1,200,000 × 0.01 = ₱12,000'],
      formula: 'Fee = Project cost × Fee percentage',
      keyConcept: 'Preparation fees are calculated as a percentage of the total project cost.',
      commonMistakes: ['Calculating as 2%', 'Forgetting to multiply by 0.01', 'Ignoring the fee percentage'],
      extraneousGivens: ['Project proposal includes detailed site analysis', 'Project proposal includes design', 'Project proposal includes environmental impact assessment'],
    }
  },
  {
    id: 'llm-a-0965', area: 'A', subTopic: 'laws-ethics',
    topic: 'Contract Management', type: 'computation', difficulty: 'average',
    question: 'If an Agricultural and Biosystems Engineer charges a consultation fee of ₱200,000 for a project and the contract specifies a penalty of 10% for late submission of reports, how much penalty would be incurred if the engineer is late by 5 days? The project duration is 60 days and it includes soil analysis and machinery evaluation.',
    options: ['₱20,000', '₱10,000', '₱30,000', '₱25,000'],
    correctAnswer: 0,
    solution: {
      given: 'Consultation fee = ₱200,000, Penalty percentage = 10%, Delay days = 5, Extraneous: Project duration = 60 days, Soil analysis and machinery evaluation',
      steps: ['Penalty = Consultation fee × Penalty percentage = ₱200,000 × 0.1 = ₱20,000'],
      formula: 'Penalty = Consultation fee × Penalty percentage',
      keyConcept: 'Penalties are calculated based on the total consultation fee and specified percentage.',
      commonMistakes: ['Calculating penalty as a percentage of total project cost', 'Ignoring the late days', 'Using 5% instead of 10%'],
      extraneousGivens: ['Project duration = 60 days', 'Includes soil analysis', 'Includes machinery evaluation'],
    }
  },
  {
    id: 'llm-a-0966', area: 'A', subTopic: 'laws-ethics',
    topic: 'Regulatory Compliance', type: 'computation', difficulty: 'hard',
    question: 'An Agricultural and Biosystems Engineer needs to prepare environmental studies for a project costing ₱3,500,000. If the environmental assessment fee is 3% of the project cost, how much is the fee? The project includes construction of a greenhouse, costing ₱150,000, and agricultural processing facilities.',
    options: ['₱105,000', '₱100,000', '₱90,000', '₱80,000'],
    correctAnswer: 0,
    solution: {
      given: 'Project cost = ₱3,500,000, Assessment fee = 3%, Extraneous: Greenhouse cost = ₱150,000, Agricultural processing facilities',
      steps: ['Environmental assessment fee = Project cost × Assessment fee percentage = ₱3,500,000 × 0.03 = ₱105,000'],
      formula: 'Fee = Project cost × Assessment fee percentage',
      keyConcept: 'Environmental assessment fees are based on project costs and percentage rates.',
      commonMistakes: ['Calculating fee as 5%', 'Using incorrect project cost', 'Forgetting to multiply by percentage'],
      extraneousGivens: ['Cost of greenhouse = ₱150,000', 'Includes agricultural processing facilities'],
    }
  },
  {
    id: 'llm-a-0967', area: 'A', subTopic: 'laws-ethics',
    topic: 'Contract Management', type: 'computation', difficulty: 'easy',
    question: 'An Agricultural and Biosystems Engineer is preparing a comprehensive project report that will cost ₱250,000. If the signing and sealing fee is based on 2% of the project cost, what is the fee for signing and sealing? This cost also includes equipment evaluation, which costs ₱50,000.',
    options: ['₱5,000', '₱7,500', '₱6,000', '₱4,500'],
    correctAnswer: 0,
    solution: {
      given: 'Project cost = ₱250,000, Signing and sealing fee = 2%, Extraneous: Equipment evaluation cost = ₱50,000',
      steps: ['Signing and sealing fee = Project cost × Signing and sealing percentage = ₱250,000 × 0.02 = ₱5,000'],
      formula: 'Fee = Project cost × Signing and sealing percentage',
      keyConcept: 'Signing and sealing fees are calculated as a percentage of the total project cost.',
      commonMistakes: ['Calculating as 3% instead of 2%', 'Adding equipment evaluation cost to project cost', 'Missing the percentage calculation'],
      extraneousGivens: ['Cost of equipment evaluation = ₱50,000'],
    }
  },
  {
    id: 'llm-a-0968', area: 'A', subTopic: 'laws-ethics',
    topic: 'Regulatory Compliance', type: 'theory', difficulty: 'average',
    question: 'What must an Agricultural and Biosystems Engineer do when submitting plans and specifications to the local government?',
    options: ['Ensure plans are stamped with the engineer\'s seal', 'Have plans approved by any engineer', 'Submit plans without a fee', 'Prepare plans without site analysis'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0969', area: 'A', subTopic: 'laws-ethics',
    topic: 'Environmental Laws', type: 'theory', difficulty: 'hard',
    question: 'What is the main goal of the Renewable Energy Law in the Philippines?',
    options: ['To promote fossil fuel use', 'To increase the share of renewable energy in the energy mix', 'To regulate the construction of traditional power plants', 'To limit the importation of energy resources'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0970', area: 'A', subTopic: 'laws-ethics',
    topic: 'Continuing Professional Development', type: 'theory', difficulty: 'average',
    question: 'Which of the following is a requirement for Agricultural and Biosystems Engineers under the Continuing Professional Development (CPD) program?',
    options: ['Completing a monthly project report', 'Engaging in continuous learning and training', 'Providing free consultation services', 'Attending political events'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0971', area: 'A', subTopic: 'laws-ethics',
    topic: 'Professional Regulatory Board', type: 'theory', difficulty: 'hard',
    question: 'Which entity oversees the implementation of the Agricultural and Biosystems Engineering Act?',
    options: ['Department of Agriculture', 'Professional Regulation Commission', 'Department of Environment and Natural Resources', 'Board of Agricultural Engineering'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0972', area: 'A', subTopic: 'laws-ethics',
    topic: 'Environmental Laws', type: 'theory', difficulty: 'easy',
    question: 'What is the primary focus of the Clean Water Act in the Philippines?',
    options: ['Regulating emissions from agricultural machinery', 'Protecting and improving water quality', 'Promoting electricity generation', 'Managing solid waste'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0973', area: 'A', subTopic: 'laws-ethics',
    topic: 'Philippine Agricultural Engineering Law', type: 'theory', difficulty: 'easy',
    question: 'What is the primary objective of the Philippine Agricultural Engineering Law (RA 3927)?',
    options: ['To define the scope of agricultural engineering practice', 'To establish the licensing procedure for agricultural engineers', 'To create the Board of Agricultural Engineering', 'To regulate agricultural machinery sales'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0974', area: 'A', subTopic: 'laws-ethics',
    topic: 'Board of Agricultural and Biosystems Engineering', type: 'theory', difficulty: 'easy',
    question: 'How many members are there in the Board of Agricultural and Biosystems Engineering according to RA 10915?',
    options: ['3 members', '5 members', '2 members', '4 members'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0975', area: 'A', subTopic: 'laws-ethics',
    topic: 'Code of Ethics', type: 'theory', difficulty: 'average',
    question: 'Which of the following is NOT a responsibility outlined in the Code of Ethics for Agricultural and Biosystems Engineers?',
    options: ['Acting with fairness towards clients', 'Prioritizing personal gain over ethical standards', 'Safeguarding public health and safety', 'Providing accurate information and recommendations'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0976', area: 'A', subTopic: 'laws-ethics',
    topic: 'Continuing Professional Development (CPD)', type: 'theory', difficulty: 'average',
    question: 'What is the minimum CPD credit units required for Agricultural and Biosystems Engineers every three years according to RA 10915?',
    options: ['30 units', '45 units', '60 units', '15 units'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0977', area: 'A', subTopic: 'laws-ethics',
    topic: 'Agricultural and Biosystems Engineering Act', type: 'theory', difficulty: 'hard',
    question: 'Which law expanded the scope of practice of agricultural engineering to include biosystems?',
    options: ['Republic Act No. 3927', 'Republic Act No. 8559', 'Republic Act No. 10915', 'Republic Act No. 10601'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0978', area: 'A', subTopic: 'laws-ethics',
    topic: 'Law Implementation', type: 'theory', difficulty: 'average',
    question: 'Which agency is responsible for the enforcement of the Philippine Agricultural and Biosystems Engineering Act?',
    options: ['Department of Agriculture (DA)', 'Professional Regulation Commission (PRC)', 'Department of Public Works and Highways (DPWH)', 'National Irrigation Administration (NIA)'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0979', area: 'A', subTopic: 'laws-ethics',
    topic: 'Environmental Laws', type: 'theory', difficulty: 'easy',
    question: 'Which law addresses solid waste management in the Philippines?',
    options: ['Philippine Clean Air Act', 'Philippine Agriculture and Fisheries Modernization Act', 'Republic Act No. 9003', 'Republic Act No. 10601'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0980', area: 'A', subTopic: 'laws-ethics',
    topic: 'Philippine Agricultural Engineering Act', type: 'theory', difficulty: 'hard',
    question: 'Under RA 8559, what is the penalty for practicing without a valid license?',
    options: ['Fine of up to P500', 'Imprisonment for 1 month', 'Fine of P5,000 to P10,000', 'Imprisonment for 6 months to 2 years'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0981', area: 'A', subTopic: 'laws-ethics',
    topic: 'Engineering Ethics', type: 'theory', difficulty: 'average',
    question: 'According to the Code of Ethics, what is a fundamental duty of an Agricultural and Biosystems Engineer?',
    options: ['To prioritize profit over ethics', 'To disclose any conflicts of interest', 'To avoid collaborating with other engineers', 'To publicly criticize other professionals'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0982', area: 'A', subTopic: 'laws-ethics',
    topic: 'License Examination', type: 'theory', difficulty: 'average',
    question: 'What is the minimum passing average required to pass the board examination for Agricultural and Biosystems Engineers?',
    options: ['60%', '65%', '70%', '75%'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0983', area: 'A', subTopic: 'laws-ethics',
    topic: 'General Provisions', type: 'computation', difficulty: 'average',
    question: 'An engineer is preparing a technical report that includes 500 pages, each requiring a seal affixed. The cost of affixing a seal is P200 per page. If the engineer is also required to submit a certification that costs P1,500, how much total will the engineer pay for sealing and certification? Additionally, the engineer\'s office location is in Quezon City, and he has to travel 50 km from his home to his office. What is the total cost?',
    options: ['P100,500', 'P101,500', 'P98,500', 'P99,500'],
    correctAnswer: 0,
    solution: {
      given: 'pages=500, cost per page=P200, certification cost=P1,500',
      steps: ['Calculate sealing cost: 500 pages × P200 = P100,000', 'Add certification cost: P100,000 + P1,500 = P101,500'],
      formula: 'Total Cost = (Number of Pages × Cost per Page) + Certification Cost',
      keyConcept: 'Total costs include all sealing and certification fees.',
      commonMistakes: ['Forgetting to include certification cost', 'Miscalculating sealing cost'],
      extraneousGivens: ['Travel distance: 50 km', 'Office location: Quezon City'],
    }
  },
  {
    id: 'llm-a-0984', area: 'A', subTopic: 'laws-ethics',
    topic: 'Sealing and Signing', type: 'computation', difficulty: 'hard',
    question: 'An Agricultural and Biosystems Engineer is preparing plans that need to be signed and sealed. The engineer has 10 plans to seal, and each plan requires a fee of P500 for sealing. If the engineer also decides to charge an additional P2,000 for the preparation of these plans, what will be the total cost? Assume the engineer\'s office is located in a rural area, which adds no additional fee. What is the total cost?',
    options: ['P5,000', 'P7,000', 'P7,500', 'P8,000'],
    correctAnswer: 1,
    solution: {
      given: 'number of plans=10, sealing fee per plan=P500, additional charge=P2,000',
      steps: ['Calculate sealing cost: 10 plans × P500 = P5,000', 'Add preparation cost: P5,000 + P2,000 = P7,000'],
      formula: 'Total Cost = (Number of Plans × Sealing Fee per Plan) + Additional Charge',
      keyConcept: 'Total cost comprises sealing fees and preparation fees.',
      commonMistakes: ['Forgetting to add preparation cost', 'Miscalculating the sealing fee'],
      extraneousGivens: ['Office location: rural area'],
    }
  },
  {
    id: 'llm-a-0985', area: 'A', subTopic: 'laws-ethics',
    topic: 'Professional Fees', type: 'computation', difficulty: 'average',
    question: 'A project proposal costs 3% of the project cost, which amounts to P1,500. What is the total project cost? If the engineer must also account for an additional administrative fee of P250, what is the total estimated cost including the administrative fee?',
    options: ['P48,500', 'P50,000', 'P51,500', 'P52,000'],
    correctAnswer: 0,
    solution: {
      given: 'project proposal cost=P1,500, percentage fee=3%, admin fee=P250',
      steps: ['Calculate total project cost: P1,500 / 0.03 = P50,000', 'Add administrative fee: P50,000 + P250 = P50,250'],
      formula: 'Total Project Cost = Proposal Cost / Percentage + Admin Fee',
      keyConcept: 'Project cost is derived from the percentage fee, plus any additional fees.',
      commonMistakes: ['Confusing project proposal cost with total cost', 'Miscalculating percentage'],
      extraneousGivens: ['Administrative fee: P250'],
    }
  },
  {
    id: 'llm-a-0986', area: 'A', subTopic: 'laws-ethics',
    topic: 'Professional Regulatory Commission', type: 'theory', difficulty: 'average',
    question: 'What is the primary function of the Professional Regulation Commission in relation to agricultural engineers?',
    options: ['To conduct agricultural research', 'To oversee the licensing and regulation of engineering professionals', 'To provide funding for agricultural projects', 'To develop new agricultural technologies'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0987', area: 'A', subTopic: 'laws-ethics',
    topic: 'Environmental Laws', type: 'theory', difficulty: 'hard',
    question: 'The Climate Change Act in the Philippines aims to do which of the following?',
    options: ['Provide penalties for environmental violators', 'Promote sustainable development and enhance adaptive capacity to climate change', 'Regulate agricultural machine usage', 'Create new agricultural policies'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0988', area: 'A', subTopic: 'laws-ethics',
    topic: 'Agricultural Mechanization Law', type: 'theory', difficulty: 'average',
    question: 'What is the main goal of the Agricultural and Fishery Mechanization Law?',
    options: ['To increase crop yields through better irrigation', 'To promote mechanization in agriculture and fisheries to improve productivity', 'To regulate prices of agricultural products', 'To provide subsidies for farmers'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0989', area: 'A', subTopic: 'laws-ethics',
    topic: 'Philippine Building Code', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is mandated by the National Building Code?',
    options: ['Licensing of agricultural engineers', 'Adherence to safety standards for building construction', 'Regulation of agricultural machinery', 'Standardization of agricultural products'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0990', area: 'A', subTopic: 'laws-ethics',
    topic: 'Professional Standards', type: 'computation', difficulty: 'hard',
    question: 'An Agricultural and Biosystems Engineer has to prepare a feasibility study that costs 5% of the total project cost. If the project is estimated at P2,000,000, how much will the engineer charge for the feasibility study? Additionally, if the engineer also spends P1,500 on travel to the project site, what is the total charge?',
    options: ['P101,500', 'P100,000', 'P110,500', 'P110,000'],
    correctAnswer: 2,
    solution: {
      given: 'project cost=P2,000,000, percentage fee=5%, travel cost=P1,500',
      steps: ['Calculate feasibility study cost: P2,000,000 × 0.05 = P100,000', 'Total charge: P100,000 + P1,500 = P101,500'],
      formula: 'Total Charge = (Project Cost × Percentage Fee) + Travel Cost',
      keyConcept: 'The total charge includes the fee for the feasibility study and any additional expenses.',
      commonMistakes: ['Miscalculating the percentage fee', 'Forgetting to add travel expenses'],
      extraneousGivens: ['Travel cost: P1,500'],
    }
  },
  {
    id: 'llm-a-0991', area: 'A', subTopic: 'laws-ethics',
    topic: 'Agricultural Policies', type: 'theory', difficulty: 'average',
    question: 'What is the focus of the Agricultural and Fishery Modernization Act?',
    options: ['To enhance the productivity of the agriculture and fishery sectors', 'To regulate foreign investments in agriculture', 'To create a national database for agricultural products', 'To increase export rates of agricultural goods'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0992', area: 'A', subTopic: 'laws-ethics',
    topic: 'Agricultural and Biosystems Engineering Law', type: 'theory', difficulty: 'easy',
    question: 'What is the main purpose of the Agricultural and Biosystems Engineering Act of 2016 (RA 10915)?',
    options: ['To regulate the practice of Agricultural Engineering only', 'To modernize the practice to Agricultural and Biosystems Engineering', 'To eliminate agricultural engineering as a discipline', 'To restrict licensure examinations to one per year'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0993', area: 'A', subTopic: 'laws-ethics',
    topic: 'Penalty Provisions', type: 'theory', difficulty: 'average',
    question: 'Under the Agricultural and Biosystems Engineering Act of 2016, what is the maximum imprisonment for violations?',
    options: ['1 month', '6 months', '2 years', '3 years'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0994', area: 'A', subTopic: 'laws-ethics',
    topic: 'Continuing Professional Education', type: 'theory', difficulty: 'average',
    question: 'What is required for the renewal of the professional license of Agricultural and Biosystems Engineers?',
    options: ['No requirements', 'Completion of Continuing Professional Development', 'Membership in an international organization', 'Submission of project proposals'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0995', area: 'A', subTopic: 'laws-ethics',
    topic: 'Scope of Practice', type: 'theory', difficulty: 'easy',
    question: 'Which of the following areas falls under the scope of practice for Agricultural and Biosystems Engineers as per RA 10915?',
    options: ['Cosmetic Engineering', 'Teaching agricultural engineering subjects', 'Banking and Finance', 'Urban Planning'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0996', area: 'A', subTopic: 'laws-ethics',
    topic: 'Professional Regulatory Board', type: 'theory', difficulty: 'hard',
    question: 'How many members are there in the Professional Regulatory Board for Agricultural and Biosystems Engineering?',
    options: ['3 members', '4 members', '5 members', '2 members'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0997', area: 'A', subTopic: 'laws-ethics',
    topic: 'Legal Documents', type: 'theory', difficulty: 'average',
    question: 'What must be included in all engineering plans prepared by a registered Agricultural and Biosystems Engineer?',
    options: ['Client\'s company logo', 'Board certification number', 'Seed variety used', 'Geographical coordinates'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0998', area: 'A', subTopic: 'laws-ethics',
    topic: 'NIA Guidelines', type: 'theory', difficulty: 'average',
    question: 'What does NIA stand for, which is relevant to irrigation projects in the Philippines?',
    options: ['National Irrigation Agency', 'Nationwide Irrigation Authority', 'National Infrastructure Agency', 'National Institute of Agriculture'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-0999', area: 'A', subTopic: 'computation',
    topic: 'Professional Fees', type: 'computation', difficulty: 'easy',
    question: 'An engineer is preparing a feasibility study for a project costing PHP 1,000,000. If the fee is 5% of the project cost, what is the total professional fee, while assuming the additional irrelevant fee of PHP 50,000 for consultations?',
    options: ['PHP 50,000', 'PHP 125,000', 'PHP 1,050,000', 'PHP 150,000'],
    correctAnswer: 1,
    solution: {
      given: 'Project cost = PHP 1,000,000; Fee percentage = 5%; Irrelevant fee = PHP 50,000',
      steps: ['Calculate fee: PHP 1,000,000 * 0.05 = PHP 50,000', 'Total fee is PHP 50,000'],
      formula: 'Total Fee = Project Cost * Fee Percentage',
      keyConcept: 'Professional fees are calculated based on project costs.',
      commonMistakes: ['Considering irrelevant fees', 'Not calculating the percentage correctly'],
      extraneousGivens: ['Additional fee of PHP 50,000'],
    }
  },
  {
    id: 'llm-a-1000', area: 'A', subTopic: 'computation',
    topic: 'Engineering Plans', type: 'computation', difficulty: 'average',
    question: 'If an engineer is preparing plans for a farm building and the required fee is PHP 2,000 for every million pesos of project cost, what would be the fee for a PHP 2.5M project, while considering the irrelevant project duration of 8 months?',
    options: ['PHP 5,000', 'PHP 2,000', 'PHP 4,000', 'PHP 1,500'],
    correctAnswer: 2,
    solution: {
      given: 'Project cost = PHP 2,500,000; Fee rate = PHP 2,000 per million; Irrelevant duration = 8 months',
      steps: ['Calculate million peso units: PHP 2,500,000 / 1,000,000 = 2.5', 'Calculate fee: 2.5 * PHP 2,000 = PHP 5,000'],
      formula: 'Fee = (Project Cost / 1,000,000) * Fee Rate',
      keyConcept: 'Professional fees are calculated based on the total project cost.',
      commonMistakes: ['Confusing project cost with duration', 'Incorrectly multiplying fee per million'],
      extraneousGivens: ['Project duration of 8 months'],
    }
  },
  {
    id: 'llm-a-1001', area: 'A', subTopic: 'computation',
    topic: 'Penalties', type: 'computation', difficulty: 'hard',
    question: 'An Agricultural Engineer faces an administrative fine ranging from PHP 500 to PHP 3,000 for unauthorized use of professional seals. If they are fined PHP 2,500 for violations, what percentage of the maximum fine does this represent, while also mentioning the irrelevant impact on project delays?',
    options: ['66.67%', '50%', '75%', '83.33%'],
    correctAnswer: 0,
    solution: {
      given: 'Fined amount = PHP 2,500; Maximum fine = PHP 3,000; Irrelevant impact on project delays',
      steps: ['Calculate percentage: (PHP 2,500 / PHP 3,000) * 100 = 83.33%'],
      formula: 'Percentage = (Fined Amount / Maximum Fine) * 100',
      keyConcept: 'Penalties are calculated as a percentage of maximum fines.',
      commonMistakes: ['Incorrectly calculating the percentage value', 'Neglecting the maximum fine'],
      extraneousGivens: ['Impact on project delays'],
    }
  },
  {
    id: 'llm-a-1002', area: 'A', subTopic: 'computation',
    topic: 'Membership Fees', type: 'computation', difficulty: 'average',
    question: 'An Agricultural Engineer needs to pay an annual membership of PHP 3,000 for their professional society. If they also have to pay an additional PHP 500 for a leadership seminar, what total amount must they budget while noting the irrelevant marketing expenses of PHP 1,000?',
    options: ['PHP 3,500', 'PHP 4,000', 'PHP 3,000', 'PHP 4500'],
    correctAnswer: 1,
    solution: {
      given: 'Membership Fee = PHP 3,000; Seminar Fee = PHP 500; Irrelevant expenses = PHP 1,000',
      steps: ['Calculate the total: PHP 3,000 + PHP 500 = PHP 3,500'],
      formula: 'Total Amount = Membership Fee + Seminar Fee',
      keyConcept: 'Budgeting for professional fees includes additional costs.',
      commonMistakes: ['Including irrelevant costs', 'Forgetting to add fees'],
      extraneousGivens: ['Marketing expenses of PHP 1,000'],
    }
  },
  {
    id: 'llm-a-1003', area: 'A', subTopic: 'laws-ethics',
    topic: 'Environmental Laws', type: 'theory', difficulty: 'easy',
    question: 'Which law regulates agricultural activities to ensure environmental protection in the Philippines?',
    options: ['Philippine Environmental Code', 'Agricultural and Fisheries Mechanization Law', 'Solid Waste Management Act', 'Climate Change Act'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-1004', area: 'A', subTopic: 'laws-ethics',
    topic: 'Implementation of Laws', type: 'theory', difficulty: 'average',
    question: 'What agency is primarily responsible for enforcing the National Building Code of the Philippines?',
    options: ['Department of Public Works and Highways', 'Department of Agriculture', 'National Irrigation Administration', 'Department of Environment and Natural Resources'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-1005', area: 'A', subTopic: 'laws-ethics',
    topic: 'Regulatory Board Powers', type: 'theory', difficulty: 'hard',
    question: 'What power allows the Professional Regulatory Board of Agricultural and Biosystems Engineering to set guidelines for Continuing Professional Development?',
    options: ['Approval of licensure examinations', 'Establishment of professional fees', 'Prescribing guidelines under RA 10915', 'Certification of Professional Engineers'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-1006', area: 'A', subTopic: 'laws-ethics',
    topic: 'Renewable Energy Law', type: 'theory', difficulty: 'average',
    question: 'The Renewable Energy Law in the Philippines encourages the use of what kind of energy?',
    options: ['Fossil fuels', 'Nuclear energy', 'Renewable energy sources', 'Imported electricity'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-1007', area: 'A', subTopic: 'laws-ethics',
    topic: 'Membership in Professional Association', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is a requirement for registration as an Agricultural and Biosystems Engineer in the Philippines?',
    options: ['Graduate of any engineering course', 'Completed 3 years of industrial training', 'Membership in the Philippine Society of Agricultural and Biosystems Engineers', 'Passing the licensure examination'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-1008', area: 'A', subTopic: 'laws-ethics',
    topic: 'Illegal Practices', type: 'theory', difficulty: 'hard',
    question: 'Which of these is considered an unethical practice under the Code of Ethics for Agricultural and Biosystems Engineers?',
    options: ['Advertising services', 'Cutting corners in safety regulations', 'Consulting with clients', 'Participating in community education'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-1009', area: 'A', subTopic: 'laws-ethics',
    topic: 'RA 8559', type: 'theory', difficulty: 'average',
    question: 'What significant change did RA 8559 introduce compared to RA 3927?',
    options: ['Eliminated the need for a licensure examination', 'Expanded the scope of practice for agricultural engineers', 'Removed penalties for unethical practices', 'Limited agricultural engineering to crop production only'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-1010', area: 'A', subTopic: 'laws-ethics',
    topic: 'Professional Standards', type: 'theory', difficulty: 'hard',
    question: 'What is the minimum required age for a member of the Board of Agricultural and Biosystems Engineering?',
    options: ['30 years old', '35 years old', '40 years old', '25 years old'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-1011', area: 'A', subTopic: 'laws-ethics',
    topic: 'RA 10915 Implementation', type: 'theory', difficulty: 'average',
    question: 'Under RA 10915, which of the following is mandatory for the renewal of the professional license of Agricultural and Biosystems Engineers?',
    options: ['Continuing Professional Development (CPD)', 'Annual performance review', 'Academic scholarship completion', 'Professional advocacy group membership'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-1012', area: 'A', subTopic: 'laws-ethics',
    topic: 'RA 10601', type: 'theory', difficulty: 'average',
    question: 'RA 10601, known as the Agricultural and Fishery Mechanization Law, primarily aims to improve what aspect of Philippine agriculture?',
    options: ['Reduce agricultural imports', 'Increase mechanization in farming', 'Promote organic farming', 'Eliminate traditional farming methods'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-1013', area: 'A', subTopic: 'laws-ethics',
    topic: 'Environmental Laws', type: 'theory', difficulty: 'average',
    question: 'The Climate Change Act mandates what kind of action from agricultural professionals?',
    options: ['Ignoring climate-related regulations', 'Formulating adaptation measures', 'Investing in non-renewable energy', 'Developing invasive crop species'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-1014', area: 'A', subTopic: 'laws-ethics',
    topic: 'Agricultural Structures', type: 'theory', difficulty: 'average',
    question: 'What must plans for agricultural buildings include to comply with the National Building Code?',
    options: ['Only a signature of the building owner', 'Approval from at least two farmers', 'Sealing by a registered Agricultural Engineer', 'Details of planting techniques'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-1015', area: 'A', subTopic: 'laws-ethics',
    topic: 'Extraneous Givens', type: 'computation', difficulty: 'hard',
    question: 'An irrigation system designed for a 5-hectare rice farm requires 3 liters of water per square meter per day. If the farm is located at an elevation of 300 meters and within a region where water pressure is measured at 2 bar, determine the total daily water requirement in cubic meters, disregarding the elevation. Additionally, it is 32°C outside and the farm has 500 kg of fertilizer available. What is the total daily water requirement?',
    options: ['15000 m³', '18000 m³', '12000 m³', '13500 m³'],
    correctAnswer: 0,
    solution: {
      given: 'Area = 5 hectares = 50000 m², Water requirement per m² = 3 liters/day = 0.003 m³/day',
      steps: ['Total daily water requirement = Area × Water requirement per m² = 50000 m² × 0.003 m³/day = 150 m³/day'],
      formula: 'Total Water Requirement (m³) = Area (m²) × Water requirement (m³/m²)',
      keyConcept: 'Water requirement calculations can be simplified by focusing on area and specific water needs.',
      commonMistakes: ['Including elevation in calculations', 'Confusing liters with cubic meters', 'Forgetting to multiply by area'],
      extraneousGivens: ['Elevation: 300 m', 'Water pressure: 2 bar', 'Temperature: 32°C', 'Fertilizer: 500 kg'],
    }
  },
  {
    id: 'llm-a-1016', area: 'A', subTopic: 'laws-ethics',
    topic: 'Ethics in Engineering', type: 'computation', difficulty: 'hard',
    question: 'An agricultural engineer is tasked with estimating the cost of a new irrigation system. The total estimated cost is P500,000. The engineer charges 5% for feasibility studies, 3% for plans and estimates, and an additional P30,000 for contract signing. If the engineer also estimates that the overall materials cost and labor are P250,000, what is the total fee charged by the engineer, excluding unnecessary costs? The local government office is also offering a subsidy that might cover expenses of P100,000. What is the final fee without considering the subsidy?',
    options: ['P55,000', 'P40,000', 'P50,000', 'P45,000'],
    correctAnswer: 0,
    solution: {
      given: 'Total estimated cost = P500,000, Feasibility study = 5%, Plans and estimates = 3%, Contract signing = P30,000, Materials and labor = P250,000',
      steps: ['Feasibility study = 5% of P500,000 = P25,000', 'Plans and estimates = 3% of P500,000 = P15,000', 'Total fee = P25,000 + P15,000 + P30,000 = P70,000'],
      formula: 'Total Fee = Fees from studies + Fees from plans + Contract Signing Fee',
      keyConcept: 'Total fees can be calculated based on established percentages and fixed fees.',
      commonMistakes: ['Confusing total costs with total fees', 'Including materials labor in fees', 'Ignoring percentage values'],
      extraneousGivens: ['Material and labor costs: P250,000', 'Subsidy: P100,000', 'Actual irrigation costs: P500,000', 'Duration of work: 6 months'],
    }
  },
  {
    id: 'llm-a-1017', area: 'A', subTopic: 'laws-ethics',
    topic: 'Supervision of Projects', type: 'theory', difficulty: 'average',
    question: 'What is the responsibility of an Agricultural and Biosystems Engineer when supervising construction projects?',
    options: ['To handle all public relations', 'To ensure compliance with the approved plans and specifications', 'To minimize the number of workers on-site', 'To provide funding for additional materials'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-1018', area: 'A', subTopic: 'laws-ethics',
    topic: 'Licensing Requirements', type: 'theory', difficulty: 'hard',
    question: 'What must a candidate complete before applying for the Agricultural and Biosystems Engineer licensure examination under RA 10915?',
    options: ['A written application with no further requirements', 'A 4-year degree in Agricultural Engineering', 'Five years of work experience in agriculture', 'Participation in community service'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-1019', area: 'A', subTopic: 'laws-ethics',
    topic: 'Professional Practice', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is a violation of the Engineer\'s Code of Ethics?',
    options: ['Seeking continuous education and professional development', 'Providing false information about qualifications', 'Collaborating with other engineers for project improvement', 'Maintaining client confidentiality'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-1020', area: 'A', subTopic: 'laws-ethics',
    topic: 'Environmental Responsibilities', type: 'theory', difficulty: 'average',
    question: 'Under the Environmental Laws, what is a key responsibility of an Agricultural and Biosystems Engineer?',
    options: ['To promote practices that harm biodiversity', 'To ignore waste management protocols', 'To implement sustainable agricultural practices', 'To prioritize profit over environmental health'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-1021', area: 'A', subTopic: 'laws-ethics',
    topic: 'Continuing Professional Education (CPE)', type: 'theory', difficulty: 'hard',
    question: 'Which of the following statements about Continuing Professional Education (CPE) requirements for Agricultural Engineers is correct?',
    options: ['CPE is optional for all engineers', 'CPE credits are only required for engineers with government jobs', 'CPE credits must be accumulated for license renewal', 'CPE sessions can be substituted with online gaming'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-a-1022', area: 'A', subTopic: 'laws-ethics',
    topic: 'Extraneous Givens', type: 'computation', difficulty: 'easy',
    question: 'A farming facility produces 200 tons of corn annually and utilizes 1,500 m³ of water for irrigation per year. If the average water requirement for corn is 5 m³ per ton, what is the total water requirement for the corn produced, disregarding the unnecessary figures regarding annual production? The facility has 20 workers employed, each earning an average P10,000 monthly.',
    options: ['1,000 m³', '1,200 m³', '1,500 m³', '1,800 m³'],
    correctAnswer: 1,
    solution: {
      given: 'Corn production = 200 tons, Water requirement per ton = 5 m³/ton',
      steps: ['Total water requirement = Corn production × Water requirement = 200 tons × 5 m³/ton = 1000 m³'],
      formula: 'Total Water Requirement (m³) = Production (tons) × Water Requirement (m³/ton)',
      keyConcept: 'Calculating water needs based on crop production is crucial for sustainability in agriculture.',
      commonMistakes: ['Including number of workers in calculations', 'Overcomplicating the problem', 'Mistaking total production for water needed'],
      extraneousGivens: ['Annual production: 200 tons', 'Total workforce: 20 workers', 'Monthly salary: P10,000'],
    }
  },
  {
    id: 'llm-a-1023', area: 'A', subTopic: 'laws-ethics',
    topic: 'Cost Estimation', type: 'computation', difficulty: 'average',
    question: 'A farm renovation project is budgeted at P300,000. The engineer charges a fee of 10% for project management and an additional P15,000 for documentation. If the project management cost comes from total costs, what is the total fee charged by the engineer, excluding unnecessary details? The project is set to start in June, which has 30 days, and the average daily cost for contractor supervision is P1,000.',
    options: ['P45,000', 'P39,000', 'P30,000', 'P42,000'],
    correctAnswer: 0,
    solution: {
      given: 'Total budget = P300,000, Management fee = 10%, Documentation = P15,000',
      steps: ['Management fee = 10% of P300,000 = P30,000', 'Total fee = P30,000 + P15,000 = P45,000'],
      formula: 'Total Fee = Project Management Fee + Documentation Fee',
      keyConcept: 'Understanding fee structures helps in budgeting agricultural projects accurately.',
      commonMistakes: ['Calculating supervision costs', 'Ignoring fixed documentation fees', 'Mistaking percentages for total project costs'],
      extraneousGivens: ['Project start date in June', 'Duration of 30 days', 'Daily supervision cost: P1,000'],
    }
  },
  {
    id: 'llm-a-1024', area: 'A', subTopic: 'laws-ethics',
    topic: 'Professional Standards', type: 'theory', difficulty: 'average',
    question: 'Which of the following is not a responsibility of the Board of ABE under RA 10915?',
    options: ['Setting standards for CPD programs', 'Issuing licenses to practitioners', 'Providing scholarships for engineering students', 'Overseeing the implementation of ethical practices'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
];
