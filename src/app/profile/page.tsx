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
        <section className="px-6 md:px-12 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 justify-center">

            {/* プロフィール写真 */}
            <div className="relative w-full max-w-xs md:w-80 aspect-[3/4] shrink-0 mx-auto md:mx-0">

              {/* 四隅の十字マーク */}
              {[
                '-top-3 -left-3 -translate-x-1/2 -translate-y-1/2',
                '-top-3 -right-3 translate-x-1/2 -translate-y-1/2',
                '-bottom-3 -left-3 -translate-x-1/2 translate-y-1/2',
                '-bottom-3 -right-3 translate-x-1/2 translate-y-1/2',
              ].map((pos) => (
                <span
                  key={pos}
                  className={`absolute ${pos} w-5 h-5 pointer-events-none`}
                  aria-hidden="true"
                >
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

            {/* プロフィール情報 */}
            <div className="text-center md:text-left">

              <p className="font-display text-ink mt-10">
                <span className="font-semibold text-xl">
                  {profile.name}
                </span>

                <span className="ml-2 text-base">
                  {profile.nameEn}
                </span>
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


        {/* ==============================
            CAREER
        ============================== */}
        <section className="relative bg-paper px-6 md:px-12 py-24 mt-24 overflow-hidden">

          {/* 背景画像 */}
          <div
            className="absolute inset-y-0 right-0 w-[45%] pointer-events-none"
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
          <div className="relative flex items-start justify-center gap-4 mb-14">

            <div className="shrink-0">
              <h2 className="label-sm text-ink">
                CAREER
              </h2>

              <p className="font-display text-sm text-[#5B7686] mt-3">
                経歴
              </p>
            </div>

            <span className="w-200 h-px bg-graphite/40 mt-2" />

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
        <section className="relative bg-blueprint text-paper px-6 md:px-12 py-24 overflow-hidden">

          {/* ブループリントグリッド */}
          <div
            className="blueprint-grid absolute inset-0 opacity-[0.08]"
            aria-hidden="true"
          />

          <div className="relative max-w-4xl mx-auto">

            {/* SKILLSタイトル */}
            <div className="flex items-center gap-4 mb-10">

              <h2
                className="label-sm text-paper"
                id="skills"
              >
                SKILLS
              </h2>

              <span className="flex-1 h-px bg-paper/40" />

            </div>


            {/* スキル一覧 */}
            <div className="flex flex-col gap-4">

              {skillGroups.map((group, i) => (
                <p
                  key={i}
                  className="font-display text-paper text-lg"
                >
                  <span className="font-semibold">
                    {skillLabels[i] ?? ''}：
                  </span>

                  <span className="ml-2">
                    {group.join('、')}
                  </span>
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