<template>
    <footer class="footer">
      <div class="footer-container">
        <!-- Información de la tienda -->
        <div class="footer-section">
          <h3 class="footer-title">TiendaElectro</h3>
          <p class="footer-text">Tu tienda de confianza para tecnología, gadgets y más.</p>
          <p class="footer-contact">📍 Av. Principal 123, Ciudad Electrónica</p>
          <p class="footer-contact">📞 +591 123 456 789</p>
          <p class="footer-contact">✉️ contacto@tiendaelectro.com</p>
        </div>
  
        <!-- Enlaces útiles -->
        <div class="footer-section">
          <h4 class="footer-subtitle">Enlaces útiles</h4>
          <ul class="footer-links">
            <li><a href="/sobre-nosotros">Sobre Nosotros</a></li>
            <li><a href="/envios">Política de Envíos</a></li>
            <li><a href="/devoluciones">Devoluciones</a></li>
            <li><a href="/faq">Preguntas Frecuentes</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>
  
        <!-- Redes sociales -->
        <div class="footer-section">
          <h4 class="footer-subtitle">Síguenos</h4>
          <div class="social-links">
            <a href="https://facebook.com/tiendaelectro" target="_blank" class="social-icon fab fa-facebook"></a>
            <a href="https://instagram.com/tiendaelectro" target="_blank" class="social-icon fab fa-instagram"></a>
            <a href="https://twitter.com/tiendaelectro" target="_blank" class="social-icon fab fa-twitter"></a>
          </div>
          <p class="footer-newsletter">💬 ¡Suscríbete a nuestro boletín para ofertas exclusivas!</p>
          <form class="newsletter-form" @submit.prevent>
            <input type="email" placeholder="Tu correo electrónico" required />
            <button type="submit">Suscribirse</button>
          </form>
        </div>
      </div>
  
      <hr class="footer-divider" />
      <p class="footer-bottom">© 2025 TiendaElectro. Todos los derechos reservados.</p>
    </footer>
  </template>
  
  <script>
  export default {
    name: "AppFooter",
  };
  </script>
  
  <style scoped>
  /* ======= Estructura general ======= */
  .footer {
    background: linear-gradient(135deg, #0a0f1c, #1a2a40);
    color: #dce3ec;
    padding: 50px 20px 20px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
  
  .footer-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1200px;
    margin: auto;
    gap: 30px;
  }
  
  /* ======= Secciones ======= */
  .footer-section {
    flex: 1;
    min-width: 250px;
  }
  
  .footer-title {
    color: #00bfff;
    font-weight: 700;
    margin-bottom: 10px;
  }
  
  .footer-subtitle {
    color: #00bfff;
    font-weight: 600;
    margin-bottom: 10px;
    border-bottom: 2px solid #00bfff;
    display: inline-block;
    padding-bottom: 4px;
  }
  
  /* ======= Texto y enlaces ======= */
  .footer-text,
  .footer-contact {
    font-size: 0.95rem;
    margin-bottom: 5px;
    color: #cfd8e3;
  }
  
  .footer-links {
    list-style: none;
    padding: 0;
  }
  
  .footer-links li {
    margin: 6px 0;
  }
  
  .footer-links a {
    color: #dce3ec;
    text-decoration: none;
    transition: color 0.3s, transform 0.2s;
  }
  
  .footer-links a:hover {
    color: #00bfff;
    transform: translateX(4px);
  }
  
  /* ======= Redes sociales ======= */
  .social-links {
    display: flex;
    gap: 15px;
    margin-bottom: 10px;
  }
  
  .social-icon {
    font-size: 1.5rem;
    color: #dce3ec;
    transition: transform 0.3s, color 0.3s;
  }
  
  .social-icon:hover {
    color: #00bfff;
    transform: scale(1.2);
  }
  
  /* ======= Newsletter ======= */
  .footer-newsletter {
    margin: 10px 0;
    font-size: 0.9rem;
    color: #9ab3c9;
  }
  
  .newsletter-form {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  
  .newsletter-form input {
    flex: 1;
    padding: 8px 12px;
    border-radius: 20px;
    border: 1px solid #00bfff;
    background-color: #132338;
    color: white;
    outline: none;
    transition: box-shadow 0.3s;
  }
  
  .newsletter-form input:focus {
    box-shadow: 0 0 8px #00bfff;
  }
  
  .newsletter-form button {
    padding: 8px 15px;
    border: none;
    border-radius: 20px;
    background-color: #00bfff;
    color: white;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .newsletter-form button:hover {
    background-color: #008ccc;
  }
  
  /* ======= Línea y pie inferior ======= */
  .footer-divider {
    border: none;
    border-top: 1px solid rgba(0, 191, 255, 0.3);
    margin: 30px 0 15px;
  }
  
  .footer-bottom {
    text-align: center;
    font-size: 0.85rem;
    color: #9ab3c9;
  }
  
  /* ======= Responsive ======= */
  @media (max-width: 768px) {
    .footer-container {
      flex-direction: column;
      align-items: flex-start;
    }
  
    .newsletter-form {
      flex-direction: column;
      width: 100%;
    }
  
    .newsletter-form button {
      width: 100%;
    }
  
    .social-links {
      justify-content: flex-start;
    }
  }
  </style>
  