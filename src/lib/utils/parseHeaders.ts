import readline from 'readline';
import YAML from 'yaml';
import fs from 'fs';
import type { BlogPost } from '../../routes/blog/[slug]/+page';

export default function parseHeaders(filePath: string): Promise<BlogPost['metadata']> {
	return new Promise((resolve) => {
		const readStream = fs.createReadStream(filePath);
		const rl = readline.createInterface({
			input: readStream,
			crlfDelay: Infinity,
		});

		let params = '';
		rl.on('line', (line) => {
			if (line === '---') {
				if (params.length > 0) {
					rl.close();
					rl.removeAllListeners();
					readStream.close();
				}
				return;
			}

			params += line + '\n';
		});

		rl.on('close', () => {
			resolve(YAML.parse(params));
		});
	});
}
