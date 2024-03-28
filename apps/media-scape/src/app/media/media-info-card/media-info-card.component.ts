import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ms-media-info-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-info-card.component.html',
  styleUrl: './media-info-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaInfoCardComponent {}
