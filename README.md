# ポートフォリオサイト

自分の経歴、制作実績、所有スキルを分かりやすく伝えるための個人ポートフォリオサイトです。

- **URL**: https://my-portfolio-gamma-ivory-53.vercel.app/

## 概要・特徴

- **モダンなUI/UX**: Tailwind CSSによる統一感のあるデザイン
- **レスポンシブ対応**: PC・タブレット・スマートフォン表示に対応
- **データ管理**: プロフィールや制作実績データを `data/` 配下に集約し、更新・管理しやすい設計

## 使用技術

- **フロントエンド**: Next.js (App Router), TypeScript, Tailwind CSS
- **コード品質**: ESLint, Prettier
- **デプロイ・ホスティング**: Vercel

## 開発環境の起動

### プリレクイジット
- Node.js (v18.x 以上推奨)
- npm / pnpm / yarn


### 手順
GitHubからクローンしたら、依存パッケージのインストールして開発サーバーの起動を行います。
```
cd portfolio-site
npm install
npm run dev
```
`http://localhost:3000`にアクセスして確認します。


## コミット前のチェック
コードの品質保持のため、コミット前に必ず以下のコマンドを実行してください。
```
npm run format
npm run lint
```

# ディレクトリ構成
```
src/
├── app/
│   ├── globals.css          # Tailwind CSS + カスタムCSS変数
│   ├── layout.tsx           # ルートレイアウト（フォント設定・metadata）
│   ├── page.tsx             # トップページ（各セクションコンポーネントを配置）
│   ├── profile/
│   │   └── page.tsx         # プロフィール詳細ページ
│   └── project/
│       └── page.tsx         # プロジェクト一覧・詳細ページ
├── components/
│   ├── AboutPreview.tsx     # トップページ用 About プレビュー
│   ├── CareerTimeline.tsx   # 経歴タイムライン
│   ├── ContactSection.tsx   # お問い合わせセクション
│   ├── Footer.tsx           # フッター
│   ├── Hero.tsx             # メインビジュアル
│   ├── Navigation.tsx       # ナビゲーションバー
│   ├── ProjectCard.tsx      # プロジェクトカード component
│   └── ProjectsPreview.tsx  # トップページ用 Project プレビュー
├── data/
│   ├── profile.ts           # プロフィールデータ
│   └── projects.ts          # プロジェクト情報データ（配列管理）
└── lib/
    └── fonts.ts             # Google Fonts 設定 (next/font/google)
```
