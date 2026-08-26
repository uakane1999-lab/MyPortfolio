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

    const card =
      container.querySelector<HTMLElement>('[data-project-card]');

    if (!card) return;

    const gap = 24;
    const scrollAmount = card.offsetWidth + gap;

    // 最後まで行ったら最初に戻る
    if (
      container.scrollLeft + container.clientWidth >=
      container.scrollWidth - 10
    ) {
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

    const card =
      container.querySelector<HTMLElement>('[data-project-card]');

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
    <section
      id="projects"
      className="px-6 md:px-12 pt-20 pb-10 md:pb-16 h-full"
    >
      <div className="max-w-none">

        {/* PROJECTS見出し */}
        <div className="flex items-center justify-center gap-4 mb-24">
          <h2 className="label-sm text-ink">
            PROJECTS
          </h2>

          <span className="w-200 h-px bg-graphite/40" />
        </div>

        {/* カルーセル */}
        <div className="relative">

          {/* 左矢印 */}
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="前のプロジェクト"
            className="
              absolute left-0 top-1/2 z-10
              -translate-y-1/2
              flex h-10 w-10 items-center justify-center
              border border-graphite/40
              bg-paper/90
              text-ink
              transition-colors duration-300
              hover:bg-ink hover:text-paper
            "
          >
            ←
          </button>

          {/*
            2枚分だけ見せる表示領域。
            左右の矢印(w-10=40px)はこの外側の relative 要素の端に固定されているため、
            ここに px を付けてガター（余白）を作らないとカードと矢印が重なってしまう。
          */}
          <div
            className="
              mx-auto
              w-full
              max-w-4xl
              overflow-hidden
              px-10 sm:px-12
            "
          >

            {/* 横スクロールする部分 */}
            <div
              ref={scrollRef}
              className="
                projects-carousel
                flex
                overflow-x-auto
                gap-6
                snap-x
                snap-mandatory
                pb-4
              "
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  data-project-card
                  className="
                    flex flex-row gap-4
                    border border-graphite/25
                    bg-white p-4
                    w-full min-w-full
                    shrink-0
                    snap-start
                    sm:w-[calc(50%-0.75rem)]
                    sm:min-w-[calc(50%-0.75rem)]
                  "
                >

                  {/* 画像 */}
                  <div className="relative w-24 h-56 shrink-0">
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* テキスト */}
                  <div className="flex flex-col flex-1 min-w-0 pt-1">

                    {/* タイトル（break-wordsで長い単語も折り返す） */}
                    <h3 className="font-display text-ink text-base">
                      {project.titleLines.map((line) => (
                        <span key={line} className="block break-words">
                          {line}
                        </span>
                      ))}
                    </h3>

                    {/* 区切り線: カード幅に合わせてw-fullに */}
                    <span className="w-full h-px bg-graphite/40 mt-3 mb-4" />

                    {/* 詳しく見る */}
                    <Link
                      href="/project"
                      className="
                        label-sm
                        inline-flex items-center gap-3
                        mt-8 px-5 py-2
                        border border-[#9da1a6]
                        text-ink
                        hover:border-ink
                        hover:bg-ink
                        hover:text-paper
                        transition-colors duration-300
                        text-xs self-start
                      "
                    >
                      詳しく見る
                      <span aria-hidden="true">
                        →
                      </span>
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
            className="
              absolute right-0 top-1/2 z-10
              -translate-y-1/2
              flex h-10 w-10 items-center justify-center
              border border-graphite/40
              bg-paper/90
              text-ink
              transition-colors duration-300
              hover:bg-ink hover:text-paper
            "
          >
            →
          </button>

        </div>
      </div>
    </section>
  );
}