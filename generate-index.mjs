import fs from "fs";

const packages = [
  "icon-bendera",
  "icon-food",
  "icon-kalm",
  "icon-instagram",
  "icon-kryston",
  "icon-leonid",
  "icon-logos",
  "icon-Rounak",
];

// Ensure dist and src directories exist
if (!fs.existsSync("dist")) {
  fs.mkdirSync("dist", { recursive: true });
}
if (!fs.existsSync("src")) {
  fs.mkdirSync("src", { recursive: true });
}

// 1. Generate src/index.ts
let srcContent = packages
  .map(p => `export * from "../packages/${p}/dist/index.esm.js";`)
  .join("\n");
fs.writeFileSync("src/index.ts", srcContent + "\n");
console.log("✅ src/index.ts generated!");

// 2. Generate dist/index.esm.js
let esmContent = packages
  .map(p => `export * from "../packages/${p}/dist/index.esm.js";`)
  .join("\n");
fs.writeFileSync("dist/index.esm.js", esmContent + "\n");
console.log("✅ dist/index.esm.js generated!");

// 3. Generate dist/index.cjs.js
let cjsRequires = packages
  .map((p, i) => `const pkg${i} = require("../packages/${p}/dist/index.cjs.js");`)
  .join("\n");
let cjsExports = packages
  .map((_, i) => `  ...pkg${i},`)
  .join("\n");
let cjsContent = `'use strict';\n${cjsRequires}\n\nmodule.exports = {\n${cjsExports}\n};\n`;
fs.writeFileSync("dist/index.cjs.js", cjsContent);
console.log("✅ dist/index.cjs.js generated!");

// 4. Generate dist/index.d.ts
let dtsContent = packages
  .map(p => `export * from "../packages/${p}/dist/index.d.ts";`)
  .join("\n");
fs.writeFileSync("dist/index.d.ts", dtsContent + "\n");
console.log("✅ dist/index.d.ts generated!");

