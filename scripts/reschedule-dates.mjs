/**
 * 記事の公開日時を「週数回ペースで約6週運用してきた」風に散らす。
 * frontmatter の date / updated を下記マッピングで上書きする（動的な現在時刻は使わない）。
 *   node scripts/reschedule-dates.mjs
 *
 * 方針: 期間2026-05-06〜06-20、間隔は不規則（同日近接/直近は密/数日空き）。
 * PR記事(柱4会社選び/5進め方/6転職後)と非PR記事(柱1つらい/2選択肢/3テンプレ)を
 * 全期間で交互配置し、新着（最新6本）が「PRばかり」にならないよう散らす。最新=本日(6/20)。
 */
import fs from "node:fs";
import path from "node:path";

const POSTS = path.join(process.cwd(), "content", "posts");

// slug -> 公開日時(JST固定)。古い順。PR/非PRが交互になるよう配置。
const schedule = {
  "customer-service-quit-signs": "2026-05-06T21:30:00+09:00", // 1つらい
  "office-job-no-pc": "2026-05-07T22:50:00+09:00", // 2選択肢
  "sales-staff-aruaru": "2026-05-09T20:15:00+09:00", // 1つらい
  "motivation-letter-examples": "2026-05-11T23:05:00+09:00", // 3テンプレ
  "office-job-types": "2026-05-12T21:40:00+09:00", // 2選択肢
  "white-company-jobposting": "2026-05-14T22:20:00+09:00", // 4会社選び(PR)
  "sunday-blues": "2026-05-16T20:50:00+09:00", // 1つらい
  "office-interview-questions": "2026-05-18T23:15:00+09:00", // 3テンプレ
  "career-change-flow": "2026-05-19T21:10:00+09:00", // 5進め方(PR)
  "office-job-search-noexp": "2026-05-21T22:40:00+09:00", // 2選択肢
  "quit-customer-service-glad": "2026-05-23T20:30:00+09:00", // 1つらい
  "jobposting-red-words": "2026-05-24T23:00:00+09:00", // 4会社選び(PR)
  "self-pr-examples": "2026-05-26T21:55:00+09:00", // 3テンプレ
  "women-friendly-company": "2026-05-28T22:35:00+09:00", // 4会社選び(PR)
  "smooth-resignation": "2026-05-30T20:20:00+09:00", // 3テンプレ
  "temp-to-perm": "2026-06-01T23:10:00+09:00", // 2選択肢
  "agent-how-to-use": "2026-06-02T21:25:00+09:00", // 5進め方(PR)
  "fixed-overtime-pay": "2026-06-04T22:50:00+09:00", // 4会社選び(PR)
  "office-job-not-easy": "2026-06-06T20:40:00+09:00", // 6転職後(PR)
  "job-hunt-while-employed": "2026-06-07T23:20:00+09:00", // 5進め方(PR)
  "remote-office-company": "2026-06-09T21:05:00+09:00", // 4会社選び(PR)
  "multiple-agents": "2026-06-11T22:25:00+09:00", // 5進め方(PR)
  "office-job-cons": "2026-06-12T20:55:00+09:00", // 6転職後(PR)
  "decline-agent": "2026-06-14T23:00:00+09:00", // 5進め方(PR)
  "weekend-off-twenties": "2026-06-15T21:35:00+09:00", // 1つらい（新着に非PR）
  "service-industry-turnover": "2026-06-16T22:45:00+09:00", // 6転職後(PR)
  "interview-thankyou-email": "2026-06-17T20:25:00+09:00", // 3テンプレ（新着に非PR）
  "after-office-change": "2026-06-18T23:10:00+09:00", // 6転職後(PR)
  "service-skills-office": "2026-06-19T21:50:00+09:00", // 2選択肢（新着に非PR）
  "stress-gone-office": "2026-06-20T22:15:00+09:00", // 6転職後(PR)＝最新
};

let changed = 0;
let missing = [];

for (const [slug, iso] of Object.entries(schedule)) {
  const file = path.join(POSTS, `${slug}.mdx`);
  if (!fs.existsSync(file)) {
    missing.push(slug);
    continue;
  }
  let raw = fs.readFileSync(file, "utf8");
  // frontmatter内の date: / updated: 行のみを置換（本文に同形の行は無い）
  raw = raw.replace(/^date:\s*".*"$/m, `date: "${iso}"`);
  raw = raw.replace(/^updated:\s*".*"$/m, `updated: "${iso}"`);
  fs.writeFileSync(file, raw);
  changed++;
  console.log(`✓ ${slug.padEnd(28)} ${iso}`);
}

if (missing.length) console.warn(`\n⚠ 見つからないslug: ${missing.join(", ")}`);
console.log(`\n完了: ${changed}件 更新`);
