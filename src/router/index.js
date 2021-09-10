import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    name: "notfound",
    component: () => import('../views/NotFound.vue')
  },
  {
    path: "/index",
    name: "index",
    alias: ["/", "/inicio"],
    component: () => import('../views/Index.vue'),
  },
  {
    path: '/search',
    name: 'search',
    alias: ["/busqueda", "/buscar"],
    component: () => import('../views/Search.vue')
  },
  {
    path: '/sellings',
    name: 'sellings',
    alias: ["/ventas"],
    component: () => import('../views/Sellings.vue')
  },
  {
    path: '/total',
    name: 'total',
    component: () => import('../views/Total.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/Cart.vue')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
