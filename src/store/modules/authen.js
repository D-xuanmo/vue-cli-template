const SET_TOKEN = 'SET_TOKEN'

const token = sessionStorage.getItem('token') || ''

const authen = {
  namespaced: true,
  state: {
    token
  },
  mutations: {
    [SET_TOKEN] (state, token) {
      state.token = token
    }
  },
  actions: {}
}

export default authen
