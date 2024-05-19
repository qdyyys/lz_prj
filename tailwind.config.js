/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "rgb(102, 188, 199)",
        customDarkBlue: "rgb(85, 228, 247)",
      },
      dropShadow: {
        "3xl": "0 0px 15px rgba(85, 228, 247, 0.462)",
      },
    },
  },
  plugins: [],
};
