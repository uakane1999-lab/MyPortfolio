// src/app/components/ProjectCard.tsx
//プロジェクトページの1つのカード

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Project } from '@/data/projects';

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col gap-8 border border-ink/20 bg-paper/60 p-6 backdrop-blur-sm sm:flex-row sm:items-start sm:gap-10 sm:p-8 sm:pl-20 md:gap-14 lg:gap-24"
    >
      {/* プロジェクト画像 */}
      <div className="flex w-full justify-center shrink-0 sm:w-auto sm:justify-start sm:self-center">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          className="h-auto w-auto max-w-[70%] sm:max-w-none scale-120"
        />
      </div>

      {/* プロジェクト情報 */}
      <div className="flex w-full flex-col gap-5">

        {/* タイトル */}
        <h3 className="font-display text-xl sm:text-2xl leading-snug text-ink">
          {project.titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h3>

        {/* チーム・期間・担当 */}
        <div className="text-sm leading-loose text-graphite">
          <p>{project.team}</p>
          <p>{project.duration}</p>
          <p>{project.role}</p>
        </div>

        <hr className="border-t border-ink/15" />

        {/* 説明 */}
        <p className="text-sm leading-loose text-graphite">
          {project.description.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>

        <hr className="border-t border-ink/15" />

        {/* 使用技術 */}
        <div className="flex flex-col gap-1 text-sm leading-loose text-graphite">
          <p className="label-sm mb-1 text-ink">
            使用技術
          </p>

          <p>
            {project.tech.map((item, i) => (
              <span key={item.name}>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-from-font underline-offset-2 hover:text-ink"
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