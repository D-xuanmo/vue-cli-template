import Axios from 'axios'
import qs from 'qs'
// import router from '@/router'

const option = {
  timeout: 20000,
  baseURL: process.env.VUE_APP_BASE_API,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  transformRequest: (data, headers) => {
    if (headers['Content-Type'].search('application/json') !== -1) {
      return JSON.stringify(data)
    } else if (headers['Content-Type'].search('multipart/form-data') !== -1) {
      return data
    } else {
      return qs.stringify(data)
    }
  }
}

const axios = Axios.create(option)

// 添加请求拦截器
axios.interceptors.request.use(config => {
  // 请求时设置token
  // config.headers.token = store.state.common.token
  return config
}, error => {
  return Promise.reject(error)
})

/**
 * [添加响应拦截器]
 * 接口返回参数定义格式:
 * @response {Object}
 * data：接口返回的数据
 * success：定义请求是否成功（boolean）
 * message：定义请求的错误提示信息
 * code：定义请求返回码
 */
axios.interceptors.response.use(response => {
  // 错误拦截判断
  if (response.data && !response.data.success) {
    window.common.hideLoading()
    window.common.showToast(response.data.message)
    return
  }
  return {
    data: response.data,
    status: response.status,
    headers: response.headers,
    statusText: response.statusText
  }
}, error => {
  window.common.hideLoading()
  const errMsg = error.message
  errMsg.indexOf('timeout') !== -1
    ? window.common.showToast({ text: '请求超时！', time: 0 })
    : window.common.showToast({ text: error.message, time: 0 })
  return Promise.reject(error)
})

export default axios
