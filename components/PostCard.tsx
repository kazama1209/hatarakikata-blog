import Link from "next/link";
import { type PostMeta } from "@/lib/posts";
import { PRBadge } from "./PRBadge";
import { CoverImage } from "./CoverImage";
import { getCategory } from "@/lib/categories";
import { formatDateJa, toDateOnly } from "@/lib/format";

/**
 * 記事カード（ボーダーレス・キャプション型）。
 * 角丸画像＋その下にカテゴリ小ラベル・タイトル・日付。枠線/影なし。
 */
export function PostCard({ post }: { post: PostMeta }) {
  const cat = getCategory(post.category);
  return (
    <article className="group">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative overflow-hidden rounded-xl">
          <div className="transition-transform duration-700 group-hover:scale-[1.03]">
            <CoverImage slug={post.slug} category={post.category} showLabel={false} />
          </div>
          {post.isPR && (
            <span className="absolute right-3 top-3">
              <PRBadge />
            </span>
          )}
        </div>
        <div className="px-1 pt-4">
          <div className="flex items-center gap-2.5 text-[11px] uppercase tracking-[0.18em] text-brand-dark/70">
            {cat && <span>{cat.shortName}</span>}
            <span aria-hidden className="text-ink/20">/</span>
            <time dateTime={toDateOnly(post.date)} className="font-light normal-case tracking-normal text-ink/45">
              {formatDateJa(post.date)}
            </time>
          </div>
          <h3 className="mt-2 text-[17px] font-normal leading-relaxed text-ink transition-colors group-hover:text-brand-dark">
            {post.title}
          </h3>
          <p className="mt-1.5 line-clamp-2 text-sm font-light leading-relaxed text-ink/55">
            {post.description}
          </p>
        </div>
      </Link>
    </article>
  );
}
