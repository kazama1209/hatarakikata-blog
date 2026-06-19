import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: `${siteConfig.name}へのお問い合わせ・ご相談はこちらから。ご意見・ご指摘・掲載に関するご相談をお受けしています。`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const hasForm = Boolean(siteConfig.formspreeId);
  return (
    <Container size="prose" className="py-8">
      <Breadcrumb crumbs={[{ name: "ホーム", url: "/" }, { name: "お問い合わせ", url: "/contact" }]} />

      <header className="mt-8 mb-8">
        <p className="eyebrow mb-4">Contact</p>
        <h1 className="font-display text-3xl font-light text-ink">お問い合わせ</h1>
        <p className="mt-4 text-sm font-light leading-loose text-ink/55">
          記事へのご意見・ご指摘、掲載や取材に関するご相談などをお受けしています。
          内容を確認のうえ、必要に応じてご返信いたします。
        </p>
      </header>

      {hasForm ? (
        <ContactForm formId={siteConfig.formspreeId} />
      ) : (
        <div className="border-t border-[var(--hairline)] pt-8">
          <p className="text-sm font-light leading-loose text-ink/60">
            現在、お問い合わせフォームを準備中です。お急ぎの場合は、下記メールアドレスまでご連絡ください。
          </p>
          <p className="mt-5 border border-[var(--hairline)] bg-brand-light/40 px-4 py-3 text-center font-normal tracking-wide text-brand-dark">
            {siteConfig.contactEmail}
          </p>
          <p className="mt-5 text-xs font-light text-ink/40">
            ※ フォームを有効にするには、環境変数 <code>NEXT_PUBLIC_FORMSPREE_ID</code> に Formspree のフォームIDを設定してください（README参照）。
          </p>
        </div>
      )}
    </Container>
  );
}
