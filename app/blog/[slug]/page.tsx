import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CategoryPill } from "@/components/CategoryPill";
import { PRBadge } from "@/components/PRBadge";
import { MdxContent } from "@/components/mdx/MdxContent";
import { Sources } from "@/components/Sources";
import { RelatedPosts } from "@/components/RelatedPosts";
import { ShareButtons } from "@/components/ShareButtons";
import { CoverImage } from "@/components/CoverImage";
import { getPhoto } from "@/lib/photos";
import { JsonLd } from "@/components/JsonLd";
import { getAllSlugs, getPostBySlug, getRelatedPosts, getAllPostMeta } from "@/lib/posts";
import { getCategory } from "@/lib/categories";
import { articleJsonLd } from "@/lib/jsonld";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { formatDateJa, toDateOnly } from "@/lib/format";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  const fm = post.frontmatter;
  const url = `/blog/${fm.slug}`;
  const ogImage = fm.ogImage ?? getPhoto(fm.slug)?.src ?? siteConfig.defaultOgImage;
  return {
    title: fm.title,
    description: fm.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url: absoluteUrl(url),
      title: fm.title,
      description: fm.description,
      publishedTime: fm.date,
      modifiedTime: fm.updated ?? fm.date,
      images: [{ url: ogImage, width: 1200, height: 630, alt: fm.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: fm.title,
      description: fm.description,
      images: [ogImage],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const fm = post.frontmatter;
  const category = getCategory(fm.category);
  const meta = getAllPostMeta().find((p) => p.slug === fm.slug)!;
  meta.ogImage = meta.ogImage ?? getPhoto(fm.slug)?.src ?? siteConfig.defaultOgImage;
  const related = getRelatedPosts(fm.slug, 3);

  const crumbs = [
    { name: "ホーム", url: "/" },
    ...(category ? [{ name: category.name, url: `/category/${category.slug}` }] : []),
    { name: fm.title, url: `/blog/${fm.slug}` },
  ];

  return (
    <article>
      <JsonLd data={articleJsonLd(meta)} />

      <Container size="prose" className="pt-6">
        <Breadcrumb crumbs={crumbs} />
      </Container>

      {/* 記事ヘッダー：狭い版面・装飾なし */}
      <Container size="prose" className="pt-8">
        <header className="not-prose">
          <div className="mb-5 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-brand-dark/70">
            <CategoryPill category={fm.category} />
            {fm.isPR && <PRBadge />}
          </div>
          <h1 className="font-display text-[26px] font-light leading-[1.5] tracking-tight text-ink sm:text-[32px]">
            {fm.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-light tracking-wide text-ink/40">
            <time dateTime={toDateOnly(fm.date)}>公開 {formatDateJa(fm.date)}</time>
            {fm.updated && fm.updated !== fm.date && (
              <time dateTime={toDateOnly(fm.updated)}>更新 {formatDateJa(fm.updated)}</time>
            )}
            <span>約{post.readingMinutes}分</span>
          </div>
          {/* リード段落（ボックス廃止） */}
          <p className="mt-7 border-l border-brand/40 pl-5 text-[15px] font-light leading-loose text-ink/65">
            {fm.description}
          </p>
        </header>

        {/* ヒーローカバー画像（記事ごとに固有） */}
        <div className="not-prose mt-8 overflow-hidden rounded-xl">
          <CoverImage slug={fm.slug} category={fm.category} variant="hero" showLabel={false} priority />
        </div>
        {(() => {
          const photo = getPhoto(fm.slug);
          if (!photo) return null;
          // AI生成画像は帰属表示不要のためクレジット行を出さない
          if (photo.source !== "Pexels") return null;
          return (
            <p className="not-prose mt-1.5 text-right text-[11px] text-gray-400">
              Photo:{" "}
              <a href={photo.photographerUrl} target="_blank" rel="noopener noreferrer nofollow" className="hover:text-brand">
                {photo.photographer}
              </a>{" "}
              /{" "}
              <a href="https://www.pexels.com" target="_blank" rel="noopener noreferrer nofollow" className="hover:text-brand">
                {photo.source}
              </a>
            </p>
          );
        })()}

        {fm.isPR && (
          <div className="not-prose">
            <PRBadge variant="banner" />
          </div>
        )}
      </Container>

      {/* 本文 */}
      <Container size="prose" className="py-8">
        <MdxContent source={post.content} />

        {/* タグ */}
        {fm.tags?.length ? (
          <div className="not-prose mt-12 flex flex-wrap gap-x-4 gap-y-2 text-xs font-light tracking-wide text-ink/50">
            {fm.tags.map((t) => (
              <span key={t}>#{t}</span>
            ))}
          </div>
        ) : null}

        <Sources sources={fm.sources} />
        <ShareButtons slug={fm.slug} title={fm.title} />

        <div className="not-prose mt-10">
          {category && (
            <Link href={`/category/${category.slug}`} className="nav-underline text-sm">
              ← {category.name}の記事一覧へ
            </Link>
          )}
        </div>
      </Container>

      <Container className="pb-8">
        <RelatedPosts posts={related} />
      </Container>
    </article>
  );
}
