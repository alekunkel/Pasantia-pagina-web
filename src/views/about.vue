<script setup>
import { RouterLink } from 'vue-router'

defineOptions({
  name: 'AboutView'
})
</script>

<template>
  <div class="about">
    <RouterLink to="/">Inicio</RouterLink>
    <h1>Acerca de</h1>
    <p>Somos una empresa dedicada a la iluminación profesional</p>
  </div>
</template>

<style>

</style>
.about {
  padding: 2rem;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

.about a {
  display: inline-block;
  margin-bottom: 1.5rem;
  font-weight: bold;
  color: #007acc;
  text-decoration: none;
  transition: color 0.3s ease;
}

.about a:hover {
  color: #005f99;
  text-decoration: underline;
}

.about h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.about p {
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
