<template>
  <v-app>
    <v-parallax
      :src="require('../assets/fracture.jpg')"
      dark
      alt = "background image"
      height = 600
    >
    <v-container justify-center align-center>

    <h3><strong>Welcome to Hotelify!</strong></h3>
    <p></p>
    <p>We are glad that you chose to use Hotelify for your hotel management needs. We have many options available, and they are located in the toolbar.
      If you have any questions, let our team know. Thank you for using Hotelify!</p>

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
h3 {
  text-align: center;
}
p {
  text-align: center;
}
</style>
