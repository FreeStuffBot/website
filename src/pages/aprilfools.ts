import Vue from 'vue'
import AprilFools from './AprilFools.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(AprilFools),
}).$mount('#app')
