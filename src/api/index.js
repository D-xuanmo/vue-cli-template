import axios from '@/utils/axios'

export default {
  // 示例
  getInformation (params) {
    return axios({
      url: '/wp-json/xm-blog/v1/info',
      params
    })
  }
}
