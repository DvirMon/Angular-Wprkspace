import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../../../environments/environment';
import { EnvironmentProviders } from '@angular/core';

export function provideFirebase(): EnvironmentProviders[] {
  return [
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ];
}
