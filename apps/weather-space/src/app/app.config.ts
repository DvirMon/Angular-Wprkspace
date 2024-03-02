import {
  ApplicationConfig,
  ErrorHandler,
  importProvidersFrom,
} from '@angular/core';

import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptors,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';

import { appRoutes } from './app.routs';
import { HttpErrorInterceptor } from './utilities/interceptors/error.interceptor';
import { ErrorsService } from './utilities/services/error.service';

import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule),
    provideRouter(appRoutes),
    provideAnimations(),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptorsFromDi(), withInterceptors([])),
    provideToastr(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
    {
      provide: ErrorHandler,
      useClass: ErrorsService,
    },
  ],
};
