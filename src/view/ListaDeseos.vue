<template>
    <section class="wishlist-section fade-in">
      <div class="container">
        <h1 class="section-title">💙 Tu Lista de Deseos</h1>
  
        <div v-if="deseos.length === 0" class="empty-message">
          <p>No tienes artículos en tu lista de deseos 😔</p>
          <router-link to="/" class="btn-back">Explorar productos</router-link>
        </div>
  
        <div v-else class="wishlist-grid">
          <div v-for="(item, index) in deseos" :key="index" class="wishlist-item">
            <img :src="item.imagen" alt="producto" />
            <h3>{{ item.nombre }}</h3>
            <p>Bs {{ item.precio.toFixed(2) }}</p>
            <div class="wishlist-actions">
              <button class="btn-add" @click="agregarAlCarrito(item)">Agregar al carrito 🛒</button>
              <button class="btn-remove" @click="eliminarDeseo(index)">Eliminar ✖</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "ListaDeseosView",
    data() {
      return {
        deseos: [
          {
            nombre: "Arduino Uno R3",
            precio: 180,
            imagen: "https://upload.wikimedia.org/wikipedia/commons/3/38/Arduino_Uno_-_R3.jpg",
          },
          {
            nombre: "Pantalla LCD 16x2",
            precio: 45,
            imagen: "https://upload.wikimedia.org/wikipedia/commons/f/f1/LCD_display_16x2.jpg",
          },
        ],
      };
    },
    methods: {
      eliminarDeseo(index) {
        this.deseos.splice(index, 1);
      },
      agregarAlCarrito(item) {
        alert(`${item.nombre} agregado al carrito 🛒`);
      },
    },
  };
  </script>
  
  <style scoped>
  .wishlist-section {
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
  
  .wishlist-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 25px;
  }
  
  .wishlist-item {
    background: #1b283a;
    border-radius: 12px;
    text-align: center;
    padding: 20px;
    transition: transform 0.2s, box-shadow 0.3s;
    box-shadow: 0 0 10px rgba(0, 191, 255, 0.1);
  }
  
  .wishlist-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 0 20px rgba(0, 191, 255, 0.3);
  }
  
  .wishlist-item img {
    width: 100%;
    height: 160px;
    object-fit: contain;
    border-radius: 8px;
    margin-bottom: 10px;
  }
  
  .btn-add, .btn-remove {
    border: none;
    padding: 8px 12px;
    border-radius: 20px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s;
    margin: 5px;
  }
  
  .btn-add {
    background: linear-gradient(90deg, #00bfff, #0096ff);
    color: white;
  }
  
  .btn-add:hover {
    box-shadow: 0 0 10px rgba(0, 191, 255, 0.5);
  }
  
  .btn-remove {
    background: #ff4c4c;
    color: white;
  }
  
  .btn-remove:hover {
    box-shadow: 0 0 10px rgba(255, 76, 76, 0.5);
  }
  
  .empty-message {
    text-align: center;
    margin-top: 100px;
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
  