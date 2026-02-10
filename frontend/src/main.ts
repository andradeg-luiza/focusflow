import { createApp } from "vue";
import App from "./App.vue";
import router from "./app/router";
import { setupInterceptors } from "./app/http/interceptors";

setupInterceptors();

createApp(App).use(router).mount("#app");
