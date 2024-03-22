import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'dom-info-card',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <section class="info-card-wrapper">
      <mat-icon color="primary">{{ icon }}</mat-icon>
      <span class="info-card-text">{{ text }}</span>
    </section>
  `,

  styles: `
  
    @mixin flex-center($direction: row, $gap: 1) {
    display: flex;
    flex-direction: $direction;
    justify-content: center;
    align-items: center;
    gap: #{$gap * 8 + "px"}; 
  }

  section.info-card-wrapper {

  @include flex-center(column, 2);

    mat-icon { scale: 2; }
}

  `,
})
export class InfoCardComponent {
  @Input() text!: string;
  @Input() icon = 'attach_email'; // Default icon value if not provided
}
