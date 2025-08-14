import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '@/components/inicio.vue' // ajustá la ruta según tu carpeta

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Inicio, // <-- ahora Inicio.vue es la página principal
    },
    {
      path: '/sobre-nosotros',
      name: 'sobre-nosotros',
      component: () => import('@/views/Sobre_NosotrosView.vue'),
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
  ],
})

export default router
