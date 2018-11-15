<template>
  <v-app>
    <v-container justify-center align-center>

    <h3><strong>Welcome to Hotelify!</strong></h3>
    <p></p>
    <p>We are glad that you chose to use Hotelify for your hotel management needs. We have many options available, and they are located in the toolbar.
      If you have any questions, let our team know. Thank you for using Hotelify!<br/>
      {{info}}
    </p>

    </v-card>
  </v-container>

  </v-app>
</body>
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
h3 {
  text-align: center;
}
p {
  text-align: center;
}
</style>
