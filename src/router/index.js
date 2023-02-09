import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    name: 'info',
    path: '/info',
    comments:()=> import('@/components/info')
  }
]
const router = new VueRouter({
  routes
})
export default router
