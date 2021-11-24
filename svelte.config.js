import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true,

			scss: {
				prependData: '@import "src/css/variables.scss";'
			}
		})
	],

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			css: {
				preprocessorOptions: {
					scss: {
						additionalData: '@import "src/css/variables.scss";'
					}
				}
			},
			resolve: {
				alias: {
					$css: path.resolve('./src/css'),
					$comp: path.resolve('./src/components'),
					$data: path.resolve('./src/data'),
					$img: path.resolve('./src/images')
				}
			}
		}
	}
};

export default config;
