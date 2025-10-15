<script setup>
import myVideo from '@/assets/videos/Mym_light_video.mp4'

defineOptions({
  name: 'AboutView'
})
</script>

<template>
  <div class="video-background">
    <span class="visually-hidden">
      Un video de fondo animado que muestra formas abstractas moviéndose.
    </span>
    <video autoplay muted loop playsinline>
      <source :src="myVideo" type="video/mp4" />
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

/* Contenedor del contenido */
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

.about a {
  display: inline-block;
  margin-bottom: 1.5rem;
  font-weight: bold;
  color: #00c3ff;
  text-decoration: none;
  transition: all 0.3s ease;
}

.about a:hover {
  color: #00a0cc;
  text-decoration: underline;
}

.about h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.6);
}

.about p {
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  text-shadow: 1px 1px 6px rgba(0,0,0,0.6);
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
