<template>
    <div class="productos-container my-5">
      <h1 class="titulo-principal text-center mb-4">🧩 Artículos recién agregados</h1>
  
      <!-- Estado de carga -->
      <div v-if="cargando" class="loading-container text-center my-5">
        <div class="spinner-border text-info" role="status">
          <span class="visually-hidden">Cargando...</span>
        </div>
        <p class="mt-3">Cargando artículos...</p>
      </div>
  
      <!-- Lista de personajes -->
      <div v-else class="row g-4">
        <div
          v-for="personaje in personajesPaginados"
          :key="personaje.id"
          class="col-sm-6 col-md-4 col-lg-3"
        >
          <div class="card producto-card h-100 text-center">
            <img
              :src="personaje.portrait_path"
              class="card-img-top"
              :alt="personaje.name"
            />
            <div class="card-body">
              <h5 class="card-title">{{ personaje.name }}</h5>
              <p class="card-text">{{ personaje.occupation }}</p>
              <p class="text-muted small">({{ personaje.gender }})</p>
              <button class="btn btn-primary agregar-btn">Agregar al carrito</button>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Controles de paginación -->
      <nav
        v-if="!cargando && totalPaginas > 1"
        class="d-flex justify-content-center align-items-center mt-4"
      >
        <ul class="pagination mb-0">
          <li
            class="page-item"
            :class="{ disabled: paginaActual === 1 }"
            @click="anteriorPagina"
          >
            <a class="page-link" href="#">Anterior</a>
          </li>
  
          <li
            v-for="num in totalPaginas"
            :key="num"
            class="page-item"
            :class="{ active: paginaActual === num }"
            @click="irAPagina(num)"
          >
            <a class="page-link" href="#">{{ num }}</a>
          </li>
  
          <li
            class="page-item"
            :class="{ disabled: paginaActual === totalPaginas }"
            @click="siguientePagina"
          >
            <a class="page-link" href="#">Siguiente</a>
          </li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: "AppPersonajes",
    data() {
      return {
        personajes: [],
        cargando: true,
        paginaActual: 1,
        limite: 8,
      };
    },
    computed: {
      totalPaginas() {
        return Math.ceil(this.personajes.length / this.limite);
      },
      personajesPaginados() {
        const inicio = (this.paginaActual - 1) * this.limite;
        const fin = inicio + this.limite;
        return this.personajes.slice(inicio, fin);
      },
    },
    methods: {
      siguientePagina() {
        if (this.paginaActual < this.totalPaginas) {
          this.paginaActual++;
          this.scrollArriba();
        }
      },
      anteriorPagina() {
        if (this.paginaActual > 1) {
          this.paginaActual--;
          this.scrollArriba();
        }
      },
      irAPagina(num) {
        this.paginaActual = num;
        this.scrollArriba();
      },
      scrollArriba() {
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
    },
    async mounted() {
      try {
        const respuesta = await fetch("https://thesimpsonsapi.com/api/characters");
        const datos = await respuesta.json();
        this.personajes = Array.isArray(datos.results) ? datos.results : [];
      } catch (error) {
        console.error("Error al cargar los personajes:", error);
      } finally {
        this.cargando = false;
      }
    },
  };
  </script>
  
  <style scoped>
  /* ======= Estructura general ======= */
  .productos-container {
    background-color: #0a0f1c;
    padding: 40px 20px;
    border-radius: 10px;
    color: #e0e0e0;
  }
  
  /* ======= Título ======= */
  .titulo-principal {
    color: #00bfff;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  
  /* ======= Estado de carga ======= */
  .loading-container {
    color: #9ab3c9;
    font-size: 1.1rem;
  }
  
  /* ======= Tarjetas de producto ======= */
  .producto-card {
    background: linear-gradient(145deg, #1a2a40, #0f1b2b);
    border: none;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 191, 255, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .producto-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 0 20px rgba(0, 191, 255, 0.3);
  }
  
  .card-img-top {
    object-fit: cover;
    height: 220px;
    border-bottom: 2px solid #00bfff;
  }
  
  .card-title {
    color: #00bfff;
    font-size: 1.1rem;
    margin-bottom: 5px;
  }
  
  .card-text {
    color: #cfd8e3;
    font-size: 0.95rem;
  }
  
  .text-muted {
    color: #9ab3c9 !important;
  }
  
  /* ======= Botón agregar ======= */
  .agregar-btn {
    background-color: #00bfff;
    border: none;
    border-radius: 20px;
    padding: 8px 15px;
    color: white;
    font-weight: 500;
    transition: background 0.3s, transform 0.2s;
  }
  
  .agregar-btn:hover {
    background-color: #008ccc;
    transform: scale(1.05);
  }
  
  /* ======= Paginación ======= */
  .pagination {
    background-color: transparent;
  }
  
  .page-link {
    background-color: #1a2a40;
    border: 1px solid #00bfff;
    color: #00bfff;
    border-radius: 8px;
    margin: 0 3px;
    transition: all 0.3s ease;
  }
  
  .page-link:hover {
    background-color: #00bfff;
    color: white;
    transform: translateY(-2px);
  }
  
  .page-item.active .page-link {
    background-color: #00bfff;
    color: white;
    border-color: #00bfff;
  }
  
  .page-item.disabled .page-link {
    opacity: 0.4;
    pointer-events: none;
  }
  
  /* ======= Responsive ======= */
  @media (max-width: 768px) {
    .card-img-top {
      height: 180px;
    }
    .agregar-btn {
      padding: 6px 12px;
      font-size: 0.9rem;
    }
  }
  </style>
  