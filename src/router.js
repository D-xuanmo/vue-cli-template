import Vue from 'vue'
import Router from 'vue-router'
import Test from './pages/test'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.VUE_APP_BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/test'
    },
    Test
  ]
})

// 路由全局拦截-进入页面前
router.beforeEach((to, from, next) => {
  to.meta.isShowLoading && window.common.showLoading()
  next()

  // 设置页面标题
  document.title = to.meta.title || 'vue-cli 3.x'
})

export default router
