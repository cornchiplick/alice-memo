import type {Config} from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        alice: {
          100: "#F8F9FF",
          200: "#919EAB",
          300: "#2F2559",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
