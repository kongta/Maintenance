<template>
  <div class="record-list">
    <div class="record-list-box">
      <div
        class="record-list-item van-hairline--bottom"
        v-for="(item, index) in recordList"
        :key="index"
      >
        <p class="repail">
          <span>{{ type === 1 ? "维修记录" : "保险记录" }}</span
          ><span>{{ item.date }}</span>
        </p>
        <p class="frame-number">
          <span>vin：{{ item.vin }}</span
          ><span :class="statusObj[item.status].class">{{
            statusObj[item.status].name
          }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "record-list",
  data() {
    return {
      statusObj: [
        {
          name: "成功",
          class: "success"
        },
        {
          name: "查询中",
          class: "nowing"
        },
        {
          name: "失败",
          class: "fail"
        }
      ]
    };
  },
  props: {
    type: {
      type: Number,
      required: true
    },
    recordList: {
      type: Array,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
.record-list {
  padding: 0 32px 0 46px;
  background-color: #fff;
  .record-list-box {
    padding-top: 10px;
    .record-list-item {
      font-size: 26px;
      padding-top: 30px;
      p {
        display: flex;
        justify-content: space-between;
        padding-bottom: 20px;
      }
      .success {
        color: #2aa146 !important;
      }
      .fail {
        color: #f80000 !important;
      }
      .nowing {
        color: #f88706 !important;
      }
      .repail,
      .frame-number {
        span {
          &:last-child {
            color: #999;
          }
        }
      }
    }
  }
}
</style>
