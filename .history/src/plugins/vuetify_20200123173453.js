import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import VueRouter from 'vue-router'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);
Vue.use(VueRouter);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.purple,
                secondary: colors.grey.darken1,
                accent: colors.shades.black,
                error: colors.red.accent3,
            }
        }
    }
});
