import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { breadcrumbJsonLd, type Crumb } from "@/lib/jsonld";

/** パンくず（表示＋BreadcrumbList JSON-LD）。crumbs は Home から末尾（現在地）まで。 */
export function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <nav aria-label="パンくず" className="not-prose text-xs font-light tracking-wide text-ink/40">
        <ol className="flex flex-wrap items-center gap-2">
          {crumbs.map((c, i) => {
            const isLast = i === crumbs.length - 1;
            return (
              <li key={c.url} className="flex items-center gap-2">
                {isLast ? (
                  <span className="text-ink/60" aria-current="page">
                    {c.name}
                  </span>
                ) : (
                  <Link href={c.url} className="transition-colors hover:text-brand-dark">
                    {c.name}
                  </Link>
                )}
                {!isLast && <span aria-hidden className="text-ink/20">/</span>}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
