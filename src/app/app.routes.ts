// app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'acerca',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./features/courses/courses.routes').then(m => m.coursesRoutes)
  },
  {
    path: 'eventos',
    loadChildren: () => import('./features/events/events.routes').then(m => m.eventsRoutes)
  },
  {
    path: 'tienda',
    loadChildren: () => import('./features/shop/shop.routes').then(m => m.shopRoutes)
  },
  {
    path: 'comprar',
    loadComponent: () => import('./pages/buy/buy.component').then(m => m.BuyComponent)
  },
  {
    path: 'meditaciones',
    loadComponent: () => import('./pages/meditations/meditations.component').then(m => m.MeditationsComponent)
  },
  {
    path: 'soporte',
    loadChildren: () => import('./pages/support/support.routes').then(m => m.supportRoutes)
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: 'donaciones',
    loadComponent: () => import('./pages/donations/donations.component').then(m => m.DonationsComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];