import { inject, Injectable } from '@angular/core';
import { UserCredential } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { SignInEvent, SignInMethod, User } from '../../auth';
import { SignInService } from '../../auth/utils/sign-in.service';
import { StorageKey } from '../../shared/constants';
import { clearStorage, navigate, setToStorage } from '../../shared/helpers';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  readonly #signInService = inject(SignInService);
  readonly #router = inject(Router);

  // Sign in with different authentication methods based on the provided event.
  public signIn$(event: SignInEvent): Observable<UserCredential> {
    const { method, data } = event;

    return of(method).pipe(
      switchMap((method: SignInMethod) => {
        const strategy = this.#signInService.getSignInStrategy(method);
        return strategy !== undefined
          ? strategy(data)
          : of({} as UserCredential);
      })
    );
  }

  public onLogout(): void {
    clearStorage();
    navigate('/');
  }

  public onLogin(user: User): void {
    setToStorage(StorageKey.LOGGED, true);
    this.#router.navigateByUrl('places/' + user.userId);
  }
}