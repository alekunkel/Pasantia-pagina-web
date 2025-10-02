import { defineConfig, devices } from '@playwright/test'; // <-- SOLUCIÓN

export default defineConfig({ // <-- Usar 'export default' en lugar de 'module.exports'
  testDir: './testse2e', // Directorio donde Playwright buscará los archivos de prueba
  fullyParallel: true,
  // La URL base para el método `page.goto('/')`
  use: {
    baseURL: 'http://localhost:5173',
    trace: 'on-first-retry', // Recoge datos de traza en caso de fallo
  },

  // Configuración de proyectos para diferentes navegadores
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});
