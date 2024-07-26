import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  Signal,
  WritableSignal,
  effect,
  inject,
  runInInjectionContext,
  signal,
} from '@angular/core';
import { Router } from '@angular/router';
import { CardButtonComponent, FormServerError } from '@dom/components';
import { LoginFormComponent, SignInEvent } from '../../auth';
import { AuthStore } from '../../auth/store/store';

@Component({
  selector: 'to-login-page',
  standalone: true,
  imports: [LoginFormComponent, CardButtonComponent],
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
      if (this.#authStore.isLoaded()) {
        this.#authStore.login();
      }
    });
  }

  public onSignIn(event: SignInEvent) {
    this.#authStore.signIn(event);
  }

  public onForgetPassword() {
    runInInjectionContext(this.#injector || inject(Injector), () => {
      inject(Router).navigateByUrl('reset');
    });
  }
}
