import https from 'https';

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { rejectUnauthorized: false }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, { rejectUnauthorized: false }, (r2) => {
          let d = '';
          r2.on('data', c => d += c);
          r2.on('end', () => resolve(d));
        });
        return;
      }
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => resolve(d));
    });
  });
}

const html = await fetch('https://amtec.uplb.edu.ph/production-machinery-2/');
console.log('Response length:', html.length);
const matches = html.match(/href="([^"]+\.pdf)"/gi);
console.log('PDF link matches:', matches ? matches.length : 0);
if (matches) {
  matches.slice(0, 5).forEach(m => console.log(m));
}
console.log('Has wp-content:', html.includes('wp-content'));
// Save a sample
import fs from 'fs';
fs.writeFileSync('scripts/sample.html', html.slice(0, 50000));
console.log('Saved sample.html');
