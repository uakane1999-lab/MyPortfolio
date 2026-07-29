import ArchitectureLineArt from './ArchitectureLineArt';

export default function AboutMe() {
  return (
    <section id="about" className="relative bg-paper-shade px-6 md:px-12 py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="label-sm text-ink">ABOUT ME</h2>
            <span className="flex-1 h-px bg-graphite/30" />
          </div>
          <p className="text-ink leading-loose">
            {/* TODO: ご自身の経歴に合わせて書き換えてください */}
            前職では、施工管理として図面作成・工程管理・協力会社との調整などを担当。
            現場で培った課題解決力とモノづくりへのこだわりを強みに、
            エンジニアとして新たな価値を生み出していきます。
          </p>
        </div>
        <div className="relative">
          <ArchitectureLineArt variant="frame" className="w-full h-auto max-w-md mx-auto opacity-80" />
        </div>
      </div>
    </section>
  );
}