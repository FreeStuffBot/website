import Vue from 'vue'
import App from './Base.vue'

import data from "@/assets/content/legal/index.md";


Vue.config.productionTip = false

new Vue({
  render: h => h(App, {
    props: {
      title: 'Legal Information',
      category: '',
      content: data
    }
  }),
}).$mount('#app')
