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
      <v-card-title>
        <v-chip
      color="indigo darken-2 font-weight-black"
      text-color="white"
      
    >
          {{ infoContent.date }}
    </v-chip>
      </v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      <v-chip
      class="ma-1"
      color="red accent-1"
      text-color="white"
      small
    >
          {{ infoContent.eventType }}
    </v-chip>
      </v-card-subtitle>

    <v-card-text class="pb-0">
      {{ infoContent.title }}
    </v-card-text>

    <v-card-actions>
       <v-btn
      color="primary"
      small
      class="center"
      @click="showdetails"
    >
      Rozwiń
    </v-btn>
    <v-spacer></v-spacer>
    <template v-if="true">
      <event-edit-form></event-edit-form>
    </template>
    
    </v-card-actions>
  </v-card>

    </div>
</template>

<script>
import EventEditForm from "./Event/EventEditForm";

export default {
  name: "Popup",
  components: {
    EventEditForm
  },
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