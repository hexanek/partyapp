<template>
  <v-app>
    <navbar>
    </navbar>
    <Footer>
    </Footer>
    <router-view></router-view>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export default {
  name: "App",

  components: {
    Navbar,
    Footer,
  },

  data: () => ({
    //
  }),
  methods: {}
};
</script>
