// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import rehypeRaw from 'rehype-raw';

// https://astro.build/config
export default defineConfig({
  markdown: {
    // Tillater rå HTML (f.eks. for embedded innhold) i .md-filer
    rehypePlugins: [rehypeRaw],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});