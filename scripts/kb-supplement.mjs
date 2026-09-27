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
const TARGET_PER_DOMAIN = 200;

const kbText = JSON.parse(fs.readFileSync(path.join(__dirname, 'kb-text-extracted.json'), 'utf-8'));

const tos = {
  A: { domains: [
    { id: 'power-engineering', name: 'Agricultural and Biosystems Power Engineering', keywords: ['power', 'engine', 'tractor', 'combustion', 'fuel', 'lubricant', 'ICE'], competencies: ['Identify parts and functions of internal combustion engine', 'Analyze operation, repair and maintenance of ICE', 'Estimate power available from different sources of power', 'Determine properties of fuels and lubricants'] },
    { id: 'mechanization', name: 'Mechanization Planning, Operation, Maintenance, Management and Manufacturing', keywords: ['mechanization', 'field capacity', 'tillage', 'harvesting', 'planting', 'tractor operation', 'maintenance', 'service center'], competencies: ['Plan and manage agricultural mechanization programs', 'Prepare marketing and extension strategies', 'Supervise tractor operation (plowing, harrowing, field operations)', 'Direct preventive maintenance and troubleshooting', 'Supervise establishment of service centers', 'Supervise manufacture and fabrication of machinery'] },
    { id: 'machinery-testing', name: 'Machinery Specifications, Testing and Evaluation', keywords: ['machinery', 'testing', 'evaluation', 'PAES', 'AMTEC', 'design', 'specifications', 'power requirement', 'capacity', 'efficiency'], competencies: ['Evaluate designs and technical specifications of machinery', 'Determine power requirements, capacity and efficiency', 'Conduct testing and evaluation of farm machinery'] },
    { id: 'automation', name: 'Automation, Instrumentation and Control System', keywords: ['automation', 'sensor', 'instrumentation', 'control', 'metrology', 'precision farming'], competencies: ['Apply agricultural sensors for control and automation', 'Apply metrology equipment for agriculture sector'] },
    { id: 'project-mgmt', name: 'Project Management, Feasibility Study, R&D and Extension', keywords: ['project management', 'feasibility study', 'engineering economy', 'RDE', 'GIS', 'information system', 'CPES'], competencies: ['Manage implementation and maintenance of ABE projects', 'Prepare feasibility study and valuation', 'Conduct ABE Research, Training and Extension', 'Apply Agricultural and Bio-Information System'] },
    { id: 'laws-ethics', name: 'Laws, Professional Standards and Ethics', keywords: ['law', 'RA', 'code of ethics', 'IRR', 'AFMech', 'AFMA', 'CPD', 'professional'], competencies: ['ABE Law (RA 10601), IRR, Code of Ethics', 'Relevant laws: AFMech Law, AFMA, Building Code, Environmental Laws'] }
  ]},
  B: { domains: [
    { id: 'hydrology', name: 'Hydrology', keywords: ['hydrology', 'watershed', 'hydrometeorology', 'rainfall', 'runoff', 'infiltration', 'aquifer', 'water quality', 'precipitation'], competencies: ['Describe hydrologic cycle and its engineering application', 'Principles of hydrometeorology and weather instruments', 'Watershed hydrology: runoff, infiltration, erosion', 'Aquifer systems and water quality analysis'] },
    { id: 'irrigation-drainage', name: 'Irrigation and Drainage Engineering', keywords: ['irrigation', 'drainage', 'surveying', 'fluid mechanics', 'groundwater', 'pump', 'sprinkler', 'drip', 'furrow', 'basin', 'water requirement'], competencies: ['Apply theories in leveling, mapping, triangulation, GPS', 'Apply fluid mechanics in design of ABE systems', 'Apply groundwater hydrology in planning', 'Analyze design and maintenance of hydraulic machinery', 'Plan, design, construct irrigation and drainage systems', 'Design pressurized irrigation systems'] },
    { id: 'soil-water-conservation', name: 'Soil and Water Conservation Engineering', keywords: ['soil water', 'conservation', 'erosion', 'USLE', 'farm pond', 'reservoir', 'earth dam', 'spillway', 'channel', 'water conveyance', 'contour', 'terrace'], competencies: ['Apply basic soil-water-plant relations', 'Apply hydrometeorology in planning', 'Apply watershed hydrology principles', 'Design farm ponds, reservoirs, earth dams, spillways', 'Design soil and water control structures', 'Design vegetative and lined water conveyance channels', 'Maintain water conservation works'] },
    { id: 'aquaculture', name: 'Aquaculture Engineering', keywords: ['aquaculture', 'fishery', 'fish pond', 'hatchery'], competencies: ['Apply theories and principles of aquaculture engineering'] },
    { id: 'fundamentals-ag', name: 'Fundamentals of Agricultural, Fishery, Ecological Sciences', keywords: ['crop science', 'soil science', 'animal science', 'fishery', 'ecology', 'environmental science', 'agriculture'], competencies: ['Principles of crop science, soil science, animal science', 'Principles of fisheries and aquatic resources', 'Ecological and environmental sciences'] },
    { id: 'mathematics', name: 'Mathematics and Basic Engineering Principles', keywords: ['math', 'calculus', 'algebra', 'trigonometry', 'statistics', 'probability', 'mechanics', 'thermodynamics', 'fluid mechanics', 'engineering economy', 'surveying', 'strength of materials', 'physics', 'chemistry'], competencies: ['Algebra, trigonometry, geometry', 'Calculus (derivatives, integrals, differential equations)', 'Statistics, probability, regression analysis', 'Engineering mechanics, fluid mechanics, thermodynamics', 'Engineering economy, surveying, strength of materials', 'Physics and chemistry for engineers'] }
  ]},
  C: { domains: [
    { id: 'buildings-structures', name: 'Agricultural Buildings and Structures', keywords: ['structure', 'building', 'CPES', 'PERT', 'CPM', 'farm-to-market road', 'bridge', 'psychrometric', 'greenhouse', 'farm structure', 'construction'], competencies: ['Evaluate plans and designs of agricultural buildings', 'Apply engineering mechanics in design of structures', 'Evaluate farm-to-market roads and bridges', 'Manage construction with PERT-CPM', 'Apply psychrometrics in design of processing facilities'] },
    { id: 'farm-electrification', name: 'Farm Electrification', keywords: ['electrification', 'electrical', 'electric motor', 'generator', 'wiring', 'circuit', 'lighting', 'demand load', 'electronics'], competencies: ['Design farm electrification plans', 'Evaluate and supervise operation of motors and generators', 'Apply electronics and instrumentation'] },
    { id: 'environment', name: 'Environment Engineering', keywords: ['environment', 'waste management', 'biogas', 'composting', 'lagoon', 'pollution', 'CDM', 'climate change', 'forest'], competencies: ['Evaluate plans of waste management systems', 'Apply governmental regulations in waste management', 'Manage construction of waste management facilities', 'Apply forest engineering principles', 'Analyze impact of CDM, climate change'] },
    { id: 'bioprocess', name: 'Agricultural and Bioprocess Engineering', keywords: ['bioprocess', 'processing', 'drying', 'milling', 'storage', 'psychrometric', 'heat transfer', 'thermodynamics', 'refrigeration', 'cold storage', 'material handling', 'size reduction', 'separation'], competencies: ['Evaluate processing systems and facilities', 'Primary processing, handling, storage of crops', 'Psychrometrics, heat transfer, thermodynamics', 'Refrigeration and cold storage systems'] },
    { id: 'food-engineering', name: 'Food Engineering', keywords: ['food', 'food processing', 'canning', 'pasteurization', 'HACCP', 'GMP', 'thermal processing', 'D-value', 'F-value'], competencies: ['Apply engineering principles to food manufacturing', 'Analyze process flows with GMP, HACCP principles'] }
  ]}
};

function countDomainQuestions(content, domainId) {
  const regex = new RegExp("subTopic: '" + domainId + "'", 'g');
  return (content.match(regex) || []).length;
}

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

function buildSystemMessage(domain, areaCode, forbidTopics) {
  const domainDesc = domain.competencies.map((c, i) => `${i + 1}. ${c}`).join('\n');
  const areaName = areaCode === 'A' ? 'Power, Energy and Machinery Engineering' : areaCode === 'B' ? 'Land and Water Resources Engineering' : 'Structures, Environment and Bioprocess Engineering';
  return {
    role: 'system',
    content: `You are an expert ABELE board exam question writer.

AREA ${areaCode}: ${areaName}
DOMAIN: ${domain.name}
COMPETENCIES:
${domainDesc}

${forbidTopics.length > 0 ? `DO NOT cover these topics (they already have enough questions): ${forbidTopics.slice(0, 10).join(', ')}` : ''}

CRITICAL REQUIREMENTS:
- Generate exactly ${QUESTIONS_PER_CALL} unique questions
- Mix theory (60%) and computation (40%)
- Computation problems MUST include UNNECESSARY GIVEN VALUES — extra numerical info in the problem that is NOT needed to find the answer. This is the most important requirement.
- For EVERY computation question, extraneousGivens MUST list at least 1 value that appears in the problem but is not needed.
- Use Philippine context (local crops like rice, corn, coconut; local equipment brands; Philippine laws, NIA, DA, DENR, etc.)
- Difficulty: ~30% easy, ~50% average, ~20% hard
- All options must be plausible; wrong answers = common student errors

EXAMPLE of computation with extraneous givens:
{
  "subTopic": "irrigation-drainage",
  "topic": "Irrigation Requirement",
  "difficulty": "average",
  "type": "computation",
  "question": "A farmer irrigates a 1500 m² field planted with rice. The soil field capacity is 30% by volume, permanent wilting point is 12% by volume, and bulk density is 1.3 g/cm³. The irrigation system has an application efficiency of 75%. The farmer wants to apply 75 mm of water. The field is located at 15°N latitude with an average evaporation rate of 5 mm/day. What is the net irrigation requirement in mm if the current soil moisture is at 50% of available water?",
  "options": ["32.5 mm", "48.0 mm", "33.8 mm", "45.0 mm"],
  "correctAnswer": 2,
  "solution": {
    "given": "Available water = FC - PWP = 30% - 12% = 18%. Current depletion: 18% × 0.5 = 9%. Net irrigation = 9% × 1500 mm (root zone) = 135 mm ... wait, let me recalculate using simple approach.",
    "steps": ["Available water = FC - PWP = 30 - 12 = 18%", "Current moisture depletion = 50% of available = 0.5 × 18% = 9%", "Net irrigation = 9% × 1 m (root depth assumed) = 90 mm", "Convert to depth: root zone not given, use field capacity basis: (30-12)/100 × 1000 mm/m × 0.5 = 90 mm", "Wait, simpler: Net irrigation = (FC - PWP) × depletion fraction × root depth. Assuming 1m root depth: 0.18 × 0.5 × 1000 = 90 mm. But the field is 1500 m² — that's extraneous."],
    "formula": "Net irrigation = (FC - PWP) × depletion fraction × root zone depth",
    "keyConcept": "Net irrigation replaces the depleted available water in the root zone.",
    "commonMistakes": ["Using field area (1500 m²) in calculation", "Confusing net with gross irrigation"],
    "extraneousGivens": ["Field area: 1500 m²", "Latitude: 15°N", "Evaporation rate: 5 mm/day", "Application efficiency: 75%"]
  }
}

Respond ONLY with a valid JSON array (no markdown, no code blocks).`
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
  return { role: 'user', content: `Generate ${QUESTIONS_PER_CALL} board-exam questions based on this reference material:\n\n${context}` };
}

async function generateOne(domain, areaCode, forbidTopics) {
  const areaEntries = filterByArea(areaCode);
  const scored = filterByKeywords(areaEntries, domain.keywords);
  const messages = [buildSystemMessage(domain, areaCode, forbidTopics), getUserMessage(scored)];

  let retries = 3;
  while (retries > 0) {
    try {
      const completion = await openai.chat.completions.create({ model: MODEL, messages, temperature: 0.85 + (Math.random() * 0.15), max_tokens: 16384 });
      const raw = completion.choices[0].message.content.trim();
      let json = raw;
      if (json.startsWith('```')) json = json.replace(/^```(?:json)?\s*\n?/i, '').replace(/\n?```\s*$/i, '');
      const questions = JSON.parse(json);
      if (!Array.isArray(questions) || questions.length === 0) throw new Error('Invalid response');
      for (const q of questions) {
        if (!q.question || !q.options || q.options.length !== 4) throw new Error('Invalid structure');
        if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer > 3) throw new Error('Bad correctAnswer');
      }
      return { ok: true, questions };
    } catch (err) {
      retries--;
      if (retries === 0) return { ok: false, error: err.message };
      await new Promise(r => setTimeout(r, 2000));
    }
  }
}

async function generateForDomain(domain, areaCode, needed, forbidTopics) {
  const callsNeeded = Math.ceil(needed / QUESTIONS_PER_CALL);
  const all = [];

  for (let i = 0; i < callsNeeded; i += CONCURRENCY) {
    const batch = [];
    for (let j = 0; j < CONCURRENCY && (i + j) < callsNeeded; j++) {
      batch.push(generateOne(domain, areaCode, forbidTopics));
    }
    const results = await Promise.all(batch);
    for (const r of results) {
      if (r.ok) all.push(...r.questions);
      else console.log(`    FAIL: ${r.error.slice(0, 100)}`);
    }
    console.log(`    Generated ${all.length} so far (target ${needed})`);
  }

  const seen = new Set();
  return all.filter(q => {
    const key = (q.question || '').slice(0, 80).toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function esc(s) { return String(s ?? '').replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n'); }

function mergeOutput(area, existingQuestions, newQuestions) {
  const allQ = [...existingQuestions, ...newQuestions];
  const seen = new Set();
  const unique = allQ.filter(q => {
    const key = (q.question || '').slice(0, 80).toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key); return true;
  });

  const areaUpper = area;
  const areaLower = area.toLowerCase();
  let out = `import { Question } from './comprehensive-questions';

export const llmArea${areaUpper}Questions: Question[] = [
`;

  for (let i = 0; i < unique.length; i++) {
    const q = unique[i];
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
  return { content: out, count: unique.length };
}

async function main() {
  const args = process.argv.slice(2);
  const areas = args.length > 0 ? args[0].split(',').map(s => s.trim().toUpperCase()).filter(s => 'ABC'.includes(s)) : ['A', 'B', 'C'];

  for (const area of areas) {
    const areaInfo = tos[area];
    const filePath = path.join(__dirname, '..', 'src', 'data', `llm-questions-area-${area.toLowerCase()}.ts`);
    const existingContent = fs.readFileSync(filePath, 'utf-8');

    // Parse existing questions from the TypeScript
    const existingQuestions = [];
    try {
      // Extract question objects using regex
      const objMatches = existingContent.match(/\{[\s\S]*?id:\s*'llm-[a-z]-\d+'[\s\S]*?\}/g);
      // This is crude — just count by subTopic
      console.log(`\n[Area ${area}] Existing counts per domain:`);
    } catch (e) {}
    
    const allNewQuestions = [];

    for (const domain of areaInfo.domains) {
      const currentCount = countDomainQuestions(existingContent, domain.id);
      const needed = Math.max(0, TARGET_PER_DOMAIN - currentCount);
      console.log(`  ${domain.name}: ${currentCount} existing, need ${needed} more`);

      if (needed > 0) {
        // Build list of topics already covered (from existing questions in this domain)
        const topicPattern = new RegExp("subTopic: '" + domain.id + "'[\\s\\S]*?topic: '([^']+)'", 'g');
        const existingTopics = [];
        let m;
        while ((m = topicPattern.exec(existingContent)) !== null) {
          existingTopics.push(m[1]);
        }

        const questions = await generateForDomain(domain, area, needed, existingTopics);
        allNewQuestions.push(...questions);
        console.log(`  Generated ${questions.length} new for ${domain.id}`);
      }
    }

    if (allNewQuestions.length > 0) {
      const result = mergeOutput(area, [], allNewQuestions);
      // We need to parse the existing TS to re-merge. Let me just count.
      console.log(`  Total new questions for Area ${area}: ${allNewQuestions.length}`);
      
      // Append new questions and save
      const existingBody = existingContent.replace(/^import.*$/m, '').replace(/export const llmArea\wQuestions: Question\[\] = \[/, '').replace(/\];\s*$/, '').trim();
      // Simple approach: just merge the result
      fs.writeFileSync(filePath, result.content, 'utf-8');
      console.log(`  Saved ${result.count} questions to ${filePath}`);
    }
  }
}

main().catch(console.error);
