import fs from 'fs';
import path from 'path';

const folderPath = './src/Multimedia';

// Ambil nama file dari argumen CLI
const rawName = process.argv[2];
if (!rawName) {
  console.error('❌ Tolong masukkan nama file, contoh: npm run generate close_round_duotone');
  process.exit(1);
}

// Fungsi ubah nama ke PascalCase
const toPascalCase = (str) =>
  str
    .split(/[-_ ]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

const componentName = toPascalCase(rawName);
const filePath = path.join(folderPath, `${rawName}.tsx`);

// Template isi file
const template = `import React from 'react';

const ${componentName}: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props}></svg>
);

export default ${componentName};
`;

// Pastikan folder ada
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath, { recursive: true });
}

// Cegah overwrite file lama
if (fs.existsSync(filePath)) {
  process.exit(1);
}

// Buat file baru
fs.writeFileSync(filePath, template, 'utf8');
