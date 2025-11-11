import { defineStore } from 'pinia'

export const useTiendaStore = defineStore('tienda', {
  state: () => ({
    carrito: [],
    listaDeseos: [],
  }),
  getters: {
    totalCarrito: (state) =>
      state.carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0),
    totalArticulos: (state) =>
      state.carrito.reduce((acc, item) => acc + item.cantidad, 0),
  },
  actions: {
    agregarAlCarrito(producto) {
      const index = this.carrito.findIndex((p) => p.id === producto.id)
      if (index !== -1) {
        this.carrito[index].cantidad++
      } else {
        this.carrito.push({ ...producto, cantidad: 1 })
      }
    },
    eliminarDelCarrito(id) {
      this.carrito = this.carrito.filter((item) => item.id !== id)
    },
    agregarAListaDeseos(producto) {
      if (!this.listaDeseos.find((p) => p.id === producto.id)) {
        this.listaDeseos.push(producto)
      }
    },
    eliminarDeListaDeseos(id) {
      this.listaDeseos = this.listaDeseos.filter((item) => item.id !== id)
    },
  },
})
