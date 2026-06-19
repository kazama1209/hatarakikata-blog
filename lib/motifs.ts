import type { CategorySlug } from "./categories";

/** イラスト名（components/Illustration.tsx の name と対応） */
export type IllustName =
  | "laptop"
  | "mail"
  | "clipboard"
  | "calendar"
  | "wallet"
  | "door"
  | "compass"
  | "building"
  | "two-people"
  | "heart-hands"
  | "chat"
  | "magnifier"
  | "tasks"
  | "clock"
  | "house"
  | "moon";

/** 記事slug → モチーフ（カバー画像・記事内イラストの中心図）。 */
export const slugMotif: Record<string, IllustName> = {
  // 柱1 つらい
  "customer-service-quit-signs": "clock",
  "sales-staff-aruaru": "chat",
  "quit-customer-service-glad": "heart-hands",
  "weekend-off-twenties": "calendar",
  "sunday-blues": "moon",
  // 柱2 選択肢
  "office-job-no-pc": "laptop",
  "office-job-types": "compass",
  "office-job-search-noexp": "magnifier",
  "service-skills-office": "two-people",
  "temp-to-perm": "door",
  // 柱3 テンプレ
  "motivation-letter-examples": "clipboard",
  "office-interview-questions": "chat",
  "self-pr-examples": "clipboard",
  "smooth-resignation": "door",
  "interview-thankyou-email": "mail",
  // 柱4 会社選び
  "white-company-jobposting": "magnifier",
  "jobposting-red-words": "tasks",
  "women-friendly-company": "heart-hands",
  "fixed-overtime-pay": "clock",
  "remote-office-company": "house",
  // 柱5 進め方
  "career-change-flow": "compass",
  "agent-how-to-use": "two-people",
  "job-hunt-while-employed": "clock",
  "multiple-agents": "tasks",
  "decline-agent": "chat",
  // 柱6 転職後
  "after-office-change": "calendar",
  "office-job-cons": "tasks",
  "office-job-not-easy": "clock",
  "stress-gone-office": "heart-hands",
  "service-industry-turnover": "building",
};

const fallbackByCategory: Record<CategorySlug, IllustName> = {
  tsurai: "heart-hands",
  shokushu: "laptop",
  template: "clipboard",
  kaisha: "magnifier",
  flow: "compass",
  real: "calendar",
};

export function getMotif(slug: string, category: CategorySlug): IllustName {
  return slugMotif[slug] ?? fallbackByCategory[category];
}

/** カテゴリ配色（カバー画像のグラデーション）。 */
export const categoryGradient: Record<CategorySlug, { from: string; to: string; ink: string }> = {
  tsurai: { from: "#e7a9a0", to: "#f6d3c4", ink: "#9c5a52" },
  shokushu: { from: "#6f9479", to: "#afc9b3", ink: "#4f7059" },
  template: { from: "#7c93c7", to: "#c2d0ea", ink: "#4c5f8f" },
  kaisha: { from: "#ef9e76", to: "#f8cfac", ink: "#b56a3e" },
  flow: { from: "#a87ea0", to: "#d8bcd2", ink: "#6f4d68" },
  real: { from: "#5fa39a", to: "#b6dad3", ink: "#3f7269" },
};

/** slugから決定的な擬似乱数（0..1）を作る。装飾の配置を記事ごとに変えるため。 */
export function hashUnit(seed: string, salt = 0): number {
  let h = 2166136261 ^ salt;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return ((h >>> 0) % 100000) / 100000;
}
