<template>
  <v-app>
    <navbar></navbar>

    <footer></footer>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default {
  name: 'App',


  components: {
    Navbar,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
