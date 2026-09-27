import * as cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const baseDir = path.resolve(__dirname, '..');

const CATEGORY_PAGES = {
  'Production Machinery': 'https://amtec.uplb.edu.ph/production-machinery-2/',
  'Post-Harvest Machinery': 'https://amtec.uplb.edu.ph/post-harvest-machinery-building-on-process/',
  'Engineering Materials': 'https://amtec.uplb.edu.ph/engineering-materials-u-c/',
  'Irrigation Structures': 'https://amtec.uplb.edu.ph/irrigation-structures-u-d/',
  'Agricultural Structures': 'https://amtec.uplb.edu.ph/agricultural-structures-u-c/',
};

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { rejectUnauthorized: false }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, { rejectUnauthorized: false }, (r2) => {
          let data = '';
          r2.on('data', c => data += c);
          r2.on('end', () => resolve(data));
        }).on('error', reject);
        return;
      }
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const file = fs.createWriteStream(dest);
    https.get(url, { rejectUnauthorized: false }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        file.close();
        fs.unlinkSync(dest);
        https.get(res.headers.location, { rejectUnauthorized: false }, (r2) => {
          r2.pipe(file);
          file.on('finish', () => { file.close(); resolve(); });
        }).on('error', reject);
        return;
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(dest)) fs.unlinkSync(dest);
      reject(err);
    });
  });
}

function standardIdFromUrl(url) {
  const fn = path.basename(url).replace(/\.pdf$/i, '');
  let cleaned = fn
    .replace(/^PNS\.BAFS\./i, 'PNS-BAFS-')
    .replace(/^PNS\/BAFS\/PAES\s*/i, 'PNS-BAFS-PAES-')
    .replace(/^PNS\/BAFS\s*/i, 'PNS-BAFS-')
    .replace(/^PNS\/PAES\s*/i, 'PNS-PAES-')
    .replace(/^PNS\s*PAES\s*/i, 'PNS-PAES-')
    .replace(/^PNS\s*/i, 'PNS-')
    .replace(/^PAES\s*/i, 'PAES-')
    .replace(/\s*\(.*?\)\s*/g, '')
    .replace(/[–—\-]+/g, '-')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/[^A-Za-z0-9\-]/g, '');
  
  // Try to extract standard ID pattern
  const idMatch = fn.match(/(P?A?E?S?\s*[-\s]?\d{3,4})/i);
  if (idMatch) {
    let id = idMatch[1].replace(/\s+/g, '-').toUpperCase();
    if (!id.startsWith('PAES') && !id.startsWith('PNS')) id = 'PAES-' + id;
    if (!id.startsWith('PAES-') && !id.startsWith('PNS-')) {
      if (id.startsWith('PAES')) id = 'PAES-' + id.slice(4);
      if (id.startsWith('PNS')) id = 'PNS-' + id.slice(3);
    }
    // Add year
    const yearMatch = fn.match(/(19\d{2}|20\d{2})/);
    if (yearMatch) id += '-' + yearMatch[1];
    return id.replace(/-+/g, '-').replace(/-$/g, '');
  }
  return cleaned;
}

async function main() {
  const allLinks = [];

  for (const [category, url] of Object.entries(CATEGORY_PAGES)) {
    console.log(`\nFetching ${category}...`);
    const html = await fetch(url);
    const $ = cheerio.load(html);
    const links = [];

    $('a[href$=".pdf"]').each((_, el) => {
      const href = $(el).attr('href');
      if (href && href.includes('wp-content/uploads')) {
        const fullUrl = href.startsWith('http') ? href : new URL(href, url).href;
        links.push(fullUrl);
      }
    });

    console.log(`  Found ${links.length} PDF links`);
    allLinks.push({ category, links });
  }

  // Deduplicate by standard ID
  const seen = new Set();
  const toDownload = [];

  for (const { category, links } of allLinks) {
    for (const url of links) {
      const id = standardIdFromUrl(url);
      if (!seen.has(id)) {
        seen.add(id);
        toDownload.push({ category, url, id });
      }
    }
  }

  console.log(`\nTotal unique standards: ${toDownload.length}`);

  // Download
  let success = 0;
  let fail = 0;
  for (const { category, url, id } of toDownload) {
    const catDir = category.replace(/\s+/g, '-');
    const dest = path.join(baseDir, 'paes-pdfs', catDir, `${id}.pdf`);
    
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      console.log(`  [SKIP] ${id} already exists`);
      success++;
      continue;
    }

    try {
      await downloadFile(url, dest);
      console.log(`  [OK]   ${id} (${category})`);
      success++;
    } catch (err) {
      console.log(`  [FAIL] ${id}: ${err.message}`);
      fail++;
    }
  }

  console.log(`\nDone. Downloaded: ${success}, Failed: ${fail}`);

  // Save manifest
  const manifest = toDownload.map(d => ({
    id: d.id,
    category: d.category,
    url: d.url,
    file: `paes-pdfs/${d.category.replace(/\s+/g, '-')}/${d.id}.pdf`,
  }));
  fs.writeFileSync(path.join(baseDir, 'paes-pdfs', 'manifest.json'), JSON.stringify(manifest, null, 2));
  console.log('Manifest saved to paes-pdfs/manifest.json');
}

main().catch(console.error);
