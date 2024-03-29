import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Reservations from './components/Reservations.vue'
import Help from './components/Help.vue'
import Customer from './components/Customer.vue'
import Payments from './components/Payments.vue'

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
      path: '/help',
      name: 'help',
      component: Help
    },
    {
      path: '/customer',
      name: 'customer',
      component: Customer
    },
    {
      path: '/payments',
      name: 'payments',
      component: Payments
    }
  ]
})
