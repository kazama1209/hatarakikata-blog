import { type PostMeta } from "@/lib/posts";
import { PostCard } from "./PostCard";

/** 記事下部の関連記事（内部リンク回遊：実務→悩み→転職）。 */
export function RelatedPosts({ posts }: { posts: PostMeta[] }) {
  if (!posts.length) return null;
  return (
    <section aria-labelledby="related-heading" className="not-prose mt-20 border-t border-[var(--hairline)] pt-14">
      <p id="related-heading" className="eyebrow mb-10">
        Related
      </p>
      <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <PostCard key={p.slug} post={p} />
        ))}
      </div>
    </section>
  );
}
