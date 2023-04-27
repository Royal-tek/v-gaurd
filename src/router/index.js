import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import SuperAdminLgaView from '../components/SuperAdminLgaView'
import SuperAdminWardView from '../components/SuperAdminWardView'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta : {
      requiresLogin : true
    }
  },
  {
    path: '/lga-view/:lgaName',
    name: 'SuperAdminLgaView',
    component: SuperAdminLgaView,
    meta : {
      requiresLogin : true
    }
    
  },
  {
    path: '/ward-view',
    name: 'SuperAdminWardView',
    component: SuperAdminWardView,
    meta : {
      requiresLogin : true
    }
    
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta : {
      cannotBeAccessedAfterLogin : true
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
