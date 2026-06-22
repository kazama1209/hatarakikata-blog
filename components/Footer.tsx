import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { categories } from "@/lib/categories";
import { Logo } from "./Logo";

/** フッター。ポリシー類への固定リンクを必ず置く（A8審査要件）。 */
export function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--hairline)]">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4">
          {/* ブランド */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <Logo className="h-8 w-8" />
              <span className="font-display text-[15px] font-normal tracking-wide text-ink">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm font-light leading-loose text-ink/50">
              今の働き方に疲れた人へ。在宅・土日休み・年収アップなど、自分に合う働き方へ変えるための情報を、やさしく具体的に。
            </p>
          </div>

          {/* カテゴリ */}
          <nav aria-label="カテゴリ">
            <h2 className="eyebrow mb-5">Category</h2>
            <ul className="space-y-3 text-sm font-light text-ink/55">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link href={`/category/${c.slug}`} className="transition-colors hover:text-brand-dark">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* サイト情報 */}
          <nav aria-label="サイト情報">
            <h2 className="eyebrow mb-5">About</h2>
            <ul className="space-y-3 text-sm font-light text-ink/55">
              <li><Link href="/about" className="transition-colors hover:text-brand-dark">運営者情報</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-brand-dark">お問い合わせ</Link></li>
            </ul>
          </nav>

          {/* ポリシー（審査必須リンク） */}
          <nav aria-label="ポリシー">
            <h2 className="eyebrow mb-5">Policy</h2>
            <ul className="space-y-3 text-sm font-light text-ink/55">
              <li><Link href="/privacy-policy" className="transition-colors hover:text-brand-dark">プライバシーポリシー</Link></li>
              <li><Link href="/disclaimer" className="transition-colors hover:text-brand-dark">免責事項・広告について</Link></li>
            </ul>
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-[var(--hairline)] pt-8 text-xs font-light leading-relaxed text-ink/40">
          <p>
            当サイトはアフィリエイト広告（PR）を含みます。掲載情報は一般的な情報提供であり、効果や成果を保証するものではありません。
          </p>
          <p>© {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
