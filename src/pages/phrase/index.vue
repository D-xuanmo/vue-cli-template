<template>
  <div class="container">
    <header>发表说说</header>
    <cube-button inline @click="add">新增</cube-button>
    <table class="w-f-100 m-t-15px">
      <colgroup>
        <col width="20%">
        <col width="30%">
        <col width="20%">
        <col width="30%">
      </colgroup>
      <thead>
        <tr>
          <th>图片</th>
          <th>内容</th>
          <th>发布时间</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list" :key="index">
          <td :class="[item.images.length && item.images[0] && 'badge', 't-center', 'v-middle']" :data-count="item.images.length">
            <img :src="item.images[0]" class="v-middle" width="40">
          </td>
          <td class="v-middle">{{ item.content }}</td>
          <td class="v-middle">{{ item.createTime }}</td>
          <td class="v-middle clearfix">
            <cube-button class="fl" inline primary @click="edit(item)">修改</cube-button>
            <cube-button class="fr" inline @click="del(item.id)">删除</cube-button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="edit-wrapper">
      <phrase-edit v-model="isShowEditModel" :title="title" :data="currentData" @close="init" />
    </div>
  </div>
</template>

<script>
import API from '@/api'
import PhraseEdit from './edit'
import DateJS from '@/utils/date'
export default {
  name: 'Phrase',
  components: {
    PhraseEdit
  },
  data () {
    return {
      title: '新增说说',
      isShowEditModel: false,
      list: [],
      currentData: {}
    }
  },
  created () {
    this.init()
  },
  methods: {
    async init () {
      window.common.showLoading('加载中...')
      let { data } = await API.getPhraseList()
      data.data.map(item => {
        item.createTime = DateJS(item.createTime).format('yyyy年MM月')
      })
      window.common.hideLoading()
      this.list = data.data
    },

    add () {
      this.title = '新增说说'
      this.isShowEditModel = true
      this.currentData = {}
    },

    edit (data) {
      this.title = '修改说说'
      this.isShowEditModel = true
      this.currentData = data
    },

    del (id) {
      this.$createDialog({
        type: 'confirm',
        icon: 'cubeic-alert',
        title: '确认删除本条说说吗？',
        confirmBtn: {
          text: '确定',
          active: true,
          disabled: false,
          href: 'javascript:;'
        },
        cancelBtn: {
          text: '取消',
          active: false,
          disabled: false,
          href: 'javascript:;'
        },
        onConfirm: async () => {
          window.common.showLoading('删除中...')
          await API.delPhrase({ id })
          window.common.hideLoading()
          window.common.showToast('删除成功')
          this.init()
        },
        onCancel: () => {}
      }).show()
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  header {
    margin-bottom: 10px;
    padding: 10px 0;
    border-bottom: 1px solid $color-border;
    font-size: 16px;
  }

  table,
  th,
  td {
    padding: 5px;
    border: 1px solid rgb(238, 238, 238);
  }

  th {
    font-weight: bold;
    text-align: left;
  }

  .badge {
    position: relative;

    &:after {
      content: attr(data-count);
      position: absolute;
      top: 0;
      right: 0;
      padding: 3px;
      background: rgba(0,0,0,.2);
      font-size: 10px;
      color: #fff;
    }
  }
}
</style>
