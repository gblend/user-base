import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/all-users",
    name: "AllUsers",
    // route level code-splitting
    // this generates a separate chunk (users.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Users.vue"),
  },
  {
    path: "/male-users",
    name: "MaleUsers",
    component: () => import("../components/MaleUsers"),
  },
  {
    path: "/female-users",
    name: "FemaleUsers",
    component: () => import("../components/FemaleUsers"),
  },
  {
    path: "/country",
    name: "Country",
    component: () => import("../components/Country"),
  },
  {
    path: "/user",
    name: "User",
    component: () => import("../components/User"),
  },
  {
    path: "/search-results",
    name: "SearchResults",
    component: () => import("../components/SearchResults"),
  },
  {
    path: "/*",
    name: "redirect",
    redirect: "/all-users",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  mode: "abstract",
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
