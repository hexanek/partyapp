<template>
    <div>
        <GmapMap
    :center="start"
    :zoom="14"
    map-type-id="roadmap"
    style="width: 1400px; height: 710px"
>
  <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
          
  />
</GmapMap>

    </div>
</template>

<script>
    export default {
        name: 'Gmap',
        data: () =>({
            start: {
                lat: 54.51889,
                lng: 18.53188
            },
            coordinates: {
                0: {
                    party: 'Domówka',
                    lat: 54.291,
                    lng: 18.341
                },
                1: {
                    party: 'Klub',
                    lat: 54.111,
                    lng: 18.10
                }
            }
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
    
        }),
        methods: {
            getPosition: function(marker){
                return {
                    lat: parseFloat(marker.lat),
                    lng: parseFloat(marker.lng)
                }
            },
            toggleInfo: function(marker, key){
                this.in
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>