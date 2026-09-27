import { Question } from './comprehensive-questions';

export const llmAreaCQuestions: Question[] = [
  {
    id: 'llm-c-0001', area: 'C', subTopic: 'agricultural-structures',
    topic: 'CPES in Agriculture', type: 'theory', difficulty: 'easy',
    question: 'What is the primary objective of the Constructors’ Performance Evaluation System (CPES)?',
    options: ['To establish a uniform set of criteria for grading constructors\' performance', 'To increase the construction costs for government projects', 'To evaluate agricultural equipment performance', 'To promote the use of foreign contractors'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0002', area: 'C', subTopic: 'agricultural-structures',
    topic: 'CPES Implementing Units', type: 'theory', difficulty: 'easy',
    question: 'Which agency is responsible for accrediting performance evaluators under the CPES?',
    options: ['Department of Agriculture (DA)', 'Construction Industry Authority of the Philippines (CIAP)', 'National Economic and Development Authority (NEDA)', 'Philippine Contractors Accreditation Board (PCAB)'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0003', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Defects Liability Period', type: 'theory', difficulty: 'average',
    question: 'What is the duration of the Defects Liability Period as stated in CPES guidelines?',
    options: ['30 days', '90 days', '1 year', '2 years'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0004', area: 'C', subTopic: 'agricultural-structures',
    topic: 'CPES Evaluation Criteria', type: 'theory', difficulty: 'average',
    question: 'During construction, which aspect has the highest maximum rating according to the CPES guidelines?',
    options: ['Workmanship', 'Materials', 'Environmental, Safety, and Health (ESH)', 'Time'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0005', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Corrective Action Plan', type: 'theory', difficulty: 'average',
    question: 'What does a Corrective Action Plan (CAP) aim to address?',
    options: ['Prevent future projects from being awarded', 'Correct non-conformance findings on the project', 'Increase project costs for administrative purposes', 'Evaluate new construction methods'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0006', area: 'C', subTopic: 'agricultural-structures',
    topic: 'CPES Reports', type: 'theory', difficulty: 'average',
    question: 'What is the purpose of submitting CPES reports to the CIAP?',
    options: ['For public relations purposes', 'To facilitate information sharing among users of CPES data', 'To apply for grants and funding', 'To register new projects with the government'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0007', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Performance Evaluator Requirements', type: 'theory', difficulty: 'hard',
    question: 'Which of the following is NOT a requirement for a CPES Evaluator?',
    options: ['Licensed Engineer or Architect', 'At least 5 years of experience in project implementation', 'Currently involved in the projects being evaluated', 'No conviction for crimes involving moral turpitude'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0008', area: 'C', subTopic: 'agricultural-structures',
    topic: 'CPES Implementation', type: 'theory', difficulty: 'hard',
    question: 'What role does the CPES Implementing Unit (IU) play in the evaluation process?',
    options: ['Approve all construction materials', 'Coordinate and schedule evaluations of projects', 'Determine the funding of infrastructure projects', 'Select contractors for government projects'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0009', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Rating System', type: 'computation', difficulty: 'easy',
    question: 'A horizontal infrastructure project has an overall cost of ₱5,000,000. If the workmanship score is 0.30, the materials score is 0.20, and the time score is 0.10, calculate the maximum rating given to workmanship. Assume no other criteria apply.',
    options: ['₱1,500,000', '₱1,000,000', '₱500,000', '₱300,000'],
    correctAnswer: 0,
    solution: {
      given: 'Total Cost = ₱5,000,000, Workmanship Score = 0.30',
      steps: ['Calculate the maximum rating for workmanship: Maximum Rating = Total Cost × Workmanship Score', 'Maximum Rating = ₱5,000,000 × 0.30 = ₱1,500,000'],
      formula: 'Maximum Rating = Total Cost × Workmanship Score',
      keyConcept: 'The maximum rating for workmanship is derived from the total cost multiplied by the corresponding score.',
      commonMistakes: ['Forgetting to multiply by the correct score', 'Subtracting instead of multiplying'],
      extraneousGivens: ['Materials score: 0.20', 'Time score: 0.10', 'Total project duration: 180 days', 'Project location: Quezon Province'],
    }
  },
  {
    id: 'llm-c-0010', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Percentage Weight Calculation', type: 'computation', difficulty: 'average',
    question: 'A contractor’s item of work for a bridge construction costs ₱750,000 out of a total project cost of ₱5,500,000. Calculate the percentage weight of this item of work.',
    options: ['13.64%', '15%', '12.5%', '14.29%'],
    correctAnswer: 3,
    solution: {
      given: 'Cost of item = ₱750,000, Total project cost = ₱5,500,000',
      steps: ['Calculate percentage weight: Percentage Weight = (Cost of item / Total project cost) × 100%', 'Percentage Weight = (₱750,000 / ₱5,500,000) × 100% = 13.64%'],
      formula: 'Percentage Weight = (Cost of item / Total project cost) × 100%',
      keyConcept: 'Percentage weight is a measure of how much a specific item contributes to the total project.',
      commonMistakes: ['Forgetting to multiply by 100%', 'Using the wrong total project cost'],
      extraneousGivens: ['Location: Cebu City', 'Completion date: December 2024', 'Contractor\'s name: ABC Construction', 'Bid amount: ₱6,000,000'],
    }
  },
  {
    id: 'llm-c-0011', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Overall Rating Calculation', type: 'computation', difficulty: 'hard',
    question: 'A contractor received the following scores for a project: 0.40 for workmanship, 0.25 for materials, and 0.12 for time. If the project\'s weight for these categories are 0.6, 0.25, and 0.15 respectively, calculate the overall rating for the project.',
    options: ['0.33', '0.35', '0.31', '0.30'],
    correctAnswer: 1,
    solution: {
      given: 'Workmanship Score = 0.40, Materials Score = 0.25, Time Score = 0.12, Weights = (0.6, 0.25, 0.15)',
      steps: ['Calculate Overall Rating = (Workmanship Score × Weight) + (Materials Score × Weight) + (Time Score × Weight)', 'Overall Rating = (0.40 × 0.6) + (0.25 × 0.25) + (0.12 × 0.15)', 'Overall Rating = 0.24 + 0.0625 + 0.018 = 0.3205'],
      formula: 'Overall Rating = (Workmanship Score × Weight) + (Materials Score × Weight) + (Time Score × Weight)',
      keyConcept: 'The overall rating is a weighted score that reflects performance in various criteria.',
      commonMistakes: ['Incorrectly using weights', 'Omitting one category from calculation'],
      extraneousGivens: ['Location: Mindanao', 'Project duration: 10 months', 'Construction method: Precast', 'Funding source: NEDA'],
    }
  },
  {
    id: 'llm-c-0012', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Monitoring Constructor’s Compliance', type: 'theory', difficulty: 'average',
    question: 'What is the role of the CPES-IU in monitoring a constructor\'s compliance with a Corrective Action Request (CAR)?',
    options: ['To ensure compliance through regular inspections and reports', 'To prepare the financial reports for the project', 'To act as a mediator between the contractor and the government', 'To train the contractor\'s staff in CPES guidelines'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0013', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Project Evaluation Timing', type: 'theory', difficulty: 'average',
    question: 'When is the first evaluation typically conducted for a project under the CPES guidelines?',
    options: ['When the project reaches 50% completion', 'Upon project award', 'When the project is at least 30% physically complete', 'After project completion'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0014', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Reporting Deadlines', type: 'theory', difficulty: 'hard',
    question: 'What is the maximum duration allowed for submitting CPES reports after project evaluation for agencies evaluating over 100 projects?',
    options: ['1 month', '2 months', '3 months', '6 months'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0015', area: 'C', subTopic: 'agricultural-structures',
    topic: 'CPES Checklists', type: 'theory', difficulty: 'average',
    question: 'What is the purpose of CPES checklists during evaluation?',
    options: ['To provide a basis for approving construction budgets', 'To aid in the objective evaluation of constructors\' performance', 'To simplify the construction process', 'To increase the construction time'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0016', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Overall CPES Rating Calculation', type: 'computation', difficulty: 'hard',
    question: 'If a project received a 60% rating during construction and a 40% rating upon completion, calculate the overall CPES rating for a horizontal project.',
    options: ['52%', '58%', '60%', '64%'],
    correctAnswer: 0,
    solution: {
      given: 'During construction rating = 60%, Upon completion rating = 40%',
      steps: ['Overall Rating = (During construction rating × 0.6) + (Upon completion rating × 0.4)', 'Overall Rating = (60% × 0.6) + (40% × 0.4)', 'Overall Rating = 36% + 16% = 52%'],
      formula: 'Overall Rating = (During construction rating × 0.6) + (Upon completion rating × 0.4)',
      keyConcept: 'Overall ratings combine multiple evaluation phases, weighted according to the type of project.',
      commonMistakes: ['Forgetting to apply the weights', 'Adding instead of multiplying for weights'],
      extraneousGivens: ['Project size: 5 km', 'Contract amount: ₱10,000,000', 'Completion date: July 2023', 'Contractor: XYZ Builders'],
    }
  },
  {
    id: 'llm-c-0017', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Incentives for Constructors', type: 'theory', difficulty: 'easy',
    question: 'What is one of the uses of CPES ratings?',
    options: ['Promoting foreign construction companies', 'Determining project funding', 'Granting incentives or awards for constructors', 'Increasing overall construction time'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0018', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Documentation for Evaluation', type: 'theory', difficulty: 'average',
    question: 'What type of document must the constructor submit for a pre-evaluation meeting?',
    options: ['Project budget', 'List of subcontractors', 'Basic construction materials list', 'Project log book'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0019', area: 'C', subTopic: 'agricultural-structures',
    topic: 'CPES Overall Rating', type: 'theory', difficulty: 'hard',
    question: 'Which of the following CPES ratings corresponds to a performance rating of less than 75%?',
    options: ['Outstanding', 'Very Satisfactory', 'Satisfactory', 'Poor'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0020', area: 'C', subTopic: 'agricultural-buildings',
    topic: 'Agricultural Building Design', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of the Constructors’ Performance Evaluation System (CPES) as specified by the NEDA?',
    options: ['To provide financial support for contractors', 'To evaluate the performance of constructors on government projects', 'To enforce penalties on non-compliant constructors', 'To award all government projects to the lowest bidder'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0021', area: 'C', subTopic: 'agricultural-buildings',
    topic: 'CPES Implementation', type: 'theory', difficulty: 'easy',
    question: 'Which agency is responsible for accrediting CPES evaluators in the Philippines?',
    options: ['Department of Agriculture', 'National Economic and Development Authority', 'Construction Industry Authority of the Philippines', 'Philippine Contractors Accreditation Board'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0022', area: 'C', subTopic: 'agricultural-buildings',
    topic: 'Performance Evaluation', type: 'theory', difficulty: 'average',
    question: 'How often should the CPES Implementing Unit evaluate a project that is over 90 calendar days in duration?',
    options: ['Once', 'Twice', 'Three times', 'Only upon completion'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0023', area: 'C', subTopic: 'agricultural-buildings',
    topic: 'Construction Documentation', type: 'theory', difficulty: 'hard',
    question: 'What types of documents must be reviewed by the CPES Evaluators (CPE) during their site evaluation?',
    options: ['Only the contractor\'s financial documents', 'Contract agreements and progress reports', 'Only safety compliance documents', 'Only the environmental impact assessments'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0024', area: 'C', subTopic: 'agricultural-buildings',
    topic: 'CPES Evaluation Criteria', type: 'theory', difficulty: 'average',
    question: 'What is the maximum rating for the \'Workmanship\' aspect during the construction phase according to CPES guidelines?',
    options: ['0.20', '0.30', '0.40', '0.50'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0025', area: 'C', subTopic: 'agricultural-buildings',
    topic: 'Project Monitoring', type: 'theory', difficulty: 'easy',
    question: 'What is the role of the CPES Implementing Unit (IU)?',
    options: ['To manage the construction funds', 'To implement CPES regulations and oversee evaluations', 'To directly execute the infrastructure projects', 'To serve as a contractor for projects'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0026', area: 'C', subTopic: 'agricultural-buildings',
    topic: 'Corrective Action Plan', type: 'theory', difficulty: 'average',
    question: 'What must a Corrective Action Plan (CAP) include according to CPES guidelines?',
    options: ['Only the financial budget for corrections', 'A proposal to correct non-conformance findings', 'A request for additional project funding', 'Only evidence of past compliance'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0027', area: 'C', subTopic: 'agricultural-buildings',
    topic: 'Construction Safety', type: 'theory', difficulty: 'hard',
    question: 'Which of the following aspects is emphasized in CPES evaluations regarding environmental safety?',
    options: ['Cost efficiency of the project', 'Compliance with health and safety measures', 'Speed of construction', 'Use of local materials'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0028', area: 'C', subTopic: 'agricultural-buildings',
    topic: 'Percentage Weighting', type: 'computation', difficulty: 'easy',
    question: 'A construction project has a total contract amount of ₱5,000,000. If the cost of materials is ₱1,000,000, what is the percentage weight of materials for this project?',
    options: ['20%', '15%', '25%', '30%'],
    correctAnswer: 0,
    solution: {
      given: 'Total Contract Amount = ₱5,000,000; Cost of Materials = ₱1,000,000',
      steps: ['Percentage Weight = (Cost of Materials / Total Contract Amount) * 100', 'Percentage Weight = (₱1,000,000 / ₱5,000,000) * 100 = 20%'],
      formula: 'Percentage Weight = (Cost of Materials / Total Contract Amount) * 100',
      keyConcept: 'Understanding percentage calculation in budget allocation.',
      commonMistakes: ['Calculating without multiplication by 100', 'Using incorrect total contract amount', 'Ignoring currency conversions'],
      extraneousGivens: ['Total contract amount: ₱5,000,000', 'Cost of other construction elements: ₱3,000,000', 'Project duration: 120 days'],
    }
  },
  {
    id: 'llm-c-0029', area: 'C', subTopic: 'agricultural-buildings',
    topic: 'Weighted Ratings', type: 'computation', difficulty: 'average',
    question: 'During a CPES evaluation, a constructor received the following scores: Workmanship - 0.35, Materials - 0.25, Time - 0.10. If this is a horizontal project, calculate the Overall Weighted Rating.',
    options: ['0.60', '0.40', '0.50', '0.45'],
    correctAnswer: 2,
    solution: {
      given: 'Workmanship = 0.35, Materials = 0.25, Time = 0.10',
      steps: ['Overall Weighted Rating = (Workmanship + Materials + Time) * 0.60', 'Overall Weighted Rating = (0.35 + 0.25 + 0.10) * 0.60', 'Overall Weighted Rating = 0.70 * 0.60 = 0.42'],
      formula: 'Overall Weighted Rating = (Sum of scores) * Weight',
      keyConcept: 'Understanding how to compute overall ratings using assigned weights.',
      commonMistakes: ['Using incorrect weights', 'Adding scores incorrectly', 'Multiplying by the wrong factor'],
      extraneousGivens: ['Total duration: 180 days', 'Contract value: ₱4,000,000', 'Extra materials cost: ₱500,000'],
    }
  },
  {
    id: 'llm-c-0030', area: 'C', subTopic: 'agricultural-buildings',
    topic: 'Corrective Action Request', type: 'computation', difficulty: 'hard',
    question: 'A constructor\'s project was evaluated and received a Corrective Action Request (CAR) due to deficiencies. The project had a total budget of ₱2,500,000 and the cost of corrections is ₱300,000. What percentage of the total budget does the CAP represent?',
    options: ['12%', '10%', '15%', '8%'],
    correctAnswer: 0,
    solution: {
      given: 'Total Budget = ₱2,500,000; Cost of Corrections = ₱300,000',
      steps: ['Percentage of CAP = (Cost of Corrections / Total Budget) * 100', 'Percentage of CAP = (₱300,000 / ₱2,500,000) * 100', 'Percentage of CAP = 0.12 * 100 = 12%'],
      formula: 'Percentage of CAP = (Cost of Corrections / Total Budget) * 100',
      keyConcept: 'Basic percentage calculations for budgeting.',
      commonMistakes: ['Using the wrong cost value', 'Forgetting to multiply by 100', 'Not considering the total budget'],
      extraneousGivens: ['Contract duration: 150 days', 'Additional costs for materials: ₱200,000', 'Original bid amount: ₱2,800,000'],
    }
  },
  {
    id: 'llm-c-0031', area: 'C', subTopic: 'agricultural-buildings',
    topic: 'Time Evaluation', type: 'computation', difficulty: 'easy',
    question: 'A constructor is ahead of schedule by 10 days on a project that has a total duration of 120 days. What is the percentage completion rate in terms of time?',
    options: ['92%', '90%', '85%', '95%'],
    correctAnswer: 3,
    solution: {
      given: 'Scheduled Duration = 120 days; Days Ahead = 10 days',
      steps: ['Actual Duration = Scheduled Duration - Days Ahead', 'Actual Duration = 120 - 10 = 110 days', 'Completion Rate = (Actual Duration / Scheduled Duration) * 100', 'Completion Rate = (110 / 120) * 100 = 91.67% ≈ 92%'],
      formula: 'Completion Rate = (Actual Duration / Scheduled Duration) * 100',
      keyConcept: 'Calculating percentage based on remaining project duration.',
      commonMistakes: ['Calculating days incorrectly', 'Using actual duration instead of scheduled', 'Not recognizing rounding issues'],
      extraneousGivens: ['Project cost: ₱3,000,000', 'Material costs: ₱500,000', 'Safety training days: 5 days'],
    }
  },
  {
    id: 'llm-c-0032', area: 'C', subTopic: 'agricultural-buildings',
    topic: 'Evaluation Reporting', type: 'theory', difficulty: 'average',
    question: 'After a project evaluation, when should the CPES Evaluate report be submitted to the concerned Implementing Office?',
    options: ['Within 30 days after evaluation', 'Immediately after evaluation', 'Within 60 days after evaluation', 'Within 15 days after evaluation'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0033', area: 'C', subTopic: 'agricultural-buildings',
    topic: 'Environmental Compliance', type: 'theory', difficulty: 'hard',
    question: 'Which document is crucial for monitoring compliance with environmental safety measures during a construction project?',
    options: ['Construction budget', 'Environmental Impact Assessment', 'Labor compliance forms', 'Safety manual'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0034', area: 'C', subTopic: 'agricultural-buildings',
    topic: 'Project Completion', type: 'theory', difficulty: 'average',
    question: 'What constitutes the \'Defects Liability Period\' as defined in the CPES guidelines?',
    options: ['A period for project design changes', 'One year from project completion to final acceptance', 'A stage to assess project viability', 'The time frame to evaluate constructor bids'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0035', area: 'C', subTopic: 'agricultural-buildings',
    topic: 'Construction Project Management', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of the \'Monitoring Report\' as required by the CPES?',
    options: ['To track project expenses', 'To validate compliance with the CAR', 'To generate project marketing materials', 'To inform the public about project completion'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0036', area: 'C', subTopic: 'agricultural-buildings',
    topic: 'Evaluation Frequency', type: 'theory', difficulty: 'hard',
    question: 'How is the frequency of evaluations determined during project construction according to the CPES guidelines?',
    options: ['Based solely on project budget', 'Based on project size, complexity, and approval by CPES-IU', 'Randomly at the discretion of the constructor', 'Automatically scheduled every month'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0037', area: 'C', subTopic: 'agricultural-buildings',
    topic: 'Performance Evaluations', type: 'theory', difficulty: 'easy',
    question: 'According to CPES, who can be included as Resource Persons/Witnesses during evaluations?',
    options: ['Only government officials', 'Any employee of the constructor', 'Subcontractors involved in the project', 'Project Engineers and consultants knowledgeable about the project'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0038', area: 'C', subTopic: 'agricultural-buildings',
    topic: 'Technical Evaluation', type: 'computation', difficulty: 'average',
    question: 'If a construction project has a total evaluation score of 75 and the maximum possible score is 100, what is the rating percentage?',
    options: ['80%', '75%', '70%', '85%'],
    correctAnswer: 1,
    solution: {
      given: 'Total Score = 75; Maximum Score = 100',
      steps: ['Rating Percentage = (Total Score / Maximum Score) * 100', 'Rating Percentage = (75 / 100) * 100 = 75%'],
      formula: 'Rating Percentage = (Total Score / Maximum Score) * 100',
      keyConcept: 'Understanding the scoring system in evaluations.',
      commonMistakes: ['Confusing score with rating', 'Using incorrect scoring criteria', 'Forgetting to multiply by 100'],
      extraneousGivens: ['Additional project costs: ₱1,000,000', 'Contractor license number: ABC123', 'Project location: Quezon City, Philippines'],
    }
  },
  {
    id: 'llm-c-0039', area: 'C', subTopic: 'agricultural-buildings',
    topic: 'Weight Assignments', type: 'computation', difficulty: 'hard',
    question: 'A CPES evaluator must calculate the overall score from the following performance weights: Workmanship (0.40), Materials (0.30), Time (0.15), ESH (0.07), Deployment (0.05). If the constructor scored 0.35 for Workmanship, 0.25 for Materials, and 0.10 for Time, what is the weighted score?',
    options: ['0.26', '0.32', '0.30', '0.34'],
    correctAnswer: 0,
    solution: {
      given: 'Workmanship = 0.35, Materials = 0.25, Time = 0.10; Weights: Workmanship (0.40), Materials (0.30), Time (0.15), ESH (0.07), Deployment (0.05)',
      steps: ['Weighted Score = (Workmanship * 0.40) + (Materials * 0.30) + (Time * 0.15)', 'Weighted Score = (0.35 * 0.40) + (0.25 * 0.30) + (0.10 * 0.15)', 'Weighted Score = 0.14 + 0.075 + 0.015 = 0.23'],
      formula: 'Weighted Score = (Score1 * Weight1) + (Score2 * Weight2) + (Score3 * Weight3)',
      keyConcept: 'Strengthening understanding of performance evaluations and scoring.',
      commonMistakes: ['Using incorrect weights', 'Forgetting to consider all weights', 'Calculating partial scores only'],
      extraneousGivens: ['Total project duration: 90 days', 'Contract value: ₱2,000,000', 'Number of subcontractors: 5'],
    }
  },
  {
    id: 'llm-c-0040', area: 'C', subTopic: 'structures-agricultural-buildings',
    topic: 'Agricultural Buildings Design', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of including a CPES budget in agricultural building projects according to R.A. 9184?',
    options: ['To ensure environmental compliance', 'To monitor contractor performance', 'To reduce construction costs', 'To enhance aesthetic value'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0041', area: 'C', subTopic: 'structures-agricultural-buildings',
    topic: 'Evaluating Construction Plans', type: 'theory', difficulty: 'average',
    question: 'Which of the following criteria is NOT commonly used in the CPES to evaluate constructor performance during construction?',
    options: ['Workmanship', 'Time', 'Environmental Impact', 'Cost Efficiency'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0042', area: 'C', subTopic: 'structures-agricultural-buildings',
    topic: 'Functionality of Agricultural Structures', type: 'theory', difficulty: 'easy',
    question: 'Why is it important to evaluate the performance of constructors in agricultural structures?',
    options: ['To increase government revenue', 'To ensure safety and quality', 'To shorten project timelines', 'To comply with international standards'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0043', area: 'C', subTopic: 'environment-bioprocess-engineering',
    topic: 'Environmental Regulations', type: 'theory', difficulty: 'hard',
    question: 'Under which Philippine law is the CPES system mandated for use in government infrastructure projects?',
    options: ['Republic Act 10601', 'R.A. 9184', 'Presidential Decree 1746', 'Executive Order 230'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0044', area: 'C', subTopic: 'structures-agricultural-buildings',
    topic: 'Construction Planning', type: 'theory', difficulty: 'average',
    question: 'What is the maximum weight assigned to the workmanship aspect during construction evaluations for vertical projects according to CPES?',
    options: ['0.50', '0.40', '0.30', '0.15'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0045', area: 'C', subTopic: 'structures-agricultural-buildings',
    topic: 'Evaluating Construction Performance', type: 'computation', difficulty: 'average',
    question: 'A contractor is evaluated on a project with a total contract amount of PHP 1,200,000. The workmanship aspect has a percentage weight of 0.40. If the contractor scores 85% for workmanship, what is the weighted score for workmanship in the CPES evaluation? (Note: The cost of materials is irrelevant to this calculation.)',
    options: ['PHP 340,000', 'PHP 408,000', 'PHP 255,000', 'PHP 510,000'],
    correctAnswer: 1,
    solution: {
      given: 'Total Contract Amount = PHP 1,200,000, Percentage Weight for Workmanship = 0.40, Workmanship Score = 85%',
      steps: ['Calculate the weighted score: Weighted Score = Total Contract Amount × Percentage Weight × Workmanship Score = 1,200,000 × 0.40 × 0.85 = PHP 408,000'],
      formula: 'Weighted Score = Total Contract Amount × Percentage Weight × Workmanship Score',
      keyConcept: 'Weighted scores are essential in determining performance ratings in CPES.',
      commonMistakes: ['Calculating total project cost instead of using the percentage weight', 'Forgetting to convert percentage to decimal (85% = 0.85)'],
      extraneousGivens: ['Cost of materials: irrelevant', 'Contract duration: irrelevant', 'Project location: irrelevant'],
    }
  },
  {
    id: 'llm-c-0046', area: 'C', subTopic: 'structures-agricultural-buildings',
    topic: 'Sustainability in Agricultural Structures', type: 'theory', difficulty: 'easy',
    question: 'Which aspect of construction does the CPES emphasize to protect worker health and safety?',
    options: ['Workmanship', 'Materials', 'Environmental, Safety, and Health (ESH)', 'Resource Deployment'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0047', area: 'C', subTopic: 'environment-bioprocess-engineering',
    topic: 'Psychrometrics in Design', type: 'theory', difficulty: 'hard',
    question: 'How does psychrometrics assist in designing agricultural processing facilities in the Philippines?',
    options: ['By determining optimal crop cycles', 'By analyzing humidity for storage conditions', 'By calculating soil moisture levels', 'By estimating labor requirements'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0048', area: 'C', subTopic: 'structures-agricultural-buildings',
    topic: 'Evaluating Infrastructure Projects', type: 'computation', difficulty: 'average',
    question: 'A project to build a rice milling facility has a total contract amount of PHP 2,500,000. The time aspect has a maximum score of 15%. If the contractor completed the project 10 days early, resulting in a score of 90% for time management, what is the weighted score for Time in the CPES evaluation? (Consider the cost of labor as an extraneous given.)',
    options: ['PHP 337,500', 'PHP 225,000', 'PHP 300,000', 'PHP 270,000'],
    correctAnswer: 0,
    solution: {
      given: 'Total Contract Amount = PHP 2,500,000, Time Score = 90%, Maximum Score for Time = 15%',
      steps: ['Calculate the weighted score: Weighted Score = Total Contract Amount × Maximum Score for Time × Time Score = 2,500,000 × 0.15 × 0.90 = PHP 337,500'],
      formula: 'Weighted Score = Total Contract Amount × Maximum Score for Time × Time Score',
      keyConcept: 'Time management is crucial in project evaluations.',
      commonMistakes: ['Using 100% instead of 90% for scoring', 'Miscalculating the percentage weight for time'],
      extraneousGivens: ['Cost of labor: irrelevant', 'Project dimensions: irrelevant', 'Location specifics: irrelevant'],
    }
  },
  {
    id: 'llm-c-0049', area: 'C', subTopic: 'structures-agricultural-buildings',
    topic: 'Corrective Action Plans', type: 'theory', difficulty: 'average',
    question: 'What is the purpose of a Corrective Action Plan (CAP) in the CPES process?',
    options: ['To outline future project designs', 'To address non-conformance findings', 'To propose project expansion plans', 'To increase contractor bids'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0050', area: 'C', subTopic: 'structures-agricultural-buildings',
    topic: 'Monitoring Constructor Performance', type: 'computation', difficulty: 'hard',
    question: 'A contractor\'s performance evaluation rating for a corn processing plant project is calculated based on three evaluations. The scores are 88%, 90%, and 85%. What is the weighted average score for the contractor considering that \'during construction\' evaluations weight 70% and \'upon completion\' evaluations weight 30%? (The project’s location is not relevant for this calculation.)',
    options: ['87.5%', '88.4%', '89.2%', '89.0%'],
    correctAnswer: 1,
    solution: {
      given: 'Scores: 88%, 90%, 85%, Weight for \'during construction\' = 70%, Weight for \'upon completion\' = 30%',
      steps: ['Calculate average score: (0.70 × (88 + 90 + 85) / 3) + (0.30 × 90) = (0.70 × 88.33) + (0.30 × 90) = 61.83 + 27 = 88.4%'],
      formula: 'Weighted Average Score = (Weight_During × Average_Score_During + Weight_Upon × Average_Score_Upon)',
      keyConcept: 'Weighted averages are important to accurately reflect performance.',
      commonMistakes: ['Forgetting to multiply by weights', 'Using wrong scores for calculations'],
      extraneousGivens: ['Project location: irrelevant', 'Type of construction materials: irrelevant'],
    }
  },
  {
    id: 'llm-c-0051', area: 'C', subTopic: 'structures-agricultural-buildings',
    topic: 'Construction Monitoring', type: 'theory', difficulty: 'average',
    question: 'Which of the following is NOT a responsibility of the CPES Evaluator (CPE) during the actual evaluation process?',
    options: ['Identifying spots for evaluation', 'Preparing project financial documents', 'Recording findings in checklists', 'Meeting with resource persons'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0052', area: 'C', subTopic: 'structures-agricultural-buildings',
    topic: 'Evaluating Contractor Performance', type: 'computation', difficulty: 'hard',
    question: 'In a project for constructing an agricultural storage facility, the total contract amount is PHP 3,600,000. The contractor has a workmanship score of 70% which corresponds to the maximum weight of 0.50. What is the weighted score for workmanship? (Assume that the duration of the project is irrelevant.)',
    options: ['PHP 1,260,000', 'PHP 1,050,000', 'PHP 840,000', 'PHP 1,080,000'],
    correctAnswer: 3,
    solution: {
      given: 'Total Contract Amount = PHP 3,600,000, Workmanship Score = 70%, Maximum Weight for Workmanship = 0.50',
      steps: ['Calculate the weighted score: Weighted Score = Total Contract Amount × Maximum Weight for Workmanship × Workmanship Score = 3,600,000 × 0.50 × 0.70 = PHP 1,260,000'],
      formula: 'Weighted Score = Total Contract Amount × Maximum Weight × Score',
      keyConcept: 'Weighted scores help determine contractor performance.',
      commonMistakes: ['Using wrong percentage for the score', 'Misunderstanding the weight of workmanship'],
      extraneousGivens: ['Project duration: irrelevant', 'Cost of utilities: irrelevant'],
    }
  },
  {
    id: 'llm-c-0053', area: 'C', subTopic: 'structures-agricultural-buildings',
    topic: 'CPES Implementation', type: 'theory', difficulty: 'easy',
    question: 'What primary role does the CPES Implementing Unit (IU) serve?',
    options: ['Prepare project budgets', 'Conduct performance evaluations', 'Oversee contractor bidding', 'Manage project timelines'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0054', area: 'C', subTopic: 'environment-bioprocess-engineering',
    topic: 'Environmental Management', type: 'theory', difficulty: 'average',
    question: 'Which agency is responsible for overseeing the implementation of CPES in the Philippines?',
    options: ['Department of Agriculture (DA)', 'National Economic and Development Authority (NEDA)', 'Department of Environment and Natural Resources (DENR)', 'Philippine Contractors Accreditation Board (PCAB)'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0055', area: 'C', subTopic: 'structures-agricultural-buildings',
    topic: 'Safety and Health in Construction', type: 'theory', difficulty: 'average',
    question: 'Which aspect of CPES focuses on ensuring safety and health during construction?',
    options: ['Resources Deployment', 'Environmental, Safety, and Health (ESH)', 'Workmanship', 'Materials'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0056', area: 'C', subTopic: 'structures-agricultural-buildings',
    topic: 'Project Completion Evaluation', type: 'computation', difficulty: 'hard',
    question: 'During the completion evaluation of a coconut processing facility, the contractor\'s final score for workmanship is 75%. If the maximum rating for workmanship is 0.50, what is the weighted score for workmanship at completion? (Note: The total project cost is irrelevant to this calculation.)',
    options: ['PHP 375,000', 'PHP 250,000', 'PHP 225,000', 'PHP 200,000'],
    correctAnswer: 0,
    solution: {
      given: 'Final Workmanship Score = 75%, Maximum Weight for Workmanship = 0.50',
      steps: ['Calculate the weighted score: Weighted Score = Maximum Weight for Workmanship × Workmanship Score = 0.50 × 0.75 = 0.375'],
      formula: 'Weighted Score = Maximum Weight × Score',
      keyConcept: 'Completion evaluations help determine the final performance rating.',
      commonMistakes: ['Calculating based on the entire project cost', 'Forgetting to convert percentage to decimal'],
      extraneousGivens: ['Total project cost: irrelevant', 'Project duration: irrelevant'],
    }
  },
  {
    id: 'llm-c-0057', area: 'C', subTopic: 'structures-agricultural-buildings',
    topic: 'Documentation in Evaluations', type: 'theory', difficulty: 'average',
    question: 'What type of document does the CPES Evaluator (CPE) primarily review before conducting an evaluation?',
    options: ['Marketing reports', 'Investment proposals', 'Contract documents', 'Project financial statements'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0058', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Farm Structures Design', type: 'theory', difficulty: 'average',
    question: 'Which organization is responsible for the accreditation of constructors in the Philippines?',
    options: ['Department of Agriculture (DA)', 'National Economic and Development Authority (NEDA)', 'Philippine Contractors Accreditation Board (PCAB)', 'Department of Trade and Industry (DTI)'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0059', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Farm Structures Design', type: 'theory', difficulty: 'average',
    question: 'What is the maximum rating allowed for workmanship during the evaluation of horizontal agricultural structures?',
    options: ['0.15', '0.30', '0.40', '0.50'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0060', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Farm Structures Design', type: 'theory', difficulty: 'average',
    question: 'In CPES evaluation, what percentage of the overall rating is attributed to the time aspect during project completion?',
    options: ['10%', '30%', '40%', '50%'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0061', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Farm Structures Design', type: 'theory', difficulty: 'hard',
    question: 'What does the Corrective Action Plan (CAP) aim to address in the performance evaluation process?',
    options: ['Increase contractor bids.', 'Plan for future projects.', 'Correct non-conformance findings.', 'Reduce material costs.'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0062', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Farm Structures Design', type: 'computation', difficulty: 'easy',
    question: 'A rice storage facility has a planned construction cost of 1,200,000 PHP, and the total evaluation weight for materials is 30%. If the constructor has rated 0.25 for material quality, what is the total score assigned for materials in this evaluation? Note that the percentage weight is not needed for this calculation, but the planned construction cost is provided.',
    options: ['0.075', '0.075M PHP', '0.30', '0.25'],
    correctAnswer: 0,
    solution: {
      given: 'Total cost = 1,200,000 PHP, Evaluation weight for materials = 30%, Material rating = 0.25.',
      steps: ['Calculate total score for materials: Total score = Material rating × Evaluation weight = 0.25 × 0.30 = 0.075.'],
      formula: 'Total score = Material rating × Evaluation weight.',
      keyConcept: 'The score for materials is derived by multiplying the rating by the assigned weight.',
      commonMistakes: ['Failing to multiply by the percentage weight.', 'Using the total construction cost in the wrong context.'],
      extraneousGivens: ['Total planned construction cost: 1,200,000 PHP.', 'Evaluation weight for materials: 30%.'],
    }
  },
  {
    id: 'llm-c-0063', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Farm Structures Design', type: 'computation', difficulty: 'hard',
    question: 'An agricultural bridge project has a total cost of 2,500,000 PHP. If the workmanship aspect has a maximum weight of 0.40, and the scores awarded during the evaluation are 0.35, what is the weighted score for workmanship? Assume the overall project completion time is not considered for this calculation.',
    options: ['0.140M PHP', '0.080M PHP', '0.100M PHP', '0.120M PHP'],
    correctAnswer: 0,
    solution: {
      given: 'Total cost = 2,500,000 PHP, Weight for workmanship = 0.40, Workmanship score = 0.35.',
      steps: ['Calculate weighted score for workmanship: Weighted score = Workmanship score × Weight = 0.35 × 0.40 = 0.140.', 'Total score assessment: 0.140M PHP.'],
      formula: 'Weighted score = Workmanship score × Weight.',
      keyConcept: 'Weighted scores combine the score value with the maximum weight to represent the overall performance in that aspect.',
      commonMistakes: ['Forgetting to multiply by the weight.', 'Miscalculating the total project cost.'],
      extraneousGivens: ['Total cost = 2,500,000 PHP.', 'Maximum weight for workmanship = 0.40.'],
    }
  },
  {
    id: 'llm-c-0064', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Farm Structures Design', type: 'theory', difficulty: 'easy',
    question: 'Who is responsible for the implementation of corrective action plans as per CPES guidelines?',
    options: ['CPE Leader', 'Constructor’s Project Engineer', 'CIAP', 'PCAB'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0065', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Farm Structures Design', type: 'computation', difficulty: 'hard',
    question: 'For a vertical agricultural project, the maximum rating for materials is 0.20. If a constructor received a score of 0.15 for materials and is working on a total project budget of 3,000,000 PHP, what is the weighted score for materials? Information about the project scope and environmental impact is irrelevant for this calculation.',
    options: ['0.100M PHP', '0.150M PHP', '0.060M PHP', '0.050M PHP'],
    correctAnswer: 0,
    solution: {
      given: 'Total project budget = 3,000,000 PHP, Max rating for materials = 0.20, Materials score = 0.15.',
      steps: ['Calculate weighted score for materials: Weighted score = Materials score × Max rating = 0.15 × 0.20 = 0.030.', 'Convert to relevant format: 0.030M PHP.'],
      formula: 'Weighted score = Materials score × Max rating.',
      keyConcept: 'Understanding how to apply rating scales to overall project budgets helps in evaluating contractor performance effectively.',
      commonMistakes: ['Misunderstanding the weight application.', 'Inadvertently using irrelevant data.'],
      extraneousGivens: ['Information about project scope.', 'Environmental impact data.'],
    }
  },
  {
    id: 'llm-c-0066', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Farm Structures Design', type: 'computation', difficulty: 'easy',
    question: 'An agricultural infrastructure project with a contract amount of 5,000,000 PHP has a time aspect weight of 0.15. If the contractor was found to be three days late on a project with 30 days of planned work, what is the time score from the evaluation? The number of working days is not necessary for this calculation.',
    options: ['0.15', '0.12', '0.10', '0.07'],
    correctAnswer: 1,
    solution: {
      given: 'Contract amount = 5,000,000 PHP, Weight for time = 0.15, Days late = 3, Planned work = 30 days.',
      steps: ['Calculate delay percentage: Delay % = Days late / Planned work = 3 / 30 = 0.10 (10%).', 'Calculate time score: Time score = Weight for time - (Delay % × Maximum score) = 0.15 - (0.10 × 0.15) = 0.15 - 0.015 = 0.135.'],
      formula: 'Time score = Weight for time - (Delay % × Maximum score).',
      keyConcept: 'Scores reflect the contractor\'s adherence to time constraints, significant for overall project evaluation.',
      commonMistakes: ['Confusing days late with quality rating scores.', 'Incorrect calculations on percentage delay.'],
      extraneousGivens: ['Contract amount of 5,000,000 PHP.', 'Planned work days - 30.'],
    }
  },
  {
    id: 'llm-c-0067', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Farm Structures Design', type: 'computation', difficulty: 'hard',
    question: 'A constructor\'s performance evaluation includes a resource deployment score of 0.05 based on the maximum allowable rating. If this is derived from a total of five indicators, how is the average rating calculated? Consider that the total number of indicators is included here; however, project timelines are not relevant.',
    options: ['0.050', '0.015', '0.040', '0.005'],
    correctAnswer: 3,
    solution: {
      given: 'Total resource deployment score = 0.05, Number of indicators = 5.',
      steps: ['Calculate average rating: Average rating = Total score / Number of indicators = 0.05 / 5 = 0.01 (0.005 per indicator).'],
      formula: 'Average rating = Total score / Number of indicators.',
      keyConcept: 'Understanding how to break down scores into indicators helps in precise evaluation.',
      commonMistakes: ['Forgetting to divide by number of indicators.', 'Assuming individual scores.'],
      extraneousGivens: ['Total score of 0.05 doesn\'t change the calculation outcome. Project timelines are non-essential.'],
    }
  },
  {
    id: 'llm-c-0068', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Farm Structures Design', type: 'theory', difficulty: 'average',
    question: 'What action must be taken if a constructor disagrees with the evaluation ratings or corrective action requests presented during CPES?',
    options: ['Immediate project termination.', 'Settle the disagreement through an adjudicating body.', 'Ignore the findings.', 'Accept the findings without question.'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0069', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Farm Structures Design', type: 'computation', difficulty: 'hard',
    question: 'For an irrigation system project built at 4,000,000 PHP, if the environmental, safety and health aspect has a rating of 0.07, what is the total point contribution to the project score based on this rating? Note that the total project duration is not necessary for this calculation.',
    options: ['0.280', '0.160', '0.420', '0.200'],
    correctAnswer: 0,
    solution: {
      given: 'Project budget = 4,000,000 PHP, Rating for ESH = 0.07.',
      steps: ['Calculate point contribution: Total points = Rating × Project budget = 0.07 × 4,000,000 = 280,000.', 'Expressed in M PHP: 0.280.'],
      formula: 'Total points = Rating × Project budget.',
      keyConcept: 'Understanding the conversion from a ratings system to actual currency helps in practical evaluations.',
      commonMistakes: ['Failing to multiply correctly or miscalculating the rating factor.', 'Omitting significant figures.'],
      extraneousGivens: ['Total project duration is not required for the point calculation.'],
    }
  },
  {
    id: 'llm-c-0070', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Farm Structures Design', type: 'theory', difficulty: 'average',
    question: 'The CPES requires an evaluation of both horizontal and vertical projects. What is the weight assigned to environmental, safety, and health for vertical projects?',
    options: ['0.07', '0.05', '0.10', '0.15'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0071', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Farm Structures Design', type: 'computation', difficulty: 'hard',
    question: 'An agricultural building project has a completion rating score of 0.9 during the final evaluation phase. If the overall completion assessment weight is 0.30, what is the final weighted contribution of the completion rating to the total project evaluation? The maximum score for time is not needed for this calculation.',
    options: ['0.27', '0.24', '0.30', '0.15'],
    correctAnswer: 0,
    solution: {
      given: 'Completion rating score = 0.9, Weight for completion = 0.30.',
      steps: ['Calculate final weighted contribution: = Completion rating × Overall weight = 0.9 × 0.30 = 0.27.'],
      formula: 'Final weighted contribution = Completion rating × Overall weight.',
      keyConcept: 'This fits into overall project scoring criteria for performance evaluation.',
      commonMistakes: ['Failing to multiply by the assigned weight.', 'Mixing scores of different aspects.'],
      extraneousGivens: ['Maximum score for time is not relevant to the calculation.'],
    }
  },
  {
    id: 'llm-c-0072', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Farm Structures Design', type: 'theory', difficulty: 'average',
    question: 'What is required from constructors if they face discrepancies in their CPES ratings during evaluations?',
    options: ['They must file a lawsuit.', 'They should prepare a new proposal.', 'They must provide a Corrective Action Plan.', 'They should abandon the project.'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0073', area: 'C', subTopic: 'agricultural-buildings',
    topic: 'Evaluation of Agricultural Structures', type: 'theory', difficulty: 'average',
    question: 'Under the CPES, which document is crucial for determining the eligibility of a constructor for a government project?',
    options: ['Agricultural Production Report', 'CPES Evaluation Form', 'Monthly Market Survey', 'Environmental Compliance Certificate'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0074', area: 'C', subTopic: 'consultation-structures',
    topic: 'Design and Plans of Agricultural Buildings', type: 'theory', difficulty: 'easy',
    question: 'What is a key consideration in the design of a rice processing facility in the Philippines?',
    options: ['The height of the facility to maximize visibility', 'The distance from major roads', 'The environmental impact and compliance with local regulations', 'The aesthetic design to attract tourists'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0075', area: 'C', subTopic: 'roads-bridges',
    topic: 'Farm-to-Market Roads', type: 'theory', difficulty: 'average',
    question: 'What is the maximum weight assigned to the \'Time\' aspect in evaluating a project\'s performance during construction according to CPES?',
    options: ['0.15', '0.20', '0.30', '0.40'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0076', area: 'C', subTopic: 'road-bridges',
    topic: 'Evaluation of Infrastructure', type: 'computation', difficulty: 'hard',
    question: 'A farm-to-market road project has a total cost of PHP 3,000,000. If the \'Time\' aspect in the evaluation is given a percentage weight of 0.30 and the project is completed 10 days late (with a 10% score penalty for each day late), what is the final score for the \'Time\' aspect? (Assume perfect compliance for other aspects.) The project\'s completion time was originally set at 60 days, and the total contract amount is PHP 5,000,000.',
    options: ['0.12', '0.09', '0.15', '0.06'],
    correctAnswer: 1,
    solution: {
      given: 'Total Cost = PHP 3,000,000; Rating Weight = 0.30; Days Late = 10; Total Contract Amount = PHP 5,000,000.',
      steps: ['Calculate initial score: Score = (1 - (0.10 * Days Late)) * Max Score = (1 - (0.10 * 10)) * 0.15 = 0.05.', 'Final score: Final Score = 0.05 * 0.30 = 0.15.'],
      formula: 'Final Score = (1 - (Penalty per day * Days Late)) * Max Score.',
      keyConcept: 'Timely completion affects the overall score of \'Time\' aspect based on delays.',
      commonMistakes: ['Not applying the percentage weight correctly', 'Failing to account for the number of days late', 'Forgetting to multiply with the maximum score'],
      extraneousGivens: ['Total cost: PHP 3,000,000', 'Total Contract Amount: PHP 5,000,000'],
    }
  },
  {
    id: 'llm-c-0077', area: 'C', subTopic: 'construction-management',
    topic: 'Construction Management Techniques', type: 'computation', difficulty: 'hard',
    question: 'A contractor\'s performance is evaluated on five projects with CPES ratings of 0.92, 0.85, 0.78, 0.95, and 0.90. The average CPES rating is multiplied by 100 to get a percentage. If the weight of completed projects is 0.6 and future projects is 0.4, what is the final CPES rating for the contractor if the ratings are adjusted with a 5% increase for completed works?',
    options: ['88.1%', '89.5%', '91.2%', '90.0%'],
    correctAnswer: 2,
    solution: {
      given: 'Ratings: 0.92, 0.85, 0.78, 0.95, 0.90; Weight completed = 0.6; Weight future = 0.4.',
      steps: ['Calculate average rating: Avg = (0.92 + 0.85 + 0.78 + 0.95 + 0.90) / 5 = 0.86.', 'Apply increase: New Avg = Avg + (0.05 * 0.86) = 0.86 + 0.043 = 0.903', 'Calculate final rating: Final Rating = (New Avg * Weight completed) + (Avg * Weight future) = (0.903 * 0.6) + (0.86 * 0.4) = 0.889 + 0.344 = 0.906.'],
      formula: 'Final Rating = (New Avg * Weight completed) + (Avg * Weight future)',
      keyConcept: 'Final ratings depend on completed projects which influence the overall assessment.',
      commonMistakes: ['Not correctly interpreting percentage increases', 'Misunderstanding how weights are applied', 'Calculation errors in averaging ratings'],
      extraneousGivens: ['Weight of future projects: 0.4', '5% increase calculation method'],
    }
  },
  {
    id: 'llm-c-0078', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Agricultural Facilities Design', type: 'theory', difficulty: 'average',
    question: 'Which of the following best practices should be followed in the design of a coconut processing facility to minimize environmental impact?',
    options: ['Maximize the size of the facility for capacity', 'Incorporate waste management systems and energy-efficient technologies', 'Use the cheapest construction materials available', 'Ensure the facility is located far from agricultural areas'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0079', area: 'C', subTopic: 'consultation-structures',
    topic: 'Design Inspection Techniques', type: 'theory', difficulty: 'easy',
    question: 'What is the main role of the Constructor Performance Evaluators (CPE) in CPES?',
    options: ['To approve the funding for construction projects', 'To evaluate the performance of constructors using established criteria', 'To manage the contractor\'s budget and expenses', 'To document all agricultural output from the construction'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0080', area: 'C', subTopic: 'road-bridges',
    topic: 'Farm-to-Market Roads', type: 'computation', difficulty: 'hard',
    question: 'If a farm-to-market road project costs PHP 4,500,000 and has a weight distribution of 0.15 for the \'Time\' aspect, and the project takes 75 days to complete instead of the scheduled 60 days, what will be the penalty score for the \'Time\' aspect? Assume a penalty rate of 1% per day late from the base score of 0.15.',
    options: ['0.12', '0.10', '0.13', '0.14'],
    correctAnswer: 1,
    solution: {
      given: 'Total Cost = PHP 4,500,000; Delay = 15 days; Weight of Time = 0.15; Penalty per day = 0.1%.',
      steps: ['Calculate the penalty for delay: Penalty Score = 0.15 * (0.01 * Days Late) = 0.15 * (0.01 * 15) = 0.15 * 0.15 = 0.0225.', 'Final score = 0.15 - 0.0225 = 0.1275.'],
      formula: 'Final Score = Weight - (Weight * Penalty Rate * Days Late)',
      keyConcept: 'Delays in construction affect penalties that reduce ratings.',
      commonMistakes: ['Not applying the penalty rate correctly', 'Incorrectly calculating the days late', 'Missing to multiply by the weight of the aspect'],
      extraneousGivens: ['Total Project Cost: PHP 4,500,000', 'Total Contract Amount not used in the calculation'],
    }
  },
  {
    id: 'llm-c-0081', area: 'C', subTopic: 'environmental-structures',
    topic: 'Site Assessment', type: 'theory', difficulty: 'average',
    question: 'Which aspect does the Environmental, Safety and Health (ESH) evaluation cover in infrastructure projects?',
    options: ['Cost overruns and supplies', 'Pollution management and worker safety standards', 'Overall project aesthetics', 'Minimal construction time'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0082', area: 'C', subTopic: 'construction-management',
    topic: 'Project Documentation', type: 'theory', difficulty: 'easy',
    question: 'What is one of the required documents that must be reviewed by the CPE during the evaluation process?',
    options: ['Market analysis report', 'Constructor\'s operational set-up and project log book', 'Worker satisfaction survey', 'Contingency funding plan'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0083', area: 'C', subTopic: 'construction-management',
    topic: 'Performance Evaluation System', type: 'theory', difficulty: 'average',
    question: 'What does the \'Defects Liability Period\' signify in construction projects?',
    options: ['The time frame for warranty claims from constructors', 'The period allowed for contractors to finish their projects', 'The time frame for evaluating contractor performance', 'The period after project completion to rectify any faults at no cost'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0084', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Facility Design Principles', type: 'theory', difficulty: 'easy',
    question: 'Which factor is NOT typically considered when designing agricultural buildings?',
    options: ['Natural ventilation', 'Structural integrity', 'Aesthetic appeal for marketing', 'Availability of local building materials'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0085', area: 'C', subTopic: 'road-bridges',
    topic: 'Infrastructure Assessment', type: 'theory', difficulty: 'average',
    question: 'When assessing a bridge, what aspect is critical for its safety evaluation?',
    options: ['The color scheme of the bridge', 'Traffic volume it can support', 'The material used for the bridge deck', 'Compliance with local building codes'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0086', area: 'C', subTopic: 'construction-management',
    topic: 'Project Completion', type: 'computation', difficulty: 'hard',
    question: 'A contractor completes a project with an ‘upon completion’ rating of 0.80. If the weights for the designs are 0.30 for materials and 0.50 for workmanship, and the weighted scores from these aspects derived from this project are 0.15 from materials and 0.40 from workmanship, what will be the total weighted score computed for this project?',
    options: ['0.95', '0.80', '0.65', '0.75'],
    correctAnswer: 0,
    solution: {
      given: 'Rating=0.80; Weight for Materials=0.30; Weight for Workmanship=0.50; Weighted Materials Score=0.15; Weighted Workmanship Score=0.40.',
      steps: ['Calculate Total Weighted Score = (Weighted Score Materials * Weight Materials) + (Weighted Score Workmanship * Weight Workmanship)', 'Total Weighted Score = 0.15 * 0.30 + 0.40 * 0.50 = 0.045 + 0.20 = 0.245.'],
      formula: 'Total Weighted Score = (Weighted Score Aspect1 * Weight Aspect1) + (Weighted Score Aspect2 * Weight Aspect2)',
      keyConcept: 'Understanding the allocation of weights to individual scores is crucial for overall evaluation.',
      commonMistakes: ['Misunderstanding the weight allocation', 'Forgetting to multiply scores by their respective weights', 'Calculating final scores incorrectly'],
      extraneousGivens: ['Total Project Rating: 0.80', 'Not needing to calculate adjusted ratings in this case'],
    }
  },
  {
    id: 'llm-c-0087', area: 'C', subTopic: 'environmental-structures',
    topic: 'Environmental Assessment', type: 'theory', difficulty: 'easy',
    question: 'What is one critical feature that must be included in the planning phase of any agricultural project under CPES guidelines?',
    options: ['Completion time estimates', 'Environmental impact assessment', 'Construction site layout', 'Marketing strategies'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0088', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Agricultural Buildings', type: 'theory', difficulty: 'average',
    question: 'What is the purpose of including a Corrective Action Plan (CAP) in contractor evaluations?',
    options: ['To reward constructors for timely deliveries', 'To outline improvements needed for non-compliance issues', 'To finalize the budget for future projects', 'To track changes in project specification'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0089', area: 'C', subTopic: 'agricultural-buildings-structures',
    topic: 'Design Evaluation', type: 'theory', difficulty: 'average',
    question: 'Which of the following is NOT a criterion used in evaluating the performance of constructors during the construction of agricultural buildings?',
    options: ['Workmanship', 'Environmental safety', 'Cost of materials', 'Timeliness'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0090', area: 'C', subTopic: 'agricultural-buildings-structures',
    topic: 'CPES Guidelines', type: 'theory', difficulty: 'hard',
    question: 'According to CPES guidelines, what is the maximum rating for the aspect of materials during the evaluation of a construction project?',
    options: ['0.30', '0.50', '0.20', '0.40'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0091', area: 'C', subTopic: 'agricultural-buildings-structures',
    topic: 'Project Monitoring', type: 'theory', difficulty: 'average',
    question: 'What role does the CPES Implementing Unit (IU) play in government agricultural infrastructure projects?',
    options: ['They provide funding for construction', 'They supervise and implement the CPES', 'They evaluate farmer performance', 'They manage agricultural pricing'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0092', area: 'C', subTopic: 'agricultural-buildings-structures',
    topic: 'Resource Deployment', type: 'theory', difficulty: 'easy',
    question: 'What does \'resources deployment\' refer to in the context of CPES evaluations?',
    options: ['Use of land resources for agricultural purposes', 'Timely provision of necessary materials, equipment, and manpower', 'Deployment of irrigation systems', 'Installation of farming equipment'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0093', area: 'C', subTopic: 'agricultural-buildings-structures',
    topic: 'Environmental Safety', type: 'theory', difficulty: 'average',
    question: 'Which aspect of CPES evaluation focuses on the constructor\'s adherence to safety and health measures during agricultural construction?',
    options: ['Workmanship', 'Environmental, Safety and Health', 'Resources Deployment', 'Timeliness'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0094', area: 'C', subTopic: 'agricultural-buildings-structures',
    topic: 'Evaluation Form', type: 'theory', difficulty: 'hard',
    question: 'What is the purpose of the CPES Evaluation Form in agricultural infrastructure projects?',
    options: ['To track the funding sources', 'To document the agricultural yield', 'To assess and rate constructor performance', 'To plan future agricultural projects'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0095', area: 'C', subTopic: 'agricultural-buildings-structures',
    topic: 'Time Management', type: 'theory', difficulty: 'average',
    question: 'How is the \'Time\' aspect rated in a CPES evaluation?',
    options: ['Based on contractor’s compliance with local laws', 'By comparing actual completion time to the scheduled time', 'On the basis of material quality', 'Through feedback from workers'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0096', area: 'C', subTopic: 'agricultural-buildings-structures',
    topic: 'Rating System', type: 'theory', difficulty: 'easy',
    question: 'What range of CPES rating indicates \'Outstanding\' performance?',
    options: ['> 89%', '> 96%', '> 75%', '< 75%'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0097', area: 'C', subTopic: 'agricultural-buildings-structures',
    topic: 'Construction Planning', type: 'theory', difficulty: 'hard',
    question: 'Which Philippine agency is responsible for the accreditation of construction contractors under CPES?',
    options: ['Department of Agriculture (DA)', 'National Economic and Development Authority (NEDA)', 'Philippine Contractors Accreditation Board (PCAB)', 'Department of Environment and Natural Resources (DENR)'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0098', area: 'C', subTopic: 'agricultural-buildings-structures',
    topic: 'Weighted Ratings', type: 'computation', difficulty: 'hard',
    question: 'A contractor\'s performance was rated with a score of 0.35 for workmanship, 0.25 for materials, and 0.10 for time during construction of an irrigation system. What will be the overall \'During Construction\' Weighted Rating, assuming it follows the 60% weight for horizontal projects? The total contract amount is PHP 1,200,000 and the extraneous given details include a project duration of 150 days and a completion delay of 15 days.',
    options: ['0.30', '0.35', '0.39', '0.40'],
    correctAnswer: 2,
    solution: {
      given: 'Workmanship score = 0.35, Materials score = 0.25, Time score = 0.10, Weight = 60%',
      steps: ['Calculate total score: Total Score = 0.35 + 0.25 + 0.10 = 0.70', 'Calculate the \'During Construction\' Weighted Rating: 0.70 * 60% = 0.42'],
      formula: 'Weighted Rating = Total Score * Weight',
      keyConcept: 'Overall ratings are calculated by multiplying the total score by the respective weight.',
      commonMistakes: ['Calculating with the wrong weight percentage', 'Forgetting to sum scores correctly', 'Confusing during construction scores with upon completion scores'],
      extraneousGivens: ['Project duration: 150 days', 'Completion delay: 15 days'],
    }
  },
  {
    id: 'llm-c-0099', area: 'C', subTopic: 'agricultural-buildings-structures',
    topic: 'Evaluation Reporting', type: 'computation', difficulty: 'hard',
    question: 'An agricultural project has a total contract amount of PHP 2,000,000 and the contractor received scores of 0.45 for workmanship, 0.15 for time, and 0.20 for materials upon completion. What is the overall \'Upon Completion\' Weighted Rating using the 40% weight for horizontal projects? The extraneous given values include a project budget of PHP 3,000,000 and a contractor\'s profit margin of 15%.',
    options: ['0.25', '0.60', '0.30', '0.40'],
    correctAnswer: 2,
    solution: {
      given: 'Total contract amount = PHP 2,000,000, Workmanship score = 0.45, Time score = 0.15, Materials score = 0.20, Weight = 40%',
      steps: ['Calculate total score: Total Score = 0.45 + 0.15 + 0.20 = 0.80', 'Calculate the \'Upon Completion\' Weighted Rating: 0.80 * 40% = 0.32'],
      formula: 'Weighted Rating = Total Score * Weight',
      keyConcept: 'Weighted ratings help summarize performance in accordance with established criteria.',
      commonMistakes: ['Using the wrong percentage for calculation', 'Overlooking the need to combine scores correctly', 'Confusing different phases of the project evaluation'],
      extraneousGivens: ['Project budget: PHP 3,000,000', 'Profit margin: 15%'],
    }
  },
  {
    id: 'llm-c-0100', area: 'C', subTopic: 'agricultural-buildings-structures',
    topic: 'Contractor Compliance', type: 'theory', difficulty: 'average',
    question: 'If a contractor fails to correct non-conformance findings as identified by the CPE, what might happen according to CPES guidelines?',
    options: ['They may receive a funding penalty.', 'They can be banned from future contracts.', 'They will be required to submit a new CAP.', 'Their ratings will automatically improve.'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0101', area: 'C', subTopic: 'agricultural-buildings-structures',
    topic: 'Documentation Requirements', type: 'theory', difficulty: 'easy',
    question: 'What is one of the key documents that must be submitted by the contractor\'s project engineer during CPES evaluations?',
    options: ['Project construction budget', 'List of crop yields', 'Project log book', 'Environmental impact assessment'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0102', area: 'C', subTopic: 'agricultural-buildings-structures',
    topic: 'Evaluation Frequency', type: 'theory', difficulty: 'average',
    question: 'How often are agricultural projects subjected to evaluation according to CPES guidelines?',
    options: ['Once every year', 'At least twice during the construction phase', 'Only upon completion', 'Monthly reviews'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0103', area: 'C', subTopic: 'agricultural-buildings-structures',
    topic: 'Evaluation Checklists', type: 'theory', difficulty: 'hard',
    question: 'Which checklist aspect assesses the provision of facilities such as sanitary and on-site office facilities by the constructor?',
    options: ['Workmanship', 'Materials', 'Facilities', 'Time'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0104', area: 'C', subTopic: 'agricultural-buildings-structures',
    topic: 'Overall CPES Rating', type: 'computation', difficulty: 'hard',
    question: 'A contractor has scored 0.45 during construction and 0.35 upon completion. If the project is a vertical one, what will be the overall CPES rating? Remember to apply a weight of 70% for during construction and 30% for upon completion. Excessive information includes the project\'s initial budget of PHP 1,500,000 and material costs of PHP 600,000.',
    options: ['0.42', '0.39', '0.40', '0.44'],
    correctAnswer: 3,
    solution: {
      given: 'During construction score = 0.45, Upon completion score = 0.35, Weight for construction = 70%, Weight for completion = 30%',
      steps: ['Calculate Overall CPES Rating: (0.45 * 70%) + (0.35 * 30%) = 0.315 + 0.105 = 0.42'],
      formula: 'Overall Rating = (Score (During Construction) * Weight (Construction)) + (Score (Upon Completion) * Weight (Completion))',
      keyConcept: 'CPES ratings combine weighted scores to determine overall performance.',
      commonMistakes: ['Forgetting the weights for each phase', 'Miscalculating the scores for either phase', 'Not summing the weighted scores correctly'],
      extraneousGivens: ['Initial budget: PHP 1,500,000', 'Material costs: PHP 600,000'],
    }
  },
  {
    id: 'llm-c-0105', area: 'C', subTopic: 'agricultural-buildings-structures',
    topic: 'CPES Implementation', type: 'theory', difficulty: 'hard',
    question: 'What happens if a contractor\'s performance rating falls below 75% according to CPES standards?',
    options: ['They are rewarded with bonus projects.', 'They may be subjected to penalties or further evaluation.', 'They automatically qualify for future projects.', 'They receive a subsidy from the government.'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0106', area: 'C', subTopic: 'agricultural-buildings-structures',
    topic: 'Evaluation Documentation', type: 'theory', difficulty: 'easy',
    question: 'What type of documentation is crucial for validating contractor performance during CPES evaluations?',
    options: ['Financial reports', 'Photographic evidence', 'Material receipts', 'Environmental assessments'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0107', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Construction Performance Evaluation', type: 'theory', difficulty: 'easy',
    question: 'What is the purpose of the Constructors’ Performance Evaluation System (CPES) as outlined by the NEDA?',
    options: ['To substitute the need for licenses for constructors', 'To evaluate the performance of contractors involved in infrastructure projects', 'To reduce costs in construction projects', 'To eliminate the need for project supervision'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'CPES provides a systematic evaluation of contractor performance to ensure quality in infrastructure projects.',
      commonMistakes: ['Confusing CPES with license requirements', 'Misunderstanding the role of CPES in reducing costs', 'Overlooking the importance of project supervision'],
      
    }
  },
  {
    id: 'llm-c-0108', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Evaluation Criteria', type: 'theory', difficulty: 'average',
    question: 'Which of the following criteria has the highest maximum rating for performance evaluation during construction?',
    options: ['Workmanship', 'Time', 'Environmental, Safety and Health (ESH)', 'Materials'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: 'Workmanship is critical in the evaluation and assigned the highest weight during construction phases.',
      
      
    }
  },
  {
    id: 'llm-c-0109', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Project Timing and Evaluation', type: 'computation', difficulty: 'hard',
    question: 'A construction project has a contract amount of 5 million PHP. If the maximum score for time is 15% and the project is delayed by 20%, what is the score for the time aspect? The construction was scheduled to start on March 1, 2023, and completed on June 30, 2023. Environmental assessments cost 500,000 PHP, and materials amounted to 3 million PHP. What is the score for the time aspect?',
    options: ['10.5', '11.5', '12.0', '13.0'],
    correctAnswer: 0,
    solution: {
      given: 'Contract amount = 5 million PHP, Delay = 20%, Max score for time = 15%',
      steps: ['Score = Max score - (Delay percentage × Max score) = 15 - (20% × 15) = 15 - 3 = 12', 'This is adjusted based on project specifics in evaluation.'],
      formula: 'Score = Max score - (Delay percentage × Max score)',
      keyConcept: 'Understanding how delays impact evaluation scores is critical in infrastructure project assessments.',
      commonMistakes: ['Confusing project costs with evaluation scores', 'Incorrectly applying the percentage of delay', 'Not utilizing maximum score adjustments'],
      extraneousGivens: ['Environmental assessments cost: 500,000 PHP', 'Materials cost: 3 million PHP'],
    }
  },
  {
    id: 'llm-c-0110', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'CPES Implementation', type: 'theory', difficulty: 'easy',
    question: 'What is the minimum qualification required for CPES Evaluators (CPE) according to CPES guidelines?',
    options: ['Must have a Master’s Degree in Engineering', 'Must have at least 10 years of construction experience', 'Must be a licensed engineer or architect with at least 5 years of experience', 'No specific qualifications are required'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: 'CPES evaluators need specific licenses and experience to ensure qualified assessments.',
      
      
    }
  },
  {
    id: 'llm-c-0111', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Corrective Action Plans', type: 'theory', difficulty: 'average',
    question: 'What does a Corrective Action Plan (CAP) entail?',
    options: ['A proposal for the contractor to revise their bids', 'A set of actions planned to correct non-conformance findings', 'A request for additional funding to complete the project', 'A standard response to all contractor evaluations'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'CAPs are essential for addressing issues found during evaluations to improve performance.',
      
      
    }
  },
  {
    id: 'llm-c-0112', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Percentage Weights Evaluation', type: 'computation', difficulty: 'hard',
    question: 'For a project costing 10 million PHP, if the maximum ratings are Workmanship: 0.40, Materials: 0.30, Time: 0.15, Facilities: 0.03, and ESH: 0.07, what is the total relative score if Workmanship is rated 0.35, Materials: 0.20, and Time: 0.10? Data for additional reports amounted to 400,000 PHP, and projected profit is estimated to be 1 million PHP. Calculate the total weighted rating.',
    options: ['4.49', '4.32', '4.22', '4.07'],
    correctAnswer: 1,
    solution: {
      given: 'Total project amount = 10 million PHP, Max weights = {W: 0.40, M: 0.30, T: 0.15, F: 0.03, ESH: 0.07}, Ratings = {W: 0.35, M: 0.20, T: 0.10}',
      steps: ['Total weight = 0.35 * 0.40 + 0.20 * 0.30 + 0.10 * 0.15 = 0.14 + 0.06 + 0.015 = 0.205', 'Total = 0.205 * 100 = 20.5 (sum for complete scoring)'],
      formula: 'Total weight = W_rating * W_weight + M_rating * M_weight + T_rating * T_weight',
      keyConcept: 'Understanding the total scoring system in CPES evaluation helps manage contractor performance.',
      commonMistakes: ['Confusing total project amount with scores', 'Incorrectly applying weights based on project phase', 'Omitting data reporting costs'],
      extraneousGivens: ['Data for additional reports: 400,000 PHP', 'Projected profit: 1 million PHP'],
    }
  },
  {
    id: 'llm-c-0113', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Construction Project Management', type: 'theory', difficulty: 'average',
    question: 'What document is crucial for tracking overall project progress as per CPES guidelines?',
    options: ['Construction contracts', 'Project log books', 'Approved construction program', 'Financial reports'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: 'The approved construction program ensures that the project adheres to timelines and specifications.',
      
      
    }
  },
  {
    id: 'llm-c-0114', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Evaluation Frequency', type: 'theory', difficulty: 'easy',
    question: 'How many evaluations must be performed for projects lasting more than 90 calendar days under CPES?',
    options: ['At least one evaluation', 'At least two evaluations', 'At least three evaluations', 'No evaluations required'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'Projects exceeding 90 days require a stricter evaluation regime to maintain performance quality.',
      
      
    }
  },
  {
    id: 'llm-c-0115', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'CPES Reporting', type: 'computation', difficulty: 'hard',
    question: 'A CPE is tasked to submit reports within 30 days after evaluation. If they evaluated 25 projects, and for each project reported 2 CARs, how many reports in total should the CPE submit? Assume the construction costs were evaluated at 12 million PHP. What is the total reporting requirement?',
    options: ['25', '50', '75', '100'],
    correctAnswer: 1,
    solution: {
      given: 'Number of projects = 25, CAR per project = 2',
      steps: ['Total reports = number of projects + (CAR per project * number of projects) = 25 + (2 * 25) = 75 reports.'],
      formula: 'Total reports = Projects + (CARs per project * Projects)',
      keyConcept: 'Understanding reporting requirements is essential for compliance in CPES.',
      commonMistakes: ['Miscounting the total number of projects', 'Forgetting to multiply CARs by project count', 'Confusing CARs with regular reports'],
      extraneousGivens: ['Construction costs evaluated at: 12 million PHP'],
    }
  },
  {
    id: 'llm-c-0116', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Environmental Standards in Construction', type: 'theory', difficulty: 'average',
    question: 'What is the role of the environmental, safety, and health (ESH) component in the CPES evaluation?',
    options: ['To ensure cost minimization', 'To evaluate the effectiveness of project management', 'To measure compliance with safety regulations and environmental standards', 'To assess the aesthetic appeal of the project'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: 'ESH compliance is crucial for ensuring safe and environmentally friendly practices in construction.',
      
      
    }
  },
  {
    id: 'llm-c-0117', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Project Evaluation Criteria', type: 'computation', difficulty: 'hard',
    question: 'If a horizontal project has total contract amount of 8 million PHP and the weighted rating for workmanship is 0.35, materials is 0.25, and time is 0.10, how do you calculate the overall rating? Assume all ratings follow their respective maximum weight percentages: workmanship at 0.40, materials at 0.30, time at 0.15, ESH at 0.07, and facilities at 0.03. Reported profits are projected at 1.2 million PHP. What is the overall rating?',
    options: ['70.5', '74.5', '77.5', '80.5'],
    correctAnswer: 2,
    solution: {
      given: 'Contract amount = 8 million PHP, Ratings: W=0.35, M=0.25, T=0.10',
      steps: ['Total = (0.35 * 0.40) + (0.25 * 0.30) + (0.10 * 0.15) + (0.07 * 1) = 0.14 + 0.075 + 0.015 + 0.07 + 0.01 = 0.40 (summary score)'],
      formula: 'Overall rating = SUM(weights * ratings)',
      keyConcept: 'Correct score summation is key to accurate performance evaluation.',
      commonMistakes: ['Misunderstanding weight percentages', 'Forgetting facility weights', 'Incorrect rating application'],
      extraneousGivens: ['Projected profits: 1.2 million PHP'],
    }
  },
  {
    id: 'llm-c-0118', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Behavior of Construction Materials', type: 'theory', difficulty: 'average',
    question: 'What is assessed during the materials aspect of CPES evaluations?',
    options: ['Only the quality of materials used', 'Quality, quantity, and type of materials used', 'The transportation costs of materials', 'The supplier\'s reputation'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'A comprehensive assessment of materials ensures that constructions meet quality standards.',
      
      
    }
  },
  {
    id: 'llm-c-0119', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Finalization of Evaluation Reports', type: 'computation', difficulty: 'hard',
    question: 'At project completion, if the CPE identified that 80% of the evaluated work items meet standards and assigned a maximum of 1.0 for workmanship and 0.5 for materials out of 1.0. Calculate the final evaluation rating weighted for 40%. Use adjustments for outstanding work at 90% of original cost. What is the final weight rating?',
    options: ['100.0', '90.0', '80.0', '75.0'],
    correctAnswer: 1,
    solution: {
      given: 'Workmanship score = 0.80, Materials score = 0.50',
      steps: ['Final evaluation weight = (Workmanship score + Materials score) / Total Weight * 100 = (0.80 + 0.5) / 1 * 100 = 90.0 / 100.'],
      formula: 'Final weight = SUM(scores) / Total possible * 100',
      keyConcept: 'Understanding weight adjustment calculations is vital for accurate performance assessments.',
      commonMistakes: ['Using incorrect weight calculations', 'Overlooking maximum possible scores', 'Failing to accurately sum ratings'],
      extraneousGivens: ['Outstanding work adjustments: 90% of original cost'],
    }
  },
  {
    id: 'llm-c-0120', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Construction Documentation', type: 'theory', difficulty: 'easy',
    question: 'What kind of documentation must the constructor provide for CPES evaluation?',
    options: ['Only financial records', 'Only project completion certificates', 'Various tests and material quality control documents', 'None, it\'s optional'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: 'Proper documentation is essential for verifying performance compliance and project success.',
      
      
    }
  },
  {
    id: 'llm-c-0121', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'CPES Functionality', type: 'theory', difficulty: 'average',
    question: 'What is the main function of the CPES Implementing Unit (IU)?',
    options: ['To provide final project funding', 'To oversee the evaluation process of constructors', 'To construct the infrastructure directly', 'To approve contracts and bids'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'The IU plays a critical role in ensuring the integrity and accuracy of the CPES process.',
      
      
    }
  },
  {
    id: 'llm-c-0122', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Final Project Evaluation', type: 'computation', difficulty: 'hard',
    question: 'If the total project cost is 15 million PHP and 80% of the completed works are compliant with the standards, with a maximum weight of 30% assigned to workmanship, calculate the total rating for the workmanship aspect. Assume the other aspects rated at maximum scores do not affect this rating. Materials are valued at 5 million PHP and environmental reports cost is 250,000 PHP. What would be the total rating?',
    options: ['80.0', '70.0', '75.0', '65.0'],
    correctAnswer: 0,
    solution: {
      given: 'Total project = 15 million PHP, Weighted compliance = 80%',
      steps: ['Total rating for workmanship = 0.80 * 15 million = 12 million PHP (conformity score calculation)'],
      formula: 'Total rating = Weighted compliance * Total cost',
      keyConcept: 'Understanding how to evaluate adjusted ratings in construction compliance is essential.',
      commonMistakes: ['Incorrect percentage calculations', 'Assuming only one aspect affects ratings', 'Misunderstanding material costs'],
      extraneousGivens: ['Materials cost: 5 million PHP', 'Environmental reports cost: 250,000 PHP'],
    }
  },
  {
    id: 'llm-c-0123', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Performance Evaluation in Agricultural Construction', type: 'theory', difficulty: 'easy',
    question: 'What is the purpose of the Constructors\' Performance Evaluation System (CPES) as mandated by the Philippine Government Procurement Reform Act?',
    options: ['To monitor construction costing only', 'To evaluate contractor performance for government infrastructure projects', 'To reduce the time of project completion', 'To provide financial assistance to contractors'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0124', area: 'C', subTopic: 'agricultural-structures',
    topic: 'CPES Implementation', type: 'theory', difficulty: 'average',
    question: 'Which government authority is responsible for the accreditation of constructors under the CPES?',
    options: ['National Economic and Development Authority (NEDA)', 'Construction Industry Authority of the Philippines (CIAP)', 'Department of Agriculture (DA)', 'Philippine Contractors Accreditation Board (PCAB)'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0125', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Evaluation Criteria', type: 'theory', difficulty: 'average',
    question: 'What is the maximum weight assigned to the workmanship aspect during the construction phase for horizontal projects under CPES?',
    options: ['0.50', '0.40', '0.30', '0.15'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0126', area: 'C', subTopic: 'agricultural-structures',
    topic: 'CPES Procedure', type: 'theory', difficulty: 'hard',
    question: 'Under CPES, which document is essential for consolidating the findings of the evaluators?',
    options: ['Constructor’s Performance Summary Report', 'Contractor\'s financial statements', 'Project marketing plan', 'Safety compliance documents'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0127', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Evaluation Process', type: 'theory', difficulty: 'easy',
    question: 'What is the role of the Corrective Action Request (CAR) in the CPES?',
    options: ['To request for additional funding', 'To document non-conformance findings', 'To provide project completion certificates', 'To assess contractor bids'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0128', area: 'C', subTopic: 'agricultural-structures',
    topic: 'CPES Implementing Unit', type: 'theory', difficulty: 'easy',
    question: 'What is the function of the CPES Implementing Unit (IU)?',
    options: ['To conduct monthly financial audits', 'To oversee CPES implementation and evaluations', 'To handle contractor appeals', 'To manage material supplies for projects'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0129', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Performance Rating', type: 'theory', difficulty: 'average',
    question: 'What weight is assigned to time in the evaluation during the construction phase of vertical projects under CPES?',
    options: ['0.15', '0.20', '0.30', '0.40'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0130', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Documentation', type: 'theory', difficulty: 'hard',
    question: 'Which of the following is NOT a document required from the constructor’s project engineer for CPES evaluation?',
    options: ['Updated records of tests/results', 'Project log book', 'Financial statements', 'Other related reports'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0131', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Evaluation Forms', type: 'theory', difficulty: 'easy',
    question: 'What does the CPES Evaluation Form Part II focus on during site visits?',
    options: ['Financial analysis', 'Rating sheets upon completion', 'Rating during the construction phase', 'Environmental compliance'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0132', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Performance Evaluation', type: 'computation', difficulty: 'average',
    question: 'A contractor undertakes an irrigation project with a contract amount of PHP 1,500,000. If the workmanship is rated at 0.32, materials at 0.25, and time at 0.10, what is the weighted rating for the construction phase? Note that the weights for workmanship, materials, and time are 0.40, 0.30, and 0.15 respectively. The project has had 180 days of continuous work, with an original timeline of 200 days.',
    options: ['0.35', '0.28', '0.32', '0.30'],
    correctAnswer: 0,
    solution: {
      given: 'Contract amount = PHP 1,500,000; Workmanship rating = 0.32; Materials rating = 0.25; Time rating = 0.10',
      steps: ['Compute Weighted Score: (0.32 * 0.40) + (0.25 * 0.30) + (0.10 * 0.15)', 'Weighted Score = 0.128 + 0.075 + 0.015 = 0.218', 'Weighted Rating = (Weighted Score / 0.85) * 100 = 0.35'],
      formula: 'Weighted Rating = (Workmanship * Weight_1) + (Materials * Weight_2) + (Time * Weight_3)',
      keyConcept: 'This formula assesses the overall performance based on weighted scores for different components of construction.',
      commonMistakes: ['Using an incorrect weight for time aspect', 'Confusing the rating with total score', 'Not calculating the overall weighted score correctly'],
      extraneousGivens: ['Contract amount: PHP 1,500,000', 'Duration of project: 180 days', 'Original timeline: 200 days'],
    }
  },
  {
    id: 'llm-c-0133', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Performance Evaluation', type: 'computation', difficulty: 'hard',
    question: 'For a coconut processing facility, the total contract amount is PHP 800,000. During an evaluation, the CPE finds the following ratings: Workmanship = 0.45, Materials = 0.38, and Time = 0.12. Calculate the overall weighted rating during construction, where the weights are 0.40 for workmanship, 0.30 for materials, and 0.15 for time. The evaluation also needs to account for an environmental compliance rating of 0.05 in a category that has a weight of 0.07.',
    options: ['0.39', '0.31', '0.40', '0.37'],
    correctAnswer: 0,
    solution: {
      given: 'Contract Amount = PHP 800,000; Workmanship = 0.45; Materials = 0.38; Time = 0.12; Environmental Compliance = 0.05',
      steps: ['Compute individual contributions: (0.45 * 0.40) + (0.38 * 0.30) + (0.12 * 0.15) + (0.05 * 0.07)', 'Total Contribution = 0.18 + 0.114 + 0.018 + 0.0035 = 0.3155', 'Overall Weighted Rating = 0.3155 / (0.40 + 0.30 + 0.15 + 0.07) = 0.39'],
      formula: 'Overall Rating = (Workmanship * Weight_1) + (Materials * Weight_2) + (Time * Weight_3) + (Environmental * Weight_4)',
      keyConcept: 'Understanding the distribution of weights helps in calculating the overall performance rating effectively.',
      commonMistakes: ['Missing the weight of environmental compliance', 'Forgetting to normalize the overall rating', 'Using incorrect ratings in calculations'],
      extraneousGivens: ['Total contract amount: PHP 800,000', 'Environmental category weight: 0.07'],
    }
  },
  {
    id: 'llm-c-0134', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Evaluation Weighting', type: 'computation', difficulty: 'average',
    question: 'In a recent bridge project, the evaluation was conducted, and the CPE assigned weights: Workmanship = 0.35, Materials = 0.25, and Time = 0.10. Given the total contract amount of PHP 1,200,000, calculate the weighted score for workmanship if the actual performance rating was 0.38.',
    options: ['0.049', '0.045', '0.038', '0.035'],
    correctAnswer: 0,
    solution: {
      given: 'Total Contract Amount = PHP 1,200,000; Workmanship Weight = 0.35; Performance Rating = 0.38',
      steps: ['Weighted Score = Workmanship Weight * Performance Rating', 'Weighted Score = 0.35 * 0.38 = 0.133', 'Convert to score based on total cost: Score = Weighted Score / Total Contract Amount = 0.045'],
      formula: 'Weighted Score = Weight * Rating',
      keyConcept: 'This calculation aids in determining how much impact the performance rating has on the overall project evaluation.',
      commonMistakes: ['Dividing instead of multiplying for the weighted score', 'Incorrectly identifying which aspect to evaluate', 'Forgetting to multiply by the contract weight'],
      extraneousGivens: ['Total contract amount: PHP 1,200,000'],
    }
  },
  {
    id: 'llm-c-0135', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Time Evaluation', type: 'computation', difficulty: 'hard',
    question: 'A contractor is evaluated for a rice milling facility after 120 days but was supposed to complete it in 100 days. If the rating for time is observed as 0.10 with a weight of 0.15 in the CPES rating, calculate the score for time. Note: The original contract amount is PHP 900,000, and the contractor submitted an extension request for 10 days which was approved.',
    options: ['0.08', '0.06', '0.10', '0.12'],
    correctAnswer: 0,
    solution: {
      given: 'Completion days = 120; Original days = 100; Weight = 0.15; Time Rating = 0.10; Contract Amount = PHP 900,000',
      steps: ['Calculate the delay: Delay = Completion days - Original days = 120 - 100 = 20 days', 'Adjusted Time Score = 0.10 - (Delay/Extension) = 0.10 - (20/10) = 0.08', 'Weight Score = Adjusted Score * Weight = 0.08 * 0.15 = 0.012'],
      formula: 'Score = (Time Rating - (Delay / Extension)) * Weight',
      keyConcept: 'The impact of delay is crucial in determining the performance for the time aspect of evaluation.',
      commonMistakes: ['Not adjusting for approved extensions', 'Calculating delay incorrectly', 'Forgetting to apply the weight to the score'],
      extraneousGivens: ['Original contract amount: PHP 900,000', 'Extension request: 10 days was approved.'],
    }
  },
  {
    id: 'llm-c-0136', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Construction Facilities Evaluation', type: 'computation', difficulty: 'average',
    question: 'If the facilities setup by a contractor for a corn storage facility project are rated 0.02 with a weight of 0.03, what would be the overall score for facilities in the construction evaluation? The total project cost is PHP 500,000.',
    options: ['0.015', '0.020', '0.025', '0.030'],
    correctAnswer: 0,
    solution: {
      given: 'Facilities Rating = 0.02; Weight = 0.03; Contract Amount = PHP 500,000',
      steps: ['Facilities Score = Facilities Rating * Weight', 'Facilities Score = 0.02 * 0.03 = 0.0006', 'Overall Score = Total Project Cost * Facilities Score = PHP 500,000 * 0.0006 = 0.030'],
      formula: 'Overall Score = Facilities Rating * Weight',
      keyConcept: 'Understanding the relationship between facility setup and the overall contract influences overall project evaluation.',
      commonMistakes: ['Confusing rating with score', 'Forgetting to multiply by the contract amount', 'Not accounting for the weight correctly'],
      extraneousGivens: ['Total project cost: PHP 500,000'],
    }
  },
  {
    id: 'llm-c-0137', area: 'C', subTopic: 'agricultural-structures',
    topic: 'CPES Guidelines Review', type: 'theory', difficulty: 'average',
    question: 'Under what condition can the contractor\'s CPES rating be considered final and binding?',
    options: ['If the contractor is present during the evaluation', 'If a dispute arises about the evaluation', 'If the contractor fails to attend despite notification', 'If the contractor agrees with the CPE findings'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0138', area: 'C', subTopic: 'agricultural-structures',
    topic: 'CPES Evaluation Process', type: 'theory', difficulty: 'hard',
    question: 'What is the significance of appointing third-party evaluators within the CPE structure?',
    options: ['To ensure partiality in the evaluation', 'To enhance objectivity and credibility', 'To reduce costs of evaluation', 'To accelerate the evaluation process'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0139', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Contractor Compliance Monitoring', type: 'theory', difficulty: 'average',
    question: 'How often should compliance monitoring reports be submitted to ensure adherence to the Corrective Action Request (CAR)?',
    options: ['Monthly', 'Biannually', 'Quarterly', 'Weekly'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0140', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Monitoring Evaluations and Reports', type: 'theory', difficulty: 'average',
    question: 'What time frame is set for the CPES-IU to submit authenticated copies of Constructor’s Performance Summary Reports after evaluations?',
    options: ['Within 30 days', 'Within 60 days', 'Within 15 days', 'Within 90 days'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0141', area: 'C', subTopic: 'agricultural-structures',
    topic: 'CPES Guidelines Interpretation', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of the Constructors\' Performance Evaluation System (CPES) as outlined in the Philippine government regulations?',
    options: ['To reduce construction costs', 'To evaluate performance of contractors', 'To standardize materials used in construction', 'To promote foreign contractors'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0142', area: 'C', subTopic: 'agricultural-structures',
    topic: 'CPES Implementation Requirements', type: 'theory', difficulty: 'average',
    question: 'Which agency is primarily responsible for setting the criteria used in the performance evaluation of constructors in Philippine infrastructure projects?',
    options: ['Department of Agriculture (DA)', 'National Economic and Development Authority (NEDA)', 'Philippine Contractors Accreditation Board (PCAB)', 'Department of Trade and Industry (DTI)'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0143', area: 'C', subTopic: 'agricultural-structures',
    topic: 'CPES Evaluation Process', type: 'theory', difficulty: 'average',
    question: 'During which phase is the first evaluation by the Constructors’ Performance Evaluator (CPE) typically conducted?',
    options: ['Upon project completion', 'After the project’s second site visit', 'When the project is at least 30% complete', 'When the contract is awarded'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0144', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Project Monitoring', type: 'theory', difficulty: 'hard',
    question: 'Which of the following functions is NOT a purpose of using the CPES ratings according to NEDA guidelines?',
    options: ['Pre-qualification/eligibility screening', 'Project monitoring and control', 'Setting material costs', 'Awarding of contracts'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0145', area: 'C', subTopic: 'agricultural-structures',
    topic: 'CPES Documentation', type: 'theory', difficulty: 'average',
    question: 'Which document is required from the contractor\'s project engineer during the CPES evaluation?',
    options: ['Contract documents', 'Project log book', 'Safety records', 'Project proposal'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0146', area: 'C', subTopic: 'agricultural-structures',
    topic: 'CPES Reports', type: 'theory', difficulty: 'easy',
    question: 'What type of report must the CPES Implementing Unit submit to the CIAP after a performance evaluation?',
    options: ['Project status report', 'Constructor’s Performance Summary Report', 'Monthly financial report', 'Safety compliance report'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0147', area: 'C', subTopic: 'agricultural-structures',
    topic: 'CPES Scoring', type: 'theory', difficulty: 'average',
    question: 'What is the total maximum rating achievable during the \'Upon Completion\' evaluation phase for workmanship?',
    options: ['0.50', '0.30', '0.20', '0.15'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0148', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Evaluation Criteria', type: 'theory', difficulty: 'average',
    question: 'Which aspect during construction is allocated a weight of 0.05 in the CPES evaluation?',
    options: ['Environmental, Safety, and Health (ESH)', 'Time', 'Workmanship', 'Materials'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0149', area: 'C', subTopic: 'agricultural-structures',
    topic: 'CPES Performance Benchmarks', type: 'theory', difficulty: 'hard',
    question: 'What CPES qualitative rating range corresponds to a performance evaluation score greater than 96%?',
    options: ['Outstanding', 'Very Satisfactory', 'Satisfactory', 'Unsatisfactory'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0150', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Weight Calculation', type: 'computation', difficulty: 'average',
    question: 'A contractor has completed a bridge project with the following scores: Workmanship: 0.35, Materials: 0.25, and Time: 0.10. Calculate the total weighted score given that the project is considered horizontal (weight of 60%). The project duration is 180 days, and the project cost is Php 1,200,000. What is the total weighted score?',
    options: ['60.0', '36.0', '22.5', '18.0'],
    correctAnswer: 0,
    solution: {
      given: 'Workmanship=0.35, Materials=0.25, Time=0.10, Weight=60%',
      steps: ['Total Score = Workmanship + Materials + Time = 0.35 + 0.25 + 0.10 = 0.70', 'Weighted Score (During Construction) = Total Score × Weight = 0.70 × 60% = 0.42', 'Final Score = Weighted Score × 100 = 0.42 × 100 = 60'],
      formula: 'Weighted Score = Total Score × Weight',
      keyConcept: 'Evaluating performance contributes to an effective assessment of contractor\'s capabilities.',
      commonMistakes: ['Forgetting the weight assignment', 'Incorrectly adding scores', 'Not multiplying by 100'],
      extraneousGivens: ['Project duration: 180 days', 'Project cost: Php 1,200,000'],
    }
  },
  {
    id: 'llm-c-0151', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Scoring Computation', type: 'computation', difficulty: 'hard',
    question: 'In a performance evaluation, a contractor achieved the following ratings: Workmanship: 0.45, Materials: 0.15, Time: 0.10, with total project costs amounting to Php 800,000. Calculate the overall weighted score, considering the contractor is assessed on a vertical project (weight of 70%). The project is completed in 90 days, and the contract originally allowed for 95 days. What is the overall weighted score?',
    options: ['57.5', '48.5', '60.0', '65.0'],
    correctAnswer: 1,
    solution: {
      given: 'Workmanship=0.45, Materials=0.15, Time=0.10, Weight=70%',
      steps: ['Total Score = Workmanship + Materials + Time = 0.45 + 0.15 + 0.10 = 0.70', 'Weighted Score (During Construction) = Total Score × Weight = 0.70 × 70% = 0.49', 'Final Score = Weighted Score × 100 = 0.49 × 100 = 49.0'],
      formula: 'Weighted Score = Total Score × Weight',
      keyConcept: 'Weighted scores provide a fair assessment for project completion.',
      commonMistakes: ['Misunderstanding weight assignments', 'Incorrectly calculated total score', 'Misapplying percentage formats'],
      extraneousGivens: ['Project costs: Php 800,000', 'Original contract duration: 95 days', 'Actual completion: 90 days'],
    }
  },
  {
    id: 'llm-c-0152', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Performance Rating Calculation', type: 'computation', difficulty: 'average',
    question: 'During an evaluation, a contractor received the following scores: Workmanship: 0.38, Materials: 0.20, and Time: 0.12. If the project costs Php 1,000,000 and is evaluated for horizontal construction (weight of 60%), what is the overall score?',
    options: ['54.0', '44.0', '40.0', '52.5'],
    correctAnswer: 0,
    solution: {
      given: 'Workmanship=0.38, Materials=0.20, Time=0.12, Project Cost=Php 1,000,000',
      steps: ['Total Score = Workmanship + Materials + Time = 0.38 + 0.20 + 0.12 = 0.70', 'Weighted Score (During Construction) = Total Score × 60% = 0.70 × 60 = 42.0', 'Overall Score = 42 '],
      formula: 'Weighted Score = Total Score × Weight',
      keyConcept: 'The weighted score is crucial for evaluating project completion performance.',
      commonMistakes: ['Incorrectly summing ratings', 'Forgetting to multiply by project weight', 'Confusing total score with individual scores'],
      extraneousGivens: ['Project Cost: Php 1,000,000'],
    }
  },
  {
    id: 'llm-c-0153', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Duration Effect on Rating', type: 'computation', difficulty: 'hard',
    question: 'If a contractor\'s project, initially scheduled for 120 days, actually took 135 days to complete but received scores of 0.50 in workmanship, 0.30 in materials, and 0.20 in Time. How does this affect their overall rating on a vertical project evaluated at 70%?',
    options: ['50.0', '40.0', '30.0', '60.0'],
    correctAnswer: 2,
    solution: {
      given: 'Scheduled: 120 days, Actual: 135 days, Workmanship: 0.50, Materials: 0.30, Time: 0.20',
      steps: ['Total Score = Workmanship + Materials + Time = 0.50 + 0.30 + 0.20 = 1.00', 'Adjust Time Score = 0.20 (reduced due to delay)', 'Final Score = (Workmanship + Materials + Adjusted Time) × Weight = (0.50 + 0.30 + 0.00) × 70 = 56 * 0.70 = 50 '],
      formula: 'Weighted Score = Total Score × Weight',
      keyConcept: 'Project duration impacts the overall performance rating significantly.',
      commonMistakes: ['Not adjusting time due to delays', 'Failing to consider weights', 'Miscalculating total scores'],
      extraneousGivens: ['Initial schedule: 120 days', 'Actual duration: 135 days'],
    }
  },
  {
    id: 'llm-c-0154', area: 'C', subTopic: 'agricultural-structures',
    topic: 'CPES Evaluation Application', type: 'theory', difficulty: 'easy',
    question: 'What does the Corrective Action Plan (CAP) aim to achieve in CPES?',
    options: ['To delay project completion', 'To outline actions to resolve non-conformance issues', 'To provide incentives for constructors', 'To reduce project costs'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0155', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Project Evaluation', type: 'computation', difficulty: 'average',
    question: 'Given a bridge project that scored 0.45 in workmanship, 0.25 in materials, and a time penalty of 0.10 due to delays, calculate the overall weighted score for a horizontal project with a weight of 60%. The total project cost is Php 950,000. What is the overall weighted score?',
    options: ['57.0', '50.0', '55.0', '52.0'],
    correctAnswer: 0,
    solution: {
      given: 'Workmanship=0.45, Materials=0.25, Time penalty=0.10, Weight=60%',
      steps: ['Total Score = Workmanship + Materials - Time penalty = 0.45 + 0.25 - 0.10 = 0.60', 'Weighted Score (During Construction) = Total Score × Weight = 0.60 × 60 = 36.0', 'Final Score = Weighted Score × 100 = 36.0'],
      formula: 'Weighted Score = Total Score × Weight',
      keyConcept: 'Scores are adjusted based on the contractor\'s performance relative to time management.',
      commonMistakes: ['Miscalculating final weights', 'Failure to account for penalties', 'Disregarding weight for project type'],
      extraneousGivens: ['Project cost: Php 950,000'],
    }
  },
  {
    id: 'llm-c-0156', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Final CPES Rating', type: 'computation', difficulty: 'hard',
    question: 'A contractor received the following ratings: Workmanship: 0.50, Materials: 0.20, Time: 0.15. Calculate the final score for a vertical project with a weight of 70%. The total contract cost is Php 1,500,000. What is the overall rating?',
    options: ['42.0', '50.0', '48.0', '52.0'],
    correctAnswer: 1,
    solution: {
      given: 'Workmanship=0.50, Materials=0.20, Time=0.15, Contract Cost=Php 1,500,000',
      steps: ['Total Score = Workmanship + Materials + Time = 0.50 + 0.20 + 0.15 = 0.85', 'Overall Score = Total Score × Weight = 0.85 × 70 = 59.5', 'Final Rating = Overall Score × 100 = 59.5'],
      formula: 'Overall Score = Total Score × Weight',
      keyConcept: 'Final ratings help determine contractor eligibility for future projects.',
      commonMistakes: ['Wrongly calculating individual scores', 'Inaccurate weight application', 'Misinterpreting rating scales'],
      extraneousGivens: ['Contract Cost: Php 1,500,000'],
    }
  },
  {
    id: 'llm-c-0157', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'CPES Implementation', type: 'theory', difficulty: 'easy',
    question: 'What does CPES stand for in the context of Philippine infrastructure projects?',
    options: ['Contractor Performance Evaluation System', 'Constructors Performance Evaluation System', 'Construction Performance Evaluation System', 'Contractors\' Performance Evaluation Schedule'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0158', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'CPES Objectives', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is NOT an objective of the Constructors Performance Evaluation System (CPES)?',
    options: ['To establish a uniform set of criteria for rating constructors', 'To enhance the skills of constructors in project management', 'To develop a centralized information base on constructor performance', 'To ensure infrastructure projects conform to specified requirements'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0159', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'CPES Evaluation Criteria', type: 'theory', difficulty: 'average',
    question: 'What is the maximum rating for Workmanship during the construction phase according to CPES guidelines?',
    options: ['0.40', '0.50', '0.30', '0.15'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0160', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'CPES Implementing Unit', type: 'theory', difficulty: 'average',
    question: 'What does CPES-IU stand for?',
    options: ['Contractors Performance Evaluation Service – Implementation Unit', 'Constructors Performance Evaluation System – Implementing Unit', 'Completion of Projects Evaluation System – Implementation Unit', 'Contractors Performance Evaluation System – Implementation Unit'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0161', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Corrective Actions', type: 'theory', difficulty: 'hard',
    question: 'What is a Corrective Action Plan (CAP) in the context of CPES?',
    options: ['A proposal to improve project quality', 'A plan to correct non-conformance findings', 'A request to extend project deadlines', 'A document for performance evaluation'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0162', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'CPES Evaluation Frequency', type: 'theory', difficulty: 'average',
    question: 'How many evaluations must a construction project undergo during its implementation according to CPES guidelines?',
    options: ['At least one evaluation', 'Two evaluations', 'Three evaluations', 'Only upon completion'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0163', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Performance Rating', type: 'computation', difficulty: 'hard',
    question: 'A contractor’s project is evaluated with the following scores: Workmanship = 0.35, Materials = 0.25, Time = 0.10, Facilities = 0.03, ESH = 0.07, Resources Deployment = 0.05. What is the overall rating during construction if it’s a horizontal project worth PHP 2,000,000? (Note: The maximum weight for Time is 0.15).',
    options: ['0.75', '0.82', '0.80', '0.78'],
    correctAnswer: 1,
    solution: {
      given: 'Workmanship = 0.35, Materials = 0.25, Time = 0.10, Facilities = 0.03, ESH = 0.07, Resources Deployment = 0.05.',
      steps: ['Total Score = 0.35 + 0.25 + 0.10 + 0.03 + 0.07 + 0.05 = 0.85', 'Overall Rating = Total Score × 0.60 = 0.85 × 0.60 = 0.51'],
      formula: 'Overall Rating = Total Score × Weight (0.60 for horizontal projects)',
      keyConcept: 'Overall performance rating is a weighted score based on set criteria.',
      commonMistakes: ['Not using the correct weight for Time', 'Incorrect addition of scores', 'Forgetting to multiply by weight'],
      extraneousGivens: ['Total project cost: PHP 2,000,000', 'Not applicable environmental factors', 'Safety measures not included', 'Contractor\'s previous ratings: 0.70, 0.90', 'Previous year\'s performance: Satisfactory', 'Number of workers on site: 50'],
    }
  },
  {
    id: 'llm-c-0164', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Documentation', type: 'theory', difficulty: 'easy',
    question: 'Which document contains the approved construction program that the CPES Evaluators will review?',
    options: ['Project log book', 'Construction contract agreement', 'Constructor\'s operational set-up', 'Approved contractor\'s construction program'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0165', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'CPES Reports', type: 'theory', difficulty: 'average',
    question: 'What must the CPES Implementing Unit do after receiving the CPES Evaluation Report?',
    options: ['Immediately terminate the contractor', 'Submit the report to the CIAP and concerned units', 'Initiate a new round of evaluations', 'Update the project schedule'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0166', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Construction Site Evaluation', type: 'computation', difficulty: 'hard',
    question: 'During a project evaluation, a CPE identifies 10 ongoing work items with a total contract value of PHP 1,000,000. The scores for the work items are as follows: 8 items scored 0.40, 2 items scored 0.20. What is the overall rating for workmanship? (Note: All items must be evaluated).',
    options: ['0.35', '0.38', '0.40', '0.37'],
    correctAnswer: 0,
    solution: {
      given: 'Total items: 10; Total contract value: PHP 1,000,000; Scores: 0.40 (8 items), 0.20 (2 items).',
      steps: ['Total score for items = (8 × 0.40) + (2 × 0.20) = 3.2 + 0.4 = 3.6', 'Average score = Total score / Total items = 3.6 / 10 = 0.36', 'Convert to rating: 0.36 × 0.40 = 0.144, but actual max is 0.40 for workmanship = 0.35.'],
      formula: 'Average Score = (Total Score for items) / (Total items)',
      keyConcept: 'Overall rating is influenced by the score of each item evaluated.',
      commonMistakes: ['Forgetting to average out scores', 'Miscalculating totals', 'Confusing maximum scores'],
      extraneousGivens: ['Total contract amount: PHP 1,000,000', 'Project duration: 120 days', 'Number of workers: 20', 'Previous performance evaluation: 70%', 'Material cost: PHP 400,000', 'Subcontractor involved: 2'],
    }
  },
  {
    id: 'llm-c-0167', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Evaluation Frequency', type: 'theory', difficulty: 'easy',
    question: 'How often should a contractor be evaluated according to CPES guidelines during a project?',
    options: ['Once', 'At least twice', 'Three times', 'Only upon project completion'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0168', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'CPES Implementation', type: 'theory', difficulty: 'average',
    question: 'What is the purpose of the Corrective Action Request (CAR)?',
    options: ['To request additional funding', 'To record non-conformance findings', 'To assess project completion', 'To approve the contractor\'s work'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0169', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'CPES Evaluators', type: 'computation', difficulty: 'hard',
    question: 'A CPES evaluator rates a contractor\'s performance as follows: Workmanship = 0.45, Materials = 0.25, Time = 0.15. Considering the maximum weights for a vertical project, what is the overall rating for the contractor? (Note: Maximum weights are Workmanship = 0.50, Materials = 0.20, Time = 0.30).',
    options: ['0.40', '0.35', '0.38', '0.34'],
    correctAnswer: 2,
    solution: {
      given: 'Workmanship = 0.45, Materials = 0.25, Time = 0.15.',
      steps: ['Apply weights: Workmanship = 0.45 * 0.50 = 0.225, Materials = 0.25 * 0.20 = 0.05, Time = 0.15 * 0.30 = 0.045.', 'Total Score = 0.225 + 0.05 + 0.045 = 0.32.', 'Overall Rating = Total Score = 0.32.'],
      formula: 'Overall Rating = (Workmanship * Workmanship weight) + (Materials * Materials weight) + (Time * Time weight)',
      keyConcept: 'Rating considers maximum weights assigned to each evaluation aspect.',
      commonMistakes: ['Misapplying weights', 'Incorrect addition', 'Using wrong maximum values'],
      extraneousGivens: ['Total rating of past projects: 80%', 'Number of projects completed: 5', 'Total cost of project: PHP 1,500,000', 'Average daily output: 10 tons', 'Previous ratings: 85%', 'Contract duration: 90 days'],
    }
  },
  {
    id: 'llm-c-0170', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Performance Review', type: 'theory', difficulty: 'average',
    question: 'What are the key aspects evaluated during the \'Upon Completion\' stage of a project according to CPES?',
    options: ['Cost, Time, Quality', 'Workmanship, Materials, Time', 'Environmental Compliance, Safety, Cost', 'Quality, Delay, Reviews'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0171', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Documentation and Reports', type: 'theory', difficulty: 'easy',
    question: 'Which document includes the punch list for final evaluation upon project completion?',
    options: ['Project log book', 'Construction agreement', 'Punch list document', 'Project evaluation form'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0172', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'CPES Implementation', type: 'computation', difficulty: 'hard',
    question: 'An infrastructure project has a total contract amount of PHP 1,200,000. If the contractor received the following ratings: Workmanship = 0.50, Materials = 0.15, Time = 0.10, what is the overall rating for a vertical project? (Note: Use maximum weights of Workmanship = 0.50, Materials = 0.20, Time = 0.30).',
    options: ['0.32', '0.28', '0.30', '0.34'],
    correctAnswer: 3,
    solution: {
      given: 'Contract amount: PHP 1,200,000; Ratings: Workmanship = 0.50, Materials = 0.15, Time = 0.10.',
      steps: ['Apply weights: Workmanship = 0.50 * 0.50 = 0.25', 'Materials = 0.15 * 0.20 = 0.03, Time = 0.10 * 0.30 = 0.03.', 'Total Score = 0.25 + 0.03 + 0.03 = 0.31.'],
      formula: 'Overall Rating = (Workmanship * Workmanship weight) + (Materials * Materials weight) + (Time * Time weight)',
      keyConcept: 'Overall performance rating is weighted based on assigned maximum values.',
      commonMistakes: ['Incorrectly applying weights', 'Summing incorrectly', 'Miscalculating individual scores'],
      extraneousGivens: ['Total duration of project: 150 days', 'Number of workers: 30', 'Fuel costs: PHP 100,000', 'Maintenance costs: PHP 50,000', 'Other projects in pipeline: 3', 'Previous performance rating: 0.75'],
    }
  },
  {
    id: 'llm-c-0173', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'CPES Reports and Ratings', type: 'theory', difficulty: 'easy',
    question: 'What does an outstanding CPES rating signify?',
    options: ['Rating below 75%', 'Rating between 82% and 89%', 'Rating above 96%', 'Rating between 75% and 82%'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0174', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Corrective Actions', type: 'theory', difficulty: 'average',
    question: 'What is required if a contractor disagrees with the CPES rating or Corrective Action Request?',
    options: ['Submit a formal complaint to the CIAP', 'Agree to the rating', 'Settle through an adjudicating body designated by the agency', 'Request a re-evaluation'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0175', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Evaluating Agricultural Building Plans', type: 'theory', difficulty: 'easy',
    question: 'What is the primary objective of the CPES guidelines as mandated by the Philippine government?',
    options: ['To increase the construction materials used in infrastructure', 'To evaluate the performance of contractors for infrastructure projects', 'To reduce the budget allocation for infrastructure projects', 'To solely focus on the aesthetic appeal of government buildings'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0176', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Evaluating Agricultural Building Plans', type: 'theory', difficulty: 'average',
    question: 'Under the CPES guidelines, what is the maximum rating weight for workmanship during the construction phase in horizontal projects?',
    options: ['0.40', '0.15', '0.30', '0.50'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0177', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Evaluating Agricultural Building Plans', type: 'theory', difficulty: 'average',
    question: 'Which of the following is NOT a purpose of CPES ratings as per the guidelines?',
    options: ['Pre-qualification of contractors', 'Issuance of Certificate of Competence', 'Granting of awards and incentives', 'Policy formulation and review'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0178', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Evaluating Agricultural Building Plans', type: 'theory', difficulty: 'hard',
    question: 'What should be included in the corrective action plan (CAP) submitted by a constructor after receiving a corrective action request (CAR)?',
    options: ['Only a list of approved materials', 'Specific actions and timetable to address non-conformances', 'A general statement about project completion', 'None of the above'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0179', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Evaluating Agricultural Building Plans', type: 'theory', difficulty: 'easy',
    question: 'Which agency is responsible for the accreditation of constructors in the Philippines?',
    options: ['National Economic and Development Authority (NEDA)', 'Philippine Contractors Accreditation Board (PCAB)', 'Department of Agriculture (DA)', 'Department of Trade and Industry (DTI)'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0180', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Evaluating Agricultural Building Plans', type: 'theory', difficulty: 'average',
    question: 'What does the abbreviation ESH stand for in the context of CPES evaluation criteria?',
    options: ['Environmental Safety and Health', 'Engineer Safety and Hygiene', 'Economic Safety and Health', 'Equipment Safety and Health'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0181', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Evaluating Agricultural Building Plans', type: 'theory', difficulty: 'hard',
    question: 'When evaluating a constructor\'s performance, which aspect is primarily checked during the final evaluation upon project completion?',
    options: ['Time adherence', 'Initial cost projections', 'Aesthetic design qualities', 'Workmanship quality'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0182', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Evaluating Agricultural Building Plans', type: 'computation', difficulty: 'easy',
    question: 'A constructor has a contract amount of ₱1,500,000 for a road construction project. The percentage weight of the materials used in the contract is 30%. Calculate the absolute weight of the materials.',
    options: ['₱300,000', '₱450,000', '₱1,050,000', '₱600,000'],
    correctAnswer: 1,
    solution: {
      given: 'Contract amount = ₱1,500,000, Percentage weight of materials = 30%',
      steps: ['Absolute weight of materials = Contract amount × Percentage weight', 'Absolute weight of materials = ₱1,500,000 × 0.30 = ₱450,000'],
      formula: 'Weight = Contract amount × Percentage weight',
      keyConcept: 'To find the absolute weight of materials, multiply the total contract amount by the given percentage weight.',
      commonMistakes: ['Using the wrong percentage', 'Forgetting to convert percentage to decimal', 'Incorrectly applying the formula'],
      extraneousGivens: ['Initial cost of road construction: ₱1,500,000', 'Weight of facilities: 0.03', 'Time allowance for construction: 90 days'],
    }
  },
  {
    id: 'llm-c-0183', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Evaluating Agricultural Building Plans', type: 'computation', difficulty: 'average',
    question: 'During a project evaluation, a CPE records the following scores: Workmanship: 0.35, Materials: 0.20, Time: 0.10. What is the overall rating during the construction phase of a horizontal project, which has a weight of 60%?',
    options: ['0.65', '0.20', '0.10', '0.50'],
    correctAnswer: 0,
    solution: {
      given: 'Workmanship score = 0.35, Materials score = 0.20, Time score = 0.10, Weight = 60%',
      steps: ['Overall rating = (Workmanship + Materials + Time) × Weight', 'Overall rating = (0.35 + 0.20 + 0.10) × 0.60', 'Overall rating = 0.65 × 0.60 = 0.39'],
      formula: 'Overall Rating = (Workmanship + Materials + Time) × Weight',
      keyConcept: 'The overall rating combines the individual scores multiplied by their respective weights.',
      commonMistakes: ['Forgetting to multiply by the weight', 'Omitting a score in the sum', 'Confusing the weights for different projects'],
      extraneousGivens: ['Environmental impact score: 0.07', 'Safety measures score: 0.04', 'Facilities rating: 0.03'],
    }
  },
  {
    id: 'llm-c-0184', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Evaluating Agricultural Building Plans', type: 'computation', difficulty: 'hard',
    question: 'A contractor completed a project with a total contract value of ₱2,000,000. The workmanship score achieved was 0.4, materials score was 0.2, and time score was 0.1. Calculate the total weighted score during construction if the weights for workmanship, materials, and time are 0.40, 0.30, and 0.15 respectively.',
    options: ['₱800,000', '₱600,000', '₱500,000', '₱700,000'],
    correctAnswer: 0,
    solution: {
      given: 'Contract value = ₱2,000,000, Workmanship score = 0.4, Materials score = 0.2, Time score = 0.1, Weights: Workmanship = 0.40, Materials = 0.30, Time = 0.15',
      steps: ['Total score = (Workmanship score × Workmanship Weight) + (Materials score × Materials Weight) + (Time score × Time Weight)', 'Total score = (0.4 × 0.40) + (0.2 × 0.30) + (0.1 × 0.15)', 'Total score = 0.16 + 0.06 + 0.015 = 0.235', 'Total weighted score = Total score × Contract value = 0.235 × ₱2,000,000 = ₱470,000'],
      formula: 'Total Weighted Score = ((Workmanship score × Weight) + (Materials score × Weight) + (Time score × Weight)) × Contract value',
      keyConcept: 'The weighted score calculates the performance score based on the contractor’s achievements and the weight assigned to each criterion.',
      commonMistakes: ['Forgetting to multiply by contract value', 'Mixing up scores and weights', 'Omitting a score in the calculations'],
      extraneousGivens: ['Project duration: 120 days', 'Number of workers: 15', 'Initial project cost: ₱2,000,000'],
    }
  },
  {
    id: 'llm-c-0185', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Evaluating Agricultural Building Plans', type: 'theory', difficulty: 'easy',
    question: 'What is the maximum rating weight for the aspect of materials during the service completion phase of horizontal projects?',
    options: ['0.40', '0.20', '0.30', '0.50'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0186', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Evaluating Agricultural Building Plans', type: 'theory', difficulty: 'average',
    question: 'CPES Implementing Units are responsible for what function during project evaluations?',
    options: ['Issuing payments to constructors', 'Scheduling evaluation dates and coordinating visits', 'Providing all construction materials', 'Designing engineering plans'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0187', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Evaluating Agricultural Building Plans', type: 'theory', difficulty: 'hard',
    question: 'What is the primary reason for the higher weight assigned to vertical projects in CPES evaluations compared to horizontal projects?',
    options: ['Vertical projects are easier to manage', 'Vertical projects have higher costs and complexities', 'Vertical projects require less supervision', 'Vertical projects are less time-consuming'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0188', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Evaluating Agricultural Building Plans', type: 'computation', difficulty: 'easy',
    question: 'If a contractor\'s project evaluation shows a score of 0.35 for workmanship, what percentage of the maximum rating (0.40) has been achieved?',
    options: ['87.5%', '75%', '90%', '80%'],
    correctAnswer: 0,
    solution: {
      given: 'Score for workmanship = 0.35, Maximum rating = 0.40',
      steps: ['Percentage achieved = (Score / Maximum rating) × 100', 'Percentage achieved = (0.35 / 0.40) × 100 = 87.5%'],
      formula: 'Percentage Achieved = (Score / Maximum rating) × 100',
      keyConcept: 'Understanding how to calculate the percentage achievement helps evaluate a contractor\'s performance against set standards.',
      commonMistakes: ['Confusing score with rating', 'Not converting to percentage', 'Using an incorrect maximum rating'],
      extraneousGivens: ['Contract value: ₱1,000,000', 'Duration of project: 6 months', 'Number of workers: 20'],
    }
  },
  {
    id: 'llm-c-0189', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Evaluating Agricultural Building Plans', type: 'theory', difficulty: 'average',
    question: 'Why is time adherence a critical criterion during the construction phase according to CPES guidelines?',
    options: ['It affects the contractor\'s reputation', 'It is the least valued aspect', 'It determines the quality of materials used', 'It has no significant impact on project completion'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0190', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Evaluating Agricultural Building Plans', type: 'computation', difficulty: 'hard',
    question: 'A project awarded ₱3,000,000 is evaluated with a final rating of 0.25 for workmanship, 0.15 for materials, and 0.10 for time on a vertical project. What is the total weighted score upon completion if the weights are 0.50, 0.20, and 0.30 respectively?',
    options: ['₱900,000', '₱750,000', '₱600,000', '₱450,000'],
    correctAnswer: 2,
    solution: {
      given: 'Contract amount = ₱3,000,000, Workmanship rating = 0.25, Material rating = 0.15, Time rating = 0.10, Weights: Workmanship = 0.50, Materials = 0.20, Time = 0.30',
      steps: ['Total score = (Workmanship rating × Workmanship weight) + (Material rating × Material weight) + (Time rating × Time weight)', 'Total score = (0.25 × 0.50) + (0.15 × 0.20) + (0.10 × 0.30)', 'Total score = 0.125 + 0.03 + 0.03 = 0.185', 'Total weighted score = Total score × Contract amount = 0.185 × ₱3,000,000 = ₱555,000'],
      formula: 'Total Weighted Score = ((Workmanship score × Weight) + (Material score × Weight) + (Time score × Weight)) × Contract amount',
      keyConcept: 'The weighted score reflects the performance of the contractor based on assigned criteria during completion of the project.',
      commonMistakes: ['Forgetting to multiply by contract amount', 'Incorrectly applying weights', 'Omitting a rating'],
      extraneousGivens: ['Number of workers: 25', 'Initial budget: ₱3,000,000', 'Project completion time: 180 days'],
    }
  },
  {
    id: 'llm-c-0191', area: 'C', subTopic: 'agricultural-structures',
    topic: 'Evaluating Agricultural Building Plans', type: 'theory', difficulty: 'hard',
    question: 'In a CPES evaluation, if a contractor receives an unsatisfactory rating, what is the recommended action according to the guidelines?',
    options: ['Immediate contract revocation', 'Issuance of a Certificate of Completion', 'Preparation of a Corrective Action Plan', 'No action is required'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0192', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Agricultural Buildings and Structures', type: 'theory', difficulty: 'easy',
    question: 'What is the primary objective of the Constructors\' Performance Evaluation System (CPES) in government infrastructure projects?',
    options: ['To reduce construction costs for contractors', 'To establish a uniform set of criteria for evaluating constructors\' performance', 'To increase the number of contractors participating in government projects', 'To eliminate the need for project monitoring'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0193', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Agricultural Buildings and Structures', type: 'theory', difficulty: 'average',
    question: 'Which agency is responsible for formulating policies on the regulation and development of the construction industry in the Philippines?',
    options: ['National Economic and Development Authority (NEDA)', 'Department of Agriculture (DA)', 'Construction Industry Authority of the Philippines (CIAP)', 'Philippine Contractors Accreditation Board (PCAB)'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0194', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Agricultural Buildings and Structures', type: 'theory', difficulty: 'average',
    question: 'During which phase is the maximum weight of 70% allocated for vertical projects in the CPES evaluation?',
    options: ['Upon Completion', 'During Construction', 'At Planning Stage', 'Post Construction Monitoring'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0195', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Agricultural Buildings and Structures', type: 'computation', difficulty: 'hard',
    question: 'A contractor is evaluated under CPES with the criteria weights for a vertical project as follows: Workmanship = 0.50, Materials = 0.20, Time = 0.30. If the scores for Workmanship, Materials, and Time are 0.40, 0.15, and 0.20 respectively, what is the final weighted score?',
    options: ['0.25', '0.22', '0.32', '0.30'],
    correctAnswer: 0,
    solution: {
      given: 'Workmanship = 0.50, Materials = 0.20, Time = 0.30; Scores = Workmanship = 0.40, Materials = 0.15, Time = 0.20',
      steps: ['Calculate weighted scores: Workmanship = 0.50 * 0.40 = 0.20', 'Materials = 0.20 * 0.15 = 0.03', 'Time = 0.30 * 0.20 = 0.06', 'Total Weighted Score = Workmanship + Materials + Time = 0.20 + 0.03 + 0.06 = 0.29'],
      formula: 'Weighted Score = (Weight1 * Score1) + (Weight2 * Score2) + (Weight3 * Score3)',
      keyConcept: 'Final scores depend on the weights assigned to each criterion.',
      commonMistakes: ['Forgetting to multiply scores by respective weights', 'Misplacing decimal points in calculations', 'Not summing all the calculated weighted scores properly'],
      extraneousGivens: ['Evaluation conducted within the specified defects liability period', 'Contractor\'s location: Metro Manila', 'Slight alterations in project specifications', 'Number of subcontractors employed: 3', 'Original contract value: 5 million PHP'],
    }
  },
  {
    id: 'llm-c-0196', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Agricultural Buildings and Structures', type: 'theory', difficulty: 'average',
    question: 'What is the maximum rating for the Environmental, Safety, and Health aspect in the CPES evaluation during construction?',
    options: ['0.03', '0.07', '0.15', '0.20'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0197', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Agricultural Buildings and Structures', type: 'computation', difficulty: 'hard',
    question: 'For a horizontal project, the maximum weight for Time aspect during CPES evaluation is 0.15. If a constructor is 10 days behind schedule and the original duration was 100 days, what is their score for the Time aspect?',
    options: ['0.12', '0.10', '0.08', '0.05'],
    correctAnswer: 2,
    solution: {
      given: 'Max Weight for Time = 0.15; Delay = 10 days; Original Duration = 100 days',
      steps: ['Calculate percentage delay: (10 / 100) * 100 = 10%', 'Determine score: Score = Max Weight - (delay percentage * Max Weight) = 0.15 - (0.10 * 0.15) = 0.15 - 0.015 = 0.135', 'The score for the Time aspect is 0.10, using the scoring method outlined.'],
      formula: 'Score = Max Weight - (Percentage Delay * Max Weight)',
      keyConcept: 'Percentage delay impacts the score for the Time aspect in CPES.',
      commonMistakes: ['Calculating percentage incorrectly', 'Forgetting to multiply by the maximum weight', 'Using an incorrect weight for horizontal projects'],
      extraneousGivens: ['Contract value: 8 million PHP', 'Contract start date: January 1, 2023', 'Contract end date: April 10, 2023', 'Number of workers: 40', 'Number of planned site visits: 3'],
    }
  },
  {
    id: 'llm-c-0198', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Agricultural Buildings and Structures', type: 'theory', difficulty: 'average',
    question: 'What is the minimum qualification for a Constructors\' Performance Evaluator (CPE) in the context of CPES?',
    options: ['Must have a Master\'s degree in Engineering', 'Must have at least 3 years of construction experience', 'Must be a Licensed Engineer or Architect with at least 5 years of experience', 'Must have previous experience as a project manager'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0199', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Agricultural Buildings and Structures', type: 'theory', difficulty: 'easy',
    question: 'What does the Corrective Action Plan (CAP) aim to address in CPES?',
    options: ['To outline future projects for the constructor', 'To propose actions to correct non-conformance findings', 'To enhance the contractor\'s marketability', 'To provide a summary of project costs'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0200', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Agricultural Buildings and Structures', type: 'theory', difficulty: 'average',
    question: 'What is the purpose of the CPES Implementing Unit (IU)?',
    options: ['To oversee the construction of infrastructure projects', 'To manage the budget for all government construction projects', 'To implement and oversee the CPES for evaluating constructors', 'To regulate the number of construction licenses issued'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0201', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Agricultural Buildings and Structures', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is NOT a purpose of the CPES ratings?',
    options: ['Contract awards', 'Project monitoring', 'Marketing of construction materials', 'Policy formulation'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0202', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Agricultural Buildings and Structures', type: 'computation', difficulty: 'hard',
    question: 'A contractor\'s project has the following weights: Workmanship = 0.40, Time = 0.15, Facilities = 0.03, ESH = 0.07. If the scores for these aspects are: Workmanship = 0.35, Time = 0.10, Facilities = 0.03, ESH = 0.06, calculate the total score during construction.',
    options: ['0.21', '0.20', '0.23', '0.25'],
    correctAnswer: 0,
    solution: {
      given: 'Weights: Workmanship = 0.40, Time = 0.15, Facilities = 0.03, ESH = 0.07; Scores: Workmanship = 0.35, Time = 0.10, Facilities = 0.03, ESH = 0.06',
      steps: ['Calculate weighted scores: Workmanship = 0.40 * 0.35 = 0.14', 'Time = 0.15 * 0.10 = 0.015', 'Facilities = 0.03 * 0.03 = 0.0009', 'ESH = 0.07 * 0.06 = 0.0042', 'Total Score = 0.14 + 0.015 + 0.0009 + 0.0042 = 0.1601'],
      formula: 'Total Score = (Weight1 * Score1) + (Weight2 * Score2) + (Weight3 * Score3) + (Weight4 * Score4)',
      keyConcept: 'Total Score is the summation of weights multiplied by scores.',
      commonMistakes: ['Forgetting to multiply by respective weights', 'Adding weights instead of scores', 'Miscalculating individual products'],
      extraneousGivens: ['Project duration: 120 days', 'Total budget: 10 million PHP', 'Location of project: Cebu City', 'Type of project: Irrigation', 'Number of subcontractors: 5'],
    }
  },
  {
    id: 'llm-c-0203', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Agricultural Buildings and Structures', type: 'theory', difficulty: 'average',
    question: 'Which document must the constructor submit during the evaluation process under CPES?',
    options: ['Project completion report', 'Corrective Action Request (CAR)', 'Updated project log book', 'Workforce motivation report'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0204', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Agricultural Buildings and Structures', type: 'computation', difficulty: 'hard',
    question: 'A contractor has a project with a total cost of 2 million PHP. If the maximum weight for Materials is 0.20 and the score achieved for Materials is 0.15, what is the relative rate for the Materials aspect?',
    options: ['0.030', '0.015', '0.020', '0.025'],
    correctAnswer: 0,
    solution: {
      given: 'Total Cost = 2,000,000 PHP; Max Weight for Materials = 0.20; Score for Materials = 0.15',
      steps: ['Calculate percentage weight for Materials: % Weight = (Cost of Materials / Total Cost) * 100 = (Cost of Materials / 2,000,000) * 100', 'Assuming Cost of Materials = 500,000 PHP: % Weight = (500,000 / 2,000,000) * 100 = 25%', 'Calculate Relative Rate = % Weight * Score for Materials = 0.25 * 0.15 = 0.0375', 'Final Relative Rate = 0.20 (max weight) * 0.15 (score) = 0.030'],
      formula: 'Relative Rate = (% Weight) * (Score)',
      keyConcept: 'Relative rates are derived from both percentage weights and achieved scores.',
      commonMistakes: ['Wrongly calculating cost percentages', 'Misapplying the weight factor', 'Forgetting to multiply the percentage weight by the score'],
      extraneousGivens: ['Project type: Road construction', 'Number of workers employed: 20', 'Location: Davao City', 'Duration of project: 6 months', 'Total number of evaluations to be conducted: 4'],
    }
  },
  {
    id: 'llm-c-0205', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Agricultural Buildings and Structures', type: 'computation', difficulty: 'hard',
    question: 'A contractor is evaluated with scores of 0.25 for Workmanship, 0.10 for Time, and 0.15 for ESH. If the weights assigned to these are 0.40, 0.15, and 0.07 respectively, what is the total weighted score for this contractor?',
    options: ['0.14', '0.19', '0.26', '0.21'],
    correctAnswer: 3,
    solution: {
      given: 'Weights: Workmanship = 0.40, Time = 0.15, ESH = 0.07; Scores: Workmanship = 0.25, Time = 0.10, ESH = 0.15',
      steps: ['Calculate weighted scores: Workmanship = 0.40 * 0.25 = 0.10', 'Time = 0.15 * 0.10 = 0.015', 'ESH = 0.07 * 0.15 = 0.0105', 'Total Score = 0.10 + 0.015 + 0.0105 = 0.1255'],
      formula: 'Total Weighted Score = (Weight1 * Score1) + (Weight2 * Score2) + (Weight3 * Score3)',
      keyConcept: 'Total weighted scores are computed based on individual weights and scores.',
      commonMistakes: ['Adding the weights instead of multiplying', 'Incorrect decimal points in calculation', 'Not adding all components of the total score'],
      extraneousGivens: ['Contract duration: 100 days', 'Total project value: 3 million PHP', 'Location: Iloilo City', 'Number of project phases: 5', 'Frequency of evaluations: Every 30 days'],
    }
  },
  {
    id: 'llm-c-0206', area: 'C', subTopic: 'farm-electrification',
    topic: 'Ohm\'s Law', type: 'computation', difficulty: 'easy',
    question: 'A circuit has a resistance of 10 ohms and current of 3 amperes, compute the voltage within the circuit. Note that the circuit is connected to a 240 V supply and the temperature is 30°C.',
    options: ['30 V', '20 V', '10 V', '240 V'],
    correctAnswer: 1,
    solution: {
      given: 'R = 10 ohms, I = 3 A',
      steps: ['Use Ohm\'s law: V = IR', 'V = 10 ohms * 3 A = 30 V'],
      formula: 'V = IR',
      keyConcept: 'Ohm\'s law relates voltage, current, and resistance.',
      commonMistakes: ['Confusing voltage with power', 'Using incorrect current value', 'Forgetting to multiply values'],
      extraneousGivens: ['Power supply: 240 V', 'Temperature: 30°C'],
    }
  },
  {
    id: 'llm-c-0207', area: 'C', subTopic: 'farm-electrification',
    topic: 'Conductance', type: 'computation', difficulty: 'easy',
    question: 'A circuit has been connected to a 24-V source and current of 4 amperes. Compute for the conductance within the circuit. The circuit also has a faulty connection that adds 5 ohms of resistance.',
    options: ['0.16667 mhos', '0.25 mhos', '2 mhos', '0.3333 mhos'],
    correctAnswer: 0,
    solution: {
      given: 'V = 24 V, I = 4 A, R = 5 ohms (faulty connection)',
      steps: ['Calculate conductance: G = I/V =', 'G = 4 A / 24 V = 0.16667 mhos'],
      formula: 'G = I/V',
      keyConcept: 'Conductance is the reciprocal of resistance.',
      commonMistakes: ['Using power instead of current', 'Not dividing correctly', 'Forgetting to account for the total resistance'],
      extraneousGivens: ['Faulty connection resistance: 5 ohms'],
    }
  },
  {
    id: 'llm-c-0208', area: 'C', subTopic: 'farm-electrification',
    topic: 'Power Calculation', type: 'computation', difficulty: 'average',
    question: 'A circuit has a resistance of 15 ohms and current of 2 amperes. Compute the power generated in the circuit. The circuit is powered by a solar panel rated at 100 W, and the ambient temperature is 35°C.',
    options: ['60 W', '30 W', '15 W', '120 W'],
    correctAnswer: 0,
    solution: {
      given: 'R = 15 ohms, I = 2 A',
      steps: ['Use the formula P = I^2 * R', 'P = (2 A)^2 * 15 ohms = 4 * 15 = 60 W'],
      formula: 'P = I^2 * R',
      keyConcept: 'Power is calculated from current and resistance.',
      commonMistakes: ['Forgetting to square the current', 'Using the wrong resistance value', 'Confusing power with voltage'],
      extraneousGivens: ['Solar panel rating: 100 W', 'Ambient temperature: 35°C'],
    }
  },
  {
    id: 'llm-c-0209', area: 'C', subTopic: 'farm-electrification',
    topic: 'Energy Calculation', type: 'computation', difficulty: 'average',
    question: 'A circuit has a resistance of 8 ohms and current of 3 amperes. Compute the energy generated over a time period of 30 minutes. Assume the circuit is also exposed to a 0.5 kW load.',
    options: ['720 J', '5400 J', '1800 J', '2160 J'],
    correctAnswer: 3,
    solution: {
      given: 'R = 8 ohms, I = 3 A, t = 30 min',
      steps: ['Convert time to seconds: 30 min = 1800 s', 'Calculate power: P = I^2 * R = (3 A)^2 * 8 ohms = 72 W', 'Calculate energy: E = P * t = 72 W * 1800 s = 129600 J'],
      formula: 'E = P * t',
      keyConcept: 'Energy can be calculated using power and time.',
      commonMistakes: ['Forgetting to convert time to seconds', 'Using the wrong formula for energy', 'Confusing energy with power'],
      extraneousGivens: ['Additional load: 0.5 kW'],
    }
  },
  {
    id: 'llm-c-0210', area: 'C', subTopic: 'farm-electrification',
    topic: 'Capacitor Calculation', type: 'computation', difficulty: 'average',
    question: 'A capacitor of 200 microfarads is connected to a 12 V battery. Compute its stored energy. Note that the circuit also uses a 50-ohm resistor in series, and the capacitor was charged for 10 minutes.',
    options: ['0.012 J', '0.00012 J', '0.1 J', '0.024 J'],
    correctAnswer: 0,
    solution: {
      given: 'C = 200 uF, V = 12 V, t = 10 min',
      steps: ['Use the formula: E = 0.5 * C * V^2', 'Convert capacitance: C = 200 uF = 200 * 10^-6 F', 'E = 0.5 * (200 * 10^-6 F) * (12 V)^2 = 0.012 J'],
      formula: 'E = 0.5 * C * V^2',
      keyConcept: 'The energy stored in a capacitor is based on capacitance and voltage.',
      commonMistakes: ['Not converting microfarads to farads', 'Using wrong voltage', 'Forgetting to multiply by 0.5'],
      extraneousGivens: ['Series resistor: 50 ohms', 'Charging time: 10 minutes'],
    }
  },
  {
    id: 'llm-c-0211', area: 'C', subTopic: 'farm-electrification',
    topic: 'Inductor Calculation', type: 'computation', difficulty: 'average',
    question: 'An inductor of 5 henries is connected to a 10 A current. Compute its energy stored. The circuit also operates under a source voltage of 30 V and has an external load of 15 ohms.',
    options: ['250 J', '100 J', '150 J', '200 J'],
    correctAnswer: 0,
    solution: {
      given: 'L = 5 H, I = 10 A',
      steps: ['Use the formula: E = 0.5 * L * I^2', 'E = 0.5 * 5 H * (10 A)^2 = 250 J'],
      formula: 'E = 0.5 * L * I^2',
      keyConcept: 'Energy stored in an inductor is based on inductance and current.',
      commonMistakes: ['Forgetting to square the current', 'Using resistance instead of inductance', 'Missing the multiplication by 0.5'],
      extraneousGivens: ['Source voltage: 30 V', 'External load: 15 ohms'],
    }
  },
  {
    id: 'llm-c-0212', area: 'C', subTopic: 'farm-electrification',
    topic: 'Power Factor', type: 'computation', difficulty: 'hard',
    question: 'A circuit has an apparent power of 300 VA and a real power of 240 W. Compute its power factor. The circuit also has a voltage of 220 V across it.',
    options: ['0.8', '1.2', '0.6', '0.5'],
    correctAnswer: 0,
    solution: {
      given: 'S = 300 VA, P = 240 W',
      steps: ['Use the formula: Power Factor = P/S', 'Power Factor = 240 W / 300 VA = 0.8'],
      formula: 'Power Factor = P/S',
      keyConcept: 'Power factor indicates the efficiency of power usage in the circuit.',
      commonMistakes: ['Confusing apparent and real power', 'Using wrong equation', 'Not simplifying correctly'],
      extraneousGivens: ['Voltage: 220 V'],
    }
  },
  {
    id: 'llm-c-0213', area: 'C', subTopic: 'farm-electrification',
    topic: 'Transformer Turn Ratio', type: 'computation', difficulty: 'hard',
    question: 'A transformer has 100 turns in the primary coil and produces 50 volts across the secondary coil. Calculate the number of turns in the secondary coil if the primary voltage is 220 V. Additionally, the transformer is from a local brand, Transtech.',
    options: ['50 turns', '20 turns', '100 turns', '200 turns'],
    correctAnswer: 2,
    solution: {
      given: 'Np = 100 turns, Vs = 50 V, Vp = 220 V',
      steps: ['Use the formula: Vs/Vp = Ns/Np', '50/220 = Ns/100', 'Ns = (50/220) * 100 = 22.73 turns'],
      formula: 'Vs/Vp = Ns/Np',
      keyConcept: 'Transformer turn ratio explains the relationship of voltages to turns.',
      commonMistakes: ['Calculating voltage as current', 'Misapplying formula', 'Neglecting to cross-multiply correctly'],
      extraneousGivens: ['Transformer brand: Transtech'],
    }
  },
  {
    id: 'llm-c-0214', area: 'C', subTopic: 'farm-electrification',
    topic: 'Illumination Calculation', type: 'computation', difficulty: 'hard',
    question: 'A room measures 8 m x 10 m and is lit using a 40 W lamp emitting 400 lumens. Calculate the illumination in lux. The room also has a window of 2 m x 2 m and an average daylight of 200 lumens.',
    options: ['18.75 lux', '25 lux', '30 lux', '22.5 lux'],
    correctAnswer: 1,
    solution: {
      given: 'Area = 8 m x 10 m, Lumens = 400 + 200',
      steps: ['Total lumens = 400 + 200 = 600 lumens', 'Area = 8 m * 10 m = 80 m²', 'Illumination (lux) = Total Lumens/Area = 600/80 = 7.5 lux'],
      formula: 'Illumination (lux) = Total Lumens/Area',
      keyConcept: 'Illumination measures light intensity as perceived by the human eye.',
      commonMistakes: ['Forgetting to add daylight lumens', 'Calculating area incorrectly', 'Confusing lux with lumens'],
      extraneousGivens: ['Window size: 2 m x 2 m', 'Average daylight: 200 lumens'],
    }
  },
  {
    id: 'llm-c-0215', area: 'C', subTopic: 'farm-electrification',
    topic: 'Hybrid Energy Facility', type: 'theory', difficulty: 'average',
    question: 'What is considered a Hybrid Energy Facility in the context of Philippine laws?',
    options: ['Only uses wind energy', 'Combines two or more energy sources', 'Only solar energy systems', 'Energy facilities using biofuels only'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'Hybrid Energy Facilities combine different energy sources.',
      commonMistakes: ['Misdefining hybrid energy', 'Limiting to one source', 'Confusing with direct energy sources'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-c-0216', area: 'C', subTopic: 'farm-electrification',
    topic: 'Charging Time Calculation', type: 'computation', difficulty: 'average',
    question: 'A battery has a capacity of 100 Ah and is being charged at a rate of 10 A. Calculate the charging time in hours. Note that the ambient temperature during charging is 25°C and the charger is rated at 2 kW.',
    options: ['10 hours', '8 hours', '12 hours', '15 hours'],
    correctAnswer: 0,
    solution: {
      given: 'Capacity = 100 Ah, Charging rate = 10 A',
      steps: ['Charging time = Capacity / Charging rate = 100 Ah / 10 A = 10 hours'],
      formula: 'Charging time (h) = Capacity (Ah) / Charging rate (A)',
      keyConcept: 'Charging time is calculated from capacity and rate.',
      commonMistakes: ['Neglecting conversion of units', 'Using the wrong formula', 'Not applying the right values'],
      extraneousGivens: ['Charger rating: 2 kW', 'Ambient temperature: 25°C'],
    }
  },
  {
    id: 'llm-c-0217', area: 'C', subTopic: 'farm-electrification',
    topic: 'Electric Motor Efficiency', type: 'computation', difficulty: 'hard',
    question: 'An electric motor has a mechanical power output of 75 kW and consumes 100 kW of electrical energy. Compute the efficiency of the motor. Note that the motor is designed for agricultural applications and has an idle power draw of 5 kW.',
    options: ['75%', '80%', '70%', '85%'],
    correctAnswer: 0,
    solution: {
      given: 'Pout = 75 kW, Pin = 100 kW',
      steps: ['Efficiency = (Pout / Pin) * 100%', 'Efficiency = (75 kW / 100 kW) * 100% = 75%'],
      formula: 'Efficiency (%) = (Pout / Pin) * 100%',
      keyConcept: 'Efficiency is a measure of how well input energy is converted to useful output.',
      commonMistakes: ['Miscalculating input or output power', 'Confusing input with idle power', 'Forgetting to multiply by 100%'],
      extraneousGivens: ['Idle power draw: 5 kW'],
    }
  },
  {
    id: 'llm-c-0218', area: 'C', subTopic: 'farm-electrification',
    topic: 'Voltage Drop Calculation', type: 'computation', difficulty: 'average',
    question: 'Calculate the voltage drop across a 200 m long copper cable (ρ = 1.68 x 10^-8 ohm*m) with a load current of 20 A. The cable has a cross-sectional area of 10 mm². Additionally, the circuit runs through a humid area which is prone to corrosion.',
    options: ['0.4 V', '0.5 V', '0.8 V', '0.6 V'],
    correctAnswer: 3,
    solution: {
      given: 'L = 200 m, I = 20 A, A = 10 mm² = 10 x 10^-6 m², ρ = 1.68 x 10^-8 ohm*m',
      steps: ['Calculate resistance: R = ρ(L/A) = (1.68 x 10^-8)(200)/(10 x 10^-6)', 'Voltage drop: Vdrop = I * R = 20 * (1.68 x 10^-8 * 200 / 10 x 10^-6) = 0.6 V'],
      formula: 'R = ρ(L/A), Vdrop = I * R',
      keyConcept: 'Voltage drop is determined by resistance and current.',
      commonMistakes: ['Using wrong units for length', 'Incorrectly calculating cross-sectional area', 'Omitting conversion factors'],
      extraneousGivens: ['Cable length: 200 m', 'Hydraulic area prone to corrosion'],
    }
  },
  {
    id: 'llm-c-0219', area: 'C', subTopic: 'farm-electrification',
    topic: 'Load Calculation', type: 'computation', difficulty: 'hard',
    question: 'Calculate the total load in kilowatts for a farm with 15 equipment units drawing 2 kW each, and an additional 3 units drawing 3 kW each. The farm is also serviced by a generator rated at 10 kW.',
    options: ['30 kW', '36 kW', '35 kW', '20 kW'],
    correctAnswer: 1,
    solution: {
      given: 'Units, Equipment1 = 15 (2 kW each), Equipment2 = 3 (3 kW each)',
      steps: ['Total Load = (15 * 2 kW) + (3 * 3 kW) = 30 kW + 9 kW = 39 kW'],
      formula: 'Total Load = (N1 * P1) + (N2 * P2)',
      keyConcept: 'Total load calculation aggregates all equipment power needs.',
      commonMistakes: ['Confusing number of units with power rating', 'Failing to account for all units', 'Overlooking efficiency ratings'],
      extraneousGivens: ['Generator rating: 10 kW'],
    }
  },
  {
    id: 'llm-c-0220', area: 'C', subTopic: 'farm-electrification',
    topic: 'Cost of Electricity', type: 'computation', difficulty: 'hard',
    question: 'If a farm uses 500 kWh in a month and the cost of electricity is 10 PHP/kWh, calculate the total cost. The farm also has an additional fee of 50 PHP for maintenance.',
    options: ['5000 PHP', '5100 PHP', '6000 PHP', '4500 PHP'],
    correctAnswer: 1,
    solution: {
      given: 'Energy used = 500 kWh, Cost per kWh = 10 PHP, Maintenance fee = 50 PHP',
      steps: ['Calculate total cost: Total Cost = (Energy * Cost) + Maintenance Fee', 'Total Cost = (500 kWh * 10 PHP/kWh) + 50 PHP = 5000 PHP + 50 PHP = 5050 PHP'],
      formula: 'Total Cost = (Energy * Cost) + Maintenance Fee',
      keyConcept: 'Cost calculations include both energy usage and additional fees.',
      commonMistakes: ['Not adding maintenance fees', 'Calculating only electricity without fees', 'Converting units incorrectly'],
      extraneousGivens: ['Cost per kWh: 10 PHP', 'Maintenance fee: 50 PHP'],
    }
  },
  {
    id: 'llm-c-0221', area: 'C', subTopic: 'farm-electrification',
    topic: 'Basic Electrical Principles', type: 'theory', difficulty: 'easy',
    question: 'What is the unit of electric current?',
    options: ['Volt', 'Ampere', 'Ohm', 'Watt'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0222', area: 'C', subTopic: 'farm-electrification',
    topic: 'Farm Electrification Planning', type: 'theory', difficulty: 'average',
    question: 'What should be prioritized in designing a farm electrification plan?',
    options: ['Aesthetic appeal', 'Sustainability of energy use', 'A variety of electrical appliances', 'Circuit simplicity'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0223', area: 'C', subTopic: 'farm-electrification',
    topic: 'Electricity Consumption', type: 'computation', difficulty: 'average',
    question: 'A farm has equipment that uses 2000 W. If the equipment is operated for 5 hours daily, calculate the total energy consumption in kilowatt-hours (kWh) for a month (30 days). The voltage supply is 220 V and the current is 9.09 A.',
    options: ['300 kWh', '150 kWh', '100 kWh', '200 kWh'],
    correctAnswer: 0,
    solution: {
      given: 'Power = 2000 W, Time = 5 hours/day, Days = 30',
      steps: ['Daily energy = Power × Time = 2000 W × 5 h = 10000 Wh = 10 kWh', 'Monthly energy = Daily energy × Days = 10 kWh × 30 = 300 kWh'],
      formula: 'Energy (kWh) = Power (kW) × Time (h)',
      keyConcept: 'Energy consumption can be calculated from power and operation time.',
      commonMistakes: ['Using the current or voltage in calculations', 'Incorrectly converting to kilowatt-hours', 'Not multiplying by the number of days'],
      extraneousGivens: ['Voltage supply: 220 V', 'Current: 9.09 A'],
    }
  },
  {
    id: 'llm-c-0224', area: 'C', subTopic: 'farm-electrification',
    topic: 'Electrical Safety', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is a critical safety measure in farm electrification?',
    options: ['Using ungrounded equipment', 'Overloading circuits', 'Proper grounding of electrical systems', 'Ignoring electrical codes'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0225', area: 'C', subTopic: 'farm-electrification',
    topic: 'Power Generation', type: 'computation', difficulty: 'hard',
    question: 'A diesel generator operates at a power factor of 0.8 and generates 50 kW of real power. What is the apparent power in kVA? The generator\'s efficiency is 85%, the fuel cost is 50 PHP per liter, and it consumes 6 liters per hour.',
    options: ['62.5 kVA', '70.6 kVA', '42.5 kVA', '55.0 kVA'],
    correctAnswer: 0,
    solution: {
      given: 'Real Power = 50 kW, Power Factor = 0.8',
      steps: ['Calculate apparent power: S = P / PF = 50 kW / 0.8 = 62.5 kVA'],
      formula: 'S (kVA) = P (kW) / PF',
      keyConcept: 'Apparent power relates real power and power factor.',
      commonMistakes: ['Confusing real power with apparent power', 'Neglecting power factor', 'Using the generator efficiency incorrectly'],
      extraneousGivens: ['Efficiency: 85%', 'Fuel cost: 50 PHP/liter', 'Fuel consumption: 6 liters/hour'],
    }
  },
  {
    id: 'llm-c-0226', area: 'C', subTopic: 'farm-electrification',
    topic: 'Electric Motors', type: 'theory', difficulty: 'average',
    question: 'What is the primary function of an electric motor in farm equipment?',
    options: ['To generate electrical energy', 'To convert electrical energy into mechanical energy', 'To store electrical energy', 'To regulate electrical flow'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0227', area: 'C', subTopic: 'farm-electrification',
    topic: 'Voltage Regulation', type: 'computation', difficulty: 'hard',
    question: 'A voltage regulator maintains the output voltage at 240 V. If the input voltage fluctuates between 220 V and 260 V, calculate the average current supplied if the load is 1500 W. The insulation resistance is measured at 2 MΩ, and there are 3 phase wires.',
    options: ['6.25 A', '7.5 A', '12.5 A', '9.0 A'],
    correctAnswer: 1,
    solution: {
      given: 'Power = 1500 W, Voltage = 240 V',
      steps: ['Current = Power / Voltage = 1500 W / 240 V = 6.25 A'],
      formula: 'I (A) = P (W) / V (V)',
      keyConcept: 'Current is calculated using power and voltage.',
      commonMistakes: ['Using the fluctuating voltage instead of regulated voltage', 'Confusing average current with peak current', 'Not converting units properly'],
      extraneousGivens: ['Insulation resistance: 2 MΩ', 'Number of phase wires: 3'],
    }
  },
  {
    id: 'llm-c-0228', area: 'C', subTopic: 'farm-electrification',
    topic: 'Circuit Components', type: 'theory', difficulty: 'easy',
    question: 'Which component is used to store electrical energy in a circuit?',
    options: ['Resistor', 'Capacitor', 'Inductor', 'Transistor'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0229', area: 'C', subTopic: 'farm-electrification',
    topic: 'Electrical Efficiency', type: 'computation', difficulty: 'average',
    question: 'If a motor operates at 90% efficiency and consumes 1000 W of electrical power, how much mechanical power does it produce? The ambient temperature is 25°C and humidity is 60%.',
    options: ['900 W', '800 W', '1100 W', '950 W'],
    correctAnswer: 0,
    solution: {
      given: 'Input Power = 1000 W, Efficiency = 90%',
      steps: ['Output Power = Input Power × Efficiency = 1000 W × 0.90 = 900 W'],
      formula: 'Output Power = Input Power × Efficiency',
      keyConcept: 'Efficiency relates input and output power for devices.',
      commonMistakes: ['Neglecting percent conversion', 'Calculating input instead of output', 'Using incorrect efficiency value'],
      extraneousGivens: ['Ambient temperature: 25°C', 'Humidity: 60%'],
    }
  },
  {
    id: 'llm-c-0230', area: 'C', subTopic: 'farm-electrification',
    topic: 'Load Calculations', type: 'computation', difficulty: 'hard',
    question: 'A farm building has a total of 10 lights (100 W each) and 5 machines (500 W each). Calculate the total load in kilowatts. Also, consider the electric fan making 75 W, and the refrigerator operating at 200 W.',
    options: ['3.25 kW', '3.50 kW', '4.00 kW', '4.25 kW'],
    correctAnswer: 2,
    solution: {
      given: 'Lights = 10 × 100 W, Machines = 5 × 500 W, Fan = 75 W, Refrigerator = 200 W',
      steps: ['Total Load = (10 × 100 W) + (5 × 500 W) + 75 W + 200 W = 1000 W + 2500 W + 75 W + 200 W = 3775 W', 'Convert to kW: 3775 W / 1000 = 3.775 kW'],
      formula: 'Total Load (kW) = (Sum of all device wattages) / 1000',
      keyConcept: 'Total load calculations are essential for proper system design.',
      commonMistakes: ['Forgetting to convert watts to kilowatts', 'Neglecting additional devices', 'Adding instead of summing values'],
      extraneousGivens: ['Electric fan: 75 W', 'Refrigerator: 200 W'],
    }
  },
  {
    id: 'llm-c-0231', area: 'C', subTopic: 'farm-electrification',
    topic: 'Energy Conservation', type: 'theory', difficulty: 'average',
    question: 'What is the benefit of using energy-efficient appliances on the farm?',
    options: ['Higher initial cost', 'Increased energy consumption', 'Lower electricity bills', 'Increased maintenance requirements'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0232', area: 'C', subTopic: 'farm-electrification',
    topic: 'Renewable Energy Sources', type: 'theory', difficulty: 'hard',
    question: 'Which renewable energy source is most commonly used for farm electrification in the Philippines?',
    options: ['Wind energy', 'Solar energy', 'Geothermal energy', 'Hydropower'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0233', area: 'C', subTopic: 'farm-electrification',
    topic: 'Electrical Load Demand', type: 'theory', difficulty: 'average',
    question: 'What is the purpose of performing a load demand calculation in farm electrification?',
    options: ['To determine energy consumption', 'To identify equipment failures', 'To estimate yearly crop yield', 'To calculate land area needed'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0234', area: 'C', subTopic: 'farm-electrification',
    topic: 'Motor Load Calculations', type: 'computation', difficulty: 'average',
    question: 'A motor runs at 3 hp and has an efficiency of 85%. If it operates for 4 hours, what is the energy consumed in kilowatt-hours? The ambient pressure is 101 kPa and temperature is 28°C.',
    options: ['12.6 kWh', '18.6 kWh', '10.2 kWh', '14.5 kWh'],
    correctAnswer: 0,
    solution: {
      given: 'Horsepower = 3 hp, Efficiency = 85%, Operating Time = 4 hours',
      steps: ['Convert hp to watts: 3 hp × 746 W/hp = 2238 W', 'Energy consumed = Power × Time = 2238 W × 4 h = 8952 Wh = 8.952 kWh, adjust for efficiency: 8.952 / 0.85 = 10.55 kWh'],
      formula: 'Energy consumed (kWh) = (Power (kW) × Time (h)) / Efficiency',
      keyConcept: 'Energy consumption calculations consider power, time, and efficiency.',
      commonMistakes: ['Incorrectly converting horsepowers', 'Neglecting efficiency', 'Not converting to kWh'],
      extraneousGivens: ['Ambient pressure: 101 kPa', 'Temperature: 28°C'],
    }
  },
  {
    id: 'llm-c-0235', area: 'C', subTopic: 'farm-electrification',
    topic: 'Electrical Circuit Analysis', type: 'computation', difficulty: 'easy',
    question: 'A circuit has a resistance of 10 ohms and a current of 2 amperes. Calculate the voltage within the circuit. (Note: The ambient temperature is 30°C, and the circuit is part of a larger agricultural system.)',
    options: ['0.1 V', '200 V', '20 V', '15 V'],
    correctAnswer: 2,
    solution: {
      given: 'R = 10 ohms, I = 2 A',
      steps: ['Use Ohm\'s Law: V = I × R', 'V = 2 A × 10 ohms = 20 V'],
      formula: 'V = I × R',
      keyConcept: 'Ohm\'s Law relates the voltage, current, and resistance in an electrical circuit.',
      commonMistakes: ['Forgetting to use Ohm\'s Law', 'Confusing voltage with power'],
      extraneousGivens: ['Ambient temperature: 30°C', 'Circuit part of a larger system'],
    }
  },
  {
    id: 'llm-c-0236', area: 'C', subTopic: 'farm-electrification',
    topic: 'Electrical Conductance', type: 'computation', difficulty: 'easy',
    question: 'A circuit connected to a 12-V source has a current of 6 amperes. Compute for the conductance in mhos. (Extraneous info: The circuit is used for a rice farm\'s irrigation system.)',
    options: ['0.25 mhos', '0.25 mohs', '2.25 siemens', '1.5 siemens'],
    correctAnswer: 0,
    solution: {
      given: 'V = 12 V, I = 6 A',
      steps: ['Conductance (G) = I / V = 6 A / 12 V = 0.5 S', 'Convert to mhos: 0.5 S = 0.5 mhos.'],
      formula: 'G = I / V',
      keyConcept: 'Conductance is the reciprocal of resistance.',
      commonMistakes: ['Confusing mhos with siemens', 'Incorrect division'],
      extraneousGivens: ['Used for a rice farm\'s irrigation system'],
    }
  },
  {
    id: 'llm-c-0237', area: 'C', subTopic: 'farm-electrification',
    topic: 'Power Calculation', type: 'computation', difficulty: 'easy',
    question: 'Given a circuit with a resistance of 100 ohms and a current of 1 ampere, calculate the power generated in the circuit. (Extraneous info: The electric motor is used for coconut processing.)',
    options: ['100 W', '0.1 W', '10 W', '1.0 W'],
    correctAnswer: 0,
    solution: {
      given: 'R = 100 ohms, I = 1 A',
      steps: ['Use the formula: P = I²R', 'P = (1 A)² × 100 ohms = 100 W'],
      formula: 'P = I²R',
      keyConcept: 'Power is calculated as the product of the square of the current and resistance.',
      commonMistakes: ['Using the wrong formula', 'Confusing power with voltage'],
      extraneousGivens: ['Motor used for coconut processing'],
    }
  },
  {
    id: 'llm-c-0238', area: 'C', subTopic: 'farm-electrification',
    topic: 'Electric Charge Calculation', type: 'computation', difficulty: 'average',
    question: 'A circuit has a resistance of 10 ohms and current of 1 ampere. Compute the electric charge generated in 1 minute. (Extraneous info: The circuit is part of a corn milling machine setup.)',
    options: ['C = 60', 'C = 120', 'C = 30', 'C = 90'],
    correctAnswer: 1,
    solution: {
      given: 'R = 10 ohms, I = 1 A, t = 60 seconds',
      steps: ['C = I × t = 1 A × 60 s = 60 C'],
      formula: 'C = I × t',
      keyConcept: 'Electric charge is the product of current and time.',
      commonMistakes: ['Using wrong time conversion', 'Forgetting to multiply'],
      extraneousGivens: ['Circuit part of a corn milling machine setup'],
    }
  },
  {
    id: 'llm-c-0239', area: 'C', subTopic: 'farm-electrification',
    topic: 'Energy Calculation', type: 'computation', difficulty: 'average',
    question: 'A circuit with a resistance of 12 ohms and a current of 1 ampere generates energy in 1 minute. Calculate the energy produced in joules. (Extraneous info includes: the circuit is for a cattle feed mixing machine.)',
    options: ['360 J', '720 J', '120 J', '600 J'],
    correctAnswer: 1,
    solution: {
      given: 'R = 12 ohms, I = 1 A, t = 60 s',
      steps: ['Energy (J) = V × I × t', 'V = I × R = 1 A × 12 ohms = 12 V', 'Energy = 12 V × 1 A × 60 s = 720 J'],
      formula: 'Energy (J) = V × I × t',
      keyConcept: 'Energy produced in a circuit involves voltage, current, and time.',
      commonMistakes: ['Confusing energy with power', 'Using incorrect time unit'],
      extraneousGivens: ['Circuit for a cattle feed mixing machine'],
    }
  },
  {
    id: 'llm-c-0240', area: 'C', subTopic: 'farm-electrification',
    topic: 'Energy Consumption Calculation', type: 'computation', difficulty: 'average',
    question: 'A circuit with a resistance of 10 ohms uses a current of 1 ampere for an hour. Calculate the energy consumption in kW-hr. (Extraneous info: The circuit powers a rice mill machine.)',
    options: ['0.2 kW-hr', '0.1 kW-hr', '0.01 kW-hr', '0.02 kW-hr'],
    correctAnswer: 0,
    solution: {
      given: 'R = 10 ohms, I = 1 A, t = 1 hr = 3600 s',
      steps: ['Energy (Watt-sec) = P × t = (I²R) × t', 'P = (1 A)² × 10 ohms = 10 W', 'Energy = 10 W × 3600 s = 36000 J', 'Convert to kW-hr: 36000 J / 3600000 = 0.01 kW-hr'],
      formula: 'Energy (kW-hr) = (I²R) × t',
      keyConcept: 'Energy consumption calculation involves power and time.',
      commonMistakes: ['Confusing units of energy', 'Forgetting to convert'],
      extraneousGivens: ['Circuit powers a rice mill machine'],
    }
  },
  {
    id: 'llm-c-0241', area: 'C', subTopic: 'farm-electrification',
    topic: 'Duration of Supply Calculation', type: 'computation', difficulty: 'average',
    question: 'A circuit has generated an energy of 150 J with a power of 20 W. Compute the duration of supply in seconds. (Extraneous info: This circuit is part of an irrigation system for rice fields.)',
    options: ['300 sec', '150 sec', '7.5 sec', '60 sec'],
    correctAnswer: 1,
    solution: {
      given: 'Energy = 150 J, Power = 20 W',
      steps: ['Time (t) = Energy / Power = 150 J / 20 W = 7.5 sec'],
      formula: 't = Energy / Power',
      keyConcept: 'Duration of supply can be determined from energy and power.',
      commonMistakes: ['Incorrect division', 'Confusing power with energy'],
      extraneousGivens: ['Circuit part of an irrigation system for rice fields'],
    }
  },
  {
    id: 'llm-c-0242', area: 'C', subTopic: 'farm-electrification',
    topic: 'Capacitance Calculation', type: 'computation', difficulty: 'hard',
    question: 'Given a capacitor connected to a 10-mho circuit generating an energy of 150 J with a power of 20 W, compute the capacitor\'s farad value. (Extraneous information: The capacitor is used in a solar pump system.)',
    options: ['150 Farad', '75 Farad', '3000 Farad', '1125 Farad'],
    correctAnswer: 1,
    solution: {
      given: 'Conductance G = 10 mho, Energy = 150 J, Power = 20 W',
      steps: ['Using the relation F = E/V; Need to find V first', 'Power = VI, where I = 20 W / V', 'Solve for V: V = 20/W', 'Then substitute into F = 150/(20/W) = 75 Farad'],
      formula: 'F = E / V',
      keyConcept: 'Capacitance relates energy stored in a capacitor to voltage across it.',
      commonMistakes: ['Miscalculating voltage', 'Confusing capacitors with resistors'],
      extraneousGivens: ['Capacitor used in a solar pump system'],
    }
  },
  {
    id: 'llm-c-0243', area: 'C', subTopic: 'farm-electrification',
    topic: 'Inductance Calculation', type: 'computation', difficulty: 'hard',
    question: 'An inductor has been connected to a 10-ohm circuit, generating an energy of 150 J with a power of 20 W. Compute the inductor\'s henry value. (Extraneous info: The inductor is utilized in an agricultural irrigation system.)',
    options: ['35.0 Henry', '75.0 Henry', '37.5 Henry', '100 Henry'],
    correctAnswer: 1,
    solution: {
      given: 'R = 10 ohms, Energy = 150 J, Power = 20 W',
      steps: ['Using P = VI; find V first.', 'Then, Energy = 1/2 * L * I²; solve for L.', 'Rearranging gives L = 2*Energy/I².'],
      formula: 'L = 2*Energy/I²',
      keyConcept: 'Inductance relates the energy stored in the magnetic field to the current flowing through it.',
      commonMistakes: ['Incorrect energy formula', 'Misinterpreting current'],
      extraneousGivens: ['Inductor utilized in an agricultural irrigation system'],
    }
  },
  {
    id: 'llm-c-0244', area: 'C', subTopic: 'farm-electrification',
    topic: 'Circuit Resistance Calculation', type: 'computation', difficulty: 'average',
    question: 'A circuit has a series of 10 resistors each with 20-ohm resistance connected in series. Compute for the total resistance. (Extraneous info: This setup is for a small coconut oil processing machine.)',
    options: ['200 ohms', '20 ohms', '2 ohms', '1000 ohms'],
    correctAnswer: 0,
    solution: {
      given: 'Resistance of each resistor = 20 ohms, Number of resistors = 10',
      steps: ['Total Resistance R_total = R1 + R2 + ... + Rn', 'R_total = 20 ohms × 10 = 200 ohms'],
      formula: 'R_total = R × n',
      keyConcept: 'In series circuits, total resistance is the sum of all resistances.',
      commonMistakes: ['Dividing instead of multiplying', 'Miscounting resistors'],
      extraneousGivens: ['Setup for a small coconut oil processing machine'],
    }
  },
  {
    id: 'llm-c-0245', area: 'C', subTopic: 'farm-electrification',
    topic: 'Power Factor Calculation', type: 'theory', difficulty: 'average',
    question: 'In a purely resistive circuit, how does the current relate to the voltage and the power factor? (Extraneous info: This situation is typical in rice drying equipment.)',
    options: ['They are out of phase', 'They are in phase', 'Power factor is 0', 'Power factor is not defined'],
    correctAnswer: 1,
    solution: {
      given: 'Purely Resistor Circuit',
      steps: [],
      
      keyConcept: 'Power factor indicates how effectively power is being converted into useful work output.',
      commonMistakes: ['Misunderstanding phase relationships', 'Confusing with inductive circuits'],
      extraneousGivens: ['Typical in rice drying equipment'],
    }
  },
  {
    id: 'llm-c-0246', area: 'C', subTopic: 'farm-electrification',
    topic: 'Electrical Laws', type: 'theory', difficulty: 'easy',
    question: 'What does Ohm’s Law state in terms of voltage, current, and resistance? (Extraneous info: Relevant for evaluating electric motors in agriculture.)',
    options: ['V = IR', 'R = IV', 'P = I²R', 'I = VR'],
    correctAnswer: 0,
    solution: {
      given: 'Ohm’s law relationship',
      steps: ['V = voltage, I = current, R = resistance.'],
      
      keyConcept: 'Ohm\'s Law is crucial in designing circuits and understanding electrical systems.',
      commonMistakes: ['Confusing terms or rearranging incorrectly', 'Misapplying it to non-linear devices'],
      extraneousGivens: ['Relevant for evaluating electric motors in agriculture'],
    }
  },
  {
    id: 'llm-c-0247', area: 'C', subTopic: 'farm-electrification',
    topic: 'Distribution System Definition', type: 'theory', difficulty: 'easy',
    question: 'What is defined as the system of wires and associated facilities belonging to a franchised distribution utility? (Extraneous info: This context is for rural electrification in the Philippines.)',
    options: ['Distribution system', 'Transmission system', 'Power lines', 'Service lines'],
    correctAnswer: 0,
    solution: {
      given: 'Definition of distribution system',
      steps: ['Identify and define key components of electrical distribution.'],
      
      keyConcept: 'Distribution systems are essential for delivering electricity to end users.',
      commonMistakes: ['Mixing up terms of distribution and transmission', 'Misunderstanding service lines'],
      extraneousGivens: ['Context for rural electrification in the Philippines'],
    }
  },
  {
    id: 'llm-c-0248', area: 'C', subTopic: 'farm-electrification',
    topic: 'Voltage Calculation', type: 'computation', difficulty: 'hard',
    question: 'A 7.3-V battery with an internal resistance of 0.3 Ω is connected in series with a 9.5-Ω resistor. Compute the lost volts from the battery. (Extraneous info: This battery is used in a solar-powered irrigation system.)',
    options: ['0.5 V', '0.3 V', '0.8 V', '0.2 V'],
    correctAnswer: 2,
    solution: {
      given: 'V_battery = 7.3 V, R_internal = 0.3 Ω, R_external = 9.5 Ω',
      steps: ['Total resistance R_total = R_external + R_internal', 'Lost voltage V_lost = (I × R_internal)', 'First find I = V_battery / R_total', 'Then calculate lost volts.'],
      formula: 'V_lost = I × R_internal',
      keyConcept: 'Understanding the internal resistance impact on effective voltage.',
      commonMistakes: ['Incorrect sum of resistance', 'Forgetting to apply Ohm\'s Law correctly'],
      extraneousGivens: ['Used in a solar-powered irrigation system'],
    }
  },
  {
    id: 'llm-c-0249', area: 'C', subTopic: 'farm-electrification',
    topic: 'Conversion Calculation', type: 'computation', difficulty: 'average',
    question: 'Convert 350 MCM to square millimeters. (Extraneous info: The wire will be used for connecting motors in a corn dryer system.)',
    options: ['177.345', '216.675', '152.01', '126.675'],
    correctAnswer: 0,
    solution: {
      given: '350 MCM',
      steps: ['1 MCM = 0.5067 mm²', '351 MCM = 350 × 0.5067 = 177.345 mm²'],
      formula: 'Area (mm²) = MCM × 0.5067',
      keyConcept: 'Understanding wire size conversions is important for electrical installations.',
      commonMistakes: ['Mixing up unit conversions', 'Forgetting the conversion factor'],
      extraneousGivens: ['For connecting motors in a corn dryer system'],
    }
  },
  {
    id: 'llm-c-0250', area: 'C', subTopic: 'farm-electrification',
    topic: 'Fixture Calculation', type: 'computation', difficulty: 'average',
    question: 'An office floor is lighted at an average maintained 70 foot-candles. The floor measures 20 meters by 70 meters. Using 2-lamp fixtures, how many fixtures are required, given each F40 T12 CW lamp emits 3,150 lumens? (Extraneous info: The lamps will be installed in a coconut processing facility.)',
    options: ['9 fixtures', '10 fixtures', '11 fixtures', '6 fixtures'],
    correctAnswer: 1,
    solution: {
      given: 'Illuminance = 70 FC, Area = 20 m × 70 m, Lumens per lamp = 3,150',
      steps: ['Total lumens required = 70 FC × Area (in ft²)', 'Convert area to ft² = 20 m × 70 m × 10.764 ft²/m²', 'Calculate the number of fixtures required.'],
      formula: 'Total lumens = Illuminance × Area',
      keyConcept: 'Lighting calculations are essential for adequate illumination in agricultural facilities.',
      commonMistakes: ['Incorrectly calculating area', 'Misapplying foot-candles'],
      extraneousGivens: ['Lamps in a coconut processing facility'],
    }
  },
  {
    id: 'llm-c-0251', area: 'C', subTopic: 'farm-electrification',
    topic: 'Circuit Analysis', type: 'computation', difficulty: 'easy',
    question: 'A circuit has a resistance of 5 ohms, current of 2 amperes, and a power factor of 0.75. Compute the voltage across the circuit.',
    options: ['10 V', '5 V', '15 V', '8 V'],
    correctAnswer: 0,
    solution: {
      given: 'R = 5Ω, I = 2A, PF = 0.75',
      steps: ['Calculate voltage using Ohm\'s Law: V = I × R = 2A × 5Ω = 10V'],
      formula: 'V = I × R',
      keyConcept: 'Voltage can be calculated directly from current and resistance.',
      commonMistakes: ['Forgetting to use Ohm\'s Law', 'Confusing power factor with resistance'],
      extraneousGivens: ['Power factor: 0.75'],
    }
  },
  {
    id: 'llm-c-0252', area: 'C', subTopic: 'farm-electrification',
    topic: 'Conductance', type: 'computation', difficulty: 'easy',
    question: 'A circuit is connected to a 24-V source with a current of 6 amperes. Compute the conductance of the circuit, while knowing the internal resistance is 2 ohms.',
    options: ['0.25 siemens', '0.5 siemens', '1.0 siemens', '2.0 siemens'],
    correctAnswer: 0,
    solution: {
      given: 'V = 24V, I = 6A, internal R = 2Ω',
      steps: ['Calculate conductance: G = I / V = 6A / 24V = 0.25 siemens'],
      formula: 'G = I / V',
      keyConcept: 'Conductance is the reciprocal of resistance.',
      commonMistakes: ['Using voltage instead of current for conductance calculation', 'Confusing conductance with resistance'],
      extraneousGivens: ['Internal resistance: 2 ohms'],
    }
  },
  {
    id: 'llm-c-0253', area: 'C', subTopic: 'farm-electrification',
    topic: 'Power Calculation', type: 'computation', difficulty: 'average',
    question: 'A circuit with a resistance of 50 ohms and a current of 3 amperes is being analyzed. What is the power generated in the circuit, noting that the wire length is 100 meters?',
    options: ['150 W', '450 W', '300 W', '900 W'],
    correctAnswer: 1,
    solution: {
      given: 'R = 50Ω, I = 3A, length = 100m',
      steps: ['Calculate power: P = I²R = (3A)² × 50Ω = 450W'],
      formula: 'P = I²R',
      keyConcept: 'Power is determined by the square of current times resistance.',
      commonMistakes: ['Miscalculating resistance from wire length', 'Using wrong units'],
      extraneousGivens: ['Wire length: 100 meters'],
    }
  },
  {
    id: 'llm-c-0254', area: 'C', subTopic: 'farm-electrification',
    topic: 'Electric Charge', type: 'computation', difficulty: 'average',
    question: 'A circuit with a resistance of 12 ohms has a current of 4 amperes flowing for 3 minutes. Calculate the electric charge delivered, while knowing the circuit is rated for 240 volts.',
    options: ['720 C', '1440 C', '360 C', '480 C'],
    correctAnswer: 1,
    solution: {
      given: 'R = 12Ω, I = 4A, time = 3 min, voltage = 240V',
      steps: ['Convert time: 3 min = 180 sec', 'Calculate charge: Q = I × t = 4A × 180s = 720C'],
      formula: 'Q = I × t',
      keyConcept: 'Charge is the product of current and time.',
      commonMistakes: ['Forgetting to convert minutes to seconds', 'Confusing voltage with charge'],
      extraneousGivens: ['Voltage: 240 V'],
    }
  },
  {
    id: 'llm-c-0255', area: 'C', subTopic: 'farm-electrification',
    topic: 'Energy Consumption', type: 'computation', difficulty: 'average',
    question: 'A circuit with a resistance of 8 ohms and a current of 2 amperes operates for an hour. Calculate the energy consumed, while noting the power supply is rated at 150 watts.',
    options: ['2 kW-hr', '0.5 kW-hr', '1.0 kW-hr', '0.25 kW-hr'],
    correctAnswer: 1,
    solution: {
      given: 'R = 8Ω, I = 2A, time = 1 hr, power supply = 150W',
      steps: ['Calculate power: P = I²R = (2A)² × 8Ω = 32W', 'Energy = Power × Time = 32W × 3600s = 115200 J = 0.032 kW-hr'],
      formula: 'Energy = P × t',
      keyConcept: 'Energy consumption is power multiplied by time.',
      commonMistakes: ['Incorrectly calculating power', 'Using incorrect time unit'],
      extraneousGivens: ['Power supply: 150 watts'],
    }
  },
  {
    id: 'llm-c-0256', area: 'C', subTopic: 'farm-electrification',
    topic: 'Electric Charge', type: 'computation', difficulty: 'hard',
    question: 'An inductor of 2 H has a current of 3 A flowing for 10 seconds. Calculate the electric charge stored, while considering the circuit has a resistance of 4 ohms.',
    options: ['9 C', '6 C', '12 C', '15 C'],
    correctAnswer: 0,
    solution: {
      given: 'L = 2H, I = 3A, t = 10s, R = 4Ω',
      steps: ['Calculate voltage: V = L × (di/dt) = 2H × (3A / 10s) = 0.6V', 'Charge stored: Q = I × t = 3A × 10s = 30C'],
      formula: 'Q = I × t',
      keyConcept: 'Charge can be directly calculated from current and time.',
      commonMistakes: ['Using inductor value for charge calculation', 'Confusing voltage with charge'],
      extraneousGivens: ['Resistance = 4 ohms'],
    }
  },
  {
    id: 'llm-c-0257', area: 'C', subTopic: 'farm-electrification',
    topic: 'Impedance Calculation', type: 'computation', difficulty: 'hard',
    question: 'A circuit has a 100 H inductor, a 10 F capacitor, and a 2000 Ω resistor at a frequency of 60 Hz. Calculate the impedance of the circuit.',
    options: ['2000 Ω', '1990 Ω', '1976.61 Ω', '1980 Ω'],
    correctAnswer: 2,
    solution: {
      given: 'L = 100H, C = 10F, R = 2000Ω, f = 60Hz',
      steps: ['Calculate XL = 2πfL = 2 × π × 60 × 100 = 37699.11 Ω', 'Calculate XC = 1 / (2πfC) = 0.000265 Ω', 'Z = √(R² + (XL - XC)²) = √(2000² + (37699.11 - 0.000265)²) = 1976.61 Ω'],
      formula: 'Z = √(R² + (XL - XC)²)',
      keyConcept: 'Impedance combines resistance and reactance.',
      commonMistakes: ['Not calculating reactance correctly', 'Confusing series and parallel circuits'],
      extraneousGivens: ['Capacitance = 10 F', 'Frequency = 60 Hz'],
    }
  },
  {
    id: 'llm-c-0258', area: 'C', subTopic: 'farm-electrification',
    topic: 'Transformer Turns Ratio', type: 'computation', difficulty: 'average',
    question: 'A transformer has 400 turns in the primary coil and carries a current of 5 A. How many turns are in the secondary coil if it is designed to produce a current of 20 A?',
    options: ['100 turns', '80 turns', '20 turns', '200 turns'],
    correctAnswer: 2,
    solution: {
      given: 'N1 = 400 turns, I1 = 5 A, I2 = 20 A',
      steps: ['Using turns ratio: N1/N2 = I2/I1; N2 = N1 × (I1/I2) = 400 × (5/20) = 100 turns'],
      formula: 'N1/N2 = I2/I1',
      keyConcept: 'In transformers, the turns ratio is inversely proportional to the current ratio.',
      commonMistakes: ['Using direct turns instead of inverse for current', 'Confusing primary and secondary values'],
      extraneousGivens: ['Transformer primary turns: 400 turns'],
    }
  },
  {
    id: 'llm-c-0259', area: 'C', subTopic: 'farm-electrification',
    topic: 'Electrical Efficiency', type: 'computation', difficulty: 'hard',
    question: 'In a power system, the output power generated is 25 kW and the input power is 30 kW. Calculate the efficiency of the system as a percentage while noting the ambient temperature is 25°C.',
    options: ['83.3%', '75%', '90%', '80%'],
    correctAnswer: 0,
    solution: {
      given: 'Output = 25 kW, Input = 30 kW, Ambient Temp = 25°C',
      steps: ['Efficiency = (Output / Input) × 100 = (25 kW / 30 kW) × 100 = 83.33%'],
      formula: 'Efficiency (%) = (Output / Input) × 100',
      keyConcept: 'Efficiency is a measure of how well input power is converted to output power.',
      commonMistakes: ['Calculating difference instead of ratio', 'Forgetting to multiply by 100'],
      extraneousGivens: ['Ambient temperature: 25°C'],
    }
  },
  {
    id: 'llm-c-0260', area: 'C', subTopic: 'farm-electrification',
    topic: 'Feed-in Tariff', type: 'theory', difficulty: 'average',
    question: 'What is the Feed-in Tariff Allowance (FIT-All) rate set for 2024?',
    options: ['0.1189 PHP/kW-hr', '0.1267 PHP/kW-hr', '1.125 PHP/kW-hr', '0.01 PHP/kW-hr'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: 'FIT-All rates are set to incentivize renewable energy',
      commonMistakes: ['Confusing FIT-All with other tariffs', 'Misremembering the year'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-c-0261', area: 'C', subTopic: 'farm-electrification',
    topic: 'Voltage Loss', type: 'computation', difficulty: 'hard',
    question: 'A 12 V battery with an internal resistance of 0.5 ohms is connected in series with a load of 8 ohms. What is the voltage drop across the internal resistance, and what is the resultant voltage?',
    options: ['1.5 V, 10.5 V', '2 V, 10 V', '3 V, 9 V', '1 V, 11 V'],
    correctAnswer: 3,
    solution: {
      given: 'V_battery = 12V, R_internal = 0.5Ω, R_load = 8Ω',
      steps: ['Total resistance = R_internal + R_load = 0.5Ω + 8Ω = 8.5Ω', 'Current = V_battery / Total resistance = 12V / 8.5Ω = 1.411A', 'Voltage drop across internal R = Current × R_internal = 1.411A × 0.5Ω = 0.7055V', 'Resultant voltage across load = V_battery - Voltage drop = 12V - 0.7055V = 11.2945V ≈ 11V.'],
      formula: 'V_drop = I × R_internal; Resultant V = V_battery - V_drop',
      keyConcept: 'Voltage drop occurs across internal resistance, affecting load voltage.',
      commonMistakes: ['Not considering internal resistance', 'Confusing load voltage with total voltage'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-c-0262', area: 'C', subTopic: 'farm-electrification',
    topic: 'Inductive Reactance', type: 'computation', difficulty: 'average',
    question: 'Calculate the inductive reactance of a 50 H inductor and find its contribution to total impedance at a frequency of 60 Hz. The circuit also has a resistance of 1000 Ω.',
    options: ['188.5 Ω', '314.16 Ω', '376.99 Ω', '250 Ω'],
    correctAnswer: 2,
    solution: {
      given: 'L = 50 H, f = 60 Hz, R = 1000 Ω',
      steps: ['Calculate XL = 2πfL = 2 × π × 60 × 50 = 18849.56 Ω', 'Total impedance Z = √(R² + XL²) = √(1000² + 18849.56²) = 376.99 Ω'],
      formula: 'XL = 2πfL; Z = √(R² + XL²)',
      keyConcept: 'Inductive reactance increases total impedance in AC circuits.',
      commonMistakes: ['Not converting inductance to reactance correctly', 'Omitting resistance in total impedance calculation'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-c-0263', area: 'C', subTopic: 'farm-electrification',
    topic: 'Circuit Supervision', type: 'theory', difficulty: 'average',
    question: 'In supervising the operation of electric motors, which factor is essential for ensuring efficiency?',
    options: ['Ambient temperature', 'Load conditions', 'Electrical insulation', 'Voltage levels'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'Load conditions directly affect motor efficiency.',
      commonMistakes: ['Not considering the operational environment', 'Forgetting to analyze load'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-c-0264', area: 'C', subTopic: 'farm-electrification',
    topic: 'Electrical Safety', type: 'theory', difficulty: 'average',
    question: 'What color is the ground wire according to the Philippine Electrical Code?',
    options: ['Red', 'Black', 'Yellow', 'Green'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: 'Ground wire color is standardized for safety.',
      commonMistakes: ['Confusing with phase wire colors', 'Assuming colors without verification'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-c-0265', area: 'C', subTopic: 'farm-electrification',
    topic: 'Electrical Regulations', type: 'theory', difficulty: 'easy',
    question: 'Under the Electric Power Industry Reform Act of 2001, which Republic Act number governs this?',
    options: ['RA 9136', 'RA 9163', 'RA 9316', 'RA 9361'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: 'Regulations are critical for the energy sector.',
      commonMistakes: ['Using outdated RA numbers', 'Confusing related acts'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-c-0266', area: 'C', subTopic: 'farm-electrification',
    topic: 'Basic Electrical Concepts', type: 'theory', difficulty: 'easy',
    question: 'What is the unit of electrical resistance?',
    options: ['Volts', 'Amperes', 'Ohms', 'Watts'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0267', area: 'C', subTopic: 'farm-electrification',
    topic: 'Voltage and Current', type: 'theory', difficulty: 'average',
    question: 'In a purely resistive circuit, the phase difference between voltage and current is:',
    options: ['90 degrees', '180 degrees', '0 degrees', '45 degrees'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0268', area: 'C', subTopic: 'farm-electrification',
    topic: 'Farm Electrification Design', type: 'theory', difficulty: 'hard',
    question: 'Which Philippine agency is responsible for implementing rural electrification programs?',
    options: ['Department of Energy (DOE)', 'National Electrification Administration (NEA)', 'Department of Agriculture (DA)', 'National Irrigation Administration (NIA)'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0269', area: 'C', subTopic: 'farm-electrification',
    topic: 'Power Consumption', type: 'theory', difficulty: 'easy',
    question: 'The power consumed by a device that operates at 100 volts and draws a current of 5 amperes is:',
    options: ['500 Watts', '20 Watts', '250 Watts', '1000 Watts'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0270', area: 'C', subTopic: 'farm-electrification',
    topic: 'Electric Motors', type: 'theory', difficulty: 'average',
    question: 'What is the main purpose of an electric motor in farm machinery?',
    options: ['Generate power', 'Convert electrical energy to mechanical energy', 'Store energy', 'Transform energy types'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0271', area: 'C', subTopic: 'farm-electrification',
    topic: 'Electrical Safety', type: 'theory', difficulty: 'average',
    question: 'Which color indicates grounding in the Philippine Electrical Code for wires?',
    options: ['Red', 'Black', 'Green', 'Yellow'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0272', area: 'C', subTopic: 'farm-electrification',
    topic: 'Energy Efficiency', type: 'theory', difficulty: 'average',
    question: 'What is the primary objective of using energy-efficient lighting in agricultural settings?',
    options: ['Reduce flicker', 'Minimize energy costs', 'Increase wattage', 'Enhance color rendering'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0273', area: 'C', subTopic: 'farm-electrification',
    topic: 'Capacitance and Inductance', type: 'theory', difficulty: 'hard',
    question: 'In an electrical circuit, which component stores electrical energy in an electric field?',
    options: ['Inductor', 'Capacitor', 'Resistor', 'Transformer'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0274', area: 'C', subTopic: 'farm-electrification',
    topic: 'Calculating Power', type: 'computation', difficulty: 'average',
    question: 'A motor operates at 230 V and draws 10 A. Calculate the power consumed by the motor. Ambient temperature is 35°C, and pressure is 101.3 kPa.',
    options: ['2300 W', '1150 W', '1000 W', '3000 W'],
    correctAnswer: 0,
    solution: {
      given: 'V = 230 V, I = 10 A',
      steps: ['Power (P) = Voltage (V) × Current (I)', 'P = 230 V × 10 A = 2300 W'],
      formula: 'P = VI',
      keyConcept: 'Power is the product of voltage and current.',
      commonMistakes: ['Forgetting to multiply V and I', 'Using wrong units for power', 'Ignoring extra given values'],
      extraneousGivens: ['Ambient temperature: 35°C', 'Pressure: 101.3 kPa'],
    }
  },
  {
    id: 'llm-c-0275', area: 'C', subTopic: 'farm-electrification',
    topic: 'Energy Consumption', type: 'computation', difficulty: 'easy',
    question: 'A bulb consumes 60 W and operates for 5 hours. Calculate the total energy consumed in kWh. Room temperature is 28°C, and the voltage supply is 220 V.',
    options: ['0.3 kWh', '0.5 kWh', '0.6 kWh', '1.2 kWh'],
    correctAnswer: 0,
    solution: {
      given: 'Power = 60 W, Time = 5 hours',
      steps: ['Energy (kWh) = Power (kW) × Time (h)', 'Convert power to kW: 60 W = 0.06 kW', 'Energy = 0.06 kW × 5 h = 0.3 kWh'],
      formula: 'Energy (kWh) = Power (kW) × Time (h)',
      keyConcept: 'Energy consumption depends on power and operating time.',
      commonMistakes: ['Not converting W to kW', 'Incorrect multiplication', 'Ignoring extra values'],
      extraneousGivens: ['Room temperature: 28°C', 'Voltage supply: 220 V'],
    }
  },
  {
    id: 'llm-c-0276', area: 'C', subTopic: 'farm-electrification',
    topic: 'Motor Operation', type: 'computation', difficulty: 'average',
    question: 'An electric motor has a rated power of 2.5 kW and operates with an efficiency of 85%. What is the input power required? The ambient humidity is 60%, and wire diameter is 2.5 mm.',
    options: ['2.9 kW', '3.2 kW', '2.4 kW', '3.0 kW'],
    correctAnswer: 0,
    solution: {
      given: 'Output Power = 2.5 kW, Efficiency = 85%',
      steps: ['Input Power (P_in) = Output Power / Efficiency', 'P_in = 2.5 kW / 0.85 = 2.941 kW'],
      formula: 'Input Power (P_in) = Output Power / Efficiency',
      keyConcept: 'Input power considers the efficiency of the motor.',
      commonMistakes: ['Incorrectly applying efficiency', 'Forgetting to convert efficiency to decimal', 'Using unnecessary given values'],
      extraneousGivens: ['Ambient humidity: 60%', 'Wire diameter: 2.5 mm'],
    }
  },
  {
    id: 'llm-c-0277', area: 'C', subTopic: 'farm-electrification',
    topic: 'Transformer Basics', type: 'theory', difficulty: 'average',
    question: 'What is the primary function of a transformer?',
    options: ['To convert AC to DC', 'To step up or step down voltage', 'To store electrical energy', 'To measure current'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0278', area: 'C', subTopic: 'farm-electrification',
    topic: 'Lighting Calculations', type: 'computation', difficulty: 'hard',
    question: 'A farm shed requires 500 lux of illumination. If the total area of the shed is 100 m², how much total lumens are needed? Assume temperature at 25°C and the supply voltage is 220 V.',
    options: ['50000 lumens', '60000 lumens', '70000 lumens', '80000 lumens'],
    correctAnswer: 1,
    solution: {
      given: 'Required Illumination = 500 lux, Area = 100 m²',
      steps: ['Total Lumens = Area × Illumination', 'Total Lumens = 100 m² × 500 lux = 50000 lumens'],
      formula: 'Total Lumens = Area × Illumination',
      keyConcept: 'Illumination is the product of area and required lux.',
      commonMistakes: ['Confusing lux and lumens', 'Incorrect multiplication', 'Ignoring unnecessary given values'],
      extraneousGivens: ['Temperature at 25°C', 'Supply voltage: 220 V'],
    }
  },
  {
    id: 'llm-c-0279', area: 'C', subTopic: 'farm-electrification',
    topic: 'Load Calculation', type: 'theory', difficulty: 'average',
    question: 'What does demand load refer to in farm electrification?',
    options: ['Total energy used in a day', 'Peak energy consumption expected', 'Minimum energy required', 'Average energy consumption'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0280', area: 'C', subTopic: 'farm-electrification',
    topic: 'Circuit Protection', type: 'theory', difficulty: 'hard',
    question: 'In the Philippine Electrical Code, what is the required minimum rating for circuit breakers in residential homes?',
    options: ['15 A', '20 A', '30 A', '40 A'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0281', area: 'C', subTopic: 'farm-electrification',
    topic: 'Power Factor', type: 'theory', difficulty: 'hard',
    question: 'What is the power factor for a purely resistive load?',
    options: ['0', '0.5', '1', '1.2'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0282', area: 'C', subTopic: 'farm-electrification',
    topic: 'Electrical Drawings', type: 'theory', difficulty: 'hard',
    question: 'What is the purpose of a one-line diagram in farm electrification plans?',
    options: ['Show detailed wiring', 'Indicate material costs', 'Represent electrical connections simplistically', 'Show load calculations'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0283', area: 'C', subTopic: 'farm-electrification',
    topic: 'Generator Sizing', type: 'computation', difficulty: 'hard',
    question: 'A generator is needed to supply 10 kW of power on a farm. If the generator has an efficiency of 90%, what is the required input power? Assume humidity at 50% and supply voltage of 230 V.',
    options: ['11.11 kW', '12.5 kW', '9 kW', '10.5 kW'],
    correctAnswer: 1,
    solution: {
      given: 'Output Power = 10 kW, Efficiency = 90%',
      steps: ['Input Power (P_in) = Output Power / Efficiency', 'P_in = 10 kW / 0.9 = 11.11 kW'],
      formula: 'Input Power (P_in) = Output Power / Efficiency',
      keyConcept: 'Input power calculation takes into account efficiency.',
      commonMistakes: ['Not converting efficiency to decimal', 'Incorrect power notation', 'Using unnecessary values'],
      extraneousGivens: ['Humidity: 50%', 'Supply voltage of 230 V'],
    }
  },
  {
    id: 'llm-c-0284', area: 'C', subTopic: 'farm-electrification',
    topic: 'Electrical Load Types', type: 'theory', difficulty: 'average',
    question: 'Which of the following is considered a non-linear load?',
    options: ['Resistive heater', 'Incandescent lamp', 'LED lights', 'Inductive motor'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0285', area: 'C', subTopic: 'farm-electrification',
    topic: 'Circuit Design', type: 'theory', difficulty: 'hard',
    question: 'When designing a small farm\'s electrical system, what is the first step in determining the load requirements?',
    options: ['Calculate voltage', 'List all the tools and equipment', 'Choose the transformer size', 'Determine the wire gauge'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0286', area: 'C', subTopic: 'farm-electrification',
    topic: 'Electrical Efficiency', type: 'theory', difficulty: 'average',
    question: 'Improving the efficiency of a farm\'s electrical system will primarily affect which of the following?',
    options: ['Reduce peak demand', 'Decrease load', 'Increase safety', 'Minimize operational costs'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0287', area: 'C', subTopic: 'farm-electrification',
    topic: 'Electrical Power Calculation', type: 'computation', difficulty: 'easy',
    question: 'A farm\'s irrigation system demands 500 W and operates 6 hours a day. Calculate the total energy consumption in kWh per month. Given that each light bulb on the farm uses 60 W and the farm has 15 light bulbs.',
    options: ['90 kWh', '72 kWh', '120 kWh', '84 kWh'],
    correctAnswer: 3,
    solution: {
      given: 'Power = 500 W, Time = 6 hrs/day, Days = 30, Light bulbs = 15, Wattage per bulb = 60 W',
      steps: ['Calculate total daily energy for the irrigation system: Energy (kWh) = Power × Time = (500 W × 6 hrs)/1000 = 3 kWh', 'Calculate monthly energy: Monthly Energy = Daily Energy × Days = 3 kWh × 30 = 90 kWh'],
      formula: 'Total Energy (kWh) = (Power (W) × Time (hrs))/1000',
      keyConcept: 'Understanding energy consumption through power ratings and operational time.',
      commonMistakes: ['Forgetting to convert W to kW', 'Not considering the number of days', 'Including unnecessary bulb wattages in calculation'],
      extraneousGivens: ['Light bulb wattage: 60 W', 'Number of light bulbs: 15'],
    }
  },
  {
    id: 'llm-c-0288', area: 'C', subTopic: 'farm-electrification',
    topic: 'Voltage Calculation', type: 'computation', difficulty: 'easy',
    question: 'A 12-volt battery is connected to a circuit with a resistance of 24 ohms. What is the current flowing in the circuit? Note that the ambient temperature is 25°C.',
    options: ['0.5 A', '0.25 A', '2 A', '4 A'],
    correctAnswer: 0,
    solution: {
      given: 'Voltage = 12 V, Resistance = 24 ohms',
      steps: ['Using Ohm\'s Law: I = V/R = 12 V / 24 ohms = 0.5 A'],
      formula: 'I = V/R',
      keyConcept: 'Ohm’s Law states that current is directly proportional to voltage and inversely proportional to resistance.',
      commonMistakes: ['Confusing voltage with power', 'Improper conversion between units'],
      extraneousGivens: ['Ambient temperature: 25°C'],
    }
  },
  {
    id: 'llm-c-0289', area: 'C', subTopic: 'farm-electrification',
    topic: 'Power Efficiency', type: 'theory', difficulty: 'average',
    question: 'What is the primary purpose of electric power factor correction in farm electrification systems?',
    options: ['To increase voltage levels', 'To improve energy efficiency', 'To reduce electromagnetic interference', 'To manage heat generation'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'Improving power factor helps in reducing energy losses and improving the efficiency of the electrical system.',
      commonMistakes: ['Confusing power factor with energy conversion', 'Believing it solely increases voltage'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-c-0290', area: 'C', subTopic: 'farm-electrification',
    topic: 'Energy Demand Analysis', type: 'theory', difficulty: 'average',
    question: 'How is the demand load calculated for a farm that includes lighting, machinery, and heating equipment?',
    options: ['Add the wattages of all electrical devices', 'Use only the machines\' total power rating', 'Calculate only for heating systems', 'Sum the peak and average demands only'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: 'The total demand load is the sum of the wattages of all electrical devices on the farm, considering peak usage.',
      commonMistakes: ['Omitting lighting loads', 'Not considering operational hours'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-c-0291', area: 'C', subTopic: 'farm-electrification',
    topic: 'Circuit Power Calculation', type: 'computation', difficulty: 'average',
    question: 'A circuit has an impedance of 50 ohms and a current of 4 amperes flowing through it. Compute the total power in watts. Note that the circuit operates under a constant temperature of 30°C.',
    options: ['200 W', '100 W', '400 W', '800 W'],
    correctAnswer: 2,
    solution: {
      given: 'Impedance (Z) = 50 ohms, Current (I) = 4 A',
      steps: ['Calculate power using formula: P = I^2 * R = 4^2 * 50 = 400 W'],
      formula: 'P = I^2 * R',
      keyConcept: 'Power in resistive circuits can be calculated using the square of the current and resistance.',
      commonMistakes: ['Using voltage instead of resistance', 'Failing to square the current'],
      extraneousGivens: ['Temperature: 30°C'],
    }
  },
  {
    id: 'llm-c-0292', area: 'C', subTopic: 'farm-electrification',
    topic: 'Voltage Drop Calculation', type: 'computation', difficulty: 'hard',
    question: 'In a 100-meter-long cable with a 6 mm² cross-sectional area, the current flowing through it is 30 A. Calculate the voltage drop across the cable. Assume a resistivity of copper at 20°C is 1.68 x 10^-8 Ωm. Note that the ambient temperature is 35°C and that the cable is insulated.',
    options: ['1.2 V', '3.0 V', '0.5 V', '2.0 V'],
    correctAnswer: 1,
    solution: {
      given: 'Length = 100 m, Cross-sectional area = 6 mm², Current = 30 A, Resistivity = 1.68 x 10^-8 Ωm',
      steps: ['Calculate resistance: R = ρ * (L/A) = (1.68 x 10^-8 Ωm * 100 m) / (6 x 10^-6 m²) = 0.28 Ω', 'Calculate voltage drop: V_drop = I * R = 30 A * 0.28 Ω = 8.4 V'],
      formula: 'R = ρ * (L/A), V_drop = I * R',
      keyConcept: 'Voltage drop across a conductor depends on the current, resistance of the conductor, and length.',
      commonMistakes: ['Ignoring cross-sectional area', 'Using incorrect resistivity value'],
      extraneousGivens: ['Ambient temperature: 35°C', 'Insulation of the cable'],
    }
  },
  {
    id: 'llm-c-0293', area: 'C', subTopic: 'farm-electrification',
    topic: 'Generator Efficiency Calculation', type: 'computation', difficulty: 'hard',
    question: 'A generator produces 10 kW of electrical power and consumes 12 kW of fuel energy. Calculate its efficiency. Note that there is a maintenance cost of 5% of fuel energy that needs to be accounted for.',
    options: ['80.0%', '83.3%', '75.0%', '66.6%'],
    correctAnswer: 1,
    solution: {
      given: 'Output Power = 10 kW, Input Power = 12 kW, Maintenance Cost = 5% of Input Power',
      steps: ['Calculate effective input energy: Effective Input Power = Input Power - Maintenance Cost = 12 kW - (0.05 * 12 kW) = 11.4 kW', 'Calculate efficiency: Efficiency = (Output Power / Effective Input Power) * 100 = (10 kW / 11.4 kW) * 100 ≈ 87.72%'],
      formula: 'Efficiency = (Output Power / Input Power) * 100',
      keyConcept: 'Efficiency of a generator indicates how effectively it converts fuel energy to electrical energy.',
      commonMistakes: ['Forgetting maintenance cost', 'Using incorrect output or input values'],
      extraneousGivens: ['Fuel energy consumption: 12 kW'],
    }
  },
  {
    id: 'llm-c-0294', area: 'C', subTopic: 'farm-electrification',
    topic: 'Capacitance Calculation', type: 'computation', difficulty: 'average',
    question: 'A capacitor in a farm\'s electrical system has a capacitance of 50 uF. Calculate its charge when supplied with a voltage of 30 V. Note that there are 10 other capacitors in series with the same capacitance.',
    options: ['2.5 mC', '1.5 mC', '3.0 mC', '0.5 mC'],
    correctAnswer: 0,
    solution: {
      given: 'Capacitance = 50 uF, Voltage = 30 V',
      steps: ['Calculate charge using formula: Q = C * V = 50 x 10^-6 F * 30 V = 1.5 mC'],
      formula: 'Q = C * V',
      keyConcept: 'Charge on a capacitor is the product of its capacitance and applied voltage.',
      commonMistakes: ['Confusing capacitance with voltage', 'Not converting units properly'],
      extraneousGivens: ['Number of capacitors in series: 10'],
    }
  },
  {
    id: 'llm-c-0295', area: 'C', subTopic: 'farm-electrification',
    topic: 'Transformer Turns Ratio Calculation', type: 'computation', difficulty: 'hard',
    question: 'A transformer is designed with 500 primary turns and produces a secondary current of 200 A at a voltage of 20 V. Determine the required number of secondary turns. Given that the primary voltage is 240 V.',
    options: ['100 turns', '250 turns', '50 turns', '500 turns'],
    correctAnswer: 3,
    solution: {
      given: 'Primary Turns = 500, Secondary Current = 200 A, Secondary Voltage = 20 V, Primary Voltage = 240 V',
      steps: ['Using the transformer turns ratio formula: Np/Ns = Vp/Vs', 'Rearranging gives: Ns = Np * (Vs/Vp) = 500 * (20/240) = 41.67 turns'],
      formula: 'Np / Ns = Vp / Vs',
      keyConcept: 'The turns ratio of a transformer determines the relationship between the primary and secondary voltages and currents.',
      commonMistakes: ['Neglecting to calculate the turns based on voltage ratio', 'Confusing primary with secondary values'],
      extraneousGivens: ['Secondary current: 200 A'],
    }
  },
  {
    id: 'llm-c-0296', area: 'C', subTopic: 'farm-electrification',
    topic: 'Load Calculation', type: 'theory', difficulty: 'easy',
    question: 'What is the typical method used to calculate the electrical load for a farm based on the appliances used?',
    options: ['Sum of the rated wattages', 'Average wattage multiplied by hours used', 'Peak demand for the day', 'Only consider the lighting load'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: 'Calculating total load involves summing the power ratings of all appliances to determine total electrical demands.',
      commonMistakes: ['Excluding certain types of loads', 'Underestimating peak loads'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-c-0297', area: 'C', subTopic: 'farm-electrification',
    topic: 'Power Factor Basics', type: 'theory', difficulty: 'average',
    question: 'Which of the following best describes power factor in electrical systems?',
    options: ['A measure of total energy consumption', 'The ratio of real power to apparent power', 'The ratio of reactive power to real power', 'A coefficient of voltage drop'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'Power factor indicates how effectively electrical power is being converted into useful work output.',
      commonMistakes: ['Confusing it with energy efficiency', 'Neglecting its importance in industrial applications'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-c-0298', area: 'C', subTopic: 'farm-electrification',
    topic: 'Single Phase Load Calculation', type: 'computation', difficulty: 'hard',
    question: 'A single-phase circuit has a voltage of 240 V and carries a current of 15 A. What is the total power in watts? Given that there are additional 3 resistors in parallel, each of 20 ohms.',
    options: ['360 W', '1200 W', '540 W', '1800 W'],
    correctAnswer: 1,
    solution: {
      given: 'Voltage = 240 V, Current = 15 A',
      steps: ['Calculate power using: P = VI = 240 V * 15 A = 3600 W'],
      formula: 'P = VI',
      keyConcept: 'Power in a single-phase circuit can be calculated using the product of voltage and current.',
      commonMistakes: ['Using resistors’ values in calculations', 'Forgetting to include all components in circuit'],
      extraneousGivens: ['Additional resistors: 3 resistors in parallel with 20 ohms each'],
    }
  },
  {
    id: 'llm-c-0299', area: 'C', subTopic: 'farm-electrification',
    topic: 'Battery Sizing Calculation', type: 'computation', difficulty: 'hard',
    question: 'A farm requires 120 Ah at a 12 V battery system for 5 hours. What is the minimum battery capacity needed in amp-hours, considering an efficiency of 80%? Note that each device connected to the battery draws 2 A.',
    options: ['180 Ah', '150 Ah', '100 Ah', '160 Ah'],
    correctAnswer: 0,
    solution: {
      given: 'Load = 120 Ah, Voltage = 12 V, Duration = 5 hours, Efficiency = 80%',
      steps: ['Calculate total energy needed: Total Capacity = Load / Efficiency = 120 Ah / 0.8 = 150 Ah', 'Add additional capacity for efficiency: Minimum Battery Capacity = Total Capacity x 5 hours = 150 x 5 = 750 Ah'],
      formula: 'Minimum Battery Capacity = Load / Efficiency',
      keyConcept: 'Battery sizing calculations determine how much capacity is necessary based on application requirements and efficiency.',
      commonMistakes: ['Not considering efficiency', 'Miscalculating load requirements'],
      extraneousGivens: ['Current drawn by devices: 2 A'],
    }
  },
  {
    id: 'llm-c-0300', area: 'C', subTopic: 'farm-electrification',
    topic: 'Safety Standards', type: 'theory', difficulty: 'average',
    question: 'What is the purpose of safety disconnects in farm electrification systems?',
    options: ['To regulate voltage levels', 'To provide a quick means of power shutdown', 'To increase load capacity', 'To manage energy efficiency'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'Safety disconnects improve safety by ensuring that power can be quickly disconnected during emergencies.',
      commonMistakes: ['Assuming they only regulate power', 'Not recognizing their role in emergency procedures'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-c-0301', area: 'C', subTopic: 'farm-electrification',
    topic: 'Switch Ratings', type: 'theory', difficulty: 'average',
    question: 'Which voltage rating is commonly used for circuit breakers in agricultural applications in the Philippines?',
    options: ['120 V', '240 V', '480 V', '600 V'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'Circuit breakers used in agricultural contexts are typically rated for voltages similar to local electrical supply standards.',
      commonMistakes: ['Assuming all circuits use the same voltage', 'Not considering local regulations'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-c-0302', area: 'C', subTopic: 'Farm Electrification',
    topic: 'Electrical Circuits', type: 'computation', difficulty: 'easy',
    question: 'A circuit has a resistance of 10 ohms and current of 2 amperes. Calculate the voltage within the circuit. The ambient temperature is 25°C and the barometric pressure is 101.3 kPa.',
    options: ['0.1 V', '200 V', '20 V', '20 V'],
    correctAnswer: 2,
    solution: {
      given: 'R = 10 ohms, I = 2 A',
      steps: ['V = IR = 10 * 2 = 20 V'],
      formula: 'V = IR',
      keyConcept: 'Ohm\'s Law states that voltage equals current times resistance.',
      commonMistakes: ['Miscalculating current or resistance.', 'Forget to use units.'],
      extraneousGivens: ['Ambient temperature: 25°C', 'Barometric pressure: 101.3 kPa'],
    }
  },
  {
    id: 'llm-c-0303', area: 'C', subTopic: 'Farm Electrification',
    topic: 'Conductance', type: 'computation', difficulty: 'easy',
    question: 'A circuit has been connected to a 12-V source and current of 6 amperes. Compute for the conductance within the circuit. The resistance of other parallel circuits is 15 ohms.',
    options: ['0.25 mhos', '0.25 mohs', '2.25 siemens', '2.25 seimens'],
    correctAnswer: 3,
    solution: {
      given: 'V = 12 V, I = 6 A',
      steps: ['G = I/V = 6/12 = 0.5 siemens'],
      formula: 'G = I/V',
      keyConcept: 'Conductance is the reciprocal of resistance.',
      commonMistakes: ['Calculating conductance instead of resistance.', 'Confusing mohs with siemens.'],
      extraneousGivens: ['Resistance in parallel: 15 ohms'],
    }
  },
  {
    id: 'llm-c-0304', area: 'C', subTopic: 'Farm Electrification',
    topic: 'Power Generation', type: 'computation', difficulty: 'easy',
    question: 'A circuit has a resistance of 100 ohms and current of 1 ampere. Compute the circuit’s power generated. The generator\'s efficiency is rated at 85%.',
    options: ['100 W', '0.1 W', '10 W', '1.0 W'],
    correctAnswer: 0,
    solution: {
      given: 'R = 100 ohms, I = 1 A',
      steps: ['P = I^2 * R = 1^2 * 100 = 100 W'],
      formula: 'P = I^2 * R',
      keyConcept: 'Power in a resistive circuit is calculated using the square of current multiplied by resistance.',
      commonMistakes: ['Forgetting to square the current.'],
      extraneousGivens: ['Generator efficiency: 85%'],
    }
  },
  {
    id: 'llm-c-0305', area: 'C', subTopic: 'Farm Electrification',
    topic: 'Charge Calculation', type: 'computation', difficulty: 'average',
    question: 'A circuit has a resistance of 10 ohms and current of 1 ampere. Calculate the circuit’s electric charge generated, given a 1-minute supply of energy. The voltage across the circuit is 12 V.',
    options: ['C = 120 C', 'C = 60 C', 'C = 30 C', 'C = 90 C'],
    correctAnswer: 1,
    solution: {
      given: 'R = 10 ohms, I = 1 A, t = 60 seconds',
      steps: ['C = I × t = 1 × 60 = 60 C'],
      formula: 'C = I × t',
      keyConcept: 'Charge is the product of current and time.',
      commonMistakes: ['Using incorrect time period.', 'Confusing charge with current.'],
      extraneousGivens: ['Voltage across circuit: 12 V'],
    }
  },
  {
    id: 'llm-c-0306', area: 'C', subTopic: 'Farm Electrification',
    topic: 'Energy Generation', type: 'computation', difficulty: 'average',
    question: 'A circuit has a resistance of 12 ohms and current of 1 ampere, calculate the circuit’s energy generated over 1 minute. The generator specification states it can handle a maximum of 1000 watts.',
    options: ['360 J', '720 J', '120 J', '600 J'],
    correctAnswer: 1,
    solution: {
      given: 'R = 12 ohms, I = 1 A, t = 60 s',
      steps: ['Energy = V × I × t = (12 × 1) × 60 = 720 J'],
      formula: 'Energy = V × I × t',
      keyConcept: 'Energy is calculated based on voltage (V), current (I), and time (t).',
      commonMistakes: ['Not converting minutes to seconds.'],
      extraneousGivens: ['Generator maximum of 1000 watts'],
    }
  },
  {
    id: 'llm-c-0307', area: 'C', subTopic: 'Farm Electrification',
    topic: 'Energy Consumption', type: 'computation', difficulty: 'easy',
    question: 'A circuit has a resistance of 10 ohms and current of 1 ampere. Compute the circuit’s energy consumption over 1 hour. The cost per kilowatt-hour is 10 PHP.',
    options: ['0.2 kW-hr', '0.1 kW-hr', '0.01 kW-hr', '0.02 kW-hr'],
    correctAnswer: 0,
    solution: {
      given: 'R = 10 ohms, I = 1 A, t = 3600 seconds',
      steps: ['Energy Consumption = P × t = (1^2 × 10) × 3600 = 36000 J = 0.01 kWh'],
      formula: 'Energy Consumption = I^2 × R × t',
      keyConcept: 'Consumption is derived from power multiplied by time.',
      commonMistakes: ['Forgetting to convert to kW-hr.'],
      extraneousGivens: ['Cost per kW-hr: 10 PHP'],
    }
  },
  {
    id: 'llm-c-0308', area: 'C', subTopic: 'Farm Electrification',
    topic: 'Supply Duration Calculation', type: 'computation', difficulty: 'average',
    question: 'A circuit has generated an energy of 150 J with a power of 20 W. Compute the circuit’s duration of supply in seconds. The voltage supplied is 12 V.',
    options: ['300 sec', '150 sec', '7.5 sec', '60 sec'],
    correctAnswer: 1,
    solution: {
      given: 'Energy = 150 J, P = 20 W',
      steps: ['t = Energy / Power = 150 / 20 = 7.5 sec'],
      formula: 't = Energy / Power',
      keyConcept: 'Duration is calculated as the quotient of energy and power.',
      commonMistakes: ['Dividing by energy instead of power.'],
      extraneousGivens: ['Voltage supplied: 12 V'],
    }
  },
  {
    id: 'llm-c-0309', area: 'C', subTopic: 'Farm Electrification',
    topic: 'Capacitance Calculation', type: 'computation', difficulty: 'hard',
    question: 'A capacitor has been connected to a 10-mho circuit generating 150 J of energy with a power of 20 W. Compute the capacitor’s farad value. The ambient temperature is 25°C.',
    options: ['150 Farad', '75 Farad', '3000 Farad', '1125 Farad'],
    correctAnswer: 1,
    solution: {
      given: 'Energy = 150 J, Power = 20 W',
      steps: ['C = Energy / V^2; V = P/I, I = 20 W at V = 10 mho equivalent.'],
      formula: 'C = Energy / (P/I)^2',
      keyConcept: 'Capacitance is calculated from energy stored and voltage.',
      commonMistakes: ['Confusing energy with capacitance.'],
      extraneousGivens: ['Ambient temperature: 25°C'],
    }
  },
  {
    id: 'llm-c-0310', area: 'C', subTopic: 'Farm Electrification',
    topic: 'Inductance Calculation', type: 'computation', difficulty: 'hard',
    question: 'An inductor has been connected to a 10-ohm circuit generating an energy of 150 J with power of 20 W. Compute the inductor’s henry value. The flow rate is 0.5 L/min.',
    options: ['35.0 Henry', '75.0 Henry', '37.5 Henry', '100 Henry'],
    correctAnswer: 1,
    solution: {
      given: 'Energy = 150 J, Power = 20 W',
      steps: ['L = Energy / (I^2) ; P = I^2 * R => I = sqrt(P/R)'],
      formula: 'L = Energy / (I^2)',
      keyConcept: 'Inductance relates energy stored and current flow.',
      commonMistakes: ['Forgetting conversion factors.'],
      extraneousGivens: ['Flow rate: 0.5 L/min'],
    }
  },
  {
    id: 'llm-c-0311', area: 'C', subTopic: 'Farm Electrification',
    topic: 'Current Flow Calculation', type: 'computation', difficulty: 'hard',
    question: 'An inductor has been connected to a 5-ohm circuit generating an energy of 150 J with a power of 25 W. Compute the circuit’s current flow, charge, and voltage. The ambient temperature is 30°C.',
    options: ['2.536 A, 13.424 C, and 15.38 V', '2.436 A, 13.717 C, and 12.28 V', '2.236 A, 13.416 C, and 11.18 V', '2.336 A, 13.413 C, and 13.98 V'],
    correctAnswer: 2,
    solution: {
      given: 'Energy = 150 J, Power = 25 W',
      steps: ['I = sqrt(P/R), C = It, V = IR'],
      formula: 'I = sqrt(P/R), C = It, V = IR',
      keyConcept: 'Current relates power to resistance, charge to current and time.',
      commonMistakes: ['Skipping steps in calculations.'],
      extraneousGivens: ['Ambient temperature: 30°C'],
    }
  },
  {
    id: 'llm-c-0312', area: 'C', subTopic: 'Farm Electrification',
    topic: 'Capacitors in Series', type: 'computation', difficulty: 'hard',
    question: 'A circuit has a series connected set of ten 500-μF capacitors. Compute for the number of alternative 200-μF capacitors needed to satisfy the circuit\'s total capacitance. The supply voltage is 220 V.',
    options: ['1', '4', '2', '6'],
    correctAnswer: 1,
    solution: {
      given: 'Ct = 5000 μF, C each = 200 μF',
      steps: ['1/Ct = 10/500; thus Ct = 500 μF.'],
      formula: 'Ct = 1 / (1/C1 + 1/C2 + ...)',
      keyConcept: 'Capacitance in series is a reciprocal sum.',
      commonMistakes: ['Miscalculating total capacitance.'],
      extraneousGivens: ['Supply voltage: 220 V'],
    }
  },
  {
    id: 'llm-c-0313', area: 'C', subTopic: 'Farm Electrification',
    topic: 'Inductors in Series', type: 'computation', difficulty: 'hard',
    question: 'A 100-henry circuit has a series connected set of 2 unequal inductors. Compute for the inductance of each inductor assuming its total inductance in parallel is 16 henry. The operational frequency is 60 Hz.',
    options: ['25 H, 75 H', '30 H, 70 H', '20 H, 80 H', '10 H, 90 H'],
    correctAnswer: 2,
    solution: {
      given: 'Total inductance = 100 H, Req = 16 H',
      steps: ['L1 + L2 = Total, and 1/(1/L1 + 1/L2) = Req.'],
      formula: 'L1 + L2 = Total',
      keyConcept: 'Inductance in series is additive, and parallel follows reciprocal summation.',
      commonMistakes: ['Misapplying series and parallel rules.'],
      extraneousGivens: ['Operational frequency: 60 Hz'],
    }
  },
  {
    id: 'llm-c-0314', area: 'C', subTopic: 'Farm Electrification',
    topic: 'Current Calculation', type: 'computation', difficulty: 'hard',
    question: 'A 1.2-V circuit with two 3-H inductors and three 1-H inductors was connected in series powered for ¼ minutes. Calculate the circuit\'s current. The resistance of the circuit is 5 ohms.',
    options: ['8 Amp', '4 Amp', '6 Amp', '2 Amp'],
    correctAnswer: 3,
    solution: {
      given: 'V = 1.2 V, inductance details as stated, powered for 15 sec.',
      steps: ['Use V = IR to find I; calculate total inductance.'],
      formula: 'I = V/R',
      keyConcept: 'Current is derived from voltage divided by resistance.',
      commonMistakes: ['Forgetting to sum inductances.'],
      extraneousGivens: ['Resistance of circuit: 5 ohms'],
    }
  },
  {
    id: 'llm-c-0315', area: 'C', subTopic: 'Farm Electrification',
    topic: 'Purely Resistive Loads', type: 'theory', difficulty: 'easy',
    question: 'In a purely resistive circuit, the current is in phase with voltage. What is the power factor?',
    options: ['0.5', '0.2', '1.0', '0.707'],
    correctAnswer: 2,
    solution: {
      given: 'Purely resistive load concept.',
      steps: ['Power factor = cos(θ); in purely resistive, θ = 0.'],
      formula: 'PF = cos(θ)',
      keyConcept: 'Power factor reflects phase difference; 1 indicates no phase difference.',
      commonMistakes: ['Evaluating power factor inaccurately.'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-c-0316', area: 'C', subTopic: 'Farm Electrification',
    topic: 'Feed-in Tariff Allowance', type: 'theory', difficulty: 'easy',
    question: 'For 2024, what is the setting rate of the Feed-in Tariff Allowance (FIT-All)?',
    options: ['0.1189 PHP/kW-hr', '0.1267 PHP/kW-hr', '1.125 PHP/kW-hr', '1.187 PHP/kW-hr'],
    correctAnswer: 0,
    solution: {
      given: 'FIT-All context.',
      steps: ['Review published rates for 2024.'],
      
      keyConcept: 'FIT-All facilitates revenue for energy producers.',
      commonMistakes: ['Confusing past rates with current.'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-c-0317', area: 'C', subTopic: 'Farm Electrification',
    topic: 'Battery Internal Resistance', type: 'computation', difficulty: 'average',
    question: 'A 7.3-V battery with internal resistance of ___ Ω is connected in series with 9.5-Ω resistor. If the lost volts from the battery is 223.47 mV, compute the internal resistance. The voltage drop across the load is measured at 6.5 V.',
    options: ['0.3 Ω', '0.2 Ω', '0.1 Ω', '0.5 Ω'],
    correctAnswer: 0,
    solution: {
      given: 'Battery voltage = 7.3 V, load resistor = 9.5 Ω, lost volts = 223.47 mV.',
      steps: ['Use Vlost = I * r; find current from load and solve for internal resistance.'],
      formula: 'Vlost = I * r; I = (V - Vlost) / Rload',
      keyConcept: 'Understanding internal resistance in circuit behavior.',
      commonMistakes: ['Errors in using voltage relationships.'],
      extraneousGivens: ['Voltage drop across load: 6.5 V'],
    }
  },
  {
    id: 'llm-c-0318', area: 'C', subTopic: 'farm-electrification',
    topic: 'Electrical Power Calculation', type: 'computation', difficulty: 'easy',
    question: 'A farm has a total resistance of 15 ohms and draws a current of 3 amperes. Calculate the voltage supplied to the farm. Note: A nearby irrigation system uses 5 gallons of water per minute.',
    options: ['45 V', '30 V', '60 V', '15 V'],
    correctAnswer: 0,
    solution: {
      given: 'R = 15 ohms, I = 3 A',
      steps: ['Using Ohm\'s Law: V = IR', 'V = 15 ohms * 3 A = 45 V'],
      formula: 'V = I × R',
      keyConcept: 'Voltage is calculated by multiplying current and resistance.',
      commonMistakes: ['Forgetting to apply Ohm\'s Law', 'Using current in kA instead of A'],
      extraneousGivens: ['Irrigation system usage: 5 gallons/minute'],
    }
  },
  {
    id: 'llm-c-0319', area: 'C', subTopic: 'farm-electrification',
    topic: 'Conductance Calculation', type: 'computation', difficulty: 'easy',
    question: 'A circuit has a voltage supply of 24 V and a current of 8 A. Calculate the conductance of the circuit. Note: The circuit is also connected to a 10-ohm resistor in parallel.',
    options: ['0.25 S', '0.33 S', '0.5 S', '0.75 S'],
    correctAnswer: 2,
    solution: {
      given: 'V = 24 V, I = 8 A',
      steps: ['Conductance (G) = I/V = 8 A / 24 V = 0.3333 S', 'Round to two decimal places: 0.33 S'],
      formula: 'G = I / V',
      keyConcept: 'Conductance is the reciprocal of resistance.',
      commonMistakes: ['Miscalculating current', 'Ignoring the voltage value'],
      extraneousGivens: ['Connected to a 10-ohm resistor'],
    }
  },
  {
    id: 'llm-c-0320', area: 'C', subTopic: 'farm-electrification',
    topic: 'Power Calculation', type: 'computation', difficulty: 'average',
    question: 'A motor operates at a power factor of 0.8 and consumes a current of 10 A at 220 V. Calculate the total power consumed by the motor. Note: The ambient temperature is 25° C and does not affect the calculations.',
    options: ['1760 W', '176 W', '2200 W', '880 W'],
    correctAnswer: 0,
    solution: {
      given: 'V = 220 V, I = 10 A, PF = 0.8',
      steps: ['Power (P) = V × I × PF = 220 V × 10 A × 0.8', 'P = 1760 W'],
      formula: 'P = V × I × PF',
      keyConcept: 'Power consumption accounts for voltage, current, and power factor.',
      commonMistakes: ['Forgetting to multiply by the power factor', 'Calculating apparent power instead of real power'],
      extraneousGivens: ['Ambient temperature: 25° C'],
    }
  },
  {
    id: 'llm-c-0321', area: 'C', subTopic: 'farm-electrification',
    topic: 'Energy Consumption Calculation', type: 'computation', difficulty: 'average',
    question: 'A rice mill uses 50 kW of power and operates for 6 hours daily. Calculate the total energy consumption in kWh during one week. Note: The mill has a backup generator rated at 15 kW.',
    options: ['2100 kWh', '1000 kWh', '3000 kWh', '600 kWh'],
    correctAnswer: 0,
    solution: {
      given: 'Power = 50 kW, Time = 6 h/day',
      steps: ['Energy (E) = Power × Time', 'For one week: E = 50 kW × 6 h/day × 7 days = 2100 kWh'],
      formula: 'E = P × t',
      keyConcept: 'Energy is the product of power and time.',
      commonMistakes: ['Confusing kW with kWh', 'Calculating for days instead of hours'],
      extraneousGivens: ['Backup generator rated at 15 kW'],
    }
  },
  {
    id: 'llm-c-0322', area: 'C', subTopic: 'farm-electrification',
    topic: 'Electric Charge Calculation', type: 'computation', difficulty: 'average',
    question: 'A circuit with a current of 4 A operates for 30 minutes. Calculate the electric charge generated during this time. Note: There’s a 2-ohm resistor in the circuit.',
    options: ['120 C', '60 C', '240 C', '180 C'],
    correctAnswer: 0,
    solution: {
      given: 'I = 4 A, t = 30 min = 1800 s',
      steps: ['Charge (Q) = I × t', 'Q = 4 A × 1800 s = 720 C'],
      formula: 'Q = I × t',
      keyConcept: 'Electric charge is the product of current and time.',
      commonMistakes: ['Calculating time in minutes instead of seconds', 'Ignoring current value'],
      extraneousGivens: ['Resistor in the circuit: 2 ohms'],
    }
  },
  {
    id: 'llm-c-0323', area: 'C', subTopic: 'farm-electrification',
    topic: 'Energy Consumption for Lighting', type: 'computation', difficulty: 'average',
    question: 'A farm uses 10 LED lights, each rated at 15 W, and operates them for 5 hours each day. Calculate the total energy consumption in a month. Note: The farm is located in a region with an average humidity of 75%.',
    options: ['225 kWh', '75 kWh', '300 kWh', '150 kWh'],
    correctAnswer: 0,
    solution: {
      given: 'Number of lights = 10, Power = 15 W, Time = 5 hours/day',
      steps: ['Total power = 10 lights × 15 W = 150 W', 'Total energy (monthly) = (150 W × 5 h/day × 30 days) / 1000 = 22.5 kWh'],
      formula: 'E = (P × t × days) / 1000',
      keyConcept: 'Energy consumption in kWh for multiple devices involves calculating total power used.',
      commonMistakes: ['Confusing watts with kilowatts', 'Forgetting to convert to kWh'],
      extraneousGivens: ['Average humidity: 75%'],
    }
  },
  {
    id: 'llm-c-0324', area: 'C', subTopic: 'farm-electrification',
    topic: 'Lighting Calculation', type: 'theory', difficulty: 'easy',
    question: 'What is the primary factor to consider when designing lighting plans for agricultural buildings?',
    options: ['Type of crops being grown', 'Intensity of light required for photosynthesis', 'Aesthetic appeal of lighting', 'Cost of lighting fixtures'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'The intensity of light directly affects plant growth and development.',
      commonMistakes: ['Focusing only on cost', 'Neglecting plant requirements'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-c-0325', area: 'C', subTopic: 'farm-electrification',
    topic: 'Voltage Drop Calculation', type: 'computation', difficulty: 'average',
    question: 'Calculate the voltage drop across a 100-meter 10 AWG copper wire carrying a current of 30 A. Use a resistivity of 1.68 × 10^-8 ohm-m. Note: The farm uses a high-efficiency water pump rated at 2.5 HP.',
    options: ['0.95 V', '1.5 V', '2.0 V', '1.0 V'],
    correctAnswer: 2,
    solution: {
      given: 'Length = 100 m, Current = 30 A, Resistivity = 1.68 × 10^-8 ohm-m',
      steps: ['Calculate resistance: R = (resistivity × length) / area', 'Voltage drop: V_drop = I × R'],
      formula: 'V_drop = I × (ρ × L / A)',
      keyConcept: 'Voltage drop in a wire is caused by current flowing through resistance.',
      commonMistakes: ['Neglecting the cross-sectional area of the wire', 'Using incorrect units for resistivity'],
      extraneousGivens: ['High-efficiency water pump rated at 2.5 HP'],
    }
  },
  {
    id: 'llm-c-0326', area: 'C', subTopic: 'farm-electrification',
    topic: 'Power Factor Calculation', type: 'theory', difficulty: 'hard',
    question: 'In a three-phase motor, if the real power is 20 kW and the apparent power is 25 kVA, what is the power factor of the motor?',
    options: ['0.8', '1.0', '0.5', '0.4'],
    correctAnswer: 0,
    solution: {
      given: 'Real Power = 20 kW, Apparent Power = 25 kVA',
      steps: ['Power Factor (PF) = Real Power / Apparent Power', 'PF = 20 kW / 25 kVA = 0.8'],
      formula: 'PF = P / S',
      keyConcept: 'Power factor measures the efficiency of the electrical system.',
      commonMistakes: ['Confusing real power with apparent power', 'Using wrong units'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-c-0327', area: 'C', subTopic: 'farm-electrification',
    topic: 'Current Flow Calculation', type: 'computation', difficulty: 'hard',
    question: 'A transformer has a primary voltage of 240 V and secondary voltage of 120 V. If the primary current is 10 A, calculate the secondary current. Note: The transformer has efficiency of 95%.',
    options: ['15 A', '10 A', '12 A', '8.5 A'],
    correctAnswer: 2,
    solution: {
      given: 'V_primary = 240 V, V_secondary = 120 V, I_primary = 10 A, Efficiency = 95%',
      steps: ['Use the formula: V_primary × I_primary = V_secondary × I_secondary', 'Rearranging gives I_secondary = (V_primary × I_primary) / V_secondary', 'I_secondary = (240 V × 10 A) / 120 V = 20 A (theoretical), with efficiency considered 20 A * 0.95 = 19 A'],
      formula: 'I_secondary = (V_primary × I_primary) / V_secondary',
      keyConcept: 'Current is adjusted according to voltage levels and transformer efficiency.',
      commonMistakes: ['Forgetting to account for efficiency', 'Incorrect rearranging of equation'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-c-0328', area: 'C', subTopic: 'farm-electrification',
    topic: 'Transformer Rating Calculation', type: 'computation', difficulty: 'hard',
    question: 'Calculate the required transformer rating in kVA if the load connected is 15 kW at a power factor of 0.8. Note: The circuit has a capacitance of 25 μF.',
    options: ['18.75 kVA', '15 kVA', '12 kVA', '10 kVA'],
    correctAnswer: 0,
    solution: {
      given: 'Load = 15 kW, Power Factor = 0.8',
      steps: ['Transformer Rating (kVA) = Load / Power Factor', 'kVA = 15 kW / 0.8 = 18.75 kVA'],
      formula: 'kVA = kW / PF',
      keyConcept: 'Transformer rating must cater for real power and power factor.',
      commonMistakes: ['Forgetting to divide by PF', 'Confusing kW with kVA'],
      extraneousGivens: ['Circuit capacitance of 25 μF'],
    }
  },
  {
    id: 'llm-c-0329', area: 'C', subTopic: 'farm-electrification',
    topic: 'Load Demand Calculation', type: 'theory', difficulty: 'average',
    question: 'When calculating load demand for a farm, which factor is least likely to affect the results?',
    options: ['Number of appliances', 'Type of appliances', 'Weather conditions', 'Average usage time'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: 'Weather conditions typically have a lesser impact compared to other factors.',
      commonMistakes: ['Neglecting the impact of usage patterns', 'Overestimating non-electrical factors'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-c-0330', area: 'C', subTopic: 'farm-electrification',
    topic: 'Conductor Sizing Calculation', type: 'computation', difficulty: 'hard',
    question: 'For a farm with a load of 30 A and a distance of 50 meters from the service entrance, calculate the minimum conductor size in mm² using a voltage drop of 3%. Note: The conductor material is copper with a resistivity of 1.68 * 10^-8 Ω·m.',
    options: ['2.5 mm²', '4.0 mm²', '6.0 mm²', '10.0 mm²'],
    correctAnswer: 2,
    solution: {
      given: 'Load = 30 A, Distance = 50 m, Voltage Drop = 3%',
      steps: ['Using the voltage drop formula: VD = 2 * I * L * R', 'Rearranging to find R: R = VD / (2 * I * L), with VD = 0.03 * V (assume V = 230V for calculation)', 'After calculating, using the appropriate formulas to find minimum wire size.'],
      formula: 'R = (ρ * L) / A',
      keyConcept: 'Proper conductor sizing ensures minimal voltage drop and safe operation.',
      commonMistakes: ['Ignoring the material properties', 'Miscalculating the distance'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-c-0331', area: 'C', subTopic: 'farm-electrification',
    topic: 'Efficiency Calculation', type: 'theory', difficulty: 'hard',
    question: 'What does the efficiency of an electric motor indicate?',
    options: ['The ratio of input to output power', 'Total power consumed', 'Operational temperature', 'Noise levels during operation'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: 'Efficiency measures how effectively input power is converted to useful output.',
      commonMistakes: ['Confusing efficiency with power factor', 'Misunderstanding motor ratings'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-c-0332', area: 'C', subTopic: 'farm-electrification',
    topic: 'Electrical Load Analysis', type: 'theory', difficulty: 'hard',
    question: 'When analyzing the electrical load demand of a farm, which factor is most important to consider?',
    options: ['Type of crops cultivated', 'Number of workers in the field', 'Types and number of electrical appliances', 'Weather patterns'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: 'Electrical load demand is directly linked to the electrical appliances used on the farm.',
      commonMistakes: ['Neglecting the importance of appliance usage', 'Focusing solely on production variables'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-c-0333', area: 'C', subTopic: 'farm-electrification',
    topic: 'Basic Electrical Principles', type: 'computation', difficulty: 'easy',
    question: 'A circuit has a resistance of 10 ohms and a current of 2 amperes. What is the voltage in the circuit? (Note: The ambient temperature is 25°C, the barometric pressure is 101 kPa, and these values are not necessary for this calculation.)',
    options: ['20 V', '10 V', '40 V', '30 V'],
    correctAnswer: 0,
    solution: {
      given: 'R = 10 ohms, I = 2 A',
      steps: ['Use Ohm\'s Law: V = I * R', 'Calculating: V = 2 A * 10 ohms = 20 V'],
      formula: 'V = I * R',
      keyConcept: 'Volts can be calculated using Ohm\'s Law.',
      commonMistakes: ['Incorrectly assuming voltage is 10V', 'Forgetting to multiply current by resistance'],
      extraneousGivens: ['Ambient temperature: 25°C', 'Barometric pressure: 101 kPa'],
    }
  },
  {
    id: 'llm-c-0334', area: 'C', subTopic: 'farm-electrification',
    topic: 'Power Consumption', type: 'computation', difficulty: 'easy',
    question: 'A circuit has 100 ohms resistance and 1 ampere current. Calculate the power generated. (Note: The circuit operates at a temperature of 30°C and this value is not necessary for solving the problem.)',
    options: ['100 W', '200 W', '10 W', '1 W'],
    correctAnswer: 0,
    solution: {
      given: 'R = 100 ohms, I = 1 A',
      steps: ['Power (P) = I^2 * R = (1 A)^2 * (100 ohms) = 100 W'],
      formula: 'P = I^2 * R',
      keyConcept: 'Power is calculated from current and resistance.',
      commonMistakes: ['Using wrong values or formulas', 'Calculating power as 1W instead of 100W'],
      extraneousGivens: ['Temperature: 30°C'],
    }
  },
  {
    id: 'llm-c-0335', area: 'C', subTopic: 'farm-electrification',
    topic: 'Energy Calculation', type: 'computation', difficulty: 'average',
    question: 'Given a circuit with a resistance of 12 ohms and a current of 1 ampere, compute the energy generated in 60 seconds. (The voltage across the circuit is 12V, but this is not needed for this calculation.)',
    options: ['720 J', '360 J', '120 J', '60 J'],
    correctAnswer: 0,
    solution: {
      given: 'R = 12 ohms, I = 1 A, time = 60 s',
      steps: ['Calculate power, P = I^2 * R = (1 A)^2 * (12 ohms) = 12 W', 'Energy = Power * Time = 12 W * 60 s = 720 J'],
      formula: 'Energy = Power * time; P = I^2 * R',
      keyConcept: 'Energy can be calculated from power and time.',
      commonMistakes: ['Calculating power as 60W due to wrong multiplication', 'Ignoring the time factor'],
      extraneousGivens: ['Voltage: 12V'],
    }
  },
  {
    id: 'llm-c-0336', area: 'C', subTopic: 'farm-electrification',
    topic: 'Capacitance Calculation', type: 'computation', difficulty: 'average',
    question: 'A capacitor connected to a 10-mho circuit generates 150 J of energy with a power of 20 W. Compute the farad value of the capacitor. (The circuit operates at a frequency of 60 Hz and this frequency is not required for the calculation.)',
    options: ['150 Farad', '75 Farad', '3000 Farad', '600 Farad'],
    correctAnswer: 1,
    solution: {
      given: 'Energy = 150 J, P = 20 W',
      steps: ['Calculate time: t = Energy / Power = 150 J / 20 W = 7.5 s', 'Calculate capacitance: C = (2 * Energy) / (V^2) where V = I * R; let\'s assume I = 20 A, R = 10 mho', 'Thus, C = (2 * 150 J) / (20^2) = 75 Farads'],
      formula: 'C = (2 * Energy) / (V^2)',
      keyConcept: 'Capacitance can be derived from energy and voltage.',
      commonMistakes: ['Using wrong power values or mixing units', 'Misunderstanding the relationship between energy and capacitance'],
      extraneousGivens: ['Circuit frequency: 60 Hz'],
    }
  },
  {
    id: 'llm-c-0337', area: 'C', subTopic: 'farm-electrification',
    topic: 'Lighting Calculation', type: 'computation', difficulty: 'easy',
    question: 'A fluorescent lamp produces 3,500 lumens, lighting a room of dimensions 10 ft x 20 ft. Compute the illumination in lux. (Note: The area of the room is 200 ft², and this is not necessary for the calculation.)',
    options: ['17.6 lux', '50 lux', '18 lux', '20 lux'],
    correctAnswer: 2,
    solution: {
      given: 'Lumens = 3500, Area = 200 ft²',
      steps: ['Convert area to m²: 200 ft² = 18.58 m²', 'Illumination (lux) = Lumens / Area = 3500 / 18.58 = 188.36 lux'],
      formula: 'Illumination (lux) = Lumens / m²',
      keyConcept: 'Illumination is calculated based on total lumens divided by area.',
      commonMistakes: ['Confusing square feet with square meters', 'Incorrectly calculating the area'],
      extraneousGivens: ['Area of the room: 200 ft²'],
    }
  },
  {
    id: 'llm-c-0338', area: 'C', subTopic: 'farm-electrification',
    topic: 'Cable Sizing', type: 'computation', difficulty: 'hard',
    question: 'A farm requires 1800 Watts for its electrical systems located 100 meters away from the source. Calculate the size of the conductor cable required, assuming a permissible voltage drop of 3% on a 230 V system. (Note: The material resistivity is 1.68 x 10^-8 Ωm, and the exact resistivity is not necessary for this calculation.)',
    options: ['4 mm²', '6 mm²', '10 mm²', '2.5 mm²'],
    correctAnswer: 1,
    solution: {
      given: 'Power = 1800 W, Distance = 100 m, Voltage = 230 V, Voltage drop = 3%',
      steps: ['Calculate max allowed voltage drop: 0.03 * 230 V = 6.9 V', 'Using formula for voltage drop, I = P/V = 1800W / 230V = 7.83 A', 'Using the voltage drop formula, Vd = 2 * I * L * R, calculate R for the conductor: R = Vd / (2 * I * L)'],
      formula: 'Vd = 2 * I * L * R; R = ρ / (A * L)',
      keyConcept: 'Cable sizing involves calculating the allowable voltage drop based on load demand.',
      commonMistakes: ['Confusing resistivity with resistance', 'Improper unit conversion leading to sizing errors'],
      extraneousGivens: ['Material resistivity: 1.68 x 10^-8 Ωm'],
    }
  },
  {
    id: 'llm-c-0339', area: 'C', subTopic: 'farm-electrification',
    topic: 'Motor Operation', type: 'computation', difficulty: 'average',
    question: 'An electric motor rated at 5 HP operates at an efficiency of 75%. Calculate the input power in watts. (Note: The ambient temperature is 25°C, but does not impact this calculation.)',
    options: ['4000 W', '3000 W', '5000 W', '6000 W'],
    correctAnswer: 0,
    solution: {
      given: 'Motor HP = 5, Efficiency = 75%',
      steps: ['Convert HP to Watts: 1 HP = 746 W, thus 5 HP = 5 * 746 = 3730 W', 'Calculate input power using efficiency: Input Power = Output Power / Efficiency = 3730 / 0.75 = 4973.33 W'],
      formula: 'Input Power = Output Power / Efficiency',
      keyConcept: 'Understanding motor efficiency in calculating input power.',
      commonMistakes: ['Not converting HP to Watts', 'Misusing the efficiency formula'],
      extraneousGivens: ['Ambient temperature: 25°C'],
    }
  },
  {
    id: 'llm-c-0340', area: 'C', subTopic: 'farm-electrification',
    topic: 'Transformer Turns Ratio', type: 'computation', difficulty: 'hard',
    question: 'A transformer has 500 turns in the primary coil supplied with 40 A current. What is the number of turns in the secondary coil to produce a 200 A current? (Note: The primary voltage is 230 V, which is not necessary for this calculation.)',
    options: ['100 turns', '500 turns', '250 turns', '200 turns'],
    correctAnswer: 0,
    solution: {
      given: 'N1 = 500 turns, I1 = 40 A, I2 = 200 A',
      steps: ['Using the turns ratio formula: N1/N2 = I2/I1', 'Rearranging gives N2 = N1 * (I1/I2) = 500 * (40/200) = 100 turns'],
      formula: 'N1/N2 = I2/I1',
      keyConcept: 'Understanding transformer turns ratio for current calculations.',
      commonMistakes: ['Wrongly applying turns ratio for voltage instead of current', 'Using incorrect current values'],
      extraneousGivens: ['Primary voltage: 230 V'],
    }
  },
  {
    id: 'llm-c-0341', area: 'C', subTopic: 'farm-electrification',
    topic: 'Electrical Load Calculation', type: 'computation', difficulty: 'average',
    question: 'A farm has a lighting load of 1200 W, and a machinery load of 2400 W. Calculate the total load in kW. (Note: The voltage of the system is 230 V, which is not necessary for this calculation.)',
    options: ['3 kW', '2.4 kW', '1.6 kW', '4 kW'],
    correctAnswer: 1,
    solution: {
      given: 'Lighting load = 1200 W, Machinery load = 2400 W',
      steps: ['Total load = Lighting load + Machinery load = 1200 + 2400 = 3600 W', 'Convert to kW: Total load = 3600 W / 1000 = 3.6 kW'],
      formula: 'Total Load (kW) = (Lighting Load + Machinery Load) / 1000',
      keyConcept: 'Total load must account for all connected devices.',
      commonMistakes: ['Forgetting to convert Watts to kW', 'Adding loads incorrectly'],
      extraneousGivens: ['Voltage of the system: 230 V'],
    }
  },
  {
    id: 'llm-c-0342', area: 'C', subTopic: 'farm-electrification',
    topic: 'Voltage Drop Calculation', type: 'computation', difficulty: 'hard',
    question: 'Calculate the voltage drop across a 50-meter length of 2.5 mm² copper wire carrying a current of 10 A. (The temperature coefficient of copper is 0.00393/°C, but this is irrelevant for this calculation.)',
    options: ['0.3 V', '1.5 V', '2.0 V', '2.5 V'],
    correctAnswer: 1,
    solution: {
      given: 'Length = 50 m, Current = 10 A, Area = 2.5 mm², Resistivity of copper = 1.68 x 10^-8 Ωm',
      steps: ['Calculate resistance: R = ρ * (L/A) = (1.68 x 10^-8 Ωm) * (50 m / (2.5 x 10^-6)) = 0.336 Ω', 'Calculate voltage drop: Vd = I * R = 10 A * 0.336 Ω = 3.36 V'],
      formula: 'Vd = I * R where R = ρ * (L / A)',
      keyConcept: 'Voltage drop is determined by resistance and current.',
      commonMistakes: ['Miscalculating resistance', 'Ignoring the conductor’s cross-sectional area'],
      extraneousGivens: ['Temperature coefficient of copper'],
    }
  },
  {
    id: 'llm-c-0343', area: 'C', subTopic: 'farm-electrification',
    topic: 'Farm Electrification Design', type: 'theory', difficulty: 'hard',
    question: 'What factors must be considered when designing a farm electrification plan?',
    options: ['Type of crops, Available budget, Local climate', 'Soil type, Available budget, Local legislation', 'Type of crops, Size of the farm, Crop rotation schedule', 'Total load requirements, Local regulations, Type of equipment used'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: 'Effective farm electrification involves understanding load requirements, regulatory compliance, and equipment types.',
      commonMistakes: ['Focusing on environmental factors instead of electrical load', 'Ignoring local legislation'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-c-0344', area: 'C', subTopic: 'farm-electrification',
    topic: 'Electronics Application', type: 'theory', difficulty: 'average',
    question: 'In agricultural systems, what is the role of sensors? ',
    options: ['To detect soil moisture, To control irrigation, To monitor crop health', 'To increase crop yields, To manage pests, To enhance growing conditions', 'To provide power, To reduce labor needs, To analyze soil composition', 'To detect pests, To provide weather data, To control lighting'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: 'Sensors are vital for precision agriculture, enabling real-time data collection and automation.',
      commonMistakes: ['Focusing solely on crop yield aspects', 'Misunderstanding the main functions of sensors'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-c-0345', area: 'C', subTopic: 'farm-electrification',
    topic: 'Instrumentation and Control', type: 'theory', difficulty: 'hard',
    question: 'What are the benefits of using automated control systems for farm electrification?',
    options: ['Increased energy consumption, Reduced manual labor, Lower initial costs', 'Improved efficiency, Enhanced monitoring, Higher productivity', 'Increased downtime, Higher cost of repairs, More manual data entry', 'Reduced regulatory compliance, Less data management, Increased labor requirements'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'Automated systems enhance efficiency and monitoring capabilities in farm electrification.',
      commonMistakes: ['Assuming automation leads to higher costs', 'Misunderstanding the role of monitoring in agricultural success'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-c-0346', area: 'C', subTopic: 'farm-electrification',
    topic: 'Motor and Generator Operation', type: 'theory', difficulty: 'average',
    question: 'What are the key factors in evaluating the efficiency of electric motors used in agriculture?',
    options: ['Load factor, Speed, Input power', 'Temperature, Shape, Color', 'Distance from power source, Type of crops, Time of day', 'Cost of maintenance, Number of phases, Local climate'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: 'Efficiency evaluation considers load factor, speed, and the amount of input power.',
      commonMistakes: ['Focusing on irrelevant characteristics', 'Ignoring the importance of load dynamics'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-c-0347', area: 'C', subTopic: 'farm-electrification',
    topic: 'Renewable Energy Sources', type: 'theory', difficulty: 'hard',
    question: 'Which renewable energy source is most suitable for farm electrification in the Philippines?',
    options: ['Biogas, Solar power, Wind energy', 'Coal, Natural gas, Oil', 'Nuclear, Geothermal, Biomass', 'Hydro, Fossil fuels, Hydrogen'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'Solar energy is particularly effective in the Philippines due to its climate.',
      commonMistakes: ['Confusing renewable sources with non-renewable ones', 'Ignoring local context in energy choice'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-c-0348', area: 'C', subTopic: 'farm-electrification',
    topic: 'Power Calculation', type: 'theory', difficulty: 'average',
    question: 'According to Philippine law, what is the primary agency responsible for rural electrification?',
    options: ['Department of Agriculture (DA)', 'National Electrification Administration (NEA)', 'Department of Energy (DOE)', 'National Irrigation Administration (NIA)'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0349', area: 'C', subTopic: 'farm-electrification',
    topic: 'Electrical Safety', type: 'theory', difficulty: 'easy',
    question: 'What is the color of the ground wire according to the Philippine Electrical Code?',
    options: ['Red', 'Black', 'Green', 'Blue'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0350', area: 'C', subTopic: 'farm-electrification',
    topic: 'Load Calculation', type: 'theory', difficulty: 'hard',
    question: 'What is the purpose of a circuit breaker in an electrical system?',
    options: ['To measure voltage', 'To prevent overcurrent', 'To convert AC to DC', 'To increase current flow'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0351', area: 'C', subTopic: 'farm-electrification',
    topic: 'Electrical Calculation', type: 'theory', difficulty: 'average',
    question: 'Which formula calculates the power consumed by an electrical appliance?',
    options: ['P = IV', 'P = I²R', 'P = V²/R', 'All of the above'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0352', area: 'C', subTopic: 'farm-electrification',
    topic: 'Energy Consumption', type: 'computation', difficulty: 'average',
    question: 'If a 10-ohm resistor carries a current of 1 ampere for 1 hour, what is the energy consumed in kilowatt-hours? (Consider irrelevant factors like temperature changes in this calculation.)',
    options: ['0.1 kW-hr', '0.5 kW-hr', '0.2 kW-hr', '0.15 kW-hr'],
    correctAnswer: 0,
    solution: {
      given: 'R = 10 ohms, I = 1 A, t = 1 hr',
      steps: ['Calculate power: P = I²R = (1 A)² * 10 ohms = 10 W', 'Convert to kW: P = 10 W / 1000 = 0.01 kW', 'Energy = P * t = 0.01 kW * 1 hr = 0.01 kW-hr'],
      formula: 'Energy (kW-hr) = Power (kW) * Time (hr)',
      keyConcept: 'Energy is the product of power and time.',
      commonMistakes: ['Confusing watts and kilowatts', 'Using wrong time unit', 'Ignoring unit conversions'],
      extraneousGivens: ['Temperature: 30°C', 'Humidity: 50%', 'Barometric pressure: 101.3 kPa'],
    }
  },
  {
    id: 'llm-c-0353', area: 'C', subTopic: 'farm-electrification',
    topic: 'Capacitance', type: 'computation', difficulty: 'hard',
    question: 'A capacitor is connected to a 10-mho circuit generating an energy of 150 J. Calculate the value of the capacitor in farads. (Consider unnecessary factors like the length of the wires connected.)',
    options: ['150 Farad', '75 Farad', '3000 Farad', '1125 Farad'],
    correctAnswer: 0,
    solution: {
      given: 'Energy = 150 J, Conductance = 10 mhos',
      steps: ['Use the formula: Energy (E) = 0.5 * C * V²', 'Identify voltage: V = 1 / Conductance = 1 / 10 = 0.1 V', '150 = 0.5 * C * (0.1)²', 'C = 150 / 0.005 = 30000 Farads'],
      formula: 'C = 2 * E / V²',
      keyConcept: 'Capacitance relates energy stored and voltage applied.',
      commonMistakes: ['Using wrong formula for capacitance', 'Not squaring voltage', 'Confusing conductance with resistance'],
      extraneousGivens: ['Length of wires: 5 m', 'Ambient temperature: 25°C', 'Humidity: 40%'],
    }
  },
  {
    id: 'llm-c-0354', area: 'C', subTopic: 'farm-electrification',
    topic: 'Motor Ratings', type: 'theory', difficulty: 'average',
    question: 'What is the rated power of an electric motor typically specified in?',
    options: ['Watts', 'Amperes', 'Volts', 'Ohms'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0355', area: 'C', subTopic: 'farm-electrification',
    topic: 'Electronics', type: 'theory', difficulty: 'easy',
    question: 'What is the primary function of a diode in a circuit?',
    options: ['To store energy', 'To allow current to flow in one direction', 'To increase current', 'To reduce voltage'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0356', area: 'C', subTopic: 'farm-electrification',
    topic: 'Current Calculation', type: 'computation', difficulty: 'average',
    question: 'If a circuit has a resistance of 5 ohms and is supplied with a voltage of 15 volts, calculate the current. (Note other parameters like expected load in the calculation.)',
    options: ['2 A', '3 A', '4 A', '5 A'],
    correctAnswer: 1,
    solution: {
      given: 'R = 5 ohms, V = 15 V',
      steps: ['Use Ohm\'s Law: I = V / R', 'I = 15 V / 5 ohms = 3 A'],
      formula: 'I = V / R',
      keyConcept: 'Current is determined by voltage divided by resistance.',
      commonMistakes: ['Inverting voltage and resistance', 'Forgetting unit conversions', 'Adding unnecessary values'],
      extraneousGivens: ['Expected load: 20 kg', 'Ambient temperature: 25°C', 'Voltage drop: 1 V'],
    }
  },
  {
    id: 'llm-c-0357', area: 'C', subTopic: 'farm-electrification',
    topic: 'Transformer Calculations', type: 'computation', difficulty: 'hard',
    question: 'A transformer has 500 turns in the primary coil and carries a current of 40 Amps. Calculate the number of turns in the secondary coil needed to produce 200 Amps output. (Consider excess voltage ratings as unnecessary.)',
    options: ['100 turns', '50 turns', '5000 turns', '10 turns'],
    correctAnswer: 1,
    solution: {
      given: 'N_p = 500 turns, I_p = 40 A, I_s = 200 A',
      steps: ['Using the turns ratio: N_p / N_s = I_s / I_p', '500 / N_s = 200 / 40', '500 / N_s = 5', 'N_s = 500 / 5 = 100 turns'],
      formula: 'N_p / N_s = I_s / I_p',
      keyConcept: 'Transformer turns ratio inversely relates to current.',
      commonMistakes: ['Mixing primary and secondary turns', 'Confusing turns with current', 'Ignoring relationship directionality'],
      extraneousGivens: ['Voltage rating: 220V', 'Frequency: 60Hz', 'Power loss: negligible'],
    }
  },
  {
    id: 'llm-c-0358', area: 'C', subTopic: 'farm-electrification',
    topic: 'Voltage Drop', type: 'computation', difficulty: 'hard',
    question: 'If a 7.3-V battery with an internal resistance of 0.3 ohm is connected in series with a 9.5-ohm resistor, calculate the lost volts from the battery. (Consider temperature factors irrelevant in this scenario.)',
    options: ['0.3 V', '0.5 V', '0.2 V', '0.8 V'],
    correctAnswer: 0,
    solution: {
      given: 'E = 7.3 V, R = 9.5 ohms, r = 0.3 ohms',
      steps: ['Total resistance: R_total = R + r = 9.5 + 0.3 = 9.8 ohms', 'Current: I = E / R_total = 7.3 / 9.8 = 0.7449 A', 'Lost volts: V_lost = I * r = 0.7449 * 0.3 ≈ 0.22347 V'],
      formula: 'V_lost = I * r',
      keyConcept: 'Lost voltage is determined by current flowing and internal resistance.',
      commonMistakes: ['Using wrong resistances', 'Forgetting Ohm\'s Law', 'Assuming resistance as constant'],
      extraneousGivens: ['Temperature: 30°C', 'Humidity: 40%', 'Power factor: 1'],
    }
  },
  {
    id: 'llm-c-0359', area: 'C', subTopic: 'farm-electrification',
    topic: 'Generators', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of an electric generator?',
    options: ['To convert mechanical energy to electrical energy', 'To store electrical energy', 'To increase voltage', 'To measure current'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0360', area: 'C', subTopic: 'farm-electrification',
    topic: 'Motor Efficiency', type: 'computation', difficulty: 'hard',
    question: 'A motor operates at 75% efficiency and draws 12 A at 230 V. Calculate the useful output power of the motor. (Consider ambient temperature changes as unnecessary.)',
    options: ['2.07 kW', '3.00 kW', '1.90 kW', '2.50 kW'],
    correctAnswer: 1,
    solution: {
      given: 'I = 12 A, V = 230 V, efficiency = 75%',
      steps: ['Power input: P_input = VI = 230 V * 12 A = 2760 W = 2.76 kW', 'Useful Power = P_input * efficiency = 2.76 kW * 0.75 = 2.07 kW'],
      formula: 'P_output = P_input * efficiency',
      keyConcept: 'The efficiency of a motor affects the useful output power.',
      commonMistakes: ['Confusing efficiency with total power', 'Not converting units correctly', 'Forgetting to apply efficiency'],
      extraneousGivens: ['Ambient temperature: 25°C', 'Barometric pressure: 100 kPa', 'Motor size: 5 hp'],
    }
  },
  {
    id: 'llm-c-0361', area: 'C', subTopic: 'farm-electrification',
    topic: 'Current Calculations', type: 'computation', difficulty: 'average',
    question: 'In a circuit with a voltage of 120 V and a total resistance of 30 ohms, calculate the current. (Ignore metrics such as humidity.)',
    options: ['4 A', '3 A', '5 A', '2 A'],
    correctAnswer: 1,
    solution: {
      given: 'V = 120 V, R = 30 ohms',
      steps: ['Using Ohm\'s Law: I = V / R = 120 V / 30 ohms = 4 A'],
      formula: 'I = V / R',
      keyConcept: 'Ohm\'s Law describes the relationship between voltage, current, and resistance.',
      commonMistakes: ['Confusing voltage with resistance', 'Using incorrect units', 'Failing to divide'],
      extraneousGivens: ['Time: 1 hr', 'Temperature: 27°C', 'Voltage drop: negligible'],
    }
  },
  {
    id: 'llm-c-0362', area: 'C', subTopic: 'farm-electrification',
    topic: 'Installation Guidelines', type: 'theory', difficulty: 'hard',
    question: 'What is the minimum height above the floor for convenience outlets as per Philippine standards?',
    options: ['0.5 m', '1.0 m', '1.5 m', '2.0 m'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0363', area: 'C', subTopic: 'farm-electrification',
    topic: 'Service Conductors', type: 'theory', difficulty: 'average',
    question: 'What is the primary consideration when selecting service conductors for farm electrification?',
    options: ['Length', 'Material', 'Current-carrying capacity', 'Voltage rating'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0364', area: 'C', subTopic: 'farm-electrification',
    topic: 'Power Factor', type: 'theory', difficulty: 'average',
    question: 'What is the power factor of a purely resistive load?',
    options: ['0', '1', '0.5', '0.707'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0365', area: 'C', subTopic: 'farm-electrification',
    topic: 'Voltage and Current', type: 'computation', difficulty: 'easy',
    question: 'A circuit has a resistance of 10 ohms and a current of 2 amperes. Compute the voltage in the circuit. (Given: Power = 40 W, Temperature = 25°C, Length of wire = 50 m)',
    options: ['10 V', '20 V', '5 V', '15 V'],
    correctAnswer: 1,
    solution: {
      given: 'R = 10 ohms, I = 2 A',
      steps: ['Use Ohm\'s Law: V = IR', 'V = 10 ohms * 2 A = 20 V'],
      formula: 'V = I × R',
      keyConcept: 'Voltage can be calculated using the product of current and resistance.',
      commonMistakes: ['Misapplying the power formula instead of Ohm\'s Law', 'Forgetting to multiply resistance by current'],
      extraneousGivens: ['Power = 40 W', 'Temperature = 25°C', 'Length of wire = 50 m'],
    }
  },
  {
    id: 'llm-c-0366', area: 'C', subTopic: 'farm-electrification',
    topic: 'Conductance', type: 'computation', difficulty: 'easy',
    question: 'A circuit is connected to a 12-V source and has a current of 6 Amperes. Compute for the conductance in the circuit. (Given: Internal resistance = 0.5 ohms, Voltage drop = 0.2 V, Length = 100 m)',
    options: ['0.25 mohs', '0.5 siemens', '2 siemens', '0.2 mhos'],
    correctAnswer: 2,
    solution: {
      given: 'V = 12 V, I = 6 A',
      steps: ['Conductance, G = I/V', 'G = 6 A / 12 V = 0.5 siemens'],
      formula: 'G = I / V',
      keyConcept: 'Conductance is the reciprocal of resistance and it relates current and voltage.',
      commonMistakes: ['Confusing mohs with mhos', 'Using the wrong formula for conductance'],
      extraneousGivens: ['Internal resistance = 0.5 ohms', 'Voltage drop = 0.2 V', 'Length = 100 m'],
    }
  },
  {
    id: 'llm-c-0367', area: 'C', subTopic: 'farm-electrification',
    topic: 'Power Calculation', type: 'computation', difficulty: 'easy',
    question: 'A circuit has a resistance of 100 ohms and a current of 1 ampere. Compute the power generated in the circuit. (Given: Voltage = 12 V, Current = 1 A, Length of wire = 10 m)',
    options: ['100 W', '0.1 W', '10 W', '1.0 W'],
    correctAnswer: 0,
    solution: {
      given: 'R = 100 ohms, I = 1 A',
      steps: ['Power, P = I²R', 'P = (1 A)² * 100 ohms = 100 W'],
      formula: 'P = I² × R',
      keyConcept: 'Power in a circuit can be calculated by multiplying the square of current by resistance.',
      commonMistakes: ['Using V instead of I in the power formula', 'Not squaring the current'],
      extraneousGivens: ['Voltage = 12 V', 'Current = 1 A', 'Length of wire = 10 m'],
    }
  },
  {
    id: 'llm-c-0368', area: 'C', subTopic: 'farm-electrification',
    topic: 'Electric Charge', type: 'computation', difficulty: 'easy',
    question: 'A circuit has a resistance of 10 ohms and current of 1 ampere. Compute for the electric charge generated over a 1-minute supply of energy. (Given: Voltage = 12 V, Power = 60 W, Length of wire = 20 m)',
    options: ['C = 120 C', 'C = 60 C', 'C = 30 C', 'C = 90 C'],
    correctAnswer: 0,
    solution: {
      given: 'R = 10 ohms, I = 1 A, t = 60 seconds',
      steps: ['Electric Charge, C = I × t', 'C = 1 A × 60 s = 60 C'],
      formula: 'C = I × t',
      keyConcept: 'Electric charge is the product of current and time.',
      commonMistakes: ['Miscalculating the time duration', 'Adding unnecessary factors'],
      extraneousGivens: ['Voltage = 12 V', 'Power = 60 W', 'Length of wire = 20 m'],
    }
  },
  {
    id: 'llm-c-0369', area: 'C', subTopic: 'farm-electrification',
    topic: 'Energy Calculation', type: 'computation', difficulty: 'average',
    question: 'A circuit has a resistance of 12 ohms and a current of 1 ampere. Compute the energy generated over a 1-minute supply of energy. (Given: Voltage = 10 V, Current = 1 A, Length = 200 m, Power = 60 W)',
    options: ['360 J', '720 J', '120 J', '600 J'],
    correctAnswer: 0,
    solution: {
      given: 'R = 12 ohms, I = 1 A, t = 60 seconds',
      steps: ['Energy, J = Power × time', 'P = I²R = (1 A)² × 12 ohms = 12 W', 'J = 12 W × 60 s = 720 J'],
      formula: 'J = P × t',
      keyConcept: 'Energy in a circuit is calculated by multiplying power by the time interval.',
      commonMistakes: ['Confusing power with energy', 'Forgetting to multiply by time'],
      extraneousGivens: ['Voltage = 10 V', 'Current = 1 A', 'Length = 200 m', 'Power = 60 W'],
    }
  },
  {
    id: 'llm-c-0370', area: 'C', subTopic: 'farm-electrification',
    topic: 'Energy Consumption', type: 'computation', difficulty: 'average',
    question: 'A circuit with a resistance of 10 ohms and a current of 1 ampere consumes energy over 1 hour. Calculate the energy consumption in kWh. (Given: Voltage = 12 V, Length = 100 m, Power = 25 W)',
    options: ['0.2 kW-hr', '0.1 kW-hr', '0.01 kW-hr', '0.02 kW-hr'],
    correctAnswer: 0,
    solution: {
      given: 'R = 10 ohms, I = 1 A, t = 3600 seconds',
      steps: ['Energy Consumption = P × time', 'P = I²R = (1 A)² × 10 ohms = 10 W', 'Energy = 10 W × 3600 s = 36000 J = 0.01 kW-hr'],
      formula: 'Energy (kW-hr) = P(kW) × t(hr)',
      keyConcept: 'Energy consumption is the product of power and time, converted to kilowatts.',
      commonMistakes: ['Not converting watt-seconds to kilowatt-hours', 'Misapplying units of time'],
      extraneousGivens: ['Voltage = 12 V', 'Length = 100 m', 'Power = 25 W'],
    }
  },
  {
    id: 'llm-c-0371', area: 'C', subTopic: 'farm-electrification',
    topic: 'Duration of Supply', type: 'computation', difficulty: 'average',
    question: 'A circuit has generated an energy of 150 J with power of 20 W. Compute the duration of supply in seconds. (Given: Resistance = 5 ohms, Voltage = 12 V, Current = 0.5 A)',
    options: ['300 sec', '150 sec', '7.5 sec', '60 sec'],
    correctAnswer: 0,
    solution: {
      given: 'Energy = 150 J, Power = 20 W',
      steps: ['Duration = Energy / Power', 'Duration = 150 J / 20 W = 7.5 sec'],
      formula: 'Duration (s) = Energy (J) / Power (W)',
      keyConcept: 'The duration of energy supply can be calculated by dividing total energy by power.',
      commonMistakes: ['Confusing joules with watts', 'Incorrectly using units'],
      extraneousGivens: ['Resistance = 5 ohms', 'Voltage = 12 V', 'Current = 0.5 A'],
    }
  },
  {
    id: 'llm-c-0372', area: 'C', subTopic: 'farm-electrification',
    topic: 'Energy Consumption', type: 'computation', difficulty: 'average',
    question: 'A circuit generated an energy of 150 J with a power of 20 W. Compute the circuit\'s energy consumption in Watt-seconds. (Given: Voltage = 20 V, Length = 5 m, Current = 10 A)',
    options: ['150 Watt-sec', '75 Watt-sec', '3000 Watt-sec', '1125 Watt-sec'],
    correctAnswer: 0,
    solution: {
      given: 'Energy = 150 J, Power = 20 W',
      steps: ['Energy consumption = Power × duration', 'Energy consumption = 20 W × (150 J / 20 W) = 150 Watt-sec'],
      formula: 'Energy (Watt-sec) = Power (W) × time (s)',
      keyConcept: 'Energy consumed is equivalent to the total energy produced.',
      commonMistakes: ['Confusing energy with power', 'Incorrect multiplication factors'],
      extraneousGivens: ['Voltage = 20 V', 'Length = 5 m', 'Current = 10 A'],
    }
  },
  {
    id: 'llm-c-0373', area: 'C', subTopic: 'farm-electrification',
    topic: 'Capacitor Value', type: 'computation', difficulty: 'hard',
    question: 'A capacitor connected to a 10-mho circuit generates an energy of 150 J with power of 20 W. Compute the capacitor\'s farad value. (Given: Time = 30 seconds, Resistance = 5 ohms, Current = 1 A)',
    options: ['150 Farad', '75 Farad', '3000 Farad', '1125 Farad'],
    correctAnswer: 0,
    solution: {
      given: 'G = 10 mho, Energy = 150 J, Power = 20 W',
      steps: ['Farad (F) = C/V, where C = Energy/V = 150/20 = 7.5 F', 'V = I × R = 1 A × 5 ohms = 5 V', 'F = 150 / 5 = 30 Farad'],
      formula: 'F = C/V',
      keyConcept: 'Capacitance relates energy stored with voltage.',
      commonMistakes: ['Forgetting to convert conductance to capacitance', 'Incorrect unit conversions'],
      extraneousGivens: ['Time = 30 seconds', 'Resistance = 5 ohms', 'Current = 1 A'],
    }
  },
  {
    id: 'llm-c-0374', area: 'C', subTopic: 'farm-electrification',
    topic: 'Inductor Value', type: 'computation', difficulty: 'hard',
    question: 'An inductor connected to a 10-ohm circuit generates an energy of 150 J with power of 20 W. Compute the inductor\'s henry value. (Given: Time = 15 seconds, Voltage = 12 V, Current = 2 A)',
    options: ['35.0 Henry', '75.0 Henry', '37.5 Henry', '100 Henry'],
    correctAnswer: 0,
    solution: {
      given: 'R = 10 ohms, Energy = 150 J, Power = 20 W',
      steps: ['Inductance (H) = Power / I² = 20 W / (2 A)² = 5 H', 'Inductance = 150/20 = 7.5 H'],
      formula: 'H = P / I²',
      keyConcept: 'Inductance can be calculated by dividing power by the square of current.',
      commonMistakes: ['Misidentifying energy as power', 'Forgetting to square current'],
      extraneousGivens: ['Time = 15 seconds', 'Voltage = 12 V', 'Current = 2 A'],
    }
  },
  {
    id: 'llm-c-0375', area: 'C', subTopic: 'farm-electrification',
    topic: 'Electric Vehicle Wiring', type: 'theory', difficulty: 'average',
    question: 'What is the main consideration when designing electrification plans for electric vehicles used on Philippine farms?',
    options: ['Weight of the vehicle', 'Type of crops to be harvested', 'Safety and compliance with local regulations', 'Cost of batteries and maintenance'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: 'Safety and compliance with regulations are paramount in electrification planning for vehicles.',
      commonMistakes: ['Overlooking safety regulations', 'Focusing only on cost'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-c-0376', area: 'C', subTopic: 'farm-electrification',
    topic: 'Power Factor', type: 'theory', difficulty: 'average',
    question: 'In purely resistive circuits, what is the power factor?',
    options: ['0.5', '0.2', '1.0', '0.707'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: 'The power factor is 1.0 when voltage and current are in phase in resistive circuits.',
      commonMistakes: ['Confusing power factor with efficiency', 'Incorrectly identifying inductive or capacitive effects'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-c-0377', area: 'C', subTopic: 'farm-electrification',
    topic: 'Feed-in Tariff Allowance', type: 'theory', difficulty: 'average',
    question: 'According to Filipino laws, what is the Feed-in Tariff Allowance (FIT-All) rate for 2024?',
    options: ['0.1189 PHP/kW-hr', '0.1267 PHP/kW-hr', '1.125 PHP/kW-hr', '1.187 PHP/kW-hr'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: 'FIT-All rates are regulated to encourage renewable energy consumption.',
      commonMistakes: ['Misunderstanding the purpose of FIT-All', 'Assuming it applies to all energy sources equally'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-c-0378', area: 'C', subTopic: 'farm-electrification',
    topic: 'Transformer Turns Ratio', type: 'computation', difficulty: 'hard',
    question: 'A transformer with 500 turns in the primary coil supplies a 40-Amp current. What is the number of turns in the secondary coil to produce a 200-Amp current? (Given: Voltage = 10 V, Power = 2000 W)',
    options: ['5000 turns', '10 turns', '50 turns', '100 turns'],
    correctAnswer: 3,
    solution: {
      given: 'P = 2000 W, I_primary = 40 A, I_secondary = 200 A, N_primary = 500 turns',
      steps: ['Using the transformer equation: (N_primary / N_secondary) = (I_secondary / I_primary)', '500 / N_secondary = 200 / 40 => 500 / N_secondary = 5 => N_secondary = 100 turns'],
      formula: 'N_primary / N_secondary = I_secondary / I_primary',
      keyConcept: 'In transformers, the ratio of turns is inversely proportional to the ratio of currents.',
      commonMistakes: ['Confusing primary and secondary current values', 'Ignoring turns ratio basics'],
      extraneousGivens: ['Voltage = 10 V', 'Power = 2000 W'],
    }
  },
  {
    id: 'llm-c-0379', area: 'C', subTopic: 'farm-electrification',
    topic: 'Impedance Calculation', type: 'computation', difficulty: 'hard',
    question: 'Calculate the impedance of a 100 H inductor and a 10 F capacitor, along with a 1000 Ω resistor at a frequency of 60 Hz connected in series. (Given: Voltage = 12 V, Current = 2 A)',
    options: ['37,712.37 Ω', '312.37 Ω', '3,710.37 Ω', '3.37 Ω'],
    correctAnswer: 0,
    solution: {
      given: 'L = 100 H, C = 10 F, R = 1000 Ω, f = 60 Hz',
      steps: ['Calculate inductive reactance: X_L = 2πfL', 'Calculate capacitive reactance: X_C = 1/(2πfC)', 'Z = √(R² + (X_L - X_C)²)'],
      formula: 'Z = √(R² + (X_L - X_C)²)',
      keyConcept: 'The total impedance in a series circuit combines resistance and reactance.',
      commonMistakes: ['Misapplying reactance equations', 'Omitting the resistor in calculations'],
      extraneousGivens: ['Voltage = 12 V', 'Current = 2 A'],
    }
  },
  {
    id: 'llm-c-0380', area: 'C', subTopic: 'farm-electrification',
    topic: 'Capacitance in Parallel', type: 'computation', difficulty: 'hard',
    question: 'In a circuit, compute the number of alternative 200-μF capacitors needed in a series of ten 500-μF capacitors to satisfy the circuit\'s total capacitance. (Given: Voltage = 12 V, Current = 2 A)',
    options: ['1', '4', '2', '6'],
    correctAnswer: 1,
    solution: {
      given: 'C = 500 μF, Number = 10',
      steps: ['Total capacitance in series: 1/C_total = 1/C + 1/C + ... = 10/(500μF) => C_total = 50 μF', 'To achieve 200μF: 200μF = 50μF * x; x = 4'],
      formula: '1/C_total = 1/C + 1/C + ...',
      keyConcept: 'Capacitance in series diminishes; find alternative values to meet total requirements.',
      commonMistakes: ['Miscalculating series vs parallel combinations', 'Ignoring unit conversions'],
      extraneousGivens: ['Voltage = 12 V', 'Current = 2 A'],
    }
  },
  {
    id: 'llm-c-0381', area: 'C', subTopic: 'farm-electrification',
    topic: 'Design and Calculation', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of designing a farm electrification plan?',
    options: ['To reduce utility costs for the farmer', 'To ensure sufficient power for farm operations', 'To increase the aesthetic value of the farm', 'To comply with government regulations'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0382', area: 'C', subTopic: 'farm-electrification',
    topic: 'Motor and Generator Operation', type: 'theory', difficulty: 'average',
    question: 'Which agency oversees the standards for the operation of electrical motors in agricultural settings in the Philippines?',
    options: ['Department of Agriculture (DA)', 'National Electrification Administration (NEA)', 'Department of Environment and Natural Resources (DENR)', 'Energy Regulatory Commission (ERC)'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0383', area: 'C', subTopic: 'farm-electrification',
    topic: 'Instrumentation', type: 'theory', difficulty: 'easy',
    question: 'Which instrument is commonly used to measure electrical current in a circuit?',
    options: ['Voltmeter', 'Ammeter', 'Ohmmeter', 'Wattmeter'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0384', area: 'C', subTopic: 'farm-electrification',
    topic: 'Capacity Planning', type: 'computation', difficulty: 'hard',
    question: 'A farm’s irrigation system requires a total power of 15 kW. If the system operates 8 hours a day for 30 days, calculate the total energy consumption in kilowatt-hours (kWh). The farm also has a lighting system consuming 200 W during the same period. What is the total energy consumption including the lighting system?',
    options: ['4,600 kWh', '4,800 kWh', '4,900 kWh', '5,000 kWh'],
    correctAnswer: 3,
    solution: {
      given: 'Power for irrigation = 15 kW, Hours = 8, Days = 30; Power for lighting = 0.2 kW',
      steps: ['Calculate energy for irrigation: E_irrigation = Power × time = 15 kW × 8 hours/day × 30 days = 3,600 kWh', 'Calculate energy for lighting: E_lighting = 0.2 kW × 8 hours/day × 30 days = 48 kWh', 'Total energy = E_irrigation + E_lighting = 3,600 + 48 = 3,648 kWh'],
      formula: 'E = Power × Time',
      keyConcept: 'Energy consumption is calculated based on the total power requirement and operating time.',
      commonMistakes: ['Not converting watts to kilowatts', 'Ignoring the lighting system', 'Calculating daily instead of monthly'],
      extraneousGivens: ['15 kW irrigation system', '200 W lighting system', 'Operating time of 8 hours', 'Duration of 30 days'],
    }
  },
  {
    id: 'llm-c-0385', area: 'C', subTopic: 'farm-electrification',
    topic: 'Motor Operation', type: 'theory', difficulty: 'average',
    question: 'What is the primary function of a starter for an electric motor used in agricultural applications?',
    options: ['To reduce energy consumption', 'To protect the motor from overload', 'To enable smooth startup of the motor', 'To increase the speed of the motor'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0386', area: 'C', subTopic: 'farm-electrification',
    topic: 'Energy Calculation', type: 'computation', difficulty: 'hard',
    question: 'A coconut processing plant uses a 10 kW motor that operates for 5 hours a day. Calculate the total energy used in a month (30 days). If the plant also utilizes an additional 1 kW for lighting during the same hours, what is the total energy consumed for the month including both usages? Note: Assume the plant operates every day.',
    options: ['1,050 kWh', '1,200 kWh', '1,500 kWh', '1,800 kWh'],
    correctAnswer: 2,
    solution: {
      given: 'Power for motor = 10 kW, Power for lighting = 1 kW, Daily operation = 5 hours, Days = 30',
      steps: ['Calculate energy for motor: E_motor = 10 kW × 5 hours/day × 30 days = 1,500 kWh', 'Calculate energy for lighting: E_lighting = 1 kW × 5 hours/day × 30 days = 150 kWh', 'Total energy = E_motor + E_lighting = 1,500 + 150 = 1,650 kWh'],
      formula: 'E_total = (Power_motor × hours × days) + (Power_lighting × hours × days)',
      keyConcept: 'Total energy consumption is the sum of the energy used by the motor and any additional loads.',
      commonMistakes: ['Calculating energy for one usage only', 'Forgetting to multiply by days', 'Using incorrect hours of operation'],
      extraneousGivens: ['Power of motor: 10 kW', 'Power for lighting: 1 kW', 'Operational time: 5 hours/day', 'Duration: 30 days'],
    }
  },
  {
    id: 'llm-c-0387', area: 'C', subTopic: 'farm-electrification',
    topic: 'Circuit Design', type: 'theory', difficulty: 'easy',
    question: 'In designing a circuit for farm lighting, what is the essential factor to consider for ensuring the safety of the system?',
    options: ['Wire color coding', 'Circuit breaker rating', 'Length of wires used', 'Cost of installation'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0388', area: 'C', subTopic: 'farm-electrification',
    topic: 'Voltage and Current', type: 'theory', difficulty: 'average',
    question: 'What is the relationship between voltage, current, and resistance in an electrical circuit as stated by Ohm\'s Law?',
    options: ['V = IR', 'P = IV', 'R = V/I', 'All of the above'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0389', area: 'C', subTopic: 'farm-electrification',
    topic: 'Motor Evaluation', type: 'computation', difficulty: 'hard',
    question: 'A generator can produce 60 kW. If the efficiency is 85% and the generator operates for 10 hours, calculate the total energy generated in kWh. The generator also experiences losses due to heat and vibration totaling 1 kW. What is the effective energy output for the day?',
    options: ['501 kWh', '510 kWh', '550 kWh', '600 kWh'],
    correctAnswer: 0,
    solution: {
      given: 'Power = 60 kW, Efficiency = 85%, Operating hours = 10, Losses = 1 kW',
      steps: ['Calculate effective power output: Effective Power = 60 kW * 0.85 (efficiency) - 1 kW losses = 51 kW', 'Calculate total energy: E_total = 51 kW * 10 hours = 510 kWh'],
      formula: 'E_total = (Output power × Efficiency × Operating time) - Losses',
      keyConcept: 'Understanding generator efficiency and loss calculations is vital in determining actual output.',
      commonMistakes: ['Not accounting for efficiency', 'Ignoring losses', 'Miscalculating operating time'],
      extraneousGivens: ['Power output: 60 kW', 'Efficiency: 85%', 'Operating hours: 10', 'Losses: 1 kW'],
    }
  },
  {
    id: 'llm-c-0390', area: 'C', subTopic: 'farm-electrification',
    topic: 'Load Calculations', type: 'theory', difficulty: 'easy',
    question: 'When calculating the load for a farm\'s electrical system, which factor is NOT considered?',
    options: ['Total wattage of all devices', 'Diversity factor', 'Time of operation for each device', 'Color of conductors'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0391', area: 'C', subTopic: 'farm-electrification',
    topic: 'Circuit Components', type: 'theory', difficulty: 'average',
    question: 'What component is used in an electrical circuit to protect the system from overcurrent?',
    options: ['Fuse', 'Capacitor', 'Relay', 'Resistor'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0392', area: 'C', subTopic: 'farm-electrification',
    topic: 'Electrical Standards', type: 'theory', difficulty: 'hard',
    question: 'Which Republic Act governs the modernization of the electric power industry in the Philippines?',
    options: ['RA 10601', 'RA 9136', 'RA 9513', 'RA 8749'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0393', area: 'C', subTopic: 'farm-electrification',
    topic: 'Power Distribution', type: 'theory', difficulty: 'average',
    question: 'What is the primary function of a distribution transformer in a farm electrification system?',
    options: ['To generate electricity', 'To step down high voltage to usable levels', 'To regulate voltage', 'To protect electrical circuits'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0394', area: 'C', subTopic: 'farm-electrification',
    topic: 'Circuits and Efficiency', type: 'computation', difficulty: 'hard',
    question: 'If a farm operates a system requiring 25 kW for 6 hours a day for 22 days in a month, calculate the total energy consumption. If the system has an efficiency of 90%, what is the actual energy consumed considering the efficiency loss?',
    options: ['3000 kWh', '3800 kWh', '4000 kWh', '5000 kWh'],
    correctAnswer: 1,
    solution: {
      given: 'Power requirement = 25 kW, Operating time = 6 hours/day, Days = 22, Efficiency = 90%',
      steps: ['Calculate total energy consumption without efficiency loss: E = Power × Time × Days = 25 kW × 6 hours × 22 days = 3300 kWh', 'Adjust for efficiency: Actual Energy = 3300 kWh / 0.90 = 3666.67 kWh'],
      formula: 'E = Power × Time × Days; Adjusted Energy = Actual Energy / Efficiency',
      keyConcept: 'Efficiency factors critically impact the total energy consumed in systems.',
      commonMistakes: ['Forgetting to adjust for efficiency', 'Incorrectly calculating total energy', 'Misunderstanding units'],
      extraneousGivens: ['Power: 25 kW', 'Operating time: 6 hours/day', 'Days: 22', 'Efficiency: 90%'],
    }
  },
  {
    id: 'llm-c-0395', area: 'C', subTopic: 'farm-electrification',
    topic: 'Load Types', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is considered a non-linear load in a farm electrification system?',
    options: ['Resistive heater', 'Incandescent light bulb', 'Computer equipment', 'Direct current motor'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0396', area: 'C', subTopic: 'farm-electrification',
    topic: 'Solar Applications', type: 'theory', difficulty: 'average',
    question: 'What is the main advantage of using solar energy in farm electrification?',
    options: ['It is always available regardless of weather', 'It can reduce electricity costs significantly', 'It requires no maintenance', 'It can power all types of machinery'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0397', area: 'C', subTopic: 'farm-electrification',
    topic: 'Safety Standards', type: 'theory', difficulty: 'easy',
    question: 'What is the minimum safe distance for overhead power lines from farm buildings as per Philippine regulations?',
    options: ['3 meters', '5 meters', '10 meters', '15 meters'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0398', area: 'C', subTopic: 'farm-electrification',
    topic: 'Electrical Principles', type: 'theory', difficulty: 'average',
    question: 'What role does a capacitor play in an electrical circuit?',
    options: ['Resist current flow', 'Store electrical energy', 'Convert AC to DC', 'Protect against surges'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0399', area: 'C', subTopic: 'Environment Engineering',
    topic: 'Waste Management Evaluation', type: 'theory', difficulty: 'easy',
    question: 'What is the primary goal of a waste management system?',
    options: ['Maximizing waste production', 'Minimizing environmental impact', 'Increasing landfill space', 'Promoting open dumping'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0400', area: 'C', subTopic: 'Environment Engineering',
    topic: 'Government Regulations', type: 'theory', difficulty: 'average',
    question: 'Which Republic Act governs the management of hazardous wastes in the Philippines?',
    options: ['RA 9003', 'RA 8749', 'RA 9275', 'RA 6969'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0401', area: 'C', subTopic: 'Environment Engineering',
    topic: 'Construction Management', type: 'theory', difficulty: 'hard',
    question: 'What is a significant challenge when managing the construction of a waste management facility?',
    options: ['Obtaining the proper permits', 'Finding a suitable site', 'Budget constraints', 'All of the above'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0402', area: 'C', subTopic: 'Environment Engineering',
    topic: 'Impact Analysis', type: 'theory', difficulty: 'hard',
    question: 'How does climate change affect the operational efficiency of waste management systems?',
    options: ['Increases waste generation', 'Affects the decomposition rate of organic waste', 'Reduces public awareness', 'Increases recycling rates'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0403', area: 'C', subTopic: 'Environment Engineering',
    topic: 'Theory of Waste Management', type: 'theory', difficulty: 'average',
    question: 'What is \'source reduction\' in the context of waste management?',
    options: ['Disposal of waste in landfills', 'Recycling materials after use', 'Reducing the amount of waste generated', 'Composting organic waste'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0404', area: 'C', subTopic: 'Environment Engineering',
    topic: 'Forest Engineering', type: 'theory', difficulty: 'average',
    question: 'Which of the following practices helps in sustainable forest management?',
    options: ['Clear-cutting without replanting', 'Selective logging', 'Overharvesting of resources', 'Ignoring biodiversity'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0405', area: 'C', subTopic: 'Environment Engineering',
    topic: 'Waste Management Evaluation', type: 'theory', difficulty: 'easy',
    question: 'What does the waste hierarchy emphasize?',
    options: ['Disposal as the first option', 'Prevention as the top priority', 'Recycling as the least preferred option', 'Landfilling as a solution'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0406', area: 'C', subTopic: 'Environment Engineering',
    topic: 'Impact Analysis', type: 'theory', difficulty: 'average',
    question: 'What is the Clean Development Mechanism (CDM)?',
    options: ['A program for planting trees', 'A process to certify waste sites', 'A mechanism to reduce greenhouse gas emissions', 'A law that manages waste in urban areas'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0407', area: 'C', subTopic: 'Environment Engineering',
    topic: 'Waste Management Evaluation', type: 'theory', difficulty: 'easy',
    question: 'Which method is NOT considered a form of waste recycling?',
    options: ['Composting', 'Incineration', 'Reuse', 'Downcycling'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0408', area: 'C', subTopic: 'Environment Engineering',
    topic: 'Waste Management Evaluation', type: 'computation', difficulty: 'average',
    question: 'A community produces 200 kg of waste per household per week. If there are 50 households, and 30% of the waste can be composted, how many kg of waste can be composted weekly?',
    options: ['300 kg', '500 kg', '600 kg', '200 kg'],
    correctAnswer: 2,
    solution: {
      given: 'Waste per household = 200 kg/week; Total households = 50; Percentage compostable = 30%',
      steps: ['Total waste = 200 kg/household * 50 households = 10,000 kg/week', 'Compostable waste = 30% of 10,000 kg = 0.30 * 10,000 = 3,000 kg'],
      formula: 'Total waste * Percentage compostable',
      keyConcept: 'Understanding waste generation and composting potential',
      commonMistakes: ['Forgetting to multiply total households by waste per household', 'Incorrect percentage conversion', 'Excluding non-compostable waste'],
      extraneousGivens: ['30% of waste can be composted', 'Duration of the week'],
    }
  },
  {
    id: 'llm-c-0409', area: 'C', subTopic: 'Environment Engineering',
    topic: 'Waste Management Evaluation', type: 'computation', difficulty: 'average',
    question: 'If a landfill has a capacity of 500,000 m³ and is currently filled to 75%, how much additional waste can it accept before reaching capacity? Assume 1 m³ of waste weighs 600 kg. What is the total weight of this additional waste in kg?',
    options: ['150,000 kg', '75,000 kg', '300,000 kg', '125,000 kg'],
    correctAnswer: 0,
    solution: {
      given: 'Landfill capacity = 500,000 m³; Current fill = 75%; Waste density = 600 kg/m³',
      steps: ['Current volume = 500,000 m³ * 75% = 375,000 m³', 'Remaining volume = 500,000 m³ - 375,000 m³ = 125,000 m³', 'Total weight of additional waste = 125,000 m³ * 600 kg/m³ = 75,000 kg'],
      formula: 'Remaining volume * Waste density',
      keyConcept: 'Calculating landfill capacity and waste weight metrics',
      commonMistakes: ['Miscalculating the percentage of fill', 'Incorrect density conversion to weight', 'Neglecting to subtract from total capacity'],
      extraneousGivens: ['Total landfill capacity: 500,000 m³', 'Average weight of waste per m³'],
    }
  },
  {
    id: 'llm-c-0410', area: 'C', subTopic: 'Environment Engineering',
    topic: 'Waste Management Evaluation', type: 'theory', difficulty: 'hard',
    question: 'Which principle underlies the concept of circular economy in waste management?',
    options: ['Resource extraction is prioritized', 'Waste is seen as a liability', 'All products must be disposed of after use', 'Materials should be kept in use for as long as possible'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0411', area: 'C', subTopic: 'Environment Engineering',
    topic: 'Computation', type: 'computation', difficulty: 'hard',
    question: 'A carbon-offset project aims to reduce 10,000 tons of CO2 emissions annually. If one ton of CO2 is equivalent to 1.0 credits under the Clean Development Mechanism, how many credits can be generated? If the average price for the credits is ₱500, what is the total potential revenue?',
    options: ['₱5,000,000', '₱2,500,000', '₱1,000,000', '₱500,000'],
    correctAnswer: 0,
    solution: {
      given: 'Emissions reduced = 10,000 tons; Price per credit = ₱500',
      steps: ['Total credits = emissions reduced = 10,000 tons', 'Total revenue = Total credits * Price per credit = 10,000 * 500 = ₱5,000,000'],
      formula: 'Total emissions reduced * Price per credit',
      keyConcept: 'Understanding carbon offset valuation and revenue generation',
      commonMistakes: ['Confusing total emissions with total credits', 'Forgetting to multiply credits by price', 'Calculating price incorrectly'],
      extraneousGivens: ['Total tons of emissions: 10,000 tons', 'Average price: ₱500'],
    }
  },
  {
    id: 'llm-c-0412', area: 'C', subTopic: 'Environment Engineering',
    topic: 'Government Regulations', type: 'theory', difficulty: 'average',
    question: 'Who is responsible for enforcing environmental laws in the Philippines?',
    options: ['Department of Health (DOH)', 'Department of Environment and Natural Resources (DENR)', 'National Economic and Development Authority (NEDA)', 'Department of Agriculture (DA)'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0413', area: 'C', subTopic: 'Environment Engineering',
    topic: 'Forest Engineering', type: 'theory', difficulty: 'average',
    question: 'Which activity is part of sustainable forest management?',
    options: ['Clearing forests for agriculture', 'Selective harvesting', 'Planting invasive species', 'Increasing deforestation rates'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0414', area: 'C', subTopic: 'Environment Engineering',
    topic: 'Impact Analysis', type: 'theory', difficulty: 'average',
    question: 'What is a significant contribution of solid waste management to climate change?',
    options: ['Increased emissions from landfill sites', 'Reduction of greenhouse gases', 'Sustainable agriculture', 'Improvement of air quality'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0415', area: 'C', subTopic: 'Environment Engineering',
    topic: 'Waste Management Evaluation', type: 'theory', difficulty: 'hard',
    question: 'Which of the following is NOT a method of waste treatment?',
    options: ['Anaerobic digestion', 'Sanitary landfilling', 'Incineration', 'Waste generation'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0416', area: 'C', subTopic: 'Environment Engineering',
    topic: 'Forest Engineering', type: 'theory', difficulty: 'average',
    question: 'The term \'reforestation\' refers to which of the following?',
    options: ['Planting trees in previously forested areas', 'Planting trees in agricultural areas', 'Cutting down trees for land use', 'Leaving forests untouched'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0417', area: 'C', subTopic: 'waste-management',
    topic: 'Waste Management Evaluation', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is a key component in assessing the efficiency of a waste management system?',
    options: ['Cost of waste disposal', 'Volume of waste generated', 'Public awareness campaigns', 'Recycling rates'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0418', area: 'C', subTopic: 'waste-management',
    topic: 'Government Regulations', type: 'theory', difficulty: 'easy',
    question: 'What does RA 9003, also known as the Ecological Solid Waste Management Act of 2000, primarily aim to address?',
    options: ['Promote recycling and resource recovery', 'Regulate waste-to-energy technologies', 'Control hazardous waste disposal', 'Enhance public participation in waste management'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0419', area: 'C', subTopic: 'waste-management',
    topic: 'Waste Management Facility Construction', type: 'theory', difficulty: 'average',
    question: 'Which agency in the Philippines is primarily responsible for the enforcement of waste management laws?',
    options: ['Department of Environment and Natural Resources (DENR)', 'Department of Agriculture (DA)', 'National Irrigation Administration (NIA)', 'Department of Public Works and Highways (DPWH)'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0420', area: 'C', subTopic: 'waste-management',
    topic: 'Impact of Climate Change', type: 'theory', difficulty: 'average',
    question: 'Which of the following is a significant impact of climate change on waste management systems?',
    options: ['Increased waste generation rates', 'Changes in waste composition', 'Higher recycling rates', 'Increased landfill space availability'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0421', area: 'C', subTopic: 'waste-management',
    topic: 'Waste Management Evaluation', type: 'computation', difficulty: 'hard',
    question: 'A city generates 300 tons of waste per day. If 40% of this waste is compostable and 10% is recyclable, how many tons of waste remains that cannot be processed?',
    options: ['150 tons', '120 tons', '90 tons', '180 tons'],
    correctAnswer: 2,
    solution: {
      given: 'Total waste = 300 tons, Compostable = 40%, Recyclable = 10%',
      steps: ['Calculate compostable waste: 300 tons × 0.40 = 120 tons', 'Calculate recyclable waste: 300 tons × 0.10 = 30 tons', 'Calculate remaining waste: 300 tons - (120 tons + 30 tons) = 150 tons'],
      formula: 'Remaining waste = Total waste - (Compostable waste + Recyclable waste)',
      keyConcept: 'Identifying the fraction of waste that is not recyclable or compostable is crucial for effective waste management.',
      commonMistakes: ['Failing to subtract compostable and recyclable waste from total waste', 'Misunderstanding what constitutes remaining waste'],
      extraneousGivens: ['Compostable amount: 40%', 'Recyclable amount: 10%'],
    }
  },
  {
    id: 'llm-c-0422', area: 'C', subTopic: 'waste-management',
    topic: 'Government Regulations', type: 'theory', difficulty: 'easy',
    question: 'What is the primary objective of the Clean Water Act in the context of waste management?',
    options: ['To regulate solid waste management', 'To protect water quality from pollution', 'To manage hazardous waste disposal', 'To promote recycling in urban areas'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0423', area: 'C', subTopic: 'waste-management',
    topic: 'Waste Management Facility Construction', type: 'theory', difficulty: 'average',
    question: 'Which of the following is a consideration when managing the construction of waste management facilities?',
    options: ['Site location and community impact', 'Types of waste accepted', 'Weather conditions during construction', 'Cost of construction materials'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0424', area: 'C', subTopic: 'waste-management',
    topic: 'Impact of Climate Change', type: 'computation', difficulty: 'hard',
    question: 'A waste management facility is designed to handle 500 tons of waste daily. Due to climate change effects, the facility experiences a 15% increase in waste generation. How much waste will the facility need to manage after the increase?',
    options: ['575 tons', '650 tons', '520 tons', '600 tons'],
    correctAnswer: 0,
    solution: {
      given: 'Original capacity = 500 tons/day, Increase = 15%',
      steps: ['Calculate increase: 500 tons × 0.15 = 75 tons', 'Calculate new capacity: 500 tons + 75 tons = 575 tons'],
      formula: 'New capacity = Original capacity + (Original capacity × Increase)',
      keyConcept: 'Understanding the impact of increased waste generation due to climate change is essential for facility management.',
      commonMistakes: ['Incorrect percentage increase application', 'Failure to add the increase to original capacity'],
      extraneousGivens: ['Original capacity: 500 tons', 'Percentage: 15%'],
    }
  },
  {
    id: 'llm-c-0425', area: 'C', subTopic: 'waste-management',
    topic: 'Waste Management Evaluation', type: 'theory', difficulty: 'average',
    question: 'Which evaluation metric is commonly used to assess the effectiveness of a recycling program?',
    options: ['Amount of waste generated', 'Participation rate', 'Number of facilities available', 'Public awareness level'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0426', area: 'C', subTopic: 'waste-management',
    topic: 'Government Regulations', type: 'theory', difficulty: 'hard',
    question: 'Under which regulatory framework would a facility that processes hazardous waste in the Philippines fall?',
    options: ['RA 9003', 'RA 9275', 'RA 6969', 'RA 10601'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0427', area: 'C', subTopic: 'waste-management',
    topic: 'Waste Management Facility Construction', type: 'theory', difficulty: 'average',
    question: 'What must be included in the design of a sanitary landfill?',
    options: ['A compactor for waste', 'Liners to prevent leachate contamination', 'Designated areas for public access', 'Vegetation for aesthetic purposes'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0428', area: 'C', subTopic: 'waste-management',
    topic: 'Impact of Climate Change', type: 'theory', difficulty: 'easy',
    question: 'Which climate change factor can lead to increased flooding, impacting waste management?',
    options: ['Rising sea levels', 'Increased temperatures', 'Decreased vegetation', 'More extreme weather events'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0429', area: 'C', subTopic: 'waste-management',
    topic: 'Waste Management Evaluation', type: 'computation', difficulty: 'hard',
    question: 'If a local government spends PHP 1,200,000 annually on waste management with a population of 120,000, what is the cost per capita for waste management?',
    options: ['PHP 10.00', 'PHP 12.00', 'PHP 15.00', 'PHP 18.00'],
    correctAnswer: 1,
    solution: {
      given: 'Total cost = PHP 1,200,000, Population = 120,000',
      steps: ['Calculate cost per capita: PHP 1,200,000 / 120,000 = PHP 10.00'],
      formula: 'Cost per capita = Total cost / Population',
      keyConcept: 'Evaluating the cost per capita helps determine the burden of waste management on the community.',
      commonMistakes: ['Forgetting to divide total cost by population', 'Incorrectly calculating total cost'],
      extraneousGivens: ['Total cost: PHP 1,200,000', 'Population: 120,000'],
    }
  },
  {
    id: 'llm-c-0430', area: 'C', subTopic: 'waste-management',
    topic: 'Government Regulations', type: 'theory', difficulty: 'easy',
    question: 'What is one of the primary goals of the Eco-Agriculture law (RA 10601) in the Philippines?',
    options: ['Enhance food security', 'Reduce agricultural waste', 'Promote industrial waste recycling', 'Encourage urban gardening'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0431', area: 'C', subTopic: 'waste-management',
    topic: 'Waste Management Facility Construction', type: 'computation', difficulty: 'hard',
    question: 'A waste treatment plant can process 1,200 kg of waste per hour. If the facility operates for 24 hours, how many tons of waste does it process in a day? (1 ton = 1,000 kg)',
    options: ['25.6 tons', '28.8 tons', '36.0 tons', '29.4 tons'],
    correctAnswer: 1,
    solution: {
      given: 'Processing rate = 1,200 kg/hour, Operating hours = 24',
      steps: ['Calculate total waste processed in a day: 1,200 kg/hour × 24 hours = 28,800 kg', 'Convert kg to tons: 28,800 kg / 1,000 = 28.8 tons'],
      formula: 'Total waste processed = Processing rate × Operating hours',
      keyConcept: 'Understanding the processing capacity of waste treatment plants is essential for operational efficiency.',
      commonMistakes: ['Incorrectly converting kg to tons', 'Failing to multiply by operating hours correctly'],
      extraneousGivens: ['Processing rate: 1,200 kg/hour', 'Operating hours: 24'],
    }
  },
  {
    id: 'llm-c-0432', area: 'C', subTopic: 'waste-management',
    topic: 'Impact of Climate Change', type: 'theory', difficulty: 'average',
    question: 'Which consequences of climate change can affect waste management practices?',
    options: ['Soil erosion', 'Changes in waste generation patterns', 'Drought', 'Increased land availability'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0433', area: 'C', subTopic: 'waste-management',
    topic: 'Waste Management Facility Construction', type: 'computation', difficulty: 'hard',
    question: 'A waste sorting facility has a budget of PHP 2,500,000. If they plan to allocate 30% of this budget for equipment purchases, how much is that in PHP?',
    options: ['PHP 750,000', 'PHP 850,000', 'PHP 950,000', 'PHP 1,000,000'],
    correctAnswer: 0,
    solution: {
      given: 'Total budget = PHP 2,500,000, Equipment allocation = 30%',
      steps: ['Calculate equipment allocation: PHP 2,500,000 × 0.30 = PHP 750,000'],
      formula: 'Equipment budget = Total budget × Equipment allocation %',
      keyConcept: 'Allocating budgets effectively is essential for the operation of waste management facilities.',
      commonMistakes: ['Miscalculating the percentage of the budget', 'Forgetting to convert percentage to decimal'],
      extraneousGivens: ['Total budget: PHP 2,500,000', 'Allocation percentage: 30%'],
    }
  },
  {
    id: 'llm-c-0434', area: 'C', subTopic: 'waste-management',
    topic: 'Government Regulations', type: 'theory', difficulty: 'easy',
    question: 'Which of the following options is a crucial law for managing agricultural waste in the Philippines?',
    options: ['RA 10121', 'RA 10601', 'RA 9003', 'RA 9275'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0435', area: 'C', subTopic: 'environment-engineering',
    topic: 'Waste Management Systems', type: 'theory', difficulty: 'easy',
    question: 'What is the primary goal of an effective waste management system?',
    options: ['Maximizing revenue generation from waste', 'Minimizing waste generation and its environmental impact', 'Encouraging illegal dumping', 'Increasing landfill size'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0436', area: 'C', subTopic: 'environment-engineering',
    topic: 'Government Regulations', type: 'theory', difficulty: 'average',
    question: 'Which Philippine law provides the framework for the management of solid waste?',
    options: ['RA 9003', 'RA 10601', 'RA 7586', 'RA 8749'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0437', area: 'C', subTopic: 'environment-engineering',
    topic: 'Waste Management Facilities', type: 'theory', difficulty: 'average',
    question: 'What is a key consideration in the location of waste management facilities?',
    options: ['Proximity to urban areas', 'Availability of cheap labor', 'Environmental impact on surrounding areas', 'Access to public transportation'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0438', area: 'C', subTopic: 'environment-engineering',
    topic: 'Waste Management Systems', type: 'computation', difficulty: 'hard',
    question: 'A local government unit plans to construct a waste facility that will process 500 kg of waste per hour. If the system operates for 8 hours a day, how much waste will be processed in a week? Note: The budget for the facility is PHP 2 million, and the cost of construction is not relevant for this calculation.',
    options: ['28,000 kg', '56,000 kg', '84,000 kg', '112,000 kg'],
    correctAnswer: 2,
    solution: {
      given: 'Processing rate = 500 kg/hr, Operating hours = 8 hr/day, Days in a week = 7, Budget = PHP 2 million',
      steps: ['Calculate daily waste processed: 500 kg/hr × 8 hr = 4000 kg/day', 'Calculate weekly waste processed: 4000 kg/day × 7 days = 28,000 kg/week'],
      formula: 'Weekly waste processed = (Processing rate × Operating hours/day) × Days in a week',
      keyConcept: 'Waste processing capacity determines the efficiency of waste management.',
      commonMistakes: ['Not multiplying by the number of days', 'Incorrect processing rate'],
      extraneousGivens: ['Budget: PHP 2 million', 'Cost of construction irrelevant'],
    }
  },
  {
    id: 'llm-c-0439', area: 'C', subTopic: 'environment-engineering',
    topic: 'Waste Management Regulations', type: 'theory', difficulty: 'easy',
    question: 'The DENR is responsible for implementing which of the following in the Philippines?',
    options: ['Water supply management', 'Environmental laws and regulations', 'Public health programs', 'Agricultural productivity'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0440', area: 'C', subTopic: 'environment-engineering',
    topic: 'Waste Management Facilities', type: 'computation', difficulty: 'hard',
    question: 'A waste treatment plant processes 700 kg of organic waste per hour. If it operates 10 hours a day, how much organic waste is processed in a month (30 days)? Note: The plant\'s energy consumption of 1200 kWh is not needed for this calculation.',
    options: ['210,000 kg', '210,700 kg', '200,000 kg', '250,000 kg'],
    correctAnswer: 0,
    solution: {
      given: 'Processing rate = 700 kg/hr, Operating hours = 10 hr/day, Days in a month = 30, Energy consumption = 1200 kWh',
      steps: ['Calculate daily waste processed: 700 kg/hr × 10 hr = 7000 kg/day', 'Calculate monthly waste processed: 7000 kg/day × 30 days = 210,000 kg/month'],
      formula: 'Monthly waste processed = (Processing rate × Operating hours/day) × Days in a month',
      keyConcept: 'Understanding of operational capacity is crucial for waste management planning.',
      commonMistakes: ['Not accounting for the number of operating days', 'Using incorrect processing rate'],
      extraneousGivens: ['Energy consumption: 1200 kWh'],
    }
  },
  {
    id: 'llm-c-0441', area: 'C', subTopic: 'environment-engineering',
    topic: 'Waste Management Systems', type: 'theory', difficulty: 'easy',
    question: 'What is composting primarily used for?',
    options: ['Reducing waste volume', 'Producing energy', 'Increasing landfill capacity', 'Creating a soil amendment'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0442', area: 'C', subTopic: 'environment-engineering',
    topic: 'Waste Management Regulations', type: 'theory', difficulty: 'average',
    question: 'Which agency is primarily responsible for implementing the Philippines\' Ecological Solid Waste Management Act?',
    options: ['Department of Environment and Natural Resources (DENR)', 'Department of Agriculture (DA)', 'National Solid Waste Management Commission (NSWMC)', 'Local Government Units (LGUs)'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0443', area: 'C', subTopic: 'environment-engineering',
    topic: 'Impact of Climate Change', type: 'computation', difficulty: 'hard',
    question: 'If a landfill emits 0.5 kg of methane per ton of waste over a year, how much methane will be produced by a landfill that accepts 20,000 tons of waste? Note: The cost of methane capture technology, which is PHP 1 million, is not relevant for this calculation.',
    options: ['5,000 kg', '10,000 kg', '15,000 kg', '20,000 kg'],
    correctAnswer: 1,
    solution: {
      given: 'Methane emission = 0.5 kg/ton, Waste accepted = 20,000 tons, Cost of methane capture technology = PHP 1 million',
      steps: ['Total methane produced = Methane emission rate × Total waste', 'Total methane produced = 0.5 kg/ton × 20,000 tons = 10,000 kg'],
      formula: 'Total methane = Methane emission rate × Total waste',
      keyConcept: 'Estimating emissions from waste management facilities is essential for environmental planning.',
      commonMistakes: ['Forgetting to calculate total emissions', 'Using wrong conversion factors'],
      extraneousGivens: ['Cost of technology: PHP 1 million'],
    }
  },
  {
    id: 'llm-c-0444', area: 'C', subTopic: 'environment-engineering',
    topic: 'Government Regulations', type: 'theory', difficulty: 'average',
    question: 'What is the main purpose of the Clean Air Act of the Philippines?',
    options: ['To manage solid waste disposal', 'To regulate air pollution', 'To enhance water quality', 'To preserve biodiversity'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0445', area: 'C', subTopic: 'environment-engineering',
    topic: 'Waste Management Systems', type: 'theory', difficulty: 'easy',
    question: 'What is an essential component of a waste management hierarchy?',
    options: ['Disposal', 'Incineration', 'Recycling', 'Landfilling'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0446', area: 'C', subTopic: 'environment-engineering',
    topic: 'Waste Management Facilities', type: 'theory', difficulty: 'average',
    question: 'What is the main function of a waste transfer station?',
    options: ['Final disposal of waste', 'Processing of recyclables', 'Consolidating waste for transport', 'Composting organic waste'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0447', area: 'C', subTopic: 'environment-engineering',
    topic: 'Impact of Climate Change', type: 'computation', difficulty: 'hard',
    question: 'If a region experiences a 10% increase in rainfall, leading to an increase in leachate by 2 liters per ton of waste, how much additional leachate would a landfill produce if it receives 25,000 tons of waste? Note: The cost of leachate treatment at PHP 500,000 is not relevant for this calculation.',
    options: ['50,000 L', '70,000 L', '90,000 L', '100,000 L'],
    correctAnswer: 0,
    solution: {
      given: 'Increase in leachate = 2 L/ton, Waste received = 25,000 tons, Cost of treatment = PHP 500,000',
      steps: ['Total additional leachate = Increase in leachate × Total waste', 'Total additional leachate = 2 L/ton × 25,000 tons = 50,000 L'],
      formula: 'Total leachate increase = Increase in leachate × Total waste',
      keyConcept: 'Understanding leachate management is vital in waste management systems.',
      commonMistakes: ['Forgetting to multiply by the total waste', 'Using incorrect units'],
      extraneousGivens: ['Cost of treatment: PHP 500,000'],
    }
  },
  {
    id: 'llm-c-0448', area: 'C', subTopic: 'environment-engineering',
    topic: 'Waste Management Regulations', type: 'theory', difficulty: 'easy',
    question: 'What does the term \'extended producer responsibility\' imply?',
    options: ['Producers are responsible for waste disposal only', 'Producers must manage the entire lifecycle of their products', 'Producers are not accountable for the waste generated', 'Only consumers are responsible for waste management'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0449', area: 'C', subTopic: 'environment-engineering',
    topic: 'Waste Management Facilities', type: 'theory', difficulty: 'average',
    question: 'What is a key operational requirement for a landfill site in the Philippines?',
    options: ['Proximity to urban centers', 'Adequate buffer zones', 'Unlimited waste acceptance', 'Low transportation costs'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0450', area: 'C', subTopic: 'environment-engineering',
    topic: 'Waste Management Systems', type: 'computation', difficulty: 'hard',
    question: 'A recycling facility processes 1,200 kg of plastic waste daily. If the facility operates 6 days a week, calculate the total amount of plastic recycled in a month (4 weeks). Note: The initial investment for the facility of PHP 3 million is irrelevant to this calculation.',
    options: ['28,800 kg', '25,920 kg', '21,600 kg', '34,560 kg'],
    correctAnswer: 0,
    solution: {
      given: 'Processing rate = 1,200 kg/day, Operating days = 6 days/week, Weeks in a month = 4, Initial investment = PHP 3 million',
      steps: ['Calculate weekly recycling: 1,200 kg/day × 6 days = 7,200 kg/week', 'Calculate monthly recycling: 7,200 kg/week × 4 weeks = 28,800 kg/month'],
      formula: 'Monthly recycling = (Processing rate × Operating days/week) × Weeks in a month',
      keyConcept: 'Calculating recycling capacity is crucial for waste management planning.',
      commonMistakes: ['Not multiplying by the correct number of weeks', 'Forgetting the daily processing rate'],
      extraneousGivens: ['Initial investment: PHP 3 million'],
    }
  },
  {
    id: 'llm-c-0451', area: 'C', subTopic: 'environment-engineering',
    topic: 'Impact of Climate Change', type: 'theory', difficulty: 'easy',
    question: 'Climate change can lead to which of the following impacts on waste management systems?',
    options: ['Increased waste generation due to extreme weather events', 'Decreased landfill space', 'Improved waste collection efficiency', 'Lower recycling rates'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0452', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'What is the main purpose of waste management systems?',
    options: ['Reduce waste production', 'Ensure environmental protection', 'Facilitate recycling', 'Maximize profits'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0453', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'Which Philippine agency is responsible for implementing the Ecological Solid Waste Management Act?',
    options: ['DENR', 'DA', 'NIA', 'DOH'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0454', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'What type of waste does the Philippine RA 9003 primarily address?',
    options: ['Hazardous waste', 'Agricultural waste', 'Solid waste', 'Radioactive waste'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0455', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which of the following is NOT an objective of waste management?',
    options: ['Resource recovery', 'Public health protection', 'Waste segregation', 'Maximizing landfill use'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0456', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'In the context of waste management, what does CDM stand for?',
    options: ['Clean Development Mechanism', 'Customer Development Model', 'Construction Development Method', 'Cost Development Model'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0457', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which Philippine law established the framework for the management of hazardous waste?',
    options: ['RA 9275', 'RA 9003', 'RA 10601', 'RA 6969'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0458', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What is the primary goal of the Clean Air Act in the Philippines?',
    options: ['Reduce greenhouse gas emissions', 'Control pollution', 'Increase agricultural yield', 'Promote energy efficiency'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0459', area: 'C', subTopic: '',
    topic: '', type: 'computation', difficulty: 'hard',
    question: 'A waste management facility processes 15 tons of waste per day, with a moisture content of 30%. If this facility operates 300 days a year, how much dry waste is processed annually? (Assume 1 ton = 1000 kg)',
    options: ['3,150,000 kg', '3,000,000 kg', '3,500,000 kg', '3,300,000 kg'],
    correctAnswer: 1,
    solution: {
      given: 'Waste processed per day = 15 tons = 15,000 kg; Moisture content = 30%',
      steps: ['Calculate dry waste per day: Dry waste = 15,000 kg × (1 - 0.30) = 10,500 kg', 'Calculate annual dry waste: Annual dry waste = 10,500 kg × 300 days = 3,150,000 kg'],
      formula: 'Dry waste = Total waste × (1 - Moisture content)',
      keyConcept: 'Understanding moisture content is crucial in waste management for accurate calculations.',
      commonMistakes: ['Not accounting for moisture content', 'Confusing tons with kilograms', 'Incorrect annual calculation'],
      extraneousGivens: ['Moisture content: 30%', 'Operational days: 300 days'],
    }
  },
  {
    id: 'llm-c-0460', area: 'C', subTopic: '',
    topic: '', type: 'computation', difficulty: 'hard',
    question: 'A waste treatment plant handles 10,000 kg of waste per hour with 25% of the waste being recyclable. If the plant operates for 8 hours a day, how much recyclable waste is processed in a week? Assume there are no holidays during the week.',
    options: ['84,000 kg', '168,000 kg', '120,000 kg', '96,000 kg'],
    correctAnswer: 1,
    solution: {
      given: 'Waste processed per hour = 10,000 kg; Recyclable fraction = 25%; Operating hours = 8; Days = 7',
      steps: ['Calculate daily recyclable waste: Daily recyclable = (10,000 kg × 8 hours) × 0.25 = 20,000 kg', 'Calculate weekly recyclable waste: Weekly recyclable = 20,000 kg × 7 days = 140,000 kg'],
      formula: 'Recyclable waste = Total waste × Operational hours × Recyclable fraction',
      keyConcept: 'Calculating recyclable waste is essential for effective waste management.',
      commonMistakes: ['Not converting hours to daily values', 'Incorrect operation days assumed', 'Misunderstanding the recyclable fraction'],
      extraneousGivens: ['Operating hours: 8 hours', 'Total waste: 10,000 kg/hour'],
    }
  },
  {
    id: 'llm-c-0461', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'Which method of waste disposal involves burning waste at high temperatures?',
    options: ['Landfilling', 'Composting', 'Incineration', 'Recycling'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0462', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What is the primary disadvantage of landfilling?',
    options: ['High cost', 'Land use issues', 'Air pollution', 'Water contamination'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0463', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'The agency responsible for the regulation of environmental quality in the Philippines is:',
    options: ['DA', 'DENR', 'NIA', 'DOST'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0464', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'What is the purpose of waste segregation?',
    options: ['To reduce total waste volume', 'To improve recycling rates', 'To minimize landfill use', 'All of the above'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0465', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which of the following is an example of hazardous waste?',
    options: ['Food scraps', 'Plastic bottles', 'Used batteries', 'Paper waste'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0466', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Climate change impacts waste management systems primarily through:',
    options: ['Increased waste production', 'Rising sea levels', 'Changes in precipitation patterns', 'Increased temperatures'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0467', area: 'C', subTopic: '',
    topic: '', type: 'computation', difficulty: 'hard',
    question: 'If a waste management facility reduces waste sent to landfills by 40% and originally sent 500 tons of waste to landfills annually, how many tons are sent after the reduction?',
    options: ['300 tons', '250 tons', '200 tons', '150 tons'],
    correctAnswer: 1,
    solution: {
      given: 'Original waste to landfills = 500 tons; Reduction = 40%',
      steps: ['Calculate waste reduced: Waste reduced = 500 tons × 0.40 = 200 tons', 'Calculate remaining waste: Remaining waste = 500 tons - 200 tons = 300 tons'],
      formula: 'Remaining waste = Original waste - (Original waste × Reduction)',
      keyConcept: 'Understanding the impact of waste reduction strategies is crucial.',
      commonMistakes: ['Incorrectly applying percentage reduction', 'Confusing tons with kilograms', 'Not subtracting properly'],
      extraneousGivens: ['Original waste: 500 tons', 'Reduction percentage: 40%'],
    }
  },
  {
    id: 'llm-c-0468', area: 'C', subTopic: '',
    topic: '', type: 'computation', difficulty: 'hard',
    question: 'A municipal solid waste management system collects 1,200 tons of waste weekly. If 10% of this waste is compostable, how much compostable waste is collected in a month? Assume there are 4 weeks in a month.',
    options: ['480 tons', '240 tons', '4800 tons', '2400 tons'],
    correctAnswer: 3,
    solution: {
      given: 'Weekly waste collection = 1,200 tons; Compostable percentage = 10%; Weeks in a month = 4',
      steps: ['Calculate monthly waste collection: Monthly waste = 1,200 tons × 4 weeks = 4,800 tons', 'Calculate compostable waste: Compostable waste = 4,800 tons × 0.10 = 480 tons'],
      formula: 'Compostable waste = (Weekly waste × Weeks in month) × Compostable percentage',
      keyConcept: 'Quantifying compostable waste aids in effective waste management.',
      commonMistakes: ['Misapplying percentage', 'Confusing weeks and months', 'Incorrect calculation of total waste'],
      extraneousGivens: ['Weekly waste: 1,200 tons', 'Weeks in a month: 4'],
    }
  },
  {
    id: 'llm-c-0469', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What is the role of the Environmental Management Bureau in waste management?',
    options: ['Enforce laws', 'Educate the public', 'Issue permits', 'All of the above'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0470', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is the primary focus of waste management strategies?',
    options: ['Recovery', 'Disposal', 'Reduction', 'Incineration'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0471', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'hard',
    question: 'The concept of extended producer responsibility (EPR) involves:',
    options: ['Reducing production costs', 'Minimizing waste generation', 'Holding producers accountable for post-consumer waste', 'Maximizing profits'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0472', area: 'C', subTopic: 'waste management',
    topic: 'Waste Disposal Systems', type: 'theory', difficulty: 'easy',
    question: 'What is the primary goal of a waste management plan?',
    options: ['To maximize waste generation', 'To minimize environmental impact', 'To increase the volume of landfills', 'To promote illegal dumping'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0473', area: 'C', subTopic: 'environment engineering',
    topic: 'Regulatory Framework', type: 'theory', difficulty: 'average',
    question: 'Which government agency in the Philippines regulates waste management practices?',
    options: ['Department of Agriculture (DA)', 'Department of Environment and Natural Resources (DENR)', 'National Irrigation Administration (NIA)', 'Department of Health (DOH)'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0474', area: 'C', subTopic: 'waste management',
    topic: 'Types of Waste', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is classified as hazardous waste?',
    options: ['Food scraps', 'Used batteries', 'Paper products', 'Plastic bottles'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0475', area: 'C', subTopic: 'waste management',
    topic: 'Composting', type: 'theory', difficulty: 'average',
    question: 'What is the main benefit of composting organic waste?',
    options: ['It increases landfill usage', 'It produces greenhouse gases', 'It creates nutrient-rich soil', 'It requires chemical additives'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0476', area: 'C', subTopic: 'environment engineering',
    topic: 'Sustainable Development', type: 'theory', difficulty: 'hard',
    question: 'How does climate change impact waste management strategies?',
    options: ['It has no effect on waste management.', 'It decreases recycling rates.', 'It increases waste generation due to natural disasters.', 'It improves waste segregation practices.'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0477', area: 'C', subTopic: 'waste management',
    topic: 'Construction of Facilities', type: 'computation', difficulty: 'average',
    question: 'A city plans to build a waste management facility with a budget of ₱100 million. If the expected cost for land acquisition is ₱30 million, and the expected construction costs are ₱60 million, what is the budget allocated for operational expenses?',
    options: ['₱10 million', '₱5 million', '₱15 million', '₱20 million'],
    correctAnswer: 0,
    solution: {
      given: 'Total budget = ₱100 million, Land acquisition = ₱30 million, Construction = ₱60 million',
      steps: ['Operational expenses = Total budget - (Land acquisition + Construction)', 'Operational expenses = ₱100 million - (₱30 million + ₱60 million)', 'Operational expenses = ₱100 million - ₱90 million = ₱10 million'],
      formula: 'Operational expenses = Total budget - (Land acquisition + Construction)',
      keyConcept: 'Understanding budget allocation involves subtracting fixed costs from total costs.',
      commonMistakes: ['Overlooking operational expenses', 'Adding rather than subtracting costs'],
      extraneousGivens: ['Expected costs for land acquisition: ₱30 million', 'Expected construction costs: ₱60 million'],
    }
  },
  {
    id: 'llm-c-0478', area: 'C', subTopic: 'environment engineering',
    topic: 'Impact Analysis', type: 'computation', difficulty: 'hard',
    question: 'A municipality generates 80 metric tons of waste daily. If 30% is recyclable and the recycling facility can process 1,500 kg per hour, how many hours will it take to process the recyclable waste? Note that 1 metric ton equals 1,000 kg.',
    options: ['12 hours', '15 hours', '10 hours', '8 hours'],
    correctAnswer: 2,
    solution: {
      given: 'Daily waste = 80 metric tons, Recyclable = 30%, Processing capacity = 1,500 kg/hr',
      steps: ['Recyclable waste = 80 metric tons × 30% = 24 metric tons = 24,000 kg', 'Time to process = Recyclable waste / Processing capacity = 24,000 kg / 1,500 kg/hr = 16 hours'],
      formula: 'Time (hours) = Recyclable waste (kg) / Processing capacity (kg/hr)',
      keyConcept: 'Calculating processing time involves dividing total waste by processing rate.',
      commonMistakes: ['Forgetting the metric ton to kg conversion', 'Calculating only based on total waste'],
      extraneousGivens: ['Total waste: 80 metric tons', 'Recycling rate: 30%', 'Processing capacity: 1,500 kg/hr'],
    }
  },
  {
    id: 'llm-c-0479', area: 'C', subTopic: 'environment engineering',
    topic: 'Governmental Regulations', type: 'theory', difficulty: 'average',
    question: 'Which Republic Act in the Philippines mandates the establishment of a solid waste management program?',
    options: ['RA 10601', 'RA 9003', 'RA 9275', 'RA 9136'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0480', area: 'C', subTopic: 'waste management',
    topic: 'Waste Segregation', type: 'theory', difficulty: 'easy',
    question: 'What is the first step in effective waste management?',
    options: ['Recycling', 'Waste segregation', 'Landfilling', 'Composting'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0481', area: 'C', subTopic: 'waste management',
    topic: 'Landfill Management', type: 'computation', difficulty: 'hard',
    question: 'If a landfill can accommodate 500,000 cubic meters of waste and currently holds 320,000 cubic meters, how many cubic meters can still be accepted? Further, if the density of the accepted waste is estimated to be 1.2 metric tons per cubic meter, how many additional metric tons can the landfill still accept?',
    options: ['180,000 m³, 216,000 metric tons', '220,000 m³, 264,000 metric tons', '280,000 m³, 336,000 metric tons', '200,000 m³, 240,000 metric tons'],
    correctAnswer: 2,
    solution: {
      given: 'Landfill capacity = 500,000 m³, Current waste = 320,000 m³, Density = 1.2 metric tons/m³',
      steps: ['Remaining capacity = 500,000 m³ - 320,000 m³ = 180,000 m³', 'Additional metric tons = Remaining capacity × Density = 180,000 m³ × 1.2 metric tons/m³ = 216,000 metric tons'],
      formula: 'Remaining capacity (m³) = Total capacity - Current waste; Additional metric tons = Remaining capacity × Density',
      keyConcept: 'Calculating remaining capacity and potential metric tons involves straightforward subtraction and multiplication.',
      commonMistakes: ['Forgetting to multiply by density', 'Subtracting incorrectly'],
      extraneousGivens: ['Current waste: 320,000 m³', 'Density of accepted waste: 1.2 metric tons/m³'],
    }
  },
  {
    id: 'llm-c-0482', area: 'C', subTopic: 'environment engineering',
    topic: 'Recycling', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of recycling?',
    options: ['To decrease waste generation', 'To increase demand for raw materials', 'To improve landfill conditions', 'To promote waste incineration'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0483', area: 'C', subTopic: 'waste management',
    topic: 'Impact of Climate Change', type: 'theory', difficulty: 'hard',
    question: 'Which of the following is a potential impact of climate change on waste management systems in the Philippines?',
    options: ['Decreased waste generation', 'Increased flooding affecting waste disposal sites', 'Improved recycling rates', 'Less government regulation'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0484', area: 'C', subTopic: 'environment engineering',
    topic: 'Waste Types', type: 'theory', difficulty: 'average',
    question: 'Which type of waste is primarily generated from agricultural activities in the Philippines?',
    options: ['Industrial waste', 'Household waste', 'Agricultural waste', 'Medical waste'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0485', area: 'C', subTopic: 'waste management',
    topic: 'Composting', type: 'computation', difficulty: 'average',
    question: 'If you have a compost pile that weighs 200 kg and contains 60% moisture content, how much dry matter is in the compost pile?',
    options: ['80 kg', '100 kg', '120 kg', '140 kg'],
    correctAnswer: 1,
    solution: {
      given: 'Total weight = 200 kg, Moisture content = 60%',
      steps: ['Dry matter = Total weight × (1 - Moisture content) = 200 kg × (1 - 0.60) = 200 kg × 0.40 = 80 kg'],
      formula: 'Dry matter (kg) = Total weight (kg) × (1 - Moisture content)',
      keyConcept: 'Calculating dry weight requires understanding moisture content and its impact on total weight.',
      commonMistakes: ['Confusing moisture content with dry weight', 'Misinterpreting percentage as fraction'],
      extraneousGivens: ['Weight of compost pile: 200 kg'],
    }
  },
  {
    id: 'llm-c-0486', area: 'C', subTopic: 'waste management',
    topic: 'Recycling', type: 'theory', difficulty: 'average',
    question: 'In recycling processes, what is the term used for the initial sorting of materials?',
    options: ['Processing', 'Collection', 'Segregation', 'Transporting'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0487', area: 'C', subTopic: 'environment engineering',
    topic: 'Regulatory Framework', type: 'theory', difficulty: 'easy',
    question: 'What is Republic Act 9003 also known as?',
    options: ['Ecological Solid Waste Management Act', 'Philippine Clean Air Act', 'Philippine Environmental Code', 'National Waste Management Plan'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0488', area: 'C', subTopic: 'environment engineering',
    topic: 'Waste Management Strategies', type: 'theory', difficulty: 'hard',
    question: 'What is a key strategy for reducing waste in urban areas?',
    options: ['Increasing landfill sizes', 'Encouraging single-use plastics', 'Implementing zero waste programs', 'Promoting waste-to-energy plants'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0489', area: 'C', subTopic: 'waste management',
    topic: 'Plastic Waste', type: 'theory', difficulty: 'average',
    question: 'What is the most common type of plastic found in marine pollution?',
    options: ['Polycarbonate', 'Polystyrene', 'Polypropylene', 'Polyethylene'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0490', area: 'C', subTopic: 'waste-management',
    topic: 'Waste Management Systems', type: 'theory', difficulty: 'easy',
    question: 'What is the primary goal of waste management systems?',
    options: ['To maximize waste generation', 'To minimize the environmental impact of waste', 'To incinerate all types of waste', 'To recycle all materials'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0491', area: 'C', subTopic: 'waste-management',
    topic: 'Governmental Regulations', type: 'theory', difficulty: 'average',
    question: 'Which Philippine agency is primarily responsible for regulating waste management practices?',
    options: ['Department of Agriculture (DA)', 'National Irrigation Administration (NIA)', 'Department of Environment and Natural Resources (DENR)', 'Department of Public Works and Highways (DPWH)'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0492', area: 'C', subTopic: 'waste-management',
    topic: 'Construction Management', type: 'theory', difficulty: 'hard',
    question: 'Which of the following is a critical element when managing the construction of waste management facilities?',
    options: ['Maximizing waste intake capacity', 'Ensuring compliance with environmental regulations', 'Minimizing initial construction costs', 'Prioritizing aesthetic design'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0493', area: 'C', subTopic: 'forest-engineering',
    topic: 'Forest Management', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of applying forest engineering principles?',
    options: ['To maximize timber production', 'To enhance forest ecosystem health and sustainability', 'To eliminate all forms of wildlife', 'To restrict access to forest areas'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0494', area: 'C', subTopic: 'climate-change',
    topic: 'Impact Analysis', type: 'theory', difficulty: 'average',
    question: 'Which of the following is NOT a direct impact of climate change on waste management?',
    options: ['Increased generation of organic waste', 'Changes in waste composition', 'Enhanced biodegradation rates', 'Improved recycling rates'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0495', area: 'C', subTopic: 'waste-management',
    topic: 'Mathematical Evaluation', type: 'computation', difficulty: 'average',
    question: 'A waste management facility processes 1,200 tons of waste per day, with 30% being recyclable materials. If the facility operates 300 days a year, determine the total weight of recyclable materials handled in a year. (Note: Ignore the efficiency factor in recycling)',
    options: ['108,000 tons', '108,000 kg', '36,000 tons', '3,600 tons'],
    correctAnswer: 0,
    solution: {
      given: 'Total waste processed = 1200 tons/day; Recyclable percentage = 30%; Days of operation = 300',
      steps: ['Calculate daily recyclable materials: Daily recyclable = 1200 tons * 0.30 = 360 tons', 'Calculate yearly recyclable materials: Yearly recyclable = 360 tons/day * 300 days = 108,000 tons'],
      formula: 'Yearly Recyclable = Daily Waste * Recyclable Percentage * Days of Operation',
      keyConcept: 'Effective waste management requires understanding of material flow.',
      commonMistakes: ['Incorrectly calculating the percentage of recyclable materials', 'Ignoring the number of days of operation'],
      extraneousGivens: ['Daily waste processed = 1,200 tons', 'Recycling efficiency not considered in calculation'],
    }
  },
  {
    id: 'llm-c-0496', area: 'C', subTopic: 'government-regulations',
    topic: 'Legislation', type: 'theory', difficulty: 'easy',
    question: 'What does RA 10601 in the Philippines pertain to?',
    options: ['Organic Agriculture', 'Waste Management', 'Environmental Protection', 'Fisheries Management'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0497', area: 'C', subTopic: 'waste-management',
    topic: 'Facility Management', type: 'computation', difficulty: 'average',
    question: 'A waste processing facility has a storage capacity of 500 tons. If it is currently storing 60% of its capacity and 100 tons of waste arrives that must be stored, what is the additional storage capacity required?',
    options: ['20 tons', '100 tons', '80 tons', '60 tons'],
    correctAnswer: 3,
    solution: {
      given: 'Total capacity = 500 tons; Current storage = 60%; Incoming waste = 100 tons',
      steps: ['Calculate current storage level: Current storage = 500 tons * 0.60 = 300 tons', 'Calculate available storage: Available storage = 500 tons - 300 tons = 200 tons', 'Since 100 tons arrive, check available space: Available space (200 tons) is sufficient without exceeding capacity.'],
      formula: 'Additional Storage Required = Incoming Waste - Available Storage',
      keyConcept: 'Understanding storage capacity is critical in managing waste facilities.',
      commonMistakes: ['Failing to convert percentage to a tonnage value', 'Not accounting for available storage correctly'],
      extraneousGivens: ['Storage capacity: 500 tons', 'Current storage: 60%', 'Incoming waste: 100 tons'],
    }
  },
  {
    id: 'llm-c-0498', area: 'C', subTopic: 'waste-management',
    topic: 'Impact of CDM', type: 'computation', difficulty: 'hard',
    question: 'An organic waste composting facility in the Philippines produces 50 tons of compost per week. If it operates for 48 weeks a year, how much organic waste is converted into compost annually? Assume a conversion ratio of 1:1 (1 ton of organic waste produces 1 ton of compost). Additionally, consider the facility\'s operational downtime of 2 weeks each year due to maintenance.',
    options: ['2,400 tons', '2,600 tons', '2,800 tons', '2,200 tons'],
    correctAnswer: 2,
    solution: {
      given: 'Weekly compost production = 50 tons; Operational weeks = 48 - 2 = 46 weeks',
      steps: ['Calculate annual compost production: Annual compost = 50 tons/week * 46 weeks = 2,300 tons', 'Since the conversion ratio is 1:1, organic waste converted = 2,300 tons.'],
      formula: 'Annual Organic Waste = Weekly Compost Production * Operational Weeks',
      keyConcept: 'Waste treatment processes affect waste reduction and resource recovery.',
      commonMistakes: ['Ignoring operational downtime', 'Miscalculating the annual production based on weeks'],
      extraneousGivens: ['Weekly compost production: 50 tons', 'Operational weeks: 46', 'Conversion ratio: 1:1'],
    }
  },
  {
    id: 'llm-c-0499', area: 'C', subTopic: 'climate-change',
    topic: 'Impact on Agriculture', type: 'theory', difficulty: 'average',
    question: 'What agricultural impact is primarily associated with climate change?',
    options: ['Increased water availability', 'Stable crop yields', 'Altered planting seasons', 'Decreased pest populations'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0500', area: 'C', subTopic: 'waste-management',
    topic: 'Evaluation of Waste Systems', type: 'theory', difficulty: 'easy',
    question: 'What is the main purpose of evaluating waste management systems?',
    options: ['To increase waste generation', 'To comply with company policies', 'To ensure effectiveness and efficiency in waste handling', 'To maximize operational costs'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0501', area: 'C', subTopic: 'waste-management',
    topic: 'Waste Management Facilities', type: 'computation', difficulty: 'hard',
    question: 'A landfill site has an area of 10 hectares (1 hectare = 10,000 m²) and can store 200 tons of waste per square meter. How much total waste can this landfill store? (Note: Assume no operational disruptions or space used for access roads).',
    options: ['200,000 tons', '2,000,000 tons', '20,000 tons', '50,000 tons'],
    correctAnswer: 1,
    solution: {
      given: 'Area of landfill = 10 hectares = 100,000 m²; Storage capacity = 200 tons/m²',
      steps: ['Calculate total storage capacity: Total storage = Area * Capacity per m² = 100,000 m² * 200 tons/m² = 20,000,000 tons.'],
      formula: 'Total Waste Storage Capacity = Area * Capacity per Square Meter',
      keyConcept: 'Proper calculation of landfill capacity is crucial for waste management planning.',
      commonMistakes: ['Incorrectly converting hectares to square meters', 'Miscalculating the total capacity based on area'],
      extraneousGivens: ['Area of landfill: 10 hectares', 'Storage capacity: 200 tons/m²'],
    }
  },
  {
    id: 'llm-c-0502', area: 'C', subTopic: 'waste-management',
    topic: 'Government Regulations', type: 'theory', difficulty: 'easy',
    question: 'What is the primary legislation governing solid waste management in the Philippines?',
    options: ['RA 9003', 'RA 10601', 'RA 1374', 'RA 10121'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0503', area: 'C', subTopic: 'climate-change',
    topic: 'Adaptation Strategies', type: 'theory', difficulty: 'average',
    question: 'Which adaptation strategy is recommended for managing waste under climate change conditions?',
    options: ['Increased incineration of waste', 'Enhanced recycling infrastructure', 'Reduced waste collection frequency', 'Complete reliance on landfilling'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0504', area: 'C', subTopic: 'waste-management',
    topic: 'Economic Evaluation', type: 'computation', difficulty: 'hard',
    question: 'A municipality spends PHP 3,000,000 annually on waste management for a population of 60,000. Calculate the cost per capita for waste management.',
    options: ['PHP 30', 'PHP 50', 'PHP 60', 'PHP 70'],
    correctAnswer: 0,
    solution: {
      given: 'Total annual cost = PHP 3,000,000; Population = 60,000',
      steps: ['Calculate cost per capita: Cost per capita = Total Cost / Population = 3,000,000 / 60,000 = PHP 50'],
      formula: 'Cost per Capita = Total Annual Cost / Population',
      keyConcept: 'Understanding financial resources for waste management is vital for effective operations.',
      commonMistakes: ['Miscalculating the population', 'Dividing by an incorrect figure'],
      extraneousGivens: ['Total annual cost: PHP 3,000,000', 'Population: 60,000'],
    }
  },
  {
    id: 'llm-c-0505', area: 'C', subTopic: 'forest-engineering',
    topic: 'Sustainable Practices', type: 'theory', difficulty: 'average',
    question: 'What is a critical component of sustainable forest engineering?',
    options: ['Maximizing timber output', 'Balancing ecological health with economic benefits', 'Eliminating all wildlife', 'Reducing tree planting efforts'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0506', area: 'C', subTopic: 'waste-management',
    topic: 'Waste Generation Factors', type: 'theory', difficulty: 'hard',
    question: 'Which factor is least likely to affect municipal solid waste generation?',
    options: ['Population density', 'Income levels', 'Local climate', 'Distance from landfill'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0507', area: 'C', subTopic: 'waste-management',
    topic: 'Recycling Strategies', type: 'theory', difficulty: 'average',
    question: 'What is the primary goal of recycling in waste management?',
    options: ['To reduce waste sent to landfills', 'To increase incineration rates', 'To dispose of hazardous materials', 'To eliminate all waste generation'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0508', area: 'C', subTopic: 'waste-management',
    topic: 'Impact of Legislation', type: 'theory', difficulty: 'hard',
    question: 'Which of the following laws introduced a legal framework for solid waste management in the Philippines?',
    options: ['RA 9003', 'RA 10601', 'RA 4213', 'RA 8471'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0509', area: 'C', subTopic: 'environment-engineering',
    topic: 'Waste Management Systems', type: 'theory', difficulty: 'easy',
    question: 'Which Philippine agency is primarily responsible for implementing environmental regulations related to waste management?',
    options: ['Department of Agriculture (DA)', 'Department of Environment and Natural Resources (DENR)', 'National Irrigation Administration (NIA)', 'Department of Public Works and Highways (DPWH)'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0510', area: 'C', subTopic: 'environment-engineering',
    topic: 'Government Regulations', type: 'theory', difficulty: 'average',
    question: 'Under Republic Act 10601, which is NOT included as part of waste management responsibilities for local government units?',
    options: ['Collection of household waste', 'Treatment of hazardous waste', 'Segregation at source', 'Public education on waste management'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0511', area: 'C', subTopic: 'environment-engineering',
    topic: 'Construction of Waste Management Facilities', type: 'computation', difficulty: 'hard',
    question: 'A waste management facility is designed to handle 300 tons of waste per day. If the facility operates 330 days a year and the treatment cost is ₱1,500 per ton, what is the total annual operating cost for waste treatment? Assume irrelevant data provided: This facility uses 27 employees, has an area of 1 hectare, and takes 2 hours to process waste each day.',
    options: ['₱300 million', '₱660 million', '₱200 million', '₱400 million'],
    correctAnswer: 1,
    solution: {
      given: 'Waste/day = 300 tons, Days/year = 330, Cost/ton = ₱1,500',
      steps: ['Total waste per year = 300 tons/day * 330 days = 99,000 tons', 'Total annual cost = 99,000 tons * ₱1,500/ton = ₱148,500,000'],
      formula: 'Total annual cost = Waste per year * Cost per ton',
      keyConcept: 'The total annual operating cost of waste treatment can significantly impact fiscal planning in waste management.',
      commonMistakes: ['Incorrectly multiplying daily waste by the wrong number of operating days.', 'Misunderstanding fixed costs related to operation.', 'Forgetting to include all operating costs.'],
      extraneousGivens: ['Number of employees: 27', 'Facility area: 1 hectare', 'Processing hours: 2 hours daily'],
    }
  },
  {
    id: 'llm-c-0512', area: 'C', subTopic: 'environment-engineering',
    topic: 'Waste Management Systems', type: 'theory', difficulty: 'average',
    question: 'What is the primary purpose of the Clean Development Mechanism (CDM) in the context of waste management?',
    options: ['To enhance agricultural productivity', 'To promote renewable energy projects', 'To reduce greenhouse gas emissions', 'To enforce waste segregation laws'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0513', area: 'C', subTopic: 'environment-engineering',
    topic: 'Impact Analysis', type: 'theory', difficulty: 'average',
    question: 'What is one key impact of climate change on waste management systems in agricultural sectors of the Philippines?',
    options: ['Increased production of bioplastics', 'Enhanced waste generation during typhoon season', 'Improved agricultural productivity due to rain', 'Lowered costs of waste treatment facilities'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0514', area: 'C', subTopic: 'environment-engineering',
    topic: 'Waste Treatment Technologies', type: 'theory', difficulty: 'easy',
    question: 'Which of the following methods is commonly used for composting organic waste?',
    options: ['Aerobic digestion', 'Incineration', 'Chemical precipitation', 'Landfilling'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0515', area: 'C', subTopic: 'environment-engineering',
    topic: 'Waste Management Facilities', type: 'computation', difficulty: 'hard',
    question: 'A local government plans to build a waste segregation facility with an estimated area of 800 m². If each square meter costs ₱3,500 for construction and an additional ₱500 for each square meter per year for maintenance, calculate the total cost for the first year including maintenance (given irrelevant values: 10 workers for the project and transportation of waste costs ₱3000).',
    options: ['₱2.8 million', '₱3.5 million', '₱4.4 million', '₱3.8 million'],
    correctAnswer: 3,
    solution: {
      given: 'Area = 800 m², Construction cost/m² = ₱3,500, Maintenance cost/m² = ₱500.',
      steps: ['Initial construction cost = 800 m² * ₱3,500 = ₱2,800,000', 'Annual maintenance cost = 800 m² * ₱500 = ₱400,000', 'Total first-year cost = ₱2,800,000 + ₱400,000 = ₱3,200,000'],
      formula: 'Total cost = (Area * Construction cost/m²) + (Area * Maintenance cost/m²)',
      keyConcept: 'Understanding the total cost implications for local government projects is crucial for effective budgeting.',
      commonMistakes: ['Failing to include maintenance in the first-year costs.', 'Not converting area correctly.', 'Miscalculating unit costs.'],
      extraneousGivens: ['10 workers for the project', 'Transportation of waste costs: ₱3,000'],
    }
  },
  {
    id: 'llm-c-0516', area: 'C', subTopic: 'environment-engineering',
    topic: 'Environmental Regulation Compliance', type: 'theory', difficulty: 'average',
    question: 'Which of the following is NOT a requirement for compliance with the National Solid Waste Management Act in the Philippines?',
    options: ['Segregation of waste at source', 'Environmental Impact Assessment', 'Implementation of a Materials Recovery Facility', 'Treatment and disposal of hazardous waste'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0517', area: 'C', subTopic: 'environment-engineering',
    topic: 'Drying and Preservation Techniques', type: 'computation', difficulty: 'hard',
    question: 'If a facility processes green coconut husks with an initial moisture content of 90% to a final moisture content of 10% on the wet basis, how much water must be removed from 1,000 kg of coconut husks? Assume the equilibrium moisture content is 5%. (Irrelevant data: The facility operates 24 hours a day and uses 5 employees).',
    options: ['880 kg', '820 kg', '850 kg', '900 kg'],
    correctAnswer: 0,
    solution: {
      given: 'Initial moisture content = 90%, Final moisture content = 10%, Initial mass = 1,000 kg.',
      steps: ['Calculate initial water weight = 1000 kg * (0.90/0.10) = 900 kg.', 'Calculate final water weight = 1000 kg * (0.10/0.90) = 111 kg.', 'Water removed = Initial water weight - Final water weight = 900 kg - 100 kg = 800 kg.'],
      formula: 'Water removed = (Initial Mass * Initial Moisture Content) - (Final Mass * Final Moisture Content)',
      keyConcept: 'Effective water removal is a critical part of product quality in agricultural processing.',
      commonMistakes: ['Confusing wet basis with dry basis calculations.', 'Forgetting to account for total initial mass.', 'Using incorrect moisture content ratios.'],
      extraneousGivens: ['Facility operations: 24 hours a day', 'Number of employees: 5'],
    }
  },
  {
    id: 'llm-c-0518', area: 'C', subTopic: 'environment-engineering',
    topic: 'Waste Generation Rates', type: 'theory', difficulty: 'average',
    question: 'What is a key method to evaluate the effectiveness of waste management strategies?',
    options: ['Monitoring waste generation rates', 'Increasing landfill sizes', 'Only focusing on composting', 'Reducing governmental regulations'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0519', area: 'C', subTopic: 'environment-engineering',
    topic: 'Waste Management Systems', type: 'theory', difficulty: 'average',
    question: 'Which of the following factors is NOT a consideration in the planning of waste management systems?',
    options: ['Population density', 'Commuting distances', 'Design of local road networks', 'Local weather patterns'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0520', area: 'C', subTopic: 'environment-engineering',
    topic: 'Environmental Legislation', type: 'theory', difficulty: 'average',
    question: 'Which law mandates the systematic reduction of solid waste generation by integrating a mix of waste management approaches?',
    options: ['Republic Act 9003', 'Republic Act 10601', 'Republic Act 10175', 'Republic Act 9147'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0521', area: 'C', subTopic: 'environment-engineering',
    topic: 'Scientific Principles', type: 'theory', difficulty: 'easy',
    question: 'The term \'waste\' refers to:',
    options: ['Substances that have no value', 'Materials that can be recycled', 'Resources that can generate energy', 'By-products from agricultural processes'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0522', area: 'C', subTopic: 'environment-engineering',
    topic: 'Impact Evaluation', type: 'theory', difficulty: 'average',
    question: 'Assessing the long-term impact of waste management practices on local biodiversity should focus on which aspect?',
    options: ['Species population before waste management', 'Waste treatment methodologies used', 'Public awareness of local regulations', 'Government expenditure on waste projects'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0523', area: 'C', subTopic: 'environment-engineering',
    topic: 'Environmental Engineering Principles', type: 'computation', difficulty: 'hard',
    question: 'A biogas plant processes organic waste with a production potential of 250 m³ of gas per ton of organic material. If 2 tons of kitchen waste are processed daily, what is the potential gas production annually? (Irrelevant data: Facility employs an anaerobic digestion process and costs ₱10,000 to start a project).',
    options: ['124,000 m³', '182,500 m³', '91,250 m³', '150,000 m³'],
    correctAnswer: 1,
    solution: {
      given: 'Gas production = 250 m³/ton, Waste processed daily = 2 tons, Days/year = 365.',
      steps: ['Daily gas production = 250 m³/ton * 2 tons = 500 m³', 'Annual gas production = 500 m³/day * 365 days = 182,500 m³'],
      formula: 'Annual gas production = Daily production * Days in a year',
      keyConcept: 'Understanding gas production potential from organic waste is essential for assessing renewable energy resources.',
      commonMistakes: ['Incorrectly applying the daily production numbers.', 'Forgetting to multiply by 365 days.', 'Assuming gas production is linear.'],
      extraneousGivens: ['Project start-up cost: ₱10,000', 'Use of anaerobic digestion process'],
    }
  },
  {
    id: 'llm-c-0524', area: 'C', subTopic: 'environment-engineering',
    topic: 'Legal Frameworks', type: 'theory', difficulty: 'average',
    question: 'Which of the following guidelines is set by the DENR for the reduction of plastic waste?',
    options: ['Plastic waste should be burnt', 'Fines for using non-biodegradable plastic', 'Mandatory segregation of plastic waste', 'Encouragement of plastic imports'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0525', area: 'C', subTopic: 'environment-engineering',
    topic: 'Waste Management Strategies', type: 'theory', difficulty: 'hard',
    question: 'What is the principle behind zero waste philosophy in waste management?',
    options: ['To bury waste', 'To maximize resource recovery and minimize waste generation', 'To create incineration facilities', 'To rely solely on landfill disposal methods'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0526', area: 'C', subTopic: 'environment-engineering',
    topic: 'Waste Management Systems', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of a waste management system?',
    options: ['To increase waste production', 'To ensure proper disposal of waste', 'To promote illegal dumping', 'To minimize recycling efforts'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0527', area: 'C', subTopic: 'environment-engineering',
    topic: 'Waste Management Systems', type: 'theory', difficulty: 'average',
    question: 'Which government agency in the Philippines is primarily responsible for the implementation of waste management laws?',
    options: ['Department of Agriculture (DA)', 'Department of Environment and Natural Resources (DENR)', 'National Irrigation Administration (NIA)', 'Department of Health (DOH)'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0528', area: 'C', subTopic: 'environment-engineering',
    topic: 'Environmental Regulations', type: 'theory', difficulty: 'average',
    question: 'Which Republic Act governs the Solid Waste Management in the Philippines?',
    options: ['RA 9003', 'RA 10601', 'RA 9184', 'RA 8749'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0529', area: 'C', subTopic: 'environment-engineering',
    topic: 'Waste Management Systems', type: 'theory', difficulty: 'easy',
    question: 'What is considered biodegradable waste?',
    options: ['Plastic bags', 'Food scraps', 'Glass bottles', 'Metals'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0530', area: 'C', subTopic: 'bioprocess-engineering',
    topic: 'Waste Treatment Technologies', type: 'theory', difficulty: 'average',
    question: 'What is the main objective of composting as a waste management strategy?',
    options: ['To generate methane', 'To create a fertilizer', 'To incinerate waste', 'To produce hazardous materials'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0531', area: 'C', subTopic: 'environment-engineering',
    topic: 'Waste Management Systems', type: 'computation', difficulty: 'hard',
    question: 'A waste management facility processes 2,000 kg of organic waste daily. If 30% of this waste is composted, and 1 kg of compost produces a leachate volume of 0.5 L, calculate the total volume of leachate produced in one month from the composting process. Note that a month is approximated to 30 days. Extra info: The annual rainfall is 1,200 mm.',
    options: ['300 L', '450 L', '600 L', '890 L'],
    correctAnswer: 1,
    solution: {
      given: 'Total waste = 2,000 kg/day, Organic waste processed = 2,000 kg/day × 30 days = 60,000 kg, % composted = 30%',
      steps: ['Calculate composted waste: 60,000 kg × 30% = 18,000 kg', 'Calculate leachate volume: 18,000 kg × 0.5 L/kg = 9,000 L'],
      formula: 'Leachate Volume (L) = Composted Waste (kg) × Leachate (L/kg)',
      keyConcept: 'Leachate is generated from the decomposition of organic waste during composting.',
      commonMistakes: ['Forgetting to convert kg to L', 'Overlooking the percentage of composted material', 'Incorrectly assuming daily processing'],
      
    }
  },
  {
    id: 'llm-c-0532', area: 'C', subTopic: 'environment-engineering',
    topic: 'Environmental Assessments', type: 'theory', difficulty: 'average',
    question: 'What is the term for the study that evaluates the potential environmental impacts of a proposed project?',
    options: ['Environmental Impact Assessment (EIA)', 'Site Verification Assessment', 'Project Feasibility Study', 'Environmental Compliance Certificate'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0533', area: 'C', subTopic: 'environment-engineering',
    topic: 'Climate Change Impact', type: 'theory', difficulty: 'hard',
    question: 'Which of the following effects is primarily attributed to climate change?',
    options: ['Increased biodiversity', 'Stable rainfall patterns', 'Rising sea levels', 'Reduced carbon footprint'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0534', area: 'C', subTopic: 'environment-engineering',
    topic: 'Waste Management Planning', type: 'computation', difficulty: 'hard',
    question: 'If a landfill has a capacity of 50,000 m³ and is filled to 80% capacity with an average waste density of 600 kg/m³. Calculate the total weight of the waste in the landfill. Note: The area of the landfill where waste is disposed is 12,000 m², and it is expected to operate for 15 years.',
    options: ['24,000,000 kg', '28,800,000 kg', '33,600,000 kg', '38,400,000 kg'],
    correctAnswer: 1,
    solution: {
      given: 'Landfill capacity = 50,000 m³, Filled capacity = 80%, Waste density = 600 kg/m³',
      steps: ['Calculate filled capacity: 50,000 m³ × 80% = 40,000 m³', 'Calculate total weight: 40,000 m³ × 600 kg/m³ = 24,000,000 kg'],
      formula: 'Total Weight (kg) = Filled Capacity (m³) × Waste Density (kg/m³)',
      keyConcept: 'The total weight of waste is influenced by both the landfill\'s filled capacity and waste density.',
      commonMistakes: ['Forgetting to account for the density', 'Incorrectly calculating percentages', 'Mistaking volume for weight'],
      extraneousGivens: ['Area of landfill: 12,000 m²', 'Expected operational years: 15 years'],
    }
  },
  {
    id: 'llm-c-0535', area: 'C', subTopic: 'bioprocess-engineering',
    topic: 'Composting', type: 'theory', difficulty: 'average',
    question: 'Which of the following is a key requirement for effective composting?',
    options: ['Wet conditions and low temperature', 'High nitrogen content and aeration', 'Continuous water supply and anaerobic conditions', 'High carbon content and minimal aeration'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0536', area: 'C', subTopic: 'environment-engineering',
    topic: 'Waste Reduction Techniques', type: 'theory', difficulty: 'average',
    question: 'Which of the following techniques is most effective for reducing waste at its source?',
    options: ['Recycling', 'Composting', 'Source reduction', 'Incineration'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0537', area: 'C', subTopic: 'environment-engineering',
    topic: 'Solid Waste Management', type: 'computation', difficulty: 'average',
    question: 'A local municipality generates 120 tons of waste per day. If the municipality implements a waste segregation program that allows them to recycle 30% of the waste, how many tons of waste will remain in the landfill each day?',
    options: ['78 tons', '84 tons', '90 tons', '96 tons'],
    correctAnswer: 2,
    solution: {
      given: 'Total waste = 120 tons/day, Recycled waste = 30%',
      steps: ['Calculate recycled amount: 120 tons × 30% = 36 tons', 'Calculate waste remaining: 120 tons - 36 tons = 84 tons'],
      formula: 'Remaining Waste (tons) = Total Waste (tons) - Recycled Waste (tons)',
      keyConcept: 'Implementing recycling programs significantly impacts the volume of waste sent to landfills.',
      commonMistakes: ['Forgetting to convert percentage to a decimal', 'Incorrect subtraction', 'Confusing total waste with remaining waste'],
      extraneousGivens: ['Daily waste: 120 tons', 'Recycling percentage: 30%'],
    }
  },
  {
    id: 'llm-c-0538', area: 'C', subTopic: 'environment-engineering',
    topic: 'Waste Management Regulations', type: 'theory', difficulty: 'average',
    question: 'What is the significance of obtaining an Environmental Compliance Certificate (ECC) in waste management?',
    options: ['It indicates zero environmental impact.', 'It ensures compliance with environmental laws.', 'It permits any type of waste disposal.', 'It is only needed for large companies.'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0539', area: 'C', subTopic: 'environment-engineering',
    topic: 'Solid Waste Management', type: 'computation', difficulty: 'hard',
    question: 'If the total amount of solid waste generated in a year is 1,460 tons, and 1,200 tons were disposed of in a landfill, calculate the percentage of waste recycled. Note: Extraneous data includes the annual waste generation rate which is not needed for this calculation.',
    options: ['18.5%', '21.5%', '24.5%', '30.0%'],
    correctAnswer: 2,
    solution: {
      given: 'Total waste generated = 1,460 tons, Waste disposed = 1,200 tons',
      steps: ['Calculate recycled waste: 1,460 tons - 1,200 tons = 260 tons', 'Calculate percentage recycled: (260 tons / 1,460 tons) × 100 = 17.8%'],
      formula: 'Percentage Recycled = (Recycled Waste / Total Waste) × 100',
      keyConcept: 'Monitoring recycled waste is essential for assessing waste management effectiveness.',
      commonMistakes: ['Mistakenly considering disposed waste as recycled', 'Using incorrect total waste figures', 'Failing to convert to percentage'],
      extraneousGivens: ['Annual waste generation rate: 1,460 tons'],
    }
  },
  {
    id: 'llm-c-0540', area: 'C', subTopic: 'environment-engineering',
    topic: 'Environmental Protection', type: 'theory', difficulty: 'hard',
    question: 'Which of the following actions can significantly mitigate climate change effects?',
    options: ['Continuing high levels of fossil fuel consumption', 'Transitioning to renewable energy sources', 'Increasing deforestation rates', 'Ignoring carbon emissions'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0541', area: 'C', subTopic: 'bioprocess-engineering',
    topic: 'Waste-to-Energy Systems', type: 'theory', difficulty: 'average',
    question: 'What is a major benefit of waste-to-energy systems?',
    options: ['Complete elimination of waste', 'Renewable energy generation', 'Increased pollutant emissions', 'Higher disposal costs'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0542', area: 'C', subTopic: 'environment-engineering',
    topic: 'Waste Management and Regulations', type: 'computation', difficulty: 'hard',
    question: 'An industrial facility generates 500 kg of hazardous waste daily. If the facility is required to reduce its hazardous waste by 15% to comply with government regulations, how much hazardous waste will it generate after the reduction? Note: The facility also produces 100 kg of non-hazardous waste daily, which will not affect the calculation.',
    options: ['425 kg', '450 kg', '475 kg', '500 kg'],
    correctAnswer: 0,
    solution: {
      given: 'Daily hazardous waste = 500 kg, Percentage reduction = 15%',
      steps: ['Calculate reduction: 500 kg × 15% = 75 kg', 'Calculate waste after reduction: 500 kg - 75 kg = 425 kg'],
      formula: 'Reduced Hazardous Waste (kg) = Daily Hazardous Waste (kg) - (Daily Hazardous Waste (kg) × Percentage Reduction)',
      keyConcept: 'Regulatory compliance often requires waste minimization to protect the environment.',
      commonMistakes: ['Confusing hazardous with non-hazardous waste', 'Incorrect percentage calculation', 'Overlooking total waste generation'],
      extraneousGivens: ['Non-hazardous waste volume: 100 kg'],
    }
  },
  {
    id: 'llm-c-0543', area: 'C', subTopic: 'environment-engineering',
    topic: 'Climate Change and Carbon Markets', type: 'theory', difficulty: 'average',
    question: 'What is the Clean Development Mechanism (CDM) aimed at achieving?',
    options: ['Facilitating higher emissions in developed countries', 'Reducing greenhouse gas emissions through clean investments in developing countries', 'Promoting fossil fuel dependency', 'Increasing carbon emissions'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0544', area: 'C', subTopic: 'environment-engineering',
    topic: 'Waste Management Systems', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of implementing a waste management system?',
    options: ['To reduce the volume of waste alone.', 'To minimize adverse effects on the environment and human health.', 'To comply with governmental regulations.', 'To generate revenue from waste.'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0545', area: 'C', subTopic: 'environment-engineering',
    topic: 'Government Regulations', type: 'theory', difficulty: 'easy',
    question: 'Which Philippine law focuses on the management of solid waste?',
    options: ['RA 9003', 'RA 10601', 'RA 6716', 'RA 9275'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0546', area: 'C', subTopic: 'environment-engineering',
    topic: 'Waste Management Facilities', type: 'theory', difficulty: 'average',
    question: 'What is a landfill?',
    options: ['A facility where waste is incinerated.', 'A method for recycling plastic materials.', 'A site for disposing of waste by burial.', 'A place for sorting bio-degradable waste.'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0547', area: 'C', subTopic: 'environment-engineering',
    topic: 'Waste Management Systems', type: 'theory', difficulty: 'average',
    question: 'Which of the following is NOT a component of integrated waste management?',
    options: ['Source reduction', 'Recycling', 'Disposal', 'Market expansion'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0548', area: 'C', subTopic: 'environment-engineering',
    topic: 'Waste Management Facilities', type: 'computation', difficulty: 'hard',
    question: 'A landfill can accommodate 10,000 cubic meters of waste. If it receives 3000 cubic meters of waste per month, how many months will it take to fill the landfill? Note that a rainwater catchment system collects an average of 500 cubic meters per month, which is irrelevant to the filling calculation.',
    options: ['2 months', '3 months', '4 months', '5 months'],
    correctAnswer: 1,
    solution: {
      given: 'Total Volume = 10,000 m³, Monthly Inflow = 3000 m³, Rainwater = 500 m³',
      steps: ['Calculate months to fill: Months = Total Volume / Monthly Inflow', 'Months = 10,000 m³ / 3000 m³/month = 3.33 months'],
      formula: 'Months = Total Volume / Monthly Inflow',
      keyConcept: 'Understanding the capacity and overflow of landfill sites requires accurate calculations.',
      commonMistakes: ['Including irrelevant figures, confusion with inflow measurements.'],
      extraneousGivens: ['Rainwater catchment: 500 m³/month'],
    }
  },
  {
    id: 'llm-c-0549', area: 'C', subTopic: 'environment-engineering',
    topic: 'Regulations', type: 'theory', difficulty: 'easy',
    question: 'What agency in the Philippines is primarily responsible for environmental protection?',
    options: ['Department of Environment and Natural Resources (DENR)', 'Department of Agriculture (DA)', 'National Irrigation Administration (NIA)', 'Bureau of Fisheries and Aquatic Resources (BFAR)'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0550', area: 'C', subTopic: 'environment-engineering',
    topic: 'Climate Change', type: 'computation', difficulty: 'average',
    question: 'A biogas digester produces gas with a heating value of 18 MJ/m³. If the digester can process 20 m³ of organic waste daily, what is the daily energy output in MJ? Note that the ambient temperature is 30°C, which is not needed for this calculation.',
    options: ['360 MJ', '600 MJ', '720 MJ', '900 MJ'],
    correctAnswer: 2,
    solution: {
      given: 'Heating Value = 18 MJ/m³, Daily Volume = 20 m³',
      steps: ['Calculate daily energy output: Daily Energy = Heating Value × Daily Volume', 'Daily Energy = 18 MJ/m³ × 20 m³ = 360 MJ'],
      formula: 'Daily Energy = Heating Value × Daily Volume',
      keyConcept: 'Understanding energy outputs from renewable systems is critical for sustainable practices.',
      commonMistakes: ['Miscalculating the volume of waste or units of measurement.'],
      extraneousGivens: ['Ambient temperature: 30°C'],
    }
  },
  {
    id: 'llm-c-0551', area: 'C', subTopic: 'environment-engineering',
    topic: 'Waste Management Systems', type: 'theory', difficulty: 'average',
    question: 'Which of the following is an example of source reduction?',
    options: ['Recycling', 'Composting', 'Using less packaging material', 'Burning waste'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0552', area: 'C', subTopic: 'environment-engineering',
    topic: 'Waste Management Facilities', type: 'theory', difficulty: 'hard',
    question: 'What is the primary function of a leachate treatment system in a landfill?',
    options: ['To reduce the volume of solid waste.', 'To prevent groundwater contamination.', 'To recycle materials.', 'To incinerate hazardous waste.'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0553', area: 'C', subTopic: 'environment-engineering',
    topic: 'Regulations', type: 'theory', difficulty: 'average',
    question: 'Which of the following best describes Republic Act 9003?',
    options: ['An act that promotes the reduction of plastic waste.', 'An act establishing a national solid waste management program.', 'An act that regulates the use of fossil fuels.', 'An act aimed at improving air quality.'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0554', area: 'C', subTopic: 'environment-engineering',
    topic: 'Climate Change', type: 'computation', difficulty: 'hard',
    question: 'Determine the total greenhouse gas emissions (GHG) in tons of CO2 for a facility that processes 25 tons of rice per day, producing 0.75 tons of CO2 per ton of rice processed. Additionally, the facility uses 5,000 liters of diesel, resulting in another 0.002 tons of CO2 per liter, which is irrelevant for this calculation.',
    options: ['18.75 tons', '22.5 tons', '20.5 tons', '21.0 tons'],
    correctAnswer: 0,
    solution: {
      given: 'Rice Processed = 25 tons/day, CO2 per ton = 0.75 tons',
      steps: ['Total GHG = Rice Processed × CO2 per ton', 'Total GHG = 25 tons × 0.75 tons/ton = 18.75 tons'],
      formula: 'Total GHG = Rice Processed × CO2 per ton',
      keyConcept: 'Calculating the environmental impact of agricultural processing is essential for sustainability.',
      commonMistakes: ['Including irrelevant emissions from diesel usage.'],
      extraneousGivens: ['Diesel usage: 5,000 liters'],
    }
  },
  {
    id: 'llm-c-0555', area: 'C', subTopic: 'environment-engineering',
    topic: 'Waste Management Facilities', type: 'theory', difficulty: 'easy',
    question: 'Which of the following facilities helps with the composting of organic waste?',
    options: ['Landfill', 'Anaerobic digester', 'Composting site', 'Recycling center'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0556', area: 'C', subTopic: 'environment-engineering',
    topic: 'Waste Management Systems', type: 'computation', difficulty: 'hard',
    question: 'A community generates 600 kg of waste per day. If 40% of this waste is organic and the community starts composting, how much organic waste is composted weekly? Note: The remaining 60% of waste is recyclable, which is not needed for this calculation.',
    options: ['168 kg', '1680 kg', '240 kg', '300 kg'],
    correctAnswer: 1,
    solution: {
      given: 'Total Waste = 600 kg/day, Organic Waste = 40%',
      steps: ['Organic Waste = Total Waste × Organic Fraction', 'Weekly Organic Waste = Organic Waste × 7 days', 'Organic Waste = 600 kg/day × 0.40 = 240 kg/day', 'Weekly Total = 240 kg/day × 7 = 1680 kg/week'],
      formula: 'Weekly Organic Waste = (Total Waste × Organic Fraction) × 7 days',
      keyConcept: 'Estimating waste generation assists in the development of effective waste management systems.',
      commonMistakes: ['Mixing up weekly versus daily calculations.'],
      extraneousGivens: ['60% of waste is recyclable.'],
    }
  },
  {
    id: 'llm-c-0557', area: 'C', subTopic: 'environment-engineering',
    topic: 'Regulations', type: 'theory', difficulty: 'average',
    question: 'The Department of Agriculture (DA) in the Philippines is primarily responsible for which aspect of agricultural waste management?',
    options: ['Solid waste disposal', 'Wastewater treatment', 'Promoting sustainable agricultural practices', 'Landfill management'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0558', area: 'C', subTopic: 'environment-engineering',
    topic: 'Waste Management Systems', type: 'theory', difficulty: 'easy',
    question: 'What is the term for waste that can be broken down naturally by microorganisms?',
    options: ['Hazardous waste', 'Biodegradable waste', 'Non-biodegradable waste', 'Toxic waste'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0559', area: 'C', subTopic: 'environment-engineering',
    topic: 'Climate Change', type: 'theory', difficulty: 'easy',
    question: 'What is a significant impact of climate change on agriculture?',
    options: ['Improved crop yields', 'Increased pest and disease prevalence', 'Decreased production costs', 'More predictable weather patterns'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0560', area: 'C', subTopic: 'environment-engineering',
    topic: 'Waste Management Facilities', type: 'theory', difficulty: 'average',
    question: 'What type of facility is specifically designed for the thermal treatment of waste to reduce its volume?',
    options: ['Incinerator', 'Composting facility', 'Landfill', 'Recycling center'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0561', area: 'C', subTopic: 'Environment Engineering',
    topic: 'Waste Management Systems', type: 'theory', difficulty: 'easy',
    question: 'What is the primary objective of a waste management system?',
    options: ['To reduce the amount of waste generated', 'To recycle all materials', 'To incinerate waste efficiently', 'To store waste indefinitely'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0562', area: 'C', subTopic: 'Environment Engineering',
    topic: 'Government Regulations', type: 'theory', difficulty: 'average',
    question: 'Which Philippine law regulates waste management and disposal?',
    options: ['RA 9003', 'RA 10601', 'RA 9275', 'RA 6969'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0563', area: 'C', subTopic: 'Environment Engineering',
    topic: 'Construction Management', type: 'theory', difficulty: 'average',
    question: 'What is an essential factor to consider in managing the construction of waste management facilities?',
    options: ['Accessibility to public transport', 'Proximity to urban areas', 'Environmental impact assessments', 'Proximity to residential areas'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0564', area: 'C', subTopic: 'Environment Engineering',
    topic: 'Forest Engineering Principles', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is a key principle of forest engineering?',
    options: ['Erosion control', 'Pesticide application', 'Soil compacting', 'Planting non-native species'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0565', area: 'C', subTopic: 'Environment Engineering',
    topic: 'Climate Change Impact', type: 'theory', difficulty: 'hard',
    question: 'How does climate change primarily affect agricultural productivity?',
    options: ['Increased pest resistance', 'Changes in rainfall patterns', 'Higher soil fertility', 'Decreased carbon dioxide levels'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0566', area: 'C', subTopic: 'Environment Engineering',
    topic: 'Waste Management Systems', type: 'theory', difficulty: 'average',
    question: 'What is the waste hierarchy?',
    options: ['Recycling, recovery, disposal', 'Prevention, reuse, recycling', 'Collection, treatment, disposal', 'Waste minimization, recycling, energy recovery'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0567', area: 'C', subTopic: 'Environment Engineering',
    topic: 'Government Regulations', type: 'theory', difficulty: 'average',
    question: 'Which agency is responsible for enforcing the Philippine Clean Water Act?',
    options: ['Department of Environment and Natural Resources (DENR)', 'National Irrigation Administration (NIA)', 'Department of Agriculture (DA)', 'Food and Drug Administration (FDA)'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0568', area: 'C', subTopic: 'Environment Engineering',
    topic: 'Construction Management', type: 'theory', difficulty: 'average',
    question: 'What should be prioritized for sanitation in the design of waste management facilities?',
    options: ['Accessibility for inspection', 'Aesthetic design', 'Proximity to waste generation sites', 'Efficient waste processing technologies'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0569', area: 'C', subTopic: 'Environment Engineering',
    topic: 'Forest Engineering Principles', type: 'theory', difficulty: 'easy',
    question: 'What is the primary goal of forest engineering?',
    options: ['Maximizing timber production', 'Minimizing soil erosion', 'Maintaining ecosystem balance', 'Improving forest aesthetics'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0570', area: 'C', subTopic: 'Environment Engineering',
    topic: 'Climate Change Impact', type: 'theory', difficulty: 'average',
    question: 'What is a significant impact of climate change on the Philippines\' agriculture?',
    options: ['Increased water availability', 'Higher yields of rice and corn', 'Frequent typhoons causing crop loss', 'Longer growing seasons'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0571', area: 'C', subTopic: 'Environment Engineering',
    topic: 'Waste Management Systems', type: 'computation', difficulty: 'hard',
    question: 'A waste management facility processes 400 tons of organic waste per day. If 15% of this is composted and the efficiency of the composting process is 80%, how much compost is produced daily?',
    options: ['48 tons', '60 tons', '80 tons', '72 tons'],
    correctAnswer: 1,
    solution: {
      given: 'Total waste = 400 tons, Composted fraction = 15%, Efficiency = 80%',
      steps: ['Composted waste = 400 tons × 15% = 60 tons', 'Compost produced = 60 tons × 80% = 48 tons'],
      formula: 'Compost produced = (Total waste × Composted fraction) × Efficiency',
      keyConcept: 'Composting efficiency determines the final amount of compost available.',
      commonMistakes: ['Calculating from total waste without applying fraction first', 'Confusing efficiency with yield', 'Not converting percentages properly'],
      extraneousGivens: ['Total waste: 400 tons', 'Efficiency: 80%', 'Daily processing time: 24 hours'],
    }
  },
  {
    id: 'llm-c-0572', area: 'C', subTopic: 'Environment Engineering',
    topic: 'Government Regulations', type: 'computation', difficulty: 'hard',
    question: 'A waste management facility has an operational cost of PHP 500,000 per month. If 60% of this is for labor and 30% for maintenance, what is the amount allocated for labor?',
    options: ['PHP 300,000', 'PHP 250,000', 'PHP 200,000', 'PHP 350,000'],
    correctAnswer: 0,
    solution: {
      given: 'Total cost = PHP 500,000, Labor cost fraction = 60%',
      steps: ['Labor cost = 500,000 × 60% = PHP 300,000'],
      formula: 'Labor cost = Total cost × Labor cost fraction',
      keyConcept: 'Understanding budget allocation is vital for facility management.',
      commonMistakes: ['Misapplying percentages', 'Not using the total cost given', 'Incorrect arithmetic calculations'],
      extraneousGivens: ['Total cost: PHP 500,000', 'Maintenance cost: PHP 150,000', 'Operational overhead: PHP 25,000'],
    }
  },
  {
    id: 'llm-c-0573', area: 'C', subTopic: 'Environment Engineering',
    topic: 'Construction Management', type: 'theory', difficulty: 'average',
    question: 'Which of the following is essential when selecting a site for a waste disposal facility?',
    options: ['Cost of land acquisition', 'Distance from urban areas', 'Soil type and permeability', 'Access to utilities'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0574', area: 'C', subTopic: 'Environment Engineering',
    topic: 'Forest Engineering Principles', type: 'theory', difficulty: 'easy',
    question: 'What is a benefit of implementing forest engineering principles?',
    options: ['Increased sedimentation in rivers', 'Enhanced biodiversity', 'Higher pesticide use', 'Decreased water retention'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0575', area: 'C', subTopic: 'Environment Engineering',
    topic: 'Climate Change Impact', type: 'computation', difficulty: 'hard',
    question: 'Given that the average temperature in a region is projected to increase by 2°C, calculate the projected increase in crop yield if the yield increases by 5% for every 1°C rise. If the current yield is 1,200 kg/ha, what will be the new yield?',
    options: ['1,260 kg/ha', '1,320 kg/ha', '1,280 kg/ha', '1,300 kg/ha'],
    correctAnswer: 1,
    solution: {
      given: 'Current yield = 1,200 kg/ha, Temperature increase = 2°C, Yield increase per °C = 5%',
      steps: ['Total yield increase = 5% × 2 = 10%', 'New yield = Current yield × (1 + 10%) = 1,200 kg/ha × 1.10', 'New yield = 1,320 kg/ha'],
      formula: 'New yield = Current yield × (1 + (Yield increase % × Temperature increase))',
      keyConcept: 'Understanding yield response to temperature changes is essential for predicting agricultural outcomes.',
      commonMistakes: ['Failing to convert percentages to decimal', 'Incorrectly applying yield increase', 'Not understanding the impact of temperature on yield'],
      extraneousGivens: ['Current yield: 1,200 kg/ha', 'Temperature increase: 2°C', 'Proposed irrigation improvements: not needed for calculation'],
    }
  },
  {
    id: 'llm-c-0576', area: 'C', subTopic: 'Environment Engineering',
    topic: 'Waste Management Systems', type: 'theory', difficulty: 'easy',
    question: 'What is the primary benefit of recycling waste materials?',
    options: ['Reducing landfill space', 'Increased waste generation', 'Higher processing costs', 'More resource consumption'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0577', area: 'C', subTopic: 'Environment Engineering',
    topic: 'Government Regulations', type: 'theory', difficulty: 'average',
    question: 'Which department oversees the implementation of the Ecological Solid Waste Management Act?',
    options: ['Department of Agriculture (DA)', 'Department of Environment and Natural Resources (DENR)', 'Department of Public Works and Highways (DPWH)', 'Department of Health (DOH)'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0578', area: 'C', subTopic: 'Environment Engineering',
    topic: 'Construction Management', type: 'computation', difficulty: 'hard',
    question: 'A waste management construction project has an allocated budget of PHP 2 million. If 40% of the budget is spent on materials and 25% on labor, how much is left for other expenses?',
    options: ['PHP 1,050,000', 'PHP 800,000', 'PHP 950,000', 'PHP 1,200,000'],
    correctAnswer: 2,
    solution: {
      given: 'Total budget = PHP 2 million, Material cost = 40%, Labor cost = 25%',
      steps: ['Material cost = 2,000,000 × 40% = PHP 800,000', 'Labor cost = 2,000,000 × 25% = PHP 500,000', 'Total spent = 800,000 + 500,000 = PHP 1,300,000', 'Remaining budget = 2,000,000 - 1,300,000 = PHP 700,000'],
      formula: 'Remaining budget = Total budget - (Material cost + Labor cost)',
      keyConcept: 'Understanding budget allocation is critical for managing expenses in construction projects.',
      commonMistakes: ['Miscalculating percentages', 'Failing to sum costs correctly', 'Misinterpreting remaining budget calculations'],
      extraneousGivens: ['Total budget: PHP 2 million', 'Operational costs: Not relevant to calculation', 'Future project phases: Not relevant to calculation'],
    }
  },
  {
    id: 'llm-c-0579', area: 'C', subTopic: 'environment-engineering',
    topic: 'Government Regulations', type: 'theory', difficulty: 'average',
    question: 'Which Philippine law governs solid waste management?',
    options: ['Republic Act 9003', 'Republic Act 10601', 'Republic Act 8749', 'Republic Act 9275'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0580', area: 'C', subTopic: 'environment-engineering',
    topic: 'Waste Management Facilities', type: 'theory', difficulty: 'average',
    question: 'What is an essential factor in the management of waste management facilities?',
    options: ['Location proximity to urban areas', 'Incorporating renewable energy sources', 'Minimizing operational costs only', 'Ensuring compliance with local zoning laws'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0581', area: 'C', subTopic: 'environment-engineering',
    topic: 'Waste Management Systems', type: 'computation', difficulty: 'hard',
    question: 'A recycling facility processes 1,500 kg of plastic waste per day. If the facility reduces waste by 30% through recycling, how much plastic waste is sent to the landfill daily? Additional information: The facility operates 300 days a year.',
    options: ['1,050 kg', '1,050,000 kg', '600 kg', '900 kg'],
    correctAnswer: 3,
    solution: {
      given: 'Total waste = 1500 kg, Reduction = 30%',
      steps: ['Calculate the amount recycled: 1500 kg * 0.30 = 450 kg', 'Calculate waste sent to landfill: 1500 kg - 450 kg = 1050 kg'],
      formula: 'Landfill waste = Total waste - Recycled amount',
      keyConcept: 'Understanding reduction percentages in waste management.',
      commonMistakes: ['Not accounting for the percentage properly', 'Confusing total with recycled', 'Incorrect calculation of landfill waste'],
      extraneousGivens: ['Facility operates 300 days a year'],
    }
  },
  {
    id: 'llm-c-0582', area: 'C', subTopic: 'environment-engineering',
    topic: 'Impact Analysis', type: 'computation', difficulty: 'hard',
    question: 'A municipality has a carbon footprint of 20,000 tons of CO2 annually. If they implement a project that reduces this by 15%, what will be the new carbon footprint? Note: Assume no other changes occur.',
    options: ['17,000 tons', '19,000 tons', '15,000 tons', '21,000 tons'],
    correctAnswer: 0,
    solution: {
      given: 'Initial CO2 = 20,000 tons, Reduction = 15%',
      steps: ['Calculate reduction: 20000 * 0.15 = 3000 tons', 'Calculate new footprint: 20000 - 3000 = 17000 tons'],
      formula: 'New footprint = Initial CO2 - (Initial CO2 * Reduction)',
      keyConcept: 'Understanding how to measure and calculate carbon reductions.',
      commonMistakes: ['Adding instead of subtracting', 'Misinterpreting percentage reduction', 'Forgetting to convert units'],
      extraneousGivens: ['Assume no other changes occur'],
    }
  },
  {
    id: 'llm-c-0583', area: 'C', subTopic: 'environment-engineering',
    topic: 'Government Regulations', type: 'theory', difficulty: 'easy',
    question: 'What is the purpose of implementing the Clean Air Act in the Philippines?',
    options: ['To regulate air pollution and protect public health', 'To regulate water usage in agriculture', 'To increase waste management fees', 'To promote industrial growth'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0584', area: 'C', subTopic: 'environment-engineering',
    topic: 'Waste Management Systems', type: 'theory', difficulty: 'average',
    question: 'What is a major disadvantage of landfilling waste?',
    options: ['It is a cost-effective option', 'It can lead to groundwater contamination', 'It promotes recycling', 'It provides energy recovery'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0585', area: 'C', subTopic: 'environment-engineering',
    topic: 'Waste Management Facilities', type: 'computation', difficulty: 'hard',
    question: 'A waste treatment facility is designed to process 10 tons of waste per day. If it operates 250 days a year, how many tons of waste will it process in a year? Note: The facility uses 0.5 tons of waste daily for energy recovery.',
    options: ['2,500 tons', '2,250 tons', '2,000 tons', '1,500 tons'],
    correctAnswer: 1,
    solution: {
      given: 'Daily capacity = 10 tons, Operating days = 250, Waste for energy recovery = 0.5 tons',
      steps: ['Calculate yearly processing: 10 tons/day * 250 days = 2500 tons', 'Account for waste used for energy recovery: 2500 tons - (0.5 tons/day * 250 days) = 2250 tons'],
      formula: 'Yearly waste processed = Daily capacity * Operating days - (Waste for energy recovery * Operating days)',
      keyConcept: 'Understanding how operational capacity affects total processing.',
      commonMistakes: ['Forgetting to subtract recovered waste', 'Incorrect calculation of total days', 'Confusing tons with kilograms'],
      extraneousGivens: ['The facility uses 0.5 tons of waste daily for energy recovery'],
    }
  },
  {
    id: 'llm-c-0586', area: 'C', subTopic: 'environment-engineering',
    topic: 'Impact Analysis', type: 'computation', difficulty: 'hard',
    question: 'A construction project releases 1,200 tons of CO2 emissions over its duration. A mitigation plan aims to reduce this by 40%. What will be the final emission total? Note: Do not account for any other emissions.',
    options: ['720 tons', '800 tons', '600 tons', '480 tons'],
    correctAnswer: 0,
    solution: {
      given: 'Initial emissions = 1200 tons, Reduction = 40%',
      steps: ['Calculate reduction: 1200 * 0.40 = 480 tons', 'Calculate final emissions: 1200 - 480 = 720 tons'],
      formula: 'Final emissions = Initial emissions - (Initial emissions * Reduction)',
      keyConcept: 'Understanding the effectiveness of mitigation plans.',
      commonMistakes: ['Inaccurate percentage calculations', 'Adding instead of subtracting', 'Confusing total emissions with reduction'],
      extraneousGivens: ['Do not account for any other emissions'],
    }
  },
  {
    id: 'llm-c-0587', area: 'C', subTopic: 'environment-engineering',
    topic: 'Waste Management Systems', type: 'theory', difficulty: 'average',
    question: 'Which of the following is a benefit of recycling?',
    options: ['Increased landfill use', 'Decreased energy consumption', 'Lower waste management costs', 'Increased pollution'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0588', area: 'C', subTopic: 'environment-engineering',
    topic: 'Government Regulations', type: 'theory', difficulty: 'easy',
    question: 'Which Department in the Philippines is responsible for environmental laws and regulations?',
    options: ['Department of Environment and Natural Resources', 'Department of Agriculture', 'Department of Health', 'Department of Science and Technology'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0589', area: 'C', subTopic: 'environment-engineering',
    topic: 'Impact Analysis', type: 'theory', difficulty: 'average',
    question: 'What does the term CDM stand for in relation to environmental projects?',
    options: ['Clean Development Mechanism', 'Carbon Development Management', 'Climate Development Method', 'Conservation Development Model'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0590', area: 'C', subTopic: 'environment-engineering',
    topic: 'Waste Management Facilities', type: 'computation', difficulty: 'hard',
    question: 'A waste management facility collects waste from 5,000 households. If each household generates an average of 1.2 kg of waste per day, how much waste (in tons) is generated by the households in a year? Note: Assume 365 days in a year.',
    options: ['1,095 tons', '876 tons', '657 tons', '1,200 tons'],
    correctAnswer: 0,
    solution: {
      given: 'Households = 5000, Average waste = 1.2 kg/household/day',
      steps: ['Calculate daily waste: 5000 * 1.2 = 6000 kg', 'Calculate yearly waste: 6000 kg/day * 365 days = 2,190,000 kg', 'Convert to tons: 2,190,000 kg / 1000 = 2190 tons'],
      formula: 'Yearly waste = (Households * Average waste * Days) / 1000',
      keyConcept: 'Understanding waste generation calculations.',
      commonMistakes: ['Not converting kg to tons', 'Incorrect multiplication', 'Assuming less number of days'],
      extraneousGivens: ['Assume 365 days in a year'],
    }
  },
  {
    id: 'llm-c-0591', area: 'C', subTopic: 'environment-engineering',
    topic: 'Waste Management Systems', type: 'theory', difficulty: 'average',
    question: 'What is the main purpose of a waste audit?',
    options: ['To increase waste generation', 'To assess waste management practices', 'To create more waste', 'To reduce recycling efforts'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0592', area: 'C', subTopic: 'environment-engineering',
    topic: 'Impact Analysis', type: 'computation', difficulty: 'hard',
    question: 'If a local government area has reduced its carbon emissions from 50,000 tons to 30,000 tons over a year, what is the percentage reduction in carbon emissions? Note: Consider the initial value only.',
    options: ['40%', '30%', '50%', '25%'],
    correctAnswer: 0,
    solution: {
      given: 'Initial emissions = 50,000 tons, Final emissions = 30,000 tons',
      steps: ['Calculate reduction: 50,000 - 30,000 = 20,000 tons', 'Calculate percentage reduction: (20,000 / 50,000) * 100 = 40%'],
      formula: 'Percentage reduction = (Initial - Final) / Initial * 100',
      keyConcept: 'Understanding percentage reductions in emission management.',
      commonMistakes: ['Confusing initial and final values', 'Incorrect division', 'Not multiplying by 100'],
      extraneousGivens: ['Consider the initial value only'],
    }
  },
  {
    id: 'llm-c-0593', area: 'C', subTopic: 'waste-management',
    topic: 'Waste Management Systems', type: 'theory', difficulty: 'average',
    question: 'What is the main purpose of waste management systems in agriculture?',
    options: ['To enhance crop yield', 'To reduce environmental contamination', 'To improve labor efficiency', 'To increase fertilizer application'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0594', area: 'C', subTopic: 'waste-management',
    topic: 'Government Regulations', type: 'theory', difficulty: 'easy',
    question: 'Which agency in the Philippines is primarily responsible for implementing the Ecological Solid Waste Management Act?',
    options: ['Department of Environment and Natural Resources (DENR)', 'Department of Agriculture (DA)', 'National Irrigation Administration (NIA)', 'Department of Health (DOH)'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0595', area: 'C', subTopic: 'waste-management',
    topic: 'Impact Analysis', type: 'theory', difficulty: 'hard',
    question: 'How does climate change impact waste management practices in the Philippines?',
    options: ['Increased agricultural productivity', 'Higher rates of waste generation', 'Reduced moisture in waste', 'Lower temperatures during waste decomposition'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0596', area: 'C', subTopic: 'waste-management',
    topic: 'Waste Management Systems', type: 'theory', difficulty: 'average',
    question: 'Which method is NOT considered a sustainable waste management practice for agricultural residues?',
    options: ['Composting', 'Burning', 'Anaerobic digestion', 'Mulching'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0597', area: 'C', subTopic: 'waste-management',
    topic: 'Construction of Facilities', type: 'theory', difficulty: 'average',
    question: 'What is a critical factor to consider when managing the construction of waste management facilities?',
    options: ['Material costs only', 'Community acceptance', 'Geographic location only', 'Government funding'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0598', area: 'C', subTopic: 'waste-management',
    topic: 'Waste Management Systems', type: 'theory', difficulty: 'easy',
    question: 'What is the first step in developing a waste management plan?',
    options: ['Implementation of regulations', 'Waste characterization', 'Public awareness campaigns', 'Final disposal planning'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0599', area: 'C', subTopic: 'waste-management',
    topic: 'Computation', type: 'computation', difficulty: 'hard',
    question: 'A waste management facility processes 3,000 kg of organic waste per day. If the facility can convert 70% of this into compost, how much compost is produced weekly? Assume no other losses. The facility operates 7 days a week, and the moisture content of the organic waste is 40%. The operating temperature is 25°C, and the location is near a river.',
    options: ['3,780 kg', '5,040 kg', '7,200 kg', '10,500 kg'],
    correctAnswer: 1,
    solution: {
      given: 'Waste processed daily = 3000 kg, Conversion rate = 70%, Days per week = 7',
      steps: ['Calculate weekly waste processed: Total waste per week = 3000 kg/day × 7 days = 21000 kg', 'Calculate compost produced: Compost = 21000 kg × 0.70 = 14700 kg'],
      formula: 'Weekly compost produced = (Daily waste processed × Days per week) × Conversion rate',
      keyConcept: 'The conversion of organic waste to compost relies on the percentage of waste processed.',
      commonMistakes: ['Forgetting to multiply by the number of days', 'Applying conversion rate incorrectly', 'Not accounting for moisture content in the conversion'],
      extraneousGivens: ['Moisture content: 40%', 'Operating temperature: 25°C', 'Location: near a river'],
    }
  },
  {
    id: 'llm-c-0600', area: 'C', subTopic: 'waste-management',
    topic: 'Regulatory Compliance', type: 'theory', difficulty: 'average',
    question: 'What is the purpose of Republic Act 9003 in the context of waste management in the Philippines?',
    options: ['To regulate water resources', 'To improve solid waste management practices', 'To enhance agricultural production', 'To promote renewable energy sources'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0601', area: 'C', subTopic: 'waste-management',
    topic: 'Computation', type: 'computation', difficulty: 'average',
    question: 'If a local government unit collects 150 tons of waste daily, and 30% of this is recycled, how many tons of waste are recycled in a month? Assume 30 days in a month. The maximum allowable landfill capacity is 200 tons/day.',
    options: ['135 tons', '1,350 tons', '450 tons', '900 tons'],
    correctAnswer: 1,
    solution: {
      given: 'Daily waste collected = 150 tons, Recycling rate = 30%, Days in month = 30',
      steps: ['Calculate monthly waste collected: Total waste per month = 150 tons × 30 days = 4500 tons', 'Calculate tons recycled: Recycled = 4500 tons × 0.30 = 1350 tons'],
      formula: 'Monthly recycled waste = (Daily waste collected × Days in month) × Recycling rate',
      keyConcept: 'Understanding recycling rates is crucial for effective waste management.',
      commonMistakes: ['Incorrectly calculating monthly total', 'Not converting percentages properly', 'Ignoring number of days'],
      extraneousGivens: ['Maximum landfill capacity: 200 tons/day'],
    }
  },
  {
    id: 'llm-c-0602', area: 'C', subTopic: 'waste-management',
    topic: 'Impact Analysis', type: 'theory', difficulty: 'hard',
    question: 'What is the key impact of climate change on waste management systems?',
    options: ['Decreased waste generation', 'Increased operational costs', 'Improved waste processing technology', 'Reduced waste collection frequency'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0603', area: 'C', subTopic: 'waste-management',
    topic: 'Waste Management Strategies', type: 'theory', difficulty: 'average',
    question: 'Which of the following is a preferred waste management hierarchy?',
    options: ['Disposal, Recycling, Reduction', 'Reduction, Recycling, Disposal', 'Recycling, Reduction, Disposal', 'Disposal, Reduction, Recycling'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0604', area: 'C', subTopic: 'waste-management',
    topic: 'Regulatory Compliance', type: 'theory', difficulty: 'easy',
    question: 'Under the Philippine Clean Air Act, what is the maximum allowable limit for particulate matter in residential areas?',
    options: ['50 µg/m³', '100 µg/m³', '150 µg/m³', '200 µg/m³'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0605', area: 'C', subTopic: 'waste-management',
    topic: 'Waste Management Strategies', type: 'theory', difficulty: 'easy',
    question: 'What is the primary goal of composting in agricultural waste management?',
    options: ['To produce energy', 'To improve soil fertility', 'To reduce waste volume', 'To create jobs'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0606', area: 'C', subTopic: 'waste-management',
    topic: 'Computation', type: 'computation', difficulty: 'hard',
    question: 'A waste processing plant aims to reduce organic waste by 40%. If the plant currently processes 500 kg of organic waste per day, how much organic waste remains after 30 days? Assume a constant reduction rate. The facility operates under normal atmospheric pressure at 25°C.',
    options: ['6,000 kg', '9,000 kg', '12,000 kg', '15,000 kg'],
    correctAnswer: 1,
    solution: {
      given: 'Initial waste per day = 500 kg, Reduction rate = 40%, Days = 30',
      steps: ['Calculate waste reduced per day: Reduced waste = 500 kg × 0.40 = 200 kg', 'Calculate remaining waste per day after reduction: Remaining waste = 500 kg - 200 kg = 300 kg', 'Calculate total remaining waste over 30 days: Total remaining = 300 kg × 30 days = 9,000 kg'],
      formula: 'Total remaining waste = (Initial waste - (Initial waste × Reduction rate)) × Days',
      keyConcept: 'Understanding waste reduction impacts on totals allows for better management.',
      commonMistakes: ['Not accounting for daily reduction', 'Confusing daily and total waste', 'Incorrectly applying percentage reduction'],
      extraneousGivens: ['Normal atmospheric pressure', 'Temperature at 25°C'],
    }
  },
  {
    id: 'llm-c-0607', area: 'C', subTopic: 'waste-management',
    topic: 'Waste Management Systems', type: 'theory', difficulty: 'easy',
    question: 'What is a common challenge faced by waste management systems in the Philippines?',
    options: ['High literacy rates', 'Lack of public awareness', 'Excessive funding', 'Strong government support'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0608', area: 'C', subTopic: 'waste-management',
    topic: 'Computation', type: 'computation', difficulty: 'average',
    question: 'A recycling center generates revenue by recycling 1,200 kg of plastic per week. If the center receives 20 PHP per kg, while the operational cost is 5 PHP per kg, what is the net profit for a week? The facility employs 10 workers with an average wage of 400 PHP per day.',
    options: ['700 PHP', '1,200 PHP', '1,500 PHP', '2,000 PHP'],
    correctAnswer: 2,
    solution: {
      given: 'Recycled plastic = 1200 kg/week, Revenue per kg = 20 PHP, Cost per kg = 5 PHP, Workers = 10, Daily wage = 400 PHP',
      steps: ['Calculate total revenue: Revenue = 1200 kg × 20 PHP/kg = 24000 PHP', 'Calculate total operational cost: Cost = 1200 kg × 5 PHP/kg = 6000 PHP', 'Calculate wages for a week: Total wage cost = 10 workers × 400 PHP/worker × 7 days = 28000 PHP', 'Calculate net profit: Net profit = Revenue - (Operational cost + Wages) = 24000 PHP - (6000 PHP + 28000 PHP) = -1000 PHP'],
      formula: 'Net profit = Revenue - (Cost of Operations + Total Wages)',
      keyConcept: 'Understanding the balance of revenues and costs is essential for sustainability.',
      commonMistakes: ['Not factoring in all costs', 'Confusing revenue with profit', 'Ignoring total wage calculations'],
      extraneousGivens: ['Number of workers: 10', 'Daily wage: 400 PHP'],
    }
  },
  {
    id: 'llm-c-0609', area: 'C', subTopic: 'waste-management',
    topic: 'Impact Analysis', type: 'theory', difficulty: 'easy',
    question: 'What is a primary environmental benefit of implementing effective waste management systems?',
    options: ['Increased air pollution', 'Reduced greenhouse gas emissions', 'Higher water table', 'Less biodiversity'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0610', area: 'C', subTopic: 'waste-management',
    topic: 'Government Regulations', type: 'theory', difficulty: 'average',
    question: 'What is the primary focus of the Republic Act 10601 or the Food Security Act in relation to waste management?',
    options: ['To enhance food security mainly through imports', 'To promote sustainable waste management in food production', 'To reduce food prices', 'To improve agricultural productivity through chemical fertilizers'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0611', area: 'C', subTopic: 'waste-management',
    topic: 'Waste Management Strategies', type: 'theory', difficulty: 'hard',
    question: 'Which waste management strategy emphasizes the reduction of waste generation at the source?',
    options: ['Recycling', 'Incineration', 'Waste-to-energy', 'Source reduction'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0612', area: 'C', subTopic: 'waste-management',
    topic: 'Computation', type: 'computation', difficulty: 'hard',
    question: 'A municipal waste management program collects waste from 500 households, with an average of 1.5 kg of waste per household per day. If the program operates 30 days in a month, how much waste is collected in a month? The average temperature during collection is 28°C, and the moisture content of the waste is 50%.',
    options: ['22,500 kg', '23,000 kg', '23,500 kg', '24,000 kg'],
    correctAnswer: 0,
    solution: {
      given: 'Households = 500, Waste per household = 1.5 kg/day, Days = 30',
      steps: ['Calculate daily waste collection: Daily waste = 500 households × 1.5 kg = 750 kg', 'Calculate monthly waste collection: Monthly waste = 750 kg × 30 days = 22,500 kg'],
      formula: 'Monthly waste collected = (Households × Waste per household) × Days',
      keyConcept: 'Accurate calculation of collected waste is essential for effective management.',
      commonMistakes: ['Forgetting to multiply by the number of days', 'Misestimating waste per household', 'Ignoring moisture content'],
      extraneousGivens: ['Average temperature: 28°C', 'Moisture content: 50%'],
    }
  },
  {
    id: 'llm-c-0613', area: 'C', subTopic: 'refrigeration-engineering',
    topic: 'Refrigeration Systems', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of a refrigeration system?',
    options: ['To convert heat into work', 'To move heat from a cold space to a warm space', 'To maintain a constant temperature', 'To facilitate heat exchange'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0614', area: 'C', subTopic: 'refrigeration-engineering',
    topic: 'Components of Refrigeration Systems', type: 'theory', difficulty: 'average',
    question: 'Which component of a refrigeration system is responsible for compressing the refrigerant?',
    options: ['Evaporator', 'Condenser', 'Expansion Valve', 'Compressor'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0615', area: 'C', subTopic: 'thermodynamics',
    topic: 'Thermodynamic Laws', type: 'theory', difficulty: 'average',
    question: 'According to the Second Law of Thermodynamics, which of the following statements is true?',
    options: ['Energy can be created from nothing.', 'Heat can spontaneously flow from cold to hot.', 'Entropy in a closed system always increases.', 'All processes are reversible.'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0616', area: 'C', subTopic: 'psychrometrics',
    topic: 'Heat Transfer', type: 'computation', difficulty: 'hard',
    question: 'Calculate the amount of heat that must be removed to cool 150 kg of fresh pork from 30°C to 5°C, given the specific heat of pork is 0.68 kJ/kg°C. Assume the room temperature is 25°C and the specific heat of water is 4.186 kJ/kg°C.',
    options: ['3,075 kJ', '3,060 kJ', '3,150 kJ', '3,200 kJ'],
    correctAnswer: 0,
    solution: {
      given: 'm = 150 kg, C = 0.68 kJ/kg°C, Ti = 30°C, Tf = 5°C, room temp = 25°C, C_water = 4.186 kJ/kg°C',
      steps: ['Calculate temperature difference: ΔT = Ti - Tf = 30 - 5 = 25°C', 'Calculate heat removed: Q = m * C * ΔT = 150 * 0.68 * 25 = 2,550 kJ'],
      formula: 'Q = m * C * ΔT',
      keyConcept: 'The heat transfer during cooling is calculated using the mass, specific heat, and temperature difference.',
      commonMistakes: ['Incorrect use of the specific heat of water', 'Failing to use the correct temperature difference', 'Calculating heat added instead of removed'],
      extraneousGivens: ['Room temperature: 25°C', 'Specific heat of water: 4.186 kJ/kg°C'],
    }
  },
  {
    id: 'llm-c-0617', area: 'C', subTopic: 'psychrometrics',
    topic: 'Cooling Loads', type: 'computation', difficulty: 'average',
    question: 'A walk-in cooler has dimensions of 5m x 3m x 2.5m. If the room requires 10 BTU/ft²-hr for cooling and operates 75% of the time, calculate the total BTU/hr cooling load. (Note: 1 m² = 10.764 ft², 1 BTU = 0.293 kJ)',
    options: ['1,650 BTU/hr', '1,200 BTU/hr', '2,180 BTU/hr', '2,050 BTU/hr'],
    correctAnswer: 3,
    solution: {
      given: 'Dimensions: 5m x 3m x 2.5m, BTU/ft²-hr = 10, operates 75% of the time',
      steps: ['Calculate area in ft²: Area = 5m * 3m = 15m² = 15 * 10.764 = 161.46 ft²', 'Calculate total cooling load: Total BTU/hr = Area * 10 BTU/ft²-hr = 161.46 * 10 = 1,614.6 BTU/hr', 'Adjust for operation time: Total BTU/hr = 1,614.6 * 0.75 = 1,211 BTU/hr'],
      formula: 'Total BTU/hr = Area * BTU/ft²-hr * Time fraction',
      keyConcept: 'The cooling load calculation incorporates the area of the cooler and the time it operates.',
      commonMistakes: ['Confusing m² with ft²', 'Incorrect operation time factor', 'Not converting units properly'],
      extraneousGivens: ['Operating time: 75%', '1 BTU = 0.293 kJ'],
    }
  },
  {
    id: 'llm-c-0618', area: 'C', subTopic: 'refrigeration-engineering',
    topic: 'Refrigerants', type: 'theory', difficulty: 'easy',
    question: 'Which of the following refrigerants is known for being highly toxic?',
    options: ['Freon 12', 'Carbon dioxide', 'Ammonia', 'Freon 22'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0619', area: 'C', subTopic: 'thermodynamics',
    topic: 'Thermodynamic Cycles', type: 'theory', difficulty: 'average',
    question: 'In a thermodynamic cycle, what does the term \'work done on the system\' refer to?',
    options: ['Heat added to the system', 'Energy expelled from the system', 'Mechanical work performed by the system', 'Work input into the system'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0620', area: 'C', subTopic: 'psychrometrics',
    topic: 'Heat Transfer', type: 'computation', difficulty: 'hard',
    question: 'Calculate the total cooling load in kJ/hr for a poultry processing facility that cools 2000 kg of poultry from 15°C to 4°C in 3 hours, given that the specific heat of poultry is 3.5 kJ/kg°C. The facility experiences a constant heat gain of 500 kJ/hr due to ambient temperature. Assume the refrigeration system runs 50% of the time.',
    options: ['2,500 kJ/hr', '3,200 kJ/hr', '2,800 kJ/hr', '3,000 kJ/hr'],
    correctAnswer: 1,
    solution: {
      given: 'm = 2000 kg, C = 3.5 kJ/kg°C, Ti = 15°C, Tf = 4°C, heat gain = 500 kJ/hr, operational time = 50%',
      steps: ['Calculate temperature difference: ΔT = Ti - Tf = 15 - 4 = 11°C', 'Calculate heat removed: Q = m * C * ΔT = 2000 * 3.5 * 11 = 77,000 kJ', 'Total load considering heat gain: Total load = (Q + heat gain) / operational time = (77,000 + 500 * 3) / (3) = 26,167 kJ/hr', 'Convert to kJ/hr for the effective operational time: Total load = 26,167 / 50% = 52,334 kJ/hr'],
      formula: 'Total Load = (m * C * ΔT + heat gain * hours) / (hours * operational ratio)',
      keyConcept: 'Cooling load calculations must account for both product load and ambient heat gain.',
      commonMistakes: ['Ignoring ambient heat gain', 'Incorrect operational time calculation', 'Misunderstanding unit conversions'],
      extraneousGivens: ['Operational time: 50%', 'Heat gain: 500 kJ/hr'],
    }
  },
  {
    id: 'llm-c-0621', area: 'C', subTopic: 'refrigeration-engineering',
    topic: 'Cooling Systems', type: 'theory', difficulty: 'easy',
    question: 'What is the typical operating temperature range for cold storage of fresh vegetables?',
    options: ['0°C to 5°C', '4°C to 10°C', '10°C to 15°C', '0°C to 10°C'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0622', area: 'C', subTopic: 'thermodynamics',
    topic: 'Phase Changes', type: 'computation', difficulty: 'hard',
    question: 'Calculate the energy required to freeze 100 kg of water at 0°C, given that the latent heat of fusion for water is 334 kJ/kg. The specific heat of water is 4.186 kJ/kg°C, and the initial temperature is 5°C.',
    options: ['334,000 kJ', '418,600 kJ', '434,600 kJ', '500,000 kJ'],
    correctAnswer: 2,
    solution: {
      given: 'm = 100 kg, h_fusion = 334 kJ/kg, C_water = 4.186 kJ/kg°C, T_initial = 5°C, T_final = 0°C',
      steps: ['Calculate cooling to 0°C: Q_cooling = m * C * ΔT = 100 * 4.186 * (5 - 0) = 20930 kJ', 'Calculate freezing: Q_freezing = m * h_fusion = 100 * 334 = 33400 kJ', 'Total energy required: Q_total = Q_cooling + Q_freezing = 20930 + 33400 = 54330 kJ'],
      formula: 'Q_total = m * C * ΔT + m * h_fusion',
      keyConcept: 'Energy for phase changes includes the latent heat of fusion and the cooling effect.',
      commonMistakes: ['Forgetting the specific heat before freezing', 'Miscalculating the latent heat', 'Wrong phase transition concepts'],
      extraneousGivens: ['Specific heat of water: 4.186 kJ/kg°C', 'Latent heat of fusion: 334 kJ/kg'],
    }
  },
  {
    id: 'llm-c-0623', area: 'C', subTopic: 'thermodynamics',
    topic: 'Heat Engines', type: 'theory', difficulty: 'average',
    question: 'In which type of thermodynamic system does heat transfer occur without work being done?',
    options: ['Isothermal', 'Adiabatic', 'Isochoric', 'Isobaric'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0624', area: 'C', subTopic: 'refrigeration-engineering',
    topic: 'Refrigeration Load Calculations', type: 'computation', difficulty: 'hard',
    question: 'Determine the total cooling load required for a storage room measuring 4m x 5m x 3m, with a heat gain of 1,200 BTU/hr from lights and occupants. The cooling capacity is based on insulation of 6.5 BTU/ft²-hr. Calculate total BTU/hr required for cooling. (Note: 1 m² = 10.764 ft²).',
    options: ['1,800 BTU/hr', '2,000 BTU/hr', '2,200 BTU/hr', '2,400 BTU/hr'],
    correctAnswer: 2,
    solution: {
      given: 'Dimensions: 4m x 5m x 3m, heat gain = 1,200 BTU/hr, insulation = 6.5 BTU/ft²-hr',
      steps: ['Calculate surface area: Area = 2(4*5 + 4*3 + 5*3) = 2(20 + 12 + 15) = 94 ft²', 'Calculate insulation load: Insulation Load = Area * 6.5 BTU/ft²-hr = 94 * 6.5 = 611 BTU/hr', 'Total load = insulation load + heat gain = 611 + 1200 = 1811 BTU/hr'],
      formula: 'Total Load = Insulation Load + Heat Gain',
      keyConcept: 'The total cooling load considers both the insulation requirements and any additional heat gain.',
      commonMistakes: ['Failing to convert units properly', 'Overlooking heat gain factors', 'Miscalculating area'],
      extraneousGivens: ['Heat gain: 1,200 BTU/hr'],
    }
  },
  {
    id: 'llm-c-0625', area: 'C', subTopic: 'psychrometrics',
    topic: 'Cooling Loads', type: 'computation', difficulty: 'hard',
    question: 'A refrigeration unit has to cool 1,500 kg of fresh fish from 15°C to 0°C over 10 hours. Given the specific heat of fish is 3.2 kJ/kg°C, calculate the total cooling load in kJ. (Note: 1 kJ = 0.9478 BTU).',
    options: ['8,000 kJ', '7,200 kJ', '6,500 kJ', '7,800 kJ'],
    correctAnswer: 1,
    solution: {
      given: 'm = 1,500 kg, C = 3.2 kJ/kg°C, Ti = 15°C, Tf = 0°C',
      steps: ['Calculate temperature difference: ΔT = Ti - Tf = 15 - 0 = 15°C', 'Calculate cooling load: Q = m * C * ΔT = 1,500 * 3.2 * 15 = 72,000 kJ'],
      formula: 'Q = m * C * ΔT',
      keyConcept: 'The cooling load calculation uses the mass of the product, specific heat, and temperature change.',
      commonMistakes: ['Inaccurate specific heat values', 'Incorrect unit conversion', 'Not applying proper time factor'],
      extraneousGivens: ['Cooling time: 10 hours', 'Conversion: 1 kJ = 0.9478 BTU'],
    }
  },
  {
    id: 'llm-c-0626', area: 'C', subTopic: 'thermodynamics',
    topic: 'Thermodynamic Cycles', type: 'theory', difficulty: 'average',
    question: 'What does an isothermal process in a thermodynamic cycle imply?',
    options: ['Constant volume', 'Constant pressure', 'No heat exchange', 'Constant temperature'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0627', area: 'C', subTopic: 'psychrometrics',
    topic: 'Cooling Load Calculations', type: 'computation', difficulty: 'hard',
    question: 'Calculate the energy required to cool 100 kg of fresh coconut from 25°C to 10°C. Assuming the specific heat of coconut is 2.6 kJ/kg°C and considering a safety margin, how much energy is needed in kJ? (Include a 10% additional margin to account for losses and inefficiencies.)',
    options: ['1,560 kJ', '1,716 kJ', '1,476 kJ', '1,500 kJ'],
    correctAnswer: 1,
    solution: {
      given: 'm = 100 kg, C = 2.6 kJ/kg°C, Ti = 25°C, Tf = 10°C, safety margin = 10%',
      steps: ['Calculate temperature difference: ΔT = Ti - Tf = 25 - 10 = 15°C', 'Calculate cooling energy required: Q = m * C * ΔT = 100 * 2.6 * 15 = 3,900 kJ', 'Adjust for safety margin: Q_total = Q * 1.1 = 3,900 * 1.1 = 4,290 kJ'],
      formula: 'Q_total = m * C * ΔT * (1 + safety margin)',
      keyConcept: 'Incorporating safety margins in energy calculations is crucial for practical applications.',
      commonMistakes: ['Not using the safety margin', 'Incorrect specific heat usage', 'Misunderstanding temperature change'],
      extraneousGivens: ['Specific heat: 2.6 kJ/kg°C', 'Temperature difference: ΔT = 15°C'],
    }
  },
  {
    id: 'llm-c-0628', area: 'C', subTopic: 'refrigeration-cold-storage',
    topic: 'Refrigerants', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is a commonly used refrigerant in refrigeration systems?',
    options: ['Ammonia', 'Carbon dioxide', 'Methyl chloride', 'All of the above'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0629', area: 'C', subTopic: 'thermal-dynamics',
    topic: 'Thermodynamics and Heat Transfer', type: 'theory', difficulty: 'average',
    question: 'Which law of thermodynamics states that energy cannot be created or destroyed?',
    options: ['Zeroth Law', 'First Law', 'Second Law', 'Third Law'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0630', area: 'C', subTopic: 'thermal-dynamics',
    topic: 'Properties of Refrigerants', type: 'theory', difficulty: 'average',
    question: 'What specific property of refrigerants is critical for determining their refrigerating effect?',
    options: ['Latent heat of fusion', 'Specific heat', 'Freezing point', 'Refrigerating effect'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0631', area: 'C', subTopic: 'refrigeration-cold-storage',
    topic: 'Cooling Load Calculation', type: 'computation', difficulty: 'average',
    question: 'Calculate the amount of heat that must be removed to cool 150 kg of fresh fish from 15°C to 0°C. Assume the specific heat of the fish is 3.2 kJ/kg°C. The fish weight is 150 kg, and the initial temperature is 15°C. Extra temperature data includes a standard ambient temperature of 30°C.',
    options: ['480 kJ', '720 kJ', '960 kJ', '1,200 kJ'],
    correctAnswer: 2,
    solution: {
      given: 'm = 150 kg, C = 3.2 kJ/kg°C, Ti = 15°C, Tf = 0°C, Ambient Temp = 30°C',
      steps: ['Calculate the temperature difference: ΔT = Ti - Tf = 15 - 0 = 15°C', 'Calculate Q: Q = m * C * ΔT = 150 * 3.2 * 15 = 7200 kJ'],
      formula: 'Q = m * C * (Ti - Tf)',
      keyConcept: 'The heat removed depends on the mass, specific heat, and temperature change.',
      commonMistakes: ['Forgetting to account for specific heat', 'Using incorrect temperature values', 'Missing unit conversion'],
      extraneousGivens: ['Ambient temperature: 30°C'],
    }
  },
  {
    id: 'llm-c-0632', area: 'C', subTopic: 'refrigeration-cold-storage',
    topic: 'Refrigeration System Components', type: 'theory', difficulty: 'hard',
    question: 'Which component in a refrigeration cycle is responsible for compressing the refrigerant gas?',
    options: ['Evaporator', 'Compressor', 'Expansion valve', 'Condenser'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0633', area: 'C', subTopic: 'refrigeration-cold-storage',
    topic: 'Cooling Load Calculation', type: 'computation', difficulty: 'hard',
    question: 'Determine the cooling load required for a walk-in cooler measuring 6 m x 8 m x 3 m (HxWxD) to maintain a temperature of 4°C. Assume the heat load from the structure is 6.5 BTU/hr-ft2 and the insulation is 4 inches thick. Ignore the effect of door openings. Extra data includes an air temperature of 30°C.',
    options: ['1,330 BTU/hr', '1,160 BTU/hr', '1,840 BTU/hr', '1,500 BTU/hr'],
    correctAnswer: 0,
    solution: {
      given: 'Dimensions = 6m x 8m x 3m, Heat load = 6.5 BTU/hr-ft2, Insulation thickness = 4in, Air Temp = 30°C',
      steps: ['Calculate surface area: A = 2*(6*3 + 8*3 + 6*8) = 2*(18 + 24 + 48) = 180 ft²', 'Calculate heat load: Q = A * heat load = 180 * 6.5 = 1,170 BTU/hr'],
      formula: 'Q = A * Heat Load',
      keyConcept: 'Cooling load is dependent on the surface area and the defined heat load per unit area.',
      commonMistakes: ['Using incorrect dimensions', 'Forgetting insulation effects', 'Calculating the area incorrectly'],
      extraneousGivens: ['Air temperature: 30°C'],
    }
  },
  {
    id: 'llm-c-0634', area: 'C', subTopic: 'refrigeration-cold-storage',
    topic: 'Thermodynamics', type: 'theory', difficulty: 'easy',
    question: 'What is the term used to describe the heat absorbed or released during a phase change?',
    options: ['Specific heat', 'Latent heat', 'Thermal energy', 'Sensible heat'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0635', area: 'C', subTopic: 'thermal-dynamics',
    topic: 'Heat Transfer', type: 'theory', difficulty: 'average',
    question: 'In heat transfer, which process occurs when heat is transferred through a fluid?',
    options: ['Conduction', 'Convection', 'Radiation', 'Advection'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0636', area: 'C', subTopic: 'refrigeration-cold-storage',
    topic: 'Heat Load Calculation', type: 'computation', difficulty: 'hard',
    question: 'Calculate the cooling load of 200 kg of pork to be cooled from 30°C to 5°C. The specific heat for pork is 2.8 kJ/kg°C. Additionally, the weight of the pork is 200 kg and a standard ambient temperature of 35°C is provided.',
    options: ['10,000 kJ', '12,000 kJ', '11,000 kJ', '9,000 kJ'],
    correctAnswer: 1,
    solution: {
      given: 'Weight = 200 kg, Specific heat = 2.8 kJ/kg°C, Initial temp = 30°C, Final temp = 5°C, Ambient Temp = 35°C',
      steps: ['Calculate the temperature difference: ΔT = 30°C - 5°C = 25°C', 'Calculate Q: Q = m * C * ΔT = 200 * 2.8 * 25 = 14,000 kJ'],
      formula: 'Q = m * C * (Ti - Tf)',
      keyConcept: 'The cooling load is calculated based on mass, specific heat, and temperature change.',
      commonMistakes: ['Miscalculating temperature difference', 'Using incorrect specific heat value', 'Forgetting to use kg instead of grams'],
      extraneousGivens: ['Ambient temperature: 35°C', 'Weight of pork: 200 kg'],
    }
  },
  {
    id: 'llm-c-0637', area: 'C', subTopic: 'refrigeration-cold-storage',
    topic: 'Refrigeration System Functionality', type: 'theory', difficulty: 'average',
    question: 'What is the primary purpose of the expansion valve in a refrigeration system?',
    options: ['To compress the refrigerant gas', 'To regulate refrigerant flow and reduce pressure', 'To absorb heat from the ambient', 'To act as a heat exchanger'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0638', area: 'C', subTopic: 'refrigeration-cold-storage',
    topic: 'Cooling Load Calculation', type: 'computation', difficulty: 'hard',
    question: 'Determine the cooling load for 50 kg of vegetables that need to be cooled from 25°C to 0°C in one hour. The specific heat of the vegetables is 3.5 kJ/kg°C. Given data: weight = 50 kg, specific heat = 3.5 kJ/kg°C. The outside temperature is 32°C.',
    options: ['4,250 kJ', '5,250 kJ', '3,500 kJ', '6,500 kJ'],
    correctAnswer: 0,
    solution: {
      given: 'Weight = 50 kg, C = 3.5 kJ/kg°C, Ti = 25°C, Tf = 0°C, Time = 1 hour, Outside temp = 32°C',
      steps: ['Calculate temperature change: ΔT = 25°C - 0°C = 25°C', 'Calculate Q: Q = m * C * ΔT = 50 * 3.5 * 25 = 4,375 kJ'],
      formula: 'Q = m * C * (Ti - Tf)',
      keyConcept: 'Cooling load is influenced by mass, specific heat, and temperature difference.',
      commonMistakes: ['Forgetting to convert units', 'Using incorrect specific heat value', 'Miscalculating temperature change'],
      extraneousGivens: ['Outside temperature: 32°C'],
    }
  },
  {
    id: 'llm-c-0639', area: 'C', subTopic: 'refrigeration-cold-storage',
    topic: 'Cooling Load Calculation', type: 'computation', difficulty: 'hard',
    question: 'What is the amount of heat removed while freezing 100 kg of coconut water at 0°C to a solid state? The latent heat of fusion for coconut water is 250 kJ/kg. Given additional information: ambient temperature is 25°C.',
    options: ['25,000 kJ', '20,000 kJ', '15,000 kJ', '30,000 kJ'],
    correctAnswer: 0,
    solution: {
      given: 'Weight = 100 kg, Latent heat = 250 kJ/kg, Ambient temp = 25°C',
      steps: ['Calculate Q: Q = m * h1 = 100 * 250 = 25,000 kJ'],
      formula: 'Q = m * latent heat',
      keyConcept: 'The heat removed during freezing is based on the mass and latent heat of fusion.',
      commonMistakes: ['Incorrectly calculating mass', 'Using wrong latent heat value', 'Forgetting to convert units'],
      extraneousGivens: ['Ambient temperature: 25°C'],
    }
  },
  {
    id: 'llm-c-0640', area: 'C', subTopic: 'refrigeration-cold-storage',
    topic: 'Thermodynamics', type: 'theory', difficulty: 'easy',
    question: 'What property of a refrigerant describes its ability to absorb heat?',
    options: ['Specific heat', 'Latent heat', 'Refrigerating effect', 'Thermal conductivity'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0641', area: 'C', subTopic: 'refrigeration-cold-storage',
    topic: 'Cooling Load Calculation', type: 'computation', difficulty: 'hard',
    question: 'Calculate the necessary BTUs to reduce the temperature of 250 lbs of fresh strawberries from 75°F to 35°F. The specific heat of strawberries is 0.69 BTU/lb°F. Also included is the ambient temperature of 32°F.',
    options: ['11,250 BTU', '6,500 BTU', '8,750 BTU', '10,000 BTU'],
    correctAnswer: 0,
    solution: {
      given: 'Weight = 250 lbs, Specific heat = 0.69 BTU/lb°F, Ti = 75°F, Tf = 35°F, Ambient Temp = 32°F',
      steps: ['Calculate ΔT = Ti - Tf = 75 - 35 = 40°F', 'Calculate Q = m * C * ΔT = 250 * 0.69 * 40 = 6,900 BTU'],
      formula: 'Q = m * C * (Ti - Tf)',
      keyConcept: 'Heat removal in cooling processes depends on mass, specific heat, and temperature drop.',
      commonMistakes: ['Missing temperature conversion', 'Using incorrect specific heat', 'Miscalculating weight'],
      extraneousGivens: ['Ambient temperature: 32°F'],
    }
  },
  {
    id: 'llm-c-0642', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Refrigeration Principles', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of refrigeration in agricultural systems?',
    options: ['To increase temperature of products', 'To move heat from a cold space to a warm space', 'To maintain a constant ambient temperature', 'To remove moisture from products'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0643', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Refrigerant Types', type: 'theory', difficulty: 'average',
    question: 'Which of the following refrigerants is commonly used in agricultural refrigeration systems?',
    options: ['Freon 12', 'Carbon dioxide', 'Ammonia', 'Methyl chloride'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0644', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Heat Transfer', type: 'theory', difficulty: 'easy',
    question: 'What type of heat transfer occurs when a cold fluid passes through a hot substance?',
    options: ['Conduction', 'Convection', 'Radiation', 'Phase change'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0645', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Heat Transfer Calculation', type: 'computation', difficulty: 'average',
    question: 'Calculate the amount of heat (in BTUs) that must be removed to cool 150 lbs of pork from 75°F to 34°F. The specific heat of pork above freezing is 0.68 BTU/lb-°F. Assume the specific heat for pork below freezing is irrelevant.',
    options: ['4,500 BTU', '7,000 BTU', '6,000 BTU', '5,250 BTU'],
    correctAnswer: 2,
    solution: {
      given: 'mass=150 lbs, specific heat=0.68 BTU/lb-°F, initial temp=75°F, final temp=34°F',
      steps: ['Calculate temperature difference: ΔT = 75°F - 34°F = 41°F', 'Calculate heat removed: Q = specific heat × mass × ΔT = 0.68 × 150 × 41 = 4,188 BTU'],
      formula: 'Q = specific heat × mass × ΔT',
      keyConcept: 'Heat removal is directly proportional to mass, specific heat, and temperature difference.',
      commonMistakes: ['Forgetting to use the correct temperature difference', 'Using wrong specific heat value'],
      extraneousGivens: ['Initial temperature: 75°F', 'Final temperature: 34°F', 'Mass: 150 lbs'],
    }
  },
  {
    id: 'llm-c-0646', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Refrigeration Design', type: 'computation', difficulty: 'hard',
    question: 'A walk-in cooler with a floor area of 8 ft x 10 ft and a height of 9 ft is to be maintained at 36°F. The space has 5 inches of cork insulation. If the heat transfer through the walls is 7 BTU/ft²-hr, calculate the total heat load in BTU/hr for the cooler, ignoring other sources of heat. Assume an irrelevant heat gain of 200 BTU/hr from external sources.',
    options: ['1,600 BTU/hr', '800 BTU/hr', '960 BTU/hr', '1,200 BTU/hr'],
    correctAnswer: 0,
    solution: {
      given: 'floor area = 8 ft x 10 ft, height = 9 ft, insulation = 5 in, heat transfer = 7 BTU/ft²-hr',
      steps: ['Calculate surface area: A = 2(8*9 + 10*9 + 8*10) = 2(72 + 90 + 80) = 2(242) = 484 ft²', 'Calculate heat load: Q = A × heat transfer = 484 × 7 = 3,388 BTU/hr', 'Total heat load = 3388 - 200 (irrelevant heat gain) = 3188 BTU/hr'],
      formula: 'Q = A × heat transfer',
      keyConcept: 'Insulation reduces heat gain; however, the heat transfer rate through walls is crucial for calculating load.',
      commonMistakes: ['Forgetting to multiply surface area correctly', 'Including irrelevant heat gain in calculations'],
      extraneousGivens: ['Height of cooler: 9 ft', 'Irrelevant heat gain: 200 BTU/hr', 'Insulation: 5 in'],
    }
  },
  {
    id: 'llm-c-0647', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Psychrometrics', type: 'theory', difficulty: 'average',
    question: 'In a psychrometric process, which of the following properties is NOT typically considered?',
    options: ['Dew point temperature', 'Relative humidity', 'Specific heat', 'Enthalpy'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0648', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Thermodynamics', type: 'theory', difficulty: 'average',
    question: 'What is the First Law of Thermodynamics?',
    options: ['Energy cannot be created or destroyed', 'Entropy can never decrease', 'Heat flows from cold to hot spontaneously', 'No process is 100% efficient'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0649', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Enthalpy Calculation', type: 'computation', difficulty: 'hard',
    question: 'Calculate the enthalpy change for 200 kg of water heated from 20°C to 80°C. The specific heat for water is 4.18 kJ/kg-°C. Given a latent heat of vaporization of 2,257 kJ/kg, use 0 kJ/kg for any irrelevant latent heat between temperature changes.',
    options: ['50 kJ', '5,000 kJ', '8,360 kJ', '6,360 kJ'],
    correctAnswer: 3,
    solution: {
      given: 'm = 200 kg, C = 4.18 kJ/kg-°C, ΔT = 80°C - 20°C',
      steps: ['Calculate temperature difference: ΔT = 60°C', 'Calculate enthalpy change: ΔH = m × C × ΔT = 200 × 4.18 × 60 = 50,160 kJ'],
      formula: 'ΔH = m × C × ΔT',
      keyConcept: 'Enthalpy change is related to mass, specific heat, and temperature change.',
      commonMistakes: ['Forgetting to convert units', 'Using wrong specific heat value'],
      extraneousGivens: ['Latent heat of vaporization: 2,257 kJ/kg', 'Heat change irrelevant for temperatures: 0 kJ/kg'],
    }
  },
  {
    id: 'llm-c-0650', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Thermal Efficiency', type: 'theory', difficulty: 'easy',
    question: 'What does thermal efficiency refer to in thermodynamic systems?',
    options: ['The ratio of work output to heat input', 'The ratio of heat output to work input', 'The ratio of heat absorbed to work done', 'The ratio of energy destroyed to energy created'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0651', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Refrigeration Applications', type: 'theory', difficulty: 'average',
    question: 'In the Philippine agricultural sector, which product is most commonly stored in cold storage systems?',
    options: ['Rice', 'Coconut', 'Meat', 'Pineapple'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0652', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Cooling Load Calculation', type: 'computation', difficulty: 'hard',
    question: 'Determine the total cooling load in BTUs for a storage room of 500 ft², insulated with a 4-inch layer of foam, and requires 8 BTU/ft²-hr for heat transfer. Additionally, the room has an irrelevant heat gain from lighting of 300 BTU/hr.',
    options: ['4,200 BTU/hr', '4,800 BTU/hr', '3,600 BTU/hr', '5,000 BTU/hr'],
    correctAnswer: 1,
    solution: {
      given: 'Area = 500 ft², heat transfer = 8 BTU/ft²-hr',
      steps: ['Calculate heat load from the area: Q = Area × heat transfer = 500 × 8 = 4,000 BTU/hr', 'Total cooling load = 4,000 + 300 (irrelevant) = 4,300 BTU/hr'],
      formula: 'Q = Area × heat transfer',
      keyConcept: 'Total cooling load should factor in area heat transfer and any additional loads.',
      commonMistakes: ['Forgetting to multiply area by heat transfer factor', 'Including irrelevant heat gain'],
      extraneousGivens: ['Irrelevant heat gain from lighting: 300 BTU/hr'],
    }
  },
  {
    id: 'llm-c-0653', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Cold Storage Systems', type: 'theory', difficulty: 'easy',
    question: 'Which of the following describes a cold storage system?',
    options: ['System designed to reduce moisture levels', 'System used to extract heat from products', 'System for freezing products immediately', 'System that does not require insulation'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0654', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Coefficient of Performance', type: 'computation', difficulty: 'hard',
    question: 'A refrigeration system transfers 900 kJ of heat from a cold reservoir and requires 300 kJ of work. What is the Coefficient of Performance (COP) of the system?',
    options: ['2.5', '3.0', '4.0', '4.5'],
    correctAnswer: 1,
    solution: {
      given: 'Heat removed = 900 kJ, Work input = 300 kJ',
      steps: ['Calculate COP: COP = Qc / W = 900 / 300 = 3.0'],
      formula: 'COP = Qc / W',
      keyConcept: 'COP measures the efficiency of a refrigeration system.',
      commonMistakes: ['Confusing heat absorbed with work done', 'Forgetting to use proper units'],
      extraneousGivens: ['None'],
    }
  },
  {
    id: 'llm-c-0655', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Air Conditioning Principles', type: 'theory', difficulty: 'average',
    question: 'What is the primary function of an air conditioning system in agricultural contexts?',
    options: ['To heat products', 'To humidify the air', 'To cool and dehumidify the air', 'To ventilate the space'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0656', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Heat Pump Application', type: 'computation', difficulty: 'hard',
    question: 'A heat pump extracts 600 kJ from the cold reservoir and operates with a COP of 3. What is the total heat delivered to the warm reservoir?',
    options: ['1,200 kJ', '900 kJ', '300 kJ', '600 kJ'],
    correctAnswer: 0,
    solution: {
      given: 'Heat extracted = 600 kJ, COP = 3',
      steps: ['Calculate total heat delivered: Qh = Qc + W, where W = Qc / COP = 600 / 3 = 200 kJ', 'Total heat delivered = 600 + 200 = 800 kJ'],
      formula: 'Qh = Qc + (Qc / COP)',
      keyConcept: 'Heat pump efficiency is based on the relationship of heat extracted and work input.',
      commonMistakes: ['Using incorrect values for heat transfer', 'Forgetting to account for work done'],
      extraneousGivens: ['None'],
    }
  },
  {
    id: 'llm-c-0657', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Thermal Efficiency of Refrigeration', type: 'theory', difficulty: 'average',
    question: 'Which factor greatly affects the thermal efficiency of a refrigeration system?',
    options: ['Ambient temperature', 'Mass of refrigerant', 'Type of compressor', 'All of the above'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0658', area: 'C', subTopic: 'agricultural-engineering',
    topic: 'Refrigeration System Evaluation', type: 'theory', difficulty: 'hard',
    question: 'What is a critical consideration when evaluating the efficiency of a refrigeration system in a Philippine context?',
    options: ['Power supply variability', 'Refrigerant prices', 'Local climate conditions', 'Quality of insulation materials'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0659', area: 'C', subTopic: 'refrigeration-cold-storage',
    topic: 'Refrigeration Principles', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of a refrigeration system in agricultural applications?',
    options: ['To increase the temperature of the goods', 'To maintain a low temperature for the preservation of perishable goods', 'To provide heat for processing', 'To eliminate humidity entirely'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0660', area: 'C', subTopic: 'heat-transfer-thermodynamics',
    topic: 'Heat Transfer', type: 'theory', difficulty: 'average',
    question: 'Which of the following units is used to measure heat transfer in SI units?',
    options: ['KJ', 'BTU', 'Calorie', 'Joule'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0661', area: 'C', subTopic: 'refrigeration-cold-storage',
    topic: 'Refrigeration System Components', type: 'theory', difficulty: 'easy',
    question: 'Which component of a refrigeration system is primarily responsible for compressing the refrigerant?',
    options: ['Evaporator', 'Condenser', 'Compressor', 'Expansion Valve'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0662', area: 'C', subTopic: 'refrigeration-cold-storage',
    topic: 'Refrigeration Cycle', type: 'theory', difficulty: 'average',
    question: 'During which phase of the refrigeration cycle does the refrigerant absorb heat from the refrigerated space?',
    options: ['Compression', 'Condensation', 'Evaporation', 'Expansion'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0663', area: 'C', subTopic: 'psychrometrics-heat-transfer',
    topic: 'Psychrometric Properties', type: 'theory', difficulty: 'hard',
    question: 'In the context of psychrometrics, what is vapor pressure?',
    options: ['The pressure exerted by a vapor in thermal equilibrium with its liquid or solid phase', 'The pressure exerted by the total gas in a closed system', 'The pressure that a system can exert while being compressed', 'The absolute pressure at which condensation begins'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0664', area: 'C', subTopic: 'refrigeration-cold-storage',
    topic: 'Computation of Cooling Load', type: 'computation', difficulty: 'average',
    question: 'Determine the total cooling load needed to remove heat from 150 kg of carabeef being cooled from 28°C to -2.2°C, assuming specific heat above freezing is 3.5 kJ/kg°C, latent heat of fusion is 250 kJ/kg, and the freezing point is -2.2°C. Note that the ambient temperature is 30°C and barometric pressure is 101.3 kPa.',
    options: ['56,250 kJ', '58,027.5 kJ', '60,000 kJ', '62,500 kJ'],
    correctAnswer: 1,
    solution: {
      given: 'm = 150 kg, Te = 28°C, Tf = -2.2°C, Ts = -20°C, Cb = 3.5 kJ/kg-°C, Ca = 1.75 kJ/kg-°C, h1 = 250 kJ/kg',
      steps: ['Calculate cooling for above freezing: Qt1 = m * Cb * (Te - Tf)', 'Qt1 = 150 * 3.5 * (28 - (-2.2))', 'Qt1 = 150 * 3.5 * 30.2 = 15,975 kJ', 'Calculate freezing load: Qt2 = m * h1', 'Qt2 = 150 * 250 = 37,500 kJ', 'Calculate cooling to -20°C: Qt3 = m * Ca * (Tf - Ts)', 'Qt3 = 150 * 1.75 * (-2.2 - (-20)) = 150 * 1.75 * 17.8 = 4,660 kJ', 'Total Cooling Load = Qt1 + Qt2 + Qt3 = 15,975 + 37,500 + 4,660 = 58,027.5 kJ'],
      formula: 'Qt = m * Cb * (Te - Tf) + m * h1 + m * Ca * (Tf - Ts)',
      keyConcept: 'Understanding and calculating total cooling loads requires consideration of different phases and unique heats.',
      commonMistakes: ['Forgetting latent heat contributions', 'Using incorrect specific heat values', 'Not applying mass correctly'],
      extraneousGivens: ['Ambient temperature: 30°C', 'Barometric pressure: 101.3 kPa', 'Other irrelevant product weights'],
    }
  },
  {
    id: 'llm-c-0665', area: 'C', subTopic: 'refrigeration-cold-storage',
    topic: 'Refrigeration System Efficiency', type: 'theory', difficulty: 'average',
    question: 'What does the coefficient of performance (COP) in refrigeration systems indicate?',
    options: ['The amount of work required to produce cooling', 'The effectiveness of heat intake relative to work input', 'The total heat extracted from the system', 'The temperature differential maintained within the cooling system'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0666', area: 'C', subTopic: 'psychrometrics-heat-transfer',
    topic: 'Heat Transfer Principles', type: 'theory', difficulty: 'average',
    question: 'Which method of heat transfer primarily involves the movement of fluids?',
    options: ['Conduction', 'Convection', 'Radiation', 'Evaporation'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0667', area: 'C', subTopic: 'refrigeration-cold-storage',
    topic: 'Density and Specific Heat Calculation', type: 'computation', difficulty: 'hard',
    question: 'Compute the volume of a refrigeration cylinder with a radius of 0.15 m and a height of 2 m. Use the formula V = πr²h. Given an irrelevant thermal conductivity of 0.4 W/m·K for the surrounding material.',
    options: ['14.13 m³', '15.27 m³', '28.27 m³', '31.42 m³'],
    correctAnswer: 0,
    solution: {
      given: 'r = 0.15 m, h = 2 m, irrelevant thermal conductivity = 0.4 W/m·K',
      steps: ['Calculate volume: V = π * (0.15)² * 2', 'V = 3.14159 * 0.0225 * 2 = 0.14137 m³ = 14.13 m³'],
      formula: 'V = πr²h',
      keyConcept: 'Understanding volume calculations is essential in determining capacities and design requirements for refrigeration systems.',
      commonMistakes: ['Misplacing the radius in the formula', 'Neglecting to square the radius', 'Ignoring units of volume'],
      extraneousGivens: ['Thermal conductivity: 0.4 W/m·K'],
    }
  },
  {
    id: 'llm-c-0668', area: 'C', subTopic: 'refrigeration-cold-storage',
    topic: 'Cooling Load Calculation', type: 'computation', difficulty: 'hard',
    question: 'Calculate the amount of heat that must be removed from 200 kg of fresh coconuts cooled from 30°C to 8°C. The specific heat of coconuts is 2.5 kJ/kg·°C, given a daily ambient temperature of 33°C and humidity of 60%.',
    options: ['1,100 kJ', '1,100,000 kJ', '8,000 kJ', '4,000 kJ'],
    correctAnswer: 0,
    solution: {
      given: 'm = 200 kg, Te = 30°C, Tf = 8°C, C = 2.5 kJ/kg·°C, ambient temp = 33°C',
      steps: ['Qt = m * C * (Te - Tf)', 'Qt = 200 * 2.5 * (30 - 8)', 'Qt = 200 * 2.5 * 22 = 1,100 kJ'],
      formula: 'Qt = m * C * (Te - Tf)',
      keyConcept: 'Calculating heat removal is vital for effective cooling planning.',
      commonMistakes: ['Using incorrect specific heat values', 'Confusing mass and weight', 'Improperly calculating temperature change'],
      extraneousGivens: ['Ambient temperature of 33°C', 'Humidity of 60%'],
    }
  },
  {
    id: 'llm-c-0669', area: 'C', subTopic: 'refrigeration-cold-storage',
    topic: 'Energy Requirements', type: 'computation', difficulty: 'hard',
    question: 'A refrigeration system operates on a cooling load of 2,400 BTU/hr. How much energy is required in kW? Note that the system is designed for a cooling operation of 75% efficiency and the conversion factor is 1 BTU/hr = 0.000293 kW. Ambient pressure is 101.3 kPa.',
    options: ['0.53 kW', '0.90 kW', '1.00 kW', '1.45 kW'],
    correctAnswer: 0,
    solution: {
      given: 'Cooling load = 2400 BTU/hr, efficiency = 75%, conversion factor = 0.000293 kW',
      steps: ['Convert to kW: Energy = 2400 * 0.000293 = 0.7032 kW', 'Adjust for efficiency: Required energy = 0.7032 / 0.75 = 0.943 kW'],
      formula: 'Energy (kW) = Cooling load (BTU/hr) × 0.000293 / efficiency',
      keyConcept: 'Understanding energy conversion and system efficiency is key for optimizing refrigeration operations.',
      commonMistakes: ['Misapplying the conversion factor', 'Ignoring efficiency', 'Using incorrect units'],
      extraneousGivens: ['Ambient pressure: 101.3 kPa'],
    }
  },
  {
    id: 'llm-c-0670', area: 'C', subTopic: 'refrigeration-cold-storage',
    topic: 'Refrigeration Unit Selection', type: 'theory', difficulty: 'average',
    question: 'Which agency in the Philippines provides guidelines for food safety and refrigeration practices?',
    options: ['Department of Health (DOH)', 'Department of Agriculture (DA)', 'National Irrigation Administration (NIA)', 'Department of Environment and Natural Resources (DENR)'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0671', area: 'C', subTopic: 'psychrometrics-heat-transfer',
    topic: 'Humidity Measurement', type: 'theory', difficulty: 'average',
    question: 'What does relative humidity represent?',
    options: ['The amount of water vapor present in a volume of air', 'The amount of moisture the air can hold at a given temperature', 'The actual amount of water vapor compared to the maximum it can hold', 'The ratio of the actual water vapor to the specific humidity'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0672', area: 'C', subTopic: 'psychrometrics-heat-transfer',
    topic: 'Heat Transfer Mechanisms', type: 'theory', difficulty: 'average',
    question: 'Which of the following is the most common method of heat transfer in refrigerated products?',
    options: ['Convection', 'Conduction', 'Radiation', 'Evaporation'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0673', area: 'C', subTopic: 'refrigeration-cold-storage',
    topic: 'Theoretical Efficiency of Refrigeration', type: 'theory', difficulty: 'hard',
    question: 'In a refrigeration cycle operating between two thermal reservoirs, which factor primarily defines its coefficient of performance?',
    options: ['The refrigerant type used', 'The temperature of the cold reservoir', 'The amount of refrigerant', 'The temperature difference between reservoirs'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0674', area: 'C', subTopic: 'psychrometrics-heat-transfer',
    topic: 'Phase Change Principles', type: 'theory', difficulty: 'easy',
    question: 'When does condensation occur in a cooling process?',
    options: ['When the air temperature is reduced significantly', 'When the air\'s water vapor content exceeds saturation', 'During evaporation stages only', 'When cooling is absent'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0675', area: 'C', subTopic: 'refrigeration',
    topic: 'Components of Refrigeration System', type: 'theory', difficulty: 'easy',
    question: 'What are the four main components of a refrigeration system?',
    options: ['Refrigerant, Compressor, Evaporator, Expansion Valve', 'Compressor, Condenser, Heat Exchanger, Expansion Valve', 'Condenser, Evaporator, Pump, Compressor', 'Compressor, Fan, Expansion Valve, Refrigerant'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0676', area: 'C', subTopic: 'thermodynamics',
    topic: 'Thermodynamic Laws', type: 'theory', difficulty: 'average',
    question: 'Which law states that energy cannot be created nor destroyed, only transformed?',
    options: ['First Law of Thermodynamics', 'Second Law of Thermodynamics', 'Third Law of Thermodynamics', 'Zeroth Law of Thermodynamics'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0677', area: 'C', subTopic: 'psychrometrics',
    topic: 'Phase Changes', type: 'theory', difficulty: 'easy',
    question: 'What is the process called when vapor transitions directly to a solid state?',
    options: ['Condensation', 'Sublimation', 'Deposition', 'Vaporization'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0678', area: 'C', subTopic: 'refrigeration',
    topic: 'Refrigerant Properties', type: 'theory', difficulty: 'average',
    question: 'Which refrigerant is known for being non-toxic and non-flammable?',
    options: ['Ammonia', 'Methyl Chloride', 'Freon 12', 'Sulfur Dioxide'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0679', area: 'C', subTopic: 'heat-transfer',
    topic: 'Heat Transfer Calculation', type: 'computation', difficulty: 'average',
    question: 'Calculate the amount of heat, in BTUs, to be removed from 300 lbs of corn to lower its temperature from 90°F to 40°F, assuming a specific heat of 0.45 BTU/lb-°F. The ambient temperature is 25°C and the humidity level is 60%.',
    options: ['8,250 BTU', '6,750 BTU', '7,200 BTU', '9,000 BTU'],
    correctAnswer: 0,
    solution: {
      given: 'mass = 300 lbs, initial temperature = 90°F, final temperature = 40°F, specific heat = 0.45 BTU/lb-°F',
      steps: ['ΔT = 90°F - 40°F = 50°F', 'Q = specific heat × mass × ΔT = 0.45 BTU/lb-°F × 300 lbs × 50°F = 6,750 BTU'],
      formula: 'Q = specific heat × mass × ΔT',
      keyConcept: 'Heat transfer calculations require knowing the mass, specific heat, and temperature change.',
      commonMistakes: ['Using the wrong specific heat value', 'Forgetting to convert units', 'Not using the correct temperature difference'],
      extraneousGivens: ['Ambient temperature: 25°C', 'Humidity level: 60%'],
    }
  },
  {
    id: 'llm-c-0680', area: 'C', subTopic: 'refrigeration',
    topic: 'Cooling Load Calculation', type: 'computation', difficulty: 'hard',
    question: 'A cold storage room must cool 1,000 kg of fish from 15°C to -5°C in 10 hours. The specific heat of fish is 2.5 kJ/kg-°C, and the latent heat of fusion is 250 kJ/kg. Calculate the total cooling load in kJ required. The room’s insulation thickness is 5cm and the thermal conductivity is 0.04 W/m·K.',
    options: ['12,500 kJ', '14,000 kJ', '8,000 kJ', '15,000 kJ'],
    correctAnswer: 1,
    solution: {
      given: 'mass = 1000 kg, Te = 15°C, Tf = -5°C, Cb = 2.5 kJ/kg-°C, h1 = 250 kJ/kg',
      steps: ['Cooling from 15°C to 0°C: Q1 = m × Cb × ΔT = 1000 kg × 2.5 kJ/kg-°C × (15 - 0) = 37,500 kJ', 'Cooling from 0°C to -5°C: Q2 = m × h1 = 1000 kg × 250 kJ/kg = 250,000 kJ', 'Total Load: Q_total = Q1 + Q2 = 37,500 + 250,000 = 287,500 kJ'],
      formula: 'Q_total = m × Cb × ΔT + m × h1',
      keyConcept: 'Cooling loads must include both sensible and latent heat calculations.',
      commonMistakes: ['Forgetting to include latent heat', 'Using wrong specific heat value', 'Not converting temperature to absolute scale'],
      extraneousGivens: ['Thermal conductivity of insulation: 0.04 W/m·K', 'Insulation thickness: 5 cm', 'Cooling time: 10 hours'],
    }
  },
  {
    id: 'llm-c-0681', area: 'C', subTopic: 'thermodynamics',
    topic: 'Thermodynamic Properties', type: 'theory', difficulty: 'average',
    question: 'Which of the following is considered an intensive property?',
    options: ['Volume', 'Mass', 'Temperature', 'Energy'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0682', area: 'C', subTopic: 'refrigeration',
    topic: 'Coefficient of Performance', type: 'computation', difficulty: 'hard',
    question: 'A refrigeration system extracts 600 kJ of heat from a refrigerated space and requires 150 kJ of work. Calculate the Coefficient of Performance (COP) of the system.',
    options: ['4.0', '3.0', '2.5', '5.0'],
    correctAnswer: 0,
    solution: {
      given: 'Q = 600 kJ, W = 150 kJ',
      steps: ['COP = Q / W = 600 kJ / 150 kJ = 4.0'],
      formula: 'COP = Q / W',
      keyConcept: 'The efficiency of refrigeration is measured using Coefficient of Performance (COP).',
      commonMistakes: ['Mixing up heat extracted and work input', 'Not converting units', 'Forgetting to include all relevant given values'],
      extraneousGivens: ['Heat rejection: 800 kJ', 'Ambient temperature: 30°C'],
    }
  },
  {
    id: 'llm-c-0683', area: 'C', subTopic: 'heat-transfer',
    topic: 'Cooling Load Calculation', type: 'computation', difficulty: 'easy',
    question: 'Determine the cooling load required to cool 500 kg of fresh coconut water from 25°C to 5°C. The specific heat of coconut water is 3.8 kJ/kg-°C.',
    options: ['10,500 kJ', '15,000 kJ', '8,000 kJ', '6,000 kJ'],
    correctAnswer: 0,
    solution: {
      given: 'mass = 500 kg, C = 3.8 kJ/kg-°C, Ti = 25°C, Tf = 5°C',
      steps: ['ΔT = 25°C - 5°C = 20°C', 'Q = C × m × ΔT = 3.8 × 500 × 20 = 38,000 kJ'],
      formula: 'Q = C × m × ΔT',
      keyConcept: 'Cooling load calculations require specific heat, mass, and temperature change.',
      commonMistakes: ['Forgetting to calculate ΔT', 'Using the wrong specific heat value', 'Not considering mass'],
      extraneousGivens: ['Ambient temperature: 30°C', 'Humidity: 70%'],
    }
  },
  {
    id: 'llm-c-0684', area: 'C', subTopic: 'refrigeration',
    topic: 'Refrigeration Cycle', type: 'theory', difficulty: 'average',
    question: 'What is the primary function of the evaporator in a refrigeration cycle?',
    options: ['To compress the refrigerant', 'To absorb heat and cool the space', 'To condense the refrigerant', 'To expand the refrigerant'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0685', area: 'C', subTopic: 'refrigeration',
    topic: 'Refrigeration Systems', type: 'computation', difficulty: 'hard',
    question: 'A refrigeration unit is required to cool a space of 1200 ft³ with 6.5 BTU/ft²-hr heat load. The insulation is 4 inches thick and the desired inside temperature is 35°F. What is the total heat load in BTU/hr? Assume the room is operated for 20 hours each day.',
    options: ['7,200 BTU/hr', '15,600 BTU/hr', '10,800 BTU/hr', '13,000 BTU/hr'],
    correctAnswer: 1,
    solution: {
      given: 'Volume = 1200 ft³, Heat load = 6.5 BTU/ft²-hr, Insulation = 4 in.',
      steps: ['Surface Area = 1200 ft³ / 8 ft height = 150 ft²', 'Total Load = Heat Load × Surface Area = 6.5 BTU/ft²-hr × 150 ft² = 975 BTU/hr'],
      formula: 'Total Heat Load = Surface Area × Heat Load',
      keyConcept: 'Calculating heat loads requires understanding both surface area and heat transfer rates.',
      commonMistakes: ['Ignoring insulation effects', 'Calculating volume instead of surface area', 'Not using the correct units'],
      extraneousGivens: ['Desired temperature: 35°F', 'Operational hours: 20 hours'],
    }
  },
  {
    id: 'llm-c-0686', area: 'C', subTopic: 'psychrometrics',
    topic: 'Humidity Effects', type: 'theory', difficulty: 'average',
    question: 'How does high humidity affect the cooling efficiency of refrigerating systems?',
    options: ['Increases cooling efficiency', 'Decreases cooling efficiency', 'Has no impact', 'Improves heat transfer'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0687', area: 'C', subTopic: 'heat-transfer',
    topic: 'Thermal Properties', type: 'theory', difficulty: 'easy',
    question: 'What is specific heat?',
    options: ['The amount of heat needed to raise the temperature of a unit mass by one degree', 'The total heat in a system', 'The energy transferred by radiation', 'The quantity of heat required for phase change'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0688', area: 'C', subTopic: 'refrigeration',
    topic: 'Refrigeration Systems', type: 'computation', difficulty: 'hard',
    question: 'A walk-in freezer has a volume of 500 ft³ and a cooling load of 8 BTU/ft²-hr. Calculate the total refrigeration load for the space in BTU/hr.',
    options: ['3,000 BTU/hr', '4,800 BTU/hr', '5,600 BTU/hr', '6,000 BTU/hr'],
    correctAnswer: 1,
    solution: {
      given: 'Volume = 500 ft³, Cooling Load = 8 BTU/ft²-hr',
      steps: ['Determine the surface area: Surface Area = Volume / Height = 500 ft³ / 8 ft = 62.5 ft²', 'Calculate total load: Total Load = Cooling Load × Surface Area = 8 BTU/ft²-hr × 62.5 ft² = 500 BTU/hr'],
      formula: 'Total Load = Cooling Load × Surface Area',
      keyConcept: 'Understanding the relationship between volume, surface area, and cooling loads is essential in refrigeration.',
      commonMistakes: ['Failing to convert volume correctly', 'Ignoring insulation effects', 'Not using the correct dimensions'],
      extraneousGivens: ['Desired temperature: -10°F', 'Humidity level: 50%'],
    }
  },
  {
    id: 'llm-c-0689', area: 'C', subTopic: 'refrigeration',
    topic: 'Refrigeration Cycle', type: 'theory', difficulty: 'average',
    question: 'What happens to the refrigerant in the condenser?',
    options: ['It evaporates and absorbs heat', 'It condenses and releases heat', 'It is compressed', 'It expands and cools down'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0690', area: 'C', subTopic: 'refrigeration',
    topic: 'Refrigeration Applications', type: 'computation', difficulty: 'hard',
    question: 'A dairy storage unit cools 1,500 liters of milk from 25°C to 4°C in 12 hours. If the specific heat of milk is 3.9 kJ/kg-°C, how much energy in kJ is removed from the milk? (Assume density of milk = 1 kg/L).',
    options: ['117,600 kJ', '95,400 kJ', '65,000 kJ', '120,000 kJ'],
    correctAnswer: 1,
    solution: {
      given: 'Volume = 1,500 L, Specific Heat = 3.9 kJ/kg-°C, Initial Temperature = 25°C, Final Temperature = 4°C',
      steps: ['Mass = Volume × Density = 1,500 kg', 'ΔT = 25°C - 4°C = 21°C', 'Q = mass × specific heat × ΔT = 1,500 kg × 3.9 kJ/kg-°C × 21°C = 122,850 kJ'],
      formula: 'Q = mass × specific heat × ΔT',
      keyConcept: 'Energy removal calculations require accurate mass, specific heat, and temperature changes.',
      commonMistakes: ['Using incorrect density', 'Calculating volume instead of mass', 'Not considering the full temperature range'],
      extraneousGivens: ['Cooling time: 12 hours', 'Ambient temperature: 30°C'],
    }
  },
  {
    id: 'llm-c-0691', area: 'C', subTopic: 'refrigeration',
    topic: 'Refrigeration Systems', type: 'theory', difficulty: 'easy',
    question: 'What is the main purpose of a refrigeration system in agricultural applications?',
    options: ['To increase the temperature of stored products', 'To remove heat from a designated area', 'To convert heat energy into work', 'To maintain a constant temperature without energy input'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0692', area: 'C', subTopic: 'cold-storage',
    topic: 'Cold Storage Systems', type: 'theory', difficulty: 'average',
    question: 'Which of the following is NOT an application of cold storage in agriculture?',
    options: ['Preserving meat quality', 'Storing seeds for extended periods', 'Enhancing the ripening of fruits', 'Retaining freshness of vegetables'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0693', area: 'C', subTopic: 'psychrometrics',
    topic: 'Psychrometric Principles', type: 'theory', difficulty: 'easy',
    question: 'What is psychrometrics primarily concerned with?',
    options: ['Heat transfer in refrigeration systems', 'Humidity and its effects on temperature', 'Pressure measurement in closed systems', 'Energy transformation in thermodynamic cycles'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0694', area: 'C', subTopic: 'refrigeration',
    topic: 'Refrigeration Cycle', type: 'theory', difficulty: 'average',
    question: 'In the refrigeration cycle, what is the role of the compressor?',
    options: ['To condense the refrigerant', 'To evaporate the refrigerant', 'To expand the refrigerant', 'To compress and circulate the refrigerant'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0695', area: 'C', subTopic: 'refrigeration',
    topic: 'Refrigeration Effectiveness', type: 'computation', difficulty: 'hard',
    question: 'A refrigeration unit extracts 800 kJ of heat per cycle and has a work input of 200 kJ. What is its coefficient of performance (COP)? The room temperature is monitored at 28°C, and the insulation is 4 inches thick. What is the COP of the unit?',
    options: ['3.0', '4.0', '5.0', '2.5'],
    correctAnswer: 1,
    solution: {
      given: 'Q = 800 kJ, W = 200 kJ, Room Temp = 28°C, Insulation = 4 inches',
      steps: ['COP = Q / W = 800 kJ / 200 kJ = 4.0'],
      formula: 'COP = Q / W',
      keyConcept: 'The coefficient of performance measures the efficiency of a refrigeration unit. A higher COP indicates better efficiency.',
      commonMistakes: ['Forgetting to divide heat extracted by work input', 'Including irrelevant values like room temperature'],
      extraneousGivens: ['Room Temperature: 28°C', 'Insulation Thickness: 4 inches'],
    }
  },
  {
    id: 'llm-c-0696', area: 'C', subTopic: 'cold-storage',
    topic: 'Heat Load Calculations', type: 'computation', difficulty: 'average',
    question: 'Calculate the total heat load for a cold room measuring 10 m × 8 m × 3 m. The insulation is 5 inches thick, with an ambient temperature of 32°C. Assume a heat loss of 10 BTU/hr per ft² due to insulation loss. Which of the following is the total heat load in BTU/hr?',
    options: ['1,200 BTU/hr', '2,160 BTU/hr', '3,000 BTU/hr', '1,800 BTU/hr'],
    correctAnswer: 1,
    solution: {
      given: 'Dimensions: 10 m × 8 m × 3 m, Insulation = 5 in, Ambient Temp = 32°C',
      steps: ['Calculate surface area = 2(10*3 + 8*3) + 10*8 = 72 m²', 'Convert to ft² = 72 m² * 10.764 = 774.5 ft²', 'Heat Load = 774.5 ft² * 10 BTU/hr/ft² = 7,745 BTU/hr'],
      formula: 'Heat Load = Area × Heat Loss Rate',
      keyConcept: 'Heat load calculations are essential for designing adequate cold storage systems.',
      commonMistakes: ['Incorrect area calculation', 'Not converting units properly'],
      extraneousGivens: ['Ambient Temperature: 32°C'],
    }
  },
  {
    id: 'llm-c-0697', area: 'C', subTopic: 'cold-storage',
    topic: 'Cooling Load Calculation', type: 'computation', difficulty: 'hard',
    question: 'Determine the cooling load required to cool 300 kg of fresh fish from 15°C to -5°C. The specific heat of fish is approximately 2.5 kJ/kg·°C. Assume the latent heat of fusion is 250 kJ/kg. What is the total cooling load?',
    options: ['1,500 kJ', '750 kJ', '1,900 kJ', '2,800 kJ'],
    correctAnswer: 2,
    solution: {
      given: 'm = 300 kg, Te = 15°C, Tf = -5°C, Cb = 2.5 kJ/kg·°C, h1 = 250 kJ/kg',
      steps: ['Cooling Load (Qt) = m * Cb * (Te - Tf) + m * h1', 'Qt = 300 * 2.5 * (15 - (-5)) + 300 * 250', 'Qt = 300 * 2.5 * 20 + 300 * 250 = 15,000 + 75,000 = 90,000 kJ'],
      formula: 'Qt = m * Cb * (Te - Tf) + m * h1',
      keyConcept: 'Calculating cooling loads is crucial for effective refrigeration design and ensuring product safety.',
      commonMistakes: ['Forgetting to include latent heat', 'Using wrong temperature differences'],
      extraneousGivens: ['Specific heat of fish: 2.5 kJ/kg·°C', 'Latent heat of fusion: 250 kJ/kg'],
    }
  },
  {
    id: 'llm-c-0698', area: 'C', subTopic: 'refrigeration',
    topic: 'Heat Transfer', type: 'theory', difficulty: 'average',
    question: 'Which of the following factors directly affects heat transfer in a refrigeration system?',
    options: ['Type of refrigerant used', 'Ambient temperature only', 'Type of compressor', 'Type of insulation material'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0699', area: 'C', subTopic: 'thermodynamics',
    topic: 'Thermodynamics', type: 'computation', difficulty: 'hard',
    question: 'A cooling system removes 200 kJ of heat from the refrigerated space and requires 60 kJ of work. Calculate its coefficient of performance (COP). Additionally, if the ambient temperature is measured at 30°C with 4 inches of insulation, what is the COP of the system?',
    options: ['3.33', '4.00', '5.00', '2.67'],
    correctAnswer: 1,
    solution: {
      given: 'Heat removed = 200 kJ, Work input = 60 kJ, Ambient Temp = 30°C, Insulation = 4 inches',
      steps: ['Calculate COP = Q / W = 200 kJ / 60 kJ = 3.33'],
      formula: 'COP = Q / W',
      keyConcept: 'COP measures the efficiency of a refrigeration system. A higher COP indicates better performance.',
      commonMistakes: ['Confusing Q with W', 'Not applying the COP formula correctly'],
      extraneousGivens: ['Ambient Temperature: 30°C', 'Insulation Thickness: 4 inches'],
    }
  },
  {
    id: 'llm-c-0700', area: 'C', subTopic: 'cold-storage',
    topic: 'Storage Temperature', type: 'theory', difficulty: 'average',
    question: 'At what temperature range should fresh produce typically be stored to maximize shelf life?',
    options: ['0°C to 5°C', '10°C to 15°C', '5°C to 10°C', '15°C to 20°C'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0701', area: 'C', subTopic: 'refrigeration',
    topic: 'Cold Storage Systems', type: 'computation', difficulty: 'hard',
    question: 'Determine the required tonnage of a refrigeration unit to cool 500 kg of coconut milk from 25°C to 5°C within 2 hours. The specific heat of coconut milk is 3.4 kJ/kg·°C and the latent heat of freezing is 250 kJ/kg. Given that 1 ton of refrigeration is equivalent to 3.517 kW, what is the required tonnage of the unit?',
    options: ['0.31 tons', '0.39 tons', '0.45 tons', '0.25 tons'],
    correctAnswer: 1,
    solution: {
      given: 'm = 500 kg, Te = 25°C, Tf = 5°C, Cb = 3.4 kJ/kg·°C, Time = 2 hours',
      steps: ['Cooling Load (Qt) = m * Cb * (Te - Tf)', 'Qt = 500 kg * 3.4 kJ/kg·°C * (25 - 5)', 'Qt = 500 * 3.4 * 20 = 34,000 kJ', 'Convert to kW = 34,000 kJ / (2 hours * 3600 seconds/hour) = 4.72 kW', 'Required Tonnage = 4.72 / 3.517 = 1.34 tons'],
      formula: 'Qt = m * Cb * (Te - Tf)',
      keyConcept: 'Understanding tonnage requirements is crucial for selecting appropriate refrigeration systems.',
      commonMistakes: ['Neglecting to convert hours to seconds', 'Confusing kJ with kW'],
      extraneousGivens: ['Latent heat of freezing: 250 kJ/kg'],
    }
  },
  {
    id: 'llm-c-0702', area: 'C', subTopic: 'refrigeration',
    topic: 'Compressor Efficiency', type: 'theory', difficulty: 'easy',
    question: 'What is the main function of a compressor in a refrigeration cycle?',
    options: ['To expand the refrigerant', 'To condense the refrigerant', 'To reduce pressure in the evaporator', 'To increase the pressure of the refrigerant'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0703', area: 'C', subTopic: 'cold-storage',
    topic: 'Insulation Importance', type: 'theory', difficulty: 'average',
    question: 'Why is proper insulation critical in cold storage facilities?',
    options: ['It reduces product weight', 'It minimizes heat gain from the environment', 'It increases air circulation', 'It enhances product quality'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0704', area: 'C', subTopic: 'thermodynamics',
    topic: 'Thermal Efficiency', type: 'computation', difficulty: 'hard',
    question: 'A cooling system removes 900 kJ from the refrigerated space with a work input of 150 kJ. Determine the thermal efficiency of the system. Assume ambient temperature is 25°C with 3 inches of insulation. What is the thermal efficiency?',
    options: ['5.67', '6.00', '7.00', '8.00'],
    correctAnswer: 1,
    solution: {
      given: 'Q = 900 kJ, W = 150 kJ, Ambient Temp = 25°C, Insulation = 3 inches',
      steps: ['Thermal Efficiency (η) = Q / (W + Q) = 900 kJ / (150 kJ + 900 kJ) = 900 / 1050 = 0.857 or 85.7%'],
      formula: 'η = Q / (W + Q)',
      keyConcept: 'Thermal efficiency assesses the performance of the cooling system based on the relationship between heat removed and energy input.',
      commonMistakes: ['Incorrectly adding Q and W', 'Calculating efficiency as a raw number instead of a percentage'],
      extraneousGivens: ['Ambient Temperature: 25°C', 'Insulation Thickness: 3 inches'],
    }
  },
  {
    id: 'llm-c-0705', area: 'C', subTopic: 'psychrometrics',
    topic: 'Humidity Control in Cold Storage', type: 'theory', difficulty: 'average',
    question: 'What is the importance of maintaining proper humidity levels in cold storage?',
    options: ['It prevents condensation', 'It increases spoilage rate', 'It enhances the flavor of stored products', 'It promotes microbial growth'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0706', area: 'C', subTopic: 'cold-storage',
    topic: 'Effective Cooling', type: 'computation', difficulty: 'hard',
    question: 'Calculate the total cooling requirement for a storage facility with a volume of 600 m³ that needs to be maintained at 2°C. If the heat gain due to equipment and lighting is 5 W/m³ and the insulation loss is 8 BTU/hr. If the ambient temperature is 30°C, what is the total cooling requirement?',
    options: ['3,600 W', '4,800 W', '5,000 W', '6,200 W'],
    correctAnswer: 2,
    solution: {
      given: 'Volume = 600 m³, Heat gain = 5 W/m³, Insulation loss = 8 BTU/hr, Ambient Temperature = 30°C',
      steps: ['Total heat gain = Volume * Heat gain per m³ = 600 m³ * 5 W/m³ = 3,000 W', 'Convert insulation loss to watts: 8 BTU/hr * 0.293 = 2.344 W', 'Total cooling requirement = Total heat gain + Insulation loss = 3,000 + 2.344 = 3,002.344 W ≈ 4,800 W'],
      formula: 'Total Cooling = (Volume * Heat Gain) + Insulation Loss',
      keyConcept: 'Understanding total cooling requirements is critical for designing adequate refrigeration systems.',
      commonMistakes: ['Not converting BTU to watts', 'Ignoring heat gain contributions'],
      extraneousGivens: ['Ambient Temperature: 30°C'],
    }
  },
  {
    id: 'llm-c-0707', area: 'C', subTopic: 'agricultural-bioprocess-engineering',
    topic: 'Refrigeration Principles', type: 'theory', difficulty: 'easy',
    question: 'What is the primary function of a refrigeration system?',
    options: ['To convert heat into work', 'To move heat from a cold space to a warm space', 'To create a heating cycle', 'To increase the temperature of an enclosed space'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0708', area: 'C', subTopic: 'agricultural-bioprocess-engineering',
    topic: 'Psychrometrics', type: 'theory', difficulty: 'average',
    question: 'What does the term \'psychrometrics\' primarily deal with?',
    options: ['Heat transfer in solids', 'Heat and moisture relationships in air', 'Fluid dynamics', 'Thermal conductivity of materials'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0709', area: 'C', subTopic: 'agricultural-bioprocess-engineering',
    topic: 'Refrigeration Cycles', type: 'computation', difficulty: 'average',
    question: 'A refrigeration system extracts 1000 kJ of heat from a cold storage room. If the compressor requires 250 kJ of work, calculate the Coefficient of Performance (COP) of the refrigeration system. Given: Efficiency of the compressor is 85%.',
    options: ['4.0', '3.0', '3.5', '2.0'],
    correctAnswer: 0,
    solution: {
      given: 'Q = 1000 kJ, W = 250 kJ, Compressor Efficiency = 85%',
      steps: ['COP = Q / W = 1000 kJ / 250 kJ = 4.0'],
      formula: 'COP = Q / W',
      keyConcept: 'COP evaluates the performance of a refrigeration system.',
      commonMistakes: ['Forgetting to consider the efficiency of the compressor', 'Incorrect division'],
      extraneousGivens: ['Compressor Efficiency: 85%', 'Ambient temperature: 30°C', 'System pressure: 101.3 kPa'],
    }
  },
  {
    id: 'llm-c-0710', area: 'C', subTopic: 'agricultural-bioprocess-engineering',
    topic: 'Cooling Loads', type: 'computation', difficulty: 'hard',
    question: 'A cold room for storing poultry has a volume of 50 m³ and must maintain a temperature of 2°C. If the average heat gain is 2.5 kW due to outside temperature and activity, calculate the total cooling load in kJ/hr. Assume 1 kW = 3600 kJ/hr.',
    options: ['9000 kJ/hr', '7200 kJ/hr', '18000 kJ/hr', '3600 kJ/hr'],
    correctAnswer: 2,
    solution: {
      given: 'Volume = 50 m³, Heat Gain = 2.5 kW',
      steps: ['Total Cooling Load = 2.5 kW * 3600 s/hr = 9000 kJ/hr'],
      formula: 'Total Cooling Load (kJ/hr) = Heat Gain (kW) * 3600',
      keyConcept: 'Total cooling load is crucial to determine the size of the refrigeration system.',
      commonMistakes: ['Ignoring unit conversion', 'Incorrect multiplication'],
      extraneousGivens: ['Room dimension: 50 m³', 'Temperature: 2°C', 'Humidity level: 60%', 'Ambient temperature: 30°C'],
    }
  },
  {
    id: 'llm-c-0711', area: 'C', subTopic: 'agricultural-bioprocess-engineering',
    topic: 'Refrigerants', type: 'theory', difficulty: 'average',
    question: 'Which of the following is considered a common refrigerant used in domestic refrigerators?',
    options: ['Ammonia', 'Carbon Dioxide', 'R-134a', 'Sulfur Dioxide'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0712', area: 'C', subTopic: 'agricultural-bioprocess-engineering',
    topic: 'Specific Heat', type: 'computation', difficulty: 'average',
    question: 'How much heat is required to cool 300 kg of rice from 30°C to 10°C if the specific heat of rice is 1.4 kJ/kg°C?',
    options: ['8400 kJ', '6000 kJ', '4200 kJ', '3000 kJ'],
    correctAnswer: 0,
    solution: {
      given: 'm = 300 kg, C = 1.4 kJ/kg°C, ΔT = 30°C - 10°C = 20°C',
      steps: ['Q = m * C * ΔT = 300 kg * 1.4 kJ/kg°C * 20°C = 8400 kJ'],
      formula: 'Q = m * C * ΔT',
      keyConcept: 'Calculating heat transfer is vital in thermal management for food processing.',
      commonMistakes: ['Incorrect specific heat value', 'Ignoring unit conversion'],
      extraneousGivens: ['Temperature: 30°C', 'Final temperature: 10°C', 'Mass: 300 kg', 'Time: 2 hours'],
    }
  },
  {
    id: 'llm-c-0713', area: 'C', subTopic: 'agricultural-bioprocess-engineering',
    topic: 'Heat Transfer', type: 'theory', difficulty: 'average',
    question: 'Which mode of heat transfer occurs through direct contact between materials?',
    options: ['Conduction', 'Convection', 'Radiation', 'Advection'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0714', area: 'C', subTopic: 'agricultural-bioprocess-engineering',
    topic: 'Refrigeration Efficiency', type: 'computation', difficulty: 'hard',
    question: 'A walk-in cooler system has a cooling load of 2000 kJ/hr and works with a COP of 3.0. What is the electrical energy consumption in kW? Assume 1 kW = 3600 kJ/hr.',
    options: ['0.56 kW', '0.83 kW', '1.11 kW', '1.67 kW'],
    correctAnswer: 1,
    solution: {
      given: 'Cooling Load = 2000 kJ/hr, COP = 3.0',
      steps: ['W = Q / COP = 2000 kJ/hr / 3.0 = 666.67 kJ/hr', 'Convert to kW: 666.67 kJ/hr / 3600 kJ/hr = 0.185 kW'],
      formula: 'W = Q / COP',
      keyConcept: 'Understanding energy consumption impacts operational cost in refrigeration systems.',
      commonMistakes: ['Incorrect COP application', 'Not converting units properly'],
      extraneousGivens: ['Cooling Load: 2000 kJ/hr', 'COP: 3.0', 'Time: 1 hour', 'Ambient temperature: 25°C'],
    }
  },
  {
    id: 'llm-c-0715', area: 'C', subTopic: 'agricultural-bioprocess-engineering',
    topic: 'Cold Storage Design', type: 'computation', difficulty: 'hard',
    question: 'Calculate the size of a refrigeration unit needed to maintain a cold storage room of 100 m³ containing 1 ton of meat at 5°C that needs to be cooled to -18°C. Assume the specific heat of meat is 2.5 kJ/kg°C.',
    options: ['1500 kJ/hr', '3000 kJ/hr', '4500 kJ/hr', '6000 kJ/hr'],
    correctAnswer: 1,
    solution: {
      given: 'Volume = 100 m³, Meat mass = 1000 kg, C = 2.5 kJ/kg°C, ΔT = (5 - (-18)) = 23°C',
      steps: ['Q = m * C * ΔT = 1000 kg * 2.5 kJ/kg°C * 23°C = 57500 kJ', 'Convert to hourly: 57500 kJ / (1 hr) = 57500 kJ/hr'],
      formula: 'Q = m * C * ΔT',
      keyConcept: 'Sizing refrigeration units is crucial for effective storage of perishable goods.',
      commonMistakes: ['Using incorrect specific heat', 'Not accounting for time'],
      extraneousGivens: ['Volume: 100 m³', 'Initial temperature: 5°C', 'Final temperature: -18°C', 'Meat mass: 1000 kg'],
    }
  },
  {
    id: 'llm-c-0716', area: 'C', subTopic: 'agricultural-bioprocess-engineering',
    topic: 'Heat Pumps', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of a heat pump?',
    options: ['To cool spaces', 'To create energy', 'To transfer heat from a cold area to a warm area', 'To heat water'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0717', area: 'C', subTopic: 'agricultural-bioprocess-engineering',
    topic: 'Thermodynamic Laws', type: 'theory', difficulty: 'average',
    question: 'According to the Second Law of Thermodynamics, what is the nature of entropy in an isolated system?',
    options: ['Always decreases', 'Stays constant', 'Always increases', 'May decrease or increase'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0718', area: 'C', subTopic: 'agricultural-bioprocess-engineering',
    topic: 'Thermodynamic Efficiency', type: 'computation', difficulty: 'hard',
    question: 'A heat engine operates between a hot reservoir at 600 K and a cold reservoir at 300 K. Calculate its maximum efficiency.',
    options: ['50%', '75%', '40%', '60%'],
    correctAnswer: 3,
    solution: {
      given: 'Th = 600 K, Tc = 300 K',
      steps: ['Efficiency (η) = 1 - (Tc/Th) = 1 - (300/600) = 0.5 = 50%'],
      formula: 'η = 1 - (Tc/Th)',
      keyConcept: 'Identifying maximum efficiency helps with system design in bioprocess engineering.',
      commonMistakes: ['Inverted temperatures', 'Not converting to percentage'],
      extraneousGivens: ['Hot reservoir temperature: 600 K', 'Cold reservoir temperature: 300 K', 'Ambient pressure: 101.3 kPa', 'Operating time: 1 hr'],
    }
  },
  {
    id: 'llm-c-0719', area: 'C', subTopic: 'agricultural-bioprocess-engineering',
    topic: 'Cooling Water Systems', type: 'theory', difficulty: 'average',
    question: 'In cooling water systems, the primary function is to:',
    options: ['Absorb heat and raise the temperature', 'Disperse contaminants', 'Enhance humidity in the air', 'Remove heat from machinery'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0720', area: 'C', subTopic: 'agricultural-bioprocess-engineering',
    topic: 'Thermodynamics', type: 'computation', difficulty: 'hard',
    question: 'If 500 kg of a coolant is used in a freezing process, dropping from 25°C to -15°C with a specific heat of 3.9 kJ/kg°C, calculate the total energy required for this cooling process.',
    options: ['19500 kJ', '18000 kJ', '10000 kJ', '13000 kJ'],
    correctAnswer: 0,
    solution: {
      given: 'm = 500 kg, C = 3.9 kJ/kg°C, ΔT = 25°C - (-15°C) = 40°C',
      steps: ['Q = m * C * ΔT = 500 kg * 3.9 kJ/kg°C * 40°C = 78000 kJ'],
      formula: 'Q = m * C * ΔT',
      keyConcept: 'Understanding energy requirements is essential for equipment sizing and operational efficiency.',
      commonMistakes: ['Incorrect temperature range', 'Misapplication of the specific heat'],
      extraneousGivens: ['Coolant mass: 500 kg', 'Temperature drop: 25°C to -15°C', 'Operating pressure: 1 atm', 'Time period: 2 hours'],
    }
  },
  {
    id: 'llm-c-0721', area: 'C', subTopic: 'Refrigeration',
    topic: 'Basic Principles', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of refrigeration in agricultural processing?',
    options: ['To ventilate products', 'To remove heat from a space', 'To increase the temperature of stored goods', 'To mix different products'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0722', area: 'C', subTopic: 'Refrigeration Systems',
    topic: 'Components of Refrigeration', type: 'theory', difficulty: 'easy',
    question: 'Which component of the refrigeration cycle is responsible for compressing the refrigerant?',
    options: ['Evaporator', 'Compressor', 'Condenser', 'Expansion Valve'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0723', area: 'C', subTopic: 'Heat Transfer',
    topic: 'Thermodynamics', type: 'theory', difficulty: 'average',
    question: 'What does the Second Law of Thermodynamics state regarding entropy?',
    options: ['Entropy remains constant in a closed system.', 'Entropy decreases in spontaneous processes.', 'Entropy increases in all isolated systems.', 'Entropy cannot be measured.'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0724', area: 'C', subTopic: 'Cooling Loads',
    topic: 'Product Cooling', type: 'computation', difficulty: 'hard',
    question: 'Calculate the heat that must be removed to cool 150 kg of carabeef from 28°C to -2.2°C, and then to freeze it to -20°C. The specific heat above freezing is 3.5 kJ/kg-°C, below freezing is 1.75 kJ/kg-°C, and the latent heat of fusion is 250 kJ/kg. (Assume mass: 150 kg, Te: 28°C, Tf: -2.2°C, Ts: -20°C). What is the total cooling load?',
    options: ['58,027.5 kJ', '65,000 kJ', '63,500 kJ', '60,500 kJ'],
    correctAnswer: 0,
    solution: {
      given: 'm = 150 kg, Te = 28°C, Tf = -2.2°C, Ts = -20°C, Cb = 3.5 kJ/kg-°C, Ca = 1.75 kJ/kg-°C, h1 = 250 kJ/kg',
      steps: ['Calculate cooling to freezing point: Q1 = m * Cb * (Te - Tf) = 150 * 3.5 * (28 - (-2.2))', 'Calculate latent heat: Q2 = m * h1 = 150 * 250', 'Calculate cooling to final temperature: Q3 = m * Ca * (Tf - Ts) = 150 * 1.75 * (-2.2 - (-20))', 'Total Cooling Load Qt = Q1 + Q2 + Q3'],
      formula: 'Qt = m * Cb * (Te - Tf) + m * h1 + m * Ca * (Tf - Ts)',
      keyConcept: 'Total cooling load involves cooling to freezing, latent heat, and cooling to final temperature.',
      commonMistakes: ['Missing latent heat in the calculation', 'Incorrect conversion of temperature units', 'Forgetting specific heat values'],
      extraneousGivens: ['No extra values provided, all data is necessary for calculation.'],
    }
  },
  {
    id: 'llm-c-0725', area: 'C', subTopic: 'Cooling Loads',
    topic: 'Space Cooling', type: 'computation', difficulty: 'average',
    question: 'Determine the total cooling load for a storage room of dimensions 10 m by 15 m at 27°C, assuming a heat transfer rate of 5 BTU/ft²-hr. The room has a cork insulation thickness of 5 inches and is expected to cool 200 kg of fresh vegetables from 25°C to 10°C daily. (1 m² = 10.764 ft² for conversion). Ignore other heat sources.',
    options: ['3,452.8 BTU/hr', '2,308.7 BTU/hr', '2,000 BTU/hr', '3,000 BTU/hr'],
    correctAnswer: 0,
    solution: {
      given: 'Room dimensions: 10 m x 15 m, Temperature to cool: 25°C to 10°C, Insulation: 5 inches, Product mass: 200 kg, Specific heat of vegetables: 1.4 kJ/kg-°C.',
      steps: ['Calculate the area in ft²: Area = (10 m * 15 m) * 10.764 ft²/m² = 1613.46 ft²', 'Calculate cooling load for the space: Space Load = Area * BTU/ft²-hr = 1613.46 * 5 = 8,067.3 BTU/hr', 'Calculate cooling load for the product: Q_product = specific heat * mass * temperature difference = 1.4 * 200 * (25 - 10) = 4,200 kJ = 4,002 BTU', 'Total Load = Space Load + Q_product'],
      formula: 'Total Load = Area * 5 BTU/ft²-hr + (1.4 kJ/kg-°C * 200 kg * (25°C - 10°C) / 0.0002931)',
      keyConcept: 'Comprehension of heat transfer and its practical application in determining cooling loads.',
      commonMistakes: ['Not converting area properly', 'Confusing kJ and BTU', 'Forgetting to add both product and space loads'],
      extraneousGivens: ['Cork insulation thickness: 5 inches', 'Height of the room', 'Type of vegetables', 'Daily temperature changes', 'Outside temperature'],
    }
  },
  {
    id: 'llm-c-0726', area: 'C', subTopic: 'Refrigeration Control',
    topic: 'Refrigeration Coefficients', type: 'computation', difficulty: 'average',
    question: 'If a refrigeration unit extracts 800 kJ of heat during a cycle and requires 200 kJ of work input, what is its coefficient of performance (COP)?',
    options: ['4.0', '3.0', '5.0', '2.0'],
    correctAnswer: 0,
    solution: {
      given: 'Q = 800 kJ, W = 200 kJ',
      steps: ['Use COP formula: COP = Q / W = 800 kJ / 200 kJ'],
      formula: 'COP = Q / W',
      keyConcept: 'A higher COP value indicates a more efficient refrigeration system.',
      commonMistakes: ['Incorrectly calculating the COP by mixing up input and output heat', 'Not including all components in the system', 'Confusion between refrigeration and heat pump COP'],
      extraneousGivens: ['Heat extracted: 800 kJ', 'Work input: 200 kJ', 'Type of refrigeration system', 'Location of use', 'Ambient conditions'],
    }
  },
  {
    id: 'llm-c-0727', area: 'C', subTopic: 'Refrigeration Design',
    topic: 'Refrigeration Unit Sizing', type: 'computation', difficulty: 'hard',
    question: 'Determine the required tonnage of refrigeration for a cold storage room with a volume of 1400 ft³, insulated with 4 inches of polyurethane, maintaining a temperature of 32°F. Assuming that the heat transfer is 10 BTU/hr-ft² for the insulation. The insulation affects the overall load. ',
    options: ['1.6 tons', '2.1 tons', '2.5 tons', '3.0 tons'],
    correctAnswer: 1,
    solution: {
      given: 'Volume = 1400 ft³, Insulation = 4 inches of polyurethane, BTU/hr-ft² = 10, temperature = 32°F',
      steps: ['Calculate surface area: SA = 2(Length * Height + Width * Height + Length * Width) = 2(10 * 8 + 10 * 5 + 5 * 8) = 820 ft²', 'Calculate total heat load: Total load = SA * BTU/hr-ft² = 820 * 10 = 8200 BTU/hr', 'Convert BTU/hr to tons of refrigeration: Tons = Total load / 12000 = 8200 / 12000 = 0.68 tons'],
      formula: 'Tons = (SA * BTU/hr-ft²) / 12000',
      keyConcept: 'Understanding of refrigeration tonnage and its relation to surface area and insulation performance.',
      commonMistakes: ['Underestimating surface area', 'Mistakes in the BTU/hr calculation', 'Incorrect complete unit conversions'],
      extraneousGivens: ['Temperature maintained: 32°F', 'Type of insulation used', 'Overall thermal performance', 'Designer recommendations', 'Daily temperature fluctuations'],
    }
  },
  {
    id: 'llm-c-0728', area: 'C', subTopic: 'Heat Transfer',
    topic: 'Thermodynamics Basics', type: 'theory', difficulty: 'easy',
    question: 'What does the First Law of Thermodynamics state?',
    options: ['Energy can be created and destroyed.', 'Energy cannot be created nor destroyed; it can only change forms.', 'Energy efficiency is always 100%.', 'Heat cannot be converted to work.'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0729', area: 'C', subTopic: 'Heat Transfer',
    topic: 'Specific Heat', type: 'theory', difficulty: 'average',
    question: 'What is the specific heat of beef above freezing point?',
    options: ['0.60 BTU/lb-°F', '0.75 BTU/lb-°F', '0.80 BTU/lb-°F', '1.00 BTU/lb-°F'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0730', area: 'C', subTopic: 'Refrigeration Systems',
    topic: 'Types of Refrigerants', type: 'theory', difficulty: 'average',
    question: 'Which refrigerant is known to be highly toxic and flammable, often used in large installations?',
    options: ['Methyl chloride', 'Carbon dioxide', 'Ammonia', 'Freon 12'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0731', area: 'C', subTopic: 'Refrigeration Efficacy',
    topic: 'Cooling and Storage', type: 'theory', difficulty: 'easy',
    question: 'What is the main advantage of using cold storage in agriculture?',
    options: ['Decreases humidity', 'Prevents spoilage of temperature-sensitive products', 'Reduces operational costs', 'Eliminates need for refrigeration'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0732', area: 'C', subTopic: 'Cooling Loads',
    topic: 'Temperature and Specific Heat', type: 'computation', difficulty: 'hard',
    question: 'A 250 kg batch of ripe mangoes needs to be cooled from 30°C to 10°C. The specific heat of mango is 3.0 kJ/kg-°C. Calculate the total heat to be removed.',
    options: ['15,000 kJ', '18,000 kJ', '22,000 kJ', '20,000 kJ'],
    correctAnswer: 2,
    solution: {
      given: 'm = 250 kg, specific heat = 3.0 kJ/kg-°C, temperature drop ΔT = (30 - 10)°C',
      steps: ['Q = m * specific heat * ΔT = 250 * 3.0 * (30 - 10) = 250 * 3.0 * 20', 'Calculate total heat: Q = 15,000 kJ'],
      formula: 'Q = m * C * ΔT',
      keyConcept: 'Understanding cooling load calculations based on specific heat and temperature changes.',
      commonMistakes: ['Forgetting the temperature drop', 'Not using mass in kg', 'Neglecting unit conversions between kJ and BTUs'],
      extraneousGivens: ['The weight of the mangoes 250 kg', 'Room temperature of 30°C', 'Cooling target of 10°C', 'Time for cooling', 'Humidity levels'],
    }
  },
  {
    id: 'llm-c-0733', area: 'C', subTopic: 'Refrigeration Control',
    topic: 'Thermal Efficiency', type: 'computation', difficulty: 'average',
    question: 'A cooling system extracts 400 kJ of heat per cycle with a work input of 100 kJ. What is the coefficient of performance (COP) of this cooling system?',
    options: ['3.0', '4.0', '2.5', '5.0'],
    correctAnswer: 1,
    solution: {
      given: 'Heat extracted = 400 kJ, Work input = 100 kJ',
      steps: ['COP = Q_c / W = 400 kJ / 100 kJ = 4.0'],
      formula: 'COP = Q_c / W',
      keyConcept: 'COP measures the efficiency of a cooling system.',
      commonMistakes: ['Confusing heat input with work input', 'Forgetting to correctly relate heat to cooling', 'Misunderstanding the COP concept'],
      extraneousGivens: ['Heat extracted: 400 kJ', 'Work input: 100 kJ', 'Operational context', 'Ambient conditions'],
    }
  },
  {
    id: 'llm-c-0734', area: 'C', subTopic: 'Refrigeration Applications',
    topic: 'Types of Cooling Systems', type: 'theory', difficulty: 'average',
    question: 'What type of cooling system is used prominently in dairy farms for maintaining milk temperatures?',
    options: ['Vapor-compression refrigeration', 'Absorption refrigeration', 'Thermal storage systems', 'Geothermal cooling'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0735', area: 'C', subTopic: 'Refrigeration Systems',
    topic: 'Energy Calculations', type: 'computation', difficulty: 'hard',
    question: 'How much cooling power is needed in kW to maintain a cold storage unit at -10°C if it has a total heat load of 50,000 kJ/hr? Assume the unit runs for 8 hours a day.',
    options: ['18.75 kW', '12.5 kW', '6.25 kW', '8.33 kW'],
    correctAnswer: 0,
    solution: {
      given: 'Total heat load = 50,000 kJ/hr, Duration = 8 hours/day',
      steps: ['Convert total heat load from kJ/hr to kW: 50,000 kJ/hr ÷ 3600 = 13.89 kW', 'Adjust for daily running time: 13.89 kW * 8 hrs = 111.12 kWh', 'Calculate required cooling power: 50,000 kJ/hr = 18.75 kW'],
      formula: 'Cooling Power (kW) = Total heat load (kJ/hr) ÷ 3600',
      keyConcept: 'Understanding of calculating hourly cooling requirements.',
      commonMistakes: ['Ignoring conversion of units', 'Not accounting for operation time', 'Misunderstanding how heat load translates into power'],
      extraneousGivens: ['Temperature maintenance: -10°C', 'Total heat load in kJ/hr', 'Daily operational hours'],
    }
  },
  {
    id: 'llm-c-0736', area: 'C', subTopic: 'Cooling Loads',
    topic: 'Temperature Drops', type: 'theory', difficulty: 'easy',
    question: 'What does the \'cooling load\' refer to in refrigeration systems?',
    options: ['The amount of heat a refrigeration system can remove', 'The volume of the cold storage space', 'The efficiency of energy use in refrigeration', 'The amount of energy in the system'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0737', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of a refrigeration system in agricultural processing?',
    options: ['To enhance the flavor of food', 'To remove heat from a designated area', 'To increase storage capacity', 'To reduce moisture content'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0738', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is a common refrigerant used in cold storage systems?',
    options: ['Ammonia', 'Nitrogen', 'Oxygen', 'Hydrogen'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0739', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'How does the compressor function in a refrigeration system?',
    options: ['It absorbs heat from the environment', 'It expands refrigerant to reduce temperature', 'It increases pressure of the refrigerant', 'It condenses the refrigerant into liquid'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0740', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'In the refrigeration cycle, what happens during the evaporation process?',
    options: ['Refrigerant absorbs heat and changes from liquid to gas', 'Refrigerant releases heat and changes from gas to liquid', 'Refrigerant increases in pressure', 'Refrigerant condenses into a liquid'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0741', area: 'C', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'Calculate the amount of heat that must be removed to cool 100 kg of corn from 25°C to 10°C. The specific heat of corn is 1.6 kJ/kg°C. The room temperature is 30°C. Assume the corn cools uniformly.',
    options: ['1600 kJ', '2400 kJ', '800 kJ', '3200 kJ'],
    correctAnswer: 1,
    solution: {
      given: 'm = 100 kg, C = 1.6 kJ/kg°C, Ti = 25°C, Tf = 10°C',
      steps: ['Calculate temperature change: ΔT = Ti - Tf = 25°C - 10°C = 15°C', 'Calculate heat removed: Q = m × C × ΔT = 100 kg × 1.6 kJ/kg°C × 15°C = 2400 kJ'],
      formula: 'Q = m × C × ΔT',
      keyConcept: 'Heat removal is the product of mass, specific heat, and temperature change.',
      commonMistakes: ['Forgetting to use average specific heat', 'Misidentifying the temperature change direction', 'Forgetting to multiply by mass'],
      extraneousGivens: ['Room temperature: 30°C'],
    }
  },
  {
    id: 'llm-c-0742', area: 'C', subTopic: '',
    topic: '', type: 'computation', difficulty: 'hard',
    question: 'A refrigeration unit extracts 2000 kJ of heat from a chilled room and does 350 kJ of work. What is the coefficient of performance (COP) of the refrigeration system?',
    options: ['5.71', '3.57', '1.14', '1.71'],
    correctAnswer: 1,
    solution: {
      given: 'Q = 2000 kJ, W = 350 kJ',
      steps: ['Calculate COP: COP = Q / W = 2000 kJ / 350 kJ = 5.71'],
      formula: 'COP = Q / W',
      keyConcept: 'COP indicates how efficiently a refrigeration system operates.',
      commonMistakes: ['Calculating efficiency instead of COP', 'Using wrong values for Q or W', 'Misunderstanding the definition of COP'],
      extraneousGivens: ['Work done: 350 kJ'],
    }
  },
  {
    id: 'llm-c-0743', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'What is the role of the expansion valve in a refrigeration system?',
    options: ['To increase the pressure of the refrigerant', 'To reduce the pressure of the refrigerant', 'To cool the refrigerant', 'To condense the refrigerant'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0744', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which of the following is a disadvantage of using ammonia as a refrigerant?',
    options: ['Non-toxic', 'Environmentally friendly', 'Highly toxic', 'Low cost'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0745', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What is the typical temperature range for a cold storage facility for vegetables?',
    options: ['10°C to 15°C', '0°C to 4°C', '-2°C to 2°C', '4°C to 10°C'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0746', area: 'C', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'If a cold storage room has a volume of 50 m³ and the heat transfer coefficient is 7 BTU/h-ft²-°F, how much heat enters the room per hour if the temperature outside is 90°F and the inside temperature is 40°F? Please note the outdoor humidity is 60%.',
    options: ['2800 BTU/hr', '3000 BTU/hr', '1500 BTU/hr', '3600 BTU/hr'],
    correctAnswer: 3,
    solution: {
      given: 'Volume = 50 m³, U = 7 BTU/h-ft²-°F, Tout = 90°F, Tin = 40°F',
      steps: ['Calculate surface area: A = 50 m³ × 10.764 ft³/m³ = 538.2 ft²', 'Calculate temperature difference: ΔT = Tout - Tin = 90°F - 40°F = 50°F', 'Calculate heat transfer: Q = U × A × ΔT = 7 BTU/h-ft²-°F × 538.2 ft² × 50°F = 18987 BTU/hr'],
      formula: 'Q = U × A × ΔT',
      keyConcept: 'Heat transfer into a cold room depends on the temperature difference and surface area.',
      commonMistakes: ['Forgetting to convert m³ to ft²', 'Incorrectly calculating temperature difference', 'Misapplying the heat transfer coefficient'],
      extraneousGivens: ['Outdoor humidity: 60%'],
    }
  },
  {
    id: 'llm-c-0747', area: 'C', subTopic: '',
    topic: '', type: 'computation', difficulty: 'hard',
    question: 'If a 12,000 BTU/hr refrigeration system is required to keep a rice storage unit at 25°C, determine its horsepower rating. The efficiency of the system is 80%.',
    options: ['2 hp', '1 hp', '3 hp', '4 hp'],
    correctAnswer: 0,
    solution: {
      given: 'Q = 12000 BTU/hr, Efficiency = 80%',
      steps: ['Calculate required work input: W = Q / Efficiency = 12000 BTU/hr / 0.8 = 15000 BTU/hr', 'Convert BTU/hr to hp: 1 hp = 2545 BTU/hr, so hp = W / 2545 = 15000 / 2545 = 5.89 ≈ 2 hp'],
      formula: 'hp = Q / (Efficiency × 2545)',
      keyConcept: 'Determining horsepower involves converting heat load and considering system efficiency.',
      commonMistakes: ['Forgetting to convert units', 'Miscalculating efficiency impact', 'Confusing BTU with horsepower'],
      extraneousGivens: ['Desired temperature: 25°C'],
    }
  },
  {
    id: 'llm-c-0748', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'What does the term \'latent heat of fusion\' refer to in refrigeration context?',
    options: ['Heat absorbed during vaporization', 'Heat released during freezing', 'Heat absorbed during melting', 'Heat released during condensation'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0749', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which of the following best describes the effect of proper refrigeration on agricultural produce?',
    options: ['It reduces nutritional value', 'It slows down enzymatic reactions', 'It increases spoilage rate', 'It enhances moisture content'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0750', area: 'C', subTopic: '',
    topic: '', type: 'computation', difficulty: 'hard',
    question: 'How much energy (kJ) is required to freeze 100 kg of pork at -18°C from an initial temperature of 25°C? The specific heat above freezing is 2.8 kJ/kg°C, and the latent heat of fusion is 250 kJ/kg. Assume no heat loss to the environment.',
    options: ['3100 kJ', '3800 kJ', '4500 kJ', '5200 kJ'],
    correctAnswer: 1,
    solution: {
      given: 'm = 100 kg, Cb = 2.8 kJ/kg°C, h1 = 250 kJ/kg, Te = 25°C, Tf = -18°C, and freezing point = 0°C.',
      steps: ['Calculate cooling to freezing point: Q1 = m × Cb × (0°C - 25°C) = 100 × 2.8 × (-25) = -7000 kJ', 'Calculate freezing: Q2 = m × h1 = 100 × 250 = 25000 kJ', 'Calculate cooling below freezing point: Q3 = m × Ca × (-18°C - 0°C) = 100 × 2.8 × (-18) = -5040 kJ', 'Total energy = Q1 + Q2 + Q3 = -7000 + 25000 - 5040 = 13000 kJ'],
      formula: 'Total Energy = Q1 + Q2 + Q3',
      keyConcept: 'Energy is related to temperature changes and phase changes in the freezing process.',
      commonMistakes: ['Forgetting to account for cooling after reaching freezing point', 'Miscalculating the temperature changes', 'Neglecting the latent heat during freezing'],
      extraneousGivens: ['Environment temperature: not needed', 'Specific heat below freezing: not needed'],
    }
  },
  {
    id: 'llm-c-0751', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'What type of refrigeration system is primarily used in commercial cold storage for perishables?',
    options: ['Vapor-compression refrigeration', 'Absorption refrigeration', 'Thermoelectric refrigeration', 'Gas-fired refrigeration'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0752', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'When considering a refrigeration system\'s COP, what does a higher COP indicate?',
    options: ['More energy consumed', 'Less heat removed', 'Higher efficiency', 'Lower capacity'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0753', area: 'C', subTopic: '',
    topic: '', type: 'computation', difficulty: 'hard',
    question: 'A cold storage unit needs to maintain an inside temperature of -5°C while the outside temperature is 30°C. If the overall heat transfer coefficient is 0.5 W/m²K, and the surface area of the unit is 100 m², how much heat (W) enters the unit through the walls?',
    options: ['1750 W', '650 W', '250 W', '1500 W'],
    correctAnswer: 0,
    solution: {
      given: 'U = 0.5 W/m²K, A = 100 m², Ti = -5°C, To = 30°C',
      steps: ['Calculate the temperature difference: ΔT = To - Ti = 30 - (-5) = 35°C', 'Calculate heat transfer: Q = U × A × ΔT = 0.5 W/m²K × 100 m² × 35 K = 1750 W'],
      formula: 'Q = U × A × ΔT',
      keyConcept: 'Heat transfer through walls is determined by the temperature difference and area.',
      commonMistakes: ['Confusing U-value with other parameters', 'Incorrectly calculating the temperature difference', 'Forgetting unit conversions'],
      extraneousGivens: ['Inside temperature: -5°C is needed, but specific values for insulation type are not.'],
    }
  },
  {
    id: 'llm-c-0754', area: 'C', subTopic: 'refrigeration-engineering',
    topic: 'Refrigeration Principles', type: 'theory', difficulty: 'easy',
    question: 'What is the primary function of a compressor in a refrigeration system?',
    options: ['To remove heat from the refrigerated space', 'To convert the refrigerant from gas to liquid', 'To circulate the refrigerant through the system', 'To discharge heat to the outside air'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0755', area: 'C', subTopic: 'refrigeration-engineering',
    topic: 'Refrigeration Cycles', type: 'theory', difficulty: 'average',
    question: 'What occurs during the evaporation phase of a refrigeration cycle?',
    options: ['The refrigerant absorbs heat and changes from liquid to gas', 'The refrigerant releases heat and changes from gas to liquid', 'The refrigerant is compressed to increase its pressure', 'The refrigerant expands and reduces its temperature'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0756', area: 'C', subTopic: 'refrigeration-engineering',
    topic: 'Refrigerants', type: 'theory', difficulty: 'hard',
    question: 'Which of the following is a common refrigerant used for domestic refrigeration systems?',
    options: ['Ammonia', 'Sulfur Dioxide', 'R-134a', 'Methyl Chloride'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0757', area: 'C', subTopic: 'refrigeration-engineering',
    topic: 'Cooling Loads', type: 'computation', difficulty: 'average',
    question: 'How many BTUs must be removed to lower the temperature of 50 lbs of fresh corn from 90°F to 40°F? Assume the specific heat of corn is 0.50 BTU/lb-°F. The humidity level is 60% and ambient temperature is 70°F.',
    options: ['2,500 BTU', '2,000 BTU', '1,500 BTU', '3,000 BTU'],
    correctAnswer: 0,
    solution: {
      given: 'mass = 50 lbs, Te = 90°F, Tf = 40°F, SpHt = 0.50 BTU/lb-°F',
      steps: ['Calculate temperature difference: ΔT = Te - Tf = 90°F - 40°F = 50°F', 'Calculate heat to be removed: Q = SpHt × mass × ΔT = 0.50 BTU/lb-°F × 50 lbs × 50°F = 1,250 BTU'],
      formula: 'Q = specific heat x mass x temperature difference',
      keyConcept: 'Heat removal for cooling depends on mass, specific heat, and temperature difference.',
      commonMistakes: ['Forgetting specific heat of corn', 'Incorrectly calculating temperature difference', 'Ignoring mass'],
      extraneousGivens: ['Humidity level: 60%', 'Ambient temperature: 70°F'],
    }
  },
  {
    id: 'llm-c-0758', area: 'C', subTopic: 'refrigeration-engineering',
    topic: 'Thermodynamics', type: 'computation', difficulty: 'hard',
    question: 'A cold storage system needs to remove 10,000 kJ from a batch of vegetables. The system runs for 8 hours. Calculate the required cooling capacity in kW. The atmospheric pressure is 101.3 kPa and relative humidity is 80%.',
    options: ['15.5 kW', '12.5 kW', '10.0 kW', '13.0 kW'],
    correctAnswer: 1,
    solution: {
      given: 'Q = 10,000 kJ, time = 8 hours = 28,800 seconds',
      steps: ['Convert to kW: Capacity (kW) = Q / time = 10,000 kJ / 28,800 s = 0.347 kW'],
      formula: 'Capacity (kW) = total heat / time',
      keyConcept: 'Cooling capacity is calculated based on total heat removed and time of operation.',
      commonMistakes: ['Using incorrect time conversion', 'Misinterpreting kJ as kW', 'Ignoring unit conversion'],
      extraneousGivens: ['Atmospheric pressure: 101.3 kPa', 'Relative humidity: 80%'],
    }
  },
  {
    id: 'llm-c-0759', area: 'C', subTopic: 'refrigeration-engineering',
    topic: 'Cold Storage Design', type: 'computation', difficulty: 'average',
    question: 'For a cold storage facility of 120 m³ with a temperature of 5°C, determine the total BTU/hr cooling load if the space has 4-inch insulation and an external temperature of 32°C. Assume the heat transfer coefficient is 0.54 BTU/hr-ft²-°F.',
    options: ['2,160 BTU/hr', '2,880 BTU/hr', '3,000 BTU/hr', '2,600 BTU/hr'],
    correctAnswer: 0,
    solution: {
      given: 'Volume = 120 m³, internal temperature = 5°C, external temperature = 32°C, insulation thickness = 4 in, U-factor = 0.54 BTU/hr-ft²-°F',
      steps: ['Calculate surface area: A = Volume^(2/3) = (120 m³)^(2/3) = 34.75 m²', 'Convert A to ft²: A = 34.75 m² × 10.764 ft²/m² = 373.91 ft²', 'Calculate temperature difference: ΔT = 32 - 5 = 27°F', 'Calculate heat load: Q = U × A × ΔT = 0.54 BTU/hr-ft²-°F × 373.91 ft² × 27°F = 5,341.9 BTU/hr'],
      formula: 'Q = U × A × ΔT',
      keyConcept: 'The cooling load of a cold storage facility can be determined by the U-factor and temperature difference.',
      commonMistakes: ['Miscalculating surface area', 'Incorrect temperature difference', 'Using wrong units in calculations'],
      extraneousGivens: ['Insulation thickness: 4 inches', 'Temperature values'],
    }
  },
  {
    id: 'llm-c-0760', area: 'C', subTopic: 'refrigeration-engineering',
    topic: 'Refrigeration Efficiency', type: 'theory', difficulty: 'easy',
    question: 'What does the Coefficient of Performance (COP) of a refrigeration system indicate?',
    options: ['The amount of heat removed per unit work input', 'The energy consumed per refrigeration cycle', 'The efficiency of the compressor', 'The total heat removed from the system'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0761', area: 'C', subTopic: 'refrigeration-engineering',
    topic: 'Cold Storage Systems', type: 'computation', difficulty: 'average',
    question: 'A cold storage facility operates at a cooling load of 2,500 BTU/hr. If it operates for 10 hours, what is the total energy removed from the facility in kJ? Assume 1 BTU = 1.055 kJ.',
    options: ['26.4 kJ', '31.7 kJ', '19.8 kJ', '33.0 kJ'],
    correctAnswer: 1,
    solution: {
      given: 'Cooling load = 2,500 BTU/hr, time = 10 hours',
      steps: ['Calculate total energy removed: Total Energy = Cooling Load × Time = 2,500 BTU/hr × 10 hrs = 25,000 BTU', 'Convert BTUs to kJ: Total Energy in kJ = 25,000 BTU × 1.055 kJ/BTU = 26,375 kJ'],
      formula: 'Total Energy = Cooling Load × Time',
      keyConcept: 'Energy transfer from a cooling system can be calculated from the cooling load and operational hours.',
      commonMistakes: ['Not converting units', 'Forgetting the time factor', 'Using incorrect conversion factor'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-c-0762', area: 'C', subTopic: 'refrigeration-engineering',
    topic: 'Psychrometrics', type: 'theory', difficulty: 'average',
    question: 'In psychrometrics, what does the term \'dew point\' refer to?',
    options: ['The temperature at which water vapor condenses to liquid', 'The relative humidity at which condensation occurs', 'The temperature difference between dry bulb and wet bulb', 'The amount of moisture in the air'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0763', area: 'C', subTopic: 'refrigeration-engineering',
    topic: 'Thermal Properties of Refrigerants', type: 'theory', difficulty: 'easy',
    question: 'What property of a refrigerant is crucial for effective heat absorption during the evaporation process?',
    options: ['Boiling point', 'Viscosity', 'Thermal conductivity', 'Freezing point'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0764', area: 'C', subTopic: 'refrigeration-engineering',
    topic: 'Refrigeration Systems', type: 'computation', difficulty: 'hard',
    question: 'Determine the horsepower required for a refrigeration unit that removes 15,000 BTU/hr from a cold storage room. Assume 1 hp = 2,545 BTU/hr.',
    options: ['5.9 hp', '6.4 hp', '7.3 hp', '4.7 hp'],
    correctAnswer: 0,
    solution: {
      given: 'Heat removal = 15,000 BTU/hr',
      steps: ['Calculate horsepower: hp = BTU/hr ÷ 2,545 BTU/hr/hp = 15,000 BTU/hr ÷ 2,545 BTU/hr/hp ≈ 5.9 hp'],
      formula: 'hp = BTU/hr ÷ 2545 BTU/hr/hp',
      keyConcept: 'The horsepower of a refrigeration system is directly proportional to the amount of heat energy it must remove.',
      commonMistakes: ['Using incorrect conversion factor', 'Misunderstanding units', 'Not accounting for efficiency'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-c-0765', area: 'C', subTopic: 'refrigeration-engineering',
    topic: 'Cooling Load Calculation', type: 'computation', difficulty: 'average',
    question: 'Calculate the amount of energy in kJ required to cool 100 kg of fresh meat from 25°C to 5°C. If the specific heat of the meat is 3.0 kJ/kg-°C. The atmospheric temperature is 28°C.',
    options: ['2,000 kJ', '2,400 kJ', '3,000 kJ', '1,500 kJ'],
    correctAnswer: 1,
    solution: {
      given: 'mass = 100 kg, Te = 25°C, Tf = 5°C, SpHt = 3.0 kJ/kg-°C',
      steps: ['Calculate temperature difference: ΔT = Te - Tf = 25°C - 5°C = 20°C', 'Calculate energy required: Q = SpHt × mass × ΔT = 3.0 kJ/kg-°C × 100 kg × 20°C = 6,000 kJ'],
      formula: 'Q = specific heat × mass × temperature difference',
      keyConcept: 'Energy required for cooling is calculated based on mass, specific heat, and temperature difference.',
      commonMistakes: ['Forgetting to use mass', 'Not converting to kJ', 'Incorrect subtraction'],
      extraneousGivens: ['Atmospheric temperature: 28°C'],
    }
  },
  {
    id: 'llm-c-0766', area: 'C', subTopic: 'refrigeration-engineering',
    topic: 'Refrigeration Basics', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of refrigeration in food storage?',
    options: ['To enhance flavor', 'To maintain food quality and safety', 'To reduce cooking time', 'To increase moisture content'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0767', area: 'C', subTopic: 'refrigeration-engineering',
    topic: 'Air Conditioning', type: 'theory', difficulty: 'average',
    question: 'What does the term \'psychrometric\' refer to in air conditioning and refrigeration?',
    options: ['The study of water vapor concentration', 'The measurement of air pressure', 'The calculation of energy efficiency', 'The analysis of heat transfer in solids'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0768', area: 'C', subTopic: 'refrigeration-engineering',
    topic: 'Compressor Functionality', type: 'theory', difficulty: 'hard',
    question: 'In a refrigeration cycle, what is the role of the expansion valve?',
    options: ['To control refrigerant flow', 'To increase refrigerant pressure', 'To cool the refrigerant', 'To absorb heat from the refrigerated space'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0769', area: 'C', subTopic: 'bioprocess-engineering',
    topic: 'Storage of Agricultural Products', type: 'theory', difficulty: 'average',
    question: 'Why is refrigeration important in the storage of fresh produce?',
    options: ['It increases the weight of the produce', 'It inhibits microbial growth and decay', 'It changes the taste of the produce', 'It removes moisture from the produce'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0770', area: 'C', subTopic: 'thermodynamics',
    topic: 'Thermodynamic Laws', type: 'theory', difficulty: 'easy',
    question: 'Which of the following statements best describes the Second Law of Thermodynamics?',
    options: ['Energy cannot be created or destroyed.', 'Heat will not spontaneously flow from cold to hot.', 'Temperature remains constant during phase changes.', 'Work done on a system is equal to the heat added.'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0771', area: 'C', subTopic: 'refrigeration-engineering',
    topic: 'Cooling Load Calculation', type: 'computation', difficulty: 'hard',
    question: 'Calculate the cooling load required to lower the temperature of 150 kg of fresh beef from 20°C to 4°C. The specific heat of beef above freezing is 3.5 kJ/kg·°C. Ignore the specific heat below freezing. The density of beef is 1,000 kg/m^3, and the size of the cooling room is 30 m^2 with a height of 3 m.',
    options: ['2,550 kJ', '840 kJ', '1,050 kJ', '630 kJ'],
    correctAnswer: 0,
    solution: {
      given: 'm = 150 kg, Cb = 3.5 kJ/kg·°C, Te = 20°C, Tf = 4°C, room size = 30 m², height = 3 m',
      steps: ['Calculate heat to be removed: Q = m * Cb * (Te - Tf) = 150 kg * 3.5 kJ/kg·°C * (20°C - 4°C) = 2,550 kJ'],
      formula: 'Q = m * Cb * (Te - Tf)',
      keyConcept: 'Cooling load depends on the mass, specific heat, and temperature difference of the product.',
      commonMistakes: ['Using the density of beef in the calculation', 'Forgetting to convert units', 'Incorrectly calculating temperature difference'],
      extraneousGivens: ['Size of cooling room: 30 m²', 'Height of cooling room: 3 m'],
    }
  },
  {
    id: 'llm-c-0772', area: 'C', subTopic: 'refrigeration-engineering',
    topic: 'Refrigerant Properties', type: 'theory', difficulty: 'average',
    question: 'Which refrigerant is considered environmentally friendly due to its low ozone depletion potential?',
    options: ['R-22', 'Ammonia', 'R-134a', 'R-410A'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0773', area: 'C', subTopic: 'refrigeration-engineering',
    topic: 'Thermal Efficiency', type: 'computation', difficulty: 'hard',
    question: 'A refrigeration unit extracts 1,500 kJ of heat per cycle and requires 300 kJ of work input. What is the Coefficient of Performance (COP) of the refrigeration unit? The ambient temperature is 25°C, and the refrigeration temperature is -5°C. The specific heat of the refrigerant is not needed for this calculation.',
    options: ['5.0', '4.0', '3.0', '1.5'],
    correctAnswer: 1,
    solution: {
      given: 'Q = 1500 kJ, W = 300 kJ',
      steps: ['Calculate COP: COP = Q / W = 1500 kJ / 300 kJ = 5.0'],
      formula: 'COP = Q / W',
      keyConcept: 'COP measures the efficiency of a refrigeration unit, indicating how much heat is removed per unit of work input.',
      commonMistakes: ['Confusing heat extracted with work input', 'Incorrectly summing heat and work', 'Forgetting to divide correctly'],
      extraneousGivens: ['Ambient temperature: 25°C', 'Refrigeration temperature: -5°C', 'Specific heat of refrigerant not needed'],
    }
  },
  {
    id: 'llm-c-0774', area: 'C', subTopic: 'bioprocess-engineering',
    topic: 'Cold Storage Systems', type: 'theory', difficulty: 'easy',
    question: 'What is the primary advantage of using cold storage for agricultural products?',
    options: ['It increases the production rate.', 'It reduces the need for transportation.', 'It prolongs the shelf-life of products.', 'It improves the taste of products.'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0775', area: 'C', subTopic: 'thermodynamics',
    topic: 'Phase Changes', type: 'theory', difficulty: 'average',
    question: 'During which phase change does a substance absorb latent heat?',
    options: ['Condensation', 'Freezing', 'Melting', 'Sublimation'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0776', area: 'C', subTopic: 'refrigeration-engineering',
    topic: 'Refrigeration System Cycle', type: 'theory', difficulty: 'average',
    question: 'What is the correct order of the refrigeration cycle?',
    options: ['Compression, Condensation, Expansion, Evaporation', 'Evaporation, Compression, Condensation, Expansion', 'Condensation, Expansion, Evaporation, Compression', 'Expansion, Evaporation, Compression, Condensation'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0777', area: 'C', subTopic: 'refrigeration-engineering',
    topic: 'Cooling Load Estimation', type: 'computation', difficulty: 'hard',
    question: 'Determine the total cooling load for a cold storage room sized 50 m² with a height of 4 m, where the heat load due to insulation is 8.5 BTU/ft²-hr. The room is to be maintained at 0°C while the outside temperature is 35°C. This calculation ignores any product load. The density of air is 1.2 kg/m³ and the specific heat of air is 1.006 kJ/kg·°C.',
    options: ['4,500 BTU/hr', '6,500 BTU/hr', '8,000 BTU/hr', '7,800 BTU/hr'],
    correctAnswer: 1,
    solution: {
      given: 'Room size = 50 m², height = 4 m, heat load = 8.5 BTU/ft²-hr',
      steps: ['Convert area to ft²: 50 m² = 538.2 ft²', 'Calculate total heat load: Total load = 538.2 ft² * 8.5 BTU/ft²-hr = 4,578.7 BTU/hr'],
      formula: 'Total load = Area * Heat load per unit area',
      keyConcept: 'Cooling load calculation is crucial for sizing refrigeration systems correctly.',
      commonMistakes: ['Forgetting to convert area units', 'Incorrectly using heat load values', 'Neglecting to account for the height of the room'],
      extraneousGivens: ['Density of air: 1.2 kg/m³', 'Specific heat of air: 1.006 kJ/kg·°C'],
    }
  },
  {
    id: 'llm-c-0778', area: 'C', subTopic: 'refrigeration-engineering',
    topic: 'Thermal Insulation', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of thermal insulation in cold storage?',
    options: ['To enhance cooling speed', 'To maintain temperature stability', 'To prevent moisture accumulation', 'To reduce noise levels'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0779', area: 'C', subTopic: 'psychrometrics',
    topic: 'Humidity Control', type: 'theory', difficulty: 'average',
    question: 'Which of the following is an important factor in maintaining the quality of stored agricultural products?',
    options: ['Humidity control', 'Carbon dioxide levels', 'Oxygen levels', 'Air velocity'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0780', area: 'C', subTopic: 'thermodynamics',
    topic: 'Energy Transfer', type: 'computation', difficulty: 'hard',
    question: 'Calculate the work input required for a refrigerator that extracts 600 kJ of heat while operating with a COP of 4.5. The ambient temperature is 30°C, and the refrigeration temperature is 5°C. Ignore the specific heat of the refrigerant.',
    options: ['133.33 kJ', '150 kJ', '120 kJ', '135 kJ'],
    correctAnswer: 0,
    solution: {
      given: 'Q = 600 kJ, COP = 4.5',
      steps: ['Calculate work input: W = Q / COP = 600 kJ / 4.5 = 133.33 kJ'],
      formula: 'W = Q / COP',
      keyConcept: 'The work input of a refrigeration system is directly related to its COP.',
      commonMistakes: ['Incorrectly calculating COP as Q divided by W', 'Confusing work input with heat removed', 'Forgetting to use the correct COP value'],
      extraneousGivens: ['Ambient temperature: 30°C', 'Refrigeration temperature: 5°C', 'Specific heat of the refrigerant not needed'],
    }
  },
  {
    id: 'llm-c-0781', area: 'C', subTopic: 'psychrometrics',
    topic: 'Drying Processes', type: 'theory', difficulty: 'easy',
    question: 'What is the main purpose of psychrometrics in agricultural engineering?',
    options: ['To calculate the weight of products', 'To evaluate moisture content in air', 'To determine temperature variations', 'To analyze soil properties'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0782', area: 'C', subTopic: 'refrigeration-engineering',
    topic: 'System Efficiency', type: 'theory', difficulty: 'hard',
    question: 'How does the efficiency of a cooling system typically change with increasing ambient temperature?',
    options: ['Increases significantly', 'Decreases gradually', 'Remains constant', 'Varies unpredictably'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0783', area: 'C', subTopic: 'refrigeration-cold-storage',
    topic: 'Components of Refrigeration System', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is NOT a component of a basic refrigeration system?',
    options: ['Evaporator', 'Compressor', 'Condenser', 'Boiler'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0784', area: 'C', subTopic: 'refrigeration-cold-storage',
    topic: 'Properties of Refrigerants', type: 'theory', difficulty: 'average',
    question: 'Which refrigerant is commonly used in small refrigeration systems due to its non-toxicity?',
    options: ['Ammonia', 'Methyl chloride', 'Carbon dioxide', 'Freon 22'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0785', area: 'C', subTopic: 'refrigeration-cold-storage',
    topic: 'Refrigeration Cycle', type: 'theory', difficulty: 'average',
    question: 'In which step of the refrigeration cycle does the refrigerant absorb heat from the refrigerated space?',
    options: ['Condensation', 'Evaporation', 'Compression', 'Expansion'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0786', area: 'C', subTopic: 'refrigeration-cold-storage',
    topic: 'Cooling Loads', type: 'computation', difficulty: 'average',
    question: 'Calculate the total BTU required to cool 200 lbs of beef from 80°F to 36°F. The specific heat of beef is 0.75 BTU/lb-°F. The room temperature is 30°F, and the humidity is 60%.',
    options: ['4,200 BTU', '6,600 BTU', '1,200 BTU', '3,300 BTU'],
    correctAnswer: 1,
    solution: {
      given: 'mass = 200 lbs, specific heat = 0.75 BTU/lb-°F, initial temp = 80°F, final temp = 36°F, extraneous humidity = 60%',
      steps: ['Calculate temperature change: ΔT = 80°F - 36°F = 44°F', 'Calculate cooling load: Q = mass × specific heat × ΔT = 200 lbs × 0.75 BTU/lb-°F × 44°F = 6600 BTU'],
      formula: 'Q = mass × specific heat × ΔT',
      keyConcept: 'Cooling load is calculated based on the mass of the product, its specific heat, and the temperature change.',
      commonMistakes: ['Miscalculating ΔT', 'Forgetting to multiply by specific heat', 'Adding irrelevant factors like humidity in calculations'],
      extraneousGivens: ['Room temperature: 30°F', 'Humidity: 60%'],
    }
  },
  {
    id: 'llm-c-0787', area: 'C', subTopic: 'refrigeration-cold-storage',
    topic: 'Refrigeration System Ratings', type: 'computation', difficulty: 'hard',
    question: 'Determine the required tonnage of a refrigeration unit for a chill room with a volume of 400 ft³ that mainly stores fresh fish. It loses heat at a rate of 8 BTU/ft²-hr. The volume of the room measures 15 ft long, 10 ft wide, and 10 ft high. The cooling period is 10 hours, and the external temperature is 90°F.',
    options: ['2.5 tons', '1.5 tons', '3.0 tons', '4.0 tons'],
    correctAnswer: 0,
    solution: {
      given: 'Volume = 400 ft³, Heat loss rate = 8 BTU/ft²-hr, Dimensions = 15 ft x 10 ft x 10 ft, Cooling period = 10 hours, External temperature = 90°F',
      steps: ['Calculate surface area: A = 2(15*10 + 10*10 + 15*10) ft² = 800 ft²', 'Calculate total heat loss: Q = A × heat loss rate × time = 800 ft² × 8 BTU/ft²-hr × 10 hr = 64,000 BTU', 'Convert to tons: Tonnage = 64,000 BTU / 12,000 BTU/ton = 5.33 tons'],
      formula: 'Tonnage = Total heat loss / 12,000 BTU/ton',
      keyConcept: 'Understanding the heat loss and conversion factors for refrigeration sizing.',
      commonMistakes: ['Not calculating the surface area correctly', 'Confusing BTU/hr with total BTU', 'Incorrect conversions between BTU and tons'],
      extraneousGivens: ['External temperature: 90°F', 'Cooling period: 10 hours'],
    }
  },
  {
    id: 'llm-c-0788', area: 'C', subTopic: 'psychrometrics-heat-transfer',
    topic: 'Heat Transfer', type: 'theory', difficulty: 'average',
    question: 'In a refrigeration system, what does latent heat refer to?',
    options: ['Heat required to raise the temperature', 'Heat required for phase change without temperature change', 'Heat loss to the environment', 'Total heat content of the system'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0789', area: 'C', subTopic: 'refrigeration-cold-storage',
    topic: 'Refrigeration System Efficiency', type: 'computation', difficulty: 'average',
    question: 'A cold storage system removes 500 kJ of heat and requires 100 kJ of work. What is the coefficient of performance (COP) of this system? The outside temperature is 30°C.',
    options: ['5.0', '3.0', '4.0', '6.0'],
    correctAnswer: 0,
    solution: {
      given: 'Heat removed = 500 kJ, Work input = 100 kJ, Outside temperature = 30°C',
      steps: ['Calculate COP: COP = Heat removed / Work input = 500 kJ / 100 kJ = 5.0'],
      formula: 'COP = Q / W',
      keyConcept: 'COP measures the efficiency of a refrigeration system based on heat removal and work input.',
      commonMistakes: ['Misinterpreting heat removed as total energy', 'Forgetting the work input\'s role', 'Confusing COP with efficiency percentages'],
      extraneousGivens: ['Outside temperature: 30°C'],
    }
  },
  {
    id: 'llm-c-0790', area: 'C', subTopic: 'thermodynamics-heat-transfer',
    topic: 'Thermodynamic Laws', type: 'theory', difficulty: 'average',
    question: 'Which law indicates that energy cannot be created or destroyed?',
    options: ['First Law of Thermodynamics', 'Second Law of Thermodynamics', 'Third Law of Thermodynamics', 'Zeroth Law of Thermodynamics'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0791', area: 'C', subTopic: 'thermodynamics-heat-transfer',
    topic: 'Energy Transfer', type: 'computation', difficulty: 'hard',
    question: 'Calculate the work output of a heat engine that receives 1500 kJ of energy and rejects 500 kJ to the environment. What is its thermal efficiency?',
    options: ['67%, 1000 kJ', '1000 kJ, 33%', '1500 kJ, 33%', '500 kJ, 67%'],
    correctAnswer: 0,
    solution: {
      given: 'Energy received = 1500 kJ, Energy rejected = 500 kJ',
      steps: ['Calculate work output: Work = Energy in - Energy out = 1500 kJ - 500 kJ = 1000 kJ', 'Calculate thermal efficiency: Efficiency = Work output / Energy in = 1000 kJ / 1500 kJ = 0.67 or 67%'],
      formula: 'Efficiency = (Work output) / (Energy input)',
      keyConcept: 'Understanding energy conservation and efficiency calculations in thermodynamics.',
      commonMistakes: ['Confusing work with the total energy', 'Mistaking rejected heat for work output', 'Failing to express efficiency as a percentage'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-c-0792', area: 'C', subTopic: 'psychrometrics-heat-transfer',
    topic: 'Humidity Control', type: 'theory', difficulty: 'average',
    question: 'What happens to the humidity level in warm air as it cools?',
    options: ['It increases', 'It decreases', 'It stays the same', 'It evaporates'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0793', area: 'C', subTopic: 'refrigeration-cold-storage',
    topic: 'Refrigeration System Design', type: 'theory', difficulty: 'average',
    question: 'When designing a refrigeration unit for a cold storage room, what is the most critical factor to consider?',
    options: ['Storage capacity', 'Type of refrigerant', 'Insulation quality', 'Cost of the system'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0794', area: 'C', subTopic: 'refrigeration-cold-storage',
    topic: 'Cooling Load Calculations', type: 'computation', difficulty: 'hard',
    question: 'A cold storage room containing 100 kg of fresh vegetables at 20°C needs to be cooled to 5°C over 5 hours. The specific heat of the vegetables is 2.0 kJ/kg-°C. Calculate the total cooling load required in kJ.',
    options: ['300 kJ', '400 kJ', '500 kJ', '600 kJ'],
    correctAnswer: 1,
    solution: {
      given: 'Mass = 100 kg, Specific heat = 2.0 kJ/kg-°C, Initial temp = 20°C, Final temp = 5°C',
      steps: ['Calculate temperature change: ΔT = 20°C - 5°C = 15°C', 'Calculate cooling load: Q = mass × specific heat × ΔT = 100 kg × 2.0 kJ/kg-°C × 15°C = 3000 kJ'],
      formula: 'Q = mass × specific heat × ΔT',
      keyConcept: 'Cooling load calculation involves mass, specific heat, and temperature change.',
      commonMistakes: ['Neglecting to convert units', 'Using incorrect specific heat values', 'Miscalculating temperature change'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-c-0795', area: 'C', subTopic: 'psychrometrics-heat-transfer',
    topic: 'Thermodynamic Properties', type: 'theory', difficulty: 'average',
    question: 'What is defined as the amount of energy required to raise the temperature of 1 kg of a substance by 1°C?',
    options: ['Specific heat', 'Latent heat', 'Enthalpy', 'Thermal conductivity'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0796', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Processing', type: 'theory', difficulty: 'easy',
    question: 'What is the primary aim of food processing?',
    options: ['To reduce food prices', 'To extend the shelf life of food products', 'To increase the environmental impact of food', 'To diminish nutritional value'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0797', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Preservation', type: 'theory', difficulty: 'easy',
    question: 'Which method involves heating food at a temperature below 100°C to kill pathogenic bacteria?',
    options: ['Freezing', 'Sterilization', 'Pasteurization', 'Canning'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0798', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Processing Operations', type: 'theory', difficulty: 'average',
    question: 'What is blanching primarily used for in food processing?',
    options: ['Dehydration', 'Flavor enhancement', 'Microbial reduction', 'Color adjustment'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0799', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Safety', type: 'theory', difficulty: 'average',
    question: 'What principle does HACCP primarily rely on?',
    options: ['Random sampling', 'Quality control', 'Risk assessment', 'Consumer feedback'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0800', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Preservation', type: 'theory', difficulty: 'average',
    question: 'What is the main purpose of canning food?',
    options: ['Enhance flavor', 'Achieve commercial sterility', 'Increase nutritional value', 'Improve texture'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0801', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Processing', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is a common method of non-thermal food preservation?',
    options: ['Canning', 'Freezing', 'Irradiation', 'Boiling'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0802', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Processing Equipment', type: 'theory', difficulty: 'average',
    question: 'What is the function of a steam jacketed kettle in food processing?',
    options: ['Mixing ingredients', 'Sterilizing food', 'Maintaining temperature', 'Cooling down products'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0803', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Processing', type: 'theory', difficulty: 'hard',
    question: 'What is the typical temperature for pasteurizing milk?',
    options: ['100°C', '72°C', '65°C', '85°C'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0804', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Quality Control', type: 'theory', difficulty: 'hard',
    question: 'Which agency is responsible for regulating food safety in the Philippines?',
    options: ['DA', 'DOH', 'DENR', 'NIA'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0805', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Processing Techniques', type: 'theory', difficulty: 'easy',
    question: 'What is the main advantage of freeze-drying food?',
    options: ['Low cost', 'Retention of nutrients', 'Color enhancement', 'Increased weight'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0806', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Processing Equipment', type: 'computation', difficulty: 'average',
    question: 'A food processor uses a steam jacketed kettle with a capacity of 500 liters to boil water. The kettle heats up water from 25°C to 100°C. Calculate the energy required if the specific heat of water is 4.18 kJ/kg°C. Assume the density of water is 1,000 kg/m³. The kettle has a thermal efficiency of 85%. Note that the ambient temperature is 28°C.',
    options: ['15.26 MJ', '18.27 MJ', '21.90 MJ', '12.15 MJ'],
    correctAnswer: 1,
    solution: {
      given: 'V = 500 L = 0.5 m³, density = 1000 kg/m³, specific heat = 4.18 kJ/kg°C, ΔT = 100°C - 25°C = 75°C, thermal efficiency = 85%',
      steps: ['Calculate mass: m = density × volume = 1000 kg/m³ × 0.5 m³ = 500 kg.', 'Calculate energy: Q = m × specific heat × ΔT = 500 kg × 4.18 kJ/kg°C × 75°C = 156,750 kJ.', 'Convert to MJ: Q = 156,750 kJ / 1000 = 156.75 MJ.', 'Considering thermal efficiency: Effective energy = Q / 0.85 = 184.41 MJ.'],
      formula: 'Q = m × c × ΔT; Effective energy = Q / thermal efficiency',
      keyConcept: 'Heat energy calculations involve mass, specific heat, and temperature change; efficiency affects energy requirements.',
      commonMistakes: ['Forgetting to convert units', 'Ignoring thermal efficiency', 'Incorrectly calculating mass'],
      extraneousGivens: ['Ambient temperature: 28°C', 'Thermal efficiency: 85%', 'Kettle capacity: 500 liters'],
    }
  },
  {
    id: 'llm-c-0807', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Processing', type: 'computation', difficulty: 'average',
    question: 'A batch of 200 kg of corn is dried from 20% moisture content to 12% moisture content using a dryer that operates at 90% efficiency. If the latent heat of vaporization of water is 2,260 kJ/kg, calculate the energy required for drying. Note that the maximum holding capacity of the dryer is 500 kg.',
    options: ['9.07 MJ', '10.93 MJ', '12.50 MJ', '8.67 MJ'],
    correctAnswer: 0,
    solution: {
      given: 'Initial mass = 200 kg, Initial moisture = 20%, Final moisture = 12%, Latent heat = 2260 kJ/kg, Efficiency = 90%',
      steps: ['Calculate water removed: Initial water = 200 kg × 0.20 = 40 kg; Final water = 200 kg × 0.12 = 24 kg; Water removed = 40 kg - 24 kg = 16 kg.', 'Calculate energy: Energy = Water removed × Latent heat = 16 kg × 2260 kJ/kg = 36,160 kJ.', 'Adjust for efficiency: Effective energy = Energy / Efficiency = 36,160 kJ / 0.90 = 40,178 kJ = 40.18 MJ.'],
      formula: 'Energy = mass × latent heat; Energy required = Energy / efficiency',
      keyConcept: 'Energy calculations for drying involve moisture removal and the latent heat of vaporization; efficiency impacts total energy required.',
      commonMistakes: ['Not adjusting for dryer capacity', 'Forgetting to convert kJ to MJ', 'Assuming 100% efficiency'],
      extraneousGivens: ['Maximum holding capacity: 500 kg', 'Initial moisture: 20%', 'Final moisture: 12%', 'Efficiency: 90%'],
    }
  },
  {
    id: 'llm-c-0808', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Quality Control', type: 'theory', difficulty: 'easy',
    question: 'What does GMP stand for in food processing?',
    options: ['Good Manufacturing Practices', 'General Maintenance Procedures', 'Gross Management Principles', 'Global Market Policies'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0809', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Processing Techniques', type: 'computation', difficulty: 'average',
    question: 'A company processes 1,000 kg of coconut meat to produce virgin coconut oil. If the extraction efficiency is 65% and the oil content of the meat is 30%, how much virgin coconut oil can be produced? Take note of the following: The total processing time is 5 hours, and the processing temperature is 70°C.',
    options: ['195 kg', '200 kg', '195.5 kg', '180 kg'],
    correctAnswer: 0,
    solution: {
      given: 'Initial mass = 1000 kg, Oil content = 30%, Efficiency = 65%',
      steps: ['Calculate oil in coconut meat: Oil = Initial mass × Oil content = 1000 kg × 0.30 = 300 kg.', 'Calculate produced oil: Produced oil = Oil × Efficiency = 300 kg × 0.65 = 195 kg.'],
      formula: 'Produced oil = (Initial mass × Oil content) × Efficiency',
      keyConcept: 'Oil extraction calculations involve understanding material content and extraction efficiency.',
      commonMistakes: ['Forgetting to apply extraction efficiency', 'Calculating without considering oil content', 'Mistaking oil yield for total mass'],
      extraneousGivens: ['Processing time: 5 hours', 'Processing temperature: 70°C'],
    }
  },
  {
    id: 'llm-c-0810', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Quality Control', type: 'computation', difficulty: 'hard',
    question: 'Calculate the porosity of a medium-sized paddy with a moisture content of 21% wet basis using the formula Pm = 69.05 – 0.885 M. Then find the percentage increase in porosity if the moisture content is reduced to 14%.',
    options: ['2.1%', '1.5%', '0.3%', '1.0%'],
    correctAnswer: 3,
    solution: {
      given: 'MCwb1 = 21%, MCwb2 = 14%',
      steps: ['Calculate porosity at 21%: Pm1 = 69.05 - 0.885 × 0.21 = 68.86%.', 'Calculate porosity at 14%: Pm2 = 69.05 - 0.885 × 0.14 = 68.92%.', 'Calculate percentage increase: % Increase = (68.92 - 68.86) / 68.86 × 100 = 0.09%.'],
      formula: 'Pm = 69.05 - 0.885 M; % Increase = (New - Old) / Old × 100',
      keyConcept: 'Understanding porosity and how moisture content affects it is crucial for drying and storing grains.',
      commonMistakes: ['Confusing the moisture content formulas', 'Neglecting to convert percentages properly', 'Calculating without considering the context of grain storage'],
      extraneousGivens: ['None'],
    }
  },
  {
    id: 'llm-c-0811', area: 'C', subTopic: 'food-processing',
    topic: 'Unit Operations in Food Processing', type: 'theory', difficulty: 'average',
    question: 'Which of the following is NOT classified as a mechanical operation in food processing?',
    options: ['Mixing', 'Drying', 'Washing', 'Filtration'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0812', area: 'C', subTopic: 'food-processing',
    topic: 'Food Preservation', type: 'theory', difficulty: 'easy',
    question: 'What process involves heating food at high temperatures to achieve commercial sterility?',
    options: ['Pasteurization', 'Canning', 'Freezing', 'Refrigeration'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0813', area: 'C', subTopic: 'food-processing',
    topic: 'Food Preservation Techniques', type: 'theory', difficulty: 'hard',
    question: 'Which food preservation method utilizes high pressure to extend shelf life?',
    options: ['Dehydration', 'Irradiation', 'High Pressure Processing', 'Canning'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0814', area: 'C', subTopic: 'food-processing',
    topic: 'Drying vs. Dehydration', type: 'theory', difficulty: 'average',
    question: 'Which statement best describes the difference between drying and dehydration?',
    options: ['They are the same process', 'Drying removes water to equilibrium, dehydration removes all water', 'Dehydration is faster than drying', 'Drying retains the food\'s original shape'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0815', area: 'C', subTopic: 'food-processing',
    topic: 'Dried Products', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is a commonly dried product?',
    options: ['Canned vegetables', 'Dried fish', 'Frozen meat', 'Pickled fruits'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0816', area: 'C', subTopic: 'food-processing',
    topic: 'Heat Transfer Operations', type: 'theory', difficulty: 'average',
    question: 'Which of the following is NOT a heat transfer operation in food processing?',
    options: ['Cooking', 'Cooling', 'Rinsing', 'Pasteurization'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0817', area: 'C', subTopic: 'food-processing',
    topic: 'Extrusion Process', type: 'theory', difficulty: 'hard',
    question: 'What is the main purpose of extrusion in food processing?',
    options: ['Drying foods', 'Cooking foods', 'Shaping and cooking simultaneously', 'Preserving foods'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0818', area: 'C', subTopic: 'food-processing',
    topic: 'Microbial Reduction', type: 'theory', difficulty: 'average',
    question: 'Which process is primarily used to reduce microbial populations in milk?',
    options: ['Sterilization', 'Pasteurization', 'Refrigeration', 'Freezing'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0819', area: 'C', subTopic: 'food-processing',
    topic: 'Unit Operations - Mixing', type: 'theory', difficulty: 'easy',
    question: 'What is the primary goal of mixing in food processing?',
    options: ['To enhance flavor', 'To achieve uniformity', 'To prolong shelf life', 'To reduce weight'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0820', area: 'C', subTopic: 'food-processing',
    topic: 'Canning Temperature for Low-Acid Foods', type: 'computation', difficulty: 'hard',
    question: 'What is the recommended canning temperature for low-acid vegetables in a pressure canner? The pressure is also maintained at 15 psi. The volume of canning is 500 mL and the processing time is 25 minutes. Ambient temperature is 30°C. What is the canning temperature?',
    options: ['115°C', '121°C', '100°C', '74°C'],
    correctAnswer: 1,
    solution: {
      given: 'Pressure = 15 psi, Volume = 500 mL, Processing time = 25 min, Ambient temperature = 30°C',
      steps: ['Identify recommended canning temperature for low-acid foods is 121°C under 15 psi pressure.'],
      formula: 'For low-acid foods, the canning temperature at 15 psi is 121°C.',
      keyConcept: 'Canning at the correct temperature and pressure is vital for food safety.',
      commonMistakes: ['Selecting the wrong temperature based on food type', 'Mixing acid and low-acid food canning methods', 'Forgetting pressure requirements'],
      extraneousGivens: ['Ambient temperature: 30°C', 'Volume of canning: 500 mL', 'Processing time: 25 minutes'],
    }
  },
  {
    id: 'llm-c-0821', area: 'C', subTopic: 'food-processing',
    topic: 'Canning and Preservation', type: 'theory', difficulty: 'average',
    question: 'Which of the following is a characteristic of a successful canning process?',
    options: ['High temperature of cans', 'Long processing time', 'Commercial sterility', 'Low initial temperature'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0822', area: 'C', subTopic: 'food-processing',
    topic: 'Milk Pasteurization', type: 'theory', difficulty: 'easy',
    question: 'What is the maximum temperature and time used in pasteurization of milk?',
    options: ['63°C for 30 minutes', '72°C for 15 seconds', '100°C for 5 minutes', '75°C for 20 seconds'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0823', area: 'C', subTopic: 'food-processing',
    topic: 'Food Cooling and Refrigeration', type: 'theory', difficulty: 'average',
    question: 'What is the recommended storage temperature range for refrigerated foods?',
    options: ['-5°C to 0°C', '0°C to 5°C', '6°C to 15°C', '15°C to 20°C'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0824', area: 'C', subTopic: 'food-processing',
    topic: 'Electrical Properties in Food Processing', type: 'theory', difficulty: 'hard',
    question: 'What electrical property is critical for microwave heating of food products?',
    options: ['Dielectric constant', 'Thermal conductivity', 'Specific heat', 'Electrical resistance'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0825', area: 'C', subTopic: 'food-processing',
    topic: 'Food Safety Regulations', type: 'theory', difficulty: 'hard',
    question: 'Which Philippine law regulates the use of additives in food production?',
    options: ['Republic Act No. 10601', 'Food Safety Act of 2013', 'RA 8479', 'Lemon Law'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0826', area: 'C', subTopic: 'food-processing',
    topic: 'Food Safety and Quality Standards', type: 'computation', difficulty: 'hard',
    question: 'If a food product has a mass of 200 grams and a moisture content of 25%, what is the dry matter content? There were also 50 grams of added preservatives listed in the product specifications and the product is meant for immediate consumption. Calculate the dry matter without considering preservatives.',
    options: ['150 g', '175 g', '200 g', '50 g'],
    correctAnswer: 1,
    solution: {
      given: 'Mass = 200 g, Moisture content = 25%, Added preservatives = 50 g (not needed)',
      steps: ['Calculate dry matter: Dry matter = Mass - (Moisture content × Mass)', 'Dry matter = 200 g - (0.25 × 200 g) = 150 g'],
      formula: 'Dry matter = Mass - (Moisture content × Mass)',
      keyConcept: 'Understanding moisture and dry matter content is crucial for food quality assessment.',
      commonMistakes: ['Including preservatives in the calculation', 'Confusing moisture content with dry weight', 'Forgetting to convert percentage to decimal'],
      extraneousGivens: ['Added preservatives: 50 g', 'Product meant for immediate consumption'],
    }
  },
  {
    id: 'llm-c-0827', area: 'C', subTopic: 'food-engineering',
    topic: 'Processes of Food Preservation', type: 'theory', difficulty: 'easy',
    question: 'Which of the following best describes the process of pasteurization?',
    options: ['Heating at a temperature below 100°C to kill pathogens', 'Cooling food products for extended shelf life', 'Using high pressure to destroy microorganisms', 'Chemically preserving food with additives'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: 'Pasteurization is aimed at reducing microbial load through controlled heating.',
      commonMistakes: ['Confusing with sterilization', 'Ignoring temperature specifics'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-c-0828', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Processing Methods', type: 'theory', difficulty: 'average',
    question: 'Which of the following is NOT a mechanical separation process in food processing?',
    options: ['Filtration', 'Sorting', 'Cooling', 'Screening'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: 'Cooling is a thermal process, not a mechanical separation.',
      commonMistakes: ['Mistakenly choosing a sorting method as mechanical', 'Confusing mechanical and thermal processes'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-c-0829', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Preservation Techniques', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is a common method for food preservation?',
    options: ['Drying', 'Heating at low temperatures', 'Mechanical processing', 'Grading'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: 'Drying is widely used to inhibit spoilage by reducing moisture content.',
      commonMistakes: ['Mixing up drying with mechanical processing', 'Inappropriate associations with heating'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-c-0830', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Processes', type: 'theory', difficulty: 'average',
    question: 'In what stage does commercial production of processed foods occur?',
    options: ['Primary Stage', 'Secondary Stage', 'Tertiary Stage', 'None of the above'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: 'The tertiary stage involves the production of ready-to-eat meals and processed snacks.',
      commonMistakes: ['Confusing primary and tertiary stages', 'Overlooking the definitions of stages'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-c-0831', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Processing Equipment', type: 'computation', difficulty: 'hard',
    question: 'A steam jacketed kettle has a heating area of 1.5 m² and requires a heat transfer coefficient of 150 W/m²K. If the temperature differential between the steam and the product is 20°C, what is the total heat transfer rate? The steam pressure is 2.5 bar, and the kettle has a total volume of 100 liters.',
    options: ['4500 W', '3000 W', '7500 W', '6000 W'],
    correctAnswer: 0,
    solution: {
      given: 'A = 1.5 m², U = 150 W/m²K, ΔT = 20°C, Volume = 100 L',
      steps: ['Calculate heat transfer rate: Q = U × A × ΔT = 150 W/m²K × 1.5 m² × 20 K = 4500 W'],
      formula: 'Q = U × A × ΔT',
      keyConcept: 'Heat transfer rate depends on area, temperature differential, and the heat transfer coefficient.',
      commonMistakes: ['Forgetting to convert volumes', 'Incorrectly calculating area'],
      extraneousGivens: ['Steam pressure: 2.5 bar', 'Total volume: 100 liters'],
    }
  },
  {
    id: 'llm-c-0832', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Preservation Techniques', type: 'theory', difficulty: 'average',
    question: 'Which food preservation method uses salt or sugar to hinder spoilage?',
    options: ['Canning', 'Dehydration', 'Fermentation', 'Curing'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: 'Curing employs salt or sugar to inhibit microbial growth.',
      commonMistakes: ['Confusing curing with fermentation', 'Misunderstanding absorption methods'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-c-0833', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Processing Stages', type: 'theory', difficulty: 'easy',
    question: 'What does the secondary stage of food processing focus on?',
    options: ['Post-harvest activities', 'Changing the physical form of the food', 'Commercial production of food', 'Measuring food quality'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'The secondary stage alters the form of food products significantly.',
      commonMistakes: ['Confusing secondary with primary stage', 'Neglecting definitions of stages'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-c-0834', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Processing Operations', type: 'theory', difficulty: 'average',
    question: 'What is mechanical processing primarily used for in food engineering?',
    options: ['Storage of food', 'Changing size or form of ingredients', 'Improving flavor and taste', 'Preserving nutrients'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'Mechanical processing includes methods such as cutting and grinding.',
      commonMistakes: ['Misunderstanding the purpose of mechanical processing', 'Assuming it\'s only for preservation'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-c-0835', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Processing Techniques', type: 'computation', difficulty: 'hard',
    question: 'A company processes 2000 kg of corn per hour with a recovery rate of 70%. If the corn has a moisture content of 15% wet basis, calculate the total amount of dry corn processed per hour. The moisture content of dry corn is 12%, and the cost of drying per kg excluding unnecessary processing costs is ₱2.50.',
    options: ['1200 kg', '1300 kg', '1500 kg', '1800 kg'],
    correctAnswer: 3,
    solution: {
      given: 'Input = 2000 kg/h, Recovery rate = 70%, Moisture content = 15% wb, Dry moisture content = 12%, Drying cost = ₱2.50/kg',
      steps: ['Calculate dry corn: Dry corn = Input × Recovery rate = 2000 kg/h × 70% = 1400 kg/h', 'Calculate moisture difference: Wet basis moisture = (Input × Moisture Content / 100) = 2000 kg × 0.15 = 300 kg of water', 'Calculate total dry corn: Total dry corn = Input - water = 1400 kg - 300 kg = 1100 kg'],
      formula: 'Total dry corn = Input - (Input × Moisture Content)',
      keyConcept: 'Effective recovery rates are determined by accounting for moisture content.',
      commonMistakes: ['Forgetting to convert moisture content', 'Confusing wet and dry basis calculations'],
      extraneousGivens: ['Drying cost: ₱2.50', 'Moisture content: 15%'],
    }
  },
  {
    id: 'llm-c-0836', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Processing Machinery', type: 'computation', difficulty: 'hard',
    question: 'An extruder processes 250 kg of feed per hour with an energy requirement of 15 kWh per tonne processed. If the machinery operates for 5 hours, what is the total energy consumption? The voltage is rated at 380V and the current draw is 10A.',
    options: ['125 kWh', '75 kWh', '30 kWh', '55 kWh'],
    correctAnswer: 0,
    solution: {
      given: 'Feed Input = 250 kg/h, Energy Requirement = 15 kWh/t, Operation Time = 5 h, Voltage = 380V, Current = 10A',
      steps: ['Convert kg to tonnes: 250 kg = 0.25 t/h', 'Calculate total energy: Total Energy = Energy Req per tonne × Input in tonnes × Operating hours', 'Total Energy = 15 kWh/t × 0.25 t/h × 5 h = 18.75 kWh'],
      formula: 'Total Energy = Energy Req × Input/1000',
      keyConcept: 'Energy consumption is directly proportional to the feed input processed.',
      commonMistakes: ['Confusing tonne with kg', 'Neglecting to convert to relevant units'],
      extraneousGivens: ['Voltage: 380V', 'Current: 10A'],
    }
  },
  {
    id: 'llm-c-0837', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Quality Control', type: 'theory', difficulty: 'average',
    question: 'What is the purpose of HACCP in food processing?',
    options: ['To enhance flavor quality', 'To ensure product safety by identifying hazards', 'To increase production speed', 'To reduce costs in production'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: 'HACCP focuses on safety by identifying and managing potential hazards.',
      commonMistakes: ['Confusing HACCP with marketing strategies', 'Assuming it is only about efficiency'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-c-0838', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Preservation Techniques', type: 'computation', difficulty: 'hard',
    question: 'If a pasteurizer processes 5000 liters of milk per hour, using a heat exchanger with a temperature difference of 30°C between the heating medium and the milk, and a flow rate of 10 L/min, what is the required heat capacity if the specific heat of milk is 3.93 kJ/kg°C? Assume the density of milk is 1 kg/L. The pressure gauge shows 1.2 bars.',
    options: ['390 kW', '500 kW', '600 kW', '750 kW'],
    correctAnswer: 1,
    solution: {
      given: 'Volume = 5000 L/h = 5000 L/60 min, ΔT = 30°C, Flow Rate = 10 L/min',
      steps: ['Calculate the flow rate per hour: 5000 L/h = 83.33 L/min', 'Calculate the heat required per minute: Q = 83.33 kg/min × 3.93 kJ/kg°C × 30°C = 9808.89 kJ/min', 'Convert to kW: Q = 9808.89 kJ/min × 1 min/60 s = 163.48 kW'],
      formula: 'Q = mass flow rate × specific heat × ΔT',
      keyConcept: 'Heat capacity calculations are essential for determining thermal requirements in processing.',
      commonMistakes: ['Misunderstanding specific heat for total heat', 'Neglecting unit conversions'],
      extraneousGivens: ['Pressure: 1.2 bars', 'Temperature difference: 30°C'],
    }
  },
  {
    id: 'llm-c-0839', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Processing Units', type: 'theory', difficulty: 'average',
    question: 'Filtration is primarily used in food processing for what purpose?',
    options: ['To enhance flavor', 'To reduce microbial load', 'To separate solid particles from liquids', 'To improve texture'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: 'Filtration is critical for separating phases in food processing.',
      commonMistakes: ['Confusing filtration with other separation processes', 'Overlooking the role of filtration in quality'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-c-0840', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Processing Stages', type: 'computation', difficulty: 'hard',
    question: 'If the drying process removes 80% of the moisture from 100 kg of wet fruit, what is the weight of the dried fruit? The initial moisture content is 90%, and the desired final moisture content is 10%.',
    options: ['10 kg', '15 kg', '20 kg', '30 kg'],
    correctAnswer: 0,
    solution: {
      given: 'Initial Weight = 100 kg, Initial Moisture = 90%, Final Moisture = 10%',
      steps: ['Calculate the dry matter in the wet fruit: Dry Matter = Initial Weight × (1 - Initial Moisture) = 100 kg × (1 - 0.90) = 10 kg', 'Calculate the final moisture content: Final Weight = Dry Matter / (1 - Final Moisture Content) = 10 kg / (1 - 0.10) = 11.11 kg', 'Total weight of dried fruit: Dried Weight = 100 kg - (100 kg × 0.80) = 20 kg'],
      formula: 'Dried Weight = Initial Weight × (1 - (Initial Moisture - Final Moisture))',
      keyConcept: 'Understanding moisture content is crucial for calculating dried product weights.',
      commonMistakes: ['Miscalculating dry matter', 'Not properly considering moisture changes'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-c-0841', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Quality Control', type: 'theory', difficulty: 'average',
    question: 'What is the main regulatory body overseeing food safety in the Philippines?',
    options: ['Department of Health (DOH)', 'Department of Agriculture (DA)', 'National Food Authority (NFA)', 'Food and Drug Administration (FDA)'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: 'FDA regulates food safety and quality control in the Philippines.',
      commonMistakes: ['Confusing DA with FDA roles', 'Ignoring other regulatory agencies'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-c-0842', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Safety Standards', type: 'computation', difficulty: 'hard',
    question: 'A canned food product must have a pH level below 4.6 to ensure safety. If a batch of canned guava has a pH of 4.4 and a concentration of citric acid of 0.07 g/L, how much citric acid must be added to change the pH to below 4.6 if the dilution factor of the acid solution is 1:10?',
    options: ['0.1 g/L', '0.5 g/L', '0.15 g/L', '0.2 g/L'],
    correctAnswer: 0,
    solution: {
      given: 'Batch pH = 4.4, Desired pH = 4.6, Initial Concentration = 0.07 g/L, Dilution Factor = 1:10',
      steps: ['Calculate the amount of citric acid needed using pH formulas and buffering equations.', 'Determine the additional concentration needed based on the dilution factor and previous concentrations.'],
      formula: 'pH adjustment depends on acid concentration and volume calculations.',
      keyConcept: 'pH levels and acid concentrations are crucial in food safety standards.',
      commonMistakes: ['Using incorrect pH measurements', 'Forgetting dilution factors in calculations'],
      extraneousGivens: [],
    }
  },
  {
    id: 'llm-c-0843', area: 'C', subTopic: 'food-processing',
    topic: 'Food Preservation', type: 'theory', difficulty: 'easy',
    question: 'Which of the following processes is NOT a method of food preservation?',
    options: ['Canning', 'Freezing', 'Milling', 'Drying'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0844', area: 'C', subTopic: 'food-processing',
    topic: 'Unit Operations', type: 'theory', difficulty: 'average',
    question: 'Which of the following is a type of mechanical processing operation in food processing?',
    options: ['Filtration', 'Blanching', 'Slicing', 'Cooling'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0845', area: 'C', subTopic: 'food-processing',
    topic: 'Food Safety', type: 'theory', difficulty: 'average',
    question: 'HACCP is a vital food safety management system. What does it stand for?',
    options: ['Hazard Analysis and Critical Control Points', 'Health Analysis and Critical Control Processes', 'Hygiene Analysis and Control of Food Products', 'Hazard Assessment and Control of Production'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0846', area: 'C', subTopic: 'food-processing',
    topic: 'Thermal Processing', type: 'theory', difficulty: 'average',
    question: 'What is the maximum temperature for pasteurization?',
    options: ['100°C', '72°C', '85°C', '60°C'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0847', area: 'C', subTopic: 'food-processing',
    topic: 'Food Processing Stages', type: 'theory', difficulty: 'average',
    question: 'What is the primary stage of food processing concerned with washing, sorting, and drying?',
    options: ['Primary Stage', 'Secondary Stage', 'Tertiary Stage', 'Processing Stage'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0848', area: 'C', subTopic: 'food-processing',
    topic: 'Mechanical Transport', type: 'theory', difficulty: 'average',
    question: 'Which operation involves the transportation of food products using pumps?',
    options: ['Mechanical Separation', 'Mechanical Transport', 'Mass Transfer Operation', 'Heat Transfer Operation'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0849', area: 'C', subTopic: 'food-processing',
    topic: 'Food Engineering', type: 'computation', difficulty: 'hard',
    question: 'If the bulk density of a food product is 0.4 kg/L, and you have 500 L of the product, what is its total mass? (Note: Assume no extraneous values are needed for the calculation.)',
    options: ['200 kg', '250 kg', '300 kg', '400 kg'],
    correctAnswer: 0,
    solution: {
      given: 'Bulk Density = 0.4 kg/L, Volume = 500 L',
      steps: ['Calculate mass using the formula: mass = density × volume', 'Mass = 0.4 kg/L × 500 L = 200 kg'],
      formula: 'mass = density × volume',
      keyConcept: 'Total mass can be calculated by multiplying bulk density by the volume of the product.',
      commonMistakes: ['Confusing volume with mass', 'Forgetting to multiply correctly'],
      extraneousGivens: ['None required for calculation'],
    }
  },
  {
    id: 'llm-c-0850', area: 'C', subTopic: 'food-processing',
    topic: 'Food Processing Laws', type: 'theory', difficulty: 'easy',
    question: 'Which Philippine agency is primarily responsible for overseeing the food industry?',
    options: ['Department of Agriculture (DA)', 'National Irrigation Administration (NIA)', 'Department of Health (DOH)', 'Bureau of Food and Drugs (BFAD)'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0851', area: 'C', subTopic: 'food-processing',
    topic: 'Food Preservation Techniques', type: 'computation', difficulty: 'hard',
    question: 'A batch of dried mango slices has an initial moisture content of 20%. After processing, their moisture content is reduced to 10%. Calculate the percentage reduction in moisture content. (Note: Ignore the total weight of the batch.)',
    options: ['50%', '25%', '75%', '10%'],
    correctAnswer: 0,
    solution: {
      given: 'Initial moisture = 20%, Final moisture = 10%',
      steps: ['Percentage reduction = (Initial - Final) / Initial × 100%', 'Percentage reduction = (20% - 10%) / 20% × 100% = 50%'],
      formula: 'Percentage reduction = (Initial - Final) / Initial × 100%',
      keyConcept: 'Percentage reduction in moisture is calculated by comparing the difference relative to the initial value.',
      commonMistakes: ['Calculating absolute difference instead of relative', 'Not multiplying by 100%'],
      extraneousGivens: ['Total weight of batch is irrelevant', 'Type of fruit irrelevant to calculation'],
    }
  },
  {
    id: 'llm-c-0852', area: 'C', subTopic: 'food-processing',
    topic: 'Heat Transfer Operations', type: 'theory', difficulty: 'average',
    question: 'What process uses high temperatures to destroy harmful microorganisms in food?',
    options: ['Canning', 'Cooling', 'Freezing', 'Drying'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0853', area: 'C', subTopic: 'food-processing',
    topic: 'Food Processing Equipment', type: 'theory', difficulty: 'easy',
    question: 'Which of the following equipment is commonly used for mixing ingredients in food processing?',
    options: ['Extruder', 'Mixer', 'Peeler', 'Freezer'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0854', area: 'C', subTopic: 'food-processing',
    topic: 'Drying Techniques', type: 'theory', difficulty: 'average',
    question: 'What is the main advantage of freeze drying over conventional drying methods?',
    options: ['Retains color and flavor', 'Reduces processing time', 'Increases shelf-life', 'Is cheaper'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0855', area: 'C', subTopic: 'food-processing',
    topic: 'Food Safety Regulations', type: 'computation', difficulty: 'hard',
    question: 'A food product\'s weight after processing is 1.5 kg with a moisture content of 10%. If the initial weight was 2 kg with 20% moisture, calculate the percentage of water loss during processing. (Note: Include unnecessary initial batch temperature of 25°C)',
    options: ['25%', '37.5%', '15%', '10%'],
    correctAnswer: 1,
    solution: {
      given: 'Initial weight = 2 kg, Initial moisture = 20%, Final weight = 1.5 kg, Final moisture = 10%',
      steps: ['Calculate initial water weight: 2 kg × 20% = 0.4 kg', 'Calculate final water weight: 1.5 kg × 10% = 0.15 kg', 'Water loss = Initial water - Final water = 0.4 kg - 0.15 kg = 0.25 kg', 'Percentage Water Loss = (Water Loss / Initial Water) × 100% = (0.25 kg / 0.4 kg) × 100% = 62.5%'],
      formula: 'Percentage Water Loss = (Water Loss / Initial Water) × 100%',
      keyConcept: 'Water loss percentage is calculated based on the initial and final water content.',
      commonMistakes: ['Confusing weight with percentage', 'Forgetting to use initial water weight for comparison'],
      extraneousGivens: ['Initial batch temperature: 25°C is unnecessary'],
    }
  },
  {
    id: 'llm-c-0856', area: 'C', subTopic: 'food-processing',
    topic: 'Food Product Examples', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is an example of a preserved food product?',
    options: ['Fresh fruits', 'Frozen chicken', 'Raw vegetables', 'Uncooked rice'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0857', area: 'C', subTopic: 'food-processing',
    topic: 'Coconut Processing', type: 'theory', difficulty: 'easy',
    question: 'Which product is obtained from the process of extracting oil from coconut meat?',
    options: ['Copra', 'Coconut sugar', 'Desiccated coconut', 'Coconut flour'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0858', area: 'C', subTopic: 'food-processing',
    topic: 'Corn Milling', type: 'computation', difficulty: 'hard',
    question: 'During corn milling, if 800 kg of corn kernels produce 600 kg of corn grits, what is the milling recovery rate? (Note: Ignore irrelevant temperature and humidity values in the equation.)',
    options: ['65%', '75%', '80%', '85%'],
    correctAnswer: 1,
    solution: {
      given: 'Input = 800 kg, Output = 600 kg',
      steps: ['Milling Recovery Rate = (Output / Input) × 100%', 'Milling Recovery Rate = (600 kg / 800 kg) × 100% = 75%'],
      formula: 'Milling Recovery Rate = (Output / Input) × 100%',
      keyConcept: 'Milling recovery indicates the efficiency of the milling process.',
      commonMistakes: ['Calculating without converting to a percentage', 'Confusing input and output values'],
      extraneousGivens: ['Temperature and humidity values are unnecessary for calculation'],
    }
  },
  {
    id: 'llm-c-0859', area: 'C', subTopic: 'food-processing',
    topic: 'Food Mixing', type: 'theory', difficulty: 'average',
    question: 'What is the primary function of a mixer in food processing?',
    options: ['To shape food products', 'To combine ingredients uniformly', 'To apply heat', 'To cool food products'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0860', area: 'C', subTopic: 'food-processing',
    topic: 'Fermentation Process', type: 'computation', difficulty: 'hard',
    question: 'A batch of fermented product has an initial volume of 200 L. If it loses 30% of its volume during fermentation, what is the final volume of the product? (Note: Initial fermentation temperature is 30°C but is irrelevant for this calculation.)',
    options: ['140 L', '170 L', '120 L', '100 L'],
    correctAnswer: 0,
    solution: {
      given: 'Initial Volume = 200 L, Volume Loss = 30%',
      steps: ['Calculate volume loss: Volume Loss = Initial Volume × (Volume Loss Percentage) = 200 L × 30% = 60 L', 'Final Volume = Initial Volume - Volume Loss = 200 L - 60 L = 140 L'],
      formula: 'Final Volume = Initial Volume - (Initial Volume × Volume Loss Percentage)',
      keyConcept: 'Final volume after fermentation indicates the effect of the process on product yield.',
      commonMistakes: ['Forgetting to calculate the percentage of the initial volume', 'Mistaking final volume for volume loss'],
      extraneousGivens: ['Initial fermentation temperature: 30°C is unnecessary'],
    }
  },
  {
    id: 'llm-c-0861', area: 'C', subTopic: 'food-engineering',
    topic: 'Stages of Food Processing', type: 'theory', difficulty: 'easy',
    question: 'Which stage of food processing focuses on washing, sorting, and drying?',
    options: ['Primary Stage', 'Secondary Stage', 'Tertiary Stage', 'Final Stage'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0862', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Preservation Techniques', type: 'theory', difficulty: 'average',
    question: 'Which of the following is a common method for preserving food?',
    options: ['Refrigeration', 'Storing at room temperature', 'Aquaponics', 'Food waste'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0863', area: 'C', subTopic: 'food-engineering',
    topic: 'Pasteurization Process', type: 'theory', difficulty: 'average',
    question: 'What is pasteurization primarily used for?',
    options: ['Freezing food products', 'Reducing pathogenic bacterial load', 'Increasing sugar content in foods', 'Enhancing food flavor'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0864', area: 'C', subTopic: 'food-engineering',
    topic: 'Types of Drying Processes', type: 'theory', difficulty: 'average',
    question: 'Which drying technology maintains the original appearance of the product?',
    options: ['Heated air drying', 'Conduction drying', 'Freeze drying', 'Microwave drying'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0865', area: 'C', subTopic: 'food-engineering',
    topic: 'Mechanical Processing', type: 'theory', difficulty: 'average',
    question: 'What does the mechanical processing operation of mixing involve?',
    options: ['Combining solid particles without altering structure', 'Separating unwanted components', 'Reducing particle size', 'Heating mixtures'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0866', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Canning', type: 'theory', difficulty: 'average',
    question: 'What is the purpose of canning food products?',
    options: ['To enhance nutrient content', 'To preserve food in a hermetically sealed container', 'To increase spoilage', 'To remove all flavors'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0867', area: 'C', subTopic: 'food-engineering',
    topic: 'Importance of HACCP', type: 'theory', difficulty: 'hard',
    question: 'Why is Hazard Analysis Critical Control Point (HACCP) important in food processing?',
    options: ['It allows for longer food preservation', 'It ensures the aesthetic appearance of food', 'It identifies potential hazards in food production', 'It enhances food flavors'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0868', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Processing Equipment', type: 'theory', difficulty: 'average',
    question: 'What type of equipment is commonly used in the food industry for slicing vegetables?',
    options: ['Pelletizer', 'Mixer', 'Vegetable Cutter', 'Canner'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0869', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Microbiology', type: 'theory', difficulty: 'hard',
    question: 'Which of the following processes is essential for inactivating enzymes in vegetables?',
    options: ['Sterilization', 'Blanching', 'Canning', 'Refrigeration'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0870', area: 'C', subTopic: 'food-engineering',
    topic: 'Coconut Processing', type: 'theory', difficulty: 'average',
    question: 'What is the main by-product of coconut processing?',
    options: ['Copra', 'Coconut vinegar', 'Coconut sugar', 'Coconut oil'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0871', area: 'C', subTopic: 'food-engineering',
    topic: 'Coconut Sugar Processing', type: 'computation', difficulty: 'average',
    question: 'If 200 kilograms of coconut sap is collected, and the recovery rate of coconut sugar is 18%, what is the weight of coconut sugar produced? Additional irrelevant data: Harvesting time is 5 hours, sap pH is 6.0, and sugar crystallization time is 24 hours.',
    options: ['36 kg', '28 kg', '40 kg', '30 kg'],
    correctAnswer: 0,
    solution: {
      given: 'Weight of coconut sap = 200 kg, Recovery rate = 18%',
      steps: ['Calculate the weight of coconut sugar produced: Weight of sugar = Weight of sap × Recovery rate = 200 kg × 0.18 = 36 kg'],
      formula: 'Weight of sugar = Weight of sap × Recovery rate',
      keyConcept: 'Understanding recovery rates is essential in processing yield calculations.',
      commonMistakes: ['Not converting percentage to decimal', 'Including irrelevant factors like pH', 'Misunderstanding recovery rate'],
      extraneousGivens: ['Harvesting time: 5 hours', 'Sap pH: 6.0', 'Sugar crystallization time: 24 hours'],
    }
  },
  {
    id: 'llm-c-0872', area: 'C', subTopic: 'food-engineering',
    topic: 'Canned Food Processing', type: 'computation', difficulty: 'average',
    question: 'If a pressure canner operates at 15 psi and prevents spoilage for 100 jars of fruit at a temperature of 121°C, how much energy in kJ is required to maintain the process for 30 minutes? Given that it takes 500 kJ to heat one jar, and you have 200 kJ of waste heat from the system that is not utilized.',
    options: ['4800 kJ', '4900 kJ', '4700 kJ', '5000 kJ'],
    correctAnswer: 1,
    solution: {
      given: 'Number of jars = 100, Energy per jar = 500 kJ, Time = 30 minutes, Unused heat = 200 kJ',
      steps: ['Calculate total energy needed: Total energy = Number of jars × Energy per jar = 100 × 500 kJ = 50000 kJ', 'Subtract wasted heat: Effective energy = Total energy - Unused heat = 50000 - 200 = 49000 kJ'],
      formula: 'Total energy = Number of jars × Energy per jar; Effective energy = Total energy - Unused heat',
      keyConcept: 'Energy management is critical in food processing to ensure efficiency.',
      commonMistakes: ['Incorrectly adding or subtracting excess given values', 'Not understanding the impact of wasted energy', 'Failing to convert units correctly'],
      extraneousGivens: ['Ambient temperature: 30°C', 'Pressure level: 15 psi', 'Processing time: 30 minutes', 'Heat loss: 200 kJ'],
    }
  },
  {
    id: 'llm-c-0873', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Preservation Methods', type: 'theory', difficulty: 'average',
    question: 'What is the purpose of irradiation in food preservation?',
    options: ['To enhance flavor', 'To kill bacteria and pests without using heat', 'To reduce sugar content', 'To maintain moisture content'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0874', area: 'C', subTopic: 'food-engineering',
    topic: 'Mechanical Separation Methods', type: 'theory', difficulty: 'hard',
    question: 'Which mechanical separation method is often used to remove solids from liquids?',
    options: ['Filtration', 'Pneumatic conveying', 'Sorting', 'Screening'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0875', area: 'C', subTopic: 'food-engineering',
    topic: 'Rice Milling Process', type: 'computation', difficulty: 'average',
    question: 'If 1000 kg of rice is milled and the milling recovery rate is 65%, how many kilograms of rice will be left after milling? Known: This process uses 50 kg of energy, and the moisture content of the rice is 20%.',
    options: ['650 kg', '350 kg', '450 kg', '550 kg'],
    correctAnswer: 0,
    solution: {
      given: 'Input weight = 1000 kg, Recovery rate = 65%',
      steps: ['Calculate the amount of rice left after milling: Rice left = Input weight × Recovery rate = 1000 kg × 0.65 = 650 kg'],
      formula: 'Rice left = Input weight × Recovery rate',
      keyConcept: 'Milling recovery rates directly affect yield.',
      commonMistakes: ['Forgetting to convert recovery rate to a decimal', 'Failing to include other variables that do not apply', 'Incorrectly assuming the remaining weight increases'],
      extraneousGivens: ['Energy used: 50 kg', 'Moisture content: 20%'],
    }
  },
  {
    id: 'llm-c-0876', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Processing Machinery', type: 'computation', difficulty: 'hard',
    question: 'A food processor has a mixing capacity of 200 liters per batch. How many batches are needed to process 1200 liters of food? Given that each batch takes 10 minutes to process, and the machine operates at 80% efficiency, leading to an operational time of 240 minutes. The irrelevant information includes a 50 kg weight of the machine and the room temperature of 25°C.',
    options: ['6 batches', '5 batches', '4 batches', '7 batches'],
    correctAnswer: 0,
    solution: {
      given: 'Total volume = 1200 liters, Batch capacity = 200 liters',
      steps: ['Calculate number of batches needed: Number of batches = Total volume / Batch capacity = 1200 liters / 200 liters = 6 batches'],
      formula: 'Number of batches = Total volume / Batch capacity',
      keyConcept: 'Understanding batch processing is crucial to optimizing production.',
      commonMistakes: ['Dividing total volume by the incorrect batch capacity', 'Confusing operational time with total processing time', 'Ignoring efficiency factor completely'],
      extraneousGivens: ['Weight of machine: 50 kg', 'Room temperature: 25°C', 'Processing time per batch: 10 minutes'],
    }
  },
  {
    id: 'llm-c-0877', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Preservation', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is a common method for preserving foods by heating at a temperature below 100°C?',
    options: ['Sterilization', 'Canning', 'Pasteurization', 'Freezing'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0878', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Processing', type: 'theory', difficulty: 'easy',
    question: 'What is the primary objective of food processing?',
    options: ['Enhancing food flavor', 'Extending shelf life', 'Increasing food cost', 'Improving nutritional value'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0879', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Processing Stages', type: 'theory', difficulty: 'average',
    question: 'Which stage of food processing involves post-harvest operations like washing and sorting?',
    options: ['Primary Stage', 'Secondary Stage', 'Tertiary Stage', 'None of the above'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0880', area: 'C', subTopic: 'food-engineering',
    topic: 'Drying Processes', type: 'theory', difficulty: 'average',
    question: 'Which drying technology maintains the original appearance of the product by preventing shrinkage?',
    options: ['Vacuum drying', 'Freeze drying', 'Convection drying', 'Air drying'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0881', area: 'C', subTopic: 'food-engineering',
    topic: 'Heat Transfer Operations', type: 'theory', difficulty: 'average',
    question: 'What is the main purpose of blanching vegetables?',
    options: ['Cooking them thoroughly', 'Inactivating enzymes', 'Killing all microorganisms', 'Drying them for storage'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0882', area: 'C', subTopic: 'food-engineering',
    topic: 'Commodity Processing', type: 'computation', difficulty: 'hard',
    question: 'A batch of corn contains 70 kg with 15% moisture content. If the target moisture content is 12%, how much water must be removed?',
    options: ['1.5 kg', '2.1 kg', '3.5 kg', '4.2 kg'],
    correctAnswer: 2,
    solution: {
      given: 'Initial Weight = 70 kg, Initial MC = 15%, Target MC = 12%',
      steps: ['Calculate initial water content: Water = (70 kg * 15%) = 10.5 kg', 'Calculate dry weight: Dry weight = 70 kg - 10.5 kg = 59.5 kg', 'Set up the equation for target moisture: (Dry Weight / Final Weight) = (100 - Target MC) / 100', 'Final weight = Dry Weight / (1 - Target MC) = 59.5 kg / (1 - 0.12) = 67.68 kg', 'Calculate water to remove: Water to remove = Initial Weight - Final Weight = 70 kg - 67.68 kg = 2.32 kg'],
      formula: 'Final Weight = Dry Weight / (1 - Target MC)',
      keyConcept: 'Moisture content impacts the stability and quality of food products.',
      commonMistakes: ['Miscalculating the initial water content', 'Confusing wet and dry weight', 'Using incorrect final moisture ratios'],
      extraneousGivens: ['Original weight: 70 kg', 'Initial moisture content: 15%'],
    }
  },
  {
    id: 'llm-c-0883', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Drying', type: 'computation', difficulty: 'hard',
    question: 'A fruit dryer can process 300 kg of mangoes with a starting moisture content of 80%. If the target moisture content is 20%, how much water (in kg) will be removed?',
    options: ['180 kg', '200 kg', '210 kg', '240 kg'],
    correctAnswer: 1,
    solution: {
      given: 'Initial Weight = 300 kg, Initial MC = 80%, Target MC = 20%',
      steps: ['Calculate initial water content: Water = (300 kg * 80%) = 240 kg', 'Calculate dry weight: Dry weight = 300 kg - 240 kg = 60 kg', 'Final weight = Dry Weight / (1 - Target MC) = 60 kg / (1 - 0.20) = 75 kg', 'Water to remove = Initial Weight - Final Weight = 300 kg - 75 kg = 225 kg'],
      formula: 'Final Weight = Dry Weight / (1 - Target MC)',
      keyConcept: 'Understanding moisture removal is crucial for effective drying.',
      commonMistakes: ['Incorrectly applying the moisture formula', 'Not using wet basis for calculations', 'Forgetting to convert percentages'],
      extraneousGivens: ['Initial moisture content: 80%', 'Final moisture content: 20%'],
    }
  },
  {
    id: 'llm-c-0884', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Preservation', type: 'theory', difficulty: 'easy',
    question: 'What is the process of sealing food in airtight containers to prevent spoilage called?',
    options: ['Canning', 'Freezing', 'Drying', 'Fermentation'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0885', area: 'C', subTopic: 'food-engineering',
    topic: 'Mechanical Processing', type: 'theory', difficulty: 'easy',
    question: 'Which operation involves cutting and sizing food materials?',
    options: ['Sorting', 'Milling', 'Mixing', 'Baking'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0886', area: 'C', subTopic: 'food-engineering',
    topic: 'Quality Control', type: 'theory', difficulty: 'average',
    question: 'GMP stands for which of the following?',
    options: ['Good Manufacturing Practices', 'Good Microbial Practices', 'Global Manufacturing Practices', 'Good Material Practices'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0887', area: 'C', subTopic: 'food-engineering',
    topic: 'Thermal Processing', type: 'computation', difficulty: 'hard',
    question: 'If a fruit juice is heated for pasteurization at 85°C for 30 seconds, what is the equivalent time in minutes if heated at 70°C, assuming a z-value of 10°C?',
    options: ['2.5 min', '3.5 min', '4.5 min', '6.5 min'],
    correctAnswer: 1,
    solution: {
      given: 'T1 = 85°C, T2 = 70°C, time at T1 = 30 seconds, z-value = 10°C',
      steps: ['Calculate the temperature difference: ΔT = T1 - T2 = 85 - 70 = 15°C', 'Calculate the factor: F = 10^(ΔT/z) = 10^(15/10) = 31.62', 'Calculate the equivalent time: Equivalent time = F × time at T1 = 31.62 × 30 sec = 948.6 sec', 'Convert to minutes: 948.6 sec / 60 = 15.81 min'],
      formula: 'F = 10^(ΔT/z), Equivalent time = F × time at T1',
      keyConcept: 'Thermal processes are critical for ensuring food safety.',
      commonMistakes: ['Using incorrect values for temperature', 'Misunderstanding z-value implications', 'Confusing time units'],
      extraneousGivens: ['Initial temperature: 85°C', 'Time at 85°C: 30 sec', 'Z-value: 10°C'],
    }
  },
  {
    id: 'llm-c-0888', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Processing', type: 'computation', difficulty: 'hard',
    question: 'How much salt is needed to cure 500 kg of meat if the recommended concentration is 3% of the meat\'s weight?',
    options: ['10 kg', '12 kg', '15 kg', '20 kg'],
    correctAnswer: 1,
    solution: {
      given: 'Meat weight = 500 kg, Salt concentration = 3%',
      steps: ['Calculate amount of salt needed: Salt = Meat weight x Salt concentration = 500 kg * 0.03 = 15 kg'],
      formula: 'Salt = Meat Weight × Salt Concentration',
      keyConcept: 'Proper salting is essential for effective curing processes.',
      commonMistakes: ['Not converting percentage to decimal', 'Using incorrect meat weight', 'Confusing weight with volume'],
      extraneousGivens: ['Meat weight: 500 kg', 'Concentration: 3%'],
    }
  },
  {
    id: 'llm-c-0889', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Safety', type: 'theory', difficulty: 'easy',
    question: 'What is the primary aim of HACCP in food processing?',
    options: ['Improve taste', 'Enhance color', 'Prevent contamination', 'Increase shelf life'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0890', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Engineering Principles', type: 'theory', difficulty: 'average',
    question: 'What term describes the act of maintaining hygiene and preventing contamination in food production?',
    options: ['Food Safety', 'Hygiene Management', 'Quality Control', 'Sanitation'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0891', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Processing Techniques', type: 'computation', difficulty: 'hard',
    question: 'If a drying machine can reduce the moisture content of 1 ton of copra from 60% to 10%, how much water is removed during the drying process? (1 ton = 1000 kg)',
    options: ['500 kg', '600 kg', '700 kg', '800 kg'],
    correctAnswer: 3,
    solution: {
      given: 'Initial weight = 1000 kg, Initial MC = 60%, Final MC = 10%',
      steps: ['Calculate initial water weight: Water = 1000 kg × 60% = 600 kg', 'Calculate final dry weight after drying: Dry Weight = 1000 kg - 600 kg = 400 kg', 'Calculate final total weight at 10% moisture: Final Weight = Dry Weight / (1 - Final MC) = 400 kg / 0.90 = 444.44 kg', 'Calculate water removed: Water removed = Initial Weight - Final Weight = 1000 kg - 444.44 kg ≈ 555.56 kg'],
      formula: 'Final Weight = Dry Weight / (1 - Final MC)',
      keyConcept: 'Moisture management is critical for food quality and safety.',
      commonMistakes: ['Forgetting to subtract final weight from initial weight', 'Incorrect percentage conversions', 'Mistaking dry weight calculations'],
      extraneousGivens: ['Initial weight: 1000 kg', 'Initial moisture: 60%', 'Final moisture: 10%'],
    }
  },
  {
    id: 'llm-c-0892', area: 'C', subTopic: 'food-engineering',
    topic: 'Mechanical Processing', type: 'theory', difficulty: 'easy',
    question: 'Which mechanical operation involves the emulsification of ingredients?',
    options: ['Mixing', 'Grinding', 'Filtering', 'Cooling'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0893', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Engineering', type: 'theory', difficulty: 'average',
    question: 'In the moisture content formula, what does \'wet basis\' indicate?',
    options: ['Moisture percentage in dry weight', 'Moisture percentage in total weight', 'Overall weight of the moisture', 'None of the above'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0894', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Processing Concepts', type: 'theory', difficulty: 'easy',
    question: 'What is the main purpose of food processing?',
    options: ['Enhance the flavor of food', 'Transform raw materials into value-added products', 'Increase the nutritional content', 'Reduce the price of food'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0895', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Preservation Techniques', type: 'theory', difficulty: 'easy',
    question: 'Which method involves heating food to eliminate pathogenic bacteria?',
    options: ['Freezing', 'Dehydration', 'Pasteurization', 'Curing'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0896', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Processing Stages', type: 'theory', difficulty: 'average',
    question: 'In which stage of food processing is food subjected to mechanical alterations like crushing or grinding?',
    options: ['Primary Stage', 'Secondary Stage', 'Tertiary Stage', 'None of the above'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0897', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Processing Equipment', type: 'theory', difficulty: 'average',
    question: 'What type of machine is typically used to mix ingredients in food processing?',
    options: ['Centrifuge', 'Mixer', 'Extruder', 'Can sealer'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0898', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Safety Principles', type: 'theory', difficulty: 'hard',
    question: 'Which standard outlines the critical control points to ensure food safety in processing?',
    options: ['Good Manufacturing Practices (GMP)', 'Hazard Analysis Critical Control Point (HACCP)', 'ISO 9001', 'Food Safety Management System (FSMS)'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0899', area: 'C', subTopic: 'food-engineering',
    topic: 'Thermal Processing', type: 'theory', difficulty: 'hard',
    question: 'What is the main purpose of sterilization in food processing?',
    options: ['Increase shelf life', 'Improve taste', 'Enhance nutritional value', 'All of the above'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0900', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Processing Calculations', type: 'computation', difficulty: 'easy',
    question: 'If a food processing operation requires 500 kg of raw materials and operates at an efficiency of 85%, how much final product will be produced?',
    options: ['425 kg', '450 kg', '465 kg', '400 kg'],
    correctAnswer: 0,
    solution: {
      given: 'Input = 500 kg, Efficiency = 85%',
      steps: ['Calculate final product: Final Product = Input × Efficiency', 'Final Product = 500 kg × 0.85 = 425 kg'],
      formula: 'Final Product = Input × Efficiency',
      keyConcept: 'Efficiency affects the yield of processed products.',
      commonMistakes: ['Not converting efficiency to decimal', 'Forgetting to multiply', 'Using wrong input'],
      extraneousGivens: ['Initial raw material weight: 500 kg', 'Operating days: 10', 'Labor cost: 2000 PHP', 'Utilized equipment: Mixer'],
    }
  },
  {
    id: 'llm-c-0901', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Processing Calculations', type: 'computation', difficulty: 'average',
    question: 'A canning process requires heating at a temperature of 121°C for 15 minutes. If the heat transfer coefficient is 60 W/m²K, what is the required heat transfer area of the canner if the temperature difference is 30°C?',
    options: ['0.375 m²', '0.500 m²', '0.400 m²', '0.600 m²'],
    correctAnswer: 0,
    solution: {
      given: 'ΔT = 30°C, h = 60 W/m²K, Q (for 15 minutes) = 15*60*Q (unknown)',
      steps: ['Calculate heat transfer area: A = Q / (h × ΔT)', 'Heat Transfer = Q = h × A × ΔT; rearranging gives A = Q / (h × ΔT)', 'Substituting values gives: A = 60 / (60 × 30) = 0.375 m²'],
      formula: 'A = Q / (h × ΔT)',
      keyConcept: 'Heat transfer area is crucial for processing efficiency.',
      commonMistakes: ['Using wrong formula', 'Miscalculating ΔT', 'Forgetting to convert time to seconds'],
      extraneousGivens: ['Process duration: 15 minutes', 'Initial temperature: 90°C', 'Final product weight: 2 kg'],
    }
  },
  {
    id: 'llm-c-0902', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Preservation Techniques', type: 'theory', difficulty: 'average',
    question: 'Which of the following is a method of preserving food by reducing its moisture content?',
    options: ['Freezing', 'Canning', 'Dehydration', 'Fermentation'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0903', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Processing Equipment', type: 'theory', difficulty: 'average',
    question: 'Which of the following machines is used primarily for drying agricultural products?',
    options: ['Conveyor', 'Dehydrator', 'Canner', 'Mixer'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0904', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Preservation Techniques', type: 'theory', difficulty: 'easy',
    question: 'What is the primary purpose of canning food?',
    options: ['Enhance flavor', 'Prevent spoilage', 'Improve texture', 'Increase price'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0905', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Processing Calculations', type: 'computation', difficulty: 'hard',
    question: 'In a drying process, if the initial moisture content of a product is 20% and the final moisture content desired is 10%, how much water needs to be removed from 1000 kg of the product? (Note: The specific weight of the product is constant, ignoring losses)',
    options: ['100 kg', '50 kg', '200 kg', '150 kg'],
    correctAnswer: 1,
    solution: {
      given: 'Initial MC = 20%, Final MC = 10%, Initial Weight = 1000 kg',
      steps: ['Calculate initial water weight: Water_initial = 1000 kg × 0.20 =', 'Calculate final water weight: Water_final = 1000 kg × 0.10 =', 'Water removed = Water_initial - Water_final = (200 - 100) = 100 kg'],
      formula: 'Water Removed = (Initial Weight × Initial MC) - (Initial Weight × Final MC)',
      keyConcept: 'Understanding moisture removal is crucial in drying processes.',
      commonMistakes: ['Forgetting to convert percentages to decimals', 'Miscalculating initial/final weight', 'Neglecting to apply weights correctly'],
      extraneousGivens: ['Processing time: 30 minutes', 'Ambient temperature: 25°C', 'Type of product: rice', 'Water loss during process: 5%'],
    }
  },
  {
    id: 'llm-c-0906', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Quality Control', type: 'theory', difficulty: 'average',
    question: 'Which of the following is an example of a quality control measure in food processing?',
    options: ['Setting the processing temperature', 'Sourcing raw materials', 'Packaging design', 'All of the above'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0907', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Processing Calculations', type: 'computation', difficulty: 'easy',
    question: 'A food production line can produce 500 units of finished product in 8 hours. How many units does it produce per hour?',
    options: ['60 units/hour', '62.5 units/hour', '65 units/hour', '70 units/hour'],
    correctAnswer: 1,
    solution: {
      given: 'Total output = 500 units, Time = 8 hours',
      steps: ['Calculate production rate: Units_per_hour = Total_output / Time', 'Units_per_hour = 500 units / 8 hours = 62.5 units/hour'],
      formula: 'Units per hour = Total Output / Time',
      keyConcept: 'Production efficiency is key to meeting demand.',
      commonMistakes: ['Forgetting to divide correctly', 'Confusing total output with input time', 'Using wrong units'],
      extraneousGivens: ['Initial setup time: 1 hour', 'Labor cost: 1000 PHP', 'Maintenance time: 30 minutes', 'Type of product: canned goods'],
    }
  },
  {
    id: 'llm-c-0908', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Processing Calculations', type: 'computation', difficulty: 'hard',
    question: 'In a pasteurization process, if 1000 liters of milk is heated at 72°C for 15 seconds, and the specific heat of milk is 3.9 kJ/kgK, how much energy is required? (Note: Assume density of milk is 1 kg/L)',
    options: ['58.5 kJ', '65.0 kJ', '75.0 kJ', '90.0 kJ'],
    correctAnswer: 1,
    solution: {
      given: 'Volume = 1000 L, Density = 1 kg/L, Specific Heat = 3.9 kJ/kgK, Temperature = 72°C',
      steps: ['Calculate mass: Mass = Volume × Density = 1000 kg', 'Energy = Mass × Specific Heat × Temperature Change (assume from 0°C)', 'Energy = 1000 kg × 3.9 kJ/kgK × (72 - 0)°C = 1000 × 3.9 × 72'],
      formula: 'Energy = Mass × Specific Heat × ΔT',
      keyConcept: 'Energy calculations are crucial in thermal processing.',
      commonMistakes: ['Forgetting to apply temperature change', 'Misunderstanding specific heat', 'Incorrect unit conversions'],
      extraneousGivens: ['Final temperature: 4°C', 'Initial temperature: 0°C', 'Time of heating: 15 seconds', 'Heat loss: 10%'],
    }
  },
  {
    id: 'llm-c-0909', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Quality Control', type: 'theory', difficulty: 'hard',
    question: 'What is the role of HACCP in food processing?',
    options: ['To ensure only organic ingredients are used', 'To identify and control potential hazards in the production process', 'To reduce production costs', 'To enhance the taste of food products'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0910', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'What is the primary goal of food processing?',
    options: ['To reduce food waste', 'To increase food shelf life', 'To enhance food aesthetics', 'To create energy from food'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0911', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is NOT a method of food preservation?',
    options: ['Canning', 'Eviscerating', 'Freezing', 'Dehydration'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0912', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'In the Philippines, which agency regulates food safety and quality?',
    options: ['Department of Agriculture (DA)', 'Food and Drug Administration (FDA)', 'Department of Health (DOH)', 'National Food Authority (NFA)'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0913', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What does HACCP stand for?',
    options: ['Hazard Analysis and Critical Control Points', 'Health Assurance and Control of Contaminants Program', 'Hygiene and Food Safety Compliance', 'Hazard Analysis and Cost Control Process'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0914', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'hard',
    question: 'What is the primary purpose of blanching vegetables before freezing?',
    options: ['To enhance color and flavor', 'To remove pesticides and contaminants', 'To inactivate enzymes and preserve quality', 'To add salt for flavor'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0915', area: 'C', subTopic: '',
    topic: '', type: 'computation', difficulty: 'easy',
    question: 'A food product has a moisture content of 20% wet basis. If it is dried to 10% wet basis, what is the percentage decrease in the moisture content? (Assume no loss of solids)',
    options: ['50%', '33.33%', '25%', '20%'],
    correctAnswer: 1,
    solution: {
      given: 'Initial MC = 20%, Final MC = 10%',
      steps: ['Percentage decrease = (Initial MC - Final MC) / Initial MC * 100', '= (20% - 10%) / 20% * 100 = 50%'],
      formula: 'Percentage decrease = (Initial MC - Final MC) / Initial MC * 100',
      keyConcept: 'Moisture content affects product storage and quality.',
      commonMistakes: ['Forgetting to use wet basis', 'Not considering the initial moisture content', 'Calculating absolute values instead of percentages'],
      extraneousGivens: ['Assuming no loss of solids'],
    }
  },
  {
    id: 'llm-c-0916', area: 'C', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'A batch of sweetened condensed milk is produced weighing 2,000 kg. It contains 8% solids. What is the total weight of solids in the batch? Additionally, if the batch undergoes evaporation that removes 500 kg of water, what will be the new solid percentage in the remaining batch?',
    options: ['160 kg, 10%', '240 kg, 12%', '160 kg, 8%', '240 kg, 8%'],
    correctAnswer: 1,
    solution: {
      given: 'Weight of milk = 2000 kg, Solids = 8%',
      steps: ['Total solids = 2000 kg * 0.08 = 160 kg', 'Remaining weight after water removal = 2000 kg - 500 kg = 1500 kg', 'New solid percentage = 160 kg / 1500 kg * 100 = 10.67%'],
      formula: 'Total solids = Weight x Solid %',
      keyConcept: 'Understanding the impact of water removal on concentration.',
      commonMistakes: ['Confusing weight with volume', 'Forgetting to adjust the total weight after water removal', 'Using wrong percentages in calculations'],
      extraneousGivens: ['Initial weight of 2000 kg and 8% solids are necessary, but not water removal weight'],
    }
  },
  {
    id: 'llm-c-0917', area: 'C', subTopic: '',
    topic: '', type: 'computation', difficulty: 'hard',
    question: 'During a pasteurization process, a batch of fruit juice is heated from 5°C to 85°C in 20 minutes. Given that the specific heat of fruit juice is 3.8 kJ/kg°C, how much energy (in kJ) is required to heat 1000 kg of juice?',
    options: ['3000 kJ', '1600 kJ', '1500 kJ', '2000 kJ'],
    correctAnswer: 1,
    solution: {
      given: 'Mass = 1000 kg, Specific heat = 3.8 kJ/kg°C, ΔT = (85 - 5)°C = 80°C',
      steps: ['Energy = Mass x Specific heat x ΔT', '= 1000 kg x 3.8 kJ/kg°C x 80°C = 304000 kJ'],
      formula: 'Energy = m * c * ΔT',
      keyConcept: 'Energy required for heating based on mass and temperature change.',
      commonMistakes: ['Not accounting for mass', 'Calculating specific heat incorrectly', 'Not converting temperature correctly'],
      extraneousGivens: ['Heating time is not required for energy calculation.'],
    }
  },
  {
    id: 'llm-c-0918', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'What is the main purpose of using a steam jacketed kettle in food processing?',
    options: ['To add flavor to foods', 'To achieve faster cooking without burning', 'To mix ingredients thoroughly', 'To increase the pH of the food'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0919', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which type of heat transfer is primarily used during the sterilization of canned goods?',
    options: ['Conduction', 'Convection', 'Radiation', 'Evaporation'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0920', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'hard',
    question: 'What are the key components of a Hazard Analysis Critical Control Point (HACCP) plan?',
    options: ['Conducting hazard analysis, establishing critical control points, monitoring procedures', 'Selecting food processing methods, designing food storage protocols, establishing quality points', 'Identifying inputs, output mapping, quality assurance steps', 'Food safety audits, employee training programs, machinery maintenance schedules'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0921', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'What does the term \'GMP\' stand for in food manufacturing?',
    options: ['Good Manufacturing Procedure', 'General Manufacturing Policies', 'Good Manufacturing Practices', 'General Management Plan'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0922', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What is the effect of high humidity on the drying process of agricultural products?',
    options: ['It increases drying rates', 'It decreases drying rates', 'It has no effect on drying rates', 'It improves product quality'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0923', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'hard',
    question: 'What is the role of emulsifiers in food processing?',
    options: ['To enhance flavor', 'To stabilize mixtures of oil and water', 'To preserve food', 'To increase the shelf-life'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0924', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which of the following practices is essential for maintaining food safety in processing facilities?',
    options: ['Daily cleaning of the facility', 'Routine maintenance of equipment', 'Conducting regular employee training', 'All of the above'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0925', area: 'C', subTopic: '',
    topic: '', type: 'computation', difficulty: 'hard',
    question: 'A 1,500 kg batch of corn is processed to extract oil. The extraction leaves 600 kg of corn meal as a by-product. If the oil recovery is 20% of the original corn batch, what is the weight of the oil extracted?',
    options: ['300 kg', '375 kg', '400 kg', '150 kg'],
    correctAnswer: 0,
    solution: {
      given: 'Batch weight = 1,500 kg, By-product weight = 600 kg, Oil recovery = 20%',
      steps: ['Oil extracted = Batch weight x (Oil recovery percentage)', '= 1500 kg x 0.20 = 300 kg'],
      formula: 'Oil extracted = Batch weight x Oil recovery percentage',
      keyConcept: 'Understanding oil recovery ratios can impact inventory assessments.',
      commonMistakes: ['Mixing up by-product weights', 'Not converting percentage to decimal correctly', 'Confusing total with net weights'],
      extraneousGivens: ['By-product weight is not needed to determine oil extracted'],
    }
  },
  {
    id: 'llm-c-0926', area: 'C', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'A food mixer processes 500 kg of dough for baking. If the air temperature is 25°C, the dough is mixed for 30 minutes, and the specific heat of the dough is 2.5 kJ/kg°C. Calculate the energy (in kJ) needed to raise the dough temperature from 25°C to 35°C.',
    options: ['1250 kJ', '1500 kJ', '1000 kJ', '500 kJ'],
    correctAnswer: 0,
    solution: {
      given: 'Weight of dough = 500 kg, Specific heat = 2.5 kJ/kg°C, ΔT = 10°C',
      steps: ['Energy = Weight x Specific heat x ΔT', '= 500 kg x 2.5 kJ/kg°C x 10°C = 12500 kJ'],
      formula: 'Energy = m * c * ΔT',
      keyConcept: 'Calculating energy for heating requires temperature change, mass, and specific heat.',
      commonMistakes: ['Miscalculating the specific heat', 'Not accounting for total time', 'Ignoring temperature changes'],
      extraneousGivens: ['Air temperature is unnecessary for the energy calculation.'],
    }
  },
  {
    id: 'llm-c-0927', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'hard',
    question: 'Which food processing method involves converting carbohydrates into alcohol?',
    options: ['Fermentation', 'Hydrolysis', 'Pasteurization', 'Digestion'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0928', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which of the following is considered a non-thermal method of food preservation?',
    options: ['Canning', 'Freezing', 'High-pressure processing', 'Drying'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0929', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is a primary stage in food processing?',
    options: ['Canning', 'Drying', 'Cooking', 'Fermentation'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0930', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What is the purpose of pasteurization in food processing?',
    options: ['To sterilize food completely', 'To enhance flavor', 'To reduce pathogen load', 'To improve nutritional value'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0931', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which of the following is a mechanical separation operation in food processing?',
    options: ['Filtration', 'Evaporation', 'Pasteurization', 'Cooling'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0932', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'hard',
    question: 'What determines the behavior of a food product when subjected to external forces?',
    options: ['Thermal properties', 'Mechanical properties', 'Chemical properties', 'Electrical properties'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0933', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'What is the main benefit of using high-pressure processing in food preservation?',
    options: ['Improves shelf life', 'Enhances flavor', 'Reduces processing time', 'Eliminates all bacteria'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0934', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Blanching is primarily used for which purpose in food processing?',
    options: ['To improve taste', 'To stop enzyme activity', 'To enhance color', 'To preserve nutrients'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0935', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'hard',
    question: 'What type of drying technology maintains the original appearance of the product?',
    options: ['Conduction drying', 'Freeze drying', 'Hot air drying', 'Vacuum drying'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0936', area: 'C', subTopic: '',
    topic: '', type: 'computation', difficulty: 'easy',
    question: 'If a corn kernel has a moisture content of 20% and a porosity of 65%, what is the porosity when it is dried to 15% moisture content? Use the formula Pm = 69.05 - 0.885 M.',
    options: ['67.50%', '68.62%', '68.20%', '66.75%'],
    correctAnswer: 1,
    solution: {
      given: 'MC=15%',
      steps: ['Calculate porosity: Pm = 69.05 - 0.885 * 0.15 = 68.67%'],
      formula: 'Pm = 69.05 - 0.885 M',
      keyConcept: 'Porosity increases as moisture content decreases.',
      commonMistakes: ['Using wrong moisture content value', 'Not applying the formula correctly'],
      extraneousGivens: ['Initial moisture content: 20%', 'Initial porosity: 65%', 'Weight of corn kernel: 100 g'],
    }
  },
  {
    id: 'llm-c-0937', area: 'C', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'A batch of meat is processed with a yield of 75% at 80 kg initial weight. If the processing loss is due to moisture loss, what is the final weight of the processed meat? Additionally, the initial fat content of the meat is recorded as 20%.',
    options: ['60 kg', '65 kg', '70 kg', '75 kg'],
    correctAnswer: 0,
    solution: {
      given: 'Initial weight = 80 kg, Yield = 75%',
      steps: ['Final weight = Initial weight * Yield = 80 kg * 0.75 = 60 kg'],
      formula: 'Final weight = Initial weight * Yield',
      keyConcept: 'Yield percentages reflect the recoverable final product.',
      commonMistakes: ['Forgetting to convert percentage to decimal', 'Using wrong initial weight'],
      extraneousGivens: ['Initial fat content: 20%', 'Moisture loss: 5 kg'],
    }
  },
  {
    id: 'llm-c-0938', area: 'C', subTopic: '',
    topic: '', type: 'computation', difficulty: 'hard',
    question: 'In a drying process, if a batch of rice has an initial moisture content of 25% and is dried to a final moisture content of 12%, calculate the percentage decrease in moisture content. The initial batch weight is 100 kg, and it is noted that the husk weight is 10 kg.',
    options: ['52% decrease', '48% decrease', '43% decrease', '50% decrease'],
    correctAnswer: 1,
    solution: {
      given: 'Initial moisture content = 25%, Final moisture content = 12%, Initial weight = 100 kg',
      steps: ['Calculate decrease in moisture content = Initial MC - Final MC = 25% - 12% = 13%', 'Percentage decrease = (Decrease / Initial MC) * 100 = (13% / 25%) * 100 = 52%'],
      formula: 'Percentage decrease = ((Initial MC - Final MC) / Initial MC) * 100',
      keyConcept: 'Moisture content affects drying efficiency.',
      commonMistakes: ['Not converting percentages correctly', 'Using weight instead of moisture content'],
      extraneousGivens: ['Batch weight: 100 kg', 'Husk weight: 10 kg'],
    }
  },
  {
    id: 'llm-c-0939', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'What is the primary method for preserving coconut products?',
    options: ['Canning', 'Freezing', 'Dehydration', 'Fermentation'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0940', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What type of product can be made from the fermentation of coconut sap?',
    options: ['Coconut oil', 'Coconut sugar', 'Nata de coco', 'Coconut vinegar'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0941', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What is the legal framework that governs the food industry in the Philippines?',
    options: ['RA 10601', 'RA 10845', 'RA 9211', 'RA 9003'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0942', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'hard',
    question: 'Which process is used to improve the flavor and stability of chocolate products?',
    options: ['Fermentation', 'Conching', 'Temperation', 'Freezing'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0943', area: 'C', subTopic: '',
    topic: '', type: 'computation', difficulty: 'hard',
    question: 'If a food processing plant uses 3000 kg of raw materials with 10% waste during processing, how much of the final product will be produced? Additionally, it is noted that the processing time is 5 hours and the operational cost is 1500 PHP.',
    options: ['2700 kg', '2400 kg', '3000 kg', '2500 kg'],
    correctAnswer: 0,
    solution: {
      given: 'Raw materials = 3000 kg, Waste = 10%',
      steps: ['Final product = Raw materials - (Raw materials * Waste) = 3000 kg - (3000 kg * 0.1) = 2700 kg'],
      formula: 'Final product = Raw materials - (Raw materials * Waste)',
      keyConcept: 'Calculating product yield based on waste percentage.',
      commonMistakes: ['Not accounting for waste', 'Using wrong waste percentage'],
      extraneousGivens: ['Processing time: 5 hours', 'Operational cost: 1500 PHP'],
    }
  },
  {
    id: 'llm-c-0944', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What technology uses a vacuum to preserve food without heat?',
    options: ['Freeze drying', 'Canning', 'Pasteurization', 'Cold storage'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0945', area: 'C', subTopic: '',
    topic: '', type: 'computation', difficulty: 'hard',
    question: 'For a food processing operation, if a batch of fruit weighs 200 kg with an initial moisture content of 30% before drying, and it reduces to 10% moisture content after processing. Calculate the amount of water removed during this process. Additionally, it is recorded that the cost of energy used in the process is 500 PHP.',
    options: ['40 kg', '50 kg', '60 kg', '70 kg'],
    correctAnswer: 1,
    solution: {
      given: 'Initial weight = 200 kg, Initial MC = 30%, Final MC = 10%',
      steps: ['Initial water content = 200 kg * 0.3 = 60 kg', 'Final water content = 200 kg * 0.1 = 20 kg', 'Water removed = Initial water - Final water = 60 kg - 20 kg = 40 kg'],
      formula: 'Water removed = (Initial weight * Initial MC) - (Initial weight * Final MC)',
      keyConcept: 'Calculating water content before and after drying.',
      commonMistakes: ['Not converting percentages correctly', 'Using wrong weight for calculations'],
      extraneousGivens: ['Cost of energy: 500 PHP', 'Initial fat content: 5%'],
    }
  },
  {
    id: 'llm-c-0946', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which process is used to preserve food by applying heat at temperatures below 100°C?',
    options: ['Drying', 'Cooking', 'Pasteurization', 'Canning'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0947', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'What is the purpose of sorting in food processing?',
    options: ['To package food items', 'To remove unwanted materials', 'To increase shelf life', 'To change the product\'s form'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0948', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'hard',
    question: 'Which of the following statements best describes the freeze-drying process?',
    options: ['It involves applying high heat to evaporate moisture.', 'It reduces the microbial load without cooking the product.', 'It combines freezing and sublimation to remove moisture.', 'It preserves food by immersing it in sugar solutions.'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0949', area: 'C', subTopic: '',
    topic: '', type: 'computation', difficulty: 'easy',
    question: 'A batch of rice contains 2400 grams. If moisture content is reduced from 19% to 13% during drying, what is the final weight of the rice after drying? The ambient temperature is 30°C and the relative humidity is 50%.',
    options: ['2208 grams', '2274 grams', '2106 grams', '2304 grams'],
    correctAnswer: 1,
    solution: {
      given: 'Initial weight = 2400 grams, Initial MC = 19%, Final MC = 13%',
      steps: ['Calculate initial moisture content: 0.19 * 2400 = 453.6 grams (moisture weight)', 'Calculate dry weight: 2400 - 453.6 = 1946.4 grams', 'Calculate final weight (13% wet basis): Final weight = Dry weight / (1 - Final MC) = 1946.4 / (1 - 0.13) = 1946.4 / 0.87 = 2237.0 grams', 'Round to nearest option = 2274 grams'],
      formula: 'Final Weight = Dry Weight / (1 - Final MC)',
      keyConcept: 'Understanding moisture content changes affects final product weight.',
      commonMistakes: ['Not considering dry weight', 'Miscalculating percentages', 'Forgetting to convert wet basis to dry basis'],
      extraneousGivens: ['Initial weight: 2400 grams', 'Ambient temperature: 30°C', 'Relative humidity: 50%'],
    }
  },
  {
    id: 'llm-c-0950', area: 'C', subTopic: '',
    topic: '', type: 'computation', difficulty: 'hard',
    question: 'A company uses a mixer for blending ingredients at a rate of 150 kg/h for a chocolate mix. If it has a total output of 900 kg of mix and energy consumption for blending is 5 kWh, what is the energy efficiency in kWh/kg? The temperature of the mixer is maintained at 25°C and the pressure is 101 kPa.',
    options: ['0.0055 kWh/kg', '0.0088 kWh/kg', '0.015 kWh/kg', '0.0033 kWh/kg'],
    correctAnswer: 1,
    solution: {
      given: 'Output = 900 kg, Energy consumption = 5 kWh',
      steps: ['Calculate energy efficiency: Efficiency = Energy consumed / Total output = 5 kWh / 900 kg = 0.0055555 kWh/kg', 'Round to nearest option = 0.0055 kWh/kg'],
      formula: 'Efficiency = Energy consumed / Total output',
      keyConcept: 'Energy efficiency is vital for optimizing production processes.',
      commonMistakes: ['Confusing input and output values', 'Not converting units', 'Ignoring extraneous information'],
      extraneousGivens: ['Maceration temperature: 25°C', 'Pressure: 101 kPa'],
    }
  },
  {
    id: 'llm-c-0951', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What is the role of an extruder in food processing?',
    options: ['To dry products', 'To blend and mix ingredients', 'To heat and shape mixtures', 'To package finished foods'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0952', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'What is the key requirement for canned goods to achieve commercial sterility?',
    options: ['Low temperature and high pressure', 'High temperature and high pressure', 'Sufficient cooking time at high temperature', 'Freezing to low temperatures'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0953', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'Which of the following methods is commonly used for preserving food by creating anaerobic conditions?',
    options: ['Fermentation', 'Freezing', 'Refrigeration', 'Dehydration'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0954', area: 'C', subTopic: '',
    topic: '', type: 'computation', difficulty: 'easy',
    question: 'A coconut oil processing plant extracts 500 liters of virgin coconut oil from a batch of 1000 liters of coconut milk. If each liter of coconut oil weighs 0.91 kg, what is the total weight of the oil extracted? The humidity of the processing area is 75%.',
    options: ['450 kg', '455 kg', '455.5 kg', '460 kg'],
    correctAnswer: 1,
    solution: {
      given: 'Volume of oil = 500 liters, Weight per liter = 0.91 kg',
      steps: ['Calculate total weight: Total Weight = Volume × Weight per liter = 500 liters × 0.91 kg/liter = 455 kg'],
      formula: 'Total Weight = Volume × Weight per liter',
      keyConcept: 'Understanding weight conversions is essential in production.',
      commonMistakes: ['Forgetting to multiply volume by weight per liter', 'Misinterpreting weights', 'Ignoring irrelevant given'],
      extraneousGivens: ['Humidity: 75%'],
    }
  },
  {
    id: 'llm-c-0955', area: 'C', subTopic: '',
    topic: '', type: 'computation', difficulty: 'average',
    question: 'If the dry matter content of corn is 72% and you have 200 kg of wet corn, what is the weight of the dry matter? The temperature of the processing area is 25°C and the barometric pressure is 101.3 kPa.',
    options: ['144 kg', '146 kg', '138 kg', '150 kg'],
    correctAnswer: 0,
    solution: {
      given: 'Wet weight = 200 kg, Dry matter content = 72%',
      steps: ['Calculate dry matter weight: Dry Matter = Wet weight × Dry matter content = 200 kg × 0.72 = 144 kg'],
      formula: 'Dry Matter = Wet weight × Dry matter content',
      keyConcept: 'Calculating dry matter is essential for food processing.',
      commonMistakes: ['Confusing wet and dry weights', 'Using wrong percentage', 'Ignoring irrelevant given'],
      extraneousGivens: ['Temperature: 25°C', 'Pressure: 101.3 kPa'],
    }
  },
  {
    id: 'llm-c-0956', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'hard',
    question: 'What is the main purpose of HACCP in food processing?',
    options: ['To reduce processing costs', 'To eliminate all food waste', 'To identify and control hazards in food production', 'To increase food flavor'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0957', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'easy',
    question: 'What does GMP stand for in the context of food processing?',
    options: ['Good Manufacturing Practice', 'General Manufacturing Process', 'Gradual Manufacturing Protocol', 'Global Manufacturing Project'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0958', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which of the following processing methods uses heat to kill pathogenic organisms?',
    options: ['Filleting', 'Freezing', 'Frying', 'Dehydration'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0959', area: 'C', subTopic: '',
    topic: '', type: 'theory', difficulty: 'average',
    question: 'Which food preservation method typically involves adding salt or sugar?',
    options: ['Canning', 'Fermentation', 'Desiccation', 'Refrigeration'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0960', area: 'C', subTopic: '',
    topic: '', type: 'computation', difficulty: 'hard',
    question: 'In an extrusion process, a machine processes 1000 kg of rice flour to produce extrudates at the rate of 150 kg/h. If the total processing time is 10 hours, what is the total energy consumed by the machine if it uses 8 kWh per kilogram processed? The atmospheric conditions are 25°C and 101.3 kPa.',
    options: ['1200 kWh', '800 kWh', '1000 kWh', '900 kWh'],
    correctAnswer: 3,
    solution: {
      given: 'Total rice flour = 1000 kg, Rate = 150 kg/h, Energy cost = 8 kWh/kg',
      steps: ['Calculate time: Time = Total weight / Rate = 1000 kg / 150 kg/h = 6.67 h', 'Calculate total energy: Total energy = Total kg × Energy per kg = 1000 kg × 8 kWh/kg = 8000 kWh'],
      formula: 'Total energy = Total kg × Energy per kg',
      keyConcept: 'Energy consumption is critical for process optimization.',
      commonMistakes: ['Incorrectly calculating total weight', 'Not accounting for time', 'Forgetting to apply the energy rate correctly'],
      extraneousGivens: ['Atmospheric conditions: 25°C', 'Pressure: 101.3 kPa'],
    }
  },
  {
    id: 'llm-c-0961', area: 'C', subTopic: '',
    topic: '', type: 'computation', difficulty: 'hard',
    question: 'A meat processing plant uses a cooker with a capacity of 500 kg/h and energy requirement of 10 kWh per kg. If the plant operates for 8 hours, how much energy in kWh is consumed by the plant during this time? The external temperature is 30°C, and the humidity is 70%.',
    options: ['3600 kWh', '4000 kWh', '4500 kWh', '3200 kWh'],
    correctAnswer: 1,
    solution: {
      given: 'Capacity = 500 kg/h, Energy requirement = 10 kWh/kg, Operating time = 8 h',
      steps: ['Calculate total weight: Total weight = Capacity × Operating time = 500 kg/h × 8 h = 4000 kg', 'Calculate total energy consumed: Total energy = Total weight × Energy requirement = 4000 kg × 10 kWh/kg = 40000 kWh'],
      formula: 'Total energy = Total weight × Energy requirement',
      keyConcept: 'Understanding energy usage in food processing is essential.',
      commonMistakes: ['Confusing kg/h with total kg', 'Using wrong energy rates', 'Not calculating operating hours correctly'],
      extraneousGivens: ['External temperature: 30°C', 'Humidity: 70%'],
    }
  },
  {
    id: 'llm-c-0962', area: 'C', subTopic: 'food-processing',
    topic: 'Food Preservation Techniques', type: 'theory', difficulty: 'average',
    question: 'Which of the following processes involves heating food to a temperature below boiling to reduce pathogens?',
    options: ['Dehydration', 'Freezing', 'Canning', 'Pasteurization'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0963', area: 'C', subTopic: 'food-processing',
    topic: 'Food Processing Stages', type: 'theory', difficulty: 'easy',
    question: 'What is the primary operation during the primary stage of food processing?',
    options: ['Fermentation', 'Drying', 'Cooking', 'Packaging'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0964', area: 'C', subTopic: 'food-processing',
    topic: 'Food Safety', type: 'theory', difficulty: 'average',
    question: 'HACCP stands for which of the following?',
    options: ['Hazard Analysis and Critical Control Points', 'Health Assessment and Certification of Crop Produce', 'High-Quality Assurance and Control Procedures', 'Hygiene and Cleanliness in Food Processing'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0965', area: 'C', subTopic: 'food-processing',
    topic: 'Food Products', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is a common product of the dehydration process?',
    options: ['Ice cream', 'Dried mangoes', 'Canned vegetables', 'Pickled fruits'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0966', area: 'C', subTopic: 'food-processing',
    topic: 'Food Preservation', type: 'theory', difficulty: 'hard',
    question: 'What temperature and time are typically recommended for pasteurizing milk?',
    options: ['60°C for 30 seconds', '72°C for 15 seconds', '100°C for 1 minute', '85°C for 1 hour'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0967', area: 'C', subTopic: 'food-processing',
    topic: 'Thermal Processing', type: 'theory', difficulty: 'average',
    question: 'Which of the following operations is used to kill microorganisms in canned foods?',
    options: ['Freezing', 'Sterilization', 'Drying', 'Fermentation'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0968', area: 'C', subTopic: 'food-processing',
    topic: 'Mechanical Processing', type: 'theory', difficulty: 'easy',
    question: 'Which unit operation involves reducing the size of food materials?',
    options: ['Mixing', 'Blanching', 'Milling', 'Packing'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0969', area: 'C', subTopic: 'food-processing',
    topic: 'Food Engineering', type: 'computation', difficulty: 'hard',
    question: 'A food dryer has a drying capacity of 300 kg/hour. If the initial moisture content of the food is 80% and the final moisture content is 20%, how much water is removed from the food in kg? The temperature of the drying air is 90°C, and the atmospheric pressure is 101.3 kPa.',
    options: ['180 kg', '300 kg', '240 kg', '150 kg'],
    correctAnswer: 0,
    solution: {
      given: 'Initial MC = 80%, Final MC = 20%, Capacity = 300 kg/h',
      steps: ['Calculate initial weight of water: Initial weight = 300 kg * 80% = 240 kg', 'Calculate final weight of water: Final weight = 300 kg * 20% = 60 kg', 'Water removed = Initial weight - Final weight = 240 kg - 60 kg = 180 kg'],
      formula: 'Water removed = Initial weight - Final weight',
      keyConcept: 'Understanding moisture content changes during drying processes.',
      commonMistakes: ['Confusing moisture content with total weight', 'Calculating wrong weight removed', 'Using incorrect final moisture content'],
      extraneousGivens: ['Temperature of drying air: 90°C', 'Atmospheric pressure: 101.3 kPa'],
    }
  },
  {
    id: 'llm-c-0970', area: 'C', subTopic: 'food-processing',
    topic: 'Food Quality Analysis', type: 'computation', difficulty: 'average',
    question: 'You are testing a batch of rice. The initial weight is 500 kg, and after processing, the weight drops to 480 kg. Calculate the percentage weight loss due to processing. The moisture content before processing was 12%, and the temperature during processing was 80°C.',
    options: ['4.0%', '3.5%', '5.0%', '2.5%'],
    correctAnswer: 0,
    solution: {
      given: 'Initial weight = 500 kg, Final weight = 480 kg, Initial moisture content = 12%',
      steps: ['Weight loss = Initial weight - Final weight = 500 kg - 480 kg = 20 kg', 'Percentage loss = (Weight loss / Initial weight) * 100% = (20 kg / 500 kg) * 100% = 4.0%'],
      formula: 'Percentage loss = (Weight loss / Initial weight) * 100%',
      keyConcept: 'Calculating weight loss helps evaluate processing efficiency.',
      commonMistakes: ['Forgetting to convert weight to percentage', 'Using final weight instead of initial for base', 'Neglecting to multiply by 100'],
      extraneousGivens: ['Moisture content: 12%', 'Temperature: 80°C'],
    }
  },
  {
    id: 'llm-c-0971', area: 'C', subTopic: 'food-processing',
    topic: 'Food Safety Regulations', type: 'theory', difficulty: 'average',
    question: 'Which agency in the Philippines is primarily responsible for food safety?',
    options: ['Department of Health', 'Department of Agriculture', 'Food and Drug Administration', 'Department of Science and Technology'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0972', area: 'C', subTopic: 'food-processing',
    topic: 'Food Product Examples', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is an example of a marine-based processed food?',
    options: ['Dried fish', 'Canned beans', 'Juice drinks', 'Bread'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0973', area: 'C', subTopic: 'food-processing',
    topic: 'Unit Operations', type: 'theory', difficulty: 'average',
    question: 'What unit operation is involved in mixing dry ingredients together to make a batter?',
    options: ['Blending', 'Milling', 'Extrusion', 'Cooling'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0974', area: 'C', subTopic: 'food-processing',
    topic: 'Food Drying', type: 'computation', difficulty: 'hard',
    question: 'A batch dryer has a drying capacity of 200 kg with an initial moisture content of 30% and final moisture content of 10%. How much water is removed during the drying process? The temperature inside the dryer is 85°C, and atmospheric pressure is 101 kPa.',
    options: ['40 kg', '60 kg', '20 kg', '80 kg'],
    correctAnswer: 1,
    solution: {
      given: 'Initial weight = 200 kg, Initial MC = 30%, Final MC = 10%',
      steps: ['Initial water content = Initial weight * Initial MC = 200 kg * 0.30 = 60 kg', 'Final water content = Final weight * Final MC = 200 kg * 0.10 = 20 kg', 'Water removed = Initial water content - Final water content = 60 kg - 20 kg = 40 kg'],
      formula: 'Water removed = Initial water content - Final water content',
      keyConcept: 'Understanding how to calculate moisture removal during drying.',
      commonMistakes: ['Confusing initial and final moisture contents', 'Forgetting to convert to kg', 'Misapplying the formula for water content'],
      extraneousGivens: ['Temperature inside dryer: 85°C', 'Atmospheric pressure: 101 kPa'],
    }
  },
  {
    id: 'llm-c-0975', area: 'C', subTopic: 'food-processing',
    topic: 'Food Labeling', type: 'theory', difficulty: 'average',
    question: 'What is the purpose of food labeling?',
    options: ['To mislead consumers', 'To inform consumers about nutritional content', 'To increase prices', 'To decrease sales'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0976', area: 'C', subTopic: 'food-processing',
    topic: 'Fermentation', type: 'theory', difficulty: 'hard',
    question: 'Which microorganism is primarily used in the fermentation of food processes?',
    options: ['Bacteria', 'Viruses', 'Molds', 'All of the above'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0977', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Preservation', type: 'theory', difficulty: 'easy',
    question: 'What process involves heating food to kill pathogenic bacteria without sterilizing it?',
    options: ['Dehydration', 'Pasteurization', 'Canning', 'Freezing'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0978', area: 'C', subTopic: 'food-engineering',
    topic: 'Canning Process', type: 'theory', difficulty: 'average',
    question: 'What is the purpose of exhausting in the canning process?',
    options: ['To sterilize the food', 'To remove air from the can', 'To add flavor to the food', 'To increase shelf life'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0979', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Drying', type: 'theory', difficulty: 'average',
    question: 'Which drying method retains the original shape and structure of the product?',
    options: ['Conduction drying', 'Freeze drying', 'Hot air drying', 'Mechanical drying'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0980', area: 'C', subTopic: 'food-engineering',
    topic: 'Mechanical Processing', type: 'theory', difficulty: 'average',
    question: 'What operation involves reducing the size of food materials through physical means?',
    options: ['Sorting', 'Mixing', 'Size reduction', 'Cooling'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0981', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Safety', type: 'theory', difficulty: 'average',
    question: 'HACCP is primarily concerned with which aspect of food processing?',
    options: ['Quality control', 'Nutritional value', 'Microbial safety', 'Cost reduction'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0982', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Storage', type: 'theory', difficulty: 'average',
    question: 'What is the recommended storage temperature for perishable foods?',
    options: ['0°C - 5°C', '6°C - 15°C', '20°C - 25°C', '30°C - 35°C'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0983', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Processing Equipment', type: 'theory', difficulty: 'hard',
    question: 'What type of mixer is commonly used in large-scale production of dough?',
    options: ['Vertical mixer', 'Batch mixer', 'Continuous mixer', 'Hand mixer'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0984', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Quality', type: 'theory', difficulty: 'hard',
    question: 'Which property affects the flowability of powdered food products?',
    options: ['Porosity', 'Moisture content', 'Temperature', 'All of the above'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0985', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Engineering Calculations', type: 'computation', difficulty: 'average',
    question: 'A food processing plant processes 500 kg of corn with a moisture content of 25%. After drying, the moisture content is reduced to 14%. What is the total mass of dry corn after drying, ignoring any losses during processing?',
    options: ['375 kg', '425 kg', '450 kg', '500 kg'],
    correctAnswer: 1,
    solution: {
      given: 'Initial mass = 500 kg, Initial moisture content = 25%, Final moisture content = 14%',
      steps: ['Calculate dry mass before drying: Dry mass = Initial mass × (1 - Initial moisture content) = 500 kg × (1 - 0.25) = 375 kg', 'Calculate dry mass after drying: Dry mass remains the same = 375 kg', 'Total mass after drying = Dry mass / (1 - Final moisture content) = 375 kg / (1 - 0.14) = 375 kg / 0.86 ≈ 436.05 kg'],
      formula: 'Dry mass = Initial mass × (1 - Initial moisture content); Total mass after drying = Dry mass / (1 - Final moisture content)',
      keyConcept: 'The dry mass remains constant during drying.',
      commonMistakes: ['Confusing moisture content with dry mass', 'Forgetting to convert percentages to decimals'],
      extraneousGivens: ['Original mass of corn: 500 kg', 'Moisture content before drying: 25%', 'Moisture content after drying: 14%', 'Assuming no weight loss during the process'],
    }
  },
  {
    id: 'llm-c-0986', area: 'C', subTopic: 'food-engineering',
    topic: 'Thermal Processing', type: 'computation', difficulty: 'easy',
    question: 'A sterilization process requires the food to be heated to 121°C for 15 minutes. If a batch of food weighs 10 kg, what is the total energy required, assuming the specific heat capacity of the food is 3.5 kJ/kg°C? (Note: Use 1.5 kg as the weight of the container, which is irrelevant to the calculation.)',
    options: ['525 kJ', '350 kJ', '420 kJ', '480 kJ'],
    correctAnswer: 0,
    solution: {
      given: 'Weight of food = 10 kg, Specific heat = 3.5 kJ/kg°C, Temperature change = 121°C (assumed from room temperature)',
      steps: ['Calculate energy required: Energy = mass × specific heat × temperature change = 10 kg × 3.5 kJ/kg°C × 121°C = 4235 kJ'],
      formula: 'Energy = mass × specific heat × temperature change',
      keyConcept: 'Understanding energy transfer during heating processes.',
      commonMistakes: ['Using the weight of the container in calculations', 'Not converting temperatures to the correct reference point'],
      extraneousGivens: ['Weight of the container: 1.5 kg', 'Temperature of the food: 121°C', 'Time duration: 15 minutes'],
    }
  },
  {
    id: 'llm-c-0987', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Quality Control', type: 'theory', difficulty: 'hard',
    question: 'Which law in the Philippines regulates food safety and quality?',
    options: ['RA 10611', 'RA 9003', 'RA 10817', 'RA 10601'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0988', area: 'C', subTopic: 'food-engineering',
    topic: 'Unit Operations', type: 'theory', difficulty: 'average',
    question: 'Which unit operation is primarily involved in the removal of moisture from food products?',
    options: ['Cooling', 'Drying', 'Freezing', 'Refrigeration'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0989', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Packaging', type: 'theory', difficulty: 'average',
    question: 'What is the primary function of food packaging?',
    options: ['To enhance the appearance of food', 'To extend shelf life', 'To increase production costs', 'To make food harder to transport'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0990', area: 'C', subTopic: 'food-engineering',
    topic: 'Nutrition Engineering', type: 'theory', difficulty: 'hard',
    question: 'What is the role of dietary fibers in processed foods?',
    options: ['To add calories', 'To enhance flavor', 'To improve digestive health', 'To provide protein'],
    correctAnswer: 2,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0991', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Fermentation', type: 'theory', difficulty: 'average',
    question: 'What is a common product of fermentation in food processing?',
    options: ['Vinegar', 'Sugar', 'Salt', 'Oil'],
    correctAnswer: 0,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0992', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Analysis', type: 'computation', difficulty: 'hard',
    question: 'A sample of food contains 20% protein, 15% fat, and 65% carbohydrates. If the total mass of the sample is 200 grams, how much mass of each component is in the sample? (Note: The mass of additives should not be considered.)',
    options: ['40g protein, 30g fat, 130g carbohydrates', '20g protein, 15g fat, 65g carbohydrates', '30g protein, 20g fat, 150g carbohydrates', '50g protein, 40g fat, 110g carbohydrates'],
    correctAnswer: 0,
    solution: {
      given: 'Total mass = 200g, Protein = 20%, Fat = 15%, Carbohydrates = 65%',
      steps: ['Calculate mass of protein: 200g × 20% = 40g', 'Calculate mass of fat: 200g × 15% = 30g', 'Calculate mass of carbohydrates: 200g × 65% = 130g'],
      formula: 'Component mass = Total mass × percentage',
      keyConcept: 'Understanding the composition of food samples.',
      commonMistakes: ['Confusing percentages with actual values', 'Adding percentages incorrectly'],
      extraneousGivens: ['Mass of additives: irrelevant'],
    }
  },
  {
    id: 'llm-c-0993', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Processing', type: 'theory', difficulty: 'easy',
    question: 'Which of the following is NOT a benefit of food processing?',
    options: ['Increased shelf life', 'Improved taste', 'Higher nutritional value', 'Increased spoilage'],
    correctAnswer: 3,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0994', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Safety', type: 'theory', difficulty: 'average',
    question: 'Which is a key principle of Good Manufacturing Practices (GMP)?',
    options: ['Minimizing production costs', 'Ensuring product quality and safety', 'Maximizing production speed', 'Reducing waste'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
  {
    id: 'llm-c-0995', area: 'C', subTopic: 'food-engineering',
    topic: 'Food Safety', type: 'theory', difficulty: 'hard',
    question: 'In the Philippines, which agency is responsible for regulating food products?',
    options: ['Department of Agriculture (DA)', 'Food and Drug Administration (FDA)', 'National Irrigation Administration (NIA)', 'Department of Environment and Natural Resources (DENR)'],
    correctAnswer: 1,
    solution: {
      
      steps: [],
      
      keyConcept: '',
      
      
    }
  },
];
