/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        tomato: "hsl(4, 100%, 67%)",
        grey: {
          "100": "hsl(234, 29%, 20%)",
          "200": "hsl(235, 18%, 26%)",
          "300": "hsl(231, 7%, 60%)"
        }
      }
    }
  },
  plugins: [],
}
