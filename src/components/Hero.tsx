// src/app/components/Hero.tsx
//ホーム画面のヒーローセクション

'use client';

import Link from 'next/link';

const sideLabels = ['Concept', 'Planning', 'Structure', 'Design', 'Build', '</>'];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 px-6 md:px-12 overflow-hidden bg-no-repeat"
      style={{
        backgroundImage: "url('/background.png')",
        backgroundSize: '80% auto',
        backgroundPosition: 'right center',
      }}
    >
      <div className="blueprint-grid absolute inset-0" aria-hidden="true" />

      <div className="hidden lg:flex vertical-text absolute left-4 top-1/2 -translate-y-1/2 gap-6 label-sm text-graphite">
        <span>Design the structure</span>
        <span>Build the future.</span>
      </div>

      <div className="relative w-full flex items-center max-w-7xl mx-auto">
        <div className="w-full lg:w-2/5 lg:pl-8">
          {/* 各行をwhitespace-nowrapにして、幅が狭くても意図しない3行目への折り返しを防ぐ */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink leading-relaxed">
            <span className="block whitespace-nowrap">構造を描く人間から、</span>
            <span className="block whitespace-nowrap">仕組みを創るエンジニアへ。</span>
          </h1>
          <p className="mt-6 leading-loose">
            建築で培った「設計力」「課題解決力」「チームで創る力」を活かし、
            ユーザーに価値を届けるWebサービスを開発します。
          </p>
        </div>

        <div className="hidden xl:flex flex-col gap-6 label-sm text-graphite absolute right-0 top-1/2 -translate-y-1/2">
          {sideLabels.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
      </div>
    </section>
  );
}