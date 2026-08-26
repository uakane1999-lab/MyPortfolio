// src/app/components/AboutPreview.tsx
//ホーム画面のABOUT部分

import Image from 'next/image';
import Link from 'next/link';
import { profile } from '@/data/profile';

export default function AboutPreview() {
  return (
    <section id="about" className="relative h-full px-6 pt-0 pb-0 md:px-12">
      <div className="max-w-none">
        {/* モバイルでは見出し下の余白も少し詰めて、全体の間延びを抑える */}
        <div className="mb-16 flex items-center justify-center gap-4 sm:mb-20 lg:mb-24">
          <h2 className="label-sm text-ink">ABOUT ME</h2>
          <span className="bg-graphite/40 h-px w-200" />
        </div>

        {/* ABOUT ME全体（写真・名前・自己紹介文・ボタン）をセクション内で中央寄せにする */}
        <div className="mx-auto max-w-2xl">
          {/*
            写真とテキストは、幅の狭い画面（sm未満）だと横並び（写真280px＋余白120px）で
            画面幅を超えてしまい、テキストが画面外に押し出されて「表示されない」状態になっていた。
            → smまでは縦積み・中央寄せ、sm以上で横並びに切り替える。
            写真サイズとgapも画面幅に応じて段階的に大きくする。
          */}
          <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:gap-12 sm:text-left lg:gap-16">
            <div className="border-graphite/30 relative h-40 w-40 shrink-0 overflow-hidden rounded-full border sm:h-56 sm:w-56 lg:h-70 lg:w-70">
              <Image src={profile.photoUrl} alt={profile.name} fill className="object-cover" />
            </div>

            {/* min-w-0を付けて、テキストがコンテナ幅を超えて広がらないようにする */}
            <div className="flex min-w-0 flex-col">
              <p className="font-display text-ink">
                <span className="text-xl font-semibold">{profile.name}</span>
                <span className="ml-2 text-base">{profile.nameEn}</span>
              </p>
              <p className="font-display text-ink/70 mt-2 leading-loose">
                {profile.birthPlace}
                <br />
                {profile.birthDate}
              </p>

              <p className="font-display text-ink mt-6 leading-loose">{profile.bioShort}</p>

              <Link
                href="/profile"
                className="label-sm border-graphite text-ink hover:border-ink hover:bg-ink hover:text-paper mt-6 inline-flex items-center gap-3 self-center border px-6 py-3 transition-colors duration-300 sm:self-start"
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
