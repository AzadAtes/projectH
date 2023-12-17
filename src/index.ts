import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import HelloWorld from "./components/HelloWorld.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: HomeView },
    { path: "/about", name: "About", component: AboutView },
    { path: "/hello-world", name: "HelloWorld", component: HelloWorld },
  ],
});
export default router;
