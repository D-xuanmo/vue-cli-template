<template>
  <div class="container">
    <div class="form-wrapper">
      <div class="logo t-center">
        <img src="../../assets/images/logo.png" width="50">
      </div>
      <cube-form
        :schema="schema"
        :immediate-validate="false"
        :options="options"
        @validate="validateHandler"
        @submit="submitHandler"
      >
        <cube-form-item :field="fields[0]"></cube-form-item>
        <cube-form-item :field="fields[1]"></cube-form-item>
        <cube-form-item :field="fields[2]"></cube-form-item>
      </cube-form>
    </div>
  </div>
</template>
<script>
import API from '@/api'
export default {
  name: 'Login',
  data() {
    return {
      validity: {},
      valid: undefined,
      model: {
        loginName: '',
        password: '',
        captcha: ''
      },
      fields: [
        {
          type: 'input',
          modelKey: 'loginName',
          label: '用户名',
          rules: {
            required: true
          }
        },
        {
          type: 'input',
          modelKey: 'password',
          label: '密码',
          props: {
            type: 'password',
            maxlength: 20
          },
          rules: {
            required: true
          }
        },
        {
          type: 'submit',
          label: '登录'
        }
      ],
      schema: {
      },
      options: {
        scrollToInvalidField: true,
        layout: 'standard' // classic fresh
      }
    }
  },
  methods: {
    submitHandler(e, model) {
      e.preventDefault()
      this.login(model)
    },
    validateHandler(result) {
      this.validity = result.validity
      this.valid = result.valid
    },
    async login (reqData) {
      try {
        window.common.showLoading('登录中...')
        let { data } = await API.login(reqData)
        window.common.hideLoading()
        sessionStorage.setItem('token', data.data.token)
        this.$store.commit('authen/SET_TOKEN', data.data.token)
        this.$router.push({ name: 'Phrase' })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  .form-wrapper {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 90%;
    padding: 15px;
    box-sizing: border-box;
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    transform: translate(-50%, -50%);
  }
}
</style>
