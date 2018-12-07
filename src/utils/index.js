import store from '@/store'

export const showLoading = config => store.dispatch('showLoading', config)

export const hideLoading = () => store.dispatch('hideLoading')

export const showToast = config => store.dispatch('showToast', config)

export const hideToast = () => store.dispatch('hideToast')

export const showConfirm = config => store.dispatch('showConfirm', config)
