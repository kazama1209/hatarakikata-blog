import { Illustration } from "../Illustration";
import type { IllustName } from "@/lib/motifs";

/**
 * 記事本文中に挿入する図版（自作SVGイラスト＋任意キャプション）。
 * MDXから <Illust name="syringe" caption="採血は“触れる血管”を選ぶ" /> のように使う。
 * align="center"(既定) は中央の帯、align="right"/"left" は本文に回り込む小さめ配置。
 */
export function Illust({
  name,
  caption,
  align = "center",
  tone = "teal",
}: {
  name: IllustName;
  caption?: string;
  align?: "center" | "left" | "right";
  tone?: "teal" | "pink" | "warm" | "violet";
}) {
  const tones: Record<string, string> = {
    teal: "bg-brand-light/30",
    pink: "bg-rose-50/50",
    warm: "bg-amber-50/50",
    violet: "bg-sky-50/50",
  };

  if (align !== "center") {
    const float = align === "right" ? "sm:float-right sm:ml-6" : "sm:float-left sm:mr-6";
    return (
      <figure className={`not-prose my-5 w-full sm:w-56 ${float} mb-5`}>
        <div className={`flex aspect-[4/3] items-center justify-center rounded-xl ${tones[tone]} p-4`}>
          <Illustration name={name} title={caption} className="h-full w-full" />
        </div>
        {caption && (
          <figcaption className="mt-3 text-center text-xs font-light text-ink/45">{caption}</figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure className="not-prose my-10">
      <div className={`flex items-center justify-center rounded-xl ${tones[tone]} p-8`}>
        <div className="aspect-[5/3] w-full max-w-sm">
          <Illustration name={name} title={caption} className="h-full w-full" />
        </div>
      </div>
      {caption && (
        <figcaption className="mt-4 text-center text-sm font-light text-ink/45">{caption}</figcaption>
      )}
    </figure>
  );
}
