<template>
    <section class="articulos-section fade-in">
      <div class="container">
        <h2 class="section-title">Nuestros Artículos</h2>
        <p class="section-subtitle">Explora nuestra selección más reciente de productos tecnológicos</p>
  
        <div class="articulos-grid">
          <div v-for="(articulo, index) in articulos" :key="index" class="articulo-card">
            <div class="articulo-img" :style="{ backgroundImage: `url(${articulo.imagen})` }"></div>
            <div class="articulo-info">
              <h3 class="articulo-nombre">{{ articulo.nombre }}</h3>
              <p class="articulo-descripcion">{{ articulo.descripcion }}</p>
              <p class="articulo-precio">{{ articulo.precio }}</p>
              <button class="btn-comprar">Añadir al carrito</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "AppArticulos",
    data() {
      return {
        articulos: [
          {
            nombre: "Arduino UNO R3",
            descripcion: "Microcontrolador ideal para tus proyectos electrónicos.",
            precio: "$29.99",
            imagen: "https://cdn.sparkfun.com//assets/parts/1/1/7/9/5/13975-Arduino_Uno_-_R3.jpg"
          },
          {
            nombre: "Raspberry Pi 4",
            descripcion: "Minicomputadora potente para automatización o IoT.",
            precio: "$89.99",
            imagen: "https://www.raspberrypi.com/app/uploads/2021/07/Raspberry-Pi-4-Model-B-hero.jpg"
          },
          {
            nombre: "Sensor Ultrasonido HC-SR04",
            descripcion: "Detecta distancias con precisión para tus proyectos.",
            precio: "$5.99",
            imagen: "https://cdn.shopify.com/s/files/1/0020/8023/2734/products/HCSR04_1_800x.jpg"
          },
          {
            nombre: "Kit de Robótica Avanzado",
            descripcion: "Incluye servos, motores y controladores para robots.",
            precio: "$149.99",
            imagen: "https://cdn.shopify.com/s/files/1/0455/2176/4502/products/robot-kit.jpg"
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .articulos-section {
    padding: 60px 20px;
    background: linear-gradient(180deg, #0a0f1c, #111b2e);
    color: #e0e0e0;
  }
  
  .section-title {
    text-align: center;
    color: #00bfff;
    font-size: 2.2rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  
  .section-subtitle {
    text-align: center;
    color: #a0a0a0;
    font-size: 1.1rem;
    margin-bottom: 40px;
  }
  
  .articulos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px;
    justify-items: center;
  }
  
  .articulo-card {
    background: #1b283a;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0,191,255,0.15);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    width: 100%;
    max-width: 280px;
  }
  
  .articulo-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 0 25px rgba(0,191,255,0.4);
  }
  
  .articulo-img {
    height: 180px;
    background-size: cover;
    background-position: center;
  }
  
  .articulo-info {
    padding: 20px;
    text-align: center;
  }
  
  .articulo-nombre {
    font-size: 1.2rem;
    color: #00bfff;
    font-weight: 600;
    margin-bottom: 8px;
  }
  
  .articulo-descripcion {
    font-size: 0.95rem;
    color: #ccc;
    margin-bottom: 12px;
  }
  
  .articulo-precio {
    font-size: 1.1rem;
    font-weight: bold;
    color: #00eaff;
    margin-bottom: 15px;
  }
  
  .btn-comprar {
    background: linear-gradient(90deg, #00bfff, #0096ff);
    border: none;
    border-radius: 25px;
    color: white;
    font-weight: 600;
    padding: 10px 25px;
    transition: all 0.3s ease;
    cursor: pointer;
  }
  
  .btn-comprar:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(0,191,255,0.6);
  }
  
  /* Animación de aparición */
  .fade-in {
    opacity: 0;
    animation: fadeIn 0.8s ease forwards;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(15px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @media (max-width: 768px) {
    .section-title {
      font-size: 1.8rem;
    }
    .articulo-card {
      max-width: 100%;
    }
  }
  </style>
  