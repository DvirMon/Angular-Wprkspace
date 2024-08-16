import { inject, Injectable } from '@angular/core';
import { UserCredential } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { FireAuthService, SignInMethod } from '../../auth';

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
  private readonly fireAuthService = inject(FireAuthService);

  private readonly signInStrategies: Map<SignInMethod, SignInStrategy> =
    new Map();

  constructor() {
    this._setSignInMap();
  }

  public getSignInStrategy(method: SignInMethod): SignInStrategy | undefined {
    return this.signInStrategies.get(method);
  }

  private _setSignInMap() {
    this.signInStrategies.set(SignInMethod.GOOGLE, () =>
      this.fireAuthService.signInWithGoogle$()
    );
    this.signInStrategies.set(SignInMethod.EMAIL_LINK, (data: unknown) => {
      const { email, emailLink } = data as EmailLinkData;
      return this.fireAuthService.signInWithEmailLink$(email, emailLink);
    });
    this.signInStrategies.set(SignInMethod.EMAIL_PASSWORD, (data: unknown) => {
      const { email, password } = data as EmailPasswordData;
      return this.fireAuthService.signInWithEmailAndPassword$(email, password);
    });
  }
}
