import { createRouter, createWebHistory } from 'vue-router'
import AccountManagement from '../views/AccountManagement.vue'
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'


const routes = [
  {
    path: '/',
    redirect: { name: 'Login' } // Redirect to the named route
  },

  {
    path: '/Index',
    name: 'Index',
    component: Index,
    meta: { requiresAuth: true }
  },

  {
    path: '/AccountManagement',
    name: 'AccountManagement',
    component: AccountManagement,
    meta: { requiresAuth: true }
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
});


router.beforeEach((to, from, next) => {
  const username = localStorage.getItem('username');
  //checking if there is active account redirect to login if none
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if(username == 'null'){
      next({ name: 'Login' });
      return;
    }
  }
  // checking if account is already logged in
  else{
    if(username != 'null'){
      next({ name: 'Index' });
    }
  } 
  next();
});


export default router
