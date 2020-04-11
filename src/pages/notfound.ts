import Vue from 'vue'
import Notfound from './Notfound.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Notfound),
}).$mount('#app')
