<template>
  <div>
    <GmapMap
      :center="start"
      :zoom="10"
      map-type-id="roadmap"
      style="width: 1400px; height: 710px"
    >
      <gmap-info-window
        :options="infoOptions"
        :position="infoPosition"
        :opened="infoOpened"
        @closeclick="infoOpened = false"
      >
        {{ infoContent }}
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
export default {
  name: "Gmap",
  data: () => ({
    start: {
      lat: 54.51889,
      lng: 18.53188
    },
    coordinates: {
      0: {
        party: "Domówka",
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
