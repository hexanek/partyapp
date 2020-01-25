<template>
  <v-app>
    <navbar></navbar>
    <v-content>
      <v-responsive>
      <gmap
      @showdetails = "showDetails"
      ></gmap>
        <popup-details
        v-if="this.details"
        ></popup-details>
      </v-responsive>
      </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Gmap from "./components/Gmap";
import PopupDetails from "./components/PopupDetails";

export default {
  name: "App",

  components: {
    Navbar,
    Footer,
    Gmap,
    PopupDetails
  },

  data: () => ({
    return: {
      details: false
    }
    //
  }),
  methods: {
      showDetails: function(){
        this.details = !this.details;
      }
  }
};
</script>
