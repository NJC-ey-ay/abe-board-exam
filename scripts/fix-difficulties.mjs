import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

for (const area of ['a', 'b', 'c']) {
  const fp = path.join(__dirname, '..', 'src', 'data', `llm-questions-area-${area}.ts`);
  let c = fs.readFileSync(fp, 'utf-8');
  
  // Fix invalid difficulty values
  const badDiff = [...c.matchAll(/difficulty: '([^']+)'/g)]
    .map(m => m[1])
    .filter(v => !['easy', 'average', 'hard'].includes(v));
  
  if (badDiff.length > 0) {
    console.log(`Area ${area}: fixing ${badDiff.length} invalid difficulties: ${[...new Set(badDiff)].join(', ')}`);
    c = c.replace(/difficulty: 'theory'/g, "difficulty: 'average'");
    c = c.replace(/difficulty: 'medium'/g, "difficulty: 'average'");
    c = c.replace(/difficulty: 'moderate'/g, "difficulty: 'average'");
  }

  // Fix invalid type values (must be 'computation' or 'theory')
  const badType = [...c.matchAll(/type: '([^']+)'/g)]
    .map(m => m[1])
    .filter(v => !['theory', 'computation'].includes(v));
  
  if (badType.length > 0) {
    console.log(`Area ${area}: fixing ${badType.length} invalid types: ${[...new Set(badType)].join(', ')}`);
    c = c.replace(/type: 'computational'/g, "type: 'computation'");
    c = c.replace(/type: 'compute'/g, "type: 'computation'");
    c = c.replace(/type: 'calculation'/g, "type: 'computation'");
    c = c.replace(/type: 'numerical'/g, "type: 'computation'");
  }

  if (badDiff.length > 0 || badType.length > 0) {
    fs.writeFileSync(fp, c);
  } else {
    console.log(`Area ${area}: no issues`);
  }
}

console.log('Done fixing');
