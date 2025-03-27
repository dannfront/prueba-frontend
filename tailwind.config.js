/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "yellowPrimary": "#FFD61B",
        "yellowObjetivo": "#FFF8D9",
        "grayPrimary": "#434142",
        "graySecondary": "#0000000D",
        "grayLabel": "#868589",
        "grayText": "##8E8D8D",
      }
    },
  },
  plugins: [],
}