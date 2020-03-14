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
      title: 'Index Page'
    },
    freestuff: {
      entry: 'src/pages/freestuff/main.ts',
      template: 'public/index.html',
      filename: 'freestuff/index.html',
      title: 'Free Stuff Page'
    },
    // subpage: 'src/pages/index/main.ts'
  }
}