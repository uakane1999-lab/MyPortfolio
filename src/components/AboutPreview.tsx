// src/app/components/AboutPreview.tsx
//ホーム画面のABOUT部分

import Image from 'next/image';
import Link from 'next/link';
import { profile } from '@/data/profile';

export default function AboutPreview() {
  return (
    <section
      id="about"
      className="relative px-6 md:px-12 pt-0 pb-0 h-full"
    >
      <div className="max-w-none">
        {/* モバイルでは見出し下の余白も少し詰めて、全体の間延びを抑える */}
        <div className="flex items-center justify-center gap-4 mb-16 sm:mb-20 lg:mb-24">
          <h2 className="label-sm text-ink">ABOUT ME</h2>
          <span className="w-200 h-px bg-graphite/40" />
        </div>

        {/* ABOUT ME全体（写真・名前・自己紹介文・ボタン）をセクション内で中央寄せにする */}
        <div className="max-w-2xl mx-auto">
          {/*
            写真とテキストは、幅の狭い画面（sm未満）だと横並び（写真280px＋余白120px）で
            画面幅を超えてしまい、テキストが画面外に押し出されて「表示されない」状態になっていた。
            → smまでは縦積み・中央寄せ、sm以上で横並びに切り替える。
            写真サイズとgapも画面幅に応じて段階的に大きくする。
          */}
          <div className="flex flex-col items-center text-center gap-8 sm:flex-row sm:items-start sm:text-left sm:gap-12 lg:gap-16">
            <div className="relative w-40 h-40 sm:w-56 sm:h-56 lg:w-70 lg:h-70 shrink-0 rounded-full overflow-hidden border border-graphite/30">
              <Image src={profile.photoUrl} alt={profile.name} fill className="object-cover" />
            </div>

            {/* min-w-0を付けて、テキストがコンテナ幅を超えて広がらないようにする */}
            <div className="flex flex-col min-w-0">
              <p className="font-display text-ink">
                <span className="font-semibold text-xl">{profile.name}</span>
                <span className="ml-2 text-base">{profile.nameEn}</span>
              </p>
              <p className="font-display text-ink/70 mt-2 leading-loose">
                {profile.birthPlace}
                <br />
                {profile.birthDate}
              </p>

              <p className="font-display text-ink mt-6 leading-loose">
                {profile.bioShort}
              </p>

              <Link
                href="/profile"
                className="label-sm inline-flex items-center gap-3 mt-6 px-6 py-3 border border-graphite text-ink hover:border-ink transition-colors duration-300 self-center sm:self-start hover:bg-ink hover:text-paper"
              >
                詳しく見る
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}