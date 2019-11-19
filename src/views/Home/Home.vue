<template>
  <div class="home">
    <swiper :bannerList="bannerList"></swiper>
    <div class="nav">
      <div class="title-box">
        <img src="@/assets/image/bug-car-title.png" alt="" />
        <span class="title">买车必查</span>
        <span class="title-desc">全方位剖析车辆信息，了解车况</span>
      </div>
      <div class="nav-item-box">
        <div class="nav-item" @click="toReparilSearch(1)">
          <div class="nav-item-left">
            <img src="@/assets/image/track-record.png" alt="" />
          </div>
          <div class="nav-item-right">
            <h3>查维修记录</h3>
            <p>查维修保养记录, 轻松判断问题车</p>
          </div>
        </div>
        <div class="nav-item" @click="toReparilSearch(2)">
          <div class="nav-item-left">
            <img src="@/assets/image/insurance.png" alt="" />
          </div>
          <div class="nav-item-right">
            <h3>查出险理赔</h3>
            <p>全国范围内理赔记录, 一键轻松查询</p>
          </div>
        </div>
      </div>
    </div>
    <div class="record-list">
      <div class="record-list-title">
        <img src="@/assets/image/search-icon.png" alt="" />
        <h2>最近查询</h2>
      </div>
      <div class="record-list-box">
        <div class="record-list-item van-hairline--bottom">
          <p class="repail"><span>维修记录</span><span>2019/11/1</span></p>
          <p class="frame-number"><span>车架号</span><span>查询中</span></p>
        </div>
        <div class="record-list-item van-hairline--bottom">
          <p class="repail"><span>维修记录</span><span>2019/11/1</span></p>
          <p class="frame-number"><span>车架号</span><span>查询中</span></p>
        </div>
        <div class="record-list-item van-hairline--bottom">
          <p class="repail"><span>维修记录</span><span>2019/11/1</span></p>
          <p class="frame-number"><span>车架号</span><span>查询中</span></p>
        </div>
        <div class="record-list-item van-hairline--bottom">
          <p class="repail"><span>维修记录</span><span>2019/11/1</span></p>
          <p class="frame-number"><span>车架号</span><span>查询中</span></p>
        </div>
        <div class="record-list-item van-hairline--bottom">
          <p class="repail"><span>维修记录</span><span>2019/11/1</span></p>
          <p class="frame-number"><span>车架号</span><span>查询中</span></p>
        </div>
      </div>
    </div>
    <div class="record-more">
      <span>查询更多记录<van-icon name="arrow"/></span>
    </div>
  </div>
</template>
<script>
import swiper from "@/components/swiper";
export default {
  name: "home",
  components: {
    swiper
  },
  data() {
    return {
      bannerList: [
        {
          image:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1158873959,778733211&fm=26&gp=0.jpg"
        },
        {
          image:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=246167154,3340567774&fm=26&gp=0.jpg"
        },
        {
          image:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1253362604,3378436877&fm=26&gp=0.jpg"
        }
      ]
    };
  },
  methods: {
    toReparilSearch(type) {
      this.$router.push({ path: "/RepairSearch", query: { type } });
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  .nav {
    padding: 40px 30px 50px;
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
    .nav-item-box {
      width: 100%;
      padding-top: 36px;
      .nav-item {
        display: flex;
        border-radius: 20px;
        box-shadow: 0 9px 20px 1px hsla(0, 0%, 67%, 0.33);
        padding: 30px 17px;
        margin-bottom: 35px;
        &:last-child {
          margin-bottom: 0;
        }
        .nav-item-left {
          padding-right: 22px;
          img {
            width: 86px;
            height: 86px;
            display: block;
          }
        }
        .nav-item-right {
          h3 {
            color: #f88706;
            font-size: 32px;
            font-weight: bold;
            padding: 12px 0 10px;
          }
          p {
            font-size: 22px;
            color: #999;
          }
        }
      }
    }
  }
  .record-list {
    padding: 0 32px 0 46px;
    .record-list-title {
      display: flex;
      img {
        width: 33px;
        height: 33px;
        display: block;
      }
      h2 {
        padding-left: 16px;
        font-size: 30px;
        font-weight: bold;
      }
    }
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
  .record-more {
    padding: 40px 0 30px;
    color: #666666;
    font-size: 26px;
    font-weight: 500;
    text-align: center;
    span {
      .van-icon-arrow:before {
        vertical-align: -3px;
      }
    }
  }
}
</style>
