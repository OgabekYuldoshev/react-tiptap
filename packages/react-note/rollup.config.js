import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import { defineConfig } from "rollup";
import external from 'rollup-plugin-peer-deps-external';
import postcss from "rollup-plugin-postcss";
const packageJson = require("./package.json");

export default defineConfig({
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
        external(),
        resolve(),
        commonjs(),
        typescript({
            tsconfig: "./tsconfig.json",
        }),
        postcss({
            extract: true,
            minimize: true,
        }),
        terser(),
    ],
    external: ["react", "react-dom"],
})