export default {
  path: '/test',
  name: 'Test',
  meta: { title: '测试页面' },
  component: () => import(/* webpackChunkName: "index" */ './Main.vue')
}
