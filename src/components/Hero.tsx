// src/app/components/Hero.tsx
//ホーム画面のヒーローセクション

'use client';

const sideLabels = ['Concept', 'Planning', 'Structure', 'Design', 'Build', '</>'];

export default function Hero() {
  return (
    <section
      id="home"
      // min-h-screenだとテキスト量に関わらず画面高さ分の余白が必ず生まれ、
      // 特にスマホではABOUT MEまでの間隔が間延びして見えるため、
      // lg未満は画面高さの85%程度に抑え、lg以上で従来通りフル画面に戻す。
      // pb-16もモバイルでは詰める。
      className="relative flex min-h-[85vh] items-center overflow-hidden px-6 pt-24 pb-8 sm:pb-12 md:px-12 lg:min-h-screen lg:pb-16"
    >
      {/*
        背景画像はレイアウトが1カラムかどうかで扱いを分ける。
        lg未満（1カラムでテキストと重なる）は、大きめサイズ＋低めの不透明度にして
        雰囲気だけ伝わるようにし、テキストの可読性を確保する。
      */}
      <div
        className="absolute inset-0 bg-no-repeat opacity-25 lg:hidden"
        style={{
          backgroundImage: "url('/background.png')",
          backgroundSize: '140% auto',
          backgroundPosition: 'center top',
        }}
        aria-hidden="true"
      />

      {/* lg以上（2カラムでテキストは左2/5のみ）は元のデザイン通り、右寄せ・フル不透明度 */}
      <div
        className="absolute inset-0 hidden bg-no-repeat lg:block"
        style={{
          backgroundImage: "url('/background.png')",
          backgroundSize: '80% auto',
          backgroundPosition: 'right center',
        }}
        aria-hidden="true"
      />

      <div className="blueprint-grid absolute inset-0" aria-hidden="true" />

      <div className="vertical-text label-sm text-graphite absolute top-1/2 left-4 hidden -translate-y-1/2 gap-6 lg:flex">
        <span>Design the structure</span>
        <span>Build the future.</span>
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl items-center">
        <div className="w-full lg:w-2/5 lg:pl-8">
          {/*
            見出しは1行ずつ改行させたいが、幅の狭い端末（iPhone SEなど320px前後）では
            nowrapのままだと文字がはみ出す可能性があるため、
            sm未満ではwhitespace-normalで折り返しを許可し、sm以上でnowrapに切り替える。
          */}
          <h1 className="font-display text-ink text-xl leading-snug sm:text-3xl sm:leading-relaxed md:text-4xl lg:text-5xl">
            <span className="block whitespace-normal sm:whitespace-nowrap">
              構造を描く人間から、
            </span>
            <span className="block whitespace-normal sm:whitespace-nowrap">
              仕組みを創るエンジニアへ。
            </span>
          </h1>
          <p className="mt-4 text-sm leading-loose text-[#5B7686] sm:mt-6 sm:text-base">
            建築で培った「設計力」「課題解決力」「チームで創る力」を活かし、
            <br className="hidden sm:block" />
            ユーザーに価値を届けるWebサービスを開発します。
          </p>
        </div>

        <div className="label-sm text-graphite absolute top-1/2 right-0 hidden -translate-y-1/2 flex-col gap-6 xl:flex">
          {sideLabels.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
