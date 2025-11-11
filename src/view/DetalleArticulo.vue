<template>
    <section class="detalle-section fade-in">
      <div class="container">
        <div class="detalle-card">
          <div class="detalle-img">
            <img :src="articulo.imagen" :alt="articulo.nombre" />
          </div>
          <div class="detalle-info">
            <h1 class="detalle-nombre">{{ articulo.nombre }}</h1>
            <p class="detalle-categoria">{{ articulo.categoria }}</p>
            <p class="detalle-descripcion">{{ articulo.descripcion }}</p>
            <p class="detalle-precio">Bs {{ articulo.precio.toFixed(2) }}</p>
  
            <div class="detalle-actions">
              <button class="btn-add" @click="agregarAlCarrito">🛒 Añadir al Carrito</button>
              <button class="btn-wishlist" @click="agregarAListaDeseos">💙 Añadir a Lista de Deseos</button>
            </div>
  
            <p class="detalle-stock" v-if="articulo.stock > 0">
              Stock disponible: {{ articulo.stock }}
            </p>
            <p class="detalle-stock out-of-stock" v-else>
              Producto agotado
            </p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "DetalleArticuloView",
    data() {
      return {
        articulo: {
          nombre: "Arduino Mega 2560",
          categoria: "Microcontroladores",
          descripcion:
            "El Arduino Mega 2560 es ideal para proyectos complejos con múltiples entradas y salidas. Compatible con shields y sensores variados.",
          precio: 250,
          stock: 5,
          imagen:
            "https://cdn.sparkfun.com//assets/parts/1/1/0/2/6/14050-Arduino_Mega_-_R3.jpg",
        },
      };
    },
    methods: {
      agregarAlCarrito() {
        alert(`${this.articulo.nombre} agregado al carrito 🛒`);
        // Aquí puedes emitir un evento o agregarlo al store/pinia
      },
      agregarAListaDeseos() {
        alert(`${this.articulo.nombre} agregado a tu lista de deseos 💙`);
        // Aquí puedes emitir un evento o agregarlo al store/pinia
      },
    },
  };
  </script>
  
  <style scoped>
  .detalle-section {
    min-height: 100vh;
    background: linear-gradient(180deg, #0a0f1c, #111b2e);
    color: #e0e0e0;
    padding: 50px 20px;
  }
  
  .detalle-card {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    max-width: 1000px;
    margin: auto;
    background: #1b283a;
    border-radius: 15px;
    padding: 30px;
    box-shadow: 0 0 25px rgba(0, 191, 255, 0.2);
  }
  
  .detalle-img img {
    width: 100%;
    max-width: 400px;
    border-radius: 12px;
    object-fit: cover;
  }
  
  .detalle-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .detalle-nombre {
    font-size: 2rem;
    color: #00bfff;
    margin-bottom: 10px;
  }
  
  .detalle-categoria {
    font-size: 0.95rem;
    color: #a0a0a0;
    margin-bottom: 20px;
  }
  
  .detalle-descripcion {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 20px;
  }
  
  .detalle-precio {
    font-size: 1.5rem;
    font-weight: bold;
    color: #00ffcc;
    margin-bottom: 20px;
  }
  
  .detalle-actions {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    margin-bottom: 15px;
  }
  
  .btn-add,
  .btn-wishlist {
    border: none;
    border-radius: 25px;
    padding: 12px 25px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .btn-add {
    background: linear-gradient(90deg, #00bfff, #0096ff);
    color: white;
  }
  
  .btn-add:hover {
    box-shadow: 0 0 15px rgba(0, 191, 255, 0.6);
    transform: translateY(-2px);
  }
  
  .btn-wishlist {
    background: #ff4c4c;
    color: white;
  }
  
  .btn-wishlist:hover {
    box-shadow: 0 0 15px rgba(255, 76, 76, 0.6);
    transform: translateY(-2px);
  }
  
  .detalle-stock {
    font-size: 0.95rem;
    color: #ccc;
  }
  
  .out-of-stock {
    color: #ff4c4c;
    font-weight: bold;
  }
  
  .fade-in {
    animation: fadeIn 0.8s ease forwards;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @media (max-width: 768px) {
    .detalle-card {
      flex-direction: column;
      padding: 20px;
    }
  
    .detalle-img img {
      max-width: 100%;
    }
  }
  </style>
  