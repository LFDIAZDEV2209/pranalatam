// layout/footer/footer.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="footer">
      <div class="footer-container">
        <!-- Main Footer Content -->
        <div class="footer-main">
          <!-- Brand Section -->
          <div class="footer-brand">
            <div class="footer-logo">
              <div class="logo-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div class="logo-text">
                <h3>PRANALATAM</h3>
                <p>FUNDACIÓN SANACIÓN PRÁNICA LATINOAMERICANA</p>
              </div>
            </div>
            <p class="brand-description">
              Promovemos la sanación pránica y el desarrollo espiritual en Latinoamérica, 
              siguiendo las enseñanzas del Maestro Choa Kok Sui.
            </p>
            <div class="social-links">
              <a href="#" class="social-link" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Links Sections -->
          <div class="footer-links">
            <div class="footer-section">
              <h4>Links Internos</h4>
              <ul>
                <li><a routerLink="/maestro-nona-castro">Master Nona Castro</a></li>
                <li><a routerLink="/donaciones">Donaciones</a></li>
                <li><a routerLink="/acuerdo-confidencialidad">Acuerdo Confidencialidad</a></li>
                <li><a routerLink="/correo-webmail">Correo Web-MAIL</a></li>
                <li><a routerLink="/lista-correos">Lista de Correos</a></li>
                <li><a routerLink="/re-inscripcion-correos">Re-inscripción a Correos</a></li>
              </ul>
            </div>

            <div class="footer-section">
              <h4>Links Importantes</h4>
              <ul>
                <li><a routerLink="/politica-datos">Política de Datos</a></li>
                <li><a routerLink="/directriz-mcks">Directriz de MCKS</a></li>
                <li><a routerLink="/problemas-globales">Problemas Globales</a></li>
                <li><a routerLink="/gran-vision">La Gran Visión</a></li>
                <li><a routerLink="/acerca">Acerca de Nosotros</a></li>
                <li><a routerLink="/contacto">Contacto</a></li>
              </ul>
            </div>

            <div class="footer-section">
              <h4>Hispanoamérica</h4>
              <ul>
                <li><a href="#" target="_blank">Master Nona Castro - Español</a></li>
                <li><a href="#" target="_blank">Master Nona Castro - English</a></li>
                <li><a href="#" target="_blank">Sanación Pránica Colombia</a></li>
                <li><a href="#" target="_blank">Sanación Pránica Argentina</a></li>
                <li><a href="#" target="_blank">Sanación Pránica Chile</a></li>
                <li><a href="#" target="_blank">UniPrana Brazil</a></li>
              </ul>
            </div>

            <div class="footer-section">
              <h4>Servicios</h4>
              <ul>
                <li><a routerLink="/cursos">Cursos y Certificaciones</a></li>
                <li><a routerLink="/eventos">Eventos y Retiros</a></li>
                <li><a routerLink="/tienda">Tienda de Productos</a></li>
                <li><a routerLink="/meditaciones">Meditaciones Guiadas</a></li>
                <li><a routerLink="/consultas">Consultas Privadas</a></li>
                <li><a routerLink="/voluntariado">Programa de Voluntariado</a></li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Bottom Footer -->
        <div class="footer-bottom">
          <div class="footer-bottom-content">
            <div class="copyright">
              <p>&copy; 2025 PRANALATAM. Todos los derechos reservados.</p>
            </div>
            <div class="footer-bottom-links">
              <a routerLink="/terminos-condiciones">Términos y Condiciones</a>
              <a routerLink="/politica-privacidad">Política de Privacidad</a>
              <a routerLink="/cookies">Política de Cookies</a>
            </div>
          </div>
        </div>
      </div>

      <!-- WhatsApp Float Button -->
      <div class="whatsapp-float">
        <a href="https://wa.me/573001234567" target="_blank" aria-label="Contactar por WhatsApp">
          📱
        </a>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: var(--text-dark);
      color: white;
      position: relative;
      margin-top: 4rem;
    }

    .footer-container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    /* Main Footer Content */
    .footer-main {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 4rem;
      padding: 4rem 0 2rem;
    }

    /* Brand Section */
    .footer-brand {
      max-width: 400px;
    }

    .footer-logo {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .logo-icon {
      width: 48px;
      height: 48px;
      background: var(--gradient-primary);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }

    .logo-text h3 {
      font-family: 'Playfair Display', serif;
      font-size: 1.5rem;
      font-weight: 700;
      margin: 0;
      background: var(--gradient-primary);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .logo-text p {
      font-size: 0.8rem;
      color: var(--text-light);
      margin: 0.25rem 0 0 0;
      opacity: 0.8;
    }

    .brand-description {
      color: var(--text-light);
      line-height: 1.6;
      margin-bottom: 2rem;
      opacity: 0.9;
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .social-link {
      width: 40px;
      height: 40px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      transition: all 0.3s ease;
    }

    .social-link:hover {
      background: var(--primary-pink);
      transform: translateY(-2px);
    }

    /* Links Sections */
    .footer-links {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
    }

    .footer-section h4 {
      color: var(--primary-pink);
      font-size: 1.1rem;
      margin-bottom: 1.5rem;
      font-weight: 600;
      position: relative;
    }

    .footer-section h4::after {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      width: 30px;
      height: 2px;
      background: var(--gradient-primary);
      border-radius: 1px;
    }

    .footer-section ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .footer-section li {
      margin-bottom: 0.75rem;
    }

    .footer-section a {
      color: var(--text-light);
      text-decoration: none;
      transition: all 0.3s ease;
      font-size: 0.9rem;
      opacity: 0.8;
    }

    .footer-section a:hover {
      color: var(--primary-pink);
      opacity: 1;
      padding-left: 0.5rem;
    }

    /* Bottom Footer */
    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding: 2rem 0;
    }

    .footer-bottom-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .copyright p {
      color: var(--text-light);
      margin: 0;
      opacity: 0.8;
      font-size: 0.9rem;
    }

    .footer-bottom-links {
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;
    }

    .footer-bottom-links a {
      color: var(--text-light);
      text-decoration: none;
      font-size: 0.9rem;
      opacity: 0.8;
      transition: color 0.3s ease;
    }

    .footer-bottom-links a:hover {
      color: var(--primary-pink);
      opacity: 1;
    }

    /* Responsive */
    @media (max-width: 1024px) {
      .footer-main {
        grid-template-columns: 1fr;
        gap: 3rem;
      }

      .footer-brand {
        max-width: 100%;
        text-align: center;
      }

      .footer-logo {
        justify-content: center;
      }
    }

    @media (max-width: 768px) {
      .footer-container {
        padding: 0 1rem;
      }

      .footer-main {
        padding: 3rem 0 2rem;
      }

      .footer-links {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 1.5rem;
      }

      .footer-bottom-content {
        flex-direction: column;
        text-align: center;
      }

      .footer-bottom-links {
        justify-content: center;
      }
    }

    @media (max-width: 480px) {
      .footer-links {
        grid-template-columns: 1fr;
        text-align: center;
      }

      .footer-section h4::after {
        left: 50%;
        transform: translateX(-50%);
      }

      .social-links {
        justify-content: center;
      }
    }
  `]
})
export class FooterComponent {}