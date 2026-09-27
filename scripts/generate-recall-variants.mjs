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

const parsedQuestions = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'recalled-questions-parsed.json'), 'utf-8'));

function buildVariantPrompt(originalQuestion, targetOptionIndex) {
  const correctOption = originalQuestion.options[targetOptionIndex];
  const otherOptions = originalQuestion.options.filter((_, i) => i !== targetOptionIndex);
  
  return {
    role: 'user',
    content: `ORIGINAL QUESTION:
${originalQuestion.question}

OPTIONS:
A. ${originalQuestion.options[0]}
B. ${originalQuestion.options[1]}
C. ${originalQuestion.options[2]}
D. ${originalQuestion.options[3]}

CORRECT ANSWER: ${String.fromCharCode(65 + originalQuestion.correctAnswer)}
AREA: ${originalQuestion.area}
TOPIC: ${originalQuestion.topic}
SUBTOPIC: ${originalQuestion.subTopic}
DIFFICULTY: ${originalQuestion.difficulty}
TYPE: ${originalQuestion.type}
YEAR: ${originalQuestion.year}

TASK: Create a NEW question where "${correctOption}" (currently option ${String.fromCharCode(65 + targetOptionIndex)}) becomes the CORRECT answer.

REQUIREMENTS:
1. Rewrite the question stem so that "${correctOption}" is the unambiguous correct answer
2. Keep the same 4 options (but reorder so target is correct)
3. The other 3 options must be plausible distractors
4. Preserve the board exam style - if original was computation, new one should be computation with similar structure
5. For computation: keep same formula but change values; include extraneous givens
6. Adapt solution: given, formula, steps, keyConcept, commonMistakes to match NEW correct answer
7. Maintain same area, topic, subTopic, difficulty, type, year

OUTPUT FORMAT (JSON only):
{
  "question": "New question stem where ${correctOption} is correct",
  "options": ["${correctOption}", "${otherOptions[0]}", "${otherOptions[1]}", "${otherOptions[2]}"],
  "correctAnswer": 0,
  "area": "${originalQuestion.area}",
  "topic": "${originalQuestion.topic}",
  "subTopic": "${originalQuestion.subTopic}",
  "difficulty": "${originalQuestion.difficulty}",
  "type": "${originalQuestion.type}",
  "year": ${originalQuestion.year},
  "extraneousGivens": [...],
  "solution": {
    "given": "Given values for new problem",
    "formula": "Formula used",
    "steps": ["Step 1", "Step 2"],
    "keyConcept": "Key concept for new correct answer",
    "commonMistakes": ["Mistake 1", "Mistake 2"]
  }
}`
  };
}

async function generateVariant(originalQuestion, targetOptionIndex) {
  const prompt = buildVariantPrompt(originalQuestion, targetOptionIndex);
  
  const completion = await openai.chat.completions.create({
    model: MODEL,
    messages: [
      {
        role: 'system',
        content: `You are an expert ABELE board exam question writer. Create variant questions where a specific option becomes the correct answer. Output ONLY valid JSON.`
      },
      prompt
    ],
    temperature: 0.3,
    max_tokens: 3000,
  });

  const content = completion.choices[0].message.content;
  try {
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
    return JSON.parse(content);
  } catch (e) {
    console.error('Variant parse error:', e.message);
    console.error('Content:', content.substring(0, 500));
    return null;
  }
}

function generateId(originalId, variantIndex) {
  return `${originalId}-v${variantIndex}`;
}

async function main() {
  console.log(`Generating variants for ${parsedQuestions.length} questions...`);
  
  const allVariants = [];
  let processed = 0;
  
  // Process in batches of 5 questions concurrently
  const BATCH_SIZE = 5;
  
  for (let batchStart = 0; batchStart < parsedQuestions.length; batchStart += BATCH_SIZE) {
    const batch = parsedQuestions.slice(batchStart, batchStart + BATCH_SIZE);
    
    const batchPromises = batch.map(async (q, batchIdx) => {
      if (q.correctAnswer === -1 || q.needsReview) {
        console.log(`Skipping ${q.question.substring(0, 50)}... (needs review)`);
        return [];
      }
      
      const questionVariants = [];
      // Generate 4 variants sequentially for this question (to avoid rate limits)
      for (let optIdx = 0; optIdx < 4; optIdx++) {
        console.log(`  Q${batchStart + batchIdx + 1}: Variant ${optIdx + 1}/4 (target: ${String.fromCharCode(65 + optIdx)})`);
        
        const variant = await generateVariant(q, optIdx);
        if (variant) {
          const baseId = `recall-${q.year}-${q.area}-${q.topic.toLowerCase().replace(/\s+/g, '-')}-${batchStart + batchIdx}`;
          variant.id = `${baseId}-v${optIdx}`;
          variant.originalQuestion = q.question.substring(0, 100);
          questionVariants.push(variant);
        }
        
        await new Promise(r => setTimeout(r, 200));
      }
      return questionVariants;
    });
    
    const batchResults = await Promise.all(batchPromises);
    for (const variants of batchResults) {
      allVariants.push(...variants);
    }
    
    processed += batch.length;
    console.log(`Progress: ${processed}/${parsedQuestions.length} questions processed, ${allVariants.length} variants generated`);
  }
  
  console.log(`\nTotal variants generated: ${allVariants.length}`);
  
  // Save variants
  fs.writeFileSync(
    path.join(__dirname, '..', 'src', 'data', 'recalled-questions-variants.json'),
    JSON.stringify(allVariants, null, 2),
    'utf-8'
  );
  console.log('Saved to recalled-questions-variants.json');
}

main().catch(console.error);