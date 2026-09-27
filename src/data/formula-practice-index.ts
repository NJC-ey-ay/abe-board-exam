import { areaFormulas } from './formulas';
import { formulaPracticeProblems } from './formulas-practice';
import type { FormulaPracticeProblem } from './formulas-practice';

// ---------------------------------------------------------------------------
// Why this file exists
//
// src/data/formulas.ts is now transcribed from the official ABELE formula
// handbooks in C:\Users\Arzen\Desktop\FORMULA and identifies every formula with
// a stable slug (e.g. "b-mannings-equation").
//
// src/data/formulas-practice.ts was generated against an EARLIER, invented
// formula set. Its problems are keyed by POSITIONAL ids ("A-0-0-0") and labelled
// with topic names that no longer exist. Positional ids cannot be carried over:
// the handbook topic order is completely different, so "A-0-0" would silently
// resolve to the wrong formula and show the wrong questions.
//
// So the legacy bank is matched explicitly here, by hand-vetted legacy name ->
// reference id. Only 14 of the 58 legacy formulas have a counterpart in the
// handbooks, which yields 140 of the 577 legacy problems. Every other reference
// formula resolves to an empty list and the UI presents it as reference-only
// rather than attaching questions that belong to a different formula.
// ---------------------------------------------------------------------------

// Legacy problem label -> reference formula id. Every entry was reviewed by hand;
// none of these is a fuzzy/heuristic match.
const LEGACY_ALIASES: Record<string, string> = {
  // Area A
  'A|Theoretical Field Capacity': 'a-theoretical-field-capacity',
  'A|Field Efficiency': 'a-field-efficiency',
  'A|PTO Power': 'a-pto-power',
  'A|Mechanical Efficiency': 'a-mechanical-efficiency',
  'A|Compression Ratio': 'a-compression-ratio',
  // Area B
  'B|Rational Method': 'b-rational-method',
  "B|Manning's Equation (Velocity)": 'b-mannings-equation',
  "B|Manning's Equation (Flow)": 'b-mannings-equation',
  'B|Return Period': 'b-return-period',
  // Area C
  'C|Moisture Content (Wet Basis)': 'c-mc-wet-basis',
  'C|Moisture Content (Dry Basis)': 'c-mc-dry-basis',
  'C|Sensible Heat': 'c-sensible-heat',
  'C|Psychrometric Relative Humidity': 'c-relative-humidity',
  'C|Structural Compressive Stress': 'c-stress',
};

function legacyKey(area: string, name: string): string {
  return `${area}|${name.trim()}`;
}

function buildProblemIndex(): Map<string, FormulaPracticeProblem[]> {
  const byFormulaId = new Map<string, FormulaPracticeProblem[]>();

  // Seed every reference formula with an empty list so callers can distinguish
  // "no problems yet" from "formula not found".
  for (const area of areaFormulas) {
    for (const topic of area.topics) {
      for (const formula of topic.formulas) {
        byFormulaId.set(formula.id, []);
      }
    }
  }

  const orphaned: FormulaPracticeProblem[] = [];

  for (const problem of formulaPracticeProblems) {
    const id = LEGACY_ALIASES[legacyKey(problem.area, problem.formulaName)];
    if (!id || !byFormulaId.has(id)) {
      orphaned.push(problem);
      continue;
    }
    byFormulaId.get(id)!.push(problem);
  }

  // Keep each formula's problems in their authored order.
  for (const list of byFormulaId.values()) {
    list.sort((a, b) => a.difficulty.localeCompare(b.difficulty) || a.id.localeCompare(b.id));
  }

  return byFormulaId;
}

export const problemsByFormulaId: Map<string, FormulaPracticeProblem[]> = buildProblemIndex();

export function getProblems(formulaId: string): FormulaPracticeProblem[] {
  return problemsByFormulaId.get(formulaId) ?? [];
}

export function hasProblems(formulaId: string): boolean {
  return getProblems(formulaId).length > 0;
}

export function areaCoverage(areaCode: string): { total: number; withProblems: number; problems: number } {
  let total = 0;
  let withProblems = 0;
  let problems = 0;
  const area = areaFormulas.find((a) => a.areaCode === areaCode);
  if (!area) return { total, withProblems, problems };
  for (const topic of area.topics) {
    for (const formula of topic.formulas) {
      total++;
      const n = getProblems(formula.id).length;
      if (n > 0) withProblems++;
      problems += n;
    }
  }
  return { total, withProblems, problems };
}
