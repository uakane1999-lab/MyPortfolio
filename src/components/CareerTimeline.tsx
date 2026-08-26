// src/app/components/CareerTimeline.tsx
//プロフィールの部分の経歴部分

import { career, NoteLine } from '@/data/profile';

export default function CareerTimeline() {
  return (
    <div className="relative">
      {/* タイムラインの縦線 */}
      <div
        className="bg-graphite/30 absolute top-0 bottom-0 left-[88px] w-px md:left-[104px]"
        aria-hidden="true"
      />

      {career.map((item, index) => (
        <div
          key={index}
          className="relative grid grid-cols-[72px_32px_1fr] gap-0 pb-12 last:pb-0 md:grid-cols-[88px_32px_1fr]"
        >
          {/* 日付 */}
          <div className="pt-0 pr-3 text-right">
            <time className="font-display text-sm font-medium whitespace-nowrap text-[#5B7686]">
              {item.date}
            </time>
          </div>

          {/* タイムライン */}
          <div className="relative">
            <span className="bg-paper border-graphite/50 absolute top-1.5 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full border" />
          </div>

          {/* 内容 */}
          <div className="pl-4 md:pl-5">
            {/* タイトル */}
            <h3 className="font-display text-ink text-lg font-semibold">{item.title}</h3>

            {/* 説明文 */}
            {item.description && item.description.length > 0 && (
              <div className="mt-2 space-y-1">
                {item.description.map((desc, i) => (
                  <p key={i} className="font-display text-ink/80 text-sm leading-relaxed">
                    {desc}
                  </p>
                ))}
              </div>
            )}

            {/* 補足・注記 */}
            {item.note && (
              <div className="bg-paper/70 mt-4 inline-block max-w-full rounded-sm border border-[#5B7686]/50 p-3 md:p-4">
                <span className="text-ink/70 mb-2 block text-xs font-semibold">
                  【{item.note.label}】
                </span>

                <ul className="space-y-1">
                  {item.note.lines.map((line: NoteLine, i: number) => (
                    <li key={i} className="font-display text-ink/90 text-sm leading-relaxed">
                      {typeof line === 'string' ? (
                        line.includes('ENKATSU') ? (
                          <a
                            href="/project"
                            className="text-ink font-medium underline underline-offset-2 transition-opacity hover:opacity-70"
                          >
                            {line}
                          </a>
                        ) : (
                          <span>{line}</span>
                        )
                      ) : (
                        <a
                          href={line.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-ink font-medium underline underline-offset-2 transition-opacity hover:opacity-70"
                        >
                          {line.text}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
