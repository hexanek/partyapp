<template>
  <div>
    <GmapMap
      :center="start"
      :zoom="10"
      map-type-id="roadmap"
      style="width: 100vw; height: 90vh"
      v-bind:options="mapStyle"
    >
      <gmap-info-window
        :options="infoOptions"
        :position="infoPosition"
        :opened="infoOpened"
        @closeclick="infoOpened = false"
      >
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
        text
      >
        Rozwiń
      </v-btn>
    </v-card-actions>
  </v-card>
      </gmap-info-window>
      <GmapMarker
        :key="key"
        v-for="(item, key) in coordinates"
        :position="getPosition(item)"
        :clickable="true"
        @click="toggleInfo(item, key)"
      />
    </GmapMap>
  </div>
</template>

<script>
import Popup from './Popup'

export default {
  name: "Gmap",
  components: {
      Popup
  },
  data: () => ({
    start: {
      lat: 54.51889,
      lng: 18.53188
    },
    coordinates: {
      0: {
        party: "Domowka",
        lat: 54.291,
        lng: 18.341
      },
      1: {
        party: "Klub",
        lat: 54.111,
        lng: 18.1
      }
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
      this.infoContent = marker.party;
      if (this.infoCurrentKey === key) {
        this.infoOpened = !this.infoOpened;
      } else {
        this.infoOpened = true;
        this.infoCurrentKey = key;
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
