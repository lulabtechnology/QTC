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
        background: "#f4f6f8",
        foreground: "#102033",
        surface: "#ffffff",
        surfaceSoft: "#edf2f6",
        line: "rgba(16,32,51,0.10)",
        muted: "#5f6f81",
        brand: {
          50: "#eef4f8",
          100: "#dce7ef",
          200: "#bccfdd",
          300: "#96b2c6",
          400: "#6e92af",
          500: "#456c8b",
          600: "#35546d",
          700: "#263d50",
          800: "#1a2b39",
          900: "#101d29"
        }
      },
      boxShadow: {
        premium: "0 18px 60px rgba(15, 23, 42, 0.08)",
        glow: "0 0 0 1px rgba(69, 108, 139, 0.10), 0 18px 48px rgba(15, 23, 42, 0.14)"
      },
      borderRadius: {
        "4xl": "2rem"
      },
      backgroundImage: {
        "radial-grid": "radial-gradient(circle at 1px 1px, rgba(16,32,51,0.08) 1px, transparent 0)"
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
