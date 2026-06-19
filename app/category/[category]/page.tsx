import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PostCard } from "@/components/PostCard";
import { categories, getCategory } from "@/lib/categories";
import { getPostsByCategory } from "@/lib/posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export function generateMetadata({ params }: { params: { category: string } }): Metadata {
  const c = getCategory(params.category);
  if (!c) return {};
  return {
    title: `${c.name}の記事一覧`,
    description: c.description,
    alternates: { canonical: `/category/${c.slug}` },
  };
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const c = getCategory(params.category);
  if (!c) notFound();
  const posts = getPostsByCategory(c.slug);

  return (
    <Container className="py-10">
      <Breadcrumb
        crumbs={[
          { name: "ホーム", url: "/" },
          { name: c.name, url: `/category/${c.slug}` },
        ]}
      />

      {/* ミニマルなカテゴリヘッダー：罫線下のビッグタイポのみ */}
      <header className="mt-10 border-b border-[var(--hairline)] pb-10">
        <p className="eyebrow mb-5">Category</p>
        <h1 className="font-display text-3xl font-light leading-tight tracking-tight text-ink sm:text-4xl">
          {c.name}
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] font-light leading-loose text-ink/55">
          {c.description}
        </p>
        <p className="mt-5 text-xs font-light tracking-wide text-ink/40">{posts.length}記事</p>
      </header>

      {posts.length ? (
        <div className="grid gap-x-10 gap-y-14 pt-14 sm:grid-cols-2">
          {posts.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      ) : (
        <p className="py-20 text-center text-sm font-light text-ink/40">
          この カテゴリの記事は準備中です。
        </p>
      )}
    </Container>
  );
}
