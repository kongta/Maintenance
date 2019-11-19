<template>
  <div class="Record">
    <div class="input-area">
      <input
        type="text"
        class="input"
        placeholder="输入搜索的车牌号/品牌/查询人手机号"
      />
      <van-icon name="search" />
    </div>
    <div class="tabs-box">
      <div class="tabs">
        <div
          :class="['tabs-item', { active: index === active }]"
          v-for="(item, index) in tabList"
          :key="index"
          @click="active = index"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
    <div class="recordList">
      <recordList :recordList="recordList" :type="1"></recordList>
    </div>
  </div>
</template>
<script>
import recordList from "@/components/recordList";
export default {
  name: "record",
  components: { recordList },
  data() {
    return {
      active: 0,
      tabList: [
        {
          name: "全部"
        },
        {
          name: "维修保养"
        },
        {
          name: "维修记录"
        }
      ],
      recordList: [
        {
          vin: "9527",
          status: 1,
          date: "2019/12/11"
        },
        {
          vin: "9527",
          status: 2,
          date: "2019/12/11"
        },
        {
          vin: "9527",
          status: 0,
          date: "2019/12/11"
        },
        {
          vin: "9527",
          status: 2,
          date: "2019/12/11"
        },
        {
          vin: "9527",
          status: 1,
          date: "2019/12/11"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.Record {
  .input-area {
    padding: 30px;
    position: relative;
    .input {
      width: 100%;
      height: 80px;
      background: rgba(242, 242, 242, 1);
      border: 1px solid rgba(153, 153, 153, 1);
      border-radius: 40px;
      padding: 0 65px;
      font-size: 26px;
    }
    .van-icon-search {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 50px;
      width: 30px;
      height: 30px;
    }
  }
  .tabs-box {
    .tabs {
      display: flex;
      box-shadow: 0px 15px 15px -15px rgba(0, 0, 0, 0.08);
      line-height: 90px;
      .tabs-item {
        width: 33.333%;
        text-align: center;
        font-size: 30px;
        &.active {
          color: #f88706;
          font-weight: bold;
        }
      }
    }
  }
  .recordList {
    margin-top: 10px;
  }
}
</style>
