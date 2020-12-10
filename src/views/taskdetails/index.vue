<template>
  <div class="task-container">
    <!-- 导航栏 -->
    <van-nav-bar
      class="app-nav-bar"
      title="任务详情"
      left-text="返回"
      left-arrow
      @click-left="goHome"
    />
    <!-- 地图容器 -->
    <div class="map-container">
      <task-area-map
        v-if="detailsIsShow"
        :areaGeoData="areaGeoData"
        :moveDeatialFram="moveDeatialFram"
      />
    </div>
    <!-- 任务详情弹窗 -->
    <task-details-frame
      v-if="detailsIsShow"
      :areaDetaisData="areaDetaisData"
      @moveDeatial="moveDeatial"
    />
  </div>
</template>

<script>
import taskAreaMap from '@/views/map/taskAreaMap'
import taskDetailsFrame from '@/components/taskdetailsframe'

export default {
  name: 'taskdetails',
  components: {
    taskAreaMap,
    taskDetailsFrame
  },
  props: {
    taskAreaId: {
      type: Number,
      default () {
        return null
      }
    }
  },
  data () {
    return {
      areaGeoData: null, // 任务区域geojson数据,
      areaDetaisData: null, // 任务区域数据详情
      moveDeatialFram: null, // 详情弹窗是否位移
      detailsIsShow: false // 异步问题 是否渲染详情弹窗
    }
  },
  watch: {
  },
  computed: {},
  mounted () {
    this.gotoTaskArea(this.taskAreaId)
  },
  methods: {
    goHome () {
      this.$router.push({ name: 'home' })
    },
    moveDeatial (val) {
      this.moveDeatialFram = val
    },
    async gotoTaskArea (taskId) {
      const { data } = await this.$axios({
        headers: {
          'TW-ProjectName': 'ansotest001',
          'TW-App': 'android',
          'TW-Authorization': '79FA607A95E645DD825BEF92A69B4AB8'
        },
        method: 'GET',
        url: 'outwork/server/taskdetail',
        params: {
          id: taskId
        }
      })
      this.detailsIsShow = true
      this.areaGeoData = data.data.area.geomapp
      this.areaDetaisData = data.data.task
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
