<template>
  <div class="OrderDetail">
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
    <div class="order-list-box" v-if="!OrderList.length">
      <div class="list-item" v-for="(item, index) in OrderList" :key="index">
        <div class="car-explain">
          <p>车 型：{{ item.brand }}</p>
          <p>车架号：：{{ item.vin }}</p>
        </div>
        <div class="car-status van-hairline--top">
          <p>
            状态：
            <span :class="statusObj[item.status].style">{{
              statusObj[item.status].desc
            }}</span>
          </p>
          <p>2019/11/1</p>
        </div>
      </div>
    </div>
    <div class="none" v-if="OrderList.length">
      <img src="@/assets/image/no-order.png" alt="" />
      <p>暂无订单</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "OrderDetail",
  data() {
    return {
      active: 0,
      tabList: [
        {
          name: "全部"
        },
        {
          name: "未完成"
        },
        {
          name: "已完成"
        },
        {
          name: "退款"
        }
      ],
      OrderList: [
        {
          vin: "9527",
          brand: "宝马111111111",
          status: 1,
          date: "2019/12/11"
        },
        {
          vin: "9527",
          status: 2,
          brand: "宝马222222",
          date: "2019/12/11"
        },
        {
          vin: "9527",
          status: 0,
          brand: "宝马4444",
          date: "2019/12/11"
        },
        {
          vin: "9527",
          status: 2,
          brand: "宝马4444444555555",
          date: "2019/12/11"
        },
        {
          vin: "9527",
          status: 1,
          brand: "宝马444444353455",
          date: "2019/12/11"
        }
      ],
      statusObj: [
        {
          desc: "已完成",
          style: "finish"
        },
        {
          desc: "未完成",
          style: "unfinsh"
        },
        {
          desc: "退款",
          style: "refund"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.OrderDetail {
  background-color: #f2f2f2;
  min-height: 100%;
  .input-area {
    padding: 30px;
    position: relative;
    background-color: #fff;
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
    background-color: #fff;
    .tabs {
      display: flex;
      box-shadow: 0px 15px 15px -15px rgba(0, 0, 0, 0.08);
      line-height: 90px;
      .tabs-item {
        width: 25%;
        text-align: center;
        font-size: 30px;
        &.active {
          color: #f88706;
          font-weight: bold;
        }
      }
    }
  }
  .order-list-box {
    font-size: 28px;
    font-weight: 500;
    margin-top: 20px;
    p {
      line-height: 80px;
    }
    .list-item {
      background-color: #fff;
      margin-bottom: 20px;
      padding: 0 36px;
      .car-status {
        display: flex;
        justify-content: space-between;
        font-size: 26px;
        .unfinsh {
          color: #d7010b;
        }
        .finish {
          color: #2aa146;
        }
        .refund {
          color: #999;
        }
      }
    }
  }
  .none {
    height: calc(100vh - 230px);
    background-color: #fff;
    display: block;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 150px;
    img {
      display: block;
      width: 246px;
      height: 260px;
    }
    p {
      font-weight: 500;
      color: #999;
      font-size: 30px;
      padding-top: 20px;
    }
  }
}
</style>
