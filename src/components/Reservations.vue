<template>
  <v-app>
    <v-card>
      <v-form ref="form" v-model="valid" lazy validation>
        <v-text-field
          v-model="name"
          :rules="rulesForName"
          :counter="5"
          label="Name"
          required>
        </v-text-field>
      </v-form>
    </v-card>
  </v-app>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>
