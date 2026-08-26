// src/app/data/projects.ts

export type TechItem = {
  name: string;
  href?: string;
};

export type Project = {
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

export const projects: Project[] = [
  {
    id: 'enkatsu',
    titleLines: ['保育園探しのアプリ「ENKATSU」'],
    team: 'チーム開発(4人)',
    duration: '期間：4週間',
    role: '担当：フロントエンド',
    description: [
      '保育園選びの負担を、レーダーチャートによる直感的な比較と細やかな希望条件マッチングで解消する、保護者向けの保育園検索・比較Webアプリケーションを作成しました。',
      '保育園側の管理画面（お問い合わせ・見学予約管理、園情報編集）もあわせて提供し、',
      '保護者と保育園をつなぐマッチングプラットフォームとして開発しました。',
    ],
    tech: [
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
      { name: 'Express.js' },
      { name: 'Supabase' },
      { name: 'Prisma' },
    ],
    image: {
      src: '/projects/project1.png',
      alt: 'ENKATSUアプリのスクリーンショット',
      width: 112,
      height: 238,
    },
    slideUrl: '#',
  },

  {
    id: 'gohoubi-bank',
    titleLines: ['LINK×ごほうび貯金のアプリ「ごほうびBANK」'],
    team: 'チーム開発(3人)',
    duration: '期間：1週間',
    role: '担当：フロントエンド',
    description: [
      '日常の小さな節約や努力をLINEボット経由で1タップで記録し、銀行APIを通じて目的別口座へ',
      'リアルタイムに資金移動しつつ、モチベーション維持メッセージを動的生成する',
      'フィンテック×メンタルヘルスケアアプリを開発しました。',
    ],
    tech: [
      { name: 'LINE Messaging API' },
      { name: 'Flex Message' },
      { name: 'AWS Lambda (Node.js) ' },
      { name: 'LINE Webhook' },
      { name: 'sunabar API' },
    ],
    image: {
      src: '/projects/project2.png',
      alt: 'ごほうびBANKアプリのスクリーンショット',
      width: 112,
      height: 238,
    },
    slideUrl: '#',
  },

  {
    id: 'fuwatto-recipe',
    titleLines: ['料理投稿レシピサイト「ふわっとレシピ」'],
    team: 'チーム開発(4人)',
    duration: '期間：1週間',
    role: '担当：バックエンド',
    description: [
      '計量スプーンの手間や心理的ハードルを排除し、目分量やニュアンス',
      'のまま日常のレシピを1分で気軽に投稿・閲覧できる、全世代向けの',
      'ゆる自炊コミュニティWebアプリケーションを開発。',
    ],
    tech: [
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
      { name: 'Python(FastAPI)' },
      { name: 'PostgreSQL' },
      { name: 'Docker Compose' },
      { name: 'Firebase' },
      { name: 'Cloudinary' },
    ],
    image: {
      src: '/projects/project3.png',
      alt: 'ふわっとレシピサイトのスクリーンショット',
      width: 200,
      height: 70,
    },
    slideUrl: '#',
  },
];