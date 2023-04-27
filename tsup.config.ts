import { defineConfig } from 'tsup';

export default defineConfig({
	/** Output */
	splitting: false,
	sourcemap: true,
	keepNames: true,
	minify: false,
	format: ['cjs'],

	/** Input */
	entry: ['source/**/*.ts', '!source/**/*.d.ts'],
	skipNodeModulesBundle: true,
	shims: false,

	/** TypeScript */
	tsconfig: 'tsconfig.json',
	target: 'es2020',
	dts: false,

	/** Other */
	replaceNodeEnv: true,
	bundle: false,
	clean: true
});
