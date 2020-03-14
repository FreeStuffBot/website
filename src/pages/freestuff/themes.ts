import Vue from 'vue'
import Themes from './Themes.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Themes),
}).$mount('#app')
