import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/record",
      name: "record",
      component: () =>
        import(/* webpackChunkName: "record" */ "@/views/Record/Record.vue")
    },
    {
      path: "/my",
      name: "my",
      component: () => import(/* webpackChunkName: "my" */ "@/views/My/My.vue")
    },
    {
      path: "/RepairSearch",
      name: "RepairSearch",
      component: () =>
        import(
          /* webpackChunkName: "RepairSearch" */ "@/views/RepairSearch/RepairSearch.vue"
        )
    },
    {
      path: "/RepairDetail",
      name: "RepairDetail",
      component: () =>
        import(
          /* webpackChunkName: "RepairSearch" */ "@/views/RepairDetail/RepairDetail.vue"
        )
    },
    {
      path: "/InsureDetail",
      name: "InsureDetail",
      component: () =>
        import(
          /* webpackChunkName: "RepairSearch" */ "@/views/InsureDetail/InsureDetail.vue"
        )
    },
    {
      path: "/OrderDetail",
      name: "OrderDetail",
      component: () =>
        import(
          /* webpackChunkName: "RepairSearch" */ "@/views/OrderDetail/OrderDetail.vue"
        )
    },
    {
      path: "/bindPhone",
      name: "bindPhone",
      component: () =>
        import(
          /* webpackChunkName: "RepairSearch" */ "@/views/bindPhone/bindPhone.vue"
        )
    }
  ]
});
