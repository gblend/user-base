window.axios = require("axios").default;

window.axios.defaults.baseURL = "https://randomuser.me/api/";
window.axios.interceptors.request.use(function (config) {
  config.headers.common = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  config.timeout = 0;
  return config;
});
