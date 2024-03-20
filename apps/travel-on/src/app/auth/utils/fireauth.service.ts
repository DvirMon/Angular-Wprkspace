import { Injectable } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  UserCredential
} from '@angular/fire/auth';
import { Observable, from } from 'rxjs';
import { getFireAuth } from './auth.imports';

export interface FirebaseError {
  code: string;
  customData: Record<string, unknown>;
  name: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class FireAuthService {

  // Create a new user account with the provided email and password.
  public createInWithEmailAndPassword$(
    email: string,
    password: string
  ): Observable<UserCredential> {
    return from(
      import('firebase/auth').then(
        ({ getAuth, createUserWithEmailAndPassword }) => {
          const auth: Auth = getAuth();
          return createUserWithEmailAndPassword(auth, email, password);
        }
      )
    );
  }

  public signInWithGoogle$(): Observable<UserCredential> {
    return from(
      getFireAuth().then(({ getAuth, signInWithPopup }) => {
        const auth: Auth = getAuth();
        return signInWithPopup(auth, new GoogleAuthProvider());
      })
    );
  }

  // Private method: Sign in with email and password.
  public signInWithEmailAndPassword$(
    email: string,
    password: string
  ): Observable<UserCredential> {
    return from(
      import('firebase/auth').then(
        ({ getAuth, signInWithEmailAndPassword }) => {
          const auth: Auth = getAuth();
          return signInWithEmailAndPassword(auth, email, password);
        }
      )
    );
  }
  // Public method: Send password reset email.
  public sendPasswordResetEmail(email: string): Observable<void> {
    return from(
      import('firebase/auth').then(({ getAuth, sendPasswordResetEmail }) => {
        const auth: Auth = getAuth();

        return sendPasswordResetEmail(auth, email);
      })
    );
  }

  public confirmPasswordReset(
    oobCode: string,
    newPassword: string
  ): Observable<void> {
    return from(
      import('firebase/auth').then(({ getAuth, confirmPasswordReset }) => {
        const auth: Auth = getAuth();

        return confirmPasswordReset(auth, oobCode, newPassword);
      })
    );
  }
}
