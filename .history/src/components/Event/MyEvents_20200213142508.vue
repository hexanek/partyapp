<template>
    <div>
       <v-content>
            <v-container>
                <v-col
                cols="auto"
                 md="auto"
                  >
                <v-card class="text-center" v-for="event in myevents" v-bind:key="event.id">
                    
                <v-card-title >
                    {{ event.title }}
                </v-card-title>
                <v-card-media>
                   <v-img
                  :src="event.imageUrl"
                     height="194"
                     />
                </v-card-media>
                <v-card-title>
                  Date:
                  <v-chip
      class="ma-2"
      color="purple darken-3"
      text-color="white"
    >
                {{ event.date }}
                    
                  </v-chip>
                </v-card-title>
            
                <v-card-text>Contact: 
                    <v-icon>mdi-mail</v-icon>
                    iparty@gmail.com</v-card-text>
                </v-card>
                </v-col>
            </v-container>
        </v-content>

    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    userAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    },
    isCreator() {
      if (!this.userAuthenticated) {
        return false;
      }
      return this.$store.getters.user.id === this.events.creatorId;
    },
    events() {
      return this.$store.getters.loadedEvents;
    },
    myevents() {
      return this.events.filter(event => event.creatorId === this.$store.getters.user.id)
    }
  }
};
</script>

<style lang="scss" scoped>
</style>