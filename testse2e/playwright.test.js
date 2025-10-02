import { test, expect } from '@playwright/test';

const rutas = [
  { path: '/', selector: 'h1, h2', texto: /Inicio|Bienvenido|Home/i },
  { path: '/productos', selector: 'h1, h2, .titulo', texto: /Catálogo|Productos/i },
  { path: '/contacto', selector: 'h1, h2, form', texto: /Contacto|Formulario/i },
  { path: '/about', selector: 'h1, h2, .about', texto: /Quiénes Somos|About/i },
  { path: '/proyectos', selector: 'h1, h2, .titulo', texto: /Proyectos|Catálogo|Portfolio/i },
];

test.describe('Pruebas de navegación de todas las páginas', () => {
  for (const ruta of rutas) {
    test(`La ruta ${ruta.path} carga correctamente`, async ({ page }) => {
      // 1. Navegar a la ruta
      await page.goto(ruta.path);

      // 2. Esperar a que el selector clave esté presente en el DOM
      await page.waitForSelector(ruta.selector);

      // 3. Verificar que el contenido esperado aparezca
      const elemento = page.locator(ruta.selector);
      await expect(elemento).toContainText(ruta.texto);
    });
  }
});
