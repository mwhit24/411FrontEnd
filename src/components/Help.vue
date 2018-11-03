<template>
  <v-app>
    <v-parallax
      :src="require('../assets/fracture.jpg')"
      dark
      alt = "background image"
      height = 400
    >
      <v-layout
        align-center
        column
        justify-center
      >
        <h1 class="display-2 font-weight-thin mb-3">Vuetify.js</h1>
        <h4 class="subheading">Build your application today!</h4>
      </v-layout>
    </v-parallax>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
      }
    }
  }

</script>

<style scoped>

</style>
