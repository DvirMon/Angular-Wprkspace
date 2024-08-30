import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { exhaustMap, Subject } from 'rxjs';
import {
  AuthDialogEvent,
  AuthEvent,
  ConfirmDialogComponent,
  FirebaseError,
  mapAuthServerError,
  ResetContactFormComponent,
  ResetPasswordFormComponent,
} from '../../auth';
import { AuthStore } from '../../auth/store/store';
import { DialogService } from '../../shared/dialog/dialog.service';
import { ResetService } from './reset.service';
import { FormServerError } from '@dom/components';
import { CardButtonComponent } from '@dom/components/card-button';

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
  #dialogService = inject(DialogService);

  resetEmail = new Subject<string>();

  public readonly showNewPassword: Signal<boolean>;

  public readonly serverError: WritableSignal<FormServerError | undefined> =
    signal(undefined);

  mode = input.required<string>();
  oobCode = input.required<string>();

  constructor() {
    this.showNewPassword = computed(() => !!this.mode());

    this.resetEmail
      .asObservable()
      .pipe(
        exhaustMap((email: string) =>
          this.#resetService.sendResetEmail$(email).pipe()
        ),
        takeUntilDestroyed()
      )
      .subscribe({
        next: () =>
          this.#dialogService.openDialog(ConfirmDialogComponent, {
            email: '',
            event: AuthEvent.RESET,
          }),
        error: (err: FirebaseError) => {
          const error = mapAuthServerError(err.code);
          this.serverError.set(error);
        },
      });
  }

  public onResetEmail(email: string) {
    this.resetEmail.next(email);
  }

  public onResetPassword(newPassword: string) {
    this.#authStore.confirmPasswordReset({
      newPassword,
      oobCode: this.oobCode(),
      event: AuthDialogEvent.RESET_PASSWORD,
    });
  }
}
