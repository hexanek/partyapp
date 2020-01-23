import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import VueRouter from 'vue-router'
import * as VueGoogleMaps from 'vue2-google-maps'


Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyB6QzBesMB_MjqmuZF1p7hpCl8gg4kMEy8',
        libraries: 'places'
    }
})

export default new Vuetify({
    theme: {
        dark: true
    }
});
