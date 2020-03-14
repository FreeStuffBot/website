import Vue from 'vue'
import AboutCallback from './AboutCallback.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(AboutCallback),
}).$mount('#app')
