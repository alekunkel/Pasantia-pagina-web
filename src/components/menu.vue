<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isOpen = ref(true)
</script>

<template>
  <nav class="bg-gray-100 p-4">
    <div class="flex justify-between items-center">
      <ul :class="[isOpen ? 'block' : 'hidden', 'md:flex', 'space-x-4']">
        <li><RouterLink to="/sobre-nosotros">Sobre Nosotros</RouterLink></li>
        <li><RouterLink to="/productos">Productos</RouterLink></li>
        <!-- Este enlace debe ir a una vista existente o eliminarse -->
        <li><RouterLink to="/contacto">Contacto</RouterLink></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
</style>
