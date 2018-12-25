import store from '@/store'

export const showLoading = config => store.dispatch('showLoading', config)

export const hideLoading = () => store.dispatch('hideLoading')

export const showToast = config => store.dispatch('showToast', config)

export const hideToast = () => store.dispatch('hideToast')

export const showConfirm = config => store.dispatch('showConfirm', config)

// 获取查询参数
export const getQueryParams = params => {
  const obj = {}
  const _params = window.decodeURIComponent(params)
  _params.split('&').map(item => {
    item.replace(/([^?&]*)=([^?&]*)/, (match, $1, $2) => {
      obj[$1] = $2
    })
  })
  return obj
}
