<template>
  <mapBlock classMap="map" :dataPoint="this.$store.state"/>
</template>

<style lang="sass">
.map
  margin: 0 auto
  height: 900px
  width: 1200px
  font-family: sans-serif
</style>

<script>
import mapBlock from '@/components/componentMap.vue'

export default {
  components: { mapBlock }
}
</script>
