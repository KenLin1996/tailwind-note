import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/index.vue";
import Article from "../pages/ArticlePage.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/article", component: Article },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
