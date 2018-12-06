import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Reservations from './components/Reservations.vue'
<<<<<<< HEAD
import Help from './components/Help.vue'
=======
import Customer from './components/Customer.vue'
>>>>>>> dd159b8dc4cc1f3a2d0573cebfc2ab5acba2c547

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
<<<<<<< HEAD
      path: '/help',
      name: 'help',
      component: Help
    },

=======
      path: '/customer',
      name: 'customer',
      component: Customer
    },
>>>>>>> dd159b8dc4cc1f3a2d0573cebfc2ab5acba2c547
  ]
})
