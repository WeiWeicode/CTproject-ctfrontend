import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/router/Home.vue";
import Calculate from "./components/router/Calculate.vue";
import Settings from "./components/router/Settings.vue";
import About from "./components/router/About.vue";
import Blog from "./components/router/Blog.vue";
import Product from "./components/router/Product.vue";
import Statistical from "./components/router/Statistical.vue";
import x7pro from "./components/package/Product/x7pro.vue";

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
    path: "/About",
    component: About,
  },
  {
    path: "/Blog",
    component: Blog,
  },
  {
    path: "/Product",
    component: Product,
  },
  
  {
    path: "/Statistical",
    component: Statistical,
  },

  {
    path: "/Product/x7pro",
    component: x7pro,
  },
 



  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
