export default {
  path: '/test',
  name: 'Test',
  component: () => import(/* webpackChunkName: "index" */ './Main.vue')
}
