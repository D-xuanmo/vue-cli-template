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
  // config.headers.sessionId = store.state.common.token
  return config
}, error => {
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(response => {
  return {
    data: response.data,
    status: response.status,
    headers: response.headers,
    statusText: response.statusText
  }
}, error => {
  return Promise.reject(error)
})

export default axios
