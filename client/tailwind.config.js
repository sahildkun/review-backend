/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}'],
  plugins: [require('daisyui')],
  theme: {extend: {}},
  daisyui: {
    themes: ['winter', 'night']
  },
  darkMode: ['class', '[data-theme="night"]']
}

