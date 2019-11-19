<template>
  <div class="tab-bar van-hairline--top">
    <div
      v-for="(item, idx) in tabs"
      :key="idx"
      :class="['bar-item', tabBar === item.name ? 'active' : '']"
      @click="clickHandler(item.name)"
    >
      <i :class="['iconfont', item.icon]"></i>
      <div class="label">{{ item.label }}</div>
    </div>
  </div>
</template>

<script>
import { sessionGetItem } from "@/utils/util";

export default {
  data() {
    return {
      tabs: [
        {
          label: "首页",
          icon: "icon-shouye",
          name: "home"
        },
        {
          label: "记录",
          icon: "icon-fenlei1",
          name: "record"
        },
        {
          label: "我的",
          icon: "icon-weibiaoti-_huabanfuben",
          name: "my"
        }
      ],
      tabBar: sessionGetItem("tabBar") || "home"
    };
  },
  watch: {
    $route(to) {
      if (["home", "my", "record"].includes(to.name)) {
        this.tabBar = to.name;
      }
    }
  },
  methods: {
    clickHandler(routerName) {
      this.tabBar = routerName;
      this.$router.push({ name: routerName });
    }
  }
};
</script>

<style lang="scss" scoped>
.tab-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  .bar-item {
    flex: 1;
    font-size: 22px;
    text-align: center;
    .iconfont {
      font-size: 44px;
    }
  }
  .bar-item.active {
    color: #f88706;
  }
}
</style>
