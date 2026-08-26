// src/app/components/CareerTimeline.tsx
//プロフィールの部分の経歴部分

import { career, NoteLine } from '@/data/profile';

export default function CareerTimeline() {
  return (
    <div className="relative">
      {/* タイムラインの縦線 */}
      <div
        className="absolute left-[88px] md:left-[104px] top-0 bottom-0 w-px bg-graphite/30"
        aria-hidden="true"
      />

      {career.map((item, index) => (
        <div
          key={index}
          className="relative grid grid-cols-[72px_32px_1fr] md:grid-cols-[88px_32px_1fr] gap-0 pb-12 last:pb-0"
        >
          {/* 日付 */}
          <div className="pt-0 text-right pr-3">
            <time className="font-display text-sm text-[#5B7686] font-medium whitespace-nowrap">
              {item.date}
            </time>
          </div>

          {/* タイムライン */}
          <div className="relative">
            <span className="absolute left-1/2 top-1.5 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-paper border border-graphite/50" />
          </div>

          {/* 内容 */}
          <div className="pl-4 md:pl-5">
            {/* タイトル */}
            <h3 className="font-display text-lg text-ink font-semibold">
              {item.title}
            </h3>

            {/* 説明文 */}
            {item.description && item.description.length > 0 && (
              <div className="mt-2 space-y-1">
                {item.description.map((desc, i) => (
                  <p
                    key={i}
                    className="font-display text-sm text-ink/80 leading-relaxed"
                  >
                    {desc}
                  </p>
                ))}
              </div>
            )}

            {/* 補足・注記 */}
            {item.note && (
              <div className="mt-4 inline-block max-w-full p-3 md:p-4 bg-paper/70 border border-[#5B7686]/50 rounded-sm">
                <span className="block text-xs font-semibold text-ink/70 mb-2">
                  【{item.note.label}】
                </span>

                <ul className="space-y-1">
                  {item.note.lines.map((line: NoteLine, i: number) => (
                    <li
                      key={i}
                      className="font-display text-sm text-ink/90 leading-relaxed"
                    >
                      
                    {typeof line === 'string' ? (
                      line.includes('ENKATSU') ? (
                        <a
                          href="/project"
                          className="
                            underline
                            underline-offset-2
                            hover:opacity-70
                            transition-opacity
                            text-ink
                            font-medium
                          "
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
                        className="
                          underline
                          underline-offset-2
                          hover:opacity-70
                          transition-opacity
                          text-ink
                          font-medium
                        "
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