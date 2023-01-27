import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/router/Home.vue";
import Calculate from "./components/router/Calculate.vue";
import Settings from "./components/router/Settings.vue";
import About from "./components/router/About.vue";
import Blog from "./components/router/Blog.vue";
import Product from "./components/router/Product.vue";
import Statistical from "./components/router/Statistical.vue";

import roadsection from "./components/package/segments/roadsection.vue";
import productfeed from "./components/package/product/productfeed.vue";
import blogfeed from "./components/package/blog/blogfeed.vue";
import chart from "./components/chart/chart.vue"

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
    path: "/Calculate/roadsection/:id",
    component: roadsection,
  },
 
  {
    path: "/Statistical/chart/:id",
    component: chart,
  },

  {
    path: "/Product/productfeed/:id",
    component: productfeed,
  },

  {
    path: "/Blog/blogfeed/:id",
    component: blogfeed,
  },


  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
