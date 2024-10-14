import { inject, Injectable } from '@angular/core';
import { FireAuthService, Register } from '../../auth';
import { Observable } from 'rxjs';
import { UserCredential } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../shared/tokens';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  readonly #fireAuthService = inject(FireAuthService);

  readonly #http = inject(HttpClient);
  readonly #apiUrl = inject(API_URL);

  readonly #url = this.#apiUrl + '/auth/register';

  public register$({ password, email }: Register): Observable<UserCredential> {
    return this.#http.post<UserCredential>(this.#url, { email, password });
  }
}
