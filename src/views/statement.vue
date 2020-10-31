<template>
  <div id="app">
    <section>
      <ul class="application">
        <list
          v-for="application in this.$store.state"
          :key="application.addres"
          calssMap="map__list"
          :dataPoint="application"
        />
      </ul>
    </section>
    <router-link tag="button" :to="{ name: 'add' }" class="add__button">+</router-link>
    <section></section>
  </div>
</template>

<style lang="sass">
.map
  &__list
    margin: 0 auto
    min-height: 200px
    min-width: 1300px
    width: 100%
    height: 100%
    font-family: sans-serif
  &__form
    max-width: 320px
    min-width: 300px
    height: 300px
</style>

<script>
import list from '@/components/componentList.vue'

export default {
  data () {
    return {
    }
  },
  components: { list },
  methods: {
  },
  mounted () {
  }
}
</script>
