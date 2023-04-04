import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import Prism from 'prismjs';
import { mdsvex } from 'mdsvex';

function highlighter(code, lang) {
	const highlighted = Prism.highlight(code, Prism.languages[lang]);
	return `<Components.pre class="language-${lang}">{@html \`${highlighted}\`}</Components.pre>`;
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			layout: './src/lib/components/layout/PostLayout.svelte',
			highlight: {
				highlighter
			}
		})
	],
	extensions: ['.svelte', '.md'],

	kit: {
		adapter: adapter()
	}
};

export default config;
