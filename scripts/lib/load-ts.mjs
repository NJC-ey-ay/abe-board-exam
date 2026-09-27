// Loads the app's TypeScript data modules directly from Node, with no bundler.
//
// The project has no test runner and no tsx/ts-node, but `typescript` is a
// devDependency. So we register a require hook that transpiles any .ts file on
// the fly and rewrites its relative specifiers to .ts, letting the verification
// scripts import src/data/*.ts directly instead of re-implementing the data.
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';
import fs from 'node:fs';
import path from 'node:path';
import Module from 'node:module';
import ts from 'typescript';

const here = path.dirname(fileURLToPath(import.meta.url));
export const projectRoot = path.resolve(here, '..', '..');
const dataDir = path.join(projectRoot, 'src', 'data');

const compilerOptions = {
  target: ts.ScriptTarget.ES2022,
  module: ts.ModuleKind.CommonJS,
  esModuleInterop: true,
  allowJs: true,
};

// Cache transpiled output so repeated imports in one run are cheap.
const cache = new Map();

function resolveTs(fromFile, specifier) {
  // Only rewrite relative specifiers that omit an extension. The app's data
  // modules use extensionless relative imports, which Node cannot resolve.
  if (!specifier.startsWith('.') || path.extname(specifier)) return null;
  const base = path.resolve(path.dirname(fromFile), specifier);
  for (const candidate of [`${base}.ts`, path.join(base, 'index.ts')]) {
    if (fs.existsSync(candidate)) return candidate;
  }
  return null;
}

export function installTsRequireHook() {
  if (Module.__abeTsHook) return;
  Module.__abeTsHook = true;
  const original = Module._extensions['.js'];
  Module._extensions['.ts'] = (module, filename) => {
    const source = fs.readFileSync(filename, 'utf8');
    let js = cache.get(filename);
    if (js === undefined) {
      const out = ts.transpileModule(source, { compilerOptions, fileName: filename });
      js = out.outputText;
      cache.set(filename, js);
    }
    return module._compile(js, filename);
  };
  if (original) Module._extensions['.js'] = original;
  // Intercept bare/relative resolution failures by registering a resolver that
  // appends .ts when a .ts sibling exists.
  const origResolve = Module._resolveFilename;
  Module._resolveFilename = function (request, parent, ...rest) {
    if (parent && parent.filename && request.startsWith('.')) {
      const hit = resolveTs(parent.filename, request);
      if (hit) return hit;
    }
    return origResolve.call(this, request, parent, ...rest);
  };
}

export function loadTsModule(relativePath) {
  installTsRequireHook();
  const abs = path.join(projectRoot, relativePath);
  const require_ = createRequire(pathToFileURL(abs));
  return require_(abs);
}

export function listDataModules() {
  return fs.readdirSync(dataDir).filter((f) => f.endsWith('.ts'));
}
