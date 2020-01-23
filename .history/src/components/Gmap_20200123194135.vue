<template>
    <div>
        <GmapMap
    :center="{lat:10, lng:10}"
    :zoom="7"
    map-type-id="terrain"
    style="width: 1400px; height: 720px"
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