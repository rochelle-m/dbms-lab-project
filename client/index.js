import { createApp } from "vue";
import { router } from "./routes.js";
import { store } from "./store/store.js";
import MainApp from "./Main.vue";

const app = createApp(MainApp);
app.use(router);
app.use(store);
app.mount("#app");
