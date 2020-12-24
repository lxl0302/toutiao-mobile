<template>
  <div class="tab-container">
    <div
      :class="['flex-item', isClick === item.iconName ? 'onclick' : 'unclick']"
      @click="tabClick(item.iconName, isClick === item.iconName)"
      v-for="(item, index) in tabData"
      :key="index"
    >
      <icon-svg :iconClass="item.iconName" />
      <div class="aoligei">{{ item.iconText }}</div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'

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
      isClick: null,
      clickStatus: null
    }
  },
  computed: {},
  created () { },
  mounted () { },
  methods: {
    tabClick (val, statue) {
      if (this.clickStatus) {
        if (this.isClick === val) {
          this.isClick = 'close'
          this.clickStatus = false
          // 发送取消事件
          this.$EventBus.$emit('tabEvent', val, false)
        } else {
          Toast('请先把之前事件结束掉')
        }
      } else {
        this.isClick = val
        this.clickStatus = true
        // 发送结束事件
        this.$EventBus.$emit('tabEvent', val, true)
      }
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
  .flex-item {
    font-size: 22px;
    text-align: center;
    .aoligei {
      display: block;
      font-size: 12px;
    }
  }
  .unclick {
    color: #999999;
  }
  .onclick {
    color: #4c7bfe;
  }
}
</style>
