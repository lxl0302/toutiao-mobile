<template>
  <div class="">
    <!-- 导航栏 -->
    <van-nav-bar
      class="app-nav-bar"
      title="地图采编"
      left-text="返回"
      left-arrow
      @click-left="goTaskArea"
    />
    <!-- 地图容器 -->
    <div class="map-container">
      <task-details-map />
    </div>
    <!-- 侧边导航栏 -->
    <col-tab-bar @handleClick="handleClick"/>
    <!-- 下面导航栏 -->
    <tab-bar :tabData="tabData" />
  </div>
</template>

<script>
import taskDetailsMap from '@/views/map/taskDetailsMap'
import colTabBar from '@/components/tabbar/colTabBar'
import tabBar from '@/components/tabbar'

export default {
  name: 'taskEditData',
  components: {
    taskDetailsMap,
    colTabBar,
    tabBar
  },
  props: {
    taskData: {
      type: Number,
      default () {
        return null
      }
    }
  },
  data () {
    return {
      tabData: [
        {
          iconName: 'caijidian',
          iconText: '采点'
        },
        {
          iconName: 'caijixian',
          iconText: '采线'
        },
        {
          iconName: 'bianji',
          iconText: '编辑'
        },
        {
          iconName: 'renwu',
          iconText: '任务'
        }
      ]
    }
  },
  computed: {},
  mounted () {
    console.log('222222')
  },
  methods: {
    goTaskArea () {
      this.$router.push({
        name: 'taskdetails',
        params: {
          taskAreaId: this.taskData
        }
      })
      console.log('从taskEditData传出的Data', this.taskData)
    },
    handleClick (type, val) {
      console.log('类型', type, '值', val)
    }
  }
}
</script>
<style lang='scss' scoped>
.map-container {
  position: fixed;
  width: 100%;
  top: 44px;
  bottom: 0px;
}
</style>
