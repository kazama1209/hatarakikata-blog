/**
 * サイト全体の基本設定。独自ドメイン接続後は .env の NEXT_PUBLIC_SITE_URL を差し替える。
 */
export const siteConfig = {
  name: "あしたの働き方ノート",
  shortName: "働き方ノート",
  // 末尾スラッシュなし。未設定時はローカル開発URLにフォールバック。
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://hatarakikata-note.example.com").replace(/\/$/, ""),
  description:
    "今の働き方に疲れたあなたへ。自分に合う仕事へ転職するための、求人の見分け方・志望動機や面接の例文・エージェントの使い方を、やさしく具体的にまとめた転職メディアです。",
  tagline: "今の働き方から、自分に合う仕事へ。",
  author: "あしたの働き方ノート 運営",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@example.com",
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "",
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "",
  gscVerification: process.env.NEXT_PUBLIC_GSC_VERIFICATION ?? "",
  // OGPの既定画像（public/og-default.svg を用意）
  defaultOgImage: "/og-default.svg",
  locale: "ja_JP",
} as const;

export type SiteConfig = typeof siteConfig;

/** 絶対URLを組み立てる */
export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  return `${siteConfig.url}${path.startsWith("/") ? "" : "/"}${path}`;
}
