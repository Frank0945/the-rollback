import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      blue: "#34859D",
      black: "#000",
      white: "rgb(251, 250, 249)",
      yellow: "#F5EDBA",
      lightGreen: "#7EC4C1",
      green: "#647D34",
      darkGreen: "#323021",
      red: "#9D303B",
      pink: "#D26471",
      purple: "#3E2137",
      lightPurple: "#584563",
      superLightPurple: "rgb(184, 170, 176)",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      fontFamily: {
        AnonymousPro: ["Anonymous Pro", "serif"],
        PatrickHandSC: ["Patrick Hand SC", "serif"],
      },
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        blink: {
          "0%, 50%": { display: "unset" },
          "50%, 100%": { display: "none" },
        },
        fade: {
          "0%": { opacity: "0", pointerEvents: "none" },
          "100%": { opacity: "1", pointerEvents: "unset" },
        },
        bounceInUp: {
          "0%": { transform: "translateY(145%)", opacity: "0" },
          "35%": { transform: "translateY(-25%)" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        goDown: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(145%)", opacity: "0" },
        },
        upToDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        typingLine: "blink 1.2s infinite",
        fadeIn: "fade 3s forwards",
        fadeOut: "fade 3s reverse forwards",
        fadeInF: "fade 1.2s forwards",
        fadeOutF: "fade 1.2s reverse forwards",
        bounceInUp: "bounceInUp 1.2s cubic-bezier(0.25, 1.3, 0.5, 1) forwards",
        goDown: "goDown 1.2s forwards",
        upToDown: "upToDown 1.2s forwards",
      },
    },
  },
} satisfies Config;
