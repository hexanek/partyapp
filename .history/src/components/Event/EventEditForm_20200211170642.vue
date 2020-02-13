<template>
    <v-dialog width="300px" persistent fullscreen transition>
        <v-btn fab slot="activator">
        <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-navigation-drawer
       absolute
       width="400px"
       height="85%"
       app
       clipped
       temporary
       disable-resize-watcher
      right
      :elevation="0"
      v-model="detail"
      class="popup"
      >
      
        <v-card
        tile
      right
      v-model="detail"
      max-width="400"
      fluid
    class="mx-auto cs"
      >
     <v-img
      :src="infoContent.imageUrl"
      height="194"
    >
    <v-card-title>
        <v-chip
      color="red accent-3 font-weight-black"
      text-color="white"
      large
      
    >
          {{ infoContent.eventType }}
    </v-chip>
    <!-- <template v-if="true">
    <v-btn fab to="/editevent">
    <v-icon>mdi-pencil</v-icon>
    </v-btn>
    </template> -->
      </v-card-title>
    </v-img>
      <v-list-item-content class="pa-6">
        <v-list-item-title class="headline">{{ infoContent.title }}</v-list-item-title>
        <v-list-item-subtitle>
          Adress: 
       <v-chip
      class="ma-2"
      color="secondary"
      text-color="white"
      @click="goToLocation(infoContent.location)"
    >
      {{ infoContent.location }}
      <v-icon right>mdi-map-marker</v-icon>
    </v-chip>
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          Date:
           <v-chip
      class="ma-2"
      color="purple darken-3"
      text-color="white"
    >
      {{ infoContent.date }}
    </v-chip>
      Time: 
     <v-chip
      class="ma-2"
      color="purple darken-3"
      text-color="white"
    >
      {{ infoContent.time }}
    </v-chip>
           </v-list-item-subtitle>
        <v-list-item-subtitle>
          Dresscode: 
          <v-chip
      class="ma-2"
      color="secondary"
      text-color="white"
    >
      {{ infoContent.dress }}
      <v-icon right>mdi-star</v-icon>
    </v-chip>
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          Price: 
       <v-chip
      class="ma-2"
      color="red"
      text-color="white"
    >
      {{ infoContent.cash }} $
      <v-icon right>mdi-star</v-icon>
    </v-chip>
        </v-list-item-subtitle>
      

      </v-list-item-content>

   

    <v-card-text>
      {{ infoContent.description }}
    </v-card-text>

    <v-card-actions>
      <v-btn
        rounded
        color="deep-purple accent-4"
      >
        Join
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
      
      </v-navigation-drawer>
      
    </v-dialog>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>