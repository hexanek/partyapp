<template>
  <v-app>
    
    
    <navbar>
    </navbar>
    <v-card height="350px">
      <v-navigation-drawer
      absolute
      permanent
      right
      ></v-navigation-drawer>
      </v-card>
    <v-content>
      <v-responsive>
        
      <gmap
      @clickshow = "showDetails"
      >
        
      </gmap>
     
      </v-responsive>
      </v-content>
    <Footer>
     
    </Footer>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Gmap from "./components/Gmap";

export default {
  name: "App",

  components: {
    Navbar,
    Footer,
    Gmap
  },

  data: () => ({
    //
  }),
  methods: {
    showDetails: function() {
      this.details = !this.details;
    }
  }
};
</script>
