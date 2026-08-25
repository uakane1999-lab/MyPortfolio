# ポートフォリオサイトの作成
自分の経歴やスキルがわかるサイトの作成を目指す

# 使用技術

- フロントエンド:Next.js/Typescript/TailwindCss

# 立ち上げ方法
```
cd portfolio-site
npm run dev
```
`http://localhost:3000`にアクセス



# ディレクトリ構成
```
src/
  app/
    layout.tsx        // フォント設定、metadata
    page.tsx           // 各セクションを並べるだけ
    globals.css        // Tailwind + カスタムCSS変数
  components/
    Navigation.tsx      // 既存を流用・調整
    Hero.tsx
    AboutMe.tsx
    Skills.tsx
    Projects.tsx
    ProjectCard.tsx
    ContactSection.tsx  // フォームなし、mailtoリンクのみ
    Footer.tsx
  data/
    projects.ts         // プロジェクト情報を配列で管理
    skills.ts            // スキルアイコン+ラベル
  lib/
    fonts.ts             // next/font/googleの設定をまとめる
```
