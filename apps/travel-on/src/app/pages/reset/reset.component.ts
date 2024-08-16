import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  WritableSignal,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';
import { CardButtonComponent, FormServerError } from '@dom';
import {
  AuthDialogEvent,
  ResetContactFormComponent,
  ResetPasswordFormComponent,
} from '../../auth';
import { AuthStore } from '../../auth/store/store';
import { ResetService } from './reset.service';
import { DialogService } from '../../shared/dialog/dialog.service';

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
  #resetService = inject(ResetService);
  #dialogService = inject( DialogService)


  public readonly showNewPassword: Signal<boolean>;

  public readonly serverError: WritableSignal<FormServerError | undefined> =
    signal(undefined);

  mode = input.required<string>();
  oobCode = input.required<string>();

  constructor() {
    this.showNewPassword = computed(() => !!this.mode());
    // this.serverError = this.#authStore.resetError;
  }

  public onResetEmail(email: string) {
    this.#authStore.sendResetEmail({
      email,
      event: AuthDialogEvent.CONFIRM_EMAIL,
    });
  }

  public onResetPassword(newPassword: string) {
    this.#authStore.confirmPasswordReset({
      newPassword,
      oobCode: this.oobCode(),
      event: AuthDialogEvent.RESET_PASSWORD,
    });
  }
}
