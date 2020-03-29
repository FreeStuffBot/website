import Vue from 'vue'
import App from './Base.vue'

import data from "@/assets/content/legal/freestuff/privacy.md";


Vue.config.productionTip = false

new Vue({
  render: h => h(App, {
    props: {
      title: 'Privacy Policy',
      category: 'FreeStuff',
      content: data
    }
  }),
}).$mount('#app')
