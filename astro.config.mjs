import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.rodrigodebolsonarorn36.com.br',
  trailingSlash: 'always',
  integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
  output: 'static',
});
