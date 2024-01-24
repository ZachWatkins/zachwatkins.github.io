/** @type {import('tailwindcss').Config} */
export default {
  content: ['./.vitepress/**/*.js', './.vitepress/**/*.vue'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  safelist: ['md:float-left', 'md:mr-8', 'md:mb-4'],
}
