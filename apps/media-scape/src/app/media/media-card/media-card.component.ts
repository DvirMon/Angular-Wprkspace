import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCard, MatCardImage } from '@angular/material/card';
import { MediaResult } from '../../shared/types';

@Component({
  selector: 'ms-media-card',
  standalone: true,
  imports: [NgOptimizedImage, ReactiveFormsModule, MatCard, MatCardImage],
  templateUrl: './media-card.component.html',
  styleUrl: './media-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaCardComponent {
  media = input.required<MediaResult>();
}
