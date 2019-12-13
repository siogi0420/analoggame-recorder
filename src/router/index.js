import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '../components/Top.vue'
import Input from '../components/Input.vue'
import Edit from '../components/Edit.vue'
import Ranking from '../components/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Top',
    component: Top
  },
  {
    path: '/Input',
    name: 'Input',
    component: Input
  },
  {
    path: '/Edit',
    name: 'Edit',
    component: Edit
  },
  {
    path:'/Main',
    name:'Main',
    component:Ranking
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
