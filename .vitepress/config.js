import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "Zach Watkins",
  titleTemplate: ":title - Zach Watkins",
  description: "Solve the problem, then write the code.",
  head: [
    ['meta', { name: 'author', content: 'Zachary K. Watkins' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap'}]
  ],
  themeConfig: {
    author: "Zachary K. Watkins",
    date: {
      copyrightYears: 2024 === new Date().getFullYear() ? '2024' : `2024 - ${new Date().getFullYear()}`,
    },
    nav: [
      { text: 'Articles', link: '/articles' },
      { text: 'Work', link: '/work' },
      { text: 'Demos', link: '/demos' },
      { text: 'Contact', link: '/contact' },
    ],
    footerNav: [
      { text: 'Privacy Policy', link: '/privacy' },
    ],
    social: [
      { text: 'GitHub', link: 'https://github.com/zachwatkins/' },
      { text: 'X', link: 'https://x.com/zachtypedit' },
      { text: 'LinkedIn', link: 'https://www.linkedin.com/in/zacharykwatkins/' },
      { text: 'Email', link: 'mailto:watkinza@gmail.com' },
    ],
  },
})