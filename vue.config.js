module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/scss/_variables.scss";
          @import "@/scss/_fonts.scss";
          @import "@/scss/_easings.scss";
          @import "@/scss/_global.scss";
        `
      }
    }
  },
  pages: {
    index: {
      entry: 'src/pages/index.ts',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'FreeStuff Discord Bot',
      pagename: 'FreeStuff Discord Bot',
      pagedesc: 'A highly customizeable discord bot that sends news about free games right into your server. Supports every major platform, many filter options and customizeable appearance!'
    },
    about: {
      entry: 'src/pages/aboutCallback.ts',
      template: 'public/index.html',
      filename: 'about/index.html',
      title: 'About the FreeStuff Discord Bot',
      pagename: 'About the FreeStuff Discord Bot',
      pagedesc: 'A highly customizeable discord bot that sends news about free games right into your server. Supports every major platform, many filter options and customizeable appearance!'
    },
    callback: {
      entry: 'src/pages/aboutCallback.ts',
      template: 'public/index.html',
      filename: 'callback/index.html',
      title: 'Thank you for using the FreeStuff Bot!',
      pagename: 'FreeStuff Discord Bot',
      pagedesc: 'A highly customizeable discord bot that sends news about free games right into your server. Supports every major platform, many filter options and customizeable appearance!'
    },
    testgame: {
      entry: 'src/pages/testgame.ts',
      template: 'public/index.html',
      filename: 'testgame/index.html',
      title: 'FreeStuff Example Game',
      pagename: 'FreeStuff Example Game',
      pagedesc: 'A highly customizeable discord bot that sends news about free games right into your server. Supports every major platform, many filter options and customizeable appearance!'
    },
    themes: {
      entry: 'src/pages/themes.ts',
      template: 'public/index.html',
      filename: 'themes/index.html',
      title: 'FreeStuff Bot Themes',
      pagename: 'FreeStuff Bot Themes',
      pagedesc: 'A highly customizeable discord bot that sends news about free games right into your server. Supports every major platform, many filter options and customizeable appearance!'
    },
    notfound: {
      entry: 'src/pages/notfound.ts',
      template: 'public/index.html',
      filename: '404.html',
      title: 'FreeStuff 404',
      pagename: 'FreeStuff 404',
      pagedesc: 'A highly customizeable discord bot that sends news about free games right into your server. Supports every major platform, many filter options and customizeable appearance!'
    },
    troubleshooting: {
      entry: 'src/pages/troubleshooting.ts',
      template: 'public/index.html',
      filename: 'troubleshooting/index.html',
      title: 'FreeStuff Bot Troubleshooting',
      pagename: 'FreeStuff Bot Troubleshooting',
      pagedesc: 'A highly customizeable discord bot that sends news about free games right into your server. Supports every major platform, many filter options and customizeable appearance!'
    },
    filter: {
      entry: 'src/pages/filter.ts',
      template: 'public/index.html',
      filename: 'filter/index.html',
      title: 'FreeStuff Discord Bot',
      pagename: 'FreeStuff Discord Bot',
      pagedesc: 'A highly customizeable discord bot that sends news about free games right into your server. Supports every major platform, many filter options and customizeable appearance!'
    },
    'half-life-alyx-free': {
      entry: 'src/pages/aprilfools.ts',
      template: 'public/index.html',
      filename: 'half-life-alyx-free/index.html',
      title: 'Half Life Alyx Free For 3 Days',
      faviconname: 'favicon.png',
      pagename: 'Half Life Alyx Free For 3 Days',
      pagedesc: 'Steam April Sale, Half Life Alyx 100% off. Requires VR-Gear to play.'
    }
  }
}