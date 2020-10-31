import Vue from 'vue'
import VueRouter from 'vue-router'
import statement from '../views/statement.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/statement',
    name: 'statement',
    component: statement
  },
  {
    path: '/map',
    name: 'Map',
    component: () => import('../views/map.vue')
  },
  {
    path: '/statement/add',
    name: 'add',
    component: () => import('../views/Form.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
