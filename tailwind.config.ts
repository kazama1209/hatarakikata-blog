import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#6f9479", // セージグリーン（落ち着き・成長・新しい一歩）
          dark: "#4f7059",
          light: "#e9f1ea",
        },
        accent: "#ef9e76", // ウォームアプリコット
        ink: "#3a3833", // ウォームチャコール
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "Hiragino Kaku Gothic ProN",
          "Hiragino Sans",
          "Meiryo",
          "sans-serif",
        ],
        display: [
          "var(--font-display)",
          "var(--font-sans)",
          "Hiragino Kaku Gothic ProN",
          "sans-serif",
        ],
      },
      maxWidth: {
        prose: "640px",
      },
      typography: () => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": "#3a3833",
            "--tw-prose-headings": "#3a3833",
            "--tw-prose-links": "#4f7059",
            maxWidth: "none",
            fontSize: "1.0625rem",
            lineHeight: "2.05",
            fontWeight: "300",
            h2: {
              marginTop: "2.8em",
              marginBottom: "0.9em",
              fontWeight: "500",
              fontSize: "1.4rem",
              letterSpacing: "0.01em",
              lineHeight: "1.5",
            },
            h3: { marginTop: "2em", fontWeight: "500", fontSize: "1.15rem" },
            a: { textUnderlineOffset: "4px", fontWeight: "400" },
            strong: { fontWeight: "500" },
            "ul > li::marker": { color: "#6f9479" },
            blockquote: {
              borderLeftColor: "#cbd6cb",
              fontStyle: "normal",
              fontWeight: "300",
              color: "#6b6a63",
              paddingLeft: "1.1em",
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};

export default config;
