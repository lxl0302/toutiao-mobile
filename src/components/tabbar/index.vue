<template>
  <div class="tab-container">
    <div :class="['flex-item', isClick === true ? 'onclick' : 'unclick']" @click="tabClick"
      v-for="(item, index) in tabData"
      :key="index">
      <icon-svg :iconClass="item.iconName" />
      <div class="aoligei">{{item.iconText}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabBar',
  components: {},
  props: {
    tabData: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      isClick: false
    }
  },
  computed: {},
  created () {},
  mounted () {},
  methods: {
    tabClick () {
      this.isClick = !this.isClick
      // console.log('点击事件,状态：', this.isClick, '类别：', itemData.tabText)
    }
  }
}
</script>
<style lang="scss" scoped>
.tab-container {
  position: absolute;
  bottom: 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 54px;
  background-color: #fff;
}
.flex-item {
  font-size: 22px;
  text-align: center;
  .aoligei {
    display: block;
    font-size: 12px;
  }
}
.unclick {
  color: #999999
}
.onclick {
  color: #4c7bfe
}
</style>
