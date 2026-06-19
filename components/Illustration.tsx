import type { IllustName } from "@/lib/motifs";

/**
 * サイト専用の手描きSVGイラスト集（働き方・オフィステーマ／落ち着いた配色）。
 * 著作権フリー（自作）。カバー画像・記事内の図版・カテゴリ見出しで再利用する。
 * viewBox 0 0 240 180、背景は透明。色は下記パレットで統一。
 */
const C = {
  teal: "#6f9479", // セージグリーン（プライマリ）
  tealL: "#bcd6c1",
  pink: "#e8956f", // コーラル／アプリコット（アクセント）
  pinkL: "#fbd9c1",
  warm: "#e3b15f", // ゴールド
  warmL: "#f6dca8",
  violet: "#7c93c7", // ダスティブルー
  ink: "#4a4640",
  white: "#ffffff",
};

const S = { fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

function Laptop() {
  return (
    <g>
      <rect x="64" y="46" width="112" height="74" rx="8" fill={C.white} stroke={C.teal} strokeWidth="5" />
      <rect x="76" y="58" width="88" height="50" rx="4" fill={C.tealL} />
      <path d="M104 76h40M104 90h28" {...S} stroke={C.white} strokeWidth="5" />
      <path d="M44 134c0-4 3-6 8-6h136c5 0 8 2 8 6 0 5-3 8-8 8H52c-5 0-8-3-8-8Z" {...S} fill={C.pinkL} stroke={C.pink} strokeWidth="5" />
      <path d="M150 56l5 5 9-11" {...S} stroke={C.warm} strokeWidth="0" />
    </g>
  );
}
function Mail() {
  return (
    <g>
      <rect x="50" y="58" width="140" height="94" rx="12" fill={C.tealL} stroke={C.teal} strokeWidth="5" />
      <path d="M56 70l64 46 64-46" {...S} stroke={C.teal} strokeWidth="5" />
      <circle cx="174" cy="56" r="17" fill={C.white} stroke={C.pink} strokeWidth="4" />
      <path d="M174 50c2-3 8-2 8 3 0 4-5 6-8 9-3-3-8-5-8-9 0-5 6-6 8-3Z" fill={C.pink} />
    </g>
  );
}
function Clipboard() {
  return (
    <g>
      <rect x="64" y="40" width="100" height="116" rx="12" fill={C.white} stroke={C.teal} strokeWidth="5" />
      <rect x="96" y="32" width="36" height="20" rx="8" fill={C.tealL} stroke={C.teal} strokeWidth="5" />
      <path d="M82 74h12M82 96h12M82 118h12" {...S} stroke={C.teal} strokeWidth="5" />
      <path d="M104 74h44M104 96h44M104 118h30" {...S} stroke={C.ink} strokeWidth="4" opacity="0.4" />
      <path d="M150 120l18 18 26-30" {...S} stroke={C.pink} strokeWidth="7" />
    </g>
  );
}
function Calendar() {
  return (
    <g>
      <rect x="56" y="52" width="128" height="100" rx="12" fill={C.white} stroke={C.teal} strokeWidth="5" />
      <path d="M56 80h128" {...S} stroke={C.teal} strokeWidth="5" />
      <path d="M84 44v18M156 44v18" {...S} stroke={C.teal} strokeWidth="6" />
      <rect x="72" y="92" width="20" height="16" rx="4" fill={C.pinkL} />
      <rect x="108" y="92" width="20" height="16" rx="4" fill={C.tealL} />
      <path d="M150 116l10 10 18-22" {...S} stroke={C.pink} strokeWidth="7" />
    </g>
  );
}
function Wallet() {
  return (
    <g>
      <rect x="54" y="66" width="132" height="80" rx="14" fill={C.tealL} stroke={C.teal} strokeWidth="5" />
      <path d="M54 92h132" {...S} stroke={C.teal} strokeWidth="5" />
      <rect x="138" y="100" width="56" height="26" rx="10" fill={C.white} stroke={C.teal} strokeWidth="5" />
      <circle cx="158" cy="113" r="6" fill={C.warm} />
      <circle cx="150" cy="56" r="16" fill={C.warmL} stroke={C.warm} strokeWidth="5" />
      <path d="M150 50v12M146 54h6a3 3 0 0 1 0 6h-4a3 3 0 0 0 0 6h6" {...S} stroke={C.warm} strokeWidth="3" />
    </g>
  );
}
function Door() {
  return (
    <g>
      <path d="M70 48h52v104H70z" {...S} fill={C.tealL} stroke={C.teal} strokeWidth="5" />
      <path d="M122 48l34 12v92l-34-4" {...S} fill={C.white} stroke={C.teal} strokeWidth="5" />
      <circle cx="138" cy="100" r="4" fill={C.teal} />
      <path d="M150 100h44M178 84l18 16-18 16" {...S} stroke={C.pink} strokeWidth="7" />
    </g>
  );
}
function Compass() {
  return (
    <g>
      <circle cx="120" cy="96" r="56" fill={C.white} stroke={C.teal} strokeWidth="6" />
      <circle cx="120" cy="96" r="56" fill="none" stroke={C.tealL} strokeWidth="6" strokeDasharray="2 14" />
      <path d="M120 60l14 30-14 30-14-30Z" {...S} fill={C.pink} stroke={C.pink} strokeWidth="3" />
      <path d="M120 96l-14 30 14-12 14 12Z" {...S} fill={C.tealL} stroke={C.teal} strokeWidth="3" />
      <circle cx="120" cy="96" r="5" fill={C.teal} />
    </g>
  );
}
function Building() {
  return (
    <g>
      <rect x="64" y="54" width="112" height="98" rx="10" fill={C.tealL} stroke={C.teal} strokeWidth="5" />
      <path d="M48 152h144" {...S} stroke={C.ink} strokeWidth="5" opacity="0.25" />
      <rect x="106" y="116" width="28" height="36" rx="4" fill={C.white} stroke={C.teal} strokeWidth="4" />
      <g fill={C.white}>
        <rect x="80" y="72" width="18" height="18" rx="3" /><rect x="142" y="72" width="18" height="18" rx="3" />
        <rect x="80" y="98" width="18" height="14" rx="3" /><rect x="142" y="98" width="18" height="14" rx="3" />
      </g>
      <path d="M120 40v14M120 40h16l-4 5 4 5h-16" {...S} fill={C.pinkL} stroke={C.pink} strokeWidth="3" />
    </g>
  );
}
function House() {
  return (
    <g>
      <path d="M60 100l60-46 60 46" {...S} stroke={C.teal} strokeWidth="6" />
      <path d="M74 92v60h92V92" {...S} fill={C.tealL} stroke={C.teal} strokeWidth="5" />
      <path d="M44 152h152" {...S} stroke={C.ink} strokeWidth="5" opacity="0.25" />
      <path d="M120 116c5-9 20-8 22 3 2 10-12 18-22 26-10-8-24-16-22-26 2-11 17-12 22-3Z" {...S} fill={C.pinkL} stroke={C.pink} strokeWidth="4" />
    </g>
  );
}
function TwoPeople() {
  return (
    <g>
      <circle cx="92" cy="68" r="18" fill={C.tealL} stroke={C.teal} strokeWidth="5" />
      <path d="M64 142c0-20 12-34 28-34s28 14 28 34" {...S} stroke={C.teal} strokeWidth="6" />
      <circle cx="156" cy="74" r="16" fill={C.pinkL} stroke={C.pink} strokeWidth="5" />
      <path d="M132 142c0-18 10-30 24-30s24 12 24 30" {...S} stroke={C.pink} strokeWidth="6" />
    </g>
  );
}
function HeartHands() {
  return (
    <g>
      <path d="M120 70c8-14 32-12 36 4 4 16-18 30-36 42-18-12-40-26-36-42 4-16 28-18 36-4Z" {...S} fill={C.pinkL} stroke={C.pink} strokeWidth="5" />
      <path d="M64 150c2-22 16-30 30-28M176 150c-2-22-16-30-30-28" {...S} stroke={C.teal} strokeWidth="6" />
      <path d="M58 150h28M154 150h28" {...S} stroke={C.teal} strokeWidth="6" />
    </g>
  );
}
function Chat() {
  return (
    <g>
      <path d="M44 56h84a12 12 0 0 1 12 12v28a12 12 0 0 1-12 12H78l-18 16v-16h-16a12 12 0 0 1-12-12V68a12 12 0 0 1 12-12Z" fill={C.tealL} stroke={C.teal} strokeWidth="5" />
      <path d="M60 78h52M60 90h36" {...S} stroke={C.teal} strokeWidth="4" />
      <path d="M196 92h-44a12 12 0 0 0-12 12v18a12 12 0 0 0 12 12h6v12l14-12h24a12 12 0 0 0 12-12v-18a12 12 0 0 0-12-12Z" fill={C.pinkL} stroke={C.pink} strokeWidth="5" />
      <path d="M156 112h28" {...S} stroke={C.pink} strokeWidth="4" />
    </g>
  );
}
function Magnifier() {
  return (
    <g>
      <rect x="58" y="46" width="86" height="108" rx="10" fill={C.white} stroke={C.teal} strokeWidth="5" />
      <path d="M74 70h54M74 88h54M74 106h36" {...S} stroke={C.ink} strokeWidth="4" opacity="0.4" />
      <circle cx="146" cy="116" r="28" fill={C.pinkL} fillOpacity="0.5" stroke={C.pink} strokeWidth="6" />
      <path d="M166 136l20 20" {...S} stroke={C.pink} strokeWidth="8" />
    </g>
  );
}
function Tasks() {
  return (
    <g>
      <rect x="58" y="48" width="92" height="30" rx="8" fill={C.tealL} stroke={C.teal} strokeWidth="5" />
      <rect x="72" y="86" width="92" height="30" rx="8" fill={C.pinkL} stroke={C.pink} strokeWidth="5" />
      <rect x="86" y="124" width="92" height="30" rx="8" fill={C.warmL} stroke={C.warm} strokeWidth="5" />
      <path d="M68 63l5 5 8-10M82 101l5 5 8-10M96 139l5 5 8-10" {...S} stroke={C.ink} strokeWidth="4" opacity="0.55" />
    </g>
  );
}
function Clock() {
  return (
    <g>
      <circle cx="120" cy="96" r="54" fill={C.white} stroke={C.teal} strokeWidth="6" />
      <circle cx="120" cy="96" r="54" fill="none" stroke={C.tealL} strokeWidth="6" strokeDasharray="4 16" />
      <path d="M120 64v32l22 14" {...S} stroke={C.pink} strokeWidth="6" />
      <circle cx="120" cy="96" r="5" fill={C.teal} />
    </g>
  );
}
function Moon() {
  return (
    <g>
      <path d="M150 50a52 52 0 1 0 0 90 42 42 0 0 1 0-90Z" {...S} fill={C.tealL} stroke={C.teal} strokeWidth="5" />
      <path d="M168 56l3 8 8 3-8 3-3 8-3-8-8-3 8-3 3-8Z" fill={C.warm} />
      <circle cx="186" cy="104" r="4" fill={C.pink} />
      <circle cx="172" cy="128" r="3" fill={C.warm} />
    </g>
  );
}

const motifs: Record<IllustName, () => JSX.Element> = {
  laptop: Laptop,
  mail: Mail,
  clipboard: Clipboard,
  calendar: Calendar,
  wallet: Wallet,
  door: Door,
  compass: Compass,
  building: Building,
  house: House,
  "two-people": TwoPeople,
  "heart-hands": HeartHands,
  chat: Chat,
  magnifier: Magnifier,
  tasks: Tasks,
  clock: Clock,
  moon: Moon,
};

export function Illustration({
  name,
  className = "h-full w-full",
  title,
}: {
  name: IllustName;
  className?: string;
  title?: string;
}) {
  const Motif = motifs[name] ?? Clipboard;
  return (
    <svg
      viewBox="0 0 240 180"
      className={className}
      role="img"
      aria-label={title ?? "イラスト"}
      preserveAspectRatio="xMidYMid meet"
    >
      {title ? <title>{title}</title> : null}
      <Motif />
    </svg>
  );
}
