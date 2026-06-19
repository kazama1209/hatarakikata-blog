import Link from "next/link";
import { getCategory } from "@/lib/categories";

const styles: Record<string, string> = {
  tsurai: "bg-rose-100 text-rose-700",
  shokushu: "bg-brand-light text-brand-dark",
  template: "bg-sky-100 text-sky-700",
  kaisha: "bg-amber-100 text-amber-700",
  flow: "bg-violet-100 text-violet-700",
  real: "bg-teal-100 text-teal-700",
};

export function CategoryPill({
  category,
  asLink = true,
}: {
  category: string;
  asLink?: boolean;
}) {
  const c = getCategory(category);
  if (!c) return null;
  const cls = `pill ${styles[c.slug] ?? "bg-gray-100 text-gray-700"}`;
  const label = (
    <>
      <span aria-hidden>{c.emoji}</span>
      {c.shortName}
    </>
  );
  if (!asLink) return <span className={cls}>{label}</span>;
  return (
    <Link href={`/category/${c.slug}`} className={`${cls} transition-opacity hover:opacity-80`}>
      {label}
    </Link>
  );
}
