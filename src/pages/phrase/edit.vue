<template>
  <div v-show="value" class="edit-container">
    <cube-form :model="model" :schema="schema" @submit="submit" @reset="close"></cube-form>
  </div>
</template>

<script>
import API from '@/api'
export default {
  name: 'PhraseEdit',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    data: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      formExtra: {},
      model: {
        content: '',
        file: []
      },
      schema: {
        fields: [
          {
            type: 'textarea',
            modelKey: 'content',
            label: '内容',
            props: {
              maxlength: 500,
              placeholder: '请输入内容',
              autoExpand: true
            },
            rules: {
              required: true
            }
          },
          {
            type: 'upload',
            modelKey: 'file',
            label: '图片',
            props: {
              max: 9
            }
          },
          {
            type: 'submit',
            label: '保存'
          },
          {
            type: 'reset',
            label: '取消'
          }
        ]
      }
    }
  },
  watch: {
    value (v) {
      if (v && this.title === '修改说说') {
        let arr = []
        this.model.content = this.data.content
        this.data.images.forEach(item => arr.push({ url: item }))
        this.model.file = arr
        this.formExtra.id = this.data.id
      }
    }
  },
  methods: {
    async submit (e, model) {
      e.preventDefault()
      const formData = new FormData()
      formData.append('content', model.content)
      this.formExtra.id && formData.append('id', this.formExtra.id)
      model.file.forEach(({ file, url }) => {
        formData.append('file', file ? file : url)
      })
      window.common.showLoading('发布中...')
      await API.savePhrase(formData)
      window.common.hideLoading()
      this.close()
      this.$emit('close', true)
    },
    close () {
      this.formExtra = {}
      this.$emit('input', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.edit-container {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  padding: 10px;
  background: #fff;
  box-shadow: 0 0 0 1000px rgba(0,0,0,.8);
  transform: translate(-50%, -50%);

  /deep/ .cube-form_standard .cube-textarea-wrapper.cube-textarea_expanded {
    height: 200px;
  }

  .picture-wrapper {
    display: flex;
    flex-wrap: wrap;
    padding: 10px 0;

    .picture-item {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70px;
      height: 70px;
      margin: 0 5px 10px 5px;
      box-sizing: border-box;
      border: 1px solid $color-border;

      .cubeic-wrong {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 99;
        font-size: 18px;
        transform: translate(40%, -40%);
      }
    }

    .choose-file {
      input {
        width: 100%;
        height: 100%;
        opacity: 0;
      }

      span {
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 40px;
        transform: translate(-50%, -50%);
        pointer-events: none;
      }
    }
  }
}
</style>
