import { Injectable, Injector, inject } from '@angular/core';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
} from '@angular/fire/auth';
import { Observable, defer, from, switchMap } from 'rxjs';

export interface FirebaseError {
  code: string;
  customData: Record<string, unknown>;
  name: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class FireAuthService {
  #loadFirebaseAuth() {
    return from(
      import('firebase/auth').then((firebase) => {
        return firebase;
      })
    );
  }
  public createInWithEmailAndPassword$(
    email: string,
    password: string
  ): Observable<UserCredential> {
    return this.#loadFirebaseAuth().pipe(
      switchMap(({ getAuth, createUserWithEmailAndPassword }) => {
        const auth = getAuth();
        // Use 'from' to convert the promise to an observable
        return defer(() =>
          createUserWithEmailAndPassword(auth, email, password)
        );
      })
    );
  }
  // Check if the provided email link is a valid sign-in link.
  public signInWithGoogle$(): Observable<UserCredential> {
    return this.#loadFirebaseAuth().pipe(
      switchMap(({ getAuth, signInWithPopup, GoogleAuthProvider }) => {
        const auth = getAuth();
        return from(signInWithPopup(auth, new GoogleAuthProvider()));
      })
    );
  }

  // Sign in with email and password.
  public signInWithEmailAndPassword$(
    email: string,
    password: string
  ): Observable<UserCredential> {
    return this.#loadFirebaseAuth().pipe(
      switchMap(({ getAuth, signInWithEmailAndPassword }) => {
        const auth = getAuth();
        const userCredential = signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        return defer(() => userCredential);
      })
    );
  }

  // Send password reset email.
  public sendPasswordResetEmail(email: string): Observable<void> {
    return this.#loadFirebaseAuth().pipe(
      switchMap((firebase) => {
        const auth = firebase.getAuth();
        return defer(() => firebase.sendPasswordResetEmail(auth, email));
      })
    );
  }

  // Confirm password reset.
  public confirmPasswordReset(
    oobCode: string,
    newPassword: string
  ): Observable<void> {
    return this.#loadFirebaseAuth().pipe(
      switchMap((firebase) => {
        const auth = firebase.getAuth();
        return defer(() =>
          firebase.confirmPasswordReset(auth, oobCode, newPassword)
        );
      })
    );
  }

  // public confirmPasswordResetEager(
  //   oobCode: string,
  //   newPassword: string
  // ): Observable<void> {
  //   return from(confirmPasswordReset(this.auth, oobCode, newPassword));
  // }
}
