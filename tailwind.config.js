/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: ["selector", '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        mainColor: "#23E148",
        facebook: "#1877f2",
        instagram: "#f56040",
        google: "#fbbc05",
        lightColor: "#eaeaea",
        light2Color: "#eee",
        light3Color: "#cfcfcf",
        darkColor: "#050510",
        dark2Color: "#151520",
        dark3Color: "#303035",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        autoFit: "repeat(auto-fit, minmax(200px, 1fr))",
        autoFill: "repeat(auto-fill, minmax(200px, 1fr))",

        // Complex site-specific column configuration
        footer: "200px minmax(900px, 1fr) 100px",
      },
    },
  },
};
