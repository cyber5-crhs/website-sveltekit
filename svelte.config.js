import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter(),

    csp: {
      directives: {
        'base-uri': ['self'],
        'child-src': ['self'],
        'connect-src': ['self'],
        'img-src': ['self'],
        'font-src': ['self'],
        'form-action': ['self'],
        'frame-ancestors': ['self'],
        'frame-src': ['self'],
        'manifest-src': ['self'],
        'media-src': ['self'],
        'object-src': ['none'],
        'style-src': ['self'],
        'default-src': ['self'],
        'script-src': ['self'],
        'worker-src': ['self'],
      },
    },
  },
};

export default config;
