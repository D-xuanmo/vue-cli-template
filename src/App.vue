<template>
  <div id="app">
    <router-view/>
    <!-- loading start -->
    <cube-popup
      v-model="widget.loading.show"
      type="global-loading"
      :mask="widget.loading.mask"
      :center="widget.loading.center"
      :z-index="widget.loading.zIndex">
      <cube-loading></cube-loading>
      <p class="loading-text">{{ widget.loading.text }}</p>
    </cube-popup>
    <!-- loading end -->
    <!-- toast start -->
    <cube-popup
      v-model="widget.toast.show"
      :mask="widget.toast.mask"
      :content="widget.toast.text"
      :z-index="widget.toast.zIndex"
      type="global-toast">
    </cube-popup>
    <!-- toast end -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  computed: {
    ...mapGetters([
      'widget'
    ])
  }
}
</script>

<style lang="scss">
@import "./assets/scss/index.scss";
</style>
