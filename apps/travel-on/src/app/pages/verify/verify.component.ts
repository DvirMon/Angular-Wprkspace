import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { SignInEvent, SignInMethod } from '../../auth';
import { InfoCardComponent } from '../../shared/components/info-card/info-card.component';
import { StorageKey } from '../../shared/constants';
import { getFromStorage } from '../../shared/helpers';

@Component({
  selector: 'to-verify',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, InfoCardComponent],
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerifyPageComponent {
  protected readonly emailLink: string = window.location.href;

  @Input() email!: string;

  // AuthStoreService: AuthStoreService = inject(AuthStoreService);

  onEmailLinkSignIn(emailLink: string) {
    const email: string | null = getFromStorage(StorageKey.EMAIL);
    const event: SignInEvent = {
      method: SignInMethod.EMAIL_LINK,
      data: { email, emailLink },
    };
    console.log(event)
    // this.AuthStoreService.signIn(event);
  }
}
