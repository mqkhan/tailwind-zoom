/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        li: ["Inter"],
        // h1: ["Inter"],
      },
      colors: {
        primary: "#FF6363",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
          400: "#9ca3af",
        },
        liColors: "#6b7280",
      },
    },
  },
  plugins: [],
};
