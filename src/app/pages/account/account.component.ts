// pages/account/account.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="account-page">
      <div class="account-header">
        <h1>Mi Cuenta</h1>
        <p>Gestiona tu perfil y preferencias</p>
      </div>
      
      <div class="account-content">
        <div class="account-section">
          <h2>Información Personal</h2>
          <div class="form-group">
            <label for="name">Nombre completo</label>
            <input type="text" id="name" placeholder="Tu nombre completo">
          </div>
          <div class="form-group">
            <label for="email">Correo electrónico</label>
            <input type="email" id="email" placeholder="tu@email.com">
          </div>
          <div class="form-group">
            <label for="phone">Teléfono</label>
            <input type="tel" id="phone" placeholder="+57 300 123 4567">
          </div>
        </div>
        
        <div class="account-section">
          <h2>Preferencias</h2>
          <div class="form-group">
            <label>
              <input type="checkbox"> Recibir notificaciones por email
            </label>
          </div>
          <div class="form-group">
            <label>
              <input type="checkbox"> Recibir notificaciones por SMS
            </label>
          </div>
        </div>
        
        <div class="account-actions">
          <button class="btn btn-primary">Guardar Cambios</button>
          <button class="btn btn-outline">Cancelar</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .account-page {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
    }

    .account-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .account-header h1 {
      font-size: 2.5rem;
      font-weight: 700;
      color: #2d3748;
      margin-bottom: 1rem;
    }

    .account-header p {
      font-size: 1.1rem;
      color: #718096;
    }

    .account-content {
      background: white;
      border-radius: 12px;
      padding: 2rem;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    }

    .account-section {
      margin-bottom: 2rem;
      padding-bottom: 2rem;
      border-bottom: 1px solid #e2e8f0;
    }

    .account-section:last-child {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }

    .account-section h2 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #2d3748;
      margin-bottom: 1.5rem;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-group label {
      display: block;
      font-weight: 500;
      color: #4a5568;
      margin-bottom: 0.5rem;
    }

    .form-group input[type="text"],
    .form-group input[type="email"],
    .form-group input[type="tel"] {
      width: 100%;
      padding: 0.75rem;
      border: 2px solid #e2e8f0;
      border-radius: 8px;
      font-size: 1rem;
      transition: all 0.3s ease;
    }

    .form-group input:focus {
      outline: none;
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }

    .form-group input[type="checkbox"] {
      margin-right: 0.5rem;
    }

    .account-actions {
      display: flex;
      gap: 1rem;
      justify-content: flex-end;
      margin-top: 2rem;
    }

    .btn {
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      border: none;
      font-size: 1rem;
    }

    .btn-primary {
      background: #667eea;
      color: white;
    }

    .btn-primary:hover {
      background: #5a67d8;
    }

    .btn-outline {
      background: transparent;
      color: #667eea;
      border: 2px solid #667eea;
    }

    .btn-outline:hover {
      background: #667eea;
      color: white;
    }

    @media (max-width: 768px) {
      .account-page {
        padding: 1rem;
      }
      
      .account-header h1 {
        font-size: 2rem;
      }
      
      .account-content {
        padding: 1.5rem;
      }
      
      .account-actions {
        flex-direction: column;
      }
    }
  `]
})
export class AccountComponent {}
