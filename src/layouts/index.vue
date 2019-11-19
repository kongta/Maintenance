<template>
  <div class="layout-container">
    <div :class="['content-container', { 'have-bar': isBar }]">
      <slot></slot>
    </div>
    <TabBar v-show="isBar" />
  </div>
</template>

<script>
import TabBar from "./tabBar";

export default {
  name: "Layout",
  components: {
    TabBar
  },
  data() {
    return {};
  },
  computed: {
    isBar() {
      let whiteNameList = ["home", "my", "record"];
      return whiteNameList.includes(this.$route.name);
    }
  }
};
</script>

<style lang="scss" scoped>
.layout-container {
  height: 100vh;
  .content-container {
    overflow-x: hidden;
    overflow-y: scroll;
    height: 100%;
  }
  .have-bar {
    height: calc(100vh - 100px);
  }
}
</style>
