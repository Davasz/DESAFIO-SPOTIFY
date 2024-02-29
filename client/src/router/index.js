import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/', // Url path
    name: 'home',
    
    component: () => import('@/views/HomeView.vue') // Respective file
  },
  {
    path: '/contratos', // Url path
    name: 'contratos',
    
    component: () => import('@/views/ContractsView.vue') // Respective file
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
