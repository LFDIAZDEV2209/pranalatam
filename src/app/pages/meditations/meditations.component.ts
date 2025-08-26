// pages/meditations/meditations.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-meditations',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="meditations-container">
      <section class="hero-section">
        <div class="hero-content">
          <h1 class="hero-title">Meditaciones Guiadas</h1>
          <p class="hero-subtitle">Encuentra paz interior y transformación espiritual</p>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .meditations-container {
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
  `]
})
export class MeditationsComponent {}

