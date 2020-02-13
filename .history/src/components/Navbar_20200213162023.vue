<template>
    <div>
        <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
         <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <router-link to="/" tag="span">Home</router-link></v-list-item-title>
          </v-list-item-content>
          </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-clipboard-list-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
               <router-link to="/joinedEvents" tag="span"> Registered Events</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-party-popper</v-icon>
          </v-list-item-action>
          <v-list-item-content>
              <router-link to="/myEvents" tag="span"> My Events</router-link>

          </v-list-item-content>
        </v-list-item>
         <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-pencil</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <router-link to="/addevent" tag="span"> Create Event</router-link>
              </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
         <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-information-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <router-link to="/about" tag="span">About</router-link>
              </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
     <v-app-bar 
      flat
      app
      clipped-left
    >
      <v-app-bar-nav-icon class="hidden-sm-and-up" @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer" font-weight-black>iParty</router-link>
        </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
<!-- 
        <v-avatar class="ma-2">
      <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
    </v-avatar>
        <h3 class="ma-4">Michał Braniewski</h3>
        <v-btn to="/signin" small rounded class="indigo darken-4 mx-5">
          <v-icon dark left>mdi-checkbox-marked-circle</v-icon>
          Login 
          -->
          
          
          
           <v-btn 
           v-if="userAuthenticated"
           @click="onLogout"
           small rounded class="purple darken-4 mx-5 ml-n1 mr-n4">
          <v-icon dark left>mdi-cancel</v-icon>
          Logout
          </v-btn> 
          
          
          <v-btn
          class="purple darken-4"
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link"
          > {{ item.title }} 
          </v-btn>
      </v-toolbar-items>
      
      
    </v-app-bar>
    </div>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    drawer: null,
    userName: ""
  }),
  methods: {
    onLogout() {
      this.$store.dispatch("logout");
    }
  },
  computed: {
    menuItems() {
      let menu = [
        { title: "Login", link: "/signin" },
        { title: "Sign Up", link: "/signup" }
      ];
      if (this.userAuthenticated) {
        menu = [];
      }

      return menu;
    },
    userAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    }
  }
};
</script>

<style lang="scss" scoped>
</style>