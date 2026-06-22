/** ブランドロゴ（新芽＝成長・新しい一歩）。インラインSVGで色はブランドカラー。 */
export function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      role="img"
      aria-label="あしたの働き方 ロゴ"
    >
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6f9479" />
          <stop offset="1" stopColor="#86ab8e" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="13" fill="#e9f1ea" />
      {/* 茎 */}
      <path d="M24 38V22" stroke="#4f7059" strokeWidth="3.4" strokeLinecap="round" />
      {/* 左の葉 */}
      <path d="M24 27c-3.5 0-9-2-11-6-1.4-2.8-1-5 .4-6 3.4 0 9 2 11 6 1.4 2.8 1 5-.4 6Z" fill="url(#logoGrad)" />
      {/* 右の葉（新芽） */}
      <path d="M24.5 22c1-4 5.5-8.5 10.5-9 1.6 3 .8 8-3 11-2.8 2.1-5.7 2.2-7.5-2Z" fill="#ef9e76" />
    </svg>
  );
}
