<template>
  <v-app>
    <v-parallax
      :src="require('../assets/fracture.jpg')"
      dark
      alt = "background image"
      height = 600
    >
<<<<<<< HEAD
    <v-container justify-center align-center>

    <h3><strong>Welcome to Hotelify!</strong></h3>
    <p></p>
    <p>We are glad that you chose to use Hotelify for your hotel management needs. We have many options available, and they are located in the toolbar.
      If you have any questions, let our team know. Thank you for using Hotelify!<br/>
      {{info}}
    </p>

    </v-card>
=======
    <v-container>
      <v-layout justify-center align-center column>
      <h1 class="display-3 font-weight-light mb-3">Welcome to Hotelify</h1>
      <h3 class="text-xs-center display-0">We are glad that you chose to use Hotelify for your hotel management needs. We have many options available, and they are located in the toolbar.
        If you have any questions, let our team know. Thank you for using Hotelify!</h3>
      </v-layout>
>>>>>>> Customer
  </v-container>
</v-parallax>
  </v-app>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response))
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
