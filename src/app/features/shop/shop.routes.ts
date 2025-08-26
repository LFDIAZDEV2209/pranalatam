// features/shop/shop.routes.ts
import { Routes } from '@angular/router';
import { ShopListComponent } from './components/shop-list/shop-list.component';

export const shopRoutes: Routes = [
  {
    path: '',
    component: ShopListComponent
  },
  {
    path: 'libros',
    component: ShopListComponent
  },
  {
    path: 'bolsilibros',
    component: ShopListComponent
  },
  {
    path: 'mantras',
    component: ShopListComponent
  },
  {
    path: 'meditacion-corazones-gemelos',
    component: ShopListComponent
  },
  {
    path: 'meditaciones-arhatic',
    component: ShopListComponent
  },
  {
    path: 'meditaciones-especiales',
    component: ShopListComponent
  }
];

