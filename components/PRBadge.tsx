/**
 * PR表記バッジ。アフィ/広告を含む記事の冒頭・リンク周辺に明示する（ステマ規制・ASP規約対応）。
 * variant="banner" は記事冒頭の帯、variant="inline" はリンク周辺の小バッジ。
 */
export function PRBadge({ variant = "inline" }: { variant?: "inline" | "banner" }) {
  if (variant === "banner") {
    return (
      <div className="not-prose my-5 flex items-center gap-2.5 rounded-lg border border-amber-200 bg-amber-50/70 px-4 py-2.5 text-sm font-light text-amber-800">
        <span className="inline-flex items-center rounded-full bg-amber-400 px-2.5 py-0.5 text-xs font-semibold text-white">
          PR
        </span>
        <span>
          この記事は<strong className="font-medium">アフィリエイト広告（プロモーション）</strong>を含みます。
        </span>
      </div>
    );
  }
  return (
    <span
      className="inline-flex items-center rounded-full bg-amber-400 px-2 py-0.5 align-middle text-[10px] font-semibold text-white"
      aria-label="広告（PR）"
    >
      PR
    </span>
  );
}
