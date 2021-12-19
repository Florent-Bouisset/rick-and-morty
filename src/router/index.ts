import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/characters/:id",
    name: "CharacterDetails",
    components: {
      default: () =>
        import(/* webpackChunkName: "characters" */ "../views/Characters.vue"),

      modal: () =>
        import(
          /* webpackChunkName: "characters-details" */ "../views/CharactersDetails.vue"
        ),
    },
  },
  {
    path: "/characters",
    name: "Characters",
    component: () =>
      import(/* webpackChunkName: "characters" */ "../views/Characters.vue"),
  },
  {
    path: "*",
    redirect: { name: "Characters" },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
