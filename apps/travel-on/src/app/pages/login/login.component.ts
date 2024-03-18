import { CommonModule } from '@angular/common';
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
  untracked,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import {
  AuthServerError,
  EmailLinkFormComponent,
  LoginFormComponent,
  OtpLoginFormComponent,
  SignInEvent,
} from '../../auth';
import { AuthStore } from '../../auth/store/store';
import { CardButtonComponent } from '../../shared/components/card-button/card-button.component';
import { FlipCardComponent } from '../../shared/components/flip-container/flip-container.component';
import { FlipContainerService } from '../../shared/components/flip-container/flip-container.service';
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
    OtpLoginFormComponent,
    EmailLinkFormComponent,
    CardButtonComponent,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FlipContainerService],
})
export class LoginPageComponent {
  #injector = inject(Injector);
  #router = inject(Router);
  #authStore = inject(AuthStore);

  public readonly showOtp: WritableSignal<boolean>;
  public readonly serverError: Signal<AuthServerError | null>;

  constructor() {
    this.showOtp = signal(false);
    this.serverError = this.#authStore.serverError;

    effect(() => {
      if (this.#authStore.loaded()) {
        this.navigate('places/' + untracked(this.#authStore.user).userId);
      }
    });
  }

  public onSignIn(event: SignInEvent) {
    this.#authStore.signIn(event);
  }

  public onForgetPassword() {
    this.navigate('reset');
  }

  private navigate(path: string): void {
    navigate(path, this.#injector);
  }
}
