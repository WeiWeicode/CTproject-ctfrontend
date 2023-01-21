import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/router/Home.vue";
import Calculate from "./components/router/Calculate.vue";
import Settings from "./components/router/Settings.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/home",
    component: Home,
  },

  {
    path: "/Calculate",
    component: Calculate,
  },
  {
    path: "/Settings",
    component: Settings,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
