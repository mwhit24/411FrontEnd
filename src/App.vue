<template>
  <v-app>
    <v-toolbar align-center justify-center color="cyan" dark>
      <v-toolbar-title align-center>Hotelify</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat to='/home'>Home</v-btn>
      <v-btn flat to='/reservations'>Reservations</v-btn>
      <v-btn flat to='/account'>My Account</v-btn>
      <v-btn flat to='/help'>Help</v-btn>
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
