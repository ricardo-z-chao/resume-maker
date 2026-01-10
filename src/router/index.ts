import Vue from 'vue';
import VueRouter, { type RouteConfig } from 'vue-router';
import HelloPage from '@/views/HelloPage.vue';
import ResumeList from '@/layout/ResumeList.vue';
import { isFirstVisited, markVisited } from '@/utils';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/hello',
    component: HelloPage,
  },
  {
    path: '/',
    component: ResumeList,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_BASE_PATH,
  routes,
});

router.beforeEach((to, _from, next) => {
  if (to.path === '/hello') {
    if (isFirstVisited()) {
      markVisited();
      next();
    } else {
      next('/');
    }
  } else if (isFirstVisited()) {
    next('/hello');
  } else {
    next();
  }
});

export default router;
