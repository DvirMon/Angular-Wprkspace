import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, ErrorHandler, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { appRoutes } from './app.routes';
import { ErrorsService } from './shared/error.service';
import { errorInterceptor } from './shared/http/error.interceptor';
import { provideFirebase } from './shared/providers/firebase';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(appRoutes, withComponentInputBinding()),
    provideHttpClient(withInterceptors([errorInterceptor])),
    provideAnimations(),
    provideFirebase(),
    {
      provide: ErrorHandler,
      useClass: ErrorsService,
    },
  ],
};
