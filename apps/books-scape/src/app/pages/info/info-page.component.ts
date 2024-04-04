import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'books-scape-info-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-page.component.html',
  styleUrl: './info-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoPageComponent {}
