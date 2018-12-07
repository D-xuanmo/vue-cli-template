import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './cube-ui'
import * as utils from '@/utils'

Vue.config.productionTip = false

window.common = {
  showLoading: utils.showLoading,
  hideLoading: utils.hideLoading,
  showToast: utils.showToast,
  hideToast: utils.hideToast
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
