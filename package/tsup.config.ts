import { defineConfig } from "tsup";
const packageJson = require("./package.json");

const externalDeps = Object.keys(packageJson.peerDependencies);

export default defineConfig({
	entry: ["src/index.ts"],
	format: ["cjs", "esm"],
	external: externalDeps,
	outDir: "dist",
	dts: true,
	treeshake: true,
	minify: true,
	sourcemap: true,
	clean: true,
});
