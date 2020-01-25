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
        color="orange"
        outlined
        center
        @click="details = true"
      >
        Rozwiń
      </v-btn>
      <popup-details v-model="details"></popup-details>
    </v-card-actions>
  </v-card>
    </div>
</template>

<script>
import PopupDetails from './PopupDetails'

export default {
  name: "Popup",
  components:{
      PopupDetails
  },
  data: () => ({
      details: false
  })
};
</script>

<style lang="scss" scoped>
</style>