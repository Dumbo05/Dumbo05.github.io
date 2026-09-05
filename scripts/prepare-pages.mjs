import { copyFile, mkdir, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const output = new URL('../dist/client/', import.meta.url);
const blogDirectory = new URL('blog/', output);
const blogPath = fileURLToPath(blogDirectory);

await mkdir(blogDirectory, { recursive: true });
await copyFile(new URL('blog.html', output), new URL('blog/index.html', output));

for (const entry of await readdir(blogDirectory, { withFileTypes: true })) {
  if (!entry.isFile() || !entry.name.endsWith('.html')) continue;
  const slug = entry.name.slice(0, -'.html'.length);
  const targetDirectory = join(blogPath, slug);
  await mkdir(targetDirectory, { recursive: true });
  await copyFile(join(blogPath, entry.name), join(targetDirectory, 'index.html'));
}

console.log('Prepared extension-free GitHub Pages routes.');
