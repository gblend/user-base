import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";

const app = createApp(App);
app.use(store);
app.use(router);
app.config.productionTip = true;
const { isNavigationFailure, NavigationFailureType } = router;
router.replace("/all-users").catch((e) => {
  if (!isNavigationFailure(e, NavigationFailureType.redirected)) {
    Promise.reject(e).then((r) => {
      return r;
    });
  }
});
app.mount("#app");
