<template>
  <div class="InsureDetail">
    <car-info></car-info>
    <div class="report-rules">
      <span>
        报告解读规则
        <van-icon name="arrow" />
      </span>
    </div>
    <div class="car-survey">
      <div class="title-box">
        <img src="@/assets/image/bug-car-title.png" alt />
        <span class="title">出险理赔摘要</span>
      </div>
      <div class="car-survey-list">
        <div class="car-survey-list-item van-hairline--bottom">
          <span>最后维保时间</span>
          <span>2019/11/1</span>
        </div>
        <div class="car-survey-list-item van-hairline--bottom">
          <span>总里程数</span>
          <span>2561465公里</span>
        </div>
        <div class="car-survey-list-item van-hairline--bottom">
          <span>异常排查</span>
          <div class="surey-list-icon">
            <div class="surey-list-icon-item success">
              <img src="@/assets/image/course.png" alt />
              <span>火烧检测(异常)</span>
            </div>
            <div class="surey-list-icon-item fail">
              <img src="@/assets/image/course.png" alt />
              <span>火烧检测(异常)</span>
            </div>
            <div class="surey-list-icon-item fail">
              <img src="@/assets/image/course.png" alt />
              <span>火烧检测(异常)</span>
            </div>
          </div>
        </div>
        <div
          class="car-survey-list-item important-parts"
          @click="importantParts = !importantParts"
        >
          <span>重要部件</span>
          <div class="surey-list-icon important-parts-right">
            <img src="@/assets/image/course.png" alt />
            <van-icon :name="importantParts ? 'arrow-down' : 'arrow'" />
          </div>
        </div>
        <transition name="slide">
          <div class="important-parts-content" v-if="importantParts">
            <div class="important-parts-item">
              <img src="@/assets/image/course.png" alt />
              <p>发动机</p>
            </div>
            <div class="important-parts-item">
              <img src="@/assets/image/course.png" alt />
              <p>发动机</p>
            </div>
            <div class="important-parts-item">
              <img src="@/assets/image/course.png" alt />
              <p>发动机</p>
            </div>
            <div class="important-parts-item">
              <img src="@/assets/image/course.png" alt />
              <p>发动机</p>
            </div>
            <div class="important-parts-item">
              <img src="@/assets/image/course.png" alt />
              <p>发动机</p>
            </div>
            <div class="important-parts-item">
              <img src="@/assets/image/course.png" alt />
              <p>发动机</p>
            </div>
            <div class="important-parts-item">
              <img src="@/assets/image/course.png" alt />
              <p>发动机</p>
            </div>
            <div class="important-parts-item">
              <img src="@/assets/image/course.png" alt />
              <p>发动机</p>
            </div>
            <div class="important-parts-item">
              <img src="@/assets/image/course.png" alt />
              <p>发动机</p>
            </div>
            <div class="important-parts-item">
              <img src="@/assets/image/course.png" alt />
              <p>发动机</p>
            </div>
            <div class="important-parts-item">
              <img src="@/assets/image/course.png" alt />
              <p>发动机</p>
            </div>
            <div class="important-parts-item">
              <img src="@/assets/image/course.png" alt />
              <p>发动机</p>
            </div>
            <div class="important-parts-item">
              <img src="@/assets/image/course.png" alt />
              <p>发动机</p>
            </div>
            <div class="important-parts-item">
              <img src="@/assets/image/course.png" alt />
              <p>发动机</p>
            </div>
          </div>
        </transition>
        <div
          class="car-survey-list-item important-parts"
          @click="carStructure = !carStructure"
        >
          <span>车型结构排查</span>
          <div class="surey-list-icon important-parts-right">
            <img src="@/assets/image/course.png" alt />
            <van-icon :name="carStructure ? 'arrow-down' : 'arrow'" />
          </div>
        </div>
        <transition name="slide">
          <div class="important-parts-content" v-if="carStructure">
            <div class="important-parts-item">
              <img src="@/assets/image/course.png" alt />
              <p>发动机</p>
            </div>
            <div class="important-parts-item">
              <img src="@/assets/image/course.png" alt />
              <p>发动机</p>
            </div>
            <div class="important-parts-item">
              <img src="@/assets/image/course.png" alt />
              <p>发动机</p>
            </div>
            <div class="important-parts-item">
              <img src="@/assets/image/course.png" alt />
              <p>发动机</p>
            </div>
            <div class="important-parts-item">
              <img src="@/assets/image/course.png" alt />
              <p>发动机</p>
            </div>
            <div class="important-parts-item">
              <img src="@/assets/image/course.png" alt />
              <p>发动机</p>
            </div>
            <div class="important-parts-item">
              <img src="@/assets/image/course.png" alt />
              <p>发动机</p>
            </div>
            <div class="important-parts-item">
              <img src="@/assets/image/course.png" alt />
              <p>发动机</p>
            </div>
            <div class="important-parts-item">
              <img src="@/assets/image/course.png" alt />
              <p>发动机</p>
            </div>
            <div class="important-parts-item">
              <img src="@/assets/image/course.png" alt />
              <p>发动机</p>
            </div>
            <div class="important-parts-item">
              <img src="@/assets/image/course.png" alt />
              <p>发动机</p>
            </div>
            <div class="important-parts-item">
              <img src="@/assets/image/course.png" alt />
              <p>发动机</p>
            </div>
            <div class="important-parts-item">
              <img src="@/assets/image/course.png" alt />
              <p>发动机</p>
            </div>
            <div class="important-parts-item">
              <img src="@/assets/image/course.png" alt />
              <p>发动机</p>
            </div>
          </div>
        </transition>
        <div
          class="car-survey-list-item important-parts"
          @click="carAppearance = !carAppearance"
        >
          <span>外观覆盖件排查</span>
          <div class="surey-list-icon important-parts-right">
            <img src="@/assets/image/course.png" alt />
            <van-icon :name="carAppearance ? 'arrow-down' : 'arrow'" />
          </div>
        </div>
        <transition name="draw">
          <div class="important-parts-content" v-if="carAppearance">
            <div class="important-parts-item">
              <img src="@/assets/image/course.png" alt />
              <p>发动机</p>
            </div>
            <div class="important-parts-item">
              <img src="@/assets/image/course.png" alt />
              <p>发动机</p>
            </div>
            <div class="important-parts-item">
              <img src="@/assets/image/course.png" alt />
              <p>发动机</p>
            </div>
            <div class="important-parts-item">
              <img src="@/assets/image/course.png" alt />
              <p>发动机</p>
            </div>
            <div class="important-parts-item">
              <img src="@/assets/image/course.png" alt />
              <p>发动机</p>
            </div>
            <div class="important-parts-item">
              <img src="@/assets/image/course.png" alt />
              <p>发动机</p>
            </div>
            <div class="important-parts-item">
              <img src="@/assets/image/course.png" alt />
              <p>发动机</p>
            </div>
            <div class="important-parts-item">
              <img src="@/assets/image/course.png" alt />
              <p>发动机</p>
            </div>
            <div class="important-parts-item">
              <img src="@/assets/image/course.png" alt />
              <p>发动机</p>
            </div>
            <div class="important-parts-item">
              <img src="@/assets/image/course.png" alt />
              <p>发动机</p>
            </div>
            <div class="important-parts-item">
              <img src="@/assets/image/course.png" alt />
              <p>发动机</p>
            </div>
            <div class="important-parts-item">
              <img src="@/assets/image/course.png" alt />
              <p>发动机</p>
            </div>
            <div class="important-parts-item">
              <img src="@/assets/image/course.png" alt />
              <p>发动机</p>
            </div>
            <div class="important-parts-item">
              <img src="@/assets/image/course.png" alt />
              <p>发动机</p>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div class="detailed-record">
      <detailed-record type="2"></detailed-record>
    </div>
  </div>
</template>
<script>
import carInfo from "@/components/carInfo";
import detailedRecord from "@/components/detailedRecord";
export default {
  name: "InsureDetail",
  components: { carInfo, detailedRecord },
  data() {
    return {
      activeName: ["0"],
      importantParts: false,
      carStructure: false,
      carAppearance: false
    };
  }
};
</script>
<style lang="scss" scoped>
.InsureDetail {
  background-color: #f2f2f2;
  .detailed-record {
    margin-top: 20px;
  }
  .report-rules {
    padding: 19px 0;
    color: #666666;
    font-size: 26px;
    font-weight: 500;
    text-align: center;
    color: #f88706;
    span {
      .van-icon-arrow:before {
        vertical-align: -4px;
      }
    }
  }
  .car-survey {
    background-color: #fff;
    padding: 42px 0 10px;
    .title-box {
      display: flex;
      padding: 0 28px;
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
    .car-survey-list {
      padding-top: 10px;
      .car-survey-list-item {
        display: flex;
        justify-content: space-between;
        font-size: 28px;
        font-weight: 500;
        padding: 0 28px;
        line-height: 86px;
        .surey-list-icon {
          display: flex;
          .surey-list-icon-item {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 18px;
            height: 86px;
            line-height: 24px;
            margin-left: 30px;
            &.fail {
              color: #d0392a;
            }
            &.success {
              color: #2dbf01;
            }
            img {
              width: 32px;
              height: 32px;
              display: block;
              margin: 15px 0 5px 0;
            }
          }
        }
        &.important-parts {
          font-weight: bold;
          line-height: 110px;
          position: relative;
          border-bottom: 1px solid #f3f3f3;
          padding-left: 50px;
          &:last-child {
            border: none;
          }
          &::after {
            content: "";
            width: 10px;
            height: 31px;
            background-color: #f88706;
            position: absolute;
            left: 30px;
            top: 50%;
            transform: translateY(-50%);
            border-radius: 5px;
          }
          .important-parts-right {
            display: flex;
            align-items: center;
            font-weight: 30px;
            img {
              display: block;
              width: 36px;
              height: 32px;
              margin-right: 10px;
            }
          }
        }
      }
    }
    .important-parts-content {
      padding: 40px 30px;
      display: flex;
      flex-flow: wrap;
      -o-transition: height 0.6s;
      .important-parts-item {
        width: 214px;
        height: 100px;
        border: 1px solid rgba(242, 242, 242, 1);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 26px;
        color: #333;
        font-weight: 500;
        margin-bottom: 20px;
        &:nth-child(3n-1) {
          margin: 0 20px;
        }
        img {
          display: block;
          width: 35px;
          height: 35px;
          margin-right: 20px;
        }
      }
    }
  }
}
</style>
