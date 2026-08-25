//プロフィールページの全体
// src/app/profile/page.tsx

import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CareerTimeline from '@/components/CareerTimeline';
import { profile, skillGroups } from '@/data/profile';

// SKILLSのカテゴリラベル（skillGroupsの並び順に対応。順番が変わる場合はここも要調整）
const skillLabels = ['FRONTEND', 'BACKEND', 'OTHERS'];

export default function ProfilePage() {
  return (
    <>
      <Navigation />
      {/* 修正: pb-24 を削除、または小さく（pb-0など）してセクション側のパディングに任せる */}
      <main className="pt-32 pb-0">
        {/* プロフィール */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto">
          {/* justify-centerで写真+文章のグループ全体をセクション内で中央寄せに */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 justify-center">
            <div className="relative w-full max-w-xs md:w-80 aspect-[3/4] shrink-0 mx-auto md:mx-0">
                {/* 四隅の十字マーク（Figmaデザイン準拠：角の位置に十字が重なる形） */}
              {[
                '-top-3 -left-3 -translate-x-1/2 -translate-y-1/2',
                '-top-3 -right-3 translate-x-1/2 -translate-y-1/2',
                '-bottom-3 -left-3 -translate-x-1/2 translate-y-1/2',
                '-bottom-3 -right-3 translate-x-1/2 translate-y-1/2',
              ].map((pos) => (
                <span key={pos} className={`absolute ${pos} w-5 h-5 pointer-events-none`} aria-hidden="true">
                  <span className="absolute top-1/2 left-0 w-full h-px bg-graphite/50 -translate-y-1/2" />
                  <span className="absolute left-1/2 top-0 h-full w-px bg-graphite/50 -translate-x-1/2" />
                </span>
              ))}

              <Image
                src={profile.photoUrl}
                alt={profile.name}
                fill
                className="object-cover border border-graphite/30"
              />
            </div>

            <div className="text-center md:text-left">
              <p className="font-display text-ink mt-10">
                <span className="font-semibold text-xl">{profile.name}</span>
                <span className="ml-2 text-base">{profile.nameEn}</span>
              </p>
              <p className="font-display text-ink/70 mt-10 leading-loose">
                {profile.birthPlace}
                <br />
                {profile.birthDate}
              </p>
              <p className="font-display text-ink mt-10 leading-loose max-w-xl">
                {profile.bioShort}
              </p>
            </div>
          </div>
        </section>

        {/* CAREER: bg-paperに変更（bg-paper-shadeから、ベースと同じ白系トーンへ） */}
        <section className="bg-paper px-6 md:px-12 py-24 mt-24">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-14">
              <h2 className="label-sm text-ink">CAREER</h2>
              <span className="flex-1 h-px bg-graphite/40" />
            </div>
            <CareerTimeline />
          </div>
        </section>

        {/* SKILLS: 濃いブルー系の背景 + ブループリントグリッド + ラベル付きカテゴリ表示 */}
        {/* 修正: py-24 を維持しつつ、一番最後のセクションとして Footer と綺麗につながるようにする */}
        <section className="relative bg-blueprint text-paper px-6 md:px-12 py-24 overflow-hidden">
          <div className="blueprint-grid absolute inset-0 opacity-[0.08]" aria-hidden="true" />

          <div className="relative max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <h2 className="label-sm text-paper" id="skills">SKILLS</h2>
              <span className="flex-1 h-px bg-paper/40" />
            </div>
            <div className="flex flex-col gap-4">
              {skillGroups.map((group, i) => (
                <p key={i} className="font-display text-paper text-lg">
                  <span className="font-semibold">{skillLabels[i] ?? ''}：</span>
                  <span className="ml-2">{group.join('、')}</span>
                </p>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}