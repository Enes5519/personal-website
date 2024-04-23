import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export interface BlogPost {
	metadata: {
		title: string;
		excerpt: string;
		image: string;
		date: string;
		category: string[];
		slug: string;
	};
}

export const load = (async ({ params }) => {
	try {
		const post = await import(`../../../lib/blogs/${params.slug}.md`);

		return {
			component: post.default,
			meta: post.metadata as BlogPost['metadata'],
		};
	} catch (err) {
		console.log(err);
		error(404, 'Not found');
	}
}) satisfies PageLoad;

export const prerender = true;
