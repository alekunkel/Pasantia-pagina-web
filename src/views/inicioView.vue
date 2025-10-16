<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <header class="site-header">
    <div class="header-content">

      <picture>
        <source srcset="/imagenes/LogoMyM.webp" type="image/webp" />
        <img
          src="/imagenes/LogoMyM.png"
          alt="Logo de MyM Light"
          class="logo"
          decoding="async"
        />
      </picture>

      <div class="header-text">
        <h1>Empresa líder en iluminación</h1>
        <p class="tagline">
          Soluciones en iluminación profesional para proyectos residenciales, comerciales e industriales.
        </p>
        <p class="description">
          Especialistas en tecnología LED, proyectores arquitectónicos, control inteligente y diseño lumínico.
          Nuestro equipo ofrece asesoramiento técnico, instalación y mantenimiento.
        </p>
        <button @click="router.push('/contacto')" class="cta-button">
          Contáctanos
        </button>
      </div>
    </div>
  </header>
</template>
<style scoped>
.site-header {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a23, #111133);
  color: #fff;
  text-align: center;
  padding: 2rem;
}

.header-content {
  display: flex;
  flex-direction: column; /* Apilado en móvil (Mobile First) */
  align-items: center;
  max-width: 800px;
}

.logo {
  width: 400px; /* Tamaño más adecuado para móvil */
  height: 400px;
  opacity: 1;
  margin-bottom: 2rem;
  mask-image: radial-gradient(circle, black 70%, transparent 30%);
  -webkit-mask-image: radial-gradient(circle, black 70%, transparent 30%);
  opacity: 0.55;
}

.header-text h1 {
  font-size: 2.5rem; /* Un poco más pequeño para móviles */
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.tagline {
  font-size: 1.2rem;
  font-weight: 600;
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
  background: #fdd835;
  color: #1a1a1a;
  border: none;
  border-radius: 50px;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(253, 216, 53, 0.4);
}

.cta-button:hover {
  background: #fbc02d;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(253, 216, 53, 0.6);
}

@media (min-width: 768px) {
  .header-content {
    flex-direction: row; /* Layout lado a lado */
    text-align: left;
    gap: 3rem; /* Aumentamos un poco el espacio */
  }

  .header-text {
    max-width: 500px;
  }

  .header-text h1 {
    font-size: 2.8rem; /* Restauramos el tamaño grande para PC */
  }

  .logo {
    width: 400px;
    height: 400px;
    margin-bottom: 0; /* Quitamos el margen inferior */
  }
}
</style>
