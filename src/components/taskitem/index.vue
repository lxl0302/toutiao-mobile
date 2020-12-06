<template>
  <div class="item-container">
    <div class="item-title">
      <div class="title-left">{{ itemData.taskTitle }}</div>
      <div
        :class="[
          'title-right',
          itemData.taskStatus === '待确认'
            ? 'statusOne'
            : itemData.taskStatus === '待处理'
            ? 'statusTwo'
            : itemData.taskStatus === '处理中'
            ? 'statusThree'
            : 'statusOne',
        ]"
      >
        {{ itemData.taskStatus }}
      </div>
    </div>
    <div class="item-content">
      <ul>
        <li class="frist-li">{{ itemData.taskId }}</li>
        <li class="other-li">
          <icon iconClass="kaishishijian" />&nbsp;开始时间:{{
            itemData.startTime
          }}
        </li>
        <li class="other-li">
          <icon iconClass="jieshushijian" />&nbsp;结束时间:{{
            itemData.endTime
          }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import icon from '@/utils/icon'

export default {
  name: 'taskitem',
  components: {
    icon
  },
  props: {
    itemData: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {}
  },
  computed: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.item-container {
  background-color: #fff;
  box-shadow: 0px 0px 2px #b9b9b9;
  .item-title {
    height: 44px;
    border-bottom: 1px solid #dddddd;
    padding-left: 10px;
    .title-left {
      line-height: 44px;
      float: left;
      font-size: 17px;
    }
    .title-right {
      float: right;
      margin-top: 10px;
      margin-right: 10px;
      font-size: 14px;
      line-height: 24px;
      padding: 0px 4px 0px 4px;
      height: 24px;
    }
    .statusOne {
      color: #618afe;
      background-color: #e8eeff;
    }
    .statusTwo {
      color: #fc9b00;
      background-color: #fff2df;
    }
    .statusThree {
      color: #417a15;
      background-color: #e0e4c8;
    }
  }
  .item-content {
    ul {
      margin: 10px 0px 0px 10px;
      list-style: none;
      padding: 0;
      line-height: 28px;
      .frist-li {
        font-size: 16px;
        color: #666666;
      }
      .other-li {
        font-size: 14px;
        color: #999999;
      }
    }
  }
}
</style>
