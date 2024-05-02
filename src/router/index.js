import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "الصفحة الرئيسية",
    // component: HomeView,
    component: () => import("../views/HomeView.vue"),
    props: { icon: "house" },
  },
  {
    path: "/about",
    name: "حول",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    props: { icon: "phone" },
  },
  {
    path: "/login",
    name: "تسجيل الدخول",
    component: () => import("../views/loginView.vue"),
    // props: {loc : location.href},
  },
  {
    path: "/articles",
    name: "المقالات",
    component: () => import("../views/articlesView.vue"),
    props: { icon: "newspaper" },
  },
  {
    path:'/:catchAll(.*)',
    name:'errorPage',
    component:()=>import('../views/errorPage.vue')
  },
 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),

  routes,
});
export default router;
