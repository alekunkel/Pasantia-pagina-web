<script setup>
import video1 from '@/assets/videos/video1.mp4';
import video2 from '@/assets/videos/video2.mp4';
import video3 from '@/assets/videos/video3.mp4';

defineOptions({
  name: 'ProyectosView'
})

const proyectos = [
  {
    id: 1,
    titulo: 'Diseños Innovadores',
    descripcion: 'Instalación de luminarias LED adaptado a cada necesidad.',
    video: video1,
        altText: 'Video en bucle de un cubo de luces led hecho por pedido de un cliente.'
  },
  {
    id: 2,
    titulo: 'Proyecto Morocco Brinkmann',
    video: video2,
    descripcion: 'Sistema de iluminación eficiente para todo tipo de fiestas.',
    altText: 'Video en bucle de una instalacion iluminaria en un boliche reconocido llamado Morocco'
  },
  {
    id: 3,
    titulo: 'Iluminacion Internacional',
    video: video3,
    descripcion: 'Iluminación para eventos dentro y fuera del país.',
    altText: 'Video en bucle donde explica como la empresa trabaja dentro y fuera del pais.'
  },
]
</script>

<template>
  <section class="proyectos">
    <h2>Proyectos Destacados</h2>
    <div class="grid">
      <div class="proyecto" v-for="p in proyectos" :key="p.id">
    <video
      :src="p.video"
      :aria-label="p.altText"
      controls
      muted
      autoplay
      loop
    ></video>
    <h3>{{ p.titulo }}</h3>
        <p>{{ p.descripcion }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.proyectos {
  padding: 3rem 1rem;
  background: #111;
  color: #fff;
  text-align: center;
}

.proyectos h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #0ff;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.proyecto {
  background: #1a1a1a;
  padding: 1rem;
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.proyecto:hover {
  transform: scale(1.05);
}

/* ⭐ CLAVE: El selector incluye solo 'video' (o 'img, video' si usaras ambos) ⭐ */
.proyecto video {
  width: 100%;
  border-radius: 10px;
  height: 400px;
  /* 'object-fit: cover' es importante para que el video llene el contenedor sin distorsionarse */
  object-fit: cover;
}

.proyecto h3 {
  margin-top: 1rem;
  font-size: 1.4rem;
  color: #0ff;
}

.proyecto p {
  font-size: 1rem;
  margin-top: 0.5rem;
  color: #ccc;
}
</style>
