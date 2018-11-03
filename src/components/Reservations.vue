<template>
  <v-app>
    <v-container>
      <v-toolbar dark color="cyan">
        <v-toolbar-title>Reservations</v-toolbar-title>
      </v-toolbar>

    <v-form ref="form" v-model="valid" lazy validation>
      <v-text-field
      v-model="firstname"
      :rules="rulesForFirstName"
      label="First Name"
      required>
    </v-text-field>
    <v-text-field
    v-model="lastname"
    :rules="rulesForLastName"
    label="Last Name"
    required>
  </v-text-field>
    <v-text-field
    v-model="phonenumber"
    :rules="rulesForPhone"
    label="Phone Number"
    required>
  </v-text-field>
  </v-form>
  <v-menu
    ref="menu"
    :close-on-content-click="false"
    v-model="menu"
    :nudge-right="50"
    lazy
    transition="scale-transition"
    offset-x
    full-width
    min-width="300px">
    <v-text-field
    slot="activator"
    v-model="date"
    label="Choose a Check-In Date"
    prepend-icon="event"
    readonly>
  </v-text-field>
  <v-date-picker v-model="date" @input="menu = false">
    <v-spacer></v-spacer>
  </v-date-picker>
</v-menu>
<v-menu
  ref="menu2"
  :close-on-content-click="false"
  v-model="menu2"
  :nudge-right="50"
  lazy
  transition="scale-transition"
  offset-x
  full-width
  min-width="300px">
  <v-text-field
  slot="activator"
  v-model="date2"
  label="Choose a Check-Out Date"
  prepend-icon="event"
  readonly>
</v-text-field>
<v-date-picker v-model="date2" @input="menu2 = false">
  <v-spacer></v-spacer>
</v-date-picker>
</v-menu>
<v-btn dark color="cyan">Confirm reservation</v-btn>
</v-container>
  </v-app>
</template>

<script>
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
    menu2: false
    }),
  }
</script>

<style scoped>

</style>
