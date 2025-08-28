// features/shop/components/shop-list/shop-list.component.ts
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shop-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css'],
})
export class ShopListComponent implements OnInit, AfterViewInit {
  currentCategory: string = '';
  showBooks: boolean = false;
  showBolsilibros: boolean = false;
  showMantras: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Detectar la categoría actual basada en la URL
    this.route.url.subscribe(segments => {
      if (segments.length > 0) {
        this.currentCategory = segments[0].path;
        this.updateVisibility();
      }
    });
  }

  ngAfterViewInit() {
    // Hacer scroll automático a la sección correspondiente después de que la vista se haya renderizado
    setTimeout(() => {
      this.scrollToCategorySection();
    }, 100);
  }

  private updateVisibility() {
    this.showBooks = this.currentCategory === 'libros';
    this.showBolsilibros = this.currentCategory === 'bolsilibros';
    this.showMantras = this.currentCategory === 'mantras';
  }

  private scrollToCategorySection() {
    if (!this.currentCategory) return;

    let targetSection: string = '';
    
    switch (this.currentCategory) {
      case 'libros':
        targetSection = 'featured-books-section';
        break;
      case 'bolsilibros':
        targetSection = 'bolsilibros-section';
        break;
      case 'mantras':
        targetSection = 'mantras-section';
        break;
      default:
        return;
    }

    const element = document.querySelector(`.${targetSection}`);
    if (element) {
      const headerHeight = 120; // Altura aproximada del header fijo
      const elementPosition = (element as HTMLElement).offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }

  // Método para navegar a la categoría especial
  goToSpecial() {
    this.router.navigate(['/tienda/especial']);
  }

  // Método para navegar a la página de meditaciones
  goToMeditations() {
    this.router.navigate(['/meditaciones']);
  }
}

