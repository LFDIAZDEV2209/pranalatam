// features/events/events.routes.ts
import { Routes } from '@angular/router';

export const eventsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/events-list/events-list.component').then(m => m.EventsListComponent)
  }
];

