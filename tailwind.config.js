/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
        'comfortaa': ['Comfortaa'],
     },
      screens: {
        '2md': '1600px',
        'wd': '3440px',
      },
    },
  },
  plugins: [],
}

