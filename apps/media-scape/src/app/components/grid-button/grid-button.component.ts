import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ms-grid-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grid-button.component.html',
  styleUrl: './grid-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridButtonComponent {}
