<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Proyectos destacados de MyM Light',
  meta: [
    {
      name: 'description',
      content: 'Explora los proyectos de MyM Light. Mira nuestras instalaciones LED innovadoras, como el trabajo en Morocco en Brinkmann y expansiones internacionales.',
    },
  ],
})

const proyectos = [
  {
    id: 1,
    titulo: 'Diseños Innovadores',
    descripcion: 'Instalación de estructura cúbica con pantallas LED adaptada a cada necesidad.',
    video: '/videos/video1.mp4',
    altText: 'Gran estructura en forma de cubo con pantallas LED siendo elevada en el taller, mostrando gráficos coloridos y efectos visuales vibrantes.'
  },
  {
    id: 2,
    titulo: 'Proyecto Morocco Brinkmann',
    video: '/videos/video2.mp4',
    descripcion: 'Sistema de iluminación eficiente con diseño geométrico para fiestas.',
    altText: 'Video que muestra desde la fachada del boliche Morocco hasta el montaje y encendido final de aros hexagonales LED en el techo.'
  },
  {
    id: 3,
    titulo: 'Iluminación Internacional',
    video: '/videos/video3.mp4',
    descripcion: 'Primera exportación de tecnología LED a nuestro país vecino, Uruguay.',
    altText: 'Video anuncio celebrando la expansión internacional a Uruguay, mostrando al equipo técnico con una camiseta de Argentina y un mapa de la ruta de exportación.'
  },
  {
    id: 4,
    titulo: 'Iluminación integral de MX Disco',
    video: '/videos/video4.mp4',
    descripcion: 'Utilización de aros pixel LED cuadrados y barras pixel LED.',
    altText: 'Recorrido por el interior de MX Disco, destacando un techo con figuras cuadradas verdes y un túnel inmersivo de luces neón LED RGB geométricas.'
  },
  {
    id: 5,
    titulo: 'Iluminación del vagón de Runa Disco',
    video: '/videos/video5.mp4',
    descripcion: 'Montaje sobre un vagón de subte tomando en cuenta cada detalle.',
    altText: 'Interior de un vagón de subte convertido en discoteca, iluminado con anillos de neón LED en el techo que cambian de color sobre la gente bailando.'
  },
  {
    id: 6,
    titulo: 'Remodelación completa en Ninna',
    video: '/videos/video6.mp4',
    descripcion: 'Utilización de tubos LED y neón pixel LED.',
    altText: 'Recorrido por el boliche Ninna mostrando escaleras iluminadas con tiras azules y techos decorados con figuras geométricas de neón LED.'
  },
  {
    id: 7,
    titulo: 'Estructuras circulares en Runa Disco',
    video: '/videos/video7.mp4',
    descripcion: '4 estructuras circulares de 2, 3, 4 y 5 metros de diámetro con más de 3500 pixel LED.',
    altText: 'Impresionante estructura de techo con cuatro anillos concéntricos gigantes equipados con miles de luces pixel LED sincronizadas en tonos violetas.'
  },
  {
    id: 8,
    titulo: 'Techo Galaxia',
    video: '/videos/video8.mp4',
    descripcion: 'Trabajo personalizado de iluminación inmersiva.',
    altText: 'Instalación de techo estilo Galaxia con un centro luminoso y rayos de luz LED verde brillante que se expanden hacia afuera.'
  },
  {
    id: 9,
    titulo: 'Techo Galaxia sin bola de espejos',
    video: '/videos/video9.mp4',
    descripcion: 'Trabajo personalizado de iluminación inmersiva.',
    altText: 'Estructura de iluminación central con forma de lámpara y rayos extensibles, sincronizada con una pantalla LED gigante de fondo mostrando visuales abstractas.'
  }
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

.proyecto video {
  width: 150%;
  border-radius: 10px;
  height: 625px;
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
