// Shrinks original photos for the gallery: longest side at most 2560px,
// JPEG at quality 90, and every bit of metadata (GPS included) removed.
// Usage: npm run photos -- <photo or folder>... [--out <folder>]
import { mkdir, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const MAX_SIZE = 2560;
const QUALITY = 90;
const EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.heic', '.tif', '.tiff']);

const args = process.argv.slice(2);
const outIndex = args.indexOf('--out');
const outDir = outIndex >= 0 ? args.splice(outIndex, 2)[1] : 'src/content/gallery/images';

if (args.length === 0) {
  console.error('Usage: npm run photos -- <photo or folder>... [--out <folder>]');
  process.exit(1);
}

async function collect(input) {
  if (!(await stat(input)).isDirectory()) return [input];
  const names = await readdir(input);
  return names.map((name) => path.join(input, name));
}

const files = (await Promise.all(args.map(collect)))
  .flat()
  .filter((file) => EXTENSIONS.has(path.extname(file).toLowerCase()));

await mkdir(outDir, { recursive: true });

for (const file of files) {
  const output = path.join(outDir, `${path.parse(file).name}.jpg`);
  // rotate() applies the EXIF orientation before the metadata is dropped
  const info = await sharp(file)
    .rotate()
    .resize(MAX_SIZE, MAX_SIZE, { fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toFile(output);
  const before = (await stat(file)).size;
  console.log(`${output}  ${info.width}x${info.height}  ${(before / 1e6).toFixed(1)} MB -> ${(info.size / 1e6).toFixed(1)} MB`);
}
