import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Reservations from './components/Reservations.vue'
import Help from './components/Help.vue'
import Customer from './components/Customer.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/reservations',
      name: 'reservations',
      component: Reservations
    },
    {
      path: '/customer',
      name: 'customer',
      component: Customer
    },
  ]
})
