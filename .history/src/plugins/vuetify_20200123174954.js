import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import VueRouter from 'vue-router'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);
Vue.use(VueRouter);

export default new Vuetify({
    theme: {
        dark: true
    }
});
