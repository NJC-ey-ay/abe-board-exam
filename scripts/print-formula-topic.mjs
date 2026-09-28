// Ad-hoc extractor: print the formula entries between two topic markers.
// Usage: node scripts/extract-formulas.mjs <startTopic> <endTopic>
import { readFileSync } from 'node:fs';

const [, , startTopic, endTopic] = process.argv;
const src = readFileSync('src/data/formulas.ts', 'utf8');
const start = src.indexOf(`topic: '${startTopic}'`);
const end = endTopic ? src.indexOf(`topic: '${endTopic}'`) : src.length;
if (start < 0) { console.error(`start marker not found: ${startTopic}`); process.exit(1); }
console.log(src.slice(start, end < 0 ? src.length : end));
