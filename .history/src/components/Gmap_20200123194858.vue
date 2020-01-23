<template>
    <div>
        <GmapMap
    :center="{lat:54.51889, lng:18.53188}"
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
        name: 'Gmap'
        
    }
</script>

<style lang="scss" scoped>

</style>