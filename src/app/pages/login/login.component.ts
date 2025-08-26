// pages/login/login.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <main class="login-page">
      <!-- Hero Section -->
      <section class="login-hero meditation-bg">
        <div class="container">
          <div class="hero-content">
            <div class="hero-text">
              <h1 class="hero-title">Acceso Espiritual</h1>
              <h2 class="hero-subtitle">Conecta con tu Esencia Interior</h2>
              <p class="hero-description">
                Accede a tu cuenta personal para disfrutar de contenido exclusivo, 
                meditaciones guiadas, cursos avanzados y una comunidad de sanadores pránicos.
              </p>
              <div class="hero-features">
                <span><i class="bi bi-stars text-warning me-2"></i>Contenido Exclusivo</span>
                <span><i class="bi bi-headphones text-success me-2"></i>Meditaciones Premium</span>
                <span><i class="bi bi-people text-primary me-2"></i>Comunidad Activa</span>
              </div>
            </div>
            <div class="hero-image">
              <div class="login-illustration">
                <i class="bi bi-person-circle text-primary"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Login Form Section -->
      <section class="login-form-section">
        <div class="container">
          <div class="login-container">
            <div class="login-card">
              <div class="login-header">
                <h2>Iniciar Sesión</h2>
                <p>Bienvenido de vuelta a tu espacio espiritual</p>
              </div>

              <form class="login-form" (ngSubmit)="onLogin()">
                <div class="form-group">
                  <label for="email" class="form-label">
                    <i class="bi bi-envelope me-2"></i>Correo Electrónico
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    class="form-input" 
                    placeholder="tu@email.com"
                    [(ngModel)]="loginData.email"
                    required
                  >
                </div>

                <div class="form-group">
                  <label for="password" class="form-label">
                    <i class="bi bi-lock me-2"></i>Contraseña
                  </label>
                  <div class="password-input-group">
                    <input 
                      [type]="showPassword ? 'text' : 'password'" 
                      id="password" 
                      name="password" 
                      class="form-input" 
                      placeholder="Tu contraseña"
                      [(ngModel)]="loginData.password"
                      required
                    >
                    <button 
                      type="button" 
                      class="password-toggle"
                      (click)="togglePassword()"
                    >
                      <i [class]="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
                    </button>
                  </div>
                </div>

                <div class="form-options">
                  <label class="checkbox-label">
                    <input type="checkbox" [(ngModel)]="loginData.rememberMe" name="rememberMe">
                    <span class="checkmark"></span>
                    Recordarme
                  </label>
                  <a routerLink="/recuperar-contrasena" class="forgot-password">
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>

                <button type="submit" class="btn btn-primary btn-lg w-100" [disabled]="isLoading">
                  <i class="bi bi-box-arrow-in-right me-2" *ngIf="!isLoading"></i>
                  <i class="bi bi-arrow-clockwise me-2" *ngIf="isLoading"></i>
                  {{ isLoading ? 'Iniciando Sesión...' : 'Iniciar Sesión' }}
                </button>
              </form>

              <div class="divider">
                <span>o</span>
              </div>

              <div class="social-login">
                <button class="btn btn-outline btn-lg w-100 mb-3">
                  <i class="bi bi-google me-2"></i>Continuar con Google
                </button>
                <button class="btn btn-outline btn-lg w-100">
                  <i class="bi bi-facebook me-2"></i>Continuar con Facebook
                </button>
              </div>

              <div class="login-footer">
                <p>¿No tienes una cuenta? <a routerLink="/registro" class="signup-link">Regístrate aquí</a></p>
              </div>
            </div>

            <div class="login-benefits">
              <h3>Beneficios de tu Cuenta</h3>
              <div class="benefits-list">
                <div class="benefit-item">
                  <i class="bi bi-book text-primary"></i>
                  <div>
                    <h4>Biblioteca Digital</h4>
                    <p>Acceso completo a todos los libros y materiales de Master Choa Kok Sui</p>
                  </div>
                </div>

                <div class="benefit-item">
                  <i class="bi bi-headphones text-success"></i>
                  <div>
                    <h4>Meditaciones Exclusivas</h4>
                    <p>Contenido premium de meditación y mantras no disponibles públicamente</p>
                  </div>
                </div>

                <div class="benefit-item">
                  <i class="bi bi-people text-warning"></i>
                  <div>
                    <h4>Comunidad Activa</h4>
                    <p>Conecta con otros practicantes y sanadores pránicos</p>
                  </div>
                </div>

                <div class="benefit-item">
                  <i class="bi bi-graph-up text-info"></i>
                  <div>
                    <h4>Progreso Personal</h4>
                    <p>Seguimiento de tu desarrollo espiritual y certificaciones</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Security Features -->
      <section class="security-section">
        <div class="container">
          <h2 class="section-title">Seguridad y Privacidad</h2>
          <div class="security-grid">
            <div class="security-card">
              <div class="security-icon">
                <i class="bi bi-shield-check text-success"></i>
              </div>
              <h3>Encriptación SSL</h3>
              <p>Todos los datos se transmiten de forma segura con encriptación de nivel bancario</p>
            </div>

            <div class="security-card">
              <div class="security-icon">
                <i class="bi bi-eye-slash text-primary"></i>
              </div>
              <h3>Privacidad Total</h3>
              <p>Tu información personal nunca se comparte con terceros</p>
            </div>

            <div class="security-card">
              <div class="security-icon">
                <i class="bi bi-clock-history text-warning"></i>
              </div>
              <h3>Acceso 24/7</h3>
              <p>Accede a tu cuenta en cualquier momento desde cualquier dispositivo</p>
            </div>

            <div class="security-card">
              <div class="security-icon">
                <i class="bi bi-arrow-clockwise text-info"></i>
              </div>
              <h3>Respaldo Automático</h3>
              <p>Tu progreso y contenido se respaldan automáticamente</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Help Section -->
      <section class="help-section">
        <div class="container">
          <div class="help-content">
            <h2>¿Necesitas ayuda para acceder?</h2>
            <p>Nuestro equipo de soporte está aquí para ayudarte</p>
            <div class="help-actions">
              <a routerLink="/recuperar-contrasena" class="btn btn-outline btn-lg">
                <i class="bi bi-key me-2"></i>Recuperar Contraseña
              </a>
              <a routerLink="/contacto" class="btn btn-primary btn-lg">
                <i class="bi bi-chat-dots me-2"></i>Contactar Soporte
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  `,
  styles: [`
    .login-page {
      padding-top: 80px;
    }

    /* Hero Section */
    .login-hero {
      min-height: 60vh;
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

    .hero-features {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .hero-features span {
      font-size: 1rem;
      color: var(--text-dark);
    }

    .hero-image {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .login-illustration {
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

    /* Login Form Section */
    .login-form-section {
      padding: 6rem 0;
      background: var(--background-light);
    }

    .login-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .login-card {
      background: var(--background-white);
      border-radius: 20px;
      padding: 3rem;
      box-shadow: 0 8px 40px rgba(0, 0, 0, 0.1);
    }

    .login-header {
      text-align: center;
      margin-bottom: 2rem;
    }

    .login-header h2 {
      font-size: 2.5rem;
      color: var(--text-dark);
      margin-bottom: 0.5rem;
    }

    .login-header p {
      color: var(--text-medium);
      font-size: 1.1rem;
    }

    .login-form {
      margin-bottom: 2rem;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-label {
      display: block;
      margin-bottom: 0.5rem;
      color: var(--text-dark);
      font-weight: 600;
      font-size: 1rem;
    }

    .form-input {
      width: 100%;
      padding: 1rem;
      border: 2px solid var(--border-light);
      border-radius: 12px;
      font-size: 1rem;
      transition: all 0.3s ease;
      background: var(--background-white);
    }

    .form-input:focus {
      outline: none;
      border-color: var(--primary-pink);
      box-shadow: 0 0 0 3px rgba(233, 30, 99, 0.1);
    }

    .password-input-group {
      position: relative;
    }

    .password-toggle {
      position: absolute;
      right: 1rem;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      color: var(--text-light);
      cursor: pointer;
      font-size: 1.2rem;
    }

    .password-toggle:hover {
      color: var(--primary-pink);
    }

    .form-options {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .checkbox-label {
      display: flex;
      align-items: center;
      cursor: pointer;
      color: var(--text-dark);
      font-size: 0.9rem;
    }

    .checkbox-label input[type="checkbox"] {
      margin-right: 0.5rem;
    }

    .forgot-password {
      color: var(--primary-pink);
      text-decoration: none;
      font-size: 0.9rem;
    }

    .forgot-password:hover {
      text-decoration: underline;
    }

    .divider {
      text-align: center;
      margin: 2rem 0;
      position: relative;
    }

    .divider::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      height: 1px;
      background: var(--border-light);
    }

    .divider span {
      background: var(--background-white);
      padding: 0 1rem;
      color: var(--text-light);
      font-size: 0.9rem;
    }

    .social-login {
      margin-bottom: 2rem;
    }

    .login-footer {
      text-align: center;
    }

    .login-footer p {
      color: var(--text-medium);
      margin: 0;
    }

    .signup-link {
      color: var(--primary-pink);
      text-decoration: none;
      font-weight: 600;
    }

    .signup-link:hover {
      text-decoration: underline;
    }

    /* Login Benefits */
    .login-benefits {
      padding: 2rem;
    }

    .login-benefits h3 {
      font-size: 2rem;
      color: var(--text-dark);
      margin-bottom: 2rem;
      text-align: center;
    }

    .benefits-list {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .benefit-item {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
    }

    .benefit-item i {
      font-size: 2rem;
      margin-top: 0.25rem;
    }

    .benefit-item h4 {
      margin: 0 0 0.5rem 0;
      color: var(--text-dark);
      font-size: 1.1rem;
    }

    .benefit-item p {
      color: var(--text-medium);
      line-height: 1.6;
      margin: 0;
      font-size: 0.9rem;
    }

    /* Security Section */
    .security-section {
      padding: 6rem 0;
      background: var(--background-white);
    }

    .section-title {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 4rem;
      color: var(--text-dark);
    }

    .security-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .security-card {
      background: var(--background-white);
      border-radius: 16px;
      padding: 2rem;
      text-align: center;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      transition: all 0.3s ease;
      border: 2px solid transparent;
    }

    .security-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
      border-color: var(--primary-pink);
    }

    .security-icon {
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

    .security-card h3 {
      font-size: 1.3rem;
      margin-bottom: 1rem;
      color: var(--text-dark);
    }

    .security-card p {
      color: var(--text-medium);
      line-height: 1.6;
    }

    /* Help Section */
    .help-section {
      padding: 6rem 0;
      background: var(--gradient-spiritual);
      text-align: center;
    }

    .help-content h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: var(--text-dark);
    }

    .help-content p {
      font-size: 1.2rem;
      color: var(--text-medium);
      margin-bottom: 2rem;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .help-actions {
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

      .login-container {
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

      .login-card {
        padding: 2rem;
      }

      .login-header h2 {
        font-size: 2rem;
      }

      .form-options {
        flex-direction: column;
        align-items: flex-start;
      }

      .help-actions {
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

      .security-grid {
        grid-template-columns: 1fr;
      }

      .login-card {
        padding: 1.5rem;
      }
    }
  `]
})
export class LoginComponent {
  loginData = {
    email: '',
    password: '',
    rememberMe: false
  };

  isLoading = false;
  showPassword = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onLogin() {
    this.isLoading = true;
    // Simular proceso de login
    setTimeout(() => {
      this.isLoading = false;
      // Aquí iría la lógica real de autenticación
      console.log('Login attempt:', this.loginData);
    }, 2000);
  }
}
