// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://brukmap.github.io',
  base: '/BrukMap-landing-page',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});
