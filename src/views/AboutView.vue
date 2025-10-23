<script setup>
import { useHead } from '@vueuse/head'
useHead({
  title: 'Acerca de MyM Light | Expertos en Iluminación',
  meta: [
    {
      name: 'description',
      content: 'Conoce la historia de MyM Light. Somos tu socio experto en soluciones de iluminación profesional para todo tipo de eventos e instalaciones.',
    },
  ],
})
</script>

<template>
  <div class="video-background">
    <span class="visually-hidden">
      Un video de fondo animado que muestra formas abstractas moviéndose.
    </span>
    <video autoplay muted loop playsinline>
      <source src="/videos/Mym_light_video.mp4"  :type="video/mp4" />
    </video>
  </div>
  <div class="about contenido">
    <!-- tu contenido -->
  </div>
</template>

<style scoped>
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}

.about {
  padding: 2rem;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #fff;
  position: relative;
  z-index: 1;
  border-radius: 12px;
  max-width: 800px;
  margin: 2rem auto;
}


@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
}

/* Fondo de video */
.video-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
}

.video-background video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
