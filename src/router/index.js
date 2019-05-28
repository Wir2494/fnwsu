import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Assortiment from '@/components/Assortiment'
import OverOns from '@/components/OverOns'
import Contact from '@/components/Contact'
import Signin from '@/components/admin/Signin'
import Backoffice from '@/components/admin/Backoffice'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Signin,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/fsbo',
      name: 'backoffice',
      component: Backoffice,
      meta: {
        requiresAuth: true
      }
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
});

// Navigation guards

router.beforeEach((to, from, next) => {
  // Check for requiredAuth guard
  if(to.matched.some(record => record.meta.requiresAuth)){
    // Check if !loggedIn
    if(!firebase.auth().currentUser){
      // Go to login
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      });
    }else {
      // Proceed to route
      next();
    }
  } else if(to.matched.some(record => record.meta.requiresGuest)) {
    // Check if loggedIn
    if(firebase.auth().currentUser){
      // Go to login
      next({
        path: '/fsbo',
        query: {
          redirect: to.fullPath
        }
      });
    }else {
      // Proceed to route
      next();
    }
  } else {
    // Proceed to route
    next();
  }
});
export default router;

