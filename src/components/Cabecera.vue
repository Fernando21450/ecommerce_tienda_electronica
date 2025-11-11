<template>
  <nav class="nav-bar">
    <router-link to="/" class="logo">TiendaElectro</router-link>

    <ul class="nav-links">
      <li><router-link to="/lista-deseos">💙 Deseos <span v-if="totalDeseos">({{ totalDeseos }})</span></router-link></li>
      <li><router-link to="/carrito">🛒 Carrito <span v-if="totalCarrito">({{ totalCarrito }})</span></router-link></li>
      <li><router-link to="/login">Login</router-link></li>
    </ul>
  </nav>
</template>

<script>
import { useTiendaStore } from '../store/index.js'
import { computed } from 'vue'

export default {
  name: 'NavBar',
  setup() {
    const tiendaStore = useTiendaStore()
    const totalCarrito = computed(() => tiendaStore.totalArticulos)
    const totalDeseos = computed(() => tiendaStore.listaDeseos.length)
    return { totalCarrito, totalDeseos }
  }
}
</script>

<style scoped>
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1b283a;
  padding: 15px 30px;
  box-shadow: 0 2px 8px rgba(0, 191, 255, 0.2);
}

.logo {
  color: #00bfff;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
}

.nav-links li a {
  color: #e0e0e0;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-links li a:hover {
  color: #00bfff;
}
</style>
