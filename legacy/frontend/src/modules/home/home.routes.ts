import HomePage from "./pages/HomePage.vue";

export const homeRoutes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
    meta: { requiresAuth: true }
  }
];
