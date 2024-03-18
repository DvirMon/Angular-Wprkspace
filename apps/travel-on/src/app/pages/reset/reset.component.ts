import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  Signal,
  computed,
  inject,
  input,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Params } from '@angular/router';
import {
  AuthDialogEvent,
  AuthEvent,
  ResetContactFormComponent,
  ResetPasswordFormComponent,
} from '../../auth';
import { AuthStoreService } from '../../auth/store/auth.store.service';
import { CardButtonComponent } from '../../shared/components/card-button/card-button.component';
import { AuthStore } from '../../auth/store/store';
import { FormServerError } from '../../shared/components';

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
  #AuthStoreService = inject(AuthStoreService);
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
    // this.showNewPassword = computed(() => !!this.paramsSignal()['mode']);

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
    // this.#AuthStoreService.confirmResetPassword(newPassword, oobCode);
    // this.#AuthStoreService.sendResetEmail("email");

    // runInInjectionContext(this.#injector, () => {
    //   inject(Router).navigateByUrl("reset");
    // });
  }
}
