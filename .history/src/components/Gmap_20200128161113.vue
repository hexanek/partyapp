<template>
  <div class="position"> 
    
    <GmapMap
      :center="start"
      :zoom="10"
      map-type-id="roadmap"
      style="width: 83vw; height: 90vh;"
      v-bind:options="mapStyle"
    >
    
      <gmap-info-window
        :options="infoOptions"
        :position="infoPosition"
        :opened="infoOpened"
        @closeclick="infoOpened = false"
      >
      {{ event.title }}
       <!-- <popup 
       @clickshow="showdetails"
       :data = "event.title"
       ></popup> -->
      </gmap-info-window>
      <GmapMarker
        :key="event.id"
        v-for="event in events"
        :position="getPosition(event)"
        :clickable="true"
        @click="toggleInfo(event, event.id)"
      />
    </GmapMap>
       <v-navigation-drawer
       absolute
       width="400px"
       height="80%"
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
      src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
      height="194"
    ></v-img>
    <v-list-item>
      <v-list-item-avatar color="grey"></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">Domóweczka</v-list-item-title>
        <v-list-item-subtitle>20-09-2020    20:00</v-list-item-subtitle>
        <!-- <v-list-tile-action-text>Dresscode: pidzamka</v-list-tile-action-text>
        <v-list-tile-action-text>Cena: Free

        </v-list-tile-action-text> -->

      </v-list-item-content>
    </v-list-item>

   

    <v-card-text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur beatae eum, quam voluptatum non, nemo ratione dolorum minus placeat nisi reiciendis vitae aperiam deserunt officiis accusantium reprehenderit, libero dolor facilis?
    </v-card-text>

    <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Dołącz
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
      
    

  </div>
</template>

<script>
// import Popup from "./Popup";

export default {
  name: "Gmap",
  components: {
    // Popup
  },
  data: () => ({
    detail: false,
    start: {
      lat: 54.51889,
      lng: 18.53188
    },
    infoPosition: null,
    infoContent: null,
    infoOpened: false,
    infoCurrentKey: null,
    infoOptions: {
      pixelOffset: {
        width: 0,
        height: -35
      }
    },
    mapStyle: {
      styles: [
        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
        {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }]
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }]
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [{ color: "#263c3f" }]
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [{ color: "#6b9a76" }]
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#38414e" }]
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [{ color: "#212a37" }]
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#9ca5b3" }]
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [{ color: "#746855" }]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{ color: "#1f2835" }]
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [{ color: "#f3d19c" }]
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [{ color: "#2f3948" }]
        },
        {
          featureType: "transit.station",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }]
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#17263c" }]
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [{ color: "#515c6d" }]
        },
        {
          featureType: "water",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#17263c" }]
        }
      ]
    }
  }),
  methods: {
    getPosition: function(marker) {
      return {
        lat: parseFloat(marker.lat),
        lng: parseFloat(marker.lng)
      };
    },
    toggleInfo: function(marker, key) {
      this.infoPosition = this.getPosition(marker);
      this.infoContent = marker.title;
      if (this.infoCurrentKey === key) {
        this.infoOpened = !this.infoOpened;
      } else {
        this.infoOpened = true;
        this.infoCurrentKey = key;
      }
    },
    showdetails: function() {
      this.detail = !this.detail;
    }
  },
  computed: {
    events() {
      return this.$store.getters.loadedEvents;
    }
  }
};
</script>

<style lang="scss" scoped>
.cs {
  background: transparent;
}
.position {
  position: absoulte;
  margin-top: 4%;
  margin-left: 18%;
}
.popup {
  margin-top: 5%;
}
</style>
