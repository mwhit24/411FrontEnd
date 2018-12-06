<template>
  <v-app>
    <v-parallax
      :src="require('../assets/fracture.jpg')"
      dark
      alt = "background image"
      height = 600
    >
    <v-container>
      <v-layout justify-center align-center column>
      <h1 class="display-3 font-weight-light mb-3">Welcome to Hotelify</h1>
      <h3 class="text-xs-center display-0">We are glad that you chose to use Hotelify for your hotel management needs. We have many options available, and they are located in the toolbar.
        If you have any questions, let our team know. Thank you for using Hotelify!</h3>
      </v-layout>
  </v-container>
</v-parallax>
  </v-app>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
