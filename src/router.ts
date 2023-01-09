import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Index from "@/pages/index.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
