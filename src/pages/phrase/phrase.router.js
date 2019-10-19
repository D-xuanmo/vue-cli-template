export default {
  path: '/phrase',
  name: 'Phrase',
  meta: { title: '说说', isShowLoading: false },
  component: () => import(/* webpackChunkName: "phrase" */ './index.vue')
}
