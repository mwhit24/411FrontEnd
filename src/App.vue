<template>
  <v-app>

    <v-toolbar align-center justify-center color="#FF5722" dark>
      <v-toolbar-title align-center>Hotelify</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat to='/home'>Home</v-btn>
      <v-btn flat to='/reservations'>Reservations</v-btn>
      <v-btn flat to='/customer'>My Account</v-btn>
      <v-btn flat to='/help'>Help</v-btn>
<<<<<<< HEAD
=======
      <v-btn flat to='/exit'>Logout</v-btn>

>>>>>>> Customer
      </v-toolbar>
      <router-view/>

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
