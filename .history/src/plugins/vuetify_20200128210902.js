import Vue from "vue";
import Vuetify from "vuetify/lib";
import VueRouter from "vue-router";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCbwteCczzzBCKfbTxadnl8iRifFROqQuM",
    libraries: "places"
  }
});

export default new Vuetify({
  theme: {
    dark: true
  }
});
