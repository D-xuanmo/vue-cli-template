import store from '@/store'

export const showLoading = config => store.dispatch('showLoading', config)

export const hideLoading = () => store.dispatch('hideLoading')

export const showToast = config => store.dispatch('showToast', config)

export const hideToast = () => store.dispatch('hideToast')

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

// 千分位
export const formatNumber = num => String(num).replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,')
