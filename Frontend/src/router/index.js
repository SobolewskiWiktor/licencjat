// Composables
import { createRouter, createWebHistory } from 'vue-router'
import login from "@/views/login.vue"
import home from "@/views/dashboard.vue"
const routes = [
  {
    path: '/',
    component: login,
  },
  {
    path: '/home',
    component: home,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
