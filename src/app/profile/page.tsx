// プロフィールページの全体
// src/app/profile/page.tsx

import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CareerTimeline from '@/components/CareerTimeline';
import { profile, skillGroups } from '@/data/profile';

// SKILLSのカテゴリラベル
// skillGroupsの並び順に対応
const skillLabels = ['FRONTEND', 'BACKEND', 'OTHERS'];

export default function ProfilePage() {
  return (
    <>
      <Navigation />

      <main className="pt-32 pb-0">
        {/* ==============================
            PROFILE
        ============================== */}
        <section className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex flex-col justify-center gap-10 md:flex-row md:gap-16">
            {/* プロフィール写真 */}
            <div className="relative mx-auto aspect-[3/4] w-full max-w-xs shrink-0 md:mx-0 md:w-80">
              {/* 四隅の十字マーク */}
              {[
                '-top-3 -left-3 -translate-x-1/2 -translate-y-1/2',
                '-top-3 -right-3 translate-x-1/2 -translate-y-1/2',
                '-bottom-3 -left-3 -translate-x-1/2 translate-y-1/2',
                '-bottom-3 -right-3 translate-x-1/2 translate-y-1/2',
              ].map((pos) => (
                <span
                  key={pos}
                  className={`absolute ${pos} pointer-events-none h-5 w-5`}
                  aria-hidden="true"
                >
                  <span className="bg-graphite/50 absolute top-1/2 left-0 h-px w-full -translate-y-1/2" />
                  <span className="bg-graphite/50 absolute top-0 left-1/2 h-full w-px -translate-x-1/2" />
                </span>
              ))}

              <Image
                src={profile.photoUrl}
                alt={profile.name}
                fill
                className="border-graphite/30 border object-cover"
              />
            </div>

            {/* プロフィール情報 */}
            <div className="text-center md:text-left">
              <p className="font-display text-ink mt-10">
                <span className="text-xl font-semibold">{profile.name}</span>

                <span className="ml-2 text-base">{profile.nameEn}</span>
              </p>

              <p className="font-display text-ink/70 mt-10 leading-loose">
                {profile.birthPlace}
                <br />
                {profile.birthDate}
              </p>

              <p className="font-display text-ink mt-10 max-w-xl leading-loose">
                {profile.bioShort}
              </p>
            </div>
          </div>
        </section>

        {/* ==============================
            CAREER
        ============================== */}
        <section className="bg-paper relative mt-24 overflow-hidden px-6 py-24 md:px-12">
          {/* 背景画像 */}
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-[45%]"
            aria-hidden="true"
          >
            <Image
              src="/background3.png"
              alt=""
              fill
              className="object-contain object-right opacity-[0.22]"
            />
          </div>

          {/* CAREERタイトル */}
          <div className="relative mb-14 flex items-start justify-center gap-4">
            <div className="shrink-0">
              <h2 className="label-sm text-ink">CAREER</h2>

              <p className="font-display mt-3 text-sm text-[#5B7686]">経歴</p>
            </div>

            <span className="bg-graphite/40 mt-2 h-px w-200" />
          </div>

          {/* 経歴タイムライン */}
          <div className="relative flex justify-center">
            {/*
              -translate-x-30（-120px）は画面幅に関わらず常時かかっていたため、
              lg未満（余白が少ない画面）だとタイムラインが左にはみ出し、
              セクションのoverflow-hiddenによって縦線・日付列が切り取られていた。
              → lg未満は解除し、余白に余裕のあるlg以上でのみ適用する。
            */}
            <div className="w-full max-w-2xl lg:-translate-x-30">
              <CareerTimeline />
            </div>
          </div>
        </section>

        {/* ==============================
            SKILLS
        ============================== */}
        <section className="bg-blueprint text-paper relative overflow-hidden px-6 py-24 md:px-12">
          {/* ブループリントグリッド */}
          <div className="blueprint-grid absolute inset-0 opacity-[0.08]" aria-hidden="true" />

          <div className="relative mx-auto max-w-4xl">
            {/* SKILLSタイトル */}
            <div className="mb-10 flex items-center gap-4">
              <h2 className="label-sm text-paper" id="skills">
                SKILLS
              </h2>

              <span className="bg-paper/40 h-px flex-1" />
            </div>

            {/* スキル一覧 */}
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
