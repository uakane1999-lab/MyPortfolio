// src/app/data/profile.ts

export const profile = {
  name: '内田 朱音',
  nameEn: 'uchida akane',
  birthPlace: '神奈川県出身',
  birthDate: '1999年10月9日生まれ',
  bioShort:
    '前職では、イベント・展示会の施工管理として、工程管理、図面作成、クライアント・協力会社との調整を担当。現場で培った課題解決力と、モノづくりへのこだわりを強みに、エンジニアとして新たな価値を生み出していきます。',
  photoUrl: '/profile/myface.JPG',
};

// --- 型定義の更新 ---
export type NoteLine = string | { text: string; url: string };

export interface CareerNote {
  label: string;
  lines: NoteLine[]; // 文字列またはオブジェクトの配列を受け入れ可能に
}

export interface CareerItem {
  date: string;
  title: string;
  description?: string[];
  note?: CareerNote;
}

export const career: CareerItem[] = [
  {
    date: '2020.03',
    title: '日本工学院専門学校卒業',
    description: ['舞台セットの製作について学ぶ'],
    note: {
      label: '卒業制作',
      lines: [
        {
          text: '海抜3000m',
          url: 'https://my.matterport.com/show/?m=cuyW3NySFMr&brand=0',
        },
        {
          text: '見よ、飛行機の高く飛べるを',
          url: 'https://my.matterport.com/show/?m=kJQf9DMwnbf&brand=0',
        },
      ],
    },
  },
  {
    date: '2020.04',
    title: '株式会社丹青ディスプレイ入社',
    description: [
      '商業施設や展示会、各種イベントの施工管理業務に従事。',
      '工程管理・品質/安全管理・予算管理から、クライアント・協力会社との調整などを担当。',
      '多くの関係者と連携し、限られた期間でプロジェクトを完遂。',
    ],
    note: {
      label: '主な経験業務',
      lines: [
        '見積作成 / 工程管理(スケジュール作成・進捗管理) / クライアント対応',
        '協力会社の手配・管理 / 品質管理・安全管理 / 図面作成(Vectorworks)',
      ],
    },
  },
  {
    date: '2026.01',
    title: 'エンジニアにキャリアチェンジするため、Ms.Engineerにて学習を開始',
    description: [
      '3か月間の基礎学習後、コーディングブートキャンプに参加。webの基礎から勉強を開始し、',
      '最終的には4人チームで一つのアプリを開発。',
    ],
    note: { label: '卒業制作', lines: ['保育園探しのアプリ【ENKATSU】'] },
  },
  { date: '2026.06', title: '株式会社丹青ディスプレイ 退社' },
  { date: '2026.07', title: 'Ms.Engineer 卒業' },
  { date: '2026.07', title: 'エンジニアとして学習を継続・転職活動中' },
];

export const skillGroups: string[][] = [
  ['TypeScript', 'Next.js','Figma', 'illustrator'],
  ['Express.js','MySQL', 'Prisma', 'Docker'],
  ['Docker', 'GitHub'],
];