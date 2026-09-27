const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const KB_DIR = 'D:\\Knowledge Base';
const OUTPUT = path.join(__dirname, 'kb-text-extracted.json');

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

// Map source directories to exam areas
const AREA_MAP = {
  'ABE Related Laws': 'A',
  'LECTURE AND POST-TEST': null, // will check subdirectories
};

// Recursively find all PDFs
function findPDFs(dir) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findPDFs(fullPath));
    } else if (entry.isFile() && /\.pdf$/i.test(entry.name)) {
      const relPath = path.relative(KB_DIR, fullPath);
      results.push({ fullPath, relPath });
    }
  }
  return results;
}

function guessArea(relPath) {
  const p = relPath.toLowerCase();
  if (p.includes('abe related laws') || p.includes('laws')) return 'A';
  if (p.includes('subject a') || p.includes('subjecta')) return 'A';
  if (p.includes('subject b') || p.includes('subjectb')) return 'B';
  if (p.includes('subject c') || p.includes('subjectc')) return 'C';
  if (p.includes('bioprocess') || p.includes('food') || p.includes('structures')) return 'C';
  if (p.includes('power') || p.includes('machinery') || p.includes('mechanization')) return 'A';
  if (p.includes('irrigation') || p.includes('hydrology') || p.includes('soil') || p.includes('water')) return 'B';
  // Recalled questions, online review, review lectures -> general, assign to all
  return 'ALL';
}

async function main() {
  console.log('Scanning Knowledge Base PDFs...');
  const allPDFs = findPDFs(KB_DIR);
  console.log(`Found ${allPDFs.length} PDFs total`);

  const entries = [];
  let ok = 0, skip = 0, fail = 0;

  for (const { fullPath, relPath } of allPDFs) {
    const area = guessArea(relPath);
    const shortName = relPath.replace(/\.pdf$/i, '');

    // Skip if we already have this file's text (resume support)
    const existing = entries.find(e => e.source === shortName);
    if (existing) { skip++; continue; }

    try {
      const result = await extractPdfText(fullPath);
      if (result.chars >= 100) {
        entries.push({
          source: shortName,
          area,
          chars: result.chars,
          pages: result.pages,
          text: result.text
        });
        console.log(`  OK  ${shortName} (${result.chars}c, ${result.pages}p) [${area}]`);
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

  // Count by area
  const byArea = {};
  for (const e of entries) {
    byArea[e.area] = (byArea[e.area] || 0) + 1;
  }
  console.log('By area:', JSON.stringify(byArea));

  fs.writeFileSync(OUTPUT, JSON.stringify(entries, null, 1), 'utf-8');
  console.log(`Saved to ${OUTPUT}`);
}

main().catch(console.error);
