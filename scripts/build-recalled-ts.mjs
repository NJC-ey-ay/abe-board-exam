import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const variants = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'recalled-questions-variants.json'), 'utf-8'));

function escapeString(str) {
  if (!str) return '';
  return String(str)
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t');
}

function formatQuestion(q, index) {
  const options = q.options.map(opt => `      '${escapeString(opt)}'`).join(',\n');
  const steps = q.solution.steps.map(s => `        '${escapeString(s)}'`).join(',\n');
  const commonMistakes = (q.solution.commonMistakes || []).length > 0
    ? (q.solution.commonMistakes || []).map(m => `          '${escapeString(m)}'`).join(',\n')
    : '';
  const extraneousGivens = (q.extraneousGivens || []).length > 0
    ? (q.extraneousGivens || []).map(g => `        '${escapeString(g)}'`).join(',\n')
    : '';
  const weakPoints = (q.solution.weakPoints || []).length > 0
    ? (q.solution.weakPoints || []).map(w => `        '${escapeString(w)}'`).join(',\n')
    : '';

  const solution = `{
      given: '${escapeString(q.solution.given)}',
      steps: [
${steps}
      ],
      formula: '${escapeString(q.solution.formula)}',
      keyConcept: '${escapeString(q.solution.keyConcept)}',
      ${commonMistakes ? `commonMistakes: [
${commonMistakes}
      ],` : ''}
      ${extraneousGivens ? `extraneousGivens: [
${extraneousGivens}
      ],` : ''}
    }`;

  const weakPointsStr = weakPoints ? `,\n    weakPoints: [
${weakPoints}
    ]` : '';

  return `  {
    id: '${q.id}',
    area: '${q.area}',
    subTopic: '${escapeString(q.subTopic)}',
    topic: '${escapeString(q.topic)}',
    type: '${q.type}',
    difficulty: '${q.difficulty}',
    question: '${escapeString(q.question)}',
    options: [
${options}
    ],
    correctAnswer: ${q.correctAnswer},
    solution: ${solution}${weakPointsStr}
  }`;
}

const questionsByArea = { A: [], B: [], C: [] };

for (let i = 0; i < variants.length; i++) {
  const q = variants[i];
  const formatted = formatQuestion(q, i);
  questionsByArea[q.area].push(formatted);
}

let output = `// Recalled Questions - ABELE Board Exam (2021-2025)
// Generated from PDF extraction + LLM parsing + variant generation
// Each original question expanded to 4 variants (each option as correct answer once)
// Total: ${variants.length} questions

import type { Question } from './comprehensive-questions';

`;

for (const area of ['A', 'B', 'C']) {
  const questions = questionsByArea[area];
  if (questions.length === 0) continue;
  
  output += `// ==================== AREA ${area}: ${area === 'A' ? 'POWER, ENERGY & MACHINERY (32%)' : area === 'B' ? 'LAND & WATER RESOURCES (32%)' : 'STRUCTURES, BIOPROCESS & FOOD (36%)'} ====================\n\n`;
  output += `export const recalledArea${area}Questions: Question[] = [\n${questions.join(',\n')}\n];\n\n`;
}

output += `// Combined all areas
export const recalledQuestions: Question[] = [
  ...recalledAreaAQuestions,
  ...recalledAreaBQuestions,
  ...recalledAreaCQuestions,
];

// By year
export const recalledQuestionsByYear = {
  2021: recalledQuestions.filter(q => (q as any).year === 2021),
  2022: recalledQuestions.filter(q => (q as any).year === 2022),
  2023: recalledQuestions.filter(q => (q as any).year === 2023),
  2024: recalledQuestions.filter(q => (q as any).year === 2024),
  2025: recalledQuestions.filter(q => (q as any).year === 2025),
};`;

fs.writeFileSync(
  path.join(__dirname, '..', 'src', 'data', 'recalled-questions.ts'),
  output,
  'utf-8'
);

console.log(`Generated recalled-questions.ts with ${variants.length} questions`);
console.log(`Area A: ${questionsByArea.A.length}`);
console.log(`Area B: ${questionsByArea.B.length}`);
console.log(`Area C: ${questionsByArea.C.length}`);