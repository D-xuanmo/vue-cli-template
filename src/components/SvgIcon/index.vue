<template>
  <svg class="x-svg-icon" aria-hidden="true">
    <use :xlink:href="`#icon-${iconName}`"></use>
  </svg>
</template>
<script>
export default {
  name: 'XSvgIcon',
  data () {
    return {

    }
  },
  props: {
    iconName: String
  }
}
</script>
<style lang="scss" scoped>
.x-svg-icon {
  width: 24px;
  height: 24px;
}
</style>
