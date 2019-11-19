<template>
  <div class="detailedRecord">
    <div class="title-box">
      <img src="@/assets/image/bug-car-title.png" alt />
      <span class="title">{{
        type === "1" ? `详细记录` : `维修保养记录`
      }}</span>
    </div>
    <div class="record-item">
      <p class="date">2019/12/11<span v-if="type === '2'">保养</span></p>
      <div class="desc">
        <div class="desc-title">事故描述:</div>
        <div class="desc-content">
          <p>单方事故,行驶受损-直行-撞立柱,本车车损</p>
        </div>
      </div>
      <div class="desc">
        <div class="desc-title">维修金额:</div>
        <div class="desc-content">
          <p>108286元</p>
        </div>
      </div>
      <div class="desc">
        <div class="desc-title">材料金额:</div>
        <div class="desc-content">
          <p>999999元</p>
        </div>
      </div>
      <div class="desc">
        <div class="desc-title">材料详情:</div>
        <div class="desc-content">
          <p>无</p>
        </div>
      </div>
      <div class="desc">
        <div class="desc-title">维修详情:</div>
        <div class="desc-content">
          <p>左前车门整形修复(小),左后车门整形修复(小)左倒车镜喷漆</p>
        </div>
      </div>
    </div>
    <div class="record-item">
      <p class="date repair">2019/12/11<span v-if="type === '2'">保养</span></p>
      <div class="desc">
        <div class="desc-title">事故描述:</div>
        <div class="desc-content">
          <p>单方事故,行驶受损-直行-撞立柱,本车车损</p>
        </div>
      </div>
      <div class="desc">
        <div class="desc-title">维修金额:</div>
        <div class="desc-content">
          <p>108286元</p>
        </div>
      </div>
      <div class="desc">
        <div class="desc-title">材料金额:</div>
        <div class="desc-content">
          <p>999999元</p>
        </div>
      </div>
      <div class="desc">
        <div class="desc-title">材料详情:</div>
        <div class="desc-content">
          <p>无</p>
        </div>
      </div>
      <div class="desc">
        <div class="desc-title">维修详情:</div>
        <div class="desc-content">
          <p>左前车门整形修复(小),左后车门整形修复(小)左倒车镜喷漆</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "detailedRecord",
  props: {
    type: {
      type: String,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
.detailedRecord {
  background-color: #fff;
  padding: 42px 32px;
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
  .record-item {
    padding-top: 42px;
    .date {
      font-size: 28px;
      font-weight: bold;
      color: #666;
      padding-left: 20px;
      position: relative;
      margin-bottom: 10px;
      span {
        width: 73px;
        background: rgba(227, 255, 218, 1);
        border: 1px solid rgba(45, 191, 1, 1);
        border-radius: 15px;
        line-height: 30px;
        font-weight: 300;
        color: #2dbf01;
        font-size: 22px;
        padding: 0 15px;
        margin-left: 15px;
      }
      &.repair {
        span {
          border: 1px solid #d0392a;
          color: #d0392a;
          background-color: #ffcece;
        }
      }
      &::after {
        content: "";
        width: 10px;
        height: 30px;
        background-color: #f88706;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 5px;
      }
    }
    .desc {
      display: flex;
      font-size: 24px;
      color: #333;
      width: 100%;
      p,
      .desc-title {
        line-height: 42px;
      }
      .desc-title {
        width: 120px;
      }
      .desc-content {
        width: 540px;
      }
    }
  }
}
</style>
