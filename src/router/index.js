const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index.vue'),
  },
]
const router = new VueRouter({
  routes
})
export default router