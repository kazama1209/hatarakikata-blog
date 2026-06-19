/**
 * カテゴリ定義。frontmatter の `category` はここの `slug` を使う。
 * 柱1-3（共感・選択肢・テンプレ）はアフィ無で信頼を貯め、
 * 柱4-6（会社選び・エージェント・転職後）でアフィ導線（PR明示）。
 */
export type CategorySlug = "tsurai" | "shokushu" | "template" | "kaisha" | "flow" | "real";

export interface Category {
  slug: CategorySlug;
  /** 記事プランの柱番号（1〜6） */
  group: "1" | "2" | "3" | "4" | "5" | "6";
  name: string;
  shortName: string;
  emoji: string;
  description: string;
  /** このカテゴリの記事にアフィリンク枠を置いてよいか */
  allowsAffiliate: boolean;
}

export const categories: Category[] = [
  {
    slug: "tsurai",
    group: "1",
    name: "今の仕事がつらい",
    shortName: "つらい",
    emoji: "😮‍💨",
    description:
      "土日休めない・立ち仕事で限界・給料が残らない——接客や販売で消耗してきた人の「あるある」と、我慢しなくていい理由をまとめています。",
    allowsAffiliate: false,
  },
  {
    slug: "shokushu",
    group: "2",
    name: "事務という選択肢",
    shortName: "選択肢",
    emoji: "🧭",
    description:
      "事務の種類の違い、未経験から目指す手順、接客経験の活かし方まで。「パソコン苦手でも大丈夫?」の不安にこたえます。",
    allowsAffiliate: false,
  },
  {
    slug: "template",
    group: "3",
    name: "書類・面接テンプレ",
    shortName: "テンプレ",
    emoji: "📝",
    description:
      "志望動機・自己PR・面接の答え方・お礼メールまで、接客から事務へ向けた「そのまま使える例文」を集めた保存版です。",
    allowsAffiliate: false,
  },
  {
    slug: "kaisha",
    group: "4",
    name: "会社の見分け方",
    shortName: "会社選び",
    emoji: "🔍",
    description:
      "ホワイトな求人票の条件、危険ワード、女性が働きやすい会社の探し方。入る前に見抜くためのチェックポイントを解説します。",
    allowsAffiliate: true,
  },
  {
    slug: "flow",
    group: "5",
    name: "転職の進め方",
    shortName: "進め方",
    emoji: "🗺️",
    description:
      "未経験の転職活動の全体の流れと、転職エージェントの賢い使い方。在職中の進め方や複数登録のコツまで、土台を整えます。",
    allowsAffiliate: true,
  },
  {
    slug: "real",
    group: "6",
    name: "転職後のリアル",
    shortName: "転職後",
    emoji: "🪴",
    description:
      "事務に変わって良かったこと・正直なデメリットの両面を。憧れだけでなくリアルを知って、自分に合うかを考えられます。",
    allowsAffiliate: true,
  },
];

export const categoryMap: Record<CategorySlug, Category> = categories.reduce(
  (acc, c) => {
    acc[c.slug] = c;
    return acc;
  },
  {} as Record<CategorySlug, Category>,
);

export function getCategory(slug: string): Category | undefined {
  return categoryMap[slug as CategorySlug];
}
