/**
 * 各記事のカバー写真を Pexels から取得して public/images/posts/<slug>.jpg に保存する。
 * Pex: 無料・帰属義務なし（ただし credit は推奨 → content/photo-credits.json に保存）。
 *
 * 使い方:
 *   PEXELS_API_KEY=xxxx node scripts/fetch-photos.mjs
 *   （キー未指定時は ~/Workspace/ai-video-pipeline/backend/.env から読む）
 *   再取得: node scripts/fetch-photos.mjs --force
 *
 * 画像は自前で public/ に保存・コミットするため、実行後はAPIキー不要。
 */
import fs from "node:fs";
import path from "node:path";
import os from "node:os";

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, "public", "images", "posts");
const CREDITS = path.join(ROOT, "content", "photo-credits.json");
const FORCE = process.argv.includes("--force");

function loadKey() {
  if (process.env.PEXELS_API_KEY) return process.env.PEXELS_API_KEY.trim();
  const envPath = path.join(os.homedir(), "Workspace", "ai-video-pipeline", "backend", ".env");
  try {
    const txt = fs.readFileSync(envPath, "utf8");
    const m = txt.match(/^PEXELS_API_KEY\s*=\s*(.+)$/m);
    if (m) return m[1].trim().replace(/^["']|["']$/g, "");
  } catch {}
  return null;
}

// slug -> Pexels 検索クエリ（記事テーマに沿った写真）
const queries = {
  // 柱1 つらい
  "customer-service-quit-signs": "tired retail worker woman",
  "sales-staff-aruaru": "shop assistant woman apparel",
  "quit-customer-service-glad": "happy relaxed woman cafe",
  "weekend-off-twenties": "woman relaxing weekend home",
  "sunday-blues": "tired woman window evening",
  // 柱2 選択肢
  "office-job-no-pc": "woman laptop office desk",
  "office-job-types": "office desk documents work",
  "office-job-search-noexp": "woman laptop job search",
  "service-skills-office": "woman customer service smile",
  "temp-to-perm": "office worker woman desk japan",
  // 柱3 テンプレ
  "motivation-letter-examples": "writing resume desk pen",
  "office-interview-questions": "job interview woman office",
  "self-pr-examples": "woman writing notebook desk",
  "smooth-resignation": "business women talking office",
  "interview-thankyou-email": "woman typing laptop email",
  // 柱4 会社選び
  "white-company-jobposting": "woman reading document laptop",
  "jobposting-red-words": "magnifying glass document desk",
  "women-friendly-company": "women office team smiling",
  "fixed-overtime-pay": "calculator money desk office",
  "remote-office-company": "woman working from home laptop",
  // 柱5 進め方
  "career-change-flow": "woman planning notebook desk",
  "agent-how-to-use": "career consultation meeting desk",
  "job-hunt-while-employed": "woman laptop cafe evening",
  "multiple-agents": "woman laptop coffee planning",
  "decline-agent": "woman phone call office",
  // 柱6 転職後
  "after-office-change": "happy woman office desk",
  "office-job-cons": "tired woman office desk",
  "office-job-not-easy": "woman office computer focused",
  "stress-gone-office": "relaxed smiling woman office",
  "service-industry-turnover": "empty restaurant interior",
};

async function searchPhoto(key, query) {
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(
    query,
  )}&orientation=landscape&size=large&per_page=6`;
  const res = await fetch(url, { headers: { Authorization: key } });
  if (!res.ok) throw new Error(`search ${res.status}`);
  const data = await res.json();
  const photo = (data.photos ?? []).find((p) => p.width >= p.height) ?? data.photos?.[0];
  return photo ?? null;
}

async function download(urlStr, dest) {
  const res = await fetch(urlStr);
  if (!res.ok) throw new Error(`download ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
  return buf.length;
}

async function main() {
  const key = loadKey();
  if (!key) {
    console.error("✗ PEXELS_API_KEY が見つかりません。環境変数で渡すか backend/.env を確認してください。");
    process.exit(1);
  }
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const credits = fs.existsSync(CREDITS) ? JSON.parse(fs.readFileSync(CREDITS, "utf8")) : {};

  const slugs = Object.keys(queries);
  let ok = 0;
  for (const slug of slugs) {
    const dest = path.join(OUT_DIR, `${slug}.jpg`);
    if (!FORCE && fs.existsSync(dest) && credits[slug]) {
      console.log(`· skip ${slug}（既存）`);
      ok++;
      continue;
    }
    try {
      const p = await searchPhoto(key, queries[slug]);
      if (!p) {
        console.warn(`⚠ ${slug}: 写真なし（クエリ: ${queries[slug]}）`);
        continue;
      }
      const src = p.src.landscape ?? p.src.large ?? p.src.original;
      const bytes = await download(src, dest);
      credits[slug] = {
        photographer: p.photographer,
        photographerUrl: p.photographer_url,
        url: p.url,
        alt: p.alt || queries[slug],
        source: "Pexels",
      };
      ok++;
      console.log(`✓ ${slug}  (${Math.round(bytes / 1024)}KB)  by ${p.photographer}`);
      await new Promise((r) => setTimeout(r, 250));
    } catch (e) {
      console.warn(`⚠ ${slug}: ${e.message}`);
    }
  }
  fs.writeFileSync(CREDITS, JSON.stringify(credits, null, 2) + "\n");
  console.log(`\n完了: ${ok}/${slugs.length} 件。credits → ${path.relative(ROOT, CREDITS)}`);
}

main();
