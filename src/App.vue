<template>
  <div id="app">
    <Cabecera />
    <NavBar />           <!-- Barra de navegación fija -->
    <router-view />      <!-- Aquí se renderiza Home, Login, Registro, Carrito, etc. según la ruta -->
    <AppFooter />
  </div>
</template>

<script>

import NavBar from './components/NavBar.vue';
import AppFooter from './components/Footer.vue'
import Cabecera from './components/Cabecera.vue';
export default {
  name: 'App',
  components: { NavBar,AppFooter,Cabecera }
}
</script>

<style>
/* ======= FUENTES Y RESET ======= */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ======= ESTILO GENERAL DE LA APP ======= */
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #e0e0e0;
  background: linear-gradient(180deg, #0a0f1c 0%, #111b2e 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}

/* ======= TÍTULOS ======= */
h1, h2, h3, h4, h5 {
  color: #00bfff;
  text-transform: uppercase;
  letter-spacing: 1px;
}

h1 {
  font-size: 2.5rem;
  font-weight: 700;
}

h2 {
  font-size: 2rem;
  font-weight: 600;
}

/* ======= TEXTOS ======= */
p, span, li {
  color: #d1d1d1;
  line-height: 1.6;
}

/* ======= LINKS ======= */
a {
  color: #00bfff;
  text-decoration: none;
  transition: all 0.3s ease;
}

a:hover {
  color: #00eaff;
  text-shadow: 0 0 8px rgba(0,191,255,0.7);
}

/* ======= BOTONES GENERALES ======= */
button {
  background: linear-gradient(90deg, #00bfff, #0096ff);
  color: white;
  border: none;
  border-radius: 25px;
  padding: 10px 25px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 20px rgba(0,191,255,0.7);
}

/* ======= CONTENEDORES ======= */
.container {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
}

/* ======= SCROLLBAR PERSONALIZADA ======= */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #00bfff, #006eff);
  border-radius: 8px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #00eaff, #007bff);
}

/* ======= EFECTO SUAVE DE ENTRADA ======= */
.fade-in {
  opacity: 0;
  animation: fadeIn 0.8s ease forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ======= RESPONSIVE ======= */
@media (max-width: 768px) {
  h1 { font-size: 1.8rem; }
  h2 { font-size: 1.4rem; }
  .container { padding: 10px; }
  button { padding: 8px 18px; font-size: 0.9rem; }
}
</style>
