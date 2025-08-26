// layout/header/header.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="header">
      <div class="header-top">
        <div class="container">
          <div class="top-content">
            <div class="contact-info">
              <span><i class="bi bi-telephone me-2"></i>+57 300 123 4567</span>
              <span><i class="bi bi-envelope me-2"></i>info@pranalatam.org</span>
            </div>
            <div class="social-links">
              <a href="#" class="social-link"><i class="bi bi-facebook"></i></a>
              <a href="#" class="social-link"><i class="bi bi-instagram"></i></a>
              <a href="#" class="social-link"><i class="bi bi-youtube"></i></a>
              <a href="#" class="social-link"><i class="bi bi-whatsapp"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div class="header-main">
        <div class="container">
          <div class="header-content">
            <div class="logo-section">
              <div class="logo-icon">
                <i class="bi bi-heart-pulse"></i>
              </div>
              <div class="logo-text">
                <h1 class="logo-title">PRANALATAM</h1>
                <p class="logo-subtitle">FUNDACIÓN SANACIÓN PRÁNICA LATINOAMERICANA</p>
              </div>
            </div>

            <nav class="main-nav">
              <ul class="nav-list">
                <li class="nav-item">
                  <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" class="nav-link">
                    <i class="bi bi-house me-1"></i>Inicio
                  </a>
                </li>
                
                <li class="nav-item dropdown">
                  <a href="#" class="nav-link dropdown-toggle">
                    <i class="bi bi-shop me-1"></i>Tienda<i class="bi bi-chevron-down"></i>
                  </a>
                  <ul class="dropdown-menu">
                    <li><a routerLink="/tienda" class="dropdown-item"><i class="bi bi-grid me-2"></i>Todos los Productos</a></li>
                    <li><a routerLink="/tienda/libros" class="dropdown-item"><i class="bi bi-book me-2"></i>Libros</a></li>
                    <li><a routerLink="/tienda/bolsilibros" class="dropdown-item"><i class="bi bi-journal-text me-2"></i>Bolsilibros</a></li>
                    <li><a routerLink="/tienda/mantras" class="dropdown-item"><i class="bi bi-music-note-beamed me-2"></i>Mantras</a></li>
                    <li><a routerLink="/tienda/meditacion-corazones-gemelos" class="dropdown-item"><i class="bi bi-heart me-2"></i>Corazones Gemelos</a></li>
                    <li><a routerLink="/tienda/meditaciones-arhatic" class="dropdown-item"><i class="bi bi-person-meditation me-2"></i>Arhatic</a></li>
                    <li><a routerLink="/tienda/meditaciones-especiales" class="dropdown-item"><i class="bi bi-stars me-2"></i>Especiales</a></li>
                  </ul>
                </li>

                <li class="nav-item dropdown">
                  <a href="#" class="nav-link dropdown-toggle">
                    <i class="bi bi-calendar-event me-1"></i>Eventos<i class="bi bi-chevron-down"></i>
                  </a>
                  <ul class="dropdown-menu">
                    <li><a routerLink="/eventos" class="dropdown-item"><i class="bi bi-calendar-week me-2"></i>Todos</a></li>
                    <li><a routerLink="/eventos/retiros" class="dropdown-item"><i class="bi bi-house-heart me-2"></i>Retiros</a></li>
                    <li><a routerLink="/eventos/talleres" class="dropdown-item"><i class="bi bi-calendar-week me-2"></i>Talleres</a></li>
                    <li><a routerLink="/eventos/certificaciones" class="dropdown-item"><i class="bi bi-award me-2"></i>Certificaciones</a></li>
                    <li><a routerLink="/eventos/encuentros" class="dropdown-item"><i class="bi bi-people me-2"></i>Encuentros</a></li>
                  </ul>
                </li>

                <li class="nav-item dropdown">
                  <a href="#" class="nav-link dropdown-toggle">
                    <i class="bi bi-mortarboard me-1"></i>Formación<i class="bi bi-chevron-down"></i>
                  </a>
                  <ul class="dropdown-menu">
                    <li><a routerLink="/cursos" class="dropdown-item"><i class="bi bi-mortarboard me-2"></i>Cursos</a></li>
                    <li><a routerLink="/meditaciones" class="dropdown-item"><i class="bi bi-headphones me-2"></i>Meditaciones</a></li>
                  </ul>
                </li>

                <li class="nav-item dropdown">
                  <a href="#" class="nav-link dropdown-toggle">
                    <i class="bi bi-cart-check me-1"></i>Comprar<i class="bi bi-chevron-down"></i>
                  </a>
                  <ul class="dropdown-menu">
                    <li><a routerLink="/comprar" class="dropdown-item"><i class="bi bi-cart me-2"></i>Proceso de Compra</a></li>
                    <li><a routerLink="/comprar#categorias" class="dropdown-item"><i class="bi bi-grid me-2"></i>Categorías</a></li>
                    <li><a routerLink="/comprar#metodos-pago" class="dropdown-item"><i class="bi bi-credit-card me-2"></i>Métodos de Pago</a></li>
                    <li><a routerLink="/comprar#envio" class="dropdown-item"><i class="bi bi-truck me-2"></i>Envío</a></li>
                  </ul>
                </li>

                <li class="nav-item dropdown">
                  <a href="#" class="nav-link dropdown-toggle">
                    <i class="bi bi-three-dots me-1"></i>Más<i class="bi bi-chevron-down"></i>
                  </a>
                  <ul class="dropdown-menu">
                    <li><a routerLink="/acerca" class="dropdown-item"><i class="bi bi-info-circle me-2"></i>Acerca</a></li>
                    <li><a routerLink="/contacto" class="dropdown-item"><i class="bi bi-envelope me-2"></i>Contacto</a></li>
                  </ul>
                </li>
              </ul>
            </nav>

            <div class="header-actions">
              <button class="icon-btn" (click)="toggleSearch()" aria-label="Buscar">
                <i class="bi bi-search"></i>
              </button>
              <div class="user-actions compact">
                <a routerLink="/login" class="user-btn" aria-label="Iniciar Sesión">
                  <i class="bi bi-person-circle"></i>
                </a>
                <a routerLink="/donaciones" class="donate-btn" aria-label="Donar">
                  <i class="bi bi-heart"></i>
                </a>
              </div>

              <button class="mobile-menu-toggle" (click)="toggleMobileMenu()">
                <i class="bi bi-list"></i>
              </button>

              <div class="search-popover" *ngIf="isSearchOpen">
                <input type="text" placeholder="Buscar..." class="search-input-pop">
                <button class="close-search" (click)="toggleSearch()" aria-label="Cerrar búsqueda">
                  <i class="bi bi-x"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mobile-menu" [class.active]="isMobileMenuOpen">
        <div class="mobile-menu-header">
          <h3>Menú</h3>
          <button class="close-btn" (click)="closeMobileMenu()">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>
        
        <nav class="mobile-nav">
          <ul class="mobile-nav-list">
            <li><a routerLink="/" (click)="closeMobileMenu()" class="mobile-nav-link"><i class="bi bi-house me-2"></i>Inicio</a></li>
            <li><a routerLink="/tienda" (click)="closeMobileMenu()" class="mobile-nav-link"><i class="bi bi-shop me-2"></i>Tienda</a></li>
            <li><a routerLink="/eventos" (click)="closeMobileMenu()" class="mobile-nav-link"><i class="bi bi-calendar-event me-2"></i>Eventos</a></li>
            <li><a routerLink="/comprar" (click)="closeMobileMenu()" class="mobile-nav-link"><i class="bi bi-cart-check me-2"></i>Comprar</a></li>
            <li><a routerLink="/cursos" (click)="closeMobileMenu()" class="mobile-nav-link"><i class="bi bi-mortarboard me-2"></i>Cursos</a></li>
            <li><a routerLink="/meditaciones" (click)="closeMobileMenu()" class="mobile-nav-link"><i class="bi bi-headphones me-2"></i>Meditaciones</a></li>
            <li><a routerLink="/acerca" (click)="closeMobileMenu()" class="mobile-nav-link"><i class="bi bi-info-circle me-2"></i>Acerca</a></li>
            <li><a routerLink="/contacto" (click)="closeMobileMenu()" class="mobile-nav-link"><i class="bi bi-envelope me-2"></i>Contacto</a></li>
            <li><a routerLink="/login" (click)="closeMobileMenu()" class="mobile-nav-link"><i class="bi bi-person-circle me-2"></i>Iniciar Sesión</a></li>
            <li><a routerLink="/donaciones" (click)="closeMobileMenu()" class="mobile-nav-link"><i class="bi bi-heart me-2"></i>Donar</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    .header { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; background: var(--background-white); box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1); }
    .header-top { background: var(--gradient-primary); color: white; padding: 0.5rem 0; font-size: 0.9rem; }
    .top-content { display: flex; justify-content: space-between; align-items: center; }
    .contact-info { display: flex; gap: 2rem; }
    .contact-info span { display: flex; align-items: center; }
    .social-links { display: flex; gap: 1rem; }
    .social-link { color: white; text-decoration: none; font-size: 1.1rem; transition: opacity 0.3s ease; }
    .social-link:hover { opacity: 0.8; }

    .header-main { padding: 0.6rem 0; }
    .header-content { display: flex; align-items: center; justify-content: space-between; }

    .logo-section { display: flex; align-items: center; gap: 0.75rem; }
    .logo-icon { width: 46px; height: 46px; background: var(--gradient-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.3rem; }
    .logo-title { font-size: 1.35rem; font-weight: 700; color: var(--primary-pink); margin: 0; line-height: 1; }
    .logo-subtitle { font-size: 0.75rem; color: var(--text-medium); margin: 0; line-height: 1; }

    .main-nav { flex: 1; display: flex; justify-content: center; }
    .nav-list { display: flex; list-style: none; margin: 0; padding: 0; gap: 1rem; }
    .nav-item { position: relative; }
    .nav-link { display: flex; align-items: center; color: var(--text-dark); text-decoration: none; font-weight: 500; padding: 0.35rem 0.75rem; border-radius: 8px; transition: all 0.2s ease; }
    .nav-link i { margin-right: 0.45rem; }
    .nav-link:hover, .nav-link.active { color: var(--primary-pink); background: rgba(233, 30, 99, 0.08); }

    .dropdown-toggle { cursor: pointer; }
    .dropdown-toggle .bi-chevron-down { margin-left: 0.45rem; transition: transform 0.2s ease; }
    .dropdown:hover .dropdown-toggle .bi-chevron-down { transform: rotate(180deg); }

    .dropdown-menu { position: absolute; top: 100%; left: 0; background: var(--background-white); border-radius: 12px; box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15); min-width: 220px; opacity: 0; visibility: hidden; transform: translateY(-8px); transition: all 0.2s ease; padding: 0.5rem 0; z-index: 1001; }
    .dropdown:hover .dropdown-menu { opacity: 1; visibility: visible; transform: translateY(0); }
    .dropdown-item { display: flex; align-items: center; padding: 0.6rem 1rem; color: var(--text-dark); text-decoration: none; transition: all 0.2s ease; }
    .dropdown-item i { margin-right: 0.5rem; }
    .dropdown-item:hover { background: var(--background-light); color: var(--primary-pink); transform: translateX(4px); }

    .header-actions { display: flex; align-items: center; gap: 0.6rem; position: relative; }
    .icon-btn { background: var(--background-light); border: 1px solid var(--border-light); color: var(--text-dark); padding: 0.5rem; border-radius: 10px; cursor: pointer; }
    .icon-btn:hover { background: var(--primary-pink); color: white; border-color: var(--primary-pink); }

    .user-actions.compact { display: flex; gap: 0.8rem; }
    .user-btn, .donate-btn { display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 0.8rem; border-radius: 10px; text-decoration: none; font-weight: 500; }
    .user-btn { background: var(--background-light); color: var(--text-dark); border: 1px solid var(--border-light); }
    .user-btn:hover { background: var(--primary-pink); color: white; border-color: var(--primary-pink); }
    .donate-btn { background: var(--primary-pink); color: white; }
    .donate-btn:hover { background: var(--primary-orange); }

    .mobile-menu-toggle { display: none; background: none; border: none; font-size: 1.5rem; color: var(--text-dark); cursor: pointer; }

    .search-popover { position: absolute; top: 100%; right: 0; margin-top: 0.5rem; background: var(--background-white); border: 1px solid var(--border-light); box-shadow: 0 8px 30px rgba(0,0,0,0.15); padding: 0.5rem; border-radius: 10px; display: flex; align-items: center; gap: 0.5rem; z-index: 1100; }
    .search-input-pop { width: 220px; padding: 0.5rem; border: 1px solid var(--border-light); border-radius: 8px; }
    .close-search { background: var(--background-light); border: 1px solid var(--border-light); border-radius: 8px; padding: 0.35rem; cursor: pointer; }

    @media (max-width: 1200px) {
      .nav-list { gap: 0.8rem; }
      .nav-link { padding: 0.3rem 0.6rem; }
      .logo-subtitle { display: none; }
    }

    @media (max-width: 900px) {
      .main-nav { display: none; }
      .mobile-menu-toggle { display: block; }
      .user-actions.compact { display: none; }
      .icon-btn { padding: 0.45rem; }
      .search-popover { right: 1rem; }
    }

    .mobile-menu { position: fixed; top: 0; left: -100%; width: 100%; height: 100vh; background: var(--background-white); transition: left 0.3s ease; z-index: 1002; overflow-y: auto; }
    .mobile-menu.active { left: 0; }
    .mobile-menu-header { display: flex; justify-content: space-between; align-items: center; padding: 2rem; border-bottom: 1px solid var(--border-light); }
    .mobile-nav { padding: 2rem; }
    .mobile-nav-list { list-style: none; margin: 0; padding: 0; }
    .mobile-nav-link { display: flex; align-items: center; padding: 1rem 0; color: var(--text-dark); text-decoration: none; border-bottom: 1px solid var(--border-light); transition: color 0.2s ease; }
    .mobile-nav-link:hover { color: var(--primary-pink); }
  `]
})
export class HeaderComponent {
  isMobileMenuOpen = false;
  isSearchOpen = false;

  toggleMobileMenu() { this.isMobileMenuOpen = !this.isMobileMenuOpen; }
  closeMobileMenu() { this.isMobileMenuOpen = false; }
  toggleSearch() { this.isSearchOpen = !this.isSearchOpen; }
}