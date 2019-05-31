<template>
  <div class="container">
    <!-- <div class="content" v-html="result"></div> -->
    <x-table :tableData="tableData"></x-table>
    我是svg-icon组件： <x-svg-icon iconName="qq"></x-svg-icon>
  </div>
</template>
<script>
import API from '@/api'
import XTable from '@/components/Table'
export default {
  name: 'Test',
  components: {
    XTable
  },
  data () {
    return {
      result: '',
      tableData: {
        config: {
          cssClass: ['xx']
        }
      }
    }
  },
  created () {
    API.getInformation().then(({ data }) => {
      window.common.hideLoading()
      this.result = data
    })
  }
}
</script>
<style lang="scss" scoped>
.container {
  padding: 0 px2px(40px);
}
</style>
