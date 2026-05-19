// AB Engineer Board Exam TOS Reference
// Based on PRC ABELE-TOS 2024

export const tosStructure = {
  subjectA: {
    name: "Agricultural and Biosystems Power, Energy and Machinery Engineering (32%)",
    code: "A",
    percentage: 32,
    subTopics: [
      {
        id: "power-engineering",
        name: "Agricultural and Biosystems Power Engineering",
        competencies: [
          "Identify parts and functions of internal combustion engine",
          "Analyze operation, repair and maintenance of ICE",
          "Estimate power available from different sources of power",
          "Determine properties of fuels and lubricants"
        ]
      },
      {
        id: "mechanization",
        name: "Mechanization Planning, Operation, Maintenance, Management and Manufacturing",
        competencies: [
          "Plan and manage agricultural mechanization programs",
          "Prepare marketing and extension strategies",
          "Supervise tractor operation (plowing, harrowing, field operations)",
          "Direct preventive maintenance and troubleshooting",
          "Supervise establishment of service centers",
          "Supervise manufacture and fabrication of machinery"
        ]
      },
      {
        id: "machinery-testing",
        name: "Machinery Specifications, Testing and Evaluation",
        competencies: [
          "Evaluate designs and technical specifications of machinery",
          "Determine power requirements, capacity and efficiency",
          "Conduct testing and evaluation of farm machinery"
        ]
      },
      {
        id: "automation",
        name: "Automation, Instrumentation and Control System",
        competencies: [
          "Apply agricultural sensors for control and automation",
          "Apply metrology equipment for agriculture sector"
        ]
      },
      {
        id: "project-mgmt",
        name: "Project Management, Feasibility Study, R&D and Extension",
        competencies: [
          "Manage implementation and maintenance of ABE projects",
          "Prepare feasibility study and valuation",
          "Conduct ABE Research, Training and Extension",
          "Apply Agricultural and Bio-Information System"
        ]
      },
      {
        id: "laws-ethics",
        name: "Laws, Professional Standards and Ethics",
        competencies: [
          "ABE Law (RA 10601), IRR, Code of Ethics",
          "Relevant laws: AFMech Law, AFMA, Building Code, Environmental Laws"
        ]
      }
    ]
  },
  subjectB: {
    name: "Land and Water Resources Engineering (32%)",
    code: "B",
    percentage: 32,
    subTopics: [
      {
        id: "hydrology",
        name: "Hydrology",
        competencies: [
          "Describe hydrologic cycle and its engineering application",
          "Principles of hydrometeorology and weather instruments",
          "Watershed hydrology: runoff, infiltration, erosion",
          "Aquifer systems and water quality analysis"
        ]
      },
      {
        id: "irrigation-drainage",
        name: "Irrigation and Drainage Engineering",
        competencies: [
          "Apply theories in leveling, mapping, triangulation, GPS",
          "Apply fluid mechanics in design of ABE systems",
          "Apply groundwater hydrology in planning",
          "Analyze design and maintenance of hydraulic machinery",
          "Plan, design, construct irrigation and drainage systems",
          "Design pressurized irrigation systems"
        ]
      },
      {
        id: "soil-water-conservation",
        name: "Soil and Water Conservation Engineering",
        competencies: [
          "Apply basic soil-water-plant relations",
          "Apply hydrometeorology in planning",
          "Apply watershed hydrology principles",
          "Design farm ponds, reservoirs, earth dams, spillways",
          "Design soil and water control structures",
          "Design vegetative and lined water conveyance channels",
          "Maintain water conservation works"
        ]
      },
      {
        id: "aquaculture",
        name: "Aquaculture Engineering",
        competencies: [
          "Apply theories and principles of aquaculture engineering"
        ]
      },
      {
        id: "fundamentals-ag",
        name: "Fundamentals of Agricultural, Fishery, Ecological Sciences",
        competencies: [
          "Principles of crop science, soil science, animal science",
          "Principles of fisheries and aquatic resources",
          "Ecological and environmental sciences"
        ]
      },
      {
        id: "mathematics",
        name: "Mathematics and Basic Engineering Principles",
        competencies: [
          "Algebra, trigonometry, geometry",
          "Calculus (derivatives, integrals, differential equations)",
          "Statistics, probability, regression analysis",
          "Engineering mechanics, fluid mechanics, thermodynamics",
          "Engineering economy, surveying, strength of materials",
          "Physics and chemistry for engineers"
        ]
      }
    ]
  },
  subjectC: {
    name: "Structures, Environment Engineering and Bioprocess (36%)",
    code: "C",
    percentage: 36,
    subTopics: [
      {
        id: "buildings-structures",
        name: "Agricultural Buildings and Structures",
        competencies: [
          "Evaluate plans and designs of agricultural buildings",
          "Apply engineering mechanics in design of structures",
          "Evaluate farm-to-market roads and bridges",
          "Manage construction with PERT-CPM",
          "Apply psychometrics in design of processing facilities"
        ]
      },
      {
        id: "farm-electrification",
        name: "Farm Electrification",
        competencies: [
          "Design farm electrification plans",
          "Evaluate and supervise operation of motors and generators",
          "Apply electronics and instrumentation"
        ]
      },
      {
        id: "environment",
        name: "Environment Engineering",
        competencies: [
          "Evaluate plans of waste management systems",
          "Apply governmental regulations in waste management",
          "Manage construction of waste management facilities",
          "Apply forest engineering principles",
          "Analyze impact of CDM, climate change"
        ]
      },
      {
        id: "bioprocess",
        name: "Agricultural and Bioprocess Engineering",
        competencies: [
          "Evaluate processing systems and facilities",
          "Primary processing, handling, storage of crops",
          "Psychometrics, heat transfer, thermodynamics",
          "Refrigeration and cold storage systems"
        ]
      },
      {
        id: "food-engineering",
        name: "Food Engineering",
        competencies: [
          "Apply engineering principles to food manufacturing",
          "Analyze process flows with GMP, HACCP principles"
        ]
      }
    ]
  }
};

export const allSubTopics = [
  ...tosStructure.subjectA.subTopics,
  ...tosStructure.subjectB.subTopics,
  ...tosStructure.subjectC.subTopics
];

export function getSubTopicById(id: string) {
  return allSubTopics.find(topic => topic.id === id);
}

export function getSubjectByCode(code: string) {
  if (code === 'A') return tosStructure.subjectA;
  if (code === 'B') return tosStructure.subjectB;
  if (code === 'C') return tosStructure.subjectC;
  return null;
}