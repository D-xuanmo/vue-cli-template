import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as utils from '@/utils'

// 引入svg-icon组件
import './components/SvgIcon'

// 引入css
import './assets/scss/index.scss'

Vue.config.productionTip = false

// 全局方法
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
