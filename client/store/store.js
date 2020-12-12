import { createStore } from "vuex";
import { user } from "./user.js";

export const store = createStore({
  modules: {
    user,
  },
});
