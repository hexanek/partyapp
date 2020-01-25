<template>
  <v-app>
    
    
    <navbar>
    </navbar>
    
    <v-content>
      
      <v-responsive>
        
      <v-navigation-drawer
      fixed
      right
      ></v-navigation-drawer>
    
        
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
