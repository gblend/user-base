window.axios = require("axios").default;
import store from "./store";

window.axios.defaults.baseURL = "https://randomuser.me/api/";
window.axios.interceptors.request.use(function (config) {
  config.headers.common = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  config.timeout = 0;
  return config;
});

window.axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    if (status === 503 || status === 500) {
      store.commit("UPDATE_NOTIFICATION_STATUS", true);
    } else {
      return Promise.reject(error);
    }
  }
);
