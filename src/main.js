import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

Vue.config.productionTip = false;

axios.defaults.baseURL  = "/"


axios.get("data.json").then((resp)=>{
	new Vue({
	  router,
	  store: store(resp.data),
	  render: h => h(App)
	}).$mount("#app");

})
