import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.join(__dirname, '..', 'src', 'data', 'bulk-questions.ts');

function shuffleOpts(correct, wrongs, i) {
  const opts = [correct, ...wrongs];
  const idx = i % opts.length;
  const arranged = [opts[idx], ...opts.filter((_, j) => j !== idx)];
  return { options: arranged, correctAnswer: arranged.indexOf(correct) };
}

function fmt(n) { return parseFloat(n.toFixed(2)); }
function pick(arr, i) { return arr[i % arr.length]; }

function genFieldCapacity(i) {
  const widths = [1.2,1.5,1.8,2.0,2.2,2.5,3.0], speeds = [3,4,5,6,7,8], effs = [0.65,0.70,0.75,0.80,0.85,0.90];
  const tractors = ['Kubota L3301 (33 HP)','Mitsubishi MT28 (28 HP)','Ford 4610 (62 HP)','Mahindra 475 (42 HP)','Massey Ferguson 240 (50 HP)'];
  const locs = ['Nueva Ecija','Isabela','Pangasinan','Tarlac','Cagayan'];
  const impls = ['disc plow','moldboard plow','tandem disc harrow','rotavator','spring-tooth harrow'];
  const crops = ['rice','corn','sugarcane','vegetable'];
  const W = pick(widths,i), S = pick(speeds,Math.floor(i/7)), E = pick(effs,Math.floor(i/42));
  const C = fmt((W*S*E)/10);
  const q = A farmer in  owns a  ha field planted with . He uses a  pulling a  with effective working width of  m. Operating speed is  km/h. Field efficiency including turning and refilling is %. His previous implement was 0.6 m narrower and took 3 extra days per season. What is the effective field capacity in ha/h?;
  const {options,correctAnswer} = shuffleOpts(C, [fmt((W*S)/10),fmt((W*S*(E+0.1))/10),fmt((W*S*(E-0.05))/10)], i);
  return {q,opts:options.map(o=>o.toFixed(2)),ca:correctAnswer,kc:'Effective field capacity = (W × S × E) / 10. The constant 10 converts m-km/h to ha/h.',steps:[C = ( ×  × ) / 10 =  ha/h],fm:'C = (W × S × E) / 10'};
}
