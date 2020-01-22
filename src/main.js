import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

Vue.config.productionTip = false;

axios.defaults.baseURL  = "http://localhost:1337/"


new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount("#app");
