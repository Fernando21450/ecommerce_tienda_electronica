import { createRouter, createWebHistory } from 'vue-router'

// Importar vistas
import Home from '../view/Home.vue'
import LoginView from '../view/Login.vue'
import RegistroView from '../view/Registro.vue'
import CarritoView from '../view/Carrito.vue'
import ListaDeseosView from '../view/ListaDeseos.vue'
import DetalleArticuloView from '../view/DetalleArticulo.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: LoginView },
  { path: '/registro', name: 'Registro', component: RegistroView },
  { path: '/carrito', name: 'Carrito', component: CarritoView },
  { path: '/lista-deseos', name: 'ListaDeseos', component: ListaDeseosView },
  { path: '/detalle/:id', name: 'DetalleArticulo', component: DetalleArticuloView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

