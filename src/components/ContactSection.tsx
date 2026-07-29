export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-blueprint text-paper px-6 md:px-12 py-20 overflow-hidden">
      <div className="blueprint-grid absolute inset-0 opacity-[0.08]" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div>
          <p className="font-display text-xl md:text-2xl">「図面を描くように、コードで未来を設計する。」</p>
          <p className="font-accent text-3xl mt-4 text-paper/80">Thank you!</p>
        </div>
        <div className="text-center md:text-right">
          <h2 className="label-sm mb-4">CONTACT</h2>
          <p className="text-paper/80 leading-loose mb-6">
            ご連絡はメールにて
            <br />
            お気軽にご連絡ください。
          </p>
          
            <a href="mailto:your-email@example.com"
            className="label-sm inline-flex items-center gap-3 border-b border-paper/50 pb-1 hover:border-paper transition-colors"
          >
            お問い合わせはこちら
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}