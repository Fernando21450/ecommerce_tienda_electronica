<template>
    <section class="shop-section fade-in">
      <div class="container">
        <h1 class="section-title">🛍️ Tu Carrito de Compras</h1>
  
        <div v-if="carrito.length === 0" class="empty-message">
          <p>Tu carrito está vacío 😔</p>
          <router-link to="/" class="btn-back">Explorar productos</router-link>
        </div>
  
        <div v-else class="cart-container">
          <div class="cart-items">
            <div v-for="(item, index) in carrito" :key="index" class="cart-item">
              <img :src="item.imagen" alt="producto" class="cart-img" />
              <div class="cart-info">
                <h3>{{ item.nombre }}</h3>
                <p>{{ item.descripcion }}</p>
                <p class="price">Bs {{ item.precio.toFixed(2) }}</p>
  
                <div class="quantity-control">
                  <button @click="decrementarCantidad(index)">−</button>
                  <span>{{ item.cantidad }}</span>
                  <button @click="incrementarCantidad(index)">+</button>
                </div>
              </div>
              <button class="remove-btn" @click="eliminarItem(index)">✖</button>
            </div>
          </div>
  
          <div class="cart-summary">
            <h2>Resumen del Pedido</h2>
            <p>Productos: {{ totalArticulos }}</p>
            <p>Total: <strong>Bs {{ total.toFixed(2) }}</strong></p>
            <button class="btn-checkout">Proceder al Pago 💳</button>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "CarritoView",
    data() {
      return {
        carrito: [
          {
            nombre: "Módulo ESP32",
            descripcion: "Placa de desarrollo WiFi + Bluetooth",
            precio: 120,
            cantidad: 1,
            imagen: "https://upload.wikimedia.org/wikipedia/commons/4/45/Esp32.jpg",
          },
          {
            nombre: "Sensor Ultrasonico HC-SR04",
            descripcion: "Sensor de distancia por ultrasonido",
            precio: 25,
            cantidad: 2,
            imagen: "https://upload.wikimedia.org/wikipedia/commons/3/3d/HC-SR04_ultrasonic_sensor.jpg",
          },
        ],
      };
    },
    computed: {
      total() {
        return this.carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
      },
      totalArticulos() {
        return this.carrito.reduce((acc, item) => acc + item.cantidad, 0);
      },
    },
    methods: {
      incrementarCantidad(index) {
        this.carrito[index].cantidad++;
      },
      decrementarCantidad(index) {
        if (this.carrito[index].cantidad > 1) {
          this.carrito[index].cantidad--;
        }
      },
      eliminarItem(index) {
        this.carrito.splice(index, 1);
      },
    },
  };
  </script>
  
  <style scoped>
  .shop-section {
    min-height: 100vh;
    background: linear-gradient(180deg, #0a0f1c, #111b2e);
    color: #e0e0e0;
    padding: 40px 20px;
  }
  
  .section-title {
    text-align: center;
    color: #00bfff;
    margin-bottom: 30px;
  }
  
  .cart-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;
  }
  
  .cart-items {
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .cart-item {
    background: #1b283a;
    display: flex;
    align-items: center;
    border-radius: 12px;
    padding: 15px;
    box-shadow: 0 0 10px rgba(0, 191, 255, 0.1);
    position: relative;
  }
  
  .cart-img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 10px;
    margin-right: 20px;
  }
  
  .cart-info h3 {
    margin: 0;
    color: #00bfff;
  }
  
  .cart-info p {
    margin: 5px 0;
    font-size: 0.9rem;
  }
  
  .price {
    font-weight: bold;
    color: #00ffcc;
  }
  
  .quantity-control {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 8px;
  }
  
  .quantity-control button {
    background: #00bfff;
    border: none;
    color: white;
    font-size: 1.2rem;
    width: 30px;
    height: 30px;
    border-radius: 8px;
    cursor: pointer;
  }
  
  .remove-btn {
    position: absolute;
    top: 10px;
    right: 15px;
    background: transparent;
    border: none;
    color: #ff4c4c;
    font-size: 1.3rem;
    cursor: pointer;
  }
  
  .cart-summary {
    flex: 1;
    background: #1b283a;
    border-radius: 12px;
    padding: 25px;
    height: fit-content;
    box-shadow: 0 0 20px rgba(0, 191, 255, 0.2);
  }
  
  .cart-summary h2 {
    color: #00bfff;
    margin-bottom: 15px;
  }
  
  .btn-checkout {
    background: linear-gradient(90deg, #00bfff, #0096ff);
    border: none;
    color: white;
    width: 100%;
    padding: 12px;
    border-radius: 25px;
    margin-top: 20px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s;
  }
  
  .btn-checkout:hover {
    box-shadow: 0 0 15px rgba(0, 191, 255, 0.6);
  }
  
  .empty-message {
    text-align: center;
    margin-top: 80px;
  }
  
  .btn-back {
    display: inline-block;
    margin-top: 20px;
    color: #00bfff;
    font-weight: 600;
    text-decoration: none;
  }
  
  .btn-back:hover {
    text-decoration: underline;
  }
  
  .fade-in {
    animation: fadeIn 0.8s ease forwards;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  </style>
  