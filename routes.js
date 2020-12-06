import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "./Home.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: App,
    },
    {
      path: "/home",
      component: Home,
    },
  ],
});
