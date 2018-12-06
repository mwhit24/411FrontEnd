<template>
<v-app>
    <v-parallax
      :src="require('../assets/fracture.jpg')"
      dark
      alt = "background image"
      height = 600
    >
    <v-container>
      <v-flex xs12>
              <v-combobox
                v-model="select"
                dark
                :items="names"
                color='white'
                label="Choose Guest Name:"
                placeholder="ID Firstname Lastname"
                @click="populateNames"
                @change="extractID"
              ></v-combobox>
              <!--<select required id="guestDropDown">
                <option>Select here</option>
                <option v-for="guest in guests">{{ guest.first_name }}</option>
              </select>!-->
            </v-flex>
    <v-layout justify-center align-center>

    <h1 class="text-xs-center display-3 font-weight-light mb-1">Update Customer Information</h1>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-btn slot="activator" color="#FF5722" dark>Update Name</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Name</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field placeholder="First Name" label="First name" v-model="fname"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field placeholder="Last Name" label="Last name" v-model="lname" @change="showSelect"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#FF5722" flat @click.native="dialog = false">Close</v-btn>
          <v-btn color="#FF5722" flat @click.native="dialog = false" @click="updateName(currentID,fname,lname)">Save</v-btn>
        </v-card-actions>
        </v-card>
      </v-dialog>

    <v-dialog v-model="dialog1" persistent max-width="600px">
      <v-btn slot="activator" color="#FF5722" dark>Update Email</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Email</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Email"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#FF5722" flat @click.native="dialog1 = false">Close</v-btn>
          <v-btn color="#FF5722" flat @click.native="dialog1 = false">Save</v-btn>
        </v-card-actions>
        </v-card>
      </v-dialog>


    <v-dialog v-model="dialog2" persistent max-width="600px">
      <v-btn slot="activator" color="#FF5722" dark>Update Phone Number</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Phone Number</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Phone Number"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#FF5722" flat @click.native="dialog2 = false">Close</v-btn>
          <v-btn color="#FF5722" flat @click.native="dialog2 = false">Save</v-btn>
        </v-card-actions>
        </v-card>
      </v-dialog>

    <v-dialog v-model="dialog3" persistent max-width="600px">
      <v-btn slot="activator" color="#FF5722" dark>Update Password</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Password</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Password" type="password"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Confirm Password" type="password"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#FF5722" flat @click.native="dialog3 = false">Close</v-btn>
          <v-btn color="#FF5722" flat @click.native="dialog3 = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

        <v-dialog v-model="dialog4" persistent max-width="600px">
          <v-btn slot="activator" color="#FF5722" dark>Update Address</v-btn>
          <v-card>
            <v-card-title>
              <span class="headline">Address</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6 md4>
                    <v-text-field label="Street Address"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field label="City"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field label="State"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field label="Zip Code"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="#FF5722" flat @click.native="dialog4 = false">Close</v-btn>
              <v-btn color="#FF5722" flat @click.native="dialog4 = false">Save</v-btn>
            </v-card-actions>
            </v-card>
        </v-dialog>

    </v-layout>
  </v-container>
  </v-parallax>
</v-app>
</template>

<script>
import axios from "axios"
export default {
data: () => ({
  dialog: false,
  dialog1: false,
  dialog2: false,
  dialog3: false,
  dialog4: false,
  select: '',
  fname: '',
  lname: '',
  currentID: 0,
  names: [

      ],
  guests: [

      ],
  }),
  mounted() {
          axios.get('http://localhost:3000/api/Guests').then(response => {
            this.guests = [...response.data]
          })
        },
  methods: {
    populateNames(){
      this.names = [];
      this.guests.forEach((guest)=>{
        this.names.push(guest.id+" "+guest.first_name +" " +guest.last_name);
      })
      console.log(this.names);
    },
    showSelect(){
      console.log(this.fname +" "+ this.lname);
    },
    extractID(guestStr){
      this.currentID = parseInt(guestStr,10);
      console.log(this.currentID);
    },
    updateName(id,first,last){
      let tempG  = {};
    axios.get('http://localhost:3000/api/Guests/'+id).then(response => {
        tempG = response.data;
      });
      tempG.first_name = first;
      tempG.last_name = last;
      axios.put('http://localhost:3000/api/Guests/'+id, JSON.stringify({
        "first_name": tempG.first_name,
        "last_name": tempG.last_name,
        "address": tempG.address,
        "state": tempG.state,
        "city": tempG.city,
        "country": tempG.country,
        "phone_number": tempG.phone_number,
      })
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    },
  },
}
</script>

<style scoped>


<style>
