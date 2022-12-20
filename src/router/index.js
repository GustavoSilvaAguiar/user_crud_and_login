import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import authRoutes from "@/modules/auth/auth.routes";
import homeRoutes from "@/modules/home/home.routes";

const routes = [
  ...authRoutes,
  {
    path: "/",
    name: "home",
    component: HomeView,
    children: [...homeRoutes],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
