// pages/about/about.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="about-container">
      <section class="hero-section">
        <div class="hero-content">
          <h1 class="hero-title">Acerca de Pranalatam</h1>
          <p class="hero-subtitle">Transformando vidas a través de la Sanación Pránica</p>
        </div>
      </section>
      
      <section class="content-section">
        <div class="container">
          <h2>Nuestra Misión</h2>
          <p>Pranalatam se dedica a difundir las enseñanzas de Master Choa Kok Sui y la Sanación Pránica en América Latina.</p>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .about-container {
      min-height: 100vh;
    }

    .hero-section {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 4rem 2rem;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 60vh;
    }

    .hero-title {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    .hero-subtitle {
      font-size: 1.25rem;
      opacity: 0.9;
    }

    .content-section {
      padding: 4rem 2rem;
      background: white;
    }

    .container {
      max-width: 800px;
      margin: 0 auto;
    }

    h2 {
      color: #2d3748;
      margin-bottom: 1rem;
    }

    p {
      color: #4a5568;
      line-height: 1.6;
    }
  `]
})
export class AboutComponent {}

