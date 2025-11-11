<template>
  <div class="header-container">
    <div class="header-content">
      <h1 class="site-title">🛒 Tienda Electrónica</h1>

      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">TechStore</a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex search-form">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Buscar productos..."
                aria-label="Search"
              />
              <button class="btn btn-primary" type="submit">Buscar</button>
            </form>

            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#">Lista de deseos</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" @click="showModal = true">Carrito</a>
                <ModalCarro :visible="showModal" @close="showModal = false" />
              </li>

              <li class="nav-item">
                <a class="nav-link login-btn" href="#">Login / Registro</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import ModalCarro from "./ModalCarro.vue";

export default {
  name: "AppCabecera",
  components: {
    ModalCarro,
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style scoped>
/* ======= Estructura general ======= */
.header-container {
  background: linear-gradient(135deg, #0a0f1c, #1a2a40);
  padding: 15px 0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
}

.site-title {
  text-align: center;
  color: #00bfff;
  font-weight: 700;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

/* ======= Navbar ======= */
.navbar {
  background-color: transparent !important;
}

.navbar-brand {
  color: #00bfff !important;
  font-weight: bold;
  font-size: 1.4rem;
  letter-spacing: 1px;
  transition: color 0.3s;
}

.navbar-brand:hover {
  color: #66cfff !important;
}

/* ======= Links ======= */
.nav-link {
  color: #e0e0e0 !important;
  margin: 0 10px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: #00bfff !important;
  transform: scale(1.05);
}

.login-btn {
  border: 1px solid #00bfff;
  border-radius: 20px;
  padding: 6px 15px;
}

.login-btn:hover {
  background-color: #00bfff;
  color: white !important;
}

/* ======= Buscador ======= */
.search-form input {
  border-radius: 20px;
  border: 1px solid #00bfff;
  background-color: #0f1b2b;
  color: white;
}

.search-form input::placeholder {
  color: #9ab3c9;
}

.search-form input:focus {
  box-shadow: 0 0 8px #00bfff;
  border-color: #00bfff;
}

.search-form .btn {
  border-radius: 20px;
  background-color: #00bfff;
  color: white;
  border: none;
  transition: background 0.3s;
}

.search-form .btn:hover {
  background-color: #008ccc;
}

/* ======= Responsive ======= */
@media (max-width: 768px) {
  .site-title {
    font-size: 1.5rem;
  }
  .nav-link {
    margin: 5px 0;
  }
}
</style>
