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
        <h1 class="display-3 font-weight-medium text-capitalize mb-3">Need Some Help?</h1>
        <h4 class="display-1 text-capitalize">Check out some useful information below</h4>
      </v-layout>
    </v-parallax>
    <p style="margin-top: 10px"></p>
    <v-layout column>
      <v-card-text>
        <h1 class="title font-weight-medium text-capitalize text-style-underline">About Us:</h1>
        <p class="subheading font-weight-regular">
          We, the Hotelify team, pride ourselves in providing the most cutting edge web-based hotel management software.<br/>
          Your satisfaction is guaranteed!
        </p>
        <hr/>
      </v-card-text>
      <v-card-text>
        <h1 class="title font-weight-medium text-capitalize text-style-underline">Contact Us:</h1>
        <p class="subheading font-weight-regular">Phone: 601-555-1234</p>
        <p class="subheading font-weight-regular">E-Mail: hotelify-team@coders.arpa</p>
        <p class="subheading font-weight-regular">Address: 118 College Dr. Hattiesburg, MS, 39406</p>
        <hr/>
      </v-card-text>
    </v-layout>
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
  .text-style-underline{
    text-decoration: underline;
    margin-bottom: 4px;
  }
</style>
