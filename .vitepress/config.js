import { defineConfig } from 'vitepress'
import pkg from '../package.json'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "Zach Watkins",
  titleTemplate: ":title - Zach Watkins",
  description: "Full stack developer with an art degree.",
  head: [
    ['meta', { name: 'author', content: 'Zachary K. Watkins' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap'}]
  ],
  themeConfig: {
    version: pkg.version,
    author: "Zachary K. Watkins",
    date: {
      copyrightYears: 2024 === new Date().getFullYear() ? '2024' : `2024 - ${new Date().getFullYear()}`,
    },
    nav: [
      { text: 'Blog', link: '/blog/' },
      { text: 'Career', link: '/career/' },
      { text: 'Portfolio', link: '/portfolio/' },
      { text: 'Resources', link: '/resources/' },
      { text: 'Contact', link: '/contact/' },
    ],
    footerNav: [
      { text: 'Blog', link: '/blog/' },
      { text: 'Portfolio', link: '/portfolio/' },
      { text: 'Resources', link: '/resources/' },
      { text: 'Contact', link: '/contact/' },
      { text: 'Privacy Policy', link: '/privacy/' },
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zachwatkins/' },
      { icon: 'x', link: 'https://x.com/zachtypedit' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/zacharykwatkins/' },
      { icon: 'email', link: 'mailto:watkinza@gmail.com' },
    ],
  },
})
