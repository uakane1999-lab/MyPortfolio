// src/app/components/CareerTimeline.tsx
//ABOUT部分の経歴部分

import { career, NoteLine } from '@/data/profile';

export default function CareerTimeline() {
  return (
    <div className="relative border-l border-graphite/30 ml-3 md:ml-4 space-y-12">
      {career.map((item, index) => (
        <div key={index} className="relative pl-6 md:pl-8">
          {/* タイムラインのドット */}
          <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-graphite border border-paper" />

          {/* 日付 */}
          <time className="font-display text-sm text-ink/60 font-medium">
            {item.date}
          </time>

          {/* タイトル */}
          <h3 className="font-display text-lg text-ink font-semibold mt-1">
            {item.title}
          </h3>

          {/* 説明文 */}
          {item.description && item.description.length > 0 && (
            <div className="mt-2 space-y-1">
              {item.description.map((desc, i) => (
                <p key={i} className="font-display text-sm text-ink/80 leading-relaxed">
                  {desc}
                </p>
              ))}
            </div>
          )}

          {/* 補足・注記（卒業制作や業務内容） */}
          {item.note && (
            <div className="mt-4 p-4 bg-paper/50 rounded border border-graphite/10">
              <span className="block text-xs font-semibold text-ink/60 mb-2">
                {item.note.label}
              </span>
              <ul className="space-y-1.5">
                {item.note.lines.map((line: NoteLine, i: number) => (
                  <li key={i} className="font-display text-sm text-ink/90">
                    {typeof line === 'string' ? (
                      <span>{line}</span>
                    ) : (
                      <a
                        href={line.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 underline hover:opacity-70 transition-opacity text-ink font-medium"
                      >
                        <span>{line.text}</span>
                        <span className="text-xs text-ink/60">↗</span>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}