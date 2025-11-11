<template>
  <div class="nav-container">
    <nav class="nav nav-pills flex-column flex-sm-row custom-nav">
      <div class="dropdown" v-for="(categoria, index) in categorias" :key="index">
        <a
          class="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          href="#"
          role="button"
          aria-expanded="false"
        >
          {{ categoria.nombre }}
        </a>
        <ul class="dropdown-menu">
          <li v-for="(item, i) in categoria.items" :key="i">
            <a class="dropdown-item" href="#">{{ item }}</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      categorias: [
        {
          nombre: "Placas electrónicas",
          items: ["Arduino", "Raspberry Pi", "ESP32"],
        },
        {
          nombre: "Módulos",
          items: ["Sensores", "Actuadores", "Drivers"],
        },
        {
          nombre: "Electrónica",
          items: [
            "Microcontroladores",
            "Circuitos integrados",
            "Componentes electrónicos",
          ],
        },
        {
          nombre: "Robótica",
          items: ["Motores, llantas", "Kits", "Servos"],
        },
        {
          nombre: "Energía y alimentación",
          items: [
            "Fuentes de alimentación",
            "Porta pilas",
            "Baterías",
            "Voltímetros",
          ],
        },
        {
          nombre: "Displays y LEDs",
          items: ["LEDs", "Displays"],
        },
      ],
    };
  },
};
</script>

<style scoped>
/* ======= Contenedor general ======= */
.nav-container {
  background: linear-gradient(135deg, #0a0f1c, #1a2a40);
  padding: 15px 0;
  border-top: 1px solid rgba(0, 191, 255, 0.3);
  border-bottom: 1px solid rgba(0, 191, 255, 0.3);
}

/* ======= Navbar ======= */
.custom-nav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}

.nav-link {
  color: #e0e0e0 !important;
  background-color: transparent !important;
  border-radius: 20px;
  padding: 10px 20px;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link:hover,
.nav-link:focus {
  color: #00bfff !important;
  background-color: rgba(0, 191, 255, 0.1) !important;
  transform: translateY(-2px);
}

/* ======= Dropdown ======= */
.dropdown-menu {
  background-color: #0f1b2b;
  border: 1px solid #00bfff;
  border-radius: 10px;
  padding: 5px 0;
  animation: fadeIn 0.25s ease-in-out;
  box-shadow: 0 6px 15px rgba(0, 191, 255, 0.2);
}

.dropdown-item {
  color: #cfd8e3;
  transition: all 0.3s ease;
  padding: 8px 15px;
}

.dropdown-item:hover {
  background-color: rgba(0, 191, 255, 0.15);
  color: #00bfff;
}

/* ======= Animaciones ======= */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ======= Responsive ======= */
@media (max-width: 768px) {
  .custom-nav {
    flex-direction: column;
    align-items: center;
  }
  .nav-link {
    width: 90%;
    text-align: center;
  }
}
</style>
