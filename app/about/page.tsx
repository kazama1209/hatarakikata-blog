import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Logo } from "@/components/Logo";
import { Illustration } from "@/components/Illustration";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "運営者情報",
  description: `${siteConfig.name}の運営者情報・運営方針・情報源の信頼性についてご案内します。`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <Container size="prose" className="py-8">
      <Breadcrumb crumbs={[{ name: "ホーム", url: "/" }, { name: "運営者情報", url: "/about" }]} />

      <div className="mt-8 flex items-center gap-5 border-y border-[var(--hairline)] py-8">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-brand-light/40 p-2.5 sm:h-24 sm:w-24">
          <Illustration name="heart-hands" title="運営者" className="h-full w-full" />
        </div>
        <div>
          <div className="mb-2 flex items-center gap-2">
            <Logo className="h-7 w-7" />
            <span className="font-display text-sm font-normal tracking-wide text-ink">{siteConfig.name}</span>
          </div>
          <h1 className="font-display text-2xl font-light text-ink">運営者情報</h1>
          <p className="eyebrow mt-1">About us</p>
        </div>
      </div>

      <div className="prose prose-neutral mt-8 max-w-none">
        <h2>運営者</h2>
        <p>
          <strong>{siteConfig.author}</strong>
        </p>
        <p>
          本サイト「{siteConfig.name}」は、20代女性の「働き方を変える」を応援するSNS（TikTok
          <a href={siteConfig.social.tiktok} target="_blank" rel="noopener noreferrer">
            {siteConfig.social.tiktokHandle}
          </a>
          ）を母体に運営している、働き方・転職の情報メディアです。接客・販売・立ち仕事で消耗した経験から、
          事務をはじめ「自分に合う働き方」へ移るための情報を発信しています。
        </p>

        <h2>運営の目的・方針</h2>
        <p>
          「接客・立ち仕事に疲れた20代女性が、事務・在宅・土日休みの仕事へ働き方を変える」のを応援することを目的に、
          つまずきやすいポイントをやさしく具体的にまとめています。
        </p>
        <ul>
          <li>接客・販売・立ち仕事の「しんどい」への共感と、我慢しなくていい理由</li>
          <li>事務という選択肢（種類の違い・未経験からの手順・接客経験の活かし方）</li>
          <li>志望動機・自己PR・面接・お礼メールの「そのまま使える例文」</li>
          <li>ホワイトな会社の見分け方、転職の進め方、エージェントの使い方</li>
        </ul>

        <h2>情報の信頼性について</h2>
        <p>
          本サイトの情報は、転職・求人に関する公的データや各転職サービスの公開情報を参考に、
          できるだけ一般的・中立的な立場で作成しています。例文や数値（休日日数・残業時間・離職率など）は
          「一般的な目安・考え方」として提示しており、特定の結果や成果を保証するものではありません。
        </p>
        <p>
          実際の求人内容・労働条件は企業や時期によって異なります。応募・契約の前には、必ず各企業の募集要項や
          公式情報をご自身でご確認ください（詳しくは
          <Link href="/disclaimer">免責事項</Link>をご覧ください）。
        </p>

        <h2>広告（アフィリエイト）について</h2>
        <p>
          本サイトは、運営を継続するためにアフィリエイト広告（A8.net 等）を利用しています。
          広告（PR）を含む記事には、その旨を明示しています。詳しくは
          <Link href="/privacy-policy">プライバシーポリシー</Link>および
          <Link href="/disclaimer">免責事項</Link>をご覧ください。
        </p>

        <h2>お問い合わせ</h2>
        <p>
          ご意見・ご指摘・取材や掲載に関するご相談は、
          <Link href="/contact">お問い合わせページ</Link>よりお気軽にご連絡ください。
          記載内容に誤りを見つけられた場合も、お知らせいただけると幸いです。
        </p>
      </div>
    </Container>
  );
}
