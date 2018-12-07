import { Dialog } from 'cube-ui'
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
    },
    confirm (config) {
      return Dialog.$create({
        type: 'confirm',
        icon: config.icon,
        title: config.title,
        content: config.content,
        confirmBtn: {
          text: config.confirmBtn.text,
          active: true,
          disabled: config.confirmBtn.disabled,
          href: 'javascript:;'
        },
        cancelBtn: {
          text: config.cancelBtn.text,
          active: false,
          disabled: config.cancelBtn.disabled,
          href: 'javascript:;'
        },
        onConfirm: config.onConfirm,
        onCancel: config.onCancel
      })
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
    },

    showConfirm (state, config) {
      let confirmConfig = {
        icon: '',
        title: '',
        content: '',
        confirmBtn: {
          text: '确认',
          disabled: false
        },
        cancelBtn: {
          text: '取消',
          disabled: false
        },
        onConfirm: () => {},
        onCancel: () => {},
        ...config
      }
      state.confirm(confirmConfig).show()
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
        toastConfig = {
          ...toastConfig,
          ...config
        }
      } else {
        throw Error('"toast"传入参数类型错误')
      }
      commit('showToast', toastConfig)

      // 隐藏，传入时间为0时不隐藏
      state.toast.time && setTimeout(() => commit('hideToast'), state.toast.time)
    },

    showConfirm ({ commit }, config) {
      commit('showConfirm', config)
    }
  }
}

export default widget
