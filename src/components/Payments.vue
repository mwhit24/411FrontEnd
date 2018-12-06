<template>
  <v-app>
    <v-parallax
      :src="require('../assets/fracture.jpg')"
      dark
      alt = "background image"
      height = 600
    >
    <v-container>
      <v-card-text class="display-1">
        This page is not yet fully implemented.
        <v-card-text class="headline">
          Data may be inconsistent.
        </v-card-text>
      </v-card-text>
      <v-data-table
    v-model="selected"
    :headers="headers"
    :items="guests"
    :pagination.sync="pagination"
    select-all
    item-key="name"
    class="elevation-1"
    dark
  >
    <template slot="headers" slot-scope="props">
      <tr>
        <th>
          <v-checkbox
            :input-value="props.all"
            :indeterminate="props.indeterminate"
            primary
            hide-details
            @click="toggleAll"
          ></v-checkbox>
        </th>
        <th
          v-for="header in props.headers"
          :key="header.text"
          :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
          @click="changeSort(header.value)"
        >
          <v-icon small>arrow_upward</v-icon>
          {{ header.text }}
        </th>
      </tr>
    </template>
    <template slot="items" slot-scope="props">
      <tr :active="props.selected" @click="props.selected = !props.selected">
        <td>
          <v-checkbox
            :input-value="props.selected"
            primary
            hide-details
          ></v-checkbox>
        </td>
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.totalAmount }}</td>
        <td class="text-xs-right">{{ props.item.amountPaid }}</td>
        <td class="text-xs-right">{{ props.item.chargeDate }}</td>
        <td class="text-xs-right">{{ props.item.roomNumber }}</td>
        <td class="text-xs-right">{{ props.item.cardNumber }}</td>
      </tr>
    </template>
  </v-data-table>

    </v-container>
  </v-parallax>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      pagination: {
        sortBy: 'name'
      },
      selected: [],
      headers: [
        {
          text: 'Guest Name',
          align: 'left',
          value: 'name'
        },
        { text: 'Total Amount', value: 'totalAmount' },
        { text: 'Amount Paid', value: 'amountPaid' },
        { text: 'Charge Date', value: 'chargeDate' },
        { text: 'Room Number', value: 'roomNumber' },
        { text: 'Card Number', value: 'cardNumber' }
      ],
      guests: [
        {
          value: false,
          name: 'John Doe',
          totalAmount: 159.76,
          amountPaid: 65.76,
          chargeDate: '01/01/2019',
          roomNumber: 101,
          cardNumber: '1234567891011234'
        },
        {
          value: false,
          name: 'James Sherman',
          totalAmount: 237.65,
          amountPaid: 167.25,
          chargeDate: '01/01/2019',
          roomNumber: 102,
          cardNumber: '3333435698087687'
        },
        {
          value: false,
          name: 'Jenny Craig',
          totalAmount: 262.90,
          amountPaid: 76.98,
          chargeDate: '01/01/2019',
          roomNumber: 103,
          cardNumber: '7777657877789987'
        },
        {
          value: false,
          name: 'Mister Leg',
          totalAmount: 750.76,
          amountPaid: 560.87,
          chargeDate: '01/01/2019',
          roomNumber: 104,
          cardNumber: '0098786765476453'
        },
        {
          value: false,
          name: 'Father Grigorio',
          totalAmount: 356.75,
          amountPaid: 25.56,
          chargeDate: '01/01/2019',
          roomNumber: 105,
          cardNumber: '1233439886097564'
        },
        {
          value: false,
          name: 'Johnny Johnson',
          totalAmount: 200.50,
          amountPaid: 0,
          chargeDate: '01/01/2019',
          roomNumber: 106,
          cardNumber: '5364758675648957'
        },
        {
          value: false,
          name: 'Phillip Thompson',
          totalAmount: 392.65,
          amountPaid: 120.98,
          chargeDate: '01/01/2019',
          roomNumber: 107,
          cardNumber: '0098087957687544'
        },
        {
          value: false,
          name: 'Carl Weezer',
          totalAmount: 409.56,
          amountPaid: 120.99,
          chargeDate: '01/01/2019',
          roomNumber: 108,
          cardNumber: '2222999977775555'
        },
        {
          value: false,
          name: 'Felacia Thomas',
          totalAmount: 257.87,
          amountPaid: 125.98,
          chargeDate: '01/01/2019',
          roomNumber: 109,
          cardNumber: '1234987986755564'
        },
        {
          value: false,
          name: 'Charles Charleson',
          totalAmount: 500.01,
          amountPaid: 450.55,
          chargeDate: '01/01/2019',
          roomNumber: 110,
          cardNumber: '0989786765767755'
        }
      ]
    }),

    methods: {
      toggleAll () {
        if (this.selected.length) this.selected = []
        else this.selected = this.guests.slice()
      },
      changeSort (column) {
        if (this.pagination.sortBy === column) {
          this.pagination.descending = !this.pagination.descending
        } else {
          this.pagination.sortBy = column
          this.pagination.descending = false
        }
      }
    }
  }
</script>

<style scoped>

</style>
