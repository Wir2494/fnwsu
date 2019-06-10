import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Assortiment from '@/components/Assortiment'
import OverOns from '@/components/OverOns'
import Contact from '@/components/Contact'
import Signin from '@/components/admin/Signin'
import Backoffice from '@/components/admin/Backoffice'
import Homeadmin from '@/components/admin/Homeadmin'
import Overonsadmin from '@/components/admin/Overonsadmin'
import Contactadmin from '@/components/admin/Contactadmin'
import ViewProduct from '@/components/admin/ViewProduct'
import Products from '@/components/admin/Products'
import AddProduct from '@/components/admin/AddProduct'
import EditProduct from '@/components/admin/EditProduct'
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
      },
      children: [{
        path: 'produkten',
        component: Products
      }, {
        path: 'produkt-toevoegen',
        component: AddProduct
      }, {
        path: ':product_id',
        name: 'view-product',
        component: ViewProduct
      },{
        path: 'home',
        component: Homeadmin
      }, {
        path: 'over-ons',
        component: Overonsadmin
      }, {
        path: 'contact',
        component: Contactadmin
      }]
    },
    {
      path: '/fsbo/product/bewerk-produkt/:product_id',
      name: 'edit-product',
      component: EditProduct
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

