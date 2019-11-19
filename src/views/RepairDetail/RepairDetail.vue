<template>
  <div class="RepairDetail">
    <car-info></car-info>
    <div class="summary-claims">
      <div class="title-box">
        <img src="@/assets/image/bug-car-title.png" alt="" />
        <span class="title">出险理赔摘要</span>
      </div>
      <div class="ummary-detail">
        <div class="count-box">
          <p class="desc">理赔总次数</p>
          <p class="count"><span>2</span>次</p>
        </div>
        <div class="money-box">
          <p class="desc">理赔总金额</p>
          <p class="count">￥<span>88888</span></p>
        </div>
      </div>
    </div>
    <div class="detailed-record">
      <detailed-record type="1"></detailed-record>
    </div>
  </div>
</template>
<script>
import carInfo from "@/components/carInfo";
import detailedRecord from "@/components/detailedRecord";
export default {
  name: "RepairDetail",
  components: { carInfo, detailedRecord },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.RepairDetail {
  background-color: #f2f2f2;
  .summary-claims {
    background-color: #fff;
    padding: 50px 32px;
    margin-top: 20px;
    .title-box {
      display: flex;
      img {
        width: 35px;
        height: 31px;
        display: block;
      }
      .title {
        font-size: 30px;
        padding: 0 16px;
        font-weight: bold;
      }
      .title-desc {
        font-size: 22px;
        color: #999;
        padding-top: 6px;
      }
    }
    .ummary-detail {
      display: flex;
      justify-content: space-between;
      padding-top: 50px;
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
          font-weight: 500;
          font-size: 28px;
        }
        .count {
          text-align: center;
          font-size: 30px;
          padding-top: 28px;
          font-weight: bold;
          span {
            color: #fe0000;
            font-size: 40px;
          }
        }
      }
    }
  }
  .detailed-record {
    margin-top: 20px;
  }
}
</style>
