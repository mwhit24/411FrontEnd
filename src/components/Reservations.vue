<template>
  <v-app>
    <v-parallax
      :src="require('../assets/fracture.jpg')"
      dark
      alt = "background image"
      height = 600
    >
    <v-container>
      <v-toolbar dark color="#FF5722">
        <v-toolbar-title>Reservations</v-toolbar-title>
      </v-toolbar>

    <v-form ref="form" v-model="valid" lazy validation>
      <v-text-field
      dark
      v-model="firstname"
      :rules="rulesForFirstName"
      label="First Name"
      required color='white'>
    </v-text-field>
    <v-text-field
    dark
    v-model="lastname"
    :rules="rulesForLastName"
    label="Last Name"
    required color='white'>
  </v-text-field>
    <v-text-field
    dark
    v-model="phonenumber"
    :rules="rulesForPhone"
    label="Phone Number"
    required color='white'>
  </v-text-field>
  </v-form>
  <v-menu
    dark
    ref="menu"
    :close-on-content-click="false"
    v-model="menu"
    :nudge-right="50"
    lazy
    transition="scale-transition"
    offset-y
    full-width
    min-width="300px">
    <v-text-field
    dark
    slot="activator"
    v-model="date"
    label="Choose a Check-In Date"
    prepend-icon="event"
    readonly>
  </v-text-field>
  <v-date-picker dark v-model="date" @input="menu = false">
    <v-spacer></v-spacer>
  </v-date-picker>
</v-menu>
<v-menu>
  dark
  ref="menu2"
  :close-on-content-click="false"
  v-model="menu2"
  :nudge-right="50"
  lazy
  transition="scale-transition"
  offset-y
  full-width
  min-width="300px">
  <v-text-field
  dark
  slot="activator"
  v-model="date2"
  label="Choose a Check-Out Date"
  prepend-icon="event"
  readonly>
</v-text-field>
<v-date-picker dark v-model="date2" @input="menu2 = false">
  <v-spacer></v-spacer>
</v-date-picker>
</v-menu>
<v-flex xs12>
        <v-combobox
          v-model="select"
          dark
          :items="rooms"
          color='white'
          label="Select a room number"
          placeholder="RoomID Room# Style Price Location"
          @click="populateRooms"
        ></v-combobox>
      </v-flex>
<v-alert
v-model="alert"
dismissible
type="success"
color='#FF5722'
    >
      You have confirmed your reservation.
    </v-alert>
<v-btn dark color="#FF5722"
      v-if="!alert"
      @click="alert = true">Confirm reservation</v-btn>
</v-container>
</v-parallax>
  </v-app>
</template>

<script>
import axios from 'axios'
export default {
  data: ()=> ({
    valid: true,
    firstname: '',
    rulesForFirstName: [
      v => !!v || "First name is required",
    ],
    lastname: '',
    rulesForLastName: [
      v => !!v || "Last name is required",
    ],
    phonenumber: '',
    rulesForPhone: [
      v => !!v || 'Phone number is required',
    ],
    date: new Date().toISOString().substr(0,10),
    date2: new Date().toISOString().substr(0,10),
    menu: false,
    modal: false,
    menu2: false,
    dark: true,
    alert: false,
    select: '',
    items: [],
    rooms: []
    }),
    mounted() {
            axios.get('http://localhost:3000/api/Rooms').then(response => {
              this.items = [...response.data]
            })
          },
          methods: {
            populateRooms(){
              this.rooms = [];
              this.items.forEach((room)=>{
                this.rooms.push(room.id+" : Room "+room.room_number +" "+ room.room_type +" $"+ room.current_price +"/night "+ room.location);
              })
              console.log(this.names);
            },
          }
        }
</script>

<style scoped>

</style>
