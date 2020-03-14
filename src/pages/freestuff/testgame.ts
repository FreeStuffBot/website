import Vue from 'vue'
import Testgame from './Testgame.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Testgame),
}).$mount('#app')
