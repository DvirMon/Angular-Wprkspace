import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  inject,
} from '@angular/core';
import {
  AuthServerError,
  Register,
  RegisterFormComponent
} from '../../auth';
import { AuthStore } from '../../auth/store/store';
import { CardButtonComponent } from '../../shared/components/card-button/card-button.component';

@Component({
  selector: 'to-register-page',
  standalone: true,
  imports: [RegisterFormComponent, CardButtonComponent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AuthStore],

})
export class RegisterPageComponent {
  #authStore = inject(AuthStore);

  public readonly serverError: Signal<AuthServerError | null>;

  constructor() {
    this.serverError = this.#authStore.serverError;
  }
  onRegister(value: Register): void {
    this.#authStore.register(value);
  }
}
