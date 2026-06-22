import Link from "next/link";
import { Container } from "@/components/Container";
import { PostCard } from "@/components/PostCard";
import { IndexRow } from "@/components/IndexRow";
import { Reveal } from "@/components/Reveal";
import { getAllPostMeta, getPostsByCategory } from "@/lib/posts";
import { categories } from "@/lib/categories";

export default function HomePage() {
  const all = getAllPostMeta();
  const latest = all.slice(0, 4);

  return (
    <>
      {/* ヒーロー：左寄せの細いビッグタイポ＋余白。エアリーさを保ちつつ、やわらかな彩りを添える。 */}
      <section className="relative overflow-hidden">
        {/* アンビエントな光：超ぼかし・低彩度でエアリーに（装飾・読み上げ対象外） */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-24 -top-20 h-[420px] w-[420px] rounded-full bg-accent/20 blur-3xl sm:h-[600px] sm:w-[600px]" />
          <div className="absolute -left-32 top-44 h-[360px] w-[360px] rounded-full bg-brand/15 blur-3xl sm:h-[460px] sm:w-[460px]" />
        </div>

        <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
          <div className="max-w-3xl py-24 sm:py-32">
            <p className="eyebrow mb-8 flex items-center gap-2.5">
              <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              A note on changing how we work
            </p>
            <h1 className="font-display text-4xl font-light leading-[1.35] tracking-tight text-ink sm:text-6xl sm:leading-[1.3]">
              今の働き方から、
              <br />
              自分に合う
              <span className="bg-gradient-to-r from-brand-dark via-brand to-accent bg-clip-text text-transparent">
                働き方
              </span>
              へ。
            </h1>
            <p className="mt-10 max-w-xl text-[15px] font-light leading-loose text-ink/55">
              在宅・土日休み・年収アップ——働き方の選択肢から、求人の見分け方や志望動機の例文まで。
              「働き方を変える」を、静かに、具体的に。
            </p>
            {/* アクセントは細いグラデの線1本 */}
            <div className="mt-12 flex items-center gap-8">
              <Link href="/category/shokushu" className="nav-underline text-sm">
                働き方の選択肢を見る
              </Link>
              <span aria-hidden className="h-0.5 w-12 rounded-full bg-gradient-to-r from-brand to-accent" />
              <Link href="/category/tsurai" className="nav-underline text-sm">
                今がつらい人へ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 新着：エアリー2列 */}
      <Container className="py-16">
        <Reveal>
          <div className="mb-10 flex items-baseline justify-between">
            <p className="eyebrow">Latest</p>
            <span className="text-xs font-light tracking-wide text-ink/40">全{all.length}記事</span>
          </div>
        </Reveal>
        <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2">
          {latest.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 90}>
              <PostCard post={p} />
            </Reveal>
          ))}
        </div>
      </Container>

      {/* カテゴリ：テキスト索引リスト（罫線区切り） */}
      <Container className="py-16">
        <Reveal>
          <p className="eyebrow mb-8">Index</p>
        </Reveal>
        <Reveal>
          <div>
            {categories.map((c) => {
              const count = getPostsByCategory(c.slug).length;
              return (
                <IndexRow
                  key={c.slug}
                  href={`/category/${c.slug}`}
                  label={c.name}
                  description={c.description}
                  meta={`${count}記事`}
                />
              );
            })}
          </div>
        </Reveal>
      </Container>

      {/* CTA：罫線囲みの控えめ版 */}
      <Container className="pb-28 pt-12">
        <Reveal>
          <div className="border-y border-[var(--hairline)] py-14 text-center">
            <p className="eyebrow mb-5">If it feels too much</p>
            <h2 className="font-display text-2xl font-light leading-relaxed text-ink sm:text-[28px]">
              「今の働き方、しんどいかも」と思ったら
            </h2>
            <p className="mx-auto mt-5 max-w-md text-sm font-light leading-loose text-ink/55">
              辞める・辞めないの前に、まずは知ること。
              働き方の選択肢や会社の見分け方を、やさしく具体的にまとめています。
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              <Link href="/category/kaisha" className="nav-underline text-sm">
                会社の見分け方を知る
              </Link>
              <span aria-hidden className="hidden h-px w-10 bg-ink/20 sm:block" />
              <Link href="/category/flow" className="nav-underline text-sm">
                転職の進め方を読む
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </>
  );
}
