import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

Vue.config.productionTip = false;

axios.defaults.baseURL  = "http://192.168.31.135:1337/"


new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount("#app");
