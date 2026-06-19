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
      },
      maxWidth: {
        prose: "720px",
      },
      typography: () => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": "#3a3833",
            "--tw-prose-headings": "#4f7059",
            "--tw-prose-links": "#6f9479",
            maxWidth: "none",
            fontSize: "1.0625rem",
            lineHeight: "1.9",
            h2: {
              marginTop: "2.4em",
              borderLeft: "5px solid #6f9479",
              paddingLeft: "0.6em",
              lineHeight: "1.5",
            },
            h3: { marginTop: "1.8em" },
            a: { textUnderlineOffset: "3px" },
            "ul > li::marker": { color: "#6f9479" },
            blockquote: {
              borderLeftColor: "#ef9e76",
              backgroundColor: "#fff6f0",
              fontStyle: "normal",
              padding: "0.6em 1em",
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};

export default config;
