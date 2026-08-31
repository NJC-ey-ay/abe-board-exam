// Link equation-practice formulas to the exam-style mock question pools so the
// theory slots of a practice session can reuse real board-exam questions instead
// of plain generated narration. Only verified pool questions are surfaced (no
// generated facts), keeping the "no errors" guarantee.

import type { Question, Area } from './comprehensive-questions';
import { areaAQuestions, areaBQuestions, areaCQuestions } from './comprehensive-questions';
import { generatedAreaAQuestions, generatedAreaBQuestions, generatedAreaCQuestions } from './generated-questions';
import { bulkAreaAQuestions, bulkAreaBQuestions, bulkAreaCQuestions } from './bulk-questions';
import { llmAreaAQuestions } from './llm-questions-area-a';
import { llmAreaBQuestions } from './llm-questions-area-b';
import { llmAreaCQuestions } from './llm-questions-area-c';

// Map each conversion-formula (and a general fallback) to the pool `topic`
// buckets whose theory questions are conceptually relevant to that formula.
export const formulaTopics: Record<string, string[]> = {
  'a-efc': ['Field Capacity', 'Operational Knowledge'],
  'a-tfc': ['Field Capacity', 'Operational Knowledge'],
  'a-multirow-efc': ['Field Capacity', 'Equipment Specifications'],
  'a-drawbar-power': ['Brake Power & Draft', 'Engine Performance'],
  'a-dbhp': ['Brake Power & Draft', 'Engine Performance'],
  'a-draft': ['Brake Power & Draft', 'Tillage Equipment'],
  'a-displacement': ['Engine Performance'],
  'a-displacement-from-cr': ['Engine Performance'],
  'a-clearance-volume': ['Engine Performance'],
  'a-hydrostatic': ['Irrigation Design', 'Water Requirement'],
  'a-pump-power': ['Irrigation Design', 'Water Requirement'],
  'b-sprinkler-rate': ['Irrigation Design', 'Water Requirement'],
  'b-pumping-time': ['Irrigation Design', 'Water Requirement'],
  'b-rational': ['Rational Method', 'Rainfall Analysis'],
  'b-darcy': ['Water Requirement', 'Irrigation Design'],
  'b-drawdown': ['Water Requirement', 'Irrigation Design'],
  'b-well-discharge': ['Water Requirement', 'Irrigation Design'],
  'b-gravimetric-mc': ['Drying', 'Terminology'],
  'b-organic-matter': ['Terminology'],
  'b-density': ['Terminology'],
  'c-mc-wet': ['Drying', 'Processing'],
  'c-mc-dry': ['Drying', 'Processing'],
  'c-circle-area': ['Design', 'Terminology'],
  'c-cylinder-volume': ['Design', 'Terminology'],
};

function poolForArea(area: Area): Question[] {
  if (area === 'A') return [...areaAQuestions, ...generatedAreaAQuestions, ...bulkAreaAQuestions, ...llmAreaAQuestions];
  if (area === 'B') return [...areaBQuestions, ...generatedAreaBQuestions, ...bulkAreaBQuestions, ...llmAreaBQuestions];
  return [...areaCQuestions, ...generatedAreaCQuestions, ...bulkAreaCQuestions, ...llmAreaCQuestions];
}

// Only surface pool questions that have a real explanation, so the theory slots
// in a practice session never render a blank solution.
function isWellFormedTheory(q: Question): boolean {
  if (q.type === 'computation') return false;
  const s = q.solution;
  if (!s) return false;
  if (!Array.isArray(s.steps) || s.steps.length === 0) return false;
  if (typeof s.keyConcept !== 'string' || !s.keyConcept.trim()) return false;
  if (!Array.isArray(q.options) || q.options.length < 2) return false;
  if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer >= q.options.length) return false;
  return true;
}

// Distinct theory-style questions from the pools for the given topics (by area).
// Prefers questions whose topic matches, falling back to the whole pool for that
// area so every formula still has exam-style theory to draw from. Only
// well-formed (explained) theory questions are considered.
export function poolTheoryForFormula(formulaId: string, area: Area): Question[] {
  const pool = poolForArea(area).filter(isWellFormedTheory);
  const topics = formulaTopics[formulaId] ?? [];
  const seen = new Set<string>();
  const out: Question[] = [];

  const add = (q: Question) => {
    const key = (q.question || '').trim();
    if (!key || seen.has(key)) return;
    seen.add(key);
    out.push(q);
  };

  // 1) Topic-matched questions first (most relevant).
  for (const t of topics) {
    for (const q of pool) {
      if ((q.topic || '').toLowerCase() === t.toLowerCase()) add(q);
    }
  }

  // 2) Fallback: any well-formed theory question from the same area (broadest
  //    coverage), so there is always material — deduped against topic-matched.
  if (out.length < 8) {
    for (const q of pool) add(q);
  }

  return out;
}
