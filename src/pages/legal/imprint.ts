import Vue from 'vue'
import App from './Base.vue'

import data from "@/assets/content/legal/imprint.md";


Vue.config.productionTip = false

new Vue({
  render: h => h(App, {
    props: {
      title: 'Imprint',
      category: 'Tude',
      content: data
    }
  }),
}).$mount('#app')
