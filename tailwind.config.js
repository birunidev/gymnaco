/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6C5AEE",
        },
        warning: {
          DEFAULT: "#FDE401",
        },
      },
    },
  },
  plugins: [],
};
