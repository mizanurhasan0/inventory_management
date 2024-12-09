/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        green_light: "#F4F9F8",
        green_mid: "#9DBBBA",
        green_base: "#356C6C",
        green_deep: "#8AADAD",
        gray_deep: "#5E545C",
        gray_light: "#fafafc",
        gray_base: "#776E67",
        blue_deep: "#233E67",
        orange_deep: "#DEB5B1",
      },
    },
  },
  plugins: [],
};
