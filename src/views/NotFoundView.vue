<script setup>
import { useRouter } from 'vue-router'

// Opcional: Permite al usuario volver a la página anterior o al inicio.
const router = useRouter()

const goBack = () => {
  // Vuelve a la página anterior si es posible, si no, va al inicio.
  router.options.history.state.back ? router.back() : router.push('/')
}
</script>

<template>
  <div class="error-container">
    <div class="content-wrapper">
      <h1 class="error-code">404</h1>
      <h2 class="error-title">Página No Encontrada</h2>
      <p class="error-description">
        Lo sentimos, pero la página que estás buscando no existe o ha sido movida.
        Verifica la URL o regresa al inicio.
      </p>
      <button @click="goBack" class="home-button">Volver atrás</button>
    </div>
  </div>
</template>

<style scoped>

.error-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-color: #f4f7f6;
  color: #333;
  font-family: 'Montserrat', sans-serif; /* Asegúrate de importar esta fuente en tu proyecto principal, ej. en index.html */
  padding: 20px;
}

.content-wrapper {
  max-width: 600px;
}

.error-code {
  font-size: 8rem;
  font-weight: 700;
  margin: 0;
  color: #3498db;
  animation: fadeInDown 1s ease-in-out;
}

.error-title {
  font-size: 1.75rem;
  margin: 10px 0;
  font-weight: 700;
  animation: fadeInUp 1s ease-in-out 0.5s;
  animation-fill-mode: both;
}

.error-description {
  font-size: 1rem;
  margin-bottom: 30px;
  color: #666;
  animation: fadeInUp 1s ease-in-out 1s;
  animation-fill-mode: both;
}

.home-button {
  display: inline-block;
  background-color: #3498db;
  color: #fff;
  padding: 12px 25px;
  border: none;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  animation: fadeInUp 1s ease-in-out 1.5s;
  animation-fill-mode: both;
}

.home-button:hover {
  background-color: #2980b9;
  transform: translateY(-3px);
}

/* Animaciones */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
