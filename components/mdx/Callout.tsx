import { type ReactNode } from "react";

type Tone = "point" | "info" | "warning" | "tip";

const toneStyles: Record<Tone, { accent: string; label: string; title: string }> = {
  point: {
    accent: "border-brand/50",
    label: "text-brand-dark",
    title: "ポイント",
  },
  info: {
    accent: "border-sky-300",
    label: "text-sky-700",
    title: "メモ",
  },
  warning: {
    accent: "border-rose-300",
    label: "text-rose-700",
    title: "注意",
  },
  tip: {
    accent: "border-accent/60",
    label: "text-ink/70",
    title: "ひとこと",
  },
};

/**
 * 記事内の強調ボックス。MDXから <Callout tone="warning" title="...">本文</Callout> で使う。
 */
export function Callout({
  children,
  tone = "point",
  title,
}: {
  children: ReactNode;
  tone?: Tone;
  title?: string;
}) {
  const s = toneStyles[tone];
  return (
    <aside className={`not-prose my-8 border-l-2 ${s.accent} pl-5`}>
      <p className={`mb-2 text-[11px] font-medium uppercase tracking-[0.18em] ${s.label}`}>
        {title ?? s.title}
      </p>
      <div className="space-y-2 text-[15px] font-light leading-loose text-ink/80 [&_a]:text-brand-dark [&_a]:underline [&_a]:underline-offset-4">
        {children}
      </div>
    </aside>
  );
}
