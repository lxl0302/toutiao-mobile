<template>
  <div
    :class="[
      'detail-frame',
      moveDeatial === false ? 'details-noremove' : 'details-remove'
    ]"
  >
    <div class="detail-titile" @click="detailsremove">
      <icon-svg iconClass="xiayi" v-if="!moveDeatial" />
      <icon-svg iconClass="shangyi" v-if="moveDeatial" />
    </div>
    <div class="detail-content">
      <ul>
        <li>
          <span class="text">任务名称：</span
          ><span class="value">{{ areaDetaisData.taskName }}</span>
        </li>
        <li>
          <span class="text">任务编号：</span
          ><span class="value">{{ areaDetaisData.taskNum }}</span>
        </li>
        <li>
          <span class="text">任务来源：</span
          ><span class="value">{{ areaDetaisData.taskSource }}</span>
        </li>
        <li>
          <span class="text">创建人员：</span
          ><span class="value">{{ areaDetaisData.createPerson }}</span>
        </li>
        <li>
          <span class="text">处理期限：</span
          ><span class="value">{{ areaDetaisData.endTime }}</span>
        </li>
        <li>
          <span class="text">处理状态：</span
          ><span class="value">{{
            taskStateName(areaDetaisData.taskState)
          }}</span>
        </li>
        <li>
          <span class="text">任务类型：</span
          ><span class="value">{{ areaDetaisData.taskType }}</span>
        </li>
      </ul>
    </div>
    <div class="detail-operation">
      <div class="left-btn">开始导航</div>
      <div class="right-btn" @click="gotoEdit">开始采编</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'taskdetailsframe',
  components: {},
  props: {
    areaDetaisData: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      moveDeatial: false
    }
  },
  computed: {},
  mounted () {
  },
  methods: {
    detailsremove () {
      this.moveDeatial = !this.moveDeatial
      this.$emit('moveDeatial', this.moveDeatial)
    },
    taskStateName (val) {
      switch (val) {
        case '1':
          return '待确认'
        case '2':
          return '待处理'
        case '3':
          return '处理中'
        case '4':
          return '已提交'
        case '5':
          return '审核中'
      }
    },
    gotoEdit () {
      this.$router.push({
        name: 'taskeditdata',
        params: {
          taskData: this.areaDetaisData.id
        }
      })
    }
  }
}
</script>
<style lang='scss' scoped>
.detail-frame {
  width: 90%;
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translate(-50%);
  background-color: #fff;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.17);
  .detail-titile {
    margin: 2px auto;
    width: 300px;
    height: 26px;
    font-size: 23px;
    // background-color: gray;
    text-align: center;
  }
  .detail-content {
    width: 93%;
    height: 200px;
    margin: 10px auto;
    background-color: #f9f9f9;
    & ul {
      list-style: none;
      font-size: 16px;
      padding: 10px;
      li {
        line-height: 25px;
        .text {
          color: #999999;
        }
        .value {
          color: #555555;
        }
      }
    }
  }
  .detail-operation {
    width: 90%;
    height: 35px;
    margin: 13px auto;
    font-size: 18px;
    text-align: center;
    line-height: 35px;
    .left-btn {
      float: left;
      height: 100%;
      width: 138px;
      border: 1px solid #999999;
      background-color: #fff;
      border-radius: 3px;
    }
    .right-btn {
      float: right;
      height: 100%;
      width: 138px;
      border: 1px solid #bddbf1;
      background-color: #348bff;
      color: #fff;
      border-radius: 3px;
    }
  }
}
.details-noremove {
  height: 300px;
  transition: height 0.3s;
}
.details-remove {
  height: 76px;
  transition: height 0.3s;
}
</style>
