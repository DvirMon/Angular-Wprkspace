import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  inject,
} from '@angular/core';
import {
  RegisterFormComponent,
  AuthServerError,
  EmailAndPasswordSignIn,
} from '../../auth';
import { AuthStoreService } from '../../auth/store/auth.store.service';
import { CardButtonComponent } from '../../shared/components/card-button/card-button.component';

@Component({
  selector: 'to-register-page',
  standalone: true,
  imports: [RegisterFormComponent, CardButtonComponent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPageComponent {
  #AuthStoreService = inject(AuthStoreService);

  public readonly serverError: Signal<AuthServerError | null>;

  constructor() {
    this.serverError = this.#AuthStoreService.loginServerError();
  }
  onRegister(value: EmailAndPasswordSignIn): void {
    const { email, password } = value;
    this.#AuthStoreService.register(email, password);
  }
}
