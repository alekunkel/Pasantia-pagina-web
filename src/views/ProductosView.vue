<script setup>
import { ref } from 'vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Catálogo de Productos | MyM Light Iluminación profesional ',
  meta: [
    {
      name: 'description',
      content: 'Descubre nuestro catálogo: Tubos LED, Barras Hexaled, Pistas LED, Aros Pixel y más. Soluciones para fiestas y eventos.',
    },
  ],
})

const productos = ref([
  {
    id: 1,
    nombre: 'Tubos LED',
    descripcion: 'Indoor RGB – Full color',
    imagen: 'tubosled.jpg',
    especificaciones: [
      { etiqueta: 'Diámetro', valor: '60 mm' },
      { etiqueta: 'Largo', valor: '1000 mm' },
      { etiqueta: 'Peso', valor: '0.7 kg' },
      { etiqueta: 'Píxeles', valor: '19 RGB WS2811' },
      { etiqueta: 'Consumo', valor: 'Máx. 32w / Prom. 16w' },
      { etiqueta: 'Tensión', valor: '12 Volts' },
      { etiqueta: 'Protección', valor: 'Admite salpicaduras' },
    ]
  },
  {
    id: 2,
    nombre: 'Barras Hexaled',
    descripcion: 'Indoor RGB – Full color',
    imagen: 'barraexaled.jpg',
    especificaciones: [
      { etiqueta: 'Largo', valor: '1500 mm' },
      { etiqueta: 'Altura', valor: '80 mm' },
      { etiqueta: 'Peso', valor: '3.5 kg' },
      { etiqueta: 'Píxeles', valor: '72 RGB WS2811' },
      { etiqueta: 'Led Central', valor: 'Tira de led cálido' },
      { etiqueta: 'Consumo', valor: 'Máx. 60w / Prom. 30w' },
      { etiqueta: 'Tensión', valor: '12 Volts' },
    ]
  },
  {
    id: 3,
    nombre: 'Pista Led',
    descripcion: 'Indoor RGB – Full color',
    imagen: 'pistaled.jpg',
    especificaciones: [
      { etiqueta: 'Dimensiones', valor: '900x900 mm' },
      { etiqueta: 'Espesor', valor: '55 mm' },
      { etiqueta: 'Peso', valor: '12 kg' },
      { etiqueta: 'Píxeles', valor: '100 unidades' },
      { etiqueta: 'Consumo', valor: 'Máx. 30w / Prom. 15w' },
      { etiqueta: 'Tensión', valor: '5 Volts' },
    ]
  },
  {
    id: 4,
    nombre: 'Aros Pixel Led',
    descripcion: 'Foco estroboscópico ajustable',
    imagen: 'arospixel_led.jpg',
    especificaciones: [
      { etiqueta: 'Diámetro', valor: '950 mm' },
      { etiqueta: 'Altura', valor: '70 mm' },
      { etiqueta: 'Peso', valor: '3 kg' },
      { etiqueta: 'Píxeles', valor: '54 RGB WS2811' },
      { etiqueta: 'Consumo', valor: 'Máx. 32w / Prom. 16w' },
      { etiqueta: 'Tensión', valor: '12 Volts' },
    ]
  },
  {
    id: 5,
    nombre: 'Cuadrados Pixel Led',
    descripcion: 'Indoor RGB – Full color',
    imagen: 'cuadradospixel_led.jpg',
    especificaciones: [
      { etiqueta: 'Lado', valor: '725 mm' },
      { etiqueta: 'Altura', valor: '70 mm' },
      { etiqueta: 'Peso', valor: '2.7 kg' },
      { etiqueta: 'Píxeles', valor: '52 RGB WS2811' },
      { etiqueta: 'Consumo', valor: 'Máx. 30w / Prom. 15w' },
      { etiqueta: 'Tensión', valor: '12 Volts' },
    ]
  },
  {
    id: 6,
    nombre: 'Triángulos Pixel Led',
    descripcion: 'Indoor RGB – Full color',
    imagen: 'triangulospixel_led.jpg',
    especificaciones: [
      { etiqueta: 'Lado', valor: '810 mm' },
      { etiqueta: 'Altura', valor: '70 mm' },
      { etiqueta: 'Peso', valor: '2.2 kg' },
      { etiqueta: 'Píxeles', valor: '41 RGB WS2811' },
      { etiqueta: 'Consumo', valor: 'Máx. 24w / Prom. 12w' },
      { etiqueta: 'Tensión', valor: '12 Volts' },
    ]
  },
  {
    id: 7,
    nombre: 'Pista de Acero',
    descripcion: 'Pista de baile sin iluminación',
    imagen: 'pistadeacero.jpg',
    especificaciones: [
      { etiqueta: 'Dimensiones', valor: '900x900 mm' },
      { etiqueta: 'Espesor', valor: '45 mm' },
      { etiqueta: 'Peso', valor: '9 kg' },
      { etiqueta: 'Material', valor: 'Melamina negra y chapa de acero' },
    ]
  },
  {
    id: 8,
    nombre: 'Hexaled',
    descripcion: 'Indoor RGB – Full color',
    imagen: 'exaled.jpg',
    especificaciones: [
      { etiqueta: 'Diámetro', valor: '900 mm' },
      { etiqueta: 'Altura', valor: '80 mm' },
      { etiqueta: 'Peso', valor: '4 kg' },
      { etiqueta: 'Píxeles', valor: '84 RGB WS2811' },
      { etiqueta: 'Led Central', valor: 'Tira de led cálido' },
      { etiqueta: 'Consumo', valor: 'Máx. 70w / Prom. 35w' },
      { etiqueta: 'Tensión', valor: '12 Volts' }
    ]
  },
  {
    id: 9,
    nombre: 'Pista Led Graficadóra',
    descripcion: '',
    imagen: 'exaled.jpg',
    especificaciones: [
      { etiqueta: 'Altura', valor: '900 mm' },
      { etiqueta: 'Espesor', valor: '55 mm' },

      { etiqueta: 'Peso', valor: '12 kg' },
      { etiqueta: 'Resolución visual', valor: '90 mm, 100 unidades / RGB 3 en 1 R—G—B' },
      { etiqueta: 'Consumo', valor: 'Máx. 30w / Prom. 15w' },
      { etiqueta: 'Tensión', valor: '5 V' },
      { etiqueta: 'Admite salpicaduras', valor: 'No sumergible' },
      { etiqueta: 'Material', valor: 'Melamina negra 18mm + círculos traslúcidos con pintura protectora' },
{ etiqueta: 'Software', valor: 'LED Edit 2014 — Jinx — Madrix — Resolume' },

    ]
  }
])
</script>

<template>
  <section class="catalogo-container">
    <h2 class="titulo">Catálogo de Iluminación para Fiestas</h2>
    <div class="productos-grid">
      <div v-for="producto in productos" :key="producto.id" class="producto-card">
        <picture>
          <source :srcset="`/imagenes/${producto.imagen.replace('.jpg', '.webp')}`" type="image/webp">

          <img
            :src="`/imagenes/${producto.imagen}`"
            :alt="producto.nombre"
            class="producto-img"
            loading="lazy"
            decoding="async"
          />
        </picture>

        <div class="producto-info">
          <h3 class="producto-nombre">{{ producto.nombre }}</h3>
          <p class="producto-descripcion">{{ producto.descripcion }}</p>

          <ul v-if="producto.especificaciones && producto.especificaciones.length" class="especificaciones-lista">
            <li v-for="spec in producto.especificaciones" :key="spec.etiqueta">
              <strong>{{ spec.etiqueta }}:</strong> {{ spec.valor }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

.catalogo-container {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  max-width: none;
  padding: 2rem 1rem;

  font-family: 'Montserrat', sans-serif;
color: white;
  background: linear-gradient(270deg, red, orange, yellow, green, cyan, blue, violet, red);
  background-size: 200% 200%;
  animation: rainbowShift 20s linear infinite;

  filter: brightness(1.3) saturate(1.2);
}

@keyframes rainbowShift {
  from {
    filter: hue-rotate(0deg) brightness(1.0) saturate(1.1);
  }
  to {
    filter: hue-rotate(360deg) brightness(1.0) saturate(1.1);
  }
}

.titulo {
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  text-align: center;
  color: #ffffff;
  text-shadow: 2px 2px 6px rgba(0,0,0,0.6);
}


.productos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.producto-card {
  border: 0px ;
  background: rgba(0, 0, 0, 0.4); /* fondo más oscuro */
  backdrop-filter: blur(12px);
  border-radius: 1rem;
  -webkit-backdrop-filter: blur(12px);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
}

.producto-card:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.35);
  background: rgba(255, 255, 255, 0.12); /* más oscuro al hover también */

  filter: brightness(0.8);
}

.producto-img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.producto-info {
  padding: 1.2rem;
}

.producto-nombre {
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
  color: #ffffff;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
}

.producto-descripcion {
  font-size: 1.1rem;
  font-weight: 700;
  color: #f0f0f0;
  margin-bottom: 1rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8); /* nuevo */
}

.producto-info p {
  font-size: 1rem;
  line-height: 1.5;
  color: white;
  font-weight: 600;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8); /* nuevo */
}
</style>
