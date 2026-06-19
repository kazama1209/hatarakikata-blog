/**
 * 記事の公開日時を「週数回ペースで約10週運用してきた」風に散らす。
 * frontmatter の date / updated を下記マッピングで上書きする（動的な現在時刻は使わない）。
 *   node scripts/reschedule-dates.mjs
 *
 * 方針: 期間2026-04-12〜06-20（全46本）。間隔は不規則（1〜4日・たまに同日近接）。
 * PR記事(柱4会社選び/5進め方/6転職後 = kaisha/flow/real)と
 * 非PR記事(柱1つらい/2選択肢/3テンプレ = tsurai/shokushu/template)を全期間で交互配置。
 * 新着（最新6本）が「PRばかり」にならないよう非PRを3本混ぜる。最新=本日(6/20)。
 *
 * 凡例: 各要素 [slug, "日時"]。古い順（配列の末尾が最新）。
 */
import fs from "node:fs";
import path from "node:path";

const POSTS = path.join(process.cwd(), "content", "posts");

// 古い順（先頭=最古 2026-04-12 / 末尾=最新 2026-06-20）。
// PR(P)と非PR(-)を交互に。間隔は1〜4日で不規則、たまに同日近接。
const ordered = [
  // ===== 4月（立ち上げ期） =====
  ["customer-service-quit-signs", "2026-04-12T21:30:00+09:00"], // (-)つらい
  ["office-job-no-pc", "2026-04-13T22:50:00+09:00"], // (-)選択肢
  ["white-company-jobposting", "2026-04-15T22:20:00+09:00"], // (P)会社選び
  ["sales-staff-aruaru", "2026-04-16T20:15:00+09:00"], // (-)つらい
  ["career-change-flow", "2026-04-18T21:10:00+09:00"], // (P)進め方
  ["motivation-letter-examples", "2026-04-19T23:05:00+09:00"], // (-)テンプレ
  ["office-job-types", "2026-04-21T21:40:00+09:00"], // (-)選択肢
  ["jobposting-red-words", "2026-04-22T23:00:00+09:00"], // (P)会社選び
  ["skills-zero-office-pass", "2026-04-24T20:35:00+09:00"], // (-)つらい
  ["agent-how-to-use", "2026-04-25T21:25:00+09:00"], // (P)進め方
  ["office-job-steps", "2026-04-27T21:20:00+09:00"], // (-)選択肢
  ["sunday-blues", "2026-04-28T20:50:00+09:00"], // (-)つらい
  ["women-friendly-company", "2026-04-30T22:35:00+09:00"], // (P)会社選び

  // ===== 5月（テンプレ・会社選びを厚く） =====
  ["office-interview-questions", "2026-05-01T23:15:00+09:00"], // (-)テンプレ
  ["office-job-not-easy", "2026-05-02T22:30:00+09:00"], // (P)転職後
  ["self-pr-examples", "2026-05-04T21:55:00+09:00"], // (-)テンプレ
  ["fixed-overtime-pay", "2026-05-05T22:50:00+09:00"], // (P)会社選び
  ["wedding-shift-cant-attend", "2026-05-07T20:40:00+09:00"], // (-)つらい
  ["job-hunt-while-employed", "2026-05-08T23:20:00+09:00"], // (P)進め方
  ["resume-customer-service", "2026-05-10T23:05:00+09:00"], // (-)テンプレ
  ["office-job-search-noexp", "2026-05-11T21:30:00+09:00"], // (-)選択肢
  ["remote-office-company", "2026-05-13T21:05:00+09:00"], // (P)会社選び
  ["why-quit-good-answer", "2026-05-14T21:15:00+09:00"], // (-)テンプレ
  ["multiple-agents", "2026-05-16T22:25:00+09:00"], // (P)進め方
  ["quit-customer-service-glad", "2026-05-17T20:30:00+09:00"], // (-)つらい
  ["office-job-cons", "2026-05-19T20:55:00+09:00"], // (P)転職後
  ["office-qualifications", "2026-05-20T21:45:00+09:00"], // (-)選択肢
  ["avoid-bad-company", "2026-05-22T22:40:00+09:00"], // (P)会社選び
  ["skill-translation-table", "2026-05-23T22:10:00+09:00"], // (-)テンプレ
  ["customer-complaint-burnout", "2026-05-25T20:25:00+09:00"], // (-)つらい
  ["decline-agent", "2026-05-27T23:00:00+09:00"], // (P)進め方
  ["general-office-day", "2026-05-28T21:35:00+09:00"], // (-)選択肢
  ["service-industry-turnover", "2026-05-30T22:45:00+09:00"], // (P)転職後
  ["interview-danger-answers", "2026-05-31T23:00:00+09:00"], // (-)テンプレ

  // ===== 6月（仕上げ・新着期） =====
  ["temp-to-perm", "2026-06-02T21:20:00+09:00"], // (-)選択肢
  ["pass-fail-difference", "2026-06-03T22:30:00+09:00"], // (P)会社選び
  ["reverse-questions", "2026-06-05T21:10:00+09:00"], // (-)テンプレ
  ["after-office-change", "2026-06-07T23:10:00+09:00"], // (P)転職後
  ["smooth-resignation", "2026-06-09T20:20:00+09:00"], // (-)テンプレ
  ["agent-meeting-prep", "2026-06-11T22:30:00+09:00"], // (P)進め方
  // --- 新着6本（ここから下が最新6本：非PRを3本混ぜる） ---
  ["weekend-off-twenties", "2026-06-13T21:35:00+09:00"], // (-)つらい【新着・非PR】
  ["stress-disappeared-office", "2026-06-15T22:05:00+09:00"], // (P)転職後【新着】
  ["excel-for-office-real", "2026-06-16T21:30:00+09:00"], // (-)選択肢【新着・非PR】
  ["stress-gone-office", "2026-06-18T22:15:00+09:00"], // (P)転職後【新着】
  ["interview-thankyou-email", "2026-06-19T20:25:00+09:00"], // (-)テンプレ【新着・非PR】
  ["service-skills-office", "2026-06-20T21:50:00+09:00"], // (-)選択肢【新着・最新=非PR】
];

let changed = 0;
let missing = [];

for (const [slug, iso] of ordered) {
  const file = path.join(POSTS, `${slug}.mdx`);
  if (!fs.existsSync(file)) {
    missing.push(slug);
    continue;
  }
  let raw = fs.readFileSync(file, "utf8");
  raw = raw.replace(/^date:\s*".*"$/m, `date: "${iso}"`);
  raw = raw.replace(/^updated:\s*".*"$/m, `updated: "${iso}"`);
  fs.writeFileSync(file, raw);
  changed++;
  console.log(`✓ ${slug.padEnd(30)} ${iso}`);
}

if (missing.length) console.warn(`\n⚠ 見つからないslug: ${missing.join(", ")}`);
console.log(`\n完了: ${changed}件 / 全 ${ordered.length} 本`);
