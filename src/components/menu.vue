<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

defineOptions({ name: 'AppMenu' })

const isOpen = ref(true)
</script>

<template>
  <nav class="bg-gray-100 p-4">
    <div class="flex justify-between items-center">
      <ul :class="[isOpen ? 'block' : 'hidden', 'md:flex', 'space-x-4']">
        <li><RouterLink to="/">Inicio</RouterLink></li>
        <li><RouterLink to="/sobre-nosotros">Sobre nosotros</RouterLink></li>
        <li><RouterLink to="/productos">Productos</RouterLink></li>
        <li><RouterLink to="/contacto">Contacto</RouterLink></li>
        <li><RouterLink to="/about">Acerca de</RouterLink></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
/* Contenedor general */
.nav-container {
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem 1.5rem;
  position: relative;
  z-index: 50;
}

/* Contenido principal */
.nav-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Logo */
.nav-logo {
  font-size: 1.25rem;
  font-weight: bold;
  color: #1f2937; /* Gray-800 */
  text-decoration: none;
}

/* Botón hamburguesa (solo visible en móviles) */
.nav-toggle {
  display: block;
  background: none;
  border: none;
  cursor: pointer;
  color: #1f2937;
}

.icon {
  width: 1.5rem;
  height: 1.5rem;
}

/* Menú */
.nav-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 0.5rem;
  display: none;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
}

.nav-menu.open {
  display: flex;
}

/* Enlaces */
.nav-link {
  display: block;
  padding: 0.75rem 1rem;
  color: #374151; /* Gray-700 */
  text-decoration: none;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #2563eb; /* Blue-600 */
}

/* Media query para pantallas medianas y mayores */
@media (min-width: 768px) {
  .nav-toggle {
    display: none;
  }

  .nav-menu {
    position: static;
    display: flex !important;
    flex-direction: row;
    background: transparent;
    box-shadow: none;
    width: auto;
    margin-top: 0;
  }

  .nav-link {
    padding: 0.5rem 1rem;
  }
}
</style>

