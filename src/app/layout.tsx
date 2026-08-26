// src/app/layout.tsx
import type { Metadata } from 'next';
import { notoSerifJP, notoSansJP, grapeNuts } from '@/lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Portfolio | Web Engineer',
  description:
    '構造を描く人間から、仕組みを創るエンジニアへ。建築で培った設計力・課題解決力を活かし、Webサービスを開発します。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSerifJP.variable} ${notoSansJP.variable} ${grapeNuts.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
