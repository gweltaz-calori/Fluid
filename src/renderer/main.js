import Vue from "vue";
import axios from "axios";

import "./events";

import AngleFormatter from "./formatter/AngleFormatter";

import "@/components/common/common";
import "@/components/icons/icons";
import App from "./App";
import router from "./router";
import store from "./store";

if (!process.env.IS_WEB) Vue.use(require("vue-electron"));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: "<App/>"
}).$mount("#app");
