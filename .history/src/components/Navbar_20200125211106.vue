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
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Events</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>My Events</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
     <v-app-bar 
      flat
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>iParty</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>

        <v-avatar class="ma-2">
      <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
    </v-avatar>
        <h3 class="ma-4">Michał Braniewski</h3>
        <v-btn small rounded class="indigo darken-4 mx-5">
          <v-icon dark left>mdi-checkbox-marked-circle</v-icon>
          Login
          
          
          </v-btn>
           <v-btn small rounded class="purple darken-4 mx-5 ml-n1 mr-n2">
          <v-icon dark left>mdi-cancel</v-icon>
          Logout
          
          
          </v-btn>
      </v-toolbar-items>
      
      
    </v-app-bar>
    </div>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    drawer: null
  })
};
</script>

<style lang="scss" scoped>
</style>