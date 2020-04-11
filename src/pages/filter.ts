import Vue from 'vue'
import Filter from './Filter.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Filter),
}).$mount('#app')
