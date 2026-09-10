// @ts-check
import { defineConfig } from 'astro/config';
import rehypeRaw from 'rehype-raw';

// https://astro.build/config
export default defineConfig({
  markdown: {
    // Tillater rå HTML (som <script> for Instagram) i .md-filer
    rehypePlugins: [rehypeRaw],
  },
});