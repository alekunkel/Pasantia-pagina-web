<script setup>
import AppMenu from './components/menu.vue'
import AppFooter from './components/footer.vue'
</script>

<template>
<AppMenu />
  <main>
    <RouterView />
  </main>
  <AppFooter />
</template>

<style scoped>
main {
  min-height: 80vh; /* Ajusta para que footer no quede flotando */
}
</style>
