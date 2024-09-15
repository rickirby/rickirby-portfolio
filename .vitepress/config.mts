import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ricki Bin Yamin",
  description: "iOS Engineer at Stockbit | Ex-Traveloka | Ex-DANA",
  srcDir: './src',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/profile-photo.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'Ricki Bin Yamin | Personal Portfolio Web Page' }],
    ['meta', { property: 'og:site_name', content: 'Ricki Bin Yamin Portfolio' }]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Portfolio', link: '/portfolio'},
      { text: 'Resume', link: '/resume' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        collapsed: false,
        items: [
          { text: 'Portfolio', link: '/portfolio' },
          { text: 'Resume', link: '/resume' }
        ]
      }
    ],

    logo: { 
      src: '/profile-photo.png', 
      width: 24, 
      height: 24
    },

    socialLinks: [
      { icon: 'linkedin', link: 'https://linkedin.com/in/rickirby18' },
      { icon: 'github', link: 'https://github.com/rickirby' }
    ],

    footer: {
      copyright: 'Copyright © 2024 Ricki Bin Yamin'
    }
  }
})
