import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index.vue'),
  },
]
const router = new VueRouter({
  // mode: 'history',
  routes: routes
})
export default router