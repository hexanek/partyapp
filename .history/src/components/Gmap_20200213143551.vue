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
        @click="onJoin"
      >
        {{ btnText }}
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

      <v-navigation-drawer
       absolute
       width="100%"
       height="100%"
       app
       clipped
       temporary
       disable-resize-watcher
      right
      :elevation="0"
      v-model="edit"
      class="popup"
      >
      
        <v-card
        tile
      right
      v-model="edit"
      max-width="100%"
      fluid
    class="mx-auto cs"
      >
      <v-container mt-12 pt-6>
            <v-layout row>
                <v-flex xs-12 offset-sm3 center pa-2>
                    <h2>Edit Event</h2>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs-12>
                    <form @submit.prevent="onEditEvent">
                        <v-layout row>
                            <v-flex xs-12 offset-sm3 sm-6 col-4> 
                                <v-text-field 
                                name="title"
                                label="Title"
                                id="title"
                                row-height="15"
                                v-model="title"
                                required></v-text-field>
                            </v-flex>
                            <v-select class="select"
                                 :items="this.types"
                                  label="Event Type"
                                  name="Event-Type"
                                  v-model="eventType"
                                   dense
                                 ></v-select>
                        </v-layout>
                         <v-layout row>
                            <v-flex xs-12 offset-sm3 sm-6 col-4> 
                                <v-text-field 
                                name="location"
                                label="Location"
                                id="location"
                                placeholder="Świętojańska 8"
                                v-model="location"
                                v-on:change="searchLocation()"
                                required></v-text-field>
                            </v-flex>
                            <v-checkbox
                               v-model="pay"
                                  hide-details
                                class="shrink mr-2 mt-5"
                               ></v-checkbox>
                               <v-text-field 
                               class="select"
                               prefix="$"
                               :disabled="!pay"
                               label="Pay required"
                               v-model="cash"></v-text-field>
                        </v-layout>
                         <v-layout row>
                            <v-flex xs-12 offset-sm3 sm-3 col-4> 
                                <v-text-field 
                                name="description"
                                label="Description"
                                id="description"
                                rows="2"
                                v-model="description"
                                required></v-text-field>
                            </v-flex>
                             <v-checkbox
                               v-model="dresscode"
                                  hide-details
                                class="shrink mr-2 mt-5"
                               ></v-checkbox>
                               <v-text-field 
                               class="select"
                               :disabled="!dresscode"
                               value="Smart Casual"
                               label="Dresscode"
                               v-model="dress"></v-text-field>
                        </v-layout>
                         <v-layout row>
                            <v-flex xs-12 offset-sm3 sm-3 col-4> 
                                
                                
                            </v-flex>
                            <v-col cols="12" sm="6" md="4">
                                <v-menu
                                v-model="menuDate"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                transition="scale-transition"
                                offset-y
                                min-width="290px"
                                                    >
                                <template v-slot:activator="{ on }">
                                <v-text-field
                                    v-model="date"
                                    label="Date"
                                    readonly
                                    v-on="on"
                                ></v-text-field>
                                </template>
                                <v-date-picker v-model="date" @input="menuDate = false"></v-date-picker>
                            </v-menu>
                            </v-col>
                           </v-layout>
                            <v-layout row>
                              <v-flex xs-12 offset-sm7 offset-lg7 sm-3 col-4>
                                  <v-spacer></v-spacer>
                                <v-menu
                                    ref="menu"
                                    v-model="menuTime"
                                    :close-on-content-click="false"
                                    :nudge-right="40"
                                    :return-value.sync="time"
                m                    transition="scale-transition"
                                    offset-y
                                    max-width="290px"
                                    min-width="290px"
                                                            >
                                    <template v-slot:activator="{ on }">
                                    <v-text-field
                                        v-model="time"
                                        label="Time"
                                        readonly
                                        v-on="on"
                                    ></v-text-field>
                                    </template>
                                    <v-time-picker
                                    v-if="menuTime"
                                    v-model="time"
                                    full-width
                                    @click:minute="$refs.menu.save(time)"
                                    ></v-time-picker>
                                </v-menu>
                                </v-flex>
                                </v-layout>
                        <v-layout row>
                            <v-flex xs12 offset-sm3 sm-3 col-4>
                                <v-btn :disabled="!isValid"
                                type="submit">Save Changes</v-btn>
                            </v-flex>
                        </v-layout>
                    </form>
                </v-flex>
            </v-layout>
        </v-container>


  </v-card>
      
      </v-navigation-drawer>
      
    

  </div>
</template>

<script>
import Popup from "./Popup";

export default {
  name: "Gmap",
  components: {
    Popup
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

    location: "",
    title: "",
    description: "",
    imageUrl: "",
    types: [
      "Event",
      "Club",
      "Bar/Restaurant",
      "Open Air",
      "Concert",
      "Local/House Party"
    ],
    id: "",
    pay: false,
    dresscode: false,
    dress: "Not specified",
    cash: "Free",
    eventType: "",
    lat: "",
    lng: "",
    date: new Date().toISOString().substr(0, 10),
    menuDate: false,
    menuTime: false,
    time: "",
    image: null,
    join: false,
    btnText: "Join",

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
    searchLocation: function() {
      //   this.initMap;
      var geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: this.location }, (results, status) => {
        if (status === "OK") {
          this.lat = results[0].geometry.location.lat();
          this.lng = results[0].geometry.location.lng();
        }
      });
    },
    onEditEvent: function() {
      if (!this.isValid) {
        return;
      }
      const eData = {
        title: this.title,
        description: this.description,
        location: this.location,
        eventType: this.eventType,
        cash: this.cash,
        dress: this.dress,
        lat: this.lat,
        lng: this.lng,
        date: this.date,
        time: this.time,
        id: this.id
      };
      this.$store.dispatch("updateEvent", eData);
      this.$router.go(0);
    },

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
      this.title = marker.title;
      this.location = marker.location;
      this.description = marker.description;
      this.eventType = marker.eventType;
      this.dress = marker.dress;
      this.cash = marker.cash;
      this.date = marker.date;
      this.time = marker.time;
      this.id = marker.id;

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
    },
    onJoin() {
      this.join = !this.join;
      if (this.join) {
        // this.$store.dispatch("disJoinUserEvent", this.id);
        this.btnText = "UnJoin";
      } else {
        // this.$store.dispatch("joinUserEvent", this.id);
        this.btnText = "Join";
      }
    }
  },
  computed: {
    events() {
      return this.$store.getters.loadedEvents;
    },
    isValid() {
      return (
        this.title !== "" &&
        this.location !== "" &&
        this.description !== "" &&
        this.eventType !== "" &&
        this.date !== "" &&
        this.time !== ""
      );
    },
    userJoined() {
      // return (
      //   this.$store.getters.user.joinedEvents.findIndex(eventId => {
      //     return eventId === this.id;
      //   }) >= 0
      // );
      return {};
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
