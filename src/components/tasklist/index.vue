<template>
  <div class="task-list">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <task-item class="task-item" v-for="(item,index) in list" :key="index" :itemData="item"/>
    </van-list>
  </div>
</template>

<script>
import taskItem from '@/components/taskitem'

import { oneDatas, twoDatas, threeDatas, fourDatas, fiveDatas, sixDatas } from '@/assets/data/taskListData'

export default {
  name: 'taskList',
  components: {
    taskItem
  },
  props: {
    listData: {
      type: Object,
      required: false
    }
  },
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      oneDatas,
      twoDatas,
      threeDatas,
      fourDatas,
      fiveDatas,
      sixDatas
    }
  },
  created () {},
  mounted () {
    console.log(this.oneDatas,
      this.twoDatas,
      this.threeDatas,
      this.fourDatas,
      this.fiveDatas,
      this.sixDatas)
    console.log(this.listData)
  },
  methods: {
    /***
     * 一共四步
     * 1. 请求获取数据
     * 2. 设置本次加载状态结束，它才可以判断是否需要加载下一次，否则就会永远的停在这里
     * 3. 数据全部加载完成
     */
    onLoad () {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        // switch()
        switch (this.listData.name) {
          case '全部':
            this.list = this.oneDatas
            break
          case '待确认':
            this.list = this.twoDatas
            break
          case '待处理':
            this.list = this.threeDatas
            break
          case '处理中':
            this.list = this.fourDatas
            break
          case '已提交':
            this.list = this.fiveDatas
            break
          case '审核中':
            this.list = this.sixDatas
            break
        }
        // 加载状态结束
        this.loading = false
        this.finished = true
        // 数据全部加载完成
        // if (this.list.length >= 40) {
        //   this.finished = true
        // }
      }, 500)
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
    margin:0px 10px 10px 10px;
    width: 356px;
    height: 157px;
  }
}
</style>
