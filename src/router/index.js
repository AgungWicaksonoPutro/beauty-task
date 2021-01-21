import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/dashboard/index.vue'
import Home from '../views/dashboard/home/home.vue'
import Profile from '../views/dashboard/profile/profile.vue'
import Auth from '../views/auth/index.vue'
import Register from '../views/auth/register/register.vue'
import Login from '../views/auth/login/login.vue'
import Add from '../views/dashboard/add/add.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home
      },
      {
        path: 'profile',
        name: 'Profile',
        component: Profile
      },
      {
        path: 'add',
        name: 'Add',
        component: Add
      }
    ]
  },
  {
    path: '/',
    name: 'Auth',
    component: Auth,
    children: [
      {
        path: 'register',
        name: 'Register',
        component: Register
      },
      {
        path: 'login',
        name: 'Login',
        component: Login
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
