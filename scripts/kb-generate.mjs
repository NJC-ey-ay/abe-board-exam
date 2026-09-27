import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import OpenAI from 'openai';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENROUTER_API_KEY,
  defaultHeaders: { 'HTTP-Referer': 'https://abe-study.vercel.app' },
});

const MODEL = 'gpt-4o-mini';
const CONCURRENCY = 8;
const QUESTIONS_PER_CALL = 25;
const MAX_CONTEXT_CHARS = 50000;
const MIN_CONTEXT_CHARS = 3000;

const kbText = JSON.parse(fs.readFileSync(path.join(__dirname, 'kb-text-extracted.json'), 'utf-8'));

const tos = {
  A: {
    name: 'Agricultural and Biosystems Power, Energy and Machinery Engineering (32%)',
    domains: [
      { id: 'power-engineering', name: 'Agricultural and Biosystems Power Engineering', keywords: ['power', 'engine', 'tractor', 'combustion', 'fuel', 'lubricant', 'ICE'], competencies: ['Identify parts and functions of internal combustion engine', 'Analyze operation, repair and maintenance of ICE', 'Estimate power available from different sources of power', 'Determine properties of fuels and lubricants'] },
      { id: 'mechanization', name: 'Mechanization Planning, Operation, Maintenance, Management and Manufacturing', keywords: ['mechanization', 'field capacity', 'tillage', 'harvesting', 'planting', 'tractor operation', 'maintenance', 'service center'], competencies: ['Plan and manage agricultural mechanization programs', 'Prepare marketing and extension strategies', 'Supervise tractor operation (plowing, harrowing, field operations)', 'Direct preventive maintenance and troubleshooting', 'Supervise establishment of service centers', 'Supervise manufacture and fabrication of machinery'] },
      { id: 'machinery-testing', name: 'Machinery Specifications, Testing and Evaluation', keywords: ['machinery', 'testing', 'evaluation', 'PAES', 'AMTEC', 'design', 'specifications', 'power requirement', 'capacity', 'efficiency'], competencies: ['Evaluate designs and technical specifications of machinery', 'Determine power requirements, capacity and efficiency', 'Conduct testing and evaluation of farm machinery'] },
      { id: 'automation', name: 'Automation, Instrumentation and Control System', keywords: ['automation', 'sensor', 'instrumentation', 'control', 'metrology', 'precision farming'], competencies: ['Apply agricultural sensors for control and automation', 'Apply metrology equipment for agriculture sector'] },
      { id: 'project-mgmt', name: 'Project Management, Feasibility Study, R&D and Extension', keywords: ['project management', 'feasibility study', 'engineering economy', 'RDE', 'GIS', 'information system', 'CPES'], competencies: ['Manage implementation and maintenance of ABE projects', 'Prepare feasibility study and valuation', 'Conduct ABE Research, Training and Extension', 'Apply Agricultural and Bio-Information System'] },
      { id: 'laws-ethics', name: 'Laws, Professional Standards and Ethics', keywords: ['law', 'RA', 'code of ethics', 'IRR', 'AFMech', 'AFMA', 'CPD', 'professional'], competencies: ['ABE Law (RA 10601), IRR, Code of Ethics', 'Relevant laws: AFMech Law, AFMA, Building Code, Environmental Laws'] }
    ]
  },
  B: {
    name: 'Land and Water Resources Engineering (32%)',
    domains: [
      { id: 'hydrology', name: 'Hydrology', keywords: ['hydrology', 'watershed', 'hydrometeorology', 'rainfall', 'runoff', 'infiltration', 'aquifer', 'water quality', 'precipitation'], competencies: ['Describe hydrologic cycle and its engineering application', 'Principles of hydrometeorology and weather instruments', 'Watershed hydrology: runoff, infiltration, erosion', 'Aquifer systems and water quality analysis'] },
      { id: 'irrigation-drainage', name: 'Irrigation and Drainage Engineering', keywords: ['irrigation', 'drainage', 'surveying', 'fluid mechanics', 'groundwater', 'pump', 'sprinkler', 'drip', 'furrow', 'basin', 'water requirement'], competencies: ['Apply theories in leveling, mapping, triangulation, GPS', 'Apply fluid mechanics in design of ABE systems', 'Apply groundwater hydrology in planning', 'Analyze design and maintenance of hydraulic machinery', 'Plan, design, construct irrigation and drainage systems', 'Design pressurized irrigation systems'] },
      { id: 'soil-water-conservation', name: 'Soil and Water Conservation Engineering', keywords: ['soil water', 'conservation', 'erosion', 'USLE', 'farm pond', 'reservoir', 'earth dam', 'spillway', 'channel', 'water conveyance', 'contour', 'terrace'], competencies: ['Apply basic soil-water-plant relations', 'Apply hydrometeorology in planning', 'Apply watershed hydrology principles', 'Design farm ponds, reservoirs, earth dams, spillways', 'Design soil and water control structures', 'Design vegetative and lined water conveyance channels', 'Maintain water conservation works'] },
      { id: 'aquaculture', name: 'Aquaculture Engineering', keywords: ['aquaculture', 'fishery', 'fish pond', 'hatchery'], competencies: ['Apply theories and principles of aquaculture engineering'] },
      { id: 'fundamentals-ag', name: 'Fundamentals of Agricultural, Fishery, Ecological Sciences', keywords: ['crop science', 'soil science', 'animal science', 'fishery', 'ecology', 'environmental science', 'agriculture'], competencies: ['Principles of crop science, soil science, animal science', 'Principles of fisheries and aquatic resources', 'Ecological and environmental sciences'] },
      { id: 'mathematics', name: 'Mathematics and Basic Engineering Principles', keywords: ['math', 'calculus', 'algebra', 'trigonometry', 'statistics', 'probability', 'mechanics', 'thermodynamics', 'fluid mechanics', 'engineering economy', 'surveying', 'strength of materials', 'physics', 'chemistry'], competencies: ['Algebra, trigonometry, geometry', 'Calculus (derivatives, integrals, differential equations)', 'Statistics, probability, regression analysis', 'Engineering mechanics, fluid mechanics, thermodynamics', 'Engineering economy, surveying, strength of materials', 'Physics and chemistry for engineers'] }
    ]
  },
  C: {
    name: 'Agricultural and Biosystems Structures, Environment Engineering, Bioprocess Engineering and Allied Subjects (36%)',
    domains: [
      { id: 'buildings-structures', name: 'Agricultural Buildings and Structures', keywords: ['structure', 'building', 'CPES', 'PERT', 'CPM', 'farm-to-market road', 'bridge', 'psychrometric', 'greenhouse', 'farm structure', 'construction'], competencies: ['Evaluate plans and designs of agricultural buildings', 'Apply engineering mechanics in design of structures', 'Evaluate farm-to-market roads and bridges', 'Manage construction with PERT-CPM', 'Apply psychrometrics in design of processing facilities'] },
      { id: 'farm-electrification', name: 'Farm Electrification', keywords: ['electrification', 'electrical', 'electric motor', 'generator', 'wiring', 'circuit', 'lighting', 'demand load', 'electronics'], competencies: ['Design farm electrification plans', 'Evaluate and supervise operation of motors and generators', 'Apply electronics and instrumentation'] },
      { id: 'environment', name: 'Environment Engineering', keywords: ['environment', 'waste management', 'biogas', 'composting', 'lagoon', 'pollution', 'CDM', 'climate change', 'forest'], competencies: ['Evaluate plans of waste management systems', 'Apply governmental regulations in waste management', 'Manage construction of waste management facilities', 'Apply forest engineering principles', 'Analyze impact of CDM, climate change'] },
      { id: 'bioprocess', name: 'Agricultural and Bioprocess Engineering', keywords: ['bioprocess', 'processing', 'drying', 'milling', 'storage', 'psychrometric', 'heat transfer', 'thermodynamics', 'refrigeration', 'cold storage', 'material handling', 'size reduction', 'separation'], competencies: ['Evaluate processing systems and facilities', 'Primary processing, handling, storage of crops', 'Psychrometrics, heat transfer, thermodynamics', 'Refrigeration and cold storage systems'] },
      { id: 'food-engineering', name: 'Food Engineering', keywords: ['food', 'food processing', 'canning', 'pasteurization', 'HACCP', 'GMP', 'thermal processing', 'D-value', 'F-value'], competencies: ['Apply engineering principles to food manufacturing', 'Analyze process flows with GMP, HACCP principles'] }
    ]
  }
};

function filterByArea(area) {
  return kbText.filter(e => e.area === area || e.area === 'ALL');
}

function filterByKeywords(entries, keywords) {
  const kwList = keywords.map(k => k.toLowerCase());
  const scored = entries.map(e => {
    const s = e.source.toLowerCase();
    const t = e.text.toLowerCase();
    let score = 0;
    for (const kw of kwList) {
      if (s.includes(kw)) score += 5;
      if (t.includes(kw)) score += 1;
    }
    return { ...e, score };
  });
  scored.sort((a, b) => b.score - a.score);
  return scored;
}

function buildSystemMessage(domain, areaCode) {
  const domainDesc = domain.competencies.map((c, i) => `${i + 1}. ${c}`).join('\n');
  const areaName = areaCode === 'A' ? 'Power, Energy and Machinery Engineering' : areaCode === 'B' ? 'Land and Water Resources Engineering' : 'Structures, Environment and Bioprocess Engineering';
  return {
    role: 'system',
    content: `You are an expert ABELE board exam question writer.

AREA ${areaCode}: ${areaName}
DOMAIN: ${domain.name}
COMPETENCIES:
${domainDesc}

CRITICAL RULES:
- Generate exactly ${QUESTIONS_PER_CALL} unique questions
- 60% theory, 40% computation
- Computation problems MUST INCLUDE UNNECESSARY GIVEN VALUES — extra numbers in the problem statement that are NOT needed for calculation. This is non-negotiable.
- For EVERY computation question, extraneousGivens must list ≥1 value that appears in the problem but is irrelevant to solving it.
- Use Philippine context: rice/corn/coconut crops, local brands (Kubota, Mitsubishi, Honda, etc.), Philippine laws/agencies (DA, NIA, DENR, RA 10601, etc.)
- Difficulty: ~30% easy, ~50% average, ~20% hard
- All 4 options must be plausible; wrong answers = common student errors
- For computations: distractors = using wrong formula, wrong value, or missing conversion

EXAMPLE computation with extraneous givens:
Input: subTopic = "power-engineering", topic = "Engine Performance"
Output:
{
  "subTopic": "power-engineering",
  "topic": "Engine Performance",
  "difficulty": "hard",
  "type": "computation",
  "question": "A 4-cylinder diesel engine has a bore of 85 mm, stroke of 95 mm, and compression ratio of 16:1. It operates at 2200 RPM with a brake mean effective pressure of 700 kPa. The mechanical efficiency is 82%. The fuel consumption is 12 kg/h with a heating value of 42 MJ/kg. The engine drives a generator that requires 60 kW. The ambient temperature is 30°C and barometric pressure is 101.3 kPa. What is the brake horsepower of the engine?",
  "options": ["82.4 hp", "93.6 hp", "103.5 hp", "68.7 hp"],
  "correctAnswer": 0,
  "solution": {
    "given": "n=4, bore=85mm=0.085m, stroke=95mm=0.095m, RPM=2200, BMEP=700kPa, mech eff=82%",
    "steps": ["Calculate displacement: Vd = n × π/4 × bore² × stroke = 4 × π/4 × (0.085)² × 0.095 = 0.002155 m³", "Calculate BHP: BHP = (Vd × RPM × BMEP) / (2 × 60000) = (0.002155 × 2200 × 700) / 120000 = 61.48 kW", "Convert to hp: 61.48 × 1.341 = 82.4 hp"],
    "formula": "BHP = (Vd × RPM × BMEP) / (2 × 60000), BHP(kW) × 1.341 = BHP(hp)",
    "keyConcept": "Brake power depends on displacement, speed, and BMEP. Mechanical efficiency gives IHP = BHP/η.",
    "commonMistakes": ["Forgetting to divide by 2 (four-stroke)", "Using compression ratio in calculation", "Confusing BHP with IHP"],
    "extraneousGivens": ["Compression ratio: 16:1", "Fuel consumption: 12 kg/h", "Heating value: 42 MJ/kg", "Generator requirement: 60 kW", "Ambient temperature: 30°C", "Barometric pressure: 101.3 kPa", "Mechanical efficiency: 82%"]
  }
}

Respond ONLY with a valid JSON array. No markdown, no commentary.`
  };
}

function getUserMessage(scored) {
  let context = '';
  let charCount = 0;
  for (const ct of scored) {
    const add = ct.text.slice(0, Math.min(ct.text.length, MAX_CONTEXT_CHARS - charCount));
    if (add.length < 100) continue;
    context += `\n--- [${ct.source}] ---\n${add}\n`;
    charCount += add.length;
    if (charCount >= MAX_CONTEXT_CHARS) break;
  }
  if (charCount < MIN_CONTEXT_CHARS) {
    for (const entry of kbText) {
      if (entry.area !== 'ALL') continue;
      const add = entry.text.slice(0, Math.min(entry.text.length, MAX_CONTEXT_CHARS - charCount));
      if (add.length < 100) continue;
      context += `\n--- [${entry.source}] ---\n${add}\n`;
      charCount += add.length;
      if (charCount >= MAX_CONTEXT_CHARS) break;
    }
  }
  return {
    role: 'user',
    content: `Generate ${QUESTIONS_PER_CALL} board-exam questions based on this reference material:\n\n${context}`
  };
}

async function generateOne(domain, areaCode) {
  const areaEntries = filterByArea(areaCode);
  const scored = filterByKeywords(areaEntries, domain.keywords);
  const messages = [buildSystemMessage(domain, areaCode), getUserMessage(scored)];

  let retries = 3;
  while (retries > 0) {
    try {
      const completion = await openai.chat.completions.create({
        model: MODEL,
        messages,
        temperature: 0.8 + (Math.random() * 0.2),
        max_tokens: 16384,
      });

      const raw = completion.choices[0].message.content.trim();
      let json = raw;
      if (json.startsWith('```')) {
        json = json.replace(/^```(?:json)?\s*\n?/i, '').replace(/\n?```\s*$/i, '');
      }
      const questions = JSON.parse(json);
      if (!Array.isArray(questions)) throw new Error('Response not an array');
      if (questions.length === 0) throw new Error('Empty array');

      for (const q of questions) {
        if (!q.question || !q.options || q.options.length !== 4) throw new Error('Invalid question structure');
        if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer > 3) throw new Error('Invalid correctAnswer');
      }

      return { ok: true, questions, usage: completion.usage };
    } catch (err) {
      retries--;
      if (retries === 0) return { ok: false, error: err.message };
      await new Promise(r => setTimeout(r, 2000));
    }
  }
}

async function generateDomain(domain, areaCode, target) {
  const callsNeeded = Math.ceil(target / QUESTIONS_PER_CALL);
  const allQuestions = [];
  let totalCalls = 0;

  for (let i = 0; i < callsNeeded; i += CONCURRENCY) {
    const batch = [];
    for (let j = 0; j < CONCURRENCY && (i + j) < callsNeeded; j++) {
      batch.push(generateOne(domain, areaCode));
    }
    const results = await Promise.all(batch);
    for (const r of results) {
      totalCalls++;
      if (r.ok) {
        allQuestions.push(...r.questions);
      } else {
        console.log(`    FAIL (${domain.id}): ${r.error.slice(0, 100)}`);
      }
    }
  }

  // Deduplicate
  const seen = new Set();
  return allQuestions.filter(q => {
    const key = (q.question || '').slice(0, 80).toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function buildOutputFile(area, questions) {
  const areaUpper = area;
  const areaLower = area.toLowerCase();
  const esc = s => (String(s ?? '')).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n');
  let out = `import { Question } from './comprehensive-questions';

export const llmArea${areaUpper}Questions: Question[] = [
`;

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    const sol = q.solution || {};
    const id = `llm-${areaLower}-${String(i + 1).padStart(4, '0')}`;

    out += `  {
    id: '${id}', area: '${area}', subTopic: '${esc(q.subTopic)}',
    topic: '${esc(q.topic)}', type: '${q.type || 'theory'}', difficulty: '${q.difficulty || 'average'}',
    question: '${esc(q.question)}',
    options: [${q.options.map(o => `'${esc(o)}'`).join(', ')}],
    correctAnswer: ${q.correctAnswer},
    solution: {
      ${sol.given ? `given: '${esc(sol.given)}',` : ''}
      steps: [${(sol.steps || []).map(s => `'${esc(s)}'`).join(', ')}],
      ${sol.formula ? `formula: '${esc(sol.formula)}',` : ''}
      keyConcept: '${esc(sol.keyConcept)}',
      ${sol.commonMistakes ? `commonMistakes: [${sol.commonMistakes.map(m => `'${esc(m)}'`).join(', ')}],` : ''}
      ${sol.extraneousGivens ? `extraneousGivens: [${sol.extraneousGivens.map(e => `'${esc(e)}'`).join(', ')}],` : ''}
    }
  },\n`;
  }

  out += '];\n';
  return out;
}

async function main() {
  const args = process.argv.slice(2);
  const areasToGenerate = args.length > 0 ? args[0].split(',').map(s => s.trim().toUpperCase()).filter(s => 'ABC'.includes(s)) : ['A', 'B', 'C'];
  if (areasToGenerate.length === 0) { console.log('Usage: node scripts/kb-generate.mjs [A|B|C|A,B,C]'); process.exit(1); }

  console.log(`Generating areas: ${areasToGenerate.join(', ')} — ${MODEL}, concurrency ${CONCURRENCY}, ${QUESTIONS_PER_CALL} per call`);

  for (const area of areasToGenerate) {
    const areaInfo = tos[area];
    const allResults = [];

    for (const domain of areaInfo.domains) {
      const target = Math.ceil(1500 / areaInfo.domains.length);
      console.log(`\n[Area ${area}] ${domain.name} → target ${target}`);

      const questions = await generateDomain(domain, area, target);
      console.log(`  Generated ${questions.length} unique questions for ${domain.id}`);
      allResults.push(...questions);

      // Save checkpoint after each domain
      const tempOut = buildOutputFile(area, allResults);
      const outPath = path.join(__dirname, '..', 'src', 'data', `llm-questions-area-${area.toLowerCase()}.ts`);
      fs.writeFileSync(outPath, tempOut, 'utf-8');
      console.log(`  Checkpoint saved (${allResults.length} total for Area ${area})`);
    }

    console.log(`\n  Area ${area} DONE: ${allResults.length} questions total`);
  }

  console.log('\n=== ALL DONE ===');
}

main().catch(console.error);
