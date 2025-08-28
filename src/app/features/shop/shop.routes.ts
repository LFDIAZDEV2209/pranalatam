// features/shop/shop.routes.ts
import { Routes } from '@angular/router';

export const shopRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/shop-list/shop-list.component').then(m => m.ShopListComponent)
  },
  {
    path: 'libros',
    loadComponent: () => import('./components/shop-list/shop-list.component').then(m => m.ShopListComponent)
  },
  {
    path: 'bolsilibros',
    loadComponent: () => import('./components/shop-list/shop-list.component').then(m => m.ShopListComponent)
  },
  {
    path: 'mantras',
    loadComponent: () => import('./components/shop-list/shop-list.component').then(m => m.ShopListComponent)
  },
  {
    path: 'meditacion-corazones-gemelos',
    loadComponent: () => import('./components/shop-list/shop-list.component').then(m => m.ShopListComponent)
  },
  {
    path: 'meditaciones-arhatic',
    loadComponent: () => import('./components/shop-list/shop-list.component').then(m => m.ShopListComponent)
  },
  {
    path: 'meditaciones-especiales',
    loadComponent: () => import('./components/shop-list/shop-list.component').then(m => m.ShopListComponent)
  }
];

