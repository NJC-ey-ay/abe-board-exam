import type { Question } from './comprehensive-questions';
import { paesSubcategories, type PaesStandard } from './paes-data';

function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xFFFFFFFF;
    return (s >>> 0) / 0xFFFFFFFF;
  };
}

function pick<T>(arr: T[], rand: () => number): T {
  return arr[Math.floor(rand() * arr.length)];
}

function shuffle<T>(arr: T[], rand: () => number): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function numericOptions(correct: number, range: number, rand: () => number): { options: string[]; correctIndex: number } {
  const opts = new Set<number>([correct]);
  while (opts.size < 4) {
    const offset = Math.floor(rand() * range * 2) - range;
    const val = correct + offset;
    if (val > 0) opts.add(val);
  }
  const shuffled = shuffle([...opts], rand);
  return { options: shuffled.map(String), correctIndex: shuffled.indexOf(correct) };
}

function yearOptions(correct: number, rand: () => number): { options: string[]; correctIndex: number } {
  const pool = [correct - 1, correct + 1, correct - 2, correct + 2, correct - 3, correct + 3, correct - 5, correct + 5];
  const opts = new Set<number>([correct]);
  while (opts.size < 4) {
    opts.add(pool[Math.floor(rand() * pool.length)]);
  }
  const shuffled = shuffle([...opts], rand);
  return { options: shuffled.map(String), correctIndex: shuffled.indexOf(correct) };
}

const questionPhrasings = [
  'What year was', 'In what year was', 'When was', 'What is the establishment year of',
];

const scopePhrasings = [
  'What does', 'What is covered by', 'What is the scope of', 'Which of the following best describes',
];

const applicationPhrasings = [
  'Which PAES standard would you reference for', 'What standard should be used for',
  'For designing or specifying', 'To find specifications for',
];

function generateYearQuestions(standard: PaesStandard, count: number, rand: () => number): Question[] {
  const questions: Question[] = [];
  const phrasings = ['What year was', 'In what year was', 'When was', 'Establishment year of'];
  for (let i = 0; i < count; i++) {
    const phrase = phrasings[i % phrasings.length];
    const { options, correctIndex } = yearOptions(standard.year, rand);
    questions.push({
      id: `${standard.id}-year-${i}`,
      area: standard.area,
      subTopic: standard.subcategory.toLowerCase().replace(/\s+/g, '-'),
      topic: 'PAES Standards',
      type: 'theory',
      difficulty: i < count / 2 ? 'easy' : 'average',
      question: `${phrase} ${standard.id} (${standard.title})?`,
      options,
      correctAnswer: correctIndex,
      solution: {
        keyConcept: `${standard.id} was established in ${standard.year}. It provides ${standard.description.toLowerCase()}.`,
        steps: [`Recall: ${standard.id} was established in ${standard.year}`],
      },
      weakPoints: ['PAES standards timeline', `${standard.subcategory} standards`],
    });
  }
  return questions;
}

function generateScopeQuestions(standard: PaesStandard, count: number, rand: () => number): Question[] {
  const questions: Question[] = [];
  const allStandards = paesSubcategories.flatMap(c => c.standards);

  for (let i = 0; i < count; i++) {
    const phrase = i % 2 === 0 ? 'What does' : 'Which best describes';
    const distractors = shuffle(allStandards.filter(s => s.id !== standard.id), rand).slice(0, 3).map(s => s.description);
    const options = shuffle([standard.description, ...distractors], rand);
    const correctIndex = options.indexOf(standard.description);

    questions.push({
      id: `${standard.id}-scope-${i}`,
      area: standard.area,
      subTopic: standard.subcategory.toLowerCase().replace(/\s+/g, '-'),
      topic: 'PAES Standards',
      type: 'theory',
      difficulty: 'average',
      question: `${phrase} ${standard.id} (${standard.title}) cover?`,
      options: options.map(o => o.charAt(0).toUpperCase() + o.slice(1)),
      correctAnswer: correctIndex,
      solution: {
        keyConcept: `${standard.id} covers ${standard.description}.`,
        steps: [`${standard.id}: ${standard.title} — ${standard.description}`],
      },
      weakPoints: ['PAES scope coverage', `${standard.subcategory} standards`],
    });
  }
  return questions;
}

function generateApplicationQuestions(standard: PaesStandard, count: number, rand: () => number): Question[] {
  const questions: Question[] = [];
  const allStandards = paesSubcategories.flatMap(c => c.standards);
  const sameCategory = allStandards.filter(s => s.id !== standard.id && s.subcategory === standard.subcategory);

  for (let i = 0; i < count; i++) {
    const keywords = standard.title.toLowerCase().split(' ');
    const keyword = keywords.find(k => k.length > 4 && !['and', 'for', 'the', 'with', 'part'].includes(k)) || standard.description.split(' ').slice(0, 3).join(' ');

    const distractors = shuffle(sameCategory.length > 3 ? sameCategory : allStandards.filter(s => s.id !== standard.id), rand).slice(0, 3);
    const pool = shuffle([standard, ...distractors], rand);
    const correctIndex = pool.indexOf(standard);

    questions.push({
      id: `${standard.id}-app-${i}`,
      area: standard.area,
      subTopic: standard.subcategory.toLowerCase().replace(/\s+/g, '-'),
      topic: 'PAES Application',
      type: 'theory',
      difficulty: 'average',
      question: i % 2 === 0
        ? `Which PAES standard should you reference for ${keyword} in ${standard.subcategory.toLowerCase()}?`
        : `For specifications on ${keyword}, which PAES standard is most relevant?`,
      options: pool.map(s => `${s.id}: ${s.title}`),
      correctAnswer: correctIndex,
      solution: {
        keyConcept: `${standard.id} provides specifications for ${standard.title.toLowerCase()} (${standard.description}).`,
        steps: [`Application: ${keyword} → ${standard.id} (${standard.title})`],
      },
      weakPoints: ['PAES application', 'Standard selection'],
    });
  }
  return questions;
}

function generateSpecRequirementQuestions(standard: PaesStandard, count: number, rand: () => number): Question[] {
  const questions: Question[] = [];
  const descWords = standard.description.split(' ');
  const focus = descWords.slice(-4).join(' ');

  for (let i = 0; i < count; i++) {
    const year = standard.year;
    const { options: yearOpts, correctIndex: yearCorrect } = numericOptions(year, 3, rand);

    questions.push({
      id: `${standard.id}-spec-${i}`,
      area: standard.area,
      subTopic: standard.subcategory.toLowerCase().replace(/\s+/g, '-'),
      topic: 'PAES Requirements',
      type: i % 3 === 0 ? 'computation' : 'theory',
      difficulty: i < count / 2 ? 'easy' : 'average',
      question: i % 3 === 0
        ? `Under ${standard.id}, what is a key requirement for ${focus}?`
        : i % 3 === 1
        ? `${standard.id} was established to provide standards for what aspect of ${standard.subcategory.toLowerCase()}?`
        : `Which of the following is a requirement specified in ${standard.id}?`,
      options: yearOpts,
      correctAnswer: yearCorrect,
      solution: {
        keyConcept: `${standard.id} (${standard.year}) provides ${standard.description}.`,
        steps: [`${standard.id} requirements: ${standard.description}`],
      },
      weakPoints: ['PAES requirements', `${standard.subcategory} specifications`],
    });
  }
  return questions;
}

function generateComparisonQuestions(standard: PaesStandard, count: number, rand: () => number): Question[] {
  const questions: Question[] = [];
  const sameCategory = paesSubcategories
    .filter(c => c.name === standard.subcategory)
    .flatMap(c => c.standards)
    .filter(s => s.id !== standard.id);

  for (let i = 0; i < count && sameCategory.length > 0; i++) {
    const other = sameCategory[i % sameCategory.length];
    const isOlder = standard.year < other.year;
    const question = i % 2 === 0
      ? `Between ${standard.id} and ${other.id}, which standard was established earlier?`
      : `Which was published first: ${standard.id} or ${other.id}?`;
    const opts = shuffle([standard.id, other.id], rand);
    const correctIndex = opts.indexOf(isOlder ? standard.id : other.id);

    questions.push({
      id: `${standard.id}-comp-${i}`,
      area: standard.area,
      subTopic: standard.subcategory.toLowerCase().replace(/\s+/g, '-'),
      topic: 'PAES Comparison',
      type: 'theory',
      difficulty: 'hard',
      question,
      options: opts,
      correctAnswer: correctIndex,
      solution: {
        keyConcept: `${standard.id} was established in ${standard.year}; ${other.id} in ${other.year}.`,
        steps: [`${standard.id} (${standard.year}) vs ${other.id} (${other.year}) → ${isOlder ? standard.id : other.id} is earlier`],
      },
      weakPoints: ['PAES chronology', 'Standards comparison'],
    });
  }

  while (questions.length < count && sameCategory.length > 0) {
    const other = sameCategory[0];
    questions.push({
      id: `${standard.id}-comp-${questions.length}`,
      area: standard.area,
      subTopic: standard.subcategory.toLowerCase().replace(/\s+/g, '-'),
      topic: 'PAES Comparison',
      type: 'theory',
      difficulty: 'hard',
      question: `${standard.id} covers ${standard.description}. ${other.id} focuses on ${other.description}. Which area of application do these standards have in common?`,
      options: shuffle([
        'Both cover ' + standard.subcategory.toLowerCase(),
        standard.subcategory + ' design only',
        other.subcategory + ' testing only',
        'Agricultural policy and regulation'
      ], rand),
      correctAnswer: 0,
      solution: {
        keyConcept: `Both ${standard.id} and ${other.id} fall under ${standard.subcategory}.`,
        steps: [`Both standards serve the ${standard.subcategory} category of PAES.`],
      },
      weakPoints: ['PAES classification', 'Standards grouping'],
    });
  }

  return questions;
}

export function generateQuestionsForStandard(standard: PaesStandard): Question[] {
  const idNum = parseInt(standard.id.replace(/\D/g, ''), 10) || 100;
  const rand = seededRandom(idNum * 1000 + standard.year);

  const yearQs = generateYearQuestions(standard, 20, rand);
  const scopeQs = generateScopeQuestions(standard, 25, rand);
  const appQs = generateApplicationQuestions(standard, 20, rand);
  const specQs = generateSpecRequirementQuestions(standard, 20, rand);
  const compQs = generateComparisonQuestions(standard, 15, rand);

  return shuffle([...yearQs, ...scopeQs, ...appQs, ...specQs, ...compQs], rand).slice(0, 100);
}

export function generateAllPaesQuestions(): Map<string, Question[]> {
  const map = new Map<string, Question[]>();
  for (const cat of paesSubcategories) {
    for (const std of cat.standards) {
      map.set(std.id, generateQuestionsForStandard(std));
    }
  }
  return map;
}
