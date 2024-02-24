import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(),
    provideStore(),
    provideClientHydration(),
    provideRouter(appRoutes),
    provideAnimationsAsync(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
],
};
