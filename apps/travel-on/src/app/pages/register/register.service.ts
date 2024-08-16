import { inject, Injectable } from '@angular/core';
import { FireAuthService, Register } from '../../auth';
import { Observable } from 'rxjs';
import { UserCredential } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  readonly #fireAuthService = inject(FireAuthService);

  public register$({ password, email }: Register): Observable<UserCredential> {
    return this.#fireAuthService.createInWithEmailAndPassword$(email, password);
  }
}