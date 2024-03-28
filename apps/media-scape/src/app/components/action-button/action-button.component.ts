import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'ms-action-button',
  standalone: true,
  imports: [MatButton],
  template: `<button mat-button>{{ label() }}</button>`,
  styleUrl: './action-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionButtonComponent {
  label = input.required();
  
}
