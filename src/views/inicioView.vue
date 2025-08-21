<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<template>
  <header class="site-header">
    <div class="header-content">
<img class="logo" src="@/imagenes/logo.jpg" alt="Logo de M y M Light" width="125" height="125" />
      <div class="header-text">
        <h1>M y M Light</h1>
        <p class="tagline">Soluciones en iluminación profesional para proyectos residenciales, comerciales e industriales.</p>
        <p class="description">Especialistas en tecnología LED, proyectores arquitectónicos, control inteligente y diseño lumínico. Nuestro equipo ofrece asesoramiento técnico, instalación y mantenimiento.</p>
        <button @click="router.push('/contacto')" class="cta-button">Contáctanos</button>
      </div>
    </div>

    <nav aria-label="Enlaces rápidos" class="quick-links">
      <a href="#servicios">Servicios</a>
      <a href="#proyectos">Proyectos</a>
    </nav>
  </header>
</template>
