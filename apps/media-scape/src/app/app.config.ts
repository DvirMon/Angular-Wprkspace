import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, ErrorHandler } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideFilters } from 'ng-filters-service/providers';
import { appRoutes } from './app.routes';
import { ErrorsService } from './shared/error.service';
import { errorInterceptor } from './shared/interceptors/error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withComponentInputBinding()),
    provideHttpClient(withInterceptors([errorInterceptor])),
    provideAnimationsAsync(),
    {
      provide: ErrorHandler,
      useClass: ErrorsService,
    },
    provideFilters({ logicalOperator: 'OR' }),
  ],
};
