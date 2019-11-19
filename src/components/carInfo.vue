<template>
  <div class="carInfo">
    <img :src="carInfo.image" alt="" class="car-image" />
    <div class="car-detail">
      <p class="name">{{ carInfo.name }}</p>
      <p class="vin">vin：{{ carInfo.vin }}</p>
      <p class="date">报告生成日期：{{ carInfo.date }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "carInfo",
  data() {
    return {
      carInfo: {
        name: "大众CC",
        vin: "95278956546",
        date: "2019/12/11",
        image:
          "https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=1083665406,1642738989&fm=85&s=D4AA2FF34F1A26C85AAD300B030050D4"
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.carInfo {
  display: flex;
  padding: 16px 20px;
  background-color: #fff !important;
  .car-image {
    width: 144px;
    height: 144px;
  }
  .car-detail {
    padding-left: 18px;
    padding-top: 12px;
    .name {
      color: #171717;
      font-weight: bold;
      font-size: 28px;
      padding-bottom: 20px;
    }
    .date,
    .vin {
      font-size: 26px;
      padding-bottom: 22px;
      color: #666;
    }
  }
}
</style>
