<template>
  <div class="My">
    <div class="avator-box">
      <div class="avator-card">
        <img
          src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=392645034,2119529858&fm=26&gp=0.jpg"
          alt
        />
        <p class="username">我是帅哥</p>
        <p class="phone">（点击此添加手机号）</p>
      </div>
    </div>
    <div class="wallet">
      <div class="count-box">
        <p class="desc">理赔总次数</p>
        <p class="count"><span>2</span>次</p>
      </div>
      <div class="money-box">
        <p class="desc">理赔总金额</p>
        <p class="count">
          ￥
          <span>88888</span>
        </p>
      </div>
    </div>
    <div class="operation">
      <div class="operation-item">
        <span>去充值</span>
        <van-icon name="arrow" />
      </div>
      <div class="operation-item" @click="toOrderDetail">
        <span>订单明细</span>
        <van-icon name="arrow" />
      </div>
      <div class="operation-item">
        <span>联系客服</span>
        <van-icon name="arrow" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "My",
  data() {
    return {};
  },
  methods: {
    toOrderDetail() {
      this.$router.push("OrderDetail");
    }
  }
};
</script>
<style lang="scss" scoped>
.My {
  .avator-box {
    padding: 20px 32px;
    .avator-card {
      width: 100%;
      height: 328px;
      border-radius: 20px;
      background: linear-gradient(#f4af39, #ee8317);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 120px;
        height: 120px;
        display: block;
        border-radius: 50%;
      }
      .username {
        font-size: 32px;
        font-weight: bold;
        color: #fff;
        padding: 23px 0;
      }
      .phone {
        font-size: 20px;
        font-weight: bold;
        color: #fff;
      }
    }
  }
  .wallet {
    display: flex;
    justify-content: space-between;
    padding: 30px 33px;
    .count-box,
    .money-box {
      width: 318px;
      height: 149px;
      background: #fff;
      border-radius: 20px;
      box-shadow: 0 0 18px rgba(0, 0, 0, 0.08);
      padding: 20px 28px;
      .desc {
        color: #333;
        font-weight: bold;
        font-size: 30px;
      }
      .count {
        text-align: center;
        font-size: 30px;
        padding-top: 28px;
        font-weight: 500;
        span {
          color: #fe0000;
          font-size: 40px;
        }
      }
    }
  }
  .operation {
    padding: 10px 30px 0;
    .operation-item {
      width: 100%;
      display: flex;
      justify-content: space-between;
      box-shadow: 0 0 18px rgba(0, 0, 0, 0.08);
      line-height: 104px;
      padding: 0 34px;
      align-items: center;
      font-weight: bold;
      font-size: 30px;
      margin-bottom: 40px;
    }
  }
}
</style>
