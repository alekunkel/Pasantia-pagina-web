<script setup>
import AppMenu from './components/menu.vue'
import AppFooter from './components/footer.vue'
import { ref, onMounted } from 'vue'

const audioRef = ref(null)
const btnRef = ref(null)
const isPlaying = ref(false)

async function toggleMusic() {
  const audio = audioRef.value
  const btn = btnRef.value

  if (!audio || !btn) return

  if (!isPlaying.value) {
    try {
      audio.muted = false
      audio.volume = 0.3 // 🔉 volumen bajo al activar sonido
      await audio.play()
      isPlaying.value = true
      btn.classList.add('on')
    } catch (err) {
      console.error('No se pudo reproducir con sonido:', err)
      audio.muted = true
    }
  } else {
    audio.pause()
    isPlaying.value = false
    btn.classList.remove('on')
  }
}

// 🔊 Intenta reproducir automáticamente con volumen bajo
onMounted(async () => {
  const audio = audioRef.value
  const btn = btnRef.value

  if (!audio || !btn) return

  try {
    audio.muted = false
    audio.volume = 0.3 // 🔉 volumen bajo al iniciar
    await audio.play()
    isPlaying.value = true
    btn.classList.add('on')
  } catch (err) {
    // Si el navegador bloquea el autoplay, se reproduce en mute
    console.warn('Autoplay con sonido bloqueado, iniciando en mute.')
    audio.muted = true
    await audio.play().catch(() => {})
  }
})
</script>

<template>
  <AppMenu />
  <main>
    <RouterView />

    <div class="reproductor-fijo">
      <audio ref="audioRef" loop autoplay muted>
        <source src="/musica/musica.mp3" type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>

      <button ref="btnRef" @click="toggleMusic" class="music-toggle-btn">
        {{ isPlaying ? '⏸ Silenciar' : '▶ Sonido ON' }}
      </button>
    </div>
  </main>
  <AppFooter />
</template>

<style scoped>
main {
  min-height: 80vh;
}

.reproductor-fijo {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}

.reproductor-fijo audio {
  display: none;
}

.music-toggle-btn {
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  padding: 8px 12px;
  cursor: pointer;
  font-family: Arial, sans-serif;
  font-size: 14px;
  transition: all 0.3s ease;
  min-width: 120px;
}

.music-toggle-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

.music-toggle-btn.on {
  background: rgba(0, 150, 0, 0.8);
  border-color: lime;
}
</style>
