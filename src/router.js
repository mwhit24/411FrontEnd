import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Reservations from './components/Reservations.vue'
import Help from './components/Help.vue'

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

  ]
})
