<script setup>
defineOptions({
  name: 'AboutView'
})
</script>

<template>
  <!-- Video de fondo -->
  <div class="video-background">
    <video autoplay muted loop>
      <source src="/Mym_light_video.mp4" type="video/mp4" />

    </video>
  </div>
  <!-- Contenido sobre el video -->
  <div class="about contenido">
  </div>
</template>
<style scoped>
/* Contenedor del contenido */
.about {
  padding: 2rem;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #fff;
  position: relative;
  z-index: 1;
  background: rgba(0, 0, 0, 0.4); /* capa semitransparente para dar contraste */
  border-radius: 12px;
  max-width: 800px;
  margin: 2rem auto;
  backdrop-filter: blur(4px); /* efecto de desenfoque detrás */
}

/* Links */
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

/* Títulos */
.about h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.6);
}

/* Párrafos */
.about p {
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  text-shadow: 1px 1px 6px rgba(0,0,0,0.6);
}

/* Responsivo */
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
