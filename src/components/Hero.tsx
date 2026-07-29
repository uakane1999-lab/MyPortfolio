'use client';

import Link from 'next/link';
import ArchitectureLineArt from './ArchitectureLineArt';

const sideLabels = ['Concept', 'Planning', 'Structure', 'Design', 'Build', '</>'];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 px-6 md:px-12 overflow-hidden"
    >
      <div className="blueprint-grid absolute inset-0" aria-hidden="true" />

      <div className="hidden lg:flex vertical-text absolute left-4 top-1/2 -translate-y-1/2 gap-6 label-sm text-graphite">
        <span>Design the structure</span>
        <span>Build the future.</span>
      </div>

      <div className="relative w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-8 max-w-7xl mx-auto">
        <div className="w-full lg:w-2/5 lg:pl-8">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink leading-relaxed">
            構造を描く人間から、
            <br />
            仕組みを創るエンジニアへ。
          </h1>
          <p className="mt-6 text-graphite leading-loose">
            建築で培った「設計力」「課題解決力」「チームで創る力」を活かし、
            ユーザーに価値を届けるWebサービスを開発します。
          </p>
          <Link
            href="#about"
            className="label-sm inline-flex items-center gap-3 mt-10 px-6 py-3 border border-ink text-ink hover:bg-ink hover:text-paper transition-colors duration-300"
          >
            ABOUT ME
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="relative w-full lg:w-3/5">
          <ArchitectureLineArt variant="building" className="w-full h-auto max-w-xl mx-auto" />
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