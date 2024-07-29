import { Injectable, Injector, inject } from '@angular/core';
import {
  ActionCodeSettings,
  ConfirmationResult,
  UserCredential,
} from '@angular/fire/auth';
import { Observable, from, map } from 'rxjs';
import { generateVerificationLink } from './auth.helpers';

export interface FirebaseError {
  code: string;
  customData: Record<string, unknown>;
  name: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class FireAuthService {
  private readonly injector = inject(Injector);
  // private readonly auth = inject(Auth);

  private loadFirebaseAuth() {
    return import('firebase/auth').then((firebase) => {
      return firebase;
    });
  }

  public createInWithEmailAndPassword$(
    email: string,
    password: string
  ): Observable<UserCredential> {
    return from(
      this.loadFirebaseAuth().then(
        ({ getAuth, createUserWithEmailAndPassword }) => {
          const auth = getAuth();
          return createUserWithEmailAndPassword(auth, email, password);
        }
      )
    );
  }

  // Sign in with phone number and reCAPTCHA verification.
  public signInWithPhone$(phone: string): Observable<ConfirmationResult> {
    return from(
      this.loadFirebaseAuth().then(
        ({ getAuth, signInWithPhoneNumber, RecaptchaVerifier }) => {
          const auth = getAuth();
          const recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha', {
            size: 'invisible',
          });
          return signInWithPhoneNumber(auth, phone, recaptchaVerifier);
        }
      )
    );
  }

  // Send a sign-in link (magic link) to the provided email.
  public sendSignInLinkToEmail$(email: string): Observable<string> {
    const actionCodeSettings: ActionCodeSettings = {
      url: generateVerificationLink(this.injector),
      handleCodeInApp: true,
    };

    return from(
      this.loadFirebaseAuth().then((firebase) => {
        const auth = firebase.getAuth();
        return firebase.sendSignInLinkToEmail(auth, email, actionCodeSettings);
      })
    ).pipe(map(() => email));
  }

  // Check if the provided email link is a valid sign-in link.
  public isSignInWithEmailLink$(emailLink: string): Observable<boolean> {
    return from(
      this.loadFirebaseAuth().then((firebase) => {
        const auth = firebase.getAuth();
        return firebase.isSignInWithEmailLink(auth, emailLink);
      })
    );
  }

  // // Private method: Sign in with Google OAuth provider.
  // public signInWithGoogle$(): Observable<UserCredential> {
  //   return from(signInWithPopup(this.auth, new GoogleAuthProvider()));
  // }

  public signInWithGoogle$(): Observable<UserCredential> {
    return from(
      this.loadFirebaseAuth().then(
        ({ getAuth, signInWithPopup, GoogleAuthProvider }) => {
          const auth = getAuth();
          return signInWithPopup(auth, new GoogleAuthProvider());
        }
      )
      // (async () => {
      //   // Dynamically import Firebase and required modules
      //   const { getAuth, signInWithPopup, GoogleAuthProvider } = await import(
      //     'firebase/auth'
      //   );

      //   // Initialize Firebase Auth
      //   const auth = getAuth();

      //   // Sign in with Google
      // })()
    );
  }

  // Sign in with email link (magic link).
  public signInWithEmailLink$(
    email: string,
    emailLink: string
  ): Observable<UserCredential> {
    return from(
      this.loadFirebaseAuth().then((firebase) => {
        const auth = firebase.getAuth();
        return firebase.signInWithEmailLink(auth, email, emailLink);
      })
    );
  }

  // Sign in with email and password.
  public signInWithEmailAndPassword$(
    email: string,
    password: string
  ): Observable<UserCredential> {
    return from(
      this.loadFirebaseAuth().then((firebase) => {
        const auth = firebase.getAuth();
        return firebase.signInWithEmailAndPassword(auth, email, password);
      })
    );
  }

  // Send password reset email.
  public sendPasswordResetEmail(email: string): Observable<void> {
    return from(
      this.loadFirebaseAuth().then((firebase) => {
        const auth = firebase.getAuth();
        return firebase.sendPasswordResetEmail(auth, email);
      })
    );
  }

  // Confirm password reset.
  public confirmPasswordReset(
    oobCode: string,
    newPassword: string
  ): Observable<void> {
    return from(
      this.loadFirebaseAuth().then((firebase) => {
        const auth = firebase.getAuth();
        return firebase.confirmPasswordReset(auth, oobCode, newPassword);
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
