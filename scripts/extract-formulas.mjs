import fs from 'fs';
import path from 'path';
import { PDFParse } from 'pdf-parse';

const FORMULA_DIR = 'C:\\Users\\Arzen\\Desktop\\FORMULA';
const OUTPUT = path.join('C:\\Users\\Arzen\\abe-board-exam\\src\\data\\formulas-extracted.json');

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

async function main() {
  console.log('Extracting formula PDFs...');
  
  const files = [
    'Area 1 Formula.pdf',
    'Area 2 Formula.pdf',
    'Area 3 Formula.pdf'
  ];
  
  const allFormulas = [];
  
  for (const file of files) {
    const fullPath = path.join(FORMULA_DIR, file);
    console.log(`\nProcessing: ${file}`);
    const result = await extractPdfText(fullPath);
    console.log(`  ${result.chars} chars, ${result.pages} pages`);
    
    allFormulas.push({
      file,
      area: file.includes('Area 1') ? 'A' : file.includes('Area 2') ? 'B' : 'C',
      text: result.text,
      chars: result.chars,
      pages: result.pages
    });
  }
  
  fs.writeFileSync(OUTPUT, JSON.stringify(allFormulas, null, 2), 'utf-8');
  console.log(`\nSaved to ${OUTPUT}`);
}

main().catch(console.error);