import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfirmPasswordReset, FireAuthService } from '../../auth';


@Injectable({
  providedIn: 'root',
})
export class ResetService {
  
  readonly #fireAuthService = inject(FireAuthService);


  public sendResetEmail$(email: string): Observable<void> {
    return this.#fireAuthService.sendPasswordResetEmail(email);
  }

  public confirmPasswordReset$({
    oobCode,
    newPassword,
  }: ConfirmPasswordReset): Observable<void> {
    return this.#fireAuthService.confirmPasswordReset(oobCode, newPassword);
  }
}