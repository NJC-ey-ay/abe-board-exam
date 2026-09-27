# Formula migration: invented set → ABELE handbook set

## What changed

`src/data/formulas.ts` was rewritten from scratch. It is now a transcription of
the official ABELE formula handbooks in `C:\Users\Arzen\Desktop\FORMULA`:

| Source        | Area                                              | Topics | Formulas |
| ------------- | ------------------------------------------------- | -----: | -------: |
| Area 1 Formula | Power, Energy & Machinery                        |     14 |       78 |
| Area 2 Formula | Land & Water Resources                           |     13 |       64 |
| Area 3 Formula | Structures, Environment & Bioprocess             |     20 |       98 |
| **Total**     |                                                   | **47** | **240** |

Every formula is keyed by a stable slug (`a-belt-open-length`,
`b-mannings-equation`, `c-mc-wet-basis`) instead of the old positional ids
(`A-0-0-0`).

## Why positional ids could not be salvaged

The old practice bank was generated against an earlier, invented formula set
whose topic ordering has nothing in common with the handbook ordering. Reusing
`A-0-0` against the new data would have silently resolved to the *wrong* formula
and served the *wrong* questions. All cross-references therefore had to be
rebuilt by hand.

## Legacy problem bank (`src/data/formulas-practice.json`)

- 577 problems across 58 legacy formula labels.
- 14 hand-vetted aliases map a legacy label to a handbook formula id.
- Those 14 aliases resolve to **140 of the 577** problems across **13 distinct
  handbook formulas** (Manning's is aliased twice — velocity and flow — because
  the handbook lists it as one entry).
- 44 legacy label sets (437 problems) are **not** referenced, because the
  formulas they were written for do not appear in the handbooks.
- Aliases live in `src/data/formula-practice-index.ts` under `LEGACY_ALIASES`.
  Every one was reviewed by hand; there is no fuzzy or positional matching.

## Generators

| File                  | Before | After | Kept ids | Dropped |
| --------------------- | -----: | ----: | -------: | ------: |
| `src/data/formula-drills.ts`   | 209 specs | 27 specs  | 27 | 182 |
| `src/data/formula-keywords.ts` |  60 entries | 14 entries | 14 | 46 |

All surviving ids were verified to exist in `formulas.ts`, with no duplicates
and no dangling references.

## Automatic matches that were rejected

An automated name-similarity pass suggested these pairings. Each was inspected
and **rejected**; none is in the codebase:

| Old id            | Suggested          | Why it was wrong                                                                 |
| ----------------- | ------------------ | -------------------------------------------------------------------------------- |
| `c-biogas-energy` | `c-electrical-energy` | Matched only because `"energy"` is a substring of "Biogas Energy Content".     |
| `c-capacitor`     | `c-electrical-energy` | Same substring collision. The handbook has capacitive *reactance*, not stored capacitor energy. |
| `c-bending-stress`| `c-stress`        | `sigma = Mc/I` is not `sigma = P/A`. Also collided with two other specs.         |
| `c-eccentric`     | `c-stress`         | Combined bending + axial is not `sigma = P/A`.                                    |
| `c-direct-stress` | `c-stress`         | The spec also generates shear stress, which is not `sigma = P/A`.                |
| `b-density`       | `b-bulk-density`   | Belongs to `c-density-specific-volume`, i.e. the wrong area.                      |
| `b-manning-q`     | `b-mannings-equation` | Collided with `b-manning-v`; `getDrillQuestions()` returns only the first match, so the second spec would have been unreachable. |

The 16 `chain-*` multi-step drill specs were also dropped: they referenced
handbook topics that no longer exist and had no single target formula.

## Current coverage

| Source of problems      | Handbook formulas covered |
| ----------------------- | ------------------------: |
| Legacy practice bank    |                          13 |
| `formula-drills.ts`     |                          27 |
| `formula-keywords.ts`   |                          14 |
| **Union**               |                      **28** |

Breakdown by area: **A 9, B 8, C 11**.

**212 of the 240 handbook formulas are currently reference-only.** The UI states
this plainly rather than attaching unrelated questions. Word problems for the
remainder are a separate generation pass — `scripts/generate-formula-practice.mjs`
(gpt-4o-mini via OpenRouter) is the intended tool.

### Two independent problem systems — do not conflate them

| Route / tab                     | Backing data                        | Formulas with problems |
| ------------------------------- | ----------------------------------- | ---------------------: |
| `/formulas-practice`            | `formulas-practice.json` via `formula-practice-index.ts` | 13 (140 questions) |
| `/practice` → Equation Practice | `formula-drills.ts` (generated)     | 27 |
| `/practice` → Formula Practice  | CTA only, links to `/formulas-practice` | 13 |

The Formula Practice card on `/practice` reports the **practice-bank** coverage
(13), because that is what its button opens. Equation Practice has its own
counter driven by `getDrillsByArea`. Both derive their numbers from data at
import time, so neither can drift.

## UI behaviour

`/formulas-practice` selects a formula and either:

- starts a problem set (28 formulas), or
- shows the full equation, variable table and handbook notes as reference-only.

Practice progress is stored in `localStorage` under `formula-practice-completed`
keyed by the stable formula id. Progress stored under the old positional ids is
discarded on load, because those ids no longer mean anything.

`/practice` counts are now derived from the data (`practiceStats` +
`areaCoverage` in `src/app/practice/page.tsx`) instead of being hardcoded, so
they cannot drift again.

## Known source anomalies

These are transcribed as printed, with a note, rather than silently corrected:

- Solar insolation is listed under Multi-Bladed Wind Pumps in the Area B source.
- TFC's written definition includes `E` while stating `E = 1`.
- The wet/dry moisture-basis equations mix percentage and fractional forms.
- `BCsoil = 12,225 kg/m³` is transcribed as printed despite the likely unit error.
- Motor HP is transcribed as `2/3` of engine HP.
- Area A lists two overlapping chain-length formulas (one dropped as a duplicate).
