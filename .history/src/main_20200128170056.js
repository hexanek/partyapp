import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "./store";
import router from "./router";
import VueGeolocation from "vue-browser-geolocation";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  router,
  VueGeolocation,
  render: h => h(App)
}).$mount("#app");
