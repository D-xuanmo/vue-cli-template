const widget = {
  state: {
    loading: {
      show: false,
      text: '加载中...',
      time: 0,
      mask: true,
      center: true,
      zIndex: 999
    },
    toast: {
      show: false,
      text: '',
      mask: true,
      time: 2000,
      zIndex: 999
    }
  },

  mutations: {
    showLoading (state, config) {
      state.loading = {
        ...state.loading,
        ...config
      }
    },

    hideLoading (state) {
      state.loading.show = false
    },

    showToast (state, config) {
      state.toast = {
        ...state.toast,
        ...config
      }
    },

    hideToast (state) {
      state.toast.show = false
    }
  },

  actions: {
    showLoading ({ commit }, config) {
      let loadingConfig = { show: true }
      if (config && config.text) loadingConfig.text = config.text
      commit('showLoading', loadingConfig)
    },

    hideLoading ({ commit }) {
      commit('hideLoading')
    },

    showToast ({ state, commit }, config) {
      let toastConfig = { show: true }
      if (typeof config === 'string') {
        toastConfig.text = config
      } else if (typeof config === 'object') {
        toastConfig = config
      } else {
        throw Error('"toast"传入参数类型错误')
      }
      commit('showToast', toastConfig)

      // 隐藏
      setTimeout(() => commit('hideToast'), state.toast.time)
    }
  }
}

export default widget
