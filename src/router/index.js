import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/users",
    name: "Users",
    // route level code-splitting
    // this generates a separate chunk (users.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Users.vue")
  },
  {
    path: "/user",
    name: "user",
    component: () => import("../components/User")
  },
  {
    path: "/search",
    name: "SearchResults",
    component: () => import("../components/SearchResults")
  },
  {
    path: "*",
    name: "redirect",
    redirect: "/users"
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;
