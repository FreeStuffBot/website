
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
      { hid: 'description', name: 'description', hid: 'description', content: 'A highly customizeable discord bot that sends news about free games right into your server. Supports every major platform, many filter options and customizeable appearance!' },
      { hid: 'keywords', name: 'keywords', hid: 'keywords', content: 'discord, free, games, bot, free stuff, free stuff bot, freestuff bot, customizable, stuff, freestuff, freestuffbot' },
      { hid: 'theme-color', name: 'theme-color', content: '#cd4fd1', id: 'metacolor' },
      { hid: 'application-name', name: 'application-name', content: 'FreeStuff Bot', id: 'metaname' },
      { hid: 'robots', name: 'robots', content: 'index, follow' },
      { hid: 'image', name: 'image', content: 'https://freestuffbot.xyz/icons/180.png' },
      { hid: 'author', name: 'author', content: 'Andreas May' },
      { hid: 'publisher', name: 'publisher', content: 'Tude' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'FreeStuff Bot' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'A highly customizeable discord bot that sends news about free games right into your server. Supports every major platform, many filter options and customizeable appearance!' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@tudeteam' },
      { hid: 'twitter:creator', name: 'twitter:creator', content: '@maanex_' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://freestuffbot.xyz/' },
      { hid: 'og:title', property: 'og:title', content: 'FreeStuff Bot' },
      { hid: 'og:description', property: 'og:description', content: 'A highly customizeable discord bot that sends news about free games right into your server. Supports every major platform, many filter options and customizeable appearance!' },
      { hid: 'og:image', property: 'og:image', content: 'https://freestuffbot.xyz/icons/180.png' },
      { hid: 'og:image:type', property: 'og:image:type', content: 'image/png' },
      { hid: 'og:image:width', property: 'og:image:width', content: '180' },
      { hid: 'og:image:height', property: 'og:image:height', content: '180' },
      { hid: 'og:image:alt', property: 'og:image:alt', content: 'FreeStuff Bot Logo' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'FreeStuff Bot' },
      { hid: 'og:locale', property: 'og:locale', content: 'en_US' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-title', content: '@freestuff/website' },
    ],
    metaInfo: {
      script: [
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "url": "https://freestuffbot.xyz/",
          "logo": "https://freestuffbot.xyz/assets/img/icon_round.png"
        }
      ]
    },
    link: [
      { hid: 'icon', rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { hid: 'icon16', rel: 'icon', type: 'image/png', href: '/assets/icons/16.png', sizes: '16x16' },
      { hid: 'icon32', rel: 'icon', type: 'image/png', href: '/assets/icons/32.png', sizes: '32x32' },
      { hid: 'icon96', rel: 'icon', type: 'image/png', href: '/assets/icons/96.png', sizes: '96x96' },
      { hid: 'icon180', rel: 'icon', type: 'image/png', href: '/assets/icons/180.png', sizes: '180x180' }
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
    '@nuxtjs/markdownit',
    '@nuxtjs/axios'
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
      /^\/telegram/,
      /^\/about/,
      /^\/legal/,
      /^\/game/,
    ]
  }
}
