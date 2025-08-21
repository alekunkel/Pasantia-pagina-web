<script setup>
import { ref } from 'vue'
import tuboimagen from '@/imagenes/tubosled.jpg'
import pistaled from '@/imagenes/pistaled.jpg'

const productos = ref([
  {
    id: 1,
    nombre: 'Tubos LED',
    descripcion: 'Indoor  	RGB – Full color  ',
    diametro: "Diametro: 60cm",
    largo: "Largo: 1000mm",
    peso: "Peso: 0.7kg",
    cantidad_de_pixeles: "Cantidad de pixeles: 19 pixeles RGB WS2811",
    configuración_de_led: "Configuración del led: B – R - G",
    consumo_de_energia: "Consumo de energía: Máximo 32w - Promedio 16w",
    tension_de_trabajo: "Tension de trabajo: 12 Volts",
    grado_protección: "Grado de protección a la interperie: Admite salpicaduras",
    materiales: "Materiales de la superficie: Tubo de Polietileno blanco traslúcido - Tapas de plástico blanco",
    software: "Software: Led Edit 2014-Jinx-Madrix-Resolume",
    imagen: tuboimagen

  },
  {
    id: 2,
    nombre: 'Barras Hexaled',
    descripcion: 'Indoor  	RGB – Full color  ',
    diametro: "Diametro: 90cm",
    largo: "Largo: 1500mm",
    altura: "Altura: 80mm",
    peso: "Peso: 3.5 kg",
    cantidad_de_pixeles: "Cantidad de pixeles: 72 pixeles RGB WS2811",
    led_central: "Led central: Tira de led cálido de alto brillo",
    configuración_de_led: "Configuración del led: B – R - G",
    consumo_de_energia: "Consumo de energía: Máximo 60w - Promedio 30w",
    tension_de_trabajo: "Tension de trabajo: 12 Volts",
    grado_protección: "Grado de protección a la interperie: NO ES SUMERGIBLE. Uso interno",
    materiales: "Materiales de la superficie: Estructura de aluminio. Hexágonos confeccionados en impresión 3D de alta resistencia.",
    software: "Software: Led Edit 2014-Jinx-Madrix-Resolume",
    imagen: 'https://via.placeholder.com/300x200?text=Bola+de+Espejos'
  },
  {
    id: 3,
nombre: 'Pista Led',
    descripcion: 'Indoor  	RGB – Full color  ',
    altura: "Altura: 900mm",
    ancho: "Ancho: 900 mm",
    espesor: "Espesor: 55 mm",
    peso: "Peso: 12 kg",
    cantidad_de_pixeles: "Cantidad de pixeles: 100 unidades",
    configuración_de_led: "Configuración del led: Rgb 3 en 1  R -G - B",
    consumo_de_energia: "Consumo de energía: Máximo 30w - Promedio 15w",
    tension_de_trabajo: "Tension de trabajo: 5 Volts",
    grado_protección: "Grado de protección a la interperie: Admite salpicaduras.",
    materiales: "Materiales de la superficie: Melamina Masisa color negro 18mm Círculos de Alto Impacto Traslúcido Recubierto con pintura PROTECT",
    software: "Software: Led Edit 2014-Jinx-Madrix-Resolume",
imagen: pistaled
  },
  {
    id: 4,
    nombre: 'Foco Estroboscópico',
    descripcion: 'Foco estroboscópico con velocidad ajustable.',
    precio: 19.50,
    imagen: 'https://via.placeholder.com/300x200?text=Foco+Estroboscopico'
  }
])
</script>

<template>
  <section class="catalogo-container">
    <h2 class="titulo">Catálogo de Iluminación para Fiestas</h2>

    <div class="productos-grid">
      <div v-for="producto in productos" :key="producto.id" class="producto-card">
        <img :src="producto.imagen" :alt="producto.nombre" class="producto-img" />
        <div class="producto-info">
          <h3 class="producto-nombre">{{ producto.nombre }}</h3>
          <p class="producto-descripcion">{{ producto.descripcion }}</p>
          <p v-if="producto.precio !== undefined" class="producto-precio">$ {{ producto.precio.toFixed(2) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.catalogo-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.titulo {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
  color: #1f2937;
}

.productos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.producto-card {
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: #fff;
  transition: transform 0.2s ease;
}

.producto-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.producto-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.producto-info {
  padding: 1rem;
}

.producto-nombre {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #111827;
}

.producto-descripcion {
  font-size: 0.95rem;
  color: #4b5563;
  margin-bottom: 0.75rem;
}

.producto-precio {
  font-size: 1.1rem;
  font-weight: bold;
  color: #2563eb;
}
</style>
