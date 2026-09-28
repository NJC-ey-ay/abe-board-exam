// Pre-flight probe for a candidate drill spec. Mirrors the three option checks
// in scripts/verify-formula-specs.mjs so a spec can be validated numerically
// BEFORE it is written into the data file:
//
//   1. every option strictly positive and nonzero
//   2. every option within 0.01x .. 100.5x of the answer
//   3. every pair of options far enough apart that they cannot format to the
//      same string at the chosen round level
//
// The third is the check that hand analysis kept getting wrong. Reporting each
// pair's closest approach, with the input that produced it, turns "these ranges
// look disjoint" into a measured number.
//
// usage: node scripts/probe-spec.mjs <module exporting CANDIDATES>
//
// Each candidate is { name, round, vars: {sym: {min,max,dec}}, compute,
//                     distractors: [fn...] }.

import { loadTsModule } from './lib/load-ts.mjs';

const OPT_MAX_RATIO = 100.5;
const OPT_MIN_RATIO = 0.01;
const N = 4000;
const SEED_BASE = 12345;

function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s ^= s << 13; s >>>= 0;
    s ^= s >> 17;
    s ^= s << 5; s >>>= 0;
    return s / 4294967296;
  };
}

function sample(spec, seed) {
  const r = rng(seed);
  const v = {};
  for (const [sym, d] of Object.entries(spec.vars)) {
    const dec = d.dec ?? 1;
    const steps = Math.round((d.max - d.min) / dec);
    v[sym] = d.min + Math.floor(r() * (steps + 1)) * dec;
  }
  return v;
}

function fmt(n, d) {
  if (!Number.isFinite(n)) return String(n);
  return n.toFixed(d);
}

function probe(spec) {
  const { name, round, vars, compute, distractors } = spec;
  const k = distractors.length;
  const ans = [];
  const opt = Array.from({ length: k }, () => []);
  const ratio = Array.from({ length: k }, () => []);
  const seen = new Set();

  for (let i = 0; i < N; i++) {
    const v = sample(spec, SEED_BASE + i * 7919);
    const a = compute(v);
    if (!Number.isFinite(a)) { seen.add(`NON-FINITE answer at ${JSON.stringify(v)}`); continue; }
    if (!(a > 0)) { seen.add(`NON-POSITIVE answer ${a} at ${JSON.stringify(v)}`); continue; }
    ans.push(a);
    const all = [a, ...distractors.map(d => d(v))];
    for (let j = 0; j < all.length; j++) {
      const n = all[j];
      if (!Number.isFinite(n)) { seen.add(`NON-FINITE option ${j} at ${JSON.stringify(v)}`); continue; }
      if (!(n > 0)) { seen.add(`NON-POSITIVE option ${j} (${n}) at ${JSON.stringify(v)}`); }
      if (j > 0) {
        opt[j - 1].push(n);
        ratio[j - 1].push(n / a);
      }
    }
  }

  const lo = a => Math.min(...a), hi = a => Math.max(...a);
  const rows = [`== ${name}`, `   answer      ${lo(ans).toPrecision(7)} .. ${hi(ans).toPrecision(7)}  (${(hi(ans) / lo(ans)).toFixed(1)}x)`];

  let worstFloor = Infinity, worstCeil = -Infinity;
  distractors.forEach((_, j) => {
    const r = ratio[j];
    const b = lo(r), t = hi(r);
    if (b < worstFloor) worstFloor = b;
    if (t > worstCeil) worstCeil = t;
    let flag = '';
    if (b < OPT_MIN_RATIO) flag += ` <<< BELOW 1% FLOOR`;
    if (t > OPT_MAX_RATIO) flag += ` <<< ABOVE 100x CEILING`;
    rows.push(`   dist${j}  ratio ${b.toPrecision(5)} .. ${t.toPrecision(5)}${flag}`);
  });

  // pairwise closest approach, measured on the FORMATTED values the UI shows,
  // because that is what actually has to differ
  let worstPair = { d: Infinity };
  for (let i = 0; i < k; i++) {
    for (let j = i + 1; j < k; j++) {
      let worst = Infinity, wa = 0, wb = 0, wv = null;
      for (let m = 0; m < N; m++) {
        const v = sample(spec, SEED_BASE + m * 7919);
        const A = fmt(distractors[i](v), round), B = fmt(distractors[j](v), round);
        const fa = parseFloat(A), fb = parseFloat(B);
        if (!Number.isFinite(fa) || !Number.isFinite(fb)) continue;
        const d = Math.abs(fa - fb) / Math.max(Math.abs(fa), Math.abs(fb), 1e-300);
        if (d < worst) { worst = d; wa = fa; wb = fb; wv = v; }
      }
      rows.push(`   pair ${i}-${j}   closest ${(worst * 100).toFixed(3)}%  (${wa} vs ${wb})`);
      if (worst < worstPair.d) worstPair = { d: worst, i, j, wa, wb, wv };
    }
  }

  const verdict = [];
  if (worstFloor < OPT_MIN_RATIO) verdict.push(`FLOOR: lowest ratio ${worstFloor.toPrecision(4)} < 0.01`);
  if (worstCeil > OPT_MAX_RATIO) verdict.push(`CEILING: highest ratio ${worstCeil.toPrecision(4)} > 100.5`);
  if (seen.size) verdict.push(`VALUES: ${[...seen].slice(0, 3).join(' | ')}`);
  if (worstPair.d < 0.005) verdict.push(`COLLISION RISK: pair ${worstPair.i}-${worstPair.j} only ${(worstPair.d * 100).toFixed(3)}% apart (${worstPair.wa} vs ${worstPair.wb}) at ${JSON.stringify(worstPair.wv)}`);
  else rows.push(`   tightest pair ${worstPair.i}-${worstPair.j} at ${(worstPair.d * 100).toFixed(2)}% - ok`);

  rows.push(verdict.length ? `   VERDICT: ${verdict.join(' ; ')}` : '   VERDICT: ok');
  return rows.join('\n');
}

const mod = await import(new URL(process.argv[2], `file://${process.cwd()}/`).href);
for (const spec of mod.CANDIDATES) console.log(probe(spec) + '\n');
