import { createRouter, createWebHistory } from 'vue-router'
import AccountManagement from '../views/AccountManagement.vue'
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    redirect: { name: 'Index' } // Redirect to the named route
  },

  {
    path: '/Index',
    name: 'Index',
    component: Index
  },

  {
    path: '/AccountManagement',
    name: 'AccountManagement',
    component: AccountManagement
  },

  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
