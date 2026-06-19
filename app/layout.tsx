import type { Metadata } from "next";
import { Noto_Sans_JP, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@/components/Analytics";
import { BackgroundDecor } from "@/components/BackgroundDecor";
import { JsonLd } from "@/components/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/jsonld";

const sans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

const display = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name}｜${siteConfig.tagline}`,
    template: `%s｜${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["事務 転職", "未経験 事務", "接客 辞めたい", "20代 女性 転職", "土日休み 仕事", "在宅 事務", "志望動機 例文"],
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name}｜${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [{ url: siteConfig.defaultOgImage, width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name}｜${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [siteConfig.defaultOgImage],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/favicon.svg",
  },
  ...(siteConfig.gscVerification
    ? { verification: { google: siteConfig.gscVerification } }
    : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${sans.variable} ${display.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        {/* 全ページ共通の控えめな背景装飾（固定・にじみ＋ドット＋モチーフのアイコン散らし） */}
        <BackgroundDecor />
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
        >
          本文へスキップ
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
