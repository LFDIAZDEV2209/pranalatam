// pages/home/home.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <main class="home-page">
      <!-- Hero Section -->
      <section class="hero-section meditation-bg">
        <div class="hero-container">
          <div class="hero-content">
            <div class="hero-text">
              <h1 class="hero-title">Retiro Arhatic Yoga 2025</h1>
              <p class="hero-subtitle">Tú estás destinado a ser exitoso, siembra y cosecharás</p>
              <div class="hero-details">
                <div class="event-date">
                  <span class="date-icon">📅</span>
                  <span>Septiembre 12, 13 y 14</span>
                </div>
                <div class="event-location">
                  <span class="location-icon">📍</span>
                  <span>Hotel Casa Dann Carlton</span>
                  <span class="location-city">Bogotá - Colombia</span>
                </div>
              </div>
              <div class="hero-actions">
                <a routerLink="/eventos/retiro-arhatic-2025" class="btn btn-primary btn-lg">
                  ¡Inscríbete Ahora!
                </a>
                <a routerLink="/eventos" class="btn btn-outline btn-lg">
                  Ver Más Eventos
                </a>
              </div>
            </div>
            <div class="hero-image">
              <div class="meditation-figure">
                <div class="figure-circle">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Floating Elements -->
        <div class="floating-elements">
          <div class="floating-lotus">🌸</div>
          <div class="floating-star">⭐</div>
          <div class="floating-heart">💖</div>
          <div class="floating-om">🕉️</div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="features-section">
        <div class="container">
          <h2 class="section-title">¿Por qué elegir PRANALATAM?</h2>
          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h3>Sanación Pránica</h3>
              <p>Técnicas milenarias de sanación energética para el bienestar físico, emocional y espiritual.</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
              </div>
              <h3>Yoga Arhatic</h3>
              <p>Prácticas avanzadas de yoga para el desarrollo espiritual y la elevación de la conciencia.</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
              <h3>Certificación Internacional</h3>
              <p>Programas certificados por el Institute for Inner Studies y reconocidos mundialmente.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Courses Preview Section -->
      <section class="courses-preview-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Cursos Destacados</h2>
            <a routerLink="/cursos" class="btn btn-outline">Ver Todos los Cursos</a>
          </div>
          <div class="courses-grid">
            <div class="course-preview-card">
              <div class="course-image">
                <div class="course-badge">HOT</div>
                <div class="course-level">Básico</div>
              </div>
              <div class="course-content">
                <h3>Fundamentos de Sanación Pránica</h3>
                <p>Aprende los principios básicos de la sanación energética pránica.</p>
                <div class="course-meta">
                  <span class="course-duration">8 semanas</span>
                  <span class="course-format">Online</span>
                </div>
                <a routerLink="/cursos/fundamentos-sanacion-pranica" class="btn btn-primary btn-sm">
                  Más Información
                </a>
              </div>
            </div>
            <div class="course-preview-card">
              <div class="course-image">
                <div class="course-badge">NUEVO</div>
                <div class="course-level">Intermedio</div>
              </div>
              <div class="course-content">
                <h3>Yoga Arhatic Avanzado</h3>
                <p>Prácticas avanzadas para el desarrollo espiritual y la meditación profunda.</p>
                <div class="course-meta">
                  <span class="course-duration">12 semanas</span>
                  <span class="course-format">Híbrido</span>
                </div>
                <a routerLink="/cursos/yoga-arhatic-avanzado" class="btn btn-primary btn-sm">
                  Más Información
                </a>
              </div>
            </div>
            <div class="course-preview-card">
              <div class="course-image">
                <div class="course-badge">POPULAR</div>
                <div class="course-level">Avanzado</div>
              </div>
              <div class="course-content">
                <h3>Maestría en Psicoterapia Pránica</h3>
                <p>Especialización en técnicas terapéuticas energéticas para profesionales.</p>
                <div class="course-meta">
                  <span class="course-duration">16 semanas</span>
                  <span class="course-format">Presencial</span>
                </div>
                <a routerLink="/cursos/maestria-psicoterapia-pranica" class="btn btn-primary btn-sm">
                  Más Información
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Testimonials Section -->
      <section class="testimonials-section">
        <div class="container">
          <h2 class="section-title">Lo que dicen nuestros estudiantes</h2>
          <div class="testimonials-grid">
            <div class="testimonial-card">
              <div class="testimonial-content">
                <p>"La sanación pránica transformó mi vida. Ahora puedo ayudar a otros y sentirme en paz."</p>
              </div>
              <div class="testimonial-author">
                <div class="author-avatar">👩‍⚕️</div>
                <div class="author-info">
                  <h4>María González</h4>
                  <span>Médica - Bogotá</span>
                </div>
              </div>
            </div>
            <div class="testimonial-card">
              <div class="testimonial-content">
                <p>"El yoga arhatic me ha ayudado a encontrar mi propósito espiritual y vivir con más consciencia."</p>
              </div>
              <div class="testimonial-author">
                <div class="author-avatar">🧘‍♂️</div>
                <div class="author-info">
                  <h4>Carlos Mendoza</h4>
                  <span>Instructor de Yoga - Medellín</span>
                </div>
              </div>
            </div>
            <div class="testimonial-card">
              <div class="testimonial-content">
                <p>"PRANALATAM me dio las herramientas para convertirme en un sanador profesional certificado."</p>
              </div>
              <div class="testimonial-author">
                <div class="author-avatar">✨</div>
                <div class="author-info">
                  <h4>Ana Rodríguez</h4>
                  <span>Sanadora Pránica - Cali</span>
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
            <h2>¿Listo para comenzar tu viaje espiritual?</h2>
            <p>Únete a nuestra comunidad y descubre el poder de la sanación pránica</p>
            <div class="cta-actions">
              <a routerLink="/cursos" class="btn btn-primary btn-lg">Explorar Cursos</a>
              <a routerLink="/contacto" class="btn btn-outline btn-lg">Contactar</a>
            </div>
          </div>
        </div>
      </section>

      <!-- WhatsApp Float Button -->
      <div class="whatsapp-float">
        <a href="https://wa.me/573001234567" target="_blank" aria-label="Contactar por WhatsApp">
          📱
        </a>
      </div>
    </main>
  `,
  styles: [`
    .home-page {
      padding-top: 80px; /* Account for fixed header */
    }

    /* Hero Section */
    .hero-section {
      min-height: 100vh;
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
    }

    .hero-container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 2rem;
      width: 100%;
    }

    .hero-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    .hero-title {
      font-family: 'Playfair Display', serif;
      font-size: 4rem;
      font-weight: 700;
      background: linear-gradient(135deg, var(--primary-gold), var(--primary-orange));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 1.5rem;
      line-height: 1.2;
    }

    .hero-subtitle {
      font-size: 1.5rem;
      color: var(--text-medium);
      margin-bottom: 2rem;
      font-style: italic;
      line-height: 1.4;
    }

    .hero-details {
      margin-bottom: 3rem;
    }

    .event-date,
    .event-location {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1rem;
      font-size: 1.1rem;
      color: var(--text-dark);
    }

    .date-icon,
    .location-icon {
      font-size: 1.5rem;
    }

    .location-city {
      color: var(--primary-pink);
      font-weight: 600;
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

    .meditation-figure {
      width: 300px;
      height: 300px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(10px);
      border: 2px solid rgba(255, 255, 255, 0.2);
    }

    .figure-circle {
      width: 200px;
      height: 200px;
      background: var(--gradient-primary);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      animation: float 6s ease-in-out infinite;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }

    /* Floating Elements */
    .floating-elements {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
    }

    .floating-lotus,
    .floating-star,
    .floating-heart,
    .floating-om {
      position: absolute;
      font-size: 2rem;
      animation: float-around 8s ease-in-out infinite;
    }

    .floating-lotus { top: 20%; left: 10%; animation-delay: 0s; }
    .floating-star { top: 30%; right: 15%; animation-delay: 2s; }
    .floating-heart { bottom: 30%; left: 20%; animation-delay: 4s; }
    .floating-om { bottom: 20%; right: 10%; animation-delay: 6s; }

    @keyframes float-around {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      25% { transform: translate(20px, -20px) rotate(90deg); }
      50% { transform: translate(0, -40px) rotate(180deg); }
      75% { transform: translate(-20px, -20px) rotate(270deg); }
    }

    /* Features Section */
    .features-section {
      padding: 6rem 0;
      background: var(--background-white);
    }

    .container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .section-title {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 4rem;
      color: var(--text-dark);
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 3rem;
    }

    .feature-card {
      text-align: center;
      padding: 2rem;
      border-radius: 16px;
      background: var(--background-white);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      transition: all 0.3s ease;
    }

    .feature-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    }

    .feature-icon {
      width: 80px;
      height: 80px;
      margin: 0 auto 1.5rem;
      background: var(--gradient-spiritual);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--primary-pink);
    }

    .feature-card h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: var(--text-dark);
    }

    .feature-card p {
      color: var(--text-medium);
      line-height: 1.6;
    }

    /* Courses Preview Section */
    .courses-preview-section {
      padding: 6rem 0;
      background: var(--background-light);
    }

    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 3rem;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .courses-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
    }

    .course-preview-card {
      background: var(--background-white);
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      transition: all 0.3s ease;
    }

    .course-preview-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    }

    .course-image {
      height: 200px;
      background: var(--gradient-spiritual);
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .course-badge {
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

    .course-level {
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

    .course-content {
      padding: 1.5rem;
    }

    .course-content h3 {
      font-size: 1.25rem;
      margin-bottom: 0.75rem;
      color: var(--text-dark);
    }

    .course-content p {
      color: var(--text-medium);
      margin-bottom: 1rem;
      line-height: 1.6;
    }

    .course-meta {
      display: flex;
      gap: 1rem;
      margin-bottom: 1.5rem;
      font-size: 0.9rem;
    }

    .course-duration,
    .course-format {
      background: var(--background-light);
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      color: var(--text-medium);
    }

    /* Testimonials Section */
    .testimonials-section {
      padding: 6rem 0;
      background: var(--background-white);
    }

    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .testimonial-card {
      background: var(--background-light);
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
      font-size: 2rem;
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
      .hero-title {
        font-size: 3rem;
      }
      
      .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
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
        font-size: 1.25rem;
      }

      .hero-actions {
        flex-direction: column;
        align-items: center;
      }

      .section-header {
        flex-direction: column;
        text-align: center;
      }

      .courses-grid {
        grid-template-columns: 1fr;
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
        font-size: 1.1rem;
      }

      .section-title {
        font-size: 2rem;
      }

      .features-grid,
      .testimonials-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class HomeComponent {}