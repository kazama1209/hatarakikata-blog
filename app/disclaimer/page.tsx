import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Breadcrumb";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "免責事項・広告について",
  description: `${siteConfig.name}の掲載情報の取扱い、情報の正確性、アフィリエイト広告（PR）、外部リンクに関する免責事項です。`,
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <Container size="prose" className="py-8">
      <Breadcrumb
        crumbs={[
          { name: "ホーム", url: "/" },
          { name: "免責事項・広告について", url: "/disclaimer" },
        ]}
      />
      <h1 className="mt-6 font-display text-2xl font-bold text-brand-dark">免責事項・広告について</h1>

      <div className="prose prose-neutral mt-6 max-w-none">
        <h2>1. 掲載情報について</h2>
        <p>
          本サイト「{siteConfig.name}」の転職・求人・働き方に関する情報は、一般的な情報提供を目的としたものであり、
          特定のサービスや行動を強制・推奨するものではありません。掲載している例文・数値（休日日数・残業時間・離職率など）は
          <strong>一般的な目安・考え方</strong>であり、選考の通過や収入・待遇の変化など、特定の結果や成果を保証するものではありません。
          最終的なご判断はご自身の責任でお願いいたします。
        </p>

        <h2>2. 情報の正確性</h2>
        <p>
          掲載情報は公開時点の公開資料・一般的な情報に基づき正確性に努めていますが、その完全性・最新性・有用性を保証するものではありません。
          実際の求人内容・労働条件は企業や時期によって異なるため、応募・契約の前には各企業の募集要項や公式情報を必ずご確認ください。
        </p>

        <h2>3. 広告について</h2>
        <p>
          本サイトはアフィリエイト広告（PR）を含みます。広告を含む記事には「PR」「広告を含みます」と明示しています。
          掲載しているサービスの提供条件等は、各公式サイトでご確認ください。
        </p>

        <h2>4. 外部リンク</h2>
        <p>外部サイトの内容について、運営者は責任を負いません。</p>

        <hr />
        <p className="text-sm text-gray-500">
          本免責事項に関するお問い合わせは<Link href="/contact">こちら</Link>。あわせて
          <Link href="/privacy-policy">プライバシーポリシー</Link>もご確認ください。
        </p>
      </div>
    </Container>
  );
}
