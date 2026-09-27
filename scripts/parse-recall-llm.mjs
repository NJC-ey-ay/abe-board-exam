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
const QUESTIONS_PER_CALL = 15;
const MAX_CHUNK_CHARS = 15000;

const rawData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'recalled-questions-raw.json'), 'utf-8'));

function chunkText(text, maxChars) {
  const chunks = [];
  for (let i = 0; i < text.length; i += maxChars) {
    chunks.push(text.slice(i, i + maxChars));
  }
  return chunks;
}

function buildSystemMessage() {
  return {
    role: 'system',
    content: `You are an expert at extracting structured board exam questions from raw text.

TASK: Parse the provided text and extract ALL structured multiple-choice questions with:
- Question stem
- 4 options (A, B, C, D)
- Correct answer
- Topic/area classification

OUTPUT FORMAT (JSON array):
[
  {
    "question": "Full question text including given values",
    "options": ["Option A text", "Option B text", "Option C text", "Option D text"],
    "correctAnswer": 0,  // 0=A, 1=B, 2=C, 3=D
    "area": "A",         // A, B, or C
    "topic": "Specific topic name",
    "subTopic": "More specific subtopic",
    "difficulty": "average",  // easy, average, hard
    "type": "computation",    // computation or theory
    "year": 2021,
    "extraneousGivens": ["list of values in problem not needed for solution"],
    "solution": {
      "given": "Given values from problem",
      "formula": "Formula used",
      "steps": ["Step 1", "Step 2"],
      "keyConcept": "Key concept tested",
      "commonMistakes": ["Common mistake 1", "Common mistake 2"]
    }
  }
]

RULES:
1. ONLY extract questions that have clear 4 options (A/B/C/D or 1/2/3/4)
2. Identify the correct answer from context (marked, explained, or implied)
3. Classify by ABELE area: A=Power/Energy/Machinery, B=Land/Water, C=Structures/Bioprocess
4. For computation problems, identify extraneous givens (board exam style)
5. Preserve original wording/style as much as possible
6. If no clear correct answer, mark correctAnswer: -1 and add "needsReview": true
7. Return ONLY valid JSON array, no extra text`
  };
}

async function parseChunk(text, year) {
  const prompt = `Extract all structured multiple-choice questions from this ${year} ABELE recalled exam text. Focus on questions with 4 clear options and identifiable correct answers.

TEXT:
${text}`;

  const completion = await openai.chat.completions.create({
    model: MODEL,
    messages: [
      buildSystemMessage(),
      { role: 'user', content: prompt }
    ],
    temperature: 0.1,
    max_tokens: 8000,
  });

  const content = completion.choices[0].message.content;
  try {
    // Extract JSON from response
    const jsonMatch = content.match(/\[[\s\S]*\]/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
    return JSON.parse(content);
  } catch (e) {
    console.error('Parse error:', e.message);
    console.error('Raw content:', content.substring(0, 500));
    return [];
  }
}

async function main() {
  console.log('Starting LLM parsing of recall questions...');
  
  const allQuestions = [];
  let totalChunks = 0;
  
  for (const entry of rawData) {
    console.log(`\nProcessing: ${entry.source} (${entry.chars} chars)`);
    const chunks = chunkText(entry.text, MAX_CHUNK_CHARS);
    console.log(`  Split into ${chunks.length} chunks`);
    totalChunks += chunks.length;
    
    for (let i = 0; i < chunks.length; i++) {
      console.log(`  Chunk ${i + 1}/${chunks.length}...`);
      const questions = await parseChunk(chunks[i], entry.year);
      if (questions.length > 0) {
        allQuestions.push(...questions);
        console.log(`    Found ${questions.length} questions`);
      }
      
      // Rate limiting
      await new Promise(r => setTimeout(r, 500));
    }
  }
  
  console.log(`\nTotal questions extracted: ${allQuestions.length}`);
  console.log(`Total chunks processed: ${totalChunks}`);
  
  // Save raw extracted questions
  fs.writeFileSync(
    path.join(__dirname, '..', 'src', 'data', 'recalled-questions-parsed.json'),
    JSON.stringify(allQuestions, null, 2),
    'utf-8'
  );
  console.log('Saved to recalled-questions-parsed.json');
}

main().catch(console.error);