import Vue from "vue";
import VueRouter, { type RouteConfig } from "vue-router";
import HomePage from "@/views/HomePage.vue";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/",
    component: HomePage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.VUE_APP_BASE_PATH,
  routes,
});

export default router;
