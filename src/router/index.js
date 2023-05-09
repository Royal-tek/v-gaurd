import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import SuperAdminLgaView from '../components/SuperAdminLgaView'
import SuperAdminWardView from '../components/SuperAdminWardView'
import SuperAdminPollingUnitView from '../components/SuperAdminPollingUnitView'
import SuperAdminPollingUnitDetailView from '../components/SuperAdminPollingUnitDetailView'

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
    path: '/polling-unit-view/:wardName',
    name: 'SuperAdminPollingUnitView',
    component: SuperAdminPollingUnitView,
    meta : {
      requiresLogin : true
    }
  },

  {
    path: '/polling-unit-detail-view/:pollingUnit',
    name: 'SuperAdminPollingUnitDetailView',
    component: SuperAdminPollingUnitDetailView,
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
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
