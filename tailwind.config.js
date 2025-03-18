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
        'md2': '820px',
      },
    },
  },
  plugins: [],
}

