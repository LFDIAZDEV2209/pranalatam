// features/events/components/events-list/events-list.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-events-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <main class="events-page">
      <!-- Hero Section -->
      <section class="events-hero meditation-bg">
        <div class="container">
          <div class="hero-content">
            <div class="hero-text">
              <h1 class="hero-title">Eventos y Retiros Espirituales</h1>
              <h2 class="hero-subtitle">Transforma tu vida a través de la sanación pránica</h2>
              <p class="hero-description">
                Únete a nuestros eventos transformadores y retiros espirituales donde podrás experimentar 
                la sanación pránica, practicar yoga arhatic y conectar con tu esencia espiritual.
              </p>
              <div class="hero-actions">
                <a routerLink="/eventos/retiro-arhatic-2025" class="btn btn-warning btn-lg">
                  <i class="bi bi-calendar-event me-2"></i>¡Inscríbete Ahora!
                </a>
                <a routerLink="/eventos" class="btn btn-outline btn-lg">
                  <i class="bi bi-list-ul me-2"></i>Ver Todos los Eventos
                </a>
              </div>
            </div>
            <div class="hero-image">
              <div class="events-illustration">
                <i class="bi bi-calendar-heart text-primary"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Event -->
      <section class="featured-event-section">
        <div class="container">
          <div class="featured-event-card">
            <div class="event-banner">
              <div class="event-badge">EVENTO DESTACADO</div>
              <div class="event-image">
                <i class="bi bi-person-meditation text-light"></i>
              </div>
            </div>
            <div class="event-content">
              <h2>Retiro Arhatic Yoga 2025</h2>
              <p class="event-subtitle">Tú estás destinado a ser exitoso, siembra y cosecharás</p>
              
              <div class="event-details">
                <div class="detail-item">
                  <i class="bi bi-calendar-date text-primary"></i>
                  <span>Septiembre 12, 13 y 14, 2025</span>
                </div>
                <div class="detail-item">
                  <i class="bi bi-geo-alt text-success"></i>
                  <span>Hotel Casa Dann Carlton, Bogotá - Colombia</span>
                </div>
                <div class="detail-item">
                  <i class="bi bi-clock text-warning"></i>
                  <span>3 días de transformación espiritual</span>
                </div>
                <div class="detail-item">
                  <i class="bi bi-people text-info"></i>
                  <span>Plazas limitadas - Solo 50 participantes</span>
                </div>
              </div>

              <div class="event-description">
                <p>
                  Un retiro transformador donde aprenderás técnicas avanzadas de yoga arhatic, 
                  meditación profunda y sanación pránica. Incluye alojamiento, alimentación 
                  vegetariana y certificación oficial.
                </p>
              </div>

              <div class="event-features">
                <h4>Incluye:</h4>
                <ul>
                  <li><i class="bi bi-check-circle text-success me-2"></i>Alojamiento en hotel 5 estrellas</li>
                  <li><i class="bi bi-check-circle text-success me-2"></i>Alimentación vegetariana completa</li>
                  <li><i class="bi bi-check-circle text-success me-2"></i>Material de estudio y práctica</li>
                  <li><i class="bi bi-check-circle text-success me-2"></i>Certificación oficial MCKS</li>
                  <li><i class="bi bi-check-circle text-success me-2"></i>Transporte desde el aeropuerto</li>
                </ul>
              </div>

              <div class="event-pricing">
                <div class="price-info">
                  <span class="price-label">Inversión:</span>
                  <span class="price-amount">$1,200 USD</span>
                  <span class="price-note">(Pago en cuotas disponible)</span>
                </div>
                <div class="pricing-actions">
                  <button class="btn btn-warning btn-lg">
                    <i class="bi bi-calendar-check me-2"></i>Reservar Mi Lugar
                  </button>
                  <button class="btn btn-outline btn-lg">
                    <i class="bi bi-info-circle me-2"></i>Más Información
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Event Categories -->
      <section class="event-categories-section">
        <div class="container">
          <h2 class="section-title">Tipos de Eventos</h2>
          <div class="categories-grid">
            <div class="category-card">
              <div class="category-icon">
                <i class="bi bi-house-heart text-primary"></i>
              </div>
              <h3>Retiros Espirituales</h3>
              <p>Experiencias inmersivas de 3-7 días para transformación profunda</p>
              <a routerLink="/eventos/retiros" class="btn btn-outline btn-sm">
                <i class="bi bi-arrow-right me-2"></i>Explorar
              </a>
            </div>

            <div class="category-card">
              <div class="category-icon">
                <i class="bi bi-calendar-week text-success"></i>
              </div>
              <h3>Talleres Intensivos</h3>
              <p>Sesiones de 1-2 días para aprender técnicas específicas</p>
              <a routerLink="/eventos/talleres" class="btn btn-outline btn-sm">
                <i class="bi bi-arrow-right me-2"></i>Explorar
              </a>
            </div>

            <div class="category-card">
              <div class="category-icon">
                <i class="bi bi-award text-warning"></i>
              </div>
              <h3>Certificaciones</h3>
              <p>Programas oficiales para convertirse en sanador pránico</p>
              <a routerLink="/eventos/certificaciones" class="btn btn-outline btn-sm">
                <i class="bi bi-arrow-right me-2"></i>Explorar
              </a>
            </div>

            <div class="category-card">
              <div class="category-icon">
                <i class="bi bi-people text-info"></i>
              </div>
              <h3>Encuentros Comunitarios</h3>
              <p>Reuniones mensuales para practicar y compartir experiencias</p>
              <a routerLink="/eventos/encuentros" class="btn btn-outline btn-sm">
                <i class="bi bi-arrow-right me-2"></i>Explorar
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Upcoming Events -->
      <section class="upcoming-events-section">
        <div class="container">
          <h2 class="section-title">Próximos Eventos</h2>
          <div class="events-grid">
            <div class="event-card">
              <div class="event-image">
                <img src="/assets/certificado2.png" alt="Taller de Autosanación Pránica" class="event-image-img">
                <div class="event-badge">PRÓXIMAMENTE</div>
              </div>
              <div class="event-header">
                <div class="event-date">
                  <span class="day">15</span>
                  <span class="month">Oct</span>
                </div>
              </div>
              <div class="event-body">
                <h3>Taller de Autosanación Pránica</h3>
                <p>Aprende técnicas básicas de sanación energética para ti y tu familia</p>
                <div class="event-meta">
                  <span><i class="bi bi-geo-alt text-muted me-1"></i>Bogotá</span>
                  <span><i class="bi bi-clock text-muted me-1"></i>1 día</span>
                  <span><i class="bi bi-currency-dollar text-muted me-1"></i>$150</span>
                </div>
                <button class="btn btn-primary btn-sm w-100">
                  <i class="bi bi-calendar-plus me-2"></i>Agregar a Calendario
                </button>
              </div>
            </div>

            <div class="event-card">
              <div class="event-image">
                <img src="/assets/certificado1.png" alt="Certificación Nivel 1 - Sanación Pránica" class="event-image-img">
                <div class="event-badge">NUEVO</div>
              </div>
              <div class="event-header">
                <div class="event-date">
                  <span class="day">22</span>
                  <span class="month">Nov</span>
                </div>
              </div>
              <div class="event-body">
                <h3>Certificación Nivel 1 - Sanación Pránica</h3>
                <p>Formación oficial para convertirte en sanador pránico certificado</p>
                <div class="event-meta">
                  <span><i class="bi bi-geo-alt text-muted me-1"></i>Medellín</span>
                  <span><i class="bi bi-clock text-muted me-1"></i>5 días</span>
                  <span><i class="bi bi-currency-dollar text-muted me-1"></i>$800</span>
                </div>
                <button class="btn btn-primary btn-sm w-100">
                  <i class="bi bi-calendar-plus me-2"></i>Agregar a Calendario
                </button>
              </div>
            </div>

            <div class="event-card">
              <div class="event-image">
                <img src="/assets/certificado3.png" alt="Meditación de Fin de Año" class="event-image-img">
                <div class="event-badge">ESPECIAL</div>
              </div>
              <div class="event-header">
                <div class="event-date">
                  <span class="day">10</span>
                  <span class="month">Dic</span>
                </div>
              </div>
              <div class="event-body">
                <h3>Meditación de Fin de Año</h3>
                <p>Ceremonia especial para cerrar el año y abrir el nuevo con energía renovada</p>
                <div class="event-meta">
                  <span><i class="bi bi-geo-alt text-muted me-1"></i>Online</span>
                  <span><i class="bi bi-clock text-muted me-1"></i>2 horas</span>
                  <span><i class="bi bi-currency-dollar text-muted me-1"></i>Gratis</span>
                </div>
                <button class="btn btn-primary btn-sm w-100">
                  <i class="bi bi-calendar-plus me-2"></i>Agregar a Calendario
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Testimonials -->
      <section class="testimonials-section">
        <div class="container">
          <h2 class="section-title">Experiencias de Participantes</h2>
          <div class="testimonials-grid">
            <div class="testimonial-card">
              <div class="testimonial-content">
                <p>"El retiro de yoga arhatic cambió mi vida completamente. Ahora puedo meditar profundamente y sentir la energía universal."</p>
              </div>
              <div class="testimonial-author">
                <div class="author-avatar">
                  <i class="bi bi-person-circle text-primary"></i>
                </div>
                <div class="author-info">
                  <h4>María González</h4>
                  <span>Participante Retiro 2024</span>
                </div>
              </div>
            </div>

            <div class="testimonial-card">
              <div class="testimonial-content">
                <p>"La certificación me dio las herramientas para ayudar a otros. Ahora soy sanador pránico y mi propósito es claro."</p>
              </div>
              <div class="testimonial-author">
                <div class="author-avatar">
                  <i class="bi bi-person-circle text-success"></i>
                </div>
                <div class="author-info">
                  <h4>Carlos Mendoza</h4>
                  <span>Sanador Pránico Certificado</span>
                </div>
              </div>
            </div>

            <div class="testimonial-card">
              <div class="testimonial-content">
                <p>"Los talleres son increíbles. Aprendí técnicas prácticas que uso diariamente para mantener mi energía equilibrada."</p>
              </div>
              <div class="testimonial-author">
                <div class="author-avatar">
                  <i class="bi bi-person-circle text-warning"></i>
                </div>
                <div class="author-info">
                  <h4>Ana Rodríguez</h4>
                  <span>Participante Talleres</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta-section">
        <div class="container">
          <div class="cta-content">
            <h2>¿Listo para tu transformación espiritual?</h2>
            <p>Únete a nuestra comunidad y descubre el poder de la sanación pránica</p>
            <div class="cta-actions">
              <a routerLink="/eventos/retiro-arhatic-2025" class="btn btn-warning btn-lg">
                <i class="bi bi-calendar-check me-2"></i>¡Inscríbete al Retiro!
              </a>
              <a routerLink="/contacto" class="btn btn-outline btn-lg">
                <i class="bi bi-envelope me-2"></i>Contactar
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  `,
  styles: [`


    /* Hero Section */
    .events-hero {
      min-height: 80vh;
      display: flex;
      flex-direction: column;
      position: relative;
      overflow: hidden;
    }

    .hero-banner {
      width: 100%;
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--background-white);
      padding: 2rem 0;
    }

    .banner-image {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      object-position: center;
    }

    .container {
      flex: 1;
      display: flex;
      align-items: center;
    }

    .hero-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
      width: 100%;
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

    .events-illustration {
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

    /* Featured Event Section */
    .featured-event-section {
      padding: 6rem 0;
      background: var(--background-white);
    }

    .featured-event-card {
      background: var(--background-white);
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 8px 40px rgba(0, 0, 0, 0.1);
      display: grid;
      grid-template-columns: 1fr 2fr;
    }

    .event-banner {
      background: var(--gradient-primary);
      color: white;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
    }

    .event-badge {
      background: rgba(255, 255, 255, 0.2);
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 25px;
      font-size: 0.9rem;
      font-weight: 600;
      align-self: flex-start;
    }

    .event-image {
      text-align: center;
      font-size: 4rem;
      margin: 2rem 0;
    }

    .event-content {
      padding: 3rem;
    }

    .event-content h2 {
      font-size: 2.5rem;
      color: var(--text-dark);
      margin-bottom: 1rem;
    }

    .event-subtitle {
      font-size: 1.2rem;
      color: var(--primary-pink);
      font-style: italic;
      margin-bottom: 2rem;
    }

    .event-details {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .detail-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-size: 1rem;
      color: var(--text-medium);
    }

    .detail-item i {
      font-size: 1.2rem;
    }

    .event-description {
      margin-bottom: 2rem;
    }

    .event-description p {
      color: var(--text-medium);
      line-height: 1.6;
      font-size: 1.1rem;
    }

    .event-features {
      margin-bottom: 2rem;
    }

    .event-features h4 {
      color: var(--text-dark);
      margin-bottom: 1rem;
    }

    .event-features ul {
      list-style: none;
      padding: 0;
    }

    .event-features li {
      margin-bottom: 0.5rem;
      color: var(--text-medium);
    }

    .event-pricing {
      border-top: 1px solid var(--border-light);
      padding-top: 2rem;
    }

    .price-info {
      text-align: center;
      margin-bottom: 2rem;
    }

    .price-label {
      display: block;
      color: var(--text-medium);
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }

    .price-amount {
      display: block;
      font-size: 3rem;
      font-weight: 700;
      color: var(--primary-orange);
      margin-bottom: 0.5rem;
    }

    .price-note {
      color: var(--text-light);
      font-size: 0.9rem;
    }

    .pricing-actions {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    /* Event Categories Section */
    .event-categories-section {
      padding: 6rem 0;
      background: var(--background-light);
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
    }

    .category-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
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

    /* Upcoming Events Section */
    .upcoming-events-section {
      padding: 6rem 0;
      background: var(--background-white);
    }

    .events-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .event-card {
      background: var(--background-white);
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      transition: all 0.3s ease;
    }

    .event-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    }

    .event-image {
      height: 200px;
      background: var(--gradient-spiritual);
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .event-image-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    .event-header {
      background: var(--gradient-spiritual);
      padding: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .event-date {
      text-align: center;
      color: var(--text-dark);
    }

    .event-date .day {
      display: block;
      font-size: 2rem;
      font-weight: 700;
      line-height: 1;
    }

    .event-date .month {
      font-size: 1rem;
      text-transform: uppercase;
      font-weight: 600;
    }

    .event-badge {
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

    .event-body {
      padding: 1.5rem;
    }

    .event-body h3 {
      font-size: 1.3rem;
      margin-bottom: 0.75rem;
      color: var(--text-dark);
    }

    .event-body p {
      color: var(--text-medium);
      line-height: 1.6;
      margin-bottom: 1rem;
    }

    .event-meta {
      display: flex;
      gap: 1rem;
      margin-bottom: 1.5rem;
      flex-wrap: wrap;
    }

    .event-meta span {
      font-size: 0.9rem;
      color: var(--text-light);
    }

    /* Testimonials Section */
    .testimonials-section {
      padding: 6rem 0;
      background: var(--background-light);
    }

    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .testimonial-card {
      background: var(--background-white);
      padding: 2rem;
      border-radius: 16px;
      border-left: 4px solid var(--primary-pink);
    }

    .testimonial-content p {
      font-style: italic;
      color: var(--text-dark);
      margin-bottom: 1.5rem;
      line-height: 1.6;
      font-size: 1.1rem;
    }

    .testimonial-author {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .author-avatar {
      font-size: 2.5rem;
    }

    .author-info h4 {
      margin: 0;
      color: var(--text-dark);
      font-size: 1.1rem;
    }

    .author-info span {
      color: var(--text-medium);
      font-size: 0.9rem;
    }

    /* CTA Section */
    .cta-section {
      padding: 6rem 0;
      background: var(--gradient-primary);
      color: white;
      text-align: center;
    }

    .cta-content h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: white;
    }

    .cta-content p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }

    .cta-actions {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .cta-actions .btn-outline {
      border-color: white;
      color: white;
    }

    .cta-actions .btn-outline:hover {
      background: white;
      color: var(--primary-pink);
    }

    /* Responsive */
    @media (max-width: 1024px) {
      .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 2rem;
      }

      .featured-event-card {
        grid-template-columns: 1fr;
      }

      .event-banner {
        padding: 1.5rem;
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

      .event-content {
        padding: 2rem;
      }

      .event-content h2 {
        font-size: 2rem;
      }

      .pricing-actions {
        flex-direction: column;
        align-items: center;
      }

      .cta-actions {
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

      .events-grid {
        grid-template-columns: 1fr;
      }

      .event-details {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class EventsListComponent {}

