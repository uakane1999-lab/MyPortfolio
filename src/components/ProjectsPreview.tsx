// src/app/components/ProjectsPreview.tsx
//ホーム画面のPROJECT部分

import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';

export default function ProjectsPreview() {
  return (
    <section
      id="projects"
      className="px-6 md:px-12 pt-20 pb-40 h-full"
    >
      <div className="max-w-none">
        {/* ABOUT MEの見出しスタイルに合わせる */}
        <div className="flex items-center justify-center gap-4 mb-36">
          <h2 className="label-sm text-ink">PROJECTS</h2>
          <span className="w-250 h-px bg-graphite/40" />
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-16">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="flex flex-row gap-6 border border-graphite/25 bg-white p-6 max-w-md"
            >
              {/* 画像: 常に左、object-containで切り取らずに全体を表示 */}
              <div className="relative w-32 h-72 shrink-0">
                {project.imageUrl ? (
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-contain"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-graphite label-sm bg-graphite/10">
                    No Image
                  </div>
                )}
              </div>

              {/* テキスト列: 常に右 */}
              <div className="flex flex-col flex-1 pt-1">
                <h3 className="font-display text-ink text-base">{project.title}</h3>

                {/* タイトル下の区切り線: テキスト列の幅に合わせた短めの線（Figma準拠） */}
                <span className="w-2/5 h-px bg-graphite/40 mt-3 mb-4" />

                {/* 説明文: 幅を絞って自然な折り返しで整える */}
                <p className="font-display text-ink/70 text-sm leading-loose max-w-[240px]">
                  {project.description}
                </p>

                {/* 詳しく見るボタン: 独立した枠付きボタンとして、上に余白を空けて配置 */}
                <Link
                  href={`/project/${project.slug}`}
                  className="label-sm inline-flex items-center gap-3 mt-8 px-5 py-2 border border-[#9da1a6] text-ink hover:border-ink transition-colors duration-300 text-xs self-start"
                >
                  詳しく見る
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}