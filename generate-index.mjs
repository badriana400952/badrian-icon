import fs from 'fs';
import path from 'path';

const folderPath = './src/travelandmap';
const indexFile = './src/export.ts';

// Baca semua file di folder add
const files = fs
  .readdirSync(folderPath)
  .filter(file => file.endsWith('.tsx'));

// Buat baris export otomatis
const exports = files
  .map(file => {
    const name = path.basename(file, '.tsx');
    return `export { default as ${name} } from './travelandmap/${name}';`;
  })
  .join('\n');

// Tulis ke index.ts
fs.writeFileSync(indexFile, exports + '\n');
console.log(`✅ Generated ${files.length} exports to ${indexFile}`);
