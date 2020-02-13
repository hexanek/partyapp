<template>
  <div> 
    
    <GmapMap
      :center="start"
      :zoom="14"
      map-type-id="roadmap"
      style="width: 83vw; height: 92vh;"
      v-bind:options="mapStyle"
    >
    
      <gmap-info-window
        :options="infoOptions"
        :position="infoPosition"
        :opened="infoOpened"
        @closeclick="infoOpened = false"
      >
      <!-- {{ infoContent.location }} -->
       <popup 
       @clickshow="showdetails"
       @clickedit="showedit"
       :infoContent = "infoContent"
       ></popup>
      </gmap-info-window>
      <GmapMarker
        :key="key"
        v-for="( item, key ) in events"
        :position="getPosition(item)"
        :clickable="true"
        @click="toggleInfo(item, key)"
      />
      
    </GmapMap>
      
      

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
    <template v-if="edit">
    <edit-form :infoContent="infoContent"></edit-form>
      </template>
    

  </div>
</template>

<script>
import Popup from "./Popup";
import EditForm from "./Event/EditForm";

export default {
  name: "Gmap",
  components: {
    Popup,
    EditForm
  },
  data: () => ({
    edit: false,
    detail: false,
    start: {
      lat: "",
      lng: ""
    },
    infoPosition: null,
    infoContent: "",
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
      this.infoContent = {
        title: marker.title,
        location: marker.location,
        description: marker.description,
        eventType: marker.eventType,
        imageUrl: marker.imageUrl,
        dress: marker.dress,
        cash: marker.cash,
        date: marker.date,
        time: marker.time,
        creatorId: marker.creatorId
      };
      if (this.infoCurrentKey === key) {
        this.infoOpened = !this.infoOpened;
      } else {
        this.infoOpened = true;
        this.infoCurrentKey = key;
      }
    },
    showdetails: function() {
      this.detail = !this.detail;
    },
    showedit: function() {
      this.edit = !this.edit;
    },
    getLocation() {
      navigator.geolocation.getCurrentPosition(
        this.userLocation,
        this.userLocationError
      );
    },
    userLocation(position) {
      this.start.lat = position.coords.latitude;
      this.start.lng = position.coords.longitude;
    },
    userLocationError(error) {
      alert(`${error} Check your location permission and try again`);
    },
    goToLocation(loc) {
      window.open("https://www.google.com/maps/place/" + loc, "_blank");
    }
  },
  computed: {
    events() {
      return this.$store.getters.loadedEvents;
    }
  },
  beforeMount() {
    return this.getLocation();
  }
};
</script>

<style lang="scss" scoped>
.cs {
  background: transparent;
}
</style>
