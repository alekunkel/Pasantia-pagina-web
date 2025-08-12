<script setup>
import AppFooter from './components/footer.vue'
import AppMenu from './components/menu.vue'
</script>

<template>
  <AppMenu />
  <header>
    <h1>M y M light</h1>
    <img alt="M y M light logo" class="logo" src="./imagenes/Logo_MYM.jpg" width="125" height="125" />
    <p>empresa dedicada a la iluminación profesional</p>
  </header>
<RouterView />
  <AppFooter />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
