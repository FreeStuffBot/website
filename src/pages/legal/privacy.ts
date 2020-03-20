import Vue from 'vue'
import App from './Base.vue'

import data from "@/assets/content/legal/privacy.md";


Vue.config.productionTip = false

new Vue({
  render: h => h(App, {
    props: {
      title: 'Privacy Policy',
      category: 'Tude',
      content: data
    }
  }),
}).$mount('#app')
