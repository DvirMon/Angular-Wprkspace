import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  Signal,
  computed,
  inject,
  input,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  AuthDialogEvent,
  ResetContactFormComponent,
  ResetPasswordFormComponent,
} from '../../auth';
import { AuthStore } from '../../auth/store/store';
import { FormServerError } from '../../shared/components';
import { CardButtonComponent } from '../../shared/components/card-button/card-button.component';

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
  #injector = inject(Injector);
  #authStore = inject(AuthStore);
  #activatedRoute = inject(ActivatedRoute);

  // public readonly paramsSignal: Signal<Params>;

  public readonly showNewPassword: Signal<boolean>;

  public readonly serverError: Signal<FormServerError | undefined>;

  mode = input.required<string>();
  oobCode = input.required<string>();

  constructor() {
    // this.paramsSignal = toSignal(this.#activatedRoute.queryParams, {
    //   initialValue: { mode: '' } as Params,
    // });

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
    // this.#AuthStoreService.sendResetEmail("email");

    // runInInjectionContext(this.#injector, () => {
    //   inject(Router).navigateByUrl("reset");
    // });
  }
}
