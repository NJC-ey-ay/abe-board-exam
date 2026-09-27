// One-command, non-interactive Vercel deploy.
//
// The whole point is that you never have to log into the Vercel dashboard again.
// `vercel` normally stops to ask "Set up and deploy?", "Which scope?", "Is this
// production?" - three prompts that force a human into the browser for every
// single release. `--yes` answers all of them with the project defaults, and the
// token removes the login step entirely, so the command is safe to run from a
// script, a git hook, or CI.
//
//   node scripts/deploy.mjs            -> production
//   node scripts/deploy.mjs --preview  -> preview URL, never touches production
//
// The Vercel project is already linked (.vercel/repo.json), so the CLI knows
// which project to deploy to. Only the token has to be supplied, and it is read
// from the environment rather than being written into this file.
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { projectRoot } from './lib/load-ts.mjs';

const argv = process.argv.slice(2);
const preview = argv.includes('--preview');

// Identifiers, not secrets. These match .vercel/repo.json and only tell the CLI
// *where* to deploy; the token is what authenticates the request.
const ORG_ID = process.env.VERCEL_ORG_ID || 'team_cSJsCUxuX55BM9ym63hRDaAe';
const PROJECT_ID = process.env.VERCEL_PROJECT_ID || 'prj_BAaaJFaCi0Vhbzn0O2jHzVejFrId';

function die(msg, hint) {
  console.error(`\n  deploy failed: ${msg}\n`);
  if (hint) console.error(`${hint}\n`);
  process.exit(1);
}

// --- preconditions ----------------------------------------------------------

const linkFile = path.join(projectRoot, '.vercel', 'repo.json');
if (!fs.existsSync(linkFile) && !process.env.VERCEL_PROJECT_ID) {
  die(
    'this directory is not linked to a Vercel project (.vercel/repo.json missing)',
    '  fix: npx vercel link --yes --project abe-study --scope <your-team>',
  );
}

const token = (process.env.VERCEL_TOKEN || '').trim();
if (!token) {
  die(
    'VERCEL_TOKEN is not set',
    [
      '  The Vercel API authenticates every request with a bearer token, and there',
      '  is no way to mint one without an authenticated Vercel session. This is the',
      '  one manual step in the whole setup:',
      '',
      '    Vercel dashboard -> Account Settings -> Tokens -> Create Token',
      '',
      '  then paste it once, either for this shell:',
      '',
      '    $env:VERCEL_TOKEN = "your_token"      # PowerShell, this session only',
      '    setx VERCEL_TOKEN "your_token"        # PowerShell, permanent',
      '',
      '  or as a GitHub Actions secret (VERCEL_TOKEN on the repository) so that',
      '  pushing to main deploys with no clicks at all - see',
      '  .github/workflows/deploy.yml',
    ].join('\n'),
  );
}

// --- run --------------------------------------------------------------------

const args = [
  '--yes', // answer every interactive prompt with project defaults
  '--token', token,
  '--scope', ORG_ID,
  '--project', PROJECT_ID,
];
if (preview) args.push('--archive=tgz');
else args.push('--prod');

const label = preview ? 'preview' : 'PRODUCTION';
console.log(`\n  deploying ${label} -> project ${PROJECT_ID} (scope ${ORG_ID})`);

// On Windows the global install ships vercel, vercel.cmd and vercel.ps1 side by
// side in %APPDATA%\npm. Node's spawn cannot resolve the bare name (the .ps1 is a
// PowerShell script it will not execute, and the directory is not on the Windows
// executable search path), so resolve the real .cmd first and only then fall back
// to letting the shell find it.
function vercelBinCandidates() {
  const out = [];
  if (process.platform === 'win32') {
    const npmGlobal = path.join(process.env.APPDATA || '', 'npm');
    for (const name of ['vercel.cmd', 'vercel']) {
      const full = path.join(npmGlobal, name);
      if (fs.existsSync(full)) out.push(full);
    }
  }
  out.push('vercel');
  return out;
}

const candidates = vercelBinCandidates();
let result = null;
for (const bin of candidates) {
  result = spawnSync(bin, args, { stdio: 'inherit', cwd: projectRoot });
  if (!result.error) break;
}

// Last resort: hand it to the OS shell, which knows how to run a .cmd.
if (result?.error) {
  result = spawnSync('vercel', args, { stdio: 'inherit', cwd: projectRoot, shell: true });
}

if (result?.error) {
  die(
    `could not run the vercel CLI: ${result.error.message}`,
    '  fix: npm install -g vercel@54.1.0',
  );
}

if (result.status !== 0) {
  die(`vercel exited with code ${result.status}`);
}

console.log(`\n  ${label} deploy complete.\n`);
if (!preview) {
  console.log('  Service worker: the new build ships a fresh sw.js, so clients need a');
  console.log('  hard refresh (Ctrl+Shift+R) once before offline caching picks it up.\n');
}
