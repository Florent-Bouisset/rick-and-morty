import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/characters",
    name: "Characters",
    component: () =>
      import(/* webpackChunkName: "characters" */ "../views/Characters.vue"),
  },
  {
    path: "/characters/:id",
    name: "CharacterDetails",
    component: () =>
      import(
        /* webpackChunkName: "characters-details" */ "../views/CharactersDetails.vue"
      ),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
