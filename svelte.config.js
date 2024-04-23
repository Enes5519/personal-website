import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import Prism from 'prismjs';
import { mdsvex } from 'mdsvex';

function highlighter(code, lang) {
	const highlighted = Prism.highlight(code, Prism.languages[lang]);
	return `<Components.pre class="language-${lang}">{@html \`${highlighted}\`}</Components.pre>`;
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		mdsvex({
			extensions: ['.md'],
			layout: './src/lib/components/layout/PostLayout.svelte',
			highlight: {
				highlighter,
			},
		}),
		vitePreprocess(),
	],
	extensions: ['.svelte', '.md'],

	kit: {
		adapter: adapter(),
	},
};

export default config;
