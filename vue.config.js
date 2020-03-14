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
    freestuff: {
      entry: 'src/pages/freestuff/index.ts',
      template: 'public/index.html',
      filename: 'freestuff/index.html',
      title: 'Free Stuff - Tude'
    },
    'freestuff/about': {
      entry: 'src/pages/freestuff/aboutCallback.ts',
      template: 'public/index.html',
      filename: 'freestuff/about.html',
      title: 'About Free Stuff - Tude'
    },
    'freestuff/callback': {
      entry: 'src/pages/freestuff/aboutCallback.ts',
      template: 'public/index.html',
      filename: 'freestuff/callback.html',
      title: 'Thank you for using the Free Stuff Bot! - Tude'
    },
    'freestuff/testgame': {
      entry: 'src/pages/freestuff/testgame.ts',
      template: 'public/index.html',
      filename: 'freestuff/testgame.html',
      title: 'Example Game - Tude'
    },
    'freestuff/themes': {
      entry: 'src/pages/freestuff/themes.ts',
      template: 'public/index.html',
      filename: 'freestuff/themes.html',
      title: 'Free Stuff Themes - Tude'
    },
    // subpage: 'src/pages/index/main.ts'
  }
}