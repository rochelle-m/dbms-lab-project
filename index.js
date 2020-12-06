import { createApp } from "vue";
import { router } from "./routes.js";
import MainApp from "./Main.vue";

const app = createApp(MainApp);
app.use(router);
app.mount("#app");
