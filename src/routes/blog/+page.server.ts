import parseHeaders from '$lib/utils/parseHeaders';
import fs from 'fs';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const dir = './src/lib/blogs';
	const files = fs.readdirSync(dir);
	const blogs = await Promise.all(
		files.map(async (filename) => {
			const headers = await parseHeaders(`${dir}/${filename}`);

			return {
				...headers,
				slug: filename.slice(0, -3)
			};
		})
	);

	return {
		blogs
	};
}) satisfies PageServerLoad;
