<template>
    <div>
        <v-card
    class="mx-auto"
    max-width="200"
    light
    
  >
    <v-img
      class="white--text align-end"
      height="100px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>15-05-2020 20:00</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">Najlepsza domówka Ever</v-card-subtitle>

    <v-card-text class="pb-0">
      <div>Wbijać</div>

    </v-card-text>

    <v-card-actions>
       <v-btn
      color="primary"
      dark
      @click.stop="this.nav = !this.nav"
    >
      Open Dialog
    </v-btn>
    <v-navigation-drawer v-model="nav"></v-navigation-drawer>
    </v-card-actions>
  </v-card>
   
    </div>
</template>

<script>
export default {
  name: "Popup",
  components: {},
  data: () => ({
    return: {
      nav: false
    }
  }),
  methods: {
    showdetails: function() {
      this.$emit("clickshow");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>