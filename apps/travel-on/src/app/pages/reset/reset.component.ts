import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  Signal,
  computed,
  inject,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Params } from '@angular/router';
import {
  ResetContactFormComponent,
  ResetPasswordFormComponent,
} from '../../auth';
import { AuthStoreService } from '../../auth/store/auth.store.service';
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
  #AuthStoreService = inject(AuthStoreService);
  #activatedRoute = inject(ActivatedRoute);

  public readonly paramsSignal: Signal<Params>;

  public readonly showNewPassword: Signal<boolean>;

  constructor() {
    this.paramsSignal = toSignal(this.#activatedRoute.queryParams, {
      initialValue: { mode: '' } as Params,
    });

    this.showNewPassword = computed(() => !!this.paramsSignal()['mode']);
  }

  public onResetEmail(email: string) {
    this.#AuthStoreService.sendResetEmail(email);
  }

  public onResetPassword(newPassword: string) {
    const oobCode = this.paramsSignal()['oobCode'];
    this.#AuthStoreService.confirmResetPassword(newPassword, oobCode);
    // this.#AuthStoreService.sendResetEmail("email");

    // runInInjectionContext(this.#injector, () => {
    //   inject(Router).navigateByUrl("reset");
    // });
  }
}
