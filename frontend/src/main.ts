import { createApp } from "vue";
import App from "./App.vue";

import router from "@/app/router";
import { store } from "@/app/store";
import { setupInterceptors } from "@/app/http/interceptors";

setupInterceptors();

createApp(App)
  .use(router)
  .use(store)
  .mount("#app");
