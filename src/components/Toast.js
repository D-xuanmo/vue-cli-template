export default {
  name: 'XToast',
  props: {
    value: Boolean,
    text: {
      type: String,
      default: ''
    },
    mask: {
      type: Boolean,
      default: true
    },
    background: {
      type: String,
      default: ''
    },
    zIndex: {
      type: Number,
      default: 9999
    }
  },
  // eslint-disable-next-line
  render (h) {
    return (
      <div v-show={ this.value } class="x-toast" style={{ zIndex: this.zIndex }}>
        <div class="x-toast-mask" style={{ background: this.background }}></div>
        <div class="x-toast-content">{ this.text }</div>
      </div>
    )
  }
}
