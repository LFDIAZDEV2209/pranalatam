// pages/buy/buy.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-buy',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <main class="buy-page">
      <!-- Hero Section -->
      <section class="buy-hero meditation-bg">
        <div class="container">
          <div class="hero-content">
            <div class="hero-text">
              <h1 class="hero-title">Compra y Adquiere</h1>
              <h2 class="hero-subtitle">Productos y Servicios de Sanación Pránica</h2>
              <p class="hero-description">
                Accede a nuestra amplia gama de productos, cursos online y servicios de sanación pránica. 
                Todo diseñado para apoyar tu desarrollo espiritual y bienestar energético.
              </p>
              <div class="hero-actions">
                <a routerLink="/tienda" class="btn btn-primary btn-lg">
                  <i class="bi bi-shop me-2"></i>Explorar Tienda
                </a>
                <a routerLink="/cursos" class="btn btn-outline btn-lg">
                  <i class="bi bi-mortarboard me-2"></i>Ver Cursos
                </a>
              </div>
            </div>
            <div class="hero-image">
              <div class="buy-illustration">
                <i class="bi bi-cart-check text-primary"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Product Categories -->
      <section class="product-categories-section" id="categorias">
        <div class="container">
          <h2 class="section-title">¿Qué te gustaría comprar?</h2>
          <div class="categories-grid">
            <div class="category-card" routerLink="/tienda/libros">
              <div class="category-icon">
                <i class="bi bi-book text-primary"></i>
              </div>
              <h3>Libros y Materiales</h3>
              <p>Obras completas de Master Choa Kok Sui, manuales y guías prácticas</p>
              <div class="category-price">Desde $15.00</div>
              <a routerLink="/tienda/libros" class="btn btn-primary btn-sm">
                <i class="bi bi-arrow-right me-2"></i>Ver Productos
              </a>
            </div>

            <div class="category-card" routerLink="/tienda/meditaciones">
              <div class="category-icon">
                <i class="bi bi-headphones text-success"></i>
              </div>
              <h3>Audios y Meditaciones</h3>
              <p>Meditaciones guiadas, mantras y audios descargables</p>
              <div class="category-price">Desde $5.00</div>
              <a routerLink="/tienda/meditaciones" class="btn btn-success btn-sm">
                <i class="bi bi-arrow-right me-2"></i>Ver Productos
              </a>
            </div>

            <div class="category-card" routerLink="/cursos">
              <div class="category-icon">
                <i class="bi bi-laptop text-warning"></i>
              </div>
              <h3>Cursos Online</h3>
              <p>Formación completa en sanación pránica desde tu hogar</p>
              <div class="category-price">Desde $99.00</div>
              <a routerLink="/cursos" class="btn btn-warning btn-sm">
                <i class="bi bi-arrow-right me-2"></i>Ver Cursos
              </a>
            </div>

            <div class="category-card" routerLink="/eventos">
              <div class="category-icon">
                <i class="bi bi-calendar-event text-info"></i>
              </div>
              <h3>Eventos y Retiros</h3>
              <p>Experiencias presenciales transformadoras y certificaciones</p>
              <div class="category-price">Desde $200.00</div>
              <a routerLink="/eventos" class="btn btn-info btn-sm">
                <i class="bi bi-arrow-right me-2"></i>Ver Eventos
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Products -->
      <section class="featured-products-section">
        <div class="container">
          <h2 class="section-title">Productos Destacados</h2>
          <div class="products-grid">
            <div class="product-card featured">
              <div class="product-badge">MÁS VENDIDO</div>
              <div class="product-image">
                <i class="bi bi-book text-light"></i>
              </div>
              <div class="product-content">
                <h3>ACCIÓN INSPIRADA</h3>
                <p class="product-author">Master Choa Kok Sui</p>
                <p class="product-description">Descubre cómo convertir tus sueños en realidad a través de la acción inspirada</p>
                <div class="product-category">Bolsilibros</div>
                <div class="product-price">$15.00</div>
                <button class="btn btn-primary btn-sm w-100">
                  <i class="bi bi-cart-plus me-2"></i>Agregar al Carrito
                </button>
              </div>
            </div>

            <div class="product-card">
              <div class="product-badge">NUEVO</div>
              <div class="product-image">
                <i class="bi bi-headphones text-light"></i>
              </div>
              <div class="product-content">
                <h3>Meditación Corazones Gemelos</h3>
                <p class="product-author">Master Choa Kok Sui</p>
                <p class="product-description">Audio completo de la meditación transformadora</p>
                <div class="product-category">Audios</div>
                <div class="product-price">$25.00</div>
                <button class="btn btn-primary btn-sm w-100">
                  <i class="bi bi-cart-plus me-2"></i>Agregar al Carrito
                </button>
              </div>
            </div>

            <div class="product-card">
              <div class="product-badge">POPULAR</div>
              <div class="product-image">
                <i class="bi bi-laptop text-light"></i>
              </div>
              <div class="product-content">
                <h3>Curso Básico de Sanación Pránica</h3>
                <p class="product-author">Instructores Certificados</p>
                <p class="product-description">Aprende los fundamentos de la sanación energética</p>
                <div class="product-category">Cursos Online</div>
                <div class="product-price">$199.00</div>
                <button class="btn btn-primary btn-sm w-100">
                  <i class="bi bi-cart-plus me-2"></i>Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Shopping Cart Preview -->
      <section class="cart-preview-section">
        <div class="container">
          <div class="cart-preview-card">
            <div class="cart-header">
              <h3><i class="bi bi-cart3 me-2"></i>Tu Carrito de Compras</h3>
              <span class="cart-count">3 productos</span>
            </div>
            <div class="cart-items">
              <div class="cart-item">
                <div class="item-info">
                  <h4>ACCIÓN INSPIRADA</h4>
                  <span class="item-category">Bolsilibros</span>
                </div>
                <div class="item-price">$15.00</div>
                <button class="btn btn-outline-danger btn-sm">
                  <i class="bi bi-trash"></i>
                </button>
              </div>
              <div class="cart-item">
                <div class="item-info">
                  <h4>Meditación Corazones Gemelos</h4>
                  <span class="item-category">Audios</span>
                </div>
                <div class="item-price">$25.00</div>
                <button class="btn btn-outline-danger btn-sm">
                  <i class="bi bi-trash"></i>
                </button>
              </div>
              <div class="cart-item">
                <div class="item-info">
                  <h4>Curso Básico Sanación Pránica</h4>
                  <span class="item-category">Cursos Online</span>
                </div>
                <div class="item-price">$199.00</div>
                <button class="btn btn-outline-danger btn-sm">
                  <i class="bi bi-trash"></i>
                </button>
              </div>
            </div>
            <div class="cart-total">
              <div class="total-row">
                <span>Subtotal:</span>
                <span>$239.00</span>
              </div>
              <div class="total-row">
                <span>Envío:</span>
                <span>$5.00</span>
              </div>
              <div class="total-row total-final">
                <span>Total:</span>
                <span>$244.00</span>
              </div>
            </div>
            <div class="cart-actions">
              <button class="btn btn-primary btn-lg">
                <i class="bi bi-credit-card me-2"></i>Proceder al Pago
              </button>
              <button class="btn btn-outline btn-lg">
                <i class="bi bi-arrow-left me-2"></i>Seguir Comprando
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Payment Methods -->
      <section class="payment-methods-section" id="metodos-pago">
        <div class="container">
          <h2 class="section-title">Métodos de Pago Seguros</h2>
          <div class="payment-grid">
            <div class="payment-card">
              <div class="payment-icon">
                <i class="bi bi-credit-card text-primary"></i>
              </div>
              <h3>Tarjetas de Crédito/Débito</h3>
              <p>Visa, Mastercard, American Express</p>
            </div>

            <div class="payment-card">
              <div class="payment-icon">
                <i class="bi bi-bank text-success"></i>
              </div>
              <h3>Transferencias Bancarias</h3>
              <p>Pago directo a nuestra cuenta bancaria</p>
            </div>

            <div class="payment-card">
              <div class="payment-icon">
                <i class="bi bi-phone text-warning"></i>
              </div>
              <h3>Pago Móvil</h3>
              <p>Nequi, Daviplata, PSE</p>
            </div>

            <div class="payment-card">
              <div class="payment-icon">
                <i class="bi bi-shield-check text-info"></i>
              </div>
              <h3>Pasarela PayU</h3>
              <p>Máxima seguridad en todas las transacciones</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Shipping Information -->
      <section class="shipping-section" id="envio">
        <div class="container">
          <div class="shipping-content">
            <div class="shipping-info">
              <h2>Información de Envío</h2>
              <div class="shipping-details">
                <div class="detail-item">
                  <i class="bi bi-truck text-primary me-3"></i>
                  <div>
                    <h4>Envío Semanal</h4>
                    <p>Pedidos recibidos hasta el Miércoles, serán entregados a los transportadores el Jueves.</p>
                  </div>
                </div>
                <div class="detail-item">
                  <i class="bi bi-geo-alt text-success me-3"></i>
                  <div>
                    <h4>Cobertura Nacional</h4>
                    <p>Enviamos a todas las ciudades principales de Colombia con seguimiento en tiempo real.</p>
                  </div>
                </div>
                <div class="detail-item">
                  <i class="bi bi-clock text-warning me-3"></i>
                  <div>
                    <h4>Tiempo de Entrega</h4>
                    <p>2-5 días hábiles para la mayoría de ciudades, 1-2 semanas para zonas remotas.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="shipping-calculator">
              <h3>Calculadora de Envío</h3>
              <div class="calculator-form">
                <select class="form-select mb-3">
                  <option>Selecciona tu ciudad</option>
                  <option>Bogotá</option>
                  <option>Medellín</option>
                  <option>Cali</option>
                  <option>Barranquilla</option>
                </select>
                <button class="btn btn-primary w-100">
                  <i class="bi bi-calculator me-2"></i>Calcular Envío
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Customer Support -->
      <section class="support-section">
        <div class="container">
          <div class="support-content">
            <h2>¿Necesitas ayuda con tu compra?</h2>
            <p>Nuestro equipo está aquí para ayudarte en cada paso del proceso</p>
            <div class="support-actions">
              <a routerLink="/contacto" class="btn btn-primary btn-lg">
                <i class="bi bi-chat-dots me-2"></i>Contactar Soporte
              </a>
              <a routerLink="/soporte" class="btn btn-outline btn-lg">
                <i class="bi bi-question-circle me-2"></i>Preguntas Frecuentes
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  `,
  styles: [`
    .buy-page {
      padding-top: 80px;
    }

    /* Hero Section */
    .buy-hero {
      min-height: 80vh;
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
    }

    .hero-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    .hero-title {
      font-family: 'Playfair Display', serif;
      font-size: 3.5rem;
      font-weight: 700;
      background: linear-gradient(135deg, var(--primary-pink), var(--primary-orange));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 1rem;
      line-height: 1.2;
    }

    .hero-subtitle {
      font-size: 1.8rem;
      color: var(--text-dark);
      margin-bottom: 1.5rem;
      font-weight: 600;
    }

    .hero-description {
      font-size: 1.1rem;
      color: var(--text-medium);
      line-height: 1.6;
      margin-bottom: 2rem;
    }

    .hero-actions {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .hero-image {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .buy-illustration {
      width: 300px;
      height: 300px;
      background: var(--gradient-primary);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 6rem;
      box-shadow: 0 8px 30px rgba(233, 30, 99, 0.3);
    }

    /* Product Categories Section */
    .product-categories-section {
      padding: 6rem 0;
      background: var(--background-white);
    }

    .section-title {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 4rem;
      color: var(--text-dark);
    }

    .categories-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }

    .category-card {
      background: var(--background-white);
      border-radius: 16px;
      padding: 2rem;
      text-align: center;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      transition: all 0.3s ease;
      border: 2px solid transparent;
    }

    .category-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
      border-color: var(--primary-pink);
    }

    .category-icon {
      width: 80px;
      height: 80px;
      margin: 0 auto 1.5rem;
      background: var(--gradient-spiritual);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.5rem;
    }

    .category-card h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: var(--text-dark);
    }

    .category-card p {
      color: var(--text-medium);
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .category-price {
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--primary-orange);
      margin-bottom: 1.5rem;
    }

    /* Featured Products Section */
    .featured-products-section {
      padding: 6rem 0;
      background: var(--background-light);
    }

    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .product-card {
      background: var(--background-white);
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      transition: all 0.3s ease;
      position: relative;
    }

    .product-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    }

    .product-card.featured {
      border: 3px solid var(--primary-gold);
    }

    .product-badge {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: var(--primary-pink);
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 600;
      z-index: 2;
    }

    .product-image {
      height: 200px;
      background: var(--gradient-spiritual);
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 4rem;
    }

    .product-content {
      padding: 1.5rem;
    }

    .product-content h3 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
      color: var(--text-dark);
      line-height: 1.4;
    }

    .product-author {
      color: var(--primary-pink);
      font-weight: 600;
      margin-bottom: 0.75rem;
      font-size: 0.9rem;
    }

    .product-description {
      color: var(--text-medium);
      margin-bottom: 1rem;
      line-height: 1.6;
      font-size: 0.9rem;
    }

    .product-category {
      background: var(--background-light);
      color: var(--text-medium);
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.8rem;
      display: inline-block;
      margin-bottom: 1rem;
    }

    .product-price {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--primary-orange);
      margin-bottom: 1rem;
    }

    /* Cart Preview Section */
    .cart-preview-section {
      padding: 6rem 0;
      background: var(--background-white);
    }

    .cart-preview-card {
      max-width: 600px;
      margin: 0 auto;
      background: var(--background-white);
      border-radius: 16px;
      box-shadow: 0 8px 40px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }

    .cart-header {
      background: var(--gradient-primary);
      color: white;
      padding: 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .cart-header h3 {
      margin: 0;
      font-size: 1.3rem;
    }

    .cart-count {
      background: rgba(255, 255, 255, 0.2);
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.9rem;
    }

    .cart-items {
      padding: 1.5rem;
    }

    .cart-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem 0;
      border-bottom: 1px solid var(--border-light);
    }

    .cart-item:last-child {
      border-bottom: none;
    }

    .item-info {
      flex: 1;
    }

    .item-info h4 {
      margin: 0;
      font-size: 1rem;
      color: var(--text-dark);
    }

    .item-category {
      font-size: 0.8rem;
      color: var(--text-light);
    }

    .item-price {
      font-weight: 600;
      color: var(--primary-orange);
      min-width: 60px;
      text-align: right;
    }

    .cart-total {
      background: var(--background-light);
      padding: 1.5rem;
    }

    .total-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
    }

    .total-final {
      font-weight: 700;
      font-size: 1.2rem;
      color: var(--primary-pink);
      border-top: 1px solid var(--border-light);
      padding-top: 0.5rem;
      margin-top: 0.5rem;
    }

    .cart-actions {
      padding: 1.5rem;
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    /* Payment Methods Section */
    .payment-methods-section {
      padding: 6rem 0;
      background: var(--background-light);
    }

    .payment-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .payment-card {
      background: var(--background-white);
      border-radius: 16px;
      padding: 2rem;
      text-align: center;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      transition: all 0.3s ease;
    }

    .payment-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    }

    .payment-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .payment-card h3 {
      font-size: 1.3rem;
      margin-bottom: 1rem;
      color: var(--text-dark);
    }

    .payment-card p {
      color: var(--text-medium);
      line-height: 1.6;
    }

    /* Shipping Section */
    .shipping-section {
      padding: 6rem 0;
      background: var(--background-white);
    }

    .shipping-content {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 4rem;
      align-items: start;
    }

    .shipping-info h2 {
      font-size: 2.5rem;
      margin-bottom: 2rem;
      color: var(--text-dark);
    }

    .shipping-details {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .detail-item {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
    }

    .detail-item i {
      font-size: 2rem;
      margin-top: 0.25rem;
    }

    .detail-item h4 {
      margin: 0 0 0.5rem 0;
      color: var(--text-dark);
    }

    .detail-item p {
      color: var(--text-medium);
      line-height: 1.6;
      margin: 0;
    }

    .shipping-calculator {
      background: var(--background-light);
      padding: 2rem;
      border-radius: 16px;
    }

    .shipping-calculator h3 {
      margin-bottom: 1.5rem;
      color: var(--text-dark);
    }

    .form-select {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid var(--border-light);
      border-radius: 8px;
      font-size: 1rem;
    }

    /* Support Section */
    .support-section {
      padding: 6rem 0;
      background: var(--gradient-spiritual);
      text-align: center;
    }

    .support-content h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: var(--text-dark);
    }

    .support-content p {
      font-size: 1.2rem;
      color: var(--text-medium);
      margin-bottom: 2rem;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .support-actions {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    /* Responsive */
    @media (max-width: 1024px) {
      .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 2rem;
      }

      .shipping-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }

    @media (max-width: 768px) {
      .container {
        padding: 0 1rem;
      }

      .hero-title {
        font-size: 2.5rem;
      }

      .hero-subtitle {
        font-size: 1.5rem;
      }

      .section-title {
        font-size: 2rem;
      }

      .cart-actions {
        flex-direction: column;
      }

      .support-actions {
        flex-direction: column;
        align-items: center;
      }
    }

    @media (max-width: 480px) {
      .hero-title {
        font-size: 2rem;
      }

      .hero-subtitle {
        font-size: 1.25rem;
      }

      .section-title {
        font-size: 1.75rem;
      }

      .products-grid {
        grid-template-columns: 1fr;
      }

      .categories-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class BuyComponent {}
