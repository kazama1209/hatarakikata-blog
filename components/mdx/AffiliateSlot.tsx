import { PRBadge } from "../PRBadge";

/**
 * 転職アフィのリンク置き場。提携承認前は「リンク枠だけ」を用意する（spec準拠）。
 * 提携後は env もしくはこのコンポーネントを編集して実リンクに差し替える。
 * MDXから <AffiliateSlot service="自分に合う転職エージェント" /> で使う。
 */
export function AffiliateSlot({
  service = "自分に合う転職エージェント",
  note,
}: {
  service?: string;
  note?: string;
}) {
  return (
    <div className="not-prose my-10 border-y border-[var(--hairline)] bg-brand-light/20 px-6 py-7">
      <div className="mb-3 flex items-center gap-2.5">
        <PRBadge />
        <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-brand-dark/80">
          広告枠（提携準備中）
        </span>
      </div>
      <p className="mb-2 text-base font-normal text-ink">
        {service}を探している方へ
      </p>
      <p className="mb-5 text-sm font-light leading-loose text-ink/60">
        {note ??
          "合う求人や働き方は人それぞれ。気になる方は無料の転職サービスをいくつか比較して、自分に合うものを選ぶのがおすすめです。"}
        <br />
        <span className="text-xs text-ink/40">
          ※ 具体的なサービスの紹介リンクは、提携承認後にこちらに掲載します。
        </span>
      </p>
      <span
        className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-md border border-brand/30 px-6 py-2.5 text-sm font-normal tracking-wide text-brand-dark/60 opacity-80"
        aria-disabled
      >
        おすすめの転職サービスはこちら（準備中）
      </span>
    </div>
  );
}
