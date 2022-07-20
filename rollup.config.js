import path from "path";
import esbuild from "rollup-plugin-esbuild";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: path.resolve(__dirname, "./src/index.ts"),
    output: [
      {
        dir: path.resolve(__dirname, "esm"),
        format: "esm",
      },
    ],
    //   只编译，不打包
    preserveModules: true,
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
        dir: path.resolve(__dirname, "dist/"),
        name: 'ECLF',
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
];
