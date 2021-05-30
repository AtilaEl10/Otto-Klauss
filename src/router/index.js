import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/editar",
    name: "Editar",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Editar.vue"),
  },
  {
    path: "/agregar",
    name: "Agregar",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Agregar.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
