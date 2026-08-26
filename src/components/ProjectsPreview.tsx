// src/components/ProjectsPreview.tsx
// ホーム画面のPROJECT部分

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { projects } from '@/data/projects';

export default function ProjectsPreview() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // 1カード分スクロール
  const scrollNext = () => {
    const container = scrollRef.current;

    if (!container) return;

    const card = container.querySelector<HTMLElement>('[data-project-card]');

    if (!card) return;

    const gap = 24;
    const scrollAmount = card.offsetWidth + gap;

    // 最後まで行ったら最初に戻る
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
      container.scrollTo({
        left: 0,
        behavior: 'smooth',
      });
    } else {
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // 前のカードへ
  const scrollPrev = () => {
    const container = scrollRef.current;

    if (!container) return;

    const card = container.querySelector<HTMLElement>('[data-project-card]');

    if (!card) return;

    const gap = 24;
    const scrollAmount = card.offsetWidth + gap;

    // 最初なら最後へ
    if (container.scrollLeft <= 10) {
      container.scrollTo({
        left: container.scrollWidth,
        behavior: 'smooth',
      });
    } else {
      container.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // 自動スクロール
  useEffect(() => {
    const interval = setInterval(() => {
      scrollNext();
    }, 50000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" className="h-full px-6 pt-20 pb-10 md:px-12 md:pb-16">
      <div className="max-w-none">
        {/* PROJECTS見出し */}
        <div className="mb-24 flex items-center justify-center gap-4">
          <h2 className="label-sm text-ink">PROJECTS</h2>

          <span className="bg-graphite/40 h-px w-200" />
        </div>

        {/* カルーセル */}
        <div className="relative">
          {/* 左矢印 */}
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="前のプロジェクト"
            className="border-graphite/40 bg-paper/90 text-ink hover:bg-ink hover:text-paper absolute top-1/2 left-0 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center border transition-colors duration-300"
          >
            ←
          </button>

          {/*
            2枚分だけ見せる表示領域。
            左右の矢印(w-10=40px)はこの外側の relative 要素の端に固定されているため、
            ここに px を付けてガター（余白）を作らないとカードと矢印が重なってしまう。
          */}
          <div className="mx-auto w-full max-w-4xl overflow-hidden px-10 sm:px-12">
            {/* 横スクロールする部分 */}
            <div
              ref={scrollRef}
              className="projects-carousel flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  data-project-card
                  className="border-graphite/25 flex w-full min-w-full shrink-0 snap-start flex-row gap-4 border bg-white p-4 sm:w-[calc(50%-0.75rem)] sm:min-w-[calc(50%-0.75rem)]"
                >
                  {/* 画像 */}
                  <div className="relative h-56 w-24 shrink-0">
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* テキスト */}
                  <div className="flex min-w-0 flex-1 flex-col pt-1">
                    {/* タイトル（break-wordsで長い単語も折り返す） */}
                    <h3 className="font-display text-ink text-base">
                      {project.titleLines.map((line) => (
                        <span key={line} className="block break-words">
                          {line}
                        </span>
                      ))}
                    </h3>

                    {/* 区切り線: カード幅に合わせてw-fullに */}
                    <span className="bg-graphite/40 mt-3 mb-4 h-px w-full" />

                    {/* 詳しく見る */}
                    <Link
                      href="/project"
                      className="label-sm text-ink hover:border-ink hover:bg-ink hover:text-paper mt-8 inline-flex items-center gap-3 self-start border border-[#9da1a6] px-5 py-2 text-xs transition-colors duration-300"
                    >
                      詳しく見る
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 右矢印 */}
          <button
            type="button"
            onClick={scrollNext}
            aria-label="次のプロジェクト"
            className="border-graphite/40 bg-paper/90 text-ink hover:bg-ink hover:text-paper absolute top-1/2 right-0 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center border transition-colors duration-300"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
