// src/app/components/ContactSection.tsx
//ホーム画面のコンタクト部分

import Image from 'next/image';

export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-blueprint text-paper px-6 md:px-12 pt-16 pb-10 overflow-hidden">
      <div className="blueprint-grid absolute inset-0 opacity-[0.08]" aria-hidden="true" />

      {/* コンテンツ全体を統一した幅（max-w-4xl）で囲み、左端を揃える */}
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* CONTACT 見出し部分: justify-center を外し、左揃え（justify-start）に変更 */}
        <div className="flex items-center justify-start gap-4 mb-16">
          <h2 className="label-sm text-paper shrink-0">CONTACT</h2>
          <span className="flex-1 h-px bg-paper/40" />
        </div>

        {/* テキスト部分 */}
        <p className="font-display text-paper leading-loose">
          お問い合わせはこちらからお気軽にご連絡ください
        </p>

        {/* ボタンおよび画像エリア */}
        <div className="relative mt-10 flex items-end justify-between">
          <a
            href="mailto:uakane1999@gmail.com"
            className="label-sm inline-flex items-center gap-10 border border-paper px-6 py-3 hover:bg-paper hover:text-blueprint transition-colors"
          >
            お問い合わせ
            <span aria-hidden="true">→</span>
          </a>

          <div className="hidden md:block -rotate-[4.6deg]">
            <Image
              src="/thank-you.png"
              alt="Thank you!"
              width={200}
              height={65}
              className="w-auto h-16 object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}