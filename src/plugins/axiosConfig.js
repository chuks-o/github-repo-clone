import axios from "axios";

axios.interceptors.request.use(
  function(config) {
    config.baseURL = process.env.VUE_APP_BASE_URL;
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default axios;
