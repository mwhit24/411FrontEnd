<template>
  <v-app>
    <v-parallax
      :src="require('../assets/fracture.jpg')"
      dark
      alt = "background image"
      height = 1000
    >
      <v-container justify-center align-center>

      <h3><strong>Welcome to Hotelify!</strong></h3>
      <p></p>
      <p>We are glad that you chose to use Hotelify for your hotel management needs. We have many options available, and they are located in the toolbar.
        If you have any questions, let our team know. Thank you for using Hotelify!</p><br/>


   <div
     v-for="currency in info"
     class="currency"
   >
     {{ currency.description }}:
     <span class="lighten">
       <span v-html="currency.symbol"></span>{{ currency.rate_float | floatTwo }}
     </span>
   </div>

   <v-btn color="primary" @click="getGreaterThan(3000)">text</v-btn>
 <p>{{filteredInfo}}</p>
      </v-container>
    </v-parallax>
  </v-app>
</template>

<script>
import axios from 'axios'
export default
{
  data() {
    return {
      info: [],
      filteredInfo: [],
    };
  },
  filters: {
    floatTwo (value) {
      return value.toFixed(2)
    }
  },
  mounted() {
    axios
    .get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => (this.info = response.data.bpi)
    // eslint-disable-next-line
    .catch(error => console.log(error))
  },
  methods: {
    getGreaterThan (value) {
      const curArr = [];
      console.log(this.info);
      this.info.forEach((currency)=>{
        if(currency.rate_float>= value){
          this.filteredInfo.push(currency.rate_float);
        }
      });
    },
  },
};

</script>

<style scoped>
h3 {
  text-align: center;
}
p {
  text-align: center;
}
</style>
