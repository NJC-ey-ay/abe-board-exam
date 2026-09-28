// List the formula ids that still have no drill spec, grouped by topic.
// Usage: node scripts/list-missing-specs.mjs
import { loadTsModule } from './lib/load-ts.mjs';

const { getAllDrillSpecs } = loadTsModule('src/data/formula-drills.ts');
const have = new Set(getAllDrillSpecs().map(s => s.formulaId));

const { areaFormulas } = loadTsModule('src/data/formulas.ts');

const all = [];
for (const area of areaFormulas) {
  for (const topic of area.topics ?? []) {
    for (const f of topic.formulas ?? []) {
      all.push({ area: area.id ?? area.area ?? area.name, topic: topic.topic, ...f });
    }
  }
}

const missing = all.filter(f => !have.has(f.id));
console.log(`total formulas: ${all.length}`);
console.log(`with a spec   : ${have.size}`);
console.log(`missing       : ${missing.length}\n`);

const groups = new Map();
for (const f of missing) {
  const k = `${f.area} | ${f.topic}`;
  if (!groups.has(k)) groups.set(k, []);
  groups.get(k).push(f);
}
for (const [k, list] of groups) {
  console.log(`== ${k}  (${list.length})`);
  for (const f of list) console.log(`   ${f.id}`);
}
