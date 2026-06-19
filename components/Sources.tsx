import { type PostSource } from "@/lib/posts";

/** 出典リスト（一次情報の明示。E-E-A-T／審査対応）。ミニマル・罫線区切り。 */
export function Sources({ sources }: { sources?: PostSource[] }) {
  if (!sources?.length) return null;
  return (
    <section
      aria-labelledby="sources-heading"
      className="not-prose mt-16 border-t border-[var(--hairline)] pt-8"
    >
      <h2 id="sources-heading" className="eyebrow mb-5">
        Sources
      </h2>
      <ul className="space-y-3 text-sm font-light">
        {sources.map((s) => (
          <li key={s.url} className="flex gap-3">
            <span aria-hidden className="text-ink/30">—</span>
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-ink/60 underline decoration-ink/20 underline-offset-4 transition-colors hover:text-brand-dark"
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-xs font-light leading-relaxed text-ink/40">
        ※ 数値・例文などは上記の公開資料・一般的な情報を参考に作成しています（公開時点）。
      </p>
    </section>
  );
}
