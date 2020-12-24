<template>
  <div class="box-container">
    <div
      :class="['item-style']"
      v-for="(item, index) in iconDatas"
      :key="index"
    >
      <iconAndText :class="[index === iconDatas.length ? 'no-border' : 'has-border']" :iconData="item" @handleClick="handleClick"/>
    </div>
  </div>
</template>

<script>
import iconAndText from '@/components/icon/iconAndText'

export default {
  name: 'colTabBar',
  components: {
    iconAndText
  },
  data () {
    return {
      iconDatas: [
        {
          iconName: 'chaxun',
          title: '搜索',
          type: 0
        },
        {
          iconName: 'fenceng',
          title: '图层',
          type: 0
        },
        {
          iconName: 'quyu',
          title: '区域',
          type: 0
        },
        {
          iconName: 'pingyi',
          title: '拖动',
          type: 1
        },
        {
          iconName: 'xuanze',
          title: '选择',
          type: 0
        },
        {
          iconName: 'gengduo',
          title: '更多',
          type: 0
        }
      ]
    }
  },
  props: {
    listData: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    handleClick (type, val) {
      this.$emit('handleClick', type, val)
    }
  }
}
</script>
<style lang='scss' scoped>
.box-container {
  position: absolute;
  top: 60px;
  right: 15px;
  display: flex;
  flex-wrap: wrap;
  width: 48px;
  background-color: #fff;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.17);
  border-radius: 3px;
  .item-style {
    width: 48px;
    height: 48px;
    font-size: 21px;
    text-align: center;
    color: #525252;
    .aoligei {
      margin-bottom: 2px;
      display: block;
      font-size: 12px;
    }
  }
  .item-border {
    border-bottom: 1px solid #d1d1d1;
  }
  .un-click {
    background-color: #f2f2f2;
  }
  .has-border {
    border-bottom: 1px solid #f2f2f2;
  }
  .no-border {
    border-bottom: 1px solid #fff;
  }
}
</style>
