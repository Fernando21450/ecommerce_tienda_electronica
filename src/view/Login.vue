<template>
    <section class="auth-section fade-in">
      <div class="auth-container">
        <div class="auth-card">
          <h2 class="auth-title">Iniciar Sesión</h2>
          <p class="auth-subtitle">Bienvenido de nuevo 👋</p>
  
          <form @submit.prevent="iniciarSesion" class="auth-form">
            <div class="form-group">
              <label for="email">Correo electrónico</label>
              <input type="email" id="email" v-model="email" required placeholder="tuemail@ejemplo.com" />
            </div>
  
            <div class="form-group">
              <label for="password">Contraseña</label>
              <input type="password" id="password" v-model="password" required placeholder="••••••••" />
            </div>
  
            <button class="btn-auth" type="submit">Ingresar</button>
  
            <p class="auth-switch">
              ¿No tienes cuenta?
              <router-link to="/registro">Regístrate aquí</router-link>
            </p>
          </form>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "LoginView",
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      iniciarSesion() {
        console.log("Intentando iniciar sesión con:", this.email, this.password);
        // Aquí podrías validar datos o llamar a tu API
        alert("Inicio de sesión exitoso (simulado)");
        this.$router.push("/"); // redirige a la página principal
      },
    },
  };
  </script>
  
  <style scoped>
  .auth-section {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(180deg, #0a0f1c, #111b2e);
    color: #e0e0e0;
  }
  
  .auth-container {
    width: 100%;
    max-width: 400px;
    padding: 20px;
  }
  
  .auth-card {
    background: #1b283a;
    border-radius: 12px;
    box-shadow: 0 0 20px rgba(0, 191, 255, 0.25);
    padding: 40px 30px;
    text-align: center;
  }
  
  .auth-title {
    color: #00bfff;
    font-size: 2rem;
    font-weight: 700;
  }
  
  .auth-subtitle {
    color: #a0a0a0;
    margin-bottom: 25px;
  }
  
  .form-group {
    text-align: left;
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    font-size: 0.9rem;
    color: #ccc;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 10px 14px;
    border-radius: 8px;
    border: 1px solid #2a3a55;
    background: #0f1724;
    color: white;
    font-size: 1rem;
    outline: none;
    transition: border 0.3s;
  }
  
  input:focus {
    border-color: #00bfff;
    box-shadow: 0 0 8px rgba(0, 191, 255, 0.3);
  }
  
  .btn-auth {
    width: 100%;
    background: linear-gradient(90deg, #00bfff, #0096ff);
    color: white;
    border: none;
    padding: 12px 0;
    border-radius: 25px;
    font-weight: bold;
    margin-top: 10px;
    transition: transform 0.2s, box-shadow 0.3s;
    cursor: pointer;
  }
  
  .btn-auth:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 15px rgba(0, 191, 255, 0.6);
  }
  
  .auth-switch {
    margin-top: 20px;
    color: #bbb;
  }
  
  .auth-switch a {
    color: #00bfff;
    text-decoration: none;
    font-weight: 600;
  }
  
  .auth-switch a:hover {
    text-decoration: underline;
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
  </style>
  