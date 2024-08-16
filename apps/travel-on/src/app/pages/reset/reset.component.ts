import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  computed,
  inject,
  input
} from '@angular/core';
import { CardButtonComponent, FormServerError } from '@dom';
import {
  AuthDialogEvent,
  ResetContactFormComponent,
  ResetPasswordFormComponent,
} from '../../auth';
import { AuthStore } from '../../auth/store/store';

@Component({
  selector: 'to-reset',
  standalone: true,
  imports: [
    ResetContactFormComponent,
    ResetPasswordFormComponent,
    CardButtonComponent,
  ],
  templateUrl: './reset.component.html',
  styleUrl: './reset.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResetPageComponent {
  #authStore = inject(AuthStore);

  // public readonly paramsSignal: Signal<Params>;

  public readonly showNewPassword: Signal<boolean>;

  public readonly serverError: Signal<FormServerError | undefined>;

  mode = input.required<string>();
  oobCode = input.required<string>();

  constructor() {

    this.showNewPassword = computed(() => !!this.mode());
    this.serverError = this.#authStore.resetError;
  }

  public onResetEmail(email: string) {
    this.#authStore.sendResetEmail({
      email,
      event: AuthDialogEvent.CONFIRM_EMAIL,
    });
  }

  public onResetPassword(newPassword: string) {
    // const oobCode = this.paramsSignal()['oobCode'];
    this.#authStore.confirmPasswordReset({
      newPassword,
      oobCode: this.oobCode(),
      event: AuthDialogEvent.RESET_PASSWORD,
    });
 
  }
}
