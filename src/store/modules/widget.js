const widget = {
  state: {
    loading: {
      show: false,
      text: '加载中...',
      background: 'rgba(0,0,0,0)',
      mask: true,
      zIndex: 9999
    },
    toast: {
      show: false,
      text: '',
      mask: true,
      duration: 2000,
      zIndex: 9999
    }
  },

  mutations: {
    showLoading (state, config) {
      state.loading = Object.assign({}, state.loading, config)
    },

    hideLoading (state) {
      state.loading.text = '加载中...'
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
      if (typeof config === 'string') {
        loadingConfig.text = config
      } else {
        loadingConfig = Object.assign({}, loadingConfig, config)
      }
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
        toastConfig = {
          ...toastConfig,
          ...config
        }
      } else {
        throw Error('"toast"传入参数类型错误')
      }
      commit('showToast', toastConfig)

      // 隐藏，传入时间为0时不隐藏
      state.toast.duration && setTimeout(() => commit('hideToast'), state.toast.duration)
    }
  }
}

export default widget
