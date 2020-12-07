<template>
  <div class="box-container">
    <!-- 导航栏 -->
    <van-nav-bar class="app-nav-bar" title="任务中心" />
    <!-- 任务Tab -->
    <van-tabs class="app-tab" v-model="active" swipeable>
      <!-- 搜索框 -->
      <van-search
        class="search-bar"
        v-model="searchVal"
        show-action
        placeholder="请输入任务编号"
        @search="onSearch"
      >
        <template #action>
          <div class="searchBtn" @click="onSearch">搜索</div>
        </template>
      </van-search>
      <!-- 任务列表 -->
      <van-tab
        v-for="(item, index) in tabDatas"
        :title="item.name"
        :key="index"
      >
        <task-list
          :active="active"
          :listData="item"
          :searchValue="searchVal2"
        ></task-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import taskList from '@/components/tasklist'

export default {
  name: 'home',
  components: {
    taskList
  },
  data () {
    return {
      active: 0, // 默认显示的tab
      tabDatas: [
        {
          name: '全部',
          taskState: 0
        },
        {
          name: '待确认',
          taskState: 1
        },
        {
          name: '待处理',
          taskState: 2
        },
        {
          name: '处理中',
          taskState: 3
        },
        {
          name: '已提交',
          taskState: 4
        },
        {
          name: '审核中',
          taskState: 5
        }
      ],
      searchVal: '', // 输入的搜索值
      searchVal2: '' // list组件接受的搜索值
    }
  },
  computed: {},
  created () { },
  mounted () {
  },
  methods: {
    onSearch () {
      this.searchVal2 = this.searchVal
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
