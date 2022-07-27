import path from "path";
import esbuild from "rollup-plugin-esbuild";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import dts from "rollup-plugin-dts";

export default [
  {
    input: path.resolve(__dirname, "./src/index.ts"),
    output: [
      {
        file: path.resolve(__dirname, "dist", "index.esm.js"),
        format: "esm",
      },
    ],
    plugins: [
      babel({
        exclude: "node_modules/**",
      }),
      esbuild({
        target: "es2018",
      }),
      terser(),
    ],
  },
  {
    input: path.resolve(__dirname, "./src/index.ts"),
    output: [
      {
        file: path.resolve(__dirname, "dist", "index.common.js"),
        format: "cjs",
      },
    ],
    plugins: [
      babel({
        exclude: "node_modules/**",
      }),
      esbuild({
        target: "es2018",
      }),
      terser(),
    ],
  },
  {
    input: path.resolve(__dirname, "./src/index.ts"),
    output: [
      {
        file: path.resolve(__dirname, "dist", "index.umd.js"),
        name: "ECLF",
        format: "umd",
      },
    ],
    plugins: [
      babel({
        exclude: "node_modules/**",
      }),
      esbuild({
        target: "es2018",
      }),
      terser(),
    ],
  },
  {
    input: path.resolve(__dirname, "./src/index.ts"),
    output: [
      {
        dir: path.resolve(__dirname, "dist"),
        format: "esm",
      },
    ],
    external: [],
    plugins: [dts({ respectExternal: true })],
  },
];
