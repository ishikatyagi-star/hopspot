import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hopspot: {
          bg: "#05070c",
          card: "#0b1020",
          border: "rgba(255,255,255,0.08)",
          muted: "rgba(255,255,255,0.65)",
          accent: "#22c55e",
          gold: "#f5b942",
        },
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee var(--marquee-duration, 40s) linear infinite",
      },
      boxShadow: {
        soft: "0 20px 40px rgba(0,0,0,0.35)",
      },
    },
  },
  plugins: [],
} satisfies Config;

