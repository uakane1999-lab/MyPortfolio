// src/app/project/page.tsx

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';

type TechItem = {
  name: string;
  href?: string;
};

type Project = {
  id: string;
  titleLines: string[];
  team: string;
  duration: string;
  role: string;
  description: string[];
  tech: TechItem[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  slideUrl?: string;
};

const projects: Project[] = [
  {
    id: 'enkatsu',
    titleLines: ['保育園探しのアプリ「ENKATSU」'],
    team: 'チーム開発(4人)',
    duration: '期間：4週間',
    role: '担当：フロントエンド',
    description: [
      '復職を控えた保護者に向けて、',
      '保育園探し・比較ができるアプリの開発を行いました。',
    ],
    tech: [
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
      { name: 'Express.js',},
      { name: 'supabase' },
      { name: 'prisma' },
    ],
    image: {
      src: '/projects/project1.png',
      alt: 'ENKATSUアプリのスクリーンショット',
      width: 195,
      height: 373,
    },
    slideUrl: '#',
  },
  {
    id: 'gohoubi-bank',
    titleLines: ['LINK×ごほうび貯金のアプリ', '「ごほうびBANK」'],
    team: 'チーム開発(3人)',
    duration: '期間：1週間',
    role: '担当：フロントエンド',
    description: [
      'LINE developersとsunabarの銀行APIを',
      '活用したアプリの開発を行いました。',
    ],
    tech: [
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
      { name: 'Express.js',},
      { name: 'supabase' },
      { name: 'prisma' },
    ],
    image: {
      src: '/projects/project2.png',
      alt: 'ごほうびBANKアプリのスクリーンショット',
      width: 179,
      height: 363,
    },
    slideUrl: '#',
  },
  {
    id: 'fuwatto-recipe',
    titleLines: ['料理投稿レシピサイト', '「ふわっとレシピ」'],
    team: 'チーム開発(4人)',
    duration: '期間：1週間',
    role: '担当：バックエンド',
    description: [
      '復職を控えた保護者に向けて、',
      '保育園探し・比較ができるアプリの開発を行いました。',
    ],
    tech: [
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
      { name: 'Express.js'},
      { name: 'supabase' },
      { name: 'prisma' },
    ],
    image: {
      src: '/images/project-fuwatto-recipe.png',
      alt: 'ふわっとレシピサイトのスクリーンショット',
      width: 192,
      height: 389,
    },
    slideUrl: '#',
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col gap-8 border border-ink/20 bg-paper/60 p-8 backdrop-blur-sm sm:flex-row sm:items-start sm:gap-12 sm:p-10"
    >
      <div className="mx-auto shrink-0 sm:mx-0">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          className="h-auto w-auto"
        />
      </div>

      <div className="flex w-full flex-col gap-5">
        <h3 className="font-display text-2xl leading-snug text-ink">
          {project.titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h3>

        <div className="text-sm leading-loose text-graphite">
          <p>{project.team}</p>
          <p>{project.duration}</p>
          <p>{project.role}</p>
        </div>

        <hr className="border-t border-ink/15" />

        <p className="text-sm leading-loose text-graphite">
          {project.description.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>

        <hr className="border-t border-ink/15" />

        <div className="flex flex-col gap-1 text-sm leading-loose text-graphite">
          <p className="label-sm mb-1 text-ink">使用技術</p>

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

        {project.slideUrl && (
          <Link
            href={project.slideUrl}
            className="label-sm mt-2 inline-flex w-fit items-center gap-3 border border-ink px-6 py-3 text-ink transition-colors duration-300 hover:bg-ink hover:text-paper"
          >
            発表スライド
            <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>
    </motion.article>
  );
}

export default function ProjectPage() {
  return (
    <>
      <Navigation />

      <div className="relative min-h-screen bg-paper">
        <div className="blueprint-grid absolute inset-0" aria-hidden="true" />

        <div className="relative">
          <main className="mx-auto max-w-5xl px-6 py-16 md:px-12">
            <h2 className="font-display text-3xl text-ink">PROJECTS</h2>

            <hr className="mt-4 mb-12 border-t border-ink/15" />

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