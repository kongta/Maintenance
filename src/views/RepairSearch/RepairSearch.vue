<template>
  <div class="RepairSearch">
    <swiper :bannerList="bannerList"> </swiper>
    <div class="wirte-info">
      <p class="tips">温馨提示：资料填写越完整，查询成功率越高哦</p>
      <div class="info-box">
        <van-cell-group>
          <van-field
            v-model="frameNumber"
            clearable
            label="车架号"
            right-icon="photo"
            placeholder="输入或扫描车架号"
            @click-right-icon="$toast('question')"
          />
          <van-field
            v-model="brand"
            label="品牌选择"
            placeholder="输入车辆品牌"
          />
          <van-field
            v-model="engineNumber"
            label="发动机号"
            placeholder="输入完整发动机号"
          />
        </van-cell-group>
      </div>
      <div class="agreement-choose">
        <van-checkbox v-model="checked" shape="square" checked-color="#f88706">
          <p>
            我已阅读且同意<span class="agreement"
              >《维保出险VIN查询服务协议》</span
            >
          </p></van-checkbox
        >
      </div>
      <div class="btn-groud">
        <van-button plain type="primary" @click="toDetail"
          >查看样例报告</van-button
        >
        <van-button plain type="primary" class="now-check">立即查询</van-button>
      </div>
    </div>
    <div class="record-box">
      <record-list :recordList="recordList" :type="type"></record-list>
    </div>
  </div>
</template>
<script>
import swiper from "@/components/swiper";
import recordList from "@/components/recordList";
export default {
  name: "RepairSearch",
  components: { swiper, recordList },
  data() {
    return {
      type: this.$route.query.type,
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
      ],
      frameNumber: "",
      brand: "",
      engineNumber: "",
      checked: false,
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
  },
  methods: {
    toDetail() {
      this.type === 1
        ? this.$router.push("/RepairDetail")
        : this.$router.push("/InsureDetail");
    }
  }
};
</script>
<style lang="scss" scoped>
.RepairSearch {
  background-color: #f2f2f2;
  .wirte-info {
    padding: 20px 28px 46px;
    background-color: #fff;
    .tips {
      font-size: 22px;
      color: #f88706;
      padding-bottom: 20px;
    }
    .info-box {
      .van-cell {
        line-height: 90px;
        font-size: 30px;
        font-weight: 500;
        color: #333;
        &:first-of-type {
          /deep/.van-field__label {
            width: 190px;
            &::after {
              content: "*";
              color: #f88706;
              padding-left: 10px;
            }
          }
        }
        /deep/.van-field__label {
          width: 190px;
        }
        /deep/ .van-field__right-icon .van-icon {
          font-size: 40px;
        }
      }
    }
    .agreement-choose {
      padding: 38px 0;
      /deep/.van-checkbox {
        font-size: 22px;
        line-height: 24px;
        .agreement {
          color: #f88706;
        }
        .van-checkbox__icon,
        .van-checkbox__icon,
        .van-icon {
          width: 24px;
          height: 24px;
          line-height: 24px;
        }
      }
    }
    .btn-groud {
      display: flex;
      justify-content: center;
      /deep/ .van-button--normal {
        width: 280px;
        height: 90px;
        margin: 0 33px;
        border-radius: 10px;
        border: 1px solid #f88706;
        color: #f88706;
        font-size: 30px;
        font-weight: 500;
      }
      .now-check {
        border: 1px solid #f2f2f2;
        background: #f2f2f2;
        font-weight: bold;
        color: #999;
      }
    }
  }
  .record-box {
    padding-top: 20px;
  }
}
</style>
