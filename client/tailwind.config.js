/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    base:true,
    themes: ["light", "dark", "cupcake", "synthwave"],
  },
  plugins: [require("daisyui")],
}

