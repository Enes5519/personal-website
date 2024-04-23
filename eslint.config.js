import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginSvelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';
import svelteParser from 'svelte-eslint-parser';

export default [
	{
		languageOptions: {
			globals: { ...globals.browser, ...globals.node },
			parserOptions: {
				extraFileExtensions: ['**/*.svelte'],
			},
		},
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	...eslintPluginSvelte.configs['flat/prettier'],
	prettier,
	{
		ignores: ['**/dist/**', '**/.svelte-kit/**'],
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parser: svelteParser,
			parserOptions: {
				parser: tseslint.parser,
			},
		},
	},
];
