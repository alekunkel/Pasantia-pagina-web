<script>
import { RouterLink } from 'vue-router'

defineOptions({
  name: 'SobreN'
})

export default {
      name: 'SobreNosotros',
        data() {
                return {
                          currentYear: new Date().getFullYear()
                };
        }
};
</script>

<template>
  <section class="sobre-nosotros">
      <div class="contenido">
            <h1>Sobre Nosotros</h1>
                  <p>Somos una empresa comprometida con la calidad y la innovación desde {{ currentYear }}.</p>
                      </div>
                        </section>
                        </template>

                        <style scoped>
                        .sobre-nosotros {
                              display: flex;
                                justify-content: center;
                                  align-items: center;
                                    min-height: 60vh;
                                      background-color: #f9f9f9;
                                        padding: 2rem;
                                          text-align: center;
                                            border-radius: 12px;
                                              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                        }

                        .contenido h1 {
                              font-size: 2.5rem;
                                margin-bottom: 1rem;
                                  color: #333;
                                    text-transform: uppercase;
                                      letter-spacing: 1px;
                        }

                        .contenido p {
                              font-size: 1.2rem;
                                color: #555;
                        }
                        </style>
