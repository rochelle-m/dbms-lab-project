import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "./Home.vue";
import Account from "./Account.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: App,
    },
    {
      name: "home",
      path: "/home",
      component: Home,
      props: true,
    },
    {
      name: "account",
      path: "/account",
      component: Account,
      props: true,
    },
  ],
});
