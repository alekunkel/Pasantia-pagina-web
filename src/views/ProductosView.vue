<script setup>
import { ref } from 'vue'
import tuboimagen from '@/imagenes/tubosled.jpg'
import pistaled from '@/imagenes/pistaled.jpg'
import barra_exaled from '@/imagenes/barraexaled.jpg'
import arospixel_led from '@/imagenes/arospixel_led.jpg'
import cuadradospixel_led from '@/imagenes/cuadradospixel_led.jpg'
import exaled from '@/imagenes/exaled.jpg'
import triangulosled from '@/imagenes/triangulospixel_led.jpg'
import pistadeacero from '@/imagenes/pistadeacero.jpg'

const productos = ref([
  {
    id: 1,
    nombre: 'Tubos LED',
    descripcion: 'Indoor RGB – Full color',
    diametro: "Diámetro: 60 mm",
    largo: "Largo: 1000 mm",
    peso: "Peso: 0.7 kg",
    cantidad_de_pixeles: "Cantidad de píxeles: 19 píxeles RGB WS2811",
    configuracion_de_led: "Configuración del led: B – R – G",
    consumo_de_energia: "Consumo de energía: Máximo 32w - Promedio 16w",
    tension_de_trabajo: "Tensión de trabajo: 12 Volts",
    grado_proteccion: "Grado de protección: Admite salpicaduras. No es sumergible",
    materiales: "Materiales: Tubo de polietileno blanco traslúcido - Tapas de plástico blanco",
    software: "Software: Led Edit 2014 - Jinx - Madrix - Resolume",
    imagen: tuboimagen
  },
  {
    id: 2,
    nombre: 'Barras Hexaled',
    descripcion: 'Indoor RGB – Full color',
    largo: "Largo: 1500 mm",
    altura: "Altura: 80 mm",
    peso: "Peso: 3.5 kg",
    cantidad_de_pixeles: "Cantidad de píxeles: 72 píxeles RGB WS2811",
    led_central: "Led central: Tira de led cálido de alto brillo",
    configuracion_de_led: "Configuración del led: B – R – G",
    consumo_de_energia: "Consumo de energía: Máximo 60w - Promedio 30w",
    tension_de_trabajo: "Tensión de trabajo: 12 Volts",
    grado_proteccion: "Grado de protección: No es sumergible. Uso interno",
    materiales: "Materiales: Estructura de aluminio. Hexágonos en impresión 3D de alta resistencia",
    software: "Software: Led Edit 2014 - Jinx - Madrix - Resolume",
    imagen: barra_exaled
  },
  {
    id: 3,
    nombre: 'Pista Led',
    descripcion: 'Indoor RGB – Full color',
    ancho: "Ancho: 900 mm",
    alto: "Alto: 900 mm",
    espesor: "Espesor: 55 mm",
    peso: "Peso: 12 kg",
    cantidad_de_pixeles: "Cantidad de píxeles: 100 unidades",
    configuracion_de_led: "Configuración del led: RGB 3 en 1 (R - G - B)",
    consumo_de_energia: "Consumo de energía: Máximo 30w - Promedio 15w",
    tension_de_trabajo: "Tensión de trabajo: 5 Volts",
    grado_proteccion: "Grado de protección: Admite salpicaduras. No es sumergible",
    materiales: "Materiales: Melamina Masisa color negro 18mm + círculos de alto impacto traslúcido con pintura PROTECT",
    software: "Software: Led Edit 2014 - Jinx - Madrix - Resolume",
    imagen: pistaled
  },
  {
    id: 4,
    nombre: 'Aros Pixel Led',
    descripcion: 'Foco estroboscópico con velocidad ajustable',
    diametro: "Diámetro: 950 mm",
    altura: "Altura: 70 mm",
    ancho_haz: "Ancho del haz: 70 mm",
    peso: "Peso: 3 kg",
    cantidad_de_pixeles: "Cantidad de píxeles: 54 píxeles RGB WS2811",
    configuracion_de_led: "Configuración del led: B – R – G",
    consumo_de_energia: "Consumo de energía: Máximo 32w - Promedio 16w",
    tension_de_trabajo: "Tensión de trabajo: 12 Volts",
    grado_proteccion: "Grado de protección: Admite salpicaduras. No es sumergible",
    materiales: "Materiales: Base de alto impacto color negro + círculo de polietileno blanco traslúcido",
    software: "Software: Led Edit 2014 - Jinx - Madrix - Resolume",
    imagen: arospixel_led
  },
  {
    id: 5,
    nombre: 'Cuadrados Pixel Led',
    descripcion: 'Indoor RGB – Full color',
    lado: "Lado: 725 mm",
    altura: "Altura: 70 mm",
    ancho_haz: "Ancho del haz: 70 mm",
    peso: "Peso: 2.7 kg",
    cantidad_de_pixeles: "Cantidad de píxeles: 52 píxeles RGB WS2811",
    configuracion_de_led: "Configuración del led: B – R – G",
    consumo_de_energia: "Consumo de energía: Máximo 30w - Promedio 15w",
    tension_de_trabajo: "Tensión de trabajo: 12 Volts",
    grado_proteccion: "Grado de protección: Admite salpicaduras. No es sumergible",
    materiales: "Materiales: Base de alto impacto color negro + cuadrado de polietileno blanco traslúcido",
    software: "Software: Led Edit 2014 - Jinx - Madrix - Resolume",
    imagen: cuadradospixel_led
  },
  {
    id: 6,
    nombre: 'Triángulos Pixel Led',
    descripcion: 'Indoor RGB – Full color',
    lado: "Lado: 810 mm",
    altura: "Altura: 70 mm",
    ancho_haz: "Ancho del haz: 70 mm",
    peso: "Peso: 2.2 kg",
    cantidad_de_pixeles: "Cantidad de píxeles: 41 píxeles RGB WS2811",
    configuracion_de_led: "Configuración del led: B – R – G",
    consumo_de_energia: "Consumo de energía: Máximo 24w - Promedio 12w",
    tension_de_trabajo: "Tensión de trabajo: 12 Volts",
    grado_proteccion: "Grado de protección: Admite salpicaduras. No es sumergible",
    materiales: "Materiales: Base de alto impacto color negro + triángulo de polietileno blanco traslúcido",
    software: "Software: Led Edit 2014 - Jinx - Madrix - Resolume",
    imagen:triangulosled
  },
  {
    id: 7,
    nombre: 'Pista de Acero',
    descripcion: 'Indoor RGB – Full color',
    ancho: "Ancho: 900 mm",
    alto: "Alto: 900 mm",
    espesor: "Espesor: 45 mm",
    peso: "Peso: 9 kg",
    grado_proteccion: "Grado de protección: Admite salpicaduras. No es sumergible",
    materiales: "Materiales: Melamina Masisa color negro 18mm + chapa de acero brillante 0,7mm recubierta con pintura PROTECT",
    imagen:pistadeacero
  },
  {
    id: 8,
    nombre: 'Hexaled',
    descripcion: 'Indoor RGB – Full color',
    diametro: "Diámetro: 900 mm",
    altura: "Altura: 80 mm",
    peso: "Peso: 4 kg",
    cantidad_de_pixeles: "Cantidad de píxeles: 84 píxeles RGB WS2811",
    led_central: "Led central: Tira de led cálido de alto brillo",
    configuracion_de_led: "Configuración del led: B – R – G",
    consumo_de_energia: "Consumo de energía: Máximo 70w - Promedio 35w",
    tension_de_trabajo: "Tensión de trabajo: 12 Volts",
    grado_proteccion: "Grado de protección: No es sumergible. Uso interno",
    materiales: "Materiales: Estructura de aluminio. Hexágonos confeccionados en impresión 3D de alta resistencia",
    software: "Software: Led Edit 2014 - Jinx - Madrix - Resolume",
    imagen: exaled
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

          <p v-if="producto.diametro">{{ producto.diametro }}</p>
          <p v-if="producto.largo">{{ producto.largo }}</p>
          <p v-if="producto.alto">{{ producto.alto }}</p>
          <p v-if="producto.ancho">{{ producto.ancho }}</p>
          <p v-if="producto.espesor">{{ producto.espesor }}</p>
          <p v-if="producto.lado">{{ producto.lado }}</p>
          <p v-if="producto.altura">{{ producto.altura }}</p>
          <p v-if="producto.ancho_haz">{{ producto.ancho_haz }}</p>
          <p v-if="producto.peso">{{ producto.peso }}</p>
          <p v-if="producto.cantidad_de_pixeles">{{ producto.cantidad_de_pixeles }}</p>
          <p v-if="producto.led_central">{{ producto.led_central }}</p>
          <p v-if="producto.configuracion_de_led">{{ producto.configuracion_de_led }}</p>
          <p v-if="producto.consumo_de_energia">{{ producto.consumo_de_energia }}</p>
          <p v-if="producto.tension_de_trabajo">{{ producto.tension_de_trabajo }}</p>
          <p v-if="producto.grado_proteccion">{{ producto.grado_proteccion }}</p>
          <p v-if="producto.materiales">{{ producto.materiales }}</p>
          <p v-if="producto.software">{{ producto.software }}</p>
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


