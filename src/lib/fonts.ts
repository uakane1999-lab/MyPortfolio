// src/lib/fonts.ts
// サイト全体で使うフォントをここに集約する
// next/font/googleはビルド時にフォントを最適化してホスティングしてくれる

// src/lib/fonts.ts
import { Noto_Serif_JP, Noto_Sans_JP, Grape_Nuts } from 'next/font/google';

// 見出し・本文(和文明朝体): 「構造を描く人間から、」などメインの文章
export const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-noto-serif-jp',
  display: 'swap',
});

// ナビ・ラベル・スキルテキスト(和文ゴシック)
export const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['100', '400', '500'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
});

// ロゴ・手書きアクセント(Portfolio / Thank you!)
export const grapeNuts = Grape_Nuts({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-grape-nuts',
  display: 'swap',
});