// features/shop/shop.routes.ts
import { Routes } from '@angular/router';
import { ShopListComponent } from './components/shop-list/shop-list.component';
import { ShopSpecialComponent } from './components/shop-special/shop-special.component';

export const SHOP_ROUTES: Routes = [
  {
    path: '',
    component: ShopListComponent,
  },
  {
    path: 'libros',
    component: ShopListComponent,
  },
  {
    path: 'bolsilibros',
    component: ShopListComponent,
  },
  {
    path: 'mantras',
    component: ShopListComponent,
  },
  {
    path: 'especial',
    component: ShopSpecialComponent,
  },
  {
    path: 'corazones-gemelos',
    component: ShopSpecialComponent,
  },
  {
    path: 'arhatic',
    component: ShopSpecialComponent,
  },
  {
    path: 'especiales',
    component: ShopSpecialComponent,
  }
];

