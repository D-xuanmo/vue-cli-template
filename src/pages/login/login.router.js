export default {
  path: '/login',
  name: 'Login',
  meta: { title: '登录', isShowLoading: false },
  component: () => import(/* webpackChunkName: "index" */ './index.vue')
}
