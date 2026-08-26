// src/app/components/ProjectCard.tsx
//プロジェクトページの1つのカード

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Project } from '@/data/projects';

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="border-ink/20 bg-paper/60 flex flex-col gap-8 border p-6 backdrop-blur-sm sm:flex-row sm:items-start sm:gap-10 sm:p-8 sm:pl-20 md:gap-14 lg:gap-24"
    >
      {/* プロジェクト画像 */}
      <div className="flex w-full shrink-0 justify-center sm:w-auto sm:justify-start sm:self-center">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          className="h-auto w-auto max-w-[70%] scale-120 sm:max-w-none"
        />
      </div>

      {/* プロジェクト情報 */}
      <div className="flex w-full flex-col gap-5">
        {/* タイトル */}
        <h3 className="font-display text-ink text-xl leading-snug sm:text-2xl">
          {project.titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h3>

        {/* チーム・期間・担当 */}
        <div className="text-graphite text-sm leading-loose">
          <p>{project.team}</p>
          <p>{project.duration}</p>
          <p>{project.role}</p>
        </div>

        <hr className="border-ink/15 border-t" />

        {/* 説明 */}
        <p className="text-graphite text-sm leading-loose">
          {project.description.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>

        <hr className="border-ink/15 border-t" />

        {/* 使用技術 */}
        <div className="text-graphite flex flex-col gap-1 text-sm leading-loose">
          <p className="label-sm text-ink mb-1">使用技術</p>

          <p>
            {project.tech.map((item, i) => (
              <span key={item.name}>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ink underline decoration-from-font underline-offset-2"
                  >
                    {item.name}
                  </a>
                ) : (
                  item.name
                )}

                {i < project.tech.length - 1 && ' / '}
              </span>
            ))}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
