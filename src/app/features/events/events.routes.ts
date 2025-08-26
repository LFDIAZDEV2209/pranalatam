// features/events/events.routes.ts
import { Routes } from '@angular/router';

export const eventsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/events-list/events-list.component').then(m => m.EventsListComponent)
  },
  {
    path: 'retiros',
    loadComponent: () => import('./components/events-list/events-list.component').then(m => m.EventsListComponent)
  },
  {
    path: 'talleres',
    loadComponent: () => import('./components/events-list/events-list.component').then(m => m.EventsListComponent)
  },
  {
    path: 'certificaciones',
    loadComponent: () => import('./components/events-list/events-list.component').then(m => m.EventsListComponent)
  },
  {
    path: 'encuentros',
    loadComponent: () => import('./components/events-list/events-list.component').then(m => m.EventsListComponent)
  },
  {
    path: 'retiro-arhatic-2025',
    loadComponent: () => import('./components/events-list/events-list.component').then(m => m.EventsListComponent)
  }
];

