<template>
  <div
    :class="[
      'icon-container',
      iconData.type === 0
        ? ''
        : iconData.type === 1
        ? isClick
          ? 'onBgc'
          : ''
        : isClick
        ? 'onText'
        : ''
    ]"
    @click="iconClick"
  >
    <icon-svg :iconClass="iconData.iconName" style="margin-top: 5px" />
    <div class="text-style">{{ iconData.title }}</div>
  </div>
</template>

<script>
/***
 * @param type
 * 权限：是否高亮 0
 * 高亮：背景高亮还是icon&text高亮 1 或 2
 */
export default {
  name: 'iconAndText',
  data () {
    return {
      isClick: false
    }
  },
  props: {
    iconData: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    iconClick () {
      this.isClick = !this.isClick
      this.$emit('handleClick', this.iconData.iconName, this.isClick)
    }
  }
}
</script>
<style lang='scss' scoped>
.icon-container {
  width: 100%;
  height: 100%;
  .text-style {
    margin-bottom: 2px;
    display: block;
    font-size: 12px;
  }
}
.onText {
  color: #f3f4ef;
}
.onBgc {
  background-color: #f1f3f2;
}
</style>
