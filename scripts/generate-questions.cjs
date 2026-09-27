const fs = require('fs');
const path = require('path');
const OpenAI = require('openai');

const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENROUTER_API_KEY,
  defaultHeaders: { 'HTTP-Referer': 'https://abe-study.vercel.app' },
});

const textDir = path.join(__dirname, '..', 'paes-text');
const outDir = path.join(__dirname, '..', 'paes-questions');

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const CONCURRENCY = 3;
const QUESTIONS_PER_STANDARD = 50;
const MIN_TEXT_LENGTH = 500;

const categories = {
  'Production Machinery': { file: 'production-machinery', ids: [] },
  'Post-Harvest Machinery': { file: 'post-harvest', ids: [] },
  'Engineering Materials': { file: 'engineering-materials', ids: [] },
  'Irrigation Structures': { file: 'irrigation-structures', ids: [] },
  'Agricultural Structures': { file: 'agricultural-structures', ids: [] },
};

// Build category -> standard IDs mapping
const manifest = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'paes-pdfs', 'manifest.json'), 'utf-8'));
for (const item of manifest) {
  if (categories[item.category]) {
    categories[item.category].ids.push(item.id);
  }
}

function buildPrompt(standardId, text) {
  const truncated = text.slice(0, 25000);
  return `You are generating ABE board exam review questions based on a PAES/PNS standard.

Standard: ${standardId}

Content:
${truncated}

Generate ${QUESTIONS_PER_STANDARD} multiple-choice questions (4 choices each) for ABE board exam review based SOLELY on the content above. Cover:
- Scope and field of application
- Definitions and terminology used in the standard
- Dimensional/technical specifications (values, tolerances, materials)
- Performance requirements and acceptance criteria
- Test methods and inspection procedures
- Safety, workmanship, and finish requirements
- Marking, labeling, and documentation requirements

Each question should test real knowledge from the standard, not general knowledge.

Format as a JSON array of objects, each with:
{
  "id": "${standardId}-Q{number}",
  "standardId": "${standardId}",
  "question": "question text",
  "choices": ["A. choice1", "B. choice2", "C. choice3", "D. choice4"],
  "correctAnswer": 0,
  "explanation": "brief explanation of why this is correct"
}
Return ONLY the JSON array, no markdown formatting, no backticks.`;
}

async function generateForStandard(standardId) {
  const textPath = path.join(textDir, `${standardId}.txt`);
  if (!fs.existsSync(textPath)) return { id: standardId, questions: [], error: 'no text file' };

  const text = fs.readFileSync(textPath, 'utf-8').trim();
  if (text.length < MIN_TEXT_LENGTH) return { id: standardId, questions: [], error: `text too short (${text.length} chars)` };

  const prompt = buildPrompt(standardId, text);

  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const resp = await openai.chat.completions.create({
        model: 'openai/gpt-4o-mini',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
        max_tokens: 16384,
      });

      const raw = resp.choices[0].message.content.trim();
      const json = JSON.parse(raw.replace(/^```(?:json)?\n?/i, '').replace(/\n?```$/i, ''));
      if (!Array.isArray(json)) throw new Error('response is not an array');
      return { id: standardId, questions: json, error: null };
    } catch (err) {
      if (attempt === 2) return { id: standardId, questions: [], error: err.message };
      await new Promise(r => setTimeout(r, 5000 * (attempt + 1)));
    }
  }
}

async function processCategory(catName, catConfig) {
  const outPath = path.join(outDir, `${catConfig.file}.json`);
  const existing = fs.existsSync(outPath) ? JSON.parse(fs.readFileSync(outPath, 'utf-8')) : {};
  const ids = catConfig.ids.filter(id => !existing[id]);

  if (ids.length === 0) {
    console.log(`${catName}: all ${catConfig.ids.length} standards already done`);
    return;
  }

  console.log(`${catName}: processing ${ids.length}/${catConfig.ids.length} standards (${QUESTIONS_PER_STANDARD} Q each)`);

  for (let i = 0; i < ids.length; i += CONCURRENCY) {
    const batch = ids.slice(i, i + CONCURRENCY);
    const results = await Promise.all(batch.map(id => generateForStandard(id)));

    for (const r of results) {
      if (r.error) {
        console.log(`  ${r.id}: FAIL - ${r.error}`);
      } else {
        existing[r.id] = r.questions;
        console.log(`  ${r.id}: ${r.questions.length} questions generated`);
      }
    }

    fs.writeFileSync(outPath, JSON.stringify(existing, null, 2), 'utf-8');
    console.log(`  [saved to ${catConfig.file}.json, ${Object.keys(existing).length} standards]`);

    if (i + CONCURRENCY < ids.length) {
      await new Promise(r => setTimeout(r, 2000));
    }
  }

  console.log(`${catName}: DONE - ${Object.keys(existing).length}/${catConfig.ids.length} standards`);
}

async function main() {
  for (const [catName, catConfig] of Object.entries(categories)) {
    await processCategory(catName, catConfig);
  }
  console.log('\nALL DONE');

  // Merge all category files into one summary
  const total = { standards: 0, questions: 0 };
  for (const catConfig of Object.values(categories)) {
    const p = path.join(outDir, `${catConfig.file}.json`);
    if (fs.existsSync(p)) {
      const data = JSON.parse(fs.readFileSync(p, 'utf-8'));
      total.standards += Object.keys(data).length;
      for (const qs of Object.values(data)) total.questions += qs.length;
    }
  }
  console.log(`Total: ${total.standards} standards, ${total.questions} questions`);
}

main().catch(console.error);
