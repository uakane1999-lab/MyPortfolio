//ホーム画面のABOUT部分
// src/app/components/AboutPreview.tsx

import Image from 'next/image';
import Link from 'next/link';
import { profile } from '@/data/profile';

export default function AboutPreview() {
  return (
    <section
      id="about"
      className="relative px-6 md:px-12 py-24 h-full"
    >
      <div className="max-w-none">
        {/* mb-16にして、下の本文ブロック終了後〜セクション下端(py-24)の余白と釣り合わせる */}
        <div className="flex items-center justify-center gap-4 mb-36">
          <h2 className="label-sm text-ink">ABOUT ME</h2>
          <span className="w-250 h-px bg-graphite/40" />
        </div>

        {/* ABOUT ME全体（写真・名前・自己紹介文・ボタン）をセクション内で中央寄せにする */}
        <div className="max-w-2xl mx-auto">
          <div className="flex items-start gap-30">
            <div className="relative w-70 h-70 shrink-0 rounded-full overflow-hidden border border-graphite/30">
              <Image src={profile.photoUrl} alt={profile.name} fill className="object-cover" />
            </div>

            {/* 名前・出身・自己紹介文・ボタンを写真右側の同じ列にまとめる */}
            <div className="flex flex-col">
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
                className="label-sm inline-flex items-center gap-3 mt-6 px-6 py-3 border border-graphite text-ink hover:border-ink transition-colors duration-300 self-start"
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