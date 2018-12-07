export default {
  path: '/test',
  name: 'Test',
  meta: { title: '测试页面', isShowLoading: true },
  component: () => import(/* webpackChunkName: "index" */ './Main.vue')
}
