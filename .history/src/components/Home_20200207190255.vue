<template>
    <div>
        <v-content>
        <gmap></gmap>
        </v-content>
    </div>
</template>

<script>
import Gmap from "./Gmap";
export default {
  name: "Home",
  components: {
    Gmap
  },
  data: () => ({})
};
</script>

<style lang="scss" scoped>
</style>