<template>
  <div class="bindPhone">
    <img class="logo" src="@/assets/image/logo.png" alt="" />
    <div class="bind-phone-box">
      <p>绑定手机号</p>
      <div class="bind-phone-item" placeholder><input type="phone" /></div>
      <div class="bind-phone-item"><input type="text" /></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "bindPhone",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.bindPhone {
  display: flex;
  flex-direction: column;
  align-items: center;
  .logo {
    width: 142px;
    height: 284px;
    display: block;
  }
  .bind-phone-box {
    width: 100%;
    padding: 0 46px;
    .bind-phone-item {
      margin-bottom: 10px;
      input {
        width: 100%;
        height: 90px;
      }
    }
  }
}
</style>
