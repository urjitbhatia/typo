/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "content/**/*.md",
    "./hugo_stats.json",
    "./assets/css/*.css",
    "./../../assets/css/*.css",
  ],

  theme: {
    extend: {},
  },
  plugins: [],
};
