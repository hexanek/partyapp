<template>
  <v-app>
    <navbar></navbar>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',


  components: {
    Navbar
  },

  data: () => ({
    //
  }),
};
</script>
