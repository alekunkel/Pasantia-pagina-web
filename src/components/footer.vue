<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <div>
        <p>© {{ currentYear }} Todos los derechos reservados.</p>
      </div>
      <nav>
  <a href="#">Acerca de</a>
  <a href="https://wa.me/3564419955" target="_blank" aria-label="WhatsApp">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: middle;">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.989.583 3.838 1.588 5.397L2 22l4.746-1.561A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.657 0-3.216-.406-4.563-1.117l-.324-.172-2.82.927.939-2.747-.177-.282A7.963 7.963 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8zm4.406-5.845c-.242-.121-1.434-.707-1.655-.788-.222-.081-.384-.121-.546.122-.161.242-.626.788-.768.951-.141.161-.283.182-.525.061-.242-.122-1.022-.377-1.946-1.201-.719-.641-1.205-1.432-1.347-1.674-.141-.242-.015-.373.106-.494.109-.109.242-.283.363-.424.121-.141.161-.242.242-.404.081-.161.04-.303-.02-.424-.061-.121-.546-1.318-.748-1.803-.197-.473-.398-.409-.546-.416l-.464-.008c-.161 0-.424.06-.646.303-.222.242-.848.828-.848 2.018 0 1.19.868 2.341.989 2.504.121.161 1.708 2.613 4.14 3.563.579.199 1.029.318 1.38.406.579.147 1.106.126 1.523.077.465-.055 1.434-.586 1.637-1.152.202-.566.202-1.051.142-1.152-.06-.101-.22-.162-.462-.283z"/>
      </svg>
    </a>
    <a href="#">Privacidad</a>
  </nav>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #222;
  color: white;
  padding: 20px 0;
}
.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.footer-content nav a {
  color: #bbb;
  margin-left: 15px;
  text-decoration: none;
}
.footer-content nav a:hover {
  color: white;
}
</style>
