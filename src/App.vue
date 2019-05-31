<template>
  <div id="app">
    <router-view/>
    <!-- loading start -->
    <x-loading
      v-model="widget.loading.show"
      :text="widget.loading.text"
      :mask="widget.loading.mask"
      :z-index="widget.loading.zIndex"
      :background="widget.loading.background">
    </x-loading>
    <!-- loading end -->
    <!-- toast start -->
    <x-toast
      v-model="widget.toast.show"
      :text="widget.toast.text"
      :mask="widget.toast.mask"
      :z-index="widget.toast.zIndex"
      :background="widget.toast.background">
    </x-toast>
    <!-- toast end -->
  </div>
</template>

<script>
import XLoading from '@/components/Loading'
import XToast from '@/components/Toast'
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  components: {
    XLoading,
    XToast
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'widget'
    ])
  }
}
</script>

<style lang="scss">
</style>
