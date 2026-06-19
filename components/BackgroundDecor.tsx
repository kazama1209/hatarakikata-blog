/**
 * 全ページ共通の固定背景。
 * ミニマル・エアリー：無地に近い。極薄のにじみを上端コーナーに一点だけ。
 * 装飾モチーフは置かない（引き算の設計）。
 */
export function BackgroundDecor() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        backgroundColor: "var(--bg)",
        backgroundImage:
          "radial-gradient(circle at 96% -4%, rgba(233,241,234,0.55) 0, transparent 32%)",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}
