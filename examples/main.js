import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import './plugins/vue2-g-npm-package-demo.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
