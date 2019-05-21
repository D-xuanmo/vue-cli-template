export default {
  path: '/test',
  name: 'Test',
  meta: { title: '测试页面', isShowLoading: false },
  component: () => import(/* webpackChunkName: "index" */ './main.vue')
}
