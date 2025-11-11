<template>
    <div v-if="visible" class="modal-overlay" @click.self="close">
      <div class="modal-dialog modal-dialog-scrollable custom-modal">
        <div class="modal-content">
          <!-- Header -->
          <div class="modal-header">
            <h5 class="modal-title">🛒 Carrito de compras</h5>
            <button
              type="button"
              class="btn-close custom-close"
              aria-label="Close"
              @click="close"
            ></button>
          </div>
  
          <!-- Body -->
          <div class="modal-body">
            <div v-if="carrito.length === 0" class="empty-cart">
              <p>Tu carrito está vacío.</p>
            </div>
  
            <div v-else class="cart-items">
              <div
                v-for="(item, index) in carrito"
                :key="index"
                class="cart-item"
              >
                <img :src="item.imagen" alt="producto" class="item-image" />
                <div class="item-info">
                  <h6>{{ item.nombre }}</h6>
                  <p>{{ item.precio }} USD</p>
                </div>
                <button class="btn btn-sm btn-outline-danger" @click="eliminarItem(index)">
                  ✕
                </button>
              </div>
            </div>
          </div>
  
          <!-- Footer -->
          <div class="modal-footer">
            <p class="total" v-if="carrito.length > 0">
              Total: <strong>{{ total }} USD</strong>
            </p>
            <div class="footer-buttons">
              <button type="button" class="btn btn-secondary" @click="close">
                Cerrar
              </button>
              <button
                type="button"
                class="btn btn-primary"
                v-if="carrito.length > 0"
              >
                Finalizar compra
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AppModalCarro",
    props: ["visible"],
    data() {
      return {
        carrito: [
          // Ejemplo de datos (puedes conectar con tus productos reales)
          // { nombre: "Arduino UNO", precio: 25, imagen: "https://cdn...jpg" },
          // { nombre: "ESP32", precio: 30, imagen: "https://cdn...jpg" },
        ],
      };
    },
    computed: {
      total() {
        return this.carrito.reduce((acc, item) => acc + item.precio, 0);
      },
    },
    methods: {
      close() {
        this.$emit("close");
      },
      eliminarItem(index) {
        this.carrito.splice(index, 1);
      },
    },
  };
  </script>
  
  <style scoped>
  /* ======= Fondo del modal ======= */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(10, 15, 28, 0.85);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1050;
    animation: fadeIn 0.3s ease-in-out;
  }
  
  /* ======= Contenido del modal ======= */
  .custom-modal {
    max-width: 500px;
    width: 90%;
    background-color: #1a2a40;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 8px 25px rgba(0, 191, 255, 0.2);
  }
  
  /* ======= Header ======= */
  .modal-header {
    background-color: #0a0f1c;
    color: #00bfff;
    border-bottom: 1px solid rgba(0, 191, 255, 0.3);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
  }
  
  .modal-title {
    font-weight: 600;
    font-size: 1.1rem;
  }
  
  .custom-close {
    filter: invert(1);
    opacity: 0.7;
    transition: opacity 0.3s;
  }
  .custom-close:hover {
    opacity: 1;
  }
  
  /* ======= Cuerpo del modal ======= */
  .modal-body {
    background-color: #132338;
    color: #dce3ec;
    max-height: 400px;
    overflow-y: auto;
    padding: 15px;
  }
  
  /* ======= Carrito vacío ======= */
  .empty-cart {
    text-align: center;
    color: #9ab3c9;
    font-style: italic;
  }
  
  /* ======= Items del carrito ======= */
  .cart-item {
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.03);
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 8px;
    transition: background 0.3s;
  }
  
  .cart-item:hover {
    background-color: rgba(0, 191, 255, 0.08);
  }
  
  .item-image {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 6px;
    margin-right: 10px;
  }
  
  .item-info h6 {
    color: #00bfff;
    margin: 0;
    font-size: 0.95rem;
  }
  
  .item-info p {
    margin: 0;
    color: #cfd8e3;
    font-size: 0.85rem;
  }
  
  /* ======= Footer ======= */
  .modal-footer {
    background-color: #0f1b2b;
    border-top: 1px solid rgba(0, 191, 255, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    gap: 10px;
  }
  
  .total {
    color: #ffffff;
    font-size: 1rem;
    margin: 0;
  }
  
  .footer-buttons {
    display: flex;
    gap: 10px;
  }
  
  /* ======= Botones ======= */
  .btn-primary {
    background-color: #00bfff;
    border: none;
    transition: background 0.3s;
  }
  .btn-primary:hover {
    background-color: #008ccc;
  }
  
  .btn-secondary {
    background-color: #344a67;
    border: none;
    color: #fff;
    transition: background 0.3s;
  }
  .btn-secondary:hover {
    background-color: #49627f;
  }
  
  /* ======= Animación ======= */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  </style>
  