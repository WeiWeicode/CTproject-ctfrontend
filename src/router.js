import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/router/Home.vue";
import Calculate from "./components/router/Calculate.vue";
import Settings from "./components/router/Settings.vue";
import Statistical from "./components/router/Statistical.vue";
import About from "./components/router/About.vue";
import Product from "./components/router/Product.vue";
import Blog from "./components/router/Blog.vue";


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
  {
    path: "/Statistical",
    component: Statistical,
  },
  {
    path: "/About",
    component: About,
  },
  {
    path: "/Product",
    component: Product,
  },
  {
    path: "/Blog",
    component: Blog,
  },


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
