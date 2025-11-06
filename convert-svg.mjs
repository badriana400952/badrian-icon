import fs from "fs";
import path from "path";

const inputDir = "./icon"; // folder asal svg
const outputDir = "./src/travelandmap"; // folder hasil jsx

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const toPascalCase = (str) =>
  str
    .replace(/\.svg$/i, "")
    .split(/[-_ ]+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");

// daftar atribut SVG yang perlu diubah ke JSX
const svgAttrToJsx = (svg) =>
  svg
    .replace(/class=/g, "className=")
    .replace(/clip-rule=/g, "clipRule=")
    .replace(/fill-rule=/g, "fillRule=")
    .replace(/stroke-width=/g, "strokeWidth=")
    .replace(/stroke-linecap=/g, "strokeLinecap=")
    .replace(/stroke-linejoin=/g, "strokeLinejoin=")
    .replace(/stroke-miterlimit=/g, "strokeMiterlimit=")
    .replace(/stroke-dasharray=/g, "strokeDasharray=")
    .replace(/stroke-dashoffset=/g, "strokeDashoffset=")
    .replace(/fill-opacity=/g, "fillOpacity=")
    .replace(/stop-color=/g, "stopColor=")
    .replace(/stop-opacity=/g, "stopOpacity=")
    .replace(/<\?xml.*?\?>/g, "")
    .replace(/<!DOCTYPE.*?>/g, "")
    .trim();

const svgFiles = fs.readdirSync(inputDir).filter((f) => f.endsWith(".svg"));

if (svgFiles.length === 0) {
  console.log("⚠️ Tidak ada file SVG di folder /icon");
  process.exit(0);
}

svgFiles.forEach((file) => {
  const svgPath = path.join(inputDir, file);
  let svg = fs.readFileSync(svgPath, "utf8").trim();

  svg = svgAttrToJsx(svg);
  svg = svg.replace(/<svg([^>]*)>/, `<svg$1 {...props}>`);

  const name = toPascalCase(file);
  const outPath = path.join(outputDir, `${name}.tsx`);

  const component = `import React from 'react';

const ${name}: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  ${svg}
);

export default ${name};
`;

  fs.writeFileSync(outPath, component, "utf8");
  console.log(`✅ ${file} → ${name}.jsx`);
});

console.log(`\n✨ Konversi selesai! Total: ${svgFiles.length} ikon`);
  