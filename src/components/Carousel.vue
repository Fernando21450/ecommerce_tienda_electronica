<template>
  <section class="carrousel">
    <div class="carrousel-container">
      <div class="carrousel-slide" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div 
          v-for="(slide, index) in slides" 
          :key="index" 
          class="slide"
          :style="{ backgroundImage: `url(${slide.imagen})` }"
        >
          <div class="slide-overlay"></div>
          <div class="slide-content animate-fade">
            <h2 class="slide-title neon-text">{{ slide.titulo }}</h2>
            <p class="slide-description">{{ slide.descripcion }}</p>
            <button class="slide-button">{{ slide.buttonText }}</button>
          </div>
        </div>
      </div>

      <!-- Botones -->
      <button class="carrousel-btn carrousel-btn-prev" @click="prevSlide">
        &#8249;
      </button>
      <button class="carrousel-btn carrousel-btn-next" @click="nextSlide">
        &#8250;
      </button>

      <!-- Indicadores -->
      <div class="carrousel-indicadors">
        <button 
          v-for="(slide, index) in slides" 
          :key="index"
          class="indicador" 
          :class="{ active: currentIndex === index }"
          @click="goToSlide(index)"
        ></button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppCarousel',
  data() {
    return {
      currentIndex: 0,
      slides: [
        {
          imagen: '/assets/banner1.jpg',
          titulo: 'Bienvenido a TiendaElectro ⚡',
          descripcion: 'La mejor tecnología al alcance de tus manos.',
          buttonText: 'Explorar ahora'
        },
        {
          imagen: '/assets/banner2.jpg',
          titulo: 'Ofertas Especiales 🔥',
          descripcion: 'Descuentos increíbles en tus productos favoritos.',
          buttonText: 'Ver promociones'
        },
        {
          imagen: '/assets/banner3.jpg',
          titulo: 'Nuevos Lanzamientos 🚀',
          descripcion: 'Descubre los productos más innovadores del mercado.',
          buttonText: 'Ver novedades'
        }
      ]
    }
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length
    },
    goToSlide(index) {
      this.currentIndex = index
    }
  },
  mounted() {
    this.autoPlay = setInterval(this.nextSlide, 6000)
  },
  beforeUnmount() {
    clearInterval(this.autoPlay)
  }
}
</script>

<style scoped>
/* ======= Estructura general ======= */
.carrousel {
  width: 100%;
  overflow: hidden;
  position: relative;
  background-color: #000;
}

.carrousel-container {
  position: relative;
  width: 100%;
  height: 500px;
}

.carrousel-slide {
  display: flex;
  transition: transform 1s ease-in-out;
  height: 100%;
}

.slide {
  min-width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ======= Capa oscura para contraste ======= */
.slide-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.8));
}

/* ======= Contenido del slide ======= */
.slide-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;
  padding: 0 2rem;
  animation: fadeIn 1s ease;
}

.slide-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
  text-transform: uppercase;
}

.neon-text {
  color: #00bfff;
  text-shadow: 0 0 10px #00bfff, 0 0 20px #00bfff, 0 0 40px #0096ff;
}

.slide-description {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  color: #e0e0e0;
}

/* ======= Botón ======= */
.slide-button {
  background: linear-gradient(90deg, #00bfff, #0096ff);
  color: white;
  border: none;
  padding: 12px 35px;
  font-size: 1.1rem;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(0,191,255,0.4);
}

.slide-button:hover {
  transform: scale(1.05);
  box-shadow: 0 0 25px rgba(0,191,255,0.8);
}

/* ======= Flechas ======= */
.carrousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 191, 255, 0.3);
  border: none;
  color: white;
  font-size: 2.5rem;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.3s ease;
  z-index: 3;
  backdrop-filter: blur(5px);
}

.carrousel-btn:hover {
  background: rgba(0, 191, 255, 0.6);
  transform: scale(1.1) translateY(-50%);
}

.carrousel-btn-prev {
  left: 20px;
}

.carrousel-btn-next {
  right: 20px;
}

/* ======= Indicadores ======= */
.carrousel-indicadors {
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 3;
}

.indicador {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid #00bfff;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicador:hover {
  background: rgba(0, 191, 255, 0.6);
}

.indicador.active {
  background: #00bfff;
  box-shadow: 0 0 10px #00bfff;
}

/* ======= Animaciones ======= */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ======= Responsive ======= */
@media (max-width: 768px) {
  .carrousel-container {
    height: 350px;
  }
  .slide-title {
    font-size: 2rem;
  }
  .slide-description {
    font-size: 1rem;
  }
  .slide-button {
    padding: 8px 20px;
    font-size: 1rem;
  }
}
</style>
