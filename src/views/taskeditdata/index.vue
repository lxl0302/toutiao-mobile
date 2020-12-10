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
      <task-details-map/>
    </div>
  </div>
</template>

<script>
import taskDetailsMap from '@/views/map/taskDetailsMap'

export default {
  name: 'taskEditData',
  components: {
    taskDetailsMap
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

    }
  },
  computed: {},
  mounted () {

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
