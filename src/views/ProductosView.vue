<script setup>
import { ref } from 'vue'

const productos = ref([
  {
    id: 1,
    nombre: 'Luz LED RGB',
    descripcion: 'Luz LED con control remoto y múltiples colores.',
    precio: 25.99,
    imagen: 'https://via.placeholder.com/300x200?text=Luz+LED+RGB'
  },
  {
    id: 2,
    nombre: 'Bola de Espejos',
    descripcion: 'Clásica bola de espejos giratoria para fiestas retro.',
    precio: 39.99,
    imagen: 'https://via.placeholder.com/300x200?text=Bola+de+Espejos'
  },
  {
    id: 3,
    nombre: 'Laser Party Pro',
    descripcion: 'Proyector láser con patrones dinámicos para eventos.',
    precio: 89.00,
    imagen: 'https://via.placeholder.com/300x200?text=Laser+Party+Pro'
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
          <p class="producto-precio">$ {{ producto.precio.toFixed(2) }}</p>
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
