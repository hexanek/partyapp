<template>
    <div>
       <v-content>
            <v-container>
                <v-col
                cols="auto"
                 md="auto"
                  >
                <v-card class="text-center">
                    
                <v-card-title v-for="event in myevents" v-bind:key="event.id">
                    {{ event.title }}
                </v-card-title>
                <v-card-title
                
                >It is an application that allows you to view available events in your area. You can also add your own event. Whether it's a party at home, in the open air, in a bar or just going out to the club. Feel free to use.</v-card-title>

            
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