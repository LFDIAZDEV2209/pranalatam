// features/shop/components/shop-list/shop-list.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shop-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <main class="shop-page">
      <!-- Hero Section -->
      <section class="shop-hero meditation-bg">
        <div class="container">
          <div class="hero-content">
            <div class="hero-text">
              <h1 class="hero-title">Sanación Pránica</h1>
              <h2 class="hero-subtitle">Equilibrio Energético para tu Bienestar</h2>
              <p class="hero-description">
                La Sanación Pránica es un sistema de sanación energética moderna, fundada por el Maestro chino-filipino 
                <strong class="master-name">Choa Kok Sui</strong>, que utiliza el prana o la energía vital, para equilibrar, 
                armonizar y restaurar la salud física, emocional y mental.
              </p>
              <p class="hero-info">
                Todos los libros de Sanación Pránica en español, escritos por Master Choa, así como los audios de las 
                meditaciones y mantras, los Libros y Bolsilibros, se encuentran disponibles en este sitio web, 
                agrupados en categorías.
              </p>
            </div>
            <div class="hero-image">
              <div class="master-portrait">
                <div class="portrait-circle">
                  <i class="bi bi-person-circle"></i>
                </div>
                <div class="master-info">
                  <h3>Master Choa Kok Sui</h3>
                  <p>Fundador de la Sanación Pránica Moderna</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Categories Section -->
      <section class="categories-section">
        <div class="container">
          <h2 class="section-title">Categorías de Productos</h2>
          <div class="categories-grid">
            <div class="category-card" routerLink="/tienda/libros">
              <div class="category-icon">
                <i class="bi bi-book text-primary"></i>
              </div>
              <h3>Libros</h3>
              <p>Obras completas de Master Choa Kok Sui en español</p>
            </div>
            <div class="category-card" routerLink="/tienda/bolsilibros">
              <div class="category-icon">
                <i class="bi bi-journal-text text-success"></i>
              </div>
              <h3>Bolsilibros</h3>
              <p>Guías prácticas y manuales de bolsillo</p>
            </div>
            <div class="category-card" routerLink="/tienda/mantras">
              <div class="category-icon">
                <i class="bi bi-music-note-beamed text-warning"></i>
              </div>
              <h3>Mantras</h3>
              <p>Sonidos sagrados para la sanación energética</p>
            </div>
            <div class="category-card" routerLink="/tienda/meditaciones">
              <div class="category-icon">
                <i class="bi bi-heart text-danger"></i>
              </div>
              <h3>Meditaciones</h3>
              <p>Prácticas guiadas por Master Choa Kok Sui</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Books Section -->
      <section class="featured-books-section">
        <div class="container">
          <h2 class="section-title">Libros Destacados</h2>
          <div class="books-grid">
            <div class="book-card">
              <div class="book-image">
                <div class="book-badge">BESTSELLER</div>
                <div class="book-category">Libros</div>
              </div>
              <div class="book-content">
                <h3>ALCANZAR LA UNICIDAD CON EL ALMA SUPERIOR</h3>
                <p class="book-author">Master Choa Kok Sui</p>
                <p class="book-description">Descubre la conexión profunda con tu esencia espiritual y alcanza la unidad con tu alma superior.</p>
                <div class="book-price">$25.00</div>
                <button class="btn btn-primary btn-sm">
                  <i class="bi bi-cart-plus me-2"></i>Agregar al Carrito
                </button>
              </div>
            </div>

            <div class="book-card">
              <div class="book-image">
                <div class="book-badge">POPULAR</div>
                <div class="book-category">Libros</div>
              </div>
              <div class="book-content">
                <h3>AUTODEFENSA PSIQUICA PRACTICA PARA EL HOGAR Y EL TRABAJO</h3>
                <p class="book-author">Master Choa Kok Sui</p>
                <p class="book-description">Técnicas prácticas para proteger tu energía y crear espacios seguros energéticamente.</p>
                <div class="book-price">$28.00</div>
                <button class="btn btn-primary btn-sm">
                  <i class="bi bi-cart-plus me-2"></i>Agregar al Carrito
                </button>
              </div>
            </div>

            <div class="book-card">
              <div class="book-image">
                <div class="book-badge">NUEVO</div>
                <div class="book-category">Libros</div>
              </div>
              <div class="book-content">
                <h3>EL ORIGEN DE LA SANACIÓN PRÁNICA MODERNA Y EL ARHATIC YOGA</h3>
                <p class="book-author">Master Choa Kok Sui</p>
                <p class="book-description">Historia completa y fundamentos de la sanación pránica y el yoga arhatic.</p>
                <div class="book-price">$33.00</div>
                <button class="btn btn-primary btn-sm">
                  <i class="bi bi-cart-plus me-2"></i>Agregar al Carrito
                </button>
              </div>
            </div>

            <div class="book-card">
              <div class="book-image">
                <div class="book-badge">CLÁSICO</div>
                <div class="book-category">Libros</div>
              </div>
              <div class="book-content">
                <h3>LA ESENCIA ESPIRITUAL DEL HOMBRE</h3>
                <p class="book-author">Master Choa Kok Sui</p>
                <p class="book-description">Exploración profunda de la naturaleza espiritual humana y su potencial infinito.</p>
                <div class="book-price">$35.00</div>
                <button class="btn btn-primary btn-sm">
                  <i class="bi bi-cart-plus me-2"></i>Agregar al Carrito
                </button>
              </div>
            </div>

            <div class="book-card">
              <div class="book-image">
                <div class="book-badge">ESPECIAL</div>
                <div class="book-category">Libros</div>
              </div>
              <div class="book-content">
                <h3>La revelación de las Enseñanzas Interiores del HINDUISMO</h3>
                <p class="book-author">Master Choa Kok Sui</p>
                <p class="book-description">Descubre los secretos más profundos de las enseñanzas hindúes milenarias.</p>
                <div class="book-price">$20.00</div>
                <button class="btn btn-primary btn-sm">
                  <i class="bi bi-cart-plus me-2"></i>Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Special Meditations Section -->
      <section class="meditations-section">
        <div class="container">
          <h2 class="section-title">Meditaciones Especiales con Master Choa Kok Sui</h2>
          <div class="meditations-grid">
            <div class="meditation-card featured">
              <div class="meditation-header">
                <h3>Meditación en Corazones Gemelos</h3>
                <span class="meditation-type">Meditación Especial</span>
              </div>
              <p class="meditation-description">
                Con Meditación de Autosanación Pránica. Una práctica transformadora que abre tu corazón 
                y conecta con la energía universal del amor.
              </p>
              <div class="meditation-author">
                <strong>Master Choa Kok Sui</strong>
              </div>
              <div class="meditation-actions">
                <button class="btn btn-warning btn-lg">
                  <i class="bi bi-download me-2"></i>Descargar Audio Libro
                </button>
                <button class="btn btn-outline btn-lg">
                  <i class="bi bi-play-circle me-2"></i>Escuchar Muestra
                </button>
              </div>
            </div>

            <div class="meditation-card">
              <div class="meditation-header">
                <h3>Meditaciones Arhatic</h3>
                <span class="meditation-type">Serie Completa</span>
              </div>
              <p class="meditation-description">
                Colección completa de meditaciones arhatic para el desarrollo espiritual avanzado 
                y la elevación de la conciencia.
              </p>
              <div class="meditation-author">
                <strong>Master Choa Kok Sui</strong>
              </div>
              <div class="meditation-actions">
                <button class="btn btn-primary btn-lg">
                  <i class="bi bi-collection me-2"></i>Ver Colección
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Newsletter Section -->
      <section class="newsletter-section">
        <div class="container">
          <div class="newsletter-content">
            <div class="newsletter-text">
              <h2>¡No te pierdas estos consejos!</h2>
              <p>Recibe meditaciones diarias, técnicas de sanación y bendiciones energéticas</p>
              <div class="newsletter-features">
                <span><i class="bi bi-stars text-warning me-2"></i>Bendiciones de Sanación y Protección</span>
                <span><i class="bi bi-heart text-danger me-2"></i>Meditación en Corazones Gemelos - Diariamente</span>
                <span><i class="bi bi-book text-primary me-2"></i>Nuevos libros y audios</span>
              </div>
            </div>
            <div class="newsletter-form">
              <div class="form-group">
                <input type="email" placeholder="Dirección de correo electrónico *" class="form-input">
                <button class="btn btn-light btn-lg">
                  <i class="bi bi-envelope me-2"></i>Suscribirse
                </button>
              </div>
              <p class="form-note">
                ¡No enviamos spam! Lee nuestra <a href="/politica-privacidad">política de privacidad</a> para más información.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Trust Features Section -->
      <section class="trust-features-section">
        <div class="container">
          <div class="trust-grid">
            <div class="trust-card">
              <div class="trust-icon">
                <i class="bi bi-truck text-primary"></i>
              </div>
              <h3>Envío Semanal</h3>
              <p>Pedidos recibidos hasta el Miércoles, serán entregados a los transportadores el Jueves.</p>
              <a href="/politicas-despacho" class="trust-link">Ver políticas de despacho</a>
            </div>

            <div class="trust-card">
              <div class="trust-icon">
                <i class="bi bi-trophy text-warning"></i>
              </div>
              <h3>Únicos Distribuidores</h3>
              <p>Todos los libros en español de MCKS los encontrarás acá, de primera mano.</p>
            </div>

            <div class="trust-card">
              <div class="trust-icon">
                <i class="bi bi-check-circle text-success"></i>
              </div>
              <h3>Garantía de Confianza</h3>
              <p>El valor de nuestra oferta garantiza versiones revisadas y actualizadas de libros y discos compactos.</p>
            </div>

            <div class="trust-card">
              <div class="trust-icon">
                <i class="bi bi-shield-check text-info"></i>
              </div>
              <h3>Pago Seguro</h3>
              <p>A través de nuestra Pasarela de Pagos Payu con total seguridad y confianza.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Donation CTA -->
      <section class="donation-cta-section">
        <div class="container">
          <div class="donation-content">
            <h2>Haz una Donación a una obra de Master Choa Kok Sui</h2>
            <p>Apoya la difusión de la sanación pránica y contribuye a que más personas puedan acceder a estas enseñanzas transformadoras.</p>
            <div class="donation-actions">
              <a routerLink="/donaciones" class="btn btn-primary btn-lg">
                <i class="bi bi-heart me-2"></i>Hacer Donación
              </a>
              <a routerLink="/eventos-cursos" class="btn btn-outline btn-lg">
                <i class="bi bi-calendar-event me-2"></i>Ver Eventos y Cursos
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  `,
  styles: [`
    .shop-page {
      padding-top: 80px;
    }

    /* Hero Section */
    .shop-hero {
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
      background: linear-gradient(135deg, var(--primary-gold), var(--primary-orange));
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
      margin-bottom: 1rem;
    }

    .hero-info {
      font-size: 1rem;
      color: var(--text-light);
      line-height: 1.6;
    }

    .master-name {
      color: var(--primary-pink);
      font-weight: 700;
    }

    .hero-image {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .master-portrait {
      text-align: center;
    }

    .portrait-circle {
      width: 200px;
      height: 200px;
      background: var(--gradient-primary);
      border-radius: 50%;
      margin: 0 auto 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      box-shadow: 0 8px 30px rgba(233, 30, 99, 0.3);
      font-size: 4rem;
    }

    .master-info h3 {
      font-size: 1.5rem;
      color: var(--primary-pink);
      margin-bottom: 0.5rem;
    }

    .master-info p {
      color: var(--text-medium);
      font-style: italic;
    }

    /* Categories Section */
    .categories-section {
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
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .category-card {
      background: var(--background-white);
      border-radius: 16px;
      padding: 2rem;
      text-align: center;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      transition: all 0.3s ease;
      cursor: pointer;
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
    }

    /* Featured Books Section */
    .featured-books-section {
      padding: 6rem 0;
      background: var(--background-light);
    }

    .books-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .book-card {
      background: var(--background-white);
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      transition: all 0.3s ease;
    }

    .book-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    }

    .book-image {
      height: 200px;
      background: var(--gradient-spiritual);
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .book-badge {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: var(--primary-pink);
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 600;
    }

    .book-category {
      position: absolute;
      bottom: 1rem;
      left: 1rem;
      background: var(--primary-blue);
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 600;
    }

    .book-content {
      padding: 1.5rem;
    }

    .book-content h3 {
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
      color: var(--text-dark);
      line-height: 1.4;
    }

    .book-author {
      color: var(--primary-pink);
      font-weight: 600;
      margin-bottom: 0.75rem;
      font-size: 0.9rem;
    }

    .book-description {
      color: var(--text-medium);
      margin-bottom: 1rem;
      line-height: 1.6;
      font-size: 0.9rem;
    }

    .book-price {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--primary-orange);
      margin-bottom: 1rem;
    }

    /* Meditations Section */
    .meditations-section {
      padding: 6rem 0;
      background: var(--background-white);
    }

    .meditations-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 2rem;
    }

    .meditation-card {
      background: var(--background-light);
      border-radius: 16px;
      padding: 2rem;
      border-left: 4px solid var(--primary-pink);
    }

    .meditation-card.featured {
      background: var(--gradient-spiritual);
      border-left-color: var(--primary-gold);
    }

    .meditation-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }

    .meditation-header h3 {
      font-size: 1.3rem;
      color: var(--text-dark);
      margin: 0;
    }

    .meditation-type {
      background: var(--primary-pink);
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 600;
    }

    .meditation-description {
      color: var(--text-medium);
      line-height: 1.6;
      margin-bottom: 1rem;
    }

    .meditation-author {
      margin-bottom: 1.5rem;
    }

    .meditation-author strong {
      color: var(--primary-pink);
    }

    .meditation-actions {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    /* Newsletter Section */
    .newsletter-section {
      padding: 6rem 0;
      background: var(--gradient-primary);
      color: white;
    }

    .newsletter-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    .newsletter-text h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: white;
    }

    .newsletter-text p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }

    .newsletter-features {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .newsletter-features span {
      font-size: 1rem;
      opacity: 0.9;
    }

    .newsletter-form .form-group {
      display: flex;
      gap: 1rem;
      margin-bottom: 1rem;
    }

    .form-input {
      flex: 1;
      padding: 1rem;
      border: none;
      border-radius: 12px;
      font-size: 1rem;
    }

    .form-note {
      font-size: 0.9rem;
      opacity: 0.8;
    }

    .form-note a {
      color: white;
      text-decoration: underline;
    }

    /* Trust Features Section */
    .trust-features-section {
      padding: 6rem 0;
      background: var(--background-white);
    }

    .trust-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .trust-card {
      text-align: center;
      padding: 2rem;
    }

    .trust-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .trust-card h3 {
      font-size: 1.3rem;
      margin-bottom: 1rem;
      color: var(--text-dark);
    }

    .trust-card p {
      color: var(--text-medium);
      line-height: 1.6;
      margin-bottom: 1rem;
    }

    .trust-link {
      color: var(--primary-pink);
      text-decoration: none;
      font-weight: 600;
    }

    /* Donation CTA Section */
    .donation-cta-section {
      padding: 6rem 0;
      background: var(--gradient-spiritual);
      text-align: center;
    }

    .donation-content h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: var(--text-dark);
    }

    .donation-content p {
      font-size: 1.2rem;
      color: var(--text-medium);
      margin-bottom: 2rem;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .donation-actions {
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

      .newsletter-content {
        grid-template-columns: 1fr;
        gap: 2rem;
        text-align: center;
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

      .meditations-grid {
        grid-template-columns: 1fr;
      }

      .donation-actions {
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

      .books-grid {
        grid-template-columns: 1fr;
      }

      .meditation-actions {
        flex-direction: column;
      }
    }
  `]
})
export class ShopListComponent {}

