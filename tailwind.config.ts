import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        ash: "#111111",
        graphite: "#1C1C1C",
        charcoal: "#2A2A2A",
        steel: "#4C4C4C",
        silver: "#8A8A82",
        fog: "#C8C4BC",
        warm: "#F2EDE4",
        cream: "#FDFAF5",
        ember: {
          DEFAULT: "#D3B03A",
          deep: "#A68A2D",
          glow: "#E4C761",
        },
        gold: {
          DEFAULT: "#D3B03A",
          pale: "#F6EDD0",
        },
        teal: {
          DEFAULT: "#0C4A42",
          mid: "#186B5F",
          pale: "#E0F0EE",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": [
          "clamp(38px,5.5vw,64px)",
          { lineHeight: "1.05", letterSpacing: "-0.02em" },
        ],
        "display-lg": [
          "clamp(30px,4vw,52px)",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
        "display-md": [
          "clamp(24px,3vw,38px)",
          { lineHeight: "1.15", letterSpacing: "-0.015em" },
        ],
        "display-sm": [
          "clamp(20px,2.5vw,28px)",
          { lineHeight: "1.25", letterSpacing: "-0.01em" },
        ],
        "body-lg": ["15px", { lineHeight: "1.8" }],
        "body-md": ["14px", { lineHeight: "1.75" }],
        "body-sm": ["13px", { lineHeight: "1.7" }],
        caption: ["11px", { lineHeight: "1.6", letterSpacing: "0.04em" }],
        label: ["10px", { lineHeight: "1", letterSpacing: "0.14em" }],
      },
      spacing: {
        section: "clamp(56px,8vw,100px)",
      },
      maxWidth: {
        container: "1240px",
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.16,1,0.3,1) both",
        "fade-in": "fade-in 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "rec-blink": "rec-blink 1.4s ease-in-out infinite",
        grain: "grain 0.5s steps(2) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "rec-blink": {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.15" },
        },
        grain: {
          "0%,100%": { backgroundPosition: "0 0" },
          "25%": { backgroundPosition: "-5% -10%" },
          "50%": { backgroundPosition: "-15% 5%" },
          "75%": { backgroundPosition: "-7% -15%" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16,1,0.3,1)",
      },
      backgroundImage: {
        "radial-ember":
          "radial-gradient(circle, rgba(211,176,58,0.12) 0%, transparent 70%)",
        "radial-gold":
          "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)",
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
        "hatch-pattern":
          "repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(255,255,255,0.012) 40px, rgba(255,255,255,0.012) 41px)",
      },
    },
  },
  plugins: [],
};

export default config
