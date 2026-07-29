// src/lib/fonts.ts
// サイト全体で使うフォントをここに集約する
// next/font/googleはビルド時にフォントを最適化してホスティングしてくれる

import {
  Shippori_Mincho,
  Space_Mono,
  Zen_Kaku_Gothic_New,
  Caveat,
} from 'next/font/google';

// 見出し(和文): 「構造を描く人間から、」のような大見出し用
export const shipporiMincho = Shippori_Mincho({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-shippori-mincho', // CSS変数として使う
  display: 'swap',
});

// ラベル・ナビ(英字): HOME / ABOUT / SKILLS のような製図の注記文字
export const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
});

// 本文(和文): 可読性重視のゴシック
export const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-zen-kaku',
  display: 'swap',
});

// 手書きアクセント: "Thank you!" のような一点だけの演出用
export const caveat = Caveat({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-caveat',
  display: 'swap',
});