// main.ts
import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app';
import { routes } from './app/app.routes';
import { provideZoneChangeDetection } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideZoneChangeDetection()
  ]
}).catch(err => console.error(err));

