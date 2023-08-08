/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "20%": { transform: "rotate(-25deg)" },
          "40%": { transform: "rotate(10deg)" },
          "60%": { transform: "rotate(-25deg)" },
          "80%": { transform: "rotate(10deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        "octo-arm": "wave 500ms ease-in-out infinite",
        "octo-arm-mobile": "wave 560ms ease-in-out infinite",
      },
      boxShadow: {
        card: "0 4px 6px rgba(0, 0, 0, 0.3)",
        "card-hover": "0 10px 20px rgba(0,0,0,.7)",
      },
    },
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
      serif: ["Raleway", "serif"],
    },
    colors: {
      white: "#fff",
      black: "#000",
      yellow: "#e9d5a1",
      "gray-dark": "#353239",
      body: "#212529",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
  },
  plugins: [],
};
