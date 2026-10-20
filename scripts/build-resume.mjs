// Compiles src/assets/resume-<version>.tex -> src/assets/resume.pdf before dev/build.
// The version is picked in src/constants/resume.ts.
// Uses a system `tectonic` if present, otherwise downloads a pinned binary into .cache/.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, renameSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { RESUME_VERSION as version } from '../src/constants/resume.ts';

const TECTONIC_VERSION = '0.15.0';
const root = new URL('..', import.meta.url).pathname;
const assets = join(root, 'src/assets');
const cacheDir = join(root, '.cache');
const localBin = join(cacheDir, 'tectonic');

const texFile = join(assets, `resume-${version}.tex`);
if (!existsSync(texFile)) {
  throw new Error(`src/constants/resume.ts: no src/assets/resume-${version}.tex found.`);
}

const hasSystemTectonic = () => {
  try {
    execFileSync('tectonic', ['--version'], { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
};

const getTectonic = () => {
  if (hasSystemTectonic()) return 'tectonic';
  if (existsSync(localBin)) return localBin;
  if (process.platform !== 'linux' || process.arch !== 'x64') {
    throw new Error('Install tectonic (https://tectonic-typesetting.github.io) to build the resume.');
  }
  mkdirSync(cacheDir, { recursive: true });
  const url = `https://github.com/tectonic-typesetting/tectonic/releases/download/tectonic%40${TECTONIC_VERSION}/tectonic-${TECTONIC_VERSION}-x86_64-unknown-linux-musl.tar.gz`;
  console.log(`Downloading tectonic ${TECTONIC_VERSION}...`);
  // Extract into a temp dir and rename, so an interrupted download never leaves a partial binary.
  const tmpDir = mkdtempSync(join(cacheDir, 'dl-'));
  try {
    execFileSync('sh', ['-c', `curl -fL --retry 3 "${url}" | tar xz -C "${tmpDir}"`], { stdio: 'inherit' });
    renameSync(join(tmpDir, 'tectonic'), localBin);
  } finally {
    rmSync(tmpDir, { recursive: true, force: true });
  }
  return localBin;
};

const tectonic = getTectonic();
const outDir = join(cacheDir, 'resume');
mkdirSync(outDir, { recursive: true });
execFileSync(tectonic, ['--outdir', outDir, texFile], { stdio: 'inherit' });
renameSync(join(outDir, `resume-${version}.pdf`), join(assets, 'resume.pdf'));
console.log(`Built src/assets/resume.pdf from resume-${version}.tex`);
