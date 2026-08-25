// src/app/data/projects.ts

export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
}

export const projects: Project[] = [
  {
    slug: 'enkatsu',
    title: '保育園アプリ「ENKATSU」',
    description:
      '復職を控えた保護者に向けて、保育園探し・比較ができるアプリの開発を行いました。',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    imageUrl: '/projects/project1.png',
  },
  {
    slug: 'gohoubi-bank',
    title: 'ごほうびBANK',
    description:
      'LINE developersとsunabarの銀行APIを活用したアプリの開発を行いました。',
    tags: ['LINE Messaging API', 'AWS Lambda', 'JavaScript'],
    imageUrl: '/projects/project2.png',
  },
];