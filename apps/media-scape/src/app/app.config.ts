import { ApplicationConfig, ErrorHandler } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { errorInterceptor } from './shared/interceptors/error.interceptor';
import { ErrorsService } from './shared/error.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(withInterceptors([errorInterceptor])),
    provideAnimationsAsync(),
    provideAnimationsAsync(),
    {
      provide: ErrorHandler,
      useClass: ErrorsService,
    },
  ],
};
