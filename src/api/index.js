import axios from '@/utils/axios'

export default {
  login (data) {
    return axios({
      url: '/login',
      method: 'POST',
      data
    })
  },

  getPhraseList (data) {
    return axios({
      url: '/phrase/list',
      method: 'POST',data
    })
  },

  savePhrase (data) {
    return axios({
      url: '/phrase/save',
      method: 'POST',
      data,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },

  delPhrase (data) {
    return axios({
      'url': '/phrase/del',
      method: 'POST',
      data
    })
  },

  uploadImage (data) {
    return axios({
      url: '/media/image/upload',
      method: 'POST',
      data,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}
