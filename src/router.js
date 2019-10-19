import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

Vue.use(Router)

// 遍历所有路由
const requireAll = requireContext => requireContext.keys().map(requireContext)
const routerFile = require.context('@/pages', true, /\.router\.js/)
let routerArr = []
requireAll(routerFile).map(item => {
  Array.isArray(item.default) ? item.default.map(item => routerArr.push(item)) : routerArr.push(item.default)
})

const router = new Router({
  mode: 'history',
  base: process.env.VUE_APP_BASE_URL,
  routes: [
    ...routerArr
  ]
})

// 路由全局拦截-进入页面前
router.beforeEach((to, from, next) => {
  to.meta.isShowLoading && window.common.showLoading()
  if (!store.state.authen.token && to.name !== 'Login') {
    next({ name: 'Login' })
  } else {
    next()
  }

  // 设置页面标题
  document.title = to.meta.title || 'vue-cli 3.x'
})

export default router
