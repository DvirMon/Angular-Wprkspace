import { inject, Injectable } from '@angular/core';
import { UserCredential } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { FireAuthService, SignInMethod } from '../../auth';
import { debugTap } from '../../shared/operators/debug';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../shared/tokens';

interface EmailLinkData {
  email: string;
  emailLink: string;
}

interface EmailPasswordData {
  email: string;
  password: string;
}

type SignInStrategy = (data?: unknown) => Observable<UserCredential>;

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  readonly #fireAuthService = inject(FireAuthService);

  readonly #signInStrategies: Map<SignInMethod, SignInStrategy> = new Map();

  readonly #http = inject(HttpClient);

  readonly apiUrl = inject(API_URL);

  constructor() {
    this.#setSignInMap();
  }

  public getSignInStrategy(method: SignInMethod): SignInStrategy | undefined {
    return this.#signInStrategies.get(method);
  }

  public verifyToken(cred: UserCredential, idToken: string) {
    return this.#http.post<UserCredential>(
      `${this.apiUrl}/users/profile`,
      { cred },
      {
        headers: {
          Authorization: `Bearer ${idToken}`,
          'Content-Type': 'application/json',
        },
      }
    );
  }

  #setSignInMap() {
    this.#signInStrategies.set(SignInMethod.GOOGLE, () =>
      this.#fireAuthService.signInWithGoogle$()
    );

    this.#signInStrategies.set(SignInMethod.EMAIL_PASSWORD, (data: unknown) => {
      const { email, password } = data as EmailPasswordData;
      return this.#fireAuthService.signInWithEmailAndPassword$(email, password);
    });
  }
}
