import { defineConfig } from 'astro/config';

export default defineConfig({
  // GitHub Pages の公開 URL（例: https://your-username.github.io）
  site: 'https://kachi-1105.github.io',
  // リポジトリ名（例: リポジトリ名が kachi-blog なら '/kachi-blog'）
  // カスタムドメインを使う場合や username.github.io リポジトリの場合は削除してください
  base: '/<kachi-blog>',
});
