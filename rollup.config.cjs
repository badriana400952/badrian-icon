const resolve = require("@rollup/plugin-node-resolve").default;
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("rollup-plugin-typescript2");
const dts = require("rollup-plugin-dts").default;
const pkg = require("./package.json");

module.exports = [
  {
    input: "src/index.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [resolve(), commonjs(), typescript({ tsconfig: "./tsconfig.json" })],
  },
  {
    input: "src/index.ts",
    output: [{ file: pkg.types, format: "es" }],
    plugins: [dts()],
  },
];
