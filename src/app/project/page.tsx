// src/app/project/page.tsx

'use client';

import Navigation from '@/components/Navigation';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export default function ProjectPage() {
  return (
    <>
      <Navigation />

      <div className="relative min-h-screen bg-paper">

        {/* ブループリントグリッド */}
        <div
          className="blueprint-grid absolute inset-0"
          aria-hidden="true"
        />

        <div className="relative">

          <main className="mx-auto max-w-5xl px-6 py-16 pt-30 md:px-12">

            {/* ページタイトル */}
            <h2 className="font-display text-3xl text-ink">
              PROJECTS
            </h2>

            <hr className="mt-4 mb-12 border-t border-ink/15" />

            {/* プロジェクト一覧 */}
            <div className="flex flex-col gap-12">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </div>

          </main>

        </div>
      </div>
    </>
  );
}