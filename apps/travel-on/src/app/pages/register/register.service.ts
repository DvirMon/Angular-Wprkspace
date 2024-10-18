import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FireAuthService, Register, User } from '../../auth';
import { API_URL } from '../../shared/tokens';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  readonly #fireAuthService = inject(FireAuthService);

  readonly #http = inject(HttpClient);
  readonly #apiUrl = inject(API_URL);

  readonly #url = this.#apiUrl + '/auth/register';

  public register$({ password, email }: Register): Observable<User> {
    return this.#http.post<User>(this.#url, { email, password });
  }
}
