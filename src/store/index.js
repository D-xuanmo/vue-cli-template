import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import widget from './modules/widget'
import authen from './modules/authen'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    widget,
    authen
  },
  getters
})
