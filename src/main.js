import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './cube-ui'
import * as utils from '@/utils'

// 引入svg-icon组件
import './components/SvgIcon'

Vue.config.productionTip = false

// 全局方法
window.common = {
  showLoading: utils.showLoading,
  hideLoading: utils.hideLoading,
  showToast: utils.showToast,
  hideToast: utils.hideToast,
  showConfirm: utils.showConfirm
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
