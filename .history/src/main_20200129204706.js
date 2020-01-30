import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "./store";
import router from "./router";
import VueGeolocation from "vue-browser-geolocation";
import * as firebase from "firebase";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  router,
  firebase,
  VueGeolocation,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyBTsm2FqjibsPrTiaKXuhVzLM2EqqfXe8w",
      authDomain: "partyapp-ab502.firebaseapp.com",
      databaseURL: "https://partyapp-ab502.firebaseio.com",
      projectId: "partyapp-ab502",
      storageBucket: "partyapp-ab502.appspot.com",
      messagingSenderId: "355419412279",
      appId: "1:355419412279:web:cfc7a73379045003c9ecb2"
    });
  }
}).$mount("#app");
