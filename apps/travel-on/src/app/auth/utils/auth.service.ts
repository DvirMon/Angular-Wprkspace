import { inject, Injectable } from '@angular/core';
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
import { SignInService } from './sign-in.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly signInService = inject(SignInService);
  private readonly fireAuthService = inject(FireAuthService);
  private readonly router = inject(Router);

  public register$({ password, email }: Register) {
    return this.fireAuthService.createInWithEmailAndPassword$(email, password);
  }

  // Sign in with different authentication methods based on the provided event.
  public signIn$(event: SignInEvent): Observable<UserCredential> {
    const { method, data } = event;

    return of(method).pipe(
      switchMap((method: SignInMethod) => {
        const strategy = this.signInService.getSignInStrategy(method);
        return strategy !== undefined
          ? strategy(data)
          : of({} as UserCredential);
      })
    );
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
}
