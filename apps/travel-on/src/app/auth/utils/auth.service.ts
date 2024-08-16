import { Injectable } from '@angular/core';
import { ConfirmationResult, UserCredential } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { StorageKey } from '../../shared/constants';
import {
  clearStorage,
  getFromStorage,
  navigate,
  setToStorage,
} from '../../shared/helpers';
import {
  ConfirmPasswordReset,
  Register,
  SignInEvent,
  SignInMethod,
  User,
} from './auth.model';
import { FireAuthService } from './fireauth.service';

interface EmailLinkData {
  email: string;
  emailLink: string;
}
interface EmailPasswordData {
  email: string;
  password: string;
}

type SignInStrategy = (data?: unknown) => Observable<UserCredential>;

@Injectable({ providedIn: 'root' })
export class AuthService {
  private signInStrategies: Map<SignInMethod, SignInStrategy> = new Map();

  constructor(
    private readonly fireAuthService: FireAuthService,
    private router: Router
  ) {
    this._setSignInMap();
  }

  public register$({ password, email }: Register) {
    return this.fireAuthService.createInWithEmailAndPassword$(email, password);
  }

  // Sign in with different authentication methods based on the provided event.
  public signIn$(event: SignInEvent): Observable<UserCredential> {
    const { method, data } = event;

    return of(method).pipe(
      switchMap((method: SignInMethod) => {
        const strategy = this.signInStrategies.get(method);
        return strategy !== undefined
          ? strategy(data)
          : of({} as UserCredential);
      })
    );
  }

  // Create a new user account with the provided email and password.
  public signInWithEmailAndPassword$(
    email: string,
    password: string
  ): Observable<UserCredential> {
    return this.fireAuthService.signInWithEmailAndPassword$(email, password);
  }

  // Sign in with phone number and recaptcha verification.
  public signInWithPhone$(phone: string): Observable<ConfirmationResult> {
    return this.fireAuthService.signInWithPhone$(phone);
  }

  // Send a sign-in link (magic link) to the provided email.
  public sendSignInLinkToEmail$(email: string): Observable<string> {
    return this.fireAuthService.sendSignInLinkToEmail$(email);
  }

  // Check if the provided email link is a valid sign-in link.
  public isSignInWithEmailLink(emailLink: string): Observable<boolean> {
    return this.fireAuthService.isSignInWithEmailLink$(emailLink);
  }

  public sendResetEmail$(email: string): Observable<void> {
    return this.fireAuthService.sendPasswordResetEmail(email);
  }

  public confirmPasswordReset$({
    oobCode,
    newPassword,
  }: ConfirmPasswordReset): Observable<void> {
    return this.fireAuthService.confirmPasswordReset(oobCode, newPassword);
  }

  public logout(): void {
    clearStorage();
    navigate('/');
  }

  public login(user: User): void {
    setToStorage(StorageKey.LOGGED, true);
    this.router.navigateByUrl('places/' + user.userId);
  }

  public isStorageLogged(): boolean {
    return getFromStorage<boolean>(StorageKey.LOGGED) || false;
  }

  private _setSignInMap() {
    this.signInStrategies.set(SignInMethod.GOOGLE, () =>
      this.fireAuthService.signInWithGoogle$()
    );

    this.signInStrategies.set(SignInMethod.EMAIL_LINK, (data) => {
      const { email, emailLink } = data as EmailLinkData;
      return this.fireAuthService.signInWithEmailLink$(email, emailLink);
    });

    this.signInStrategies.set(SignInMethod.EMAIL_PASSWORD, (data) => {
      const { email, password } = data as EmailPasswordData;
      return this.fireAuthService.signInWithEmailAndPassword$(email, password);
    });
  }
}
