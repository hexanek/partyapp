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
      :src="infoContent.imageUrl"
    >
      <v-card-title>{{infoContent.date }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">{{ infoContent.title }}</v-card-subtitle>

    <v-card-text class="pb-0">
      <div>{{ infoContent.description }}</div>

    </v-card-text>

    <v-card-actions>
       <v-btn
      color="primary"
      dark
      
      @click="showdetails"
    >
      Rozwiń
    </v-btn>
    
    </v-card-actions>
  </v-card>

    </div>
</template>

<script>
export default {
  name: "Popup",
  components: {},
  props: ["infoContent"],
  data: () => ({
    return: {}
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