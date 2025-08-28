// features/shop/components/shop-special/shop-special.component.ts
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shop-special',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './shop-special.component.html',
  styleUrls: ['./shop-special.component.css'],
})
export class ShopSpecialComponent implements OnInit, AfterViewInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Manejar navegación directa a secciones específicas
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        setTimeout(() => {
          this.scrollToSection(fragment);
        }, 100);
      }
    });

    // Detectar si se navegó directamente a una ruta específica
    this.route.url.subscribe(segments => {
      if (segments.length > 0) {
        const route = segments[0].path;
        this.handleDirectRouteNavigation(route);
      }
    });
  }

  ngAfterViewInit() {
    // Configurar navegación suave y enlaces activos
    this.setupNavigation();
    
    // Hacer scroll automático si se navegó directamente a una ruta específica
    setTimeout(() => {
      this.handleDirectRouteNavigation(this.route.snapshot.url[0]?.path || '');
    }, 100);
  }

  private handleDirectRouteNavigation(route: string) {
    let targetSection = '';
    
    switch (route) {
      case 'corazones-gemelos':
        targetSection = 'corazones-gemelos';
        break;
      case 'arhatic':
        targetSection = 'arhatic';
        break;
      case 'especiales':
        targetSection = 'especiales';
        break;
      default:
        return;
    }

    if (targetSection) {
      setTimeout(() => {
        this.scrollToSection(targetSection);
        this.updateActiveLinkBySection(targetSection);
      }, 200);
    }
  }

  private updateActiveLinkBySection(sectionId: string) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href')?.substring(1);
      if (href === sectionId) {
        link.classList.add('active');
      }
    });
  }

  private setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.special-section');

    // Navegación suave
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href')?.substring(1);
        if (targetId) {
          this.scrollToSection(targetId);
          this.updateActiveLink(link as HTMLElement);
        }
      });
    });

    // Actualizar enlaces activos al hacer scroll
    window.addEventListener('scroll', () => {
      this.updateActiveLinkOnScroll();
    });
  }

  private scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 120; // Altura aproximada del header fijo
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }

  private updateActiveLink(activeLink: HTMLElement) {
    // Remover clase active de todos los enlaces
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
    });
    
    // Agregar clase active al enlace clickeado
    activeLink.classList.add('active');
  }

  private updateActiveLinkOnScroll() {
    const sections = document.querySelectorAll('.special-section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = (section as HTMLElement).offsetTop;
      const sectionHeight = (section as HTMLElement).offsetHeight;
      const sectionId = section.getAttribute('id') || '';
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href')?.substring(1);
      if (href === current) {
        link.classList.add('active');
      }
    });
  }
}
