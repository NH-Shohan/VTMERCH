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
        primary: "var(--primary)",
        black: "var(--black)",
        "black-background": "var(--black-background)",
        white: "var(--white)",
        "white-background": "var(--white-background)",
        gray: "var(--gray)",
      },
    },
  },
  plugins: [],
};
