// src/app/components/ContactSection.tsx
//ホーム画面のコンタクト部分

import Image from 'next/image';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-blueprint text-paper relative overflow-hidden px-6 pt-16 pb-10 md:px-12"
    >
      <div className="blueprint-grid absolute inset-0 opacity-[0.08]" aria-hidden="true" />

      {/* コンテンツ全体を統一した幅（max-w-4xl）で囲み、左端を揃える */}
      <div className="relative z-10 mx-auto max-w-4xl">
        {/* CONTACT 見出し部分: justify-center を外し、左揃え（justify-start）に変更 */}
        <div className="mb-16 flex items-center justify-start gap-4">
          <h2 className="label-sm text-paper shrink-0">CONTACT</h2>
          <span className="bg-paper/40 h-px flex-1" />
        </div>

        {/* テキスト部分 */}
        <p className="font-display text-paper leading-loose">
          お問い合わせはこちらからお気軽にご連絡ください
        </p>

        {/* ボタンおよび画像エリア */}
        <div className="relative mt-10 flex items-end justify-between">
          <a
            href="mailto:uakane1999@gmail.com"
            className="label-sm border-paper hover:bg-paper hover:text-blueprint inline-flex items-center gap-10 border px-6 py-3 transition-colors"
          >
            お問い合わせ
            <span aria-hidden="true">→</span>
          </a>

          <div className="hidden -rotate-[4.6deg] md:block">
            <Image
              src="/thank-you.png"
              alt="Thank you!"
              width={200}
              height={65}
              className="h-16 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
