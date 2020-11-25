
export default {
  mode: 'universal',
  target: 'static',
  head: {
    title: 'FreeStuff' || process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE: edge' },
      { name: 'description', hid: 'description', content: 'A highly customizeable discord bot that sends news about free games right into your server. Supports every major platform, many filter options and customizeable appearance!' },
      { name: 'keywords', hid: 'keywords', content: 'discord, free, games, bot, customizeable, stuff, freestuff, freestuffbot' },
      { name: 'theme-color', content: '#cd4fd1', id: 'metacolor' },
      { name: 'application-name', content: 'FreeStuff Bot', id: 'metaname' },
      { name: 'robots', content: 'index, follow' },
      { name: 'image', content: 'https://freestuffbot.xyz/icons/180.png' },
      { name: 'author', content: 'Andreas May' },
      { name: 'publisher', content: 'Tude' },
      { 'data-hid': 'twitter:card', name: 'twitter:card', content: 'summary' },
      { 'data-hid': 'twitter:title', name: 'twitter:title', content: 'FreeStuff Bot' },
      { 'data-hid': 'twitter:description', name: 'twitter:description', content: 'A highly customizeable discord bot that sends news about free games right into your server. Supports every major platform, many filter options and customizeable appearance!' },
      { 'data-hid': 'twitter:site', name: 'twitter:site', content: '@tudeteam' },
      { 'data-hid': 'twitter:creator', name: 'twitter:creator', content: '@maanex_' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://freestuffbot.xyz/' },
      { property: 'og:title', content: 'FreeStuff Bot' },
      { property: 'og:description', content: 'A highly customizeable discord bot that sends news about free games right into your server. Supports every major platform, many filter options and customizeable appearance!' },
      { property: 'og:image', content: 'https://freestuffbot.xyz/icons/180.png' },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:image:width', content: '180' },
      { property: 'og:image:height', content: '180' },
      { property: 'og:image:alt', content: 'FreeStuff Bot Logo' },
      { property: 'og:site_name', content: 'FreeStuff Bot' },
      { property: 'og:locale', content: 'en_US' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-title', content: '@freestuff/website' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'icon', type: 'image/png', href: '/icons/16.png', sizes: '16x16' },
      { rel: 'icon', type: 'image/png', href: '/icons/32.png', sizes: '32x32' },
      { rel: 'icon', type: 'image/png', href: '/icons/96.png', sizes: '96x96' },
      { rel: 'icon', type: 'image/png', href: '/icons/180.png', sizes: '180x180' }
    ]
  },
  css: [
    // '@/assets/style/global.scss'
  ],
  plugins: [
  ],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/svg',
    '@nuxtjs/google-analytics'
  ],
  modules: [
    '@nuxtjs/markdownit'
  ],
  build: {
  },
  googleAnalytics: {
    id: 'UA-112300017-4'
  },
  generate: {
    exclude: [
      /^\/o\//,
      /^\/start/,
      /^\/invite/,
      /^\/discord/,
      /^\/about/,
      /^\/legal/,
      /^\/game/,
    ]
  }
}
