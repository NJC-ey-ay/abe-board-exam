// Suggests a mapping from the 193 old-scheme drillContent entries onto the 240
// handbook formula IDs.
//
// Why this exists: src/data/drill-content.ts already holds 193 authored
// scenarios (context, verb, unknownPhrase, decision items, multi-step and chain
// problems) but keys them to an earlier, invented formula ID scheme. Only 14 of
// those keys coincide with a handbook ID, so ~179 authored scenarios are stranded
// and never rendered. Remapping them is far cheaper and more reliable than
// authoring 213 specs from scratch.
//
// This script only SUGGESTS candidates. It never edits data files. Every pairing
// must be confirmed by reading the handbook formula against the candidate's
// context, because near-collisions are the real hazard here: a-tfc (theoretical
// field capacity) and a-efc (effective field capacity) are different equations
// that both exist in the handbook, and a name-similarity match would happily
// swap them.
//
// Usage: node scripts/suggest-content-remap.mjs [--area=A] [--json] [--loose]
import { loadTsModule } from './lib/load-ts.mjs';

const argv = process.argv.slice(2);
const asJson = argv.includes('--json');
const loose = argv.includes('--loose');
const areaFilter = (argv.find((a) => a.startsWith('--area=')) || '').split('=')[1];

const formulasMod = loadTsModule('src/data/formulas.ts');
const contentMod = loadTsModule('src/data/drill-content.ts');
const drillsMod = loadTsModule('src/data/formula-drills.ts');

const handbook = [];
for (const area of formulasMod.areaFormulas) {
  for (const topic of area.topics) {
    for (const f of topic.formulas) {
      handbook.push({ id: f.id, name: f.name, formula: f.formula, area: area.areaCode, topic: topic.name ?? topic.title ?? '' });
    }
  }
}

const contentKeys = Object.keys(contentMod.drillContent);
const haveSpec = new Set(drillsMod.getAllDrillSpecs().map((s) => s.formulaId));

// Abbreviations that appear in the old scheme's IDs but not in handbook names.
const EXPAND = [
  ['tfc', 'theoretical field capacity'],
  ['efc', 'effective field capacity'],
  ['manning', 'manning'],
  ['rational', 'rational'],
  ['lsr', 'land soaking'],
  ['srr', 'specific'],
  ['dbhp', 'drawbar'],
  ['bp', 'brake power'],
  ['ip', 'indicated power'],
  ['sfc', 'specific fuel'],
  ['mc', 'moisture content'],
  ['db', 'dry basis'],
  ['wb', 'wet basis'],
  ['thresher', 'threshing'],
  ['vsg', 'ventilation'],
  ['lsm', 'land soaking'],
  ['nps', 'net precipitation'],
  ['fcr', 'feed conversion'],
  ['bod', 'biochemical oxygen'],
  ['do', 'dissolved oxygen'],
  ['lcc', 'liquid'],
  ['lmtd', 'mean temperature'],
];

const STOP = new Set([
  'the', 'of', 'for', 'and', 'to', 'in', 'a', 'an', 'from', 'with', 'net', 'via', 'on', 'per',
  'is', 'by', 'at', 'as', 'using', 'based', 'given',
]);

function tokens(s) {
  return String(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .split(' ')
    .filter((t) => t && !STOP.has(t));
}

function expandId(id) {
  let s = id;
  for (const [abbr, full] of EXPAND) {
    s = s.split(`-${abbr}`).join(` ${full} `);
  }
  return s;
}

// Matching strategy, strongest signal first.
//
// Token overlap alone is NOT usable here. It produced confident nonsense such as
// a-belt-power-transmitted <- a-drawbar-power, a-belt-life <- b-reservoir-life
// and a-solar-power-output <- a-harvest-output, because generic mechanical words
// ("power", "velocity", "life", "ratio", "output") overlap by coincidence. The old
// scheme used abbreviations, so the reliable signal is structural: the handbook
// slug is the old key, or the old key plus a disambiguating suffix.
//
//   exact      a-pto-power === a-pto-power
//   prefix     a-belt-power  is a prefix of  a-belt-power-transmitted
//   expanded   a-tfc         expands to       a-theoretical-field-capacity
//
// Anything weaker than these is reported separately as "needs review" and must be
// confirmed by reading the formula. Confidence is never inferred from name
// similarity alone.
function classify(h, contentId) {
  const cArea = contentId.split('-')[0];
  const cRest = contentId.slice(cArea.length + 1);
  const hRest = h.id.startsWith('-') ? '' : h.id.replace(/^[abc]-/, '');

  if (h.id === contentId) return { match: 'exact', confidence: 1 };

  const expanded = expandId(contentId).replace(/[^a-z0-9]+/g, ' ').trim();
  const expRest = expanded.replace(/^[abc] /, '').replace(/[^a-z0-9]+/g, ' ').trim();
  const normH = hRest.replace(/-/g, ' ');
  if (expRest && normH === expRest) return { match: 'expanded', confidence: 0.95 };

  // handbook slug extends the old key with a disambiguator
  if (hRest === cRest) return { match: 'exact-rest', confidence: 1 };
  if (hRest.startsWith(`${cRest}-`)) return { match: 'prefix', confidence: 0.9 };
  if (cRest.startsWith(`${hRest}-`)) return { match: 'prefix-inverse', confidence: 0.7 };

  return null;
}

const results = [];
const usedContent = new Set();
const needsReview = [];

for (const h of handbook) {
  if (areaFilter && h.area !== areaFilter) continue;

  // structural matches, best confidence first
  const structural = [];
  for (const k of contentKeys) {
    if (usedContent.has(k)) continue;
    const verdict = classify(h, k);
    if (verdict) structural.push({ contentId: k, ...verdict });
  }
  structural.sort((a, b) => b.confidence - a.confidence);

  const best = structural[0] || null;
  const e = best ? contentMod.drillContent[best.contentId] : null;
  const ctx = e && typeof e.context === 'string' ? e.context : '';

  if (best) usedContent.add(best.contentId);

  const row = {
    id: h.id,
    name: h.name,
    area: h.area,
    hasSpec: haveSpec.has(h.id),
    best: best ? { ...best, context: ctx.slice(0, 90) } : null,
    alternates: structural.slice(1, 3).map((s) => ({ contentId: s.contentId, match: s.match, confidence: s.confidence })),
  };
  results.push(row);

  // formulas with a structural match that look risky need a human read
  if (best && (best.match === 'prefix-inverse' || (best.confidence < 1 && alternatesRisky(row)))) {
    needsReview.push(row);
  }
}

function alternatesRisky(row) {
  // A second candidate with the same confidence means the old scheme is
  // genuinely ambiguous between two handbook formulas.
  return row.alternates.length > 0 && row.alternates[0].confidence >= row.best.confidence;
}

const matched = results.filter((r) => r.best);
const unmatched = results.filter((r) => !r.best);
const byArea = results.reduce((a, r) => ((a[r.area] = (a[r.area] || { total: 0, matched: 0 })), a[r.area].total++, r.best && a[r.area].matched++, a), {});
const byMatch = matched.reduce((a, r) => ((a[r.best.match] = (a[r.best.match] || 0) + 1), a), {});

if (asJson) {
  console.log(JSON.stringify({ matched: matched.length, unmatched: unmatched.length, byArea, byMatch, needsReview: needsReview.length, results }, null, 2));
} else {
  console.log(`handbook formulas      : ${results.length}`);
  console.log(`structural matches     : ${matched.length}`);
  console.log(`no structural match   : ${unmatched.length}`);
  console.log(`content keys consumed  : ${usedContent.size} of ${contentKeys.length}`);
  console.log(`by area                : ${JSON.stringify(byArea)}`);
  console.log(`by match type          : ${JSON.stringify(byMatch)}`);
  console.log(`flagged for review     : ${needsReview.length}\n`);
  console.log('--- MATCHES (confirm each against the formula) ---');
  for (const r of matched) {
    const flag = r.hasSpec ? 'spec' : '    ';
    const risk = needsReview.includes(r) ? ' <<REVIEW' : '';
    console.log(`${flag} ${r.id.padEnd(34)} <- ${r.best.contentId.padEnd(26)} [${r.best.match}]${risk}`);
    console.log(`      name: ${r.name}`);
    if (r.best.context) console.log(`      ctx : ${r.best.context}`);
    if (r.alternates.length) console.log(`      alt : ${r.alternates.map((a) => `${a.contentId}(${a.match})`).join(', ')}`);
  }
  console.log('\n--- NO STRUCTURAL MATCH ---');
  for (const r of unmatched) console.log(`     ${r.area} ${r.id.padEnd(34)} ${r.name}`);
}
