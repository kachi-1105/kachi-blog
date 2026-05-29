---
title: 'はじめての記事'
pubDate: 2026-05-27
description: 'これはAstroブログのテスト用最初の記事です。DockerコンテナとContent Collectionsを使ったMarkdown管理の動作確認です。'
tags: ['Astro', 'ブログ', 'Docker', 'Markdown', '技術']
image: './images/thumbnail.svg'
---

# はじめての記事へようこそ

このブログは **Astro（静的モード）** と **Docker** を組み合わせて構築されています。ホストPCの環境を汚さず、コンテナ内でホットリロード開発が可能です。

## 構成の特徴

- **静的サイト生成（SSG）**: Astroのデフォルトモードで、高速な静的HTMLを出力
- **Content Collections**: Zodスキーマで型安全なMarkdown記事管理
- **Dockerボリュームマウント**: ホスト側の編集がリアルタイムでコンテナに反映

## 画像テスト

以下は記事に埋め込んだ画像です：

![テスト用サムネイル](./images/thumbnail.svg)

## コードブロックのテスト

```js
// AstroのgetCollection例
import { getCollection } from 'astro:content';

const posts = await getCollection('blog');
const sorted = posts.sort(
  (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
);
```

## まとめ

AstroはシンプルなMarkdownブログに最適なフレームワークです。Dockerと組み合わせることで、チーム全員が同じ環境で開発できます。
