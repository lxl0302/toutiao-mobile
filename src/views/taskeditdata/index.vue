<template>
  <div class="" @click="goTaskArea"><h1>编辑</h1></div>
</template>

<script>

export default {
  name: '',
  components: {},
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
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
