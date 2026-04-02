/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Tahoma", "'MS Sans Serif'", "Arial", "sans-serif"],
      },
      colors: {
        win: {
          silver: "#d4d0c8",
          dark: "#808080",
          light: "#ffffff",
          shadow: "#404040",
          desktop: "#008080",
          navy: "#000080",
          blue: "#1084d0",
        },
      },
    },
  },
  plugins: [],
};
