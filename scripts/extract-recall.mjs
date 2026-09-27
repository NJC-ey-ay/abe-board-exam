import fs from 'fs';
import path from 'path';
import { PDFParse } from 'pdf-parse';

const RECALL_DIR = 'C:\\Users\\Arzen\\Desktop\\RECALLED';
const OUTPUT = path.join('C:\\Users\\Arzen\\abe-board-exam\\src\\data\\recalled-questions-raw.json');

async function extractPdfText(filePath) {
  const buf = fs.readFileSync(filePath);
  const p = new PDFParse({ data: buf });
  await p.load();
  const result = await p.getText();
  let text = (result.pages || []).map(p => p.text).join('\n\n');
  text = text.replace(/\r\n/g, '\n').replace(/\n{4,}/g, '\n\n\n').trim();
  p.destroy();
  return { text, chars: text.length, pages: (result.pages || []).length };
}

function findPDFs(dir) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findPDFs(fullPath));
    } else if (entry.isFile() && /\.pdf$/i.test(entry.name)) {
      const relPath = path.relative(RECALL_DIR, fullPath);
      results.push({ fullPath, relPath, year: path.basename(dir) });
    }
  }
  return results;
}

async function main() {
  console.log('Scanning Recall PDFs...');
  const allPDFs = findPDFs(RECALL_DIR);
  console.log(`Found ${allPDFs.length} PDFs total`);

  const entries = [];
  let ok = 0, skip = 0, fail = 0;

  for (const { fullPath, relPath, year } of allPDFs) {
    const shortName = relPath.replace(/\.pdf$/i, '');

    try {
      const result = await extractPdfText(fullPath);
      if (result.chars >= 100) {
        entries.push({
          source: shortName,
          year,
          chars: result.chars,
          pages: result.pages,
          text: result.text
        });
        console.log(`  OK  ${shortName} (${result.chars}c, ${result.pages}p) [${year}]`);
        ok++;
      } else {
        console.log(`  EMPTY ${shortName}`);
        skip++;
      }
    } catch (err) {
      console.log(`  FAIL ${shortName}: ${err.message}`);
      fail++;
    }
  }

  console.log(`\nDone: ${ok} extracted, ${skip} skipped/empty, ${fail} failed`);
  console.log(`Total chars: ${entries.reduce((s, e) => s + e.chars, 0).toLocaleString()}`);

  fs.writeFileSync(OUTPUT, JSON.stringify(entries, null, 1), 'utf-8');
  console.log(`Saved to ${OUTPUT}`);
}

main().catch(console.error);