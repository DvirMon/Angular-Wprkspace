import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatOptionModule } from '@angular/material/core';
import { Activity } from '../places/places.model';

@Component({
  selector: 'to-option-test',
  standalone: true,
  imports: [MatOptionModule],
  template: ` <mat-option [value]="activity()">
    {{ activity().name }}
  </mat-option>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionTestComponent {
  activity = input.required<Activity>();
}
