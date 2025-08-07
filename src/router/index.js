import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/sobre-nosotros',
      name: 'sobre-nosotros',
      component: () => import('../views/sobre_nosotros.vue'),
    },
    {
      path: '/productos',
      name: 'productos',
      component: () => import('../views/Productos.vue'),
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('../views/contacto.vue'),
    },
  ],
})

export default router
