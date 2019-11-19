import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store";
import filters from "./filters";
import Vant from "vant";
import "vant/lib/index.css";

Vue.use(Vant);
Vue.config.productionTip = false;

Object.keys(filters).forEach(filterName => {
  Vue.filter(filterName, filters[filterName]);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
