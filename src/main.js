import { createApp } from "vue";
import App from "./App.vue";

import { createRouter, createWebHashHistory } from "vue-router";
import "./style.css";

import homee from "./pages/homee.vue";
import doi from "./pages/doi.vue";
import trei from "./pages/trei.vue";
import patru from "./pages/patru.vue";
import cinci from "./pages/cinci.vue";

const routes = [
  { path: "/", component: homee },
  { path: "/doi", component: doi },
  { path: "/trei", component: trei },
  { path: "/patru", component: patru },
  { path: "/cinci", component: cinci },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router).mount("#app");
