import { DIALOG_DATA } from "@angular/cdk/dialog";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import {
  MAT_DIALOG_DATA,
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialogConfig,
} from "@angular/material/dialog";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideRouter, withComponentInputBinding } from "@angular/router";
import { appRoutes } from "./app.routes";
import { errorInterceptor } from "./shared/http/error.interceptor";
import { provideFirebase } from "./shared/providers/firebase";

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(),
    provideRouter(appRoutes, withComponentInputBinding()),
    provideHttpClient(withInterceptors([errorInterceptor])),
    provideAnimations(),
    provideFirebase(),

    { provide: MAT_DIALOG_DATA, useValue: DIALOG_DATA },
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: MatDialogConfig },
  ],
};
