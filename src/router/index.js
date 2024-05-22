import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "الصفحة الرئيسية",
    // component: HomeView,
    component: () => import("../views/HomeView.vue"),
    icon: "house",
  },
  {
    path: "/profile",
    name: "الصفحة الشخصية",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/profile/profileView.vue"
      ),
    icon: "user-circle",
    // props: true,
    // props:default: true,
  },
  {
    path: "/userProfile",
    name: "صفحة مستخدم",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/profile/userProfile.vue"
      ),
    icon: "user-circle",
    // props: true,
    // props:default: true,
    children: [
      {
        path: "/userProfile:catchAll(.*)",
        name: "errorPage",
        component: () => import("../views/errorPage.vue"),
      },
    ],
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
    component: () => import("../views/articles/articlesView.vue"),
    icon: "newspaper",
    children: [
      {
        path: ":id",

        component: () =>
          import("../views/articles/components/savedArticles.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)",
    name: "errorPage",
    component: () => import("../views/errorPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
