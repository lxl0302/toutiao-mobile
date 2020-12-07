<template>
  <div class="task-list">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <task-item
        class="task-item"
        v-for="(item, index) in list"
        :key="index"
        :itemData="item"
      />
    </van-list>
  </div>
</template>

<script>
import taskItem from '@/components/taskitem'

export default {
  name: 'taskList',
  components: {
    taskItem
  },
  props: {
    active: {
      type: Number,
      default: 0
    },
    listData: {
      type: Object,
      required: false
    },
    searchValue: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      list: [],
      loading: false,
      finished: false
    }
  },
  created () { },
  mounted () {
  },
  watch: {
    searchValue (val) {
      this.getSearchResult(val, 0)
    }
  },
  methods: {
    async getSearchResult (val, type) {
      // 只有当前激活组件的list参与搜索
      if (this.active === this.listData.taskState) {
        const { data } = await this.$axios({
          headers: {
            'TW-ProjectName': 'ansotest001',
            'TW-App': 'android',
            'TW-Authorization': '43B6182A895A41A089E2652E2B520391'
          },
          method: 'GET',
          url: 'outwork/server/task',
          params: {
            taskType: '采编任务',
            taskState: this.listData.taskState,
            like: val
          }
        })
        const listdatas = data.data.filter((item) => {
          return item.taskState !== '6'
        })
        this.list = listdatas
      }
    },
    /***
     * 一共四步
     * 1. 请求获取数据
     * 2. 设置本次加载状态结束，它才可以判断是否需要加载下一次，否则就会永远的停在这里
     * 3. 数据全部加载完成
     */
    async onLoad () {
      // 1. 请求获取数据
      const { data } = await this.$axios({
        headers: {
          'TW-ProjectName': 'ansotest001',
          'TW-App': 'android',
          'TW-Authorization': '43B6182A895A41A089E2652E2B520391'
        },
        method: 'GET',
        url: 'outwork/server/task/user',
        params: {
          account: 'anso',
          taskState: this.listData.taskState
        }
      })
      const listdatas = data.data.filter((item) => {
        return item.taskState !== '6'
      })
      // 2. 把数据放到列表中
      this.list = listdatas
      // 3. 将本次的loading关闭
      this.loading = false
      // 4. 判断是否还有数据
      if (this.list.length === listdatas.length) {
        this.finished = true
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.task-list {
  position: fixed;
  left: 0;
  right: 0;
  top: 144px;
  bottom: 0px;
  overflow-y: auto;
  .task-item {
    margin: 0px 10px 10px 10px;
    width: 356px;
    height: 157px;
  }
}
</style>
