import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Assortiment from '@/components/Assortiment'
import OverOns from '@/components/OverOns'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/assortiment',
      name: 'Assortiment',
      component: Assortiment
    },
    {
      path: '/over-ons',
      name: 'OverOns',
      component: OverOns
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
