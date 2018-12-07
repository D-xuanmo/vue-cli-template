import Vue from 'vue'
import Router from 'vue-router'
import Test from './pages/test'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.VUE_APP_BASE_URL,
  routes: [
    Test
  ]
})

export default router
