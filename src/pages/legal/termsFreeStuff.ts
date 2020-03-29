import Vue from 'vue'
import App from './Base.vue'

import data from "@/assets/content/legal/freestuff/terms.md";


Vue.config.productionTip = false

new Vue({
  render: h => h(App, {
    props: {
      title: 'Terms Of Service',
      category: 'FreeStuff',
      content: data
    }
  }),
}).$mount('#app')
