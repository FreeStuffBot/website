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
      entry: 'src/pages/index/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Tude'
    },
    notfound: {
      entry: 'src/pages/404/main.ts',
      template: 'public/index.html',
      filename: '404.html',
      title: '404 not found - Tude'
    },
    'freestuff': {
      entry: 'src/pages/freestuff/index.ts',
      template: 'public/index.html',
      filename: 'freestuff/index.html',
      title: 'Free Stuff - Tude',
      faviconname: 'favicon.freestuff.png',
      pagename: 'FreeStuff • Tude',
      pagedesc: 'An easy way to get informed about all the free games out there'
    },
    'freestuff/about': {
      entry: 'src/pages/freestuff/aboutCallback.ts',
      template: 'public/index.html',
      filename: 'freestuff/about/index.html',
      title: 'About Free Stuff - Tude',
      faviconname: 'favicon.freestuff.png',
      pagename: 'FreeStuff • Tude',
      pagedesc: 'An easy way to get informed about all the free games out there'
    },
    'freestuff/callback': {
      entry: 'src/pages/freestuff/aboutCallback.ts',
      template: 'public/index.html',
      filename: 'freestuff/callback/index.html',
      title: 'Thank you for using the Free Stuff Bot! - Tude',
      faviconname: 'favicon.freestuff.png',
      pagename: 'FreeStuff • Tude',
      pagedesc: 'An easy way to get informed about all the free games out there'
    },
    'freestuff/testgame': {
      entry: 'src/pages/freestuff/testgame.ts',
      template: 'public/index.html',
      filename: 'freestuff/testgame/index.html',
      title: 'Example Game - Tude',
      faviconname: 'favicon.freestuff.png',
      pagename: 'FreeStuff • Tude',
      pagedesc: 'An easy way to get informed about all the free games out there'
    },
    'freestuff/themes': {
      entry: 'src/pages/freestuff/themes.ts',
      template: 'public/index.html',
      filename: 'freestuff/themes/index.html',
      title: 'Free Stuff Themes - Tude',
      faviconname: 'favicon.freestuff.png',
      pagename: 'FreeStuff • Tude',
      pagedesc: 'An easy way to get informed about all the free games out there'
    },
    'freestuff/notfound': {
      entry: 'src/pages/freestuff/notfound.ts',
      template: 'public/index.html',
      filename: 'freestuff/notfound/index.html',
      title: 'Game Not Found - Tude',
      faviconname: 'favicon.freestuff.png',
      pagename: 'FreeStuff • Tude',
      pagedesc: 'An easy way to get informed about all the free games out there'
    },
    'freestuff/troubleshooting': {
      entry: 'src/pages/freestuff/troubleshooting.ts',
      template: 'public/index.html',
      filename: 'freestuff/troubleshooting/index.html',
      title: 'FreeStuff Bot Troubleshooting - Tude',
      faviconname: 'favicon.freestuff.png',
      pagename: 'FreeStuff • Tude',
      pagedesc: 'An easy way to get informed about all the free games out there'
    },
    'freestuff/filter': {
      entry: 'src/pages/freestuff/filter.ts',
      template: 'public/index.html',
      filename: 'freestuff/filter/index.html',
      title: 'FreeStuff Content Filter - Tude',
      faviconname: 'favicon.freestuff.png',
      pagename: 'FreeStuff • Tude',
      pagedesc: 'An easy way to get informed about all the free games out there'
    },
    'half-life-alyx-free': {
      entry: 'src/pages/freestuff/aprilfools.ts',
      template: 'public/index.html',
      filename: 'half-life-alyx-free/index.html',
      title: 'Half Life Alyx Free For 3 Days',
      faviconname: 'favicon.freestuff.png',
      pagename: 'Half Life Alyx Free For 3 Days',
      pagedesc: 'Steam April Sale, Half Life Alyx 100% off. Requires VR-Gear to play.'
    },
    'legal': {
      entry: 'src/pages/legal/index.ts',
      template: 'public/index.html',
      filename: 'legal/index.html',
      title: 'Legal - Tude'
    },
    'legal/imprint': {
      entry: 'src/pages/legal/imprint.ts',
      template: 'public/index.html',
      filename: 'legal/imprint/index.html',
      title: 'Tude Imprint'
    },
    'legal/terms': {
      entry: 'src/pages/legal/terms.ts',
      template: 'public/index.html',
      filename: 'legal/terms/index.html',
      title: 'Tude Terms of Service'
    },
    'legal/privacy': {
      entry: 'src/pages/legal/privacy.ts',
      template: 'public/index.html',
      filename: 'legal/privacy/index.html',
      title: 'Tude Privacy Policy'
    },
    'legal/privacy/linjo': {
      entry: 'src/pages/legal/privacyLinjo.ts',
      template: 'public/index.html',
      filename: 'legal/privacy/linjo/index.html',
      title: 'Linjo Privacy Policy'
    },
    'legal/terms/tudeapi': {
      entry: 'src/pages/legal/termsTudeapi.ts',
      template: 'public/index.html',
      filename: 'legal/terms/tudeapi/index.html',
      title: 'TudeAPI Terms of Service'
    },
    'legal/terms/freestuff': {
      entry: 'src/pages/legal/termsFreeStuff.ts',
      template: 'public/index.html',
      filename: 'legal/terms/freestuff/index.html',
      title: 'FreeStuff Terms of Service'
    },
    'legal/privacy/freestuff': {
      entry: 'src/pages/legal/privacyFreeStuff.ts',
      template: 'public/index.html',
      filename: 'legal/privacy/freestuff/index.html',
      title: 'FreeStuff Privacy Policy'
    },
    'about': {
      entry: 'src/pages/about/main.ts',
      template: 'public/index.html',
      filename: 'about/index.html',
      title: 'About Tude'
    },
    'club': {
      entry: 'src/pages/club/main.ts',
      template: 'public/index.html',
      filename: 'club/index.html',
      title: 'Tude Club'
    },
    // subpage: 'src/pages/index/main.ts'
  }
}