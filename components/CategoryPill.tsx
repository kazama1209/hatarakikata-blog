import Link from "next/link";
import { getCategory } from "@/lib/categories";

/**
 * カテゴリラベル（ミニマル）。色付きピルをやめ、小さな大文字テキスト＋下線hoverに。
 */
export function CategoryPill({
  category,
  asLink = true,
}: {
  category: string;
  asLink?: boolean;
}) {
  const c = getCategory(category);
  if (!c) return null;
  const cls = "text-[11px] uppercase tracking-[0.18em] text-brand-dark/80";
  if (!asLink) return <span className={cls}>{c.shortName}</span>;
  return (
    <Link href={`/category/${c.slug}`} className={`nav-underline ${cls}`}>
      {c.shortName}
    </Link>
  );
}
