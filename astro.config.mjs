// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// GitHub Pages：網址是 https://<帳號>.github.io/<repo 名稱>/
// 如果 repo 名稱剛好是 <帳號>.github.io，把 base 改成 '/'
export default defineConfig({
  site: 'https://sharonlien0927.github.io',
  base: '/portfolio',
  integrations: [mdx()],
  // 關掉本機預覽時畫面下方的 Astro 開發工具列（正式網站本來就不會出現）
  devToolbar: { enabled: false },
  i18n: {
    locales: ['zh-tw', 'en'],
    defaultLocale: 'zh-tw',
    routing: { prefixDefaultLocale: false },
  },
});
