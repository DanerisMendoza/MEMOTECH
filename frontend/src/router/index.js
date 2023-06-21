import { createRouter, createWebHistory } from 'vue-router'
import AccountManagement from '../views/admin/AccountManagement.vue'
import adminIndex from '../views/admin/Index.vue'
import Login from '../views/Login.vue'


const routes = [
  {
    path: '/',
    redirect: { name: 'Login' } // Redirect to the named route
  },

  {
    path: '/adminIndex',
    name: 'adminIndex',
    component: adminIndex,
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
  const role = localStorage.getItem('role');
  //checking if there is active account redirect to login if none
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if(role == 'null'){
      next({ name: 'Login' });
      return;
    }
  }
  // checking if account is already logged in
  else{
    if(role != 'null'){
      if(role == 'admin'){
        next({ name: 'adminIndex' });
        return;
      }
    }
  } 
  next();
});


export default router
