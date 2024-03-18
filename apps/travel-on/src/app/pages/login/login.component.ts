import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  Signal,
  WritableSignal,
  effect,
  inject,
  signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FormServerError } from '@dom';
import {
  LoginFormComponent,
  SignInEvent
} from '../../auth';
import { AuthStore } from '../../auth/store/store';
import { CardButtonComponent } from '../../shared/components/card-button/card-button.component';
import { FlipCardComponent } from '../../shared/components/flip-container/flip-container.component';
import { FloatingButtonComponent } from '../../shared/components/floating-button/floating-button.component';
import { navigate } from '../../shared/helpers';

@Component({
  selector: 'to-login-page',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    FloatingButtonComponent,
    FlipCardComponent,
    LoginFormComponent,
    CardButtonComponent,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  #injector = inject(Injector);
  #authStore = inject(AuthStore);

  public readonly showOtp: WritableSignal<boolean>;
  public readonly serverError: Signal<FormServerError | undefined>;

  constructor() {
    this.showOtp = signal(false);
    this.serverError = this.#authStore.loginError;

    effect(() => {
      if (this.#authStore.loaded()) {
        this.#authStore.login();
      }
    });
  }

  public onSignIn(event: SignInEvent) {
    this.#authStore.signIn(event);
  }

  public onForgetPassword() {
    navigate('reset', this.#injector);
  }
}
