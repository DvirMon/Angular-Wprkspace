import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ms-pnf',
  standalone: true,
  imports: [],
  template: `<p>{{ message }}</p>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PnfComponent {
  message =
    'Apologies, an unexpected issue has occurred on our end. Please try again later';
}
