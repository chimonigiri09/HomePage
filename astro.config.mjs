// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap()],
  server: {
    host: true,
    port: 4321, // 任意
  },
  vite: {
    server: {
      // Live Share / プロキシ越しでHMRが切れる対策
      hmr: {
        clientPort: 443,
        protocol: 'wss', // 必要に応じて。まずは付けてOK
      },
    },
  },
});
