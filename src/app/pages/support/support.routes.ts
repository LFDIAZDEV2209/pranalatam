// pages/support/support.routes.ts
import { Routes } from '@angular/router';

export const supportRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./support.component').then(m => m.SupportComponent)
  }
];

