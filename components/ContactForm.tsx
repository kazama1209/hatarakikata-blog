"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

/** Formspree へ送信する問い合わせフォーム。formId 未設定時は親がメール表示にフォールバックする。 */
export function ContactForm({ formId }: { formId: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const endpoint = `https://formspree.io/f/${formId}`;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border-y border-[var(--hairline)] p-10 text-center">
        <p className="eyebrow mb-4">Thank you</p>
        <h2 className="font-display text-xl font-light text-ink">送信しました</h2>
        <p className="mt-3 text-sm font-light leading-loose text-ink/55">
          お問い合わせありがとうございます。内容を確認のうえ、必要に応じてご連絡いたします。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 border-t border-[var(--hairline)] pt-8">
      <div>
        <label htmlFor="name" className="mb-2 block text-xs font-normal uppercase tracking-[0.14em] text-ink/60">
          お名前（ニックネーム可）
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full rounded-md border border-[var(--hairline)] bg-white/60 px-4 py-2.5 text-sm font-light outline-none transition-colors focus:border-brand"
          placeholder="山田 花子"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-xs font-normal uppercase tracking-[0.14em] text-ink/60">
          メールアドレス
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-md border border-[var(--hairline)] bg-white/60 px-4 py-2.5 text-sm font-light outline-none transition-colors focus:border-brand"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-normal uppercase tracking-[0.14em] text-ink/60">
          お問い合わせ内容
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full rounded-md border border-[var(--hairline)] bg-white/60 px-4 py-2.5 text-sm font-light outline-none transition-colors focus:border-brand"
          placeholder="ご意見・ご指摘・掲載に関するご相談など"
        />
      </div>

      {status === "error" && (
        <p className="rounded-md border border-rose-200 bg-rose-50/70 px-4 py-2.5 text-sm font-light text-rose-700">
          送信に失敗しました。お手数ですが時間をおいて再度お試しください。
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-line w-full disabled:opacity-60"
      >
        {status === "submitting" ? "送信中…" : "送信する"}
      </button>
      <p className="text-center text-xs font-light text-ink/40">
        送信いただいた情報はお問い合わせ対応にのみ利用します（
        <a href="/privacy-policy" className="underline">プライバシーポリシー</a>）。
      </p>
    </form>
  );
}
