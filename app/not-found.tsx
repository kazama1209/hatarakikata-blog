import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <p className="eyebrow mb-6">404</p>
      <h1 className="font-display text-2xl font-light text-ink">
        ページが見つかりませんでした
      </h1>
      <p className="mt-4 text-sm font-light leading-loose text-ink/55">
        お探しのページは移動または削除された可能性があります。
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        <Link href="/" className="nav-underline text-sm">トップへ戻る</Link>
        <span aria-hidden className="hidden h-px w-10 bg-ink/20 sm:block" />
        <Link href="/category/shokushu" className="nav-underline text-sm">働き方の選択肢を見る</Link>
      </div>
    </Container>
  );
}
