/** @type {import('tailwindcss').Config} */
export default {
  content: ['./.vitepress/**/*.js', './.vitepress/**/*.vue'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        '1/3': '33.333333%',
        '2/5': '40%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  safelist: ['md:float-left', 'md:mr-8', 'md:mb-4', 'p-2', 'shrink', 'inline-block', 'border', 'border-b', 'border-t', 'border-r', 'text-center', 'break-words', 'box-content', 'relative', 'absolute'],
};
