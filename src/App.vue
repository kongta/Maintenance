<template>
  <div id="app">
    <Layout>
      <router-view />
    </Layout>
  </div>
</template>

<script>
import Layout from "@/layouts";
export default {
  name: "App",
  components: {
    Layout
  }
};
</script>

<style lang="scss">
@import "@/assets/style/reset.scss";
@import "@/assets/style/common.scss";
@import "@/assets/style/iconfont.scss";
</style>
