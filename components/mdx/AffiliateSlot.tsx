import { PRBadge } from "../PRBadge";

/**
 * 転職アフィのリンク置き場。提携承認前は「リンク枠だけ」を用意する（spec準拠）。
 * 提携後は env もしくはこのコンポーネントを編集して実リンクに差し替える。
 * MDXから <AffiliateSlot service="20代・未経験向けの転職エージェント" /> で使う。
 */
export function AffiliateSlot({
  service = "20代・未経験向けの転職エージェント",
  note,
}: {
  service?: string;
  note?: string;
}) {
  return (
    <div className="not-prose my-7 overflow-hidden rounded-2xl border border-brand/30 bg-gradient-to-br from-brand-light to-amber-50 p-5 sm:p-6">
      <div className="mb-2 flex items-center gap-2">
        <PRBadge />
        <span className="text-xs font-semibold text-brand-dark">広告枠（提携準備中）</span>
      </div>
      <p className="mb-1 text-base font-bold text-ink">
        {service}を探している方へ
      </p>
      <p className="mb-4 text-sm leading-relaxed text-gray-600">
        {note ??
          "合う求人や働き方は人それぞれ。気になる方は無料の転職サービスをいくつか比較して、自分に合うものを選ぶのがおすすめです。"}
        <br />
        <span className="text-xs text-gray-400">
          ※ 具体的なサービスの紹介リンクは、提携承認後にこちらに掲載します。
        </span>
      </p>
      <span
        className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-full bg-brand/40 px-6 py-3 font-bold text-white opacity-80"
        aria-disabled
      >
        おすすめの転職サービスはこちら（準備中）
      </span>
    </div>
  );
}
