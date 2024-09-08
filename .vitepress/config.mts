import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ricki Bin Yamin",
  description: "iOS Engineer at Stockbit | Ex-Traveloka | Ex-DANA",
  srcDir: './src',
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

    socialLinks: [
      { icon: 'github', link: 'https://github.com/rickirby' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/rickirby18' }
    ],

    footer: {
      copyright: 'Copyright © 2024 Ricki Bin Yamin'
    }
  }
})
