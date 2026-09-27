import { Question } from './comprehensive-questions';

export const llmAreaBQuestions: Question[] = [
  {
    id: 'llm-b-0001', area: 'B', subTopic: '',
    topic: 'Hydrologic Cycle', type: 'theory', difficulty: 'easy',
    question: 'What process in the hydrologic cycle involves the conversion of water vapor to liquid water?',
    options: ['Evaporation', 'Condensation', 'Precipitation', 'Infiltration'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0002', area: 'B', subTopic: '',
    topic: 'Weather Instruments', type: 'theory', difficulty: 'average',
    question: 'Which instrument is primarily used to measure atmospheric pressure?',
    options: ['Thermometer', 'Barometer', 'Anemometer', 'Hygrometer'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0003', area: 'B', subTopic: '',
    topic: 'Watershed Hydrology', type: 'theory', difficulty: 'average',
    question: 'Which of the following factors affects the rate of runoff in a watershed?',
    options: ['Soil type', 'Land use', 'Slope of the land', 'All of the above'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0004', area: 'B', subTopic: '',
    topic: 'Aquifer Systems', type: 'theory', difficulty: 'easy',
    question: 'Which term describes a water-bearing geologic formation capable of supplying water to wells?',
    options: ['Aquitard', 'Aquifer', 'Aquiclude', 'Aquifuge'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0005', area: 'B', subTopic: '',
    topic: 'Hydrologic Cycle', type: 'theory', difficulty: 'easy',
    question: 'Which component of the hydrologic cycle is primarily responsible for returning water to the atmosphere?',
    options: ['Infiltration', 'Evaporation', 'Runoff', 'Percolation'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0006', area: 'B', subTopic: '',
    topic: 'Hydrometeorology', type: 'computation', difficulty: 'hard',
    question: 'In a watershed, 300 mm of rainfall was recorded. If the area of the watershed is 500 hectares and 20% of the rainfall infiltrates, what is the volume of water that infiltrates in cubic meters? (Use 1 hectare = 10,000 m²)',
    options: ['6000 m³', '1200 m³', '3000 m³', '2000 m³'],
    correctAnswer: 0,
    solution: {
      given: 'Rainfall = 300 mm = 0.3 m, Area = 500 hectares = 500 × 10,000 m² = 5,000,000 m²',
      steps: ['Calculate total rainfall volume: Volume = Rainfall × Area = 0.3 m × 5,000,000 m² = 1,500,000 m³', 'Calculate infiltrated volume: Infiltrated Volume = Total Volume × infiltration rate = 1,500,000 m³ × 0.20 = 300,000 m³'],
      formula: 'Volume_infiltrated = Rainfall mm × Area ha × 0.1',
      keyConcept: 'Volume infiltrated is calculated using the total rainfall and the area of the watershed.',
      commonMistakes: ['Not converting hectares to square meters', 'Incorrect infiltration percentage application'],
      extraneousGivens: ['Area of the watershed: 500 hectares', 'Rainfall measurement: 300 mm'],
    }
  },
  {
    id: 'llm-b-0007', area: 'B', subTopic: '',
    topic: 'Weather Instruments', type: 'computation', difficulty: 'easy',
    question: 'A weather station reports a temperature of 30°C and relative humidity of 60%. Calculate the actual vapor pressure in kPa. (Use the formula: Actual Vapor Pressure = (Relative Humidity / 100) × Saturation Vapor Pressure; Saturation Pressure at 30°C is approximately 4.24 kPa)',
    options: ['2.54 kPa', '3.12 kPa', '1.82 kPa', '1.50 kPa'],
    correctAnswer: 1,
    solution: {
      given: 'Relative Humidity = 60%, Saturation Vapor Pressure at 30°C = 4.24 kPa',
      steps: ['Calculate actual vapor pressure:  Actual Vapor Pressure = (60 / 100) × 4.24 kPa = 2.544 kPa'],
      formula: 'AVP = (Relative Humidity / 100) × Saturation Vapor Pressure',
      keyConcept: 'Actual vapor pressure is determined by the humidity and temperature conditions.',
      commonMistakes: ['Forgetting to convert relative humidity to a decimal', 'Confusing vapor pressures'],
      extraneousGivens: ['Temperature: 30°C', 'Relative humidity: 60%'],
    }
  },
  {
    id: 'llm-b-0008', area: 'B', subTopic: '',
    topic: 'Eutrophication', type: 'theory', difficulty: 'average',
    question: 'What is the primary consequence of eutrophication in aquatic systems?',
    options: ['Increased biodiversity', 'Decreased levels of dissolved oxygen', 'Enhanced fish population', 'Improved water clarity'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0009', area: 'B', subTopic: '',
    topic: 'Runoff Analysis', type: 'computation', difficulty: 'hard',
    question: 'A watershed has a drainage area of 750 hectares. During a storm, the total rainfall was 100 mm. If the runoff coefficient is estimated to be 0.5, what is the total runoff in cubic meters? (1 hectare = 10,000 m²)',
    options: ['3750 m³', '37500 m³', '75000 m³', '750 m³'],
    correctAnswer: 1,
    solution: {
      given: 'Rainfall = 100 mm = 0.1 m, Area = 750 hectares = 750 × 10,000 m² = 7,500,000 m², Runoff Coefficient = 0.5',
      steps: ['Calculate total rainfall volume: Volume = Rainfall × Area = 0.1 m × 7,500,000 m² = 750,000 m³', 'Calculate total runoff: Runoff = Runoff Coefficient × Total Volume = 0.5 × 750,000 m³ = 375,000 m³'],
      formula: 'Runoff = Runoff Coefficient × (Rainfall m × Area ha × 10^2)',
      keyConcept: 'Runoff is calculated using the rainfall, area, and runoff coefficient.',
      commonMistakes: ['Not converting hectares to square meters correctly'],
      extraneousGivens: ['Rainfall measurement: 100 mm', 'Area of the watershed: 750 hectares'],
    }
  },
  {
    id: 'llm-b-0010', area: 'B', subTopic: '',
    topic: 'Acidity of Water', type: 'theory', difficulty: 'average',
    question: 'What agricultural practice is commonly recommended to reduce soil acidity in the Philippines?',
    options: ['Liming', 'Crop rotation', 'Fertilization', 'Irrigation'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0011', area: 'B', subTopic: '',
    topic: 'Groundwater Hydraulics', type: 'computation', difficulty: 'hard',
    question: 'A well has a steady-state discharge of 0.03 m³/s and a radius of influence of 300 m. If the aquifer has a hydraulic conductivity of 15 m/day, what is the drawdown in meters at a distance of 50 m from the well? (Assume an unconfined aquifer and use the equation: h = (Q / (2πK)) * ln(r1/r2))',
    options: ['0.743 m', '0.847 m', '0.925 m', '1.061 m'],
    correctAnswer: 1,
    solution: {
      given: 'Discharge (Q) = 0.03 m³/s, r1 = 300 m, r2 = 50 m, K = 15 m/day',
      steps: ['Convert K to m/s: K = 15 m/day = 15/86400 m/s ~ 1.74×10^-4 m/s', 'Calculate drawdown: h = (0.03 / (2 × π × 1.74×10^-4)) * ln(300/50) ≈ 0.847 m'],
      formula: 'h = (Q / (2πK)) * ln(r1/r2)',
      keyConcept: 'Drawdown is calculated using the aquifer\'s hydraulic conductivity and distances.',
      commonMistakes: ['Incorrect unit conversion', 'Not applying logarithms correctly'],
      extraneousGivens: ['Radius of influence: 300 m', 'Steady-state discharge: 0.03 m³/s'],
    }
  },
  {
    id: 'llm-b-0012', area: 'B', subTopic: '',
    topic: 'Acidity of Water', type: 'theory', difficulty: 'average',
    question: 'What type of precipitation is associated with acid rain?',
    options: ['Nutrient pollution', 'Sulfuric acid', 'Oxygen depletion', 'Eutrophication'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0013', area: 'B', subTopic: '',
    topic: 'Aquifer Systems', type: 'computation', difficulty: 'hard',
    question: 'An aquifer is 12 m deep and covers an area of 300 hectares. If the specific yield of the aquifer is 0.15, what is the volume of water that can be drained from the aquifer in cubic meters? (1 hectare = 10,000 m²)',
    options: ['540,000 m³', '540 m³', '600,000 m³', '600 m³'],
    correctAnswer: 0,
    solution: {
      given: 'Depth of aquifer = 12 m, Area = 300 ha = 3,000,000 m², Specific yield = 0.15',
      steps: ['Calculate volume of water: Volume = Depth × Area = 12 m × 3,000,000 m² = 36,000,000 m³', 'Calculate volume that can be drained: Drained Volume = Specific yield × Volume = 0.15 × 36,000,000 = 5,400,000 m³'],
      formula: 'Drained Volume = Specific Yield × Depth (m) × Area (ha × 10,000)',
      keyConcept: 'Specific yield indicates the volume of water that can be extracted from the aquifer.',
      commonMistakes: ['Forgetting to convert hectares to square meters', 'Using incorrect specific yield percentage'],
      extraneousGivens: ['Depth of aquifer: 12 m', 'Area: 300 hectares'],
    }
  },
  {
    id: 'llm-b-0014', area: 'B', subTopic: '',
    topic: 'Groundwater Hydrology', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is a characteristic of a confined aquifer?',
    options: ['Water level is at atmospheric pressure', 'Water flows freely', 'Water is under pressure', 'Easily accessible water'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0015', area: 'B', subTopic: '',
    topic: 'Hydrology', type: 'computation', difficulty: 'hard',
    question: 'If a rain gauge measures 10 mm of rain with a 1:10 magnification, what is the actual depth of water collected?',
    options: ['1 mm', '10 mm', '100 mm', '1000 mm'],
    correctAnswer: 2,
    solution: {
      given: 'Measured rainfall = 10 mm, Magnification factor = 10',
      steps: ['Actual depth = Measured depth × Magnification factor = 10 mm × 10 = 100 mm'],
      formula: 'Actual depth = Measured depth × Magnification factor',
      keyConcept: 'Measured rainfall depth needs to be adjusted based on the gauge\'s magnification.',
      commonMistakes: ['Not recognizing the relationship between measurement and magnification', 'Incorrect multiplication'],
      extraneousGivens: ['Measured depth: 10 mm', 'Magnification factor: 10'],
    }
  },
  {
    id: 'llm-b-0016', area: 'B', subTopic: '',
    topic: 'Climate Variables', type: 'theory', difficulty: 'average',
    question: 'Which of the following best describes the term \'albedo\'?',
    options: ['Heat absorbed by a surface', 'Fraction of sunlight reflected', 'Air pressure', 'Humidity level'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0017', area: 'B', subTopic: '',
    topic: 'Weather Impact', type: 'theory', difficulty: 'easy',
    question: 'How does deforestation generally affect rainfall patterns?',
    options: ['Increases rainfall', 'Decreases rainfall', 'Has no effect', 'Increases evaporation'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0018', area: 'B', subTopic: 'Hydrology',
    topic: 'Hydrologic Cycle', type: 'theory', difficulty: 'easy',
    question: 'What term describes the continuous movement of water on, above, and below the surface of the Earth?',
    options: ['Hydrologic cycle', 'Water table', 'Aquifer', 'Infiltration'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0019', area: 'B', subTopic: 'Hydrology',
    topic: 'Hydrologic Cycle', type: 'theory', difficulty: 'average',
    question: 'Which process in the hydrologic cycle refers to the conversion of water vapor into liquid water?',
    options: ['Evaporation', 'Condensation', 'Transpiration', 'Precipitation'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0020', area: 'B', subTopic: 'Hydrology',
    topic: 'Watershed Hydrology', type: 'theory', difficulty: 'easy',
    question: 'What is runoff?',
    options: ['Water that flows over land to a river', 'Water absorbed by the soil', 'Water evaporating into the atmosphere', 'Water stored in aquifers'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0021', area: 'B', subTopic: 'Hydrology',
    topic: 'Erosion', type: 'theory', difficulty: 'average',
    question: 'Which of the following factors can significantly increase soil erosion?',
    options: ['Vegetation cover', 'Rainfall intensity', 'Soil compaction', 'All of the above'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0022', area: 'B', subTopic: 'Hydrology',
    topic: 'Aquifer Systems', type: 'theory', difficulty: 'hard',
    question: 'What is a key characteristic of unconfined aquifers?',
    options: ['They are bounded by impermeable layers', 'They have a free water table', 'They are always artesian', 'They are not capable of yield'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0023', area: 'B', subTopic: 'Hydrology',
    topic: 'Weather Instruments', type: 'theory', difficulty: 'easy',
    question: 'What instrument is primarily used to measure atmospheric pressure?',
    options: ['Barometer', 'Hygrometer', 'Anemometer', 'Thermometer'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0024', area: 'B', subTopic: 'Hydrology',
    topic: 'Runoff', type: 'theory', difficulty: 'average',
    question: 'What does the term \'hydraulic conductivity\' refer to?',
    options: ['The ability of soil to conduct water', 'The volume of water stored in an aquifer', 'The rate of groundwater recharge', 'The depth of the water table'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0025', area: 'B', subTopic: 'Hydrology',
    topic: 'Aquifer Systems', type: 'theory', difficulty: 'average',
    question: 'Which of the following is NOT a type of aquifer?',
    options: ['Unconfined', 'Confined', 'Perched', 'Submerged'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0026', area: 'B', subTopic: 'Hydrology',
    topic: 'Watershed Hydrology', type: 'computation', difficulty: 'hard',
    question: 'A watershed has an area of 1500 ha. If the average rainfall is recorded at 1200 mm per year, what is the total volume of water reaching the watershed in cubic meters? Extra value: The rainfall is distributed evenly throughout the year, and the watershed elevation is 300 m.',
    options: ['1,800,000 m³', '18,000,000 m³', '150,000,000 m³', '180,000,000 m³'],
    correctAnswer: 1,
    solution: {
      given: 'Area = 1500 ha = 15,000,000 m²; Rainfall = 1200 mm = 1.2 m',
      steps: ['Volume = Area × Rainfall = 15,000,000 m² × 1.2 m = 18,000,000 m³'],
      formula: 'Volume = Area × Rainfall',
      keyConcept: 'Rainfall can be converted to volume by multiplying area by rainfall depth.',
      commonMistakes: ['Forgetting to convert ha to m²', 'Using incorrect rainfall depth', 'Not converting mm to meters'],
      extraneousGivens: ['Elevation = 300 m', 'Monthly distribution of rainfall = Even'],
    }
  },
  {
    id: 'llm-b-0027', area: 'B', subTopic: 'Hydrology',
    topic: 'Infiltration', type: 'computation', difficulty: 'hard',
    question: 'A soil has a porosity of 25% and a water table is at a depth of 5 m. If the area of the land is 1000 m², calculate the volume of water that can be infiltrated. Extra values: The density of soil is 1.5 g/cm³ and the land is located in Batangas.',
    options: ['250 m³', '375 m³', '125 m³', '500 m³'],
    correctAnswer: 0,
    solution: {
      given: 'Area = 1000 m²; Porosity = 25%; Depth = 5 m; Density = 1.5 g/cm³ (irrelevant)',
      steps: ['Volume infiltrated = Area × Depth × Porosity = 1000 m² × 5 m × 0.25 = 1250 m³'],
      formula: 'Volume = Area × Depth × Porosity',
      keyConcept: 'Porosity indicates the fraction of the volume of voids in a material.',
      commonMistakes: ['Confusing porosity with saturation', 'Incorrectly multiplying porosity and depth', 'Forgetting unit conversion'],
      extraneousGivens: ['Density = 1.5 g/cm³', 'Location = Batangas'],
    }
  },
  {
    id: 'llm-b-0028', area: 'B', subTopic: 'Hydrology',
    topic: 'Evapotranspiration', type: 'theory', difficulty: 'average',
    question: 'What does the term \'potential evapotranspiration\' refer to?',
    options: ['Water lost due to direct evaporation', 'Water lost from transpiration', 'The maximum possible evaporation under ideal conditions', 'Total precipitation over a watershed'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0029', area: 'B', subTopic: 'Hydrology',
    topic: 'Hydrologic Measurements', type: 'theory', difficulty: 'easy',
    question: 'Which instrument measures the rate of rainfall?',
    options: ['Raingauge', 'Anemometer', 'Barometer', 'Thermometer'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0030', area: 'B', subTopic: 'Hydrology',
    topic: 'Water Quality Analysis', type: 'theory', difficulty: 'hard',
    question: 'Which parameter is commonly used to assess water quality and indicates the amount of oxygen needed by microorganisms to decompose organic matter?',
    options: ['BOD', 'COD', 'pH', 'Turbidity'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0031', area: 'B', subTopic: 'Hydrology',
    topic: 'Runoff', type: 'theory', difficulty: 'average',
    question: 'Which of the following factors influences runoff in a watershed?',
    options: ['Soil type', 'Land cover', 'Rainfall intensity', 'All of the above'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0032', area: 'B', subTopic: 'Hydrology',
    topic: 'Evapotranspiration', type: 'computation', difficulty: 'average',
    question: 'An evaporation pan records an average depth of 50 mm. If the pan coefficient is 0.7, what is the potential evapotranspiration in mm? Extras: The pan\'s diameter is 1 m, and the daily atmospheric temperature is 25°C.',
    options: ['35 mm', '40 mm', '45 mm', '50 mm'],
    correctAnswer: 0,
    solution: {
      given: 'Pan depth = 50 mm; Pan coefficient = 0.7, Diameter = 1 m (irrelevant); Temperature = 25°C (irrelevant)',
      steps: ['Potential Evapotranspiration = Pan Depth × Pan Coefficient = 50 mm × 0.7 = 35 mm'],
      formula: 'PE = Pan Depth × Pan Coefficient',
      keyConcept: 'Evaporation pans are used to estimate potential evapotranspiration.',
      commonMistakes: ['Multiplying by the diameter of the pan', 'Forgetting to apply the pan coefficient', 'Using total evaporation instead of pan depth'],
      extraneousGivens: ['Diameter = 1 m', 'Temperature = 25°C'],
    }
  },
  {
    id: 'llm-b-0033', area: 'B', subTopic: 'Hydrology',
    topic: 'Runoff', type: 'theory', difficulty: 'average',
    question: 'What is the term for water that flows over the ground surface towards rivers or lakes?',
    options: ['Interflow', 'Surface runoff', 'Groundwater runoff', 'Baseflow'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0034', area: 'B', subTopic: 'Hydrology',
    topic: 'Hydrologic Measurements', type: 'computation', difficulty: 'hard',
    question: 'If a stream has a cross-sectional area of 12 m² and a velocity of 3 m/s, what is the discharge? Note: The temperature is 30°C and atmospheric pressure is 101 kPa (unnecessary).',
    options: ['36 m³/s', '24 m³/s', '12 m³/s', '15 m³/s'],
    correctAnswer: 1,
    solution: {
      given: 'Area = 12 m²; Velocity = 3 m/s; Temperature = 30°C (irrelevant); Pressure = 101 kPa (irrelevant)',
      steps: ['Discharge = Area × Velocity = 12 m² × 3 m/s = 36 m³/s'],
      formula: 'Q = A × V',
      keyConcept: 'Discharge is the volume of water flowing per unit time through a given area.',
      commonMistakes: ['Confusing area with perimeter', 'Multiplying by pressure', 'Forgetting unit conversion'],
      extraneousGivens: ['Temperature = 30°C', 'Pressure = 101 kPa'],
    }
  },
  {
    id: 'llm-b-0035', area: 'B', subTopic: 'Hydrology',
    topic: 'Infiltration', type: 'theory', difficulty: 'average',
    question: 'Which process describes the downward movement of water through soil layers?',
    options: ['Infiltration', 'Percolation', 'Evapotranspiration', 'Transpiration'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0036', area: 'B', subTopic: 'Hydrology',
    topic: 'Hydrologic Analysis', type: 'computation', difficulty: 'hard',
    question: 'A watershed has an average annual rainfall of 1500 mm and a runoff coefficient of 0.4. What is the expected runoff volume in a year for a watershed of 200 ha? Note: The area is urbanized (not necessary for calculation).',
    options: ['1,200,000 m³', '800,000 m³', '1,500,000 m³', '600,000 m³'],
    correctAnswer: 1,
    solution: {
      given: 'Rainfall = 1500 mm = 1.5 m; Area = 200 ha = 2,000,000 m²; Runoff coefficient = 0.4',
      steps: ['Runoff Volume = Rainfall × Area × Runoff Coefficient = 1.5 m × 2,000,000 m² × 0.4 = 1,200,000 m³'],
      formula: 'Runoff Volume = Rainfall × Area × Coefficient',
      keyConcept: 'Runoff is calculated using rainfall, area, and runoff coefficient.',
      commonMistakes: ['Not converting ha to m²', 'Multiplying rainfall without conversion', 'Forgetting to apply the runoff coefficient'],
      extraneousGivens: ['Urbanized area (not necessary for calculation)'],
    }
  },
  {
    id: 'llm-b-0037', area: 'B', subTopic: 'Hydrology',
    topic: 'Weather Effects', type: 'theory', difficulty: 'easy',
    question: 'In the context of hydrometeorology, which of the following best describes the term \'eutrophication\'?',
    options: ['Increase in nutrient levels leading to excessive plant growth', 'Decrease in biodiversity due to climate change', 'The process of water evaporation from soils', 'Acidification of water bodies'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0038', area: 'B', subTopic: 'Hydrology',
    topic: 'Aquifer Systems', type: 'computation', difficulty: 'hard',
    question: 'A well is drilled into an unconfined aquifer and the water level is observed to be 12 m above the bottom of the well. If the well radius is 0.15 m and the hydraulic conductivity is 10 m/day, what is the discharge? Note: The aquifer thickness is 5 m (irrelevant).',
    options: ['0.13 m³/s', '0.25 m³/s', '0.21 m³/s', '0.15 m³/s'],
    correctAnswer: 1,
    solution: {
      given: 'Water Level = 12 m; Well Radius = 0.15 m; Hydraulic Conductivity = 10 m/day; Aquifer Thickness = 5 m (irrelevant)',
      steps: ['Area of well = π × (0.15)²; Discharge = Hydraulic Conductivity × Area × Water Level = 10 m/day × π × (0.15)² × 12 m'],
      formula: 'Discharge = K × A × h',
      keyConcept: 'Discharge in unconfined aquifers is dependent on the hydraulic conductivity and area.',
      commonMistakes: ['Forgetting to use π in area calculation', 'Confusing units of measure', 'Not considering the correct water level'],
      extraneousGivens: ['Aquifer Thickness = 5 m'],
    }
  },
  {
    id: 'llm-b-0039', area: 'B', subTopic: 'Hydrology',
    topic: 'Water Quality Analysis', type: 'theory', difficulty: 'hard',
    question: 'Which of the following parameters is typically assessed to determine the purity of drinking water?',
    options: ['Nitrate levels', 'Soil texture', 'Climate conditions', 'Temperature'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0040', area: 'B', subTopic: 'Hydrology',
    topic: 'Climate and Weather Instruments', type: 'theory', difficulty: 'easy',
    question: 'What instrument is used to determine relative humidity?',
    options: ['Barometer', 'Hygrometer', 'Thermometer', 'Anemometer'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0041', area: 'B', subTopic: 'Hydrology',
    topic: 'Hydrologic Cycle', type: 'theory', difficulty: 'easy',
    question: 'Which of the following best describes the hydrologic cycle?',
    options: ['The continuous movement of water on, above, and below the surface of the Earth.', 'The process by which water is converted to vapor and released into the atmosphere.', 'The movement of water only through the atmosphere as precipitation.', 'The chemical reaction of water with soil to form new compounds.'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0042', area: 'B', subTopic: 'Hydrology',
    topic: 'Hydrometeorology', type: 'theory', difficulty: 'average',
    question: 'What role do meteorological factors play in hydrology?',
    options: ['They have no impact on water resources.', 'They determine the water availability based on the season.', 'They influence only surface water flow.', 'They are relevant only for flooding events.'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0043', area: 'B', subTopic: 'Hydrology',
    topic: 'Runoff', type: 'computation', difficulty: 'hard',
    question: 'A watershed has an area of 150 hectares. If a rainfall of 100 mm is recorded, what is the total rainfall volume (in m³) that enters the watershed? (Note: 1 hectare = 10,000 m² and ignore the area of any structures within the watershed.)',
    options: ['150,000 m³', '1,500,000 m³', '1,500 m³', '15,000 m³'],
    correctAnswer: 1,
    solution: {
      given: 'Area = 150 hectares = 150 * 10,000 m² = 1,500,000 m²; Rainfall = 100 mm = 0.1 m.',
      steps: ['Calculate total volume: Volume = Area × Rainfall = 1,500,000 m² × 0.1 m = 150,000 m³.'],
      formula: 'Volume (m³) = Area (m²) × Rainfall (m)',
      keyConcept: 'Volume of runoff is the product of the area and the depth of rainfall.',
      commonMistakes: ['Forgetting to convert mm to m.', 'Not converting hectares to m².'],
      extraneousGivens: ['None'],
    }
  },
  {
    id: 'llm-b-0044', area: 'B', subTopic: 'Hydrology',
    topic: 'Evapotranspiration', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of measuring evapotranspiration in agriculture?',
    options: ['To predict crop yield.', 'To estimate water needs for irrigation.', 'To determine soil type.', 'To measure atmospheric pressure.'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0045', area: 'B', subTopic: 'Hydrology',
    topic: 'Aquifer Systems', type: 'theory', difficulty: 'average',
    question: 'Which of the following statements about aquifers is true?',
    options: ['All aquifers are confined and under pressure.', 'Aquifers can be both unconfined and confined.', 'Aquifers do not store water.', 'Aquifers are only artesian wells.'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0046', area: 'B', subTopic: 'Hydrology',
    topic: 'Erosion', type: 'theory', difficulty: 'average',
    question: 'What is the main cause of soil erosion in agricultural areas?',
    options: ['Chemical fertilizers.', 'Water runoff and wind.', 'Irrigation practices.', 'Crop rotation.'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0047', area: 'B', subTopic: 'Hydrology',
    topic: 'Weather Instruments', type: 'theory', difficulty: 'easy',
    question: 'What does a hygrometer measure?',
    options: ['Temperature.', 'Humidity.', 'Wind speed.', 'Atmospheric pressure.'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0048', area: 'B', subTopic: 'Hydrology',
    topic: 'Hydrometeorology', type: 'theory', difficulty: 'easy',
    question: 'What is one of the main focuses of hydrometeorology?',
    options: ['Soil composition.', 'The interaction between water and atmospheric conditions.', 'Plant growth patterns.', 'Soil fertility.'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0049', area: 'B', subTopic: 'Hydrology',
    topic: 'Groundwater', type: 'computation', difficulty: 'hard',
    question: 'A well in a groundwater aquifer has a steady discharge of 10 L/s. If the well has been pumping for 5 hours, how much water has been extracted in cubic meters? (Note: 1 L = 0.001 m³, ignore any unnecessary data.)',
    options: ['180 m³', '360 m³', '1800 m³', '720 m³'],
    correctAnswer: 1,
    solution: {
      given: 'Discharge = 10 L/s; Time = 5 hours = 18000 seconds.',
      steps: ['Convert discharge to m³/s: 10 L/s = 0.01 m³/s.', 'Calculate total extraction: Total volume = Discharge × Time = 0.01 m³/s × 18000 s = 180 m³.'],
      formula: 'Total volume (m³) = Discharge (m³/s) × Time (s)',
      keyConcept: 'The volume of water extracted is based on the discharge rate and duration of pumping.',
      commonMistakes: ['Forgetting to convert L to m³.', 'Confusing seconds and hours.'],
      extraneousGivens: ['None'],
    }
  },
  {
    id: 'llm-b-0050', area: 'B', subTopic: 'Hydrology',
    topic: 'Infiltration', type: 'theory', difficulty: 'average',
    question: 'What primarily influences the rate of infiltration in soils?',
    options: ['Soil texture and structure.', 'Soil color.', 'Crop type.', 'Temperature.'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0051', area: 'B', subTopic: 'Hydrology',
    topic: 'Runoff', type: 'theory', difficulty: 'average',
    question: 'In which scenario is runoff most likely to occur?',
    options: ['During light rain on dry soil.', 'When the ground is saturated after heavy rainfall.', 'In a forested area with dense vegetation.', 'During snowfall in winter.'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0052', area: 'B', subTopic: 'Hydrology',
    topic: 'Aquifer Systems', type: 'computation', difficulty: 'hard',
    question: 'A cylindrical well has a radius of 0.5 m and is drilled to a depth of 20 m into an aquifer. If the water level is at 10 m from the top of the well, calculate the volume of water in the well. (Use π = 3.14, ignore the radius of the well casing).',
    options: ['15.7 m³', '31.4 m³', '23.6 m³', '7.85 m³'],
    correctAnswer: 1,
    solution: {
      given: 'Radius = 0.5 m; Height of water = 10 m.',
      steps: ['Calculate volume of water: V = πr²h = 3.14 × (0.5)² × 10 = 3.14 × 0.25 × 10 = 7.85 m³.', 'Round to one decimal place: 31.4 m³.'],
      formula: 'Volume (m³) = π × radius² × height',
      keyConcept: 'The volume of water in a well depends on the area of the cross-section and the height of water.',
      commonMistakes: ['Incorrectly calculating area.', 'Using wrong radius values.'],
      extraneousGivens: ['Depth of the well: 20 m.'],
    }
  },
  {
    id: 'llm-b-0053', area: 'B', subTopic: 'Hydrology',
    topic: 'Erosion', type: 'computation', difficulty: 'hard',
    question: 'A farm has a field that is 100 m long and 50 m wide. If the soil loss per hectare due to erosion is calculated to be 5 tons per hectare, determine the total soil loss in tons for the field. (1 hectare = 10,000 m², ignore irrelevant information).',
    options: ['0.5 tons', '5 tons', '0.05 tons', '50 tons'],
    correctAnswer: 0,
    solution: {
      given: 'Area = 100 m × 50 m = 5000 m²; Soil loss = 5 tons/hectare.',
      steps: ['Convert area to hectares: Area = 5000 m² / 10,000 m²/hectare = 0.5 hectares.', 'Calculate soil loss: Total soil loss = 0.5 hectares × 5 tons/hectare = 2.5 tons.'],
      formula: 'Total soil loss (tons) = Area (hectares) × Soil loss (tons/hectare)',
      keyConcept: 'Soil erosion is calculated based on the area and specific soil loss rates.',
      commonMistakes: ['Forgetting to convert area to hectares.', 'Calculating wrong soil loss rates.'],
      extraneousGivens: ['None'],
    }
  },
  {
    id: 'llm-b-0054', area: 'B', subTopic: 'Hydrology',
    topic: 'Flooding', type: 'theory', difficulty: 'easy',
    question: 'What does a flood hydrograph represent?',
    options: ['The amount of water in the soil.', 'The relationship between rainfall and runoff over time.', 'The average temperature during floods.', 'The volume of water entering an aquifer.'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0055', area: 'B', subTopic: 'Hydrology',
    topic: 'Evapotranspiration', type: 'theory', difficulty: 'average',
    question: 'Which factor is most influential in determining the rate of potential evapotranspiration?',
    options: ['Wind speed.', 'Soil type.', 'Crop variety.', 'Temperature.'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0056', area: 'B', subTopic: 'Hydrology',
    topic: 'Water Quality', type: 'computation', difficulty: 'hard',
    question: 'If a sample of water in a river has a biochemical oxygen demand (BOD) of 20 mg/L and the flow of the river at that section is 25 m³/s, what is the total BOD load in kg/day? (Note: 1 mg/L = 1 g/m³).',
    options: ['4.32 kg/day', '0.48 kg/day', '2.88 kg/day', '1.44 kg/day'],
    correctAnswer: 0,
    solution: {
      given: 'BOD = 20 mg/L = 20 g/m³; Flow = 25 m³/s.',
      steps: ['Calculate total load: Load = BOD × Flow × Time = 20 g/m³ × 25 m³/s × 86400 s/day = 43200000 g/day = 43200 kg/day.'],
      formula: 'Total BOD load (kg) = BOD (g/m³) × Flow (m³/s) × Time (s/day)',
      keyConcept: 'BOD load indicates the amount of biodegradable material in water and its impact on water quality.',
      commonMistakes: ['Incorrectly converting mg/L to g/m³.', 'Forgetting to multiply by total seconds in a day.'],
      extraneousGivens: ['None'],
    }
  },
  {
    id: 'llm-b-0057', area: 'B', subTopic: 'Hydrology',
    topic: 'Hydrological Models', type: 'theory', difficulty: 'average',
    question: 'Which of the following is not considered a hydrological model?',
    options: ['Rainfall-runoff model.', 'Water quality model.', 'Soil erosion model.', 'Climate change model.'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0058', area: 'B', subTopic: 'Hydrology',
    topic: 'Groundwater Contamination', type: 'computation', difficulty: 'hard',
    question: 'A groundwater well supplies water at a rate of 60 L/min. If the well has been operating for 12 hours per day, how much water in cubic meters has been extracted in a week? (Note: 1 L = 0.001 m³, ignore unnecessary details).',
    options: ['252.0 m³', '302.4 m³', '302.0 m³', '360.0 m³'],
    correctAnswer: 0,
    solution: {
      given: 'Flow = 60 L/min; Time = 12 hours/day.',
      steps: ['Calculate total flow per day: Flow = 60 L/min × 60 min/hour × 12 hours = 43200 L/day.', 'Convert to m³: 43200 L/day = 43.2 m³/day.', 'Calculate for a week: 43.2 m³/day × 7 days = 302.4 m³.'],
      formula: 'Total volume (m³) = Flow (m³/min) × Time (min)',
      keyConcept: 'Groundwater extraction is determined by the flow rate and operational duration.',
      commonMistakes: ['Not converting L to m³.', 'Miscalculating time in minutes.'],
      extraneousGivens: ['None'],
    }
  },
  {
    id: 'llm-b-0059', area: 'B', subTopic: 'Hydrology',
    topic: 'Rainfall Measurement', type: 'theory', difficulty: 'average',
    question: 'What is the primary purpose of a rain gauge?',
    options: ['To measure the chemical composition of rain.', 'To estimate solar radiation.', 'To quantify the amount of rainfall.', 'To monitor wind speed.'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0060', area: 'B', subTopic: 'hydrology',
    topic: 'Hydrologic Cycle', type: 'theory', difficulty: 'easy',
    question: 'What is the main process through which water vapor is released back into the atmosphere from plants?',
    options: ['Transpiration', 'Evaporation', 'Condensation', 'Infiltration'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0061', area: 'B', subTopic: 'hydrology',
    topic: 'Hydrologic Cycle', type: 'theory', difficulty: 'average',
    question: 'Which of the following options does NOT contribute to the hydrologic cycle?',
    options: ['Evaporation', 'Runoff', 'Condensation', 'Photosynthesis'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0062', area: 'B', subTopic: 'hydrology',
    topic: 'Hydrometeorology', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of using a rain gauge?',
    options: ['To measure temperature', 'To measure wind speed', 'To measure precipitation', 'To measure humidity'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0063', area: 'B', subTopic: 'hydrology',
    topic: 'Weather Instruments', type: 'theory', difficulty: 'average',
    question: 'Which instrument is used to measure relative humidity?',
    options: ['Anemometer', 'Hygrometer', 'Barometer', 'Thermometer'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0064', area: 'B', subTopic: 'hydrology',
    topic: 'Watershed Hydrology', type: 'theory', difficulty: 'average',
    question: 'What is infiltration in the context of watershed hydrology?',
    options: ['Water flowing over the surface of the land', 'Water entering the soil', 'Water evaporating back into the atmosphere', 'Water collecting in a river or stream'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0065', area: 'B', subTopic: 'hydrology',
    topic: 'Watershed Erosion', type: 'theory', difficulty: 'hard',
    question: 'Which of the following factors contributes most significantly to soil erosion in a watershed?',
    options: ['Vegetation cover', 'Soil texture', 'Rainfall intensity', 'Topography'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0066', area: 'B', subTopic: 'hydrology',
    topic: 'Aquifers', type: 'theory', difficulty: 'average',
    question: 'What is a confined aquifer?',
    options: ['An aquifer that is surrounded by impermeable layers', 'An aquifer that is open to the atmosphere', 'An aquifer that receives water directly from precipitation', 'An aquifer that is saturated with saltwater'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0067', area: 'B', subTopic: 'hydrology',
    topic: 'Aquifer Systems', type: 'theory', difficulty: 'easy',
    question: 'Which agency in the Philippines is primarily responsible for managing water resources?',
    options: ['DENR', 'NIA', 'DA', 'DPWH'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0068', area: 'B', subTopic: 'hydrology',
    topic: 'Water Quality Analysis', type: 'theory', difficulty: 'hard',
    question: 'What is the primary indicator of organic pollution in water?',
    options: ['Biochemical Oxygen Demand (BOD)', 'Chemical Oxygen Demand (COD)', 'Total Dissolved Solids (TDS)', 'pH'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0069', area: 'B', subTopic: 'hydrology',
    topic: 'Hydrometeorology', type: 'computation', difficulty: 'hard',
    question: 'A rain gauge collects 12 mm of rainfall over a 24-hour period. If the gauge has an area of 50 cm², what is the total volume of water collected in liters? (1 mm of rainfall = 1 L/m²)',
    options: ['0.6 L', '0.5 L', '1.2 L', '1.0 L'],
    correctAnswer: 1,
    solution: {
      given: 'Rainfall depth = 12 mm, Gauge area = 50 cm² = 0.005 m²',
      steps: ['Calculate volume: V = depth × area = 12 mm × 0.005 m² = 0.00006 m³', 'Convert to liters: 0.00006 m³ × 1000 L/m³ = 0.06 L'],
      formula: 'V = depth × area',
      keyConcept: 'Volume of water collected is based on the rainfall depth and the area of the gauge.',
      commonMistakes: ['Confusing mm with cm', 'Not converting area to the correct units', 'Forgetting to convert volume to liters'],
      extraneousGivens: ['Area of gauge: 50 cm²', 'Duration: 24 hours', 'Rainfall: 12 mm'],
    }
  },
  {
    id: 'llm-b-0070', area: 'B', subTopic: 'hydrology',
    topic: 'Infiltration', type: 'computation', difficulty: 'average',
    question: 'A plot of land has an infiltration rate of 5 mm/hr. If it rains 20 mm in 2 hours, how much runoff is generated? (Assume no other losses.)',
    options: ['30 mm', '25 mm', '15 mm', '10 mm'],
    correctAnswer: 2,
    solution: {
      given: 'Infiltration rate = 5 mm/hr, Rainfall = 20 mm, Duration = 2 hours',
      steps: ['Total infiltration = infiltration rate × time = 5 mm/hr × 2 hr = 10 mm', 'Runoff = Rainfall - Infiltration = 20 mm - 10 mm = 10 mm'],
      formula: 'Runoff = Rainfall - Infiltration',
      keyConcept: 'Runoff is generated when rainfall exceeds infiltration capacity.',
      commonMistakes: ['Not considering the duration of rainfall', 'Confusing mm and liters', 'Incorrectly calculating infiltration'],
      extraneousGivens: ['Duration of rainfall: 2 hours', 'Infiltration rate: 5 mm/hr', 'Total rainfall: 20 mm'],
    }
  },
  {
    id: 'llm-b-0071', area: 'B', subTopic: 'hydrology',
    topic: 'Aquifers', type: 'computation', difficulty: 'hard',
    question: 'A well in an unconfined aquifer discharges 0.02 m³/s. If the aquifer has a hydraulic conductivity of 10 m/day and the radius of influence is 100 m, what is the drawdown in meters? (Use the formula Q = (K * h * 2πr) where Q is discharge, K is hydraulic conductivity, h is drawdown, r is radius of influence.)',
    options: ['1.27 m', '0.32 m', '0.16 m', '0.05 m'],
    correctAnswer: 0,
    solution: {
      given: 'Q = 0.02 m³/s, K = 10 m/day, r = 100 m',
      steps: ['Rearranging the formula: h = Q / (K * 2πr)', 'h = 0.02 m³/s / (10 m/day * 2π * 100 m) = 1.27 m'],
      formula: 'h = Q / (K * 2πr)',
      keyConcept: 'Drawdown is calculated based on the discharge and properties of the aquifer.',
      commonMistakes: ['Not converting units properly', 'Confusing radius with diameter', 'Using wrong values in the formula'],
      extraneousGivens: ['Hydraulic conductivity: 10 m/day', 'Radius of influence: 100 m', 'Discharge: 0.02 m³/s'],
    }
  },
  {
    id: 'llm-b-0072', area: 'B', subTopic: 'hydrology',
    topic: 'Runoff Calculation', type: 'computation', difficulty: 'average',
    question: 'If a watershed of 50 hectares receives 100 mm of rainfall, how much runoff would be expected assuming a runoff coefficient of 0.3? (1 hectare = 10,000 m²)',
    options: ['150 m³', '1500 m³', '15000 m³', '150000 m³'],
    correctAnswer: 2,
    solution: {
      given: 'Area = 50 hectares, Rainfall = 100 mm, Runoff coefficient = 0.3',
      steps: ['Convert area to m²: 50 hectares = 500,000 m²', 'Convert rainfall to meters: 100 mm = 0.1 m', 'Calculate runoff: Runoff = Area × Rainfall × Runoff coefficient = 500,000 m² × 0.1 m × 0.3 = 15,000 m³'],
      formula: 'Runoff = Area × Rainfall × Runoff coefficient',
      keyConcept: 'Runoff is influenced by the area, rainfall, and the runoff coefficient.',
      commonMistakes: ['Not converting hectares to m²', 'Forgetting to convert mm to meters', 'Using the wrong runoff coefficient'],
      extraneousGivens: ['Runoff coefficient: 0.3', 'Watershed area: 50 hectares', 'Rainfall: 100 mm'],
    }
  },
  {
    id: 'llm-b-0073', area: 'B', subTopic: 'hydrology',
    topic: 'Erosion', type: 'computation', difficulty: 'hard',
    question: 'A site experiences an average erosion rate of 2 tons/ha/year. Given a total area of 10 hectares, what is the total annual soil loss in tons? (Assume no other factors affect erosion.)',
    options: ['10 tons', '20 tons', '15 tons', '25 tons'],
    correctAnswer: 1,
    solution: {
      given: 'Erosion rate = 2 tons/ha/year, Area = 10 hectares',
      steps: ['Total soil loss = Erosion rate × Area = 2 tons/ha/year × 10 ha = 20 tons'],
      formula: 'Total soil loss = Erosion rate × Area',
      keyConcept: 'Total soil loss is directly proportional to the erosion rate and area.',
      commonMistakes: ['Using incorrect units for area', 'Forgetting to multiply by the total area', 'Confusing tons with kilograms'],
      extraneousGivens: ['Area: 10 hectares', 'Erosion rate: 2 tons/ha/year'],
    }
  },
  {
    id: 'llm-b-0074', area: 'B', subTopic: 'hydrology',
    topic: 'Water Quality', type: 'theory', difficulty: 'average',
    question: 'Which of the following parameters is critical for assessing the quality of drinking water?',
    options: ['Biochemical Oxygen Demand (BOD)', 'Salinity', 'Temperature', 'Turbidity'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0075', area: 'B', subTopic: 'hydrology',
    topic: 'Hydrology Fundamentals', type: 'theory', difficulty: 'easy',
    question: 'What is the primary source of freshwater on Earth?',
    options: ['Glaciers and ice caps', 'Rivers', 'Lakes', 'Groundwater'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0076', area: 'B', subTopic: 'hydrology',
    topic: 'Hydrology Fundamentals', type: 'theory', difficulty: 'average',
    question: 'Which of the following processes describes the conversion of liquid water into water vapor?',
    options: ['Precipitation', 'Transpiration', 'Evaporation', 'Condensation'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0077', area: 'B', subTopic: 'hydrology',
    topic: 'Erosion Control', type: 'computation', difficulty: 'hard',
    question: 'If a farmer implements erosion control measures that reduce soil loss from 5 tons/ha/year to 2 tons/ha/year on a field of 15 hectares, what is the total reduction in soil loss per year in tons?',
    options: ['45 tons', '60 tons', '30 tons', '15 tons'],
    correctAnswer: 1,
    solution: {
      given: 'Original rate = 5 tons/ha/year, Reduced rate = 2 tons/ha/year, Area = 15 hectares',
      steps: ['Calculate initial soil loss: 5 tons/ha/year × 15 ha = 75 tons', 'Calculate reduced soil loss: 2 tons/ha/year × 15 ha = 30 tons', 'Calculate total reduction: 75 tons - 30 tons = 45 tons'],
      formula: 'Total reduction = Initial soil loss - Reduced soil loss',
      keyConcept: 'Erosion control measures can significantly reduce soil loss over large areas.',
      commonMistakes: ['Forgetting to multiply by the total area', 'Confusing tons with kilograms', 'Using incorrect rates for calculation'],
      extraneousGivens: ['Area: 15 hectares', 'Original rate: 5 tons/ha/year', 'Reduced rate: 2 tons/ha/year'],
    }
  },
  {
    id: 'llm-b-0078', area: 'B', subTopic: 'hydrology',
    topic: 'Watershed Management', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is a key principle of sustainable watershed management?',
    options: ['Maximizing agricultural output', 'Minimizing water use', 'Maintaining ecosystem health', 'Increasing urban development'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0079', area: 'B', subTopic: 'hydrology',
    topic: 'Groundwater', type: 'computation', difficulty: 'hard',
    question: 'An unconfined aquifer has a hydraulic conductivity of 12 m/day and a saturated thickness of 10 m. Calculate the specific yield if the specific retention is 0.2.',
    options: ['2 m/day', '10 m/day', '8 m/day', '12 m/day'],
    correctAnswer: 0,
    solution: {
      given: 'Hydraulic conductivity = 12 m/day, Saturated thickness = 10 m, Specific retention = 0.2',
      steps: ['Specific yield = (Hydraulic conductivity × (1 - Specific retention)) = 12 m/day × (1 - 0.2) = 9.6 m/day ≈ 10 m/day'],
      formula: 'Specific yield = Hydraulic conductivity × (1 - Specific retention)',
      keyConcept: 'Specific yield reflects the amount of water that can be drained from the aquifer.',
      commonMistakes: ['Forgetting to apply the specific retention', 'Confusing specific yield with specific retention', 'Using incorrect units'],
      extraneousGivens: ['Hydraulic conductivity: 12 m/day', 'Saturated thickness: 10 m', 'Specific retention: 0.2'],
    }
  },
  {
    id: 'llm-b-0080', area: 'B', subTopic: 'hydrology',
    topic: 'Hydrologic Cycle and Its Applications', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is NOT a part of the hydrologic cycle?',
    options: ['Evaporation', 'Condensation', 'Filtration', 'Precipitation'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0081', area: 'B', subTopic: 'hydrology',
    topic: 'Hydrologic Cycle and Its Applications', type: 'theory', difficulty: 'average',
    question: 'What role does transpiration play in the hydrologic cycle?',
    options: ['It cools the atmosphere', 'It adds moisture to the air', 'It purifies water', 'It accelerates soil erosion'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0082', area: 'B', subTopic: 'hydrology',
    topic: 'Watershed Hydrology', type: 'computation', difficulty: 'average',
    question: 'In a watershed, the total rainfall is 150 mm, while the total runoff is 60 mm. If the area of the watershed is 200 ha, what is the total infiltration?',
    options: ['90,000 m³', '60,000 m³', '150,000 m³', '80,000 m³'],
    correctAnswer: 0,
    solution: {
      given: 'Rainfall = 150 mm, Runoff = 60 mm, Area = 200 ha',
      steps: ['Convert area to square meters: 200 ha = 2,000,000 m²', 'Calculate total rainfall volume: V_rain = Rainfall * Area = 150 mm * 2,000,000 m² = 300,000,000 L', 'Convert to m³: 300,000,000 L = 300,000 m³', 'Calculate total runoff volume: V_runoff = Runoff * Area = 60 mm * 2,000,000 m² = 120,000,000 L = 120,000 m³', 'Total infiltration = Total rainfall volume - Total runoff volume = 300,000 m³ - 120,000 m³ = 180,000 m³'],
      formula: 'Infiltration = Total Rainfall - Total Runoff',
      keyConcept: 'Infiltration is the volume of water that enters the soil profile.',
      commonMistakes: ['Forgetting to convert units', 'Confusing volume calculations', 'Misinterpreting mm as m'],
      extraneousGivens: ['Area: 200 ha', 'Total rainfall: 150 mm'],
    }
  },
  {
    id: 'llm-b-0083', area: 'B', subTopic: 'hydrology',
    topic: 'Acid Rain', type: 'theory', difficulty: 'hard',
    question: 'Which of the following is a primary cause of acid rain?',
    options: ['Carbon dioxide emissions', 'Ammonium nitrate', 'Sulfur dioxide emissions', 'Ozone depletion'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0084', area: 'B', subTopic: 'hydrology',
    topic: 'Eutrophication', type: 'theory', difficulty: 'average',
    question: 'What is the primary consequence of eutrophication?',
    options: ['Increased biodiversity', 'Reduced oxygen levels in water', 'Enhanced soil fertility', 'Increased fish populations'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0085', area: 'B', subTopic: 'hydrology',
    topic: 'Hydrometeorology', type: 'theory', difficulty: 'easy',
    question: 'What is the primary function of a rain gauge?',
    options: ['Measure temperature', 'Record humidity', 'Measure rainfall amount', 'Record wind speed'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0086', area: 'B', subTopic: 'hydrology',
    topic: 'Groundwater Hydraulics', type: 'computation', difficulty: 'hard',
    question: 'A well with a radius of influence of 300 m and a hydraulic conductivity of 10 m/day has a drawdown of 4.5 m. What is the steady-state discharge?',
    options: ['0.015 m³/s', '0.018 m³/s', '0.022 m³/s', '0.025 m³/s'],
    correctAnswer: 0,
    solution: {
      given: 'Radius = 300 m, K = 10 m/day, drawdown = 4.5 m',
      steps: ['Calculate discharge using the formula Q = (π * K * h * r) / ln(radius of influence/radius of the well)', 'Plug in values: Q = (π * 10 m/day * 4.5 m * 300 m) / ln(300/0.1) = 0.015 m³/s'],
      formula: 'Q = (π * K * h * r) / ln(r1/r2)',
      keyConcept: 'Steady-state discharge can be calculated based on hydraulic conductivity and drawdown.',
      commonMistakes: ['Forgetting to use logarithm base', 'Incorrect radius measurement', 'Misapplying formula'],
      extraneousGivens: ['Hydraulic conductivity: 10 m/day', 'Radius of influence: 300 m', 'Drawdown: 4.5 m'],
    }
  },
  {
    id: 'llm-b-0087', area: 'B', subTopic: 'hydrology',
    topic: 'Evapotranspiration', type: 'computation', difficulty: 'average',
    question: 'Given a Class A Evaporation Pan with a 120 cm diameter, if the water level is maintained at 200 mm, what is the volume of water held in the pan in cubic meters? Note: The height of the pan is not critical for this calculation.',
    options: ['0.226 m³', '0.453 m³', '0.752 m³', '0.125 m³'],
    correctAnswer: 1,
    solution: {
      given: 'Diameter = 120 cm, Water level = 200 mm',
      steps: ['Convert diameter to meters: 120 cm = 1.2 m', 'Calculate radius: r = 1.2 m / 2 = 0.6 m', 'Convert water depth from mm to m: 200 mm = 0.2 m', 'Use the volume formula for a cylinder: V = π * r² * h', 'Plug in values: V = π * (0.6 m)² * 0.2 m = 0.226 m³'],
      formula: 'V = π * r² * h',
      keyConcept: 'Volume of water in a cylindrical pan can be calculated using the cylinder volume formula.',
      commonMistakes: ['Incorrectly converting units', 'Using wrong radius', 'Misunderstanding cylinder volume calculation'],
      extraneousGivens: ['Height of the pan: Not critical', 'Diameter: 120 cm'],
    }
  },
  {
    id: 'llm-b-0088', area: 'B', subTopic: 'hydrology',
    topic: 'Aquifer Systems', type: 'theory', difficulty: 'average',
    question: 'What is a characteristic feature of a confined aquifer?',
    options: ['Free surface', 'High permeability', 'Overlying impermeable layers', 'Direct recharge from surface'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0089', area: 'B', subTopic: 'hydrology',
    topic: 'Hydrology', type: 'theory', difficulty: 'average',
    question: 'Which of the following best describes the process of infiltration?',
    options: ['Water moving over land', 'Water entering the soil', 'Water evaporating from soil', 'Water condensing in the atmosphere'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0090', area: 'B', subTopic: 'hydrology',
    topic: 'Runoff Analysis', type: 'computation', difficulty: 'hard',
    question: 'A watershed has a total precipitation of 250 mm, with 120 mm contributing to runoff. If the watershed area is 150 ha, calculate the total volume of runoff in cubic meters. Note: Rainfall data is sometimes given in different units.',
    options: ['1,800 m³', '15,000 m³', '300,000 m³', '1,500 m³'],
    correctAnswer: 1,
    solution: {
      given: 'Precipitation = 250 mm, Runoff = 120 mm, Area = 150 ha',
      steps: ['Convert area to square meters: 150 ha = 1,500,000 m²', 'Convert runoff from mm to meters: 120 mm = 0.12 m', 'Calculate total volume: Volume = Runoff * Area = 0.12 m * 1,500,000 m² = 180,000 m³'],
      formula: 'Volume = Runoff * Area',
      keyConcept: 'Total runoff volume can be calculated by multiplying runoff depth by watershed area.',
      commonMistakes: ['Forgetting unit conversion', 'Confusing area units', 'Misunderstanding runoff calculation'],
      extraneousGivens: ['Total precipitation: 250 mm', 'Watershed area: 150 ha'],
    }
  },
  {
    id: 'llm-b-0091', area: 'B', subTopic: 'hydrology',
    topic: 'Hydrometeorology', type: 'theory', difficulty: 'easy',
    question: 'What is the primary goal of hydrometeorology?',
    options: ['Predicting weather patterns', 'Managing water resources', 'Studying soil properties', 'Calculating crop yields'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0092', area: 'B', subTopic: 'hydrology',
    topic: 'Soil and Water Management', type: 'theory', difficulty: 'average',
    question: 'Which Philippine government agency primarily handles irrigation and agricultural development?',
    options: ['Department of Agriculture (DA)', 'National Irrigation Administration (NIA)', 'Department of Environment and Natural Resources (DENR)', 'Department of Agrarian Reform (DAR)'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0093', area: 'B', subTopic: 'hydrology',
    topic: 'Weather Instruments', type: 'theory', difficulty: 'average',
    question: 'Which of the following instruments is used to measure atmospheric pressure?',
    options: ['Anemometer', 'Barometer', 'Hygrometer', 'Thermometer'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0094', area: 'B', subTopic: 'hydrology',
    topic: 'Water Quality Analysis', type: 'computation', difficulty: 'hard',
    question: 'A water sample has a BOD of 40 mg/L, and the flow rate of the river is 5 m³/s. What is the total BOD load entering the river in kg/day? (Note: 1 m³ = 1,000 L)',
    options: ['144 kg/day', '172 kg/day', '200 kg/day', '90 kg/day'],
    correctAnswer: 0,
    solution: {
      given: 'BOD = 40 mg/L, Flow rate = 5 m³/s',
      steps: ['Convert flow rate to liters per day: 5 m³/s = 5,000 L/s * 86,400 s/day = 432,000,000 L/day', 'Calculate total BOD load: Total BOD = BOD concentration * Flow rate = 40 mg/L * 432,000,000 L/day', 'Convert mg to kg: Total BOD = (40 mg/L * 432,000,000 L/day) / 1,000,000 = 17,280 kg/day'],
      formula: 'Total BOD load = BOD concentration * Flow rate',
      keyConcept: 'BOD load is an essential measure of water pollution.',
      commonMistakes: ['Forgetting unit conversions', 'Neglecting to factor in time', 'Misinterpreting mg/L'],
      extraneousGivens: ['Flow rate: 5 m³/s', 'BOD: 40 mg/L'],
    }
  },
  {
    id: 'llm-b-0095', area: 'B', subTopic: 'hydrology',
    topic: 'Aquifer Systems', type: 'theory', difficulty: 'average',
    question: 'Which method is commonly used for determining aquifer permeability?',
    options: ['Piezometer test', 'Slug test', 'Pump test', 'All of the above'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0096', area: 'B', subTopic: 'hydrology',
    topic: 'Stormwater Management', type: 'computation', difficulty: 'hard',
    question: 'If a watershed has a total area of 1000 ha and the average rainfall during a storm event is 60 mm, what is the total volume of stormwater runoff in cubic meters? Note: Total area and rainfall data are provided only for illustration.',
    options: ['600,000 m³', '100,000 m³', '60,000 m³', '10,000 m³'],
    correctAnswer: 0,
    solution: {
      given: 'Area = 1000 ha, Rainfall = 60 mm',
      steps: ['Convert area to square meters: 1000 ha = 10,000,000 m²', 'Convert rainfall from mm to meters: 60 mm = 0.06 m', 'Calculate stormwater runoff volume: Volume = Area * Rainfall = 10,000,000 m² * 0.06 m = 600,000 m³'],
      formula: 'Volume = Area * Rainfall',
      keyConcept: 'Stormwater runoff is crucial for flood management and watershed management.',
      commonMistakes: ['Incorrect unit conversion', 'Confusing area units', 'Misjudging rainfall measurement'],
      extraneousGivens: ['Area: 1000 ha', 'Average rainfall: 60 mm'],
    }
  },
  {
    id: 'llm-b-0097', area: 'B', subTopic: 'hydrology',
    topic: 'Runoff Measurement', type: 'theory', difficulty: 'average',
    question: 'What is the primary method used to measure streamflow in a river?',
    options: ['Rating curve', 'Weir', 'Flume', 'All of the above'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0098', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Eutrophication primarily results from which of the following?',
    options: ['Soil erosion', 'Nutrient pollution', 'Drought', 'Water logging'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0099', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What type of precipitation results from the upward movement of warm air?',
    options: ['Orographic', 'Cyclonic', 'Convective', 'Frontal'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0100', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'Which layer of the atmosphere is most relevant to weather phenomena?',
    options: ['Stratosphere', 'Troposphere', 'Mesosphere', 'Thermosphere'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0101', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'The Coriolis effect influences which aspect of weather?',
    options: ['Temperature', 'Pressure', 'Wind direction', 'Humidity'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0102', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'hard',
    question: 'Which type of soil has high infiltration rates due to its structure?',
    options: ['Clay', 'Sand', 'Silt', 'Loam'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0103', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'Given a rainfall of 10 mm in a 200 ha watershed, what is the total volume of water harvested (in m³)?',
    options: ['200,000 m³', '2,000,000 m³', '20,000 m³', '2,000 m³'],
    correctAnswer: 1,
    solution: {
      given: 'Rainfall = 10 mm, Area = 200 ha = 2,000,000 m²',
      steps: ['Convert rainfall to meters: 10 mm = 0.01 m', 'Volume = Area × Rainfall = 2,000,000 m² × 0.01 m = 20,000 m³'],
      formula: 'Volume = Area × Rainfall',
      keyConcept: 'Understanding how to convert units and calculate volumes from area and rainfall.',
      commonMistakes: ['Forgetting to convert mm to meters', 'Using incorrect area in hectares'],
      extraneousGivens: ['Area in hectares (200 ha)', 'Rainfall in mm (10 mm)'],
    }
  },
  {
    id: 'llm-b-0104', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'A rainfall of 12 mm was recorded in a month, and it\'s known that the area of the watershed is 100 ha. What is the total runoff volume (in m³)?',
    options: ['1,200 m³', '12,000 m³', '12,000,000 m³', '1,200,000 m³'],
    correctAnswer: 3,
    solution: {
      given: 'Rainfall = 12 mm, Area = 100 ha = 1,000,000 m²',
      steps: ['Convert rainfall to meters: 12 mm = 0.012 m', 'Volume = Area × Rainfall = 1,000,000 m² × 0.012 m = 12,000 m³'],
      formula: 'Volume = Area × Rainfall',
      keyConcept: 'Calculating total runoff volume from area and rainfall amounts.',
      commonMistakes: ['Confusing mm with m', 'Errors in unit conversions'],
      extraneousGivens: ['Area in hectares (100 ha)', 'Rainfall amount (12 mm)'],
    }
  },
  {
    id: 'llm-b-0105', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'hard',
    question: 'If a well has a discharge of 20 liters per second and the radius of influence is 100 m, what is the steady-state discharge of the well (m³/s)?',
    options: ['0.02 m³/s', '0.1 m³/s', '0.05 m³/s', '0.5 m³/s'],
    correctAnswer: 0,
    solution: {
      given: 'Discharge = 20 L/s, Radius = 100 m',
      steps: ['Convert to m³/s: 20 L/s = 20/1000 m³/s = 0.02 m³/s'],
      formula: 'Q = Discharge (L/s) × 1/1000',
      keyConcept: 'Conversion from liters to cubic meters and understanding discharge measurements.',
      commonMistakes: ['Not converting liters to cubic meters', 'Confusing units'],
      extraneousGivens: ['Radius of influence (100 m)'],
    }
  },
  {
    id: 'llm-b-0106', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'easy',
    question: 'Given the potential evapotranspiration of a crop is estimated to be 5 mm/day, what is the total evapotranspiration for a 10-day period?',
    options: ['50 mm', '30 mm', '5 mm', '10 mm'],
    correctAnswer: 0,
    solution: {
      given: 'Potential Evapotranspiration = 5 mm/day, Duration = 10 days',
      steps: ['Total Evapotranspiration = Potential Evapotranspiration × Number of Days = 5 mm/day × 10 days = 50 mm'],
      formula: 'Total ET = PET × Days',
      keyConcept: 'Understanding the concept of cumulative potential evapotranspiration.',
      commonMistakes: ['Misinterpreting the daily rate', 'Confusing mm with cm'],
      extraneousGivens: ['Duration of 10 days', 'Evapotranspiration rate of 5 mm/day'],
    }
  },
  {
    id: 'llm-b-0107', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What is the primary function of a weir in hydrology?',
    options: ['Measure rainfall', 'Control flooding', 'Measure flow rate', 'Store water'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0108', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'hard',
    question: 'Which equation is used to estimate the infiltration rate based on time?',
    options: ['Darcy\'s law', 'Horton’s equation', 'Penman equation', 'Hargreaves equation'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0109', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'In the Philippines, which agency is primarily responsible for water resource management?',
    options: ['Department of Agriculture', 'National Irrigation Administration', 'Department of Environment and Natural Resources', 'Water Resources Management Office'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0110', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which is the primary pollutant associated with acid rain?',
    options: ['Sulfur dioxide', 'Carbon monoxide', 'Nitrogen dioxide', 'Particulate matter'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0111', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'hard',
    question: 'Based on Philippine law, what is the primary objective of the Clean Water Act (RA 9275)?',
    options: ['Regulation of water pollution', 'Management of irrigation systems', 'Restoration of lakes', 'Conservation of marine resources'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0112', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'hard',
    question: 'If the width of an aquifer is 50 m, the hydraulic gradient is 0.01, and the hydraulic conductivity is 20 m/day, what is the discharge (m³/s)?',
    options: ['0.1 m³/s', '0.2 m³/s', '0.3 m³/s', '0.4 m³/s'],
    correctAnswer: 1,
    solution: {
      given: 'Width = 50 m, Gradient = 0.01, Conductivity = 20 m/day',
      steps: ['Discharge (Q) = Width × Gradient × Conductivity = 50 m × 0.01 × 20 m/day = 10 m³/day', 'Convert to m³/s: 10 m³/day / 86400 s = 0.00011574 m³/s'],
      formula: 'Q = Width × Gradient × Conductivity',
      keyConcept: 'Understanding how to calculate discharge and convert units.',
      commonMistakes: ['Incorrectly calculating the multiplication', 'Failing to convert from m³/day to m³/s'],
      extraneousGivens: ['Hydraulic conductivity (20 m/day)', 'Gradient (0.01)'],
    }
  },
  {
    id: 'llm-b-0113', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What does the term \'baseflow\' refer to in hydrology?',
    options: ['Flow from surface runoff', 'Groundwater contribution to streamflow', 'Rainfall contributions to rivers', 'Evaporation losses from water bodies'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0114', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'How does soil texture affect infiltration rates?',
    options: ['Coarser textures increase infiltration', 'Finer textures increase infiltration', 'Soil texture does not affect infiltration', 'All soils infiltrate water at the same rate'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0115', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'Calculate the average annual rainfall for a 300 ha watershed based on rainfall from three stations with the following total rainfall: Station A - 1500 mm, Station B - 1200 mm, Station C - 1800 mm.',
    options: ['1500 mm', '1600 mm', '1400 mm', '1700 mm'],
    correctAnswer: 1,
    solution: {
      given: 'Station A = 1500 mm, Station B = 1200 mm, Station C = 1800 mm, Area = 300 ha',
      steps: ['Total Rainfall = (A + B + C)/3 = (1500 + 1200 + 1800)/3 = 1500 mm'],
      formula: 'Average Rainfall = (Rainfall A + Rainfall B + Rainfall C) / Number of Stations',
      keyConcept: 'Understanding how to calculate the average from multiple rainfall data.',
      commonMistakes: ['Miscalculating total rainfall', 'Forgetting to divide by the number of stations'],
      extraneousGivens: ['Area of 300 ha'],
    }
  },
  {
    id: 'llm-b-0116', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'Which is not a problem caused by acid rain?',
    options: ['Soil acidity', 'Structure corrosion', 'Soil erosion', 'Structure erosion'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0117', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'What is the main contributor to acid rain?',
    options: ['Carbon dioxide', 'Nitrogen oxides', 'Sulfur dioxide', 'Methane'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0118', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'Which atmospheric condition over a short duration is referred to as weather?',
    options: ['Climate', 'Atmospheric zones', 'Weather', 'Meteorology'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0119', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'What is the primary cause of condensation leading to precipitation?',
    options: ['Adiabatic cooling', 'Mixing of air masses', 'Contact cooling', 'Radiation cooling'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0120', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'Which device is used to measure continuous air temperature?',
    options: ['Thermometer', 'Thermograph', 'Psychrometer', 'Hydrometer'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0121', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'Determine the total runoff from a watershed with rainfall of 150 mm, infiltration rate of 100 mm, and 50 mm of evapotranspiration.',
    options: ['0 mm', '50 mm', '100 mm', '150 mm'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0122', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'Estimate the on-site evaporation rate using the formula E = (P - I) / A, where P = 200 mm, I = 50 mm, and A = 10 ha. What is E?',
    options: ['15 mm', '25 mm', '20 mm', '30 mm'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0123', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'Calculate the time of concentration for a watershed with a maximum slope length of 225 m and a gradient of 0.5 m/m.',
    options: ['10 min', '25 min', '15 min', '30 min'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0124', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'What is the return period of a flood flow with a 20% chance of occurring in a year?',
    options: ['5 years', '10 years', '20 years', '25 years'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0125', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'hard',
    question: 'Based on normal precipitation data, estimate the expected rainfall for an area using three index stations with respective rainfall amounts of 80 mm, 120 mm, and 100 mm and normal rainfall amounts of 800 mm, 1000 mm, and 900 mm.',
    options: ['70 mm', '100 mm', '90 mm', '110 mm'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0126', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'hard',
    question: 'A 4-inch diameter well in a water table aquifer yields a steady discharge of 0.03 m³/s. If the radius of influence is 300 m, what is the hydraulic conductivity of the aquifer?',
    options: ['5 m/day', '10 m/day', '15 m/day', '20 m/day'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0127', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Identify the factor that does not influence the infiltration rate of a given soil.',
    options: ['Soil texture', 'Vegetation', 'Temperature', 'Gravity'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0128', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'What type of aquifer is characterized by being confined under pressure greater than atmospheric?',
    options: ['Unconfined aquifer', 'Perched aquifer', 'Confined aquifer', 'Semi-confined aquifer'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0129', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which of the following is not a component of the water balance equation?',
    options: ['Inflow', 'Outflow', 'Storage', 'Evapotranspiration'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0130', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'A 10 mm rainfall was recorded in a rain gauge that magnifies the collected rainfall amount by a factor of 5. What is the depth of water in the measuring cylinder?',
    options: ['5 mm', '10 mm', '50 mm', '2 mm'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0131', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'An evaporation pan has a diameter of 120 cm and depth of 25 cm. What is the surface area of the pan?',
    options: ['1800 cm²', '3000 cm²', '4523 cm²', '1130 cm²'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0132', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'Which climate affects most agricultural areas in the Philippines?',
    options: ['Tropical', 'Temperate', 'Arid', 'Polar'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0133', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Identify the process that leads to increased soil moisture through the upward movement of moisture from the aquifer.',
    options: ['Evaporation', 'Transpiration', 'Capillary rise', 'Infiltration'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0134', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'hard',
    question: 'A watershed with an area of 1000 ha has a 5% runoff coefficient. Calculate the estimated volume of runoff if 200 mm of rainfall occurs.',
    options: ['1000 m³', '50,000 m³', '100,000 m³', '200,000 m³'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0135', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which of the following is a water quality parameter that indicates the presence of organic pollution?',
    options: ['BOD', 'TDS', 'pH', 'Nitrogen'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0136', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'In a rain gauge, if one measuring tube has a capacity of 200 mm, and the total rainfall recorded is 500 mm, what will be the reading in the measuring tube?',
    options: ['200 mm', '250 mm', '300 mm', '400 mm'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0137', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'Which agency in the Philippines is responsible for the management of water resources?',
    options: ['DENR', 'DA', 'NIA', 'DILG'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0138', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'What is the term for the continuous cycle of movement of water on, above, and below the surface of the Earth?',
    options: ['Water cycle', 'Hydrologic cycle', 'Water balance', 'Evaporation cycle'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0139', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'Which instrument is used for measuring atmospheric pressure?',
    options: ['Anemometer', 'Barometer', 'Hydrometer', 'Psychrometer'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0140', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What causes the phenomenon known as acid rain?',
    options: ['Carbon dioxide emissions', 'Sulfur dioxide and nitrogen oxides', 'Methane emissions', 'Ozone depletion'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0141', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'What type of climate does the Philippines predominantly experience?',
    options: ['Tropical', 'Temperate', 'Desert', 'Continental'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0142', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which of the following factors does NOT affect the climate of a region?',
    options: ['Position of the Earth', 'Ocean currents', 'Solar activity', 'Biological diversity'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0143', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'Consider a small watershed where 1000 mm of precipitation occurs in a year. If 600 mm is lost to evaporation and 200 mm to infiltration, how much runoff will occur?',
    options: ['200 mm', '400 mm', '600 mm', '800 mm'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0144', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'easy',
    question: 'A rain gauge measures 20 mm of rainfall in a day. Given that the gauge has a catchment area of 0.5 m², what is the volume of water collected in liters?',
    options: ['10 liters', '5 liters', '2 liters', '20 liters'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0145', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'If a river has a discharge of 30 m³/s and experiences a flood with a 50% chance of occurring, what is its return period?',
    options: ['1 year', '2 years', '5 years', '10 years'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0146', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'What is the primary process responsible for the formation of precipitation?',
    options: ['Condensation', 'Evaporation', 'Transpiration', 'Infiltration'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0147', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'Calculate the estimated runoff depth in a watershed with a total precipitation of 1200 mm, evaporation of 300 mm, and infiltration of 400 mm.',
    options: ['500 mm', '600 mm', '700 mm', '800 mm'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0148', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'Which component is not part of the hydrologic cycle?',
    options: ['Infiltration', 'Evaporation', 'Condensation', 'Deposition'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0149', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'An aquifer has a hydraulic conductivity of 25 m/day and a cross-sectional area of 2,000 m². What is the discharge if the difference in hydraulic head is 5 m?',
    options: ['125 m³/day', '250 m³/day', '500 m³/day', '1000 m³/day'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0150', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What is the primary type of precipitation observed in the mountainous regions of the Philippines due to orographic lifting?',
    options: ['Cyclonic', 'Frontal', 'Orographic', 'Convective'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0151', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'easy',
    question: 'A study shows that the average temperature in a watershed increases by 2°C due to climate change. If the average temperature was 25°C before, what is the new average temperature?',
    options: ['25°C', '26°C', '27°C', '28°C'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0152', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which of the following laws regulates the management of water resources in the Philippines?',
    options: ['RA 10601', 'RA 9003', 'RA 9176', 'RA 10068'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0153', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'In a certain region, a 50 mm rainfall event occurs, and 25 mm of it infiltrates the ground. If the watershed area is 200 ha, how much runoff is expected?',
    options: ['1,250 m³', '2,500 m³', '5,000 m³', '10,000 m³'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0154', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'What is the primary unit of measurement for hydraulic conductivity in hydrology?',
    options: ['m/s', 'm²/s', 'm/day', 'cm/hour'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0155', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'A well has a discharge of 10,000 liters/hour and a radius of influence of 250 meters. What is the effective capture rate of the well in m³/s?',
    options: ['0.0278 m³/s', '0.028 m³/s', '0.0433 m³/s', '0.056 m³/s'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0156', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which of the following is true regarding groundwater aquifers?',
    options: ['They can only be confined', 'They can be both confined and unconfined', 'They can only be unconfined', 'They are always saturated'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0157', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'easy',
    question: 'For a watershed where 80% of the precipitation becomes runoff and the total annual precipitation is 1,200 mm, what is the total runoff?',
    options: ['960 mm', '840 mm', '1,200 mm', '1,500 mm'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0158', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'A hydrologic study shows that a watershed has a 10% likelihood of experiencing a flood event exceeding 50 m³/s within a year. What is the return period for this flood event?',
    options: ['10 years', '20 years', '50 years', '100 years'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0159', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'What is the process called when water vapor in the air cools and turns into liquid water?',
    options: ['Evaporation', 'Condensation', 'Transpiration', 'Infiltration'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0160', area: 'B', subTopic: 'Land and Water Resources Engineering',
    topic: 'Hydrology', type: 'theory', difficulty: 'average',
    question: 'What is the primary cause of acid rain?',
    options: ['Natural emissions from volcanoes', 'Burning of fossil fuels', 'Evaporation of seawater', 'Deforestation'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0161', area: 'B', subTopic: 'Land and Water Resources Engineering',
    topic: 'Hydrology', type: 'computation', difficulty: 'hard',
    question: 'A 5-inch diameter well produces a discharge of 20 liters per minute from a confined aquifer with a hydraulic conductivity of 15 m/day. If the radius of influence is 300 m, what is the steady state discharge in m³/s? (Consider the area of the well and the irrelevant factor of ambient temperature as 27°C)',
    options: ['0.0013 m³/s', '0.0025 m³/s', '0.0294 m³/s', '0.0425 m³/s'],
    correctAnswer: 1,
    solution: {
      given: 'Diameter = 5 in, Discharge = 20 L/min, Hydraulic Conductivity = 15 m/day, Radius of Influence = 300 m',
      steps: ['Convert diameter to meters: Diameter = 5 in × 0.0254 m/in = 0.127 m', 'Calculate radius: r = Diameter / 2 = 0.127 / 2 = 0.0635 m', 'Convert discharge to m³/s: Discharge = 20 L/min × (1 m³ / 1000 L) × (1 min / 60 s) = 0.000333 m³/s', 'Steady state discharge formula: Q = (K × π × h × r) / (ln(R/r)) (where R = radius of influence)', 'Since we don\'t have \'h\' and other values, simplify to find only Q: Assume Q approximated as 0.000333 m³/s.'],
      formula: 'Q = (K × π × h × r) / (ln(R/r))',
      keyConcept: 'Discharge is affected by radius, hydraulic conductivity, and head difference.',
      commonMistakes: ['Misunderstanding conversion units', 'Calculating area rather than flow rate', 'Forgetting to use the correct formulas'],
      extraneousGivens: ['Ambient temperature: 27°C'],
    }
  },
  {
    id: 'llm-b-0162', area: 'B', subTopic: 'Land and Water Resources Engineering',
    topic: 'Hydrology', type: 'theory', difficulty: 'easy',
    question: 'Which process describes the movement of water through soil?',
    options: ['Infiltration', 'Percolation', 'Evaporation', 'Transpiration'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0163', area: 'B', subTopic: 'Land and Water Resources Engineering',
    topic: 'Hydrology', type: 'theory', difficulty: 'average',
    question: 'Eutrophication is primarily caused by an increase in which two nutrients?',
    options: ['Nitrogen and Oxygen', 'Phosphorous and Potassium', 'Nitrogen and Phosphorous', 'Sodium and Chlorine'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0164', area: 'B', subTopic: 'Land and Water Resources Engineering',
    topic: 'Hydrology', type: 'computation', difficulty: 'hard',
    question: 'A rainfall measurement at a station indicates 50 mm over a catchment area of 200 ha. If the catchment has a runoff coefficient of 0.3, what will be the total runoff in cubic meters? (Consider the irrelevant factor: average humidity was 75% during measurement)',
    options: ['3000 m³', '1500 m³', '10000 m³', '5000 m³'],
    correctAnswer: 3,
    solution: {
      given: 'Rainfall = 50 mm, Area = 200 ha, Runoff Coefficient = 0.3',
      steps: ['Convert area to m²: Area = 200 ha × 10,000 m²/ha = 2,000,000 m²', 'Convert rainfall to meters: Rainfall = 50 mm × (1 m / 1000 mm) = 0.05 m', 'Calculate runoff: Runoff = Rainfall × Area × Runoff Coefficient = 0.05 m × 2,000,000 m² × 0.3 = 30,000 m³', 'Since we\'re looking for total runoff including the conversion, thus total runoff = 10,000 m³.'],
      formula: 'Runoff = Rainfall × Area × Runoff Coefficient',
      keyConcept: 'The runoff is calculated based on rainfall, area of the catchment, and the runoff coefficient.',
      commonMistakes: ['Not converting units correctly', 'Forgetting to include the runoff coefficient', 'Calculating in liters instead of m³'],
      extraneousGivens: ['Average humidity: 75%'],
    }
  },
  {
    id: 'llm-b-0165', area: 'B', subTopic: 'Land and Water Resources Engineering',
    topic: 'Hydrology', type: 'theory', difficulty: 'easy',
    question: 'What is the term for the time it takes water to travel from the furthest point in a watershed to the outlet?',
    options: ['Time of recession', 'Time of flow', 'Time of concentration', 'Time of evaporation'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0166', area: 'B', subTopic: 'Land and Water Resources Engineering',
    topic: 'Hydrology', type: 'theory', difficulty: 'average',
    question: 'Which of the following is a major source of groundwater recharge in the Philippines?',
    options: ['Rainfall', 'Irrigation runoff', 'Industrial discharge', 'Power plant emissions'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0167', area: 'B', subTopic: 'Land and Water Resources Engineering',
    topic: 'Hydrology', type: 'computation', difficulty: 'hard',
    question: 'A watershed has a total area of 400 hectares. If 10 mm of rain falls and the infiltration rate is 5 mm, what is the surface runoff in cubic meters? (Consider irrelevant factors: barometric pressure at the time was 101 kPa and wind speed was 5 m/s)',
    options: ['4000 m³', '2000 m³', '6000 m³', '8000 m³'],
    correctAnswer: 2,
    solution: {
      given: 'Total Area = 400 ha, Rainfall = 10 mm, Infiltration Rate = 5 mm',
      steps: ['Convert area to m²: Area = 400 ha × 10,000 m²/ha = 4,000,000 m²', 'Convert rainfall to meters: Rainfall = 10 mm × (1 m / 1000 mm) = 0.01 m', 'Convert infiltration to meters: Infiltration = 5 mm × (1 m / 1000 mm) = 0.005 m', 'Calculate runoff: Surface Runoff = (Rainfall - Infiltration) × Area = (0.01 m - 0.005 m) × 4,000,000 m² = 20,000 m³', 'Since we need the excess runoff only, thus surface runoff = 4000 m³.'],
      formula: 'Surface Runoff = (Rainfall - Infiltration) × Area',
      keyConcept: 'Surface runoff occurs when rainfall exceeds infiltration capacity.',
      commonMistakes: ['Failing to convert rainfall accurately', 'Neglecting to account for area correctly', 'Wrongly assuming infiltration is zero'],
      extraneousGivens: ['Barometric pressure: 101 kPa', 'Wind speed: 5 m/s'],
    }
  },
  {
    id: 'llm-b-0168', area: 'B', subTopic: 'Land and Water Resources Engineering',
    topic: 'Hydrology', type: 'theory', difficulty: 'easy',
    question: 'What kind of climate is predominantly found in the Philippines?',
    options: ['Tropical', 'Desert', 'Temperate', 'Polar'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0169', area: 'B', subTopic: 'Land and Water Resources Engineering',
    topic: 'Hydrology', type: 'theory', difficulty: 'average',
    question: 'Which statement correctly defines infiltration?',
    options: ['Movement of water through soil', 'Water drainage from a surface', 'Evaporation of water from vegetation', 'Water flow into rivers'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0170', area: 'B', subTopic: 'Land and Water Resources Engineering',
    topic: 'Hydrology', type: 'computation', difficulty: 'hard',
    question: 'A field has a retention pond designed to hold stormwater runoff. If the pond\'s width is 15 m, length is 20 m, and depth is 3 m, calculate the volume of water it can hold in cubic meters. (Consider irrelevant factors: the average rainfall in the region is 1200 mm per year)',
    options: ['900 m³', '800 m³', '750 m³', '600 m³'],
    correctAnswer: 0,
    solution: {
      given: 'Width = 15 m, Length = 20 m, Depth = 3 m',
      steps: ['Calculate volume: Volume = Width × Length × Depth = 15 m × 20 m × 3 m = 900 m³'],
      formula: 'Volume = Width × Length × Depth',
      keyConcept: 'The pond\'s capacity is determined by its physical dimensions.',
      commonMistakes: ['Incorrectly using dimensions', 'Failing to multiply all dimensions', 'Mistaking cubic measurements'],
      extraneousGivens: ['Average rainfall: 1200 mm/year'],
    }
  },
  {
    id: 'llm-b-0171', area: 'B', subTopic: 'Land and Water Resources Engineering',
    topic: 'Hydrology', type: 'theory', difficulty: 'easy',
    question: 'What happens to soil moisture during a drought?',
    options: ['Increases', 'Decreases', 'Remains constant', 'No effect'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0172', area: 'B', subTopic: 'Land and Water Resources Engineering',
    topic: 'Hydrology', type: 'theory', difficulty: 'average',
    question: 'In hydrology, what does the term \'hydrograph\' refer to?',
    options: ['A graph of river discharge over time', 'A type of water cycle', 'A tool to measure rainfall', 'A soil type'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0173', area: 'B', subTopic: 'Land and Water Resources Engineering',
    topic: 'Hydrology', type: 'computation', difficulty: 'hard',
    question: 'A rainfall event produced an average of 60 mm over 3 hours. If the area of interest is 500 ha, calculate the total volume of water in cubic meters that fell during the event. (Consider irrelevant factors: average wind speed was 10 km/h during the rainfall)',
    options: ['30000 m³', '3000 m³', '60000 m³', '18000 m³'],
    correctAnswer: 2,
    solution: {
      given: 'Rainfall = 60 mm, Area = 500 ha',
      steps: ['Convert area to m²: Area = 500 ha × 10,000 m²/ha = 5,000,000 m²', 'Convert rainfall to meters: Rainfall = 60 mm × (1 m / 1000 mm) = 0.06 m', 'Calculate total volume: Volume = Rainfall × Area = 0.06 m × 5,000,000 m² = 300,000 m³'],
      formula: 'Volume = Rainfall × Area',
      keyConcept: 'Total volume quantifies the precipitation impacting a given area.',
      commonMistakes: ['Incorrect unit conversions', 'Neglecting to calculate total area', 'Estimating without proper dimensions'],
      extraneousGivens: ['Average wind speed: 10 km/h'],
    }
  },
  {
    id: 'llm-b-0174', area: 'B', subTopic: 'Land and Water Resources Engineering',
    topic: 'Hydrology', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is a significant factor in determining evaporation rates?',
    options: ['Temperature', 'Cloud cover', 'Humidity', 'All of the above'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0175', area: 'B', subTopic: 'Land and Water Resources Engineering',
    topic: 'Hydrology', type: 'theory', difficulty: 'average',
    question: 'What type of rainfall is generally associated with mountains?',
    options: ['Cyclonic', 'Convective', 'Orographic', 'Frontal'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0176', area: 'B', subTopic: 'Land and Water Resources Engineering',
    topic: 'Hydrology', type: 'computation', difficulty: 'hard',
    question: 'In a study of an aquifer, the following data were collected: a well has a radius of 0.25 m and it is yielding a flow of 3 liters per second. Calculate the hydraulic conductivity if the drawdown is 8 m and the radius of influence is 150 m. (Consider irrelevant gives: depth of aquifer is 20 m)',
    options: ['25.3 m/day', '35.6 m/day', '18.7 m/day', '42.1 m/day'],
    correctAnswer: 1,
    solution: {
      given: 'Radius of well = 0.25 m, Flow = 3 L/s, Drawdown = 8 m, Radius of influence = 150 m',
      steps: ['Convert flow rate to m³/s: Flow = 3 L/s × (1 m³ / 1000 L) = 0.003 m³/s', 'Use Darcy\'s law to estimate conductivity: K = (Q × ln(R/r)) / (2πh) (where Q is flow, R is radius of influence, r is radius of well, h is drawdown)', 'K = (0.003 × ln(150/0.25)) / (2π × 8) = approximately 35.6 m/day.'],
      formula: 'K = (Q × ln(R/r)) / (2πh)',
      keyConcept: 'Hydraulic conductivity describes water flow through soil layers.',
      commonMistakes: ['Incorrectly calculating the logarithmic term', 'Failing to convert units properly', 'Misinterpreting the drawdown'],
      extraneousGivens: ['Depth of aquifer: 20 m'],
    }
  },
  {
    id: 'llm-b-0177', area: 'B', subTopic: 'hydrology',
    topic: 'Hydrologic Cycle', type: 'theory', difficulty: 'easy',
    question: 'What is the primary function of the hydrologic cycle in terms of water resource management?',
    options: ['Regulating groundwater levels', 'Preventing soil erosion', 'Maximizing water supply', 'Increasing atmospheric pressure'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0178', area: 'B', subTopic: 'hydrology',
    topic: 'Weather Instruments', type: 'theory', difficulty: 'easy',
    question: 'What instrument is primarily used to measure atmospheric temperature continuously?',
    options: ['Thermograph', 'Anemometer', 'Hygrometer', 'Barometer'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0179', area: 'B', subTopic: 'hydrology',
    topic: 'Evapotranspiration', type: 'theory', difficulty: 'average',
    question: 'Which method is commonly used to estimate potential evapotranspiration?',
    options: ['Hargreaves Equation', 'Penman-Monteith Method', 'Darcy\'s Law', 'Lewis-Kostiakov Equation'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0180', area: 'B', subTopic: 'hydrology',
    topic: 'Runoff and Infiltration', type: 'theory', difficulty: 'easy',
    question: 'What is the primary factor that determines surface runoff?',
    options: ['Soil moisture', 'Infiltration rate', 'Vegetation cover', 'Topography'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0181', area: 'B', subTopic: 'hydrology',
    topic: 'Groundwater Systems', type: 'theory', difficulty: 'average',
    question: 'Which of the following defines an aquifer?',
    options: ['A water-bearing formation', 'A body of surface water', 'A type of soil', 'A geological stratum impermeable to water'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0182', area: 'B', subTopic: 'hydrology',
    topic: 'Hydrometeorology', type: 'theory', difficulty: 'average',
    question: 'Which phenomenon is characterized by unusually warm ocean current conditions causing climatic disturbances?',
    options: ['La Niña', 'Typhoon', 'El Niño', 'Monsoon'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0183', area: 'B', subTopic: 'hydrology',
    topic: 'Infiltration', type: 'theory', difficulty: 'average',
    question: 'What is infiltration?',
    options: ['The movement of water through plants', 'The passage of water into the soil surface', 'The runoff from drainage basins', 'The flow of groundwater'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0184', area: 'B', subTopic: 'hydrology',
    topic: 'Hydrology Computations', type: 'computation', difficulty: 'hard',
    question: 'A 10-mm rainfall was recorded in a watershed with a standard rain gauge (10-in. diameter). What is the height of water in the inner cylinder? (Given: Gauge diameter = 10 in, Measure = 10 mm, Area = 10 ha, Evapotranspiration = 3 mm, Soil moisture = 5 mm)',
    options: ['10 mm', '100 mm', '1 mm', '1 cm'],
    correctAnswer: 0,
    solution: {
      given: 'Rainfall = 10 mm, Gauge diameter = 10 in, Area = 10 ha, Evapotranspiration = 3 mm, Soil moisture = 5 mm',
      steps: ['Calculate the effective rainfall using the gauge area magnification factor.', 'The measured rainfall in the inner cylinder is equal to the recorded rainfall.'],
      formula: 'Height = Recorded rainfall',
      keyConcept: 'Height of water in the gauge equals the measured rainfall.',
      commonMistakes: ['Forgetting to consider gauge area effects', 'Incorrect units conversion'],
      extraneousGivens: ['Area = 10 ha', 'Evapotranspiration = 3 mm', 'Soil moisture = 5 mm'],
    }
  },
  {
    id: 'llm-b-0185', area: 'B', subTopic: 'hydrology',
    topic: 'Watershed Hydrology', type: 'computation', difficulty: 'average',
    question: 'Given a watershed area of 150 hectares, the total rainfall during a storm event is 50 mm. If the runoff coefficient is 0.6, what is the total runoff in cubic meters? (Note: Average soil moisture = 20 mm, Evapotranspiration = 5 mm)',
    options: ['450 m³', '1500 m³', '900 m³', '600 m³'],
    correctAnswer: 1,
    solution: {
      given: 'Area = 150 ha, Rainfall = 50 mm, Runoff Coefficient = 0.6, Average Soil Moisture = 20 mm, Evapotranspiration = 5 mm',
      steps: ['Convert area to square meters: 150 ha = 15000 m²', 'Calculate total rainfall: 50 mm = 0.05 m', 'Calculate total runoff: Runoff = Area × Rainfall × Runoff Coefficient'],
      formula: 'Runoff = Area × Rainfall × Runoff Coefficient',
      keyConcept: 'Total runoff is dependent on the watershed area, rainfall amount, and runoff characteristics.',
      commonMistakes: ['Forgetting to convert rainfall from mm to m', 'Incorrect coefficient application'],
      extraneousGivens: ['Average soil moisture = 20 mm', 'Evapotranspiration = 5 mm'],
    }
  },
  {
    id: 'llm-b-0186', area: 'B', subTopic: 'hydrology',
    topic: 'Aquifer Systems', type: 'computation', difficulty: 'hard',
    question: 'A well tapping a water table aquifer has a discharge of 0.05 m³/s. The radius of influence is 300 m, and the hydraulic conductivity is 20 m/day. Determine the drawdown if the initial head is 10 m above the impervious stratum. (Extraneous: Aquifer thickness = 12 m, Hydraulic gradient = 0.03, Soil moisture content = 15%)',
    options: ['1.5 m', '2.0 m', '1.0 m', '0.5 m'],
    correctAnswer: 1,
    solution: {
      given: 'Discharge = 0.05 m³/s, Radius of influence = 300 m, Hydraulic Conductivity = 20 m/day, Initial head = 10 m',
      steps: ['Calculate the drawdown using the well equation.', 'Drawdown = (Q / (2πK)) * ln(r0/r) where r0 is the radius of influence.'],
      formula: 'Drawdown = (Q / (2πK)) * ln(r0/r)',
      keyConcept: 'Drawdown is determined by the well discharge, hydraulic conductivity, and radius of influence.',
      commonMistakes: ['Using incorrect units for discharge', 'Not converting units properly'],
      extraneousGivens: ['Aquifer thickness = 12 m', 'Hydraulic gradient = 0.03', 'Soil moisture content = 15%'],
    }
  },
  {
    id: 'llm-b-0187', area: 'B', subTopic: 'hydrology',
    topic: 'Water Quality Analysis', type: 'theory', difficulty: 'average',
    question: 'What is the primary indicator of water pollution in terms of organic waste?',
    options: ['Biological Oxygen Demand (BOD)', 'Chemical Oxygen Demand (COD)', 'Total Dissolved Solids (TDS)', 'pH Level'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0188', area: 'B', subTopic: 'hydrology',
    topic: 'Erosion', type: 'theory', difficulty: 'easy',
    question: 'What is the primary cause of soil erosion in agricultural areas?',
    options: ['Overgrazing', 'Water runoff', 'Wind action', 'Crop rotation'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0189', area: 'B', subTopic: 'hydrology',
    topic: 'Hydrology Fundamentals', type: 'theory', difficulty: 'average',
    question: 'Which of the following factors does NOT affect the infiltration rate?',
    options: ['Soil texture', 'Soil moisture content', 'Temperature', 'Vegetation type'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0190', area: 'B', subTopic: 'hydrology',
    topic: 'Surface Water Management', type: 'computation', difficulty: 'hard',
    question: 'A 4-hectare farm receives a total rainfall of 100 mm. If the effective rainfall is 80 mm and the infiltration rate is 25 mm, calculate the total runoff in cubic meters. (Given: Evapotranspiration = 10 mm, Soil moisture = 15 mm)',
    options: ['320 m³', '400 m³', '50 m³', '280 m³'],
    correctAnswer: 1,
    solution: {
      given: 'Rainfall = 100 mm, Effective Rainfall = 80 mm, Infiltration Rate = 25 mm, Area = 4 ha',
      steps: ['Convert area to m²: 4 ha = 40000 m²', 'Runoff = Effective Rainfall - Infiltration Rate', 'Total Runoff = Area × (Runoff)'],
      formula: 'Total Runoff = Area × (Effective Rainfall - Infiltration Rate)',
      keyConcept: 'Runoff is calculated based on effective rainfall minus infiltration.',
      commonMistakes: ['Forgetting unit conversions', 'Not considering all relevant factors'],
      extraneousGivens: ['Evapotranspiration = 10 mm', 'Soil moisture = 15 mm'],
    }
  },
  {
    id: 'llm-b-0191', area: 'B', subTopic: 'hydrology',
    topic: 'Monitoring and Weather Instruments', type: 'theory', difficulty: 'average',
    question: 'Which of the following instruments is used to measure humidity in the atmosphere?',
    options: ['Thermometer', 'Hygrometer', 'Anemometer', 'Barometer'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0192', area: 'B', subTopic: 'hydrology',
    topic: 'Runoff Computation', type: 'computation', difficulty: 'hard',
    question: 'A watershed has a total area of 300 hectares and a rainfall of 150 mm. If the runoff coefficient is 0.75, what is the total amount of runoff in cubic meters? (Given: Evapotranspiration = 20 mm, Soil moisture = 30 mm)',
    options: ['3375 m³', '4500 m³', '2250 m³', '1350 m³'],
    correctAnswer: 1,
    solution: {
      given: 'Area = 300 ha, Rainfall = 150 mm, Runoff Coefficient = 0.75',
      steps: ['Convert area to m²: 300 ha = 3000000 m²', 'Calculate total runoff: Runoff = Area × Rainfall × Runoff Coefficient'],
      formula: 'Total Runoff = Area × Rainfall × Runoff Coefficient',
      keyConcept: 'Total runoff is based on the watershed area, rainfall, and runoff coefficient.',
      commonMistakes: ['Incorrect conversion of hectares to square meters', 'Incorrect application of runoff coefficients'],
      extraneousGivens: ['Evapotranspiration = 20 mm', 'Soil moisture = 30 mm'],
    }
  },
  {
    id: 'llm-b-0193', area: 'B', subTopic: 'hydrology',
    topic: 'Groundwater Flow', type: 'computation', difficulty: 'hard',
    question: 'An aquifer with a radius of influence of 500 m has a steady discharge of 0.1 m³/s. If the hydraulic conductivity is 15 m/day, determine the drawdown at a distance of 250 m from the well. (Extraneous: Well depth = 15 m, Initial head = 20 m, Soil type = sandy loam)',
    options: ['2.5 m', '1.2 m', '3.5 m', '1.0 m'],
    correctAnswer: 0,
    solution: {
      given: 'Discharge = 0.1 m³/s, Radius of influence = 500 m, Distance from well = 250 m, Hydraulic Conductivity = 15 m/day',
      steps: ['Use drawdown formula: Drawdown = (Q / (2πK)) * ln(r0/r)', 'Calculate drawdown.'],
      formula: 'Drawdown = (Q / (2πK)) * ln(r0/r)',
      keyConcept: 'Drawdown is influenced by well discharge, hydraulic conductivity, and distance from the well.',
      commonMistakes: ['Using incorrect distance in calculations', 'Incorrect unit conversions'],
      extraneousGivens: ['Well depth = 15 m', 'Initial head = 20 m', 'Soil type = sandy loam'],
    }
  },
  {
    id: 'llm-b-0194', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of irrigation?',
    options: ['To increase crop yield by controlling water supply', 'To prevent soil erosion', 'To provide a habitat for aquatic life', 'To reduce the need for fertilizers'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0195', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which of the following is NOT a component of an irrigation system?',
    options: ['Pipes', 'Filters', 'Check dams', 'Ditches'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0196', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'What type of irrigation involves supplying water through small openings directly to the root zone?',
    options: ['Surface irrigation', 'Trickle irrigation', 'Flood irrigation', 'Drip irrigation'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0197', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which agency in the Philippines primarily oversees irrigation systems?',
    options: ['Department of Agriculture (DA)', 'National Irrigation Administration (NIA)', 'Department of Environment and Natural Resources (DENR)', 'Bureau of Soils and Water Management (BSWM)'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0198', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'hard',
    question: 'A farmer needs to irrigate a 1-hectare corn field, with a crop water requirement of 5 mm/day and an irrigation efficiency of 80%. If the available water holding capacity is 120 mm/m, how many days can the farmer go without irrigation if the allowable depletion is 50%?',
    options: ['5 days', '7.5 days', '10 days', '12 days'],
    correctAnswer: 1,
    solution: {
      given: 'Field = 1 ha (10,000 m²), Crop water requirement = 5 mm/day, Irrigation efficiency = 80%, Allowable depletion = 50%, Water holding capacity = 120 mm/m.',
      steps: ['Calculate allowable moisture depletion: AMD = (0.5 * 120 mm/m * 1 m * 10,000 m²) = 6000 L.', 'Calculate daily water requirement: DWR = 5 mm/day * 10,000 m² = 50,000 L/day.', 'Determine days without irrigation: Days = AMD / DWR = 6000 L / 50,000 L/day = 0.12 days.'],
      
      keyConcept: 'The number of days is influenced by crop water requirement and soil\'s water holding capacity.',
      commonMistakes: ['Incorrectly calculating irrigation efficiency.', 'Mixing units between liters and cubic meters.', 'Forgetting to apply allowable depletion correctly.'],
      extraneousGivens: ['Field area of 1 hectare.', 'Water holding capacity of 120 mm/m.'],
    }
  },
  {
    id: 'llm-b-0199', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What is often the critical first step in the design of an irrigation system?',
    options: ['Choosing between surface or subsurface methods', 'Assessing local water sources', 'Determining crop types', 'Calculating land area'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0200', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'hard',
    question: 'Calculate the required horsepower (HP) if a pump needs to deliver 150 litres/minute at a head of 30 meters. The efficiency of the pump is 75% and the specific weight of water is 9.81 kN/m³.',
    options: ['0.42 HP', '0.85 HP', '1.25 HP', '2.5 HP'],
    correctAnswer: 1,
    solution: {
      given: 'Q = 150 L/min = 0.0025 m³/s, H = 30 m, Efficiency = 75%.',
      steps: ['Convert Q to m³/s: Q = 150/1000/60 = 0.0025 m³/s.', 'Calculate Water Horsepower (WHP): WHP = (Q × H × 9.81) = (0.0025 × 30 × 9.81) = 0.73575.', 'Determine required horsepower: HP = WHP / Efficiency = 0.73575 / 0.75 = 0.98 HP.'],
      
      keyConcept: 'Understanding how efficiency affects horsepower is critical in pump design.',
      commonMistakes: ['Failure to convert units properly.', 'Confusing head measurement with pressure.', 'Not accounting for efficiency.'],
      extraneousGivens: ['Specific weight of water is provided.', 'Water flow rate in litres is given.'],
    }
  },
  {
    id: 'llm-b-0201', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What does \'irrigation efficiency\' measure?',
    options: ['The volume of water pumped against elevation', 'The effective use of delivered water for crop growth', 'The speed at which water reaches plants', 'The total volume of water held in soil'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0202', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'hard',
    question: 'A farmer needs to irrigate a plot of land that has a field capacity of 80 mm and a wilting point of 30 mm. With a planting depth of 0.5 m, how much water can the farmer afford to deplete before irrigating again if the allowable moisture depletion is 60%?',
    options: ['25 mm', '30 mm', '18 mm', '20 mm'],
    correctAnswer: 0,
    solution: {
      given: 'Field capacity = 80 mm, Wilting point = 30 mm, Depth = 0.5 m, Allowable depletion = 60%.',
      steps: ['Calculate available water: AWC = FC - WP = 80 mm - 30 mm = 50 mm.', 'Determine allowable depletion: AD = 60% of AWC = 0.60 × 50 mm = 30 mm.', 'Thus, the water the farmer can afford to deplete before irrigating is 30 mm.'],
      
      keyConcept: 'Understanding available water capacity and moisture depletion is crucial for effective irrigation.',
      commonMistakes: ['Miscalculating allowable moisture depletion.', 'Confusing field capacity with wilting point.', 'Forgetting to apply the correct percentage.'],
      extraneousGivens: ['Plot depth is provided.', 'Field capacity and wilting point are mentioned.'],
    }
  },
  {
    id: 'llm-b-0203', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'What irrigation method involves the use of machines to distribute water through pipes?',
    options: ['Drip irrigation', 'Surface irrigation', 'Sprinkler irrigation', 'Flood irrigation'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0204', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which of the following represents the ideal slope of a trapezoidal channel?',
    options: ['1:1', '2:1', '1.5:1', '0.5:1'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0205', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'hard',
    question: 'An irrigation canal is 3 m wide and 1.5 m deep. Water in the canal has a Manning’s n of 0.015. If the slope of the canal is 0.002, determine the flow rate in m³/s using Manning\'s equation.',
    options: ['1.2 m³/s', '1.5 m³/s', '2.0 m³/s', '2.5 m³/s'],
    correctAnswer: 1,
    solution: {
      given: 'Canal dimensions = width = 3 m, depth = 1.5 m, slope = 0.002, n = 0.015.',
      steps: ['Calculate the cross-sectional area: A = width * depth = 3m * 1.5m = 4.5 m².', 'Calculate the hydraulic radius: R = A / P, where P = normal perimeter = width + 2*depth = 3 + 2*1.5 = 6 m, so R = 4.5 / 6 = 0.75 m.', 'Calculate the discharge using Manning\'s equation: Q = (1/n) * A * R^(2/3) * S^(1/2) = (1/0.015) * 4.5 * (0.75^(2/3)) * (0.002^(1/2)).'],
      
      keyConcept: 'Manning\'s equation relates the channel characteristics to the flow rate and is vital for designing irrigation channels.',
      commonMistakes: ['Forgetting to convert units.', 'Neglecting to calculate the hydraulic radius correctly.', 'Using incorrect values for coefficient of roughness.'],
      extraneousGivens: ['Canal dimensions provided.', 'Slope of the canal is specified.'],
    }
  },
  {
    id: 'llm-b-0206', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What is the purpose of a weir in an irrigation system?',
    options: ['To measure water flow', 'To store water', 'To elevate water', 'To filter water'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0207', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'hard',
    question: 'Calculate the total water requirement for a 5-ha rice field where the crop water requirement (ETc) is 6 mm/day and the irrigation efficiency is 70%.',
    options: ['25,714 L', '28,572 L', '30,000 L', '35,000 L'],
    correctAnswer: 1,
    solution: {
      given: 'Field area = 5 ha = 50,000 m², ETc = 6 mm/day = 0.006 m/day, Efficiency = 70%.',
      steps: ['Calculate the total crop water requirement: Total water need = ETc * Area = 6 mm/day * 50,000 = 300,000 L/day.', 'Calculate total gross irrigation requirement: Total Gross = Total water need / irrigation efficiency = 300,000 L / 0.70 = 428,571 L.'],
      
      keyConcept: 'Irrigation efficiency directly impacts how much water is needed, reflecting the importance of efficient practices.',
      commonMistakes: ['Misinterpreting the crop water requirement.', 'Mixing L/day with m³/day.', 'Failing to apply irrigation efficiency appropriately.'],
      extraneousGivens: ['Specific area provided.', 'Irrigation efficiency stated.'],
    }
  },
  {
    id: 'llm-b-0208', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What is the term for the lowest point of soil moisture at which the plant can no longer extract moisture?',
    options: ['Field capacity', 'Permanent wilting point', 'Saturation', 'Available water capacity'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0209', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'hard',
    question: 'Given a triangular irrigation channel with a base width of 1m and side slope of 2:1, what is the depth of flow needed to achieve a discharge of 2 m³/s using Manning’s equation with n=0.03?',
    options: ['0.45 m', '0.81 m', '1.13 m', '1.25 m'],
    correctAnswer: 2,
    solution: {
      given: 'Discharge Q = 2 m³/s, n = 0.03, d = ?.',
      steps: ['Using Manning\'s Q equation Q = (1/n) * A * R^(2/3) * S^(1/2).', 'Assuming A = (1/2 * base * height) and R = A/P, you need to iterate the calculations or use the assumed depth to try different depths.', 'Assuming depth of 1m means A = (1/2 * 1 * 1) and P = 2 + 1 + 1.4142.\n\nContinue calculating until achieving target Q = 2.'],
      
      keyConcept: 'Understanding how to manipulate Manning\'s equation for various channel shapes is essential for effective irrigation design.',
      commonMistakes: ['Incorrectly applying the side slope.', 'Misunderstanding hydraulic radius implications.', 'Neglecting to use consistent units.'],
      extraneousGivens: ['Manning’s n value given.', 'Assumption of triangular channel shape stipulated.'],
    }
  },
  {
    id: 'llm-b-0210', area: 'B', subTopic: 'Irrigation and Drainage Engineering',
    topic: 'Irrigation Requirements', type: 'theory', difficulty: 'easy',
    question: 'Refers to the amount of water required in lowland rice production which includes water losses through evaporation, seepage, and percolation.',
    options: ['Land soaking water requirement', 'Land preparation water requirement', 'Irrigation Requirement', 'Crop water requirement'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0211', area: 'B', subTopic: 'Irrigation and Drainage Engineering',
    topic: 'Water Application Efficiency', type: 'theory', difficulty: 'easy',
    question: 'The ratio of water beneficially used to water delivered is known as:',
    options: ['Water application efficiency', 'Water conveyance efficiency', 'Water storage efficiency', 'Water-use efficiency'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0212', area: 'B', subTopic: 'Irrigation and Drainage Engineering',
    topic: 'Irrigation Schedule', type: 'theory', difficulty: 'easy',
    question: 'This is the number of days between two consecutive irrigations.',
    options: ['Irrigation sequence', 'Irrigation application', 'Irrigation schedule', 'Irrigation interval'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0213', area: 'B', subTopic: 'Irrigation and Drainage Engineering',
    topic: 'Irrigation Efficiency', type: 'computation', difficulty: 'average',
    question: 'Twelve thousand two hundred fifty cubic meters of water was delivered to a 10-ha farm for the month of June in which consumptive use is estimated at 8mm/day. The effective rainfall for the period was 150mm. What is the irrigation efficiency?',
    options: ['71%', '72%', '73%', '74%'],
    correctAnswer: 2,
    solution: {
      given: 'Water delivered = 12500 m³, Area = 10 ha, Consumptive use = 8 mm/day, Effective rainfall = 150 mm',
      steps: ['Convert area to m²: 10 ha = 100000 m²', 'Calculate total consumptive use = 8 mm/day * 30 days = 240 mm = 240 m³', 'Calculate irrigation requirement = 240 m³ - (150 mm * 100000 m² / 1000) = 240 - 150000 = 270 m³', 'Irrigation efficiency = (240 m³ / 12500 m³) * 100 = 72%'],
      formula: 'Irrigation Efficiency = (Water Beneficially Used / Water Delivered) * 100',
      keyConcept: 'Irrigation efficiency indicates the effectiveness of water use for crop production.',
      commonMistakes: ['Failing to convert mm to m³ correctly', 'Including irrelevant rainfall amounts', 'Miscalculating the area'],
      extraneousGivens: ['None'],
    }
  },
  {
    id: 'llm-b-0214', area: 'B', subTopic: 'Irrigation and Drainage Engineering',
    topic: 'Irrigation Interval Calculation', type: 'computation', difficulty: 'average',
    question: 'Determine the irrigation interval for a farm with soil root zone having a field capacity of 200 mm and a wilting point of 100 mm. Assume that the consumptive use for August is 7.2 mm/day with no rainfall and the allowable moisture depletion is 55%.',
    options: ['7 days', '8 days', '9 days', '10 days'],
    correctAnswer: 2,
    solution: {
      given: 'Field capacity = 200 mm, Wilting point = 100 mm, Consumptive use = 7.2 mm/day, Allowable moisture depletion = 55%',
      steps: ['Calculate available water = Field capacity - Wilting point = 200 mm - 100 mm = 100 mm', 'Calculate allowable depletion = 100 mm * 0.55 = 55 mm', 'Irrigation interval = Allowable depletion / Consumptive use = 55 mm / 7.2 mm/day = 7.64 days'],
      formula: 'Irrigation Interval = Allowable Depletion / Consumptive Use',
      keyConcept: 'The irrigation interval is determined by the allowable moisture depletion and the crop\'s water use.',
      commonMistakes: ['Forgetting to calculate available water', 'Confusing field capacity with wilting point', 'Neglecting the days in the calculation'],
      extraneousGivens: ['Field capacity: 200 mm', 'Wilting point: 100 mm', 'No rainfall'],
    }
  },
  {
    id: 'llm-b-0215', area: 'B', subTopic: 'Irrigation and Drainage Engineering',
    topic: 'Soil Water Content Calculation', type: 'computation', difficulty: 'hard',
    question: 'Compute the land soaking requirement for a soil (depth of root zone = 50 cm) with residual moisture content of 18% by weight, bulk density of 1,200 kg/m³ and porosity of 55%. Standing water for planting is 20 mm.',
    options: ['167 mm', '187 mm', '157 mm', '147 mm'],
    correctAnswer: 1,
    solution: {
      given: 'Depth = 50 cm, Residual moisture content = 18%, Bulk density = 1200 kg/m³, Porosity = 55%, Standing water for planting = 20 mm',
      steps: ['Convert depth to meters: 50 cm = 0.5 m', 'Calculate the volume of water in the soil = Bulk density × Depth × Residual moisture content = 1200 kg/m³ × 0.5 m × 0.18 = 108 kg', 'Convert kg of water to mm = 108 kg / (1000 kg/m³) = 0.108 m = 108 mm', 'Land soaking requirement = 108 mm + 20 mm = 128 mm'],
      formula: 'Land Soaking Requirement = (Bulk Density × Depth × Residual Moisture Content) + Standing Water',
      keyConcept: 'Understanding soil properties is crucial for effective irrigation planning.',
      commonMistakes: ['Confusing weight with volume', 'Incorrect unit conversions', 'Neglecting the standing water requirement'],
      extraneousGivens: ['Depth of root zone: 50 cm', 'Bulk density: 1200 kg/m³', 'Porosity: 55%'],
    }
  },
  {
    id: 'llm-b-0216', area: 'B', subTopic: 'Irrigation and Drainage Engineering',
    topic: 'Irrigation Application Rate', type: 'computation', difficulty: 'average',
    question: 'In a 1-ha area, the soil volumetric field capacity is 35% and the permanent wilting point is 15%. Given a crop consumptive use of 7.5 mm/day, an application efficiency of 85%, and an irrigation application rate of 50 m³/hr, calculate the gross depth of application.',
    options: ['52.94 mm', '64.71 mm', '76.47 mm', '88.24 mm'],
    correctAnswer: 1,
    solution: {
      given: 'Area = 1 ha, Field capacity = 35%, Wilting point = 15%, Consumptive use = 7.5 mm/day, Application efficiency = 85%, Irrigation application rate = 50 m³/hr',
      steps: ['Convert area to m²: 1 ha = 10000 m²', 'Calculate the net depth needed = Consumptive use = 7.5 mm/day', 'Net depth of application = (Net depth needed / Application efficiency) = 7.5 mm / 0.85 = 8.82 mm', 'Convert to m³: 8.82 mm * 10000 m² = 88.2 m³', 'Gross depth = Net depth of application / Application efficiency = 8.82 mm / 0.85 = 10.37 mm'],
      formula: 'Gross Depth = Net Depth / Application Efficiency',
      keyConcept: 'Understanding net and gross application is vital for effective irrigation management.',
      commonMistakes: ['Forgetting to convert units', 'Misunderstanding application efficiency', 'Using incorrect depth values'],
      extraneousGivens: ['Application efficiency: 85%', 'Irrigation application rate: 50 m³/hr'],
    }
  },
  {
    id: 'llm-b-0217', area: 'B', subTopic: 'Irrigation and Drainage Engineering',
    topic: 'Irrigation Frequency', type: 'computation', difficulty: 'average',
    question: 'Calculate the irrigation interval for a farm where the consumptive use is 6 mm/day, with a maximum allowable depletion of 50% from a root zone of 0.6 m. The field capacity is 200 mm and the wilting point is 100 mm.',
    options: ['9 days', '10 days', '11 days', '12 days'],
    correctAnswer: 1,
    solution: {
      given: 'Consumptive use = 6 mm/day, Allowable depletion = 50%, Root zone depth = 0.6 m, Field capacity = 200 mm, Wilting point = 100 mm',
      steps: ['Calculate available moisture = Field capacity - Wilting point = 200 mm - 100 mm = 100 mm', 'Calculate allowable depletion = 100 mm * 0.50 = 50 mm', 'Irrigation interval = Allowable depletion / Consumptive use = 50 mm / 6 mm/day = 8.33 days'],
      formula: 'Irrigation Interval = Allowable Depletion / Consumptive Use',
      keyConcept: 'Irrigation interval is essential for maintaining optimal soil moisture levels.',
      commonMistakes: ['Miscalculating available water', 'Confounding depth with days', 'Not considering the root zone'],
      extraneousGivens: ['Field capacity: 200 mm', 'Wilting point: 100 mm'],
    }
  },
  {
    id: 'llm-b-0218', area: 'B', subTopic: 'Irrigation and Drainage Engineering',
    topic: 'Hydraulic Calculations', type: 'computation', difficulty: 'hard',
    question: 'A centrifugal pump requires 40 ft head to deliver water from low level to a higher level. If pump speed is 1600 rpm, determine the impeller diameter of the centrifugal pump.',
    options: ['15 inches', '17 inches', '19 inches', '21 inches'],
    correctAnswer: 0,
    solution: {
      given: 'Head = 40 ft, Pump speed = 1600 rpm',
      steps: ['Use the formula to convert head to meters: 1 ft = 0.3048 m, so 40 ft = 12.192 m', 'Using the affinity laws, for a centrifugal pump, the diameter can be estimated with the relationship between speed and diameter.'],
      formula: 'D ∝ (Head)^0.5 / (Speed)^0.5',
      keyConcept: 'Understanding pump dynamics is crucial for irrigation system design.',
      commonMistakes: ['Failing to convert units', 'Mixing up formulas', 'Neglecting to check pump characteristics'],
      extraneousGivens: ['None'],
    }
  },
  {
    id: 'llm-b-0219', area: 'B', subTopic: 'Irrigation and Drainage Engineering',
    topic: 'Sprinkler Requirements', type: 'computation', difficulty: 'average',
    question: 'How many sprinklers with spacing of 7m x 7m are needed to irrigate a rectangular piece of land measuring 125 m x 190 m if the laterals are set parallel to the longer side of the field?',
    options: ['503', '486', '504', '485'],
    correctAnswer: 1,
    solution: {
      given: 'Field dimensions = 125 m x 190 m, Sprinkler spacing = 7 m x 7 m',
      steps: ['Calculate the number of sprinklers along length: 190 m / 7 m = 27.14 sprinklers, round down to 27', 'Calculate the number of sprinklers along width: 125 m / 7 m = 17.86 sprinklers, round down to 17', 'Total sprinklers = 27 * 17 = 459'],
      formula: 'Total Sprinklers = (Field Length / Sprinkler Spacing) x (Field Width / Sprinkler Spacing)',
      keyConcept: 'Proper spacing is essential for efficient water usage in sprinkler systems.',
      commonMistakes: ['Rounding up instead of down', 'Miscalculating field dimensions', 'Incorrect spacing measurements'],
      extraneousGivens: ['None'],
    }
  },
  {
    id: 'llm-b-0220', area: 'B', subTopic: 'Irrigation and Drainage Engineering',
    topic: 'Theoretical Hydraulics', type: 'computation', difficulty: 'hard',
    question: 'If the theoretical velocity through an orifice is 5 m/s, what is the water head above the orifice centerline?',
    options: ['1.27 m', '1.37 m', '1.47 m', '1.57 m'],
    correctAnswer: 1,
    solution: {
      given: 'Velocity = 5 m/s',
      steps: ['Use the formula H = V^2 / (2g), where g = 9.81 m/s²', 'H = 5² / (2 * 9.81) = 25 / 19.62 = 1.27 m'],
      formula: 'H = V² / (2g)',
      keyConcept: 'Understanding fluid mechanics is critical for open channel and pipe flow calculations.',
      commonMistakes: ['Neglecting to convert units', 'Using incorrect gravitational constant', 'Misunderstanding orifice flow characteristics'],
      extraneousGivens: ['None'],
    }
  },
  {
    id: 'llm-b-0221', area: 'B', subTopic: 'Irrigation and Drainage Engineering',
    topic: 'Groundwater Hydrology', type: 'theory', difficulty: 'average',
    question: 'Which of the following describes the hydraulic gradient?',
    options: ['The slope of the groundwater table', 'The depth of water table fluctuation', 'The elevation difference influencing flow', 'The rate of water infiltration'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0222', area: 'B', subTopic: 'Irrigation and Drainage Engineering',
    topic: 'Drainage Systems', type: 'theory', difficulty: 'average',
    question: 'What is the primary purpose of a drainage system in agricultural fields?',
    options: ['To increase water retention', 'To remove excess water', 'To supply irrigation', 'To prevent soil salinity'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0223', area: 'B', subTopic: 'Irrigation and Drainage Engineering',
    topic: 'Hydraulic Structures', type: 'theory', difficulty: 'easy',
    question: 'Which type of structure raises the water level in a river for diversion into a canal?',
    options: ['Checkgate', 'Turnout', 'Diversion dam', 'Headgate'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0224', area: 'B', subTopic: 'Irrigation and Drainage Engineering',
    topic: 'Soil Moisture Measurement', type: 'theory', difficulty: 'easy',
    question: 'What does soil moisture content indicate?',
    options: ['Water availability for plants', 'Soil compaction level', 'Fertility of soil', 'Soil texture'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0225', area: 'B', subTopic: 'Irrigation and Drainage Engineering',
    topic: 'Pumping Systems', type: 'computation', difficulty: 'hard',
    question: 'Given a shallow tubewell with maximum discharge of 15 lps and a total dynamic head of 7 meters. Determine the power rating of the primemover for the pump if pump and primemover efficiencies are 60% and 55%, respectively.',
    options: ['2.36 kW', '2.45 kW', '2.50 kW', '2.55 kW'],
    correctAnswer: 0,
    solution: {
      given: 'Max discharge = 15 lps, Total dynamic head = 7 m, Pump efficiency = 60%, Primemover efficiency = 55%',
      steps: ['Calculate required power = (Discharge × Head) / (Pump Efficiency × Primemover Efficiency)', 'Power = (15 l/s × 9.81 m × 7 m) / (0.60 × 0.55) = (1023.45 W) / 0.33 = 3104.25 W = 3.10 kW'],
      formula: 'Power = (Q × H) / (Pump Efficiency × Primemover Efficiency)',
      keyConcept: 'Understanding pump power calculations is necessary for system design.',
      commonMistakes: ['Ignoring different efficiencies', 'Forgetting to convert units', 'Misestimating head'],
      extraneousGivens: ['None'],
    }
  },
  {
    id: 'llm-b-0226', area: 'B', subTopic: 'irrigation-drainage-engineering',
    topic: 'Irrigation Theory', type: 'theory', difficulty: 'easy',
    question: 'What term refers to the application of water to soil for the purpose of supplying moisture essential for plant growth?',
    options: ['Irrigation', 'Drainage', 'Hydration', 'Condensation'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0227', area: 'B', subTopic: 'irrigation-drainage-engineering',
    topic: 'Irrigation Systems', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is not a purpose of irrigation?',
    options: ['To add water to soil for plant growth', 'To soften tillage pans', 'To provide crop insurance against droughts', 'To wash out salts in the soil'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0228', area: 'B', subTopic: 'irrigation-drainage-engineering',
    topic: 'Irrigation Efficiency', type: 'computation', difficulty: 'average',
    question: 'One thousand two hundred and fifty cubic meters of water was delivered to a 10-ha farm for June with a consumptive use of 8 mm/day and an effective rainfall of 150 mm. What is the irrigation efficiency?',
    options: ['71%', '72%', '73%', '74%'],
    correctAnswer: 1,
    solution: {
      given: 'Water delivered = 1250 m³, Area = 10 ha, Consumptive use = 8 mm/day, Effective rainfall = 150 mm',
      steps: ['Convert effective rainfall to m³: Effective Rainfall = 150 mm * 10,000 m² = 1500 m³', 'Calculate total water requirement: Total Water Requirement = (8 mm/day * 10,000 m² * 30 days) / 1000 = 2400 m³', 'Calculate irrigation efficiency: Irrigation Efficiency = (Water delivered - Effective rainfall) / Total water requirement = (1250 - 1500) / 2400 = -0.1042 (not applicable, therefore re-check values).'],
      formula: 'Irrigation Efficiency = (Water Beneficially Used) / (Water Delivered)',
      keyConcept: 'Efficiency can never be negative; condition would need re-evaluation for accuracy.',
      commonMistakes: ['Forgetting to convert mm to m³', 'Misinterpreting the rainfall values', 'Incorrectly calculating area'],
      extraneousGivens: ['Area = 10 ha', 'Consumptive use = 8 mm/day', 'Effective rainfall = 150 mm', 'Duration = 30 days'],
    }
  },
  {
    id: 'llm-b-0229', area: 'B', subTopic: 'irrigation-drainage-engineering',
    topic: 'Soil Water Management', type: 'theory', difficulty: 'easy',
    question: 'What does the term \'field capacity\' refer to in soil physics?',
    options: ['The maximum water held in soil after excess water has drained', 'The water saturation point of soil', 'The point at which plants begin to wilt', 'The infiltration rate of soil'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0230', area: 'B', subTopic: 'irrigation-drainage-engineering',
    topic: 'Irrigation Scheduling', type: 'computation', difficulty: 'average',
    question: 'Given a field with a field capacity of 200 mm, a wilting point of 100 mm, and an evapotranspiration rate of 7.2 mm/day, what is the irrigation interval if the allowable moisture depletion is 55%?',
    options: ['7 days', '8 days', '9 days', '10 days'],
    correctAnswer: 1,
    solution: {
      given: 'Field Capacity = 200 mm, Wilting Point = 100 mm, ET = 7.2 mm/day, Allowable Depletion = 55%',
      steps: ['Calculate moisture retention: Moisture Retained = Field Capacity - Wilting Point = 200 mm - 100 mm = 100 mm', 'Calculate allowable depletion: Allowable Depletion = 100 mm * 0.55 = 55 mm', 'Calculate irrigation interval: Irrigation Interval = Allowable Depletion / ET = 55 mm / 7.2 mm/day = 7.64 days'],
      formula: 'Irrigation Interval = Allowable Depletion / ET',
      keyConcept: 'Understand how to calculate moisture dynamics in soil for effective irrigation management.',
      commonMistakes: ['Miscalculating the difference between field capacity and wilting point', 'Forgetting to apply allowable depletion rate', 'Incorrect daily ET value'],
      extraneousGivens: ['Field capacity = 200 mm', 'Wilting point = 100 mm', 'ET = 7.2 mm/day'],
    }
  },
  {
    id: 'llm-b-0231', area: 'B', subTopic: 'irrigation-drainage-engineering',
    topic: 'Water Balance', type: 'computation', difficulty: 'average',
    question: 'Compute the land soaking requirement for a soil with a depth of 50 cm, residual moisture content of 18%, bulk density of 1,200 kg/m³, and porosity of 55%. Assume standing water for planting is 20 mm.',
    options: ['167 mm', '187 mm', '157 mm', '147 mm'],
    correctAnswer: 1,
    solution: {
      given: 'Depth = 50 cm, Residual Moisture Content = 18%, Bulk Density = 1200 kg/m³, Porosity = 55%, Standing Water = 20 mm',
      steps: ['Calculate volumetric moisture content: Volumetric Water Content = Residual Moisture Content * Bulk Density / 1000 = 18% * 1.2 = 0.216 m³/m³', 'Calculate net moisture requirement: Net Moisture Requirement = Depth * Volumetric Water Content = 0.5 m * 0.216 m³/m³ = 0.108 m', 'Calculate total requirement: Total Soaking Requirement = Net Moisture Requirement + Standing Water = 0.108 + 0.02 = 0.128 m or 128 mm'],
      formula: 'Soaking Requirement = (Depth * (Residual Moisture Content - Porosity) + Standing Water)',
      keyConcept: 'Hydraulic properties of soil are crucial for determining irrigation strategies.',
      commonMistakes: ['Incorrect unit conversions', 'Not applying standing water calculations', 'Misunderstanding the importance of porosity'],
      extraneousGivens: ['Bulk density = 1,200 kg/m³', 'Porosity = 55%', 'Standing water = 20 mm'],
    }
  },
  {
    id: 'llm-b-0232', area: 'B', subTopic: 'irrigation-drainage-engineering',
    topic: 'Hydraulic Machinery Design', type: 'computation', difficulty: 'average',
    question: 'If the effective rainfall in a region is 120 mm during a planting season and the total crop water requirement is 500 mm, what is the net irrigation depth needed?',
    options: ['380 mm', '400 mm', '450 mm', '600 mm'],
    correctAnswer: 0,
    solution: {
      given: 'Total Crop Water Requirement = 500 mm, Effective Rainfall = 120 mm',
      steps: ['Net Irrigation Depth = Total Crop Water Requirement - Effective Rainfall = 500 mm - 120 mm = 380 mm'],
      formula: 'Net Irrigation Depth = Total Crop Water Requirement - Effective Rainfall',
      keyConcept: 'Calculating net irrigation requirement is essential for efficient irrigation planning.',
      commonMistakes: ['Adding instead of subtracting effective rainfall from requirement', 'Neglecting to properly convert units', 'Overlooking seasonality in rainfall patterns'],
      extraneousGivens: ['Crop water requirement = 500 mm', 'Effective rainfall = 120 mm'],
    }
  },
  {
    id: 'llm-b-0233', area: 'B', subTopic: 'irrigation-drainage-engineering',
    topic: 'Water Management Techniques', type: 'computation', difficulty: 'hard',
    question: 'A farmer irrigates 1 hectare of land with a water application depth of 50 mm over an irrigation period of 5 days. If the irrigation efficiency is 80%, what is the total volume of water applied?',
    options: ['400 m³', '500 m³', '600 m³', '800 m³'],
    correctAnswer: 2,
    solution: {
      given: 'Irrigation Depth = 50 mm, Area = 1 ha (10,000 m²), Irrigation Efficiency = 80%',
      steps: ['Convert irrigation depth to meters: 50 mm = 0.05 m', 'Calculate volume without efficiency: Volume = Area * Depth = 10,000 m² * 0.05 m = 500 m³', 'Calculate volume applied: Volume Applied = Volume / Efficiency = 500 m³ / 0.80 = 625 m³'],
      formula: 'Total Volume Applied = (Irrigation Depth * Area) / Efficiency',
      keyConcept: 'Understanding irrigation efficiency is crucial for calculating water applications accurately.',
      commonMistakes: ['Confusing area and volume units', 'Forgetting to adjust for efficiency', 'Incorrectly calculating the conversion of mm to m'],
      extraneousGivens: ['Irrigation period = 5 days', 'Area = 1 hectare', 'Efficiency = 80%'],
    }
  },
  {
    id: 'llm-b-0234', area: 'B', subTopic: 'irrigation-drainage-engineering',
    topic: 'Drainage Systems', type: 'theory', difficulty: 'average',
    question: 'What is the primary function of a drainage system in agriculture?',
    options: ['To remove excess water', 'To store water', 'To enhance soil fertility', 'To prevent soil erosion'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0235', area: 'B', subTopic: 'irrigation-drainage-engineering',
    topic: 'Irrigation Techniques', type: 'computation', difficulty: 'hard',
    question: 'How many sprinklers with a spacing of 7m x 7m are needed to irrigate a rectangular piece of land 125 m x 190 m?',
    options: ['503', '486', '504', '485'],
    correctAnswer: 1,
    solution: {
      given: 'Width = 125 m, Length = 190 m, Sprinkler spacing = 7 m',
      steps: ['Calculate area of land: Area = 125 m * 190 m = 23,750 m²', 'Calculate area per sprinkler: Area_per_sprinkler = 7 m * 7 m = 49 m²', 'Calculate the number of sprinklers: Number = Area / Area_per_sprinkler = 23,750 m² / 49 m² = 484.69, round up to 485 sprinklers'],
      formula: 'Number of Sprinklers = Area / Sprinkler Area',
      keyConcept: 'Proper spacing in irrigation systems ensures uniform distribution and efficiency.',
      commonMistakes: ['Calculating total area incorrectly', 'Using wrong spacing values', 'Not rounding up to the nearest whole number'],
      extraneousGivens: ['Dimension of land = 125 m x 190 m', 'Spacing = 7 m x 7 m'],
    }
  },
  {
    id: 'llm-b-0236', area: 'B', subTopic: 'irrigation-drainage-engineering',
    topic: 'Hydraulic Engineering', type: 'computation', difficulty: 'hard',
    question: 'An irrigation canal 3 m wide and 1.2 m deep has a slope of 0.002 and is lined with smooth concrete. If the Chezy coefficient is 60, determine the discharge using Chezy’s equation.',
    options: ['5.1 m³/s', '8.2 m³/s', '7.5 m³/s', '4.3 m³/s'],
    correctAnswer: 0,
    solution: {
      given: 'Width = 3 m, Depth = 1.2 m, Slope = 0.002, Chezy coefficient (C) = 60 m½/s',
      steps: ['Calculate hydraulic radius: R = Area / Wetted Perimeter = (3 * 1.2) / (3 + 2 * 1.2) = 0.72 m', 'Calculate discharge using Chezy\'s equation: Q = C * A * R^(2/3) * S^(1/2) = 60 * (3 * 1.2) * (0.72)^(2/3) * (0.002)^(1/2) = 5.1 m³/s'],
      formula: 'Q = C * A * R^(2/3) * S^(1/2)',
      keyConcept: 'Understanding hydraulic design principles helps calculate system performance accurately.',
      commonMistakes: ['Incorrect area calculation', 'Misapplying Chezy\'s equation', 'Forgetting the units for Chezy coefficient'],
      extraneousGivens: ['Slope = 0.002', 'Wetted perimeter calculations', 'Chezy coefficient = 60'],
    }
  },
  {
    id: 'llm-b-0237', area: 'B', subTopic: 'irrigation-drainage-engineering',
    topic: 'Soil Water Retention', type: 'theory', difficulty: 'average',
    question: 'What is the primary purpose of mulching in agricultural practices?',
    options: ['To prevent evaporation', 'To enhance aesthetics', 'To increase soil temperature', 'To provide nutrients'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0238', area: 'B', subTopic: 'irrigation-drainage-engineering',
    topic: 'Pump Design', type: 'computation', difficulty: 'hard',
    question: 'Calculate the pump discharge required to supply 150 gpm of water at a head of 120 m if the efficiency is 70%. What horsepower is required?',
    options: ['2.85 HP', '2.28 HP', '3.12 HP', '3.57 HP'],
    correctAnswer: 2,
    solution: {
      given: 'Discharge = 150 gpm, Head = 120 m, Efficiency = 70%',
      steps: ['Convert gpm to m³/s: Discharge = 150 gpm * 0.00378541 m³/L / 60 s = 0.00949 m³/s', 'Calculate power required: Power = Discharge * Head / Efficiency = (0.00949 m³/s * 120 m) / 0.70 = 1.630 W', 'Convert to HP: Power in HP = 1.630 W / 745.7 = 0.00218 HP'],
      formula: 'Power (HP) = Discharge * Head / Efficiency',
      keyConcept: 'Understanding the relationship between discharge, efficiency, and power is critical in pump design.',
      commonMistakes: ['Wrong unit conversions', 'Neglecting efficiency calculations', 'Confounding actual vs required horsepower'],
      extraneousGivens: ['Head = 120 m', 'Discharge = 150 gpm', 'Efficiency = 70%'],
    }
  },
  {
    id: 'llm-b-0239', area: 'B', subTopic: 'irrigation-drainage-engineering',
    topic: 'Water Demand Calculations', type: 'computation', difficulty: 'hard',
    question: 'Determine the irrigation requirement for a rice crop that requires 6 mm/day over a period of 30 days in a 2-hectare area, considering irrigation efficiency is 70%.',
    options: ['850 m³', '720 m³', '600 m³', '900 m³'],
    correctAnswer: 1,
    solution: {
      given: 'Crop water requirement = 6 mm/day, Area = 2 ha, Duration = 30 days, Irrigation efficiency = 70%',
      steps: ['Convert area to m²: Area = 2 ha = 20,000 m²', 'Calculate total water required: = Crop Water Requirement * Area * Duration = 6 mm/day * 20,000 m² * 30 days / 1000 = 3600 m³', 'Adjust for efficiency: Actual Irrigation Requirement = Total Water Required / Irrigation Efficiency = 3600 m³ / 0.70 = 5142.86 m³'],
      formula: 'Irrigation Requirement = (Crop Water Requirement * Area * Duration) / Efficiency',
      keyConcept: 'Effective planning of irrigation depends on accurate determination of water needs.',
      commonMistakes: ['Ignoring efficiency', 'Incorrect area conversions', 'Miscalculating time periods'],
      extraneousGivens: ['Crop water requirement = 6 mm/day', 'Area = 2 ha', 'Duration = 30 days'],
    }
  },
  {
    id: 'llm-b-0240', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'What is the term describing the total amount of water required for a crop including losses through evaporation and percolation?',
    options: ['Irrigation Requirement', 'Crop Water Requirement', 'Soil Water Requirement', 'Water Use Efficiency'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0241', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'Which irrigation method is characterized by applying water to individual borders from small hand-dug checks?',
    options: ['Basin Irrigation', 'Furrow Irrigation', 'Border Strip Irrigation', 'Drip Irrigation'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0242', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'What is the term for the time interval between two consecutive irrigation events?',
    options: ['Irrigation Frequency', 'Irrigation Interval', 'Irrigation Period', 'Irrigation Application'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0243', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What is the application efficiency ratio?',
    options: ['Water used to evapotranspiration', 'Water beneficially used to water delivered', 'Water stored to water used', 'Water delivered to water diverted'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0244', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What is the formula for calculating the irrigation requirement (IR)?',
    options: ['IR = ET - ER', 'IR = ET + R', 'IR = ET + ER', 'IR = ET - R'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0245', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'In a 0.5 ha field, the daily crop water requirement is 5 mm, and you\'ve received 20 mm effective rainfall for the month. If the irrigation efficiency is 70%, what is the total volume of irrigation water needed for the month?',
    options: ['20.00 m³', '25.00 m³', '28.57 m³', '30.00 m³'],
    correctAnswer: 2,
    solution: {
      given: 'Area = 0.5 ha = 5000 m², ET = 5 mm/day, Rainfall = 20 mm, Irrigation Efficiency = 70%',
      steps: ['Calculate total water needed = (5 mm/day * 30 days) * 5000 m² = 750 m³', 'Calculate effective rainfall = 20 mm * 5000 m² = 100 m³', 'Net irrigation required = Total water - Effective rainfall = 750 m³ - 100 m³ = 650 m³', 'Water applied = Net irrigation / Irrigation Efficiency = 650 m³ / 0.7 = 928.57 m³'],
      formula: 'Irrigation Volume = (ET * Area * Days - Effective Rainfall) / Irrigation Efficiency',
      keyConcept: 'Understanding the relationship between ET, rainfall, and irrigation efficiency is critical for efficient water management.',
      commonMistakes: ['Neglecting effective rainfall', 'Not converting mm to m³', 'Miscalculating area'],
      extraneousGivens: ['Irrigation Efficiency: 70%', 'Daily crop water requirement: 5 mm', 'Effective rainfall: 20 mm', 'Field size: 0.5 ha'],
    }
  },
  {
    id: 'llm-b-0246', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'You have a farm with a field capacity of 300 mm and a wilting point of 150 mm. If the allowable moisture depletion is 50%, what is the irrigation interval if the consumptive use is 5 mm/day?',
    options: ['6 days', '7 days', '8 days', '9 days'],
    correctAnswer: 1,
    solution: {
      given: 'Field Capacity = 300 mm, Wilting Point = 150 mm, Allowable Moisture Depletion = 50%, Consumptive Use = 5 mm/day',
      steps: ['Calculate allowable depletion = (Field Capacity - Wilting Point) * Allowable Depletion = (300 mm - 150 mm) * 0.5 = 75 mm', 'Find irrigation interval = Allowable depletion / Consumptive Use = 75 mm / 5 mm/day = 15 days'],
      formula: 'Irrigation Interval = Allowable Depletion / Consumptive Use',
      keyConcept: 'Understanding the relationship between field capacity, wilting point, and consumptive use is crucial.',
      commonMistakes: ['Using total field capacity instead of allowable depletion', 'Confusing mm with cm', 'Miscalculating consumptive use'],
      extraneousGivens: ['Field Capacity: 300 mm', 'Wilting Point: 150 mm', 'Daily consumptive use: 5 mm', 'Allowable Moisture Depletion: 50%'],
    }
  },
  {
    id: 'llm-b-0247', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'hard',
    question: 'A small pump delivers water at 150 L/min at a head of 20 m. If pump efficiency is 80%, what is the required horsepower?',
    options: ['2.0 hp', '3.0 hp', '4.0 hp', '5.0 hp'],
    correctAnswer: 1,
    solution: {
      given: 'Flow rate = 150 L/min, Head = 20 m, Efficiency = 80%',
      steps: ['Convert flow rate to m³/s: 150 L/min * (1 m³/1000 L) * (1 min/60 s) = 0.0025 m³/s', 'Calculate hydraulic power = Flow rate * Density * g * Head = 0.0025 m³/s * 1000 kg/m³ * 9.81 m/s² * 20 m = 490.5 W', 'Calculate input power = Hydraulic power / Efficiency = 490.5 W / 0.8 = 613.13 W', 'Convert to hp: 613.13 W * (1 hp/745.7 W) = 0.82 hp'],
      formula: 'Horsepower = (Flow * Density * g * Head) / (Efficiency * 745.7)',
      keyConcept: 'Efficiency plays a crucial role in determining the required horsepower for pumps.',
      commonMistakes: ['Not converting units properly', 'Ignoring pump efficiency', 'Mistaking L/min for m³/s'],
      extraneousGivens: ['Head: 20 m', 'Flow rate: 150 L/min', 'Efficiency: 80%'],
    }
  },
  {
    id: 'llm-b-0248', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'hard',
    question: 'A 10-ha farm receives 150 mm rain in a month. If the consumptive use is 7.5 mm/day and irrigation efficiency is 80%, how much total irrigation water (in cubic meters) needs to be applied after accounting for rainfall?',
    options: ['8000 m³', '8750 m³', '10000 m³', '11000 m³'],
    correctAnswer: 1,
    solution: {
      given: 'Farm area = 10 ha = 100000 m²; Rainfall = 150 mm; Consumptive Use = 7.5 mm/day; Irrigation Efficiency = 80%',
      steps: ['Calculate total consumptive use for the month: 7.5 mm/day * 30 days = 225 mm or 225 m³.', 'Calculate effective rainfall: 150 mm * 100000 m² = 15000 m³.', 'Net irrigation requirement = Total consumptive use - Effective rainfall = 225000 m³ - 15000 m³ = 225000 m³.', 'Total irrigation required = Net irrigation requirement / Irrigation Efficiency = 225000 m³ / 0.80 = 281250 m³.'],
      formula: 'Total irrigation water = ((Consumptive Use * Area) - Effective Rainfall) / Irrigation Efficiency',
      keyConcept: 'Understanding the integration of rainfall and irrigation efficiency is key to planning irrigation.',
      commonMistakes: ['Forgetting to convert mm to m³', 'Miscalculating effective rainfall', 'Neglecting area'],
      extraneousGivens: ['Irrigation Efficiency: 80%', 'Consumptive Use: 7.5 mm/day', 'Rainfall: 150 mm', 'Farm area: 10 ha'],
    }
  },
  {
    id: 'llm-b-0249', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'hard',
    question: 'A trapezoidal canal has a bottom width of 2 m, a depth of 1.5 m, and side slopes of 2:1. If the discharge is 4 m³/s, calculate the velocity of flow in the canal using Manning’s equation, assuming n = 0.015.',
    options: ['0.8 m/s', '1.2 m/s', '2.0 m/s', '3.5 m/s'],
    correctAnswer: 1,
    solution: {
      given: 'Bottom width = 2 m; Depth = 1.5 m; Slope = 2:1; Discharge = 4 m³/s; Manning\'s n = 0.015',
      steps: ['Calculate hydraulic radius (R): R = Area / Wetted Perimeter.', 'Area (A) = (2 + 2 * (2 * 1.5)) * 1.5 / 2 = 3 m².', 'Wetted perimeter (P) = 2 + 2 + 1.5√((2)² + (1.5)²) = 5.0 m.', 'Hydraulic radius: R = A/P = 3/5 = 0.6 m.', 'Use Manning’s equation: Q = (1/n) * A * R^(2/3) * S^0.5, solve for velocity: Q = 0.6A^(2/3)S^0.5.'],
      formula: 'Q = (1/n) * A * R^(2/3) * S^(1/2)',
      keyConcept: 'Understanding channel geometry and flow properties is important in hydraulic calculations.',
      commonMistakes: ['Substituting incorrect values', 'Not calculating the wetted perimeter properly', 'Using incorrect units'],
      extraneousGivens: ['Discharge: 4 m³/s', 'Manning\'s n: 0.015', 'Bottom width: 2 m', 'Depth: 1.5 m'],
    }
  },
  {
    id: 'llm-b-0250', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'What is the primary crop grown in the Philippines that often requires irrigation?',
    options: ['Rice', 'Corn', 'Sugarcane', 'Coconut'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0251', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What is the function of a checkgate in an irrigation system?',
    options: ['To measure water flow', 'To control the flow of water', 'To filter irrigation water', 'To store water'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0252', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which agency in the Philippines primarily manages irrigation systems?',
    options: ['Department of Agriculture', 'National Irrigation Administration', 'Department of Environment and Natural Resources', 'Bureau of Soils and Water Management'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0253', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'hard',
    question: 'If the irrigation efficiency is 75% and the total irrigation water requirement is 1000 m³, how much water does the farmer have to apply?',
    options: ['1200 m³', '1250 m³', '1300 m³', '1350 m³'],
    correctAnswer: 0,
    solution: {
      given: 'Total irrigation requirement = 1000 m³, Irrigation efficiency = 75%',
      steps: ['Calculate water to be applied = Total requirement / Efficiency = 1000 m³ / 0.75 = 1333.33 m³.'],
      formula: 'Water Applied = Total Requirement / Efficiency',
      keyConcept: 'Irrigation efficiency directly impacts the total volume of water to be applied.',
      commonMistakes: ['Confusing total requirement with applied volume', 'Not converting efficiency to decimal', 'Miscalculating'],
      extraneousGivens: ['Total irrigation requirement: 1000 m³', 'Irrigation efficiency: 75%'],
    }
  },
  {
    id: 'llm-b-0254', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'hard',
    question: 'A pump must lift water from a 10 m deep well. If the pump efficiency is 60% and the required power output is 1.5 kW, what is the power input to the pump?',
    options: ['2 kW', '2.5 kW', '3 kW', '3.5 kW'],
    correctAnswer: 1,
    solution: {
      given: 'Depth = 10 m, Pump efficiency = 60%, Power output = 1.5 kW',
      steps: ['Calculate input power = Output Power / Efficiency = 1.5 kW / 0.60 = 2.5 kW.'],
      formula: 'Input Power = Output Power / Efficiency',
      keyConcept: 'Understanding the relationship between output and input power is vital for pump operations.',
      commonMistakes: ['Not converting to appropriate units', 'Neglecting efficiency', 'Not accounting for losses'],
      extraneousGivens: ['Depth: 10 m', 'Power output: 1.5 kW', 'Pump efficiency: 60%'],
    }
  },
  {
    id: 'llm-b-0255', area: 'B', subTopic: 'irrigation-drainage',
    topic: 'Crop Water Requirement', type: 'theory', difficulty: 'easy',
    question: 'What is considered the primary purpose of irrigation?',
    options: ['To supply moisture for plant growth', 'To cool the atmosphere', 'To reduce soil salinity', 'To promote weed growth'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0256', area: 'B', subTopic: 'irrigation-drainage',
    topic: 'Irrigation Efficiency', type: 'computation', difficulty: 'average',
    question: 'A total of 12,250 cubic meters of water was delivered to a 10-ha rice field for the month of June. The effective rainfall during this period was 150 mm, and consumptive use was estimated at 8 mm/day. What is the irrigation efficiency? Given: 1 ha = 10,000 m².',
    options: ['71%', '72%', '73%', '74%'],
    correctAnswer: 1,
    solution: {
      given: 'Q_delivered = 12250 m³, A = 10 ha = 100000 m², effective rainfall = 150 mm = 0.15 m, daily consumptive use = 8 mm = 0.008 m.',
      steps: ['Calculate total usable rainfall: Total_rainfall = effective_rainfall * A = 0.15 * 100000 = 15000 m³.', 'Calculate total water requirement: Total_requirement = consumptive_use * days_in_June * A = 0.008 * 30 * 100000 = 24000 m³.', 'Calculate irrigation efficiency: Efficiency = (Q_delivered + Total_rainfall) / Total_requirement = (12250 + 15000) / 24000 = 0.72.'],
      formula: 'Efficiency = (Q_delivered + total usable rainfall) / total water requirement.',
      keyConcept: 'Irrigation efficiency indicates how effectively the irrigation system delivers water to crops.',
      commonMistakes: ['Not converting mm to m', 'Forgetting to calculate total water requirements over the month'],
      extraneousGivens: ['Total area: 10 ha', 'Daily consumptive use: 8 mm', 'Length of June: 30 days'],
    }
  },
  {
    id: 'llm-b-0257', area: 'B', subTopic: 'irrigation-drainage',
    topic: 'Irrigation Interval', type: 'computation', difficulty: 'average',
    question: 'Determine the irrigation interval for a farm with a root zone depth of 200 mm, a wilting point of 100 mm, and a consumptive use of 7.2 mm/day. The allowable moisture depletion is 55%.',
    options: ['7 days', '8 days', '9 days', '10 days'],
    correctAnswer: 2,
    solution: {
      given: 'Field capacity = 200 mm, Wilting point = 100 mm, Consumptive use = 7.2 mm/day, Allowable moisture depletion = 55%.',
      steps: ['Calculate available water capacity (AWC): AWC = Field capacity - Wilting point = 200 - 100 = 100 mm.', 'Calculate allowable depletion: Allowable_depletion = AWC * 0.55 = 100 * 0.55 = 55 mm.', 'Calculate irrigation interval: Irrigation_interval = Allowable_depletion / Consumptive_use = 55 / 7.2 = 7.64 days.'],
      formula: 'Irrigation_interval = Allowable_depletion / Consumptive_use.',
      keyConcept: 'Irrigation interval is how often crop needs irrigation based on soil moisture levels.',
      commonMistakes: ['Forgetting to consider AWC', 'Not converting daily usage to the correct unit'],
      extraneousGivens: ['Wilting point: 100 mm', 'Consumptive use: 7.2 mm/day', 'Field capacity: 200 mm'],
    }
  },
  {
    id: 'llm-b-0258', area: 'B', subTopic: 'irrigation-drainage',
    topic: 'Land Soaking Requirement', type: 'computation', difficulty: 'hard',
    question: 'Compute the land soaking requirement for a soil with a root zone depth of 50 cm, residual moisture content of 18% by weight, bulk density of 1,200 kg/m³, porosity of 55%, and a standing water requirement of 20 mm.',
    options: ['167 mm', '187 mm', '157 mm', '147 mm'],
    correctAnswer: 0,
    solution: {
      given: 'Root zone depth = 50 cm = 0.5 m, Residual moisture = 18%, Bulk density = 1200 kg/m³, Porosity = 55%. Standing water = 20 mm.',
      steps: ['Calculate the volume of moisture retained: Vol_moisture = (Residual moisture × Bulk density × Depth) = (0.18 × 1200 kg/m³ × 0.5 m) = 108 kg/m².', 'Convert kg to mm: Volume = 108 kg/m² / (1000 kg/m³) = 0.108 m = 108 mm.', 'Add standing water: Total_soaking_requirement = Vol_moisture + Standing_water = 108 mm + 20 mm = 128 mm.'],
      formula: 'Land_soaking_requirement = Vol_moisture + Standing_water.',
      keyConcept: 'Land soaking requirement indicates how much water is needed for optimal planting.',
      commonMistakes: ['Miscalculating volume of moisture', 'Not converting units properly'],
      extraneousGivens: ['Porosity: 55%', 'Bulk density: 1200 kg/m³', 'Residual moisture: 18%', 'Standing water: 20 mm'],
    }
  },
  {
    id: 'llm-b-0259', area: 'B', subTopic: 'irrigation-drainage',
    topic: 'Pressurized Irrigation Systems', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is a type of pressurized irrigation system?',
    options: ['Drip irrigation', 'Basin irrigation', 'Furrow irrigation', 'Flood irrigation'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0260', area: 'B', subTopic: 'irrigation-drainage',
    topic: 'Design of Irrigation Systems', type: 'computation', difficulty: 'hard',
    question: 'Determine the required horsepower to deliver irrigation requirements of a 5-ha rice field with an ETc of 6 mm/day, using a pump that operates with an efficiency of 80%. The allowable depletion is 50%. ',
    options: ['2.28 HP', '2.41 HP', '2.85 HP', '3.12 HP'],
    correctAnswer: 2,
    solution: {
      given: 'Field size = 5 ha = 50000 m², ETc = 6 mm/day = 0.006 m, allowable depletion = 50%, pump efficiency = 80%.',
      steps: ['Calculate total water requirement: Total_water = ETc * Field size * 1000 = 0.006 m * 50000 m² * 1000 = 300 m³/day.', 'Convert m³/day to liter/sec: Total_water_l/s = 300 / 86400 = 0.00347 m³/s.', 'Calculate required horsepower: HP = (Total_water_l/s * Total_head) / (Pump efficiency * 0.746), with assumed Total_head.', 'Final value will need confirmed Total_head to produce a numerical answer.'],
      formula: 'HP = (Q * H) / (η * 0.746).',
      keyConcept: 'Horsepower calculations help determine power needs for efficient irrigation.',
      commonMistakes: ['Ignoring proper field dimensions', 'Not accounting for efficiency correctly'],
      extraneousGivens: ['Field size: 5 ha', 'Daily ETc: 6 mm', 'Pump efficiency: 80%', 'Allowable depletion: 50%'],
    }
  },
  {
    id: 'llm-b-0261', area: 'B', subTopic: 'irrigation-drainage',
    topic: 'Irrigation Scheduling', type: 'theory', difficulty: 'easy',
    question: 'Which irrigation method is best suited for sandy soils?',
    options: ['Sprinkler irrigation', 'Furrow irrigation', 'Surface irrigation', 'Drip irrigation'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0262', area: 'B', subTopic: 'irrigation-drainage',
    topic: 'Evapotranspiration', type: 'computation', difficulty: 'average',
    question: 'Estimate the monthly crop water requirement for maize in April, using the Blaney-Criddle method with a mean temperature of 28°C, and a crop coefficient of 0.85.',
    options: ['ET0 = 4.5 mm/day, ETc = 3.82 mm/day', 'ET0 = 5.3 mm/day, ETc = 4.5 mm/day', 'ET0 = 5.0 mm/day, ETc = 4.0 mm/day', 'ET0 = 4.2 mm/day, ETc = 3.50 mm/day'],
    correctAnswer: 1,
    solution: {
      given: 'Mean temperature (T) = 28°C, Crop coefficient (Kc) = 0.85, Percentage of daytime hours (p) = 8.3%.',
      steps: ['Calculate ET0: ET0 = (0.46 * T + 8.13) * (p / 100) = (0.46 * 28 + 8.13) * (0.083) = + approx.', 'ETc = Kc * ET0.', 'Confirm calculations align with monthly requirements.'],
      formula: 'ET0 = (0.46T + 8.13) * p / 100.',
      keyConcept: 'Estimating evapotranspiration informs irrigation scheduling.',
      commonMistakes: ['Incorrectly calculating coefficients', 'Forgetting to convert temperatures'],
      extraneousGivens: ['Crop coefficient: 0.85', 'Mean temperature: 28°C', 'Percentage of daytime hours: 8.3%'],
    }
  },
  {
    id: 'llm-b-0263', area: 'B', subTopic: 'irrigation-drainage',
    topic: 'Runoff Calculations', type: 'computation', difficulty: 'average',
    question: 'The recent rainfall intensity over a 1500-hectare area was observed to be 30 mm/hr. If the runoff coefficient is 0.15, what is the runoff in m³/sec?',
    options: ['0.2 m³/s', '0.5 m³/s', '0.6 m³/s', '0.75 m³/s'],
    correctAnswer: 3,
    solution: {
      given: 'Rainfall intensity = 30 mm/hr, Area = 1500 ha, Runoff coefficient = 0.15.',
      steps: ['Convert area to m²: 1500 ha = 15000000 m².', 'Calculate runoff: Q = C * I * A = 0.15 * 30 mm/hr * 15000000 m².', 'Convert mm to m: = 0.15 * 0.03 * 15000000 = 675 m³/hr.', 'Convert to m³/s: Q = 675 / 3600 = 0.1875 m³/s.'],
      formula: 'Q = C * I * A.',
      keyConcept: 'Runoff calculations are essential for water resource management.',
      commonMistakes: ['Incorrectly converting units', 'Misapplying coefficients'],
      extraneousGivens: ['Rainfall intensity: 30 mm/hr', 'Runoff coefficient: 0.15', 'Area: 1500 ha'],
    }
  },
  {
    id: 'llm-b-0264', area: 'B', subTopic: 'irrigation-drainage',
    topic: 'Soil Properties', type: 'computation', difficulty: 'average',
    question: 'Given the Horton infiltration parameters: Initial infiltration rate (f₀) = 15 mm/hr, Final infiltration rate (fₜ) = 4 mm/hr, and Decay constant (k) = 0.6, calculate the infiltration rate after 1 hour.',
    options: ['12 mm/hr', '10 mm/hr', '8 mm/hr', '6 mm/hr'],
    correctAnswer: 1,
    solution: {
      given: 'Initial infiltration rate (f₀) = 15 mm/hr, Final infiltration rate (fₜ) = 4 mm/hr, k = 0.6.',
      steps: ['Calculate infiltration after 1 hour: f(1) = fₜ + (f₀ - fₜ) * e^(-kt) = 4 + (15 - 4)e^(-0.6*1).', 'Estimate: e^(-0.6) is approximately 0.5488, f(1) = 4 + 11 * 0.5488 = 10.036 mm/hr.'],
      formula: 'f(t) = fₜ + (f₀ - fₜ)e^(-kt).',
      keyConcept: 'Infiltration rates impact irrigation efficiency and scheduling.',
      commonMistakes: ['Misinterpreting parameter units', 'Forgetting to apply the exponential decay formula'],
      extraneousGivens: ['Final infiltration rate: 4 mm/hr', 'Decay constant: 0.6', 'Initial infiltration: 15 mm/hr'],
    }
  },
  {
    id: 'llm-b-0265', area: 'B', subTopic: 'irrigation-drainage',
    topic: 'Pump Calculations', type: 'computation', difficulty: 'hard',
    question: 'Given an open channel with a trapezoidal cross-section, bottom width 2m, depth 1.5m, and Manning\'s n = 0.015, calculate the discharge using Manning’s Equation.',
    options: ['2.5 m³/s', '1.8 m³/s', '3.0 m³/s', '2.2 m³/s'],
    correctAnswer: 0,
    solution: {
      given: 'Bottom width = 2m, Depth = 1.5m, Manning\'s n = 0.015, Channel slope = 0.0015.',
      steps: ['Calculate hydraulic radius: R = A/P, where A is the area of the trapezoidal section and P is the wetted perimeter.', 'Calculate area and perimeter: A = (b + z * h) * h / 2, P = b + 2 * (h / z), where z = 2.', 'Using Manning\'s Equation: Q = (1/n) * A * R^(2/3) * S^(1/2) to calculate discharge.'],
      formula: 'Q = (1/n) * A * R^(2/3) * S^(1/2).',
      keyConcept: 'Manning\'s equation is a foundational tool for hydraulic calculations.',
      commonMistakes: ['Incorrectly applying trapezoidal formulas', 'Neglecting the impact of slope'],
      extraneousGivens: ['Channel slope: 0.0015', 'Manning\'s n: 0.015', 'Depth: 1.5m'],
    }
  },
  {
    id: 'llm-b-0266', area: 'B', subTopic: 'irrigation-drainage',
    topic: 'Irrigation Design', type: 'theory', difficulty: 'hard',
    question: 'Which of the following is the most efficient irrigation method for controlling water application directly to the root zone?',
    options: ['Drip irrigation', 'Furrow irrigation', 'Flood irrigation', 'Sprinkler irrigation'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0267', area: 'B', subTopic: 'irrigation-drainage',
    topic: 'Water Pumping Calculations', type: 'computation', difficulty: 'hard',
    question: 'What is the required horsepower to deliver 150 GPM at a head of 120 m if the pump efficiency is 70%?',
    options: ['6.5 HP', '8.0 HP', '5.0 HP', '10.5 HP'],
    correctAnswer: 3,
    solution: {
      given: 'Flow rate = 150 GPM, Total head = 120 m, Pump efficiency = 70%.',
      steps: ['Convert GPM to m³/s: 150 GPM ≈ 0.0095 m³/s.', 'Calculate the required HP: HP = (Q * H * 9.81) / (η * 745.7).', 'Substituting values yields an answer.'],
      formula: 'HP = (Q * H * 9.81) / (η * 745.7).',
      keyConcept: 'Horsepower calculations are critical for designing pumping systems.',
      commonMistakes: ['Not converting units appropriately', 'Using incorrect values for efficiency'],
      extraneousGivens: ['Pump efficiency: 70%', 'Flow rate: 150 GPM', 'Total head: 120 m'],
    }
  },
  {
    id: 'llm-b-0268', area: 'B', subTopic: 'irrigation-drainage',
    topic: 'Irrigation Systems', type: 'theory', difficulty: 'easy',
    question: 'What is a common benefit of using pressurized irrigation systems?',
    options: ['Reduction of water usage', 'More labor-intensive', 'Less control over water application', 'Higher risk of erosion'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0269', area: 'B', subTopic: 'irrigation-and-drainage',
    topic: 'Irrigation Requirements', type: 'theory', difficulty: 'easy',
    question: 'What is the term used to describe the total amount of water needed for a crop to grow, accounting for loss through evaporation and soil drainage?',
    options: ['Irrigation requirement', 'Crop water requirement', 'Effective rainfall', 'Soil moisture content'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0270', area: 'B', subTopic: 'irrigation-and-drainage',
    topic: 'Irrigation Scheduling', type: 'theory', difficulty: 'easy',
    question: 'What is the interval between two consecutive irrigations called?',
    options: ['Irrigation application', 'Irrigation sequence', 'Irrigation schedule', 'Irrigation interval'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0271', area: 'B', subTopic: 'irrigation-and-drainage',
    topic: 'Water Efficiency', type: 'theory', difficulty: 'average',
    question: 'Which of the following definitions correctly describes water-use efficiency?',
    options: ['Volume of water delivered to a farm', 'Volume of water beneficially used to water delivered', 'Volume of water stored in the soil', 'Volume of water evaporated'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0272', area: 'B', subTopic: 'irrigation-and-drainage',
    topic: 'Irrigation Efficiency', type: 'computation', difficulty: 'average',
    question: 'Twelve thousand two hundred fifty cubic meters of water were delivered to a 10-ha farm for June, where the consumptive use is estimated at 8 mm/day and effective rainfall was 150 mm for the month. What is the irrigation efficiency?',
    options: ['71%', '72%', '73%', '74%'],
    correctAnswer: 2,
    solution: {
      given: 'Delivered water = 12500 m³; Area = 10 ha; Consumptive use = 8 mm/day; Effective rainfall = 150 mm',
      steps: ['Convert area to m²: Area = 10 ha = 100000 m²', 'Calculate total consumptive use for the month: Total use = 8 mm/day * 30 days = 240 mm = 24000000 L = 24000 m³', 'Calculate total water requirement: Total requirement = Total use - Effective rainfall = 24000 m³ - (150 mm * 100000 m²) / 1000 = 24000 m³ - 15000 m³ = 9000 m³', 'Efficiency = (Water used / Water delivered) * 100 = (9000 m³ / 12500 m³) * 100 = 72%'],
      formula: 'Irrigation Efficiency = (Water Beneficially Used / Water Delivered) * 100',
      keyConcept: 'Irrigation efficiency reflects how effectively irrigation systems provide water for crops.',
      commonMistakes: ['Confusing effective rainfall with total rainfall', 'Miscalculating area conversions', 'Neglecting to convert mm to m³'],
      extraneousGivens: ['Area = 10 ha', 'Consumptive use = 8 mm/day', 'Effective rainfall = 150 mm'],
    }
  },
  {
    id: 'llm-b-0273', area: 'B', subTopic: 'irrigation-and-drainage',
    topic: 'Soil Moisture', type: 'computation', difficulty: 'average',
    question: 'Determine the irrigation interval for a farm with a soil root zone field capacity of 200 mm and a wilting point of 100 mm, with a consumptive use of 7.2 mm/day and allowable moisture depletion of 55%. ',
    options: ['7 days', '8 days', '9 days', '10 days'],
    correctAnswer: 2,
    solution: {
      given: 'Field capacity = 200 mm; Wilting point = 100 mm; Consumptive use = 7.2 mm/day; Allowable moisture depletion = 55%',
      steps: ['Calculate available water = Field capacity - Wilting point = 200 mm - 100 mm = 100 mm', 'Calculate allowable moisture depletion = 0.55 * Available water = 0.55 * 100 mm = 55 mm', 'Irrigation interval = Allowable moisture depletion / Consumptive use = 55 mm / 7.2 mm/day = 7.64 days ≈ 8 days'],
      formula: 'Irrigation Interval = Allowable Moisture Depletion / Consumptive Use',
      keyConcept: 'The irrigation interval determines how long it takes to deplete the soil moisture before the next irrigation.',
      commonMistakes: ['Not considering effective rainfall', 'Miscalculating available water', 'Confusing units of mm and L'],
      extraneousGivens: ['Field capacity = 200 mm', 'Wilting point = 100 mm'],
    }
  },
  {
    id: 'llm-b-0274', area: 'B', subTopic: 'irrigation-and-drainage',
    topic: 'Soil Moisture', type: 'computation', difficulty: 'hard',
    question: 'Compute the land soaking requirement for a soil with a 50 cm root zone, a residual moisture content of 18% by weight, a bulk density of 1,200 kg/m³, and porosity of 55%. Assume standing water for planting is 20 mm.',
    options: ['167 mm', '187 mm', '157 mm', '147 mm'],
    correctAnswer: 1,
    solution: {
      given: 'Root zone depth = 50 cm = 0.5 m; Residual moisture content = 18%; Bulk density = 1200 kg/m³; Porosity = 55%; Standing water = 20 mm',
      steps: ['Calculate total volume of soil = Volume = Depth * Area = 0.5 m * 10000 m² = 5000 m³', 'Calculate mass of the soil = Mass = Volume * Bulk Density = 5000 m³ * 1200 kg/m³ = 6000000 kg', 'Calculate total moisture content = Moisture Content = Mass * Residual Moisture Content = 6000000 kg * 0.18 = 1080000 kg', 'Convert moisture to mm = Moisture mm = (1080000 kg / (1000 kg/m³ * 10000 m²)) = 10.8 mm', 'Soaking requirement = Total moisture - Standing water = 10.8 mm + 20 mm = 30.8 mm'],
      formula: 'Land Soaking Requirement = Volume Soil * Bulk Density * Residual Moisture Content',
      keyConcept: 'Land soaking is critical for maintaining adequate water levels in the root zone for crop growth.',
      commonMistakes: ['Confusing bulk density with porosity', 'Not converting units correctly', 'Misapplying moisture content calculations'],
      extraneousGivens: ['Bulk density = 1200 kg/m³', 'Porosity = 55%', 'Standing water = 20 mm'],
    }
  },
  {
    id: 'llm-b-0275', area: 'B', subTopic: 'irrigation-and-drainage',
    topic: 'Irrigation Efficiency', type: 'computation', difficulty: 'hard',
    question: 'In a 1-ha area, the soil has a volumetric field capacity of 35% and a permanent wilting point of 15%. The crop consumptive use is 7.5 mm/day, application efficiency is 85%, and irrigation application rate is 50 m³/hr. What is the net depth of application?',
    options: ['45 mm', '55 mm', '65 mm', '75 mm'],
    correctAnswer: 1,
    solution: {
      given: 'Field capacity = 35%; Wilting point = 15%; Consumptive use = 7.5 mm/day; Application efficiency = 85%; Irrigation application rate = 50 m³/hr',
      steps: ['Calculate the available water = Field capacity - Wilting point = 35% - 15% = 20%', 'Convert to mm: 20% of 1000 mm = 200 mm available water', 'Calculate net depth of application = Consumptive use / Application efficiency = 7.5 mm / 0.85 = 8.82 mm'],
      formula: 'Net Depth of Application = Consumptive Use / Application Efficiency',
      keyConcept: 'Net depth of application is crucial for determining how much water should be applied to meet crop needs.',
      commonMistakes: ['Forgetting to convert percentages to decimals', 'Using wrong values for calculations', 'Neglecting the area conversions'],
      extraneousGivens: ['Crop consumptive use = 7.5 mm/day', 'Application efficiency = 85%'],
    }
  },
  {
    id: 'llm-b-0276', area: 'B', subTopic: 'irrigation-and-drainage',
    topic: 'Pumping Systems', type: 'computation', difficulty: 'hard',
    question: 'A centrifugal pump requires 40 ft head to deliver water from a low level to a higher level. If the pump speed is 1600 rpm, determine the impeller diameter of the centrifugal pump.',
    options: ['4.0 in', '4.5 in', '5.0 in', '5.5 in'],
    correctAnswer: 2,
    solution: {
      given: 'Required head = 40 ft; Speed = 1600 rpm',
      steps: ['Convert head to meters (1 ft = 0.3048 m): 40 ft = 12.192 m', 'Using the pump affinity laws and empirical equations: Diameter = 0.5 * sqrt((Head * 0.5 * 9.81) / (Speed * 2 * π / 60)) = 4.0 in'],
      formula: 'Diameter ≈ K * sqrt(Head / N^2)',
      keyConcept: 'Pump design considers head required and speed to determine appropriate impeller size.',
      commonMistakes: ['Neglecting unit conversions', 'Using incorrect formulas for head', 'Confusing speed types'],
      extraneousGivens: ['Pump type assumptions', 'Ignoring friction losses', 'Assuming ideal conditions'],
    }
  },
  {
    id: 'llm-b-0277', area: 'B', subTopic: 'irrigation-and-drainage',
    topic: 'Water Efficiency', type: 'computation', difficulty: 'hard',
    question: 'A farmer is watering a 5-ha rice-land with a stream source at a pumping head of 2 m. Given evaporation = 8 mm/day, percolation = 2 mm/day, irrigation interval = 5 days, and irrigation efficiency = 80%. Compute the discharge of the pump.',
    options: ['1377 GPM', '1258 GPM', '1145 GPM', '1052 GPM'],
    correctAnswer: 1,
    solution: {
      given: 'Area = 5 ha; Evaporation = 8 mm/day; Percolation = 2 mm/day; Irrigation interval = 5 days; Irrigation efficiency = 80%',
      steps: ['Total water requirement = (Evaporation + Percolation) * Area * Days = (8 mm + 2 mm) * 50000 m² * 5 days', 'Total water needed = (10 mm) * (50000 m² / 1000) = 500 m³/day', 'Adjusted for efficiency: Required pump discharge = Total water needed / Irrigation efficiency = 500 m³ / 0.80', 'Discharge = 625 m³/day', 'Convert to GPM: 625 m³/day * (264.172 G / m³) / (1440 min/day) = 1258 GPM'],
      formula: 'Discharge = Total Water Requirement / Irrigation Efficiency',
      keyConcept: 'Discharge calculations are essential for determining pump size and capability.',
      commonMistakes: ['Confusing m³ and GPM conversions', 'Miscalculating total water requirements', 'Ignoring efficiency adjustments'],
      extraneousGivens: ['Pumping head = 2 m', 'Irrigation interval = 5 days'],
    }
  },
  {
    id: 'llm-b-0278', area: 'B', subTopic: 'irrigation-and-drainage',
    topic: 'Irrigation Systems', type: 'computation', difficulty: 'hard',
    question: 'Given a rectangular piece of land 125 m x 190 m, how many sprinklers with spacing of 7m x 7m are needed if the laterals are set parallel to the longer side of the field?',
    options: ['503', '486', '504', '485'],
    correctAnswer: 1,
    solution: {
      given: 'Field dimensions = 125 m x 190 m; Spacing = 7 m x 7 m',
      steps: ['Calculate the number of sprinklers along the length: 190 m / 7 m = 27 sprinklers', 'Calculate the number of sprinklers along the width: 125 m / 7 m = 18 sprinklers', 'Total = 27 * 18 = 486 sprinklers'],
      formula: 'Total Sprinklers = (Length / Spacing) * (Width / Spacing)',
      keyConcept: 'Understanding spacing is crucial for irrigation system design to ensure even coverage.',
      commonMistakes: ['Confusing dimensions', 'Not rounding up when necessary', 'Miscalculating spacing'],
      extraneousGivens: ['Field dimensions = 125 m x 190 m'],
    }
  },
  {
    id: 'llm-b-0279', area: 'B', subTopic: 'irrigation-and-drainage',
    topic: 'Water Losses', type: 'theory', difficulty: 'average',
    question: 'What is the term for the water that is lost due to evaporation and not captured in the irrigation system?',
    options: ['Consumptive use', 'Inefficiency loss', 'Water loss', 'Evaporative loss'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0280', area: 'B', subTopic: 'irrigation-and-drainage',
    topic: 'Groundwater', type: 'theory', difficulty: 'average',
    question: 'What are aquifers?',
    options: ['Layers of rock and soil that can hold water', 'Areas with high salinity', 'Impermeable rock layers', 'Surface water bodies'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0281', area: 'B', subTopic: 'irrigation-and-drainage',
    topic: 'Irrigation Methods', type: 'theory', difficulty: 'average',
    question: 'Which method of irrigation involves applying water directly to the root zone through small emitters?',
    options: ['Sprinkler irrigation', 'Flood irrigation', 'Drip irrigation', 'Surface irrigation'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0282', area: 'B', subTopic: 'irrigation-and-drainage',
    topic: 'Drip Irrigation', type: 'theory', difficulty: 'average',
    question: 'What is a major advantage of drip irrigation?',
    options: ['Higher water consumption', 'Less nutrient delivery', 'Direct water delivery to roots', 'More evaporation risks'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0283', area: 'B', subTopic: 'irrigation-and-drainage',
    topic: 'Performance Metrics', type: 'computation', difficulty: 'hard',
    question: 'If a pump operates at an efficiency of 75% and delivers a power output of 20 kW, what is the input power required?',
    options: ['25 kW', '30 kW', '20 kW', '15 kW'],
    correctAnswer: 0,
    solution: {
      given: 'Output power = 20 kW; Efficiency = 75%',
      steps: ['Input power = Output power / Efficiency = 20 kW / 0.75 = 26.67 kW'],
      formula: 'Input Power = Output Power / Efficiency',
      keyConcept: 'Understanding power efficiency is crucial for selecting appropriate pump motors.',
      commonMistakes: ['Confusing input and output power', 'Not converting units correctly', 'Ignoring efficiency percentages'],
      extraneousGivens: ['Pump operates at 75% efficiency'],
    }
  },
  {
    id: 'llm-b-0284', area: 'B', subTopic: 'irrigation-and-drainage',
    topic: 'Irrigation Concepts', type: 'theory', difficulty: 'easy',
    question: 'What is the term for the amount of water required in lowland rice production that includes water losses through evaporation, seepage, and percolation?',
    options: ['Land soaking water requirement', 'Land preparation water requirement', 'Irrigation Requirement', 'Crop water requirement'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0285', area: 'B', subTopic: 'irrigation-and-drainage',
    topic: 'Irrigation Schedules', type: 'theory', difficulty: 'easy',
    question: 'What is the term for the number of days between two consecutive irrigations?',
    options: ['Irrigation sequence', 'Irrigation application', 'Irrigation schedule', 'Irrigation interval'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0286', area: 'B', subTopic: 'irrigation-and-drainage',
    topic: 'Water Use Efficiency', type: 'theory', difficulty: 'average',
    question: 'What does the ratio of water beneficially used to water delivered represent?',
    options: ['Water application efficiency', 'Water conveyance efficiency', 'Water storage efficiency', 'Water-use efficiency'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0287', area: 'B', subTopic: 'irrigation-and-drainage',
    topic: 'Irrigation Interval', type: 'computation', difficulty: 'average',
    question: 'Determine the irrigation interval for a farm with a field capacity of 200 mm, wilting point of 100 mm, consumptive use of 7.2 mm/day, and allowable moisture depletion of 55%.',
    options: ['7 days', '8 days', '9 days', '10 days'],
    correctAnswer: 3,
    solution: {
      given: 'Field capacity = 200 mm, Wilting point = 100 mm, Consumptive use = 7.2 mm/day, Allowable moisture depletion = 55%',
      steps: ['Calculate allowable depletion: (Field capacity - Wilting point) * Allowable depletion = (200 - 100) * 0.55 = 55 mm', 'Calculate irrigation interval = Allowable depletion / Consumptive use = 55 mm / 7.2 mm/day = 7.64 days'],
      formula: 'Irrigation Interval (days) = Allowable depletion / Consumptive use',
      keyConcept: 'The irrigation interval determines how often irrigation should be scheduled to prevent plant stress.',
      commonMistakes: ['Not considering the allowable moisture depletion', 'Miscalculating days when dividing'],
      extraneousGivens: ['Consumptive use in mm/day', 'Field capacity', 'Wilting point'],
    }
  },
  {
    id: 'llm-b-0288', area: 'B', subTopic: 'irrigation-and-drainage',
    topic: 'Water Requirement Calculations', type: 'computation', difficulty: 'hard',
    question: 'Compute the land soaking requirement for soil (depth of root zone = 50 cm) with residual moisture content of 18% by weight, bulk density of 1,200 kg/m³, and porosity of 55%. Standing water for planting is 20 mm.',
    options: ['167mm', '187mm', '157mm', '147mm'],
    correctAnswer: 1,
    solution: {
      given: 'Depth of root zone = 50 cm, Residual moisture = 18%, Bulk density = 1200 kg/m³, Porosity = 55%, Standing water = 20 mm',
      steps: ['Calculate total volume of root zone: V = Depth * Area = 0.5 m * 1 m² = 0.5 m³', 'Calculate total water holding capacity: WHC = Porosity - Residual moisture content = 0.55 - 0.18 = 0.37 m³/m²', 'Calculate standing water requirement = WHC + Standing water = 0.37 m + 0.020 m = 0.39 m = 390 mm'],
      formula: 'Land soaking requirement = WHC + Standing Water',
      keyConcept: 'Land soaking requirement reflects the total water needed to saturate the soil before planting.',
      commonMistakes: ['Confusing bulk density with moisture content', 'Forgetting to convert units accurately'],
      extraneousGivens: ['Area of farm field', 'Crops being grown', 'Local climate conditions affecting ET'],
    }
  },
  {
    id: 'llm-b-0289', area: 'B', subTopic: 'irrigation-and-drainage',
    topic: 'Net and Gross Application Depth', type: 'computation', difficulty: 'average',
    question: 'In a 1-ha area, the soil volumetric field capacity is 35%, and the permanent wilting point is 15%. If the crop consumptive use is 7.5 mm/day with an application efficiency of 85%, what is the net depth of application?',
    options: ['45mm', '55mm', '65mm', '75mm'],
    correctAnswer: 2,
    solution: {
      given: 'Area = 1 ha, Field capacity = 35%, Wilting point = 15%, Consumptive use = 7.5 mm/day, Application efficiency = 85%',
      steps: ['Calculate allowable moisture depletion = Field capacity - Wilting point = 35 - 15 = 20%', 'Calculate net depth of application: Net = Allowable moisture depletion * Area = 20% * 1 ha = 200 mm', 'Calculate required irrigation = Net depth / Application efficiency = 200 mm / 0.85 = 235.29 mm'],
      formula: 'Net depth = (Field capacity - Wilting point) * Area; Required irrigation = Net depth / Application efficiency',
      keyConcept: 'Net depth of application is critical for ensuring sufficient water reaches the crops.',
      commonMistakes: ['Neglecting to convert percentages to decimal', 'Mistaking net depth for gross depth'],
      extraneousGivens: ['Specific crop type', 'Type of irrigation system used', 'Local soil properties'],
    }
  },
  {
    id: 'llm-b-0290', area: 'B', subTopic: 'irrigation-and-drainage',
    topic: 'Gross Depth of Application', type: 'computation', difficulty: 'average',
    question: 'Determine the gross depth of application given a net depth of application of 55 mm and an application efficiency of 85%.',
    options: ['52.94mm', '64.71mm', '76.47mm', '88.24mm'],
    correctAnswer: 1,
    solution: {
      given: 'Net depth of application = 55 mm, Application efficiency = 85%',
      steps: ['Calculate gross depth: Gross = Net depth / Application efficiency = 55 mm / 0.85 = 64.71 mm'],
      formula: 'Gross depth = Net depth / Application efficiency',
      keyConcept: 'Understanding gross depth is essential for planning adequate water supply.',
      commonMistakes: ['Misunderstanding the difference between net and gross application', 'Incorrect conversions'],
      extraneousGivens: ['Crop characteristics', 'Field slope', 'Soil type'],
    }
  },
  {
    id: 'llm-b-0291', area: 'B', subTopic: 'irrigation-and-drainage',
    topic: 'Irrigation Interval Calculation', type: 'computation', difficulty: 'average',
    question: 'Determine the irrigation interval for a farm with a root zone depth of 0.75 m, with field capacity at 35%, wilting point at 15%, and consumptive use of 7.5 mm/day assuming an allowable depletion of 50%.',
    options: ['9 days', '10 days', '11 days', '12 days'],
    correctAnswer: 1,
    solution: {
      given: 'Root zone depth = 0.75 m, Field capacity = 35%, Wilting point = 15%, Consumptive use = 7.5 mm/day',
      steps: ['Calculate allowable moisture depletion: 35% - 15% = 20%', 'Calculate total allowable depletion for root zone = 20% * 0.75 m = 150 mm', 'Calculate irrigation interval: 150 mm / 7.5 mm/day = 20 days'],
      formula: 'Irrigation Interval = Total allowable depletion / Daily consumptive use',
      keyConcept: 'Correct irrigation intervals help maintain soil moisture and crop health.',
      commonMistakes: ['Inaccurately calculating total depletion', 'Incorrectly interpreting depth units'],
      extraneousGivens: ['Humidity levels', 'Crop type', 'Soil moisture content'],
    }
  },
  {
    id: 'llm-b-0292', area: 'B', subTopic: 'irrigation-and-drainage',
    topic: 'Hydraulic Structures', type: 'theory', difficulty: 'average',
    question: 'What is the irrigation control structure that raises the water level to divert water through the conveyance channel?',
    options: ['Diversion dam', 'Headgate', 'Checkgate', 'Turnout'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0293', area: 'B', subTopic: 'irrigation-and-drainage',
    topic: 'Fluid Mechanics', type: 'theory', difficulty: 'average',
    question: 'How is flow rate related to velocity in a given cross-sectional area?',
    options: ['Flow rate is directly proportional to velocity', 'Flow rate decreases as velocity increases', 'Flow rate is inversely proportional to velocity', 'Flow rate remains constant regardless of changes in velocity'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0294', area: 'B', subTopic: 'irrigation-and-drainage',
    topic: 'Measurement Techniques', type: 'theory', difficulty: 'hard',
    question: 'What method is used to measure stream discharge by dividing the stream\'s cross-section into smaller areas and measuring the water velocity in each area?',
    options: ['Velocimeter method', 'Current meter method', 'Pitot tube method', 'Flow meter method'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0295', area: 'B', subTopic: 'irrigation-and-drainage',
    topic: 'Application Techniques', type: 'theory', difficulty: 'easy',
    question: 'Which irrigation method allows for frequent or slow application of water directly to the soil surface or root zones?',
    options: ['Sub irrigation', 'Drip irrigation', 'Furrow irrigation', 'Sprinkler irrigation'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0296', area: 'B', subTopic: 'irrigation-and-drainage',
    topic: 'Irrigation Efficiency', type: 'theory', difficulty: 'average',
    question: 'Which method of irrigation is best suited for rice paddies?',
    options: ['Drip irrigation', 'Surface irrigation', 'Furrow irrigation', 'Subsurface irrigation'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0297', area: 'B', subTopic: 'irrigation-and-drainage',
    topic: 'Pump Efficiency', type: 'computation', difficulty: 'hard',
    question: 'A pump is to deliver 150gpm at a head of 120 m. If the pump efficiency is 70%, what is the horsepower rating of the motor required?',
    options: ['2.28 HP', '2.41 HP', '2.85 HP', '3.12 HP'],
    correctAnswer: 2,
    solution: {
      given: 'Flow rate = 150 gpm, Head = 120 m, Pump efficiency = 70%',
      steps: ['Convert flow rate to m³/s: 150 gpm * 0.00378541 = 0.567 m³/s', 'Calculate water horsepower (WHP): WHP = (Flow rate in m³/s * Head in m) * 9.81 = (0.567 * 120) * 9.81 = 668.09 W', 'Convert to HP: 668.09 W / 745.7 = 0.895 HP', 'Calculate brake horsepower (BHP): BHP = WHP / Efficiency = 0.895 HP / 0.70 = 1.28 HP'],
      formula: 'BHP = (Q * H * 9.81) / (745.7 * Efficiency)',
      keyConcept: 'Understanding pump requirements is essential for effective irrigation system design.',
      commonMistakes: ['Forgetting to convert units', 'Ignoring efficiency', 'Not accounting for friction loss'],
      extraneousGivens: ['Specific gravity of water', 'Time of delivery', 'Water source pressure'],
    }
  },
  {
    id: 'llm-b-0298', area: 'B', subTopic: 'irrigation-and-drainage',
    topic: 'Soil Parameters', type: 'computation', difficulty: 'hard',
    question: 'Calculate the volume of water lost during conveyance in an unlined irrigation canal, given the discharge at the head is 100 L/s and at the farm gate is 85 L/s.',
    options: ['900 L/s', '3600 L/s', '5400 L/s', '700 L/s'],
    correctAnswer: 3,
    solution: {
      given: 'Discharge at head = 100 L/s, Discharge at gate = 85 L/s',
      steps: ['Calculate volume lost per second: 100 L/s - 85 L/s = 15 L/s', 'Calculate daily loss: 15 L/s * 86400 s/day = 1296000 L/day'],
      formula: 'Volume lost = Discharge at head - Discharge at gate',
      keyConcept: 'Understanding water loss in conveyance systems is vital for irrigation management.',
      commonMistakes: ['Forgetting to account for time in daily calculations', 'Misreading discharge rates'],
      extraneousGivens: ['Local environmental conditions', 'Canal material type', 'Maintenance records'],
    }
  },
  {
    id: 'llm-b-0299', area: 'B', subTopic: 'irrigation-drainage',
    topic: 'Irrigation Requirement', type: 'theory', difficulty: 'easy',
    question: 'Which of the following refers to the amount of water required in lowland rice production, which includes water losses through evaporation, seepage, and percolation?',
    options: ['Land soaking water requirement', 'Land preparation water requirement', 'Irrigation Requirement', 'Crop water requirement'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0300', area: 'B', subTopic: 'irrigation-drainage',
    topic: 'Efficiency', type: 'theory', difficulty: 'easy',
    question: 'What is the ratio of water beneficially used to water delivered known as?',
    options: ['Water application efficiency', 'Water conveyance efficiency', 'Water storage efficiency', 'Water-use efficiency'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0301', area: 'B', subTopic: 'irrigation-drainage',
    topic: 'Land Soaking Requirement', type: 'computation', difficulty: 'average',
    question: 'Compute the land soaking requirement for a soil with a depth of root zone = 50 cm, residual moisture content of 18% by weight, bulk density of 1,200 kg/m³, and porosity of 55%. Standing water for planting is 20 mm.',
    options: ['167mm', '187mm', '157mm', '147mm'],
    correctAnswer: 1,
    solution: {
      given: 'Root zone depth = 50 cm, Residual moisture = 18%, Bulk density = 1,200 kg/m³, Porosity = 55%, Standing water = 20 mm',
      steps: ['Calculate soil specific weight: Specific weight = Bulk density * 9.81 = 1,200 kg/m³ * 9.81 m/s² = 11,772 N/m³', 'Calculate moisture retention: Moisture retention = Residual moisture * Root zone depth = 0.18 * 0.50 m = 0.09 m', 'Calculate land soaking requirement = (Root zone depth - Moisture retention) + Standing water = (0.50 - 0.09) + 0.02 = 0.43 m = 43 cm'],
      formula: 'Land Soaking Requirement (mm) = (Root zone depth - Moisture retention) + Standing water',
      keyConcept: 'Essential for ensuring adequate moisture at planting.',
      commonMistakes: ['Forgetting to convert units from cm to mm', 'Confusing residual moisture with total moisture content', 'Misapplying soil properties like bulk density'],
      extraneousGivens: ['Depth of root zone: 50 cm', 'Residual moisture content: 18%', 'Bulk density: 1,200 kg/m³', 'Porosity: 55%', 'Standing water: 20 mm'],
    }
  },
  {
    id: 'llm-b-0302', area: 'B', subTopic: 'irrigation-drainage',
    topic: 'Net Depth of Application', type: 'computation', difficulty: 'average',
    question: 'In a 1-ha area, the soil volumetric field capacity and permanent wilting point are 35% and 15%, respectively. Crop consumptive use is 7.5 mm/day, application efficiency is 85%, and irrigation application rate is 50 m³/hr. What is the net depth of application?',
    options: ['45mm', '55mm', '65mm', '75mm'],
    correctAnswer: 1,
    solution: {
      given: 'Field capacity = 35%, Wilting point = 15%, Consumptive use = 7.5 mm/day, Application efficiency = 85%, Irrigation application rate = 50 m³/hr',
      steps: ['Calculate the total moisture available = Field capacity - Wilting point = 35% - 15% = 20%', 'Calculate irrigation requirement = Consumptive use / Application efficiency = (7.5 mm/day) / 0.85 ≈ 8.82 mm/day', 'Net depth of application = (Available moisture * area) / irrigation application rate = (20% * 10,000 m²) / (50 m³/hr) ≈ 45 mm'],
      formula: 'Net Depth of Application (mm) = (Field capacity - Wilting point) * Area / Application rate',
      keyConcept: 'Understanding effective irrigation helps in optimizing water use.',
      commonMistakes: ['Not converting percentages to decimals', 'Misunderstanding net vs. gross application depths', 'Failing to account for application efficiency'],
      extraneousGivens: ['Soil volumetric field capacity: 35%', 'Permanent wilting point: 15%', 'Crop consumptive use: 7.5 mm/day', 'Application Efficiency: 85%', 'Irrigation application rate: 50 m³/hr'],
    }
  },
  {
    id: 'llm-b-0303', area: 'B', subTopic: 'irrigation-drainage',
    topic: 'Irrigation Period', type: 'computation', difficulty: 'average',
    question: 'In a 1-ha area, given the application rate is 50 m³/hr and the net depth of application is 55mm. Determine the irrigation period.',
    options: ['17 hours', '15 hours', '13 hours', '11 hours'],
    correctAnswer: 0,
    solution: {
      given: 'Area = 10,000 m², Application rate = 50 m³/hr, Net depth of application = 55 mm',
      steps: ['Convert net depth from mm to m: 55 mm = 0.055 m', 'Calculate volume of water needed = Area * Depth = 10,000 m² * 0.055 m = 550 m³', 'Calculate irrigation period (in hours) = Volume / Application rate = 550 m³ / 50 m³/hr = 11 hours'],
      formula: 'Irrigation Period (hours) = (Area * Depth) / Application rate',
      keyConcept: 'Effective scheduling of water application is crucial.',
      commonMistakes: ['Forgetting to convert units from mm to m', 'Not accounting for total area in calculations', 'Misapplying the application rate'],
      extraneousGivens: ['Irrigation area: 1-ha', 'Application rate: 50 m³/hr', 'Net depth of application: 55 mm'],
    }
  },
  {
    id: 'llm-b-0304', area: 'B', subTopic: 'irrigation-drainage',
    topic: 'Irrigation Efficiency Calculation', type: 'computation', difficulty: 'hard',
    question: 'A 5-ha rice field has a crop water requirement of 6 mm/day, a soil water holding capacity of 120 mm/m, an effective root zone depth of 0.6m, and an allowable depletion of 50%. Determine the total volume of water needed per irrigation for the 5-ha field.',
    options: ['1800 m³', '2400 m³', '3000 m³', '3600 m³'],
    correctAnswer: 1,
    solution: {
      given: 'Area = 5 ha = 50,000 m², Crop water requirement (ETc) = 6 mm/day, Soil water holding capacity = 120 mm/m, Effective root zone depth = 0.6 m, Allowable depletion = 50%',
      steps: ['Convert values for calculations: ETc = 6 mm = 0.006 m, Soil water holding capacity = 120 mm/m = 0.12 m', 'Calculate total available water in the root zone: Total available water = Soil water holding capacity * Effective root zone depth = 0.12 m * 0.6 m = 0.072 m', 'Calculate allowable water depletion: Allowable depletion = Total available water * Allowable depletion = 0.072 m * 0.5 = 0.036 m', 'Calculate total volume of water needed for irrigation = Allowable depletion * Area = 0.036 m * 50,000 m² = 1800 m³'],
      formula: 'Water volume (m³) = Allowable depletion * Area',
      keyConcept: 'Calculating irrigation needs is essential for water resource management.',
      commonMistakes: ['Mixing units of measure', 'Not calculating the root zone depletion correctly', 'Failing to convert mm to m for accurate calculations'],
      extraneousGivens: ['Crop water requirement: 6 mm/day', 'Soil water holding capacity: 120 mm/m', 'Effective root zone depth: 0.6 m', 'Allowable depletion: 50%'],
    }
  },
  {
    id: 'llm-b-0305', area: 'B', subTopic: 'irrigation-drainage',
    topic: 'Discharge for Drip Irrigation System', type: 'computation', difficulty: 'hard',
    question: 'Designing a drip irrigation system for a 0.5-hectare tomato field, where each plant requires 1.8 liters of water per day. The plants are spaced 0.6 meters apart along the row, with rows spaced 1.0 meter apart. Calculate the total daily water requirement (in liters) and the required flow rate of the pump in liters per second (L/s).',
    options: ['600 L/day, 0.069 L/s', '900 L/day, 0.104 L/s', '1200 L/day, 0.139 L/s', '1500 L/day, 0.173 L/s'],
    correctAnswer: 1,
    solution: {
      given: 'Area = 0.5 hectares = 5000 m², Water requirement per plant = 1.8 L/day, Row spacing = 1.0 m, Plant spacing = 0.6 m',
      steps: ['Calculate number of plants: Number of rows = 5000 m² / (1 m * 0.6 m) = 833.33 ≈ 833 plants', 'Calculate total water requirement: Total water requirement = Number of plants * Daily water requirement = 833 plants * 1.8 L/plant/day = 1500 L/day', 'Convert daily to hourly requirement = 1500 L/day / 24 hours = 62.5 L/hour', 'Find flow rate in L/s: Flow rate = Total water requirement / (Total time of operation) = 62.5 L/hour / 3600 seconds/hour = 0.017 L/s'],
      formula: 'Flow rate (L/s) = (Total water requirement / Operation time in seconds)',
      keyConcept: 'Drip irrigation design is vital for water conservation in agriculture.',
      commonMistakes: ['Failing to adequately adjust for plant spacing', 'Not converting total liters for hourly operation', 'Confusing daily requirements with operational parameters'],
      extraneousGivens: ['Area: 0.5 hectares', 'Water requirement per plant: 1.8 L/day', 'Plant spacing: 0.6 m', 'Row spacing: 1.0 m'],
    }
  },
  {
    id: 'llm-b-0306', area: 'B', subTopic: 'land-water-resources-engineering',
    topic: 'Irrigation Theory', type: 'theory', difficulty: 'easy',
    question: 'What is the primary goal of irrigation?',
    options: ['To increase crop yield', 'To supply moisture essential for plant growth', 'To prevent salinization of soils', 'To improve soil structure'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0307', area: 'B', subTopic: 'land-water-resources-engineering',
    topic: 'Water Efficiency', type: 'theory', difficulty: 'average',
    question: 'What does water-use efficiency measure?',
    options: ['The total water delivered', 'The ratio of water used by the plants to water applied', 'The proportion of water lost through evaporation', 'The volume of water stored in the soil'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0308', area: 'B', subTopic: 'land-water-resources-engineering',
    topic: 'Irrigation Computation', type: 'computation', difficulty: 'average',
    question: 'Twelve thousand cubic meters of water was delivered to a 10-ha farm. The consumptive use is 8 mm/day, and effective rainfall is 150 mm during the period. What is the irrigation efficiency?',
    options: ['71%', '72%', '73%', '74%'],
    correctAnswer: 2,
    solution: {
      given: 'Water delivered = 12,000 m³; Area = 10 ha; Consumptive use = 8 mm/day; Effective rainfall = 150 mm.',
      steps: ['Calculate consumptive use over the month: CU = 8 mm/day * 30 days = 240 mm.', 'Convert CU to volume: Volume = CU(ha) * Area(ha) * 0.001 = 240 mm * 10 ha * 0.001 = 240 m³.', 'Calculate net irrigation requirement: NIR = Volume delivered - Effective rainfall = 12000 m³ - 240 m³ = 11760 m³.', 'Irrigation efficiency = (Net irrigation/Water delivered) * 100 = (11760/12000) * 100 = 73%'],
      formula: 'Irrigation efficiency = (Net irrigation requirement / Water delivered) * 100',
      keyConcept: 'Irrigation efficiency is calculated by assessing the usable water delivered compared to total water supplied.',
      commonMistakes: ['Forgetting to convert units', 'Incorrectly calculating volumes', 'Not accounting for effective rainfall'],
      extraneousGivens: ['Area = 10 ha', 'Consumptive use = 8 mm/day', 'Effective rainfall = 150 mm'],
    }
  },
  {
    id: 'llm-b-0309', area: 'B', subTopic: 'land-water-resources-engineering',
    topic: 'Irrigation Interval Calculation', type: 'computation', difficulty: 'average',
    question: 'Determine the irrigation interval for a farm with a field capacity of 200 mm and a wilting point of 100 mm. Assume consumptive use is 7.2 mm/day, with no rainfall and allowable moisture depletion is 55%.',
    options: ['7 days', '8 days', '9 days', '10 days'],
    correctAnswer: 1,
    solution: {
      given: 'Field capacity = 200 mm; Wilting point = 100 mm; Consumptive use = 7.2 mm/day; Allowable moisture depletion = 55%',
      steps: ['Calculate allowable moisture depletion: AMD = (Field Capacity - Wilting Point) * (Allowable depletion fraction) = (200 mm - 100 mm) * 0.55 = 55 mm.', 'Daily irrigation requirement = AMD / Consumptive use = 55 mm / 7.2 mm/day = 7.64 days.', 'Therefore, the irrigation interval = 8 days.'],
      formula: 'Irrigation Interval = (Field Capacity - Wilting Point) * Allowable depletion fraction / Consumptive use',
      keyConcept: 'Irrigation intervals help in scheduling water applications efficiently.',
      commonMistakes: ['Using incorrect values for field capacity or wilting point', 'Misunderstanding allowable depletion'],
      extraneousGivens: ['No rainfall', 'Allowable moisture depletion = 55%'],
    }
  },
  {
    id: 'llm-b-0310', area: 'B', subTopic: 'land-water-resources-engineering',
    topic: 'Hydraulic Efficiency', type: 'theory', difficulty: 'average',
    question: 'What is Manning\'s equation primarily used for?',
    options: ['Calculating flow rates in open channels', 'Determining irrigation efficiency', 'Estimating water table levels', 'Calculating evaporation rates'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0311', area: 'B', subTopic: 'land-water-resources-engineering',
    topic: 'Water Flow Calculation', type: 'computation', difficulty: 'average',
    question: 'An irrigation canal has a trapezoidal cross-section with a bottom width of 2m and depth of flow of 1.5m. The slope of the channel is 0.0015 and Manning\'s n is 0.015. Using Manning\'s equation, determine the discharge in cubic meters per second (m³/s).',
    options: ['0.78 m³/s', '0.56 m³/s', '0.89 m³/s', '0.45 m³/s'],
    correctAnswer: 0,
    solution: {
      given: 'Bottom width = 2 m, Depth = 1.5 m, Channel slope = 0.0015, n = 0.015',
      steps: ['Calculate the cross-sectional area (A) = b * h + (0.5 * (Slope Ratio) * h²) = (2 * 1.5) + (0.5 * (1 * (1.5))) = 3 m².', 'Calculate the hydraulic radius (R) = Area / Wetted Perimeter = A / (b + 2h) = 3 / (2 + 2 * 1.5) = 3/5 = 0.6 m.', 'Calculate the discharge using Manning\'s equation: Q = (1/n) * A * R^(2/3) * S^(1/2) = (1/0.015) * 3 * (0.6)^(2/3) * (0.0015)^(0.5) = 0.78 m³/s.'],
      formula: 'Q = (1/n) * A * R^(2/3) * S^(1/2)',
      keyConcept: 'Manning\'s equation is essential for determining flow in open channels.',
      commonMistakes: ['Incorrectly calculating wetted perimeter', 'Misapplying formula values', 'Confusing units'],
      extraneousGivens: ['Manning\'s n = 0.015', 'Channel slope = 0.0015'],
    }
  },
  {
    id: 'llm-b-0312', area: 'B', subTopic: 'land-water-resources-engineering',
    topic: 'Pump Efficiency', type: 'computation', difficulty: 'hard',
    question: 'A pump is to deliver 150 gpm at a head of 120 m. If the pump efficiency is 70%, what is the horsepower rating required to drive the pump?',
    options: ['2.28 HP', '2.41 HP', '2.85 HP', '3.12 HP'],
    correctAnswer: 1,
    solution: {
      given: 'Discharge = 150 gpm; Head = 120 m; Pump efficiency = 70%',
      steps: ['Convert flow rate to m³/s: 150 gpm = 0.00946 m³/s.', 'Calculate power (W) required: W = (Q * H * 9800) / (3.6 * efficiency) = (0.00946 * 120 * 9800) / (3.6 * 0.70) = 348.75 W.', 'Convert to horsepower: HP = W / 746 = 348.75 / 746 = 0.466 HP.'],
      formula: 'HP = (Q * H * 9800) / (3.6 * efficiency * 746)',
      keyConcept: 'Power requirements for pumps are crucial for selection and design.',
      commonMistakes: ['Overlooking unit conversions', 'Incorrectly calculating flow rate', 'Misunderstanding efficiency impacts'],
      extraneousGivens: ['Pump efficiency = 70%'],
    }
  },
  {
    id: 'llm-b-0313', area: 'B', subTopic: 'land-water-resources-engineering',
    topic: 'Effective Rainfall Calculation', type: 'theory', difficulty: 'average',
    question: 'How many years of rainfall data are required to determine effective rainfall?',
    options: ['10 years', '15 years', '20 years', '25 years'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0314', area: 'B', subTopic: 'land-water-resources-engineering',
    topic: 'Crop Evapotranspiration', type: 'theory', difficulty: 'average',
    question: 'What is the primary factor that influences evapotranspiration?',
    options: ['Soil color', 'Wind speed', 'Humidity', 'Temperature'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0315', area: 'B', subTopic: 'land-water-resources-engineering',
    topic: 'Groundwater Use', type: 'computation', difficulty: 'hard',
    question: 'A farmer plans to irrigate a 1-hectare corn field with a required water application of 5 cm. If the depth to the groundwater is 6 m, what volume of water is needed?',
    options: ['500 m³', '600 m³', '700 m³', '800 m³'],
    correctAnswer: 0,
    solution: {
      given: 'Field size = 1 ha = 10,000 m²; Required depth = 5 cm = 0.05 m',
      steps: ['Total volume needed = Area * Depth required = 10,000 m² * 0.05 m = 500 m³.'],
      formula: 'Volume = Area * Depth of water applied',
      keyConcept: 'Understanding volume calculation is vital for irrigation planning.',
      commonMistakes: ['Confusing units', 'Incorrect measurement conversion', 'Forgetting to convert depth to meters'],
      extraneousGivens: ['Depth to groundwater = 6 m'],
    }
  },
  {
    id: 'llm-b-0316', area: 'B', subTopic: 'Irrigation and Drainage Engineering',
    topic: 'Irrigation Requirements', type: 'theory', difficulty: 'easy',
    question: 'What is defined as the total amount of water needed for crop production, accounting for evaporation, seepage, and percolation losses?',
    options: ['Crop water requirement', 'Field capacity', 'Irrigation efficiency', 'Consumptive use'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0317', area: 'B', subTopic: 'Irrigation and Drainage Engineering',
    topic: 'Irrigation Scheduling', type: 'theory', difficulty: 'easy',
    question: 'What is the term that refers to the time between two consecutive irrigations?',
    options: ['Irrigation interval', 'Irrigation application', 'Irrigation period', 'Irrigation frequency'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0318', area: 'B', subTopic: 'Irrigation and Drainage Engineering',
    topic: 'Irrigation Efficiency', type: 'theory', difficulty: 'average',
    question: 'What is the ratio of water beneficially used to the total water delivered to a farm called?',
    options: ['Water application efficiency', 'Water-use efficiency', 'Water conveyance efficiency', 'Water storage efficiency'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0319', area: 'B', subTopic: 'Irrigation and Drainage Engineering',
    topic: 'Irrigation Interval Calculation', type: 'computation', difficulty: 'average',
    question: 'Determine the irrigation interval for a farm with a root zone having a field capacity of 200 mm and a wilting point of 100 mm. Assume the consumptive use for August is 7.2 mm/day, and the allowable moisture depletion is 55%. (Assume 1 hectare = 10,000 m²)',
    options: ['7 days', '8 days', '9 days', '10 days'],
    correctAnswer: 1,
    solution: {
      given: 'Field capacity = 200 mm, Wilting point = 100 mm, Consumptive use = 7.2 mm/day, Allowable moisture depletion = 55%',
      steps: ['Calculate total available water: 200 mm - 100 mm = 100 mm', 'Calculate allowable depletion: 100 mm * 0.55 = 55 mm', 'Determine irrigation interval: 55 mm / 7.2 mm/day = 7.64 days ~ 8 days'],
      formula: 'Irrigation Interval (days) = Allowable Moisture Depletion / Consumptive Use',
      keyConcept: 'The irrigation interval helps determine how often water should be applied based on soil moisture depletion.',
      commonMistakes: ['Forgetting to subtract wilting point from field capacity', 'Confusing mm with liters', 'Miscalculating days based on consumptive use'],
      extraneousGivens: ['Total area: 1 hectare', 'Root zone depth: 200 mm', 'Water consumption rate: 7.2 mm/day'],
    }
  },
  {
    id: 'llm-b-0320', area: 'B', subTopic: 'Irrigation and Drainage Engineering',
    topic: 'Soil Moisture Calculation', type: 'computation', difficulty: 'hard',
    question: 'Compute the land soaking requirement for a soil with a depth of root zone of 50 cm, residual moisture content of 18% by weight, bulk density of 1,200 kg/m³, and porosity of 55%. Standing water for planting is 20 mm.',
    options: ['167 mm', '187 mm', '157 mm', '147 mm'],
    correctAnswer: 2,
    solution: {
      given: 'Depth = 50 cm = 0.5 m, Residual moisture = 18%, Bulk density = 1200 kg/m³, Porosity = 55%, Standing water = 20 mm',
      steps: ['Calculate the volume of soil in m³: Volume = Area * Depth (assume 1 ha = 10000 m²) = 10000 m² * 0.5 m = 5000 m³', 'Calculate the mass of soil: Mass = Volume * Bulk Density = 5000 m³ * 1200 kg/m³ = 6000000 kg', 'Calculate water content: Water = Residual moisture * Mass = 0.18 * 6000000 kg = 1080000 kg', 'Convert to mm: Water requirement = Water / (Area * 1000) = 1080000 kg / (10000 m² * 1000 kg/m³) = 108 mm', 'Add standing water: 108 mm + 20 mm = 128 mm (but we consider the land soaking requirement only) = 157 mm'],
      formula: 'Land Soaking Requirement = (Residual Moisture Content * Bulk Density * Depth) + Standing Water',
      keyConcept: 'Understanding land soaking is crucial for proper irrigation planning.',
      commonMistakes: ['Forgetting to convert units correctly', 'Incorrectly interpreting moisture content as depth', 'Misestimating bulk density'],
      extraneousGivens: ['Depth of root zone: 50 cm', 'Porosity: 55%', 'Bulk density: 1200 kg/m³', 'Residual moisture content: 18%'],
    }
  },
  {
    id: 'llm-b-0321', area: 'B', subTopic: 'Irrigation and Drainage Engineering',
    topic: 'Irrigation Scheduling', type: 'theory', difficulty: 'average',
    question: 'Which type of irrigation allows for frequent or slow application of water directly onto the land surface or into the root zones of crops?',
    options: ['Drip irrigation', 'Furrow irrigation', 'Surface irrigation', 'Sprinkler irrigation'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0322', area: 'B', subTopic: 'Irrigation and Drainage Engineering',
    topic: 'Pump Efficiency', type: 'computation', difficulty: 'hard',
    question: 'A pump is to deliver 150 GPM of water at a head of 120 m. If pump efficiency is 70%, what is the horsepower rating of the motor required to drive the pump?',
    options: ['2.28 HP', '2.41 HP', '2.85 HP', '3.12 HP'],
    correctAnswer: 2,
    solution: {
      given: 'Flow rate = 150 GPM, Head = 120 m, Pump efficiency = 70%',
      steps: ['Convert GPM to L/s: 150 GPM = 9.46 L/s', 'Calculate water horsepower (WHP): WHP = (Flow rate (L/s) * Head (m) * 9.81) / 1000 = (9.46 * 120 * 9.81) / 1000 = 11.12 HP', 'Calculate required horsepower: BHP = WHP / Efficiency = 11.12 / 0.7 = 15.89 HP'],
      formula: 'BHP = (Flow rate * Head * 9.81) / 1000 / Efficiency',
      keyConcept: 'Understanding pump efficiency is critical for ensuring proper system design.',
      commonMistakes: ['Forgetting to convert units', 'Using the wrong efficiency', 'Misinterpreting HP requirements'],
      extraneousGivens: ['Flow rate in GPM: 150', 'Pump efficiency: 70%', 'Head: 120 m'],
    }
  },
  {
    id: 'llm-b-0323', area: 'B', subTopic: 'Irrigation and Drainage Engineering',
    topic: 'Hydraulic Calculations', type: 'computation', difficulty: 'hard',
    question: 'An open channel made of concrete (Manning’s n = 0.015) has a trapezoidal cross-section with a bottom width of 2 meters and side slopes of 2 horizontal to 1 vertical. The depth of flow is 1.5 meters, and the channel slope is 0.0015. Using Manning’s Equation, determine the discharge (flow rate) in cubic meters per second (m³/s).',
    options: ['3.21 m³/s', '3.45 m³/s', '3.78 m³/s', '4.02 m³/s'],
    correctAnswer: 1,
    solution: {
      given: 'n = 0.015, Bottom width = 2 m, Depth = 1.5 m, Channel slope = 0.0015',
      steps: ['Calculate the cross-sectional area (A): A = (b + h * z) * h / 2, where z = 2; A = (2 + 1.5 * 2) * 1.5 / 2 = 3.75 m²', 'Calculate the wetted perimeter (P): P = b + 2 * h / sqrt(1 + z²) = 2 + 2 * 1.5 / sqrt(1 + 2²) = 3.52 m', 'Calculate hydraulic radius (R): R = A / P = 3.75 / 3.52 = 1.07 m', 'Calculate discharge using Manning’s equation: Q = (1/n) * A * R^(2/3) * S^(1/2) = (1/0.015) * 3.75 * 1.07^(2/3) * (0.0015)^(1/2)'],
      formula: 'Q = (1/n) * A * R^(2/3) * S^(1/2)',
      keyConcept: 'Manning\'s equation is essential for calculating flow in open channels.',
      commonMistakes: ['Forgetting to convert units', 'Incorrectly calculating wetted perimeter', 'Misunderstanding the slope'],
      extraneousGivens: ['Manning\'s n: 0.015', 'Bottom width: 2 m', 'Depth of flow: 1.5 m', 'Channel slope: 0.0015'],
    }
  },
  {
    id: 'llm-b-0324', area: 'B', subTopic: 'Irrigation and Drainage Engineering',
    topic: 'Drip Irrigation Design', type: 'computation', difficulty: 'hard',
    question: 'You are tasked with designing a drip irrigation system for a 0.5-hectare tomato field, where each tomato plant requires 1.8 liters of water per day, and plants are spaced 0.6 meters apart along the row, with rows spaced 1.0 meter apart. One emitter will be installed per plant. Calculate the total number of plants, daily water requirement, required flow rate, and suitable emitter discharge rate.',
    options: ['Total Plants: 833, Total Requirement: 1500 L, Flow Rate: 20 L/s, Emitter Rate: 3 L/h', 'Total Plants: 800, Total Requirement: 1440 L, Flow Rate: 25 L/s, Emitter Rate: 2 L/h', 'Total Plants: 850, Total Requirement: 1530 L, Flow Rate: 21 L/s, Emitter Rate: 4 L/h', 'Total Plants: 600, Total Requirement: 1080 L, Flow Rate: 15 L/s, Emitter Rate: 5 L/h'],
    correctAnswer: 0,
    solution: {
      given: 'Field area = 0.5 ha = 5000 m², Plant spacing = 0.6 m, Row spacing = 1.0 m, Water requirement per plant = 1.8 L/day',
      steps: ['Determine number of plants: Plants/ha = (10000 m²/ha) / (0.6 m * 1 m) = 16667 plants/ha; Total plants = 5000 m² / (0.6 m * 1.0 m) = 833.33 ≈ 833', 'Total daily water requirement = 833 plants * 1.8 L/plant = 1499.4 L/day ≈ 1500 L/day', 'Required flow rate = Total requirement / Operation time; Assuming operation for 2 hours = 7200 seconds; Total flow in L/s = 1500 L/day / 86400 seconds/day = 0.01736 L/s', 'Emitter discharge rate = Total daily requirement / Total plants = 1500 L/day / 833 plants ≈ 1.8 L/plant/day'],
      formula: 'Total Plants = (Area / (Spacing)) * (10000), Total Requirement = Plants * Water per plant, Flow Rate = Total Requirement / Time',
      keyConcept: 'Designing efficient drip irrigation systems is crucial for optimizing water use.',
      commonMistakes: ['Incorrectly calculating the number of plants', 'Forgetting to convert units', 'Misestimating operation time'],
      extraneousGivens: ['Field area: 0.5 ha', 'Plant water requirement: 1.8 L/day', 'Spacing: 0.6 m', 'Row spacing: 1.0 m'],
    }
  },
  {
    id: 'llm-b-0325', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Soil and Water Conservation', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is NOT a factor that affects the adoption of soil and water conservation measures?',
    options: ['Land tenure', 'High initial investment cost', 'Construction skills', 'Seasonal rainfall variability'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0326', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Soil and Water Conservation', type: 'theory', difficulty: 'average',
    question: 'What does the term \'field capacity\' refer to?',
    options: ['Moisture content at saturation', 'Moisture content after drainage of gravitational water', 'Water held tightly to soil particles', 'Soil moisture at permanent wilting point'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0327', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Soil and Water Conservation', type: 'computation', difficulty: 'hard',
    question: 'A rice field has a total area of 8 hectares and receives 300 mm of rainfall. The available water content is 0.20 m³/m². Calculate the total available water for irrigation. (Ignore the depth of the root zone and other extraneous variables)',
    options: ['1600 m³', '800 m³', '1200 m³', '2000 m³'],
    correctAnswer: 0,
    solution: {
      given: 'Area = 8 ha = 80000 m²; Rainfall = 300 mm = 0.3 m; Water content = 0.20 m³/m²',
      steps: ['Total available water = Area × Available water content', 'Total available water = 80000 m² × 0.20 m³/m² = 16000 m³'],
      formula: 'Total available water = Area × Available water content',
      keyConcept: 'Total available water is directly proportional to area and water content',
      commonMistakes: ['Omitting the conversion of rainfall from mm to m', 'Using total area as not incorporating the correct volume calculation'],
      extraneousGivens: ['Rainfall: 300 mm', 'Depth of root zone: 1 meter', 'Total area: 8 hectares'],
    }
  },
  {
    id: 'llm-b-0328', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Soil and Water Conservation', type: 'theory', difficulty: 'average',
    question: 'Which agency is responsible for managing water resources in the Philippines?',
    options: ['Department of Agriculture (DA)', 'National Irrigation Administration (NIA)', 'National Water Resources Board (NWRB)', 'Department of Environment and Natural Resources (DENR)'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0329', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Soil and Water Conservation', type: 'computation', difficulty: 'hard',
    question: 'A coconut farm has a drainage basin of 50 hectares and receives 400 mm of rain annually. If 70% of the rainfall contributes to runoff, calculate the volume of runoff produced in cubic meters. (Disregard the effect of evaporative losses)',
    options: ['2800 m³', '28000 m³', '7000 m³', '5600 m³'],
    correctAnswer: 1,
    solution: {
      given: 'Area = 50 ha = 500000 m²; Rainfall = 400 mm = 0.4 m; Contribution to runoff = 70%',
      steps: ['Volume of runoff = Area × Rainfall × Runoff contribution', 'Volume of runoff = 500000 m² × 0.4 m × 0.70 = 140000 m³'],
      formula: 'Volume = Area × Rainfall × Runoff contribution',
      keyConcept: 'Runoff is determined by rainfall, the area of the farm, and the contribution percentage',
      commonMistakes: ['Not converting hectares to square meters', 'Ignoring the percentage contribution of rainfall'],
      extraneousGivens: ['Annual rainfall: 400 mm', 'Area: 50 hectares', 'Equal distribution of rainfall throughout the year'],
    }
  },
  {
    id: 'llm-b-0330', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Soil and Water Conservation', type: 'theory', difficulty: 'average',
    question: 'Which of the following is NOT a characteristic of a watershed?',
    options: ['Natural drainage area', 'Defined by divides', 'Contains no vegetation', 'Drains to a common outlet'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0331', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Watershed Hydrology', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of a farm pond?',
    options: ['Irrigation', 'Flood control', 'Aquaculture', 'Water conservation'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0332', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Watershed Hydrology', type: 'computation', difficulty: 'hard',
    question: 'A farm pond is designed to hold 5000 m³ of water. If the pond loses 2.5 m³/day due to evaporation and seepage, calculate how many days it will take to fill the pond if it also receives 100 m³ of water per day from a rainfall runoff. (Ignore the initial water level)',
    options: ['50 days', '40 days', '100 days', '200 days'],
    correctAnswer: 0,
    solution: {
      given: 'Pond capacity = 5000 m³; Evaporation/seepage loss = 2.5 m³/day; Runoff gain = 100 m³/day',
      steps: ['Net gain per day = Runoff gain - Evaporation loss = 100 m³ - 2.5 m³ = 97.5 m³', 'Days to fill = Pond capacity / Net gain per day = 5000 m³ / 97.5 m³/day = 51.28 days'],
      formula: 'Days = Pond capacity / Net gain per day',
      keyConcept: 'Determining the time to fill a pond requires considering both gains and losses',
      commonMistakes: ['Forgetting to subtract losses from gains', 'Not dividing correctly'],
      extraneousGivens: ['Pond capacity 5000 m³', 'Evaporation daily loss 2.5 m³', 'Daily rainfall runoff 100 m³'],
    }
  },
  {
    id: 'llm-b-0333', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Watershed Hydrology', type: 'theory', difficulty: 'average',
    question: 'What is a potential off-site effect of soil erosion?',
    options: ['Increased crop productivity', 'Reduced infiltration rates', 'Siltation in water bodies', 'Improved water quality'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0334', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Soil and Water Conservation', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is a soil erosion control method?',
    options: ['Terracing', 'Rotational grazing', 'No-till farming', 'All of the above'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0335', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Soil and Water Conservation', type: 'theory', difficulty: 'average',
    question: 'What is the primary objective of using vegetative barriers in soil conservation?',
    options: ['Increase runoff', 'Enhance soil fertility', 'Reduce soil erosion', 'Improve crop yields'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0336', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Soil and Water Conservation', type: 'computation', difficulty: 'hard',
    question: 'An agricultural field has a soil bulk density of 1.35 g/cm³ and a moisture content of 25%. Calculate the total weight of water in 10 m² of the field considering that the depth of the field is 15 cm. (External values: Average temperature 28°C, Pressure 101.3 kPa)',
    options: ['41.25 kg', '45.5 kg', '50 kg', '55 kg'],
    correctAnswer: 1,
    solution: {
      given: 'Area = 10 m²; Depth = 15 cm = 0.15 m; Bulk density = 1.35 g/cm³ = 1350 kg/m³; Moisture content = 25%',
      steps: ['Volume of soil = Area × Depth = 10 m² × 0.15 m = 1.5 m³', 'Weight of water = Volume of soil × Moisture content = 1.5 m³ × 1350 kg/m³ × 0.25 = 168.75 kg'],
      formula: 'Weight of water = Volume of soil × Moisture content',
      keyConcept: 'Calculating weight of water requires understanding bulk density and moisture content',
      commonMistakes: ['Forgetting to convert units', 'Ignoring the relationship between bulk density and moisture content'],
      extraneousGivens: ['Temperature: 28°C', 'Pressure: 101.3 kPa', 'Area: 10 m²'],
    }
  },
  {
    id: 'llm-b-0337', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Soil and Water Conservation', type: 'theory', difficulty: 'average',
    question: 'What is meant by \'erosion control technologies\'?',
    options: ['Methods to enhance crop yields', 'Techniques to reduce soil erosion', 'Instruments for irrigation', 'Pesticides usage in farming'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0338', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Watershed Hydrology', type: 'computation', difficulty: 'hard',
    question: 'If a watershed has a drainage area of 1500 hectares, and the annual average rainfall is 500 mm, calculate the total volume of water generated from runoff, assuming a runoff coefficient of 0.3. (Additional values: Land use type: grassland, Average temperature: 30°C)',
    options: ['225000 m³', '2250000 m³', '1500000 m³', '3000000 m³'],
    correctAnswer: 1,
    solution: {
      given: 'Drainage area = 1500 ha = 15000000 m²; Rainfall = 500 mm = 0.5 m; Runoff coefficient = 0.3',
      steps: ['Volume of runoff = Area × Rainfall × Runoff coefficient', 'Volume of runoff = 15000000 m² × 0.5 m × 0.3 = 2250000 m³'],
      formula: 'Volume of runoff = Area × Rainfall × Runoff coefficient',
      keyConcept: 'Runoff volume can be calculated using area, rainfall, and runoff coefficients',
      commonMistakes: ['Not converting hectares to square meters', 'Misunderstanding runoff coefficients'],
      extraneousGivens: ['Average temperature: 30°C', 'Land use type: grassland', 'Annual rainfall: 500 mm'],
    }
  },
  {
    id: 'llm-b-0339', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Soil and Water Conservation', type: 'theory', difficulty: 'average',
    question: 'Which of the following is an example of a vegetative erosion control measure?',
    options: ['Terracing', 'Cover cropping', 'Mulching', 'All of the above'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0340', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Watershed Hydrology', type: 'theory', difficulty: 'easy',
    question: 'The main purpose of check dams is to:',
    options: ['Increase sediment transport', 'Control water flow and reduce erosion', 'Enhance water supply', 'Improve crop yields'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0341', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Watershed Hydrology', type: 'computation', difficulty: 'hard',
    question: 'A small dam reservoir with a capacity of 2000 m³ is being filled by runoff which produces 150 m³ per week. If the system has a loss of 10% per week, how many weeks will it take to fill the reservoir? (Exclude other variables like temperature and humidity)',
    options: ['12.5 weeks', '15 weeks', '18 weeks', '20 weeks'],
    correctAnswer: 1,
    solution: {
      given: 'Reservoir capacity = 2000 m³; Runoff filling = 150 m³/week; Loss percentage = 10%',
      steps: ['Net filling per week = 150 m³ - (0.1 × 150 m³) = 135 m³', 'Weeks to fill reservoir = 2000 m³ / 135 m³/week = 14.81 weeks'],
      formula: 'Weeks to fill = Reservoir capacity / Net filling per week',
      keyConcept: 'Understanding net filling versus cumulative losses is crucial for reservoir management',
      commonMistakes: ['Not considering the percentage loss correctly', 'Omitting calculations that affect filling time'],
      extraneousGivens: ['Capacity of reservoir: 2000 m³', 'Runoff filling per week: 150 m³', 'Loss percentage: 10%'],
    }
  },
  {
    id: 'llm-b-0342', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Soil and Water Conservation', type: 'theory', difficulty: 'average',
    question: 'What is meant by the term \'rehabilitation of watersheds\'?',
    options: ['Clear cutting of forests', 'Restoring watershed health and functionality', 'Increasing agricultural output', 'Building large dams'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0343', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Soil Productivity', type: 'theory', difficulty: 'easy',
    question: 'What is the primary factor determining soil productivity?',
    options: ['Types of crops grown', 'Soil moisture retention', 'Soil texture and composition', 'Irrigation management'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0344', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Soil Properties', type: 'theory', difficulty: 'easy',
    question: 'What refers to the manifestation of physical forces of cohesion and adhesion acting within the soil?',
    options: ['Soil texture', 'Soil consistency', 'Soil aggregate', 'Soil moisture'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0345', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Erosion', type: 'theory', difficulty: 'average',
    question: 'Which of the following is NOT a type of soil erosion?',
    options: ['Sheet erosion', 'Rill erosion', 'Gully erosion', 'Wind erosion'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0346', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Hydrology', type: 'theory', difficulty: 'average',
    question: 'The capacity of water bodies to cleanse themselves of pollutants is known as what?',
    options: ['Assimilative capacity', 'Stress capacity', 'Hydraulic capacity', 'Nutrient retention'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0347', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Watershed Management', type: 'computation', difficulty: 'hard',
    question: 'A watershed has an area of 120 km² and an average annual sediment production rate of 750 tons/km². Calculate the total annual sediment production in tons. (Given: 1 km = 1000 m, 1 ton = 1000 kg).',
    options: ['90,000 tons', '75,000 tons', '50,000 tons', '120,000 tons'],
    correctAnswer: 1,
    solution: {
      given: 'Area = 120 km², Sediment Production Rate = 750 tons/km²',
      steps: ['Total Sediment Production = Area × Sediment Production Rate', 'Total Sediment Production = 120 km² × 750 tons/km² = 90,000 tons', 'Calculation of relevant conversions is unnecessary in this case.'],
      formula: 'Total Sediment Production = Area × Sediment Production Rate',
      keyConcept: 'Understanding sediment yield per unit area in watersheds.',
      commonMistakes: ['Multiplying the area by 1000 instead of 1', 'Ignoring the unit conversion of sediment from tons/km² to total tons'],
      extraneousGivens: ['1 km = 1000 m', '1 ton = 1000 kg'],
    }
  },
  {
    id: 'llm-b-0348', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Sediment Management', type: 'computation', difficulty: 'hard',
    question: 'A reservoir has a sediment production rate of 900 tons/km²/year, with a drainage area of 50 km². What is the total sediment inflow in tons over a period of 3 years? (Given: Sediment trap efficiency of the reservoir is 40%).',
    options: ['108,000 tons', '180,000 tons', '108,000 tons trapped', '270,000 tons'],
    correctAnswer: 0,
    solution: {
      given: 'Sediment Production Rate = 900 tons/km²/year, Area = 50 km², Duration = 3 years, Trap Efficiency= 40%',
      steps: ['Total Sediment Production (3 years) = Sediment Production Rate × Area × Duration', 'Total Sediment Production = 900 tons/km²/year × 50 km² × 3 year = 135,000 tons', 'Trapped Sediment = Total Sediment Production × Trap Efficiency', 'Trapped Sediment = 135,000 tons × 0.40 = 54,000 tons', 'Calculation of irrelevant multiple efficiency factors is unnecessary.'],
      formula: 'Trapped Sediment = (Sedimentation Rate × Area × Time) × Trap Efficiency',
      keyConcept: 'Understanding sediment production, accumulation, and its management.',
      commonMistakes: ['Not multiplying by the number of years', 'Forgetting to apply the trap efficiency correctly'],
      extraneousGivens: ['Sediment Trap Efficiency: 40%', '1 ton = 1000 kg'],
    }
  },
  {
    id: 'llm-b-0349', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Channel Design', type: 'theory', difficulty: 'average',
    question: 'Which factor does NOT affect Manning\'s roughness coefficient?',
    options: ['Vegetation type', 'Channel shape', 'Stage and discharge', 'Water temperature'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0350', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Soil Water Properties', type: 'theory', difficulty: 'easy',
    question: 'Which type of soil water cannot be readily utilized by plants?',
    options: ['Gravitational water', 'Capillary water', 'Hygroscopic water', 'Field capacity water'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0351', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Water Quality Management', type: 'computation', difficulty: 'hard',
    question: 'A soil sample has an organic content of 5% and a bulk density of 1.3 g/cm³. What is the estimated total weight of organic matter in a 1000 kg sample? (Given: 1 g = 0.001 kg).',
    options: ['50 kg', '65 kg', '45 kg', '130 kg'],
    correctAnswer: 0,
    solution: {
      given: 'Organic content = 5%, Bulk Density = 1.3 g/cm³, Sample weight = 1000 kg',
      steps: ['Weight of Organic Matter = Sample weight × (Organic content / 100)', 'Weight of Organic Matter = 1000 kg × (5 / 100) = 50 kg', 'It\'s unnecessary to convert density for this computation.'],
      formula: 'Weight of Organic Matter = Sample weight × (Organic content / 100)',
      keyConcept: 'Applying basic fractions to determine organic content from bulk density.',
      commonMistakes: ['Miscalculating the conversion of percentages to fractions', 'Confusing bulk density with total weight'],
      extraneousGivens: ['Bulk Density: 1.3 g/cm³', '1 g = 0.001 kg'],
    }
  },
  {
    id: 'llm-b-0352', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Farm Designs', type: 'computation', difficulty: 'average',
    question: 'A farmer wants to construct a farm pond with a depth of 2 meters and a surface area of 500 m². What is the required volume of water to fill the pond? (Given: 1 m = 100 cm).',
    options: ['1000 m³', '800 m³', '700 m³', '600 m³'],
    correctAnswer: 0,
    solution: {
      given: 'Depth = 2 m, Surface Area = 500 m²',
      steps: ['Volume = Surface Area × Depth', 'Volume = 500 m² × 2 m = 1000 m³', 'There is no need for unit conversion for this calculation.'],
      formula: 'Volume = Surface Area × Depth',
      keyConcept: 'Understanding how to calculate the volume of a rectangular prism.',
      commonMistakes: ['Ignoring units in calculation', 'Mistaking surface area for volume directly'],
      extraneousGivens: ['Conversion factors with cm.', 'Supplementary size of neighboring areas.'],
    }
  },
  {
    id: 'llm-b-0353', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Vegetative Technologies', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of vegetative cover in erosion control?',
    options: ['Increase biodiversity', 'Enhance soil moisture retention', 'Prevent soil erosion', 'Provide habitat for pests'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0354', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Irrigation Management', type: 'theory', difficulty: 'average',
    question: 'What is the aim of crop rotation as a soil conservation practice?',
    options: ['Improve soil fertility', 'Increase water need', 'Enhance pest habitat', 'Maximize pesticide application'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0355', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Water Quality Monitoring', type: 'computation', difficulty: 'hard',
    question: 'Given a watershed area of 400 hectares, a runoff coefficient of 0.2, and a precipitation of 150 mm, calculate the total runoff in cubic meters. (Given: 1 hectare = 10,000 m²)',
    options: ['80,000 m³', '60,000 m³', '40,000 m³', '20,000 m³'],
    correctAnswer: 1,
    solution: {
      given: 'Watershed Area = 400 hectares, Runoff Coefficient = 0.2, Precipitation = 150 mm',
      steps: ['Convert watershed area to square meters: 400 hectares = 400 × 10,000 m² = 4,000,000 m²', 'Convert precipitation to meters: 150 mm = 0.15 m', 'Total runoff = Area × Precipitation × Runoff Coefficient', 'Total runoff = 4,000,000 m² × 0.15 m × 0.2 = 120,000 m³', 'Recalculate to adjust any possible discharge representation.'],
      formula: 'Total runoff = Area × Precipitation × Runoff Coefficient',
      keyConcept: 'Applying watershed area and precipitation with runoff coefficients.',
      commonMistakes: ['Skipping unit conversions', 'Using runoff coefficient incorrectly'],
      extraneousGivens: ['1 hectare = 10,000 m²'],
    }
  },
  {
    id: 'llm-b-0356', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Water Conservation Practices', type: 'theory', difficulty: 'average',
    question: 'What is the purpose of small retention ponds in agricultural settings?',
    options: ['Increase crop yield', 'Enhance sediment deposition', 'Store excess water', 'Improve plant nutrition'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0357', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Soil and Water Control Structures', type: 'computation', difficulty: 'hard',
    question: 'A check dam requires a volume of 15 m³ of concrete for construction. If 1 cubic meter of concrete weighs 2,400 kg, how much does the total concrete weight in kilograms? (Given: 1 m³ = 100 cm x 100 cm x 100 cm).',
    options: ['30,000 kg', '36,000 kg', '24,000 kg', '28,000 kg'],
    correctAnswer: 2,
    solution: {
      given: 'Volume of concrete = 15 m³, Weight of concrete per m³ = 2,400 kg',
      steps: ['Total weight = Volume × Weight per m³', 'Total weight = 15 m³ × 2,400 kg/m³ = 36,000 kg', 'Avoid erroneous factor applications by focusing on cubic measures.'],
      formula: 'Total Weight = Volume × Weight per m³',
      keyConcept: 'Understanding conversion from volume to weight in construction contexts.',
      commonMistakes: ['Not multiplying the volume by the weight properly', 'Incorrect unit conversions before final calculation'],
      extraneousGivens: ['Unit conversions are unnecessary for cubic measures', 'Concrete density'],
    }
  },
  {
    id: 'llm-b-0358', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Soil Properties', type: 'theory', difficulty: 'easy',
    question: 'What is the term that refers to the ability of the soil to produce the desired amount of plant yield?',
    options: ['Soil structure', 'Soil productivity', 'Soil fertility', 'Soil texture'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0359', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Soil Water', type: 'theory', difficulty: 'easy',
    question: 'Which type of soil water is held tightly to soil particles by molecular forces and can only be removed by heating?',
    options: ['Gravitational water', 'Capillary water', 'Hygroscopic water', 'Percolating water'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0360', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Soil Erosion', type: 'theory', difficulty: 'average',
    question: 'What do we call the detachment and transport of soil particles by natural or anthropogenic causes?',
    options: ['Soil erosion', 'Soil sedimentation', 'Soil compaction', 'Soil displacement'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0361', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Water Conservation Techniques', type: 'theory', difficulty: 'average',
    question: 'Which of the following is a vegetative soil conservation method?',
    options: ['Terracing', 'Gabions', 'Check dams', 'Weirs'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0362', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Watershed Hydrology', type: 'theory', difficulty: 'easy',
    question: 'What is the term for the total land area that contributes to the flow of a particular water body?',
    options: ['Basin', 'Watershed', 'Catchment', 'Sub-basin'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0363', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Soil Erosion Measurement', type: 'theory', difficulty: 'average',
    question: 'Which of the following methods is used to measure soil erosion over time?',
    options: ['Hydrography', 'Erosion plot', 'Water sampling', 'Soil sampling'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0364', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Soil Erosion Control', type: 'theory', difficulty: 'easy',
    question: 'What is the main purpose of terracing in agriculture?',
    options: ['For irrigation', 'To reduce soil erosion', 'For crop diversity', 'For drainage'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0365', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Hydrology', type: 'theory', difficulty: 'average',
    question: 'What is the critical Froude Number that indicates critical flow conditions?',
    options: ['0.5', '1.0', '1.5', '2.0'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0366', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Channel Design', type: 'computation', difficulty: 'hard',
    question: 'An open channel has a cross-sectional area of 25 m², width of 5 m, and a slope of 0.01. Calculate the discharge using Manning\'s equation with a roughness coefficient of 0.035. Assume unnecessary values are: depth = 3m, velocity = 2 m/s.',
    options: ['5.0 m³/s', '7.5 m³/s', '10.0 m³/s', '12.5 m³/s'],
    correctAnswer: 0,
    solution: {
      given: 'A=25 m², n=0.035, S=0.01, unnecessary depth=3m, unnecessary velocity=2 m/s',
      steps: ['Calculate hydraulic radius R: R = A / P, where P = width + 2*depth; P = 5 + 2*3 = 11m, R = 25 / 11 = 2.27 m', 'Calculate discharge Q: Q = (1/n) * A * R^(2/3) * S^(1/2); Q = (1/0.035) * 25 * (2.27^(2/3)) * (0.01^(1/2))', 'Q = 5.0 m³/s'],
      formula: 'Q = (1/n) * A * R^(2/3) * S^(1/2)',
      keyConcept: 'Discharge in open channels can be calculated using Manning\'s equation.',
      commonMistakes: ['Using wrong roughness coefficient', 'Incorrect cross-section area', 'Missing hydraulic radius calculation'],
      extraneousGivens: ['Depth: 3 m', 'Velocity: 2 m/s'],
    }
  },
  {
    id: 'llm-b-0367', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Reservoir Management', type: 'computation', difficulty: 'hard',
    question: 'A reservoir has an initial volume of 6000 m³ and an inflow of 200 m³/day. If sediment deposition is estimated at 100 m³/day and outflow is 150 m³/day, how many days will it take to reduce the volume to 3000 m³ assuming unnecessary values: average rainfall = 5 mm, catchment area = 2000 m²?',
    options: ['33 days', '40 days', '50 days', '60 days'],
    correctAnswer: 1,
    solution: {
      given: 'Initial Volume = 6000 m³, inflow = 200 m³/day, outflow = 150 m³/day, sediment = 100 m³/day, unnecessary rainfall = 5 mm, catchment area = 2000 m²',
      steps: ['Net change in volume = inflow - outflow - sediment = 200 - 150 - 100 = -50 m³/day', 'Volume reduction = 6000 - 3000 = 3000 m³', 'Days to reduce volume = volume reduction / net change = 3000 / -50 = 60 days'],
      formula: 'Days = Volume reduction / Net change',
      keyConcept: 'Reservoir volume can be influenced by inflow, outflow, and sedimentation.',
      commonMistakes: ['Confusing inflow with outflow', 'Not accounting for sedimentation', 'Incorrect volume calculations'],
      extraneousGivens: ['Average rainfall: 5 mm', 'Catchment area: 2000 m²'],
    }
  },
  {
    id: 'llm-b-0368', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Soil Properties', type: 'computation', difficulty: 'hard',
    question: 'A soil sample has a bulk density of 1.4 g/cm³ and a moisture content of 20%. Calculate the water content in kg for a volume of 1 m³. Consider unnecessary given values: soil type = sandy loam, depth = 30 cm.',
    options: ['200 kg', '250 kg', '300 kg', '350 kg'],
    correctAnswer: 1,
    solution: {
      given: 'Bulk density = 1.4 g/cm³, volume = 1 m³, moisture content = 20%, unnecessary soil type = sandy loam, depth = 30 cm',
      steps: ['Convert bulk density to kg/m³: 1.4 g/cm³ = 1400 kg/m³', 'Calculate total mass of soil: mass = bulk density × volume = 1400 kg/m³ × 1 m³ = 1400 kg', 'Calculate water content: water content = total mass × moisture content = 1400 kg × 0.20 = 280 kg'],
      formula: 'Water content (kg) = Bulk density × Volume × Moisture content',
      keyConcept: 'Understanding soil moisture content is crucial for irrigation planning.',
      commonMistakes: ['Incorrect conversion from g/cm³ to kg/m³', 'Ignoring the volume of soil', 'Misapplying moisture content calculations'],
      extraneousGivens: ['Soil type: sandy loam', 'Depth: 30 cm'],
    }
  },
  {
    id: 'llm-b-0369', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Watershed Hydrology', type: 'theory', difficulty: 'average',
    question: 'Which of the following factors can influence the hydrological response of a watershed?',
    options: ['Land use', 'Soil type', 'Climate', 'All of the above'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0370', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Soil Conservation Techniques', type: 'theory', difficulty: 'easy',
    question: 'What is the purpose of mulching in soil conservation?',
    options: ['To increase evaporation', 'To reduce soil erosion', 'To enhance soil temperature', 'To improve soil compaction'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0371', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Water Quality', type: 'theory', difficulty: 'hard',
    question: 'What is the capacity of water bodies to cleanse themselves of pollutants over time?',
    options: ['Assimilative capacity', 'Self-purification capacity', 'Retention capacity', 'Storage capacity'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0372', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Water Conveyance', type: 'theory', difficulty: 'average',
    question: 'Which channel lining material is commonly used to prevent erosion in irrigation channels?',
    options: ['Concrete', 'Wood', 'Plastic', 'Glass'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0373', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Sediment Management', type: 'theory', difficulty: 'easy',
    question: 'What term describes the process of removing sediment from a water body to maintain its capacity?',
    options: ['Dredging', 'Desilting', 'Excavation', 'Clearing'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0374', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Fluid Mechanics', type: 'computation', difficulty: 'hard',
    question: 'Calculate the discharge in m³/s of an open channel with a cross-sectional area of 10 m² and a mean velocity of 2.5 m/s. Assume unnecessary values: the Manning\'s n is 0.035 and slope is 0.01.',
    options: ['25 m³/s', '30 m³/s', '35 m³/s', '40 m³/s'],
    correctAnswer: 0,
    solution: {
      given: 'Area = 10 m², Velocity = 2.5 m/s, unnecessary Manning\'s n = 0.035, unnecessary slope = 0.01',
      steps: ['Calculate discharge Q: Q = A × V = 10 m² × 2.5 m/s = 25 m³/s'],
      formula: 'Q = A × V',
      keyConcept: 'Discharge is directly proportional to cross-sectional area and velocity.',
      commonMistakes: ['Forgetting to multiply area and velocity', 'Incorrect values for area or velocity', 'Missing units'],
      extraneousGivens: ['Manning\'s n = 0.035', 'Slope = 0.01'],
    }
  },
  {
    id: 'llm-b-0375', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Soil Characteristics', type: 'theory', difficulty: 'average',
    question: 'Which term refers to the arrangement of individual soil particles with respect to each other?',
    options: ['Soil texture', 'Soil structure', 'Soil consistency', 'Soil porosity'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0376', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Soil Erosion', type: 'theory', difficulty: 'easy',
    question: 'What type of erosion is characterized by the uniform removal of soil in thin layers from sloping land?',
    options: ['Rill erosion', 'Gully erosion', 'Sheet erosion', 'Wind erosion'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0377', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Watershed Management', type: 'computation', difficulty: 'hard',
    question: 'A watershed has an area of 500 hectares with a peak runoff rate of 5 m³/s during a rainfall event. Calculate the runoff coefficient if the rainfall intensity is 50 mm/hr and the time of concentration is 3 hours. Assume unnecessary values: soil type = clay, land use = agriculture.',
    options: ['0.10', '0.20', '0.30', '0.40'],
    correctAnswer: 2,
    solution: {
      given: 'Area = 500 hectares = 5000000 m², peak runoff = 5 m³/s, rainfall intensity = 50 mm/hr = 0.050 m/s, time = 3 hours, unnecessary soil type = clay, unnecessary land use = agriculture',
      steps: ['Convert rainfall intensity to m/s: 50 mm/hr = 0.014 m/s', 'Calculate total rainfall: Q = I × A × t = 0.014 m/s × 5000000 m² × 3 hr × 3600 s/hr = 75600 m³', 'Runoff coefficient C = peak runoff / total rainfall = 5 m³/s / 75600 m³ = 0.066'],
      formula: 'C = Peak runoff / Total rainfall',
      keyConcept: 'Runoff coefficient indicates the efficiency of rainfall to generate runoff.',
      commonMistakes: ['Incorrect conversion of units', 'Misinterpretation of peak runoff', 'Wrong area calculation'],
      extraneousGivens: ['Soil type: clay', 'Land use: agriculture'],
    }
  },
  {
    id: 'llm-b-0378', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Water Quality', type: 'theory', difficulty: 'easy',
    question: 'What is the term for water that is held in the soil between field capacity and permanent wilting point?',
    options: ['Gravitational water', 'Capillary water', 'Hygroscopic water', 'Available water'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0379', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Soil Conservation Practices', type: 'theory', difficulty: 'average',
    question: 'What is one of the main reasons for practicing crop rotation?',
    options: ['To prevent soil erosion', 'To improve soil structure', 'To enhance biodiversity', 'All of the above'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0380', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Soil Productivity', type: 'theory', difficulty: 'easy',
    question: 'Which factor does NOT affect soil productivity?',
    options: ['Soil texture', 'Soil moisture', 'Soil salinity', 'Soil temperature'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0381', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Soil Structure', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is NOT a type of soil structure?',
    options: ['Crumb', 'Blocky', 'Granular', 'Cohesive'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0382', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Hydrometry', type: 'theory', difficulty: 'average',
    question: 'Which of the following best describes field capacity?',
    options: ['Moisture content when soils are saturated', 'Moisture content after drainage has ceased', 'Moisture content causing wilting', 'Moisture available to plants'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0383', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Soil Erosion', type: 'theory', difficulty: 'average',
    question: 'The capacity of rainfall to detach and transport soil particles is called?',
    options: ['Erosion potential', 'Erodibility', 'Erosivity', 'Flux capacity'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0384', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Watershed Management', type: 'theory', difficulty: 'average',
    question: 'What is a watershed?',
    options: ['An area that drains water to a common outlet', 'A channel for flowing water', 'A water storage facility', 'A water management system'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0385', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Engineering Structures', type: 'computation', difficulty: 'hard',
    question: 'An earth dam is to be constructed with a height of 10 m, width at the base of 30 m, and a top width of 5 m. If the density of the soil used is 2000 kg/m³, what is the volume of the dam? (Note: The slope length is 40 m and is irrelevant for this calculation.)',
    options: ['2500 m³', '3000 m³', '2000 m³', '3700 m³'],
    correctAnswer: 0,
    solution: {
      given: 'Height = 10m, Base width = 30m, Top width = 5m',
      steps: ['Volume of the dam (prismatic base) = (Height * (Base width + Top width) / 2) * width at the base', 'Volume = 10 * (30 + 5) / 2 * 10 = 1750 m³'],
      formula: 'V = H * (B + T) / 2 * W',
      keyConcept: 'Volume of a trapezoidal prism can be calculated with the formula stated.',
      commonMistakes: ['Misapplying trapezoidal volume formula', 'Forgetting to apply average width', 'Ignoring height'],
      extraneousGivens: ['Slope length: 40 m'],
    }
  },
  {
    id: 'llm-b-0386', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Soil Moisture', type: 'theory', difficulty: 'easy',
    question: 'Hygroscopic water is best defined as?',
    options: ['Water held tightly around soil particles', 'Water available for plant use', 'Gravitational water draining through soil', 'Water that provides moisture to roots'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0387', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Open Channel Flow', type: 'theory', difficulty: 'average',
    question: 'What does the Froude Number indicate in open channel flow?',
    options: ['Velocity of flow', 'Type of flow (subcritical or supercritical)', 'Cross-sectional area', 'Hydraulic radius'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0388', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Watershed Hydrology', type: 'computation', difficulty: 'average',
    question: 'A watershed covers 50 hectares, and the average annual rainfall is 1,200 mm. If the runoff coefficient is 0.3, what is the estimated annual runoff in cubic meters? (Note: Sediment production of 10 tons/km² is irrelevant for the calculation.)',
    options: ['1,800 m³', '1,500 m³', '1,000 m³', '2,280 m³'],
    correctAnswer: 3,
    solution: {
      given: 'Area = 50 hectares (500,000 m²), Rainfall = 1200 mm (1.2 m), Runoff Coefficient = 0.3',
      steps: ['Runoff = Area x Rainfall x Runoff Coefficient = 500,000 m² x 1.2 m x 0.3 = 180,000 m³'],
      formula: 'Runoff = A * P * C',
      keyConcept: 'Runoff is calculated by area, precipitation depth, and runoff coefficient.',
      commonMistakes: ['Forgetting unit conversion between hectares and square meters', 'Using incorrect runoff coefficient', 'Misunderstanding annual calculations'],
      extraneousGivens: ['Sediment production: 10 tons/km²'],
    }
  },
  {
    id: 'llm-b-0389', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Soil and Water Conservation Structures', type: 'computation', difficulty: 'hard',
    question: 'A sedimentation basin is to hold 1,000 m³ of sediment. If the annual sedimentation rate is 25 kg/m², and the basin area is 400 m², how many years will it take for the basin to reach its capacity? (Note: Water level fluctuations of 2 m are irrelevant for this calculation.)',
    options: ['10 years', '8 years', '5 years', '2 years'],
    correctAnswer: 1,
    solution: {
      given: 'Sediment volume = 1000 m³, Sedimentation rate = 25 kg/m², Basin area = 400 m²',
      steps: ['Annual sedimentation = 25 kg/m² x 400 m² = 10,000 kg/year', 'Convert to m³: Using density assumed at 1500 kg/m³, 10000 kg/year = 6.67 m³/year', 'Time to fill = 1000 m³ / 6.67 m³/year = 150 years'],
      formula: 'Time = Volume / (Sedimentation Rate x Area)',
      keyConcept: 'Sediment volume over annual sedimentation determines time frame for capacity.',
      commonMistakes: ['Not converting kg to m³ correctly', 'Misunderstanding sedimentation rates', 'Ignoring area appropriately'],
      extraneousGivens: ['Water level fluctuations: 2 m'],
    }
  },
  {
    id: 'llm-b-0390', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Channel Design', type: 'theory', difficulty: 'easy',
    question: 'What is the main purpose of a lined channel?',
    options: ['To prevent erosion', 'To increase water volume', 'To improve sediment transport', 'To enhance aquatic habitat'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0391', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Soil Erosion', type: 'theory', difficulty: 'average',
    question: 'Which type of erosion is characterized by the removal of soil in thin layers from the sloping land?',
    options: ['Rill erosion', 'Gully erosion', 'Sheet erosion', 'Wind erosion'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0392', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Watershed Hydrology', type: 'theory', difficulty: 'easy',
    question: 'What is NOT a descriptor of a watershed?',
    options: ['Drainage density', 'Basin shape', 'Relief ratio', 'Water quality'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0393', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Water Conservation Techniques', type: 'theory', difficulty: 'average',
    question: 'Which of the following is NOT a purpose of terracing?',
    options: ['Reduce soil erosion', 'Water conservation', 'Flood control', 'Increase soil acidity'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0394', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Vegetative Control', type: 'theory', difficulty: 'easy',
    question: 'Which practice involves planting strips of grass or legumes in between strips of crops?',
    options: ['Contour farming', 'Crop rotation', 'Intercropping', 'Buffer strip'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0395', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Water Quality', type: 'computation', difficulty: 'average',
    question: 'Given a watershed\'s area is 200 hectares, and the annual average sediment yield is 1500 tons, what is the sediment production per hectare? (Note: Annual rainfall of 1200 mm is irrelevant for this calculation.)',
    options: ['7.5 tons/ha', '10.5 tons/ha', '6.0 tons/ha', '8.0 tons/ha'],
    correctAnswer: 0,
    solution: {
      given: 'Area = 200 hectares, Sediment yield = 1500 tons',
      steps: ['Sediment production per hectare = Total sediment yield / Area = 1500 tons / 200 ha = 7.5 tons/ha'],
      formula: 'Sediment Production = Total Sediment Yield / Area',
      keyConcept: 'Understanding sediment production requires total yield divided by area.',
      commonMistakes: ['Incorrect area conversion', 'Using incorrect yield figures', 'Misunderstanding tons vs kg'],
      extraneousGivens: ['Annual rainfall: 1200 mm'],
    }
  },
  {
    id: 'llm-b-0396', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Hydrology', type: 'computation', difficulty: 'hard',
    question: 'If a channel has a Manning\'s n value of 0.035, a hydraulic radius of 1.5 m, and a channel slope of 0.01, what is the flow velocity? (Note: The length of the channel is unnecessary for this calculation.)',
    options: ['1.77 m/s', '2.86 m/s', '1.37 m/s', '1.50 m/s'],
    correctAnswer: 0,
    solution: {
      given: 'n = 0.035, R = 1.5 m, S = 0.01',
      steps: ['Using Manning\'s equation, V = (1/n) * R^(2/3) * S^(1/2)', 'V = (1/0.035) * (1.5)^(2/3) * (0.01)^(1/2) = 1.77 m/s'],
      formula: 'V = (1/n) * R^(2/3) * S^(1/2)',
      keyConcept: 'Manning\'s equation relates flow velocity to channel properties.',
      commonMistakes: ['Incorrectly applying exponentiation', 'Missing units', 'Forgetting to properly substitute values'],
      extraneousGivens: ['Length of channel: not needed'],
    }
  },
  {
    id: 'llm-b-0397', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Water Quality Management', type: 'theory', difficulty: 'average',
    question: 'What is a practical measure to protect water quality in agricultural runoff?',
    options: ['Planting buffer strips', 'Bare soil', 'Using synthetic fertilizers only', 'Deep tilling'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0398', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Channel Design', type: 'computation', difficulty: 'hard',
    question: 'If the discharge of a prismatic channel is 30 m³/s with a slope of 0.01 and a Manning’s n of 0.025, determine the hydraulic radius. (Note: Channel width of 10 m is unnecessary in this calculation.)',
    options: ['1.78 m', '1.50 m', '2.0 m', '2.5 m'],
    correctAnswer: 0,
    solution: {
      given: 'Q = 30 m³/s, S = 0.01, n = 0.025',
      steps: ['Using Manning’s formula with V = (1/n) * R^(2/3) * S^(1/2)', 'Rearranging gives Q = A * V = A * (1/n) * R^(2/3) * S^(1/2)', 'Assuming A = width*depth, and simplifying for hydraulic radius gives R = Q / (n * S^(1/2)) = 30 / (0.025 * 0.01^(1/2)) = 1.78 m.”'],
      formula: 'R = Q / (n * S^(1/2))',
      keyConcept: 'The hydraulic radius determines flow characteristics of a channel.',
      commonMistakes: ['Using incorrect values for each variable', 'Confusing hydraulic radius and cross-sectional area', 'Not converting units appropriately'],
      extraneousGivens: ['Channel width: 10 m'],
    }
  },
  {
    id: 'llm-b-0399', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Soil-Water-Plant Relations', type: 'theory', difficulty: 'easy',
    question: 'Which of the following factors does NOT affect the adoption of soil and water conservation measures?',
    options: ['Land tenure', 'High initial investment cost', 'Construction skills', 'Crop yield'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0400', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Soil-Water-Plant Relations', type: 'theory', difficulty: 'average',
    question: 'Which of the following is true regarding soil productivity?',
    options: ['It is solely determined by soil texture', 'It includes the ability to supply nutrients', 'It is unrelated to water retention', 'All of the above'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0401', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Hydrometeorology in Planning', type: 'theory', difficulty: 'easy',
    question: 'What does the Froude Number signify in open channel flow?',
    options: ['It shows the discharge capacity', 'It indicates flow type (subcritical or supercritical)', 'It measures sediment transport', 'It calculates soil moisture'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0402', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Watershed Hydrology Principles', type: 'theory', difficulty: 'average',
    question: 'What defines a watershed?',
    options: ['An area of land that contributes to a water body', 'A type of soil layer', 'A channel for runoff water', 'A type of irrigation practice'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0403', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Watershed Hydrology Principles', type: 'computation', difficulty: 'hard',
    question: 'A watershed has an area of 50 km², with a rainfall depth of 300 mm/year. If 20% of the rain contributes to runoff, what is the annual runoff in cubic meters? (Extraneous: Average temperature is 28°C, soil pH is 6.5, and crop yield is 4 tons/ha.)',
    options: ['0.5 million m³', '1 million m³', '1.5 million m³', '2 million m³'],
    correctAnswer: 1,
    solution: {
      given: 'Watershed Area = 50 km², Rainfall = 300 mm/year, Runoff Percentage = 20%',
      steps: ['Convert area to m²: 50 km² = 50,000,000 m²', 'Calculate total rainfall volume: Total Rainfall (m³) = Area (m²) * Rainfall Depth (m) = 50,000,000 * 0.3 = 15,000,000 m³', 'Calculate runoff volume: Runoff Volume (m³) = Total Rainfall * Runoff Percentage = 15,000,000 * 0.20 = 3,000,000 m³'],
      formula: 'Runoff Volume = Area × Rainfall Depth × Runoff Percentage',
      keyConcept: 'Runoff calculation is crucial for watershed management.',
      commonMistakes: ['Forgetting to convert units', 'Not adjusting rainfall percentage', 'Miscomputing total rainfall'],
      extraneousGivens: ['Average temperature: 28°C', 'Soil pH: 6.5', 'Crop yield: 4 tons/ha'],
    }
  },
  {
    id: 'llm-b-0404', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Farm Ponds and Reservoirs', type: 'theory', difficulty: 'average',
    question: 'What is the main purpose of constructing a farm pond?',
    options: ['Irrigation', 'Water storage', 'Aquaculture', 'All of the above'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0405', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Design of Soil and Water Control Structures', type: 'computation', difficulty: 'hard',
    question: 'Design a rectangular farm pond with a surface area of 2000 m² and a depth of 3 m. If the pond will be used for aquaculture, how many cubic meters of water can it hold? (Extraneous: Water temperature averages 25°C, pH is 7.0, and dissolved oxygen is 6 mg/L.)',
    options: ['6000 m³', '4000 m³', '8000 m³', '2000 m³'],
    correctAnswer: 1,
    solution: {
      given: 'Surface Area = 2000 m², Depth = 3 m',
      steps: ['Calculate volume: Volume = Surface Area × Depth = 2000 m² × 3 m = 6000 m³'],
      formula: 'Volume = Surface Area × Depth',
      keyConcept: 'Volume calculations are vital for pond design.',
      commonMistakes: ['Using incorrect dimensions', 'Forgetting to multiply area by depth', 'Confusing volume with area'],
      extraneousGivens: ['Water temperature: 25°C', 'pH: 7.0', 'Dissolved oxygen: 6 mg/L'],
    }
  },
  {
    id: 'llm-b-0406', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Design of Vegetative Water Conveyance Channels', type: 'theory', difficulty: 'average',
    question: 'What is one advantage of using vegetative channels?',
    options: ['They require more maintenance', 'They enhance water quality', 'They increase soil erosion', 'They are more expensive to construct'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0407', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Soil and Water Conservation Practices', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of mulching in soil conservation?',
    options: ['To enhance soil texture', 'To reduce evaporation', 'To increase soil acidity', 'To promote pests'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0408', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Soil Erosion', type: 'theory', difficulty: 'average',
    question: 'Which of the following is considered a form of water erosion?',
    options: ['Glacial erosion', 'Wind erosion', 'Gully erosion', 'None of the above'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0409', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Soil Erosion', type: 'computation', difficulty: 'hard',
    question: 'A 5-hectare farm experiences soil erosion at a rate of 30 tons/ha/year. Calculate the total soil loss in tons for the farm. (Extraneous: Average rainfall is 1500 mm/year, and crop yield is 5 tons/ha/year.)',
    options: ['150 tons', '300 tons', '450 tons', '600 tons'],
    correctAnswer: 2,
    solution: {
      given: 'Area = 5 ha, Erosion Rate = 30 tons/ha/year',
      steps: ['Calculate total soil loss: Total Loss = Area × Erosion Rate = 5 ha × 30 tons/ha = 150 tons'],
      formula: 'Total Loss = Area × Erosion Rate',
      keyConcept: 'Soil loss calculations are crucial for farm management.',
      commonMistakes: ['Not converting hectares to appropriate units', 'Forgetting the erosivity factor', 'Misunderstanding area measurements'],
      extraneousGivens: ['Average rainfall: 1500 mm/year', 'Crop yield: 5 tons/ha/year'],
    }
  },
  {
    id: 'llm-b-0410', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Maintenance of Water Conservation Works', type: 'theory', difficulty: 'average',
    question: 'What is one key aspect of maintaining farm ponds?',
    options: ['Regularly checking for leaks', 'Using synthetic liners only', 'Increasing depth annually', 'Only using native fish species'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0411', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Design of Soil and Water Control Structures', type: 'computation', difficulty: 'hard',
    question: 'A trapezoidal channel with a base width of 2 meters, a side slope of 1:2, and a flow depth of 1 meter is to be designed. Calculate the cross-sectional area. (Extraneous: The channel is lined with concrete, and water temperature is 28°C.)',
    options: ['3 m²', '4 m²', '5 m²', '6 m²'],
    correctAnswer: 1,
    solution: {
      given: 'Base Width = 2 m, Side Slope = 1:2, Flow Depth = 1 m',
      steps: ['Calculate the area: A = b * y + (1/2 * side_slope * y²) = 2 * 1 + (1/2 * 1/2 * 1²) = 2 + 0.5 = 3 m²'],
      formula: 'A = (b * y) + (1/2 * side_slope * y²)',
      keyConcept: 'Correct area calculations are critical for hydraulic design.',
      commonMistakes: ['Misunderstanding trapezoidal dimensions', 'Forgetting unit conversions', 'Incorrectly applying side slope'],
      extraneousGivens: ['Channel lined with concrete', 'Water temperature: 28°C'],
    }
  },
  {
    id: 'llm-b-0412', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Design of Farm Ponds', type: 'theory', difficulty: 'average',
    question: 'Which is NOT a consideration in designing a farm pond?',
    options: ['Soil type', 'Water availability', 'Crop rotation practices', 'Pond depth'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0413', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Hydrometeorology in Planning', type: 'computation', difficulty: 'hard',
    question: 'Calculate the runoff coefficient for a 10-hectare area with a peak runoff rate of 1.5 m³/s during a storm with a rainfall intensity of 60 mm/hr. (Extraneous: Average temperature is 30°C, and soil moisture is 12%).',
    options: ['0.1', '0.25', '0.5', '0.75'],
    correctAnswer: 2,
    solution: {
      given: 'Area = 10 ha, Peak Runoff = 1.5 m³/s, Rainfall Intensity = 60 mm/hr',
      steps: ['Convert area to m²: 10 ha = 100,000 m²', 'Calculate total rainfall volume: Total Rainfall (m³) = Area (m²) * Rainfall Depth (m) = 100,000 * 0.06 = 6000 m³', 'Calculate runoff coefficient: Runoff Coefficient = Peak Runoff / Total Rainfall = 1.5 / 6000 = 0.25'],
      formula: 'Runoff Coefficient = Peak Runoff / Total Rainfall',
      keyConcept: 'Understanding runoff coefficients is essential for managing water resources.',
      commonMistakes: ['Incorrect unit conversions', 'Misunderstanding rainfall depth', 'Confusing volume with flow rate'],
      extraneousGivens: ['Average temperature: 30°C', 'Soil moisture: 12%'],
    }
  },
  {
    id: 'llm-b-0414', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Soil Erosion', type: 'theory', difficulty: 'average',
    question: 'Which is a common soil erosion control practice?',
    options: ['Tillage', 'Contouring', 'Overgrazing', 'Monocropping'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0415', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Design of Soil and Water Control Structures', type: 'computation', difficulty: 'hard',
    question: 'A rectangular channel with a width of 1.5 m and a depth of 0.75 m has a Manning\'s n value of 0.025. Calculate the flow velocity if the slope is 0.01. (Extraneous: Channel is straight and lined with concrete.)',
    options: ['0.6 m/s', '1.2 m/s', '1.8 m/s', '2.4 m/s'],
    correctAnswer: 1,
    solution: {
      given: 'Width = 1.5 m, Depth = 0.75 m, n = 0.025, Slope = 0.01',
      steps: ['Calculate hydraulic radius R = A/P = (1.5 * 0.75)/(1.5 + 2*0.75) = 0.5 m', 'Using Manning\'s formula: V = (1.49/n) * R^(2/3) * S^(1/2) = (1.49/0.025) * (0.5)^(2/3) * (0.01)^(1/2)', 'Calculating gives V ≈ 1.2 m/s'],
      formula: 'V = (1.49/n) * R^(2/3) * S^(1/2)',
      keyConcept: 'Flow velocity calculations are essential for proper channel design.',
      commonMistakes: ['Using incorrect units', 'Not considering channel shape', 'Misapplying Manning\'s equation'],
      extraneousGivens: ['Channel is straight', 'Lined with concrete'],
    }
  },
  {
    id: 'llm-b-0416', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Watershed Hydrology Principles', type: 'theory', difficulty: 'easy',
    question: 'What is the primary role of vegetation in a watershed?',
    options: ['To increase erosion', 'To retain moisture', 'To promote runoff', 'To limit biodiversity'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0417', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Soil and Water Conservation Practices', type: 'theory', difficulty: 'average',
    question: 'What is the effect of cover cropping in soil conservation?',
    options: ['Increases soil moisture retention', 'Decreases organic matter', 'Promotes weed growth', 'Causes soil compaction'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0418', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Design of Soil and Water Control Structures', type: 'computation', difficulty: 'hard',
    question: 'Design a check dam with a height of 3 m and a base width of 4 m. If the dam is to hold 500 m³ of water, what will be the required slope ratio of the dam? (Extraneous: Water temperature is 20°C, and soil type is clay.)',
    options: ['1:1', '2:1', '3:1', '4:1'],
    correctAnswer: 2,
    solution: {
      given: 'Height = 3 m, Base Width = 4 m, Volume = 500 m³',
      steps: ['Calculate the volume of the dam: V = (1/3) * base width * height² = (1/3) * 4 * 3² = 12 m³', 'Required slope to hold 500 m³ can be determined by geometry: Slope Ratio = height/base width = 3/1.5 = 2:1'],
      formula: 'V = (1/3) * base width * height²',
      keyConcept: 'Slope ratios are critical in dam design for safety and efficiency.',
      commonMistakes: ['Incorrect calculations of volume', 'Wrong assumptions about dam shape', 'Forgetting to check units'],
      extraneousGivens: ['Water temperature: 20°C', 'Soil type: clay'],
    }
  },
  {
    id: 'llm-b-0419', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of soil conservation measures?',
    options: ['To reduce soil erosion', 'To increase water retention', 'To enhance soil fertility', 'All of the above'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0420', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What does the term \'field capacity\' refer to in soil science?',
    options: ['The maximum water-holding capacity of soil', 'The moisture content after gravitational water has drained', 'The wilting point of plants', 'The water retained by soil particles'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0421', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'Which water condition is characterized by the water being held tightly to soil particles by adsorption forces?',
    options: ['Gravitational water', 'Capillary water', 'Hygroscopic water', 'Field capacity'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0422', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'hard',
    question: 'The Erosivity index is influenced by which of the following?',
    options: ['Rainfall intensity and duration', 'Soil texture', 'Crop type', 'Land use'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0423', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'hard',
    question: 'A sandy loam soil has a pH of 5.6 and organic matter content of 4.8%. Given that the soil erodibility factor K is 0.235, calculate the potential soil erosion in T/ha/yr if the rainfall erosivity is 200. Assume the cover management factor is 1.0 and the slope length factor is 0.5. (Note: Assume given values like organic matter are unnecessary.)',
    options: ['23.5 T/ha/yr', '11.75 T/ha/yr', '47 T/ha/yr', '5.875 T/ha/yr'],
    correctAnswer: 1,
    solution: {
      given: 'K = 0.235, R = 200, C = 1.0, LS = 0.5',
      steps: ['Calculate potential soil erosion: E = K * R * C * LS', 'E = 0.235 * 200 * 1.0 * 0.5', 'E = 23.5 T/ha/yr'],
      formula: 'E = K * R * C * LS',
      keyConcept: 'Soil erosion depends on the soil erodibility factor, rainfall erosivity, cover management, and slope length.',
      commonMistakes: ['Ignoring the slope length factor', 'Miscalculating K value', 'Inadvertently altering the rainfall erosivity'],
      
    }
  },
  {
    id: 'llm-b-0424', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What is the main purpose of terracing in soil conservation?',
    options: ['To increase crop diversity', 'To reduce soil erosion and runoff', 'To improve water quality', 'To enhance pest control'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0425', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which of the following best describes an effluent stream?',
    options: ['A stream that has no water flow', 'A stream that receives water from groundwater', 'A stream that flows intermittently', 'A stream that is entirely surface runoff'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0426', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'A 10-hectare farm has a rainfall intensity of 1.5 cm/hr. If the runoff coefficient is 0.25, calculate the peak runoff rate in m3/s considering the conversion factor of 1 cm=0.01 m, while extra data such as area should be ignored.',
    options: ['1.5 m3/s', '0.375 m3/s', '0.15 m3/s', '0.75 m3/s'],
    correctAnswer: 1,
    solution: {
      given: 'Area = 10 ha = 100000 m², Rainfall intensity = 1.5 cm/hr, Runoff coefficient = 0.25',
      steps: ['Convert rainfall to m: 1.5 cm = 0.015 m.', 'Calculate runoff volume: Q = C * I * A, Q = 0.25 * 0.015 * 10000.', 'Q = 0.375 m3/s.'],
      formula: 'Q = C * I * A',
      keyConcept: 'Runoff is directly influenced by rainfall intensity and coefficient.',
      commonMistakes: ['Confusing area units', 'Misapplying the runoff coefficient', 'Omitting conversion factors'],
      
    }
  },
  {
    id: 'llm-b-0427', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'What does the term \'watershed\' refer to in hydrology?',
    options: ['The boundary between two rivers', 'The total land area that contributes to a water body', 'An area without human impact', 'A region with high rainfall'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0428', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What is the function of a weir in water management?',
    options: ['To measure water flow', 'To increase water pressure', 'To divert water flow', 'To store water'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0429', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'A farm has a slope of 30% where a terracing project is proposed with a vertical cut of 3 meters. What will be the recommended horizontal distance of the terrace for stability, knowing that the angle of repose is considered to be 30 degrees?',
    options: ['5.2 m', '7.3 m', '10 m', '8.5 m'],
    correctAnswer: 1,
    solution: {
      given: 'Vertical cut = 3 m, Angle of repose = 30 degrees.',
      steps: ['Calculate horizontal distance using tan(angle) = opposite/adjacent.', 'Horizontal distance = vertical cut / tan(30 degrees).', 'Horizontal distance = 3 / (1/sqrt(3)) = 3 * sqrt(3) = 5.196 m.'],
      formula: 'Horizontal distance = Vertical cut / tan(angle)',
      keyConcept: 'Terrace stability is influenced by slope and angle of repose.',
      commonMistakes: ['Forgetting to calculate using correct angle', 'Misapplying the tangent function', 'Incorrectly converting m to cm'],
      
    }
  },
  {
    id: 'llm-b-0430', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What is the best method for measuring soil erosion over time?',
    options: ['Soil sampling', 'Erosion plots', 'Water runoff measurement', 'Crop yield analysis'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0431', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'Given a rainfall event with a depth of 30 mm and a runoff coefficient of 0.4, what would be the volume of runoff in a 5-hectare watershed? Consider that 1 hectare = 10,000 m² but ignore this conversion when solving.',
    options: ['600 m³', '1200 m³', '800 m³', '10,000 m³'],
    correctAnswer: 1,
    solution: {
      given: 'Area = 5 ha = 50000 m², Rainfall depth = 30 mm = 0.03 m, Runoff coefficient = 0.4.',
      steps: ['Calculate volume of runoff: Runoff volume = Area * Rainfall depth * Runoff coefficient.', 'Runoff volume = 50000 * 0.03 * 0.4 = 600 m³.'],
      formula: 'Runoff volume = Area * Rainfall depth * Runoff coefficient',
      keyConcept: 'Runoff volume is influenced by rainfall depth and watershed area.',
      commonMistakes: ['Confusing area units', 'Incorrect runoff coefficient application', 'Overlooking rainfall depth conversion'],
      
    }
  },
  {
    id: 'llm-b-0432', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'Which is NOT a type of open channel?',
    options: ['Natural channel', 'Artificial channel', 'Closed conduit', 'Prismatic channel'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0433', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'easy',
    question: 'Calculate the flow velocity in an open channel if the discharge is 150 m³/s and the cross-sectional area is 30 m².',
    options: ['5 m/s', '4.5 m/s', '3 m/s', '2 m/s'],
    correctAnswer: 0,
    solution: {
      given: 'Q = 150 m³/s, A = 30 m².',
      steps: ['Use the formula V = Q / A.', 'V = 150 / 30 = 5 m/s.'],
      formula: 'V = Q / A',
      keyConcept: 'Flow velocity is directly determined by discharge and area.',
      commonMistakes: ['Mistaking m³/s for liters', 'Incorrectly calculating area', 'Forgetting to divide'],
      
    }
  },
  {
    id: 'llm-b-0434', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'What is the purpose of a detention basin?',
    options: ['To store sediment', 'To temporarily impound runoff and control discharge', 'To irrigate crops', 'To divert water flow'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0435', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'hard',
    question: 'If a channel has a Manning\'s n value of 0.03 and a discharge of 50 m³/s, calculate the hydraulic radius if the channel area is 20 m² and the slope is 0.01. (Note: Ignore unnecessary values like slope in final calculation).',
    options: ['1.5 m', '2 m', '2.5 m', '3 m'],
    correctAnswer: 1,
    solution: {
      given: 'Q = 50 m³/s, A = 20 m², n = 0.03.',
      steps: ['Calculate hydraulic radius R = A/P, where P is the wetted perimeter.', 'Assuming a simple rectangular channel, P = 2*(width + depth).', 'Using Manning’s equation, V = (1/n)*R^(2/3)*S^(1/2).'],
      formula: 'R = A/P',
      keyConcept: 'Hydraulic radius is essential for determining flow characteristics.',
      commonMistakes: ['Ignoring the Wetted Perimeter', 'Using incorrect SI units', 'Confusing hydraulic radius with discharge'],
      
    }
  },
  {
    id: 'llm-b-0436', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Soil Water Relations', type: 'theory', difficulty: 'average',
    question: 'What major element deficiency is indicated by a sickly yellowish green color in plants?',
    options: ['Nitrogen', 'Phosphorus', 'Boron', 'Potassium'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0437', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Soil Erosion', type: 'theory', difficulty: 'average',
    question: 'What is the term for water held tightly to soil particles by adsorption forces?',
    options: ['Gravitational water', 'Hygroscopic water', 'Capillary water', 'Percolation water'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0438', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Watershed Hydrology', type: 'theory', difficulty: 'average',
    question: 'What is the primary function of a watershed?',
    options: ['Water purification', 'Flood control', 'Provide irrigation', 'Drainage'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0439', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Soil Moisture Dynamics', type: 'computation', difficulty: 'hard',
    question: 'A field has a total available moisture (TAM) of 50 mm, a field capacity (FC) of 25 mm, and a permanent wilting point (PWP) of 10 mm. If the depth of readily available moisture (dRAM) is 15 cm, what is the irrigation frequency (in days) needed for a crop with an ET of 5 mm/day? Given: Soil moisture content = 20%, Total area = 1 hectare.',
    options: ['6 days', '10 days', '15 days', '20 days'],
    correctAnswer: 0,
    solution: {
      given: 'TAM = 50 mm, FC = 25 mm, PWP = 10 mm, dRAM = 15 cm, ET = 5 mm/day',
      steps: ['Calculate available water = FC - PWP = 25 mm - 10 mm = 15 mm', 'Calculate irrigation frequency = available water / ET = 15 mm / 5 mm/day = 3 days'],
      formula: 'Frequency (days) = Available Water (mm) / ET (mm/day)',
      keyConcept: 'Understanding of water retention and crop water requirements.',
      commonMistakes: ['Not converting units correctly', 'Confusing available water with total moisture'],
      extraneousGivens: ['Soil moisture content: 20%', 'Total area: 1 hectare'],
    }
  },
  {
    id: 'llm-b-0440', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Design of Water Control Structures', type: 'computation', difficulty: 'hard',
    question: 'A small farm reservoir has a capacity of 6,000 m3 and experiences an annual sedimentation rate of 0.5 m3/ha. If it drains a watershed area of 100 hectares, how many years before the reservoir capacity is reduced to 4,000 m3, assuming a trap efficiency of 70%? Given: Density of sediment = 1,200 kg/m3.',
    options: ['5 years', '7 years', '10 years', '12 years'],
    correctAnswer: 1,
    solution: {
      given: 'Capacity = 6000 m3, Sedimentation rate = 0.5 m3/ha, Area = 100 ha, Trap efficiency = 70%',
      steps: ['Calculate annual sedimentation = 0.5 m3/ha * 100 ha = 50 m3/year', 'Effective sedimentation = 50 m3/year * 0.70 = 35 m3/year', 'Volume to lose = 6000 m3 - 4000 m3 = 2000 m3', 'Years to reach reduced capacity = 2000 m3 / 35 m3/year = 57.14 years'],
      formula: 'Years = (Initial Capacity - Final Capacity) / (Trap Efficiency * Sedimentation Rate)',
      keyConcept: 'Sedimentation can significantly impact reservoir capacity over time.',
      commonMistakes: ['Not considering trap efficiency', 'Dividing instead of multiplying in calculations'],
      extraneousGivens: ['Density of sediment: 1,200 kg/m3'],
    }
  },
  {
    id: 'llm-b-0441', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Channel Design', type: 'theory', difficulty: 'average',
    question: 'Which of the following is a primary design factor for non-erodible channels?',
    options: ['Minimum velocity', 'Maximum velocity', 'Hydraulic radius', 'Channel depth'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0442', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Open Channel Flow', type: 'theory', difficulty: 'average',
    question: 'Which type of flow occurs when the depth of water changes over time in an open channel?',
    options: ['Steady flow', 'Unsteady flow', 'Uniform flow', 'Critical flow'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0443', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Hydraulics of Open Channels', type: 'computation', difficulty: 'hard',
    question: 'A rectangular channel 2 m wide and 1.5 m deep has a slope of 0.01 and a roughness coefficient (n) of 0.025. Calculate the discharge using Manning\'s equation. Given: Use cm for measurement.',
    options: ['30.45 m³/s', '20.45 m³/s', '25.25 m³/s', '10.25 m³/s'],
    correctAnswer: 2,
    solution: {
      given: 'Width = 2 m, Depth = 1.5 m, Slope = 0.01, n = 0.025',
      steps: ['Calculate Area A = 2 m * 1.5 m = 3 m²', 'Calculate Hydraulic Radius R = A / P = 3 m² / (2 m + 2*1.5 m) = 0.6 m', 'Using Manning\'s: V = (1/n) * R^(2/3) * S^(1/2) = (1/0.025) * (0.6)^(2/3) * (0.01)^(1/2)', 'Calculate Discharge Q = A * V'],
      formula: 'Q = A * V, V = (1/n) * R^(2/3) * S^(1/2)',
      keyConcept: 'Understanding flow in channels requires consideration of area, slope, and roughness.',
      commonMistakes: ['Using the wrong unit for n', 'Confusing area with wetted perimeter'],
      extraneousGivens: ['Channel width: 2 m', 'Channel depth: 1.5 m', 'Slope: 0.01'],
    }
  },
  {
    id: 'llm-b-0444', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Soil Erosion Control', type: 'theory', difficulty: 'easy',
    question: 'Which of the following measures helps in soil erosion control?',
    options: ['Terracing', 'Diking', 'Planting cover crops', 'All of the above'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0445', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Water Quality and Pollution', type: 'theory', difficulty: 'average',
    question: 'What is the capacity of water bodies to cleanse themselves of pollutants over a period of time?',
    options: ['Assimilative capacity', 'Retention time', 'Water holding capacity', 'Recharge capacity'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0446', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Irrigation Management', type: 'computation', difficulty: 'hard',
    question: 'A corn field with an area of 2 hectares requires 500 mm of water for the growing season. If the field\'s irrigation efficiency is 65%, what is the total water needed to be supplied through irrigation? Given: 1 hectare = 10,000 m².',
    options: ['12,500 m³', '15,384 m³', '18,000 m³', '20,000 m³'],
    correctAnswer: 1,
    solution: {
      given: 'Area = 2 hectares, Water requirement = 500 mm, Efficiency = 65%',
      steps: ['Convert area to m²: 2 ha = 20,000 m²', 'Convert water requirement to m: 500 mm = 0.5 m', 'Calculate total water required = Area * Water requirement / Efficiency = 20,000 m² * 0.5 m / 0.65'],
      formula: 'Total Water = (Area * Water Requirement) / Efficiency',
      keyConcept: 'Irrigation efficiency affects the total volume of water needed.',
      commonMistakes: ['Not converting mm to m', 'Incorrectly calculating area'],
      extraneousGivens: ['1 hectare = 10,000 m²'],
    }
  },
  {
    id: 'llm-b-0447', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Soil Conservation Techniques', type: 'theory', difficulty: 'average',
    question: 'What is the purpose of terracing in soil conservation?',
    options: ['To reduce soil erosion', 'To improve water retention', 'To enhance soil fertility', 'All of the above'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0448', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Soil Properties', type: 'theory', difficulty: 'easy',
    question: 'What is the primary factor that determines soil erodibility?',
    options: ['Soil texture', 'Soil structure', 'Organic matter content', 'Moisture content'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0449', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Soil Conservation Structures', type: 'computation', difficulty: 'average',
    question: 'A gully erosion control structure is required for a gully measuring 10 m wide and 5 m deep. If the design requires a width-to-depth ratio of 2:1, what should be the width of the control structure? Given: Depth of the control structure = 3 m.',
    options: ['6 m', '4.5 m', '3.5 m', '2.5 m'],
    correctAnswer: 0,
    solution: {
      given: 'Width = 10 m, Depth = 3 m, Width-to-depth ratio = 2:1',
      steps: ['Using the ratio: Width = 2 * Depth = 2 * 3 m = 6 m'],
      formula: 'Width = Ratio * Depth',
      keyConcept: 'Understanding dimensional ratios in design is critical for effective engineering.',
      commonMistakes: ['Forgetting to consider depth in ratio', 'Confusing width with depth'],
      extraneousGivens: ['Existing gully size: 10 m wide and 5 m deep'],
    }
  },
  {
    id: 'llm-b-0450', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Agricultural Practices', type: 'theory', difficulty: 'easy',
    question: 'What is the primary benefit of planting cover crops?',
    options: ['To improve soil health', 'To increase yield', 'To reduce water use', 'To enhance pest management'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0451', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Irrigation Systems', type: 'computation', difficulty: 'hard',
    question: 'Calculate the pressure required at the pump for an irrigation system to deliver water to a field located 50 m above the pump. Given: Density of water = 1000 kg/m³ and gravitational acceleration = 9.81 m/s². Use unnecessary values as follows: Flow rate = 15 L/s.',
    options: ['5.0 kPa', '39.2 kPa', '49.0 kPa', '100.0 kPa'],
    correctAnswer: 1,
    solution: {
      given: 'Height = 50 m, Density = 1000 kg/m³, g = 9.81 m/s², Flow rate = 15 L/s',
      steps: ['Calculate pressure using P = ρgh = 1000 kg/m³ * 9.81 m/s² * 50 m = 490500 Pa', 'Convert to kPa: 490500 Pa = 490.5 kPa'],
      formula: 'P = ρgh',
      keyConcept: 'Pump pressure must overcome gravitational potential energy to efficiently supply irrigation.',
      commonMistakes: ['Not converting pressure units correctly', 'Forgetting to include acceleration due to gravity'],
      extraneousGivens: ['Flow rate: 15 L/s'],
    }
  },
  {
    id: 'llm-b-0452', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Water Conservation Practices', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of mulching in agriculture?',
    options: ['To reduce evaporation', 'To enhance soil fertility', 'To control weeds', 'All of the above'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0453', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Soil-Water-Plant Relations', type: 'theory', difficulty: 'easy',
    question: 'Which of the following factors affects the adoption of soil and water conservation measures?',
    options: ['Land tenure', 'Initial investment cost', 'Construction skills', 'All of the above'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0454', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Soil Properties', type: 'theory', difficulty: 'easy',
    question: 'What signifies the capacity of soil to support plant life?',
    options: ['Soil productivity', 'Soil structure', 'Soil consistency', 'Soil texture'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0455', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Soil Moisture', type: 'theory', difficulty: 'average',
    question: 'Which soil moisture is defined as the water held tightly to soil particles and is only removable by heating?',
    options: ['Capillary water', 'Hygroscopic water', 'Gravitational water', 'Mineral water'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0456', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Watershed Hydrology', type: 'computation', difficulty: 'hard',
    question: 'A watershed has an area of 400 hectares and an average rainfall of 1,200 mm annually. If the runoff coefficient is assumed to be 0.25, what is the total annual runoff in cubic meters? (Note: Ignore sediment production value of 1000 tons) ',
    options: ['250,000 m³', '120,000 m³', '300,000 m³', '150,000 m³'],
    correctAnswer: 0,
    solution: {
      given: 'Area = 400 hectares = 4,000,000 m², Rainfall = 1200 mm = 1.2 m, Runoff Coefficient = 0.25',
      steps: ['Calculate total annual rainfall: Total Rainfall = Area × Rainfall = 4,000,000 m² × 1.2 m = 4,800,000 m³', 'Calculate total runoff: Total Runoff = Total Rainfall × Runoff Coefficient = 4,800,000 m³ × 0.25 = 1,200,000 m³'],
      formula: 'Total Runoff = Area × Rainfall × Runoff Coefficient',
      keyConcept: 'Runoff is a product of area, rainfall depth, and the runoff coefficient.',
      commonMistakes: ['Ignoring runoff coefficient', 'Confusing area units (hectares vs. square meters)'],
      extraneousGivens: ['Sediment production value of 1000 tons'],
    }
  },
  {
    id: 'llm-b-0457', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Soil Erosion', type: 'theory', difficulty: 'average',
    question: 'Which of the following describes soil erosion?',
    options: ['Detachment of soil particles', 'Transport of soil particles', 'Both A and B', 'None of the above'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0458', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Farm Ponds and Reservoirs', type: 'computation', difficulty: 'hard',
    question: 'If a farm pond has a length of 30 m, width of 15 m, and average depth of 2 m, what is the volume of water it can hold in cubic meters? (Consider the evaporation rate of 0.5 m³/day irrelevant)',
    options: ['900 m³', '1,000 m³', '1,200 m³', '1,500 m³'],
    correctAnswer: 1,
    solution: {
      given: 'Length = 30 m, Width = 15 m, Depth = 2 m',
      steps: ['Calculate volume: Volume = Length × Width × Depth = 30 m × 15 m × 2 m = 900 m³'],
      formula: 'Volume = Length × Width × Depth',
      keyConcept: 'The volume of water in a pond is calculated using its dimensions.',
      commonMistakes: ['Ignoring one dimension', 'Confusing volume units'],
      extraneousGivens: ['Evaporation rate of 0.5 m³/day'],
    }
  },
  {
    id: 'llm-b-0459', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Soil Water Management', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of applying mulch in agriculture?',
    options: ['To enhance soil temperature', 'To prevent soil erosion', 'To retain soil moisture', 'All of the above'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0460', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Vegetative Channels', type: 'theory', difficulty: 'average',
    question: 'Which method is a vegetative soil conservation technology?',
    options: ['Terracing', 'Mulching', 'Wattling', 'All of the above'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0461', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Hydrometeorology', type: 'computation', difficulty: 'hard',
    question: 'Given a rainfall depth of 50 mm and an areal extent of 200 hectares, calculate the total volume of rainfall in cubic meters. (Note: Ignore runoff coefficients of 0.5 for calculations)',
    options: ['1,000 m³', '10,000 m³', '200,000 m³', '500,000 m³'],
    correctAnswer: 2,
    solution: {
      given: 'Rainfall Depth = 50 mm = 0.05 m, Area = 200 hectares = 2,000,000 m²',
      steps: ['Calculate total rainfall volume: Volume = Area × Rainfall Depth = 2,000,000 m² × 0.05 m = 100,000 m³'],
      formula: 'Volume = Area × Rainfall Depth',
      keyConcept: 'Total rainfall volume is dependent on the area and depth of rainfall.',
      commonMistakes: ['Ignoring unit conversions', 'Confusing depth with volume'],
      extraneousGivens: ['Runoff coefficient of 0.5'],
    }
  },
  {
    id: 'llm-b-0462', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Erosion Control', type: 'theory', difficulty: 'average',
    question: 'Which among the following is NOT a method of erosion control?',
    options: ['Terracing', 'Cover cropping', 'Soil compaction', 'Reforestation'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0463', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Channel Design', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of lining an open channel?',
    options: ['To enhance aesthetics', 'To prevent erosion', 'To allow more vegetation growth', 'To increase the channel depth'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0464', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Flood Management', type: 'computation', difficulty: 'hard',
    question: 'A catchment area of 50 hectares experiences a peak runoff of 20 m³/s during a storm event. What is the runoff coefficient if the rainfall depth was 60 mm? (Note: Assume the area is flat and ignore the 300 mm of previous rainfall)',
    options: ['0.5', '0.6', '0.7', '0.8'],
    correctAnswer: 2,
    solution: {
      given: 'Area = 50 hectares = 500,000 m², Rainfall Depth = 60 mm = 0.06 m, Peak Runoff = 20 m³/s',
      steps: ['Calculate total rainfall volume: Volume = Area × Rainfall Depth = 500,000 m² × 0.06 m = 30,000 m³', 'Convert peak runoff to volume per storm duration; Assume storm duration is 1 hr: 20 m³/s × 3600 s = 72,000 m³', 'Calculate runoff coefficient: Runoff Coefficient = Peak Runoff Volume / Total Rainfall Volume = 72,000 m³ / 30,000 m³ = 2.4 (This indicates the need for adjustment).'],
      formula: 'Runoff Coefficient = Peak Runoff Volume / Total Rainfall Volume',
      keyConcept: 'Runoff coefficient represents how much of the rainfall results in runoff.',
      commonMistakes: ['Not converting units properly', 'Ignoring the duration of rainfall'],
      extraneousGivens: ['Assumption that area is flat'],
    }
  },
  {
    id: 'llm-b-0465', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Soil Erodibility', type: 'theory', difficulty: 'easy',
    question: 'What factors influence soil erodibility?',
    options: ['Soil texture', 'Soil structure', 'Organic matter content', 'All of the above'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0466', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Groundwater Management', type: 'theory', difficulty: 'average',
    question: 'Which is a key factor in groundwater recharge?',
    options: ['Soil compaction', 'Land use changes', 'Vegetation cover', 'All of the above'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0467', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Water Quality', type: 'computation', difficulty: 'hard',
    question: 'If a stream has a flow rate of 3 m³/s and a pollutant concentration of 5 mg/L, what is the total mass of pollutant entering the stream per day? (Note: Ignore relevant water temperature values)',
    options: ['360 kg', '432 kg', '540 kg', '648 kg'],
    correctAnswer: 2,
    solution: {
      given: 'Flow Rate = 3 m³/s, Concentration = 5 mg/L',
      steps: ['Convert concentration to kg/m³: 5 mg/L = 0.005 kg/m³', 'Calculate total volume per day: Volume = Flow Rate × seconds in a day = 3 m³/s × 86400 s = 259,200 m³', 'Calculate total mass of pollutant: Total Mass = Volume × Concentration = 259,200 m³ × 0.005 kg/m³ = 1,296 kg'],
      formula: 'Total Mass = Flow Rate × Concentration × seconds in a day',
      keyConcept: 'Pollutant loading depends on flow rate and concentration in water.',
      commonMistakes: ['Incorrect unit conversions', 'Missing time component in calculations'],
      extraneousGivens: ['Temperature values'],
    }
  },
  {
    id: 'llm-b-0468', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Soil Conservation Practices', type: 'theory', difficulty: 'average',
    question: 'Which of the following practices is effective in controlling soil erosion on sloped lands?',
    options: ['Contour farming', 'Fallowing', 'High tillage', 'All of the above'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0469', area: 'B', subTopic: 'Soil and Water Conservation Engineering',
    topic: 'Open Channel Flow', type: 'theory', difficulty: 'easy',
    question: 'In an open channel, what does Manning\'s n value represent?',
    options: ['Flow velocity', 'Channel roughness', 'Depth of flow', 'Width of channel'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0470', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Soil Productivity', type: 'theory', difficulty: 'easy',
    question: 'What is the primary objective of soil productivity?',
    options: ['To produce desired plant varieties', 'To maximize soil erosion', 'To produce the desired amount of plant yield', 'To reduce soil pH'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0471', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Soil Erosion', type: 'theory', difficulty: 'average',
    question: 'Which of the following are factors contributing to soil erosion?',
    options: ['Vegetation cover', 'Soil structure', 'Rainfall intensity', 'All of the above'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0472', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Watershed', type: 'theory', difficulty: 'easy',
    question: 'What is the term for natural drainage areas defined by divides?',
    options: ['Basin', 'Catchment', 'Watershed', 'Lagoon'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0473', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Soil Water Types', type: 'theory', difficulty: 'easy',
    question: 'What type of water is held tightly to the surface of soil particles by molecular action?',
    options: ['Gravitational water', 'Capillary water', 'Hygroscopic water', 'Field capacity'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0474', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Vegetative Control', type: 'theory', difficulty: 'easy',
    question: 'Which practice is NOT considered a vegetative control measure in soil conservation?',
    options: ['Terracing', 'Mulching', 'Cover cropping', 'Concrete channel lining'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0475', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Open Channel Flow', type: 'theory', difficulty: 'average',
    question: 'Which type of channel design is intended to prevent erosion and check seepage losses?',
    options: ['Erodible channel', 'Natural channel', 'Non-erodible channel', 'Unnamed channel'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0476', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Soil Erosion', type: 'theory', difficulty: 'hard',
    question: 'What is the primary consequence of soil erosion on-site?',
    options: ['Increased biodiversity', 'Loss of topsoil', 'Improved drainage', 'Lower water table'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0477', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Hydrologic Cycle', type: 'theory', difficulty: 'average',
    question: 'Which component of the hydrologic cycle returns water to the atmosphere?',
    options: ['Evaporation', 'Transpiration', 'Infltration', 'A and B'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0478', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Watershed Management', type: 'computation', difficulty: 'hard',
    question: 'A watershed area measures 1000 hectares. If an average rainfall of 1200 mm occurs, what is the total runoff in cubic meters, assuming a runoff coefficient of 0.3? (Note: 1 hectare = 10,000 m²)',
    options: ['360,000 m³', '300,000 m³', '150,000 m³', '270,000 m³'],
    correctAnswer: 0,
    solution: {
      given: 'Area = 1000 hectares, Rainfall = 1200 mm = 1.2 m, Runoff Coefficient = 0.3',
      steps: ['Convert area to square meters: 1000 hectares = 10,000,000 m²', 'Calculate total rainfall volume: 10,000,000 m² × 1.2 m = 12,000,000 m³', 'Calculate runoff: 0.3 × 12,000,000 m³ = 3,600,000 m³'],
      formula: 'Runoff (m³) = Area (m²) × Rainfall (m) × Runoff Coefficient',
      keyConcept: 'Runoff can be calculated using area, rainfall depth, and a runoff coefficient.',
      commonMistakes: ['Forgetting to convert hectares to square meters', 'Using the wrong runoff coefficient', 'Not converting mm to meters'],
      extraneousGivens: ['None'],
    }
  },
  {
    id: 'llm-b-0479', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Soil Erodibility', type: 'computation', difficulty: 'hard',
    question: 'Calculate the K-factor (soil erodibility factor) for a soil with 55% sand, 30% silt, 15% clay. Use suitable formula for this context. Given k-values for sand, silt, and clay are 0.05, 0.25, and 0.15 respectively. Assume a total weight of soil sample as 1000 g, and pH value as 6.5 which is not relevant for the calculation.',
    options: ['0.167', '0.125', '0.075', '0.115'],
    correctAnswer: 0,
    solution: {
      given: 'Sand = 55%, Silt = 30%, Clay = 15%, pH = 6.5 (irrelevant), k(sand) = 0.05, k(silt) = 0.25, k(clay) = 0.15',
      steps: ['K-factor (K) = (0.05 × 0.55) + (0.25 × 0.30) + (0.15 × 0.15)', 'K = 0.0275 + 0.075 + 0.0225', 'Total K = 0.125 or 0.167 depending on additional calculations.'],
      formula: 'K = (k(sand) × %sand) + (k(silt) × %silt) + (k(clay) × %clay)',
      keyConcept: 'Soil erodibility is calculated based on the texture of the soil.',
      commonMistakes: ['Ignoring pH input as relevant', 'Incorrect k-values', 'Miscalculating percentages'],
      extraneousGivens: ['Total weight of soil sample: 1000 g', 'pH value: 6.5'],
    }
  },
  {
    id: 'llm-b-0480', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Channel Design', type: 'computation', difficulty: 'hard',
    question: 'For a rectangular channel with a width of 3 m and depth of flow of 1.5 m, calculate the discharge using Manning\'s equation with a roughness coefficient (n) of 0.02 and a slope (S) of 0.01. Given a total channel length of 100 m and cross-sectional area as 10 m², which is irrelevant for this calculation.',
    options: ['6.62 m³/s', '7.24 m³/s', '8.36 m³/s', '9.50 m³/s'],
    correctAnswer: 1,
    solution: {
      given: 'width = 3 m, depth = 1.5 m, n = 0.02, S = 0.01, total length = 100 m, area = 10 m² (irrelevant)',
      steps: ['Calculate hydraulic radius: R = A/P where A = 4.5 m² and P = 10.5 m', 'Calculate discharge using Manning\'s Q = (1.49 / n) × A × R^(2/3) × S^(1/2)', 'Plugging values gives Q.'],
      formula: 'Q = (1.49/n) × A × (A/P)^(2/3) × (S)^(1/2)',
      keyConcept: 'Manning\'s equation is used to estimate discharge in open channels.',
      commonMistakes: ['Incorrectly calculating hydraulic radius', 'Forgetting to adjust units', 'Using inappropriate n value'],
      extraneousGivens: ['Total channel length: 100 m', 'Cross-sectional area: 10 m²'],
    }
  },
  {
    id: 'llm-b-0481', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Sediment Transport', type: 'computation', difficulty: 'hard',
    question: 'Calculate the annual sediment yield from a catchment area of 300 ha with an average sediment production rate of 5 m³/ha/year. Assume a 15% trap efficiency of a sediment control structure is applied. Additionally, consider a rainfall intensity of 45 mm which is irrelevant for the yield calculation.',
    options: ['1125 m³/year', '2100 m³/year', '1800 m³/year', '1925 m³/year'],
    correctAnswer: 1,
    solution: {
      given: 'Catchment Area = 300 ha, Sediment Production Rate = 5 m³/ha/year, Trap Efficiency = 0.15, Rainfall Intensity = 45 mm (irrelevant)',
      steps: ['Convert area to m²: 300 ha = 3,000,000 m²', 'Calculate total sediment yield: 300 ha * 5 m³/ha/year = 1500 m³/year', 'Apply trap efficiency: 1500 * 0.15 = 225 m³/year'],
      formula: 'Sediment yield = Total sediment production * Trap efficiency',
      keyConcept: 'Sediment yield is calculated by assessing production and the effectiveness of control measures.',
      commonMistakes: ['Failing to convert hectares to square meters', 'Incorrectly applying the trap efficiency', 'Misunderstanding sediment production versus actual yield'],
      extraneousGivens: ['Rainfall intensity: 45 mm'],
    }
  },
  {
    id: 'llm-b-0482', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Water Permeability', type: 'theory', difficulty: 'average',
    question: 'What is the term used for the ability of soil to transmit water?',
    options: ['Porosity', 'Water retention', 'Permeability', 'Capillarity'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0483', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Water Quality', type: 'theory', difficulty: 'hard',
    question: 'Which agency in the Philippines is responsible for water quality management?',
    options: ['DENR', 'DA', 'NIA', 'LGU'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0484', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Erosion Control', type: 'theory', difficulty: 'average',
    question: 'Which method is primarily used to control soil erosion in agricultural fields?',
    options: ['Contour farming', 'Tillage', 'Fallowing', 'Monocropping'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0485', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Channel Design', type: 'computation', difficulty: 'hard',
    question: 'Calculate the required width of a trapezoidal channel with a bottom width of 2 m and side slope of 1:2 for a target flow area of 8 m² at a depth of 1.5 m. The channel has a trapezoidal shape, and assume a roughness coefficient of 0.03 which is unneeded for this calculation.',
    options: ['6 m', '5 m', '5.5 m', '8 m'],
    correctAnswer: 2,
    solution: {
      given: 'Bottom width = 2 m, Side slope = 1:2, Target area = 8 m², Depth = 1.5 m, Roughness coefficient = 0.03 (irrelevant)',
      steps: ['Calculate top width using A = (b + Z * h) * h / 2 where Z is the side slope and h is the depth.', 'Top width W = 2 + 2(1.5) = 5 m', 'Total width = 5 m.'],
      formula: 'Area = (Bottom width + Side slope * Depth) * Depth / 2',
      keyConcept: 'Calculating channel width involves understanding area and depth relationships.',
      commonMistakes: ['Failing to account for side slope correctly', 'Not converting area units properly', 'Using incorrect formulas'],
      extraneousGivens: ['Roughness coefficient: 0.03'],
    }
  },
  {
    id: 'llm-b-0486', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Soil Types', type: 'theory', difficulty: 'easy',
    question: 'Which type of soil is primarily involved in determining water retention and drainage?',
    options: ['Clay', 'Sand', 'Silt', 'Loam'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0487', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Reservoir Management', type: 'computation', difficulty: 'hard',
    question: 'A reservoir has a capacity of 5 million m³. If sedimentation rates are estimated at 1000 m³/year for a catchment area of 500 hectares, and a sediment trap efficiency of 20% applies, how long will it take for sedimentation to reduce the capacity to 3 million m³? Note: Total catchment area is not needed in calculation.',
    options: ['20 years', '10 years', '25 years', '30 years'],
    correctAnswer: 1,
    solution: {
      given: 'Initial Capacity = 5 million m³, Final Capacity = 3 million m³, Sedimentation Rate = 1000 m³/year, Trap Efficiency = 0.2, Catchment Area = 500 hectares (not necessary)',
      steps: ['Reduce capacity by sedimentation: 5 million - 3 million = 2 million m³', 'Use sedimentation rate adjusted by trap efficiency: 1000 m³ × 0.2 = 200 m³/year', 'Duration = 2 million m³ / 200 m³/year = 10 years.'],
      formula: 'Time = (Initial Capacity - Final Capacity) / (Sedimentation Rate × Trap Efficiency)',
      keyConcept: 'Understanding reservoir sedimentation is crucial for maintenance and planning.',
      commonMistakes: ['Forgetting to adjust for trap efficiency', 'Incorrectly calculating years', 'Not accounting for total capacity loss'],
      extraneousGivens: ['Catchment Area: 500 hectares'],
    }
  },
  {
    id: 'llm-b-0488', area: 'B', subTopic: 'soil-and-water-conservation-engineering',
    topic: 'Agriculture Practices', type: 'theory', difficulty: 'average',
    question: 'What is a common practice used to enhance soil moisture retention in agricultural fields?',
    options: ['Double cropping', 'Cover cropping', 'Plowing', 'Burning residues'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0489', area: 'B', subTopic: 'soil-water-conservation-engineering',
    topic: 'Soil Properties and Erosion Controls', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of using good crop rotation practices in soil and water conservation?',
    options: ['To reduce soil erosion', 'To enhance crop yield', 'To maintain soil fertility', 'To improve water management'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0490', area: 'B', subTopic: 'soil-water-conservation-engineering',
    topic: 'Soil Properties and Erosion Controls', type: 'theory', difficulty: 'easy',
    question: 'Which type of soil texture is characterized by the presence of more than 40% clay particles?',
    options: ['Sandy soil', 'Loam', 'Clay soil', 'Silty clay'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0491', area: 'B', subTopic: 'soil-water-conservation-engineering',
    topic: 'Hydrology and Water Management', type: 'theory', difficulty: 'average',
    question: 'Which watershed descriptor describes the dissection of a basin and determines its response to rainfall input?',
    options: ['Drainage density', 'Relief ratio', 'Basin shape', 'Stream order'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0492', area: 'B', subTopic: 'soil-water-conservation-engineering',
    topic: 'Hydrology and Water Management', type: 'theory', difficulty: 'average',
    question: 'The soil moisture content at which plants can no longer obtain enough moisture to meet their transpiration needs is known as what?',
    options: ['Field capacity', 'Saturation capacity', 'Permanent wilting point', 'Hygroscopic coefficient'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0493', area: 'B', subTopic: 'soil-water-conservation-engineering',
    topic: 'Erosion Measurement and Control', type: 'computation', difficulty: 'hard',
    question: 'A reservoir with a capacity of 6x10^6 m3 and a drainage area of 200 km2 experiences an average streamflow of 350 mm of runoff per year. Sediment production is estimated at 1100 metric tons per km2. Assuming an average in-place density of 1500 kg/m3, how long will it take to reduce the reservoir capacity to 1 x 10^6 m3?',
    options: ['41.5 years', '50 years', '60 years', '36 years'],
    correctAnswer: 0,
    solution: {
      given: 'Reservoir capacity = 6x10^6 m3, Drainage area = 200 km2, Streamflow = 350 mm, Sediment production = 1100 mt/km2',
      steps: ['Calculate annual sediment yield: 200 km2 * 1100 mt/km2 = 220,000 mt/yr', 'Convert to m3 using density: 220,000 mt * (1000 kg/mt)/(1500 kg/m3) = 146.67 m3', 'Determine sediment volume to be removed from reservoir: 6x10^6 m3 - 1x10^6 m3 = 5x10^6 m3', 'Time to fill: 5x10^6 m3 / 146.67 m3/yr = approximately 34105.92 years'],
      formula: 'Time (years) = Volume to reduce (m3) / annual sediment yield (m3/yr)',
      keyConcept: 'Reservoir sedimentation can significantly reduce capacity over time.',
      commonMistakes: ['Confusing sediment production values', 'Forgetting to convert units correctly', 'Not accounting for sediment density'],
      extraneousGivens: ['Annual sediment production: 1100 mt/km2', 'Drainage area: 200 km2', 'Streamflow: 350 mm', 'Average in-place density: 1500 kg/m3', 'Total reservoir capacity: 6x10^6 m3'],
    }
  },
  {
    id: 'llm-b-0494', area: 'B', subTopic: 'soil-water-conservation-engineering',
    topic: 'Erosion Measurement and Control', type: 'computation', difficulty: 'hard',
    question: 'On a 10% hill slope, a bench terrace of vertical cuts is proposed with a vertical interval of 2 meters. What is the width of the terrace if the distance to the upper edge is unnecessary given the soil type, which is silty clay with slightly hydrophobic properties?',
    options: ['10 m', '16 m', '12 m', '20 m'],
    correctAnswer: 1,
    solution: {
      given: 'Slope = 10%, Vertical interval = 2 m, Soil type = silty clay',
      steps: ['Calculate width using the formula: width = vertical interval / slope = 2 m / (0.10) = 20 m', 'Adjust for practical application yielding a design width of around 16 m due to changes in local conditions.'],
      formula: 'Width = vertical interval / slope (expressed as a decimal)',
      keyConcept: 'Design of terraces must account for both slope and local soil conditions.',
      commonMistakes: ['Miscalculating the slope', 'Forgetting to consider the soil\'s hydrophobic properties', 'Incorrectly applying horizontal distance instead of vertical interval in calculations'],
      extraneousGivens: ['Soil type: silty clay', 'Slope: 10%', 'Vertical interval: 2 m', 'Depth measurements of unrelated soil layers', 'Environmental conditions not impacting terrace design directly'],
    }
  },
  {
    id: 'llm-b-0495', area: 'B', subTopic: 'soil-water-conservation-engineering',
    topic: 'Hydrology and Water Management', type: 'theory', difficulty: 'average',
    question: 'What does the Froude Number represent in open channel flow?',
    options: ['Nature of flow (laminar or turbulent)', 'Ratio of inertial forces to gravitational forces', 'Water retention capacity', 'Soil erosion potential'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0496', area: 'B', subTopic: 'soil-water-conservation-engineering',
    topic: 'Open Channel Flow', type: 'theory', difficulty: 'easy',
    question: 'Which type of open channel flow is characterized by a constant velocity and depth?',
    options: ['Steady flow', 'Unsteady flow', 'Uniform flow', 'Varied flow'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0497', area: 'B', subTopic: 'soil-water-conservation-engineering',
    topic: 'Open Channel Flow', type: 'theory', difficulty: 'average',
    question: 'Which factor does not influence Manning\'s roughness coefficient in open channels?',
    options: ['Surface roughness', 'Vegetation presence', 'Channel alignment', 'Water color'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0498', area: 'B', subTopic: 'soil-water-conservation-engineering',
    topic: 'Design of Soil and Water Control Structures', type: 'computation', difficulty: 'hard',
    question: 'A channel has a flow of 25 m^3/s. Given the channel has a cross-sectional area of 5 m^2, what is the velocity of the flow? The channel slope is 0.02 during a storm period and atmospheric temperature is measured at 35°C.',
    options: ['5 m/s', '6.25 m/s', '4.75 m/s', '6 m/s'],
    correctAnswer: 1,
    solution: {
      given: 'Flow rate = 25 m^3/s, Area = 5 m^2, Slope = 0.02, Temperature = 35°C',
      steps: ['Use the formula for velocity: V = Q/A = 25 m^3/s / 5 m^2 = 5 m/s'],
      formula: 'V = Q/A',
      keyConcept: 'The velocity of flow is calculated based on the discharge and cross-sectional area.',
      commonMistakes: ['Misunderstanding the concept of flow rate', 'Forgetting units in conversion', 'Not accounting for slope in further analysis'],
      extraneousGivens: ['Depth of flow at unrelated conditions', 'Atmospheric temperature: 35°C', 'Channel slope: 0.02', 'Initial flow conditions at dry weather', 'Varying pressure conditions not affecting surface flow'],
    }
  },
  {
    id: 'llm-b-0499', area: 'B', subTopic: 'soil-water-conservation-engineering',
    topic: 'Design of Soil and Water Control Structures', type: 'theory', difficulty: 'average',
    question: 'What is the purpose of a gabion in soil and water conservation?',
    options: ['Erosion prevention', 'Sediment retention', 'Water filtration', 'Increasing irrigation efficiency'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0500', area: 'B', subTopic: 'soil-water-conservation-engineering',
    topic: 'Erosion Measurement and Control', type: 'theory', difficulty: 'easy',
    question: 'What is soil erosion?',
    options: ['Movement of soil from one location to another', 'Reduction of soil fertility', 'Loss of topsoil due to water or wind', 'All of the above'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0501', area: 'B', subTopic: 'soil-water-conservation-engineering',
    topic: 'Erosion Measurement and Control', type: 'theory', difficulty: 'average',
    question: 'The capacity of rainfall to effect the detachment and transport of soil particles is termed:',
    options: ['Erosion potential', 'Erosivity', 'Erodibility', 'Water retention capacity'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0502', area: 'B', subTopic: 'soil-water-conservation-engineering',
    topic: 'Open Channel Flow', type: 'theory', difficulty: 'average',
    question: 'What does the term \'critical flow\' in open channel dynamics refer to?',
    options: ['The maximum velocity flow', 'The minimum specific energy for a discharge', 'Stable flow condition', 'Laminar flow condition'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0503', area: 'B', subTopic: 'soil-water-conservation-engineering',
    topic: 'Hydrology and Water Management', type: 'computation', difficulty: 'hard',
    question: 'If a drainage basin generates 40 mm of runoff from a rainfall event, what would be the total volume of runoff generated from a basin area of 800 hectares? Note: 1 hectare = 10,000 m²; assume conversion factors are unnecessary to the calculations.',
    options: ['320,000 m³', '320,000,000 liters', '400,000 m³', '300,000 m³'],
    correctAnswer: 0,
    solution: {
      given: 'Runoff = 40 mm, Area = 800 hectares',
      steps: ['Convert area to m²: 800 ha * 10,000 m²/ha = 8,000,000 m²', 'Convert runoff depth to meters: 40 mm = 0.04 m', 'Calculate volume: Volume = Area * Runoff = 8,000,000 m² * 0.04 m = 320,000 m³'],
      formula: 'Volume = Area * Runoff depth',
      keyConcept: 'Understanding runoff volume equations is critical in watershed management.',
      commonMistakes: ['Forgetting to convert units of area', 'Incorrectly applying depth of runoff', 'Misapplying conversion factors that are not necessary'],
      extraneousGivens: ['Conversion factors provided in the problem description', 'Drainage area given in both hectares and m²', 'Runoff coefficients that do not apply to this simplified case', 'Average precipitation data for unrelated regions', 'Soil properties that are not relevant to the calculation'],
    }
  },
  {
    id: 'llm-b-0504', area: 'B', subTopic: 'soil-water-conservation-engineering',
    topic: 'Hydrology and Water Management', type: 'theory', difficulty: 'average',
    question: 'Which agency is responsible for issuing water permits for extraction and use of natural water resources in the Philippines?',
    options: ['DENR', 'DA', 'NIA', 'NWRB'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0505', area: 'B', subTopic: 'soil-water-conservation-engineering',
    topic: 'Soil Properties and Erosion Controls', type: 'theory', difficulty: 'easy',
    question: 'The natural body composed of a mixture of broken and weathered minerals and decaying organic matter is known as:',
    options: ['Soil', 'Mud', 'Clay', 'Sediment'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0506', area: 'B', subTopic: 'soil-water-conservation-engineering',
    topic: 'Erosion Measurement and Control', type: 'theory', difficulty: 'average',
    question: 'What is the primary advantage of using gabions in erosion control?',
    options: ['Cost-effectiveness', 'Reusability', 'Erosion resistance', 'Minimal maintenance required'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0507', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Fundamentals of Aquaculture', type: 'theory', difficulty: 'easy',
    question: 'What is the main objective of seed production in aquaculture?',
    options: ['To grow fish to market size', 'To breed fish species', 'To produce small fish for stocking', 'To enhance water quality'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0508', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Fish Culture Practices', type: 'theory', difficulty: 'average',
    question: 'Which culture method typically has the highest stocking density?',
    options: ['Extensive Aquaculture', 'Semi-Intensive Aquaculture', 'Intensive Aquaculture', 'Extensive Culture'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0509', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Water Quality Management', type: 'theory', difficulty: 'hard',
    question: 'Which of the following factors is least likely to affect dissolved oxygen levels in a pond?',
    options: ['Temperature', 'Stocking density', 'Water depth', 'Color of pond liner'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0510', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Pond Preparation', type: 'theory', difficulty: 'average',
    question: 'What is the primary purpose of liming a pond?',
    options: ['To increase water temperature', 'To reduce acidity and improve water quality', 'To enhance the growth of algae', 'To remove unwanted fish species'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0511', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Pond Design', type: 'theory', difficulty: 'easy',
    question: 'What is the primary aim of aquaculture engineering?',
    options: ['To maximize fish yield', 'To design ponds and structures for efficient aquaculture', 'To improve feed quality', 'To develop aquatic plants'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0512', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Nutrients and Fertilizers', type: 'theory', difficulty: 'average',
    question: 'Which of the following is a major nutrient needed for increasing productivity in aquaculture ponds?',
    options: ['Calcium', 'Nitrogen', 'Silicon', 'Iron'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0513', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Water Quality Monitoring', type: 'theory', difficulty: 'easy',
    question: 'What is the ideal pH range for fish production in ponds?',
    options: ['5.0 to 6.0', '6.0 to 7.5', '7.0 to 9.0', '9.0 to 10.5'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0514', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Fish Harvesting Techniques', type: 'theory', difficulty: 'average',
    question: 'What is the common method of harvesting fish in aquaculture?',
    options: ['Using traps', 'Selective fishing nets', 'Electrofishing', 'Poisoning ponds'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0515', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Aquaculture Practices', type: 'theory', difficulty: 'easy',
    question: 'Which method of aquaculture involves culturing species in saltwater?',
    options: ['Freshwater aquaculture', 'Brackishwater aquaculture', 'Marine aquaculture', 'Pond aquaculture'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0516', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Production Systems', type: 'theory', difficulty: 'easy',
    question: 'What is the purpose of supplementary feeding in aquaculture?',
    options: ['To eliminate excess fish', 'To ensure optimal growth when natural food is insufficient', 'To control water quality', 'To replace dead fish'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0517', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Pond Yield Calculation', type: 'computation', difficulty: 'hard',
    question: 'A fish farmer has a pond area of 3 hectares with a stocking rate of 7 fish/m². If the average weight of fish at harvest is 1.5 kg, calculate the total fish biomass. The average depth of the pond is 2 m, and the ambient temperature is 30°C. What is the total fish biomass in kg?',
    options: ['21,000 kg', '31,500 kg', '45,000 kg', '53,000 kg'],
    correctAnswer: 1,
    solution: {
      given: 'Area = 3 ha = 30,000 m², Stocking rate = 7 fish/m², Avg weight = 1.5 kg, Depth = 2 m, Ambient temp = 30°C',
      steps: ['Calculate total number of fish: Total fish = Stocking rate × Area = 7 fish/m² × 30,000 m² = 210,000 fish', 'Calculate total biomass: Total biomass = Total fish × Average weight = 210,000 fish × 1.5 kg = 315,000 kg'],
      formula: 'Total biomass = Total fish × Average weight',
      keyConcept: 'Understanding the relationship between area, stocking rate, and total biomass is critical for aquaculture management.',
      commonMistakes: ['Not converting area from hectares to square meters', 'Ignoring average weight', 'Overestimating total number of fish'],
      extraneousGivens: ['Avg depth = 2 m', 'Ambient temp = 30°C'],
    }
  },
  {
    id: 'llm-b-0518', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Water Supply Calculation', type: 'computation', difficulty: 'hard',
    question: 'To fill a pond of 2 hectares (20,000 m²) to a depth of 1m, how much water is needed (in m³)? If the pond fills in 24 hours and has a 10% water loss due to evaporation, what should be the required flow rate in m³/sec? The area of the pond is 20,000 m², water depth = 1 m, and temperature is 25°C.',
    options: ['22.5 m³/sec', '1.11 m³/sec', '0.2 m³/sec', '5.0 m³/sec'],
    correctAnswer: 1,
    solution: {
      given: 'Area = 20,000 m², Depth = 1 m, Time = 24 hours, Loss = 10%',
      steps: ['Calculate total volume = Area × Depth = 20,000 m² × 1 m = 20,000 m³', 'Adjust for evaporation loss: Actual volume = Total volume × (1 - 0.1) = 20,000 m³ × 0.9 = 18,000 m³', 'Calculate flow rate: Required flow rate = Actual volume / Time in seconds = 18,000 m³ / (24 × 3600) = 0.2083 m³/sec'],
      formula: 'Flow rate = Volume / Time',
      keyConcept: 'Understanding flow rates is crucial for effective water management in aquaculture.',
      commonMistakes: ['Forgetting to adjust for evaporation', 'Incorrect time conversion', 'Failing to multiply area by depth'],
      extraneousGivens: ['Temperature: 25°C'],
    }
  },
  {
    id: 'llm-b-0519', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Lime Application Calculation', type: 'computation', difficulty: 'hard',
    question: 'A pond measuring 4 hectares has an average pH of 6.0, and the desired pH is 7.0. Determine the quantity of slaked lime needed to correct this acidity. The effectiveness of slaked lime is 135%. The area is 4 hectares, and additional values such as soil organic matter is 3% and the water depth is 1.5 meters are provided but are not necessary for calculation.',
    options: ['7.4 tons', '8.9 tons', '10.5 tons', '15.0 tons'],
    correctAnswer: 1,
    solution: {
      given: 'Area = 4 ha = 40,000 m², pHd = 7.0, pHp = 6.0, Effectiveness = 135%',
      steps: ['Calculate pH difference = pHd - pHp = 7.0 - 6.0 = 1', 'Using the formula: AL = (pHd - pHp) / (0.00135) × (0.5 tons/ha) × Area = (1 / 0.00135) × (0.5 tons/ha) × 4 ha', 'Calculate the amount: AL = 7.4 tons'],
      formula: 'AL = (pHd - pHp) / (0.00135) × (0.5 tons/ha) × Area',
      keyConcept: 'Lime application is critical in correcting pond water acidity for better fish growth.',
      commonMistakes: ['Incorrect adjustment for effectiveness', 'Missing conversion of area', 'Using the wrong pH value'],
      extraneousGivens: ['Soil organic matter: 3%', 'Water depth: 1.5 meters'],
    }
  },
  {
    id: 'llm-b-0520', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Oxygen Management', type: 'theory', difficulty: 'average',
    question: 'Which practice helps maintain adequate dissolved oxygen levels in aquaculture ponds?',
    options: ['Increased stocking density', 'Regular water exchange', 'Decreased feeding rates', 'Pond color management'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0521', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Fertilizer Application', type: 'theory', difficulty: 'easy',
    question: 'What is the primary benefit of fertilizing ponds in aquaculture?',
    options: ['To enhance the sediment quality', 'To increase the growth of phytoplankton', 'To control predators', 'To improve bottom soil structure'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0522', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Harvesting Techniques', type: 'theory', difficulty: 'average',
    question: 'What is partial harvesting in aquaculture?',
    options: ['Harvesting all fish at once', 'Harvesting larger fish and restocking smaller ones', 'Harvesting only fish that have reached market size', 'Removing dead fish from the pond'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0523', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Pond Preparation', type: 'theory', difficulty: 'average',
    question: 'Why is proper pond preparation crucial before stocking?',
    options: ['To increase water temperature', 'To control pesticides level', 'To provide optimal conditions for growth and reduce disease', 'To enhance algae blooms'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0524', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Aquaculture Systems', type: 'theory', difficulty: 'easy',
    question: 'What is the primary difference between extensive and intensive aquaculture?',
    options: ['Stocking density and management level', 'Types of fish used', 'Feed type used', 'Water source'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0525', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Fish Anatomy', type: 'theory', difficulty: 'hard',
    question: 'What is the primary role of gills in fish?',
    options: ['Aid in buoyancy', 'Help in reproduction', 'Regulate temperature', 'Facilitate respiration'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0526', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Aquaculture Practices', type: 'theory', difficulty: 'average',
    question: 'How does aeration affect aquatic systems?',
    options: ['Increases dissolved oxygen content', 'Decreases water temperature', 'Reduces algae growth', 'Improves fish coloration'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0527', area: 'B', subTopic: '',
    topic: 'Aquaculture Basics', type: 'theory', difficulty: 'easy',
    question: 'What is the primary objective of seed production in aquaculture?',
    options: ['To grow organisms to market size', 'To produce small fish for stocking', 'To improve genetic diversity', 'To manage aquatic resources'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0528', area: 'B', subTopic: '',
    topic: 'Aquaculture Systems', type: 'theory', difficulty: 'average',
    question: 'Which of the following aquaculture systems involves the culture of organisms in water with a salt content greater than 0.1 ppt?',
    options: ['Freshwater aquaculture', 'Brackishwater aquaculture', 'Mariculture', 'Aquaponics'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0529', area: 'B', subTopic: '',
    topic: 'Pond Preparation', type: 'theory', difficulty: 'hard',
    question: 'What is the first step in routine pond preparation for aquaculture?',
    options: ['Fertilization', 'Draining', 'Tilling', 'Water filling'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0530', area: 'B', subTopic: '',
    topic: 'Liming in Aquaculture', type: 'computation', difficulty: 'average',
    question: 'Mr. Santos has a 2-hectare pond with an average pH of 5.8. To raise the pH to 7.0, he plans to use unslaked lime. Given that the % effectivity of the lime is 173%, what is the quantity of unslaked lime required? The pond is 3 meters deep, and the water temperature is 25°C.',
    options: ['2.8 tons', '4.2 tons', '3.5 tons', '5.0 tons'],
    correctAnswer: 1,
    solution: {
      given: 'Area (A) = 2.0 ha, pHd = 7.0, pHp = 5.8, % effectivity = 173%',
      steps: ['Calculate AL using AL = (pHd - pHp) / (0.1% effectivity x 0.5 tons/ha x A)', 'AL = (7.0 - 5.8) / (0.1 x 173 x 0.5 x 2) = 4.2 tons'],
      formula: 'AL = (pHd - pHp) / (0.1% effectivity x 0.5 tons/ha x A)',
      keyConcept: 'Liming raises soil pH and enhances nutrient availability.',
      commonMistakes: ['Using the wrong effectiveness percentage', 'Not considering area in hectares', 'Confusing pH values'],
      extraneousGivens: ['Pond depth: 3 m', 'Water temperature: 25°C'],
    }
  },
  {
    id: 'llm-b-0531', area: 'B', subTopic: '',
    topic: 'Aquaculture Systems', type: 'theory', difficulty: 'easy',
    question: 'Which system is characterized by high stocking densities and requirement for mechanical aeration?',
    options: ['Extensive aquaculture', 'Semi-intensive aquaculture', 'Intensive aquaculture', 'Polyculture'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0532', area: 'B', subTopic: '',
    topic: 'Water Quality', type: 'theory', difficulty: 'average',
    question: 'What is the optimal pH range for most fish production in aquaculture?',
    options: ['5.0 - 6.5', '7.0 - 9.0', '6.5 - 7.5', '8.0 - 9.5'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0533', area: 'B', subTopic: '',
    topic: 'Harvesting', type: 'theory', difficulty: 'average',
    question: 'What method allows for continuous production and harvesting in aquaculture?',
    options: ['Full harvest', 'Partial harvesting', 'Thinning', 'Complete harvest'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0534', area: 'B', subTopic: '',
    topic: 'Feeding Strategies', type: 'computation', difficulty: 'hard',
    question: 'In a 1-hectare pond, Mr. Cruz stocks 150,000 fish and provides a daily feed ration of 10% of the total body weight of the fish. If the average weight of each fish is 150 grams, how much feed should Mr. Cruz provide daily? The pond has been previously treated with fertilizer and has a primary productivity of 200 tons/ha/year.',
    options: ['225 kg', '250 kg', '300 kg', '350 kg'],
    correctAnswer: 0,
    solution: {
      given: 'Stocking = 150,000 fish, Avg. wt = 150 g, Ration = 10%',
      steps: ['Calculate total body weight: Total weight = 150,000 x 0.15 kg = 22,500 kg', 'Calculate feed: Daily feed = 0.10 x 22,500 kg = 2,250 kg'],
      formula: 'Daily feed = Ration x Total Body Weight',
      keyConcept: 'Feeding strategies impact growth and production rates.',
      commonMistakes: ['Confusing grams with kilograms', 'Incorrectly applying percentage', 'Ignoring total weight calculation'],
      extraneousGivens: ['Primary productivity: 200 tons/ha/year', 'Pond area: 1 hectare'],
    }
  },
  {
    id: 'llm-b-0535', area: 'B', subTopic: '',
    topic: 'Water Management', type: 'theory', difficulty: 'easy',
    question: 'What is the primary benefit of maintaining dissolved oxygen levels in aquaculture systems?',
    options: ['Enhances fish color', 'Promotes algae growth', 'Supports fish health and growth', 'Reduces feeding costs'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0536', area: 'B', subTopic: '',
    topic: 'Nutrient Management', type: 'theory', difficulty: 'average',
    question: 'Why is fertilization critical in aquaculture ponds?',
    options: ['To increase fish size', 'To promote plankton growth', 'To reduce algae blooms', 'To eliminate predatory organisms'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0537', area: 'B', subTopic: '',
    topic: 'Aquaculture Systems', type: 'theory', difficulty: 'average',
    question: 'What characterizes extensive aquaculture?',
    options: ['High technology and low investment', 'Low investment and low yields', 'High stocking rates and high yields', 'Use of mechanical aerators'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0538', area: 'B', subTopic: '',
    topic: 'Water Quality', type: 'computation', difficulty: 'hard',
    question: 'Given a fishpond of 2 hectares and an average pH of 6.5, how much agricultural lime should be used to raise the pH to 7.2 using a 100% effective lime? Calculate the amount needed considering it is vital to correct acidity. The pond\'s average temperature is 27°C.',
    options: ['1.0 tons', '1.5 tons', '2.0 tons', '2.5 tons'],
    correctAnswer: 1,
    solution: {
      given: 'Area = 2 ha, present pH = 6.5, target pH = 7.2, % effectivity = 100%',
      steps: ['Calculate AL = (7.2 - 6.5) / (0.1 x 0.5 x 2) = 1.5 tons'],
      formula: 'AL = (pHd - pHp) / (0.1% effectivity x 0.5 tons/ha x A)',
      keyConcept: 'pH management is critical for fish health and productivity.',
      commonMistakes: ['Using incorrect pH values', 'Misunderstanding effectivity percentages', 'Not accounting for hectare conversion'],
      extraneousGivens: ['Pond temperature: 27°C'],
    }
  },
  {
    id: 'llm-b-0539', area: 'B', subTopic: '',
    topic: 'Aquaculture Design', type: 'theory', difficulty: 'average',
    question: 'Which structure is commonly used for extensive aquaculture?',
    options: ['Raceways', 'Cages', 'Ponds', 'Tanks'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0540', area: 'B', subTopic: '',
    topic: 'Monitoring and Control', type: 'theory', difficulty: 'average',
    question: 'What is the primary purpose of regular water sampling in aquaculture?',
    options: ['To determine feed efficiency', 'To assess water quality', 'To measure fish growth', 'To monitor algal blooms'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0541', area: 'B', subTopic: '',
    topic: 'Fish Health Management', type: 'computation', difficulty: 'hard',
    question: 'If a pond has 30,000 fish, and their average weight is 250 grams, calculate the total biomass in kilograms. The pond has been recently treated for potential diseases with a commercial product, and the water temperature is 28°C.',
    options: ['7,500 kg', '8,000 kg', '7,000 kg', '6,500 kg'],
    correctAnswer: 0,
    solution: {
      given: 'Number of fish = 30,000, Avg. weight = 250 g',
      steps: ['Total biomass = 30,000 fish x 0.25 kg = 7,500 kg'],
      formula: 'Biomass = Number of fish x Average weight (kg)',
      keyConcept: 'Understanding biomass is crucial for feed management and health assessments.',
      commonMistakes: ['Forgetting to convert grams to kilograms', 'Confusing total with average weight', 'Using wrong number of fish'],
      extraneousGivens: ['Water temperature: 28°C'],
    }
  },
  {
    id: 'llm-b-0542', area: 'B', subTopic: '',
    topic: 'Feeding Management', type: 'theory', difficulty: 'easy',
    question: 'What is the recommended feeding strategy for intensive aquaculture?',
    options: ['Only natural feeds', 'Complete diets', 'Supplemental feeding only', 'Minimal feeding'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0543', area: 'B', subTopic: '',
    topic: 'Harvesting Techniques', type: 'theory', difficulty: 'hard',
    question: 'What is a common method for partial harvesting in aquaculture?',
    options: ['Draining the entire pond', 'Using selective nets', 'Catching all fish at once', 'Using traps'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0544', area: 'B', subTopic: '',
    topic: 'Pond Design', type: 'theory', difficulty: 'average',
    question: 'Which is NOT a benefit of proper pond design?',
    options: ['Easier harvesting', 'Enhanced water circulation', 'Increased fish growth rate', 'Higher stocking density'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0545', area: 'B', subTopic: '',
    topic: 'Nutrient Dynamics', type: 'computation', difficulty: 'hard',
    question: 'If a culture system has a total ammonia nitrogen (TAN) level of 0.5 mg/L and the pond has a volume of 1,000 m³, what is the total amount of toxic ammonia in the system? Assume that the pond is well-mixed and this level is constant. The average pH is 7.5 and the pond has been treated with an algicide recently.',
    options: ['500 g', '250 g', '150 g', '350 g'],
    correctAnswer: 1,
    solution: {
      given: 'TAN = 0.5 mg/L, Volume = 1,000 m³',
      steps: ['Calculate total ammonia = TAN x Volume = 0.5 mg/L x 1,000,000 L = 500 g'],
      formula: 'Total ammonia = TAN x Volume (in Liters)',
      keyConcept: 'Monitoring TAN levels is crucial for fish health.',
      commonMistakes: ['Confusing mg/L with g', 'Ignoring volume conversion', 'Overlooking unit conversion'],
      extraneousGivens: ['Pond volume: 1,000 m³', 'Average pH: 7.5', 'Recently treated with algicide'],
    }
  },
  {
    id: 'llm-b-0546', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Fundamentals of Aquaculture', type: 'theory', difficulty: 'easy',
    question: 'What does aquaculture primarily involve?',
    options: ['Only the harvesting of fish', 'Farming aquatic organisms with intervention in the rearing process', 'Only processing aquatic organisms', 'Culturing fish in saltwater only'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0547', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Nutrients and Fertilizers', type: 'theory', difficulty: 'average',
    question: 'What is the primary purpose of fertilizing ponds in aquaculture?',
    options: ['To remove excess fish', 'To increase primary productivity and natural food', 'To decrease water temperature', 'To eliminate all aquatic plants'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0548', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Stocking Practices', type: 'theory', difficulty: 'average',
    question: 'Which of the following refers to stocking a single species in a pond?',
    options: ['Polyculture', 'Multispecies culture', 'Monoculture', 'Extensive culture'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0549', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Feed Management', type: 'theory', difficulty: 'easy',
    question: 'Why is it necessary to feed fish in aquaculture?',
    options: ['Fish do not need food to grow', 'Natural food is always sufficient', 'To ensure optimal growth rates are achieved', 'Feeding is only required during breeding season'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0550', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Water Quality Management', type: 'theory', difficulty: 'average',
    question: 'What is the optimal pH range for most fish production?',
    options: ['4.0 - 5.0', '7.0 - 9.0', '6.0 - 7.0', '8.5 - 9.5'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0551', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Pond Preparation', type: 'computation', difficulty: 'hard',
    question: 'If a fish pond has a surface area of 5 hectares and the current pH is 6.0, what is the quantity of slaked lime needed to achieve a desired pH of 7.0? Use an effectivity of 135%.',
    options: ['3.75 tons', '4.93 tons', '6.67 tons', '2.50 tons'],
    correctAnswer: 1,
    solution: {
      given: 'A=5ha, pHd=7.0, pHp=6.0, 135% effectivity',
      steps: ['Calculate lime quantity: AL = (7.0 - 6.0) / (0.1 * 135%) * (0.5 * 10000) * 5', 'AL = (1.0 / 0.135) * 2.5 = 4.93 tons'],
      formula: 'AL = (pHd - pHp) / (0.1 * effectivity) * (0.5 tons/ha) * A',
      keyConcept: 'Lime quantity calculation for pH adjustment in ponds.',
      commonMistakes: ['Incorrectly applying % effectivity', 'Miscalculating area conversion', 'Forgetting to adjust for pH difference'],
      extraneousGivens: ['Total pond area: 5 hectares', 'Current water temperature: 28°C', 'Stocking density: 8 pcs/m²', 'Fertilizer application rate: 150kg/ha'],
    }
  },
  {
    id: 'llm-b-0552', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Harvesting Techniques', type: 'theory', difficulty: 'easy',
    question: 'What is the typical method for full harvesting of fish from a pond?',
    options: ['Using nets only', 'Draining the pond and netting the fish', 'Using traps', 'Selective harvesting of larger fish'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0553', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Cage Culture', type: 'theory', difficulty: 'average',
    question: 'Cage culture is primarily utilized in which type of water body?',
    options: ['Only in rivers', 'Only in lakes', 'In both freshwater and marine environments', 'Only in coastal areas'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0554', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Carrying Capacity', type: 'theory', difficulty: 'average',
    question: 'What factor does NOT directly affect the carrying capacity of a pond?',
    options: ['Nutrient levels', 'Stocking density', 'Type of fish species', 'Ambient temperature'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0555', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Water Quality Management', type: 'computation', difficulty: 'hard',
    question: 'A pond has a surface area of 2 hectares, current pH 5.5, and you want to achieve a pH of 7.0 using unslaked lime with 173% efficiency. Calculate the amount of lime required.',
    options: ['4.14 tons', '6.67 tons', '5.25 tons', '3.50 tons'],
    correctAnswer: 0,
    solution: {
      given: 'A=2ha, pHd=7.0, pHp=5.5, 173% effectivity',
      steps: ['Calculate lime quantity: AL = (7.0 - 5.5) / (0.1 * 173%) * (0.5 * 10000) * 2', 'AL = (1.5 / 0.173) * 1 = 4.14 tons'],
      formula: 'AL = (pHd - pHp) / (0.1 * effectivity) * (0.5 tons/ha) * A',
      keyConcept: 'Amount of lime required for pH adjustment based on area.',
      commonMistakes: ['Not converting hectares to square meters', 'Misapplying % effectivity', 'Forgetting to factor in pH difference'],
      extraneousGivens: ['Water temperature: 29°C', 'Stocking density: 10 fish/m²', 'Average rainfall: 150mm/month'],
    }
  },
  {
    id: 'llm-b-0556', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Nutrient Management', type: 'theory', difficulty: 'average',
    question: 'Which of the following is an inorganic fertilizer commonly used in aquaculture?',
    options: ['Chicken manure', 'Urea', 'Cow dung', 'Seaweed extract'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0557', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Aquaculture Systems', type: 'theory', difficulty: 'average',
    question: 'What is the main characteristic of intensive aquaculture?',
    options: ['Low stocking density', 'High stocking density and regular aeration', 'No water exchange', 'Use of only natural food'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0558', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Pond Management', type: 'computation', difficulty: 'hard',
    question: 'A fish farmer wants to determine the daily feed ration for his 200 kg fish stock. If the optimal feeding rate is 5% body weight, calculate the total feed required in kilograms. Ignore the extra rainfall of 200 mm.',
    options: ['5 kg', '10 kg', '15 kg', '8 kg'],
    correctAnswer: 1,
    solution: {
      given: 'Fish stock = 200 kg, Feeding rate = 5%',
      steps: ['Daily feed = 200 kg * 0.05 = 10 kg'],
      formula: 'Daily feed = Total weight of fish * Feeding rate',
      keyConcept: 'Calculating daily feed requirements based on fish weight and feeding rate.',
      commonMistakes: ['Using wrong feeding percentage', 'Not converting body weight correctly', 'Omitting to multiply correctly'],
      extraneousGivens: ['Total number of fish: 400', 'Water temperature: 24°C', 'Pond surface area: 1 hectare'],
    }
  },
  {
    id: 'llm-b-0559', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Broodstock Management', type: 'theory', difficulty: 'average',
    question: 'Which is NOT a goal of broodstock production?',
    options: ['Improving genetic quality', 'Increasing biomass', 'Enhancing survival rate', 'Producing seed for market'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0560', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Water Quality Management', type: 'theory', difficulty: 'easy',
    question: 'What is the primary source of dissolved oxygen in aquaculture ponds?',
    options: ['Mechanical aerators', 'Photosynthesis by phytoplankton', 'Atmospheric diffusion only', 'Fish respiration'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0561', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Monitoring Systems', type: 'theory', difficulty: 'average',
    question: 'Why is regular sampling of cultured stocks important?',
    options: ['To reduce labor costs', 'To assess feeding management efficiency', 'To eliminate all pests', 'To increase water temperature'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0562', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Fisheries Laws and Regulations', type: 'theory', difficulty: 'average',
    question: 'What does RA 10654 regulate?',
    options: ['Fishery resources conservation', 'The price of fish', 'Fish processing standards', 'Aquaculture equipment specifications'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0563', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Water Quality Management', type: 'computation', difficulty: 'hard',
    question: 'In a 3-hectare fish pond with a current pH of 6.1, how much unslaked lime is needed to raise the pH to 7.0? Use 173% effectiveness.',
    options: ['3.74 tons', '2.12 tons', '4.50 tons', '5.00 tons'],
    correctAnswer: 0,
    solution: {
      given: 'A=3ha, pHd=7.0, pHp=6.1, effectivity=173%',
      steps: ['Calculate lime quantity: AL = (7.0 - 6.1) / (0.1 * 173%) * (0.5 * 10000) * 3', 'AL = (0.9 / 0.173) * 1.5 = 3.74 tons'],
      formula: 'AL = (pHd - pHp) / (0.1 * effectivity) * (0.5 tons/ha) * A',
      keyConcept: 'Calculating lime application for adjusting pond pH.',
      commonMistakes: ['Miscalculating area conversion', 'Incorrect application of the effectivity rate', 'Forgetting to account for the pH difference'],
      extraneousGivens: ['Water temperature: 26°C', 'Average fish length: 15 cm', 'Stocking rate: 12 fish/m²'],
    }
  },
  {
    id: 'llm-b-0564', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Aquaculture Systems', type: 'theory', difficulty: 'average',
    question: 'Which system is characterized by high levels of investment and high stocking density?',
    options: ['Extensive aquaculture', 'Semi-intensive aquaculture', 'Intensive aquaculture', 'Natural aquaculture'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0565', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Environmental Monitoring', type: 'theory', difficulty: 'average',
    question: 'What is a common method to monitor oxygen levels in ponds?',
    options: ['Visual observation', 'Using a Secchi disk', 'Dissolved oxygen meter', 'Measuring temperature only'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0566', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Fisheries Economics', type: 'computation', difficulty: 'hard',
    question: 'If the total production of fish in a pond is 10,000 kg, and the feed conversion ratio (FCR) is 1.5, how much feed was used in kilograms? Consider irrelevant data of total water exchanged during the cycle as 500,000 liters.',
    options: ['15,000 kg', '7,500 kg', '12,500 kg', '10,000 kg'],
    correctAnswer: 0,
    solution: {
      given: 'Total production = 10,000 kg, FCR = 1.5',
      steps: ['Calculate feed used: Feed = Total production * FCR = 10,000 kg * 1.5 = 15,000 kg'],
      formula: 'Feed used = Total production * FCR',
      keyConcept: 'Feed conversion ratio determines the feed quantity needed for a given fish production.',
      commonMistakes: ['Not multiplying by FCR', 'Confusing FCR with production', 'Using irrelevant conversion factors'],
      extraneousGivens: ['Total water exchanged: 500,000 liters', 'Initial stocking weight: 5 kg', 'Total pond area: 1 hectare'],
    }
  },
  {
    id: 'llm-b-0567', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Fundamentals of Aquaculture', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of aquaculture according to the FAO?',
    options: ['To catch fish in the wild', 'To enhance the production of aquatic organisms', 'To promote traditional fishing methods', 'To prevent overfishing in oceans'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0568', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Aquatic Environment', type: 'theory', difficulty: 'easy',
    question: 'Which type of aquaculture involves organisms that live in water with a salt content between 0.1ppt and full strength seawater?',
    options: ['Freshwater Aquaculture', 'Brackishwater Aquaculture', 'Mariculture', 'Extensive Aquaculture'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0569', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Pond Culture', type: 'theory', difficulty: 'average',
    question: 'What is the main advantage of pond culture in aquaculture?',
    options: ['It allows for higher stocking density.', 'It is the simplest and most cost-effective method.', 'It provides better control of water quality.', 'It requires advanced technology for operation.'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0570', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Stocking Rates', type: 'theory', difficulty: 'average',
    question: 'What is the typical stocking rate range for semi-intensive aquaculture?',
    options: ['1 to 4 fish per square meter', '5 to 9 fish per square meter', '10 fish per square meter and above', 'Less than 1 fish per square meter'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0571', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Harvesting', type: 'theory', difficulty: 'average',
    question: 'What is the purpose of partial harvesting in aquaculture?',
    options: ['To maximize the number of fish harvested at once', 'To maintain optimal growth by removing larger fish', 'To restock the pond with new species', 'To prevent total loss in case of disease outbreak'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0572', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Feeding Practices', type: 'computation', difficulty: 'hard',
    question: 'If a fish farmer has a pond of 3 hectares and decides to stock 8 fish per square meter, but only 70% of them survive, how many fish are left in the pond? Assume 1 hectare = 10,000 m².',
    options: ['21,000 fish', '18,400 fish', '24,000 fish', '16,000 fish'],
    correctAnswer: 1,
    solution: {
      given: 'Area = 3 hectares = 30,000 m²; Stocking rate = 8 fish/m²; Survival rate = 70%',
      steps: ['Calculate initial stocking: Initial fish = Area × Stocking rate = 30,000 m² × 8 fish/m² = 240,000 fish', 'Calculate surviving fish: Surviving fish = Initial fish × Survival rate = 240,000 × 0.70 = 168,000 fish'],
      formula: 'Surviving fish = Initial fish × Survival rate',
      keyConcept: 'Survival rate affects the total number of fish that can be harvested.',
      commonMistakes: ['Not converting hectares to square meters.', 'Confusing stocking rate with survival rate.', 'Calculating total fish incorrectly after finding the initial number.'],
      extraneousGivens: ['Initial area in hectares: 3 ha', 'Stocking rate: 8 fish/m²', 'Unnecessary values related to water quality and nutrients'],
    }
  },
  {
    id: 'llm-b-0573', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Water Quality', type: 'theory', difficulty: 'easy',
    question: 'What pH range is generally considered suitable for fish production in aquaculture?',
    options: ['5.0 to 6.0', '6.5 to 8.0', '7.0 to 9.0', '9.5 to 10.0'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0574', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Aeration Techniques', type: 'theory', difficulty: 'average',
    question: 'What is the main purpose of aeration in aquaculture ponds?',
    options: ['To cool down the water temperature', 'To enhance the growth of phytoplankton', 'To increase the dissolved oxygen levels', 'To manage water salinity'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0575', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Nutrient Management', type: 'theory', difficulty: 'average',
    question: 'Which of the following is a major nutrient added to aquaculture systems to increase productivity?',
    options: ['Calcium', 'Nitrogen', 'Sulfur', 'Zinc'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0576', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Water Management', type: 'computation', difficulty: 'hard',
    question: 'A fish pond has an area of 2 hectares (20,000 m²). If the pond requires 5 cm of water depth to maintain salinity, what is the volume of water needed in cubic meters, considering the 10% loss due to evaporation? Assume 1 cm of water is equivalent to 0.01 m.',
    options: ['18,000 m³', '11,000 m³', '9,000 m³', '20,000 m³'],
    correctAnswer: 0,
    solution: {
      given: 'Area = 2 hectares = 20,000 m²; Required depth = 5 cm = 0.05 m; Loss = 10%',
      steps: ['Calculate initial volume needed: Volume = Area × Depth = 20,000 m² × 0.05 m = 1,000 m³', 'Adjust for evaporation loss: Adjusted volume = Volume / (1 - loss) = 1,000 m³ / (1 - 0.10) = 1,000 m³ / 0.90 = 1,111.11 m³'],
      formula: 'Adjusted volume = Volume / (1 - loss)',
      keyConcept: 'Understanding how to adjust for evaporation loss is crucial for accurate water management.',
      commonMistakes: ['Not converting cm to meters.', 'Forgetting to adjust for evaporation.', 'Incorrect area calculation.'],
      extraneousGivens: ['Area in hectares: 2 ha', 'Evaporation loss percentage: 10%', 'Depth in cm: 5 cm', 'Unneeded data about fish species and their requirements.'],
    }
  },
  {
    id: 'llm-b-0577', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Fertilization', type: 'theory', difficulty: 'average',
    question: 'What is the main benefit of applying fertilizers in aquaculture ponds?',
    options: ['To control the water temperature', 'To increase the biomass of phytoplankton', 'To reduce the presence of harmful bacteria', 'To lower the pH of pond water'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0578', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Pond Preparation', type: 'theory', difficulty: 'average',
    question: 'Which step is NOT typically involved in routine pond preparation?',
    options: ['Draining', 'Drying', 'Feeding', 'Liming'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0579', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Monitoring', type: 'computation', difficulty: 'hard',
    question: 'If a fish farmer monitors the growth of fish over 12 weeks, and finds that the average weight of fish increased from 300 grams to 900 grams, what is the average weight gain per week? Consider irrelevant values such as the number of fish monitored.',
    options: ['50 grams/week', '35 grams/week', '75 grams/week', '100 grams/week'],
    correctAnswer: 0,
    solution: {
      given: 'Initial weight = 300 grams; Final weight = 900 grams; Duration = 12 weeks',
      steps: ['Calculate total weight gain: Total gain = Final weight - Initial weight = 900 g - 300 g = 600 g', 'Average weight gain per week = Total gain / Duration = 600 g / 12 weeks = 50 g/week'],
      formula: 'Average weight gain = Total gain / Duration',
      keyConcept: 'Regular monitoring allows farmers to analyze growth trends effectively.',
      commonMistakes: ['Not accounting for the number of weeks correctly.', 'Forgetting to subtract initial weight from final weight.', 'Overcomplicating the calculation with additional factors.'],
      extraneousGivens: ['Total number of fish: 50', 'Total pond area: 1 hectare', 'Feeding regimen details'],
    }
  },
  {
    id: 'llm-b-0580', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Harvesting Techniques', type: 'theory', difficulty: 'average',
    question: 'Which harvesting method allows for the selective removal of larger fish from the pond?',
    options: ['Full harvesting', 'Partial harvesting', 'Draining', 'Thinning'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0581', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Water Quality', type: 'computation', difficulty: 'hard',
    question: 'A pond has an average pH of 6.5, and the farmer wishes to raise it to a desired pH of 7.2 for a 1-hectare pond. How much slaked lime (135% effective) is needed? (Use the formula: AL = (pHd - pHp) / (0.1% effectivity x 0.5 tons/ha x A)) and consider unnecessary details such as the time of year.)',
    options: ['1.65 tons', '2.23 tons', '1.25 tons', '3.00 tons'],
    correctAnswer: 0,
    solution: {
      given: 'Present pH = 6.5; Desired pH = 7.2; Area = 1 hectare; % effectivity for slaked lime = 135%',
      steps: ['Calculate pH difference: pHd - pHp = 7.2 - 6.5 = 0.7', 'Calculate the amount of lime needed: AL = (0.7) / (0.00135 x 0.5 tons/ha) = 1.65 tons'],
      formula: 'AL = (pHd - pHp) / (0.00135 x 0.5) [where 0.1% = 0.001]',
      keyConcept: 'Lime is used to adjust pH levels in ponds to create optimal conditions for aquatic life.',
      commonMistakes: ['Incorrectly applying the effectivity factor.', 'Failing to convert units properly.', 'Ignoring the area of the pond.'],
      extraneousGivens: ['Time of year: rainy season', 'Weather conditions: sunny', 'Pond depth: 1.2 meters'],
    }
  },
  {
    id: 'llm-b-0582', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Aeration Systems', type: 'theory', difficulty: 'average',
    question: 'What is the primary mode of oxygen transfer in an aerated pond?',
    options: ['Photosynthesis', 'Direct absorption from the air', 'Bacterial respiration', 'Organic decomposition'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0583', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Nutrient Management', type: 'theory', difficulty: 'hard',
    question: 'Which is NOT a benefit of fertilizing aquaculture ponds?',
    options: ['Increases production of natural foods', 'Reduces the need for supplemental feeding', 'Controls water pH levels', 'Stimulates phytoplankton growth'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0584', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Aquaculture Engineering', type: 'theory', difficulty: 'average',
    question: 'What is the main goal of aquaculture engineering?',
    options: ['To design systems that maximize fish growth', 'To reduce water usage in aquaculture', 'To enhance fish farming techniques', 'To ensure the structural integrity of aquaculture facilities'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0585', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Culture Systems', type: 'theory', difficulty: 'average',
    question: 'Which aquaculture culture system is characterized by the highest stocking density?',
    options: ['Extensive Culture', 'Semi-intensive Culture', 'Intensive Culture', 'Extensive/Intensive Hybrid Culture'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0586', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Water Quality Management', type: 'theory', difficulty: 'hard',
    question: 'What pH range is generally considered optimal for fish production?',
    options: ['5.0 to 6.5', '6.5 to 7.5', '7.0 to 9.0', '9.0 to 10.0'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0587', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Fertilizers', type: 'theory', difficulty: 'easy',
    question: 'Which nutrient is primarily responsible for promoting phytoplankton growth in aquaculture ponds?',
    options: ['Nitrogen', 'Phosphorus', 'Potassium', 'Calcium'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0588', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Harvesting Techniques', type: 'theory', difficulty: 'average',
    question: 'What is a common practice for harvesting fish in aquaculture operations with higher stocking density?',
    options: ['Full harvest only', 'Partial harvest or thinning', 'Continuous harvest', 'Aeration followed by harvesting'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0589', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Liming in Aquaculture', type: 'computation', difficulty: 'hard',
    question: 'Mr. Cruz has a pond of area 3 hectares with a present pH of 5.8. He wants to raise the pH to 7.0 using slaked lime. How much slaked lime is needed? The formula involves using 135% for slaked lime effectiveness. Assume an effectivity conversion of 0.5 tons/ha.',
    options: ['2.06 tons', '1.79 tons', '1.32 tons', '2.34 tons'],
    correctAnswer: 0,
    solution: {
      given: 'Area = 3 ha, pHd = 7.0, pHp = 5.8, effectivity = 135%',
      steps: ['Calculate AL = (pHd - pHp) / (0.00135) * 0.5 tons/ha * Area', 'AL = (7.0 - 5.8) / (0.00135) * 0.5 * 3', 'AL = 1.2 / 0.00135 * 1.5 = 2.06 tons'],
      formula: 'AL = (pHd - pHp) / (0.1 x effectivity) x 0.5 tons/ha x A',
      keyConcept: 'The effectiveness of lime directly influences the quantity needed for pH adjustment.',
      commonMistakes: ['Using the wrong effectiveness value', 'Forgetting to multiply by area', 'Not converting the efficacy correctly'],
      extraneousGivens: ['Mr. Cruz\'s pond size: 3 hectares', 'Desired pH: 7.0', 'Effectivity: 135%', 'Estimated current pH: 5.8', '0.5 tons per hectare conversion'],
    }
  },
  {
    id: 'llm-b-0590', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Nutrients in Aquaculture', type: 'theory', difficulty: 'easy',
    question: 'What are the two major types of fertilizers used in aquaculture?',
    options: ['Organic and synthetic', 'Nitrogen and carbon', 'Mineral and organic', 'Complete and incomplete'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0591', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Monitoring Water Quality', type: 'theory', difficulty: 'hard',
    question: 'Why is monitoring dissolved oxygen critical in aquaculture environments?',
    options: ['It helps assess nutrient levels.', 'Dissolved oxygen affects fish metabolism and survival.', 'It indicates water temperature changes.', 'It reveals water acidity levels.'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0592', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Fish Culture', type: 'theory', difficulty: 'average',
    question: 'Which method involves stocking different species that utilize various food sources in the same pond?',
    options: ['Monoculture', 'Polyculture', 'Extensive Culture', 'Semi-Intensive Culture'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0593', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Fish Nutrition', type: 'computation', difficulty: 'hard',
    question: 'If Mr. Santos has 400 kg of fish that requires a daily feed ration of 5% of total weight, how much feed should he give daily? Assume he also has supplementary feeds of 50 kg and various other nutrients that are irrelevant for calculation. ',
    options: ['20 kg', '25 kg', '30 kg', '22 kg'],
    correctAnswer: 0,
    solution: {
      given: 'Total weight = 400 kg, Feed ratio = 5%, Supplementary feeds = 50 kg',
      steps: ['Calculate daily feed = Total weight x Feed ratio', 'Daily feed = 400 kg x 0.05 = 20 kg'],
      formula: 'Daily feed = Total weight x Feed ratio',
      keyConcept: 'The feed ration determines how much maintenance nutrition is needed for fish growth.',
      commonMistakes: ['Confusing percentage with proportion', 'Forgetting to convert kg to g', 'Adding supplementary feeds into calculation incorrectly'],
      extraneousGivens: ['Total weight of fish: 400 kg', 'Daily feed ratio: 5%', 'Supplementary feeds: 50 kg', 'Species of fish: Tilapia', 'Other nutrients: irrelevant for calculation'],
    }
  },
  {
    id: 'llm-b-0594', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Water Quality', type: 'theory', difficulty: 'easy',
    question: 'What is the ideal temperature range for most finfish species in aquaculture?',
    options: ['10°C to 15°C', '15°C to 20°C', '22°C to 32°C', '30°C to 35°C'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0595', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Aeration in Aquaculture', type: 'computation', difficulty: 'hard',
    question: 'If a farmer needs to aerate a pond of 5 hectares with a target DO of 6 mg/L. His aerator can provide 2 mg/L at maximum efficiency and he has irrelevant data on the total volume of water. How much of the aerator\'s output is needed to achieve the target? ',
    options: ['12 mg/L', '8 mg/L', '10 mg/L', '14 mg/L'],
    correctAnswer: 1,
    solution: {
      given: 'Pond area = 5 ha, Target DO = 6 mg/L, Aerator output = 2 mg/L, Irrelevant volume',
      steps: ['Calculate required increase in DO = Target DO - Current output', 'If current output is 0 mg/L, then need 6 mg/L, needing 3 aerators at 2 mg/L output.'],
      formula: 'Number of aerators needed = (Target DO - Current Output) / Aerator Output',
      keyConcept: 'Aeration is essential to maintain good water quality in aquaculture systems.',
      commonMistakes: ['Returning to irrelevant data', 'Confusing mg/L output per unit with total need', 'Assuming current DO is standard without testing'],
      extraneousGivens: ['Pond area: 5 hectares', 'Target DO: 6 mg/L', 'Aerator output: 2 mg/L', 'Total volume of water in the pond: irrelevant', 'Fish species: irrelevant'],
    }
  },
  {
    id: 'llm-b-0596', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Fish Growth Measurement', type: 'theory', difficulty: 'easy',
    question: 'What is the formula for calculating the Feed Conversion Ratio (FCR)?',
    options: ['Total feed consumed / Total weight gain', 'Total weight gain / Total feed consumed', '(Total weight gain / Total feed consumed) * 100', 'Total weight gain + Total feed consumed'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0597', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Fishpond Design', type: 'computation', difficulty: 'hard',
    question: 'If Mr. Santos is designing a pond with 4 hectares, needing a water supply of 100 L/sec and accounts for losses of 10%, calculate the total required flow rate from the source assuming 1.5 m depth of water needs replenishment. How much additional irrelevant data is provided about the pond\'s location?',
    options: ['112 L/sec', '120 L/sec', '110 L/sec', '115 L/sec'],
    correctAnswer: 0,
    solution: {
      given: 'Pond area = 4 ha, Desired flow = 100 L/sec, Depth = 1.5m, Loss = 10%',
      steps: ['Convert area to m²: 4 ha = 40000 m²', 'Calculate required rate of flow: Q = ah * t * (1 - 0.1)', 'Q = 40000 * 1.5 * (1 - 0.1) / (3600) = 112 L/sec'],
      formula: 'Q = ah * t * (1- losses)',
      keyConcept: 'Understanding and calculating water supply is essential for sustainable aquaculture.',
      commonMistakes: ['Confusing L/sec with volume', 'Incorrectly estimating area', 'Neglecting the conversion factors'],
      extraneousGivens: ['Pond size: 4 hectares', 'Desired flow: 100 L/sec', 'Depth requirement: 1.5m', 'Water source: irrelevant', 'Soil properties: irrelevant'],
    }
  },
  {
    id: 'llm-b-0598', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Fish Farm Management', type: 'theory', difficulty: 'average',
    question: 'Which agency in the Philippines is responsible for regulating aquaculture?',
    options: ['Department of Agriculture (DA)', 'National Irrigation Administration (NIA)', 'Department of Environment and Natural Resources (DENR)', 'Food and Drug Administration (FDA)'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0599', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Aquatic Ecosystems', type: 'theory', difficulty: 'average',
    question: 'What is the term for the maximum weight of fish that can be sustainably supported by a pond?',
    options: ['Stocking density', 'Carrying capacity', 'Bioaccumulation', 'Population dynamics'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0600', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Harvesting Techniques', type: 'computation', difficulty: 'hard',
    question: 'Mr. Romero plans to harvest fish when they reach an average weight of 500 g. If there are 2000 fish in the pond and each additional 1 g increases their weight gain potential over a period of 20 days, how many total grams can be achieved in a single harvest? An additional irrelevant detail mentions specific fish breed. ',
    options: ['3000 g', '3500 g', '2500 g', '2000 g'],
    correctAnswer: 0,
    solution: {
      given: 'Fish count = 2000, Average weight at harvest = 500g, Additional growth = 1g / 20d',
      steps: ['Calculate total potential weight gain = 2000 * (500g + (1g * 20d))', 'Total weight = 2000 * 520g = 1040000 g = 1040 kg'],
      formula: 'Total weight = Fish count * Target Harvest Weight',
      keyConcept: 'Understanding weight gain is crucial for planning optimal harvest times.',
      commonMistakes: ['Neglecting to calculate total weight correctly', 'Misunderstanding the growth increments', 'Forgetting to convert g to kg'],
      extraneousGivens: ['Total fish: 2000', 'Target weight: 500g', 'Growth potential: 1g per 20 days', 'Additional details about fish breed: irrelevant'],
    }
  },
  {
    id: 'llm-b-0601', area: 'B', subTopic: 'Aquaculture Engineering',
    topic: 'Fundamentals of Aquaculture', type: 'theory', difficulty: 'easy',
    question: 'What is the primary objective of aquaculture?',
    options: ['To capture wild fish in open waters', 'To enhance production of aquatic organisms under controlled conditions', 'To prevent overfishing in the oceans', 'To process and package seafood products'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0602', area: 'B', subTopic: 'Aquaculture Engineering',
    topic: 'Aquatic Environment', type: 'theory', difficulty: 'easy',
    question: 'What salinity range defines brackishwater aquaculture?',
    options: ['0.1 to 10 ppt', '0.1 to 35 ppt', '1 to 50 ppt', '0 to 1 ppt'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0603', area: 'B', subTopic: 'Aquaculture Engineering',
    topic: 'Aquatic Environment', type: 'theory', difficulty: 'average',
    question: 'Which component is NOT considered a critical abiotic factor in aquaculture?',
    options: ['Temperature', 'Dissolved oxygen', 'Salinity', 'Zooplankton density'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0604', area: 'B', subTopic: 'Aquaculture Engineering',
    topic: 'Stocking and Feeding', type: 'theory', difficulty: 'average',
    question: 'Which of the following best describes intensive aquaculture?',
    options: ['Low stocking densities with minimal feeding', 'High stocking densities with regular feeding and water exchange', 'Only natural food is provided', 'Practices with no technological intervention'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0605', area: 'B', subTopic: 'Aquaculture Engineering',
    topic: 'Pond Management', type: 'theory', difficulty: 'easy',
    question: 'What is the purpose of liming a pond?',
    options: ['To reduce fish size', 'To enhance water circulation', 'To neutralize acidity and improve water quality', 'To increase salinity'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0606', area: 'B', subTopic: 'Aquaculture Engineering',
    topic: 'Water Quality Management', type: 'theory', difficulty: 'average',
    question: 'What is the optimal pH range for most fish production in ponds?',
    options: ['5.0 to 6.0', '6.5 to 7.5', '7.0 to 9.0', '9.0 to 10.0'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0607', area: 'B', subTopic: 'Aquaculture Engineering',
    topic: 'Fertilization Techniques', type: 'theory', difficulty: 'average',
    question: 'What is a primary benefit of using fertilizers in aquaculture ponds?',
    options: ['To eliminate all natural food', 'To increase primary productivity', 'To decrease water alkalinity', 'To reduce fish density'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0608', area: 'B', subTopic: 'Aquaculture Engineering',
    topic: 'Harvesting Techniques', type: 'theory', difficulty: 'easy',
    question: 'Which method is commonly used for full harvest in aquaculture?',
    options: ['Using nets while keeping water in the pond', 'Selective harvesting with nets', 'Draining the entire pond and catching fish with nets', 'Trapping fish in cages'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0609', area: 'B', subTopic: 'Aquaculture Engineering',
    topic: 'Aquaculture Systems', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is NOT a common aquaculture structure?',
    options: ['Cages', 'Raceways', 'Greenhouses', 'Fish tanks'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0610', area: 'B', subTopic: 'Aquaculture Engineering',
    topic: 'Feeding Strategies', type: 'computation', difficulty: 'hard',
    question: 'A fish farmer has a pond with a total area of 5 hectares. He plans to stock tilapia at a density of 8 fish per square meter. If each tilapia weighs 200 grams, calculate the total weight of tilapia that would be stocked. Note: 1 hectare = 10,000 m², and do not consider the weight of additional fish species. The temperature of the water is 28°C, and the pond water pH is 7.5.',
    options: ['8000 kg', '12000 kg', '16000 kg', '20000 kg'],
    correctAnswer: 1,
    solution: {
      given: 'Area = 5 hectares = 50000 m², Stocking density = 8 fish/m², Weight per fish = 200 g = 0.2 kg',
      steps: ['Total number of fish = Area × Stocking density = 50000 m² × 8 fish/m² = 400000 fish', 'Total weight = Total number of fish × Weight per fish = 400000 fish × 0.2 kg = 80000 kg'],
      formula: 'Total weight (kg) = Area (m²) × Stocking density (fish/m²) × Weight per fish (kg)',
      keyConcept: 'Stocking density influences the total biomass in a pond.',
      commonMistakes: ['Incorrect unit conversion from grams to kilograms', 'Calculating weight without considering the number of fish', 'Using wrong area measurements'],
      extraneousGivens: ['Water temperature: 28°C', 'Pond water pH: 7.5'],
    }
  },
  {
    id: 'llm-b-0611', area: 'B', subTopic: 'Aquaculture Engineering',
    topic: 'Water Quality Management', type: 'computation', difficulty: 'hard',
    question: 'If a pond has a current pH of 6.0 and the desired pH is 7.5, calculate the amount of agricultural lime required for a 2-hectare pond using the formula AL = (pHd - pHp) / (0.1% effectivity × 0.5 tons/ha) × A. The area of the pond is 2 hectares. Note: Use the efficiency of agricultural lime as 100%. Additionally, assume the water temperature is 25°C.',
    options: ['15 tons', '20 tons', '10 tons', '25 tons'],
    correctAnswer: 0,
    solution: {
      given: 'pHd = 7.5, pHp = 6.0, Area = 2 ha, % effectivity = 100% (agricultural lime)',
      steps: ['Calculate the difference in pH: pHd - pHp = 7.5 - 6.0 = 1.5', 'Calculate AL: AL = (1.5) / (0.1 × 0.5) × 2 = 15 tons'],
      formula: 'AL = (pHd - pHp) / (0.1% effectivity × 0.5 tons/ha) × A',
      keyConcept: 'Proper liming is essential for maintaining optimal pH for aquaculture.',
      commonMistakes: ['Confusing units for area', 'Using wrong efficiency values', 'Not calculating pH difference correctly'],
      extraneousGivens: ['Water temperature: 25°C'],
    }
  },
  {
    id: 'llm-b-0612', area: 'B', subTopic: 'Aquaculture Engineering',
    topic: 'Feeding Strategies', type: 'theory', difficulty: 'average',
    question: 'What is the primary purpose of feeding a complete diet to fish in aquaculture?',
    options: ['To minimize the growth rate of fish', 'To provide all necessary nutrients for optimal growth', 'To replace natural food entirely', 'To reduce water temperature'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0613', area: 'B', subTopic: 'Aquaculture Engineering',
    topic: 'Aquaculture Systems', type: 'theory', difficulty: 'average',
    question: 'In which aquaculture system is the fish allowed to access the bottom of the water body?',
    options: ['Cage culture', 'Raceway culture', 'Pen culture', 'Tank culture'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0614', area: 'B', subTopic: 'Aquaculture Engineering',
    topic: 'Pond Management', type: 'computation', difficulty: 'hard',
    question: 'A fish farmer wants to determine the carry capacity for his 10-hectare pond which can support 150 kg of fish per hectare. If the pond is currently stocked with 1200 kg of fish, how much more fish can he safely stock? Note: 1 hectare = 10,000 m². Additional parameters such as the pH is at 7.0 and the water temperature is 26°C are not required for calculation.',
    options: ['300 kg', '600 kg', '750 kg', '1200 kg'],
    correctAnswer: 1,
    solution: {
      given: 'Total area = 10 ha; Carrying capacity = 150 kg/ha; Current stock = 1200 kg',
      steps: ['Calculate total carrying capacity: Carrying capacity = 150 kg/ha × 10 ha = 1500 kg', 'Calculate remaining capacity: 1500 kg - 1200 kg = 300 kg'],
      formula: 'Total carrying capacity = Carrying capacity/ha × Area (ha)',
      keyConcept: 'Understanding carrying capacity is crucial for sustainable aquaculture.',
      commonMistakes: ['Forgetting to calculate total carrying capacity first', 'Confusing current stock weight with allowed additional stock', 'Using incorrect area conversions'],
      extraneousGivens: ['Pond pH: 7.0', 'Water temperature: 26°C'],
    }
  },
  {
    id: 'llm-b-0615', area: 'B', subTopic: 'Aquaculture Engineering',
    topic: 'Nutrients and Fertilizers', type: 'computation', difficulty: 'hard',
    question: 'In a 3-hectare fish pond, the current pH of the water is 6.0, and the desired pH is 7.0. Calculate the amount of slaked lime required using the formula AL = (pHd - pHp) / (0.135% effectivity × 0.5 tons/ha) × A. Note: The water temperature is 27°C. The weight of fish stocked is irrelevant to the calculation.',
    options: ['12.5 tons', '15 tons', '20 tons', '25 tons'],
    correctAnswer: 0,
    solution: {
      given: 'pHd = 7.0, pHp = 6.0, Area = 3 ha, % effectivity = 135% (slaked lime)',
      steps: ['Calculate the difference in pH: pHd - pHp = 7.0 - 6.0 = 1.0', 'Calculate AL: AL = (1.0) / (0.135 × 0.5) × 3 = 12.5 tons'],
      formula: 'AL = (pHd - pHp) / (0.135% effectivity × 0.5 tons/ha) × A',
      keyConcept: 'Applying the correct type of lime is essential for managing soil pH in aquaculture.',
      commonMistakes: ['Not converting hectares to square meters', 'Misunderstanding efficiency values', 'Incorrectly calculating the pH difference'],
      extraneousGivens: ['Water temperature: 27°C'],
    }
  },
  {
    id: 'llm-b-0616', area: 'B', subTopic: 'Aquaculture Engineering',
    topic: 'Harvesting Techniques', type: 'theory', difficulty: 'average',
    question: 'What is the best practice for conducting a partial harvest in aquaculture?',
    options: ['Draining the entire pond', 'Using nets to catch all fish', 'Selective harvesting of marketable size fish while leaving smaller ones', 'Allowing all fish to mature before harvesting'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0617', area: 'B', subTopic: 'Aquaculture Engineering',
    topic: 'Feeding Strategies', type: 'theory', difficulty: 'average',
    question: 'What is the purpose of using a supplementary diet in fish farming?',
    options: ['To fully replace natural food', 'To complement natural food when it is insufficient', 'To minimize growth rates', 'To reduce water pollution'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0618', area: 'B', subTopic: 'Aquaculture Engineering',
    topic: 'Water Quality Management', type: 'computation', difficulty: 'hard',
    question: 'A fishpond requires a water depth increase of 0.5 meters to ensure optimal fish growth. If the surface area of the pond is 4 hectares, calculate the volume of water needed to fill the pond to the desired depth. Use 1 hectare = 10,000 m². Note: The current water temperature is 29°C and is not needed for the calculation.',
    options: ['20000 m³', '30000 m³', '50000 m³', '100000 m³'],
    correctAnswer: 1,
    solution: {
      given: 'Area = 4 hectares = 40000 m², Depth increase = 0.5 m',
      steps: ['Volume = Area × Depth = 40000 m² × 0.5 m = 20000 m³'],
      formula: 'Volume (m³) = Area (m²) × Depth (m)',
      keyConcept: 'Understanding water requirements is essential for pond management.',
      commonMistakes: ['Confusing area units', 'Incorrect depth conversion', 'Miscalculating the area'],
      extraneousGivens: ['Water temperature: 29°C'],
    }
  },
  {
    id: 'llm-b-0619', area: 'B', subTopic: 'Aquaculture Engineering',
    topic: 'Aquaculture Systems', type: 'theory', difficulty: 'average',
    question: 'Which of the following is a characteristic of monoculture in aquaculture?',
    options: ['Stocking multiple species in one pond', 'Growing a single species exclusively', 'Diverse feeding habits across species', 'Utilization of a variety of natural food sources'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0620', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Introduction to Aquaculture', type: 'theory', difficulty: 'easy',
    question: 'What is the main objective of aquaculture as defined by the FAO?',
    options: ['To enhance fish growth through natural methods', 'To culture aquatic organisms in a controlled environment', 'To harvest fish from natural waters', 'To preserve aquatic biodiversity'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0621', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Environmental Factors', type: 'theory', difficulty: 'average',
    question: 'Which of the following factors is NOT considered an abiotic factor affecting the aquatic environment?',
    options: ['Temperature', 'Dissolved oxygen', 'Phytoplankton', 'Salinity'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0622', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Aquaculture Systems', type: 'theory', difficulty: 'average',
    question: 'In which aquaculture system would you likely find a stocking rate of 10 fish per square meter and above?',
    options: ['Extensive culture', 'Semi-intensive culture', 'Intensive culture', 'Traditional culture'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0623', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Pond Preparation', type: 'theory', difficulty: 'hard',
    question: 'What is the primary purpose of pond preparation before stocking fish?',
    options: ['To reduce costs of feed', 'To promote natural primary productivity', 'To increase fish density', 'To ensure high temperatures'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0624', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Water Quality Management', type: 'theory', difficulty: 'easy',
    question: 'What is the ideal pH range for optimal fish growth in ponds?',
    options: ['5.0 to 6.0', '6.0 to 8.0', '7.0 to 9.0', '8.0 to 10.0'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0625', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Nutrient Management', type: 'theory', difficulty: 'average',
    question: 'Which nutrient is essential for enhancing phytoplankton growth in aquaculture ponds?',
    options: ['Nitrogen', 'Zinc', 'Copper', 'Sodium'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0626', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Fish Feeding', type: 'theory', difficulty: 'average',
    question: 'What is the main reason for providing a complete diet to fish in intensive aquaculture systems?',
    options: ['To reduce water usage', 'To maximize fish growth and survival', 'To lower operational costs', 'To prevent overstocking'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0627', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Water Management', type: 'theory', difficulty: 'hard',
    question: 'How often should water exchange be performed in semi-intensive aquaculture systems?',
    options: ['Once every month', '10% daily', 'Weekly', 'Only during harvesting'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0628', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Harvesting Techniques', type: 'theory', difficulty: 'average',
    question: 'What is the term for removing a portion of fish from a pond while leaving some for continued growth?',
    options: ['Full harvest', 'Selective harvesting', 'Overharvesting', 'Partial harvest'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0629', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Lime Application', type: 'computation', difficulty: 'hard',
    question: 'A fishpond has an area of 4 hectares, and the current pond pH is 6.0. If the desired pH is 7.0, calculate the amount of slaked lime (135% effectiveness) needed. (Use AL = (pHd - pHp) / (0.1% effectivity x 0.5 tons/ha x A))',
    options: ['6.1 tons', '5.5 tons', '4.4 tons', '7.5 tons'],
    correctAnswer: 3,
    solution: {
      given: 'A = 4 ha, pHd = 7.0, pHp = 6.0, % effectivity = 135%',
      steps: ['AL = (7.0 - 6.0) / (0.1 x 0.5 x 4) * 135', 'AL = (1.0 / 0.2) * 135 = 6.75 tons', 'AL = 6.75 tons, round to closest viable options'],
      formula: 'AL = (pHd - pHp) / (0.1% effectivity x 0.5 tons/ha x A)',
      keyConcept: 'Understanding lime calculations is essential for managing pH in aquaculture.',
      commonMistakes: ['Missing conversion percentage', 'Incorrectly calculating area', 'Confusing effectiveness percentages'],
      extraneousGivens: ['Current pH: 6.0', 'Area in hectares: 4', 'Desired pH: 7.0', 'Effectiveness of lime: 135%'],
    }
  },
  {
    id: 'llm-b-0630', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'FCR Calculations', type: 'computation', difficulty: 'hard',
    question: 'A fish farm has a total feed consumption of 2000 kg and produces 1500 kg of fish. What is the Feed Conversion Ratio (FCR)? Note that the farm also uses 500 kg of organic fertilizer, which is not counted in the feed conversion.',
    options: ['1.33', '1.50', '1.67', '2.00'],
    correctAnswer: 1,
    solution: {
      given: 'Total feed = 2000 kg, Fish produced = 1500 kg',
      steps: ['Calculate FCR: FCR = Total feed / Total fish produced', 'FCR = 2000 kg / 1500 kg = 1.33'],
      formula: 'FCR = Total feed / Total fish produced',
      keyConcept: 'FCR is a critical measure of feed efficiency in aquaculture.',
      commonMistakes: ['Including fertilizer in feed calculations', 'Dividing in the wrong order', 'Rounding prematurely'],
      extraneousGivens: ['Total feed: 2000 kg', 'Fish produced: 1500 kg', 'Organic fertilizer: 500 kg', 'Water temperature: 25°C'],
    }
  },
  {
    id: 'llm-b-0631', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Stocking Density', type: 'theory', difficulty: 'easy',
    question: 'What is the primary factor affecting the optimal stocking density of fish in a pond?',
    options: ['Depth of water', 'Oxygen levels', 'Temperature', 'Type of fish'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0632', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Water Quality Monitoring', type: 'theory', difficulty: 'average',
    question: 'Which method is commonly used for monitoring the dissolved oxygen levels in aquaculture ponds?',
    options: ['Using a Secchi disc', 'Conducting a pH test', 'Using a dissolved oxygen meter', 'Visual observation of fish behavior'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0633', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Water Quality Management', type: 'computation', difficulty: 'hard',
    question: 'A fishpond has a length of 50 meters and a width of 20 meters. If the desired average dissolved oxygen level is 5 mg/L and the current level is 2 mg/L, calculate the rate of water exchange needed to improve oxygen levels. Note: Pond depth is 1.2 m, and water temperature is not needed for calculation.',
    options: ['6.2 m3/day', '8.0 m3/day', '10.5 m3/day', '12.3 m3/day'],
    correctAnswer: 0,
    solution: {
      given: 'Length = 50 m, Width = 20 m, Depth = 1.2 m, Desired DO = 5 mg/L, Current DO = 2 mg/L',
      steps: ['Calculate volume: Volume = Length x Width x Depth = 50 x 20 x 1.2 = 1200 m³', 'Calculate water exchange volume: V = Volume x (Desired DO - Current DO) = 1200 x (5 - 2)/5 = 720 m³', 'Convert to daily exchange: Average = 720 / 120 = 6 m³/day'],
      formula: 'V = Volume x (Desired DO - Current DO)',
      keyConcept: 'Effective water exchange is crucial for maintaining healthy oxygen levels.',
      commonMistakes: ['Miscalculating pond volume', 'Using incorrect DO levels', 'Forgetting to convert units'],
      extraneousGivens: ['Length: 50 m', 'Width: 20 m', 'Depth: 1.2 m', 'Current DO: 2 mg/L', 'Temperature: 25°C'],
    }
  },
  {
    id: 'llm-b-0634', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Fish Harvesting Techniques', type: 'theory', difficulty: 'average',
    question: 'What is a significant benefit of partial harvesting in aquaculture?',
    options: ['It maximizes cash flow throughout the year', 'It reduces the stress on fish', 'It is more cost-effective than full harvesting', 'It lowers the risk of disease spread'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0635', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Aquaculture Structures', type: 'theory', difficulty: 'hard',
    question: 'What type of aquaculture structure is best suited for rearing fish in marine environments?',
    options: ['Ponds', 'Cages', 'Tanks', 'Raceways'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0636', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Aquaculture Principles', type: 'theory', difficulty: 'easy',
    question: 'What does the term \'aquaculture\' specifically refer to?',
    options: ['The farming of only fish species in freshwater', 'The cultivation of aquatic organisms in controlled environments', 'The act of fishing in the ocean', 'The marketing and processing of seafood products'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'Aquaculture is the farming of aquatic organisms and involves intervention in their rearing process.',
      
      
    }
  },
  {
    id: 'llm-b-0637', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Aquaculture Classification', type: 'theory', difficulty: 'average',
    question: 'Which of the following is NOT considered a type of aquaculture?',
    options: ['Extensive aquaculture', 'Mariculture', 'Hydroponics', 'Intensive aquaculture'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: 'Hydroponics relates to growing plants in water without soil, unlike the other options focused on aquatic organisms.',
      
      
    }
  },
  {
    id: 'llm-b-0638', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Aquatic Environment', type: 'theory', difficulty: 'average',
    question: 'What is the primary reason for conducting a pH mapping in pond preparation?',
    options: ['To enhance water temperature', 'To determine nutrient levels', 'To assess soil acidity and lime requirements', 'To control the fish population'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: 'pH mapping helps determine the soil\'s acidity, aiding in lime application for optimal growth conditions.',
      
      
    }
  },
  {
    id: 'llm-b-0639', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Stocking and Yield Management', type: 'computation', difficulty: 'hard',
    question: 'A fishpond has an area of 4 hectares. If the stocking rate is 8 fish per square meter, how many fish can be stocked? The pond is equipped with a filtration system rated at 1,000 liters per minute, and the water temperature is 28°C. What is the maximum number of fish you can stock?',
    options: ['32,000 fish', '64,000 fish', '28,000 fish', '56,000 fish'],
    correctAnswer: 1,
    solution: {
      given: 'Area = 4 hectares = 40,000 m²; Stocking rate = 8 fish/m²; Filter capacity and water temperature are extraneous.',
      steps: ['Calculate total fish = area × stocking rate = 40,000 m² × 8 fish/m² = 320,000 fish.'],
      
      keyConcept: 'Stocking rate determines the number of fish per unit area, independent of filtration or temperature.',
      commonMistakes: ['Confusing area with volume', 'Not converting hectares to square meters', 'Assuming filter capacity limits stocking'],
      extraneousGivens: ['Filtration system rated at 1,000 liters per minute', 'Water temperature of 28°C'],
    }
  },
  {
    id: 'llm-b-0640', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Water Quality Management', type: 'theory', difficulty: 'average',
    question: 'What is the main consequence of low dissolved oxygen levels in aquaculture ponds?',
    options: ['Increased growth rates', 'Enhanced fish reproduction', 'Reduced disease resistance', 'Higher feeding efficiency'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: 'Low dissolved oxygen compromises fish health, leading to reduced disease resistance and potential mortality.',
      
      
    }
  },
  {
    id: 'llm-b-0641', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Pond Management', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is NOT a step in routine pond preparation?',
    options: ['Draining', 'Disinfection', 'Water exchange', 'Liming'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: 'Water exchange is a process that occurs during culture, while the others are part of initial pond preparation.',
      
      
    }
  },
  {
    id: 'llm-b-0642', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Aquaculture Production Systems', type: 'computation', difficulty: 'hard',
    question: 'Calculate the amount of slaked lime needed to raise the pH of a 5-hectare pond from 6.0 to 7.2. Assume a 135% effectiveness for slaked lime. The total surface area is 50,000 m² and you need to determine the amount using the formula: AL = (pHd - pHp) / (0.1% effectivity × 0.5 tons/ha × A). The water temperature is 26°C and the atmospheric pressure is 101.3 kPa, both of which are unnecessary for this calculation.',
    options: ['3.78 tons', '5.27 tons', '2.80 tons', '4.33 tons'],
    correctAnswer: 0,
    solution: {
      given: 'pHd = 7.2; pHp = 6.0; A = 5 hectares = 50,000 m²; Effectivity = 135%; Water temp and pressure are extraneous.',
      steps: ['Calculate AL = (7.2 - 6.0) / (0.00135 × 0.5 × 50000) = 3.78 tons.'],
      
      keyConcept: 'Calculating lime requirements involves adjusting pH levels based on area and lime effectiveness.',
      commonMistakes: ['Not converting hectares to square meters', 'Using wrong effectivity percentage', 'Forgetting to subtract pHp from pHd'],
      extraneousGivens: ['Water temperature: 26°C', 'Atmospheric pressure: 101.3 kPa'],
    }
  },
  {
    id: 'llm-b-0643', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Nutrient Management', type: 'theory', difficulty: 'average',
    question: 'What is the primary purpose of fertilization in aquaculture ponds?',
    options: ['To increase fish biomass directly', 'To enhance the growth of phytoplankton', 'To reduce the cost of feed', 'To eliminate pests and predators'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'Fertilization increases primary productivity by promoting phytoplankton growth, which serves as food for fish.',
      
      
    }
  },
  {
    id: 'llm-b-0644', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Fish Harvesting Techniques', type: 'theory', difficulty: 'average',
    question: 'What is the preferred method of harvesting when fish have reached marketable size in aquaculture?',
    options: ['Full draining of the pond', 'Selective harvesting using nets', 'Using traps and bait', 'Manual catching with hands'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'Selective harvesting allows for the efficient removal of marketable-sized fish without disrupting the entire environment.',
      
      
    }
  },
  {
    id: 'llm-b-0645', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Aeration Systems', type: 'computation', difficulty: 'hard',
    question: 'A pond is 3 hectares with a shallow depth of 1 meter. If a paddlewheel aerator is used that requires 0.3 kW of electricity per hour, calculate the total energy consumption for running the aerator for 10 hours. Also, note that the ambient temperature is 30°C and the barometric pressure is 101.3 kPa. These values are irrelevant to the computation. What is the total energy consumption in kilowatt-hours?',
    options: ['3 kWh', '6 kWh', '2 kWh', '4 kWh'],
    correctAnswer: 0,
    solution: {
      given: 'Power = 0.3 kW; Time = 10 hours; Area = 3 hectares is extraneous.',
      steps: ['Total energy = Power × Time = 0.3 kW × 10 hours = 3 kWh.'],
      
      keyConcept: 'Energy consumption can be determined using power ratings and time of operation.',
      commonMistakes: ['Not multiplying correctly', 'Confusing kilowatts with kilowatt-hours', 'Forgetting the operating time'],
      extraneousGivens: ['Ambient temperature: 30°C', 'Barometric pressure: 101.3 kPa'],
    }
  },
  {
    id: 'llm-b-0646', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Carrying Capacity', type: 'theory', difficulty: 'easy',
    question: 'What does carrying capacity refer to in aquaculture?',
    options: ['The maximum distance fish can migrate', 'The number of fish that can be harvested annually', 'The maximum biomass the environment can sustain without harm', 'The volume of water available in the pond'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: 'Carrying capacity is the maximum biomass of fish that a pond can support sustainably.',
      
      
    }
  },
  {
    id: 'llm-b-0647', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Nutrient Applications', type: 'computation', difficulty: 'hard',
    question: 'To enhance primary productivity, an aquaculture farmer applies 50 kg of fertilizer per hectare to a 2-hectare pond. If the fertilizer has a nutrient analysis of 10-20-10 (N-P-K), how much nitrogen is provided? Assume that each nutrient is present in its respective percentage and that the pond is at a depth of 1.5 meters, which is unnecessary for this calculation. What is the total nitrogen provided?',
    options: ['10 kg', '5 kg', '12 kg', '8 kg'],
    correctAnswer: 0,
    solution: {
      given: 'Fertilizer = 50 kg/ha; Area = 2 ha; Nutrient analysis = 10% N; Depth of pond is extraneous.',
      steps: ['Total fertilizer applied = 50 kg/ha × 2 ha = 100 kg; Nitrogen = 10% of 100 kg = 10 kg.'],
      
      keyConcept: 'Calculating nutrient contributions involves understanding how to apply percentages based on total fertilizer applied.',
      commonMistakes: ['Not multiplying by the area', 'Confusing percentages', 'Misunderstanding nutrient ratios'],
      extraneousGivens: ['Pond depth: 1.5 meters'],
    }
  },
  {
    id: 'llm-b-0648', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Fish Behavior and Feeding', type: 'theory', difficulty: 'average',
    question: 'Why is it important to monitor fish behavior in aquaculture?',
    options: ['To measure the amount of feed consumed', 'To accurately determine water quality', 'For planning future harvest schedules', 'To assess the overall health of the fish'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: 'Monitoring behavior helps indicate health issues and stressors affecting fish growth.',
      
      
    }
  },
  {
    id: 'llm-b-0649', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Aeration Techniques', type: 'computation', difficulty: 'hard',
    question: 'A raceway system requires that the water flow rate is at least 15 L/s to maintain oxygen levels. If a single pump provides 1.5 kW of power and has an efficiency of 70%, how many liters can the pump deliver in one hour? The efficiency rating is unnecessary for this calculation. What is the total water delivery in liters?',
    options: ['1,800 L', '3,600 L', '6,000 L', '4,200 L'],
    correctAnswer: 1,
    solution: {
      given: 'Power = 1.5 kW; Flow rate required = 15 L/s; Efficiency = 70% is extraneous.',
      steps: ['Total flow in 1 hour = Flow rate × seconds in an hour = 15 L/s × 3600 s = 54,000 L.'],
      
      keyConcept: 'Understanding flow rates helps in assessing the capability of pumps in aquaculture systems.',
      commonMistakes: ['Not converting seconds to hours', 'Confusing flow rate with volume', 'Forgetting to multiply accurately'],
      extraneousGivens: ['Efficiency rating: 70%'],
    }
  },
  {
    id: 'llm-b-0650', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Water Quality Parameters', type: 'theory', difficulty: 'average',
    question: 'What is considered a safe pH range for aquaculture ponds?',
    options: ['4.0 - 5.0', '6.0 - 7.5', '7.0 - 9.0', '10.0 - 12.0'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: 'The pH range of 7.0 to 9.0 is ideal for fish growth, indicating a healthy environment.',
      
      
    }
  },
  {
    id: 'llm-b-0651', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Aquaculture Economics', type: 'theory', difficulty: 'easy',
    question: 'What is the primary reason for calculating feed conversion ratio (FCR) in aquaculture?',
    options: ['To monitor water quality', 'To measure growth performance', 'To determine harvesting costs', 'To evaluate fish behavior'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'FCR assesses how efficiently fish convert feed into body mass, crucial for production economics.',
      
      
    }
  },
  {
    id: 'llm-b-0652', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Fisheries and Aquaculture Overview', type: 'theory', difficulty: 'easy',
    question: 'Which of the following best defines aquaculture?',
    options: ['The farming of aquatic organisms involving human intervention.', 'The process of capturing fish from the wild.', 'The marketing and processing of aquatic products.', 'The conservation and management of aquatic resources.'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0653', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Aquaculture Production', type: 'theory', difficulty: 'average',
    question: 'In 2018, the Philippines ranked 11th in aquaculture production globally. What was the total production in metric tons?',
    options: ['4.35 million MT', '826.01 thousand MT', '1.48 million MT', '82.10 million MT'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0654', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Aquatic Environment', type: 'theory', difficulty: 'easy',
    question: 'What is the primary characteristic of brackishwater aquaculture?',
    options: ['Salt content below 0.1 ppt', 'Salt content between 0.1 ppt and full strength seawater', 'Culture of organisms in freshwater only', 'Exclusive culture in full strength seawater'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0655', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Aquaculture Practices', type: 'theory', difficulty: 'average',
    question: 'Which of the following is NOT a method of pond culture?',
    options: ['Cage culture', 'Raceway culture', 'Pen culture', 'Aeration culture'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0656', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Pond Preparation', type: 'theory', difficulty: 'average',
    question: 'What is the purpose of pond drying in preparation?',
    options: ['To enhance sedimentation', 'To eradicate viruses and pests', 'To increase water temperature', 'To raise the pond\'s pH level'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0657', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Water Management', type: 'theory', difficulty: 'average',
    question: 'What is a critical parameter to monitor when assessing water quality in aquaculture?',
    options: ['Total ammonia nitrogen', 'Fish weight', 'Stocking density', 'Type of feed'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0658', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Aquaculture Systems', type: 'theory', difficulty: 'hard',
    question: 'What is the primary function of aeration systems in aquaculture?',
    options: ['To remove pollutants from the water', 'To provide oxygen to aquatic organisms', 'To increase water temperature', 'To facilitate feeding processes'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0659', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Lime Application', type: 'computation', difficulty: 'hard',
    question: 'The average pH of a 5-hectare pond is found to be 6.0. To achieve a desired pH of 7.0 using unslaked lime, calculate the amount needed. The effectiveness of unslaked lime is 173%. Also given are: current water temperature 28°C, fish weight 2 kg each, and feeding rate 5% of total biomass.',
    options: ['4.25 tons', '3.56 tons', '5.73 tons', '6.34 tons'],
    correctAnswer: 0,
    solution: {
      given: 'Area = 5 ha, pHd = 7.0, pHp = 6.0, effectiveness = 173%',
      steps: ['Calculate AL = (pHd - pHp) / (0.1 x effectiveness) x area.', 'Substituting values gives AL = (7.0 - 6.0) / (0.1 x 1.73) x 5 = 4.25 tons.'],
      formula: 'AL = (pHd - pHp)/(0.1 x effectiveness) x area',
      keyConcept: 'Lime application is essential for correcting pH levels in aquaculture.',
      commonMistakes: ['Incorrectly applying the effectiveness percentage.', 'Miscalculating area in hectares.', 'Not understanding the significance of pH changes.'],
      extraneousGivens: ['Water temperature: 28°C', 'Fish weight: 2 kg', 'Feeding rate: 5%'],
    }
  },
  {
    id: 'llm-b-0660', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Fertilization Rates', type: 'computation', difficulty: 'average',
    question: 'A 3-hectare pond requires fertilization with organic fertilizer and the recommended rate is 0.75 tons per hectare. Calculate the total amount of fertilizer needed. Also, given: current dissolved oxygen level is 6 mg/L, water temperature is 25°C, and fish biomass is 1500 kg.',
    options: ['2.25 tons', '1.5 tons', '3.0 tons', '3.75 tons'],
    correctAnswer: 0,
    solution: {
      given: 'Area = 3 ha, rate = 0.75 tons/ha',
      steps: ['Calculate total fertilizer = area x rate = 3 x 0.75 = 2.25 tons.'],
      formula: 'Total fertilizer = area x rate',
      keyConcept: 'Correct fertilization is vital for enhancing natural productivity in ponds.',
      commonMistakes: ['Not applying the rate consistently.', 'Confusing organic and inorganic fertilizer rates.', 'Ignoring area units.'],
      extraneousGivens: ['Dissolved oxygen level: 6 mg/L', 'Water temperature: 25°C', 'Fish biomass: 1500 kg'],
    }
  },
  {
    id: 'llm-b-0661', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Fish Stocking Density', type: 'theory', difficulty: 'easy',
    question: 'What is the recommended stocking density for intensive aquaculture?',
    options: ['1-4 fish/m2', '5-9 fish/m2', '10 fish/m2 and above', '2 fish/m2'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0662', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Harvesting Techniques', type: 'theory', difficulty: 'average',
    question: 'What is the primary advantage of partial harvesting in aquaculture?',
    options: ['It maximizes feed utilization.', 'It allows continuous growth monitoring and management.', 'It reduces pond maintenance costs.', 'It ensures all fish are harvested at once.'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0663', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Oxygen Management', type: 'computation', difficulty: 'hard',
    question: 'In a pond, if the dissolved oxygen level is recorded at 3 mg/L and the target level is 6 mg/L, calculate how much oxygen must be added to achieve this in a 1-hectare pond with a water depth of 1 meter. Given the following: water temperature is 30°C, fish biomass is 2000 kg, and feeding rate is 10% of biomass.',
    options: ['10 kg', '20 kg', '30 kg', '40 kg'],
    correctAnswer: 1,
    solution: {
      given: 'Area = 1 ha, target DO = 6 mg/L, current DO = 3 mg/L, water depth = 1 m',
      steps: ['Calculate needed oxygen = (target DO - current DO) x pond volume (1 ha = 10,000 m2 x 1 m) = (6 - 3) x 10,000 = 30,000 mg = 30 kg.'],
      formula: 'Oxygen needed = (target DO - current DO) x pond volume',
      keyConcept: 'Oxygen management is crucial for aquatic life support and health.',
      commonMistakes: ['Confusing mg/L with kg.', 'Ignoring pond volume calculation.', 'Misunderstanding oxygen levels\' effect on fish health.'],
      extraneousGivens: ['Water temperature: 30°C', 'Fish biomass: 2000 kg', 'Feeding rate: 10%'],
    }
  },
  {
    id: 'llm-b-0664', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Water Quality Monitoring', type: 'theory', difficulty: 'easy',
    question: 'Which of the following water quality parameters is critical for fish health?',
    options: ['Nitrate concentration', 'Dissolved oxygen level', 'Temperature fluctuations', 'Nitrogen gas levels'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0665', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Nutrient Management', type: 'theory', difficulty: 'average',
    question: 'What is the main purpose of using inorganic fertilizers in aquaculture?',
    options: ['To provide organic matter for soil health', 'To improve nitrogen availability in the water', 'To enhance pond oxygenation', 'To increase phytoplankton growth'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0666', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Biosecurity Measures', type: 'theory', difficulty: 'easy',
    question: 'What is a primary strategy for biosecurity in aquaculture?',
    options: ['Regular feeding schedules', 'Monitoring water temperature', 'Disease prevention through management', 'Water exchange protocols'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0667', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Feed Conversion Efficiency', type: 'computation', difficulty: 'average',
    question: 'If a farm produces 1,500 kg of fish using 4,500 kg of feed, calculate the feed conversion ratio (FCR). Also given: fish weight at start was 400 kg, and water temperature during growth period was 27°C.',
    options: ['1.5', '3.0', '2.0', '4.5'],
    correctAnswer: 0,
    solution: {
      given: 'Fish produced = 1500 kg, Feed used = 4500 kg',
      steps: ['Calculate FCR = Feed used / Fish produced = 4500 / 1500 = 3.0.'],
      formula: 'FCR = Feed used / Fish produced',
      keyConcept: 'FCR is critical for assessing feed efficiency in aquaculture.',
      commonMistakes: ['Confusing total input with output.', 'Ignoring conversion aspect of FCR.', 'Misinterpreting feed usage metrics.'],
      extraneousGivens: ['Fish weight at start: 400 kg', 'Water temperature: 27°C'],
    }
  },
  {
    id: 'llm-b-0668', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Monitoring Growth', type: 'computation', difficulty: 'hard',
    question: 'If you take a sample of 30 fish, and their average weight is found to be 900 grams, calculate the total biomass in a pond of 1 hectare with 5% stocking density. Given the standard stocking density for this species is 10 fish/m2.',
    options: ['1,350 kg', '900 kg', '1,500 kg', '2,700 kg'],
    correctAnswer: 0,
    solution: {
      given: 'Sample weight = 30 fish, average weight = 900 g, area = 1 ha = 10,000 m2, density = 5% of max density.',
      steps: ['Calculate max density = 10 fish/m2 x 10,000 m2 = 100,000 fish.', 'Calculate actual stocking = 100,000 fish x 5% = 5,000 fish.', 'Total biomass = 5,000 fish x 0.9 kg = 4,500 kg.'],
      formula: 'Total biomass = Stocking density x Average weight',
      keyConcept: 'Monitoring biomass is essential for managing fish growth and health.',
      commonMistakes: ['Miscalculating area and density.', 'Neglecting average weight in total biomass calculation.', 'Confusing different units of measurement.'],
      extraneousGivens: ['Standard stocking density for species: 10 fish/m2', 'Sampling size: 30 fish'],
    }
  },
  {
    id: 'llm-b-0669', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Fishery Operations', type: 'theory', difficulty: 'easy',
    question: 'What does RA 10654 regulate in the context of fisheries in the Philippines?',
    options: ['It focuses solely on aquaculture practices.', 'It governs fishing quotas for commercial fisheries.', 'It aims to ensure sustainable use and conservation of fishery resources.', 'It specifies penalties for illegal fishing activities.'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0670', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Aquatic Environment', type: 'theory', difficulty: 'average',
    question: 'What characterizes brackishwater aquaculture?',
    options: ['It involves water with a salt content of 0.1% or less.', 'It involves a salt content between 0.1 ppt and full-strength seawater.', 'It is conducted only in freshwater systems.', 'It requires full-strength seawater.'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0671', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Production Systems', type: 'theory', difficulty: 'average',
    question: 'Which aquaculture method has the highest stocking rate?',
    options: ['Extensive aquaculture', 'Semi-intensive aquaculture', 'Intensive aquaculture', 'Traditional aquaculture'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0672', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Fish Farming Techniques', type: 'computation', difficulty: 'hard',
    question: 'In a 3-hectare pond, the average pH is measured at 6.0. If the desired pH is 7.2, calculate the required amount of unslaked lime (effectivity 173%) needed to correct the acidity, given 0.1% effectivity for the other compounds is irrelevant. Additionally, the area of the pond is expressed in square meters as 30,000 m2. How much lime is required?',
    options: ['25.81 tons', '29.73 tons', '23.45 tons', '35.20 tons'],
    correctAnswer: 0,
    solution: {
      given: 'pHd = 7.2, pHp = 6.0, A = 3 ha = 30000 m2, % effectivity = 173%',
      steps: ['AL = (pHd - pHp) / (0.1% effectivity) x 0.5 tons/ha x A', 'AL = (7.2 - 6.0) / (0.00173) x 0.5 x 30 = 25.81 tons'],
      formula: 'AL = (pHd - pHp) / (0.1% effectivity) x 0.5 tons/ha x A',
      keyConcept: 'Calculating lime requirements involves using pond area and pH differences.',
      commonMistakes: ['Confusing units of area', 'Incorrectly applying effectivity percentages', 'Forgetting to account for the area in hectare to square meter conversion'],
      extraneousGivens: ['Average temperature: 28°C', 'Fish stock density: 1000 kg/ha', 'Water depth: 1.2 m'],
    }
  },
  {
    id: 'llm-b-0673', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Fertilization', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is NOT a benefit of liming pond water?',
    options: ['Neutralizes acidity in the water', 'Increases the availability of phosphorus', 'Directly increases the dissolved oxygen levels', 'Improves fish survival rates'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0674', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Water Quality Management', type: 'theory', difficulty: 'average',
    question: 'What is the significance of maintaining pH levels between 7.0 to 9.0 in pond water?',
    options: ['It promotes optimal growth conditions for algae only.', 'It prevents metabolic stress in fish species.', 'It allows for higher stocking densities.', 'It ensures adequate nutrient incorporation from sediments.'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0675', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Aquaculture Practices', type: 'theory', difficulty: 'average',
    question: 'What does fish sampling in aquaculture involve?',
    options: ['Feeding rates exclusively', 'Measuring pond temperature only', 'Assessing growth through weighing representative fish', 'Monitoring water quality parameters'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0676', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Biotic and Abiotic Factors', type: 'theory', difficulty: 'average',
    question: 'What do abiotic factors in aquaculture refer to?',
    options: ['Living organisms and aquatic plants', 'Chemical and physical conditions like temperature and pH', 'Predators and competition within the ecosystem', 'None of the above'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0677', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Aeration System', type: 'computation', difficulty: 'hard',
    question: 'A fish farm has 2 ponds, each with an area of 1.5 hectares. If 60% of the ponds\' surface is covered with a phytoplankton bloom, what is the total volume of water that must be oxygenated using aerators? Each hectare pond holds 10,000 m3 of water, and the water quality constraints indicate additional relevant criteria such as nitrate levels at 20 mg/L, which is not needed for the computation.',
    options: ['18,000 m3', '12,000 m3', '15,000 m3', '6,000 m3'],
    correctAnswer: 0,
    solution: {
      given: 'Area of ponds = 2 ponds × 1.5 ha = 3 ha, Volume per hectare = 10,000 m3.',
      steps: ['Total volume = Area × Volume per hectare = 3 ha × 10,000 m3 = 30,000 m3', 'Oxygenated volume = Total volume × (60/100) = 30,000 m3 × 0.6 = 18,000 m3'],
      formula: 'Total volume (m3) = Area (ha) × Volume per hectare (m3/ha), Oxygenated volume = Total volume × (% covered)',
      keyConcept: 'Understanding area and volumetric calculations is crucial for aeration needs.',
      commonMistakes: ['Confusing hectares with square meters', 'Failing to convert percentage to decimal', 'Ignoring the number of ponds'],
      extraneousGivens: ['Nitrate level: 20 mg/L', 'Annual rain: 1500 mm', 'Wind speed: 5 km/h'],
    }
  },
  {
    id: 'llm-b-0678', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Environmental Factors', type: 'theory', difficulty: 'easy',
    question: 'What are the major abiotic factors affecting aquaculture?',
    options: ['Water temperature, salinity, and light', 'Fish species diversity and feeding habits', 'Natural predators and competitors', 'Fertilizer types used'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0679', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Water Quality Management', type: 'computation', difficulty: 'hard',
    question: 'In a fish pond of 2 hectares, the average stocking density is 8 fish per square meter. If the total biomass should not exceed 15,000 kg, calculate the ideal number of fish if each fish weighs an average of 1.5 kg, considering any remaining water volume is unaccounted, such as sediment levels at 5% are irrelevant. How many fish can the pond hold?',
    options: ['10,000 fish', '8,000 fish', '9,000 fish', '5,000 fish'],
    correctAnswer: 1,
    solution: {
      given: 'Area = 2 ha = 20,000 m², Desired total biomass = 15,000 kg, Average weight per fish = 1.5 kg.',
      steps: ['Total number of fish permissible = Desired biomass / Average weight per fish', 'Total number of fish permissible = 15,000 kg / 1.5 kg = 10,000 fish', 'Total number of fish possible with density = Area × Stocking density = 20,000 m² × 8 fish/m² = 160,000 fish', 'Since desired biomass is the limiting factor, only 10,000 fish can be allowed.'],
      formula: 'Total number of fish = Desired total biomass / Average weight per fish',
      keyConcept: 'Managing stocking density is critical to ensure sustainability and performance.',
      commonMistakes: ['Not applying the average fish weight', 'Confusing area units', 'Ignoring or miscalculating fish biomass limits'],
      extraneousGivens: ['Sediment levels: 5%', 'Water source temperature: 25°C', 'Water chemical composition: not needed'],
    }
  },
  {
    id: 'llm-b-0680', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Fish Handling Techniques', type: 'theory', difficulty: 'average',
    question: 'What is the recommended method for packing fish for transportation?',
    options: ['Using regular cardboard boxes.', 'Packing with layers of ice in Styrofoam boxes.', 'Leaving fish exposed to air to minimize weight.', 'Using plastic bags without any ice.'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0681', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Nutrition in Aquaculture', type: 'computation', difficulty: 'hard',
    question: 'If a fish farm requires a daily feeding rate of 2% of the total fish biomass and the total fish weight is 4,500 kg, how many kilograms of feed does the farm need each day? Assume that the water temperature, which is irrelevant for feeding calculations, is 27°C. What is the total feed requirement?',
    options: ['90 kg', '70 kg', '100 kg', '80 kg'],
    correctAnswer: 0,
    solution: {
      given: 'Total fish weight = 4500 kg, Feeding rate = 2%.',
      steps: ['Calculate daily feed required: Feed = Total biomass × Feeding rate', 'Feed = 4500 kg × 0.02 = 90 kg'],
      formula: 'Feed (kg) = Total fish biomass (kg) × Feeding rate (%)',
      keyConcept: 'Understanding feeding rates is essential for effective aquaculture management.',
      commonMistakes: ['Confusing percentage conversions', 'Neglecting to convert rates into decimals', 'Misestimating fish biomass'],
      extraneousGivens: ['Water temperature: 27°C', 'Water depth: unspecified', 'Salinity level: 30 ppt'],
    }
  },
  {
    id: 'llm-b-0682', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Ecosystem Management', type: 'theory', difficulty: 'average',
    question: 'Which term describes the maximum sustainable biomass of fish in a pond without causing environmental degradation?',
    options: ['Carrying capacity', 'Biomass density', 'Stocking level', 'Pond quota'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0683', area: 'B', subTopic: 'aquaculture-engineering',
    topic: 'Fish Production', type: 'computation', difficulty: 'hard',
    question: 'A fishery produces 5.5 million kg of fish with an average weight of 1.1 kg per fish. If the total weight of the fish produced is a given parameter, how many fish were produced in total, ignoring the surplus fish stock weight of 500 kg, which is not relevant? Calculate the total number of fish.',
    options: ['5,000 fish', '4,500 fish', '6,000 fish', '5,500 fish'],
    correctAnswer: 0,
    solution: {
      given: 'Total production = 5,500,000 kg, Average weight = 1.1 kg.',
      steps: ['Total number of fish = Total production / Average weight', 'Total number of fish = 5,500,000 kg / 1.1 kg = 5,000,000 fish.'],
      formula: 'Total number of fish = Total production (kg) / Average weight (kg)',
      keyConcept: 'Estimating fish production requires understanding weight and quantity relationships.',
      commonMistakes: ['Confusing mass with volume', 'Overlooking decimal placements', 'Failing to convert between kg and g properly'],
      extraneousGivens: ['Surplus stock weight: 500 kg', 'Average feed conversion rate: 1.5', 'Annual growth rates'],
    }
  },
  {
    id: 'llm-b-0684', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Formation', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is NOT a factor that affects soil formation?',
    options: ['Parent material', 'Climate', 'Soil pH', 'Topography'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0685', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Properties', type: 'theory', difficulty: 'easy',
    question: 'What is the primary role of organic matter in soil?',
    options: ['Provide the soil with color', 'Improve soil structure', 'Serve as a reservoir for water', 'Increase bulk density'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0686', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Texture', type: 'theory', difficulty: 'average',
    question: 'What determines the texture of soil?',
    options: ['The size of soil particles', 'The color of the soil', 'The organic matter content', 'The moisture content'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0687', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Chemistry', type: 'theory', difficulty: 'average',
    question: 'What does cation exchange capacity (CEC) measure in soil?',
    options: ['The ability of soil to hold water', 'The ability of soil to exchange cations', 'The amount of organic matter', 'The soil\'s pH'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0688', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Management', type: 'theory', difficulty: 'average',
    question: 'Which of the following is a practice for conserving soil?',
    options: ['Overgrazing', 'Mono-cropping', 'Cover cropping', 'Intensive tillage'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0689', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Properties', type: 'theory', difficulty: 'hard',
    question: 'What is the significance of soil pH for plant growth?',
    options: ['It affects the soil\'s moisture content', 'It determines the color of the soil', 'It influences nutrient availability', 'It determines the texture of soil'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0690', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Moisture', type: 'theory', difficulty: 'hard',
    question: 'What type of soil moisture is available for plant uptake?',
    options: ['Gravitational water', 'Capillary water', 'Hygroscopic water', 'Pore water'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0691', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Fertility', type: 'theory', difficulty: 'easy',
    question: 'Which nutrient is considered a macronutrient for plants?',
    options: ['Iron', 'Zinc', 'Calcium', 'Boron'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0692', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Fertility Management', type: 'theory', difficulty: 'average',
    question: 'What is the purpose of using fertilizers in agriculture?',
    options: ['To improve soil structure', 'To provide essential nutrients for plant growth', 'To increase soil pH', 'To reduce soil erosion'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0693', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Fertility Calculation', type: 'computation', difficulty: 'easy',
    question: 'You need to apply 30 kg of nitrogen (N) per hectare. If your fertilizer contains 10% N, how much fertilizer is required per hectare?',
    options: ['300 kg', '3000 kg', '3000 g', '300 kg'],
    correctAnswer: 0,
    solution: {
      given: 'N requirement = 30 kg/ha, N content in fertilizer = 10%',
      steps: ['Calculate fertilizer needed: Fertilizer required (kg) = N requirement (kg) / (N content / 100)', 'Substituting values: Fertilizer required = 30 kg / (10 / 100) = 300 kg'],
      formula: 'Fertilizer required (kg) = N requirement (kg) / (N content / 100)',
      keyConcept: 'This formula shows how to calculate the total amount of fertilizer needed based on nutrient requirement and nutrient concentration.',
      commonMistakes: ['Confusing kg with g', 'Using wrong percentage', 'Misinterpreting requirement'],
      extraneousGivens: ['N content in fertilizer: 10%', 'Soil moisture level: 25%', 'Ambient temperature: 30°C'],
    }
  },
  {
    id: 'llm-b-0694', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Moisture Calculation', type: 'computation', difficulty: 'average',
    question: 'If a soil sample weighs 200 g when fresh and 150 g when oven-dried, what is the gravimetric moisture content expressed as a percentage? Note: Assume the density of water is 1 g/cm³.',
    options: ['50%', '33.3%', '66.7%', '20%'],
    correctAnswer: 2,
    solution: {
      given: 'Fresh weight = 200 g, Oven dry weight = 150 g',
      steps: ['Calculate moisture content: Mw = Fresh weight - Oven dry weight = 200 g - 150 g = 50 g', 'Gravimetric moisture content (Om) = (Mw / Oven dry weight) × 100 = (50 g / 150 g) × 100 = 33.33%'],
      formula: 'Om = (Mw / Ms) × 100',
      keyConcept: 'This calculation determines the moisture content of the soil sample relative to the dry weight of the soil.',
      commonMistakes: ['Forgetting to multiply by 100', 'Not subtracting the oven-dry weight from fresh weight', 'Using the wrong units'],
      extraneousGivens: ['Weight of water: 1 g/cm³', 'Fresh weight: 200 g', 'Ambient temperature: 25°C', 'Soil texture: clay'],
    }
  },
  {
    id: 'llm-b-0695', area: 'B', subTopic: 'soil-science',
    topic: 'Soil CEC Calculation', type: 'computation', difficulty: 'hard',
    question: 'A soil sample contains the following cation concentrations: Mg2+ = 5 meq/100g, Ca2+ = 10 meq/100g, K+ = 3 meq/100g, Na+ = 2 meq/100g. What is the CEC of the soil? Note: Ignore all other cations.',
    options: ['20 meq/100g', '18 meq/100g', '15 meq/100g', '25 meq/100g'],
    correctAnswer: 1,
    solution: {
      given: 'Mg2+ = 5 meq/100g, Ca2+ = 10 meq/100g, K+ = 3 meq/100g, Na+ = 2 meq/100g',
      steps: ['Calculate CEC: CEC = Mg2+ + Ca2+ + K+ + Na+ = 5 + 10 + 3 + 2 = 20 meq/100g'],
      formula: 'CEC = Σ (cation concentrations)',
      keyConcept: 'Cation exchange capacity indicates the soil’s ability to hold and exchange cations, which is crucial for nutrient availability.',
      commonMistakes: ['Forgetting to add all cations', 'Using wrong units', 'Confusing exchange capacity with water holding capacity'],
      extraneousGivens: ['Sample weight: 100 g', 'Soil pH: 6.5', 'Soil texture: sandy', 'Field moisture: 25%'],
    }
  },
  {
    id: 'llm-b-0696', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Fertility Management', type: 'theory', difficulty: 'easy',
    question: 'What method is used for determining soil nutrient needs?',
    options: ['Soil texture analysis', 'Soil pH testing', 'Soil testing', 'Visual inspection'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0697', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Erosion Management', type: 'theory', difficulty: 'average',
    question: 'Which of the following practices helps to minimize soil erosion?',
    options: ['Tilling', 'Cover cropping', 'Fertilization', 'Pesticide application'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0698', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Management Techniques', type: 'theory', difficulty: 'average',
    question: 'What is the main goal of minimum tillage?',
    options: ['To reduce soil erosion', 'To increase soil compaction', 'To improve drainage', 'To destroy soil structure'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0699', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Nutrient Uptake', type: 'theory', difficulty: 'hard',
    question: 'What is root interception in the context of nutrient uptake?',
    options: ['Movement of nutrients through the soil solution', 'Nutrient absorption by roots as they contact them', 'The passive movement of nutrients', 'Active transport of nutrients into root cells'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0700', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Management', type: 'theory', difficulty: 'hard',
    question: 'Which nutrient is most likely to be deficient in acid soils?',
    options: ['Phosphorus', 'Calcium', 'Potassium', 'Nitrogen'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0701', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Fertility Calculation', type: 'computation', difficulty: 'hard',
    question: 'If you want to apply 40 kg of potassium (K) per hectare, how much of a fertilizer that contains 12% K is required?',
    options: ['333 kg', '3333 kg', '300 kg', '250 kg'],
    correctAnswer: 0,
    solution: {
      given: 'K requirement = 40 kg/ha, K content in fertilizer = 12%',
      steps: ['Calculate the fertilizer needed: Fertilizer required (kg) = K requirement (kg) / (K content / 100)', 'Substituting values: Fertilizer required = 40 kg / (12 / 100) = 333.33 kg'],
      formula: 'Fertilizer required (kg) = K requirement (kg) / (K content / 100)',
      keyConcept: 'This shows how to determine fertilizer requirements based on nutrient needs and nutrient concentration.',
      commonMistakes: ['Forgetting to convert percentage to a fraction', 'Using the wrong required amount', 'Not multiplying by 100'],
      extraneousGivens: ['Fertilizer\'s nitrogen content: 2%', 'Soil temperature: 25°C', 'Soil texture: sandy'],
    }
  },
  {
    id: 'llm-b-0702', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Chemistry', type: 'theory', difficulty: 'easy',
    question: 'What does a high cation exchange capacity (CEC) indicate about soil?',
    options: ['It has good drainage', 'It retains nutrients effectively', 'It has a high bulk density', 'It is acidic'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0703', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Erosion', type: 'theory', difficulty: 'average',
    question: 'What is the primary cause of soil erosion?',
    options: ['Heavy rainfall', 'Wind', 'Human activity', 'Vegetation cover'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0704', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Moisture', type: 'computation', difficulty: 'hard',
    question: 'If a soil sample has a bulk density of 1.3 g/cm³ and the moisture content is 20%, what is the volumetric moisture content (Ov)?',
    options: ['0.26', '0.2', '0.13', '0.16'],
    correctAnswer: 0,
    solution: {
      given: 'Bulk density = 1.3 g/cm³, Moisture content = 20%',
      steps: ['Calculate volumetric moisture content: Ov = (Moisture content × Bulk density) = (0.20) × (1.3) = 0.26'],
      formula: 'Ov = (Moisture content × Bulk density)',
      keyConcept: 'Volumetric moisture content helps determine the available water for plants in the soil.',
      commonMistakes: ['Using wrong units', 'Not multiplying correctly', 'Misinterpreting moisture percentage'],
      extraneousGivens: ['Soil moisture level: 30%', 'Soil type: clay', 'Field temperature: 28°C'],
    }
  },
  {
    id: 'llm-b-0705', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Formation and Properties', type: 'theory', difficulty: 'easy',
    question: 'What is the primary factor influencing the weathering of rocks that leads to soil formation?',
    options: ['Biota', 'Climate', 'Parent Material', 'Time'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0706', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Types', type: 'theory', difficulty: 'easy',
    question: 'Residual soil is formed directly from which of the following?',
    options: ['Transported soil', 'Weathered parent material', 'Organic deposits', 'Chemical processes'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0707', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Nutrients', type: 'theory', difficulty: 'average',
    question: 'Which nutrient is classified as a macronutrient essential for plant growth?',
    options: ['Iron', 'Copper', 'Nitrogen', 'Zinc'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0708', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Properties', type: 'theory', difficulty: 'average',
    question: 'What does Cation Exchange Capacity (CEC) refer to in soil science?',
    options: ['The ability of soil to hold water', 'The ability to hold and exchange cations', 'The organic matter content in soil', 'The resistance of soil to compaction'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0709', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Management Practices', type: 'theory', difficulty: 'hard',
    question: 'Which practice is NOT typically associated with soil conservation?',
    options: ['Cover cropping', 'Excessive tillage', 'Terracing', 'Crop rotation'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0710', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Types and Formation', type: 'theory', difficulty: 'average',
    question: 'Which of the following are factors affecting soil formation?',
    options: ['Temperature and light', 'Biota and topography', 'Soil moisture and pH', 'Soil texture and chemical properties'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0711', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Moisture', type: 'theory', difficulty: 'average',
    question: 'What is field capacity in soil moisture terms?',
    options: ['Maximum water holding capacity', 'Water retained by soil after excess water drains', 'Water available for plant use', 'Water vapor content in soil'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0712', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Chemistry', type: 'theory', difficulty: 'hard',
    question: 'What is the ideal pH range for optimal nutrient availability to plants?',
    options: ['4.0 to 5.5', '5.5 to 7.0', '6.0 to 8.0', '7.0 to 9.0'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0713', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Texture', type: 'theory', difficulty: 'average',
    question: 'What is the main component of clay soil?',
    options: ['Sand particles', 'Organic matter', 'Fine silt', 'Small mineral particles'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0714', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Moisture Calculation', type: 'computation', difficulty: 'average',
    question: 'Calculate the gravimetric moisture content (Om) if the fresh weight of soil is 50 grams and the oven dry weight is 40 grams. The bulk density is 1.3 g/cm³. Note: The total volume of soil sample is not needed for the calculation.',
    options: ['25%', '20%', '35%', '30%'],
    correctAnswer: 0,
    solution: {
      given: 'FW=50g, ODW=40g',
      steps: ['Mw = FW - ODW = 50g - 40g = 10g', 'Om = (Mw / ODW) x 100 = (10g / 40g) x 100 = 25%'],
      formula: 'Om = (Mw / ODW) x 100',
      keyConcept: 'Gravimetric moisture content indicates the amount of water in soil relative to its dry weight.',
      commonMistakes: ['Forgetting to subtract ODW from FW', 'Miscalculating percentage', 'Ignoring the bulk density'],
      extraneousGivens: ['Bulk density: 1.3 g/cm³'],
    }
  },
  {
    id: 'llm-b-0715', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Fertilizer Calculation', type: 'computation', difficulty: 'hard',
    question: 'If the recommended application rate of potassium (K2O) is 30 kg/ha and the potassium content in the fertilizer is 15%, how much fertilizer is needed for 1 hectare? The soil pH is 6.5, which is not needed for the calculation.',
    options: ['200 kg', '250 kg', '300 kg', '150 kg'],
    correctAnswer: 0,
    solution: {
      given: 'K2O rate=30kg/ha, Fertilizer K content=15%',
      steps: ['Fertilizer needed = (K2O rate / Fertilizer K content) * 100 = (30 kg / 0.15) = 200 kg'],
      formula: 'Fertilizer needed = (K2O rate / Fertilizer K content) * 100',
      keyConcept: 'Understanding how to convert between nutrient rates and fertilizer application is critical for proper crop nutrition.',
      commonMistakes: ['Misinterpreting the percentage as a fraction', 'Forgetting to multiply by 100', 'Confusing K2O with K'],
      extraneousGivens: ['Soil pH: 6.5'],
    }
  },
  {
    id: 'llm-b-0716', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Fertilizer Requirements', type: 'theory', difficulty: 'easy',
    question: 'What does the term \'fertilizer grade\' refer to?',
    options: ['The weight of the fertilizer', 'The nutrient content of the fertilizer', 'The pH level of the fertilizer', 'The area covered by the fertilizer'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0717', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Biological Properties', type: 'theory', difficulty: 'average',
    question: 'Which organisms are primarily responsible for the decomposition of organic matter in soil?',
    options: ['Protozoa', 'Bacteria', 'Nematodes', 'Fungi'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0718', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Structure', type: 'theory', difficulty: 'average',
    question: 'What is the physical arrangement of soil particles and the pore spaces between them known as?',
    options: ['Soil texture', 'Soil structure', 'Soil consistency', 'Soil moisture'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0719', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Water and Moisture Retention', type: 'computation', difficulty: 'hard',
    question: 'Calculate the volumetric moisture content (Ov) if the gravimetric moisture content is 25% and the bulk density is 1.4 g/cm³. Note: The conversion factor for water density is not needed.',
    options: ['0.15 cm³/cm³', '0.18 cm³/cm³', '0.20 cm³/cm³', '0.22 cm³/cm³'],
    correctAnswer: 2,
    solution: {
      given: 'Om=25%, Db=1.4 g/cm³',
      steps: ['Ov = Om * Db / 100 = 25 * 1.4 / 100 = 0.35 cm³/cm³'],
      formula: 'Ov = Om * (Db / 100)',
      keyConcept: 'Volumetric moisture content provides insight into the amount of water available to plants in different soil conditions.',
      commonMistakes: ['Using wrong units', 'Confusing gravimetric with volumetric', 'Forgetting to convert percentage to decimal'],
      extraneousGivens: ['Conversion factor for water density'],
    }
  },
  {
    id: 'llm-b-0720', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Conservation Practices', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is an effective soil conservation practice?',
    options: ['No-till farming', 'Overgrazing', 'Monocropping', 'Burning of crop residues'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0721', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Amendments', type: 'theory', difficulty: 'average',
    question: 'What is the purpose of adding lime to acidic soils?',
    options: ['To increase nutrient leaching', 'To raise soil pH', 'To reduce soil salinity', 'To increase soil moisture'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0722', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Microbial Activity', type: 'theory', difficulty: 'hard',
    question: 'Which type of soil bacteria is critical in the nitrogen fixation process?',
    options: ['Actinomycetes', 'Nitrifying bacteria', 'Rhizobium', 'Thiobacillus'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0723', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Texture Analysis', type: 'computation', difficulty: 'easy',
    question: 'A soil sample contains 50% sand, 30% silt, and 20% clay. What is its texture classification according to the USDA soil textural triangle? The soil depth is 1 meter and not needed for calculation.',
    options: ['Loamy sand', 'Clay loam', 'Silty clay', 'Sand'],
    correctAnswer: 0,
    solution: {
      given: 'Sand: 50%, Silt: 30%, Clay: 20%',
      steps: ['Locate the percentages on the USDA triangle', 'Identify the intersection point', 'Determine the textural class'],
      formula: 'N/A',
      keyConcept: 'Soil texture affects water retention, nutrient availability, and overall soil health.',
      commonMistakes: ['Misreading the triangle', 'Forgetting to add up percentages', 'Confusing proportions'],
      extraneousGivens: ['Soil depth: 1 meter'],
    }
  },
  {
    id: 'llm-b-0724', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Formation', type: 'theory', difficulty: 'easy',
    question: 'What is the primary process through which soil is formed?',
    options: ['Weathering of rocks', 'Evaporation of water', 'Transpiration by plants', 'Chemical reactions in air'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0725', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Horizons', type: 'theory', difficulty: 'average',
    question: 'Which soil horizon is known as the topsoil and is rich in organic matter?',
    options: ['B Horizon', 'A Horizon', 'C Horizon', 'R Horizon'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0726', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Properties', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is NOT a primary macronutrient essential for plant growth?',
    options: ['Nitrogen', 'Phosphorus', 'Iron', 'Potassium'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0727', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Texture', type: 'theory', difficulty: 'average',
    question: 'What does the term \'soil texture\' refer to?',
    options: ['Color of the soil', 'Size of soil particles', 'Water holding capacity', 'Nutrient content'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0728', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Management', type: 'theory', difficulty: 'average',
    question: 'Which practice is recommended for soil conservation in the Philippines?',
    options: ['Continuous monocropping', 'Cover cropping', 'Burning of residues', 'Excessive tillage'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0729', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Chemistry', type: 'theory', difficulty: 'hard',
    question: 'What is cation exchange capacity (CEC) in soil?',
    options: ['Ability to hold water', 'Ability to retain positively charged ions', 'Amount of organic matter present', 'Soil acidity level'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0730', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Moisture', type: 'theory', difficulty: 'average',
    question: 'What is field capacity in soil moisture management?',
    options: ['Total saturation of the soil', 'Water retained after gravitational drainage', 'Water content at wilting point', 'Maximum moisture the soil can hold'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0731', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Fertility', type: 'theory', difficulty: 'average',
    question: 'What characterizes organic fertilizers?',
    options: ['Synthetic chemicals only', 'Natural materials and by-products', 'High solubility in water', 'Immediate nutrient release'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0732', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Temperature', type: 'theory', difficulty: 'easy',
    question: 'What range of soil temperature is generally ideal for crop growth?',
    options: ['0 to 10°C', '10 to 18°C', '18 to 24°C', '25 to 30°C'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0733', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Classification', type: 'theory', difficulty: 'average',
    question: 'Which of the following classifies soil based on its particle size?',
    options: ['Gravel, sand, silt, clay', 'Acidic, neutral, alkaline', 'Organic, inorganic', 'Residual, transported'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0734', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Calculation', type: 'computation', difficulty: 'hard',
    question: 'You have a soil sample weighing 50 g and after drying, it weighs 40 g. What is the gravimetric moisture content (Om)? Please also note that the bulk density is 1.3 g/cm³ and the particle density is 2.65 g/cm³. Calculate Om in percentage.',
    options: ['25%', '20%', '15%', '30%'],
    correctAnswer: 0,
    solution: {
      given: 'FW = 50g, ODW = 40g, bulk density = 1.3g/cm³, particle density = 2.65g/cm³',
      steps: ['Calculate mass of water: Mw = FW - ODW = 50g - 40g = 10g', 'Calculate Om: Om = (Mw / ODW) * 100 = (10 / 40) * 100 = 25%'],
      formula: 'Om = (Mw / ODW) * 100',
      keyConcept: 'Gravimetric moisture content indicates the amount of water relative to the dry weight of the soil.',
      commonMistakes: ['Forgetting to subtract ODW from FW', 'Misunderstanding bulk density vs. weight', 'Confusing moisture content calculations'],
      extraneousGivens: ['bulk density = 1.3 g/cm³', 'particle density = 2.65 g/cm³'],
    }
  },
  {
    id: 'llm-b-0735', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Calculation', type: 'computation', difficulty: 'average',
    question: 'If a hectare of land requires 20 kg/ha of potassium (K) and you are using a fertilizer that is 10% K, how much of that fertilizer will you need to apply? The area of your land is 1.5 hectares, and the temperature is 27°C.',
    options: ['300 kg', '400 kg', '600 kg', '500 kg'],
    correctAnswer: 1,
    solution: {
      given: 'K requirement = 20 kg/ha, area = 1.5 ha, fertilizer K% = 10%, air temperature = 27°C',
      steps: ['Calculate total K needed: Total K = K requirement * area = 20 kg/ha * 1.5 ha = 30 kg', 'Calculate fertilizer amount needed: Fertilizer needed = Total K / (fertilizer K%) = 30 kg / 0.10 = 300 kg'],
      formula: 'Fertilizer needed = Total K / (fertilizer K%)',
      keyConcept: 'Understanding the relationship between nutrient requirements and fertilizer concentration.',
      commonMistakes: ['Not multiplying the area correctly', 'Misunderstanding percentage calculations', 'Using wrong units'],
      extraneousGivens: ['air temperature = 27°C'],
    }
  },
  {
    id: 'llm-b-0736', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Calculation', type: 'computation', difficulty: 'average',
    question: 'A crop requires 15% moisture in the soil for optimal growth. If a soil sample weighing 200 grams contains 30 grams of water, what is the volumetric moisture content (Ov) given that the bulk density is 1.4 g/cm³? Note that the atmospheric pressure is 101.3 kPa.',
    options: ['0.10 m³/m³', '0.15 m³/m³', '0.20 m³/m³', '0.25 m³/m³'],
    correctAnswer: 2,
    solution: {
      given: 'Water mass = 30g, soil mass = 200g, bulk density = 1.4 g/cm³, atm pressure = 101.3 kPa',
      steps: ['Calculate Ov: Ov = (Water mass / (Soil mass * bulk density))', 'Ov = (30g / (200g * 1.4 g/cm³)) = 0.107 m³/m³', 'Convert to percentage: Ov = 0.107 * 100 = 10.7%'],
      formula: 'Ov = (Water mass / (Soil mass * bulk density))',
      keyConcept: 'Volumetric moisture content determines soil water availability to plants.',
      commonMistakes: ['Forgetting to convert grams to cubic meters', 'Incorrectly calculating bulk density', 'Confusing weight and volume'],
      extraneousGivens: ['atmospheric pressure = 101.3 kPa'],
    }
  },
  {
    id: 'llm-b-0737', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Fertility Calculation', type: 'computation', difficulty: 'hard',
    question: 'What is the total amount of nitrogen needed for a 2-hectare rice field if the recommended rate is 30 kg/ha of nitrogen using a fertilizer that has 18% N? The current temperature is 32°C.',
    options: ['600 kg', '300 kg', '500 kg', '450 kg'],
    correctAnswer: 0,
    solution: {
      given: 'Area = 2 ha, N rate = 30 kg/ha, fertilizer N% = 18%, temperature = 32°C',
      steps: ['Calculate total N needed: Total N = N rate * area = 30 kg/ha * 2 ha = 60 kg', 'Calculate fertilizer needed: Fertilizer needed = Total N / (fertilizer N%) = 60 kg / 0.18 = 333.33 kg'],
      formula: 'Fertilizer needed = Total N / (fertilizer N%)',
      keyConcept: 'Calculating nutrient application rates is essential for effective fertilization.',
      commonMistakes: ['Using incorrect area size', 'Miscalculating percentage', 'Failing to convert units correctly'],
      extraneousGivens: ['current temperature = 32°C'],
    }
  },
  {
    id: 'llm-b-0738', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Analysis', type: 'theory', difficulty: 'average',
    question: 'What is the primary purpose of soil testing?',
    options: ['To measure soil pH', 'To determine nutrient deficiencies', 'To assess soil moisture content', 'To evaluate soil texture'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0739', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Amendments', type: 'theory', difficulty: 'average',
    question: 'Which soil amendment would be recommended for improving drainage in clay soils?',
    options: ['Silt', 'Lime', 'Sand', 'Organic matter'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0740', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Erosion', type: 'theory', difficulty: 'average',
    question: 'What is the main consequence of soil erosion?',
    options: ['Improved soil fertility', 'Loss of topsoil', 'Increased moisture retention', 'Enhanced plant growth'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0741', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Biology', type: 'theory', difficulty: 'easy',
    question: 'What role do earthworms play in the soil ecosystem?',
    options: ['They are harmful to plants.', 'They enhance nutrient availability.', 'They decrease soil moisture.', 'They limit microbial activity.'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0742', area: 'B', subTopic: 'soil-science',
    topic: 'Soil pH', type: 'theory', difficulty: 'easy',
    question: 'Why is soil pH important for plant growth?',
    options: ['It affects the color of the soil.', 'It determines the soil texture.', 'It influences nutrient availability.', 'It controls soil moisture.'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0743', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Fertility', type: 'theory', difficulty: 'hard',
    question: 'Which nutrient is associated with promoting root development in crops?',
    options: ['Nitrogen', 'Phosphorus', 'Potassium', 'Calcium'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0744', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Analysis', type: 'computation', difficulty: 'average',
    question: 'If a soil sample contains 15% nitrogen (N), what is the amount of nitrogen in 500 grams of this soil? The moisture content of the soil is 10% and the temperature is 28°C.',
    options: ['75 g', '70 g', '80 g', '65 g'],
    correctAnswer: 0,
    solution: {
      given: 'Soil sample mass = 500g, N% = 15%, moisture content = 10%, temperature = 28°C',
      steps: ['Calculate amount of nitrogen: Amount of N = (N% / 100) * soil sample mass = (15% / 100) * 500g = 75g'],
      formula: 'Amount of N = (N% / 100) * soil sample mass',
      keyConcept: 'Calculating nutrient content is crucial for effective soil management.',
      commonMistakes: ['Forgetting to convert percentage to decimal', 'Misunderstanding the effect of moisture content', 'Using incorrect mass measurements'],
      extraneousGivens: ['moisture content = 10%', 'temperature = 28°C'],
    }
  },
  {
    id: 'llm-b-0745', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What is the primary role of soil organic matter in agricultural systems?',
    options: ['Increases soil drainage capacity', 'Enhances soil fertility and nutrient availability', 'Improves soil pH', 'Reduces soil compaction'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0746', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which of the following is NOT a factor affecting soil formation?',
    options: ['Parent material', 'Biota', 'Soil texture', 'Climate'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0747', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What is the main consequence of over-application of fertilizers in rice production?',
    options: ['Increased crop yield', 'Soil acidification', 'Improved soil structure', 'Enhanced microbial activity'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0748', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What classifies soil as transported soil?',
    options: ['It forms in place from weathered rock', 'It is moved from its original location by natural forces', 'It contains high levels of organic matter', 'It is formed under specific climatic conditions'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0749', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which nutrient is considered a macronutrient essential for corn growth?',
    options: ['Iron', 'Zinc', 'Nitrogen', 'Manganese'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0750', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'The process by which water moves through soil and into plants is known as?',
    options: ['Percolation', 'Infiltration', 'Evapotranspiration', 'Diffusion'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0751', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which type of soil structure is most beneficial for agricultural productivity?',
    options: ['Massive', 'Granular', 'Platy', 'Columnar'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0752', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What is the main purpose of soil conservation practices?',
    options: ['To increase nutrient content', 'To prevent soil erosion and maintain soil fertility', 'To improve soil pH', 'To enhance crop yield'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0753', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which of the following is considered a secondary macronutrient?',
    options: ['Calcium', 'Iron', 'Phosphorus', 'Magnesium'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0754', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'You plan to apply 150 kg/ha of ammonium sulfate (NH4)2SO4 to your cornfield. If the fertilizer contains 21% nitrogen (N), how much nitrogen will you apply per hectare?',
    options: ['31.5 kg', '21 kg', '30 kg', '15.75 kg'],
    correctAnswer: 0,
    solution: {
      given: 'Application rate of (NH4)2SO4 = 150 kg/ha, %N = 21%',
      steps: ['Calculate N applied: N = (150 kg/ha) * (21/100) = 31.5 kg/ha'],
      formula: 'N applied (kg/ha) = Application rate (kg/ha) * (%N / 100)',
      keyConcept: 'Understanding the nutrient content of fertilizers is essential for proper application rates.',
      commonMistakes: ['Miscalculating the percentage', 'Using the wrong fertilizer type', 'Not converting kg to g'],
      extraneousGivens: ['Fertilizer type: Ammonium sulfate', 'Field size: 1 hectare', 'Fertilizer cost: PHP 300'],
    }
  },
  {
    id: 'llm-b-0755', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'If you have a soil sample weighing 100 grams and its moisture content is 25%, what is the mass of the water in the sample?',
    options: ['25 grams', '75 grams', '100 grams', '50 grams'],
    correctAnswer: 0,
    solution: {
      given: 'Soil sample weight = 100 grams, Moisture content = 25%',
      steps: ['Water mass = (100 g) * (25/100) = 25 g'],
      formula: 'Water mass (g) = Soil mass (g) * (% moisture / 100)',
      keyConcept: 'Calculating moisture content helps in understanding soil water availability.',
      commonMistakes: ['Confusing moisture percentage with weight', 'Forgetting to convert percentage to decimal', 'Using the wrong sample weight'],
      extraneousGivens: ['Soil texture: Clay', 'Sample source: Local farm', 'Field area: 1 hectare'],
    }
  },
  {
    id: 'llm-b-0756', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'You have 250 kg of a fertilizer that contains 15% potassium (K). How much potassium is actually in the fertilizer?',
    options: ['37.5 kg', '15 kg', '18.75 kg', '40 kg'],
    correctAnswer: 0,
    solution: {
      given: 'Fertilizer weight = 250 kg, %K = 15%',
      steps: ['K = (250 kg) * (15/100) = 37.5 kg'],
      formula: 'Potassium mass (kg) = Fertilizer mass (kg) * (%K / 100)',
      keyConcept: 'Understanding nutrient content helps in appropriate application.',
      commonMistakes: ['Calculating total weight instead of nutrient weight', 'Using incorrect percentage', 'Assuming all fertilizer is nutrient'],
      extraneousGivens: ['Fertilizer type: NPK mix', 'Field size: 1 hectare', 'Cost of fertilizer: PHP 800'],
    }
  },
  {
    id: 'llm-b-0757', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'A farmer uses 5 tons of compost that contains 1.5% nitrogen per hectare. Calculate how much nitrogen is being applied.',
    options: ['75 kg', '15 kg', '100 kg', '50 kg'],
    correctAnswer: 0,
    solution: {
      given: 'Compost mass = 5 tons = 5000 kg, %N = 1.5%',
      steps: ['N = (5000 kg) * (1.5/100) = 75 kg'],
      formula: 'Nitrogen mass (kg) = Compost mass (kg) * (%N / 100)',
      keyConcept: 'Nutrient content is critical for effective fertilization.',
      commonMistakes: ['Confusing tons with kilograms', 'Using the wrong percentage', 'Not converting units correctly'],
      extraneousGivens: ['Compost source: Local farm', 'Field area: 1 hectare', 'Cost of compost: PHP 2000'],
    }
  },
  {
    id: 'llm-b-0758', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which soil horizon is primarily responsible for nutrient and organic matter accumulation?',
    options: ['A horizon', 'B horizon', 'C horizon', 'R horizon'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0759', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which of the following is an effect of soil erosion on agricultural productivity?',
    options: ['Improved soil structure', 'Increased nutrient availability', 'Decreased soil fertility', 'Enhanced water retention'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0760', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What is the primary function of soil microorganisms in the nutrient cycling process?',
    options: ['Decomposing organic matter', 'Compacting the soil', 'Eroding soil particles', 'Increasing soil pH'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0761', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What type of soil is characterized by high clay content and poor drainage?',
    options: ['Sandy soil', 'Loamy soil', 'Clayey soil', 'Silty soil'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0762', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'If 80% of your soil pore space is filled with water, and the total volume of the soil is 1 m³, how much water is in the soil in liters? (1 m³ = 1000 liters)',
    options: ['800 liters', '200 liters', '500 liters', '100 liters'],
    correctAnswer: 0,
    solution: {
      given: 'Soil volume = 1 m³, % pore space filled with water = 80%',
      steps: ['Water volume = 1 m³ * 1000 liters/m³ * (80/100) = 800 liters'],
      formula: 'Water volume (liters) = Soil volume (m³) * 1000 * (% pore space filled / 100)',
      keyConcept: 'Soil water content is crucial for plant health.',
      commonMistakes: ['Forgetting to convert m³ to liters', 'Assuming 100% pore space is filled', 'Miscalculating the percentage'],
      extraneousGivens: ['Soil type: Clay', 'Field area: 1 hectare', 'Irrigation method: Drip'],
    }
  },
  {
    id: 'llm-b-0763', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'A soil with a bulk density of 1.5 g/cm³ has a volume of 2 m³. Calculate the mass of the soil in kilograms, knowing that 1 g/cm³ = 1000 kg/m³.',
    options: ['3000 kg', '1500 kg', '2000 kg', '2500 kg'],
    correctAnswer: 0,
    solution: {
      given: 'Bulk density = 1.5 g/cm³ = 1500 kg/m³, Volume = 2 m³',
      steps: ['Mass = Bulk density * Volume = 1500 kg/m³ * 2 m³ = 3000 kg'],
      formula: 'Mass (kg) = Bulk density (kg/m³) * Volume (m³)',
      keyConcept: 'Understanding soil mass is essential for calculating nutrient and water content.',
      commonMistakes: ['Confusing grams with kilograms', 'Forgetting to convert the volume', 'Misapplying the density formula'],
      extraneousGivens: ['Soil type: Loam', 'Field width: 10 m', 'Irrigation type: Manual'],
    }
  },
  {
    id: 'llm-b-0764', area: 'B', subTopic: 'crop-science',
    topic: 'Soil Formation', type: 'theory', difficulty: 'easy',
    question: 'What are the primary factors affecting soil formation?',
    options: ['Weathering, Crop Type, Microbial Activity, Topography', 'Parent Material, Climate, Biota, Topography', 'Time, Organic Matter, Soil Texture, Land Use', 'Mineralogy, Salinity, Soil Structure, Irrigation'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0765', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Properties', type: 'theory', difficulty: 'average',
    question: 'Which soil property is crucial for determining the soil\'s ability to retain water?',
    options: ['Soil Color', 'Soil Texture', 'Soil Fertility', 'Soil Structure'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0766', area: 'B', subTopic: 'crop-science',
    topic: 'Soil Management Practices', type: 'theory', difficulty: 'average',
    question: 'Which of the following is an effective practice for soil conservation?',
    options: ['Mono-cropping', 'Overgrazing by livestock', 'Contour farming', 'Use of chemical fertilizers only'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0767', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Nutrients', type: 'theory', difficulty: 'easy',
    question: 'Which of the following nutrients is considered a macronutrient for plants?',
    options: ['Zinc', 'Copper', 'Nitrogen', 'Manganese'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0768', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Chemistry', type: 'theory', difficulty: 'hard',
    question: 'What is the role of soil pH in nutrient availability?',
    options: ['Higher pH increases nutrient solubility.', 'Lower pH maximizes microbial activity.', 'Soil pH affects the ionization of nutrients.', 'pH does not affect nutrient availability.'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0769', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Moisture', type: 'computation', difficulty: 'average',
    question: 'A soil sample weighs 200 grams when fresh and 150 grams after oven drying. Calculate the gravimetric moisture content (Om) if the bulk density is 1.3 g/cm³, and consider the volumetric moisture content irrelevant. What is the moisture content percentage?',
    options: ['33.33%', '25%', '40%', '15%'],
    correctAnswer: 0,
    solution: {
      given: 'Fresh weight = 200 g, Oven dry weight = 150 g, Bulk density = 1.3 g/cm³',
      steps: ['Calculate moisture content: Mw = Fresh weight - Oven dry weight = 200 g - 150 g = 50 g', 'Calculate MS = Oven dry weight = 150 g', 'Calculate Om = (Mw / MS) x 100 = (50 g / 150 g) x 100 = 33.33%'],
      formula: 'Om = (Mw / Ms) x 100',
      keyConcept: 'Gravimetric moisture content indicates the amount of water in soil per unit of dry weight.',
      commonMistakes: ['Confusing fresh weight with oven dry weight', 'Not converting grams to other units', 'Using bulk density incorrectly in calculations'],
      extraneousGivens: ['Bulk density: 1.3 g/cm³', 'Soil temperature: 25°C', 'Surface area of sample: 10 cm²', 'Soil color: dark brown'],
    }
  },
  {
    id: 'llm-b-0770', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Fertility Management', type: 'computation', difficulty: 'hard',
    question: 'Calculate the amount of nitrogen (N) needed for 2 hectares of rice crop, given a recommended rate of fertilizer application of 50 kg N/ha, and consider soil moisture irrelevant. What is the total amount of nitrogen required?',
    options: ['100 kg', '150 kg', '200 kg', '50 kg'],
    correctAnswer: 0,
    solution: {
      given: 'Area = 2 ha, Recommended rate = 50 kg N/ha',
      steps: ['Calculate total nitrogen required: Total N = Area × Recommended rate = 2 ha × 50 kg/ha = 100 kg'],
      formula: 'Total N = Area × Recommended rate',
      keyConcept: 'Understanding fertilizer recommendations is essential for optimal crop production.',
      commonMistakes: ['Multiplying by the wrong area', 'Forgetting to convert hectares to appropriate units', 'Confusing nitrogen content with total fertilizer application'],
      extraneousGivens: ['Irrigation requirement: 1000 L/ha', 'Spraying method used: backpack sprayer', 'Soil temperature: 28°C', 'Distance between rows: 30 cm'],
    }
  },
  {
    id: 'llm-b-0771', area: 'B', subTopic: 'ecological-sciences',
    topic: 'Soil Environmental Impact', type: 'theory', difficulty: 'average',
    question: 'What is one major consequence of soil erosion on agricultural land?',
    options: ['Increased soil fertility', 'Loss of nutrients', 'Improved soil structure', 'Enhanced water retention'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0772', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Types', type: 'theory', difficulty: 'average',
    question: 'What type of soil is typically characterized by high organic matter and water retention?',
    options: ['Sandy soil', 'Clayey soil', 'Loamy soil', 'Salty soil'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0773', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Chemistry', type: 'computation', difficulty: 'hard',
    question: 'A soil sample has a Cation Exchange Capacity (CEC) of 25 meq/100g. If magnesium (Mg2+) contributes 6 meq/100g, calcium (Ca2+) contributes 10 meq/100g, and potassium (K+) contributes 3 meq/100g, what is the percentage base saturation (%BS) for this sample? Assume soil properties irrelevant.',
    options: ['76%', '52%', '92%', '84%'],
    correctAnswer: 0,
    solution: {
      given: 'Total CEC = 25 meq/100g, Mg2+ = 6 meq/100g, Ca2+ = 10 meq/100g, K+ = 3 meq/100g',
      steps: ['Calculate total basic cations: Total base cations = Mg2+ + Ca2+ + K+ = 6 + 10 + 3 = 19 meq/100g', 'Calculate %BS: %BS = (Total base cations / CEC) x 100 = (19 / 25) x 100 = 76%'],
      formula: '%BS = (Total base cations / CEC) x 100',
      keyConcept: 'Base saturation indicates the proportion of basic cations relative to soil\'s CEC, affecting fertility.',
      commonMistakes: ['Forgetting to sum individual cation contributions', 'Not converting units correctly', 'Misunderstanding the CEC definition'],
      extraneousGivens: ['pH of soil: 6.5', 'Soil temperature: 30°C', 'Total organic matter: 5%', 'Moisture content: 25%'],
    }
  },
  {
    id: 'llm-b-0774', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Formation', type: 'theory', difficulty: 'easy',
    question: 'Which of the following processes describes the breakdown of parent rock material into soil?',
    options: ['Erosion', 'Weathering', 'Leaching', 'Translocation'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0775', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Moisture', type: 'theory', difficulty: 'average',
    question: 'What is the primary function of capillary water in the soil?',
    options: ['It aids soil aeration.', 'It serves as a solvent for nutrients.', 'It prevents soil erosion.', 'It contributes to soil structure.'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0776', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Structure', type: 'theory', difficulty: 'average',
    question: 'What term describes the arrangement of soil particles into aggregates?',
    options: ['Soil texture', 'Soil density', 'Soil structure', 'Soil color'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0777', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Chemistry', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is a common method for measuring soil pH?',
    options: ['Moisture meter', 'pH meter', 'Tensiometer', 'Gas chromatograph'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0778', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Fertility Management', type: 'computation', difficulty: 'hard',
    question: 'If a 1-hectare farm requires 45 kg of phosphorus (P2O5) per hectare to reach optimum fertility, how much superphosphate (SP) with 15% P2O5 is needed? Assume soil moisture is irrelevant.',
    options: ['300 kg', '400 kg', '600 kg', '400 kg'],
    correctAnswer: 0,
    solution: {
      given: 'Required P2O5 = 45 kg/ha, SP concentration = 15%',
      steps: ['Calculate the amount of SP needed: Amount of SP = Required P2O5 / % P2O5 in SP = 45 kg / 0.15 = 300 kg'],
      formula: 'Amount of SP = Required P2O5 / % P2O5 in SP',
      keyConcept: 'Calculating fertilizer needs based on nutrient percentage helps achieve optimum fertility in crops.',
      commonMistakes: ['Confusing fertilizer type with nutrient type', 'Not converting percentages correctly', 'Overestimating the SP requirement'],
      extraneousGivens: ['Soil texture: sandy loam', 'Rainfall: 1200 mm/year', 'Soil type: alluvial', 'Temperature: 35°C'],
    }
  },
  {
    id: 'llm-b-0779', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Types', type: 'theory', difficulty: 'hard',
    question: 'What is the primary characteristic of clay soils compared to sandy soils?',
    options: ['Better drainage', 'Higher fertility', 'Lower water retention', 'Higher plasticity'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0780', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Erosion', type: 'theory', difficulty: 'average',
    question: 'What is one of the primary causes of soil erosion in agricultural fields?',
    options: ['Cover cropping', 'Monoculture farming', 'Mulching', 'Crop rotation'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0781', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Fertility Management', type: 'theory', difficulty: 'average',
    question: 'Which nutrient is crucial for the development of plant roots?',
    options: ['Potassium', 'Phosphorus', 'Calcium', 'Magnesium'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0782', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Structure', type: 'computation', difficulty: 'average',
    question: 'If the bulk density of a soil sample is 1.2 g/cm³ and the volume of soil is 1000 cm³, what is the mass of the soil sample? Assume irrelevant values such as particle density are not needed.',
    options: ['1000 g', '1200 g', '1500 g', '800 g'],
    correctAnswer: 1,
    solution: {
      given: 'Bulk density = 1.2 g/cm³, Volume = 1000 cm³',
      steps: ['Calculate mass: Mass = Bulk density × Volume = 1.2 g/cm³ × 1000 cm³ = 1200 g'],
      formula: 'Mass = Bulk density × Volume',
      keyConcept: 'Understanding bulk density helps determine the mass and compaction of the soil.',
      commonMistakes: ['Using incorrect unit conversions', 'Forgetting to multiply the correct dimensions', 'Confusing mass with volume'],
      extraneousGivens: ['Moisture content: 15%', 'Soil form: layer', 'Site gradient: 5%', 'pH: 7.0'],
    }
  },
  {
    id: 'llm-b-0783', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'What are the primary processes involved in soil formation?',
    options: ['Weathering, transport, sedimentation', 'Decomposition, respiration, evaporation', 'Photosynthesis, nitrification, leaching', 'Composting, erosion, crystallization'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0784', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is NOT a component of soil?',
    options: ['Mineral matter', 'Organic matter', 'Solar energy', 'Pore spaces'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0785', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What is the main nutrient supplied by organic matter in soil?',
    options: ['Nitrogen', 'Phosphorus', 'Potassium', 'Sulfur'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0786', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which agency in the Philippines is primarily responsible for agricultural research and development?',
    options: ['Department of Environment and Natural Resources (DENR)', 'Department of Agriculture (DA)', 'National Irrigation Administration (NIA)', 'Energy Regulatory Commission (ERC)'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0787', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'hard',
    question: 'What does the term \'soil pH\' indicate, and why is it important for plant growth?',
    options: ['It indicates soil texture; important for moisture retention.', 'It indicates soil acidity or alkalinity; important for nutrient availability.', 'It indicates organic matter content; important for decomposition.', 'It indicates mineral content; important for soil structure.'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0788', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'easy',
    question: 'If a farmer applies 200 kg of fertilizer with 15% nitrogen content how much nitrogen is being applied?',
    options: ['15 kg', '30 kg', '20 kg', '25 kg'],
    correctAnswer: 1,
    solution: {
      given: 'Fertilizer = 200 kg, Nitrogen content = 15%',
      steps: ['Calculate nitrogen applied: N = Fertilizer × (Nitrogen content / 100)', 'N = 200 kg × (15 / 100) = 30 kg'],
      formula: 'N = Fertilizer × (Nitrogen content / 100)',
      keyConcept: 'Understanding how to calculate nutrient application is vital for effective fertilization.',
      commonMistakes: ['Confusing total fertilizer with nitrogen content', 'Using wrong units in calculations', 'Adding percentages instead of multiplying'],
      extraneousGivens: ['Fertilizer type: Urea', 'Field size: 1 hectare', 'Application method: Broadcast'],
    }
  },
  {
    id: 'llm-b-0789', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'easy',
    question: 'Calculating using a 10% potassium fertilizer, how many kilograms of potassium are present in 50 kg of fertilizer?',
    options: ['5 kg', '10 kg', '7 kg', '2 kg'],
    correctAnswer: 0,
    solution: {
      given: 'Fertilizer = 50 kg, Potassium content = 10%',
      steps: ['Calculate potassium applied: K = Fertilizer × (Potassium content / 100)', 'K = 50 kg × (10 / 100) = 5 kg'],
      formula: 'K = Fertilizer × (Potassium content / 100)',
      keyConcept: 'Accurate nutrient calculations help optimize fertilization strategies.',
      commonMistakes: ['Forgetting to convert percentage to decimal', 'Confusing potassium content with nitrogen content', 'Incorrectly assuming weight of fertilizer is equal to weight of nutrients'],
      extraneousGivens: ['Fertilizer brand: Local brand A', 'Field area: 0.5 hectares', 'Water required for application: 100 liters'],
    }
  },
  {
    id: 'llm-b-0790', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which soil horizon is typically rich in organic material?',
    options: ['A horizon', 'B horizon', 'C horizon', 'R horizon'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0791', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'The process of adding organic matter to soil to improve fertility is called?',
    options: ['Mulching', 'Composting', 'Tilling', 'Aeration'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0792', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which type of soil tends to retain more water?',
    options: ['Sandy soil', 'Silty soil', 'Clay soil', 'Loamy soil'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0793', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'If a soil sample weighs 200 g when wet and 160 g when dried, what is the gravimetric moisture content?',
    options: ['25%', '20%', '15%', '30%'],
    correctAnswer: 1,
    solution: {
      given: 'Wet weight = 200 g, Dry weight = 160 g',
      steps: ['Calculate gravimetric moisture content: Om = (Wet weight - Dry weight) / Dry weight × 100%', 'Om = (200 g - 160 g) / 160 g × 100% = 25%'],
      formula: 'Om = (Wet weight - Dry weight) / Dry weight × 100%',
      keyConcept: 'Gravimetric moisture content indicates how much moisture a soil retains.',
      commonMistakes: ['Forgetting to subtract dry weight from wet weight', 'Confusing wet weight with dry weight in calculations', 'Misplacing decimal points'],
      extraneousGivens: ['Soil type: Clayey', 'Humidity level: 75%', 'Temperature: 30°C'],
    }
  },
  {
    id: 'llm-b-0794', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What is the significance of cation exchange capacity (CEC) in soils?',
    options: ['Indicates soil texture', 'Measures soil acidity', 'Indicates nutrient retention capability', 'Determines water holding capacity'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0795', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of liming acidic soils?',
    options: ['Increase nitrogen content', 'Neutralize soil pH', 'Improve drainage', 'Enhance soil structure'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0796', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'hard',
    question: 'A farmer applies 100 kg/ha of a fertilizer that contains 20% nitrogen. If the recommended rate is 150 kg/ha, how much additional nitrogen will the farmer need to meet the recommendation?',
    options: ['30 kg', '20 kg', '15 kg', '25 kg'],
    correctAnswer: 0,
    solution: {
      given: 'Applied fertilizer = 100 kg/ha, Nitrogen content = 20%, Recommended rate = 150 kg/ha',
      steps: ['Calculate nitrogen applied: N_applied = 100 kg/ha × 20% = 20 kg', 'Calculate recommended nitrogen: N_required = 150 kg/ha × 20% = 30 kg', 'Additional nitrogen needed = N_required - N_applied = 30 kg - 20 kg = 10 kg'],
      formula: 'N_applied = Fertilizer × (Nitrogen content / 100)',
      keyConcept: 'Ensuring compliance with recommended fertilizer application maximizes crop yield.',
      commonMistakes: ['Misunderstanding what percentage applies to the total kg of fertilizer', 'Mixing up applied kg and needed kg', 'Forgetting to convert the percentage to decimal'],
      extraneousGivens: ['Soil test results: pH 5.5', 'Weather conditions: Rain forecasted', 'Crop type: Corn'],
    }
  },
  {
    id: 'llm-b-0797', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which of the following is a characteristic of clayey soil?',
    options: ['Drains quickly', 'Retains moisture well', 'Is light and porous', 'Heats up rapidly in the sun'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0798', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'hard',
    question: 'How does the parent material affect soil formation?',
    options: ['It determines the nutrient availability.', 'It influences the pH level of the soil.', 'It affects the particle size distribution.', 'All of the above.'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0799', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What does the term \'field capacity\' refer to in soil science?',
    options: ['The maximum amount of water that soil can hold.', 'The moisture content when all pores are filled with water.', 'The water retained in the soil after excess water has drained away.', 'The moisture content when the soil is at its saturation point.'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0800', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'hard',
    question: 'If a farmer wants to apply 50 kg/ha of phosphorus (P2O5) using a fertilizer that contains 20% P2O5, how much of the fertilizer should be used?',
    options: ['250 kg', '300 kg', '200 kg', '100 kg'],
    correctAnswer: 0,
    solution: {
      given: 'Desired rate = 50 kg/ha, Fertilizer P2O5 content = 20%',
      steps: ['Calculate fertilizer needed: Fertilizer_needed = Desired P2O5 / (Fertilizer P2O5 content / 100)', 'Fertilizer_needed = 50 kg / (20 / 100) = 250 kg'],
      formula: 'Fertilizer_needed = Desired nutrient / (Fertilizer content / 100)',
      keyConcept: 'Understanding how to scale fertilizer application according to its nutrient concentration is crucial for effective crop management.',
      commonMistakes: ['Using the wrong units when calculating', 'Assuming all the fertilizer will be used directly by the plant', 'Not taking leaching into account'],
      extraneousGivens: ['Field size: 1 hectare', 'Crop yield goal: 5 tons per hectare', 'Soil texture: Sandy loam'],
    }
  },
  {
    id: 'llm-b-0801', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Formation', type: 'theory', difficulty: 'easy',
    question: 'What is the main factor influencing the rate of soil formation?',
    options: ['Climate', 'Topography', 'Biota', 'Parent Material'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0802', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Properties', type: 'theory', difficulty: 'average',
    question: 'Which of the following soil types has the highest organic matter content?',
    options: ['Mineral soils', 'Organic soils', 'Residual soils', 'Transported soils'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0803', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Color and Composition', type: 'theory', difficulty: 'average',
    question: 'The color of a soil horizon is largely influenced by which of the following?',
    options: ['Organic matter content', 'Water retention', 'pH level', 'Soil texture'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0804', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Water', type: 'computation', difficulty: 'hard',
    question: 'A soil sample of mass 80 grams loses 12 grams of water upon drying. Calculate the gravimetric moisture content (Om) of the soil. The ambient humidity is 65%, and the pH is 6.5.',
    options: ['15%', '20%', '25%', '30%'],
    correctAnswer: 0,
    solution: {
      given: 'Mass of water (Mw) = 12g, Mass of soil (Ms) = 80g',
      steps: ['Use the formula: Om = (Mw / Ms) × 100', 'Calculate: Om = (12g / 80g) × 100 = 15%'],
      formula: 'Om = (Mw / Ms) × 100',
      keyConcept: 'Gravimetric moisture content measures the amount of water in the soil relative to the dry mass of the soil.',
      commonMistakes: ['Including irrelevant data such as ambient humidity and pH', 'Forgetting to multiply by 100'],
      extraneousGivens: ['Ambient humidity: 65%', 'pH: 6.5'],
    }
  },
  {
    id: 'llm-b-0805', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Management', type: 'theory', difficulty: 'easy',
    question: 'What practice is NOT recommended for improving soil fertility?',
    options: ['Crop rotation', 'Overgrazing', 'Organic amendment application', 'Conservation tillage'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0806', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Chemistry', type: 'computation', difficulty: 'hard',
    question: 'You have a soil with a cation exchange capacity (CEC) of 25 meq/100g. If the sum of exchangeable cations measured in the soil is 15 meq/100g, what is the percent base saturation (%BS) of the soil? The salinity level is 2 dS/m, and the temperature is 27°C.',
    options: ['60%', '70%', '80%', '90%'],
    correctAnswer: 0,
    solution: {
      given: 'Sum of exchangeable cations = 15 meq/100g, CEC = 25 meq/100g',
      steps: ['Use the formula: %BS = (sum of basic cations / CEC) × 100', 'Calculate: %BS = (15 / 25) × 100 = 60%'],
      formula: '%BS = (sum of basic cations / CEC) × 100',
      keyConcept: 'Percent base saturation indicates the proportion of CEC that is occupied by basic cations.',
      commonMistakes: ['Using incorrect units', 'Confusing basic cations with total cations'],
      extraneousGivens: ['Salinity level: 2 dS/m', 'Temperature: 27°C'],
    }
  },
  {
    id: 'llm-b-0807', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Fertility', type: 'theory', difficulty: 'average',
    question: 'Which of the following is considered a secondary nutrient for plant growth?',
    options: ['Nitrogen', 'Phosphorus', 'Calcium', 'Iron'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0808', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Moisture', type: 'theory', difficulty: 'easy',
    question: 'What is the hygroscopic water content of soil?',
    options: ['Water held tightly to soil particles', 'Water that drains freely', 'Water available for plant uptake', 'Water lost during evaporation'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0809', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Types', type: 'theory', difficulty: 'average',
    question: 'Which soil texture type has the highest erosion risk?',
    options: ['Clay', 'Loam', 'Sand', 'Silty'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0810', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Structure', type: 'computation', difficulty: 'hard',
    question: 'If the bulk density of a soil sample is found to be 1.4 g/cm³ and the moisture content is 20%, what is the volume of water held by 100 grams of the soil? The soil sample area is 1 m², and the depth is 15 cm.',
    options: ['10 mL', '20 mL', '30 mL', '40 mL'],
    correctAnswer: 1,
    solution: {
      given: 'Bulk density = 1.4 g/cm³, Moisture content = 20%, Mass of soil = 100 g',
      steps: ['Calculate the volume of soil: Volume = Mass / Bulk Density = 100 g / 1.4 g/cm³ = 71.43 cm³', 'Calculate water volume: Volume of water = Moisture content × Volume of soil = 0.20 × 71.43 cm³ = 14.29 mL'],
      formula: 'Volume of water = Moisture content × Volume of soil',
      keyConcept: 'Volume of water in the soil relates to the moisture content and the bulk density.',
      commonMistakes: ['Confusing mass with volume', 'Neglecting conversion from cm³ to mL'],
      extraneousGivens: ['Soil sample area: 1 m²', 'Soil depth: 15 cm', 'Moisture content: 20%'],
    }
  },
  {
    id: 'llm-b-0811', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Fertility', type: 'theory', difficulty: 'average',
    question: 'Which of the following practices enhances soil fertility?',
    options: ['Over-cultivation', 'Minimizing organic inputs', 'Use of cover crops', 'Constant tillage'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0812', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Salinity', type: 'theory', difficulty: 'hard',
    question: 'What is the expected impact of high salinity on plant growth?',
    options: ['Increased nutrient uptake', 'Improved growth rate', 'Stunted growth', 'Enhanced photosynthesis'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0813', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Erosion', type: 'theory', difficulty: 'easy',
    question: 'What is one primary cause of soil erosion?',
    options: ['Soil compaction', 'Wind action', 'Low vegetation cover', 'High organic matter'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0814', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Fertility', type: 'computation', difficulty: 'hard',
    question: 'Calculate the amount of nitrogen needed per hectare if a crop requires 50 kg of nitrogen per hectare and you plan to apply a fertilizer that contains 30% nitrogen. The area of the field is 1.5 hectares. The current soil moisture is 15% and the average temperature is 28°C.',
    options: ['250 kg', '300 kg', '350 kg', '400 kg'],
    correctAnswer: 3,
    solution: {
      given: 'Nitrogen requirement = 50 kg/ha, Fertilizer nitrogen content = 30%, Area = 1.5 ha',
      steps: ['Calculate total nitrogen needed: Total nitrogen = Required nitrogen × Area = 50 kg/ha × 1.5 ha = 75 kg', 'Calculate the amount of fertilizer needed: Amount of fertilizer = Total nitrogen / Fertilizer nitrogen content = 75 kg / 0.30 = 250 kg'],
      formula: 'Amount of fertilizer = Total nitrogen / Fertilizer nitrogen content',
      keyConcept: 'Calculating fertilizer application depends on nitrogen requirement and the percentage of nitrogen in the fertilizer.',
      commonMistakes: ['Forgetting to convert % to a decimal', 'Misunderstanding the area of application'],
      extraneousGivens: ['Soil moisture: 15%', 'Average temperature: 28°C'],
    }
  },
  {
    id: 'llm-b-0815', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Compaction', type: 'theory', difficulty: 'average',
    question: 'Which of the following is a consequence of soil compaction?',
    options: ['Increased drainage', 'Reduced soil aeration', 'Improved root penetration', 'Enhanced microbial activity'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0816', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Texture', type: 'computation', difficulty: 'hard',
    question: 'If a soil sample consists of 40% sand, 40% silt, and 20% clay, classify the soil texture according to the soil texture triangle. The soil pH is 6.5 and the temperature is 25°C.',
    options: ['Clay', 'Loamy sand', 'Silty clay loam', 'Sandy loam'],
    correctAnswer: 2,
    solution: {
      given: 'Percentage of sand = 40%, silt = 40%, clay = 20%',
      steps: ['Use the soil texture triangle to classify:', 'Since 40% sand and 20% clay, it falls into the Silty Clay Loam category.'],
      formula: 'Classification is based on relative percentages from the soil texture triangle.',
      keyConcept: 'Classification of soil texture is largely determined by the relative amounts of sand, silt, and clay.',
      commonMistakes: ['Incorrect use of the soil texture triangle', 'Miscalculating the percentages'],
      extraneousGivens: ['Soil pH: 6.5', 'Temperature: 25°C'],
    }
  },
  {
    id: 'llm-b-0817', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Aeration', type: 'theory', difficulty: 'easy',
    question: 'Why is aeration important in soil?',
    options: ['Increases water retention', 'Promotes root growth', 'Reduces microbial activity', 'Enhances soil acidity'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0818', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Conservation', type: 'theory', difficulty: 'average',
    question: 'Which of the following techniques is used for soil conservation?',
    options: ['Contour farming', 'Monocropping', 'Deforestation', 'Overgrazing'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0819', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Reclamation', type: 'computation', difficulty: 'hard',
    question: 'If a farmer needs to reclaim 2 hectares of saline soil and requires 1.5 tons of gypsum per hectare, how many total tons of gypsum will be needed? The cost of gypsum is Php 500 per ton and the shipping cost is Php 1000.',
    options: ['2 tons', '3 tons', '4 tons', '5 tons'],
    correctAnswer: 2,
    solution: {
      given: 'Area = 2 ha, Gypsum requirement per hectare = 1.5 tons',
      steps: ['Calculate the total gypsum needed: Total gypsum = Area × Gypsum per hectare = 2 ha × 1.5 tons/ha = 3 tons', 'The cost of gypsum is irrelevant to the calculation of total gypsum needed.'],
      formula: 'Total gypsum = Area × Gypsum per hectare',
      keyConcept: 'Reclamation of saline soil often requires gypsum application based on the area needing treatment.',
      commonMistakes: ['Confusing cost with quantity needed', 'Incorrect multiplication'],
      extraneousGivens: ['Cost of gypsum: Php 500 per ton', 'Shipping cost: Php 1000'],
    }
  },
  {
    id: 'llm-b-0820', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Formation', type: 'theory', difficulty: 'easy',
    question: 'Which of the following factors influences soil formation the most?',
    options: ['Climate', 'Topography', 'Biota', 'Time'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0821', area: 'B', subTopic: 'soil-science',
    topic: 'Types of Soils', type: 'theory', difficulty: 'easy',
    question: 'Which type of soil is formed through the weathering of rock in place?',
    options: ['Transported soil', 'Residual soil', 'Organic soil', 'Mineral soil'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0822', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Properties', type: 'theory', difficulty: 'average',
    question: 'Which of the following is NOT a physical property of soil?',
    options: ['Color', 'Texture', 'pH', 'Structure'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0823', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Management', type: 'theory', difficulty: 'average',
    question: 'What is the primary purpose of contour farming?',
    options: ['Increase crop yield', 'Minimize soil erosion', 'Improve soil pH', 'Maximize sunlight exposure'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0824', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Structure', type: 'theory', difficulty: 'average',
    question: 'What is a \'ped\' in terms of soil structure?',
    options: ['A soil layer', 'An aggregate of soil particles', 'A type of soil texture', 'A soil horizon'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0825', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Water', type: 'theory', difficulty: 'average',
    question: 'Which type of soil water is available to plants?',
    options: ['Gravitational water', 'Hygroscopic water', 'Capillary water', 'Superfluous water'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0826', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Fertility', type: 'theory', difficulty: 'hard',
    question: 'Which of the following nutrients is considered a secondary macronutrient?',
    options: ['Calcium', 'Nitrogen', 'Phosphorus', 'Potassium'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0827', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Fertility', type: 'theory', difficulty: 'hard',
    question: 'The process of plants absorbing water through their roots is known as:',
    options: ['Transpiration', 'Diffusion', 'Uptake', 'Percolation'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0828', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Management Practices', type: 'theory', difficulty: 'hard',
    question: 'Which practice is primarily used to improve soil structure?',
    options: ['Crop rotation', 'Cover cropping', 'Minimal tillage', 'Fertilization'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0829', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Moisture Calculation', type: 'computation', difficulty: 'easy',
    question: 'A soil sample has a fresh weight of 40 grams and an oven-dry weight of 30 grams. What is the gravimetric moisture content? (Ignore all numbers not needed for the calculation.)',
    options: ['33.33%', '25%', '50%', '66.67%'],
    correctAnswer: 0,
    solution: {
      given: 'FW = 40 g, ODW = 30 g',
      steps: ['Calculate Mw = FW - ODW = 40 g - 30 g = 10 g', 'Calculate Om = (Mw / ODW) x 100 = (10 g / 30 g) x 100 = 33.33%'],
      formula: 'Om = (Mw / ODW) x 100',
      keyConcept: 'Gravimetric moisture content indicates the amount of water in soil relative to the dry soil weight.',
      commonMistakes: ['Forgetting to remove the dry weight from fresh weight', 'Using incorrect units', 'Misreading the question'],
      extraneousGivens: ['Surface area = 1 m²', 'Soil density = 1.3 g/cm³', 'Temperature = 25°C'],
    }
  },
  {
    id: 'llm-b-0830', area: 'B', subTopic: 'soil-science',
    topic: 'Cation Exchange Capacity Calculation', type: 'computation', difficulty: 'hard',
    question: 'A soil sample contains the following cations: Ca²⁺ = 20 meq/100g, Mg²⁺ = 10 meq/100g, Na⁺ = 5 meq/100g. What is the total CEC of the soil sample? (Ignore other cations present.)',
    options: ['45 meq/100g', '25 meq/100g', '35 meq/100g', '30 meq/100g'],
    correctAnswer: 0,
    solution: {
      given: 'Ca²⁺ = 20 meq/100g, Mg²⁺ = 10 meq/100g, Na⁺ = 5 meq/100g',
      steps: ['Calculate total CEC = Ca²⁺ + Mg²⁺ + Na⁺ = 20 + 10 + 5 = 35 meq/100g'],
      formula: 'CEC = sum of exchangeable cations',
      keyConcept: 'CEC indicates the soil\'s ability to hold and exchange nutrients.',
      commonMistakes: ['Omitting a cation in calculation', 'Using incorrect units', 'Confusing meq with mg'],
      extraneousGivens: ['Soil bulk density = 1.2 g/cm³', 'Sample size = 100 g', 'pH = 6.5'],
    }
  },
  {
    id: 'llm-b-0831', area: 'B', subTopic: 'soil-science',
    topic: 'Fertilizer Calculation', type: 'computation', difficulty: 'average',
    question: 'To supply 15 kg of nitrogen per hectare using urea (46% N), how much urea is needed? (Base your calculation on a hectare of land, ignoring other variables.)',
    options: ['32.61 kg', '34.78 kg', '30.00 kg', '40.00 kg'],
    correctAnswer: 0,
    solution: {
      given: 'N requirement = 15 kg, Urea %N = 46%',
      steps: ['Calculate amount of Urea = (N requirement / Urea %N) x 100 = (15 kg / 0.46) = 32.61 kg'],
      formula: 'Amount of Urea = (N requirement / %N) x 100',
      keyConcept: 'Calculating the required amount of fertilizer based on its nutrient content.',
      commonMistakes: ['Forgetting to convert % to decimal', 'Dividing instead of multiplying', 'Using the wrong nutrient value'],
      extraneousGivens: ['Field area = 1 hectare', 'Cost of urea = PHP 1,200', 'Time of year = planting season'],
    }
  },
  {
    id: 'llm-b-0832', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Moisture Retention Calculation', type: 'computation', difficulty: 'hard',
    question: 'A soil sample has a total pore space of 50%. If the bulk density is 1.5 g/cm³ and the moisture content is 20%, what is the volumetric moisture content? (Consider unnecessary information in your calculation.)',
    options: ['10%', '15%', '20%', '7.50%'],
    correctAnswer: 1,
    solution: {
      given: 'Total pore space = 50%, Bulk density = 1.5 g/cm³, Moisture content = 20%',
      steps: ['Calculate volumetric moisture content = (Moisture content x Bulk density) / 100 = (20% x 1.5 g/cm³) = 30%', 'Convert to volumetric form: 30 / 2 = 15%  (since only half of the pores can hold moisture)'],
      formula: 'Volumetric Moisture Content = (Moisture Content x BD) / 100',
      keyConcept: 'The ability of soil to retain moisture is crucial for crop growth.',
      commonMistakes: ['Adding instead of dividing', 'Misinterpreting the bulk density', 'Confusing percentage with decimal'],
      extraneousGivens: ['Soil texture = clayey', 'Sample weight = 100 kg', 'Field capacity = 45%'],
    }
  },
  {
    id: 'llm-b-0833', area: 'B', subTopic: 'soil-science',
    topic: 'Soil pH and Nutrient Availability', type: 'theory', difficulty: 'hard',
    question: 'What is the ideal soil pH range for most crops to maximize nutrient availability?',
    options: ['4.5 to 5.5', '5.5 to 7.0', '6.0 to 7.5', '6.5 to 8.0'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0834', area: 'B', subTopic: 'soil-science',
    topic: 'Organic Matter Calculation', type: 'computation', difficulty: 'hard',
    question: 'A soil sample contains 4% organic matter. If the total soil mass is 1500 g, what is the mass of organic matter present? (Include unnecessary values in the statement.)',
    options: ['60 g', '80 g', '75 g', '100 g'],
    correctAnswer: 0,
    solution: {
      given: 'Organic matter % = 4%, Total soil mass = 1500 g',
      steps: ['Calculate mass of organic matter = (Organic matter % x Total soil mass) = 4% x 1500 g = 60 g'],
      formula: 'Organic Matter Mass = (%OM / 100) x Total Soil Mass',
      keyConcept: 'Organic matter content is crucial for soil health and fertility.',
      commonMistakes: ['Forgetting to convert percentage to decimal', 'Adding instead of multiplying', 'Missing the mass unit conversion'],
      extraneousGivens: ['Soil texture = sandy', 'Sample was from corn field', 'Soil moisture = 15%'],
    }
  },
  {
    id: 'llm-b-0835', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What is the primary difference between residual soil and transported soil?',
    options: ['Residual soil is formed in place, while transported soil is moved from its parent material.', 'Transported soil is formed in place, while residual soil is moved from its parent material.', 'Residual soil has a higher organic matter content than transported soil.', 'Transported soil typically has a greater nutrient content than residual soil.'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0836', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which of the following nutrients is considered a macronutrient essential for plant growth?',
    options: ['Copper', 'Nitrogen', 'Zinc', 'Manganese'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0837', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What does soil pH primarily indicate?',
    options: ['The amount of organic material in the soil.', 'The moisture content of the soil.', 'The acidity or alkalinity of the soil.', 'The mineral composition of the soil.'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0838', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which process is NOT involved in soil formation?',
    options: ['Weathering of rocks', 'Decomposition of organic matter', 'Sedimentation of sand and clay', 'Reduction of atmospheric carbon dioxide'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0839', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What is the primary role of soil biota in the soil ecosystem?',
    options: ['To absorb nutrients from the soil.', 'To produce soil minerals.', 'To aid in decomposition and nutrient cycling.', 'To increase soil moisture retention.'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0840', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which of the following is an effect of tilling on soil structure?',
    options: ['Increases organic matter content', 'Improves soil porosity', 'Reduces soil compaction', 'Increases erosion risk'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0841', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'If a soil sample has a fresh weight of 50 grams and an oven-dry weight of 30 grams, what is the gravimetric moisture content? The density of water is 1 g/cm³ and the atmospheric pressure is 101.3 kPa.',
    options: ['66.67%', '100%', '25%', '50%'],
    correctAnswer: 0,
    solution: {
      given: 'FW = 50 g, ODW = 30 g, Density of water = 1 g/cm³, Atmospheric pressure = 101.3 kPa.',
      steps: ['Mw = FW - ODW = 50 g - 30 g = 20 g.', 'Gravimetric moisture content (Om) = (Mw / ODW) * 100 = (20 g / 30 g) * 100 = 66.67%.'],
      formula: 'Om = (Mw / ODW) * 100',
      keyConcept: 'Gravimetric moisture content is the mass of water present in the soil divided by the mass of dry soil.',
      commonMistakes: ['Confusing fresh weight with dry weight.', 'Forgetting to multiply by 100 to convert to percentage.', 'Using incorrect values from the problem.'],
      extraneousGivens: ['Density of water: 1 g/cm³', 'Atmospheric pressure: 101.3 kPa'],
    }
  },
  {
    id: 'llm-b-0842', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'A farmer is applying 50 kg/ha of fertilizer with a nitrogen content of 20%. How much nitrogen is being applied per hectare? The local rainfall is 1200 mm and the humidity is 85%.',
    options: ['10 kg N/ha', '15 kg N/ha', '5 kg N/ha', '20 kg N/ha'],
    correctAnswer: 0,
    solution: {
      given: 'Fertilizer applied = 50 kg/ha, Nitrogen content = 20%, Local rainfall = 1200 mm, Humidity = 85%.',
      steps: ['Amount of nitrogen = Fertilizer applied * (Nitrogen content / 100) = 50 kg/ha * (20 / 100) = 10 kg/ha.'],
      formula: 'Amount of nitrogen = Fertilizer applied * (Nitrogen content / 100)',
      keyConcept: 'Calculating the amount of nutrient applied based on the fertilizer\'s nutrient concentration.',
      commonMistakes: ['Forgetting to convert percentage to a decimal.', 'Using rainfall data in calculations unnecessarily.', 'Incorrectly multiplying instead of dividing.'],
      extraneousGivens: ['Local rainfall: 1200 mm', 'Humidity: 85%'],
    }
  },
  {
    id: 'llm-b-0843', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'If a soil sample with a bulk density of 1.4 g/cm³ is analyzed and shows moisture content of 30%, what is the volumetric moisture content? The average air temperature is 28°C and relative humidity is 70%.',
    options: ['0.42 m³/m³', '0.52 m³/m³', '0.56 m³/m³', '0.38 m³/m³'],
    correctAnswer: 0,
    solution: {
      given: 'Bulk density = 1.4 g/cm³, Moisture content (Om) = 30%, Average air temperature = 28°C, Relative humidity = 70%.',
      steps: ['Volumetric moisture content (Ov) = Om * Bulk density = (30 / 100) * (1.4 g/cm³) = 0.42 m³/m³.'],
      formula: 'Ov = Om * Bulk density',
      keyConcept: 'Volumetric moisture content is the mass of water in a given volume of soil.',
      commonMistakes: ['Confusing bulk density units with moisture content.', 'Using temperature or humidity in the calculation.', 'Misunderstanding the relationship between gravimetric and volumetric moisture.'],
      extraneousGivens: ['Average air temperature: 28°C', 'Relative humidity: 70%'],
    }
  },
  {
    id: 'llm-b-0844', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which of the following is NOT a function of organic matter in soil?',
    options: ['Enhancing soil structure', 'Increasing cation exchange capacity', 'Decreasing water holding capacity', 'Providing nutrients for soil microorganisms'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0845', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What is the primary role of liming in soil management?',
    options: ['To increase soil organic matter', 'To correct soil acidity', 'To improve soil drainage', 'To enhance nutrient availability'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0846', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'Calculate the amount of potassium (K2O) needed per hectare if the recommended rate is 50 kg/ha and the fertilizer applied contains 15% K2O. The field size is 2 hectares and the average temperature is 32°C.',
    options: ['166.67 kg K2O', '150 kg K2O', '200 kg K2O', '180 kg K2O'],
    correctAnswer: 0,
    solution: {
      given: 'Recommended rate = 50 kg/ha, K2O content in fertilizer = 15%, Field size = 2 hectares, Average temperature = 32°C.',
      steps: ['Total K2O needed = Recommended rate * Field size = 50 kg/ha * 2 ha = 100 kg.', 'Amount of fertilizer needed = Total K2O / (K2O content / 100) = 100 kg / (15 / 100) = 666.67 kg.', 'Amount of K2O = 666.67 kg * 0.15 = 100 kg.'],
      formula: 'Total K2O = Recommended rate * Field size; Amount of fertilizer = Total K2O / (K2O content / 100)',
      keyConcept: 'Understanding nutrient recommendations and how to compute the quantity based on fertilizer concentration.',
      commonMistakes: ['Forgetting to multiply by field size.', 'Confusing the percentage content with the total amount needed.', 'Using incorrect fertilizer content.'],
      extraneousGivens: ['Average temperature: 32°C'],
    }
  },
  {
    id: 'llm-b-0847', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which soil management practice helps to reduce moisture evaporation from the soil surface?',
    options: ['Tillage', 'Mulching', 'Fertilization', 'Irrigation'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0848', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What is the primary goal of soil conservation practices?',
    options: ['To increase soil salinity', 'To prevent soil erosion and degradation', 'To maximize crop yield', 'To enhance soil acidity'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0849', area: 'B', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'A farmer wants to apply 30 kg of phosphorus (P2O5) per hectare to his 5-hectare corn field using a fertilizer with 12% P2O5 content. How much fertilizer should he apply? The average soil temperature is 24°C.',
    options: ['125 kg', '150 kg', '180 kg', '200 kg'],
    correctAnswer: 0,
    solution: {
      given: 'P2O5 required = 30 kg/ha, Field size = 5 ha, P2O5 content = 12%, Average soil temperature = 24°C.',
      steps: ['Total P2O5 needed = P2O5 required * Field size = 30 kg/ha * 5 ha = 150 kg.', 'Amount of fertilizer = Total P2O5 / (P2O5 content / 100) = 150 kg / (12 / 100) = 1250 kg.'],
      formula: 'Amount of fertilizer = Total P2O5 / (P2O5 content / 100)',
      keyConcept: 'Calculating the total amount of fertilizer needed based on nutrient requirements and fertilizer concentration.',
      commonMistakes: ['Using the wrong multiplication factors for area.', 'Not converting percentage to a usable fraction.', 'Including unnecessary values in the calculation.'],
      extraneousGivens: ['Average soil temperature: 24°C'],
    }
  },
  {
    id: 'llm-b-0850', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What is the impact of excessive tillage on soil health?',
    options: ['Enhances soil structure and fertility', 'Decreases soil organic matter', 'Increases soil water retention', 'Promotes beneficial soil microorganisms'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0851', area: 'B', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which of the following statements about soil organic matter is true?',
    options: ['It is composed only of decaying plant material.', 'It enhances the cation exchange capacity of soil.', 'It has no impact on soil moisture retention.', 'It decreases nutrient availability to plants.'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0852', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Formation', type: 'theory', difficulty: 'easy',
    question: 'Which of the following factors is NOT involved in soil formation?',
    options: ['Climate', 'Biota', 'Topography', 'Fertilizer Type'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0853', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Properties', type: 'theory', difficulty: 'average',
    question: 'What is the primary function of soil organic matter in agriculture?',
    options: ['Stabilizing soil structure', 'Providing texture', 'Enhancing color', 'Increasing bulk density'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0854', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Chemistry', type: 'theory', difficulty: 'hard',
    question: 'What is Cation Exchange Capacity (CEC) a measure of?',
    options: ['Soil acidity', 'Soil fertility', 'Nutrient availability', 'Soil texture'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0855', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Fertility', type: 'theory', difficulty: 'average',
    question: 'Which nutrient is considered a primary macronutrient essential for plant growth?',
    options: ['Iron', 'Copper', 'Potassium', 'Zinc'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0856', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Moisture', type: 'theory', difficulty: 'easy',
    question: 'Which type of soil water is most available for plant uptake?',
    options: ['Gravitational water', 'Hygroscopic water', 'Capillary water', 'Field capacity water'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0857', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Fertility', type: 'computation', difficulty: 'hard',
    question: 'If you need to apply 30 kg/ha of Nitrogen (N) and your fertilizer contains 10% N, how much fertilizer should you apply per hectare? Assume you have an irrelevant soil moisture content of 25%.',
    options: ['300 kg/ha', '3000 kg/ha', '3000 g/ha', '300 kg/ha'],
    correctAnswer: 0,
    solution: {
      given: 'Recommended N = 30 kg/ha, Fertilizer N = 10%, irrelevant soil moisture = 25%',
      steps: ['Calculate amount of fertilizer needed: Amount of fertilizer = (Recommended N / Fertilizer N) * 100', 'Amount of fertilizer = (30 / 10) * 100 = 300 kg/ha'],
      formula: 'Amount of fertilizer (kg/ha) = (Recommended Nutrient kg/ha) / (% Nutrient in Fertilizer) * 100',
      keyConcept: 'Understanding fertilizer application rates is crucial for optimizing plant growth.',
      commonMistakes: ['Multiplying instead of dividing', 'Ignoring the percentage', 'Confusing units (kg vs g)'],
      extraneousGivens: ['Soil moisture content: 25%'],
    }
  },
  {
    id: 'llm-b-0858', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Moisture', type: 'computation', difficulty: 'hard',
    question: 'You have a soil sample with a fresh weight of 50 grams and an oven-dry weight of 30 grams. Calculate the gravimetric moisture content (Om). Also, assume the bulk density is 1.3 g/cm³, and the soil contains 15% clay, which is not necessary for this calculation.',
    options: ['66.67%', '50%', '33.33%', '100%'],
    correctAnswer: 0,
    solution: {
      given: 'Fresh weight = 50 g, Oven dry weight = 30 g, Bulk density = 1.3 g/cm³, Clay content = 15%',
      steps: ['Calculate Om: Om = (Fresh weight - Oven dry weight) / Oven dry weight * 100', 'Om = (50 g - 30 g) / 30 g * 100 = 66.67%'],
      formula: 'Om (%) = [(Fresh Weight - Oven Dry Weight) / Oven Dry Weight] * 100',
      keyConcept: 'Gravimetric moisture content indicates the amount of water present in a soil sample.',
      commonMistakes: ['Forgetting to multiply by 100', 'Using wrong weights', 'Confusing fresh and dry weights'],
      extraneousGivens: ['Bulk density: 1.3 g/cm³', 'Clay content: 15%'],
    }
  },
  {
    id: 'llm-b-0859', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Chemistry', type: 'theory', difficulty: 'average',
    question: 'Which of the following has the highest Cation Exchange Capacity (CEC)?',
    options: ['Sand', 'Silt', 'Clay', 'Gravel'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0860', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Management', type: 'computation', difficulty: 'hard',
    question: 'If you want to achieve a base saturation of 60% in a soil with a CEC of 40 meq/100g, how many meq of basic cations do you need to add? Assume that the amount of organic matter is 5% which is irrelevant for this calculation.',
    options: ['24 meq', '15 meq', '30 meq', '18 meq'],
    correctAnswer: 0,
    solution: {
      given: 'Desired base saturation = 60%, CEC = 40 meq/100g, Organic matter = 5%',
      steps: ['Calculate required basic cations: Required cations = CEC * (Desired base saturation / 100)', 'Required cations = 40 meq/100g * (60 / 100) = 24 meq'],
      formula: 'Required basic cations (meq) = CEC * (% Base Saturation / 100)',
      keyConcept: 'Base saturation is essential for understanding soil fertility and nutrient availability.',
      commonMistakes: ['Confusing base saturation with total CEC', 'Incorrect percentage conversion', 'Forgetting to multiply by CEC'],
      extraneousGivens: ['Organic matter: 5%'],
    }
  },
  {
    id: 'llm-b-0861', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Structure', type: 'theory', difficulty: 'easy',
    question: 'What is the term for the arrangement of soil particles into aggregates?',
    options: ['Soil texture', 'Soil structure', 'Soil profile', 'Soil horizon'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0862', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Types', type: 'theory', difficulty: 'average',
    question: 'Which of the following is NOT a type of transported soil?',
    options: ['Alluvial soil', 'Glacial soil', 'Residual soil', 'Loess soil'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0863', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Chemistry', type: 'computation', difficulty: 'hard',
    question: 'If a soil sample has a CEC of 25 meq/100g and contains 10 meq of calcium (Ca²⁺), how much is its percent base saturation if it also has an irrelevant 5 meq of magnesium (Mg²⁺)?',
    options: ['60%', '70%', '75%', '80%'],
    correctAnswer: 1,
    solution: {
      given: 'CEC = 25 meq/100g, Ca²⁺ = 10 meq, Mg²⁺ = 5 meq, irrelevant cations = 5 meq',
      steps: ['Calculate total basic cations: Total = Ca²⁺ + Mg²⁺ = 10 + 5 = 15 meq', 'Calculate percent base saturation: %BS = (Total Basic Cations / CEC) * 100 = (15 / 25) * 100 = 60%'],
      formula: '%BS = (Total Basic Cations / CEC) * 100',
      keyConcept: 'Percent base saturation indicates the proportion of cation exchange sites occupied by bases.',
      commonMistakes: ['Forgetting to multiply by 100', 'Not including all relevant cations', 'Confusing CEC with total cations'],
      extraneousGivens: ['Irrelevant cations: 5 meq'],
    }
  },
  {
    id: 'llm-b-0864', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Formation', type: 'theory', difficulty: 'easy',
    question: 'What term describes the soil layer where organic matter accumulates?',
    options: ['A horizon', 'B horizon', 'C horizon', 'R horizon'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0865', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Types', type: 'computation', difficulty: 'hard',
    question: 'Calculate the amount of potassium (K) needed if you want to apply 15 kg/ha of K and your fertilizer contains 12% K. Also consider the irrelevant fact that your plot has 2000 m². ',
    options: ['125 kg', '15 kg', '1250 kg', '250 kg'],
    correctAnswer: 0,
    solution: {
      given: 'Target K = 15 kg/ha, Fertilizer K = 12%, Area = 2000 m²',
      steps: ['Calculate the amount of fertilizer needed: Amount of fertilizer = (Target K / Fertilizer K) * 100', 'Amount of fertilizer = (15 / 12) * 100 = 125 kg'],
      formula: 'Amount of fertilizer (kg) = (Target Nutrient kg/ha) / (% Nutrient in Fertilizer) * 100',
      keyConcept: 'Understanding application rates helps in optimizing nutrient use while reducing wastage.',
      commonMistakes: ['Ignoring the percentage of nutrient', 'Calculating for area instead of per hectare', 'Confusing K with N'],
      extraneousGivens: ['Plot area: 2000 m²'],
    }
  },
  {
    id: 'llm-b-0866', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Management', type: 'theory', difficulty: 'average',
    question: 'What is the best practice to improve soil structure?',
    options: ['Overtillage', 'Reduced tillage', 'Increased compaction', 'Chemical application'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0867', area: 'B', subTopic: 'soil-science',
    topic: 'Soil Chemistry', type: 'computation', difficulty: 'hard',
    question: 'In a soil sample with a CEC of 30 meq/100g, if 12 meq of Ca²⁺ and 4 meq of Mg²⁺ are present, what is the percent base saturation? Assume an irrelevant presence of 8 meq of Na⁺.',
    options: ['53.33%', '40.00%', '62.50%', '66.67%'],
    correctAnswer: 2,
    solution: {
      given: 'CEC = 30 meq/100g, Ca²⁺ = 12 meq, Mg²⁺ = 4 meq, irrelevant Na⁺ = 8 meq',
      steps: ['Calculate total basic cations: Total = Ca²⁺ + Mg²⁺ = 12 + 4 = 16 meq', 'Calculate percent base saturation: %BS = (Total Basic Cations / CEC) * 100 = (16 / 30) * 100 = 53.33%'],
      formula: '%BS = (Total Basic Cations / CEC) * 100',
      keyConcept: 'Base saturation is important for understanding nutrient availability of the soil.',
      commonMistakes: ['Not including all relevant cations', 'Calculating with wrong CEC', 'Confusing base saturation with nutrient deficiency'],
      extraneousGivens: ['Irrelevant Na⁺ = 8 meq'],
    }
  },
  {
    id: 'llm-b-0868', area: 'B', subTopic: 'Engineering Mechanics',
    topic: 'Statical Equilibrium', type: 'theory', difficulty: 'easy',
    question: 'Which of the following best describes the concept of equilibrium in mechanics?',
    options: ['A state where a body remains at rest or moves at constant velocity.', 'A state where all forces acting on a body are zero.', 'A condition where the net external moment on a body is zero.', 'All of the above.'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0869', area: 'B', subTopic: 'Engineering Mechanics',
    topic: 'Forces and Moments', type: 'theory', difficulty: 'average',
    question: 'In a concurrent force system, which of the following is true?',
    options: ['Forces do not meet at a single point.', 'The resultant force acts in the same direction as the individual forces.', 'The sum of moments about any point is zero.', 'All forces meet at a single point.'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0870', area: 'B', subTopic: 'Engineering Mechanics',
    topic: 'Force Systems', type: 'computation', difficulty: 'average',
    question: 'A force of 500 N is applied at a 30° angle to the horizontal. What is the vertical component of this force? (Assume g = 9.81 m/s² for context, but is not needed in the calculation.)',
    options: ['250 N', '500 N', '433 N', '350 N'],
    correctAnswer: 2,
    solution: {
      given: 'F = 500 N, angle = 30°',
      steps: ['Calculate vertical component: F_y = F * sin(30°) = 500 * 0.5 = 250 N.'],
      formula: 'F_y = F * sin(θ)',
      keyConcept: 'Vertical component can be determined using trigonometric functions based on the angle.',
      
      
    }
  },
  {
    id: 'llm-b-0871', area: 'B', subTopic: 'Engineering Mechanics',
    topic: 'Moments', type: 'computation', difficulty: 'hard',
    question: 'A force of 200 N is applied perpendicularly to a 3 m long beam. Calculate the moment about one end of the beam. (The temperature of the environment is 25°C, which is irrelevant for this calculation.)',
    options: ['400 Nm', '200 Nm', '600 Nm', '300 Nm'],
    correctAnswer: 0,
    solution: {
      given: 'F = 200 N, d = 3 m',
      steps: ['Calculate moment: M = F * d = 200 N * 3 m = 600 Nm.'],
      formula: 'M = F * d',
      keyConcept: 'The moment is the product of force and the perpendicular distance from the pivot point.',
      commonMistakes: ['Forgetting to use the correct distance.', 'Confusing moment with force.'],
      extraneousGivens: ['Temperature: 25°C'],
    }
  },
  {
    id: 'llm-b-0872', area: 'B', subTopic: 'Engineering Mechanics',
    topic: 'Trusses', type: 'theory', difficulty: 'average',
    question: 'In truss analysis, when two non-collinear forces act at a joint, what condition must be satisfied for equilibrium?',
    options: ['The sum of the forces must be zero.', 'The moment about the joint must be zero.', 'Both A and B.', 'The two forces must be equal in magnitude.'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0873', area: 'B', subTopic: 'Fluid Mechanics',
    topic: 'Density and Specific Weight', type: 'computation', difficulty: 'easy',
    question: '25 lbs of air is occupying a conical container having a height of 4 inches and a diameter of 2.5 inches. What is the density of said air? (Use relevant values only.)',
    options: ['5056.6 lb/ft³', '5065.5 lb/ft³', '6505.5 lb/ft³', '6605.5 lb/ft³'],
    correctAnswer: 1,
    solution: {
      given: 'Weight = 25 lbs, h = 4 in, D = 2.5 in',
      steps: ['Calculate volume of the cone: V = (1/3)πr²h. First convert height and diameter to feet.', 'The diameter D is 2.5 in. Thus radius r = D/2 = 1.25 in = 1.25/12 ft.', 'V = (1/3)π(1.25/12)²(4/12) = 0.000799 ft³.', 'Calculate density: ρ = Weight/Volume = 25 lbs / 0.000799 ft³ = 31253.1 lb/ft³.'],
      formula: 'ρ = W/V',
      keyConcept: 'Density is defined as weight per unit volume.',
      commonMistakes: ['Failing to convert units correctly.'],
      extraneousGivens: ['Dimensions provided in inches, which are unnecessary for density calculation.'],
    }
  },
  {
    id: 'llm-b-0874', area: 'B', subTopic: 'Fluid Mechanics',
    topic: 'Hydrostatics', type: 'theory', difficulty: 'average',
    question: 'Water exerts pressure due to its weight. How does this pressure change with depth?',
    options: ['It increases linearly with depth.', 'It is constant at all depths.', 'It decreases with depth.', 'It increases exponentially with depth.'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0875', area: 'B', subTopic: 'Fluid Mechanics',
    topic: 'Compressibility', type: 'computation', difficulty: 'hard',
    question: 'A fluid experiences 2.5% volume reduction after receiving a pressure of 12,643 psi. What is the compressibility of the fluid? (Assume standard units.)',
    options: ['1.56x10⁻⁶ in²/lb', '1.98x10⁻⁶ in²/lb', '2.42x10⁻⁶ in²/lb', '2.96x10⁻⁶ in²/lb'],
    correctAnswer: 1,
    solution: {
      given: 'ΔV = 2.5%, ΔP = 12,643 psi',
      steps: ['Convert ΔV to fractional: ΔV = 0.025.', 'Compressibility β = ΔV / ΔP = 0.025 / 12643 = 1.98x10⁻⁶ in²/lb.'],
      formula: 'β = ΔV / ΔP',
      keyConcept: 'Compressibility measures how much volume changes per unit pressure.',
      commonMistakes: ['Confusing pressure units.'],
      extraneousGivens: ['Standard temperature and pressure.'],
    }
  },
  {
    id: 'llm-b-0876', area: 'B', subTopic: 'Fluid Mechanics',
    topic: 'Surface Tension', type: 'computation', difficulty: 'average',
    question: 'A thin horizontal wire is placed on top of a flat water surface at 20°C. The surface tension of water at this temperature is 0.0728 N/m. What is the length of the wire if the minimum upward force required to lift the wire off the water surface is 0.01092 N?',
    options: ['10 cm', '12 cm', '14 cm', '15 cm'],
    correctAnswer: 2,
    solution: {
      given: 'σ = 0.0728 N/m, F = 0.01092 N',
      steps: ['Using the formula for surface tension: σ = F/L => L = F/σ.', 'L = 0.01092 N / 0.0728 N/m = 0.150 m = 15 cm.'],
      formula: 'σ = F/L',
      keyConcept: 'Surface tension is the force per unit length acting along the surface of a liquid.',
      commonMistakes: ['Not converting units correctly.'],
      extraneousGivens: ['Temperature of environment, which is not needed for wire length calculation.'],
    }
  },
  {
    id: 'llm-b-0877', area: 'B', subTopic: 'Fluid Mechanics',
    topic: 'Buoyancy', type: 'theory', difficulty: 'average',
    question: 'What principle states that a body submerged in a fluid experiences an upward force equal to the weight of the fluid displaced?',
    options: ['Archimedes\' Principle', 'Pascal\'s Law', 'Bernoulli\'s Principle', 'Hydrostatic Paradox'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0878', area: 'B', subTopic: 'Fluid Mechanics',
    topic: 'Specific Gravity', type: 'computation', difficulty: 'easy',
    question: 'The volume of a rock is found to be 0.00015 m³. If the rock\'s specific gravity is 2.60, what is its weight?',
    options: ['3.82 N', '3.79 N', '2.99 N', '2.78 N'],
    correctAnswer: 0,
    solution: {
      given: 'Volume = 0.00015 m³, SG = 2.60, γ_water = 9.81 kN/m³',
      steps: ['Calculate density of rock: ρ = SG * ρ_water = 2.60 * 1000 kg/m³ = 2600 kg/m³.', 'The weight of the rock: Weight = ρ * volume * g = 2600 kg/m³ * 0.00015 m³ * 9.81 m/s² = 3.82 N.'],
      formula: 'Weight = ρ * V * g',
      keyConcept: 'Weight can be calculated using the density derived from specific gravity.',
      commonMistakes: ['Forgetting to convert units, or mix up kg with N.'],
      extraneousGivens: ['Extraction of gravitational acceleration, which is common but not strictly needed.'],
    }
  },
  {
    id: 'llm-b-0879', area: 'B', subTopic: 'Fluid Mechanics',
    topic: 'Hydrostatic Pressure', type: 'theory', difficulty: 'hard',
    question: 'Hydrostatic pressure in a liquid column depends on which of the following?',
    options: ['Density of the fluid and height of the liquid column.', 'Depth of the liquid only.', 'Density of the fluid only.', 'Temperature of the liquid.'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0880', area: 'B', subTopic: 'Fluid Mechanics',
    topic: 'Fluid Dynamics', type: 'theory', difficulty: 'average',
    question: 'Which equation relates the velocity of a fluid through a pipe to the cross-sectional area?',
    options: ['Bernoulli\'s Equation', 'Continuity Equation', 'Pascal\'s Law', 'Hydrostatic Pressure Equation'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0881', area: 'B', subTopic: 'Fluid Mechanics',
    topic: 'Viscosity', type: 'computation', difficulty: 'average',
    question: 'A cylinder contains 5 kg of liquid with a viscosity of 0.85 Pa·s. If the liquid flows through a cross-sectional area of 0.02 m², what is the shear stress? (Use g = 9.81 m/s² as reference).',
    options: ['20.3 Pa', '35.0 Pa', '15.5 Pa', '25.3 Pa'],
    correctAnswer: 0,
    solution: {
      given: 'mass = 5 kg, viscosity = 0.85 Pa·s, area = 0.02 m²',
      steps: ['Calculate weight: W = mg = 5 kg * 9.81 m/s² = 49.05 N.', 'Use shear stress formula: τ = F / A = 49.05 N / 0.02 m² = 2452.5 Pa.'],
      formula: 'τ = F / A',
      keyConcept: 'Shear stress is the force applied per area subjected to shear.',
      commonMistakes: ['Mixing up units or neglecting area.'],
      extraneousGivens: ['Gravitational acceleration, while relevant, does not directly impact shear stress.'],
    }
  },
  {
    id: 'llm-b-0882', area: 'B', subTopic: 'mechanics',
    topic: 'Fundamentals of Mechanics', type: 'theory', difficulty: 'easy',
    question: 'Which of the following best describes mechanics?',
    options: ['Science of motion without regard to its causes', 'Study of forces and their effects on matter', 'Study of fluids at rest and in motion', 'Branch of thermodynamics related to work'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'Mechanics is the branch of physical science that studies forces, motion, and equilibrium.',
      commonMistakes: ['Confusing mechanics with thermodynamics', 'Mixing up branches of mechanics'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-b-0883', area: 'B', subTopic: 'mechanics',
    topic: 'Statics', type: 'theory', difficulty: 'easy',
    question: 'The branch of mechanics that deals with bodies at rest under the action of forces is:',
    options: ['Dynamics', 'Statics', 'Kinematics', 'Thermodynamics'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'Statics focuses on equilibrium and forces on stationary bodies.',
      commonMistakes: ['Confusing statics with dynamics', 'Overlooking definitions of other mechanics branches'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-b-0884', area: 'B', subTopic: 'mechanics',
    topic: 'Equilibrium Conditions', type: 'theory', difficulty: 'average',
    question: 'Which condition ensures that a body remains in equilibrium?',
    options: ['Net force is zero', 'Net torque is zero', 'Both net force and net torque are zero', 'None of the above'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: 'A body is in equilibrium when both the net force and the net moment acting on it are zero.',
      commonMistakes: ['Omitting the requirement for torque', 'Assuming only forces need to be zero'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-b-0885', area: 'B', subTopic: 'mechanics',
    topic: 'Force Systems', type: 'theory', difficulty: 'average',
    question: 'Which of the following is NOT a characteristic of a vector?',
    options: ['Magnitude', 'Direction', 'Point of application', 'Temperature'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: 'Temperature is a scalar quantity and does not depend on direction.',
      commonMistakes: ['Confusing temperature with velocity or force', 'Wrongly identifying scalar attributes'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-b-0886', area: 'B', subTopic: 'mechanics',
    topic: 'Force and Motion', type: 'theory', difficulty: 'easy',
    question: 'When the net force on a particle is zero, the particle is:',
    options: ['At rest only', 'In uniform motion or at rest', 'Accelerating', 'Rotating'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'According to Newton\'s First Law, a particle at zero net force remains in its state of rest or uniform motion.',
      commonMistakes: ['Assuming net force indicates acceleration', 'Overlooking the law of inertia'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-b-0887', area: 'B', subTopic: 'mechanics',
    topic: 'Force Calculation', type: 'computation', difficulty: 'average',
    question: 'If a force of 15 N acts at an angle of 30° to the horizontal, what is the horizontal component of the force? (Assume no other forces are acting.)',
    options: ['7.5 N', '12.99 N', '15 N', '13.0 N'],
    correctAnswer: 1,
    solution: {
      given: 'F = 15 N, θ = 30°',
      steps: ['Calculate the horizontal component: Fx = F * cos(θ) = 15 * cos(30°) = 12.99 N'],
      formula: 'Fx = F * cos(θ)',
      keyConcept: 'The horizontal component is found using the cosine of the angle of applied force.',
      commonMistakes: ['Using sine instead of cosine', 'Incorrectly interpreting angle directions'],
      extraneousGivens: ['The angle of the force', 'The force\'s magnitude'],
    }
  },
  {
    id: 'llm-b-0888', area: 'B', subTopic: 'mechanics',
    topic: 'Moment of Force', type: 'computation', difficulty: 'average',
    question: 'A 50 N force is applied perpendicular to a lever arm 2 m long. What is the moment about the pivot point?',
    options: ['100 N·m', '50 N·m', '25 N·m', '75 N·m'],
    correctAnswer: 0,
    solution: {
      given: 'F = 50 N, d = 2 m',
      steps: ['Calculate the moment: M = F * d = 50 N * 2 m = 100 N·m'],
      formula: 'M = F * d',
      keyConcept: 'Moment is calculated as the product of force and distance from the pivot.',
      commonMistakes: ['Forgetting to consider the distance', 'Using incorrect units'],
      extraneousGivens: ['The force\'s direction', 'The length of the lever arm'],
    }
  },
  {
    id: 'llm-b-0889', area: 'B', subTopic: 'mechanics',
    topic: 'Center of Gravity', type: 'theory', difficulty: 'easy',
    question: 'What is the center of gravity?',
    options: ['The geometric center of an object', 'The point where total weight acts', 'Point at which mass is concentrated', 'All of the above'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: 'The center of gravity is a point representing the weight and the mass distribution of an object.',
      commonMistakes: ['Confusing with centroid', 'Omitting gravitational influence'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-b-0890', area: 'B', subTopic: 'mechanics',
    topic: 'Density Calculation', type: 'computation', difficulty: 'average',
    question: 'A solid weighs 80 N and has a volume of 0.1 m³. What is its density? (Assume g = 9.81 m/s²)',
    options: ['800 kg/m³', '720 kg/m³', '900 kg/m³', '1000 kg/m³'],
    correctAnswer: 0,
    solution: {
      given: 'W = 80 N, V = 0.1 m³, g = 9.81 m/s²',
      steps: ['Calculate mass: m = W/g = 80 N / 9.81 m/s² = 8.16 kg', 'Calculate density: ρ = m/V = 8.16 kg / 0.1 m³ = 816 kg/m³'],
      formula: 'ρ = m/V',
      keyConcept: 'Density is calculated by mass divided by volume.',
      commonMistakes: ['Forgetting to convert weight to mass', 'Using incorrect volume units'],
      extraneousGivens: ['Weight of the object', 'Gravitational acceleration'],
    }
  },
  {
    id: 'llm-b-0891', area: 'B', subTopic: 'mechanics',
    topic: 'Compressibility', type: 'computation', difficulty: 'hard',
    question: 'If a liquid experiences a volume reduction of 5% under a pressure increase of 10,000 psi, what is the compressibility of the liquid?',
    options: ['1.33x10^-6 psi^-1', '2.0x10^-6 psi^-1', '2.5x10^-6 psi^-1', '3.0x10^-6 psi^-1'],
    correctAnswer: 2,
    solution: {
      given: 'ΔV = 5%, ΔP = 10,000 psi',
      steps: ['Convert percentages to decimal: 0.05', 'Calculate compressibility: β = ΔV / ΔP = 0.05 / 10,000 = 5.0x10^-6 psi^-1'],
      formula: 'β = ΔV/ΔP',
      keyConcept: 'Compressibility measures how much volume changes under pressure.',
      commonMistakes: ['Incorrectly calculating percentage', 'Overlooking dimensional consistency'],
      extraneousGivens: ['Magnitude of volume change', 'Pressure change'],
    }
  },
  {
    id: 'llm-b-0892', area: 'B', subTopic: 'mechanics',
    topic: 'Specific Gravity', type: 'computation', difficulty: 'average',
    question: 'If a rock has a specific gravity of 2.6, what is its weight in newtons if its volume is 0.00015 m³? (Use γ_water = 9.81 kN/m³)',
    options: ['3.69 N', '4.07 N', '2.99 N', '5.49 N'],
    correctAnswer: 0,
    solution: {
      given: 'SG = 2.6, V = 0.00015 m³',
      steps: ['Calculate density: ρ_rock = SG * ρ_water = 2.6 * 1000 kg/m³ = 2600 kg/m³', 'Calculate weight: W = ρ * V * g = 2600 * 0.00015 * 9.81 = 3.83 N'],
      formula: 'W = ρ * V * g',
      keyConcept: 'Weight is derived from density, volume, and gravitational acceleration.',
      commonMistakes: ['Not converting units correctly', 'Misunderstanding specific gravity concept'],
      extraneousGivens: ['Volume of the rock', 'Density of water'],
    }
  },
  {
    id: 'llm-b-0893', area: 'B', subTopic: 'mechanics',
    topic: 'Surface Tension', type: 'computation', difficulty: 'hard',
    question: 'A wire resting on the water surface has a length of 0.1 m. If the surface tension of water is 0.0728 N/m, what minimum force is required to lift the wire from the surface?',
    options: ['0.00728 N', '0.0289 N', '0.0728 N', '0.1 N'],
    correctAnswer: 2,
    solution: {
      given: 'L = 0.1 m, σ = 0.0728 N/m',
      steps: ['Calculate minimum force: F = σ * L = 0.0728 N/m * 0.1 m = 0.00728 N'],
      formula: 'F = σ * L',
      keyConcept: 'The force required to lift the wire equals surface tension times the length of the wire.',
      commonMistakes: ['Incorrectly applying surface tension concept', 'Using wrong unit conversions'],
      extraneousGivens: ['Length of the wire', 'Surface tension value'],
    }
  },
  {
    id: 'llm-b-0894', area: 'B', subTopic: 'mechanics',
    topic: 'Basic Concepts', type: 'theory', difficulty: 'easy',
    question: 'What is the primary focus of mechanics?',
    options: ['Study of the motion of particles', 'Study of forces and their effects', 'Study of energy and work', 'Study of fluid behavior only'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'Mechanics deals with forces and their effects on matter, including motion.',
      commonMistakes: [],
      
    }
  },
  {
    id: 'llm-b-0895', area: 'B', subTopic: 'mechanics',
    topic: 'Statical Analysis', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is a condition for static equilibrium?',
    options: ['ΣF_x = m*a_x', 'ΣF_y = 0', 'ΣM = F*d', 'ΣF = 0'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: 'Static equilibrium requires that the sum of forces and the sum of moments be zero.',
      commonMistakes: [],
      
    }
  },
  {
    id: 'llm-b-0896', area: 'B', subTopic: 'mechanics',
    topic: 'Force and Motion', type: 'theory', difficulty: 'easy',
    question: 'Which law states that for every action, there is an equal and opposite reaction?',
    options: ['Newton\'s First Law', 'Newton\'s Second Law', 'Newton\'s Third Law', 'Law of Conservation of Energy'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: 'Newton\'s Third Law describes the nature of forces in pairs.',
      commonMistakes: [],
      
    }
  },
  {
    id: 'llm-b-0897', area: 'B', subTopic: 'mechanics',
    topic: 'Moment of Force', type: 'computation', difficulty: 'average',
    question: 'A force of 50 N is applied at a distance of 2 m from a pivot point. What is the moment about the pivot? (Note: Use g = 9.81 m/s² for irrelevant context)',
    options: ['100 N·m', '50 N·m', '200 N·m', '20 N·m'],
    correctAnswer: 0,
    solution: {
      given: 'Force = 50 N, Distance = 2 m',
      steps: ['Calculate moment: M = F * d = 50 N * 2 m = 100 N·m'],
      formula: 'M = F * d',
      keyConcept: 'Moment is the rotational effect of a force applied at a distance from a pivot.',
      commonMistakes: ['Forgetting to multiply force by distance', 'Misunderstanding units of moment'],
      extraneousGivens: ['g = 9.81 m/s²'],
    }
  },
  {
    id: 'llm-b-0898', area: 'B', subTopic: 'mechanics',
    topic: 'Equilibrium', type: 'computation', difficulty: 'average',
    question: 'A block is held in static equilibrium with a 20 N force acting downward and a supporting force acting upward. What is the magnitude of the supporting force required? (Other details: Width = 5 cm; Height = 10 cm)',
    options: ['20 N', '25 N', '30 N', '10 N'],
    correctAnswer: 0,
    solution: {
      given: 'Downward force = 20 N, Width = 5 cm, Height = 10 cm',
      steps: ['For equilibrium: ΣF = 0 → Supporting force = 20 N'],
      formula: 'ΣF_y = 0',
      keyConcept: 'In equilibrium, the net forces acting on a body must equal zero.',
      commonMistakes: ['Adding unnecessary values', 'Confusing upward with downward force direction'],
      extraneousGivens: ['Width = 5 cm', 'Height = 10 cm'],
    }
  },
  {
    id: 'llm-b-0899', area: 'B', subTopic: 'mechanics',
    topic: 'Force Systems', type: 'theory', difficulty: 'average',
    question: 'What defines a coplanar force system?',
    options: ['Forces acting on different planes', 'Forces not meeting at a single point', 'Forces lying in the same plane', 'Forces acting parallel to each other'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: 'Coplanar forces are all located in one plane, simplifying equilibrium analysis.',
      commonMistakes: [],
      
    }
  },
  {
    id: 'llm-b-0900', area: 'B', subTopic: 'fluid-mechanics',
    topic: 'Fluid Properties', type: 'theory', difficulty: 'easy',
    question: 'What is the primary characteristic of a Newtonian fluid?',
    options: ['Viscosity changes with shear rate', 'Viscosity remains constant', 'Requires yield stress to flow', 'Density varies with pressure'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'Newtonian fluids have a linear relationship between shear stress and shear rate.',
      commonMistakes: [],
      
    }
  },
  {
    id: 'llm-b-0901', area: 'B', subTopic: 'fluid-mechanics',
    topic: 'Surface Tension', type: 'computation', difficulty: 'average',
    question: 'What is the length of a wire if the minimum upward force required to lift it off the water surface is 0.01092 N and the surface tension is 0.0728 N/m? (Note: Assume the wire has infinitesimal thickness)',
    options: ['10 cm', '12 cm', '14 cm', '15 cm'],
    correctAnswer: 1,
    solution: {
      given: 'Force = 0.01092 N, Surface tension = 0.0728 N/m',
      steps: ['Calculate length: σ = F/L → L = F/σ = 0.01092 N / 0.0728 N/m = 0.15075 m = 15 cm'],
      formula: 'L = F/σ',
      keyConcept: 'Surface tension is the force per unit length at a liquid interface.',
      commonMistakes: ['Confusing surface tension with pressure', 'Incorrect unit conversion'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-b-0902', area: 'B', subTopic: 'fluid-mechanics',
    topic: 'Density Calculation', type: 'computation', difficulty: 'average',
    question: '25 lbs of air occupies a conical container with a height of 4 inches and a diameter of 2.5 inches. What is the density of the air? (Note: 1 lb = 0.0624 ft³, g = 9.81 m/s² for irrelevant context)',
    options: ['5056.6 lb/ft³', '5065.5 lb/ft³', '6505.5 lb/ft³', '6605.5 lb/ft³'],
    correctAnswer: 1,
    solution: {
      given: 'Mass = 25 lbs; Height = 4 inches; Diameter = 2.5 inches',
      steps: ['Convert height and diameter to feet: Height = 4/12 ft, Diameter = 2.5/12 ft.', 'Calculate volume of cone: V = (1/3)π(r²)(h).', 'Find density: Density = mass/volume.'],
      formula: 'Density = m/V',
      keyConcept: 'Density is the mass of a substance per unit volume.',
      commonMistakes: ['Not converting units correctly', 'Using incorrect volume formula for a cone'],
      extraneousGivens: ['g = 9.81 m/s²'],
    }
  },
  {
    id: 'llm-b-0903', area: 'B', subTopic: 'fluid-mechanics',
    topic: 'Specific Gravity', type: 'computation', difficulty: 'average',
    question: 'The volume of a rock is 0.00015 m³, and its specific gravity is 2.60. What is its weight? (Use g = 9.81 m/s²; note: irrelevant context = density of water = 1000 kg/m³)',
    options: ['3.82 N', '3.79 N', '2.99 N', '2.78 N'],
    correctAnswer: 0,
    solution: {
      given: 'Volume = 0.00015 m³; Specific Gravity = 2.60; g = 9.81 m/s²',
      steps: ['Weight = Specific Gravity * Volume * g = 2.60 * 0.00015 * 9810 = 3.82 N'],
      formula: 'Weight = SG * Volume * g',
      keyConcept: 'Specific gravity is the ratio of the density of a substance to the density of water.',
      commonMistakes: ['Confusing weight with density', 'Incorrect unit conversions'],
      extraneousGivens: ['Density of water'],
    }
  },
  {
    id: 'llm-b-0904', area: 'B', subTopic: 'fluid-mechanics',
    topic: 'Hydraulics', type: 'computation', difficulty: 'hard',
    question: 'A liquid compressed in a cylinder has a volume of 1000 cm³ at 1 MN/m² and a volume of 995 cm³ at 2 MN/m². What is its bulk modulus of elasticity (K)?',
    options: ['100 MPa', '200 MPa', '300 MPa', '400 MPa'],
    correctAnswer: 1,
    solution: {
      given: 'V1 = 1000 cm³; V2 = 995 cm³; P1 = 1 MN/m²; P2 = 2 MN/m²',
      steps: ['Calculate ∆V = V2 - V1 = 995 - 1000 = -5 cm³.', 'Calculate ∆P = P2 - P1 = 2 - 1 = 1 MN/m².', 'Bulk modulus: K = -∆P / (∆V/V1) = -1 MN/m² / (-5 cm³ / 1000 cm³) = 200 MPa.'],
      formula: 'K = -∆P / (∆V/V1)',
      keyConcept: 'Bulk modulus measures a material\'s resistance to uniform compression.',
      commonMistakes: ['Wrongly calculating pressure differences', 'Not accounting for volume changes correctly'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-b-0905', area: 'B', subTopic: 'fluid-mechanics',
    topic: 'Compressibility', type: 'computation', difficulty: 'hard',
    question: 'A fluid experiences a 2.5% volume reduction after receiving a pressure of 12,643 psi. What is its compressibility?',
    options: ['1.56x10⁻⁶ in²/lb', '1.98x10⁻⁶ in²/lb', '2.42x10⁻⁶ in²/lb', '2.96x10⁻⁶ in²/lb'],
    correctAnswer: 0,
    solution: {
      given: '∆V = 2.5%; ∆P = 12,643 psi',
      steps: ['Compressibility = - (∆V/V) / ∆P; assuming volume originally is V = 1, hence ∆V = 0.025.', 'Compressibility = - (0.025/1)/ 12643 psi = 1.56x10⁻⁶ in²/lb.'],
      formula: 'Compressibility = - (∆V/V) / ∆P',
      keyConcept: 'Compressibility indicates how much volume changes under pressure.',
      commonMistakes: ['Not converting percentages to decimals correctly', 'Misapplying pressure units'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-b-0906', area: 'B', subTopic: 'fluid-mechanics',
    topic: 'Surface Tension Calculation', type: 'computation', difficulty: 'hard',
    question: 'A small droplet of water has a radius of 0.5 mm at 20°C. The surface tension of water is 0.0728 N/m. What is the gauge pressure inside the droplet due to surface tension?',
    options: ['291.2 Pa', '145.6 Pa', '72.8 Pa', '582.4 Pa'],
    correctAnswer: 0,
    solution: {
      given: 'Radius = 0.5 mm = 0.0005 m; σ = 0.0728 N/m',
      steps: ['Gauge pressure, Pg = 4σ/R = 4 * 0.0728 N/m / 0.0005 m = 291.2 Pa.'],
      formula: 'Pg = 4σ/R',
      keyConcept: 'Gauge pressure from surface tension arises within spherical droplets.',
      commonMistakes: ['Misunderstanding the formula', 'Ignoring to convert mm to meters'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-b-0907', area: 'B', subTopic: 'mechanics',
    topic: 'Statics', type: 'theory', difficulty: 'average',
    question: 'The branch of mechanics that deals with bodies at rest under action of forces is:',
    options: ['Dynamics', 'Statics', 'Kinematics', 'Thermodynamics'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0908', area: 'B', subTopic: 'mechanics',
    topic: 'Newton\'s Laws of Motion', type: 'theory', difficulty: 'easy',
    question: 'Which law of Newton forms the foundation of statics?',
    options: ['First Law', 'Second Law', 'Third Law', 'Law of Gravitation'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0909', area: 'B', subTopic: 'mechanics',
    topic: 'Force Systems', type: 'theory', difficulty: 'average',
    question: 'In a concurrent force system, forces:',
    options: ['Act along the same line', 'Lie in different planes', 'Meet at a single point', 'Are parallel but not in one plane'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0910', area: 'B', subTopic: 'mechanics',
    topic: 'Moment of Force', type: 'theory', difficulty: 'average',
    question: 'The moment of a force about a point is defined as:',
    options: ['Force × time', 'Force × perpendicular distance from point to line of action', 'Force ÷ distance', 'Force × displacement'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0911', area: 'B', subTopic: 'mechanics',
    topic: 'Equilibrium', type: 'computation', difficulty: 'hard',
    question: 'A 500 N weight hangs from two ropes inclined at 45°. Find the tension in each rope.',
    options: ['354 N', '250 N', '500 N', '700 N'],
    correctAnswer: 0,
    solution: {
      given: 'Weight = 500 N, Angle = 45°',
      steps: ['Vertical equilibrium: 2Tsin(45°) = 500', 'T = 500 / (2 × 0.707) = 354 N'],
      formula: 'T = W / (2 × sin(θ))',
      keyConcept: 'The vertical components of the tension must balance the weight.',
      commonMistakes: ['Forgetting to use sine for vertical components', 'Assuming only one rope carries the weight'],
      extraneousGivens: ['Inclination angle: 45°'],
    }
  },
  {
    id: 'llm-b-0912', area: 'B', subTopic: 'mechanics',
    topic: 'Strength of Materials', type: 'computation', difficulty: 'average',
    question: 'A simply supported beam has a load of 6 kN downwards at 2 m from the left support. What is the reaction at the left support?',
    options: ['2 kN', '4 kN', '6 kN', '8 kN'],
    correctAnswer: 1,
    solution: {
      given: 'Load = 6 kN, Distance from left = 2 m, Total distance = 6 m',
      steps: ['Assuming total length of beam is 6 m, Reaction at left = R1', 'Sum of moments about right support gives: R1 * 6 m - 6 kN * 2 m = 0', 'R1 = (6 kN * 2 m) / 6 m = 4 kN'],
      formula: 'ΣM = 0, where ΣM = moments about a point',
      keyConcept: 'Equilibrium requires that the moments about any point must sum to zero.',
      commonMistakes: ['Not accounting for the distance from the load to the support', 'Miscalculating distance to the centroid of the load'],
      extraneousGivens: ['Total length of beam: 6 m'],
    }
  },
  {
    id: 'llm-b-0913', area: 'B', subTopic: 'mechanics',
    topic: 'Fluid Mechanics', type: 'theory', difficulty: 'easy',
    question: 'What is the defining characteristics of a fluid?',
    options: ['It expands when force is applied', 'It has low resistance to shear stress', 'It compresses indefinitely', 'It contracts or expands depending on temperature changes'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0914', area: 'B', subTopic: 'mechanics',
    topic: 'Fluid Properties', type: 'theory', difficulty: 'average',
    question: 'What type of fluid assumes shear stress and shear strain relationship?',
    options: ['Dilatant', 'Thixotropic', 'Newtonian', 'Rheopectic'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0915', area: 'B', subTopic: 'mechanics',
    topic: 'Fluid Dynamics', type: 'computation', difficulty: 'hard',
    question: '25 lbs of air occupies a conical container with height 4 inches and diameter 2.5 inches. What is the density of the air?',
    options: ['5056.6 lb/ft³', '5065.5 lb/ft³', '6505.5 lb/ft³', '6605.5 lb/ft³'],
    correctAnswer: 1,
    solution: {
      given: 'Weight = 25 lbs, Height = 4 in, Diameter = 2.5 in',
      steps: ['Calculate the volume of the cone: V = (1/3)πr²h; r = 1.25 in = 0.10417 ft, h = 4 in = 0.3333 ft', 'V = (1/3)π(0.10417)²(0.3333) = 0.0136 ft³', 'Density = Weight / Volume = 25 lbs / 0.0136 ft³ = 1833.82 lb/ft³'],
      formula: 'ρ = m / V',
      keyConcept: 'Density is calculated as weight over volume.',
      commonMistakes: ['Confusing weight and mass', 'Miscalculating volume of the cone'],
      extraneousGivens: ['Height: 4 in', 'Diameter: 2.5 in'],
    }
  },
  {
    id: 'llm-b-0916', area: 'B', subTopic: 'mechanics',
    topic: 'Fluid Statics', type: 'computation', difficulty: 'average',
    question: 'A 25 cm-diameter cylinder is filled with 12 kg of a liquid. If the specific weight of the liquid is 10.5 kN/m³, what will be the height of the liquid in the cylinder?',
    options: ['20.6 cm', '22.8 cm', '26.5 cm', '29.3 cm'],
    correctAnswer: 2,
    solution: {
      given: 'Diameter = 25 cm; Mass = 12 kg; Specific weight = 10.5 kN/m³',
      steps: ['Convert diameter to radius: r = 25 cm / 2 = 12.5 cm = 0.125 m', 'Use specific weight to find volume: V = m / ρ; ρ = specific weight / g = 10.5 kN/m³ / 9.81 m/s²', 'Find height: h = V / (πr²); h = (m / ρ) / π(0.125)²'],
      formula: 'h = V / (πr²)',
      keyConcept: 'Specific weight influences how much height a liquid will occupy in a given volume.',
      commonMistakes: ['Forgetting unit conversions', 'Incorrectly calculating the volume of the liquid'],
      extraneousGivens: ['Specific weight: 10.5 kN/m³'],
    }
  },
  {
    id: 'llm-b-0917', area: 'B', subTopic: 'mechanics',
    topic: 'Fluid Dynamics', type: 'computation', difficulty: 'hard',
    question: 'Water has a bulk modulus of K=2,200 MPa. How much pressure must be applied to reduce its volume by 6%?',
    options: ['112 MPa', '123 MPa', '132 MPa', '114 MPa'],
    correctAnswer: 1,
    solution: {
      given: 'ΔV = 6%, K = 2,200 MPa',
      steps: ['Use K = -ΔP / (ΔV/V) to find ΔP; ΔP = K * (ΔV/V); ΔV/V = 0.06', 'ΔP = 2,200 * 0.06 = 132 MPa'],
      formula: 'ΔP = K * (ΔV/V)',
      keyConcept: 'Applying pressure changes the volume depending on the bulk modulus.',
      commonMistakes: ['Not converting percent to decimal correctly', 'Confusing pressure increase with volume decrease'],
      extraneousGivens: ['Bulk modulus value'],
    }
  },
  {
    id: 'llm-b-0918', area: 'B', subTopic: 'fluid-mechanics',
    topic: 'Fluid Dynamics', type: 'theory', difficulty: 'average',
    question: 'A small droplet of water has a radius of 0.5 mm at 20∘C. What is the gauge pressure inside the droplet due to surface tension?',
    options: ['291.2 Pa', '145.6 Pa', '72.8 Pa', '582.4 Pa'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0919', area: 'B', subTopic: 'fluid-mechanics',
    topic: 'Fluid Properties', type: 'computation', difficulty: 'hard',
    question: 'A thin horizontal wire is placed on top of a flat water surface at 20∘C. The surface tension of water at this temperature is 0.0728 N/m. What is the length of the wire if the minimum upward force required to lift the wire off the water surface is 0.01092 N?',
    options: ['10 cm', '12 cm', '14 cm', '15 cm'],
    correctAnswer: 0,
    solution: {
      given: 'Surface tension = 0.0728 N/m, Force = 0.01092 N',
      steps: ['Using the formula F = σL, find L = F/σ = 0.01092 N / 0.0728 N/m = 0.150 m = 15 cm'],
      formula: 'L = F / σ',
      keyConcept: 'Surface tension acts along the length of the wire, determining how much force it can resist.',
      commonMistakes: ['Incorrect unit conversions', 'Misapplying the formula'],
      extraneousGivens: ['Surface tension value'],
    }
  },
  {
    id: 'llm-b-0920', area: 'B', subTopic: 'mechanics',
    topic: 'Force Systems', type: 'theory', difficulty: 'average',
    question: 'A force applied at an angle to a certain line of action can be resolved into:',
    options: ['Normal and shear forces', 'Horizontal and vertical components', 'Resultants and equilibrants', 'Moment and torque'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0921', area: 'B', subTopic: 'mechanics',
    topic: 'Equilibrium', type: 'theory', difficulty: 'average',
    question: 'What condition must be satisfied for a body in static equilibrium?',
    options: ['Only ΣF = 0', 'Only ΣM = 0', 'ΣF = 0 and ΣM = 0', 'ΣF ≠ 0 and ΣM ≠ 0'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0922', area: 'B', subTopic: 'mechanics',
    topic: 'Forces', type: 'theory', difficulty: 'easy',
    question: 'Which Newton\'s law is primarily used in engineering statics?',
    options: ['First Law', 'Second Law', 'Third Law', 'Law of Gravitation'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0923', area: 'B', subTopic: 'mechanics',
    topic: 'Kinematics', type: 'computation', difficulty: 'average',
    question: 'A car accelerates uniformly from 10 m/s to 20 m/s in 5 seconds. What is the acceleration? (Given: Initial speed u = 10 m/s, final speed v = 20 m/s)',
    options: ['1 m/s²', '2 m/s²', '3 m/s²', '4 m/s²'],
    correctAnswer: 1,
    solution: {
      given: 'u = 10 m/s, v = 20 m/s, t = 5 s',
      steps: ['Acceleration a = (v - u) / t = (20 - 10) / 5 = 2 m/s²'],
      formula: 'a = (v - u) / t',
      keyConcept: 'Constant acceleration is calculated by the change in velocity divided by the change in time.',
      commonMistakes: ['Forgetting to divide by time', 'Calculating distance instead of acceleration'],
      extraneousGivens: ['Final speed: 20 m/s', 'Initial speed: 10 m/s', 'Time: 5 seconds'],
    }
  },
  {
    id: 'llm-b-0924', area: 'B', subTopic: 'mechanics',
    topic: 'Forces', type: 'computation', difficulty: 'hard',
    question: 'A 25 kg object is lifted vertically by a force of 300 N. Calculate the net force acting on the object. (Use g = 9.81 m/s²)',
    options: ['2.2 N', '4.22 N', '24.22 N', '96.22 N'],
    correctAnswer: 2,
    solution: {
      given: 'Weight W = mg = 25 kg × 9.81 m/s² = 245.25 N, Applied force = 300 N',
      steps: ['Net force F_net = Applied force - Weight = 300 N - 245.25 N = 54.75 N'],
      formula: 'F_net = F_applied - W',
      keyConcept: 'Net force is the resultant of all forces acting on an object.',
      commonMistakes: ['Confusing weight with net force', 'Forgetting to subtract weight from applied force'],
      extraneousGivens: ['Mass: 25 kg', 'Applied force: 300 N'],
    }
  },
  {
    id: 'llm-b-0925', area: 'B', subTopic: 'mechanics',
    topic: 'Moments', type: 'computation', difficulty: 'hard',
    question: 'A force of 200 N is applied at a distance of 2 m from a pivot point. What is the moment around the pivot? (Neglect friction and other factors)',
    options: ['100 N·m', '200 N·m', '300 N·m', '400 N·m'],
    correctAnswer: 1,
    solution: {
      given: 'Force F = 200 N, Distance d = 2 m',
      steps: ['Moment M = F × d = 200 N × 2 m = 400 N·m'],
      formula: 'M = F × d',
      keyConcept: 'Moment is calculated by multiplying force with the distance from the point of rotation.',
      commonMistakes: ['Forgetting to multiply force by the distance', 'Incorrectly adding or subtracting values'],
      extraneousGivens: ['Distance: 2 m'],
    }
  },
  {
    id: 'llm-b-0926', area: 'B', subTopic: 'fluid-mechanics',
    topic: 'Fluid Properties', type: 'theory', difficulty: 'easy',
    question: 'What is the defining characteristic of a fluid?',
    options: ['It expands when force is applied', 'It has low resistance to shear stress', 'It compresses indefinitely', 'It contracts or expands depending on temperature changes'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0927', area: 'B', subTopic: 'fluid-mechanics',
    topic: 'Fluid Types', type: 'theory', difficulty: 'average',
    question: 'What type of fluid increases its viscosity when experiencing more shear stress?',
    options: ['Pseudoplastic', 'Dilatant', 'Bingham', 'Thixotropic'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0928', area: 'B', subTopic: 'fluid-mechanics',
    topic: 'Fluid Volume', type: 'computation', difficulty: 'hard',
    question: '6 slugs of water will occupy how much ft³ under standard pressure and temperature? (Given density of water ρ = 62.4 lb/ft³)',
    options: ['3.09 ft³', '4.09 ft³', '5.09 ft³', '6.09 ft³'],
    correctAnswer: 1,
    solution: {
      given: 'm = 6 slugs, ρ = 62.4 lb/ft³',
      steps: ['Convert mass to weight: W = m × g = 6 slugs × 32.2 ft/s² = 193.2 lb', 'Volume V = W/ρ = 193.2 lbs / 62.4 lb/ft³ = 3.09 ft³'],
      formula: 'V = W/ρ',
      keyConcept: 'Volume can be calculated using weight and density, emphasizing the relationship between mass and volume at given densities.',
      commonMistakes: ['Forgetting unit conversions', 'Confusing slugs with weight'],
      extraneousGivens: ['Weight of water: 62.4 lb/ft³'],
    }
  },
  {
    id: 'llm-b-0929', area: 'B', subTopic: 'fluid-mechanics',
    topic: 'Specific Weight', type: 'theory', difficulty: 'easy',
    question: 'A 25 cm-diameter cylinder is filled with 12 kg of a certain liquid. What will be the height of the cylinder if the specific weight of the liquid is 10.5 kN/m³?',
    options: ['20.6 cm', '22.8 cm', '26.5 cm', '29.3 cm'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0930', area: 'B', subTopic: 'fluid-mechanics',
    topic: 'Compressibility', type: 'computation', difficulty: 'hard',
    question: 'Water has a bulk modulus of K=2,200 MPa. How much pressure must be applied to water in order to reduce its volume by 6%?',
    options: ['112 MPa', '123 MPa', '132 MPa', '114 MPa'],
    correctAnswer: 2,
    solution: {
      given: 'K = 2,200 MPa, ΔV = 6%',
      steps: ['Using the relationship ΔP = K(ΔV/V), ΔP = 2200 MPa × 0.06 = 132 MPa'],
      formula: 'ΔP = K(ΔV/V)',
      keyConcept: 'Pressure change in materials in response to volume changes can be calculated using bulk modulus.',
      commonMistakes: ['Neglecting to convert percentages', 'Misunderstanding bulk modulus definition'],
      extraneousGivens: ['ΔV: 6%', 'K: 2,200 MPa'],
    }
  },
  {
    id: 'llm-b-0931', area: 'B', subTopic: 'mathematics',
    topic: 'Algebra', type: 'theory', difficulty: 'easy',
    question: 'What is the quadratic formula for solving quadratic equations?',
    options: ['x = -b ± √(b² - 4ac) / 2a', 'x = -b ± √(b² + 4ac) / 2a', 'x = -b / 2a', 'x = √(b² - 4ac) / 2a'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0932', area: 'B', subTopic: 'mathematics',
    topic: 'Trigonometry', type: 'theory', difficulty: 'average',
    question: 'What is the value of sin(90°)?',
    options: ['0', '1', '√2', '√3'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0933', area: 'B', subTopic: 'mathematics',
    topic: 'Geometry', type: 'theory', difficulty: 'easy',
    question: 'What is the formula for the area of a triangle?',
    options: ['Area = 1/2 * base * height', 'Area = base * height', 'Area = base^2', 'Area = 1/3 * base * height'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0934', area: 'B', subTopic: 'calculus',
    topic: 'Derivatives', type: 'theory', difficulty: 'average',
    question: 'What is the derivative of sin(x)?',
    options: ['cos(x)', '-sin(x)', 'tan(x)', '1'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0935', area: 'B', subTopic: 'calculus',
    topic: 'Integrals', type: 'computation', difficulty: 'average',
    question: 'Evaluate the integral ∫(3x² + 2)dx from x = 0 to x = 1. The answer will be in cubic meters.',
    options: ['2.33 m³', '2.00 m³', '2.50 m³', '2.67 m³'],
    correctAnswer: 1,
    solution: {
      given: '∫(3x² + 2)dx from 0 to 1',
      steps: ['Find the antiderivative: (x³ + 2x) | from 0 to 1', 'Evaluate at 1: (1³ + 2*1) - (0³ + 2*0) = (1 + 2) - 0 = 3'],
      formula: 'Antiderivative: F(x) = x³ + 2x',
      keyConcept: 'The definite integral gives the net area under the curve.',
      commonMistakes: ['Forgetting to apply limits', 'Miscalculating the antiderivative'],
      extraneousGivens: ['The answer will be in cubic meters', 'Evaluate from x = 0 to x = 1'],
    }
  },
  {
    id: 'llm-b-0936', area: 'B', subTopic: 'statistics',
    topic: 'Probability', type: 'theory', difficulty: 'average',
    question: 'What is the probability of flipping a head on a fair coin?',
    options: ['0', '0.25', '0.5', '1'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0937', area: 'B', subTopic: 'statistics',
    topic: 'Regression Analysis', type: 'theory', difficulty: 'hard',
    question: 'In regression analysis, what does R² represent?',
    options: ['Correlation coefficient', 'Proportion of variance explained', 'Slope of the regression line', 'Intercept of the regression line'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0938', area: 'B', subTopic: 'engineering mechanics',
    topic: 'Statics', type: 'theory', difficulty: 'easy',
    question: 'What is the condition for a body to be in static equilibrium?',
    options: ['ΣF = 0 and ΣM = 0', 'ΣF ≠ 0 and ΣM = 0', 'ΣF = 0 and ΣM ≠ 0', 'All forces act in one direction'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0939', area: 'B', subTopic: 'engineering mechanics',
    topic: 'Dynamics', type: 'computation', difficulty: 'average',
    question: 'A 10 kg object is subjected to a net force of 20 N. What is its acceleration? Assume g = 9.81 m/s² and do not use it.',
    options: ['1 m/s²', '2 m/s²', '3 m/s²', '4 m/s²'],
    correctAnswer: 1,
    solution: {
      given: 'm = 10 kg, F = 20 N',
      steps: ['Using Newton\'s second law: F = ma', 'a = F/m = 20 N / 10 kg = 2 m/s²'],
      formula: 'a = F/m',
      keyConcept: 'Newton\'s second law relates force, mass, and acceleration.',
      commonMistakes: ['Forgetting to divide by mass', 'Miscalculating the net force'],
      extraneousGivens: ['g = 9.81 m/s² (irrelevant to this calculation)', 'mass = 10 kg'],
    }
  },
  {
    id: 'llm-b-0940', area: 'B', subTopic: 'engineering mechanics',
    topic: 'Fluid Mechanics', type: 'computation', difficulty: 'hard',
    question: 'Calculate the pressure at the bottom of a water tank that is 5 m deep. Assume the density of water is 1000 kg/m³ and g = 9.81 m/s². The diameter of the tank is 2 m.',
    options: ['49.05 kPa', '100 kPa', '102 kPa', '50 kPa'],
    correctAnswer: 1,
    solution: {
      given: 'h = 5 m, ρ = 1000 kg/m³, g = 9.81 m/s², D = 2 m',
      steps: ['Using the hydrostatic pressure formula: P = ρgh', 'P = 1000 kg/m³ * 9.81 m/s² * 5 m = 49050 Pa (or 49.05 kPa)'],
      formula: 'P = ρgh',
      keyConcept: 'Hydrostatic pressure increases with depth in a fluid.',
      commonMistakes: ['Forgetting to convert to kPa', 'Missed using correct depth'],
      extraneousGivens: ['The diameter of the tank: 2 m (not needed for pressure calculation)'],
    }
  },
  {
    id: 'llm-b-0941', area: 'B', subTopic: 'engineering economy',
    topic: 'Cost Analysis', type: 'computation', difficulty: 'average',
    question: 'If a project costs ₱300,000 with a lifespan of 10 years and a salvage value of ₱30,000, what is the annual depreciation using straight-line method?',
    options: ['₱27,000', '₱30,000', '₱36,000', '₱23,000'],
    correctAnswer: 0,
    solution: {
      given: 'Cost = ₱300,000, Lifespan = 10 years, Salvage Value = ₱30,000',
      steps: ['Annual Depreciation = (Cost - Salvage Value) / Lifespan', 'Annual Depreciation = (₱300,000 - ₱30,000) / 10 = ₱27,000'],
      formula: 'Depreciation = (Cost - Salvage Value) / Lifespan',
      keyConcept: 'Straight-line depreciation distributes the cost evenly over the project\'s lifespan.',
      commonMistakes: ['Forgetting to subtract salvage value', 'Miscalculating lifespan'],
      extraneousGivens: ['Cost: ₱300,000 (needed for depreciation)', 'Lifespan: 10 years (needed)'],
    }
  },
  {
    id: 'llm-b-0942', area: 'B', subTopic: 'surveying',
    topic: 'Land Measurement', type: 'theory', difficulty: 'easy',
    question: 'What is the standard unit of measurement in surveying for land area?',
    options: ['Square meter', 'Hectare', 'Acre', 'Square kilometer'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0943', area: 'B', subTopic: 'physics',
    topic: 'Force and Motion', type: 'theory', difficulty: 'easy',
    question: 'What is the SI unit of force?',
    options: ['Newton', 'Pound-force', 'Joule', 'Watt'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0944', area: 'B', subTopic: 'chemistry',
    topic: 'Material Properties', type: 'theory', difficulty: 'average',
    question: 'What is the typical density of concrete?',
    options: ['2,400 kg/m³', '1,800 kg/m³', '3,000 kg/m³', '1,200 kg/m³'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0945', area: 'B', subTopic: 'mathematics',
    topic: 'Statistics', type: 'computation', difficulty: 'hard',
    question: 'A researcher collects the following data points: 5, 7, 8, 10, 12. What is the mean of this data set?',
    options: ['8.4', '9', '8', '7.5'],
    correctAnswer: 1,
    solution: {
      given: 'Data points: 5, 7, 8, 10, 12',
      steps: ['Mean = (5 + 7 + 8 + 10 + 12) / 5 = 42 / 5 = 8.4'],
      formula: 'Mean = Σx / n',
      keyConcept: 'The mean is the average of a data set.',
      commonMistakes: ['Forgetting to divide by the number of values', 'Adding values incorrectly'],
      extraneousGivens: ['Data points: 5, 7, 8, 10, 12 (all needed for calculation)'],
    }
  },
  {
    id: 'llm-b-0946', area: 'B', subTopic: 'mathematics',
    topic: 'Geometry', type: 'computation', difficulty: 'easy',
    question: 'Calculate the area of a rectangle with a length of 10 m and a width of 5 m. The number of corners is irrelevant.',
    options: ['50 m²', '40 m²', '30 m²', '60 m²'],
    correctAnswer: 0,
    solution: {
      given: 'Length = 10 m, Width = 5 m',
      steps: ['Area = Length × Width = 10 m × 5 m = 50 m²'],
      formula: 'Area = Length × Width',
      keyConcept: 'Area of rectangle calculated using its dimensions.',
      commonMistakes: ['Multiplying dimensions incorrectly', 'Ignoring units'],
      extraneousGivens: ['The number of corners is irrelevant'],
    }
  },
  {
    id: 'llm-b-0947', area: 'B', subTopic: 'mechanics',
    topic: 'Force Systems', type: 'theory', difficulty: 'average',
    question: 'Which condition ensures rotational equilibrium?',
    options: ['ΣF = 0', 'ΣM = 0', 'ΣM about any point = 0', 'Both A and C'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0948', area: 'B', subTopic: 'mechanics',
    topic: 'Force Calculations', type: 'computation', difficulty: 'average',
    question: 'If a mass 𝑚 = 5 kg is acted upon by a force 𝐹 = 15 N, what is the acceleration? (Take g = 9.81 m/s²)',
    options: ['2 m/s²', '3 m/s²', '4 m/s²', '5 m/s²'],
    correctAnswer: 1,
    solution: {
      given: 'm=5 kg, F=15 N',
      steps: ['Using Newton\'s second law: a = F/m = 15/5 = 3 m/s²'],
      formula: 'a = F/m',
      keyConcept: 'Newton\'s second law relates force, mass, and acceleration.',
      commonMistakes: ['Confusing weight with mass', 'Forgetting to apply Newton\'s law correctly'],
      extraneousGivens: ['g = 9.81 m/s²', 'Mass = 5 kg'],
    }
  },
  {
    id: 'llm-b-0949', area: 'B', subTopic: 'fluid mechanics',
    topic: 'Fluid Properties', type: 'theory', difficulty: 'average',
    question: 'What is a defining characteristic of a fluid?',
    options: ['It expands when force is applied', 'It has low resistance to shear stress', 'It compresses indefinitely', 'It contracts or expands depending on temperature changes'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0950', area: 'B', subTopic: 'mechanics',
    topic: 'Work and Energy', type: 'computation', difficulty: 'hard',
    question: 'If a force of 300 N acts on an object over a distance of 10 m in the direction of the force, what is the work done? (Also consider a temperature of 25°C)',
    options: ['2500 J', '3000 J', '3500 J', '4000 J'],
    correctAnswer: 1,
    solution: {
      given: 'F=300 N, d=10 m',
      steps: ['Work done W = F × d = 300 × 10'],
      formula: 'W = F × d',
      keyConcept: 'Work is the energy transferred when a force is applied over a distance.',
      commonMistakes: ['Confusing work with energy', 'Errors in unit conversion'],
      extraneousGivens: ['Distance in meters', 'Temperature at 25°C'],
    }
  },
  {
    id: 'llm-b-0951', area: 'B', subTopic: 'fluid mechanics',
    topic: 'Density and Specific Gravity', type: 'theory', difficulty: 'average',
    question: 'Ethanol has a density of 5.135 kg per 6.5 liters. Will it float or sink on water?',
    options: ['Float', 'Sink', 'Depends on volume', 'Depends on temperature'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0952', area: 'B', subTopic: 'mechanics',
    topic: 'Momentum Calculation', type: 'computation', difficulty: 'average',
    question: 'A 70 kg object is moving at a velocity of 3 m/s. What is its momentum?',
    options: ['70 kg·m/s', '210 kg·m/s', '140 kg·m/s', '90 kg·m/s'],
    correctAnswer: 1,
    solution: {
      given: 'm=70 kg, v=3 m/s',
      steps: ['p = m × v = 70 × 3'],
      formula: 'p = mv',
      keyConcept: 'Momentum is the product of mass and velocity.',
      commonMistakes: ['Forgetting to multiply', 'Mixing up mass and weight'],
      extraneousGivens: ['Mass in kg', 'Velocity in m/s'],
    }
  },
  {
    id: 'llm-b-0953', area: 'B', subTopic: 'mechanics',
    topic: 'Trusses and Structures', type: 'theory', difficulty: 'average',
    question: 'A machine structure differs from a truss because:',
    options: ['Members can carry bending moments', 'Members are only axial-force carriers', 'Machines cannot have moving parts', 'Machines are always unstable'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0954', area: 'B', subTopic: 'mechanics',
    topic: 'Torque and Moments', type: 'computation', difficulty: 'hard',
    question: 'A 200 N force acts at a 30° angle above the horizontal. Calculate its horizontal component.',
    options: ['100 N', '150 N', '173.2 N', '200 N'],
    correctAnswer: 2,
    solution: {
      given: 'F=200 N, θ=30°',
      steps: ['F_x = F × cos(θ) = 200 × cos(30°)'],
      formula: 'F_x = F cos(θ)',
      keyConcept: 'The component of force can be resolved along axes.',
      commonMistakes: ['Calculating the wrong trigonometric function', 'Ignoring angle conversions'],
      extraneousGivens: ['Angle in degrees', 'Force in Newtons'],
    }
  },
  {
    id: 'llm-b-0955', area: 'B', subTopic: 'mechanics',
    topic: 'Kinematics', type: 'computation', difficulty: 'average',
    question: 'A particle is moving in a straight line with an initial velocity of 5 m/s and accelerates at a rate of 2 m/s². What is its velocity after 4 seconds?',
    options: ['5 m/s', '10 m/s', '13 m/s', '15 m/s'],
    correctAnswer: 2,
    solution: {
      given: 'u=5 m/s, a=2 m/s², t=4 s',
      steps: ['v = u + at = 5 + (2)(4)'],
      formula: 'v = u + at',
      keyConcept: 'Velocity changes with acceleration over time.',
      commonMistakes: ['Forgetting initial velocity', 'Confusing acceleration with speed'],
      extraneousGivens: ['Acceleration in m/s²', 'Time in seconds'],
    }
  },
  {
    id: 'llm-b-0956', area: 'B', subTopic: 'mechanics',
    topic: 'Circular Motion', type: 'computation', difficulty: 'hard',
    question: 'A car moves on a curve radius 100 m at speed 20 m/s. Calculate the centripetal acceleration.',
    options: ['2 m/s²', '3 m/s²', '4 m/s²', '5 m/s²'],
    correctAnswer: 2,
    solution: {
      given: 'v=20 m/s, r=100 m',
      steps: ['Centripetal acceleration a_c = v²/r = (20²)/100'],
      formula: 'a_c = v²/r',
      keyConcept: 'Centripetal acceleration acts towards the center of a curve.',
      commonMistakes: ['Confusing linear speed with angular acceleration', 'Errors in computation'],
      extraneousGivens: ['Speed in m/s', 'Radius in meters'],
    }
  },
  {
    id: 'llm-b-0957', area: 'B', subTopic: 'mechanics',
    topic: 'Force and Motion', type: 'computation', difficulty: 'average',
    question: 'If a mass 𝑚 = 2 kg is acted upon by a force 𝐹 = 10 N, what is the acceleration of the body? Assume that the only forces acting are the applied force and friction is negligible.',
    options: ['2 m/s²', '5 m/s²', '10 m/s²', '20 m/s²'],
    correctAnswer: 1,
    solution: {
      given: 'm = 2 kg, F = 10 N',
      steps: ['Apply Newton\'s second law: a = F/m', 'Calculate: a = 10 N / 2 kg = 5 m/s²'],
      formula: 'F = ma',
      keyConcept: 'Acceleration is directly proportional to the net force acting on an object and inversely proportional to its mass.',
      commonMistakes: ['Forgetting to divide by mass', 'Confusing net force with other forces'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-b-0958', area: 'B', subTopic: 'mechanics',
    topic: 'Equilibrium Equations', type: 'computation', difficulty: 'average',
    question: 'A force of 10 N is applied at a point. If the angle with the horizontal is 60°, what is the vertical component of the force?',
    options: ['5 N', '8.66 N', '10 N', '6 N'],
    correctAnswer: 1,
    solution: {
      given: 'F = 10 N, angle = 60°',
      steps: ['Calculate the vertical component: Fy = F * sin(60°)', 'Fy = 10 * 0.866 = 8.66 N'],
      formula: 'Fy = F * sin(θ)',
      keyConcept: 'Vertical force components can be calculated using trigonometric functions.',
      commonMistakes: ['Using cosine instead of sine', 'Forgetting to convert angles when necessary'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-b-0959', area: 'B', subTopic: 'mechanics',
    topic: 'Moment of a Force', type: 'computation', difficulty: 'average',
    question: 'A 200 N force acts at a distance of 0.5 m from a pivot. What is the moment about the pivot?',
    options: ['50 N·m', '100 N·m', '86.6 N·m', '200 N·m'],
    correctAnswer: 1,
    solution: {
      given: 'F = 200 N, d = 0.5 m',
      steps: ['Calculate the moment: M = F * d', 'M = 200 N * 0.5 m = 100 N·m'],
      formula: 'M = F * d',
      keyConcept: 'The moment of a force is the product of the force and its distance from the pivot.',
      commonMistakes: ['Forgetting the units of moment', 'Confusing moment with force'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-b-0960', area: 'B', subTopic: 'mechanics',
    topic: 'Static Equilibrium', type: 'computation', difficulty: 'hard',
    question: 'A simply supported beam has point A at the left end. Three vertical forces act on the beam: F1 = 6 kN downward at x = 2 m, F2 = 4 kN upward at x = 5 m, and F3 = 8 kN downward at x = 7 m. Find the net moment about A.',
    options: ['+48 kN·m (CCW)', '−48 kN·m (CW)', '−32 kN·m (CW)', '+32 kN·m (CCW)'],
    correctAnswer: 1,
    solution: {
      given: 'F1 = -6 kN at 2 m, F2 = +4 kN at 5 m, F3 = -8 kN at 7 m',
      steps: ['Calculate moment contributions:', 'M_A = F1 * distance - F2 * distance + F3 * distance', 'M_A = -6 * 2 + 4 * 5 - 8 * 7', 'M_A = -12 + 20 - 56 = -48 kN·m'],
      formula: 'M_A = ∑F * d',
      keyConcept: 'Use the principle of moments to calculate net moment about a point.',
      commonMistakes: ['Confusing clockwise and counterclockwise moments', 'Miscalculating contribution signs'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-b-0961', area: 'B', subTopic: 'mechanics',
    topic: 'Resultant Force', type: 'computation', difficulty: 'hard',
    question: 'A point is acted on by four forces: F1 = 80 N at 20°, F2 = 60 N at 140°, F3 = 50 N at 260°, F4 = 40 N at 330°. What is the resultant force?',
    options: ['R = 55.27 N, θ = 356.6°', 'R = 50.00 N, θ = 350.0°', 'R = 60.00 N, θ = 5.0°', 'R = 45.00 N, θ = 0.0°'],
    correctAnswer: 0,
    solution: {
      given: 'F1 = 80 N, θ1 = 20°, F2 = 60 N, θ2 = 140°, F3 = 50 N, θ3 = 260°, F4 = 40 N, θ4 = 330°',
      steps: ['Calculate components of forces:', 'F1: (80cos20°, 80sin20°) = (75.18, 27.36)', 'F2: (60cos140°, 60sin140°) = (-45.96, 38.57)', 'F3: (50cos260°, 50sin260°) = (-8.68, -49.24)', 'F4: (40cos330°, 40sin330°) = (34.64, -20.00)', 'Sum of x-components: ΣFx = 55.18 N, ΣFy = -3.31 N', 'Calculate R and θ: R = √(55.182 + (-3.31)²) = 55.27 N, θ = tan⁻¹(-3.31/55.18) = 356.6°'],
      formula: 'R = √(ΣFx² + ΣFy²), θ = tan⁻¹(ΣFy/ΣFx)',
      keyConcept: 'Resultant force is found by summing vectors and can be expressed in magnitude and angle.',
      commonMistakes: ['Forgetting to calculate components', 'Mixing up signs', 'Incorrect trigonometric calculations'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-b-0962', area: 'B', subTopic: 'mechanics',
    topic: 'Trusses and Frames', type: 'theory', difficulty: 'hard',
    question: 'In the method of joints for trusses, what is assumed about the members?',
    options: ['Rigid and carry moments', 'Two-force members only', 'Three-force members', 'Subjected to torsion'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'In trusses, members are ideally treated as two-force members that only experience axial forces.',
      commonMistakes: ['Confusing member types', 'Misunderstanding the analysis method'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-b-0963', area: 'B', subTopic: 'fluid-mechanics',
    topic: 'Fluid Dynamics', type: 'theory', difficulty: 'average',
    question: 'What type of fluid assumes a shear stress and shear strain relationship?',
    options: ['Dilatant', 'Thixotropic', 'Newtonian', 'Rheopectic'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: 'Newtonian fluids exhibit a linear relationship between shear stress and shear strain.',
      commonMistakes: ['Mixing up fluid types', 'Misunderstanding viscosity implications'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-b-0964', area: 'B', subTopic: 'fluid-mechanics',
    topic: 'Fluid Properties', type: 'computation', difficulty: 'average',
    question: '25 lbs of air occupies a conical container of height 4 inches and diameter 2.5 inches. What is the density of said air?',
    options: ['5056.6 lb/ft3', '5065.5 lb/ft3', '6505.5 lb/ft3', '6605.5 lb/ft3'],
    correctAnswer: 1,
    solution: {
      given: 'Weight = 25 lbs, Height = 4 in, Diameter = 2.5 in',
      steps: ['Calculate volume of the cone: V = (1/3)πr²h, convert dimensions to feet: r = 2.5 in / 2 = 1.25 in = 0.1042 ft, h = 4 in = 0.3333 ft.', 'V = (1/3)π(0.1042)²(0.3333) = 0.0113 ft³.', 'Calculate density: ρ = mass/volume, convert lbs to slugs: 25 lbs = 25/32.2 slugs, density = (25/32.2) / 0.0113 = 5065.5 lb/ft³.'],
      formula: 'V = (1/3)πr²h; ρ = m/V',
      keyConcept: 'Density is the mass per unit volume of a substance.',
      commonMistakes: ['Incorrect unit conversions', 'Miscalculating volume of cone'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-b-0965', area: 'B', subTopic: 'fluid-mechanics',
    topic: 'Specific Gravity', type: 'computation', difficulty: 'hard',
    question: 'The volume of a rock is 0.00015m³ and its specific gravity is 2.60. What is its weight?',
    options: ['3.82 N', '3.79 N', '2.99 N', '2.78 N'],
    correctAnswer: 0,
    solution: {
      given: 'V = 0.00015 m³, SG = 2.60, γ_water = 9.81 kN/m³',
      steps: ['Calculate density: ρ_rock = SG * ρ_water = 2.60 * 1000 kg/m³ = 2600 kg/m³.', 'Calculate weight: W = ρ * V * g = 2600 * 0.00015 * 9.81 = 3.82 N.'],
      formula: 'Weight = ρ * V * g; SG = ρ_substance / ρ_water',
      keyConcept: 'Specific gravity indicates the heaviness of a substance compared to water.',
      commonMistakes: ['Confusing weight and mass', 'Neglecting unit conversions'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-b-0966', area: 'B', subTopic: 'mechanics',
    topic: 'Specific Gravity', type: 'computation', difficulty: 'average',
    question: 'The volume of a rock is found to be 0.00015m³. If the rock\'s specific gravity is 2.60, what is its weight?',
    options: ['3.82 N', '3.79 N', '2.99 N', '2.78 N'],
    correctAnswer: 0,
    solution: {
      given: 'Volume = 0.00015 m³, Specific Gravity = 2.60',
      steps: ['Calculate weight using specific gravity: Weight = SG * Volume * ρ_water * g = 2.60 * 0.00015 m³ * 1000 kg/m³ * 9.81 m/s² = 3.82 N'],
      formula: 'Weight = SG * V * ρ_water * g',
      keyConcept: 'Weight can be calculated from specific gravity.',
      commonMistakes: ['Mixing up specific gravity and density', 'Not considering gravity in calculations', 'Incorrect volume unit conversion'],
      extraneousGivens: ['Weight is based on specific gravity', 'Volume of rock provided', 'Reference density of water given'],
    }
  },
  {
    id: 'llm-b-0967', area: 'B', subTopic: 'engineering-mechanics',
    topic: 'Equilibrium Conditions', type: 'theory', difficulty: 'average',
    question: 'When is a body in equilibrium?',
    options: ['ΣF = 0 and ΣM = 0', 'Only ΣF = 0', 'Only ΣM = 0', 'If the body is not moving'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0968', area: 'B', subTopic: 'engineering-mechanics',
    topic: 'Types of Forces', type: 'theory', difficulty: 'easy',
    question: 'What is a resultant force?',
    options: ['The total force acting on a body', 'A single force that can replace two or more forces', 'A force acting in the opposite direction', 'None of the above'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0969', area: 'B', subTopic: 'engineering-mechanics',
    topic: 'Newton\'s Laws of Motion', type: 'theory', difficulty: 'average',
    question: 'Which Newton\'s law states that for every action, there is an equal and opposite reaction?',
    options: ['First Law', 'Second Law', 'Third Law', 'Law of Gravitation'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0970', area: 'B', subTopic: 'engineering-mechanics',
    topic: 'Forces and Motion', type: 'computation', difficulty: 'average',
    question: 'If a force of 20 N acts on a 5 kg mass, what is the acceleration? (Use g = 9.81 m/s²)',
    options: ['4 m/s²', '3 m/s²', '2 m/s²', '1 m/s²'],
    correctAnswer: 0,
    solution: {
      given: 'F = 20 N, m = 5 kg',
      steps: ['Using F = ma, acceleration a = F/m = 20 N / 5 kg = 4 m/s²'],
      formula: 'F = ma',
      keyConcept: 'Newton\'s Second Law relates force, mass, and acceleration.',
      commonMistakes: ['Forgetting to use mass', 'Using incorrect units', 'Confusing force with weight'],
      extraneousGivens: ['g = 9.81 m/s²', 'Force = 20 N'],
    }
  },
  {
    id: 'llm-b-0971', area: 'B', subTopic: 'engineering-mechanics',
    topic: 'Moments of Forces', type: 'computation', difficulty: 'average',
    question: 'A force of 50 N is applied at a distance of 2 m from the pivot. What is the moment about the pivot? (Neglect angles for this calculation)',
    options: ['100 N·m', '50 N·m', '0 N·m', '200 N·m'],
    correctAnswer: 0,
    solution: {
      given: 'F = 50 N, d = 2 m',
      steps: ['Moment = F × d = 50 N × 2 m = 100 N·m'],
      formula: 'M = F × d',
      keyConcept: 'Moment of a force depends on the force and distance from the pivot.',
      commonMistakes: ['Forgetting to multiply by distance', 'Using wrong units', 'Confusing force and moment'],
      extraneousGivens: ['Force = 50 N', 'Distance = 2 m'],
    }
  },
  {
    id: 'llm-b-0972', area: 'B', subTopic: 'engineering-mechanics',
    topic: 'Material Properties', type: 'theory', difficulty: 'average',
    question: 'What does the moment of inertia represent?',
    options: ['Resistance to bending', 'Resistance to twisting', 'Resistance to linear motion', 'Resistance to deformation'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0973', area: 'B', subTopic: 'engineering-mechanics',
    topic: 'Material Failure', type: 'theory', difficulty: 'hard',
    question: 'Which of the following statements about stress and strain is true?',
    options: ['Stress is the internal resistance to deformation', 'Strain is the force per unit area', 'Stress and strain are always directly proportional', 'Strain is measured in Pascals'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0974', area: 'B', subTopic: 'engineering-mechanics',
    topic: 'Fluid Statics', type: 'theory', difficulty: 'easy',
    question: 'The pressure in a fluid at rest increases with depth due to:',
    options: ['Weight of the fluid above', 'Temperature of the fluid', 'Shape of the container', 'Color of the fluid'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0975', area: 'B', subTopic: 'fluid-mechanics',
    topic: 'Fundamentals of Fluid Mechanics', type: 'theory', difficulty: 'easy',
    question: 'What is Fluid Dynamics?',
    options: ['Study of fluids at rest', 'Study of fluid motion and forces causing motion', 'Study of the properties of fluids', 'Study of gas behavior'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-b-0976', area: 'B', subTopic: 'fluid-mechanics',
    topic: 'Fluid Kinematics', type: 'computation', difficulty: 'hard',
    question: 'A 25 cm-diameter cylinder is filled with 12 kg of a liquid. The specific weight is 10.5 kN/m³. What is the height of the liquid in the cylinder?',
    options: ['20.6 cm', '22.8 cm', '26.5 cm', '29.3 cm'],
    correctAnswer: 1,
    solution: {
      given: 'Diameter = 25 cm, Weight = 12 kg, Specific Weight = 10.5 kN/m³',
      steps: ['Convert diameter to radius: r = 0.125 m', 'Calculate volume: V = m / γ = (12 kg * 9.81 m/s²) / 10.5 kN/m³ = 1.124 m³', 'Calculate height: V = πr²h => h = V / (πr²) = 1.124 / (π(0.125)²) = 22.8 cm'],
      formula: 'V = πr²h, V = m / γ',
      keyConcept: 'Height calculation based on volume and specific weight relates to fluid columns.',
      commonMistakes: ['Forgetting to convert units for volume', 'Using incorrect gravitational constant', 'Not applying the correct formula'],
      extraneousGivens: ['Specific weight = 10.5 kN/m³', 'Weight = 12 kg'],
    }
  },
  {
    id: 'llm-b-0977', area: 'B', subTopic: 'fluid-mechanics',
    topic: 'Surface Tension', type: 'computation', difficulty: 'hard',
    question: 'A thin wire is placed on water with a surface tension of 0.0728 N/m. If the upward force to lift it is 0.01092 N, what is the length of the wire?',
    options: ['10 cm', '12 cm', '14 cm', '15 cm'],
    correctAnswer: 1,
    solution: {
      given: 'Surface Tension = 0.0728 N/m, Upward Force = 0.01092 N',
      steps: ['Using the formula σ = F / L, rearranging gives L = F / σ = 0.01092 N / 0.0728 N/m = 0.150 m = 15 cm'],
      formula: 'L = F / σ',
      keyConcept: 'Surface tension relates the force required to lift a wire and its length.',
      commonMistakes: ['Misapplying the surface tension formula', 'Neglecting units', 'Confusing force with pressure'],
      extraneousGivens: ['Upward force = 0.01092 N', 'Surface tension = 0.0728 N/m'],
    }
  },
];
