import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const problems = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'formulas-practice.json'), 'utf-8'));

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

function formatProblem(p, index) {
  const options = p.options.map(opt => `      '${escapeString(opt)}'`).join(',\n');
  const steps = (p.solution.steps || []).map(s => `        '${escapeString(s)}'`).join(',\n');
  const commonMistakes = (p.solution.commonMistakes || []).map(m => `          '${escapeString(m)}'`).join(',\n');
  const given = escapeString(p.solution.given);
  const formula = escapeString(p.solution.formula);
  const keyConcept = escapeString(p.solution.keyConcept);

  const solution = `{
      given: '${given}',
      formula: '${formula}',
      steps: [
${steps}
      ],
      keyConcept: '${keyConcept}',
      ${commonMistakes ? `commonMistakes: [
${commonMistakes}
      ],` : ''}
    }`;

  return `  {
    id: '${p.id}',
    formulaId: '${p.formulaId}',
    area: '${p.area}',
    topic: '${escapeString(p.topic)}',
    formulaName: '${escapeString(p.formulaName)}',
    difficulty: '${p.difficulty}',
    type: '${p.type}',
    problem: '${escapeString(p.problem)}',
    options: [
${options}
    ],
    correctAnswer: ${p.correctAnswer},
    solution: ${solution}
  }`;
}

const problemsByArea = { A: [], B: [], C: [] };

for (let i = 0; i < problems.length; i++) {
  const p = problems[i];
  const formatted = formatProblem(p, i);
  problemsByArea[p.area].push(formatted);
}

let output = `// Formula Practice Problems - ABELE Board Exam
// Generated from formulas.ts with 10 board-exam style word problems per formula
// Problem types: direct application, unit conversion, rearranged, extraneous givens, common mistake traps
// Total: ${problems.length} problems

export interface FormulaPracticeProblem {
  id: string;
  formulaId: string;
  area: 'A' | 'B' | 'C';
  topic: string;
  formulaName: string;
  difficulty: 'easy' | 'average' | 'hard';
  type: 'computation';
  problem: string;
  options: string[];
  correctAnswer: number;
  solution: {
    given: string;
    formula: string;
    steps: string[];
    keyConcept: string;
    commonMistakes?: string[];
  };
}

`;

for (const area of ['A', 'B', 'C']) {
  const areaProblems = problemsByArea[area];
  if (areaProblems.length === 0) continue;
  
  output += `// ==================== AREA ${area}: ${area === 'A' ? 'POWER, ENERGY & MACHINERY (32%)' : area === 'B' ? 'LAND & WATER RESOURCES (32%)' : 'STRUCTURES, BIOPROCESS & FOOD (36%)'} ====================\n\n`;
  output += `export const formulaPracticeArea${area}Problems: FormulaPracticeProblem[] = [\n${areaProblems.join(',\n')}\n];\n\n`;
}

output += `// Combined all areas
export const formulaPracticeProblems: FormulaPracticeProblem[] = [
  ...formulaPracticeAreaAProblems,
  ...formulaPracticeAreaBProblems,
  ...formulaPracticeAreaCProblems,
];

// By formula
export const formulaPracticeByFormula: Record<string, FormulaPracticeProblem[]> = {};
formulaPracticeProblems.forEach(p => {
  if (!formulaPracticeByFormula[p.formulaId]) formulaPracticeByFormula[p.formulaId] = [];
  formulaPracticeByFormula[p.formulaId].push(p);
});`;

fs.writeFileSync(
  path.join(__dirname, '..', 'src', 'data', 'formulas-practice.ts'),
  output,
  'utf-8'
);

console.log(`Generated formulas-practice.ts with ${problems.length} problems`);
console.log(`Area A: ${problemsByArea.A.length}`);
console.log(`Area B: ${problemsByArea.B.length}`);
console.log(`Area C: ${problemsByArea.C.length}`);