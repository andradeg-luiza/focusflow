import LoginPage from "./pages/LoginPage.vue";
import RegisterPage from "./pages/RegisterPage.vue";

export const authRoutes = [
  {
    path: "/login",
    name: "login",
    component: LoginPage
  },
  {
    path: "/register",
    name: "register",
    component: RegisterPage
  }
];
