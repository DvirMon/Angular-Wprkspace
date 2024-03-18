import { DIALOG_DATA } from '@angular/cdk/dialog';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {
  MAT_DIALOG_DATA,
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialogConfig,
} from '@angular/material/dialog';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { appRoutes } from './app.routes';
import { errorInterceptor } from './shared/http/error.interceptor';
import { provideFirebase } from './shared/providers/firebase';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(),
    provideRouter(appRoutes, withComponentInputBinding()),
    provideHttpClient(withInterceptors([errorInterceptor])),
    provideAnimations(),
    provideFirebase(),

    { provide: MAT_DIALOG_DATA, useValue: DIALOG_DATA },
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: MatDialogConfig },
    // importProvidersFrom(
    //   provideFirebaseApp(() =>
    //     initializeApp({
    //       projectId: 'angualr-momorepo',
    //       appId: '1:774318261721:web:5bb4724e745a1f82fd85c8',
    //       storageBucket: 'angualr-momorepo.appspot.com',
    //       apiKey: 'AIzaSyAWUV0htoyCMWzr5kEGRmiWkEasP9oz09E',
    //       authDomain: 'angualr-momorepo.firebaseapp.com',
    //       messagingSenderId: '774318261721',
    //       measurementId: 'G-B0W8GYDKH1',
    //     })
    //   )
    // ),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideFirestore(() => getFirestore())),
  ],
};
