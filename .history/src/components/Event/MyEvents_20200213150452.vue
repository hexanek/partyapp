<template>
    <div>
       <v-content>
            <v-container>
                <v-col
                cols="auto"
                 md="auto"
                  >
                  <v-card class="text-center" v-if="eventExist">
                    <v-card-title>
                      You don't create any events yet
                    </v-card-title>
                    </v-card>
                <v-card class="text-center" v-for="event in myevents" v-bind:key="event.id">
                    
                <v-card-title >
                    {{ event.title }}
                </v-card-title>
                <v-card-media>
                  
                   <v-img
                  :src="event.imageUrl"
                     height="194"
                     >
                     <v-chip
      class="ma-2"
      color="red darken-3"
      text-color="white"
    >
                {{ event.eventType }}
                    
                  </v-chip> 
                     </v-img>
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
                  Time: 
                  <v-chip
      class="ma-2"
      color="purple darken-3"
      text-color="white"
    >
                {{ event.time }}
                    
                  </v-chip>
                  Location: 
                  <v-chip
      class="ma-2"
      color="purple darken-3"
      text-color="white"
    >
                {{ event.location }}
                    
                  </v-chip>
                </v-card-title>
                <v-card-title>
                  Cash:
                  <v-chip
      class="ma-2"
      color="pink darken-3"
      text-color="white"
    >
                {{ event.cash }}
                    
                  </v-chip>
                  DressCode: 
                  <v-chip
      class="ma-2"
      color="pink darken-3"
      text-color="white"
    >
                {{ event.dress }}
                    
                  </v-chip>
                </v-card-title>
            
                <v-card-text>
                  {{ event.description }}
                </v-card-text>
                </v-card>
                </v-col>
            </v-container>
        </v-content>

    </div>
</template>

<script>
export default {
  data() {
    return {
      eventexist: false
    };
  },
  methods: {
    changeExist() {
      this.eventexist = !this.eventexist;
    }
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
      return this.events.filter(
        event => event.creatorId === this.$store.getters.user.id
      );
    },
    eventExist() {
      if (!this.myevents) {
        return false;
      } else {
        return true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>