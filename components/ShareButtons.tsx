import { absoluteUrl, siteConfig } from "@/lib/site";

/** SNSシェアボタン（X / LINE / コピー用URL表示）。サーバーコンポーネントで完結させるためリンクのみ。 */
export function ShareButtons({ slug, title }: { slug: string; title: string }) {
  const url = absoluteUrl(`/blog/${slug}`);
  const text = encodeURIComponent(`${title}｜${siteConfig.name}`);
  const enc = encodeURIComponent(url);
  return (
    <div className="not-prose mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-[var(--hairline)] pt-7">
      <span className="eyebrow">Share</span>
      <a
        href={`https://twitter.com/intent/tweet?text=${text}&url=${enc}`}
        target="_blank"
        rel="noopener noreferrer"
        className="nav-underline text-sm"
      >
        Xでシェア
      </a>
      <a
        href={`https://social-plugins.line.me/lineit/share?url=${enc}`}
        target="_blank"
        rel="noopener noreferrer"
        className="nav-underline text-sm"
      >
        LINEで送る
      </a>
    </div>
  );
}
