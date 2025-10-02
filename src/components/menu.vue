<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

defineOptions({ name: 'AppMenu' })

const isOpen = ref(true)
</script>

<template>
  <nav class="contenedor">
    <div class="flex justify-between items-center">
      <ul :class="[isOpen ? 'block' : 'hidden', 'md:flex', 'space-x-4']">
        <li><RouterLink to="/">Inicio</RouterLink></li>
        <li><RouterLink to="/proyectos">Proyectos</RouterLink></li>
        <li><RouterLink to="/productos">Productos</RouterLink></li>
        <li><RouterLink to="/contacto">Contacto</RouterLink></li>
        <li><RouterLink to="/about">Acerca de</RouterLink></li>
      </ul>
    </div>
  </nav>
</template>
<style>
/* Menú principal */
nav {
  background-color: #222;
  padding: 1rem 2rem;
  box-shadow: 0 2px 5px whitesmoke;
}

nav ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}

nav li {
  font-weight: 600;
}

nav a {
  color: white;
  text-decoration: none;
  padding: 0.3rem 0.5rem;
  border-radius: 4px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

nav a:hover,
nav a:focus,
nav a.router-link-exact-active {
  background-color: gray;
  color: white;
  outline: none;
  box-shadow: 0 0 5px #222;
}
</style>
