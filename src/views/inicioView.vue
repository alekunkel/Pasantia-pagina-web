<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<template>
  <header class="site-header">
    <div class="header-content">
<img class="logo" src="@/assets/imagenes/logo.jpg" alt="Logo de M y M Light" width="125" height="125" />
      <div class="header-text">
        <h1>Empresa líder en iluminación </h1>
        <p class="tagline">Soluciones en iluminación profesional para proyectos residenciales, comerciales e industriales.</p>
        <p class="description">Especialistas en tecnología LED, proyectores arquitectónicos, control inteligente y diseño lumínico. Nuestro equipo ofrece asesoramiento técnico, instalación y mantenimiento.</p>
        <button @click="router.push('/contacto')" class="cta-button">Contáctanos</button>
      </div>
    </div>

  </header>
</template>
<style scoped>
.site-header {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* ocupa toda la pantalla */
  background: linear-gradient(135deg, #0a0a23, #111133); /* fondo oscuro degradado */
  color: #fff;
  text-align: center;
  padding: 2rem;
}

.header-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
}

.logo {
  width: 150px;
  height: auto;
  margin-bottom: 1.5rem;
}

.header-text h1 {
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.tagline {
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  color: #f1f1f1;
}

.description {
  font-size: 1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  color: #e0e0e0;
  max-width: 650px;
}

.cta-button {
  background: #00c3ff;
  color: #fff;
  border: none;
  border-radius: 50px;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 195, 255, 0.4);
}

.cta-button:hover {
  background: #00a0cc;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 195, 255, 0.6);
}

/* Adaptación responsive */
@media (min-width: 768px) {
  .header-content {
    flex-direction: row;
    text-align: left;
    gap: 2rem;
  }

  .header-text {
    max-width: 500px;
  }

  .logo {
    width: 180px;
    margin-bottom: 0;
  }
}
</style>
