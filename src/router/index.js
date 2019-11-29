import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Main.vue'
import Input from '../components/Input.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Input',
    name: 'Input',
    component: Input
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
