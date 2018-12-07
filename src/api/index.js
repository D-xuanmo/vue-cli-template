import axios from '@/utils/axios'

export default {
  // 示例
  getInformation (params) {
    return axios({
      url: '/s',
      params
    })
  }
}
