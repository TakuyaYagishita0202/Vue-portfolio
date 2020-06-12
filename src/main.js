import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import CursorFx from "@luxdamore/vue-cursor-fx";
import "@luxdamore/vue-cursor-fx/dist/CursorFx.css";

Vue.config.productionTip = false;

var VueScrollTo = require("vue-scrollto");
Vue.use(VueScrollTo);
Vue.use(CursorFx);

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
