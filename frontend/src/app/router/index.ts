import { createRouter, createWebHistory } from "vue-router";

import { homeRoutes } from "@/modules/home/home.routes";
import { authRoutes } from "@/modules/auth/auth.routes";
import { tasksRoutes } from "@/modules/tasks/tasks.routes";
import { settingsRoutes } from "@/modules/settings/settings.routes";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...homeRoutes,
    ...authRoutes,
    ...tasksRoutes,
    ...settingsRoutes
  ]
});

const privateRoutes = [
  "dashboard",
  "tasks",
  "pomodoro",
  "calendar",
  "settings"
];

router.beforeEach((to, _, next) => {
  const token = localStorage.getItem("focusflow-token");

  if (privateRoutes.includes(to.name as string) && !token) {
    return next("/login");
  }

  next();
});

export default router;
