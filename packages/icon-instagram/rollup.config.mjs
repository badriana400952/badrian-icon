import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import dts from "rollup-plugin-dts";
import fs from "fs";

const packageJson = JSON.parse(fs.readFileSync("./package.json", "utf8"));

export default [
  // 🔹 Bundle utama (CJS + ESM)
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        useTsconfigDeclarationDir: true,
        tsconfigOverride: {
          compilerOptions: {
            declaration: true,
            declarationDir: "dist/types",
            emitDeclarationOnly: false,
            rootDir: "src",
            outDir: "dist",
            removeComments: false,
          },
          include: ["src"],
          exclude: ["node_modules", "dist"],
        },
        clean: true, // bersihkan cache sebelum build
      }),
    ],
  },

  // 🔹 Bundle untuk file deklarasi (.d.ts)
  {
    input: "dist/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
  },
];
