import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#07111f",
        foreground: "#f6f9fc",
        surface: "#0c1a2d",
        surfaceSoft: "#10233e",
        line: "rgba(255,255,255,0.12)",
        muted: "#a7b5c9",
        brand: {
          50: "#e8f1fb",
          100: "#d7e8fb",
          200: "#afcff7",
          300: "#83b5f4",
          400: "#579cf1",
          500: "#2d83ed",
          600: "#1764c1",
          700: "#10498d",
          800: "#0b3260",
          900: "#081f3c"
        }
      },
      boxShadow: {
        premium: "0 18px 60px rgba(3, 10, 24, 0.32)",
        glow: "0 0 0 1px rgba(120, 177, 255, 0.25), 0 14px 40px rgba(11, 34, 70, 0.42)"
      },
      borderRadius: {
        "4xl": "2rem"
      },
      backgroundImage: {
        "radial-grid": "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)"
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        pulseSoft: "pulseSoft 2.8s ease-in-out infinite",
        floatSlow: "floatSlow 8s ease-in-out infinite",
        shine: "shine 2.8s linear infinite"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" }
        },
        pulseSoft: {
          "0%,100%": { transform: "scale(1)", opacity: "0.7" },
          "50%": { transform: "scale(1.06)", opacity: "1" }
        },
        floatSlow: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        },
        shine: {
          "0%": { transform: "translateX(-120%) rotate(18deg)" },
          "100%": { transform: "translateX(320%) rotate(18deg)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
