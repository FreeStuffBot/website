import Vue from 'vue'
import Troubleshooting from './Troubleshooting.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Troubleshooting),
}).$mount('#app')
