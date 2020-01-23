<template>
  <v-app>
    <navbar></navbar>
    <v-content>
      <gmap></gmap>
      </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Gmap from './components/Gmap'

export default {
  name: 'App',


  components: {
    Navbar,
    Footer,
    Gmap
  },

  data: () => ({
    //
  }),
};
</script>
