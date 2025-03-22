// @ts-check
import { defineConfig } from 'astro/config';
// import tailwind from '@astrojs/tailwind';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // integrations: [tailwind()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@styles': '/src/styles'
      }
    }
  },
  site: 'https://NicoGomezM.github.io',
  base: '/Porfolio2.0/',    
});