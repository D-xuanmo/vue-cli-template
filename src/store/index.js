import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import widget from './modules/widget'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    widget
  },
  getters
})
