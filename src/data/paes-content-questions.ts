import type { Question } from './comprehensive-questions';
import { generateQuestionsForStandard as generateTemplateQuestions } from './paes-question-generator';
import type { PaesStandard } from './paes-data';
import { paesSubcategories } from './paes-data';

type RawQuestion = {
  id: string;
  standardId: string;
  question: string;
  choices: string[];
  correctAnswer: number;
  explanation: string;
};

const categoryFiles: Record<string, string> = {
  'Production Machinery': '/data/paes/production-machinery.json',
  'Post-Harvest Machinery': '/data/paes/post-harvest.json',
  'Engineering Materials': '/data/paes/engineering-materials.json',
  'Irrigation Structures': '/data/paes/irrigation-structures.json',
  'Agricultural Structures': '/data/paes/agricultural-structures.json',
};

const standardToCategory: Record<string, string> = {};
for (const cat of paesSubcategories) {
  for (const std of cat.standards) {
    standardToCategory[std.id] = cat.name;
  }
}

const loadedCategories = new Map<string, Record<string, RawQuestion[]>>();

async function loadCategory(category: string): Promise<Record<string, RawQuestion[]>> {
  if (loadedCategories.has(category)) return loadedCategories.get(category)!;
  const url = categoryFiles[category];
  if (!url) return {};
  try {
    const resp = await fetch(url);
    const data = await resp.json() as Record<string, RawQuestion[]>;
    loadedCategories.set(category, data);
    return data;
  } catch {
    return {};
  }
}

function transformQuestion(raw: RawQuestion): Question {
  const options = raw.choices.map(c => {
    if (c.length >= 3 && c[1] === '.') return c.substring(3).trim();
    if (c.length >= 2 && c[1] === ')') return c.substring(2).trim();
    return c.trim();
  });
  return {
    id: raw.id,
    area: 'A',
    subTopic: 'paes-standards',
    topic: raw.standardId,
    type: 'theory',
    difficulty: 'average',
    question: raw.question,
    options,
    correctAnswer: raw.correctAnswer,
    solution: {
      keyConcept: raw.explanation,
      steps: [raw.explanation],
    },
  };
}

function removeAreaPrefix(raw: RawQuestion): RawQuestion {
  const q = raw.question;
  const areaMatch = q.match(/^\[(?:Area\s*)?[ABC]:?\s*\]\s*/);
  if (areaMatch) {
    return { ...raw, question: q.slice(areaMatch[0].length) };
  }
  return raw;
}

const loadedCache = new Map<string, Question[]>();

export async function generateQuestionsForStandard(standardId: string): Promise<Question[]> {
  if (loadedCache.has(standardId)) return loadedCache.get(standardId)!;

  const category = standardToCategory[standardId];
  if (category) {
    const data = await loadCategory(category);
    const rawList = data[standardId];
    if (rawList && rawList.length > 0) {
      const qs = rawList.map(r => transformQuestion(removeAreaPrefix(r)));
      loadedCache.set(standardId, qs);
      return qs;
    }
  }

  for (const cat of paesSubcategories) {
    for (const std of cat.standards) {
      if (std.id === standardId) {
        const qs = generateTemplateQuestions(std);
        loadedCache.set(standardId, qs);
        return qs;
      }
    }
  }
  return [];
}

export function preloadCategory(category: string): void {
  loadCategory(category);
}
