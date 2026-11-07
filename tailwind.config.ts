import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: "#fdf2f4",
          100: "#fce7ea",
          200: "#f8d2d9",
          300: "#f2adba",
          400: "#e97e93",
          500: "#db506e",
          600: "#c53054",
          700: "#9E1B3B",
          800: "#6B1126",
          900: "#4A0E17",
          950: "#2B060C",
        },
        gold: {
          50: "#fbf8eb",
          100: "#f6eecb",
          200: "#eedc9a",
          300: "#e4c460",
          400: "#D4AF37",
          500: "#C5A059",
          600: "#aa7c2c",
          700: "#885c24",
          800: "#724b24",
          900: "#623f23",
          950: "#382010",
        },
        parchment: {
          50: "#FCF9F4",
          100: "#F7F1E5",
          200: "#EFE4CE",
          300: "#E3D1AE",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "Times", "serif"],
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        gold: "0 4px 20px -2px rgba(212, 175, 55, 0.25)",
        "gold-lg": "0 10px 30px -5px rgba(212, 175, 55, 0.35)",
        maroon: "0 10px 30px -5px rgba(74, 14, 23, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
