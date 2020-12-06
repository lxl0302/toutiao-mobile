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
      <van-tab v-for="(item, index) in tabDatas" :title="item.name" :key="index">
        <task-list :listData="item"></task-list>
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
          name: '全部'
        },
        {
          name: '待确认'
        },
        {
          name: '待处理'
        },
        {
          name: '处理中'
        },
        {
          name: '已提交'
        },
        {
          name: '审核中'
        }
      ],
      searchVal: ''
    }
  },
  computed: {},
  created () {},
  mounted () {},
  methods: {
    onSearch () {
      console.log('data', this.searchVal)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
