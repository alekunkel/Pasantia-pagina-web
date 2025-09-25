import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '@/views/InicioView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Inicio,
    },
    {
      path: '/productos',
      name: 'productos',
      component: () => import('@/views/ProductosView.vue'),
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('@/views/ContactoView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/about.vue'),
    },
    {
      path: '/proyectos',
      name: 'proyecto',
      component: () => import('@/views/ProyectoView.vue'),
    },
  ],
})

export default router
