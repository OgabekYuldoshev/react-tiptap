import { defineConfig } from "tsup";
import { sassPlugin } from 'esbuild-sass-plugin'

const packageJson = require("./package.json");

export default defineConfig((options) => {
	return {
		entry: ["src/index.ts"],
		format: ["cjs", "esm"],
		name: 'react-tiptap',
		external: Object.keys(packageJson.peerDependencies),
		keepNames: true,
		dts: true,
		treeshake: true,
		minify: !options.watch,
		sourcemap: true,
		clean: true,
		esbuildPlugins: [
			sassPlugin()
		]
	}
});
