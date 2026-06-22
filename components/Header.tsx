"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/lib/site";
import { categories } from "@/lib/categories";
import { Logo } from "./Logo";

const navLinks = [
  ...categories.map((c) => ({ href: `/category/${c.slug}`, label: c.shortName })),
  { href: "/about", label: "運営者" },
  { href: "/contact", label: "お問い合わせ" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);
  return (
    <header className="sticky top-0 z-50 bg-[var(--bg)]/90 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-6 px-6 sm:px-10">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          aria-label={`${siteConfig.name} ホーム`}
        >
          <Logo className="h-8 w-8" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-[15px] font-normal tracking-wide text-ink">
              {siteConfig.name}
            </span>
            <span className="mt-1 hidden text-[10px] font-light uppercase tracking-[0.22em] text-ink/40 sm:block">
              lifestyle &amp; work
            </span>
          </span>
        </Link>

        {/* デスクトップナビ：テキスト＋hover下線 */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={`nav-underline text-sm${isActive(l.href) ? " is-active" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* モバイルメニューボタン */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center text-ink/70 lg:hidden"
          aria-label="メニューを開閉"
          aria-expanded={open}
        >
          <span className="text-lg font-light">{open ? "✕" : "≡"}</span>
        </button>
      </div>

      {/* モバイルナビ */}
      {open && (
        <nav className="border-t border-[var(--hairline)] bg-[var(--bg)] px-6 py-4 lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map((l) => (
              <li key={l.href} className="border-b border-[var(--hairline)] last:border-0">
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  className={`block py-3 text-sm tracking-wide ${
                    isActive(l.href)
                      ? "font-normal text-ink"
                      : "font-light text-ink/80"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
