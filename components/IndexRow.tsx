import Link from "next/link";

/**
 * テキスト索引の1行（罫線区切りの一覧用）。
 * ミニマル・エアリーのカテゴリ索引・控えめCTAで使う。
 */
export function IndexRow({
  href,
  label,
  description,
  meta,
}: {
  href: string;
  label: string;
  description?: string;
  meta?: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-baseline gap-5 border-b border-[var(--hairline)] py-5 transition-colors first:border-t hover:bg-brand-light/20"
    >
      <span className="flex-1">
        <span className="text-[17px] font-normal tracking-wide text-ink transition-colors group-hover:text-brand-dark">
          {label}
        </span>
        {description && (
          <span className="mt-1 block max-w-2xl text-sm font-light leading-relaxed text-ink/50">
            {description}
          </span>
        )}
      </span>
      {meta && (
        <span className="shrink-0 text-xs font-light tracking-wide text-ink/40">{meta}</span>
      )}
      <span
        aria-hidden
        className="shrink-0 translate-x-0 text-ink/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-brand"
      >
        →
      </span>
    </Link>
  );
}
