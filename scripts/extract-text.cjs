const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const pdfDir = path.join(__dirname, '..', 'paes-pdfs');
const textDir = path.join(__dirname, '..', 'paes-text');

if (!fs.existsSync(textDir)) fs.mkdirSync(textDir, { recursive: true });

async function extractFromFile(filePath, outPath) {
  const buf = fs.readFileSync(filePath);
  const p = new PDFParse({ data: buf });
  await p.load();
  const result = await p.getText();
  let text = (result.pages || []).map(p => p.text).join('\n\n');
  text = text.replace(/\r\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim();
  p.destroy();
  if (text.length > 0) {
    fs.writeFileSync(outPath, text, 'utf-8');
    return { ok: true, chars: text.length, pages: (result.pages || []).length };
  }
  return { ok: false, reason: 'empty text' };
}

async function main() {
  const entries = [];
  const categories = fs.readdirSync(pdfDir).filter(f => fs.statSync(path.join(pdfDir, f)).isDirectory() && f !== 'manifest.json');
  
  for (const cat of categories) {
    const catDir = path.join(pdfDir, cat);
    if (!fs.existsSync(catDir)) continue;
    const files = fs.readdirSync(catDir).filter(f => f.endsWith('.pdf'));
    for (const f of files) {
      const id = path.basename(f, '.pdf');
      entries.push({ id, cat, filePath: path.join(catDir, f) });
    }
  }

  console.log(`Found ${entries.length} PDFs to extract`);
  let ok = 0, fail = 0;

  for (const e of entries) {
    const outPath = path.join(textDir, `${e.id}.txt`);
    if (fs.existsSync(outPath) && fs.statSync(outPath).size > 0) {
      console.log(`SKIP ${e.id} - text exists`);
      ok++;
      continue;
    }
    try {
      const result = await extractFromFile(e.filePath, outPath);
      if (result.ok) {
        console.log(`  OK ${e.id} (${result.chars} chars, ${result.pages} pages)`);
        ok++;
      } else {
        console.log(`  EMPTY ${e.id}: ${result.reason}`);
        fail++;
      }
    } catch (err) {
      console.log(`  FAIL ${e.id}: ${err.message}`);
      fail++;
    }
  }
  console.log(`\nDONE: ${ok} OK, ${fail} failed`);
}

main().catch(console.error);
