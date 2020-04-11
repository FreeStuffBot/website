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
      title: 'Free Stuff - Tude',
      pagename: 'FreeStuff • Tude',
      pagedesc: 'An easy way to get informed about all the free games out there'
    },
    about: {
      entry: 'src/pages/aboutCallback.ts',
      template: 'public/index.html',
      filename: 'about/index.html',
      title: 'About Free Stuff - Tude',
      pagename: 'FreeStuff • Tude',
      pagedesc: 'An easy way to get informed about all the free games out there'
    },
    callback: {
      entry: 'src/pages/aboutCallback.ts',
      template: 'public/index.html',
      filename: 'callback/index.html',
      title: 'Thank you for using the Free Stuff Bot! - Tude',
      pagename: 'FreeStuff • Tude',
      pagedesc: 'An easy way to get informed about all the free games out there'
    },
    testgame: {
      entry: 'src/pages/testgame.ts',
      template: 'public/index.html',
      filename: 'testgame/index.html',
      title: 'Example Game - Tude',
      pagename: 'FreeStuff • Tude',
      pagedesc: 'An easy way to get informed about all the free games out there'
    },
    themes: {
      entry: 'src/pages/themes.ts',
      template: 'public/index.html',
      filename: 'themes/index.html',
      title: 'Free Stuff Themes - Tude',
      pagename: 'FreeStuff • Tude',
      pagedesc: 'An easy way to get informed about all the free games out there'
    },
    notfound: {
      entry: 'src/pages/notfound.ts',
      template: 'public/index.html',
      filename: 'notfound/index.html',
      title: 'Game Not Found - Tude',
      pagename: 'FreeStuff • Tude',
      pagedesc: 'An easy way to get informed about all the free games out there'
    },
    troubleshooting: {
      entry: 'src/pages/troubleshooting.ts',
      template: 'public/index.html',
      filename: 'troubleshooting/index.html',
      title: 'FreeStuff Bot Troubleshooting - Tude',
      pagename: 'FreeStuff • Tude',
      pagedesc: 'An easy way to get informed about all the free games out there'
    },
    filter: {
      entry: 'src/pages/filter.ts',
      template: 'public/index.html',
      filename: 'filter/index.html',
      title: 'FreeStuff Content Filter - Tude',
      pagename: 'FreeStuff • Tude',
      pagedesc: 'An easy way to get informed about all the free games out there'
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