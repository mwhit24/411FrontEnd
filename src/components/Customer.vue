<template>
<v-app>
    <v-parallax
      :src="require('../assets/fracture.jpg')"
      dark
      alt = "background image"
      height = 600
    >
    <v-layout row justify-center>
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
                <v-text-field label="First name"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Last name"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#FF5722" flat @click.native="dialog = false">Close</v-btn>
          <v-btn color="#FF5722" flat @click.native="dialog = false">Save</v-btn>
        </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>

    <v-layout row justify-center>
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
    </v-layout>

    <v-layout row justify-center>
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
    </v-layout>

    <v-layout row justify-center>
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
    </v-layout>
  </v-parallax>
</v-app>
</template>

<script>
export default {
data: () => ({
  dialog: false,
  dialog1: false,
  dialog2: false,
  dialog3: false,
  })
}
</script>

<style scoped>

<style>
