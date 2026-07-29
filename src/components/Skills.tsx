import { skills } from '@/data/skills';

export default function Skills() {
  return (
    <section id="skills" className="bg-paper px-6 md:px-12 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="label-sm text-ink">SKILLS</h2>
          <span className="flex-1 h-px bg-graphite/30" />
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center gap-3 text-center">
              <div className="w-14 h-14 flex items-center justify-center border border-graphite/30 text-ink font-display text-lg">
                {skill.symbol}
              </div>
              <span className="label-sm text-graphite text-[10px]">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}