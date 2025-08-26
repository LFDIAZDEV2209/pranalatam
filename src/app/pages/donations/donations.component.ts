// pages/donations/donations.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-donations',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <main class="donations-page">
      <!-- Hero Section -->
      <section class="donations-hero meditation-bg">
        <div class="container">
          <div class="hero-content">
            <div class="hero-text">
              <h1 class="hero-title">Donaciones</h1>
              <h2 class="hero-subtitle">Ayuda Humanitaria y Desarrollo Espiritual</h2>
              <p class="hero-description">
                Hay dos maneras de ayudar a los que están en necesidad: <strong>Energeticamente</strong> y 
                <strong>Contribuyendo a la Caridad</strong>. Tu donación apoya la difusión de la sanación pránica 
                y ayuda a que más personas puedan acceder a estas enseñanzas transformadoras.
              </p>
              <div class="hero-actions">
                <a href="https://sites.placetopay.com/sanacionpranicalatinoamericana" target="_blank" class="btn btn-danger btn-lg">
                  <i class="bi bi-heart me-2"></i>Donaciones AQUÍ
                </a>
                <a routerLink="/eventos" class="btn btn-outline btn-lg">
                  <i class="bi bi-calendar-event me-2"></i>Ver Eventos
                </a>
              </div>
            </div>
            <div class="hero-image">
              <div class="donations-illustration">
                <i class="bi bi-heart-pulse text-danger"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Donation Methods -->
      <section class="donation-methods-section">
        <div class="container">
          <h2 class="section-title">Formas de Ayudar</h2>
          <div class="methods-grid">
            <div class="method-card">
              <div class="method-icon">
                <i class="bi bi-lightning-charge text-warning"></i>
              </div>
              <h3>1. Energeticamente</h3>
              <p>
                A través de la meditación, oración y envío de energía de sanación. 
                Cada pensamiento positivo y cada meditación contribuye al bienestar global.
              </p>
              <div class="method-features">
                <span><i class="bi bi-check-circle text-success me-2"></i>Meditación diaria</span>
                <span><i class="bi bi-check-circle text-success me-2"></i>Envío de energía</span>
                <span><i class="bi bi-check-circle text-success me-2"></i>Oración colectiva</span>
              </div>
            </div>

            <div class="method-card featured">
              <div class="method-icon">
                <i class="bi bi-currency-dollar text-success"></i>
              </div>
              <h3>2. Contribuyendo a la Caridad</h3>
              <p>
                Donaciones monetarias que se utilizan para financiar programas de sanación pránica, 
                becas para estudiantes y ayuda humanitaria en comunidades necesitadas.
              </p>
              <div class="method-features">
                <span><i class="bi bi-check-circle text-success me-2"></i>Programas educativos</span>
                <span><i class="bi bi-check-circle text-success me-2"></i>Becas para estudiantes</span>
                <span><i class="bi bi-check-circle text-success me-2"></i>Ayuda humanitaria</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Donation Link Section -->
      <section class="donation-link-section">
        <div class="container">
          <div class="donation-link-card">
            <div class="link-content">
              <h2>Enlace de Donaciones</h2>
              <p>Utiliza nuestra plataforma segura de PlaceToPay para realizar tu donación</p>
              <div class="payment-platform">
                <img src="assets/images/placetopay-logo.png" alt="PlaceToPay" class="platform-logo">
                <span class="platform-name">placetopay by evertec</span>
              </div>
              <div class="donation-url">
                <span class="url-label">URL:</span>
                <a href="https://sites.placetopay.com/sanacionpranicalatinoamericana" target="_blank" class="url-link">
                  https://sites.placetopay.com/sanacionpranicalatinoamericana
                </a>
              </div>
              <a href="https://sites.placetopay.com/sanacionpranicalatinoamericana" target="_blank" class="btn btn-danger btn-lg">
                <i class="bi bi-heart me-2"></i>Hacer Donación
              </a>
            </div>
            <div class="link-image">
              <i class="bi bi-shield-check text-success"></i>
            </div>
          </div>
        </div>
      </section>

      <!-- Impact Areas -->
      <section class="impact-areas-section">
        <div class="container">
          <h2 class="section-title">Áreas de Impacto</h2>
          <div class="impact-grid">
            <div class="impact-card">
              <div class="impact-icon">
                <i class="bi bi-mortarboard text-primary"></i>
              </div>
              <h3>Educación Espiritual</h3>
              <p>Becas para estudiantes que desean formarse en sanación pránica</p>
              <div class="impact-stats">
                <span class="stat-number">150+</span>
                <span class="stat-label">Estudiantes Becados</span>
              </div>
            </div>

            <div class="impact-card">
              <div class="impact-icon">
                <i class="bi bi-heart-pulse text-danger"></i>
              </div>
              <h3>Sanación Comunitaria</h3>
              <p>Sesiones gratuitas de sanación pránica en comunidades vulnerables</p>
              <div class="impact-stats">
                <span class="stat-number">500+</span>
                <span class="stat-label">Personas Atendidas</span>
              </div>
            </div>

            <div class="impact-card">
              <div class="impact-icon">
                <i class="bi bi-people text-success"></i>
              </div>
              <h3>Desarrollo Humano</h3>
              <p>Programas de desarrollo personal y espiritual para jóvenes</p>
              <div class="impact-stats">
                <span class="stat-number">300+</span>
                <span class="stat-label">Jóvenes Beneficiados</span>
              </div>
            </div>

            <div class="impact-card">
              <div class="impact-icon">
                <i class="bi bi-globe text-info"></i>
              </div>
              <h3>Difusión Global</h3>
              <p>Traducción y distribución de materiales en diferentes idiomas</p>
              <div class="impact-stats">
                <span class="stat-number">10+</span>
                <span class="stat-label">Idiomas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Donation Levels -->
      <section class="donation-levels-section">
        <div class="container">
          <h2 class="section-title">Niveles de Donación</h2>
          <div class="levels-grid">
            <div class="level-card">
              <div class="level-header">
                <h3>Amigo Espiritual</h3>
                <div class="level-amount">$25 USD</div>
              </div>
              <div class="level-benefits">
                <ul>
                  <li><i class="bi bi-check text-success me-2"></i>Meditación mensual especial</li>
                  <li><i class="bi bi-check text-success me-2"></i>Newsletter espiritual</li>
                  <li><i class="bi bi-check text-success me-2"></i>Certificado de donación</li>
                </ul>
              </div>
              <button class="btn btn-outline btn-lg w-100">
                <i class="bi bi-heart me-2"></i>Donar $25
              </button>
            </div>

            <div class="level-card featured">
              <div class="level-badge">MÁS POPULAR</div>
              <div class="level-header">
                <h3>Sanador en Desarrollo</h3>
                <div class="level-amount">$100 USD</div>
              </div>
              <div class="level-benefits">
                <ul>
                  <li><i class="bi bi-check text-success me-2"></i>Acceso a meditaciones premium</li>
                  <li><i class="bi bi-check text-success me-2"></i>Webinar mensual exclusivo</li>
                  <li><i class="bi bi-check text-success me-2"></i>Material de estudio digital</li>
                  <li><i class="bi bi-check text-success me-2"></i>Mentoría grupal trimestral</li>
                </ul>
              </div>
              <button class="btn btn-primary btn-lg w-100">
                <i class="bi bi-heart me-2"></i>Donar $100
              </button>
            </div>

            <div class="level-card">
              <div class="level-header">
                <h3>Maestro Compasivo</h3>
                <div class="level-amount">$250 USD</div>
              </div>
              <div class="level-benefits">
                <ul>
                  <li><i class="bi bi-check text-success me-2"></i>Sesión privada de sanación</li>
                  <li><i class="bi bi-check text-success me-2"></i>Acceso completo a la biblioteca</li>
                  <li><i class="bi bi-check text-success me-2"></i>Retiro espiritual anual</li>
                  <li><i class="bi bi-check text-success me-2"></i>Mentoría personalizada</li>
                </ul>
              </div>
              <button class="btn btn-outline btn-lg w-100">
                <i class="bi bi-heart me-2"></i>Donar $250
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Testimonials -->
      <section class="testimonials-section">
        <div class="container">
          <h2 class="section-title">Testimonios de Donantes</h2>
          <div class="testimonials-grid">
            <div class="testimonial-card">
              <div class="testimonial-content">
                <p>"He sido donante por 3 años y ver el impacto en la comunidad me llena de alegría. La sanación pránica está llegando a más personas gracias a las donaciones."</p>
              </div>
              <div class="testimonial-author">
                <div class="author-avatar">
                  <i class="bi bi-person-circle text-primary"></i>
                </div>
                <div class="author-info">
                  <h4>María Elena</h4>
                  <span>Donante Mensual</span>
                </div>
              </div>
            </div>

            <div class="testimonial-card">
              <div class="testimonial-content">
                <p>"Mi donación ayudó a que mi sobrina pudiera estudiar sanación pránica. Ahora es una sanadora certificada que ayuda a otros."</p>
              </div>
              <div class="testimonial-author">
                <div class="author-avatar">
                  <i class="bi bi-person-circle text-success"></i>
                </div>
                <div class="author-info">
                  <h4>Carlos Ramírez</h4>
                  <span>Donante Anual</span>
                </div>
              </div>
            </div>

            <div class="testimonial-card">
              <div class="testimonial-content">
                <p>"Como empresa, apoyamos la misión de PRANALATAM porque creemos en el poder de la sanación energética para transformar vidas."</p>
              </div>
              <div class="testimonial-author">
                <div class="author-avatar">
                  <i class="bi bi-building text-warning"></i>
                </div>
                <div class="author-info">
                  <h4>Fundación Luz Interior</h4>
                  <span>Donante Corporativo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Transparency Section -->
      <section class="transparency-section">
        <div class="container">
          <div class="transparency-content">
            <h2>Transparencia y Rendición de Cuentas</h2>
            <p>Creemos en la transparencia total. Cada donación se registra y reporta anualmente</p>
            <div class="transparency-grid">
              <div class="transparency-item">
                <i class="bi bi-graph-up text-success"></i>
                <h4>Reportes Anuales</h4>
                <p>Informes detallados de cómo se utilizan las donaciones</p>
              </div>
              <div class="transparency-item">
                <i class="bi bi-shield-check text-primary"></i>
                <h4>Auditorías Externas</h4>
                <p>Revisión independiente de nuestras finanzas</p>
              </div>
              <div class="transparency-item">
                <i class="bi bi-eye text-warning"></i>
                <h4>Acceso Público</h4>
                <p>Toda la información financiera está disponible públicamente</p>
              </div>
            </div>
            <div class="transparency-actions">
              <a href="/transparencia" class="btn btn-outline btn-lg">
                <i class="bi bi-file-earmark-text me-2"></i>Ver Reportes
              </a>
              <a href="/contacto" class="btn btn-primary btn-lg">
                <i class="bi bi-question-circle me-2"></i>Preguntar
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta-section">
        <div class="container">
          <div class="cta-content">
            <h2>¿Listo para hacer la diferencia?</h2>
            <p>Tu donación, sin importar el monto, contribuye a crear un mundo más compasivo y sanador</p>
            <div class="cta-actions">
              <a href="https://sites.placetopay.com/sanacionpranicalatinoamericana" target="_blank" class="btn btn-danger btn-lg">
                <i class="bi bi-heart me-2"></i>Hacer Donación Ahora
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
    .donations-page {
      padding-top: 80px;
    }

    /* Hero Section */
    .donations-hero {
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

    .donations-illustration {
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

    /* Donation Methods Section */
    .donation-methods-section {
      padding: 6rem 0;
      background: var(--background-white);
    }

    .section-title {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 4rem;
      color: var(--text-dark);
    }

    .methods-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 3rem;
    }

    .method-card {
      background: var(--background-white);
      border-radius: 16px;
      padding: 2rem;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      transition: all 0.3s ease;
      border: 2px solid transparent;
    }

    .method-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    }

    .method-card.featured {
      border-color: var(--primary-pink);
      background: var(--gradient-spiritual);
    }

    .method-icon {
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

    .method-card h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: var(--text-dark);
      text-align: center;
    }

    .method-card p {
      color: var(--text-medium);
      line-height: 1.6;
      margin-bottom: 1.5rem;
      text-align: center;
    }

    .method-features {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .method-features span {
      font-size: 0.9rem;
      color: var(--text-dark);
    }

    /* Donation Link Section */
    .donation-link-section {
      padding: 6rem 0;
      background: var(--background-light);
    }

    .donation-link-card {
      background: var(--background-white);
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 8px 40px rgba(0, 0, 0, 0.1);
      display: grid;
      grid-template-columns: 2fr 1fr;
    }

    .link-content {
      padding: 3rem;
    }

    .link-content h2 {
      font-size: 2.5rem;
      color: var(--text-dark);
      margin-bottom: 1rem;
    }

    .link-content p {
      font-size: 1.1rem;
      color: var(--text-medium);
      margin-bottom: 2rem;
      line-height: 1.6;
    }

    .payment-platform {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 2rem;
      padding: 1rem;
      background: var(--background-light);
      border-radius: 12px;
    }

    .platform-logo {
      width: 60px;
      height: 30px;
      object-fit: contain;
    }

    .platform-name {
      font-weight: 600;
      color: var(--text-dark);
    }

    .donation-url {
      margin-bottom: 2rem;
    }

    .url-label {
      display: block;
      font-weight: 600;
      color: var(--text-dark);
      margin-bottom: 0.5rem;
    }

    .url-link {
      color: var(--primary-pink);
      text-decoration: none;
      font-family: monospace;
      background: var(--background-light);
      padding: 0.5rem;
      border-radius: 6px;
      display: inline-block;
    }

    .link-image {
      background: var(--gradient-spiritual);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 6rem;
      color: var(--primary-success);
    }

    /* Impact Areas Section */
    .impact-areas-section {
      padding: 6rem 0;
      background: var(--background-white);
    }

    .impact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .impact-card {
      background: var(--background-white);
      border-radius: 16px;
      padding: 2rem;
      text-align: center;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      transition: all 0.3s ease;
    }

    .impact-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    }

    .impact-icon {
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

    .impact-card h3 {
      font-size: 1.3rem;
      margin-bottom: 1rem;
      color: var(--text-dark);
    }

    .impact-card p {
      color: var(--text-medium);
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .impact-stats {
      text-align: center;
    }

    .stat-number {
      display: block;
      font-size: 2rem;
      font-weight: 700;
      color: var(--primary-pink);
      margin-bottom: 0.25rem;
    }

    .stat-label {
      font-size: 0.9rem;
      color: var(--text-light);
    }

    /* Donation Levels Section */
    .donation-levels-section {
      padding: 6rem 0;
      background: var(--background-light);
    }

    .levels-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .level-card {
      background: var(--background-white);
      border-radius: 16px;
      padding: 2rem;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      transition: all 0.3s ease;
      position: relative;
      border: 2px solid transparent;
    }

    .level-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    }

    .level-card.featured {
      border-color: var(--primary-pink);
      transform: scale(1.05);
    }

    .level-badge {
      position: absolute;
      top: -10px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--primary-pink);
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 600;
    }

    .level-header {
      text-align: center;
      margin-bottom: 2rem;
    }

    .level-header h3 {
      font-size: 1.5rem;
      color: var(--text-dark);
      margin-bottom: 1rem;
    }

    .level-amount {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--primary-orange);
    }

    .level-benefits {
      margin-bottom: 2rem;
    }

    .level-benefits ul {
      list-style: none;
      padding: 0;
    }

    .level-benefits li {
      margin-bottom: 0.75rem;
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

    /* Transparency Section */
    .transparency-section {
      padding: 6rem 0;
      background: var(--gradient-spiritual);
    }

    .transparency-content {
      text-align: center;
    }

    .transparency-content h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: var(--text-dark);
    }

    .transparency-content p {
      font-size: 1.2rem;
      color: var(--text-medium);
      margin-bottom: 3rem;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .transparency-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }

    .transparency-item {
      text-align: center;
    }

    .transparency-item i {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .transparency-item h4 {
      font-size: 1.3rem;
      margin-bottom: 1rem;
      color: var(--text-dark);
    }

    .transparency-item p {
      color: var(--text-medium);
      line-height: 1.6;
    }

    .transparency-actions {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
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

      .donation-link-card {
        grid-template-columns: 1fr;
      }

      .link-image {
        padding: 2rem;
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

      .methods-grid {
        grid-template-columns: 1fr;
      }

      .levels-grid {
        grid-template-columns: 1fr;
      }

      .transparency-actions {
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

      .impact-grid {
        grid-template-columns: 1fr;
      }

      .testimonials-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class DonationsComponent {}

