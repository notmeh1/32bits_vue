import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/index",
    name: "Index",
    component: () => import('../views/Index.vue'),
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/sellings',
    name: 'sellings',
    component: () => import('../views/Sellings.vue')
  },
  {
    path: '/total',
    name: 'total',
    component: () => import('../views/Total.vue')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
