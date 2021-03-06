// import { createRouter, createWebHashHistory } from "vue-router";
import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/Home.vue";
import ProductList from "../views/ProductList.vue";
import Shoppingcart from "../views/Shoppingcart.vue";
import Explore from "../views/Explore.vue";
import Options from "../views/Options.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/products/:id",
    name: "ProductList",
    component: ProductList,
  },
  {
    path: "/shoppingcart",
    name: "Shoppingcart",
    component: Shoppingcart,
  },
  {
    path: "/explore",
    name: "Explore",
    component: Explore,
  },
  {
    path: "/options",
    name: "Options",
    component: Options,
  },

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

// const router = createRouter({
//   history: createWebHashHistory(process.env.BASE_URL),
//   routes,
// });
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
